import { recyclerFuncition } from "./techpack_multiblockAPI";

let basicTierEnergyCost = 20
let advancedTierEnergyCost = 40
let sophisticatedTierEnergyCost = 160

ServerEvents.recipes((e) => {
  const recipes = [
    {
      "processingTime": 100,
      "requireEnergyPerTick": 10,
      "requireItem": ["techpack:redstone_reception_coil"],
      "produceItem": ["6x minecraft:gold_nugget", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": 10,
      "requireItem": ["techpack:redstone_transmission_coil"],
      "produceItem": ["6x eidolon_repraised:silver_nugget", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": 10,
      "requireItem": ["techpack:redstone_conductance_coil"],
      "produceItem": ["6x techpack:electrum_nugget", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": 10,
      "requireItem": ["actuallyadditions:double_battery"],
      "produceItem": ["actuallyadditions:single_battery", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": 10,
      "requireItem": ["actuallyadditions:quadruple_battery"],
      "produceItem": ["actuallyadditions:triple_battery", "techpack:scraps"],
    },
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
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:basic_machine_casing"],
      "produceItem": ["2x techpack:steel_ingot", "techpack:steel_gear", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:electric_alloy_foundry"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "minecraft:blast_furnace", "techpack:bronze_ingot", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:electric_assembler"],
      "produceItem": ["techpack:basic_machine_casing", "ae2:engineering_processor", "techpack:resistor", "techpack:transistor", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:electric_compressor"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "create:mechanical_press", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:electric_centrifuge"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "create:whisk", "techpack:steel_gear", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:electric_electrolysis_separator"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "enderio:basic_capacitor", "enderio:infinity_rod", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:electric_fluid_transposer"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "precision_fluid_pipette:fluid_pipette", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:electric_induction_furnace"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "minecraft:blast_furnace", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:electric_macerator"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "create:crushing_wheel", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:electric_metal_former"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "minecraft:piston", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:electric_reaction_chamber"],
      "produceItem": ["techpack:basic_machine_casing",  "techpack:hdpe_sheet", "minecraft:brewing_stand", "techpack:redstone_reception_coil", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:electric_sawmill"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "create:mechanical_saw", "techpack:steel_gear", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:electric_smelter"],
      "produceItem": ["techpack:basic_machine_casing", "create_new_age:copper_wire", "minecraft:furnace", "techpack:basic_circuit", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": basicTierEnergyCost,
      "requireItem": ["techpack:combustion_engine"],
      "produceItem": ["techpack:advanced_machine_casing", "6x techpack:steel_ingot", "techpack:basic_circuit", "techpack:scraps"],
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
      "requireItem": ["ad_astra:tier_1_rocket"],
      "produceItem": ["14x techpack:heavy_duty_plate", "8x techpack:scraps"],
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
      "requireItem": ["pneumaticcraft:printed_circuit_board"],
      "produceItem": ["pneumaticcraft:empty_pcb", "techpack:resistor", "techpack:transistor", "techpack:diode", "enderio:basic_capacitor", "techpack:scraps"],
    },
    {
      "processingTime": 100,
      "requireEnergyPerTick": advancedTierEnergyCost,
      "requireItem": ["techpack:advanced_integral_augment"],
      "produceItem": ["6x techpack:advanced_alloy_ingot", "pneumaticcraft:unassembled_pcb", "techpack:scraps"],
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
      "requireItem": ["techpack:sophisticated_integral_augment"],
      "produceItem": ["6x techpack:stainless_steel_ingot", "techpack:sophisticated_circuit_board", "techpack:scraps"],
    },
  ];
  recipes.forEach((recipe) => {
    recyclerFuncition(e, recipe);
  });
});