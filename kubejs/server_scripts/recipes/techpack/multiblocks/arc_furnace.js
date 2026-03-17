import { arcFurnaceFunction } from "./techpack_multiblockAPI"; 

ServerEvents.recipes(e => {
    const recipes = [
    {
        "processingTime": 100,
        "requireEnergyPerTick": 20,
        "requireItem": ["3x #c:ingots/copper", "#c:ingots/zinc"],
        "produceItem": ["techpack:bronze_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 100,
        "requireEnergyPerTick": 20,
        "requireItem": ["#c:ingots/copper", "#c:ingots/nickel"],
        "produceItem": ["techpack:constantan_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 100,
        "requireEnergyPerTick": 20,
        "requireItem": ["2x #c:ingots/iron", "#c:ingots/nickel"],
        "produceItem": ["3x techpack:invar_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 100,
        "requireEnergyPerTick": 20,
        "requireItem": ["#c:ingots/iron", "#techpack:coal_cokes"],
        "produceItem": ["2x techpack:steel_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 100,
        "requireEnergyPerTick": 20,
        "requireItem": ["#c:ingots/gold", "#c:ingots/silver"],
        "produceItem": ["2x techpack:electrum_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 100,
        "requireEnergyPerTick": 20,
        "requireItem": ["#c:ingots/copper", "ae2:silicon"],
        "produceItem": ["enderio:copper_alloy_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 100,
        "requireEnergyPerTick": 20,
        "requireItem": ["#c:ingots/iron", "techpack:sifted_sand"],
        "produceItem": ["2x techpack:wrought_iron_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 100,
        "requireEnergyPerTick": 20,
        "requireItem": ["#c:dusts/quartz", "techpack:sifted_sand"],
        "produceItem": ["ae2:silicon", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 100,
        "requireEnergyPerTick": 20,
        "requireItem": ["#c:dusts/quartz", "techpack:sifted_sand", "ae2:silicon"],
        "produceItem": ["8x minecraft:glass", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 100,
        "requireEnergyPerTick": 20,
        "requireItem": ["minecraft:redstone", "#c:ingots/iron", "enderio:copper_alloy_ingot"],
        "produceItem": ["enderio:conductive_alloy_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 300,
        "requireEnergyPerTick": 30,
        "requireItem": ["minecraft:redstone", "#c:ingots/iron", "enderio:copper_alloy_ingot"],
        "produceItem": ["enderio:conductive_alloy_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 300,
        "requireEnergyPerTick": 50,
        "requireItem": ["techpack:mixed_metal_ingot"],
        "produceItem": ["techpack:advanced_alloy_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 300,
        "requireEnergyPerTick": 20,
        "requireItem": ["4x pneumaticcraft:plastic"],
        "produceItem": ["techpack:hdpe_sheet", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 300,
        "requireEnergyPerTick": 20,
        "requireItem": ["4x techpack:bio_plastic_mesh"],
        "produceItem": ["techpack:hdpe_sheet", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 600,
        "requireEnergyPerTick": 5,
        "requireItem": ["minecraft:iron_ingot", "techpack:nickel_ingot", "techpack:aluminum_ingot"],
        "produceItem": ["3x techpack:hot_kanthal_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 1200,
        "requireEnergyPerTick": 5,
        "requireItem": ["minecraft:iron_ingot", "techpack:nickel_ingot", "techpack:chrome_ingot"],
        "produceItem": ["3x techpack:hot_stainless_steel_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 1200,
        "requireEnergyPerTick": 500,
        "requireItem": ["#c:ingots/electrum", "4x techpack:flux_powder"],
        "produceItem": ["techpack:hot_flux_infused_alloy_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 1200,
        "requireEnergyPerTick": 5,
        "requireItem": ["minecraft:iron_ingot", "minecraft:ender_pearl"],
        "produceItem": ["enderio:pulsating_alloy_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 1200,
        "requireEnergyPerTick": 5,
        "requireItem": ["minecraft:redstone", "enderio:conductive_alloy_ingot", "minecraft:gold_ingot"],
        "produceItem": ["enderio:energetic_alloy_ingot", { item: "techpack:rich_slag", chance: 0.5 }]
    },
    {
        "processingTime": 1200,
        "requireEnergyPerTick": 5,
        "requireItem": ["2x #c:gems/quartz", "4x minecraft:redstone", "2x ae2:silicon"],
        "produceItem": ["4x create:rose_quartz", { item: "techpack:rich_slag", chance: 0.5 }]
    },
]
    recipes.forEach((recipe) => {
       arcFurnaceFunction(e,recipe)
    });
});
