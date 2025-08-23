ServerEvents.recipes((e) => {

  let recipeId = "pneumaticcraft:pressure_chamber/";

  const recipes = [
    //Diamond
    {
      inputs: [
        {
          type: "pneumaticcraft:stacked_item",
          tag: "forge:storage_blocks/coal_coke",
          count: 16,
        },
      ],
      pressure: 4,
      results: [
        {
          item: "minecraft:diamond",
        },
      ],
      id: "minecraft/diamond",
    },
    //EnderIO Basic Capacitor
    {
      inputs: [
        {
          type: "pneumaticcraft:stacked_item",
          item: "enderio:grains_of_infinity",
          count: 2,
        },
        {
          type: "pneumaticcraft:stacked_item",
          item: "kubejs:advanced_alloy_ingot",
          count: 1,
        },
        {
          type: "pneumaticcraft:stacked_item",
          item: "thermal:rf_coil",
          count: 1,
        },
        {
          type: "pneumaticcraft:stacked_item",
          tag: "forge:wires/copper",
          count: 1,
        },
      ],
      pressure: 2,
      results: [
        {
          item: "enderio:basic_capacitor",
        },
      ],
      id: "enderio/capacitor",
    },
    //TFMG: Capacitor
    {
      inputs: [
        {
          type: "pneumaticcraft:stacked_item",
          item: "thermal:cured_rubber",
          count: 2,
        },
        {
          type: "pneumaticcraft:stacked_item",
          tag: "forge:wires/copper",
          count: 2,
        },
        {
          type: "pneumaticcraft:stacked_item",
          tag: "forge:ingots/nickel",
          count: 1,
        },
        {
          type: "pneumaticcraft:stacked_item",
          item: "kubejs:advanced_alloy_ingot",
          count: 1,
        },
      ],
      pressure: 2,
      results: [
        {
          item: "tfmg:capacitor_",
        },
      ],
      id: "tfmg/capacitor",
    },
    //Transistor
    {
      inputs: [
        {
          type: "pneumaticcraft:stacked_item",
          tag: "forge:wires/gold",
          count: 2,
        },
        {
          type: "pneumaticcraft:stacked_item",
          tag: "forge:wires/copper",
          count: 2,
        },
        {
          type: "pneumaticcraft:stacked_item",
          tag: "forge:ingots/lithium",
          count: 1,
        },
        {
          type: "pneumaticcraft:stacked_item",
          item: "kubejs:advanced_alloy_ingot",
          count: 1,
        },
      ],
      pressure: 2,
      results: [
        {
          item: "pneumaticcraft:transistor",
        },
      ],
      id: "pneumaticcraft/transistor",
    },
    //Empty PCB via duroplast
    {
      inputs: [
        {
          type: "pneumaticcraft:stacked_item",
          item: "kubejs:duroplast_sheet",
          count: 1,
        },
        {
          type: "pneumaticcraft:stacked_item",
          tag: "forge:wires/gold",
          count: 4,
        },
        {
          type: "pneumaticcraft:stacked_item",
          item: "thermal:rf_coil",
          count: 2,
        },
      ],
      pressure: 4,
      results: [
        {
          item: "pneumaticcraft:empty_pcb",
        },
      ],
      id: "pneumaticcraft/empty_pcb_via_duroplast",
    },
    //Empty PCB via Plastic
    {
      inputs: [
        {
          type: "pneumaticcraft:stacked_item",
          tag: "forge:plastic",
          count: 1,
        },
        {
          type: "pneumaticcraft:stacked_item",
          tag: "forge:wires/gold",
          count: 4,
        },
        {
          type: "pneumaticcraft:stacked_item",
          item: "thermal:rf_coil",
          count: 2,
        },
      ],
      pressure: 4,
      results: [
        {
          item: "pneumaticcraft:empty_pcb",
        },
      ],
      id: "pneumaticcraft/empty_pcb_via_plastic",
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "pneumaticcraft:pressure_chamber",
      inputs: recipe.inputs,
      pressure: recipe.pressure,
      results: recipe.results,
    }).id(`${recipeId}${recipe.id}`);;
  });
});
