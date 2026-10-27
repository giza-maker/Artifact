#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const BASE_URL = process.env.MARRAH_URL || 'http://127.0.0.1:5180/marrah-roadmap/';
const CHROME = process.env.CHROME_PATH || undefined;
const checks = [];

async function check(name, fn) {
  const started = Date.now();
  await fn();
  checks.push({ name, ms: Date.now() - started });
  process.stdout.write(`PASS ${name}\n`);
}

async function loaded(page, url = BASE_URL) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.locator('#audience').waitFor();
}

async function optionValues(locator) {
  return locator.locator('option').evaluateAll(options => options.map(option => option.value));
}

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, acceptDownloads: true });
  await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: new URL(BASE_URL).origin });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
  page.on('pageerror', error => pageErrors.push(error.message));

  try {
    await loaded(page);

    await check('English/Arabic toggle and RTL', async () => {
      assert.equal(await page.locator('html').getAttribute('lang'), 'en');
      assert.equal(await page.locator('html').getAttribute('dir'), 'ltr');
      await page.locator('#language').click();
      assert.equal(await page.locator('html').getAttribute('lang'), 'ar');
      assert.equal(await page.locator('html').getAttribute('dir'), 'rtl');
      assert.match(await page.locator('#hero-title').innerText(), /كل تسليم/);
      await page.locator('#language').click();
      assert.equal(await page.locator('html').getAttribute('dir'), 'ltr');
    });

    await check('all audience views', async () => {
      const expected = { investor: 'For investors', partner: 'For operating partners', builder: 'For collaborators' };
      assert.deepEqual(await optionValues(page.locator('#audience')), Object.keys(expected));
      for (const [value, heading] of Object.entries(expected)) {
        await page.locator('#audience').selectOption(value);
        await assertText(page.locator('.reading-guide h3'), heading);
        assert.equal(await page.locator('#audience').inputValue(), value);
      }
    });

    await check('all six countries', async () => {
      const values = ['sa', 'ae', 'qa', 'om', 'bh', 'kw'];
      assert.deepEqual(await optionValues(page.locator('#country')), values);
      for (const value of values) {
        await page.locator('#country').selectOption(value);
        assert.equal(await page.locator('#country').inputValue(), value);
        assert.ok((await page.locator('#country-panel h3').innerText()).trim());
        assert.equal(new URL(page.url()).searchParams.get('country'), value);
      }
    });

    await check('all six sectors', async () => {
      const values = ['qsr', 'retail', 'carwash', 'beauty', 'fitness', 'clinics'];
      assert.deepEqual(await optionValues(page.locator('#sector')), values);
      for (const value of values) {
        await page.locator('#sector').selectOption(value);
        assert.equal(await page.locator('#sector').inputValue(), value);
        assert.ok((await page.locator('#sector-panel h3').innerText()).trim());
        assert.equal(new URL(page.url()).searchParams.get('sector'), value);
      }
    });

    await check('four journey steps', async () => {
      const headings = ['The receipt opens the door.', 'Clear status, credible timing.', 'A calmer handoff.', 'A reason to return.'];
      for (let index = 0; index < headings.length; index++) {
        await page.locator(`[data-step="${index}"]`).click();
        await assertText(page.locator('#journey-body h3'), headings[index]);
        assert.equal(await page.locator(`[data-step="${index}"]`).getAttribute('aria-pressed'), 'true');
      }
    });

    await check('Base/Downside exact outputs', async () => {
      await page.locator('[data-case="base"]').click();
      assert.deepEqual(await metricValues(page), ['600 AED', '328 AED', '79.0', '40', '19,839 AED', '326,091 AED', 'Pickup-only diagnostic: -532.50 AED / month']);
      await page.locator('[data-case="downside"]').click();
      assert.deepEqual(await metricValues(page), ['-951 AED', '206 AED', '95.0', '64', '7,614 AED', '589,325 AED', 'Pickup-only diagnostic: -747.00 AED / month']);
      await page.locator('[data-case="base"]').click();
    });

    await check('seven model inputs accept zero/max and reject invalid', async () => {
      const inputs = page.locator('#model-form input[type="number"]');
      assert.equal(await inputs.count(), 7);
      for (let index = 0; index < 7; index++) {
        const input = inputs.nth(index);
        const max = Number(await input.getAttribute('max'));
        await input.fill('0');
        assert.equal(await input.getAttribute('aria-invalid'), 'false');
        await input.fill(String(max));
        assert.equal(await input.getAttribute('aria-invalid'), 'false');
        const before = await page.locator('#model-results').innerText();
        await input.fill(String(max + 1));
        assert.equal(await input.getAttribute('aria-invalid'), 'true');
        assert.match(await page.locator('#model-error').innerText(), /Enter a number from/);
        assert.equal(await page.locator('#model-results').innerText(), before);
        await page.locator('#reset-model').click();
      }
      const first = inputs.first();
      for (const hostile of ['1e309', '']) {
        await first.fill(hostile);
        assert.equal(await first.getAttribute('aria-invalid'), 'true');
        const results = (await page.locator('#model-results').innerText()).toLowerCase();
        assert.ok(!results.includes('infinity') && !results.includes('nan'), results);
      }
      await page.locator('#reset-model').click();
    });

    await check('share URL round trip', async () => {
      await page.locator('#audience').selectOption('partner');
      await page.locator('#country').selectOption('kw');
      await page.locator('#sector').selectOption('beauty');
      await page.locator('[data-case="downside"]').click();
      await page.locator('#m-monthlyFee').fill('777');
      await page.locator('#language').click();
      await page.locator('#share').click();
      const fallback = await page.locator('#share-link').isVisible().catch(() => false);
      const shared = fallback
        ? await page.locator('#share-link').inputValue()
        : await page.evaluate(() => navigator.clipboard.readText());
      if (!fallback) await assertText(page.locator('#share'), 'نُسخ الرابط');
      assert.equal(shared, page.url());
      if (fallback) await page.keyboard.press('Escape');
      const roundTrip = await context.newPage();
      await loaded(roundTrip, shared);
      assert.equal(await roundTrip.locator('html').getAttribute('dir'), 'rtl');
      assert.equal(await roundTrip.locator('#audience').inputValue(), 'partner');
      assert.equal(await roundTrip.locator('#country').inputValue(), 'kw');
      assert.equal(await roundTrip.locator('#sector').inputValue(), 'beauty');
      assert.equal(await roundTrip.locator('[data-case="downside"]').getAttribute('aria-pressed'), 'true');
      assert.equal(await roundTrip.locator('#m-monthlyFee').inputValue(), '777');
      await roundTrip.close();
      await page.locator('#language').click();
    });

    await check('source modal Escape and focus restore', async () => {
      const trigger = page.locator('.citation').first();
      await trigger.scrollIntoViewIfNeeded();
      await trigger.click();
      assert.equal(await page.locator('#source-dialog').evaluate(dialog => dialog.open), true);
      assert.equal(await page.evaluate(() => document.activeElement.id), 'close-dialog');
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('#source-dialog').evaluate(dialog => dialog.open), false);
      assert.equal(await trigger.evaluate(element => element === document.activeElement), true);
    });

    await check('source search, more, and empty state', async () => {
      const search = page.locator('#source-search');
      await search.fill('');
      assert.equal(await page.locator('#source-list .source-entry').count(), 8);
      assert.equal(await page.locator('#more-sources').isVisible(), true);
      await page.locator('#more-sources').click();
      assert.equal(await page.locator('#source-list .source-entry').count(), 24);
      await search.fill('Apple');
      assert.ok(await page.locator('#source-list .source-entry').count() > 0);
      await search.fill('no-source-can-match-this-token');
      await assertText(page.locator('.source-empty'), 'No matching sources.');
      await search.fill('');
    });

    await check('heterogeneous source claims remain searchable', async () => {
      await page.locator('#source-search').fill('in-window utility');
      const text = await page.locator('#source-list').innerText();
      assert.match(text, /P02/);
      assert.match(text, /Effective 2026-10-01/);
      await page.locator('#source-search').fill('');
    });

    await check('archived rate cards retain visible provenance', async () => {
      await page.locator('#source-search').fill('A04');
      const link = page.locator('#source-list a[download]');
      assert.equal(await link.count(), 1);
      const response = await page.request.get(new URL(await link.getAttribute('href'), BASE_URL).href);
      assert.equal(response.status(), 200);
      assert.ok((await response.body()).length > 1000);
      await page.locator('#source-search').fill('');
    });

    await check('backlog scope, priority, search, more, and empty state', async () => {
      const backlogBox = page.locator('details.backlog');
      await backlogBox.locator(':scope > summary').click();
      assert.equal(await page.locator('#backlog-results .backlog-item').count(), 8);
      await page.locator('#more-backlog').click();
      assert.equal(await page.locator('#backlog-results .backlog-item').count(), 20);
      await page.locator('#backlog-scope').selectOption('extension');
      assert.match(await page.locator('#backlog-count').innerText(), /^24 matching items/);
      await page.locator('#backlog-priority').selectOption('P0');
      const filtered = Number((await page.locator('#backlog-count').innerText()).match(/^\d+/)[0]);
      assert.ok(filtered > 0 && filtered < 24);
      await page.locator('#backlog-search').fill('country');
      assert.ok(Number((await page.locator('#backlog-count').innerText()).match(/^\d+/)[0]) > 0);
      await page.locator('#backlog-search').fill('no-backlog-can-match-this-token');
      await assertText(page.locator('#backlog-results'), 'No matching items.');
      await page.locator('#backlog-scope').selectOption('all');
      await page.locator('#backlog-priority').selectOption('all');
      await page.locator('#backlog-search').fill('');
    });

    await check('all three static downloads return HTTP 200', async () => {
      const urls = [
        'downloads/gulf-production-roadmap.pdf',
        'downloads/uae-worked-example-economics.xlsx',
        'downloads/gulf-production-backbone.zip',
      ];
      for (const relative of urls) {
        const response = await context.request.get(new URL(relative, BASE_URL).href);
        assert.equal(response.status(), 200, relative);
        assert.ok((await response.body()).length > 0, relative);
      }
    });

    await check('three audience brief downloads', async () => {
      for (const id of ['investor', 'partner', 'builder']) {
        const event = page.waitForEvent('download');
        await page.locator(`[data-brief="${id}"]`).click();
        const download = await event;
        assert.equal(download.suggestedFilename(), `marrah-${id}-brief-en.txt`);
        assert.equal(await download.failure(), null);
        await download.delete();
      }
    });

    await check('print action', async () => {
      await page.evaluate(() => {
        window.__printCalled = false;
        window.print = () => { window.__printCalled = true; };
      });
      await page.locator('#print').click();
      assert.equal(await page.evaluate(() => window.__printCalled), true);
    });

    await check('desktop 1440 has no document horizontal overflow', async () => {
      const fit = await page.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
      }));
      assert.equal(fit.clientWidth, 1440);
      assert.ok(fit.scrollWidth <= fit.clientWidth, JSON.stringify(fit));
    });

    await check('mobile 375 has no document horizontal overflow', async () => {
      const mobile = await browser.newContext({ viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true });
      const mobilePage = await mobile.newPage();
      await loaded(mobilePage);
      const fit = await mobilePage.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
      }));
      assert.equal(fit.clientWidth, 375);
      assert.ok(fit.scrollWidth <= fit.clientWidth, JSON.stringify(fit));
      await mobile.close();
    });

    await check('404 and network-error data fallback keeps no-JS links', async () => {
      for (const failure of ['404', 'abort']) {
        const failureContext = await browser.newContext({ viewport: { width: 900, height: 700 } });
        const failurePage = await failureContext.newPage();
        await failurePage.route('**/data/research.json', route => failure === '404'
          ? route.fulfill({ status: 404, contentType: 'application/json', body: '{}' })
          : route.abort('failed'));
        await failurePage.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
        await failurePage.getByText('The interactive brief could not load.').waitFor();
        const links = await failurePage.locator('#app a').evaluateAll(anchors => anchors.map(anchor => anchor.getAttribute('href')));
        assert.deepEqual(links, ['downloads/gulf-production-roadmap.pdf', 'downloads/gulf-production-backbone.zip']);
        await failureContext.close();
      }
    });

    await check('no unexpected console or page errors on main flow', async () => {
      assert.deepEqual(pageErrors, []);
      assert.deepEqual(consoleErrors, []);
    });
  } finally {
    await context.close();
    await browser.close();
  }

  process.stdout.write(`\n${checks.length} checks passed in ${checks.reduce((sum, item) => sum + item.ms, 0)}ms\n`);
})().catch(error => {
  console.error(`FAIL ${error.stack || error}`);
  process.exitCode = 1;
});

async function assertText(locator, expected) {
  assert.ok((await locator.innerText()).includes(expected), `Expected ${JSON.stringify(expected)} in ${JSON.stringify(await locator.innerText())}`);
}

async function metricValues(page) {
  return page.locator('#model-results strong').allInnerTexts().then(values => values.map(value => value.trim()));
}
