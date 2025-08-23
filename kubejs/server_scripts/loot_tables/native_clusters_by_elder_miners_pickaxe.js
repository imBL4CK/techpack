LootJS.modifiers((e) => {
    var enabled = true;

    const native = [
      "copper",
      "iron",
      "gold",
      "tin",
      "nickel",
      "lead",
      "silver",
      "zinc",
      "redstone",
      "diamond",
      "cinnabar",
    ];

  if (enabled === true) {
    native.forEach((registry) => {
    e.addBlockLootModifier(`#forge:ores/${registry}`).matchMainHand(Item.of("kubejs:elder_miners_pickaxe").ignoreNBT()).pool((pool) => {
        pool.rolls(1);
        pool.randomChance(0.3).addLoot(`kubejs:native_${registry}_cluster`);
    });
    });
  }
  else{}
});
