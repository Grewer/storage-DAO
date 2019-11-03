!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.WebStorage=e():t.WebStorage=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(t){var e=this;this.status={SUCCESS:0,FAILURE:1,OVERFLOW:3,TIMEOUT:4},this.getKey=function(t){return e.preId+t},this.set=function(t,n,r){var o=e.status.SUCCESS,i=e.getKey(t);try{r=new Date(r).getTime()||r.getTime()}catch(t){r=(new Date).getTime()+26784e5}try{e.storage.setItem(i,r+e.timeSign+e.encrypt(n))}catch(t){o=e.status.OVERFLOW}return{status:o,key:i,value:n}},this.get=function(t){var n,r,o=e.status.SUCCESS,i=e.getKey(t),u=null,s=e.timeSign.length;try{u=e.storage.getItem(i)}catch(t){return{status:e.status.FAILURE,value:null}}return u?(n=u.indexOf(e.timeSign),r=+u.slice(0,n),new Date(r).getTime()>(new Date).getTime()||0===r?u=e.decrypt(u.slice(n+s)):(u=null,o=e.status.TIMEOUT,e.remove(i))):o=e.status.FAILURE,{status:o,value:u}},this.remove=function(t){var n=e.status.FAILURE,r=e.getKey(t),o=null;try{o=e.storage.getItem(r)}catch(t){}if(o)try{e.storage.removeItem(r),n=e.status.SUCCESS}catch(t){}return{status:n,value:n>0?null:e.decrypt(o.slice(o.indexOf(e.timeSign)+e.timeSign.length))}},this.preId=t.preId,this.timeSign=t.timeSign||"|-|",this.storage=t.type&&"sessionStorage"===t.type?sessionStorage||window.sessionStorage:localStorage||window.localStorage,this.encrypt=t.encrypt||function(t){return window.btoa(t)},this.decrypt=t.decrypt||function(t){return window.atob(t)}};e.default=r}]).default}));