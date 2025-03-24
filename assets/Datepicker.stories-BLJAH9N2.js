import{R as r,r as o}from"./index-DQDNmYQF.js";import{v as ae,g as Q,i as L,C as He,a as Pe}from"./Calendar-C-_Y4p52.js";import{c as P}from"./index-QCImZZ3W.js";import{d as Fe}from"./index-D9tCDUwu.js";import{I as $e}from"./Icon-BqsuuMcG.js";import{E as We,I as F}from"./InputGroup-BjWAIw_h.js";import{S as Be}from"./SecondaryButton-C30B7eR2.js";var te=function(){return te=Object.assign||function(n){for(var a,i=1,e=arguments.length;i<e;i++){a=arguments[i];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},te.apply(this,arguments)},Ge=function(n,a){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(n);s<e.length;s++)a.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(n,e[s])&&(i[e[s]]=n[e[s]]);return i},Ae=r.forwardRef(function(n,a){var i=n.className,e=n.inline,s=n.textRightAlign,u=Ge(n,["className","inline","textRightAlign"]);return r.createElement("input",te({className:P("ffe-input-field",{"ffe-input-field--inline":e},{"ffe-input-field--text-right-align":s},i),ref:a},u))});Ae.__docgenInfo={description:"",methods:[],displayName:"Input"};const h=n=>{const a=n.filter(i=>typeof i=="number");return a.map((i,e)=>(i??1)*Math.pow(10,a.length-e-1)).reduce((i,e)=>i+e,0)},je=o.createContext({day:null,month:null,year:null,setDay:()=>null,setMonth:()=>null,setYear:()=>null,locale:"nb",calendarActiveDate:"",setCalendarActiveDate:()=>null,setLastChangedValue:()=>null}),Ve=12,Ze=31,Ne=({children:n,value:a="",locale:i})=>{const e=ae(a)?Q(a):"",[s,u]=o.useState(e?e.date:null),[g,m]=o.useState(e?e.month+1:null),[C,y]=o.useState(e?e.year:null),[E,D]=o.useState((e==null?void 0:e.toString())??""),[w,c]=o.useState(a??"");return o.useEffect(()=>{a!==w&&(u(e?e.date:null),m(e?e.month+1:null),y(e?e.year:null),D((e==null?void 0:e.toString())??""))},[a]),r.createElement(je.Provider,{value:{day:s,month:g,year:C,setDay:(f,l=void 0)=>{const T=f.slice(-2),[d,I]=T,b=h(T);b>Ze?l==null||l():d>3?(u(b),l==null||l()):(u(b),I!==void 0&&(l==null||l()))},setMonth:(f,l=void 0)=>{const T=f.slice(-2),[d,I]=T,b=h(T);b>Ve?l==null||l():d>1?(m(b),l==null||l()):(m(b),I!==void 0&&(l==null||l()))},setYear:f=>{y(h(f.slice(-4)))},calendarActiveDate:E,setCalendarActiveDate:f=>{D(f)},locale:i,setLastChangedValue:f=>{c(f)}}},n)};Ne.__docgenInfo={description:"",methods:[],displayName:"DatepickerProvider",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const B=r.forwardRef(({className:n,onSpinButtonChange:a,maxLength:i,min:e,max:s,value:u,nextSpinButton:g,prevSpinButton:m,children:C,...y},E)=>{const D=o.useRef([]),w=c=>{var f,l,T;if(c.stopPropagation(),/\d/.test(c.key))D.current=D.current.length===i?D.current=[parseInt(c.key)]:D.current.concat(parseInt(c.key)),a(D.current);else if(c.key==="Backspace"||c.key==="Delete"){if(D.current=[],u===0){(f=m==null?void 0:m.current)==null||f.focus();return}const d=u==null?void 0:u.toString().slice(0,-1);D.current=d?d.split("").map(Number):[],a(D.current)}else if(c.key==="ArrowUp"){c.preventDefault();let d=(u??0)+1;d&&d!==null&&d>s&&(d=e),a([d],!1)}else if(c.key==="ArrowDown"){c.preventDefault();let d=(u??0)-1;d<e&&(d=s),a([d],!1)}else c.key==="ArrowLeft"?(c.preventDefault(),(l=m==null?void 0:m.current)==null||l.focus()):c.key==="ArrowRight"&&(c.preventDefault(),(T=g==null?void 0:g.current)==null||T.focus())};return r.createElement("span",{role:"spinbutton",inputMode:"numeric",className:P(n,"ffe-dateinput__field"),tabIndex:0,onFocus:()=>{D.current=[]},"aria-valuemin":e,"aria-valuemax":s,"aria-valuenow":u,ref:E,onKeyDown:w,...y},C)});B.__docgenInfo={description:"",methods:[],displayName:"SpinButton",props:{className:{required:!1,tsType:{name:"string"},description:""},onSpinButtonChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number[], allowFocusNext?: boolean) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"value"},{type:{name:"boolean"},name:"allowFocusNext"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"number"},description:""},nextSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},prevSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""}}};const z=n=>n<10?`0${n}`:n,ze=r.forwardRef(({value:n,locale:a,onClick:i},e)=>{const s=ae(n)?`${L[a].CHANGE_DATE}, ${L[a].CHOSEN_DATE} ${n}`:L[a].CHOOSE_DATE;return r.createElement("button",{"data-testid":"datepicker-open",ref:e,onClick:i,className:"ffe-datepicker__button","aria-label":s,type:"button"},r.createElement($e,{ariaLabel:L[a].CALENDAR_LABEL,fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yMTIuMzA5LTEwMC4wMDFxLTMwLjMwOCAwLTUxLjMwOC0yMXQtMjEtNTEuMzA4di01MzUuMzgycTAtMzAuMzA4IDIxLTUxLjMwOHQ1MS4zMDgtMjFoNTUuMzg1di01My44NDdxMC0xMy4xNTMgOC44MDgtMjEuOTYxIDguODA3LTguODA3IDIxLjk2MS04LjgwNyAxMy4xNTMgMCAyMS45NjEgOC44MDcgOC44MDcgOC44MDggOC44MDcgMjEuOTYxdjUzLjg0N2gzMDMuMDc2di01NC42MTZxMC0xMi43NjkgOC42MTUtMjEuMzg0dDIxLjM4NC04LjYxNXExMi43NjkgMCAyMS4zODQgOC42MTUgOC42MTYgOC42MTUgOC42MTYgMjEuMzg0djU0LjYxNmg1NS4zODVxMzAuMzA4IDAgNTEuMzA4IDIxdDIxIDUxLjMwOHY1MzUuMzgycTAgMzAuMzA4LTIxIDUxLjMwOHQtNTEuMzA4IDIxSDIxMi4zMDlabTAtNTkuOTk5aDUzNS4zODJxNC42MTYgMCA4LjQ2My0zLjg0NiAzLjg0Ni0zLjg0NyAzLjg0Ni04LjQ2M3YtMzc1LjM4MkgyMDB2Mzc1LjM4MnEwIDQuNjE2IDMuODQ2IDguNDYzIDMuODQ3IDMuODQ2IDguNDYzIDMuODQ2Wk0yMDAtNjA3LjY5aDU2MHYtMTAwLjAwMXEwLTQuNjE2LTMuODQ2LTguNDYzLTMuODQ3LTMuODQ2LTguNDYzLTMuODQ2SDIxMi4zMDlxLTQuNjE2IDAtOC40NjMgMy44NDYtMy44NDYgMy44NDctMy44NDYgOC40NjN2MTAwLjAwMVptMCAwVi03MjB2MTEyLjMxWm0yODAgMjEwLjc2N3EtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4VDQ4MC00NjcuNjkxcTE0LjY5MiAwIDI1LjAzOCAxMC4zNDZ0MTAuMzQ2IDI1LjAzOHEwIDE0LjY5Mi0xMC4zNDYgMjUuMDM4VDQ4MC0zOTYuOTIzWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQzMjAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQzMjAtMzk2LjkyM1ptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ2NDAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ2NDAtMzk2LjkyM1pNNDgwLTI0MHEtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4IDEwLjM0Ni0xMC4zNDcgMjUuMDM4LTEwLjM0N3QyNS4wMzggMTAuMzQ3cTEwLjM0NiAxMC4zNDYgMTAuMzQ2IDI1LjAzOHQtMTAuMzQ2IDI1LjAzOFE0OTQuNjkyLTI0MCA0ODAtMjQwWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRMzM0LjY5Mi0yNDAgMzIwLTI0MFptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNjU0LjY5Mi0yNDAgNjQwLTI0MFoiLz48L3N2Zz4=",size:"md",className:"ffe-datepicker__icon"}))});ze.__docgenInfo={description:"",methods:[],displayName:"Button",props:{value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const Xe=n=>typeof n=="number"&&n>=1&&n<=12,he=({ariaInvalid:n,"aria-invalid":a,ariaDescribedby:i,"aria-describedby":e,onBlur:s,calendarAbove:u,id:g,maxDate:m,minDate:C,onChange:y,fullWidth:E,fieldMessage:D,labelId:w})=>{const{day:c,setDay:f,year:l,setYear:T,month:d,setMonth:I,locale:b,calendarActiveDate:ne,setCalendarActiveDate:re,setLastChangedValue:ie}=o.useContext(je),[k,G]=o.useState(!1),[V,ke]=o.useState(C),[Z,xe]=o.useState(m),[se,le]=o.useState(""),X=o.useId(),$=o.useRef(null),x=o.useRef(null),N=o.useRef(null),O=o.useRef(null),S=o.useCallback(()=>`${z(c??0)}.${z(d??0)}.${l}`,[c,d,l]),Oe=()=>D?`${X}-fieldmessage`:void 0,A=o.useCallback(t=>{ie(t),y(t)},[y,ie]),Se=Oe(),W=o.useCallback(Fe(t=>{t!==se&&ae(t)&&(re(t),le(t))},250),[se]),Re=!!D;o.useEffect(()=>()=>{W.cancel()},[W]);const R=o.useCallback(()=>{const t=S();Q(t,p=>{const v=m?Q(m):null;v!=null&&v.isBefore(p)&&Pe(t)&&p.adjust({period:"Y",offset:-100});const ee=p.format();ee!==t&&(A(ee),f([p.date]),I([p.month+1]),T([p.year])),le(ee)})},[S,m,A,f,I,T]);o.useEffect(()=>{(C!==V||m!==Z)&&(ke(C),xe(m),R()),W(S())},[C,m,S,W,V,Z,R]);const oe=()=>{var t;G(!1),(t=$.current)==null||t.focus(),R()},de=t=>{t.key==="Escape"&&oe()},ue=t=>{k&&t.__datepickerID!==X&&oe()},Ye=()=>{window.addEventListener("click",ue),window.addEventListener("keyup",de)},ce=()=>{window.removeEventListener("click",ue),window.removeEventListener("keyup",de)};o.useEffect(()=>(k?Ye():ce(),()=>{ce()}),[k]);const Qe=()=>{R(),G(!k)},qe=t=>{const p=t.nativeEvent;p.__datepickerID=X},_e=t=>{var p;t.target!==O.current&&t.target!==$.current&&t.target!==x.current&&t.target!==N.current&&((p=x.current)==null||p.focus())},Ue=t=>{var v;const p=Q(t);p&&(f([p.date]),I([p.month+1]),T([p.year]),A(t),G(!1),re(t),(v=$.current)==null||v.focus())},Y=()=>{const t=a==="true"||n;return t==="true"||t===!0?"true":void 0},K=()=>e??i,J=t=>{t.preventDefault();const p=(t.clipboardData||window.Clipboard).getData("text"),v=Q(p);v&&(f([v.date]),I([v.month+1]),T([v.year]),A(S()))};return r.createElement("div",{className:P("ffe-datepicker",{"ffe-datepicker--full-width":E,"ffe-input-group--message":Re,"ffe-datepicker--invalid":Y()}),"data-testid":"date-picker",onClick:t=>{qe(t),_e(t)},role:"group",id:g},r.createElement("div",{className:P("ffe-input-field","ffe-dateinput",{"ffe-input-field--invalid":Y()}),onBlur:t=>{const p=t.relatedTarget;p!==O.current&&p!==x.current&&p!==N.current&&(s==null||s(t),R())}},r.createElement(B,{ref:x,value:c??void 0,min:1,max:31,onPaste:J,onSpinButtonChange:(t,p=!0)=>(A(`${z(h(t))}.${d}.${l}`),p?f(t,()=>{var v;return(v=N.current)==null?void 0:v.focus({preventScroll:!0})}):f(t)),nextSpinButton:N,maxLength:2,"aria-invalid":Y(),"aria-valuenow":typeof c=="number"?c:void 0,"aria-valuetext":`${c}`,"aria-label":L[b].DAY,"aria-describedby":K(),"aria-labelledby":w},c?z(c):"dd"),".",r.createElement(B,{ref:N,value:d??void 0,min:1,max:12,onPaste:J,onSpinButtonChange:(t,p=!0)=>(A(`${c}.${z(h(t))}.${l}`),p?I(t,()=>{var v;return(v=O.current)==null?void 0:v.focus({preventScroll:!0})}):I(t)),nextSpinButton:O,prevSpinButton:x,maxLength:2,"aria-invalid":Y(),"aria-valuenow":typeof d=="number"?d:void 0,"aria-valuetext":Xe(d)?`${d} - ${L[b][`MONTH_${d}`]}`:void 0,"aria-label":L[b].MONTH,"aria-describedby":K(),"aria-labelledby":w},d?z(d):"mm"),".",r.createElement(B,{ref:O,className:"ffe-dateinput__field-year",value:l??void 0,min:1,max:9999,onPaste:J,onSpinButtonChange:t=>{A(`${c}.${d}.${h(t)}`),T(t)},prevSpinButton:N,maxLength:4,"aria-invalid":Y(),"aria-valuetext":`${l}`,"aria-valuenow":typeof l=="number"?l:void 0,"aria-label":L[b].YEAR,"aria-describedby":K(),"aria-labelledby":w},l||"yyyy")),r.createElement(ze,{onClick:Qe,locale:b,value:ne||"",ref:$}),k&&r.createElement(He,{calendarClassName:P("ffe-calendar ffe-calendar--datepicker",{"ffe-calendar--datepicker--above":u}),locale:b,maxDate:Z,minDate:V,onDatePicked:Ue,selectedDate:ne,focusOnMount:!0}),!!D&&r.createElement(We,{as:"p",id:Se},D))};he.__docgenInfo={description:"",methods:[],displayName:"DatepickerComp",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Triggered when focus leaves one of the fields (dd, mm, yyyy), and the next focused element is not one of these fields."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id of the label describing the datepicker. Required for UU-compatibility"}}};const j=({locale:n="nb",value:a,setInputGroupLabelAsSpan:i,...e})=>(o.useEffect(()=>{i==null||i()},[i]),r.createElement(Ne,{locale:n,value:a},r.createElement(he,{...e})));j.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Triggered when focus leaves one of the fields (dd, mm, yyyy), and the next focused element is not one of these fields."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id of the label describing the datepicker. Required for UU-compatibility"},value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},setInputGroupLabelAsSpan:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Hack that changes InputGroups label to a span to be wcag complient"}}};const Ke={title:"Komponenter/Datepicker/Datepicker",component:j},M={args:{locale:"nb",maxDate:"31.12.2025",minDate:"01.01.2024",labelId:"datepicker-label"},render:function({value:a,onChange:i,...e}){var g;const[s,u]=o.useState("01.12.2024");return r.createElement(F,{label:"Dato",labelId:(g=M==null?void 0:M.args)==null?void 0:g.labelId},m=>r.createElement(j,{value:a??s,onChange:u,...m,...e}))}},q={args:{...M.args},render:function({value:a,onChange:i,...e}){var g;const[s,u]=o.useState("01.12.2024");return r.createElement(F,{label:"Dato","aria-invalid":!0,fieldMessage:"Ugyldig dato",labelId:(g=M==null?void 0:M.args)==null?void 0:g.labelId},m=>r.createElement(j,{value:a??s,onChange:u,...m,...e}))}},_={args:{...M.args,fullWidth:!0},render:function({value:a,onChange:i,...e}){var g;const[s,u]=o.useState("01.12.2024");return r.createElement(F,{label:"Dato",labelId:(g=M==null?void 0:M.args)==null?void 0:g.labelId},r.createElement(j,{value:a??s,onChange:u,...e}))}},U={args:{...M.args,calendarAbove:!0},render:function({value:a,onChange:i,...e}){var g;const[s,u]=o.useState("01.12.2024");return r.createElement(F,{label:"Dato",labelId:(g=M==null?void 0:M.args)==null?void 0:g.labelId},r.createElement(j,{value:a??s,onChange:u,...e}))}},H={args:{...M.args},render:function({...a}){var C;const[i,e]=o.useState("01.12.2024"),[s,u]=o.useState("initiell"),g=y=>{e(y),u("datepicker")},m=[{label:"I dag",value:()=>{const y=new Date;return`${String(y.getDate()).padStart(2,"0")}.${String(y.getMonth()+1).padStart(2,"0")}.${y.getFullYear()}`}},{label:"Begynnelsen av året",value:"01.01.2024"},{label:"Slutten av året",value:"31.12.2024"},{label:"Midten av året",value:"01.07.2024"}];return r.createElement("div",null,r.createElement(F,{label:"Dato",labelId:(C=M==null?void 0:M.args)==null?void 0:C.labelId},r.createElement(j,{...a,value:i,onChange:g})),r.createElement("div",{style:{marginTop:"20px"}},r.createElement("div",null,"Kontroller datepicker eksternt:"),r.createElement("div",{style:{display:"flex",gap:"10px",marginTop:"10px"}},m.map((y,E)=>r.createElement(Be,{key:E,onClick:()=>{const D=typeof y.value=="function"?y.value():y.value;e(D),u("ekstern")}},y.label))),r.createElement("div",{style:{marginTop:"20px"}},r.createElement("div",null,"Manuell ekstern input:"),r.createElement("div",{style:{display:"flex",gap:"10px",maxWidth:"200px",marginTop:"10px"}},r.createElement(Ae,{type:"text",value:i,onChange:y=>{e(y.target.value),u("manuell")},placeholder:"dd.mm.åååå"}))),r.createElement("div",{style:{marginTop:"20px"}},r.createElement("div",null,"Nåværende tilstand:"),r.createElement("div",null,"Dato: ",i),r.createElement("div",null,"Sist oppdatert av: ",s))))}};var pe,me,Me;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(Me=(me=M.parameters)==null?void 0:me.docs)==null?void 0:Me.source}}};var ge,ye,De;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(De=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:De.source}}};var fe,ve,Te;_.parameters={..._.parameters,docs:{...(fe=_.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Te=(ve=_.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var be,Ce,Ie;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ie=(Ce=U.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var Le,Ee,we;H.parameters={...H.parameters,docs:{...(Le=H.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(we=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};const Je=["Standard","FieldMessageString","FullWidth","CalendarAbove","TwoWayControlledComponent"],lt=Object.freeze(Object.defineProperty({__proto__:null,CalendarAbove:U,FieldMessageString:q,FullWidth:_,Standard:M,TwoWayControlledComponent:H,__namedExportsOrder:Je,default:Ke},Symbol.toStringTag,{value:"Module"}));export{lt as D,M as S};
