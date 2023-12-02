// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).strided2array4d=e()}(this,(function(){"use strict";var r="function";var e={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function t(r){var t=e[r];return"function"==typeof t?t:e.default}var n={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function i(r){var e=n[r];return"function"==typeof e?e:n.default}var o="function"==typeof Object.defineProperty?Object.defineProperty:null;var a=Object.defineProperty;function u(r){return"number"==typeof r}function f(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function l(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+f(i):f(i)+r,n&&(r="-"+r)),r}var c=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function y(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=l(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=l(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function h(r){return"string"==typeof r}var p=Math.abs,g=String.prototype.toLowerCase,m=String.prototype.toUpperCase,w=String.prototype.replace,b=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,E=/^(\d+)e/,A=/\.0$/,T=/\.0*e/,_=/(\..*[^0])0*e/;function x(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!u(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=w.call(t,_,"$1e"),t=w.call(t,T,"e"),t=w.call(t,A,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=w.call(t,b,"e+0$1"),t=w.call(t,v,"e-0$1"),r.alternate&&(t=w.call(t,d,"$1."),t=w.call(t,E,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===m.call(r.specifier)?m.call(t):g.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function k(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var V=String.fromCharCode,L=isNaN,R=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function B(r){var e,t,n,i,o,a,u,f,c;if(!R(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(h(n=r[f]))a+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,L(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,L(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=y(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!L(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=L(o)?String(n.arg):V(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=x(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=l(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=k(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(C(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function O(r){return"string"==typeof r}function M(r){var e,t,n;if(!O(r))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return B.apply(null,t)}var U,N=Object.prototype,P=N.toString,Y=N.__defineGetter__,W=N.__defineSetter__,$=N.__lookupGetter__,G=N.__lookupSetter__;U=function(){try{return o({},"x",{}),!0}catch(r){return!1}}()?a:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Y&&Y.call(r,e,t.get),a&&W&&W.call(r,e,t.set),r};var Z=U;function X(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return J&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&D.call(r,e)}var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var rr=z()?function(r){var e,t,n;if(null==r)return q.call(r);t=r[Q],e=H(r,Q);try{r[Q]=void 0}catch(e){return q.call(r)}return n=q.call(r),e?r[Q]=t:delete r[Q],n}:function(r){return q.call(r)};var er=Array.isArray?Array.isArray:function(r){return"[object Array]"===rr(r)};function tr(r){return null!==r&&"object"==typeof r}function nr(r){return tr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function ir(){return/^\s*function\s*([^(]*)/i}X(tr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(M("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!er(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(tr));var or=/^\s*function\s*([^(]*)/i;function ar(r){var e,t,n;if(("Object"===(t=rr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=or.exec(n.toString()))return e[1]}return nr(r)?"Buffer":t}X(ir,"REGEXP",or);var ur={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},fr="function"==typeof Float64Array;var lr="function"==typeof Float64Array?Float64Array:null;var cr="function"==typeof Float64Array?Float64Array:void 0;var sr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr([1,3.14,-3.14,NaN]),t=e,r=(fr&&t instanceof Float64Array||"[object Float64Array]"===rr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")},yr="function"==typeof Float32Array;var hr=Number.POSITIVE_INFINITY,pr="function"==typeof Float32Array?Float32Array:null;var gr="function"==typeof Float32Array?Float32Array:void 0;var mr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr([1,3.14,-3.14,5e40]),t=e,r=(yr&&t instanceof Float32Array||"[object Float32Array]"===rr(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===hr}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")},wr="function"==typeof Uint32Array;var br="function"==typeof Uint32Array?Uint32Array:null;var vr="function"==typeof Uint32Array?Uint32Array:void 0;var dr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(wr&&t instanceof Uint32Array||"[object Uint32Array]"===rr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")},Er="function"==typeof Int32Array;var Ar="function"==typeof Int32Array?Int32Array:null;var Tr="function"==typeof Int32Array?Int32Array:void 0;var _r=function(){var r,e,t;if("function"!=typeof Ar)return!1;try{e=new Ar([1,3.14,-3.14,2147483648]),t=e,r=(Er&&t instanceof Int32Array||"[object Int32Array]"===rr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")},xr="function"==typeof Uint16Array;var jr="function"==typeof Uint16Array?Uint16Array:null;var kr="function"==typeof Uint16Array?Uint16Array:void 0;var Vr=function(){var r,e,t;if("function"!=typeof jr)return!1;try{e=new jr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(xr&&t instanceof Uint16Array||"[object Uint16Array]"===rr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")},Lr="function"==typeof Int16Array;var Rr="function"==typeof Int16Array?Int16Array:null;var Sr="function"==typeof Int16Array?Int16Array:void 0;var Br=function(){var r,e,t;if("function"!=typeof Rr)return!1;try{e=new Rr([1,3.14,-3.14,32768]),t=e,r=(Lr&&t instanceof Int16Array||"[object Int16Array]"===rr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")},Ir="function"==typeof Uint8Array;var Cr="function"==typeof Uint8Array?Uint8Array:null;var Fr="function"==typeof Uint8Array?Uint8Array:void 0;var Or=function(){var r,e,t;if("function"!=typeof Cr)return!1;try{e=new Cr(e=[1,3.14,-3.14,256,257]),t=e,r=(Ir&&t instanceof Uint8Array||"[object Uint8Array]"===rr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")},Mr="function"==typeof Uint8ClampedArray;var Ur="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Nr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Pr=function(){var r,e,t;if("function"!=typeof Ur)return!1;try{e=new Ur([-1,0,1,3.14,4.99,255,256]),t=e,r=(Mr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===rr(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")},Yr="function"==typeof Int8Array;var Wr="function"==typeof Int8Array?Int8Array:null;var $r="function"==typeof Int8Array?Int8Array:void 0;var Gr=function(){var r,e,t;if("function"!=typeof Wr)return!1;try{e=new Wr([1,3.14,-3.14,128]),t=e,r=(Yr&&t instanceof Int8Array||"[object Int8Array]"===rr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};function Zr(r){return"number"==typeof r}var Xr=Number,Jr=Xr.prototype.toString;var zr=z();function qr(r){return"object"==typeof r&&(r instanceof Xr||(zr?function(r){try{return Jr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===rr(r)))}function Dr(r){return Zr(r)||qr(r)}X(Dr,"isPrimitive",Zr),X(Dr,"isObject",qr);var Hr=Xr.NEGATIVE_INFINITY,Kr=Math.floor;function Qr(r){return Kr(r)===r}function re(r){return r<hr&&r>Hr&&Qr(r)}function ee(r){return Zr(r)&&re(r)}function te(r){return qr(r)&&re(r.valueOf())}function ne(r){return ee(r)||te(r)}function ie(r){return ee(r)&&r>=0}function oe(r){return te(r)&&r.valueOf()>=0}function ae(r){return ie(r)||oe(r)}X(ne,"isPrimitive",ee),X(ne,"isObject",te),X(ae,"isPrimitive",ie),X(ae,"isObject",oe);function ue(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Qr(r.length)&&r.length>=0&&r.length<=4294967295}function fe(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Qr(r.length)&&r.length>=0&&r.length<=9007199254740991}var le="function"==typeof ArrayBuffer;function ce(r){return le&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===rr(r)}function se(r){return"object"==typeof r&&null!==r&&!er(r)}var ye=/./;function he(r){return"boolean"==typeof r}var pe=Boolean,ge=Boolean.prototype.toString;var me=z();function we(r){return"object"==typeof r&&(r instanceof pe||(me?function(r){try{return ge.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===rr(r)))}function be(r){return he(r)||we(r)}function ve(){return new Function("return this;")()}X(be,"isPrimitive",he),X(be,"isObject",we);var de="object"==typeof self?self:null,Ee="object"==typeof window?window:null,Ae="object"==typeof global?global:null,Te="object"==typeof globalThis?globalThis:null;var _e=function(r){if(arguments.length){if(!he(r))throw new TypeError(M("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ve()}if(Te)return Te;if(de)return de;if(Ee)return Ee;if(Ae)return Ae;throw new Error("unexpected error. Unable to resolve global object.")}(),xe=_e.document&&_e.document.childNodes,je=Int8Array;var ke="function"==typeof ye||"object"==typeof je||"function"==typeof xe?function(r){return ar(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ar(r).toLowerCase():e};function Ve(r){return"function"===ke(r)}function Le(r,e){if(!(this instanceof Le))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Zr(r))throw new TypeError(M("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Zr(e))throw new TypeError(M("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),Z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}X(Le,"BYTES_PER_ELEMENT",8),X(Le.prototype,"BYTES_PER_ELEMENT",8),X(Le.prototype,"byteLength",16),X(Le.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),X(Le.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Re="function"==typeof Math.fround?Math.fround:null,Se=new mr(1);var Be="function"==typeof Re?Re:function(r){return Se[0]=r,Se[0]};function Ie(r,e){if(!(this instanceof Ie))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Zr(r))throw new TypeError(M("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Zr(e))throw new TypeError(M("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Be(r)}),Z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Be(e)}),this}function Ce(r){return r instanceof Le||r instanceof Ie||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Fe(r){return Qr(r/2)}function Oe(){return"function"==typeof K&&"symbol"==typeof K("foo")&&H(K,"iterator")&&"symbol"==typeof K.iterator}X(Ie,"BYTES_PER_ELEMENT",4),X(Ie.prototype,"BYTES_PER_ELEMENT",4),X(Ie.prototype,"byteLength",8),X(Ie.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),X(Ie.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Me=Oe()?Symbol.iterator:null;function Ue(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,get:t})}function Ne(r){return r.re}function Pe(r){return r.im}function Ye(r,e){return new mr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function We(r,e){return new sr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function $e(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ue(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ce(n))return new TypeError(M("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ne(n),Pe(n))}return e}function Ge(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ue(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ce(o))return new TypeError(M("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ne(o),Pe(o))}return n}function Ze(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ce(n=e[i]))return null;r[o]=Ne(n),r[o+1]=Pe(n),o+=2}return r}var Xe=2*mr.BYTES_PER_ELEMENT,Je=Oe();function ze(r){return r instanceof Ke||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function qe(r){return r===Ke||"Complex128Array"===r.name}function De(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Xe}function He(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Xe}function Ke(){var r,e,t,n;if(e=arguments.length,!(this instanceof Ke))return 0===e?new Ke:1===e?new Ke(arguments[0]):2===e?new Ke(arguments[0],arguments[1]):new Ke(arguments[0],arguments[1],arguments[2]);if(0===e)t=new mr(0);else if(1===e)if(ie(arguments[0]))t=new mr(2*arguments[0]);else if(fe(arguments[0]))if((n=(t=arguments[0]).length)&&er(t)&&Ce(t[0])){if(null===(t=Ze(new mr(2*n),t))){if(!Fe(n))throw new RangeError(M("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new mr(arguments[0])}}else{if(De(t))t=Ye(t,0);else if(He(t))t=We(t,0);else if(!Fe(n))throw new RangeError(M("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new mr(t)}else if(ce(arguments[0])){if(!Qr((t=arguments[0]).byteLength/Xe))throw new RangeError(M("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Xe,t.byteLength));t=new mr(t)}else{if(!se(arguments[0]))throw new TypeError(M("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Je)throw new TypeError(M("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ve(t[Me]))throw new TypeError(M("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ve((t=t[Me]()).next))throw new TypeError(M("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=$e(t))instanceof Error)throw t;t=new mr(t)}else{if(!ce(t=arguments[0]))throw new TypeError(M("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ie(r=arguments[1]))throw new TypeError(M("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Qr(r/Xe))throw new RangeError(M("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Xe,r));if(2===e){if(!Qr((n=t.byteLength-r)/Xe))throw new RangeError(M("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Xe,n));t=new mr(t,r)}else{if(!ie(n=arguments[2]))throw new TypeError(M("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Xe>t.byteLength-r)throw new RangeError(M("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Xe));t=new mr(t,r,2*n)}}return X(this,"_buffer",t),X(this,"_length",t.length/2),this}function Qe(r){return r.re}function rt(r){return r.im}function et(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ue(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ce(n))return new TypeError(M("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Qe(n),rt(n))}return e}function tt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ue(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ce(o))return new TypeError(M("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Qe(o),rt(o))}return n}function nt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ce(n=e[i]))return null;r[o]=Qe(n),r[o+1]=rt(n),o+=2}return r}X(Ke,"BYTES_PER_ELEMENT",Xe),X(Ke,"name","Complex64Array"),X(Ke,"from",(function(r){var e,n,o,a,u,f,l,c,s,y,h,p;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Ve(o=arguments[1]))throw new TypeError(M("invalid argument. Second argument must be a function. Value: `%s`.",o));n>2&&(e=arguments[2])}if(ze(r)){if(c=r.length,o){for(u=(a=new this(c))._buffer,p=0,h=0;h<c;h++){if(Ce(y=o.call(e,r.get(h),h)))u[p]=Ne(y),u[p+1]=Pe(y);else{if(!(ue(y)&&y.length>=2))throw new TypeError(M("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return a}return new this(r)}if(fe(r)){if(o){for(c=r.length,l=r.get&&r.set?t("default"):i("default"),h=0;h<c;h++)if(!Ce(l(r,h))){s=!0;break}if(s){if(!Fe(c))throw new RangeError(M("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,c));for(u=(a=new this(c/2))._buffer,h=0;h<c;h++)u[h]=o.call(e,l(r,h),h);return a}for(u=(a=new this(c))._buffer,p=0,h=0;h<c;h++){if(Ce(y=o.call(e,l(r,h),h)))u[p]=Ne(y),u[p+1]=Pe(y);else{if(!(ue(y)&&y.length>=2))throw new TypeError(M("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return a}return new this(r)}if(se(r)&&Je&&Ve(r[Me])){if(!Ve((u=r[Me]()).next))throw new TypeError(M("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((f=o?Ge(u,o,e):$e(u))instanceof Error)throw f;for(u=(a=new this(c=f.length/2))._buffer,h=0;h<c;h++)u[h]=f[h];return a}throw new TypeError(M("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),X(Ke,"of",(function(){var r,e;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ue(Ke.prototype,"buffer",(function(){return this._buffer.buffer})),Ue(Ke.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ue(Ke.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),X(Ke.prototype,"BYTES_PER_ELEMENT",Ke.BYTES_PER_ELEMENT),X(Ke.prototype,"copyWithin",(function(r,e){if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),X(Ke.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,X(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ie(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),X(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Me&&X(t,Me,(function(){return e.entries()})),t})),X(Ke.prototype,"get",(function(r){var e;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ie(r))throw new TypeError(M("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ie((e=this._buffer)[r*=2],e[r+1])})),Ue(Ke.prototype,"length",(function(){return this._length})),X(Ke.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ie(t=arguments[1]))throw new TypeError(M("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ce(r)){if(t>=this._length)throw new RangeError(M("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ne(r),void(n[t+1]=Pe(r))}if(ze(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Xe,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new mr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!fe(r))throw new TypeError(M("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ce(r[f])){o=!0;break}if(o){if(!Fe(a))throw new RangeError(M("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Xe,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new mr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ne(u),n[t+1]=Pe(u),t+=2}}));var it=2*sr.BYTES_PER_ELEMENT,ot=Oe();function at(r){return r instanceof ct||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ut(r){return r===ct||"Complex64Array"===r.name}function ft(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===it/2}function lt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===it}function ct(){var r,e,t,n;if(e=arguments.length,!(this instanceof ct))return 0===e?new ct:1===e?new ct(arguments[0]):2===e?new ct(arguments[0],arguments[1]):new ct(arguments[0],arguments[1],arguments[2]);if(0===e)t=new sr(0);else if(1===e)if(ie(arguments[0]))t=new sr(2*arguments[0]);else if(fe(arguments[0]))if((n=(t=arguments[0]).length)&&er(t)&&Ce(t[0])){if(null===(t=nt(new sr(2*n),t))){if(!Fe(n))throw new RangeError(M("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new sr(arguments[0])}}else{if(ft(t))t=Ye(t,0);else if(lt(t))t=We(t,0);else if(!Fe(n))throw new RangeError(M("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new sr(t)}else if(ce(arguments[0])){if(!Qr((t=arguments[0]).byteLength/it))throw new RangeError(M("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",it,t.byteLength));t=new sr(t)}else{if(!se(arguments[0]))throw new TypeError(M("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===ot)throw new TypeError(M("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ve(t[Me]))throw new TypeError(M("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ve((t=t[Me]()).next))throw new TypeError(M("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=et(t))instanceof Error)throw t;t=new sr(t)}else{if(!ce(t=arguments[0]))throw new TypeError(M("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ie(r=arguments[1]))throw new TypeError(M("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Qr(r/it))throw new RangeError(M("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",it,r));if(2===e){if(!Qr((n=t.byteLength-r)/it))throw new RangeError(M("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",it,n));t=new sr(t,r)}else{if(!ie(n=arguments[2]))throw new TypeError(M("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*it>t.byteLength-r)throw new RangeError(M("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*it));t=new sr(t,r,2*n)}}return X(this,"_buffer",t),X(this,"_length",t.length/2),this}X(ct,"BYTES_PER_ELEMENT",it),X(ct,"name","Complex128Array"),X(ct,"from",(function(r){var e,n,o,a,u,f,l,c,s,y,h,p;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Ve(o=arguments[1]))throw new TypeError(M("invalid argument. Second argument must be a function. Value: `%s`.",o));n>2&&(e=arguments[2])}if(at(r)){if(c=r.length,o){for(u=(a=new this(c))._buffer,p=0,h=0;h<c;h++){if(Ce(y=o.call(e,r.get(h),h)))u[p]=Qe(y),u[p+1]=rt(y);else{if(!(ue(y)&&y.length>=2))throw new TypeError(M("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return a}return new this(r)}if(fe(r)){if(o){for(c=r.length,l=r.get&&r.set?t("default"):i("default"),h=0;h<c;h++)if(!Ce(l(r,h))){s=!0;break}if(s){if(!Fe(c))throw new RangeError(M("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",c));for(u=(a=new this(c/2))._buffer,h=0;h<c;h++)u[h]=o.call(e,l(r,h),h);return a}for(u=(a=new this(c))._buffer,p=0,h=0;h<c;h++){if(Ce(y=o.call(e,l(r,h),h)))u[p]=Qe(y),u[p+1]=rt(y);else{if(!(ue(y)&&y.length>=2))throw new TypeError(M("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return a}return new this(r)}if(se(r)&&ot&&Ve(r[Me])){if(!Ve((u=r[Me]()).next))throw new TypeError(M("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((f=o?tt(u,o,e):et(u))instanceof Error)throw f;for(u=(a=new this(c=f.length/2))._buffer,h=0;h<c;h++)u[h]=f[h];return a}throw new TypeError(M("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),X(ct,"of",(function(){var r,e;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ue(ct.prototype,"buffer",(function(){return this._buffer.buffer})),Ue(ct.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ue(ct.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),X(ct.prototype,"BYTES_PER_ELEMENT",ct.BYTES_PER_ELEMENT),X(ct.prototype,"copyWithin",(function(r,e){if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),X(ct.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,X(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Le(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),X(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Me&&X(t,Me,(function(){return e.entries()})),t})),X(ct.prototype,"get",(function(r){var e;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ie(r))throw new TypeError(M("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Le((e=this._buffer)[r*=2],e[r+1])})),Ue(ct.prototype,"length",(function(){return this._length})),X(ct.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ie(t=arguments[1]))throw new TypeError(M("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ce(r)){if(t>=this._length)throw new RangeError(M("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Qe(r),void(n[t+1]=rt(r))}if(at(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*it,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new sr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!fe(r))throw new TypeError(M("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ce(r[f])){o=!0;break}if(o){if(!Fe(a))throw new RangeError(M("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*it,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new sr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Qe(u),n[t+1]=rt(u),t+=2}}));var st=[sr,mr,_r,dr,Br,Vr,Gr,Or,Pr,Ke,ct],yt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],ht=yt.length;function pt(e){var n,o=function(r){var e;if(er(r))return"generic";if(nr(r))return null;for(e=0;e<ht;e++)if(r instanceof st[e])return yt[e];return ur[ar(r)]||null}(e);return typeof(n=e).get===r&&typeof n.set===r?t(o):i(o)}return function(r,e,t,n){var i,o,a,u,f,l,c,s,y,h,p,g,m,w,b,v,d,E,A,T;for(i=pt(r),m=e[0],g=e[1],p=e[2],h=e[3],l=t[0],f=t[1],u=t[2],a=t[3],o=[],d=0;d<m;d++){for(E=[],c=n+l*d,v=0;v<g;v++){for(A=[],s=c+f*v,b=0;b<p;b++){for(T=[],y=s+u*b,w=0;w<h;w++)T.push(i(r,y)),y+=a;A.push(T)}E.push(A)}o.push(E)}return o}}));
//# sourceMappingURL=index.js.map
