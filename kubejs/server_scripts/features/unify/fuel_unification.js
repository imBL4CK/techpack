ServerEvents.recipes((e) => {
  
  const fuel = [
    {
      fluid: "tfmg:diesel",
      burnTime: 36000,
      temperature: 27,
      smeltery: { smeltingDuration: 300, rate: 30, temperature: 2200 },
    },
    {
      fluid: "tfmg:kerosene",
      burnTime: 28800,
      temperature: 27,
      smeltery: { smeltingDuration: 250, rate: 25, temperature: 2000 },
    },
    {
      fluid: "tfmg:gasoline",
      burnTime: 14400,
      temperature: 27,
      smeltery: { smeltingDuration: 200, rate: 20, temperature: 1700 },
    },
    {
      fluid: "tmfg:lpg",
      burnTime: 9600,
      temperature: 27,
      smeltery: { smeltingDuration: 150, rate: 15, temperature: 1500 },
    },
    {
      fluid: "pneumaticcraft:ethanol",
      burnTime: 9600,
      temperature: 27,
      smeltery: { smeltingDuration: 150, rate: 15, temperature: 1500 },
    },
    {
      fluid: "pneumaticcraft:biodiesel",
      burnTime: 28800,
      temperature: 27,
      smeltery: { smeltingDuration: 250, rate: 25, temperature: 2000 },
    },
  ];

  //Liquid Burning
  fuel.forEach((recipe) => {
    e.custom({
      type: "createaddition:liquid_burning",
      input: {
        fluid: recipe.fluid,
        amount: 1000,
      },
      burnTime: recipe.burnTime,
    });
  });

  //Heat Properties
  fuel.forEach((recipe) => {
    e.custom({
      type: "pneumaticcraft:heat_properties",

      block: recipe.fluid,

      temperature: recipe.temperature,

      thermalResistance: 1000,

      transformCold: {
        block: "minecraft:ice",
      },

      transformWarm: {
        block: "minecraft:air",
      },

      heatCapacity: 10000,
    });
  });

  //Smeltery Fuel
  fuel.forEach((recipe) => {
    e.custom({
      type: "tconstruct:melting_fuel",

      duration: recipe.smeltery.smeltingDuration,

      fluid: {
        amount: 50,

        fluid: recipe.fluid,
      },

      rate: recipe.smeltery.rate,

      temperature: recipe.smeltery.temperature,
    });
  });

  //Compression Dynamo
  fuel.forEach((recipe) => {
    e.custom({
      type: "tconstruct:melting_fuel",

      duration: recipe.smeltery.smeltingDuration,

      fluid: {
        amount: 50,

        fluid: recipe.fluid,
      },

      rate: recipe.smeltery.rate,

      temperature: recipe.smeltery.temperature,
    });
  });
});
