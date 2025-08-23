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
      "desh",
      "ostrum",
      "calorite",
      "zinc",
      "lithium",
      "cobalt",
    ];
    const CrushingRecipes = [
      //Chalcopyrite
      {
        ingredients: "chalcopyrite",
        results: [
          {
            item: "create:crushed_raw_copper",
          },
          {
            chance: 0.33,
            item: "create:crushed_raw_copper",
          },
          {
            chance: 0.4,
            tag: "forge:gems/sulfur",
          },
          {
            chance: 0.7,
            item: "create:crushed_raw_iron",
          },
          {
            chance: 0.75,
            item: "create:experience_nugget",
          },
        ],
      },
      //Magnetite
      {
        ingredients: "magnetite",
        results: [
          {
            item: "create:crushed_raw_iron",
          },
          {
            chance: 0.33,
            item: "create:crushed_raw_iron",
          },
          {
            chance: 0.75,
            item: "create:experience_nugget",
          },
        ],
      },
      //Calaverite
      {
        ingredients: "calaverite",
        results: [
          {
            item: "create:crushed_raw_gold",
          },
          {
            chance: 0.33,
            item: "create:crushed_raw_gold",
          },
          {
            chance: 0.3,
            item: "enlightened_end:raw_bismuth",
          },
          {
            chance: 0.75,
            item: "create:experience_nugget",
          },
        ],
      },
      //Cassiterite
      {
        ingredients: "cassiterite",
        results: [
          {
            item: "create:crushed_raw_tin",
          },
          {
            chance: 0.33,
            item: "create:crushed_raw_tin",
          },
          {
            chance: 0.3,
            item: "thermal:apatite",
          },
          {
            chance: 0.75,
            item: "create:experience_nugget",
          },
        ],
      },
      //Galena
      {
        ingredients: "galena",
        results: [
          {
            item: "create:crushed_raw_lead",
          },
          {
            chance: 0.33,
            item: "create:crushed_raw_lead",
          },
          {
            chance: 0.2,
            tag: "forge:gems/sulfur",
          },
          {
            chance: 0.75,
            item: "create:experience_nugget",
          },
        ],
      },
      //Argentite
      {
        ingredients: "argentite",
        results: [
          {
            item: "create:crushed_raw_silver",
          },
          {
            chance: 0.33,
            item: "create:crushed_raw_silver",
          },
          {
            chance: 0.2,
            tag: "forge:gems/sulfur",
          },
          {
            chance: 0.75,
            item: "create:experience_nugget",
          },
        ],
      },
      //Pentlandite
      {
        ingredients: "pentlandite",
        results: [
          {
            item: "create:crushed_raw_nickel",
          },
          {
            chance: 0.33,
            item: "create:crushed_raw_nickel",
          },
          {
            chance: 0.5,
            item: "create:crushed_raw_iron",
          },
          {
            chance: 0.2,
            tag: "forge:gems/sulfur",
          },
          {
            chance: 0.75,
            item: "create:experience_nugget",
          },
        ],
      },
      //Spodumene
      {
        ingredients: "spodumene",
        results: [
          {
            item: "create:crushed_raw_aluminum",
          },
          {
            chance: 0.33,
            item: "create:crushed_raw_aluminum",
          },
          {
            chance: 0.5,
            item: "create:crushed_raw_copper",
          },
          {
            chance: 0.3,
            item: "create:crushed_raw_lithium",
          },
          {
            chance: 0.75,
            item: "create:experience_nugget",
          },
        ],
      },
      //Cobaltoite
      {
        ingredients: "cobaltoite",
        results: [
          {
            item: "create:crushed_raw_cobalt",
          },
          {
            chance: 0.5,
            item: "create:crushed_raw_cobalt",
          },
          {
            chance: 0.5,
            item: "kubejs:calcium_dust",
          },
          {
            chance: 0.5,
            item: "minecraft:coal",
          },
          {
            chance: 0.75,
            item: "create:experience_nugget",
          },
        ],
      },
      //Kimberlite
      {
        ingredients: "kimberlite",
        results: [
          {
            item: "minecraft:coal",
          },
          {
            chance: 0.5,
            item: "minecraft:coal",
          },
          {
            chance: 0.7,
            item: "minecraft:diamond",
          },
          {
            chance: 0.4,
            item: "create:crushed_raw_iron",
          },
          {
            chance: 0.2,
            tag: "forge:gems/sulfur",
          },
          {
            chance: 0.75,
            item: "create:experience_nugget",
          },
        ],
      },
      //Emerald
      {
        ingredients: "emerald",
        results: [
          {
            item: "minecraft:emerald",
          },
          {
            chance: 0.5,
            item: "minecraft:emerald",
          },
          {
            chance: 0.2,
            tag: "forge:silicon",
          },
          {
            chance: 0.75,
            item: "create:experience_nugget",
          },
        ],
      },
    ];
    //Crushing Wheel
    {
      //Ore to Raw
      minerals.forEach((Omineral) => {
        let Ocrushed = {
          type: "create:crushing",
          ingredients: [
            {
              item: "kubejs:" + Omineral + "_ore",
            },
          ],
          processingTime: 250,
          results: [
            {
              item: "kubejs:raw_" + Omineral,
            },
            {
              chance: 0.33,
              item: "kubejs:raw_" + Omineral,
            },
            {
              chance: 0.75,
              item: "minecraft:gravel",
            },
          ],
        };
        e.custom(Ocrushed).id("create:crushing/library/ore_to_raw" + Omineral);
      });
      //Raw to Crushed
      CrushingRecipes.forEach((crushing_recipe) => {
        let Rcrushing = {
          type: "create:crushing",
          ingredients: [
            {
              item: "kubejs:raw_" + crushing_recipe.ingredients,
            },
          ],
          processingTime: 250,
          results: crushing_recipe.results,
        };
        e.custom(Rcrushing).id(
          "create:crushing/library/raw_to_crushed/" +
            crushing_recipe.ingredients
        );
      });
      //Crushed to Shard
      materials.forEach((Smineral) => {
        let Scrushed = {
          type: "create:crushing",
          ingredients: [
            {
              item: "create:crushed_raw_" + Smineral,
            },
          ],
          processingTime: 250,
          results: [
            {
              item: "kubejs:" + Smineral + "_shard",
              count: 6,
            },
            {
              chance: 0.75,
              item: "kubejs:" + Smineral + "_shard",
            },
            {
              chance: 0.5,
              item: "kubejs:" + Smineral + "_shard",
            },
          ],
        };
        e.custom(Scrushed).id(
          "create:crushing/library/raw_to_shard/" + Smineral
        );
      });
    }
  });
} else {
}
