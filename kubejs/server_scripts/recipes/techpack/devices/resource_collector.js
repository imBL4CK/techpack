ServerEvents.recipes((e) => {
  e.recipes.custommachinery.custom_machine("techpack:resource_collector", 600)
    .dimensionWhitelist(["ad_astra:earth_orbit", "ad_astra:moon_orbit", "ad_astra:mars_orbit", "ad_astra:mercury_orbit", "ad_astra:venus_orbit", "ad_astra:glacio_orbit"])
    .info(info => info.tooltip("It needs to be in some orbit.").item('supplementaries:globe_sepia'))
    .mustSeeSky()
    .produceItem("techpack:scraps").chance(0.5)
});
