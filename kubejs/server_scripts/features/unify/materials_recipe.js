ServerEvents.recipes((e) => {
  let materials = [
    "brass",
    "bronze",
    "constantan",
    "copper",
    "electrum",
    "energized_steel",
    "gold",
    "invar",
    "iron",
    "lead",
    "nickel",
    "netherite",
    "red_alloy",
    "shadow_bronze",
    "silver",
    "steel",
    "tin",
    "zinc",
    "advanced_alloy",
    "alchemical_brass",
    "stainless_steel",
    "chromatic_alloy",
  ];

  //Gears in Thermal Press
  materials.forEach((ibMaterial) => {
    e.custom({
      type: "thermal:press",
      ingredients: [
        {
          tag: `forge:plates/${ibMaterial}`,
          count: 4,
        },
        {
          item: "thermal:press_gear_die",
        },
      ],
      result: [
        {
          tag: `forge:gears/${ibMaterial}`,
        },
      ],
    }).id(`thermal:press/library/${ibMaterial}`);
  });

  //Plates in Mechanical Press
  materials.forEach((ibMaterials) => {
    e.custom({
      type: "create:pressing",
      ingredients: [
        {
          tag: `forge:ingots/${ibMaterials}`,
        },
      ],
      results: [
        {
          tag: `forge:plates/${ibMaterials}`,
        },
      ],
    }).id(`create/pressing/library/${ibMaterials}`);
  });
});
