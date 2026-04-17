import{r as n,R as t}from"./index-DQDNmYQF.js";import{v as se,g as q,a as ta,p as Me,C as ra,i as na}from"./Calendar-DUZ6a7Q0.js";import{c as Z}from"./index-D2FocPV0.js";import{d as sa}from"./index-D9tCDUwu.js";import{i as L}from"./i18n-iEkwtH7y.js";import{I as ia}from"./Icon-C3s1OswO.js";import{E as la,I as E}from"./InputGroup-BOYEkbY1.js";import{S as oa}from"./SecondaryButton-BgGQzghk.js";import{I as da}from"./Input-COhs6psf.js";const ne=g=>{const r=g.filter(c=>typeof c=="number");return r.map((c,a)=>(c??1)*Math.pow(10,r.length-a-1)).reduce((c,a)=>c+a,0)},Ue=n.createContext({day:null,month:null,year:null,setDay:()=>null,setMonth:()=>null,setYear:()=>null,locale:"nb",calendarActiveDate:"",setCalendarActiveDate:()=>null,setLastChangedValue:()=>null}),ua=12,ca=31,Fe=({children:g,value:r="",locale:c})=>{const a=se(r)?q(r):"",[u,i]=n.useState(a?a.date:null),[d,l]=n.useState(a?a.month+1:null),[C,D]=n.useState(a?a.year:null),[w,v]=n.useState((a==null?void 0:a.toString())??""),[A,b]=n.useState(r??"");return n.useEffect(()=>{r!==A&&(i(a?a.date:null),l(a?a.month+1:null),D(a?a.year:null),v((a==null?void 0:a.toString())??""))},[r]),t.createElement(Ue.Provider,{value:{day:u,month:d,year:C,setDay:(T,o=void 0)=>{const f=T.slice(-2),[m,k]=f,y=ne(f);y>ca?o==null||o():m>3?(i(y),o==null||o()):(i(y),k!==void 0&&(o==null||o()))},setMonth:(T,o=void 0)=>{const f=T.slice(-2),[m,k]=f,y=ne(f);y>ua?o==null||o():m>1?(l(y),o==null||o()):(l(y),k!==void 0&&(o==null||o()))},setYear:T=>{D(ne(T.slice(-4)))},calendarActiveDate:w,setCalendarActiveDate:T=>{v(T)},locale:c,setLastChangedValue:T=>{b(T)}}},g)};Fe.__docgenInfo={description:"",methods:[],displayName:"DatepickerProvider",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const X=t.forwardRef(({className:g,onSpinButtonChange:r,maxLength:c,min:a,max:u,value:i,nextSpinButton:d,prevSpinButton:l,children:C,...D},w)=>{const v=n.useRef([]),A=b=>{var T,o,f;if(/\d/.test(b.key))v.current=v.current.length===c?v.current=[parseInt(b.key)]:v.current.concat(parseInt(b.key)),r(v.current);else if(b.key==="Backspace"||b.key==="Delete"){if(v.current=[],i===0){(T=l==null?void 0:l.current)==null||T.focus();return}const m=i==null?void 0:i.toString().slice(0,-1);v.current=m?m.split("").map(Number):[],r(v.current)}else if(b.key==="ArrowUp"){b.preventDefault();let m=(i??0)+1;m&&m!==null&&m>u&&(m=a),r([m],!1)}else if(b.key==="ArrowDown"){b.preventDefault();let m=(i??0)-1;m<a&&(m=u),r([m],!1)}else b.key==="ArrowLeft"?(b.preventDefault(),(o=l==null?void 0:l.current)==null||o.focus()):b.key==="ArrowRight"&&(b.preventDefault(),(f=d==null?void 0:d.current)==null||f.focus())};return t.createElement("span",{role:"spinbutton",inputMode:"numeric",className:Z(g,"ffe-dateinput__field"),tabIndex:0,onFocus:()=>{v.current=[]},"aria-valuemin":a,"aria-valuemax":u,"aria-valuenow":i,ref:w,onKeyDown:A,...D},C)});X.__docgenInfo={description:"",methods:[],displayName:"SpinButton",props:{className:{required:!1,tsType:{name:"string"},description:""},onSpinButtonChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number[], allowFocusNext?: boolean) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"value"},{type:{name:"boolean"},name:"allowFocusNext"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"number"},description:""},nextSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},prevSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""}}};const He=t.forwardRef(({value:g,locale:r,onClick:c},a)=>{const u=se(g)?`${L[r].CHANGE_DATE}, ${L[r].CHOSEN_DATE} ${g}`:L[r].CHOOSE_DATE;return t.createElement("button",{"data-testid":"datepicker-open",ref:a,onClick:c,className:"ffe-datepicker__button","aria-label":u,type:"button"},t.createElement(ia,{ariaLabel:L[r].CALENDAR_LABEL,fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yMTIuMzA5LTEwMC4wMDFxLTMwLjMwOCAwLTUxLjMwOC0yMXQtMjEtNTEuMzA4di01MzUuMzgycTAtMzAuMzA4IDIxLTUxLjMwOHQ1MS4zMDgtMjFoNTUuMzg1di01My44NDdxMC0xMy4xNTMgOC44MDgtMjEuOTYxIDguODA3LTguODA3IDIxLjk2MS04LjgwNyAxMy4xNTMgMCAyMS45NjEgOC44MDcgOC44MDcgOC44MDggOC44MDcgMjEuOTYxdjUzLjg0N2gzMDMuMDc2di01NC42MTZxMC0xMi43NjkgOC42MTUtMjEuMzg0dDIxLjM4NC04LjYxNXExMi43NjkgMCAyMS4zODQgOC42MTUgOC42MTYgOC42MTUgOC42MTYgMjEuMzg0djU0LjYxNmg1NS4zODVxMzAuMzA4IDAgNTEuMzA4IDIxdDIxIDUxLjMwOHY1MzUuMzgycTAgMzAuMzA4LTIxIDUxLjMwOHQtNTEuMzA4IDIxSDIxMi4zMDlabTAtNTkuOTk5aDUzNS4zODJxNC42MTYgMCA4LjQ2My0zLjg0NiAzLjg0Ni0zLjg0NyAzLjg0Ni04LjQ2M3YtMzc1LjM4MkgyMDB2Mzc1LjM4MnEwIDQuNjE2IDMuODQ2IDguNDYzIDMuODQ3IDMuODQ2IDguNDYzIDMuODQ2Wk0yMDAtNjA3LjY5aDU2MHYtMTAwLjAwMXEwLTQuNjE2LTMuODQ2LTguNDYzLTMuODQ3LTMuODQ2LTguNDYzLTMuODQ2SDIxMi4zMDlxLTQuNjE2IDAtOC40NjMgMy44NDYtMy44NDYgMy44NDctMy44NDYgOC40NjN2MTAwLjAwMVptMCAwVi03MjB2MTEyLjMxWm0yODAgMjEwLjc2N3EtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4VDQ4MC00NjcuNjkxcTE0LjY5MiAwIDI1LjAzOCAxMC4zNDZ0MTAuMzQ2IDI1LjAzOHEwIDE0LjY5Mi0xMC4zNDYgMjUuMDM4VDQ4MC0zOTYuOTIzWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQzMjAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQzMjAtMzk2LjkyM1ptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ2NDAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ2NDAtMzk2LjkyM1pNNDgwLTI0MHEtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4IDEwLjM0Ni0xMC4zNDcgMjUuMDM4LTEwLjM0N3QyNS4wMzggMTAuMzQ3cTEwLjM0NiAxMC4zNDYgMTAuMzQ2IDI1LjAzOHQtMTAuMzQ2IDI1LjAzOFE0OTQuNjkyLTI0MCA0ODAtMjQwWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRMzM0LjY5Mi0yNDAgMzIwLTI0MFptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNjU0LjY5Mi0yNDAgNjQwLTI0MFoiLz48L3N2Zz4=",size:"md",className:"ffe-datepicker__icon"}))});He.__docgenInfo={description:"",methods:[],displayName:"Button",props:{value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const pa=g=>typeof g=="number"&&g>=1&&g<=12,_e=({ariaInvalid:g,"aria-invalid":r,ariaDescribedby:c,"aria-describedby":a,onBlur:u,calendarAbove:i,id:d,maxDate:l,minDate:C,onChange:D,fullWidth:w,fieldMessage:v,labelId:A,dropdownCaption:b,disabledDates:T})=>{const{day:o,setDay:f,year:m,setYear:k,month:y,setMonth:j,locale:h,calendarActiveDate:ie,setCalendarActiveDate:le,setLastChangedValue:oe}=n.useContext(Ue),N=n.useCallback(()=>ta(o,y,m),[o,y,m]),[S,K]=n.useState(!1),[J,Pe]=n.useState(C),[ee,We]=n.useState(l),[x,de]=n.useState(N()),ae=n.useId(),B=n.useRef(null),O=n.useRef(null),z=n.useRef(null),R=n.useRef(null),Ge=()=>v?`${ae}-fieldmessage`:void 0,ue=n.useCallback(e=>{oe(e),D(e)},[D,oe]),Be=Ge(),$=n.useCallback(sa(e=>{e!==x&&se(e)&&(le(e),de(e))},250),[x]),$e=!!v;n.useEffect(()=>()=>{$.cancel()},[$]);const Y=n.useCallback(()=>{const e=N();q(e,p=>{const M=l?q(l):null;M!=null&&M.isBefore(p)&&na(e)&&p.adjust({period:"Y",offset:-100});const Q=p.format();Q!==e&&(f([p.date]),j([p.month+1]),k([p.year])),de(Q)})},[N,l,f,j,k]);n.useEffect(()=>{(C!==J||l!==ee)&&(Pe(C),We(l),Y()),$(N())},[C,l,N,$,J,ee,Y]);const ce=()=>{var e;K(!1),(e=B.current)==null||e.focus(),Y()},pe=e=>{e.key==="Escape"&&ce()},me=e=>{S&&e.__datepickerID!==ae&&ce()},Ve=()=>{window.addEventListener("click",me),window.addEventListener("keyup",pe)},ge=()=>{window.removeEventListener("click",me),window.removeEventListener("keyup",pe)};n.useEffect(()=>(S?Ve():ge(),()=>{ge()}),[S]);const Ze=()=>{Y(),K(!S)},Xe=e=>{const p=e.nativeEvent;p.__datepickerID=ae},Ke=e=>{var p;e.target!==R.current&&e.target!==B.current&&e.target!==O.current&&e.target!==z.current&&((p=O.current)==null||p.focus())},Je=(e,p)=>{var Q;const M=q(e);M&&(f([M.date]),j([M.month+1]),k([M.year]),le(e),p||(K(!1),(Q=B.current)==null||Q.focus()))},V=()=>{const e=r==="true"||g;return e==="true"||e===!0?"true":void 0},te=()=>a??c,re=e=>{e.preventDefault();const p=(e.clipboardData||window.Clipboard).getData("text"),M=q(p);M&&(f([M.date]),j([M.month+1]),k([M.year]))},[ea,aa]=n.useState(!0);return n.useEffect(()=>{if(ea){aa(!1);return}const[e,p,M]=x.split(".").map(Number);if(e*p*M>0){ue(x);return}ue("")},[x]),t.createElement("div",{className:Z("ffe-datepicker","ffe-default-mode",{"ffe-datepicker--full-width":w,"ffe-input-group--message":$e,"ffe-datepicker--invalid":V()}),"data-testid":"date-picker",onClick:e=>{Xe(e),Ke(e)},role:"group",id:d},t.createElement("div",{className:Z("ffe-dateinput"),onBlur:e=>{const p=e.relatedTarget;p!==R.current&&p!==O.current&&p!==z.current&&(u==null||u(e),Y())}},t.createElement(X,{ref:O,value:o??void 0,min:1,max:31,onPaste:re,onSpinButtonChange:(e,p=!0)=>p?f(e,()=>{var M;return(M=z.current)==null?void 0:M.focus({preventScroll:!0})}):f(e),nextSpinButton:z,maxLength:2,"aria-invalid":V(),"aria-valuenow":typeof o=="number"?o:void 0,"aria-valuetext":`${o}`,"aria-label":L[h].DAY,"aria-describedby":te(),"aria-labelledby":A},o?Me(o):"dd"),".",t.createElement(X,{ref:z,value:y??void 0,min:1,max:12,onPaste:re,onSpinButtonChange:(e,p=!0)=>p?j(e,()=>{var M;return(M=R.current)==null?void 0:M.focus({preventScroll:!0})}):j(e),nextSpinButton:R,prevSpinButton:O,maxLength:2,"aria-invalid":V(),"aria-valuenow":typeof y=="number"?y:void 0,"aria-valuetext":pa(y)?`${y} - ${L[h][`MONTH_${y}`]}`:void 0,"aria-label":L[h].MONTH,"aria-describedby":te(),"aria-labelledby":A},y?Me(y):"mm"),".",t.createElement(X,{ref:R,className:"ffe-dateinput__field-year",value:m??void 0,min:1,max:9999,onPaste:re,onSpinButtonChange:e=>{k(e)},prevSpinButton:z,maxLength:4,"aria-invalid":V(),"aria-valuetext":`${m}`,"aria-valuenow":typeof m=="number"?m:void 0,"aria-label":L[h].YEAR,"aria-describedby":te(),"aria-labelledby":A},m||"yyyy")),t.createElement(He,{onClick:Ze,locale:h,value:ie||"",ref:B}),S&&t.createElement(ra,{calendarClassName:Z("ffe-calendar ffe-calendar--datepicker",{"ffe-calendar--datepicker--above":i}),locale:h,onDatePicked:Je,selectedDate:ie,focusOnMount:!0,dropdownCaption:b,minDate:J,maxDate:ee,disabledDates:T}),!!v&&t.createElement(la,{as:"p",id:Be},v))};_e.__docgenInfo={description:"",methods:[],displayName:"DatepickerComp",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Trigges når fokus forlater et av feltene (dd, mm, yyyy), og neste fokuserte element ikke er et av disse feltene."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Seneste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Tidligste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id til labelen som beskriver datepicker. Påkrevd for UU-kompatibilitet"},dropdownCaption:{required:!1,tsType:{name:"boolean"},description:"Om måned- og år-dropdown skal vises i kalenderen"},disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Liste over datoer som skal deaktiveres i kalenderen"}}};const I=({locale:g="nb",value:r,...c})=>t.createElement(Fe,{locale:g,value:r},t.createElement(_e,{...c}));I.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Trigges når fokus forlater et av feltene (dd, mm, yyyy), og neste fokuserte element ikke er et av disse feltene."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Seneste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Tidligste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id til labelen som beskriver datepicker. Påkrevd for UU-kompatibilitet"},dropdownCaption:{required:!1,tsType:{name:"boolean"},description:"Om måned- og år-dropdown skal vises i kalenderen"},disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Liste over datoer som skal deaktiveres i kalenderen"},value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}}}};const ma={title:"Komponenter/Datepicker/Datepicker",component:I,argTypes:{minDate:{control:"text"},maxDate:{control:"text"}}},s={args:{locale:"nb",labelId:"datepicker-label",minDate:"01.01.2020",maxDate:"31.12.2030"},render:function({value:r,onChange:c,...a}){var d;const[u,i]=n.useState("01.12.2024");return t.createElement(E,{label:"Dato",labelId:(d=s==null?void 0:s.args)==null?void 0:d.labelId},t.createElement(I,{value:r??u,onChange:l=>{i(l),console.log("Datepicker value:",l)},...a}))}},U={args:{...s.args},render:function({value:r,onChange:c,...a}){var d;const[u,i]=n.useState("01.12.2024");return t.createElement(E,{label:"Dato","aria-invalid":!0,fieldMessage:"Ugyldig dato",labelId:(d=s==null?void 0:s.args)==null?void 0:d.labelId},t.createElement(I,{value:r??u,onChange:i,...a}))}},F={args:{...s.args,fullWidth:!0},render:function({value:r,onChange:c,...a}){var d;const[u,i]=n.useState("01.12.2024");return t.createElement(E,{label:"Dato",labelId:(d=s==null?void 0:s.args)==null?void 0:d.labelId},t.createElement(I,{value:r??u,onChange:i,...a}))}},H={args:{...s.args,calendarAbove:!0},render:function({value:r,onChange:c,...a}){var d;const[u,i]=n.useState("01.12.2024");return t.createElement(E,{label:"Dato",labelId:(d=s==null?void 0:s.args)==null?void 0:d.labelId},t.createElement(I,{value:r??u,onChange:i,...a}))}},_={args:{...s.args,dropdownCaption:!0},render:function({value:r,onChange:c,...a}){var d;const[u,i]=n.useState("01.12.2024");return t.createElement(E,{label:"Dato med dropdowns for måned og år",labelId:(d=s==null?void 0:s.args)==null?void 0:d.labelId},t.createElement(I,{value:r??u,onChange:l=>{i(l)},...a}))}},P={args:{...s.args,locale:"nb"},render:function({...r}){var C;const[c,a]=n.useState("01.12.2024"),[u,i]=n.useState("initiell"),d=D=>{a(D),i("datepicker")},l=[{label:"I dag",value:()=>{const D=new Date;return`${String(D.getDate()).padStart(2,"0")}.${String(D.getMonth()+1).padStart(2,"0")}.${D.getFullYear()}`}},{label:"Begynnelsen av året",value:"01.01.2024"},{label:"Slutten av året",value:"31.12.2024"},{label:"Midten av året",value:"01.07.2024"}];return t.createElement("div",null,t.createElement(E,{label:"Dato",labelId:(C=s==null?void 0:s.args)==null?void 0:C.labelId},t.createElement(I,{...r,value:c,onChange:d})),t.createElement("div",{style:{marginTop:"20px"}},t.createElement("div",null,"Kontroller datepicker eksternt:"),t.createElement("div",{style:{display:"flex",gap:"10px",marginTop:"10px"}},l.map((D,w)=>t.createElement(oa,{key:w,onClick:()=>{const v=typeof D.value=="function"?D.value():D.value;a(v),i("ekstern")}},D.label))),t.createElement("div",{style:{marginTop:"20px"}},t.createElement("div",null,"Manuell ekstern input:"),t.createElement("div",{style:{display:"flex",gap:"10px",maxWidth:"200px",marginTop:"10px"}},t.createElement(da,{type:"text",value:c,onChange:D=>{a(D.target.value),i("manuell")},placeholder:"dd.mm.åååå"}))),t.createElement("div",{style:{marginTop:"20px"}},t.createElement("div",null,"Nåværende tilstand:"),t.createElement("div",null,"Dato: ",c),t.createElement("div",null,"Sist oppdatert av: ",u))))}},W={args:{...s.args},render:function({value:r,onChange:c,...a}){var d;const[u,i]=n.useState("01.12.2024");return t.createElement(E,{label:"Dato",labelId:(d=s==null?void 0:s.args)==null?void 0:d.labelId,description:"Dette er en beskrivelse av Datepicker-komponenten. Den gir ekstra informasjon om hvordan den skal brukes."},t.createElement(I,{value:r??u,onChange:l=>{i(l),console.log("Datepicker value:",l)},...a}))}},G={args:{...s.args,maxDate:"31.12.2024",disabledDates:["24.12.2024","25.12.2024","31.12.2024"]},render:function({value:r,onChange:c,...a}){var d;const[u,i]=n.useState("01.12.2024");return t.createElement(E,{label:"Dato",labelId:(d=s==null?void 0:s.args)==null?void 0:d.labelId},t.createElement(I,{value:r??u,onChange:l=>{i(l),console.log("Datepicker value:",l)},...a}))}};var De,ve,ye;s.parameters={...s.parameters,docs:{...(De=s.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(ye=(ve=s.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var be,fe,Te;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Te=(fe=U.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var Ce,Ie,ke;F.parameters={...F.parameters,docs:{...(Ce=F.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(ke=(Ie=F.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var Le,Ee,we;H.parameters={...H.parameters,docs:{...(Le=H.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(we=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};var Ae,je,he;_.parameters={..._.parameters,docs:{...(Ae=_.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(he=(je=_.parameters)==null?void 0:je.docs)==null?void 0:he.source}}};var ze,Ne,Se;P.parameters={...P.parameters,docs:{...(ze=P.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Se=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:Se.source}}};var xe,Oe,Re;W.parameters={...W.parameters,docs:{...(xe=W.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Re=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:Re.source}}};var Ye,Qe,qe;G.parameters={...G.parameters,docs:{...(Ye=G.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    maxDate: '31.12.2024',
    disabledDates: ['24.12.2024', '25.12.2024', '31.12.2024']
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
}`,...(qe=(Qe=G.parameters)==null?void 0:Qe.docs)==null?void 0:qe.source}}};const ga=["Standard","FieldMessageString","FullWidth","CalendarAbove","WithDropdownCaption","TwoWayControlledComponent","WithDescription","WithDisabledDates"],ka=Object.freeze(Object.defineProperty({__proto__:null,CalendarAbove:H,FieldMessageString:U,FullWidth:F,Standard:s,TwoWayControlledComponent:P,WithDescription:W,WithDisabledDates:G,WithDropdownCaption:_,__namedExportsOrder:ga,default:ma},Symbol.toStringTag,{value:"Module"}));export{ka as D,s as S,_ as W,W as a};
