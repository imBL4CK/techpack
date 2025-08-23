ServerEvents.recipes(event =>{
    event.custom({
        "type":"createaddition:rolling",
        "input": {
                "tag": "forge:plates/red_alloy"
        },
        "result": {
            "item": "kubejs:red_alloy_wire",
            "count": 2
        }
    });
    event.custom({
        "type":"createaddition:rolling",
        "input": {
              "tag": "forge:plates/blue_alloy"
        },
        "result": {
            "item": "kubejs:blue_alloy_wire",
            "count": 2
    }
})
})