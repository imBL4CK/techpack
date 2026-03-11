ServerEvents.recipes((e) => {
  e.forEachRecipe(
    {
      type: "minecraft:smelting",
    },
    (r) => {
      let ingredients = r.originalRecipeIngredients;
      let output = r.originalRecipeResult;
      e.recipes.custommachinery
        .custom_machine("techpack:basic_smelter", 200)
        .requireEnergyPerTick(10)
        .requireItem(ingredients[0])
        .produceItem(Item.of(output.id));
    }
  );
});
