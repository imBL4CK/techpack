ServerEvents.tags('item', event => {
event.add('forge:dusts/zinc', 'kubejs:zinc_dust'),
event.add('forge:plastic', 'tfmg:plastic_sheet'),
event.add('forge:plastic', 'pneumaticcraft:plastic'),
event.add('forge:dusts/sulfur','tfmg:sulfur_dust'),
event.add('forge:dusts', 'tfmg:sulfur_dust'),
event.add('forge:ingots/red_alloy', 'kubejs:red_alloy_ingot'),
event.add('forge:ingots', 'kubejs:red_alloy_ingot'),
//aluminium brass
event.add('forge:ingots/aluminum_brass', 'kubejs:aluminum_brass_ingot'),
event.add('forge:ingots', 'kubejs:aluminum_brass_ingot'),
event.add('forge:plates/aluminum_brass', 'kubejs:aluminum_brass_plate'), 
event.add('forge:plates', 'kubejs:aluminum_brass_plate'), 
//slag
event.add('forge:slag', 'tfmg:slag'),
//primitive tools
event.add('forge:tools/saw', 'kubejs:primitive_saw'),
event.add('forge:tools/hammer', 'kubejs:primitive_hammer'),
event.add('forge:tools/screwdriver', 'tfmg:screwdriver'),
event.add('forge:tools/wirecutter', 'kubejs:primitive_wirecutter'),
event.add('forge:tools/crowbar', 'kubejs:primitive_crowbar'),
//custom items
event.add('forge:plates/wooden', 'kubejs:wooden_board'),
event.add('forge:ingots', 'kubejs:draconium_ingot'),
event.add('forge:ingots/draconium', 'kubejs:draconium_ingot'),
event.add('forge:plates', 'kubejs:draconium_plate'),
event.add('forge:plates/draconium', 'kubejs:draconium_plate'),
event.add('forge:gears', 'kubejs:draconium_gear'),
event.add('forge:gears/draconium', 'kubejs:draconium_gear'),
event.add('forge:gears', 'kubejs:wooden_gear'),
event.add('forge:gears/wooden', 'kubejs:wooden_gear'),
//ferrous pewter 
event.add('forge:plates', 'kubejs:ferrous_pewter_plate'),
event.add('forge:plates/ferrous_pewter', 'kubejs:ferrous_pewter_plate'),
//Tier 1 circuits
event.add('techpack:circuits', 'kubejs:primitive_circuit'),
event.add('techpack:tier_1/circuits', 'kubejs:primitive_circuit'),
//red alloy plate
event.add('forge:plates', 'kubejs:red_alloy_plate'),
event.add('forge:plates/red_alloy', 'kubejs:red_alloy_plate'),
//Blue Alloy Wire
event.add('forge:wires', 'kubejs:blue_alloy_wire'),
event.add('forge:wires/blue_alloy', 'kubejs:blue_alloy_wire'),
//Red Alloy Wire
event.add('forge:wires', 'kubejs:red_alloy_wire'),
event.add('forge:wires/red_alloy', 'kubejs:red_alloy_wire')
//Pewter Plate
event.add('forge:plates', 'kubejs:pewter_plate'),
event.add('forge:plates/pewter', 'kubejs:pewter_plate')
//Red Alloy Gear
event.add('forge:gears', 'kubejs:red_alloy_gear'),
event.add('forge:gears/red_alloy', 'kubejs:red_alloy_gear')
//Aluminium Plate
event.add('forge:plates/aluminum', 'kubejs:aluminum_plate')
event.add('forge:plates', 'kubejs:aluminum_plate')
//Primitive Wrench
event.add('forge:tools', 'primitive_wrench')
event.add('forge:tools/wrench', 'primitive_wrench')
//Basic Tools
event.add('forge:tools/saw', 'kubejs:basic_saw'),
event.add('forge:tools/hammer', 'kubejs:basic_hammer'),
event.add('forge:tools/wirecutter', 'kubejs:basic_wirecutter'),
event.add('forge:tools/crowbar', 'kubejs:basic_crowbar')
//deorum dust
event.add('forge:dusts/deorum', 'kubejs:deorum_dust')
//Ferrous Pewter ingot
event.add('forge:ingots', 'kubejs:ferrous_pewter_ingot')
event.add('forge:ingots/ferrous_pewter', 'kubejs:ferrous_pewter_ingot')
//Ferrous Pewter nugget
event.add('forge:nuggets', 'kubejs:ferrous_pewter_nugget')
event.add('forge:nuggets/ferrous_pewter', 'kubejs:ferrous_pewter_nugget')
//red alloy plate
event.add('forge:plates', 'kubejs:blue_alloy_plate'),
event.add('forge:plates/blue_alloy', 'kubejs:blue_alloy_plate')
//Ferrous Pewter Plate
event.add('forge:plates', 'kubejs:ferrous_pewter_plate'),
event.add('forge:plates/ferrous_pewter', 'kubejs:ferrous_pewter_plate')
//Arcanite alloy ingots
event.add('forge:ingots', 'kubejs:arcanite_alloy_ingot'),
event.add('forge:ingots/arcanite_alloy', 'kubejs:arcanite_alloy_ingot')
//Arcanite alloy plates
event.add('forge:plates', 'kubejs:arcanite_alloy_plate'),
event.add('forge:plates/arcanite_alloy', 'kubejs:arcanite_alloy_plate')
//Arcanite alloy gears
event.add('forge:gears', 'kubejs:arcanite_alloy_gears'),
event.add('forge:gears/arcanite_alloy', 'kubejs:arcanite_alloy_gears')
//Redstone Alloy (EnderIO)
event.add('forge:ingots/red_alloy', 'enderio:redstone_alloy_ingot')
//Redstone Alloy (EnderIO)
event.add('forge:plates/dark_steel', 'kubejs:dark_steel_plate')
//Aluminium Plate
event.add('forge:gears/aluminum_brass', 'kubejs:aluminum_brass_gear')
event.add('forge:gears', 'kubejs:aluminum_brass_gear')
//Aluminium Plate
event.add('forge:ingots', 'kubejs:awakened_draconium_ingot')
event.add('forge:ingots/draconium_awakened', 'kubejs:awakened_draconium_ingot')
});
ServerEvents.tags('item', e => {
    const addTags = [
    //Draconium
    {
    item: 'kubejs:awakened_draconium_ingot',
    tag: 'forge:ingots'
    },
    {
    item: 'kubejs:awakened_draconium_ingot',
    tag: 'forge:ingots/draconium_awakened'
    },
    //Machine Parts
    {
    item: 
    [
        'kubejs:makeshift_mechanism', 
        'createaddition:capacitor', 
        'create_things_and_misc:vibration_mechanism', 
        'kubejs:thermo_mechanism', 
        'kubejs:engine_mechanism', 
        'createaddition:capacitor', 
        'railcraft:charge_motor', 
        'railcraft:charge_coil', 
        'createdieselgenerators:engine_piston',
        'thermal:rf_coil', 
        'kubejs:makeshift_mechanism',
        'create_things_and_misc:vibration_mechanism', 
        'create:precision_mechanism', 
        'tfmg:steel_mechanism', 
        'kubejs:engine_mechanism',
        'kubejs:primitive_circuit',
        'kubejs:thermo_mechanism',
        'pneumaticcraft:printed_circuit_board'
    ],
    tag: 'techpack:machine_parts'
    },
    //Bitumen
    {
    item: 'tfmg:bitumen',
    tag: 'forge:bitumen'
    },
    //Fireproof Bricks
    {
    item: 'tfmg:fireproof_brick',
    tag: 'forge:ingots/brick'
    },
    //Coal Coke
    {
    item: 'tfmg:coal_coke',
    tag: 'forge:coal_coke'
    },
    //Coating Types
    {
    item: ['kubejs:bio_plastic_mesh', 'pneumaticcraft:plastic', 'thermal:cured_rubber'],
    tag: 'techpack:coating_types'
    }
    ];
    addTags.forEach((addTag) => {
        e.add(addTag.tag, addTag.item);
    })
})