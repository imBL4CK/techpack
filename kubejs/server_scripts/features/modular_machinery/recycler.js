MMREvents.machines((e) => {
  e.create("techpack:recycler")
    .name("Recycler")
    .color("#FFFFFFFF")
    .controllerModel(ControllerModel.of("techpack:controller/steel_machine_panel"))
    .structure(
      MMRStructureBuilder.create()
        .pattern([
          ["CHC", "CSC", "CHC"],
          ["CmC", "H H", "CHC"],
          ["CHC", "CSC", "CHC"],
        ])
        .keys({
          H: [
            "techpack:steel_casing",
            "#modular_machinery_reborn:energyhatch",
            "#modular_machinery_reborn:itembus"
          ],
          C: "techpack:constantan_coil",
          S: "techpack:steel_casing"
        })      
    )
    .texture("modular_machinery_reborn:item_input_bus_tiny", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/item_input")
    .texture("modular_machinery_reborn:item_input_bus_small", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/item_input")
    .texture("modular_machinery_reborn:item_input_bus_normal", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/item_input")
    .texture("modular_machinery_reborn:item_input_bus_reinforced", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/item_input")
    .texture("modular_machinery_reborn:item_input_bus_big", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/item_input")
    .texture("modular_machinery_reborn:item_input_bus_huge", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/item_input")
    .texture("modular_machinery_reborn:item_input_bus_ludicrous", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/item_input")
    
    .texture("modular_machinery_reborn:item_output_bus_tiny", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/item_output")
    .texture("modular_machinery_reborn:item_output_bus_small", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/item_output")
    .texture("modular_machinery_reborn:item_output_bus_normal", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/item_output")
    .texture("modular_machinery_reborn:item_output_bus_reinforced", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/item_output")
    .texture("modular_machinery_reborn:item_output_bus_big", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/item_output")
    .texture("modular_machinery_reborn:item_output_bus_huge", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/item_output")
    .texture("modular_machinery_reborn:item_output_bus_ludicrous", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/item_output")
    
    .texture("modular_machinery_reborn:fluid_input_hatch_tiny", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/fluid_input")
    .texture("modular_machinery_reborn:fluid_input_hatch_small", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/fluid_input")
    .texture("modular_machinery_reborn:fluid_input_hatch_normal", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/fluid_input")
    .texture("modular_machinery_reborn:fluid_input_hatch_reinforced", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/fluid_input")
    .texture("modular_machinery_reborn:fluid_input_hatch_big", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/fluid_input")
    .texture("modular_machinery_reborn:fluid_input_hatch_huge", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/fluid_input")
    .texture("modular_machinery_reborn:fluid_input_hatch_ludicrous", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/fluid_input")
    
    .texture("modular_machinery_reborn:fluid_output_hatch_tiny", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/fluid_output")
    .texture("modular_machinery_reborn:fluid_output_hatch_small", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/fluid_output")
    .texture("modular_machinery_reborn:fluid_output_hatch_normal", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/fluid_output")
    .texture("modular_machinery_reborn:fluid_output_hatch_reinforced", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/fluid_output")
    .texture("modular_machinery_reborn:fluid_output_hatch_big", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/fluid_output")
    .texture("modular_machinery_reborn:fluid_output_hatch_huge", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/fluid_output")
    .texture("modular_machinery_reborn:fluid_output_hatch_ludicrous", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/fluid_output")
    
    .texture("modular_machinery_reborn:energy_input_hatch_tiny", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/energy_input")
    .texture("modular_machinery_reborn:energy_input_hatch_small", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/energy_input")
    .texture("modular_machinery_reborn:energy_input_hatch_normal", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/energy_input")
    .texture("modular_machinery_reborn:energy_input_hatch_reinforced", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/energy_input")
    .texture("modular_machinery_reborn:energy_input_hatch_big", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/energy_input")
    .texture("modular_machinery_reborn:energy_input_hatch_huge", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/energy_input")
    .texture("modular_machinery_reborn:energy_input_hatch_ludicrous", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/energy_input")
    
    .texture("modular_machinery_reborn:energy_output_hatch_tiny", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/energy_output")
    .texture("modular_machinery_reborn:energy_output_hatch_small", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/energy_output")
    .texture("modular_machinery_reborn:energy_output_hatch_normal", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/energy_output")
    .texture("modular_machinery_reborn:energy_output_hatch_reinforced", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/energy_output")
    .texture("modular_machinery_reborn:energy_output_hatch_big", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/energy_output")
    .texture("modular_machinery_reborn:energy_output_hatch_huge", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/energy_output")
    .texture("modular_machinery_reborn:energy_output_hatch_ludicrous", true, "techpack:block/steel_casing", "techpack:block/machines/hatches/energy_output")
});
