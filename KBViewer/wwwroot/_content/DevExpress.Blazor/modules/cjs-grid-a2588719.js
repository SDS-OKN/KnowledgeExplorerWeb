DxBlazorInternal.define("cjs-grid-a2588719.js",(function(e,t,l){var n=e("./cjs-chunk-9eab2df8.js"),o=e("./cjs-chunk-f9f4d45f.js"),r=e("./cjs-chunk-81f2aa27.js"),i=e("./cjs-chunk-315094e9.js");e("./cjs-chunk-98cdd37b.js");var a=e("./cjs-chunk-e26655d2.js"),c=".dxbs-table td.table-active",u=".dropdown-item.active",s=".dropdown-item.focused",d={GroupPanelHead:"gph",ColumnHead:"ch"};function h(e){if(!e.hasAttribute("data-dxdg-draggable"))return null;var t=e.getAttribute("data-dxdg-draggable").split("|"),l=!(t.length>2)||"1"===t[2],n=t.length>1?d[t[1]]:d.ColumnHead,o=n==d.ColumnHead?parseInt(t[0]):-1,r=n==d.GroupPanelHead?parseInt(t[0]):-1,i=e.previousElementSibling;return{columnVisibleIndex:o,groupVisibleIndex:r,columnHeadType:n,canBeGrouped:l,needInsertBeforeToo:!i||!h(i),element:e}}function f(e){return"[data-dxdg-draggable-id="+e+"]"}function g(e,t,l){var n,o,r;n=e,o=p(t,"clientX")-l.left,r=p(t,"clientY")-l.top,void(n.style.transform=["translate(",Math.round(o),"px, ",Math.round(r),"px)"].join(""))}function p(e,t){return void 0!==e[t]?e[t]:void 0!==e.touches?e.touches[0][t]:0}function m(e,t,l){var r=p(e,"clientX"),a=p(e,"clientY"),c=e.target,u=!1,s=function(e){var n=Math.abs(r-p(e,"clientX"))>10,s=Math.abs(a-p(e,"clientY"))>10;return(n||s)&&(u=!0,m(),function(e,t,l,n){var r=f(l),a=o.findParentBySelector(t,r);if(!a)return;var c=o.GetParentByClassName(a,"dxbs-gridview").getBoundingClientRect(),u=h(a),s=o.getDocumentScrollLeft(),m=o.getDocumentScrollTop(),H={left:0,top:0},E=function(e,t){for(var l=[],n=f(t),o=document.querySelectorAll(n),r=!1,i=!1,a=0;a<o.length;a++){var c=o[a],u=c.getBoundingClientRect(),s=h(c),g=s.columnVisibleIndex,p=s.groupVisibleIndex,m=s.columnHeadType;m==d.GroupPanelHead?r=!0:m==d.ColumnHead&&(i=!0),s.needInsertBeforeToo&&l.push(new v(c,u.left,u.top,u.bottom,g,p,m,!0,!1)),l.push(new v(c,u.right,u.top,u.bottom,g,p,m,!1,!1))}if(r||i){if(!r){var y=document.querySelector("[data-dxdg-drag-group-panel="+t+"]");if(y){u=y.getBoundingClientRect();l.push(new v(y,u.left,u.top,u.bottom,-1,0,d.GroupPanelHead,!1,!0,!0))}}if(!i){var S=document.querySelector("[data-dxdg-drag-head-row="+t+"]");if(S){u=S.getBoundingClientRect();l.push(new v(S,u.right,u.top,u.bottom,-1,-1,d.ColumnHead,!1,!0,!0))}}}return l}(0,l),T=function(e,t){var l=e.cloneNode(!0),n=e.getBoundingClientRect(),o={left:p(t,"clientX")-n.left,top:p(t,"clientY")-n.top};if("DIV"!=l.tagName){var r=document.createElement("DIV"),i=window.getComputedStyle(e);r.innerHTML=l.innerHTML,r.className="card "+e.className,r.style.width=n.width+"px",r.style.height=n.height+"px",r.style.paddingTop=i.paddingTop,r.style.paddingBottom=i.paddingBottom,r.style.paddingLeft=i.paddingLeft,r.style.paddingRight=i.paddingRight,l=r}else l.style.width=n.width+"px",l.style.height=n.height+"px";l.className=l.className+" dx-dragging-state",document.body.appendChild(l);var a=l.getBoundingClientRect();return{dragElement:l,offsetFromMouse:{left:a.left+o.left,top:a.top+o.top}}}(a,e),b=T.dragElement,x=T.offsetFromMouse;g(b,e,x);var w=!0,I=null,D=function(e){return w&&(b.style.visibility="visible",w=!1),g(b,e,{left:x.left+H.left,top:x.top+H.top}),I=function(e,t,l,n,r,i){!function(e){for(var t=f(e),l=document.querySelectorAll("div.dxgv-target-marks"+t),n=0;n<l.length;n++){var o=l[n];o.parentNode.removeChild(o)}}(t);for(var a=null,c=[],u=p(n,"clientX"),s=p(n,"clientY"),h=0;h<e.length;h++){var g=e[h];if(g.columnHeadType!=d.GroupPanelHead||l.canBeGrouped)if(g.top+r.top<=s&&s<=g.bottom+r.top){if(g.wholeRowIsRarget){a=g;break}c.push({distance:Math.abs(Math.abs(g.x+r.left)-Math.abs(u)),target:g})}}if(null==a){var m=1e6;for(var h in c)m>c[h].distance&&S(u,l,c[h].target)&&(m=c[h].distance,a=c[h].target)}null==a||y(l,a)||a.x>=i.left&&a.x<=i.right&&!function(e,t){var l=document.createElement("DIV");l.className="dxgv-target-marks",l.dataset.dxdgDraggableId=t,l.style.top=e.top+(e.docScrollTop-o.getDocumentScrollTop())+o.getDocumentScrollTop()-1-1+"px",l.style.height=e.bottom-e.top+2+"px",l.style.left=e.x+(e.docScrollLeft-o.getDocumentScrollLeft())+o.getDocumentScrollLeft()+"px",l.innerHTML=["<span class='oi oi-arrow-bottom' aria-hidden='true'></span>","<div style='height:",l.style.height,"'></div>","<span class='oi oi-arrow-top' aria-hidden='true'></span>"].join(""),document.body.appendChild(l),e.mark=l}(a,t);return a}(E,l,u,e,H,c),e.preventDefault(),!1},R=function(){I&&!y(u,I)&&(n.invokeMethodAsync("OnGridColumnHeadDragNDrop",u.columnHeadType==d.GroupPanelHead?u.groupVisibleIndex:u.columnVisibleIndex,u.columnHeadType,I.columnHeadType==d.GroupPanelHead?I.groupVisibleIndex:I.columnVisibleIndex,I.columnHeadType,I.insertBefore),I.mark&&I.mark.parentNode.removeChild(I.mark));o.DetachEventFromElement(document,i.TouchUIHelper.touchMouseMoveEventName,D),o.DetachEventFromElement(document,i.TouchUIHelper.touchMouseUpEventName,R),o.DetachEventFromElement(window,"scroll",B),b.parentNode.removeChild(b)},B=function(){H={left:s-o.getDocumentScrollLeft(),top:m-o.getDocumentScrollTop()}};o.AttachEventToElement(document,i.TouchUIHelper.touchMouseMoveEventName,D),o.AttachEventToElement(document,i.TouchUIHelper.touchMouseUpEventName,R),o.AttachEventToElement(window,"scroll",B)}(e,c,t,l)),e.preventDefault(),!1},m=function(){o.DetachEventFromElement(document,i.TouchUIHelper.touchMouseMoveEventName,s),o.DetachEventFromElement(document,i.TouchUIHelper.touchMouseUpEventName,m),!u&&c&&n.Browser.WebKitTouchUI&&c.click()};return o.AttachEventToElement(document,i.TouchUIHelper.touchMouseMoveEventName,s),o.AttachEventToElement(document,i.TouchUIHelper.touchMouseUpEventName,m),e.preventDefault(),c.focus(),!1}function v(e,t,l,n,r,i,a,c,u){this.element=e,this.x=t,this.top=l,this.bottom=n,this.columnVisibleIndex=r,this.groupVisibleIndex=i,this.columnHeadType=a,this.insertBefore=c,this.wholeRowIsRarget=u,this.docScrollTop=o.getDocumentScrollTop(),this.docScrollLeft=o.getDocumentScrollLeft()}function y(e,t){function l(e,t){return t.groupVisibleIndex==e.groupVisibleIndex||t.groupVisibleIndex==e.groupVisibleIndex-1&&!t.insertBefore}function n(e,t){return t.columnVisibleIndex==e.columnVisibleIndex||t.columnVisibleIndex==e.columnVisibleIndex-1&&!t.insertBefore}return!(t.columnHeadType!=e.columnHeadType||e.columnHeadType!=d.GroupPanelHead||!l(e,t))||(!(t.columnHeadType!=e.columnHeadType||e.columnHeadType!=d.ColumnHead||!n(e,t))||(!(e.columnHeadType!=d.GroupPanelHead||t.columnHeadType!=d.ColumnHead||-1==e.columnVisibleIndex||!n(e,t))||!(e.columnHeadType!=d.ColumnHead||t.columnHeadType!=d.GroupPanelHead||-1==e.groupVisibleIndex||!l(e,t))))}function S(e,t,l){var n=t.element.getBoundingClientRect();if(y(t,l)&&(e<n.left||e>n.right))return!1;if(l.x<n.left){if(e>n.right)return!1}else if(e<n.left)return!1;return!0}d[1]=d.ColumnHead,d[0]=d.GroupPanelHead;var H=function(e,t,l){this._itemHeight=e,this._scrollTop=t,this._scrollHeight=l},E={itemHeight:{configurable:!0},scrollTop:{configurable:!0},scrollHeight:{configurable:!0}};function T(e){if(o.elementIsInDOM(e)){if(!(t=function(e){var t=e.querySelector("*[id$='_LB']");t||(t=e.parentNode.querySelector("*[id$='_LB']"));t||(t=e);if(t){var l=t.querySelector(u);if(l||(l=t.querySelector(c)),l)return l.parentNode}return null}(e)))var t=function(e){var t=null;o.QuerySelectorFromRoot(e,(function(l){t=e.querySelector("*"+l+" > *[id$='_LB']")})),t||o.QuerySelectorFromRoot(e.parentNode,(function(l){t=e.parentNode.querySelector("*"+l+" > *[id$='_LB']")}));var l=t?t.querySelector(c):null;return l?l.parentNode:null}(e);if(t){var l=e,n=t.offsetTop;if("TABLE"==t.offsetParent.tagName){var r=t.offsetParent.previousElementSibling;r&&(n+=r.clientHeight)}var i=l.scrollTop+l.clientHeight<n+t.offsetHeight;l.scrollTop>n&&(l.scrollTop=n),i&&(l.scrollTop=n-(l.clientHeight-t.offsetHeight))}}}function b(e){void 0===e.dataset.virtualScrollLock&&(e.dataset.virtualScrollLock=0)}function x(e){b(e),e.dataset.virtualScrollLock++}function w(e){b(e),e.dataset.virtualScrollLock--}function I(e,t,l,n,r,i,a){l.isHorizontalScrolling&&!function(e,t,l){if(t.scrollLeft===l.scrollLeft)return;var n=o.getEventSource(e);n===t?l.scrollLeft=t.scrollLeft:n===l&&window.setTimeout((function(){return t.scrollLeft=l.scrollLeft}),0)}(e,n,r),l.isVirtualScrolling&&function(e,t,l,n,o){if(r=l,b(r),r.dataset.virtualScrollLock>0)return;var r;!function(e,t,l,n,o){var r=!0;l.dataset.prevScrollTop?r=l.dataset.prevScrollTop!==l.scrollTop.toString():l.dataset.prevScrollTop=l.scrollTop;D(l),r&&(l.dataset.OnScrollTimerId=window.setTimeout((function(){!function(e,t,l,n,o){var r=R(t),i=V(t,o),a=i.scrollTop,c=i.scrollBottom,u=n.clientHeight>0&&c>l.offsetHeight+r.offsetHeight;(l.clientHeight>0&&a<l.offsetHeight||u)&&!function(e,t,l){if(e.dxScrollStateCache&&e.dxScrollStateCache.isEqual(l))return;e.dxScrollStateCache=l,t.DxRestoreScrollTop=t.scrollTop,x(t),e.invokeMethodAsync("OnGridVirtualScroll",l.itemHeight,l.scrollTop,l.scrollHeight).then((function(l){!function(e,t){e.dotNetComponentReference=t,j(e)}(l,e),w(t)})).catch(q)}(e,t,i.requestScrollState)}(e,l,n,o,!1),t.needInternalSettings&&M(t)}),200))}(e,t,l,n,o)}(t,l,n,i,a)}function D(e){e.dataset.OnScrollTimerId&&(clearTimeout(e.dataset.OnScrollTimerId),delete e.dataset.OnScrollTimerId)}function R(e){var t=e.querySelector("table.dxbs-table"),l=e.parentNode.querySelector("div.dxbs-listbox > ul");return t||l}function B(e,t,l,n,o){var r=R(t),i=function(e,t){var l=N(e);return{itemHeight:l,spacerTop:t.virtualScrollingOptions.itemsAbove*l,spacerBelow:t.virtualScrollingOptions.itemsBelow*l}}(r,o);l.style.height=i.spacerTop+"px",n.style.height=i.spacerBelow+"px",function(e,t,l,n){if(e.clientHeight>t.offsetHeight)return;e.scrollTop<l.clientHeight&&(e.scrollTop=l.clientHeight+1);e.scrollTop+e.clientHeight>l.clientHeight+t.offsetHeight&&(e.scrollTop=l.clientHeight+t.offsetHeight-e.clientHeight-1)}(t,r,l)}function N(e){for(var t=function(e){var t=[];return e.dataset.tempUniqueId="tempUniqueId","TABLE"===e.tagName?t=e.parentNode.querySelectorAll("TABLE[data-temp-unique-id] > TBODY > TR"):"UL"===e.tagName&&(t=e.parentNode.querySelectorAll("ul[data-temp-unique-id] > li")),delete e.dataset.tempUniqueId,t}(e),l={},n=0;n<t.length;n++){var o=t[n];l[o.offsetHeight]=l[o.offsetHeight]?l[o.offsetHeight]+1:1}var r=0,i=0;for(var a in l)l[a]>i&&(i=l[a],r=a);return Number.parseInt(r)}function V(e,t){var l=300,n=300;t&&(l=0,n=0);var o=R(e),r=e.scrollTop-l;r<0&&(r=0);var i=e.scrollTop+e.clientHeight+n,a=r-l;a<0&&(a=0);var c=i-a+n,u=N(o);return{scrollTop:r,scrollBottom:i,requestScrollState:new H(u,a,c)}}function q(e){e&&e.mainElement&&A(e.mainElement)}function C(e,t){return(t.isVerticalScrolling||t.isVirtualScrolling)&&(e.clientHeight<e.scrollHeight||"scroll"==e.style.overflowY)}function L(e){return function(){if(e.ownerStyleSheet){var t=e.parentStyleSheet,l=Array.prototype.indexOf.call(t.cssRules,e);l>-1&&t.deleteRule(l)}}}function M(e){var t=e.elementsStorage,l=o.EnsureElement(e.mainElement).parentElement;if(l){var n=o.EnsureElement(t.scrollElement),r=o.EnsureElement(t.scrollHeaderElement),i=[];if(!n.style.maxHeight){var a=window.getComputedStyle(l);if(!a)return;var c=parseInt(a.borderTopWidth,10)+parseInt(a.borderBottomWidth,10);if(e.isDropDown){var u=parseInt(a.maxHeight,10)-c;n.style.maxHeight=u-r.offsetHeight+"px"}else{var s=o.subscribeElementContentSize(l,(function(e){n.style.maxHeight=e.height-r.offsetHeight+"px"})),d=o.subscribeElementContentSize(r,(function(e){n.style.maxHeight=l.clientHeight-(e.height+2*o.GetTopBottomBordersAndPaddingsSummaryValue(r))+"px"}));i.push((function(){o.unsubscribeElement(s),o.unsubscribeElement(d)})),n.style.maxHeight=l.clientHeight-r.offsetHeight+"px"}}var h=!0;if(l.dataset.calculated&&(h=e.isVirtualScrolling),h&&e.isDropDown&&2!=e.dropDownWidthMode){var f=n.querySelector("table"),g=r.querySelector("table");if(!f||!g)return;var p=D(f,"tbody>tr"),m=p&&1==p.length&&f.querySelector("tr.dxbs-empty-data-row"),v=D(g,"colgroup"),y=D(f,"colgroup");if(m)g.style.width="auto",f.style.width=window.getComputedStyle(g).width;else{var S=D(g,"thead>tr");if(!(v&&S&&p&&y))return;f.style.width=g.style.width="auto";for(var H=[],E=0;E<v.length;E++)if(v[E].style.width)if(-1!=v[E].style.width.indexOf("%"))H.push(E);else{var T=o.GetCurrentStyleSheet(),b=o.EnsureElement(e.mainElement).getAttribute("data-dxdg-id"),x=null;T&&(T.insertRule("[data-dxdg-id='"+b+"'] table tr>td:nth-child("+(E+1)+"), [data-dxdg-id='"+b+"'] table tr>th:nth-child("+(E+1)+") { max-width:"+v[E].style.width+"; }",T.cssRules.length),x=T.cssRules[T.cssRules.length-1]),i.push(L(x))}else v[E].dataset.autoWidth=!0,k(v[E],y[E],S[E],p[E]);if(H.length>0)for(var w=0;w<H.length;w++)k(v[w],y[w],S[w],p[w])}if(0==e.dropDownWidthMode){var I=o.GetParentByClassName(l,"dx-blazor-multicolumn-editor");I&&I.offsetWidth>=l.offsetWidth&&(!function(e,t,l,n){e.style.width=null,t.style.width=null;for(var o=0;o<l.length;o++)if(l[o].dataset.autoWidth&&(l[o].style.width=null,n)){var r=n.item(o);r&&(r.style.width=null)}}(g,f,v,y),l.style.width=I.offsetWidth+"px")}l.dataset.calculated=!0}return i.length>0?function(){i.forEach((function(e){return e()}))}:null}function D(e,t){var l=e.querySelector(t);return l?l.children:null}}function k(e,t,l,n){var o=l.offsetWidth,r=n.offsetWidth;o>r?t.style.width=e.style.width=o+"px":o<r&&(t.style.width=e.style.width=r+"px")}function j(e){var t=o.EnsureElement(e.mainElement);if(t){var l=e.dotNetComponentReference,n=e.scrollToSelectedItemRequested,c=e.elementsStorage,u=o.EnsureElement(c.scrollElement),s=o.EnsureElement(c.scrollHeaderElement),d=o.EnsureElement(c.virtualScrollSpacerTopElement),h=o.EnsureElement(c.virtualScrollSpacerBottomElement);t=o.EnsureElement(t),r.DisposeEvents(t);var f=null,g=null,p=null,v=null,y=null;e.needInternalSettings&&(y=M(e)),u=o.EnsureElement(u);var S=null;u&&(s=o.EnsureElement(s),x(u),e.isVirtualScrolling&&(d=o.EnsureElement(d),h=o.EnsureElement(h)),(e.isVirtualScrolling||e.isVerticalScrolling)&&function(e,t,l){if((l.isVerticalScrolling||l.isVirtualScrolling)&&t){var n=[t];if(C(e,l)){var o=a.GetVerticalScrollBarWidth();if(17!==o||l.isHorizontalScrolling)for(var r=l.isHorizontalScrolling?"paddingRight":"marginRight",i=l.isHorizontalScrolling?"marginRight":"paddingRight",c=0,u=n.length;c<u;c++)n[c].style[r]="0",n[c].style[i]=o+"px";else e.style.paddingRight="",e.style.marginRight="",t.style.paddingRight="",t.style.marginRight=""}else e.style.paddingRight="0",e.style.marginRight="0",t.style.paddingRight="0",t.style.marginRight="0"}}(u,s,e),e.isVirtualScrolling&&(B(0,u,d,h,e),n?T(u):u.DxRestoreScrollTop&&(u.scrollTop=u.DxRestoreScrollTop,delete u.DxRestoreScrollTop)),S=function(e){for(var t=e.querySelectorAll(".btn.btn-toggle"),l=0,n=0;n<t.length;n++){var r=t[n],i=r.offsetWidth+o.GetLeftRightBordersAndPaddingsSummaryValue(r.parentNode);if(i>0){l=i;break}}var a=o.GetCurrentStyleSheet(),c=e.getAttribute("data-dxdg-id"),u=null;return a&&(a.insertRule("[data-dxdg-id='"+c+"'] > col.dxbs-grid-cols-togglebtn { width:"+l+"px !important; }",a.cssRules.length),u=a.cssRules[a.cssRules.length-1]),L(u)}(t),o.AttachEventToElement(u,"scroll",f=function(t){return I(t,l,e,u,s,d,h)}),s&&o.AttachEventToElement(s,"scroll",f),w(u),function(e){return!e.needInternalSettings&&(e.isHorizontalScrolling||e.isVerticalScrolling)}(e)&&((g=function(){!function(e,t,l,n,o,r){if(t){x(t);var i=t.style.overflowX;t.style.overflowX="hidden",t.style.width="0"}if(l){var c=l.style.overflowX;l.style.overflowX="hidden",l.style.width="0"}var u=e.clientWidth;if(t&&(u&&(t.style.width=u+"px"),t.style.overflowX=i),l){var s=C(t,r)?a.GetVerticalScrollBarWidth():0;u&&(l.style.width=u-s+"px"),l.style.overflowX=c}t&&w(t)}(t,u,s,0,0,e)})(),o.AttachEventToElement(window,"resize",g)));var H=null,E=null;if(e.isColumnDragEnabled){var b=t.dataset.dxdgId;b&&((H=t.querySelector("[data-dxdg-drag-head-row='"+b+"']"))&&o.AttachEventToElement(H,i.TouchUIHelper.touchMouseDownEventName,p=function(e){return m(e,b,l)}),(E=t.querySelector("[data-dxdg-gp='"+b+"']"))&&o.AttachEventToElement(E,i.TouchUIHelper.touchMouseDownEventName,v=function(e){return m(e,b,l)}))}return r.RegisterDisposableEvents(t,(function(){S&&S(),y&&y(),f&&(o.DetachEventFromElement(u,"scroll",f),s&&o.DetachEventFromElement(s,"scroll",f)),g&&o.DetachEventFromElement(window,"resize",g),u&&D(u),p&&H&&o.DetachEventFromElement(H,i.TouchUIHelper.touchMouseDownEventName,p),v&&E&&o.DetachEventFromElement(E,i.TouchUIHelper.touchMouseDownEventName,v)})),Promise.resolve("ok")}}function A(e){return(e=o.EnsureElement(e))&&r.DisposeEvents(e),Promise.resolve("ok")}E.itemHeight.get=function(){return this._itemHeight},E.scrollTop.get=function(){return this._scrollTop},E.scrollHeight.get=function(){return this._scrollHeight},H.prototype.isEqual=function(e){return this.itemHeight===e.itemHeight&&this.scrollTop===e.scrollTop&&this.scrollHeight===e.scrollHeight},Object.defineProperties(H.prototype,E);var G={Init:j,Dispose:A};l.Dispose=A,l.GetParametersForVirtualScrollingRequest=V,l.HasParametersForVirtualScrollingRequest=function(e){return null!==R(e)},l.Init=j,l.ScrollToFocusedItem=function(e){if(o.elementIsInDOM(e)){var t=function(e){var t=e.querySelector("*[id$='_LB']");t||(t=e.parentNode.querySelector("*[id$='_LB']"));t||(t=e);if(t){var l=t.querySelector(s);if(l)return"TR"==l.tagName?l:l.parentNode}return null}(e);if(t){var l=e.querySelector(".dxgvCSD");l||(l=e);var n=l.scrollTop+l.clientHeight<t.offsetTop+t.offsetHeight;l.scrollTop>t.offsetTop&&(l.scrollTop=t.offsetTop),n&&(l.scrollTop=t.offsetTop-(l.clientHeight-t.offsetHeight))}}},l.ScrollToSelectedItem=T,l.default=G}),["cjs-chunk-9eab2df8.js","cjs-chunk-f9f4d45f.js","cjs-chunk-81f2aa27.js","cjs-chunk-315094e9.js","cjs-chunk-98cdd37b.js","cjs-chunk-e26655d2.js"]);
