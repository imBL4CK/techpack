ServerEvents.recipes((e) => {

  let recipeId = ["minecraft:shapeless/"];

  //Wooden Board
  {
    e.shapeless("4x kubejs:wooden_board", [
      { tag: "minecraft:planks" },
      { tag: "minecraft:planks" },
      { tag: "forge:tools/saw" },
    ])
      .damageIngredient("#forge:tools/saw", "2")
      .id(`${recipeId}techlabwooden_board`);
  }
  //Shaft
  {
    e.shapeless("4x create:shaft", [
      "create:andesite_alloy",
      "kubejs:primitive_saw",
    ])
      .damageIngredient("kubejs:primitive_saw", "4")
      .id(`${recipeId}create/shaft`);
  }    
  //Cogwheel
  {
    e.shapeless("create:cogwheel", [
      "create:shaft",
      { tag: "forge:gears/wood" },
      "kubejs:primitive_hammer",
      "kubejs:primitive_saw",
    ])
      .damageIngredient("kubejs:primitive_hammer", "2")
      .damageIngredient("kubejs:primitive_saw", "2")
      .id(`${recipeId}create/cogwheel`);
  }
  //Large Cogwheel From Little
  {
    e.shapeless("create:large_cogwheel", [
      "create:cogwheel",
      { tag: "forge:gears/wood" },
      "kubejs:primitive_saw",
      "kubejs:primitive_hammer",
    ])
      .damageIngredient("kubejs:primitive_hammer", "2")
      .damageIngredient("kubejs:primitive_saw", "2")
      .id(`${recipeId}create/large_cogwheel_from_little`);
  }
  //Large Cogwheel
  {
    e.shapeless("create:large_cogwheel", [
      "create:shaft",
      { tag: "forge:gears/wood" },
      { tag: "forge:gears/wood" },
      "kubejs:primitive_saw",
      "kubejs:primitive_hammer",
    ])
      .damageIngredient("kubejs:primitive_hammer", "2")
      .damageIngredient("kubejs:primitive_saw", "2")
      .id(`${recipeId}create/large_cogwheel`);
  }
  //Pressure Chamber Wall
  {
    e.shapeless("4x pneumaticcraft:pressure_chamber_wall", [
      "#forge:plates/invar",
      "pneumaticcraft:reinforced_bricks",
      "#forge:tools/hammer",
      "#forge:tools/saw",
    ])
      .damageIngredient("#forge:tools/hammer", "1")
      .damageIngredient("#forge:tools/saw", "1")
      .id(`${recipeId}pneumaticcraft/pressure_chamber_wall`);
  }  
  //Techlab Multiblocks convert Steel Ports
  {
    //MM Item Port Input to Output
    e.shapeless("mm:steel_item_port_output", ["mm:steel_item_port_input"]).id(
      `${recipeId}techlab_multiblocks/steel_item_port_input_to_output`
    );
    //MM Item Port Output to Input
    e.shapeless("mm:steel_item_port_input", ["mm:steel_item_port_output"]).id(
      `${recipeId}techlab_multiblocks/steel_item_port_output_to_input`
    );
    //MM Fluid Port Fluid to Output
    e.shapeless("mm:steel_fluid_port_output", ["mm:steel_fluid_port_input"]).id(
      `${recipeId}techlab_multiblocks/steel_fluid_port_input_to_output`
    );
    ///MM Fluid Port Output to Input
    e.shapeless("mm:steel_fluid_port_input", ["mm:steel_fluid_port_output"]).id(
      `${recipeId}techlab_multiblocks/steel_fluid_port_output_to_input`
    );
    //MM Energy Port Energy to Output
    e.shapeless("mm:steel_energy_port_output", ["mm:steel_energy_port_input"]).id(
      `${recipeId}techlab_multiblocks/steel_energy_port_input_to_output`
    );
    ///MM Energy Port Output to Input
    e.shapeless("mm:steel_energy_port_input", ["mm:steel_energy_port_output"]).id(
      `${recipeId}techlab_multiblocks/steel_energy_port_output_to_input`
    );
  }
  //Techlab Multiblocks convert Advanced Alloy Ports
  {
    //MM Item Port Input to Output
    e.shapeless("mm:advanced_alloy_item_port_output", ["mm:advanced_alloy_item_port_input"]).id(
      `${recipeId}techlab_multiblocks/advanced_alloy_item_port_input_to_output`
    );
    //MM Item Port Output to Input
    e.shapeless("mm:advanced_alloy_item_port_input", ["mm:advanced_alloy_item_port_output"]).id(
      `${recipeId}techlab_multiblocks/advanced_alloy_item_port_output_to_input`
    );
    //MM Fluid Port Fluid to Output
    e.shapeless("mm:advanced_alloy_fluid_port_output", ["mm:advanced_alloy_fluid_port_input"]).id(
      `${recipeId}techlab_multiblocks/advanced_alloy_fluid_port_input_to_output`
    );
    ///MM Fluid Port Output to Input
    e.shapeless("mm:advanced_alloy_fluid_port_input", ["mm:advanced_alloy_fluid_port_output"]).id(
      `${recipeId}techlab_multiblocks/advanced_alloy_fluid_port_output_to_input`
    );
    //MM Energy Port Energy to Output
    e.shapeless("mm:advanced_alloy_energy_port_output", ["mm:advanced_alloy_energy_port_input"]).id(
      `${recipeId}techlab_multiblocks/advanced_alloy_energy_port_input_to_output`
    );
    ///MM Energy Port Output to Input
    e.shapeless("mm:advanced_alloy_energy_port_input", ["mm:advanced_alloy_energy_port_output"]).id(
      `${recipeId}techlab_multiblocks/advanced_alloy_energy_port_output_to_input`
    );
  }
  //Andesite Alloy
  {
    e.shapeless("create:andesite_alloy", [
      "minecraft:andesite",
      "minecraft:andesite",
      "minecraft:clay_ball",
      "#forge:slag",
    ]).id(`${recipeId}create/andesite_alloy`);
  }
  //Bearing
  {
    e.shapeless("kubejs:bearing", [
      { tag: "forge:plates/copper" },
      { tag: "forge:tools/saw" },
    ])
      .damageIngredient("#forge:tools/saw", "2")
      .id(`${recipeId}techlab/bearing`);
  }
  //Techlab Multiblocks Steel Ports
  {
    //MM Advanced Alloy item output port
    e.shapeless("mm:advanced_alloy_item_port_output", ["mm:steel_item_port_output", "kubejs:advanced_alloy_plate"]).id(
      `${recipeId}techlab_multiblocks/advanced_alloy_item_port_output`
    );
    //MM Advanced Alloy item input port
    e.shapeless("mm:advanced_alloy_item_port_input", ["mm:steel_item_port_input", "kubejs:advanced_alloy_plate"]).id(
      `${recipeId}techlab_multiblocks/advanced_alloy_item_port_input`
    );
    //MM Advanced Alloy fluid output port
    e.shapeless("mm:advanced_alloy_fluid_port_output", ["mm:steel_fluid_port_output", "kubejs:advanced_alloy_plate"]).id(
      `${recipeId}techlab_multiblocks/advanced_alloy_fluid_port_output`
    );
    //MM Advanced Alloy fluid input port
    e.shapeless("mm:advanced_alloy_fluid_port_input", ["mm:steel_fluid_port_input", "kubejs:advanced_alloy_plate"]).id(
      `${recipeId}techlab_multiblocks/advanced_alloy_fluid_port_input`
    );
    //MM Advanced Alloy energy output port
    e.shapeless("mm:advanced_alloy_energy_port_output", ["mm:steel_energy_port_output", "kubejs:advanced_alloy_plate"]).id(
      `${recipeId}techlab_multiblocks/advanced_alloy_energy_port_output`
    );
    //MM Advanced Alloy energy input port
    e.shapeless("mm:advanced_alloy_energy_port_input", ["mm:steel_energy_port_input", "kubejs:advanced_alloy_plate"]).id(
      `${recipeId}techlab_multiblocks/advanced_alloy_energy_port_input`
    );
  }
});