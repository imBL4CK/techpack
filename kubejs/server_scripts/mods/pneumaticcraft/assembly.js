ServerEvents.recipes(event =>{
    event.custom({
        type: "pneumaticcraft:assembly_laser",
        input: {
            type: "pneumaticcraft:stacked_item",
            count: 1,
            item: "kubejs:primitive_circuit_board"
        },
        program: "laser",
        result: {
            count: 1,
            item: "kubejs:primitive_circuit"
        }
    })
})