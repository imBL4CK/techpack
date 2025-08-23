ServerEvents.recipes((e) => {
  
  let recipeType = (e.recipes.create.mechanical_crafting)
  let recipeId = "create:mechanical_crafting/";

  const recipes = [
    //Surface Scanner
    {
      output: "tfmg:surface_scanner",
      pattern: ["SCS", "PAP", "MFM"],
      keys: {
        S: "#forge:plates/steel",
        C: "minecraft:compass",
        P: "#forge:plates/copper",
        A: "tfmg:steel_casing",
        M: "tfmg:steel_mechanism",
        F: "create:shaft",
      },
      id: "tfmg/surface_scanner",
    },
    //Pumpjack Crank
    {
      output: "tfmg:pumpjack_crank",
      pattern: ["SOS", "RHR", "MSM"],
      keys: {
        R: "tfmg:rebar",
        H: "tfmg:heavy_machinery_casing",
        S: "#forge:plates/steel",
        O: "quark:rope",
        M: "tfmg:steel_mechanism",
      },
      id: "tfmg/pumpjack_crank",
    },
    //Pumpjack Base
    {
      output: "tfmg:pumpjack_base",
      pattern: ["SRS", "MHM", "SIS"],
      keys: {
        R: "quark:rope",
        H: "tfmg:heavy_machinery_casing",
        S: "#forge:plates/steel",
        M: "tfmg:steel_mechanism",
        I: "tfmg:industrial_pipe",
      },
      id: "tfmg/pumpjack_base",
    },
    //Steel Distillation Output
    {
      output: "tfmg:steel_distillation_output",
      pattern: ["SPS", "IHI", "SMS"],
      keys: {
        S: "#forge:plates/steel",
        P: "tfmg:industrial_pipe",
        M: "tfmg:steel_mechanism",
        I: "tfmg:steel_pipe",
        H: "tfmg:heavy_machinery_casing",
      },
      id: "tfmg/steel_distillation_output",
    },
    //Steel Distillation Controller
    {
      output: "tfmg:steel_distillation_controller",
      pattern: ["SPS", "MDE", "SHS"],
      keys: {
        S: "#forge:plates/steel",
        P: "tfmg:industrial_pipe",
        M: "tfmg:steel_mechanism",
        D: "create:display_board",
        E: "create:precision_mechanism",
        H: "tfmg:heavy_machinery_casing",
      },
      id: "tfmg/steel_distillation_controller",
    },
    //TFMG Rotor
    {
      output: "tfmg:rotor",
      pattern: [
        " CCC ", 
        "CRAWC", 
        "CGSGC", 
        "CWARC", 
        " CCC "],
      keys: {
        C: "tfmg:copper_coil",
        R: "thermal:rf_coil",
        A: "kubejs:advanced_alloy_ingot",
        W: "#forge:wires/aluminum",
        G: "#forge:gears/bronze",
        S: "create:shaft"
      },
      id: "tfmg/rotor",
    },
  ];
  recipes.forEach((recipe) => {
    recipeType(recipe.output, recipe.pattern, recipe.keys).id(`${recipeId}${recipe.id}`);
  });
});
