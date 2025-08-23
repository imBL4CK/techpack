ServerEvents.recipes((e) => {

  let altBus = [
    "bus_tiny",
    "bus_small",
    "bus_normal",
  ]
  let altHatches = [
    "hatch_tiny",
    "hatch_small",
    "hatch_normal",
  ]
  altBus.forEach((craft) => {
    e.custom({
      type: "minecraft:crafting_shapeless",
      ingredients: [
        {
          item: `modular_machinery_reborn:input${craft}`,
        }
      ],
      result: {
        id: `modular_machinery_reborn:output${craft}`,
      },
    });
    e.custom({
      type: "minecraft:crafting_shapeless",
      ingredients: [
        {
          item: `modular_machinery_reborn:output${craft}`,
        }
      ],
      result: {
        id: `modular_machinery_reborn:input${craft}`,
      },
    });
  });
  altHatches.forEach((craft) => {
    e.custom({
      type: "minecraft:crafting_shapeless",
      ingredients: [
        {
          item: `modular_machinery_reborn:fluidinput${craft}`,
        }
      ],
      result: {
        id: `modular_machinery_reborn:fluidoutput${craft}`,
      },
    });
    e.custom({
      type: "minecraft:crafting_shapeless",
      ingredients: [
        {
          item: `modular_machinery_reborn:fluidoutput${craft}`,
        }
      ],
      result: {
        id: `modular_machinery_reborn:fluidinput${craft}`,
      },
    });
    e.custom({
      type: "minecraft:crafting_shapeless",
      ingredients: [
        {
          item: `modular_machinery_reborn:energyinput${craft}`,
        }
      ],
      result: {
        id: `modular_machinery_reborn:energyoutput${craft}`,
      },
    });
    e.custom({
      type: "minecraft:crafting_shapeless",
      ingredients: [
        {
          item: `modular_machinery_reborn:energyoutput${craft}`,
        }
      ],
      result: {
        id: `modular_machinery_reborn:energyinput${craft}`,
      },
    });
  });
});
