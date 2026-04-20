//priority: 1000
function blockBuilderAPI(e,buildData) {
    // Build Method
    const buildMethod = e.create(buildData.id)
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
    if (buildData.texture) {
      buildMethod.texture(buildData.texture);
    }
    if (buildData.blockstates) {
      buildMethod.property(buildData.blockstates);
    }
    if (buildData.tags) {
      //Tag types
      if (buildData.tags.item) {
        buildMethod.tagItem(buildData.tags.item)
      };
      if (buildData.tags.block) {
        buildMethod.tagBlock(buildData.tags.block)
      };
      if (buildData.tags.both) {
        buildMethod.tagBoth(buildData.tags.both)
      };
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