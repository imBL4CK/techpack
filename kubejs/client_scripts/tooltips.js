ItemEvents.tooltip((e) => {
  //Smelters
  e.add(
    [
      "minecraft:furnace",
      "quark:deepslate_furnace",
      "quark:blackstone_furnace",
      "actuallyadditions:powered_furnace",
      "enderio:alloy_smelter",
      "industrialforegoing:resourceful_furnace",
      "thermal:machine_furnace",
      "ad_astra:etrionic_blast_furnace",
    ],
    "This block has the function of a furnace"
  );
  //Disabled Items and Blocks
  e.add(
    ["enderio:conduit_probe"],
    "This item/block does not have a function yet"
  );
  //Pitiful Generator
  e.add(["industrialforegoing:pitiful_generator"], "Generates 30 FE/t");
  //Pitiful Generator
  e.add(["mm:steam_turbine_controller"], "Generates 512 FE/t");
  //Energy Conduits
  e.addAdvanced(["enderio:basic_energy_conduit"], (item, advanced, text) => {
    text.add(1, [Text.of("Max Energy Transfer: 1280").aqua()]);
  });
  e.addAdvanced(["enderio:enhanced_energy_conduit"], (item, advanced, text) => {
    text.add(1, [Text.of("Max Energy Transfer: 5120").aqua()]);
  });
  e.addAdvanced(["enderio:ender_energy_conduit"], (item, advanced, text) => {
    text.add(1, [Text.of("Max Energy Transfer: 20480").aqua()]);
  });
  //Forever disabled Items
  e.addAdvanced(
    [
      "ad_astra:steel_cable",
      "ad_astra:desh_cable",
      "ad_astra:cable_duct",
    ],
    (item, advanced, text) => {
      text.add(1, [Text.of("⚠ This item was disabled").red()]);
    }
  );
  //Temporary disabled Items
  e.addAdvanced(
    [
      "actuallyadditions:laser_relay_extreme",
      "ad_astra:nasa_workbench",
      "ad_astra:solar_panel",
      "mm:alloy_klin_controller",
      "thermal:energy_duct"
    ],
    (item, advanced, text) => {
      text.add(1, [Text.of("⚠ This item/block was disabled temporarily").red()]);
    }
  );
});
