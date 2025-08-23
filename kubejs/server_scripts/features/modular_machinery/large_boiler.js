MMREvents.machines((e) => {
  e.create("techpack:large_boiler")
    .name("Large Boiler")
    .color("#FFFFFFFF")
    .controllerModel(ControllerModel.of("techpack:controller/bronze_machine_panel"))
    .structure(
      MMRStructureBuilder.create()
        .pattern([
          ["HmH", "HCH", "HHH"],
          ["PPP", "P P", "PPP"],
          ["PPP", "P P", "PPP"],
          ["HHH", "HCH", "HHH"],
        ])
        .keys({
          H: [
            "techpack:bronze_casing",
            "#modular_machinery_reborn:energyhatch",
            "#modular_machinery_reborn:itembus",
            "#modular_machinery_reborn:fluidhatch"
          ],
          P: "techpack:heatproof_casing",
          C: "techpack:bronze_casing"
        })
    )
    .texture("modular_machinery_reborn:item_input_bus_tiny", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/item_input")
    .texture("modular_machinery_reborn:item_input_bus_small", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/item_input")
    .texture("modular_machinery_reborn:item_input_bus_normal", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/item_input")
    .texture("modular_machinery_reborn:item_input_bus_reinforced", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/item_input")
    .texture("modular_machinery_reborn:item_input_bus_big", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/item_input")
    .texture("modular_machinery_reborn:item_input_bus_huge", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/item_input")
    .texture("modular_machinery_reborn:item_input_bus_ludicrous", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/item_input")
    
    .texture("modular_machinery_reborn:item_output_bus_tiny", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/item_output")
    .texture("modular_machinery_reborn:item_output_bus_small", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/item_output")
    .texture("modular_machinery_reborn:item_output_bus_normal", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/item_output")
    .texture("modular_machinery_reborn:item_output_bus_reinforced", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/item_output")
    .texture("modular_machinery_reborn:item_output_bus_big", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/item_output")
    .texture("modular_machinery_reborn:item_output_bus_huge", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/item_output")
    .texture("modular_machinery_reborn:item_output_bus_ludicrous", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/item_output")
    
    .texture("modular_machinery_reborn:fluid_input_hatch_tiny", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/fluid_input")
    .texture("modular_machinery_reborn:fluid_input_hatch_small", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/fluid_input")
    .texture("modular_machinery_reborn:fluid_input_hatch_normal", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/fluid_input")
    .texture("modular_machinery_reborn:fluid_input_hatch_reinforced", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/fluid_input")
    .texture("modular_machinery_reborn:fluid_input_hatch_big", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/fluid_input")
    .texture("modular_machinery_reborn:fluid_input_hatch_huge", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/fluid_input")
    .texture("modular_machinery_reborn:fluid_input_hatch_ludicrous", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/fluid_input")
    
    .texture("modular_machinery_reborn:fluid_output_hatch_tiny", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/fluid_output")
    .texture("modular_machinery_reborn:fluid_output_hatch_small", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/fluid_output")
    .texture("modular_machinery_reborn:fluid_output_hatch_normal", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/fluid_output")
    .texture("modular_machinery_reborn:fluid_output_hatch_reinforced", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/fluid_output")
    .texture("modular_machinery_reborn:fluid_output_hatch_big", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/fluid_output")
    .texture("modular_machinery_reborn:fluid_output_hatch_huge", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/fluid_output")
    .texture("modular_machinery_reborn:fluid_output_hatch_ludicrous", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/fluid_output")
    
    .texture("modular_machinery_reborn:energy_input_hatch_tiny", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/energy_input")
    .texture("modular_machinery_reborn:energy_input_hatch_small", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/energy_input")
    .texture("modular_machinery_reborn:energy_input_hatch_normal", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/energy_input")
    .texture("modular_machinery_reborn:energy_input_hatch_reinforced", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/energy_input")
    .texture("modular_machinery_reborn:energy_input_hatch_big", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/energy_input")
    .texture("modular_machinery_reborn:energy_input_hatch_huge", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/energy_input")
    .texture("modular_machinery_reborn:energy_input_hatch_ludicrous", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/energy_input")
    
    .texture("modular_machinery_reborn:energy_output_hatch_tiny", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/energy_output")
    .texture("modular_machinery_reborn:energy_output_hatch_small", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/energy_output")
    .texture("modular_machinery_reborn:energy_output_hatch_normal", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/energy_output")
    .texture("modular_machinery_reborn:energy_output_hatch_reinforced", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/energy_output")
    .texture("modular_machinery_reborn:energy_output_hatch_big", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/energy_output")
    .texture("modular_machinery_reborn:energy_output_hatch_huge", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/energy_output")
    .texture("modular_machinery_reborn:energy_output_hatch_ludicrous", true, "techpack:block/bronze_casing", "techpack:block/machines/hatches/energy_output")
});
