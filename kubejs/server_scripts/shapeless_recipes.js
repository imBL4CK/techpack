  ServerEvents.recipes(event =>{
    //Flint
    event.shapeless('minecraft:flint',[
      'minecraft:gravel',
      'minecraft:gravel',
      'minecraft:gravel'
      ])
    //Screwdriver
    event.shapeless('tfmg:screwdriver',[
      { tag: 'forge:rods/iron' },
      'kubejs:primitive_hammer',
      'kubejs:primitive_saw',
      'minecraft:iron_ingot'
    ]).damageIngredient('kubejs:primitive_saw', '5')
      .damageIngredient('kubejs:primitive_hammer', '5')
    //Shaft
    event.shapeless('4x create:shaft',[
      'create:andesite_alloy',
      'kubejs:primitive_saw'
    ]).damageIngredient('kubejs:primitive_saw', '4')
    //Cogwheel
    event.shapeless('create:cogwheel',[
      'create:shaft',
      'kubejs:wooden_gear',
      'kubejs:primitive_hammer',
      'kubejs:primitive_saw'
    ]).damageIngredient('kubejs:primitive_hammer', '2') 
      .damageIngredient('kubejs:primitive_saw', '2')
    //Large Cogwheel
    event.shapeless('create:large_cogwheel',[
      'create:cogwheel',
      'kubejs:wooden_gear',
      'kubejs:primitive_saw', 
      'kubejs:primitive_hammer'
    ]).damageIngredient('kubejs:primitive_hammer', '2') 
      .damageIngredient('kubejs:primitive_saw', '2')
    //Thermal Saw Blade
    event.shapeless('thermal:saw_blade',[
      { tag: 'forge:plates/iron' },
      { tag: 'forge:plates/copper' },
      'kubejs:primitive_hammer',
      'kubejs:primitive_saw'
    ]).damageIngredient('kubejs:primitive_hammer', '4') 
      .damageIngredient('kubejs:primitive_saw', '4')
    //Primitive Saw
    event.shapeless('kubejs:primitive_saw',[
      { tag: 'forge:plates/iron' },
      'kubejs:primitive_hammer',
      'kubejs:wooden_board',
      'minecraft:stick'
    ]).damageIngredient('kubejs:primitive_hammer', '1') 
    //Primitive Wirecutter
    event.shapeless('kubejs:primitive_wirecutter',[
      { tag: 'forge:plates/iron' },
      'kubejs:primitive_saw',
      'kubejs:primitive_hammer',
      'kubejs:wooden_board',
      'minecraft:iron_nugget'
    ]).damageIngredient('kubejs:primitive_saw', '4') 
      .damageIngredient('kubejs:primitive_hammer', '4')
    //Primitive Crowbar
    event.shapeless('kubejs:primitive_crowbar',[
      { tag: 'forge:plates/iron' },
      { tag: 'forge:plates/iron' },
      'kubejs:primitive_saw',
      'kubejs:primitive_hammer',
      'kubejs:wooden_board',
      'kubejs:wooden_gear',
      'minecraft:stick'
    ]).damageIngredient('kubejs:primitive_saw', '4') 
      .damageIngredient('kubejs:primitive_hammer', '4')
    //Iron Sheet
    event.shapeless('create:iron_sheet',[
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
      'kubejs:primitive_hammer'
      
    ]).damageIngredient('kubejs:primitive_hammer', '2')
  //Copper Sheet
    event.shapeless('create:copper_sheet',[
      'minecraft:copper_ingot',
      'minecraft:copper_ingot',
      'kubejs:primitive_hammer'
    ]).damageIngredient('kubejs:primitive_hammer', '2') 
  //Wooden Board
    event.shapeless('4x kubejs:wooden_board',[
      { tag: 'minecraft:planks'},
      { tag: 'minecraft:planks'},
      'kubejs:primitive_hammer'
      
    ]).damageIngredient('kubejs:primitive_hammer', '2') 
  //Iron Rod
    event.shapeless('ad_astra:iron_rod',[
      { tag: 'forge:plates/iron' },
      { tag: 'forge:plates/iron' },
      'kubejs:primitive_hammer',
      'kubejs:primitive_saw'

    ]).damageIngredient('kubejs:primitive_hammer', '2') 
      .damageIngredient('kubejs:primitive_saw', '2')
  //Pressure Chamber Wall
  event.shapeless('4x pneumaticcraft:pressure_chamber_wall',[
    '#forge:plates/invar',
    'pneumaticcraft:reinforced_bricks',
    '#forge:tools/hammer',
    '#forge:tools/saw'
  ]).damageIngredient('#forge:tools/hammer', '1')
    .damageIngredient('#forge:tools/saw', '1')
  //Electrical Connector (C: NA)
  event.shapeless('create_new_age:electrical_connector',[
    '#forge:rods/copper',
    '#forge:plates/iron',
    '#forge:wires/copper',
    'create:andesite_alloy',
    '#forge:tools/hammer',
    '#forge:tools/screwdriver'
  ]).damageIngredient('#forge:tools/hammer', '1')
    .damageIngredient('#forge:tools/screwdriver', '1')
})