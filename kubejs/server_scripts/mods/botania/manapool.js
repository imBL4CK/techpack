ServerEvents.recipes(e => {
    let recipeId = 'botania:manapool/';

    const recipes = [
        {
            input: '#forge:ingots/steel',
            output: '#forge:ingots/manasteel',
            mana: 500,
            id: (recipeId + 'manasteel_ingot')
        }
    ]
    recipes.forEach((recipe) => {
        e.recipes.botania.mana_infusion(recipe.output, recipe.input, recipe.mana).id(recipe.id)
    });
})