import{r as n,R as a}from"./index-DQDNmYQF.js";import{v as ae,g as Y,i as k,a as Xe,p as me,C as Ke,b as Je}from"./Calendar-D5vWCd0d.js";import{c as B}from"./index-D2FocPV0.js";import{d as et}from"./index-D9tCDUwu.js";import{I as tt}from"./Icon-D_nm5xPy.js";import{E as at,I as A}from"./InputGroup-CsZXON4u.js";import{S as rt}from"./SecondaryButton-Boh02aDD.js";import{I as nt}from"./Input-D-am7U86.js";const te=m=>{const r=m.filter(c=>typeof c=="number");return r.map((c,t)=>(c??1)*Math.pow(10,r.length-t-1)).reduce((c,t)=>c+t,0)},Oe=n.createContext({day:null,month:null,year:null,setDay:()=>null,setMonth:()=>null,setYear:()=>null,locale:"nb",calendarActiveDate:"",setCalendarActiveDate:()=>null,setLastChangedValue:()=>null}),it=12,st=31,Re=({children:m,value:r="",locale:c})=>{const t=ae(r)?Y(r):"",[p,s]=n.useState(t?t.date:null),[u,d]=n.useState(t?t.month+1:null),[I,D]=n.useState(t?t.year:null),[E,y]=n.useState((t==null?void 0:t.toString())??""),[w,b]=n.useState(r??"");return n.useEffect(()=>{r!==w&&(s(t?t.date:null),d(t?t.month+1:null),D(t?t.year:null),y((t==null?void 0:t.toString())??""))},[r]),a.createElement(Oe.Provider,{value:{day:p,month:u,year:I,setDay:(M,l=void 0)=>{const f=M.slice(-2),[g,T]=f,C=te(f);C>st?l==null||l():g>3?(s(C),l==null||l()):(s(C),T!==void 0&&(l==null||l()))},setMonth:(M,l=void 0)=>{const f=M.slice(-2),[g,T]=f,C=te(f);C>it?l==null||l():g>1?(d(C),l==null||l()):(d(C),T!==void 0&&(l==null||l()))},setYear:M=>{D(te(M.slice(-4)))},calendarActiveDate:E,setCalendarActiveDate:M=>{y(M)},locale:c,setLastChangedValue:M=>{b(M)}}},m)};Re.__docgenInfo={description:"",methods:[],displayName:"DatepickerProvider",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const $=a.forwardRef(({className:m,onSpinButtonChange:r,maxLength:c,min:t,max:p,value:s,nextSpinButton:u,prevSpinButton:d,children:I,...D},E)=>{const y=n.useRef([]),w=b=>{var M,l,f;if(b.stopPropagation(),/\d/.test(b.key))y.current=y.current.length===c?y.current=[parseInt(b.key)]:y.current.concat(parseInt(b.key)),r(y.current);else if(b.key==="Backspace"||b.key==="Delete"){if(y.current=[],s===0){(M=d==null?void 0:d.current)==null||M.focus();return}const g=s==null?void 0:s.toString().slice(0,-1);y.current=g?g.split("").map(Number):[],r(y.current)}else if(b.key==="ArrowUp"){b.preventDefault();let g=(s??0)+1;g&&g!==null&&g>p&&(g=t),r([g],!1)}else if(b.key==="ArrowDown"){b.preventDefault();let g=(s??0)-1;g<t&&(g=p),r([g],!1)}else b.key==="ArrowLeft"?(b.preventDefault(),(l=d==null?void 0:d.current)==null||l.focus()):b.key==="ArrowRight"&&(b.preventDefault(),(f=u==null?void 0:u.current)==null||f.focus())};return a.createElement("span",{role:"spinbutton",inputMode:"numeric",className:B(m,"ffe-dateinput__field"),tabIndex:0,onFocus:()=>{y.current=[]},"aria-valuemin":t,"aria-valuemax":p,"aria-valuenow":s,ref:E,onKeyDown:w,...D},I)});$.__docgenInfo={description:"",methods:[],displayName:"SpinButton",props:{className:{required:!1,tsType:{name:"string"},description:""},onSpinButtonChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number[], allowFocusNext?: boolean) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"value"},{type:{name:"boolean"},name:"allowFocusNext"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"number"},description:""},nextSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},prevSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""}}};const Ye=a.forwardRef(({value:m,locale:r,onClick:c},t)=>{const p=ae(m)?`${k[r].CHANGE_DATE}, ${k[r].CHOSEN_DATE} ${m}`:k[r].CHOOSE_DATE;return a.createElement("button",{"data-testid":"datepicker-open",ref:t,onClick:c,className:"ffe-datepicker__button","aria-label":p,type:"button"},a.createElement(tt,{ariaLabel:k[r].CALENDAR_LABEL,fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yMTIuMzA5LTEwMC4wMDFxLTMwLjMwOCAwLTUxLjMwOC0yMXQtMjEtNTEuMzA4di01MzUuMzgycTAtMzAuMzA4IDIxLTUxLjMwOHQ1MS4zMDgtMjFoNTUuMzg1di01My44NDdxMC0xMy4xNTMgOC44MDgtMjEuOTYxIDguODA3LTguODA3IDIxLjk2MS04LjgwNyAxMy4xNTMgMCAyMS45NjEgOC44MDcgOC44MDcgOC44MDggOC44MDcgMjEuOTYxdjUzLjg0N2gzMDMuMDc2di01NC42MTZxMC0xMi43NjkgOC42MTUtMjEuMzg0dDIxLjM4NC04LjYxNXExMi43NjkgMCAyMS4zODQgOC42MTUgOC42MTYgOC42MTUgOC42MTYgMjEuMzg0djU0LjYxNmg1NS4zODVxMzAuMzA4IDAgNTEuMzA4IDIxdDIxIDUxLjMwOHY1MzUuMzgycTAgMzAuMzA4LTIxIDUxLjMwOHQtNTEuMzA4IDIxSDIxMi4zMDlabTAtNTkuOTk5aDUzNS4zODJxNC42MTYgMCA4LjQ2My0zLjg0NiAzLjg0Ni0zLjg0NyAzLjg0Ni04LjQ2M3YtMzc1LjM4MkgyMDB2Mzc1LjM4MnEwIDQuNjE2IDMuODQ2IDguNDYzIDMuODQ3IDMuODQ2IDguNDYzIDMuODQ2Wk0yMDAtNjA3LjY5aDU2MHYtMTAwLjAwMXEwLTQuNjE2LTMuODQ2LTguNDYzLTMuODQ3LTMuODQ2LTguNDYzLTMuODQ2SDIxMi4zMDlxLTQuNjE2IDAtOC40NjMgMy44NDYtMy44NDYgMy44NDctMy44NDYgOC40NjN2MTAwLjAwMVptMCAwVi03MjB2MTEyLjMxWm0yODAgMjEwLjc2N3EtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4VDQ4MC00NjcuNjkxcTE0LjY5MiAwIDI1LjAzOCAxMC4zNDZ0MTAuMzQ2IDI1LjAzOHEwIDE0LjY5Mi0xMC4zNDYgMjUuMDM4VDQ4MC0zOTYuOTIzWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQzMjAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQzMjAtMzk2LjkyM1ptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ2NDAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ2NDAtMzk2LjkyM1pNNDgwLTI0MHEtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4IDEwLjM0Ni0xMC4zNDcgMjUuMDM4LTEwLjM0N3QyNS4wMzggMTAuMzQ3cTEwLjM0NiAxMC4zNDYgMTAuMzQ2IDI1LjAzOHQtMTAuMzQ2IDI1LjAzOFE0OTQuNjkyLTI0MCA0ODAtMjQwWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRMzM0LjY5Mi0yNDAgMzIwLTI0MFptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNjU0LjY5Mi0yNDAgNjQwLTI0MFoiLz48L3N2Zz4=",size:"md",className:"ffe-datepicker__icon"}))});Ye.__docgenInfo={description:"",methods:[],displayName:"Button",props:{value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const lt=m=>typeof m=="number"&&m>=1&&m<=12,Qe=({ariaInvalid:m,"aria-invalid":r,ariaDescribedby:c,"aria-describedby":t,onBlur:p,calendarAbove:s,id:u,maxDate:d,minDate:I,onChange:D,fullWidth:E,fieldMessage:y,labelId:w,dropdownCaption:b})=>{const{day:M,setDay:l,year:f,setYear:g,month:T,setMonth:C,locale:j,calendarActiveDate:re,setCalendarActiveDate:ne,setLastChangedValue:ie}=n.useContext(Oe),N=n.useCallback(()=>Xe(M,T,f),[M,T,f]),[h,V]=n.useState(!1),[Z,qe]=n.useState(I),[X,Ue]=n.useState(d),[S,se]=n.useState(N()),K=n.useId(),P=n.useRef(null),x=n.useRef(null),z=n.useRef(null),O=n.useRef(null),Fe=()=>y?`${K}-fieldmessage`:void 0,le=n.useCallback(e=>{ie(e),D(e)},[D,ie]),He=Fe(),W=n.useCallback(et(e=>{e!==S&&ae(e)&&(ne(e),se(e))},250),[S]),_e=!!y;n.useEffect(()=>()=>{W.cancel()},[W]);const R=n.useCallback(()=>{const e=N();Y(e,o=>{const v=d?Y(d):null;v!=null&&v.isBefore(o)&&Je(e)&&o.adjust({period:"Y",offset:-100});const pe=o.format();pe!==e&&(l([o.date]),C([o.month+1]),g([o.year])),se(pe)})},[N,d,l,C,g]);n.useEffect(()=>{(I!==Z||d!==X)&&(qe(I),Ue(d),R()),W(N())},[I,d,N,W,Z,X,R]);const oe=()=>{var e;V(!1),(e=P.current)==null||e.focus(),R()},de=e=>{e.key==="Escape"&&oe()},ue=e=>{h&&e.__datepickerID!==K&&oe()},Pe=()=>{window.addEventListener("click",ue),window.addEventListener("keyup",de)},ce=()=>{window.removeEventListener("click",ue),window.removeEventListener("keyup",de)};n.useEffect(()=>(h?Pe():ce(),()=>{ce()}),[h]);const We=()=>{R(),V(!h)},Ge=e=>{const o=e.nativeEvent;o.__datepickerID=K},Be=e=>{var o;e.target!==O.current&&e.target!==P.current&&e.target!==x.current&&e.target!==z.current&&((o=x.current)==null||o.focus())},$e=e=>{var v;const o=Y(e);o&&(l([o.date]),C([o.month+1]),g([o.year]),V(!1),ne(e),(v=P.current)==null||v.focus())},G=()=>{const e=r==="true"||m;return e==="true"||e===!0?"true":void 0},J=()=>t??c,ee=e=>{e.preventDefault();const o=(e.clipboardData||window.Clipboard).getData("text"),v=Y(o);v&&(l([v.date]),C([v.month+1]),g([v.year]))},[Ve,Ze]=n.useState(!0);return n.useEffect(()=>{if(Ve){Ze(!1);return}const[e,o,v]=S.split(".").map(Number);if(e*o*v>0){le(S);return}le("")},[S]),a.createElement("div",{className:B("ffe-datepicker","ffe-default-mode",{"ffe-datepicker--full-width":E,"ffe-input-group--message":_e,"ffe-datepicker--invalid":G()}),"data-testid":"date-picker",onClick:e=>{Ge(e),Be(e)},role:"group",id:u},a.createElement("div",{className:B("ffe-dateinput"),onBlur:e=>{const o=e.relatedTarget;o!==O.current&&o!==x.current&&o!==z.current&&(p==null||p(e),R())}},a.createElement($,{ref:x,value:M??void 0,min:1,max:31,onPaste:ee,onSpinButtonChange:(e,o=!0)=>o?l(e,()=>{var v;return(v=z.current)==null?void 0:v.focus({preventScroll:!0})}):l(e),nextSpinButton:z,maxLength:2,"aria-invalid":G(),"aria-valuenow":typeof M=="number"?M:void 0,"aria-valuetext":`${M}`,"aria-label":k[j].DAY,"aria-describedby":J(),"aria-labelledby":w},M?me(M):"dd"),".",a.createElement($,{ref:z,value:T??void 0,min:1,max:12,onPaste:ee,onSpinButtonChange:(e,o=!0)=>o?C(e,()=>{var v;return(v=O.current)==null?void 0:v.focus({preventScroll:!0})}):C(e),nextSpinButton:O,prevSpinButton:x,maxLength:2,"aria-invalid":G(),"aria-valuenow":typeof T=="number"?T:void 0,"aria-valuetext":lt(T)?`${T} - ${k[j][`MONTH_${T}`]}`:void 0,"aria-label":k[j].MONTH,"aria-describedby":J(),"aria-labelledby":w},T?me(T):"mm"),".",a.createElement($,{ref:O,className:"ffe-dateinput__field-year",value:f??void 0,min:1,max:9999,onPaste:ee,onSpinButtonChange:e=>{g(e)},prevSpinButton:z,maxLength:4,"aria-invalid":G(),"aria-valuetext":`${f}`,"aria-valuenow":typeof f=="number"?f:void 0,"aria-label":k[j].YEAR,"aria-describedby":J(),"aria-labelledby":w},f||"yyyy")),a.createElement(Ye,{onClick:We,locale:j,value:re||"",ref:P}),h&&a.createElement(Ke,{calendarClassName:B("ffe-calendar ffe-calendar--datepicker",{"ffe-calendar--datepicker--above":s}),locale:j,onDatePicked:$e,selectedDate:re,focusOnMount:!0,dropdownCaption:b,minDate:Z,maxDate:X}),!!y&&a.createElement(at,{as:"p",id:He},y))};Qe.__docgenInfo={description:"",methods:[],displayName:"DatepickerComp",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Trigges når fokus forlater et av feltene (dd, mm, yyyy), og neste fokuserte element ikke er et av disse feltene."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Seneste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Tidligste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id til labelen som beskriver datepicker. Påkrevd for UU-kompatibilitet"},dropdownCaption:{required:!1,tsType:{name:"boolean"},description:"Om måned- og år-dropdown skal vises i kalenderen"}}};const L=({locale:m="nb",value:r,...c})=>a.createElement(Re,{locale:m,value:r},a.createElement(Qe,{...c}));L.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Trigges når fokus forlater et av feltene (dd, mm, yyyy), og neste fokuserte element ikke er et av disse feltene."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Seneste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Tidligste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id til labelen som beskriver datepicker. Påkrevd for UU-kompatibilitet"},dropdownCaption:{required:!1,tsType:{name:"boolean"},description:"Om måned- og år-dropdown skal vises i kalenderen"},value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}}}};const ot={title:"Komponenter/Datepicker/Datepicker",component:L,argTypes:{minDate:{control:"text"},maxDate:{control:"text"}}},i={args:{locale:"nb",labelId:"datepicker-label",minDate:"01.01.2020",maxDate:"31.12.2030"},render:function({value:r,onChange:c,...t}){var u;const[p,s]=n.useState("01.12.2024");return a.createElement(A,{label:"Dato",labelId:(u=i==null?void 0:i.args)==null?void 0:u.labelId},a.createElement(L,{value:r??p,onChange:d=>{s(d),console.log("Datepicker value:",d)},...t}))}},Q={args:{...i.args},render:function({value:r,onChange:c,...t}){var u;const[p,s]=n.useState("01.12.2024");return a.createElement(A,{label:"Dato","aria-invalid":!0,fieldMessage:"Ugyldig dato",labelId:(u=i==null?void 0:i.args)==null?void 0:u.labelId},a.createElement(L,{value:r??p,onChange:s,...t}))}},q={args:{...i.args,fullWidth:!0},render:function({value:r,onChange:c,...t}){var u;const[p,s]=n.useState("01.12.2024");return a.createElement(A,{label:"Dato",labelId:(u=i==null?void 0:i.args)==null?void 0:u.labelId},a.createElement(L,{value:r??p,onChange:s,...t}))}},U={args:{...i.args,calendarAbove:!0},render:function({value:r,onChange:c,...t}){var u;const[p,s]=n.useState("01.12.2024");return a.createElement(A,{label:"Dato",labelId:(u=i==null?void 0:i.args)==null?void 0:u.labelId},a.createElement(L,{value:r??p,onChange:s,...t}))}},F={args:{...i.args,dropdownCaption:!0},render:function({value:r,onChange:c,...t}){var u;const[p,s]=n.useState("01.12.2024");return a.createElement(A,{label:"Dato med dropdowns for måned og år",labelId:(u=i==null?void 0:i.args)==null?void 0:u.labelId},a.createElement(L,{value:r??p,onChange:d=>{s(d)},...t}))}},H={args:{...i.args,locale:"nb"},render:function({...r}){var I;const[c,t]=n.useState("01.12.2024"),[p,s]=n.useState("initiell"),u=D=>{t(D),s("datepicker")},d=[{label:"I dag",value:()=>{const D=new Date;return`${String(D.getDate()).padStart(2,"0")}.${String(D.getMonth()+1).padStart(2,"0")}.${D.getFullYear()}`}},{label:"Begynnelsen av året",value:"01.01.2024"},{label:"Slutten av året",value:"31.12.2024"},{label:"Midten av året",value:"01.07.2024"}];return a.createElement("div",null,a.createElement(A,{label:"Dato",labelId:(I=i==null?void 0:i.args)==null?void 0:I.labelId},a.createElement(L,{...r,value:c,onChange:u})),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("div",null,"Kontroller datepicker eksternt:"),a.createElement("div",{style:{display:"flex",gap:"10px",marginTop:"10px"}},d.map((D,E)=>a.createElement(rt,{key:E,onClick:()=>{const y=typeof D.value=="function"?D.value():D.value;t(y),s("ekstern")}},D.label))),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("div",null,"Manuell ekstern input:"),a.createElement("div",{style:{display:"flex",gap:"10px",maxWidth:"200px",marginTop:"10px"}},a.createElement(nt,{type:"text",value:c,onChange:D=>{t(D.target.value),s("manuell")},placeholder:"dd.mm.åååå"}))),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("div",null,"Nåværende tilstand:"),a.createElement("div",null,"Dato: ",c),a.createElement("div",null,"Sist oppdatert av: ",p))))}},_={args:{...i.args},render:function({value:r,onChange:c,...t}){var u;const[p,s]=n.useState("01.12.2024");return a.createElement(A,{label:"Dato",labelId:(u=i==null?void 0:i.args)==null?void 0:u.labelId,description:"Dette er en beskrivelse av Datepicker-komponenten. Den gir ekstra informasjon om hvordan den skal brukes."},a.createElement(L,{value:r??p,onChange:d=>{s(d),console.log("Datepicker value:",d)},...t}))}};var ge,Me,De;i.parameters={...i.parameters,docs:{...(ge=i.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(De=(Me=i.parameters)==null?void 0:Me.docs)==null?void 0:De.source}}};var ye,ve,be;Q.parameters={...Q.parameters,docs:{...(ye=Q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(ve=Q.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var fe,Te,Ce;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ce=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var Ie,Le,ke;U.parameters={...U.parameters,docs:{...(Ie=U.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(ke=(Le=U.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Ee,we,Ae;F.parameters={...F.parameters,docs:{...(Ee=F.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ae=(we=F.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var je,ze,Ne;H.parameters={...H.parameters,docs:{...(je=H.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ne=(ze=H.parameters)==null?void 0:ze.docs)==null?void 0:Ne.source}}};var he,Se,xe;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    return <InputGroup label="Dato" labelId={Standard?.args?.labelId} description="Dette er en beskrivelse av Datepicker-komponenten. Den gir ekstra informasjon om hvordan den skal brukes.">
                <Datepicker value={value ?? date} onChange={date => {
        setDate(date);
        console.log('Datepicker value:', date);
      }} {...args} />
            </InputGroup>;
  }
}`,...(xe=(Se=_.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};const dt=["Standard","FieldMessageString","FullWidth","CalendarAbove","WithDropdownCaption","TwoWayControlledComponent","WithDescription"],vt=Object.freeze(Object.defineProperty({__proto__:null,CalendarAbove:U,FieldMessageString:Q,FullWidth:q,Standard:i,TwoWayControlledComponent:H,WithDescription:_,WithDropdownCaption:F,__namedExportsOrder:dt,default:ot},Symbol.toStringTag,{value:"Module"}));export{vt as D,i as S,F as W,_ as a};
