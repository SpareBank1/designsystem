import{R as e,r as l}from"./index-RYns6xqu.js";import{c as b}from"./index-Dejnh_W_.js";import{i as w}from"./i18n-kNgCcl76.js";import{E as H}from"./ErrorFieldMessage-Cp9m5qQ-.js";const T=(r,a,o)=>{let t;return r?t=r:a&&o?console.error("You should use countryCodeAndNumberFieldMessage when both countryCode and number contains an error"):a?t=a:o&&(t=o),t},m=e.forwardRef(({numberInputProps:r,countryCodeInputProps:a,countryCodeFieldMessage:o,numberFieldMessage:t,countryCodeAndNumberFieldMessage:d,className:C,extraMargin:L,isMobileNumber:U,locale:g="nb"},V)=>{var v;const E=l.useRef(null),N=l.useRef(null);l.useImperativeHandle(V,()=>({get country(){return E.current},get number(){return N.current}}));const n=T(d,o,t),h=l.useId(),_=l.useId(),j=l.useId(),f=e.isValidElement(n)?(v=n==null?void 0:n.props)==null?void 0:v.id:j,p=w[["nb","nn","en"].indexOf(g)!==-1?g:"nb"];return e.createElement("div",{className:b("ffe-phone-number","ffe-input-group",{"ffe-input-group--message":n},{"ffe-input-group--no-extra-margin":!L},C)},e.createElement("div",{className:"ffe-phone-number__input-group"},e.createElement("div",{className:"ffe-phone-number__country-code"},e.createElement("label",{className:"ffe-form-label",htmlFor:_},p.COUNTRY_CODE),e.createElement("div",{className:"ffe-phone-number__input-group"},e.createElement("span",{className:"ffe-phone-number__plus"},"+"),e.createElement("input",{ref:E,id:_,value:(a==null?void 0:a.value)??"47",className:b("ffe-input-field","ffe-phone-number__country-code-input"),type:"tel","aria-invalid":!!(o||d),"aria-describedby":o||d?f:void 0,...a}))),e.createElement("div",{className:"ffe-phone-number__number"},e.createElement("label",{className:"ffe-form-label",htmlFor:h},U?p.MOBILE_NUMBER:p.PHONE_NUMBER),e.createElement("input",{ref:N,id:h,type:"tel",className:b("ffe-input-field","ffe-phone-number__phone-input"),"aria-invalid":!!(t||d),"aria-describedby":t||d?f:void 0,...r}))),typeof n=="string"&&e.createElement(H,{as:"p",id:f},n),e.isValidElement(n)&&e.cloneElement(n,{id:f}))});m.__docgenInfo={description:"",methods:[{name:"country",docblock:null,modifiers:["get"],params:[],returns:null},{name:"number",docblock:null,modifiers:["get"],params:[],returns:null}],displayName:"PhoneNumber",props:{locale:{defaultValue:{value:"'nb'",computed:!1},required:!1}}};const Y={title:"components/form/PhoneNumber",component:m},s={args:{numberInputProps:{},numberFieldMessage:"",countryCodeFieldMessage:"",countryCodeAndNumberFieldMessage:"",extraMargin:!1,isMobileNumber:!0,locale:"nb"},render:r=>e.createElement(m,{...r})},u={args:{...s.args,countryCodeFieldMessage:"Dette feltet er påkrevd"},render:r=>e.createElement(m,{...r})},c={args:{...s.args,numberFieldMessage:"Dette feltet er påkrevd"},render:r=>e.createElement(m,{...r})},i={args:{...s.args,countryCodeAndNumberFieldMessage:"Både landkode og telefonnummer feltene er påkrevd"},render:r=>e.createElement(m,{...r})};var S,y,M;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    numberInputProps: {},
    numberFieldMessage: '',
    countryCodeFieldMessage: '',
    countryCodeAndNumberFieldMessage: '',
    extraMargin: false,
    isMobileNumber: true,
    locale: 'nb'
  },
  render: args => <PhoneNumber {...args} />
}`,...(M=(y=s.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var k,R,x;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    countryCodeFieldMessage: 'Dette feltet er påkrevd'
  },
  render: args => <PhoneNumber {...args} />
}`,...(x=(R=u.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var O,P,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    numberFieldMessage: 'Dette feltet er påkrevd'
  },
  render: args => <PhoneNumber {...args} />
}`,...(B=(P=c.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var I,D,F;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    countryCodeAndNumberFieldMessage: 'Både landkode og telefonnummer feltene er påkrevd'
  },
  render: args => <PhoneNumber {...args} />
}`,...(F=(D=i.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const q=["Standard","ErrorCountryCode","ErrorNumber","ErrorBoth"],Q=Object.freeze(Object.defineProperty({__proto__:null,ErrorBoth:i,ErrorCountryCode:u,ErrorNumber:c,Standard:s,__namedExportsOrder:q,default:Y},Symbol.toStringTag,{value:"Module"}));export{u as E,Q as P,s as S,c as a,i as b};
