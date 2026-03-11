LootJS.modifiers((e) => {
  let natural = [
    "iron",
    "copper",
    "gold",
    "diamond",
    "tin",
    "silver",
    "nickel",
    "lead",
    "platinum",
    "aluminum",
    "chrome",
  ];
  natural.forEach((native) => {
    e.addBlockModifier(`#c:ores/${native}`)
      .matchTool('malum:spellweaving_pickaxe')
      .addLoot(LootEntry.of(`techpack:native_raw_${native}`).randomChance(0.3));
  });
});
