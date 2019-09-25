(function(){this.Calendly={},this.Calendly._util={}}).call(this),Calendly._util.domReady=function(t){var e=!1,n=function(){document.addEventListener?(document.removeEventListener("DOMContentLoaded",o),window.removeEventListener("load",o)):(document.detachEvent("onreadystatechange",o),window.detachEvent("onload",o))},o=function(){e||!document.addEventListener&&"load"!==event.type&&"complete"!==document.readyState||(e=!0,n(),t())};if("complete"===document.readyState)t();else if(document.addEventListener)document.addEventListener("DOMContentLoaded",o),window.addEventListener("load",o);else{document.attachEvent("onreadystatechange",o),window.attachEvent("onload",o);var i=!1;try{i=null==window.frameElement&&document.documentElement}catch(r){}i&&i.doScroll&&!function l(){if(!e){try{i.doScroll("left")}catch(o){return setTimeout(l,50)}e=!0,n(),t()}}()}},Calendly._util.assign=function(t){"use strict";if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},function(){Calendly._url={},Calendly._url.extractQueryStringParams=function(t){var e,n,o,i,r,l,a,u,d,s;for(a=document.createElement("a"),a.href=t,r=a.search.substr(1),l={},u=r.split("&"),e=0,o=u.length;o>e;e++)i=u[e],d=i.split("="),n=d[0],s=d[1],void 0!==s&&(l[n.toLowerCase()]=decodeURIComponent(s));return l},Calendly._url.stripQuery=function(t){return t.split("?")[0]}}.call(this),function(){Calendly._util.snakeCaseKeys=function(t){var e,n,o;o={};for(n in t)e=n.split(/(?=[A-Z])/).join("_").toLowerCase(),o[e]=t[n];return o},Calendly._util.pick=function(t,e){var n,o,i,r;if(t){for(r={},n=0,i=e.length;i>n;n++)o=e[n],t[o]&&(r[o]=t[o]);return r}}}.call(this),function(t,e){if("function"==typeof define&&define.amd)define(["exports"],e);else if("undefined"!=typeof exports)e(exports);else{var n={exports:{}};e(n.exports),t.bodyScrollLock=n.exports}}(this,function(t){"use strict";function e(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(t,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var o={get passive(){n=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),r=[],l=!1,a=-1,u=void 0,d=void 0,s=function(t){return r.some(function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))})},c=function(t){var e=t||window.event;return s(e.target)?!0:e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)},p=function(t){setTimeout(function(){if(void 0===d){var e=!!t&&t.reserveScrollBarGap===!0,n=window.innerWidth-document.documentElement.clientWidth;e&&n>0&&(d=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===u&&(u=document.body.style.overflow,document.body.style.overflow="hidden")})},h=function(){setTimeout(function(){void 0!==d&&(document.body.style.paddingRight=d,d=void 0),void 0!==u&&(document.body.style.overflow=u,u=void 0)})},y=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},m=function(t,e){var n=t.targetTouches[0].clientY-a;return s(t.target)?!1:e&&0===e.scrollTop&&n>0?c(t):y(e)&&0>n?c(t):(t.stopPropagation(),!0)};t.disableBodyScroll=function(t,o){if(i){if(!t)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(t&&!r.some(function(e){return e.targetElement===t})){var u={targetElement:t,options:o||{}};r=[].concat(e(r),[u]),t.ontouchstart=function(t){1===t.targetTouches.length&&(a=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&m(e,t)},l||(document.addEventListener("touchmove",c,n?{passive:!1}:void 0),l=!0)}}else{p(o);var d={targetElement:t,options:o||{}};r=[].concat(e(r),[d])}},t.clearAllBodyScrollLocks=function(){i?(r.forEach(function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null}),l&&(document.removeEventListener("touchmove",c,n?{passive:!1}:void 0),l=!1),r=[],a=-1):(h(),r=[])},t.enableBodyScroll=function(t){if(i){if(!t)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");t.ontouchstart=null,t.ontouchmove=null,r=r.filter(function(e){return e.targetElement!==t}),l&&0===r.length&&(document.removeEventListener("touchmove",c,n?{passive:!1}:void 0),l=!1)}else 1===r.length&&r[0].targetElement===t?(h(),r=[]):r=r.filter(function(e){return e.targetElement!==t})}}),function(){var t,e,n,o,i;Calendly._autoLoadInlineWidgets=function(){return Calendly._util.domReady(function(){return e()})},Calendly.initBadgeWidget=function(e){return Calendly._util.domReady(function(){return t(e)})},Calendly.destroyBadgeWidget=function(){return Calendly.badgeWidget?(Calendly.badgeWidget.destroy(),delete Calendly.badgeWidget):void 0},Calendly.initPopupWidget=function(t){return Calendly._util.domReady(function(){return Calendly.showPopupWidget(t.url,"PopupText",t)})},Calendly.initInlineWidget=function(t){return t.url?(t.parentElement||(t.parentElement=o()),Calendly._util.domReady(function(){return t.embedType="Inline",new Calendly.Iframe(t)})):void 0},Calendly.showPopupWidget=function(t,e,n){var o;return null==e&&(e="PopupText"),null==n&&(n={}),this.closePopupWidget(),o=function(){return delete Calendly.popupWidget},Calendly.popupWidget=new Calendly.PopupWidget(t,o,e,n),Calendly.popupWidget.show()},Calendly.closePopupWidget=function(){return Calendly.popupWidget?Calendly.popupWidget.close():void 0},o=function(){var t;return t=document.scripts[document.scripts.length-1],t.parentNode},e=function(){var t,e,n,o,r;for(e=document.querySelectorAll(".calendly-inline-widget"),r=[],n=0,o=e.length;o>n;n++)t=e[n],i(t)?r.push(void 0):(t.setAttribute("data-processed",!0),r.push(new Calendly.Iframe({parentElement:t,inlineStyles:!0,embedType:"Inline"})));return r},i=function(t){return t.getAttribute("data-processed")||"false"===t.getAttribute("data-auto-load")},t=function(t){var e,o,i;return Calendly.destroyBadgeWidget(),e=n(t),i=function(){return Calendly.showPopupWidget(t.url,"PopupWidget",t)},o=Calendly._util.assign({onClick:i},e),Calendly.badgeWidget=new Calendly.BadgeWidget(o)},n=function(t){var e,n;return e=["color","textColor","text","branding"],n={},e.forEach(function(e){return n[e]=t[e],delete t[e]}),n}}.call(this),function(){Calendly.Iframe=function(){function t(t){this.options=t,this.parseOptions(),this.build(),this.inject()}return t.prototype.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),t.prototype.parseOptions=function(){var t;if(t={inlineStyles:!1},this.options=Calendly._util.assign({},t,this.options),this.parent=this.options.parentElement,!this.parent)throw"Calendly: Parent element not set";if(this.parent.jquery&&(this.parent=this.parent[0]),this.inlineStyles=this.options.inlineStyles,this.embedType=this.options.embedType,this.url=(this.options.url||this.getUrlFromParent()).split("#")[0],!this.url)throw"Calendly: Widget URL not set"},t.prototype.build=function(){return this.node=document.createElement("iframe"),this.node.src=this.getSource(),this.node.width="100%",this.node.height="100%",this.node.frameBorder="0"},t.prototype.inject=function(){return this.format(),this.parent.appendChild(this.buildSpinner()),this.parent.appendChild(this.node)},t.prototype.getSource=function(){var t;return t=Calendly._url.stripQuery(this.url)+"?"+this.getParams(),this.filterConsentParam(t)},t.prototype.getUrlFromParent=function(){return this.parent.getAttribute("data-url")},t.prototype.getParams=function(){var t,e,n,o;e={embed_domain:this.getDomain(),embed_type:this.embedType},e=Calendly._util.assign(e,this.getUtmParamsFromHost(),this.getParamsFromUrl(),this.getParamsFromOptions()),n=[];for(t in e)o=e[t],n.push(t+"="+encodeURIComponent(o));return n.join("&")},t.prototype.getUtmParamsFromHost=function(){var t,e;return t=["utm_campaign","utm_source","utm_medium","utm_content","utm_term"],e=Calendly._url.extractQueryStringParams(window.location.href),Calendly._util.pick(e,t)},t.prototype.getParamsFromUrl=function(){return Calendly._url.extractQueryStringParams(this.url)},t.prototype.getParamsFromOptions=function(){return Calendly._util.assign({},this.getPrefillParams(),this.getUtmParams())},t.prototype.getUtmParams=function(){var t;return this.options.utm?(t=["utmCampaign","utmSource","utmMedium","utmContent","utmTerm"],Calendly._util.snakeCaseKeys(Calendly._util.pick(this.options.utm,t))):null},t.prototype.getPrefillParams=function(){var t,e,n,o,i;if(!this.options.prefill)return null;if(e=["name","firstName","lastName","email"],n=Calendly._util.snakeCaseKeys(Calendly._util.pick(this.options.prefill,e)),this.options.prefill.customAnswers){o=this.options.prefill.customAnswers;for(t in o)i=o[t],t.match(/^a\d{1,2}$/)&&(n[t]=i)}return n},t.prototype.getDomain=function(){return document.location.host},t.prototype.filterConsentParam=function(t){return t.replace(/consent_accept=1&?/g,"")},t.prototype.format=function(){return this.isMobile?this.formatMobile():this.formatDesktop()},t.prototype.formatDesktop=function(){return this.inlineStyles?this.parent.setAttribute("style","position: relative;"+this.parent.getAttribute("style")):void 0},t.prototype.formatMobile=function(){return this.inlineStyles?this.parent.setAttribute("style","position: relative;overflow-y:auto;-webkit-overflow-scrolling:touch;"+this.parent.getAttribute("style")):this.parent.className+=" mobile"},t.prototype.buildSpinner=function(){var t;return t=document.createElement("div"),t.className="spinner",t.appendChild(this.buildBounce(1)),t.appendChild(this.buildBounce(2)),t.appendChild(this.buildBounce(3)),t},t.prototype.buildBounce=function(t){var e;return e=document.createElement("div"),e.className="bounce"+t,e},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Calendly.PopupWidget=function(){function e(e,n,o,i){this.url=e,this.onClose=n,this.embedType=o,this.options=null!=i?i:{},this.close=t(this.close,this)}return e.prototype.show=function(){return this.buildOverlay(),this.insertOverlay(),this.lockPageScroll()},e.prototype.close=function(){return this.unlockPageScroll(),this.destroyOverlay(),this.onClose()},e.prototype.buildOverlay=function(){return this.overlay=document.createElement("div"),this.overlay.className="calendly-overlay",this.overlay.appendChild(this.buildCloseOverlay()),this.overlay.appendChild(this.buildPopup()),this.overlay.appendChild(this.buildCloseButton())},e.prototype.insertOverlay=function(){return document.body.appendChild(this.overlay)},e.prototype.buildCloseOverlay=function(){var t;return t=document.createElement("div"),t.className="calendly-close-overlay",t.onclick=this.close,t},e.prototype.buildPopup=function(){var t;return t=document.createElement("div"),t.className="calendly-popup",t.appendChild(this.buildPopupContent()),t},e.prototype.buildPopupContent=function(){var t;return t=document.createElement("div"),t.className="calendly-popup-content",t.setAttribute("data-url",this.url),this.options.parentElement=t,this.options.embedType=this.embedType,new Calendly.Iframe(this.options),t},e.prototype.buildCloseButton=function(){var t;return t=document.createElement("div"),t.className="calendly-popup-close",t.onclick=this.close,t},e.prototype.destroyOverlay=function(){return this.overlay.parentNode.removeChild(this.overlay)},e.prototype.lockPageScroll=function(){return bodyScrollLock.disableBodyScroll(this.overlay),document.addEventListener("touchmove",this.handleLockedTouchmove,{passive:!1})},e.prototype.unlockPageScroll=function(){return bodyScrollLock.enableBodyScroll(this.overlay),document.removeEventListener("touchmove",this.handleLockedTouchmove,{passive:!1})},e.prototype.handleLockedTouchmove=function(t){return t.preventDefault()},e}()}.call(this),function(){Calendly.BadgeWidget=function(){function t(t){this.options=t,this.buildWidget(),this.insertWidget()}return t.prototype.destroy=function(){return this.widget.parentNode.removeChild(this.widget)},t.prototype.buildWidget=function(){return this.widget=document.createElement("div"),this.widget.className="calendly-badge-widget",this.widget.appendChild(this.buildContent())},t.prototype.insertWidget=function(){return document.body.insertBefore(this.widget,document.body.firstChild)},t.prototype.buildContent=function(){var t;return t=document.createElement("div"),t.className="calendly-badge-content","#ffffff"===this.options.color&&(t.className+=" white"),t.onclick=this.options.onClick,t.innerHTML=this.options.text,t.style.background=this.options.color,t.style.color=this.options.textColor,this.options.branding&&t.appendChild(this.buildBranding()),t},t.prototype.buildBranding=function(){var t;return t=document.createElement("span"),t.innerHTML="powered by Calendly",t},t}()}.call(this),Calendly._autoLoadInlineWidgets();
/*! lazysizes - v5.1.1 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}("undefined"!=typeof window?window:{},function(a,b){"use strict";var c,d;if(function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:d,noSupport:!0};var e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=c,h.initEvent(d,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),e({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=d.throttleDelay,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=!0===a)&&(g=33),b||(b=!0,d=e-(f.now()-c),d<0&&(d=0),a||d<9?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;a<d?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}},D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K=/^img$/i,L=/^iframe$/i,M="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),N=0,O=0,P=0,Q=-1,R=function(a){P--,(!a||P<0||!a.target)&&(P=0)},S=function(a){return null==J&&(J="hidden"==x(b.body,"visibility")),J||"hidden"!=x(a.parentNode,"visibility")&&"hidden"!=x(a,"visibility")},T=function(a,c){var d,f=a,g=S(a);for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)(g=(x(f,"opacity")||1)>0)&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},U=function(){var a,f,h,j,k,m,n,p,q,r,s,t,u=c.elements;if((o=d.loadMode)&&P<8&&(a=u.length)){for(f=0,Q++;f<a;f++)if(u[f]&&!u[f]._lazyRace)if(!M||c.prematureUnveil&&c.prematureUnveil(u[f]))aa(u[f]);else if((p=u[f][i]("data-expand"))&&(m=1*p)||(m=O),r||(r=!d.expand||d.expand<1?e.clientHeight>500&&e.clientWidth>500?500:370:d.expand,c._defEx=r,s=r*d.expFactor,t=d.hFac,J=null,O<s&&P<1&&Q>2&&o>2&&!b.hidden?(O=s,Q=0):O=o>1&&Q>1&&P<6?r:N),q!==m&&(y=innerWidth+m*t,D=innerHeight+m,n=-1*m,q=m),h=u[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*t&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||S(u[f]))&&(l&&P<3&&!p&&(o<3||Q<4)||T(u[f],m))){if(aa(u[f]),k=!0,P>9)break}else!k&&l&&!j&&P<4&&Q<4&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=u[f][i](d.sizesAttr)))&&(j=g[0]||u[f]);j&&!k&&aa(j)}},V=B(U),W=function(a){var b=a.target;if(b._lazyCache)return void delete b._lazyCache;R(a),s(b,d.loadedClass),t(b,d.loadingClass),u(b,Y),v(b,"lazyloaded")},X=A(W),Y=function(a){X({target:a.target})},Z=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},$=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},_=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},s(a,d.loadingClass),p&&(clearTimeout(m),m=k(R,2500),u(a,Y,!0)),l&&q.call(j.getElementsByTagName("source"),$),h?a.setAttribute("srcset",h):g&&!l&&(L.test(a.nodeName)?Z(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){var b=a.complete&&a.naturalWidth>1;p&&!b||(b&&s(a,"ls-is-cached"),W(o),a._lazyCache=!0,k(function(){"_lazyCache"in a&&delete a._lazyCache},9)),"lazy"==a.loading&&P--},!0)}),aa=function(a){if(!a._lazyRace){var b,c=K.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,P++,_(a,b,f,e,c))}},ba=C(function(){d.loadMode=3,V()}),ca=function(){3==d.loadMode&&(d.loadMode=2),ba()},da=function(){if(!l){if(f.now()-p<999)return void k(da,999);l=!0,d.loadMode=3,V(),j("scroll",ca,!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),j("scroll",V,!0),j("resize",V,!0),a.MutationObserver?new MutationObserver(V).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",V,!0),e[h]("DOMAttrModified",V,!0),setInterval(V,999)),j("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){b[h](a,V,!0)}),/d$|^c/.test(b.readyState)?da():(j("load",da),b[h]("DOMContentLoaded",V),k(da,2e4)),c.elements.length?(U(),z._lsFlush()):V()},checkElems:V,unveil:aa,_aLSL:ca}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){!F.i&&b.getElementsByClassName&&(F.i=!0,E._(),D._())};return k(function(){d.init&&F()}),c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}});
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ThreeSixty=e():t.ThreeSixty=e()}(window,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){"use strict";(function(t){function i(t,e){var i=e.get(t);if(!i)throw new TypeError("attempted to get private field on non-instance");return i.get?i.get.call(t):i.value}function s(t,e,i){var s=e.get(t);if(!s)throw new TypeError("attempted to set private field on non-instance");if(s.set)s.set.call(t,i);else{if(!s.writable)throw new TypeError("attempted to set read only private field");s.value=i}return i}var n=new WeakMap,o=new WeakMap,r=new WeakMap;e.a=class{constructor(t,e){n.set(this,{writable:!0,value:null}),o.set(this,{writable:!0,value:null}),r.set(this,{writable:!0,value:null}),s(this,o,e),s(this,r,{container:{mousedown:t=>s(this,n,t.pageX),touchstart:t=>s(this,n,t.touches[0].clientX),touchend:()=>s(this,n,null)},prev:{mousedown:e=>{e.preventDefault(),t.play(!0)},mouseup:e=>{e.preventDefault(),t.stop()},touchstart:e=>{e.preventDefault(),t.prev()}},next:{mousedown:e=>{e.preventDefault(),t.play()},mouseup:e=>{e.preventDefault(),t.stop()},touchstart:e=>{e.preventDefault(),t.next()}},global:{mouseup:()=>s(this,n,null),mousemove:e=>{i(this,n)&&Math.abs(i(this,n)-e.pageX)>i(this,o).dragTolerance&&(t.stop(),i(this,n)>e.pageX?t.prev():t.next(),s(this,n,e.pageX))},touchmove:e=>{i(this,n)&&Math.abs(i(this,n)-e.touches[0].clientX)>i(this,o).swipeTolerance&&(t.stop(),i(this,n)>e.touches[0].clientX?t.prev():t.next(),s(this,n,e.touches[0].clientX))},keydown:e=>{[37,39].includes(e.keyCode)&&t.play(37===e.keyCode)},keyup:e=>{[37,39].includes(e.keyCode)&&t.stop()}}}),this._initEvents()}destroy(){i(this,o).swipeTarget.removeEventListener("mousedown",i(this,r).container.mousedown),i(this,o).swipeTarget.removeEventListener("touchstart",i(this,r).container.touchstart),i(this,o).swipeTarget.removeEventListener("touchend",i(this,r).container.touchend),t.removeEventListener("mouseup",i(this,r).global.mouseup),t.removeEventListener("mousemove",i(this,r).global.mousemove),t.removeEventListener("touchmove",i(this,r).global.touchmove),t.removeEventListener("keydown",i(this,r).global.keydown),t.removeEventListener("keyup",i(this,r).global.keyup),i(this,o).prev&&(i(this,o).prev.removeEventListener("mousedown",i(this,r).prev.mousedown),i(this,o).prev.removeEventListener("mouseup",i(this,r).prev.mouseup),i(this,o).prev.removeEventListener("touchstart",i(this,r).prev.touchstart)),i(this,o).next&&(i(this,o).next.removeEventListener("mousedown",i(this,r).next.mousedown),i(this,o).next.removeEventListener("mouseup",i(this,r).next.mouseup),i(this,o).next.removeEventListener("touchstart",i(this,r).next.touchstart))}_initEvents(){i(this,o).draggable&&(i(this,o).swipeTarget.addEventListener("mousedown",i(this,r).container.mousedown),t.addEventListener("mouseup",i(this,r).global.mouseup),t.addEventListener("mousemove",i(this,r).global.mousemove)),i(this,o).swipeable&&(i(this,o).swipeTarget.addEventListener("touchstart",i(this,r).container.touchstart),i(this,o).swipeTarget.addEventListener("touchend",i(this,r).container.touchend),t.addEventListener("touchmove",i(this,r).global.touchmove)),i(this,o).keys&&(t.addEventListener("keydown",i(this,r).global.keydown),t.addEventListener("keyup",i(this,r).global.keyup)),i(this,o).prev&&(i(this,o).prev.addEventListener("mousedown",i(this,r).prev.mousedown),i(this,o).prev.addEventListener("mouseup",i(this,r).prev.mouseup),i(this,o).prev.addEventListener("touchstart",i(this,r).prev.touchstart)),i(this,o).next&&(i(this,o).next.addEventListener("mousedown",i(this,r).next.mousedown),i(this,o).next.addEventListener("mouseup",i(this,r).next.mouseup),i(this,o).next.addEventListener("touchstart",i(this,r).next.touchstart))}}}).call(this,i(0))},function(t,e,i){"use strict";i.r(e),function(t){var s=i(1);function n(t,e){var i=e.get(t);if(!i)throw new TypeError("attempted to get private field on non-instance");return i.get?i.get.call(t):i.value}function o(t,e,i){var s=e.get(t);if(!s)throw new TypeError("attempted to set private field on non-instance");if(s.set)s.set.call(t,i);else{if(!s.writable)throw new TypeError("attempted to set read only private field");s.value=i}return i}var r=new WeakMap,a=new WeakMap,h=new WeakMap,u=new WeakMap,l=new WeakMap,p=new WeakMap;e.default=class{constructor(t,e){r.set(this,{writable:!0,value:null}),a.set(this,{writable:!0,value:0}),h.set(this,{writable:!0,value:null}),u.set(this,{writable:!0,value:!1}),l.set(this,{writable:!0,value:null}),p.set(this,{writable:!0,value:!1}),this.container=t,o(this,r,Object.assign({width:300,height:300,count:0,perRow:0,speed:100,dragTolerance:10,swipeTolerance:10,draggable:!0,swipeable:!0,keys:!0,inverted:!1},e)),n(this,r).swipeTarget=n(this,r).swipeTarget||this.container,o(this,p,!Array.isArray(n(this,r).image)),this.sprite||(n(this,r).count=n(this,r).image.length),Object.freeze(n(this,r)),o(this,l,new s.a(this,n(this,r))),this._initContainer()}get index(){return n(this,a)}get looping(){return n(this,u)}get sprite(){return n(this,p)}next(){this.goto(n(this,r).inverted?n(this,a)-1:n(this,a)+1)}prev(){this.goto(n(this,r).inverted?n(this,a)+1:n(this,a)-1)}goto(t){o(this,a,(n(this,r).count+t)%n(this,r).count),this._update()}play(t){this.looping||(this._loop(t),o(this,u,!0))}stop(){this.looping&&(t.clearTimeout(n(this,h)),o(this,u,!1))}toggle(t){this.looping?this.stop():this.play(t)}destroy(){this.stop(),n(this,l).destroy(),this.container.style.width="",this.container.style.height="",this.container.style.backgroundImage="",this.container.style.backgroundPositionX="",this.container.style.backgroundPositionY="",this.container.style.backgroundSize=""}_loop(e){e?this.prev():this.next(),o(this,h,t.setTimeout(()=>{this._loop(e)},n(this,r).speed))}_update(){this.sprite?(this.container.style.backgroundPositionX=-n(this,a)%n(this,r).perRow*n(this,r).width+"px",this.container.style.backgroundPositionY=-Math.floor(n(this,a)/n(this,r).perRow)*n(this,r).height+"px"):this.container.style.backgroundImage=`url("${n(this,r).image[n(this,a)]}")`}_initContainer(){this.container.style.width=n(this,r).width+"px",this.container.style.height=n(this,r).height+"px",this.sprite&&(this.container.style.backgroundImage=`url("${n(this,r).image}")`,this.container.style.backgroundSize=100*n(this,r).perRow+"%"),this._update()}}}.call(this,i(0))}]).default});
// Utility function
function Util () {};

/* 
	class manipulation functions
*/
Util.hasClass = function(el, className) {
	if (el.classList) return el.classList.contains(className);
	else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

Util.addClass = function(el, className) {
	var classList = className.split(' ');
 	if (el.classList) el.classList.add(classList[0]);
 	else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
 	if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function(el, className) {
	var classList = className.split(' ');
	if (el.classList) el.classList.remove(classList[0]);	
	else if(Util.hasClass(el, classList[0])) {
		var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
		el.className=el.className.replace(reg, ' ');
	}
	if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

Util.toggleClass = function(el, className, bool) {
	if(bool) Util.addClass(el, className);
	else Util.removeClass(el, className);
};

Util.setAttributes = function(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

/* 
  DOM manipulation
*/
Util.getChildrenByClassName = function(el, className) {
  var children = el.children,
    childrenByClass = [];
  for (var i = 0; i < el.children.length; i++) {
    if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
  }
  return childrenByClass;
};

Util.is = function(elem, selector) {
  if(selector.nodeType){
    return elem === selector;
  }

  var qa = (typeof(selector) === 'string' ? document.querySelectorAll(selector) : selector),
    length = qa.length,
    returnArr = [];

  while(length--){
    if(qa[length] === elem){
      return true;
    }
  }

  return false;
};

/* 
	Animate height of an element
*/
Util.setHeight = function(start, to, element, duration, cb) {
	var change = to - start,
	    currentTime = null;

  var animateHeight = function(timestamp){  
    if (!currentTime) currentTime = timestamp;         
    var progress = timestamp - currentTime;
    var val = parseInt((progress/duration)*change + start);
    element.style.height = val+"px";
    if(progress < duration) {
        window.requestAnimationFrame(animateHeight);
    } else {
    	cb();
    }
  };
  
  //set the height of the element before starting animation -> fix bug on Safari
  element.style.height = start+"px";
  window.requestAnimationFrame(animateHeight);
};

/* 
	Smooth Scroll
*/

Util.scrollTo = function(final, duration, cb) {
  var start = window.scrollY || document.documentElement.scrollTop,
      currentTime = null;
      
  var animateScroll = function(timestamp){
  	if (!currentTime) currentTime = timestamp;        
    var progress = timestamp - currentTime;
    if(progress > duration) progress = duration;
    var val = Math.easeInOutQuad(progress, start, final-start, duration);
    window.scrollTo(0, val);
    if(progress < duration) {
        window.requestAnimationFrame(animateScroll);
    } else {
      cb && cb();
    }
  };

  window.requestAnimationFrame(animateScroll);
};

/* 
  Focus utility classes
*/

//Move focus to an element
Util.moveFocus = function (element) {
  if( !element ) element = document.getElementsByTagName("body")[0];
  element.focus();
  if (document.activeElement !== element) {
    element.setAttribute('tabindex','-1');
    element.focus();
  }
};

/* 
  Misc
*/

Util.getIndexInArray = function(array, el) {
  return Array.prototype.indexOf.call(array, el);
};

Util.cssSupports = function(property, value) {
  if('CSS' in window) {
    return CSS.supports(property, value);
  } else {
    var jsProperty = property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase();});
    return jsProperty in document.body.style;
  }
};

// merge a set of user options into plugin defaults
// https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
Util.extend = function() {
  // Variables
  var extended = {};
  var deep = false;
  var i = 0;
  var length = arguments.length;

  // Check if a deep merge
  if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
    deep = arguments[0];
    i++;
  }

  // Merge the object into the extended object
  var merge = function (obj) {
    for ( var prop in obj ) {
      if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
        // If deep merge and property is an object, merge properties
        if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
          extended[prop] = extend( true, extended[prop], obj[prop] );
        } else {
          extended[prop] = obj[prop];
        }
      }
    }
  };

  // Loop through each object and conduct a merge
  for ( ; i < length; i++ ) {
    var obj = arguments[i];
    merge(obj);
  }

  return extended;
};

// Check if Reduced Motion is enabled
Util.osHasReducedMotion = function() {
  var matchMediaObj = window.matchMedia('(prefers-reduced-motion: reduce)');
  if(matchMediaObj) return matchMediaObj.matches;
  return false; // return false if not supported
}; 

/* 
	Polyfills
*/
//Closest() method
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
	Element.prototype.closest = function(s) {
		var el = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (el.matches(s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1); 
		return null;
	};
}

//Custom Event() constructor
if ( typeof window.CustomEvent !== "function" ) {

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}

/* 
	Animation curves
*/
Math.easeInOutQuad = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};
'use strict';

if (document.getElementById('viewer')) {
  var fullWidthScale = function fullWidthScale(el, parent) {
    var scale = parent.clientWidth / el.offsetWidth;
    el.style.msTransform = 'scale(' + scale + ')';
    el.style.webkitTransform = 'scale(' + scale + ')';
    el.style.MozTransform = 'scale(' + scale + ')';
    el.style.OTransform = 'scale(' + scale + ')';
    el.style.transform = 'scale(' + scale + ')';
  }; //fullWidthScale(viewer, parent);


  var viewer = document.getElementById('viewer');
  var parent = viewer.parentNode;
  var threesixty = new ThreeSixty(viewer, {
    image: 'assets/img/spriteSm.jpg',
    width: 600,
    height: 300,
    count: 30,
    perRow: 6,
    speed: 100,
    prev: document.getElementById('left'),
    next: document.getElementById('right')
  });
  fullWidthScale(viewer, parent);
  var imgLg = new Image();

  imgLg.onload = function (threesixty) {
    threesixty.destroy();
    var threesixtyLg = new ThreeSixty(viewer, {
      image: 'assets/img/spriteLg.jpg',
      width: 1200,
      height: 600,
      count: 30,
      perRow: 6,
      speed: 100,
      prev: document.getElementById('left'),
      next: document.getElementById('right')
    });
    fullWidthScale(viewer, parent);
  }(threesixty);

  imgLg.src = 'assets/img/spriteLg.jpg';
  window.addEventListener('resize', function (e) {
    fullWidthScale(viewer, parent);
  });
  viewer.addEventListener('mouseover', function (e) {
    setTimeout(function () {
      parent.querySelector('.overlay').dataset.show = 'false';
    }, 3000);
  });
}