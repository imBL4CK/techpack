Ponder.registry((e) => {

  e.create("mm:arc_furnace_controller").scene("arc_furnace", "Arc furnace structure", "kubejs:mm/basic_arc_furnace_structure", (scene, util) => {
    for (let x = 0; x < 5; x++) {
        for (let z = 0; z < 5; z++) {
            scene.world.showSection([x, 0, z], Facing.DOWN);
        }
        scene.idle(3);
    }
    //Layer 1
    scene.text(20, "controller always needs to be in the middle of two ports", [1.2, 1, 1])
    scene.idle(30);
    scene.text(20, "the two ports adjacent to the controller can be either item input or output", [1.2, 1, 1])
    scene.idle(30);
    scene.rotateCameraY(180)
    scene.text(20, "the power port needs to be in this position", [1.2, 0.5, 1])
    scene.idle(30);
    scene.rotateCameraY(-180)
    scene.addKeyframe();
    for (let z = 0; z < 5; z++) {
        for (let x = 0; x < 5; x++) {
            scene.world.showSection([x, 1, z], Facing.DOWN);
        }
        scene.idle(3);
    }
    //Layer 2
    scene.addKeyframe();
    for (let x = 0; x < 5; x++) {
        for (let z = 0; z < 5; z++) {
            scene.world.showSection([x, 2, z], Facing.DOWN);
            scene.idle(2);
        }
    }
    //Layer 3
    for (let x = 0; x < 5; x++) {
        for (let z = 0; z < 5; z++) {
            scene.world.showSection([x, 3, z], Facing.DOWN);
            scene.idle(1);
        }
    }
    }
  );
});
