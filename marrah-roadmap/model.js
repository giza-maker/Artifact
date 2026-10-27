// UAE illustrative economics only. Not a forecast or profit claim.
const common = {
  monthlyFee: 399, setupFee: 799, totalOrders: 6000, eligibleOrderPercent: 25,
  averageTicket: 25, contributionMarginPercent: 60, rewardCost: 3, paidOrdersPerReward: 8,
  lostAddonContribution: 40, messagesPerOptInOrder: 1, messageMarkupPercent: 25,
  baselineRemakePercent: .5, remakeWaste: 6, statusQuestionPercent: 20,
  secondsPerStatusQuestion: 20, laborRate: 35, recurringProcessingPercent: 3.6,
  setupProcessingPercent: 2.9, processingFixedFee: 1, vatPercent: 0,
  issuerAccountCost: 0, supportLaborRate: 60, fixedOverhead: 3000,
  ownerDraw: 10000, engineeringRate: 150, initialActiveLocations: 0,
  openingCash: 250000, firstMonthBillingPercent: 50,
};

export const scenarios = {
  base: {
    ...common, liftPercent: 8, extraLoyaltyAdmin: 20, notificationOptInPercent: 25,
    landedMessageCost: .1, remakeReductionPercent: 30, statusQuestionReductionPercent: 40,
    variableCoreCost: 20, supportHours: .75, acquisitionCost: 700, churnPercent: 3,
    onboardingCost: 500, engineeringHours: 1160, newLocationsPerMonth: 4, commercialStartMonth: 6,
  },
  downside: {
    ...common, liftPercent: 2, extraLoyaltyAdmin: 40, notificationOptInPercent: 50,
    landedMessageCost: .1, remakeReductionPercent: 15, statusQuestionReductionPercent: 20,
    variableCoreCost: 35, supportHours: 2, acquisitionCost: 1400, churnPercent: 6,
    onboardingCost: 1000, engineeringHours: 1868, newLocationsPerMonth: 2, commercialStartMonth: 9,
  },
};

const pct = value => value / 100;
const guardedCeil = (numerator, denominator) => denominator > 0 ? Math.ceil(numerator / denominator) : null;

