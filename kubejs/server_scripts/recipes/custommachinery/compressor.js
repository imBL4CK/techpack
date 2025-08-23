ServerEvents.recipes((e) => {
  //Mixed Metal Ingot
  e.recipes.custommachinery
    .custom_machine("custommachinery:industrialrevival/compressor", 200)
    .requireEnergy(1000)
    .requireItemTag("#forge:ingots/tin")
    .requireItemTag("#forge:ingots/bronze")
    .requireItemTag("#forge:ingots/steel")
    .produceItem("kubejs:mixed_metal_ingot");

  //Advanced Thermal Alloy plating
  e.recipes.custommachinery
    .custom_machine("custommachinery:industrialrevival/compressor", 200)
    .requireEnergy(1000)
    .requireItemTag("#forge:plates/stainless_steel")
    .requireItemTag("#forge:plates/shadow_bronze")
    .requireItemTag("#forge:plates/bronze")
    .produceItem("kubejs:advanced_thermal_alloy_plating");

  //Snowballs to ice
  e.recipes.custommachinery
    .custom_machine("custommachinery:industrialrevival/compressor", 200)
    .requireEnergy(500)
    .requireItem(Item.of("minecraft:snowball", 4))
    .produceItem("minecraft:ice");

  //Biomass to Biomass Pellet
  e.recipes.custommachinery
    .custom_machine("custommachinery:industrialrevival/compressor", 200)
    .requireEnergy(2000)
    .requireItem("createaddition:biomass")
    .produceItem("createaddition:biomass_pellet");

  //Sands to Sandstone
  e.recipes.custommachinery
    .custom_machine("custommachinery:industrialrevival/compressor", 200)
    .requireEnergy(1000)
    .requireItem(Item.of("minecraft:sand", 4))
    .produceItem("minecraft:sandstone");
});
