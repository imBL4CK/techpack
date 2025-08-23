ServerEvents.recipes((e) => {
  let recipeId = "minecraft:smelting/";

  let ores = [
    "tin",
    "nickel",
    "lead",
    "silver",
    "platinum"
  ]
  ores.forEach((recipe) => {
    e.smelting(`techpack:${recipe}_ingot`, `techpack:${recipe}_ore`).id(`${recipeId}${recipe}_ore`);
    e.smelting(`techpack:${recipe}_ingot`, `techpack:deepslate_${recipe}_ore`).id(`${recipeId}_deepslate_${recipe}_ore`);
    e.smelting(`techpack:${recipe}_ingot`, `techpack:raw_${recipe}`).id(`${recipeId}_raw_${recipe}`);
  });
});
