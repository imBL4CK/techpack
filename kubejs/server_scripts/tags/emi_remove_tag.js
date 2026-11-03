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
      ],
    },
  ];
  entries.forEach((entry) => {
    e.add(entry.tag, entry.item);
  });
});
