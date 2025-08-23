let enabled = false;

if (enabled === true) {
  ServerEvents.recipes((e) => {
    let minerals = [
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
    let materials = [
      "iron",
      "copper",
      "gold",
      "tin",
      "lead",
      "silver",
      "nickel",
      "zinc",
      "lithium",
      "cobalt",
    ];
    const CrushingRecipes = [
      {
        id: "chalcopyrite",
        input: "kubejs:raw_chalcopyrite",
        output: "create:crushed_raw_copper",
        extra: "thermal:sulfur",
      },
      {
        id: "magnetite",
        input: "kubejs:raw_magnetite",
        output: "create:crushed_raw_iron",
        extra: "create:crushed_raw_iron",
      },
      {
        id: "calaverite",
        input: "kubejs:raw_calaverite",
        output: "create:crushed_raw_gold",
        extra: "enlightened_end:raw_bismuth",
      },
      {
        id: "cassiterite",
        input: "kubejs:raw_cassiterite",
        output: "create:crushed_raw_tin",
        extra: "thermal:apatite",
      },
      {
        id: "galena",
        input: "kubejs:raw_galena",
        output: "create:crushed_raw_lead",
        extra: "thermal:sulfur",
      },
      {
        id: "argentite",
        input: "kubejs:raw_argentite",
        output: "create:crushed_raw_silver",
        extra: "thermal:sulfur",
      },
      {
        id: "pentlandite",
        input: "kubejs:raw_pentlandite",
        output: "create:crushed_raw_nickel",
        extra: "create:crushed_raw_iron",
      },
      {
        id: "cobaltoite",
        input: "kubejs:raw_cobaltoite",
        output: "create:crushed_raw_cobalt",
        extra: "kubejs:calcium",
      },
    ];
    //Ore to Raw
    minerals.forEach((mineral) => {
      let crushed = {
        type: "actuallyadditions:crushing",
        ingredient: {
          item: "kubejs:" + mineral + "_ore",
        },
        result: [
          {
            chance: 1.0,
            result: {
              Count: 1,
              id: "kubejs:raw_" + mineral,
            },
          },
          {
            chance: 0.3,
            result: {
              Count: 1,
              id: "kubejs:raw_" + mineral,
            },
          },
        ],
      };
      e.custom(crushed).id(
        "actuallysubstractions/crusher/library/ore_to_raw/" + mineral
      );
    });
    //Raw to Crushed
    CrushingRecipes.forEach((recipe) => {
      let crushed = {
        type: "actuallyadditions:crushing",
        ingredient: {
          item: recipe.input,
        },
        result: [
          {
            chance: 1.0,
            result: {
              Count: 1,
              id: recipe.output,
            },
          },
          {
            chance: 0.3,
            result: {
              Count: 1,
              id: recipe.extra,
            },
          },
        ],
      };
      e.custom(crushed).id(
        "ctuallysubstractions/crusher/library/raw_to_crushed/" + recipe.id
      );
    });
    //Crushed to Shard
    materials.forEach((material) => {
      let crushed = {
        type: "actuallyadditions:crushing",
        ingredient: {
          item: "create:crushed_raw_" + material,
        },
        result: [
          {
            chance: 1.0,
            result: {
              Count: 7,
              id: "kubejs:" + material + "_shard",
            },
          },
          {
            chance: 0.5,
            result: {
              Count: 1,
              id: "kubejs:" + material + "_shard",
            },
          },
        ],
      };
      e.custom(crushed).id(
        "actuallysubstractions/crusher/library/crushed_to_shard/" + material
      );
    });
  });
} else {
}
