import{R as e,r as u}from"./index-DQDNmYQF.js";import{S as h}from"./Skeleton-Len5f0hZ.js";import{S as W}from"./SkeletonCircle-BAvV3Ff2.js";import{c as s}from"./index-D2FocPV0.js";function p(a){const{as:n="p",...t}=a;return e.createElement(n,{...t})}p.__docgenInfo={description:"",methods:[],displayName:"ComponentBase"};function w(a){const{className:n,...t}=a;return e.createElement(p,{className:s("ffe-card-body__card-name",n),...t})}w.__docgenInfo={description:"",methods:[],displayName:"CardName"};function k(a){const{className:n,...t}=a;return e.createElement(p,{className:s("ffe-card-body__subtext",n),...t})}k.__docgenInfo={description:"",methods:[],displayName:"Subtext"};function v(a){const{className:n,...t}=a;return e.createElement(p,{className:s("ffe-card-body__text",n),...t})}v.__docgenInfo={description:"",methods:[],displayName:"Text"};function R(a){const{className:n,overflowEllipsis:t,...r}=a;return e.createElement(p,{className:s("ffe-card-body__title",{"ffe-card-body__title--overflow-ellipsis":t},n),...r})}R.__docgenInfo={description:"",methods:[],displayName:"Title"};function U(a){return n=>{a.forEach(t=>{typeof t=="function"?t(n):t!=null&&(t.current=n)})}}const C=u.forwardRef;function z(a,n){const{as:t="a",...r}=a;return e.createElement(t,{...r,ref:n})}const T=C(z);T.__docgenInfo={description:"",methods:[],displayName:"CardAction"};function B(a,n){const{children:t,as:r="div",onClick:i,className:d,baseClassName:E,...N}=a,c=u.useRef(null),[f,g]=u.useState();u.useEffect(()=>{const o=!!c.current;f!==o&&g(o)},[f]);const S=u.useCallback(({className:o,...l},m)=>e.createElement(T,{className:s(o,"ffe-card__action",{"ffe-card__action--raw":!o}),ref:m?U([m,c]):c,...l}),[]);return e.createElement(r,{...N,className:s(d,f&&`${E}--clickable`),onClick:o=>{var l,m,x;!!!(!((l=window.getSelection())===null||l===void 0)&&l.toString().length)&&!(!((m=c.current)===null||m===void 0)&&m.contains(o.target))&&((x=c.current)===null||x===void 0||x.click()),i==null||i(o)},ref:n},t({CardAction:C(S)}))}const A=C(B);A.__docgenInfo={description:"",methods:[],displayName:"WithCardAction"};function P(a,n){const{className:t,condensed:r,icon:i,rightIcon:d,noMargin:E,appearance:N="default",children:c,...f}=a;return e.createElement(A,{baseClassName:"ffe-icon-card",className:s("ffe-icon-card",{"ffe-icon-card--condensed":r},{"ffe-icon-card--no-margin":E},{"ffe-default-mode":N==="default"},t),...f,ref:n},({CardAction:g})=>{const S=e.createElement("div",{className:"ffe-icon-card__body"},typeof c=="function"?c({Text:v,Subtext:k,Title:R,CardName:w,CardAction:g}):c),o=i&&e.cloneElement(i,{...i.props,className:s("ffe-icon-card__icon",i.props.className)}),l=d&&e.cloneElement(d,{...d.props,className:s("ffe-icon-card__icon",d.props.className)});return e.createElement(e.Fragment,null,o,S,l)})}const F=C(P);F.__docgenInfo={description:"",methods:[],displayName:"IconCard"};const q={title:"Komponenter/Skeleton/SkeletonIconCardExample",component:h},_={args:{},render:function(){return e.createElement(F,{icon:e.createElement(W,{size:"xl"}),"aria-busy":!0},({Title:n,Subtext:t,Text:r})=>e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement(h,{width:"40%"})),e.createElement(t,null,e.createElement(h,{width:"25%",height:"0.75em"})),e.createElement(r,null,e.createElement(h,{width:"10%"}))))}};var b,y,I;_.parameters={..._.parameters,docs:{...(b=_.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    return <IconCard icon={<SkeletonCircle size="xl" />} aria-busy={true}>
                {({
        Title,
        Subtext,
        Text
      }: CardRenderProps) => <>
                        <Title>
                            <Skeleton width={'40%'} />
                        </Title>
                        <Subtext>
                            <Skeleton width={'25%'} height="0.75em" />
                        </Subtext>
                        <Text>
                            <Skeleton width={'10%'} />
                        </Text>
                    </>}
            </IconCard>;
  }
}`,...(I=(y=_.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const D=["Standard"];export{_ as Standard,D as __namedExportsOrder,q as default};
