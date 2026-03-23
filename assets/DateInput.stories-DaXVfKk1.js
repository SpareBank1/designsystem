import{R as o,r as c}from"./index-DQDNmYQF.js";import{c as I}from"./index-D2FocPV0.js";import{i as h}from"./i18n-iEkwtH7y.js";import{I as y}from"./InputGroup-CsZXON4u.js";import"./Icon-D_nm5xPy.js";import"./Collapse-BVkyKCdf.js";var p=function(){return p=Object.assign||function(e){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},p.apply(this,arguments)},S=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};function D(e){var r=e.as,n=r===void 0?"div":r,a=e.className,t=S(e,["as","className"]);return o.createElement(n,p({className:I("ffe-body-text",a)},t))}D.__docgenInfo={description:"",methods:[],displayName:"BodyText"};const O=()=>{if(typeof navigator>"u")return!1;const e=navigator.userAgent,r=/iP(ad|hone|od)/.test(e)||/Macintosh/.test(e)&&navigator.maxTouchPoints>1,n=!!e.match(/Safari/)&&!e.match(/CriOS|FxiOS|OPiOS|EdgiOS/);return r&&n},u=o.forwardRef(({ariaInvalid:e,value:r,className:n,locale:a="nb",...t},i)=>{const l=c.useMemo(()=>O()?"textbox":void 0,[]);return o.createElement("input",{type:"date",role:l,"aria-invalid":e,maxLength:10,ref:i,"aria-placeholder":h[a].DATE_FORMAT,value:r,className:I("ffe-input-field ffe-dateinput__field",n),...t})});u.__docgenInfo={description:"",methods:[],displayName:"DateInput",props:{ariaInvalid:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}}}};const N={title:"Komponenter/Datepicker/DateInput",component:u,parameters:{docs:{description:{component:"DateInput er et enkelt tekstfelt for datoinntasting. Skal kun brukes på mobile enheter som et alternativ til Datepicker, da det gir bedre UX — brukeren taster inn dato direkte i stedet for å navigere en kalender på liten skjerm. På desktop skal Datepicker brukes."}}}},s={args:{locale:"nb",ariaInvalid:"false"},render:function({value:r,onChange:n,...a}){const[t,i]=c.useState("01.12.2024");return o.createElement(o.Fragment,null,o.createElement(D,null,"Skal kun brukes på mobile enheter som et alternativ til Datepicker, da det gir bedre UX. På desktop skal Datepicker brukes."),o.createElement(y,{label:"Dato",labelId:"dateinput-label"},o.createElement(u,{id:"dateinput-label",value:t,onChange:l=>i(l.target.value),...a})))}},d={args:{...s.args,ariaInvalid:"true"},render:function({value:r,onChange:n,...a}){const[t,i]=c.useState("foobar");return o.createElement(y,{label:"Dato",labelId:"dateinput-label","aria-invalid":!0,fieldMessage:"Ugyldig dato"},o.createElement(u,{id:"dateinput-label",value:t,onChange:l=>i(l.target.value),...a}))}};var m,f,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    ariaInvalid: 'false'
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DateInputProps) {
    const [date, setDate] = useState('01.12.2024');
    return <>
                <BodyText>
                    Skal kun brukes på mobile enheter som et alternativ til
                    Datepicker, da det gir bedre UX. På desktop skal Datepicker
                    brukes.
                </BodyText>
                <InputGroup label="Dato" labelId="dateinput-label">
                    <DateInput id="dateinput-label" value={date} onChange={e => setDate(e.target.value)} {...args} />
                </InputGroup>
            </>;
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,v,k;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    ariaInvalid: 'true'
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DateInputProps) {
    const [date, setDate] = useState('foobar');
    return <InputGroup label="Dato" labelId="dateinput-label" aria-invalid={true} fieldMessage="Ugyldig dato">
                <DateInput id="dateinput-label" value={date} onChange={e => setDate(e.target.value)} {...args} />
            </InputGroup>;
  }
}`,...(k=(v=d.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const R=["Standard","AriaInvalid"];export{d as AriaInvalid,s as Standard,R as __namedExportsOrder,N as default};
