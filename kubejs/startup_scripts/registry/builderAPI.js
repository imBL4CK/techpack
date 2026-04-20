function blockBuilderAPI(e,buildData) {
    // Build Method
    const buildMethod = e.create
    // Condiction Structure
    if (buildData.displayName) {
        buildMethod.displayName(buildData.displayName);
    }
    if (buildData.mapColor) {
        buildMethod.mapColor(buildData.mapColor);
    }
    if (buildData.soundType) {
        buildMethod.soundType(buildData.soundType);
    }
    if (buildData.blockstates) {
        buildMethod.property(buildData.blockstates);
    }
    if (buildData.tags) {
        //Loop in case there is more than one tag
        buildData.tags.forEach((entry) => {
        //Tag types
            if (buildData.tags.item) {
                buildMethod.tagItem(entry.item)
            };
            if (buildData.tags.block) {
                buildMethod.tagBlock(entry.block)
            };
            if (buildData.tags.both) {
                buildMethod.tagBoth(entry.both)
            };
        })
    }
    if (buildData.hardness) {
        buildMethod.hardness(buildData.hardness);
    }
    if (buildData.resistance) {
        buildMethod.resistance(buildData.resistance);
    }
    if (buildData.unbreakable) {
        buildMethod.unbreakable();
    }
    if (buildData.requiresTool) {
        buildMethod.requiresTool(true);
    }
    if (buildData.notSolid) {
        buildMethod.notSolid();
    }
    if (buildData.opaque) {
        buildMethod.opaque(true);
    }
    if (buildData.transparent) {
        buildMethod.transparent(true);
    }
    if (buildData.defaultCutout) {
        buildMethod.defaultCutout();
    }
    if (buildData.renderType) {
        buildMethod.renderType(buildData.renderType);
    }
    if (buildData.suffocating == false) {
        buildMethod.suffocating(false);
    }
    if (buildData.noValidSpawns) {
        buildMethod.noValidSpawns(true);
    }
    if (buildData.waterlogged) {
        buildMethod.waterlogged();
    }
}