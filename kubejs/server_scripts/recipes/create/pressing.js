ServerEvents.recipes((e) => {
  let materials = [
    "tin",
    "bronze",
    "steel",
    "silver",
    "lead",
    "platinum",
    "electrum",
    "nickel",
    "invar",
    "constantan"
  ];
  materials.forEach((craft) => {
    e.custom({
      type: "create:pressing",
      ingredients: [
        { tag: `c:ingots/${craft}` },
      ],
      results: [
        { id: `techpack:${craft}_plate` },
      ],
    }).id(`techpack:library/create/pressing/plates/${craft}`);
  });
});
