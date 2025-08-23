StartupEvents.registry("item", (e) => {

  let item = [
    "makeshift_mechanism",
    "logistic_machine",
    "basic_circuit",
    "advanced_circuit",
    "vaccum_tube",
    "incandescent_vaccum_tube",
    "resistance_circuit",
    "bearing",
    "golden_hand",
    "industrial_leather",
    "bio_plastic",
    "bio_plastic_mesh",
    "duroplast_sheet",
    "hdpe_sheet",
    "advanced_thermal_alloy_plating",
    "mixed_metal_ingot",
    "crude_manasteel",
    "advanced_alloy_ingot",
    "advanced_alloy_plate",
    "hot_stainless_steel_ingot",
    "hot_chromatic_alloy_ingot",
    "black_quartzite_ingot",
    "ender_essence",
    "quicksilver",
    "brass_wand_cap",
    "soul_stained_steel_wand_cap",
    "calcium_dust",
    "chromium_dust",
    "manganese_dust",
    "zinc_dust",
    "amethyst_dust",
    "advanced_alloy_dust",
    "chromatic_alloy_dust",
    "modifier_base",
    "speed_modifier",
    "energy_modifier",
    "luck_modifier",
    "fuel_efficiency_modifier",
    "crushed_raw_desh",
    "crushed_raw_ostrum",
    "crushed_raw_calorite",
    "common_techbuck",
    "uncommon_techbuck",
    "rare_techbuck",
    "epic_techbuck",
    "wooden_gear",
    "wooden_board",
  ];

  item.forEach((registry) => {
    e.create(registry);
  });
  
  e.create("create:crushed_raw_cobalt").texture(
    "kubejs:item/crushed_raw_cobalt"
  );
  e.create("create:crushed_raw_lithium").texture(
    "kubejs:item/crushed_raw_lithium"
  );
});
