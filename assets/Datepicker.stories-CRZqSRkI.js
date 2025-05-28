import{r as n,R as a}from"./index-DQDNmYQF.js";import{v as J,g as R,i as I,a as _e,p as ue,C as Fe,b as Pe}from"./Calendar-8enfC7dN.js";import{c as P}from"./index-QCImZZ3W.js";import{d as We}from"./index-D9tCDUwu.js";import{I as Be}from"./Icon-BqsuuMcG.js";import{E as Ge,I as H}from"./InputGroup-DOKvm3eQ.js";import{S as $e}from"./SecondaryButton-C30B7eR2.js";import{I as Ve}from"./Input-DYak8_-P.js";const K=m=>{const r=m.filter(c=>typeof c=="number");return r.map((c,t)=>(c??1)*Math.pow(10,r.length-t-1)).reduce((c,t)=>c+t,0)},Ae=n.createContext({day:null,month:null,year:null,setDay:()=>null,setMonth:()=>null,setYear:()=>null,locale:"nb",calendarActiveDate:"",setCalendarActiveDate:()=>null,setLastChangedValue:()=>null}),Ze=12,Xe=31,we=({children:m,value:r="",locale:c})=>{const t=J(r)?R(r):"",[M,o]=n.useState(t?t.date:null),[g,p]=n.useState(t?t.month+1:null),[L,D]=n.useState(t?t.year:null),[E,y]=n.useState((t==null?void 0:t.toString())??""),[A,d]=n.useState(r??"");return n.useEffect(()=>{r!==A&&(o(t?t.date:null),p(t?t.month+1:null),D(t?t.year:null),y((t==null?void 0:t.toString())??""))},[r]),a.createElement(Ae.Provider,{value:{day:M,month:g,year:L,setDay:(f,i=void 0)=>{const T=f.slice(-2),[l,C]=T,b=K(T);b>Xe?i==null||i():l>3?(o(b),i==null||i()):(o(b),C!==void 0&&(i==null||i()))},setMonth:(f,i=void 0)=>{const T=f.slice(-2),[l,C]=T,b=K(T);b>Ze?i==null||i():l>1?(p(b),i==null||i()):(p(b),C!==void 0&&(i==null||i()))},setYear:f=>{D(K(f.slice(-4)))},calendarActiveDate:E,setCalendarActiveDate:f=>{y(f)},locale:c,setLastChangedValue:f=>{d(f)}}},m)};we.__docgenInfo={description:"",methods:[],displayName:"DatepickerProvider",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const W=a.forwardRef(({className:m,onSpinButtonChange:r,maxLength:c,min:t,max:M,value:o,nextSpinButton:g,prevSpinButton:p,children:L,...D},E)=>{const y=n.useRef([]),A=d=>{var f,i,T;if(d.stopPropagation(),/\d/.test(d.key))y.current=y.current.length===c?y.current=[parseInt(d.key)]:y.current.concat(parseInt(d.key)),r(y.current);else if(d.key==="Backspace"||d.key==="Delete"){if(y.current=[],o===0){(f=p==null?void 0:p.current)==null||f.focus();return}const l=o==null?void 0:o.toString().slice(0,-1);y.current=l?l.split("").map(Number):[],r(y.current)}else if(d.key==="ArrowUp"){d.preventDefault();let l=(o??0)+1;l&&l!==null&&l>M&&(l=t),r([l],!1)}else if(d.key==="ArrowDown"){d.preventDefault();let l=(o??0)-1;l<t&&(l=M),r([l],!1)}else d.key==="ArrowLeft"?(d.preventDefault(),(i=p==null?void 0:p.current)==null||i.focus()):d.key==="ArrowRight"&&(d.preventDefault(),(T=g==null?void 0:g.current)==null||T.focus())};return a.createElement("span",{role:"spinbutton",inputMode:"numeric",className:P(m,"ffe-dateinput__field"),tabIndex:0,onFocus:()=>{y.current=[]},"aria-valuemin":t,"aria-valuemax":M,"aria-valuenow":o,ref:E,onKeyDown:A,...D},L)});W.__docgenInfo={description:"",methods:[],displayName:"SpinButton",props:{className:{required:!1,tsType:{name:"string"},description:""},onSpinButtonChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number[], allowFocusNext?: boolean) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"value"},{type:{name:"boolean"},name:"allowFocusNext"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"number"},description:""},nextSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},prevSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""}}};const je=a.forwardRef(({value:m,locale:r,onClick:c},t)=>{const M=J(m)?`${I[r].CHANGE_DATE}, ${I[r].CHOSEN_DATE} ${m}`:I[r].CHOOSE_DATE;return a.createElement("button",{"data-testid":"datepicker-open",ref:t,onClick:c,className:"ffe-datepicker__button","aria-label":M,type:"button"},a.createElement(Be,{ariaLabel:I[r].CALENDAR_LABEL,fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yMTIuMzA5LTEwMC4wMDFxLTMwLjMwOCAwLTUxLjMwOC0yMXQtMjEtNTEuMzA4di01MzUuMzgycTAtMzAuMzA4IDIxLTUxLjMwOHQ1MS4zMDgtMjFoNTUuMzg1di01My44NDdxMC0xMy4xNTMgOC44MDgtMjEuOTYxIDguODA3LTguODA3IDIxLjk2MS04LjgwNyAxMy4xNTMgMCAyMS45NjEgOC44MDcgOC44MDcgOC44MDggOC44MDcgMjEuOTYxdjUzLjg0N2gzMDMuMDc2di01NC42MTZxMC0xMi43NjkgOC42MTUtMjEuMzg0dDIxLjM4NC04LjYxNXExMi43NjkgMCAyMS4zODQgOC42MTUgOC42MTYgOC42MTUgOC42MTYgMjEuMzg0djU0LjYxNmg1NS4zODVxMzAuMzA4IDAgNTEuMzA4IDIxdDIxIDUxLjMwOHY1MzUuMzgycTAgMzAuMzA4LTIxIDUxLjMwOHQtNTEuMzA4IDIxSDIxMi4zMDlabTAtNTkuOTk5aDUzNS4zODJxNC42MTYgMCA4LjQ2My0zLjg0NiAzLjg0Ni0zLjg0NyAzLjg0Ni04LjQ2M3YtMzc1LjM4MkgyMDB2Mzc1LjM4MnEwIDQuNjE2IDMuODQ2IDguNDYzIDMuODQ3IDMuODQ2IDguNDYzIDMuODQ2Wk0yMDAtNjA3LjY5aDU2MHYtMTAwLjAwMXEwLTQuNjE2LTMuODQ2LTguNDYzLTMuODQ3LTMuODQ2LTguNDYzLTMuODQ2SDIxMi4zMDlxLTQuNjE2IDAtOC40NjMgMy44NDYtMy44NDYgMy44NDctMy44NDYgOC40NjN2MTAwLjAwMVptMCAwVi03MjB2MTEyLjMxWm0yODAgMjEwLjc2N3EtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4VDQ4MC00NjcuNjkxcTE0LjY5MiAwIDI1LjAzOCAxMC4zNDZ0MTAuMzQ2IDI1LjAzOHEwIDE0LjY5Mi0xMC4zNDYgMjUuMDM4VDQ4MC0zOTYuOTIzWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQzMjAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQzMjAtMzk2LjkyM1ptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ2NDAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ2NDAtMzk2LjkyM1pNNDgwLTI0MHEtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4IDEwLjM0Ni0xMC4zNDcgMjUuMDM4LTEwLjM0N3QyNS4wMzggMTAuMzQ3cTEwLjM0NiAxMC4zNDYgMTAuMzQ2IDI1LjAzOHQtMTAuMzQ2IDI1LjAzOFE0OTQuNjkyLTI0MCA0ODAtMjQwWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRMzM0LjY5Mi0yNDAgMzIwLTI0MFptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNjU0LjY5Mi0yNDAgNjQwLTI0MFoiLz48L3N2Zz4=",size:"md",className:"ffe-datepicker__icon"}))});je.__docgenInfo={description:"",methods:[],displayName:"Button",props:{value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const Ke=m=>typeof m=="number"&&m>=1&&m<=12,ze=({ariaInvalid:m,"aria-invalid":r,ariaDescribedby:c,"aria-describedby":t,onBlur:M,calendarAbove:o,id:g,maxDate:p,minDate:L,onChange:D,fullWidth:E,fieldMessage:y,labelId:A})=>{const{day:d,setDay:f,year:i,setYear:T,month:l,setMonth:C,locale:b,calendarActiveDate:ee,setCalendarActiveDate:te,setLastChangedValue:ae}=n.useContext(Ae),z=n.useCallback(()=>_e(d,l,i),[d,l,i]),[N,B]=n.useState(!1),[G,Ne]=n.useState(L),[$,he]=n.useState(p),[h,ne]=n.useState(z()),V=n.useId(),_=n.useRef(null),k=n.useRef(null),j=n.useRef(null),S=n.useRef(null),ke=()=>y?`${V}-fieldmessage`:void 0,re=n.useCallback(e=>{ae(e),D(e)},[D,ae]),Se=ke(),F=n.useCallback(We(e=>{e!==h&&J(e)&&(te(e),ne(e))},250),[h]),xe=!!y;n.useEffect(()=>()=>{F.cancel()},[F]);const x=n.useCallback(()=>{const e=z();R(e,s=>{const v=p?R(p):null;v!=null&&v.isBefore(s)&&Pe(e)&&s.adjust({period:"Y",offset:-100});const de=s.format();de!==e&&(f([s.date]),C([s.month+1]),T([s.year])),ne(de)})},[z,p,f,C,T]);n.useEffect(()=>{(L!==G||p!==$)&&(Ne(L),he(p),x()),F(z())},[L,p,z,F,G,$,x]);const ie=()=>{var e;B(!1),(e=_.current)==null||e.focus(),x()},se=e=>{e.key==="Escape"&&ie()},le=e=>{N&&e.__datepickerID!==V&&ie()},Oe=()=>{window.addEventListener("click",le),window.addEventListener("keyup",se)},oe=()=>{window.removeEventListener("click",le),window.removeEventListener("keyup",se)};n.useEffect(()=>(N?Oe():oe(),()=>{oe()}),[N]);const Re=()=>{x(),B(!N)},Ye=e=>{const s=e.nativeEvent;s.__datepickerID=V},Qe=e=>{var s;e.target!==S.current&&e.target!==_.current&&e.target!==k.current&&e.target!==j.current&&((s=k.current)==null||s.focus())},qe=e=>{var v;const s=R(e);s&&(f([s.date]),C([s.month+1]),T([s.year]),B(!1),te(e),(v=_.current)==null||v.focus())},O=()=>{const e=r==="true"||m;return e==="true"||e===!0?"true":void 0},Z=()=>t??c,X=e=>{e.preventDefault();const s=(e.clipboardData||window.Clipboard).getData("text"),v=R(s);v&&(f([v.date]),C([v.month+1]),T([v.year]))},[Ue,He]=n.useState(!0);return n.useEffect(()=>{if(Ue){He(!1);return}const[e,s,v]=h.split(".").map(Number);if(e*s*v>0){re(h);return}re("")},[h]),a.createElement("div",{className:P("ffe-datepicker","ffe-default-mode",{"ffe-datepicker--full-width":E,"ffe-input-group--message":xe,"ffe-datepicker--invalid":O()}),"data-testid":"date-picker",onClick:e=>{Ye(e),Qe(e)},role:"group",id:g},a.createElement("div",{className:P("ffe-input-field","ffe-dateinput",{"ffe-input-field--invalid":O()}),onBlur:e=>{const s=e.relatedTarget;s!==S.current&&s!==k.current&&s!==j.current&&(M==null||M(e),x())}},a.createElement(W,{ref:k,value:d??void 0,min:1,max:31,onPaste:X,onSpinButtonChange:(e,s=!0)=>s?f(e,()=>{var v;return(v=j.current)==null?void 0:v.focus({preventScroll:!0})}):f(e),nextSpinButton:j,maxLength:2,"aria-invalid":O(),"aria-valuenow":typeof d=="number"?d:void 0,"aria-valuetext":`${d}`,"aria-label":I[b].DAY,"aria-describedby":Z(),"aria-labelledby":A},d?ue(d):"dd"),".",a.createElement(W,{ref:j,value:l??void 0,min:1,max:12,onPaste:X,onSpinButtonChange:(e,s=!0)=>s?C(e,()=>{var v;return(v=S.current)==null?void 0:v.focus({preventScroll:!0})}):C(e),nextSpinButton:S,prevSpinButton:k,maxLength:2,"aria-invalid":O(),"aria-valuenow":typeof l=="number"?l:void 0,"aria-valuetext":Ke(l)?`${l} - ${I[b][`MONTH_${l}`]}`:void 0,"aria-label":I[b].MONTH,"aria-describedby":Z(),"aria-labelledby":A},l?ue(l):"mm"),".",a.createElement(W,{ref:S,className:"ffe-dateinput__field-year",value:i??void 0,min:1,max:9999,onPaste:X,onSpinButtonChange:e=>{T(e)},prevSpinButton:j,maxLength:4,"aria-invalid":O(),"aria-valuetext":`${i}`,"aria-valuenow":typeof i=="number"?i:void 0,"aria-label":I[b].YEAR,"aria-describedby":Z(),"aria-labelledby":A},i||"yyyy")),a.createElement(je,{onClick:Re,locale:b,value:ee||"",ref:_}),N&&a.createElement(Fe,{calendarClassName:P("ffe-calendar ffe-calendar--datepicker",{"ffe-calendar--datepicker--above":o}),locale:b,maxDate:$,minDate:G,onDatePicked:qe,selectedDate:ee,focusOnMount:!0}),!!y&&a.createElement(Ge,{as:"p",id:Se},y))};ze.__docgenInfo={description:"",methods:[],displayName:"DatepickerComp",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Triggered when focus leaves one of the fields (dd, mm, yyyy), and the next focused element is not one of these fields."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id of the label describing the datepicker. Required for UU-compatibility"}}};const w=({locale:m="nb",value:r,...c})=>a.createElement(we,{locale:m,value:r},a.createElement(ze,{...c}));w.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Triggered when focus leaves one of the fields (dd, mm, yyyy), and the next focused element is not one of these fields."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id of the label describing the datepicker. Required for UU-compatibility"},value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}}}};const Je={title:"Komponenter/Datepicker/Datepicker",component:w},u={args:{locale:"nb",maxDate:"31.12.2025",minDate:"01.01.2024",labelId:"datepicker-label"},render:function({value:r,onChange:c,...t}){var g;const[M,o]=n.useState("01.12.2024");return a.createElement(H,{label:"Dato",labelId:(g=u==null?void 0:u.args)==null?void 0:g.labelId},a.createElement(w,{value:r??M,onChange:p=>{o(p),console.log("Datepicker value:",p)},...t}))}},Y={args:{...u.args},render:function({value:r,onChange:c,...t}){var g;const[M,o]=n.useState("01.12.2024");return a.createElement(H,{label:"Dato","aria-invalid":!0,fieldMessage:"Ugyldig dato",labelId:(g=u==null?void 0:u.args)==null?void 0:g.labelId},a.createElement(w,{value:r??M,onChange:o,...t}))}},Q={args:{...u.args,fullWidth:!0},render:function({value:r,onChange:c,...t}){var g;const[M,o]=n.useState("01.12.2024");return a.createElement(H,{label:"Dato",labelId:(g=u==null?void 0:u.args)==null?void 0:g.labelId},a.createElement(w,{value:r??M,onChange:o,...t}))}},q={args:{...u.args,calendarAbove:!0},render:function({value:r,onChange:c,...t}){var g;const[M,o]=n.useState("01.12.2024");return a.createElement(H,{label:"Dato",labelId:(g=u==null?void 0:u.args)==null?void 0:g.labelId},a.createElement(w,{value:r??M,onChange:o,...t}))}},U={args:{...u.args},render:function({...r}){var L;const[c,t]=n.useState("01.12.2024"),[M,o]=n.useState("initiell"),g=D=>{t(D),o("datepicker")},p=[{label:"I dag",value:()=>{const D=new Date;return`${String(D.getDate()).padStart(2,"0")}.${String(D.getMonth()+1).padStart(2,"0")}.${D.getFullYear()}`}},{label:"Begynnelsen av året",value:"01.01.2024"},{label:"Slutten av året",value:"31.12.2024"},{label:"Midten av året",value:"01.07.2024"}];return a.createElement("div",null,a.createElement(H,{label:"Dato",labelId:(L=u==null?void 0:u.args)==null?void 0:L.labelId},a.createElement(w,{...r,value:c,onChange:g})),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("div",null,"Kontroller datepicker eksternt:"),a.createElement("div",{style:{display:"flex",gap:"10px",marginTop:"10px"}},p.map((D,E)=>a.createElement($e,{key:E,onClick:()=>{const y=typeof D.value=="function"?D.value():D.value;t(y),o("ekstern")}},D.label))),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("div",null,"Manuell ekstern input:"),a.createElement("div",{style:{display:"flex",gap:"10px",maxWidth:"200px",marginTop:"10px"}},a.createElement(Ve,{type:"text",value:c,onChange:D=>{t(D.target.value),o("manuell")},placeholder:"dd.mm.åååå"}))),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("div",null,"Nåværende tilstand:"),a.createElement("div",null,"Dato: ",c),a.createElement("div",null,"Sist oppdatert av: ",M))))}};var ce,pe,me;u.parameters={...u.parameters,docs:{...(ce=u.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
                <Datepicker value={value ?? date} onChange={date => {
        setDate(date);
        console.log('Datepicker value:', date);
      }} {...args} />
            </InputGroup>;
  }
}`,...(me=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var Me,ge,De;Y.parameters={...Y.parameters,docs:{...(Me=Y.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
                <Datepicker value={value ?? date} onChange={setDate} {...args} />
            </InputGroup>;
  }
}`,...(De=(ge=Y.parameters)==null?void 0:ge.docs)==null?void 0:De.source}}};var ye,fe,ve;Q.parameters={...Q.parameters,docs:{...(ye=Q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(fe=Q.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Te,be,Le;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Le=(be=q.parameters)==null?void 0:be.docs)==null?void 0:Le.source}}};var Ce,Ie,Ee;U.parameters={...U.parameters,docs:{...(Ce=U.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ee=(Ie=U.parameters)==null?void 0:Ie.docs)==null?void 0:Ee.source}}};const et=["Standard","FieldMessageString","FullWidth","CalendarAbove","TwoWayControlledComponent"],dt=Object.freeze(Object.defineProperty({__proto__:null,CalendarAbove:q,FieldMessageString:Y,FullWidth:Q,Standard:u,TwoWayControlledComponent:U,__namedExportsOrder:et,default:Je},Symbol.toStringTag,{value:"Module"}));export{dt as D,u as S};
