import{R as r,r as d}from"./index-eCxJ45ll.js";import{v as te,g as R,i as C,C as qe,a as _e}from"./Calendar-50mynjSN.js";import{c as U}from"./index-DezCrw0f.js";import{d as Ue}from"./index-DrzhKqaf.js";import{I as He}from"./Icon-B88nEPeu.js";import{E as Pe,I as H}from"./InputGroup-DfxAwG5P.js";import{S as Fe}from"./SecondaryButton-BPxnB-X1.js";var ee=function(){return ee=Object.assign||function(n){for(var i,s=1,e=arguments.length;s<e;s++){i=arguments[s];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(n[l]=i[l])}return n},ee.apply(this,arguments)},$e=function(n,i){var s={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&i.indexOf(e)<0&&(s[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,e=Object.getOwnPropertySymbols(n);l<e.length;l++)i.indexOf(e[l])<0&&Object.prototype.propertyIsEnumerable.call(n,e[l])&&(s[e[l]]=n[e[l]]);return s},Ee=r.forwardRef(function(n,i){var s=n.className,e=n.inline,l=n.textRightAlign,u=$e(n,["className","inline","textRightAlign"]);return r.createElement("input",ee({className:U("ffe-input-field",{"ffe-input-field--inline":e},{"ffe-input-field--text-right-align":l},s),ref:i},u))});Ee.__docgenInfo={description:"",methods:[],displayName:"Input"};const z=n=>{const i=n.filter(s=>typeof s=="number");return i.map((s,e)=>(s??1)*Math.pow(10,i.length-e-1)).reduce((s,e)=>s+e,0)},Ae=d.createContext({day:null,month:null,year:null,setDay:()=>null,setMonth:()=>null,setYear:()=>null,locale:"nb",calendarActiveDate:"",setCalendarActiveDate:()=>null}),We=12,Be=31,we=({children:n,value:i="",locale:s})=>{const e=te(i)?R(i):"",[l,u]=d.useState(e?e.date:null),[g,m]=d.useState(e?e.month+1:null),[I,p]=d.useState(e?e.year:null),[L,y]=d.useState((e==null?void 0:e.toString())??"");return d.useEffect(()=>{const v=(e==null?void 0:e.toString())??"";L!==v&&(u(e?e.date:null),m(e?e.month+1:null),p(e?e.year:null),y((e==null?void 0:e.toString())??""))},[e]),r.createElement(Ae.Provider,{value:{day:l,month:g,year:I,setDay:(v,a=void 0)=>{const T=v.slice(-2),[D,b]=T,o=z(T);o>Be?a==null||a():D>3?(u(o),a==null||a()):(u(o),b!==void 0&&(a==null||a()))},setMonth:(v,a=void 0)=>{const T=v.slice(-2),[D,b]=T,o=z(T);o>We?a==null||a():D>1?(m(o),a==null||a()):(m(o),b!==void 0&&(a==null||a()))},setYear:v=>{p(z(v.slice(-4)))},calendarActiveDate:L,setCalendarActiveDate:v=>{y(v)},locale:s}},n)};we.__docgenInfo={description:"",methods:[],displayName:"DatepickerProvider",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const W=r.forwardRef(({className:n,onSpinButtonChange:i,maxLength:s,min:e,max:l,value:u,nextSpinButton:g,prevSpinButton:m,children:I,...p},L)=>{const y=d.useRef([]),v=a=>{var T,D,b;if(a.stopPropagation(),/\d/.test(a.key))y.current=y.current.length===s?y.current=[parseInt(a.key)]:y.current.concat(parseInt(a.key)),i(y.current);else if(a.key==="Backspace"||a.key==="Delete"){if(y.current=[],u===0){(T=m==null?void 0:m.current)==null||T.focus();return}const o=u==null?void 0:u.toString().slice(0,-1);i(o?[parseInt(o)]:[])}else if(a.key==="ArrowUp"){a.preventDefault();let o=(u??0)+1;o&&o!==null&&o>l&&(o=e),i([o],!1)}else if(a.key==="ArrowDown"){a.preventDefault();let o=(u??0)-1;o<e&&(o=l),i([o],!1)}else a.key==="ArrowLeft"?(a.preventDefault(),(D=m==null?void 0:m.current)==null||D.focus()):a.key==="ArrowRight"&&(a.preventDefault(),(b=g==null?void 0:g.current)==null||b.focus())};return r.createElement("span",{role:"spinbutton",inputMode:"numeric",className:U(n,"ffe-dateinput__field"),tabIndex:0,onFocus:()=>{y.current=[]},"aria-valuemin":e,"aria-valuemax":l,"aria-valuenow":u,ref:L,onKeyDown:v,...p},I)});W.__docgenInfo={description:"",methods:[],displayName:"SpinButton",props:{className:{required:!1,tsType:{name:"string"},description:""},onSpinButtonChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number[], allowFocusNext?: boolean) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"value"},{type:{name:"boolean"},name:"allowFocusNext"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"number"},description:""},nextSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},prevSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""}}};const N=n=>n<10?`0${n}`:n,je=r.forwardRef(({value:n,locale:i,onClick:s},e)=>{const l=te(n)?`${C[i].CHANGE_DATE}, ${C[i].CHOSEN_DATE} ${n}`:C[i].CHOOSE_DATE;return r.createElement("button",{"data-testid":"datepicker-open",ref:e,onClick:s,className:"ffe-datepicker__button","aria-label":l,type:"button"},r.createElement(He,{ariaLabel:C[i].CALENDAR_LABEL,fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yMTIuMzA5LTEwMC4wMDFxLTMwLjMwOCAwLTUxLjMwOC0yMXQtMjEtNTEuMzA4di01MzUuMzgycTAtMzAuMzA4IDIxLTUxLjMwOHQ1MS4zMDgtMjFoNTUuMzg1di01My44NDdxMC0xMy4xNTMgOC44MDgtMjEuOTYxIDguODA3LTguODA3IDIxLjk2MS04LjgwNyAxMy4xNTMgMCAyMS45NjEgOC44MDcgOC44MDcgOC44MDggOC44MDcgMjEuOTYxdjUzLjg0N2gzMDMuMDc2di01NC42MTZxMC0xMi43NjkgOC42MTUtMjEuMzg0dDIxLjM4NC04LjYxNXExMi43NjkgMCAyMS4zODQgOC42MTUgOC42MTYgOC42MTUgOC42MTYgMjEuMzg0djU0LjYxNmg1NS4zODVxMzAuMzA4IDAgNTEuMzA4IDIxdDIxIDUxLjMwOHY1MzUuMzgycTAgMzAuMzA4LTIxIDUxLjMwOHQtNTEuMzA4IDIxSDIxMi4zMDlabTAtNTkuOTk5aDUzNS4zODJxNC42MTYgMCA4LjQ2My0zLjg0NiAzLjg0Ni0zLjg0NyAzLjg0Ni04LjQ2M3YtMzc1LjM4MkgyMDB2Mzc1LjM4MnEwIDQuNjE2IDMuODQ2IDguNDYzIDMuODQ3IDMuODQ2IDguNDYzIDMuODQ2Wk0yMDAtNjA3LjY5aDU2MHYtMTAwLjAwMXEwLTQuNjE2LTMuODQ2LTguNDYzLTMuODQ3LTMuODQ2LTguNDYzLTMuODQ2SDIxMi4zMDlxLTQuNjE2IDAtOC40NjMgMy44NDYtMy44NDYgMy44NDctMy44NDYgOC40NjN2MTAwLjAwMVptMCAwVi03MjB2MTEyLjMxWm0yODAgMjEwLjc2N3EtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4VDQ4MC00NjcuNjkxcTE0LjY5MiAwIDI1LjAzOCAxMC4zNDZ0MTAuMzQ2IDI1LjAzOHEwIDE0LjY5Mi0xMC4zNDYgMjUuMDM4VDQ4MC0zOTYuOTIzWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQzMjAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQzMjAtMzk2LjkyM1ptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ2NDAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ2NDAtMzk2LjkyM1pNNDgwLTI0MHEtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4IDEwLjM0Ni0xMC4zNDcgMjUuMDM4LTEwLjM0N3QyNS4wMzggMTAuMzQ3cTEwLjM0NiAxMC4zNDYgMTAuMzQ2IDI1LjAzOHQtMTAuMzQ2IDI1LjAzOFE0OTQuNjkyLTI0MCA0ODAtMjQwWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRMzM0LjY5Mi0yNDAgMzIwLTI0MFptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNjU0LjY5Mi0yNDAgNjQwLTI0MFoiLz48L3N2Zz4=",size:"md",className:"ffe-datepicker__icon"}))});je.__docgenInfo={description:"",methods:[],displayName:"Button",props:{value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const Ge=n=>typeof n=="number"&&n>=1&&n<=12,Ne=({ariaInvalid:n,"aria-invalid":i,ariaDescribedby:s,"aria-describedby":e,onBlur:l,calendarAbove:u,id:g,maxDate:m,minDate:I,onChange:p,fullWidth:L,fieldMessage:y,labelId:v})=>{const{day:a,setDay:T,year:D,setYear:b,month:o,setMonth:A,locale:w,calendarActiveDate:ae,setCalendarActiveDate:ne}=d.useContext(Ae),[h,B]=d.useState(!1),[G,ze]=d.useState(I),[Z,he]=d.useState(m),[re,ie]=d.useState(""),X=d.useId(),P=d.useRef(null),k=d.useRef(null),j=d.useRef(null),x=d.useRef(null),O=d.useCallback(()=>`${N(a??0)}.${N(o??0)}.${D}`,[a,o,D]),ke=y?`${X}-fieldmessage`:void 0,F=d.useCallback(Ue(t=>{t!==re&&te(t)&&(ne(t),ie(t))},250),[re]),xe=!!y;d.useEffect(()=>()=>{F.cancel()},[F]);const S=d.useCallback(()=>{const t=O();R(t,c=>{const f=m?R(m):null;f!=null&&f.isBefore(c)&&_e(t)&&c.adjust({period:"Y",offset:-100});const J=c.format();J!==t&&(p(J),T([c.date]),A([c.month+1]),b([c.year])),ie(J)})},[O,m,p,T,A,b]);d.useEffect(()=>{(I!==G||m!==Z)&&(ze(I),he(m),S()),F(O())},[I,m,O,F,G,Z,S]);const se=()=>{var t;B(!1),(t=P.current)==null||t.focus(),S()},le=t=>{t.key==="Escape"&&se()},oe=t=>{h&&t.__datepickerID!==X&&se()},Oe=()=>{window.addEventListener("click",oe),window.addEventListener("keyup",le)},de=()=>{window.removeEventListener("click",oe),window.removeEventListener("keyup",le)};d.useEffect(()=>(h?Oe():de(),()=>{de()}),[h]);const Se=()=>{S(),B(!h)},Re=t=>{const c=t.nativeEvent;c.__datepickerID=X},Ye=t=>{var c;t.target!==x.current&&t.target!==P.current&&t.target!==k.current&&t.target!==j.current&&((c=k.current)==null||c.focus())},Qe=t=>{var f;const c=R(t);c&&(T([c.date]),A([c.month+1]),b([c.year]),p(t),B(!1),ne(t),(f=P.current)==null||f.focus())},$=()=>{const t=i==="true"||n;return t==="true"||t===!0?"true":void 0},K=()=>e??s,V=t=>{t.preventDefault();const c=(t.clipboardData||window.Clipboard).getData("text"),f=R(c);f&&(T([f.date]),A([f.month+1]),b([f.year]),p(O()))};return r.createElement("div",{className:U("ffe-datepicker",{"ffe-datepicker--full-width":L,"ffe-input-group--message":xe}),"data-testid":"date-picker",onClick:t=>{Re(t),Ye(t)},role:"group",id:g},r.createElement("div",{className:U("ffe-input-field","ffe-dateinput",{"ffe-input-field--invalid":$()}),onBlur:t=>{const c=t.relatedTarget;c!==x.current&&c!==k.current&&c!==j.current&&(l==null||l(t),S())}},r.createElement(W,{ref:k,value:a??void 0,min:1,max:31,onPaste:V,onSpinButtonChange:(t,c=!0)=>{if(!(t.length===1&&t[0]===0))return p(`${N(z(t))}.${o}.${D}`),c?T(t,()=>{var f;return(f=j.current)==null?void 0:f.focus({preventScroll:!0})}):T(t)},nextSpinButton:j,maxLength:2,"aria-invalid":$(),"aria-valuenow":typeof a=="number"?a:void 0,"aria-valuetext":`${a}`,"aria-label":C[w].DAY,"aria-describedby":K(),"aria-labelledby":v},a?N(a):"dd"),".",r.createElement(W,{ref:j,value:o??void 0,min:1,max:12,onPaste:V,onSpinButtonChange:(t,c=!0)=>{if(!(t.length===1&&t[0]===0))return p(`${a}.${N(z(t))}.${D}`),c?A(t,()=>{var f;return(f=x.current)==null?void 0:f.focus({preventScroll:!0})}):A(t)},nextSpinButton:x,prevSpinButton:k,maxLength:2,"aria-invalid":$(),"aria-valuenow":typeof o=="number"?o:void 0,"aria-valuetext":Ge(o)?`${o} - ${C[w][`MONTH_${o}`]}`:void 0,"aria-label":C[w].MONTH,"aria-describedby":K(),"aria-labelledby":v},o?N(o):"mm"),".",r.createElement(W,{ref:x,className:"ffe-dateinput__field-year",value:D??void 0,min:1,max:9999,onPaste:V,onSpinButtonChange:t=>{p(`${a}.${o}.${z(t)}`),b(t)},prevSpinButton:j,maxLength:4,"aria-invalid":$(),"aria-valuetext":`${D}`,"aria-valuenow":typeof D=="number"?D:void 0,"aria-label":C[w].YEAR,"aria-describedby":K(),"aria-labelledby":v},D||"yyyy")),r.createElement(je,{onClick:Se,locale:w,value:ae||"",ref:P}),h&&r.createElement(qe,{calendarClassName:U("ffe-calendar ffe-calendar--datepicker",{"ffe-calendar--datepicker--above":u}),locale:w,maxDate:Z,minDate:G,onDatePicked:Qe,selectedDate:ae,focusOnMount:!0}),!!y&&r.createElement(Pe,{as:"p",id:ke},y))};Ne.__docgenInfo={description:"",methods:[],displayName:"DatepickerComp",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Triggered when focus leaves one of the fields (dd, mm, yyyy), and the next focused element is not one of these fields."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id of the label describing the datepicker. Required for UU-compatibility"}}};const E=({locale:n="nb",value:i,setInputGroupLabelAsSpan:s,...e})=>(d.useEffect(()=>{s==null||s()},[s]),r.createElement(we,{locale:n,value:i},r.createElement(Ne,{...e})));E.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Triggered when focus leaves one of the fields (dd, mm, yyyy), and the next focused element is not one of these fields."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id of the label describing the datepicker. Required for UU-compatibility"},value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},setInputGroupLabelAsSpan:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Hack that changes InputGroups label to a span to be wcag complient"}}};const Ze={title:"Komponenter/Datepicker/Datepicker",component:E},M={args:{locale:"nb",maxDate:"31.12.2025",minDate:"01.01.2024",labelId:"datepicker-label"},render:function({value:i,onChange:s,...e}){var g;const[l,u]=d.useState("01.12.2024");return r.createElement(H,{label:"Dato",labelId:(g=M==null?void 0:M.args)==null?void 0:g.labelId},m=>r.createElement(E,{value:i??l,onChange:u,...m,...e}))}},Y={args:{...M.args},render:function({value:i,onChange:s,...e}){var g;const[l,u]=d.useState("01.12.2024");return r.createElement(H,{label:"Dato","aria-invalid":!0,fieldMessage:"Ugyldig dato",labelId:(g=M==null?void 0:M.args)==null?void 0:g.labelId},m=>r.createElement(E,{value:i??l,onChange:u,...m,...e}))}},Q={args:{...M.args,fullWidth:!0},render:function({value:i,onChange:s,...e}){var g;const[l,u]=d.useState("01.12.2024");return r.createElement(H,{label:"Dato",labelId:(g=M==null?void 0:M.args)==null?void 0:g.labelId},r.createElement(E,{value:i??l,onChange:u,...e}))}},q={args:{...M.args,calendarAbove:!0},render:function({value:i,onChange:s,...e}){var g;const[l,u]=d.useState("01.12.2024");return r.createElement(H,{label:"Dato",labelId:(g=M==null?void 0:M.args)==null?void 0:g.labelId},r.createElement(E,{value:i??l,onChange:u,...e}))}},_={args:{...M.args},render:function({...i}){var I;const[s,e]=d.useState("01.12.2024"),[l,u]=d.useState("initiell"),g=p=>{e(p),u("datepicker")},m=[{label:"I dag",value:()=>{const p=new Date;return`${String(p.getDate()).padStart(2,"0")}.${String(p.getMonth()+1).padStart(2,"0")}.${p.getFullYear()}`}},{label:"Begynnelsen av året",value:"01.01.2024"},{label:"Slutten av året",value:"31.12.2024"},{label:"Midten av året",value:"01.07.2024"}];return r.createElement("div",null,r.createElement(H,{label:"Dato",labelId:(I=M==null?void 0:M.args)==null?void 0:I.labelId},r.createElement(E,{...i,value:s,onChange:g})),r.createElement("div",{style:{marginTop:"20px"}},r.createElement("div",null,"Kontroller datepicker eksternt:"),r.createElement("div",{style:{display:"flex",gap:"10px",marginTop:"10px"}},m.map((p,L)=>r.createElement(Fe,{key:L,onClick:()=>{const y=typeof p.value=="function"?p.value():p.value;e(y),u("ekstern")}},p.label))),r.createElement("div",{style:{marginTop:"20px"}},r.createElement("div",null,"Manuell ekstern input:"),r.createElement("div",{style:{display:"flex",gap:"10px",maxWidth:"200px",marginTop:"10px"}},r.createElement(Ee,{type:"text",value:s,onChange:p=>{e(p.target.value),u("manuell")},placeholder:"dd.mm.åååå"}))),r.createElement("div",{style:{marginTop:"20px"}},r.createElement("div",null,"Nåværende tilstand:"),r.createElement("div",null,"Dato: ",s),r.createElement("div",null,"Sist oppdatert av: ",l))))}};var ue,ce,pe;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    maxDate: '31.12.2025',
    minDate: '01.01.2024',
    labelId: 'datepicker-label'
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    return <InputGroup label="Dato" labelId={Standard?.args?.labelId}>
                {inputProps => <Datepicker value={value ?? date} onChange={setDate} {...inputProps} {...args} />}
            </InputGroup>;
  }
}`,...(pe=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,Me,ge;Y.parameters={...Y.parameters,docs:{...(me=Y.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    return <InputGroup label="Dato" aria-invalid={true} fieldMessage={'Ugyldig dato'} labelId={Standard?.args?.labelId}>
                {inputProps => <Datepicker value={value ?? date} onChange={setDate} {...inputProps} {...args} />}
            </InputGroup>;
  }
}`,...(ge=(Me=Y.parameters)==null?void 0:Me.docs)==null?void 0:ge.source}}};var ye,De,fe;Q.parameters={...Q.parameters,docs:{...(ye=Q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    fullWidth: true
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    return <InputGroup label="Dato" labelId={Standard?.args?.labelId}>
                <Datepicker value={value ?? date} onChange={setDate} {...args} />
            </InputGroup>;
  }
}`,...(fe=(De=Q.parameters)==null?void 0:De.docs)==null?void 0:fe.source}}};var ve,Te,be;q.parameters={...q.parameters,docs:{...(ve=q.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    calendarAbove: true
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    return <InputGroup label="Dato" labelId={Standard?.args?.labelId}>
                <Datepicker value={value ?? date} onChange={setDate} {...args} />
            </InputGroup>;
  }
}`,...(be=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:be.source}}};var Ie,Le,Ce;_.parameters={..._.parameters,docs:{...(Ie=_.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render({
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    const [lastUpdateSource, setLastUpdateSource] = useState('initiell');
    const handleDateChange = (newDate: string) => {
      setDate(newDate);
      setLastUpdateSource('datepicker');
    };
    const predefinedDates = [{
      label: 'I dag',
      value: () => {
        const today = new Date();
        return \`\${String(today.getDate()).padStart(2, '0')}.\${String(today.getMonth() + 1).padStart(2, '0')}.\${today.getFullYear()}\`;
      }
    }, {
      label: 'Begynnelsen av året',
      value: '01.01.2024'
    }, {
      label: 'Slutten av året',
      value: '31.12.2024'
    }, {
      label: 'Midten av året',
      value: '01.07.2024'
    }];
    return <div>
                <InputGroup label="Dato" labelId={Standard?.args?.labelId}>
                    <Datepicker {...args} value={date} onChange={handleDateChange} />
                </InputGroup>

                <div style={{
        marginTop: '20px'
      }}>
                    <div>Kontroller datepicker eksternt:</div>
                    <div style={{
          display: 'flex',
          gap: '10px',
          marginTop: '10px'
        }}>
                        {predefinedDates.map((presetDate, index) => <SecondaryButton key={index} onClick={() => {
            const newValue = typeof presetDate.value === 'function' ? presetDate.value() : presetDate.value;
            setDate(newValue);
            setLastUpdateSource('ekstern');
          }}>
                                {presetDate.label}
                            </SecondaryButton>)}
                    </div>

                    <div style={{
          marginTop: '20px'
        }}>
                        <div>Manuell ekstern input:</div>
                        <div style={{
            display: 'flex',
            gap: '10px',
            maxWidth: '200px',
            marginTop: '10px'
          }}>
                            <Input type="text" value={date} onChange={e => {
              setDate(e.target.value);
              setLastUpdateSource('manuell');
            }} placeholder="dd.mm.åååå" />
                        </div>
                    </div>

                    <div style={{
          marginTop: '20px'
        }}>
                        <div>Nåværende tilstand:</div>
                        <div>Dato: {date}</div>
                        <div>Sist oppdatert av: {lastUpdateSource}</div>
                    </div>
                </div>
            </div>;
  }
}`,...(Ce=(Le=_.parameters)==null?void 0:Le.docs)==null?void 0:Ce.source}}};const Xe=["Standard","FieldMessageString","FullWidth","CalendarAbove","TwoWayControlledComponent"],it=Object.freeze(Object.defineProperty({__proto__:null,CalendarAbove:q,FieldMessageString:Y,FullWidth:Q,Standard:M,TwoWayControlledComponent:_,__namedExportsOrder:Xe,default:Ze},Symbol.toStringTag,{value:"Module"}));export{it as D,M as S};
