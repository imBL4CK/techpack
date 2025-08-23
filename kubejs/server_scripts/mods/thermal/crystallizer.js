ServerEvents.recipes(e => {
    let recipeId = 'thermal:crystallizer/';

    const recipes = [
        //Chromatic Mix
        {
            input: [
            {
            fluid: "kubejs:liquid_mercury",
            amount: 100
            },
            {
            tag: "forge:dusts/lumium"
            },
            {
            tag: "forge:dusts/obsidian"
            }],
            output: [
            {
            item: "kubejs:chromatic_mix"
            }],
            id: (recipeId + 'chromatic_mix')
        }
    ]
    recipes.forEach((recipe) => {
        e.custom({
        "type": "thermal:crystallizer",
        "ingredients": recipe.input,
        "result": recipe.output
        }).id(recipe.id)
    });
})