ServerEvents.recipes((e) => {
  e.custom({
    type: "tconstruct:melting_fuel",
    duration: 200,
    fluid: {
      amount: 50,
      fluid: "thermal:refined_fuel",
    },
    rate: 15,
    temperature: 1750,
  });
  e.custom({
    type: "tconstruct:melting_fuel",
    duration: 300,
    fluid: {
      amount: 50,
      fluid: "kubejs:benzene",
    },
    rate: 15,
    temperature: 1000,
  });
});
