StartupEvents.registry("block", (e) => {
  let machines = [
    "low_pressure_boiler",
    "steam_alloy_foundry",
    "steam_compressor",
    "steam_macerator",
    "steam_metal_former",
    "steam_smelter",
    "basic_alloy_foundry",
    "basic_compressor",
    "basic_macerator",
    "basic_metal_former",
    "basic_smelter",
    "basic_assembler",
    "basic_centrifuge",
    "basic_washer",
    "basic_sawmill",

    "battery_box",
    "cesu",
    "mfe",
    "mfsu",
    
    "copper_drum",
    "steel_drum",

    "electric_pump",
    "steam_dynamo",
    "thermal_dynamo",

    "bee_house",
    "apiary",

    "basic_alternator",
    "basic_electric_motor",

    "basic_alchemical_crucible",
    "glutton"
  ];
  machines.forEach((registry) => {
    e.create(`techpack:${registry}`, "custommachinery");
  });
});
