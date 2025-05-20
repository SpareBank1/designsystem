import{j as e,M as a,C as o,a as c}from"./index-DgDxNa5X.js";import{useMDXComponents as s}from"./index-DmqVK_gK.js";import{D as d,S as r}from"./Datepicker.stories-IijirElr.js";import{I as p}from"./InstallImport-TzeXj_u0.js";import"./iframe-DxewrjMp.js";import"./index-DQDNmYQF.js";import"./index-CGBZXJ9a.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Calendar-8enfC7dN.js";import"./index-QCImZZ3W.js";import"./Icon-BqsuuMcG.js";import"./v4-CtRu48qb.js";import"./index-D9tCDUwu.js";import"./InputGroup-DOKvm3eQ.js";import"./Collapse-BrKhsD1f.js";import"./SecondaryButton-C30B7eR2.js";import"./BaseButton-Cq48oYPw.js";import"./fixedForwardRef-Dm1tRvsG.js";import"./Input-DYak8_-P.js";import"./Heading-D_Y6r1eI.js";import"./Paragraph-DEYlXMQQ.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(t.h1,{id:"datepicker",children:"Datepicker"}),`
`,e.jsx(p,{packageName:"@sb1/ffe-datepicker-react",dependencies:["@sb1/ffe-datepicker","@sb1/ffe-form","@sb1/ffe-icons-react","@sb1/ffe-core","@sb1/ffe-buttons","@sb1/ffe-icons"],stylingDependencies:["@sb1/ffe-icons/less/ffe-icons","@sb1/ffe-form/less/form","@sb1/ffe-buttons/less/buttons","@sb1/ffe-datepicker/less/datepicker"]}),`
`,e.jsx(t.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(c,{of:r}),`
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
`})})]})}function I(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{I as default};
