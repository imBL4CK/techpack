LootJS.modifiers((e) => {
  e.addTableModifier("minecraft:chests/abandoned_mineshaft")
    .addLoot(LootEntry.of("techpack:cavernous_bee_drone").randomChance(0.3))
    .addLoot(LootEntry.of("techpack:cavernous_bee_queen").randomChance(0.1));
});
