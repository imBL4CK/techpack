ServerEvents.recipes((e) => {
  
  let recipeId = "industrialforegoing:fluid_laser_drill/";

  e.custom({
    type: "industrialforegoing:laser_drill_fluid",
    catalyst: {
      item: "industrialforegoing:laser_lens15",
    },
    entity: "minecraft:empty",
    output: '{Amount:50,FluidName:"tfmg:crude_oil"}',
    pointer: 0,
    rarity: [
      {
        blacklist: {},
        depth_max: 60,
        depth_min: 20,
        weight: 8,
        whitelist: {
          type: "minecraft:worldgen/biome",
          values: [
            "minecraft:desert",
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_frozen_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:warm_ocean",
          ],
        },
      },
    ],
  }).id(`${recipeId}tfmg/oil`);;
});
