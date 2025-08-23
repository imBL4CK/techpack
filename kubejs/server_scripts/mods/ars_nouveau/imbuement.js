ServerEvents.recipes(e => {
    let recipeId = ['ars_nouveau:imbuement/']
    const recipes = [
        //Fire Essence
        {
        input: 'ars_nouveau:source_gem',
        output: 'ars_nouveau:fire_essence',
        source: 1000,
        reagent: ['quark:soul_bead','minecraft:blaze_rod','minecraft:fire_charge'],
        id: (recipeId + 'fire_essence')
        },
        //Earth Essence   
        {
        input: 'ars_nouveau:source_gem',
        output: 'ars_nouveau:earth_essence',
        source: 1000,
        reagent: ['createaddition:biomass_pellet','thermal:basalz_rod','eidolon:merammer_root'],
        id: (recipeId + 'earth_essence')
        },
        //Water Essence
        {
        input: 'ars_nouveau:source_gem',
        output: 'ars_nouveau:water_essence',
        source: 1000,
        reagent: ['minecraft:water_bucket','thermal:blizz_rod','minecraft:prismarine_shard'],
        id: (recipeId + 'water_essence')
        },        
        //Air Essence
        {
        input: 'ars_nouveau:source_gem',
        output: 'ars_nouveau:air_essence',
        source: 1000,
        reagent: ['thermal:blitz_rod', 'ars_nouveau:wilden_wing', 'forbidden_arcanus:golden_feather'],
        id: (recipeId + 'air_essence')
        }
    ]
    recipes.forEach((recipe) => {
        e.recipes.ars_nouveau.imbuement(recipe.input, recipe.output, recipe.source, recipe.reagent).id(recipe.id)
    });
})