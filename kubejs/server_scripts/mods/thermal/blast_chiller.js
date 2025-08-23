ServerEvents.recipes(e => {
    let recipeId = ['thermal:blast_chiller/']
    const recipes = [
        //Ferrous Pewter
        {
            input: [Fluid.of('kubejs:ice_coolant', 100), 'kubejs:hot_ferrous_pewter_ingot'],
            output: ['kubejs:ferrous_pewter_ingot'],
            id: (recipeId + 'ferrous_pewter')
        },
        //Plastic Sheet
        {
            input: [Fluid.of('pneumaticcraft:plastic',200)],
            output: [Item.of('pneumaticcraft:plastic', 2)],
            id: (recipeId + '')
        }
    ]
    recipes.forEach((recipe) => {
        e.recipes.thermal.chiller(recipe.output, recipe.input,).id(recipe.id)
    });

 })