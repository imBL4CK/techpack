ServerEvents.recipes((e) => {
  let materials = [
    "copper",
    "iron",
    "gold",
    "zinc",
    "tin",
    "silver",
    "nickel",
    "lead",
    "platinum",
    "chrome",
    "aluminum",

    "bronze",
    "steel",
    "silver",
    "electrum",
    "invar",
    "constantan",
    "kanthal",
    "advanced_alloy",
    "stainless_steel",
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
