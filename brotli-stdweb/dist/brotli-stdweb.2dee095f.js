parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({4:[function(require,module,exports) {
"use strict";var s=require("./Cargo.toml");Object.assign(window,{compress:s.compress,decompress:s.decompress});var e=new Uint8Array(Array(256).fill(1)),r=(0,s.compress)(e,4096,11,21),o=(0,s.decompress)(r,4096);console.log({input:e,compressed:r,output:o});
},{"./Cargo.toml":1}],3:[function(require,module,exports) {
module.exports=function(e){return fetch(e).then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.compile(e)}).then(function(e){return function(e,r){var _={STDWEB_PRIVATE:{}};_.STDWEB_PRIVATE.to_utf8=function(e,r){for(var _=0;_<e.length;++_){var n=e.charCodeAt(_);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&e.charCodeAt(++_)),n<=127?o[r++]=n:n<=2047?(o[r++]=192|n>>6,o[r++]=128|63&n):n<=65535?(o[r++]=224|n>>12,o[r++]=128|n>>6&63,o[r++]=128|63&n):n<=2097151?(o[r++]=240|n>>18,o[r++]=128|n>>12&63,o[r++]=128|n>>6&63,o[r++]=128|63&n):n<=67108863?(o[r++]=248|n>>24,o[r++]=128|n>>18&63,o[r++]=128|n>>12&63,o[r++]=128|n>>6&63,o[r++]=128|63&n):(o[r++]=252|n>>30,o[r++]=128|n>>24&63,o[r++]=128|n>>18&63,o[r++]=128|n>>12&63,o[r++]=128|n>>6&63,o[r++]=128|63&n)}},_.STDWEB_PRIVATE.noop=function(){},_.STDWEB_PRIVATE.to_js=function(e){var r=o[e+12];if(0!==r){if(1===r)return null;if(2===r)return a[e/4];if(3===r)return u[e/8];if(4===r){var i=T[e/4],f=T[(e+4)/4];return _.STDWEB_PRIVATE.to_js_string(i,f)}if(5===r)return!1;if(6===r)return!0;if(7===r){i=T[e/4],f=T[(e+4)/4];for(var l=[],s=0;s<f;++s)l.push(_.STDWEB_PRIVATE.to_js(i+16*s));return l}if(8===r){var A=T[e/4],P=(f=T[(e+4)/4],T[(e+8)/4]);for(l={},s=0;s<f;++s){var S=T[(P+8*s)/4],d=T[(P+4+8*s)/4],R=_.STDWEB_PRIVATE.to_js_string(S,d),I=_.STDWEB_PRIVATE.to_js(A+16*s);l[R]=I}return l}if(9===r)return _.STDWEB_PRIVATE.acquire_js_reference(a[e/4]);if(10===r){var W=T[e/4],B=(i=T[(e+4)/4],T[(e+8)/4]);return(l=function(){if(0===i)throw new ReferenceError("Already dropped Rust function called!");var e=_.STDWEB_PRIVATE.alloc(16);_.STDWEB_PRIVATE.serialize_array(e,arguments),_.STDWEB_PRIVATE.dyncall("vii",W,[i,e]);var r=_.STDWEB_PRIVATE.tmp;return _.STDWEB_PRIVATE.tmp=null,r}).drop=function(){l.drop=_.STDWEB_PRIVATE.noop;var e=i;i=0,_.STDWEB_PRIVATE.dyncall("vi",B,[e])},l}if(13===r)return W=T[e/4],i=T[(e+4)/4],B=T[(e+8)/4],(l=function e(){if(0===i)throw new ReferenceError("Already called or dropped FnOnce function called!");e.drop=_.STDWEB_PRIVATE.noop;var r=i;i=0;var n=_.STDWEB_PRIVATE.alloc(16);_.STDWEB_PRIVATE.serialize_array(n,arguments),_.STDWEB_PRIVATE.dyncall("vii",W,[r,n]);var t=_.STDWEB_PRIVATE.tmp;return _.STDWEB_PRIVATE.tmp=null,t}).drop=function(){l.drop=_.STDWEB_PRIVATE.noop;var e=i;i=0,_.STDWEB_PRIVATE.dyncall("vi",B,[e])},l;if(14===r){i=T[e/4],f=T[(e+4)/4];var D=T[(e+8)/4],V=i+f;switch(D){case 0:return o.subarray(i,V);case 1:return n.subarray(i,V);case 2:return E.subarray(i,V);case 3:return t.subarray(i,V);case 4:return T.subarray(i,V);case 5:return a.subarray(i,V);case 6:return c.subarray(i,V);case 7:return u.subarray(i,V)}}else if(15===r)return _.STDWEB_PRIVATE.get_raw_value(T[e/4])}},_.STDWEB_PRIVATE.serialize_object=function(e,r){var n=Object.keys(r),t=n.length,a=_.STDWEB_PRIVATE.alloc(8*t),E=_.STDWEB_PRIVATE.alloc(16*t);o[e+12]=8,T[e/4]=E,T[(e+4)/4]=t,T[(e+8)/4]=a;for(var c=0;c<t;++c){var u=n[c],i=_.STDWEB_PRIVATE.utf8_len(u),f=_.STDWEB_PRIVATE.alloc(i);_.STDWEB_PRIVATE.to_utf8(u,f);var l=a+8*c;T[l/4]=f,T[(l+4)/4]=i,_.STDWEB_PRIVATE.from_js(E+16*c,r[u])}},_.STDWEB_PRIVATE.serialize_array=function(e,r){var n=r.length,t=_.STDWEB_PRIVATE.alloc(16*n);o[e+12]=7,T[e/4]=t,T[(e+4)/4]=n;for(var a=0;a<n;++a)_.STDWEB_PRIVATE.from_js(t+16*a,r[a])},_.STDWEB_PRIVATE.from_js=function(e,r){var n=Object.prototype.toString.call(r);if("[object String]"===n){var t=_.STDWEB_PRIVATE.utf8_len(r),E=0;t>0&&(E=_.STDWEB_PRIVATE.alloc(t),_.STDWEB_PRIVATE.to_utf8(r,E)),o[e+12]=4,T[e/4]=E,T[(e+4)/4]=t}else if("[object Number]"===n)r===(0|r)?(o[e+12]=2,a[e/4]=r):(o[e+12]=3,u[e/8]=r);else if(null===r)o[e+12]=1;else if(void 0===r)o[e+12]=0;else if(!1===r)o[e+12]=5;else if(!0===r)o[e+12]=6;else if("[object Symbol]"===n){var c=_.STDWEB_PRIVATE.register_raw_value(r);o[e+12]=15,a[e/4]=c}else{var i=_.STDWEB_PRIVATE.acquire_rust_reference(r);o[e+12]=9,a[e/4]=i}},_.STDWEB_PRIVATE.to_js_string=function(e,r){for(var _=(0|(e|=0))+(0|(r|=0)),n="";e<_;){var t=o[e++];if(t<128)n+=String.fromCharCode(t);else{var a=31&t,E=0;e<_&&(E=o[e++]);var T=a<<6|63&E;if(t>=224){var c=0;e<_&&(c=o[e++]);var u=(63&E)<<6|63&c;if(T=a<<12|u,t>=240){var i=0;e<_&&(i=o[e++]),T=(7&a)<<18|u<<6|63&i,n+=String.fromCharCode(55232+(T>>10)),T=56320+(1023&T)}}n+=String.fromCharCode(T)}}return n},_.STDWEB_PRIVATE.id_to_ref_map={},_.STDWEB_PRIVATE.id_to_refcount_map={},_.STDWEB_PRIVATE.ref_to_id_map=new WeakMap,_.STDWEB_PRIVATE.ref_to_id_map_fallback=new Map,_.STDWEB_PRIVATE.last_refid=1,_.STDWEB_PRIVATE.id_to_raw_value_map={},_.STDWEB_PRIVATE.last_raw_value_id=1,_.STDWEB_PRIVATE.acquire_rust_reference=function(e){if(null==e)return 0;var r=_.STDWEB_PRIVATE.id_to_refcount_map,n=_.STDWEB_PRIVATE.id_to_ref_map,t=_.STDWEB_PRIVATE.ref_to_id_map,a=_.STDWEB_PRIVATE.ref_to_id_map_fallback,o=t.get(e);if(void 0===o&&(o=a.get(e)),void 0===o){o=_.STDWEB_PRIVATE.last_refid++;try{t.set(e,o)}catch(r){a.set(e,o)}}return o in n?r[o]++:(n[o]=e,r[o]=1),o},_.STDWEB_PRIVATE.acquire_js_reference=function(e){return _.STDWEB_PRIVATE.id_to_ref_map[e]},_.STDWEB_PRIVATE.increment_refcount=function(e){_.STDWEB_PRIVATE.id_to_refcount_map[e]++},_.STDWEB_PRIVATE.decrement_refcount=function(e){var r=_.STDWEB_PRIVATE.id_to_refcount_map;if(0==--r[e]){var n=_.STDWEB_PRIVATE.id_to_ref_map,t=_.STDWEB_PRIVATE.ref_to_id_map_fallback,a=n[e];delete n[e],delete r[e],t.delete(a)}},_.STDWEB_PRIVATE.register_raw_value=function(e){var r=_.STDWEB_PRIVATE.last_raw_value_id++;return _.STDWEB_PRIVATE.id_to_raw_value_map[r]=e,r},_.STDWEB_PRIVATE.unregister_raw_value=function(e){delete _.STDWEB_PRIVATE.id_to_raw_value_map[e]},_.STDWEB_PRIVATE.get_raw_value=function(e){return _.STDWEB_PRIVATE.id_to_raw_value_map[e]},_.STDWEB_PRIVATE.alloc=function(e){return _.web_malloc(e)},_.STDWEB_PRIVATE.dyncall=function(e,r,n){return _.web_table.get(r).apply(null,n)},_.STDWEB_PRIVATE.utf8_len=function(e){for(var r=0,_=0;_<e.length;++_){var n=e.charCodeAt(_);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&e.charCodeAt(++_)),n<=127?++r:r+=n<=2047?2:n<=65535?3:n<=2097151?4:n<=67108863?5:6}return r},_.STDWEB_PRIVATE.prepare_any_arg=function(e){var r=_.STDWEB_PRIVATE.alloc(16);return _.STDWEB_PRIVATE.from_js(r,e),r},_.STDWEB_PRIVATE.acquire_tmp=function(e){var r=_.STDWEB_PRIVATE.tmp;return _.STDWEB_PRIVATE.tmp=null,r};var n=null,t=null,a=null,o=null,E=null,T=null,c=null,u=null;Object.defineProperty(_,"exports",{value:{}});var i={env:{__extjs_dd742fd43ec5cb584d12e2b2cf147cf41128f3d1:function(e,r){var n=e=_.STDWEB_PRIVATE.to_js(e),t=r=_.STDWEB_PRIVATE.to_js(r);o.set(n,t)},__extjs_97495987af1720d8a9a923fa4683a7b683e3acd6:function(e,r){console.error("Panic error message:",_.STDWEB_PRIVATE.to_js_string(e,r))},__extjs_80d6d56760c65e49b7be8b6b01c1ea861b046bf0:function(e){_.STDWEB_PRIVATE.decrement_refcount(e)},__extjs_dc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf:function(){console.error("Encountered a panic!")},__extjs_72fc447820458c720c68d0d8e078ede631edd723:function(e,r,n){console.error("Panic location:",_.STDWEB_PRIVATE.to_js_string(e,r)+":"+n)},__extjs_dcbfa3eb1cc89d9842b0ad8d9030a57a7cae7124:function(e){return _.STDWEB_PRIVATE.acquire_js_reference(e)instanceof Uint8Array|0},__extjs_db0226ae1bbecd407e9880ee28ddc70fc3322d9c:function(e){e=_.STDWEB_PRIVATE.to_js(e),_.STDWEB_PRIVATE.unregister_raw_value(e)},__extjs_2f33107ff8cc02d70bb611c3ab61d4b0f0ca5848:function(e,r){return _.STDWEB_PRIVATE.acquire_rust_reference(o.slice(e,r))},__extjs_bd7f6e324f00cca5b26b7c6dc239a28b71e047b4:function(e,r){r=_.STDWEB_PRIVATE.to_js(r),_.STDWEB_PRIVATE.from_js(e,r.length)},__extjs_ff5103e6cc179d13b4c7a785bdce2708fd559fc0:function(e){_.STDWEB_PRIVATE.tmp=_.STDWEB_PRIVATE.to_js(e)},log2f:function(e){return Math.log2(e)},log2:function(e){return Math.log2(e)},__web_on_grow:function(){var e=_.instance.exports.memory.buffer;n=new Int8Array(e),t=new Int16Array(e),a=new Int32Array(e),o=new Uint8Array(e),E=new Uint16Array(e),T=new Uint32Array(e),c=new Float32Array(e),u=new Float64Array(e)}}};function f(e){Object.defineProperty(_,"instance",{value:e}),Object.defineProperty(_,"web_malloc",{value:_.instance.exports.__web_malloc}),Object.defineProperty(_,"web_free",{value:_.instance.exports.__web_free}),Object.defineProperty(_,"web_table",{value:_.instance.exports.__web_table}),_.exports.compress=function(e,r,n,t){return _.STDWEB_PRIVATE.acquire_tmp(_.instance.exports.compress(_.STDWEB_PRIVATE.prepare_any_arg(e),_.STDWEB_PRIVATE.prepare_any_arg(r),_.STDWEB_PRIVATE.prepare_any_arg(n),_.STDWEB_PRIVATE.prepare_any_arg(t)))},_.exports.decompress=function(e,r){return _.STDWEB_PRIVATE.acquire_tmp(_.instance.exports.decompress(_.STDWEB_PRIVATE.prepare_any_arg(e),_.STDWEB_PRIVATE.prepare_any_arg(r)))},i.env.__web_on_grow()}return r?WebAssembly.instantiate(e,i).then(function(e){return f(e),console.log("Finished loading Rust wasm module 'rus'"),_.exports}).catch(function(e){throw console.log("Error loading Rust wasm module 'rus':",e),e}):(f(new WebAssembly.Instance(e,i)),_.exports)}(e,!0)})};
},{}],10:[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],8:[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new u(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(s))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function s(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),s=n[i];return s?o[e]=s(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}):void 0}function u(r){this.executor=r,this.promise=null}u.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},u.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":10}],12:[function(require,module,exports) {
module.exports=function(e){return console.log(e),require("./loader-1fb0d8289281c872d3332663f961e786.js")(e)};
},{"./loader-1fb0d8289281c872d3332663f961e786.js":3}],0:[function(require,module,exports) {
var b=require(8);b.register("cargo-web-1fb0d8289281c872d3332663f961e786",require(12));b.load([["Cargo.8d642c95.cargo-web-1fb0d8289281c872d3332663f961e786",1]]).then(function(){require(4);});
},{}]},{},[0], null)
//# sourceMappingURL=brotli-stdweb.2dee095f.map