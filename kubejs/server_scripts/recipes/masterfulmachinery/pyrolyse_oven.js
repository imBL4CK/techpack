MMEvents.createProcesses((e) => {
  //Charcoal by Log
  {
    e.create("mm:pyrolyse_oven/charcoal_by_logs")
      .structureId("mm:pyrolyse_oven_structure")
      .ticks(6000)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "minecraft:logs",
          count: 16,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 20000,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "minecraft:charcoal",
          count: 16,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:fluid",
          fluid: "kubejs:wood_tar",
          amount: 4000,
        },
      });
  }
  //Charcoal Fragment by Sugar
  {
    e.create("mm:pyrolyse_oven/charcoal_fragment_by_sugar")
      .structureId("mm:pyrolyse_oven_structure")
      .ticks(600)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "minecraft:sugar",
          count: 20,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 20000,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "malum:charcoal_fragment",
          count: 12,
        },
      });
  }
  //Coal Coke by Coal
  {
    e.create("mm:pyrolyse_oven/coal_coke_by_coal")
      .structureId("mm:pyrolyse_oven_structure")
      .ticks(6000)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "minecraft:coal",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 2000,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:fluid",
          fluid: "thermal:creosote",
          amount: 1000,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:coal_coke",
          count: 1,
        },
      })
      .output({
        type: "mm:output/simple",
        chance: 0.75,
        ingredient: {
          type: "mm:item",
          item: "thermal:tar",
          count: 1,
        },
      });
  }
});
