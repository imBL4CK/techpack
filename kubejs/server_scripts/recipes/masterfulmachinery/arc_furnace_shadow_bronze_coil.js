MMEvents.createProcesses((e) => {
  //Hot Stainless Steel
  {
    e.create("mm:arc_furnace/shadow_bronze_coil/hot_stainless")
      .structureId("mm:arc_furnace_shadow_bronze_structure")
      .ticks(1200)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:ingots/iron",
          count: 2,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "kubejs:manganese_ingot",
          count: 2,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "kubejs:chromium_dust",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:ingots/invar",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 8000,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "kubejs:hot_stainless_steel_ingot",
          count: 4,
        },
      });
  };
  //HDPE Sheet
  {
    e.create("mm:arc_furnace/shadow_bronze_coil/hdpe_sheet")
      .structureId("mm:arc_furnace_shadow_bronze_structure")
      .ticks(600)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "pneumaticcraft:plastic",
          count: 4,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 8000,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "kubejs:hdpe_sheet",
          count: 1,
        },
      });
  };
  //Hot Chromatic Alloy ingot
  {
    e.create("mm:arc_furnace/shadow_bronze_coil/chromatic_alloy_ingot")
      .structureId("mm:arc_furnace_shadow_bronze_structure")
      .ticks(1200)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "kubejs:chromatic_alloy_dust",
          count: 1,
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
          item: "kubejs:hot_chromatic_alloy_ingot",
          count: 1,
        },
      });
  };
});
