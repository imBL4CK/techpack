StartupEvents.registry("block", (e) => {
  let stoneLike = [
    { block: "panel_block", color: 9 },
    { block: "squared_panel_block", color: 9 },
    { block: "tiled_panel_block", color: 9 },
    { block: "floor_panel_block", color: 51 },
    { block: "foiled_panel_block", color: 47 },
    { block: "chiseled_foiled_panel_block", color: 47 },
    { block: "white_laboratory_block_panel", color: 14 },
    { block: "white_laboratory_block_tiles", color: 14 },
    { block: "white_laboratory_block_squared_tiles", color: 14 },
    { block: "white_laboratory_block_zig_zag_tiles", color: 14 },
    { block: "gray_laboratory_block_panel", color: 22 },
    { block: "gray_laboratory_block_tiles", color: 22 },
    { block: "gray_laboratory_block_squared_tiles", color: 22 },
    { block: "gray_laboratory_block_zig_zag_tiles", color: 22 },
  ];
  let wooodLike = [
    { block: "polished_oak_planks", color: 13 },
    { block: "polished_spruce_planks", color: 34 },
    { block: "polished_birch_planks", color: 34 },
    { block: "polished_jungle_planks", color: 10 },
    { block: "polished_acacia_planks", color: 15 },
    { block: "polished_dark_oak_planks", color: 26 },
    { block: "polished_mangrove_planks", color: 28 },
    { block: "polished_crimson_planks", color: 53 },
    { block: "polished_warped_planks", color: 56 },
    { block: "polished_cherry_planks", color: 36 },
  ];
  let glassLike = ["classic_glass"];
  stoneLike.forEach((registry) => {
    e.create(`techpack:${registry.block}`)
      .soundType("stone")
      .requiresTool(true)
      .texture(`techpack:block/pallete/${registry.block}`)
      .tagBoth("mineable/pickaxe")
      .tagBoth("techlab:pallete_blocks")
      .mapColor(registry.color);
  });
  wooodLike.forEach((registry) => {
    e.create(`techpack:${registry.block}`)
      .soundType("wood")
      .tagBoth("mineable/axe")
      .texture(`techpack:block/pallete/${registry.block}`)
      .tagBoth("techlab:pallete_blocks")
      .mapColor(registry.color);
  });
  glassLike.forEach((registry) => {
    e.create(`techpack:${registry}`)
      .soundType("glass")
      .hardness(0.3)
      .notSolid()
      .transparent(true)
      .defaultCutout()
      .suffocating(false)
      .noValidSpawns(true)
      .texture(`techpack:block/pallete/${registry}`)
      .tagBoth("c:glass_blocks")
      .tagBoth("techlab:pallete_blocks");
  });
});
