  let recipeId = ['minecraft:shaped/']
ServerEvents.recipes(event =>{
    //Crafting Table
  event.shaped('minecraft:crafting_table',[
    'GF ',
    'SW '
  ],{
    S: 'woodenshears:wooden_shears',
    F: 'minecraft:flint',
    G: 'kubejs:wooden_gear',
    W: '#minecraft:logs'
  }) 
  //White Carpet
  event.shaped('minecraft:white_carpet',[
    'SL ',
  ],{
    S: 'woodenshears:wooden_shears',
    L: { tag: 'minecraft:leaves' }
  }) 
  //Wooden Gear
  event.shaped('kubejs:wooden_gear',[
    'SS ',
    'SP '
  ],{
    S: 'minecraft:stick',
    P: { tag: 'minecraft:planks' }
  })
  //Water Tank Sidding
  event.shaped('6x railcraft:water_tank_siding',[
    'PPP',
    'SCI',
    'PPP'
  ],{
    I: '#forge:plates/iron',
    P: '#forge:plates/wooden',
    C: '#forge:plates/copper',
    S: '#forge:tools/hammer'

  //Primitive Hammer
  }).damageIngredient('#forge:tools/hammer', '12')
  //Chest
  event.shaped('minecraft:chest',[
    'PGP',
    'GBG',
    'PGP'
  ],{
    G: '#forge:gears/wooden',
    P: '#minecraft:planks',
    B: 'minecraft:stone_button'
  }) 
  //Furnace
  event.shaped('minecraft:furnace',[
    'SSS',
    'SGS',
    'SFS'
  ],{
    G: 'kubejs:wooden_gear',
    S: '#forge:cobblestone',
    F: 'minecraft:flint'
  })   
  //Hand Crank
  event.shaped('create:hand_crank',[
    'GWW',
    'SCA'
  ],{
    A: 'create:andesite_alloy',
    G: '#forge:gears/wooden',
    W: '#forge:plates/wooden',
    C: 'create:cogwheel',
    S: '#forge:tools/saw'
  }).damageIngredient('#forge:tools/saw', '2')  
  //Small Water Wheel
  event.shaped('create:water_wheel',[
    'WSW',
    'GHM',
    'WCW'
  ],{
    G: '#forge:gears/wooden',
    W: '#forge:plates/wooden',
    H: 'create:hand_crank',
    S: '#forge:tools/saw',
    M: '#forge:tools/hammer',
    C: '#forge:tools/crowbar'
  }).damageIngredient('#forge:tools/saw', '6') 
    .damageIngredient('#forge:tools/hammer', '6') 
    .damageIngredient('#forge:tools/crowbar', '6')
  //Large Water Wheel
    event.shaped('create:large_water_wheel',[
    'WGW',
    'SLH',
    'WGW'
  ],{
    G: '#forge:gears/wooden',
    W: '#forge:plates/wooden',
    S: '#forge:tools/saw',
    L: 'create:water_wheel',
    H: '#forge:tools/hammer'
  }).damageIngredient('#forge:tools/saw', '4') 
    .damageIngredient('#forge:tools/hammer', '4')
  //Smithing Table
  event.shaped('minecraft:smithing_table',[
    'HSW',
    'II ',
    'PG '
  ],{
    G: '#forge:gears/wooden',
    P: '#minecraft:planks',
    S: '#forge:tools/saw',
    I: 'minecraft:iron_ingot',
    H: '#forge:tools/hammer',
    W: '#forge:tools/wirecutter',
  }).damageIngredient('#forge:tools/saw', '6') 
    .damageIngredient('#forge:tools/hammer', '6')
    .damageIngredient('#forge:tools/wirecutter', '6')
  //Primitive Hammer
  event.shaped('kubejs:primitive_hammer',[
    ' II',
    ' PI',
    'S  '
  ],{
    I: 'minecraft:iron_ingot',
    P: '#minecraft:planks',
    S: 'minecraft:stick'
  })
  //Bucket
  event.shaped('minecraft:bucket',[
    'IHI',
    ' I '
  ],{
    I: '#forge:plates/iron',
    H: '#forge:tools/hammer',
  }).damageIngredient('#forge:tools/hammer', '4')
  //Millstone
  event.shaped('create:millstone',[
    ' C ',
    'HAP',
    'GSG'
  ],{
    A: 'create:andesite_casing',
    S: '#forge:stone',
    C: 'create:cogwheel',
    H: '#forge:tools/hammer',
    P: '#forge:tools/saw',
    G: '#forge:gears/wooden'
  }).damageIngredient('#forge:tools/hammer', '16')
    .damageIngredient('#forge:tools/saw', '16')
  //Create Wrench
  event.shaped('create:wrench',[
    'GGH',
    'GCW',
    ' S '
  ],{
    C: 'create:cogwheel',
    H: '#forge:tools/hammer',
    S: 'minecraft:stick',
    W: '#forge:gears/wooden',
    G: '#forge:plates/gold'
  }).damageIngredient('#forge:tools/hammer', '4')
  //Empty Blaze Burner
  event.shaped('create:empty_blaze_burner',[
    'HSC',
    'BNB',
    'IVI'
  ],{
    N: 'minecraft:netherrack',
    S: 'occultism:spirit_attuned_gem',
    H: '#forge:tools/hammer',
    C: '#forge:tools/crowbar',
    V: 'create_things_and_misc:vibration_mechanism',
    I: '#forge:plates/iron',
    B: 'minecraft:iron_bars'
  }).damageIngredient('#forge:tools/hammer', '2')
    .damageIngredient('#forge:tools/crowbar', '2')
  //Iron Bars
  event.shaped('6x minecraft:iron_bars',[
    'HSC',
    'III',
    'III'
  ],{
    I: '#forge:plates/iron',
    H: '#forge:tools/hammer',
    S: '#forge:tools/saw',
    C: '#forge:tools/crowbar'
  }).damageIngredient('#forge:tools/hammer', '6')
    .damageIngredient('#forge:tools/saw', '6')
    .damageIngredient('#forge:tools/crowbar', '6')
  //Andesite Funnel
  event.shaped('create:andesite_funnel',[
    'CS ',
    'M  '
  ],{
    M: 'kubejs:makeshift_mechanism',
    S: '#forge:tools/saw',
    C: 'create:andesite_casing'
  }).damageIngredient('#forge:tools/saw', '1')
  //Andesite Tunnel
  event.shaped('create:andesite_tunnel',[
    'CCS',
    'MMD'
  ],{
    M: 'kubejs:makeshift_mechanism',
    S: '#forge:tools/saw',
    C: 'create:andesite_casing',
    D: '#forge:tools/screwdriver'
  }).damageIngredient('#forge:tools/saw', '1')
    .damageIngredient('#forge:tools/screwdriver', '1')
  //Mechanical Harvester
  event.shaped('create:mechanical_harvester',[
    'CAS',
    'MI '
  ],{
    M: 'kubejs:makeshift_mechanism',
    S: '#forge:tools/saw',
    C: 'create:andesite_casing',
    A: 'createdeco:andesite_sheet',
    I: '#forge:plates/iron'
  }).damageIngredient('#forge:tools/saw', '4')
  //Mechanical Plough
  event.shaped('create:mechanical_plough',[
    'CIS',
    'MI '
  ],{
    M: 'kubejs:makeshift_mechanism',
    S: '#forge:tools/saw',
    C: 'create:andesite_casing',
    I: '#forge:plates/iron'
  }).damageIngredient('#forge:tools/saw', '1')
  //Contraption Controls
  event.shaped('create:contraption_controls',[
    'CBS',
    'MH '
  ],{
    M: 'kubejs:makeshift_mechanism',
    S: '#forge:tools/saw',
    C: 'create:andesite_casing',
    B: '#minecraft:buttons',
    H: '#forge:tools/hammer'
  }).damageIngredient('#forge:tools/saw', '1')
    .damageIngredient('#forge:tools/hammer', '1')
  //Portable Storage interface
  event.shaped('create:portable_storage_interface',[
    'CUS',
    'MH '
  ],{
    M: 'kubejs:makeshift_mechanism',
    S: '#forge:tools/saw',
    C: 'create:andesite_casing',
    U: 'create:chute',
    H: '#forge:tools/hammer'
  }).damageIngredient('#forge:tools/saw', '1')
    .damageIngredient('#forge:tools/hammer', '1')
  //Chute
  event.shaped('create:chute',[
    'PH ',
    'IS ',
    'PC '
  ],{
    P: '#forge:plates/iron',
    I: 'minecraft:iron_ingot',
    H: '#forge:tools/hammer',
    S: '#forge:tools/saw',
    C: '#forge:tools/crowbar'
  }).damageIngredient('#forge:tools/saw', '1')
    .damageIngredient('#forge:tools/hammer', '1')
    .damageIngredient('#forge:tools/crowbar', '1'),
  //Arboreal Extractor
  event.shaped('thermal:device_tree_extractor',[
    'WSW',
    'DBH',
    'WGW'
  ],{
    W: 'kubejs:wooden_board',
    S: '#forge:tools/saw',
    D: '#forge:tools/screwdriver',
    B: 'minecraft:bucket',
    H: '#forge:tools/hammer',
    G: '#forge:gears/iron'
  }).damageIngredient('#forge:tools/saw', '1')
  .damageIngredient('#forge:tools/hammer', '1')
  .damageIngredient('#forge:tools/screwdriver', '1'),
  //Create Copper Fluid Tank
  event.shaped('create:fluid_tank',[
    'DPS',
    'RGR',
    'HPB'
  ],{
    D: '#forge:tools/screwdriver',
    P: '#forge:plates/bronze',
    S: '#forge:tools/saw',
    R: 'thermal:cured_rubber',
    H: '#forge:tools/hammer',
    B: '#forge:tools/crowbar',
    G: '#forge:glass_panes'
  }).damageIngredient('#forge:tools/saw', '4')
    .damageIngredient('#forge:tools/hammer', '2')
    .damageIngredient('#forge:tools/crowbar', '2')
    .damageIngredient('#forge:tools/screwdriver', '1'),
  //Create Copper Fluid Pipe
  event.shaped('4x create:fluid_pipe',[
    'SPB',
    'HRD',
    ' P '
  ],{
    P: '#forge:plates/bronze',
    D: '#forge:tools/screwdriver',
    S: '#forge:tools/saw',
    R: 'thermal:cured_rubber',
    H: '#forge:tools/hammer',
    B: '#forge:tools/crowbar'
  }).damageIngredient('#forge:tools/saw', '2')
    .damageIngredient('#forge:tools/hammer', '2')
    .damageIngredient('#forge:tools/crowbar', '2')
    .damageIngredient('#forge:tools/screwdriver', '1'),
  //Create Copper Mechanical Pump
  event.shaped('create:mechanical_pump',[
    'SPB',
    'HCD',
    ' R '
  ],{
    P: 'create:fluid_pipe',
    C: 'create:cogwheel',    
    D: '#forge:tools/screwdriver',
    S: '#forge:tools/saw',
    R: 'thermal:cured_rubber',
    H: '#forge:tools/hammer',
    B: '#forge:tools/crowbar'
  }).damageIngredient('#forge:tools/saw', '2')
    .damageIngredient('#forge:tools/hammer', '2')
    .damageIngredient('#forge:tools/crowbar', '2')
    .damageIngredient('#forge:tools/screwdriver', '1'),
  //Create Belt
  event.shaped('create:belt_connector',[
      'SW ',
      'RRR',
      'RRR'
  ],{
    R: 'thermal:cured_rubber',
    S: '#forge:tools/saw',
    W: '#forge:tools/wirecutter'
  }).damageIngredient('#forge:tools/saw', '1')
    .damageIngredient('#forge:tools/wirecutter', '1') 
  //Tfg Fiproof Bricks Block
  event.shaped('tfmg:fireproof_bricks',[
      'FPG',
      'PF '
  ],{
    F: 'tfmg:fireproof_brick',
    P: 'eidolon:pewter_ingot',
    G: 'create:super_glue'
  }).damageIngredient('create:super_glue', '1')
  //Tfmg: Blast Furnace Output
  event.shaped('tfmg:blast_furnace_output',[
    'PBV',
    'WFW',
    'CHC'
],{
  B: 'minecraft:iron_bars',
  P: 'create:precision_mechanism',
  V: 'create_things_and_misc:vibration_mechanism',
  F: 'tfmg:fireproof_bricks',
  W: 'eidolon:pewter_ingot',
  C: 'tfmg:cast_iron_pipe',
  H: '#forge:tools/hammer'
  }).damageIngredient('#forge:tools/hammer', '1')
  //Casting Spout
    event.shaped('tfmg:casting_spout',[
      'CAC',
      'MIC',
      ' P '
    ],{
      M: 'kubejs:makeshift_mechanism',
      C: '#forge:ingots/cast_iron',
      A: 'createdeco:andesite_sheet',
      I: '#forge:plates/iron',
      P: 'create:fluid_pipe'
    })
  //Rf Coil
    event.shaped('thermal:rf_coil',[
      'GR ',
      ' E ',
      ' RG'
    ],{
      E: 'create:electron_tube',
      G: '#forge:plates/gold',
      R: '#forge:plates/red_alloy'
    })
  //Primitive Circuit Board
    event.shaped('kubejs:primitive_circuit_board',[
      'BRD',
      'SIH',
      'CRB'
    ],{
      H: 'ae2:charged_certus_quartz_crystal',
      B: '#forge:wires/blue_alloy',
      R: '#forge:wires/red_alloy',
      I: 'kubejs:primitive_io_component',
      S: '#forge:tools/saw',
      D: '#forge:tools/screwdriver',
      C: 'create_new_age:copper_circuit'
    }).damageIngredient('#forge:tools/screwdriver', '1')
      .damageIngredient('#forge:tools/saw', '1')
  //Eidolon: Worktable
  event.shaped('eidolon:worktable',[
      'ORI',
      'WAW',
      'BPB'
    ],{
      A: 'occultism:otherworld_ashes',
      P: '#minecraft:planks',
      B: '#forge:plates/wooden',
      W: '#forge:plates/pewter',
      R: '#forge:plates/red_alloy',
      O: 'minecraft:book',
      I: 'minecraft:ink_sac'
    })
  //Tfmg Steel Tank
  event.shaped('tfmg:steel_fluid_tank',[
    'BSB',
    'HCG',
    'BSB'
  ],{
    S: '#forge:plates/steel',
    C: 'create:fluid_tank',
    G: 'create:super_glue',
    H: '#forge:tools/hammer',
    B: 'thermal:cured_rubber'
    }).damageIngredient('#forge:tools/hammer', '1')
  //Create DG Basin Lid
    event.shaped('createdieselgenerators:basin_lid',[
      'SSS',
      'HCW',
      'BRD'
    ],{
      S: '#forge:plates/steel',
      H: '#forge:tools/hammer',
      W: '#forge:tools/saw',
      C: 'minecraft:clock',
      B: '#forge:tools/crowbar',
      R: 'tfmg:screw',
      D: '#forge:tools/screwdriver'
      }).damageIngredient('#forge:tools/hammer', '1')
        .damageIngredient('#forge:tools/saw', '1')
        .damageIngredient('#forge:tools/crowbar', '1')
        .damageIngredient('#forge:tools/screwdriver', '1')
    //Clock
    event.shaped('minecraft:clock',[
      'HGS',
      'GRG',
      'CGC'
    ],{
      G: '#forge:plates/gold',
      R: '#forge:gears/red_alloy',
      H: '#forge:tools/hammer',
      S: '#forge:tools/saw',
      C: '#forge:wires/copper'
      }).damageIngredient('#forge:tools/hammer', '1')
        .damageIngredient('#forge:tools/saw', '1')
    //Rolling Mill
    event.shaped('createaddition:rolling_mill',[
      'ISI',
      'ASA',
      'WCH'
    ],{
      S: 'create:shaft',
      I: '#forge:plates/iron',
      C: 'create:andesite_casing',
      A: 'createdeco:andesite_sheet',
      H: '#forge:tools/hammer',
      W: '#forge:tools/saw'
      }).damageIngredient('#forge:tools/hammer', '4')
        .damageIngredient('#forge:tools/saw', '2')
    //Mechanical Crafter
    event.shaped('create:mechanical_crafter',[
      'VEP',
      'SBH',
      'RCD'
    ],{
      E: 'create:electron_tube',
      B: 'create:brass_casing',
      C: 'minecraft:crafting_table',
      V: 'create_things_and_misc:vibration_mechanism',
      P: 'create:precision_mechanism',
      S: '#forge:tools/saw',
      H: '#forge:tools/hammer',
      D: '#forge:tools/screwdriver',
      R: '#forge:tools/crowbar',
    }).damageIngredient('#forge:tools/hammer', '1')
      .damageIngredient('#forge:tools/saw', '1')
      .damageIngredient('#forge:tools/screwdriver', '1')
      .damageIngredient('#forge:tools/crowbar', '1')
    //Pumpjack
    event.shaped('tfmg:pumpjack_hammer',[
      'ASA',
      'CSC',
      'WSH'
    ],{
      S: 'tfmg:steel_truss',
      C: 'tfmg:screw',
      W: '#forge:tools/saw',
      H: '#forge:tools/hammer',
      A: '#forge:plates/aluminium'
      }).damageIngredient('#forge:tools/hammer', '4')
        .damageIngredient('#forge:tools/saw', '2')
    //Exhaust
    event.shaped('tfmg:exhaust',[
      'SDH',
      'BPB',
      'CCC'
    ],{
      P: 'tfmg:cast_iron_pipe',
      C: '#forge:ingots/cast_iron',
      B: 'minecraft:iron_bars',
      H: '#forge:tools/hammer',
      D: '#forge:tools/screwdriver',
      S: '#forge:tools/saw'
      }).damageIngredient('#forge:tools/hammer', '4')
        .damageIngredient('#forge:tools/saw', '2')
        .damageIngredient('#forge:tools/screwdriver', '1')
    //Ferrous Pewter from nuggets
    event.shaped('kubejs:ferrous_pewter_ingot',[
      'NNN',
      'NNN',
      'NNN'
    ],{
      N: '#forge:nuggets/ferrous_pewter'
     })
    //Primitive IO Component
    event.shaped('kubejs:primitive_io_component',[
      'SRH',
      'FFF',
      'DBC'
    ],{
      F: '#forge:plates/invar',
      C: '#forge:tools/crowbar',
      B: '#forge:wires/blue_alloy',
      R: '#forge:wires/red_alloy',
      H: '#forge:tools/hammer',
      D: '#forge:tools/screwdriver',
      S: '#forge:tools/saw'
      }).damageIngredient('#forge:tools/hammer', '2')
        .damageIngredient('#forge:tools/saw', '2')
        .damageIngredient('#forge:tools/screwdriver', '1')
        .damageIngredient('#forge:tools/crowbar', '1')
      //Oak Crate
      event.shaped('balanced_crates:oak_crate',[
        'PLP',
        'LCL',
        'SLH'
      ],{
        P: '#forge:plates/iron',
        L: '#minecraft:oak_logs',
        C: '#forge:chests/wooden',
        H: '#forge:tools/hammer',
        S: '#forge:tools/saw'
        }).damageIngredient('#forge:tools/hammer', '2')
          .damageIngredient('#forge:tools/saw', '2')
      //Spruce Crate
      event.shaped('balanced_crates:spruce_crate',[
        'PLP',
        'LCL',
        'SLH'
      ],{
        P: '#forge:plates/iron',
        L: '#minecraft:spruce_logs',
        C: '#forge:chests/wooden',
        H: '#forge:tools/hammer',
        S: '#forge:tools/saw'
        }).damageIngredient('#forge:tools/hammer', '2')
          .damageIngredient('#forge:tools/saw', '2')
      //Birch Crate
      event.shaped('balanced_crates:birch_crate',[
        'PLP',
        'LCL',
        'SLH'
      ],{
        P: '#forge:plates/iron',
        L: '#minecraft:birch_logs',
        C: '#forge:chests/wooden',
        H: '#forge:tools/hammer',
        S: '#forge:tools/saw'
        }).damageIngredient('#forge:tools/hammer', '2')
          .damageIngredient('#forge:tools/saw', '2')
      //Jungle Crate
      event.shaped('balanced_crates:jungle_crate',[
        'PLP',
        'LCL',
        'SLH'
      ],{
        P: '#forge:plates/iron',
        L: '#minecraft:jungle_logs',
        C: '#forge:chests/wooden',
        H: '#forge:tools/hammer',
        S: '#forge:tools/saw'
        }).damageIngredient('#forge:tools/hammer', '2')
          .damageIngredient('#forge:tools/saw', '2')
      //Acacia Crate
      event.shaped('balanced_crates:acacia_crate',[
        'PLP',
        'LCL',
        'SLH'
      ],{
        P: '#forge:plates/iron',
        L: '#minecraft:acacia_logs',
        C: '#forge:chests/wooden',
        H: '#forge:tools/hammer',
        S: '#forge:tools/saw'
        }).damageIngredient('#forge:tools/hammer', '2')
          .damageIngredient('#forge:tools/saw', '2')
      //Dark Oak Crate
      event.shaped('balanced_crates:dark_oak_crate',[
        'PLP',
        'LCL',
        'SLH'
      ],{
        P: '#forge:plates/iron',
        L: '#minecraft:dark_oak_logs',
        C: '#forge:chests/wooden',
        H: '#forge:tools/hammer',
        S: '#forge:tools/saw'
        }).damageIngredient('#forge:tools/hammer', '2')
          .damageIngredient('#forge:tools/saw', '2')
      //Mangrove Crate
      event.shaped('balanced_crates:mangrove_crate',[
        'PLP',
        'LCL',
        'SLH'
      ],{
        P: '#forge:plates/iron',
        L: '#minecraft:mangrove_logs',
        C: '#forge:chests/wooden',
        H: '#forge:tools/hammer',
        S: '#forge:tools/saw'
        }).damageIngredient('#forge:tools/hammer', '2')
          .damageIngredient('#forge:tools/saw', '2')
      //Cherry Crate
      event.shaped('balanced_crates:cherry_crate',[
        'PLP',
        'LCL',
        'SLH'
      ],{
        P: '#forge:plates/iron',
        L: '#minecraft:cherry_logs',
        C: '#forge:chests/wooden',
        H: '#forge:tools/hammer',
        S: '#forge:tools/saw'
        }).damageIngredient('#forge:tools/hammer', '2')
          .damageIngredient('#forge:tools/saw', '2')
      //Bamboo Crate
      event.shaped('balanced_crates:bamboo_crate',[
        'PLP',
        'LCL',
        'SLH'
      ],{
        P: '#forge:plates/iron',
        L: '#minecraft:bamboo_blocks',
        C: '#forge:chests/wooden',
        H: '#forge:tools/hammer',
        S: '#forge:tools/saw'
        }).damageIngredient('#forge:tools/hammer', '2')
          .damageIngredient('#forge:tools/saw', '2')
      //Crimson Crate
      event.shaped('balanced_crates:crimson_crate',[
        'PLP',
        'LCL',
        'SLH'
      ],{
        P: '#forge:plates/iron',
        L: '#minecraft:crimson_stems',
        C: '#forge:chests/wooden',
        H: '#forge:tools/hammer',
        S: '#forge:tools/saw'
        }).damageIngredient('#forge:tools/hammer', '2')
          .damageIngredient('#forge:tools/saw', '2')
      //Warped Crate
      event.shaped('balanced_crates:warped_crate',[
        'PLP',
        'LCL',
        'SLH'
      ],{
        P: '#forge:plates/iron',
        L: '#minecraft:warped_stems',
        C: '#forge:chests/wooden',
        H: '#forge:tools/hammer',
        S: '#forge:tools/saw'
        }).damageIngredient('#forge:tools/hammer', '2')
          .damageIngredient('#forge:tools/saw', '2')
      //Canister 
      event.shaped('createdieselgenerators:canister',[
        'APA',
        'PFP',
        'SPH'
      ],{
        P: '#forge:plates/iron',
        A: 'createdeco:andesite_sheet',
        F: 'create:fluid_tank',
        H: '#forge:tools/hammer',
        S: '#forge:tools/saw'
        }).damageIngredient('#forge:tools/hammer', '2')
          .damageIngredient('#forge:tools/saw', '2')
      //Pressure Tube
      event.shaped('4x pneumaticcraft:pressure_tube',[
        'WCS',
        'SIS',
        'SCH'
      ],{
        S: '#forge:plates/steel',
        C: '#forge:ingots/compressed_iron',
        I: '#forge:plates/invar',
        W: '#forge:tools/saw',
        H: '#forge:tools/hammer'
        }).damageIngredient('#forge:tools/hammer', '2')
          .damageIngredient('#forge:tools/saw', '2')
      //Pressure Chamber Interface
      event.shaped('pneumaticcraft:pressure_chamber_interface',[
        'WPW',
        'HIG',
        'WEW'
      ],{
        G: 'create:super_glue',
        E: '#forge:gears/compressed_iron',
        I: '#forge:ingots/compressed_iron',
        W: 'pneumaticcraft:pressure_chamber_wall',
        P: 'pneumaticcraft:omnidirectional_hopper',
        H: '#forge:tools/hammer'
        }).damageIngredient('#forge:tools/hammer', '2')
          .damageIngredient('#forge:tools/saw', '2')
      //Pressure Chamber Valve
      event.shaped('pneumaticcraft:pressure_chamber_valve',[
        'WLW',
        'LHL',
        'WTW'
      ],{
        W: 'pneumaticcraft:pressure_chamber_wall',
        L: 'kubejs:large_steel_plate',
        H: '#forge:tools/hammer',
        T: 'pneumaticcraft:pressure_tube'
        }).damageIngredient('#forge:tools/hammer', '2')
     //Primitive Manufacture Machine
     event.shaped(Item.of('custommachinery:custom_machine_item', 
     {machine:"custommachinery:primitive_manufacture"}),[
         'EUS',
         'MCA',
         'GRG'
      ], {
         G: '#forge:gears/tin',
         R: 'thermal:rf_coil',
         M: 'railcraft:charge_motor',
         C: 'kubejs:primitive_machine_casing',
         A: 'createaddition:capacitor',
         E: 'create_new_age:electrical_connector',
         U: 'kubejs:primitive_circuit',
         S: '#forge:plates/invar'
      })
     //Powered Rolling Machine
     event.shaped('railcraft:powered_rolling_machine',[
         'SUS',
         'MCA',
         'GRG'
      ], {
         G: '#forge:gears/tin',
         R: 'thermal:rf_coil',
         M: 'railcraft:charge_motor',
         C: 'kubejs:primitive_machine_casing',
         A: 'createaddition:capacitor',
         U: 'kubejs:primitive_circuit',
         S: 'create:shaft'
      })
     //Railcraft Crusher
     event.shaped('railcraft:crusher',[
         'EUW',
         'MCM',
         'GRG'
      ], {
         G: '#forge:gears/tin',
         R: 'thermal:rf_coil',
         M: 'railcraft:charge_motor',
         C: 'kubejs:primitive_machine_casing',
         E: 'create_new_age:electrical_connector',
         U: 'kubejs:primitive_circuit',
         W: 'create:crushing_wheel'
      })
     //Primitive Manufacture Machine
     event.shaped(Item.of('custommachinery:custom_machine_item', 
     {machine:"custommachinery:primitive_furnace"}),[
         'BTF',
         'PCM',
         'GRG'
      ], {
         G: '#forge:gears/tin',
         R: 'thermal:rf_coil',
         P: 'createdieselgenerators:engine_piston',
         C: 'kubejs:primitive_machine_casing',
         M: 'railcraft:charge_motor',
         B: 'create:blaze_burner',
         T: 'kubejs:thermo_mechanism',
         F: 'minecraft:furnace'
      })
     //Compressor (adAstra)
     event.shaped('ad_astra:compressor',[
         'ATS',
         'MCM',
         'GRG'
      ], {
         G: '#forge:gears/compressed_iron',
         R: 'thermal:rf_coil',
         M: 'railcraft:charge_motor',
         C: 'kubejs:primitive_machine_casing',
         A: 'createaddition:capacitor',
         T: 'kubejs:thermo_mechanism',
         S: 'minecraft:piston'
      })
     //Logistic Machine
     event.shaped('kubejs:logistic_machine',[
         'TET',
         'PRP',
         'HWS'
      ], {
         H: '#forge:tools/hammer',
         W: '#forge:wires/red_alloy',
         S: '#forge:tools/saw',
         P: 'morered:stone_plate',
         R: 'morered:red_alloy_wire',
         T: 'minecraft:redstone_torch',
         E: '#forge:dusts/redstone'
      })
     //Accumulator
     event.shaped('createaddition:modular_accumulator',[
         'WNA',
         'CBE',
         'IRI'
      ], {
         I: '#forge:gears/invar',
         R: 'thermal:rf_coil',
         C: 'railcraft:charge_coil',
         B: 'create:brass_casing',
         E: 'railcraft:copper_electrode',
         W: '#forge:wires/gold',
         N: 'create_new_age:electrical_connector',
         A: 'createaddition:capacitor'
      })
     //Accumulator
     event.shaped('createaddition:modular_accumulator',[
         'WNA',
         'CBE',
         'IRI'
      ], {
         I: '#forge:gears/invar',
         R: 'thermal:rf_coil',
         C: 'railcraft:charge_coil',
         B: 'create:brass_casing',
         E: 'railcraft:copper_electrode',
         W: '#forge:wires/gold',
         N: 'createaddition:connector',
         A: 'createaddition:capacitor'
      })
     //Manual Rolling Machine
     event.shaped('railcraft:manual_rolling_machine',[
         'WSW',
         'PTP',
         'GCG'
      ], {
         G: '#forge:gears/bronze',
         C: 'create:andesite_casing',
         P: 'minecraft:piston',
         T: 'minecraft:crafting_table',
         W: '#forge:gears/wooden',
         S: 'thermal:saw_blade'
      })
     //Motor Extension
     event.shaped('create_new_age:basic_motor_extension',[
         'AMU',
         'OCO',
         'GRG'
      ], {
         G: '#forge:gears/steel',
         R: 'thermal:rf_coil',
         C: 'kubejs:primitive_machine_casing',
         O: 'create_new_age:overcharged_iron_sheet',
         A: 'createaddition:capacitor',
         M: 'create_new_age:basic_motor',
         U: 'create_new_age:copper_circuit'
      })
     //Backpack
     event.shaped('sophisticatedbackpacks:backpack',[
         'SBS',
         'SCS',
         'LBL'
      ], {
        L: 'minecraft:leather',
        B: '#forge:plates/brass',
        C: '#forge:chests',
        S: '#forge:string'
      })
     //Distilation Controller
     event.shaped('createdieselgenerators:distillation_controller',[
         'SCS',
         'PUP',
         'IAI'
      ], {
        I: '#forge:plates/iron',
        A: 'create:andesite_alloy',
        P: 'create:fluid_pipe',
        U: 'create:mechanical_pump',
        S: '#forge:plates/steel',
        C: '#forge:clocks',
      })
     //Solid Fueled Firebox
     event.shaped('railcraft:solid_fueled_firebox',[
         'FMU',
         'ICN',
         'GBG'
      ], {
        G: '#forge:gears/bronze',
        B: 'create:empty_blaze_burner',
        I: '#forge:plates/invar',
        C: 'kubejs:primitive_machine_casing',
        N: 'minecraft:nether_brick', 
        F: 'minecraft:blast_furnace', 
        M: 'tfmg:steel_mechanism', 
        U: 'minecraft:furnace'
      })
     //Primitive Machine Casing
     event.shaped('kubejs:primitive_machine_casing',[
         'LPL',
         'PGP',
         'LPL'
      ], {
        L: 'kubejs:large_steel_plate',
        P: '#forge:plates/steel',
        G: '#forge:gears/steel'
      })
     //Imbuement Chamber
     event.shaped('ars_nouveau:imbuement_chamber',[
      'GTG',
      'PAP',
      'GLG'
   ], {
     G: '#forge:plates/gold',
     L: '#forge:glass',
     P: 'ars_nouveau:archwood_planks',
     A: '#forge:gems/amethyst',
     T: 'occultism:spirit_attuned_gem'
    })
    //Arcane Pedestal
    event.shaped('ars_nouveau:arcane_pedestal',[
      'ATA',
      'ISI',
      'GPG'
    ], {
    G: '#forge:plates/gold',
    P: 'ars_nouveau:archwood_planks',
    I: '#forge:plates/silver',
    S: 'ars_nouveau:sourcestone',
    A: '#forge:plates/aluminum_brass',
    T: 'ars_nouveau:source_gem'
    })
    //Air Compressor
    event.shaped('pneumaticcraft:air_compressor',[
      'IGI',
      'LCU',
      'PFP'
    ], {
    P: 'pneumaticcraft:pressure_tube',
    F: 'minecraft:furnace',
    L: 'kubejs:large_steel_plate',
    C: 'kubejs:primitive_machine_casing',
    U: 'kubejs:primitive_circuit',
    I: '#forge:ingots/compressed_iron',
    G: '#forge:gears/compressed_iron'
    })
    //Sag Mill
    event.shaped('enderio:sag_mill',[
      'FPF',
      'DVM',
      'GRG'
    ], {
    G: '#forge:gears/dark_steel',
    R: 'thermal:rf_coil',
    D: '#forge:plates/dark_steel',
    V: 'enderio:void_chassis',
    M: 'railcraft:charge_motor',
    F: 'minecraft:flint',
    P: 'pneumaticcraft:printed_circuit_board'
    })
    //Alloy Smelter
    event.shaped('enderio:alloy_smelter',[
      'DPD',
      'FVB',
      'GRG'
    ], {
    G: '#forge:gears/dark_steel',
    R: 'thermal:rf_coil',
    F: 'minecraft:blast_furnace',
    V: 'enderio:void_chassis',
    B: 'create:blaze_burner',
    D: '#forge:plates/dark_steel',
    P: 'pneumaticcraft:printed_circuit_board'
    })
    //Redstone Furnace
    event.shaped('thermal:machine_furnace',[
      'IPI',
      'HFU',
      'GCG'
    ], {
    G:'#forge:gears/invar',
    C: 'thermal:rf_coil',
    H: 'railcraft:charge_coil',
    F: 'thermal:machine_frame',
    U: 'minecraft:furnace',
    I: '#forge:plates/iron',
    P: 'pneumaticcraft:printed_circuit_board'
    })
})
ServerEvents.recipes(e =>{
  const recipes = [
    //Latex Processing Unit
    {
    result: 'industrialforegoing:latex_processing_unit',
    pattern: [
      'HPH', 
      'RFL', 
      'HAH'
    ],
    key:{ 
      H: 'kubejs:hdpe_sheet',
      P: 'pneumaticcraft:printed_circuit_board',
      F: 'thermal:machine_frame',
      A: 'thermal:device_tree_extractor',
      R: 'thermal:rf_coil',
      L: '#forge:plates/invar'
    },
    id: recipeId+'latex_processing_unit'
    },
    //Machine Sawmill
    {
    result: 'thermal:machine_sawmill',
    pattern: [
    'BPB',
    'SFM',
    'GCG'
    ],
    key:{ 
    G:'#forge:gears/copper',
    C: 'thermal:rf_coil',
    S: 'thermal:saw_blade',
    F: 'thermal:machine_frame',
    M: 'railcraft:charge_motor',
    B: '#forge:plates/bronze',
    P: 'pneumaticcraft:printed_circuit_board'
    },
    id: recipeId+'machine_sawmill'
    },
    //Machine Pulverizer
    {
    result: 'thermal:machine_pulverizer',
    pattern: [
    'IPI',
    'WFM',
    'GCG'
    ],
    key:{ 
    G:'#forge:gears/copper',
    C: 'thermal:rf_coil',
    W: 'create:crushing_wheel',
    F: 'thermal:machine_frame',
    M: 'railcraft:charge_motor',
    I: '#forge:plates/invar',
    P: 'pneumaticcraft:printed_circuit_board'
    },
    id: recipeId+'machine_pulverizer'
    },
    //Machine Insolator
    {
    result: 'thermal:machine_insolator',
    pattern: [
    'BPB',
    'EFR',
    'GCG'
    ],
    key:{ 
    G:'#forge:gears/lumium',
    C: 'thermal:rf_coil',
    E: 'industrialforegoing:fertilizer',
    F: 'thermal:machine_frame',
    R: 'industrialforegoing:fertilizer',
    B: 'kubejs:bio_plastic_mesh',
    P: 'pneumaticcraft:printed_circuit_board'
    },
    id: recipeId+'machine_insolator'
    },
    //Machine Centrifuge
    {
    result: 'thermal:machine_centrifuge',
    pattern: [
    'LPL',
    'WFO',
    'GCG'
    ],
    key:{ 
    G:'#forge:gears/constantan',
    C: 'thermal:rf_coil',
    W: 'create:cogwheel',
    F: 'thermal:machine_frame',
    O: 'minecraft:compass',
    L: '#forge:plastic',
    P: 'pneumaticcraft:printed_circuit_board'
    },
    id: recipeId+'machine_centrifuge'
    },
    //Machine Press
    {
    result: 'thermal:machine_press',
    pattern: [
    'BPB',
    'RFM',
    'GCG'
    ],
    key:{ 
    G:'#forge:gears/constantan',
    C: 'thermal:rf_coil',
    R: 'create:mechanical_press',
    F: 'thermal:machine_frame',
    M: 'railcraft:charge_motor',
    B: '#forge:plates/bronze',
    P: 'pneumaticcraft:printed_circuit_board'
    },
    id: recipeId+'machine_press'
    },
    //Machine Crucible
    {
    result: 'thermal:machine_crucible',
    pattern: [
    'IPI',
    'HFN',
    'GCG'
    ],
    key:{ 
    G:'#forge:gears/invar',
    C: 'thermal:rf_coil',
    H: 'create:blaze_burner',
    F: 'thermal:machine_frame',
    N: 'minecraft:nether_bricks',
    I: '#forge:plates/invar',
    P: 'pneumaticcraft:printed_circuit_board'
    },
    id: recipeId+'machine_crucible'
    },
    //Machine Chiller
    {
    result: 'thermal:machine_chiller',
    pattern: [
    'IPI',
    'BFB',
    'GCG'
    ],
    key:{ 
    G:'#forge:gears/invar',
    C: 'thermal:rf_coil',
    B: 'thermal:blizz_rod',
    F: 'thermal:machine_frame',
    I: '#forge:plates/aluminum',
    P: 'pneumaticcraft:printed_circuit_board'
    },
    id: recipeId+'machine_chiller'
    },
    //Machine Refinery
    {
    result: 'thermal:machine_refinery',
    pattern: [
    'DPA',
    'LFS',
    'GCG'
    ],
    key:{ 
    G: '#forge:gears/invar',
    C: 'thermal:rf_coil',
    L: 'kubejs:large_copper_plate',
    F: 'thermal:machine_frame',
    S: '#forge:glass',
    D: 'createdieselgenerators:distillation_controller',
    P: 'pneumaticcraft:printed_circuit_board',
    A: 'tfmg:steel_distillation_controller'
    },
    id: recipeId+'machine_refinery'
    },
    //Machine Pyrolyser
    {
    result: 'thermal:machine_pyrolyzer',
    pattern: [
    'EPE',
    'BFN',
    'GCG'
    ],
    key:{ 
    G:'#forge:gears/constantan',
    C: 'thermal:rf_coil',
    B: 'minecraft:blaze_rod',
    F: 'thermal:machine_frame',
    N: 'minecraft:nether_bricks',
    E: 'botania:endoflame',
    P: 'pneumaticcraft:printed_circuit_board'
    },
    id: recipeId+'machine_pyrolyser'
    }
  ]
  recipes.forEach((recipe) =>{
      e.shaped(recipe.result, recipe.pattern, recipe.key).id(recipe.id)
  })
})