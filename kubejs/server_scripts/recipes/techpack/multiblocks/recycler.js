import { recyclerFuncition } from "./techpack_multiblockAPI";

let basicTierEnergyCost = 20
let advancedTierEnergyCost = 40
let sophisticatedTierEnergyCost = 160

ServerEvents.recipes((e) => {
  const recipes = [
    {
      "processingTime": 100,
      "requireEnergyPerTick": 10,
      "requireItem": ["create:whisk"],
      "produceItem": ["3x minecraft:iron_ingot", "create:andesite_alloy", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": 10,
      "requireItem": ["enderio:basic_capacitor"],
      "produceItem": ["enderio:grains_of_infinity", "6x techpack:tin_nugget", "6x enderio:conductive_alloy_nugget", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": 10,
      "requireItem": ["techpack:basic_fluid_cell"],
      "produceItem": ["2x techpack:bronze_ingot", "2x techpack:copper_plate", "minecraft:barrel", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_machine_casing"],
      "produceItem": ["2x techpack:steel_ingot", "techpack:steel_gear", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_alloy_foundry"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "minecraft:furnace", "techpack:bronze_plate", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_assembler"],
      "produceItem": ["techpack:basic_machine_casing", "ae2:engineering_processor", "techpack:resistor", "techpack:transistor", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_compressor"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "create:mechanical_press", "techpack:polished_diamond", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_centrifuge"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "create:whisk", "techpack:steel_gear", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_electrolysis_separator"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "enderio:basic_capacitor", "enderio:infinity_rod", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_macerator"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "create:millstone", "techpack:polished_diamond", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_metal_former"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "techpack:polished_diamond", "minecraft:piston", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_reaction_chamber"],
      "produceItem": ["techpack:basic_machine_casing",  "techpack:basic_fluid_cell", "minecraft:brewing_stand", "techpack:redstone_reception_coil", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_sawmill"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "create:mechanical_saw", "techpack:steel_gear", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_smelter"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "minecraft:furnace", "techpack:steel_plate", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_solidifier"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "pneumaticcraft:heat_frame", "techpack:steel_ingot", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_washer"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "create_new_age:basic_motor", "techpack:steel_gear", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_combustion_engine"],
      "produceItem": ["techpack:basic_machine_casing", "create:steam_engine", "techpack:redstone_transmission_coil", "minecraft:iron_ingot", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_circuit"],
      "produceItem": ["techpack:redstone_reception_coil", "techpack:redstone_transmission_coil", "create:electron_tube", "create_new_age:copper_wire", "techpack:basic_circuit_board", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["actuallyadditions:atomic_reconstructor"],
      "produceItem": ["techpack:basic_machine_casing", "actuallyadditions:lens", "techpack:steel_plate", "techpack:steel_gear", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:invar_frame"],
      "produceItem": ["2x techpack:invar_ingot", "2x techpack:steel_gear", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["techpack:advanced_machine_casing"],
      "produceItem": ["2x techpack:advanced_alloy_ingot", "techpack:advanced_alloy_gear", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["techpack:advanced_alloy_foundry"],
      "produceItem": ["techpack:advanced_machine_casing", "create_new_age:overcharged_golden_wire", "minecraft:furnace", "techpack:bronze_plate", "pneumaticcraft:printed_circuit_board", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["techpack:advanced_assembler"],
      "produceItem": ["techpack:advanced_machine_casing", "ae2:engineering_processor", "techpack:resistor", "techpack:transistor", "pneumaticcraft:printed_circuit_board", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["techpack:advanced_compressor"],
      "produceItem": ["techpack:advanced_machine_casing", "create_new_age:overcharged_golden_wire", "create:mechanical_press", "techpack:polished_diamond", "pneumaticcraft:printed_circuit_board", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["techpack:advanced_centrifuge"],
      "produceItem": ["techpack:advanced_machine_casing", "create_new_age:overcharged_golden_wire", "create:whisk", "techpack:advanced_alloy_gear", "pneumaticcraft:printed_circuit_board", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["techpack:advanced_electrolysis_separator"],
      "produceItem": ["techpack:advanced_machine_casing", "create_new_age:overcharged_golden_wire", "enderio:basic_capacitor", "enderio:infinity_rod", "pneumaticcraft:printed_circuit_board", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["techpack:advanced_macerator"],
      "produceItem": ["techpack:advanced_machine_casing", "create_new_age:overcharged_golden_wire", "create:millstone", "techpack:polished_diamond", "pneumaticcraft:printed_circuit_board", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["techpack:advanced_metal_former"],
      "produceItem": ["techpack:advanced_machine_casing", "create_new_age:overcharged_golden_wire", "techpack:polished_diamond", "minecraft:piston", "pneumaticcraft:printed_circuit_board", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["techpack:advanced_reaction_chamber"],
      "produceItem": ["techpack:advanced_machine_casing",  "techpack:basic_fluid_cell", "minecraft:brewing_stand", "techpack:redstone_reception_coil", "pneumaticcraft:printed_circuit_board", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["techpack:advanced_sawmill"],
      "produceItem": ["techpack:advanced_machine_casing", "create_new_age:overcharged_golden_wire", "create:mechanical_saw", "techpack:advanced_alloy_gear", "pneumaticcraft:printed_circuit_board", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["techpack:advanced_smelter"],
      "produceItem": ["techpack:advanced_machine_casing", "create_new_age:overcharged_golden_wire", "minecraft:furnace", "techpack:advanced_alloy_plate", "pneumaticcraft:printed_circuit_board", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["techpack:advanced_solidifier"],
      "produceItem": ["techpack:advanced_machine_casing", "create_new_age:overcharged_golden_wire", "pneumaticcraft:heat_frame", "techpack:advanced_alloy_ingot", "pneumaticcraft:printed_circuit_board", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["techpack:advanced_washer"],
      "produceItem": ["techpack:advanced_machine_casing", "create_new_age:overcharged_golden_wire", "create_new_age:advanced_motor", "techpack:advanced_alloy_gear", "pneumaticcraft:printed_circuit_board", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["pneumaticcraft:printed_circuit_board"],
      "produceItem": ["pneumaticcraft:empty_pcb", "techpack:resistor", "techpack:transistor", "techpack:diode", "enderio:basic_capacitor", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": sophisticatedTierEnergyCost,
      "requireItem": ["techpack:sophisticated_machine_casing"],
      "produceItem": ["2x techpack:stainless_steel_ingot", "techpack:stainless_steel_gear", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": sophisticatedTierEnergyCost,
      "requireItem": ["techpack:sophisticated_alloy_foundry"],
      "produceItem": ["techpack:sophisticated_machine_casing", "pipez:energy_pipe", "minecraft:furnace", "techpack:bronze_plate", "techpack:sophisticated_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": sophisticatedTierEnergyCost,
      "requireItem": ["techpack:sophisticated_assembler"],
      "produceItem": ["techpack:sophisticated_machine_casing", "ae2:engineering_processor", "techpack:resistor", "techpack:transistor", "techpack:sophisticated_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": sophisticatedTierEnergyCost,
      "requireItem": ["techpack:sophisticated_compressor"],
      "produceItem": ["techpack:sophisticated_machine_casing", "pipez:energy_pipe", "create:mechanical_press", "techpack:polished_diamond", "techpack:sophisticated_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": sophisticatedTierEnergyCost,
      "requireItem": ["techpack:sophisticated_centrifuge"],
      "produceItem": ["techpack:sophisticated_machine_casing", "pipez:energy_pipe", "create:whisk", "techpack:stainless_steel_gear", "techpack:sophisticated_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": sophisticatedTierEnergyCost,
      "requireItem": ["techpack:sophisticated_electrolysis_separator"],
      "produceItem": ["techpack:sophisticated_machine_casing", "pipez:energy_pipe", "enderio:basic_capacitor", "enderio:infinity_rod", "techpack:sophisticated_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": sophisticatedTierEnergyCost,
      "requireItem": ["techpack:sophisticated_macerator"],
      "produceItem": ["techpack:sophisticated_machine_casing", "pipez:energy_pipe", "create:millstone", "techpack:polished_diamond", "techpack:sophisticated_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": sophisticatedTierEnergyCost,
      "requireItem": ["techpack:sophisticated_metal_former"],
      "produceItem": ["techpack:sophisticated_machine_casing", "pipez:energy_pipe", "techpack:polished_diamond", "minecraft:piston", "techpack:sophisticated_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": sophisticatedTierEnergyCost,
      "requireItem": ["techpack:sophisticated_reaction_chamber"],
      "produceItem": ["techpack:sophisticated_machine_casing",  "techpack:basic_fluid_cell", "minecraft:brewing_stand", "techpack:redstone_reception_coil", "techpack:sophisticated_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": sophisticatedTierEnergyCost,
      "requireItem": ["techpack:sophisticated_sawmill"],
      "produceItem": ["techpack:sophisticated_machine_casing", "pipez:energy_pipe", "create:mechanical_saw", "techpack:stainless_steel_gear", "techpack:sophisticated_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": sophisticatedTierEnergyCost,
      "requireItem": ["techpack:sophisticated_smelter"],
      "produceItem": ["techpack:sophisticated_machine_casing", "pipez:energy_pipe", "minecraft:furnace", "techpack:stainless_steel_plate", "techpack:sophisticated_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": sophisticatedTierEnergyCost,
      "requireItem": ["techpack:sophisticated_solidifier"],
      "produceItem": ["techpack:sophisticated_machine_casing", "pipez:energy_pipe", "pneumaticcraft:heat_frame", "techpack:stainless_steel_ingot", "techpack:sophisticated_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": sophisticatedTierEnergyCost,
      "requireItem": ["techpack:sophisticated_washer"],
      "produceItem": ["techpack:sophisticated_machine_casing", "pipez:energy_pipe", "create_new_age:reinforced_motor", "techpack:stainless_steel_gear", "techpack:sophisticated_circuit", "techpack:scraps"],
    },
  ];
  recipes.forEach((recipe) => {
    recyclerFuncition(e, recipe);
  });
});