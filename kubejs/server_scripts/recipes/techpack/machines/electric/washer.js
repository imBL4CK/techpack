ServerEvents.recipes((e) => {
  let crushed_raw = [
    "copper",
    "iron",
    "gold",
    "tin",
    "nickel",
    "silver",
    "lead",
    "platinum",
  ];

  crushed_raw.forEach((recipe) => {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_washer", 200)
      .requireEnergy(1000)
      .requireFluid(Fluid.of("minecraft:water", 200))
      .requireItem(`create:crushed_raw_${recipe}`)
      .produceItem(`techpack:${recipe}_dust`)
      .produceItem(`techpack:${recipe}_dust`).chance(0.5)
      .jei()
      .priority(1);
  });
  //Washed Leather
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_washer", 200)
      .requireEnergy(1000)
      .requireFluid(Fluid.of("minecraft:water", 200))
      .requireItem("minecraft:leather")
      .produceItem("techpack:washed_leather")
      .jei()
      .priority(2);
  }
  //Tanned Leather
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_washer", 200)
      .requireEnergy(1000)
      .requireFluid(Fluid.of("minecraft:water", 200))
      .requireItem("techpack:sealed_leather")
      .produceItem("techpack:tanned_leather")
      .jei()
      .priority(3);
  }
  //Polished Wafer
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_washer", 200)
      .requireEnergy(1000)
      .requireFluid(Fluid.of("pneumaticcraft:etching_acid", 200))
      .requireItem("techpack:silicon_wafer")
      .produceItem("techpack:polished_wafer")
      .jei()
      .priority(4);
  }
  //Experience into xp juice
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_washer", 200)
      .requireEnergy(1000)
      .requireFluid("200x #c:experience")
      .produceFluid(Fluid.of("enderio:fluid_xp_juice_still", 200))
      .jei()
      .priority(5);
  }
  //Dough
  {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_washer", 200)
      .requireEnergy(500)
      .requireFluid(Fluid.of("minecraft:water", 200))
      .requireItem("#c:flours/wheat")
      .produceItem("farmersdelight:wheat_dough")
  }
});
