Ponder.registry((e) => {

  e.create("mm:freezer_controller").scene("freezer", "Freezer structure", "kubejs:mm/freezer_structure", (scene, util) => {
    for (let x = 0; x < 5; x++) {
        for (let z = 0; z < 5; z++) {
            scene.world.showSection([x, 0, z], Facing.DOWN);
        }
        scene.idle(3);
    }
    //Layer 1
    scene.text(20, "the item ports needs to be in this position, either input or output", [1.2, 1, 1])
    scene.idle(30);
    scene.rotateCameraY(180)
    scene.text(20, "the fluid ports needs to be in this position, either input or output", [1.2, 0.5, 1])
    scene.idle(30);
    scene.rotateCameraY(-180)
    scene.addKeyframe();
    for (let z = 0; z < 5; z++) {
        for (let x = 0; x < 5; x++) {
            scene.world.showSection([x, 1, z], Facing.DOWN);
        }
        scene.idle(3);
    }
    scene.text(20, "controller goes here.", [1.2, 1, 1])
    scene.idle(30);
    scene.rotateCameraY(180)
    scene.text(20, "the power port needs to be in this position", [1.2, 1, 1])
    scene.idle(30);
    scene.rotateCameraY(-180)
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
