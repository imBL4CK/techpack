ServerEvents.recipes((e) => {
  let recipeId = ["industrialrevival:assembler/"];

  let materials = [
    "iron",
    "copper",
    "gold",
    "tin",
    "lead",
    "bronze",
    "nickel",
    "silver",
    "steel",
    "constantan",
    "invar",
    "chromatic_alloy",
  ];
  //Resistance Circuit
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("thermal:invar_plate")
      .requireItem("kubejs:hdpe_sheet")
      .requireItem("pneumaticcraft:ingot_iron_compressed")
      .requireItem("kubejs:alchemical_brass_gear")
      .requireItem("kubejs:shadow_bronze_gear")
      .requireItem("thermal:redstone_servo")
      .produceItem("kubejs:resistance_circuit")
      .requireEnergy(2000)
      .jei().priority(1);
  }
  //Advanced Coil
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem(Item.of("thermal:rf_coil", 2))
      .requireItem("kubejs:hdpe_sheet")
      .requireItem("kubejs:black_quartzite_ingot")
      .requireItem("kubejs:alchemical_brass_gear")
      .produceItem("actuallyadditions:advanced_coil")
      .requireEnergy(2000)
      .jei().priority(1);
  }
  /*Advanced Circuit
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("kubejs:resistance_circuit")
      .requireItem(Item.of("actuallyadditions:advanced_coil", 2))
      .requireItem(Item.of("kubejs:vaccum_tube", 2))
      .requireItem("kubejs:stainless_steel_plate")
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItem("kubejs:basic_circuit")
      .produceItem("kubejs:advanced_circuit")
      .requireEnergy(4000)
      .jei().priority(2);
  }*/
  //Finished PCB
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("pneumaticcraft:unassembled_pcb")
      .requireItem(Item.of("pneumaticcraft:transistor", 2))
      .requireItem(Item.of("tfmg:capacitor_", 2))
      .requireItem("kubejs:hdpe_sheet")
      .requireItem("botania:mana_diamond")
      .requireFluid(Fluid.of("pneumaticcraft:etching_acid", 100))
      .produceItem("pneumaticcraft:printed_circuit_board")
      .produceFluid(Fluid.of("pneumaticcraft:etching_acid", 100))
      .requireEnergy(2000)
      .jei().priority(2);
  }
  //Electric Motor
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("tfmg:capacitor_")
      .requireItem("4x #forge:plates/brass")
      .requireItem("create:shaft")
      .requireItem("3x createaddition:copper_spool")
      .produceItem("createaddition:electric_motor")
      .requireEnergy(2000);
  }
  //Huge Diesel Engine
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("createdieselgenerators:diesel_engine")
      .requireItem("create:steam_engine")
      .requireItemTag("forge:plates/brass")
      .produceItem("createdieselgenerators:huge_diesel_engine")
      .requireEnergy(2000);
  }
  //Advanced Laser Relay
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("actuallyadditions:laser_relay")
      .requireItem("actuallyadditions:empowered_enori_crystal")
      .requireItem("actuallyadditions:empowered_restonia_crystal")
      .requireItem(Item.of("thermal:rf_coil", 8))
      .produceItem("actuallyadditions:laser_relay_advanced")
      .requireEnergy(4000);
  }
  //Hardened Integral Components
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/invar", 4)
      .requireItemTag("forge:ingots/red_alloy")
      .requireItemTag("forge:gears/gold")
      .requireItem("kubejs:basic_circuit")
      .requireItemTag("thermal:glass/hardened")
      .produceItem("thermal:upgrade_augment_1")
      .requireEnergy(1000);
  }
  //Redstone Flux Coil
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/gold")
      .requireItemTag("forge:ingots/red_alloy")
      .requireItem("create:electron_tube")
      .produceItem(Item.of("thermal:rf_coil", 2))
      .requireEnergy(1000)
      .jei().priority(3);
  }
  //Redstone Servo
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("kubejs:makeshift_mechanism")
      .requireItem("thermal:cured_rubber")
      .requireFluid("thermal:redstone")
      .produceItem(Item.of("thermal:redstone_servo", 2))
      .requireEnergy(1000)
      .jei().priority(3);
  }
  //Makeshift Mechanism
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/wood")
      .requireItem("create:cogwheel")
      .requireItem("create:andesite_alloy")
      .produceItem(Item.of("kubejs:makeshift_mechanism", 2))
      .requireEnergy(1000);
  }
  //Precision Mechanism
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("create:electron_tube")
      .requireItem("thermal:redstone_servo")
      .requireItemTag("forge:plates/brass")
      .produceItem(Item.of("create:precision_mechanism", 2))
      .requireEnergy(1000);
  }
  //Steel Mechanism
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/steel")
      .requireItem("thermal:rf_coil")
      .requireItem("thermal:redstone_servo")
      .produceItem(Item.of("tfmg:steel_mechanism", 2))
      .requireEnergy(1000);
  }
  //Basic Circuit
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("actuallyadditions:black_quartz")
      .requireItem("moreminecarts:silica_steel")
      .requireItem("actuallyadditions:basic_coil")
      .requireItem(Item.of("thermal:rf_coil", 2))
      .requireItem(Item.of("kubejs:vaccum_tube", 2))
      .requireItem("tfmg:steel_mechanism")
      .produceItem("kubejs:basic_circuit")
      .requireEnergy(2000);
  }
  //Steel Item Port Input
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("#forge:plates/steel", 4)
      .requireItem("minecraft:chest")
      .requireItem("minecraft:hopper")
      .produceItem("mm:steel_item_port_input")
      .requireEnergy(1000)
      .jei().priority(4);
  }
  //Steel Energy Port Input
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("#forge:plates/steel", 4)
      .requireItem("createaddition:modular_accumulator")
      .requireItem("minecraft:hopper")
      .produceItem("mm:steel_energy_port_input")
      .requireEnergy(1000)
      .jei().priority(4);
  }
  //Steel Fluid Port Input
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("#forge:plates/steel", 4)
      .requireItem("create:fluid_tank")
      .requireItem("minecraft:hopper")
      .produceItem("mm:steel_fluid_port_input")
      .requireEnergy(1000)
      .jei().priority(4);
  }
  //Fluid Extractor
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("industrialforegoing:machine_frame_pity")
      .requireItem(Item.of("kubejs:hdpe_sheet", 6))
      .requireItem("kubejs:basic_circuit")
      .requireItem("thermal:device_tree_extractor")
      .produceItem("industrialforegoing:fluid_extractor")
      .requireEnergy(1000)
      .jei().priority(5);
  }
  //Latex Processing Unit
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("industrialforegoing:machine_frame_pity")
      .requireItem(Item.of("kubejs:hdpe_sheet", 4))
      .requireItem("kubejs:basic_circuit")
      .requireItem(Item.of("create:fluid_tank", 2))
      .requireItem("minecraft:furnace")
      .produceItem("industrialforegoing:latex_processing_unit")
      .requireEnergy(1000)
      .jei().priority(5);
  }
  //Steel Casing
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/steel", 8)
      .requireItemTag("forge:gears/steel")
      .produceItem(Item.of("kubejs:steel_casing", 4))
      .requireEnergy(500)
      .jei().priority(6);
  }
  //Bronze Casing
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/bronze", 8)
      .requireItemTag("forge:gears/bronze")
      .produceItem(Item.of("kubejs:bronze_casing", 4))
      .requireEnergy(500)
      .jei().priority(6);
  }
  //Heatproof Casing
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/invar", 8)
      .requireItemTag("forge:gears/invar")
      .produceItem(Item.of("kubejs:heatproof_casing", 4))
      .requireEnergy(500)
      .jei().priority(6);
  }
  //Constantan Coil
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/steel", 6)
      .requireItemTag("forge:plates/constantan", 3)
      .produceItem("kubejs:constantan_coil")
      .requireEnergy(500)
      .jei().priority(7);
  }
  //Shadow Bronze Coil
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/steel", 6)
      .requireItem(Item.of("kubejs:shadow_bronze_plate", 3))
      .produceItem("kubejs:shadow_bronze_coil")
      .requireEnergy(500)
      .jei().priority(7);
  }
  //Fluid Cell Frame
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("thermal:glass/hardened", 4)
      .requireItemTag("forge:plates/bronze")
      .requireItem("create:fluid_tank")
      .produceItem("thermal:fluid_cell_frame")
      .requireEnergy(500)
      .jei().priority(8);
  }
  //Fluid Cell
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("thermal:cured_rubber", 4)
      .requireItemTag("forge:gears/iron", 2)
      .requireItem(Item.of("thermal:redstone_servo", 2))
      .requireItem("thermal:fluid_cell_frame")
      .produceItem("thermal:fluid_cell")
      .requireEnergy(500)
      .jei().priority(9);
  }
  //Energy Cell Frame
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("thermal:glass/hardened", 4)
      .requireItemTag("forge:plates/lead")
      .requireItem("tfmg:capacitor")
      .produceItem("thermal:energy_cell_frame")
      .requireEnergy(500)
      .jei().priority(10);
  }
  //Energy Cell
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plastic", 4)
      .requireItemTag("forge:ingots/red_alloy", 2)
      .requireItem(Item.of("thermal:rf_coil", 2))
      .requireItem("thermal:energy_cell_frame")
      .produceItem("thermal:energy_cell")
      .requireEnergy(500)
      .jei().priority(11);
  }
  //Fluxbore
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:ingots/steel", 2)
      .requireItemTag("forge:gears/tin", 2)
      .requireItemTag("forge:gears/gold")
      .requireItem("thermal:rf_coil")
      .requireItem("thermal:drill_head")
      .produceItem("thermal:flux_drill")
      .requireEnergy(4000)
      .jei().priority(13);
  }
  //Fluxsaw
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:ingots/steel", 2)
      .requireItemTag("forge:gears/tin", 2)
      .requireItemTag("forge:gears/gold")
      .requireItem("thermal:rf_coil")
      .requireItem("thermal:saw_blade")
      .produceItem("thermal:flux_saw")
      .requireEnergy(4000)
      .jei().priority(13);
  }
  //FluxMagnet
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:ingots/steel", 3)
      .requireItemTag("forge:gears/lead", 2)
      .requireItemTag("forge:gears/red_alloy")
      .requireItem("thermal:rf_coil")
      .produceItem("thermal:flux_magnet")
      .requireEnergy(4000)
      .jei().priority(14);
  }
  //FluxCapacitor
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:ingots/lead", 2)
      .requireItemTag("forge:gears/lead", 1)
      .requireItemTag("forge:gears/red_alloy")
      .requireItem("thermal:rf_coil")
      .produceItem("thermal:flux_capacitor")
      .requireEnergy(4000)
      .jei().priority(14);
  }
  //Display Stand
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem(Item.of("actuallyadditions:ethetic_green_block", 3))
      .requireItem(Item.of("actuallyadditions:ethetic_white_block", 3))
      .requireItem(Item.of("actuallyadditions:advanced_coil", 3))
      .produceItem("actuallyadditions:display_stand")
      .requireEnergy(1000);
  }
  //Flux Compressor
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem(Item.of("pneumaticcraft:advanced_air_compressor"))
      .requireItem(Item.of("pneumaticcraft:turbine_rotor"))
      .requireItem(Item.of("kubejs:basic_circuit"))
      .produceItem("pneumaticcraft:flux_compressor")
      .requireEnergy(1000);
  }
  //Space Suit Boots
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/steel", 4)
      .requireItem(Item.of("minecraft:white_wool", 2))
      .requireItem("minecraft:chainmail_boots")
      .produceItem("ad_astra:space_boots")
      .requireEnergy(2000)
      .jei().priority(15);
  }
  //Space Suit Pants
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/steel", 4)
      .requireItem(Item.of("minecraft:white_wool", 2))
      .requireItem("minecraft:chainmail_pants")
      .produceItem("ad_astra:space_pants")
      .requireEnergy(2000)
      .jei().priority(16);
  }
  //Space Suit Suit
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/steel", 4)
      .requireItem(Item.of("minecraft:white_wool", 2))
      .requireItem(Item.of("ad_astra:gas_tank", 2))
      .requireItem("ad_astra:oxygen_gear")
      .requireItem("minecraft:chainmail_suit")
      .produceItem("ad_astra:space_suit")
      .requireEnergy(2000)
      .jei().priority(17);
  }
  //Space Suit Helmet
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/steel", 4)
      .requireItemTag("forge:glass_panes")
      .requireItem("minecraft:chainmail_helmet")
      .produceItem("ad_astra:space_helmet")
      .requireEnergy(2000)
      .jei().priority(18);
  }
  {
    //Gears
    materials.forEach((material) => {
      e.recipes.custommachinery
        .custom_machine("custommachinery:industrialrevival/assembler", 60)
        .requireItemTag(`forge:plates/${material}`)
        .requireItem("kubejs:bearing")
        .produceItem(`#forge:gears/${material}`)
        .requireFluidTag("forge:lubricant", 100)
        .requireEnergy(500)
        .jei().priority(19);
    });
  }
  //Mining gadget MK1
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 600)
      .requireItem("kubejs:basic_circuit")
      .requireItem("actuallyadditions:laser_relay")
      .requireItem("thermal:rf_coil")
      .requireItem("enderio:z_logic_controller")
      .requireItem("enderio:coordinate_selector")
      .requireItemTag("forge:gears/copper")
      .produceItem("mininggadgets:mininggadget_simple")
      .requireEnergy(4000)
      .jei().priority(20);
  }
  //Mining gadget MK2
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 600)
      .requireItem("kubejs:basic_circuit")
      .requireItem("actuallyadditions:laser_relay")
      .requireItem("thermal:rf_coil")
      .requireItem("enderio:z_logic_controller")
      .requireItem("enderio:coordinate_selector")
      .requireItemTag("forge:gears/gold")
      .produceItem("mininggadgets:mininggadget_fancy")
      .requireEnergy(4000)
      .jei().priority(20);
  }
  //Mining gadget MK3
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 600)
      .requireItem("kubejs:basic_circuit")
      .requireItem("actuallyadditions:laser_relay")
      .requireItem("thermal:rf_coil")
      .requireItem("enderio:z_logic_controller")
      .requireItem("enderio:coordinate_selector")
      .requireItemTag("forge:gears/iron")
      .produceItem("mininggadgets:mininggadget")
      .requireEnergy(4000)
      .jei().priority(20);
  }
  //Building gadget
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 600)
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItem("create:schematicannon")
      .requireItem("actuallyadditions:advanced_coil")
      .requireItem("enderio:ender_resonator")
      .requireItem("actuallyadditions:ender_casing")
      .requireItem("minecraft:nether_star")
      .produceItem("buildinggadgets2:gadget_building")
      .requireEnergy(4000)
      .jei().priority(21);
  }
  //Copy-Paste gadget
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 600)
      .requireItem("buildinggadgets2:gadget_building")
      .requireItem("create:empty_schematic")
      .requireItem("thermal:blitz_powder")
      .produceItem("buildinggadgets2:gadget_copy_paste")
      .requireEnergy(4000)
      .jei().priority(21);
  }
  //Copy-Paste gadget
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 600)
      .requireItem("buildinggadgets2:gadget_building")
      .requireItem("botania:exchange_rod")
      .requireItem("minecraft:redstone_torch")
      .produceItem("buildinggadgets2:gadget_exchanging")
      .requireEnergy(4000)
      .jei().priority(21);
  }
  //Cut-paste gadget
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 600)
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItem("enderio:ender_resonator")
      .requireItem("actuallyadditions:advanced_coil")
      .requireItem("create:empty_schematic")
      .requireItem("unusualend:pearlescent_upgrade_smithing_template")
      .requireItem("minecraft:nether_star")
      .produceItem("buildinggadgets2:gadget_cut_paste")
      .requireEnergy(4000)
      .jei().priority(22);
  }
  //Destruction gadget
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 600)
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItem("enderio:ender_resonator")
      .requireItem("actuallyadditions:advanced_coil")
      .requireItem(Item.of("enderio:grains_of_infinity", 4))
      .requireItem("unusualend:pearlescent_upgrade_smithing_template")
      .requireItem("minecraft:nether_star")
      .produceItem("buildinggadgets2:gadget_destruction")
      .requireEnergy(4000)
      .jei().priority(22);
  }
  //Pneumatic Helmet
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 800)
      .requireItem("pneumaticcraft:compressed_iron_helmet")
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItem("pneumaticcraft:air_canister")
      .requireItem(Item.of("kubejs:advanced_thermal_alloy_plating", 4))
      .produceItem("pneumaticcraft:pneumatic_helmet")
      .requireEnergy(4000)
      .jei().priority(23);
  }
  //Pneumatic Chestplate
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 800)
      .requireItem("pneumaticcraft:compressed_iron_chestplate")
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItem("pneumaticcraft:air_canister")
      .requireItem(Item.of("kubejs:advanced_thermal_alloy_plating", 4))
      .produceItem("pneumaticcraft:pneumatic_chestplate")
      .requireEnergy(4000)
      .jei().priority(23);
  }
  //Pneumatic Leggings
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 800)
      .requireItem("pneumaticcraft:compressed_iron_leggings")
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItem("pneumaticcraft:air_canister")
      .requireItem(Item.of("kubejs:advanced_thermal_alloy_plating", 4))
      .produceItem("pneumaticcraft:pneumatic_leggings")
      .requireEnergy(4000)
      .jei().priority(23);
  }
  //Pneumatic Boots
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 800)
      .requireItem("pneumaticcraft:compressed_iron_boots")
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItem("pneumaticcraft:air_canister")
      .requireItem(Item.of("kubejs:advanced_thermal_alloy_plating", 4))
      .produceItem("pneumaticcraft:pneumatic_boots")
      .requireEnergy(4000)
      .jei().priority(23);
  }
  //Advanced Machine Casing
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 400)
      .requireItem("kubejs:basic_machine_casing")
      .requireItemTag("forge:plates/shadow_bronze", 4)
      .requireItem("kubejs:vaccum_tube")
      .produceItem("kubejs:advanced_machine_casing")
      .requireEnergy(4000)
      .jei().priority(24);
  }
  //Techlab Basic Machine Casing
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 400)
      .requireItem("actuallyadditions:iron_casing")
      .requireItemTag("forge:plates/steel", 4)
      .requireItem("kubejs:vaccum_tube")
      .requireItemTag("forge:gears/energized_steel", 3)
      .produceItem("kubejs:basic_machine_casing")
      .requireEnergy(4000)
      .jei().priority(24);
  }
  //Steam Turbine Vent
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 400)
      .requireItem("ad_astra:fan")
      .requireItemTag("forge:plates/steel", 3)
      .produceItem("mm:steam_turbine_vent")
      .requireEnergy(1000);
  }
  //Steam Turbine Vent
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 400)
      .requireItem(
        Item.of(
          "custommachinery:custom_machine_item",
          '{machine:"custommachinery:industrialrevival/batbox"}'
        )
      )
      .requireItem(Item.of("createaddition:copper_spool", 3))
      .requireItemTag("forge:plates/steel", 3)
      .requireItem("tfmg:capacitor_")
      .produceItem("createaddition:alternator")
      .requireEnergy(3000);
  }
  //Large Steam Turbine Controller
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 1200)
      .requireItem("kubejs:advanced_machine_casing")
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItem("kubejs:overworld_science_mix")
      .requireItem("ad_astra:fan")
      .requireItemTag("thermal:glass/hardened", 2)
      .produceItem("mm:large_steam_turbine_controller")
      .requireEnergy(3000)
      .jei().priority(25);
  }
  //Chemical Reactor Controller
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 1200)
      .requireItem("kubejs:advanced_machine_casing")
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItem(Item.of("kubejs:hdpe_sheet", 4))
      .requireItem("thermal:machine_brewer")
      .requireItem("enderio:z_logic_controller")
      .produceItem("mm:chemical_reactor_controller")
      .requireEnergy(4000)
      .jei().priority(25);
  }
  //Industrial Furnace Controller
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 1200)
      .requireItem("kubejs:advanced_machine_casing")
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItem("kubejs:overworld_science_mix")
      .requireItem(Item.of("ad_astra:etrionic_blast_furnace", 2))
      .produceItem(Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:industrialrevival/industrial_furnace"}'))
      .requireEnergy(4000)
      .jei().priority(25);
  }
  //Large Steam Boiler Controller
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 1200)
      .requireItem("kubejs:advanced_machine_casing")
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItem("kubejs:overworld_science_mix")
      .requireItem(Item.of("systeams:steam_dynamo", 2))
      .requireItem("create:steam_engine")
      .produceItem("mm:large_steam_boiler_controller")
      .requireEnergy(4000)
      .jei().priority(25);
  }
  //Foiled Panel Block
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 1200)
      .requireItem(Item.of("kubejs:panel_block", 8))
      .requireItemTag("forge:plates/tin")
      .produceItem(Item.of("kubejs:foiled_panel_block", 8))
      .requireEnergy(200)
      .jei().priority(26);
  }
  //Energetic Photovoltaic Module
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 600)
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItemTag("thermal:glass/hardened")
      .requireItem(Item.of("enderio:photovoltaic_plate", 3))
      .requireItem(Item.of("tfmg:capacitor_",2))
      .requireItem("enderio:energetic_alloy_ingot")
      .requireItem("kubejs:overworld_science_mix")
      .requireFluid(Fluid.of("tfmg:cooling_fluid", 2000))
      .produceItem("enderio:energetic_photovoltaic_module")
      .requireEnergy(6000)
      .info(info => info
        .tooltip("Requires advanced tier")
        .item("kubejs:advanced_machine_casing"))
      .jei()
      .priority(27);
  }
  //Empty data card
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 600)
      .requireItem("minecraft:paper")
      .requireItemTag("forge:plates/tin", 2)
      .produceItem(Item.of("kubejs:empty_data_card", 3))
      .requireEnergy(4100)
      .info(info => info
        .tooltip("Requires advanced tier")
        .item("kubejs:advanced_machine_casing"))
      .jei().priority(28);
  }
  //Incandescent Vaccum tube
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 600)
      .requireItem("create:blaze_burner")
      .requireItem("tconstruct:soul_glass")
      .requireItem("kubejs:black_quartzite_ingot")
      .requireItem("malum:alchemical_calx")
      .produceItem("kubejs:incandescent_vaccum_tube")
      .requireEnergy(5000)
      .info(info => info
        .tooltip("Requires advanced tier")
        .item("kubejs:advanced_machine_casing"))
      .jei().priority(28);
  }
  //Logistic Machine
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 600)
      .requireItemTag("forge:plates/copper", 2)
      .requireItem(Item.of("minecraft:redstone", 2))
      .requireItem("minecraft:redstone_torch")
      .requireItem("thermal:redstone_servo")
      .requireItem("minecraft:stone_slab")
      .produceItem("kubejs:logistic_machine")
      .requireEnergy(500);
  }
  /*
  //
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("")
      .produceItem("")
      .requireEnergy(4000);
  } 
  */
});
