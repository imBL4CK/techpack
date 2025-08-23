ServerEvents.recipes((e) => {

  let recipeId = "industrialforegoing:fluid_extractor/";

  //Menril
  e.custom({
    type: "industrialforegoing:fluid_extractor",
    breakChance: 0.01,
    defaultRecipe: false,
    input: {
      item: "integrateddynamics:menril_log",
    },
    output: '{Amount:4,FluidName:"integrateddynamics:menril_resin"}',
    result: "integrateddynamics:menril_log_stripped",
  }).id(`${recipeId}integrateddynamics/menril_resin`);

  //Liquid Sugar
  e.custom({
    type: "industrialforegoing:fluid_extractor",
    breakChance: 0.01,
    defaultRecipe: false,
    input: {
      item: "minecraft:sugar_cane",
    },
    output: '{Amount:4,FluidName:"kubejs:liquid_sugar"}',
    result: "minecraft:sugar_cane",
  }).id(`${recipeId}techlab/liquid_sugar`);

  //Liquid Soul
  e.custom({
    type: "industrialforegoing:fluid_extractor",
    breakChance: 0.01,
    defaultRecipe: false,
    input: {
      item: "minecraft:soul_sand",
    },
    output: '{Amount:4,FluidName:"tconstruct:liquid_soul"}',
    result: "minecraft:soul_sand",
  }).id(`${recipeId}tconstruct/liquid_soul`);
});
