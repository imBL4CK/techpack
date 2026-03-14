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
  e.custom({
    type: "create:crushing",
    processingTime: 400,
    ingredients: [
        { item: "techpack:raw_chrome",},
    ],
    results: [
        { id: "techpack:crushed_raw_chrome" },
        { id: "techpack:crushed_raw_chrome", chance: 0.5  },
        { id: "create:experience_nugget", chance: 0.75 },
    ],
  })
  e.custom({
    type: "create:crushing",
    processingTime: 400,
    ingredients: [
        { tag: "c:ores/chrome",},
    ],
    results: [
        { id: "techpack:crushed_raw_chrome" },
        { id: "techpack:crushed_raw_chrome", chance: 0.5  },
        { id: "create:experience_nugget", chance: 0.75 },
    ],
  })
});
