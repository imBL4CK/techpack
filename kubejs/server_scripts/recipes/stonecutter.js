ServerEvents.recipes((e) => {
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
  let WhiteLaboratoryBlock = [
    "techpack:white_laboratory_block_panel",
    "techpack:white_laboratory_block_tiles",
    "techpack:white_laboratory_block_squared_tiles",
    "techpack:white_laboratory_block_zig_zag_tiles"
  ];
  let GrayLaboratoryBlock = [
    "techpack:gray_laboratory_block_panel",
    "techpack:gray_laboratory_block_tiles",
    "techpack:gray_laboratory_block_squared_tiles",
    "techpack:gray_laboratory_block_zig_zag_tiles"
  ];
  panelPallete.forEach((input) => {
    e.stonecutting(input, panelPallete);
  });
  ChiseledPanelPallete.forEach((input) => {
    e.stonecutting(input, ChiseledPanelPallete);
  })
  WhiteLaboratoryBlock.forEach((input) => {
    e.stonecutting(input, WhiteLaboratoryBlock);
  });
  GrayLaboratoryBlock.forEach((input) => {
    e.stonecutting(input, GrayLaboratoryBlock);
  });
});
