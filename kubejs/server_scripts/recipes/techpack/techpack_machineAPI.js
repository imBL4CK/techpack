// imBL4CK_'s machine custom api made for Techpack
function techpackMachineAPI(e,recipeData) {
    const recipe = e.recipes.custommachinery.custom_machine(recipeData.machineType, recipeData.processingTime);
    if (recipeData.requireItem) {
        recipeData.requireItem.forEach((inputItem) => {
            if (typeof inputItem === "string") {
                recipe.requireItem(inputItem);
            } else if (typeof inputItem === "object" && inputItem.chance) {
                recipe.requireItem(inputItem.item).chance(inputItem.chance);
            } else if (typeof inputItem === "object" && inputItem.consumeOnEnd === true) {
                recipe.requireItemOnEnd(inputItem.item);
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
        recipe.produceSU(recipeData.produceSU[0])
    }
    if (recipeData.requirePressure) {
        recipe.requirePressure(recipeData.requirePressure.minimum, recipeData.requirePressure.maximum)
    }
    if (recipeData.producePressure) {
        recipe.producePressure(recipeData.producePressure)
    }
    if (recipeData.requireTime) {
        recipe.requireTime(recipeData.requireTime)
    }
}