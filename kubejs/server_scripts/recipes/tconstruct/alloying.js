ServerEvents.recipes((e) => {
  e.custom({
    type: "tconstruct:alloy",
    inputs: [
      {
        amount: 90,
        tag: "forge:molten_copper",
      },
      {
        amount: 360,
        fluid: "thermal:redstone",
      },
    ],
    result: {
      amount: 90,
      fluid: "kubejs:molten_red_alloy",
    },
    temperature: 820,
  });
});
