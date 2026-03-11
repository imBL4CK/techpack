import { rusticOvenFunction } from "./techpack_multiblockAPI"; 

ServerEvents.recipes(e => {
    const recipes = [
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "techpack:washed_leather"],
            "produceItem": ["techpack:sealed_leather"],
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "#c:raw_materials/copper"],
            "produceItem": ["minecraft:copper_ingot", { item:"techpack:slag", chance: 0.5 }]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "#c:raw_materials/iron"],
            "produceItem": ["minecraft:iron_ingot", { item:"techpack:slag", chance: 0.5 }]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "#c:raw_materials/gold"],
            "produceItem": ["minecraft:gold_ingot", { item:"techpack:slag", chance: 0.5 }]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "techpack:raw_tin"],
            "produceItem": ["techpack:tin_ingot", { item:"techpack:slag", chance: 0.5 }]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "techpack:raw_silver"],
            "produceItem": ["techpack:silver_ingot", { item:"techpack:slag", chance: 0.5 }]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "techpack:raw_nickel"],
            "produceItem": ["techpack:nickel_ingot", { item:"techpack:slag", chance: 0.5 }]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "techpack:raw_lead"],
            "produceItem": ["techpack:lead_ingot", { item:"techpack:slag", chance: 0.5 }]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "#c:raw_materials/zinc"],
            "produceItem": ["create:zinc_ingot", { item:"techpack:slag", chance: 0.5 }]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "malum:raw_soulstone"],
            "produceItem": ["2x malum:refined_soulstone", { item:"techpack:slag", chance: 0.5 }]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "malum:raw_brilliance"],
            "produceItem": ["2x malum:refined_brilliance", { item:"techpack:slag", chance: 0.5 }]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "#c:nuggets/zinc", "minecraft:andesite", "techpack:slag"],
            "produceItem": ["create:andesite_alloy"]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "#minecraft:logs"],
            "produceItem": ["minecraft:charcoal", { item:"minecraft:charcoal", chance: 0.5 }]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "techpack:sifted_sand", "#c:silicon", "#c:gems/quartz"],
            "produceItem": ["4x minecraft:glass", { item:"techpack:slag", chance: 0.5 }]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "techpack:sifted_sand", "#c:dusts/quartz"],
            "produceItem": ["ae2:silicon"]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "2x techpack:fireclay_ball", "techpack:calcium_dust"],
            "produceItem": ["2x techpack:fireproof_brick"]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "techpack:latex", "#c:dusts/sulfur"],
            "produceItem": ["techpack:rubber"]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "#c:slimeballs", "#c:dusts/sulfur"],
            "produceItem": ["techpack:rubber"]
        },
        {
            "processingTime": 400,
            "requireItem": ["#techpack:general_coal_fragments", "minecraft:clay_ball"],
            "produceItem": ["minecraft:brick"]
        }
    ];
    recipes.forEach((recipe) => {
       rusticOvenFunction(e,recipe)
    });
});