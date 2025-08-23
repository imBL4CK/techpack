ServerEvents.recipes((e) => {

    let recipeType = (e.recipes.create.compacting);
    let recipeId = "create:compacting/";

    //Destabilized Redstone
    {
        recipeType
        (
            [Fluid.of("thermal:redstone", 100)], ["#forge:dusts/redstone"]
        )
        .id(`${recipeId}thermal/redstone_fluid`).heated();
    }
    //Destabilized Redstone
    {
        recipeType
        (
            [Fluid.of("thermal:redstone", 900)],
            ["#forge:storage_blocks/redstone"]
        )
        .id(`${recipeId}thermal/redstone_fluid_using_block`).heated()
    };
     //Rose Quartz
    {
        recipeType
        (
            ["create:rose_quartz"],
            [Fluid.of("thermal:redstone", 500), "#forge:gems/quartz"]
        )
        .id(`${recipeId}create/rose_quartz`).heated();
    }

    const recipes = [
        //Rubber from Latex
        {
            output: "thermal:rubber",
            input: [Fluid.of("minecraft:water", 25), Fluid.of("thermal:latex", 250)],
            id: "thermal/rubber_from_latex",
        },
        //Rubber from resin
        {
            output: "thermal:rubber",
            input: [Fluid.of("minecraft:water", 100), Fluid.of("thermal:resin", 500)],
            id: "thermal/rubber_from_resin",
        },
    ];
    recipes.forEach((recipe) => {
        e.recipes.create.compacting(recipe.output, recipe.input).id(`${recipeId}${recipe.id}`);
    });
});
