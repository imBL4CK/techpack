ServerEvents.recipes(e => {
    let recipeId = ['enderio:alloy_smelter/']
    const recipes = [
        //Stainless Steel
        {
            output: Item.of('#forge:ingots/stainless_steel', 3),
            input: ['#forge:ingots/manganese','#forge:ingots/invar','#forge:ingots/steel'],
            energy: 3200,
            xp: 5,
            id: (recipeId + 'stainless_steel_ingot')
        },
        //Hardned Glass
        {
            input: ['#forge:dusts/quartz','#forge:ingots/obsidian','#forge:sand'],
            output: Item.of('thermal:obsidian_glass'),
            energy: 4800,
            xp: 5,
            id: (recipeId + 'hardned_glass')
        },
        //HDPE Sheet
        {
            input: [Item.of('pneumaticcraft:plastic', 3)],
            output: Item.of('kubejs:hdpe_sheet'),
            energy: 4800,
            xp: 5,
            id: (recipeId + 'hdpe_sheet')
        }
    ]
    recipes.forEach((recipe) =>{
        e.recipes.enderio.alloy_smelting(recipe.output, recipe.input, recipe.energy, recipe.xp).id
    })
})