!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.saWrapper=t():e.saWrapper=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){"use strict";r.r(t),r.d(t,"saWrapper",(function(){return i}));var n=r(0),o=r.n(n);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}sa&&(sa.trackTimerStart||(sa.trackTimerStart=function(){var e=Date.now();sa.trackTimerStartAt=e}),sa.trackTimerEnd||(sa.trackTimerEnd=function(e,t){var r=((Date.now()-sa.trackTimerStartAt)/6e4).toFixed(2);sa.track(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({duration:r},t))}));var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var r=e.eventName||"track_timer_event",n=function(e){if(sa&&sa.trackTimerEnd){var n;"function"==typeof t.prototype.getTrackTimerProperties&&(n=t.prototype.getTrackTimerProperties.apply(this)),sa.trackTimerEnd(r,n),e.preventDefault();var o="Are you sure";return e.returnValue=o,sa.trackTimerStart(r),o}},o=t.prototype.componentDidMount;t.prototype.componentDidMount=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];o.apply(this,t),sa&&sa.trackTimerStart?sa.trackTimerStart(r):console.log("sa.trackTimerStart does not exist"),window.addEventListener("beforeunload",n.bind(this),!1)};var a=t.prototype.componentWillUnmount;return t.prototype.componentWillUnmount=function(){if(a){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];a.apply(this,o)}var c;sa&&sa.trackTimerEnd?("function"==typeof t.prototype.getTrackTimerProperties&&(c=t.prototype.getTrackTimerProperties.apply(this)),sa.trackTimerEnd(r,c)):console.log("sa.trackTimerEnd does not exist");window.removeEventListener("beforeunload",n.bind(this),!1)},t}}}])}));