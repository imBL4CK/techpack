ServerEvents.recipes(event => {
    //Primitive Circuit Board
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 600)
    .requireEnergy(7500)
    .requireItem('thermal:cured_rubber')
    .requireItem('ae2:charged_certus_quartz_crystal')
    .requireItem('create_new_age:copper_circuit')
    .requireItem('kubejs:primitive_io_component')
    .requireItemTag('#forge:wires/red_alloy', 2)
    .requireItemTag('#forge:wires/blue_alloy', 2)
    .produceItem('kubejs:primitive_circuit_board')

    //Primitive IO component
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(2000)
    .requireItem('thermal:cured_rubber')
    .requireItemTag('#forge:plates/ferrous_pewter', 3)
    .requireItemTag('#forge:wires/red_alloy')
    .requireItemTag('#forge:wires/blue_alloy')
    .produceItem('kubejs:primitive_io_component')

    //Steam Oven
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItem('minecraft:furnace')
    .requireItem('kubejs:large_steel_plate')
    .requireItemTag('#forge:plates/invar', 3)
    .produceItem('railcraft:steam_oven')

    //Steam Turbine Housing
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItem('tfmg:steel_fluid_tank')
    .requireItem('railcraft:turbine_rotor')
    .requireItem('kubejs:large_steel_plate')
    .requireItem('railcraft:charge_motor')
    .requireItem('kubejs:primitive_machine_casing')
    .requireItem('createdieselgenerators:engine_piston')
    .requireItemTag('#forge:gears/invar', 3)
    .requireItem('thermal:rf_coil')
    .requireItem('railcraft:charge_coil')
    .produceItem('railcraft:steam_turbine')

    //Steel Cable
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItem('kubejs:thermo_mechanism')
    .requireItemTag('#forge:plates/steel', 4)
    .requireItemTag('#forge:wires/copper', 8)
    .produceItem(Item.of('ad_astra:steel_cable', 8))
    
    //Tesla Coil
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItem('create:precision_mechanism')
    .requireItem('create:brass_casing')
    .requireItem('ae2:charger')
    .requireItem(Item.of('railcraft:charge_coil', 2))
    .requireItem('thermal:rf_coil')
    .requireItem('create:shaft')
    .produceItem('createaddition:tesla_coil')

    //Basic Motor
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItem(Item.of('create_new_age:overcharged_iron_sheet', 2))
    .requireItem('create_new_age:copper_circuit')
    .requireItem('thermal:rf_coil')
    .requireItem('create:andesite_casing')
    .requireItem('kubejs:primitive_machine_casing')
    .requireItem('railcraft:charge_motor')
    .requireItem('createaddition:capacitor')
    .requireItem(Item.of('#forge:nuggets/iron', 3))
    .produceItem('create_new_age:basic_motor')

    //Hardened  Integral Components
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItemTag('#forge:glass', 2)
    .requireItem('kubejs:primitive_circuit')
    .requireItem('kubejs:large_copper_plate')
    .requireItemTag('#forge:gears/bronze', 2)
    .requireItem('kubejs:primitive_machine_casing')
    .requireItem('create_new_age:copper_circuit')
    .requireItem('thermal:rf_coil')
    .produceItem('thermal:upgrade_augment_1')

    //Iron Backpacks
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItemTag('#forge:gears/bronze', 2)
    .requireItemTag('#forge:plates/bronze', 2)
    .requireItem('tfmg:steel_mechanism')
    .requireItem('sophisticatedbackpacks:backpack')
    .requireItemTag('#forge:chests')
    .produceItem('sophisticatedbackpacks:iron_backpack')

    //Drilling Machine
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItem('create:brass_tunnel')
    .requireItem('thermal:machine_frame')
    .requireItemTag('#forge:plates/brass', 12)
    .requireItemTag('#forge:plates/obsidian', 4)
    .requireItem(Item.of('thermal:rf_coil', 2))
    .requireItem('create_new_age:reinforced_motor')
    .requireItem(Item.of('kubejs:large_steel_gear', 4))
    .requireItem(Item.of('pneumaticcraft:capacitor', 4))
    .requireItem(Item.of('kubejs:circuit_mechanism', 3))
    .produceItem('createoreexcavation:drilling_machine')

    //Primitive Machine Casing
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItemTag('#forge:plates/steel', 2)
    .requireItem(Item.of('kubejs:large_steel_plate', 2))
    .requireItemTag('#forge:gears/steel', 1)
    .produceItem('kubejs:primitive_machine_casing')

    //Ebf Bricks
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItemTag('#forge:plates/ferrous_pewter', 2)
    .requireItem(Item.of('tfmg:fireproof_bricks'))
    .produceItem('kubejs:ebf_bricks')

    //Ebf Controller
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItem(Item.of('kubejs:ebf_bricks'))
    .requireItem(Item.of('kubejs:thermo_mechanism'))
    .requireItem(Item.of('thermal:rf_coil'))
    .requireItem(Item.of('thermal:redstone_servo', 2))
    .requireItemTag('#forge:plates/invar', 4)
    .produceItem('mm:ebf_controller')

    //Steel Item Hatch Input
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItemTag('#forge:plates/steel', 4)
    .requireItem(Item.of('minecraft:chest'))
    .requireItem(Item.of('minecraft:hopper'))
    .produceItem('mm:steel_item_hatch_input')

    //Steel Item Hatch Output
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItemTag('#forge:plates/steel', 4)
    .requireItem(Item.of('minecraft:chest'))
    .requireItem(Item.of('create:andesite_funnel'))
    .produceItem('mm:steel_item_hatch_output')

    //Steel Energy Hatch Input
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItemTag('#forge:plates/steel', 4)
    .requireItem(Item.of('createaddition:modular_accumulator'))
    .requireItem(Item.of('minecraft:hopper'))
    .produceItem('mm:steel_energy_hatch_input')

    //Steel Energy Hatch Output
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_manufacture", 200)
    .requireEnergy(1000)
    .requireItemTag('#forge:plates/steel', 4)
    .requireItem(Item.of('createaddition:modular_accumulator'))
    .requireItem(Item.of('create:andesite_funnel' ))
    .produceItem('mm:steel_energy_hatch_output')

    /*
    const recipes = [
      {
        machine: 'custommachinery:primitive_manufacture',
        duration: 200,
        energy:'1000',
        input:['create:brass_casing','create:precision_mechanism','create:andesite_funnel'],
        output:'create:brass_funnel'
      }
    ]
    recipes.forEach((recipe) => {
      event.recipes.custommachinery.custom_machine(recipe.machine, recipe.duration)
      .requireEnergy(recipe.energy)
      .requireItem(recipe.input)
      .produceItem(recipe.output)
    });
    */
  })