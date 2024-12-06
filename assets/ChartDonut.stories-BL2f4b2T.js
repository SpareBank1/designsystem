import{R as e}from"./index-eCxJ45ll.js";const m=" ",i=150,a=2*Math.PI*i,o=({name:r,percentage:t,firstLabel:c,lastLabel:l,label:v})=>{const d=a-a/100*t;return e.createElement("div",{className:"ffe-chart-donut"},e.createElement("svg",{viewBox:"0 0 360 360",className:"ffe-chart-donut__circle",style:{transform:`scale(-1, 1) rotate(${t?275:-90}deg)`}},t<95.7&&e.createElement("circle",{className:"ffe-chart-donut--first",fill:"none",strokeWidth:"15",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",cx:"50%",cy:"50%",r:i,strokeDasharray:a,strokeDashoffset:a-d+(t?22:0)})),e.createElement("svg",{viewBox:"0 0 360 360",className:"ffe-chart-donut__circle",style:{transform:`rotate(${t?-85:-90}deg)`}},t>3.2&&e.createElement("circle",{className:"ffe-chart-donut--last",fill:"none",strokeWidth:"15",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",cx:"50%",cy:"50%",r:i,strokeDasharray:a+(t===100?22:0),strokeDashoffset:d+(t?30:0)})),e.createElement("div",{className:"ffe-chart-donut__description"},e.createElement("div",{className:"ffe-chart-donut__name ffe-strong-text"},r),c&&l&&e.createElement("div",{className:"ffe-chart-donut__fractions"},e.createElement("div",{className:"ffe-chart-donut__fraction ffe-chart-donut__fraction--vann"},e.createElement("div",{className:"ffe-chart-donut__amount ffe-strong-text"},`${Number(100-t).toFixed(0)}${m}%`),e.createElement("div",{className:"ffe-chart-donut__type ffe-micro-text"},c)),e.createElement("div",{className:"ffe-chart-donut__fraction ffe-chart-donut__fraction--frost"},e.createElement("div",{className:"ffe-chart-donut__amount ffe-strong-text"},`${Number(t).toFixed(0)}${m}%`),e.createElement("div",{className:"ffe-chart-donut__type ffe-micro-text"},l))),!c&&!l&&v))};o.__docgenInfo={description:"",methods:[],displayName:"ChartDonut",props:{firstLabel:{required:!1,tsType:{name:"string"},description:'Short text labeling left value, like "empty", "said yes" etc'},lastLabel:{required:!1,tsType:{name:"string"},description:'Short text labeling right value, like "full", "said` no" etc'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"React node to be inserted directly under the chart's name, alternative to first/last label"},name:{required:!0,tsType:{name:"string"},description:'Short text labeling the graph in total, like "percentage", "voted this year" etc'},percentage:{required:!0,tsType:{name:"number"},description:"The percentage for the right-most value"}}};const N={title:"Komponenter/Chart-donut/ChartDonut",component:o},n={args:{name:"Name",firstLabel:"First label",lastLabel:"Last label",percentage:42},render:r=>e.createElement(o,{...r})},s={args:{name:"Name",percentage:42,label:e.createElement("div",{style:{marginTop:10,textAlign:"center"}},"Du har selv ansvar",e.createElement("br",null),e.createElement("strong",null,"for all styling"))},render:r=>e.createElement(o,{...r})};var f,u,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'Name',
    firstLabel: 'First label',
    lastLabel: 'Last label',
    percentage: 42
  },
  render: args => <ChartDonut {...args} />
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,p,_;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'Name',
    percentage: 42,
    label: <div style={{
      marginTop: 10,
      textAlign: 'center'
    }}>
                Du har selv ansvar
                <br />
                <strong>for all styling</strong>
            </div>
  },
  render: args => <ChartDonut {...args} />
}`,...(_=(p=s.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};const E=["Standard","Custom"],b=Object.freeze(Object.defineProperty({__proto__:null,Custom:s,Standard:n,__namedExportsOrder:E,default:N},Symbol.toStringTag,{value:"Module"}));export{b as C,n as S,s as a};