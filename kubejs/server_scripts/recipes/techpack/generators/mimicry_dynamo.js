ServerEvents.recipes((e) => {
    e.recipes.custommachinery.custom_machine("techpack:mimicry_dynamo", 1200)
        .requireItem("#malum:aspected_spirits")
        .produceEnergyPerTick(50)
});
