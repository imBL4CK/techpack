ServerEvents.recipes(event =>{
    //Charge Coil
    event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
        {
        type: "pneumaticcraft:stacked_item",
        tag: "forge:wires/copper",
        count: 3
        },
        {
        type: "pneumaticcraft:stacked_item",
        tag: "forge:plates/iron",
        count: 3
        }
    ],
    pressure: 1,
    results: [
        {
        item: "railcraft:charge_coil"
        }
    ]
    })
    //Engine Piston
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
            item: "create:andesite_alloy",
            },
            {
            tag: "forge:rods/iron"
            },
            {
            tag: "forge:nuggets/zinc"
            }   
        ],
        pressure: 1,
        results: [
            {
            item: "createdieselgenerators:engine_piston",
            count: 3
            }
    ]
    })
    //Charge Motor
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
            tag: "forge:ingots/steel",
            },
            {
            tag: "forge:plates/tin"
            },
            {
            item: "railcraft:charge_coil"
            },
            {
            item: "railcraft:charge_terminal"
            }  
        ],
        pressure: 1,
        results: [
            {
            item: "railcraft:charge_motor",
            count: 2
            }
    ]
    })
    //Capacitor
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
            tag: "forge:plates/copper",
            },
            {
            tag: "forge:plates/zinc"
            },
            {
            item: "minecraft:redstone_torch"
            }   
        ],
        pressure: 1,
        results: [
            {
            item: "createaddition:capacitor",
            count: 1
            }
        ]
        })
    //Large Copper Plate
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
            type: "pneumaticcraft:stacked_item",
            count: 3,
            tag: "forge:plates/copper",
            }  
        ],
        pressure: 1,
        results: [
            {
            item: "kubejs:large_copper_plate",
            count: 1
            }
        ]
        })
    //Large Steel Plate
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
            type: "pneumaticcraft:stacked_item",
            count: 3,
            tag: "forge:plates/steel",
            }  
        ],
        pressure: 1,
        results: [
            {
            item: "kubejs:large_steel_plate",
            count: 1
            }
        ]
        })
    //Large aluminum Plate
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
            type: "pneumaticcraft:stacked_item",
            count: 3,
            tag: "forge:plates/aluminum",
            }  
        ],
        pressure: 1,
        results: [
            {
            item: "kubejs:large_aluminum_plate",
            count: 1
            }
        ]
        })
    //PCB
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
            tag: "forge:plastic"
            },
            {
            type: "pneumaticcraft:stacked_item",
            count: 4,
            item: "pneumaticcraft:capacitor",
            },
            {
            type: "pneumaticcraft:stacked_item",
            count: 4,
            item: "pneumaticcraft:transistor",
            },
            {
            item: "thermal:rf_coil",
            },
            {
            type: "pneumaticcraft:stacked_item",
            count: 4,
            tag: "forge:wires/red_alloy"
            },
            {
            type: "pneumaticcraft:stacked_item",
            count: 4,
            tag: "forge:wires/blue_alloy"
            },
            {
            item: "kubejs:primitive_circuit",
            },
        ],
        pressure: 1,
        results: [
            {
            item: "pneumaticcraft:empty_pcb",
            count: 1
            }
        ]
        })
})