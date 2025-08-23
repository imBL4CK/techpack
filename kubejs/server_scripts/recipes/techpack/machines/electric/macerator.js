ServerEvents.recipes((e) => {
  //Raw to crushed tin
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("#c:raw_materials/tin")
    .produceItem("create:crushed_raw_tin")
    .priority(1)
    .jei();

  //Raw to crushed silver
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("#c:raw_materials/silver")
    .produceItem("create:crushed_raw_silver")
    .priority(1)
    .jei();

  //Raw to crushed nickel
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("#c:raw_materials/nickel")
    .produceItem("create:crushed_raw_nickel")
    .priority(1)
    .jei();

  //Raw to crushed copper
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("#c:raw_materials/copper")
    .produceItem("create:crushed_raw_copper")
    .priority(1)
    .jei();

  //Raw to crushed iron
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("#c:raw_materials/iron")
    .produceItem("create:crushed_raw_iron")
    .priority(1)
    .jei();

  //Raw to crushed gold
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("#c:raw_materials/gold")
    .produceItem("create:crushed_raw_gold")
    .priority(1)
    .jei();

  //Raw to crushed zinc
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("#c:raw_materials/zinc")
    .produceItem("create:crushed_raw_zinc")
    .priority(1)
    .jei();

  //Sulfur crystal tso dusts
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("techpack:sulfur_crystal")
    .produceItem("4x techpack:sulfur_dust")
    .priority(2)
    .jei();

  //Sulfur cluster to dust
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("techpack:sulfur_cluster")
    .produceItem("4x techpack:sulfur_dust")
    .priority(2)
    .jei();

  //Cinnabar block to cinnabar
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("techpack:cinnabar_block")
    .produceItem("4x techpack:cinnabar")
    .priority(3)
    .jei();

  //Cinnabar cluster to cinnabar
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("techpack:cinnabar_cluster")
    .produceItem("4x techpack:cinnabar")
    .priority(3)
    .jei();

  //Fireclay Balls
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("techpack:fireclay")
    .produceItem("techpack:fireclay_ball")
    .priority(4)
    .jei();

  //Sifted sand
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("minecraft:sand")
    .produceItem("4x techpack:sifted_sand")
    .priority(4)
    .jei();

  //Calcium dust by seashells
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("nomansland:seashells")
    .produceItem("techpack:calcium_dust")
    .priority(5)
    .jei();

  //Calcium dust by calcite
  e.recipes.custommachinery
    .custom_machine("techpack:basic_macerator", 200)
    .requireEnergy(2000)
    .requireItem("minecraft:calcite")
    .produceItem("techpack:calcium_dust")
    .priority(5)
    .jei();
});
