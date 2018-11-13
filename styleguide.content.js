module.exports = {
    contentDir: 'styleguide-content',
    outputDir: 'dist',
    template: 'src/templates/page.hbs',
    helpers: 'src/templates/helpers.js',
    frontpage: 'src/templates/frontpage.hbs',
    partials: {
        header: 'src/templates/header.hbs',
        section: 'src/templates/section.hbs',
        sectionsToc: 'src/templates/sectionsToc.hbs',
    },
    styleguidistTemplate: 'src/templates/styleguidist.hbs',
    styleguidistDest: 'src/styleguidist.html',
    context: {
        title: 'SpareBank 1 Designsystem',
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
                    name: 'Bidra',
                    content: 'kom-i-gang/bidra.md',
                },
            ],
        },
        {
            name: 'Stil og tone',
            content: 'stil-og-tone/index.md',
            sections: [
                {
                    name: 'Våre verdier',
                    content: 'stil-og-tone/verdier.md',
                },
                {
                    name: 'Unikt for oss',
                    content: 'stil-og-tone/unikt-for-oss.md',
                },
                {
                    name: 'Vår relasjon til kundene',
                    content: 'stil-og-tone/var-relasjon-til-kundene.md',
                },
                {
                    name: 'Stil og tone',
                    content: 'stil-og-tone/stil-og-tone.md',
                },
            ],
        },
        {
            name: 'Visuell identitet',
            content: 'visuell-identitet/index.md',
            sections: [
                {
                    name: 'Farger',
                    content: 'visuell-identitet/farger.md',
                },
                {
                    name: 'Ikoner',
                    content: 'visuell-identitet/ikoner.md',
                },
                {
                    name: 'Typografi',
                    content: 'visuell-identitet/typografi.md',
                },
                {
                    name: 'Illustrasjoner',
                    content: 'visuell-identitet/illustrasjoner.md',
                },
                {
                    name: 'Animasjoner',
                    content: 'visuell-identitet/animasjoner.md',
                },
                // {
                //     name: 'Layout',
                //     content: 'visuell-identitet/layout/index.md',

                //     sections: [
                //         {
                //             name: 'Grid',
                //             content: 'visuell-identitet/layout/grid/index.md',
                //         },
                //     ],
                // },
            ],
        },
        {
            name: 'Universell utforming',
            content: 'universell-utforming/index.md',
            sections: [
                {
                    name: 'WCAG 2.0',
                    content: 'universell-utforming/wcag.md',
                },
                {
                    name: 'Tips og råd',
                    content: 'universell-utforming/tips.md',
                },
                {
                    name: 'Verktøy',
                    content: 'universell-utforming/verktoy.md',
                },
            ],
        },
    ],
};
