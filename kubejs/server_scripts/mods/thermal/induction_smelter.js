ServerEvents.recipes(e => {
    let recipeId = 'thermal:induction_smelter/';

    const recipes = [
        //Plastic
        {
            input: Item.of('pneumaticcraft:plastic', 3),
            output: 'kubejs:hdpe_sheet',
            energy: 1000,
            id: (recipeId + 'hdpe_sheet')
        },
        //Stainless Steel
        {
            input: ['#forge:ingots/manganese','#forge:ingots/invar','#forge:ingots/steel'],
            output: Item.of('kubejs:stainless_steel_ingot', 3),
            energy: 6000,
            id: (recipeId + 'stainless_steel')
        },
        //Chromatic Compound
        {
            input: ['kubejs:nature_reagent', 'kubejs:sulfur_reagent', 'kubejs:chromatic_mix'],
            output: 'create:chromatic_compound',
            energy: 6000,
            id: (recipeId + 'chromatic_compound')
        },
        //Radiant Coil
        {
            input: [Item.of('create:refined_radiance', 3), Item.of('create:shadow_steel', 3)],
            output: 'kubejs:radiant_coil',
            energy: 6000,
            id: (recipeId + 'radiant_coil')
        }
    ]
    recipes.forEach((recipe) => {
        e.recipes.thermal.smelter(recipe.output, recipe.input).energy(recipe.energy).id(recipe.id)
    });
})