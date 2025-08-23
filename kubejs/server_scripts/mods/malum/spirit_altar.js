ServerEvents.recipes(e =>{
    let recipeId = ['malum:spirit_altar/']
    const recipes = [
        //Duplicate Fire Essence
        {
        input:{
            "count": 1,
            "item": "ars_nouveau:fire_essence"
            },
        extra:{
            "count": 1,
            "item": "quark:red_corundum_cluster"
            },
        output:{
            "count": 2,
            "item": "ars_nouveau:fire_essence"
            },
        spirits: [
            {
                "type": "sacred",
            }
            ],
        id: (recipeId + 'duplicate/fire_essence')
        }
    ]
    recipes.forEach((recipe) => {
        e.custom({
        "type": "malum:spirit_infusion",
        "extra_items": recipe.extra,
        "input": recipe.input,
        "output": recipe.output,
        "spirits": recipe.spirits
    }).id(recipe.id)
    })
})