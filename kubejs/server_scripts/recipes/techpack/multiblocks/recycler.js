import { recyclerFuncition } from "./techpack_multiblockAPI";

let basicTierEnergyCost = 20
ServerEvents.recipes((e) => {
  const recipes = [
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_machine_casing"],
      "produceItem": ["2x techpack:steel_ingot", "techpack:steel_gear"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_alloy_foundry"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "minecraft:furnace", "techpack:bronze_plate", "techpack:steel_gear", "techpack:basic_circuit"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_assembler"],
      "produceItem": ["techpack:basic_machine_casing", "ae2:engineering_processor", "techpack:steel_gear", "techpack:resistor", "techpack:transistor", "techpack:basic_circuit"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_compressor"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "create:mechanical_press", "techpack:polished_diamond", "techpack:steel_gear", "techpack:basic_circuit"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_centrifuge"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "create:whisk", "techpack:steel_gear", "techpack:basic_circuit"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_electrolysis_separator"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "enderio:basic_capacitor", "enderio:infinity_rod", "techpack:steel_gear", "techpack:basic_circuit"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_macerator"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "create:millstone", "techpack:polished_diamond", "techpack:steel_gear", "techpack:basic_circuit"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_metal_former"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "techpack:polished_diamond", "techpack:steel_gear", "techpack:basic_circuit"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_reaction_chamber"],
      "produceItem": ["techpack:basic_machine_casing",  "techpack:steel_drum", "minecraft:brewing_stand", "techpack:redstone_reception_coil", "techpack:basic_circuit"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_sawmill"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "create:mechanical_saw", "techpack:steel_gear", "techpack:basic_circuit"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_smelter"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "minecraft:furnace", "techpack:steel_plate", "techpack:steel_gear", "techpack:basic_circuit"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_solidifier"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "pneumaticcraft:heat_frame", "techpack:steel_ingot", "techpack:steel_gear", "techpack:basic_circuit"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_washer"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "create_new_age:basic_motor", "techpack:steel_gear", "techpack:basic_circuit"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_combustion_engine"],
      "produceItem": ["techpack:basic_machine_casing", "create:steam_engine", "techpack:redstone_transmission_coil", "techpack:basic_circuit"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_circuit"],
      "produceItem": ["techpack:redstone_reception_coil", "techpack:redstone_transmission_coil", "create:electron_tube", "create_new_age:copper_wire", "techpack:basic_circuit_board"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["actuallyadditions:atomic_reconstructor"],
      "produceItem": ["techpack:basic_machine_casing", "actuallyadditions:lens", "techpack:steel_plate", "techpack:steel_gear", "techpack:basic_circuit"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:invar_frame"],
      "produceItem": ["2x techpack:invar_ingot","2x techpack:steel_gear"],
    },
  ];
  recipes.forEach((recipe) => {
    recyclerFuncition(e, recipe);
  });
});