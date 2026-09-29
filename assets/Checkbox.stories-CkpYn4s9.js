import{R as e,r as b}from"./index-DQDNmYQF.js";import{c as w}from"./index-D2FocPV0.js";import{I as Q}from"./InputGroup-B2C-81vL.js";function W(a){return r=>{a.forEach(t=>{typeof t=="function"?t(r):t!=null&&(t.current=r)})}}const n=e.forwardRef(({children:a,hiddenLabel:r,inline:t=!0,noMargins:f,id:l,checked:o,indeterminate:c,onChange:J,disabled:k,...K},v)=>{const z=b.useId(),C=l??z,h=b.useRef(null),U=b.useMemo(()=>W([h,v]),[v]);b.useEffect(()=>{h.current&&(h.current.indeterminate=!!c)});const x={className:w({"ffe-checkbox":!0,"ffe-checkbox--inline":t,"ffe-checkbox--no-margin":f,"ffe-checkbox--hidden-label":r}),htmlFor:C};return e.createElement(e.Fragment,null,e.createElement("input",{ref:U,className:"ffe-hidden-checkbox",id:C,type:"checkbox",checked:o,disabled:k,onChange:k?void 0:J,...K}),typeof a=="function"?a(x):e.createElement("label",{...x},e.createElement("span",{className:w("ffe-checkbox__content",{"ffe-screenreader-only":r})},a)))});n.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{noMargins:{required:!1,tsType:{name:"boolean"},description:"Removes vertical margins from the checkbox"},hiddenLabel:{required:!1,tsType:{name:"boolean"},description:"If you plan to render the checkbox without a visible label"},inline:{required:!1,tsType:{name:"boolean"},description:"Display inline",defaultValue:{value:"true",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Shows the checkbox in a mixed state, for when it represents a set of\ncheckboxes where only some are checked. Sets the `indeterminate` DOM\nproperty on the input, which is what makes screen readers announce the\nmixed state. Does not change `checked`."},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((labelProps: {
      className: string;
      htmlFor: string;
  }) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""},onColoredBg:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}},composes:["Omit"]};const X={title:"Komponenter/Form/Checkbox",component:n},s={args:{noMargins:!1,hiddenLabel:!1,inline:!0},render:a=>e.createElement("fieldset",{className:"ffe-input-group"},e.createElement("legend",{className:"ffe-form-label ffe-form-label--block"},"Hvilke aviser leser du?"),e.createElement(n,{...a,name:"newspapers",value:"vg"},"VG"),e.createElement(n,{...a,name:"newspapers",value:"dagbladet"},"Dagbladet"))},d={...s,args:{...s.args,inline:!1},render:a=>e.createElement("fieldset",{className:"ffe-input-group"},e.createElement("legend",{className:"ffe-form-label ffe-form-label--block"},"Hvilke aviser leser du?"),e.createElement(n,{...a,name:"newspapers",value:"vg"},"VG"),e.createElement(n,{...a,name:"newspapers",value:"dagbladet"},"Dagbladet"))},i={...s,args:{defaultChecked:!0,hiddenLabel:!0,inline:!1},render:a=>e.createElement(n,{...a},"Jeg har en ingen label")},p={...s,args:{"aria-invalid":!0},render:a=>e.createElement(n,{...a},"Ja, jeg vil gjerne motta reklame!")},m={...s,args:{checked:!0},render:a=>e.createElement(n,{...a},r=>e.createElement("label",{htmlFor:r.htmlFor,className:r.className},"Her benyttes render props"))},g={args:{...s.args,inline:!1},render:a=>{const[r,t]=e.useState({vg:!0,dagbladet:!1}),f=Object.values(r),l=f.every(Boolean);return e.createElement("fieldset",{className:"ffe-input-group"},e.createElement("legend",{className:"ffe-form-label ffe-form-label--block"},"Hvilke aviser leser du?"),e.createElement(n,{...a,checked:l,indeterminate:!l&&f.some(Boolean),onChange:()=>t({vg:!l,dagbladet:!l})},"Alle aviser"),e.createElement("div",{style:{paddingLeft:"var(--ffe-spacing-lg)"}},e.createElement(n,{...a,checked:r.vg,onChange:o=>t(c=>({...c,vg:o.target.checked}))},"VG"),e.createElement(n,{...a,checked:r.dagbladet,onChange:o=>t(c=>({...c,dagbladet:o.target.checked}))},"Dagbladet")))}},u={args:{...s.args,inline:!1},render:a=>e.createElement(Q,{label:"Hva pleier du å lese?",description:"Velg en eller flere aviser"},()=>e.createElement(e.Fragment,null,e.createElement(n,{...a,name:"newspapers",value:"vg"},"VG"),e.createElement(n,{...a,name:"newspapers",value:"dagbladet"},"Dagbladet"),e.createElement(n,{...a,name:"newspapers",value:"nrk"},"NRK")))};var N,E,y;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    noMargins: false,
    hiddenLabel: false,
    inline: true
  },
  render: args => <fieldset className="ffe-input-group">
            <legend className="ffe-form-label ffe-form-label--block">
                Hvilke aviser leser du?
            </legend>
            <Checkbox {...args} name="newspapers" value="vg">
                VG
            </Checkbox>
            <Checkbox {...args} name="newspapers" value="dagbladet">
                Dagbladet
            </Checkbox>
        </fieldset>
}`,...(y=(E=s.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var S,R,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Standard,
  args: {
    ...Standard.args,
    inline: false
  },
  render: args => <fieldset className="ffe-input-group">
            <legend className="ffe-form-label ffe-form-label--block">
                Hvilke aviser leser du?
            </legend>
            <Checkbox {...args} name="newspapers" value="vg">
                VG
            </Checkbox>
            <Checkbox {...args} name="newspapers" value="dagbladet">
                Dagbladet
            </Checkbox>
        </fieldset>
}`,...(I=(R=d.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var D,H,F;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Standard,
  args: {
    defaultChecked: true,
    hiddenLabel: true,
    inline: false
  },
  render: args => <Checkbox {...args}>Jeg har en ingen label</Checkbox>
}`,...(F=(H=i.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var G,V,j;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Standard,
  args: {
    'aria-invalid': true
  },
  render: args => <Checkbox {...args}>Ja, jeg vil gjerne motta reklame!</Checkbox>
}`,...(j=(V=p.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var _,L,O;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Standard,
  args: {
    checked: true
  },
  render: args => <Checkbox {...args}>
            {labelProps => <label htmlFor={labelProps.htmlFor} className={labelProps.className}>
                    Her benyttes render props
                </label>}
        </Checkbox>
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var P,T,q;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    inline: false
  },
  render: args => {
    const [newspapers, setNewspapers] = React.useState({
      vg: true,
      dagbladet: false
    });
    const values = Object.values(newspapers);
    const allChecked = values.every(Boolean);
    return <fieldset className="ffe-input-group">
                <legend className="ffe-form-label ffe-form-label--block">
                    Hvilke aviser leser du?
                </legend>
                <Checkbox {...args} checked={allChecked} indeterminate={!allChecked && values.some(Boolean)} onChange={() => setNewspapers({
        vg: !allChecked,
        dagbladet: !allChecked
      })}>
                    Alle aviser
                </Checkbox>
                {/* Innrykket ligger på en wrapper, ikke på checkboxen:
                    resten av props-ene spres på den skjulte inputen. */}
                <div style={{
        paddingLeft: 'var(--ffe-spacing-lg)'
      }}>
                    <Checkbox {...args} checked={newspapers.vg} onChange={event => setNewspapers(prev => ({
          ...prev,
          vg: event.target.checked
        }))}>
                        VG
                    </Checkbox>
                    <Checkbox {...args} checked={newspapers.dagbladet} onChange={event => setNewspapers(prev => ({
          ...prev,
          dagbladet: event.target.checked
        }))}>
                        Dagbladet
                    </Checkbox>
                </div>
            </fieldset>;
  }
}`,...(q=(T=g.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var M,A,B;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    inline: false
  },
  render: args => <InputGroup label="Hva pleier du å lese?" description="Velg en eller flere aviser">
            {() => <>
                    <Checkbox {...args} name="newspapers" value="vg">
                        VG
                    </Checkbox>
                    <Checkbox {...args} name="newspapers" value="dagbladet">
                        Dagbladet
                    </Checkbox>
                    <Checkbox {...args} name="newspapers" value="nrk">
                        NRK
                    </Checkbox>
                </>}
        </InputGroup>
}`,...(B=(A=u.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const Y=["Standard","InlineFalse","HiddenLabel","AriaInvalid","RenderProps","Indeterminate","Description"],ae=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:p,Description:u,HiddenLabel:i,Indeterminate:g,InlineFalse:d,RenderProps:m,Standard:s,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{p as A,ae as C,i as H,d as I,m as R,s as S,g as a};
