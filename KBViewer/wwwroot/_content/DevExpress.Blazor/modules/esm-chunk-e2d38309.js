import{B as o}from"./esm-chunk-eaca7b99.js";import{D as t,x as n}from"./esm-chunk-dac9ea79.js";var e={};function u(o,t,n,u){u&&c(t)&&i(t),void 0===e[t]&&(e[t]=setTimeout((function(){o(),e[t]=void 0}),n))}function c(o){return!!e[o]}function i(o){clearTimeout(e[o]),e[o]=void 0}var s={touchMouseDownEventName:o.WebKitTouchUI?"touchstart":o.Edge&&o.MSTouchUI&&window.PointerEvent?"pointerdown":"mousedown",touchMouseUpEventName:o.WebKitTouchUI?"touchend":o.Edge&&o.MSTouchUI&&window.PointerEvent?"pointerup":"mouseup",touchMouseMoveEventName:o.WebKitTouchUI?"touchmove":o.Edge&&o.MSTouchUI&&window.PointerEvent?"pointermove":"mousemove"},a=function(){var o,e,s=0;function a(o,e,u,c){o[c=c||u.name]||(o[c]=u),t(o,e,u=o[c]),n(o,e,u)}function m(t){v(t)&&(s++,u((function(){!function(t){1===s&&(s=0,o.call(this,t))}(t)}),"longPress",500,!0))}function r(o){v(o)&&(s=0,i("longPress"))}function h(o){c("longPress")&&(s=0,i("longPress"))}function v(o){return o.timeStamp!==e&&(e=o.timeStamp,!0)}return{attachEventToElement:a,attachLongTabEventToElement:function(t,n){o=n,a(t,"touchstart",m,"ts"),a(t,"touchend",r,"te"),a(t,"touchmove",h,"tm")},longTouchTimeout:500}}();export{a as L,s as T,i as c,c as h,u};