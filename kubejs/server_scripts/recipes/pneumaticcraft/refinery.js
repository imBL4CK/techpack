ServerEvents.recipes((e) => {
  
  let recipeId = ["pneumaticcrafto:refinery/"];

  //BioPlastic From LPG
  e.custom({
    type: "pneumaticcraft:refinery",
    input: {
      type: "pneumaticcraft:fluid",
      amount: 10,
      fluid: "kubejs:wood_tar",
    },
    results: [
      {
        amount: 5,
        fluid: "thermal:creosote",
      },
      {
        amount: 5,
        fluid: "kubejs:benzene",
      },
    ],
    temperature: {
      min_temp: 373,
    },
  }).id(`${recipeId}techlab/benzene_and_creosote_from_wood_tar`);
});
