ServerEvents.recipes((e) => {
  
  let recipeId = "industrialforegoing:dissolution_chamber/";

  const recipes = [
    //Simple Machine Frame
    {
      input: [
        {
          item: "kubejs:hdpe_sheet",
        },
        {
          tag: "industrialforegoing:machine_frame/pity",
        },
        {
          item: "kubejs:hdpe_sheet",
        },
        {
          item: "kubejs:energized_steel_plate",
        },
        {
          item: "kubejs:energized_steel_plate",
        },
        {
          item: "minecraft:nether_bricks",
        },
        {
          item: "pneumaticcraft:printed_circuit_board",
        },
        {
          item: "minecraft:nether_bricks",
        },
      ],
      fluid: '{Amount:500,FluidName:"industrialforegoing:latex"}',
      output: {
        count: 1,
        item: "industrialforegoing:machine_frame_simple",
      },
      time: 300,
      id: "industrial_foregoing/simple_machine_frame"
    },
    //Speed Modifier
    {
      input: [
        {
          item: "kubejs:modifier_base",
        },
        {
          tag: "forge:gears/lead",
        },
        {
          tag: "forge:ingots/red_alloy",
        },
        {
          item: "minecraft:sugar",
        },
      ],
      fluid: '{Amount:500,FluidName:"industrialforegoing:latex"}',
      output: {
        count: 1,
        item: "kubejs:speed_modifier",
      },
      time: 600,
      id: "techlab/speed_modifier"
    },
    //Energy Modifier
    {
      input: [
        {
          tag: "forge:gears/lead",
        },
        {
          item: "kubejs:modifier_base",
        },
        {
          item: "thermal:rf_coil",
        },
        {
          tag: "forge:plates/silver",
        },
      ],
      fluid: '{Amount:500,FluidName:"industrialforegoing:latex"}',
      output: {
        count: 1,
        item: "kubejs:energy_modifier",
      },
      time: 600,
      id: "techlab/energy_modifier"
    },
    //Fuel Efficiency Modifier
    {
      input: [
        {
          tag: "forge:gears/lead",
        },
        {
          item: "kubejs:modifier_base",
        },
        {
          item: "thermal:basalz_rod",
        },
        {
          tag: "forge:gems/cinnabar",
        },
      ],
      fluid: '{Amount:500,FluidName:"industrialforegoing:latex"}',
      output: {
        count: 1,
        item: "kubejs:fuel_efficiency_modifier",
      },
      time: 600,
      id: "techlab/fuel_efficiency_modifier"
    },
    //Luck Modifier
    {
      input: [
        {
          tag: "forge:gears/lead",
        },
        {
          item: "kubejs:modifier_base",
        },
        {
          item: "minecraft:lapis_lazuli",
        },
        {
          item: "thermal:xp_crystal",
        },
      ],
      fluid: '{Amount:500,FluidName:"industrialforegoing:latex"}',
      output: {
        count: 1,
        item: "kubejs:luck_modifier",
      },
      time: 600,
      id: "techlab/luck_modifier"
    },
    //White Lens
    {
      input: [
        {
          item: "kubejs:quicksilver",
        },
        {
          tag: "forge:glass_panes",
        },
        {
          tag: "forge:glass_panes",
        },
        {
          tag: "forge:glass_panes",
        },
        {
          tag: "forge:glass_panes",
        },
        {
          tag: "forge:dyes/white",
        },
      ],
      fluid: '{Amount:500,FluidName:"kubejs:molten_red_alloy"}',
      output: {
        count: 1,
        item: "industrialforegoing:laser_lens0",
      },
      time: 600,
      id: "industrialforegoing/white_lens"
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "industrialforegoing:dissolution_chamber",
      input: recipe.input,
      inputFluid: recipe.fluid,
      output: recipe.output,
      processingTime: recipe.time,
    }).id(`${recipeId}${recipe.id}`);
  });
});
