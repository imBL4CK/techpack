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
        .tint(0xbfe7f9)
        .type(fluidType => {
            fluidType.density(2000); 
            fluidType.viscosity(2000);
            fluidType.temperature(273);
        })
    //Cryogenic Coolant
    e.create("techpack:cryogenic_coolant", "thin")
        .tint(0xddf6ff)
        .type(fluidType => {
            fluidType.density(3000); 
            fluidType.viscosity(3000);
            fluidType.temperature(0);
        })
    //Liquid Sugar
    e.create("techpack:liquid_sugar", "thin")
        .tint(0xffffff)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Wood Tar
    e.create("techpack:wood_tar", "thick")
        .tint(0x614f42)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Creosote
    e.create("techpack:creosote", "thin")
        .tint(0xa47d4b)
        .type(fluidType => {
            fluidType.density(4000); 
            fluidType.viscosity(4000);
            fluidType.temperature(300);
        })
    //Organic Oil
    e.create("techpack:organic_oil", "thin")
        .tint(0xf1ff77)
        .type(fluidType => {
            fluidType.density(1000); 
            fluidType.viscosity(3000);
            fluidType.temperature(300);
        })
    //Benzene
    e.create("techpack:benzene", "thin")
        .tint(0xbf8720)
        .type(fluidType => {
            fluidType.density(1000); 
            fluidType.viscosity(3000);
            fluidType.temperature(300);
        })
    //Ethylene
    e.create("techpack:ethylene", "thin")
        .tint(0xb5a7de)
        .type(fluidType => {
            fluidType.density(1000); 
            fluidType.viscosity(3000);
            fluidType.temperature(300);
        })
    //Fluorine
    e.create("techpack:fluorine", "thin")
        .tint(0xa3ade6)
        .type(fluidType => {
            fluidType.density(1000); 
            fluidType.viscosity(3000);
            fluidType.temperature(300);
        })
    //Tetrafluoroethylene 
    e.create("techpack:tetrafluoroethylene", "thick")
        .tint(0x9c7060)
        .type(fluidType => {
            fluidType.density(5000); 
            fluidType.viscosity(3000);
            fluidType.temperature(300);
        })
    //Polytetrafluoroethylene
    e.create("techpack:polytetrafluoroethylene", "thick")
        .tint(0x756b62)
        .type(fluidType => {
            fluidType.density(5000); 
            fluidType.viscosity(3000);
            fluidType.temperature(300);
        })
    //Brine
    e.create("techpack:brine", "thin")
        .tint(0xf5d7a3)
        .type(fluidType => {
            fluidType.density(2000); 
            fluidType.viscosity(2000);
            fluidType.temperature(300);
        })
    //Lithium Solution
    e.create("techpack:lithium_solution", "thick")
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
    //Ore Washing Acid
    e.create("techpack:ore_washing_acid")
        .stillTexture("techpack:fluids/ore_washing_acid_still")
        .flowingTexture("techpack:fluids/ore_washing_acid_flow")
});