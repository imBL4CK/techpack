LootJS.modifiers((e) => {
  const capture = [
    {
      bee: "common",
      nest: "forest",
    },
    {
      bee: "boreal",
      nest: "boreal",
    },
    {
      bee: "enigmatic",
      nest: "chorus",
    },
    {
      bee: "fossil",
      nest: "warm",
    },
  ];
  capture.forEach((drop) => {
    e.addBlockModifier(`techpack:wild_${drop.nest}_nest`)
      .matchTool("techpack:catching_net")
      .removeLoot(`techpack:wild_${drop.nest}_nest`)
      .addLoot(LootEntry.of(`techpack:${drop.bee}_bee_drone`).randomChance(0.3))
      .addLoot(LootEntry.of(`techpack:${drop.bee}_bee_queen`).randomChance(0.1));
  });
});
