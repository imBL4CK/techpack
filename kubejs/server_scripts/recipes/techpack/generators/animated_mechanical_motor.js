ServerEvents.recipes((e) => {
    e.recipes.custommachinery.custom_machine("techpack:animated_mechanical_motor", 1200)
        .requireItem("#malum:aspected_spirits")
        .produceSU(64, 64)
});
