ServerEvents.recipes((e) => {
  
  let recipeId = "thermal:centrifugal_separator/";
  
  const recipes = [
    //Chromium Dust
    {
      output: ["kubejs:chromium_dust"],
      input: ["#forge:dusts/ruby"],
      id: "techlab/chromium_dust",
    },
    //Manganese Dust
    {
      output: ["kubejs:manganese_dust"],
      input: ["#forge:dusts/iron"],
      id: "techlab/manganese_dust",
    },
  ];
  recipes.forEach((recipe) => {
    e.recipes.thermal.centrifuge(recipe.output, recipe.input).id(`${recipeId}${recipe.id}`);
  });
});
