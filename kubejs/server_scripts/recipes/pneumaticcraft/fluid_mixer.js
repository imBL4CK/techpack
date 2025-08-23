ServerEvents.recipes((e) => {

  let recipeId = ["pneumaticcraft:fluid_mixer/"];

  //BioPlastic From LPG
  e.custom({
    type: "pneumaticcraft:fluid_mixer",
    input1: {
      type: "pneumaticcraft:fluid",
      amount: 100,
      fluid: "tfmg:ethylene",
    },
    input2: {
      type: "pneumaticcraft:fluid",
      amount: 100,
      fluid: "minecraft:water",
    },
    fluid_output: {
      amount: 200,
      fluid: "tfmg:cooling_fluid",
    },
    pressure: 0.5,
    time: 20,
  }).id(`${recipeId}tfmg/cooling_fluid`);
});
