ServerEvents.recipes(e =>{
      e.replaceOutput(
        {},
        'tfmg:plastic_sheet',
        'pneumaticcraft:plastic'
      );
      const replaceO = [
        //Molten Plastic
        {
          filter: {},
          replace: [Fluid.of('tfmg:liquid_plastic')],
          into: [Fluid.of('pneumaticcraft:plastic')]
        }
      ]
      replaceO.forEach((replace) => {
          e.replaceInput(replace.filter, replace.replace, replace.into)
      });
})