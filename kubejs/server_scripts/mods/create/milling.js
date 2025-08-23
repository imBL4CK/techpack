ServerEvents.recipes(event =>{
    //Copper
    event.recipes.create.milling(
        ['#forge:dusts/copper'], ['#forge:ores/copper']
    );
    event.recipes.create.milling(
        ['#forge:dusts/copper'], ['#forge:raw_materials/copper']
    );
    //Iron
    event.recipes.create.milling(
        ['#forge:dusts/iron'], ['#forge:ores/iron']
    );
    event.recipes.create.milling(
        ['#forge:dusts/iron'], ['#forge:raw_materials/iron']
    );
    //Nickel
    event.recipes.create.milling(
        ['#forge:dusts/nickel'], ['#forge:ores/nickel']
    );
    event.recipes.create.milling(
        ['#forge:dusts/nickel'], ['#forge:raw_materials/nickel']
    );
    //Quartz Dust
    event.recipes.create.milling(
        ['#forge:dusts/quartz'], ['#forge:gems/quartz']
    );
})