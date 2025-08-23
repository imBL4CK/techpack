MMEvents.registerPorts((e) => {
  //Klin Item Port
  {
    e.create("klin_item_port")
      .name("Klin Item Port")
      .controllerId("mm:alloy_klin_controller")
      .config("mm:item", (c) => {
        c.rows(1).columns(3);
      });
  }
  //Steel Energy Port
  {
    e.create("steel_energy_port")
      .name("Steel Energy Port")
      .config("mm:energy", (c) => {
        c.capacity(32000).maxReceive(2000).maxExtract(2000);
      });
  }
  //Steel Item Port
  {
    e.create("steel_item_port")
      .name("Steel Item Port")
      .config("mm:item", (c) => {
        c.rows(2).columns(2);
      });
  }
  //Steel Fluid Port
  {
    e.create("steel_fluid_port")
      .name("Steel Fluid Port")
      .config("mm:fluid", (c) => {
        c.rows(1).columns(1).slotCapacity(8000);
      });
  }
  //Advanced Alloy Energy Port
  {
    e.create("advanced_alloy_energy_port")
      .name("Advanced Alloy Energy Port")
      .config("mm:energy", (c) => {
        c.capacity(64000).maxReceive(4000).maxExtract(4000);
      });
  }
  //Advanced Alloy Item Port
  {
    e.create("advanced_alloy_item_port")
      .name("Advanced Alloy Item Port")
      .config("mm:item", (c) => {
        c.rows(3).columns(3);
      });
  }
  //Advanced Alloy Fluid Port
  {
    e.create("advanced_alloy_fluid_port")
      .name("Advanced Alloy Fluid Port")
      .config("mm:fluid", (c) => {
        c.rows(2).columns(2).slotCapacity(16000);
      });
  }
});
