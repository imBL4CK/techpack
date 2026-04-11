// imBL4CK_'s machine custom api made for Techpack
function techpackMachineAPI(e,recipeData) {
    const recipe = e.recipes.custommachinery.custom_machine(recipeData.machineType, recipeData.processingTime);
    if (recipeData.requireItem) {
        recipeData.requireItem.forEach((inputItem) => {
            if (typeof inputItem === "string") {
                recipe.requireItem(inputItem);
            } else if (typeof inputItem === "object" && inputItem.consumeOnEnd === true) {
                recipe.requireItemOnEnd(inputItem.item);
            } else {
                recipe.requireItem(inputItem.item).chance(inputItem.chance);
            }
        })
    }
    if (recipeData.produceItem) {
        recipeData.produceItem.forEach((outputItem) => {
            if (typeof outputItem === "string") {
                recipe.produceItem(outputItem);
            } else if (typeof outputItem === "object" && outputItem.chance) {
                recipe.produceItem(outputItem.item).chance(outputItem.chance);
            }
        })
    }
    if (recipeData.requireFluid) {
        recipeData.requireFluid.forEach((inputFluid) => {
            if (typeof inputFluid === "string") {
                recipe.requireFluid(inputFluid);
            } else if (typeof inputFluid === "object" && inputFluid.perTick) {
                recipe.requireFluidPerTick(inputFluid.perTick)
            }
        })
    }
    if (recipeData.produceFluid) {
        recipeData.produceFluid.forEach((outputFluid) => {
            if (typeof outputFluid === "string") {
                recipe.produceFluid(outputFluid);
            } else if (typeof outputFluid === "object" && outputFluid.perTick) {
                recipe.produceFluidPerTick(outputFluid.perTick)
            }
        })
    }
    if (recipeData.requireEnergy) {
        if (typeof recipeData.requireEnergy === "number") {
            recipe.requireEnergy(recipeData.requireEnergy);
        } else if (typeof recipeData.requireEnergy === "object" && recipeData.requireEnergy.perTick) {
            recipe.requireEnergyPerTick(recipeData.requireEnergy.perTick);
        }
    }
    if (recipeData.produceEnergy) {
        if (typeof recipeData.produceEnergy === "number") {
            recipe.produceEnergy(recipeData.produceEnergy);
        } else if (typeof recipeData.produceEnergy === "object" && recipeData.produceEnergy.perTick) {
            recipe.produceEnergyPerTick(recipeData.produceEnergy.perTick);
        }
    }
    if (recipeData.produceLootTable) {
        if (typeof recipeData.produceLootTable === "string") {
            recipe.lootTableOutput(recipeData.produceLootTable);
        } else if (typeof recipeData.produceLootTable === "object" && recipeData.produceLootTable.luckModifier) {
            recipe.lootTableOutput(recipeData.produceLootTable.lootTable, recipeData.produceLootTable.luckModifier);
        }
    }
    if (recipeData.requireFuel) {
        recipe.requireFuel();
    }
    if (recipeData.requireSU) {
        recipe.requireSU(recipeData.requireSU[0])
    }
    if (recipeData.produceSU) {
        recipe.produceSU(recipeData.produceSU.speed,recipeData.produceSU.stressMultiplier)
    }
    if (recipeData.requirePressure) {
        recipe.requirePressure(recipeData.requirePressure.minimum, recipeData.requirePressure.maximum)
    }
    if (recipeData.producePressure) {
        recipe.producePressure(recipeData.producePressure)
    }
    if (recipeData.requireDimension) {
        recipe.dimensionWhitelist(recipeData.requireDimension)
    }
    if (recipeData.pollinate) {
        recipe.requireBlock(recipeData.pollinate, true, 1, 0, 1, -1, 0, -1)
    }
    if (recipeData.requireTime) {
        recipe.requireTime(recipeData.requireTime)
    }
    if (recipeData.requirePosition) {
        recipe.requirePosition(
            recipeData.requirePosition.x,
            recipeData.requirePosition.y,
            recipeData.requirePosition.z
        )
    }
    if (recipeData.needsSky) {
        recipe.mustSeeSky()
    }
    if (recipeData.jeiHide === true) {
        recipe.hide()
    }
    if (recipeData.displayInfo) {
        recipe.info(info => info.tooltip(`${recipeData.displayInfo.text}`).item(`${recipeData.displayInfo.icon}`))
    }
    if (recipeData.recipeTier === "basic") {
        recipe.info(info => info.tooltip("Minimum Tier Required: Basic").item("techpack:basic_circuit"))
    }
    if (recipeData.recipeTier === "advanced") {
        recipe.info(info => info.tooltip("Minimum Tier Required: Advanced").item("pneumaticcraft:printed_circuit_board"))
    }
    if (recipeData.recipeTier === "sophisticated") {
        recipe.info(info => info.tooltip("Minimum Tier Required: Sophisticated").item("techpack:sophisticated_circuit"))
    }
    if (recipeData.requireCleanroom) {
        recipe.requireStructure(
            [
                ["     ", " CCC ", " CAC ", " CCC ", "     "],
                [" CCC ", "C   C", "C m C", "C   C", " CDC "],
                [" CAC ", "C   C", "A   A", "C   C", " CDC "],
                [" CCC ", "C   C", "C   C", "C   C", " CCC "],
                ["     ", " CCC ", " CAC ", " CCC ", "     "],
            ],
            {
                A: [
                    "techpack:cleanroom_casing", 
                    "ae2:energy_acceptor", 
                    "ae2:interface", 
                    "ae2:pattern_provider", 
                    "techpack:battery_box", 
                    "techpack:cesu", 
                    "techpack:mfe",
                    "techpack:mfsu",
                    "tesseract:tesseract",
                ],
                C: "techpack:cleanroom_casing",
                D: "create:framed_glass_door[open=false]",
            },
        )
    }
    if (recipeData.damageItem) {
        recipeData.damageItem.forEach((inputItem) => {
            if (typeof inputItem === "string") {
                recipe.damageItem(inputItem);
            } else if (typeof inputItem === "object" && inputItem.damage) {
                recipe.damageItem(inputItem.item, inputItem.damage);
            } else if (typeof inputItem === "object" && inputItem.damage && inputItem.chance) {
                recipe.damageItem(inputItem.item, inputItem.damage).chance(inputItem.chance);
            }
        })
    }
    if (recipeData.produceLootTable) {
        recipe.lootTableOutput(recipeData.produceLootTable)
    }
    if (recipeData.jeiDisplayPriority) {
        recipe.jei().priority(recipeData.jeiDisplayPriority)
    }
    if (recipeData.resetOnError) {
        recipe.resetOnError()
    }
}