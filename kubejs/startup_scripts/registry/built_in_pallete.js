StartupEvents.registry("block", (e) => {
    let stoneLike = [
      "panel_block",
      "squared_panel_block",
      "tiled_panel_block",
      "floor_panel_block",
      "foiled_panel_block",
      "chiseled_foiled_panel_block",
    ];
    let glassLike = [
      "classic_glass"
    ];
    stoneLike.forEach((registry) => {
      e.create(`techpack:${registry}`)
      .soundType("stone")
      .requiresTool(true)
      .texture(`techpack:block/pallete/${registry}`)
      .tagBoth("minecraft:needs_stone_tool")
      .tagBoth("techlab:pallete_blocks")
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
      .tagBoth("techlab:pallete_blocks")
    });
  });
  