WorldgenEvents.remove(event => {
    event.removeOres(ore =>
     ore.blocks = [
        'eidolon:silver_ore', 
        'eidolon:deep_silver_ore', 
        'eidolon:lead_ore', 
        'eidolon:deep_lead_ore',
        'occultism:silver_ore',
        'occultism:silver_ore_deepslate',
        'railcraft:silver_ore',
        'railcraft:deepslate_silver_ore',
        'railcraft:tin_ore',
        'railcraft:deepslate_tin_ore',
        'railcraft:lead_ore',
        'railcraft:deepslate_lead_ore',
        'railcraft:sulfur_ore',
        'railcraft:deepslate_sulfur_ore',
        'railcraft:nickel_ore',
        'railcraft:deepslate_nickel_ore',
        'embers:silver_ore',
        'embers:deepslate_silver_ore'
    ]
    )
})