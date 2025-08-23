ServerEvents.recipes(e =>{
    const recipes = [
        //Raw Manganese
        /*
        {
            input: Item.of('#forge:ores/iron'),
            output: ['#forge:ingots/manganese'],
            energy: 1000,
            bonus: EnderIOBonusType.NONE
        }
        */
    ]
    recipes.forEach((recipe) =>{
        e.recipes.enderio.sag_milling(recipe.output, recipe.input, recipe.energy, recipe.bonus).id(recipe.id).bonus(recipe.bonus)
    })
})
/*
event.recipes.enderio.sag_milling(
    [
        Ingredient.of("glass", 3),
        Item.of("stone", 15).withChance(0.5),
        "3x iron_ingot"
    ],
    "#forge:ingots",
    10000,
    EnderIOBonusType.NONE
);
*/