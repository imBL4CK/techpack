//priority: 2
MMREvents.machines((e) => {
  e.create("techpack:batch_smelter")
    .name("Batch Smelter")
    .color("#FFFFFFFF")
    .controllerModel(ControllerModel.of("techpack:controller/bronze_machine_panel"))
    .structure(
      MMRStructureBuilder.create()
        .pattern([
          ["HmH", "HBH", "HHH"],
          ["CCC", "C C", "CCC"],
          ["HHH", "HBH", "HHH"],
        ])
        .keys({
          H: [
            "techpack:bronze_casing",
            "#modular_machinery_reborn:energyhatch",
            "#modular_machinery_reborn:itembus"
          ],
          C: "techpack:constantan_coil",
          B: "techpack:bronze_casing"
        })
    )
    .texture("modular_machinery_reborn:item_input_bus_tiny", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_inputbus_tiny")
    .texture("modular_machinery_reborn:item_input_bus_small", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_inputbus_small")
    .texture("modular_machinery_reborn:item_input_bus_normal", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_inputbus_normal")
    .texture("modular_machinery_reborn:item_input_bus_reinforced", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_inputbus_reinforced")
    .texture("modular_machinery_reborn:item_input_bus_big", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_inputbus_big")
    .texture("modular_machinery_reborn:item_input_bus_huge", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_inputbus_huge")
    .texture("modular_machinery_reborn:item_input_bus_ludicrous", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_inputbus_ludicrous")
    
    .texture("modular_machinery_reborn:item_output_bus_tiny", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_outputbus_tiny")
    .texture("modular_machinery_reborn:item_output_bus_small", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_outputbus_small")
    .texture("modular_machinery_reborn:item_output_bus_normal", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_outputbus_normal")
    .texture("modular_machinery_reborn:item_output_bus_reinforced", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_outputbus_reinforced")
    .texture("modular_machinery_reborn:item_output_bus_big", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_outputbus_big")
    .texture("modular_machinery_reborn:item_output_bus_huge", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_outputbus_huge")
    .texture("modular_machinery_reborn:item_output_bus_ludicrous", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_outputbus_ludicrous")
    
    .texture("modular_machinery_reborn:fluid_input_hatch_tiny", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_fluidinputhatch_tiny")
    .texture("modular_machinery_reborn:fluid_input_hatch_small", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_fluidinputhatch_small")
    .texture("modular_machinery_reborn:fluid_input_hatch_normal", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_fluidinputhatch_normal")
    .texture("modular_machinery_reborn:fluid_input_hatch_reinforced", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_fluidinputhatch_reinforced")
    .texture("modular_machinery_reborn:fluid_input_hatch_big", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_fluidinputhatch_big")
    .texture("modular_machinery_reborn:fluid_input_hatch_huge", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_fluidinputhatch_huge")
    .texture("modular_machinery_reborn:fluid_input_hatch_ludicrous", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_fluidinputhatch_ludicrous")
    
    .texture("modular_machinery_reborn:fluid_output_hatch_tiny", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_fluidoutputhatch_tiny")
    .texture("modular_machinery_reborn:fluid_output_hatch_small", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_fluidoutputhatch_small")
    .texture("modular_machinery_reborn:fluid_output_hatch_normal", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_fluidoutputhatch_normal")
    .texture("modular_machinery_reborn:fluid_output_hatch_reinforced", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_fluidoutputhatch_reinforced")
    .texture("modular_machinery_reborn:fluid_output_hatch_big", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_fluidoutputhatch_big")
    .texture("modular_machinery_reborn:fluid_output_hatch_huge", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_fluidoutputhatch_huge")
    .texture("modular_machinery_reborn:fluid_output_hatch_ludicrous", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_fluidoutputhatch_ludicrous")
    
    .texture("modular_machinery_reborn:energy_output_hatch_tiny", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_energyoutputhatch_tiny")
    .texture("modular_machinery_reborn:energy_output_hatch_small", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_energyoutputhatch_small")
    .texture("modular_machinery_reborn:energy_output_hatch_normal", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_energyoutputhatch_normal")
    .texture("modular_machinery_reborn:energy_output_hatch_reinforced", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_energyoutputhatch_reinforced")
    .texture("modular_machinery_reborn:energy_output_hatch_big", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_energyoutputhatch_big")
    .texture("modular_machinery_reborn:energy_output_hatch_huge", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_energyoutputhatch_huge")
    .texture("modular_machinery_reborn:energy_output_hatch_ludicrous", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_energyoutputhatch_ludicrous")
    
    .texture("modular_machinery_reborn:energy_input_hatch_tiny", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_energyinputhatch_tiny")
    .texture("modular_machinery_reborn:energy_input_hatch_small", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_energyinputhatch_small")
    .texture("modular_machinery_reborn:energy_input_hatch_normal", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_energyinputhatch_normal")
    .texture("modular_machinery_reborn:energy_input_hatch_reinforced", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_energyinputhatch_reinforced")
    .texture("modular_machinery_reborn:energy_input_hatch_big", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_energyinputhatch_big")
    .texture("modular_machinery_reborn:energy_input_hatch_huge", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_energyinputhatch_huge")
    .texture("modular_machinery_reborn:energy_input_hatch_ludicrous", true, "techpack:block/bronze_casing", "modular_machinery_reborn:block/overlay_energyinputhatch_ludicrous")
});
