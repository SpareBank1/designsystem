import{r as i,R as a}from"./index-DQDNmYQF.js";import{v as te,g as Y,i as I,a as W,p as ce,C as He,b as _e}from"./Calendar-8enfC7dN.js";import{c as B}from"./index-QCImZZ3W.js";import{d as Fe}from"./index-D9tCDUwu.js";import{I as Pe}from"./Icon-BqsuuMcG.js";import{E as We,I as _}from"./InputGroup-DYJmYWjy.js";import{S as Be}from"./SecondaryButton-C30B7eR2.js";import{I as Ge}from"./Input-DYak8_-P.js";const N=p=>{const r=p.filter(c=>typeof c=="number");return r.map((c,t)=>(c??1)*Math.pow(10,r.length-t-1)).reduce((c,t)=>c+t,0)},we=i.createContext({day:null,month:null,year:null,setDay:()=>null,setMonth:()=>null,setYear:()=>null,locale:"nb",calendarActiveDate:"",setCalendarActiveDate:()=>null,setLastChangedValue:()=>null}),$e=12,Ve=31,je=({children:p,value:r="",locale:c})=>{const t=te(r)?Y(r):"",[m,d]=i.useState(t?t.date:null),[M,g]=i.useState(t?t.month+1:null),[L,D]=i.useState(t?t.year:null),[E,y]=i.useState((t==null?void 0:t.toString())??""),[A,l]=i.useState(r??"");return i.useEffect(()=>{r!==A&&(d(t?t.date:null),g(t?t.month+1:null),D(t?t.year:null),y((t==null?void 0:t.toString())??""))},[r]),a.createElement(we.Provider,{value:{day:m,month:M,year:L,setDay:(f,n=void 0)=>{const T=f.slice(-2),[s,C]=T,b=N(T);b>Ve?n==null||n():s>3?(d(b),n==null||n()):(d(b),C!==void 0&&(n==null||n()))},setMonth:(f,n=void 0)=>{const T=f.slice(-2),[s,C]=T,b=N(T);b>$e?n==null||n():s>1?(g(b),n==null||n()):(g(b),C!==void 0&&(n==null||n()))},setYear:f=>{D(N(f.slice(-4)))},calendarActiveDate:E,setCalendarActiveDate:f=>{y(f)},locale:c,setLastChangedValue:f=>{l(f)}}},p)};je.__docgenInfo={description:"",methods:[],displayName:"DatepickerProvider",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const G=a.forwardRef(({className:p,onSpinButtonChange:r,maxLength:c,min:t,max:m,value:d,nextSpinButton:M,prevSpinButton:g,children:L,...D},E)=>{const y=i.useRef([]),A=l=>{var f,n,T;if(l.stopPropagation(),/\d/.test(l.key))y.current=y.current.length===c?y.current=[parseInt(l.key)]:y.current.concat(parseInt(l.key)),r(y.current);else if(l.key==="Backspace"||l.key==="Delete"){if(y.current=[],d===0){(f=g==null?void 0:g.current)==null||f.focus();return}const s=d==null?void 0:d.toString().slice(0,-1);y.current=s?s.split("").map(Number):[],r(y.current)}else if(l.key==="ArrowUp"){l.preventDefault();let s=(d??0)+1;s&&s!==null&&s>m&&(s=t),r([s],!1)}else if(l.key==="ArrowDown"){l.preventDefault();let s=(d??0)-1;s<t&&(s=m),r([s],!1)}else l.key==="ArrowLeft"?(l.preventDefault(),(n=g==null?void 0:g.current)==null||n.focus()):l.key==="ArrowRight"&&(l.preventDefault(),(T=M==null?void 0:M.current)==null||T.focus())};return a.createElement("span",{role:"spinbutton",inputMode:"numeric",className:B(p,"ffe-dateinput__field"),tabIndex:0,onFocus:()=>{y.current=[]},"aria-valuemin":t,"aria-valuemax":m,"aria-valuenow":d,ref:E,onKeyDown:A,...D},L)});G.__docgenInfo={description:"",methods:[],displayName:"SpinButton",props:{className:{required:!1,tsType:{name:"string"},description:""},onSpinButtonChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number[], allowFocusNext?: boolean) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"value"},{type:{name:"boolean"},name:"allowFocusNext"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"number"},description:""},nextSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},prevSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""}}};const ze=a.forwardRef(({value:p,locale:r,onClick:c},t)=>{const m=te(p)?`${I[r].CHANGE_DATE}, ${I[r].CHOSEN_DATE} ${p}`:I[r].CHOOSE_DATE;return a.createElement("button",{"data-testid":"datepicker-open",ref:t,onClick:c,className:"ffe-datepicker__button","aria-label":m,type:"button"},a.createElement(Pe,{ariaLabel:I[r].CALENDAR_LABEL,fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yMTIuMzA5LTEwMC4wMDFxLTMwLjMwOCAwLTUxLjMwOC0yMXQtMjEtNTEuMzA4di01MzUuMzgycTAtMzAuMzA4IDIxLTUxLjMwOHQ1MS4zMDgtMjFoNTUuMzg1di01My44NDdxMC0xMy4xNTMgOC44MDgtMjEuOTYxIDguODA3LTguODA3IDIxLjk2MS04LjgwNyAxMy4xNTMgMCAyMS45NjEgOC44MDcgOC44MDcgOC44MDggOC44MDcgMjEuOTYxdjUzLjg0N2gzMDMuMDc2di01NC42MTZxMC0xMi43NjkgOC42MTUtMjEuMzg0dDIxLjM4NC04LjYxNXExMi43NjkgMCAyMS4zODQgOC42MTUgOC42MTYgOC42MTUgOC42MTYgMjEuMzg0djU0LjYxNmg1NS4zODVxMzAuMzA4IDAgNTEuMzA4IDIxdDIxIDUxLjMwOHY1MzUuMzgycTAgMzAuMzA4LTIxIDUxLjMwOHQtNTEuMzA4IDIxSDIxMi4zMDlabTAtNTkuOTk5aDUzNS4zODJxNC42MTYgMCA4LjQ2My0zLjg0NiAzLjg0Ni0zLjg0NyAzLjg0Ni04LjQ2M3YtMzc1LjM4MkgyMDB2Mzc1LjM4MnEwIDQuNjE2IDMuODQ2IDguNDYzIDMuODQ3IDMuODQ2IDguNDYzIDMuODQ2Wk0yMDAtNjA3LjY5aDU2MHYtMTAwLjAwMXEwLTQuNjE2LTMuODQ2LTguNDYzLTMuODQ3LTMuODQ2LTguNDYzLTMuODQ2SDIxMi4zMDlxLTQuNjE2IDAtOC40NjMgMy44NDYtMy44NDYgMy44NDctMy44NDYgOC40NjN2MTAwLjAwMVptMCAwVi03MjB2MTEyLjMxWm0yODAgMjEwLjc2N3EtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4VDQ4MC00NjcuNjkxcTE0LjY5MiAwIDI1LjAzOCAxMC4zNDZ0MTAuMzQ2IDI1LjAzOHEwIDE0LjY5Mi0xMC4zNDYgMjUuMDM4VDQ4MC0zOTYuOTIzWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQzMjAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQzMjAtMzk2LjkyM1ptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ2NDAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ2NDAtMzk2LjkyM1pNNDgwLTI0MHEtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4IDEwLjM0Ni0xMC4zNDcgMjUuMDM4LTEwLjM0N3QyNS4wMzggMTAuMzQ3cTEwLjM0NiAxMC4zNDYgMTAuMzQ2IDI1LjAzOHQtMTAuMzQ2IDI1LjAzOFE0OTQuNjkyLTI0MCA0ODAtMjQwWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRMzM0LjY5Mi0yNDAgMzIwLTI0MFptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNjU0LjY5Mi0yNDAgNjQwLTI0MFoiLz48L3N2Zz4=",size:"md",className:"ffe-datepicker__icon"}))});ze.__docgenInfo={description:"",methods:[],displayName:"Button",props:{value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const Ze=p=>typeof p=="number"&&p>=1&&p<=12,Ne=({ariaInvalid:p,"aria-invalid":r,ariaDescribedby:c,"aria-describedby":t,onBlur:m,calendarAbove:d,id:M,maxDate:g,minDate:L,onChange:D,fullWidth:E,fieldMessage:y,labelId:A})=>{const{day:l,setDay:f,year:n,setYear:T,month:s,setMonth:C,locale:b,calendarActiveDate:ae,setCalendarActiveDate:ne,setLastChangedValue:re}=i.useContext(we),[h,$]=i.useState(!1),[V,he]=i.useState(L),[Z,ke]=i.useState(g),[ie,se]=i.useState(""),X=i.useId(),F=i.useRef(null),k=i.useRef(null),z=i.useRef(null),S=i.useRef(null),x=i.useCallback(()=>W(l,s,n),[l,s,n]),Se=()=>y?`${X}-fieldmessage`:void 0,w=i.useCallback(e=>{re(e),D(e)},[D,re]),xe=Se(),P=i.useCallback(Fe(e=>{e!==ie&&te(e)&&(ne(e),se(e))},250),[ie]),Oe=!!y;i.useEffect(()=>()=>{P.cancel()},[P]);const O=i.useCallback(()=>{const e=x();Y(e,o=>{const v=g?Y(g):null;v!=null&&v.isBefore(o)&&_e(e)&&o.adjust({period:"Y",offset:-100});const ee=o.format();ee!==e&&(w(ee),f([o.date]),C([o.month+1]),T([o.year])),se(ee)})},[x,g,w,f,C,T]);i.useEffect(()=>{(L!==V||g!==Z)&&(he(L),ke(g),O()),P(x())},[L,g,x,P,V,Z,O]);const le=()=>{var e;$(!1),(e=F.current)==null||e.focus(),O()},oe=e=>{e.key==="Escape"&&le()},de=e=>{h&&e.__datepickerID!==X&&le()},Re=()=>{window.addEventListener("click",de),window.addEventListener("keyup",oe)},ue=()=>{window.removeEventListener("click",de),window.removeEventListener("keyup",oe)};i.useEffect(()=>(h?Re():ue(),()=>{ue()}),[h]);const Ye=()=>{O(),$(!h)},Qe=e=>{const o=e.nativeEvent;o.__datepickerID=X},qe=e=>{var o;e.target!==S.current&&e.target!==F.current&&e.target!==k.current&&e.target!==z.current&&((o=k.current)==null||o.focus())},Ue=e=>{var v;const o=Y(e);o&&(f([o.date]),C([o.month+1]),T([o.year]),w(e),$(!1),ne(e),(v=F.current)==null||v.focus())},R=()=>{const e=r==="true"||p;return e==="true"||e===!0?"true":void 0},K=()=>t??c,J=e=>{e.preventDefault();const o=(e.clipboardData||window.Clipboard).getData("text"),v=Y(o);v&&(f([v.date]),C([v.month+1]),T([v.year]),w(x()))};return a.createElement("div",{className:B("ffe-datepicker","ffe-default-mode",{"ffe-datepicker--full-width":E,"ffe-input-group--message":Oe,"ffe-datepicker--invalid":R()}),"data-testid":"date-picker",onClick:e=>{Qe(e),qe(e)},role:"group",id:M},a.createElement("div",{className:B("ffe-input-field","ffe-dateinput",{"ffe-input-field--invalid":R()}),onBlur:e=>{const o=e.relatedTarget;o!==S.current&&o!==k.current&&o!==z.current&&(m==null||m(e),O())}},a.createElement(G,{ref:k,value:l??void 0,min:1,max:31,onPaste:J,onSpinButtonChange:(e,o=!0)=>(w(W(N(e),s,n)),o?f(e,()=>{var v;return(v=z.current)==null?void 0:v.focus({preventScroll:!0})}):f(e)),nextSpinButton:z,maxLength:2,"aria-invalid":R(),"aria-valuenow":typeof l=="number"?l:void 0,"aria-valuetext":`${l}`,"aria-label":I[b].DAY,"aria-describedby":K(),"aria-labelledby":A},l?ce(l):"dd"),".",a.createElement(G,{ref:z,value:s??void 0,min:1,max:12,onPaste:J,onSpinButtonChange:(e,o=!0)=>(w(W(l,N(e),n)),o?C(e,()=>{var v;return(v=S.current)==null?void 0:v.focus({preventScroll:!0})}):C(e)),nextSpinButton:S,prevSpinButton:k,maxLength:2,"aria-invalid":R(),"aria-valuenow":typeof s=="number"?s:void 0,"aria-valuetext":Ze(s)?`${s} - ${I[b][`MONTH_${s}`]}`:void 0,"aria-label":I[b].MONTH,"aria-describedby":K(),"aria-labelledby":A},s?ce(s):"mm"),".",a.createElement(G,{ref:S,className:"ffe-dateinput__field-year",value:n??void 0,min:1,max:9999,onPaste:J,onSpinButtonChange:e=>{w(W(l,s,N(e))),T(e)},prevSpinButton:z,maxLength:4,"aria-invalid":R(),"aria-valuetext":`${n}`,"aria-valuenow":typeof n=="number"?n:void 0,"aria-label":I[b].YEAR,"aria-describedby":K(),"aria-labelledby":A},n||"yyyy")),a.createElement(ze,{onClick:Ye,locale:b,value:ae||"",ref:F}),h&&a.createElement(He,{calendarClassName:B("ffe-calendar ffe-calendar--datepicker",{"ffe-calendar--datepicker--above":d}),locale:b,maxDate:Z,minDate:V,onDatePicked:Ue,selectedDate:ae,focusOnMount:!0}),!!y&&a.createElement(We,{as:"p",id:xe},y))};Ne.__docgenInfo={description:"",methods:[],displayName:"DatepickerComp",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Triggered when focus leaves one of the fields (dd, mm, yyyy), and the next focused element is not one of these fields."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id of the label describing the datepicker. Required for UU-compatibility"}}};const j=({locale:p="nb",value:r,...c})=>a.createElement(je,{locale:p,value:r},a.createElement(Ne,{...c}));j.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Triggered when focus leaves one of the fields (dd, mm, yyyy), and the next focused element is not one of these fields."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id of the label describing the datepicker. Required for UU-compatibility"},value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}}}};const Xe={title:"Komponenter/Datepicker/Datepicker",component:j},u={args:{locale:"nb",maxDate:"31.12.2025",minDate:"01.01.2024",labelId:"datepicker-label"},render:function({value:r,onChange:c,...t}){var M;const[m,d]=i.useState("01.12.2024");return a.createElement(_,{label:"Dato",labelId:(M=u==null?void 0:u.args)==null?void 0:M.labelId},a.createElement(j,{value:r??m,onChange:d,...t}))}},Q={args:{...u.args},render:function({value:r,onChange:c,...t}){var M;const[m,d]=i.useState("01.12.2024");return a.createElement(_,{label:"Dato","aria-invalid":!0,fieldMessage:"Ugyldig dato",labelId:(M=u==null?void 0:u.args)==null?void 0:M.labelId},a.createElement(j,{value:r??m,onChange:d,...t}))}},q={args:{...u.args,fullWidth:!0},render:function({value:r,onChange:c,...t}){var M;const[m,d]=i.useState("01.12.2024");return a.createElement(_,{label:"Dato",labelId:(M=u==null?void 0:u.args)==null?void 0:M.labelId},a.createElement(j,{value:r??m,onChange:d,...t}))}},U={args:{...u.args,calendarAbove:!0},render:function({value:r,onChange:c,...t}){var M;const[m,d]=i.useState("01.12.2024");return a.createElement(_,{label:"Dato",labelId:(M=u==null?void 0:u.args)==null?void 0:M.labelId},a.createElement(j,{value:r??m,onChange:d,...t}))}},H={args:{...u.args},render:function({...r}){var L;const[c,t]=i.useState("01.12.2024"),[m,d]=i.useState("initiell"),M=D=>{t(D),d("datepicker")},g=[{label:"I dag",value:()=>{const D=new Date;return`${String(D.getDate()).padStart(2,"0")}.${String(D.getMonth()+1).padStart(2,"0")}.${D.getFullYear()}`}},{label:"Begynnelsen av året",value:"01.01.2024"},{label:"Slutten av året",value:"31.12.2024"},{label:"Midten av året",value:"01.07.2024"}];return a.createElement("div",null,a.createElement(_,{label:"Dato",labelId:(L=u==null?void 0:u.args)==null?void 0:L.labelId},a.createElement(j,{...r,value:c,onChange:M})),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("div",null,"Kontroller datepicker eksternt:"),a.createElement("div",{style:{display:"flex",gap:"10px",marginTop:"10px"}},g.map((D,E)=>a.createElement(Be,{key:E,onClick:()=>{const y=typeof D.value=="function"?D.value():D.value;t(y),d("ekstern")}},D.label))),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("div",null,"Manuell ekstern input:"),a.createElement("div",{style:{display:"flex",gap:"10px",maxWidth:"200px",marginTop:"10px"}},a.createElement(Ge,{type:"text",value:c,onChange:D=>{t(D.target.value),d("manuell")},placeholder:"dd.mm.åååå"}))),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("div",null,"Nåværende tilstand:"),a.createElement("div",null,"Dato: ",c),a.createElement("div",null,"Sist oppdatert av: ",m))))}};var pe,me,Me;u.parameters={...u.parameters,docs:{...(pe=u.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
                <Datepicker value={value ?? date} onChange={setDate} {...args} />
            </InputGroup>;
  }
}`,...(Me=(me=u.parameters)==null?void 0:me.docs)==null?void 0:Me.source}}};var ge,De,ye;Q.parameters={...Q.parameters,docs:{...(ge=Q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ye=(De=Q.parameters)==null?void 0:De.docs)==null?void 0:ye.source}}};var fe,ve,Te;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Te=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var be,Le,Ce;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ce=(Le=U.parameters)==null?void 0:Le.docs)==null?void 0:Ce.source}}};var Ie,Ee,Ae;H.parameters={...H.parameters,docs:{...(Ie=H.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ae=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};const Ke=["Standard","FieldMessageString","FullWidth","CalendarAbove","TwoWayControlledComponent"],lt=Object.freeze(Object.defineProperty({__proto__:null,CalendarAbove:U,FieldMessageString:Q,FullWidth:q,Standard:u,TwoWayControlledComponent:H,__namedExportsOrder:Ke,default:Xe},Symbol.toStringTag,{value:"Module"}));export{lt as D,u as S};
