!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ThreeSixty=e():t.ThreeSixty=e()}(window,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){"use strict";(function(t){function i(t,e){var i=e.get(t);if(!i)throw new TypeError("attempted to get private field on non-instance");return i.get?i.get.call(t):i.value}function s(t,e,i){var s=e.get(t);if(!s)throw new TypeError("attempted to set private field on non-instance");if(s.set)s.set.call(t,i);else{if(!s.writable)throw new TypeError("attempted to set read only private field");s.value=i}return i}var n=new WeakMap,o=new WeakMap,r=new WeakMap;e.a=class{constructor(t,e){n.set(this,{writable:!0,value:null}),o.set(this,{writable:!0,value:null}),r.set(this,{writable:!0,value:null}),s(this,o,e),s(this,r,{container:{mousedown:t=>s(this,n,t.pageX),touchstart:t=>s(this,n,t.touches[0].clientX),touchend:()=>s(this,n,null)},prev:{mousedown:e=>{e.preventDefault(),t.play(!0)},mouseup:e=>{e.preventDefault(),t.stop()},touchstart:e=>{e.preventDefault(),t.prev()}},next:{mousedown:e=>{e.preventDefault(),t.play()},mouseup:e=>{e.preventDefault(),t.stop()},touchstart:e=>{e.preventDefault(),t.next()}},global:{mouseup:()=>s(this,n,null),mousemove:e=>{i(this,n)&&Math.abs(i(this,n)-e.pageX)>i(this,o).dragTolerance&&(t.stop(),i(this,n)>e.pageX?t.prev():t.next(),s(this,n,e.pageX))},touchmove:e=>{i(this,n)&&Math.abs(i(this,n)-e.touches[0].clientX)>i(this,o).swipeTolerance&&(t.stop(),i(this,n)>e.touches[0].clientX?t.prev():t.next(),s(this,n,e.touches[0].clientX))},keydown:e=>{[37,39].includes(e.keyCode)&&t.play(37===e.keyCode)},keyup:e=>{[37,39].includes(e.keyCode)&&t.stop()}}}),this._initEvents()}destroy(){i(this,o).swipeTarget.removeEventListener("mousedown",i(this,r).container.mousedown),i(this,o).swipeTarget.removeEventListener("touchstart",i(this,r).container.touchstart),i(this,o).swipeTarget.removeEventListener("touchend",i(this,r).container.touchend),t.removeEventListener("mouseup",i(this,r).global.mouseup),t.removeEventListener("mousemove",i(this,r).global.mousemove),t.removeEventListener("touchmove",i(this,r).global.touchmove),t.removeEventListener("keydown",i(this,r).global.keydown),t.removeEventListener("keyup",i(this,r).global.keyup),i(this,o).prev&&(i(this,o).prev.removeEventListener("mousedown",i(this,r).prev.mousedown),i(this,o).prev.removeEventListener("mouseup",i(this,r).prev.mouseup),i(this,o).prev.removeEventListener("touchstart",i(this,r).prev.touchstart)),i(this,o).next&&(i(this,o).next.removeEventListener("mousedown",i(this,r).next.mousedown),i(this,o).next.removeEventListener("mouseup",i(this,r).next.mouseup),i(this,o).next.removeEventListener("touchstart",i(this,r).next.touchstart))}_initEvents(){i(this,o).draggable&&(i(this,o).swipeTarget.addEventListener("mousedown",i(this,r).container.mousedown),t.addEventListener("mouseup",i(this,r).global.mouseup),t.addEventListener("mousemove",i(this,r).global.mousemove)),i(this,o).swipeable&&(i(this,o).swipeTarget.addEventListener("touchstart",i(this,r).container.touchstart),i(this,o).swipeTarget.addEventListener("touchend",i(this,r).container.touchend),t.addEventListener("touchmove",i(this,r).global.touchmove)),i(this,o).keys&&(t.addEventListener("keydown",i(this,r).global.keydown),t.addEventListener("keyup",i(this,r).global.keyup)),i(this,o).prev&&(i(this,o).prev.addEventListener("mousedown",i(this,r).prev.mousedown),i(this,o).prev.addEventListener("mouseup",i(this,r).prev.mouseup),i(this,o).prev.addEventListener("touchstart",i(this,r).prev.touchstart)),i(this,o).next&&(i(this,o).next.addEventListener("mousedown",i(this,r).next.mousedown),i(this,o).next.addEventListener("mouseup",i(this,r).next.mouseup),i(this,o).next.addEventListener("touchstart",i(this,r).next.touchstart))}}}).call(this,i(0))},function(t,e,i){"use strict";i.r(e),function(t){var s=i(1);function n(t,e){var i=e.get(t);if(!i)throw new TypeError("attempted to get private field on non-instance");return i.get?i.get.call(t):i.value}function o(t,e,i){var s=e.get(t);if(!s)throw new TypeError("attempted to set private field on non-instance");if(s.set)s.set.call(t,i);else{if(!s.writable)throw new TypeError("attempted to set read only private field");s.value=i}return i}var r=new WeakMap,a=new WeakMap,h=new WeakMap,u=new WeakMap,l=new WeakMap,p=new WeakMap;e.default=class{constructor(t,e){r.set(this,{writable:!0,value:null}),a.set(this,{writable:!0,value:0}),h.set(this,{writable:!0,value:null}),u.set(this,{writable:!0,value:!1}),l.set(this,{writable:!0,value:null}),p.set(this,{writable:!0,value:!1}),this.container=t,o(this,r,Object.assign({width:300,height:300,count:0,perRow:0,speed:100,dragTolerance:10,swipeTolerance:10,draggable:!0,swipeable:!0,keys:!0,inverted:!1},e)),n(this,r).swipeTarget=n(this,r).swipeTarget||this.container,o(this,p,!Array.isArray(n(this,r).image)),this.sprite||(n(this,r).count=n(this,r).image.length),Object.freeze(n(this,r)),o(this,l,new s.a(this,n(this,r))),this._initContainer()}get index(){return n(this,a)}get looping(){return n(this,u)}get sprite(){return n(this,p)}next(){this.goto(n(this,r).inverted?n(this,a)-1:n(this,a)+1)}prev(){this.goto(n(this,r).inverted?n(this,a)+1:n(this,a)-1)}goto(t){o(this,a,(n(this,r).count+t)%n(this,r).count),this._update()}play(t){this.looping||(this._loop(t),o(this,u,!0))}stop(){this.looping&&(t.clearTimeout(n(this,h)),o(this,u,!1))}toggle(t){this.looping?this.stop():this.play(t)}destroy(){this.stop(),n(this,l).destroy(),this.container.style.width="",this.container.style.height="",this.container.style.backgroundImage="",this.container.style.backgroundPositionX="",this.container.style.backgroundPositionY="",this.container.style.backgroundSize=""}_loop(e){e?this.prev():this.next(),o(this,h,t.setTimeout(()=>{this._loop(e)},n(this,r).speed))}_update(){this.sprite?(this.container.style.backgroundPositionX=-n(this,a)%n(this,r).perRow*n(this,r).width+"px",this.container.style.backgroundPositionY=-Math.floor(n(this,a)/n(this,r).perRow)*n(this,r).height+"px"):this.container.style.backgroundImage=`url("${n(this,r).image[n(this,a)]}")`}_initContainer(){this.container.style.width=n(this,r).width+"px",this.container.style.height=n(this,r).height+"px",this.sprite&&(this.container.style.backgroundImage=`url("${n(this,r).image}")`,this.container.style.backgroundSize=100*n(this,r).perRow+"%"),this._update()}}}.call(this,i(0))}]).default});