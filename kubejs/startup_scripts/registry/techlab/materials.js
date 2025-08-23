StartupEvents.registry("item", (e) => {
  
  let materials = [
    "red_alloy",
    "energized_steel",
    "shadow_bronze",
    "manganese",
    "stainless_steel",
    "alchemical_brass",
    "chromatic_alloy",
  ];
  let future = [
    "vibranium",
    "adamantium"
  ]

  materials.forEach((registry) => {
    {
      e.create(`${registry}_ingot`)
        .tag("forge:ingots")
        .tag(`forge:ingots/${registry}`);
    }
    {
      e.create(`${registry}_plate`)
        .tag("forge:plates")
        .tag(`forge:plates/${registry}`);
    }
    {
      e.create(`${registry}_gear`)
        .tag("forge:gears")
        .tag(`forge:gears/${registry}`);
    }
  });
});
