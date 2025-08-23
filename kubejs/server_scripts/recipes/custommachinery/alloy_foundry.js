ServerEvents.recipes((e) => {
  //Bronze Ingot
  {
    e.recipes.custommachinery.custom_machine("custommachinery:industrialrevival/alloy_foundry", 300)
      .requireEnergy(4000)
      .requireItemTag("#forge:ingots/copper", 3)
      .requireItemTag("#forge:ingots/tin", 1)
      .produceItem("4x #forge:ingots/bronze");
  }
  //Bio Plastic Mesh
  {
    e.recipes.custommachinery.custom_machine("custommachinery:industrialrevival/alloy_foundry", 300)
      .requireEnergy(2000)
      .requireItem(Item.of("kubejs:bio_plastic", 4))
      .produceItem("kubejs:bio_plastic_mesh");
  }
});
