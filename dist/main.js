!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ShuffleAnimate=t():e.ShuffleAnimate=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.origin=Array.from(t.data.slice()),this.ease={easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}}return function(e,t,r){t&&n(e.prototype,t),r&&n(e,r)}(e,[{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}},{key:"update",value:function(e){var t=this,n=e&&!1===e.shuffle?this.origin.slice():this.shuffle(this.origin.slice());if(e&&e.target){var r=n.findIndex(function(t){return t.dataset.i===e.target});n=n.splice(r,1).concat(n)}n.map(function(n,r){var a=t.origin[r].offsetLeft,i=t.origin[r].offsetTop,c=n.offsetLeft,o=n.offsetTop,s=parseFloat(a-c),u=parseFloat(i-o),f=e&&e.time?e.time:"600ms",l=e&&e.ease?t.ease.hasOwnProperty(e.ease)?t.ease[e.ease]:e.ease:t.ease.easeInSine;if(n.style.willChange="transform",0===r&&e&&e.center){var b=n.parentElement,p=b.offsetWidth,d=.5*b.offsetHeight,y=parseFloat(.5*p-c)-.5*n.offsetWidth,m=parseFloat(d-o)-.5*n.offsetHeight,x=n.style.zIndex;return n.style.zIndex="999",n.style.webkitTransition="transform ".concat(f," ").concat(l),n.style.transition="transform ".concat(f," ").concat(l),n.style.webkitTransform="translate3d(".concat(y,"px, ").concat(m,"px, 0) scale(1.5, 1.5)"),n.style.transform="translate3d(".concat(y,"px, ").concat(m,"px, 0) scale(1.5, 1.5)"),void setTimeout(function(){n.style.zIndex=x,n.style.webkitTransform="translate3d(".concat(s,"px, ").concat(u,"px, 0) scale(1, 1)"),n.style.transform="translate3d(".concat(s,"px, ").concat(u,"px, 0) scale(1, 1)")},parseFloat(f))}n.style.webkitTransition="transform ".concat(f," ").concat(l),n.style.transition="transform ".concat(f," ").concat(l),n.style.webkitTransform="translate3d(".concat(s,"px, ").concat(u,"px, 0)"),n.style.transform="translate3d(".concat(s,"px, ").concat(u,"px, 0)")})}}]),e}();e.exports=r}])});
//# sourceMappingURL=main.js.map