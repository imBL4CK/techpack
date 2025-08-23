MMEvents.createProcesses((e) => {
  //Redstone Alloy
  {
    e.create("mm:alloy_klin/redstone_alloy")
      .structureId("mm:alloy_klin_structure")
      .ticks(1200)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:dusts/redstone",
          count: 4,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:ingots/copper",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "minecraft:coals",
          count: 2,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "kubejs:red_alloy_ingot",
          count: 1,
        },
      });
  }
  //Bronze
  {
    e.create("mm:alloy_klin/bronze_alloy")
      .structureId("mm:alloy_klin_structure")
      .ticks(1200)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:ingots/tin",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:ingots/copper",
          count: 3,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "minecraft:coals",
          count: 2,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:bronze_ingot",
          count: 2,
        },
      });
  }
  //Brass
  {
    e.create("mm:alloy_klin/brass_alloy")
      .structureId("mm:alloy_klin_structure")
      .ticks(1200)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:ingots/zinc",
          count: 2,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:ingots/copper",
          count: 2,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "minecraft:coals",
          count: 2,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "create:brass_ingot",
          count: 2,
        },
      });
  }
  });
  