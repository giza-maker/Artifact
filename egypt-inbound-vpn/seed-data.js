/* Canonical seeds embedded verbatim for file:// compatibility. Regenerate after changing JSON. */
window.NILE_SEEDS = {"research":{
  "meta": {
    "project": "Egyptian Inbound VPN — Diaspora Banking, Government & Streaming Access Engine",
    "date": "2026-10-20",
    "owner": "Ahmed Aljazayeerly",
    "verdict": "GO — Paid, zero-ad, Egypt-only specialist VPN built on a Two-Tier Hybrid Architecture (Marseille 10G Virtual Hub + Cairo 1:1 Sticky ISP Relays) with AmneziaWG + WSS 443 Stealth.",
    "diasporaTam": {
      "totalEgyptiansAbroad": 14000000,
      "saudiArabia": 1470000,
      "kuwait": 644000,
      "uae": 980000,
      "qatarBahrainOman": 420000,
      "europeUk": 650000,
      "northAmerica": 520000
    }
  },
  "stage1UseCases": [
    {
      "rank": 1,
      "id": "gov_portals",
      "title": "Egyptian Government & Civil Portals",
      "arabicTitle": "بوابة مصر الرقمية والخدمات الحكومية",
      "services": [
        { "name": "Digital Egypt Portal", "domain": "digital.gov.eg", "category": "Civil Registry, Ration,Real Estate, Licensing" },
        { "name": "Public Prosecution Traffic Fines", "domain": "ppo.gov.eg", "category": "Vehicle Fines & Violations Inquiry/Payment" },
        { "name": "Ministry of Interior", "domain": "moi.gov.eg", "category": "Passports, National ID, Criminal Record" },
        { "name": "Social Insurance (NOSI)", "domain": "nosi.gov.eg", "category": "Pensions & Contribution Records" },
        { "name": "Egyptian Tax Authority", "domain": "eta.gov.eg", "category": "e-Invoice & Tax Filings" }
      ],
      "blockingMechanism": "Hard national edge firewall (WAF) drops all non-Egyptian IPv4/IPv6 ranges (HTTP 403 / TCP timeout) and blacklists known commercial VPN datacenter ASNs (M247, Choopa, DataCamp).",
      "ipAloneUnlocks": "YES (100%)",
      "nonIpDependencies": "Requires Egyptian National ID and an active roaming Egyptian SIM for SMS OTP verification.",
      "ourSolution": "Routed via clean AFRINIC Egyptian IP (or Tier 2 Cairo allowlisted relay). Verified every 15 minutes by synthetic probes."
    },
    {
      "rank": 2,
      "id": "banking_fintech",
      "title": "Egyptian Banking & InstaPay",
      "arabicTitle": "البنوك المصرية وإنستا باي من الخارج",
      "services": [
        { "name": "National Bank of Egypt (NBE)", "domain": "alahlynet.com.eg", "category": "Al Ahly Net & Al Ahly Mobile" },
        { "name": "Banque Misr", "domain": "banquemisr.com", "category": "BM Online Retail & Corporate" },
        { "name": "CIB Egypt", "domain": "cibeg.com", "category": "CIB Mobile Banking" },
        { "name": "InstaPay Egypt", "domain": "instapay.eg", "category": "CBE Instant Payment Network" },
        { "name": "QNB Alahli / AlexBank / Fawry", "domain": "myfawry.com", "category": "Cards, Deposits & Bill Settlement" }
      ],
      "blockingMechanism": "Foreign IPs are blocked or trigger security freezes. Shared commercial VPN IPs trigger velocity anti-fraud lockouts because 100+ users log into the bank from the same IP. Dual-stack Gulf 5G networks also leak real Saudi/UAE IPv6 addresses.",
      "ipAloneUnlocks": "YES — With 1:1 Dedicated Sticky IP",
      "nonIpDependencies": "Initial device binding on InstaPay/bank apps requires sending/receiving an SMS on the user's roaming Egyptian SIM; device GPS permission should be disabled for the banking app.",
      "ourSolution": "Banking Tier ($8.99/mo) assigns a 1:1 Dedicated Sticky Cairo ISP IP exclusive to one user, enforces a strict ::/0 IPv6 sinkhole, and runs a 1-second Pre-Flight Banking Readiness Check."
    },
    {
      "rank": 3,
      "id": "telecom_family",
      "title": "Telecom Self-Service & Family Errands",
      "arabicTitle": "شحن الخطوط وفواتير الإنترنت للأهل",
      "services": [
        { "name": "My WE (Telecom Egypt)", "domain": "te.eg", "category": "Home Fiber/ADSL Renewal & Landline Bills" },
        { "name": "Ana Vodafone", "domain": "vodafone.com.eg", "category": "Roaming SIM Recharge & Vodafone Cash" },
        { "name": "My Orange Egypt", "domain": "orange.eg", "category": "Line Management & Top-Up" },
        { "name": "My e& Egypt", "domain": "etisalat.eg", "category": "Line Management & Top-Up" }
      ],
      "blockingMechanism": "Cloudflare and operator WAFs block or challenge non-Egyptian IPs on payment and self-care APIs.",
      "ipAloneUnlocks": "YES (100%)",
      "nonIpDependencies": "Strategic loop: Expats must recharge their Egyptian SIM every 60–90 days so the line is not deactivated while roaming (which would cut off their bank OTPs).",
      "ourSolution": "Standard ($4.99/mo) or Banking Tier unlocks te.eg and carrier apps immediately with in-tunnel Egyptian DNS."
    },
    {
      "rank": 4,
      "id": "streaming_sports",
      "title": "Egyptian Streaming, Ramadan & Live Football",
      "arabicTitle": "مسلسلات رمضان والدوري المصري لايف",
      "services": [
        { "name": "Watch iT", "domain": "watchit.com", "category": "Ramadan Originals, Egyptian Movies & Live TV" },
        { "name": "ON Time Sports Live", "domain": "ontimesports.com", "category": "Egyptian Premier League (Ahly / Zamalek)" },
        { "name": "Shahid VIP (Egypt Catalog)", "domain": "shahid.mbc.net", "category": "Geo-specific series & channels" },
        { "name": "DMC / CBC / Al Hayah Live", "domain": "dmc.com.eg", "category": "Domestic satellite live streams" }
      ],
      "blockingMechanism": "CDNs geo-fence domestic football rights and Ramadan libraries to Egyptian IPs; cheap local Cairo VPS nodes choke on HD video bandwidth.",
      "ipAloneUnlocks": "YES (100%)",
      "nonIpDependencies": "Paid streaming tiers may check Egyptian payment card for EGP pricing, though existing accounts stream immediately once on an Egyptian IP.",
      "ourSolution": "Tier 1 Marseille 10Gbps Virtual Egypt Hub (28ms subsea cable to Alexandria) delivers ≥15 Mbps per user for buffer-free 1080p60 playback at 65% lower bandwidth cost."
    },
    {
      "rank": 5,
      "id": "price_arbitrage",
      "title": "Regional Price Arbitrage on Global Digital Goods",
      "arabicTitle": "فرق أسعار الاشتراكات العالمية",
      "services": [
        { "name": "Netflix / Spotify / YouTube Premium", "domain": "netflix.com", "category": "Global Subscriptions" },
        { "name": "Steam / PlayStation / Xbox Store", "domain": "store.steampowered.com", "category": "Gaming Stores" }
      ],
      "blockingMechanism": "Payment processors verify credit/debit card BIN country against Egypt and lock store account regions.",
      "ipAloneUnlocks": "RARELY (Requires Egyptian EGP Bank Card)",
      "nonIpDependencies": "Only works if the expat already holds a domestic Egyptian bank card. Promoting arbitrage violates Apple/Google Store ToS.",
      "ourSolution": "Strictly excluded from brand positioning and store listing copy to protect store compliance and keep refund rates < 5%."
    }
  ],
  "primaryCompetitorTeardown": {
    "appName": "VPN Egypt - Unblock VPN Secure",
    "packageName": "free.vpnegypt.turbo.secure.tunnel.unblock.proxy",
    "version": "3.8.7.1",
    "developer": "Proxy Master & Turbo VPN (SWS Software Enterprise, Ipoh, Perak, Malaysia)",
    "installs": "1,000,000+",
    "rating": 3.8,
    "reviewsCount": 54900,
    "lastUpdated": "2026-08-26",
    "clonePortfolio": [
      "VPN Egypt - Unblock VPN Secure",
      "VPN Korea - Secure VPN Proxy",
      "VPN Indonesia - Fast Super VPN",
      "VPN Malaysia - Secure Fast VPN",
      "VPN India - Unblock Proxy VPN",
      "VPN Germany - Fast Safe VPN",
      "VPN Canada - Fast Secure VPN",
      "VPN Russia - Unblock VPN Proxy",
      "VPN Japan - Proxy Secure VPN",
      "VPN Vietnam - Super VPN Shield",
      "VPN Nigeria - Turbo Master VPN",
      "VPN USA - Unblock Proxy",
      "VPN UK - Fast Secure Proxy",
      "VPN UAE - Unblock Proxy",
      "VPN Brazil - Fast Proxy"
    ],
    "technicalForensics": {
      "vpnEngine": "Legacy de.blinkt.openvpn (ics-openvpn) wrapper using static .ovpn TCP/UDP configs fetched over remote JSON API. No WireGuard, no AmneziaWG, no DPI obfuscation.",
      "serverReality": "1–2 overloaded low-end Cairo VPS nodes + automatic silent fallback to European datacenter IPs (M247 / CloudSigma / Choopa) shared by 1,500+ concurrent free users.",
      "ipqsFraudScore": "85–100 (Flagged vpn: true, proxy: true, high abuse velocity)",
      "permissionsCount": 14,
      "dangerousPermissions": [
        "android.permission.READ_PHONE_STATE (used for device fingerprinting)",
        "com.google.android.gms.permission.AD_ID",
        "android.permission.ACCESS_WIFI_STATE",
        "android.permission.FOREGROUND_SERVICE",
        "android.permission.WAKE_LOCK"
      ],
      "embeddedTrackersAndAds": [
        "Google AdMob",
        "Meta Audience Network (Facebook Ads)",
        "AppLovin MAX Mediation",
        "Unity Ads",
        "IronSource",
        "Firebase Analytics & Crashlytics"
      ],
      "uxFailurePattern": "Forces unskippable video interstitial ads on app launch, before connect, after connect, on server list open, and on disconnect (~30 forced ads in 5 minutes). Paid IAP users report ads still persist.",
      "leakFailures": [
        "Dual-Stack IPv6 Leak: Does not sinkhole ::/0 IPv6 routes, exposing the user's real Saudi (STC) or Emirati (e&) IPv6 address to Egyptian bank apps while connected.",
        "No enforced system-wide kill switch on connection drop.",
        "Public DNS fallback leaks outside the tunnel."
      ],
      "iosPresence": "None — Cannot pass Apple App Store Guideline 5.4 due to third-party ad trackers and individual/clone account restrictions."
    }
  },
  "rivalComparisonMatrix": [
    {
      "name": "VPN Egypt (SWS Clone)",
      "model": "Free Adware + Broken IAP",
      "serverType": "Overloaded VPS + EU Fallbacks",
      "protocol": "Legacy OpenVPN (Blocked by DPI)",
      "ipReputation": "IPQS 85–100 (Burned)",
      "bankingUnlock": "Fails / Triggers Freeze",
      "govUnlock": "Fails / WAF Blocked",
      "streamingSpeed": "1–2 Mbps (Buffers at 240p)",
      "adsAndTrackers": "6 Ad/Tracker SDKs (~30 ads/5m)",
      "overallUnlockScore": 25
    },
    {
      "name": "Hola VPN",
      "model": "Free P2P Botnet / Freemium",
      "serverType": "Peer Mobile/Home Devices in Egypt",
      "protocol": "HTTP/SOCKS Split Proxy (Not Full VPN)",
      "ipReputation": "Mixed Residential / Botnet Flagged",
      "bankingUnlock": "Dangerous (Traffic exits on stranger's phone)",
      "govUnlock": "Inconsistent / Drops Mid-Form",
      "streamingSpeed": "Highly Unstable Peer Upload",
      "adsAndTrackers": "Heavy Telemetry + Bandwidth Harvesting",
      "overallUnlockScore": 45
    },
    {
      "name": "ExpressVPN / Surfshark / CyberGhost",
      "model": "Paid Global Bundle ($10–$12.95/mo)",
      "serverType": "100% Virtual Egypt (Physically in Europe)",
      "protocol": "Lightway / WireGuard (Shared IPs)",
      "ipReputation": "IPQS 65–85 (Known Commercial VPN ASN)",
      "bankingUnlock": "Partial (Shared IP Velocity Lockouts)",
      "govUnlock": "Frequently Blocked by digital.gov.eg WAF",
      "streamingSpeed": "Fast (50+ Mbps from EU)",
      "adsAndTrackers": "Clean First-Party Only",
      "overallUnlockScore": 58
    },
    {
      "name": "Proton VPN / Planet VPN",
      "model": "Freemium (Egypt Locked to Paid Tier)",
      "serverType": "Datacenter Cairo / Virtual Nodes",
      "protocol": "WireGuard / OpenVPN / Stealth",
      "ipReputation": "IPQS 70–85 (Datacenter ASN)",
      "bankingUnlock": "Partial (Shared Datacenter IPs)",
      "govUnlock": "Mixed",
      "streamingSpeed": "Moderate–Fast",
      "adsAndTrackers": "Clean (Proton) / Ad-supported free (Planet)",
      "overallUnlockScore": 55
    },
    {
      "name": "Our Product (Standard & Banking Tiers)",
      "model": "Paid Specialist ($4.99 Std / $8.99 Sticky 1:1)",
      "serverType": "Two-Tier Hybrid: Marseille 10G + Cairo ISP Relays",
      "protocol": "AmneziaWG (UDP Obfuscated) + WSS TLS 443",
      "ipReputation": "IPQS < 25 (vpn: false on Banking 1:1 IPs)",
      "bankingUnlock": "Verified Pass (1:1 Sticky Cairo IP + IPv6 Block)",
      "govUnlock": "Verified Pass Every 15m (Allowlisted Relay)",
      "streamingSpeed": "≥ 15 Mbps Guaranteed (Marseille 10G Hub)",
      "adsAndTrackers": "0 Ads · 0 Trackers · MASA Level 2 Ready",
      "overallUnlockScore": 95
    }
  ]
},"architecture":{
  "lockedArchitectureDecision": {
    "topologyName": "Two-Tier Hybrid Network (Marseille 10G Virtual Hub + Cairo Sticky 1:1 ISP Relays)",
    "ownerDecision": "Locked in by owner during strategy review. Combines legal immunity from Egypt Law 175/2018 for general/streaming traffic with physical Cairo ISP ASN legitimacy for banking and .gov.eg.",
    "layers": [
      {
        "layerId": "client_edge",
        "title": "Layer 1 · Diaspora Mobile Client (Android Kotlin & iOS Swift)",
        "protocols": [
          "Primary: AmneziaWG (obfuscated WireGuard with randomized magic headers H1–H4 and junk packet padding Jc/Jmin/Jmax)",
          "Fallback: WireGuard-over-WSS (TLS TCP Port 443 WebSocket tunnel, auto-triggered if UDP handshake fails within 3.5 seconds)"
        ],
        "clientGuards": [
          "Strict ::/0 IPv6 Sinkhole (prevents dual-stack Gulf 5G networks like STC, Mobily, e&, du from leaking real Saudi/UAE IPv6 addresses)",
          "Encrypted In-Tunnel DNS (forces Egyptian DNS resolution inside the tunnel)",
          "1-Tap 'Egyptian Apps Only' Split-Tunnel Preset (routes NBE, CIB, Banque Misr, InstaPay, Digital Egypt, Watch iT, My WE, Ana Vodafone via Egypt while keeping WhatsApp, Uber/Careem, and local Gulf bank apps on domestic internet)",
          "Pre-Flight Banking Readiness Check (1-second check before launching a bank app verifying tunnel state, sticky IP match, IPv6 block, and warning if GPS permission is active)"
        ]
      },
      {
        "layerId": "tier1_marseille",
        "title": "Layer 2 · Tier 1 Virtual Egypt Hub (Marseille MRS1 / Frankfurt FRA1)",
        "purpose": "Handles 100% of Standard Tier traffic, high-bandwidth video streaming (Watch iT, ON Time Sports, Shahid Egypt), and general web browsing.",
        "specs": {
          "capacity": "10 Gbps Unmetered Bare-Metal / Cloud VMs",
          "subseaCableLatency": "28–32 ms from Marseille to Alexandria/Cairo via TE North & SEA-ME-WE-4/5 submarine cables",
          "ipSupply": "Leased clean /24 AFRINIC/RIPE IPv4 subnet registered with an RFC 8805 GeoFeed (country: EG, city: Cairo) updated across MaxMind, ipinfo, IP2Location, and DB-IP",
          "legalAdvantage": "Zero physical servers inside Egypt for general internet browsing — completely outside NTRA and Egypt Law 175 of 2018 territorial jurisdiction"
        }
      },
      {
        "layerId": "tier2_cairo",
        "title": "Layer 3 · Tier 2 Cairo Clean Egress Relays (Sticky 1:1 Banking & Gov IPs)",
        "purpose": "Exclusively serves Banking Tier ($8.99/mo) subscribers and whitelisted Egyptian banking / .gov.eg destinations.",
        "specs": {
          "candidateProviders": [
            "Raya Data Center Cairo (AS24835)",
            "Link Data Center Cairo (AS24863)",
            "Telecom Egypt WE Business Static Subnets (AS8452)",
            "Vodafone Egypt Business Static Subnets (AS36935)",
            "LightNode Cairo / IT EGY (Phase 0–1 VPS validation)"
          ],
          "ipPinning": "1 User : 1 Dedicated Static Egyptian IP pinned in the offshore PostgreSQL database. Never shared with any other subscriber.",
          "disklessRamMode": "Runs entirely in RAM (tmpfs) with zero local disk persistence and zero subscriber PII on the node.",
          "nftablesAllowlist": "Kernel nftables firewall strictly permits outbound HTTPS/TCP/UDP only to verified Egyptian bank ASNs and .gov.eg / .com.eg CIDRs. Blocks all general web browsing, SMTP mail ports (25, 465, 587), and BitTorrent/P2P."
        }
      },
      {
        "layerId": "control_plane",
        "title": "Layer 4 · Offshore Control Plane & 15-Minute Synthetic Status Engine",
        "purpose": "Manages accounts, RevenueCat subscriptions, sticky IP allocation, live service status, and automated IP rotation.",
        "specs": {
          "jurisdiction": "Hosted in EU/US under an Offshore Corporate Entity (US Delaware LLC, UK Ltd, or UAE Dubai FZCO)",
          "syntheticProbes": "Playwright / HTTP synthetic checks run every 15 minutes through each exit IP against digital.gov.eg, ppo.gov.eg, alahlynet.com.eg, banquemisr.com, cibeg.com, watchit.com, and te.eg",
          "reservePool": "Maintains 25% warm spare IPs for instant automated rotation or 1-tap user self-swap"
        }
      }
    ]
  },
  "corporateAndStoreCompliance": {
    "offshoreEntityRequirement": {
      "recommendedStructures": [
        "US Delaware or Wyoming LLC (via Stripe Atlas / Firstbase / Doola)",
        "UK Private Limited Company (Ltd)",
        "UAE Dubai Free Zone Company (FZCO)"
      ],
      "dunsNumberRequired": true,
      "whyMandatory": [
        "Apple App Store Guideline 5.4 strictly prohibits individual developer accounts from submitting VPN apps using NEVPNManager / NEPacketTunnelProvider. Only verified Organization accounts are accepted.",
        "Google Play VpnService policy requires an Organization developer account with verified business identity, a completed VpnService declaration form, and a video walkthrough.",
        "Creates a clean legal and jurisdictional separation between the offshore software publisher and Egyptian telecom laws."
      ]
    },
    "googlePlayVerifiedBadge": {
      "badgeName": "Google Play 'Verified' VPN Shield",
      "requirements": [
        "MASA Level 2 (Mobile Application Security Assessment) independent lab audit",
        "At least 10,000 installs and 250 reviews on Google Play",
        "At least 90 days live on Google Play with zero policy strikes",
        "Transparent Data Safety section declaring encryption and zero data selling"
      ]
    },
    "storeSafeCopyRules": [
      {
        "avoid": "Pay cheap Egyptian prices on Netflix, Spotify & Steam",
        "useInstead": "Access your Egyptian digital accounts and local services while living abroad",
        "reason": "Promoting regional price arbitrage violates Apple & Google ToS and causes high refund churn from foreign cardholders."
      },
      {
        "avoid": "Bypass Egyptian bank security and fraud checks",
        "useInstead": "A dedicated, stable Egyptian IP address recognized by your bank so your account isn't locked abroad",
        "reason": "Positions the app as a legitimate financial continuity & security tool for expats."
      },
      {
        "avoid": "Unblock any restricted streaming site worldwide",
        "useInstead": "Watch Egyptian live TV, Ramadan series, and domestic football smoothly from anywhere",
        "reason": "Keeps positioning focused on home-country diaspora access."
      },
      {
        "avoid": "100% anonymous darknet no-logs proxy",
        "useInstead": "Zero ad trackers, never sells your data, encrypted tunnel with clear privacy disclosures",
        "reason": "Satisfies Apple Guideline 5.4 and Google Play transparency rules."
      }
    ]
  },
  "egyptianLegalQuestions": [
    {
      "id": "Q1",
      "statute": "Law No. 175 of 2018 (Anti-Cyber and IT Crimes Law), Articles 1, 2 & 33",
      "question": "Does operating destination-allowlisted, stateless routing relays inside Cairo datacenters classify a foreign software company as a 'Telecom/IT Service Provider' required to retain user traffic logs for 180 days (under penalty of EGP 5–20M fines)?",
      "architecturalMitigation": "General internet browsing and streaming exit at our Marseille Virtual Egypt hub in France. Cairo Tier 2 nodes run diskless in RAM (tmpfs) with zero subscriber PII and enforce kernel nftables rules forwarding only encrypted HTTPS packets to whitelisted Egyptian bank ASNs and .gov.eg CIDRs."
    },
    {
      "id": "Q2",
      "statute": "Telecom Regulation Law No. 10 of 2003 (NTRA)",
      "question": "Does terminating obfuscated AmneziaWG/WSS tunnels on rented servers in Cairo require a separate NTRA permit, or is the Tier III Cairo hosting provider's existing license sufficient?",
      "architecturalMitigation": "Contract exclusively with NTRA-licensed enterprise datacenters (Raya Data Center, Link Data Center, Telecom Egypt) and use standard HTTPS/TLS port 443 and UDP relays."
    },
    {
      "id": "Q3",
      "statute": "Jurisdiction & Conflict of Laws",
      "question": "When the contracting company is a foreign entity (US LLC / UK Ltd / UAE FZCO) with no Egyptian office, employees, or local bank accounts, how do legal obligations split between the foreign entity and the local Cairo host?",
      "architecturalMitigation": "All user authentication, billing (RevenueCat), and account databases are hosted strictly offshore in EU/US cloud regions."
    },
    {
      "id": "Q4",
      "statute": "Personal Data Protection Law No. 151 of 2020",
      "question": "How does Law 151 of 2020 treat subscriber account data if zero personal data is collected, processed, or stored on servers inside Egypt?",
      "architecturalMitigation": "Cairo relays never receive user emails, names, or billing identifiers—only rotating WireGuard public keys mapped in the offshore control plane."
    },
    {
      "id": "Q5",
      "statute": "Consumer Protection & Store Privacy Policies",
      "question": "What exact privacy policy disclosure satisfies both Apple/Google rules and Egyptian counsel without creating false-advertising liability?",
      "architecturalMitigation": "State clearly that we do not log browsing activity, never sell data to third parties, and use automated firewall rules to block network abuse."
    },
    {
      "id": "Q6",
      "statute": "Abuse & Law Enforcement Inquiry Protocol",
      "question": "What is the standard procedure when a Cairo datacenter receives an inquiry regarding a leased static IP, and how does our destination allowlist eliminate abuse risk?",
      "architecturalMitigation": "By blocking SMTP mail ports, BitTorrent, and all non-whitelisted destinations on Cairo relays, third-party spam or cybercrime cannot occur through our Egyptian IPs."
    },
    {
      "id": "Q7",
      "statute": "B2B ISP Static IP Leasing Terms",
      "question": "Does leasing business static IP subnets from Telecom Egypt (WE), Vodafone, or Orange for dedicated 1:1 banking access require specific B2B rider clauses?",
      "architecturalMitigation": "Launch Phase 0–1 on Cairo enterprise cloud VPS + Marseille Virtual Egypt; add direct B2B ISP subnets in Phase 2–3 following counsel sign-off."
    }
  ],
  "stage5PerformanceBenchmarks": [
    { "metric": "Round-Trip Time (Median Peak 20:00–23:00 Cairo)", "gulfTarget": "≤ 75 ms", "europeTarget": "≤ 80 ms", "usTarget": "≤ 185 ms", "tool": "Hourly 100-packet mtr from Dubai, Riyadh, Kuwait, Frankfurt, London, Virginia" },
    { "metric": "Packet Loss", "gulfTarget": "< 0.5%", "europeTarget": "< 0.5%", "usTarget": "< 1.0%", "tool": "Continuous ICMP/UDP synthetic telemetry" },
    { "metric": "Sustained Throughput per User", "gulfTarget": "≥ 15 Mbps (Std) / ≥ 5 Mbps (Bank)", "europeTarget": "≥ 15 Mbps (Std) / ≥ 5 Mbps (Bank)", "usTarget": "≥ 10 Mbps (Std) / ≥ 5 Mbps (Bank)", "tool": "iperf3 30-second 4-stream runs through tunnel" },
    { "metric": "Time-to-Tunnel-Up", "gulfTarget": "≤ 2.0s (AmneziaWG) / ≤ 3.5s (WSS)", "europeTarget": "≤ 2.0s", "usTarget": "≤ 3.0s", "tool": "In-app telemetry from tap to verified handshake" },
    { "metric": "First-Attempt Connect Success Rate", "gulfTarget": "≥ 98.5% (STC, Mobily, e&, du)", "europeTarget": "≥ 99.0%", "usTarget": "≥ 99.0%", "tool": "Automated connect/disconnect probes across carrier & Wi-Fi" },
    { "metric": "60-Minute 1080p Stream Stability", "gulfTarget": "0 drops / 0 buffering stalls", "europeTarget": "0 drops / 0 buffering stalls", "usTarget": "≤ 1 rebuffer event", "tool": "Daily 60-minute Watch iT / ON Time Sports HD stream test" }
  ]
},"economics":{
  "unitEconomicsModel": {
    "plans": [
      {
        "id": "standard",
        "name": "Standard Plan (Egypt Stream, Telecom & Gov)",
        "monthlyPriceUsd": 4.99,
        "localPrices": { "SAR": 18.99, "AED": 18.99, "KWD": 1.49, "EUR": 4.99, "GBP": 4.49 },
        "netAfter15PctStoreFee": 4.24,
        "avgBandwidthGb": 12.0,
        "serverCostPerUser": 0.45,
        "ipCostPerUser": 0.08,
        "supportAndRefundReserve": 0.25,
        "totalVariableCost": 0.78,
        "monthlyContributionMargin": 3.46,
        "marginPct": 81.6
      },
      {
        "id": "banking_sticky",
        "name": "Banking & Gov Plan (1:1 Dedicated Sticky Cairo IP)",
        "monthlyPriceUsd": 8.99,
        "localPrices": { "SAR": 34.99, "AED": 34.99, "KWD": 2.75, "EUR": 8.99, "GBP": 7.99 },
        "netAfter15PctStoreFee": 7.64,
        "avgBandwidthGb": 11.5,
        "serverCostPerUser": 0.35,
        "ipCostPerUser": 1.75,
        "supportAndRefundReserve": 0.35,
        "totalVariableCost": 2.45,
        "monthlyContributionMargin": 5.19,
        "marginPct": 67.9
      },
      {
        "id": "annual_hero",
        "name": "Annual Banking Bundle (Hero Offer · 3-Day Free Trial)",
        "annualPriceUsd": 59.99,
        "monthlyEquivalentUsd": 4.99,
        "localPrices": { "SAR": 229.00, "AED": 229.00, "KWD": 18.50, "EUR": 59.99 },
        "netUpfrontAfter15PctFee": 50.99,
        "day1NetCashAfterAnnualInfraReserve": 25.19,
        "paybackPeriod": "Day 1 (Recovers $16.00 CAC immediately upfront)"
      }
    ],
    "fixedMonthlyOpEx": {
      "totalUsd": 1050,
      "breakdown": [
        { "item": "2x Marseille 10Gbps Virtual Egypt Servers + Clean /24 Egyptian GeoFeed IP Lease", "costUsd": 320 },
        { "item": "3x Cairo Enterprise Relay Pools (Raya, LinkDC, ISP Static) + Initial 100 Sticky IPs", "costUsd": 380 },
        { "item": "Offshore Control Plane (FastAPI/Go + Postgres + Prometheus/Grafana + 4 Probe VMs)", "costUsd": 150 },
        { "item": "IP Intelligence Subscriptions (ipinfo.io + periodic IPQS batch checks)", "costUsd": 100 },
        { "item": "Offshore Entity Maintenance & Accounting (Amortized monthly)", "costUsd": 100 }
      ]
    },
    "defaultAcquisitionAssumptions": {
      "targetCpiUsd": 0.80,
      "killThresholdCpiUsd": 1.50,
      "installToTrialRatePct": 8.0,
      "installToPaidRatePct": 5.0,
      "impliedCacUsd": 16.00,
      "blendedContributionAt50PctMix": 4.33,
      "breakEvenSubscribersAt50PctMix": 243,
      "monthlyPaybackMonths": 3.7
    }
  },
  "paidAcquisitionTestSpec": {
    "budgetUsd": 1500,
    "durationWeeks": 3,
    "targetCountries": ["Saudi Arabia", "Kuwait", "United Arab Emirates"],
    "channelSplit": [
      { "channel": "Meta Ads (Facebook & Instagram Reels — Arabic Expat Targeting)", "sharePct": 50, "budgetUsd": 750 },
      { "channel": "TikTok Spark Ads (Real Screen Recordings of Bank & Watch iT Working)", "sharePct": 30, "budgetUsd": 450 },
      { "channel": "Google App Campaigns (High-Intent Arabic/English Search Keywords)", "sharePct": 20, "budgetUsd": 300 }
    ],
    "positioningAngles": [
      {
        "id": "angle_banking",
        "arabicHeadline": "بنكك المصري من أي مكان",
        "englishHeadline": "Your Egyptian Bank, From Anywhere",
        "hook": "تطبيق البنك الأهلي أو بنك مصر أو إنستا باي بيعلق أو بيقفل حسابك وانت في السعودية أو الإمارات؟",
        "valueProp": "Dedicated 1:1 Egyptian IP pinned exclusively to you—no shared VPN fraud lockouts."
      },
      {
        "id": "angle_gov_family",
        "arabicHeadline": "خلص ورق أهلك ومصالحك الحكومية وانت برا",
        "englishHeadline": "Family Errands & Government Portals From Abroad",
        "hook": "بوابة مصر الرقمية أو مخالفات المرور أو شحن خط وي وفودافون مش بيفتحوا برا مصر؟",
        "valueProp": "Instant access to digital.gov.eg, ppo.gov.eg, and My WE with a live 15-minute verified status board."
      },
      {
        "id": "angle_ramadan_tv",
        "arabicHeadline": "رمضان والدوري المصري زي ما في البيت",
        "englishHeadline": "Ramadan Series & Egyptian Football Live",
        "hook": "اتفرج على ماتشات الأهلي والزمالك ومسلسلات رمضان على Watch iT بجودة عالية ومن غير إعلانات مزعجة.",
        "valueProp": "10 Gbps Marseille Virtual Egypt streaming servers with zero forced ads and zero buffering."
      }
    ],
    "asoKeywords": [
      "vpn مصر",
      "ip مصري",
      "egypt vpn",
      "egyptian ip address",
      "vpn مصري مجاني",
      "تشغيل البنك الاهلي خارج مصر",
      "تشغيل انستا باي خارج مصر",
      "بوابة مصر الرقمية من الخارج"
    ]
  },
  "prdRequirements": [
    { "id": "FR-01", "type": "Functional", "domain": "Client", "title": "One-Tap Egypt Connect", "priority": "P0", "spec": "Single prominent connect button routes user to their optimal Egyptian node (Standard Marseille Pool vs. Sticky 1:1 Cairo Banking Relay) displaying live RTT and assigned Egyptian IP." },
    { "id": "FR-02", "type": "Functional", "domain": "Network", "title": "AmneziaWG + WSS 443 Stealth Engine", "priority": "P0", "spec": "Primary tunnel uses AmneziaWG (randomized headers H1–H4 + junk packet padding) to defeat Gulf ISP & Telecom Egypt DPI. Automatic fallback within 3.5s to WireGuard-over-WSS (TLS TCP 443) if UDP is blocked." },
    { "id": "FR-03", "type": "Functional", "domain": "Backend", "title": "Banking Mode (1:1 Sticky IP Pinning)", "priority": "P0", "spec": "Banking Plan subscribers are assigned an exclusive, static Egyptian IP (1 User : 1 IP) bound to their account in PostgreSQL and never shared with any other user." },
    { "id": "FR-04", "type": "Functional", "domain": "Client", "title": "1-Tap 'Egyptian Apps Only' Split-Tunnel", "priority": "P0", "spec": "Pre-populated split-tunnel mode routes only Egyptian banking, government, telecom, and streaming apps through the VPN while keeping WhatsApp, Uber/Careem, and local Gulf bank apps on domestic internet." },
    { "id": "FR-05", "type": "Functional", "domain": "Client", "title": "Live 15-Minute Service Status Board", "priority": "P0", "spec": "In-app dashboard showing real-time verified status (Working / Degraded / Blocked) for top 12 Egyptian services (NBE, CIB, Banque Misr, InstaPay, Digital Egypt, PPO Fines, Watch iT, My WE, Ana Vodafone)." },
    { "id": "FR-06", "type": "Functional", "domain": "Network", "title": "Dual-Stack IPv6 Sinkhole & DNS Shield", "priority": "P0", "spec": "Capture and blackhole all ::/0 IPv6 traffic inside VpnService / NEPacketTunnelProvider so dual-stack Gulf 5G networks never leak real Saudi/UAE IPv6 addresses. Force encrypted in-tunnel Egyptian DNS." },
    { "id": "FR-07", "type": "Functional", "domain": "Client", "title": "Pre-Flight Banking Readiness Check", "priority": "P1", "spec": "1-second diagnostic before opening a bank app verifying: (1) Tunnel up, (2) Sticky EG IP active, (3) IPv6 blocked, and (4) Optional warning if GPS location permission is enabled for the banking app." },
    { "id": "FR-08", "type": "Functional", "domain": "Backend", "title": "Self-Serve 1-Tap Sticky IP Swap", "priority": "P1", "spec": "Allows Banking Tier users to swap their dedicated IP for a fresh warm-reserve IP from a different Egyptian subnet/ASN if they encounter a block or CAPTCHA (capped at 2 swaps/month)." },
    { "id": "FR-09", "type": "Functional", "domain": "Client", "title": "Bilingual Arabic-First RTL & English UI", "priority": "P0", "spec": "Natural Egyptian Arabic RTL interface with instant English switch and clear onboarding explaining Egyptian SIM roaming requirements for bank SMS OTPs." },
    { "id": "FR-10", "type": "Functional", "domain": "Backend", "title": "Localized GCC & Global Billing", "priority": "P0", "spec": "RevenueCat integration over Google Play Billing & Apple StoreKit 2 supporting SAR, AED, KWD, QAR, USD, EUR, and GBP price tiers with a 3-day free trial on Annual plans." },
    { "id": "NFR-01", "type": "Non-Functional", "domain": "Network", "title": "Destination-Allowlisted Diskless Cairo Relays", "priority": "P0", "spec": "Cairo Tier 2 relays run in RAM (tmpfs) with zero PII and enforce kernel nftables rules allowing only HTTPS traffic to Egyptian bank ASNs and .gov.eg / .com.eg CIDRs." },
    { "id": "NFR-02", "type": "Non-Functional", "domain": "Network", "title": "Outbound Abuse & Reputation Firewall", "priority": "P0", "spec": "Block outbound SMTP mail ports (25, 465, 587), BitTorrent/P2P signatures, and port scanning across all nodes to keep IPQS fraud scores < 25." },
    { "id": "NFR-03", "type": "Non-Functional", "domain": "Backend", "title": "15-Minute Synthetic Unlock Monitor", "priority": "P0", "spec": "Headless probes test every exit IP every 15 minutes against target Egyptian services, triggering alerts and auto-rotation from the 25% warm reserve on failure." },
    { "id": "NFR-04", "type": "Non-Functional", "domain": "Security", "title": "Zero Ad / Zero Tracker Hygiene", "priority": "P0", "spec": "0 third-party ad SDKs, 0 behavioral trackers, and 0 dangerous phone-state permissions—verified in CI via MobSF and Exodus Privacy." },
    { "id": "NFR-05", "type": "Non-Functional", "domain": "Performance", "title": "Latency & Connect Time SLA", "priority": "P0", "spec": "Connect time ≤ 2.0s on AmneziaWG (≤ 3.5s on WSS fallback); peak RTT ≤ 75ms from Gulf, ≤ 80ms from Europe, ≤ 185ms from North America." },
    { "id": "NFR-06", "type": "Non-Functional", "domain": "Compliance", "title": "MASA Level 2 & Store Policy Readiness", "priority": "P1", "spec": "Full compliance with Google Play VpnService policy, Apple Guideline 5.4 Organization rules, and OWASP MASVS / MASA Level 2 assessment for the Google Play Verified VPN badge." }
  ],
  "roadmapPhases": [
    {
      "phase": "Phase 0",
      "weeks": "Weeks 1–2",
      "title": "Empirical Validation, Candidate IP Audit & Legal Gate",
      "deliverables": [
        "Run Play/App Store review scraper across SWS VPN Egypt, Hola, Planet VPN, Proton, CyberGhost, and ExpressVPN.",
        "Rent 5 candidate IPs (LightNode Cairo, Link Data Center, IT EGY, Raya Data Center, and 1 Marseille Geo-EG /29 block).",
        "Score all 5 candidate IPs across MaxMind, IP2Location, ipinfo, DB-IP, IPQS, Scamalytics, and live tests on 10 Egyptian services from KSA, UAE, UK, and US.",
        "Obtain written legal opinion from Egyptian telecom counsel on all 7 Stage 4 questions and complete offshore LLC/FZCO + D-U-N-S setup."
      ],
      "gateCriteria": "≥ 90% unlock pass rate on candidate IPs, IPQS < 25 on Banking IPs, and written legal sign-off."
    },
    {
      "phase": "Phase 1",
      "weeks": "Weeks 3–5",
      "title": "Two-Tier Hybrid Infrastructure & Synthetic Status Engine",
      "deliverables": [
        "Build Ansible playbooks deploying hardened Ubuntu 24.04 nodes with AmneziaWG (UDP) and WireGuard-over-WSS (TLS 443).",
        "Configure diskless RAM-only Cairo relays with nftables allowlists for Egyptian banking ASNs and .gov.eg CIDRs.",
        "Build Control Plane API (FastAPI/Go + PostgreSQL) for 1:1 sticky IP assignment, RevenueCat webhooks, and 25% reserve pool rotation.",
        "Deploy 15-minute synthetic Playwright probes feeding the Live Service Status API."
      ],
      "gateCriteria": "All peak latency/throughput benchmarks met across 7-day hourly mtr/iperf3 runs from Gulf, EU, and US."
    },
    {
      "phase": "Phase 2",
      "weeks": "Weeks 6–8",
      "title": "Android Kotlin Client MVP, Split-Tunnel & Security Verification",
      "deliverables": [
        "Build native Kotlin Jetpack Compose client with Arabic-first RTL UI and English toggle.",
        "Implement 1-tap 'Egyptian Apps Only' Split-Tunnel preset, strict ::/0 IPv6 sinkhole, and encrypted in-tunnel DNS.",
        "Add Pre-Flight Banking Readiness Check and self-serve 1-tap 'Swap My Sticky IP' action.",
        "Pass MobSF static/dynamic scan and Exodus Privacy audit with 0 trackers and 0 high findings; record Play VpnService video."
      ],
      "gateCriteria": "Zero DNS/WebRTC/IPv6 leaks on dual-stack networks and 0 trackers in MobSF/Exodus."
    },
    {
      "phase": "Phase 3 & 4",
      "weeks": "Weeks 9–12",
      "title": "200-User Gulf Closed Beta, $1,500 Paid UA Test & iOS Launch",
      "deliverables": [
        "Run 4-week Google Play Closed Testing beta with 150–200 Egyptian expats in KSA, Kuwait, and UAE.",
        "Execute $1,500 paid creative smoke test across Meta Reels (50%), TikTok (30%), and Google App Campaigns (20%).",
        "Enable RevenueCat localized SAR/AED/KWD/USD billing in Weeks 11–12 to measure trial conversion and refund rates.",
        "Ship Swift iOS client (NEPacketTunnelProvider) under Organization account and initiate MASA Level 2 audit for Play Verified badge."
      ],
      "gateCriteria": "All 12 rows of the External Go/No-Go Launch Scorecard passed (CPI ≤ $0.80, payback < 6 mos, ≥ 4.4★ sentiment)."
    }
  ],
  "launchScorecard": [
    { "id": "SC-01", "dimension": "Country Geolocation Accuracy", "judge": "MaxMind GeoIP2, IP2Location, ipinfo.io, DB-IP", "target": "4 of 4 report Egypt (EG) across 100% of Tier 1 & Tier 2 IPs" },
    { "id": "SC-02", "dimension": "VPN & Fraud Reputation", "judge": "IPQualityScore (IPQS) & Scamalytics", "target": "IPQS Fraud Score < 25; vpn: false on 100% of Banking Tier sticky IPs" },
    { "id": "SC-03", "dimension": "Real-World Service Unlock Rate", "judge": "Logged Stage 2 Matrix (10 Egyptian services × 4 countries)", "target": "≥ 90% pass rate, and ≥ 20 percentage points above SWS VPN Egypt" },
    { "id": "SC-04", "dimension": "Evening Peak Latency (8–11pm Cairo)", "judge": "Hourly mtr from Gulf, Europe, and US vantage points", "target": "Gulf ≤ 75 ms · Europe ≤ 80 ms · US ≤ 185 ms" },
    { "id": "SC-05", "dimension": "DPI Survival & Connect Reliability", "judge": "Client telemetry on STC, Mobily, e&, du, and WE", "target": "≥ 98.5% connect success rate; ≤ 2.0s UDP / ≤ 3.5s WSS fallback" },
    { "id": "SC-06", "dimension": "Zero Leak Verification", "judge": "dnsleaktest.com, browserleaks.com/webrtc, test-ipv6.com", "target": "0 DNS leaks, 0 WebRTC leaks, 0 dual-stack IPv6 leaks" },
    { "id": "SC-07", "dimension": "App Security & Tracker Hygiene", "judge": "MobSF, Exodus Privacy, and MASA Level 2 Lab", "target": "0 high-severity findings; 0 ad or behavioral trackers" },
    { "id": "SC-08", "dimension": "Cohort Retention", "judge": "Google Play Console Closed Beta Cohorts", "target": "D1 ≥ 40% · D7 ≥ 20% · D30 ≥ 10%" },
    { "id": "SC-09", "dimension": "Client Stability & Vitals", "judge": "Google Play Console Android Vitals", "target": "Crash rate < 0.8% · ANR rate < 0.25%" },
    { "id": "SC-10", "dimension": "Subscriber Refund Rate", "judge": "Google Play & App Store Financial Reports", "target": "< 5.0% of paid conversions" },
    { "id": "SC-11", "dimension": "Review & Beta Sentiment", "judge": "Coded Beta Reviews on Stage 1 Themes", "target": "≥ 4.4 ★ average; 'doesn't connect' < 5%; 0 ad complaints" },
    { "id": "SC-12", "dimension": "Acquisition Cost & Legal Clearance", "judge": "Paid UA Test (KSA/UAE/KW) + Written Lawyer Opinion", "target": "CPI ≤ $0.80; payback < 6 months; all 7 legal questions cleared" }
  ]
}};