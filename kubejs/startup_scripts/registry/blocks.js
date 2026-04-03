StartupEvents.registry("block", (e) => {
  let pickaxe_minerable = [
    { block: "mortar", color: 45 },
    { block: "fireproof_bricks", color: 35 },
  ];
  let casing = [
    { block: "constantan_coil", color: 37 },
    { block: "kanthal_coil", color: 45 },
    { block: "heatproof_casing", color: 61 },
    { block: "aluminum_casing", color: 23 },
    { block: "bronze_casing", color: 15 },
    { block: "steel_casing", color: 11 },
    { block: "chemical_inert_casing", color: 21 },
    { block: "cleanroom_casing", color: 14 },
    { block: "invar_frame", color: 61 },
    { block: "bronze_machine_casing", color: 15 },
    { block: "basic_machine_casing", color: 9 },
    { block: "advanced_machine_casing", color: 9 },
    { block: "sophisticated_machine_casing", color: 9 },
  ];
  let scaffolding = [
    { block: "steel", color: 11 }
  ];
  let beeNest = [
    { block: "forest", color: 40 },
    { block: "boreal", color: 26 },
    { block: "chorus", color: 47 },
    { block: "warm", color: 54 },
  ];

  pickaxe_minerable.forEach((registry) => {
    e.create(`techpack:${registry.block}`)
      .requiresTool(true)
      .tagBoth("mineable/pickaxe")
      .tagBoth("minecraft:needs_iron_tool")
      .mapColor(registry.color);
  });
  casing.forEach((registry) => {
    e.create(`techpack:${registry.block}`)
      .soundType("metal")
      .requiresTool(true)
      .tagBoth("mineable/pickaxe")
      .tagBoth("minecraft:needs_iron_tool")
      .mapColor(registry.color);
  });
  beeNest.forEach((registry) => {
    e.create(`techpack:wild_${registry.block}_nest`)
      .soundType("wood")
      .tagBoth("techpack:bee_nests")
      .mapColor(registry.color);
  });
  scaffolding.forEach((registry) => {
    e.create(`techpack:${registry.block}_scaffolding`)
      .soundType("metal")
      .requiresTool(true)
      .tagBoth("mineable/pickaxe")
      .tagBoth("minecraft:needs_iron_tool")
      .suffocating(false)
      .tagBoth("minecraft:climbable")
      .renderType("cutout")
      .fullBlock(false)
      .notSolid()
      .mapColor(registry.color);
  });

  e.create("techpack:stick_bundle")
    .requiresTool(true)
    .soundType("wood")
    .tagBoth("minecraft:mineable/axe")
    .mapColor(13);

  e.create("techpack:fireclay")
    .soundType("mud")
    .tagBoth("minecraft:mineable/shovel")
    .mapColor(34);

  e.create("techpack:obsidian_glass")
    .soundType("glass")
    .hardness(10.0)
    .notSolid()
    .mapColor(47)
    .opaque(true)
    .defaultCutout()
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .renderType("translucent")
    .suffocating(false)
    .noValidSpawns(true)
    .resistance(1200)
    .tagBoth("c:glass_blocks")

  e.create("techpack:strange_dirt")
    .requiresTool(true)
    .soundType("mud")
    .tagBoth("minecraft:mineable/shovel")
    .hardness(0.5)
    .mapColor(34);

  e.create("techpack:silite")
    .soundType("basalt")
    .mapColor(59)
    .hardness(3.0)
    .tagBoth("minecraft:mineable/pickaxe")
    .requiresTool(true)

  e.create("techpack:warden_totem")
    .notSolid()
    .fullBlock(false)
    .renderType("cutout")
    //.placementState((event) => event.set(BlockProperties.HORIZONTAL_FACING, event.clickedFace),)
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_diamond")
    .mapColor(31);
});
