StartupEvents.registry("block", (e) => {
    let stones = [
      "klin_bricks"
    ];
    let casing = [
      "basic_machine_casing",
      "advanced_machine_casing",
      "bronze_casing",
      "steel_casing",
      "heatproof_casing",
      "frostproof_casing",
      "chemically_resistant_casing",
      "advanced_thermal_alloy_casing",
      "constantan_coil",
      "shadow_bronze_coil",
    ];
    casing.forEach((registry) => {
      e.create(registry)
      .material("metal")
      .soundType("metal")
      .requiresTool(true)
      .tagBlock("mineable/pickaxe") 
      .tagBlock("minecraft:needs_iron_tool")
    });
    stones.forEach((registry) => {
      e.create(registry)
      .soundType("stone")
      .requiresTool(true)
      .tagBlock("mineable/pickaxe")
    });
  });
  