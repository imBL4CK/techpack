ServerEvents.recipes(event =>{
    event.custom({
  "type": "railcraft:crusher",
  "ingredient": {
    "tag": "forge:plates/arcanite_alloy"
  },
  "outputs": [
    {
      "count": 1,
      "probability": 1.0,
      "result": {
        "item": "kubejs:arcanite_plate_scrap"
      }
    },
    {
      "count": 1,
      "probability": 0.1,
      "result": {
        "item": "kubejs:arcanite_plate_scrap"
      }
      }
  ]
    })
})