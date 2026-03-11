ServerEvents.recipes((e) => {
  e.recipes.custommachinery.custom_machine("techpack:resource_collector", 600)
  .dimensionWhitelist(["stellaris:earth_orbit","stellaris:mars_orbit","stellaris:mercury_orbit","stellaris:venus_orbit",])
  .info(info => info.tooltip("It needs to be in some orbit.").item('supplementaries:globe_sepia'))
  .produceItem("techpack:scraps").chance(0.5)
});
