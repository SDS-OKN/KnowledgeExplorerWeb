import{B as e}from"./esm-chunk-eaca7b99.js";function t(e){return function(e,t,r){var o=e.length;if(!o)return e;if(o<764833){var i=e;return t&&(i=i.replace(/^\s+/,"")),r&&(i=i.replace(/\s+$/,"")),i}var a=0;if(r)for(;o>0&&n[e.charCodeAt(o-1)];)o--;if(t&&o>0)for(;a<o&&n[e.charCodeAt(a)];)a++;return e.substring(a,o)}(e,!0,!0)}var n={9:1,10:1,11:1,12:1,13:1,32:1,133:1,160:1,5760:1,6158:1,8192:1,8193:1,8194:1,8195:1,8196:1,8197:1,8198:1,8199:1,8200:1,8201:1,8202:1,8203:1,8232:1,8233:1,8239:1,8287:1,12288:1};const r=document.body,o=new WeakMap,i=new Map,a={subtree:!0,childList:!0},u=new MutationObserver((function(e){e.forEach(s)}));function s(e){e.removedNodes.forEach(l)}function l(e){let t=i.get(e);i.delete(e)&&(0===i.size&&u.disconnect(),t())}function c(e){if(o.has(e))return o.get(e);let t=new Promise((function(t){0===i.size&&u.observe(r,a);i.set(e,()=>{e=null,t()})}));return o.set(e,t),t}function f(e){if("object"!=typeof e||null==e)return e;var t={};for(var n in e)t[n]=e[n];return t}function d(){var t=e.IE&&"hidden"==A(document.body).overflow&&document.body.scrollLeft>0;return e.Edge||t?document.body?document.body.scrollLeft:document.documentElement.scrollLeft:e.WebKitFamily?document.documentElement.scrollLeft||document.body.scrollLeft:document.documentElement.scrollLeft}function m(){var t=e.IE&&"hidden"==A(document.body).overflow&&document.body.scrollTop>0;return e.WebKitFamily||e.Edge||t?e.MacOSMobilePlatform?window.pageYOffset:e.WebKitFamily&&document.documentElement.scrollTop||document.body.scrollTop:document.documentElement.scrollTop}function h(){return 0==document.documentElement.clientWidth?document.body.clientWidth:document.documentElement.clientWidth}function p(){return e.Firefox&&window.innerHeight-document.documentElement.clientHeight>v()?window.innerHeight:e.Opera&&e.Version<9.6||0==document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight}var g;function v(){if(void 0===g){var e=document.createElement("DIV");e.style.cssText="position: absolute; top: 0px; left: 0px; visibility: hidden; width: 200px; height: 150px; overflow: hidden; box-sizing: content-box",document.body.appendChild(e);var t=document.createElement("P");e.appendChild(t),t.style.cssText="width: 100%; height: 200px;";var n=t.offsetWidth;e.style.overflow="scroll";var r=t.offsetWidth;n==r&&(r=e.clientWidth),g=n-r,document.body.removeChild(e)}return g}function y(e){return I(e)}function b(e){return C(e)}function E(e,t){e.style.left=x(t,e,!0)+"px"}function w(e,t){e.style.top=x(t,e,!1)+"px"}function I(t){return e.IE?function(t){return null==t||e.IE&&null==t.parentNode?0:t.getBoundingClientRect().left+d()}(t):e.Firefox&&e.Version>=3||e.WebKitFamily||e.Edge?S(t):getAbsolutePositionX_Other(t)}function S(e){return null==e?0:e.getBoundingClientRect().left+d()}function C(t){return e.IE?function(t){return null==t||e.IE&&null==t.parentNode?0:t.getBoundingClientRect().top+m()}(t):e.Firefox&&e.Version>=3||e.WebKitFamily||e.Edge?N(t):getAbsolutePositionY_Other(t)}function N(e){return null==e?0:e.getBoundingClientRect().top+m()}function x(e,t,n){return e-=F(t,n)}function T(e,t){var n=function(e){var t=document.createElement("DIV");return t.style.top="0px",t.style.left="0px",t.visibility="hidden",t.style.position=A(e).position,t}(e);"static"==n.style.position&&(n.style.position="absolute"),e.parentNode.appendChild(n);var r=t?y(n):b(n);return e.parentNode.removeChild(n),r}function F(e,t){return T(e,t)}function W(e,t){try{var n,r=L(e);if(!r){var o=P(e);if(!o)return!1;n=o.split(" ")}for(var i=t.split(" "),a=i.length-1;a>=0;a--)if(r){if(-1===r.indexOf(i[a]))return!1}else if(Data.ArrayIndexOf(n,i[a])<0)return!1;return!0}catch(e){return!1}}function O(e,t){if(e&&"string"==typeof t&&!W(e,t=t.trim())&&""!==t){var n=P(e);B(e,""===n?t:n+" "+t)}}function _(e,n){if(e){var r=" "+P(e)+" ",o=r.replace(" "+n+" "," ");r.length!=o.length&&B(e,t(o))}}function L(e){return e.classList?[].slice.call(e.classList):P(e).replace(/^\s+|\s+$/g,"").split(/\s+/)}function P(e){return"svg"===e.tagName?e.className.baseVal:e.className}function B(e,n){"svg"===e.tagName?e.className.baseVal=t(n):e.className=t(n)}function D(t,n){var r=n.toUpperCase(),o=null;return t&&(t.getElementsByTagName?0===(o=t.getElementsByTagName(r)).length&&(o=t.getElementsByTagName(n)):t.all&&void 0!==t.all.tags&&(o=e.Netscape?t.all.tags[r]:t.all.tags(r))),o}function V(e,t,n){return null!=e?function(e,t){return t||(t=0),null!=e&&e.length>t?e[t]:null}(D(e,t),n):null}function A(t){if(document.defaultView&&document.defaultView.getComputedStyle){var n=document.defaultView.getComputedStyle(t,null);if(!n&&e.Firefox&&window.frameElement){for(var r=[],o=window.frameElement;!(n=document.defaultView.getComputedStyle(t,null));)r.push([o,o.style.display]),K(o,"display","block",!0),o="BODY"==o.tagName?o.ownerDocument.defaultView.frameElement:o.parentNode;n=f(n);for(var i,a=0;i=r[a];a++)K(i[0],"display",i[1])}return e.Firefox&&e.MajorVersion>=62&&window.frameElement&&0===n.length&&((n=f(n)).display=t.style.display),n}return window.getComputedStyle(t,null)}function M(e){if(!e.createStyleSheet){var t=e.createElement("STYLE");return V(e,"HEAD",0).appendChild(t),t.sheet}try{return e.createStyleSheet()}catch(e){throw new Error("The CSS link limit (31) has been exceeded. Please enable CSS merging or reduce the number of CSS files on the page. For details, see http://www.devexpress.com/Support/Center/p/K18487.aspx.")}}var q=null;function j(){return q||(q=M(document)),q}function K(e,t,n,r){if(r){var o=t.search("[A-Z]");-1!=o&&(t=t.replace(t.charAt(o),"-"+t.charAt(o).toLowerCase())),e.style.setProperty?e.style.setProperty(t,n,"important"):e.style.cssText+=";"+t+":"+n+"!important"}else e.style[t]=n}function R(e,t){return function(e,t,n){for(;null!=e;){if("BODY"==e.tagName||"#document"==e.nodeName)return null;if(n(e,t))return e;e=e.parentNode}return null}(e,t,W)}function H(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r];t&&!t(o)||n.push(o)}return n}function U(e){"string"==typeof e&&(e=document.querySelector(e)),e&&e.focus()}function Y(e,t,n){e&&(e[t]=n)}function k(e,t){e&&(e.indeterminate=t)}function z(e,t,n,r,o){e.addEventListener?e.addEventListener(t,n,{capture:!r,passive:!!o}):e.attachEvent("on"+t,n)}function $(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!0):e.detachEvent("on"+t,n)}function J(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}function X(e){return J(e),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,!1}function Z(e){return e&&(e.srcElement||e.target)}function G(e){}function Q(e){if(!e)return null;var t=null;if("string"==typeof e){var n=JSON.parse(e);n&&n.__internalId&&(t=n.__internalId)}(!t&&e.__internalId&&(t=e.__internalId),t)&&(e=document.querySelector("["+("_bl_"+t)+"]"));return e.tagName&&null!==e.parentNode||(e=null),e}function ee(e,t,n){(e=Q(e))&&Y(e,t,n)}function te(e,t){e.dataset.tempUniqueId="tempUniqueId";try{t("[data-temp-unique-id]")}catch(e){}finally{delete e.dataset.tempUniqueId}}function ne(e,t){e.removeAttribute?e.removeAttribute(t):e.removeProperty&&e.removeProperty(t)}function re(e,t,n){n?Y(e,t,n):ne(e,t)}function oe(e,t){return ae(e,t)+le(e,t)}function ie(e,t){return ue(e,t)+se(e,t)}function ae(e,t){var n=t||A(e);return parseInt(n.paddingLeft)+parseInt(n.paddingRight)}function ue(e,t){var n=t||A(e);return parseInt(n.paddingTop)+parseInt(n.paddingBottom)}function se(t,n){n||(n=e.IE&&9!==e.MajorVersion&&window.getComputedStyle?window.getComputedStyle(t):A(t));var r=0;return"none"!==n.borderTopStyle&&(r+=parseFloat(n.borderTopWidth),e.IE&&e.MajorVersion<9&&(r+=getIe8BorderWidthFromText(n.borderTopWidth))),"none"!==n.borderBottomStyle&&(r+=parseFloat(n.borderBottomWidth),e.IE&&e.MajorVersion<9&&(r+=getIe8BorderWidthFromText(n.borderBottomWidth))),r}function le(t,n){n||(n=e.IE&&window.getComputedStyle?window.getComputedStyle(t):A(t));var r=0;return"none"!==n.borderLeftStyle&&(r+=parseFloat(n.borderLeftWidth),e.IE&&e.MajorVersion<9&&(r+=getIe8BorderWidthFromText(n.borderLeftWidth))),"none"!==n.borderRightStyle&&(r+=parseFloat(n.borderRightWidth),e.IE&&e.MajorVersion<9&&(r+=getIe8BorderWidthFromText(n.borderRightWidth))),r}var ce=window.requestAnimationFrame||function(e){e()},fe=window.cancelAnimationFrame||function(e){};function de(e){fe(e)}function me(e){return ce(e)}var he=function(e){this.requestFrame=e,this.cache=[[]],this.isInFrame=!1,this.frameTimestamp=null,this.isWaiting=!1,this.getBuffer=function(e){return e||(e=0),this.cache.length<=e&&(this.cache[e]=[]),this.cache[e]},this.execute=function(e,t){if(!this.isInFrame)return!1;var n=this.cache[t||0];return null===n?e(pe,this.frameTimestamp):(n=this.getBuffer(t)).push(e),!0},this.runAll=function(e){this.isWaiting=!1,this.isInFrame=!0,this.frameTimestamp=e;for(var t=0;t<this.cache.length;t++){var n=this.cache[t];if(n)for(this.cache[t]=null;n.length;)n.shift()(pe,this.frameTimestamp)}this.waitNextFrame()},this.waitNextFrame=function(){this.cache=[[]],this.isInFrame=!1,this.isWaiting=!1},this.requestExecution=function(e,t){var n=this;return new Promise((function(r){function o(t,n){r(e(t,n))}n.execute(o,t)||(n.getBuffer(t).push(o),!1===n.isWaiting&&(n.isWaiting=!0,n.requestFrame(n.runAll.bind(n))))}))}},pe=null;function ge(e){var t=new he(e);return t.requestExecution.bind(t)}var ve=ge((function(e){return pe=me(e)})),ye=ge((function(e){return ve((function(){setTimeout(e)}))}));function be(e){return ve(e)}function Ee(e){return ye(e)}var we=[];function Ie(e){we.splice(we.indexOf(e),1)}function Se(e,t){var n=function(e,t,n){return function(){if(e.compareDocumentPosition(document.body)&Node.DOCUMENT_POSITION_DISCONNECTED)return!1;var r=A(e);if("auto"===r.width)return!0;var o=parseInt(r.width)-oe(e);return n!==o&&t(n=o),!0}}(e,t,-1);return xe(n),n}function Ce(e,t){var n=function(e,t,n){return function(){if(e.compareDocumentPosition(document.body)&Node.DOCUMENT_POSITION_DISCONNECTED)return!1;var r=A(e);if("auto"===r.width)return!0;var o=parseInt(r.width)-oe(e),i=parseInt(r.height)-ie(e);return n.width===o&&n.height===i||(n.width=o,n.height=i,t(n)),!0}}(e,t,{width:-1,height:-1});return xe(n),n}function Ne(e,t){xe(function(e,t){return function(){return!(e.compareDocumentPosition(document.body)&Node.DOCUMENT_POSITION_DISCONNECTED)||(t(),!1)}}(e,t))}function xe(e){0===we.length?(we.push(e),Ee(Te)):we.push(e)}function Te(){(we=we.filter((function(e){return e()}))).length>0&&setTimeout((function(){Ee(Te)}),50)}function Fe(e,t){var n=[];for(var r in t)t.hasOwnProperty(r)&&n.push({attr:r,value:t[r]});if(1===n.length)e.style[n[0].attr]=n[0].value;else{var o="";if(e.style.cssText)for(var i=e.style.cssText.split(";").map((function(e){return e.trim().split(":")})),a=0;a<i.length;a++){var u=i[a];2===u.length&&void 0===t[u[0]]&&(o+=u[0]+":"+u[1].trim()+";")}for(a=0;a<n.length;a++){var s=n[a];""!==s.value&&(o+=s.attr+":"+s.value+";")}re(e,"style",o)}}function We(e,t){for(var n in null===t.inlineStyles?ne(e,"style"):Fe(e,t.inlineStyles),t.attributes)t.attributes.hasOwnProperty(n)&&re(e,n,t.attributes[n]);var r=L(t);if(r){var o=t.cssClassToggleInfo,i=r.filter((function(e){return!1!==o[e]}));for(var a in o)o.hasOwnProperty(a)&&o[a]&&-1===i.indexOf(a)&&i.push(a);var u=i.join(" ");u?B(e,u):ne(e,"class")}}function Oe(e){return{inlineStyles:{},cssClassToggleInfo:{},className:P(e),attributes:{}}}function _e(e,t){if(void 0===e.length){var n=e;n._dxCurrentFrameElementStateInfo?t(n._dxCurrentFrameElementStateInfo):(t(n._dxCurrentFrameElementStateInfo=Oe(n)),be((function(){We(n,n._dxCurrentFrameElementStateInfo),n._dxCurrentFrameElementStateInfo=null})))}else for(var r=0;r<e.length;r++)_e(e[r],t)}function Le(e,t){_e(e,(function(e){if(null===e.inlineStyles)e.inlineStyles=t;else for(var n in t)t.hasOwnProperty(n)&&(e.inlineStyles[n]=t[n])}))}function Pe(e){_e(e,(function(e){e.inlineStyles=null,e.cssClassToggleInfo["visually-hidden"]=!1}))}function Be(e,t,n){_e(e,(function(e){e.cssClassToggleInfo[t]=n}))}function De(e,t){_e(e,(function(e){e.cssClassToggleInfo={},e.className=t}))}function Ve(e,t,n){_e(e,(function(e){e.attributes[t]=n}))}function Ae(e){be(e)}function Me(e){return document.body.contains(e)}function qe(e,t){if(!e)return null;if(e.closest)return e.closest(t);do{if((e.matches||e.msMatchesSelector).call(e,t))return e;e=e.parentElement||e.parentNode}while(e&&"BODY"!==e.tagName);return null}function je(){return e.Edge?document.body?document.body.scrollLeft:document.documentElement.scrollLeft:e.WebKitFamily?document.documentElement.scrollLeft||document.body.scrollLeft:document.documentElement.scrollLeft}function Ke(){return e.WebKitFamily||e.Edge?e.MacOSMobilePlatform?window.pageYOffset:e.WebKitFamily&&document.documentElement.scrollTop||document.body.scrollTop:document.documentElement.scrollTop}function Re(e){if(e.attributes)for(var t=0;t<e.attributes.length;t++){var n=e.attributes[t].name;(n.startsWith("_bl_")||n.startsWith("id"))&&e.removeAttribute(n)}e.childNodes.forEach(e=>{Re(e)})}function He(e,t=!1){let n=t?e:e.parentNode;for(;n&&"static"==window.getComputedStyle(n).position;)n=n.parentNode;return n}function Ue(e){return ke(e,parseInt)}function Ye(e){return ke(e,parseFloat)}function ke(e,t){var n=0;if(null!=e&&""!=e)try{var r=e.indexOf("px");r>-1&&(n=t(e.substr(0,r)))}catch(e){}return n}const ze={FocusElement:U,SetInputAttribute:ee,SetCheckInputIndeterminate:k};export{Ne as $,O as A,Z as B,f as C,$ as D,W as E,U as F,d as G,Q as H,ee as I,oe as J,ie as K,G as L,ae as M,ue as N,se as O,x as P,te as Q,_ as R,E as S,le as T,de as U,me as V,be as W,Ee as X,Ie as Y,Se as Z,Ce as _,m as a,Fe as a0,We as a1,Oe as a2,_e as a3,Le as a4,Pe as a5,Be as a6,De as a7,Ve as a8,Ae as a9,Me as aa,qe as ab,je as ac,Ke as ad,Re as ae,He as af,Ue as ag,Ye as ah,ze as ai,c as aj,h as b,p as c,v as d,y as e,b as f,w as g,I as h,C as i,F as j,L as k,P as l,B as m,D as n,V as o,A as p,M as q,j as r,K as s,R as t,H as u,Y as v,k as w,z as x,J as y,X as z};