MMEvents.createProcesses((e) => {
  //Stainless Steel Ingot
  {
    e.create("mm:freezer/stainless_steel")
      .structureId("mm:freezer_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "kubejs:hot_stainless_steel_ingot",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:fluid",
          fluid: "tfmg:cooling_fluid",
          amount: 250,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 12000,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "kubejs:stainless_steel_ingot",
          count: 1,
        },
      });
  }
  //Chromatic Alloy Ingot
  {
    e.create("mm:freezer/chromatic_alloy_ingot")
      .structureId("mm:freezer_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "kubejs:hot_chromatic_alloy_ingot",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:fluid",
          fluid: "tfmg:cooling_fluid",
          amount: 250,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 12000,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "kubejs:chromatic_alloy_ingot",
          count: 1,
        },
      });
  }
});
