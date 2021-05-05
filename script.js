!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";n.r(t),n.d(t,"defaultConverter",(function(){return X})),n.d(t,"notEqual",(function(){return Y})),n.d(t,"UpdatingElement",(function(){return Q})),n.d(t,"customElement",(function(){return K})),n.d(t,"property",(function(){return ee})),n.d(t,"internalProperty",(function(){return te})),n.d(t,"query",(function(){return ne})),n.d(t,"queryAsync",(function(){return re})),n.d(t,"queryAll",(function(){return ie})),n.d(t,"eventOptions",(function(){return se})),n.d(t,"queryAssignedNodes",(function(){return ue})),n.d(t,"html",(function(){return B})),n.d(t,"svg",(function(){return $})),n.d(t,"TemplateResult",(function(){return C})),n.d(t,"SVGTemplateResult",(function(){return S})),n.d(t,"supportsAdoptingStyleSheets",(function(){return de})),n.d(t,"CSSResult",(function(){return fe})),n.d(t,"unsafeCSS",(function(){return he})),n.d(t,"css",(function(){return ge})),n.d(t,"LitElement",(function(){return ve}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},o=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${o}--\x3e`,s=new RegExp(`${o}|${a}`);class l{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],i=document.createTreeWalker(t.content,133,null,!1);let a=0,l=-1,u=0;const{strings:f,values:{length:h}}=e;for(;u<h;){const e=i.nextNode();if(null!==e){if(l++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)c(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=f[u],n=p.exec(t)[2],r=n.toLowerCase()+"$lit$",i=e.getAttribute(r);e.removeAttribute(r);const o=i.split(s);this.parts.push({type:"attribute",index:l,name:n,strings:o}),u+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(o)>=0){const r=e.parentNode,i=t.split(s),o=i.length-1;for(let t=0;t<o;t++){let n,o=i[t];if(""===o)n=d();else{const e=p.exec(o);null!==e&&c(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(o)}r.insertBefore(n,e),this.parts.push({type:"node",index:++l})}""===i[o]?(r.insertBefore(d(),e),n.push(e)):e.data=i[o],u+=o}}else if(8===e.nodeType)if(e.data===o){const t=e.parentNode;null!==e.previousSibling&&l!==a||(l++,t.insertBefore(d(),e)),a=l,this.parts.push({type:"node",index:l}),null===e.nextSibling?e.data="":(n.push(e),l--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(o,t+1));)this.parts.push({type:"node",index:-1}),u++}}else i.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const c=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},u=e=>-1!==e.index,d=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function f(e,t){const{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,133,null,!1);let o=g(r),a=r[o],s=-1,l=0;const c=[];let u=null;for(;i.nextNode();){s++;const e=i.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(c.push(e),null===u&&(u=e)),null!==u&&l++;void 0!==a&&a.index===s;)a.index=null!==u?-1:a.index-l,o=g(r,o),a=r[o]}c.forEach(e=>e.parentNode.removeChild(e))}const h=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},g=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(u(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,v=e=>"function"==typeof e&&m.has(e),y={},x={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let o,a=0,s=0,l=i.nextNode();for(;a<n.length;)if(o=n[a],u(o)){for(;s<o.index;)s++,"TEMPLATE"===l.nodeName&&(t.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=t.pop(),l=i.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),_=` ${o} `;class C{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const s=p.exec(e);t+=null===s?e+(n?_:a):e.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+o}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==w&&(t=w.createHTML(t)),e.innerHTML=t,e}}class S extends C{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),((e,t,n=null,r=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,r),t=n}})(t,n.firstChild),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=e=>null===e||!("object"==typeof e||"function"==typeof e),E=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class k{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new A(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!E(e))return e}let r="";for(let i=0;i<t;i++){r+=e[i];const t=n[i];if(void 0!==t){const e=t.value;if(T(e)||!E(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class A{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||T(e)&&e===this.value||(this.value=e,v(e)||(this.committer.dirty=!0))}commit(){for(;v(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(T(e)?e!==this.value&&this.__commitText(e):e instanceof C?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):E(e)?this.__commitIterable(e):e===x?(this.value=x,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const n=new b(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const i of e)n=t[r],void 0===n&&(n=new P(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(i),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class N{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class j extends k{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new L(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class L extends A{}let O=!1;(()=>{try{const e={get capture(){return O=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class D{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=M(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const M=e=>e&&(O?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function R(e){let t=I.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},I.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(o);return n=t.keyString.get(r),void 0===n&&(n=new l(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const I=new Map,q=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const H=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,n,r){const i=t[0];if("."===i){return new j(e,t.slice(1),n).parts}if("@"===i)return[new D(e,t.slice(1),r.eventContext)];if("?"===i)return[new N(e,t.slice(1),n)];return new k(e,t,n).parts}handleTextExpression(e){return new P(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const B=(e,...t)=>new C(e,t,"html",H),$=(e,...t)=>new S(e,t,"svg",H)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,F=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const V=e=>t=>{const n=F(t.type,e);let r=I.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},I.set(n,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const a=t.strings.join(o);if(i=r.keyString.get(a),void 0===i){const n=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(n,e),i=new l(t,n),r.keyString.set(a,i)}return r.stringsArray.set(t.strings,i),i},z=["html","svg"],W=new Set,G=(e,t,n)=>{W.add(e);const r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(r,e);const a=document.createElement("style");for(let e=0;e<o;e++){const t=i[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{z.forEach(t=>{const n=I.get(F(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),f(e,n)})})})(e);const s=r.content;n?function(e,t,n=null){const{element:{content:r},parts:i}=e;if(null==n)return void r.appendChild(t);const o=document.createTreeWalker(r,133,null,!1);let a=g(i),s=0,l=-1;for(;o.nextNode();){l++;for(o.currentNode===n&&(s=h(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===l;){if(s>0){for(;-1!==a;)i[a].index+=s,a=g(i,a);return}a=g(i,a)}}}(n,a,s.firstChild):s.insertBefore(a,s.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){s.insertBefore(a,s.firstChild);const e=new Set;e.add(a),f(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const X={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Y=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Y};class Q extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const i=this[e];this[t]=r,this.requestUpdateInternal(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||J}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=Y){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||X,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||X.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=J){const r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let r=!0;if(void 0!==e){const i=this.constructor;n=n||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Q.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const K=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),Z=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function ee(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):Z(e,t)}function te(e){return ee({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}function ne(e,t){return(n,r)=>{const i={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof r?Symbol():"__"+r;i.get=function(){return void 0===this[t]&&(this[t]=this.renderRoot.querySelector(e)),this[t]}}return void 0!==r?oe(i,n,r):ae(i,n)}}function re(e){return(t,n)=>{const r={async get(){return await this.updateComplete,this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==n?oe(r,t,n):ae(r,t)}}function ie(e){return(t,n)=>{const r={get(){return this.renderRoot.querySelectorAll(e)},enumerable:!0,configurable:!0};return void 0!==n?oe(r,t,n):ae(r,t)}}const oe=(e,t,n)=>{Object.defineProperty(t,n,e)},ae=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function se(e){return(t,n)=>void 0!==n?((e,t,n)=>{Object.assign(t[n],e)})(e,t,n):((e,t)=>Object.assign(Object.assign({},t),{finisher(n){Object.assign(n.prototype[t.key],e)}}))(e,t)}const le=Element.prototype,ce=le.msMatchesSelector||le.webkitMatchesSelector;function ue(e="",t=!1,n=""){return(r,i)=>{const o={get(){const r="slot"+(e?`[name=${e}]`:":not([name])"),i=this.renderRoot.querySelector(r);let o=i&&i.assignedNodes({flatten:t});return o&&n&&(o=o.filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.matches?e.matches(n):ce.call(e,n))),o},enumerable:!0,configurable:!0};return void 0!==i?oe(o,r,i):ae(o,r)}}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const de=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pe=Symbol();class fe{constructor(e,t){if(t!==pe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(de?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const he=e=>new fe(String(e),pe),ge=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof fe)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new fe(n,pe)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const me={};class ve extends Q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!de){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return he(t)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?de?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==me&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return me}}ve.finalized=!0,ve.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,o=q.has(t),a=U&&11===t.nodeType&&!!t.host,s=a&&!W.has(r),l=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=q.get(t);void 0===r&&(i(t,t.firstChild),q.set(t,r=new P(Object.assign({templateFactory:R},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:V(r)},n)),s){const e=q.get(l);q.delete(l);const n=e.value instanceof b?e.value.template:void 0;G(r,l,n),i(t,t.firstChild),t.appendChild(l),q.set(t,e)}!o&&a&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){const r=n(8);class i{doNext(e,t){e.hide()}doBackwards(e,t){t.show()}}class o{doNext(e,t){e.hide("forwards"),t.show("forwards")}doBackwards(e,t){e.hide("backwards"),t.show("backwards")}}e.exports={createCardSwitcher:function(e){return new r(e,new i)},createSinglePaneSwitcher:function(e){return new r(e,new o)}}},function(e,t,n){n(3),e.exports=n(4)},function(e,t,n){e.exports=n.p+"index.html"},function(e,t,n){n(5);n(6),n(7),n(10),document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px"),window.addEventListener("resize",()=>{document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px")});new(0,n(11).Router)(document.getElementById("main")).setRoutes({path:"/",children:[{path:"/",component:"landing-screen"},{path:"/about",component:"about-screen"}]})},function(e,t,n){var r;
/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */!function(t,n){"use strict";"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(n,i){"use strict";var o=[],a=Object.getPrototypeOf,s=o.slice,l=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},c=o.push,u=o.indexOf,d={},p=d.toString,f=d.hasOwnProperty,h=f.toString,g=h.call(Object),m={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},y=function(e){return null!=e&&e===e.window},x=n.document,b={type:!0,src:!0,nonce:!0,noModule:!0};function w(e,t,n){var r,i,o=(n=n||x).createElement("script");if(o.text=e,t)for(r in b)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function _(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[p.call(e)]||"object":typeof e}var C=function(e,t){return new C.fn.init(e,t)};function S(e){var t=!!e&&"length"in e&&e.length,n=_(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}C.fn=C.prototype={jquery:"3.5.1",constructor:C,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=C.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return C.each(this,e)},map:function(e){return this.pushStack(C.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(C.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(C.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:o.sort,splice:o.splice},C.extend=C.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===l&&(a=this,s--);s<l;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(c&&r&&(C.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||C.isPlainObject(n)?n:{},i=!1,a[t]=C.extend(c,o,r)):void 0!==r&&(a[t]=r));return a},C.extend({expando:"jQuery"+("3.5.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==p.call(e))&&(!(t=a(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&h.call(n)===g)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){w(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(S(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(S(Object(e))?C.merge(n,"string"==typeof e?[e]:e):c.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(S(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return l(a)},guid:1,support:m}),"function"==typeof Symbol&&(C.fn[Symbol.iterator]=o[Symbol.iterator]),C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){d["[object "+t+"]"]=t.toLowerCase()}));var T=
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
function(e){var t,n,r,i,o,a,s,l,c,u,d,p,f,h,g,m,v,y,x,b="sizzle"+1*new Date,w=e.document,_=0,C=0,S=le(),T=le(),E=le(),k=le(),A=function(e,t){return e===t&&(d=!0),0},P={}.hasOwnProperty,N=[],j=N.pop,L=N.push,O=N.push,D=N.slice,M=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",I="[\\x20\\t\\r\\n\\f]",q="(?:\\\\[\\da-fA-F]{1,6}"+I+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",H="\\["+I+"*("+q+")(?:"+I+"*([*^$|!~]?=)"+I+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+q+"))|)"+I+"*\\]",B=":("+q+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+H+")*)|.*)\\)|)",$=new RegExp(I+"+","g"),F=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g"),U=new RegExp("^"+I+"*,"+I+"*"),V=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),z=new RegExp(I+"|>"),W=new RegExp(B),G=new RegExp("^"+q+"$"),X={ID:new RegExp("^#("+q+")"),CLASS:new RegExp("^\\.("+q+")"),TAG:new RegExp("^("+q+"|[*])"),ATTR:new RegExp("^"+H),PSEUDO:new RegExp("^"+B),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,J=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+I+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){p()},ae=be((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{O.apply(N=D.call(w.childNodes),w.childNodes),N[w.childNodes.length].nodeType}catch(e){O={apply:N.length?function(e,t){L.apply(e,D.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function se(e,t,r,i){var o,s,c,u,d,h,v,y=t&&t.ownerDocument,w=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return r;if(!i&&(p(t),t=t||f,g)){if(11!==w&&(d=Z.exec(e)))if(o=d[1]){if(9===w){if(!(c=t.getElementById(o)))return r;if(c.id===o)return r.push(c),r}else if(y&&(c=y.getElementById(o))&&x(t,c)&&c.id===o)return r.push(c),r}else{if(d[2])return O.apply(r,t.getElementsByTagName(e)),r;if((o=d[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!k[e+" "]&&(!m||!m.test(e))&&(1!==w||"object"!==t.nodeName.toLowerCase())){if(v=e,y=t,1===w&&(z.test(e)||V.test(e))){for((y=ee.test(e)&&ve(t.parentNode)||t)===t&&n.scope||((u=t.getAttribute("id"))?u=u.replace(re,ie):t.setAttribute("id",u=b)),s=(h=a(e)).length;s--;)h[s]=(u?"#"+u:":scope")+" "+xe(h[s]);v=h.join(",")}try{return O.apply(r,y.querySelectorAll(v)),r}catch(t){k(e,!0)}finally{u===b&&t.removeAttribute("id")}}}return l(e.replace(F,"$1"),t,r,i)}function le(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function ce(e){return e[b]=!0,e}function ue(e){var t=f.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function de(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function he(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ge(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ae(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function me(e){return ce((function(t){return t=+t,ce((function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))}))}))}function ve(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=se.support={},o=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},p=se.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!=f&&9===a.nodeType&&a.documentElement?(h=(f=a).documentElement,g=!o(f),w!=f&&(i=f.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",oe,!1):i.attachEvent&&i.attachEvent("onunload",oe)),n.scope=ue((function(e){return h.appendChild(e).appendChild(f.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.attributes=ue((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=ue((function(e){return e.appendChild(f.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=K.test(f.getElementsByClassName),n.getById=ue((function(e){return h.appendChild(e).id=b,!f.getElementsByName||!f.getElementsByName(b).length})),n.getById?(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],m=[],(n.qsa=K.test(f.querySelectorAll))&&(ue((function(e){var t;h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+I+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+I+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+b+"-]").length||m.push("~="),(t=f.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\["+I+"*name"+I+"*="+I+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),ue((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=f.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+I+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")}))),(n.matchesSelector=K.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue((function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),v.push("!=",B)})),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),t=K.test(h.compareDocumentPosition),x=t||K.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},A=t?function(e,t){if(e===t)return d=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e==f||e.ownerDocument==w&&x(w,e)?-1:t==f||t.ownerDocument==w&&x(w,t)?1:u?M(u,e)-M(u,t):0:4&r?-1:1)}:function(e,t){if(e===t)return d=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==f?-1:t==f?1:i?-1:o?1:u?M(u,e)-M(u,t):0;if(i===o)return pe(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?pe(a[r],s[r]):a[r]==w?-1:s[r]==w?1:0},f):f},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(p(e),n.matchesSelector&&g&&!k[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){k(t,!0)}return se(t,f,null,[e]).length>0},se.contains=function(e,t){return(e.ownerDocument||e)!=f&&p(e),x(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=f&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&P.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,r=[],i=0,o=0;if(d=!n.detectDuplicates,u=!n.sortStable&&e.slice(0),e.sort(A),d){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return u=null,e},i=se.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=se.selectors={cacheLength:50,createPseudo:ce,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return X.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&W.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=S[e+" "];return t||(t=new RegExp("(^|"+I+")"+e+"("+I+"|$)"))&&S(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=se.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var c,u,d,p,f,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s,x=!1;if(m){if(o){for(;g;){for(p=t;p=p[g];)if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&y){for(x=(f=(c=(u=(d=(p=m)[b]||(p[b]={}))[p.uniqueID]||(d[p.uniqueID]={}))[e]||[])[0]===_&&c[1])&&c[2],p=f&&m.childNodes[f];p=++f&&p&&p[g]||(x=f=0)||h.pop();)if(1===p.nodeType&&++x&&p===t){u[e]=[_,f,x];break}}else if(y&&(x=f=(c=(u=(d=(p=t)[b]||(p[b]={}))[p.uniqueID]||(d[p.uniqueID]={}))[e]||[])[0]===_&&c[1]),!1===x)for(;(p=++f&&p&&p[g]||(x=f=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++x||(y&&((u=(d=p[b]||(p[b]={}))[p.uniqueID]||(d[p.uniqueID]={}))[e]=[_,x]),p!==t)););return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ce((function(e,n){for(var r,o=i(e,t),a=o.length;a--;)e[r=M(e,o[a])]=!(n[r]=o[a])})):function(e){return i(e,0,n)}):i}},pseudos:{not:ce((function(e){var t=[],n=[],r=s(e.replace(F,"$1"));return r[b]?ce((function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))})):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}})),has:ce((function(e){return function(t){return se(e,t).length>0}})),contains:ce((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||i(t)).indexOf(e)>-1}})),lang:ce((function(e){return G.test(e||"")||se.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return J.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:me((function(){return[0]})),last:me((function(e,t){return[t-1]})),eq:me((function(e,t,n){return[n<0?n+t:n]})),even:me((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:me((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:me((function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e})),gt:me((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e}))}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=he(t);function ye(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,l){var c,u,d,p=[_,s];if(l){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,l))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(u=(d=t[b]||(t[b]={}))[t.uniqueID]||(d[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((c=u[o])&&c[0]===_&&c[1]===s)return p[2]=c[2];if(u[o]=p,p[2]=e(t,n,l))return!0}return!1}}function we(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function _e(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,c=null!=t;s<l;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),c&&t.push(s)));return a}function Ce(e,t,n,r,i,o){return r&&!r[b]&&(r=Ce(r)),i&&!i[b]&&(i=Ce(i,o)),ce((function(o,a,s,l){var c,u,d,p=[],f=[],h=a.length,g=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:_e(g,p,e,s,l),v=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,v,s,l),r)for(c=_e(v,f),r(c,[],s,l),u=c.length;u--;)(d=c[u])&&(v[f[u]]=!(m[f[u]]=d));if(o){if(i||e){if(i){for(c=[],u=v.length;u--;)(d=v[u])&&c.push(m[u]=d);i(null,v=[],c,l)}for(u=v.length;u--;)(d=v[u])&&(c=i?M(o,d):p[u])>-1&&(o[c]=!(a[c]=d))}}else v=_e(v===a?v.splice(h,v.length):v),i?i(null,a,v,l):O.apply(a,v)}))}function Se(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],l=a?1:0,u=be((function(e){return e===t}),s,!0),d=be((function(e){return M(t,e)>-1}),s,!0),p=[function(e,n,r){var i=!a&&(r||n!==c)||((t=n).nodeType?u(e,n,r):d(e,n,r));return t=null,i}];l<o;l++)if(n=r.relative[e[l].type])p=[be(we(p),n)];else{if((n=r.filter[e[l].type].apply(null,e[l].matches))[b]){for(i=++l;i<o&&!r.relative[e[i].type];i++);return Ce(l>1&&we(p),l>1&&xe(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(F,"$1"),n,l<i&&Se(e.slice(l,i)),i<o&&Se(e=e.slice(i)),i<o&&xe(e))}p.push(n)}return we(p)}return ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=se.tokenize=function(e,t){var n,i,o,a,s,l,c,u=T[e+" "];if(u)return t?0:u.slice(0);for(s=e,l=[],c=r.preFilter;s;){for(a in n&&!(i=U.exec(s))||(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),n=!1,(i=V.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(F," ")}),s=s.slice(n.length)),r.filter)!(i=X[a].exec(s))||c[a]&&!(i=c[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?se.error(e):T(e,l).slice(0)},s=se.compile=function(e,t){var n,i=[],o=[],s=E[e+" "];if(!s){for(t||(t=a(e)),n=t.length;n--;)(s=Se(t[n]))[b]?i.push(s):o.push(s);(s=E(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,l,u){var d,h,m,v=0,y="0",x=o&&[],b=[],w=c,C=o||i&&r.find.TAG("*",u),S=_+=null==w?1:Math.random()||.1,T=C.length;for(u&&(c=a==f||a||u);y!==T&&null!=(d=C[y]);y++){if(i&&d){for(h=0,a||d.ownerDocument==f||(p(d),s=!g);m=e[h++];)if(m(d,a||f,s)){l.push(d);break}u&&(_=S)}n&&((d=!m&&d)&&v--,o&&x.push(d))}if(v+=y,n&&y!==v){for(h=0;m=t[h++];)m(x,b,a,s);if(o){if(v>0)for(;y--;)x[y]||b[y]||(b[y]=j.call(l));b=_e(b)}O.apply(l,b),u&&!o&&b.length>0&&v+t.length>1&&se.uniqueSort(l)}return u&&(_=S,c=w),x};return n?ce(o):o}(o,i))).selector=e}return s},l=se.select=function(e,t,n,i){var o,l,c,u,d,p="function"==typeof e&&e,f=!i&&a(e=p.selector||e);if(n=n||[],1===f.length){if((l=f[0]=f[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&9===t.nodeType&&g&&r.relative[l[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(o=X.needsContext.test(e)?0:l.length;o--&&(c=l[o],!r.relative[u=c.type]);)if((d=r.find[u])&&(i=d(c.matches[0].replace(te,ne),ee.test(l[0].type)&&ve(t.parentNode)||t))){if(l.splice(o,1),!(e=i.length&&xe(l)))return O.apply(n,i),n;break}}return(p||s(e,f))(i,t,!g,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},n.sortStable=b.split("").sort(A).join("")===b,n.detectDuplicates=!!d,p(),n.sortDetached=ue((function(e){return 1&e.compareDocumentPosition(f.createElement("fieldset"))})),ue((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||de("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&ue((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||de("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),ue((function(e){return null==e.getAttribute("disabled")}))||de(R,(function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null})),se}(n);C.find=T,C.expr=T.selectors,C.expr[":"]=C.expr.pseudos,C.uniqueSort=C.unique=T.uniqueSort,C.text=T.getText,C.isXMLDoc=T.isXML,C.contains=T.contains,C.escapeSelector=T.escape;var E=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&C(e).is(n))break;r.push(e)}return r},k=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},A=C.expr.match.needsContext;function P(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return v(t)?C.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?C.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?C.grep(e,(function(e){return u.call(t,e)>-1!==n})):C.filter(t,e,n)}C.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?C.find.matchesSelector(r,e)?[r]:[]:C.find.matches(e,C.grep(t,(function(e){return 1===e.nodeType})))},C.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(C(e).filter((function(){for(t=0;t<r;t++)if(C.contains(i[t],this))return!0})));for(n=this.pushStack([]),t=0;t<r;t++)C.find(e,i[t],n);return r>1?C.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&A.test(e)?C(e):e||[],!1).length}});var L,O=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(C.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||L,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:O.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof C?t[0]:t,C.merge(this,C.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:x,!0)),N.test(r[1])&&C.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=x.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(C):C.makeArray(e,this)}).prototype=C.fn,L=C(x);var D=/^(?:parents|prev(?:Until|All))/,M={children:!0,contents:!0,next:!0,prev:!0};function R(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}C.fn.extend({has:function(e){var t=C(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(C.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&C(e);if(!A.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&C.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?C.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(C(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(C.uniqueSort(C.merge(this.get(),C(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),C.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return E(e,"parentNode")},parentsUntil:function(e,t,n){return E(e,"parentNode",n)},next:function(e){return R(e,"nextSibling")},prev:function(e){return R(e,"previousSibling")},nextAll:function(e){return E(e,"nextSibling")},prevAll:function(e){return E(e,"previousSibling")},nextUntil:function(e,t,n){return E(e,"nextSibling",n)},prevUntil:function(e,t,n){return E(e,"previousSibling",n)},siblings:function(e){return k((e.parentNode||{}).firstChild,e)},children:function(e){return k(e.firstChild)},contents:function(e){return null!=e.contentDocument&&a(e.contentDocument)?e.contentDocument:(P(e,"template")&&(e=e.content||e),C.merge([],e.childNodes))}},(function(e,t){C.fn[e]=function(n,r){var i=C.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=C.filter(r,i)),this.length>1&&(M[e]||C.uniqueSort(i),D.test(e)&&i.reverse()),this.pushStack(i)}}));var I=/[^\x20\t\r\n\f]+/g;function q(e){return e}function H(e){throw e}function B(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}C.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return C.each(e.match(I)||[],(function(e,n){t[n]=!0})),t}(e):C.extend({},e);var t,n,r,i,o=[],a=[],s=-1,l=function(){for(i=i||e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},c={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){C.each(n,(function(n,r){v(r)?e.unique&&c.has(r)||o.push(r):r&&r.length&&"string"!==_(r)&&t(r)}))}(arguments),n&&!t&&l()),this},remove:function(){return C.each(arguments,(function(e,t){for(var n;(n=C.inArray(t,o,n))>-1;)o.splice(n,1),n<=s&&s--})),this},has:function(e){return e?C.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},C.extend({Deferred:function(e){var t=[["notify","progress",C.Callbacks("memory"),C.Callbacks("memory"),2],["resolve","done",C.Callbacks("once memory"),C.Callbacks("once memory"),0,"resolved"],["reject","fail",C.Callbacks("once memory"),C.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return C.Deferred((function(n){C.each(t,(function(t,r){var i=v(e[r[4]])&&e[r[4]];o[r[1]]((function(){var e=i&&i.apply(this,arguments);e&&v(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(e,r,i){var o=0;function a(e,t,r,i){return function(){var s=this,l=arguments,c=function(){var n,c;if(!(e<o)){if((n=r.apply(s,l))===t.promise())throw new TypeError("Thenable self-resolution");c=n&&("object"==typeof n||"function"==typeof n)&&n.then,v(c)?i?c.call(n,a(o,t,q,i),a(o,t,H,i)):(o++,c.call(n,a(o,t,q,i),a(o,t,H,i),a(o,t,q,t.notifyWith))):(r!==q&&(s=void 0,l=[n]),(i||t.resolveWith)(s,l))}},u=i?c:function(){try{c()}catch(n){C.Deferred.exceptionHook&&C.Deferred.exceptionHook(n,u.stackTrace),e+1>=o&&(r!==H&&(s=void 0,l=[n]),t.rejectWith(s,l))}};e?u():(C.Deferred.getStackHook&&(u.stackTrace=C.Deferred.getStackHook()),n.setTimeout(u))}}return C.Deferred((function(n){t[0][3].add(a(0,n,v(i)?i:q,n.notifyWith)),t[1][3].add(a(0,n,v(e)?e:q)),t[2][3].add(a(0,n,v(r)?r:H))})).promise()},promise:function(e){return null!=e?C.extend(e,i):i}},o={};return C.each(t,(function(e,n){var a=n[2],s=n[5];i[n[1]]=a.add,s&&a.add((function(){r=s}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),a.add(n[3].fire),o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},o[n[0]+"With"]=a.fireWith})),i.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=s.call(arguments),o=C.Deferred(),a=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?s.call(arguments):n,--t||o.resolveWith(r,i)}};if(t<=1&&(B(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||v(i[n]&&i[n].then)))return o.then();for(;n--;)B(i[n],a(n),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;C.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&$.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},C.readyException=function(e){n.setTimeout((function(){throw e}))};var F=C.Deferred();function U(){x.removeEventListener("DOMContentLoaded",U),n.removeEventListener("load",U),C.ready()}C.fn.ready=function(e){return F.then(e).catch((function(e){C.readyException(e)})),this},C.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--C.readyWait:C.isReady)||(C.isReady=!0,!0!==e&&--C.readyWait>0||F.resolveWith(x,[C]))}}),C.ready.then=F.then,"complete"===x.readyState||"loading"!==x.readyState&&!x.documentElement.doScroll?n.setTimeout(C.ready):(x.addEventListener("DOMContentLoaded",U),n.addEventListener("load",U));var V=function(e,t,n,r,i,o,a){var s=0,l=e.length,c=null==n;if("object"===_(n))for(s in i=!0,n)V(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),c&&(a?(t.call(e,r),t=null):(c=t,t=function(e,t,n){return c.call(C(e),n)})),t))for(;s<l;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:c?t.call(e):l?t(e[0],n):o},z=/^-ms-/,W=/-([a-z])/g;function G(e,t){return t.toUpperCase()}function X(e){return e.replace(z,"ms-").replace(W,G)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function J(){this.expando=C.expando+J.uid++}J.uid=1,J.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(I)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||C.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!C.isEmptyObject(t)}};var Q=new J,K=new J,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}C.extend({hasData:function(e){return K.hasData(e)||Q.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),C.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=X(r.slice(5)),te(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each((function(){K.set(this,e)})):V(this,(function(t){var n;if(o&&void 0===t)return void 0!==(n=K.get(o,e))||void 0!==(n=te(o,e))?n:void 0;this.each((function(){K.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){K.remove(this,e)}))}}),C.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,C.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=C.queue(e,t),r=n.length,i=n.shift(),o=C._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,(function(){C.dequeue(e,t)}),o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:C.Callbacks("once memory").add((function(){Q.remove(e,[t+"queue",n])}))})}}),C.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?C.queue(this[0],e):void 0===t?this:this.each((function(){var n=C.queue(this,e,t);C._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&C.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){C.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=C.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ne=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,re=new RegExp("^(?:([+-])=|)("+ne+")([a-z%]*)$","i"),ie=["Top","Right","Bottom","Left"],oe=x.documentElement,ae=function(e){return C.contains(e.ownerDocument,e)},se={composed:!0};oe.getRootNode&&(ae=function(e){return C.contains(e.ownerDocument,e)||e.getRootNode(se)===e.ownerDocument});var le=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ae(e)&&"none"===C.css(e,"display")};function ce(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return C.css(e,t,"")},l=s(),c=n&&n[3]||(C.cssNumber[t]?"":"px"),u=e.nodeType&&(C.cssNumber[t]||"px"!==c&&+l)&&re.exec(C.css(e,t));if(u&&u[3]!==c){for(l/=2,c=c||u[3],u=+l||1;a--;)C.style(e,t,u+c),(1-o)*(1-(o=s()/l||.5))<=0&&(a=0),u/=o;u*=2,C.style(e,t,u+c),n=n||[]}return n&&(u=+u||+l||0,i=n[1]?u+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=u,r.end=i)),i}var ue={};function de(e){var t,n=e.ownerDocument,r=e.nodeName,i=ue[r];return i||(t=n.body.appendChild(n.createElement(r)),i=C.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),ue[r]=i,i)}function pe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=Q.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&le(r)&&(i[o]=de(r))):"none"!==n&&(i[o]="none",Q.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}C.fn.extend({show:function(){return pe(this,!0)},hide:function(){return pe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){le(this)?C(this).show():C(this).hide()}))}});var fe,he,ge=/^(?:checkbox|radio)$/i,me=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ve=/^$|^module$|\/(?:java|ecma)script/i;fe=x.createDocumentFragment().appendChild(x.createElement("div")),(he=x.createElement("input")).setAttribute("type","radio"),he.setAttribute("checked","checked"),he.setAttribute("name","t"),fe.appendChild(he),m.checkClone=fe.cloneNode(!0).cloneNode(!0).lastChild.checked,fe.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!fe.cloneNode(!0).lastChild.defaultValue,fe.innerHTML="<option></option>",m.option=!!fe.lastChild;var ye={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function xe(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&P(e,t)?C.merge([e],n):n}function be(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ye.tbody=ye.tfoot=ye.colgroup=ye.caption=ye.thead,ye.th=ye.td,m.option||(ye.optgroup=ye.option=[1,"<select multiple='multiple'>","</select>"]);var we=/<|&#?\w+;/;function _e(e,t,n,r,i){for(var o,a,s,l,c,u,d=t.createDocumentFragment(),p=[],f=0,h=e.length;f<h;f++)if((o=e[f])||0===o)if("object"===_(o))C.merge(p,o.nodeType?[o]:o);else if(we.test(o)){for(a=a||d.appendChild(t.createElement("div")),s=(me.exec(o)||["",""])[1].toLowerCase(),l=ye[s]||ye._default,a.innerHTML=l[1]+C.htmlPrefilter(o)+l[2],u=l[0];u--;)a=a.lastChild;C.merge(p,a.childNodes),(a=d.firstChild).textContent=""}else p.push(t.createTextNode(o));for(d.textContent="",f=0;o=p[f++];)if(r&&C.inArray(o,r)>-1)i&&i.push(o);else if(c=ae(o),a=xe(d.appendChild(o),"script"),c&&be(a),n)for(u=0;o=a[u++];)ve.test(o.type||"")&&n.push(o);return d}var Ce=/^key/,Se=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Ae(e,t){return e===function(){try{return x.activeElement}catch(e){}}()==("focus"===t)}function Pe(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Pe(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return C().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=C.guid++)),e.each((function(){C.event.add(this,t,i,r,n)}))}function Ne(e,t,n){n?(Q.set(e,t,!1),C.event.add(e,t,{namespace:!1,handler:function(e){var r,i,o=Q.get(this,t);if(1&e.isTrigger&&this[t]){if(o.length)(C.event.special[t]||{}).delegateType&&e.stopPropagation();else if(o=s.call(arguments),Q.set(this,t,o),r=n(this,t),this[t](),o!==(i=Q.get(this,t))||r?Q.set(this,t,!1):i={},o!==i)return e.stopImmediatePropagation(),e.preventDefault(),i.value}else o.length&&(Q.set(this,t,{value:C.event.trigger(C.extend(o[0],C.Event.prototype),o.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,t)&&C.event.add(e,t,Ee)}C.event={global:{},add:function(e,t,n,r,i){var o,a,s,l,c,u,d,p,f,h,g,m=Q.get(e);if(Y(e))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&C.find.matchesSelector(oe,i),n.guid||(n.guid=C.guid++),(l=m.events)||(l=m.events=Object.create(null)),(a=m.handle)||(a=m.handle=function(t){return void 0!==C&&C.event.triggered!==t.type?C.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(I)||[""]).length;c--;)f=g=(s=Te.exec(t[c])||[])[1],h=(s[2]||"").split(".").sort(),f&&(d=C.event.special[f]||{},f=(i?d.delegateType:d.bindType)||f,d=C.event.special[f]||{},u=C.extend({type:f,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&C.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=l[f])||((p=l[f]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(f,a)),d.add&&(d.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,u):p.push(u),C.event.global[f]=!0)},remove:function(e,t,n,r,i){var o,a,s,l,c,u,d,p,f,h,g,m=Q.hasData(e)&&Q.get(e);if(m&&(l=m.events)){for(c=(t=(t||"").match(I)||[""]).length;c--;)if(f=g=(s=Te.exec(t[c])||[])[1],h=(s[2]||"").split(".").sort(),f){for(d=C.event.special[f]||{},p=l[f=(r?d.delegateType:d.bindType)||f]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)u=p[o],!i&&g!==u.origType||n&&n.guid!==u.guid||s&&!s.test(u.namespace)||r&&r!==u.selector&&("**"!==r||!u.selector)||(p.splice(o,1),u.selector&&p.delegateCount--,d.remove&&d.remove.call(e,u));a&&!p.length&&(d.teardown&&!1!==d.teardown.call(e,h,m.handle)||C.removeEvent(e,f,m.handle),delete l[f])}else for(f in l)C.event.remove(e,f+t[c],n,r,!0);C.isEmptyObject(l)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),l=C.event.fix(e),c=(Q.get(this,"events")||Object.create(null))[l.type]||[],u=C.event.special[l.type]||{};for(s[0]=l,t=1;t<arguments.length;t++)s[t]=arguments[t];if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(a=C.event.handlers.call(this,l,c),t=0;(i=a[t++])&&!l.isPropagationStopped();)for(l.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!l.isImmediatePropagationStopped();)l.rnamespace&&!1!==o.namespace&&!l.rnamespace.test(o.namespace)||(l.handleObj=o,l.data=o.data,void 0!==(r=((C.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(l.result=r)&&(l.preventDefault(),l.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,r,i,o,a,s=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(o=[],a={},n=0;n<l;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?C(i,this).index(c)>-1:C.find(i,this,null,[c]).length),a[i]&&o.push(r);o.length&&s.push({elem:c,handlers:o})}return c=this,l<t.length&&s.push({elem:c,handlers:t.slice(l)}),s},addProp:function(e,t){Object.defineProperty(C.Event.prototype,e,{enumerable:!0,configurable:!0,get:v(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[C.expando]?e:new C.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return ge.test(t.type)&&t.click&&P(t,"input")&&Ne(t,"click",Ee),!1},trigger:function(e){var t=this||e;return ge.test(t.type)&&t.click&&P(t,"input")&&Ne(t,"click"),!0},_default:function(e){var t=e.target;return ge.test(t.type)&&t.click&&P(t,"input")&&Q.get(t,"click")||P(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},C.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},C.Event=function(e,t){if(!(this instanceof C.Event))return new C.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&C.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[C.expando]=!0},C.Event.prototype={constructor:C.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},C.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Ce.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Se.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},C.event.addProp),C.each({focus:"focusin",blur:"focusout"},(function(e,t){C.event.special[e]={setup:function(){return Ne(this,e,Ae),!1},trigger:function(){return Ne(this,e),!0},delegateType:t}})),C.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){C.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||C.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}})),C.fn.extend({on:function(e,t,n,r){return Pe(this,e,t,n,r)},one:function(e,t,n,r){return Pe(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,C(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each((function(){C.event.remove(this,e,n,t)}))}});var je=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,Oe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function De(e,t){return P(e,"table")&&P(11!==t.nodeType?t:t.firstChild,"tr")&&C(e).children("tbody")[0]||e}function Me(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Ie(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Q.hasData(e)&&(s=Q.get(e).events))for(i in Q.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)C.event.add(t,i,s[i][n]);K.hasData(e)&&(o=K.access(e),a=C.extend({},o),K.set(t,a))}}function qe(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ge.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function He(e,t,n,r){t=l(t);var i,o,a,s,c,u,d=0,p=e.length,f=p-1,h=t[0],g=v(h);if(g||p>1&&"string"==typeof h&&!m.checkClone&&Le.test(h))return e.each((function(i){var o=e.eq(i);g&&(t[0]=h.call(this,i,o.html())),He(o,t,n,r)}));if(p&&(o=(i=_e(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(s=(a=C.map(xe(i,"script"),Me)).length;d<p;d++)c=i,d!==f&&(c=C.clone(c,!0,!0),s&&C.merge(a,xe(c,"script"))),n.call(e[d],c,d);if(s)for(u=a[a.length-1].ownerDocument,C.map(a,Re),d=0;d<s;d++)c=a[d],ve.test(c.type||"")&&!Q.access(c,"globalEval")&&C.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?C._evalUrl&&!c.noModule&&C._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},u):w(c.textContent.replace(Oe,""),c,u))}return e}function Be(e,t,n){for(var r,i=t?C.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||C.cleanData(xe(r)),r.parentNode&&(n&&ae(r)&&be(xe(r,"script")),r.parentNode.removeChild(r));return e}C.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),l=ae(e);if(!(m.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||C.isXMLDoc(e)))for(a=xe(s),r=0,i=(o=xe(e)).length;r<i;r++)qe(o[r],a[r]);if(t)if(n)for(o=o||xe(e),a=a||xe(s),r=0,i=o.length;r<i;r++)Ie(o[r],a[r]);else Ie(e,s);return(a=xe(s,"script")).length>0&&be(a,!l&&xe(e,"script")),s},cleanData:function(e){for(var t,n,r,i=C.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?C.event.remove(n,r):C.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),C.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return V(this,(function(e){return void 0===e?C.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return He(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||De(this,e).appendChild(e)}))},prepend:function(){return He(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=De(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return He(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return He(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(C.cleanData(xe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return C.clone(this,e,t)}))},html:function(e){return V(this,(function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!je.test(e)&&!ye[(me.exec(e)||["",""])[1].toLowerCase()]){e=C.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(C.cleanData(xe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return He(this,arguments,(function(t){var n=this.parentNode;C.inArray(this,e)<0&&(C.cleanData(xe(this)),n&&n.replaceChild(t,this))}),e)}}),C.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){C.fn[e]=function(e){for(var n,r=[],i=C(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),C(i[a])[t](n),c.apply(r,n.get());return this.pushStack(r)}}));var $e=new RegExp("^("+ne+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(ie.join("|"),"i");function ze(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ae(e)||(a=C.style(e,t)),!m.pixelBoxStyles()&&$e.test(a)&&Ve.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function We(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",oe.appendChild(c).appendChild(u);var e=n.getComputedStyle(u);r="1%"!==e.top,l=12===t(e.marginLeft),u.style.right="60%",a=36===t(e.right),i=36===t(e.width),u.style.position="absolute",o=12===t(u.offsetWidth/3),oe.removeChild(c),u=null}}function t(e){return Math.round(parseFloat(e))}var r,i,o,a,s,l,c=x.createElement("div"),u=x.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===u.style.backgroundClip,C.extend(m,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),a},pixelPosition:function(){return e(),r},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var e,t,r,i;return null==s&&(e=x.createElement("table"),t=x.createElement("tr"),r=x.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",r.style.height="9px",oe.appendChild(e).appendChild(t).appendChild(r),i=n.getComputedStyle(t),s=parseInt(i.height)>3,oe.removeChild(e)),s}}))}();var Ge=["Webkit","Moz","ms"],Xe=x.createElement("div").style,Ye={};function Je(e){var t=C.cssProps[e]||Ye[e];return t||(e in Xe?e:Ye[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;n--;)if((e=Ge[n]+t)in Xe)return e}(e)||e)}var Qe=/^(none|table(?!-c[ea]).+)/,Ke=/^--/,Ze={position:"absolute",visibility:"hidden",display:"block"},et={letterSpacing:"0",fontWeight:"400"};function tt(e,t,n){var r=re.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function nt(e,t,n,r,i,o){var a="width"===t?1:0,s=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=C.css(e,n+ie[a],!0,i)),r?("content"===n&&(l-=C.css(e,"padding"+ie[a],!0,i)),"margin"!==n&&(l-=C.css(e,"border"+ie[a]+"Width",!0,i))):(l+=C.css(e,"padding"+ie[a],!0,i),"padding"!==n?l+=C.css(e,"border"+ie[a]+"Width",!0,i):s+=C.css(e,"border"+ie[a]+"Width",!0,i));return!r&&o>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-s-.5))||0),l}function rt(e,t,n){var r=Fe(e),i=(!m.boxSizingReliable()||n)&&"border-box"===C.css(e,"boxSizing",!1,r),o=i,a=ze(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!m.boxSizingReliable()&&i||!m.reliableTrDimensions()&&P(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===C.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===C.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+nt(e,t,n||(i?"border":"content"),o,r,a)+"px"}function it(e,t,n,r,i){return new it.prototype.init(e,t,n,r,i)}C.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ze(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),l=Ke.test(t),c=e.style;if(l||(t=Je(s)),a=C.cssHooks[t]||C.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:c[t];"string"===(o=typeof n)&&(i=re.exec(n))&&i[1]&&(n=ce(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||l||(n+=i&&i[3]||(C.cssNumber[s]?"":"px")),m.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ke.test(t)||(t=Je(s)),(a=C.cssHooks[t]||C.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=ze(e,t,r)),"normal"===i&&t in et&&(i=et[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),C.each(["height","width"],(function(e,t){C.cssHooks[t]={get:function(e,n,r){if(n)return!Qe.test(C.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?rt(e,t,r):Ue(e,Ze,(function(){return rt(e,t,r)}))},set:function(e,n,r){var i,o=Fe(e),a=!m.scrollboxSize()&&"absolute"===o.position,s=(a||r)&&"border-box"===C.css(e,"boxSizing",!1,o),l=r?nt(e,t,r,s,o):0;return s&&a&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-nt(e,t,"border",!1,o)-.5)),l&&(i=re.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=C.css(e,t)),tt(0,n,l)}}})),C.cssHooks.marginLeft=We(m.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(ze(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),C.each({margin:"",padding:"",border:"Width"},(function(e,t){C.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+ie[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(C.cssHooks[e+t].set=tt)})),C.fn.extend({css:function(e,t){return V(this,(function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=C.css(e,t[a],!1,r);return o}return void 0!==n?C.style(e,t,n):C.css(e,t)}),e,t,arguments.length>1)}}),C.Tween=it,it.prototype={constructor:it,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||C.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(C.cssNumber[n]?"":"px")},cur:function(){var e=it.propHooks[this.prop];return e&&e.get?e.get(this):it.propHooks._default.get(this)},run:function(e){var t,n=it.propHooks[this.prop];return this.options.duration?this.pos=t=C.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):it.propHooks._default.set(this),this}},it.prototype.init.prototype=it.prototype,it.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=C.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){C.fx.step[e.prop]?C.fx.step[e.prop](e):1!==e.elem.nodeType||!C.cssHooks[e.prop]&&null==e.elem.style[Je(e.prop)]?e.elem[e.prop]=e.now:C.style(e.elem,e.prop,e.now+e.unit)}}},it.propHooks.scrollTop=it.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},C.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},C.fx=it.prototype.init,C.fx.step={};var ot,at,st=/^(?:toggle|show|hide)$/,lt=/queueHooks$/;function ct(){at&&(!1===x.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(ct):n.setTimeout(ct,C.fx.interval),C.fx.tick())}function ut(){return n.setTimeout((function(){ot=void 0})),ot=Date.now()}function dt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ie[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(e,t,n){var r,i,o=0,a=ft.prefilters.length,s=C.Deferred().always((function(){delete l.elem})),l=function(){if(i)return!1;for(var t=ot||ut(),n=Math.max(0,c.startTime+c.duration-t),r=1-(n/c.duration||0),o=0,a=c.tweens.length;o<a;o++)c.tweens[o].run(r);return s.notifyWith(e,[c,r,n]),r<1&&a?n:(a||s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c]),!1)},c=s.promise({elem:e,props:C.extend({},t),opts:C.extend(!0,{specialEasing:{},easing:C.easing._default},n),originalProperties:t,originalOptions:n,startTime:ot||ut(),duration:n.duration,tweens:[],createTween:function(t,n){var r=C.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(r),r},stop:function(t){var n=0,r=t?c.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)c.tweens[n].run(1);return t?(s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c,t])):s.rejectWith(e,[c,t]),this}}),u=c.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=C.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(u,c.opts.specialEasing);o<a;o++)if(r=ft.prefilters[o].call(c,e,u,c.opts))return v(r.stop)&&(C._queueHooks(c.elem,c.opts.queue).stop=r.stop.bind(r)),r;return C.map(u,pt,c),v(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),C.fx.timer(C.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}C.Animation=C.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ce(n.elem,e,re.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(I);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,l,c,u,d="width"in t||"height"in t,p=this,f={},h=e.style,g=e.nodeType&&le(e),m=Q.get(e,"fxshow");for(r in n.queue||(null==(a=C._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always((function(){p.always((function(){a.unqueued--,C.queue(e,"fx").length||a.empty.fire()}))}))),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}f[r]=m&&m[r]||C.style(e,r)}if((l=!C.isEmptyObject(t))||!C.isEmptyObject(f))for(r in d&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(c=m&&m.display)&&(c=Q.get(e,"display")),"none"===(u=C.css(e,"display"))&&(c?u=c:(pe([e],!0),c=e.style.display||c,u=C.css(e,"display"),pe([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===C.css(e,"float")&&(l||(p.done((function(){h.display=c})),null==c&&(u=h.display,c="none"===u?"":u)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always((function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}))),l=!1,f)l||(m?"hidden"in m&&(g=m.hidden):m=Q.access(e,"fxshow",{display:c}),o&&(m.hidden=!g),g&&pe([e],!0),p.done((function(){for(r in g||pe([e]),Q.remove(e,"fxshow"),f)C.style(e,r,f[r])}))),l=pt(g?m[r]:0,r,p),r in m||(m[r]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),C.speed=function(e,t,n){var r=e&&"object"==typeof e?C.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return C.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in C.fx.speeds?r.duration=C.fx.speeds[r.duration]:r.duration=C.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&C.dequeue(this,r.queue)},r},C.fn.extend({fadeTo:function(e,t,n,r){return this.filter(le).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=C.isEmptyObject(e),o=C.speed(t,n,r),a=function(){var t=ft(this,C.extend({},e),o);(i||Q.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",o=C.timers,a=Q.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&lt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||C.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=Q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=C.timers,a=r?r.length:0;for(n.finish=!0,C.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish}))}}),C.each(["toggle","show","hide"],(function(e,t){var n=C.fn[t];C.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(dt(t,!0),e,r,i)}})),C.each({slideDown:dt("show"),slideUp:dt("hide"),slideToggle:dt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){C.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),C.timers=[],C.fx.tick=function(){var e,t=0,n=C.timers;for(ot=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||C.fx.stop(),ot=void 0},C.fx.timer=function(e){C.timers.push(e),C.fx.start()},C.fx.interval=13,C.fx.start=function(){at||(at=!0,ct())},C.fx.stop=function(){at=null},C.fx.speeds={slow:600,fast:200,_default:400},C.fn.delay=function(e,t){return e=C.fx&&C.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,r){var i=n.setTimeout(t,e);r.stop=function(){n.clearTimeout(i)}}))},function(){var e=x.createElement("input"),t=x.createElement("select").appendChild(x.createElement("option"));e.type="checkbox",m.checkOn=""!==e.value,m.optSelected=t.selected,(e=x.createElement("input")).value="t",e.type="radio",m.radioValue="t"===e.value}();var ht,gt=C.expr.attrHandle;C.fn.extend({attr:function(e,t){return V(this,C.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){C.removeAttr(this,e)}))}}),C.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?C.prop(e,t,n):(1===o&&C.isXMLDoc(e)||(i=C.attrHooks[t.toLowerCase()]||(C.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void C.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=C.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!m.radioValue&&"radio"===t&&P(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(I);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?C.removeAttr(e,n):e.setAttribute(n,n),n}},C.each(C.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=gt[t]||C.find.attr;gt[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=gt[a],gt[a]=i,i=null!=n(e,t,r)?a:null,gt[a]=o),i}}));var mt=/^(?:input|select|textarea|button)$/i,vt=/^(?:a|area)$/i;function yt(e){return(e.match(I)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(I)||[]}C.fn.extend({prop:function(e,t){return V(this,C.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[C.propFix[e]||e]}))}}),C.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&C.isXMLDoc(e)||(t=C.propFix[t]||t,i=C.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=C.find.attr(e,"tabindex");return t?parseInt(t,10):mt.test(e.nodeName)||vt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(C.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),C.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){C.propFix[this.toLowerCase()]=this})),C.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,l=0;if(v(e))return this.each((function(t){C(this).addClass(e.call(this,t,xt(this)))}));if((t=bt(e)).length)for(;n=this[l++];)if(i=xt(n),r=1===n.nodeType&&" "+yt(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=yt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,l=0;if(v(e))return this.each((function(t){C(this).removeClass(e.call(this,t,xt(this)))}));if(!arguments.length)return this.attr("class","");if((t=bt(e)).length)for(;n=this[l++];)if(i=xt(n),r=1===n.nodeType&&" "+yt(i)+" "){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==(s=yt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):v(e)?this.each((function(n){C(this).toggleClass(e.call(this,n,xt(this),t),t)})):this.each((function(){var t,i,o,a;if(r)for(i=0,o=C(this),a=bt(e);t=a[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||((t=xt(this))&&Q.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Q.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+yt(xt(n))+" ").indexOf(t)>-1)return!0;return!1}});var wt=/\r/g;C.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=v(e),this.each((function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,C(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=C.map(i,(function(e){return null==e?"":e+""}))),(t=C.valHooks[this.type]||C.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=C.valHooks[i.type]||C.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(wt,""):null==n?"":n:void 0}}),C.extend({valHooks:{option:{get:function(e){var t=C.find.attr(e,"value");return null!=t?t:yt(C.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],l=a?o+1:i.length;for(r=o<0?l:a?o:0;r<l;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!P(n.parentNode,"optgroup"))){if(t=C(n).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=C.makeArray(t),a=i.length;a--;)((r=i[a]).selected=C.inArray(C.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),C.each(["radio","checkbox"],(function(){C.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=C.inArray(C(e).val(),t)>-1}},m.checkOn||(C.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),m.focusin="onfocusin"in n;var _t=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};C.extend(C.event,{trigger:function(e,t,r,i){var o,a,s,l,c,u,d,p,h=[r||x],g=f.call(e,"type")?e.type:e,m=f.call(e,"namespace")?e.namespace.split("."):[];if(a=p=s=r=r||x,3!==r.nodeType&&8!==r.nodeType&&!_t.test(g+C.event.triggered)&&(g.indexOf(".")>-1&&(m=g.split("."),g=m.shift(),m.sort()),c=g.indexOf(":")<0&&"on"+g,(e=e[C.expando]?e:new C.Event(g,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=m.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=null==t?[e]:C.makeArray(t,[e]),d=C.event.special[g]||{},i||!d.trigger||!1!==d.trigger.apply(r,t))){if(!i&&!d.noBubble&&!y(r)){for(l=d.delegateType||g,_t.test(l+g)||(a=a.parentNode);a;a=a.parentNode)h.push(a),s=a;s===(r.ownerDocument||x)&&h.push(s.defaultView||s.parentWindow||n)}for(o=0;(a=h[o++])&&!e.isPropagationStopped();)p=a,e.type=o>1?l:d.bindType||g,(u=(Q.get(a,"events")||Object.create(null))[e.type]&&Q.get(a,"handle"))&&u.apply(a,t),(u=c&&a[c])&&u.apply&&Y(a)&&(e.result=u.apply(a,t),!1===e.result&&e.preventDefault());return e.type=g,i||e.isDefaultPrevented()||d._default&&!1!==d._default.apply(h.pop(),t)||!Y(r)||c&&v(r[g])&&!y(r)&&((s=r[c])&&(r[c]=null),C.event.triggered=g,e.isPropagationStopped()&&p.addEventListener(g,Ct),r[g](),e.isPropagationStopped()&&p.removeEventListener(g,Ct),C.event.triggered=void 0,s&&(r[c]=s)),e.result}},simulate:function(e,t,n){var r=C.extend(new C.Event,n,{type:e,isSimulated:!0});C.event.trigger(r,null,t)}}),C.fn.extend({trigger:function(e,t){return this.each((function(){C.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return C.event.trigger(e,t,n,!0)}}),m.focusin||C.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){C.event.simulate(t,e.target,C.event.fix(e))};C.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=Q.access(r,t);i||r.addEventListener(e,n,!0),Q.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=Q.access(r,t)-1;i?Q.access(r,t,i):(r.removeEventListener(e,n,!0),Q.remove(r,t))}}}));var St=n.location,Tt={guid:Date.now()},Et=/\?/;C.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||C.error("Invalid XML: "+e),t};var kt=/\[\]$/,At=/\r?\n/g,Pt=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))C.each(t,(function(t,i){n||kt.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)}));else if(n||"object"!==_(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}C.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!C.isPlainObject(e))C.each(e,(function(){i(this.name,this.value)}));else for(n in e)jt(n,e[n],t,i);return r.join("&")},C.fn.extend({serialize:function(){return C.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=C.prop(this,"elements");return e?C.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!C(this).is(":disabled")&&Nt.test(this.nodeName)&&!Pt.test(e)&&(this.checked||!ge.test(e))})).map((function(e,t){var n=C(this).val();return null==n?null:Array.isArray(n)?C.map(n,(function(e){return{name:t.name,value:e.replace(At,"\r\n")}})):{name:t.name,value:n.replace(At,"\r\n")}})).get()}});var Lt=/%20/g,Ot=/#.*$/,Dt=/([?&])_=[^&]*/,Mt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,It=/^\/\//,qt={},Ht={},Bt="*/".concat("*"),$t=x.createElement("a");function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(I)||[];if(v(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Ut(e,t,n,r){var i={},o=e===Ht;function a(s){var l;return i[s]=!0,C.each(e[s]||[],(function(e,s){var c=s(t,n,r);return"string"!=typeof c||o||i[c]?o?!(l=c):void 0:(t.dataTypes.unshift(c),a(c),!1)})),l}return a(t.dataTypes[0])||!i["*"]&&a("*")}function Vt(e,t){var n,r,i=C.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&C.extend(!0,e,r),e}$t.href=St.href,C.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:St.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Bt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":C.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Vt(Vt(e,C.ajaxSettings),t):Vt(C.ajaxSettings,e)},ajaxPrefilter:Ft(qt),ajaxTransport:Ft(Ht),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,a,s,l,c,u,d,p,f=C.ajaxSetup({},t),h=f.context||f,g=f.context&&(h.nodeType||h.jquery)?C(h):C.event,m=C.Deferred(),v=C.Callbacks("once memory"),y=f.statusCode||{},b={},w={},_="canceled",S={readyState:0,getResponseHeader:function(e){var t;if(c){if(!a)for(a={};t=Mt.exec(o);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?o:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)S.always(e[S.status]);else for(t in e)y[t]=[y[t],e[t]];return this},abort:function(e){var t=e||_;return r&&r.abort(t),T(0,t),this}};if(m.promise(S),f.url=((e||f.url||St.href)+"").replace(It,St.protocol+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(I)||[""],null==f.crossDomain){l=x.createElement("a");try{l.href=f.url,l.href=l.href,f.crossDomain=$t.protocol+"//"+$t.host!=l.protocol+"//"+l.host}catch(e){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=C.param(f.data,f.traditional)),Ut(qt,f,t,S),c)return S;for(d in(u=C.event&&f.global)&&0==C.active++&&C.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Rt.test(f.type),i=f.url.replace(Ot,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Lt,"+")):(p=f.url.slice(i.length),f.data&&(f.processData||"string"==typeof f.data)&&(i+=(Et.test(i)?"&":"?")+f.data,delete f.data),!1===f.cache&&(i=i.replace(Dt,"$1"),p=(Et.test(i)?"&":"?")+"_="+Tt.guid+++p),f.url=i+p),f.ifModified&&(C.lastModified[i]&&S.setRequestHeader("If-Modified-Since",C.lastModified[i]),C.etag[i]&&S.setRequestHeader("If-None-Match",C.etag[i])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&S.setRequestHeader("Content-Type",f.contentType),S.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Bt+"; q=0.01":""):f.accepts["*"]),f.headers)S.setRequestHeader(d,f.headers[d]);if(f.beforeSend&&(!1===f.beforeSend.call(h,S,f)||c))return S.abort();if(_="abort",v.add(f.complete),S.done(f.success),S.fail(f.error),r=Ut(Ht,f,t,S)){if(S.readyState=1,u&&g.trigger("ajaxSend",[S,f]),c)return S;f.async&&f.timeout>0&&(s=n.setTimeout((function(){S.abort("timeout")}),f.timeout));try{c=!1,r.send(b,T)}catch(e){if(c)throw e;T(-1,e)}}else T(-1,"No Transport");function T(e,t,a,l){var d,p,x,b,w,_=t;c||(c=!0,s&&n.clearTimeout(s),r=void 0,o=l||"",S.readyState=e>0?4:0,d=e>=200&&e<300||304===e,a&&(b=function(e,t,n){for(var r,i,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){l.unshift(i);break}if(l[0]in n)o=l[0];else{for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==l[0]&&l.unshift(o),n[o]}(f,S,a)),!d&&C.inArray("script",f.dataTypes)>-1&&(f.converters["text script"]=function(){}),b=function(e,t,n,r){var i,o,a,s,l,c={},u=e.dataTypes.slice();if(u[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a];for(o=u.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=u.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(a=c[l+" "+o]||c["* "+o]))for(i in c)if((s=i.split(" "))[1]===o&&(a=c[l+" "+s[0]]||c["* "+s[0]])){!0===a?a=c[i]:!0!==c[i]&&(o=s[0],u.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(f,b,S,d),d?(f.ifModified&&((w=S.getResponseHeader("Last-Modified"))&&(C.lastModified[i]=w),(w=S.getResponseHeader("etag"))&&(C.etag[i]=w)),204===e||"HEAD"===f.type?_="nocontent":304===e?_="notmodified":(_=b.state,p=b.data,d=!(x=b.error))):(x=_,!e&&_||(_="error",e<0&&(e=0))),S.status=e,S.statusText=(t||_)+"",d?m.resolveWith(h,[p,_,S]):m.rejectWith(h,[S,_,x]),S.statusCode(y),y=void 0,u&&g.trigger(d?"ajaxSuccess":"ajaxError",[S,f,d?p:x]),v.fireWith(h,[S,_]),u&&(g.trigger("ajaxComplete",[S,f]),--C.active||C.event.trigger("ajaxStop")))}return S},getJSON:function(e,t,n){return C.get(e,t,n,"json")},getScript:function(e,t){return C.get(e,void 0,t,"script")}}),C.each(["get","post"],(function(e,t){C[t]=function(e,n,r,i){return v(n)&&(i=i||r,r=n,n=void 0),C.ajax(C.extend({url:e,type:t,dataType:i,data:n,success:r},C.isPlainObject(e)&&e))}})),C.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),C._evalUrl=function(e,t,n){return C.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){C.globalEval(e,t,n)}})},C.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=C(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return v(e)?this.each((function(t){C(this).wrapInner(e.call(this,t))})):this.each((function(){var t=C(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=v(e);return this.each((function(n){C(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){C(this).replaceWith(this.childNodes)})),this}}),C.expr.pseudos.hidden=function(e){return!C.expr.pseudos.visible(e)},C.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},C.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var zt={0:200,1223:204},Wt=C.ajaxSettings.xhr();m.cors=!!Wt&&"withCredentials"in Wt,m.ajax=Wt=!!Wt,C.ajaxTransport((function(e){var t,r;if(m.cors||Wt&&!e.crossDomain)return{send:function(i,o){var a,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a];for(a in e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a]);t=function(e){return function(){t&&(t=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(zt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=t(),r=s.onerror=s.ontimeout=t("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&n.setTimeout((function(){t&&r()}))},t=t("abort");try{s.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),C.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),C.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return C.globalEval(e),e}}}),C.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),C.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=C("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),x.head.appendChild(t[0])},abort:function(){n&&n()}}}));var Gt,Xt=[],Yt=/(=)\?(?=&|$)|\?\?/;C.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||C.expando+"_"+Tt.guid++;return this[e]=!0,e}}),C.ajaxPrefilter("json jsonp",(function(e,t,r){var i,o,a,s=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Yt,"$1"+i):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return a||C.error(i+" was not called"),a[0]},e.dataTypes[0]="json",o=n[i],n[i]=function(){a=arguments},r.always((function(){void 0===o?C(n).removeProp(i):n[i]=o,e[i]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(i)),a&&v(o)&&o(a[0]),a=o=void 0})),"script"})),m.createHTMLDocument=((Gt=x.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Gt.childNodes.length),C.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(m.createHTMLDocument?((r=(t=x.implementation.createHTMLDocument("")).createElement("base")).href=x.location.href,t.head.appendChild(r)):t=x),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=_e([e],t,o),o&&o.length&&C(o).remove(),C.merge([],i.childNodes)));var r,i,o},C.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=yt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&C.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){o=arguments,a.html(r?C("<div>").append(C.parseHTML(e)).find(r):e)})).always(n&&function(e,t){a.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},C.expr.pseudos.animated=function(e){return C.grep(C.timers,(function(t){return e===t.elem})).length},C.offset={setOffset:function(e,t,n){var r,i,o,a,s,l,c=C.css(e,"position"),u=C(e),d={};"static"===c&&(e.style.position="relative"),s=u.offset(),o=C.css(e,"top"),l=C.css(e,"left"),("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1?(a=(r=u.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(l)||0),v(t)&&(t=t.call(e,n,C.extend({},s))),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+i),"using"in t?t.using.call(e,d):("number"==typeof d.top&&(d.top+="px"),"number"==typeof d.left&&(d.left+="px"),u.css(d))}},C.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){C.offset.setOffset(this,e,t)}));var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===C.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===C.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=C(e).offset()).top+=C.css(e,"borderTopWidth",!0),i.left+=C.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-C.css(r,"marginTop",!0),left:t.left-i.left-C.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===C.css(e,"position");)e=e.offsetParent;return e||oe}))}}),C.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;C.fn[e]=function(r){return V(this,(function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i}),e,r,arguments.length)}})),C.each(["top","left"],(function(e,t){C.cssHooks[t]=We(m.pixelPosition,(function(e,n){if(n)return n=ze(e,t),$e.test(n)?C(e).position()[t]+"px":n}))})),C.each({Height:"height",Width:"width"},(function(e,t){C.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){C.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return V(this,(function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?C.css(t,n,s):C.style(t,n,i,s)}),t,a?i:void 0,a)}}))})),C.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){C.fn[t]=function(e){return this.on(t,e)}})),C.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){C.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}));var Jt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;C.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||C.guid++,i},C.holdReady=function(e){e?C.readyWait++:C.ready(!0)},C.isArray=Array.isArray,C.parseJSON=JSON.parse,C.nodeName=P,C.isFunction=v,C.isWindow=y,C.camelCase=X,C.type=_,C.now=Date.now,C.isNumeric=function(e){var t=C.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},C.trim=function(e){return null==e?"":(e+"").replace(Jt,"")},void 0===(r=function(){return C}.apply(t,[]))||(e.exports=r);var Qt=n.jQuery,Kt=n.$;return C.noConflict=function(e){return n.$===C&&(n.$=Kt),e&&n.jQuery===C&&(n.jQuery=Qt),C},void 0===i&&(n.jQuery=n.$=C),C}))},function(e,t,n){const{LitElement:r,html:i,css:o}=n(0);customElements.define("layout-central",class extends r{render(){return i` <div class="landing-page">
        <div class="top">
          <span class="logo"><a href="/">HC.</a></span>
          <nav class="nav">
            <ul>
              <li><a href="/">PORTFOLIO</a></li>
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
      </div>`}static get styles(){return o`
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

        body {
          margin: 0;
          padding: 45px 45px 40px 45px;
          width: 100vw;
          height: calc(var(--vh, 1vh) * 100);
          --dark-red: #d40000;
          --teal: #008080;
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
          height: calc(var(--vh, 1vh) * 100);
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
          display: flex;
          align-items: center;
        }

        .bottom {
          grid-column-start: 3;
        }
      `}})},function(e,t,n){const{LitElement:r,html:i,css:o}=n(0),{createSinglePaneSwitcher:a}=n(1),s=n(9).default;customElements.define("landing-screen",class extends r{static get properties(){return{currentPageIndex:{type:Number}}}constructor(){super(),this.pageTotal=5,this.currentPageIndex=0}pagesDOM(){return Array.from(this.shadowRoot.querySelectorAll(".page"))}firstUpdated(){const e=this;this.pageSwitcher=a.call(this,this.pagesDOM().map((t,n)=>({show(){e.currentPageIndex=n;var t={offset:document.documentElement.scrollTop||document.body.scrollTop};s({targets:t,offset:n*window.innerHeight+1,duration:250,easing:"easeInOutCirc",update:function(){window.scrollTo(0,t.offset)}})},hide(){}})))}arrayOfN(e){return Array.from(Array(e).keys())}mainKeypress(e){switch(e.key){case"ArrowDown":case"PageDown":this.pageSwitcher.next();break;case"ArrowUp":case"PageUp":this.pageSwitcher.backwards()}}render(){return i`
      <div class='main' tabindex="0" @keydown=${this.mainKeypress}>
      <div class='screen-number'>
        ${this.arrayOfN(this.pageTotal).map(e=>i`<div
              class="marker ${e===this.currentPageIndex?"activated":""}"
            ></div>`)}
      </div>
      <layout-central class='page'>
        <div slot='center' class='center-landing' >
        <div class='art'>
          <div class='art-bg'>
            <img src='./assets/images/landing-code-bg.png' />
          </div>
          <div>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 545 322" style="enable-background:new 0 0 545 322;" xml:space="preserve">
          <style type="text/css">
            .st0{enable-background:new;}
          </style>
          <g class="st0">
            <path class="st1" d="M0.3,161.4v-40.2l166.9-92.5v65.8l-98.4,46.9l98.4,46.9v66.1L0.3,161.4z"/>
            <path class="st1" d="M287.3,0h61.4l-90.6,322.5h-61.4L287.3,0z"/>
            <path class="st1" d="M377.9,188.2l98.4-46.9l-98.4-46.9V28.7l166.9,92.5v40.2l-166.9,92.9V188.2z"/>
          </g>
          </svg>
          </div>
        </div>
        <div class='description'>
          <span class='fullname'>Hadi</br>Chahine</span>
          <span class='profession'>Software Developer</span>
        </div>
      </div>
     <span slot='bottom' class='down-arrow'>
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000">
      <g><path d="M40.2,243.7l467.4,467.4l467.4-467.4l15.1,30.2L507.5,756.3L10,273.8L40.2,243.7z"/></g>
      </svg>
     <span>
    </layout-central>
    <div class='preview-header landing-project-preview page'>
        <div class='title-section'>
          <span class='title'>Written with dedication</span>
          <span class='subtitle'>A selection of my latest work.</span>
        </div>
        <div class='preview-main'>
          <img src='./assets/images/d1.png'/>
          <div class='actions'>
            <div class='info'>
              <span class='title'>cest</br>C Unit</br>Testing</span>
              <span class='subtitle'>Tools</span>
            </div>
            <div class='button'>
              <span class='cv-button'><a href='cv.pdf'>See All Projects</a></span>
            </div>
          </div>
        </div>
    </div>
    <div class='landing-project-preview page'>
        <div class='preview-main'>
          <img src='./assets/images/d2.png'/>
          <div class='actions'>
            <div class='info'>
              <span class='title'>The</br>Weather</br>Dashboard</span>
              <span class='subtitle'>Frontend</span>
            </div>
            <div class='button'>
              <span class='cv-button'><a href='cv.pdf'>See All Projects</a></span>
            </div>
          </div>
        </div>
    </div>
    <div class='landing-project-preview page'>
        <div class='preview-main'>
          <img src='./assets/images/d3.jpg'/>
          <div class='actions'>
            <div class='info'>
              <span class='title'>Custom</br>Portfolio</br>Website</span>
              <span class='subtitle'>Frontend</span>
            </div>
            <div class='button'>
              <span class='cv-button'><a href='cv.pdf'>See All Projects</a></span>
            </div>
          </div>
        </div>
    </div>
    <layout-central class='page'>
      <div class='grabber' slot='center'>
        <span class='question'>Like what you see?</span>
        <span class='mark'>You haven't seen it all!</span>
        <span class='cv-button'><a href='cv.pdf'>See All Projects</a></span>
      </div>
      <span slot='bottom' class='take-up'>Take me up!</span>
    </layout-central>
    </div>`}static get styles(){return o`
        a {
          text-decoration: none;
        }

        .screen-number {
          position: fixed;
          right: 80px;
          height: 100%;
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
          height: calc(var(--vh, 1vh) * 100);
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

        .screen-number {
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 10;
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

          .screen-number {
            position: fixed;
            right: 40px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 10;
          }

          .screen-number * {
            width: 9px;
            height: 9px;
          }

          .screen-number *:not(:first-child) {
            margin-top: 4px;
          }

          .down-arrow > * {
            width: 19.6px;
            height: 19.6px;
            animation: MoveUpDown 0.7s linear infinite;
          }
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

          .screen-number {
            position: fixed;
            right: 80px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 10;
          }

          .screen-number * {
            width: 16px;
            height: 16px;
          }

          .screen-number *:not(:first-child) {
            margin-top: 10px;
          }

          .down-arrow > * {
            width: 50px;
            height: 50px;
            animation: MoveUpDown 0.7s linear infinite;
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
          text-align: center;
        }

        .grabber > *:not(:first-child) {
          margin-top: 20px;
        }

        .question {
          font-size: 42px;
          font-family: Ping LCG;
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

        .landing-project-preview {
          padding: 55px 0 78px 120px;
          background-color: #36204cff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .landing-project-preview .title-section span {
          display: block;
        }

        .landing-project-preview .title-section .title {
          font-family: Ping LCG;
          font-weight: 800;
          color: var(--fg-color);
          font-size: 30px;
        }

        .landing-project-preview .title-section .subtitle {
          font-family: Ping LCG;
          font-weight: 200;
          color: white;
          font-size: 22px;
        }

        .landing-project-preview.preview-header .preview-main {
          height: 350px;
        }

        .landing-project-preview .preview-main {
          background-color: white;
          height: 100%;
          position: relative;
        }

        .landing-project-preview .preview-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .landing-project-preview .preview-main .actions {
          height: 100%;
          display: inline-flex;
          flex-direction: column;
          transform: translateX(-50%);
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
        }

        .landing-project-preview .preview-main .actions .info {
          flex: 380;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .landing-project-preview .preview-main .actions .button {
          flex: 110;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .landing-project-preview .preview-main .actions .info .title {
          color: var(--fg-color);
          font-family: Ping LCG;
          font-weight: 800;
          font-size: 24px;
        }

        .landing-project-preview .preview-main .actions .info .subtitle {
          color: #808080;
          font-family: Ping LCG;
          font-weight: 200;
          font-size: 16px;
        }

        @keyframes MoveUpDown {
          0%,
          100% {
          }
          50% {
            transform: translateY(15px);
          }
        }
      `}})},function(e,t){e.exports=class{constructor(e,t){this.stateMachineTransitionHandler=t,this.pages=e,this.currentPageIndex=0}next(){this.hasMoreThanOnePage()&&this.isNotOnFinalPage()&&(this.stateMachineTransitionHandler.doNext(this.currentPage(),this.nextPage()),this.currentPageIndex++)}nextPage(){return this.pages[this.currentPageIndex+1]}currentPage(){return this.pages[this.currentPageIndex]}backwards(){this.hasMoreThanOnePage()&&this.isNotOnFirstPage()&&(this.stateMachineTransitionHandler.doBackwards(this.currentPage(),this.previousPage()),this.currentPageIndex--)}previousPage(){return this.pages[this.currentPageIndex-1]}isNotOnFirstPage(){return this.currentPageIndex>0}hasMoreThanOnePage(){return 1!==this.pages.length}isNotOnFinalPage(){return this.currentPageIndex!==this.pages.length-1}}},function(e,t,n){"use strict";n.r(t);var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},i={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},o=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],a={CSS:{},springs:{}};function s(e,t,n){return Math.min(Math.max(e,t),n)}function l(e,t){return e.indexOf(t)>-1}function c(e,t){return e.apply(null,t)}var u={arr:function(e){return Array.isArray(e)},obj:function(e){return l(Object.prototype.toString.call(e),"Object")},pth:function(e){return u.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||u.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return u.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return u.hex(e)||u.rgb(e)||u.hsl(e)},key:function(e){return!r.hasOwnProperty(e)&&!i.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function d(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function p(e,t){var n=d(e),r=s(u.und(n[0])?1:n[0],.1,100),i=s(u.und(n[1])?100:n[1],.1,100),o=s(u.und(n[2])?10:n[2],.1,100),l=s(u.und(n[3])?0:n[3],.1,100),c=Math.sqrt(i/r),p=o/(2*Math.sqrt(i*r)),f=p<1?c*Math.sqrt(1-p*p):0,h=p<1?(p*c-l)/f:-l+c;function g(e){var n=t?t*e/1e3:e;return n=p<1?Math.exp(-n*p*c)*(1*Math.cos(f*n)+h*Math.sin(f*n)):(1+h*n)*Math.exp(-n*c),0===e||1===e?e:1-n}return t?g:function(){var t=a.springs[e];if(t)return t;for(var n=0,r=0;;)if(1===g(n+=1/6)){if(++r>=16)break}else r=0;var i=n*(1/6)*1e3;return a.springs[e]=i,i}}function f(e){return void 0===e&&(e=10),function(t){return Math.ceil(s(t,1e-6,1)*e)*(1/e)}}var h,g,m=function(){function e(e,t){return 1-3*t+3*e}function t(e,t){return 3*t-6*e}function n(e){return 3*e}function r(r,i,o){return((e(i,o)*r+t(i,o))*r+n(i))*r}function i(r,i,o){return 3*e(i,o)*r*r+2*t(i,o)*r+n(i)}return function(e,t,n,o){if(0<=e&&e<=1&&0<=n&&n<=1){var a=new Float32Array(11);if(e!==t||n!==o)for(var s=0;s<11;++s)a[s]=r(.1*s,e,n);return function(i){return e===t&&n===o||0===i||1===i?i:r(l(i),t,o)}}function l(t){for(var o=0,s=1;10!==s&&a[s]<=t;++s)o+=.1;--s;var l=o+.1*((t-a[s])/(a[s+1]-a[s])),c=i(l,e,n);return c>=.001?function(e,t,n,o){for(var a=0;a<4;++a){var s=i(t,n,o);if(0===s)return t;t-=(r(t,n,o)-e)/s}return t}(t,l,e,n):0===c?l:function(e,t,n,i,o){var a,s,l=0;do{(a=r(s=t+(n-t)/2,i,o)-e)>0?n=s:t=s}while(Math.abs(a)>1e-7&&++l<10);return s}(t,o,o+.1,e,n)}}}(),v=(h={linear:function(){return function(e){return e}}},g={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=s(e,1,10),r=s(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){g[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(g).forEach((function(e){var t=g[e];h["easeIn"+e]=t,h["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},h["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},h["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),h);function y(e,t){if(u.fnc(e))return e;var n=e.split("(")[0],r=v[n],i=d(e);switch(n){case"spring":return p(e,t);case"cubicBezier":return c(m,i);case"steps":return c(f,i);default:return c(r,i)}}function x(e){try{return document.querySelectorAll(e)}catch(e){return}}function b(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,i=[],o=0;o<n;o++)if(o in e){var a=e[o];t.call(r,a,o,e)&&i.push(a)}return i}function w(e){return e.reduce((function(e,t){return e.concat(u.arr(t)?w(t):t)}),[])}function _(e){return u.arr(e)?e:(u.str(e)&&(e=x(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function C(e,t){return e.some((function(e){return e===t}))}function S(e){var t={};for(var n in e)t[n]=e[n];return t}function T(e,t){var n=S(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function E(e,t){var n=S(e);for(var r in t)n[r]=u.und(e[r])?t[r]:e[r];return n}function k(e){return u.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:u.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):u.hsl(e)?function(e){var t,n,r,i=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),o=parseInt(i[1],10)/360,a=parseInt(i[2],10)/100,s=parseInt(i[3],10)/100,l=i[4]||1;function c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==a)t=n=r=s;else{var u=s<.5?s*(1+a):s+a-s*a,d=2*s-u;t=c(d,u,o+1/3),n=c(d,u,o),r=c(d,u,o-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+l+")"}(e):void 0;var t,n}function A(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function P(e,t){return u.fnc(e)?e(t.target,t.id,t.total):e}function N(e,t){return e.getAttribute(t)}function j(e,t,n){if(C([n,"deg","rad","turn"],A(t)))return t;var r=a.CSS[t+n];if(!u.und(r))return r;var i=document.createElement(e.tagName),o=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;o.appendChild(i),i.style.position="absolute",i.style.width=100+n;var s=100/i.offsetWidth;o.removeChild(i);var l=s*parseFloat(t);return a.CSS[t+n]=l,l}function L(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?j(e,i,n):i}}function O(e,t){return u.dom(e)&&!u.inp(e)&&(!u.nil(N(e,t))||u.svg(e)&&e[t])?"attribute":u.dom(e)&&C(o,t)?"transform":u.dom(e)&&"transform"!==t&&L(e,t)?"css":null!=e[t]?"object":void 0}function D(e){if(u.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,i=new Map;t=r.exec(n);)i.set(t[1],t[2]);return i}}function M(e,t,n,r){var i=l(t,"scale")?1:0+function(e){return l(e,"translate")||"perspective"===e?"px":l(e,"rotate")||l(e,"skew")?"deg":void 0}(t),o=D(e).get(t)||i;return n&&(n.transforms.list.set(t,o),n.transforms.last=t),r?j(e,o,r):o}function R(e,t,n,r){switch(O(e,t)){case"transform":return M(e,t,r,n);case"css":return L(e,t,n);case"attribute":return N(e,t);default:return e[t]||0}}function I(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=A(e)||0,i=parseFloat(t),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return i+o+r;case"-":return i-o+r;case"*":return i*o+r}}function q(e,t){if(u.col(e))return k(e);if(/\s/g.test(e))return e;var n=A(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function H(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function B(e){for(var t,n=e.points,r=0,i=0;i<n.numberOfItems;i++){var o=n.getItem(i);i>0&&(r+=H(t,o)),t=o}return r}function $(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*N(e,"r")}(e);case"rect":return function(e){return 2*N(e,"width")+2*N(e,"height")}(e);case"line":return function(e){return H({x:N(e,"x1"),y:N(e,"y1")},{x:N(e,"x2"),y:N(e,"y2")})}(e);case"polyline":return B(e);case"polygon":return function(e){var t=e.points;return B(e)+H(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function F(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;u.svg(t)&&u.svg(t.parentNode);)t=t.parentNode;return t}(e),i=r.getBoundingClientRect(),o=N(r,"viewBox"),a=i.width,s=i.height,l=n.viewBox||(o?o.split(" "):[0,0,a,s]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:a,h:s,vW:l[2],vH:l[3]}}function U(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var i=F(e.el,e.svg),o=r(),a=r(-1),s=r(1),l=n?1:i.w/i.vW,c=n?1:i.h/i.vH;switch(e.property){case"x":return(o.x-i.x)*l;case"y":return(o.y-i.y)*c;case"angle":return 180*Math.atan2(s.y-a.y,s.x-a.x)/Math.PI}}function V(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=q(u.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:u.str(e)||t?r.split(n):[]}}function z(e){return b(e?w(u.arr(e)?e.map(_):_(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function W(e){var t=z(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:D(e)}}}))}function G(e,t){var n=S(t);if(/^spring/.test(n.easing)&&(n.duration=p(n.easing)),u.arr(e)){var r=e.length;2===r&&!u.obj(e[0])?e={value:e}:u.fnc(t.duration)||(n.duration=t.duration/r)}var i=u.arr(e)?e:[e];return i.map((function(e,n){var r=u.obj(e)&&!u.pth(e)?e:{value:e};return u.und(r.delay)&&(r.delay=n?0:t.delay),u.und(r.endDelay)&&(r.endDelay=n===i.length-1?t.endDelay:0),r})).map((function(e){return E(e,n)}))}function X(e,t){var n=[],r=t.keyframes;for(var i in r&&(t=E(function(e){for(var t=b(w(e.map((function(e){return Object.keys(e)}))),(function(e){return u.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var i=t[r];n[i]=e.map((function(e){var t={};for(var n in e)u.key(n)?n==i&&(t.value=e[n]):t[n]=e[n];return t}))},i=0;i<t.length;i++)r(i);return n}(r),t)),t)u.key(i)&&n.push({name:i,tweens:G(t[i],e)});return n}function Y(e,t){var n;return e.tweens.map((function(r){var i=function(e,t){var n={};for(var r in e){var i=P(e[r],t);u.arr(i)&&1===(i=i.map((function(e){return P(e,t)}))).length&&(i=i[0]),n[r]=i}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),o=i.value,a=u.arr(o)?o[1]:o,s=A(a),l=R(t.target,e.name,s,t),c=n?n.to.original:l,d=u.arr(o)?o[0]:c,p=A(d)||A(l),f=s||p;return u.und(a)&&(a=c),i.from=V(d,f),i.to=V(I(a,d),f),i.start=n?n.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=y(i.easing,i.duration),i.isPath=u.pth(o),i.isPathTargetInsideSVG=i.isPath&&u.svg(t.target),i.isColor=u.col(i.from.original),i.isColor&&(i.round=1),n=i,i}))}var J={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,i){if(r.list.set(t,n),t===r.last||i){var o="";r.list.forEach((function(e,t){o+=t+"("+e+") "})),e.style.transform=o}}};function Q(e,t){W(e).forEach((function(e){for(var n in t){var r=P(t[n],e),i=e.target,o=A(r),a=R(i,n,o,e),s=I(q(r,o||A(a)),a),l=O(i,n);J[l](i,n,s,e.transforms,!0)}}))}function K(e,t){return b(w(e.map((function(e){return t.map((function(t){return function(e,t){var n=O(e.target,t.name);if(n){var r=Y(t,e),i=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:i.end,delay:r[0].delay,endDelay:i.endDelay}}}(e,t)}))}))),(function(e){return!u.und(e)}))}function Z(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},i={};return i.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,i.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,i.endDelay=n?i.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,i}var ee=0;var te=[],ne=function(){var e;function t(n){for(var r=te.length,i=0;i<r;){var o=te[i];o.paused?(te.splice(i,1),r--):(o.tick(n),i++)}e=i>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ie.suspendWhenDocumentHidden&&(re()?e=cancelAnimationFrame(e):(te.forEach((function(e){return e._onDocumentVisibility()})),ne()))})),function(){e||re()&&ie.suspendWhenDocumentHidden||!(te.length>0)||(e=requestAnimationFrame(t))}}();function re(){return!!document&&document.hidden}function ie(e){void 0===e&&(e={});var t,n=0,o=0,a=0,l=0,c=null;function u(e){var t=window.Promise&&new Promise((function(e){return c=e}));return e.finished=t,t}var d=function(e){var t=T(r,e),n=T(i,e),o=X(n,e),a=W(e.targets),s=K(a,o),l=Z(s,n),c=ee;return ee++,E(t,{id:c,children:[],animatables:a,animations:s,duration:l.duration,delay:l.delay,endDelay:l.endDelay})}(e);u(d);function p(){var e=d.direction;"alternate"!==e&&(d.direction="normal"!==e?"normal":"reverse"),d.reversed=!d.reversed,t.forEach((function(e){return e.reversed=d.reversed}))}function f(e){return d.reversed?d.duration-e:e}function h(){n=0,o=f(d.currentTime)*(1/ie.speed)}function g(e,t){t&&t.seek(e-t.timelineOffset)}function m(e){for(var t=0,n=d.animations,r=n.length;t<r;){var i=n[t],o=i.animatable,a=i.tweens,l=a.length-1,c=a[l];l&&(c=b(a,(function(t){return e<t.end}))[0]||c);for(var u=s(e-c.start-c.delay,0,c.duration)/c.duration,p=isNaN(u)?1:c.easing(u),f=c.to.strings,h=c.round,g=[],m=c.to.numbers.length,v=void 0,y=0;y<m;y++){var x=void 0,w=c.to.numbers[y],_=c.from.numbers[y]||0;x=c.isPath?U(c.value,p*w,c.isPathTargetInsideSVG):_+p*(w-_),h&&(c.isColor&&y>2||(x=Math.round(x*h)/h)),g.push(x)}var C=f.length;if(C){v=f[0];for(var S=0;S<C;S++){f[S];var T=f[S+1],E=g[S];isNaN(E)||(v+=T?E+T:E+" ")}}else v=g[0];J[i.type](o.target,i.property,v,o.transforms),i.currentValue=v,t++}}function v(e){d[e]&&!d.passThrough&&d[e](d)}function y(e){var r=d.duration,i=d.delay,h=r-d.endDelay,y=f(e);d.progress=s(y/r*100,0,100),d.reversePlayback=y<d.currentTime,t&&function(e){if(d.reversePlayback)for(var n=l;n--;)g(e,t[n]);else for(var r=0;r<l;r++)g(e,t[r])}(y),!d.began&&d.currentTime>0&&(d.began=!0,v("begin")),!d.loopBegan&&d.currentTime>0&&(d.loopBegan=!0,v("loopBegin")),y<=i&&0!==d.currentTime&&m(0),(y>=h&&d.currentTime!==r||!r)&&m(r),y>i&&y<h?(d.changeBegan||(d.changeBegan=!0,d.changeCompleted=!1,v("changeBegin")),v("change"),m(y)):d.changeBegan&&(d.changeCompleted=!0,d.changeBegan=!1,v("changeComplete")),d.currentTime=s(y,0,r),d.began&&v("update"),e>=r&&(o=0,d.remaining&&!0!==d.remaining&&d.remaining--,d.remaining?(n=a,v("loopComplete"),d.loopBegan=!1,"alternate"===d.direction&&p()):(d.paused=!0,d.completed||(d.completed=!0,v("loopComplete"),v("complete"),!d.passThrough&&"Promise"in window&&(c(),u(d)))))}return d.reset=function(){var e=d.direction;d.passThrough=!1,d.currentTime=0,d.progress=0,d.paused=!0,d.began=!1,d.loopBegan=!1,d.changeBegan=!1,d.completed=!1,d.changeCompleted=!1,d.reversePlayback=!1,d.reversed="reverse"===e,d.remaining=d.loop,t=d.children;for(var n=l=t.length;n--;)d.children[n].reset();(d.reversed&&!0!==d.loop||"alternate"===e&&1===d.loop)&&d.remaining++,m(d.reversed?d.duration:0)},d._onDocumentVisibility=h,d.set=function(e,t){return Q(e,t),d},d.tick=function(e){a=e,n||(n=a),y((a+(o-n))*ie.speed)},d.seek=function(e){y(f(e))},d.pause=function(){d.paused=!0,h()},d.play=function(){d.paused&&(d.completed&&d.reset(),d.paused=!1,te.push(d),h(),ne())},d.reverse=function(){p(),d.completed=!d.reversed,h()},d.restart=function(){d.reset(),d.play()},d.remove=function(e){ae(z(e),d)},d.reset(),d.autoplay&&d.play(),d}function oe(e,t){for(var n=t.length;n--;)C(e,t[n].animatable.target)&&t.splice(n,1)}function ae(e,t){var n=t.animations,r=t.children;oe(e,n);for(var i=r.length;i--;){var o=r[i],a=o.animations;oe(e,a),a.length||o.children.length||r.splice(i,1)}n.length||r.length||t.pause()}ie.version="3.2.1",ie.speed=1,ie.suspendWhenDocumentHidden=!0,ie.running=te,ie.remove=function(e){for(var t=z(e),n=te.length;n--;){ae(t,te[n])}},ie.get=R,ie.set=Q,ie.convertPx=j,ie.path=function(e,t){var n=u.str(e)?x(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:F(n),totalLength:$(n)*(r/100)}}},ie.setDashoffset=function(e){var t=$(e);return e.setAttribute("stroke-dasharray",t),t},ie.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?y(t.easing):null,i=t.grid,o=t.axis,a=t.from||0,s="first"===a,l="center"===a,c="last"===a,d=u.arr(e),p=d?parseFloat(e[0]):parseFloat(e),f=d?parseFloat(e[1]):0,h=A(d?e[1]:e)||0,g=t.start||0+(d?p:0),m=[],v=0;return function(e,t,u){if(s&&(a=0),l&&(a=(u-1)/2),c&&(a=u-1),!m.length){for(var y=0;y<u;y++){if(i){var x=l?(i[0]-1)/2:a%i[0],b=l?(i[1]-1)/2:Math.floor(a/i[0]),w=x-y%i[0],_=b-Math.floor(y/i[0]),C=Math.sqrt(w*w+_*_);"x"===o&&(C=-w),"y"===o&&(C=-_),m.push(C)}else m.push(Math.abs(a-y));v=Math.max.apply(Math,m)}r&&(m=m.map((function(e){return r(e/v)*v}))),"reverse"===n&&(m=m.map((function(e){return o?e<0?-1*e:-e:Math.abs(v-e)})))}return g+(d?(f-p)/v:p)*(Math.round(100*m[t])/100)+h}},ie.timeline=function(e){void 0===e&&(e={});var t=ie(e);return t.duration=0,t.add=function(n,r){var o=te.indexOf(t),a=t.children;function s(e){e.passThrough=!0}o>-1&&te.splice(o,1);for(var l=0;l<a.length;l++)s(a[l]);var c=E(n,T(i,e));c.targets=c.targets||e.targets;var d=t.duration;c.autoplay=!1,c.direction=t.direction,c.timelineOffset=u.und(r)?d:I(r,d),s(t),t.seek(c.timelineOffset);var p=ie(c);s(p),a.push(p);var f=Z(a,e);return t.delay=f.delay,t.endDelay=f.endDelay,t.duration=f.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},ie.easing=y,ie.penner=v,ie.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},t.default=ie},function(e,t,n){const{LitElement:r,html:i,css:o}=n(0),{createSinglePaneSwitcher:a}=n(1);customElements.define("about-screen",class extends r{firstUpdated(){window.pageSwitcher=a(Array.from(this.shadowRoot.querySelectorAll(".page")).map(e=>({show(){e.classList.add("activated")},hide(){e.classList.remove("activated")}})))}render(){return i` <layout-central>
        <div slot="center" class="about-section">
          <div class="container">
            <div class="page content activated">
              <span class="title">So, who's Hadi Chahine?</span>
              <span class="subtitle"
                >TL;DL - A fairly experiened software developer</span
              >
              <span class="description"
                >I first started programming back in 2012 and it's been a long
                journey since then. I moved across different platforms and
                architectures. I hold a BS in Computer Science from the Lebanese
                University.</span
              >
            </div>
            <div class="page content">
              <span class="title">So, who's Rabbak?</span>
              <span class="subtitle"
                >TL;DL - A fairly experiened software developer</span
              >
              <span class="description"
                >I first started programming back in 2012 and it's been a long
                journey since then. I moved across different platforms and
                architectures. I hold a BS in Computer Science from the Lebanese
                University.</span
              >
            </div>
            <div class="page content">
              <span class="title">So, who's Pizdets?</span>
              <span class="subtitle"
                >TL;DL - A fairly experiened software developer</span
              >
              <span class="description"
                >I first started programming back in 2012 and it's been a long
                journey since then. I moved across different platforms and
                architectures. I hold a BS in Computer Science from the Lebanese
                University.</span
              >
            </div>
          </div>
          <div class="screen-number">
            <div class="marker no-1 activated"></div>
            <div class="marker no-2"></div>
            <div class="marker no-3"></div>
          </div>
        </div>
        <span slot="bottom" class="cv-button"
          ><a href="cv.pdf">Download CV</a></span
        >
      </layout-central>`}static get styles(){return o`
        .about-section {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .about-section .content {
          display: flex;
          flex-direction: column;
        }

        .about-section .title {
          font-size: 32px;
          color: var(--fg-color);
          font-family: Ping LCG;
          font-weight: 800;
          margin-bottom: 23px;
        }

        .about-section .subtitle {
          font-size: 23px;
          font-family: Ping LCG;
          font-weight: 200;
          margin-bottom: 50px;
        }

        .about-section .description {
          font-size: 32px;
          font-family: Ping LCG;
          font-weight: normal;
          line-height: 120%;
        }

        .container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
        }

        .page {
          height: 100%;
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 2;
          opacity: 0;
        }

        .activated {
          opacity: 1;
        }

        .screen-number {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .screen-number * {
          width: 16px;
          height: 16px;
          background: var(--fg-color);
          opacity: 0.3;
          border-radius: 100%;
        }

        .screen-number *:not(:first-child) {
          margin-top: 10px;
        }

        .screen-number .activated {
          opacity: 1;
        }

        .cv-button a {
          display: inline-block;
          padding: 10px 16px 12px 17px;
          border: 1px var(--fg-color) solid;
          color: var(--fg-color);
          font-family: Ping LCG;
          font-weight: bold;
        }
      `}})},function(e,t,n){"use strict";function r(e){return e=e||[],Array.isArray(e)?e:[e]}function i(e){return"[Vaadin.Router] "+e}n.r(t),n.d(t,"Resolver",(function(){return q})),n.d(t,"Router",(function(){return te}));const o=["module","nomodule"];function a(e){if(!e.match(/.+\.[m]?js$/))throw new Error(i(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function s(e){if(!e||!f(e.path))throw new Error(i('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(p(e.action)||Array.isArray(e.children)||p(e.children)||d(t)||n.some(t=>f(e[t]))))throw new Error(i(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(f(t))a(t);else{if(!o.some(e=>e in t))throw new Error(i('Expected route bundle to include either "nomodule" or "module" keys, or both'));o.forEach(e=>e in t&&a(t[e]))}e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(i(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function l(e){r(e).forEach(e=>s(e))}function c(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),"module"===t?n.setAttribute("type","module"):"nomodule"===t&&n.setAttribute("nomodule",""),n.async=!0),new Promise((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()})}function u(e,t){return!window.dispatchEvent(new CustomEvent("vaadin-router-"+e,{cancelable:"go"===e,detail:t}))}function d(e){return"object"==typeof e&&!!e}function p(e){return"function"==typeof e}function f(e){return"string"==typeof e}function h(e){const t=new Error(i(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const g=new class{};function m(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;if((t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t))!==window.location.origin)return;const{pathname:r,search:i,hash:o}=t;u("go",{pathname:r,search:i,hash:o})&&e.preventDefault()}const v={activate(){window.document.addEventListener("click",m)},inactivate(){window.document.removeEventListener("click",m)}};function y(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;u("go",{pathname:t,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!p(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const x={activate(){window.addEventListener("popstate",y)},inactivate(){window.removeEventListener("popstate",y)}};var b=L,w=E,_=function(e,t){return k(E(e,t))},C=k,S=j,T=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function E(e,t){for(var n,r=[],i=0,o=0,a="",s=t&&t.delimiter||"/",l=t&&t.delimiters||"./",c=!1;null!==(n=T.exec(e));){var u=n[0],d=n[1],p=n.index;if(a+=e.slice(o,p),o=p+u.length,d)a+=d[1],c=!0;else{var f="",h=e[o],g=n[2],m=n[3],v=n[4],y=n[5];if(!c&&a.length){var x=a.length-1;l.indexOf(a[x])>-1&&(f=a[x],a=a.slice(0,x))}a&&(r.push(a),a="",c=!1);var b=""!==f&&void 0!==h&&h!==f,w="+"===y||"*"===y,_="?"===y||"*"===y,C=f||s,S=m||v;r.push({name:g||i++,prefix:f,delimiter:C,optional:_,repeat:w,partial:b,pattern:S?P(S):"[^"+A(C)+"]+?"})}}return(a||o<e.length)&&r.push(a+e.substr(o)),r}function k(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var i="",o=r&&r.encode||encodeURIComponent,a=0;a<e.length;a++){var s=e[a];if("string"!=typeof s){var l,c=n?n[s.name]:void 0;if(Array.isArray(c)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===c.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(l=o(c[u],s),!t[a].test(l))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');i+=(0===u?s.prefix:s.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"));s.partial&&(i+=s.prefix)}else{if(l=o(String(c),s),!t[a].test(l))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+l+'"');i+=s.prefix+l}}else i+=s}return i}}function A(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function P(e){return e.replace(/([=!:$/()])/g,"\\$1")}function N(e){return e&&e.sensitive?"":"i"}function j(e,t,n){for(var r=(n=n||{}).strict,i=!1!==n.start,o=!1!==n.end,a=A(n.delimiter||"/"),s=n.delimiters||"./",l=[].concat(n.endsWith||[]).map(A).concat("$").join("|"),c=i?"^":"",u=0===e.length,d=0;d<e.length;d++){var p=e[d];if("string"==typeof p)c+=A(p),u=d===e.length-1&&s.indexOf(p[p.length-1])>-1;else{var f=p.repeat?"(?:"+p.pattern+")(?:"+A(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;t&&t.push(p),p.optional?p.partial?c+=A(p.prefix)+"("+f+")?":c+="(?:"+A(p.prefix)+"("+f+"))?":c+=A(p.prefix)+"("+f+")"}}return o?(r||(c+="(?:"+a+")?"),c+="$"===l?"$":"(?="+l+")"):(r||(c+="(?:"+a+"(?="+l+"))?"),u||(c+="(?="+a+"|"+l+")")),new RegExp(c,N(n))}function L(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(L(e[i],t,n).source);return new RegExp("(?:"+r.join("|")+")",N(n))}(e,t,n):function(e,t,n){return j(E(e,n),t,n)}(e,t,n)}b.parse=w,b.compile=_,b.tokensToFunction=C,b.tokensToRegExp=S;const{hasOwnProperty:O}=Object.prototype,D=new Map;function M(e){try{return decodeURIComponent(e)}catch(t){return e}}function R(e,t,n,r,i){let o,a,s=0,l=e.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(c){if(e===c)return{done:!0};const u=e.__children=e.__children||e.children;if(!o&&(o=function(e,t,n,r,i){const o=`${e}|${n=!!n}`;let a=D.get(o);if(!a){const t=[];a={keys:t,pattern:b(e,t,{end:n,strict:""===e})},D.set(o,a)}const s=a.pattern.exec(t);if(!s)return null;const l=Object.assign({},i);for(let e=1;e<s.length;e++){const t=a.keys[e-1],n=t.name,r=s[e];void 0===r&&O.call(l,n)||(t.repeat?l[n]=r?r.split(t.delimiter).map(M):[]:l[n]=r?M(r):r)}return{path:s[0],keys:(r||[]).concat(a.keys),params:l}}(l,t,!u,r,i),o))return{done:!1,value:{route:e,keys:o.keys,params:o.params,path:o.path}};if(o&&u)for(;s<u.length;){if(!a){const r=u[s];r.parent=e;let i=o.path.length;i>0&&"/"===t.charAt(i)&&(i+=1),a=R(r,t.substr(i),n,o.keys,o.params)}const r=a.next(c);if(!r.done)return{done:!1,value:r.value};a=null,s++}return{done:!0}}}}function I(e){if(p(e.route.action))return e.route.action(e)}D.set("|false",{keys:[],pattern:/(?:)/});class q{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||I,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){l(e);const t=[...r(e)];this.root.__children=t}addRoutes(e){return l(e),this.root.__children.push(...r(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,f(e)?{pathname:e}:e),n=R(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let i=null,o=null,a=t;function s(e,l=i.value.route,c){const u=null===c&&i.value.route;return i=o||n.next(u),o=null,e||!i.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(l,i.value.route)?i.done?Promise.reject(h(t)):(a=Object.assign(a?{chain:a.chain?a.chain.slice(0):[]}:{},t,i.value),function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(a,i.value),Promise.resolve(r(a)).then(t=>null!=t&&t!==g?(a.result=t.result||t,a):s(e,l,t))):(o=i,Promise.resolve(g))}return t.next=s,Promise.resolve().then(()=>s(!0,this.root)).catch(e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(a);if(e?console.warn(t):e=new Error(t),e.context=e.context||a,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return a.result=this.errorHandler(e),a;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}q.pathToRegexp=b;const{pathToRegexp:H}=q,B=new Map;function $(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function F(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function U(e,t={}){if(!(e instanceof q))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,i)=>{let o=$(n,r);if(!o&&(n.clear(),function e(t,n,r){const i=n.name||n.component;if(i&&(t.has(i)?t.get(i).push(n):t.set(i,[n])),Array.isArray(r))for(let i=0;i<r.length;i++){const o=r[i];o.parent=n,e(t,o,o.__children||o.children)}}(n,e.root,e.root.__children),o=$(n,r),!o))throw new Error(`Route "${r}" not found`);let a=B.get(o.fullPath);if(!a){let e=F(o),t=o.parent;for(;t;){const n=F(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=H.parse(e),r=H.tokensToFunction(n),i=Object.create(null);for(let e=0;e<n.length;e++)f(n[e])||(i[n[e].name]=!0);a={toPath:r,keys:i},B.set(e,a),o.fullPath=e}let s=a.toPath(i,t)||"/";if(t.stringifyQueryParams&&i){const e={},n=Object.keys(i);for(let t=0;t<n.length;t++){const r=n[t];a.keys[r]||(e[r]=i[r])}const r=t.stringifyQueryParams(e);r&&(s+="?"===r.charAt(0)?r:"?"+r)}return s}}let V=[];function z(e){V.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),V=e}function W(e,t){return e.classList.add(t),new Promise(n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const r=e.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style","position: absolute; "+i),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}function G(e){return null!=e}function X({pathname:e="",search:t="",hash:n="",chain:r=[],params:i={},redirectFrom:o,resolver:a},s){const l=r.map(e=>e.route);return{baseUrl:a&&a.baseUrl||"",pathname:e,search:t,hash:n,routes:l,route:s||l.length&&l[l.length-1]||null,params:i,redirectFrom:o,getUrl:(e={})=>Z(te.pathToRegexp.compile(ee(l))(Object.assign({},i,e)),a)}}function Y(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function J(e,t,n){if(p(e))return e.apply(n,t)}function Q(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?J(n[e],t,n):void 0}function K(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function Z(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function ee(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class te extends q{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&q.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const i=te.NavigationTrigger;te.setTriggers.apply(te,Object.keys(i).map(e=>i[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=X({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();p(t.children)&&(n=n.then(()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e))).then(e=>{G(e)||p(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!d(e))throw new Error(i(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=r(e);for(let e=0;e<n.length;e++)s(n[e]),t.__children.push(n[e])}(e,t)}));const a={redirect:t=>Y(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then(()=>{if(this.__isLatestRender(e))return J(t.action,[e,a],t)}).then(e=>{return G(e)&&(e instanceof HTMLElement||e.redirect||e===g)?e:f(t.redirect)?a.redirect(t.redirect):t.bundle?(n=t.bundle,f(n)?c(n):Promise.race(o.filter(e=>e in n).map(e=>c(n[e],e)))).then(()=>{},()=>{throw new Error(i(`Bundle not found: ${t.bundle}. Check if the file name is correct`))}):void 0;var n}).then(e=>G(e)?e:f(t.component)?a.component(t.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},f(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then(e=>this.__fullyResolveChain(e)).then(e=>{if(this.__isLatestRender(e)){const r=this.__previousContext;if(e===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=X(e),t&&this.__updateBrowserHistory(e,1===n),u("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);const i=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),i.then(()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),K(this.__outlet&&this.__outlet.children),this.location=X(Object.assign(r,{resolver:this})),u("error",Object.assign({router:this,error:e},r)),e}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const r=n!==t?n:e,i=Z(ee(n.chain),n.resolver)===n.pathname,o=(e,t=e.route,n)=>e.next(void 0,t,n).then(n=>null===n||n===g?i?e:null!==t.parent?o(e,t.parent,n):n:n);return o(n).then(e=>{if(null===e||e===g)throw h(r);return e&&e!==g&&e!==n?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=X(e);const n=e.chain.map(e=>e.route).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(e=>this.__findComponentContextAfterAllRedirects(e)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(i(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let i=Promise.resolve();const o=()=>({cancel:!0}),a=t=>Y(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&(n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},n[t]);for(let t=0;t<r.length;t++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:a},r[t]),n[t].element.location=X(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=X(e,n[t].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:a},r[t]),r[t].element&&(r[t].element.location=X(e,r[t].route)));return i.then(t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,r){const i=X(t);return e.then(e=>{if(this.__isLatestRender(t)){return Q("onBeforeLeave",[i,n,this],r.element)(e)}}).then(e=>{if(!(e||{}).redirect)return e})}__runOnBeforeEnterCallbacks(e,t,n,r){const i=X(t,r.route);return e.then(e=>{if(this.__isLatestRender(t)){return Q("onBeforeEnter",[i,n,this],r.element)(e)}})}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(i("Too many redirects when rendering "+e.from));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(i(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const i=r?"replaceState":"pushState";window.history[i](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const i=t&&t.chain[r].element;if(i){if(i.parentNode!==n)break;e.chain[r].element=i,n=i}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(t=>this.__addedByRouter.get(t)&&t!==e.result);let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const i=e.chain[t].element;i&&(r.appendChild(i),this.__addedByRouter.set(i,!0),r===n&&this.__appearingContent.push(i),r=i)}}__removeDisappearingContent(){this.__disappearingContent&&K(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(K(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=X(e);J(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&K(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=X(e,e.chain[t].route);J(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],i=e.chain;let o;for(let e=i.length;e>0;e--)if(i[e-1].route.animate){o=i[e-1].route.animate;break}if(t&&n&&o){const e=d(o)&&o.leave||"leaving",i=d(o)&&o.enter||"entering";r.push(W(t,e)),r.push(W(n,i))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;f(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){z(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=U(this)),Z(this.__urlForName(e,t),this)}urlForPath(e,t){return Z(te.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=f(e)?this.__createUrl(e,"http://a"):e;return u("go",{pathname:t,search:n,hash:r})}}const ne=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,re=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ie(e,t){if("function"!=typeof e)return;const n=ne.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const oe=function(e,t){if(window.Vaadin.developmentMode)return ie(e,t)};function ae(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(re?!function(){if(re){if(Object.keys(re).map(e=>re[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!ie((function(){return!0})))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.2"}),oe(ae),te.NavigationTrigger={POPSTATE:x,CLICK:v}}]);