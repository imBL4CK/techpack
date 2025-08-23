ServerEvents.recipes(e => {
    let recipeId = ['ars_nouveau:enchanting_apparatus/']
    const recipes = [
        //Void Chasis
        {
            inputs: 
            [
            '#forge:gears/dark_steel',
            'enderio:dark_steel_bars',
            '#forge:gears/dark_steel',
            'enderio:dark_steel_bars',
            '#forge:gears/dark_steel',
            '#forge:plastic',
            '#forge:gears/dark_steel', 
            '#forge:dusts/grains_of_infinity'
            ],
            reagent: 'kubejs:primitive_machine_casing',
            outputs: 'enderio:void_chassis',
            source: 1000,
            keepNBT: false,
            id: (recipeId + 'void_chassis')
        },
        //Machine Frame
        {
            inputs: 
            [
            '#forge:gears/tin',
            '#forge:gears/tin',
            '#forge:ingots/manasteel',
            '#forge:plates/stainless_steel',
            '#forge:plates/stainless_steel',
            '#forge:plastic',
            '#forge:dusts/mundabitur',
            'thermal:redstone_servo'
        ],
            reagent: 'thermal:obsidian_glass',
            outputs: 'thermal:machine_frame',
            source: 1000,
            keepNBT: false,
            id: (recipeId + 'machine_frame')
        },
        //Induction Smelter
        {
            inputs: 
            [
            'thermal:rf_coil',
            '#forge:plastic',
            '#forge:plastic',
            'create:blaze_burner',
            'minecraft:furnace',
            'pneumaticcraft:printed_circuit_board'
        ],
            reagent: 'thermal:machine_frame',
            outputs: 'thermal:machine_smelter',
            source: 1000,
            keepNBT: false,
            id: (recipeId + 'induction_smelter')
        },
        //Crystallizer
        {
            inputs: 
            [
            'thermal:rf_coil',
            'kubejs:hdpe_sheet',
            'kubejs:hdpe_sheet',
            'twilightforest:naga_scale',
            '#thermal:glass/hardened',
            'pneumaticcraft:printed_circuit_board'
        ],
            reagent: 'thermal:machine_frame',
            outputs: 'thermal:machine_crystallizer',
            source: 1000,
            keepNBT: false,
            id: (recipeId + 'crystallizer')
        }
    ]
    recipes.forEach((recipe) => {
        e.recipes.ars_nouveau.enchanting_apparatus(recipe.inputs, recipe.reagent, recipe.outputs, recipe.source, recipe.keepNBT).id(recipe.id)
    });
})