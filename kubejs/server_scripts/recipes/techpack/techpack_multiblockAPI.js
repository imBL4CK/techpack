// imBL4CK_'s multiblock custom api made for Techpack
function techpackMultiblockApi(e,recipeData) {
    const recipe = e.recipes.modular_machinery_reborn.machine_recipe(recipeData.machineType, recipeData.processingTime);
    const progressLocation = { X: 68, Y: 2 }
    const jeiGui = { width: 144, height: 80 }
    const itemInputCoordinateMap = [
        { x: 20, y: 1 },  // 1* Item
        { x: 40, y: 1 },  // 2* Item
        { x: 20, y: 21 },  // 3* Item
        { x: 40, y: 21 }   // 4* Item
    ];
    const itemOutputCoordinateMap = [
        { x: 100, y: 1 },  // 1* Item
        { x: 120, y: 1 },  // 2* Item
        { x: 100, y: 21 },  // 3* Item
        { x: 120, y: 21 }   // 4* Item
    ];
    const fluidInputCoordinateMap = [
        { x: 20, y: 41 },  // 1* fluido
        { x: 40, y: 41 },  // 2* fluido
        { x: 20, y: 61 },  // 3* fluidp
        { x: 40, y: 61 }   // 4* fluido
    ];
    const fluidOutputCoordinateMap = [
        { x: 100, y: 41 },  // 1* fluido
        { x: 120, y: 41 },  // 2* fluido
        { x: 100, y: 61 },  // 3* fluido
        { x: 120, y: 61 }   // 4* fluido
    ];
    if (recipeData.requireItem) {
        recipeData.requireItem.forEach((inputItem, index) => {
        const recipeCoordinate = itemInputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof inputItem === "string") {
            recipe.requireItem(inputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputItem === "object" && inputItem.item) {
                recipe.requireItem(inputItem.item, inputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceItem) {
    recipeData.produceItem.forEach((outputItem, index) => {
        const recipeCoordinate = itemOutputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof outputItem === "string") {
                recipe.produceItem(outputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputItem === "object" && outputItem.item) {
                recipe.produceItem(outputItem.item, outputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.requireFluid) {
        recipeData.requireFluid.forEach((inputFluid, index) => {
            const recipeCoordinate = fluidInputCoordinateMap[index]
            if (recipeCoordinate) {
                if (typeof inputFluid === "string") {
                recipe.requireFluid(inputFluid, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputFluid === "object" && inputFluid.item) {
                recipe.produceItem(inputFluid.item, inputFluid.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceFluid) {
        recipeData.produceFluid.forEach((outputFluid, index) => {
            const recipeCoordinate = fluidOutputCoordinateMap[index]
            if (recipeCoordinate) {
                if (typeof outputFluid === "string") {
                recipe.produceFluid(outputFluid, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputFluid === "object" && outputFluid.item) {
                recipe.produceFluid(outputFluid.item, outputFluid.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.requireEnergy) {
        recipe.requireEnergy(recipeData.requireEnergy, 0, 1 );
    }
    if (recipeData.produceEnergy) {
        recipe.produceEnergy(recipeData.produceEnergy );
    }
    if (recipeData.requireEnergyPerTick) {
        recipe.requireEnergyPerTick(recipeData.requireEnergyPerTick, 0, 1 );
    }
    if (recipeData.requireDimension) {
        recipe.dimensions(recipeData.requireDimension );
    }
    if (recipeData.requireHeight) {
        recipe.requireHeight(recipeData.requireHeight );
    }
    if (recipeData.produceLootTable) {
        recipe.lootTable(recipeData.produceLootTable, 100, 1 );
    }
    recipe.progressData(ProgressData.create().x(progressLocation.X).y(progressLocation.Y))
    recipe.width(jeiGui.width).height(jeiGui.height)
}
function recyclerFuncition(e,recipeData) {
    const recipe = e.recipes.modular_machinery_reborn.machine_recipe("techpack:recycler", recipeData.processingTime);
    const progressLocation = { X: 42, Y: 2 }
    const jeiGui = { width: 106, height: 56 }
    const itemInputCoordinateMap = [
        { x: 20, y: 1 },  // 1* Item
        { x: 20, y: 19 },  // 1* Item
    ];
    const itemOutputCoordinateMap = [
        { x: 70, y: 1 },  // 1* Item
        { x: 88, y: 1 },  // 2* Item
        { x: 70, y: 19 },  // 3* Item
        { x: 88, y: 19 },   // 4* Item
        { x: 70, y: 37 },  // 3* Item
        { x: 88, y: 37 }   // 4* Item
    ];
    if (recipeData.requireItem) {
        recipeData.requireItem.forEach((inputItem, index) => {
        const recipeCoordinate = itemInputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof inputItem === "string") {
            recipe.requireItem(inputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputItem === "object" && inputItem.item) {
                recipe.requireItem(inputItem.item, inputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceItem) {
    recipeData.produceItem.forEach((outputItem, index) => {
        const recipeCoordinate = itemOutputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof outputItem === "string") {
                recipe.produceItem(outputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputItem === "object" && outputItem.item) {
                recipe.produceItem(outputItem.item, outputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.requireEnergyPerTick) {
        recipe.requireEnergyPerTick(recipeData.requireEnergyPerTick, 0, 1 );
    }
    if (recipeData.requireEnergy) {
        recipe.energyPerTick(recipeData.requireEnergy, 0, 1 );
    }
    recipe.progressData(ProgressData.create().x(progressLocation.X).y(progressLocation.Y))
    recipe.width(jeiGui.width).height(jeiGui.height)
}
function precisionAssemblerFuncition(e,recipeData) {
    const recipe = e.recipes.modular_machinery_reborn.machine_recipe("techpack:precision_assembler", recipeData.processingTime);
    const progressLocation = { X: 81, Y: 2 }
    const jeiGui = { width: 128, height: 56 }
    const itemInputCoordinateMap = [
        { x: 20, y: 1 },  // 1* Item
        { x: 38, y: 1 },  // 2* Item
        { x: 56, y: 1 }, // 3* Item
        { x: 20, y: 19 }, // 4* Item
        { x: 38, y: 19 }, // 5* Item
        { x: 56, y: 19 }  // 6* Item
    ];
    const itemOutputCoordinateMap = [
        { x: 109, y: 1 },  // 1* Item
        { x: 109, y: 19 },  // 2* Item
    ];
    if (recipeData.requireItem) {
        recipeData.requireItem.forEach((inputItem, index) => {
        const recipeCoordinate = itemInputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof inputItem === "string") {
            recipe.requireItem(inputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputItem === "object" && inputItem.item) {
                recipe.requireItem(inputItem.item, inputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceItem) {
    recipeData.produceItem.forEach((outputItem, index) => {
        const recipeCoordinate = itemOutputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof outputItem === "string") {
                recipe.produceItem(outputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputItem === "object" && outputItem.item) {
                recipe.produceItem(outputItem.item, outputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.requireFluid) {
        recipeData.requireFluid.forEach((inputFluid, index) => {
            const recipeCoordinate = fluidInputCoordinateMap[index]
            if (recipeCoordinate) {
                if (typeof inputFluid === "string") {
                recipe.requireFluid(inputFluid, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputFluid === "object" && inputFluid.item) {
                recipe.produceItem(inputFluid.item, inputFluid.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceFluid) {
        recipeData.produceFluid.forEach((outputFluid, index) => {
            const recipeCoordinate = fluidOutputCoordinateMap[index]
            if (recipeCoordinate) {
                if (typeof outputFluid === "string") {
                recipe.produceFluid(outputFluid, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputFluid === "object" && outputFluid.item) {
                recipe.produceFluid(outputFluid.item, outputFluid.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.requireEnergy) {
        recipe.requireEnergy(recipeData.requireEnergy, 0, 1 );
    }
    if (recipeData.requireEnergyPerTick) {
        recipe.requireEnergyPerTick(recipeData.requireEnergyPerTick, 0, 1 );
    }
    if (recipeData.requireDimension) {
        recipe.dimensions(recipeData.requireDimension );
    }
    recipe.progressData(ProgressData.create().x(progressLocation.X).y(progressLocation.Y))
    recipe.width(jeiGui.width).height(jeiGui.height)
}
function arcFurnaceFunction(e,recipeData) {
    const recipe = e.recipes.modular_machinery_reborn.machine_recipe("techpack:arc_furnace", recipeData.processingTime);
    const progressLocation = { X: 61, Y: 2 }
    const jeiGui = { width: 106, height: 56 }
    const itemInputCoordinateMap = [
        { x: 20, y: 1 },  // 1* Item
        { x: 38, y: 1 },  // 2* Item
        { x: 20, y: 19 },  // 3* Item
        { x: 38, y: 19 }, // 4* Item
        { x: 20, y: 37 }, // 5* Item
        { x: 38, y: 37 }  // 6* Item
    ];
    const itemOutputCoordinateMap = [
        { x: 88, y: 1 },  // 1* Item
        { x: 88, y: 19 },  // 2* Item
    ];
    if (recipeData.requireItem) {
        recipeData.requireItem.forEach((inputItem, index) => {
        const recipeCoordinate = itemInputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof inputItem === "string") {
            recipe.requireItem(inputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputItem === "object" && inputItem.item) {
                recipe.requireItem(inputItem.item, inputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceItem) {
    recipeData.produceItem.forEach((outputItem, index) => {
        const recipeCoordinate = itemOutputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof outputItem === "string") {
                recipe.produceItem(outputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputItem === "object" && outputItem.item) {
                recipe.produceItem(outputItem.item, outputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.requireFluid) {
        recipeData.requireFluid.forEach((inputFluid, index) => {
            const recipeCoordinate = fluidInputCoordinateMap[index]
            if (recipeCoordinate) {
                if (typeof inputFluid === "string") {
                recipe.requireFluid(inputFluid, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputFluid === "object" && inputFluid.item) {
                recipe.produceItem(inputFluid.item, inputFluid.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceFluid) {
        recipeData.produceFluid.forEach((outputFluid, index) => {
            const recipeCoordinate = fluidOutputCoordinateMap[index]
            if (recipeCoordinate) {
                if (typeof outputFluid === "string") {
                recipe.produceFluid(outputFluid, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputFluid === "object" && outputFluid.item) {
                recipe.produceFluid(outputFluid.item, outputFluid.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.requireEnergy) {
        recipe.requireEnergy(recipeData.requireEnergy, 0, 1 );
    }
    if (recipeData.requireEnergyPerTick) {
        recipe.requireEnergyPerTick(recipeData.requireEnergyPerTick, 0, 1 );
    }
    recipe.progressData(ProgressData.create().x(progressLocation.X).y(progressLocation.Y))
    recipe.width(jeiGui.width).height(jeiGui.height)
}
function steamGrinderFuncition(e,recipeData) {
    const recipe = e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", recipeData.processingTime);
    const progressLocation = { X: 47, Y: 7 }
    const jeiGui = { width: 96, height: 32 }
    const itemInputCoordinateMap = [
        { x: 24, y: 6 },  // 1* Item
    ];
    const itemOutputCoordinateMap = [
        { x: 74, y: 6 },  // 1* Item
    ];
    const fluidInputCoordinateMap = [
        { x: 6, y: 6 },  // 1* fluido
    ];
    if (recipeData.requireItem) {
        recipeData.requireItem.forEach((inputItem, index) => {
        const recipeCoordinate = itemInputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof inputItem === "string") {
            recipe.requireItem(inputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputItem === "object" && inputItem.item) {
                recipe.requireItem(inputItem.item, inputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceItem) {
    recipeData.produceItem.forEach((outputItem, index) => {
        const recipeCoordinate = itemOutputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof outputItem === "string") {
                recipe.produceItem(outputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputItem === "object" && outputItem.item) {
                recipe.produceItem(outputItem.item, outputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.requireFluid) {
        recipeData.requireFluid.forEach((inputFluid, index) => {
            const recipeCoordinate = fluidInputCoordinateMap[index]
            if (recipeCoordinate) {
                if (typeof inputFluid === "string") {
                recipe.requireFluid(inputFluid, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputFluid === "object" && inputFluid.perTick) {
                recipe.requireFluidPerTick(inputFluid.perTick, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    recipe.progressData(ProgressData.create().x(progressLocation.X).y(progressLocation.Y))
    recipe.width(jeiGui.width).height(jeiGui.height)
}
function batchSmelterFuncition(e,recipeData) {
    const recipe = e.recipes.modular_machinery_reborn.machine_recipe("techpack:batch_smelter", recipeData.processingTime);
    const progressLocation = { X: 47, Y: 20 }
    const jeiGui = { width: 96, height: 56 }
    const itemInputCoordinateMap = [
        { x: 24, y: 19 },  // 1* Item
    ];
    const itemOutputCoordinateMap = [
        { x: 74, y: 11 },  // 1* Item
        { x: 74, y: 29 },  // 1* Item
    ];
    if (recipeData.requireItem) {
        recipeData.requireItem.forEach((inputItem, index) => {
        const recipeCoordinate = itemInputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof inputItem === "string") {
            recipe.requireItem(inputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputItem === "object" && inputItem.item) {
                recipe.requireItem(inputItem.item, inputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceItem) {
    recipeData.produceItem.forEach((outputItem, index) => {
        const recipeCoordinate = itemOutputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof outputItem === "string") {
                recipe.produceItem(outputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputItem === "object" && outputItem.item) {
                recipe.produceItem(outputItem.item, outputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.requireEnergy) {
        recipe.requireEnergy(recipeData.requireEnergy, 0, 1 );
    }
    if (recipeData.requireEnergyPerTick) {
        recipe.requireEnergyPerTick(recipeData.requireEnergyPerTick, 0, 1 );
    }
    recipe.progressData(ProgressData.create().x(progressLocation.X).y(progressLocation.Y))
    recipe.width(jeiGui.width).height(jeiGui.height)
}
function blastFurnaceFunction(e,recipeData) {
    const recipe = e.recipes.modular_machinery_reborn.machine_recipe("techpack:blast_furnace", recipeData.processingTime);
    const progressLocation = { X: 47, Y: 2 }
    const jeiGui = { width: 96, height: 42 }
    const itemInputCoordinateMap = [
        { x: 6, y: 1 },  // 1* Item
        { x: 24, y: 1 },  // 2* Item
        { x: 6, y: 19 }, // 3* Item
        { x: 24, y: 19 }  // 4* Item
    ];
    const itemOutputCoordinateMap = [
        { x: 74, y: 1 },  // 1* Item
        { x: 74, y: 19 },  // 2* Item
    ];
    if (recipeData.requireItem) {
        recipeData.requireItem.forEach((inputItem, index) => {
        const recipeCoordinate = itemInputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof inputItem === "string") {
            recipe.requireItem(inputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputItem === "object" && inputItem.item) {
                recipe.requireItem(inputItem.item, inputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceItem) {
    recipeData.produceItem.forEach((outputItem, index) => {
        const recipeCoordinate = itemOutputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof outputItem === "string") {
                recipe.produceItem(outputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputItem === "object" && outputItem.item) {
                recipe.produceItem(outputItem.item, outputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    recipe.progressData(ProgressData.create().x(progressLocation.X).y(progressLocation.Y))
    recipe.width(jeiGui.width).height(jeiGui.height)
}
function largeReactionChamber(e,recipeData) {
    const recipe = e.recipes.modular_machinery_reborn.machine_recipe("techpack:large_reaction_chamber", recipeData.processingTime);
    const progressLocation = { X: 49, Y: 2 }
    const jeiGui = { width: 96, height: 56 }
    const fluidInputCoordinateMap = [
        { x: 26, y: 1 },   // 1* Fluido
        { x: 26, y: 19 },  // 2* Fluido
    ];
    const fluidOutputCoordinateMap = [
        { x: 76, y: 1 },  // 1* Fluido
        { x: 76, y: 19 }, // 2* Fluido
    ];
    if (recipeData.requireFluid) {
        recipeData.requireFluid.forEach((inputFluid, index) => {
            const recipeCoordinate = fluidInputCoordinateMap[index]
            if (recipeCoordinate) {
                if (typeof inputFluid === "string") {
                recipe.requireFluid(inputFluid, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputFluid === "object" && inputFluid.item) {
                recipe.produceItem(inputFluid.item, inputFluid.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceFluid) {
        recipeData.produceFluid.forEach((outputFluid, index) => {
            const recipeCoordinate = fluidOutputCoordinateMap[index]
            if (recipeCoordinate) {
                if (typeof outputFluid === "string") {
                recipe.produceFluid(outputFluid, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputFluid === "object" && outputFluid.item) {
                recipe.produceFluid(outputFluid.item, outputFluid.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.requireEnergy) {
        recipe.requireEnergy(recipeData.requireEnergy, 4, 1 );
    }
    if (recipeData.requireEnergyPerTick) {
        recipe.requireEnergyPerTick(recipeData.requireEnergyPerTick, 0, 1 );
    }
    recipe.progressData(ProgressData.create().x(progressLocation.X).y(progressLocation.Y))
    recipe.width(jeiGui.width).height(jeiGui.height)
}
function pyrolyseOvenFunction(e,recipeData) {
    const recipe = e.recipes.modular_machinery_reborn.machine_recipe("techpack:pyrolyse_oven", recipeData.processingTime);
    const progressLocation = { X: 49, Y: 2 }
    const jeiGui = { width: 96, height: 56 }
    const itemInputCoordinateMap = [
        { x: 26, y: 1 },   // 1* Item
    ];
    const itemOutputCoordinateMap = [
        { x: 76, y: 1 },  // 1* Item
        { x: 76, y: 19 }, // 2* Item
    ];
    const fluidOutputCoordinateMap = [
        { x: 76, y: 37 },  // 1* Fluido
    ];
    if (recipeData.requireItem) {
        recipeData.requireItem.forEach((inputItem, index) => {
        const recipeCoordinate = itemInputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof inputItem === "string") {
            recipe.requireItem(inputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputItem === "object" && inputItem.item) {
                recipe.requireItem(inputItem.item, inputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceItem) {
    recipeData.produceItem.forEach((outputItem, index) => {
        const recipeCoordinate = itemOutputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof outputItem === "string") {
                recipe.produceItem(outputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputItem === "object" && outputItem.item) {
                recipe.produceItem(outputItem.item, outputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceFluid) {
        recipeData.produceFluid.forEach((outputFluid, index) => {
            const recipeCoordinate = fluidOutputCoordinateMap[index]
            if (recipeCoordinate) {
                if (typeof outputFluid === "string") {
                recipe.produceFluid(outputFluid, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputFluid === "object" && outputFluid.item) {
                recipe.produceFluid(outputFluid.item, outputFluid.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.requireEnergy) {
        recipe.requireEnergy(recipeData.requireEnergy, 4, 1 );
    }
    if (recipeData.requireEnergyPerTick) {
        recipe.requireEnergyPerTick(recipeData.requireEnergyPerTick, 0, 1 );
    }
    recipe.progressData(ProgressData.create().x(progressLocation.X).y(progressLocation.Y))
    recipe.width(jeiGui.width).height(jeiGui.height)
}
function freezerFunction(e,recipeData) {
    const recipe = e.recipes.modular_machinery_reborn.machine_recipe("techpack:freezer", recipeData.processingTime);
    const progressLocation = { X: 49, Y: 17 }
    const jeiGui = { width: 96, height: 56 }
    const itemInputCoordinateMap = [
        { x: 26, y: 8 },   // 1* Item
    ];
    const itemOutputCoordinateMap = [
        { x: 76, y: 16 },  // 1* Fluido
    ];
    const fluidInputCoordinateMap = [
        { x: 26, y: 26 },  // 1* Fluido
    ];
    if (recipeData.requireItem) {
        recipeData.requireItem.forEach((inputItem, index) => {
        const recipeCoordinate = itemInputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof inputItem === "string") {
            recipe.requireItem(inputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputItem === "object" && inputItem.item) {
                recipe.requireItem(inputItem.item, inputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceItem) {
    recipeData.produceItem.forEach((outputItem, index) => {
        const recipeCoordinate = itemOutputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof outputItem === "string") {
                recipe.produceItem(outputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputItem === "object" && outputItem.item) {
                recipe.produceItem(outputItem.item, outputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.requireFluid) {
        recipeData.requireFluid.forEach((inputFluid, index) => {
            const recipeCoordinate = fluidInputCoordinateMap[index]
            if (recipeCoordinate) {
                if (typeof inputFluid === "string") {
                recipe.requireFluid(inputFluid, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputFluid === "object" && inputFluid.item) {
                recipe.produceItem(inputFluid.item, inputFluid.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.requireEnergy) {
        recipe.requireEnergy(recipeData.requireEnergy, 4, 1 );
    }
    if (recipeData.requireEnergyPerTick) {
        recipe.requireEnergyPerTick(recipeData.requireEnergyPerTick, 0, 1 );
    }
    recipe.progressData(ProgressData.create().x(progressLocation.X).y(progressLocation.Y))
    recipe.width(jeiGui.width).height(jeiGui.height)
}
function rusticOvenFunction(e,recipeData) {
    const recipe = e.recipes.modular_machinery_reborn.machine_recipe("techpack:rustic_oven", recipeData.processingTime);
    const progressLocation = { X: 47, Y: 2 }
    const jeiGui = { width: 96, height: 42 }
    const itemInputCoordinateMap = [
        { x: 6, y: 1 },  // 1* Item
        { x: 24, y: 1 },  // 2* Item
        { x: 6, y: 19 }, // 3* Item
        { x: 24, y: 19 }  // 4* Item
    ];
    const itemOutputCoordinateMap = [
        { x: 74, y: 1 },  // 1* Item
        { x: 74, y: 19 },  // 2* Item
    ];
    if (recipeData.requireItem) {
        recipeData.requireItem.forEach((inputItem, index) => {
        const recipeCoordinate = itemInputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof inputItem === "string") {
            recipe.requireItem(inputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof inputItem === "object" && inputItem.item) {
                recipe.requireItem(inputItem.item, inputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    if (recipeData.produceItem) {
    recipeData.produceItem.forEach((outputItem, index) => {
        const recipeCoordinate = itemOutputCoordinateMap[index]
        if (recipeCoordinate) {
            if (typeof outputItem === "string") {
                recipe.produceItem(outputItem, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputItem === "object" && outputItem.item) {
                recipe.produceItem(outputItem.item, outputItem.chance, recipeCoordinate.x, recipeCoordinate.y);
            }
        }
    });
    }
    recipe.progressData(ProgressData.create().x(progressLocation.X).y(progressLocation.Y))
    recipe.width(jeiGui.width).height(jeiGui.height)
}