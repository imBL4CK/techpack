StartupEvents.registry("item", (e) => {
    e.create("techpack:sparkly_glove").unstackable().tag("curios:hands")
        .attachCuriosCapability(CuriosJSCapabilityBuilder.create()
            .addAttribute("minecraft:player.block_break_speed", "identifier", 0.5, "add_multiplied_base")
            .addAttribute("malum:soul_ward_recovery_rate", "identifier", 0.2, "add_multiplied_base")
            .addAttribute("minecraft:player.block_interaction_range", "identifier", 1, "add_value")
        );
    e.create("techpack:wanderer_galoshes").unstackable().tag("curios:feets")
        .attachCuriosCapability(CuriosJSCapabilityBuilder.create()
            .addAttribute("minecraft:generic.movement_speed", "identifier", 0.2, "add_multiplied_base")
            .addAttribute("minecraft:generic.step_height", "identifier", 1.0, "add_value")
            .addAttribute("minecraft:generic.armor", "identifier", 1.0, "add_value")
    );
    e.create("techpack:void_walker_galoshes").unstackable().tag("curios:feets")
        .attachCuriosCapability(CuriosJSCapabilityBuilder.create()
            .addAttribute("minecraft:generic.movement_speed", "identifier", 0.5, "add_multiplied_base")
            .addAttribute("minecraft:generic.step_height", "identifier", 1.0, "add_value")
            .addAttribute("minecraft:generic.armor", "identifier", 2.0, "add_value")
    );
    e.create("techpack:angel_ring").unstackable().tag("curios:ring")
        .attachCuriosCapability(CuriosJSCapabilityBuilder.create()
            .addAttribute("neoforge:creative_flight","identifier", 1.0, "add_value")
    ); /*
    e.create("techpack:alchemists_goggles", "helmet").unstackable().tag("curios:helmet").maxDamage(250)
        .attachCuriosCapability(CuriosJSCapabilityBuilder.create()
            .addAttribute("minecraft:player.block_interaction_range","identifier", 1.0, "add_value")
    );*/
});