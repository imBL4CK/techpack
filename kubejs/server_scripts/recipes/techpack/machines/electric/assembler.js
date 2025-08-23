import { techpackMachineAPI } from "./techpack_machineAPI"; 
ServerEvents.recipes((e) => {
  //Constantan Coil
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(1000)
      .requireItem("techpack:steel_casing")
      .requireItem(Item.of("techpack:constantan_plate", 3))
      .produceItem("techpack:constantan_coil")
      .jei()
      .priority(1);
  }
  //Steam quarry
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(1000)
      .requireItem("techpack:steel_casing")
      .requireItem("techpack:basic_circuit")
      .requireItem("ae2:engineering_processor")
      .requireItem("2x techpack:basic_electric_motor")
      .requireItem("2x malum:soul_stained_steel_ingot")
      .produceItem(
        'modular_machinery_reborn:controller[modular_machinery_reborn:machine="techpack:steam_quarry"]'
      )
      .jei()
      .priority(2);
  }
  //Deployer
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(500)
      .requireItem("techpack:makeshift_mechanism")
      .requireItem("create:andesite_casing")
      .requireItem("create:brass_hand")
      .produceItem("create:deployer")
      .jei()
      .priority(3);
  }
  //Encased Fan
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(500)
      .requireItem("techpack:makeshift_mechanism")
      .requireItem("create:andesite_casing")
      .requireItem("create:propeller")
      .produceItem("create:encased_fan")
      .jei()
      .priority(3);
  }
  //Mechanical press
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(500)
      .requireItem("techpack:makeshift_mechanism")
      .requireItem("create:andesite_casing")
      .requireItem("minecraft:iron_block")
      .produceItem("create:mechanical_press")
      .jei()
      .priority(3);
  }
  //Mechanical mixer
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(500)
      .requireItem("techpack:makeshift_mechanism")
      .requireItem("create:andesite_casing")
      .requireItem("create:whisk")
      .produceItem("create:mechanical_mixer")
      .jei()
      .priority(3);
  }
  //Mechanical drill
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(500)
      .requireItem("techpack:makeshift_mechanism")
      .requireItem("create:andesite_casing")
      .requireItem("techpack:iron_plate")
      .produceItem("create:mechanical_drill")
      .jei()
      .priority(3);
  }
  //Mechanical saw
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(500)
      .requireItem("techpack:makeshift_mechanism")
      .requireItem("create:andesite_casing")
      .requireItem("techpack:iron_gear")
      .produceItem("create:mechanical_saw")
      .jei()
      .priority(3);
  }
  //Chest
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(500)
      .requireItem("8x #minecraft:planks")
      .requireItem("2x farmersdelight:tree_bark")
      .produceItem("minecraft:chest")
      .jei()
      .priority(4);
  }
  //Barrel
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(500)
      .requireItem("6x #minecraft:planks")
      .requireItem("4x farmersdelight:tree_bark")
      .produceItem("minecraft:barrel")
      .jei()
      .priority(4);
  }
  //Precision mechanism
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(1000)
      .requireItem("create:electron_tube")
      .requireItem("minecraft:gold_ingot")
      .requireItem("create:cogwheel")
      .produceItem("2x create:precision_mechanism")
      .jei()
      .priority(5);
  }
  //Basic capacitor
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(2000)
      .requireItem("create:polished_rose_quartz")
      .requireItem("#c:ingots/tin")
      .requireItem("createaddition:copper_wire")
      .produceItem("2x create:electron_tube")
      .jei()
      .priority(5);
  }
  //Basic capacitor
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(2000)
      .requireItem("2x enderio:grains_of_infinity")
      .requireItem("#c:ingots/tin")
      .requireItem("enderio:copper_alloy_ingot")
      .requireItem("minecraft:redstone_torch")
      .produceItem("2x enderio:basic_capacitor")
      .jei()
      .priority(6);
  }
  //Basic Conduit
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(1000)
      .requireItem("2x enderio:conduit_binder")
      .requireItem("1x enderio:conductive_alloy_ingot")
      .requireFluid("200x pneumaticcraft:plastic")
      .produceItem('4x enderio:conduit[enderio:conduit="enderio:energy"]')
      .jei()
      .priority(7);
  }
  //Enhanced Conduit
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(5000)
      .requireItem("2x enderio:conduit_binder")
      .requireItem("1x enderio:energetic_alloy_ingot")
      .requireItem("actuallyadditions:ethetic_green_block")
      .requireFluid("200x pneumaticcraft:plastic")
      .produceItem('4x enderio:conduit[enderio:conduit="enderio:enhanced_energy"]')
      .info(info => info
          .tooltip("Requires Advanced Tier")
          .item("techpack:advanced_machine_casing")
      )
      .jei()
      .priority(7);
  }
  //Ender Conduit
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_assembler", 200)
      .requireEnergy(1000)
      .requireItem("2x enderio:conduit_binder")
      .requireItem("1x enderio:vibrant_alloy_ingot")
      .requireFluid("200x pneumaticcraft:plastic")
      .produceItem('4x enderio:conduit[enderio:conduit="enderio:ender_energy"]')
      .info(info => info
          .tooltip("Requires Sophisticated Tier")
          .item("techpack:sophisticated_machine_casing")
      )
      .jei()
      .priority(7);
  }
  //Quartz fiber
  {
    e.recipes.custommachinery.custom_machine("techpack:basic_assembler", 200)
    .requireItem("2x #c:dusts/quartz")
    .requireItem("3x #c:glass_blocks")
    .requireItem("#c:ingots/platinum")
    .produceItem("6x ae2:quartz_fiber")
  }
  //Finished PCB
  {
    e.recipes.custommachinery.custom_machine("techpack:basic_assembler", 200)
    .requireItem("pneumaticcraft:unassembled_pcb")
    .requireItem("techpack:resistor")
    .requireItem("techpack:transistor")
    .requireItem("enderio:basic_capacitor")
    .requireFluid("500x pneumaticcraft:plastic")
    .produceItem("pneumaticcraft:printed_circuit_board")
    .info(info => info.tooltip("This recipe make diamonds").item("techpack:basic_circuit"))
    .jei()
    .priority(7);
  }
  //Drill core
  {
    e.recipes.custommachinery.custom_machine("techpack:basic_assembler", 200)
    .requireItem("techpack:basic_circuit")
    .requireItem("techpack:redstone_conductance_coil")
    .requireItem("actuallyadditions:restonia_crystal")
    .requireItem("actuallyadditions:enori_crystal")
    .requireItem("2x techpack:bearing")
    .requireItem("create:hand_crank")
    .requireFluid("500x pneumaticcraft:plastic")
    .produceItem("actuallyadditions:drill_core")
  }
  //Display Stand
  {
    e.recipes.custommachinery.custom_machine("techpack:basic_assembler", 200)
    .requireItem("pneumaticcraft:printed_circuit_board")
    .requireItem("techpack:redstone_reception_coil")
    .requireItem("3x actuallyadditions:ethetic_green_block")
    .requireItem("3x actuallyadditions:ethetic_white_block")
    .requireFluid("500x pneumaticcraft:plastic")
    .produceItem("actuallyadditions:display_stand")
    .jei()
    .priority(8);
  }
  //Display Stand
  {
    e.recipes.custommachinery.custom_machine("techpack:basic_assembler", 200)
    .requireItem("actuallyadditions:restonia_crystal")
    .requireItem("2x techpack:lead_battery_cell")
    .requireItem("techpack:basic_machine_casing")
    .requireItem("actuallyadditions:display_stand")
    .requireFluid("500x pneumaticcraft:plastic")
    .produceItem("actuallyadditions:empowerer")
    .jei()
    .priority(8);
  }
});
ServerEvents.recipes((e) => {
    const recipes = [
    {
        "machineType": "techpack:basic_assembler",
        "processingTime": 100,
        "requireSU": [64, 4],
        "producePressure": 2000,
        "requireTime": "(,12000)",
        "requireItem": ["techpack:silver_battery_cell"],
        "produceItem": ["techpack:silver_battery_cell"]
    }
]
recipes.forEach((recipe) => {
        techpackMachineAPI(e,recipe)
    });
});