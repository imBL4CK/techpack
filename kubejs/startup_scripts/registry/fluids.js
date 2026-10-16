StartupEvents.registry("fluid", (e) => {
    //Steam
    e.create("techpack:steam")
        .stillTexture("techpack:fluids/steam_still")
        .flowingTexture("techpack:fluids/steam_flow")
        .type(fluidType => {
            fluidType.density(0);
            fluidType.viscosity(0);
            fluidType.temperature(473); 
            fluidType.canSwim(false);
            fluidType.canDrown(true);
        })

    //Ice Coolant
    e.create("techpack:ice_coolant", "thin")
        .stillTexture("techpack:fluids/ice_coolant_still")
        .flowingTexture("techpack:fluids/ice_coolant_flow")
        .tint(0xbfe7f9)
        .type(fluidType => {
            fluidType.density(2000); 
            fluidType.viscosity(2000);
            fluidType.temperature(273);
        })

    //Liquid Sugar
    e.create("techpack:liquid_sugar", "thin")
        .stillTexture("techpack:fluids/waterbobbu_fluid_still")
        .flowingTexture("techpack:fluids/waterbobbu_fluid_flow")
        .tint(0xffffff)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })

    //Wood Tar
    e.create("techpack:wood_tar", "thick")
        .stillTexture("techpack:fluids/programmer_art_lava_still")
        .flowingTexture("techpack:fluids/programmer_art_lava_flow")
        .tint(0x614f42)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })

    //Creosote
    e.create("techpack:creosote", "thin")
        .stillTexture("techpack:fluids/waterbobbu_fluid_still")
        .flowingTexture("techpack:fluids/waterbobbu_fluid_flow")
        .tint(0xa47d4b)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })

    //Benzene
    e.create("techpack:benzene", "thin")
        .stillTexture("techpack:fluids/waterbobbu_fluid_still")
        .flowingTexture("techpack:fluids/waterbobbu_fluid_flow")
        .tint(0xbf8720)
        .type(fluidType => {
            fluidType.density(1000); 
            fluidType.viscosity(3000);
            fluidType.temperature(300);
        })

    //Ethylene
    e.create("techpack:ethylene", "thin")
        .stillTexture("techpack:fluids/waterbobbu_fluid_still")
        .flowingTexture("techpack:fluids/waterbobbu_fluid_flow")
        .tint(0xb5a7de)
        .type(fluidType => {
            fluidType.density(1000); 
            fluidType.viscosity(3000);
            fluidType.temperature(300);
        })

    //Fluorine
    e.create("techpack:fluorine", "thin")
        .stillTexture("techpack:fluids/waterbobbu_fluid_still")
        .flowingTexture("techpack:fluids/waterbobbu_fluid_flow")
        .tint(0xa3ade6)
        .type(fluidType => {
            fluidType.density(1000); 
            fluidType.viscosity(3000);
            fluidType.temperature(300);
        })
        
    //Tetrafluoroethylene 
    e.create("techpack:tetrafluoroethylene", "thick")
        .stillTexture("techpack:fluids/waterbobbu_fluid_still")
        .flowingTexture("techpack:fluids/waterbobbu_fluid_flow")
        .tint(0x9c7060)
        .type(fluidType => {
            fluidType.density(5000); 
            fluidType.viscosity(3000);
            fluidType.temperature(300);
        })

    //Polytetrafluoroethylene
    e.create("techpack:polytetrafluoroethylene", "thick")
        .stillTexture("techpack:fluids/waterbobbu_fluid_still")
        .flowingTexture("techpack:fluids/waterbobbu_fluid_flow")
        .tint(0x756b62)
        .type(fluidType => {
            fluidType.density(5000); 
            fluidType.viscosity(3000);
            fluidType.temperature(300);
        })

    //Brine
    e.create("techpack:brine", "thin")
        .stillTexture("techpack:fluids/brine_still")
        .flowingTexture("techpack:fluids/brine_flow")
        .tint(0xf5d7a3)
        .type(fluidType => {
            fluidType.density(2000); 
            fluidType.viscosity(2000);
            fluidType.temperature(300);
        })

    //Lithium Solution
    e.create("techpack:lithium_solution", "thick")
        .stillTexture("techpack:fluids/lithium_solution_still")
        .flowingTexture("techpack:fluids/lithium_solution_flow")
        .tint(0xddf6ff)
        .type(fluidType => {
            fluidType.density(1000); 
            fluidType.viscosity(1000);
            fluidType.temperature(300);
        })

    //Redstone Acid
    e.create("techpack:redstone_acid")
        .stillTexture("techpack:fluids/redstone_acid_still")
        .flowingTexture("techpack:fluids/redstone_acid_flow")
        .type(fluidType => {
            fluidType.density(1000);
            fluidType.viscosity(1000);
            fluidType.temperature(300);
        })
        
    //Ore Washing Acid
    e.create("techpack:ore_washing_acid")
        .stillTexture("techpack:fluids/ore_washing_acid_still")
        .flowingTexture("techpack:fluids/ore_washing_acid_flow")
        .type(fluidType => {
            fluidType.density(1000);
            fluidType.viscosity(1000);
            fluidType.temperature(300);
        })
});