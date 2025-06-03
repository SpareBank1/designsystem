import{j as e,M as l,C as s,a}from"./index-xIgw0qaJ.js";import{useMDXComponents as o}from"./index-DmqVK_gK.js";import{G as t,S as i,a as m,O as p}from"./Grid.stories-FCOXJsCG.js";import{I as g}from"./InstallImport-CbiMG35R.js";import"./iframe-DiMOA-XS.js";import"./index-DQDNmYQF.js";import"./index-CGBZXJ9a.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./GridCol-Da3Egj2M.js";import"./index-QCImZZ3W.js";import"./Heading-D_Y6r1eI.js";import"./Paragraph-DEYlXMQQ.js";const c=["@sb1/ffe-grid","@sb1/ffe-core"];function d(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsx(n.h1,{id:"grid",children:"Grid"}),`
`,e.jsxs(n.p,{children:[`Vi bruker et grid til å styre layouten på sidene våre. På små skjermer er gridet på 4 kolonner, på mellomstore skjermer 6 kolonner og på store skjermer 12 kolonner.
Gridet består av tre komponenter - `,e.jsx(n.code,{children:"<Grid />"}),", ",e.jsx(n.code,{children:"<GridRow />"})," og ",e.jsx(n.code,{children:"<GridCol />"})," - grid, rad og kolonne."]}),`
`,e.jsx(n.p,{children:"Det kan være mange grids per side, men man kan ikke ha grids inni andre grids. Grid-komponenten brukes til å lage layout på side-nivå."}),`
`,e.jsx(n.p,{children:"Det finnes en rekke modifiers på alle tre komponentene som lar deg manipulere hvor innholdet skal plassere seg i en kolonne. Ta en titt på prop-types for å finne disse."}),`
`,e.jsx(g,{packageName:"@sb1/ffe-grid-react",dependencies:c}),`
`,e.jsx(n.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(n.p,{children:`Merk at designet for layout skal være basert på 4 kolonner på sm skjermer, 6 på md og 12 på lg mens i APIet til GridCol sendes det
inn tall fra 0-12 for alle størrelsene. I praksis betyr det at man selv må konvertere fra 12 kolonner til riktig antall på sm og md.
For sm innebærer det at hver kolonne har bredde 3, slik at man må bruke multiplum av 3 for alle verdier som sendes inn til cols eller offset propertyene. For md har hver kolonne bredde 2 og man må bruke multiplum av 2.`}),`
`,e.jsx(n.p,{children:"Riktig, oppgitte verdier er multiplum av 3 for sm og 2 for md:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Grid>
    <GridRow>
        <GridCol sm={{ cols: 6, offset: 3 }} md={{ cols: 4, offset: 4 }} />
    </GridRow>
</Grid>
`})}),`
`,e.jsx(n.p,{children:"Galt:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Grid>
    <GridRow>
        <GridCol sm={{ cols: 2, offset: 3 }} md={{ cols: 5, offset: 4 }} />
    </GridRow>
</Grid>
`})}),`
`,e.jsx(n.p,{children:`Det blir varslet om dette til console.error i dev-versjonen av FFE, men det er ingen varsler om man bygger prod-versjonen av koden.
Selvom det fungerer å bruke andre verdier er det ikke meningen at man skal gjøre, og side-layout skal heller ikke være basert
på at man må gjøre det annerledes.`}),`
`,e.jsx(n.h2,{id:"spacing",children:"Spacing"}),`
`,e.jsx(n.p,{children:"Det er i utgangspunktet ingen luft over eller under gridet. Mellom kolonnene (og til høyre og venstre for griden) er det imidlertid et mellomrom på 16px. Disse verdiene kan overstyres med modifiere."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"margin-og-padding",children:"Margin og padding"}),`
`,e.jsxs(n.p,{children:["Margin og padding kan legges til i topp og bunn av en ",e.jsx(n.code,{children:"<GridRow>"})," med modifierne ",e.jsx(n.code,{children:"margin"})," og ",e.jsx(n.code,{children:"padding"}),`.
Tillatte verdier samsvarer med felles variabler for spacing i ffe. Eksempel med 64px margin og 8px padding:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Grid>
    <GridRow margin="3xl" padding="sm">
        <GridCol />
    </GridRow>
</Grid>
`})}),`
`,e.jsx(n.h2,{id:"sentrering",children:"Sentrering"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Grid>
    <GridRow>
        <GridCol centerText={true} center={true}>
            Sentrert kolonne
        </GridCol>
    </GridRow>
</Grid>
`})}),`
`,e.jsx(n.h2,{id:"gap",children:"Gap"}),`
`,e.jsxs(n.p,{children:[`Mellomrommet mellom kolonnene internt i et grid er 16px som default. Tilsvarende luft finnes til høyre og venstre for gridet.
Dette kan overstyres ved hjelp av gap-modifieren på `,e.jsx(n.code,{children:"<Grid>"}),`. Tillatte verdier samsvarer med felles variabler for spacing i ffe,
men kan ikke være større enn 32px (`,e.jsx(n.code,{children:"lg"}),"). I tillegg kan spacingen fjernes helt med verdien ",e.jsx(n.code,{children:"none"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Grid gap="md">
    <GridRow>
        <GridCol />
    </GridRow>
</Grid>
`})}),`
`,e.jsxs(n.p,{children:["Gap kan defineres responsivt ved ved hjelp av størrelsesmodifierne ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"})," og ",e.jsx(n.code,{children:"lg"})," - se også ",e.jsx(n.em,{children:"Responsiv spacing"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Grid sm={{ gap: 'sm' }} md={{ gap: 'md' }} lg={{ gap: 'lg' }}>
    <GridRow>
        <GridCol />
    </GridRow>
</Grid>
`})}),`
`,e.jsx(n.h2,{id:"responsiv-spacing",children:"Responsiv spacing"}),`
`,e.jsxs(n.p,{children:["Spacing kan også defineres responsivt ved hjelp av størrelsesmodifierne ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"})," og ",e.jsx(n.code,{children:"lg"}),`. Dette gjør det mulig å ha ulik spacing på ulike skjermstørrelser.
Props som kan endres på denne måten er gap på `,e.jsx(n.code,{children:"<Grid>"}),"-elementet, samt margin og padding på ",e.jsx(n.code,{children:"<GridRow>"}),`.
Tillatte verdier er tilsvarende som for de ikke-responsive variantene av gap, margin og padding.`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:`Et eksempel på responsiv spacing på et grid med progressiv økning av gap og
margin/padding kan se slik ut:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Grid sm={{ gap: 'sm' }} md={{ gap: 'md' }} lg={{ gap: 'lg' }}>
    <GridRow
        sm={{ margin: 'sm', padding: 'sm' }}
        md={{ margin: 'md', padding: 'md' }}
        lg={{ margin: 'lg', padding: 'lg' }}
    >
        <GridCol>...</GridCol>
    </GridRow>
</Grid>
`})}),`
`,e.jsx(n.p,{children:`De responsive og ikke-responsive spacing-verdiene kan også kombineres. Responsive verdier overstyrer de ikke-responsive,
som betyr at de ikke-responsive verdiene i praksis er default.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<GridRow
    margin="xs"
    sm={{ margin: 'sm' }}
    md={{ margin: 'md' }}
    lg={{ margin: 'lg' }}
/>
`})}),`
`,e.jsx(n.h2,{id:"offset",children:"Offset"}),`
`,e.jsxs(n.p,{children:["Kolonner kan gis innrykk ved hjelp av ",e.jsx(n.code,{children:"offset"}),`-propertyen. I praksis fungerer dette slik at gridet hopper over X antall kolonner før innholdet vises.
Dette betyr blant annet at man kan sentrere grids med innhold som strekker seg over færre enn 12 kolonner.`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.p,{children:["Propertyen settes på ",e.jsx(n.code,{children:"<GridCol>"}),` i første kolonne i gridet som skal vises med innrykk. Verdien tilsvarer antall kolonner som skal hoppes over.
Den må defineres for hver skjermstørrelse, samtidig som man definerer kolonnens bredde. Større skjermstørrelser arver verdien fra mindre.
For eksempel vil offset som defineres i skjermstørrelse `,e.jsx(n.code,{children:"sm"})," også gjelde for ",e.jsx(n.code,{children:"md"})," og ",e.jsx(n.code,{children:"lg"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Grid>
    <GridRow>
        <GridCol sm={{ cols: 6, offset: 2 }}>innhold</GridCol>
    </GridRow>
</Grid>
`})}),`
`,e.jsx(n.p,{children:"For å sentrere gridets innhold må man passe på at totalen av (offset x 2) og cols går opp i 12. For eksempel kan innhold over 8 kolonner løses slik:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<GridCol sm={{ cols: 8, offset: 2 }}>innhold</GridCol>
`})}),`
`,e.jsx(n.p,{children:"De to siste kolonnene i gridets totale bredde på 12 vil da være tomme, og på den måten skape lik spacing på begge sider."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`|----|----|----|----|----|----|----|----|----|----|----|----|
|    |    |xxxx|xxxx|xxxx|xxxx|xxxx|xxxx|xxxx|xxxx|    |    |
|----|----|----|----|----|----|----|----|----|----|----|----|
`})}),`
`,e.jsx(s,{of:p})]})}function N(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{N as default};
