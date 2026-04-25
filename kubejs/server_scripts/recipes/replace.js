ServerEvents.recipes((e) => {
    e.replaceInput({ input: "#curios:smartphone" }, "#c:ingots/iron", "cobblemon:pc");
    e.replaceInput({ input: "#curios:smartphone" }, "#c:ingots/iron", "cobblemon:healing_machine");
    e.replaceInput({ id: "vc_gliders:reinforced_paper" }, "minecraft:leather", "techpack:tanned_leather");
    e.replaceInput({ id: "power_armor:armor_modification_table" }, "power_armor:machine_frame", "techpack:advanced_machine_casing");
    e.replaceInput({ id: "stellaris:misc/small_green_can" }, "minecraft:iron_nugget", "techpack:tin_ingot");
    e.replaceInput({ id: "stellaris:misc/green_can" }, "minecraft:iron_nugget", "techpack:tin_ingot");
})