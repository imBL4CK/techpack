LootJS.modifiers((e) => {
  const minerals = [
    "chalcopyrite",
    "magnetite",
    "calaverite",
    "cassiterite",
    "galena",
    "argentite",
    "pentlandite",
    "spodumene",
    "cobaltoite",
    "kimberlite",
    "emerald",
  ];
  minerals.forEach((mineral) => {
    e.addBlockLootModifier(`kubejs:${mineral}_ore`)
      .addLoot(`kubejs:raw_${mineral}`)
      .removeLoot(`kubejs:${mineral}_ore`);
  });
});
