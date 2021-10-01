/*! For license information please see script.js.LICENSE.txt */
(()=>{var e={590:(e,t,n)=>{const{LitElement:r,html:i,css:o}=n(476),{SwipeEventListener:s}=n(195),{createSinglePaneSwitcher:a}=n(40),l=n(30).Z;customElements.define("switcher-layout",class extends r{static get properties(){return{currentPageIndex:{type:Number},pageTotal:{type:Number}}}constructor(){super(),this.currentPageIndex=0,this.pageTotal=0}firstUpdated(){const e=Array.from(this.children);window.addEventListener("keydown",(e=>this.mainKeypress(e)));const t=this,{swipeArea:n}=s({swipeArea:t});n.addEventListener("swipeDown",(()=>{t.pageSwitcher.backwards()})),n.addEventListener("swipeUp",(()=>{t.pageSwitcher.next()})),t.addEventListener("wheel",(e=>{e.preventDefault(),!this.hit&&Math.abs(e.deltaY)>60&&(this.hit=!0,e.deltaY>0?this.pageSwitcher.next():this.pageSwitcher.backwards(),setTimeout((()=>{this.hit=!1}),300))})),t.pageTotal=e.length,t.pageSwitcher=a.call(t,[...Array(t.pageTotal).keys()].map(((e,n)=>({show(){t.currentPageIndex=n;var e={offset:t.shadowRoot.querySelector(".main").scrollTop};l({targets:e,offset:n*t.shadowRoot.querySelector(".main").getBoundingClientRect().height+.5,duration:250,easing:"easeInOutCirc",update:function(){t.shadowRoot.querySelector(".main").scrollTo(0,e.offset)}})},hide(){}}))))}arrayOfN(e){return Array.from(Array(e).keys())}mainKeypress(e){switch(e.key){case"ArrowDown":case"PageDown":this.pageSwitcher.next();break;case"ArrowUp":case"PageUp":this.pageSwitcher.backwards()}}render(){return i` <div class="main">
        <div class="screen-number">
          ${this.arrayOfN(this.pageTotal).map((e=>i`<div
                class="marker ${e===this.currentPageIndex?"activated":""}"
              ></div>`))}
        </div>
        <slot class="list"></slot>
      </div>`}static get styles(){return o`
        a {
          text-decoration: none;
        }

        .main {
          height: 100%;
          overflow: hidden;
          font-family: Ping LCG;
        }

        ::slotted(*) {
          height: 100%;
        }

        .screen-number {
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 10;
        }

        .screen-number * {
          background: var(--fg-color);
          opacity: 0.3;
          border-radius: 100%;
        }

        .screen-number .activated {
          opacity: 1;
        }

        .st1 {
          fill: var(--fill-color);
        }

        @media only screen and (max-width: 820px) {
          .screen-number {
            position: fixed;
            right: 40px;
            top: 50%;
            transform: translateY(-50%);
          }

          .screen-number * {
            width: 9px;
            height: 9px;
          }

          .screen-number *:not(:first-child) {
            margin-top: 4px;
          }
        }

        @media only screen and (min-width: 820px) {
          .screen-number {
            position: fixed;
            right: 80px;
            top: 50%;
            transform: translateY(-50%);
          }

          .screen-number * {
            width: 16px;
            height: 16px;
          }

          .screen-number *:not(:first-child) {
            margin-top: 10px;
          }
        }
      `}})},219:(e,t,n)=>{"use strict";function r(e){return e=e||[],Array.isArray(e)?e:[e]}function i(e){return`[Vaadin.Router] ${e}`}n.d(t,{F:()=>ne});const o="module",s="nomodule",a=[o,s];function l(e){if(!e.match(/.+\.[m]?js$/))throw new Error(i(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function c(e){if(!e||!g(e.path))throw new Error(i('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(f(e.action)||Array.isArray(e.children)||f(e.children)||h(t)||n.some((t=>g(e[t])))))throw new Error(i(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(g(t))l(t);else{if(!a.some((e=>e in t)))throw new Error(i('Expected route bundle to include either "nomodule" or "module" keys, or both'));a.forEach((e=>e in t&&l(t[e])))}e.redirect&&["bundle","component"].forEach((t=>{t in e&&console.warn(i(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))}))}function u(e){r(e).forEach((e=>c(e)))}function d(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),t===o?n.setAttribute("type",o):t===s&&n.setAttribute(s,""),n.async=!0),new Promise(((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()}))}function p(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function h(e){return"object"==typeof e&&!!e}function f(e){return"function"==typeof e}function g(e){return"string"==typeof e}function m(e){const t=new Error(i(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const v=new class{};function w(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;const r=t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t);if(r!==window.location.origin)return;const{pathname:i,search:o,hash:s}=t;p("go",{pathname:i,search:o,hash:s})&&e.preventDefault()}const y={activate(){window.document.addEventListener("click",w)},inactivate(){window.document.removeEventListener("click",w)}};function _(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;p("go",{pathname:t,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!f(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const x={activate(){window.addEventListener("popstate",_)},inactivate(){window.removeEventListener("popstate",_)}};var b=function e(t,n,r){return t instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(t,n):Array.isArray(t)?function(t,n,r){for(var i=[],o=0;o<t.length;o++)i.push(e(t[o],n,r).source);return new RegExp("(?:"+i.join("|")+")",O(r))}(t,n,r):function(e,t,n){return L(A(e,n),t,n)}(t,n,r)},C=A,S=k,E=L,P=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function A(e,t){for(var n,r=[],i=0,o=0,s="",a=t&&t.delimiter||"/",l=t&&t.delimiters||"./",c=!1;null!==(n=P.exec(e));){var u=n[0],d=n[1],p=n.index;if(s+=e.slice(o,p),o=p+u.length,d)s+=d[1],c=!0;else{var h="",f=e[o],g=n[2],m=n[3],v=n[4],w=n[5];if(!c&&s.length){var y=s.length-1;l.indexOf(s[y])>-1&&(h=s[y],s=s.slice(0,y))}s&&(r.push(s),s="",c=!1);var _=""!==h&&void 0!==f&&f!==h,x="+"===w||"*"===w,b="?"===w||"*"===w,C=h||a,S=m||v;r.push({name:g||i++,prefix:h,delimiter:C,optional:b,repeat:x,partial:_,pattern:S?N(S):"[^"+T(C)+"]+?"})}}return(s||o<e.length)&&r.push(s+e.substr(o)),r}function k(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var i="",o=r&&r.encode||encodeURIComponent,s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var l,c=n?n[a.name]:void 0;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(l=o(c[u],a),!t[s].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(0===u?a.prefix:a.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(i+=a.prefix)}else{if(l=o(String(c),a),!t[s].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');i+=a.prefix+l}}else i+=a}return i}}function T(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function N(e){return e.replace(/([=!:$/()])/g,"\\$1")}function O(e){return e&&e.sensitive?"":"i"}function L(e,t,n){for(var r=(n=n||{}).strict,i=!1!==n.start,o=!1!==n.end,s=T(n.delimiter||"/"),a=n.delimiters||"./",l=[].concat(n.endsWith||[]).map(T).concat("$").join("|"),c=i?"^":"",u=0===e.length,d=0;d<e.length;d++){var p=e[d];if("string"==typeof p)c+=T(p),u=d===e.length-1&&a.indexOf(p[p.length-1])>-1;else{var h=p.repeat?"(?:"+p.pattern+")(?:"+T(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;t&&t.push(p),p.optional?p.partial?c+=T(p.prefix)+"("+h+")?":c+="(?:"+T(p.prefix)+"("+h+"))?":c+=T(p.prefix)+"("+h+")"}}return o?(r||(c+="(?:"+s+")?"),c+="$"===l?"$":"(?="+l+")"):(r||(c+="(?:"+s+"(?="+l+"))?"),u||(c+="(?="+s+"|"+l+")")),new RegExp(c,O(n))}b.parse=C,b.compile=function(e,t){return k(A(e,t))},b.tokensToFunction=S,b.tokensToRegExp=E;const{hasOwnProperty:j}=Object.prototype,M=new Map;function R(e){try{return decodeURIComponent(e)}catch(t){return e}}function I(e,t,n,r,i){let o,s,a=0,l=e.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(c){if(e===c)return{done:!0};const u=e.__children=e.__children||e.children;if(!o&&(o=function(e,t,n,r,i){const o=`${e}|${n=!!n}`;let s=M.get(o);if(!s){const t=[];s={keys:t,pattern:b(e,t,{end:n,strict:""===e})},M.set(o,s)}const a=s.pattern.exec(t);if(!a)return null;const l=Object.assign({},i);for(let e=1;e<a.length;e++){const t=s.keys[e-1],n=t.name,r=a[e];void 0===r&&j.call(l,n)||(t.repeat?l[n]=r?r.split(t.delimiter).map(R):[]:l[n]=r?R(r):r)}return{path:a[0],keys:(r||[]).concat(s.keys),params:l}}(l,t,!u,r,i),o))return{done:!1,value:{route:e,keys:o.keys,params:o.params,path:o.path}};if(o&&u)for(;a<u.length;){if(!s){const r=u[a];r.parent=e;let i=o.path.length;i>0&&"/"===t.charAt(i)&&(i+=1),s=I(r,t.substr(i),n,o.keys,o.params)}const r=s.next(c);if(!r.done)return{done:!1,value:r.value};s=null,a++}return{done:!0}}}}function D(e){if(f(e.route.action))return e.route.action(e)}M.set("|false",{keys:[],pattern:/(?:)/});class B{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||D,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){u(e);const t=[...r(e)];this.root.__children=t}addRoutes(e){return u(e),this.root.__children.push(...r(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,g(e)?{pathname:e}:e),n=I(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let i=null,o=null,s=t;function a(e,l=i.value.route,c){const u=null===c&&i.value.route;return i=o||n.next(u),o=null,e||!i.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(l,i.value.route)?i.done?Promise.reject(m(t)):(s=Object.assign(s?{chain:s.chain?s.chain.slice(0):[]}:{},t,i.value),function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(s,i.value),Promise.resolve(r(s)).then((t=>null!=t&&t!==v?(s.result=t.result||t,s):a(e,l,t)))):(o=i,Promise.resolve(v))}return t.next=a,Promise.resolve().then((()=>a(!0,this.root))).catch((e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(s);if(e?console.warn(t):e=new Error(t),e.context=e.context||s,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return s.result=this.errorHandler(e),s;throw e}))}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}B.pathToRegexp=b;const{pathToRegexp:U}=B,$=new Map;function F(e,t,n){const r=t.name||t.component;if(r&&(e.has(r)?e.get(r).push(t):e.set(r,[t])),Array.isArray(n))for(let r=0;r<n.length;r++){const i=n[r];i.parent=t,F(e,i,i.__children||i.children)}}function V(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function z(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function H(e,t={}){if(!(e instanceof B))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,i)=>{let o=V(n,r);if(!o&&(n.clear(),F(n,e.root,e.root.__children),o=V(n,r),!o))throw new Error(`Route "${r}" not found`);let s=$.get(o.fullPath);if(!s){let e=z(o),t=o.parent;for(;t;){const n=z(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=U.parse(e),r=U.tokensToFunction(n),i=Object.create(null);for(let e=0;e<n.length;e++)g(n[e])||(i[n[e].name]=!0);s={toPath:r,keys:i},$.set(e,s),o.fullPath=e}let a=s.toPath(i,t)||"/";if(t.stringifyQueryParams&&i){const e={},n=Object.keys(i);for(let t=0;t<n.length;t++){const r=n[t];s.keys[r]||(e[r]=i[r])}const r=t.stringifyQueryParams(e);r&&(a+="?"===r.charAt(0)?r:`?${r}`)}return a}}let q=[];function G(e){q.forEach((e=>e.inactivate())),e.forEach((e=>e.activate())),q=e}function W(e,t){return e.classList.add(t),new Promise((n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const r=e.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${i}`),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,(()=>{e.classList.remove(t),e.removeAttribute("style"),n()}))}else e.classList.remove(t),n()}))}function X(e){return null!=e}function Y({pathname:e="",search:t="",hash:n="",chain:r=[],params:i={},redirectFrom:o,resolver:s},a){const l=r.map((e=>e.route));return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:n,routes:l,route:a||l.length&&l[l.length-1]||null,params:i,redirectFrom:o,getUrl:(e={})=>ee(ne.pathToRegexp.compile(te(l))(Object.assign({},i,e)),s)}}function K(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function J(e,t,n){if(f(e))return e.apply(n,t)}function Q(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?J(n[e],t,n):void 0}function Z(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function ee(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function te(e){return e.map((e=>e.path)).reduce(((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e),"")}class ne extends B{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&B.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const i=ne.NavigationTrigger;ne.setTriggers.apply(ne,Object.keys(i).map((e=>i[e]))),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=Y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();f(t.children)&&(n=n.then((()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e)))).then((e=>{X(e)||f(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!h(e))throw new Error(i(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=r(e);for(let e=0;e<n.length;e++)c(n[e]),t.__children.push(n[e])}(e,t)})));const o={redirect:t=>K(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then((()=>{if(this.__isLatestRender(e))return J(t.action,[e,o],t)})).then((e=>{return X(e)&&(e instanceof HTMLElement||e.redirect||e===v)?e:g(t.redirect)?o.redirect(t.redirect):t.bundle?(n=t.bundle,g(n)?d(n):Promise.race(a.filter((e=>e in n)).map((e=>d(n[e],e))))).then((()=>{}),(()=>{throw new Error(i(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})):void 0;var n})).then((e=>X(e)?e:g(t.component)?o.component(t.component):void 0))}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},g(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then((e=>this.__fullyResolveChain(e))).then((e=>{if(this.__isLatestRender(e)){const r=this.__previousContext;if(e===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=Y(e),t&&this.__updateBrowserHistory(e,1===n),p("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);const i=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),i.then((()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location}))}})).catch((e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),Z(this.__outlet&&this.__outlet.children),this.location=Y(Object.assign(r,{resolver:this})),p("error",Object.assign({router:this,error:e},r)),e})),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then((n=>{const r=n!==t?n:e,i=ee(te(n.chain),n.resolver)===n.pathname,o=(e,t=e.route,n)=>e.next(void 0,t,n).then((n=>null===n||n===v?i?e:null!==t.parent?o(e,t.parent,n):n:n));return o(n).then((e=>{if(null===e||e===v)throw m(r);return e&&e!==v&&e!==n?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)}))}))}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=Y(e);const n=e.chain.map((e=>e.route)).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then((e=>this.__findComponentContextAfterAllRedirects(e))):t instanceof Error?Promise.reject(t):Promise.reject(new Error(i(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then((t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t)))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let i=Promise.resolve();const o=()=>({cancel:!0}),s=t=>K(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element);t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},n[t]);for(let t=0;t<r.length;t++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:s},r[t]),n[t].element.location=Y(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=Y(e,n[t].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:s},r[t]),r[t].element&&(r[t].element.location=Y(e,r[t].route)));return i.then((t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e}))}__runOnBeforeLeaveCallbacks(e,t,n,r){const i=Y(t);return e.then((e=>{if(this.__isLatestRender(t))return Q("onBeforeLeave",[i,n,this],r.element)(e)})).then((e=>{if(!(e||{}).redirect)return e}))}__runOnBeforeEnterCallbacks(e,t,n,r){const i=Y(t,r.route);return e.then((e=>{if(this.__isLatestRender(t))return Q("onBeforeEnter",[i,n,this],r.element)(e)}))}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(i(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(i(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const i=r?"replaceState":"pushState";window.history[i](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const i=t&&t.chain[r].element;if(i){if(i.parentNode!==n)break;e.chain[r].element=i,n=i}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter((t=>this.__addedByRouter.get(t)&&t!==e.result));let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const i=e.chain[t].element;i&&(r.appendChild(i),this.__addedByRouter.set(i,!0),r===n&&this.__appearingContent.push(i),r=i)}}__removeDisappearingContent(){this.__disappearingContent&&Z(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Z(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=Y(e);J(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&Z(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=Y(e,e.chain[t].route);J(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],i=e.chain;let o;for(let e=i.length;e>0;e--)if(i[e-1].route.animate){o=i[e-1].route.animate;break}if(t&&n&&o){const e=h(o)&&o.leave||"leaving",i=h(o)&&o.enter||"entering";r.push(W(t,e)),r.push(W(n,i))}return Promise.all(r).then((()=>e))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;g(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){G(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=H(this)),ee(this.__urlForName(e,t),this)}urlForPath(e,t){return ee(ne.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=g(e)?this.__createUrl(e,"http://a"):e;return p("go",{pathname:t,search:n,hash:r})}}const re=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ie=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function oe(e,t){if("function"!=typeof e)return;const n=re.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(ie?!(ie&&Object.keys(ie).map((e=>ie[e])).filter((e=>e.productionMode)).length>0):!oe((function(){return!0})))}catch(e){return!1}}()),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.2"}),function(e,t){if(window.Vaadin.developmentMode)oe(e,t)}((function(){})),ne.NavigationTrigger={POPSTATE:x,CLICK:y}},30:(e,t,n)=>{"use strict";n.d(t,{Z:()=>re});var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},i={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},o=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],s={CSS:{},springs:{}};function a(e,t,n){return Math.min(Math.max(e,t),n)}function l(e,t){return e.indexOf(t)>-1}function c(e,t){return e.apply(null,t)}var u={arr:function(e){return Array.isArray(e)},obj:function(e){return l(Object.prototype.toString.call(e),"Object")},pth:function(e){return u.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||u.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return u.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return u.hex(e)||u.rgb(e)||u.hsl(e)},key:function(e){return!r.hasOwnProperty(e)&&!i.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function d(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function p(e,t){var n=d(e),r=a(u.und(n[0])?1:n[0],.1,100),i=a(u.und(n[1])?100:n[1],.1,100),o=a(u.und(n[2])?10:n[2],.1,100),l=a(u.und(n[3])?0:n[3],.1,100),c=Math.sqrt(i/r),p=o/(2*Math.sqrt(i*r)),h=p<1?c*Math.sqrt(1-p*p):0,f=p<1?(p*c-l)/h:-l+c;function g(e){var n=t?t*e/1e3:e;return n=p<1?Math.exp(-n*p*c)*(1*Math.cos(h*n)+f*Math.sin(h*n)):(1+f*n)*Math.exp(-n*c),0===e||1===e?e:1-n}return t?g:function(){var t=s.springs[e];if(t)return t;for(var n=1/6,r=0,i=0;;)if(1===g(r+=n)){if(++i>=16)break}else i=0;var o=r*n*1e3;return s.springs[e]=o,o}}function h(e){return void 0===e&&(e=10),function(t){return Math.ceil(a(t,1e-6,1)*e)*(1/e)}}var f,g,m=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function i(e,i,o){return((t(i,o)*e+n(i,o))*e+r(i))*e}function o(e,i,o){return 3*t(i,o)*e*e+2*n(i,o)*e+r(i)}return function(t,n,r,s){if(0<=t&&t<=1&&0<=r&&r<=1){var a=new Float32Array(11);if(t!==n||r!==s)for(var l=0;l<11;++l)a[l]=i(l*e,t,r);return function(l){return t===n&&r===s||0===l||1===l?l:i(function(n){for(var s=0,l=1;10!==l&&a[l]<=n;++l)s+=e;--l;var c=s+(n-a[l])/(a[l+1]-a[l])*e,u=o(c,t,r);return u>=.001?function(e,t,n,r){for(var s=0;s<4;++s){var a=o(t,n,r);if(0===a)return t;t-=(i(t,n,r)-e)/a}return t}(n,c,t,r):0===u?c:function(e,t,n,r,o){var s,a,l=0;do{(s=i(a=t+(n-t)/2,r,o)-e)>0?n=a:t=a}while(Math.abs(s)>1e-7&&++l<10);return a}(n,s,s+e,t,r)}(l),n,s)}}}}(),v=(f={linear:function(){return function(e){return e}}},g={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=a(e,1,10),r=a(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){g[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(g).forEach((function(e){var t=g[e];f["easeIn"+e]=t,f["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},f["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},f["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),f);function w(e,t){if(u.fnc(e))return e;var n=e.split("(")[0],r=v[n],i=d(e);switch(n){case"spring":return p(e,t);case"cubicBezier":return c(m,i);case"steps":return c(h,i);default:return c(r,i)}}function y(e){try{return document.querySelectorAll(e)}catch(e){return}}function _(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,i=[],o=0;o<n;o++)if(o in e){var s=e[o];t.call(r,s,o,e)&&i.push(s)}return i}function x(e){return e.reduce((function(e,t){return e.concat(u.arr(t)?x(t):t)}),[])}function b(e){return u.arr(e)?e:(u.str(e)&&(e=y(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function C(e,t){return e.some((function(e){return e===t}))}function S(e){var t={};for(var n in e)t[n]=e[n];return t}function E(e,t){var n=S(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function P(e,t){var n=S(e);for(var r in t)n[r]=u.und(e[r])?t[r]:e[r];return n}function A(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function k(e,t){return u.fnc(e)?e(t.target,t.id,t.total):e}function T(e,t){return e.getAttribute(t)}function N(e,t,n){if(C([n,"deg","rad","turn"],A(t)))return t;var r=s.CSS[t+n];if(!u.und(r))return r;var i=document.createElement(e.tagName),o=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;o.appendChild(i),i.style.position="absolute",i.style.width=100+n;var a=100/i.offsetWidth;o.removeChild(i);var l=a*parseFloat(t);return s.CSS[t+n]=l,l}function O(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?N(e,i,n):i}}function L(e,t){return u.dom(e)&&!u.inp(e)&&(!u.nil(T(e,t))||u.svg(e)&&e[t])?"attribute":u.dom(e)&&C(o,t)?"transform":u.dom(e)&&"transform"!==t&&O(e,t)?"css":null!=e[t]?"object":void 0}function j(e){if(u.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,i=new Map;t=r.exec(n);)i.set(t[1],t[2]);return i}}function M(e,t,n,r){switch(L(e,t)){case"transform":return function(e,t,n,r){var i=l(t,"scale")?1:0+function(e){return l(e,"translate")||"perspective"===e?"px":l(e,"rotate")||l(e,"skew")?"deg":void 0}(t),o=j(e).get(t)||i;return n&&(n.transforms.list.set(t,o),n.transforms.last=t),r?N(e,o,r):o}(e,t,r,n);case"css":return O(e,t,n);case"attribute":return T(e,t);default:return e[t]||0}}function R(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=A(e)||0,i=parseFloat(t),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return i+o+r;case"-":return i-o+r;case"*":return i*o+r}}function I(e,t){if(u.col(e))return function(e){return u.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:u.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):u.hsl(e)?function(e){var t,n,r,i=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),o=parseInt(i[1],10)/360,s=parseInt(i[2],10)/100,a=parseInt(i[3],10)/100,l=i[4]||1;function c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==s)t=n=r=a;else{var u=a<.5?a*(1+s):a+s-a*s,d=2*a-u;t=c(d,u,o+1/3),n=c(d,u,o),r=c(d,u,o-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+l+")"}(e):void 0;var t,n}(e);if(/\s/g.test(e))return e;var n=A(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function D(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function B(e){for(var t,n=e.points,r=0,i=0;i<n.numberOfItems;i++){var o=n.getItem(i);i>0&&(r+=D(t,o)),t=o}return r}function U(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*T(e,"r")}(e);case"rect":return function(e){return 2*T(e,"width")+2*T(e,"height")}(e);case"line":return function(e){return D({x:T(e,"x1"),y:T(e,"y1")},{x:T(e,"x2"),y:T(e,"y2")})}(e);case"polyline":return B(e);case"polygon":return function(e){var t=e.points;return B(e)+D(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function $(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;u.svg(t)&&u.svg(t.parentNode);)t=t.parentNode;return t}(e),i=r.getBoundingClientRect(),o=T(r,"viewBox"),s=i.width,a=i.height,l=n.viewBox||(o?o.split(" "):[0,0,s,a]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:s,h:a,vW:l[2],vH:l[3]}}function F(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var i=$(e.el,e.svg),o=r(),s=r(-1),a=r(1),l=n?1:i.w/i.vW,c=n?1:i.h/i.vH;switch(e.property){case"x":return(o.x-i.x)*l;case"y":return(o.y-i.y)*c;case"angle":return 180*Math.atan2(a.y-s.y,a.x-s.x)/Math.PI}}function V(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=I(u.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:u.str(e)||t?r.split(n):[]}}function z(e){return _(e?x(u.arr(e)?e.map(b):b(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function H(e){var t=z(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:j(e)}}}))}function q(e,t){var n=S(t);if(/^spring/.test(n.easing)&&(n.duration=p(n.easing)),u.arr(e)){var r=e.length;2!==r||u.obj(e[0])?u.fnc(t.duration)||(n.duration=t.duration/r):e={value:e}}var i=u.arr(e)?e:[e];return i.map((function(e,n){var r=u.obj(e)&&!u.pth(e)?e:{value:e};return u.und(r.delay)&&(r.delay=n?0:t.delay),u.und(r.endDelay)&&(r.endDelay=n===i.length-1?t.endDelay:0),r})).map((function(e){return P(e,n)}))}var G={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,i){if(r.list.set(t,n),t===r.last||i){var o="";r.list.forEach((function(e,t){o+=t+"("+e+") "})),e.style.transform=o}}};function W(e,t){H(e).forEach((function(e){for(var n in t){var r=k(t[n],e),i=e.target,o=A(r),s=M(i,n,o,e),a=R(I(r,o||A(s)),s),l=L(i,n);G[l](i,n,a,e.transforms,!0)}}))}function X(e,t){return _(x(e.map((function(e){return t.map((function(t){return function(e,t){var n=L(e.target,t.name);if(n){var r=function(e,t){var n;return e.tweens.map((function(r){var i=function(e,t){var n={};for(var r in e){var i=k(e[r],t);u.arr(i)&&1===(i=i.map((function(e){return k(e,t)}))).length&&(i=i[0]),n[r]=i}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),o=i.value,s=u.arr(o)?o[1]:o,a=A(s),l=M(t.target,e.name,a,t),c=n?n.to.original:l,d=u.arr(o)?o[0]:c,p=A(d)||A(l),h=a||p;return u.und(s)&&(s=c),i.from=V(d,h),i.to=V(R(s,d),h),i.start=n?n.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=w(i.easing,i.duration),i.isPath=u.pth(o),i.isPathTargetInsideSVG=i.isPath&&u.svg(t.target),i.isColor=u.col(i.from.original),i.isColor&&(i.round=1),n=i,i}))}(t,e),i=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:i.end,delay:r[0].delay,endDelay:i.endDelay}}}(e,t)}))}))),(function(e){return!u.und(e)}))}function Y(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},i={};return i.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,i.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,i.endDelay=n?i.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,i}var K=0,J=[],Q=function(){var e;function t(n){for(var r=J.length,i=0;i<r;){var o=J[i];o.paused?(J.splice(i,1),r--):(o.tick(n),i++)}e=i>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ee.suspendWhenDocumentHidden&&(Z()?e=cancelAnimationFrame(e):(J.forEach((function(e){return e._onDocumentVisibility()})),Q()))})),function(){e||Z()&&ee.suspendWhenDocumentHidden||!(J.length>0)||(e=requestAnimationFrame(t))}}();function Z(){return!!document&&document.hidden}function ee(e){void 0===e&&(e={});var t,n=0,o=0,s=0,l=0,c=null;function d(e){var t=window.Promise&&new Promise((function(e){return c=e}));return e.finished=t,t}var p=function(e){var t=E(r,e),n=E(i,e),o=function(e,t){var n=[],r=t.keyframes;for(var i in r&&(t=P(function(e){for(var t=_(x(e.map((function(e){return Object.keys(e)}))),(function(e){return u.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var i=t[r];n[i]=e.map((function(e){var t={};for(var n in e)u.key(n)?n==i&&(t.value=e[n]):t[n]=e[n];return t}))},i=0;i<t.length;i++)r(i);return n}(r),t)),t)u.key(i)&&n.push({name:i,tweens:q(t[i],e)});return n}(n,e),s=H(e.targets),a=X(s,o),l=Y(a,n),c=K;return K++,P(t,{id:c,children:[],animatables:s,animations:a,duration:l.duration,delay:l.delay,endDelay:l.endDelay})}(e);function h(){var e=p.direction;"alternate"!==e&&(p.direction="normal"!==e?"normal":"reverse"),p.reversed=!p.reversed,t.forEach((function(e){return e.reversed=p.reversed}))}function f(e){return p.reversed?p.duration-e:e}function g(){n=0,o=f(p.currentTime)*(1/ee.speed)}function m(e,t){t&&t.seek(e-t.timelineOffset)}function v(e){for(var t=0,n=p.animations,r=n.length;t<r;){var i=n[t],o=i.animatable,s=i.tweens,l=s.length-1,c=s[l];l&&(c=_(s,(function(t){return e<t.end}))[0]||c);for(var u=a(e-c.start-c.delay,0,c.duration)/c.duration,d=isNaN(u)?1:c.easing(u),h=c.to.strings,f=c.round,g=[],m=c.to.numbers.length,v=void 0,w=0;w<m;w++){var y=void 0,x=c.to.numbers[w],b=c.from.numbers[w]||0;y=c.isPath?F(c.value,d*x,c.isPathTargetInsideSVG):b+d*(x-b),f&&(c.isColor&&w>2||(y=Math.round(y*f)/f)),g.push(y)}var C=h.length;if(C){v=h[0];for(var S=0;S<C;S++){h[S];var E=h[S+1],P=g[S];isNaN(P)||(v+=E?P+E:P+" ")}}else v=g[0];G[i.type](o.target,i.property,v,o.transforms),i.currentValue=v,t++}}function w(e){p[e]&&!p.passThrough&&p[e](p)}function y(e){var r=p.duration,i=p.delay,u=r-p.endDelay,g=f(e);p.progress=a(g/r*100,0,100),p.reversePlayback=g<p.currentTime,t&&function(e){if(p.reversePlayback)for(var n=l;n--;)m(e,t[n]);else for(var r=0;r<l;r++)m(e,t[r])}(g),!p.began&&p.currentTime>0&&(p.began=!0,w("begin")),!p.loopBegan&&p.currentTime>0&&(p.loopBegan=!0,w("loopBegin")),g<=i&&0!==p.currentTime&&v(0),(g>=u&&p.currentTime!==r||!r)&&v(r),g>i&&g<u?(p.changeBegan||(p.changeBegan=!0,p.changeCompleted=!1,w("changeBegin")),w("change"),v(g)):p.changeBegan&&(p.changeCompleted=!0,p.changeBegan=!1,w("changeComplete")),p.currentTime=a(g,0,r),p.began&&w("update"),e>=r&&(o=0,p.remaining&&!0!==p.remaining&&p.remaining--,p.remaining?(n=s,w("loopComplete"),p.loopBegan=!1,"alternate"===p.direction&&h()):(p.paused=!0,p.completed||(p.completed=!0,w("loopComplete"),w("complete"),!p.passThrough&&"Promise"in window&&(c(),d(p)))))}return d(p),p.reset=function(){var e=p.direction;p.passThrough=!1,p.currentTime=0,p.progress=0,p.paused=!0,p.began=!1,p.loopBegan=!1,p.changeBegan=!1,p.completed=!1,p.changeCompleted=!1,p.reversePlayback=!1,p.reversed="reverse"===e,p.remaining=p.loop,t=p.children;for(var n=l=t.length;n--;)p.children[n].reset();(p.reversed&&!0!==p.loop||"alternate"===e&&1===p.loop)&&p.remaining++,v(p.reversed?p.duration:0)},p._onDocumentVisibility=g,p.set=function(e,t){return W(e,t),p},p.tick=function(e){s=e,n||(n=s),y((s+(o-n))*ee.speed)},p.seek=function(e){y(f(e))},p.pause=function(){p.paused=!0,g()},p.play=function(){p.paused&&(p.completed&&p.reset(),p.paused=!1,J.push(p),g(),Q())},p.reverse=function(){h(),p.completed=!p.reversed,g()},p.restart=function(){p.reset(),p.play()},p.remove=function(e){ne(z(e),p)},p.reset(),p.autoplay&&p.play(),p}function te(e,t){for(var n=t.length;n--;)C(e,t[n].animatable.target)&&t.splice(n,1)}function ne(e,t){var n=t.animations,r=t.children;te(e,n);for(var i=r.length;i--;){var o=r[i],s=o.animations;te(e,s),s.length||o.children.length||r.splice(i,1)}n.length||r.length||t.pause()}ee.version="3.2.1",ee.speed=1,ee.suspendWhenDocumentHidden=!0,ee.running=J,ee.remove=function(e){for(var t=z(e),n=J.length;n--;)ne(t,J[n])},ee.get=M,ee.set=W,ee.convertPx=N,ee.path=function(e,t){var n=u.str(e)?y(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:$(n),totalLength:U(n)*(r/100)}}},ee.setDashoffset=function(e){var t=U(e);return e.setAttribute("stroke-dasharray",t),t},ee.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?w(t.easing):null,i=t.grid,o=t.axis,s=t.from||0,a="first"===s,l="center"===s,c="last"===s,d=u.arr(e),p=d?parseFloat(e[0]):parseFloat(e),h=d?parseFloat(e[1]):0,f=A(d?e[1]:e)||0,g=t.start||0+(d?p:0),m=[],v=0;return function(e,t,u){if(a&&(s=0),l&&(s=(u-1)/2),c&&(s=u-1),!m.length){for(var w=0;w<u;w++){if(i){var y=l?(i[0]-1)/2:s%i[0],_=l?(i[1]-1)/2:Math.floor(s/i[0]),x=y-w%i[0],b=_-Math.floor(w/i[0]),C=Math.sqrt(x*x+b*b);"x"===o&&(C=-x),"y"===o&&(C=-b),m.push(C)}else m.push(Math.abs(s-w));v=Math.max.apply(Math,m)}r&&(m=m.map((function(e){return r(e/v)*v}))),"reverse"===n&&(m=m.map((function(e){return o?e<0?-1*e:-e:Math.abs(v-e)})))}return g+(d?(h-p)/v:p)*(Math.round(100*m[t])/100)+f}},ee.timeline=function(e){void 0===e&&(e={});var t=ee(e);return t.duration=0,t.add=function(n,r){var o=J.indexOf(t),s=t.children;function a(e){e.passThrough=!0}o>-1&&J.splice(o,1);for(var l=0;l<s.length;l++)a(s[l]);var c=P(n,E(i,e));c.targets=c.targets||e.targets;var d=t.duration;c.autoplay=!1,c.direction=t.direction,c.timelineOffset=u.und(r)?d:R(r,d),a(t),t.seek(c.timelineOffset);var p=ee(c);a(p),s.push(p);var h=Y(s,e);return t.delay=h.delay,t.endDelay=h.endDelay,t.duration=h.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},ee.easing=w,ee.penner=v,ee.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const re=ee},593:(e,t,n)=>{e.exports=n.p+"index.html"},701:(e,t,n)=>{e.exports=n.p+"assets/images/icons/archlinux.svg"},850:(e,t,n)=>{e.exports=n.p+"assets/images/icons/github.svg"},492:(e,t,n)=>{e.exports=n.p+"assets/images/icons/npm.svg"},783:(e,t,n)=>{e.exports=n.p+"assets/images/landing-code-bg.png"},40:(e,t,n)=>{const r=n(201);class i{doNext(e,t){e.hide()}doBackwards(e,t){t.show()}}class o{doNext(e,t){e.hide("forwards"),t.show("forwards")}doBackwards(e,t){e.hide("backwards"),t.show("backwards")}}e.exports={createCardSwitcher:function(e){return new r(e,new i)},createSinglePaneSwitcher:function(e){return new r(e,new o)}}},201:e=>{e.exports=class{constructor(e,t){this.stateMachineTransitionHandler=t,this.pages=e,this.currentPageIndex=0}next(){this.hasMoreThanOnePage()&&this.isNotOnFinalPage()&&(this.stateMachineTransitionHandler.doNext(this.currentPage(),this.nextPage()),this.currentPageIndex++)}nextPage(){return this.pages[this.currentPageIndex+1]}currentPage(){return this.pages[this.currentPageIndex]}backwards(){this.hasMoreThanOnePage()&&this.isNotOnFirstPage()&&(this.stateMachineTransitionHandler.doBackwards(this.currentPage(),this.previousPage()),this.currentPageIndex--)}previousPage(){return this.pages[this.currentPageIndex-1]}isNotOnFirstPage(){return this.currentPageIndex>0}hasMoreThanOnePage(){return 1!==this.pages.length}isNotOnFinalPage(){return this.currentPageIndex!==this.pages.length-1}}},195:function(e){e.exports=(()=>{"use strict";var e={617:(e,t,n)=>{var r,i;n.r(t),n.d(t,{CustomSwipeEvents:()=>r,SwipeEventListener:()=>o}),function(e){e.swipeUp="swipeUp",e.swipeDown="swipeDown",e.swipeLeft="swipeLeft",e.swipeRight="swipeRight"}(r||(r={})),function(e){e.NO_SWIPE_ACTION_ENABLED="You must enable at least on swipe action",e.NO_SWIPE_AREA="No swipe area was provided",e.UNKNOWN_EVENT="Unknown even type in browser",e.NO_SWIPE_DIRECTION_ENABLED="No swipe direction was provided"}(i||(i={}));var o=function(e){var t,n,o,s=!1,a={swipeSensitivity:80,isSwipeUpDesired:!0,isSwipeDownDesired:!0,isSwipeLeftDesired:!0,isSwipeRightDesired:!0,listenForTouchEvents:!0,listenForMouseEvents:!0,swipeArea:void 0},l=function(e){var t={x:void 0,y:void 0};if("mousemove"===e.type||"mousedown"===e.type||"mousedup"===e.type)t.x=e.clientX,t.y=e.clientY;else{if("touchmove"!==e.type&&"touchstart"!==e.type&&"touchend"!==e.type)throw new Error(i.UNKNOWN_EVENT);t.x=e.touches[0].pageX,t.y=e.touches[0].pageY}return t},c=function(e){s=!0;var r=l(e);t=r.x,n=r.y},u=function(e){var i=!1;if(s){var a=l(e);if(o.isSwipeDownDesired&&n<a.y-o.swipeSensitivity){var c=new CustomEvent(r.swipeDown);i=!0,o.swipeArea.dispatchEvent(c)}o.isSwipeUpDesired&&n>a.y+o.swipeSensitivity&&(c=new CustomEvent(r.swipeUp),i=!0,o.swipeArea.dispatchEvent(c)),o.isSwipeLeftDesired&&t>a.x+o.swipeSensitivity&&(c=new CustomEvent(r.swipeLeft),i=!0,o.swipeArea.dispatchEvent(c)),o.isSwipeRightDesired&&t<a.x-o.swipeSensitivity&&(c=new CustomEvent(r.swipeRight),i=!0,o.swipeArea.dispatchEvent(c)),i&&(s=!1)}},d=function(){s=!1,t=void 0,n=void 0},p=function(e){o=function(e,t){var n;for(n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}(a,e),function(){if(!o.listenForMouseEvents&&!o.listenForTouchEvents)throw new Error(i.NO_SWIPE_ACTION_ENABLED);if(!(o.isSwipeDownDesired||o.isSwipeLeftDesired||o.isSwipeRightDesired||o.isSwipeUpDesired))throw new Error(i.NO_SWIPE_DIRECTION_ENABLED);if(!o.swipeArea)throw new Error(i.NO_SWIPE_AREA)}()},h=function(){o.listenForTouchEvents&&(o.swipeArea.addEventListener("touchstart",c),o.swipeArea.addEventListener("touchmove",u),o.swipeArea.addEventListener("touchend",d)),o.listenForMouseEvents&&(o.swipeArea.addEventListener("mousedown",c),o.swipeArea.addEventListener("mousemove",u),o.swipeArea.addEventListener("mouseup",d))};return"undefined"!=typeof window&&function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),p(e),h(),{swipeArea:o.swipeArea,updateOptions:function(e){o.swipeArea.removeEventListener("touchstart",c),o.swipeArea.removeEventListener("touchmove",u),o.swipeArea.removeEventListener("touchend",d),o.swipeArea.removeEventListener("mousedown",c),o.swipeArea.removeEventListener("mousemove",u),o.swipeArea.removeEventListener("mouseup",d),p(e),h()}}}}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(617)})()},951:(e,t,n)=>{const{LitElement:r,html:i,css:o}=n(476);customElements.define("about-screen",class extends r{render(){return i` <layout-central>
        <switcher-layout slot="center" class="about-section">
          <div class="page content activated">
            <span class="title"><code>$ whoami</code></span>
            <span class="subtitle"
              >TL;DL - A fairly experiened software developer</span
            >
            <span class="description"
              >I first started programming in 2012 and it's been a long journey
              since then. I moved across different platforms and architectures.
              I hold a BS in Computer Science from the Lebanese University.
            </span>
          </div>
          <div class="page content activated">
            <span class="title"><code>$ experience</code></span>
            <span class="description"
              >I started out with writing mobile apps on Android 2.3.2 & Java
              applications. I then moved on to system programming writing
              libraries on linux. I got introduced to nodejs, ES6, & React in
              2017. Been writing web apps (fullstack) & hybrid mobile
              applications professionally since then.
            </span>
          </div>
          <div class="page content activated">
            <span class="title"><code>$ readings</code></span>
            <span class="description">
              I've been reading software engineering books since 2017.
              Interested in the development process, software architecture,
              SOLID principles, & using TDD in production environments. Among my
              favorite readings are the writings of
              <a href="http://cleancoder.com">Robert Cecil Martin</a> &
              <a href="https://martinfowler.com/">Martin Fowler</a>.
            </span>
          </div>
        </switcher-layout>
      </layout-central>`}static get styles(){return o`
        @media only screen and (max-width: 820px) {
          .about-section .title {
            font-size: 25px;
          }

          .about-section .subtitle {
            font-size: 21px;
          }

          .about-section .description {
            font-size: 20px;
          }
        }

        @media only screen and (min-width: 820px) {
          .about-section .title {
            font-size: 32px;
          }

          .about-section .subtitle {
            font-size: 23px;
          }

          .about-section .description {
            font-size: 25px;
          }
        }

        .about-section {
          display: flex;
          width: 100%;
          flex-direction: row;
          align-items: center;
          margin-right: 15px;
        }

        .about-section .content {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .about-section .title {
          color: var(--fg-color);
          font-family: Ping LCG;
          font-weight: 800;
          margin-bottom: 15px;
        }

        .about-section .subtitle {
          font-family: Ping LCG;
          font-weight: 200;
          margin-bottom: 50px;
        }

        .about-section .description {
          font-family: Ping LCG;
          font-weight: normal;
          line-height: 130%;
        }
      `}})},152:(e,t,n)=>{"use strict";var r=n(476);customElements.define("layout-central",class extends r.LitElement{render(){return r.html` <div class="landing-page">
        <div class="top">
          <span class="logo"><a href="/">HC.</a></span>
          <nav class="nav">
            <ul>
              <li><a href="/about">ME</a></li>
            </ul>
          </nav>
        </div>
        <div class="links">
          <ul>
            <li><a href="http://github.com/hadichahine">GITHUB</a></li>
            <li><a href="http://linkedin.com/in/hadichahine">LINKEDIN</a></li>
          </ul>
        </div>
        <div class="center">
          <slot name="center"></slot>
        </div>
        <div class="email">
          <span
            ><a href="mailto:hadi.n.chahine@gmail.com"
              >HADI.N.CHAHINE@GMAIL.COM</a
            ></span
          >
        </div>
        <div class="bottom">
          <slot class="scroll" name="bottom"></slot>
        </div>
      </div>`}static get styles(){return r.css`
        @import url("./common.ccss");

        @font-face {
          font-family: Ping LCG;
          src: url("./assets/fonts/PingLCG-Thin.ttf");
          font-weight: 100;
        }

        @font-face {
          font-family: Ping LCG;
          src: url("./assets/fonts/PingLCG-ExtraLightItalic.ttf");
          font-weight: 200;
        }

        @font-face {
          font-family: Ping LCG;
          src: url("./assets/fonts/PingLCG-Regular.ttf");
          font-weight: normal;
        }

        @font-face {
          font-family: Ping LCG;
          src: url("./assets/fonts/PingLCG-Bold.otf");
          font-weight: bold;
        }

        @font-face {
          font-family: Ping LCG;
          src: url("./assets/fonts/PingLCG-Black.ttf");
          font-weight: 800;
        }

        * {
          box-sizing: border-box;
        }

        ul {
          margin: 0;
          padding: 0;
        }

        ul li {
          display: inline;
          list-style: none;
        }

        a {
          text-decoration: none;
          color: black;
          line-height: 100%;
        }

        span {
          line-height: 100%;
        }

        .landing-page {
          display: grid;
          box-sizing: none;
          height: 100%;
        }

        .logo {
          font-family: Ping LCG;
          font-weight: bold;
        }

        @media only screen and (max-width: 820px) {
          .landing-page {
            padding: 27px 20px 27px 20px;
            grid-template-columns: auto 26px 1fr 25px auto;
            grid-template-rows: auto 1fr auto;
          }

          .logo {
            font-size: 19.6px;
          }

          .nav ul li {
            font-size: 12.3px;
          }

          .links {
            font-size: 8.82px;
          }

          .email {
            font-size: 8.82px;
          }
        }

        @media only screen and (min-width: 820px) {
          .landing-page {
            padding: 45px 45px 40px 45px;
            grid-template-columns: auto 47px 1fr 25px auto;
            grid-template-rows: auto 1fr auto;
          }

          .logo {
            font-size: 42.4px;
          }

          .nav ul li {
            font-size: 15px;
          }
        }

        .landing-page .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          grid-column-start: 1;
          grid-column-end: 6;
        }

        .nav ul li {
          font-family: Ping LCG;
          font-weight: bold;
        }

        .nav ul li:not(:first-child) {
          margin-left: 40px;
        }

        .links {
          width: 2ex;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        .links > * {
          transform: translateX(calc(-50% + 1ex)) rotate(-90deg);
        }

        .links > * > *:not(:first-child) {
          margin-left: 44px;
        }

        .links > * a {
          font-family: Ping LCG;
        }

        .st1 {
          fill: var(--fill-color);
        }

        .email {
          width: 2ex;
          display: flex;
          align-items: center;
          grid-column-start: 5;
        }

        .email span {
          font-family: Ping LCG;
          transform: translateX(calc(-50% + 1ex)) rotate(90deg);
        }

        .center {
          grid-column-start: 3;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        ::slotted(*) {
          height: 100%;
        }

        .bottom {
          grid-column-start: 3;
        }
      `}}),n(590);var i=n(850),o=n.n(i),s=n(701),a=n.n(s),l=n(492),c=n.n(l),u=n(783),d=n.n(u);const p=(h=JSON.parse(decodeURIComponent("%5B%7B%22name%22%3A%22cest%22%2C%22shortDescription%22%3A%22A%20simple%20jest%20inspired%20unit-testing%20library%20for%20C.%22%2C%22description%22%3A%22A%20unit%20testing%20library%20that%20combines%20the%20XUnit%20interface%20with%20a%20jest%20like%20interface.%20Tests%20can%20be%20written%20with%20a%20descriptive%20title.%20Starting%20a%20test%20suite%20takes%20only%20a%20couple%20of%20lines.%20Test%20suites%20can%20be%20compiled%20into%20executables.%20A%20test%20loader%20is%20to%20be%20written%20alongside%20several%20test%20hooks.%22%2C%22code%22%3A%22%23include%20%3Ccest%2Fcreate_test_suite.h%3E%5Cn%5CnSTART_TEST_SUITE(%5C%22Test%20that%20test%20is%20test%5C%22)%5Cn%5Cnint%20pow(int%20x)%7B%5Cn%5Ctreturn%20x*x%3B%5Cn%7D%5Cn%5CnTEST(%5C%22Test%20that%20pow(0)%20is%20zero%5C%22%2C(Assert%20*assert)%7B%5Cn%20%20%20%20Assert_assertTrue(assert%2Cpow(0)%20%3D%3D%200)%3B%5Cn%7D)%3B%5Cn%5CnTEST(%5C%22Test%20that%20pow(2)%20%3D%3D%204%5C%22%2C(Assert%20*assert)%7B%5Cn%20%20%20%20Assert_assertTrue(assert%2Cpow(2)%20%3D%3D%204)%3B%5Cn%7D)%3B%5Cn%5CnEND_TEST_SUITE%22%2C%22links%22%3A%5B%7B%22url%22%3A%22https%3A%2F%2Fgithub.com%2Fhadichahine%2Fcest%22%7D%2C%7B%22url%22%3A%22https%3A%2F%2Faur.archlinux.org%2Fpackages%2Fcest-git%2F%22%7D%5D%7D%2C%7B%22name%22%3A%22except-js%22%2C%22shortDescription%22%3A%22exception%20handling%20for%20the%20untyped%22%2C%22description%22%3A%22except-js%20provides%20the%20necessary%20abstractions%20for%20handling%20exceptions%20of%20different%20types%20within%20multiple%20catch%20statements.%20This%20is%20pretty%20standard%20on%20strongly%20typed%20languages%20like%20Java.%22%2C%22code%22%3A%22const%20%7B%20create%2C%20except%20%7D%20%3D%20require('except-js')%5Cn%5Cnconst%20Exception1Test%20%3D%20create('Exception1Test')%5Cnconst%20Exception2Test%20%3D%20create('Exception2Test')%5Cn%5Cntry%20%7B%5Cn%20%20%20%20%20throw%20new%20Exception1Test('ExceptionTest%20here!')%5Cn%7Dcatch(exception)%7B%5Cn%20%20%20%20except(exception)%5Cn%20%20%20%20%20%20%20%20.on(Exception1Test)%5Cn%20%20%20%20%20%20%20%20.do(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20console.log('%5BExp1%5D%20Message%3A'%2C%20exception.message)%5Cn%20%20%20%20%20%20%20%20%7D)%5Cn%20%20%20%20%20%20%20%20.on(Exception2Test)%5Cn%20%20%20%20%20%20%20%20.do(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20console.log('%5BExp2%5D%20Message%3A'%2C%20exception.message)%5Cn%20%20%20%20%20%20%20%20%7D)%5Cn%20%20%20%20%20%20%20%20.done()%5Cn%7D%22%2C%22links%22%3A%5B%7B%22url%22%3A%22https%3A%2F%2Fgithub.com%2Fhadichahine%2Fexcept-js%22%7D%2C%7B%22url%22%3A%22https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fexcept-js%22%7D%5D%7D%5D")),customElements.define("landing-screen",class extends r.LitElement{static get styles(){return r.css`
          a {
            text-decoration: none;
          }

          .down-arrow {
            width: 100%;
            text-align: center;
            display: inline-block;
          }

          .down-arrow > * {
            width: 50px;
            height: 50px;
            animation: MoveUpDown 0.7s linear infinite;
          }

          .landing-project-preview {
            box-sizing: border-box;
            width: 100%;
            overflow: hidden;
          }

          .center-landing {
            width: 100%;
            height: 100%;
            --fill-color: var(--fg-color);
          }

          .center-landing * {
            transition: fill 0.2s, color 0.2s;
          }

          .st1 {
            fill: var(--fill-color);
          }

          @media only screen and (max-width: 820px) {
            .center-landing {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .center-landing > *:not(:last-child) {
              margin-bottom: 30px;
            }

            .art {
              width: 100%;
              position: relative;
            }

            .art > .art-bg {
              position: absolute;
              top: 0;
              right: 0;
              z-index: -10;
              transform: translateX(-12px);
            }

            .art > .art-bg > img {
              max-width: 100%;
            }

            .description > * {
              display: block;
            }

            .description .fullname {
              font-size: 51.1px;
              font-family: Ping LCG;
              line-height: 100%;
              font-weight: 800;
              text-align: center;
              color: var(--fill-color);
            }

            .description .profession {
              font-size: 19.44px;
              font-family: Ping LCG;
              font-weight: 100;
              text-align: center;
              font-weight: 200;
              line-height: 100%;
              color: grey;
            }

            .down-arrow > * {
              width: 19.6px;
              height: 19.6px;
              animation: MoveUpDown 0.7s linear infinite;
            }

            .landing-project-preview {
              padding: 30px 0 50.41px 0;
              display: grid;
              grid-template-columns: 100%;
              gap: 11.48px;
              grid-template-rows: 1fr auto auto;
              height: 100%;
              color: white;
            }

            .landing-project-preview > * {
              padding: 0 32.06px;
            }

            .landing-project-preview .text-pane > * {
              display: block;
            }

            .landing-project-preview .text-pane .name {
              font-size: 26.88px;
              color: var(--fg-color);
              font-weight: 800;
            }

            .landing-project-preview .text-pane .subtitle {
              font-size: 19.17px;
              margin-top: 10px;
            }

            .landing-project-preview .text-pane .description {
              font-size: 14.19px;
              margin-top: 20.05px;
            }

            .landing-project-preview .code-pane {
              grid-row: 2/3;
              background-color: rgb(86, 34, 108);
              overflow: scroll;
            }

            .landing-project-preview .code-pane code {
              white-space: break-spaces;
            }
          }

          .landing-project-preview {
            background-color: #36204cff;
          }

          .landing-project-preview .project-icons {
            height: 35.83px;
            display: flex;
          }

          .landing-project-preview .project-icons > * {
            display: inline-flex;
          }

          .landing-project-preview .project-icons > *:not(:last-child) {
            margin-right: 25px;
          }

          .landing-project-preview .text-pane .project-icons img {
            max-height: 100%;
          }

          @media only screen and (min-width: 820px) {
            .center-landing {
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              align-items: center;
            }

            .art {
              width: 42%;
              position: relative;
            }

            .art > .art-bg {
              position: absolute;
              top: 0;
              right: 0;
              z-index: -10;
              transform: translateX(-12px);
            }

            .art > .art-bg > img {
              max-width: 100%;
            }

            .description > * {
              display: block;
            }

            .description .fullname {
              font-size: 94.7px;
              font-family: Ping LCG;
              line-height: 100%;
              font-weight: 800;
              color: var(--fill-color);
            }

            .description .profession {
              font-size: 36px;
              font-family: Ping LCG;
              font-weight: 100;
              font-weight: 200;
              line-height: 100%;
              color: grey;
            }

            .down-arrow > * {
              width: 28px;
              height: 28px;
              animation: MoveUpDown 0.4s linear infinite;
            }

            .landing-project-preview {
              padding: 92.2px 0px 98px 62.66px;
              background-color: #36204cff;
              display: grid;
              height: 100%;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr auto;
              gap: 0 131.88px;
            }

            .landing-project-preview .text-pane {
              color: white;
              font-weight: normal;
            }

            .landing-project-preview .text-pane span {
              display: block;
            }

            .landing-project-preview .text-pane .name {
              font-family: Ping LCG;
              font-weight: 800;
              line-height: 100%;
              color: var(--fg-color);
              font-size: 30px;
              margin-bottom: 8px;
            }

            .landing-project-preview .text-pane .subtitle {
              font-family: Ping LCG;
              font-weight: 800;
              color: white;
              font-style: italic;
              line-height: 100%;
              font-size: 22px;
              margin-bottom: 15px;
            }

            .landing-project-preview .text-pane .description {
              color: white;
              font-weight: normal;
              line-height: 135%;
              font-size: 20px;
            }

            .landing-project-preview .project-icons {
              height: 35.83px;
              display: flex;
            }

            .landing-project-preview .project-icons > * {
              display: inline-flex;
            }

            .landing-project-preview .project-icons > *:not(:last-child) {
              margin-right: 30px;
            }

            .landing-project-preview .text-pane .project-icons img {
              max-height: 100%;
            }

            .landing-project-preview .code-pane {
              background-color: #56226cff;
              height: 100%;
              color: white;
              box-sizing: border-box;
              position: relative;
              grid-column: 2/3;
              grid-row: 1/3;
            }

            .landing-project-preview .code-pane > * {
              padding: 22.3px 120px 45.9px 35.74px;
              box-sizing: border-box;
              height: 100%;
              width: 100%;
            }
          }

          .take-up {
            width: 100%;
            display: inline-block;
            text-align: center;
            font-family: Ping LCG;
            font-weight: 100;
            font-size: 36px;
          }

          .cv-button a {
            display: inline-block;
            padding: 10px 16px 12px 17px;
            border: 1px var(--fg-color) solid;
            color: var(--fg-color);
            font-family: Ping LCG;
            font-weight: bold;
          }

          .grabber {
            height: 100%;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }

          .grabber > *:not(:first-child) {
            margin-top: 20px;
          }

          .question {
            font-size: 42px;
            font-weight: 800;
            color: var(--fg-color);
            line-height: 100%;
          }

          .mark {
            font-size: 30px;
            font-family: Ping LCG;
            font-weight: 200;
            line-height: 100%;
          }

          @keyframes MoveUpDown {
            0%,
            100% {
            }
            50% {
              transform: translateY(15px);
            }
          }
        `}render(){return r.html` <switcher-layout>
          <layout-central class="page">
            <div slot="center" class="center-landing">
              <div class="art">
                <div class="art-bg">
                  <img src="${d()}" />
                </div>

                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 545 322"
                  style="enable-background:new 0 0 545 322;"
                  xml:space="preserve"
                >
                  <style type="text/css">
                    .st0 {
                      enable-background: new;
                    }
                  </style>
                  <g class="st0">
                    <path
                      class="st1"
                      d="M0.3,161.4v-40.2l166.9-92.5v65.8l-98.4,46.9l98.4,46.9v66.1L0.3,161.4z"
                    />
                    <path
                      class="st1"
                      d="M287.3,0h61.4l-90.6,322.5h-61.4L287.3,0z"
                    />
                    <path
                      class="st1"
                      d="M377.9,188.2l98.4-46.9l-98.4-46.9V28.7l166.9,92.5v40.2l-166.9,92.9V188.2z"
                    />
                  </g>
                </svg>
              </div>
              <div class="description">
                <span class="fullname">Hadi<br />Chahine</span>
                <span class="profession">Software Developer</span>
              </div>
            </div>
            <span slot="bottom" class="down-arrow">
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000">
                <g>
                  <path
                    d="M40.2,243.7l467.4,467.4l467.4-467.4l15.1,30.2L507.5,756.3L10,273.8L40.2,243.7z"
                  />
                </g>
              </svg>
            </span>
          </layout-central>
          ${h.map((({name:e,shortDescription:t,code:n,description:i,links:s})=>r.html`<div class="preview-header landing-project-preview page">
                <div class="text-pane">
                  <span class="name">${e}</span>
                  <span class="subtitle">${t}</span>
                  <span class="description">${i}</span>
                </div>
                <div class="project-icons">
                  ${s.map((({url:e})=>r.html`<a target="_blank" href="${e}"
                        ><img src="${function(e){switch(new URL(e).hostname){case"github.com":return o();case"www.npmjs.com":return c();case"aur.archlinux.org":return a()}}(e)}"
                      /></a>`))}
                </div>
                <div
                  class="code-pane"
                  @touchstart="${e=>{e.stopPropagation()}}"
                  @touchend="${e=>{e.stopPropagation()}}"
                >
                  <div>
                    <div style="height: 100%; width: 100%">
                      <pre><code class="language-c">${n}</code></pre>
                    </div>
                  </div>
                </div>
              </div>`))}
          <layout-central class="page">
            <div class="grabber" slot="center">
              <span class="question">and a lot more to be published.</span>
              <span class="mark">A career section will be added soon.</span>
              <span class="cv-button"
                ><a
                  target="_blank"
                  href="https://drive.google.com/file/d/1n2eVrWrdCXLzuDlwvnxwQGuFKQkrubkg/view?usp=sharing"
                  >Resume</a
                ></span
              >
            </div>
            <span slot="bottom" class="down-arrow">
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000">
                <g transform="rotate(180 500 500)">
                  <path
                    d="M40.2,243.7l467.4,467.4l467.4-467.4l15.1,30.2L507.5,756.3L10,273.8L40.2,243.7z"
                  />
                </g>
              </svg>
            </span>
          </layout-central>
        </switcher-layout>`}}),"landing-screen");var h;n(951),document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px"),window.addEventListener("resize",(()=>{document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px")})),new(0,n(219).F)(document.getElementById("main")).setRoutes({path:"/",children:[{path:"/",component:p},{path:"/about",component:"about-screen"}]})},476:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CSSResult:()=>he,LitElement:()=>ve,SVGTemplateResult:()=>E,TemplateResult:()=>S,UpdatingElement:()=>J,css:()=>ge,customElement:()=>Q,defaultConverter:()=>X,eventOptions:()=>ae,html:()=>F,internalProperty:()=>te,notEqual:()=>Y,property:()=>ee,query:()=>ne,queryAll:()=>ie,queryAssignedNodes:()=>ue,queryAsync:()=>re,supportsAdoptingStyleSheets:()=>de,svg:()=>V,unsafeCSS:()=>fe});const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},o=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${o}--\x3e`,a=new RegExp(`${o}|${s}`),l="$lit$";class c{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],i=document.createTreeWalker(t.content,133,null,!1);let s=0,c=-1,d=0;const{strings:f,values:{length:g}}=e;for(;d<g;){const e=i.nextNode();if(null!==e){if(c++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)u(t[e].name,l)&&r++;for(;r-- >0;){const t=f[d],n=h.exec(t)[2],r=n.toLowerCase()+l,i=e.getAttribute(r);e.removeAttribute(r);const o=i.split(a);this.parts.push({type:"attribute",index:c,name:n,strings:o}),d+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(o)>=0){const r=e.parentNode,i=t.split(a),o=i.length-1;for(let t=0;t<o;t++){let n,o=i[t];if(""===o)n=p();else{const e=h.exec(o);null!==e&&u(e[2],l)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-l.length)+e[3]),n=document.createTextNode(o)}r.insertBefore(n,e),this.parts.push({type:"node",index:++c})}""===i[o]?(r.insertBefore(p(),e),n.push(e)):e.data=i[o],d+=o}}else if(8===e.nodeType)if(e.data===o){const t=e.parentNode;null!==e.previousSibling&&c!==s||(c++,t.insertBefore(p(),e)),s=c,this.parts.push({type:"node",index:c}),null===e.nextSibling?e.data="":(n.push(e),c--),d++}else{let t=-1;for(;-1!==(t=e.data.indexOf(o,t+1));)this.parts.push({type:"node",index:-1}),d++}}else i.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const u=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},d=e=>-1!==e.index,p=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function f(e,t){const{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,133,null,!1);let o=m(r),s=r[o],a=-1,l=0;const c=[];let u=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(c.push(e),null===u&&(u=e)),null!==u&&l++;void 0!==s&&s.index===a;)s.index=null!==u?-1:s.index-l,o=m(r,o),s=r[o]}c.forEach((e=>e.parentNode.removeChild(e)))}const g=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},m=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(d(t))return n}return-1},v=new WeakMap,w=e=>"function"==typeof e&&v.has(e),y={},_={};class x{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let o,s=0,a=0,l=i.nextNode();for(;s<n.length;)if(o=n[s],d(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=t.pop(),l=i.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}const b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),C=` ${o} `;class S{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const a=h.exec(e);t+=null===a?e+(n?C:s):e.substr(0,a.index)+a[1]+a[2]+l+a[3]+o}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==b&&(t=b.createHTML(t)),e.innerHTML=t,e}}class E extends S{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),((e,t,n=null,r=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,r),t=n}})(t,n.firstChild),e}}const P=e=>null===e||!("object"==typeof e||"function"==typeof e),A=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class k{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new T(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!A(e))return e}let r="";for(let i=0;i<t;i++){r+=e[i];const t=n[i];if(void 0!==t){const e=t.value;if(P(e)||!A(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class T{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||P(e)&&e===this.value||(this.value=e,w(e)||(this.committer.dirty=!0))}commit(){for(;w(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class N{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(p()),this.endNode=e.appendChild(p())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=p()),e.__insert(this.endNode=p())}insertAfterPart(e){e.__insert(this.startNode=p()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;w(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(P(e)?e!==this.value&&this.__commitText(e):e instanceof S?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):A(e)?this.__commitIterable(e):e===_?(this.value=_,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof x&&this.value.template===t)this.value.update(e.values);else{const n=new x(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const i of e)n=t[r],void 0===n&&(n=new N(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(i),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class O{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;w(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class L extends k{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new j(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class j extends T{}let M=!1;(()=>{try{const e={get capture(){return M=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class R{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;w(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=I(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const I=e=>e&&(M?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function D(e){let t=B.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},B.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(o);return n=t.keyString.get(r),void 0===n&&(n=new c(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const B=new Map,U=new WeakMap,$=new class{handleAttributeExpressions(e,t,n,r){const i=t[0];return"."===i?new L(e,t.slice(1),n).parts:"@"===i?[new R(e,t.slice(1),r.eventContext)]:"?"===i?[new O(e,t.slice(1),n)]:new k(e,t,n).parts}handleTextExpression(e){return new N(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const F=(e,...t)=>new S(e,t,"html",$),V=(e,...t)=>new E(e,t,"svg",$),z=(e,t)=>`${e}--${t}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const q=e=>t=>{const n=z(t.type,e);let r=B.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},B.set(n,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(o);if(i=r.keyString.get(s),void 0===i){const n=t.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(n,e),i=new c(t,n),r.keyString.set(s,i)}return r.stringsArray.set(t.strings,i),i},G=["html","svg"],W=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const X={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Y=(e,t)=>t!==e&&(t==t||e==e),K={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Y};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=K){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const i=this[e];this[t]=r,this.requestUpdateInternal(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||K}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=Y){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||X,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||X.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=K){const r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let r=!0;if(void 0!==e){const i=this.constructor;n=n||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}J.finalized=!0;const Q=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),Z=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function ee(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):Z(e,t)}function te(e){return ee({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}function ne(e,t){return(n,r)=>{const i={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof r?Symbol():`__${r}`;i.get=function(){return void 0===this[t]&&(this[t]=this.renderRoot.querySelector(e)),this[t]}}return void 0!==r?oe(i,n,r):se(i,n)}}function re(e){return(t,n)=>{const r={async get(){return await this.updateComplete,this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==n?oe(r,t,n):se(r,t)}}function ie(e){return(t,n)=>{const r={get(){return this.renderRoot.querySelectorAll(e)},enumerable:!0,configurable:!0};return void 0!==n?oe(r,t,n):se(r,t)}}const oe=(e,t,n)=>{Object.defineProperty(t,n,e)},se=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function ae(e){return(t,n)=>void 0!==n?((e,t,n)=>{Object.assign(t[n],e)})(e,t,n):((e,t)=>Object.assign(Object.assign({},t),{finisher(n){Object.assign(n.prototype[t.key],e)}}))(e,t)}const le=Element.prototype,ce=le.msMatchesSelector||le.webkitMatchesSelector;function ue(e="",t=!1,n=""){return(r,i)=>{const o={get(){const r="slot"+(e?`[name=${e}]`:":not([name])"),i=this.renderRoot.querySelector(r);let o=i&&i.assignedNodes({flatten:t});return o&&n&&(o=o.filter((e=>e.nodeType===Node.ELEMENT_NODE&&e.matches?e.matches(n):ce.call(e,n)))),o},enumerable:!0,configurable:!0};return void 0!==i?oe(o,r,i):se(o,r)}}const de=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pe=Symbol();class he{constructor(e,t){if(t!==pe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(de?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const fe=e=>new he(String(e),pe),ge=(e,...t)=>{const n=t.reduce(((t,n,r)=>t+(e=>{if(e instanceof he)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]);return new he(n,pe)};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const me={};class ve extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight(((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e)),n),n=t(e,new Set),r=[];n.forEach((e=>r.unshift(e))),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!de){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return fe(t)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?de?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==me&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return me}}ve.finalized=!0,ve.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,o=U.has(t),s=H&&11===t.nodeType&&!!t.host,a=s&&!W.has(r),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=U.get(t);void 0===r&&(i(t,t.firstChild),U.set(t,r=new N(Object.assign({templateFactory:D},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:q(r)},n)),a){const e=U.get(l);U.delete(l);((e,t,n)=>{W.add(e);const r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<o;e++){const t=i[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{G.forEach((t=>{const n=B.get(z(t,e));void 0!==n&&n.keyString.forEach((e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{n.add(e)})),f(e,n)}))}))})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:i}=e;if(null==n)return void r.appendChild(t);const o=document.createTreeWalker(r,133,null,!1);let s=m(i),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===n&&(a=g(t),n.parentNode.insertBefore(t,n));-1!==s&&i[s].index===l;){if(a>0){for(;-1!==s;)i[s].index+=a,s=m(i,s);return}s=m(i,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),f(n,e)}})(r,l,e.value instanceof x?e.value.template:void 0),i(t,t.firstChild),t.appendChild(l),U.set(t,e)}!o&&s&&window.ShadyCSS.styleElement(t.host)}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="",n(593),n(152)})();