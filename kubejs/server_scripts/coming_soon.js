ServerEvents.tags("item", (e) => {
  let id = [
    "malum:spirit_crucible",
    "enderio:double_layer_capacitor",
    "enderio:octadic_capacitor",
    "enderio:powered_spawner",
    "forbidden_arcanus:eternal_stella",
    "actuallyadditions:lens_of_the_miner",
  ];
  id.forEach((tag) => {
    e.add("techpack:coming_soon", tag);
  });
});
