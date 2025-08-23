StartupEvents.registry("block", (e) => {
    let stoneLike = [
      "panel_block",
      "squared_panel_block",
      "tiled_panel_block",
      "floor_panel_block",
      "foiled_panel_block",
      "chiseled_foiled_panel_block",
    ];
    stoneLike.forEach((registry) => {
      e.create(registry)
      .soundType("stone")
      .requiresTool(true)
      .tagBlock("minecraft:needs_stone_tool")
      .tagBlock("techlab:pallete_blocks")
    });
  });
  