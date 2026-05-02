ServerEvents.tags("item", (e) => {
  let id = [
    "actuallyadditions:lens_of_the_miner",
    "industrialforegoing:infinity_charger",
    "forbidden_arcanus:spectral_eye_amulet",
    "industrialforegoing:simulated_hydroponic_bed",
    "actuallyadditions:wings_of_the_bats",
    "actuallyadditions:laser_relay_extreme",
  ];
  id.forEach((tag) => {
    e.add("techpack:coming_soon", tag);
  });
});
