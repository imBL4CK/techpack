ServerEvents.recipes((e) => {
  let recipeId = ["minecraft:smelting/"];

  const recipes = [
    //Advanced Alloy
    {
      Input: "kubejs:advanced_alloy_dust",
      Output: "kubejs:advanced_alloy_ingot",
      id: `${recipeId}techlab/advanced_alloy_ingot`,
    },
    //Manganese Ingot
    {
      Input: "kubejs:manganese_dust",
      Output: "kubejs:manganese_ingot",
      id: `${recipeId}techlab/manganese_ingot`,
    },
  ];
  recipes.forEach((recipe) => {
    e.smelting(recipe.Output, recipe.Input).id(recipe.id);
  });
});
