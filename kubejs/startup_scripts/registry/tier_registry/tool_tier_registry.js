ItemEvents.toolTierRegistry((e) => {
  e.add("primitive_tier", (tier) => {
    tier.uses = 128;
    tier.speed = 4.0;
    tier.attackDamageBonus = 2.0;
    tier.level = 2;
    tier.enchantmentValue = 14;
    tier.repairIngredient = "#forge:ingots/iron";
  });
  e.add("rustic_tier", (tier) => {
    tier.uses = 312;
    tier.speed = 4.0;
    tier.attackDamageBonus = 2.0;
    tier.level = 2;
    tier.enchantmentValue = 14;
    tier.repairIngredient = "#forge:ingots/bronze";
  });
  e.add("basic_tier", (tier) => {
    tier.uses = 700;
    tier.speed = 6.0;
    tier.attackDamageBonus = 2.0;
    tier.level = 2;
    tier.enchantmentValue = 14;
    tier.repairIngredient = "#forge:ingots/steel";
  });
  e.add("wrench", (tier) => {
    tier.uses = 1024;
    tier.speed = 3.0;
    tier.attackDamageBonus = 2.0;
    tier.level = 1;
    tier.enchantmentValue = 0;
    tier.repairIngredient = "#forge:ingots/steel";
  });
  e.add("elder_miners_pickaxe", (tier) => {
    tier.uses = 712;
    tier.speed = 10.0;
    tier.attackDamageBonus = 3.0;
    tier.level = 4;
    tier.enchantmentValue = 13;
    tier.repairIngredient = "malum:malignant_pewter_ingot";
  });
});
