import{j as e,M as a,C as r,a as d}from"./index-BSwe_shE.js";import{useMDXComponents as o}from"./index-DmqVK_gK.js";import{D as c,S as i,W as p}from"./Datepicker.stories-e7R3Ousf.js";import{I as m}from"./InstallImport-fFkOG7fd.js";import"./iframe-CZSnEi23.js";import"./index-DQDNmYQF.js";import"./index-CGBZXJ9a.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Calendar-zD5E474l.js";import"./index-QCImZZ3W.js";import"./Icon-BqsuuMcG.js";import"./Dropdown-BUj1Bq6J.js";import"./v4-CtRu48qb.js";import"./index-D9tCDUwu.js";import"./InputGroup-DOKvm3eQ.js";import"./Collapse-BrKhsD1f.js";import"./SecondaryButton-C30B7eR2.js";import"./BaseButton-Cq48oYPw.js";import"./fixedForwardRef-Dm1tRvsG.js";import"./Input-DYak8_-P.js";import"./Heading-D_Y6r1eI.js";import"./Paragraph-DEYlXMQQ.js";const l=["@sb1/ffe-datepicker","@sb1/ffe-dropdown-react","@sb1/ffe-form","@sb1/ffe-form-react","@sb1/ffe-icons-react","@sb1/ffe-core","@sb1/ffe-buttons","@sb1/ffe-collapse-react","@sb1/ffe-icons"];function s(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(t.h1,{id:"datepicker",children:"Datepicker"}),`
`,e.jsx(m,{packageName:"@sb1/ffe-datepicker-react",dependencies:l}),`
`,e.jsx(t.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(t.h2,{id:"med-nedtrekksmeny-for-måned-og-år",children:"Med nedtrekksmeny for måned og år"}),`
`,e.jsxs(t.p,{children:["Du kan aktivere nedtrekksmeny for måned og år ved å sette ",e.jsx(t.code,{children:"dropdownCaption={true}"}),". Dette lar brukeren hoppe raskt til en spesifikk måned eller år i kalenderen, i stedet for å bla gjennom månedene én for én."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(t.h2,{id:"testing-med-react-testing-library",children:"Testing med React Testing Library"}),`
`,e.jsxs(t.p,{children:["Testing av ",e.jsx(t.code,{children:"Datepicker"}),` krever litt ekstra kode, så vi har gjort det enklere ved å tilby en funksjon som
skal gjøre det enklere å teste komponenten med React Testing Library.`]}),`
`,e.jsxs(t.p,{children:["Funksjonen er avhengig av ",e.jsx(t.code,{children:"@testing-library/react"}),", så dette biblioteket må installeres."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`npm i --save-dev @testing-library/react
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`async function getDatepickerByLabelText(
    label: string,
    index = 0,
): {
    /** The datepicker element */
    element: Element;
    /** Function to get the value of the datepicker
     * @returns string in the format 'dd.mm.yyyy' or <empty string> if the datepicker is empty */
    getValue: () => string ;
    /**Function to set the value of the datepicker
     * @param value string in the format 'dd.mm.yyyy'
     * @returns void
     */
    setValue: (value: string) => Promise<void>;
};
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`describe('Datepicker test', () => {
    it('datepicker provides methods to simplify testing', async () => {
        // Code for rendering your page / component

        const datepicker = await getDatepickerByLabelText('Dato velger');

        expect(datepicker.getValue()).toStrictEqual('01.02.2024');

        await datepicker.setValue('6.5.2024');
        expect(datepicker.getValue()).toStrictEqual('06.05.2024');
    });
});
`})})]})}function q(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{q as default};
