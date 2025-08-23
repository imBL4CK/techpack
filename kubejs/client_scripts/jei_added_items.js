JEIEvents.addItems(event => {
    event.add('create:placard');
    event.add('create:chromatic_compound');
})
JEIEvents.removeRecipes(e =>
    e.remove('create:automatic_shapeless', ['integrateddynamics:facade'])
)