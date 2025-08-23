ServerEvents.recipes((e) => {
  e.recipes.custommachinery.custom_machine("custommachinery:industrialrevival/hydro_engine", 60)
    .requireFluid(Fluid.of("ad_astra:hydrogen", 50))
    .produceSU(64, 64)
});
