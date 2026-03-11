ServerEvents.recipes((e) => {
  let concrete = [
    "white",
    "light_gray",
    "gray",
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "light_blue",
    "blue",
    "purple",
    "magenta",
    "pink"
  ]
  let altBus = ["bus_tiny", "bus_small", "bus_normal"];
  let altHatches = ["hatch_tiny", "hatch_small", "hatch_normal"];
  altBus.forEach((craft) => {
    e.custom({
      type: "minecraft:crafting_shapeless",
      ingredients: [
        {
          item: `modular_machinery_reborn:input${craft}`,
        },
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
        },
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
        },
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
        },
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
        },
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
        },
      ],
      result: {
        id: `modular_machinery_reborn:energyinput${craft}`,
      },
    });
  });
  concrete.forEach((color) => {
    e.custom({
      type: "minecraft:crafting_shapeless",
      ingredients: [
        {
          item: `minecraft:${color}_dye`,
        },
        {
          item: "techpack:slag",
        },
        {
          item: "techpack:slag",
        },
        {
          item: "techpack:sifted_sand",
        },
        {
          item: "techpack:sifted_sand",
        },
      ],
      result: {
        id: `minecraft:${color}_concrete_powder`,
        count: 8
      }
    });
  });
});
