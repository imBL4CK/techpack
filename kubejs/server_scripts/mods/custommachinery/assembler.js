ServerEvents.recipes(event => {
  //Fluid Tank
  event.recipes.custommachinery.custom_machine("custommachinery:assembler", 200)
  .requireEnergy(10000)
  .requireItemTag('#forge:plates/copper', 2)
  .requireItem('2x thermal:cured_rubber')
  .requireItemTag('#forge:glass_panes')
  .produceItem('create:fluid_tank')
})