StartupEvents.registry("item", (e) => {
  let rawResources = [
    "mortar_mix",
    "fireclay_ball",
    "fireproof_brick",
    "sifted_sand",
    "calcium_dust",
    "sulfur_dust",
    "slag",
    "rich_slag",
    "coal_coke",
    "latex",
    "cinnabar",
    "quicksilver",
    "mica",
    "pink_jelly",
    "ice_coolant_ball",
    "ice_coolant_paste",
    "rare_earths",
    "fissile_uranium"
  ];
  let organicResources = [
    "washed_leather",
    "sealed_leather",
    "tanned_leather",
    "handle",
    "sawdust",
    "beewax",
    "organic_matter",
  ];
  let processedMaterials = [
    "rubber",
    "rubber_sheet",
    "bio_plastic_sheet",
    "bio_plastic_mesh",
    "hdpe_sheet",
    "ptfe_sheet",
    "carbon_mesh",
    "carbon_fiber",
    "graphite_ingot",
    "hop_graphite_dust",
    "polished_diamond",
    "heavy_steel_plate",
    "heavy_duty_plate",
    "flux_powder",
    "thermal_paste",
    "wrought_iron_ingot",
    "mixed_metal_ingot",
  ];
  let components = [
    "bearing",
    "makeshift_mechanism",
    "animated_parts",
    "silicon_wafer",
    "polished_wafer",
    "basic_circuit_board",
    "sophisticated_circuit_board",
    "basic_circuit",
    "sophisticated_circuit",
    //"computer_unit",
    "spiritual_circuit",
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
    "stacking_processor",
    "micro_computer",
    "zinc_battery_cell",
    "lead_battery_cell",
    "silver_battery_cell",
    "void_machine_parts",
    "soul_machine_parts",
    "flux_infused_alloy_plating",
    "obsidian_focal_lens",
  ];
  let items = [
    "scraps",
    "curved_copper_plate",
    "curved_iron_plate",
    "curved_diamond_plate",
    //"plating",
    "pouch",
    "calcium_fertilizer",
    "void_seed",
    "wither_drop",
    "instabillis_ingot",
    "stabillis_ingot",
    "organic_component",
    "lustrous_pearl",
  ];
  let transitionalItems = [
    "incomplete_makeshift_mechanism",
    "incomplete_electron_tube",
    "incomplete_steam_engine",
    "incomplete_animated_parts"
  ];
  
  e.create("techpack:stellar_capacitor","enderio:capacitor").displayName("Stellar Capacitor").rarity("epic").baseValue(5)

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
  e.create("techpack:graphite_electrode").tag("techpack:electrodes").maxDamage(1024);
  e.create("techpack:incandescent_graphite_electrode");
  e.create("techpack:hop_graphite_electrode").tag("techpack:electrodes").maxDamage(2048);
  items.forEach((registry) => {
    e.create(`techpack:${registry}`);
  });
  transitionalItems.forEach((registry) => {
    e.create(`techpack:${registry}`);
  });
});