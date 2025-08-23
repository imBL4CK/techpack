MMEvents.createStructures((e) => {
  //ARC Furnace
  {
    e.create("mm:arc_furnace_structure")
      .controllerId("mm:arc_furnace_controller")
      .name("Arc Furnace")
      .layout((l) => {
        l.layer(["SSS", "SSS", "SSS"])
          .layer(["HHH", "H H", "HHH"])
          .layer(["SES", "SSS", "ICI"])
          .key("I", {
            portType: "mm:item",
          })
          .key("S", {
            block: "kubejs:steel_casing",
          })
          .key("H", {
            block: "kubejs:heatproof_casing",
          })
          .key("U", {
            block: "create:blaze_burner",
          })
          .key("E", {
            portType: "mm:energy",
            input: true,
          });
      });
  }
  //Alloy Klin
  {
    e.create("mm:alloy_klin_structure")
      .controllerId("mm:alloy_klin_controller")
      .name("Alloy Klin")
      .layout((l) => {
        l.layer(["BBB", "BBB"])
          .layer(["BBB", "ICI"])
          .layer(["MMM", "MMM"])
          .key("B", {
            block: "kubejs:klin_bricks",
          })
          .key("I", {
            portType: "mm:item",
          })
          .key("M", {
            block: "minecraft:magma_block",
          });
      });
  }
  //Steam Macerator
  {
    e.create("mm:steam_macerator_structure")
      .controllerId("mm:steam_macerator_controller")
      .name("Steam Macerator")
      .layout((l) => {
        l.layer(["BBB", "BBB"])
          .layer(["BFB", "ICI"])
          .key("B", {
            block: "kubejs:bronze_casing",
          })
          .key("I", {
            portType: "mm:item",
          })
          .key("F", {
            portType: "mm:fluid",
          });
      });
  }
  //ARC Furnace (Shadow Bronze Coil)
  {
    e.create("mm:arc_furnace_shadow_bronze_structure")
      .controllerId("mm:arc_furnace_controller")
      .name("Arc Furnace (Shadow Bronze Coil)")
      .layout((l) => {
        l.layer(["SSS", "SSS", "SSS"])
          .layer(["BBB", "B B", "BBB"])
          .layer(["SES", "SSS", "ICI"])
          .key("I", {
            portType: "mm:item",
          })
          .key("S", {
            block: "kubejs:steel_casing",
          })
          .key("B", {
            block: "kubejs:shadow_bronze_coil",
          })
          .key("U", {
            block: "create:blaze_burner",
          })
          .key("E", {
            portType: "mm:energy",
            input: true,
          });
      });
  }
  //Freezer
  {
    e.create("mm:freezer_structure")
      .controllerId("mm:freezer_controller")
      .name("Freezer")
      .layout((l) => {
        l.layer (["PPP", "PPP", "PPP"])
          .layer(["PEP", "P P", "PCP"])
          .layer(["FPF", "PPP", "IPI"])
          .key("I", {
            portType: "mm:item",
          })
          .key("F", {
            portType: "mm:fluid",
          })
          .key("P", {
            block: "kubejs:frostproof_casing",
          })
          .key("E", {
            portType: "mm:energy",
            input: true,
          });
      });
  }
  //Pyrolyse Oven
  {
    e.create("mm:pyrolyse_oven_structure")
      .controllerId("mm:pyrolyse_oven_controller")
      .name("Pyrolyse Oven")
      .layout((l) => {
        l.layer(["SSS", "OOO", "SSS"])
          .layer(["SSS", "O O", "SCS"])
          .layer(["FEF", "OOO", "ISI"])
          .key("I", {
            portType: "mm:item",
          })
          .key("F", {
            portType: "mm:fluid",
          })
          .key("S", {
            block: "kubejs:steel_casing",
          })
          .key("O", {
            block: "kubejs:constantan_coil",
          })
          .key("E", {
            portType: "mm:energy",
            input: true,
          });
      });
  }
  //Large Steam Turbine
  {
    e.create("mm:large_steam_turbine_structure")
      .controllerId("mm:large_steam_turbine_controller")
      .name("Steam Turbine")
      .layout((l) => {
        l.layer(["HHH", "HVH", "HVH", "HHH"])
          .layer(["HEH", "V V", "V V", "HCH"])
          .layer(["HFH", "HVH", "HVH", "HFH"])
          .key("F", {
            portType: "mm:fluid",
          })
          .key("H", {
            block: "kubejs:heatproof_casing",
          })
          .key("V", {
            block: "mm:steam_turbine_vent",
          })
          .key("E", {
            portType: "mm:energy",
            output: true,
          });
      });
  }
  //Large Steam Boiler
  {
    e.create("mm:steam_boiler_structure")
      .controllerId("mm:large_steam_boiler_controller")
      .name("Large Steam Boiler")
      .layout((l) => {
        l.layer(["BBB", "BBB", "BBB"])
          .layer(["HHH", "H H", "HHH"])
          .layer(["HHH", "H H", "HHH"])
          .layer(["BEB", "BBB", "FCF"])
          .key("B", {
            block: "kubejs:bronze_casing",
          })
          .key("H", {
            block: "kubejs:heatproof_casing",
          })
          .key("F", {
            portType: "mm:fluid",
          })
          .key("E", {
            portType: "mm:energy",
            input: true,
          })
      });
  }
  //Chemical Reactor
  {
    e.create("mm:chemical_reactor_structure")
      .controllerId("mm:chemical_reactor_controller")
      .name("Chemical Reactor")
      .layout((l) => {
        l.layer(["PPP", "PPP", "PPP"])
          .layer(["PEP", "P P", "PCP"])
          .layer(["FPF", "PPP", "IPI"])
          .key("I", {
            portType: "mm:item",
          })
          .key("F", {
            portType: "mm:fluid",
          })
          .key("P", {
            block: "kubejs:chemically_resistant_casing",
          })
          .key("E", {
            portType: "mm:energy",
            input: true,
          });
      });
  }
});
