(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{8228:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return r(6023)}])},239:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893),a=r(7294);function i(){let[e,t]=(0,a.useState)(!1);return(0,n.jsxs)("nav",{className:"flex items-center justify-between flex-wrap bg-slate-900 p-6",children:[(0,n.jsx)("div",{className:"flex items-center flex-shrink-0 text-white mr-6",children:(0,n.jsx)("span",{className:"font-semibold text-xl tracking-tight cursor-default",children:"RCHRD CRNGL"})}),(0,n.jsx)("div",{className:"block lg:hidden",children:(0,n.jsx)("button",{onClick:()=>t(e=>!e),className:"flex items-center px-3 py-2 border rounded text-slate-200 border-slate-900 hover:text-white hover:border-white",children:(0,n.jsxs)("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("title",{children:"Menu"}),(0,n.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),(0,n.jsx)("div",{className:"w-full hidden flex-grow lg:flex lg:items-center lg:w-auto",style:{display:e?"block":"hidden"},children:(0,n.jsxs)("div",{className:"text-sm lg:flex-grow",children:[(0,n.jsx)("a",{href:"/portfolio",className:"block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4",children:"Home"}),(0,n.jsx)("a",{href:"/#projects",className:"block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4",children:"Projects"})]})})]})}},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,a=r(2648).Z,i=r(1598).Z,s=r(7273).Z,l=i(r(7294)),o=a(r(3121)),c=r(2675),u=r(139),d=r(8730);r(7238);var f=a(r(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,a,i,s,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&s(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,o=!1;a.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{l=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let x=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:a,widthInt:i,qualityInt:o,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:h,placeholder:g,loading:m,srcString:x,config:v,unoptimized:b,loader:w,onLoadRef:y,onLoadingCompleteRef:j,setBlurComplete:k,setShowAltText:N,onLoad:_,onError:C}=e,E=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},E,r,{width:i,height:a,decoding:"async","data-nimg":h?"fill":"1",className:c,loading:m,style:n({},u,d),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&p(e,x,g,y,j,k,b))},[x,g,y,j,k,C,b,t]),onLoad:e=>{let t=e.currentTarget;p(t,x,g,y,j,k,b)},onError:e=>{N(!0),"blur"===g&&k(!0),C&&C(e)}})))}),v=l.forwardRef((e,t)=>{let r,a;var i,{src:p,sizes:v,unoptimized:b=!1,priority:w=!1,loading:y,className:j,quality:k,width:N,height:_,fill:C,style:E,onLoad:S,onLoadingComplete:R,placeholder:M="empty",blurDataURL:z,layout:I,objectFit:A,objectPosition:P,lazyBoundary:O,lazyRoot:F}=e,L=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=l.useContext(d.ImageConfigContext),B=l.useMemo(()=>{let e=h||T||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[T]),D=L,G=D.loader||f.default;delete D.loader;let H="__next_img_default"in G;if(H){if("custom"===B.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let V=G;G=e=>{let{config:t}=e,r=s(e,["config"]);return V(r)}}if(I){"fill"===I&&(C=!0);let W={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];W&&(E=n({},E,W));let Z={responsive:"100vw",fill:"100vw"}[I];Z&&!v&&(v=Z)}let U="",$=m(N),q=m(_);if("object"==typeof(i=p)&&(g(i)||void 0!==i.src)){let X=g(p)?p.default:p;if(!X.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(!X.height||!X.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)));if(r=X.blurWidth,a=X.blurHeight,z=z||X.blurDataURL,U=X.src,!C){if($||q){if($&&!q){let J=$/X.width;q=Math.round(X.height*J)}else if(!$&&q){let K=q/X.height;$=Math.round(X.width*K)}}else $=X.width,q=X.height}}let Q=!w&&("lazy"===y||void 0===y);((p="string"==typeof p?p:U).startsWith("data:")||p.startsWith("blob:"))&&(b=!0,Q=!1),B.unoptimized&&(b=!0),H&&p.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(b=!0);let[Y,ee]=l.useState(!1),[et,er]=l.useState(!1),en=m(k),ea=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:P}:{},et?{}:{color:"transparent"},E),ei="blur"===M&&z&&!Y?{backgroundSize:ea.objectFit||"cover",backgroundPosition:ea.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:$,heightInt:q,blurWidth:r,blurHeight:a,blurDataURL:z}),'")')}:{},es=function(e){let{config:t,src:r,unoptimized:n,width:a,quality:i,sizes:s,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:a}=e;if(r){let i=/(^|\s)(1?\d?\d)vw/g,s=[];for(let l;l=i.exec(r);l)s.push(parseInt(l[2]));if(s.length){let o=.01*Math.min(...s);return{widths:a.filter(e=>e>=n[0]*o),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:c,kind:"x"}}(t,a,s),u=o.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:o.map((e,n)=>"".concat(l({config:t,src:r,quality:i,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:r,quality:i,width:o[u]})}}({config:B,src:p,unoptimized:b,width:$,quality:en,sizes:v,loader:G}),el=p,eo={imageSrcSet:es.srcSet,imageSizes:es.sizes,crossOrigin:D.crossOrigin},ec=l.useRef(S);l.useEffect(()=>{ec.current=S},[S]);let eu=l.useRef(R);l.useEffect(()=>{eu.current=R},[R]);let ed=n({isLazy:Q,imgAttributes:es,heightInt:q,widthInt:$,qualityInt:en,className:j,imgStyle:ea,blurStyle:ei,loading:y,config:B,fill:C,unoptimized:b,placeholder:M,loader:G,srcString:el,onLoadRef:ec,onLoadingCompleteRef:eu,setBlurComplete:ee,setShowAltText:er},D);return l.default.createElement(l.default.Fragment,null,l.default.createElement(x,Object.assign({},ed,{ref:t})),w?l.default.createElement(o.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+es.src+es.srcSet+es.sizes,rel:"preload",as:"image",href:es.srcSet?void 0:es.src},eo))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:a,blurDataURL:i}=e,s=n||t,l=a||r,o=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&a?"1":"20","'/%3E").concat(o,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},6023:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return f},default:function(){return h}});var n=r(5893),a=r(9008),i=r.n(a);r(5675);var s=r(1664),l=r.n(s),o=r(2023),c=r.n(o),u=r(239),d=r(7294),f=!0;function h(e){let{projectData:t}=e,[r,a]=(0,d.useState)(0);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsxs)("title",{children:[t.title," - Richard Maru Caringal"]}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,n.jsx)(u.Z,{}),(0,n.jsxs)("main",{className:"bg-white dark:bg-gray-900 dark:text-white",children:[(0,n.jsx)("section",{className:"px-10 md:px-20 lg:px-40 min-h-full bg-gradient-to-r dark:from-cyan-900 dark:to-purple-900 from-cyan-200 to-purple-200",children:(0,n.jsxs)("div",{className:"text-center p-10 py-10",children:[(0,n.jsx)("h2",{className:"text-5xl py-2 text-teal-600 dark:text-teal-300 md:text-6xl",children:t.title}),(0,n.jsx)("p",{className:"text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl",children:t.description}),(0,n.jsxs)("div",{className:"flex flex-col md:flex-row md:justify-evenly py-5",children:[t.source_code&&""!=t.source_code?(0,n.jsx)(g,{url:t.source_code,label:"Go to GitHub Repository"}):(0,n.jsx)(n.Fragment,{}),t.latest_output&&""!=t.latest_output?(0,n.jsx)(g,{url:t.latest_output,label:t.latest_output.includes("github")?"Download latest build":"View latest output"}):(0,n.jsx)(n.Fragment,{})]})]})}),(0,n.jsxs)("section",{className:"px-10 py-10 md:px-20 lg:px-40 min-h-screen",children:[(0,n.jsx)("h3",{className:"text-3xl py-1 dark:text-white mb-3",children:"Project Preview"}),(0,n.jsx)("div",{className:"flex flex-col md:grid md:grid-cols-2 md:gap-5 justify-evenly items-center",children:t.images.map(e=>(0,n.jsxs)("div",{className:"md:basis-1/2 mb-3",children:[(0,n.jsx)("img",{src:e.url,alt:e.description,className:"rounded-md"}),(0,n.jsx)("div",{className:"text-md md:text-lg",children:e.description})]}))})]}),(0,n.jsx)("section",{className:"px-10 py-10 md:px-20 lg:px-40 bg-purple-600",children:(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsxs)("div",{className:"text-center items-center",children:[(0,n.jsx)("h2",{className:"text-5xl py-2 text-teal-300 font-medium md:text-5xl mb-2",children:"Technologies Used"}),t.technology.map(e=>(0,n.jsx)("div",{className:"inline-block mx-3 my-2 px-2 py-1 rounded-md font-bold text-slate-100 cursor-pointer",style:{backgroundColor:c()({luminosity:"dark"})},children:e},e))]})})})]})]})}function g(e){let{label:t,url:r}=e;return(0,n.jsx)(l(),{href:r,className:"border border-black dark:border-white px-5 py-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300",children:t})}String.prototype.toProperCase=function(){return this.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()})}},5675:function(e,t,r){r(9749)},2023:function(e,t,r){var n;e=r.nmd(e),n=function(){var e=null,t={};s("monochrome",null,[[0,0],[100,0]]),s("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),s("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),s("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),s("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),s("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),s("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),s("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var r=[],n=function(s){if(void 0!==(s=s||{}).seed&&null!==s.seed&&s.seed===parseInt(s.seed,10))e=s.seed;else if("string"==typeof s.seed)e=function(e){for(var t=0,r=0;r!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);r++)t+=e.charCodeAt(r);return t}(s.seed);else if(void 0!==s.seed&&null!==s.seed)throw TypeError("The seed value must be an integer or string");else e=null;if(null!==s.count&&void 0!==s.count){for(var u,d,f,h=s.count,g=[],m=0;m<s.count;m++)r.push(!1);for(s.count=null;h>g.length;){var p=n(s);null!==e&&(s.seed=e),g.push(p)}return s.count=h,g}return d=function(e,t){if("monochrome"===t.hue)return 0;if("random"===t.luminosity)return i([0,100]);var r=a(e).saturationRange,n=r[0],s=r[1];switch(t.luminosity){case"bright":n=55;break;case"dark":n=s-10;break;case"light":s=55}return i([n,s])}(u=function(e){if(r.length>0){var n=function(e){if(isNaN(e)){if("string"==typeof e){if(t[e]){var r=t[e];if(r.hueRange)return r.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i))return a(o(e)[0]).hueRange}}else{var n=parseInt(e);if(n<360&&n>0)return a(e).hueRange}return[0,360]}(e.hue),s=i(n),l=(n[1]-n[0])/r.length,c=parseInt((s-n[0])/l);!0===r[c]?c=(c+2)%r.length:r[c]=!0;var u=(n[0]+c*l)%359,d=(n[0]+(c+1)*l)%359;return(s=i(n=[u,d]))<0&&(s=360+s),s}var n=function(e){if("number"==typeof parseInt(e)){var r=parseInt(e);if(r<360&&r>0)return[r,r]}if("string"==typeof e){if(t[e]){var n=t[e];if(n.hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var a=o(e)[0];return[a,a]}}return[0,360]}(e.hue);return(s=i(n))<0&&(s=360+s),s}(s),s),f=function(e,t,r){var n=function(e,t){for(var r=a(e).lowerBounds,n=0;n<r.length-1;n++){var i=r[n][0],s=r[n][1],l=r[n+1][0],o=r[n+1][1];if(t>=i&&t<=l){var c=(o-s)/(l-i),u=s-c*i;return c*t+u}}return 0}(e,t),s=100;switch(r.luminosity){case"dark":s=n+20;break;case"light":n=(s+n)/2;break;case"random":n=0,s=100}return i([n,s])}(u,d,s),function(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return c(e);case"hsl":var r=c(e);return"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)";case"hsla":var n=c(e),a=t.alpha||Math.random();return"hsla("+n[0]+", "+n[1]+"%, "+n[2]+"%, "+a+")";case"rgbArray":return l(e);case"rgb":return"rgb("+l(e).join(", ")+")";case"rgba":var i=l(e),a=t.alpha||Math.random();return"rgba("+i.join(", ")+", "+a+")";default:return function(e){var t=l(e);function r(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return"#"+r(t[0])+r(t[1])+r(t[2])}(e)}}([u,d,f],s)};function a(e){for(var r in e>=334&&e<=360&&(e-=360),t){var n=t[r];if(n.hueRange&&e>=n.hueRange[0]&&e<=n.hueRange[1])return t[r]}return"Color not found"}function i(t){if(null===e){var r=Math.random();return r+=.618033988749895,r%=1,Math.floor(t[0]+r*(t[1]+1-t[0]))}var n=t[1]||1,a=t[0]||0;return Math.floor(a+(e=(9301*e+49297)%233280)/233280*(n-a))}function s(e,r,n){var a=n[0][0],i=n[n.length-1][0],s=n[n.length-1][1],l=n[0][1];t[e]={hueRange:r,lowerBounds:n,saturationRange:[a,i],brightnessRange:[s,l]}}function l(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var r=e[1]/100,n=e[2]/100,a=Math.floor(6*t),i=6*t-a,s=n*(1-r),l=n*(1-i*r),o=n*(1-(1-i)*r),c=256,u=256,d=256;switch(a){case 0:c=n,u=o,d=s;break;case 1:c=l,u=n,d=s;break;case 2:c=s,u=n,d=o;break;case 3:c=s,u=l,d=n;break;case 4:c=o,u=s,d=n;break;case 5:c=n,u=s,d=l}return[Math.floor(255*c),Math.floor(255*u),Math.floor(255*d)]}function o(e){var t=parseInt((e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e).substr(0,2),16)/255,r=parseInt(e.substr(2,2),16)/255,n=parseInt(e.substr(4,2),16)/255,a=Math.max(t,r,n),i=a-Math.min(t,r,n),s=a?i/a:0;switch(a){case t:return[60*((r-n)/i%6)||0,s,a];case r:return[60*((n-t)/i+2)||0,s,a];case n:return[60*((t-r)/i+4)||0,s,a]}}function c(e){var t=e[0],r=e[1]/100,n=e[2]/100,a=(2-r)*n;return[t,Math.round(r*n/(a<1?a:2-a)*1e4)/100,a/2*100]}return n}(),e&&e.exports&&(t=e.exports=n),t.randomColor=n}},function(e){e.O(0,[996,774,888,179],function(){return e(e.s=8228)}),_N_E=e.O()}]);