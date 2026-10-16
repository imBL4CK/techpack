StartupEvents.registry("block", (e) => {
  let machines = [
    //Creative 
    "creative_redstone_flux_source",

    //Steam Machines
    "low_pressure_boiler",
    "high_pressure_boiler",
    "steam_alloy_foundry",
    "steam_compressor",
    "steam_macerator",
    "steam_metal_former",
    "steam_smelter",

    //Basic Machines
    "electric_alloy_foundry",
    "electric_assembler",
    "electric_centrifuge",
    "electric_compressor",
    "electric_electrolysis_separator",
    "electric_fluid_transposer",
    "electric_macerator",
    "electric_metal_former",
    "electric_induction_furnace",
    "electric_reaction_chamber",
    "electric_sawmill",
    "electric_smelter",

    //Energy Storage
    "zinc_battery_box",
    "lead_battery_box",
    "silver_battery_box",
    "stainless_steel_battery_box",

    //generators
    "steam_dynamo",
    "heat_dynamo",
    "cryo_dynamo",
    "combustion_engine",
    
    //Malum Related Machines
    "animated_mechanical_motor",
    "mimicry_dynamo",

    //Beekeeping
    "bee_house",
    "apiary",
    "mutation_station",

    //Devices
    "electric_composter",
    "electric_pump",
    "resource_collector",
    "inorganic_matter_generator",

    //Misc
    "kiln",
    "cinder_blast_furnace",
    "glutton",
  ];
  machines.forEach((registry) => {
    e.create(`techpack:${registry}`, "custommachinery:custom_machine");
  });
});
