ServerEvents.recipes((e) => {

  let recipeId = ["hexerei:mixing_cauldron/"];

  const recipes = [
    //Zombie Heart Doubling
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          item: "eidolon:zombie_heart",
        },
        {
          item: "malum:arcane_spirit",
        },
      ],
      output: {
        item: "eidolon:zombie_heart",
        count: 2,
      },
      liquidOutput: {
        fluid: "minecraft:water",
      },
      fluidConsumed: 500,
      heated: true,
      id: "doubling/eidolon/zombie_heart",
    },
    //Tattered Cloth Doubling
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          item: "eidolon:tattered_cloth",
        },
        {
          item: "malum:arcane_spirit",
        },
      ],
      output: {
        item: "eidolon:tattered_cloth",
        count: 2,
      },
      liquidOutput: {
        fluid: "minecraft:water",
      },
      fluidConsumed: 500,
      heated: true,
      id: "doubling/eidolon/tattered_cloth",
    },
    //Wraith Heart Doubling
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          item: "eidolon:wraith_heart",
        },
        {
          item: "malum:arcane_spirit",
        },
      ],
      output: {
        item: "eidolon:wraith_heart",
        count: 2,
      },
      liquidOutput: {
        fluid: "minecraft:water",
      },
      fluidConsumed: 500,
      heated: true,
      id: "doubling/eidolon/wraith_heart",
    },
    //Eidolon Tallow
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          item: "minecraft:rotten_flesh",
        },
        {
          item: "minecraft:rotten_flesh",
        },
        {
          item: "minecraft:rotten_flesh",
        },
        {
          item: "minecraft:rotten_flesh",
        },
      ],
      output: {
        item: "eidolon:tallow",
        count: 5,
      },
      liquidOutput: {
        fluid: "hexerei:blood_fluid",
      },
      fluidConsumed: 500,
      heated: true,
      id: "eidolon/tallow",
    },
    //Polished Wood
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          tag: "minecraft:planks",
        },
        {
          tag: "minecraft:planks",
        },
        {
          tag: "minecraft:planks",
        },
        {
          tag: "minecraft:planks",
        },
        {
          item: "eidolon:enchanted_ash",
        },
        {
          item: "eidolon:soul_shard",
        },
      ],
      output: {
        item: "eidolon:polished_planks",
        count: 4,
      },
      liquidOutput: {
        fluid: "minecraft:water",
      },
      fluidConsumed: 100,
      heated: true,
      id: "eidolon/polished_planks",
    },
    //Shadow Gem
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          tag: "minecraft:coals",
        },
        {
          item: "minecraft:ghast_tear",
        },
        {
          item: "eidolon:soul_shard",
        },
        {
          item: "eidolon:soul_shard",
        },
        {
          item: "eidolon:death_essence",
        },
        {
          item: "eidolon:death_essence",
        },
        {
          tag: "forge:gems/diamond",
        },
      ],
      output: {
        item: "eidolon:shadow_gem",
        count: 1,
      },
      liquidOutput: {
        fluid: "minecraft:water",
      },
      fluidConsumed: 100,
      heated: true,
      id: "eidolon/shadow_gem",
    },
    //Mundabitur Dust
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          item: "eidolon:crimson_essence",
        },
        {
          item: "eidolon:ender_calx",
        },
        {
          item: "eidolon:soul_shard",
        },
        {
          item: "forbidden_arcanus:arcane_crystal_dust",
        },
        {
          item: "minecraft:phantom_membrane",
        },
        {
          item: "minecraft:blaze_powder",
        },
      ],
      output: {
        item: "forbidden_arcanus:mundabitur_dust",
        count: 1,
      },
      liquidOutput: {
        fluid: "minecraft:water",
      },
      fluidConsumed: 100,
      heated: true,
      id: "forbidden_arcanus/mundabitur_dust",
    },
    //Alchemical Brass from Iron
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          item: "minecraft:iron_ingot",
        },
        {
          item: "eidolon:crimson_essence",
        },
        {
          item: "eidolon:ender_calx",
        },
      ],
      output: {
        item: "kubejs:alchemical_brass_ingot",
        count: 1,
      },
      liquidOutput: { fluid: "minecraft:water" },
      fluidConsumed: 1000,
      heated: true,
      id: "techlab/alchemical_brass/from_iron",
    },
    //Alchemical Brass from Copper
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          item: "minecraft:copper_ingot",
        },
        {
          item: "eidolon:crimson_essence",
        },
        {
          item: "eidolon:ender_calx",
        },
      ],
      output: {
        item: "kubejs:alchemical_brass_ingot",
        count: 1,
      },
      liquidOutput: { fluid: "minecraft:water" },
      fluidConsumed: 1000,
      heated: true,
      id: "techlab/alchemical_brass/from_copper",
    },
    //Runewood Log
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          tag: "minecraft:logs",
        },
        {
          item: "eidolon:ender_calx",
        },
        {
          item: "eidolon:ender_calx",
        },
        {
          item: "eidolon:enchanted_ash",
        },
        {
          item: "malum:earthen_spirit",
        },
        {
          item: "malum:arcane_spirit",
        },
        {
          item: "malum:arcane_spirit",
        },
        {
          item: "forbidden_arcanus:mundabitur_dust",
        },
      ],
      output: {
        item: "malum:runewood_log",
        count: 1,
      },
      liquidOutput: { fluid: "minecraft:water" },
      fluidConsumed: 1000,
      heated: true,
      id: "malum/runewood",
    },
    //Deorum Ingot
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          tag: "forge:ingots/gold",
        },
        {
          tag: "minecraft:coals",
        },
        {
          tag: "minecraft:coals",
        },
        {
          item: "forbidden_arcanus:mundabitur_dust",
        },
        {
          item: "forbidden_arcanus:mundabitur_dust",
        },
        {
          item: "forbidden_arcanus:arcane_crystal_dust",
        },
        {
          item: "forbidden_arcanus:arcane_crystal_dust",
        },
      ],
      output: {
        item: "forbidden_arcanus:deorum_ingot",
        count: 1,
      },
      liquidOutput: { fluid: "minecraft:water" },
      fluidConsumed: 1000,
      heated: true,
      id: "forbidden_arcanus/deorum_ingot",
    },
    //Ender Essence
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          item: "eidolon:ender_calx",
        },
        {
          item: "eidolon:offering_incense",
        },
        {
          item: "minecraft:glass_bottle",
        },
        {
          tag: "forge:ender_pearls",
        },
      ],
      output: {
        item: "kubejs:ender_essence",
        count: 1,
      },
      liquidOutput: { fluid: "minecraft:water" },
      fluidConsumed: 1000,
      heated: true,
      id: "techlab/ender_essence",
    },
    //Ender Eye
    {
      liquid: {
        fluid: "thermal:glowstone",
      },
      ingredients: [
        {
          tag: "forge:ender_pearls",
        },
        {
          item: "malum:ether",
        },
        {
          tag: "hexerei:herbs",
        }
      ],
      output: {
        item: "minecraft:ender_eye",
        count: 1,
      },
      liquidOutput: { fluid: "thermal:glowstone" },
      fluidConsumed: 1000,
      heated: true,
      id: "minecraft/ender_eye",
    },
    //Offering Incense
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          item: "eidolon:merammer_resin",
        },
        {
          item: "eidolon:enchanted_ash",
        },
        {
          item: "eidolon:oanna_bloom",
        },
      ],
      output: {
        item: "eidolon:offering_incense",
      },
      liquidOutput: {
        fluid: "minecraft:water",
      },
      fluidConsumed: 500,
      heated: false,
      id: "eidolon/offering_incense",
    },
    //Antique Ink
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          tag: "forge:dyes/black",
        },
        {
          item: "minecraft:glass_bottle",
        },
        {
          tag: "hexerei:herbs",
        },
      ],
      output: {
        item: "supplementaries:antique_ink",
      },
      liquidOutput: {
        fluid: "minecraft:water",
      },
      fluidConsumed: 500,
      heated: false,
      id: "supplementaries/antique_ink",
    },
    //Empty Research Page
    {
      liquid: {
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          item: "minecraft:paper",
        },
        {
          item: "minecraft:paper",
        },
        {
          item: "minecraft:paper",
        },
      ],
      output: {
        item: "kubejs:empty_research_page",
        count: 3
      },
      liquidOutput: {
        fluid: "minecraft:water",
      },
      fluidConsumed: 500,
      heated: false,
      id: "techlab/empty_research_page",
    },
  ];

  recipes.forEach((recipe) => {

    let cauldronRecipe = {
      type: "hexerei:mixingcauldron",
      liquid: recipe.liquid,
      ingredients: recipe.ingredients,
      output: recipe.output,
      liquidOutput: recipe.liquidOutput,
      fluidLevelsConsumed: recipe.fluidConsumed,
    }

    if (recipe.heated === true) {cauldronRecipe.heatRequirement = "heated"} else {}

    e.custom(cauldronRecipe).id(`${recipeId}${recipe.id}`);
  })
})
