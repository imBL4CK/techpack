ServerEvents.recipes((e) => {
    let recipeId = "thermal:sawmill/";
  
    const recipes = [
      //Wooden Board
      {
        output: ["4x #forge:plates/wooden"],
        input: ["#minecraft:planks"],
        id: "techlab/wooden_plate",
      },
    ];
    recipes.forEach((recipe) => {
      e.recipes.thermal.sawmill(recipe.output, recipe.input).id(`${recipeId}${recipe.id}`);
    });
  });