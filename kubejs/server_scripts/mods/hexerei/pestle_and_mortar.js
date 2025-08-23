ServerEvents.recipes(e => {
    let recipeId = ['hexerei:pestle_and_mortar/']
    const recipes = [
        //Iron dust
        {
            type: "hexerei:pestle_and_mortar",
            ingredients: [
            {
                tag: "forge:raw_materials/iron"
            },
            {
                tag: "forge:raw_materials/iron"
            },
            {
                tag: "forge:raw_materials/iron"
            }
            ],
            output: {
            item: "thermal:iron_dust",
            count: 4
            },
            grindingTime: 100,
            id: recipeId+'iron_dust'
        }
    ]
    recipes.forEach((recipe) => {
        e.custom({
        "type": recipe.type,
        "ingredients": recipe.ingredients,
        "output": recipe.output,
        "grindingTime": recipe.grindingTime
    }).id(recipe.id);
    });
})
/*
{
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [
      {
        "item": "minecraft:glow_berries"
      },
      {
        "tag": "hexerei:flower_biproduct"
      }
    ],
    "output": {
      "item": "hexerei:wax_blend",
      "count": 2
    },
    "grindingTime": 200
  }
*/