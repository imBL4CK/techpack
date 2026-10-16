ServerEvents.tags("item", (e) => {
  const entries = [
    //Emi remove Stacks
    {
      tag: "c:hidden_from_recipe_viewers",
      item: [
        "custommachinery:box_creator",
        "custommachinery:machine_creator",
        "custommachinery:structure_creator",
        "modular_machinery_reborn:structure_creator",
        "pneumaticcraft:transistor",
        "#techpack:fast_remove",
        "techpack:incomplete_makeshift_mechanism",
        "techpack:incomplete_electron_tube",
        "techpack:incomplete_steam_engine",
        "techpack:incomplete_animated_parts"
      ],
    },
  ];
  entries.forEach((entry) => {
    e.add(entry.tag, entry.item);
  });
});
