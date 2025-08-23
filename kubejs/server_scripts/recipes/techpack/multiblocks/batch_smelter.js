import { techpackMultiblockApi } from "./techpack_multiblockAPI"; 

ServerEvents.recipes(e => {
  let materials = [
    "tin",
    "silver",
    "nickel",
    "lead",
    "platinum",
//
    "steel",
    "bronze",
    "electrum",
    "invar",
    "constantan"
  ]
  let natural = [
    "tin",
    "silver",
    "nickel",
    "lead",
    "platinum"
  ];
  materials.forEach((insert) => {
    const smelt = [
    //Ingot by Plate
    {
        "machineType": "techpack:batch_smelter",
        "processingTime": 300,
        "requireEnergy": 10,
        "requireItem": [`16x techpack:${insert}_plate`],
        "produceItem": [`16x techpack:${insert}_ingot`, { item: "techpack:slag", chance: 0.5 }]
    },
    //Ingot by plate
    {
        "machineType": "techpack:batch_smelter",
        "processingTime": 300,
        "requireEnergy": 10,
        "requireItem": [`16x techpack:${insert}_dust`],
        "produceItem": [`16x techpack:${insert}_ingot`, { item: "techpack:slag", chance: 0.5 }]
    },
  ]
    smelt.forEach((recipe) => {
        techpackMultiblockApi(e,recipe)
    });
  })
  natural.forEach((insert) => {
    const smelt = [
    //Ingot by raw
    {
        "machineType": "techpack:batch_smelter",
        "processingTime": 300,
        "requireEnergy": 10,
        "requireItem": [`16x #c:raw_materials/${insert}`],
        "produceItem": [`16x techpack:${insert}_ingot`, { item: "techpack:slag", chance: 0.5 }]
    },
    //Ingot by crushed raw
    {
        "machineType": "techpack:batch_smelter",
        "processingTime": 300,
        "requireEnergy": 10,
        "requireItem": [`16x create:crushed_raw_${insert}`],
        "produceItem": [`16x techpack:${insert}_ingot`, { item: "techpack:slag", chance: 0.5 }]
    },
  ]
    smelt.forEach((recipe) => {
        techpackMultiblockApi(e,recipe)
    });
  })
})