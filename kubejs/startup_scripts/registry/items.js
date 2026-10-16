StartupEvents.registry("item", (e) => {
  let rawResources = [
    "fireclay_ball",
    "cinder_brick",
    "sulfur_dust",
    "slag",
    "rich_slag",
    "coal_coke",
    "cinnabar_shard",
    "quicksilver_drop",
    "mica",
    "rare_earths"
  ];
  let organicResources = [
    "tanned_leather",
    "sawdust",
    "beewax",
    "biomass",
  ];
  let processedMaterials = [
    "flux_powder",
    "rubber",
    "rubber_sheet",
    "hdpe_sheet",
    "bio_plastic_sheet",
    "ptfe_sheet",
    "carbon_mesh",
    "carbon_fiber",
    "graphite_ingot",
    "hop_graphite_dust",
    "wrought_iron_ingot",
    "mixed_metal_ingot",
    "heavy_duty_plate",
  ];
  let components = [
    "bearing",
    "engine_assembly",
    "makeshift_mechanism",
    "animated_parts",
    "basic_circuit_board",
    "sophisticated_circuit_board",
    "basic_circuit",
    "spiritual_circuit",
    "sophisticated_circuit",
    "silicon_wafer",
    "polished_wafer",
    "redstone_reception_coil",
    "redstone_conductance_coil",
    "redstone_transmission_coil",
    "redstone_spiritual_coil",
    "sculk_vibration_coil",
    "transistor",
    "resistor",
    "diode",
    "malignant_pewter_capacitor",
    "malignant_pewter_transistor",
    "malignant_pewter_resistor",
    "crystal_electron_tube",
    "smd_capacitor",
    "smd_transistor",
    "smd_resistor",
    "smd_diode",
    "zinc_battery_cell",
    "lead_battery_cell",
    "silver_battery_cell",
    "void_machine_parts",
    "soul_machine_parts",
    "flux_infused_alloy_plating",
  ];
  let items = [
    "advanced_integral_augment",
    "sophisticated_integral_augment",
    "scraps",
    "curved_copper_plate",
    "curved_iron_plate",
    "curved_diamond_plate",
    "void_seed",
    "void_metal_ingot",
    "wither_drop",
    "organic_component",
    "lustrous_pearl",
  ];
  let transitionalItems = [
    "incomplete_makeshift_mechanism",
    "incomplete_electron_tube",
    "incomplete_steam_engine",
    "incomplete_animated_parts"
  ];

  rawResources.forEach((registry) => {
    e.create(`techpack:${registry}`);
  });
  organicResources.forEach((registry) => {
    e.create(`techpack:${registry}`);
  });
  processedMaterials.forEach((registry) => {
    e.create(`techpack:${registry}`);
  });
  components.forEach((registry) => {
    e.create(`techpack:${registry}`);
  });
  items.forEach((registry) => {
    e.create(`techpack:${registry}`);
  });
  transitionalItems.forEach((registry) => {
    e.create(`techpack:${registry}`);
  });
  
  e.create("techpack:graphite_electrode").tag("techpack:electrodes").maxDamage(1024);
  e.create("techpack:hop_graphite_electrode").tag("techpack:electrodes").maxDamage(2048);
});