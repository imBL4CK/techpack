ServerEvents.recipes((e) => {
  let materials = [
    "copper",
    "iron",
    "gold",
    "tin",
    "silver",
    "nickel",
    "lead",
    "platinum",

    "bronze",
    "steel",
    "silver",
    "nickel",
    "invar",
    "constantan"
  ];
  materials.forEach((craft) => {
    e.recipes.custommachinery
      .custom_machine("techpack:basic_metal_former", 300)
      .requireEnergy(2000)
      .requireItem(`#c:ingots/${craft}`)
      .produceItem(`techpack:${craft}_plate`)
      .jei()
      .priority(2);
    e.recipes.custommachinery
      .custom_machine("techpack:basic_metal_former", 300)
      .requireEnergy(2000)
      .requireItem("techpack:bearing")
      .requireItem(`2x #c:plates/${craft}`)
      .produceItem(`techpack:${craft}_gear`)
      .jei()
      .priority(1);
  });
  e.recipes.custommachinery
    .custom_machine("techpack:basic_metal_former", 300)
    .requireEnergy(2000)
    .requireItem("techpack:electrum_gear")
    .requireItem("techpack:steel_plate")
    .produceItem("techpack:basic_circuit_board")
    .jei()
    .priority(3);
  e.recipes.custommachinery
    .custom_machine("techpack:basic_metal_former", 300)
    .requireEnergy(2000)
    .requireItem(Item.of("techpack:steel_plate", 4))
    .produceItem("techpack:heavy_steel_plate")
    .jei()
    .priority(4);
});
