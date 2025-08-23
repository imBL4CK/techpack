import { techpackMultiblockApi } from "./techpack_multiblockAPI"; 

ServerEvents.recipes(e => {
    const recipes = [
    {
        "machineType": "techpack:arc_furnace",
        "processingTime": 100,
        "requireEnergy": 30,
        "requireItem": ["3x #c:ingots/copper", "#c:ingots/zinc"],
        "produceItem": ["techpack:bronze_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "machineType": "techpack:arc_furnace",
        "processingTime": 100,
        "requireEnergy": 30,
        "requireItem": ["#c:ingots/copper", "#c:ingots/nickel"],
        "produceItem": ["techpack:constantan_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "machineType": "techpack:arc_furnace",
        "processingTime": 100,
        "requireEnergy": 30,
        "requireItem": ["2x #c:ingots/iron", "#c:ingots/nickel"],
        "produceItem": ["3x techpack:invar_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "machineType": "techpack:arc_furnace",
        "processingTime": 100,
        "requireEnergy": 30,
        "requireItem": ["#c:ingots/iron", "techpack:coal_coke"],
        "produceItem": ["2x techpack:steel_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "machineType": "techpack:arc_furnace",
        "processingTime": 100,
        "requireEnergy": 30,
        "requireItem": ["#c:ingots/gold", "#c:ingots/silver"],
        "produceItem": ["2x techpack:electrum_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "machineType": "techpack:arc_furnace",
        "processingTime": 100,
        "requireEnergy": 30,
        "requireItem": ["#c:ingots/copper", "ae2:silicon"],
        "produceItem": ["enderio:copper_alloy_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "machineType": "techpack:arc_furnace",
        "processingTime": 100,
        "requireEnergy": 30,
        "requireItem": ["#c:ingots/iron", "techpack:sifted_sand"],
        "produceItem": ["2x techpack:wrought_iron_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "machineType": "techpack:arc_furnace",
        "processingTime": 100,
        "requireEnergy": 30,
        "requireItem": ["#c:dusts/quartz", "techpack:sifted_sand"],
        "produceItem": ["ae2:silicon", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "machineType": "techpack:arc_furnace",
        "processingTime": 100,
        "requireEnergy": 30,
        "requireItem": ["#c:dusts/quartz", "techpack:sifted_sand", "ae2:silicon"],
        "produceItem": ["6x minecraft:glass", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "machineType": "techpack:arc_furnace",
        "processingTime": 100,
        "requireEnergy": 30,
        "requireItem": ["minecraft:redstone", "#c:ingots/iron", "enderio:copper_alloy_ingot"],
        "produceItem": ["enderio:conductive_alloy_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
]
    recipes.forEach((recipe) => {
       techpackMultiblockApi(e,recipe)
    });
});