export function calculate(inputs) {
  const i = { ...inputs };
  const eligibleOrders = i.totalOrders * pct(i.eligibleOrderPercent);
  const incrementalOrders = eligibleOrders * pct(i.liftPercent);
  const programOrders = eligibleOrders + incrementalOrders;
  const rewardPerOrder = i.rewardCost / i.paidOrdersPerReward;
  const incrementalContribution = incrementalOrders * i.averageTicket * pct(i.contributionMarginPercent);
  const rewardReserve = programOrders * rewardPerOrder;
  const notificationUnits = i.totalOrders * pct(i.notificationOptInPercent) * i.messagesPerOptInOrder;
  const usageCharge = notificationUnits * i.landedMessageCost * (1 + pct(i.messageMarkupPercent));
  const avoidedRemakeBenefit = i.totalOrders * pct(i.baselineRemakePercent) * i.remakeWaste * pct(i.remakeReductionPercent);
  const merchantNet = incrementalContribution - rewardReserve - i.lostAddonContribution - i.extraLoyaltyAdmin - i.monthlyFee - usageCharge + avoidedRemakeBenefit;
  const orderMarginAfterReward = i.averageTicket * pct(i.contributionMarginPercent) - rewardPerOrder;
  const merchantBreakEvenOrders = orderMarginAfterReward > 0
    ? (eligibleOrders * rewardPerOrder + i.lostAddonContribution + i.extraLoyaltyAdmin + i.monthlyFee + usageCharge - avoidedRemakeBenefit) / orderMarginAfterReward
    : null;
  const pickupOnlyNet = -i.monthlyFee - usageCharge + avoidedRemakeBenefit;
  const releasedCapacityHours = i.totalOrders * pct(i.statusQuestionPercent) * i.secondsPerStatusQuestion * pct(i.statusQuestionReductionPercent) / 3600;

  const usageRevenue = usageCharge;
  const billedBeforeVat = i.monthlyFee + usageRevenue;
  const customerCardCharge = billedBeforeVat * (1 + pct(i.vatPercent));
  const messagingCost = notificationUnits * i.landedMessageCost;
  const recurringProcessingFee = customerCardCharge * pct(i.recurringProcessingPercent) + i.processingFixedFee;
  const supportCost = i.supportHours * i.supportLaborRate;
  const contributionBeforeReplacementCAC = i.monthlyFee + usageRevenue - messagingCost - recurringProcessingFee - i.variableCoreCost - i.issuerAccountCost - supportCost;
  const replacementCAC = pct(i.churnPercent) * i.acquisitionCost;
  const saasContribution = contributionBeforeReplacementCAC - replacementCAC;
  const net50AfterFixed = 50 * saasContribution - i.fixedOverhead;
  const net100AfterFixed = 100 * saasContribution - i.fixedOverhead;
  const net100AfterOwner = net100AfterFixed - i.ownerDraw;
  const ownerBreakEvenLocations = guardedCeil(i.fixedOverhead + i.ownerDraw, saasContribution);
  const recurringBreakEvenLocations = guardedCeil(i.fixedOverhead, saasContribution);
  const setupProcessingFee = i.setupFee * (1 + pct(i.vatPercent)) * pct(i.setupProcessingPercent) + i.processingFixedFee;
  const netSetupContribution = i.setupFee - setupProcessingFee - i.onboardingCost;
  const engineeringCost = i.engineeringHours * i.engineeringRate;

  let active = i.initialActiveLocations;
  let cash = i.openingCash;
  const cashRamp = [];
  for (let month = 1; month <= 24; month++) {
    const beginningActive = active;
    const churned = beginningActive * pct(i.churnPercent);
    const newLocations = month >= i.commercialStartMonth ? i.newLocationsPerMonth : 0;
    active = beginningActive - churned + newLocations;
    const billedLocations = beginningActive - churned + pct(i.firstMonthBillingPercent) * newLocations;
    const recurringContribution = billedLocations * contributionBeforeReplacementCAC;
    const setupContribution = newLocations * netSetupContribution;
    const acquisitionOutflow = newLocations * i.acquisitionCost;
    const operating = recurringContribution + setupContribution - acquisitionOutflow - i.fixedOverhead - i.ownerDraw;
    const engineeringOutflow = month === 1 ? engineeringCost : 0;
    cash += operating - engineeringOutflow;
    cashRamp.push({ month, active, cash, operating, beginningActive, churned, newLocations, billedLocations, recurringContribution, setupContribution, acquisitionOutflow, engineeringOutflow });
  }
  const minimumCash = Math.min(...cashRamp.map(row => row.cash));
  const fundingGap = Math.max(0, -minimumCash);

  return {
    merchantNet, merchantBreakEvenOrders, saasContribution, ownerBreakEvenLocations,
    net100AfterOwner, fundingGap, openingCashRequired: i.openingCash + fundingGap, cashRamp,
    eligibleOrders, incrementalOrders, programOrders, rewardPerOrder, incrementalContribution,
    rewardReserve, notificationUnits, usageCharge, avoidedRemakeBenefit, pickupOnlyNet,
    releasedCapacityHours, valuedCapacity: releasedCapacityHours * i.laborRate,
    billedBeforeVat, customerCardCharge, messagingCost, recurringProcessingFee, supportCost,
    contributionBeforeReplacementCAC, replacementCAC, net50AfterFixed,
    net50AfterOwner: net50AfterFixed - i.ownerDraw, net100AfterFixed,
    recurringBreakEvenLocations, setupProcessingFee, netSetupContribution, engineeringCost,
    firstPositiveOperatingMonth: cashRamp.find(row => row.operating > 0)?.month ?? null,
    month24ActiveLocations: cashRamp[23].active, month24Cash: cashRamp[23].cash, minimumCash,
    disclaimer: 'UAE illustration only; not a forecast or profit claim.',
  };
}
