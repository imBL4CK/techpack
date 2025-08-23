StartupEvents.registry('item', e =>{
    var CustomMaterials = [
        "mica",
        "stainless_steel",
        "tungsten",
        "tungstensteel",
        "red_alloy",
        "blue_alloy",
        "aluminum_brass",
        "draconium",
        "awakened_draconium",
        "manganese",
        "arcanite_alloy",
        "orichalcum",
        "compressed_steel",
        "crystaline_pink_slime",
        "vivid_alloy",
        "energetic_silver",
        "crystalline_alloy",
        "crude_steel",
        "melodic_alloy",
        "ferrous_pewter",
        "osgloglas"
    ];
    let raw_materials = [
        'mica',
        'tungsten',
        'manganese',
        'orichalcum'
    ]
    //Ingots
    CustomMaterials.forEach((cRegistry) => {
    e.create(cRegistry+'_ingot').texture('kubejs:item/library/'+cRegistry+'_ingot')
    })
    //Nugget
    CustomMaterials.forEach((cRegistry) => {
    e.create(cRegistry+'_nugget').texture('kubejs:item/library/'+cRegistry+'_nugget')
    })
    //Plates
    CustomMaterials.forEach((cRegistry) => {
    e.create(cRegistry+'_plate').texture('kubejs:item/library/'+cRegistry+'_plate')
    })
    //Gears
    CustomMaterials.forEach((cRegistry) => {
    e.create(cRegistry+'_gear').texture('kubejs:item/library/'+cRegistry+ '_gear')
    })
    //Wire
    CustomMaterials.forEach((cRegistry) => {
    e.create(cRegistry+'_wire').texture('kubejs:item/library/'+cRegistry+ '_wire')
    })
    //Raw Materials
    raw_materials.forEach((raw) =>{
    e.create('raw_'+raw).texture('kubejs:item/library/raw_'+raw)
    })
})