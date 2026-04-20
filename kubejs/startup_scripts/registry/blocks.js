//priority: 98
StartupEvents.registry("block", (e) => {
  e.create("techpack:stick_bundle").requiresTool(true).soundType("wood").tagBoth("minecraft:mineable/axe").tagBoth("c:storage_blocks").tagBoth("c:storage_blocks/stick").mapColor(13);
  e.create("techpack:mortar").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(45);
  e.create("techpack:fireclay").soundType("mud").tagBoth("minecraft:mineable/shovel").mapColor(34);
  e.create("techpack:fireproof_bricks").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(23);

  //Metal-like blocks
  e.create("techpack:bronze_casing").soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(15);
  e.create("techpack:steel_casing").soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(11);
  e.create("techpack:steel_scaffolding").soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").suffocating(false).tagBoth("minecraft:climbable").renderType("cutout").fullBlock(false).notSolid().mapColor(11);
  e.create("techpack:heatproof_casing").soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(61);
  e.create("techpack:cleanroom_casing").soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(14);
  e.create("techpack:aluminum_casing").soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(23);
  e.create("techpack:chemical_inert_casing").soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(21);
  e.create("techpack:invar_frame").soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(61);
  e.create("techpack:bronze_machine_casing").soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(15);
  e.create("techpack:basic_machine_casing").soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(9);
  e.create("techpack:advanced_machine_casing").soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(9);
  e.create("techpack:sophisticated_machine_casing").soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(9);

  //Coils
  e.create("techpack:constantan_coil").soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(37);
  e.create("techpack:kanthal_coil").soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(45);

  //Nests
  e.create("techpack:wild_forest_nest").soundType("wood").tagBoth("techpack:bee_nests").mapColor(40);
  e.create("techpack:wild_boreal_nest").soundType("wood").tagBoth("techpack:bee_nests").mapColor(26);
  e.create("techpack:wild_warm_nest").soundType("wood").tagBoth("techpack:bee_nests").mapColor(54);
  e.create("techpack:wild_chorus_nest").soundType("wood").tagBoth("techpack:bee_nests").mapColor(47);

  //Misc
  e.create("techpack:reinforced_concrete").hardness(3.0).mapColor(22).requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_wooden_tool").tagBoth("c:concretes").resistance(600)
  e.create("techpack:reinforced_concrete_bricks").hardness(3.0).mapColor(22).requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_wooden_tool").tagBoth("c:concretes").resistance(600)

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
