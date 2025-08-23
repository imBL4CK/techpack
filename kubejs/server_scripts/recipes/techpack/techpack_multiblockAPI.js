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
                recipe.requireFluid(outputFluid, recipeCoordinate.x, recipeCoordinate.y);
            } else if (typeof outputFluid === "object" && outputFluid.item) {
                recipe.produceItem(outputFluid.item, outputFluid.chance, recipeCoordinate.x, recipeCoordinate.y);
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
    if (recipeData.requireDimension) {
        recipe.dimensions(recipeData.requireDimension );
    }
    recipe.progressX(progressLocation.X).progressY(progressLocation.Y)
    recipe.width(jeiGui.width).height(jeiGui.height)
}