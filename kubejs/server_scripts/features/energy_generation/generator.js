ServerEvents.recipes((e) => {

  let machine = (e.recipes.custommachinery.custom_machine);

  machine("custommachinery:industrialrevival/generator", 20).produceEnergyPerTick(60).requireFuel();
});
