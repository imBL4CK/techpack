ServerEvents.recipes(event => {
  //Thermal Plug
    event.custom({
        "type": "railcraft:rolling",
        "key": {
          "p": {
            "tag": "forge:plates/steel"
          },
          "g": {
            "tag": "forge:gears/steel"
          },
          "s": {
            "item": "kubejs:arcanite_plate_scrap"
          }
        },
        "pattern": [
          "pgs",
          "   ",
          "   "
        ],
        "result": {
          "item": "kubejs:thermal_plug"
        }
        }).id('railcraft:rolling/thermal_plug')
})