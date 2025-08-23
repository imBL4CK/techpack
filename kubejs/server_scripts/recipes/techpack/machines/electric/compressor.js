ServerEvents.recipes((e) => {
  //Snowballs to ice
  e.recipes.custommachinery
    .custom_machine("techpack:basic_compressor", 200)
    .requireEnergy(500)
    .requireItem(Item.of("minecraft:snowball", 4))
    .produceItem("minecraft:ice");

  //Biomass to Biomass Pellet
  e.recipes.custommachinery
    .custom_machine("techpack:basic_compressor", 200)
    .requireEnergy(2000)
    .requireItem("createaddition:biomass")
    .produceItem("createaddition:biomass_pellet");

  //Sands to Sandstone
  e.recipes.custommachinery
    .custom_machine("techpack:basic_compressor", 200)
    .requireEnergy(2000)
    .requireItem(Item.of("minecraft:sand", 4))
    .produceItem("minecraft:sandstone");

  //Slag to mica
  e.recipes.custommachinery
    .custom_machine("techpack:basic_compressor", 200)
    .requireEnergy(500)
    .requireItem(Item.of("techpack:slag", 8))
    .produceItem("techpack:mica").chance(0.5);
});
