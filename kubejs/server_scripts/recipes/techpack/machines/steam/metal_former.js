ServerEvents.recipes((e) => {
  let materials = [
    "copper",
    "iron",
    "gold",
    "tin",
    "bronze",
    "steel",
    "silver",
    "nickel",
    "invar",
  ];
  materials.forEach((craft) => {
    e.recipes.custommachinery.custom_machine("techpack:steam_metal_former", 300)
      .requireFluidPerTick("1x techpack:steam")
      .requireItem(`#c:ingots/${craft}`)
      .produceItem(`techpack:${craft}_plate`)
      .jei()
      .priority(2)
    e.recipes.custommachinery.custom_machine("techpack:steam_metal_former", 300)
      .requireFluidPerTick("1x techpack:steam")
      .requireItem("techpack:bearing")
      .requireItem(`2x #c:plates/${craft}`)
      .produceItem(`techpack:${craft}_gear`)
      .jei()
      .priority(1);
  });
  e.recipes.custommachinery.custom_machine("techpack:steam_metal_former", 300)
      .requireFluidPerTick("1x techpack:steam")
      .requireItem("techpack:electrum_gear")
      .requireItem("techpack:steel_plate")
      .produceItem("techpack:basic_circuit_board")
      .jei()
      .priority(1);
});