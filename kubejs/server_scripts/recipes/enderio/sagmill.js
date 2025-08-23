ServerEvents.recipes((e) => {
  
  let recipeId = "enderio:sagmill/";

  const recipes = [
    //Amethyst Dust
    {
      output: ["#forge:dusts/amethyst"],
      input: ["#forge:gems/amethyst"],
      id: "forge/amethyst_dust",
    },
    //Zinc Dust
    {
      output: ["#forge:dusts/zinc"],
      input: ["#forge:ingots/zinc"],
      id: "forge/zinc_dust",
    },,
    //Ender Dust
    {
      output: ["#forge:dusts/ender_pearl"],
      input: ["#forge:ender_pearls"],
      id: "forge/ender_dust",
    },
  ];
  recipes.forEach((recipe) => {
    e.recipes.enderio.sag_milling(recipe.output, recipe.input).id(`${recipeId}${recipe.id}`);
  });
});
