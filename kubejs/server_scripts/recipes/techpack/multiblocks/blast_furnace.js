import { blastFurnaceFunction } from "./techpack_multiblockAPI"; 

ServerEvents.recipes(e => {
    let coal = "#minecraft:coals"
    const recipes = [
    {
        "processingTime": 600,
        "requireItem": [coal, "3x #c:ingots/copper", "#c:ingots/tin"],
        "produceItem": ["2x techpack:bronze_ingot", { item:"techpack:slag", chance: 0.5 }],
    },
    {
        "processingTime": 600,
        "requireItem": [coal, "#c:ingots/gold", "#c:ingots/silver"],
        "produceItem": ["2x techpack:electrum_ingot", { item:"techpack:slag", chance: 0.5 }],
    },
    {
        "processingTime": 1200,
        "requireItem": ["#c:ingots/iron", "#techpack:coal_cokes" ],
        "produceItem": ["techpack:steel_ingot", { item:"techpack:slag", chance: 0.5 }],
    },
    {
        "processingTime": 600,
        "requireItem": ["minecraft:coal"],
        "produceItem": ["techpack:coal_coke"],
    },
    {
        "processingTime": 600,
        "requireItem": [coal, "#c:ingots/iron", "techpack:sifted_sand"],
        "produceItem": ["2x techpack:wrought_iron_ingot", { item:"techpack:slag", chance: 0.5 }],
    },
    {
        "processingTime": 400,
        "requireItem": [coal, "#c:gems/quartz", "4x minecraft:redstone", "#c:silicon"],
        "produceItem": ["2x create:rose_quartz", { item:"techpack:slag", chance: 0.5 }],
    },
]
    recipes.forEach((recipe) => {
       blastFurnaceFunction(e,recipe)
    });
});
