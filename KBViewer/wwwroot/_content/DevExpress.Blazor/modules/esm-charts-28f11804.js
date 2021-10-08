import"./esm-chunk-eaca7b99.js";import{H as e,E as t,W as n,X as o,p as i,x as r,a6 as u}from"./esm-chunk-dac9ea79.js";import"./esm-chunk-95f069f9.js";import{parseTranslateInfo as a,translatePosition as l}from"./esm-popup-utils-d6369604.js";var c=[];function s(e){var t=c.indexOf(e);return t>-1?c[t+1]:Promise.reject()}function d(e,t,n){return-1===c.indexOf(e)?function(e,t,n){var o=new Promise((function(o){import("./esm-devexpress.viz-5d8db4bd.js").then((function(i){let r=f(i,e.querySelector(".dx-chart"),t,o);n(t,r)}))}));return c.push(e),c.push(o),o}(e,t,n):s(e).then((function(e){return new Promise((function(o){n(t,(function(t){t.animation={enabled:!1},e.option(t),o("ok")}))}))})).catch(console.error)}function f(e,t,n,o){let i=n.series.map(e=>e.category)[0],r="pie"===i||"donut"===i?e.viz.dxPieChart:e.viz.dxChart;return function(e){e.type=i,o(new r(t,e))}}function p(e,t,n,o,i,u){i.forEach((function(i){r(e,i,(function(e){var i=m(t,n,o);i&&u(i)}))}))}function m(e,t,n){var o=e.getSeriesByPos(t);return n&&(o=o.getPoints().filter((function(e){return e.tag===n}))[0]),o}function h(e,n,o,i,r){if(e){var u=m(n,o,i);if(u){var a=e.querySelector(".dx-chart-legend-icon");if(a){var l=u.getColor();t(a,"dx-chart-def-icon")&&(a.style.backgroundColor=l),a.style.color=l}r||(p(e,n,o,i,["mouseover","focusin"],(function(e){e.hover(n.option("legend.hoverMode"))})),p(e,n,o,i,["mouseout","focusout"],(function(e){e.clearHover()})))}}}function g(t,n){var i=null,r=null,u=null,a={},l={},c=-1,s=null;function d(t,r){var u=t.tag;clearTimeout(c),c=setTimeout((function(){i=u,n.invokeMethodAsync("GetTooltipTemplate",[u]).then((function(t){return t=e(t),l[u]=t,function(e,t){return o((function(){var n=e.getBoundingClientRect();return'<div id="_'+t+'" class="dx-chart-tooltip-wrapper" style="width: '+n.width+"px; height: "+n.height+'px;"></div>'}))}(t,u)})).then((function(e){a[u]=e,i===u&&(s=t,r())})).catch((function(e){void 0}))}),100)}function f(e){var t;r=null,u&&(t=u,void import("./esm-popup-utils-d6369604.js").then((function(e){e.hide(t)})),u=null)}t.tooltip={enabled:!0,paddingLeftRight:0,paddingTopBottom:0,customizeTooltip:function(e){return a[e.point.tag]?{html:a[e.point.tag]}:(d(e.point,(function(){e.point.showTooltip()})),{text:""})}},t.onTooltipHidden=function(e){f()},t.onTooltipShown=function(e){f();var t=e.target;if(!t){if(!(t=s))return;s=null}var n=t.tag;a[n]&&(r=n,import("./esm-popup-utils-d6369604.js").then((function(e){r==n&&e.show(u=l[n],document.getElementById("_"+n),"top-sides left-sides")})))}}function v(e,t){return e._valueAxes.filter((function(e){return e.pane===t.name}))[0]}const x={Init:function(e,t,r){return d(e,t,(function(t,c){!function(e,t){if(e.palette)return t(e.palette);var r=["bg-primary","bg-success","bg-danger","bg-warning","bg-info","bg-secondary"],u=document.createElement("DIV");u.className="d-none position-absolute";for(var a=0;a<r.length;a++){var l=document.createElement("DIV");l.className=r[a],u.appendChild(l)}n((function(){document.body.appendChild(u),o((function(){for(var e=[],o=0;o<u.childNodes.length;o++)e.push(i(u.childNodes[o]).backgroundColor);n((function(){document.body.removeChild(u),t(e)}))}))}))}(t,(function(i){var s=!1;var d={tooltip:t.tooltip,dataSource:t.dataSource,palette:i,rotated:t.rotated,resolveLabelOverlapping:t.labelOverlap,size:t.size,commonAxisSettings:{label:{overlappingBehavior:"rotate",rotationAngle:45}},dataPrepareSettings:{sortingMethod:!1},commonSeriesSettings:{argumentField:"argument",valueField:"value",openValueField:"openValue",highValueField:"highValue",lowValueField:"lowValue",closeValueField:"closeValue",rangeValue1Field:"startValue",rangeValue2Field:"endValue",sizeField:"size",type:"bar"},adaptiveLayout:{width:0,height:0},seriesTemplate:{nameField:"seriesId",customizeSeries:function(e){return t.series.filter((function(t){return t.seriesId===e}))[0]}},customizeLabel:function(e){return e.data.pointLabel},customizePoint:function(e){return e.data.pointAppearance},legend:{visible:!1,hoverMode:(t.legend?t.legend.hoverMode:null)||"includepoints"},onDrawn:function(t){s||(s=!0,function(e,t){for(var n=e.querySelectorAll(".dx-chart-legend-item"),o=0;o<n.length;o++){var i=n[o],r=+i.getAttribute("data-series"),u=i.getAttribute("data-point");h(i,t,r,u,!0)}}(e,t.component),function(e,t){function i(e,t){n((function(){l(e,0,t)}))}function r(e,t,n,o,r){i(e,o),e.marginTop="-"+r+"px",i(t,-r),i(n,-r)}t.panes&&0!==t.panes.filter((function(e){return"default"!==e.name})).length&&o((function(){for(var o=0,u=t.panes.length-2;u>=0;u--){var l=t.panes[u],c=e.querySelector(".dx-chart-legend[data-pane='"+l.name+"']");if(c){var s=c.offsetHeight+o,d=v(t,l),f=d._axisGroup.element,p=d._axisGridGroup.element,m=p.getBoundingClientRect().bottom+10,h=a(c.style),g=c.getBoundingClientRect().top-h.top;t.series.filter((function(e){return e.pane===l.name})).forEach((function(e){i(e._group.element.style,-s)})),r(c.style,f.style,p.style,m-g,s),o+=s}}n((function(){t.option("margin",{top:o})}))}))}(e,t.component),u(e,"dx-loading",!1))},valueAxis:t.valueAxis,panes:t.panes,argumentAxis:t.argumentAxis,pathModified:!0};t.hasTooltipCustomization?g(d,r):d.tooltip=t.tooltip,c(d)}))})).then((function(){return Promise.resolve("ok")})).catch((function(e){void 0}))},Dispose:function(t){return function(t,n){t=e(t);var o=c.indexOf(t);return o>-1&&(c[o+1].then((function(e){e.dispose()})),c[o+1]=null,n&&(c[o]=null)),Promise.resolve()}(t,!0)},OnSeriesLegendElementReceived:function(e,t,n,o){return s(e).then((function(e){return h(o,e,t,n),Promise.resolve()})).catch((function(e){void 0}))},OnSeriesVisibleChanged:function(e,t,n,o){return s(e).then((function(e){var i=m(e,t,n);return o?i.show():i.hide(),Promise.resolve()})).catch((function(e){void 0}))},DestroyTooltips:function(){return new Promise((function(e,t){for(var n=Array.prototype.slice.call(document.querySelectorAll(".dxc-tooltip")),o=0;o<n.length;o++){var i=n[o];i.parentNode.removeChild(i)}e(!0)}))}};export default x;export{f as createWidgetBuilder};
