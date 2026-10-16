StartupEvents.registry("block", (e) => {

  //Misc
  e.create("techpack:stick_bundle")
    .requiresTool(true)
    .soundType("wood")
    .tagBoth("minecraft:mineable/axe")
    .tagBoth("c:storage_blocks")
    .tagBoth("c:storage_blocks/stick")
    .mapColor(13);

  e.create("techpack:fireclay")
    .soundType("mud")
    .tagBoth("minecraft:mineable/shovel")
    .mapColor(34);

  e.create("techpack:cinder_bricks")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(23);

  //Metal-like blocks
  e.create("techpack:bronze_casing")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(15);

  e.create("techpack:steel_casing")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(11);

  e.create("techpack:steel_scaffolding")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .suffocating(false)
    .fullBlock(false)
    .notSolid()
    .mapColor(11);

  e.create("techpack:steel_scaffolding_stairs", "cardinal")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .suffocating(false)
    .box(0, 0.3125, 0, 1, 0.5, 0.5, false)
    .box(0, 0.8125, 0.5, 1, 1, 1, false)
    .notSolid()
    .mapColor(11);

  e.create("techpack:steel_scaffolding_support", "cardinal")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .suffocating(false)
    .fullBlock(false)
    .box(0, 0, 0.8125, 1, 0.8125, 1, false)
    .box(0, 0.8125, 0, 1, 1, 1, false)
    .notSolid()
    .mapColor(11);

  e.create("techpack:steel_scaffolding_catwalk")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .suffocating(false)
    .box(0, 0.8125, 0, 1, 1.0, 1, false)
    .notSolid()
    .mapColor(11);

  e.create("techpack:heatproof_casing")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(61);

  e.create("techpack:cleanroom_casing")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(14);

  e.create("techpack:chemical_inert_casing")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(21);

  e.create("techpack:thermal_evaporation_casing")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(15);

  e.create("techpack:invar_frame")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(61);

  e.create("techpack:bronze_machine_casing")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(15);

  e.create("techpack:basic_machine_casing")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(9);

  e.create("techpack:advanced_machine_casing")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(9);

  e.create("techpack:sophisticated_machine_casing")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(9);

  //Coils
  e.create("techpack:constantan_coil_block")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .tagBoth("techpack:coil_blocks")
    .mapColor(37);

  e.create("techpack:kanthal_coil_block")
    .soundType("metal")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .tagBoth("techpack:coil_blocks")
    .mapColor(45);

  //Misc
  e.create("techpack:reinforced_concrete")
    .hardness(4.0)
    .mapColor(22)
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_wooden_tool")
    .tagBoth("c:concretes")
    .resistance(600);

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
    .tagBoth("c:glass_blocks");

  e.create("techpack:strange_dirt")
    .requiresTool(true)
    .soundType("mud")
    .tagBoth("minecraft:mineable/shovel")
    .hardness(0.5)
    .mapColor(34);

  e.create("techpack:silite")
    .soundType("basalt")
    .mapColor(60)
    .hardness(3.0)
    .tagBoth("minecraft:mineable/pickaxe")
    .requiresTool(true);

  e.create("techpack:bauxite")
    .soundType("basalt")
    .mapColor(59)
    .hardness(3.0)
    .tagBoth("minecraft:mineable/pickaxe")
    .requiresTool(true);

  e.create("techpack:warden_totem", "cardinal")
    .notSolid()
    .fullBlock(false)
    .renderType("cutout")
    .requiresTool(true)
    .box(0, 0, 0.2, 1, 1, 0.8, false)
    .mapColor(31);
    
  //Sulfur
  e.create(`techpack:budding_sulfur`)
    .soundType("amethyst")
    .randomTick((tick) => global.buddingSulfur(tick))
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .noDrops()
    .mapColor(30);
    
  e.create("techpack:sulfur_block")
    .tagBoth("c:storage_blocks/sulfur")
    .soundType("amethyst")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(30);
  /*
  e.create("techpack:sulfur_cluster")
    .box(0.25, 0.25, 0.25, 0.75, 0.75, 0.75, false)
    .soundType("amethyst")
    .transparent(true)
    .notSolid()
    .fullBlock(false)
    .property(BlockProperties.FACING)
    .renderType("cutout")
    .placementState((event) => event.set(BlockProperties.FACING, event.clickedFace))
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(30);
  */
  //Cinnabar
  e.create(`techpack:budding_cinnabar`)
    .soundType("amethyst")
    .randomTick((tick) => global.buddingCinnabar(tick))
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .noDrops()
    .mapColor(52);

  e.create("techpack:cinnabar_block")
    .tagBoth("c:storage_blocks/cinnabar")
    .soundType("amethyst")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(52);
  /*
  e.create("techpack:small_cinnabar_bud")
    .box(0.25, 0.25, 0.25, 0.75, 0.75, 0.75, false)
    .soundType("amethyst")
    .transparent(true)
    .notSolid()
    .fullBlock(false)
    .property(BlockProperties.FACING)
    .renderType("cutout")
    .placementState((event) => event.set(BlockProperties.FACING, event.clickedFace))
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(52);

  e.create("techpack:medium_cinnabar_bud")
    .box(0.25, 0.25, 0.25, 0.75, 0.75, 0.75, false)
    .soundType("amethyst")
    .transparent(true)
    .notSolid()
    .fullBlock(false)
    .property(BlockProperties.FACING)
    .renderType("cutout")
    .placementState((event) => event.set(BlockProperties.FACING, event.clickedFace))
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(52);

  e.create("techpack:large_cinnabar_bud")
    .box(0.25, 0.25, 0.25, 0.75, 0.75, 0.75, false)
    .soundType("amethyst")
    .transparent(true)
    .notSolid()
    .fullBlock(false)
    .property(BlockProperties.FACING)
    .renderType("cutout")
    .placementState((event) => event.set(BlockProperties.FACING, event.clickedFace))
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(52);

  e.create("techpack:cinnabar_cluster")
    .box(0.25, 0.25, 0.25, 0.75, 0.75, 0.75, false)
    .soundType("amethyst")
    .transparent(true)
    .notSolid()
    .fullBlock(false)
    .property(BlockProperties.FACING)
    .renderType("cutout")
    .placementState((event) => event.set(BlockProperties.FACING, event.clickedFace))
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(52);
    */
  //Strange Crystal
  e.create(`techpack:budding_strange_crystal`)
    .soundType("amethyst")
    .randomTick((tick) => global.buddingStrangeCrystal(tick))
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(2);

  e.create("techpack:strange_crystal_block")
    .tagBoth("c:storage_blocks/strange_crystal")
    .soundType("amethyst")
    .requiresTool(true)
    .tagBoth("mineable/pickaxe")
    .tagBoth("minecraft:needs_iron_tool")
    .mapColor(5);
});
