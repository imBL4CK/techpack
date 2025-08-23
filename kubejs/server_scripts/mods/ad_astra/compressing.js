/*
ServerEvents.recipes(e => {
    let recipeId = ['ad_astra:compressing/']
    const recipes = [
        {
            cookingtime : 100,
            energy : 20,
            ingredient : {
                item : 'minecraft:iron_ingot'
            },
            result : {
                count : 1,
                id : 'ad_astra:iron_plate'
            },
            id: ""
        }
    ]
    recipes.forEach((recipe) => {
        e.custom({
            "type": "ad_astra:compressing",
            "cookingtime": recipe.cookingtime,
            "energy": recipe.energy,
            "ingredient": recipe.ingredient,
            "result":  recipe.result
        }).id(recipe.id)
    })
})
*/