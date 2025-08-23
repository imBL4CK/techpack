MMEvents.createProcesses((e) => {
  //Steel Rod
  {
    e.create("mm:arc_furnace/recycle/rod_to_steel")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:rods/steel",
          count: 3,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 256,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:steel_ingot",
          count: 1,
        },
      });
  };
  //Steel Plate
  {
    e.create("mm:arc_furnace/recycle/plate_to_steel")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:plates/steel",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 256,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:steel_ingot",
          count: 1,
        },
      });
  };
  //Steel Gear
  {
    e.create("mm:arc_furnace/recycle/gears_to_steel")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          tag: "forge:gears/steel",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 768,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:steel_ingot",
          count: 3,
        },
      });
  };
  //Steel Engine
  {
    e.create("mm:arc_furnace/recycle/ad_astra/steel_engine_to_steel")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "ad_astra:steel_engine",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 3072,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:steel_ingot",
          count: 12,
        },
      });
  };
  //Steel Tank
  {
    e.create("mm:arc_furnace/recycle/ad_astra/steel_tank_to_steel")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "ad_astra:steel_tank",
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
          item: "thermal:steel_ingot",
          count: 4,
        },
      });
  };
  //Steel Helmet
  {
    e.create("mm:arc_furnace/recycle/tfmg/steel_helmet")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "tfmg:steel_helmet",
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
          item: "thermal:steel_ingot",
          count: 4,
        },
      });
  };
  //Steel Chestplate
  {
    e.create("mm:arc_furnace/recycle/tfmg/steel_chestplate")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "tfmg:steel_chestplate",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 1792,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:steel_ingot",
          count: 7,
        },
      });
  };
  //Steel Leggings
  {
    e.create("mm:arc_furnace/recycle/tfmg/steel_leggings")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "tfmg:steel_leggings",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 1536,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:steel_ingot",
          count: 6,
        },
      });
  };
  //Steel Boots
  {
    e.create("mm:arc_furnace/recycle/tfmg/steel_boots")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "tfmg:steel_boots",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 768,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:steel_ingot",
          count: 3,
        },
      });
  };
  //Steel Sword
  {
    e.create("mm:arc_furnace/recycle/tfmg/steel_sword")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "tfmg:steel_sword",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 256,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:steel_ingot",
          count: 1,
        },
      });
  };
  //Steel Axe
  {
    e.create("mm:arc_furnace/recycle/tfmg/steel_axe")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "tfmg:steel_axe",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 512,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:steel_ingot",
          count: 2,
        },
      });
  };
  //Steel picaxe
  {
    e.create("mm:arc_furnace/recycle/tfmg/steel_pickaxe")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "tfmg:steel_pickaxe",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 512,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:steel_ingot",
          count: 2,
        },
      });
  };
  //Steel Shovel
  {
    e.create("mm:arc_furnace/recycle/tfmg/steel_shovel")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "tfmg:steel_shovel",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 128,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:steel_nugget",
          count: 5,
        },
      });
  };
  //Steel Hoe
  {
    e.create("mm:arc_furnace/recycle/tfmg/steel_hoe")
      .structureId("mm:arc_furnace_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "tfmg:steel_hoe",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 256,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "thermal:steel_ingot",
          count: 1,
        },
      });
  };
});
