ServerEvents.recipes((e) => {
  //Bronze
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_alloy_foundry", 200)
      .requireEnergy(2000)
      .requireItem("3x #c:ingots/copper")
      .requireItem("#c:ingots/tin")
      .produceItem("4x techpack:bronze_ingot");
  }
  //Wrought Iron
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_alloy_foundry", 200)
      .requireEnergy(2000)
      .requireItem("#c:ingots/iron")
      .requireItem("techpack:sifted_sand")
      .produceItem("2x techpack:wrought_iron_ingot");
  }
  //Brass
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_alloy_foundry", 200)
      .requireEnergy(2000)
      .requireItem("#c:ingots/copper")
      .requireItem("#c:ingots/zinc")
      .produceItem("2x create:brass_ingot");
  }
  //Electrum
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_alloy_foundry", 200)
      .requireEnergy(2000)
      .requireItem("#c:ingots/gold")
      .requireItem("#c:ingots/silver")
      .produceItem("2x techpack:electrum_ingot");
  }
  //Invar
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_alloy_foundry", 200)
      .requireEnergy(2000)
      .requireItem("2x #c:ingots/iron")
      .requireItem("#c:ingots/nickel")
      .produceItem("3x techpack:invar_ingot");
  }
  //Redstone alloy
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_alloy_foundry", 200)
      .requireEnergy(2000)
      .requireItem("minecraft:redstone")
      .requireItem("#c:silicon")
      .produceItem("enderio:redstone_alloy_ingot");
  }
  //Copper alloy ingot
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_alloy_foundry", 200)
      .requireEnergy(2000)
      .requireItem("#c:ingots/copper")
      .requireItem("#c:silicon")
      .produceItem("enderio:copper_alloy_ingot");
  }
  //Constantan
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_alloy_foundry", 200)
      .requireEnergy(2000)
      .requireItem("#c:ingots/copper")
      .requireItem("#c:ingots/nickel")
      .produceItem("2x techpack:constantan_ingot");
  }
  //Silicon
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_alloy_foundry", 200)
      .requireEnergy(2000)
      .requireItem("#c:dusts/quartz")
      .requireItem("techpack:sifted_sand")
      .produceItem("2x ae2:silicon");
  }
});