(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[24],{0:function(e,t){e.exports=googlesitekit.i18n},126:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return Cell}));var n=r(27),i=r.n(n),o=r(7),a=r.n(o),c=r(30),u=r.n(c),s=r(2),l=r.n(s),d=r(8),g=r.n(d);function Cell(t){var r,n=t.className,o=t.alignTop,c=t.alignMiddle,s=t.alignBottom,l=t.alignRight,d=t.alignLeft,f=t.smSize,p=t.smStart,b=t.mdSize,m=t.mdStart,v=t.lgSize,y=t.lgStart,h=t.size,O=t.children,_=u()(t,["className","alignTop","alignMiddle","alignBottom","alignRight","alignLeft","smSize","smStart","mdSize","mdStart","lgSize","lgStart","size","children"]);return e.createElement("div",i()({},_,{className:g()(n,"mdc-layout-grid__cell",(r={"mdc-layout-grid__cell--align-top":o,"mdc-layout-grid__cell--align-middle":c,"mdc-layout-grid__cell--align-bottom":s,"mdc-layout-grid__cell--align-right":l,"mdc-layout-grid__cell--align-left":d},a()(r,"mdc-layout-grid__cell--span-".concat(h),12>=h&&h>0),a()(r,"mdc-layout-grid__cell--span-".concat(v,"-desktop"),12>=v&&v>0),a()(r,"mdc-layout-grid__cell--start-".concat(y,"-desktop"),12>=y&&y>0),a()(r,"mdc-layout-grid__cell--span-".concat(b,"-tablet"),8>=b&&b>0),a()(r,"mdc-layout-grid__cell--start-".concat(m,"-tablet"),8>=m&&m>0),a()(r,"mdc-layout-grid__cell--span-".concat(f,"-phone"),4>=f&&f>0),a()(r,"mdc-layout-grid__cell--start-".concat(p,"-phone"),4>=p&&p>0),r))}),O)}Cell.propTypes={smSize:l.a.number,smStart:l.a.number,mdSize:l.a.number,mdStart:l.a.number,lgSize:l.a.number,lgStart:l.a.number,size:l.a.number,alignTop:l.a.bool,alignMiddle:l.a.bool,alignBottom:l.a.bool,alignRight:l.a.bool,alignLeft:l.a.bool,className:l.a.string,children:l.a.node},Cell.defaultProps={className:"",size:0,smSize:0,smStart:0,mdSize:0,mdStart:0,lgSize:0,lgStart:0}}).call(this,r(1))},127:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return Row}));var n=r(27),i=r.n(n),o=r(30),a=r.n(o),c=r(2),u=r.n(c),s=r(8),l=r.n(s);function Row(t){var r=t.className,n=t.children,o=a()(t,["className","children"]);return e.createElement("div",i()({className:l()("mdc-layout-grid__inner",r)},o),n)}Row.propTypes={className:u.a.string,children:u.a.node},Row.defaultProps={className:""}}).call(this,r(1))},128:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return Grid}));var n=r(27),i=r.n(n),o=r(30),a=r.n(o),c=r(2),u=r.n(c),s=r(8),l=r.n(s);function Grid(t){var r=t.className,n=t.children,o=a()(t,["className","children"]);return e.createElement("div",i()({className:l()("mdc-layout-grid",r)},o),n)}Grid.propTypes={className:u.a.string,children:u.a.node},Grid.defaultProps={className:""}}).call(this,r(1))},142:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"e",(function(){return a})),r.d(t,"b",(function(){return c})),r.d(t,"k",(function(){return u})),r.d(t,"i",(function(){return s})),r.d(t,"j",(function(){return l})),r.d(t,"l",(function(){return d})),r.d(t,"h",(function(){return g})),r.d(t,"g",(function(){return f})),r.d(t,"f",(function(){return p}));var n="dashboardAllTraffic",i="dashboardSearchFunnel",o="dashboardPopularity",a="dashboardSpeed",c="dashboardEarnings",u="pageDashboardSearchFunnel",s="pageDashboardAllTraffic",l="pageDashboardPopularity",d="pageDashboardSpeed",g="moduleSearchConsoleMain",f="moduleAnalyticsMain",p="moduleAdsenseMain"},208:function(e,t,r){"use strict";(function(e){var n=r(10),i=r.n(n),o=r(109),a=r(1),c=r(0),u=r(56),s=r.n(u),l=r(209);t.a=function PostSearcherAutoSuggest(t){var r=t.setCanSubmit,n=t.setMatch,u=Object(a.useState)(""),d=i()(u,2),g=d[0],f=d[1],p=Object(l.a)(g,200),b=Object(a.useState)([]),m=i()(b,2),v=m[0],y=m[1],h=Object(c.__)("No results found","google-site-kit"),O=Object(a.useCallback)((function(e){if(Array.isArray(v)&&e!==h){var t=v.find((function(t){return t.post_title===e}));t&&(r(!0),n(t))}else r(!1)}),[v,r,n]),_=Object(a.useCallback)((function(e){r(!1),f(e.target.value)}),[r]);return Object(a.useEffect)((function(){""!==p&&s.a.get("core","search","post-search",{query:encodeURIComponent(p)},{useCache:!1}).then(y).catch((function(){return y([])}))}),[p,y]),e.createElement(o.a,{className:"autocomplete__wrapper",onSelect:O},e.createElement(o.b,{id:"autocomplete",className:"autocomplete__input autocomplete__input--default",type:"text",onChange:_}),""!==p&&e.createElement(o.e,{portal:!1},e.createElement(o.c,{className:"autocomplete__menu autocomplete__menu--inline"},v.length>0?v.map((function(t){var r=t.ID,n=t.post_title;return e.createElement(o.d,{key:r,value:n,className:"autocomplete__option"})})):e.createElement(o.d,{value:h,className:"autocomplete__option"}))))}}).call(this,r(1))},209:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(10),i=r.n(n),o=r(1);function a(e,t){var r=Object(o.useState)(e),n=i()(r,2),a=n[0],c=n[1];return Object(o.useEffect)((function(){var r=setTimeout((function(){c(e)}),t);return function(){clearTimeout(r)}}),[e,t]),a}},22:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o}));var n="core/site",i="primary",o="secondary"},26:function(e,t,r){"use strict";var n=r(102),i=r.n(n);r.d(t,"o",(function(){return i.a})),r.d(t,"c",(function(){return n.HelperText})),r.d(t,"d",(function(){return n.Input}));var o=r(182);r.d(t,"j",(function(){return o.a}));var a=r(283);r.d(t,"g",(function(){return a.a}));var c=r(284);r.d(t,"i",(function(){return c.a}));var u=r(134),s=r.n(u);r.d(t,"n",(function(){return s.a})),r.d(t,"l",(function(){return u.Option}));var l=r(285);r.d(t,"k",(function(){return l.a}));var d=r(281);r.d(t,"f",(function(){return d.a}));var g=r(282);r.d(t,"e",(function(){return g.a}));var f=r(280);r.d(t,"h",(function(){return f.a}));var p=r(72);r.d(t,"a",(function(){return p.a})),r.d(t,"b",(function(){return p.b})),r.d(t,"m",(function(){return p.c}))},28:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return c}));var n=r(27),i=r.n(n),o=r(1),a=function(e){return function(t){return function FilteredComponent(r){return Object(o.createElement)(o.Fragment,{},"",Object(o.createElement)(t,r),e)}}},c=function(t,r){return function(n){return function InnerComponent(o){return e.createElement(t,i()({},o,r,{OriginalComponent:n}))}}}}).call(this,r(1))},4:function(e,t){e.exports=googlesitekit.data},423:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return p})),r.d(t,"a",(function(){return b}));var n=r(55),i=r(4),o=r.n(i),a=r(547),c=r(549),u=r(76),s=o.a.combineStores(o.a.commonStore,a.a,c.a,Object(u.b)()),l=function(e){e.registerStore(n.b,s)},d=r(0),g=r(550),f=r(142);function p(e){e.registerWidgetArea(f.a,{title:Object(d.__)("Your Traffic at a Glance","google-site-kit"),subtitle:Object(d.__)("How people found your site.","google-site-kit"),style:n.c.BOXES,priority:1},"dashboard"),e.registerWidgetArea(f.d,{title:Object(d.__)("Search Funnel","google-site-kit"),subtitle:Object(d.__)("How your site appeared in Search results and how many visitors you got from Search.","google-site-kit"),style:n.c.COMPOSITE,priority:2},"dashboard"),e.registerWidgetArea(f.c,{title:Object(d.__)("Popularity","google-site-kit"),subtitle:Object(d.__)("Your most popular pages and how people found them from Search.","google-site-kit"),style:n.c.BOXES,priority:3},"dashboard"),e.registerWidgetArea(f.e,{title:Object(d.__)("Page Speed and Experience","google-site-kit"),subtitle:Object(d.__)("How fast your home page loads, how quickly people can interact with your content, and how stable your content is.","google-site-kit"),style:n.c.BOXES,priority:4},"dashboard"),e.registerWidgetArea(f.b,{title:Object(d.__)("Earnings","google-site-kit"),subtitle:Object(d.__)("How much you’re earning from your content through AdSense.","google-site-kit"),style:n.c.BOXES,priority:5},"dashboard"),e.registerWidgetArea(f.k,{title:Object(d.__)("Search Funnel","google-site-kit"),subtitle:Object(d.__)("How your site appeared in Search results and how many visitors you got from Search.","google-site-kit"),style:n.c.COMPOSITE,priority:1},"pageDashboard"),e.registerWidgetArea(f.i,{title:Object(d.__)("Your Traffic at a Glance","google-site-kit"),subtitle:Object(d.__)("How people found your page.","google-site-kit"),style:n.c.BOXES,priority:2},"pageDashboard"),e.registerWidgetArea(f.j,{title:Object(d.__)("Popularity","google-site-kit"),subtitle:Object(d.__)("What people searched for to find your page.","google-site-kit"),style:n.c.BOXES,priority:3},"pageDashboard"),e.registerWidgetArea(f.l,{title:Object(d.__)("Page Speed and Experience","google-site-kit"),subtitle:Object(d.__)("How fast your page loads, how quickly people can interact with your content, and how stable your content is.","google-site-kit"),style:n.c.BOXES,priority:4},"pageDashboard"),e.registerWidget("urlSearch",{priority:100,width:[n.d.HALF,n.d.FULL],Component:g.a,wrapWidget:!1},[f.c]),e.registerWidgetArea(f.h,{priority:1,style:n.c.BOXES,title:Object(d.__)("Overview","google-site-kit")},"moduleSearchConsole"),e.registerWidgetArea(f.g,{priority:1,style:n.c.BOXES,title:Object(d.__)("Overview","google-site-kit")},"moduleAnalytics"),e.registerWidgetArea(f.f,{priority:1,style:n.c.BOXES,title:Object(d.__)("Overview","google-site-kit")},"moduleAdsense")}function b(e){var t=e.dispatch,r=e.select,i={WIDGET_AREA_STYLES:n.c,WIDGET_WIDTHS:n.d,registerWidgetArea:function(e,r,o){t(n.b).registerWidgetArea(e,r),o&&i.assignWidgetArea(e,o)},registerWidget:function(e,r,o){t(n.b).registerWidget(e,r),o&&i.assignWidget(e,o)},assignWidgetArea:function(e,r){t(n.b).assignWidgetArea(e,r)},assignWidget:function(e,r){t(n.b).assignWidget(e,r)},isWidgetAreaRegistered:function(e){return r(n.b).isWidgetAreaRegistered(e)},isWidgetRegistered:function(e){return r(n.b).isWidgetRegistered(e)}};return i}},43:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var n="_googlesitekitDataLayer",i="data-googlesitekit-gtag"},45:function(e,t,r){"use strict";(function(e){var n=r(27),i=r.n(n),o=r(30),a=r.n(o),c=r(8),u=r.n(c),s=r(2),l=r.n(s),d=r(125),g=r(1),f=r(26),p=Object(g.forwardRef)((function(t,r){var n=t.children,o=t.href,c=t.text,s=t.className,l=t.danger,p=t.disabled,b=t.target,m=t.icon,v=t.trailingIcon,y=a()(t,["children","href","text","className","danger","disabled","target","icon","trailingIcon"]),h=Object(g.useCallback)((function(e){null!==e&&f.j.attachTo(e)}),[]),O=Object(d.a)(r,h),_=o&&!p?"a":"button";return e.createElement(_,i()({className:u()("mdc-button",s,{"mdc-button--raised":!c,"mdc-button--danger":l}),href:p?void 0:o,ref:O,disabled:!!p,target:b||"_self",role:"a"===_?"button":void 0},y),m,e.createElement("span",{className:"mdc-button__label"},n),v)}));p.displayName="Button",p.propTypes={onClick:l.a.func,children:l.a.string.isRequired,href:l.a.string,text:l.a.bool,className:l.a.string,danger:l.a.bool,disabled:l.a.bool,icon:l.a.element,trailingIcon:l.a.element},p.defaultProps={onClick:null,href:null,text:!1,className:"",danger:!1,disabled:!1,icon:null,trailingIcon:null},t.a=p}).call(this,r(1))},47:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return n}));var n="core/location"},48:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return l}));var n,i=r(12),o=r.n(i),a=r(13),c=r.n(a),u=function(t){var r=e[t];if(!r)return!1;try{var n="__storage_test__";return r.setItem(n,n),r.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==r.length}},s=function(){function NullStorage(){o()(this,NullStorage)}return c()(NullStorage,[{key:"key",value:function(){return null}},{key:"getItem",value:function(){return null}},{key:"setItem",value:function(){}},{key:"removeItem",value:function(){}},{key:"clear",value:function(){}},{key:"length",get:function(){return 0}}]),NullStorage}(),l=function(){return n||(n=u("sessionStorage")?e.sessionStorage:u("localStorage")?e.localStorage:new s),n}}).call(this,r(21))},5:function(e,t,r){"use strict";(function(e){r.d(t,"f",(function(){return E})),r.d(t,"l",(function(){return w})),r.d(t,"b",(function(){return k})),r.d(t,"h",(function(){return A})),r.d(t,"j",(function(){return D})),r.d(t,"k",(function(){return P})),r.d(t,"w",(function(){return R})),r.d(t,"a",(function(){return N})),r.d(t,"s",(function(){return T})),r.d(t,"d",(function(){return I})),r.d(t,"g",(function(){return W}));var n=r(6),i=r.n(n),o=r(17),a=r.n(o),c=r(7),u=r.n(c),s=r(37),l=r.n(s),d=r(18),g=r(19),f=r(60),p=r(219),b=r(58);r.d(t,"u",(function(){return b.c}));var m=r(28),v=r(69);r.d(t,"r",(function(){return v.a})),r.d(t,"v",(function(){return v.b}));var y=r(71);r.d(t,"t",(function(){return y.a}));var h=r(75);r.d(t,"c",(function(){return h.b})),r.d(t,"i",(function(){return h.c}));r(48);var O=r(77);r.d(t,"m",(function(){return O.b})),r.d(t,"o",(function(){return O.c})),r.d(t,"p",(function(){return O.d})),r.d(t,"q",(function(){return O.e})),r.d(t,"e",(function(){return m.b}));var _=r(94);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"n",(function(){return _.a}));var E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=Object(d.get)(t,["_googlesitekitLegacyData","locale","","lang"]);if(r){var n=r.match(/^(\w{2})?(_)?(\w{2})/);if(n&&n[0])return n[0].replace(/_/g,"-")}return t.navigator.language},w=function(e){switch(e){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}},k=function(e,t){if("0"===e||0===e||isNaN(e))return null;var r=(t-e)/e;return isNaN(r)||!Object(d.isFinite)(r)?null:r},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e._googlesitekitLegacyData,r=t.modules;return r?Object.keys(r).reduce((function(e,t){return"object"!==l()(r[t])||void 0===r[t].slug||void 0===r[t].name||r[t].slug!==t?e:S(S({},e),{},u()({},t,r[t]))}),{}):{}},D=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e._googlesitekitLegacyData,i=n.admin,o=i.connectURL,a=i.adminRoot,c=n.setup.needReauthenticate,u=A(n)[t].screenID,s="pagespeed-insights"===t?{notification:"authentication_success",reAuth:void 0}:{},l=Object(f.a)(a,S({page:t&&r&&u?u:"googlesitekit-dashboard",slug:t,reAuth:r},s));if(!c)return l;var d=encodeURIComponent(Object(p.a)(l));return l=a+"?"+d,Object(f.a)(o,{redirect:l,status:r})},P=function(t,r){var n=e._googlesitekitLegacyData.admin.adminRoot;return t||(t="googlesitekit-dashboard"),r=S({page:t},r),Object(f.a)(n,r)},R=function(e){try{return JSON.parse(e)&&!!e}catch(e){return!1}},N=function(){var e=a()(i.a.mark((function e(t,r,n){var o,a,c,u,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=s.length>3&&void 0!==s[3]?s[3]:b.c,a=s.length>4&&void 0!==s[4]?s[4]:A,e.next=4,t.setModuleActive(r,n);case 4:return c=e.sent,(u=a())[r]&&(u[r].active=n),e.next=9,o("".concat(r,"_setup"),n?"module_activate":"module_deactivate",r);case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(g.b)("googlesitekit.ErrorNotification","googlesitekit.ErrorNotification",Object(m.b)(e,t),1)},I=function(e){if(!e)return"";var t=e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)})).replace(/(\\)/g,"");return Object(d.unescape)(t)};function W(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e._googlesitekitBaseData,n=r.blogPrefix,i=r.isNetworkMode;return i?t:n+t}}).call(this,r(21))},547:function(e,t,r){"use strict";(function(e){var n=r(7),i=r.n(n),o=r(20),a=r.n(o),c=r(55),u=r(548);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=Object.keys(c.c).map((function(e){return"WIDGET_AREA_STYLES.".concat(e)})).join(", "),g={assignWidgetArea:function(e,t){return{payload:{slug:e,contextSlugs:"string"==typeof t?[t]:t},type:"ASSIGN_WIDGET_AREA"}},registerWidgetArea:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.priority,n=void 0===r?10:r,i=t.style,o=void 0===i?c.c.BOXES:i,u=t.title,s=t.subtitle,l=t.Icon;return a()(e,"slug is required."),a()(u,"settings.title is required."),a()(Object.values(c.c).includes(o),"settings.style must be one of: ".concat(d,".")),{payload:{slug:e,settings:{priority:n,style:o,title:u,subtitle:s,Icon:l}},type:"REGISTER_WIDGET_AREA"}}},f={isWidgetAreaRegistered:function(e,t){return void 0!==e.areas[t]},getWidgetAreas:function(e,t){a()(t,"contextSlug is required.");var r=e.areas,n=e.contextAssignments;return Object(u.a)(Object.values(r).filter((function(e){return n[t]&&n[t].includes(e.slug)})),"priority")},getWidgetArea:function(e,t){return a()(t,"slug is required."),e.areas[t]||null}};t.a={initialState:{areas:{},contextAssignments:{}},actions:g,controls:{},reducer:function(t,r){var n=r.type,o=r.payload;switch(n){case"ASSIGN_WIDGET_AREA":var a=o.slug,c=o.contextSlugs,u=t.contextAssignments;return c.forEach((function(e){void 0===u[e]&&(u[e]=[]),u[e].includes(a)||u[e].push(a)})),l(l({},t),{},{contextAssignments:u});case"REGISTER_WIDGET_AREA":var s=o.slug,d=o.settings;return void 0!==t.areas[s]?(e.console.warn('Could not register widget area with slug "'.concat(s,'". Widget area "').concat(s,'" is already registered.')),t):l(l({},t),{},{areas:l(l({},t.areas),{},i()({},s,l(l({},d),{},{slug:s})))});default:return t}},resolvers:{},selectors:f}}).call(this,r(21))},548:function(e,t,r){"use strict";function n(e,t){return e.sort((function(e,r){return e[t]>r[t]?1:e[t]<r[t]?-1:0}))}r.d(t,"a",(function(){return n}))},549:function(e,t,r){"use strict";(function(e){var n=r(7),i=r.n(n),o=r(20),a=r.n(o),c=r(55);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=Object.keys(c.d).map((function(e){return"WIDGET_WIDTHS.".concat(e)})).join(", "),d={areaAssignments:{},registryKey:void 0,widgets:{},widgetStates:{}},g={assignWidget:function(e,t){return{payload:{slug:e,areaSlugs:"string"==typeof t?[t]:t},type:"ASSIGN_WIDGET"}},registerWidget:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.Component,n=t.priority,i=void 0===n?10:n,o=t.width,u=void 0===o?c.d.QUARTER:o,s=t.wrapWidget,d=void 0===s||s,g=Object.values(c.d);return a()(r,"component is required to register a widget."),a()(Array.isArray(u)&&u.some(g.includes,g)||!Array.isArray(u)&&g.includes(u),"Widget width should be one of: ".concat(l,', but "').concat(u,'" was provided.')),{payload:{slug:e,settings:{Component:r,priority:i,width:u,wrapWidget:d}},type:"REGISTER_WIDGET"}},setWidgetState:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{payload:{slug:e,Component:t,metadata:r},type:"SET_WIDGET_STATE"}},unsetWidgetState:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{payload:{slug:e,Component:t,metadata:r},type:"UNSET_WIDGET_STATE"}}},f={isWidgetRegistered:function(e,t){return void 0!==e.widgets[t]},getWidgets:function(e,t){a()(t,"widgetAreaSlug is required.");var r=e.areaAssignments,n=e.widgets;return Object.values(n).filter((function(e){var n;return null===(n=r[t])||void 0===n?void 0:n.includes(e.slug)})).sort((function(e,t){return e.priority-t.priority}))},getWidget:function(e,t){return a()(t,"slug is required to get a widget."),e.widgets[t]||null},getWidgetState:function(e,t){return e.widgetStates[t]||null}};t.a={initialState:d,actions:g,controls:{},reducer:function(t,r){var n=r.type,o=r.payload;switch(n){case"ASSIGN_WIDGET":var a=o.slug,c=o.areaSlugs,u=t.areaAssignments;return c.forEach((function(e){void 0===u[e]&&(u[e]=[]),u[e].includes(a)||u[e].push(a)})),s(s({},t),{},{areaAssignments:u});case"REGISTER_WIDGET":var l=o.slug,d=o.settings;return void 0!==t.widgets[l]?(e.console.warn('Could not register widget with slug "'.concat(l,'". Widget "').concat(l,'" is already registered.')),t):s(s({},t),{},{widgets:s(s({},t.widgets),{},i()({},l,s(s({},d),{},{slug:l})))});case"SET_WIDGET_STATE":var g=o.slug,f=o.Component,p=o.metadata;return s(s({},t),{},{widgetStates:s(s({},t.widgetStates),{},i()({},g,{Component:f,metadata:p}))});case"UNSET_WIDGET_STATE":var b,m,v=o.slug,y=o.Component,h=o.metadata,O=s({},t.widgetStates);return(null==O||null===(b=O[v])||void 0===b?void 0:b.Component)===y&&(null==O||null===(m=O[v])||void 0===m?void 0:m.metadata)===h&&delete O[v],s(s({},t),{},{widgetStates:O});default:return t}},resolvers:{},selectors:f}}).call(this,r(21))},55:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return o}));var n={BOXES:"boxes",COMPOSITE:"composite"},i={QUARTER:"quarter",HALF:"half",FULL:"full"},o="core/widgets"},550:function(e,t,r){"use strict";(function(e){var n=r(10),i=r.n(n),o=r(1),a=r(0),c=r(4),u=r.n(c),s=r(22),l=r(47),d=r(45),g=r(208),f=u.a.useSelect,p=u.a.useDispatch;t.a=function URLSearchWidget(t){var r=t.Widget,n=Object(o.useState)(!1),c=i()(n,2),u=c[0],b=c[1],m=Object(o.useState)({}),v=i()(m,2),y=v[0],h=v[1],O=f((function(e){return e(s.c).getAdminURL("googlesitekit-dashboard",{permaLink:null==y?void 0:y.permalink})})),_=p(l.a).navigateTo,j=Object(o.useCallback)((function(){(null==y?void 0:y.permalink)&&_(O)}),[O,y]);return e.createElement("div",{className:"mdc-layout-grid__cell"},e.createElement(r,{Header:function Header(){return e.createElement("h3",{className:"googlesitekit-subheading-1 googlesitekit-widget__header-title"},Object(a.__)("Search for individual page or post information","google-site-kit"))},noPadding:!0},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-12"},e.createElement("div",{className:"googlesitekit-post-searcher"},e.createElement("label",{className:"googlesitekit-post-searcher__label",htmlFor:"autocomplete"},Object(a.__)("Title or URL","google-site-kit")),e.createElement(g.a,{setCanSubmit:b,setMatch:h}),e.createElement("div",{className:"googlesitekit-post-searcher__button-wrapper"},e.createElement(d.a,{onClick:j,className:"googlesitekit-post-searcher__button",disabled:!u},Object(a.__)("View Data","google-site-kit")))))))))}}).call(this,r(1))},56:function(e,t){e.exports=googlesitekit.api},58:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return g}));var n=r(95),i=e._googlesitekitBaseData||{},o=i.isFirstAdmin,a=i.trackingAllowed,c={isFirstAdmin:o,trackingEnabled:i.trackingEnabled,trackingID:i.trackingID,referenceSiteURL:i.referenceSiteURL,userIDHash:i.userIDHash},u=Object(n.a)(c),s=u.enableTracking,l=u.disableTracking,d=u.isTrackingEnabled,g=u.trackEvent;function f(e){e?s():l()}!0===a&&f(d())}).call(this,r(21))},64:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(43);function i(e){return function(){e[n.a]=e[n.a]||[],e[n.a].push(arguments)}}},69:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o}));var n=r(98),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:n.a.sanitize(e,t)}},o=function(e){var t;return null==e||null===(t=e.replace)||void 0===t?void 0:t.call(e,/\/+$/,"")}},71:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(37),i=r.n(n),o=r(93),a=r.n(o),c=function(e){return a()(JSON.stringify(function e(t){var r={};return Object.keys(t).sort().forEach((function(n){var o=t[n];o&&"object"===i()(o)&&!Array.isArray(o)&&(o=e(o)),r[n]=o})),r}(e)))}},72:function(e,t,r){"use strict";var n=r(126);r.d(t,"a",(function(){return n.a}));var i=r(127);r.d(t,"c",(function(){return i.a}));var o=r(128);r.d(t,"b",(function(){return o.a}))},75:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return d}));var n=r(10),i=r.n(n),o=r(0);function a(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=null,r=null,n=document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),i=document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");if(n&&i)return!1;if(t=document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"),r=document.querySelector("#wp-admin-bar-google-site-kit .ab-item"),null===t&&null===r)return!1;var a=document.createElement("span");a.setAttribute("class","googlesitekit-notifications-counter update-plugins count-".concat(e));var c=document.createElement("span");c.setAttribute("class","plugin-count"),c.setAttribute("aria-hidden","true"),c.textContent=e;var u=document.createElement("span");return u.setAttribute("class","screen-reader-text"),u.textContent=Object(o.sprintf)(
/* translators: %d is the number of notifications */
Object(o._n)("%d notification","%d notifications",e,"google-site-kit"),e),a.appendChild(c),a.appendChild(u),t&&null===n&&t.appendChild(a),r&&null===i&&r.appendChild(a),a},s=function(){e.localStorage&&e.localStorage.clear(),e.sessionStorage&&e.sessionStorage.clear()},l=function(e){for(var t=location.search.substr(1).split("&"),r={},n=0;n<t.length;n++)r[t[n].split("=")[0]]=decodeURIComponent(t[n].split("=")[1]);return e?r.hasOwnProperty(e)?decodeURIComponent(r[e].replace(/\+/g," ")):"":r},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,r=new URL(t.href);if(e)return r.searchParams&&r.searchParams.get?r.searchParams.get(e):l(e);var n,o={},c=a(r.searchParams.entries());try{for(c.s();!(n=c.n()).done;){var u=i()(n.value,2),s=u[0],d=u[1];o[s]=d}}catch(e){c.e(e)}finally{c.f()}return o}}).call(this,r(21))},76:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(7),i=r.n(n),o=r(37),a=r.n(o),c=r(20),u=r.n(c),s=r(93),l=r.n(s),d=r(5);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(t&&Array.isArray(t)){var r=t.map((function(e){return"object"===a()(e)?Object(d.t)(e):e}));return"".concat(e,"::").concat(l()(JSON.stringify(r)))}return e}var b={receiveError:function(e,t,r){return u()(e,"error is required."),t&&u()(r&&Array.isArray(r),"args is required (and must be an array) when baseName is specified."),{type:"RECEIVE_ERROR",payload:{error:e,baseName:t,args:r}}},clearError:function(e,t){return e&&u()(t&&Array.isArray(t),"args is required (and must be an array) when baseName is specified."),{type:"CLEAR_ERROR",payload:{baseName:e,args:t}}},clearErrors:function(e){return{type:"CLEAR_ERRORS",payload:{baseName:e}}}};function m(){var e={getErrorForSelector:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return u()(r,"selectorName is required."),e.getError(t,r,n)},getErrorForAction:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return u()(r,"actionName is required."),e.getError(t,r,n)},getError:function(e,t,r){var n=e.error,i=e.errors;return t||r?(u()(t,"baseName is required."),i[p(t,r)]):n},getErrors:function(e){var t=new Set(Object.values(e.errors));return void 0!==e.error&&t.add(e.error),Array.from(t)},hasErrors:function(t){return e.getErrors(t).length>0}};return{initialState:{errors:{},error:void 0},actions:b,controls:{},reducer:function(e,t){var r=t.type,n=t.payload;switch(r){case"RECEIVE_ERROR":var o=n.baseName,a=n.args,c=n.error;return f(f({},e),{},o?{errors:f(f({},e.errors||{}),{},i()({},p(o,a),c))}:{error:c});case"CLEAR_ERROR":var u=n.baseName,s=n.args,l=f({},e);if(u){var d=p(u,s);l.errors=f({},e.errors||{}),delete l.errors[d]}else l.error=void 0;return l;case"CLEAR_ERRORS":var g=n.baseName,b=f({},e);if(g)for(var m in b.errors=f({},e.errors||{}),b.errors)(m===g||m.startsWith("".concat(g,"::")))&&delete b.errors[m];else b.errors={},b.error=void 0;return b;default:return e}},resolvers:{},selectors:e}}},766:function(e,t,r){"use strict";r.r(t),function(e){var n=r(4),i=r.n(n),o=r(423);Object(o.b)(i.a);var a=Object(o.a)(i.a);Object(o.c)(a),void 0===e.googlesitekit&&(e.googlesitekit={}),e.googlesitekit.widgets=a,t.default=a}.call(this,r(21))},77:function(e,t,r){"use strict";(function(e){r.d(t,"e",(function(){return f})),r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return v})),r.d(t,"b",(function(){return y})),r.d(t,"a",(function(){return h}));var n=r(30),i=r.n(n),o=r(7),a=r.n(o),c=r(37),u=r.n(c),s=r(18),l=r(0);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){if(e=parseInt(e,10),isNaN(e)||0===e)return"0.0s";var t={};return t.hours=Math.floor(e/60/60),t.minutes=Math.floor(e/60%60),t.seconds=Math.floor(e%60),((t.hours?t.hours+"h ":"")+(t.minutes?t.minutes+"m ":"")+(t.seconds?t.seconds+"s ":"")).trim()},p=function(e){return 1e6<=e?Math.round(e/1e5)/10:1e4<=e?Math.round(e/1e3):1e3<=e?Math.round(e/100)/10:e},b=function(e){var t={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=e?Object(l.sprintf)(// translators: %s: an abbreviated number in millions.
Object(l.__)("%sM","google-site-kit"),v(p(e),e%10==0?{}:t)):1e4<=e?Object(l.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(l.__)("%sK","google-site-kit"),v(p(e))):1e3<=e?Object(l.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(l.__)("%sK","google-site-kit"),v(p(e),e%10==0?{}:t)):v(e,{signDisplay:"never",maximumFractionDigits:1})},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=Object(s.isFinite)(e)?e:Number(e),Object(s.isFinite)(e)||(console.warn("Invalid number",e,u()(e)),e=0);var r={};"%"===t?r={style:"percent",maximumFractionDigits:2}:"s"===t?r={style:"duration"}:t&&"string"==typeof t?r={style:"currency",currency:t}:Object(s.isPlainObject)(t)&&(r=g({},t));var n=r,i=n.style,o=void 0===i?"metric":i;return"metric"===o?b(e):"duration"===o?f(e):v(e,r)},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.locale,n=void 0===r?h():r,o=i()(t,["locale"]);return new Intl.NumberFormat(n,o).format(e)},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.locale,n=void 0===r?h():r,i=t.style,o=void 0===i?"long":i,a=t.type,c=void 0===a?"conjunction":a;if(Intl.ListFormat){var u=new Intl.ListFormat(n,{style:o,type:c});return u.format(e)}
/* translators: used between list items, there is a space after the comma. */var s=Object(l.__)(", ","google-site-kit");return e.join(s)},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=Object(s.get)(t,["_googlesitekitLegacyData","locale"]);if(r){var n=r.match(/^(\w{2})?(_)?(\w{2})/);if(n&&n[0])return n[0].replace(/_/g,"-")}return t.navigator.language}}).call(this,r(21))},94:function(e,t,r){"use strict";function n(e){return e.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function i(e){return"<p>".concat(e.replace(/\n{2,}/g,"</p><p>"),"</p>")}function o(e){return e.replace(/\n/gi,"<br>")}function a(e){for(var t=e,r=0,a=[n,i,o];r<a.length;r++){t=(0,a[r])(t)}return t}r.d(t,"a",(function(){return a}))},95:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return l}));var n=r(7),i=r.n(n),o=r(96),a=r(97);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s={isFirstAdmin:!1,trackingEnabled:!1,trackingID:"",referenceSiteURL:"",userIDHash:""};function l(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,i=u(u({},s),t);return i.referenceSiteURL&&(i.referenceSiteURL=i.referenceSiteURL.toString().replace(/\/+$/,"")),{enableTracking:Object(o.a)(i,r),disableTracking:function(){i.trackingEnabled=!1},isTrackingEnabled:function(){return!!i.trackingEnabled},trackEvent:Object(a.a)(i,r,n)}}}).call(this,r(21))},96:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return o}));var n=r(64),i=r(43);function o(t,r){var o=Object(n.a)(r);return function(){t.trackingEnabled=!0;var r=e.document;if(!r.querySelector("script[".concat(i.b,"]"))){var n=r.createElement("script");n.setAttribute(i.b,""),n.async=!0,n.src="https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID,"&l=").concat(i.a),r.head.appendChild(n),o("js",new Date),o("config",t.trackingID)}}}}).call(this,r(21))},97:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return g}));var n=r(6),i=r.n(n),o=r(7),a=r.n(o),c=r(17),u=r.n(c),s=r(64);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(t,r,n){var o=Object(s.a)(r);return function(){var r=u()(i.a.mark((function r(a,c,u,s){var l,g,f,p,b,m,v,y;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(f=t.isFirstAdmin,p=t.referenceSiteURL,b=t.trackingEnabled,m=t.trackingID,v=t.userIDHash,!(null===(l=n._gaUserPrefs)||void 0===l||null===(g=l.ioo)||void 0===g?void 0:g.call(l))){r.next=3;break}return r.abrupt("return");case 3:if(b){r.next=5;break}return r.abrupt("return");case 5:return y={send_to:m,event_category:a,event_label:u,value:s,dimension1:p,dimension2:f?"true":"false",dimension3:v,dimension4:"1.26.0"},r.abrupt("return",new Promise((function(t){var r=setTimeout((function(){e.console.warn('Tracking event "'.concat(c,'" (category "').concat(a,'") took too long to fire.')),t()}),1e3);o("event",c,d(d({},y),{},{event_callback:function(){clearTimeout(r),t()}}))})));case 7:case"end":return r.stop()}}),r)})));return function(e,t,n,i){return r.apply(this,arguments)}}()}}).call(this,r(21))},98:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return i}));var n=r(138),i=r.n(n)()(e)}).call(this,r(21))}},[[766,1,0]]]);