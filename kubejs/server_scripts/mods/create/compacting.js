ServerEvents.recipes(event => {
    event.recipes.create.compacting('thermal:rubber', [Fluid.of('minecraft:water', 25), Fluid.of('thermal:latex', 250)])
    event.recipes.create.compacting('eidolon:pewter_blend', ['#forge:ingots/lead', '#forge:ingots/iron'])
    event.recipes.create.compacting('tfmg:fireproof_brick', ['2x #forge:ingots/pewter', '2x tfmg:fireclay_ball'])
    event.recipes.create.compacting('create_new_age:blank_circuit', ['#forge:plates/iron', 'minecraft:redstone', '#forge:dusts/quartz']).heated()
    //Molten Copper
    event.recipes.create.compacting(
        [Fluid.of('embers:molten_copper', 90)], ['#forge:ingots/copper']
    ).heated()
    //Large Copper Plate
    event.recipes.create.compacting(
       'kubejs:large_copper_plate', 
      ['4x #forge:plates/copper']).heated()
    //Large Steel Plate
    event.recipes.create.compacting(
       'kubejs:large_steel_plate', 
      ['4x #forge:plates/steel']).heated()
    //Large Aluminum Plate
    event.recipes.create.compacting(
       'kubejs:large_aluminum_plate', 
      ['4x #forge:plates/aluminum']).heated()
    //Molten Red Alloy to Red Alloy ingot
    event.recipes.create.compacting(
      ['#forge:ingots/red_alloy'], [Fluid.of('kubejs:molten_red_alloy', 90)]
  ).heated()
})
ServerEvents.recipes(e =>{
  let recipeId = ['create:compacting']
  const recipes = [
      //Bio-Plastic
      {
      output: 'kubejs:bio_plastic_mesh',
      input: [Item.of('kubejs:bio_plastic', 4)],
      id: recipeId+'bio_plastic_mesh'
      }
    ];
    recipes.forEach((recipe) => {
      e.recipes.create.compacting(recipe.output, recipe.input).id(recipe.id);
})
})