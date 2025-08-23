ClientEvents.lang('en_us', e => {
    const customname = [
        //Pipe (Pretty Pipes)
        {
            from: "prettypipes:pipe",
            to: "Logistical Pipe"
        },
        //Iron Backpack
        {
            from: "sophisticatedbackpacks:iron_backpack",
            to: "Bronze Backpack"
        },
        // C: CA Capacitor
        {
            from: "createaddition:capacitor",
            to: "Primitive Capacitor"
        },
    ];
    customname.forEach((rename) => {
        e.renameItem(rename.from, rename.to);
    });
})