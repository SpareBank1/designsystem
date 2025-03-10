import{R as r,r as u}from"./index-eCxJ45ll.js";import{v as V,g as k,i as L,C as Qe,a as qe}from"./Calendar-BjqUWBU_.js";import{c as Y}from"./index-DezCrw0f.js";import{d as _e}from"./index-DrzhKqaf.js";import{I as Ue}from"./Icon-B88nEPeu.js";import{E as He,I as q}from"./InputGroup-DC7bzcf0.js";import{S as Pe}from"./SecondaryButton-aa3aHmpA.js";var K=function(){return K=Object.assign||function(n){for(var i,s=1,e=arguments.length;s<e;s++){i=arguments[s];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},K.apply(this,arguments)},$e=function(n,i){var s={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&i.indexOf(e)<0&&(s[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(n);o<e.length;o++)i.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(s[e[o]]=n[e[o]]);return s},Ce=r.forwardRef(function(n,i){var s=n.className,e=n.inline,o=n.textRightAlign,d=$e(n,["className","inline","textRightAlign"]);return r.createElement("input",K({className:Y("ffe-input-field",{"ffe-input-field--inline":e},{"ffe-input-field--text-right-align":o},s),ref:i},d))});Ce.__docgenInfo={description:"",methods:[],displayName:"Input"};const Q=n=>{const i=n.filter(s=>typeof s=="number");return i.map((s,e)=>(s??1)*Math.pow(10,i.length-e-1)).reduce((s,e)=>s+e,0)},Ee=u.createContext({day:null,month:null,year:null,setDay:()=>null,setMonth:()=>null,setYear:()=>null,locale:"nb",calendarActiveDate:"",setCalendarActiveDate:()=>null}),Fe=12,We=31,we=({children:n,value:i="",locale:s})=>{const e=V(i)?k(i):"",[o,d]=u.useState(e?e.date:null),[g,M]=u.useState(e?e.month+1:null),[b,p]=u.useState(e?e.year:null),[C,D]=u.useState((e==null?void 0:e.toString())??"");return u.useEffect(()=>{d(e?e.date:null),M(e?e.month+1:null),p(e?e.year:null),D((e==null?void 0:e.toString())??"")},[e]),r.createElement(Ee.Provider,{value:{day:o,month:g,year:b,setDay:(T,a=void 0)=>{const v=T.slice(-2),[y,I]=v,l=Q(v);l>We?a==null||a():y>3?(d(l),a==null||a()):(d(l),I!==void 0&&(a==null||a()))},setMonth:(T,a=void 0)=>{const v=T.slice(-2),[y,I]=v,l=Q(v);l>Fe?a==null||a():y>1?(M(l),a==null||a()):(M(l),I!==void 0&&(a==null||a()))},setYear:T=>{p(Q(T.slice(-4)))},calendarActiveDate:C,setCalendarActiveDate:T=>{D(T)},locale:s}},n)};we.__docgenInfo={description:"",methods:[],displayName:"DatepickerProvider",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const F=r.forwardRef(({className:n,onSpinButtonChange:i,maxLength:s,min:e,max:o,value:d,nextSpinButton:g,prevSpinButton:M,children:b,...p},C)=>{const D=u.useRef([]),T=a=>{var v,y,I;if(a.stopPropagation(),/\d/.test(a.key))D.current=D.current.length===s?D.current=[parseInt(a.key)]:D.current.concat(parseInt(a.key)),i(D.current);else if(a.key==="Backspace"||a.key==="Delete"){if(D.current=[],d===0){(v=M==null?void 0:M.current)==null||v.focus();return}const l=d==null?void 0:d.toString().slice(0,-1);i(l?[parseInt(l)]:[])}else if(a.key==="ArrowUp"){a.preventDefault();let l=(d??0)+1;l&&l!==null&&l>o&&(l=e),i([l],!1)}else if(a.key==="ArrowDown"){a.preventDefault();let l=(d??0)-1;l<e&&(l=o),i([l],!1)}else a.key==="ArrowLeft"?(a.preventDefault(),(y=M==null?void 0:M.current)==null||y.focus()):a.key==="ArrowRight"&&(a.preventDefault(),(I=g==null?void 0:g.current)==null||I.focus())};return r.createElement("span",{role:"spinbutton",inputMode:"numeric",className:Y(n,"ffe-dateinput__field"),tabIndex:0,onFocus:()=>{D.current=[]},"aria-valuemin":e,"aria-valuemax":o,"aria-valuenow":d,ref:C,onKeyDown:T,...p},b)});F.__docgenInfo={description:"",methods:[],displayName:"SpinButton",props:{className:{required:!1,tsType:{name:"string"},description:""},onSpinButtonChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number[], allowFocusNext?: boolean) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"value"},{type:{name:"boolean"},name:"allowFocusNext"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"number"},description:""},nextSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},prevSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""}}};const $=n=>n<10?`0${n}`:n,Ae=r.forwardRef(({value:n,locale:i,onClick:s},e)=>{const o=V(n)?`${L[i].CHANGE_DATE}, ${L[i].CHOSEN_DATE} ${n}`:L[i].CHOOSE_DATE;return r.createElement("button",{"data-testid":"datepicker-open",ref:e,onClick:s,className:"ffe-datepicker__button","aria-label":o,type:"button"},r.createElement(Ue,{ariaLabel:L[i].CALENDAR_LABEL,fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yMTIuMzA5LTEwMC4wMDFxLTMwLjMwOCAwLTUxLjMwOC0yMXQtMjEtNTEuMzA4di01MzUuMzgycTAtMzAuMzA4IDIxLTUxLjMwOHQ1MS4zMDgtMjFoNTUuMzg1di01My44NDdxMC0xMy4xNTMgOC44MDgtMjEuOTYxIDguODA3LTguODA3IDIxLjk2MS04LjgwNyAxMy4xNTMgMCAyMS45NjEgOC44MDcgOC44MDcgOC44MDggOC44MDcgMjEuOTYxdjUzLjg0N2gzMDMuMDc2di01NC42MTZxMC0xMi43NjkgOC42MTUtMjEuMzg0dDIxLjM4NC04LjYxNXExMi43NjkgMCAyMS4zODQgOC42MTUgOC42MTYgOC42MTUgOC42MTYgMjEuMzg0djU0LjYxNmg1NS4zODVxMzAuMzA4IDAgNTEuMzA4IDIxdDIxIDUxLjMwOHY1MzUuMzgycTAgMzAuMzA4LTIxIDUxLjMwOHQtNTEuMzA4IDIxSDIxMi4zMDlabTAtNTkuOTk5aDUzNS4zODJxNC42MTYgMCA4LjQ2My0zLjg0NiAzLjg0Ni0zLjg0NyAzLjg0Ni04LjQ2M3YtMzc1LjM4MkgyMDB2Mzc1LjM4MnEwIDQuNjE2IDMuODQ2IDguNDYzIDMuODQ3IDMuODQ2IDguNDYzIDMuODQ2Wk0yMDAtNjA3LjY5aDU2MHYtMTAwLjAwMXEwLTQuNjE2LTMuODQ2LTguNDYzLTMuODQ3LTMuODQ2LTguNDYzLTMuODQ2SDIxMi4zMDlxLTQuNjE2IDAtOC40NjMgMy44NDYtMy44NDYgMy44NDctMy44NDYgOC40NjN2MTAwLjAwMVptMCAwVi03MjB2MTEyLjMxWm0yODAgMjEwLjc2N3EtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4VDQ4MC00NjcuNjkxcTE0LjY5MiAwIDI1LjAzOCAxMC4zNDZ0MTAuMzQ2IDI1LjAzOHEwIDE0LjY5Mi0xMC4zNDYgMjUuMDM4VDQ4MC0zOTYuOTIzWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQzMjAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQzMjAtMzk2LjkyM1ptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ2NDAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ2NDAtMzk2LjkyM1pNNDgwLTI0MHEtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4IDEwLjM0Ni0xMC4zNDcgMjUuMDM4LTEwLjM0N3QyNS4wMzggMTAuMzQ3cTEwLjM0NiAxMC4zNDYgMTAuMzQ2IDI1LjAzOHQtMTAuMzQ2IDI1LjAzOFE0OTQuNjkyLTI0MCA0ODAtMjQwWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRMzM0LjY5Mi0yNDAgMzIwLTI0MFptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNjU0LjY5Mi0yNDAgNjQwLTI0MFoiLz48L3N2Zz4=",size:"md",className:"ffe-datepicker__icon"}))});Ae.__docgenInfo={description:"",methods:[],displayName:"Button",props:{value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const Be=n=>typeof n=="number"&&n>=1&&n<=12,je=({ariaInvalid:n,"aria-invalid":i,ariaDescribedby:s,"aria-describedby":e,onBlur:o,calendarAbove:d,id:g,maxDate:M,minDate:b,onChange:p,fullWidth:C,fieldMessage:D,labelId:T})=>{const{day:a,setDay:v,year:y,setYear:I,month:l,setMonth:j,locale:w,calendarActiveDate:J,setCalendarActiveDate:ee}=u.useContext(Ee),[N,W]=u.useState(!1),[te,Ne]=u.useState(b),[ae,ze]=u.useState(M),[ne,re]=u.useState(""),B=u.useId(),_=u.useRef(null),z=u.useRef(null),A=u.useRef(null),h=u.useRef(null),he=D?`${B}-fieldmessage`:void 0,U=u.useCallback(_e(t=>{t!==ne&&V(t)&&(ee(t),re(t))},250),[ne]),ke=!!D;u.useEffect(()=>()=>{U.cancel()},[U]);const H=()=>{const t=`${a}.${l}.${y}`;k(t,c=>{const f=M?k(M):null;f!=null&&f.isBefore(c)&&qe(t)&&c.adjust({period:"Y",offset:-100});const X=c.format();X!==t&&(p(X),v([c.date]),j([c.month+1]),I([c.year])),re(X)})};u.useEffect(()=>{(b!==te||M!==ae)&&(Ne(b),ze(M),H()),U(`${a}.${l}.${y}`)},[b,M,a,l,y,U]);const ie=()=>{var t;W(!1),(t=_.current)==null||t.focus(),H()},se=t=>{t.key==="Escape"&&ie()},le=t=>{N&&t.__datepickerID!==B&&ie()},xe=()=>{window.addEventListener("click",le),window.addEventListener("keyup",se)},oe=()=>{window.removeEventListener("click",le),window.removeEventListener("keyup",se)};u.useEffect(()=>(N?xe():oe(),()=>{oe()}),[N]);const Oe=()=>{H(),W(!N)},Se=t=>{const c=t.nativeEvent;c.__datepickerID=B},Re=t=>{var c;t.target!==h.current&&t.target!==_.current&&t.target!==z.current&&t.target!==A.current&&((c=z.current)==null||c.focus())},Ye=t=>{var f;const c=k(t);c&&(v([c.date]),j([c.month+1]),I([c.year]),p(t),W(!1),ee(t),(f=_.current)==null||f.focus())},P=()=>{const t=i==="true"||n;return t==="true"||t===!0?"true":void 0},G=()=>e??s,Z=t=>{t.preventDefault();const c=(t.clipboardData||window.Clipboard).getData("text"),f=k(c);f&&(v([f.date]),j([f.month+1]),I([f.year]),p(`${a}.${l}.${y}`))};return r.createElement("div",{className:Y("ffe-datepicker",{"ffe-datepicker--full-width":C,"ffe-input-group--message":ke}),"data-testid":"date-picker",onClick:t=>{Se(t),Re(t)},role:"group",id:g},r.createElement("div",{className:Y("ffe-input-field","ffe-dateinput",{"ffe-input-field--invalid":P()}),onBlur:t=>{const c=t.relatedTarget;c!==h.current&&c!==z.current&&c!==A.current&&(o==null||o(t),H())}},r.createElement(F,{ref:z,value:a??void 0,min:1,max:31,onPaste:Z,onSpinButtonChange:(t,c=!0)=>(p(`${$(Q(t))}.${l}.${y}`),c?v(t,()=>{var f;return(f=A.current)==null?void 0:f.focus({preventScroll:!0})}):v(t)),nextSpinButton:A,maxLength:2,"aria-invalid":P(),"aria-valuenow":typeof a=="number"?a:void 0,"aria-valuetext":`${a}`,"aria-label":L[w].DAY,"aria-describedby":G(),"aria-labelledby":T},a?$(a):"dd"),".",r.createElement(F,{ref:A,value:l??void 0,min:1,max:12,onPaste:Z,onSpinButtonChange:(t,c=!0)=>(p(`${a}.${$(Q(t))}.${y}`),c?j(t,()=>{var f;return(f=h.current)==null?void 0:f.focus({preventScroll:!0})}):j(t)),nextSpinButton:h,prevSpinButton:z,maxLength:2,"aria-invalid":P(),"aria-valuenow":typeof l=="number"?l:void 0,"aria-valuetext":Be(l)?`${l} - ${L[w][`MONTH_${l}`]}`:void 0,"aria-label":L[w].MONTH,"aria-describedby":G(),"aria-labelledby":T},l?$(l):"mm"),".",r.createElement(F,{ref:h,className:"ffe-dateinput__field-year",value:y??void 0,min:1,max:9999,onPaste:Z,onSpinButtonChange:t=>{p(`${a}.${l}.${t}`),I(t)},prevSpinButton:A,maxLength:4,"aria-invalid":P(),"aria-valuetext":`${y}`,"aria-valuenow":typeof y=="number"?y:void 0,"aria-label":L[w].YEAR,"aria-describedby":G(),"aria-labelledby":T},y||"yyyy")),r.createElement(Ae,{onClick:Oe,locale:w,value:J||"",ref:_}),N&&r.createElement(Qe,{calendarClassName:Y("ffe-calendar ffe-calendar--datepicker",{"ffe-calendar--datepicker--above":d}),locale:w,maxDate:ae,minDate:te,onDatePicked:Ye,selectedDate:J,focusOnMount:!0}),!!D&&r.createElement(He,{as:"p",id:he},D))};je.__docgenInfo={description:"",methods:[],displayName:"DatepickerComp",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Triggered when focus leaves one of the fields (dd, mm, yyyy), and the next focused element is not one of these fields."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id of the label describing the datepicker. Required for UU-compatibility"}}};const E=({locale:n="nb",value:i,setInputGroupLabelAsSpan:s,...e})=>(u.useEffect(()=>{s==null||s()},[s]),r.createElement(we,{locale:n,value:i},r.createElement(je,{...e})));E.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Triggered when focus leaves one of the fields (dd, mm, yyyy), and the next focused element is not one of these fields."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id of the label describing the datepicker. Required for UU-compatibility"},value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},setInputGroupLabelAsSpan:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Hack that changes InputGroups label to a span to be wcag complient"}}};const Ge={title:"Komponenter/Datepicker/Datepicker",component:E},m={args:{locale:"nb",maxDate:"31.12.2025",minDate:"01.01.2024",labelId:"datepicker-label"},render:function({value:i,onChange:s,...e}){var g;const[o,d]=u.useState("01.12.2024");return r.createElement(q,{label:"Dato",labelId:(g=m==null?void 0:m.args)==null?void 0:g.labelId},M=>r.createElement(E,{value:i??o,onChange:d,...M,...e}))}},x={args:{...m.args},render:function({value:i,onChange:s,...e}){var g;const[o,d]=u.useState("01.12.2024");return r.createElement(q,{label:"Dato","aria-invalid":!0,fieldMessage:"Ugyldig dato",labelId:(g=m==null?void 0:m.args)==null?void 0:g.labelId},M=>r.createElement(E,{value:i??o,onChange:d,...M,...e}))}},O={args:{...m.args,fullWidth:!0},render:function({value:i,onChange:s,...e}){var g;const[o,d]=u.useState("01.12.2024");return r.createElement(q,{label:"Dato",labelId:(g=m==null?void 0:m.args)==null?void 0:g.labelId},r.createElement(E,{value:i??o,onChange:d,...e}))}},S={args:{...m.args,calendarAbove:!0},render:function({value:i,onChange:s,...e}){var g;const[o,d]=u.useState("01.12.2024");return r.createElement(q,{label:"Dato",labelId:(g=m==null?void 0:m.args)==null?void 0:g.labelId},r.createElement(E,{value:i??o,onChange:d,...e}))}},R={args:{...m.args},render:function({...i}){var b;const[s,e]=u.useState("01.12.2024"),[o,d]=u.useState("initiell"),g=p=>{e(p),d("datepicker")},M=[{label:"I dag",value:()=>{const p=new Date;return`${String(p.getDate()).padStart(2,"0")}.${String(p.getMonth()+1).padStart(2,"0")}.${p.getFullYear()}`}},{label:"Begynnelsen av året",value:"01.01.2024"},{label:"Slutten av året",value:"31.12.2024"},{label:"Midten av året",value:"01.07.2024"}];return r.createElement("div",null,r.createElement(q,{label:"Dato",labelId:(b=m==null?void 0:m.args)==null?void 0:b.labelId},r.createElement(E,{...i,value:s,onChange:g})),r.createElement("div",{style:{marginTop:"20px"}},r.createElement("div",null,"Kontroller datepicker eksternt:"),r.createElement("div",{style:{display:"flex",gap:"10px",marginTop:"10px"}},M.map((p,C)=>r.createElement(Pe,{key:C,onClick:()=>{const D=typeof p.value=="function"?p.value():p.value;e(D),d("ekstern")}},p.label))),r.createElement("div",{style:{marginTop:"20px"}},r.createElement("div",null,"Manuell ekstern input:"),r.createElement("div",{style:{display:"flex",gap:"10px",maxWidth:"200px",marginTop:"10px"}},r.createElement(Ce,{type:"text",value:s,onChange:p=>{e(p.target.value),d("manuell")},placeholder:"dd.mm.åååå"}))),r.createElement("div",{style:{marginTop:"20px"}},r.createElement("div",null,"Nåværende tilstand:"),r.createElement("div",null,"Dato: ",s),r.createElement("div",null,"Sist oppdatert av: ",o))))}};var de,ue,ce;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,me,Me;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(Me=(me=x.parameters)==null?void 0:me.docs)==null?void 0:Me.source}}};var ge,ye,De;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(De=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:De.source}}};var fe,ve,Te;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Te=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var be,Ie,Le;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Le=(Ie=R.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};const Ze=["Standard","FieldMessageString","FullWidth","CalendarAbove","TwoWayControlledComponent"],rt=Object.freeze(Object.defineProperty({__proto__:null,CalendarAbove:S,FieldMessageString:x,FullWidth:O,Standard:m,TwoWayControlledComponent:R,__namedExportsOrder:Ze,default:Ge},Symbol.toStringTag,{value:"Module"}));export{rt as D,m as S};
