ServerEvents.recipes(e => {
    let recipeId = ['hexerei:mixing_cauldron/']
    const recipes = [
      //Nature Reagent
      {
        liquid: {
            "fluid": "kubejs:liquid_mercury",
        },
        ingredients: [
          {
            "item": "hexerei:yellow_dock_leaves",
          },
          {
            "item": "hexerei:mandrake_flowers",
          },
          {
            "item": "hexerei:mugwort_flowers",
          },
          {
            "item": "hexerei:belladonna_flowers",
          },
          {
            "item": "hexerei:belladonna_berries",
          },
          {
            "item": "hexerei:mandrake_root",
          },
          {
            "item": "hexerei:yellow_dock_flowers",
          },
          {
            "item": "kubejs:empty_alchemy_jar",
          },
        ],
        output: {
          "item": "kubejs:nature_reagent",
        },
        liquidOutput: {
          "fluid": "minecraft:lava",
        },
        fluidConsumed: 500,
        id: recipeId + "nature_reagent",
      },
      //Sulfur Reagent
      {
        liquid: {
            "fluid": "minecraft:water",
        },
        ingredients: [
          {
            "item": "kubejs:empty_alchemy_jar",
          },
          {
            "tag": "forge:gems/sulfur",
          },
          {
            "tag": "forge:gems/sulfur",
          },
          {
            "tag": "forge:gems/sulfur",
          }
        ],
        output: {
          "item": "kubejs:sulfur_reagent",
        },
        liquidOutput: {
          "fluid": "water",
        },
        fluidConsumed: 500,
        id: recipeId + "sulfur_reagent",
      },
    ];
    recipes.forEach((recipe) => {
        e.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": recipe.liquid,
        "ingredients": recipe.ingredients,
        "output": recipe.output,
        "liquidOutput": recipe.liquidOutput,
        "fluidLevelsConsumed": recipe.fluidConsumed
    }).id(recipe.id);
    });
})
/*
{
  "type": "hexerei:mixingcauldron",
  "liquid": {
    "fluid": "minecraft:lava"
  },
  "ingredients": [
    {
      "item": "minecraft:netherite_ingot"
    },
  ],
  "output": {
    "item": "hexerei:warhammer"
  },
  "liquidOutput": {
    "fluid": "minecraft:lava"
  },
  "fluidLevelsConsumed": 1500
} */