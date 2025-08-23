ServerEvents.recipes((e) => {

  let recipeId = ["hexerei:pestle_and_mortar/"];

  const recipes = [
    //Iron dust
    {
      type: "hexerei:pestle_and_mortar",
      ingredients: [
        {
          tag: "forge:raw_materials/iron",
        },
        {
          tag: "forge:raw_materials/iron",
        },
        {
          tag: "forge:raw_materials/iron",
        },
        {
          tag: "forge:raw_materials/iron",
        },
        {
          tag: "forge:raw_materials/iron",
        },
      ],
      output: {
        item: "create:crushed_raw_iron",
        count: 7,
      },
      grindingTime: 100,
      id: "forge/iron_dust",
    },
    //Copper dust
    {
      type: "hexerei:pestle_and_mortar",
      ingredients: [
        {
          tag: "forge:raw_materials/copper",
        },
        {
          tag: "forge:raw_materials/copper",
        },
        {
          tag: "forge:raw_materials/copper",
        },
        {
          tag: "forge:raw_materials/copper",
        },
        {
          tag: "forge:raw_materials/copper",
        },
      ],
      output: {
        item: "create:crushed_raw_copper",
        count: 7,
      },
      grindingTime: 100,
      id: "forge/copper_dust",
    },
    //Gold dust
    {
      type: "hexerei:pestle_and_mortar",
      ingredients: [
        {
          tag: "forge:raw_materials/gold",
        },
        {
          tag: "forge:raw_materials/gold",
        },
        {
          tag: "forge:raw_materials/gold",
        },
        {
          tag: "forge:raw_materials/gold",
        },
        {
          tag: "forge:raw_materials/gold",
        },
      ],
      output: {
        item: "create:crushed_raw_gold",
        count: 7,
      },
      grindingTime: 100,
      id: "forge/gold_dust",
    },
    //tin dust
    {
      type: "hexerei:pestle_and_mortar",
      ingredients: [
        {
          tag: "forge:raw_materials/tin",
        },
        {
          tag: "forge:raw_materials/tin",
        },
        {
          tag: "forge:raw_materials/tin",
        },
        {
          tag: "forge:raw_materials/tin",
        },
        {
          tag: "forge:raw_materials/tin",
        },
      ],
      output: {
        item: "create:crushed_raw_tin",
        count: 7,
      },
      grindingTime: 100,
      id: "forge/tin_dust",
    },
    //Lead dust
    {
      type: "hexerei:pestle_and_mortar",
      ingredients: [
        {
          tag: "forge:raw_materials/lead",
        },
        {
          tag: "forge:raw_materials/lead",
        },
        {
          tag: "forge:raw_materials/lead",
        },
        {
          tag: "forge:raw_materials/lead",
        },
        {
          tag: "forge:raw_materials/lead",
        },
      ],
      output: {
        item: "create:crushed_raw_lead",
        count: 7,
      },
      grindingTime: 100,
      id: "forge/lead_dust",
    },
    //Silver dust
    {
      type: "hexerei:pestle_and_mortar",
      ingredients: [
        {
          tag: "forge:raw_materials/silver",
        },
        {
          tag: "forge:raw_materials/silver",
        },
        {
          tag: "forge:raw_materials/silver",
        },
        {
          tag: "forge:raw_materials/silver",
        },
        {
          tag: "forge:raw_materials/silver",
        },
      ],
      output: {
        item: "create:crushed_raw_silver",
        count: 7,
      },
      grindingTime: 100,
      id: "forge/silver_dust",
    },
    //Nickel dust
    {
      type: "hexerei:pestle_and_mortar",
      ingredients: [
        {
          tag: "forge:raw_materials/nickel",
        },
        {
          tag: "forge:raw_materials/nickel",
        },
        {
          tag: "forge:raw_materials/nickel",
        },
        {
          tag: "forge:raw_materials/nickel",
        },
        {
          tag: "forge:raw_materials/nickel",
        },
      ],
      output: {
        item: "create:crushed_raw_nickel",
        count: 7,
      },
      grindingTime: 100,
      id: "forge/nickel_dust",
    },
    //Bronze Blend
    {
      type: "hexerei:pestle_and_mortar",
      ingredients: [
        {
          tag: "forge:dusts/copper",
        },
        {
          tag: "forge:dusts/copper",
        },
        {
          tag: "forge:dusts/copper",
        },
        {
          tag: "forge:dusts/tin",
        },
        {
          tag: "techpack:catalysts",
        },
      ],
      output: {
        item: "thermal:bronze_dust",
        count: 4,
      },
      grindingTime: 200,
      id: "forge/bronze_dust",
    },
    //Electrum Blend
    {
      type: "hexerei:pestle_and_mortar",
      ingredients: [
        {
          tag: "forge:dusts/gold",
        },
        {
          tag: "forge:dusts/gold",
        },
        {
          tag: "forge:dusts/silver",
        },
        {
          tag: "forge:dusts/silver",
        },
        {
          tag: "techpack:catalysts",
        },
      ],
      output: {
        item: "thermal:electrum_dust",
        count: 4,
      },
      grindingTime: 200,
      id: "forge/electrum_dust",
    },
    //Invar Blend
    {
      type: "hexerei:pestle_and_mortar",
      ingredients: [
        {
          tag: "forge:dusts/iron",
        },
        {
          tag: "forge:dusts/iron",
        },
        {
          tag: "forge:dusts/nickel",
        },
        {
          tag: "techpack:catalysts",
        },
      ],
      output: {
        item: "thermal:invar_dust",
        count: 4,
      },
      grindingTime: 200,
      id: "forge/invar_dust",
    },
    //Constantan Blend
    {
      type: "hexerei:pestle_and_mortar",
      ingredients: [
        {
          tag: "forge:dusts/copper",
        },
        {
          tag: "forge:dusts/copper",
        },
        {
          tag: "forge:dusts/nickel",
        },
        {
          tag: "forge:dusts/nickel",
        },
        {
          tag: "techpack:catalysts",
        },
      ],
      output: {
        item: "thermal:constantan_dust",
        count: 4,
      },
      grindingTime: 200,
      id: "forge/constantan_dust",
    },
    //Pewter Blend
    {
      type: "hexerei:pestle_and_mortar",
      ingredients: [
        {
          tag: "forge:ingots/iron",
        },
        {
          tag: "forge:ingots/lead",
        },
      ],
      output: {
        item: "eidolon:pewter_blend",
        count: 2,
      },
      grindingTime: 200,
      id: "forge/pewter_blend",
    },
  ];

  recipes.forEach((recipe) => {
    e.custom({
      type: recipe.type,
      ingredients: recipe.ingredients,
      output: recipe.output,
      grindingTime: recipe.grindingTime,
    }).id(`${recipeId}${recipe.id}`);
  });
});
