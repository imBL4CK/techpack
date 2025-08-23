ServerEvents.recipes(event => {
    event.recipes.thermal.crucible(
    'kubejs:ferrous_pewter_ingot',
    [Fluid.of('kubejs:ice_coolant', 100), 'kubejs:hot_ferrous_pewter_ingot']
    )
 })