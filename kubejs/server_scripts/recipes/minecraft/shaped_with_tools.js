ServerEvents.recipes((e) => {

  let recipeId = ["minecraft:shaped/"];

  //Water Wheel
  {
    e.shaped("create:water_wheel", ["WSW", "GHG", "WMW"], {
      G: "#forge:gears/wood",
      W: "#forge:plates/wood",
      H: "create:hand_crank",
      S: "#forge:tools/saw",
      M: "#forge:tools/hammer",
    })
      .damageIngredient("#forge:tools/saw", "6")
      .damageIngredient("#forge:tools/hammer", "6")
      .id(`${recipeId}create/water_wheel`);
  }
  //Large Water Wheel
  {
    e.shaped("create:large_water_wheel", ["WGW", "SLH", "WGW"], {
      G: "#forge:gears/wood",
      W: "#forge:plates/wood",
      S: "#forge:tools/saw",
      L: "create:water_wheel",
      H: "#forge:tools/hammer",
    })
      .damageIngredient("#forge:tools/saw", "4")
      .damageIngredient("#forge:tools/hammer", "4")
      .id(`${recipeId}create/large_water_wheel`);
  }
  //Millstone
  {
    e.shaped("create:millstone", [" C ", "HAP", "GSG"], {
      A: "create:andesite_casing",
      S: "#forge:stone",
      C: "create:cogwheel",
      H: "#forge:tools/hammer",
      P: "#forge:tools/saw",
      G: "#forge:gears/wood",
    })
      .damageIngredient("#forge:tools/hammer", "16")
      .damageIngredient("#forge:tools/saw", "16")
      .id(`${recipeId}create/millstone`);
  }
  //Create Wrench
  {
    e.shaped("create:wrench", ["GGH", "GCW", " S "], {
      C: "create:cogwheel",
      H: "#forge:tools/hammer",
      S: "minecraft:stick",
      W: "#forge:gears/wood",
      G: "#forge:plates/gold",
    })
      .damageIngredient("#forge:tools/hammer", "4")
      .id(`${recipeId}create/wrench`);
  }
  //Hand Crank
  {
    e.shaped("create:hand_crank", ["GWW", "SCA"], {
      A: "create:andesite_alloy",
      G: "#forge:gears/wood",
      W: "#forge:plates/wood",
      C: "create:cogwheel",
      S: "#forge:tools/saw",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .id(`${recipeId}create/hand_crank`);
  }
  //Primitive Saw
  {
    e.shaped("kubejs:primitive_saw", ["  S", "HSI", "SI "], {
      S: "minecraft:stick",
      I: "#forge:ingots/iron",
      H: "#forge:tools/hammer",
    }).damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}techlab/primitive_saw`);
  }
  //Primitive Wirecutter
  {
    e.shaped("kubejs:primitive_wirecutter", ["WI ", "I I", "SIH"], {
      S: "minecraft:stick",
      I: "#forge:ingots/iron",
      W: "#forge:tools/saw",
      H: "#forge:tools/hammer",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}techlab/primitive_wirecutter`);
  }
  //Logistic Machine
  {
    e.shaped("kubejs:logistic_machine", ["CTC", "RSR", "WLH"], {
      C: "#forge:plates/copper",
      T: "minecraft:redstone_torch",
      R: "minecraft:redstone",
      S: "thermal:redstone_servo",
      L: "minecraft:stone_slab",
      W: "#forge:tools/saw",
      H: "#forge:tools/hammer",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}techlab/logistic_machine`);
  }
  //Smithing Table
  {
    e.shaped("minecraft:smithing_table", ["HS ", "II ", "PG "], {
      H: "#forge:tools/hammer",
      S: "#forge:tools/saw",
      I: "#forge:ingots/iron",
      P: "#minecraft:planks",
      G: "#forge:gears/wood",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}minecraft/smithing_table`);
  }
  //Arboreal Extractor
  {
    e.shaped("thermal:device_tree_extractor", ["WLW", "HBS", "WGW"], {
      W: "kubejs:wooden_board",
      L: "#forge:glass",
      H: "#forge:tools/hammer",
      B: "minecraft:bucket",
      S: "#forge:tools/saw",
      G: "#forge:gears/iron",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}thermal/arboreal_extractor`);
  }
  //Create Copper Fluid Tank
  {
    e.shaped("create:fluid_tank", ["RPR", "HGS", "RPR"], {
      R: "thermal:cured_rubber",
      P: "#forge:plates/bronze",
      H: "#forge:tools/hammer",
      G: "#forge:glass_panes",
      S: "#forge:tools/saw",
    })
      .damageIngredient("#forge:tools/saw", "4")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}create/fluid_tank`);
  }
  //Create Copper Fluid Pipe
  {
    e.shaped("4x create:fluid_pipe", ["PRP", "HS ", "   "], {
      P: "#forge:plates/bronze",
      R: "thermal:cured_rubber",
      S: "#forge:tools/saw",
      H: "#forge:tools/hammer",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .damageIngredient("#forge:tools/crowbar", "2")
      .id(`${recipeId}create/fluid_pipe`);
  }
  //Create Copper Mechanical Pump
  {
    e.shaped("create:mechanical_pump", ["PCR", "HS ", "   "], {
      P: "create:fluid_pipe",
      C: "create:cogwheel",
      R: "thermal:cured_rubber",
      H: "#forge:tools/hammer",
      S: "#forge:tools/saw",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}create/mechanical_pump`);
  }
  //Create Belt
  {
    e.shaped("2x create:belt_connector", ["SW ", "RRR", "RRR"], {
      R: "thermal:cured_rubber",
      S: "#forge:tools/saw",
      W: "#forge:tools/wirecutter",
    })
      .damageIngredient("#forge:tools/saw", "1")
      .damageIngredient("#forge:tools/wirecutter", "1")
      .id(`${recipeId}create/mechanical_belt`);
  }
  //Fireproof Bricks
  {
    e.shaped("tfmg:fireproof_bricks", ["BRG", "RB ", "   "], {
      B: "tfmg:fireproof_brick",
      R: "#forge:plates/bronze",
      G: "create:super_glue",
    })
      .damageIngredient("create:super_glue", "1")
      .id(`${recipeId}tfmg/fireproof_bricks`);
  }
  //Blast Furnace Output
  {
    e.shaped("tfmg:blast_furnace_output", ["CBC", "RUR", "SVH"], {
      C: "#forge:ingots/cast_iron",
      B: "tfmg:fireproof_bricks",
      R: "#forge:plates/bronze",
      U: "create:empty_blaze_burner",
      S: "#forge:tools/saw",
      V: "thermal:redstone_servo",
      H: "#forge:tools/hammer",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}tfmg/blast_furnace_output`);
  }
  //Casting Spout
  {
    e.shaped("tfmg:casting_spout", ["COC", "SPH", " I "], {
      C: "#forge:ingots/cast_iron",
      O: "create:spout",
      S: "#forge:tools/saw",
      P: "create:precision_mechanism",
      H: "#forge:tools/hammer",
      I: "tfmg:cast_iron_pipe",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}tfmg/casting_spout`);
  }
  //Bucket by Iron
  {
    e.shaped("minecraft:bucket", ["PHP", " S ", "   "], {
      P: "#forge:plates/iron",
      H: "#forge:tools/hammer",
    })
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}minecraft/bucket_by_iron`);
  }
  //Bucket by Tin
  {
    e.shaped("minecraft:bucket", ["PHP", " S ", "   "], {
      P: "#forge:plates/tin",
      H: "#forge:tools/hammer",
    })
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}minecraft/bucket_by_tin`);
  }
  //Hose Pulley
  {
    e.shaped("create:hose_pulley", ["PCP", "BRB", "HIS"], {
      P: "#forge:plates/bronze",
      C: "create:copper_casing",
      I: "create:fluid_pipe",
      B: "thermal:cured_rubber",
      R: "#forge:rope",
      H: "#forge:tools/hammer",
      S: "#forge:tools/saw",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}create/hose_pulley`);
  }
  //Item Drain
  {
    e.shaped("create:item_drain", ["PIP", "FCF", "HBS"], {
      P: "#forge:plates/bronze",
      I: "minecraft:iron_bars",
      F: "create:fluid_pipe",
      C: "create:copper_casing",
      H: "#forge:tools/hammer",
      B: "minecraft:bucket",
      S: "#forge:tools/saw",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}create/item_drain`);
  }
  //Spout
  {
    e.shaped("create:spout", ["HTS", "RCR", "PBP"], {
      H: "#forge:tools/hammer",
      T: "create:fluid_tank",
      S: "#forge:tools/saw",
      R: "thermal:cured_rubber",
      C: "create:copper_casing",
      P: "#forge:plates/bronze",
      B: "minecraft:bucket",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}create/spouts`);
  }
  //Steam Engine
  {
    e.shaped("create:steam_engine", ["BSB", "MEM", "WTH"], {
      B: "#forge:plates/brass",
      S: "create:shaft",
      M: "tfmg:steel_mechanism",
      E: "kubejs:energized_steel_ingot",
      W: "#forge:tools/saw",
      T: "create:fluid_tank",
      H: "#forge:tools/hammer",
    })
      .damageIngredient("#forge:tools/saw", "8")
      .damageIngredient("#forge:tools/hammer", "8")
      .id(`${recipeId}create/steam_engine`);
  }
  //Fluiduct
  {
    e.shaped("4x thermal:fluid_duct", [" B ", "GMG", "SBH"], {
      B: "#forge:plates/bronze",
      M: "tfmg:steel_mechanism",
      G: "#forge:gears/lead",
      S: "#forge:tools/saw",
      H: "#forge:tools/hammer",
    })
      .damageIngredient("#forge:tools/saw", "8")
      .damageIngredient("#forge:tools/hammer", "8")
      .id(`${recipeId}themal/fluiduct`);
  }
  //Windowed Fluiduct
  {
    e.shaped("4x thermal:fluid_duct_windowed", [" B ", "GMG", "SBH"], {
      B: "#forge:plates/bronze",
      M: "tfmg:steel_mechanism",
      G: "#thermal:glass/hardened",
      S: "#forge:tools/saw",
      H: "#forge:tools/hammer",
    })
      .damageIngredient("#forge:tools/saw", "8")
      .damageIngredient("#forge:tools/hammer", "8")
      .id(`${recipeId}thermal/fluiduct_windowed`);
  }
  //C:CA Capacitor
  {
    e.shaped("2x createaddition:capacitor", ["CEC", "ZRZ", "WSH"], {
      C: "#forge:plates/copper",
      E: "create:electron_tube",
      Z: "#forge:plates/zinc",
      R: "thermal:rf_coil",
      W: "#forge:tools/saw",
      S: "thermal:redstone_servo",
      H: "#forge:tools/hammer",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}createaddition/capacitor`);
  }
  //Pressure Tube
  {
    e.shaped("4x pneumaticcraft:pressure_tube", ["WCS", "SIS", "SCH"], {
      W: "#forge:tools/saw",
      C: "#forge:ingots/compressed_iron",
      S: "#forge:plates/steel",
      I: "#forge:plates/invar",
      H: "#forge:tools/hammer",
    })
      .damageIngredient("#forge:tools/hammer", "2")
      .damageIngredient("#forge:tools/saw", "2")
      .id(`${recipeId}pneumaticcraft/pressure_tube`);
  }
  //Pressure Chamber Interface
  {
    e.shaped(
      "pneumaticcraft:pressure_chamber_interface",
      ["WPW", "HIG", "WEW"],
      {
        W: "pneumaticcraft:pressure_chamber_wall",
        P: "pneumaticcraft:omnidirectional_hopper",
        H: "#forge:tools/hammer",
        I: "#forge:ingots/compressed_iron",
        G: "create:super_glue",
        E: "#forge:gears/compressed_iron",
      }
    )
      .damageIngredient("#forge:tools/hammer", "2")
      .damageIngredient("#forge:tools/saw", "2")
      .id(`${recipeId}pneumaticcraft/pressure_chamber_interface`);
  }
  //Pressure Chamber Valve
  {
    e.shaped("pneumaticcraft:pressure_chamber_valve", ["WCW", "CHC", "WTW"], {
      W: "pneumaticcraft:pressure_chamber_wall",
      C: "#forge:ingots/compressed_iron",
      H: "#forge:tools/hammer",
      T: "pneumaticcraft:pressure_tube",
    })
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}pneumaticcraft/pressure_chamber_valve`);
  }
  //Hive Hopper
  {
    e.shaped("thermal:device_hive_extractor", ["WNW", "HES", "WGW"], {
      W: "kubejs:wooden_board",
      N: "minecraft:honeycomb",
      H: "#forge:tools/hammer",
      E: "minecraft:shears",
      S: "#forge:tools/saw",
      G: "#forge:gears/iron",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}thermal/hive_hopper`);
  }
  //Aquatic Entangler
  {
    e.shaped("thermal:device_fisher", ["WRW", "HES", "WGW"], {
      W: "kubejs:wooden_board",
      R: "thermal:redstone_servo",
      H: "#forge:tools/hammer",
      E: "#forge:fishing_rods",
      S: "#forge:tools/saw",
      G: "#forge:gears/copper",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}thermal/aquatic_entangler`);
  }
  //Batch Composter
  {
    e.shaped("thermal:device_composter", ["WRW", "HCS", "WGW"], {
      W: "kubejs:wooden_board",
      R: "thermal:redstone_servo",
      H: "#forge:tools/hammer",
      C: "minecraft:composter",
      S: "#forge:tools/saw",
      G: "#forge:gears/iron",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}thermal/batch_composter`);
  }
  //Phyto-Soil Infuser
  {
    e.shaped("thermal:device_soil_infuser", ["WRW", "HPS", "WGW"], {
      W: "kubejs:wooden_board",
      R: "thermal:rf_coil",
      H: "#forge:tools/hammer",
      P: "thermal:phytogro",
      S: "#forge:tools/saw",
      G: "#forge:gears/lumium",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}thermal/phyto_soil_infuser`);
  }
  //Industrial Leather
  {
    e.shaped("kubejs:industrial_leather", ["SLW", "TLT", " L "], {
      S: "#forge:tools/saw",
      L: "#forge:leather",
      W: "#forge:tools/wirecutter",
      T: "#forge:string",
    })
      .damageIngredient("#forge:tools/saw", "1")
      .damageIngredient("#forge:tools/wirecutter", "1")
      .id(`${recipeId}techlab/industrial_leather`);
  }
  //Hopper
  {
    e.shaped("minecraft:hopper", ["P P", "PCP", "HPS"], {
      P: "#forge:plates/iron",
      C: "#forge:chests/wooden",
      H: "#forge:tools/hammer",
      S: "#forge:tools/saw",
    })
      .damageIngredient("#forge:tools/saw", "2")
      .damageIngredient("#forge:tools/hammer", "2")
      .id(`${recipeId}minecraft/hopper`);
  }
});
