ServerEvents.recipes((e) => {
  e.forEachRecipe(
    {
      type: "minecraft:smelting",
    },
    (r) => {
      let ingredients = r.originalRecipeIngredients;
      let output = r.originalRecipeResult;
      e.recipes.custommachinery
        .custom_machine("techpack:electric_smelter", 200)
        .requireEnergyPerTick(10)
        .requireItemOnEnd(ingredients[0])
        .produceItem(Item.of(output.id))
        .resetOnError();
    }
  );
});
