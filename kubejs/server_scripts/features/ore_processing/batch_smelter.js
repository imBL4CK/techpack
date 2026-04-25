ServerEvents.recipes(e => {
    let recipe = e.recipes.modular_machinery_reborn.machine_recipe
    const entries = [
        {
            id: "tin",
            raw: true,
            stoneOre: true,
            deepslateOre: true,
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
        {
            id: "silver",
            raw: true,
            stoneOre: true,
            deepslateOre: true,
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
        {
            id: "nickel",
            raw: true,
            stoneOre: true,
            deepslateOre: true,
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
        {
            id: "lead",
            raw: true,
            stoneOre: true,
            deepslateOre: true,
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
        {
            id: "platinum",
            raw: true,
            stoneOre: true,
            deepslateOre: true,
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
        {
            id: "aluminum",
            raw: true,
            stoneOre: true,
            deepslateOre: true,
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
        {
            id: "chromium",
            raw: true,
            stoneOre: true,
            deepslateOre: true,
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
        {
            id: "lithium",
            raw: true,
            nugget: true,
            dust: true,
        },
        {
            id: "bronze",
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
        {
            id: "steel",
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
        {
            id: "electrum",
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
        {
            id: "invar",
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
        {
            id: "constantan",
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
        {
            id: "kanthal",
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
        {
            id: "advanced_alloy",
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
        {
            id: "stainless_steel",
            nugget: true,
            plate: true,
            gear: true,
            dust: true,
        },
    ];
    entries.forEach(entry => {
        if (entry.raw) {
            recipe("techpack:batch_smelter", 200)
            .requireEnergyPerTick(20, 0, 1)
            .requireItem(`16x #c:raw_materials/${entry.id}`, 24, 19)
            .produceItem(`16x techpack:${entry.id}_ingot`, 74, 11)
            .produceItem("16x techpack:slag", 0.5, 74, 29)
            .width(96).height(56).progressData(ProgressData.create().x(47).y(20))
        }
        if (entry.stoneOre || entry.deepslateOre) {
            recipe("techpack:batch_smelter", 200)
            .requireEnergyPerTick(20, 0, 1)
            .requireItem(`16x #c:ores/${entry.id}`, 24, 19)
            .produceItem(`16x techpack:${entry.id}_ingot`, 74, 11)
            .produceItem("16x techpack:slag", 0.5, 74, 29)
            .width(96).height(56).progressData(ProgressData.create().x(47).y(20))
        }
        if (entry.dust) {
            recipe("techpack:batch_smelter", 200)
            .requireEnergyPerTick(20, 0, 1)
            .requireItem(`16x #c:dusts/${entry.id}`, 24, 19)
            .produceItem(`16x techpack:${entry.id}_ingot`, 74, 11)
            .produceItem("16x techpack:slag", 0.5, 74, 29)
            .width(96).height(56).progressData(ProgressData.create().x(47).y(20))
        }
        if (entry.plate) {
            recipe("techpack:batch_smelter", 200)
            .requireEnergyPerTick(20, 0, 1)
            .requireItem(`16x #c:plates/${entry.id}`, 24, 19)
            .produceItem(`16x techpack:${entry.id}_ingot`, 74, 11)
            .produceItem("16x techpack:slag", 0.5, 74, 29)
            .width(96).height(56).progressData(ProgressData.create().x(47).y(20))
        }
        if (entry.nugget) {
            recipe("techpack:batch_smelter", 200)
            .requireEnergyPerTick(20, 0, 1)
            .requireItem(`63x #c:nuggets/${entry.id}`, 24, 19)
            .produceItem(`7x techpack:${entry.id}_ingot`, 74, 11)
            .produceItem("7x techpack:slag", 0.5, 74, 29)
            .width(96).height(56).progressData(ProgressData.create().x(47).y(20))
        }
        if (entry.gear) {
            recipe("techpack:batch_smelter", 200)
            .requireEnergyPerTick(20, 0, 1)
            .requireItem(`16x #c:gears/${entry.id}`, 24, 19)
            .produceItem(`16x techpack:${entry.id}_ingot`, 74, 11)
            .produceItem("16x techpack:slag", 0.5, 74, 29)
            .width(96).height(56).progressData(ProgressData.create().x(47).y(20))
        } else {}
    })
})