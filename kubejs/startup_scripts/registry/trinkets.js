StartupEvents.registry("item", (e) => {
    e.create("techpack:grip_glove").maxStackSize(1).tag("curios:hands")
        .attachCuriosCapability(CuriosJSCapabilityBuilder.create()
            .addAttribute("minecraft:player.block_break_speed", "identifier", 0.5, "add_multiplied_base")
        );
    e.create("techpack:wanderer_galoshes").maxStackSize(1).tag("curios:feet")
        .attachCuriosCapability(CuriosJSCapabilityBuilder.create()
            .addAttribute("minecraft:generic.movement_speed", "identifier", 0.2, "add_multiplied_base")
    );
    e.create("techpack:void_walker_galoshes").maxStackSize(1).tag("curios:feet")
        .attachCuriosCapability(CuriosJSCapabilityBuilder.create()
            .addAttribute("minecraft:generic.movement_speed", "identifier", 0.5, "add_multiplied_base")
    );
});