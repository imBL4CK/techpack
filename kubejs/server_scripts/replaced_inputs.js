ServerEvents.recipes(e => {
    //Plastic
    e.replaceInput(
      {},
      'tfmg:plastic_sheet',
      'pneumaticcraft:plastic'
    );
    const replaceI = [
      //Molten Plastic
      {
        filter: {},
        replace: [Fluid.of('tfmg:liquid_plastic')],
        into: [Fluid.of('pneumaticcraft:plastic')]
      },
      {
        filter: {},
        replace: 'pneumaticcraft:plastic',
        into: '#forge:plastic'
      }
    ]
    replaceI.forEach((replace) => {
        e.replaceInput(replace.filter, replace.replace, replace.into)
    });
})
