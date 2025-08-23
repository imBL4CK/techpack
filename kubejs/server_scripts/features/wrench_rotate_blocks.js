import { whitelist, blacklist } from "./wrench_filter";

//this part using globalsound was done by rad23  in Latvian.dev Discord, tysm!

(() => {
  /** @type {{string:Internal.Direction_}} */
  const direction = {
    up: Direction.UP,
    down: Direction.DOWN,
    north: Direction.NORTH,
    south: Direction.SOUTH,
    east: Direction.EAST,
    west: Direction.WEST,
  };
  BlockEvents.rightClicked((e) => {

    const { item, hand, facing, block, player } = e;
    if (hand !== "main_hand" || player.crouching) return;
    if (item.id !== "kubejs:wrench") return;
    if (block.id.startsWith("create:")) return;
    if (!whitelist[block.id]) return;
    if (block.properties === undefined) return;
    const blockFacing = block.properties.facing;
    if (blockFacing === undefined) return;
    /** @type {Internal.Direction_} */

    const blockFacingDirection = direction[blockFacing];
    let newDirection;

    if (facing.axisDirection.step > 0) {
      newDirection = blockFacingDirection.getClockWise(facing.axis);
    }
    else {
      newDirection = blockFacingDirection.getCounterClockWise(facing.axis);
    }
    const newProperties = Object.assign({}, block.properties, {
      facing: newDirection,
    });
    if (blacklist[block.id] === newDirection) return;

    block.set(block.id, newProperties);
    player.swing();
    if (newDirection !== blockFacingDirection) {
      global.sound(e.player, "kubejs:wrench_interact", 1, 1, 0.2);
    }
    e.cancel();
  });
})();
