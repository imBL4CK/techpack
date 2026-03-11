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
    e.recipes.custommachinery.custom_machine("techpack:basic_macerator", 200)
      .requireEnergyPerTick(20)
      .requireItem(`#c:ingots/${entry}`)
      .produceItem(`techpack:${entry}_dust`)
      .jei().priority(10)
    e.recipes.custommachinery.custom_machine("techpack:steam_macerator", 200)
      .requireFluidPerTick("2x techpack:steam")
      .requireItem(`#c:ingots/${entry}`)
      .produceItem(`techpack:${entry}_dust`)
      .jei().priority(10)
  });
  e.recipes.custommachinery.custom_machine("techpack:basic_macerator", 200)
    .requireEnergyPerTick(40)
    .requireItem("minecraft:diamond")
    .produceItem("techpack:diamond_dust")
    .jei().priority(10)
  e.recipes.custommachinery.custom_machine("techpack:steam_macerator", 200)
    .requireFluidPerTick("2x techpack:steam")
    .requireItem("minecraft:diamond")
    .produceItem("techpack:diamond_dust")
    .jei().priority(10)
})