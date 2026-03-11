ServerEvents.recipes((e) => {
  const recipes = [
    "minecraft:cobblestone",
    "minecraft:stone",
    "minecraft:andesite",
    "minecraft:diorite",
    "minecraft:granite",
    "minecraft:calcite",
    "minecraft:tuff",
    "create:limestone",
    "create:scorchia",
    "create:scoria",
  ];
  recipes.forEach((recipe) => {
    e.recipes.custommachinery
      .custom_machine("techpack:inorganic_matter_generator", 200)
      .requireBlock("minecraft:lava", true, 1, 0, 1, -1, 0, -1)
      .requireBlock("minecraft:water", true, 1, 0, 1, -1, 0, -1)
      .requireItem(recipe).chance(0.0)
      .produceItem(recipe)
      .jei()
      .requireItem(recipe).chance(0.0)
      .produceItem(recipe)
      .info(info => info.tooltip("Requires water and lava nearby").item("minecraft:lava_bucket"))
  });
});