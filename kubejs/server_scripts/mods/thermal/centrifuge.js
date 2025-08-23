    ServerEvents.recipes(e => {
        let recipeId = 'thermal:centrifuge/';
    
        const recipes = [
            {
                input: '#forge:dusts/cinnabar',
                output: [Item.of('#forge:dusts/gold').withChance(0.3), Fluid.of('kubejs:liquid_mercury', 250)],
                id: (recipeId + 'mercury')
            }
        ]
        recipes.forEach((recipe) => {
            e.recipes.thermal.centrifuge(recipe.output, recipe.input).id(recipe.id)
        });
    })