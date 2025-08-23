ServerEvents.recipes((e) => {
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
  nodes.forEach((spirit) => {
    e.recipes.custommachinery.custom_machine("custommachinery:industrialrevival/basic_spirit_catalyzer", 3600)
    .requireEnergy(25000)
    .requireBlock(`kubejs:${spirit}_spirit_node`, true, 0, 1, 0, 0, 1, 0)
    .damageItemTag("techpack:wands", 1)
    .produceItem(`malum:${spirit}_spirit`).chance(0.5)
  })
});
