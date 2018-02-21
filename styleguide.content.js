module.exports = {
    contentDir: 'styleguide-content',
    outputDir: 'dist',
    template: 'src/templates/page.hbs',
    helpers: 'src/templates/helpers.js',
    partials: {
        header: 'src/templates/header.hbs',
        section: 'src/templates/section.hbs',
        sectionsToc: 'src/templates/sectionsToc.hbs',
    },
    styleguidistTemplate: 'src/templates/styleguidist.hbs',
    context: {
        title: 'FFE',
    },
    sections: [
        {
            name: 'Kom i gang',
            content: 'kom-i-gang/index.md',
            sections: [
                {
                    name: 'For designere',
                    content: 'kom-i-gang/for-designere.md',
                },
                {
                    name: 'For utviklere',
                    content: 'kom-i-gang/for-utviklere.md',
                },
                {
                    name: 'Om FFE',
                    content: 'kom-i-gang/om-ffe.md',
                },
                {
                    name: 'Bidra',
                    content: 'kom-i-gang/bidra.md',
                },
            ],
        },
        {
            name: 'Merkevare',
            content: 'merkevare/index.md',
            sections: [
                {
                    name: 'Profil',
                    content: 'merkevare/profil.md',
                },
                {
                    name: 'Stil og tone',
                    content: 'merkevare/stil-og-tone.md',
                },
            ],
        },
        {
            name: 'Visuell stil',
            content: 'visuell-stil/index.md',
            sections: [
                {
                    name: 'Farger',
                    content: 'visuell-stil/farger.md',
                },
                {
                    name: 'Ikoner',
                    content: 'visuell-stil/ikoner.md',
                },
                {
                    name: 'Typografi',
                    content: 'visuell-stil/typografi.md',
                },
                {
                    name: 'Illustrasjoner',
                    content: 'visuell-stil/illustrasjoner.md',
                },
                {
                    name: 'Animasjoner',
                    content: 'visuell-stil/animasjoner.md',
                },
                {
                    name: 'Layout',
                    content: 'visuell-stil/layout/index.md',

                    sections: [
                        {
                            name: 'Grid',
                            content: 'visuell-stil/layout/grid/index.md',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Universell utforming',
            content: 'universell-utforming/index.md',
            sections: [
                {
                    name: 'WAI-Aria',
                    content: 'universell-utforming/wai-aria.md',
                },
                {
                    name: 'Kontrast',
                    content: 'universell-utforming/kontrast.md',
                },
            ],
        },
    ],
};
