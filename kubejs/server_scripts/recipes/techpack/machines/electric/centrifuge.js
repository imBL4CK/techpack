ServerEvents.recipes((e) => {
  let combs = [
    {
      comb: "sweet",
      subProduct_1: "minecraft:sugar",
      subProduct_2: "minecraft:sugar"
    },
    {
      comb: "sticky",
      subProduct_1: "nomansland:resin",
      subProduct_2: "nomansland:resin"
    }
  ]
  combs.forEach((recipe) => {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_centrifuge", 200)
      .requireEnergy(500)
      .requireItem(`techpack:${recipe.comb}_comb`)
      .produceItem("minecraft:honeycomb")
      .produceItem(recipe.subProduct_1).chance(0.5)
      .produceItem(recipe.subProduct_2).chance(0.5)
      .priority(1)
      .jei();
  })
  //Centrifuge bronze dust
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_centrifuge", 200)
      .requireEnergy(500)
      .requireItem("techpack:bronze_dust")
      .produceItem("3x techpack:copper_dust").chance(0.5)
      .produceItem("techpack:tin_dust").chance(0.5)
      .priority(2)
      .jei();
  }
  //Constantan constantan dust
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_centrifuge", 200)
      .requireEnergy(500)
      .requireItem("techpack:constantan_dust")
      .produceItem("techpack:copper_dust").chance(0.5)
      .produceItem("techpack:nickel_dust").chance(0.5)
      .priority(2)
      .jei();
  }
  //Invar invar dust
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_centrifuge", 200)
      .requireEnergy(500)
      .requireItem("techpack:invar_dust")
      .produceItem("2x techpack:iron_dust").chance(0.5)
      .produceItem("techpack:nickel_dust").chance(0.5)
      .priority(2)
      .jei();
  }
  //Centrifuge electrum dust
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_centrifuge", 200)
      .requireEnergy(500)
      .requireItem("techpack:electrum_dust")
      .produceItem("techpack:gold_dust").chance(0.5)
      .produceItem("techpack:silver_dust").chance(0.5)
      .priority(2)
      .jei();
  }
});
