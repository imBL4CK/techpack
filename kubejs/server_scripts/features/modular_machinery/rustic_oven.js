MMREvents.machines((e) => {
  e.create("techpack:rustic_oven")
    .name("Rustic Oven")
    .color("#FFFFFFFF")
    .controllerModel(ControllerModel.of("techpack:controller/rustic_oven"))
    .structure(
      MMRStructureBuilder.create()
        .pattern([
          ["HmH", "HCH", "HHH"],
          ["TTT", "T T", "TTT"],
          [" T ", "T T", " T "],
        ])
        .keys({
          H: [
            "techpack:mortar",
            "#modular_machinery_reborn:itembus"
          ],
          T: "techpack:mortar",
          C: "#minecraft:campfires"
        })
    )
    .texture("modular_machinery_reborn:item_input_bus_tiny", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_input_bus_small", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_input_bus_normal", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_input_bus_reinforced", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_input_bus_big", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_input_bus_huge", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_input_bus_ludicrous", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    
    .texture("modular_machinery_reborn:item_output_bus_tiny", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_output_bus_small", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_output_bus_normal", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_output_bus_reinforced", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_output_bus_big", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_output_bus_huge", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:item_output_bus_ludicrous", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    
    .texture("modular_machinery_reborn:fluid_input_hatch_tiny", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_input_hatch_small", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_input_hatch_normal", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_input_hatch_reinforced", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_input_hatch_big", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_input_hatch_huge", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_input_hatch_ludicrous", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    
    .texture("modular_machinery_reborn:fluid_output_hatch_tiny", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_output_hatch_small", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_output_hatch_normal", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_output_hatch_reinforced", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_output_hatch_big", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_output_hatch_huge", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:fluid_output_hatch_ludicrous", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    
    .texture("modular_machinery_reborn:energy_input_hatch_tiny", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_input_hatch_small", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_input_hatch_normal", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_input_hatch_reinforced", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_input_hatch_big", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_input_hatch_huge", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_input_hatch_ludicrous", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    
    .texture("modular_machinery_reborn:energy_output_hatch_tiny", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_output_hatch_small", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_output_hatch_normal", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_output_hatch_reinforced", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_output_hatch_big", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_output_hatch_huge", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
    .texture("modular_machinery_reborn:energy_output_hatch_ludicrous", true, "techpack:block/mortar", "techpack:block/rustic_oven_hole")
});
