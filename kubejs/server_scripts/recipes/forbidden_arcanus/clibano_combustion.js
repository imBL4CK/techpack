ServerEvents.recipes((e) => {
  let recipeId = "forbidden_arcanus:clibano_combustion/";

  const recipes = [
    {
        input: "thermal:cinnabar",
        output: "kubejs:quicksilver",
        outputCount: 2,
        cooking_time: 400,
        experience: 0.7,
        soul_fire: true,
        id: "techlab/quicksilver"
    },
    {
        input: "minecraft:soul_sand",
        output: "tconstruct:soul_glass",
        outputCount: 1,
        cooking_time: 100,
        experience: 0.3,
        soul_fire: false,
        id: "tconstruct/soul_glass"
    }
  ];
  recipes.forEach((recipe) => {
    
    let clibanoRecipe = 
      {
        type: "forbidden_arcanus:clibano_combustion",
        cooking_time: recipe.cooking_time,
        experience: recipe.experience,
        ingredient: {
          item: recipe.input,
        },
        result: {
          item: recipe.output,
          count: recipe.outputCount
        }
      }

    if (recipe.soul_fire === true) {clibanoRecipe.fire_type = "soul_fire"} else {}

    e.custom(clibanoRecipe).id(`${recipeId}${recipe.id}`)
  });
});