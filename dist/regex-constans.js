var mreg=function(r){var e={};function n(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=r,n.c=e,n.d=function(r,e,t){n.o(r,e)||Object.defineProperty(r,e,{configurable:!1,enumerable:!0,get:t})},n.r=function(r){Object.defineProperty(r,"__esModule",{value:!0})},n.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},n.p="",n(n.s=0)}([function(r,e,n){"use strict";n.r(e);const t=/^[^\d]*(\d+)/g,o=/[^\r\n]+/g;function i(r,e,n){if("string"!=typeof r)throw new TypeError("Argument 's' is not a string");if("string"!=typeof e)throw new TypeError("Argument 'search' is not a string");if("string"!=typeof n)throw new TypeError("Argument 'replacement' is not a string");return r.replace(new RegExp(u(e),"g"),n)}function u(r){if("string"!=typeof r)throw new TypeError("This function is supposed to escape a 'string'");return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}n.d(e,"r_first_number_of_string",function(){return t}),n.d(e,"r_split_by_line",function(){return o}),n.d(e,"replace",function(){return i}),n.d(e,"escapeRegularExpression",function(){return u})}]);
//# sourceMappingURL=regex-constans.js.map