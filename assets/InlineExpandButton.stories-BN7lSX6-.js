import{R as e,r as d}from"./index-DQDNmYQF.js";import{I as c}from"./InlineBaseButton-f96K2iuh.js";import{f as y}from"./fixedForwardRef-DqyCgkTx.js";import{c as b}from"./index-QCImZZ3W.js";import{I as M}from"./Icon-BqsuuMcG.js";import{P as l}from"./Paragraph-DEYlXMQQ.js";import{C as j}from"./Collapse-BrKhsD1f.js";function E(a,r){const s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+",t={...a,ref:r},{isExpanded:i,className:k,...u}=t;return e.createElement(c,{rightIcon:e.createElement(M,{size:"md",fileUrl:s}),buttonType:"expand",type:"button",...u,className:b(k,{"ffe-inline-button--expanded":i}),ref:t.ref})}const o=y(E);o.__docgenInfo={description:"",methods:[],displayName:"InlineExpandButton",props:{isExpanded:{required:!0,tsType:{name:"boolean"},description:"When true it will indicate the button is in its open state"}}};const x=a=>e.createElement("a",{...a},"Custom ",a.children),I={title:"Komponenter/Buttons/InlineExpandButton",component:o,argTypes:{as:{options:["a","button","custom"],mapping:{"":"button",a:"a",button:"button",custom:x}}}},n={args:{as:"button",isExpanded:!1},render:function(r){const s=d.useId(),[t,i]=d.useState(r.isExpanded);return e.createElement(e.Fragment,null,e.createElement(l,null,"Jeg samtykker til at selskapene i SpareBank 1 deler og benytter opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.",e.createElement(o,{...r,"aria-controls":s,"aria-expanded":t,isExpanded:t,onClick:()=>i(!t)},t?"Vis mindre":"Vis mer")),e.createElement(j,{id:s,isOpen:t,role:"region"},e.createElement("div",null,e.createElement(l,null,"Jeg samtykker til at selskapene i SpareBank 1 deler og benytter opplysningene om meg, slik at jeg kan få bedre og relevante tilbud. Jeg samtykker til at selskapene i SpareBank 1 deler og benytter opplysningene om meg, slik at jeg kan få bedre og relevante tilbud."),e.createElement(l,null,"Jeg samtykker til at selskapene i SpareBank 1 deler og benytter opplysningene om meg, slik at jeg kan få bedre og relevante tilbud. Jeg samtykker til at selskapene i SpareBank 1 deler og benytter opplysningene om meg, slik at jeg kan få bedre og relevante tilbud."),e.createElement(l,null,"Jeg samtykker til at selskapene i SpareBank 1 deler og benytter opplysningene om meg, slik at jeg kan få bedre og relevante tilbud. Jeg samtykker til at selskapene i SpareBank 1 deler og benytter opplysningene om meg, slik at jeg kan få bedre og relevante tilbud."))))}};var p,g,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    as: 'button',
    isExpanded: false
  },
  render: function Render(args) {
    const collapseId = useId();
    const [isExpanded, setExpanded] = useState(args.isExpanded);
    return <>
                <Paragraph>
                    Jeg samtykker til at selskapene i SpareBank 1 deler og
                    benytter opplysningene om meg, slik at jeg kan få bedre og
                    relevante tilbud.
                    <InlineExpandButton {...args} aria-controls={collapseId} aria-expanded={isExpanded} isExpanded={isExpanded} onClick={() => setExpanded(!isExpanded)}>
                        {isExpanded ? 'Vis mindre' : 'Vis mer'}
                    </InlineExpandButton>
                </Paragraph>

                <Collapse id={collapseId} isOpen={isExpanded} role="region">
                    <div>
                        <Paragraph>
                            Jeg samtykker til at selskapene i SpareBank 1 deler
                            og benytter opplysningene om meg, slik at jeg kan få
                            bedre og relevante tilbud. Jeg samtykker til at
                            selskapene i SpareBank 1 deler og benytter
                            opplysningene om meg, slik at jeg kan få bedre og
                            relevante tilbud.
                        </Paragraph>
                        <Paragraph>
                            Jeg samtykker til at selskapene i SpareBank 1 deler
                            og benytter opplysningene om meg, slik at jeg kan få
                            bedre og relevante tilbud. Jeg samtykker til at
                            selskapene i SpareBank 1 deler og benytter
                            opplysningene om meg, slik at jeg kan få bedre og
                            relevante tilbud.
                        </Paragraph>
                        <Paragraph>
                            Jeg samtykker til at selskapene i SpareBank 1 deler
                            og benytter opplysningene om meg, slik at jeg kan få
                            bedre og relevante tilbud. Jeg samtykker til at
                            selskapene i SpareBank 1 deler og benytter
                            opplysningene om meg, slik at jeg kan få bedre og
                            relevante tilbud.
                        </Paragraph>
                    </div>
                </Collapse>
            </>;
  }
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const f=["Standard"],v=Object.freeze(Object.defineProperty({__proto__:null,Standard:n,__namedExportsOrder:f,default:I},Symbol.toStringTag,{value:"Module"}));export{v as I,n as S};
