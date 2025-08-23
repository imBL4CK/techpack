ServerEvents.recipes(event =>{
    //Makeshift Mechansim
    event.smithing(
      'kubejs:makeshift_mechanism',
      'create:andesite_casing',
      'create:large_cogwheel',
      'kubejs:wooden_board'
      );
    //Deployer using brass hand
    event.smithing(
          'create:deployer',
          'create:andesite_casing',
          'kubejs:makeshift_mechanism',
          'create:brass_hand'
      ); 
    //Deployer Using Gold gear
    event.smithing(
      'create:deployer',
      'create:andesite_casing',
      'kubejs:makeshift_mechanism',
      'kubejs:golden_hand'
      );
    //Mechanical Saw
    event.smithing(
      'create:mechanical_saw',
      'create:andesite_casing',
      'kubejs:makeshift_mechanism',
      'thermal:saw_blade'
      );
    //Mechanical Press
    event.smithing(
      'create:mechanical_press',
      'create:andesite_casing',
      'kubejs:makeshift_mechanism',
      'minecraft:iron_block'
      );
    //Encased Fan
    event.smithing(
      'create:encased_fan',
      'create:andesite_casing',
      'kubejs:makeshift_mechanism',
      'create:propeller'
      );
    //Mecahnical Drill
    event.smithing(
      'create:mechanical_drill',
      'create:andesite_casing',
      'kubejs:makeshift_mechanism',
      'thermal:drill_head'
      );
    //Mechanical Mixer
    event.smithing(
      'create:mechanical_mixer',
      'create:andesite_casing',
      'kubejs:makeshift_mechanism',
      'create:whisk'
      ); 
    //Brass Funnel
    event.smithing(
      'create:brass_funnel',
      'create:brass_casing', 
      'create:precision_mechanism',
      'create:andesite_funnel'
      );
    //Brass Tunnel
    event.smithing(
      'create:brass_tunnel',
      'create:brass_casing', 
      'create:precision_mechanism',
      'create:andesite_tunnel'
      );
    //Smart Chute
    event.smithing(
      'create:smart_chute',
      'create:brass_casing', 
      'create:precision_mechanism',
      'create:chute'
      );
    //Stockpile Switch
    event.smithing(
      'create:stockpile_switch',
      'create:brass_casing', 
      'create:precision_mechanism',
      'kubejs:logistic_machine'
      );
    //Content Observer
    event.smithing(
      'create:content_observer',
      'create:brass_casing', 
      'create:precision_mechanism',
      'minecraft:observer'
      );
    //Mechanical Arm
    event.smithing(
      'create:mechanical_arm',
      'create:brass_casing', 
      'create:precision_mechanism',
      'create:andesite_alloy'
      );
    //Rotation Speed Controller
    event.smithing(
      'create:rotation_speed_controller',
      'create:brass_casing', 
      'create:precision_mechanism',
      'create:large_cogwheel'
      );
    //Sequenced Gearshift
    event.smithing(
      'create:sequenced_gearshift',
      'create:brass_casing', 
      'create:precision_mechanism',
      'create:cogwheel'
      );
  })
