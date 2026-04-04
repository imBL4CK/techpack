StartupEvents.registry("block", (e) => {
  let machines = [
    "creative_redstone_flux_source",

    "low_pressure_boiler",
    "high_pressure_boiler",

    "steam_alloy_foundry",
    "steam_compressor",
    "steam_macerator",
    "steam_metal_former",
    "steam_smelter",

    "basic_alloy_foundry",
    "basic_assembler",
    "basic_centrifuge",
    "basic_compressor",
    "basic_electrolysis_separator",
    "basic_macerator",
    "basic_metal_former",
    "basic_induction_furnace",
    "basic_reaction_chamber",
    "basic_sawmill",
    "basic_smelter",
    "basic_solidifier",
    "basic_washer",
    
    "advanced_alloy_foundry",
    "advanced_assembler",
    "advanced_centrifuge",
    "advanced_compressor",
    "advanced_electrolysis_separator",
    "advanced_macerator",
    "advanced_metal_former",
    "advanced_induction_furnace",
    "advanced_reaction_chamber",
    "advanced_sawmill",
    "advanced_smelter",
    "advanced_solidifier",
    "advanced_washer",
    
    "sophisticated_alloy_foundry",
    "sophisticated_assembler",
    "sophisticated_centrifuge",
    "sophisticated_compressor",
    "sophisticated_electrolysis_separator",
    "sophisticated_macerator",
    "sophisticated_metal_former",
    "sophisticated_induction_furnace",
    "sophisticated_reaction_chamber",
    "sophisticated_sawmill",
    "sophisticated_smelter",
    "sophisticated_solidifier",
    "sophisticated_washer",

    "battery_box",
    "cesu",
    "mfe",
    "mfsu",

    "steam_dynamo",
    "heat_dynamo",
    "cryo_dynamo",
    
    "basic_combustion_engine",

    "bee_house",
    "apiary",

    "electric_composter",
    "electric_pump",
    "resource_collector",
    "inorganic_matter_generator",

    "basic_fluid_cell",

    "kiln",
    "glutton",
  ];
  machines.forEach((registry) => {
    e.create(`techpack:${registry}`, "custommachinery:custom_machine");
  });
});
