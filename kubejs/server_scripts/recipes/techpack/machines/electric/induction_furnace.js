ServerEvents.recipes((e) => {
  e.forEachRecipe(
    {
      type: "minecraft:smelting",
    },
  (r) => {
      let ingredients = r.originalRecipeIngredients;
      let output = r.originalRecipeResult;
      e.recipes.custommachinery
        .custom_machine("techpack:basic_induction_furnace", 100)
        .requireEnergyPerTick(40)
        .damageItem("#techpack:electrodes", 1).chance(0.5)
        .requireItem(ingredients[0])
        .produceItem(Item.of(output.id));
    }
  );
});
