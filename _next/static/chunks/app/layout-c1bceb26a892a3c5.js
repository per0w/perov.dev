(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3730:function(e,t,n){Promise.resolve().then(n.t.bind(n,2972,23)),Promise.resolve().then(n.t.bind(n,8313,23)),Promise.resolve().then(n.t.bind(n,5044,23)),Promise.resolve().then(n.t.bind(n,6539,23)),Promise.resolve().then(n.bind(n,482)),Promise.resolve().then(n.t.bind(n,2778,23)),Promise.resolve().then(n.bind(n,9987)),Promise.resolve().then(n.bind(n,8209))},8461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},getImageProps:function(){return a}});let r=n(7043),i=n(5346),o=n(5878),s=r._(n(5084));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/blog/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let l=o.Image},6539:function(e,t,n){"use strict";var r=Object.create,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,a=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,c=(e,t)=>i(e,"name",{value:t,configurable:!0}),u=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))l.call(e,a)||a===n||i(e,a,{get:()=>t[a],enumerable:!(r=o(t,a))||r.enumerable});return e},d=(e,t,n)=>(n=null!=e?r(a(e)):{},u(!t&&e&&e.__esModule?n:i(n,"default",{value:e,enumerable:!0}),e)),h={};((e,t)=>{for(var n in t)i(e,n,{get:t[n],enumerable:!0})})(h,{default:()=>b}),e.exports=u(i({},"__esModule",{value:!0}),h);var f=d(n(718)),m=d(n(2265)),g=d(n(1318)),p=c(e=>{let{color:t,height:n,showSpinner:r,crawl:i,crawlSpeed:o,initialPosition:s,easing:a,speed:l,shadow:u,template:d,zIndex:h=1600,showAtBottom:f=!1,showForHashAnchor:p=!0}=e,b=null!=t?t:"#29d",v=u||void 0===u?u?"box-shadow:".concat(u):"box-shadow:0 0 10px ".concat(b,",0 0 5px ").concat(b):"",w=m.createElement("style",null,"#nprogress{pointer-events:none}#nprogress .bar{background:".concat(b,";position:fixed;z-index:").concat(h,";").concat(f?"bottom: 0;":"top: 0;","left:0;width:100%;height:").concat(null!=n?n:3,"px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;").concat(v,";opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:").concat(h,";").concat(f?"bottom: 15px;":"top: 15px;","right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:").concat(b,";border-left-color:").concat(b,";border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")),y=c(e=>new URL(e,window.location.href).href,"toAbsoluteURL"),x=c((e,t)=>{let n=new URL(y(e)),r=new URL(y(t));return n.href.split("#")[0]===r.href.split("#")[0]},"isHashAnchor"),k=c((e,t)=>{let n=new URL(y(e)),r=new URL(y(t));return n.hostname.replace(/^www\./,"")===r.hostname.replace(/^www\./,"")},"isSameHostName");return m.useEffect(()=>{let e,t;function n(e,t){let n=new URL(e),r=new URL(t);if(n.hostname===r.hostname&&n.pathname===r.pathname&&n.search===r.search){let e=n.hash,t=r.hash;return e!==t&&n.href.replace(e,"")===r.href.replace(t,"")}return!1}g.configure({showSpinner:null==r||r,trickle:null==i||i,trickleSpeed:null!=o?o:200,minimum:null!=s?s:.08,easing:null!=a?a:"ease",speed:null!=l?l:200,template:null!=d?d:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'}),c(n,"isAnchorOfCurrentUrl");var u,h,f=document.querySelectorAll("html");let m=c(()=>f.forEach(e=>e.classList.remove("nprogress-busy")),"removeNProgressClass");function b(e){for(;e&&"a"!==e.tagName.toLowerCase();)e=e.parentElement;return e}function v(e){try{let t=e.target,r=b(t),i=null==r?void 0:r.href;if(i){let t=window.location.href,o="_blank"===r.target,s=["tel:","mailto:","sms:","blob:","download:"].some(e=>i.startsWith(e));if(!k(window.location.href,r.href))return;let a=n(t,i)||x(window.location.href,r.href);if(!p&&a)return;i===t||o||s||a||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||!y(r.href).startsWith("http")?(g.start(),g.done(),m()):g.start()}}catch(e){g.start(),g.done()}}function w(){g.done(),m()}function _(){g.done()}return c(b,"findClosestAnchor"),c(v,"handleClick"),e=(u=window.history).pushState,u.pushState=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return g.done(),m(),e.apply(u,n)},t=(h=window.history).replaceState,h.replaceState=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return g.done(),m(),t.apply(h,n)},c(w,"handlePageHide"),c(_,"handleBackAndForth"),window.addEventListener("popstate",_),document.addEventListener("click",v),window.addEventListener("pagehide",w),()=>{document.removeEventListener("click",v),window.removeEventListener("pagehide",w),window.removeEventListener("popstate",_)}},[]),w},"NextTopLoader"),b=p;p.propTypes={color:f.string,height:f.number,showSpinner:f.bool,crawl:f.bool,crawlSpeed:f.number,initialPosition:f.number,easing:f.string,speed:f.number,template:f.string,shadow:f.oneOfType([f.string,f.bool]),zIndex:f.number,showAtBottom:f.bool}},1318:function(e,t,n){var r,i;void 0!==(i="function"==typeof(r=function(){var e,t,n,r={};r.version="0.2.0";var i=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function o(e,t,n){return e<t?t:e>n?n:e}r.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(i[t]=n);return this},r.status=null,r.set=function(e){var t=r.isStarted();e=o(e,i.minimum,1),r.status=1===e?null:e;var n=r.render(!t),l=n.querySelector(i.barSelector),c=i.speed,u=i.easing;return n.offsetWidth,s(function(t){var o,s;""===i.positionUsing&&(i.positionUsing=r.getPositioningCSS()),a(l,(o=e,(s="translate3d"===i.positionUsing?{transform:"translate3d("+(-1+o)*100+"%,0,0)"}:"translate"===i.positionUsing?{transform:"translate("+(-1+o)*100+"%,0)"}:{"margin-left":(-1+o)*100+"%"}).transition="all "+c+"ms "+u,s)),1===e?(a(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){a(n,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){r.remove(),t()},c)},c)):setTimeout(t,c)}),this},r.isStarted=function(){return"number"==typeof r.status},r.start=function(){r.status||r.set(0);var e=function(){setTimeout(function(){r.status&&(r.trickle(),e())},i.trickleSpeed)};return i.trickle&&e(),this},r.done=function(e){return e||r.status?r.inc(.3+.5*Math.random()).set(1):this},r.inc=function(e){var t=r.status;return t?("number"!=typeof e&&(e=(1-t)*o(Math.random()*t,.1,.95)),t=o(t+e,0,.994),r.set(t)):r.start()},r.trickle=function(){return r.inc(Math.random()*i.trickleRate)},e=0,t=0,r.promise=function(n){return n&&"resolved"!==n.state()&&(0===t&&r.start(),e++,t++,n.always(function(){0==--t?(e=0,r.done()):r.set((e-t)/e)})),this},r.render=function(e){if(r.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=i.template;var n,o=t.querySelector(i.barSelector),s=e?"-100":(-1+(r.status||0))*100,l=document.querySelector(i.parent);return a(o,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),!i.showSpinner&&(n=t.querySelector(i.spinnerSelector))&&h(n),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(t),t},r.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(i.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&h(e)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective" in e?"translate3d":t+"Transform" in e?"translate":"margin"};var s=(n=[],function(e){n.push(e),1==n.length&&function e(){var t=n.shift();t&&t(e)}()}),a=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n,r,i){var o;r=t[o=(o=r).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[o]=function(t){var n=document.body.style;if(t in n)return t;for(var r,i=e.length,o=t.charAt(0).toUpperCase()+t.slice(1);i--;)if((r=e[i]+o)in n)return r;return t}(o)),n.style[r]=i}return function(e,t){var r,i,o=arguments;if(2==o.length)for(r in t)void 0!==(i=t[r])&&t.hasOwnProperty(r)&&n(e,r,i);else n(e,o[1],o[2])}}();function l(e,t){return("string"==typeof e?e:d(e)).indexOf(" "+t+" ")>=0}function c(e,t){var n=d(e),r=n+t;l(n,t)||(e.className=r.substring(1))}function u(e,t){var n,r=d(e);l(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function d(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function h(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return r})?r.call(t,n,t,e):r)&&(e.exports=i)},8049:function(e,t,n){"use strict";var r=n(4397);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,s){if(s!==r){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},718:function(e,t,n){e.exports=n(8049)()},4397:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9987:function(e,t,n){"use strict";n.d(t,{Providers:function(){return o}});var r=n(7437),i=n(5922);function o(e){let{children:t}=e;return(0,r.jsx)(i.f,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:t})}},8209:function(e,t,n){"use strict";n.d(t,{default:function(){return l}});var r=n(7437),i=n(2265),o=n(5922);function s(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z",strokeWidth:"0",fill:"currentColor"})]})}function a(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z",strokeWidth:"0"}),(0,r.jsx)("path",{d:"M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1  0 1 1.218 -1.567l.102 .07z",strokeWidth:"0"}),(0,r.jsx)("path",{d:"M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z",strokeWidth:"0"}),(0,r.jsx)("path",{d:"M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z",strokeWidth:"0"}),(0,r.jsx)("path",{d:"M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z",strokeWidth:"0"}),(0,r.jsx)("path",{d:"M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z",strokeWidth:"0"}),(0,r.jsx)("path",{d:"M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z",strokeWidth:"0"}),(0,r.jsx)("path",{d:"M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z",strokeWidth:"0"}),(0,r.jsx)("path",{d:"M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z",strokeWidth:"0"})]})}function l(){let[e,t]=(0,i.useState)(!1),{setTheme:n,resolvedTheme:l}=(0,o.F)();return((0,i.useEffect)(()=>{t(!0)},[]),e)?(0,r.jsx)("div",{className:"cursor-pointer theme ".concat("light"===l?"light-theme":"dark-theme"),children:"light"===l?(0,r.jsx)(s,{onClick:()=>n("dark")}):(0,r.jsx)(a,{onClick:()=>n("light")})}):null}n(8461),n(6083),n(6746),n(3874),n(2966),n(816),n(6427),n(8746),n(9497),n(9068),n(5493),n(5534),n(1533),n(734),n(550),n(9598),n(8659),n(1398),n(705),n(8804),n(2133),n(9894),n(4035),n(6191),n(5491)},2778:function(){},482:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/favicon.603d046c.ico",height:16,width:16,blurWidth:0,blurHeight:0}},6083:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Ansible.9a5dfeb8.svg",height:128,width:128,blurWidth:0,blurHeight:0}},6746:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Astro.1f2f08f1.svg",height:128,width:128,blurWidth:0,blurHeight:0}},3874:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Babel.914c1630.svg",height:128,width:128,blurWidth:0,blurHeight:0}},2966:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Bash.2fb40576.svg",height:128,width:128,blurWidth:0,blurHeight:0}},816:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/CSS3.fe70a3d1.svg",height:128,width:128,blurWidth:0,blurHeight:0}},6427:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Deno.4407ca74.svg",height:128,width:128,blurWidth:0,blurHeight:0}},8746:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Docker.84c50bc9.svg",height:128,width:128,blurWidth:0,blurHeight:0}},9497:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Gulp.ded67adf.svg",height:128,width:128,blurWidth:0,blurHeight:0}},9068:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/HTML5.a2198806.svg",height:128,width:128,blurWidth:0,blurHeight:0}},5493:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/JavaScript.d68f4594.svg",height:128,width:128,blurWidth:0,blurHeight:0}},5534:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Kubernetes.eb23e2ae.svg",height:128,width:128,blurWidth:0,blurHeight:0}},1533:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Linux.6dd6ca83.svg",height:128,width:128,blurWidth:0,blurHeight:0}},734:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/MaterialUI.4aa3f12b.svg",height:128,width:128,blurWidth:0,blurHeight:0}},9598:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/NGINX.4f601737.svg",height:128,width:128,blurWidth:0,blurHeight:0}},550:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Nextjs.120e2b10.svg",height:128,width:128,blurWidth:0,blurHeight:0}},8659:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Nodejs.a47945b0.svg",height:128,width:128,blurWidth:0,blurHeight:0}},1398:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/ReactJS.4f7e5458.svg",height:128,width:128,blurWidth:0,blurHeight:0}},705:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Redux.3c411e0e.svg",height:128,width:128,blurWidth:0,blurHeight:0}},8804:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Sass.41589329.svg",height:128,width:128,blurWidth:0,blurHeight:0}},2133:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Svelte.fe664151.svg",height:128,width:128,blurWidth:0,blurHeight:0}},9894:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Tailwind.3b5c3dba.svg",height:128,width:128,blurWidth:0,blurHeight:0}},4035:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/TypeScript.1916ba8e.svg",height:128,width:128,blurWidth:0,blurHeight:0}},6191:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Vite.25491fb8.svg",height:128,width:128,blurWidth:0,blurHeight:0}},5491:function(e,t,n){"use strict";n.r(t),t.default={src:"/blog//_next/static/media/Webpack.82196129.svg",height:128,width:128,blurWidth:0,blurHeight:0}},5044:function(e){e.exports={style:{fontFamily:"'__GeistMono_c3300c', ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace"},className:"__className_c3300c",variable:"__variable_c3300c"}},8313:function(e){e.exports={style:{fontFamily:"'__GeistSans_b46d4d', '__GeistSans_Fallback_b46d4d'"},className:"__className_b46d4d",variable:"__variable_b46d4d"}},5922:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return u}});var r=n(2265),i=["light","dark"],o="(prefers-color-scheme: dark)",s="undefined"==typeof window,a=r.createContext(void 0),l={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=r.useContext(a))?e:l},u=e=>r.useContext(a)?e.children:r.createElement(h,{...e}),d=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:s=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:u=d,defaultTheme:h=s?"system":"light",attribute:b="data-theme",value:v,children:w,nonce:y}=e,[x,k]=r.useState(()=>m(c,h)),[_,S]=r.useState(()=>m(c)),W=v?Object.values(v):u,T=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=p());let r=v?v[t]:t,o=n?g():null,a=document.documentElement;if("class"===b?(a.classList.remove(...W),r&&a.classList.add(r)):r?a.setAttribute(b,r):a.removeAttribute(b),l){let e=i.includes(h)?h:null,n=i.includes(t)?t:e;a.style.colorScheme=n}null==o||o()},[]),C=r.useCallback(e=>{let t="function"==typeof e?e(e):e;k(t);try{localStorage.setItem(c,t)}catch(e){}},[t]),E=r.useCallback(e=>{S(p(e)),"system"===x&&s&&!t&&T("system")},[x,t]);r.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),r.useEffect(()=>{let e=e=>{e.key===c&&C(e.newValue||h)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),r.useEffect(()=>{T(null!=t?t:x)},[t,x]);let j=r.useMemo(()=>({theme:x,setTheme:C,forcedTheme:t,resolvedTheme:"system"===x?_:x,themes:s?[...u,"system"]:u,systemTheme:s?_:void 0}),[x,C,t,_,s,u]);return r.createElement(a.Provider,{value:j},r.createElement(f,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:s,enableColorScheme:l,storageKey:c,themes:u,defaultTheme:h,attribute:b,value:v,children:w,attrs:W,nonce:y}),w)},f=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:s,enableSystem:a,enableColorScheme:l,defaultTheme:c,value:u,attrs:d,nonce:h}=e,f="system"===c,m="class"===s?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(s,"',s='setAttribute';"),g=l?(i.includes(c)?c:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=u?u[e]:e,o=t?e+"|| ''":"'".concat(r,"'"),a="";return l&&n&&!t&&i.includes(e)&&(a+="d.style.colorScheme = '".concat(e,"';")),"class"===s?t||r?a+="c.add(".concat(o,")"):a+="null":r&&(a+="d[s](n,".concat(o,")")),a},b=t?"!function(){".concat(m).concat(p(t),"}()"):a?"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(f,")){var t='").concat(o,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(p("dark"),"}else{").concat(p("light"),"}}else if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(p(u?"x[e]":"e",!0),"}").concat(f?"":"else{"+p(c,!1,!1)+"}").concat(g,"}catch(e){}}()"):"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(p(u?"x[e]":"e",!0),"}else{").concat(p(c,!1,!1),";}").concat(g,"}catch(t){}}();");return r.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:b}})}),m=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},function(e){e.O(0,[621,972,878,971,117,744],function(){return e(e.s=3730)}),_N_E=e.O()}]);