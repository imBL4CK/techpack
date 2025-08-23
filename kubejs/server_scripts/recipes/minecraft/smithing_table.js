ServerEvents.recipes((e) => {

  let recipeId = ["minecraft:smithing"];

  const recipes = [
    //Makeshift Mechanism
    {
      output: "kubejs:makeshift_mechanism",
      input1: "create:andesite_casing",
      input2: "create:large_cogwheel",
      input3: "kubejs:wooden_board",
      id: `${recipeId}techlab/makeshift_mechanism`
    },
    //Basic Hammer
    {
      output: "kubejs:basic_hammer",
      input1: "tfmg:steel_mechanism",
      input2: "kubejs:rustic_hammer",
      input3: "#forge:ingots/steel",
      id: `${recipeId}techlab/basic_hammer`,
    },
    //Basic Saw
    {
      output: "kubejs:basic_saw",
      input1: "tfmg:steel_mechanism",
      input2: "kubejs:rustic_saw",
      input3: "#forge:ingots/steel",
      id: `${recipeId}techlab/basic_saw`,
    },
    //Basic Wirecutter
    {
      output: "kubejs:basic_wirecutter",
      input1: "tfmg:steel_mechanism",
      input2: "kubejs:rustic_wirecutter",
      input3: "#forge:ingots/steel",
      id: `${recipeId}techlab/basic_wirecutter`,
    },
    //Bronze Backpack
    {
      output: "sophisticatedbackpacks:iron_backpack",
      input1: "tfmg:steel_mechanism",
      input2: "sophisticatedbackpacks:copper_backpack",
      input3: "#forge:ingots/bronze",
      id: `${recipeId}techlab/bronze_backpack`,
    },
    //Reinforced Helmet
    {
      output: "kubejs:reinforced_armor_helmet",
      input1: "tfmg:steel_mechanism",
      input2: "minecraft:iron_helmet",
      input3: "kubejs:advanced_alloy_ingot",
      id: `${recipeId}techlab/reinforced_armor_helmet`,
    },
    //Reinforced Chestplate
    {
      output: "kubejs:reinforced_armor_chestplate",
      input1: "tfmg:steel_mechanism",
      input2: "minecraft:iron_chestplate",
      input3: "kubejs:advanced_alloy_ingot",
      id: `${recipeId}techlab/reinforced_armor_chestplate`,
    },
    //Reinforced Leggings
    {
      output: "kubejs:reinforced_armor_leggings",
      input1: "tfmg:steel_mechanism",
      input2: "minecraft:iron_leggings",
      input3: "kubejs:advanced_alloy_ingot",
      id: `${recipeId}techlab/reinforced_armor_leggings`,
    },
    //Reinforced Boots
    {
      output: "kubejs:reinforced_armor_boots",
      input1: "tfmg:steel_mechanism",
      input2: "minecraft:iron_boots",
      input3: "kubejs:advanced_alloy_ingot",
      id: `${recipeId}techlab/reinforced_armor_boots`,
    },
  ];
  recipes.forEach((recipe) => {
    e.smithing(recipe.output, recipe.input1, recipe.input2, recipe.input3).id(
      recipe.id
    );
  });
});
ServerEvents.recipes((e) => {

  let recipeId = ["minecraft:smithing"];
  
  //Deployer using brass hand
  {
    e.smithing(
      "create:deployer",
      "create:andesite_casing",
      "kubejs:makeshift_mechanism",
      "create:brass_hand"
    ).id(recipeId + "deployer_using_brass_hand");
  }
  //Deployer Using Golden hand
  {
    e.smithing(
      "create:deployer",
      "create:andesite_casing",
      "kubejs:makeshift_mechanism",
      "kubejs:golden_hand"
    ).id(recipeId + "deployer_using_golden_hand");
  }
  //Mechanical Saw
  {
    e.smithing(
      "create:mechanical_saw",
      "create:andesite_casing",
      "kubejs:makeshift_mechanism",
      "thermal:saw_blade"
    ).id(recipeId + "mechanical_saw");
  }
  //Mechanical Press
  {
    e.smithing(
      "create:mechanical_press",
      "create:andesite_casing",
      "kubejs:makeshift_mechanism",
      "minecraft:iron_block"
    ).id(recipeId + "mechanical_press");
  }
  //Encased Fan
  {
    e.smithing(
      "create:encased_fan",
      "create:andesite_casing",
      "kubejs:makeshift_mechanism",
      "create:propeller"
    ).id(recipeId + "encased_fan");
  }
  //Mecahnical Drill
  {
    e.smithing(
      "create:mechanical_drill",
      "create:andesite_casing",
      "kubejs:makeshift_mechanism",
      "thermal:drill_head"
    ).id(recipeId + "mechanical_drill");
  }
  //Mechanical Mixer
  {
    e.smithing(
      "create:mechanical_mixer",
      "create:andesite_casing",
      "kubejs:makeshift_mechanism",
      "create:whisk"
    ).id(recipeId + "mechanical_mixer");
  }
  //Brass Funnel
  {
    e.smithing(
      "create:brass_funnel",
      "create:brass_casing",
      "create:precision_mechanism",
      "create:andesite_funnel"
    ).id(recipeId + "brass_funnel");
  }
  //Brass Tunnel
  {
    e.smithing(
      "create:brass_tunnel",
      "create:brass_casing",
      "create:precision_mechanism",
      "create:andesite_tunnel"
    ).id(recipeId + "brass_tunnel");
  }
  //Smart Chute
  {
    e.smithing(
      "create:smart_chute",
      "create:brass_casing",
      "create:precision_mechanism",
      "create:chute"
    ).id(recipeId + "smart_chute");
  }
  //Stockpile/Threshould Switch
  {
    e.smithing(
      "create:stockpile_switch",
      "create:brass_casing",
      "create:precision_mechanism",
      "kubejs:logistic_machine"
    ).id(recipeId + "stockpile_switch");
  }
  //Content Observer
  {
    e.smithing(
      "create:content_observer",
      "create:brass_casing",
      "create:precision_mechanism",
      "minecraft:observer"
    ).id(recipeId + "content_observer");
  }
  //Mechanical Arm
  {
    e.smithing(
      "create:mechanical_arm",
      "create:brass_casing",
      "create:precision_mechanism",
      "create:andesite_alloy"
    ).id(recipeId + "mechanical_arm");
  }
  //Rotation Speed Controller
  {
    e.smithing(
      "create:rotation_speed_controller",
      "create:brass_casing",
      "create:precision_mechanism",
      "create:large_cogwheel"
    ).id(recipeId + "rotation_speed_controller");
  }
  //Sequenced Gearshift
  {
    e.smithing(
      "create:sequenced_gearshift",
      "create:brass_casing",
      "create:precision_mechanism",
      "create:cogwheel"
    ).id(recipeId + "sequenced_gearshift");
  }
  //Rustic Hammer
  {
    e.smithing(
      "kubejs:rustic_hammer",
      "kubejs:makeshift_mechanism",
      "kubejs:primitive_hammer",
      "#forge:ingots/bronze"
    ).id(recipeId + "rustic_hammer");
  }
  //Rustic Saw
  e.smithing(
    "kubejs:rustic_saw",
    "kubejs:makeshift_mechanism",
    "kubejs:primitive_saw",
    "#forge:ingots/bronze"
  ).id(recipeId + "rustic_saw");
  //Rustic Wirecutter
  e.smithing(
    "kubejs:rustic_wirecutter",
    "kubejs:makeshift_mechanism",
    "kubejs:primitive_wirecutter",
    "#forge:ingots/bronze"
  ).id(recipeId + "rustic_wirecutter");
});