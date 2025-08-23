MMEvents.registerControllers(e => {
    //EBF Controller
    { e.create("ebf_controller")
     .name("Electric Blast Furnace Controller")
     .type("mm:machine") 
    }
    //Chemical Reactor
    { e.create("chemical_reactor_controller")
     .name("Chemical Reactor Controller")
     .type("mm:machine")
    }
});