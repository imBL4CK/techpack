ServerEvents.recipes(event => {
    //Iron ore to Manganese
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_furnace", 200)
    .requireEnergy(1000)
    .requireItemTag('#forge:ores/iron')
    .produceItem(Item.of('#forge:ingots/iron', 2))
    .produceItem(Item.of('#forge:ingots/manganese')).chance(0.3)
    //Raw Iron to Manganese
    event.recipes.custommachinery.custom_machine("custommachinery:primitive_furnace", 200)
    .requireEnergy(1000)
    .requireItemTag('#forge:raw_materials/iron')
    .produceItem(Item.of('#forge:ingots/iron', 2))
    .produceItem(Item.of('#forge:ingots/manganese')).chance(0.3)
})
/*
onEvent('recipes', event => {
  const recipes = new Set()
  event.forEachRecipe([{type: 'minecraft:smelting'},{type: 'minecraft:smoking'},{type: 'minecraft:blasting'}], recipe => {
    addRecipe(recipe, recipes)
  })
  furnaces.forEach(furnace => {
    recipes.forEach(recipe => {
      if(!recipe[0].startsWith('#')) 
        item(recipe[0], recipe[1], furnace, event)
      else 
        tag(recipe[0], recipe[1], furnace, event)
    })
    item('mekanism:fluorite_ore', 'mekanism:fluorite_gem', furnace, event)
  })
})
function item(id, output, furnace, event){
  event.recipes.custommachinery.custom_machine(`iron_furnaces:${furnace.name}_furnace`, furnace.time).requireEnergyPerTick(furnace.consume).requireItem(Item.of(id), "input1").produceItem(output, "output1").jei()
}
function tag(id, output, furnace, event){ 
  event.recipes.custommachinery.custom_machine(`iron_furnaces:${furnace.name}_furnace`, furnace.time).requireEnergyPerTick(furnace.consume).requireItemTag(id, 1, "input1").produceItem(output, "output1").jei()
}
*/