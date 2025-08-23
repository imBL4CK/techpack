//Sound Engine made by rad23  in Latvian.dev Discord, tysm!

global.sound = (entity, soundId, volume, pitch, shift) => {
  entity.level.runCommandSilent(
    `playsound ${soundId} player @p ${entity.x} ${entity.y} ${
      entity.z
    } ${volume} ${pitch - shift / 2 + Math.random() * shift}`
  );
};
