DxBlazorInternal.define("cjs-chunk-315094e9.js",(function(e,o,n){var t=e("./cjs-chunk-9eab2df8.js"),c=e("./cjs-chunk-f9f4d45f.js"),u={};function r(e,o,n,t){t&&i(o)&&s(o),void 0===u[o]&&(u[o]=setTimeout((function(){e(),u[o]=void 0}),n))}function i(e){return!!u[e]}function s(e){clearTimeout(u[e]),u[e]=void 0}var a={touchMouseDownEventName:t.Browser.WebKitTouchUI?"touchstart":t.Browser.Edge&&t.Browser.MSTouchUI&&window.PointerEvent?"pointerdown":"mousedown",touchMouseUpEventName:t.Browser.WebKitTouchUI?"touchend":t.Browser.Edge&&t.Browser.MSTouchUI&&window.PointerEvent?"pointerup":"mouseup",touchMouseMoveEventName:t.Browser.WebKitTouchUI?"touchmove":t.Browser.Edge&&t.Browser.MSTouchUI&&window.PointerEvent?"pointermove":"mousemove"},h=function(){var e,o,n=0;function t(e,o,n,t){e[t=t||n.name]||(e[t]=n),c.DetachEventFromElement(e,o,n=e[t]),c.AttachEventToElement(e,o,n)}function u(o){f(o)&&(n++,r((function(){!function(o){1===n&&(n=0,e.call(this,o))}(o)}),"longPress",500,!0))}function a(e){f(e)&&(n=0,s("longPress"))}function h(e){i("longPress")&&(n=0,s("longPress"))}function f(e){return e.timeStamp!==o&&(o=e.timeStamp,!0)}return{attachEventToElement:t,attachLongTabEventToElement:function(o,n){e=n,t(o,"touchstart",u,"ts"),t(o,"touchend",a,"te"),t(o,"touchmove",h,"tm")},longTouchTimeout:500}}();n.LongTabEventHelper=h,n.TouchUIHelper=a,n.clearUnforcedFunctionByKey=s,n.hasUnforcedFunction=i,n.unforcedFunctionCall=r}),["cjs-chunk-9eab2df8.js","cjs-chunk-f9f4d45f.js"]);