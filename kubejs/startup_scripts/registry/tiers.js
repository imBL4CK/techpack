ItemEvents.toolTierRegistry((e) => {
  e.add("wrough_iron", (tier) => {
    tier.uses = 420;
    tier.speed = 7.0;
    tier.attackDamageBonus = 2.0;
    tier.enchantmentValue = 12;
    tier.repairIngredient = "#c:ingots/wrought_iron";
  });
});