!function(e){function t(t){for(var n,a,c=t[0],u=t[1],l=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=__webpack_require__(__webpack_require__.s=r[0]))}return e}var n={},i={7:0},o=[];function __webpack_require__(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}__webpack_require__.e=function(e){var t=[],r=i[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=n);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.src=function(e){return __webpack_require__.p+""+({1:"chunk-googlesitekit-adminbar",27:"vendors~chunk-googlesitekit-adminbar"}[e]||e)+"-"+{1:"ea54613856d9a3d69f8a",27:"941278ac0d5aba294d7f"}[e]+".js"}(e);var c=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(u);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}i[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},__webpack_require__.m=e,__webpack_require__.c=n,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__.oe=function(e){throw console.error(e),e};var a=window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=c;o.push([603,0]),r()}({15:function(e,t){e.exports=googlesitekit.data},35:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var n="_googlesitekitDataLayer",i="data-googlesitekit-gtag"},42:function(e,t){e.exports=googlesitekit.api},50:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return f}));var n=r(72),i=e._googlesitekitBaseData||{},o=i.isFirstAdmin,a=i.trackingAllowed,c={isFirstAdmin:o,trackingEnabled:i.trackingEnabled,trackingID:i.trackingID,referenceSiteURL:i.referenceSiteURL,userIDHash:i.userIDHash},u=Object(n.a)(c),s=u.enableTracking,l=u.disableTracking,d=u.isTrackingEnabled,f=u.trackEvent;function p(e){e?s():l()}!0===a&&p(d())}).call(this,r(16))},51:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(35);function i(e){return function(){e[n.a]=e[n.a]||[],e[n.a].push(arguments)}}},54:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return s}));var n=r(38),i=r.n(n),o=r(0),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=null,r=null,n=document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),i=document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");if(n&&i)return!1;if(t=document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"),r=document.querySelector("#wp-admin-bar-google-site-kit .ab-item"),null===t&&null===r)return!1;var a=document.createElement("span");a.setAttribute("class","googlesitekit-notifications-counter update-plugins count-".concat(e));var c=document.createElement("span");c.setAttribute("class","plugin-count"),c.setAttribute("aria-hidden","true"),c.textContent=e;var u=document.createElement("span");return u.setAttribute("class","screen-reader-text"),u.textContent=Object(o.sprintf)(
/* translators: %d is the number of notifications */
Object(o._n)("%d notification","%d notifications",e,"google-site-kit"),e),a.appendChild(c),a.appendChild(u),t&&null===n&&t.appendChild(a),r&&null===i&&r.appendChild(a),a},c=function(){e.localStorage&&e.localStorage.clear(),e.sessionStorage&&e.sessionStorage.clear()},u=function(e){for(var t=location.search.substr(1).split("&"),r={},n=0;n<t.length;n++)r[t[n].split("=")[0]]=decodeURIComponent(t[n].split("=")[1]);return e?r.hasOwnProperty(e)?decodeURIComponent(r[e].replace(/\+/g," ")):"":r},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,r=new URL(t.href);if(e)return r.searchParams&&r.searchParams.get?r.searchParams.get(e):u(e);var n={},o=!0,a=!1,c=void 0;try{for(var s,l=r.searchParams.entries()[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){var d=i()(s.value,2),f=d[0],p=d[1];n[f]=p}}catch(e){a=!0,c=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw c}}return n}}).call(this,r(16))},603:function(e,t,r){"use strict";r.r(t),function(e){var t=r(54),n=r(50);e.googlesitekitAdminbar&&e.googlesitekitAdminbar.publicPath&&(r.p=e.googlesitekitAdminbar.publicPath);var i=!1;function o(){Promise.all([r.e(27),r.e(1)]).then(r.bind(null,615)).then((function(e){return e})).catch((function(){return new Error("Site Kit: An error occurred while loading the Adminbar component files.")})).then((function(e){try{e.init()}catch(e){console.error("Site Kit: An error occurred while loading the Adminbar components."),document.getElementById("js-googlesitekit-adminbar").classList.add("googlesitekit-adminbar--has-error")}document.getElementById("js-googlesitekit-adminbar").classList.remove("googlesitekit-adminbar--loading")}))}e.addEventListener("load",(function(){var r=document.getElementById("wp-admin-bar-google-site-kit");if(r&&e.localStorage){var a=e.localStorage.getItem("googlesitekit::total-notifications")||0;Object(t.a)(a);var c=function(){i||(Object(n.c)("admin_bar","page_stats_view"),o(),i=!0)};"true"===Object(t.c)("googlesitekit_adminbar_open")?(c(),r.classList.add("hover")):r.addEventListener("mouseenter",c,!1)}}))}.call(this,r(16))},72:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return s}));var n=r(11),i=r.n(n),o=r(73),a=r(74);function c(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r}var u={isFirstAdmin:!1,trackingEnabled:!1,trackingID:"",referenceSiteURL:"",userIDHash:""};function s(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u,{},t);return n.referenceSiteURL&&(n.referenceSiteURL=n.referenceSiteURL.toString().replace(/\/+$/,"")),{enableTracking:Object(o.a)(n,r),disableTracking:function(){n.trackingEnabled=!1},isTrackingEnabled:function(){return!!n.trackingEnabled},trackEvent:Object(a.a)(n,r)}}}).call(this,r(16))},73:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return o}));var n=r(51),i=r(35);function o(t,r){var o=Object(n.a)(r);return function(){t.trackingEnabled=!0;var r=e.document;if(!r.querySelector("script[".concat(i.b,"]"))){var n=r.createElement("script");n.setAttribute(i.b,""),n.async=!0,n.src="https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID,"&l=").concat(i.a),r.head.appendChild(n),o("js",new Date),o("config",t.trackingID)}}}}).call(this,r(16))},74:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return l}));var n=r(4),i=r.n(n),o=r(11),a=r.n(o),c=r(51);function u(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(t,r){var n=Object(c.a)(r);return function(r,o){var a,c,u,l,d,f,p,g,_=arguments;return i.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=_.length>2&&void 0!==_[2]?_[2]:"",c=_.length>3&&void 0!==_[3]?_[3]:"",u=t.isFirstAdmin,l=t.referenceSiteURL,d=t.trackingEnabled,f=t.trackingID,p=t.userIDHash,d){i.next=5;break}return i.abrupt("return");case 5:return g={send_to:f,event_category:r,event_label:a,event_value:c,dimension1:l,dimension2:u?"true":"false",dimension3:p},i.abrupt("return",new Promise((function(t){var i=setTimeout((function(){e.console.warn('Tracking event "'.concat(o,'" (category "').concat(r,'") took too long to fire.')),t()}),1e3);n("event",o,s({},g,{event_callback:function(){clearTimeout(i),t()}}))})));case 7:case"end":return i.stop()}}))}}}).call(this,r(16))}});