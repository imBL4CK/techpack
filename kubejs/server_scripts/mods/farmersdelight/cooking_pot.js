ServerEvents.recipes(event => {
    event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "tag": "forge:dusts/salt"
      },
      {
        "item": "kubejs:aluminum_brass_reagent"
      }
    ],
    "recipe_book_tab": "drinks",
    "result": {
      "item": "kubejs:aluminum_brass_ingot"
    }
  }).id('farmersdelight:cooking/aluminum_brass_ingot');
  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "tag": "forge:dusts/salt"
      },
      {
        "item": "kubejs:arcanite_alloy_reagent"
      }
    ],
    "recipe_book_tab": "drinks",
    "result": {
      "item": "kubejs:arcanite_alloy_ingot"
    }
  }).id('farmersdelight:cooking/arcanite_alloy_ingot')
})