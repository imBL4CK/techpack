MMEvents.createProcesses((e) => {
  //Steam to 512 FE/t
  {
    e.create("mm:large_steam_turbine/energy_by_steam").structureId("mm:large_steam_turbine_structure").ticks(20)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:fluid",
          fluid: "systeams:steam",
          amount: 250
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:fluid",
          fluid: "minecraft:water",
          amount: 25
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:energy",
          per_tick: true,
          amount: 600
        },
      });
  }
});
