ServerEvents.recipes(e => {
  const entries = [
    "copper",
    "iron",
    "gold",
    "zinc",
    "tin",
    "silver",
    "lead",
    "nickel",
    "chrome",
    "platinum",
    "aluminum",
    "bronze",
    "steel",
    "electrum",
    "invar",
    "constantan",
    "kanthal",
    "advanced_alloy",
    "stainless_steel",  
  ];
  entries.forEach((entry) => {
    //Plates
    e.recipes.custommachinery.custom_machine("techpack:basic_metal_former", 100)
      .requireEnergyPerTick(10)
      .requireItem(`#c:ingots/${entry}`)
      .produceItem(`techpack:${entry}_plate`)
      .jei().priority(1)
    e.recipes.custommachinery.custom_machine("techpack:steam_metal_former", 100)
      .requireFluidPerTick("2x techpack:steam")
      .requireItem(`#c:ingots/${entry}`)
      .produceItem(`techpack:${entry}_plate`)
      .jei().priority(1)
    e.custom({
      "type": "create:pressing",
      "ingredients": [{ "tag": `c:ingots/${entry}` }],
      "results": [{ "id": `techpack:${entry}_plate` }]
    })
    //Gears
    e.recipes.custommachinery.custom_machine("techpack:basic_metal_former", 200)
      .requireEnergyPerTick(10)
      .requireItem("techpack:bearing")
      .requireItem(`2x #c:plates/${entry}`)
      .produceItem(`techpack:${entry}_gear`)
      .jei().priority(2)
    e.recipes.custommachinery.custom_machine("techpack:steam_metal_former", 200)
      .requireFluidPerTick("4x techpack:steam")
      .requireItem("techpack:bearing")
      .requireItem(`2x #c:plates/${entry}`)
      .produceItem(`techpack:${entry}_gear`)
      .jei().priority(2)
  });
  
  e.recipes.custommachinery.custom_machine("techpack:basic_metal_former", 200)
    .requireEnergyPerTick(10)
    .requireItem("techpack:polished_diamond")
    .produceItem("techpack:diamond_plate")
    .jei().priority(1)
  e.recipes.custommachinery.custom_machine("techpack:basic_metal_former", 200)
    .requireEnergyPerTick(10)
    .requireItem("techpack:bearing")
    .requireItem("2x techpack:polished_diamond")
    .produceItem("techpack:diamond_gear")
    .jei().priority(2)
})