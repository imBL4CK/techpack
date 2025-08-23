MMEvents.createProcesses((e) => {
  //Water to Steam
  {
    e.create("mm:steam_boiler/water_to_steam")
      .structureId("mm:steam_boiler_structure")
      .ticks(600)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:fluid",
          fluid: "minecraft:water",
          amount: 1000
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 200
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:fluid",
          fluid: "systeams:steam",
          amount: 2000
        },
      })
  }
});
