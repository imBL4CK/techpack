ServerEvents.recipes(event =>{
    const id = 'techpack:expert/create/mechanical_crafting'

   /*
    event.recipes.create.mechanical_crafting(
        'id', [
            'AAA',
            'AAA',
            'AAA'
        ],{
            A: 'a'
        })
   */

   //Surface Scanner
   event.recipes.create.mechanical_crafting(
   'tfmg:surface_scanner',[
      'SCS',
      'PAP',
      'MFI'
   ], {
      S: '#forge:plates/steel',
      C: 'minecraft:compass',
      P: '#forge:plates/copper',
      M: 'tfmg:steel_mechanism',
      A: 'tfmg:steel_casing',
      F: 'create:shaft',
      I: 'create_new_age:copper_circuit'
   })
   //Spark Plug
   event.recipes.create.mechanical_crafting(
      'tfmg:spark_plug', [
            'A',
            'A'
      ],{
            A: 'a',
            P: '#forgeplates/aluminum'
      })
   //Steel Distillation Controller
   event.recipes.create.mechanical_crafting(
   'tfmg:steel_distillation_controller',[
      'SPS',
      'MDE',
      'LHL'
   ], {
      S: '#forge:plates/steel',
      P: 'tfmg:industrial_pipe',
      M: 'tfmg:steel_mechanism',
      D: 'create:display_board',
      E: 'create:precision_mechanism',
      H: 'tfmg:heavy_machinery_casing',
      L: 'kubejs:large_steel_plate'
   })
   //Diesel Engine
   event.recipes.create.mechanical_crafting(
   'tfmg:diesel_engine',[
      ' S ',
      ' A ',
      'AMA',
      'THT',
      'FKF',
      'SGS'
   ], {
      S: 'kubejs:large_steel_plate',
      A: '#forge:plates/aluminum',
      M: 'kubejs:engine_mechanism',
      T: 'tfmg:steel_mechanism',
      H: 'tfmg:heavy_machinery_casing',
      G: 'kubejs:large_steel_gear',
      K: 'tfmg:steel_fluid_tank',
      F: '#forge:plates/ferrous_pewter'
   })
   //gasoline Engine
   event.recipes.create.mechanical_crafting(
   'tfmg:gasoline_engine',[
      'SGA  ',
      'SEMFS',
      'SKP  '
   ], {
      S: 'kubejs:large_steel_plate',
      E: 'tfmg:engine_base',
      A: '#forge:plates/aluminum',
      M: 'kubejs:engine_mechanism',
      G: 'kubejs:large_steel_gear',
      K: 'tfmg:steel_fluid_tank',
      F: '#forge:plates/ferrous_pewter',
      P: 'createdieselgenerators:engine_piston'
   })
   //LPG Engine
   event.recipes.create.mechanical_crafting(
   'tfmg:lpg_engine',[
      'SGP  ',
      'SEMFL',
      'SKP  '
   ], {
      S: 'kubejs:large_steel_plate',
      E: 'tfmg:engine_base',
      M: 'kubejs:engine_mechanism',
      G: 'kubejs:large_steel_gear',
      K: 'tfmg:steel_fluid_tank',
      F: '#forge:plates/ferrous_pewter',
      L: 'kubejs:large_aluminum_plate',
      P: 'createdieselgenerators:engine_piston'
   });
   //Turbine Engine
   event.recipes.create.mechanical_crafting(
      'tfmg:turbine_engine',[
         'SPA  ',
         'SEMKA',
         'SPC  '
      ], {
         S: 'kubejs:large_steel_plate',
         E: 'tfmg:engine_base',
         A: '#forge:plates/aluminum',
         M: 'kubejs:engine_mechanism',
         K: 'tfmg:steel_fluid_tank',
         P: 'createdieselgenerators:engine_piston',
         C: 'tfmg:engine_chamber'
   });
   //Radial Engine   
   event.recipes.create.mechanical_crafting(
      'tfmg:radial_engine',[
         '  P  ',
         ' PLP ',
         'PIHMP',
         ' PSP ',
         '  P  '
      ], {
         P: 'tfmg:engine_chamber',
         S: 'create:shaft',
         M: 'kubejs:engine_mechanism',
         H: 'tfmg:heavy_machinery_casing',
         I: 'tfmg:steel_pipe',
         L: 'kubejs:large_steel_plate'
   });
   //Large Radial Engine   
   event.recipes.create.mechanical_crafting(
      'tfmg:large_radial_engine',[
         ' PLP ',
         'PLILP',
         'PEHEP',
         'PLSLP',
         ' PLP '
      ], {
         P: 'tfmg:engine_chamber',
         S: 'create:shaft',
         E: 'kubejs:engine_mechanism',
         H: 'tfmg:heavy_machinery_casing',
         I: 'tfmg:steel_pipe',
         L: 'kubejs:large_steel_plate'
   });
   //Pumpjack Crank
   event.recipes.create.mechanical_crafting(
      'tfmg:pumpjack_crank',[
         'SOS',
         'RHR',
         'MLM'
      ], {
         R: 'tfmg:rebar',
         H: 'tfmg:heavy_machinery_casing',
         S: '#forge:plates/steel',
         O: 'quark:rope',
         M: 'tfmg:steel_mechanism',
         L: 'kubejs:large_steel_plate'
   });
   //Pumpjack Base
   event.recipes.create.mechanical_crafting(
      'tfmg:pumpjack_base',[
         'LRS',
         'MHM',
         'SIL'
      ], {
         R: 'quark:rope',
         H: 'tfmg:heavy_machinery_casing',
         S: '#forge:plates/steel',
         M: 'tfmg:steel_mechanism',
         L: 'kubejs:large_steel_plate',
         I: 'tfmg:industrial_pipe'
   });  
   //Steam Engine
   event.recipes.create.mechanical_crafting(
      'create:steam_engine',[
         'RSR',
         'ESV',
         'BCB'
      ], {
         B: '#forge:plates/bronze',
         C: 'kubejs:large_copper_plate',
         E: 'kubejs:engine_mechanism',
         V: 'create_things_and_misc:vibration_mechanism',
         S: 'create:shaft',
         R: '#forge:plates/brass'
   }); 
   //Steel Distillation Output
   event.recipes.create.mechanical_crafting(
   'tfmg:steel_distillation_output',[
      'SPS',
      'IHI',
      'LML'
   ], {
      S: '#forge:plates/steel',
      P: 'tfmg:industrial_pipe',
      M: 'tfmg:steel_mechanism',
      I: 'tfmg:steel_pipe',
      H: 'tfmg:heavy_machinery_casing',
      L: 'kubejs:large_steel_plate'
   });
   //Generator Coil
   event.recipes.create.mechanical_crafting(
      'create_new_age:generator_coil',[
         ' MTM ',
         'MRCGM',
         'TCSCT',
         'MGCRM',
         ' MTM '
      ], {
         C: 'kubejs:large_copper_plate',
         S: 'create:shaft',
         T: '#forge:plates/invar',
         G: 'kubejs:large_steel_gear',
         R: 'thermal:rf_coil',
         M: 'create_new_age:magnetite_block'
      });
   //Charger
   event.recipes.create.mechanical_crafting(
   'ae2:charger',[
      'FCI',
      'QGP',
      'FCI'
   ], {
      F: '#forge:plates/iron', 
      I: '#forge:plates/invar',
      C: 'create:andesite_casing',
      Q: 'ae2:certus_quartz_crystal',
      G: '#forge:glass',
      P: '#forge:plates/copper'
   })
   })