ServerEvents.recipes((e) => {
  e.forEachRecipe(
    {
      type: "minecraft:smelting",
    },
    (r) => {
      let ingredients = r.originalRecipeIngredients;
      let output = r.originalRecipeResult;
      e.recipes.custommachinery
        .custom_machine("custommachinery:industrialrevival/industrial_furnace", 600)
        .requireEnergyPerTick(128)
        .requireItem(Item.of(ingredients[0], 32))
        .requireStructure(
          [
            ["ccc", "ccc", "ccc"],
            [" c ", "cbc", " m "],
            ["ihi", "h h", "ihi"],
            ["ihi", "h h", "ihi"],
          ],
          { c: "kubejs:steel_casing",b: "create:blaze_burner", h:"kubejs:heatproof_casing", i:"minecraft:iron_bars" }
        )
        .produceItem(Item.of((output.id), 32));
    }
  );
});
