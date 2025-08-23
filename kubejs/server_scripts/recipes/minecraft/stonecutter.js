ServerEvents.recipes((event) => {
  let panelPallete = [
    "techpack:panel_block",
    "techpack:squared_panel_block",
    "techpack:tiled_panel_block",
    "techpack:floor_panel_block"
  ];
  let ChiseledPanelPallete = [
    "techpack:foiled_panel_block",
    "techpack:chiseled_foiled_panel_block",
  ];
  panelPallete.forEach((panel) => {
    event.stonecutting(panel, panelPallete);
  });
  ChiseledPanelPallete.forEach((panel) => {
    event.stonecutting(panel, ChiseledPanelPallete);
  })
});
