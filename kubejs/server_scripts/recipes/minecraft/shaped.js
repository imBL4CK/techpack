ServerEvents.recipes((e) => {
  let materials = [
    "copper",
    "iron",
    "gold",
    "tin",
    "silver",
    "nickel",
    "lead",
    "platinum",

    "bronze",
    "steel",
    "silver",
    "electrum",
    "invar",
    "constantan"
  ];
  materials.forEach((craft) => {
    e.custom({
      type: "minecraft:crafting_shaped",
      pattern: [" M ", "MBM", " M "],
      key: {
        M: {
          tag: `c:ingots/${craft}`,
        },
        B: {
          item: "techpack:bearing",
        },
      },
      result: {
        id: `techpack:${craft}_gear`,
      },
    }).id(`techpack:library/minecraft/shaped/gears/${craft}`);
  });
});
