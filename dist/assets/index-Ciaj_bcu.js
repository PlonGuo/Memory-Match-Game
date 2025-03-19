(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function hw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ey={exports:{}},Al={},ty={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),dw=Symbol.for("react.portal"),fw=Symbol.for("react.fragment"),pw=Symbol.for("react.strict_mode"),mw=Symbol.for("react.profiler"),gw=Symbol.for("react.provider"),yw=Symbol.for("react.context"),_w=Symbol.for("react.forward_ref"),vw=Symbol.for("react.suspense"),Ew=Symbol.for("react.memo"),ww=Symbol.for("react.lazy"),vp=Symbol.iterator;function Tw(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var ny={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ry=Object.assign,iy={};function Fi(t,e,n){this.props=t,this.context=e,this.refs=iy,this.updater=n||ny}Fi.prototype.isReactComponent={};Fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sy(){}sy.prototype=Fi.prototype;function kh(t,e,n){this.props=t,this.context=e,this.refs=iy,this.updater=n||ny}var Nh=kh.prototype=new sy;Nh.constructor=kh;ry(Nh,Fi.prototype);Nh.isPureReactComponent=!0;var Ep=Array.isArray,oy=Object.prototype.hasOwnProperty,xh={current:null},ay={key:!0,ref:!0,__self:!0,__source:!0};function ly(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)oy.call(e,r)&&!ay.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:uo,type:t,key:s,ref:o,props:i,_owner:xh.current}}function Iw(t,e){return{$$typeof:uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===uo}function Sw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wp=/\/+/g;function ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sw(""+t.key):e.toString(36)}function da(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case uo:case dw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ku(o,0):r,Ep(i)?(n="",t!=null&&(n=t.replace(wp,"$&/")+"/"),da(i,e,n,"",function(h){return h})):i!=null&&(Dh(i)&&(i=Iw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ep(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ku(s,l);o+=da(s,e,n,u,i)}else if(u=Tw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ku(s,l++),o+=da(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bo(t,e,n){if(t==null)return t;var r=[],i=0;return da(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Aw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},fa={transition:null},Rw={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:fa,ReactCurrentOwner:xh};function uy(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Bo,forEach:function(t,e,n){Bo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bo(t,function(){e++}),e},toArray:function(t){return Bo(t,function(e){return e})||[]},only:function(t){if(!Dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=Fi;J.Fragment=fw;J.Profiler=mw;J.PureComponent=kh;J.StrictMode=pw;J.Suspense=vw;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rw;J.act=uy;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ry({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)oy.call(e,u)&&!ay.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:uo,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:yw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gw,_context:t},t.Consumer=t};J.createElement=ly;J.createFactory=function(t){var e=ly.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:_w,render:t}};J.isValidElement=Dh;J.lazy=function(t){return{$$typeof:ww,_payload:{_status:-1,_result:t},_init:Aw}};J.memo=function(t,e){return{$$typeof:Ew,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=fa.transition;fa.transition={};try{t()}finally{fa.transition=e}};J.unstable_act=uy;J.useCallback=function(t,e){return it.current.useCallback(t,e)};J.useContext=function(t){return it.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return it.current.useDeferredValue(t)};J.useEffect=function(t,e){return it.current.useEffect(t,e)};J.useId=function(){return it.current.useId()};J.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return it.current.useMemo(t,e)};J.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};J.useRef=function(t){return it.current.useRef(t)};J.useState=function(t){return it.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return it.current.useTransition()};J.version="18.3.1";ty.exports=J;var re=ty.exports;const Cw=hw(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pw=re,kw=Symbol.for("react.element"),Nw=Symbol.for("react.fragment"),xw=Object.prototype.hasOwnProperty,Dw=Pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vw={key:!0,ref:!0,__self:!0,__source:!0};function cy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xw.call(e,r)&&!Vw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kw,type:t,key:s,ref:o,props:i,_owner:Dw.current}}Al.Fragment=Nw;Al.jsx=cy;Al.jsxs=cy;ey.exports=Al;var U=ey.exports,fc={},hy={exports:{}},_t={},dy={exports:{}},fy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,K){var Y=z.length;z.push(K);e:for(;0<Y;){var ge=Y-1>>>1,le=z[ge];if(0<i(le,K))z[ge]=K,z[Y]=le,Y=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],Y=z.pop();if(Y!==K){z[0]=Y;e:for(var ge=0,le=z.length,Ie=le>>>1;ge<Ie;){var Zt=2*(ge+1)-1,en=z[Zt],tn=Zt+1,nn=z[tn];if(0>i(en,Y))tn<le&&0>i(nn,en)?(z[ge]=nn,z[tn]=Y,ge=tn):(z[ge]=en,z[Zt]=Y,ge=Zt);else if(tn<le&&0>i(nn,Y))z[ge]=nn,z[tn]=Y,ge=tn;else break e}}return K}function i(z,K){var Y=z.sortIndex-K.sortIndex;return Y!==0?Y:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,y=3,R=!1,C=!1,N=!1,L=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=z)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function D(z){if(N=!1,S(z),!C)if(n(u)!==null)C=!0,Ki(b);else{var K=n(h);K!==null&&Jt(D,K.startTime-z)}}function b(z,K){C=!1,N&&(N=!1,I(g),g=-1),R=!0;var Y=y;try{for(S(K),m=n(u);m!==null&&(!(m.expirationTime>K)||z&&!A());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,y=m.priorityLevel;var le=ge(m.expirationTime<=K);K=t.unstable_now(),typeof le=="function"?m.callback=le:m===n(u)&&r(u),S(K)}else r(u);m=n(u)}if(m!==null)var Ie=!0;else{var Zt=n(h);Zt!==null&&Jt(D,Zt.startTime-K),Ie=!1}return Ie}finally{m=null,y=Y,R=!1}}var F=!1,v=null,g=-1,_=5,w=-1;function A(){return!(t.unstable_now()-w<_)}function k(){if(v!==null){var z=t.unstable_now();w=z;var K=!0;try{K=v(!0,z)}finally{K?T():(F=!1,v=null)}}else F=!1}var T;if(typeof E=="function")T=function(){E(k)};else if(typeof MessageChannel<"u"){var Et=new MessageChannel,fr=Et.port2;Et.port1.onmessage=k,T=function(){fr.postMessage(null)}}else T=function(){L(k,0)};function Ki(z){v=z,F||(F=!0,T())}function Jt(z,K){g=L(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){C||R||(C=!0,Ki(b))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Y=y;y=K;try{return z()}finally{y=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=y;y=z;try{return K()}finally{y=Y}},t.unstable_scheduleCallback=function(z,K,Y){var ge=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ge+Y:ge):Y=ge,z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=Y+le,z={id:f++,callback:K,priorityLevel:z,startTime:Y,expirationTime:le,sortIndex:-1},Y>ge?(z.sortIndex=Y,e(h,z),n(u)===null&&z===n(h)&&(N?(I(g),g=-1):N=!0,Jt(D,Y-ge))):(z.sortIndex=le,e(u,z),C||R||(C=!0,Ki(b))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var K=y;return function(){var Y=y;y=K;try{return z.apply(this,arguments)}finally{y=Y}}}})(fy);dy.exports=fy;var Ow=dy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lw=re,yt=Ow;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var py=new Set,bs={};function Ur(t,e){Ti(t,e),Ti(t+"Capture",e)}function Ti(t,e){for(bs[t]=e,t=0;t<e.length;t++)py.add(e[t])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=Object.prototype.hasOwnProperty,Mw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tp={},Ip={};function bw(t){return pc.call(Ip,t)?!0:pc.call(Tp,t)?!1:Mw.test(t)?Ip[t]=!0:(Tp[t]=!0,!1)}function Fw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Uw(t,e,n,r){if(e===null||typeof e>"u"||Fw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vh=/[\-:]([a-z])/g;function Oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vh,Oh);ze[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vh,Oh);ze[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vh,Oh);ze[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lh(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Uw(e,n,i,r)&&(n=null),r||i===null?bw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sn=Lw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$o=Symbol.for("react.element"),ei=Symbol.for("react.portal"),ti=Symbol.for("react.fragment"),Mh=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),my=Symbol.for("react.provider"),gy=Symbol.for("react.context"),bh=Symbol.for("react.forward_ref"),gc=Symbol.for("react.suspense"),yc=Symbol.for("react.suspense_list"),Fh=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),yy=Symbol.for("react.offscreen"),Sp=Symbol.iterator;function ls(t){return t===null||typeof t!="object"?null:(t=Sp&&t[Sp]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Nu;function gs(t){if(Nu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nu=e&&e[1]||""}return`
`+Nu+t}var xu=!1;function Du(t,e){if(!t||xu)return"";xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?gs(t):""}function jw(t){switch(t.tag){case 5:return gs(t.type);case 16:return gs("Lazy");case 13:return gs("Suspense");case 19:return gs("SuspenseList");case 0:case 2:case 15:return t=Du(t.type,!1),t;case 11:return t=Du(t.type.render,!1),t;case 1:return t=Du(t.type,!0),t;default:return""}}function _c(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ti:return"Fragment";case ei:return"Portal";case mc:return"Profiler";case Mh:return"StrictMode";case gc:return"Suspense";case yc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gy:return(t.displayName||"Context")+".Consumer";case my:return(t._context.displayName||"Context")+".Provider";case bh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fh:return e=t.displayName||null,e!==null?e:_c(t.type)||"Memo";case xn:e=t._payload,t=t._init;try{return _c(t(e))}catch{}}return null}function zw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _c(e);case 8:return e===Mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _y(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Bw(t){var e=_y(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ho(t){t._valueTracker||(t._valueTracker=Bw(t))}function vy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_y(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Oa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vc(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ap(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ey(t,e){e=e.checked,e!=null&&Lh(t,"checked",e,!1)}function Ec(t,e){Ey(t,e);var n=tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wc(t,e.type,n):e.hasOwnProperty("defaultValue")&&wc(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wc(t,e,n){(e!=="number"||Oa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ys=Array.isArray;function di(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Tc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Cp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(ys(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function wy(t,e){var n=tr(e.value),r=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Pp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ty(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ic(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ty(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wo,Iy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$w=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(t){$w.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Is[e]=Is[t]})});function Sy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Is.hasOwnProperty(t)&&Is[t]?(""+e).trim():e+"px"}function Ay(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Hw=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sc(t,e){if(e){if(Hw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Ac(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rc=null;function Uh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cc=null,fi=null,pi=null;function kp(t){if(t=fo(t)){if(typeof Cc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Nl(e),Cc(t.stateNode,t.type,e))}}function Ry(t){fi?pi?pi.push(t):pi=[t]:fi=t}function Cy(){if(fi){var t=fi,e=pi;if(pi=fi=null,kp(t),e)for(t=0;t<e.length;t++)kp(e[t])}}function Py(t,e){return t(e)}function ky(){}var Vu=!1;function Ny(t,e,n){if(Vu)return t(e,n);Vu=!0;try{return Py(t,e,n)}finally{Vu=!1,(fi!==null||pi!==null)&&(ky(),Cy())}}function Us(t,e){var n=t.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var Pc=!1;if(gn)try{var us={};Object.defineProperty(us,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",us,us),window.removeEventListener("test",us,us)}catch{Pc=!1}function Ww(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ss=!1,La=null,Ma=!1,kc=null,qw={onError:function(t){Ss=!0,La=t}};function Gw(t,e,n,r,i,s,o,l,u){Ss=!1,La=null,Ww.apply(qw,arguments)}function Kw(t,e,n,r,i,s,o,l,u){if(Gw.apply(this,arguments),Ss){if(Ss){var h=La;Ss=!1,La=null}else throw Error(M(198));Ma||(Ma=!0,kc=h)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Np(t){if(jr(t)!==t)throw Error(M(188))}function Qw(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Np(i),t;if(s===r)return Np(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function Dy(t){return t=Qw(t),t!==null?Vy(t):null}function Vy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Vy(t);if(e!==null)return e;t=t.sibling}return null}var Oy=yt.unstable_scheduleCallback,xp=yt.unstable_cancelCallback,Xw=yt.unstable_shouldYield,Yw=yt.unstable_requestPaint,Ae=yt.unstable_now,Jw=yt.unstable_getCurrentPriorityLevel,jh=yt.unstable_ImmediatePriority,Ly=yt.unstable_UserBlockingPriority,ba=yt.unstable_NormalPriority,Zw=yt.unstable_LowPriority,My=yt.unstable_IdlePriority,Rl=null,Wt=null;function eT(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:rT,tT=Math.log,nT=Math.LN2;function rT(t){return t>>>=0,t===0?32:31-(tT(t)/nT|0)|0}var qo=64,Go=4194304;function _s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=_s(l):(s&=o,s!==0&&(r=_s(s)))}else o=n&~i,o!==0?r=_s(o):s!==0&&(r=_s(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mt(e),i=1<<n,r|=t[n],e&=~i;return r}function iT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Mt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=iT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Nc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function by(){var t=qo;return qo<<=1,!(qo&4194240)&&(qo=64),t}function Ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=n}function oT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function Fy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Uy,Bh,jy,zy,By,xc=!1,Ko=[],zn=null,Bn=null,$n=null,js=new Map,zs=new Map,Vn=[],aT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dp(t,e){switch(t){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zs.delete(e.pointerId)}}function cs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fo(e),e!==null&&Bh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lT(t,e,n,r,i){switch(e){case"focusin":return zn=cs(zn,t,e,n,r,i),!0;case"dragenter":return Bn=cs(Bn,t,e,n,r,i),!0;case"mouseover":return $n=cs($n,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return js.set(s,cs(js.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,zs.set(s,cs(zs.get(s)||null,t,e,n,r,i)),!0}return!1}function $y(t){var e=wr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=xy(n),e!==null){t.blockedOn=e,By(t.priority,function(){jy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rc=r,n.target.dispatchEvent(r),Rc=null}else return e=fo(n),e!==null&&Bh(e),t.blockedOn=n,!1;e.shift()}return!0}function Vp(t,e,n){pa(t)&&n.delete(e)}function uT(){xc=!1,zn!==null&&pa(zn)&&(zn=null),Bn!==null&&pa(Bn)&&(Bn=null),$n!==null&&pa($n)&&($n=null),js.forEach(Vp),zs.forEach(Vp)}function hs(t,e){t.blockedOn===e&&(t.blockedOn=null,xc||(xc=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,uT)))}function Bs(t){function e(i){return hs(i,t)}if(0<Ko.length){hs(Ko[0],t);for(var n=1;n<Ko.length;n++){var r=Ko[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zn!==null&&hs(zn,t),Bn!==null&&hs(Bn,t),$n!==null&&hs($n,t),js.forEach(e),zs.forEach(e),n=0;n<Vn.length;n++)r=Vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)$y(n),n.blockedOn===null&&Vn.shift()}var mi=Sn.ReactCurrentBatchConfig,Ua=!0;function cT(t,e,n,r){var i=ae,s=mi.transition;mi.transition=null;try{ae=1,$h(t,e,n,r)}finally{ae=i,mi.transition=s}}function hT(t,e,n,r){var i=ae,s=mi.transition;mi.transition=null;try{ae=4,$h(t,e,n,r)}finally{ae=i,mi.transition=s}}function $h(t,e,n,r){if(Ua){var i=Dc(t,e,n,r);if(i===null)Hu(t,e,r,ja,n),Dp(t,r);else if(lT(i,t,e,n,r))r.stopPropagation();else if(Dp(t,r),e&4&&-1<aT.indexOf(t)){for(;i!==null;){var s=fo(i);if(s!==null&&Uy(s),s=Dc(t,e,n,r),s===null&&Hu(t,e,r,ja,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Hu(t,e,r,null,n)}}var ja=null;function Dc(t,e,n,r){if(ja=null,t=Uh(r),t=wr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ja=t,null}function Hy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jw()){case jh:return 1;case Ly:return 4;case ba:case Zw:return 16;case My:return 536870912;default:return 16}default:return 16}}var Fn=null,Hh=null,ma=null;function Wy(){if(ma)return ma;var t,e=Hh,n=e.length,r,i="value"in Fn?Fn.value:Fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ma=i.slice(t,1<r?1-r:void 0)}function ga(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function Op(){return!1}function vt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qo:Op,this.isPropagationStopped=Op,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),e}var Ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wh=vt(Ui),ho=ve({},Ui,{view:0,detail:0}),dT=vt(ho),Lu,Mu,ds,Cl=ve({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ds&&(ds&&t.type==="mousemove"?(Lu=t.screenX-ds.screenX,Mu=t.screenY-ds.screenY):Mu=Lu=0,ds=t),Lu)},movementY:function(t){return"movementY"in t?t.movementY:Mu}}),Lp=vt(Cl),fT=ve({},Cl,{dataTransfer:0}),pT=vt(fT),mT=ve({},ho,{relatedTarget:0}),bu=vt(mT),gT=ve({},Ui,{animationName:0,elapsedTime:0,pseudoElement:0}),yT=vt(gT),_T=ve({},Ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vT=vt(_T),ET=ve({},Ui,{data:0}),Mp=vt(ET),wT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ST(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=IT[t])?!!e[t]:!1}function qh(){return ST}var AT=ve({},ho,{key:function(t){if(t.key){var e=wT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?TT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qh,charCode:function(t){return t.type==="keypress"?ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RT=vt(AT),CT=ve({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=vt(CT),PT=ve({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qh}),kT=vt(PT),NT=ve({},Ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),xT=vt(NT),DT=ve({},Cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VT=vt(DT),OT=[9,13,27,32],Gh=gn&&"CompositionEvent"in window,As=null;gn&&"documentMode"in document&&(As=document.documentMode);var LT=gn&&"TextEvent"in window&&!As,qy=gn&&(!Gh||As&&8<As&&11>=As),Fp=" ",Up=!1;function Gy(t,e){switch(t){case"keyup":return OT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ky(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ni=!1;function MT(t,e){switch(t){case"compositionend":return Ky(e);case"keypress":return e.which!==32?null:(Up=!0,Fp);case"textInput":return t=e.data,t===Fp&&Up?null:t;default:return null}}function bT(t,e){if(ni)return t==="compositionend"||!Gh&&Gy(t,e)?(t=Wy(),ma=Hh=Fn=null,ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qy&&e.locale!=="ko"?null:e.data;default:return null}}var FT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FT[t.type]:e==="textarea"}function Qy(t,e,n,r){Ry(r),e=za(e,"onChange"),0<e.length&&(n=new Wh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Rs=null,$s=null;function UT(t){o_(t,0)}function Pl(t){var e=si(t);if(vy(e))return t}function jT(t,e){if(t==="change")return e}var Xy=!1;if(gn){var Fu;if(gn){var Uu="oninput"in document;if(!Uu){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),Uu=typeof zp.oninput=="function"}Fu=Uu}else Fu=!1;Xy=Fu&&(!document.documentMode||9<document.documentMode)}function Bp(){Rs&&(Rs.detachEvent("onpropertychange",Yy),$s=Rs=null)}function Yy(t){if(t.propertyName==="value"&&Pl($s)){var e=[];Qy(e,$s,t,Uh(t)),Ny(UT,e)}}function zT(t,e,n){t==="focusin"?(Bp(),Rs=e,$s=n,Rs.attachEvent("onpropertychange",Yy)):t==="focusout"&&Bp()}function BT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pl($s)}function $T(t,e){if(t==="click")return Pl(e)}function HT(t,e){if(t==="input"||t==="change")return Pl(e)}function WT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ut=typeof Object.is=="function"?Object.is:WT;function Hs(t,e){if(Ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pc.call(e,i)||!Ut(t[i],e[i]))return!1}return!0}function $p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,e){var n=$p(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$p(n)}}function Jy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zy(){for(var t=window,e=Oa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oa(t.document)}return e}function Kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qT(t){var e=Zy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jy(n.ownerDocument.documentElement,n)){if(r!==null&&Kh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hp(n,s);var o=Hp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var GT=gn&&"documentMode"in document&&11>=document.documentMode,ri=null,Vc=null,Cs=null,Oc=!1;function Wp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oc||ri==null||ri!==Oa(r)||(r=ri,"selectionStart"in r&&Kh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cs&&Hs(Cs,r)||(Cs=r,r=za(Vc,"onSelect"),0<r.length&&(e=new Wh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ri)))}function Xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ii={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},ju={},e_={};gn&&(e_=document.createElement("div").style,"AnimationEvent"in window||(delete ii.animationend.animation,delete ii.animationiteration.animation,delete ii.animationstart.animation),"TransitionEvent"in window||delete ii.transitionend.transition);function kl(t){if(ju[t])return ju[t];if(!ii[t])return t;var e=ii[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in e_)return ju[t]=e[n];return t}var t_=kl("animationend"),n_=kl("animationiteration"),r_=kl("animationstart"),i_=kl("transitionend"),s_=new Map,qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){s_.set(t,e),Ur(e,[t])}for(var zu=0;zu<qp.length;zu++){var Bu=qp[zu],KT=Bu.toLowerCase(),QT=Bu[0].toUpperCase()+Bu.slice(1);ur(KT,"on"+QT)}ur(t_,"onAnimationEnd");ur(n_,"onAnimationIteration");ur(r_,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(i_,"onTransitionEnd");Ti("onMouseEnter",["mouseout","mouseover"]);Ti("onMouseLeave",["mouseout","mouseover"]);Ti("onPointerEnter",["pointerout","pointerover"]);Ti("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XT=new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));function Gp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Kw(r,e,void 0,t),t.currentTarget=null}function o_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Gp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Gp(i,l,h),s=u}}}if(Ma)throw t=kc,Ma=!1,kc=null,t}function de(t,e){var n=e[Uc];n===void 0&&(n=e[Uc]=new Set);var r=t+"__bubble";n.has(r)||(a_(e,t,2,!1),n.add(r))}function $u(t,e,n){var r=0;e&&(r|=4),a_(n,t,r,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function Ws(t){if(!t[Yo]){t[Yo]=!0,py.forEach(function(n){n!=="selectionchange"&&(XT.has(n)||$u(n,!1,t),$u(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,$u("selectionchange",!1,e))}}function a_(t,e,n,r){switch(Hy(e)){case 1:var i=cT;break;case 4:i=hT;break;default:i=$h}n=i.bind(null,e,n,t),i=void 0,!Pc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Hu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=wr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ny(function(){var h=s,f=Uh(n),m=[];e:{var y=s_.get(t);if(y!==void 0){var R=Wh,C=t;switch(t){case"keypress":if(ga(n)===0)break e;case"keydown":case"keyup":R=RT;break;case"focusin":C="focus",R=bu;break;case"focusout":C="blur",R=bu;break;case"beforeblur":case"afterblur":R=bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=pT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=kT;break;case t_:case n_:case r_:R=yT;break;case i_:R=xT;break;case"scroll":R=dT;break;case"wheel":R=VT;break;case"copy":case"cut":case"paste":R=vT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=bp}var N=(e&4)!==0,L=!N&&t==="scroll",I=N?y!==null?y+"Capture":null:y;N=[];for(var E=h,S;E!==null;){S=E;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,I!==null&&(D=Us(E,I),D!=null&&N.push(qs(E,D,S)))),L)break;E=E.return}0<N.length&&(y=new R(y,C,null,n,f),m.push({event:y,listeners:N}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",y&&n!==Rc&&(C=n.relatedTarget||n.fromElement)&&(wr(C)||C[yn]))break e;if((R||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,R?(C=n.relatedTarget||n.toElement,R=h,C=C?wr(C):null,C!==null&&(L=jr(C),C!==L||C.tag!==5&&C.tag!==6)&&(C=null)):(R=null,C=h),R!==C)){if(N=Lp,D="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(N=bp,D="onPointerLeave",I="onPointerEnter",E="pointer"),L=R==null?y:si(R),S=C==null?y:si(C),y=new N(D,E+"leave",R,n,f),y.target=L,y.relatedTarget=S,D=null,wr(f)===h&&(N=new N(I,E+"enter",C,n,f),N.target=S,N.relatedTarget=L,D=N),L=D,R&&C)t:{for(N=R,I=C,E=0,S=N;S;S=Qr(S))E++;for(S=0,D=I;D;D=Qr(D))S++;for(;0<E-S;)N=Qr(N),E--;for(;0<S-E;)I=Qr(I),S--;for(;E--;){if(N===I||I!==null&&N===I.alternate)break t;N=Qr(N),I=Qr(I)}N=null}else N=null;R!==null&&Kp(m,y,R,N,!1),C!==null&&L!==null&&Kp(m,L,C,N,!0)}}e:{if(y=h?si(h):window,R=y.nodeName&&y.nodeName.toLowerCase(),R==="select"||R==="input"&&y.type==="file")var b=jT;else if(jp(y))if(Xy)b=HT;else{b=BT;var F=zT}else(R=y.nodeName)&&R.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(b=$T);if(b&&(b=b(t,h))){Qy(m,b,n,f);break e}F&&F(t,y,h),t==="focusout"&&(F=y._wrapperState)&&F.controlled&&y.type==="number"&&wc(y,"number",y.value)}switch(F=h?si(h):window,t){case"focusin":(jp(F)||F.contentEditable==="true")&&(ri=F,Vc=h,Cs=null);break;case"focusout":Cs=Vc=ri=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,Wp(m,n,f);break;case"selectionchange":if(GT)break;case"keydown":case"keyup":Wp(m,n,f)}var v;if(Gh)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ni?Gy(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(qy&&n.locale!=="ko"&&(ni||g!=="onCompositionStart"?g==="onCompositionEnd"&&ni&&(v=Wy()):(Fn=f,Hh="value"in Fn?Fn.value:Fn.textContent,ni=!0)),F=za(h,g),0<F.length&&(g=new Mp(g,t,null,n,f),m.push({event:g,listeners:F}),v?g.data=v:(v=Ky(n),v!==null&&(g.data=v)))),(v=LT?MT(t,n):bT(t,n))&&(h=za(h,"onBeforeInput"),0<h.length&&(f=new Mp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=v))}o_(m,e)})}function qs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function za(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Us(t,n),s!=null&&r.unshift(qs(t,s,i)),s=Us(t,e),s!=null&&r.push(qs(t,s,i))),t=t.return}return r}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Us(n,s),u!=null&&o.unshift(qs(n,u,l))):i||(u=Us(n,s),u!=null&&o.push(qs(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var YT=/\r\n?/g,JT=/\u0000|\uFFFD/g;function Qp(t){return(typeof t=="string"?t:""+t).replace(YT,`
`).replace(JT,"")}function Jo(t,e,n){if(e=Qp(e),Qp(t)!==e&&n)throw Error(M(425))}function Ba(){}var Lc=null,Mc=null;function bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,ZT=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,eI=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(t){return Xp.resolve(null).then(t).catch(tI)}:Fc;function tI(t){setTimeout(function(){throw t})}function Wu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Bs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bs(e)}function Hn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ji=Math.random().toString(36).slice(2),Ht="__reactFiber$"+ji,Gs="__reactProps$"+ji,yn="__reactContainer$"+ji,Uc="__reactEvents$"+ji,nI="__reactListeners$"+ji,rI="__reactHandles$"+ji;function wr(t){var e=t[Ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yn]||n[Ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yp(t);t!==null;){if(n=t[Ht])return n;t=Yp(t)}return e}t=n,n=t.parentNode}return null}function fo(t){return t=t[Ht]||t[yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function si(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Nl(t){return t[Gs]||null}var jc=[],oi=-1;function cr(t){return{current:t}}function pe(t){0>oi||(t.current=jc[oi],jc[oi]=null,oi--)}function ce(t,e){oi++,jc[oi]=t.current,t.current=e}var nr={},Je=cr(nr),ut=cr(!1),kr=nr;function Ii(t,e){var n=t.type.contextTypes;if(!n)return nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ct(t){return t=t.childContextTypes,t!=null}function $a(){pe(ut),pe(Je)}function Jp(t,e,n){if(Je.current!==nr)throw Error(M(168));ce(Je,e),ce(ut,n)}function l_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,zw(t)||"Unknown",i));return ve({},n,r)}function Ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,kr=Je.current,ce(Je,t),ce(ut,ut.current),!0}function Zp(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=l_(t,e,kr),r.__reactInternalMemoizedMergedChildContext=t,pe(ut),pe(Je),ce(Je,t)):pe(ut),ce(ut,n)}var an=null,xl=!1,qu=!1;function u_(t){an===null?an=[t]:an.push(t)}function iI(t){xl=!0,u_(t)}function hr(){if(!qu&&an!==null){qu=!0;var t=0,e=ae;try{var n=an;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}an=null,xl=!1}catch(i){throw an!==null&&(an=an.slice(t+1)),Oy(jh,hr),i}finally{ae=e,qu=!1}}return null}var ai=[],li=0,Wa=null,qa=0,wt=[],Tt=0,Nr=null,un=1,cn="";function _r(t,e){ai[li++]=qa,ai[li++]=Wa,Wa=t,qa=e}function c_(t,e,n){wt[Tt++]=un,wt[Tt++]=cn,wt[Tt++]=Nr,Nr=t;var r=un;t=cn;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var s=32-Mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,un=1<<32-Mt(e)+i|n<<i|r,cn=s+t}else un=1<<s|n<<i|r,cn=t}function Qh(t){t.return!==null&&(_r(t,1),c_(t,1,0))}function Xh(t){for(;t===Wa;)Wa=ai[--li],ai[li]=null,qa=ai[--li],ai[li]=null;for(;t===Nr;)Nr=wt[--Tt],wt[Tt]=null,cn=wt[--Tt],wt[Tt]=null,un=wt[--Tt],wt[Tt]=null}var gt=null,mt=null,me=!1,Vt=null;function h_(t,e){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function em(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gt=t,mt=Hn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gt=t,mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gt=t,mt=null,!0):!1;default:return!1}}function zc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bc(t){if(me){var e=mt;if(e){var n=e;if(!em(t,e)){if(zc(t))throw Error(M(418));e=Hn(n.nextSibling);var r=gt;e&&em(t,e)?h_(r,n):(t.flags=t.flags&-4097|2,me=!1,gt=t)}}else{if(zc(t))throw Error(M(418));t.flags=t.flags&-4097|2,me=!1,gt=t}}}function tm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gt=t}function Zo(t){if(t!==gt)return!1;if(!me)return tm(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bc(t.type,t.memoizedProps)),e&&(e=mt)){if(zc(t))throw d_(),Error(M(418));for(;e;)h_(t,e),e=Hn(e.nextSibling)}if(tm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mt=Hn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mt=null}}else mt=gt?Hn(t.stateNode.nextSibling):null;return!0}function d_(){for(var t=mt;t;)t=Hn(t.nextSibling)}function Si(){mt=gt=null,me=!1}function Yh(t){Vt===null?Vt=[t]:Vt.push(t)}var sI=Sn.ReactCurrentBatchConfig;function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function ea(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nm(t){var e=t._init;return e(t._payload)}function f_(t){function e(I,E){if(t){var S=I.deletions;S===null?(I.deletions=[E],I.flags|=16):S.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=Kn(I,E),I.index=0,I.sibling=null,I}function s(I,E,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<E?(I.flags|=2,E):S):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,S,D){return E===null||E.tag!==6?(E=Zu(S,I.mode,D),E.return=I,E):(E=i(E,S),E.return=I,E)}function u(I,E,S,D){var b=S.type;return b===ti?f(I,E,S.props.children,D,S.key):E!==null&&(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===xn&&nm(b)===E.type)?(D=i(E,S.props),D.ref=fs(I,E,S),D.return=I,D):(D=Ia(S.type,S.key,S.props,null,I.mode,D),D.ref=fs(I,E,S),D.return=I,D)}function h(I,E,S,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==S.containerInfo||E.stateNode.implementation!==S.implementation?(E=ec(S,I.mode,D),E.return=I,E):(E=i(E,S.children||[]),E.return=I,E)}function f(I,E,S,D,b){return E===null||E.tag!==7?(E=Cr(S,I.mode,D,b),E.return=I,E):(E=i(E,S),E.return=I,E)}function m(I,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Zu(""+E,I.mode,S),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case $o:return S=Ia(E.type,E.key,E.props,null,I.mode,S),S.ref=fs(I,null,E),S.return=I,S;case ei:return E=ec(E,I.mode,S),E.return=I,E;case xn:var D=E._init;return m(I,D(E._payload),S)}if(ys(E)||ls(E))return E=Cr(E,I.mode,S,null),E.return=I,E;ea(I,E)}return null}function y(I,E,S,D){var b=E!==null?E.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return b!==null?null:l(I,E,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $o:return S.key===b?u(I,E,S,D):null;case ei:return S.key===b?h(I,E,S,D):null;case xn:return b=S._init,y(I,E,b(S._payload),D)}if(ys(S)||ls(S))return b!==null?null:f(I,E,S,D,null);ea(I,S)}return null}function R(I,E,S,D,b){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(S)||null,l(E,I,""+D,b);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case $o:return I=I.get(D.key===null?S:D.key)||null,u(E,I,D,b);case ei:return I=I.get(D.key===null?S:D.key)||null,h(E,I,D,b);case xn:var F=D._init;return R(I,E,S,F(D._payload),b)}if(ys(D)||ls(D))return I=I.get(S)||null,f(E,I,D,b,null);ea(E,D)}return null}function C(I,E,S,D){for(var b=null,F=null,v=E,g=E=0,_=null;v!==null&&g<S.length;g++){v.index>g?(_=v,v=null):_=v.sibling;var w=y(I,v,S[g],D);if(w===null){v===null&&(v=_);break}t&&v&&w.alternate===null&&e(I,v),E=s(w,E,g),F===null?b=w:F.sibling=w,F=w,v=_}if(g===S.length)return n(I,v),me&&_r(I,g),b;if(v===null){for(;g<S.length;g++)v=m(I,S[g],D),v!==null&&(E=s(v,E,g),F===null?b=v:F.sibling=v,F=v);return me&&_r(I,g),b}for(v=r(I,v);g<S.length;g++)_=R(v,I,g,S[g],D),_!==null&&(t&&_.alternate!==null&&v.delete(_.key===null?g:_.key),E=s(_,E,g),F===null?b=_:F.sibling=_,F=_);return t&&v.forEach(function(A){return e(I,A)}),me&&_r(I,g),b}function N(I,E,S,D){var b=ls(S);if(typeof b!="function")throw Error(M(150));if(S=b.call(S),S==null)throw Error(M(151));for(var F=b=null,v=E,g=E=0,_=null,w=S.next();v!==null&&!w.done;g++,w=S.next()){v.index>g?(_=v,v=null):_=v.sibling;var A=y(I,v,w.value,D);if(A===null){v===null&&(v=_);break}t&&v&&A.alternate===null&&e(I,v),E=s(A,E,g),F===null?b=A:F.sibling=A,F=A,v=_}if(w.done)return n(I,v),me&&_r(I,g),b;if(v===null){for(;!w.done;g++,w=S.next())w=m(I,w.value,D),w!==null&&(E=s(w,E,g),F===null?b=w:F.sibling=w,F=w);return me&&_r(I,g),b}for(v=r(I,v);!w.done;g++,w=S.next())w=R(v,I,g,w.value,D),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?g:w.key),E=s(w,E,g),F===null?b=w:F.sibling=w,F=w);return t&&v.forEach(function(k){return e(I,k)}),me&&_r(I,g),b}function L(I,E,S,D){if(typeof S=="object"&&S!==null&&S.type===ti&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case $o:e:{for(var b=S.key,F=E;F!==null;){if(F.key===b){if(b=S.type,b===ti){if(F.tag===7){n(I,F.sibling),E=i(F,S.props.children),E.return=I,I=E;break e}}else if(F.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===xn&&nm(b)===F.type){n(I,F.sibling),E=i(F,S.props),E.ref=fs(I,F,S),E.return=I,I=E;break e}n(I,F);break}else e(I,F);F=F.sibling}S.type===ti?(E=Cr(S.props.children,I.mode,D,S.key),E.return=I,I=E):(D=Ia(S.type,S.key,S.props,null,I.mode,D),D.ref=fs(I,E,S),D.return=I,I=D)}return o(I);case ei:e:{for(F=S.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===S.containerInfo&&E.stateNode.implementation===S.implementation){n(I,E.sibling),E=i(E,S.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=ec(S,I.mode,D),E.return=I,I=E}return o(I);case xn:return F=S._init,L(I,E,F(S._payload),D)}if(ys(S))return C(I,E,S,D);if(ls(S))return N(I,E,S,D);ea(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,S),E.return=I,I=E):(n(I,E),E=Zu(S,I.mode,D),E.return=I,I=E),o(I)):n(I,E)}return L}var Ai=f_(!0),p_=f_(!1),Ga=cr(null),Ka=null,ui=null,Jh=null;function Zh(){Jh=ui=Ka=null}function ed(t){var e=Ga.current;pe(Ga),t._currentValue=e}function $c(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gi(t,e){Ka=t,Jh=ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(lt=!0),t.firstContext=null)}function Ct(t){var e=t._currentValue;if(Jh!==t)if(t={context:t,memoizedValue:e,next:null},ui===null){if(Ka===null)throw Error(M(308));ui=t,Ka.dependencies={lanes:0,firstContext:t}}else ui=ui.next=t;return e}var Tr=null;function td(t){Tr===null?Tr=[t]:Tr.push(t)}function m_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,td(e)):(n.next=i.next,i.next=n),e.interleaved=n,_n(t,r)}function _n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dn=!1;function nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_n(t,n)}return i=r.interleaved,i===null?(e.next=e,td(r)):(e.next=i.next,i.next=e),r.interleaved=e,_n(t,n)}function ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zh(t,n)}}function rm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qa(t,e,n,r){var i=t.updateQueue;Dn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,R=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(y=e,R=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){m=C.call(R,m,y);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,y=typeof C=="function"?C.call(R,m,y):C,y==null)break e;m=ve({},m,y);break e;case 2:Dn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else R={eventTime:R,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=R,u=m):f=f.next=R,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=m}}function im(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var po={},qt=cr(po),Ks=cr(po),Qs=cr(po);function Ir(t){if(t===po)throw Error(M(174));return t}function rd(t,e){switch(ce(Qs,e),ce(Ks,t),ce(qt,po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ic(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ic(e,t)}pe(qt),ce(qt,e)}function Ri(){pe(qt),pe(Ks),pe(Qs)}function y_(t){Ir(Qs.current);var e=Ir(qt.current),n=Ic(e,t.type);e!==n&&(ce(Ks,t),ce(qt,n))}function id(t){Ks.current===t&&(pe(qt),pe(Ks))}var ye=cr(0);function Xa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gu=[];function sd(){for(var t=0;t<Gu.length;t++)Gu[t]._workInProgressVersionPrimary=null;Gu.length=0}var _a=Sn.ReactCurrentDispatcher,Ku=Sn.ReactCurrentBatchConfig,xr=0,_e=null,Ne=null,Oe=null,Ya=!1,Ps=!1,Xs=0,oI=0;function qe(){throw Error(M(321))}function od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ut(t[n],e[n]))return!1;return!0}function ad(t,e,n,r,i,s){if(xr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_a.current=t===null||t.memoizedState===null?cI:hI,t=n(r,i),Ps){s=0;do{if(Ps=!1,Xs=0,25<=s)throw Error(M(301));s+=1,Oe=Ne=null,e.updateQueue=null,_a.current=dI,t=n(r,i)}while(Ps)}if(_a.current=Ja,e=Ne!==null&&Ne.next!==null,xr=0,Oe=Ne=_e=null,Ya=!1,e)throw Error(M(300));return t}function ld(){var t=Xs!==0;return Xs=0,t}function Bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?_e.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Pt(){if(Ne===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Oe===null?_e.memoizedState:Oe.next;if(e!==null)Oe=e,Ne=t;else{if(t===null)throw Error(M(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Oe===null?_e.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function Ys(t,e){return typeof e=="function"?e(t):e}function Qu(t){var e=Pt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((xr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,_e.lanes|=f,Dr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Ut(r,e.memoizedState)||(lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Dr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xu(t){var e=Pt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ut(s,e.memoizedState)||(lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function __(){}function v_(t,e){var n=_e,r=Pt(),i=e(),s=!Ut(r.memoizedState,i);if(s&&(r.memoizedState=i,lt=!0),r=r.queue,ud(T_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Js(9,w_.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(M(349));xr&30||E_(n,e,i)}return i}function E_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w_(t,e,n,r){e.value=n,e.getSnapshot=r,I_(e)&&S_(t)}function T_(t,e,n){return n(function(){I_(e)&&S_(t)})}function I_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ut(t,n)}catch{return!0}}function S_(t){var e=_n(t,1);e!==null&&bt(e,t,1,-1)}function sm(t){var e=Bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:t},e.queue=t,t=t.dispatch=uI.bind(null,_e,t),[e.memoizedState,t]}function Js(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function A_(){return Pt().memoizedState}function va(t,e,n,r){var i=Bt();_e.flags|=t,i.memoizedState=Js(1|e,n,void 0,r===void 0?null:r)}function Dl(t,e,n,r){var i=Pt();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&od(r,o.deps)){i.memoizedState=Js(e,n,s,r);return}}_e.flags|=t,i.memoizedState=Js(1|e,n,s,r)}function om(t,e){return va(8390656,8,t,e)}function ud(t,e){return Dl(2048,8,t,e)}function R_(t,e){return Dl(4,2,t,e)}function C_(t,e){return Dl(4,4,t,e)}function P_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function k_(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4,4,P_.bind(null,e,t),n)}function cd(){}function N_(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&od(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function x_(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&od(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function D_(t,e,n){return xr&21?(Ut(n,e)||(n=by(),_e.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,lt=!0),t.memoizedState=n)}function aI(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Ku.transition;Ku.transition={};try{t(!1),e()}finally{ae=n,Ku.transition=r}}function V_(){return Pt().memoizedState}function lI(t,e,n){var r=Gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},O_(t))L_(e,n);else if(n=m_(t,e,n,r),n!==null){var i=rt();bt(n,t,r,i),M_(n,e,r)}}function uI(t,e,n){var r=Gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(O_(t))L_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ut(l,o)){var u=e.interleaved;u===null?(i.next=i,td(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=m_(t,e,i,r),n!==null&&(i=rt(),bt(n,t,r,i),M_(n,e,r))}}function O_(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function L_(t,e){Ps=Ya=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function M_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zh(t,n)}}var Ja={readContext:Ct,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},cI={readContext:Ct,useCallback:function(t,e){return Bt().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,va(4194308,4,P_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return va(4194308,4,t,e)},useInsertionEffect:function(t,e){return va(4,2,t,e)},useMemo:function(t,e){var n=Bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lI.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Bt();return t={current:t},e.memoizedState=t},useState:sm,useDebugValue:cd,useDeferredValue:function(t){return Bt().memoizedState=t},useTransition:function(){var t=sm(!1),e=t[0];return t=aI.bind(null,t[1]),Bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Bt();if(me){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Le===null)throw Error(M(349));xr&30||E_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,om(T_.bind(null,r,s,t),[t]),r.flags|=2048,Js(9,w_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bt(),e=Le.identifierPrefix;if(me){var n=cn,r=un;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hI={readContext:Ct,useCallback:N_,useContext:Ct,useEffect:ud,useImperativeHandle:k_,useInsertionEffect:R_,useLayoutEffect:C_,useMemo:x_,useReducer:Qu,useRef:A_,useState:function(){return Qu(Ys)},useDebugValue:cd,useDeferredValue:function(t){var e=Pt();return D_(e,Ne.memoizedState,t)},useTransition:function(){var t=Qu(Ys)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:__,useSyncExternalStore:v_,useId:V_,unstable_isNewReconciler:!1},dI={readContext:Ct,useCallback:N_,useContext:Ct,useEffect:ud,useImperativeHandle:k_,useInsertionEffect:R_,useLayoutEffect:C_,useMemo:x_,useReducer:Xu,useRef:A_,useState:function(){return Xu(Ys)},useDebugValue:cd,useDeferredValue:function(t){var e=Pt();return Ne===null?e.memoizedState=t:D_(e,Ne.memoizedState,t)},useTransition:function(){var t=Xu(Ys)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:__,useSyncExternalStore:v_,useId:V_,unstable_isNewReconciler:!1};function xt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vl={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Gn(t),s=pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Wn(t,s,i),e!==null&&(bt(e,t,i,r),ya(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Gn(t),s=pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wn(t,s,i),e!==null&&(bt(e,t,i,r),ya(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=Gn(t),i=pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wn(t,i,r),e!==null&&(bt(e,t,r,n),ya(e,t,r))}};function am(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Hs(n,r)||!Hs(i,s):!0}function b_(t,e,n){var r=!1,i=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(i=ct(e)?kr:Je.current,r=e.contextTypes,s=(r=r!=null)?Ii(t,i):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function lm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vl.enqueueReplaceState(e,e.state,null)}function Wc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},nd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ct(s):(s=ct(e)?kr:Je.current,i.context=Ii(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vl.enqueueReplaceState(i,i.state,null),Qa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ci(t,e){try{var n="",r=e;do n+=jw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fI=typeof WeakMap=="function"?WeakMap:Map;function F_(t,e,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){el||(el=!0,nh=r),qc(t,e)},n}function U_(t,e,n){n=pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qc(t,e),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function um(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CI.bind(null,t,e,n),e.then(t,t))}function cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pn(-1,1),e.tag=2,Wn(n,e,1))),n.lanes|=1),t)}var pI=Sn.ReactCurrentOwner,lt=!1;function nt(t,e,n,r){e.child=t===null?p_(e,null,n,r):Ai(e,t.child,n,r)}function dm(t,e,n,r,i){n=n.render;var s=e.ref;return gi(e,i),r=ad(t,e,n,r,s,i),n=ld(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(me&&n&&Qh(e),e.flags|=1,nt(t,e,r,i),e.child)}function fm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_d(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,j_(t,e,s,r,i)):(t=Ia(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hs,n(o,r)&&t.ref===e.ref)return vn(t,e,i)}return e.flags|=1,t=Kn(s,r),t.ref=e.ref,t.return=e,e.child=t}function j_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Hs(s,r)&&t.ref===e.ref)if(lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(lt=!0);else return e.lanes=t.lanes,vn(t,e,i)}return Gc(t,e,n,r,i)}function z_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(hi,pt),pt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(hi,pt),pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(hi,pt),pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(hi,pt),pt|=r;return nt(t,e,i,n),e.child}function B_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gc(t,e,n,r,i){var s=ct(n)?kr:Je.current;return s=Ii(e,s),gi(e,i),n=ad(t,e,n,r,s,i),r=ld(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(me&&r&&Qh(e),e.flags|=1,nt(t,e,n,i),e.child)}function pm(t,e,n,r,i){if(ct(n)){var s=!0;Ha(e)}else s=!1;if(gi(e,i),e.stateNode===null)Ea(t,e),b_(e,n,r),Wc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ct(h):(h=ct(n)?kr:Je.current,h=Ii(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&lm(e,o,r,h),Dn=!1;var y=e.memoizedState;o.state=y,Qa(e,r,o,i),u=e.memoizedState,l!==r||y!==u||ut.current||Dn?(typeof f=="function"&&(Hc(e,n,f,r),u=e.memoizedState),(l=Dn||am(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,g_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:xt(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ct(u):(u=ct(n)?kr:Je.current,u=Ii(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&lm(e,o,r,u),Dn=!1,y=e.memoizedState,o.state=y,Qa(e,r,o,i);var C=e.memoizedState;l!==m||y!==C||ut.current||Dn?(typeof R=="function"&&(Hc(e,n,R,r),C=e.memoizedState),(h=Dn||am(e,n,h,r,y,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Kc(t,e,n,r,s,i)}function Kc(t,e,n,r,i,s){B_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Zp(e,n,!1),vn(t,e,s);r=e.stateNode,pI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ai(e,t.child,null,s),e.child=Ai(e,null,l,s)):nt(t,e,l,s),e.memoizedState=r.state,i&&Zp(e,n,!0),e.child}function $_(t){var e=t.stateNode;e.pendingContext?Jp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jp(t,e.context,!1),rd(t,e.containerInfo)}function mm(t,e,n,r,i){return Si(),Yh(i),e.flags|=256,nt(t,e,n,r),e.child}var Qc={dehydrated:null,treeContext:null,retryLane:0};function Xc(t){return{baseLanes:t,cachePool:null,transitions:null}}function H_(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return Bc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ml(o,r,0,null),t=Cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xc(n),e.memoizedState=Qc,t):hd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return mI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Kn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Kn(l,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Xc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qc,r}return s=t.child,t=s.sibling,r=Kn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hd(t,e){return e=Ml({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ta(t,e,n,r){return r!==null&&Yh(r),Ai(e,t.child,null,n),t=hd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Yu(Error(M(422))),ta(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ml({mode:"visible",children:r.children},i,0,null),s=Cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ai(e,t.child,null,o),e.child.memoizedState=Xc(o),e.memoizedState=Qc,s);if(!(e.mode&1))return ta(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=Yu(s,r,void 0),ta(t,e,o,r)}if(l=(o&t.childLanes)!==0,lt||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_n(t,i),bt(r,t,i,-1))}return yd(),r=Yu(Error(M(421))),ta(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=PI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,mt=Hn(i.nextSibling),gt=e,me=!0,Vt=null,t!==null&&(wt[Tt++]=un,wt[Tt++]=cn,wt[Tt++]=Nr,un=t.id,cn=t.overflow,Nr=e),e=hd(e,r.children),e.flags|=4096,e)}function gm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$c(t.return,e,n)}function Ju(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function W_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nt(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gm(t,n,e);else if(t.tag===19)gm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Xa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ju(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Xa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ju(e,!0,n,null,s);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ea(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=Kn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gI(t,e,n){switch(e.tag){case 3:$_(e),Si();break;case 5:y_(e);break;case 1:ct(e.type)&&Ha(e);break;case 4:rd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Ga,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?H_(t,e,n):(ce(ye,ye.current&1),t=vn(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return W_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,z_(t,e,n)}return vn(t,e,n)}var q_,Yc,G_,K_;q_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yc=function(){};G_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ir(qt.current);var s=null;switch(n){case"input":i=vc(t,i),r=vc(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=Tc(t,i),r=Tc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ba)}Sc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(bs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(bs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};K_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ps(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yI(t,e,n){var r=e.pendingProps;switch(Xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return ct(e.type)&&$a(),Ge(e),null;case 3:return r=e.stateNode,Ri(),pe(ut),pe(Je),sd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vt!==null&&(sh(Vt),Vt=null))),Yc(t,e),Ge(e),null;case 5:id(e);var i=Ir(Qs.current);if(n=e.type,t!==null&&e.stateNode!=null)G_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Ge(e),null}if(t=Ir(qt.current),Zo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ht]=e,r[Gs]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<vs.length;i++)de(vs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Ap(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Cp(r,s),de("invalid",r)}Sc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Jo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Jo(r.textContent,l,t),i=["children",""+l]):bs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Ho(r),Rp(r,s,!0);break;case"textarea":Ho(r),Pp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ba)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ty(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ht]=e,t[Gs]=r,q_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ac(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<vs.length;i++)de(vs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Ap(t,r),i=vc(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),de("invalid",t);break;case"textarea":Cp(t,r),i=Tc(t,r),de("invalid",t);break;default:i=r}Sc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ay(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Iy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Fs(t,u):typeof u=="number"&&Fs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Lh(t,s,u,o))}switch(n){case"input":Ho(t),Rp(t,r,!1);break;case"textarea":Ho(t),Pp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?di(t,!!r.multiple,s,!1):r.defaultValue!=null&&di(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ba)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)K_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Ir(Qs.current),Ir(qt.current),Zo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ht]=e,(s=r.nodeValue!==n)&&(t=gt,t!==null))switch(t.tag){case 3:Jo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=e,e.stateNode=r}return Ge(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&mt!==null&&e.mode&1&&!(e.flags&128))d_(),Si(),e.flags|=98560,s=!1;else if(s=Zo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Ht]=e}else Si(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else Vt!==null&&(sh(Vt),Vt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?xe===0&&(xe=3):yd())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return Ri(),Yc(t,e),t===null&&Ws(e.stateNode.containerInfo),Ge(e),null;case 10:return ed(e.type._context),Ge(e),null;case 17:return ct(e.type)&&$a(),Ge(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ps(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xa(t),o!==null){for(e.flags|=128,ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Pi&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=Xa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Ge(e),null}else 2*Ae()-s.renderingStartTime>Pi&&n!==1073741824&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return gd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function _I(t,e){switch(Xh(e),e.tag){case 1:return ct(e.type)&&$a(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ri(),pe(ut),pe(Je),sd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return id(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Si()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Ri(),null;case 10:return ed(e.type._context),null;case 22:case 23:return gd(),null;case 24:return null;default:return null}}var na=!1,Xe=!1,vI=typeof WeakSet=="function"?WeakSet:Set,$=null;function ci(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Jc(t,e,n){try{n()}catch(r){Te(t,e,r)}}var ym=!1;function EI(t,e){if(Lc=Ua,t=Zy(),Kh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,y=null;t:for(;;){for(var R;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(R=m.firstChild)!==null;)y=m,m=R;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(R=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mc={focusedElem:t,selectionRange:n},Ua=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,L=C.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:xt(e.type,N),L);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(D){Te(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return C=ym,ym=!1,C}function ks(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jc(e,n,s)}i=i.next}while(i!==r)}}function Ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Q_(t){var e=t.alternate;e!==null&&(t.alternate=null,Q_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ht],delete e[Gs],delete e[Uc],delete e[nI],delete e[rI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function X_(t){return t.tag===5||t.tag===3||t.tag===4}function _m(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||X_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function eh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ba));else if(r!==4&&(t=t.child,t!==null))for(eh(t,e,n),t=t.sibling;t!==null;)eh(t,e,n),t=t.sibling}function th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(th(t,e,n),t=t.sibling;t!==null;)th(t,e,n),t=t.sibling}var be=null,Dt=!1;function kn(t,e,n){for(n=n.child;n!==null;)Y_(t,e,n),n=n.sibling}function Y_(t,e,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 5:Xe||ci(n,e);case 6:var r=be,i=Dt;be=null,kn(t,e,n),be=r,Dt=i,be!==null&&(Dt?(t=be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(Dt?(t=be,n=n.stateNode,t.nodeType===8?Wu(t.parentNode,n):t.nodeType===1&&Wu(t,n),Bs(t)):Wu(be,n.stateNode));break;case 4:r=be,i=Dt,be=n.stateNode.containerInfo,Dt=!0,kn(t,e,n),be=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jc(n,e,o),i=i.next}while(i!==r)}kn(t,e,n);break;case 1:if(!Xe&&(ci(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}kn(t,e,n);break;case 21:kn(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,kn(t,e,n),Xe=r):kn(t,e,n);break;default:kn(t,e,n)}}function vm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vI),e.forEach(function(r){var i=kI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,Dt=!1;break e;case 3:be=l.stateNode.containerInfo,Dt=!0;break e;case 4:be=l.stateNode.containerInfo,Dt=!0;break e}l=l.return}if(be===null)throw Error(M(160));Y_(s,o,i),be=null,Dt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)J_(e,t),e=e.sibling}function J_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nt(e,t),zt(t),r&4){try{ks(3,t,t.return),Ol(3,t)}catch(N){Te(t,t.return,N)}try{ks(5,t,t.return)}catch(N){Te(t,t.return,N)}}break;case 1:Nt(e,t),zt(t),r&512&&n!==null&&ci(n,n.return);break;case 5:if(Nt(e,t),zt(t),r&512&&n!==null&&ci(n,n.return),t.flags&32){var i=t.stateNode;try{Fs(i,"")}catch(N){Te(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ey(i,s),Ac(l,o);var h=Ac(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Ay(i,m):f==="dangerouslySetInnerHTML"?Iy(i,m):f==="children"?Fs(i,m):Lh(i,f,m,h)}switch(l){case"input":Ec(i,s);break;case"textarea":wy(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?di(i,!!s.multiple,R,!1):y!==!!s.multiple&&(s.defaultValue!=null?di(i,!!s.multiple,s.defaultValue,!0):di(i,!!s.multiple,s.multiple?[]:"",!1))}i[Gs]=s}catch(N){Te(t,t.return,N)}}break;case 6:if(Nt(e,t),zt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Te(t,t.return,N)}}break;case 3:if(Nt(e,t),zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bs(e.containerInfo)}catch(N){Te(t,t.return,N)}break;case 4:Nt(e,t),zt(t);break;case 13:Nt(e,t),zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pd=Ae())),r&4&&vm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(h=Xe)||f,Nt(e,t),Xe=h):Nt(e,t),zt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(m=$=f;$!==null;){switch(y=$,R=y.child,y.tag){case 0:case 11:case 14:case 15:ks(4,y,y.return);break;case 1:ci(y,y.return);var C=y.stateNode;if(typeof C.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){Te(r,n,N)}}break;case 5:ci(y,y.return);break;case 22:if(y.memoizedState!==null){wm(m);continue}}R!==null?(R.return=y,$=R):wm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Sy("display",o))}catch(N){Te(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(N){Te(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Nt(e,t),zt(t),r&4&&vm(t);break;case 21:break;default:Nt(e,t),zt(t)}}function zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(X_(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fs(i,""),r.flags&=-33);var s=_m(t);th(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=_m(t);eh(t,l,o);break;default:throw Error(M(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wI(t,e,n){$=t,Z_(t)}function Z_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||na;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Xe;l=na;var h=Xe;if(na=o,(Xe=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Tm(i):u!==null?(u.return=o,$=u):Tm(i);for(;s!==null;)$=s,Z_(s),s=s.sibling;$=i,na=l,Xe=h}Em(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Em(t)}}function Em(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||Ol(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&im(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}im(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Bs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Xe||e.flags&512&&Zc(e)}catch(y){Te(e,e.return,y)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function wm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Tm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ol(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{Zc(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{Zc(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var TI=Math.ceil,Za=Sn.ReactCurrentDispatcher,dd=Sn.ReactCurrentOwner,At=Sn.ReactCurrentBatchConfig,ie=0,Le=null,Ce=null,je=0,pt=0,hi=cr(0),xe=0,Zs=null,Dr=0,Ll=0,fd=0,Ns=null,at=null,pd=0,Pi=1/0,on=null,el=!1,nh=null,qn=null,ra=!1,Un=null,tl=0,xs=0,rh=null,wa=-1,Ta=0;function rt(){return ie&6?Ae():wa!==-1?wa:wa=Ae()}function Gn(t){return t.mode&1?ie&2&&je!==0?je&-je:sI.transition!==null?(Ta===0&&(Ta=by()),Ta):(t=ae,t!==0||(t=window.event,t=t===void 0?16:Hy(t.type)),t):1}function bt(t,e,n,r){if(50<xs)throw xs=0,rh=null,Error(M(185));co(t,n,r),(!(ie&2)||t!==Le)&&(t===Le&&(!(ie&2)&&(Ll|=n),xe===4&&On(t,je)),ht(t,r),n===1&&ie===0&&!(e.mode&1)&&(Pi=Ae()+500,xl&&hr()))}function ht(t,e){var n=t.callbackNode;sT(t,e);var r=Fa(t,t===Le?je:0);if(r===0)n!==null&&xp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&xp(n),e===1)t.tag===0?iI(Im.bind(null,t)):u_(Im.bind(null,t)),eI(function(){!(ie&6)&&hr()}),n=null;else{switch(Fy(r)){case 1:n=jh;break;case 4:n=Ly;break;case 16:n=ba;break;case 536870912:n=My;break;default:n=ba}n=av(n,ev.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ev(t,e){if(wa=-1,Ta=0,ie&6)throw Error(M(327));var n=t.callbackNode;if(yi()&&t.callbackNode!==n)return null;var r=Fa(t,t===Le?je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nl(t,r);else{e=r;var i=ie;ie|=2;var s=nv();(Le!==t||je!==e)&&(on=null,Pi=Ae()+500,Rr(t,e));do try{AI();break}catch(l){tv(t,l)}while(!0);Zh(),Za.current=s,ie=i,Ce!==null?e=0:(Le=null,je=0,e=xe)}if(e!==0){if(e===2&&(i=Nc(t),i!==0&&(r=i,e=ih(t,i))),e===1)throw n=Zs,Rr(t,0),On(t,r),ht(t,Ae()),n;if(e===6)On(t,r);else{if(i=t.current.alternate,!(r&30)&&!II(i)&&(e=nl(t,r),e===2&&(s=Nc(t),s!==0&&(r=s,e=ih(t,s))),e===1))throw n=Zs,Rr(t,0),On(t,r),ht(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:vr(t,at,on);break;case 3:if(On(t,r),(r&130023424)===r&&(e=pd+500-Ae(),10<e)){if(Fa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Fc(vr.bind(null,t,at,on),e);break}vr(t,at,on);break;case 4:if(On(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*TI(r/1960))-r,10<r){t.timeoutHandle=Fc(vr.bind(null,t,at,on),r);break}vr(t,at,on);break;case 5:vr(t,at,on);break;default:throw Error(M(329))}}}return ht(t,Ae()),t.callbackNode===n?ev.bind(null,t):null}function ih(t,e){var n=Ns;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=nl(t,e),t!==2&&(e=at,at=n,e!==null&&sh(e)),t}function sh(t){at===null?at=t:at.push.apply(at,t)}function II(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function On(t,e){for(e&=~fd,e&=~Ll,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mt(e),r=1<<n;t[n]=-1,e&=~r}}function Im(t){if(ie&6)throw Error(M(327));yi();var e=Fa(t,0);if(!(e&1))return ht(t,Ae()),null;var n=nl(t,e);if(t.tag!==0&&n===2){var r=Nc(t);r!==0&&(e=r,n=ih(t,r))}if(n===1)throw n=Zs,Rr(t,0),On(t,e),ht(t,Ae()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,at,on),ht(t,Ae()),null}function md(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Pi=Ae()+500,xl&&hr())}}function Vr(t){Un!==null&&Un.tag===0&&!(ie&6)&&yi();var e=ie;ie|=1;var n=At.transition,r=ae;try{if(At.transition=null,ae=1,t)return t()}finally{ae=r,At.transition=n,ie=e,!(ie&6)&&hr()}}function gd(){pt=hi.current,pe(hi)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZT(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Xh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$a();break;case 3:Ri(),pe(ut),pe(Je),sd();break;case 5:id(r);break;case 4:Ri();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:ed(r.type._context);break;case 22:case 23:gd()}n=n.return}if(Le=t,Ce=t=Kn(t.current,null),je=pt=e,xe=0,Zs=null,fd=Ll=Dr=0,at=Ns=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Tr=null}return t}function tv(t,e){do{var n=Ce;try{if(Zh(),_a.current=Ja,Ya){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ya=!1}if(xr=0,Oe=Ne=_e=null,Ps=!1,Xs=0,dd.current=null,n===null||n.return===null){xe=1,Zs=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=cm(o);if(R!==null){R.flags&=-257,hm(R,o,l,s,e),R.mode&1&&um(s,h,e),e=R,u=h;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){um(s,h,e),yd();break e}u=Error(M(426))}}else if(me&&l.mode&1){var L=cm(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),hm(L,o,l,s,e),Yh(Ci(u,l));break e}}s=u=Ci(u,l),xe!==4&&(xe=2),Ns===null?Ns=[s]:Ns.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=F_(s,u,e);rm(s,I);break e;case 1:l=u;var E=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(qn===null||!qn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=U_(s,l,e);rm(s,D);break e}}s=s.return}while(s!==null)}iv(n)}catch(b){e=b,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function nv(){var t=Za.current;return Za.current=Ja,t===null?Ja:t}function yd(){(xe===0||xe===3||xe===2)&&(xe=4),Le===null||!(Dr&268435455)&&!(Ll&268435455)||On(Le,je)}function nl(t,e){var n=ie;ie|=2;var r=nv();(Le!==t||je!==e)&&(on=null,Rr(t,e));do try{SI();break}catch(i){tv(t,i)}while(!0);if(Zh(),ie=n,Za.current=r,Ce!==null)throw Error(M(261));return Le=null,je=0,xe}function SI(){for(;Ce!==null;)rv(Ce)}function AI(){for(;Ce!==null&&!Xw();)rv(Ce)}function rv(t){var e=ov(t.alternate,t,pt);t.memoizedProps=t.pendingProps,e===null?iv(t):Ce=e,dd.current=null}function iv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_I(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Ce=null;return}}else if(n=yI(n,e,pt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);xe===0&&(xe=5)}function vr(t,e,n){var r=ae,i=At.transition;try{At.transition=null,ae=1,RI(t,e,n,r)}finally{At.transition=i,ae=r}return null}function RI(t,e,n,r){do yi();while(Un!==null);if(ie&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(oT(t,s),t===Le&&(Ce=Le=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ra||(ra=!0,av(ba,function(){return yi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=At.transition,At.transition=null;var o=ae;ae=1;var l=ie;ie|=4,dd.current=null,EI(t,n),J_(n,t),qT(Mc),Ua=!!Lc,Mc=Lc=null,t.current=n,wI(n),Yw(),ie=l,ae=o,At.transition=s}else t.current=n;if(ra&&(ra=!1,Un=t,tl=i),s=t.pendingLanes,s===0&&(qn=null),eT(n.stateNode),ht(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(el)throw el=!1,t=nh,nh=null,t;return tl&1&&t.tag!==0&&yi(),s=t.pendingLanes,s&1?t===rh?xs++:(xs=0,rh=t):xs=0,hr(),null}function yi(){if(Un!==null){var t=Fy(tl),e=At.transition,n=ae;try{if(At.transition=null,ae=16>t?16:t,Un===null)var r=!1;else{if(t=Un,Un=null,tl=0,ie&6)throw Error(M(331));var i=ie;for(ie|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:ks(8,f,s)}var m=f.child;if(m!==null)m.return=f,$=m;else for(;$!==null;){f=$;var y=f.sibling,R=f.return;if(Q_(f),f===h){$=null;break}if(y!==null){y.return=R,$=y;break}$=R}}}var C=s.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var L=N.sibling;N.sibling=null,N=L}while(N!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ks(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,$=I;break e}$=s.return}}var E=t.current;for($=E;$!==null;){o=$;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,$=S;else e:for(o=E;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ol(9,l)}}catch(b){Te(l,l.return,b)}if(l===o){$=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,$=D;break e}$=l.return}}if(ie=i,hr(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Rl,t)}catch{}r=!0}return r}finally{ae=n,At.transition=e}}return!1}function Sm(t,e,n){e=Ci(n,e),e=F_(t,e,1),t=Wn(t,e,1),e=rt(),t!==null&&(co(t,1,e),ht(t,e))}function Te(t,e,n){if(t.tag===3)Sm(t,t,n);else for(;e!==null;){if(e.tag===3){Sm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){t=Ci(n,t),t=U_(e,t,1),e=Wn(e,t,1),t=rt(),e!==null&&(co(e,1,t),ht(e,t));break}}e=e.return}}function CI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(je&n)===n&&(xe===4||xe===3&&(je&130023424)===je&&500>Ae()-pd?Rr(t,0):fd|=n),ht(t,e)}function sv(t,e){e===0&&(t.mode&1?(e=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):e=1);var n=rt();t=_n(t,e),t!==null&&(co(t,e,n),ht(t,n))}function PI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sv(t,n)}function kI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),sv(t,n)}var ov;ov=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ut.current)lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return lt=!1,gI(t,e,n);lt=!!(t.flags&131072)}else lt=!1,me&&e.flags&1048576&&c_(e,qa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ea(t,e),t=e.pendingProps;var i=Ii(e,Je.current);gi(e,n),i=ad(null,e,r,t,i,n);var s=ld();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ct(r)?(s=!0,Ha(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nd(e),i.updater=Vl,e.stateNode=i,i._reactInternals=e,Wc(e,r,t,n),e=Kc(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Qh(e),nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ea(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xI(r),t=xt(r,t),i){case 0:e=Gc(null,e,r,t,n);break e;case 1:e=pm(null,e,r,t,n);break e;case 11:e=dm(null,e,r,t,n);break e;case 14:e=fm(null,e,r,xt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Gc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),pm(t,e,r,i,n);case 3:e:{if($_(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,g_(t,e),Qa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ci(Error(M(423)),e),e=mm(t,e,r,n,i);break e}else if(r!==i){i=Ci(Error(M(424)),e),e=mm(t,e,r,n,i);break e}else for(mt=Hn(e.stateNode.containerInfo.firstChild),gt=e,me=!0,Vt=null,n=p_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Si(),r===i){e=vn(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 5:return y_(e),t===null&&Bc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,bc(r,i)?o=null:s!==null&&bc(r,s)&&(e.flags|=32),B_(t,e),nt(t,e,o,n),e.child;case 6:return t===null&&Bc(e),null;case 13:return H_(t,e,n);case 4:return rd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ai(e,null,r,n):nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),dm(t,e,r,i,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Ga,r._currentValue),r._currentValue=o,s!==null)if(Ut(s.value,o)){if(s.children===i.children&&!ut.current){e=vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=pn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),$c(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$c(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gi(e,n),i=Ct(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return r=e.type,i=xt(r,e.pendingProps),i=xt(r.type,i),fm(t,e,r,i,n);case 15:return j_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Ea(t,e),e.tag=1,ct(r)?(t=!0,Ha(e)):t=!1,gi(e,n),b_(e,r,i),Wc(e,r,i,n),Kc(null,e,r,!0,t,n);case 19:return W_(t,e,n);case 22:return z_(t,e,n)}throw Error(M(156,e.tag))};function av(t,e){return Oy(t,e)}function NI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(t,e,n,r){return new NI(t,e,n,r)}function _d(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xI(t){if(typeof t=="function")return _d(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bh)return 11;if(t===Fh)return 14}return 2}function Kn(t,e){var n=t.alternate;return n===null?(n=St(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ia(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_d(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ti:return Cr(n.children,i,s,e);case Mh:o=8,i|=8;break;case mc:return t=St(12,n,e,i|2),t.elementType=mc,t.lanes=s,t;case gc:return t=St(13,n,e,i),t.elementType=gc,t.lanes=s,t;case yc:return t=St(19,n,e,i),t.elementType=yc,t.lanes=s,t;case yy:return Ml(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case my:o=10;break e;case gy:o=9;break e;case bh:o=11;break e;case Fh:o=14;break e;case xn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=St(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Cr(t,e,n,r){return t=St(7,t,r,e),t.lanes=n,t}function Ml(t,e,n,r){return t=St(22,t,r,e),t.elementType=yy,t.lanes=n,t.stateNode={isHidden:!1},t}function Zu(t,e,n){return t=St(6,t,null,e),t.lanes=n,t}function ec(t,e,n){return e=St(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ou(0),this.expirationTimes=Ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vd(t,e,n,r,i,s,o,l,u){return t=new DI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=St(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nd(s),t}function VI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ei,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function lv(t){if(!t)return nr;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(ct(n))return l_(t,n,e)}return e}function uv(t,e,n,r,i,s,o,l,u){return t=vd(n,r,!0,t,i,s,o,l,u),t.context=lv(null),n=t.current,r=rt(),i=Gn(n),s=pn(r,i),s.callback=e??null,Wn(n,s,i),t.current.lanes=i,co(t,i,r),ht(t,r),t}function bl(t,e,n,r){var i=e.current,s=rt(),o=Gn(i);return n=lv(n),e.context===null?e.context=n:e.pendingContext=n,e=pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wn(i,e,o),t!==null&&(bt(t,i,o,s),ya(t,i,o)),o}function rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Am(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ed(t,e){Am(t,e),(t=t.alternate)&&Am(t,e)}function OI(){return null}var cv=typeof reportError=="function"?reportError:function(t){console.error(t)};function wd(t){this._internalRoot=t}Fl.prototype.render=wd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));bl(t,e,null,null)};Fl.prototype.unmount=wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){bl(null,t,null,null)}),e[yn]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=zy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vn.length&&e!==0&&e<Vn[n].priority;n++);Vn.splice(n,0,t),n===0&&$y(t)}};function Td(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rm(){}function LI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=rl(o);s.call(h)}}var o=uv(e,r,t,0,null,!1,!1,"",Rm);return t._reactRootContainer=o,t[yn]=o.current,Ws(t.nodeType===8?t.parentNode:t),Vr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=rl(u);l.call(h)}}var u=vd(t,0,!1,null,null,!1,!1,"",Rm);return t._reactRootContainer=u,t[yn]=u.current,Ws(t.nodeType===8?t.parentNode:t),Vr(function(){bl(e,u,n,r)}),u}function jl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=rl(o);l.call(u)}}bl(e,o,t,i)}else o=LI(n,e,t,i,r);return rl(o)}Uy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_s(e.pendingLanes);n!==0&&(zh(e,n|1),ht(e,Ae()),!(ie&6)&&(Pi=Ae()+500,hr()))}break;case 13:Vr(function(){var r=_n(t,1);if(r!==null){var i=rt();bt(r,t,1,i)}}),Ed(t,1)}};Bh=function(t){if(t.tag===13){var e=_n(t,134217728);if(e!==null){var n=rt();bt(e,t,134217728,n)}Ed(t,134217728)}};jy=function(t){if(t.tag===13){var e=Gn(t),n=_n(t,e);if(n!==null){var r=rt();bt(n,t,e,r)}Ed(t,e)}};zy=function(){return ae};By=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Cc=function(t,e,n){switch(e){case"input":if(Ec(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nl(r);if(!i)throw Error(M(90));vy(r),Ec(r,i)}}}break;case"textarea":wy(t,n);break;case"select":e=n.value,e!=null&&di(t,!!n.multiple,e,!1)}};Py=md;ky=Vr;var MI={usingClientEntryPoint:!1,Events:[fo,si,Nl,Ry,Cy,md]},ms={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bI={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dy(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||OI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ia.isDisabled&&ia.supportsFiber)try{Rl=ia.inject(bI),Wt=ia}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MI;_t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Td(e))throw Error(M(200));return VI(t,e,null,n)};_t.createRoot=function(t,e){if(!Td(t))throw Error(M(299));var n=!1,r="",i=cv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vd(t,1,!1,null,null,n,!1,r,i),t[yn]=e.current,Ws(t.nodeType===8?t.parentNode:t),new wd(e)};_t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=Dy(e),t=t===null?null:t.stateNode,t};_t.flushSync=function(t){return Vr(t)};_t.hydrate=function(t,e,n){if(!Ul(e))throw Error(M(200));return jl(null,t,e,!0,n)};_t.hydrateRoot=function(t,e,n){if(!Td(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=cv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=uv(e,null,t,1,n??null,i,!1,s,o),t[yn]=e.current,Ws(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fl(e)};_t.render=function(t,e,n){if(!Ul(e))throw Error(M(200));return jl(null,t,e,!1,n)};_t.unmountComponentAtNode=function(t){if(!Ul(t))throw Error(M(40));return t._reactRootContainer?(Vr(function(){jl(null,null,t,!1,function(){t._reactRootContainer=null,t[yn]=null})}),!0):!1};_t.unstable_batchedUpdates=md;_t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ul(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return jl(t,e,n,!1,r)};_t.version="18.3.1-next-f1338f8080-20240426";function hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hv)}catch(t){console.error(t)}}hv(),hy.exports=_t;var FI=hy.exports,Cm=FI;fc.createRoot=Cm.createRoot,fc.hydrateRoot=Cm.hydrateRoot;const UI=({value:t,isFlipped:e,isMatched:n,isDarkMode:r,onClick:i})=>U.jsx("div",{onClick:i,className:`
        w-full aspect-square cursor-pointer 
        flex items-center justify-center
        rounded-xl text-4xl
        transition-all duration-300
        ${n?"cursor-default opacity-50":"hover:scale-105"}
        ${r?e?"bg-gray-600":"bg-gray-700 text-gray-400":e?"bg-white":"bg-gray-200 text-gray-600"}
      `,children:e?t:"❓"}),jI=({isDarkMode:t,cards:e,onCardClick:n,onMove:r,onMatch:i,onGameComplete:s})=>{const[o,l]=re.useState([]),[u,h]=re.useState(!1),[f,m]=re.useState(0),y=C=>{if(u||o.includes(C)||e[C].isMatched||o.length===2)return;const N={...e[C],isFlipped:!0};n(N);const L=[...o,C];l(L);const I=f+1;m(I),r(),L.length===2&&(h(!0),R(L[0],L[1]))},R=(C,N)=>{setTimeout(()=>{e[C].value===e[N].value?(n({...e[C],isMatched:!0,isFlipped:!0}),n({...e[N],isMatched:!0,isFlipped:!0}),i(),e.every(I=>I.isMatched||I.id===C||I.id===N)&&s(f)):(n({...e[C],isFlipped:!1}),n({...e[N],isFlipped:!1})),l([]),h(!1)},1e3)};return U.jsx("div",{className:`grid grid-cols-4 gap-4 p-4 max-w-3xl mx-auto md:gap-6 md:p-6 ${t?"bg-gray-800":"bg-white"}`,children:e.map(C=>U.jsx(UI,{id:C.id,value:C.value,isFlipped:C.isFlipped,isMatched:C.isMatched,isDarkMode:t,onClick:()=>y(C.id)},C.id))})},zI=({isDarkMode:t,isRunning:e,onTimeUpdate:n})=>{const[r,i]=re.useState(0);re.useEffect(()=>{e||(i(0),n(0))},[e,n]),re.useEffect(()=>{let o;return e&&(o=setInterval(()=>{i(l=>l+1)},1e3)),()=>{o&&clearInterval(o)}},[e]),re.useEffect(()=>{e&&n(r)},[r,e,n]);const s=o=>{const l=Math.floor(o/60),u=o%60;return`${l.toString().padStart(2,"0")}:${u.toString().padStart(2,"0")}`};return U.jsxs("div",{className:`flex items-center justify-center gap-2 p-3 rounded-lg shadow-sm transition-colors ${t?"bg-gray-700 shadow-[0_0_10px_rgba(255,255,255,0.1)]":"bg-gray-100"}`,children:[U.jsx("span",{className:`font-semibold transition-colors ${t?"text-gray-300":"text-gray-600"}`,children:"Time:"}),U.jsx("span",{className:`font-mono text-lg transition-colors ${t?"text-blue-400":"text-blue-500"}`,children:s(r)})]})},BI=({isDarkMode:t,moves:e})=>U.jsxs("div",{className:`flex items-center justify-center gap-2 p-3 rounded-lg shadow-sm transition-colors ${t?"bg-gray-700 shadow-[0_0_10px_rgba(255,255,255,0.1)]":"bg-gray-100"}`,children:[U.jsx("span",{className:`font-semibold transition-colors ${t?"text-gray-300":"text-gray-600"}`,children:"Moves:"}),U.jsx("span",{className:`font-mono text-lg transition-colors ${t?"text-blue-400":"text-blue-500"}`,children:e})]}),$I=({isDarkMode:t,isGameRunning:e,moves:n,onTimeUpdate:r})=>U.jsxs("div",{className:"flex justify-center gap-4 mb-8",children:[U.jsx(zI,{isDarkMode:t,isRunning:e,onTimeUpdate:r}),U.jsx(BI,{isDarkMode:t,moves:n})]}),HI=({isDarkMode:t,onToggleDarkMode:e,user:n,onSignIn:r,onSignOut:i})=>{var s;return U.jsxs("header",{className:"text-center mb-8 relative",children:[U.jsxs("div",{className:"absolute right-4 top-4 flex items-center gap-4",children:[n?U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx("span",{className:`text-sm ${t?"text-gray-300":"text-gray-600"}`,children:(s=n.email)==null?void 0:s.split("@")[0]}),U.jsx("button",{onClick:i,className:`px-3 py-1 rounded-lg text-sm transition-colors ${t?"bg-gray-700 text-gray-300 hover:bg-gray-600":"bg-gray-200 text-gray-600 hover:bg-gray-300"}`,children:"Sign Out"})]}):U.jsx("button",{onClick:r,className:`px-3 py-1 rounded-lg text-sm transition-colors ${t?"bg-blue-600 text-white hover:bg-blue-700":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"Sign in with Google"}),U.jsx("button",{onClick:e,className:`p-2 rounded-lg transition-colors ${t?"bg-gray-700 text-yellow-400 hover:bg-gray-600":"bg-gray-200 text-gray-600 hover:bg-gray-300"}`,children:t?"☀️":"🌙"})]}),U.jsx("h1",{className:`text-4xl font-bold mb-4 transition-colors ${t?"text-white":"text-gray-800"}`,children:"Memory Match Game"}),U.jsx("p",{className:`transition-colors ${t?"text-gray-300":"text-gray-600"}`,children:"Match the pairs of cards in the least number of moves!"})]})},WI=({isDarkMode:t,isGameRunning:e,onStartGame:n})=>U.jsxs("div",{className:"text-center py-6",children:[U.jsx("button",{className:`px-6 py-3 font-semibold rounded-lg shadow-md transition-colors ${t?"bg-blue-600 text-white hover:bg-blue-700 shadow-[0_0_15px_rgba(59,130,246,0.5)]":"bg-blue-500 text-white hover:bg-blue-600"}`,onClick:n,children:e?"Restart Game":"Start Game"}),U.jsx("p",{className:`mt-4 text-sm transition-colors ${t?"text-gray-400":"text-gray-500"}`,children:"© 2024 Memory Match Game. All rights reserved."})]});/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=()=>{};var Pm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},GI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(y=64)),r.push(n[f],n[m],n[y],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):GI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new KI;const y=s<<2|l>>4;if(r.push(y),h!==64){const R=l<<4&240|h>>2;if(r.push(R),m!==64){const C=h<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QI=function(t){const e=dv(t);return fv.encodeByteArray(e,!0)},il=function(t){return QI(t).replace(/\./g,"")},pv=function(t){try{return fv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=()=>XI().__FIREBASE_DEFAULTS__,JI=()=>{if(typeof process>"u"||typeof Pm>"u")return;const t=Pm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pv(t[1]);return e&&JSON.parse(e)},zl=()=>{try{return qI()||YI()||JI()||ZI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mv=t=>{var e,n;return(n=(e=zl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eS=t=>{const e=mv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gv=()=>{var t;return(t=zl())===null||t===void 0?void 0:t.config},yv=t=>{var e;return(e=zl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[il(JSON.stringify(n)),il(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function iS(){var t;const e=(t=zl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lS(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uS(){return!iS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cS(){try{return typeof indexedDB=="object"}catch{return!1}}function hS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dS,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mo.prototype.create)}}class mo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new An(i,l,r)}}function fS(t,e){return t.replace(pS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pS=/\{\$([^}]+)}/g;function mS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Or(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(km(s)&&km(o)){if(!Or(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function km(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gS(t,e){const n=new yS(t,e);return n.subscribe.bind(n)}class yS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_S(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=tc),i.error===void 0&&(i.error=tc),i.complete===void 0&&(i.complete=tc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _S(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wS(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ES(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ES(t){return t===Er?void 0:t}function wS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const IS={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},SS=Z.INFO,AS={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},RS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=AS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Id{constructor(e){this.name=e,this._logLevel=SS,this._logHandler=RS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const CS=(t,e)=>e.some(n=>t instanceof n);let Nm,xm;function PS(){return Nm||(Nm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kS(){return xm||(xm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _v=new WeakMap,oh=new WeakMap,vv=new WeakMap,nc=new WeakMap,Sd=new WeakMap;function NS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Qn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_v.set(n,t)}).catch(()=>{}),Sd.set(e,t),e}function xS(t){if(oh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});oh.set(t,e)}let ah={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DS(t){ah=t(ah)}function VS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rc(this),e,...n);return vv.set(r,e.sort?e.sort():[e]),Qn(r)}:kS().includes(t)?function(...e){return t.apply(rc(this),e),Qn(_v.get(this))}:function(...e){return Qn(t.apply(rc(this),e))}}function OS(t){return typeof t=="function"?VS(t):(t instanceof IDBTransaction&&xS(t),CS(t,PS())?new Proxy(t,ah):t)}function Qn(t){if(t instanceof IDBRequest)return NS(t);if(nc.has(t))return nc.get(t);const e=OS(t);return e!==t&&(nc.set(t,e),Sd.set(e,t)),e}const rc=t=>Sd.get(t);function LS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Qn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Qn(o.result),u.oldVersion,u.newVersion,Qn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const MS=["get","getKey","getAll","getAllKeys","count"],bS=["put","add","delete","clear"],ic=new Map;function Dm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ic.get(e))return ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=bS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||MS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return ic.set(e,s),s}DS(t=>({...t,get:(e,n,r)=>Dm(e,n)||t.get(e,n,r),has:(e,n)=>!!Dm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(US(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function US(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lh="@firebase/app",Vm="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new Id("@firebase/app"),jS="@firebase/app-compat",zS="@firebase/analytics-compat",BS="@firebase/analytics",$S="@firebase/app-check-compat",HS="@firebase/app-check",WS="@firebase/auth",qS="@firebase/auth-compat",GS="@firebase/database",KS="@firebase/data-connect",QS="@firebase/database-compat",XS="@firebase/functions",YS="@firebase/functions-compat",JS="@firebase/installations",ZS="@firebase/installations-compat",eA="@firebase/messaging",tA="@firebase/messaging-compat",nA="@firebase/performance",rA="@firebase/performance-compat",iA="@firebase/remote-config",sA="@firebase/remote-config-compat",oA="@firebase/storage",aA="@firebase/storage-compat",lA="@firebase/firestore",uA="@firebase/vertexai",cA="@firebase/firestore-compat",hA="firebase",dA="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="[DEFAULT]",fA={[lh]:"fire-core",[jS]:"fire-core-compat",[BS]:"fire-analytics",[zS]:"fire-analytics-compat",[HS]:"fire-app-check",[$S]:"fire-app-check-compat",[WS]:"fire-auth",[qS]:"fire-auth-compat",[GS]:"fire-rtdb",[KS]:"fire-data-connect",[QS]:"fire-rtdb-compat",[XS]:"fire-fn",[YS]:"fire-fn-compat",[JS]:"fire-iid",[ZS]:"fire-iid-compat",[eA]:"fire-fcm",[tA]:"fire-fcm-compat",[nA]:"fire-perf",[rA]:"fire-perf-compat",[iA]:"fire-rc",[sA]:"fire-rc-compat",[oA]:"fire-gcs",[aA]:"fire-gcs-compat",[lA]:"fire-fst",[cA]:"fire-fst-compat",[uA]:"fire-vertex","fire-js":"fire-js",[hA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map,pA=new Map,ch=new Map;function Om(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ki(t){const e=t.name;if(ch.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;ch.set(e,t);for(const n of sl.values())Om(n,t);for(const n of pA.values())Om(n,t);return!0}function Ad(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new mo("app","Firebase",mA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=dA;function Ev(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:uh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Xn.create("bad-app-name",{appName:String(i)});if(n||(n=gv()),!n)throw Xn.create("no-options");const s=sl.get(i);if(s){if(Or(n,s.options)&&Or(r,s.config))return s;throw Xn.create("duplicate-app",{appName:i})}const o=new TS(i);for(const u of ch.values())o.addComponent(u);const l=new gA(n,r,o);return sl.set(i,l),l}function wv(t=uh){const e=sl.get(t);if(!e&&t===uh&&gv())return Ev();if(!e)throw Xn.create("no-app",{appName:t});return e}function Yn(t,e,n){var r;let i=(r=fA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(l.join(" "));return}ki(new Lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA="firebase-heartbeat-database",_A=1,eo="firebase-heartbeat-store";let sc=null;function Tv(){return sc||(sc=LS(yA,_A,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),sc}async function vA(t){try{const n=(await Tv()).transaction(eo),r=await n.objectStore(eo).get(Iv(t));return await n.done,r}catch(e){if(e instanceof An)En.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function Lm(t,e){try{const r=(await Tv()).transaction(eo,"readwrite");await r.objectStore(eo).put(e,Iv(t)),await r.done}catch(n){if(n instanceof An)En.warn(n.message);else{const r=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(r.message)}}}function Iv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=1024,wA=30;class TA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>wA){const o=AA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mm(),{heartbeatsToSend:r,unsentEntries:i}=IA(this._heartbeatsCache.heartbeats),s=il(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return En.warn(n),""}}}function Mm(){return new Date().toISOString().substring(0,10)}function IA(t,e=EA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cS()?hS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bm(t){return il(JSON.stringify({version:2,heartbeats:t})).length}function AA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t){ki(new Lr("platform-logger",e=>new FS(e),"PRIVATE")),ki(new Lr("heartbeat",e=>new TA(e),"PRIVATE")),Yn(lh,Vm,t),Yn(lh,Vm,"esm2017"),Yn("fire-js","")}RA("");var Fm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,Sv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function _(){}_.prototype=g.prototype,v.D=g.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(w,A,k){for(var T=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)T[Et-2]=arguments[Et];return g.prototype[A].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,g,_){_||(_=0);var w=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)w[A]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(A=0;16>A;++A)w[A]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=v.g[0],_=v.g[1],A=v.g[2];var k=v.g[3],T=g+(k^_&(A^k))+w[0]+3614090360&4294967295;g=_+(T<<7&4294967295|T>>>25),T=k+(A^g&(_^A))+w[1]+3905402710&4294967295,k=g+(T<<12&4294967295|T>>>20),T=A+(_^k&(g^_))+w[2]+606105819&4294967295,A=k+(T<<17&4294967295|T>>>15),T=_+(g^A&(k^g))+w[3]+3250441966&4294967295,_=A+(T<<22&4294967295|T>>>10),T=g+(k^_&(A^k))+w[4]+4118548399&4294967295,g=_+(T<<7&4294967295|T>>>25),T=k+(A^g&(_^A))+w[5]+1200080426&4294967295,k=g+(T<<12&4294967295|T>>>20),T=A+(_^k&(g^_))+w[6]+2821735955&4294967295,A=k+(T<<17&4294967295|T>>>15),T=_+(g^A&(k^g))+w[7]+4249261313&4294967295,_=A+(T<<22&4294967295|T>>>10),T=g+(k^_&(A^k))+w[8]+1770035416&4294967295,g=_+(T<<7&4294967295|T>>>25),T=k+(A^g&(_^A))+w[9]+2336552879&4294967295,k=g+(T<<12&4294967295|T>>>20),T=A+(_^k&(g^_))+w[10]+4294925233&4294967295,A=k+(T<<17&4294967295|T>>>15),T=_+(g^A&(k^g))+w[11]+2304563134&4294967295,_=A+(T<<22&4294967295|T>>>10),T=g+(k^_&(A^k))+w[12]+1804603682&4294967295,g=_+(T<<7&4294967295|T>>>25),T=k+(A^g&(_^A))+w[13]+4254626195&4294967295,k=g+(T<<12&4294967295|T>>>20),T=A+(_^k&(g^_))+w[14]+2792965006&4294967295,A=k+(T<<17&4294967295|T>>>15),T=_+(g^A&(k^g))+w[15]+1236535329&4294967295,_=A+(T<<22&4294967295|T>>>10),T=g+(A^k&(_^A))+w[1]+4129170786&4294967295,g=_+(T<<5&4294967295|T>>>27),T=k+(_^A&(g^_))+w[6]+3225465664&4294967295,k=g+(T<<9&4294967295|T>>>23),T=A+(g^_&(k^g))+w[11]+643717713&4294967295,A=k+(T<<14&4294967295|T>>>18),T=_+(k^g&(A^k))+w[0]+3921069994&4294967295,_=A+(T<<20&4294967295|T>>>12),T=g+(A^k&(_^A))+w[5]+3593408605&4294967295,g=_+(T<<5&4294967295|T>>>27),T=k+(_^A&(g^_))+w[10]+38016083&4294967295,k=g+(T<<9&4294967295|T>>>23),T=A+(g^_&(k^g))+w[15]+3634488961&4294967295,A=k+(T<<14&4294967295|T>>>18),T=_+(k^g&(A^k))+w[4]+3889429448&4294967295,_=A+(T<<20&4294967295|T>>>12),T=g+(A^k&(_^A))+w[9]+568446438&4294967295,g=_+(T<<5&4294967295|T>>>27),T=k+(_^A&(g^_))+w[14]+3275163606&4294967295,k=g+(T<<9&4294967295|T>>>23),T=A+(g^_&(k^g))+w[3]+4107603335&4294967295,A=k+(T<<14&4294967295|T>>>18),T=_+(k^g&(A^k))+w[8]+1163531501&4294967295,_=A+(T<<20&4294967295|T>>>12),T=g+(A^k&(_^A))+w[13]+2850285829&4294967295,g=_+(T<<5&4294967295|T>>>27),T=k+(_^A&(g^_))+w[2]+4243563512&4294967295,k=g+(T<<9&4294967295|T>>>23),T=A+(g^_&(k^g))+w[7]+1735328473&4294967295,A=k+(T<<14&4294967295|T>>>18),T=_+(k^g&(A^k))+w[12]+2368359562&4294967295,_=A+(T<<20&4294967295|T>>>12),T=g+(_^A^k)+w[5]+4294588738&4294967295,g=_+(T<<4&4294967295|T>>>28),T=k+(g^_^A)+w[8]+2272392833&4294967295,k=g+(T<<11&4294967295|T>>>21),T=A+(k^g^_)+w[11]+1839030562&4294967295,A=k+(T<<16&4294967295|T>>>16),T=_+(A^k^g)+w[14]+4259657740&4294967295,_=A+(T<<23&4294967295|T>>>9),T=g+(_^A^k)+w[1]+2763975236&4294967295,g=_+(T<<4&4294967295|T>>>28),T=k+(g^_^A)+w[4]+1272893353&4294967295,k=g+(T<<11&4294967295|T>>>21),T=A+(k^g^_)+w[7]+4139469664&4294967295,A=k+(T<<16&4294967295|T>>>16),T=_+(A^k^g)+w[10]+3200236656&4294967295,_=A+(T<<23&4294967295|T>>>9),T=g+(_^A^k)+w[13]+681279174&4294967295,g=_+(T<<4&4294967295|T>>>28),T=k+(g^_^A)+w[0]+3936430074&4294967295,k=g+(T<<11&4294967295|T>>>21),T=A+(k^g^_)+w[3]+3572445317&4294967295,A=k+(T<<16&4294967295|T>>>16),T=_+(A^k^g)+w[6]+76029189&4294967295,_=A+(T<<23&4294967295|T>>>9),T=g+(_^A^k)+w[9]+3654602809&4294967295,g=_+(T<<4&4294967295|T>>>28),T=k+(g^_^A)+w[12]+3873151461&4294967295,k=g+(T<<11&4294967295|T>>>21),T=A+(k^g^_)+w[15]+530742520&4294967295,A=k+(T<<16&4294967295|T>>>16),T=_+(A^k^g)+w[2]+3299628645&4294967295,_=A+(T<<23&4294967295|T>>>9),T=g+(A^(_|~k))+w[0]+4096336452&4294967295,g=_+(T<<6&4294967295|T>>>26),T=k+(_^(g|~A))+w[7]+1126891415&4294967295,k=g+(T<<10&4294967295|T>>>22),T=A+(g^(k|~_))+w[14]+2878612391&4294967295,A=k+(T<<15&4294967295|T>>>17),T=_+(k^(A|~g))+w[5]+4237533241&4294967295,_=A+(T<<21&4294967295|T>>>11),T=g+(A^(_|~k))+w[12]+1700485571&4294967295,g=_+(T<<6&4294967295|T>>>26),T=k+(_^(g|~A))+w[3]+2399980690&4294967295,k=g+(T<<10&4294967295|T>>>22),T=A+(g^(k|~_))+w[10]+4293915773&4294967295,A=k+(T<<15&4294967295|T>>>17),T=_+(k^(A|~g))+w[1]+2240044497&4294967295,_=A+(T<<21&4294967295|T>>>11),T=g+(A^(_|~k))+w[8]+1873313359&4294967295,g=_+(T<<6&4294967295|T>>>26),T=k+(_^(g|~A))+w[15]+4264355552&4294967295,k=g+(T<<10&4294967295|T>>>22),T=A+(g^(k|~_))+w[6]+2734768916&4294967295,A=k+(T<<15&4294967295|T>>>17),T=_+(k^(A|~g))+w[13]+1309151649&4294967295,_=A+(T<<21&4294967295|T>>>11),T=g+(A^(_|~k))+w[4]+4149444226&4294967295,g=_+(T<<6&4294967295|T>>>26),T=k+(_^(g|~A))+w[11]+3174756917&4294967295,k=g+(T<<10&4294967295|T>>>22),T=A+(g^(k|~_))+w[2]+718787259&4294967295,A=k+(T<<15&4294967295|T>>>17),T=_+(k^(A|~g))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+k&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var _=g-this.blockSize,w=this.B,A=this.h,k=0;k<g;){if(A==0)for(;k<=_;)i(this,v,k),k+=this.blockSize;if(typeof v=="string"){for(;k<g;)if(w[A++]=v.charCodeAt(k++),A==this.blockSize){i(this,w),A=0;break}}else for(;k<g;)if(w[A++]=v[k++],A==this.blockSize){i(this,w),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var _=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=_&255,_/=256;for(this.u(v),v=Array(16),g=_=0;4>g;++g)for(var w=0;32>w;w+=8)v[_++]=this.g[g]>>>w&255;return v};function s(v,g){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=g(v)}function o(v,g){this.h=g;for(var _=[],w=!0,A=v.length-1;0<=A;A--){var k=v[A]|0;w&&k==g||(_[A]=k,w=!1)}this.g=_}var l={};function u(v){return-128<=v&&128>v?s(v,function(g){return new o([g|0],0>g?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return L(h(-v));for(var g=[],_=1,w=0;v>=_;w++)g[w]=v/_|0,_*=4294967296;return new o(g,0)}function f(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return L(f(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),w=m,A=0;A<v.length;A+=8){var k=Math.min(8,v.length-A),T=parseInt(v.substring(A,A+k),g);8>k?(k=h(Math.pow(g,k)),w=w.j(k).add(h(T))):(w=w.j(_),w=w.add(h(T)))}return w}var m=u(0),y=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-L(this).m();for(var v=0,g=1,_=0;_<this.g.length;_++){var w=this.i(_);v+=(0<=w?w:4294967296+w)*g,g*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(N(this))return"-"+L(this).toString(v);for(var g=h(Math.pow(v,6)),_=this,w="";;){var A=D(_,g).g;_=I(_,A.j(g));var k=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=A,C(_))return k+w;for(;6>k.length;)k="0"+k;w=k+w}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function N(v){return v.h==-1}t.l=function(v){return v=I(this,v),N(v)?-1:C(v)?0:1};function L(v){for(var g=v.g.length,_=[],w=0;w<g;w++)_[w]=~v.g[w];return new o(_,~v.h).add(y)}t.abs=function(){return N(this)?L(this):this},t.add=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0,A=0;A<=g;A++){var k=w+(this.i(A)&65535)+(v.i(A)&65535),T=(k>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);w=T>>>16,k&=65535,T&=65535,_[A]=T<<16|k}return new o(_,_[_.length-1]&-2147483648?-1:0)};function I(v,g){return v.add(L(g))}t.j=function(v){if(C(this)||C(v))return m;if(N(this))return N(v)?L(this).j(L(v)):L(L(this).j(v));if(N(v))return L(this.j(L(v)));if(0>this.l(R)&&0>v.l(R))return h(this.m()*v.m());for(var g=this.g.length+v.g.length,_=[],w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<v.g.length;A++){var k=this.i(w)>>>16,T=this.i(w)&65535,Et=v.i(A)>>>16,fr=v.i(A)&65535;_[2*w+2*A]+=T*fr,E(_,2*w+2*A),_[2*w+2*A+1]+=k*fr,E(_,2*w+2*A+1),_[2*w+2*A+1]+=T*Et,E(_,2*w+2*A+1),_[2*w+2*A+2]+=k*Et,E(_,2*w+2*A+2)}for(w=0;w<g;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=g;w<2*g;w++)_[w]=0;return new o(_,0)};function E(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function S(v,g){this.g=v,this.h=g}function D(v,g){if(C(g))throw Error("division by zero");if(C(v))return new S(m,m);if(N(v))return g=D(L(v),g),new S(L(g.g),L(g.h));if(N(g))return g=D(v,L(g)),new S(L(g.g),g.h);if(30<v.g.length){if(N(v)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,w=g;0>=w.l(v);)_=b(_),w=b(w);var A=F(_,1),k=F(w,1);for(w=F(w,2),_=F(_,2);!C(w);){var T=k.add(w);0>=T.l(v)&&(A=A.add(_),k=T),w=F(w,1),_=F(_,1)}return g=I(v,A.j(g)),new S(A,g)}for(A=m;0<=v.l(g);){for(_=Math.max(1,Math.floor(v.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),k=h(_),T=k.j(g);N(T)||0<T.l(v);)_-=w,k=h(_),T=k.j(g);C(k)&&(k=y),A=A.add(k),v=I(v,T)}return new S(A,v)}t.A=function(v){return D(this,v).h},t.and=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)&v.i(w);return new o(_,this.h&v.h)},t.or=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)|v.i(w);return new o(_,this.h|v.h)},t.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)^v.i(w);return new o(_,this.h^v.h)};function b(v){for(var g=v.g.length+1,_=[],w=0;w<g;w++)_[w]=v.i(w)<<1|v.i(w-1)>>>31;return new o(_,v.h)}function F(v,g){var _=g>>5;g%=32;for(var w=v.g.length-_,A=[],k=0;k<w;k++)A[k]=0<g?v.i(k+_)>>>g|v.i(k+_+1)<<32-g:v.i(k+_);return new o(A,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Sv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Jn=o}).apply(typeof Fm<"u"?Fm:typeof self<"u"?self:typeof window<"u"?window:{});var sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Av,Es,Rv,Sa,hh,Cv,Pv,kv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof sa=="object"&&sa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var P=a[p];if(!(P in d))break e;d=d[P]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,P={next:function(){if(!p&&d<a.length){var x=d++;return{value:c(x,a[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function R(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,P,x){for(var j=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)j[ue-2]=arguments[ue];return c.prototype[P].apply(p,j)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function L(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const P=a.length||0,x=p.length||0;a.length=P+x;for(let j=0;j<x;j++)a[P+j]=p[j]}else a.push(p)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var b=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function v(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,c){let d,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(d in p)a[d]=p[d];for(let x=0;x<_.length;x++)d=_[x],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function T(){var a=K;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Et{constructor(){this.h=this.g=null}add(c,d){const p=fr.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var fr=new I(()=>new Ki,a=>a.reset());class Ki{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Jt,z=!1,K=new Et,Y=()=>{const a=l.Promise.resolve(void 0);Jt=()=>{a.then(ge)}};var ge=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){k(d)}var c=fr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Zt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function en(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(b){e:{try{D(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:tn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&en.aa.h.call(this)}}C(en,Ie);var tn={2:"touch",3:"pen",4:"mouse"};en.prototype.h=function(){en.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),OE=0;function LE(a,c,d,p,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=P,this.key=++OE,this.da=this.fa=!1}function So(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ao(a){this.src=a,this.g={},this.h=0}Ao.prototype.add=function(a,c,d,p,P){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var j=au(a,c,p,P);return-1<j?(c=a[j],d||(c.fa=!1)):(c=new LE(c,this.src,x,!!p,P),c.fa=d,a.push(c)),c};function ou(a,c){var d=c.type;if(d in a.g){var p=a.g[d],P=Array.prototype.indexOf.call(p,c,void 0),x;(x=0<=P)&&Array.prototype.splice.call(p,P,1),x&&(So(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function au(a,c,d,p){for(var P=0;P<a.length;++P){var x=a[P];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==p)return P}return-1}var lu="closure_lm_"+(1e6*Math.random()|0),uu={};function Ef(a,c,d,p,P){if(Array.isArray(c)){for(var x=0;x<c.length;x++)Ef(a,c[x],d,p,P);return null}return d=If(d),a&&a[nn]?a.K(c,d,h(p)?!!p.capture:!1,P):ME(a,c,d,!1,p,P)}function ME(a,c,d,p,P,x){if(!c)throw Error("Invalid event type");var j=h(P)?!!P.capture:!!P,ue=hu(a);if(ue||(a[lu]=ue=new Ao(a)),d=ue.add(c,d,p,j,x),d.proxy)return d;if(p=bE(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Zt||(P=j),P===void 0&&(P=!1),a.addEventListener(c.toString(),p,P);else if(a.attachEvent)a.attachEvent(Tf(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function bE(){function a(d){return c.call(a.src,a.listener,d)}const c=FE;return a}function wf(a,c,d,p,P){if(Array.isArray(c))for(var x=0;x<c.length;x++)wf(a,c[x],d,p,P);else p=h(p)?!!p.capture:!!p,d=If(d),a&&a[nn]?(a=a.i,c=String(c).toString(),c in a.g&&(x=a.g[c],d=au(x,d,p,P),-1<d&&(So(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete a.g[c],a.h--)))):a&&(a=hu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=au(c,d,p,P)),(d=-1<a?c[a]:null)&&cu(d))}function cu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[nn])ou(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(Tf(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=hu(c))?(ou(d,a),d.h==0&&(d.src=null,c[lu]=null)):So(a)}}}function Tf(a){return a in uu?uu[a]:uu[a]="on"+a}function FE(a,c){if(a.da)a=!0;else{c=new en(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&cu(a),a=d.call(p,c)}return a}function hu(a){return a=a[lu],a instanceof Ao?a:null}var du="__closure_events_fn_"+(1e9*Math.random()>>>0);function If(a){return typeof a=="function"?a:(a[du]||(a[du]=function(c){return a.handleEvent(c)}),a[du])}function $e(){le.call(this),this.i=new Ao(this),this.M=this,this.F=null}C($e,le),$e.prototype[nn]=!0,$e.prototype.removeEventListener=function(a,c,d,p){wf(this,a,c,d,p)};function et(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var P=c;c=new Ie(p,a),w(c,P)}if(P=!0,d)for(var x=d.length-1;0<=x;x--){var j=c.g=d[x];P=Ro(j,p,!0,c)&&P}if(j=c.g=a,P=Ro(j,p,!0,c)&&P,P=Ro(j,p,!1,c)&&P,d)for(x=0;x<d.length;x++)j=c.g=d[x],P=Ro(j,p,!1,c)&&P}$e.prototype.N=function(){if($e.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)So(d[p]);delete a.g[c],a.h--}}this.F=null},$e.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},$e.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Ro(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,x=0;x<c.length;++x){var j=c[x];if(j&&!j.da&&j.capture==d){var ue=j.listener,Me=j.ha||j.src;j.fa&&ou(a.i,j),P=ue.call(Me,p)!==!1&&P}}return P&&!p.defaultPrevented}function Sf(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Af(a){a.g=Sf(()=>{a.g=null,a.i&&(a.i=!1,Af(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class UE extends le{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Af(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(a){le.call(this),this.h=a,this.g={}}C(Qi,le);var Rf=[];function Cf(a){F(a.g,function(c,d){this.g.hasOwnProperty(d)&&cu(c)},a),a.g={}}Qi.prototype.N=function(){Qi.aa.N.call(this),Cf(this)},Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fu=l.JSON.stringify,jE=l.JSON.parse,zE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function pu(){}pu.prototype.h=null;function Pf(a){return a.h||(a.h=a.i())}function kf(){}var Xi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mu(){Ie.call(this,"d")}C(mu,Ie);function gu(){Ie.call(this,"c")}C(gu,Ie);var pr={},Nf=null;function Co(){return Nf=Nf||new $e}pr.La="serverreachability";function xf(a){Ie.call(this,pr.La,a)}C(xf,Ie);function Yi(a){const c=Co();et(c,new xf(c))}pr.STAT_EVENT="statevent";function Df(a,c){Ie.call(this,pr.STAT_EVENT,a),this.stat=c}C(Df,Ie);function tt(a){const c=Co();et(c,new Df(c,a))}pr.Ma="timingevent";function Vf(a,c){Ie.call(this,pr.Ma,a),this.size=c}C(Vf,Ie);function Ji(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Zi(){this.g=!0}Zi.prototype.xa=function(){this.g=!1};function BE(a,c,d,p,P,x){a.info(function(){if(a.g)if(x)for(var j="",ue=x.split("&"),Me=0;Me<ue.length;Me++){var se=ue[Me].split("=");if(1<se.length){var He=se[0];se=se[1];var We=He.split("_");j=2<=We.length&&We[1]=="type"?j+(He+"="+se+"&"):j+(He+"=redacted&")}}else j=null;else j=x;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+c+`
`+d+`
`+j})}function $E(a,c,d,p,P,x,j){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+c+`
`+d+`
`+x+" "+j})}function Wr(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+WE(a,d)+(p?" "+p:"")})}function HE(a,c){a.info(function(){return"TIMEOUT: "+c})}Zi.prototype.info=function(){};function WE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var x=P[0];if(x!="noop"&&x!="stop"&&x!="close")for(var j=1;j<P.length;j++)P[j]=""}}}}return fu(d)}catch{return c}}var Po={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Of={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yu;function ko(){}C(ko,pu),ko.prototype.g=function(){return new XMLHttpRequest},ko.prototype.i=function(){return{}},yu=new ko;function Rn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lf}function Lf(){this.i=null,this.g="",this.h=!1}var Mf={},_u={};function vu(a,c,d){a.L=1,a.v=Vo(rn(c)),a.m=d,a.P=!0,bf(a,null)}function bf(a,c){a.F=Date.now(),No(a),a.A=rn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Yf(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Lf,a.g=mp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new UE(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Rf[0]=P.toString()),P=Rf);for(var x=0;x<P.length;x++){var j=Ef(d,P[x],p||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Yi(),BE(a.i,a.u,a.A,a.l,a.R,a.m)}Rn.prototype.ca=function(a){a=a.target;const c=this.M;c&&sn(a)==3?c.j():this.Y(a)},Rn.prototype.Y=function(a){try{if(a==this.g)e:{const We=sn(this.g);var c=this.g.Ba();const Kr=this.g.Z();if(!(3>We)&&(We!=3||this.g&&(this.h.h||this.g.oa()||ip(this.g)))){this.J||We!=4||c==7||(c==8||0>=Kr?Yi(3):Yi(2)),Eu(this);var d=this.g.Z();this.X=d;t:if(Ff(this)){var p=ip(this.g);a="";var P=p.length,x=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),es(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(x&&c==P-1)});p.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,$E(this.i,this.u,this.A,this.l,this.R,We,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Me=this.g;if((ue=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(ue)){var se=ue;break t}}se=null}if(d=se)Wr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wu(this,d);else{this.o=!1,this.s=3,tt(12),mr(this),es(this);break e}}if(this.P){d=!0;let kt;for(;!this.J&&this.C<j.length;)if(kt=qE(this,j),kt==_u){We==4&&(this.s=4,tt(14),d=!1),Wr(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==Mf){this.s=4,tt(15),Wr(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else Wr(this.i,this.l,kt,null),wu(this,kt);if(Ff(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),We!=4||j.length!=0||this.h.h||(this.s=1,tt(16),d=!1),this.o=this.o&&d,!d)Wr(this.i,this.l,j,"[Invalid Chunked Response]"),mr(this),es(this);else if(0<j.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Cu(He),He.M=!0,tt(11))}}else Wr(this.i,this.l,j,null),wu(this,j);We==4&&mr(this),this.o&&!this.J&&(We==4?hp(this.j,this):(this.o=!1,No(this)))}else uw(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),mr(this),es(this)}}}catch{}finally{}};function Ff(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function qE(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?_u:(d=Number(c.substring(d,p)),isNaN(d)?Mf:(p+=1,p+d>c.length?_u:(c=c.slice(p,p+d),a.C=p+d,c)))}Rn.prototype.cancel=function(){this.J=!0,mr(this)};function No(a){a.S=Date.now()+a.I,Uf(a,a.I)}function Uf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ji(y(a.ba,a),c)}function Eu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Rn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(HE(this.i,this.A),this.L!=2&&(Yi(),tt(17)),mr(this),this.s=2,es(this)):Uf(this,this.S-a)};function es(a){a.j.G==0||a.J||hp(a.j,a)}function mr(a){Eu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Cf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function wu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Tu(d.h,a))){if(!a.K&&Tu(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Uo(d),bo(d);else break e;Ru(d),tt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ji(y(d.Za,d),6e3));if(1>=Bf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else yr(d,11)}else if((a.K||d.g==a)&&Uo(d),!E(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let se=P[c];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const He=se[3];He!=null&&(d.la=He,d.j.info("VER="+d.la));const We=se[4];We!=null&&(d.Aa=We,d.j.info("SVER="+d.Aa));const Kr=se[5];Kr!=null&&typeof Kr=="number"&&0<Kr&&(p=1.5*Kr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const kt=a.g;if(kt){const zo=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zo){var x=p.h;x.g||zo.indexOf("spdy")==-1&&zo.indexOf("quic")==-1&&zo.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Iu(x,x.h),x.h=null))}if(p.D){const Pu=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Pu&&(p.ya=Pu,he(p.I,p.D,Pu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var j=a;if(p.qa=pp(p,p.J?p.ia:null,p.W),j.K){$f(p.h,j);var ue=j,Me=p.L;Me&&(ue.I=Me),ue.B&&(Eu(ue),No(ue)),p.g=j}else up(p);0<d.i.length&&Fo(d)}else se[0]!="stop"&&se[0]!="close"||yr(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?yr(d,7):Au(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}Yi(4)}catch{}}var GE=class{constructor(a,c){this.g=a,this.map=c}};function jf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bf(a){return a.h?1:a.g?a.g.size:0}function Tu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Iu(a,c){a.g?a.g.add(c):a.h=c}function $f(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}jf.prototype.cancel=function(){if(this.i=Hf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Hf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function KE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function QE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function Wf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=QE(a),p=KE(a),P=p.length,x=0;x<P;x++)c.call(void 0,p[x],d&&d[x],a)}var qf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),P=null;if(0<=p){var x=a[d].substring(0,p);P=a[d].substring(p+1)}else x=a[d];c(x,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function gr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gr){this.h=a.h,xo(this,a.j),this.o=a.o,this.g=a.g,Do(this,a.s),this.l=a.l;var c=a.i,d=new rs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Gf(this,d),this.m=a.m}else a&&(c=String(a).match(qf))?(this.h=!1,xo(this,c[1]||"",!0),this.o=ts(c[2]||""),this.g=ts(c[3]||"",!0),Do(this,c[4]),this.l=ts(c[5]||"",!0),Gf(this,c[6]||"",!0),this.m=ts(c[7]||"")):(this.h=!1,this.i=new rs(null,this.h))}gr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ns(c,Kf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ns(c,Kf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ns(d,d.charAt(0)=="/"?ZE:JE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ns(d,tw)),a.join("")};function rn(a){return new gr(a)}function xo(a,c,d){a.j=d?ts(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Do(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Gf(a,c,d){c instanceof rs?(a.i=c,nw(a.i,a.h)):(d||(c=ns(c,ew)),a.i=new rs(c,a.h))}function he(a,c,d){a.i.set(c,d)}function Vo(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ts(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ns(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,YE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function YE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Kf=/[#\/\?@]/g,JE=/[#\?:]/g,ZE=/[#\?]/g,ew=/[#\?@]/g,tw=/#/g;function rs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Cn(a){a.g||(a.g=new Map,a.h=0,a.i&&XE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=rs.prototype,t.add=function(a,c){Cn(this),this.i=null,a=qr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Qf(a,c){Cn(a),c=qr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Xf(a,c){return Cn(a),c=qr(a,c),a.g.has(c)}t.forEach=function(a,c){Cn(this),this.g.forEach(function(d,p){d.forEach(function(P){a.call(c,P,p,this)},this)},this)},t.na=function(){Cn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const P=a[p];for(let x=0;x<P.length;x++)d.push(c[p])}return d},t.V=function(a){Cn(this);let c=[];if(typeof a=="string")Xf(this,a)&&(c=c.concat(this.g.get(qr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Cn(this),this.i=null,a=qr(this,a),Xf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Yf(a,c,d){Qf(a,c),0<d.length&&(a.i=null,a.g.set(qr(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const x=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var P=x;j[p]!==""&&(P+="="+encodeURIComponent(String(j[p]))),a.push(P)}}return this.i=a.join("&")};function qr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function nw(a,c){c&&!a.j&&(Cn(a),a.i=null,a.g.forEach(function(d,p){var P=p.toLowerCase();p!=P&&(Qf(this,p),Yf(this,P,d))},a)),a.j=c}function rw(a,c){const d=new Zi;if(l.Image){const p=new Image;p.onload=R(Pn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=R(Pn,d,"TestLoadImage: error",!1,c,p),p.onabort=R(Pn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=R(Pn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function iw(a,c){const d=new Zi,p=new AbortController,P=setTimeout(()=>{p.abort(),Pn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(x=>{clearTimeout(P),x.ok?Pn(d,"TestPingServer: ok",!0,c):Pn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Pn(d,"TestPingServer: error",!1,c)})}function Pn(a,c,d,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(d)}catch{}}function sw(){this.g=new zE}function ow(a,c,d){const p=d||"";try{Wf(a,function(P,x){let j=P;h(P)&&(j=fu(P)),c.push(p+x+"="+encodeURIComponent(j))})}catch(P){throw c.push(p+"type="+encodeURIComponent("_badmap")),P}}function Oo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Oo,pu),Oo.prototype.g=function(){return new Lo(this.l,this.j)},Oo.prototype.i=function(a){return function(){return a}}({});function Lo(a,c){$e.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Lo,$e),t=Lo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ss(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ss(this)),this.g&&(this.readyState=3,ss(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?is(this):ss(this),this.readyState==3&&Jf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,is(this))},t.Qa=function(a){this.g&&(this.response=a,is(this))},t.ga=function(){this.g&&is(this)};function is(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ss(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ss(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Lo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zf(a){let c="";return F(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Su(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Zf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,c,d))}function we(a){$e.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(we,$e);var aw=/^https?$/i,lw=["POST","PUT"];t=we.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yu.g(),this.v=this.o?Pf(this.o):Pf(yu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(x){ep(this,x);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)d.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())d.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(lw,c,void 0))||p||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,j]of d)this.g.setRequestHeader(x,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rp(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){ep(this,x)}};function ep(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,tp(a),Mo(a)}function tp(a){a.A||(a.A=!0,et(a,"complete"),et(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,et(this,"complete"),et(this,"abort"),Mo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mo(this,!0)),we.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?np(this):this.bb())},t.bb=function(){np(this)};function np(a){if(a.h&&typeof o<"u"&&(!a.v[1]||sn(a)!=4||a.Z()!=2)){if(a.u&&sn(a)==4)Sf(a.Ea,0,a);else if(et(a,"readystatechange"),sn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=j===0){var P=String(a.D).match(qf)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),p=!aw.test(P?P.toLowerCase():"")}d=p}if(d)et(a,"complete"),et(a,"success");else{a.m=6;try{var x=2<sn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",tp(a)}}finally{Mo(a)}}}}function Mo(a,c){if(a.g){rp(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||et(a,"ready");try{d.onreadystatechange=p}catch{}}}function rp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),jE(c)}};function ip(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function uw(a){const c={};a=(a.g&&2<=sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(E(a[p]))continue;var d=A(a[p]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[P]||[];c[P]=x,x.push(d)}v(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function os(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function sp(a){this.Aa=0,this.i=[],this.j=new Zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=os("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=os("baseRetryDelayMs",5e3,a),this.cb=os("retryDelaySeedMs",1e4,a),this.Wa=os("forwardChannelMaxRetries",2,a),this.wa=os("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new jf(a&&a.concurrentRequestLimit),this.Da=new sw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=sp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){tt(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=pp(this,null,this.W),Fo(this)};function Au(a){if(op(a),a.G==3){var c=a.U++,d=rn(a.I);if(he(d,"SID",a.K),he(d,"RID",c),he(d,"TYPE","terminate"),as(a,d),c=new Rn(a,a.j,c),c.L=2,c.v=Vo(rn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=mp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),No(c)}fp(a)}function bo(a){a.g&&(Cu(a),a.g.cancel(),a.g=null)}function op(a){bo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Uo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Fo(a){if(!zf(a.h)&&!a.s){a.s=!0;var c=a.Ga;Jt||Y(),z||(Jt(),z=!0),K.add(c,a),a.B=0}}function cw(a,c){return Bf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ji(y(a.Ga,a,c),dp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Rn(this,this.j,a);let x=this.o;if(this.S&&(x?(x=g(x),w(x,this.S)):x=this.S),this.m!==null||this.O||(P.H=x,x=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=lp(this,P,c),d=rn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),as(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(Zf(x)))+"&"+c:this.m&&Su(d,this.m,x)),Iu(this.h,P),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",c),he(d,"SID","null"),P.T=!0,vu(P,d,null)):vu(P,d,c),this.G=2}}else this.G==3&&(a?ap(this,a):this.i.length==0||zf(this.h)||ap(this))};function ap(a,c){var d;c?d=c.l:d=a.U++;const p=rn(a.I);he(p,"SID",a.K),he(p,"RID",d),he(p,"AID",a.T),as(a,p),a.m&&a.o&&Su(p,a.m,a.o),d=new Rn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=lp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Iu(a.h,d),vu(d,p,c)}function as(a,c){a.H&&F(a.H,function(d,p){he(c,p,d)}),a.l&&Wf({},function(d,p){he(c,p,d)})}function lp(a,c,d){d=Math.min(a.i.length,d);var p=a.l?y(a.l.Na,a.l,a):null;e:{var P=a.i;let x=-1;for(;;){const j=["count="+d];x==-1?0<d?(x=P[0].g,j.push("ofs="+x)):x=0:j.push("ofs="+x);let ue=!0;for(let Me=0;Me<d;Me++){let se=P[Me].g;const He=P[Me].map;if(se-=x,0>se)x=Math.max(0,P[Me].g-100),ue=!1;else try{ow(He,j,"req"+se+"_")}catch{p&&p(He)}}if(ue){p=j.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function up(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Jt||Y(),z||(Jt(),z=!0),K.add(c,a),a.v=0}}function Ru(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ji(y(a.Fa,a),dp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,cp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ji(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),bo(this),cp(this))};function Cu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function cp(a){a.g=new Rn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=rn(a.qa);he(c,"RID","rpc"),he(c,"SID",a.K),he(c,"AID",a.T),he(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(c,"TO",a.ja),he(c,"TYPE","xmlhttp"),as(a,c),a.m&&a.o&&Su(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Vo(rn(c)),d.m=null,d.P=!0,bf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,bo(this),Ru(this),tt(19))};function Uo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function hp(a,c){var d=null;if(a.g==c){Uo(a),Cu(a),a.g=null;var p=2}else if(Tu(a.h,c))d=c.D,$f(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;p=Co(),et(p,new Vf(p,d)),Fo(a)}else up(a);else if(P=c.s,P==3||P==0&&0<c.X||!(p==1&&cw(a,c)||p==2&&Ru(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),P){case 1:yr(a,5);break;case 4:yr(a,10);break;case 3:yr(a,6);break;default:yr(a,2)}}}function dp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function yr(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),p=a.Xa;const P=!p;p=new gr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||xo(p,"https"),Vo(p),P?rw(p.toString(),d):iw(p.toString(),d)}else tt(2);a.G=0,a.l&&a.l.sa(c),fp(a),op(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function fp(a){if(a.G=0,a.ka=[],a.l){const c=Hf(a.h);(c.length!=0||a.i.length!=0)&&(L(a.ka,c),L(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function pp(a,c,d){var p=d instanceof gr?rn(d):new gr(d);if(p.g!="")c&&(p.g=c+"."+p.g),Do(p,p.s);else{var P=l.location;p=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var x=new gr(null);p&&xo(x,p),c&&(x.g=c),P&&Do(x,P),d&&(x.l=d),p=x}return d=a.D,c=a.ya,d&&c&&he(p,d,c),he(p,"VER",a.la),as(a,p),p}function mp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new we(new Oo({eb:d})):new we(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function gp(){}t=gp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function jo(){}jo.prototype.g=function(a,c){return new ft(a,c)};function ft(a,c){$e.call(this),this.g=new sp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Gr(this)}C(ft,$e),ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){Au(this.g)},ft.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=fu(a),a=d);c.i.push(new GE(c.Ya++,a)),c.G==3&&Fo(c)},ft.prototype.N=function(){this.g.l=null,delete this.j,Au(this.g),delete this.g,ft.aa.N.call(this)};function yp(a){mu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(yp,mu);function _p(){gu.call(this),this.status=1}C(_p,gu);function Gr(a){this.g=a}C(Gr,gp),Gr.prototype.ua=function(){et(this.g,"a")},Gr.prototype.ta=function(a){et(this.g,new yp(a))},Gr.prototype.sa=function(a){et(this.g,new _p)},Gr.prototype.ra=function(){et(this.g,"b")},jo.prototype.createWebChannel=jo.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,kv=function(){return new jo},Pv=function(){return Co()},Cv=pr,hh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Po.NO_ERROR=0,Po.TIMEOUT=8,Po.HTTP_ERROR=6,Sa=Po,Of.COMPLETE="complete",Rv=Of,kf.EventType=Xi,Xi.OPEN="a",Xi.CLOSE="b",Xi.ERROR="c",Xi.MESSAGE="d",$e.prototype.listen=$e.prototype.K,Es=kf,we.prototype.listenOnce=we.prototype.L,we.prototype.getLastError=we.prototype.Ka,we.prototype.getLastErrorCode=we.prototype.Ba,we.prototype.getStatus=we.prototype.Z,we.prototype.getResponseJson=we.prototype.Oa,we.prototype.getResponseText=we.prototype.oa,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Ha,Av=we}).apply(typeof sa<"u"?sa:typeof self<"u"?self:typeof window<"u"?window:{});const Um="@firebase/firestore",jm="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Id("@firebase/firestore");function Xr(){return Mr.logLevel}function B(t,...e){if(Mr.logLevel<=Z.DEBUG){const n=e.map(Rd);Mr.debug(`Firestore (${Bi}): ${t}`,...n)}}function wn(t,...e){if(Mr.logLevel<=Z.ERROR){const n=e.map(Rd);Mr.error(`Firestore (${Bi}): ${t}`,...n)}}function Ni(t,...e){if(Mr.logLevel<=Z.WARN){const n=e.map(Rd);Mr.warn(`Firestore (${Bi}): ${t}`,...n)}}function Rd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t="Unexpected state"){const e=`FIRESTORE (${Bi}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function oe(t,e){t||q()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class PA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kA{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new Nv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Qe(e)}}class NA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class xA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new NA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DA{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ot(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new zm(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.R=n.token,new zm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=VA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function xi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=-62135596800,$m=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*$m);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Bm)throw new H(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$m}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Bm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ke(0,0))}static max(){return new Q(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="__name__";class $t{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $t.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $t?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=$t.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=$t.isNumericId(e),i=$t.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?$t.extractNumericId(e).compare($t.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jn.fromString(e.substring(4,e.length-2))}}class fe extends $t{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const OA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends $t{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return OA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hm}static keyField(){return new Ue([Hm])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(fe.fromString(e))}static fromName(e){return new W(fe.fromString(e).popFirst(5))}static empty(){return new W(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new fe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=-1;function LA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new rr(i,W.empty(),e)}function MA(t){return new rr(t.readTime,t.key,to)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(Q.min(),W.empty(),to)}static max(){return new rr(Q.max(),W.empty(),to)}}function bA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==FA)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function jA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Hi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Bl.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=-1;function $l(t){return t==null}function ol(t){return t===0&&1/t==-1/0}function zA(t){return typeof t=="number"&&Number.isInteger(t)&&!ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="";function BA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Wm(e)),e=$A(t.get(n),e);return Wm(e)}function $A(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Dv:n+="";break;default:n+=s}}return n}function Wm(t){return t+Dv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oa(this.root,e,this.comparator,!0)}}class oa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Fe.RED,this.left=i??Fe.EMPTY,this.right=s??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Fe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gm(this.data.getIterator())}getIteratorFrom(e){return new Gm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class Gm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new De(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ov("Invalid base64 string: "+s):s}}(e);return new Be(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const HA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(t){if(oe(!!t),typeof t=="string"){let e=0;const n=HA.exec(t);if(oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function sr(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="server_timestamp",Mv="__type__",bv="__previous_value__",Fv="__local_write_time__";function Pd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mv])===null||n===void 0?void 0:n.stringValue)===Lv}function Hl(t){const e=t.mapValue.fields[bv];return Pd(e)?Hl(e):e}function no(t){const e=ir(t.mapValue.fields[Fv].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}const al="(default)";class ro{constructor(e,n){this.projectId=e,this.database=n||al}static empty(){return new ro("","")}get isDefaultDatabase(){return this.database===al}isEqual(e){return e instanceof ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="__type__",qA="__max__",aa={mapValue:{}},jv="__vector__",ll="value";function or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pd(t)?4:KA(t)?9007199254740991:GA(t)?10:11:q()}function Xt(t,e){if(t===e)return!0;const n=or(t);if(n!==or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return no(t).isEqual(no(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ir(i.timestampValue),l=ir(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return sr(i.bytesValue).isEqual(sr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?ol(o)===ol(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return xi(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(qm(o)!==qm(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Xt(o[u],l[u])))return!1;return!0}(t,e);default:return q()}}function io(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Di(t,e){if(t===e)return 0;const n=or(t),r=or(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Km(t.timestampValue,e.timestampValue);case 4:return Km(no(t),no(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(s,o){const l=sr(s),u=sr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=te(l[h],u[h]);if(f!==0)return f}return te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=te(Se(s.latitude),Se(o.latitude));return l!==0?l:te(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Qm(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},y=o.fields||{},R=(l=m[ll])===null||l===void 0?void 0:l.arrayValue,C=(u=y[ll])===null||u===void 0?void 0:u.arrayValue,N=te(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Qm(R,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===aa.mapValue&&o===aa.mapValue)return 0;if(s===aa.mapValue)return 1;if(o===aa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=te(u[m],f[m]);if(y!==0)return y;const R=Di(l[u[m]],h[f[m]]);if(R!==0)return R}return te(u.length,f.length)}(t.mapValue,e.mapValue);default:throw q()}}function Km(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=ir(t),r=ir(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function Qm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Di(n[i],r[i]);if(s)return s}return te(n.length,r.length)}function Vi(t){return dh(t)}function dh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dh(n.fields[o])}`;return i+"}"}(t.mapValue):q()}function Aa(t){switch(or(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Hl(t);return e?16+Aa(e):16;case 5:return 2*t.stringValue.length;case 6:return sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Aa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return zr(r.fields,(s,o)=>{i+=s.length+Aa(o)}),i}(t.mapValue);default:throw q()}}function Xm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fh(t){return!!t&&"integerValue"in t}function kd(t){return!!t&&"arrayValue"in t}function Ym(t){return!!t&&"nullValue"in t}function Jm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ra(t){return!!t&&"mapValue"in t}function GA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Uv])===null||n===void 0?void 0:n.stringValue)===jv}function Ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===qA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ra(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ds(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ra(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ra(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){zr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(Ds(this.value))}}function zv(t){const e=[];return zr(t.fields,(n,r)=>{const i=new Ue([n]);if(Ra(r)){const s=zv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ye(e,0,Q.min(),Q.min(),Q.min(),It.empty(),0)}static newFoundDocument(e,n,r,i){return new Ye(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Ye(e,2,n,Q.min(),Q.min(),It.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,Q.min(),Q.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.position=e,this.inclusive=n}}function Zm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Di(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function eg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n="asc"){this.field=e,this.dir=n}}function QA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{}class Pe extends Bv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new YA(e,n,r):n==="array-contains"?new eR(e,r):n==="in"?new tR(e,r):n==="not-in"?new nR(e,r):n==="array-contains-any"?new rR(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new JA(e,r):new ZA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Di(n,this.value)):n!==null&&or(this.value)===or(n)&&this.matchesComparison(Di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends Bv{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new jt(e,n)}matches(e){return $v(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function $v(t){return t.op==="and"}function Hv(t){return XA(t)&&$v(t)}function XA(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function ph(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Vi(t.value);if(Hv(t))return t.filters.map(e=>ph(e)).join(",");{const e=t.filters.map(n=>ph(n)).join(",");return`${t.op}(${e})`}}function Wv(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&Xt(r.value,i.value)}(t,e):t instanceof jt?function(r,i){return i instanceof jt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Wv(o,i.filters[l]),!0):!1}(t,e):void q()}function qv(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${Vi(n.value)}`}(t):t instanceof jt?function(n){return n.op.toString()+" {"+n.getFilters().map(qv).join(" ,")+"}"}(t):"Filter"}class YA extends Pe{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class JA extends Pe{constructor(e,n){super(e,"in",n),this.keys=Gv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZA extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=Gv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class eR extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kd(n)&&io(n.arrayValue,this.value)}}class tR extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&io(this.value.arrayValue,n)}}class nR extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!io(this.value.arrayValue,n)}}class rR extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>io(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.le=null}}function tg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new iR(t,e,n,r,i,s,o)}function Nd(t){const e=X(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ph(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),$l(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vi(r)).join(",")),e.le=n}return e.le}function xd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!eg(t.startAt,e.startAt)&&eg(t.endAt,e.endAt)}function mh(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function sR(t,e,n,r,i,s,o,l){return new Wi(t,e,n,r,i,s,o,l)}function Kv(t){return new Wi(t)}function ng(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qv(t){return t.collectionGroup!==null}function Vs(t){const e=X(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new De(Ue.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new so(s,r))}),n.has(Ue.keyField().canonicalString())||e.he.push(new so(Ue.keyField(),r))}return e.he}function Gt(t){const e=X(t);return e.Pe||(e.Pe=oR(e,Vs(t))),e.Pe}function oR(t,e){if(t.limitType==="F")return tg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new so(i.field,s)});const n=t.endAt?new ul(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ul(t.startAt.position,t.startAt.inclusive):null;return tg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gh(t,e){const n=t.filters.concat([e]);return new Wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cl(t,e,n){return new Wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wl(t,e){return xd(Gt(t),Gt(e))&&t.limitType===e.limitType}function Xv(t){return`${Nd(Gt(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>qv(i)).join(", ")}]`),$l(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Vi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Vi(i)).join(",")),`Target(${r})`}(Gt(t))}; limitType=${t.limitType})`}function ql(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Vs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Zm(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Vs(r),i)||r.endAt&&!function(o,l,u){const h=Zm(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Vs(r),i))}(t,e)}function aR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yv(t){return(e,n)=>{let r=!1;for(const i of Vs(t)){const s=lR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lR(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Di(u,h):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Vv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=new Ee(W.comparator);function Tn(){return uR}const Jv=new Ee(W.comparator);function ws(...t){let e=Jv;for(const n of t)e=e.insert(n.key,n);return e}function Zv(t){let e=Jv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return Os()}function e0(){return Os()}function Os(){return new Br(t=>t.toString(),(t,e)=>t.isEqual(e))}const cR=new Ee(W.comparator),hR=new De(W.comparator);function ee(...t){let e=hR;for(const n of t)e=e.add(n);return e}const dR=new De(te);function fR(){return dR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ol(e)?"-0":e}}function t0(t){return{integerValue:""+t}}function pR(t,e){return zA(e)?t0(e):Dd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this._=void 0}}function mR(t,e,n){return t instanceof hl?function(i,s){const o={fields:{[Mv]:{stringValue:Lv},[Fv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Pd(s)&&(s=Hl(s)),s&&(o.fields[bv]=s),{mapValue:o}}(n,e):t instanceof oo?r0(t,e):t instanceof ao?i0(t,e):function(i,s){const o=n0(i,s),l=rg(o)+rg(i.Ie);return fh(o)&&fh(i.Ie)?t0(l):Dd(i.serializer,l)}(t,e)}function gR(t,e,n){return t instanceof oo?r0(t,e):t instanceof ao?i0(t,e):n}function n0(t,e){return t instanceof dl?function(r){return fh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class hl extends Gl{}class oo extends Gl{constructor(e){super(),this.elements=e}}function r0(t,e){const n=s0(e);for(const r of t.elements)n.some(i=>Xt(i,r))||n.push(r);return{arrayValue:{values:n}}}class ao extends Gl{constructor(e){super(),this.elements=e}}function i0(t,e){let n=s0(e);for(const r of t.elements)n=n.filter(i=>!Xt(i,r));return{arrayValue:{values:n}}}class dl extends Gl{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function rg(t){return Se(t.integerValue||t.doubleValue)}function s0(t){return kd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof oo&&i instanceof oo||r instanceof ao&&i instanceof ao?xi(r.elements,i.elements,Xt):r instanceof dl&&i instanceof dl?Xt(r.Ie,i.Ie):r instanceof hl&&i instanceof hl}(t.transform,e.transform)}class _R{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ca(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kl{}function o0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new l0(t.key,mn.none()):new yo(t.key,t.data,mn.none());{const n=t.data,r=It.empty();let i=new De(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new $r(t.key,r,new Lt(i.toArray()),mn.none())}}function vR(t,e,n){t instanceof yo?function(i,s,o){const l=i.value.clone(),u=sg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof $r?function(i,s,o){if(!Ca(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=sg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(a0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ls(t,e,n,r){return t instanceof yo?function(s,o,l,u){if(!Ca(s.precondition,o))return l;const h=s.value.clone(),f=og(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof $r?function(s,o,l,u){if(!Ca(s.precondition,o))return l;const h=og(s.fieldTransforms,u,o),f=o.data;return f.setAll(a0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Ca(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ER(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=n0(r.transform,i||null);s!=null&&(n===null&&(n=It.empty()),n.set(r.field,s))}return n||null}function ig(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xi(r,i,(s,o)=>yR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class yo extends Kl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $r extends Kl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function a0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sg(t,e,n){const r=new Map;oe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,gR(o,l,n[i]))}return r}function og(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mR(s,o,e))}return r}class l0 extends Kl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wR extends Kl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&vR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ls(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ls(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=e0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=o0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&xi(this.mutations,e.mutations,(n,r)=>ig(n,r))&&xi(this.baseMutations,e.baseMutations,(n,r)=>ig(n,r))}}class Vd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length);let i=function(){return cR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Vd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,ne;function AR(t){switch(t){case O.OK:return q();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return q()}}function u0(t){if(t===void 0)return wn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Re.OK:return O.OK;case Re.CANCELLED:return O.CANCELLED;case Re.UNKNOWN:return O.UNKNOWN;case Re.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Re.INTERNAL:return O.INTERNAL;case Re.UNAVAILABLE:return O.UNAVAILABLE;case Re.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Re.NOT_FOUND:return O.NOT_FOUND;case Re.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Re.ABORTED:return O.ABORTED;case Re.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Re.DATA_LOSS:return O.DATA_LOSS;default:return q()}}(ne=Re||(Re={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=new Jn([4294967295,4294967295],0);function ag(t){const e=RR().encode(t),n=new Sv;return n.update(e),new Uint8Array(n.digest())}function lg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Jn([n,r],0),new Jn([i,s],0)]}class Od{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ts(`Invalid padding: ${n}`);if(r<0)throw new Ts(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ts(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ts(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Jn.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(Jn.fromNumber(r)));return i.compare(CR)===1&&(i=new Jn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=ag(e),[r,i]=lg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Od(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const n=ag(e),[r,i]=lg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,_o.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ql(Q.min(),i,new Ee(te),Tn(),ee())}}class _o{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _o(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class c0{constructor(e,n){this.targetId=e,this.ge=n}}class h0{constructor(e,n,r=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ug{constructor(){this.pe=0,this.ye=cg(),this.we=Be.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=ee(),n=ee(),r=ee();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new _o(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=cg()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,oe(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class PR{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Tn(),this.$e=la(),this.Ke=la(),this.Ue=new Ee(te)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){const n=e.targetId,r=e.ge.count,i=this.Xe(n);if(i){const s=i.target;if(mh(s))if(r===0){const o=new W(s.path);this.ze(n,o,Ye.newNoDocument(o,Q.min()))}else oe(r===1);else{const o=this.et(n);if(o!==r){const l=this.tt(e),u=l?this.nt(l,e,o):1;if(u!==0){this.Ye(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,h)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=sr(r).toUint8Array()}catch(u){if(u instanceof Ov)return Ni("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Od(o,i,s)}catch(u){return Ni(u instanceof Ts?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ee===0?null:l}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.ze(n,s,null),i++)}),i}ot(e){const n=new Map;this.qe.forEach((s,o)=>{const l=this.Xe(o);if(l){if(s.current&&mh(l.target)){const u=new W(l.target.path);this._t(u).has(o)||this.ut(o,u)||this.ze(o,u,Ye.newNoDocument(u,e))}s.ve&&(n.set(o,s.Fe()),s.Me())}});let r=ee();this.Ke.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Xe(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new Ql(e,n,this.Ue,this.Qe,r);return this.Qe=Tn(),this.$e=la(),this.Ke=la(),this.Ue=new Ee(te),i}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new ug,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new De(te),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new De(te),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new ug),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function la(){return new Ee(W.comparator)}function cg(){return new Ee(W.comparator)}const kR={asc:"ASCENDING",desc:"DESCENDING"},NR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xR={and:"AND",or:"OR"};class DR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yh(t,e){return t.useProto3Json||$l(e)?e:{value:e}}function fl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function d0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VR(t,e){return fl(t,e.toTimestamp())}function Kt(t){return oe(!!t),Q.fromTimestamp(function(n){const r=ir(n);return new ke(r.seconds,r.nanos)}(t))}function Ld(t,e){return _h(t,e).canonicalString()}function _h(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function f0(t){const e=fe.fromString(t);return oe(_0(e)),e}function vh(t,e){return Ld(t.databaseId,e.path)}function oc(t,e){const n=f0(e);if(n.get(1)!==t.databaseId.projectId)throw new H(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(m0(n))}function p0(t,e){return Ld(t.databaseId,e)}function OR(t){const e=f0(t);return e.length===4?fe.emptyPath():m0(e)}function Eh(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function m0(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hg(t,e,n){return{name:vh(t,e),fields:n.value.mapValue.fields}}function LR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string"),Be.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Be.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:u0(h.code);return new H(f,h.message||"")}(o);n=new h0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=oc(t,r.document.name),s=Kt(r.document.updateTime),o=r.document.createTime?Kt(r.document.createTime):Q.min(),l=new It({mapValue:{fields:r.document.fields}}),u=Ye.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Pa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=oc(t,r.document),s=r.readTime?Kt(r.readTime):Q.min(),o=Ye.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Pa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=oc(t,r.document),s=r.removedTargetIds||[];n=new Pa([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new SR(i,s),l=r.targetId;n=new c0(l,o)}}return n}function MR(t,e){let n;if(e instanceof yo)n={update:hg(t,e.key,e.value)};else if(e instanceof l0)n={delete:vh(t,e.key)};else if(e instanceof $r)n={update:hg(t,e.key,e.data),updateMask:WR(e.fieldMask)};else{if(!(e instanceof wR))return q();n={verify:vh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof hl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ao)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof dl)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:VR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(t,e.precondition)),n}function bR(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Kt(i.updateTime):Kt(s);return o.isEqual(Q.min())&&(o=Kt(s)),new _R(o,i.transformResults||[])}(n,e))):[]}function FR(t,e){return{documents:[p0(t,e.path)]}}function UR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=p0(t,i);const s=function(h){if(h.length!==0)return y0(jt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Jr(y.field),direction:BR(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=yh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:n,parent:i}}function jR(t){let e=OR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const y=g0(m);return y instanceof jt&&Hv(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(C){return new so(Zr(C.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,$l(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,R=m.values||[];return new ul(R,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,R=m.values||[];return new ul(R,y)}(n.endAt)),sR(e,i,o,s,l,"F",u,h)}function zR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function g0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zr(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Zr(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zr(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zr(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(Zr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jt.create(n.compositeFilter.filters.map(r=>g0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(n.compositeFilter.op))}(t):q()}function BR(t){return kR[t]}function $R(t){return NR[t]}function HR(t){return xR[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Zr(t){return Ue.fromServerFormat(t.fieldPath)}function y0(t){return t instanceof Pe?function(n){if(n.op==="=="){if(Jm(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NAN"}};if(Ym(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Jm(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NAN"}};if(Ym(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(n.field),op:$R(n.op),value:n.value}}}(t):t instanceof jt?function(n){const r=n.getFilters().map(i=>y0(i));return r.length===1?r[0]:{compositeFilter:{op:HR(n.op),filters:r}}}(t):q()}function WR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=Be.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.Tt=e}}function GR(t){const e=jR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this.Tn=new QR}addToCollectionParentIndex(e,n){return this.Tn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(rr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class QR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new De(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},v0=41943040;class ot{static withCacheSize(e){return new ot(e,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(v0,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Oi(0)}static Un(){return new Oi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="LruGarbageCollector",XR=1048576;function pg([t,e],[n,r]){const i=te(t,n);return i===0?te(e,r):i}class YR{constructor(e){this.Hn=e,this.buffer=new De(pg),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();pg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class JR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){B(fg,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Hi(n)?B(fg,"Ignoring IndexedDB error during garbage collection: ",n):await $i(n)}await this.er(3e5)})}}class ZR{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Bl.ae);const r=new YR(n);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(dg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dg):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Xr()<=Z.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function eC(t,e){return new ZR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this.changes=new Br(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ls(r.mutation,i,Lt.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ws();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Tn();const o=Os(),l=function(){return Os()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof $r)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ls(f.mutation,h,f.mutation.getFieldMask(),ke.now())):o.set(h.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new nC(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Os();let i=new Ee((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Lt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=e0();f.forEach(y=>{if(!s.has(y)){const R=o0(n.get(y),r.get(y));R!==null&&m.set(y,R),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Qv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Sr());let l=to,u=s;return o.next(h=>V.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ee())).next(f=>({batchId:l,changes:Zv(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=ws();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ws();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const h=function(m,y){return new Wi(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ye.newInvalidDocument(f)))});let l=ws();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Ls(f.mutation,h,Lt.empty(),ke.now()),ql(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return V.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Kt(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(i){return{name:i.name,query:GR(i.bundledQuery),readTime:Kt(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.overlays=new Ee(W.comparator),this.Rr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Et(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Sr(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Sr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Sr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return V.resolve(l)}Et(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new IR(n,r));let s=this.Rr.get(n);s===void 0&&(s=ee(),this.Rr.set(n,s)),this.Rr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.Vr=new De(Ve.mr),this.gr=new De(Ve.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Ve(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new W(new fe([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.gr.forEachInRange([r,i],o=>{this.wr(o),s.push(o.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new W(new fe([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=ee();return this.gr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return W.comparator(e.key,n.key)||te(e.Cr,n.Cr)}static pr(e,n){return te(e.Cr,n.Cr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new De(Ve.mr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Mr=this.Mr.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Nr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Cd:this.Fr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],o=>{const l=this.Or(o.Cr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(te);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,o],l=>{r=r.add(l.Cr)})}),V.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new W(s),0);let l=new De(te);return this.Mr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Cr)),!0)},o),V.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return V.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Ve(n,0),i=this.Mr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.kr=e,this.docs=function(){return new Ee(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ye.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Tn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||bA(MA(f),r)<=0||(i.has(f.key)||ql(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){q()}qr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uC(this)}getSize(e){return V.resolve(this.size)}}class uC extends tC{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.persistence=e,this.Qr=new Br(n=>Nd(n),xd),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Md,this.targetCount=0,this.Ur=Oi.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),V.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new Oi(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.zn(n),V.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Bl(0),this.zr=!1,this.zr=!0,this.jr=new oC,this.referenceDelegate=e(this),this.Hr=new cC(this),this.indexManager=new KR,this.remoteDocumentCache=function(i){return new lC(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new qR(n),this.Yr=new iC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new aC(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new hC(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,n){return V.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class hC extends UA{constructor(e){super(),this.currentSequenceNumber=e}}class bd{constructor(e){this.persistence=e,this.ti=new Md,this.ni=null}static ri(e){return new bd(e)}get ii(){if(this.ni)return this.ni;throw q()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),V.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ii,r=>{const i=W.fromPath(r);return this.si(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return V.or([()=>V.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class pl{constructor(e,n){this.persistence=e,this.oi=new Br(r=>BA(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=eC(this,n)}static ri(e,n){return new pl(e,n)}Zr(){}Xr(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return V.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),V.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Aa(e.data.value)),n}ar(e,n,r){return V.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.oi.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=i}static Yi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Fd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return uS()?8:jA(Ze())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.rs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ss(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new dC;return this._s(e,n,o).next(l=>{if(s.result=l,this.Xi)return this.us(e,n,o,l.size)})}).next(()=>s.result)}us(e,n,r,i){return r.documentReadCount<this.es?(Xr()<=Z.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Yr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),V.resolve()):(Xr()<=Z.DEBUG&&B("QueryEngine","Query:",Yr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Xr()<=Z.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Yr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gt(n))):V.resolve())}rs(e,n){if(ng(n))return V.resolve(null);let r=Gt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cl(n,null,"F"),r=Gt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.cs(n,l);return this.ls(n,h,o,u.readTime)?this.rs(e,cl(n,null,"F")):this.hs(e,h,n,u)}))})))}ss(e,n,r,i){return ng(n)||i.isEqual(Q.min())?V.resolve(null):this.ns.getDocuments(e,r).next(s=>{const o=this.cs(n,s);return this.ls(n,o,r,i)?V.resolve(null):(Xr()<=Z.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yr(n)),this.hs(e,o,n,LA(i,to)).next(l=>l))})}cs(e,n){let r=new De(Yv(e));return n.forEach((i,s)=>{ql(e,s)&&(r=r.add(s))}),r}ls(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,n,r){return Xr()<=Z.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Yr(n)),this.ns.getDocumentsMatchingQuery(e,n,rr.min(),r)}hs(e,n,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="LocalStore",pC=3e8;class mC{constructor(e,n,r,i){this.persistence=e,this.Ps=n,this.serializer=i,this.Ts=new Ee(te),this.Is=new Br(s=>Nd(s),xd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rC(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function gC(t,e,n,r){return new mC(t,e,n,r)}async function w0(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Rs:h,removedBatchIds:o,addedBatchIds:l}))})})}function yC(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,y=m.keys();let R=V.resolve();return y.forEach(C=>{R=R.next(()=>f.getEntry(u,C)).next(N=>{const L=h.docVersions.get(C);oe(L!==null),N.version.compareTo(L)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function T0(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function _C(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const l=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;l.push(n.Hr.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Hr.addMatchingKeys(s,f.addedDocuments,m)));let R=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(Be.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),i=i.insert(m,R),function(N,L,I){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=pC?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(y,R,f)&&l.push(n.Hr.updateTargetData(s,R))});let u=Tn(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(vC(s,o,e.documentUpdates).next(f=>{u=f.Vs,h=f.fs})),!r.isEqual(Q.min())){const f=n.Hr.getLastRemoteSnapshotVersion(s).next(m=>n.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Ts=i,s))}function vC(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Tn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(Ud,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Vs:o,fs:i}})}function EC(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Cd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wC(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Hr.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Hr.allocateTargetId(r).next(o=>(i=new jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function wh(t,e,n){const r=X(t),i=r.Ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Hi(o))throw o;B(Ud,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function mg(t,e,n){const r=X(t);let i=Q.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=X(u),y=m.Is.get(f);return y!==void 0?V.resolve(m.Ts.get(y)):m.Hr.getTargetData(h,f)}(r,o,Gt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:ee())).next(l=>(TC(r,aR(e),l),{documents:l,gs:s})))}function TC(t,e,n){let r=t.Es.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Es.set(e,r)}class gg{constructor(){this.activeTargetIds=fR()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class IC{constructor(){this.ho=new gg,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new gg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="ConnectivityMonitor";class _g{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){B(yg,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){B(yg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua=null;function Th(){return ua===null?ua=function(){return 268435456+Math.round(2147483648*Math.random())}():ua++,"0x"+ua.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="RestConnection",AC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class RC{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===al?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(e,n,r,i,s){const o=Th(),l=this.So(e,n.toUriEncodedString());B(ac,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,i,s),this.vo(e,l,u,r).then(h=>(B(ac,`Received RPC '${e}' ${o}: `,h),h),h=>{throw Ni(ac,`RPC '${e}' ${o} failed with error: `,h,"url: ",l,"request:",r),h})}Co(e,n,r,i,s,o){return this.bo(e,n,r,i,s)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}So(e,n){const r=AC[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="WebChannelConnection";class PC extends RC{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Th();return new Promise((o,l)=>{const u=new Av;u.setWithCredentials(!0),u.listenOnce(Rv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Sa.NO_ERROR:const f=u.getResponseJson();B(Ke,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Sa.TIMEOUT:B(Ke,`RPC '${e}' ${s} timed out`),l(new H(O.DEADLINE_EXCEEDED,"Request time out"));break;case Sa.HTTP_ERROR:const m=u.getStatus();if(B(Ke,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const R=y==null?void 0:y.error;if(R&&R.status&&R.message){const C=function(L){const I=L.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(I)>=0?I:O.UNKNOWN}(R.status);l(new H(C,R.message))}else l(new H(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(O.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{B(Ke,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);B(Ke,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Wo(e,n,r){const i=Th(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kv(),l=Pv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");B(Ke,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let y=!1,R=!1;const C=new CC({Fo:L=>{R?B(Ke,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(y||(B(Ke,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),B(Ke,`RPC '${e}' stream ${i} sending:`,L),m.send(L))},Mo:()=>m.close()}),N=(L,I,E)=>{L.listen(I,S=>{try{E(S)}catch(D){setTimeout(()=>{throw D},0)}})};return N(m,Es.EventType.OPEN,()=>{R||(B(Ke,`RPC '${e}' stream ${i} transport opened.`),C.Qo())}),N(m,Es.EventType.CLOSE,()=>{R||(R=!0,B(Ke,`RPC '${e}' stream ${i} transport closed`),C.Ko())}),N(m,Es.EventType.ERROR,L=>{R||(R=!0,Ni(Ke,`RPC '${e}' stream ${i} transport errored:`,L),C.Ko(new H(O.UNAVAILABLE,"The operation could not be completed")))}),N(m,Es.EventType.MESSAGE,L=>{var I;if(!R){const E=L.data[0];oe(!!E);const S=E,D=(S==null?void 0:S.error)||((I=S[0])===null||I===void 0?void 0:I.error);if(D){B(Ke,`RPC '${e}' stream ${i} received error:`,D);const b=D.status;let F=function(_){const w=Re[_];if(w!==void 0)return u0(w)}(b),v=D.message;F===void 0&&(F=O.INTERNAL,v="Unknown error status: "+b+" with message "+D.message),R=!0,C.Ko(new H(F,v)),m.close()}else B(Ke,`RPC '${e}' stream ${i} received:`,E),C.Uo(E)}}),N(l,Cv.STAT_EVENT,L=>{L.stat===hh.PROXY?B(Ke,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===hh.NOPROXY&&B(Ke,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.$o()},0),C}}function lc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t){return new DR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="PersistentStream";class S0{constructor(e,n,r,i,s,o,l,u){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new I0(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===n&&this.V_(r,i)},r=>{e(()=>{const i=new H(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return B(vg,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(B(vg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kC extends S0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=LR(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Kt(o.readTime):Q.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Eh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=mh(u)?{documents:FR(s,u)}:{query:UR(s,u).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=d0(s,o.resumeToken);const h=yh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=fl(s,o.snapshotVersion.toTimestamp());const h=yh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=zR(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Eh(this.serializer),n.removeTarget=e,this.I_(n)}}class NC extends S0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return oe(!!e.streamToken),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=bR(e.writeResults,e.commitTime),r=Kt(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Eh(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>MR(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{}class DC extends xC{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new H(O.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.bo(e,_h(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(O.UNKNOWN,s.toString())})}Co(e,n,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,_h(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(O.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class VC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(wn(n),this.N_=!1):B("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="RemoteStore";class OC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(o=>{r.enqueueAndForget(async()=>{Hr(this)&&(B(br,"Restarting streams for network reachability change."),await async function(u){const h=X(u);h.W_.add(4),await vo(h),h.j_.set("Unknown"),h.W_.delete(4),await Yl(h)}(this))})}),this.j_=new VC(r,i)}}async function Yl(t){if(Hr(t))for(const e of t.G_)await e(!0)}async function vo(t){for(const e of t.G_)await e(!1)}function A0(t,e){const n=X(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),$d(n)?Bd(n):qi(n).c_()&&zd(n,e))}function jd(t,e){const n=X(t),r=qi(n);n.U_.delete(e),r.c_()&&R0(n,e),n.U_.size===0&&(r.c_()?r.P_():Hr(n)&&n.j_.set("Unknown"))}function zd(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qi(t).y_(e)}function R0(t,e){t.H_.Ne(e),qi(t).w_(e)}function Bd(t){t.H_=new PR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),qi(t).start(),t.j_.B_()}function $d(t){return Hr(t)&&!qi(t).u_()&&t.U_.size>0}function Hr(t){return X(t).W_.size===0}function C0(t){t.H_=void 0}async function LC(t){t.j_.set("Online")}async function MC(t){t.U_.forEach((e,n)=>{zd(t,e)})}async function bC(t,e){C0(t),$d(t)?(t.j_.q_(e),Bd(t)):t.j_.set("Unknown")}async function FC(t,e,n){if(t.j_.set("Online"),e instanceof h0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.U_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.U_.delete(l),i.H_.removeTarget(l))}(t,e)}catch(r){B(br,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ml(t,r)}else if(e instanceof Pa?t.H_.We(e):e instanceof c0?t.H_.Ze(e):t.H_.je(e),!n.isEqual(Q.min()))try{const r=await T0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.H_.ot(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.U_.get(h);f&&s.U_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.U_.get(u);if(!f)return;s.U_.set(u,f.withResumeToken(Be.EMPTY_BYTE_STRING,f.snapshotVersion)),R0(s,u);const m=new jn(f.target,u,h,f.sequenceNumber);zd(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){B(br,"Failed to raise snapshot:",r),await ml(t,r)}}async function ml(t,e,n){if(!Hi(e))throw e;t.W_.add(1),await vo(t),t.j_.set("Offline"),n||(n=()=>T0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(br,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Yl(t)})}function P0(t,e){return e().catch(n=>ml(t,n,e))}async function Jl(t){const e=X(t),n=ar(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:Cd;for(;UC(e);)try{const i=await EC(e.localStore,r);if(i===null){e.K_.length===0&&n.P_();break}r=i.batchId,jC(e,i)}catch(i){await ml(e,i)}k0(e)&&N0(e)}function UC(t){return Hr(t)&&t.K_.length<10}function jC(t,e){t.K_.push(e);const n=ar(t);n.c_()&&n.b_&&n.S_(e.mutations)}function k0(t){return Hr(t)&&!ar(t).u_()&&t.K_.length>0}function N0(t){ar(t).start()}async function zC(t){ar(t).C_()}async function BC(t){const e=ar(t);for(const n of t.K_)e.S_(n.mutations)}async function $C(t,e,n){const r=t.K_.shift(),i=Vd.from(r,e,n);await P0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Jl(t)}async function HC(t,e){e&&ar(t).b_&&await async function(r,i){if(function(o){return AR(o)&&o!==O.ABORTED}(i.code)){const s=r.K_.shift();ar(r).h_(),await P0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Jl(r)}}(t,e),k0(t)&&N0(t)}async function Eg(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),B(br,"RemoteStore received new credentials");const r=Hr(n);n.W_.add(3),await vo(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Yl(n)}async function WC(t,e){const n=X(t);e?(n.W_.delete(2),await Yl(n)):e||(n.W_.add(2),await vo(n),n.j_.set("Unknown"))}function qi(t){return t.J_||(t.J_=function(n,r,i){const s=X(n);return s.M_(),new kC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:LC.bind(null,t),No:MC.bind(null,t),Lo:bC.bind(null,t),p_:FC.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),$d(t)?Bd(t):t.j_.set("Unknown")):(await t.J_.stop(),C0(t))})),t.J_}function ar(t){return t.Y_||(t.Y_=function(n,r,i){const s=X(n);return s.M_(),new NC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:zC.bind(null,t),Lo:HC.bind(null,t),D_:BC.bind(null,t),v_:$C.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Jl(t)):(await t.Y_.stop(),t.K_.length>0&&(B(br,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Hd(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wd(t,e){if(wn("AsyncQueue",`${e}: ${t}`),Hi(t))return new H(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{static emptySet(e){return new _i(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=ws(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.Z_=new Ee(W.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):q():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Li{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Li(e,n,_i.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class GC{constructor(){this.queries=Tg(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=Tg(),s.forEach((o,l)=>{for(const u of l.ta)u.onError(r)})})(this,new H(O.ABORTED,"Firestore shutting down"))}}function Tg(){return new Br(t=>Xv(t),Wl)}async function KC(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new qC,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Wd(o,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ta.push(e),e.sa(n.onlineState),s.ea&&e.oa(s.ea)&&qd(n)}async function QC(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ta.indexOf(e);o>=0&&(s.ta.splice(o,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function XC(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ta)l.oa(i)&&(r=!0);o.ea=i}}r&&qd(n)}function YC(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(e)}function qd(t){t.ia.forEach(e=>{e.next()})}var Ih,Ig;(Ig=Ih||(Ih={}))._a="default",Ig.Cache="cache";class JC{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Li(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Li.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Ih.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.key=e}}class D0{constructor(e){this.key=e}}class ZC{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ee(),this.mutatedKeys=ee(),this.ya=Yv(e),this.wa=new _i(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new wg,i=n?n.wa:this.wa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),R=ql(this.query,m)?m:null,C=!!y&&this.mutatedKeys.has(y.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let L=!1;y&&R?y.data.isEqual(R.data)?C!==N&&(r.track({type:3,doc:R}),L=!0):this.va(y,R)||(r.track({type:2,doc:R}),L=!0,(u&&this.ya(R,u)>0||h&&this.ya(R,h)<0)&&(l=!0)):!y&&R?(r.track({type:0,doc:R}),L=!0):y&&!R&&(r.track({type:1,doc:y}),L=!0,(u||h)&&(l=!0)),L&&(R?(o=o.add(R),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{wa:o,Da:r,ls:l,mutatedKeys:s}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((f,m)=>function(R,C){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return N(R)-N(C)}(f.type,m.type)||this.ya(f.doc,m.doc)),this.Ca(r),i=i!=null&&i;const l=n&&!i?this.Fa():[],u=this.pa.size===0&&this.current&&!i?1:0,h=u!==this.ga;return this.ga=u,o.length!==0||h?{snapshot:new Li(this.query,e.wa,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new wg,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ee(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new D0(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new x0(r))}),n}Oa(e){this.fa=e.gs,this.pa=ee();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return Li.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Gd="SyncEngine";class eP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tP{constructor(e){this.key=e,this.Ba=!1}}class nP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Br(l=>Xv(l),Wl),this.qa=new Map,this.Qa=new Set,this.$a=new Ee(W.comparator),this.Ka=new Map,this.Ua=new Md,this.Wa={},this.Ga=new Map,this.za=Oi.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function rP(t,e,n=!0){const r=F0(t);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await V0(r,e,n,!0),i}async function iP(t,e){const n=F0(t);await V0(n,e,!0,!1)}async function V0(t,e,n,r){const i=await wC(t.localStore,Gt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await sP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&A0(t.remoteStore,i),l}async function sP(t,e,n,r,i){t.Ha=(m,y,R)=>async function(N,L,I,E){let S=L.view.Sa(I);S.ls&&(S=await mg(N.localStore,L.query,!1).then(({documents:v})=>L.view.Sa(v,S)));const D=E&&E.targetChanges.get(L.targetId),b=E&&E.targetMismatches.get(L.targetId)!=null,F=L.view.applyChanges(S,N.isPrimaryClient,D,b);return Ag(N,L.targetId,F.Ma),F.snapshot}(t,m,y,R);const s=await mg(t.localStore,e,!0),o=new ZC(e,s.gs),l=o.Sa(s.documents),u=_o.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Ag(t,n,h.Ma);const f=new eP(e,n,o);return t.ka.set(e,f),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),h.snapshot}async function oP(t,e,n){const r=X(t),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(o=>!Wl(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&jd(r.remoteStore,i.targetId),Sh(r,i.targetId)}).catch($i)):(Sh(r,i.targetId),await wh(r.localStore,i.targetId,!0))}async function aP(t,e){const n=X(t),r=n.ka.get(e),i=n.qa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),jd(n.remoteStore,r.targetId))}async function lP(t,e,n){const r=mP(t);try{const i=await function(o,l){const u=X(o),h=ke.now(),f=l.reduce((R,C)=>R.add(C.key),ee());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=Tn(),N=ee();return u.ds.getEntries(R,f).next(L=>{C=L,C.forEach((I,E)=>{E.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,C)).next(L=>{m=L;const I=[];for(const E of l){const S=ER(E,m.get(E.key).overlayedDocument);S!=null&&I.push(new $r(E.key,S,zv(S.value.mapValue),mn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,I,l)}).next(L=>{y=L;const I=L.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(R,L.batchId,I)})}).then(()=>({batchId:y.batchId,changes:Zv(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Wa[o.currentUser.toKey()];h||(h=new Ee(te)),h=h.insert(l,u),o.Wa[o.currentUser.toKey()]=h}(r,i.batchId,n),await Eo(r,i.changes),await Jl(r.remoteStore)}catch(i){const s=Wd(i,"Failed to persist write");n.reject(s)}}async function O0(t,e){const n=X(t);try{const r=await _C(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ka.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?oe(o.Ba):i.removedDocuments.size>0&&(oe(o.Ba),o.Ba=!1))}),await Eo(n,r,e)}catch(r){await $i(r)}}function Sg(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ka.forEach((s,o)=>{const l=o.view.sa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.ta)y.sa(l)&&(h=!0)}),h&&qd(u)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uP(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ka.get(e),s=i&&i.key;if(s){let o=new Ee(W.comparator);o=o.insert(s,Ye.newNoDocument(s,Q.min()));const l=ee().add(s),u=new Ql(Q.min(),new Map,new Ee(te),o,l);await O0(r,u),r.$a=r.$a.remove(s),r.Ka.delete(e),Kd(r)}else await wh(r.localStore,e,!1).then(()=>Sh(r,e,n)).catch($i)}async function cP(t,e){const n=X(t),r=e.batch.batchId;try{const i=await yC(n.localStore,e);M0(n,r,null),L0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Eo(n,i)}catch(i){await $i(i)}}async function hP(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(oe(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);M0(r,e,n),L0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Eo(r,i)}catch(i){await $i(i)}}function L0(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function M0(t,e,n){const r=X(t);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function Sh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||b0(t,r)})}function b0(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(jd(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),Kd(t))}function Ag(t,e,n){for(const r of n)r instanceof x0?(t.Ua.addReference(r.key,e),dP(t,r)):r instanceof D0?(B(Gd,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||b0(t,r.key)):q()}function dP(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(B(Gd,"New document in limbo: "+n),t.Qa.add(r),Kd(t))}function Kd(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new W(fe.fromString(e)),r=t.za.next();t.Ka.set(r,new tP(n)),t.$a=t.$a.insert(n,r),A0(t.remoteStore,new jn(Gt(Kv(n.path)),r,"TargetPurposeLimboResolution",Bl.ae))}}async function Eo(t,e,n){const r=X(t),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach((l,u)=>{o.push(r.Ha(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Fd.Yi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.La.p_(i),await async function(u,h){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(h,y=>V.forEach(y.Hi,R=>f.persistence.referenceDelegate.addReference(m,y.targetId,R)).next(()=>V.forEach(y.Ji,R=>f.persistence.referenceDelegate.removeReference(m,y.targetId,R)))))}catch(m){if(!Hi(m))throw m;B(Ud,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const R=f.Ts.get(y),C=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(C);f.Ts=f.Ts.insert(y,N)}}}(r.localStore,s))}async function fP(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){B(Gd,"User change. New user:",e.toKey());const r=await w0(n.localStore,e);n.currentUser=e,function(s,o){s.Ga.forEach(l=>{l.forEach(u=>{u.reject(new H(O.CANCELLED,o))})}),s.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Eo(n,r.Rs)}}function pP(t,e){const n=X(t),r=n.Ka.get(e);if(r&&r.Ba)return ee().add(r.key);{let i=ee();const s=n.qa.get(e);if(!s)return i;for(const o of s){const l=n.ka.get(o);i=i.unionWith(l.view.ba)}return i}}function F0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=O0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uP.bind(null,e),e.La.p_=XC.bind(null,e.eventManager),e.La.Ja=YC.bind(null,e.eventManager),e}function mP(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hP.bind(null,e),e}class gl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xl(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return gC(this.persistence,new fC,e.initialUser,this.serializer)}Xa(e){return new E0(bd.ri,this.serializer)}Za(e){return new IC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gl.provider={build:()=>new gl};class gP extends gl{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){oe(this.persistence.referenceDelegate instanceof pl);const r=this.persistence.referenceDelegate.garbageCollector;return new JR(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new E0(r=>pl.ri(r,n),this.serializer)}}class Ah{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fP.bind(null,this.syncEngine),await WC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new GC}()}createDatastore(e){const n=Xl(e.databaseInfo.databaseId),r=function(s){return new PC(s)}(e.databaseInfo);return function(s,o,l,u){return new DC(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new OC(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Sg(this.syncEngine,n,0),function(){return _g.D()?new _g:new SC}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new nP(i,s,o,l,u,h);return f&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);B(br,"RemoteStore shutting down."),s.W_.add(5),await vo(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ah.provider={build:()=>new Ah};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="FirestoreClient";class _P{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Qe.UNAUTHENTICATED,this.clientId=xv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B(lr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(lr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uc(t,e){t.asyncQueue.verifyOperationInProgress(),B(lr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await w0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Rg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vP(t);B(lr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Eg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Eg(e.remoteStore,i)),t._onlineComponents=e}async function vP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(lr,"Using user provided OfflineComponentProvider");try{await uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ni("Error using user provided cache. Falling back to memory cache: "+n),await uc(t,new gl)}}else B(lr,"Using default OfflineComponentProvider"),await uc(t,new gP(void 0));return t._offlineComponents}async function U0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(lr,"Using user provided OnlineComponentProvider"),await Rg(t,t._uninitializedComponentsProvider._online)):(B(lr,"Using default OnlineComponentProvider"),await Rg(t,new Ah))),t._onlineComponents}function EP(t){return U0(t).then(e=>e.syncEngine)}async function wP(t){const e=await U0(t),n=e.eventManager;return n.onListen=rP.bind(null,e.syncEngine),n.onUnlisten=oP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=iP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=aP.bind(null,e.syncEngine),n}function TP(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new yP({next:y=>{f.su(),o.enqueueAndForget(()=>QC(s,m)),y.fromCache&&u.source==="server"?h.reject(new H(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new JC(l,f,{includeMetadataChanges:!0,Ta:!0});return KC(s,m)}(await wP(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t,e,n){if(!n)throw new H(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IP(t,e,n,r){if(e===!0&&r===!0)throw new H(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pg(t){if(!W.isDocumentKey(t))throw new H(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kg(t){if(W.isDocumentKey(t))throw new H(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function yl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zl(t);throw new H(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="firestore.googleapis.com",Ng=!0;class xg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=B0,this.ssl=Ng}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Ng;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=v0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<XR)throw new H(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=j0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class eu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new CA;switch(r.type){case"firstParty":return new xA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Cg.get(n);r&&(B("ComponentProvider","Removing Datastore"),Cg.delete(n),r.terminate())}(this),Promise.resolve()}}function SP(t,e,n,r={}){var i;const s=(t=yl(t,eu))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;s.host!==B0&&s.host!==l&&Ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},s),{host:l,ssl:!1,emulatorOptions:r});if(!Or(u,o)&&(t._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Qe.MOCK_USER;else{h=nS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new H(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Qe(m)}t._authCredentials=new PA(new Nv(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dr(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class er extends dr{constructor(e,n,r){super(e,n,Kv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new W(e))}withConverter(e){return new er(this.firestore,e,this._path)}}function Qd(t,e,...n){if(t=dt(t),z0("collection","path",e),t instanceof eu){const r=fe.fromString(e,...n);return kg(r),new er(t,null,r)}{if(!(t instanceof Rt||t instanceof er))throw new H(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return kg(r),new er(t.firestore,null,r)}}function AP(t,e,...n){if(t=dt(t),arguments.length===1&&(e=xv.newId()),z0("doc","path",e),t instanceof eu){const r=fe.fromString(e,...n);return Pg(r),new Rt(t,null,new W(r))}{if(!(t instanceof Rt||t instanceof er))throw new H(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Pg(r),new Rt(t.firestore,t instanceof er?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="AsyncQueue";class Vg{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new I0(this,"async_queue_retry"),this.bu=()=>{const r=lc();r&&B(Dg,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=lc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Zn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Hi(e))throw e;B(Dg,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const i=Hd.createAndSchedule(this,e,n,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&q()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Xd extends eu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Vg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vg(e),this._firestoreClient=void 0,await e}}}function RP(t,e){const n=typeof t=="object"?t:wv(),r=typeof t=="string"?t:al,i=Ad(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=eS("firestore");s&&SP(i,...s)}return i}function $0(t){if(t._terminated)throw new H(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CP(t),t._firestoreClient}function CP(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new WA(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,j0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new _P(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mi(Be.fromBase64String(e))}catch(n){throw new H(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mi(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=/^__.*__$/;class kP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $r(e,this.data,this.fieldMask,n,this.fieldTransforms):new yo(e,this.data,n,this.fieldTransforms)}}function W0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class ef{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return _l(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(W0(this.Lu)&&PP.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class NP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xl(e)}ju(e,n,r,i=!1){return new ef({Lu:e,methodName:n,zu:r,path:Ue.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function q0(t){const e=t._freezeSettings(),n=Xl(t._databaseId);return new NP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xP(t,e,n,r,i,s={}){const o=t.ju(s.merge||s.mergeFields?2:0,e,n,i);Q0("Data must be an object, but it was:",o,r);const l=G0(r,o);let u,h;if(s.merge)u=new Lt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=VP(e,m,n);if(!o.contains(y))throw new H(O.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);LP(f,y)||f.push(y)}u=new Lt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new kP(new It(l),u,h)}function DP(t,e,n,r=!1){return tf(n,t.ju(r?4:3,e))}function tf(t,e){if(K0(t=dt(t)))return Q0("Unsupported field value:",e,t),G0(t,e);if(t instanceof H0)return function(r,i){if(!W0(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=tf(l,i.Uu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:fl(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fl(i.serializer,s)}}if(r instanceof Jd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mi)return{bytesValue:d0(i.serializer,r._byteString)};if(r instanceof Rt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ld(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Zd)return function(o,l){return{mapValue:{fields:{[Uv]:{stringValue:jv},[ll]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Wu("VectorValues must only contain numeric values.");return Dd(l.serializer,h)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${Zl(r)}`)}(t,e)}function G0(t,e){const n={};return Vv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(r,i)=>{const s=tf(i,e.qu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function K0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Jd||t instanceof Mi||t instanceof Rt||t instanceof H0||t instanceof Zd)}function Q0(t,e,n){if(!K0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Zl(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function VP(t,e,n){if((e=dt(e))instanceof Yd)return e._internalPath;if(typeof e=="string")return X0(t,e);throw _l("Field path arguments must be of type string or ",t,!1,void 0,n)}const OP=new RegExp("[~\\*/\\[\\]]");function X0(t,e,n){if(e.search(OP)>=0)throw _l(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yd(...e.split("."))._internalPath}catch{throw _l(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _l(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(O.INVALID_ARGUMENT,l+t+u)}function LP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MP extends Y0{data(){return super.data()}}function tu(t,e){return typeof e=="string"?X0(t,e):e instanceof Yd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nf{}class rf extends nf{}function J0(t,e,...n){let r=[];e instanceof nf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof sf).length,l=s.filter(u=>u instanceof nu).length;if(o>1||o>0&&l>0)throw new H(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class nu extends rf{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new nu(e,n,r)}_apply(e){const n=this._parse(e);return eE(e._query,n),new dr(e.firestore,e.converter,gh(e._query,n))}_parse(e){const n=q0(e.firestore);return function(s,o,l,u,h,f,m){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new H(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Lg(m,f);const C=[];for(const N of m)C.push(Og(u,s,N));y={arrayValue:{values:C}}}else y=Og(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Lg(m,f),y=DP(l,o,m,f==="in"||f==="not-in");return Pe.create(h,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function FP(t,e,n){const r=e,i=tu("where",t);return nu._create(i,r,n)}class sf extends nf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new sf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)eE(o,u),o=gh(o,u)}(e._query,n),new dr(e.firestore,e.converter,gh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class of extends rf{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new of(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new H(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new H(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new so(s,o)}(e._query,this._field,this._direction);return new dr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Wi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Z0(t,e="asc"){const n=e,r=tu("orderBy",t);return of._create(r,n)}class af extends rf{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new af(e,n,r)}_apply(e){return new dr(e.firestore,e.converter,cl(e._query,this._limit,this._limitType))}}function UP(t){return af._create("limit",t,"F")}function Og(t,e,n){if(typeof(n=dt(n))=="string"){if(n==="")throw new H(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qv(e)&&n.indexOf("/")!==-1)throw new H(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!W.isDocumentKey(r))throw new H(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xm(t,new W(r))}if(n instanceof Rt)return Xm(t,n._key);throw new H(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zl(n)}.`)}function Lg(t,e){if(!Array.isArray(t)||t.length===0)throw new H(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function eE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class jP{convertValue(e,n="none"){switch(or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[ll].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Se(o.doubleValue));return new Zd(s)}convertGeoPoint(e){return new Jd(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(no(e));default:return null}}convertTimestamp(e){const n=ir(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);oe(_0(r));const i=new ro(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class BP extends Y0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(tu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ka extends BP{data(e={}){return super.data(e)}}class $P{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ca(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ka(this._firestore,this._userDataWriter,r.key,r,new ca(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ka(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ca(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ka(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ca(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:HP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function HP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}class WP extends jP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function tE(t){t=yl(t,dr);const e=yl(t.firestore,Xd),n=$0(e),r=new WP(e);return bP(t._query),TP(n,t._query).then(i=>new $P(e,r,t,i))}function qP(t,e){const n=yl(t.firestore,Xd),r=AP(t),i=zP(t.converter,e);return GP(n,[xP(q0(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,mn.exists(!1))]).then(()=>r)}function GP(t,e){return function(r,i){const s=new Zn;return r.asyncQueue.enqueueAndForget(async()=>lP(await EP(r),i,s)),s.promise}($0(t),e)}(function(e,n=!0){(function(i){Bi=i})(zi),ki(new Lr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Xd(new kA(r.getProvider("auth-internal")),new DA(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ro(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Yn(Um,jm,e),Yn(Um,jm,"esm2017")})();var KP="firebase",QP="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn(KP,QP,"app");function lf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XP=nE,rE=new mo("auth","Firebase",nE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new Id("@firebase/auth");function YP(t,...e){vl.logLevel<=Z.WARN&&vl.warn(`Auth (${zi}): ${t}`,...e)}function Na(t,...e){vl.logLevel<=Z.ERROR&&vl.error(`Auth (${zi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw cf(t,...e)}function Ft(t,...e){return cf(t,...e)}function uf(t,e,n){const r=Object.assign(Object.assign({},XP()),{[e]:n});return new mo("auth","Firebase",r).create(e,{appName:t.name})}function Pr(t){return uf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function JP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),uf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rE.create(t,...e)}function G(t,e,...n){if(!t)throw cf(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Na(e),new Error(e)}function In(t,e){t||hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZP(){return Mg()==="http:"||Mg()==="https:"}function Mg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZP()||oS()||"connection"in navigator)?navigator.onLine:!0}function t1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=rS()||aS()}get(){return e1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=new wo(3e4,6e4);function df(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gi(t,e,n,r,i={}){return sE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=go(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return sS()||(h.referrerPolicy="no-referrer"),iE.fetch()(oE(t,t.config.apiHost,n,l),h)})}async function sE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},n1),e);try{const i=new s1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ha(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ha(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ha(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ha(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw uf(t,f,h);Yt(t,f)}}catch(i){if(i instanceof An)throw i;Yt(t,"network-request-failed",{message:String(i)})}}async function i1(t,e,n,r,i={}){const s=await Gi(t,e,n,r,i);return"mfaPendingCredential"in s&&Yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function oE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?hf(t.config,i):`${t.config.apiScheme}://${i}`}class s1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ft(this.auth,"network-request-failed")),r1.get())})}}function ha(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ft(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(t,e){return Gi(t,"POST","/v1/accounts:delete",e)}async function aE(t,e){return Gi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function a1(t,e=!1){const n=dt(t),r=await n.getIdToken(e),i=ff(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ms(cc(i.auth_time)),issuedAtTime:Ms(cc(i.iat)),expirationTime:Ms(cc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cc(t){return Number(t)*1e3}function ff(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Na("JWT malformed, contained fewer than 3 sections"),null;try{const i=pv(n);return i?JSON.parse(i):(Na("Failed to decode base64 JWT payload"),null)}catch(i){return Na("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bg(t){const e=ff(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&l1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function l1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(t){var e;const n=t.auth,r=await t.getIdToken(),i=await lo(t,aE(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?lE(s.providerUserInfo):[],l=h1(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ch(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function c1(t){const e=dt(t);await El(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function h1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lE(t){return t.map(e=>{var{providerId:n}=e,r=lf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(t,e){const n=await sE(t,{},async()=>{const r=go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=oE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",iE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function f1(t,e){return Gi(t,"POST","/v2/accounts:revokeToken",df(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=bg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await d1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=lf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new u1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ch(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await lo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return a1(this,e)}reload(){return c1(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await El(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Pr(this.auth));const e=await this.getIdToken();return await lo(this,o1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:D,isAnonymous:b,providerData:F,stsTokenManager:v}=n;G(S&&v,e,"internal-error");const g=vi.fromJSON(this.name,v);G(typeof S=="string",e,"internal-error"),Nn(m,e.name),Nn(y,e.name),G(typeof D=="boolean",e,"internal-error"),G(typeof b=="boolean",e,"internal-error"),Nn(R,e.name),Nn(C,e.name),Nn(N,e.name),Nn(L,e.name),Nn(I,e.name),Nn(E,e.name);const _=new dn({uid:S,auth:e,email:y,emailVerified:D,displayName:m,isAnonymous:b,photoURL:C,phoneNumber:R,tenantId:N,stsTokenManager:g,createdAt:I,lastLoginAt:E});return F&&Array.isArray(F)&&(_.providerData=F.map(w=>Object.assign({},w))),L&&(_._redirectEventId=L),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new vi;i.updateFromServerResponse(n);const s=new dn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await El(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?lE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new vi;l.updateFromIdToken(r);const u=new dn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ch(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=new Map;function fn(t){In(t instanceof Function,"Expected a class definition");let e=Fg.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uE.type="NONE";const Ug=uE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ei{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xa(this.userKey,i.apiKey,s),this.fullPersistenceKey=xa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ei(fn(Ug),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||fn(Ug);const o=xa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=dn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ei(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ei(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mE(e))return"Blackberry";if(gE(e))return"Webos";if(hE(e))return"Safari";if((e.includes("chrome/")||dE(e))&&!e.includes("edge/"))return"Chrome";if(pE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cE(t=Ze()){return/firefox\//i.test(t)}function hE(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dE(t=Ze()){return/crios\//i.test(t)}function fE(t=Ze()){return/iemobile/i.test(t)}function pE(t=Ze()){return/android/i.test(t)}function mE(t=Ze()){return/blackberry/i.test(t)}function gE(t=Ze()){return/webos/i.test(t)}function pf(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function p1(t=Ze()){var e;return pf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function m1(){return lS()&&document.documentMode===10}function yE(t=Ze()){return pf(t)||pE(t)||gE(t)||mE(t)||/windows phone/i.test(t)||fE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t,e=[]){let n;switch(t){case"Browser":n=jg(Ze());break;case"Worker":n=`${jg(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(t,e={}){return Gi(t,"GET","/v2/passwordPolicy",df(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=6;class v1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:_1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zg(this),this.idTokenSubscription=new zg(this),this.beforeStateQueue=new g1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ei.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await aE(this,{idToken:e}),r=await dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await El(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(Pr(this));const n=e?dt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(Pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await y1(this),n=new v1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await f1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ei.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_E(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&YP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ru(t){return dt(t)}class zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=gS(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function w1(t){mf=t}function T1(t){return mf.loadJS(t)}function I1(){return mf.gapiScript}function S1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t,e){const n=Ad(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Or(s,e??{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function R1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function C1(t,e,n){const r=ru(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=vE(e),{host:o,port:l}=P1(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(Or(h,r.config.emulator)&&Or(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,k1()}function vE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function P1(t){const e=vE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Bg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Bg(o)}}}function Bg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function k1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t,e){return i1(t,"POST","/v1/accounts:signInWithIdp",df(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1="http://localhost";class Fr extends EE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=lf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wi(e,n)}buildRequest(){const e={requestUri:N1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=go(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends gf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends To{constructor(){super("facebook.com")}static credential(e){return Fr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends To{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends To{constructor(){super("github.com")}static credential(e){return Fr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends To{constructor(){super("twitter.com")}static credential(e,n){return Fr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dn._fromIdTokenResponse(e,r,i),o=$g(r);return new bi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$g(r);return new bi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $g(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends An{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wl(e,n,r,i)}}function wE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wl._fromErrorAndOperation(t,s,e,r):s})}async function x1(t,e,n=!1){const r=await lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(Pr(r));const i="reauthenticate";try{const s=await lo(t,wE(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=ff(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),bi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(t,e,n=!1){if(Ot(t.app))return Promise.reject(Pr(t));const r="signIn",i=await wE(t,r,e),s=await bi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function O1(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function L1(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function M1(t,e,n,r){return dt(t).onAuthStateChanged(e,n,r)}function b1(t){return dt(t).signOut()}const Tl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tl,"1"),this.storage.removeItem(Tl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=1e3,U1=10;class IE extends TE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);m1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,U1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},F1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}IE.type="LOCAL";const j1=IE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE extends TE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SE.type="SESSION";const AE=SE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new iu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await z1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}iu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=yf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function $1(t){Qt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function H1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function W1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function q1(){return RE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="firebaseLocalStorageDb",G1=1,Il="firebaseLocalStorage",PE="fbase_key";class Io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function su(t,e){return t.transaction([Il],e?"readwrite":"readonly").objectStore(Il)}function K1(){const t=indexedDB.deleteDatabase(CE);return new Io(t).toPromise()}function Ph(){const t=indexedDB.open(CE,G1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Il,{keyPath:PE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Il)?e(r):(r.close(),await K1(),e(await Ph()))})})}async function Hg(t,e,n){const r=su(t,!0).put({[PE]:e,value:n});return new Io(r).toPromise()}async function Q1(t,e){const n=su(t,!1).get(e),r=await new Io(n).toPromise();return r===void 0?null:r.value}function Wg(t,e){const n=su(t,!0).delete(e);return new Io(n).toPromise()}const X1=800,Y1=3;class kE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ph(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Y1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return RE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=iu._getInstance(q1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await H1(),!this.activeServiceWorker)return;this.sender=new B1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||W1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ph();return await Hg(e,Tl,"1"),await Wg(e,Tl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Q1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=su(i,!1).getAll();return new Io(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kE.type="LOCAL";const J1=kE;new wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t,e){return e?fn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends EE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Z1(t){return V1(t.auth,new _f(t),t.bypassAuthState)}function ek(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),D1(n,new _f(t),t.bypassAuthState)}async function tk(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),x1(n,new _f(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Z1;case"linkViaPopup":case"linkViaRedirect":return tk;case"reauthViaPopup":case"reauthViaRedirect":return ek;default:Yt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new wo(2e3,1e4);async function rk(t,e,n){if(Ot(t.app))return Promise.reject(Ft(t,"operation-not-supported-in-this-environment"));const r=ru(t);JP(t,e,gf);const i=NE(r,n);return new Ar(r,"signInViaPopup",e,i).executeNotNull()}class Ar extends xE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ar.currentPopupAction&&Ar.currentPopupAction.cancel(),Ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=yf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nk.get())};e()}}Ar.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="pendingRedirect",Da=new Map;class sk extends xE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Da.get(this.auth._key());if(!e){try{const r=await ok(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Da.set(this.auth._key(),e)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ok(t,e){const n=uk(e),r=lk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ak(t,e){Da.set(t._key(),e)}function lk(t){return fn(t._redirectPersistence)}function uk(t){return xa(ik,t.config.apiKey,t.name)}async function ck(t,e,n=!1){if(Ot(t.app))return Promise.reject(Pr(t));const r=ru(t),i=NE(r,e),o=await new sk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=10*60*1e3;class dk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!DE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hk&&this.cachedEventUids.clear(),this.cachedEventUids.has(qg(e))}saveEventToCache(e){this.cachedEventUids.add(qg(e)),this.lastProcessedEventTime=Date.now()}}function qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function DE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return DE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(t,e={}){return Gi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gk=/^https?/;async function yk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pk(t);for(const n of e)try{if(_k(n))return}catch{}Yt(t,"unauthorized-domain")}function _k(t){const e=Rh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gk.test(n))return!1;if(mk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=new wo(3e4,6e4);function Gg(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ek(t){return new Promise((e,n)=>{var r,i,s;function o(){Gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gg(),n(Ft(t,"network-request-failed"))},timeout:vk.get()})}if(!((i=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qt().gapi)===null||s===void 0)&&s.load)o();else{const l=S1("iframefcb");return Qt()[l]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},T1(`${I1()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Va=null,e})}let Va=null;function wk(t){return Va=Va||Ek(t),Va}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=new wo(5e3,15e3),Ik="__/auth/iframe",Sk="emulator/auth/iframe",Ak={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ck(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hf(e,Sk):`https://${t.config.authDomain}/${Ik}`,r={apiKey:e.apiKey,appName:t.name,v:zi},i=Rk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${go(r).slice(1)}`}async function Pk(t){const e=await wk(t),n=Qt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:Ck(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ak,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),l=Qt().setTimeout(()=>{s(o)},Tk.get());function u(){Qt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nk=500,xk=600,Dk="_blank",Vk="http://localhost";class Kg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ok(t,e,n,r=Nk,i=xk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},kk),{width:r.toString(),height:i.toString(),top:s,left:o}),h=Ze().toLowerCase();n&&(l=dE(h)?Dk:n),cE(h)&&(e=e||Vk,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[R,C])=>`${y}${R}=${C},`,"");if(p1(h)&&l!=="_self")return Lk(e||"",l),new Kg(null);const m=window.open(e||"",l,f);G(m,t,"popup-blocked");try{m.focus()}catch{}return new Kg(m)}function Lk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk="__/auth/handler",bk="emulator/auth/handler",Fk=encodeURIComponent("fac");async function Qg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zi,eventId:i};if(e instanceof gf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof To){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${Fk}=${encodeURIComponent(u)}`:"";return`${Uk(t)}?${go(l).slice(1)}${h}`}function Uk({config:t}){return t.emulator?hf(t,bk):`https://${t.authDomain}/${Mk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="webStorageSupport";class jk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=AE,this._completeRedirectFn=ck,this._overrideRedirectResult=ak}async _openPopup(e,n,r,i){var s;In((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Qg(e,n,r,Rh(),i);return Ok(e,o,yf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Qg(e,n,r,Rh(),i);return $1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Pk(e),r=new dk(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hc,{type:hc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[hc];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yE()||hE()||pf()}}const zk=jk;var Xg="@firebase/auth",Yg="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hk(t){ki(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_E(t)},h=new E1(r,i,s,u);return R1(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ki(new Lr("auth-internal",e=>{const n=ru(e.getProvider("auth").getImmediate());return(r=>new Bk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(Xg,Yg,$k(t)),Yn(Xg,Yg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=5*60,qk=yv("authIdTokenMaxAge")||Wk;let Jg=null;const Gk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qk)return;const i=n==null?void 0:n.token;Jg!==i&&(Jg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Kk(t=wv()){const e=Ad(t,"auth");if(e.isInitialized())return e.getImmediate();const n=A1(t,{popupRedirectResolver:zk,persistence:[J1,j1,AE]}),r=yv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Gk(s.toString());L1(n,o,()=>o(n.currentUser)),O1(n,l=>o(l))}}const i=mv("auth");return i&&C1(n,`http://${i}`),n}function Qk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}w1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ft("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Qk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hk("Browser");const Xk={apiKey:"AIzaSyDPKc0bSnyWOEQHUD_DlODvwHnkDLejBdE",authDomain:"memory-matching-game-145f8.firebaseapp.com",projectId:"memory-matching-game-145f8",storageBucket:"memory-matching-game-145f8.firebasestorage.app",messagingSenderId:"1567177930",appId:"1:1567177930:web:f340eefaa562a6d4fc8833",measurementId:"G-2DJZR8WWZ3"},VE=Ev(Xk),dc=Kk(VE),vf=RP(VE),Yk=(t,e)=>{const i=Math.max(0,70*(1-(t-30)/90)),s=Math.max(0,30*(1-(e-8)/16));return Math.round(i+s)},Sl="gameRecords",Jk=async(t,e,n,r)=>{try{const i=Yk(n,r),s={userId:t,userEmail:e,time:n,moves:r,score:i,date:new Date};console.log("Saving game record:",s),await qP(Qd(vf,Sl),{...s,date:ke.fromDate(s.date)}),console.log("Game record saved successfully")}catch(i){console.error("Error saving game record:",i)}},Zk=async()=>{try{const t=J0(Qd(vf,Sl),Z0("score","desc"),UP(5));return(await tE(t)).docs.map(n=>({id:n.id,...n.data(),date:n.data().date.toDate()}))}catch(t){return console.error("Error fetching leaderboard:",t),[]}},eN=async t=>{try{if(console.log("Fetching stats for userId:",t),!t)return console.error("Invalid userId provided"),{bestScore:0,bestTime:0,bestMoves:0,totalGames:0};const e=Qd(vf,Sl);console.log("Collection reference:",Sl);const n=J0(e,FP("userId","==",t),Z0("score","desc"));console.log("Executing query...");const r=await tE(n);if(console.log("Query results size:",r.size),r.empty)return console.log("No records found for user:",t),{bestScore:0,bestTime:0,bestMoves:0,totalGames:0};const i=r.docs.map(o=>{const l=o.data();return console.log("Record data:",l),{...l,id:o.id,date:l.date.toDate()}});console.log("Processed records:",i);const s=i[0];return console.log("Best game:",s),{bestScore:s.score,bestTime:s.time,bestMoves:s.moves,totalGames:i.length}}catch(e){return console.error("Error fetching user stats:",e),e instanceof Error&&(console.error("Error details:",e.message),console.error("Error stack:",e.stack)),{bestScore:0,bestTime:0,bestMoves:0,totalGames:0}}},tN=({isDarkMode:t})=>{const[e,n]=re.useState([]),[r,i]=re.useState(!0),s=async()=>{i(!0);const l=await Zk();n(l),i(!1)};re.useEffect(()=>{s()},[]);const o=l=>{const u=Math.floor(l/60),h=l%60;return`${u}:${h.toString().padStart(2,"0")}`};return r?U.jsxs("div",{className:`p-4 rounded-lg shadow-md ${t?"bg-gray-800 text-gray-200":"bg-white text-gray-800"}`,children:[U.jsx("h2",{className:"text-xl font-bold mb-4",children:"Leaderboard"}),U.jsx("p",{children:"Loading..."})]}):U.jsxs("div",{className:`p-4 rounded-lg shadow-md ${t?"bg-gray-800 text-gray-200":"bg-white text-gray-800"}`,children:[U.jsxs("div",{className:"flex justify-between items-center mb-4",children:[U.jsx("h2",{className:"text-xl font-bold",children:"Leaderboard"}),U.jsx("button",{onClick:s,className:`p-2 rounded-lg transition-colors ${t?"bg-gray-700 hover:bg-gray-600 text-gray-200":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`,title:"Refresh leaderboard",children:U.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:U.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})})})]}),e.length===0?U.jsx("p",{children:"No records yet"}):U.jsx("div",{className:"space-y-2",children:e.map((l,u)=>U.jsxs("div",{className:`flex items-center justify-between p-2 rounded ${t?"bg-gray-700":"bg-gray-100"}`,children:[U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsxs("span",{className:`font-bold ${u===0?"text-yellow-500":u===1?"text-gray-400":u===2?"text-amber-600":""}`,children:["#",u+1]}),U.jsx("span",{className:"truncate max-w-[150px]",children:l.userEmail.split("@")[0]})]}),U.jsxs("div",{className:"flex gap-4",children:[U.jsx("span",{children:o(l.time)}),U.jsxs("span",{children:[l.moves," moves"]}),U.jsxs("span",{className:"font-bold",children:[l.score," pts"]})]})]},l.id))})]})},nN=({isDarkMode:t,userId:e})=>{const[n,r]=re.useState({bestScore:0,bestTime:0,bestMoves:0,totalGames:0}),[i,s]=re.useState(!0),o=async()=>{s(!0);try{const u=await eN(e);r(u)}catch(u){console.error("Error fetching user stats:",u)}finally{s(!1)}};re.useEffect(()=>{e&&o()},[e]);const l=u=>{const h=Math.floor(u/60),f=u%60;return`${h}:${f.toString().padStart(2,"0")}`};return i?U.jsxs("div",{className:`p-4 rounded-lg shadow-md ${t?"bg-gray-800 text-gray-200":"bg-white text-gray-800"}`,children:[U.jsxs("div",{className:"flex justify-between items-center mb-4",children:[U.jsx("h2",{className:"text-xl font-bold",children:"Your Best Score"}),U.jsx("div",{className:"w-5 h-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"})]}),U.jsx("div",{className:`p-3 rounded ${t?"bg-gray-700":"bg-gray-100"}`,children:U.jsx("div",{className:"h-24 flex items-center justify-center",children:U.jsx("span",{className:"text-gray-500",children:"Loading stats..."})})})]}):U.jsxs("div",{className:`p-4 rounded-lg shadow-md ${t?"bg-gray-800 text-gray-200":"bg-white text-gray-800"}`,children:[U.jsxs("div",{className:"flex justify-between items-center mb-4",children:[U.jsx("h2",{className:"text-xl font-bold",children:"Your Best Score"}),U.jsx("button",{onClick:o,className:`p-2 rounded-lg transition-colors ${t?"bg-gray-700 hover:bg-gray-600 text-gray-200":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`,title:"Refresh stats",children:U.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:U.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})})})]}),U.jsx("div",{className:"space-y-2",children:U.jsxs("div",{className:`p-3 rounded ${t?"bg-gray-700":"bg-gray-100"}`,children:[U.jsxs("div",{className:"flex justify-between items-center mb-2",children:[U.jsx("span",{children:"Best Score:"}),U.jsxs("span",{className:`font-bold text-lg ${n.bestScore>0?"text-blue-500":""}`,children:[n.bestScore," pts"]})]}),U.jsxs("div",{className:"flex justify-between items-center mb-2",children:[U.jsx("span",{children:"Best Time:"}),U.jsx("span",{className:`font-mono ${n.bestTime>0?"text-blue-500":""}`,children:l(n.bestTime)})]}),U.jsxs("div",{className:"flex justify-between items-center mb-2",children:[U.jsx("span",{children:"Best Moves:"}),U.jsxs("span",{className:n.bestMoves>0?"text-blue-500":"",children:[n.bestMoves," moves"]})]}),U.jsxs("div",{className:"flex justify-between items-center",children:[U.jsx("span",{children:"Total Games:"}),U.jsx("span",{className:n.totalGames>0?"text-blue-500":"",children:n.totalGames})]})]})})]})},Zg=["🌟","🎮","🎨","🎭","🎪","🎯","🎲","🎸"],rN=()=>{const[t,e]=re.useState(!1),[n,r]=re.useState(0),[i,s]=re.useState([]),[o,l]=re.useState(null),[u,h]=re.useState(null),[f,m]=re.useState(!1),y=re.useRef(!1),[R,C]=re.useState(0),N=re.useCallback(()=>{const F=[...Zg,...Zg].sort(()=>Math.random()-.5).map((v,g)=>({id:g,value:v,isFlipped:!1,isMatched:!1}));s(F),l(null),h(null),m(!1),y.current=!1,C(0)},[]);re.useEffect(()=>{N()},[N]);const L=()=>{e(!1),C(0),r(0),l(null),h(null),m(!1),y.current=!1,N()},I=re.useCallback(b=>{!t||y.current||(y.current=!0,e(!1),alert(`Congratulations! You completed the game in ${n} seconds with ${b} moves!`))},[t,n]),E=re.useCallback(()=>{!o||!u||(m(!0),C(b=>{const F=b+1;return o.value===u.value?(s(g=>{const _=g.map(w=>w.id===o.id||w.id===u.id?{...w,isMatched:!0,isFlipped:!0}:w);return _.every(w=>w.isMatched)&&!y.current&&I(F),_}),l(null),h(null),m(!1)):setTimeout(()=>{s(g=>g.map(_=>_.id===o.id||_.id===u.id?{..._,isFlipped:!1}:_)),l(null),h(null),m(!1)},1500),F}))},[o,u,I]);return re.useEffect(()=>{o&&u&&!f&&E()},[o,u,f,E]),[{moves:R,isGameRunning:t,gameTime:n,cards:i},{handleMove:()=>{},handleMatch:()=>{},handleGameComplete:I,handleStartGame:()=>{t?L():(C(0),r(0),e(!0),y.current=!1,N())},setGameTime:r,handleCardClick:b=>{!t||b.isMatched||f||o&&u||o&&b.id===o.id||i[b.id].isFlipped||(s(F=>F.map(v=>v.id===b.id?{...v,isFlipped:!0}:v)),o?h({...b,isFlipped:!0}):l({...b,isFlipped:!0}))}}]},iN=()=>{const[t,e]=re.useState(()=>{const r=localStorage.getItem("darkMode");return r!==null?JSON.parse(r):!0});return re.useEffect(()=>{localStorage.setItem("darkMode",JSON.stringify(t))},[t]),{isDarkMode:t,toggleDarkMode:()=>{e(r=>!r)}}},sN=()=>{const[t,e]=re.useState(null),[n,r]=re.useState(!0);return re.useEffect(()=>{const o=M1(dc,l=>{e(l),r(!1)});return()=>o()},[]),{user:t,loading:n,signInWithGoogle:async()=>{try{const o=new ln;await rk(dc,o)}catch(o){console.error("Error signing in with Google:",o)}},signOutUser:async()=>{try{await b1(dc)}catch(o){console.error("Error signing out:",o)}}}};function oN(){const{isDarkMode:t,toggleDarkMode:e}=iN(),{user:n,signInWithGoogle:r,signOutUser:i}=sN(),[{moves:s,isGameRunning:o,gameTime:l,cards:u},{handleMove:h,handleMatch:f,handleGameComplete:m,handleStartGame:y,setGameTime:R,handleCardClick:C}]=rN(),N=async L=>{n&&await Jk(n.uid,n.email||"",l,L),m(L)};return U.jsx("div",{className:`min-h-screen transition-colors duration-300 ${t?"bg-gray-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0f1729] to-black":"bg-gray-100"}`,children:U.jsxs("div",{className:"container mx-auto px-4 py-8",children:[U.jsx(HI,{isDarkMode:t,onToggleDarkMode:e,user:n,onSignIn:r,onSignOut:i}),U.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[U.jsxs("div",{className:"md:col-span-2",children:[U.jsx($I,{isDarkMode:t,isGameRunning:o,moves:s,onTimeUpdate:R}),U.jsx("div",{className:`rounded-xl shadow-lg p-6 mb-8 transition-colors duration-300 ${t?"bg-gray-800 shadow-[0_0_15px_rgba(255,255,255,0.1)]":"bg-white"}`,children:U.jsx(jI,{isDarkMode:t,cards:u,onCardClick:C,onMove:h,onMatch:f,onGameComplete:N})}),U.jsx(WI,{isDarkMode:t,isGameRunning:o,onStartGame:y})]}),U.jsxs("div",{className:"space-y-6",children:[n&&U.jsx(nN,{isDarkMode:t,userId:n.uid}),U.jsx(tN,{isDarkMode:t})]})]})]})})}const aN=fc.createRoot(document.getElementById("root"));aN.render(U.jsx(Cw.StrictMode,{children:U.jsx(oN,{})}));
