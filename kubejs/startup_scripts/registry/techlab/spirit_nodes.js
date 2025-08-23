StartupEvents.registry("block", (e) => {
  
  let nodes = [
    "arcane",
    "eldritch",
    "wicked",
    "sacred",
    "aerial",
    "earthen",
    "aqueous",
    "infernal",
  ];
  //Arcane Spirit Node
  nodes.forEach((spirit) => {
    e.create(`${spirit}_spirit_node`)
      .model("kubejs:block/spirit_nodes/" + spirit)
      .renderType("translucent")
      .soundType("glass")
      .transparent(true)
      .hardness(0)
      .notSolid()
      .noDrops()
      .noCollision()
      .box(0.25, 0.25, 0.25, 0.75, 0.75, 0.75, false);
  });
});
