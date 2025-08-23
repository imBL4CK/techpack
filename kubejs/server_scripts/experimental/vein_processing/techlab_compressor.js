let enabled = false;

if (enabled === true) {
  ServerEvents.recipes((e) => {
    let materials = [
      "iron",
      "copper",
      "gold",
      "tin",
      "lead",
      "silver",
      "nickel",
      "zinc",
      "lithium",
      "cobalt",
    ];
    //Shard to Clump
    materials.forEach((Cmineral) => {
      e.recipes.custommachinery
        .custom_machine("custommachinery:industrialrevival/compressor", 200)
        .requireEnergyPerTick(5)
        .requireItem(Item.of("kubejs:" + Cmineral + "_shard", 3))
        .produceItem(Item.of("kubejs:" + Cmineral + "_clump"));
    });
  });
} else {
}
