import{R as Tt,c as Pe,a as sr,g as mn}from"./index-eCxJ45ll.js";import{c as cr}from"./index-DezCrw0f.js";var bt=function(){return bt=Object.assign||function(n){for(var u,c=1,l=arguments.length;c<l;c++){u=arguments[c];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(n[o]=u[o])}return n},bt.apply(this,arguments)},yn=function(n,u){var c={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&u.indexOf(l)<0&&(c[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(n);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(n,l[o])&&(c[l[o]]=n[l[o]]);return c};function Tn(n){var u=n.as,c=u===void 0?"span":u,l=n.className,o=yn(n,["as","className"]);return Tt.createElement(c,bt({className:cr("ffe-small-text",l)},o))}Tn.__docgenInfo={description:"",methods:[],displayName:"SmallText"};const Ft=n=>typeof n=="object"&&n!=null&&n.nodeType===1,qt=(n,u)=>(!u||n!=="hidden")&&n!=="visible"&&n!=="clip",nt=(n,u)=>{if(n.clientHeight<n.scrollHeight||n.clientWidth<n.scrollWidth){const c=getComputedStyle(n,null);return qt(c.overflowY,u)||qt(c.overflowX,u)||(l=>{const o=(T=>{if(!T.ownerDocument||!T.ownerDocument.defaultView)return null;try{return T.ownerDocument.defaultView.frameElement}catch{return null}})(l);return!!o&&(o.clientHeight<l.scrollHeight||o.clientWidth<l.scrollWidth)})(n)}return!1},$e=(n,u,c,l,o,T,p,m)=>T<n&&p>u||T>n&&p<u?0:T<=n&&m<=c||p>=u&&m>=c?T-n-l:p>u&&m<c||T<n&&m>c?p-u+o:0,bn=n=>{const u=n.parentElement;return u??(n.getRootNode().host||null)},Zn=(n,u)=>{var c,l,o,T;if(typeof document>"u")return[];const{scrollMode:p,block:m,inline:b,boundary:g,skipOverflowHiddenElements:v}=u,S=typeof g=="function"?g:f=>f!==g;if(!Ft(n))throw new TypeError("Invalid target");const M=document.scrollingElement||document.documentElement,O=[];let R=n;for(;Ft(R)&&S(R);){if(R=bn(R),R===M){O.push(R);break}R!=null&&R===document.body&&nt(R)&&!nt(document.documentElement)||R!=null&&nt(R,v)&&O.push(R)}const F=(l=(c=window.visualViewport)==null?void 0:c.width)!=null?l:innerWidth,ee=(T=(o=window.visualViewport)==null?void 0:o.height)!=null?T:innerHeight,{scrollX:oe,scrollY:X}=window,{height:te,width:P,top:K,right:q,bottom:he,left:ge}=n.getBoundingClientRect(),{top:Le,right:pe,bottom:ce,left:D}=(f=>{const s=window.getComputedStyle(f);return{top:parseFloat(s.scrollMarginTop)||0,right:parseFloat(s.scrollMarginRight)||0,bottom:parseFloat(s.scrollMarginBottom)||0,left:parseFloat(s.scrollMarginLeft)||0}})(n);let y=m==="start"||m==="nearest"?K-Le:m==="end"?he+ce:K+te/2-Le+ce,d=b==="center"?ge+P/2-D+pe:b==="end"?q+pe:ge-D;const i=[];for(let f=0;f<O.length;f++){const s=O[f],{height:w,width:r,top:k,right:L,bottom:x,left:G}=s.getBoundingClientRect();if(p==="if-needed"&&K>=0&&ge>=0&&he<=ee&&q<=F&&K>=k&&he<=x&&ge>=G&&q<=L)return i;const N=getComputedStyle(s),H=parseInt(N.borderLeftWidth,10),V=parseInt(N.borderTopWidth,10),B=parseInt(N.borderRightWidth,10),W=parseInt(N.borderBottomWidth,10);let A=0,$=0;const re="offsetWidth"in s?s.offsetWidth-s.clientWidth-H-B:0,ne="offsetHeight"in s?s.offsetHeight-s.clientHeight-V-W:0,Z="offsetWidth"in s?s.offsetWidth===0?0:r/s.offsetWidth:0,ue="offsetHeight"in s?s.offsetHeight===0?0:w/s.offsetHeight:0;if(M===s)A=m==="start"?y:m==="end"?y-ee:m==="nearest"?$e(X,X+ee,ee,V,W,X+y,X+y+te,te):y-ee/2,$=b==="start"?d:b==="center"?d-F/2:b==="end"?d-F:$e(oe,oe+F,F,H,B,oe+d,oe+d+P,P),A=Math.max(0,A+X),$=Math.max(0,$+oe);else{A=m==="start"?y-k-V:m==="end"?y-x+W+ne:m==="nearest"?$e(k,x,w,V,W+ne,y,y+te,te):y-(k+w/2)+ne/2,$=b==="start"?d-G-H:b==="center"?d-(G+r/2)+re/2:b==="end"?d-L+B+re:$e(G,L,r,H,B+re,d,d+P,P);const{scrollLeft:ve,scrollTop:Se}=s;A=ue===0?0:Math.max(0,Math.min(Se+A/ue,s.scrollHeight-w/ue+ne)),$=Z===0?0:Math.max(0,Math.min(ve+$/Z,s.scrollWidth-r/Z+re)),y+=Se-A,d+=ve-$}i.push({el:s,top:A,left:$})}return i};var it={},at={},Re={exports:{}},Oe={exports:{}},Sn=Oe.exports,Nt;function wn(){return Nt||(Nt=1,(function(){var n,u,c,l,o,T;typeof performance<"u"&&performance!==null&&performance.now?Oe.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(Oe.exports=function(){return(n()-o)/1e6},u=process.hrtime,n=function(){var p;return p=u(),p[0]*1e9+p[1]},l=n(),T=process.uptime()*1e9,o=l-T):Date.now?(Oe.exports=function(){return Date.now()-c},c=Date.now()):(Oe.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(Sn)),Oe.exports}var Bt;function _n(){if(Bt)return Re.exports;Bt=1;for(var n=wn(),u=typeof window>"u"?Pe:window,c=["moz","webkit"],l="AnimationFrame",o=u["request"+l],T=u["cancel"+l]||u["cancelRequest"+l],p=0;!o&&p<c.length;p++)o=u[c[p]+"Request"+l],T=u[c[p]+"Cancel"+l]||u[c[p]+"CancelRequest"+l];if(!o||!T){var m=0,b=0,g=[],v=1e3/60;o=function(S){if(g.length===0){var M=n(),O=Math.max(0,v-(M-m));m=O+M,setTimeout(function(){var R=g.slice(0);g.length=0;for(var F=0;F<R.length;F++)if(!R[F].cancelled)try{R[F].callback(m)}catch(ee){setTimeout(function(){throw ee},0)}},Math.round(O))}return g.push({handle:++b,callback:S,cancelled:!1}),b},T=function(S){for(var M=0;M<g.length;M++)g[M].handle===S&&(g[M].cancelled=!0)}}return Re.exports=function(S){return o.call(u,S)},Re.exports.cancel=function(){T.apply(u,arguments)},Re.exports.polyfill=function(S){S||(S=u),S.requestAnimationFrame=o,S.cancelAnimationFrame=T},Re.exports}var Ae={exports:{}},ot,jt;function Hn(){if(jt)return ot;jt=1;var n=null,u=["Webkit","Moz","O","ms"];return ot=function(l){n||(n=document.createElement("div"));var o=n.style;if(l in o)return l;for(var T=l.charAt(0).toUpperCase()+l.slice(1),p=u.length;p>=0;p--){var m=u[p]+T;if(m in o)return m}return!1},ot}var lt,Ut;function kn(){if(Ut)return lt;Ut=1,lt=l;var n=/\s/,u=/(_|-|\.|:)/,c=/([a-z][A-Z]|[A-Z][a-z])/;function l(b){return n.test(b)?b.toLowerCase():u.test(b)?(T(b)||b).toLowerCase():c.test(b)?m(b).toLowerCase():b.toLowerCase()}var o=/[\W_]+(.|$)/g;function T(b){return b.replace(o,function(g,v){return v?" "+v:""})}var p=/(.)([A-Z]+)/g;function m(b){return b.replace(p,function(g,v,S){return v+" "+S.toLowerCase().split("").join(" ")})}return lt}var ut,Gt;function Dn(){if(Gt)return ut;Gt=1;var n=kn();ut=u;function u(c){return n(c).replace(/[\W_]+(.|$)/g,function(l,o){return o?" "+o:""}).trim()}return ut}var st,$t;function Mn(){if($t)return st;$t=1;var n=Dn();st=u;function u(c){return n(c).replace(/\s(\w)/g,function(l,o){return o.toUpperCase()})}return st}var ct,Xt;function On(){if(Xt)return ct;Xt=1;var n={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};return ct=function(u,c){return typeof c=="number"&&!n[u]?c+"px":c},ct}var Yt;function fr(){if(Yt)return Ae.exports;Yt=1;var n=Hn(),u=Mn(),c={float:"cssFloat"},l=On();function o(b,g,v){var S=c[g];if(typeof S>"u"&&(S=p(g)),S){if(v===void 0)return b.style[S];b.style[S]=l(S,v)}}function T(b,g){for(var v in g)g.hasOwnProperty(v)&&o(b,v,g[v])}function p(b){var g=u(b),v=n(g);return c[g]=c[b]=c[v]=v,v}function m(){arguments.length===2?typeof arguments[1]=="string"?arguments[0].style.cssText=arguments[1]:T(arguments[0],arguments[1]):o(arguments[0],arguments[1],arguments[2])}return Ae.exports=m,Ae.exports.set=m,Ae.exports.get=function(b,g){return Array.isArray(g)?g.reduce(function(v,S){return v[S]=o(b,S||""),v},{}):o(b,g||"")},Ae.exports}var ft={exports:{}},dt,Kt;function Ln(){if(Kt)return dt;Kt=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return dt=n,dt}var ht,Zt;function En(){if(Zt)return ht;Zt=1;var n=Ln();function u(){}function c(){}return c.resetWarningCache=u,ht=function(){function l(p,m,b,g,v,S){if(S!==n){var M=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw M.name="Invariant Violation",M}}l.isRequired=l;function o(){return l}var T={array:l,bigint:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:o,element:l,elementType:l,instanceOf:o,node:l,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:c,resetWarningCache:u};return T.PropTypes=T,T},ht}var Jt;function xn(){return Jt||(Jt=1,ft.exports=En()()),ft.exports}var gt={},Qt;function Wn(){return Qt||(Qt=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=u;function u(c){return typeof c=="string"}}(gt)),gt}var pt={},er;function zn(){return er||(er=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=T;var u=fr(),c=l(u);function l(p){return p&&p.__esModule?p:{default:p}}var o=!1;function T(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(p&&o!==!1)return o;if(typeof document<"u"){var m=document.createElement("div");(0,c.default)(m,{width:100,height:100,position:"absolute",top:-9999,overflow:"scroll",MsOverflowStyle:"scrollbar"}),document.body.appendChild(m),o=m.offsetWidth-m.clientWidth,document.body.removeChild(m)}else o=0;return o||0}}(pt)),pt}var vt={},tr;function Cn(){return tr||(tr=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=u;function u(){return!1}}(vt)),vt}var mt={},rr;function Rn(){return rr||(rr=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=u;function u(c){var l=c.clientWidth,o=getComputedStyle(c),T=o.paddingLeft,p=o.paddingRight;return l-parseFloat(T)-parseFloat(p)}}(mt)),mt}var yt={},nr;function An(){return nr||(nr=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=u;function u(c){var l=c.clientHeight,o=getComputedStyle(c),T=o.paddingTop,p=o.paddingBottom;return l-parseFloat(T)-parseFloat(p)}}(yt)),yt}var Y={},ir;function Pn(){return ir||(ir=1,Object.defineProperty(Y,"__esModule",{value:!0}),Y.containerStyleDefault={position:"relative",overflow:"hidden",width:"100%",height:"100%"},Y.containerStyleAutoHeight={height:"auto"},Y.viewStyleDefault={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"scroll",WebkitOverflowScrolling:"touch"},Y.viewStyleAutoHeight={position:"relative",top:void 0,left:void 0,right:void 0,bottom:void 0},Y.viewStyleUniversalInitial={overflow:"hidden",marginRight:0,marginBottom:0},Y.trackHorizontalStyleDefault={position:"absolute",height:6},Y.trackVerticalStyleDefault={position:"absolute",width:6},Y.thumbHorizontalStyleDefault={position:"relative",display:"block",height:"100%"},Y.thumbVerticalStyleDefault={position:"relative",display:"block",width:"100%"},Y.disableSelectStyle={userSelect:"none"},Y.disableSelectStyleReset={userSelect:""}),Y}var be={},ar;function Vn(){if(ar)return be;ar=1,Object.defineProperty(be,"__esModule",{value:!0});var n=Object.assign||function(v){for(var S=1;S<arguments.length;S++){var M=arguments[S];for(var O in M)Object.prototype.hasOwnProperty.call(M,O)&&(v[O]=M[O])}return v};be.renderViewDefault=T,be.renderTrackHorizontalDefault=p,be.renderTrackVerticalDefault=m,be.renderThumbHorizontalDefault=b,be.renderThumbVerticalDefault=g;var u=sr(),c=l(u);function l(v){return v&&v.__esModule?v:{default:v}}function o(v,S){var M={};for(var O in v)S.indexOf(O)>=0||Object.prototype.hasOwnProperty.call(v,O)&&(M[O]=v[O]);return M}function T(v){return c.default.createElement("div",v)}function p(v){var S=v.style,M=o(v,["style"]),O=n({},S,{right:2,bottom:2,left:2,borderRadius:3});return c.default.createElement("div",n({style:O},M))}function m(v){var S=v.style,M=o(v,["style"]),O=n({},S,{right:2,bottom:2,top:2,borderRadius:3});return c.default.createElement("div",n({style:O},M))}function b(v){var S=v.style,M=o(v,["style"]),O=n({},S,{cursor:"pointer",borderRadius:"inherit",backgroundColor:"rgba(0,0,0,.2)"});return c.default.createElement("div",n({style:O},M))}function g(v){var S=v.style,M=o(v,["style"]),O=n({},S,{cursor:"pointer",borderRadius:"inherit",backgroundColor:"rgba(0,0,0,.2)"});return c.default.createElement("div",n({style:O},M))}return be}var or;function In(){return or||(or=1,function(n){Object.defineProperty(n,"__esModule",{value:!0});var u=Object.assign||function(D){for(var y=1;y<arguments.length;y++){var d=arguments[y];for(var i in d)Object.prototype.hasOwnProperty.call(d,i)&&(D[i]=d[i])}return D},c=function(){function D(y,d){for(var i=0;i<d.length;i++){var f=d[i];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(y,f.key,f)}}return function(y,d,i){return d&&D(y.prototype,d),i&&D(y,i),y}}(),l=_n(),o=q(l),T=fr(),p=q(T),m=sr(),b=xn(),g=q(b),v=Wn(),S=q(v),M=zn(),O=q(M),R=Cn(),F=q(R),ee=Rn(),oe=q(ee),X=An(),te=q(X),P=Pn(),K=Vn();function q(D){return D&&D.__esModule?D:{default:D}}function he(D,y){var d={};for(var i in D)y.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(D,i)&&(d[i]=D[i]);return d}function ge(D,y){if(!(D instanceof y))throw new TypeError("Cannot call a class as a function")}function Le(D,y){if(!D)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:D}function pe(D,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);D.prototype=Object.create(y&&y.prototype,{constructor:{value:D,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(D,y):D.__proto__=y)}var ce=function(D){pe(y,D);function y(d){var i;ge(this,y);for(var f=arguments.length,s=Array(f>1?f-1:0),w=1;w<f;w++)s[w-1]=arguments[w];var r=Le(this,(i=y.__proto__||Object.getPrototypeOf(y)).call.apply(i,[this,d].concat(s)));return r.getScrollLeft=r.getScrollLeft.bind(r),r.getScrollTop=r.getScrollTop.bind(r),r.getScrollWidth=r.getScrollWidth.bind(r),r.getScrollHeight=r.getScrollHeight.bind(r),r.getClientWidth=r.getClientWidth.bind(r),r.getClientHeight=r.getClientHeight.bind(r),r.getValues=r.getValues.bind(r),r.getThumbHorizontalWidth=r.getThumbHorizontalWidth.bind(r),r.getThumbVerticalHeight=r.getThumbVerticalHeight.bind(r),r.getScrollLeftForOffset=r.getScrollLeftForOffset.bind(r),r.getScrollTopForOffset=r.getScrollTopForOffset.bind(r),r.scrollLeft=r.scrollLeft.bind(r),r.scrollTop=r.scrollTop.bind(r),r.scrollToLeft=r.scrollToLeft.bind(r),r.scrollToTop=r.scrollToTop.bind(r),r.scrollToRight=r.scrollToRight.bind(r),r.scrollToBottom=r.scrollToBottom.bind(r),r.handleTrackMouseEnter=r.handleTrackMouseEnter.bind(r),r.handleTrackMouseLeave=r.handleTrackMouseLeave.bind(r),r.handleHorizontalTrackMouseDown=r.handleHorizontalTrackMouseDown.bind(r),r.handleVerticalTrackMouseDown=r.handleVerticalTrackMouseDown.bind(r),r.handleHorizontalThumbMouseDown=r.handleHorizontalThumbMouseDown.bind(r),r.handleVerticalThumbMouseDown=r.handleVerticalThumbMouseDown.bind(r),r.handleWindowResize=r.handleWindowResize.bind(r),r.handleScroll=r.handleScroll.bind(r),r.handleDrag=r.handleDrag.bind(r),r.handleDragEnd=r.handleDragEnd.bind(r),r.state={didMountUniversal:!1},r}return c(y,[{key:"componentDidMount",value:function(){this.addListeners(),this.update(),this.componentDidMountUniversal()}},{key:"componentDidMountUniversal",value:function(){var i=this.props.universal;i&&this.setState({didMountUniversal:!0})}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"componentWillUnmount",value:function(){this.removeListeners(),(0,l.cancel)(this.requestFrame),clearTimeout(this.hideTracksTimeout),clearInterval(this.detectScrollingInterval)}},{key:"getScrollLeft",value:function(){return this.view?this.view.scrollLeft:0}},{key:"getScrollTop",value:function(){return this.view?this.view.scrollTop:0}},{key:"getScrollWidth",value:function(){return this.view?this.view.scrollWidth:0}},{key:"getScrollHeight",value:function(){return this.view?this.view.scrollHeight:0}},{key:"getClientWidth",value:function(){return this.view?this.view.clientWidth:0}},{key:"getClientHeight",value:function(){return this.view?this.view.clientHeight:0}},{key:"getValues",value:function(){var i=this.view||{},f=i.scrollLeft,s=f===void 0?0:f,w=i.scrollTop,r=w===void 0?0:w,k=i.scrollWidth,L=k===void 0?0:k,x=i.scrollHeight,G=x===void 0?0:x,N=i.clientWidth,H=N===void 0?0:N,V=i.clientHeight,B=V===void 0?0:V;return{left:s/(L-H)||0,top:r/(G-B)||0,scrollLeft:s,scrollTop:r,scrollWidth:L,scrollHeight:G,clientWidth:H,clientHeight:B}}},{key:"getThumbHorizontalWidth",value:function(){var i=this.props,f=i.thumbSize,s=i.thumbMinSize,w=this.view,r=w.scrollWidth,k=w.clientWidth,L=(0,oe.default)(this.trackHorizontal),x=Math.ceil(k/r*L);return L<=x?0:f||Math.max(x,s)}},{key:"getThumbVerticalHeight",value:function(){var i=this.props,f=i.thumbSize,s=i.thumbMinSize,w=this.view,r=w.scrollHeight,k=w.clientHeight,L=(0,te.default)(this.trackVertical),x=Math.ceil(k/r*L);return L<=x?0:f||Math.max(x,s)}},{key:"getScrollLeftForOffset",value:function(i){var f=this.view,s=f.scrollWidth,w=f.clientWidth,r=(0,oe.default)(this.trackHorizontal),k=this.getThumbHorizontalWidth();return i/(r-k)*(s-w)}},{key:"getScrollTopForOffset",value:function(i){var f=this.view,s=f.scrollHeight,w=f.clientHeight,r=(0,te.default)(this.trackVertical),k=this.getThumbVerticalHeight();return i/(r-k)*(s-w)}},{key:"scrollLeft",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.view&&(this.view.scrollLeft=i)}},{key:"scrollTop",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.view&&(this.view.scrollTop=i)}},{key:"scrollToLeft",value:function(){this.view&&(this.view.scrollLeft=0)}},{key:"scrollToTop",value:function(){this.view&&(this.view.scrollTop=0)}},{key:"scrollToRight",value:function(){this.view&&(this.view.scrollLeft=this.view.scrollWidth)}},{key:"scrollToBottom",value:function(){this.view&&(this.view.scrollTop=this.view.scrollHeight)}},{key:"addListeners",value:function(){if(!(typeof document>"u"||!this.view)){var i=this.view,f=this.trackHorizontal,s=this.trackVertical,w=this.thumbHorizontal,r=this.thumbVertical;i.addEventListener("scroll",this.handleScroll),(0,O.default)()&&(f.addEventListener("mouseenter",this.handleTrackMouseEnter),f.addEventListener("mouseleave",this.handleTrackMouseLeave),f.addEventListener("mousedown",this.handleHorizontalTrackMouseDown),s.addEventListener("mouseenter",this.handleTrackMouseEnter),s.addEventListener("mouseleave",this.handleTrackMouseLeave),s.addEventListener("mousedown",this.handleVerticalTrackMouseDown),w.addEventListener("mousedown",this.handleHorizontalThumbMouseDown),r.addEventListener("mousedown",this.handleVerticalThumbMouseDown),window.addEventListener("resize",this.handleWindowResize))}}},{key:"removeListeners",value:function(){if(!(typeof document>"u"||!this.view)){var i=this.view,f=this.trackHorizontal,s=this.trackVertical,w=this.thumbHorizontal,r=this.thumbVertical;i.removeEventListener("scroll",this.handleScroll),(0,O.default)()&&(f.removeEventListener("mouseenter",this.handleTrackMouseEnter),f.removeEventListener("mouseleave",this.handleTrackMouseLeave),f.removeEventListener("mousedown",this.handleHorizontalTrackMouseDown),s.removeEventListener("mouseenter",this.handleTrackMouseEnter),s.removeEventListener("mouseleave",this.handleTrackMouseLeave),s.removeEventListener("mousedown",this.handleVerticalTrackMouseDown),w.removeEventListener("mousedown",this.handleHorizontalThumbMouseDown),r.removeEventListener("mousedown",this.handleVerticalThumbMouseDown),window.removeEventListener("resize",this.handleWindowResize),this.teardownDragging())}}},{key:"handleScroll",value:function(i){var f=this,s=this.props,w=s.onScroll,r=s.onScrollFrame;w&&w(i),this.update(function(k){var L=k.scrollLeft,x=k.scrollTop;f.viewScrollLeft=L,f.viewScrollTop=x,r&&r(k)}),this.detectScrolling()}},{key:"handleScrollStart",value:function(){var i=this.props.onScrollStart;i&&i(),this.handleScrollStartAutoHide()}},{key:"handleScrollStartAutoHide",value:function(){var i=this.props.autoHide;i&&this.showTracks()}},{key:"handleScrollStop",value:function(){var i=this.props.onScrollStop;i&&i(),this.handleScrollStopAutoHide()}},{key:"handleScrollStopAutoHide",value:function(){var i=this.props.autoHide;i&&this.hideTracks()}},{key:"handleWindowResize",value:function(){(0,O.default)(!1),this.forceUpdate()}},{key:"handleHorizontalTrackMouseDown",value:function(i){i.preventDefault();var f=i.target,s=i.clientX,w=f.getBoundingClientRect(),r=w.left,k=this.getThumbHorizontalWidth(),L=Math.abs(r-s)-k/2;this.view.scrollLeft=this.getScrollLeftForOffset(L)}},{key:"handleVerticalTrackMouseDown",value:function(i){i.preventDefault();var f=i.target,s=i.clientY,w=f.getBoundingClientRect(),r=w.top,k=this.getThumbVerticalHeight(),L=Math.abs(r-s)-k/2;this.view.scrollTop=this.getScrollTopForOffset(L)}},{key:"handleHorizontalThumbMouseDown",value:function(i){i.preventDefault(),this.handleDragStart(i);var f=i.target,s=i.clientX,w=f.offsetWidth,r=f.getBoundingClientRect(),k=r.left;this.prevPageX=w-(s-k)}},{key:"handleVerticalThumbMouseDown",value:function(i){i.preventDefault(),this.handleDragStart(i);var f=i.target,s=i.clientY,w=f.offsetHeight,r=f.getBoundingClientRect(),k=r.top;this.prevPageY=w-(s-k)}},{key:"setupDragging",value:function(){(0,p.default)(document.body,P.disableSelectStyle),document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragEnd),document.onselectstart=F.default}},{key:"teardownDragging",value:function(){(0,p.default)(document.body,P.disableSelectStyleReset),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd),document.onselectstart=void 0}},{key:"handleDragStart",value:function(i){this.dragging=!0,i.stopImmediatePropagation(),this.setupDragging()}},{key:"handleDrag",value:function(i){if(this.prevPageX){var f=i.clientX,s=this.trackHorizontal.getBoundingClientRect(),w=s.left,r=this.getThumbHorizontalWidth(),k=r-this.prevPageX,L=-w+f-k;this.view.scrollLeft=this.getScrollLeftForOffset(L)}if(this.prevPageY){var x=i.clientY,G=this.trackVertical.getBoundingClientRect(),N=G.top,H=this.getThumbVerticalHeight(),V=H-this.prevPageY,B=-N+x-V;this.view.scrollTop=this.getScrollTopForOffset(B)}return!1}},{key:"handleDragEnd",value:function(){this.dragging=!1,this.prevPageX=this.prevPageY=0,this.teardownDragging(),this.handleDragEndAutoHide()}},{key:"handleDragEndAutoHide",value:function(){var i=this.props.autoHide;i&&this.hideTracks()}},{key:"handleTrackMouseEnter",value:function(){this.trackMouseOver=!0,this.handleTrackMouseEnterAutoHide()}},{key:"handleTrackMouseEnterAutoHide",value:function(){var i=this.props.autoHide;i&&this.showTracks()}},{key:"handleTrackMouseLeave",value:function(){this.trackMouseOver=!1,this.handleTrackMouseLeaveAutoHide()}},{key:"handleTrackMouseLeaveAutoHide",value:function(){var i=this.props.autoHide;i&&this.hideTracks()}},{key:"showTracks",value:function(){clearTimeout(this.hideTracksTimeout),(0,p.default)(this.trackHorizontal,{opacity:1}),(0,p.default)(this.trackVertical,{opacity:1})}},{key:"hideTracks",value:function(){var i=this;if(!this.dragging&&!this.scrolling&&!this.trackMouseOver){var f=this.props.autoHideTimeout;clearTimeout(this.hideTracksTimeout),this.hideTracksTimeout=setTimeout(function(){(0,p.default)(i.trackHorizontal,{opacity:0}),(0,p.default)(i.trackVertical,{opacity:0})},f)}}},{key:"detectScrolling",value:function(){var i=this;this.scrolling||(this.scrolling=!0,this.handleScrollStart(),this.detectScrollingInterval=setInterval(function(){i.lastViewScrollLeft===i.viewScrollLeft&&i.lastViewScrollTop===i.viewScrollTop&&(clearInterval(i.detectScrollingInterval),i.scrolling=!1,i.handleScrollStop()),i.lastViewScrollLeft=i.viewScrollLeft,i.lastViewScrollTop=i.viewScrollTop},100))}},{key:"raf",value:function(i){var f=this;this.requestFrame&&o.default.cancel(this.requestFrame),this.requestFrame=(0,o.default)(function(){f.requestFrame=void 0,i()})}},{key:"update",value:function(i){var f=this;this.raf(function(){return f._update(i)})}},{key:"_update",value:function(i){var f=this.props,s=f.onUpdate,w=f.hideTracksWhenNotNeeded,r=this.getValues();if((0,O.default)()){var k=r.scrollLeft,L=r.clientWidth,x=r.scrollWidth,G=(0,oe.default)(this.trackHorizontal),N=this.getThumbHorizontalWidth(),H=k/(x-L)*(G-N),V={width:N,transform:"translateX("+H+"px)"},B=r.scrollTop,W=r.clientHeight,A=r.scrollHeight,$=(0,te.default)(this.trackVertical),re=this.getThumbVerticalHeight(),ne=B/(A-W)*($-re),Z={height:re,transform:"translateY("+ne+"px)"};if(w){var ue={visibility:x>L?"visible":"hidden"},ve={visibility:A>W?"visible":"hidden"};(0,p.default)(this.trackHorizontal,ue),(0,p.default)(this.trackVertical,ve)}(0,p.default)(this.thumbHorizontal,V),(0,p.default)(this.thumbVertical,Z)}s&&s(r),typeof i=="function"&&i(r)}},{key:"render",value:function(){var i=this,f=(0,O.default)(),s=this.props;s.onScroll,s.onScrollFrame,s.onScrollStart,s.onScrollStop,s.onUpdate;var w=s.renderView,r=s.renderTrackHorizontal,k=s.renderTrackVertical,L=s.renderThumbHorizontal,x=s.renderThumbVertical,G=s.tagName;s.hideTracksWhenNotNeeded;var N=s.autoHide;s.autoHideTimeout;var H=s.autoHideDuration;s.thumbSize,s.thumbMinSize;var V=s.universal,B=s.autoHeight,W=s.autoHeightMin,A=s.autoHeightMax,$=s.style,re=s.children,ne=he(s,["onScroll","onScrollFrame","onScrollStart","onScrollStop","onUpdate","renderView","renderTrackHorizontal","renderTrackVertical","renderThumbHorizontal","renderThumbVertical","tagName","hideTracksWhenNotNeeded","autoHide","autoHideTimeout","autoHideDuration","thumbSize","thumbMinSize","universal","autoHeight","autoHeightMin","autoHeightMax","style","children"]),Z=this.state.didMountUniversal,ue=u({},P.containerStyleDefault,B&&u({},P.containerStyleAutoHeight,{minHeight:W,maxHeight:A}),$),ve=u({},P.viewStyleDefault,{marginRight:f?-f:0,marginBottom:f?-f:0},B&&u({},P.viewStyleAutoHeight,{minHeight:(0,S.default)(W)?"calc("+W+" + "+f+"px)":W+f,maxHeight:(0,S.default)(A)?"calc("+A+" + "+f+"px)":A+f}),B&&V&&!Z&&{minHeight:W,maxHeight:A},V&&!Z&&P.viewStyleUniversalInitial),Se={transition:"opacity "+H+"ms",opacity:0},Xe=u({},P.trackHorizontalStyleDefault,N&&Se,(!f||V&&!Z)&&{display:"none"}),Ye=u({},P.trackVerticalStyleDefault,N&&Se,(!f||V&&!Z)&&{display:"none"});return(0,m.createElement)(G,u({},ne,{style:ue,ref:function(J){i.container=J}}),[(0,m.cloneElement)(w({style:ve}),{key:"view",ref:function(J){i.view=J}},re),(0,m.cloneElement)(r({style:Xe}),{key:"trackHorizontal",ref:function(J){i.trackHorizontal=J}},(0,m.cloneElement)(L({style:P.thumbHorizontalStyleDefault}),{ref:function(J){i.thumbHorizontal=J}})),(0,m.cloneElement)(k({style:Ye}),{key:"trackVertical",ref:function(J){i.trackVertical=J}},(0,m.cloneElement)(x({style:P.thumbVerticalStyleDefault}),{ref:function(J){i.thumbVertical=J}}))])}}]),y}(m.Component);n.default=ce,ce.propTypes={onScroll:g.default.func,onScrollFrame:g.default.func,onScrollStart:g.default.func,onScrollStop:g.default.func,onUpdate:g.default.func,renderView:g.default.func,renderTrackHorizontal:g.default.func,renderTrackVertical:g.default.func,renderThumbHorizontal:g.default.func,renderThumbVertical:g.default.func,tagName:g.default.string,thumbSize:g.default.number,thumbMinSize:g.default.number,hideTracksWhenNotNeeded:g.default.bool,autoHide:g.default.bool,autoHideTimeout:g.default.number,autoHideDuration:g.default.number,autoHeight:g.default.bool,autoHeightMin:g.default.oneOfType([g.default.number,g.default.string]),autoHeightMax:g.default.oneOfType([g.default.number,g.default.string]),universal:g.default.bool,style:g.default.object,children:g.default.node},ce.defaultProps={renderView:K.renderViewDefault,renderTrackHorizontal:K.renderTrackHorizontalDefault,renderTrackVertical:K.renderTrackVerticalDefault,renderThumbHorizontal:K.renderThumbHorizontalDefault,renderThumbVertical:K.renderThumbVerticalDefault,tagName:"div",thumbMinSize:30,hideTracksWhenNotNeeded:!1,autoHide:!1,autoHideTimeout:1e3,autoHideDuration:200,autoHeight:!1,autoHeightMin:0,autoHeightMax:200,universal:!1}}(at)),at}var lr;function Fn(){return lr||(lr=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.Scrollbars=void 0;var u=In(),c=l(u);function l(o){return o&&o.__esModule?o:{default:o}}n.default=c.default,n.Scrollbars=c.default}(it)),it}var Jn=Fn(),qn={ariaLabel:"Vennligst vent"},Nn={ariaLabel:"Ver vennleg og vent"},Bn={ariaLabel:"Please wait"};const jn={nb:qn,nn:Nn,en:Bn};var St=function(){return St=Object.assign||function(n){for(var u,c=1,l=arguments.length;c<l;c++){u=arguments[c];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(n[o]=u[o])}return n},St.apply(this,arguments)},Un=function(n,u){var c={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&u.indexOf(l)<0&&(c[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(n);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(n,l[o])&&(c[l[o]]=n[l[o]]);return c},Gn=function(n){var u=n.className,c=n.immediate,l=c===void 0?!1:c,o=n.large,T=o===void 0?!1:o,p=n.loadingText,m=n.locale,b=m===void 0?"nb":m,g=n.onColoredBg,v=Un(n,["className","immediate","large","loadingText","locale","onColoredBg"]);return Tt.createElement("div",St({"aria-live":"assertive",className:u},v,{"data-testid":"spinner-container"}),Tt.createElement("span",{className:cr("ffe-loading-spinner",{"ffe-loading-spinner--on-colored-bg":g},{"ffe-loading-spinner--immediate":l},{"ffe-loading-spinner--large":T}),role:"img","aria-label":jn[b].ariaLabel,"aria-hidden":!!p}),p)};Gn.__docgenInfo={description:"",methods:[],displayName:"Spinner"};var Ve={exports:{}};Ve.exports;var ur;function $n(){return ur||(ur=1,function(n,u){var c=200,l="__lodash_hash_undefined__",o=1,T=2,p=9007199254740991,m="[object Arguments]",b="[object Array]",g="[object AsyncFunction]",v="[object Boolean]",S="[object Date]",M="[object Error]",O="[object Function]",R="[object GeneratorFunction]",F="[object Map]",ee="[object Number]",oe="[object Null]",X="[object Object]",te="[object Promise]",P="[object Proxy]",K="[object RegExp]",q="[object Set]",he="[object String]",ge="[object Symbol]",Le="[object Undefined]",pe="[object WeakMap]",ce="[object ArrayBuffer]",D="[object DataView]",y="[object Float32Array]",d="[object Float64Array]",i="[object Int8Array]",f="[object Int16Array]",s="[object Int32Array]",w="[object Uint8Array]",r="[object Uint8ClampedArray]",k="[object Uint16Array]",L="[object Uint32Array]",x=/[\\^$.*+?()[\]{}|]/g,G=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,H={};H[y]=H[d]=H[i]=H[f]=H[s]=H[w]=H[r]=H[k]=H[L]=!0,H[m]=H[b]=H[ce]=H[v]=H[D]=H[S]=H[M]=H[O]=H[F]=H[ee]=H[X]=H[K]=H[q]=H[he]=H[pe]=!1;var V=typeof Pe=="object"&&Pe&&Pe.Object===Object&&Pe,B=typeof self=="object"&&self&&self.Object===Object&&self,W=V||B||Function("return this")(),A=u&&!u.nodeType&&u,$=A&&!0&&n&&!n.nodeType&&n,re=$&&$.exports===A,ne=re&&V.process,Z=function(){try{return ne&&ne.binding&&ne.binding("util")}catch{}}(),ue=Z&&Z.isTypedArray;function ve(e,t){for(var a=-1,h=e==null?0:e.length,E=0,_=[];++a<h;){var C=e[a];t(C,a,e)&&(_[E++]=C)}return _}function Se(e,t){for(var a=-1,h=t.length,E=e.length;++a<h;)e[E+a]=t[a];return e}function Xe(e,t){for(var a=-1,h=e==null?0:e.length;++a<h;)if(t(e[a],a,e))return!0;return!1}function Ye(e,t){for(var a=-1,h=Array(e);++a<e;)h[a]=t(a);return h}function we(e){return function(t){return e(t)}}function J(e,t){return e.has(t)}function dr(e,t){return e==null?void 0:e[t]}function hr(e){var t=-1,a=Array(e.size);return e.forEach(function(h,E){a[++t]=[E,h]}),a}function gr(e,t){return function(a){return e(t(a))}}function pr(e){var t=-1,a=Array(e.size);return e.forEach(function(h){a[++t]=h}),a}var vr=Array.prototype,mr=Function.prototype,Ie=Object.prototype,Ke=W["__core-js_shared__"],wt=mr.toString,se=Ie.hasOwnProperty,_t=function(){var e=/[^.]+$/.exec(Ke&&Ke.keys&&Ke.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ht=Ie.toString,yr=RegExp("^"+wt.call(se).replace(x,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),kt=re?W.Buffer:void 0,Fe=W.Symbol,Dt=W.Uint8Array,Mt=Ie.propertyIsEnumerable,Tr=vr.splice,_e=Fe?Fe.toStringTag:void 0,Ot=Object.getOwnPropertySymbols,br=kt?kt.isBuffer:void 0,Sr=gr(Object.keys,Object),Ze=Ee(W,"DataView"),xe=Ee(W,"Map"),Je=Ee(W,"Promise"),Qe=Ee(W,"Set"),et=Ee(W,"WeakMap"),We=Ee(Object,"create"),wr=De(Ze),_r=De(xe),Hr=De(Je),kr=De(Qe),Dr=De(et),Lt=Fe?Fe.prototype:void 0,tt=Lt?Lt.valueOf:void 0;function He(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var h=e[t];this.set(h[0],h[1])}}function Mr(){this.__data__=We?We(null):{},this.size=0}function Or(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function Lr(e){var t=this.__data__;if(We){var a=t[e];return a===l?void 0:a}return se.call(t,e)?t[e]:void 0}function Er(e){var t=this.__data__;return We?t[e]!==void 0:se.call(t,e)}function xr(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=We&&t===void 0?l:t,this}He.prototype.clear=Mr,He.prototype.delete=Or,He.prototype.get=Lr,He.prototype.has=Er,He.prototype.set=xr;function fe(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var h=e[t];this.set(h[0],h[1])}}function Wr(){this.__data__=[],this.size=0}function zr(e){var t=this.__data__,a=Ne(t,e);if(a<0)return!1;var h=t.length-1;return a==h?t.pop():Tr.call(t,a,1),--this.size,!0}function Cr(e){var t=this.__data__,a=Ne(t,e);return a<0?void 0:t[a][1]}function Rr(e){return Ne(this.__data__,e)>-1}function Ar(e,t){var a=this.__data__,h=Ne(a,e);return h<0?(++this.size,a.push([e,t])):a[h][1]=t,this}fe.prototype.clear=Wr,fe.prototype.delete=zr,fe.prototype.get=Cr,fe.prototype.has=Rr,fe.prototype.set=Ar;function ke(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var h=e[t];this.set(h[0],h[1])}}function Pr(){this.size=0,this.__data__={hash:new He,map:new(xe||fe),string:new He}}function Vr(e){var t=Be(this,e).delete(e);return this.size-=t?1:0,t}function Ir(e){return Be(this,e).get(e)}function Fr(e){return Be(this,e).has(e)}function qr(e,t){var a=Be(this,e),h=a.size;return a.set(e,t),this.size+=a.size==h?0:1,this}ke.prototype.clear=Pr,ke.prototype.delete=Vr,ke.prototype.get=Ir,ke.prototype.has=Fr,ke.prototype.set=qr;function qe(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new ke;++t<a;)this.add(e[t])}function Nr(e){return this.__data__.set(e,l),this}function Br(e){return this.__data__.has(e)}qe.prototype.add=qe.prototype.push=Nr,qe.prototype.has=Br;function me(e){var t=this.__data__=new fe(e);this.size=t.size}function jr(){this.__data__=new fe,this.size=0}function Ur(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}function Gr(e){return this.__data__.get(e)}function $r(e){return this.__data__.has(e)}function Xr(e,t){var a=this.__data__;if(a instanceof fe){var h=a.__data__;if(!xe||h.length<c-1)return h.push([e,t]),this.size=++a.size,this;a=this.__data__=new ke(h)}return a.set(e,t),this.size=a.size,this}me.prototype.clear=jr,me.prototype.delete=Ur,me.prototype.get=Gr,me.prototype.has=$r,me.prototype.set=Xr;function Yr(e,t){var a=je(e),h=!a&&fn(e),E=!a&&!h&&rt(e),_=!a&&!h&&!E&&Vt(e),C=a||h||E||_,I=C?Ye(e.length,String):[],j=I.length;for(var z in e)se.call(e,z)&&!(C&&(z=="length"||E&&(z=="offset"||z=="parent")||_&&(z=="buffer"||z=="byteLength"||z=="byteOffset")||on(z,j)))&&I.push(z);return I}function Ne(e,t){for(var a=e.length;a--;)if(Ct(e[a][0],t))return a;return-1}function Kr(e,t,a){var h=t(e);return je(e)?h:Se(h,a(e))}function ze(e){return e==null?e===void 0?Le:oe:_e&&_e in Object(e)?nn(e):cn(e)}function Et(e){return Ce(e)&&ze(e)==m}function xt(e,t,a,h,E){return e===t?!0:e==null||t==null||!Ce(e)&&!Ce(t)?e!==e&&t!==t:Zr(e,t,a,h,xt,E)}function Zr(e,t,a,h,E,_){var C=je(e),I=je(t),j=C?b:ye(e),z=I?b:ye(t);j=j==m?X:j,z=z==m?X:z;var Q=j==X,le=z==X,U=j==z;if(U&&rt(e)){if(!rt(t))return!1;C=!0,Q=!1}if(U&&!Q)return _||(_=new me),C||Vt(e)?Wt(e,t,a,h,E,_):tn(e,t,j,a,h,E,_);if(!(a&o)){var ie=Q&&se.call(e,"__wrapped__"),ae=le&&se.call(t,"__wrapped__");if(ie||ae){var Te=ie?e.value():e,de=ae?t.value():t;return _||(_=new me),E(Te,de,a,h,_)}}return U?(_||(_=new me),rn(e,t,a,h,E,_)):!1}function Jr(e){if(!Pt(e)||un(e))return!1;var t=Rt(e)?yr:G;return t.test(De(e))}function Qr(e){return Ce(e)&&At(e.length)&&!!H[ze(e)]}function en(e){if(!sn(e))return Sr(e);var t=[];for(var a in Object(e))se.call(e,a)&&a!="constructor"&&t.push(a);return t}function Wt(e,t,a,h,E,_){var C=a&o,I=e.length,j=t.length;if(I!=j&&!(C&&j>I))return!1;var z=_.get(e);if(z&&_.get(t))return z==t;var Q=-1,le=!0,U=a&T?new qe:void 0;for(_.set(e,t),_.set(t,e);++Q<I;){var ie=e[Q],ae=t[Q];if(h)var Te=C?h(ae,ie,Q,t,e,_):h(ie,ae,Q,e,t,_);if(Te!==void 0){if(Te)continue;le=!1;break}if(U){if(!Xe(t,function(de,Me){if(!J(U,Me)&&(ie===de||E(ie,de,a,h,_)))return U.push(Me)})){le=!1;break}}else if(!(ie===ae||E(ie,ae,a,h,_))){le=!1;break}}return _.delete(e),_.delete(t),le}function tn(e,t,a,h,E,_,C){switch(a){case D:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ce:return!(e.byteLength!=t.byteLength||!_(new Dt(e),new Dt(t)));case v:case S:case ee:return Ct(+e,+t);case M:return e.name==t.name&&e.message==t.message;case K:case he:return e==t+"";case F:var I=hr;case q:var j=h&o;if(I||(I=pr),e.size!=t.size&&!j)return!1;var z=C.get(e);if(z)return z==t;h|=T,C.set(e,t);var Q=Wt(I(e),I(t),h,E,_,C);return C.delete(e),Q;case ge:if(tt)return tt.call(e)==tt.call(t)}return!1}function rn(e,t,a,h,E,_){var C=a&o,I=zt(e),j=I.length,z=zt(t),Q=z.length;if(j!=Q&&!C)return!1;for(var le=j;le--;){var U=I[le];if(!(C?U in t:se.call(t,U)))return!1}var ie=_.get(e);if(ie&&_.get(t))return ie==t;var ae=!0;_.set(e,t),_.set(t,e);for(var Te=C;++le<j;){U=I[le];var de=e[U],Me=t[U];if(h)var It=C?h(Me,de,U,t,e,_):h(de,Me,U,e,t,_);if(!(It===void 0?de===Me||E(de,Me,a,h,_):It)){ae=!1;break}Te||(Te=U=="constructor")}if(ae&&!Te){var Ue=e.constructor,Ge=t.constructor;Ue!=Ge&&"constructor"in e&&"constructor"in t&&!(typeof Ue=="function"&&Ue instanceof Ue&&typeof Ge=="function"&&Ge instanceof Ge)&&(ae=!1)}return _.delete(e),_.delete(t),ae}function zt(e){return Kr(e,gn,an)}function Be(e,t){var a=e.__data__;return ln(t)?a[typeof t=="string"?"string":"hash"]:a.map}function Ee(e,t){var a=dr(e,t);return Jr(a)?a:void 0}function nn(e){var t=se.call(e,_e),a=e[_e];try{e[_e]=void 0;var h=!0}catch{}var E=Ht.call(e);return h&&(t?e[_e]=a:delete e[_e]),E}var an=Ot?function(e){return e==null?[]:(e=Object(e),ve(Ot(e),function(t){return Mt.call(e,t)}))}:pn,ye=ze;(Ze&&ye(new Ze(new ArrayBuffer(1)))!=D||xe&&ye(new xe)!=F||Je&&ye(Je.resolve())!=te||Qe&&ye(new Qe)!=q||et&&ye(new et)!=pe)&&(ye=function(e){var t=ze(e),a=t==X?e.constructor:void 0,h=a?De(a):"";if(h)switch(h){case wr:return D;case _r:return F;case Hr:return te;case kr:return q;case Dr:return pe}return t});function on(e,t){return t=t??p,!!t&&(typeof e=="number"||N.test(e))&&e>-1&&e%1==0&&e<t}function ln(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function un(e){return!!_t&&_t in e}function sn(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||Ie;return e===a}function cn(e){return Ht.call(e)}function De(e){if(e!=null){try{return wt.call(e)}catch{}try{return e+""}catch{}}return""}function Ct(e,t){return e===t||e!==e&&t!==t}var fn=Et(function(){return arguments}())?Et:function(e){return Ce(e)&&se.call(e,"callee")&&!Mt.call(e,"callee")},je=Array.isArray;function dn(e){return e!=null&&At(e.length)&&!Rt(e)}var rt=br||vn;function hn(e,t){return xt(e,t)}function Rt(e){if(!Pt(e))return!1;var t=ze(e);return t==O||t==R||t==g||t==P}function At(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=p}function Pt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function Ce(e){return e!=null&&typeof e=="object"}var Vt=ue?we(ue):Qr;function gn(e){return dn(e)?Yr(e):en(e)}function pn(){return[]}function vn(){return!1}n.exports=hn}(Ve,Ve.exports)),Ve.exports}var Xn=$n();const Qn=mn(Xn);export{Tn as S,Gn as a,Qn as i,Jn as l,Zn as r};
