ServerEvents.recipes((e) => {
  let entries = [
    "iron",
    "copper",
    "gold",
    "copper",
    "tin",
    "silver",
    "lead",
    "zinc",
    "nickel",
  ];

  entries.forEach((ore) => {
    e.remove(`tconstruct:smeltery/melting/metal/${ore}/ore_dense`);
    e.remove(`tconstruct:smeltery/melting/metal/${ore}/ore_singular`);
    e.remove(`tconstruct:smeltery/melting/metal/${ore}/raw_block`);
    e.remove(`tconstruct:smeltery/melting/metal/${ore}/raw`);
    e.remove(`tconstruct:smeltery/melting/metal/${ore}/ore_sparse`);
  });
});