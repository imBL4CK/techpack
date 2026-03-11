ServerEvents.recipes((e) => {
  e.forEachRecipe(
    {
      type: "minecraft:smelting",
    },
    (r) => {
      let ingredients = r.originalRecipeIngredients;
      let output = r.originalRecipeResult;
      e.recipes.custommachinery
        .custom_machine("techpack:steam_smelter", 200)
        .requireFluidPerTick("1x techpack:steam")
        .requireItem(ingredients[0])
        .produceItem(Item.of(output.id));
    }
  );
});
