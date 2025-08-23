MMEvents.createProcesses((e) => {
  //Chromatic mix by dusts
  {
    e.create("mm:chemical_reactor/chromatic_alloy_dust_by_dusts")
      .structureId("mm:chemical_reactor_structure")
      .ticks(2400)
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
          tag: "forge:dusts/cobalt",
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
          type: "mm:energy",
          amount: 12000,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:fluid",
          fluid: "thermal:glowstone",
          amount: 500,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "kubejs:chromatic_alloy_dust",
          count: 3,
        },
      });
  }
  //Overworld Science Mix
  {
    e.create("mm:chemical_reactor/overworld_science_mix")
      .structureId("mm:chemical_reactor_structure")
      .ticks(3600)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "kubejs:basic_circuit",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "botania:rune_mana",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "eidolon:gold_inlay",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "forbidden_arcanus:mundabitur_dust",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 16000,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:fluid",
          fluid: "pneumaticcraft:etching_acid",
          amount: 1000,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "kubejs:overworld_science_mix",
          count: 1,
        },
      });
  }
});