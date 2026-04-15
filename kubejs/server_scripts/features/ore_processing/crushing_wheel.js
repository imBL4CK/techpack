ServerEvents.recipes((e) => {
  const entries = [
    "copper",
    "iron",
    "gold",
    "zinc",
    "tin",
    "silver",
    "lead",
    "nickel",
    "platinum",
    "aluminum",
    "uranium"
  ];
  entries.forEach((entry) => {
    e.custom({
      type: "create:crushing",
      processingTime: 400,
      ingredients: [
        { tag: `c:raw_materials/${entry}`,},
      ],
      results: [
        {
          id: `create:crushed_raw_${entry}`,
        },
        {
          chance: 0.5,
          id: `create:crushed_raw_${entry}`,
        },
        {
          chance: 0.75,
          id: "create:experience_nugget",
        },
      ],
    });
    e.custom({
      type: "create:crushing",
      processingTime: 400,
      ingredients: [
        { tag: `c:ores/${entry}`,},
      ],
      results: [
        {
          id: `create:crushed_raw_${entry}`,
        },
        {
          id: `create:crushed_raw_${entry}`,
        },
        {
          chance: 0.5,
          id: `create:crushed_raw_${entry}`,
        },
        {
          chance: 0.75,
          id: "create:experience_nugget",
        },
      ],
    });
  });
  //chromium
  e.custom({
    type: "create:crushing",
    processingTime: 400,
    ingredients: [
      { item: "techpack:raw_chromium",},
    ],
    results: [
      { id: "techpack:crushed_raw_chromium" },
      { id: "techpack:crushed_raw_chromium", chance: 0.5  },
      { id: "create:experience_nugget", chance: 0.75 },
    ],
  })
  e.custom({
    type: "create:crushing",
    processingTime: 400,
    ingredients: [
      { tag: "c:ores/chromium",},
    ],
    results: [
      { id: "techpack:crushed_raw_chromium" },
      { id: "techpack:crushed_raw_chromium", chance: 0.5  },
      { id: "create:experience_nugget", chance: 0.75 },
    ],
  })
  //Calorite
  e.custom({
    type: "create:crushing",
    processingTime: 400,
    ingredients: [
      { item: "techpack:raw_calorite",},
    ],
    results: [
      { id: "techpack:crushed_raw_calorite" },
      { id: "techpack:crushed_raw_calorite", chance: 0.5  },
      { id: "create:experience_nugget", chance: 0.75 },
    ],
  })
  e.custom({
    type: "create:crushing",
    processingTime: 400,
    ingredients: [
      { tag: "c:ores/calorite",},
    ],
    results: [
      { id: "techpack:crushed_raw_calorite" },
      { id: "techpack:crushed_raw_calorite", chance: 0.5  },
      { id: "create:experience_nugget", chance: 0.75 },
    ],
  })
  //Desh
  e.custom({
    type: "create:crushing",
    processingTime: 400,
    ingredients: [
      { item: "stellaris:raw_desh_ingot",},
    ],
    results: [
      { id: "techpack:crushed_raw_desh" },
      { id: "techpack:crushed_raw_desh", chance: 0.5  },
      { id: "create:experience_nugget", chance: 0.75 },
    ],
  })
  e.custom({
    type: "create:crushing",
    processingTime: 400,
    ingredients: [
      { tag: "c:ores/desh",},
    ],
    results: [
      { id: "techpack:crushed_raw_desh" },
      { id: "techpack:crushed_raw_desh", chance: 0.5  },
      { id: "create:experience_nugget", chance: 0.75 },
    ],
  })
});
