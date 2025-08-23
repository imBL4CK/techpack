ServerEvents.tags("block", (e) => {
  const ADDcustomtag = [
    //Techpack Panel blocks
    {
      tag: "techpack:panel_blocks",
      block: [
        "kubejs:panel_block",
        "kubejs:squared_panel_block",
        "kubejs:tiled_panel_block",
        "kubejs:foiled_panel_block",
        "kubejs:chiseled_foiled_panel_block",
      ],
    },
  ];
  const REMOVEcustomtag = [];

  ADDcustomtag.forEach((custom) => {
    e.add(custom.tag, custom.block);
  });
  REMOVEcustomtag.forEach((custom) => {
    e.remove(custom.tag, custom.block);
  });
});
