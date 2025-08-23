ServerEvents.recipes((e) => {
  
  let recipeId = "actuallysubstractions:atomic_reconstructor/";

  const recipes = [
    //Energized Steel
    {
      input: {
        tag: "forge:ingots/steel",
      },
      output: {
        item: "kubejs:energized_steel_ingot",
      },
      energy: 1000,
      id: "techlab/energized_steel",
    },
  ];
  
  recipes.forEach((recipe) => {
    e.custom({
      type: "actuallyadditions:laser",
      ingredient: recipe.input,
      result: recipe.output,
      energy: recipe.energy,
    }).id(`${recipeId}${recipe.id}`);
  });
});
