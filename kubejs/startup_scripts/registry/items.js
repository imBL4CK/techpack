// ╭— 📌 Ideias

//Insulated Foil

//Items
StartupEvents.registry('item', event =>{
  //Tools

//Primitive Saw
    event.create('primitive_saw', 'axe')
    .displayName('Primitive Saw')
    .maxStackSize(1)
    .tier ('iron',)
    .maxDamage(80)
    .attackDamageBaseline(1)
//Primitive Hammer
    event.create('primitive_hammer', 'pickaxe')
    .displayName('Primitive Hammer')
    .maxStackSize(1)
    .tier ('stone',)
    .maxDamage(80)
    .attackDamageBaseline(1)

//Primitive Wirecutter
    event.create('primitive_wirecutter','sword')
    .displayName('Primitive Wirecutter')
    .maxStackSize(1)
    .tier ('wooden',)
    .maxDamage(80)
    .attackDamageBaseline(1)

//Primitive Crowbar
    event.create('primitive_crowbar','sword')
    .displayName('Primitive Crowbar')
    .maxStackSize(1)
    .tier ('wooden',)
    .maxDamage(80)
    .attackDamageBaseline(1)
//Basic Saw (Steel Tier)
    event.create('basic_saw', 'axe')
    .displayName('Basic Saw')
    .maxStackSize(1)
    .tier ('iron',)
    .maxDamage(316)
    .attackDamageBaseline(1)
//Basic Hammer (Steel Tier)
    event.create('basic_hammer', 'pickaxe')
    .displayName('Basic Hammer')
    .maxStackSize(1)
    .tier ('iron',)
    .maxDamage(316)
    .attackDamageBaseline(1)
//Basic Wirecutter (Steel Tier)
    event.create('basic_wirecutter','sword')
    .displayName('Basic Wirecutter')
    .maxStackSize(1)
    .tier ('iron',)
    .maxDamage(316)
    .attackDamageBaseline(1)
//Basic Crowbar (Steel Tier)
    event.create('basic_crowbar','sword')
    .displayName('Basic Crowbar')
    .maxStackSize(1)
    .tier ('iron',)
    .maxDamage(316)
    .attackDamageBaseline(1)

  // Mechanism

//Makesift Mecanism
event.create('makeshift_mechanism')
.displayName('Makeshift Mechanism')
//Engine Mechanism
event.create('engine_mechanism')
.displayName('Engine Mechanism')
//Thermo Mechanism
event.create('thermo_mechanism')
.displayName('Thermo Mechanism')
//Circuit Mechanism
event.create('circuit_mechanism')
.displayName('Circuit Mechanism')
//Commum Techcoin
event.create('commum_techcoin')
.displayName('Commum Techcoin')
.rarity('common')
//Uncommum Techcoin
event.create('uncommum_techcoin')
.displayName('Uncommum Techcoin')
.rarity('uncommon')
//Rare Techcoin
event.create('rare_techcoin').displayName('Rare Techcoin')
.rarity('rare')
//Legendary Techcoin
event.create('legendary_techcoin').displayName('Legendary Techcoin')
.rarity('legendary')
//Golden Hand
event.create('golden_hand').displayName('Golden Hand')
//Wooden Gear
event.create('wooden_gear').displayName('Wooden Gear')
//Wooden Board
event.create('wooden_board').displayName('Wooden Board')
//Zinc Dust
event.create('zinc_dust').displayName('Zinc Dust')  
//Hot Ferrous pewter
event.create('hot_ferrous_pewter_ingot')
.displayName('Hot Ferrous Pewter Ingot')
//Ferrous pewter nugget
event.create('hot_ferrous_pewter_nugget')
.displayName('Hot Ferrous Pewter nugget')
//Conductive blend
event.create('conductive_blend')
.displayName('Conductive Blnd')
//Primitive Circuit
event.create('primitive_circuit')
.displayName('Primitive Circuit')
//Primitive Circuit Board
event.create('primitive_circuit_board')
.displayName('Primitive Circuit Board')
//Primitive IO Component
event.create('primitive_io_component')
.displayName('Primitive IO Component')
//Logistic Mechanism
event.create('logistic_machine')
.displayName('Logistic Machine')
//Pewter Plate
event.create('pewter_plate')
.displayName('Pewter Plate')
//Diamond Plate
event.create('diamond_plate')
.displayName('Diamond Plate')
//Arcane Runic Slate
event.create('empty_arcane_runic_slate')
.displayName('Arcane Runic Slate')
//Alloy Mixture
event.create('alloy_mixture')
.displayName('Alloy Mixture')
//Aluminum Plate
event.create('aluminum_plate')
.displayName('Aluminum Plate')
//Dark Steel Plate
event.create('dark_steel_plate')
.displayName('Dark Steel Plate')
//Arcanite Plate Scrap
event.create('arcanite_plate_scrap')
.displayName('Arcanite Plate Scrap ')

// -x-

//Copper Large Plating
event.create('large_copper_plate')
.displayName('Large Copper Plate')
//Steel Large Plating
event.create('large_steel_plate')
.displayName('Large Steel Plate')
//Aluminum Large Plating
event.create('large_aluminum_plate')
.displayName('Large Aluminum Plate')
//Large Steel Gear
event.create('large_steel_gear')
.displayName('Large Steel Gear')
//Deorum dust
event.create('deorum_dust')
.displayName('Deorum Dust')
//Deorum dust
event.create('dusk_world_crystal')
.displayName('Dusk World Crystal')
//Radiant Coil
event.create('radiant_coil')
.displayName('Radiant Coil')
.glow(true)
//Attachment Base
event.create('attachment_base')
.displayName('Attachment Base')
//Thermal Plug
event.create('thermal_plug')
.displayName('Thermal Plug')
//Crow Image
event.create('crow_image')
})
StartupEvents.registry('item', e =>{
let item = [
    'hdpe_sheet',
    'mercury',
    'chromatic_mix',
    'bio_plastic',
    'bio_plastic_mesh'
]
item.forEach((registry) =>{
e.create(registry)
})
})