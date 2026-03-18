ServerEvents.tags("item", (e) => {
  let id = [
    "forbidden_arcanus:eternal_stella",
    "actuallyadditions:lens_of_the_miner",
    "ae2:quantum_ring",
    "ae2:quantum_link",
    "forbidden_arcanus:quantum_injector",
    "industrialforegoing:infinity_charger",
    "industrialforegoing:resourceful_furnace",
    "forbidden_arcanus:spectral_eye_amulet",
    "industrialforegoing:hydroponic_bed",
    "industrialforegoing:simulated_hydroponic_bed",
    "industrialforegoing:mob_duplicator",
    "actuallyadditions:wings_of_the_bats",
    "actuallyadditions:laser_relay_extreme",
  ];
  id.forEach((tag) => {
    e.add("techpack:coming_soon", tag);
  });
});
