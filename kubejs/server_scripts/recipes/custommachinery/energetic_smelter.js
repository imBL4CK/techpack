ServerEvents.recipes((e) => {
  e.forEachRecipe(
    {
      type: "minecraft:smelting",
    },
    (r) => {
      let ingredients = r.originalRecipeIngredients;
      let output = r.originalRecipeResult;
      e.recipes.custommachinery
        .custom_machine("custommachinery:industrialrevival/energetic_smelter", 300)
        .requireEnergyPerTick(4)
        .requireItem(ingredients[0])
        .produceItem(Item.of(output.id));
    }
  );
});
