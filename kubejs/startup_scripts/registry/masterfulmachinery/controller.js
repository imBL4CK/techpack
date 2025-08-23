MMEvents.registerControllers((e) => {
  //Arc Furnace
  e.create("arc_furnace_controller")
    .name("Arc Furnace Controller")
    .type("mm:machine");

  //Alloy Klin
  e.create("alloy_klin_controller")
    .name("Alloy Klin Controller")
    .type("mm:machine");

  //Steam Macerator
  e.create("steam_macerator_controller")
    .name("Steam Macerator Controller")
    .type("mm:machine");

  //Freezer
  e.create("freezer_controller")
    .name("Freezer Controller ")
    .type("mm:machine");

  //Pyrolyse Oven
  e.create("pyrolyse_oven_controller")
    .name("Pyrolyse Oven Controller")
    .type("mm:machine");

  //Steam Boiler
  e.create("large_steam_boiler_controller")
    .name("Large Steam Boiler Controller")
    .type("mm:machine");

  //Diesel Generator
  e.create("diesel_generator_controller")
    .name("Diesel Generator Controller")
    .type("mm:machine");

  //Large Steam Turbine
  e.create("large_steam_turbine_controller")
    .name("Large Steam Turbine Controller")
    .type("mm:machine");

  //Large Pump
  e.create("large_pump_controller")
    .name("Large Pump Controller")
    .type("mm:machine");
    
  //Chemical Reactor
  e.create("chemical_reactor_controller")
    .name("Chemical Reactor Controller")
    .type("mm:machine");
});
