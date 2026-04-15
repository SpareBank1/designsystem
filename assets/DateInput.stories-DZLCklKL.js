import{R as a,r as p}from"./index-DQDNmYQF.js";import{c as k}from"./index-D2FocPV0.js";import{i as S}from"./i18n-iEkwtH7y.js";import{I}from"./InputGroup-BOYEkbY1.js";import"./Icon-C3s1OswO.js";import"./Collapse-D2HS3Sy-.js";function D(e){const{as:t="div",className:r,...n}=e;return a.createElement(t,{className:k("ffe-body-text",r),...n})}D.__docgenInfo={description:"",methods:[],displayName:"BodyText"};const h=()=>{if(typeof navigator>"u")return!1;const e=navigator.userAgent,t=/iP(ad|hone|od)/.test(e)||/Macintosh/.test(e)&&navigator.maxTouchPoints>1,r=!!e.match(/Safari/)&&!e.match(/CriOS|FxiOS|OPiOS|EdgiOS/);return t&&r},u=a.forwardRef(({ariaInvalid:e,value:t,className:r,locale:n="nb",...i},o)=>{const s=p.useMemo(()=>h()?"textbox":void 0,[]);return a.createElement("input",{type:"date",role:s,"aria-invalid":e,maxLength:10,ref:o,"aria-placeholder":S[n].DATE_FORMAT,value:t,className:k("ffe-input-field ffe-dateinput__field",r),...i})});u.__docgenInfo={description:"",methods:[],displayName:"DateInput",props:{ariaInvalid:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}}}};const _={title:"Komponenter/Datepicker/DateInput",component:u,parameters:{docs:{description:{component:"DateInput er et enkelt tekstfelt for datoinntasting. Skal kun brukes på mobile enheter som et alternativ til Datepicker, da det gir bedre UX — brukeren taster inn dato direkte i stedet for å navigere en kalender på liten skjerm. På desktop skal Datepicker brukes."}}}},l={args:{locale:"nb",ariaInvalid:"false"},render:function({value:t,onChange:r,...n}){const[i,o]=p.useState("01.12.2024");return a.createElement(a.Fragment,null,a.createElement(D,null,"Skal kun brukes på mobile enheter som et alternativ til Datepicker, da det gir bedre UX. På desktop skal Datepicker brukes."),a.createElement(I,{label:"Dato",labelId:"dateinput-label"},a.createElement(u,{id:"dateinput-label",value:i,onChange:s=>o(s.target.value),...n})))}},d={args:{...l.args,ariaInvalid:"true"},render:function({value:t,onChange:r,...n}){const[i,o]=p.useState("foobar");return a.createElement(I,{label:"Dato",labelId:"dateinput-label","aria-invalid":!0,fieldMessage:"Ugyldig dato"},a.createElement(u,{id:"dateinput-label",value:i,onChange:s=>o(s.target.value),...n}))}};var c,m,g;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(m=l.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,b,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const P=["Standard","AriaInvalid"];export{d as AriaInvalid,l as Standard,P as __namedExportsOrder,_ as default};
