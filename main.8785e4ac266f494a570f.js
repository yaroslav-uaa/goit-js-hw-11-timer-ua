(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+iL7":function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"/dUa":function(t,n,e){var r=e("MoOl"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},"0K2p":function(t,n,e){var r=e("nEaP"),o=e("nHIk"),i=e("tF07"),u=e("Ya6V"),a=e("/dUa"),c=e("SkE4"),s=c.get,f=c.enforce,p=String(String).split("String");(t.exports=function(t,n,e,a){var c=!!a&&!!a.unsafe,s=!!a&&!!a.enumerable,l=!!a&&!!a.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),f(e).source=p.join("string"==typeof n?n:"")),t!==r?(c?!l&&t[n]&&(s=!0):delete t[n],s?t[n]=e:o(t,n,e)):s?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},"3pC9":function(t,n,e){var r=e("gIo2"),o=e("nrda"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},"41Zj":function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},"8OJN":function(t,n,e){var r=e("tF07"),o=e("M/tt"),i=e("kMPr").indexOf,u=e("s3NK");t.exports=function(t,n){var e,a=o(t),c=0,s=[];for(e in a)!r(u,e)&&r(a,e)&&s.push(e);for(;n.length>c;)r(a,e=n[c++])&&(~i(s,e)||s.push(e));return s}},"9nX2":function(t,n,e){var r=e("+iL7"),o=/#|\.prototype\./,i=function(t,n){var e=a[u(t)];return e==s||e!=c&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},c=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},BnTm:function(t,n,e){"use strict";var r=e("wTAb"),o=e("Qean");t.exports="".repeat||function(t){var n=String(o(this)),e="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(e+=n);return e}},DJGK:function(t,n,e){var r=e("+iL7"),o=e("fSIz"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},Fup7:function(t,n,e){var r=e("Hvpk"),o=e("41Zj"),i=e("VSW8"),u=e("M/tt"),a=e("W9fh"),c=e("tF07"),s=e("xwiM"),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=u(t),n=a(n,!0),s)try{return f(t,n)}catch(t){}if(c(t,n))return i(!o.f.call(t,n),t[n])}},HRgQ:function(t,n,e){var r=e("nEaP"),o=e("fT8P"),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},Hvpk:function(t,n,e){var r=e("+iL7");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},JRM0:function(t,n,e){var r=e("nEaP"),o=e("Fup7").f,i=e("nHIk"),u=e("0K2p"),a=e("Ya6V"),c=e("v0JE"),s=e("9nX2");t.exports=function(t,n){var e,f,p,l,h,v=t.target,d=t.global,g=t.stat;if(e=d?r:g?r[v]||a(v,{}):(r[v]||{}).prototype)for(f in n){if(l=n[f],p=t.noTargetGet?(h=o(e,f))&&h.value:e[f],!s(d?f:v+(g?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;c(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(e,f,l,t)}}},L1EO:function(t,n,e){},LMdw:function(t,n,e){var r=e("UVdV"),o=e("OVha"),i=e("rk7W"),u=e("gDYM");t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},"M/tt":function(t,n,e){var r=e("DJGK"),o=e("Qean");t.exports=function(t){return r(o(t))}},MoOl:function(t,n,e){var r=e("nEaP"),o=e("Ya6V"),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},OVha:function(t,n,e){var r=e("8OJN"),o=e("ek/P").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},P2u4:function(t,n,e){var r=e("nEaP"),o=e("/dUa"),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},PCqT:function(t,n){t.exports=!1},Qean:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},QfWi:function(t,n,e){"use strict";e.r(n);e("L1EO"),e("e+qc");var r={timerRef:document.getElementById("timer-1"),days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),seconds:document.querySelector('[data-value="secs"]'),musicPlay:document.querySelector(".example_a"),musicMute:document.querySelector(".example_b")};new(function(){function t(t){var n,e,r,o=this,i=t.selector,u=t.targetDate;n=this,e="setInt",r=setInterval((function(){o.updateClockface(),o.timeFinish()}),1e3),e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,this.selector=i,this.targetDate=u}var n=t.prototype;return n.updateClockface=function(){var t=Date.now(),n=this.targetDate-t,e=this.pad(Math.floor(n/864e5)),o=this.pad(Math.floor(n%864e5/36e5)),i=this.pad(Math.floor(n%36e5/6e4)),u=this.pad(Math.floor(n%6e4/1e3));r.days.textContent=""+e,r.hours.textContent=""+o,r.mins.textContent=""+i,r.seconds.textContent=""+u},n.pad=function(t){return String(t).padStart(2,"0")},n.timeFinish=function(t){this.targetDate-Date.now()<0&&(clearInterval(this.setInt),r.timerRef.textContent='"So.... Have a good meeting”',r.timerRef.style.textShadow="0 0 5px white, 0 0 10px white, 0 0 15px white, 0 0 20px rebeccapurple",r.timerRef.style.fontSize="50px")},t}())({selector:"#timer-1",targetDate:new Date("Jan 01, 00:00:00 2021")}).updateClockface();e("vjek");var o=document.querySelector("audio");r.musicPlay.addEventListener("click",(function(){r.musicPlay.disabled=!0,r.musicMute.disabled=!1,o.muted=!1,o.play()})),r.musicMute.addEventListener("click",(function(){r.musicPlay.disabled=!1,r.musicMute.disabled=!0,o.muted=!0}))},SkE4:function(t,n,e){var r,o,i,u=e("P2u4"),a=e("nEaP"),c=e("fT8P"),s=e("nHIk"),f=e("tF07"),p=e("3pC9"),l=e("s3NK"),h=a.WeakMap;if(u){var v=new h,d=v.get,g=v.has,y=v.set;r=function(t,n){return y.call(v,t,n),n},o=function(t){return d.call(v,t)||{}},i=function(t){return g.call(v,t)}}else{var m=p("state");l[m]=!0,r=function(t,n){return s(t,m,n),n},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!c(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},UVdV:function(t,n,e){var r=e("lUv3"),o=e("nEaP"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},VSW8:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},W9fh:function(t,n,e){var r=e("fT8P");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},Ya6V:function(t,n,e){var r=e("nEaP"),o=e("nHIk");t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},"e+qc":function(t,n,e){"use strict";var r=e("JRM0"),o=e("mEUw").start;r({target:"String",proto:!0,forced:e("uz20")},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"ek/P":function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},fSIz:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},fT8P:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},gDYM:function(t,n,e){var r=e("fT8P");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},gIo2:function(t,n,e){var r=e("PCqT"),o=e("MoOl");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},glsI:function(t,n,e){var r=e("wTAb"),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},kMPr:function(t,n,e){var r=e("M/tt"),o=e("zrDt"),i=e("glsI"),u=function(t){return function(n,e,u){var a,c=r(n),s=o(c.length),f=i(u,s);if(t&&e!=e){for(;s>f;)if((a=c[f++])!=a)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},lUv3:function(t,n,e){var r=e("nEaP");t.exports=r},mEUw:function(t,n,e){var r=e("zrDt"),o=e("BnTm"),i=e("Qean"),u=Math.ceil,a=function(t){return function(n,e,a){var c,s,f=String(i(n)),p=f.length,l=void 0===a?" ":String(a),h=r(e);return h<=p||""==l?f:(c=h-p,(s=o.call(l,u(c/l.length))).length>c&&(s=s.slice(0,c)),t?f+s:s+f)}};t.exports={start:a(!1),end:a(!0)}},nEaP:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e("pCvA"))},nHIk:function(t,n,e){var r=e("Hvpk"),o=e("nRc6"),i=e("VSW8");t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},nRc6:function(t,n,e){var r=e("Hvpk"),o=e("xwiM"),i=e("gDYM"),u=e("W9fh"),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},nrda:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},pCvA:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},rk7W:function(t,n){n.f=Object.getOwnPropertySymbols},rxbk:function(t,n,e){var r=e("UVdV");t.exports=r("navigator","userAgent")||""},s3NK:function(t,n){t.exports={}},tF07:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},uz20:function(t,n,e){var r=e("rxbk");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},v0JE:function(t,n,e){var r=e("tF07"),o=e("LMdw"),i=e("Fup7"),u=e("nRc6");t.exports=function(t,n){for(var e=o(n),a=u.f,c=i.f,s=0;s<e.length;s++){var f=e[s];r(t,f)||a(t,f,c(n,f))}}},vjek:function(t,n){var e=function(t,n,e){this.toRotate=n,this.el=t,this.loopNum=0,this.period=parseInt(e,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};e.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,n=this.toRotate[t];this.isDeleting?this.txt=n.substring(0,this.txt.length-1):this.txt=n.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var e=this,r=200-100*Math.random();this.isDeleting&&(r/=4),this.isDeleting||this.txt!==n?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,r=200):(r=this.period,this.isDeleting=!0),setTimeout((function(){e.tick()}),r)},window.onload=function(){for(var t=document.getElementsByClassName("txt-rotate"),n=0;n<t.length;n++){var r=t[n].getAttribute("data-rotate"),o=t[n].getAttribute("data-period");r&&new e(t[n],JSON.parse(r),o)}var i=document.createElement("style");i.type="text/css",i.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(i)}},wTAb:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},xwiM:function(t,n,e){var r=e("Hvpk"),o=e("+iL7"),i=e("HRgQ");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},zrDt:function(t,n,e){var r=e("wTAb"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}}},[["QfWi",1]]]);
//# sourceMappingURL=main.8785e4ac266f494a570f.js.map