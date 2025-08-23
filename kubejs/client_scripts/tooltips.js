ItemEvents.tooltip((event) => {
  //Diesel engines
  event.addAdvanced(
    ["createdieselgenerators:huge_diesel_engine"],
    (item, advanced, text) => {
      text.add(1, [Text.of("This motor only works with bio-fuels").red()]);
    }
  );
  event.addAdvanced(
    ["createdieselgenerators:large_diesel_engine"],
    (item, advanced, text) => {
      text.add(1, [Text.of("This motor only works with bio-fuels").red()]);
    }
  );
  event.addAdvanced(
    ["createdieselgenerators:diesel_engine"],
    (item, advanced, text) => {
      text.add(1, [Text.of("This motor only works with bio-fuels").red()]);
    }
  );
  //Primitive Circuits
  event.addAdvanced(
    ["kubejs:primitive_circuit"], 
    (item, advanced, text) => {
    text.add(1, [ Text.of("inefficient way of crafting machines, but it is the first"), ]);
  });
  //Primitive Circuits
  event.addAdvanced(
    ["pipez:improved_upgrade", "pipez:advanced_upgrade"],
    (item, advanced, text) => {
      text.add(1, [Text.of("! Only Works on pipez cables and tubes").red()]);
    }
  );
  //Refined Radiance
  event.addAdvanced( "create:refined_radiance", (item, advanced, text) => {
      text.add(1, [Text.of("is obtained by dropping a chromatic compound near the lights, if it is dropped near a beacon, the process is instantaneous")]);
    }
  );
  //Shadow Steel
  event.addAdvanced( "create:shadow_steel", (item, advanced, text) => {
      text.add(1, [Text.of("is obtained by dropping a chromatic compound into the void")]);
    }
  );
});
