ItemEvents.toolTierRegistry((e) => {
  e.add("copper_tier", (tier) => {
    tier.uses = 190;
    tier.speed = 5.0;
    tier.attackDamageBonus = 1.0;
    tier.enchantmentValue = 13;
    tier.repairIngredient = "#c:ingots/copper";
  });
  e.add("wrought_iron_tier", (tier) => {
    tier.uses = 600;
    tier.speed = 6.0;
    tier.attackDamageBonus = 2.0;
    tier.enchantmentValue = 13;
    tier.repairIngredient = "#c:ingots/wrought_iron";
  });
  e.add("steel_tier", (tier) => {
    tier.uses = 1200;
    tier.speed = 7.0;
    tier.attackDamageBonus = 2.5;
    tier.enchantmentValue = 13;
    tier.repairIngredient = "#c:ingots/steel";
    tier.incorrectBlocksForDropsTag = "minecraft:incorrect_for_diamond_tool"
  });
  e.add("stabillis_tier", (tier) => {
    tier.uses = 2500;
    tier.speed = 12.0;
    tier.attackDamageBonus = 5.0;
    tier.enchantmentValue = 18;
    tier.repairIngredient = "#c:ingots/stabillis";
    tier.incorrectBlocksForDropsTag = "minecraft:incorrect_for_netherite_tool"
  });
  e.add("iris_relic", (tier) => {
    tier.uses = 2500;
    tier.speed = 8.0;
    tier.enchantmentValue = 22;
    tier.repairIngredient = "malum:malignant_pewter_ingot";
    tier.incorrectBlocksForDropsTag = "minecraft:incorrect_for_netherite_tool"
  });
  e.add("glitch_knife", (tier) => {
    tier.uses = 999;
    tier.speed = 2.0;
    tier.incorrectBlocksForDropsTag = "minecraft:incorrect_for_netherite_tool"
  });
});