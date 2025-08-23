MMEvents.createStructures(e=> {
    //Ebf
    { e.create('mm:ebf_structure')
    .controllerId('mm:ebf_controller')
    .name('Electric Blast Furnace')
    .layout(l => {
        l.layer([
            ' E ',
            'BFB',
            ' B '
        ])
        .layer([
            'WPW',
            'PTP',
            'WPW'
        ])
        .layer([
            'WFW',
            'FUF',
            'WFW'
        ])
        .layer([
            'BBB',
            'BBB',
            'ICI'
        ])
        .key('B', {
            block: 'kubejs:ebf_bricks'
        })
        .key('W', {
            block: 'tfmg:fireproof_brick_reinforcement'
        })
        .key('U', {
            block: 'create:blaze_burner'
        })
        .key('P', {
            block: 'ad_astra:steel_pillar'
        })
        .key('T', {
            block: 'create:fluid_tank'
        })
        .key('F', {
            block: 'tfmg:steel_frame'
        })
        .key('I', {
            portType: 'mm:item'
        })
        .key('E', {
            portType: 'mm:energy'
        })
    })}
    //Ebf
    { e.create('mm:chemical_reactor_structure')
        .controllerId('mm:chemical_reactor_controller')
        .name('Chemical Reactor')
        .layout(l => {
            l.layer([
                'TTT',
                'TTT',
                'TTT'
            ]).layer([
                'TTT',
                'TTT',
                'TTT'
            ]).layer([
                'FEF',
                'RRR',
                'ICI'
            ])
            .key('R', {
                block: 'biggerreactors:reactor_casing'
            })
            .key('T', {
                block: 'tfmg:steel_fluid_tank'
            })
            .key('I', {
                portType: 'mm:item'
            })
            .key('F', {
                portType: 'mm:fluid'
            })
            .key('E', {
                portType: 'mm:energy'
            })
        })}
}) 