StartupEvents.registry("item", (e) => {
  //Catching net
  e.create("techpack:catching_net").maxDamage(64).unstackable();
  //
  e.create("techpack:flint_and_soul").maxDamage(64).unstackable();
  e.create("techpack:suffering_ending", "sword")
    .tier("suffering_ending")
    .attackDamageBaseline(2.0)
    .speedBaseline(-3.5)
    .tag("malum:soul_shatter_capable_weapon")
    .unstackable();
  //Iris Relic
  e.create("techpack:iris_relic", "paxel")
    .tier("iris_relic")
    .tag("malum:soul_shatter_capable_weapon")
    .unstackable()
    .tag("minecraft:pickaxes").tag("minecraft:axes").tag("minecraft:shovels");
  //Copper Tools
  e.create("techpack:copper_sword", "sword").tier("copper_tier").unstackable();
  e.create("techpack:copper_pickaxe", "pickaxe").tier("copper_tier").unstackable();
  e.create("techpack:copper_axe", "axe").tier("copper_tier").unstackable();
  e.create("techpack:copper_shovel", "shovel").tier("copper_tier").unstackable();
  //Wrought Tools
  e.create("techpack:wrought_iron_sword", "sword").tier("wrought_iron_tier").unstackable();
  e.create("techpack:wrought_iron_pickaxe", "pickaxe").tier("wrought_iron_tier").unstackable();
  e.create("techpack:wrought_iron_axe", "axe").tier("wrought_iron_tier").unstackable();
  e.create("techpack:wrought_iron_shovel", "shovel").tier("wrought_iron_tier").unstackable();
  //Steel Tools
  e.create("techpack:steel_sword", "sword").tier("steel_tier").unstackable();
  e.create("techpack:steel_pickaxe", "pickaxe").tier("steel_tier").unstackable();
  e.create("techpack:steel_axe", "axe").tier("steel_tier").unstackable();
  e.create("techpack:steel_shovel", "shovel").tier("steel_tier").unstackable();
  //Stabillis Tools
  e.create("techpack:etheric_sword", "sword").tier("stabillis_tier").unstackable();
  e.create("techpack:worldshaper_pickaxe", "pickaxe").tier("stabillis_tier").unstackable();
  e.create("techpack:destruction_axe", "axe").tier("stabillis_tier").unstackable();
  e.create("techpack:erosion_shovel", "shovel").tier("stabillis_tier").unstackable();

  e.create("techpack:glitch_knife", "farmersdelight:knife")
    .tier("glitch_knife")
    .rarity("epic")
    .tag("c:tools/knives")
    .attackDamageBonus(995.5)
    //.modifyAttribute("lodestone:magic_damage", "b7d2f9a7-9e45-4c07-9b43-2d2c12d4a5b6", 1, "add_value")
    .unstackable()
});
