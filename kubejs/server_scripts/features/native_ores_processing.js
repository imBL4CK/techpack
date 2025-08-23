ServerEvents.recipes((e) => {
  let recipeId = "forbidden_arcanus:clibano_combustion/";

  const native = [
    {
        input: "kubejs:native_copper_cluster",
        output: "minecraft:copper_ingot",
        id: "techlab/native_copper_cluster"
    },
    {
        input: "kubejs:native_iron_cluster",
        output: "minecraft:iron_ingot",
        id: "techlab/native_iron_cluster"
    },
    {
        input: "kubejs:native_gold_cluster",
        output: "minecraft:gold_ingot",
        id: "techlab/native_gold_cluster"
    },
    {
        input: "kubejs:native_tin_cluster",
        output: "thermal:tin_ingot",
        id: "techlab/native_tin_cluster"
    },
    {
        input: "kubejs:native_nickel_cluster",
        output: "thermal:nickel_ingot",
        id: "techlab/native_nickel_cluster"
    },
    {
        input: "kubejs:native_silver_cluster",
        output: "thermal:silver_ingot",
        id: "techlab/native_silver_cluster"
    },
    {
        input: "kubejs:native_lead_cluster",
        output: "thermal:lead_ingot",
        id: "techlab/native_lead_cluster"
    },
    {
        input: "kubejs:native_zinc_cluster",
        output: "create:zinc_ingot",
        id: "techlab/native_zinc_cluster"
    },
    {
        input: "kubejs:native_redstone_cluster",
        output: "minecraft:redstone",
        id: "techlab/native_redstone_cluster"
    },
    {
        input: "kubejs:native_diamond_cluster",
        output: "minecraft:diamond",
        id: "techlab/native_diamond_cluster"
    },
    {
        input: "kubejs:native_cinnabar_cluster",
        output: "thermal:cinnabar",
        id: "techlab/native_cinnabar_cluster"
    }
  ];
  native.forEach((recipe) => {
    e.custom({
      type: "forbidden_arcanus:clibano_combustion",
      cooking_time: 300,
      experience: 0.5,
      ingredient: {
        item: recipe.input,
      },
      fire_type: "soul_fire",
      result: {
        item: recipe.output,
        count: 4
      },
    }).id(recipeId + recipe.id);
  });
});