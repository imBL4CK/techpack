 StartupEvents.registry('block', event => {
//Dry Ice
event.create('dry_ice')
.displayName('dry_ice')
//Primitive Machine Casing
event.create('primitive_machine_casing')
.displayName('Primitive Machine Casing')
.model('kubejs:block/primitive_machine_casing')
.soundType('metal')
.renderType('cutout')
.notSolid()
.transparent(true)  
//EBF Bricks
event.create('ebf_bricks')
.displayName('Electric Blast Furnace Bricks')
.soundType('metal')
.model('kubejs:block/ebf_bricks')
})