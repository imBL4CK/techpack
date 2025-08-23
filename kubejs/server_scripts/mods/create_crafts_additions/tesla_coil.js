ServerEvents.recipes(event => {
    //Overcharged Iron Ingot
    event.custom({
    "type":"createaddition:charging",
    "input": {
        "tag": "forge:ingots/iron",
        "count": 1
    },
    "result": {
        "item": "create_new_age:overcharged_iron",
        "count": 1
    },
    "energy": 1000,
    "maxChargeRate": 200
    })
    //Overcharged Iron Sheet
    event.custom({
    "type":"createaddition:charging",
	"input": {
      	"tag": "forge:plates/iron",
		"count": 1
	},
	"result": {
		"item": "create_new_age:overcharged_iron_sheet",
		"count": 1
	},
	"energy": 1000,
	"maxChargeRate": 200
    })
})