MMEvents.createProcesses((e) => {
  //Shadow Bronze by ingots
  {
    e.create("mm:arc_furnace/shadow_bronze_by_ingots")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
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
          item: "kubejs:manganese_ingot",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:ingots/silver",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 2048,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "kubejs:shadow_bronze_ingot",
          count: 3,
        },
      });
  };
  //Shadow Bronze by dusts
  {
    e.create("mm:arc_furnace/shadow_bronze_by_dusts")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:dusts/copper",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "kubejs:manganese_dust",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:dusts/silver",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 2048,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "kubejs:shadow_bronze_ingot",
          count: 3,
        },
      });
  };
  //Dark Steel by Iron Ingot
  {
    e.create("mm:arc_furnace/dark_steel_by_iron_ingot")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:dusts/coal",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:obsidian",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:ingots/iron",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 2048,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "enderio:dark_steel_ingot",
          count: 1,
        },
      });
  };
  //Dark Steel by Iron Dust
  {
    e.create("mm:arc_furnace/dark_steel_by_iron_dust")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:dusts/coal",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:obsidian",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:dusts/iron",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 2048,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "enderio:dark_steel_ingot",
          count: 1,
        },
      });
  };
  //Industrial Leather
  {
    e.create("mm:arc_furnace/industrial_leather")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:string",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:leather",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 1024,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "kubejs:industrial_leather",
          count: 1,
        },
      });
  };
});
