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
    "aluminum",
    "chromium",
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
    e.recipes.custommachinery.custom_machine("techpack:electric_metal_former", 100)
      .requireEnergyPerTick(10)
      .requireItemOnEnd(`#c:ingots/${entry}`)
      .produceItem(`techpack:${entry}_plate`)
      .info(info => info.tooltip("Minimum Tier Required: Basic").item("techpack:basic_circuit"))
      .resetOnError()
      .jei().priority(1)
    e.recipes.custommachinery.custom_machine("techpack:steam_metal_former", 100)
      .requireFluidPerTick("2x techpack:steam")
      .requireItemOnEnd(`#c:ingots/${entry}`)
      .produceItem(`techpack:${entry}_plate`)
      .info(info => info.tooltip("Minimum Tier Required: Basic").item("techpack:basic_circuit"))
      .resetOnError()
      .jei().priority(1)
    //Gears
    e.recipes.custommachinery.custom_machine("techpack:electric_metal_former", 200)
      .requireEnergyPerTick(10)
      .requireItemOnEnd("techpack:bearing")
      .requireItemOnEnd(`2x #c:plates/${entry}`)
      .produceItem(`techpack:${entry}_gear`)
      .info(info => info.tooltip("Minimum Tier Required: Basic").item("techpack:basic_circuit"))
      .resetOnError()
      .jei().priority(2)
    e.recipes.custommachinery.custom_machine("techpack:steam_metal_former", 200)
      .requireFluidPerTick("4x techpack:steam")
      .requireItemOnEnd("techpack:bearing")
      .requireItemOnEnd(`2x #c:plates/${entry}`)
      .produceItem(`techpack:${entry}_gear`)
      .info(info => info.tooltip("Minimum Tier Required: Basic").item("techpack:basic_circuit"))
      .resetOnError()
      .jei().priority(2)
      
    e.custom({
      "type": "create:pressing",
      "ingredients": [{ "tag": `c:ingots/${entry}` }],
      "results": [{ "id": `techpack:${entry}_plate` }]
    })
  });
})