ServerEvents.recipes(event => {
//Logistical Machines
    let logistical_id =
    [
        'create:linked_controller',
        'create:analog_lever',
        'create:pulse_repeater',
        'create:pulse_extender',
        'create:powered_latch',
        'create:powered_toggle_latch',
        'createaddition:redstone_relay',
        'minecraft:repeater',
        'minecraft:comparator',
        'morered:bitwise_xnor_gate',
        'morered:bitwise_xor_gate',
        'morered:bitwise_and_gate',
        'morered:bitwise_or_gate',
        'morered:bitwise_not_gate',
        'morered:bitwise_diode',
        'morered:nand_2_gate',
        'morered:and_2_gate',
        'morered:multiplexer',
        'morered:xnor_gate',
        'morered:xor_gate',
        'morered:and_gate',
        'morered:or_gate',
        'morered:nand_gate',
        'morered:nor_gate',
        'morered:not_gate',
        'morered:diode',
        'morered:redwire_post_relay_plate',
        'morered:redwire_post_plate',
        'morered:redwire_post',
        'morered:pulse_gate',
        'morered:latch',
        'morered:hexidecrubrometer'
    ]
logistical_id.forEach(function(logistical) {
    var craft = {
            "type": "minecraft:stonecutting",
            "ingredient": {
              "item": "kubejs:logistic_machine"
            },
            "result": logistical,
            "count": 1
    };
  event.custom(craft);
})
//Redstone Link StandAlone
event.stonecutting('2x create:redstone_link', 'kubejs:logistic_machine')
//Tfmg Screw
event.stonecutting('tfmg:screw', '#forge:ingots/iron')
})
