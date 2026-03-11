//priority: 1
MMREvents.machines((e) => {
  e.create("techpack:blast_furnace")
    .name("Blast Furnace")
    .color("#FFFFFFFF")
    .controllerModel(ControllerModel.of("techpack:controller/blast_furnace"))/*
    .texture("item_input_bus_small","techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("item_output_bus_small","techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")*/
    .structure(
      MMRStructureBuilder.create()
        .pattern([
            [" B ", "BBB", " B "],
            [" m ", "H H", " F "],
            [" H ", "H H", " F "],
            [" B ", "B B", " B "],
            [" B ", "B B", " B "],
        ])
        .keys({
          H: [
            "techpack:fireproof_bricks",
            "#modular_machinery_reborn:itembus"
          ],
          B: "techpack:fireproof_bricks",
          F: ["techpack:fireproof_bricks","#modular_machinery_reborn:fluidhatch"],
        })
    )
    .texture("modular_machinery_reborn:item_input_bus_tiny", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_input_bus_small", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_input_bus_normal", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_input_bus_reinforced", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_input_bus_big", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_input_bus_huge", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_input_bus_ludicrous", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    
    .texture("modular_machinery_reborn:item_output_bus_tiny", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_output_bus_small", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_output_bus_normal", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_output_bus_reinforced", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_output_bus_big", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_output_bus_huge", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_output_bus_ludicrous", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    
    .texture("modular_machinery_reborn:fluid_input_hatch_tiny", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_input_hatch_small", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_input_hatch_normal", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_input_hatch_reinforced", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_input_hatch_big", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_input_hatch_huge", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_input_hatch_ludicrous", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    
    .texture("modular_machinery_reborn:fluid_output_hatch_tiny", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_output_hatch_small", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_output_hatch_normal", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_output_hatch_reinforced", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_output_hatch_big", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_output_hatch_huge", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_output_hatch_ludicrous", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    
    .texture("modular_machinery_reborn:energy_input_hatch_tiny", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_input_hatch_small", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_input_hatch_normal", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_input_hatch_reinforced", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_input_hatch_big", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_input_hatch_huge", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_input_hatch_ludicrous", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    
    .texture("modular_machinery_reborn:energy_output_hatch_tiny", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_output_hatch_small", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_output_hatch_normal", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_output_hatch_reinforced", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_output_hatch_big", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_output_hatch_huge", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_output_hatch_ludicrous", true, "techpack:block/fireproof_bricks", "techpack:block/rustic_oven_hole")
});
