import{r as n,R as a}from"./index-DQDNmYQF.js";import{v as te,g as Q,i as L,a as Be,p as pe,C as $e,b as Ve}from"./Calendar-zD5E474l.js";import{c as G}from"./index-QCImZZ3W.js";import{d as Ze}from"./index-D9tCDUwu.js";import{I as Xe}from"./Icon-BqsuuMcG.js";import{E as Ke,I as z}from"./InputGroup-DOKvm3eQ.js";import{S as Je}from"./SecondaryButton-C30B7eR2.js";import{I as et}from"./Input-DYak8_-P.js";const ee=m=>{const r=m.filter(u=>typeof u=="number");return r.map((u,t)=>(u??1)*Math.pow(10,r.length-t-1)).reduce((u,t)=>u+t,0)},Ne=n.createContext({day:null,month:null,year:null,setDay:()=>null,setMonth:()=>null,setYear:()=>null,locale:"nb",calendarActiveDate:"",setCalendarActiveDate:()=>null,setLastChangedValue:()=>null}),tt=12,at=31,he=({children:m,value:r="",locale:u})=>{const t=te(r)?Q(r):"",[p,l]=n.useState(t?t.date:null),[c,d]=n.useState(t?t.month+1:null),[I,D]=n.useState(t?t.year:null),[E,y]=n.useState((t==null?void 0:t.toString())??""),[k,f]=n.useState(r??"");return n.useEffect(()=>{r!==k&&(l(t?t.date:null),d(t?t.month+1:null),D(t?t.year:null),y((t==null?void 0:t.toString())??""))},[r]),a.createElement(Ne.Provider,{value:{day:p,month:c,year:I,setDay:(g,i=void 0)=>{const b=g.slice(-2),[M,T]=b,C=ee(b);C>at?i==null||i():M>3?(l(C),i==null||i()):(l(C),T!==void 0&&(i==null||i()))},setMonth:(g,i=void 0)=>{const b=g.slice(-2),[M,T]=b,C=ee(b);C>tt?i==null||i():M>1?(d(C),i==null||i()):(d(C),T!==void 0&&(i==null||i()))},setYear:g=>{D(ee(g.slice(-4)))},calendarActiveDate:E,setCalendarActiveDate:g=>{y(g)},locale:u,setLastChangedValue:g=>{f(g)}}},m)};he.__docgenInfo={description:"",methods:[],displayName:"DatepickerProvider",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const B=a.forwardRef(({className:m,onSpinButtonChange:r,maxLength:u,min:t,max:p,value:l,nextSpinButton:c,prevSpinButton:d,children:I,...D},E)=>{const y=n.useRef([]),k=f=>{var g,i,b;if(f.stopPropagation(),/\d/.test(f.key))y.current=y.current.length===u?y.current=[parseInt(f.key)]:y.current.concat(parseInt(f.key)),r(y.current);else if(f.key==="Backspace"||f.key==="Delete"){if(y.current=[],l===0){(g=d==null?void 0:d.current)==null||g.focus();return}const M=l==null?void 0:l.toString().slice(0,-1);y.current=M?M.split("").map(Number):[],r(y.current)}else if(f.key==="ArrowUp"){f.preventDefault();let M=(l??0)+1;M&&M!==null&&M>p&&(M=t),r([M],!1)}else if(f.key==="ArrowDown"){f.preventDefault();let M=(l??0)-1;M<t&&(M=p),r([M],!1)}else f.key==="ArrowLeft"?(f.preventDefault(),(i=d==null?void 0:d.current)==null||i.focus()):f.key==="ArrowRight"&&(f.preventDefault(),(b=c==null?void 0:c.current)==null||b.focus())};return a.createElement("span",{role:"spinbutton",inputMode:"numeric",className:G(m,"ffe-dateinput__field"),tabIndex:0,onFocus:()=>{y.current=[]},"aria-valuemin":t,"aria-valuemax":p,"aria-valuenow":l,ref:E,onKeyDown:k,...D},I)});B.__docgenInfo={description:"",methods:[],displayName:"SpinButton",props:{className:{required:!1,tsType:{name:"string"},description:""},onSpinButtonChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number[], allowFocusNext?: boolean) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"value"},{type:{name:"boolean"},name:"allowFocusNext"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"number"},description:""},nextSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},prevSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""}}};const Se=a.forwardRef(({value:m,locale:r,onClick:u},t)=>{const p=te(m)?`${L[r].CHANGE_DATE}, ${L[r].CHOSEN_DATE} ${m}`:L[r].CHOOSE_DATE;return a.createElement("button",{"data-testid":"datepicker-open",ref:t,onClick:u,className:"ffe-datepicker__button","aria-label":p,type:"button"},a.createElement(Xe,{ariaLabel:L[r].CALENDAR_LABEL,fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yMTIuMzA5LTEwMC4wMDFxLTMwLjMwOCAwLTUxLjMwOC0yMXQtMjEtNTEuMzA4di01MzUuMzgycTAtMzAuMzA4IDIxLTUxLjMwOHQ1MS4zMDgtMjFoNTUuMzg1di01My44NDdxMC0xMy4xNTMgOC44MDgtMjEuOTYxIDguODA3LTguODA3IDIxLjk2MS04LjgwNyAxMy4xNTMgMCAyMS45NjEgOC44MDcgOC44MDcgOC44MDggOC44MDcgMjEuOTYxdjUzLjg0N2gzMDMuMDc2di01NC42MTZxMC0xMi43NjkgOC42MTUtMjEuMzg0dDIxLjM4NC04LjYxNXExMi43NjkgMCAyMS4zODQgOC42MTUgOC42MTYgOC42MTUgOC42MTYgMjEuMzg0djU0LjYxNmg1NS4zODVxMzAuMzA4IDAgNTEuMzA4IDIxdDIxIDUxLjMwOHY1MzUuMzgycTAgMzAuMzA4LTIxIDUxLjMwOHQtNTEuMzA4IDIxSDIxMi4zMDlabTAtNTkuOTk5aDUzNS4zODJxNC42MTYgMCA4LjQ2My0zLjg0NiAzLjg0Ni0zLjg0NyAzLjg0Ni04LjQ2M3YtMzc1LjM4MkgyMDB2Mzc1LjM4MnEwIDQuNjE2IDMuODQ2IDguNDYzIDMuODQ3IDMuODQ2IDguNDYzIDMuODQ2Wk0yMDAtNjA3LjY5aDU2MHYtMTAwLjAwMXEwLTQuNjE2LTMuODQ2LTguNDYzLTMuODQ3LTMuODQ2LTguNDYzLTMuODQ2SDIxMi4zMDlxLTQuNjE2IDAtOC40NjMgMy44NDYtMy44NDYgMy44NDctMy44NDYgOC40NjN2MTAwLjAwMVptMCAwVi03MjB2MTEyLjMxWm0yODAgMjEwLjc2N3EtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4VDQ4MC00NjcuNjkxcTE0LjY5MiAwIDI1LjAzOCAxMC4zNDZ0MTAuMzQ2IDI1LjAzOHEwIDE0LjY5Mi0xMC4zNDYgMjUuMDM4VDQ4MC0zOTYuOTIzWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQzMjAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQzMjAtMzk2LjkyM1ptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ2NDAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ2NDAtMzk2LjkyM1pNNDgwLTI0MHEtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4IDEwLjM0Ni0xMC4zNDcgMjUuMDM4LTEwLjM0N3QyNS4wMzggMTAuMzQ3cTEwLjM0NiAxMC4zNDYgMTAuMzQ2IDI1LjAzOHQtMTAuMzQ2IDI1LjAzOFE0OTQuNjkyLTI0MCA0ODAtMjQwWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRMzM0LjY5Mi0yNDAgMzIwLTI0MFptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNjU0LjY5Mi0yNDAgNjQwLTI0MFoiLz48L3N2Zz4=",size:"md",className:"ffe-datepicker__icon"}))});Se.__docgenInfo={description:"",methods:[],displayName:"Button",props:{value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const rt=m=>typeof m=="number"&&m>=1&&m<=12,xe=({ariaInvalid:m,"aria-invalid":r,ariaDescribedby:u,"aria-describedby":t,onBlur:p,calendarAbove:l,id:c,maxDate:d,minDate:I,onChange:D,fullWidth:E,fieldMessage:y,labelId:k,dropdownCaption:f})=>{const{day:g,setDay:i,year:b,setYear:M,month:T,setMonth:C,locale:A,calendarActiveDate:ae,setCalendarActiveDate:re,setLastChangedValue:ne}=n.useContext(Ne),N=n.useCallback(()=>Be(g,T,b),[g,T,b]),[h,$]=n.useState(!1),[V,Oe]=n.useState(I),[Z,Re]=n.useState(d),[S,ie]=n.useState(N()),X=n.useId(),P=n.useRef(null),x=n.useRef(null),j=n.useRef(null),O=n.useRef(null),Ye=()=>y?`${X}-fieldmessage`:void 0,se=n.useCallback(e=>{ne(e),D(e)},[D,ne]),Qe=Ye(),W=n.useCallback(Ze(e=>{e!==S&&te(e)&&(re(e),ie(e))},250),[S]),qe=!!y;n.useEffect(()=>()=>{W.cancel()},[W]);const R=n.useCallback(()=>{const e=N();Q(e,s=>{const v=d?Q(d):null;v!=null&&v.isBefore(s)&&Ve(e)&&s.adjust({period:"Y",offset:-100});const ce=s.format();ce!==e&&(i([s.date]),C([s.month+1]),M([s.year])),ie(ce)})},[N,d,i,C,M]);n.useEffect(()=>{(I!==V||d!==Z)&&(Oe(I),Re(d),R()),W(N())},[I,d,N,W,V,Z,R]);const le=()=>{var e;$(!1),(e=P.current)==null||e.focus(),R()},oe=e=>{e.key==="Escape"&&le()},de=e=>{h&&e.__datepickerID!==X&&le()},Ue=()=>{window.addEventListener("click",de),window.addEventListener("keyup",oe)},ue=()=>{window.removeEventListener("click",de),window.removeEventListener("keyup",oe)};n.useEffect(()=>(h?Ue():ue(),()=>{ue()}),[h]);const Fe=()=>{R(),$(!h)},He=e=>{const s=e.nativeEvent;s.__datepickerID=X},_e=e=>{var s;e.target!==O.current&&e.target!==P.current&&e.target!==x.current&&e.target!==j.current&&((s=x.current)==null||s.focus())},Pe=e=>{var v;const s=Q(e);s&&(i([s.date]),C([s.month+1]),M([s.year]),$(!1),re(e),(v=P.current)==null||v.focus())},Y=()=>{const e=r==="true"||m;return e==="true"||e===!0?"true":void 0},K=()=>t??u,J=e=>{e.preventDefault();const s=(e.clipboardData||window.Clipboard).getData("text"),v=Q(s);v&&(i([v.date]),C([v.month+1]),M([v.year]))},[We,Ge]=n.useState(!0);return n.useEffect(()=>{if(We){Ge(!1);return}const[e,s,v]=S.split(".").map(Number);if(e*s*v>0){se(S);return}se("")},[S]),a.createElement("div",{className:G("ffe-datepicker","ffe-default-mode",{"ffe-datepicker--full-width":E,"ffe-input-group--message":qe,"ffe-datepicker--invalid":Y()}),"data-testid":"date-picker",onClick:e=>{He(e),_e(e)},role:"group",id:c},a.createElement("div",{className:G("ffe-input-field","ffe-dateinput",{"ffe-input-field--invalid":Y()}),onBlur:e=>{const s=e.relatedTarget;s!==O.current&&s!==x.current&&s!==j.current&&(p==null||p(e),R())}},a.createElement(B,{ref:x,value:g??void 0,min:1,max:31,onPaste:J,onSpinButtonChange:(e,s=!0)=>s?i(e,()=>{var v;return(v=j.current)==null?void 0:v.focus({preventScroll:!0})}):i(e),nextSpinButton:j,maxLength:2,"aria-invalid":Y(),"aria-valuenow":typeof g=="number"?g:void 0,"aria-valuetext":`${g}`,"aria-label":L[A].DAY,"aria-describedby":K(),"aria-labelledby":k},g?pe(g):"dd"),".",a.createElement(B,{ref:j,value:T??void 0,min:1,max:12,onPaste:J,onSpinButtonChange:(e,s=!0)=>s?C(e,()=>{var v;return(v=O.current)==null?void 0:v.focus({preventScroll:!0})}):C(e),nextSpinButton:O,prevSpinButton:x,maxLength:2,"aria-invalid":Y(),"aria-valuenow":typeof T=="number"?T:void 0,"aria-valuetext":rt(T)?`${T} - ${L[A][`MONTH_${T}`]}`:void 0,"aria-label":L[A].MONTH,"aria-describedby":K(),"aria-labelledby":k},T?pe(T):"mm"),".",a.createElement(B,{ref:O,className:"ffe-dateinput__field-year",value:b??void 0,min:1,max:9999,onPaste:J,onSpinButtonChange:e=>{M(e)},prevSpinButton:j,maxLength:4,"aria-invalid":Y(),"aria-valuetext":`${b}`,"aria-valuenow":typeof b=="number"?b:void 0,"aria-label":L[A].YEAR,"aria-describedby":K(),"aria-labelledby":k},b||"yyyy")),a.createElement(Se,{onClick:Fe,locale:A,value:ae||"",ref:P}),h&&a.createElement($e,{calendarClassName:G("ffe-calendar ffe-calendar--datepicker",{"ffe-calendar--datepicker--above":l}),locale:A,onDatePicked:Pe,selectedDate:ae,focusOnMount:!0,dropdownCaption:f,minDate:V,maxDate:Z}),!!y&&a.createElement(Ke,{as:"p",id:Qe},y))};xe.__docgenInfo={description:"",methods:[],displayName:"DatepickerComp",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Trigges når fokus forlater et av feltene (dd, mm, yyyy), og neste fokuserte element ikke er et av disse feltene."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Seneste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Tidligste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id til labelen som beskriver datepicker. Påkrevd for UU-kompatibilitet"},dropdownCaption:{required:!1,tsType:{name:"boolean"},description:"Om måned- og år-dropdown skal vises i kalenderen"}}};const w=({locale:m="nb",value:r,...u})=>a.createElement(he,{locale:m,value:r},a.createElement(xe,{...u}));w.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Trigges når fokus forlater et av feltene (dd, mm, yyyy), og neste fokuserte element ikke er et av disse feltene."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Seneste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Tidligste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id til labelen som beskriver datepicker. Påkrevd for UU-kompatibilitet"},dropdownCaption:{required:!1,tsType:{name:"boolean"},description:"Om måned- og år-dropdown skal vises i kalenderen"},value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}}}};const nt={title:"Komponenter/Datepicker/Datepicker",component:w},o={args:{locale:"nb",labelId:"datepicker-label",minDate:"01.01.2020",maxDate:"31.12.2030"},render:function({value:r,onChange:u,...t}){var c;const[p,l]=n.useState("01.12.2024");return a.createElement(z,{label:"Dato",labelId:(c=o==null?void 0:o.args)==null?void 0:c.labelId},a.createElement(w,{value:r??p,onChange:d=>{l(d),console.log("Datepicker value:",d)},...t}))}},q={args:{...o.args},render:function({value:r,onChange:u,...t}){var c;const[p,l]=n.useState("01.12.2024");return a.createElement(z,{label:"Dato","aria-invalid":!0,fieldMessage:"Ugyldig dato",labelId:(c=o==null?void 0:o.args)==null?void 0:c.labelId},a.createElement(w,{value:r??p,onChange:l,...t}))}},U={args:{...o.args,fullWidth:!0},render:function({value:r,onChange:u,...t}){var c;const[p,l]=n.useState("01.12.2024");return a.createElement(z,{label:"Dato",labelId:(c=o==null?void 0:o.args)==null?void 0:c.labelId},a.createElement(w,{value:r??p,onChange:l,...t}))}},F={args:{...o.args,calendarAbove:!0},render:function({value:r,onChange:u,...t}){var c;const[p,l]=n.useState("01.12.2024");return a.createElement(z,{label:"Dato",labelId:(c=o==null?void 0:o.args)==null?void 0:c.labelId},a.createElement(w,{value:r??p,onChange:l,...t}))}},H={args:{...o.args,dropdownCaption:!0},render:function({value:r,onChange:u,...t}){var c;const[p,l]=n.useState("01.12.2024");return a.createElement(z,{label:"Dato med dropdowns for måned og år",labelId:(c=o==null?void 0:o.args)==null?void 0:c.labelId},a.createElement(w,{value:r??p,onChange:d=>{l(d)},...t}))}},_={args:{...o.args,locale:"nb"},render:function({...r}){var I;const[u,t]=n.useState("01.12.2024"),[p,l]=n.useState("initiell"),c=D=>{t(D),l("datepicker")},d=[{label:"I dag",value:()=>{const D=new Date;return`${String(D.getDate()).padStart(2,"0")}.${String(D.getMonth()+1).padStart(2,"0")}.${D.getFullYear()}`}},{label:"Begynnelsen av året",value:"01.01.2024"},{label:"Slutten av året",value:"31.12.2024"},{label:"Midten av året",value:"01.07.2024"}];return a.createElement("div",null,a.createElement(z,{label:"Dato",labelId:(I=o==null?void 0:o.args)==null?void 0:I.labelId},a.createElement(w,{...r,value:u,onChange:c})),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("div",null,"Kontroller datepicker eksternt:"),a.createElement("div",{style:{display:"flex",gap:"10px",marginTop:"10px"}},d.map((D,E)=>a.createElement(Je,{key:E,onClick:()=>{const y=typeof D.value=="function"?D.value():D.value;t(y),l("ekstern")}},D.label))),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("div",null,"Manuell ekstern input:"),a.createElement("div",{style:{display:"flex",gap:"10px",maxWidth:"200px",marginTop:"10px"}},a.createElement(et,{type:"text",value:u,onChange:D=>{t(D.target.value),l("manuell")},placeholder:"dd.mm.åååå"}))),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("div",null,"Nåværende tilstand:"),a.createElement("div",null,"Dato: ",u),a.createElement("div",null,"Sist oppdatert av: ",p))))}};var me,Me,ge;o.parameters={...o.parameters,docs:{...(me=o.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    labelId: 'datepicker-label',
    minDate: '01.01.2020',
    maxDate: '31.12.2030'
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
}`,...(ge=(Me=o.parameters)==null?void 0:Me.docs)==null?void 0:ge.source}}};var De,ye,ve;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(ve=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var fe,be,Te;U.parameters={...U.parameters,docs:{...(fe=U.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Te=(be=U.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var Ce,Ie,Le;F.parameters={...F.parameters,docs:{...(Ce=F.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Le=(Ie=F.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};var we,Ee,ke;H.parameters={...H.parameters,docs:{...(we=H.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    dropdownCaption: true
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    return <InputGroup label="Dato med dropdowns for måned og år" labelId={Standard?.args?.labelId}>
                <Datepicker value={value ?? date} onChange={date => {
        setDate(date);
      }} {...args} />
            </InputGroup>;
  }
}`,...(ke=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var Ae,je,ze;_.parameters={..._.parameters,docs:{...(Ae=_.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    locale: 'nb'
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
}`,...(ze=(je=_.parameters)==null?void 0:je.docs)==null?void 0:ze.source}}};const it=["Standard","FieldMessageString","FullWidth","CalendarAbove","WithDropdownCaption","TwoWayControlledComponent"],Mt=Object.freeze(Object.defineProperty({__proto__:null,CalendarAbove:F,FieldMessageString:q,FullWidth:U,Standard:o,TwoWayControlledComponent:_,WithDropdownCaption:H,__namedExportsOrder:it,default:nt},Symbol.toStringTag,{value:"Module"}));export{Mt as D,o as S,H as W};
