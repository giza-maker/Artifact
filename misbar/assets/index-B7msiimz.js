var ME=Object.defineProperty;var yE=(o,e,i)=>e in o?ME(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var fu=(o,e,i)=>yE(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Qx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Dd={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function EE(){if(O_)return yl;O_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return yl.Fragment=e,yl.jsx=i,yl.jsxs=i,yl}var P_;function bE(){return P_||(P_=1,Dd.exports=EE()),Dd.exports}var Et=bE(),Nd={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function TE(){if(I_)return ve;I_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),S=Symbol.iterator;function b(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,y={};function w(L,et,Mt){this.props=L,this.context=et,this.refs=y,this.updater=Mt||D}w.prototype.isReactComponent={},w.prototype.setState=function(L,et){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,et,"setState")},w.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function O(){}O.prototype=w.prototype;function N(L,et,Mt){this.props=L,this.context=et,this.refs=y,this.updater=Mt||D}var I=N.prototype=new O;I.constructor=N,E(I,w.prototype),I.isPureReactComponent=!0;var U=Array.isArray;function M(){}var A={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function F(L,et,Mt){var At=Mt.ref;return{$$typeof:o,type:L,key:et,ref:At!==void 0?At:null,props:Mt}}function V(L,et){return F(L.type,et,L.props)}function Q(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ut(L){var et={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Mt){return et[Mt]})}var X=/\/+/g;function nt(L,et){return typeof L=="object"&&L!==null&&L.key!=null?ut(""+L.key):et.toString(36)}function q(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(M,M):(L.status="pending",L.then(function(et){L.status==="pending"&&(L.status="fulfilled",L.value=et)},function(et){L.status==="pending"&&(L.status="rejected",L.reason=et)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,et,Mt,At,Rt){var Ht=typeof L;(Ht==="undefined"||Ht==="boolean")&&(L=null);var se=!1;if(L===null)se=!0;else switch(Ht){case"bigint":case"string":case"number":se=!0;break;case"object":switch(L.$$typeof){case o:case e:se=!0;break;case _:return se=L._init,z(se(L._payload),et,Mt,At,Rt)}}if(se)return Rt=Rt(L),se=At===""?"."+nt(L,0):At,U(Rt)?(Mt="",se!=null&&(Mt=se.replace(X,"$&/")+"/"),z(Rt,et,Mt,"",function(Te){return Te})):Rt!=null&&(Q(Rt)&&(Rt=V(Rt,Mt+(Rt.key==null||L&&L.key===Rt.key?"":(""+Rt.key).replace(X,"$&/")+"/")+se)),et.push(Rt)),1;se=0;var Tt=At===""?".":At+":";if(U(L))for(var Xt=0;Xt<L.length;Xt++)At=L[Xt],Ht=Tt+nt(At,Xt),se+=z(At,et,Mt,Ht,Rt);else if(Xt=b(L),typeof Xt=="function")for(L=Xt.call(L),Xt=0;!(At=L.next()).done;)At=At.value,Ht=Tt+nt(At,Xt++),se+=z(At,et,Mt,Ht,Rt);else if(Ht==="object"){if(typeof L.then=="function")return z(q(L),et,Mt,At,Rt);throw et=String(L),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return se}function it(L,et,Mt){if(L==null)return L;var At=[],Rt=0;return z(L,At,"","",function(Ht){return et.call(Mt,Ht,Rt++)}),At}function tt(L){if(L._status===-1){var et=L._result,Mt=et();Mt.then(function(At){(L._status===0||L._status===-1)&&(L._status=1,L._result=At,Mt.status===void 0&&(Mt.status="fulfilled",Mt.value=At))},function(At){(L._status===0||L._status===-1)&&(L._status=2,L._result=At,Mt.status===void 0&&(Mt.status="rejected",Mt.reason=At))}),L._status===-1&&(L._status=0,L._result=Mt)}if(L._status===1)return L._result.default;throw L._result}var lt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function gt(L){var et=A.T,Mt={};Mt.types=et!==null?et.types:null,A.T=Mt;try{var At=L(),Rt=A.S;Rt!==null&&Rt(Mt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(M,lt)}catch(Ht){lt(Ht)}finally{et!==null&&Mt.types!==null&&(et.types=Mt.types),A.T=et}}function kt(L){var et=A.T;if(et!==null){var Mt=et.types;Mt===null?et.types=[L]:Mt.indexOf(L)===-1&&Mt.push(L)}else gt(kt.bind(null,L))}var ae={map:it,forEach:function(L,et,Mt){it(L,function(){et.apply(this,arguments)},Mt)},count:function(L){var et=0;return it(L,function(){et++}),et},toArray:function(L){return it(L,function(et){return et})||[]},only:function(L){if(!Q(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ve.Activity=g,ve.Children=ae,ve.Component=w,ve.Fragment=i,ve.Profiler=l,ve.PureComponent=N,ve.StrictMode=s,ve.Suspense=m,ve.ViewTransition=x,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,ve.__COMPILER_RUNTIME={__proto__:null,c:function(L){return A.H.useMemoCache(L)}},ve.addTransitionType=kt,ve.cache=function(L){return function(){return L.apply(null,arguments)}},ve.cacheSignal=function(){return null},ve.cloneElement=function(L,et,Mt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var At=E({},L.props),Rt=L.key;if(et!=null)for(Ht in et.key!==void 0&&(Rt=""+et.key),et)!H.call(et,Ht)||Ht==="key"||Ht==="__self"||Ht==="__source"||Ht==="ref"&&et.ref===void 0||(At[Ht]=et[Ht]);var Ht=arguments.length-2;if(Ht===1)At.children=Mt;else if(1<Ht){for(var se=Array(Ht),Tt=0;Tt<Ht;Tt++)se[Tt]=arguments[Tt+2];At.children=se}return F(L.type,Rt,At)},ve.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ve.createElement=function(L,et,Mt){var At,Rt={},Ht=null;if(et!=null)for(At in et.key!==void 0&&(Ht=""+et.key),et)H.call(et,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Rt[At]=et[At]);var se=arguments.length-2;if(se===1)Rt.children=Mt;else if(1<se){for(var Tt=Array(se),Xt=0;Xt<se;Xt++)Tt[Xt]=arguments[Xt+2];Rt.children=Tt}if(L&&L.defaultProps)for(At in se=L.defaultProps,se)Rt[At]===void 0&&(Rt[At]=se[At]);return F(L,Ht,Rt)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(L){return{$$typeof:d,render:L}},ve.isValidElement=Q,ve.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:tt}},ve.memo=function(L,et){return{$$typeof:p,type:L,compare:et===void 0?null:et}},ve.startTransition=gt,ve.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},ve.use=function(L){return A.H.use(L)},ve.useActionState=function(L,et,Mt){return A.H.useActionState(L,et,Mt)},ve.useCallback=function(L,et){return A.H.useCallback(L,et)},ve.useContext=function(L){return A.H.useContext(L)},ve.useDebugValue=function(){},ve.useDeferredValue=function(L,et){return A.H.useDeferredValue(L,et)},ve.useEffect=function(L,et){return A.H.useEffect(L,et)},ve.useEffectEvent=function(L){return A.H.useEffectEvent(L)},ve.useId=function(){return A.H.useId()},ve.useImperativeHandle=function(L,et,Mt){return A.H.useImperativeHandle(L,et,Mt)},ve.useInsertionEffect=function(L,et){return A.H.useInsertionEffect(L,et)},ve.useLayoutEffect=function(L,et){return A.H.useLayoutEffect(L,et)},ve.useMemo=function(L,et){return A.H.useMemo(L,et)},ve.useOptimistic=function(L,et){return A.H.useOptimistic(L,et)},ve.useReducer=function(L,et,Mt){return A.H.useReducer(L,et,Mt)},ve.useRef=function(L){return A.H.useRef(L)},ve.useState=function(L){return A.H.useState(L)},ve.useSyncExternalStore=function(L,et,Mt){return A.H.useSyncExternalStore(L,et,Mt)},ve.useTransition=function(){return A.H.useTransition()},ve.version="19.3.1",ve}var z_;function sm(){return z_||(z_=1,Nd.exports=TE()),Nd.exports}var gn=sm();const AE=Qx(gn);var Ld={exports:{}},El={},Ud={exports:{}},Od={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function RE(){return B_||(B_=1,(function(o){function e(q,z){var it=q.length;q.push(z);t:for(;0<it;){var tt=it-1>>>1,lt=q[tt];if(0<l(lt,z))q[tt]=z,q[it]=lt,it=tt;else break t}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var z=q[0],it=q.pop();if(it!==z){q[0]=it;t:for(var tt=0,lt=q.length,gt=lt>>>1;tt<gt;){var kt=2*(tt+1)-1,ae=q[kt],L=kt+1,et=q[L];if(0>l(ae,it))L<lt&&0>l(et,ae)?(q[tt]=et,q[L]=it,tt=L):(q[tt]=ae,q[kt]=it,tt=kt);else if(L<lt&&0>l(et,it))q[tt]=et,q[L]=it,tt=L;else break t}}return z}function l(q,z){var it=q.sortIndex-z.sortIndex;return it!==0?it:q.id-z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,x=3,S=!1,b=!1,D=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(q){for(var z=i(p);z!==null;){if(z.callback===null)s(p);else if(z.startTime<=q)s(p),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(p)}}function I(q){if(D=!1,N(q),!b)if(i(m)!==null)b=!0,U||(U=!0,Q());else{var z=i(p);z!==null&&nt(I,z.startTime-q)}}var U=!1,M=-1,A=5,H=-1;function F(){return E?!0:!(o.unstable_now()-H<A)}function V(){if(E=!1,U){var q=o.unstable_now();H=q;var z=!0;try{t:{b=!1,D&&(D=!1,w(M),M=-1),S=!0;var it=x;try{e:{for(N(q),g=i(m);g!==null&&!(g.expirationTime>q&&F());){var tt=g.callback;if(typeof tt=="function"){g.callback=null,x=g.priorityLevel;var lt=tt(g.expirationTime<=q);if(q=o.unstable_now(),typeof lt=="function"){g.callback=lt,N(q),z=!0;break e}g===i(m)&&s(m),N(q)}else s(m);g=i(m)}if(g!==null)z=!0;else{var gt=i(p);gt!==null&&nt(I,gt.startTime-q),z=!1}}break t}finally{g=null,x=it,S=!1}z=void 0}}finally{z?Q():U=!1}}}var Q;if(typeof O=="function")Q=function(){O(V)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,X=ut.port2;ut.port1.onmessage=V,Q=function(){X.postMessage(null)}}else Q=function(){y(V,0)};function nt(q,z){M=y(function(){q(o.unstable_now())},z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(q){switch(x){case 1:case 2:case 3:var z=3;break;default:z=x}var it=x;x=z;try{return q()}finally{x=it}},o.unstable_requestPaint=function(){E=!0},o.unstable_runWithPriority=function(q,z){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var it=x;x=q;try{return z()}finally{x=it}},o.unstable_scheduleCallback=function(q,z,it){var tt=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?tt+it:tt):it=tt,q){case 1:var lt=-1;break;case 2:lt=250;break;case 5:lt=1073741823;break;case 4:lt=1e4;break;default:lt=5e3}return lt=it+lt,q={id:_++,callback:z,priorityLevel:q,startTime:it,expirationTime:lt,sortIndex:-1},it>tt?(q.sortIndex=it,e(p,q),i(m)===null&&q===i(p)&&(D?(w(M),M=-1):D=!0,nt(I,it-tt))):(q.sortIndex=lt,e(m,q),b||S||(b=!0,U||(U=!0,Q()))),q},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(q){var z=x;return function(){var it=x;x=z;try{return q.apply(this,arguments)}finally{x=it}}}})(Od)),Od}var F_;function wE(){return F_||(F_=1,Ud.exports=RE()),Ud.exports}var Pd={exports:{}},Kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function CE(){if(H_)return Kn;H_=1;var o=sm();function e(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,g,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:_,containerInfo:g,implementation:x}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Kn.browser=function(_){return{$$typeof:u,_reason:_}},Kn.createPortal=function(_,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return d(_,g,null,x)},Kn.flushSync=function(_){var g=m.T,x=s.p;try{if(m.T=null,s.p=2,_)return _()}finally{m.T=g,s.p=x,s.d.f()}},Kn.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(_,g))},Kn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Kn.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var x=g.as,S=p(x,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?s.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:b,fetchPriority:D}):x==="script"&&s.d.X(_,{crossOrigin:S,integrity:b,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Kn.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=p(g.as,g.crossOrigin);s.d.M(_,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(_)},Kn.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,S=p(x,g.crossOrigin);s.d.L(_,x,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Kn.preloadModule=function(_,g){if(typeof _=="string")if(g){var x=p(g.as,g.crossOrigin);s.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(_)},Kn.requestFormReset=function(_){s.d.r(_)},Kn.unstable_batchedUpdates=function(_,g){return _(g)},Kn.useFormState=function(_,g,x){return m.H.useFormState(_,g,x)},Kn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Kn.version="19.3.1",Kn}var G_;function DE(){if(G_)return Pd.exports;G_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Pd.exports=CE(),Pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function NE(){if(V_)return El;V_=1;var o=wE(),e=sm(),i=DE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var v=!1,R=c.child;R;){if(R===a){v=!0,a=c,r=f;break}if(R===r){v=!0,r=c,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,r=c;break}if(R===r){v=!0,r=f,a=c;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,r,c,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,c,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,r,c,f))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function S(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],a=x(t);return a===null||D(n,t,a.child,{foundSelf:!1}),n}function D(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&D(t,n,a.child,r))return!0;a=a.sibling}return!1}function E(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var y=null,w=null;function O(t,n,a){return t===a?!0:t===n?(y=t,!0):!1}function N(t,n,a){return t===a?(w=t,!1):t===n?(w!==null&&(y=t),!0):!1}function I(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function U(t,n,a){for(var r=0,c=t;c;c=a(c))r++;c=0;for(var f=n;f;f=a(f))c++;for(;0<r-c;)t=a(t),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var M=Object.assign,A=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),nt=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),tt=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),gt=Symbol.for("react.activity"),kt=Symbol.for("react.legacy_hidden"),ae=Symbol.for("react.memo_cache_sentinel"),L=Symbol.for("react.view_transition"),et=Symbol.for("react.recoverable"),Mt=Symbol.iterator;function At(t){return t===null||typeof t!="object"?null:(t=Mt&&t[Mt]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Symbol.for("react.client.reference");function Ht(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case ut:return"Profiler";case Q:return"StrictMode";case z:return"Suspense";case it:return"SuspenseList";case gt:return"Activity";case L:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case F:return"Portal";case nt:return t.displayName||"Context";case X:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tt:return n=t.displayName||null,n!==null?n:Ht(t.type)||"Memo";case lt:n=t._payload,t=t._init;try{return Ht(t(n))}catch{}}return null}var se=Array.isArray,Tt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Te={pending:!1,data:null,method:null,action:null},Se=[],Ye=-1;function Fe(t){return{current:t}}function Pe(t){0>Ye||(t.current=Se[Ye],Se[Ye]=null,Ye--)}function re(t,n){Ye++,Se[Ye]=t.current,t.current=n}var Ze=Fe(null),an=Fe(null),hn=Fe(null),yn=Fe(null);function xn(t,n){switch(re(hn,n),re(an,t),re(Ze,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Xv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Xv(n),t=kv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Pe(Ze),re(Ze,t)}function Z(){Pe(Ze),Pe(an),Pe(hn)}function In(t){var n=t.memoizedState;n!==null&&(ao._currentValue=n.memoizedState,re(yn,t)),n=Ze.current;var a=kv(n,t.type);n!==a&&(re(an,t),re(Ze,a))}function He(t){an.current===t&&(Pe(Ze),Pe(an)),yn.current===t&&(Pe(yn),ao._currentValue=Te)}var Ve,Dt;function Xe(t){if(Ve===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ve=n&&n[1]||"",Dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ve+t+Dt}var Jt=!1;function oe(t,n){if(!t||Jt)return"";Jt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(Vt){var j=Vt}Reflect.construct(t,[],St)}else{try{St.call()}catch(Vt){j=Vt}St=!1;try{var ot=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),St=!0,new t}finally{St&&(ot!==void 0?Object.defineProperty(t.prototype,"props",ot):delete t.prototype.props)}}}else{try{throw Error()}catch(Vt){j=Vt}(St=t())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(Vt){if(Vt&&j&&typeof Vt.stack=="string")return[Vt.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var B=v.split(`
`),$=R.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===$.length)for(r=B.length-1,c=$.length-1;1<=r&&0<=c&&B[r]!==$[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==$[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==$[c]){var ct=`
`+B[r].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=r&&0<=c);break}}}finally{Jt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Xe(a):""}function P(t,n){switch(t.tag){case 26:case 27:case 5:return Xe(t.type);case 16:return Xe("Lazy");case 13:return t.child!==n&&n!==null?Xe("Suspense Fallback"):Xe("Suspense");case 19:return Xe("SuspenseList");case 0:case 15:return oe(t.type,!1);case 11:return oe(t.type.render,!1);case 1:return oe(t.type,!0);case 31:return Xe("Activity");case 30:return Xe("ViewTransition");default:return""}}function T(t){try{var n="",a=null;do n+=P(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var at=Object.prototype.hasOwnProperty,Ct=o.unstable_scheduleCallback,xt=o.unstable_cancelCallback,It=o.unstable_shouldYield,Ft=o.unstable_requestPaint,ht=o.unstable_now,vt=o.unstable_getCurrentPriorityLevel,Lt=o.unstable_ImmediatePriority,G=o.unstable_UserBlockingPriority,mt=o.unstable_NormalPriority,pt=o.unstable_LowPriority,zt=o.unstable_IdlePriority,Nt=o.log,Pt=o.unstable_setDisableYieldValue,Yt=null,ne=null;function wt(t){if(typeof Nt=="function"&&Pt(t),ne&&typeof ne.setStrictMode=="function")try{ne.setStrictMode(Yt,t)}catch{}}var Qt=Math.clz32?Math.clz32:De,he=Math.log,Gt=Math.LN2;function De(t){return t>>>=0,t===0?32:31-(he(t)/Gt|0)|0}var cn=256,zn=262144,ci=4194304;function ui(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xi(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?c=ui(r):(v&=R,v!==0?c=ui(v):a||(a=R&~t,a!==0&&(c=ui(a))))):(R=r&~f,R!==0?c=ui(R):v!==0?c=ui(v):a||(a=r&~t,a!==0&&(c=ui(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ki(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function la(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-Qt(a),c=1<<r;n|=t[r],a&=~c}return n}function ca(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ua(){var t=ci;return ci<<=1,(ci&62914560)===0&&(ci=4194304),t}function Na(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Qi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function is(t,n,a,r,c,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=v&~a;0<a;){var ct=31-Qt(a),St=1<<ct;R[ct]=0,B[ct]=-1;var j=$[ct];if(j!==null)for($[ct]=null,ct=0;ct<j.length;ct++){var ot=j[ct];ot!==null&&(ot.lane&=-536870913)}a&=~St}r!==0&&Xs(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Xs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Qt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function as(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Qt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function fi(t,n){var a=n&-n;return a=(a&42)!==0?1:ks(a),(a&(t.suspendedLanes|n))!==0?0:a}function ks(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function La(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ws(){var t=Xt.p;return t!==0?t:(t=window.event,t===void 0?32:R_(t.type))}function ii(t,n){var a=Xt.p;try{return Xt.p=t,n()}finally{Xt.p=a}}var ce=Math.random().toString(36).slice(2),En="__reactFiber$"+ce,An="__reactProps$"+ce,C="__reactContainer$"+ce,k="__reactEvents$"+ce,ft="__reactListeners$"+ce,Y="__reactHandles$"+ce,rt="__reactResources$"+ce,Ut="__reactMarker$"+ce,qt="__reactLoad$"+ce;function Ot(t){delete t[En],delete t[An],delete t[ft],delete t[Y]}function Bt(t){var n;if(n=t[En])return n;for(var a=t.parentNode;a;){if(n=a[C]||a[En]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=o_(t);t!==null;){if(a=t[En])return a;t=o_(t)}return n}t=a,a=t.parentNode}return null}function Zt(t){if(t=t[En]||t[C]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function dt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function yt(t){var n=t[rt];return n||(n=t[rt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function bt(t){t[Ut]=!0}function te(t){t[qt]=void 0}var Ie=new Set,ye={};function de(t,n){Ke(t,n),Ke(t+"Capture",n)}function Ke(t,n){for(ye[t]=n,t=0;t<n.length;t++)Ie.add(n[t])}var Kt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),un={},pe={};function Vn(t){return at.call(pe,t)?!0:at.call(un,t)?!1:Kt.test(t)?pe[t]=!0:(un[t]=!0,!1)}var ee=!1;function Xn(){var t=ee;return ee=!1,t}function Ge(t,n,a){if(Vn(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function we(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function le(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function me(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dn(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function pn(t){if(!t._valueTracker){var n=dn(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function Li(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=dn(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var ql=/[\n"\\]/g;function Ui(t){return t.replace(ql,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function of(t,n,a,r,c,f,v,R){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+me(n)):t.value!==""+me(n)&&(t.value=""+me(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?v==="number"&&t.value==n?lf(t,me(t.value)):lf(t,me(n)):a!=null?lf(t,me(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+me(R):t.removeAttribute("name")}function Lm(t,n,a,r,c,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){pn(t);return}a=a!=null?""+me(a):"",n=n!=null?""+me(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=R?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),pn(t)}function lf(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function yr(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+me(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Um(t,n,a){if(n!=null&&(n=""+me(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+me(a):""}function Om(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(se(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=me(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),pn(t)}function Er(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var XS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||XS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Im(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",ee=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Pm(t,c,r),ee=!0)}else for(var f in n)n.hasOwnProperty(f)&&Pm(t,f,n[f])}function cf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),WS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yl(t){return WS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function fa(){}var uf=null;function ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Tr=null;function zm(t){var n=Zt(t);if(n&&(t=n.stateNode)){var a=t[An]||null;t:switch(t=n.stateNode,n.type){case"input":if(of(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ui(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[An]||null;if(!c)throw Error(s(90));of(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Li(r)}break t;case"textarea":Um(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&yr(t,!!a.multiple,n,!1)}}}var hf=!1;function Bm(t,n,a){if(hf)return t(n,a);hf=!0;try{var r=t(n);return r}finally{if(hf=!1,(br!==null||Tr!==null)&&(Yc(),br&&(n=br,t=Tr,Tr=br=null,zm(n),t)))for(n=0;n<t.length;n++)zm(t[n])}}function Oo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[An]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),df=!1;if(Ua)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){df=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{df=!1}var ss=null,pf=null,Zl=null;function Fm(){if(Zl)return Zl;var t,n=pf,a=n.length,r,c="value"in ss?ss.value:ss.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(r=1;r<=v&&n[a-r]===c[f-r];r++);return Zl=c.slice(t,1<r?1-r:void 0)}function Kl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ql(){return!0}function Hm(){return!1}function ai(t){function n(a,r,c,f,v){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ql:Hm,this.isPropagationStopped=Hm,this}return M(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ql)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ql)},persist:function(){},isPersistent:Ql}),n}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=ai(rs),Io=M({},rs,{view:0,detail:0}),qS=ai(Io),mf,gf,zo,Jl=M({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(mf=t.screenX-zo.screenX,gf=t.screenY-zo.screenY):gf=mf=0,zo=t),mf)},movementY:function(t){return"movementY"in t?t.movementY:gf}}),Gm=ai(Jl),YS=M({},Jl,{dataTransfer:0}),ZS=ai(YS),KS=M({},Io,{relatedTarget:0}),vf=ai(KS),QS=M({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),jS=ai(QS),JS=M({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$S=ai(JS),tM=M({},rs,{data:0}),Vm=ai(tM),eM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aM(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=iM[t])?!!n[t]:!1}function _f(){return aM}var sM=M({},Io,{key:function(t){if(t.key){var n=eM[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rM=ai(sM),oM=M({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=ai(oM),lM=M({},rs,{submitter:0}),cM=ai(lM),uM=M({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),fM=ai(uM),hM=M({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),dM=ai(hM),pM=M({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mM=ai(pM),gM=M({},rs,{newState:0,oldState:0,source:0}),vM=ai(gM),_M=[9,13,27,32],xf=Ua&&"CompositionEvent"in window,Bo=null;Ua&&"documentMode"in document&&(Bo=document.documentMode);var xM=Ua&&"TextEvent"in window&&!Bo,km=Ua&&(!xf||Bo&&8<Bo&&11>=Bo),Wm=" ",qm=!1;function Ym(t,n){switch(t){case"keyup":return _M.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function SM(t,n){switch(t){case"compositionend":return Zm(n);case"keypress":return n.which!==32?null:(qm=!0,Wm);case"textInput":return t=n.data,t===Wm&&qm?null:t;default:return null}}function MM(t,n){if(Ar)return t==="compositionend"||!xf&&Ym(t,n)?(t=Fm(),Zl=pf=ss=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return km&&n.locale!=="ko"?null:n.data;default:return null}}var yM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Km(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!yM[t.type]:n==="textarea"}function Qm(t,n,a,r){br?Tr?Tr.push(r):Tr=[r]:br=r,n=$c(n,"onChange"),0<n.length&&(a=new jl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Fo=null,Ho=null;function EM(t){zv(t,0)}function $l(t){var n=dt(t);if(Li(n))return t}function jm(t,n){if(t==="change")return n}var Jm=!1;if(Ua){var Sf;if(Ua){var Mf="oninput"in document;if(!Mf){var $m=document.createElement("div");$m.setAttribute("oninput","return;"),Mf=typeof $m.oninput=="function"}Sf=Mf}else Sf=!1;Jm=Sf&&(!document.documentMode||9<document.documentMode)}function t0(){Fo&&(Fo.detachEvent("onpropertychange",e0),Ho=Fo=null)}function e0(t){if(t.propertyName==="value"&&$l(Ho)){var n=[];Qm(n,Ho,t,ff(t)),Bm(EM,n)}}function bM(t,n,a){t==="focusin"?(t0(),Fo=n,Ho=a,Fo.attachEvent("onpropertychange",e0)):t==="focusout"&&t0()}function TM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(Ho)}function AM(t,n){if(t==="click")return $l(n)}function RM(t,n){if(t==="input"||t==="change")return $l(n)}function wM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Si=typeof Object.is=="function"?Object.is:wM;function Go(t,n){if(Si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!at.call(n,c)||!Si(t[c],n[c]))return!1}return!0}function yf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function n0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function i0(t,n){var a=n0(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=n0(a)}}function a0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?a0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function s0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=yf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=yf(t.document)}return n}function Ef(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var CM=Ua&&"documentMode"in document&&11>=document.documentMode,Rr=null,bf=null,Vo=null,Tf=!1;function r0(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tf||Rr==null||Rr!==yf(r)||(r=Rr,"selectionStart"in r&&Ef(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vo&&Go(Vo,r)||(Vo=r,r=$c(bf,"onSelect"),0<r.length&&(n=new jl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Rr)))}function qs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var wr={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionrun:qs("Transition","TransitionRun"),transitionstart:qs("Transition","TransitionStart"),transitioncancel:qs("Transition","TransitionCancel"),transitionend:qs("Transition","TransitionEnd")},Af={},o0={};Ua&&(o0=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Ys(t){if(Af[t])return Af[t];if(!wr[t])return t;var n=wr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in o0)return Af[t]=n[a];return t}var l0=Ys("animationend"),c0=Ys("animationiteration"),u0=Ys("animationstart"),DM=Ys("transitionrun"),NM=Ys("transitionstart"),LM=Ys("transitioncancel"),f0=Ys("transitionend"),h0=new Map,Rf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rf.push("scrollEnd");function ji(t,n){h0.set(t,n),de(n,[t])}var UM=0;function Oa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=ea.identifierPrefix;var a=UM++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function d0(t){if(t==null||typeof t=="string")return t;var n=null,a=Zr;if(a!==null)for(var r=0;r<a.length;r++){var c=t[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function Pa(t,n){return t=d0(t),n=d0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var tc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Oi=[],Cr=0,wf=0;function ec(){for(var t=Cr,n=wf=Cr=0;n<t;){var a=Oi[n];Oi[n++]=null;var r=Oi[n];Oi[n++]=null;var c=Oi[n];Oi[n++]=null;var f=Oi[n];if(Oi[n++]=null,r!==null&&c!==null){var v=r.pending;v===null?c.next=c:(c.next=v.next,v.next=c),r.pending=c}f!==0&&p0(a,c,f)}}function nc(t,n,a,r){Oi[Cr++]=t,Oi[Cr++]=n,Oi[Cr++]=a,Oi[Cr++]=r,wf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Cf(t,n,a,r){return nc(t,n,a,r),ic(t)}function Zs(t,n){return nc(t,null,null,n),ic(t)}function p0(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Qt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function ic(t){if(50<ul)throw ul=0,qc=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Dr={};function OM(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(t,n,a,r){return new OM(t,n,a,r)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ia(t,n){var a=t.alternate;return a===null?(a=hi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function m0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ac(t,n,a,r,c,f){var v=0;if(r=t,typeof r=="function")Df(r)&&(v=1);else if(typeof r=="string")v=lE(t,a,Ze.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case gt:return t=hi(31,a,n,c),t.elementType=gt,t.lanes=f,t;case V:return Ks(a.children,c,f,n);case Q:v=8,c|=24;break;case ut:return t=hi(12,a,n,c|2),t.elementType=ut,t.lanes=f,t;case z:return t=hi(13,a,n,c),t.elementType=z,t.lanes=f,t;case it:return t=hi(19,a,n,c),t.elementType=it,t.lanes=f,t;case kt:case L:return t=c|32,t=hi(30,a,n,t),t.elementType=L,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case nt:v=10;break t;case X:v=9;break t;case q:v=11;break t;case tt:v=14;break t;case lt:v=16,r=null;break t}v=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=hi(v,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Ks(t,n,a,r){return t=hi(7,t,r,n),t.lanes=a,t}function Nf(t,n,a){return t=hi(6,t,null,n),t.lanes=a,t}function g0(t){var n=hi(18,null,null,0);return n.stateNode=t,n}function Lf(t,n,a){return n=hi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var v0=new WeakMap;function Pi(t,n){if(typeof t=="object"&&t!==null){var a=v0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:T(n)},v0.set(t,n),n)}return{value:t,source:n,stack:T(n)}}var Nr=[],Lr=0,sc=null,Xo=0,Ii=[],zi=0,os=null,ha=1,da="";function za(t,n){Nr[Lr++]=Xo,Nr[Lr++]=sc,sc=t,Xo=n}function _0(t,n,a){Ii[zi++]=ha,Ii[zi++]=da,Ii[zi++]=os,os=t;var r=ha;t=da;var c=32-Qt(r)-1;r&=~(1<<c),a+=1;var f=32-Qt(n)+c;if(30<f){var v=c-c%5;f=(r&(1<<v)-1).toString(32),r>>=v,c-=v,ha=1<<32-Qt(n)+c|a<<c|r,da=f+t}else ha=1<<f|a<<c|r,da=t}function rc(t){t.return!==null&&(za(t,1),_0(t,1,0))}function Uf(t){for(;t===sc;)sc=Nr[--Lr],Nr[Lr]=null,Xo=Nr[--Lr],Nr[Lr]=null;for(;t===os;)os=Ii[--zi],Ii[zi]=null,da=Ii[--zi],Ii[zi]=null,ha=Ii[--zi],Ii[zi]=null}function x0(t,n){Ii[zi++]=ha,Ii[zi++]=da,Ii[zi++]=os,ha=n.id,da=n.overflow,os=t}var Bn=null,on=null,Re=!1,ls=null,Bi=!1,Of=Error(s(519));function cs(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ko(Pi(n,t)),Of}function S0(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[En]=t,n[An]=r,a){case"dialog":Le("cancel",n),Le("close",n);break;case"iframe":case"object":case"embed":Le("load",n);break;case"video":case"audio":for(a=0;a<hl.length;a++)Le(hl[a],n);break;case"source":Le("error",n);break;case"img":case"image":case"link":Le("error",n),Le("load",n);break;case"details":Le("toggle",n);break;case"input":Le("invalid",n),Lm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Le("invalid",n);break;case"textarea":Le("invalid",n),Om(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Gv(n.textContent,a)?(r.popover!=null&&(Le("beforetoggle",n),Le("toggle",n)),r.onScroll!=null&&Le("scroll",n),r.onScrollEnd!=null&&Le("scrollend",n),r.onClick!=null&&(n.onclick=fa),n=!0):n=!1,n||cs(t,!0)}function oc(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Bn=Bn.return}}function Ur(t){if(t!==Bn)return!1;if(!Re)return oc(t),Re=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ud(t.type,t.memoizedProps)),a=!a),a&&on&&cs(t),oc(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));on=r_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));on=r_(t)}else n===27?(n=on,Ts(t.type)?(t=xd,xd=null,on=t):on=n):on=Bn?Hi(t.stateNode.nextSibling):null;return!0}function Qs(){on=Bn=null,Re=!1}function Pf(){var t=ls;return t!==null&&(mi===null?mi=t:mi.push.apply(mi,t),ls=null),t}function ko(t){ls===null?ls=[t]:ls.push(t)}var If=Fe(null),js=null,Ba=null;function us(t,n,a){re(If,n._currentValue),n._currentValue=a}function Fa(t){t._currentValue=If.current,Pe(If)}function lc(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function zf(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var B=0;B<n.length;B++)if(R.context===n[B]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),lc(f.return,a,t),r||(v=null);break t}f=R.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),lc(v,a,t),v=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,v=c.alternate,v!==null&&(v.lanes|=a),lc(c.return,a,t),v=c.child,v=v!==null?v.sibling:null):v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Js(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=c.type;Si(c.pendingProps.value,v.value)||(t!==null?t.push(R):t=[R])}}else if(c===yn.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(ao):t=[ao])}c=c.return}return t!==null&&zf(n,t,a,r),n.flags|=262144,t!==null}function cc(t){for(t=t.firstContext;t!==null;){if(!Si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function $s(t){js=t,Ba=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function kn(t){return M0(js,t)}function uc(t,n){return js===null&&$s(t),M0(t,n)}function M0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ba===null){if(t===null)throw Error(s(308));Ba=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ba=Ba.next=n;return a}var PM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},IM=o.unstable_scheduleCallback,zM=o.unstable_NormalPriority,Rn={$$typeof:nt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bf(){return{controller:new PM,data:new Map,refCount:0}}function Wo(t){t.refCount--,t.refCount===0&&IM(zM,function(){t.controller.abort()})}function y0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var qo=null;function BM(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Yo=null,Ff=0,tr=0,Or=null;function FM(t,n){if(Yo===null){var a=Yo=[];Ff=0,tr=ed(),Or={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ff++,n.then(E0,E0),n}function E0(){if(--Ff===0&&(qo=null,Yo!==null)){Or!==null&&(Or.status="fulfilled");var t=Yo;Yo=null,tr=0,Or=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function HM(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var b0=Tt.S;Tt.S=function(t,n){if(gv=ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&FM(t,n),qo!==null)for(var a=Jr;a!==null;)y0(a,qo),a=a.next;if(a=t.types,a!==null){for(var r=Jr;r!==null;)y0(r,a),r=r.next;if(tr!==0){r=qo,r===null&&(r=qo=[]);for(var c=0;c<a.length;c++){var f=a[c];r.indexOf(f)===-1&&r.push(f)}}}b0!==null&&b0(t,n)};var er=Fe(null);function Hf(){var t=er.current;return t!==null?t:rn.pooledCache}function fc(t,n){n===null?re(er,er.current):re(er,n.pool)}function T0(){var t=Hf();return t===null?null:{parent:Rn._currentValue,pool:t}}var Pr=Error(s(460)),Gf=Error(s(474)),hc=Error(s(542)),dc={then:function(){}};function A0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function R0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(fa,fa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,C0(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(fa,fa);else{if(t=rn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,C0(t),t}throw ir=n,Pr}}function nr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ir=a,Pr):a}}var ir=null;function w0(){if(ir===null)throw Error(s(459));var t=ir;return ir=null,t}function C0(t){if(t===Pr||t===hc)throw Error(s(483))}var Ir=null,Zo=0;function pc(t){var n=Zo;return Zo+=1,Ir===null&&(Ir=[]),R0(Ir,t,n)}function fs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function mc(t,n){throw n.$$typeof===A?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function D0(t){function n(J,W){if(t){var st=J.deletions;st===null?(J.deletions=[W],J.flags|=16):st.push(W)}}function a(J,W){if(!t)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function r(J){for(var W=new Map;J!==null;)J.key===null?W.set(J.index,J):W.set(J.key,J),J=J.sibling;return W}function c(J,W){return J=Ia(J,W),J.index=0,J.sibling=null,J}function f(J,W,st){return J.index=st,t?(st=J.alternate,st!==null?(st=st.index,st<W?(J.flags|=2,W):st):(J.flags|=134217730,W)):(J.flags|=1048576,W)}function v(J){return t&&J.alternate===null&&(J.flags|=134217730),J}function R(J,W,st,_t){return W===null||W.tag!==6?(W=Nf(st,J.mode,_t),W.return=J,W):(W=c(W,st),W.return=J,W)}function B(J,W,st,_t){var jt=st.type;return jt===V?(J=ct(J,W,st.props.children,_t,st.key),fs(J,st),J):W!==null&&(W.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===lt&&nr(jt)===W.type)?(W=c(W,st.props),fs(W,st),W.return=J,W):(W=ac(st.type,st.key,st.props,null,J.mode,_t),fs(W,st),W.return=J,W)}function $(J,W,st,_t){return W===null||W.tag!==4||W.stateNode.containerInfo!==st.containerInfo||W.stateNode.implementation!==st.implementation?(W=Lf(st,J.mode,_t),W.return=J,W):(W=c(W,st.children||[]),W.return=J,W)}function ct(J,W,st,_t,jt){return W===null||W.tag!==7?(W=Ks(st,J.mode,_t,jt),W.return=J,W):(W=c(W,st),W.return=J,W)}function St(J,W,st){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Nf(""+W,J.mode,st),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case H:return st=ac(W.type,W.key,W.props,null,J.mode,st),fs(st,W),st.return=J,st;case F:return W=Lf(W,J.mode,st),W.return=J,W;case lt:return W=nr(W),St(J,W,st)}if(se(W)||At(W))return W=Ks(W,J.mode,st,null),W.return=J,W;if(typeof W.then=="function")return St(J,pc(W),st);if(W.$$typeof===nt)return St(J,uc(J,W),st);mc(J,W)}return null}function j(J,W,st,_t){var jt=W!==null?W.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return jt!==null?null:R(J,W,""+st,_t);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case H:return st.key===jt?B(J,W,st,_t):null;case F:return st.key===jt?$(J,W,st,_t):null;case lt:return st=nr(st),j(J,W,st,_t)}if(se(st)||At(st))return jt!==null?null:ct(J,W,st,_t,null);if(typeof st.then=="function")return j(J,W,pc(st),_t);if(st.$$typeof===nt)return j(J,W,uc(J,st),_t);mc(J,st)}return null}function ot(J,W,st,_t,jt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return J=J.get(st)||null,R(W,J,""+_t,jt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case H:return J=J.get(_t.key===null?st:_t.key)||null,B(W,J,_t,jt);case F:return J=J.get(_t.key===null?st:_t.key)||null,$(W,J,_t,jt);case lt:return _t=nr(_t),ot(J,W,st,_t,jt)}if(se(_t)||At(_t))return J=J.get(st)||null,ct(W,J,_t,jt,null);if(typeof _t.then=="function")return ot(J,W,st,pc(_t),jt);if(_t.$$typeof===nt)return ot(J,W,st,uc(W,_t),jt);mc(W,_t)}return null}function Vt(J,W,st,_t){for(var jt=null,Oe=null,ie=W,ue=W=0,Dn=null;ie!==null&&ue<st.length;ue++){ie.index>ue?(Dn=ie,ie=null):Dn=ie.sibling;var Be=j(J,ie,st[ue],_t);if(Be===null){ie===null&&(ie=Dn);break}t&&ie&&Be.alternate===null&&n(J,ie),W=f(Be,W,ue),Oe===null?jt=Be:Oe.sibling=Be,Oe=Be,ie=Dn}if(ue===st.length)return a(J,ie),Re&&za(J,ue),jt;if(ie===null){for(;ue<st.length;ue++)ie=St(J,st[ue],_t),ie!==null&&(W=f(ie,W,ue),Oe===null?jt=ie:Oe.sibling=ie,Oe=ie);return Re&&za(J,ue),jt}for(ie=r(ie);ue<st.length;ue++)Dn=ot(ie,J,ue,st[ue],_t),Dn!==null&&(t&&(Be=Dn.alternate,Be!==null&&ie.delete(Be.key===null?ue:Be.key)),W=f(Dn,W,ue),Oe===null?jt=Dn:Oe.sibling=Dn,Oe=Dn);return t&&ie.forEach(function(Ds){return n(J,Ds)}),Re&&za(J,ue),jt}function $t(J,W,st,_t){if(st==null)throw Error(s(151));for(var jt=null,Oe=null,ie=W,ue=W=0,Dn=null,Be=st.next();ie!==null&&!Be.done;ue++,Be=st.next()){ie.index>ue?(Dn=ie,ie=null):Dn=ie.sibling;var Ds=j(J,ie,Be.value,_t);if(Ds===null){ie===null&&(ie=Dn);break}t&&ie&&Ds.alternate===null&&n(J,ie),W=f(Ds,W,ue),Oe===null?jt=Ds:Oe.sibling=Ds,Oe=Ds,ie=Dn}if(Be.done)return a(J,ie),Re&&za(J,ue),jt;if(ie===null){for(;!Be.done;ue++,Be=st.next())Be=St(J,Be.value,_t),Be!==null&&(W=f(Be,W,ue),Oe===null?jt=Be:Oe.sibling=Be,Oe=Be);return Re&&za(J,ue),jt}for(ie=r(ie);!Be.done;ue++,Be=st.next())Be=ot(ie,J,ue,Be.value,_t),Be!==null&&(t&&(Dn=Be.alternate,Dn!==null&&ie.delete(Dn.key===null?ue:Dn.key)),W=f(Be,W,ue),Oe===null?jt=Be:Oe.sibling=Be,Oe=Be);return t&&ie.forEach(function(SE){return n(J,SE)}),Re&&za(J,ue),jt}function be(J,W,st,_t){if(typeof st=="object"&&st!==null&&st.type===V&&st.key===null&&st.props.ref===void 0&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case H:t:{for(var jt=st.key;W!==null;){if(W.key===jt){if(jt=st.type,jt===V){if(W.tag===7){a(J,W.sibling),_t=c(W,st.props.children),fs(_t,st),_t.return=J,J=_t;break t}}else if(W.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===lt&&nr(jt)===W.type){a(J,W.sibling),_t=c(W,st.props),fs(_t,st),_t.return=J,J=_t;break t}a(J,W);break}else n(J,W);W=W.sibling}st.type===V?(_t=Ks(st.props.children,J.mode,_t,st.key),fs(_t,st),_t.return=J,J=_t):(_t=ac(st.type,st.key,st.props,null,J.mode,_t),fs(_t,st),_t.return=J,J=_t)}return v(J);case F:t:{for(jt=st.key;W!==null;){if(W.key===jt)if(W.tag===4&&W.stateNode.containerInfo===st.containerInfo&&W.stateNode.implementation===st.implementation){a(J,W.sibling),_t=c(W,st.children||[]),_t.return=J,J=_t;break t}else{a(J,W);break}else n(J,W);W=W.sibling}_t=Lf(st,J.mode,_t),_t.return=J,J=_t}return v(J);case lt:return st=nr(st),be(J,W,st,_t)}if(se(st))return Vt(J,W,st,_t);if(At(st)){if(jt=At(st),typeof jt!="function")throw Error(s(150));return st=jt.call(st),$t(J,W,st,_t)}if(typeof st.then=="function")return be(J,W,pc(st),_t);if(st.$$typeof===nt)return be(J,W,uc(J,st),_t);mc(J,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,W!==null&&W.tag===6?(a(J,W.sibling),_t=c(W,st),_t.return=J,J=_t):(a(J,W),_t=Nf(st,J.mode,_t),_t.return=J,J=_t),v(J)):a(J,W)}return function(J,W,st,_t){try{Zo=0;var jt=be(J,W,st,_t);return Ir=null,jt}catch(ie){if(ie===Pr||ie===hc)throw ie;var Oe=hi(29,ie,null,J.mode);return Oe.lanes=_t,Oe.return=J,Oe}finally{}}}var ar=D0(!0),N0=D0(!1),hs=!1;function Vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ds(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ps(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ke&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=ic(t),p0(t,null,a),n}return nc(t,r,n,a),ic(t)}function Ko(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,as(t,a)}}function kf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Wf=!1;function Qo(){if(Wf){var t=Or;if(t!==null)throw t}}function jo(t,n,a,r){Wf=!1;var c=t.updateQueue;hs=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var B=R,$=B.next;B.next=null,v===null?f=$:v.next=$,v=B;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,R=ct.lastBaseUpdate,R!==v&&(R===null?ct.firstBaseUpdate=$:R.next=$,ct.lastBaseUpdate=B))}if(f!==null){var St=c.baseState;v=0,ct=$=B=null,R=f;do{var j=R.lane&-536870913,ot=j!==R.lane;if(ot?(Ue&j)===j:(r&j)===j){j!==0&&j===tr&&(Wf=!0),ct!==null&&(ct=ct.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Vt=t,$t=R;j=n;var be=a;switch($t.tag){case 1:if(Vt=$t.payload,typeof Vt=="function"){St=Vt.call(be,St,j);break t}St=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=$t.payload,j=typeof Vt=="function"?Vt.call(be,St,j):Vt,j==null)break t;St=M({},St,j);break t;case 2:hs=!0}}j=R.callback,j!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[j]:ot.push(j))}else ot={lane:j,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ct===null?($=ct=ot,B=St):ct=ct.next=ot,v|=j;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ot=R,R=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ct===null&&(B=St),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),Ms|=v,t.lanes=v,t.memoizedState=St}}function L0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function U0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)L0(a[t],n)}var ms=Fe(null),gc=Fe(0);function O0(t,n){t=ka,re(gc,t),re(ms,n),ka=t|n.baseLanes}function qf(){re(gc,ka),re(ms,ms.current)}function Yf(){ka=gc.current,Pe(ms),Pe(gc)}var Wn=Fe(null),$n=null;function gs(t){var n=t.alternate;re(qn,qn.current&1),re(Wn,t),$n===null&&(n===null||ms.current!==null||n.memoizedState!==null)&&($n=t)}function Zf(t){re(qn,qn.current),re(Wn,t),$n===null&&($n=t)}function P0(t){t.tag===22?(re(qn,qn.current),re(Wn,t),$n===null&&($n=t)):vs()}function vs(){re(qn,qn.current),re(Wn,Wn.current)}function Mi(t){Pe(Wn),$n===t&&($n=null),Pe(qn)}var qn=Fe(0);function Jo(t,n){re(Wn,Wn.current),re(qn,n)}function Kf(t){Pe(qn),Pe(Wn),$n===t&&($n=null)}function vc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vd(a)||_d(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ha=0,Ee=null,sn=null,wn=null,_c=!1,zr=!1,sr=!1,xc=0,$o=0,Br=null,GM=0;function Sn(){throw Error(s(321))}function Qf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Si(t[a],n[a]))return!1;return!0}function jf(t,n,a,r,c,f){return Ha=f,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Tt.H=t===null||t.memoizedState===null?_g:xg,sr=!1,f=a(r,c),sr=!1,zr&&(f=z0(n,a,r,c)),I0(t),f}function I0(t){Tt.H=Ac;var n=sn!==null&&sn.next!==null;if(Ha=0,wn=sn=Ee=null,_c=!1,$o=0,Br=null,n)throw Error(s(300));t===null||Cn||(t=t.dependencies,t!==null&&cc(t)&&(Cn=!0))}function z0(t,n,a,r){Ee=t;var c=0;do{if(zr&&(Br=null),$o=0,zr=!1,25<=c)throw Error(s(301));if(c+=1,wn=sn=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Tt.H=KM,f=n(a,r)}while(zr);return f}function VM(){var t=Tt.H,n=t.useState()[0];return n=typeof n.then=="function"?tl(n):n,t=t.useState()[0],(sn!==null?sn.memoizedState:null)!==t&&(Ee.flags|=1024),n}function Jf(){var t=xc!==0;return xc=0,t}function $f(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function th(t){if(_c){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}_c=!1}Ha=0,wn=sn=Ee=null,zr=!1,$o=xc=0,Br=null}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?Ee.memoizedState=wn=t:wn=wn.next=t,wn}function bn(){if(sn===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=sn.next;var n=wn===null?Ee.memoizedState:wn.next;if(n!==null)wn=n,sn=t;else{if(t===null)throw Ee.alternate===null?Error(s(467)):Error(s(310));sn=t,t={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},wn===null?Ee.memoizedState=wn=t:wn=wn.next=t}return wn}function Sc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(t){var n=$o;return $o+=1,Br===null&&(Br=[]),t=R0(Br,t,n),n=Ee,(wn===null?n.memoizedState:wn.next)===null&&(n=n.alternate,Tt.H=n===null||n.memoizedState===null?_g:xg),t}function Mc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tl(t);if(t.$$typeof===et)return;if(t.$$typeof===nt)return kn(t)}throw Error(s(438,String(t)))}function eh(t){var n=null,a=Ee.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=Ee.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sc(),Ee.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=ae;return n.index++,a}function Ga(t,n){return typeof n=="function"?n(t):n}function yc(t){var n=bn();return nh(n,sn,t)}function nh(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var R=v=null,B=null,$=n,ct=!1;do{var St=$.lane&-536870913;if(St!==$.lane?(Ue&St)===St:(Ha&St)===St){var j=$.revertLane;if(j===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),St===tr&&(ct=!0);else if((Ha&j)===j){$=$.next,j===tr&&(ct=!0);continue}else St={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(R=B=St,v=f):B=B.next=St,Ee.lanes|=j,Ms|=j;St=$.action,sr&&a(f,St),f=$.hasEagerState?$.eagerState:a(f,St)}else j={lane:St,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(R=B=j,v=f):B=B.next=j,Ee.lanes|=St,Ms|=St;$=$.next}while($!==null&&$!==n);if(B===null?v=f:B.next=R,!Si(f,t.memoizedState)&&(Cn=!0,ct&&(a=Or,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=B,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function ih(t){var n=bn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=t(f,v.action),v=v.next;while(v!==c);Si(f,n.memoizedState)||(Cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function B0(t,n,a){var r=Ee,c=bn(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Si((sn||c).memoizedState,a);if(v&&(c.memoizedState=a,Cn=!0),c=c.queue,rh(G0.bind(null,r,c,t),[t]),t=c.getSnapshot!==n||v||wn!==null&&(wn.memoizedState.tag&1)!==0,Fr(t?9:8,{destroy:void 0},H0.bind(null,r,c,a,n),null),t){if(r.flags|=2048,rn===null)throw Error(s(349));f||(Ha&127)!==0||F0(r,n,a)}return a}function F0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Ee.updateQueue,n===null?(n=Sc(),Ee.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function H0(t,n,a,r){n.value=a,n.getSnapshot=r,V0(n)&&X0(t)}function G0(t,n,a){return a(function(){V0(n)&&X0(t)})}function V0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Si(t,a)}catch{return!0}}function X0(t){var n=Zs(t,2);n!==null&&gi(n,t,2)}function ah(t){var n=si();if(typeof t=="function"){var a=t;if(t=a(),sr){wt(!0);try{a()}finally{wt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},n}function k0(t,n,a,r){return t.baseState=a,nh(t,sn,typeof r=="function"?r:Ga)}function XM(t,n,a,r,c){if(Tc(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};Tt.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,W0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function W0(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=Tt.T,v={};v.types=f!==null?f.types:null,Tt.T=v;try{var R=a(c,r),B=Tt.S;B!==null&&B(v,R),q0(t,n,R)}catch($){sh(t,n,$)}finally{f!==null&&v.types!==null&&(f.types=v.types),Tt.T=f}}else try{f=a(c,r),q0(t,n,f)}catch($){sh(t,n,$)}}function q0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Y0(t,n,r)},function(r){return sh(t,n,r)}):Y0(t,n,a)}function Y0(t,n,a){n.status="fulfilled",n.value=a,Z0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,W0(t,a)))}function sh(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Z0(n),n=n.next;while(n!==r)}t.action=null}function Z0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function K0(t,n){return n}function Q0(t,n){if(Re){var a=rn.formState;if(a!==null){t:{var r=Ee;if(Re){if(on){e:{for(var c=on,f=Bi;c.nodeType!==8;){if(!f){c=null;break e}if(c=Hi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){on=Hi(c.nextSibling),r=c.data==="F!";break t}}cs(r)}r=!1}r&&(n=a[0])}}return a=si(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:K0,lastRenderedState:n},a.queue=r,a=mg.bind(null,Ee,r),r.dispatch=a,r=ah(!1),f=fh.bind(null,Ee,!1,r.queue),r=si(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=XM.bind(null,Ee,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function j0(t){var n=bn();return J0(n,sn,t)}function J0(t,n,a){if(n=nh(t,n,K0)[0],t=yc(Ga)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=tl(n)}catch(v){throw v===Pr?hc:v}else r=n;n=bn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(Ee.flags|=2048,Fr(9,{destroy:void 0},kM.bind(null,c,a),null)),[r,f,t]}function kM(t,n){t.action=n}function $0(t){var n=bn(),a=sn;if(a!==null)return J0(n,a,t);bn(),n=n.memoizedState,a=bn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Fr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=Ee.updateQueue,n===null&&(n=Sc(),Ee.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function tg(){return bn().memoizedState}function Ec(t,n,a,r){var c=si();Ee.flags|=t,c.memoizedState=Fr(1|n,{destroy:void 0},a,r===void 0?null:r)}function bc(t,n,a,r){var c=bn();r=r===void 0?null:r;var f=c.memoizedState.inst;sn!==null&&r!==null&&Qf(r,sn.memoizedState.deps)?c.memoizedState=Fr(n,f,a,r):(Ee.flags|=t,c.memoizedState=Fr(1|n,f,a,r))}function eg(t,n){Ec(8390656,8,t,n)}function rh(t,n){bc(2048,8,t,n)}function WM(t){Ee.flags|=4;var n=Ee.updateQueue;if(n===null)n=Sc(),Ee.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function ng(t){var n=bn().memoizedState;return WM({ref:n,nextImpl:t}),function(){if((ke&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ig(t,n){return bc(4,2,t,n)}function ag(t,n){return bc(4,4,t,n)}function sg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function rg(t,n,a){a=a!=null?a.concat([t]):null,bc(4,4,sg.bind(null,n,t),a)}function oh(){}function og(t,n){var a=bn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Qf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function lg(t,n){var a=bn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Qf(n,r[1]))return r[0];if(r=t(),sr){wt(!0);try{t()}finally{wt(!1)}}return a.memoizedState=[r,n],r}function lh(t,n,a){return a===void 0||(Ha&1073741824)!==0&&(Ue&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=_v(),Ee.lanes|=t,Ms|=t,a)}function cg(t,n,a,r){return Si(a,n)?a:ms.current!==null?(t=lh(t,a,r),Si(t,n)||(Cn=!0),t):(Ha&106)===0||(Ha&1073741824)!==0&&(Ue&261930)===0?(Cn=!0,t.memoizedState=a):(t=_v(),Ee.lanes|=t,Ms|=t,n)}function ug(t,n,a,r,c){var f=Xt.p;Xt.p=f!==0&&8>f?f:8;var v=Tt.T,R={};R.types=v!==null?v.types:null,Tt.T=R,fh(t,!1,n,a);try{var B=c(),$=Tt.S;if($!==null&&$(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ct=HM(B,r);el(t,n,ct,Ti(t))}else el(t,n,r,Ti(t))}catch(St){el(t,n,{then:function(){},status:"rejected",reason:St},Ti())}finally{Xt.p=f,v!==null&&R.types!==null&&(v.types=R.types),Tt.T=v}}function qM(){}function ch(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=fg(t).queue;ug(t,c,n,Te,a===null?qM:function(){return hg(t),a(r)})}function fg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Te,baseState:Te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:Te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function hg(t){var n=fg(t);n.next===null&&(n=t.alternate.memoizedState),el(t,n.next.queue,{},Ti())}function uh(){return kn(ao)}function dg(){return bn().memoizedState}function pg(){return bn().memoizedState}function YM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ti();t=ds(a);var r=ps(n,t,a);r!==null&&(gi(r,n,a),Ko(r,n,a)),n={cache:Bf()},t.payload=n;return}n=n.return}}function ZM(t,n,a){var r=Ti();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tc(t)?gg(n,a):(a=Cf(t,n,a,r),a!==null&&(gi(a,t,r),vg(a,n,r)))}function mg(t,n,a){var r=Ti();el(t,n,a,r)}function el(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tc(t))gg(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(c.hasEagerState=!0,c.eagerState=R,Si(R,v))return nc(t,n,c,0),rn===null&&ec(),!1}catch{}finally{}if(a=Cf(t,n,c,r),a!==null)return gi(a,t,r),vg(a,n,r),!0}return!1}function fh(t,n,a,r){if(r={lane:2,revertLane:ed(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Tc(t)){if(n)throw Error(s(479))}else n=Cf(t,a,r,2),n!==null&&gi(n,t,2)}function Tc(t){var n=t.alternate;return t===Ee||n!==null&&n===Ee}function gg(t,n){zr=_c=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function vg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,as(t,a)}}var Ac={readContext:kn,use:Mc,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useLayoutEffect:Sn,useInsertionEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useSyncExternalStore:Sn,useId:Sn,useHostTransitionStatus:Sn,useFormState:Sn,useActionState:Sn,useOptimistic:Sn,useMemoCache:Sn,useCacheRefresh:Sn,useEffectEvent:Sn},_g={readContext:kn,use:Mc,useCallback:function(t,n){return si().memoizedState=[t,n===void 0?null:n],t},useContext:kn,useEffect:eg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ec(4194308,4,sg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ec(4194308,4,t,n)},useInsertionEffect:function(t,n){Ec(4,2,t,n)},useMemo:function(t,n){var a=si();n=n===void 0?null:n;var r=t();if(sr){wt(!0);try{t()}finally{wt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=si();if(a!==void 0){var c=a(n);if(sr){wt(!0);try{a(n)}finally{wt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=ZM.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var n=si();return t={current:t},n.memoizedState=t},useState:function(t){t=ah(t);var n=t.queue,a=mg.bind(null,Ee,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:oh,useDeferredValue:function(t,n){var a=si();return lh(a,t,n)},useTransition:function(){var t=ah(!1);return t=ug.bind(null,Ee,t.queue,!0,!1),si().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=Ee,c=si();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),rn===null)throw Error(s(349));(Ue&127)!==0||F0(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,eg(G0.bind(null,r,f,t),[t]),r.flags|=2048,Fr(9,{destroy:void 0},H0.bind(null,r,f,a,n),null),a},useId:function(){var t=si(),n=rn.identifierPrefix;if(Re){var a=da,r=ha;a=(r&~(1<<32-Qt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=GM++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:uh,useFormState:Q0,useActionState:Q0,useOptimistic:function(t){var n=si();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=fh.bind(null,Ee,!0,a),a.dispatch=n,[t,n]},useMemoCache:eh,useCacheRefresh:function(){return si().memoizedState=YM.bind(null,Ee)},useEffectEvent:function(t){var n=si(),a={impl:t};return n.memoizedState=a,function(){if((ke&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},xg={readContext:kn,use:Mc,useCallback:og,useContext:kn,useEffect:rh,useImperativeHandle:rg,useInsertionEffect:ig,useLayoutEffect:ag,useMemo:lg,useReducer:yc,useRef:tg,useState:function(){return yc(Ga)},useDebugValue:oh,useDeferredValue:function(t,n){var a=bn();return cg(a,sn.memoizedState,t,n)},useTransition:function(){var t=yc(Ga)[0],n=bn().memoizedState;return[typeof t=="boolean"?t:tl(t),n]},useSyncExternalStore:B0,useId:dg,useHostTransitionStatus:uh,useFormState:j0,useActionState:j0,useOptimistic:function(t,n){var a=bn();return k0(a,sn,t,n)},useMemoCache:eh,useCacheRefresh:pg,useEffectEvent:ng},KM={readContext:kn,use:Mc,useCallback:og,useContext:kn,useEffect:rh,useImperativeHandle:rg,useInsertionEffect:ig,useLayoutEffect:ag,useMemo:lg,useReducer:ih,useRef:tg,useState:function(){return ih(Ga)},useDebugValue:oh,useDeferredValue:function(t,n){var a=bn();return sn===null?lh(a,t,n):cg(a,sn.memoizedState,t,n)},useTransition:function(){var t=ih(Ga)[0],n=bn().memoizedState;return[typeof t=="boolean"?t:tl(t),n]},useSyncExternalStore:B0,useId:dg,useHostTransitionStatus:uh,useFormState:$0,useActionState:$0,useOptimistic:function(t,n){var a=bn();return sn!==null?k0(a,sn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:eh,useCacheRefresh:pg,useEffectEvent:ng};function hh(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:M({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var dh={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Ti(),c=ds(r);c.payload=n,a!=null&&(c.callback=a),n=ps(t,c,r),n!==null&&(gi(n,t,r),Ko(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Ti(),c=ds(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ps(t,c,r),n!==null&&(gi(n,t,r),Ko(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Ti(),r=ds(a);r.tag=2,n!=null&&(r.callback=n),n=ps(t,r,a),n!==null&&(gi(n,t,a),Ko(n,t,a))}};function Sg(t,n,a,r,c,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!Go(a,r)||!Go(c,f):!0}function Mg(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&dh.enqueueReplaceState(n,n.state,null)}function rr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=M({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function yg(t){tc(t)}function Eg(t){console.error(t)}function bg(t){tc(t)}function Rc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Tg(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ph(t,n,a){return a=ds(a),a.tag=3,a.payload={element:null},a.callback=function(){Rc(t,n)},a}function Ag(t){return t=ds(t),t.tag=3,t}function Rg(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Tg(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Tg(n,a,r),typeof c!="function"&&(ys===null?ys=new Set([this]):ys.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function QM(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Js(n,a,c,!0),a=Wn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return $n===null?Zc():a.alternate===null&&Mn===0&&(Mn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===dc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Jh(t,r,c)),!1;case 22:return a.flags|=65536,r===dc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Jh(t,r,c)),!1}throw Error(s(435,a.tag))}return Jh(t,r,c),Zc(),!1}if(Re)return n=Wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Of&&(t=Error(s(422),{cause:r}),ko(Pi(t,a)))):(r!==Of&&(n=Error(s(423),{cause:r}),ko(Pi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=Pi(r,a),c=ph(t.stateNode,r,c),kf(t,c),Mn!==4&&(Mn=2)),!1;var f=Error(s(520),{cause:r});if(f=Pi(f,a),cl===null?cl=[f]:cl.push(f),Mn!==4&&(Mn=2),n===null)return!0;r=Pi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=ph(a.stateNode,r,t),kf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ys===null||!ys.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Ag(c),Rg(c,t,a,r),kf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var mh=Error(s(461)),Cn=!1;function Ln(t,n,a,r){n.child=t===null?N0(n,null,a,r):ar(n,t.child,a,r)}function wg(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var R in r)R!=="ref"&&(v[R]=r[R])}else v=r;return $s(n),r=jf(t,n,a,v,f,c),R=Jf(),t!==null&&!Cn?($f(t,n,c),Va(t,n,c)):(Re&&R&&rc(n),n.flags|=1,Ln(t,n,r,c),n.child)}function Cg(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!Df(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Dg(t,n,f,r,c)):(t=ac(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Eh(t,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Go,a(v,r)&&t.ref===n.ref)return Va(t,n,c)}return n.flags|=1,t=Ia(f,r),t.ref=n.ref,t.return=n,n.child=t}function Dg(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Go(f,r)&&t.ref===n.ref)if(Cn=!1,n.pendingProps=r=f,Eh(t,c))(t.flags&131072)!==0&&(Cn=!0);else return n.lanes=t.lanes,Va(t,n,c)}return gh(t,n,a,r,c)}function Ng(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Lg(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&fc(n,f!==null?f.cachePool:null),f!==null?O0(n,f):qf(),P0(n);else return r=n.lanes=536870912,Lg(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(fc(n,f.cachePool),O0(n,f),vs(),n.memoizedState=null):(t!==null&&fc(n,null),qf(),vs());return Ln(t,n,c,a),n.child}function nl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Lg(t,n,a,r,c){var f=Hf();return f=f===null?null:{parent:Rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&fc(n,null),qf(),P0(n),t!==null&&Js(t,n,r,!0),n.childLanes=c,null}function wc(t,n){return n=Cc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ug(t,n,a){return ar(n,t.child,null,a),t=wc(n,n.pendingProps),t.flags|=2,Mi(n),n.memoizedState=null,t}function jM(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Re){if(r.mode==="hidden")return t=wc(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},nl(null,t);if(Zf(n),(t=on)?(t=s_(t,Bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:os!==null?{id:ha,overflow:da}:null,retryLane:536870912,hydrationErrors:null},a=g0(t),a.return=n,n.child=a,Bn=n,on=null)):t=null,t===null)throw cs(n);return n.lanes=536870912,null}return wc(n,r)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Zf(n),c)if(n.flags&256)n.flags&=-257,n=Ug(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Cn||Js(t,n,a,!1),c=(a&t.childLanes)!==0,Cn||c){if(ms.current===null){if(r=rn,r!==null&&(v=fi(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Zs(t,v),gi(r,t,v),mh;Zc()}n=Ug(t,n,a)}else t=f.treeContext,on=Hi(v.nextSibling),Bn=n,Re=!0,ls=null,Bi=!1,t!==null&&x0(n,t),n=wc(n,r),n.flags|=134221824;return n}return t=Ia(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Hr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function gh(t,n,a,r,c){return $s(n),a=jf(t,n,a,r,void 0,c),r=Jf(),t!==null&&!Cn?($f(t,n,c),Va(t,n,c)):(Re&&r&&rc(n),n.flags|=1,Ln(t,n,a,c),n.child)}function Og(t,n,a,r,c,f){return $s(n),n.updateQueue=null,a=z0(n,r,a,c),I0(t),r=Jf(),t!==null&&!Cn?($f(t,n,f),Va(t,n,f)):(Re&&r&&rc(n),n.flags|=1,Ln(t,n,a,f),n.child)}function Pg(t,n,a,r,c){if($s(n),n.stateNode===null){var f=Dr,v=a.contextType;typeof v=="object"&&v!==null&&(f=kn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=dh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Vf(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?kn(v):Dr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(hh(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&dh.enqueueReplaceState(f,f.state,null),jo(n,r,f,c),Qo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,B=rr(a,R);f.props=B;var $=f.context,ct=a.contextType;v=Dr,typeof ct=="object"&&ct!==null&&(v=kn(ct));var St=a.getDerivedStateFromProps;ct=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||$!==v)&&Mg(n,f,r,v),hs=!1;var j=n.memoizedState;f.state=j,jo(n,r,f,c),Qo(),$=n.memoizedState,R||j!==$||hs?(typeof St=="function"&&(hh(n,a,St,r),$=n.memoizedState),(B=hs||Sg(n,a,B,r,j,$,v))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=v,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Xf(t,n),v=n.memoizedProps,ct=rr(a,v),f.props=ct,St=n.pendingProps,j=f.context,$=a.contextType,B=Dr,typeof $=="object"&&$!==null&&(B=kn($)),R=a.getDerivedStateFromProps,($=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==St||j!==B)&&Mg(n,f,r,B),hs=!1,j=n.memoizedState,f.state=j,jo(n,r,f,c),Qo();var ot=n.memoizedState;v!==St||j!==ot||hs||t!==null&&t.dependencies!==null&&cc(t.dependencies)?(typeof R=="function"&&(hh(n,a,R,r),ot=n.memoizedState),(ct=hs||Sg(n,a,ct,r,j,ot,B)||t!==null&&t.dependencies!==null&&cc(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=B,r=ct):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Hr(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ar(n,t.child,null,c),n.child=ar(n,null,a,c)):Ln(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Va(t,n,c),t}function Ig(t,n,a,r){return Qs(),n.flags|=256,Ln(t,n,a,r),n.child}var vh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _h(t){return{baseLanes:t,cachePool:T0()}}function xh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=bi),t}function zg(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(qn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Re){if(c?gs(n):vs(),(t=on)?(t=s_(t,Bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:os!==null?{id:ha,overflow:da}:null,retryLane:536870912,hydrationErrors:null},a=g0(t),a.return=n,n.child=a,Bn=n,on=null)):t=null,t===null)throw cs(n);return _d(t)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,c?(vs(),c=n.mode,f=Cc({mode:"hidden",children:f},c),r=Ks(r,c,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=_h(a),r.childLanes=xh(t,v,a),n.memoizedState=vh,nl(null,r)):(gs(n),Sh(n,f))}var R=t.memoizedState;if(R!==null){var B=R.dehydrated;if(B!==null)return JM(t,n,f,v,r,B,R,a)}return c?(vs(),c=r.fallback,f=n.mode,R=t.child,B=R.sibling,r=Ia(R,{mode:"hidden",children:r.children}),r.subtreeFlags=R.subtreeFlags&1206910976,B!==null?c=Ia(B,c):(c=Ks(c,f,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,nl(null,r),r=n.child,c=t.child.memoizedState,c===null?c=_h(a):(f=c.cachePool,f!==null?(R=Rn._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=T0(),c={baseLanes:c.baseLanes|a,cachePool:f}),r.memoizedState=c,r.childLanes=xh(t,v,a),n.memoizedState=vh,nl(t.child,r)):(gs(n),a=t.child,t=a.sibling,a=Ia(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Sh(t,n){return n=Cc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Cc(t,n){return t=hi(22,t,null,n),t.lanes=0,t}function Dc(t,n,a){return ar(n,t.child,null,a),t=Sh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function JM(t,n,a,r,c,f,v,R){if(a)return n.flags&256?(gs(n),n.flags&=-257,Dc(t,n,R)):n.memoizedState!==null?(vs(),n.child=t.child,n.flags|=128,null):(vs(),f=c.fallback,v=n.mode,c=Cc({mode:"visible",children:c.children},v),f=Ks(f,v,R,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,ar(n,t.child,null,R),c=n.child,c.memoizedState=_h(R),c.childLanes=xh(t,r,R),n.memoizedState=vh,nl(null,c));if(gs(n),_d(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var B=r.dgst;return r=B,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,ko({value:c,source:null,stack:null})),Dc(t,n,R)}if(Cn||Js(t,n,R,!1),r=(R&t.childLanes)!==0,Cn||r){if(ms.current!==null)return Dc(t,n,R);if(r=rn,r!==null&&(c=fi(r,R),c!==0&&c!==v.retryLane))throw v.retryLane=c,Zs(t,c),gi(r,t,c),mh;return vd(f)||Zc(),Dc(t,n,R)}return vd(f)?(n.flags|=192,n.child=t.child,null):(t=v.treeContext,on=Hi(f.nextSibling),Bn=n,Re=!0,ls=null,Bi=!1,t!==null&&x0(n,t),n=Sh(n,c.children),n.flags|=134221824,n)}function Bg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),lc(t.return,n,a)}function Fg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&vc(a)===null&&(n=t),t=t.sibling}return n}function Nc(t,n,a,r,c,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function Mh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function yh(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var v=qn.current;if(n.flags&128)return Jo(n,v),null;var R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,Jo(n,v),c==="backwards"&&t!==null?(Mh(t),Ln(t,n,r,a),Mh(t)):Ln(t,n,r,a),r=Re?Xo:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bg(t,a,n);else if(t.tag===19)Bg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=Fg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Mh(n)),Nc(n,!0,c,null,f,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&vc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Nc(n,!0,a,null,f,r);break;case"together":Nc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Fg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Nc(n,!1,c,a,f,r)}return n.child}function Hg(t,n,a){var r=n.pendingProps;return us(n,n.type,r.value),Ln(t,n,r.children,a),n.child}function Va(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ms|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Js(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ia(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ia(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Eh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&cc(t)))}function $M(t,n,a){switch(n.tag){case 3:xn(n,n.stateNode.containerInfo),us(n,Rn,t.memoizedState.cache),Qs();break;case 27:case 5:In(n);break;case 4:xn(n,n.stateNode.containerInfo);break;case 10:us(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Zf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return gs(n),n.flags|=128,null;r=Js(t,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?zg(t,n,a):(gs(n),t=Va(t,n,a),t!==null?t.sibling:null)}gs(n);break;case 19:if(n.flags&128)return yh(t,n,a);if(c=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Js(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return yh(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Jo(n,qn.current),r)break;return null;case 22:return n.lanes=0,Ng(t,n,a,n.pendingProps);case 24:us(n,Rn,t.memoizedState.cache)}return Va(t,n,a)}function Gg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Cn=!0;else{if(!Eh(t,a)&&(n.flags&128)===0)return Cn=!1,$M(t,n,a);Cn=(t.flags&131072)!==0}else Cn=!1,Re&&(n.flags&1048576)!==0&&_0(n,Xo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=nr(n.elementType),n.type=t,typeof t=="function")Df(t)?(r=rr(t,r),n.tag=1,n=Pg(null,n,t,r,a)):(n.tag=0,n=gh(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===q){n.tag=11,n=wg(null,n,t,r,a);break t}else if(c===tt){n.tag=14,n=Cg(null,n,t,r,a);break t}else if(c===nt){n.tag=10,n.type=t,n=Hg(null,n,a);break t}}throw n=Ht(t)||t,Error(s(306,n,""))}}return n;case 0:return gh(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=rr(r,n.pendingProps),Pg(t,n,r,c,a);case 3:t:{if(xn(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Xf(t,n),jo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,us(n,Rn,r),r!==f.cache&&zf(n,[Rn],a,!0),Qo(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ig(t,n,r,a);break t}else if(r!==c){c=Pi(Error(s(424)),n),ko(c),n=Ig(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(on=Hi(t.firstChild),Bn=n,Re=!0,ls=null,Bi=!0,a=N0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Qs(),r===c){n=Va(t,n,a);break t}Ln(t,n,r,a)}n=n.child}return n;case 26:return Hr(t,n),t===null?(a=h_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(n.stateNode=Wv(n.type,n.pendingProps,hn.current,n)):n.memoizedState=h_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return In(n),t===null&&Re&&(r=n.stateNode=l_(n.type,n.pendingProps,hn.current),Bn=n,Bi=!0,c=on,Ts(n.type)?(xd=c,on=Hi(r.firstChild)):on=c),Ln(t,n,n.pendingProps.children,a),Hr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Re&&((c=r=on)&&(r=Yy(r,n.type,n.pendingProps,Bi),r!==null?(n.stateNode=r,Bn=n,on=Hi(r.firstChild),Bi=!1,c=!0):c=!1),c||cs(n)),In(n),c=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,r=f.children,ud(c,f)?r=null:v!==null&&ud(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=jf(t,n,VM,null,null,a),ao._currentValue=c),Hr(t,n),Ln(t,n,r,a),n.child;case 6:return t===null&&Re&&((t=a=on)&&(a=Zy(a,n.pendingProps,Bi),a!==null?(n.stateNode=a,Bn=n,on=null,t=!0):t=!1),t||cs(n)),null;case 13:return zg(t,n,a);case 4:return xn(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ar(n,null,r,a):Ln(t,n,r,a),n.child;case 11:return wg(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Hr(t,n),Ln(t,n,r,a),n.child;case 8:return Ln(t,n,n.pendingProps.children,a),n.child;case 12:return Ln(t,n,n.pendingProps.children,a),n.child;case 10:return Hg(t,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,$s(n),c=kn(c),r=r(c),n.flags|=1,Ln(t,n,r,a),n.child;case 14:return Cg(t,n,n.type,n.pendingProps,a);case 15:return Dg(t,n,n.type,n.pendingProps,a);case 19:return yh(t,n,a);case 31:return jM(t,n,a);case 22:return Ng(t,n,a,n.pendingProps);case 24:return $s(n),r=kn(Rn),t===null?(c=Hf(),c===null&&(c=rn,f=Bf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Vf(n),us(n,Rn,c)):((t.lanes&a)!==0&&(Xf(t,n),jo(n,null,null,a),Qo()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),us(n,Rn,r)):(r=f.cache,us(n,Rn,r),r!==c.cache&&zf(n,[Rn],a,!0))),Ln(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Re&&rc(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Hr(t,n),Ln(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Xa(t){t.flags|=4}function bh(t,n,a,r,c){var f;if((f=(t.mode&32)!==0)&&(f=a===null?g_(n,r):g_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(yv())t.flags|=8192;else throw ir=dc,Gf}else t.flags&=-16777217}function Vg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!v_(n))if(yv())t.flags|=8192;else throw ir=dc,Gf}function Lc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ua():536870912,t.lanes|=n,Wr|=n)}function il(t,n){if(!Re)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function ln(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function ty(t,n,a){var r=n.pendingProps;switch(Uf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Fa(Rn),Z(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ur(n)?Xa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pf())),ln(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Xa(n),f!==null?(ln(n),Vg(n,f)):(ln(n),bh(n,c,null,r,a))):f?f!==t.memoizedState?(Xa(n),ln(n),Vg(n,f)):(ln(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Xa(n),ln(n),bh(n,c,t,r,a)),null;case 27:if(He(n),a=hn.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Xa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ln(n),n.subtreeFlags&=-33554433,null}t=Ze.current,Ur(n)?S0(n):(t=l_(c,r,a),n.stateNode=t,Xa(n))}return ln(n),n.subtreeFlags&=-33554433,null;case 5:if(He(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Xa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ln(n),n.subtreeFlags&=-33554433,null}if(f=Ze.current,Ur(n))S0(n);else{var v=pl(hn.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(c,{is:r.is}):v.createElement(c)}}f[En]=n,f[An]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Zn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Xa(n)}}return ln(n),n.subtreeFlags&=-33554433,bh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Xa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=hn.current,Ur(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=Bn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[En]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Gv(t.nodeValue,a)),t||cs(n,!0)}else t=pl(t).createTextNode(r),t[En]=n,n.stateNode=t}return ln(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Ur(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[En]=n}else Qs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),t=!1}else a=Pf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Mi(n),n):(Mi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ln(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ur(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[En]=n}else Qs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),c=!1}else c=Pf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Mi(n),n):(Mi(n),null)}return Mi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Lc(n,n.updateQueue),ln(n),null);case 4:return Z(),t===null&&sd(n.stateNode.containerInfo),n.flags|=67108864,ln(n),null;case 10:return Fa(n.type),ln(n),null;case 19:if(Kf(n),r=n.memoizedState,r===null)return ln(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)il(r,!1);else{if(Mn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=vc(t),f!==null){for(n.flags|=128,il(r,!1),t=f.updateQueue,n.updateQueue=t,Lc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)m0(a,t),a=a.sibling;return Jo(n,qn.current&1|2),Re&&za(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&ht()>kc&&(n.flags|=128,c=!0,il(r,!1),n.lanes=4194304)}else{if(!c)if(t=vc(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Lc(n,t),il(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!Re)return ln(n),null}else 2*ht()-r.renderingStartTime>kc&&a!==536870912&&(n.flags|=128,c=!0,il(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=ht(),t.sibling=null,f=qn.current,f=c?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Re?Jo(n,f):(a=f,re(Wn,n),re(qn,a),$n===null&&($n=n)),Re&&za(n,r.treeForkCount),t}return ln(n),null;case 22:case 23:return Mi(n),Yf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),a=n.updateQueue,a!==null&&Lc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Pe(er),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fa(Rn),ln(n),null;case 25:return null;case 30:return n.flags|=33554432,ln(n),null}throw Error(s(156,n.tag))}function ey(t,n){switch(Uf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Fa(Rn),Z(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return He(n),null;case 31:if(n.memoizedState!==null){if(Mi(n),n.alternate===null)throw Error(s(340));Qs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Mi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Qs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Kf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return Z(),null;case 10:return Fa(n.type),null;case 22:case 23:return Mi(n),Yf(),t!==null&&Pe(er),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Fa(Rn),null;case 25:return null;default:return null}}function Xg(t,n){switch(Uf(n),n.tag){case 3:Fa(Rn),Z();break;case 26:case 27:case 5:He(n);break;case 4:Z();break;case 31:n.memoizedState!==null&&Mi(n);break;case 13:Mi(n);break;case 19:Kf(n);break;case 10:Fa(n.type);break;case 22:case 23:Mi(n),Yf(),t!==null&&Pe(er);break;case 24:Fa(Rn)}}function al(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==c)}}catch(R){Je(n,n.return,R)}}function _s(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var v=r.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,c=n;var B=a,$=R;try{$()}catch(ct){Je(c,B,ct)}}}r=r.next}while(r!==f)}}catch(ct){Je(n,n.return,ct)}}function kg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{U0(n,a)}catch(r){Je(t,t.return,r)}}}function Wg(t,n,a){a.props=rr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Je(t,n,r)}}function pa(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var c=t.stateNode,f=Oa(t.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=Jv(f)),r=c.ref;break;case 7:if(t.stateNode===null){var v=new Ai(t);g(t.child,!1,Wy,v,void 0,void 0),t.stateNode=v}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(R){Je(t,n,R)}}function Yn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Je(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Je(t,n,c)}else a.current=null}function Uc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)a_(t.stateNode,n[a])}function qg(t){for(var n=t.return;n!==null&&(Ah(n)&&a_(t.stateNode,n.stateNode),!Th(n));)n=n.return}function sl(t){for(var n=t.return;n!==null&&(Ah(n)&&qy(t.stateNode,n.stateNode),!Th(n));)n=n.return}function Th(t){return t.tag===5||t.tag===3||t.tag===27}function Ah(t){return t&&t.tag===7&&t.stateNode!==null}function Rh(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Je(t,t.return,c)}}function wh(t,n,a){try{var r=t.stateNode;Ry(r,t.type,a,n),r[An]=n}catch(c){Je(t,t.return,c)}}function Yg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ts(t.type)||t.tag===4}function Ch(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Yg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ts(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dh(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=fa)),Uc(t,r),ee=!0;else if(c!==4&&(c===27&&(Uc(t,r),r=null,Ts(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Dh(t,n,a,r),t=t.sibling;t!==null;)Dh(t,n,a,r),t=t.sibling}function Oc(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Uc(t,r),ee=!0;else if(c!==4&&(c===27&&(Uc(t,r),r=null,Ts(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Oc(t,n,a,r),t=t.sibling;t!==null;)Oc(t,n,a,r),t=t.sibling}function Zg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Zn(n,r,a),n[En]=t,n[An]=a}catch(f){Je(t,t.return,f)}}var Pc=!1,yi=null;function Kg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Pc=!0)}var ma=null;function Qg(){var t=ma;return ma=null,t}var di=0;function Gr(t,n,a,r,c){return di=0,jg(t.child,n,a,r,c)}function jg(t,n,a,r,c){for(var f=!1;t!==null;){if(t.tag===5){var v=t.stateNode;if(r!==null){var R=dd(v);r.push(R),R.view&&(f=!0)}else f||dd(v).view&&(f=!0);Pc=!0,Qv(v,di===0?n:n+"_"+di,a),di++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||jg(t.child,n,a,r,c)&&(f=!0));t=t.sibling}return f}function ga(t,n){for(;t!==null;)t.tag===5?jv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ga(t.child,n)),t=t.sibling}function Ic(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Ic(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=Pa(n.default,n.share),n!=="none"&&(Gr(t,a,n,null,!1)||ga(t.child,!1))}t=t.sibling}}function Nh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,c=Oa(r,a),f=Pa(r.default,a.paired?r.share:r.enter);f!=="none"?Gr(t,c,f,null,!1)?(Ic(t),a.paired||n||Kr(t,r.onEnter)):ga(t.child,!1):Ic(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Nh(t,n),t=t.sibling;else Ic(t)}function Lh(t){if(yi!==null&&yi.size!==0){var n=yi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var f=Pa(a.default,a.share);if(f!=="none"&&(Gr(t,r,f,null,!1)?(f=t.stateNode,c.paired=f,f.paired=c,Kr(t,a.onShare)):ga(t.child,!1)),n.delete(r),n.size===0)break}}}Lh(t)}t=t.sibling}}}function Uh(t){if(t.tag===30){var n=t.memoizedProps,a=Oa(n,t.stateNode),r=yi!==null?yi.get(a):void 0,c=Pa(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Gr(t,a,c,null,!1)?r!==void 0?(c=t.stateNode,r.paired=c,c.paired=r,yi.delete(a),Kr(t,n.onShare)):Kr(t,n.onExit):ga(t.child,!1)),yi!==null&&Lh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Uh(t),t=t.sibling;else yi!==null&&Lh(t)}function Jg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=Oa(n,t.stateNode);n=Pa(n.default,n.update),t.flags&=-5,n!=="none"&&Gr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Jg(t);t=t.sibling}}function Oh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ga(t.child,!1))}Oh(t)}t=t.sibling}}function zc(t){if(t.tag===30)t.stateNode.paired=null,ga(t.child,!1),Oh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)zc(t),t=t.sibling;else Oh(t)}function $g(t){for(t=t.child;t!==null;)t.tag===30?ga(t.child,!1):(t.subtreeFlags&33554432)!==0&&$g(t),t=t.sibling}function Ph(t,n,a,r,c,f,v){for(var R=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&di<f.length){var $=f[di],ct=dd(B);($.view||ct.view)&&(R=!0);var St;if(St=(t.flags&4)===0)if(ct.clip)St=!0;else{St=$.rect;var j=ct.rect;St=St.y!==j.y||St.x!==j.x||St.height!==j.height||St.width!==j.width}St&&(t.flags|=4),ct.abs?ct=!$.abs:($=$.rect,ct=ct.rect,ct=$.height!==ct.height||$.width!==ct.width),ct&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Qv(B,di===0?a:a+"_"+di,c),R&&(t.flags&4)!==0||(ma===null&&(ma=[]),ma.push(B,di===0?r:r+"_"+di,n.memoizedProps)),di++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&v?t.flags|=n.flags&32:Ph(t,n.child,a,r,c,f,v)&&(R=!0));n=n.sibling}return R}function tv(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,c=Oa(a,r),f=Pa(a.default,a.update),v;v=t.memoizedState,t.memoizedState=null,r=t;var R=t.child;di=0,c=Ph(r,R,c,c,f,v,!1),(t.flags&4)!==0&&c&&Kr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&tv(t);t=t.sibling}}var Fn=!1,qe=!1,va=!1,Ih=!1,ev=typeof WeakSet=="function"?WeakSet:Set,Hn=null,_a=!1,rl=!1,Bc=!1,zh=!1;function ny(t,n,a){if(t=t.containerInfo,ld=so,t=s0(t),Ef(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var f=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{r.nodeType,v.nodeType}catch{r=null;break t}var R=0,B=-1,$=-1,ct=0,St=0,j=t,ot=null;e:for(;;){for(var Vt;j!==r||f!==0&&j.nodeType!==3||(B=R+f),j!==v||c!==0&&j.nodeType!==3||($=R+c),j.nodeType===3&&(R+=j.nodeValue.length),(Vt=j.firstChild)!==null;)ot=j,j=Vt;for(;;){if(j===t)break e;if(ot===r&&++ct===f&&(B=R),ot===v&&++St===c&&($=R),(Vt=j.nextSibling)!==null)break;j=ot,ot=j.parentNode}j=Vt}r=B===-1||$===-1?null:{start:B,end:$}}else r=null}r=r||{start:0,end:0}}else r=null;for(cd={focusedElem:t,selectionRange:r},so=!1,a=(a&335544064)===a,Hn=n,n=a?9270:1024;Hn!==null;){if(t=Hn,a&&(r=t.deletions,r!==null))for(f=0;f<r.length;f++)a&&Uh(r[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&Kg(t),Fc(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Uh(r),Fc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Kg(t),Fc(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Hn=r):(a&&Jg(t),Fc(a))}}yi=null}function Fc(t){for(;Hn!==null;){var n=Hn,a=t,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var v=rr(n.type,c);a=f.getSnapshotBeforeUpdate(v,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){Je(n,n.return,R)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)gd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":gd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=Oa(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=Pa(c.default,c.update),c!=="none"&&Gr(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Hn=r;break}Hn=n.return}}function nv(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:xa(t,a),r&4&&al(5,a);break;case 1:if(xa(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Je(a,a.return,v)}else{var c=rr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Je(a,a.return,v)}}r&64&&kg(a),r&512&&pa(a,a.return);break;case 3:if(xa(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{U0(t,n)}catch(v){Je(a,a.return,v)}}break;case 27:n===null&&r&4&&Zg(a);case 26:case 5:xa(t,a),n===null&&r&4&&Rh(a),r&512&&pa(a,a.return);break;case 12:xa(t,a);break;case 31:xa(t,a),r&4&&rv(t,a);break;case 13:xa(t,a),r&4&&ov(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=py.bind(null,a),Ky(t,a))));break;case 22:if(r=a.memoizedState!==null||Fn,!r){var f=n!==null&&n.memoizedState!==null||qe;n=Fn,c=qe,Fn=r,(qe=f)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),ta(t,a,r)):xa(t,a),Fn=n,qe=c}break;case 30:xa(t,a),r&512&&pa(a,a.return);break;case 7:r&512&&pa(a,a.return);default:xa(t,a)}}function Bh(t,n){for(t=t.child;t!==null;)iv(t,n),t=t.sibling}function iv(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=t.stateNode,f=t.memoizedProps.style,v=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(B){Je(t,t.return,B)}Fh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,ee=!0}catch(B){Je(t,t.return,B)}break;case 18:try{var R=t.stateNode;n?Kv(R,!0):Kv(t.stateNode,!1)}catch(B){Je(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&Bh(t,n);break;default:Bh(t,n)}}function Fh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:iv(a,r);break t;case 22:a.memoizedState===null&&Fh(a,r);break t;default:Fh(a,r)}}t=t.sibling}}function av(t){var n=t.alternate;n!==null&&(t.alternate=null,av(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ot(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var mn=null,pi=!1;function Ji(t,n,a){for(a=a.child;a!==null;)sv(t,n,a),a=a.sibling}function sv(t,n,a){if(ne&&typeof ne.onCommitFiberUnmount=="function")try{ne.onCommitFiberUnmount(Yt,a)}catch{}switch(a.tag){case 26:qe||Yn(a,n),Ji(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!qe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Yn(a,n),sl(a);var r=mn,c=pi;Ts(a.type)&&(mn=a.stateNode,pi=!1),Ji(t,n,a),c_(a.stateNode,a.type,a.memoizedProps),mn=r,pi=c;break;case 5:qe||Yn(a,n),sl(a);case 6:if(a.tag===6&&sl(a),r=mn,c=pi,mn=null,Ji(t,n,a),mn=r,pi=c,mn!==null)if(pi)try{(mn.nodeType===9?mn.body:mn.nodeName==="HTML"?mn.ownerDocument.body:mn).removeChild(a.stateNode),ee=!0}catch(f){Je(a,n,f)}else try{mn.removeChild(a.stateNode),ee=!0}catch(f){Je(a,n,f)}break;case 18:mn!==null&&(pi?(t=mn,Zv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ro(t)):Zv(mn,a.stateNode));break;case 4:r=mn,c=pi,mn=a.stateNode.containerInfo,pi=!0,Ji(t,n,a),mn=r,pi=c;break;case 0:case 11:case 14:case 15:_s(2,a,n),qe||_s(4,a,n),Ji(t,n,a);break;case 1:qe||(Yn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Wg(a,n,r)),Ji(t,n,a);break;case 21:Ji(t,n,a);break;case 22:qe=(r=qe)||a.memoizedState!==null,Ji(t,n,a),qe=r;break;case 30:Yn(a,n),Ji(t,n,a);break;case 7:qe||Yn(a,n),Ji(t,n,a);break;default:Ji(t,n,a)}}function rv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ro(t)}catch(a){Je(n,n.return,a)}}}function ov(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ro(t)}catch(a){Je(n,n.return,a)}}function iy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ev),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ev),n;default:throw Error(s(435,t.tag))}}function Hc(t,n){var a=iy(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=my.bind(null,t,r);r.then(c,c)}})}function ri(t,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var f=r[c],v=t,R=n,B=R;t:for(;B!==null;){switch(B.tag){case 27:if(Ts(B.type)){mn=B.stateNode,pi=!1;break t}break;case 5:mn=B.stateNode,pi=!1;break t;case 3:case 4:mn=B.stateNode.containerInfo,pi=!0;break t}B=B.return}if(mn===null)throw Error(s(160));sv(v,R,f),mn=null,pi=!1,v=f.alternate,v!==null&&(v.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)lv(n,t,a),n=n.sibling}var $i=null;function lv(t,n,a){var r=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var v=r[f];v.ref.impl=v.nextImpl}ri(n,t,a),oi(t),c&4&&(_s(3,t,t.return),al(3,t),_s(5,t,t.return));break;case 1:ri(n,t,a),oi(t),c&512&&(qe||r===null||Yn(r,r.return)),c&64&&Fn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=$i,ri(n,t,a),oi(t),c&512&&(qe||r===null||Yn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Fn)t.stateNode=Wv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Ut]||r[En]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),Zn(r,n,a),r[En]=t,bt(r),n=r;break t;case"link":if(f=m_("link","href",c).get(n+(a.href||""))){for(v=0;v<f.length;v++)if(r=f[v],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(v,1);break e}}r=c.createElement(n),Zn(r,n,a),c.head.appendChild(r);break;case"meta":if(f=m_("meta","content",c).get(n+(a.content||""))){for(v=0;v<f.length;v++)if(r=f[v],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(v,1);break e}}r=c.createElement(n),Zn(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[En]=t,bt(r),n=r}t.stateNode=n}else Fn||Ed(f,t.type,t.stateNode);else t.stateNode=p_(f,a,t.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||qe||n.parentNode.removeChild(n)):c.count--,a===null?Fn||Ed(f,t.type,t.stateNode):p_(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&wh(t,t.memoizedProps,r.memoizedProps);break;case 27:ri(n,t,a),oi(t),c&512&&(qe||r===null||Yn(r,r.return)),r!==null&&c&4&&wh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(f=va,va=!1,ri(n,t,a),va=f,oi(t),c&512&&(qe||r===null||Yn(r,r.return)),t.flags&32){n=t.stateNode;try{Er(n,""),ee=!0}catch(ct){Je(t,t.return,ct)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,wh(t,n,r!==null?r.memoizedProps:n)),c&1024&&(Ih=!0);break;case 6:if(ri(n,t,a),oi(t),c&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,ee=!0}catch(ct){Je(t,t.return,ct)}}break;case 3:if(ee=!1,eu=null,f=$i,$i=ml(n.containerInfo),ri(n,t,a),$i=f,oi(t),c&4&&r!==null&&r.memoizedState.isDehydrated)try{ro(n.containerInfo)}catch(ct){Je(t,t.return,ct)}Ih&&(Ih=!1,cv(t)),ee=!1;break;case 4:c=va,va=Fn,r=Xn(),f=$i,$i=ml(t.stateNode.containerInfo),ri(n,t,a),oi(t),$i=f,ee&&rl&&(Bc=!0),ee=r,va=c;break;case 12:ri(n,t,a),oi(t);break;case 31:ri(n,t,a),oi(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Hc(t,n)));break;case 13:ri(n,t,a),oi(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Xc=ht()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Hc(t,n)));break;case 22:f=t.memoizedState!==null,v=r!==null&&r.memoizedState!==null;var R=Fn,B=qe,$=va;Fn=R||f,va=$||f,qe=B||v,ri(n,t,a),qe=B,va=$,Fn=R,oi(t),c&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||v||Fn||qe||(n=v||qe,a=Fn,r=qe,Fn=f||Fn,qe=n,xs(t,2),Fn=a,qe=r),!f&&va||Bh(t,f)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Hc(t,a))));break;case 19:ri(n,t,a),oi(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Hc(t,n)));break;case 30:c&512&&(qe||r===null||Yn(r,r.return)),c=Xn(),f=rl,v=(a&335544064)===a,R=t.memoizedProps,rl=v&&Pa(R.default,R.update)!=="none",ri(n,t,a),oi(t),v&&r!==null&&ee&&(t.flags|=4),rl=f,ee=c;break;case 21:break;case 7:c&512&&(qe||r===null||Yn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:ri(n,t,a),oi(t)}}function oi(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Yg(r)){a=r;break}r=r.return}r=null;for(var c=t.return;c!==null;){if(Ah(c)){var f=c.stateNode;r===null?r=[f]:r.push(f)}if(Th(c))break;c=c.return}var v=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var R=a.stateNode,B=Ch(t);Oc(t,B,R,v);break;case 5:var $=a.stateNode;a.flags&32&&(Er($,""),a.flags&=-33);var ct=Ch(t);Oc(t,ct,$,v);break;case 3:case 4:var St=a.stateNode.containerInfo,j=Ch(t);Dh(t,j,St,v);break;default:throw Error(s(161))}}catch(ot){Je(t,t.return,ot)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function cv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;cv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,so=!0,n.reset(),so=!1),t=t.sibling}}function Vr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)uv(n,t),n=n.sibling;else tv(n)}function uv(t,n){var a=t.alternate;if(a===null)Nh(t,!1);else switch(t.tag){case 3:if(zh=_a=!1,Qg(),Vr(n,t),!_a&&!Bc){if(t=ma,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var c=t[r+1];jv(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),zh=!0}ma=null;break;case 5:Vr(n,t);break;case 4:r=_a,_a=!1,Vr(n,t),_a&&(Bc=!0),_a=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Nh(t,!1):Vr(n,t));break;case 30:r=_a,c=Qg(),_a=!1,Vr(n,t),_a&&(t.flags|=4);var f=t.memoizedProps,v=t.stateNode;n=Oa(f,v),v=Oa(a.memoizedProps,v);var R=Pa(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,di=0,n=Ph(t,a,n,v,R,f,!0),di!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Kr(t,t.memoizedProps.onUpdate),ma=c):c!==null&&(c.push.apply(c,ma),ma=c),_a=(t.flags&32)!==0?!0:r;break;default:Vr(n,t)}}function xa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)nv(t,n.alternate,n),n=n.sibling}function xs(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:_s(4,a,a.return),xs(a,r);break;case 1:Yn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&Wg(a,a.return,c),xs(a,r);break;case 27:(r&2)!==0&&c_(a.stateNode,a.type,a.memoizedProps);case 5:Yn(a,a.return),a.tag!==5&&a.tag!==27||sl(a),xs(a,r);break;case 6:sl(a);break;case 26:Yn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||qe||c.parentNode.removeChild(c),xs(a,r);break;case 22:a.memoizedState===null&&xs(a,r);break;case 30:Yn(a,a.return),xs(a,r);break;case 7:Yn(a,a.return);default:xs(a,r)}t=t.sibling}}function ta(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,v=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:ta(c,f,a),al(4,f);break;case 1:if(ta(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ct){Je(r,r.return,ct)}if(r=f,c=r.updateQueue,c!==null){var B=r.stateNode;try{var $=c.shared.hiddenCallbacks;if($!==null)for(c.shared.hiddenCallbacks=null,c=0;c<$.length;c++)L0($[c],B)}catch(ct){Je(r,r.return,ct)}}R&&v&64&&kg(f),pa(f,f.return);break;case 27:(a&2)!==0&&Zg(f);case 5:f.tag!==5&&f.tag!==27||qg(f),ta(c,f,a),R&&r===null&&v&4&&Rh(f),pa(f,f.return);break;case 6:qg(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||Fn||Ed(ml(B.ownerDocument),f.type,B),ta(c,f,a),R&&r===null&&v&4&&Rh(f),pa(f,f.return);break;case 12:ta(c,f,a);break;case 31:ta(c,f,a),R&&v&4&&rv(c,f);break;case 13:ta(c,f,a),R&&v&4&&ov(c,f);break;case 22:f.memoizedState===null&&ta(c,f,a),pa(f,f.return);break;case 30:ta(c,f,a),pa(f,f.return);break;case 7:pa(f,f.return);default:ta(c,f,a)}n=n.sibling}}function Hh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Wo(a))}function Gh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Wo(t))}function Fi(t,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)fv(t,n,a,r),n=n.sibling;else c&&$g(n)}function fv(t,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&zc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Fi(t,n,a,r),f&2048&&al(9,n);break;case 1:Fi(t,n,a,r);break;case 3:Fi(t,n,a,r),c&&zh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Wo(f)));break;case 12:if(f&2048){Fi(t,n,a,r),f=n.stateNode;try{var v=n.memoizedProps,R=v.id,B=v.onPostCommit;typeof B=="function"&&B(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch($){Je(n,n.return,$)}}else Fi(t,n,a,r);break;case 31:Fi(t,n,a,r);break;case 13:Fi(t,n,a,r);break;case 23:break;case 22:v=n.stateNode,R=n.alternate,n.memoizedState!==null?(c&&R!==null&&R.memoizedState===null&&zc(R),v._visibility&2?Fi(t,n,a,r):ol(t,n)):(c&&R!==null&&R.memoizedState!==null&&zc(n),v._visibility&2?Fi(t,n,a,r):(v._visibility|=2,Xr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Hh(R,n);break;case 24:Fi(t,n,a,r),f&2048&&Gh(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(ga(f.child,!0),ga(n.child,!0))),Fi(t,n,a,r);break;default:Fi(t,n,a,r)}}function Xr(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,R=a,B=r,$=v.flags;switch(v.tag){case 0:case 11:case 15:Xr(f,v,R,B,c),al(8,v);break;case 23:break;case 22:var ct=v.stateNode;v.memoizedState!==null?ct._visibility&2?Xr(f,v,R,B,c):ol(f,v):(ct._visibility|=2,Xr(f,v,R,B,c)),c&&$&2048&&Hh(v.alternate,v);break;case 24:Xr(f,v,R,B,c),c&&$&2048&&Gh(v.alternate,v);break;default:Xr(f,v,R,B,c)}n=n.sibling}}function ol(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:ol(a,r),c&2048&&Hh(r.alternate,r);break;case 24:ol(a,r),c&2048&&Gh(r.alternate,r);break;default:ol(a,r)}n=n.sibling}}var or=8192;function lr(t,n,a){if(t.subtreeFlags&or)for(t=t.child;t!==null;)hv(t,n,a),t=t.sibling}function hv(t,n,a){switch(t.tag){case 26:lr(t,n,a),t.flags&or&&(t.memoizedState!==null?cE(a,$i,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&x_(a,t)));break;case 5:lr(t,n,a),t.flags&or&&(t=t.stateNode,(n&335544128)===n&&x_(a,t));break;case 3:case 4:var r=$i;$i=ml(t.stateNode.containerInfo),lr(t,n,a),$i=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=or,or=16777216,lr(t,n,a),or=r):lr(t,n,a));break;case 30:if((t.flags&or)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var c=t.stateNode;c.paired=null,yi===null&&(yi=new Map),yi.set(r,c)}lr(t,n,a);break;default:lr(t,n,a)}}function dv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ll(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Hn=r,mv(r,t)}dv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pv(t),t=t.sibling}function pv(t){switch(t.tag){case 0:case 11:case 15:ll(t),t.flags&2048&&_s(9,t,t.return);break;case 3:ll(t);break;case 12:ll(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Gc(t)):ll(t);break;default:ll(t)}}function Gc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Hn=r,mv(r,t)}dv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_s(8,n,n.return),Gc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gc(n));break;default:Gc(n)}t=t.sibling}}function mv(t,n){for(;Hn!==null;){var a=Hn;switch(a.tag){case 0:case 11:case 15:_s(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Wo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Hn=r;else t:for(a=t;Hn!==null;){r=Hn;var c=r.sibling,f=r.return;if(av(r),r===a){Hn=null;break t}if(c!==null){c.return=f,Hn=c;break t}Hn=f}}}var ay={getCacheForType:function(t){var n=kn(Rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return kn(Rn).controller.signal}},sy=typeof WeakMap=="function"?WeakMap:Map,ke=0,rn=null,Ne=null,Ue=0,je=0,Ei=null,Ss=!1,kr=!1,Vh=!1,ka=0,Mn=0,Ms=0,cr=0,Vc=0,bi=0,Wr=0,cl=null,mi=null,Xh=!1,Xc=0,gv=0,kc=1/0,Wc=null,ys=null,vn=0,ea=null,ur=null,Sa=0,kh=0,Wh=null,vv=null,qr=null,Yr=null,Zr=null,ul=0,qc=null;function Ti(){return(ke&2)!==0&&Ue!==0?Ue&-Ue:Tt.T!==null?ed():Ws()}function _v(){if(bi===0)if((Ue&536870912)===0||Re){var t=zn;zn<<=1,(zn&3932160)===0&&(zn=262144),bi=t}else bi=536870912;return t=Wn.current,t!==null&&(t.flags|=32),bi}function Kr(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=Jv(Oa(t.memoizedProps,a))),Yr===null&&(Yr=[]),Yr.push(n.bind(null,r))}}function gi(t,n,a){(t===rn&&(je===2||je===9)||t.cancelPendingCommit!==null)&&(Qr(t,0),Es(t,Ue,bi,!1)),Qi(t,a),((ke&2)===0||t!==rn)&&(t===rn&&((ke&2)===0&&(cr|=a),Mn===4&&Es(t,Ue,bi,!1)),Ma(t))}function xv(t,n,a){if((ke&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ki(t,n),c=r?ly(t,n):Yh(t,n,!0),f=r;do{if(c===0){kr&&!r&&Es(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ry(a)){c=Yh(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var R=t;c=cl;var B=R.current.memoizedState.isDehydrated;if(B&&(Qr(R,v).flags|=256),v=Yh(R,v,!1),v!==2&&v!==6){if(Vh&&!B){R.errorRecoveryDisabledLanes|=f,cr|=f,c=4;break t}f=mi,mi=c,f!==null&&(mi===null?mi=f:mi.push.apply(mi,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){Qr(t,0),Es(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Es(r,n,bi,!Ss);break t;case 2:mi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Xc+300-ht(),10<c)){if(Es(r,n,bi,!Ss),xi(r,0,!0)!==0)break t;Sa=n,r.timeoutHandle=hd(Sv.bind(null,r,a,mi,Wc,Xh,n,bi,cr,Wr,Ss,f,"Throttled",-0,0),c);break t}Sv(r,a,mi,Wc,Xh,n,bi,cr,Wr,Ss,f,null,-0,0)}}break}while(!0);Ma(t)}function Sv(t,n,a,r,c,f,v,R,B,$,ct,St,j,ot){t.timeoutHandle=-1;var Vt=n.subtreeFlags,$t=(f&335544064)===f;if(St=null,($t||Vt&8192||(Vt&16785408)===16785408)&&(St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fa},yi=null,hv(n,f,St),$t&&(Vt=St,$t=t.containerInfo,$t=($t.nodeType===9?$t:$t.ownerDocument).__reactViewTransition,$t!=null&&(Vt.count++,Vt.waitingForViewTransition=!0,Vt=_l.bind(Vt),$t.finished.then(Vt,Vt))),Vt=(f&62914560)===f?Xc-ht():(f&4194048)===f?gv-ht():0,Vt=uE(St,Vt),Vt!==null)){Sa=f,t.cancelPendingCommit=Vt(wv.bind(null,t,n,f,a,r,c,v,R,B,$,ct,St,null,j,ot)),Es(t,f,v,!$);return}wv(t,n,f,a,r,c,v,R,B,$,ct,St)}function ry(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Si(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Es(t,n,a,r){n=la(t,n),n&=~Vc,n&=~cr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Qt(c),v=1<<f;r[f]=-1,c&=~v}a!==0&&Xs(t,a,n)}function Yc(){return(ke&6)===0?(fl(0),!1):!0}function qh(){if(Ne!==null){if(je===0)var t=Ne.return;else t=Ne,Ba=js=null,th(t),Ir=null,Zo=0,t=Ne;for(;t!==null;)Xg(t.alternate,t),t=t.return;Ne=null}}function Qr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Dy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Sa=0,qh(),rn=t,Ne=a=Ia(t.current,null),Ue=n,je=0,Ei=null,Ss=!1,kr=Ki(t,n),Vh=!1,Wr=bi=Vc=cr=Ms=Mn=0,mi=cl=null,Xh=!1,ka=la(t,n),ec(),a}function Mv(t,n){Ee=null,Tt.H=Ac,n===Pr||n===hc?(n=w0(),je=3):n===Gf?(n=w0(),je=4):je=n===mh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ei=n,Ne===null&&(Mn=1,Rc(t,Pi(n,t.current)))}function yv(){var t=Wn.current;return t===null?!0:(Ue&4194048)===Ue?$n===null:(Ue&62914560)===Ue||(Ue&536870912)!==0?t===$n:!1}function Ev(){var t=Tt.H;return Tt.H=Ac,t===null?Ac:t}function bv(){var t=Tt.A;return Tt.A=ay,t}function Zc(){Mn=4,Ss||(Ue&4194048)!==Ue&&Wn.current!==null||(kr=!0),(Ms&134217727)===0&&(cr&134217727)===0||rn===null||Es(rn,Ue,bi,!1)}function Yh(t,n,a){var r=ke;ke|=2;var c=Ev(),f=bv();(rn!==t||Ue!==n)&&(Wc=null,Qr(t,n)),n=!1;var v=Mn;t:do try{if(je!==0&&Ne!==null){var R=Ne,B=Ei;switch(je){case 8:qh(),v=6;break t;case 3:case 2:case 9:case 6:Wn.current===null&&(n=!0);var $=je;if(je=0,Ei=null,jr(t,R,B,$),a&&kr){v=0;break t}break;default:$=je,je=0,Ei=null,jr(t,R,B,$)}}oy(),v=Mn;break}catch(ct){Mv(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Ba=js=null,ke=r,Tt.H=c,Tt.A=f,Ne===null&&(rn=null,Ue=0,ec()),v}function oy(){for(;Ne!==null;)Tv(Ne)}function ly(t,n){var a=ke;ke|=2;var r=Ev(),c=bv();rn!==t||Ue!==n?(Wc=null,kc=ht()+500,Qr(t,n)):kr=Ki(t,n);t:do try{if(je!==0&&Ne!==null){n=Ne;var f=Ei;e:switch(je){case 1:je=0,Ei=null,jr(t,n,f,1);break;case 2:case 9:if(A0(f)){je=0,Ei=null,Av(n);break}n=function(){je!==2&&je!==9||rn!==t||(je=7),Ma(t)},f.then(n,n);break t;case 3:je=7;break t;case 4:je=5;break t;case 7:A0(f)?(je=0,Ei=null,Av(n)):(je=0,Ei=null,jr(t,n,f,7));break;case 5:var v=null;switch(Ne.tag){case 26:v=Ne.memoizedState;case 5:case 27:var R=Ne;if(v?v_(v):R.stateNode.complete){je=0,Ei=null;var B=R.sibling;if(B!==null)Ne=B;else{var $=R.return;$!==null?(Ne=$,Kc($)):Ne=null}break e}}je=0,Ei=null,jr(t,n,f,5);break;case 6:je=0,Ei=null,jr(t,n,f,6);break;case 8:qh(),Mn=6;break t;default:throw Error(s(462))}}cy();break}catch(ct){Mv(t,ct)}while(!0);return Ba=js=null,Tt.H=r,Tt.A=c,ke=a,Ne!==null?0:(rn=null,Ue=0,ec(),Mn)}function cy(){for(;Ne!==null&&!It();)Tv(Ne)}function Tv(t){var n=Gg(t.alternate,t,ka);t.memoizedProps=t.pendingProps,n===null?Kc(t):Ne=n}function Av(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Og(a,n,n.pendingProps,n.type,void 0,Ue);break;case 11:n=Og(a,n,n.pendingProps,n.type.render,n.ref,Ue);break;case 5:th(n);var r=n;r===Bn&&(Re?(oc(r),r.tag===5&&r.stateNode!=null&&(on=r.stateNode)):(oc(r),Re=!0));default:Xg(a,n),n=Ne=m0(n,ka),n=Gg(a,n,ka)}t.memoizedProps=t.pendingProps,n===null?Kc(t):Ne=n}function jr(t,n,a,r){Ba=js=null,th(n),Ir=null,Zo=0;var c=n.return;try{if(QM(t,c,n,a,Ue)){Mn=1,Rc(t,Pi(a,t.current)),Ne=null;return}}catch(f){if(c!==null)throw Ne=c,f;Mn=1,Rc(t,Pi(a,t.current)),Ne=null;return}n.flags&32768?(Re||r===1?t=!0:kr||(Ue&536870912)!==0?t=!1:(Ss=t=!0,(r===2||r===9||r===3||r===6)&&(r=Wn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Rv(n,t)):Kc(n)}function Kc(t){var n=t;do{if((n.flags&32768)!==0){Rv(n,Ss);return}t=n.return;var a=ty(n.alternate,n,ka);if(a!==null){Ne=a;return}if(n=n.sibling,n!==null){Ne=n;return}Ne=n=t}while(n!==null);Mn===0&&(Mn=5)}function Rv(t,n){do{var a=ey(t.alternate,t);if(a!==null){a.flags&=32767,Ne=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ne=t;return}Ne=t=a}while(t!==null);Mn=6,Ne=null}function wv(t,n,a,r,c,f,v,R,B,$,ct,St){t.cancelPendingCommit=null;do Qc();while(vn!==0);if((ke&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===rn&&(Ne=rn=null,Ue=0),ur=n,ea=t,Sa=a,Wh=c,vv=r,uy(t,n,a,v,R,B,St)}}function uy(t,n,a,r,c,f,v){var R=n.lanes|n.childLanes;if(kh=R,R|=wf,is(t,a,R,r,c,f),Yr=null,(a&335544064)===a?(Zr=BM(t),r=10262):(Zr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,gy(mt,function(){return jh(),null})):(t.callbackNode=null,t.callbackPriority=0),Pc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null,c=Xt.p,Xt.p=2,f=ke,ke|=4;try{ny(t,n,a)}finally{ke=f,Xt.p=c,Tt.T=r}}vn=1,Pc?qr=Iy(v,t.containerInfo,Zr,Zh,Kh,hy,Qh,jh,fy):(Zh(),Kh(),Qh())}function fy(t){if(vn!==0){var n=ea.onRecoverableError;n(t,{componentStack:null})}}function hy(){vn===3&&(vn=0,uv(ur,ea),vn=4)}function Zh(){if(vn===1){vn=0;var t=ea,n=ur,a=Sa,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null;var c=Xt.p;Xt.p=2;var f=ke;ke|=4;try{rl=Bc=!1,lv(n,t,a),a=cd;var v=s0(t.containerInfo),R=a.focusedElem,B=a.selectionRange;if(v!==R&&R&&R.ownerDocument&&a0(R.ownerDocument.documentElement,R)){if(B!==null&&Ef(R)){var $=B.start,ct=B.end;if(ct===void 0&&(ct=$),"selectionStart"in R)R.selectionStart=$,R.selectionEnd=Math.min(ct,R.value.length);else{var St=R.ownerDocument||document,j=St&&St.defaultView||window;if(j.getSelection){var ot=j.getSelection(),Vt=R.textContent.length,$t=Math.min(B.start,Vt),be=B.end===void 0?$t:Math.min(B.end,Vt);!ot.extend&&$t>be&&(v=be,be=$t,$t=v);var J=i0(R,$t),W=i0(R,be);if(J&&W&&(ot.rangeCount!==1||ot.anchorNode!==J.node||ot.anchorOffset!==J.offset||ot.focusNode!==W.node||ot.focusOffset!==W.offset)){var st=St.createRange();st.setStart(J.node,J.offset),ot.removeAllRanges(),$t>be?(ot.addRange(st),ot.extend(W.node,W.offset)):(st.setEnd(W.node,W.offset),ot.addRange(st))}}}}for(St=[],ot=R;ot=ot.parentNode;)ot.nodeType===1&&St.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<St.length;R++){var _t=St[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}so=!!ld,cd=ld=null}finally{ke=f,Xt.p=c,Tt.T=r}}t.current=n,vn=2}}function Kh(){if(vn===2){vn=0;var t=ea,n=ur,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Tt.T,Tt.T=null;var r=Xt.p;Xt.p=2;var c=ke;ke|=4;try{nv(t,n.alternate,n)}finally{ke=c,Xt.p=r,Tt.T=a}}vn=3}}function Qh(){if(vn===4||vn===3){vn=0;var t=qr;qr=null,Ft();var n=ea,a=ur,r=Sa,c=vv,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?vn=5:(vn=0,ur=ea=null,Cv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(ys=null),La(r),a=a.stateNode,ne&&typeof ne.onCommitFiberRoot=="function")try{ne.onCommitFiberRoot(Yt,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Tt.T,f=Xt.p,Xt.p=2,Tt.T=null;try{for(var v=n.onRecoverableError,R=0;R<c.length;R++){var B=c[R];v(B.value,{componentStack:B.stack})}}finally{Tt.T=a,Xt.p=f}}if(c=Yr,v=Zr,Zr=null,c!==null&&(Yr=null,v===null&&(v=[]),t!==null))for(B=0;B<c.length;B++)a=(0,c[B])(v),a!==void 0&&t.finished.finally(a);(Sa&3)!==0&&Qc(),Ma(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===qc?ul++:(ul=0,qc=n):(ul=0,qc=null),fl(0)}}function Cv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Wo(n)))}function Qc(){return qr!==null&&(qr.skipTransition(),qr=null),Zh(),Kh(),Qh(),jh()}function jh(){if(vn!==5)return!1;var t=ea,n=kh;kh=0;var a=La(Sa),r=Tt.T,c=Xt.p;try{Xt.p=32>a?32:a,Tt.T=null,a=Wh,Wh=null;var f=ea,v=Sa;if(vn=0,ur=ea=null,Sa=0,(ke&6)!==0)throw Error(s(331));var R=ke;if(ke|=4,pv(f.current),fv(f,f.current,v,a),ke=R,fl(0,!1),ne&&typeof ne.onPostCommitFiberRoot=="function")try{ne.onPostCommitFiberRoot(Yt,f)}catch{}return!0}finally{Xt.p=c,Tt.T=r,Cv(t,n)}}function Dv(t,n,a){n=Pi(a,n),n=ph(t.stateNode,n,2),t=ps(t,n,2),t!==null&&(Qi(t,2),Ma(t))}function Je(t,n,a){if(t.tag===3)Dv(t,t,a);else for(;n!==null;){if(n.tag===3){Dv(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ys===null||!ys.has(r))){t=Pi(a,t),a=Ag(2),r=ps(n,a,2),r!==null&&(Rg(a,r,n,t),Qi(r,2),Ma(r));break}}n=n.return}}function Jh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new sy;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Vh=!0,c.add(a),t=dy.bind(null,t,n,a),n.then(t,t))}function dy(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,rn===t&&(Ue&a)===a&&((Mn===4||Mn===3&&(Ue&62914560)===Ue&&300>ht()-Xc)&&(ke&2)===0?Qr(t,0):Vc|=a,Wr===Ue&&(Wr=0)),Ma(t)}function Nv(t,n){n===0&&(n=ua()),t=Zs(t,n),t!==null&&(Qi(t,n),Ma(t))}function py(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Nv(t,a)}function my(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Nv(t,a)}function gy(t,n){return Ct(t,n)}var Jr=null,$r=null,$h=!1,jc=!1,td=!1,bs=0;function Ma(t){t!==$r&&t.next===null&&($r===null?Jr=$r=t:$r=$r.next=t),jc=!0,$h||($h=!0,_y())}function fl(t,n){if(!td&&jc){td=!0;do for(var a=!1,r=Jr;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var v=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-Qt(42|t)+1)-1,f&=c&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Pv(r,f))}else f=Ue,f=xi(r,r===rn?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ki(r,f)||(a=!0,Pv(r,f));r=r.next}while(a);td=!1}}function vy(){Lv()}function Lv(){jc=$h=!1;var t=0;bs!==0&&Cy()&&(t=bs);for(var n=ht(),a=null,r=Jr;r!==null;){var c=r.next,f=Uv(r,n);f===0?(r.next=null,a===null?Jr=c:a.next=c,c===null&&($r=a)):(a=r,(t!==0||(f&3)!==0)&&(jc=!0)),r=c}vn!==0&&vn!==5||fl(t),bs!==0&&(bs=0)}function Uv(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Qt(f),R=1<<v,B=c[v];B===-1?((R&a)===0||(R&r)!==0)&&(c[v]=ca(R,n)):B<=n&&(t.expiredLanes|=R),f&=~R}if(n=rn,a=Ue,a=xi(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(je===2||je===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&xt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ki(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&xt(r),La(a)){case 2:case 8:a=G;break;case 32:a=mt;break;case 268435456:a=zt;break;default:a=mt}return r=Ov.bind(null,t),a=Ct(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&xt(r),t.callbackPriority=2,t.callbackNode=null,2}function Ov(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Qc()&&t.callbackNode!==a)return null;var r=Ue;return r=xi(t,t===rn?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(xv(t,r,n),Uv(t,ht()),t.callbackNode!=null&&t.callbackNode===a?Ov.bind(null,t):null)}function Pv(t,n){if(Qc())return null;xv(t,n,!0)}function _y(){Ny(function(){(ke&6)!==0?Ct(Lt,vy):Lv()})}function ed(){if(bs===0){var t=tr;t===0&&(t=cn,cn<<=1,(cn&261888)===0&&(cn=256)),bs=t}return bs}function Iv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yl(t)}function xy(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Iv((c[An]||null).action),v=r.submitter;v&&(n=(n=v[An]||null)?Iv(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new jl("action","action",null,r,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(bs!==0){var B=new FormData(c,v);ch(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(R.preventDefault(),B=new FormData(c,v),ch(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var nd=0;nd<Rf.length;nd++){var id=Rf[nd],Sy=id.toLowerCase(),My=id[0].toUpperCase()+id.slice(1);ji(Sy,"on"+My)}ji(l0,"onAnimationEnd"),ji(c0,"onAnimationIteration"),ji(u0,"onAnimationStart"),ji("dblclick","onDoubleClick"),ji("focusin","onFocus"),ji("focusout","onBlur"),ji(DM,"onTransitionRun"),ji(NM,"onTransitionStart"),ji(LM,"onTransitionCancel"),ji(f0,"onTransitionEnd"),Ke("onMouseEnter",["mouseout","mouseover"]),Ke("onMouseLeave",["mouseout","mouseover"]),Ke("onPointerEnter",["pointerout","pointerover"]),Ke("onPointerLeave",["pointerout","pointerover"]),de("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),de("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),de("onBeforeInput",["compositionend","keypress","textInput","paste"]),de("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),de("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),de("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function zv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var R=r[v],B=R.instance,$=R.currentTarget;if(R=R.listener,B!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=$;try{f(c)}catch(ct){tc(ct)}c.currentTarget=null,f=B}else for(v=0;v<r.length;v++){if(R=r[v],B=R.instance,$=R.currentTarget,R=R.listener,B!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=$;try{f(c)}catch(ct){tc(ct)}c.currentTarget=null,f=B}}}}function Le(t,n){var a=n[k];a===void 0&&(a=n[k]=new Set);var r=t+"__bubble";a.has(r)||(Bv(n,t,2,!1),a.add(r))}function ad(t,n,a){var r=0;n&&(r|=4),Bv(a,t,r,n)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function sd(t){if(!t[Jc]){t[Jc]=!0,Ie.forEach(function(a){a!=="selectionchange"&&(yy.has(a)||ad(a,!1,t),ad(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Jc]||(n[Jc]=!0,ad("selectionchange",!1,n))}}function Bv(t,n,a,r){switch(R_(n)){case 2:var c=pE;break;case 8:c=mE;break;default:c=Td}a=c.bind(null,n,a,t),c=void 0,!df||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function rd(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var R=r.stateNode.containerInfo;if(R===c)break;if(v===4)for(v=r.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;R!==null;){if(v=Bt(R),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){r=f=v;continue t}R=R.parentNode}}r=r.return}Bm(function(){var $=f,ct=ff(a),St=[];t:{var j=h0.get(t);if(j!==void 0){var ot=jl,Vt=t;switch(t){case"keypress":if(Kl(a)===0)break t;case"keydown":case"keyup":ot=rM;break;case"focusin":Vt="focus",ot=vf;break;case"focusout":Vt="blur",ot=vf;break;case"beforeblur":case"afterblur":ot=vf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=ZS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=fM;break;case l0:case c0:case u0:ot=jS;break;case f0:ot=dM;break;case"scroll":case"scrollend":ot=qS;break;case"wheel":ot=mM;break;case"copy":case"cut":case"paste":ot=$S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Xm;break;case"submit":ot=cM;break;case"toggle":case"beforetoggle":ot=vM}var $t=(n&4)!==0,be=!$t&&(t==="scroll"||t==="scrollend"),J=$t?j!==null?j+"Capture":null:j;$t=[];for(var W=$,st;W!==null;){var _t=W;if(st=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||st===null||J===null||(_t=Oo(W,J),_t!=null&&$t.push(dl(W,_t,st))),be)break;W=W.return}0<$t.length&&(j=new ot(j,Vt,null,a,ct),St.push({event:j,listeners:$t}))}}if((n&7)===0){t:{if(ot=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",ot&&a!==uf&&(Vt=a.relatedTarget||a.fromElement)&&(Bt(Vt)||Vt[C]))break t;(j||ot)&&(Vt=ct.window===ct?ct:(ot=ct.ownerDocument)?ot.defaultView||ot.parentWindow:window,j?(ot=a.relatedTarget||a.toElement,j=$,ot=ot?Bt(ot):null,ot!==null&&(be=u(ot),$t=ot.tag,ot!==be||$t!==5&&$t!==27&&$t!==6)&&(ot=null)):(j=null,ot=$),j!==ot&&($t=Gm,_t="onMouseLeave",J="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&($t=Xm,_t="onPointerLeave",J="onPointerEnter",W="pointer"),be=j==null?Vt:dt(j),st=ot==null?Vt:dt(ot),Vt=new $t(_t,W+"leave",j,a,ct),Vt.target=be,Vt.relatedTarget=st,_t=null,Bt(ct)===$&&($t=new $t(J,W+"enter",ot,a,ct),$t.target=st,$t.relatedTarget=be,_t=$t),be=_t,$t=j&&ot?U(j,ot,Ey):null,j!==null&&Fv(St,Vt,j,$t,!1),ot!==null&&be!==null&&Fv(St,be,ot,$t,!0)))}t:{if(j=$?dt($):window,ot=j.nodeName&&j.nodeName.toLowerCase(),ot==="select"||ot==="input"&&j.type==="file")var jt=jm;else if(Km(j))if(Jm)jt=RM;else{jt=TM;var Oe=bM}else ot=j.nodeName,!ot||ot.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?$&&cf($.elementType)&&(jt=jm):jt=AM;if(jt&&(jt=jt(t,$))){Qm(St,jt,a,ct);break t}Oe&&Oe(t,j,$)}switch(Oe=$?dt($):window,t){case"focusin":(Km(Oe)||Oe.contentEditable==="true")&&(Rr=Oe,bf=$,Vo=null);break;case"focusout":Vo=bf=Rr=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,r0(St,a,ct);break;case"selectionchange":if(CM)break;case"keydown":case"keyup":r0(St,a,ct)}var ie;if(xf)t:{switch(t){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else Ar?Ym(t,a)&&(ue="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(km&&a.locale!=="ko"&&(Ar||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Ar&&(ie=Fm()):(ss=ct,pf="value"in ss?ss.value:ss.textContent,Ar=!0)),Oe=$c($,ue),0<Oe.length&&(ue=new Vm(ue,t,null,a,ct),St.push({event:ue,listeners:Oe}),ie?ue.data=ie:(ie=Zm(a),ie!==null&&(ue.data=ie)))),(ie=xM?SM(t,a):MM(t,a))&&(ue=$c($,"onBeforeInput"),0<ue.length&&(Oe=new Vm("onBeforeInput","beforeinput",null,a,ct),St.push({event:Oe,listeners:ue}),Oe.data=ie)),xy(St,t,$,a,ct)}zv(St,n)})}function dl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function $c(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Oo(t,a),c!=null&&r.unshift(dl(t,c,f)),c=Oo(t,n),c!=null&&r.push(dl(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Ey(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Fv(t,n,a,r,c){for(var f=n._reactName,v=[];a!==null&&a!==r;){var R=a,B=R.alternate,$=R.stateNode;if(R=R.tag,B!==null&&B===r)break;R!==5&&R!==26&&R!==27||$===null||(B=$,c?($=Oo(a,f),$!=null&&v.unshift(dl(a,$,B))):c||($=Oo(a,f),$!=null&&v.push(dl(a,$,B)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var by=/\r\n?/g,Ty=/\u0000|\uFFFD/g;function Hv(t){return(typeof t=="string"?t:""+t).replace(by,`
`).replace(Ty,"")}function Gv(t,n){return n=Hv(n),Hv(t)===n}function $e(t,n,a,r,c,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||Er(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&Er(t,""+r);else return;break;case"className":we(t,"class",r);break;case"tabIndex":we(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":we(t,a,r);break;case"style":Im(t,r,f);return;case"data":if(n!=="object"){we(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Yl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&$e(t,n,"name",c.name,c,null),$e(t,n,"formEncType",c.formEncType,c,null),$e(t,n,"formMethod",c.formMethod,c,null),$e(t,n,"formTarget",c.formTarget,c,null)):($e(t,n,"encType",c.encType,c,null),$e(t,n,"method",c.method,c,null),$e(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Yl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=fa);return;case"onScroll":r!=null&&Le("scroll",t);return;case"onScrollEnd":r!=null&&Le("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Yl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Le("beforetoggle",t),Le("toggle",t),Ge(t,"popover",r);break;case"xlinkActuate":le(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":le(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":le(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":le(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":le(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":le(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":le(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":le(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":le(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ge(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=kS.get(a)||a,Ge(t,a,r);else return}ee=!0}function od(t,n,a,r,c,f){switch(a){case"style":Im(t,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")Er(t,r);else if(typeof r=="number"||typeof r=="bigint")Er(t,""+r);else return;break;case"onScroll":r!=null&&Le("scroll",t);return;case"onScrollEnd":r!=null&&Le("scrollend",t);return;case"onClick":r!=null&&(t.onclick=fa);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!ye.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=t[An]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,r,c);break t}ee=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ge(t,a,r)}return}ee=!0}function Zn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",t),Le("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:$e(t,n,f,v,a,null)}}c&&$e(t,n,"srcSet",a.srcSet,a,null),r&&$e(t,n,"src",a.src,a,null);return;case"input":Le("invalid",t);var R=f=v=c=null,B=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":c=ct;break;case"type":v=ct;break;case"checked":B=ct;break;case"defaultChecked":$=ct;break;case"value":f=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:$e(t,n,r,ct,a,null)}}Lm(t,f,R,B,$,v,c,!1);return;case"select":Le("invalid",t),r=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":r=R;default:$e(t,n,c,R,a,null)}n=f,a=v,t.multiple=!!r,n!=null?yr(t,!!r,n,!1):a!=null&&yr(t,!!r,a,!0);return;case"textarea":Le("invalid",t),f=c=r=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":r=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:$e(t,n,v,R,a,null)}Om(t,r,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:$e(t,n,B,r,a,null)}return;case"dialog":Le("beforetoggle",t),Le("toggle",t),Le("cancel",t),Le("close",t);break;case"iframe":case"object":Le("load",t);break;case"video":case"audio":for(r=0;r<hl.length;r++)Le(hl[r],t);break;case"image":Le("error",t),Le("load",t);break;case"details":Le("toggle",t);break;case"embed":case"source":case"link":Le("error",t),Le("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:$e(t,n,$,r,a,null)}return;default:if(cf(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&od(t,n,ct,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&$e(t,n,R,r,a,null))}var Ay={};function Ry(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,R=null,B=null,$=null,ct=null;for(ot in a){var St=a[ot];if(a.hasOwnProperty(ot)&&St!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=St;default:r.hasOwnProperty(ot)||$e(t,n,ot,null,r,St)}}for(var j in r){var ot=r[j];if(St=a[j],r.hasOwnProperty(j)&&(ot!=null||St!=null))switch(j){case"type":ot!==St&&(ee=!0),f=ot;break;case"name":ot!==St&&(ee=!0),c=ot;break;case"checked":ot!==St&&(ee=!0),$=ot;break;case"defaultChecked":ot!==St&&(ee=!0),ct=ot;break;case"value":ot!==St&&(ee=!0),v=ot;break;case"defaultValue":ot!==St&&(ee=!0),R=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==St&&$e(t,n,j,ot,r,St)}}of(t,v,R,B,$,ct,f,c);return;case"select":ot=v=R=j=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ot=B;default:r.hasOwnProperty(f)||$e(t,n,f,null,r,B)}for(c in r)if(f=r[c],B=a[c],r.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":f!==B&&(ee=!0),j=f;break;case"defaultValue":f!==B&&(ee=!0),R=f;break;case"multiple":f!==B&&(ee=!0),v=f;default:f!==B&&$e(t,n,c,f,r,B)}n=R,a=v,r=ot,j!=null?yr(t,!!a,j,!1):!!r!=!!a&&(n!=null?yr(t,!!a,n,!0):yr(t,!!a,a?[]:"",!1));return;case"textarea":ot=j=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:$e(t,n,R,null,r,c)}for(v in r)if(c=r[v],f=a[v],r.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":c!==f&&(ee=!0),j=c;break;case"defaultValue":c!==f&&(ee=!0),ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&$e(t,n,v,c,r,f)}Um(t,j,ot);return;case"option":for(var Vt in a)if(j=a[Vt],a.hasOwnProperty(Vt)&&j!=null&&!r.hasOwnProperty(Vt))switch(Vt){case"selected":t.selected=!1;break;default:$e(t,n,Vt,null,r,j)}for(B in r)if(j=r[B],ot=a[B],r.hasOwnProperty(B)&&j!==ot&&(j!=null||ot!=null))switch(B){case"selected":j!==ot&&(ee=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:$e(t,n,B,j,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)j=a[$t],a.hasOwnProperty($t)&&j!=null&&!r.hasOwnProperty($t)&&$e(t,n,$t,null,r,j);for($ in r)if(j=r[$],ot=a[$],r.hasOwnProperty($)&&j!==ot&&(j!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,n));break;default:$e(t,n,$,j,r,ot)}return;default:if(cf(n)){for(var be in a)j=a[be],a.hasOwnProperty(be)&&j!==void 0&&!r.hasOwnProperty(be)&&od(t,n,be,void 0,r,j);for(ct in r)j=r[ct],ot=a[ct],!r.hasOwnProperty(ct)||j===ot||j===void 0&&ot===void 0||od(t,n,ct,j,r,ot);return}}for(var J in a)j=a[J],a.hasOwnProperty(J)&&j!=null&&!r.hasOwnProperty(J)&&$e(t,n,J,null,r,j);for(St in r)j=r[St],ot=a[St],!r.hasOwnProperty(St)||j===ot||j==null&&ot==null||$e(t,n,St,j,r,ot)}function Vv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,v=c.initiatorType,R=c.duration;if(f&&R&&Vv(v)){for(v=0,R=c.responseEnd,r+=1;r<a.length;r++){var B=a[r],$=B.startTime;if($>R)break;var ct=B.transferSize,St=B.initiatorType;ct&&Vv(St)&&(B=B.responseEnd,v+=ct*(B<R?1:(R-$)/(B-$)))}if(--r,n+=8*(f+v)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ld=null,cd=null;function pl(t){return t.nodeType===9?t:t.ownerDocument}function Xv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Wv(t,n,a,r){return a=pl(a).createElement(t),a[En]=r,a[An]=n,Zn(a,t,n),bt(a),a}function ud(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fd=null;function Cy(){var t=window.event;return t&&t.type==="popstate"?t===fd?!1:(fd=t,!0):(fd=null,!1)}var hd=typeof setTimeout=="function"?setTimeout:void 0,Dy=typeof clearTimeout=="function"?clearTimeout:void 0,qv=typeof Promise=="function"?Promise:void 0,Yv=typeof requestAnimationFrame=="function"?requestAnimationFrame:hd,Ny=typeof queueMicrotask=="function"?queueMicrotask:typeof qv<"u"?function(t){return qv.resolve(null).then(t).catch(Ly)}:hd;function Ly(t){setTimeout(function(){throw t})}function Ts(t){return t==="head"}function Zv(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),ro(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Sd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Sd(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[Ut]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Sd(t.ownerDocument.body);a=c}while(a);ro(n)}function Kv(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Qv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function jv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Uy(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function dd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Uy(n,a,t)}function Oy(t){return t.documentElement.clientHeight}function Py(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Iy(t,n,a,r,c,f,v,R,B){var $=n.nodeType===9?n:n.ownerDocument;try{var ct=$.startViewTransition({update:function(){var j=$.defaultView,ot=j.navigation&&j.navigation.transition,Vt=$.fonts.status;r();var $t=[];if(Vt==="loaded"&&(Oy($),$.fonts.status==="loading"&&$t.push($.fonts.ready)),Vt=$t.length,t!==null)for(var be=t.suspenseyImages,J=0,W=0;W<be.length;W++){var st=be[W];if(!st.complete){var _t=st.getBoundingClientRect();if(0<_t.bottom&&0<_t.right&&_t.top<j.innerHeight&&_t.left<j.innerWidth){if(J+=__(st),J>nu){$t.length=Vt;break}st=new Promise(Py.bind(st)),$t.push(st)}}}if(0<$t.length)return j=Promise.race([Promise.all($t),new Promise(function(jt){return setTimeout(jt,500)})]).then(c,c),(ot?Promise.allSettled([ot.finished,j]):j).then(f,f);if(c(),ot)return ot.finished.then(f,f);f()},types:a});$.__reactViewTransition=ct;var St=[];return ct.ready.then(function(){for(var j=$.documentElement.getAnimations({subtree:!0}),ot=0;ot<j.length;ot++){var Vt=j[ot],$t=Vt.effect,be=$t.pseudoElement;if(be!=null&&be.startsWith("::view-transition")){St.push(Vt),Vt=$t.getKeyframes();for(var J=be=void 0,W=!0,st=0;st<Vt.length;st++){var _t=Vt[st],jt=_t.width;if(be===void 0)be=jt;else if(be!==jt){W=!1;break}if(jt=_t.height,J===void 0)J=jt;else if(J!==jt){W=!1;break}delete _t.width,delete _t.height,_t.transform==="none"&&delete _t.transform}W&&be!==void 0&&J!==void 0&&($t.setKeyframes(Vt),W=getComputedStyle($t.target,$t.pseudoElement),W.width!==be||W.height!==J)&&(W=Vt[0],W.width=be,W.height=J,W=Vt[Vt.length-1],W.width=be,W.height=J,$t.setKeyframes(Vt))}}v()},function(j){$.__reactViewTransition===ct&&($.__reactViewTransition=null);try{if(typeof j=="object"&&j!==null)switch(j.name){case"InvalidStateError":(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null)}j!==null&&B(j)}finally{r(),c(),v()}}),ct.finished.finally(function(){for(var j=0;j<St.length;j++)St[j].cancel();$.__reactViewTransition===ct&&($.__reactViewTransition=null),R()}),ct}catch{return r(),c(),v(),null}}function fr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}fr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:M({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},fr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===t&&f.pseudoElement===n&&r.push(a[c])}return r},fr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Jv(t){return{name:t,group:new fr("group",t),imagePair:new fr("image-pair",t),old:new fr("old",t),new:new fr("new",t)}}function Ai(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Ai.prototype.addEventListener=function(t,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(t_(f,t,n,a)===-1){var v=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(B){v.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),r!==null&&(c=v.removeEventListener.bind(v,t,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=to(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:c}),g(this._fragmentFiber.child,!1,zy,t,R,r)}this._eventListeners=f}};function zy(t,n,a,r){return E(t).addEventListener(n,a,r),!1}Ai.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=t_(r,t,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var f=c.cleanup;c=to(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,By,t,a,c),r.splice(n,1),f!==null&&f()}};function By(t,n,a,r){return E(t).removeEventListener(n,a,r),!1}function to(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function $v(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function t_(t,n,a,r){if(t.length===0)return-1;r=$v(r);for(var c=0;c<t.length;c++){var f=t[c];if(f.type===n&&f.listener===a&&$v(f.optionsOrUseCapture)===r)return c}return-1}Ai.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=E(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];r.addEventListener(f.type,f.attachedListener,to(f.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(c=0;c<a.length;c++)f=a[c],r.removeEventListener(f.type,f.attachedListener,to(f.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},Ai.prototype.focus=function(t){g(this._fragmentFiber.child,!0,e_,t,void 0,void 0)};function e_(t,n){return t.tag===6?!1:(t=E(t),Qy(t,n))}Ai.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,pd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!e_(n[a],t);a--);};function pd(t,n){return n.push(t),!1}Ai.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=E(t),t=pl(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,Fy,t,void 0,void 0))};function Fy(t,n){return t.tag===6?!1:(t=E(t),t===n||t.contains(n)?(n.blur(),!0):!1)}Ai.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,Hy,t,void 0,void 0)};function Hy(t,n){return t.tag===6||(t=E(t),n.observe(t)),!1}Ai.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,Gy,t,void 0,void 0);for(var a=n=0;a<na.length;a++){var r=na[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):na[n++]=r}na.length=n}};function Gy(t,n){return t.tag===6||(t=E(t),n.unobserve(t)),!1}var na=[],md=!1;function Vy(t,n,a){na.push({fragmentInstance:t,observer:n,instance:a}),md||(md=!0,jy(function(){md=!1;var r=na;na=[];for(var c=0;c<r.length;c++){var f=r[c];f.observer.unobserve(f.instance)}}))}Ai.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,Xy,t,void 0,void 0),t};function Xy(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=E(t),n.push.apply(n,t.getClientRects());return!1}Ai.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:E(n).getRootNode(t)},Ai.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,pd,a,void 0,void 0);var r=E(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=E(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=E(a[0]),c=E(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var v=n.compareDocumentPosition(t),R=c.compareDocumentPosition(t),B=v&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=r&&f&&v&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||f&&c===t||B||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!f&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:v,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||ky(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function ky(t,n,a,r,c){var f=Bt(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=x(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=U(a,f,I),n===null?n=!1:(g(n,!0,O,f,a),f=y,y=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=U(r,f,I),n===null?n=!1:(g(n,!0,N,f,r),f=y,w=y=null,n=f!==null)),n):!1}function n_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Ai.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,pd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=b(this._fragmentFiber);if(r=a?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=E(r),n_(t,a);return}if(r=E(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=E(c),n_(c,a)):E(c).scrollIntoView(t),r+=a?-1:1}};function Wy(t,n){return t=E(t),i_(t,n),!1}function i_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function a_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.addEventListener(c.type,c.attachedListener,to(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var v=0,R=0;R<na.length;R++){var B=na[R];(B.fragmentInstance!==n||B.observer!==f||B.instance!==t)&&(na[v++]=B)}na.length=v,f.observe(t)}),i_(t,n))}function qy(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.removeEventListener(c.type,c.attachedListener,to(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?Vy(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function gd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gd(a),Ot(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Yy(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ut])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Hi(t.nextSibling),t===null)break}return null}function Zy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Hi(t.nextSibling),t===null))return null;return t}function s_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Hi(t.nextSibling),t===null))return null;return t}function vd(t){return t.data==="$?"||t.data==="$~"}function _d(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ky(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var xd=null;function r_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Hi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function o_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Qy(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function jy(t){Yv(function(){Yv(function(n){return t(n)})})}function l_(t,n,a){switch(n=pl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function c_(t,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&$e(t,n,r,null,Ay,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===fa&&(t.onclick=null),Ot(t)}function Sd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ot(t)}var Gi=new Map,u_=new Set;function ml(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Wa=Xt.d;Xt.d={f:Jy,r:$y,D:tE,C:eE,L:nE,m:iE,X:sE,S:aE,M:rE};function Jy(){var t=Wa.f(),n=Yc();return t||n}function $y(t){var n=Zt(t);n!==null&&n.tag===5&&n.type==="form"?hg(n):Wa.r(t)}var eo=typeof document>"u"?null:document;function f_(t,n,a){var r=eo;if(r&&typeof n=="string"&&n){var c=Ui(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),u_.has(c)||(u_.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Zn(n,"link",t),bt(n),r.head.appendChild(n)))}}function tE(t){Wa.D(t),f_("dns-prefetch",t,null)}function eE(t,n){Wa.C(t,n),f_("preconnect",t,n)}function nE(t,n,a){Wa.L(t,n,a);var r=eo;if(r&&t&&n){var c='link[rel="preload"][as="'+Ui(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ui(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ui(a.imageSizes)+'"]')):c+='[href="'+Ui(t)+'"]';var f=c;switch(n){case"style":f=no(t);break;case"script":f=io(t)}if(!(Gi.has(f)||(t=M({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Gi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(gl(f))||n==="script"&&r.querySelector(vl(f))))){var v=r.createElement("link");Zn(v,"link",t),n==="style"&&(v[qt]=!0,v.onload=v.onerror=function(){te(v)}),bt(v),r.head.appendChild(v)}}}function iE(t,n){Wa.m(t,n);var a=eo;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ui(r)+'"][href="'+Ui(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=io(t)}if(!Gi.has(f)&&(t=M({rel:"modulepreload",href:t},n),Gi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vl(f)))return}r=a.createElement("link"),Zn(r,"link",t),bt(r),a.head.appendChild(r)}}}function aE(t,n,a){Wa.S(t,n,a);var r=eo;if(r&&t){var c=yt(r).hoistableStyles,f=no(t);n=n||"default";var v=c.get(f);if(!v){var R={loading:0,preload:null};if(v=r.querySelector(gl(f)))R.loading=5;else{t=M({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Gi.get(f))&&Md(t,a);var B=v=r.createElement("link");bt(B),Zn(B,"link",t),B._p=new Promise(function($,ct){B.onload=$,B.onerror=ct}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,tu(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:R},c.set(f,v)}}}function sE(t,n){Wa.X(t,n);var a=eo;if(a&&t){var r=yt(a).hoistableScripts,c=io(t),f=r.get(c);f||(f=a.querySelector(vl(c)),f||(t=M({src:t,async:!0},n),(n=Gi.get(c))&&yd(t,n),f=a.createElement("script"),bt(f),Zn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function rE(t,n){Wa.M(t,n);var a=eo;if(a&&t){var r=yt(a).hoistableScripts,c=io(t),f=r.get(c);f||(f=a.querySelector(vl(c)),f||(t=M({src:t,async:!0,type:"module"},n),(n=Gi.get(c))&&yd(t,n),f=a.createElement("script"),bt(f),Zn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function h_(t,n,a,r){var c=(c=hn.current)?ml(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=no(a.href),n=yt(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=no(a.href);var f=yt(c).hoistableStyles,v=f.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=c.querySelector(gl(t)))?f._p||(v.instance=f,v.state.loading=5):(f=Gi.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gi.set(t,f)),oE(c,t,f,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=io(a),n=yt(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function no(t){return'href="'+Ui(t)+'"'}function gl(t){return'link[rel="stylesheet"]['+t+"]"}function d_(t){return M({},t,{"data-precedence":t.precedence,precedence:null})}function oE(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[qt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[qt]=!0,n.onload=n.onerror=te.bind(null,n),Zn(n,"link",a),bt(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function io(t){return'[src="'+Ui(t)+'"]'}function vl(t){return"script[async]"+t}function p_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Ui(a.href)+'"]');if(r)return n.instance=r,bt(r),r;var c=M({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),bt(r),Zn(r,"style",c),tu(r,a.precedence,t),n.instance=r;case"stylesheet":c=no(a.href);var f=t.querySelector(gl(c));if(f)return n.state.loading|=4,n.instance=f,bt(f),f;r=d_(a),(c=Gi.get(c))&&Md(r,c),f=(t.ownerDocument||t).createElement("link"),bt(f);var v=f;return v._p=new Promise(function(R,B){v.onload=R,v.onerror=B}),Zn(f,"link",r),n.state.loading|=4,tu(f,a.precedence,t),n.instance=f;case"script":return f=io(a.src),(c=t.querySelector(vl(f)))?(n.instance=c,bt(c),c):(r=a,(c=Gi.get(f))&&(r=M({},a),yd(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),bt(c),Zn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,tu(r,a.precedence,t));return n.instance}function tu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,v=0;v<r.length;v++){var R=r[v];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function yd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var eu=null;function m_(t,n,a){if(eu===null){var r=new Map,c=eu=new Map;c.set(a,r)}else c=eu,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ut]||f[En]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var R=r.get(v);R?R.push(f):r.set(v,[f])}}return r}function Ed(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function lE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function g_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function v_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function __(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function x_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=__(n),t.suspenseyImages.push(n)),t=fE.bind(t),n.decode().then(t,t))}function cE(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=no(r.href),f=n.querySelector(gl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=_l.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,bt(f);return}f=n.ownerDocument||n,r=d_(r),(c=Gi.get(c))&&Md(r,c),f=f.createElement("link"),bt(f);var v=f;v._p=new Promise(function(R,B){v.onload=R,v.onerror=B}),Zn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=_l.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var nu=0;function uE(t,n){return t.stylesheets&&t.count===0&&au(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&au(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&nu===0&&(nu=62500*wy());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&au(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>nu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function S_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)au(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function _l(){this.count--,S_(this)}function fE(){this.imgCount--,S_(this)}var iu=null;function au(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,iu=new Map,n.forEach(hE,t),iu=null,_l.call(t))}function hE(t,n){if(!(n.state.loading&4)){var a=iu.get(t);if(a)var r=a.get(null);else{a=new Map,iu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,c),a.set(v,c),this.count++,r=_l.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var ao={$$typeof:nt,Provider:null,Consumer:null,_currentValue:Te,_currentValue2:Te,_threadCount:0};function dE(t,n,a,r,c,f,v,R,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Na(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Na(0),this.hiddenUpdates=Na(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function M_(t,n,a,r,c,f,v,R,B,$,ct,St){return t=new dE(t,n,a,v,B,$,ct,St,R),n=1,f===!0&&(n|=24),f=hi(3,null,null,n),t.current=f,f.stateNode=t,n=Bf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Vf(f),t}function y_(t){return t?(t=Dr,t):Dr}function E_(t,n,a,r,c,f){c=y_(c),r.context===null?r.context=c:r.pendingContext=c,r=ds(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ps(t,r,n),a!==null&&(gi(a,t,n),Ko(a,t,n))}function b_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bd(t,n){b_(t,n),(t=t.alternate)&&b_(t,n)}function T_(t){if(t.tag===13||t.tag===31){var n=Zs(t,67108864);n!==null&&gi(n,t,67108864),bd(t,67108864)}}function A_(t){if(t.tag===13||t.tag===31){var n=Ti();n=ks(n);var a=Zs(t,n);a!==null&&gi(a,t,n),bd(t,n)}}var so=!0;function pE(t,n,a,r){var c=Tt.T;Tt.T=null;var f=Xt.p;try{Xt.p=2,Td(t,n,a,r)}finally{Xt.p=f,Tt.T=c}}function mE(t,n,a,r){var c=Tt.T;Tt.T=null;var f=Xt.p;try{Xt.p=8,Td(t,n,a,r)}finally{Xt.p=f,Tt.T=c}}function Td(t,n,a,r){if(so){var c=Ad(r);if(c===null)rd(t,n,r,su,a),w_(t,r);else if(vE(c,t,n,a,r))r.stopPropagation();else if(w_(t,r),n&4&&-1<gE.indexOf(t)){for(;c!==null;){var f=Zt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=ui(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var B=1<<31-Qt(v);R.entanglements[1]|=B,v&=~B}Ma(f),(ke&6)===0&&(kc=ht()+500,fl(0))}}break;case 31:case 13:R=Zs(f,2),R!==null&&gi(R,f,2),Yc(),bd(f,2)}if(f=Ad(r),f===null&&rd(t,n,r,su,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else rd(t,n,r,null,a)}}function Ad(t){return t=ff(t),Rd(t)}var su=null;function Rd(t){if(su=null,t=Bt(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return su=t,null}function R_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case Lt:return 2;case G:return 8;case mt:case pt:return 32;case zt:return 268435456;default:return 32}default:return 32}}var wd=!1,As=null,Rs=null,ws=null,xl=new Map,Sl=new Map,Cs=[],gE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w_(t,n){switch(t){case"focusin":case"focusout":As=null;break;case"dragenter":case"dragleave":Rs=null;break;case"mouseover":case"mouseout":ws=null;break;case"pointerover":case"pointerout":xl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(n.pointerId)}}function Ml(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Zt(n),n!==null&&T_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function vE(t,n,a,r,c){switch(n){case"focusin":return As=Ml(As,t,n,a,r,c),!0;case"dragenter":return Rs=Ml(Rs,t,n,a,r,c),!0;case"mouseover":return ws=Ml(ws,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return xl.set(f,Ml(xl.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Sl.set(f,Ml(Sl.get(f)||null,t,n,a,r,c)),!0}return!1}function C_(t){var n=Bt(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ii(t.priority,function(){A_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,ii(t.priority,function(){A_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ru(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ad(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);uf=r,a.target.dispatchEvent(r),uf=null}else return n=Zt(a),n!==null&&T_(n),t.blockedOn=a,!1;n.shift()}return!0}function D_(t,n,a){ru(t)&&a.delete(n)}function _E(){wd=!1,As!==null&&ru(As)&&(As=null),Rs!==null&&ru(Rs)&&(Rs=null),ws!==null&&ru(ws)&&(ws=null),xl.forEach(D_),Sl.forEach(D_)}function ou(t,n){t.blockedOn===n&&(t.blockedOn=null,wd||(wd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,_E)))}var lu=null;function N_(t){lu!==t&&(lu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){lu===t&&(lu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Rd(r||a)===null)continue;break}var f=Zt(a);f!==null&&(t.splice(n,3),n-=3,ch(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function ro(t){function n(B){return ou(B,t)}As!==null&&ou(As,t),Rs!==null&&ou(Rs,t),ws!==null&&ou(ws,t),xl.forEach(n),Sl.forEach(n);for(var a=0;a<Cs.length;a++){var r=Cs[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Cs.length&&(a=Cs[0],a.blockedOn===null);)C_(a),a.blockedOn===null&&Cs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],v=c[An]||null;if(typeof f=="function")v||N_(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[An]||null)R=v.formAction;else if(Rd(c)!==null)continue}else R=v.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),N_(a)}}}function L_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Cd(t){this._internalRoot=t}cu.prototype.render=Cd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Ti();E_(a,r,t,n,null,null)},cu.prototype.unmount=Cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;E_(t.current,2,null,t,null,null),Yc(),n[C]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ws();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Cs.length&&n!==0&&n<Cs[a].priority;a++);Cs.splice(a,0,t),a===0&&C_(t)}};var U_=e.version;if(U_!=="19.3.1")throw Error(s(527,U_,"19.3.1"));Xt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var xE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Tt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{Yt=uu.inject(xE),ne=uu}catch{}}return El.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=yg,f=Eg,v=bg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=M_(t,1,!1,null,null,a,r,null,c,f,v,L_),t[C]=n.current,sd(t),new Cd(n)},El.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=yg,v=Eg,R=bg,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=M_(t,1,!0,n,a??null,r,c,B,f,v,R,L_),n.context=y_(null),a=n.current,r=Ti(),r=ks(r),c=ds(r),c.callback=null,ps(a,c,r),a=r,n.current.lanes=a,Qi(n,a),Ma(n),t[C]=n.current,sd(t),new cu(n)},El.version="19.3.1",El}var X_;function LE(){if(X_)return Ld.exports;X_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ld.exports=NE(),Ld.exports}var UE=LE();const OE=Qx(UE);class PE{constructor(){fu(this,"ctx",null);fu(this,"masterGain",null);fu(this,"muted",!1)}isMuted(){return this.muted}toggleMute(){return this.muted=!this.muted,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.muted?0:1,this.ctx.currentTime,.03),this.muted}ensureContext(){if(this.muted)return null;if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:1,this.masterGain.connect(this.ctx.destination))}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}playWorldSelect(e){const i=this.ensureContext();if(!i||!this.masterGain)return;const s=i.currentTime,u={"ecology-carbon":[293.66,440,554.37],"space-suhail":[261.63,392,587.33],"energy-circuits":[329.63,493.88,659.25],"spatial-geometry":[349.23,523.25,659.25]}[e],h=this.masterGain;u.forEach((d,m)=>{const p=i.createOscillator(),_=i.createGain();p.type="sine",p.frequency.setValueAtTime(d,s+m*.035),_.gain.setValueAtTime(1e-4,s+m*.035),_.gain.exponentialRampToValueAtTime(.032/(m+1),s+m*.035+.06),_.gain.exponentialRampToValueAtTime(1e-4,s+m*.035+.75),p.connect(_),_.connect(h),p.start(s+m*.035),p.stop(s+m*.035+.8)})}playDiveTransition(){const e=this.ensureContext();if(!e||!this.masterGain)return;const i=e.currentTime,s=e.createOscillator(),l=e.createGain();s.type="sine",s.frequency.setValueAtTime(130,i),s.frequency.exponentialRampToValueAtTime(360,i+.48),l.gain.setValueAtTime(1e-4,i),l.gain.exponentialRampToValueAtTime(.055,i+.14),l.gain.exponentialRampToValueAtTime(1e-4,i+.6),s.connect(l),l.connect(this.masterGain),s.start(i),s.stop(i+.65)}playSculpturePulse(e){const i=this.ensureContext();if(!i||!this.masterGain)return;const s=i.currentTime,u={"ecology-carbon":587.33,"space-suhail":523.25,"energy-circuits":659.25,"spatial-geometry":698.46}[e],h=this.masterGain;[u,u*1.25,u*1.5].forEach((d,m)=>{const p=i.createOscillator(),_=i.createGain();p.type=m===2?"triangle":"sine",p.frequency.setValueAtTime(d,s+m*.045),_.gain.setValueAtTime(1e-4,s+m*.045),_.gain.exponentialRampToValueAtTime(.026/(m+1),s+m*.045+.03),_.gain.exponentialRampToValueAtTime(1e-4,s+m*.045+.55),p.connect(_),_.connect(h),p.start(s+m*.045),p.stop(s+m*.045+.6)})}}const Ll=new PE;function IE({className:o="w-9 h-9"}){return Et.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",className:o,"aria-hidden":"true",children:[Et.jsx("defs",{children:Et.jsxs("linearGradient",{id:"lMarkGrad",x1:"6",y1:"6",x2:"38",y2:"38",gradientUnits:"userSpaceOnUse",children:[Et.jsx("stop",{offset:"0%",stopColor:"#34d399"}),Et.jsx("stop",{offset:"50%",stopColor:"#38bdf8"}),Et.jsx("stop",{offset:"100%",stopColor:"#fbbf24"})]})}),Et.jsx("rect",{x:"2",y:"2",width:"40",height:"40",rx:"12",fill:"rgba(7, 14, 24, 0.9)",stroke:"url(#lMarkGrad)",strokeWidth:"1.6"}),Et.jsx("path",{d:"M22 9.5L31.5 15.2V26.8L22 32.5L12.5 26.8V15.2L22 9.5Z",stroke:"url(#lMarkGrad)",strokeWidth:"1.7",strokeLinejoin:"round",fill:"rgba(52, 211, 153, 0.09)"}),Et.jsx("path",{d:"M16.5 26.5L28.5 14.5M28.5 14.5H22.5M28.5 14.5V20.5",stroke:"#fef08a",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),Et.jsx("ellipse",{cx:"22",cy:"21",rx:"15",ry:"5.4",transform:"rotate(-24 22 21)",stroke:"#fde68a",strokeWidth:"1.2",strokeOpacity:"0.85"}),Et.jsx("circle",{cx:"34.5",cy:"15.5",r:"2.1",fill:"#fde68a"})]})}function Id({className:o="w-4 h-4"}){return Et.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:o,children:Et.jsx("path",{d:"M8 5.5L18.5 12L8 18.5V5.5Z"})})}function zE({className:o="w-4 h-4"}){return Et.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",className:o,children:[Et.jsx("path",{d:"M4 10.5L12 4L20 10.5V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V10.5Z",strokeLinejoin:"round"}),Et.jsx("path",{d:"M9.5 20V13.5H14.5V20",strokeLinejoin:"round"})]})}function BE({muted:o,className:e="w-4 h-4"}){return o?Et.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:e,children:[Et.jsx("path",{d:"M11 5L6 9H3V15H6L11 19V5Z",strokeLinejoin:"round"}),Et.jsx("path",{d:"M22 9L16 15M16 9L22 15",strokeLinecap:"round"})]}):Et.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:e,children:[Et.jsx("path",{d:"M11 5L6 9H3V15H6L11 19V5Z",strokeLinejoin:"round"}),Et.jsx("path",{d:"M15.5 8.5C16.8 9.8 16.8 14.2 15.5 15.5M18.5 6C21.2 8.8 21.2 15.2 18.5 18",strokeLinecap:"round"})]})}function FE({className:o="w-4 h-4"}){return Et.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:o,children:Et.jsx("path",{d:"M12 3L14 9.5L20.5 11.5L14 13.5L12 20L10 13.5L3.5 11.5L10 9.5L12 3Z",strokeLinejoin:"round"})})}function k_({className:o="w-4 h-4"}){return Et.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:o,children:Et.jsx("path",{d:"M6 6L18 18M18 6L6 18",strokeLinecap:"round"})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rm="187",HE=0,W_=1,GE=2,Vu=1,VE=2,Ul=3,Hs=0,Jn=1,qi=2,bo=0,Pl=1,ki=2,q_=3,Y_=4,XE=5,Eo=100,kE=101,WE=102,qE=103,YE=104,ZE=200,KE=201,QE=202,jE=203,jx=204,Jx=205,JE=206,$E=207,t1=208,e1=209,n1=210,i1=211,a1=212,s1=213,r1=214,mp=0,gp=1,vp=2,zl=3,_p=4,xp=5,Sp=6,Mp=7,om=0,o1=1,l1=2,$a=0,$x=1,tS=2,eS=3,lm=4,nS=5,iS=6,aS=7,sS=300,Ro=301,Bl=302,zd=303,Bd=304,yp=1e3,Ja=1001,Ep=1002,jn=1003,c1=1004,hu=1005,_i=1006,Fd=1007,Bs=1008,Ni=1009,rS=1010,oS=1011,Fl=1012,cm=1013,Ca=1014,ra=1015,Da=1016,um=1017,fm=1018,wo=1020,lS=35902,cS=35899,uS=1021,fS=1022,Aa=1023,Gs=1026,Fs=1027,hm=1028,dm=1029,_r=1030,pm=1031,mm=1033,Xu=33776,ku=33777,Wu=33778,qu=33779,bp=35840,Tp=35841,Ap=35842,Rp=35843,wp=36196,Cp=37492,Dp=37496,Np=37488,Lp=37489,Ku=37490,Up=37491,Op=37808,Pp=37809,Ip=37810,zp=37811,Bp=37812,Fp=37813,Hp=37814,Gp=37815,Vp=37816,Xp=37817,kp=37818,Wp=37819,qp=37820,Yp=37821,Zp=36492,Kp=36494,Qp=36495,jp=36283,Jp=36284,Qu=36285,$p=36286,u1=3200,ju=0,f1=1,zs="",Di="srgb",Ju="srgb-linear",$u="linear",tn="srgb",Hd=7680,h1=519,d1=512,p1=513,m1=514,hS=515,g1=516,v1=517,dS=518,pS=519,_1=35044,Z_="300 es",oa=2e3,Hl=2001;function x1(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Gl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function S1(){const o=Gl("canvas");return o.style.display="block",o}const K_={};function Q_(...o){const e="THREE."+o.shift();console.log(e,...o)}function mS(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function fe(...o){o=mS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function We(...o){o=mS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function To(...o){const e=o.join(" ");e in K_||(K_[e]=!0,fe(...o))}function M1(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const y1={[mp]:mp,[vp]:Sp,[_p]:_p,[zl]:xp,[gp]:gp,[Sp]:vp,[Mp]:Mp,[xp]:zl};class xr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=Math.PI/180,tm=180/Math.PI;function kl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(ti[o&255]+ti[o>>8&255]+ti[o>>16&255]+ti[o>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[i&63|128]+ti[i>>8&255]+"-"+ti[i>>16&255]+ti[i>>24&255]+ti[s&255]+ti[s>>8&255]+ti[s>>16&255]+ti[s>>24&255]).toLowerCase()}function Ce(o,e,i){return Math.max(e,Math.min(i,o))}function E1(o,e){return(o%e+e)%e}function Gd(o,e,i){return(1-i)*o+i*e}function b1(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function gm(o){switch(o.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function T1(o,e){if(e.constructor===Float32Array)return o;const i=gm(e);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(o/i,-1)}function A1(o,e){if(e.constructor===Float32Array)return o;const i=gm(e);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(o*i)}const wm=class wm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ce(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wm.prototype.isVector2=!0;let Me=wm;class ts{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3],x=u[h+0],S=u[h+1],b=u[h+2],D=u[h+3];if(g!==D||m!==x||p!==S||_!==b){let E=m*x+p*S+_*b+g*D;E<0&&(x=-x,S=-S,b=-b,D=-D,E=-E);let y=1-d;if(E<.9995){const w=Math.acos(E),O=Math.sin(w);y=Math.sin(y*w)/O,d=Math.sin(d*w)/O,m=m*y+x*d,p=p*y+S*d,_=_*y+b*d,g=g*y+D*d}else{m=m*y+x*d,p=p*y+S*d,_=_*y+b*d,g=g*y+D*d;const w=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=w,p*=w,_*=w,g*=w}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=u[h],x=u[h+1],S=u[h+2],b=u[h+3];return e[i]=d*b+_*g+m*S-p*x,e[i+1]=m*b+_*x+p*g-d*S,e[i+2]=p*b+_*S+d*x-m*g,e[i+3]=_*b-d*g-m*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),g=d(u/2),x=m(s/2),S=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=x*_*g+p*S*b,this._y=p*S*g-x*_*b,this._z=p*_*b+x*S*g,this._w=p*_*g-x*S*b;break;case"YXZ":this._x=x*_*g+p*S*b,this._y=p*S*g-x*_*b,this._z=p*_*b-x*S*g,this._w=p*_*g+x*S*b;break;case"ZXY":this._x=x*_*g-p*S*b,this._y=p*S*g+x*_*b,this._z=p*_*b+x*S*g,this._w=p*_*g-x*S*b;break;case"ZYX":this._x=x*_*g-p*S*b,this._y=p*S*g+x*_*b,this._z=p*_*b-x*S*g,this._w=p*_*g+x*S*b;break;case"YZX":this._x=x*_*g+p*S*b,this._y=p*S*g+x*_*b,this._z=p*_*b-x*S*g,this._w=p*_*g-x*S*b;break;case"XZY":this._x=x*_*g-p*S*b,this._y=p*S*g-x*_*b,this._z=p*_*b+x*S*g,this._w=p*_*g+x*S*b;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=s+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-m)*S,this._y=(u-p)*S,this._z=(h-l)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(_-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(u+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(u-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(h-l)/S,this._x=(u+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ce(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-s*p,this._z=u*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,u=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Cm=class Cm{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(j_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(j_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),_=2*(d*i-u*l),g=2*(u*s-h*i);return this.x=i+m*p+h*g-d*_,this.y=s+m*_+d*p-u*g,this.z=l+m*g+u*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this.z=Ce(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this.z=Ce(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Vd.copy(this).projectOnVector(e),this.sub(Vd)}reflect(e){return this.sub(Vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ce(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cm.prototype.isVector3=!0;let K=Cm;const Vd=new K,j_=new ts,Dm=class Dm{constructor(e,i,s,l,u,h,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],g=s[7],x=s[2],S=s[5],b=s[8],D=l[0],E=l[3],y=l[6],w=l[1],O=l[4],N=l[7],I=l[2],U=l[5],M=l[8];return u[0]=h*D+d*w+m*I,u[3]=h*E+d*O+m*U,u[6]=h*y+d*N+m*M,u[1]=p*D+_*w+g*I,u[4]=p*E+_*O+g*U,u[7]=p*y+_*N+g*M,u[2]=x*D+S*w+b*I,u[5]=x*E+S*O+b*U,u[8]=x*y+S*N+b*M,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-s*u*_+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*h-d*p,x=d*m-_*u,S=p*u-h*m,b=i*g+s*x+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/b;return e[0]=g*D,e[1]=(l*p-_*s)*D,e[2]=(d*s-l*h)*D,e[3]=x*D,e[4]=(_*i-l*m)*D,e[5]=(l*u-d*i)*D,e[6]=S*D,e[7]=(s*m-p*i)*D,e[8]=(h*i-s*u)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return To("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xd.makeScale(e,i)),this}rotate(e){return To("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xd.makeRotation(-e)),this}translate(e,i){return To("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dm.prototype.isMatrix3=!0;let xe=Dm;const Xd=new xe,J_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$_=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R1(){const o={enabled:!0,workingColorSpace:Ju,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===tn&&(l.r=es(l.r),l.g=es(l.g),l.b=es(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===tn&&(l.r=Ao(l.r),l.g=Ao(l.g),l.b=Ao(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===zs?$u:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[h].fromXYZ).multiply(this.spaces[u].toXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ju]:{primaries:e,whitePoint:s,transfer:$u,toXYZ:J_,fromXYZ:$_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:e,whitePoint:s,transfer:tn,toXYZ:J_,fromXYZ:$_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),o}const ze=R1();function es(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ao(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let oo;class w1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{oo===void 0&&(oo=Gl("canvas")),oo.width=e.width,oo.height=e.height;const l=oo.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=oo}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Gl("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=es(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(es(i[s]/255)*255):i[s]=es(i[s]);return{data:i,width:e.width,height:e.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C1=0;class vm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=kl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width||0,i.height||0,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(kd(l[h].image)):u.push(kd(l[h]))}else u=kd(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function kd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?w1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}let D1=0;const Wd=new K;class ni extends xr{constructor(e=ni.DEFAULT_IMAGE,i=ni.DEFAULT_MAPPING,s=Ja,l=Ja,u=_i,h=Bs,d=Aa,m=Ni,p=ni.DEFAULT_ANISOTROPY,_=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=kl(),this.name="",this.source=new vm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wd).x}get height(){return this.source.getSize(Wd).y}get depth(){return this.source.getSize(Wd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){fe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){fe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yp:e.x=e.x-Math.floor(e.x);break;case Ja:e.x=e.x<0?0:1;break;case Ep:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yp:e.y=e.y-Math.floor(e.y);break;case Ja:e.y=e.y<0?0:1;break;case Ep:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=sS;ni.DEFAULT_ANISOTROPY=1;const Nm=class Nm{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],_=m[4],g=m[8],x=m[1],S=m[5],b=m[9],D=m[2],E=m[6],y=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-D)<.01&&Math.abs(b-E)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+D)<.1&&Math.abs(b+E)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,N=(S+1)/2,I=(y+1)/2,U=(_+x)/4,M=(g+D)/4,A=(b+E)/4;return O>N&&O>I?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=U/s,u=M/s):N>I?N<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),s=U/l,u=A/l):I<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),s=M/u,l=A/u),this.set(s,l,u,i),this}let w=Math.sqrt((E-b)*(E-b)+(g-D)*(g-D)+(x-_)*(x-_));return Math.abs(w)<.001&&(w=1),this.x=(E-b)/w,this.y=(g-D)/w,this.z=(x-_)/w,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this.z=Ce(this.z,e.z,i.z),this.w=Ce(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this.z=Ce(this.z,e,i),this.w=Ce(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nm.prototype.isVector4=!0;let _n=Nm;class N1 extends xr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new _n(0,0,e,i),this.scissorTest=!1,this.viewport=new _n(0,0,e,i),this.textures=[];const l=s.count;for(let u=0;u<l;u++)this.textures[u]=new ni({width:e,height:i,depth:s.depth}),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:_i,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(i.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new vm(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wa extends N1{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class gS extends ni{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=jn,this.minFilter=jn,this.wrapR=Ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class L1 extends ni{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=jn,this.minFilter=jn,this.wrapR=Ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const af=class af{constructor(e,i,s,l,u,h,d,m,p,_,g,x,S,b,D,E){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,_,g,x,S,b,D,E)}set(e,i,s,l,u,h,d,m,p,_,g,x,S,b,D,E){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=u,y[5]=h,y[9]=d,y[13]=m,y[2]=p,y[6]=_,y[10]=g,y[14]=x,y[3]=S,y[7]=b,y[11]=D,y[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new af().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/lo.setFromMatrixColumn(e,0).length(),u=1/lo.setFromMatrixColumn(e,1).length(),h=1/lo.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const x=h*_,S=h*g,b=d*_,D=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=S+b*p,i[5]=x-D*p,i[9]=-d*m,i[2]=D-x*p,i[6]=b+S*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*_,S=m*g,b=p*_,D=p*g;i[0]=x+D*d,i[4]=b*d-S,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=S*d-b,i[6]=D+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*_,S=m*g,b=p*_,D=p*g;i[0]=x-D*d,i[4]=-h*g,i[8]=b+S*d,i[1]=S+b*d,i[5]=h*_,i[9]=D-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*_,S=h*g,b=d*_,D=d*g;i[0]=m*_,i[4]=b*p-S,i[8]=x*p+D,i[1]=m*g,i[5]=D*p+x,i[9]=S*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,S=h*p,b=d*m,D=d*p;i[0]=m*_,i[4]=D-x*g,i[8]=b*g+S,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=S*g+b,i[10]=x-D*g}else if(e.order==="XZY"){const x=h*m,S=h*p,b=d*m,D=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+D,i[5]=h*_,i[9]=S*g-b,i[2]=b*g-S,i[6]=d*_,i[10]=D*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U1,e,O1)}lookAt(e,i,s){const l=this.elements;return Ri.subVectors(e,i),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),Ns.crossVectors(s,Ri),Ns.lengthSq()===0&&(Math.abs(s.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),Ns.crossVectors(s,Ri)),Ns.normalize(),du.crossVectors(Ri,Ns),l[0]=Ns.x,l[4]=du.x,l[8]=Ri.x,l[1]=Ns.y,l[5]=du.y,l[9]=Ri.y,l[2]=Ns.z,l[6]=du.z,l[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],g=s[5],x=s[9],S=s[13],b=s[2],D=s[6],E=s[10],y=s[14],w=s[3],O=s[7],N=s[11],I=s[15],U=l[0],M=l[4],A=l[8],H=l[12],F=l[1],V=l[5],Q=l[9],ut=l[13],X=l[2],nt=l[6],q=l[10],z=l[14],it=l[3],tt=l[7],lt=l[11],gt=l[15];return u[0]=h*U+d*F+m*X+p*it,u[4]=h*M+d*V+m*nt+p*tt,u[8]=h*A+d*Q+m*q+p*lt,u[12]=h*H+d*ut+m*z+p*gt,u[1]=_*U+g*F+x*X+S*it,u[5]=_*M+g*V+x*nt+S*tt,u[9]=_*A+g*Q+x*q+S*lt,u[13]=_*H+g*ut+x*z+S*gt,u[2]=b*U+D*F+E*X+y*it,u[6]=b*M+D*V+E*nt+y*tt,u[10]=b*A+D*Q+E*q+y*lt,u[14]=b*H+D*ut+E*z+y*gt,u[3]=w*U+O*F+N*X+I*it,u[7]=w*M+O*V+N*nt+I*tt,u[11]=w*A+O*Q+N*q+I*lt,u[15]=w*H+O*ut+N*z+I*gt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],x=e[10],S=e[14],b=e[3],D=e[7],E=e[11],y=e[15],w=m*S-p*x,O=d*S-p*g,N=d*x-m*g,I=h*S-p*_,U=h*x-m*_,M=h*g-d*_;return i*(D*w-E*O+y*N)-s*(b*w-E*I+y*U)+l*(b*O-D*I+y*M)-u*(b*N-D*U+E*M)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[1],h=e[5],d=e[9],m=e[2],p=e[6],_=e[10];return i*(h*_-d*p)-s*(u*_-d*m)+l*(u*p-h*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],x=e[10],S=e[11],b=e[12],D=e[13],E=e[14],y=e[15],w=i*d-s*h,O=i*m-l*h,N=i*p-u*h,I=s*m-l*d,U=s*p-u*d,M=l*p-u*m,A=_*D-g*b,H=_*E-x*b,F=_*y-S*b,V=g*E-x*D,Q=g*y-S*D,ut=x*y-S*E,X=w*ut-O*Q+N*V+I*F-U*H+M*A;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const nt=1/X;return e[0]=(d*ut-m*Q+p*V)*nt,e[1]=(l*Q-s*ut-u*V)*nt,e[2]=(D*M-E*U+y*I)*nt,e[3]=(x*U-g*M-S*I)*nt,e[4]=(m*F-h*ut-p*H)*nt,e[5]=(i*ut-l*F+u*H)*nt,e[6]=(E*N-b*M-y*O)*nt,e[7]=(_*M-x*N+S*O)*nt,e[8]=(h*Q-d*F+p*A)*nt,e[9]=(s*F-i*Q-u*A)*nt,e[10]=(b*U-D*N+y*w)*nt,e[11]=(g*N-_*U-S*w)*nt,e[12]=(d*H-h*V-m*A)*nt,e[13]=(i*V-s*H+l*A)*nt,e[14]=(D*O-b*I-E*w)*nt,e[15]=(_*I-g*O+x*w)*nt,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,_=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,g=d+d,x=u*p,S=u*_,b=u*g,D=h*_,E=h*g,y=d*g,w=m*p,O=m*_,N=m*g,I=s.x,U=s.y,M=s.z;return l[0]=(1-(D+y))*I,l[1]=(S+N)*I,l[2]=(b-O)*I,l[3]=0,l[4]=(S-N)*U,l[5]=(1-(x+y))*U,l[6]=(E+w)*U,l[7]=0,l[8]=(b+O)*M,l[9]=(E-w)*M,l[10]=(1-(x+D))*M,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinantAffine();if(u===0)return s.set(1,1,1),i.identity(),this;let h=lo.set(l[0],l[1],l[2]).length();const d=lo.set(l[4],l[5],l[6]).length(),m=lo.set(l[8],l[9],l[10]).length();u<0&&(h=-h),ia.copy(this);const p=1/h,_=1/d,g=1/m;return ia.elements[0]*=p,ia.elements[1]*=p,ia.elements[2]*=p,ia.elements[4]*=_,ia.elements[5]*=_,ia.elements[6]*=_,ia.elements[8]*=g,ia.elements[9]*=g,ia.elements[10]*=g,i.setFromRotationMatrix(ia),s.x=h,s.y=d,s.z=m,this}makePerspective(e,i,s,l,u,h,d=oa,m=!1){const p=this.elements,_=2*u/(i-e),g=2*u/(s-l),x=(i+e)/(i-e),S=(s+l)/(s-l);let b,D;if(m)b=u/(h-u),D=h*u/(h-u);else if(d===oa)b=-(h+u)/(h-u),D=-2*h*u/(h-u);else if(d===Hl)b=-h/(h-u),D=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=oa,m=!1){const p=this.elements,_=2/(i-e),g=2/(s-l),x=-(i+e)/(i-e),S=-(s+l)/(s-l);let b,D;if(m)b=1/(h-u),D=h/(h-u);else if(d===oa)b=-2/(h-u),D=-(h+u)/(h-u);else if(d===Hl)b=-1/(h-u),D=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};af.prototype.isMatrix4=!0;let en=af;const lo=new K,ia=new en,U1=new K(0,0,0),O1=new K(1,1,1),Ns=new K,du=new K,Ri=new K,tx=new en,ex=new ts;class ns{constructor(e=0,i=0,s=0,l=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ce(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ce(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return tx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ex.setFromEuler(this),this.setFromQuaternion(ex,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class vS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P1=0;const nx=new K,co=new ts,qa=new en,pu=new K,bl=new K,I1=new K,z1=new ts,ix=new K(1,0,0),ax=new K(0,1,0),sx=new K(0,0,1),rx={type:"added"},B1={type:"removed"},uo={type:"childadded",child:null},qd={type:"childremoved",child:null};class Un extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=kl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new K,i=new ns,s=new ts,l=new K(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new xe}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return co.setFromAxisAngle(e,i),this.quaternion.multiply(co),this}rotateOnWorldAxis(e,i){return co.setFromAxisAngle(e,i),this.quaternion.premultiply(co),this}rotateX(e){return this.rotateOnAxis(ix,e)}rotateY(e){return this.rotateOnAxis(ax,e)}rotateZ(e){return this.rotateOnAxis(sx,e)}translateOnAxis(e,i){return nx.copy(e).applyQuaternion(this.quaternion),this.position.add(nx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(ix,e)}translateY(e){return this.translateOnAxis(ax,e)}translateZ(e){return this.translateOnAxis(sx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?pu.copy(e):pu.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qa.lookAt(bl,pu,this.up):qa.lookAt(pu,bl,this.up),this.quaternion.setFromRotationMatrix(qa),l&&(qa.extractRotation(l.matrixWorld),co.setFromRotationMatrix(qa),this.quaternion.premultiply(co.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rx),uo.child=e,this.dispatchEvent(uo),uo.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(B1),qd.child=e,this.dispatchEvent(qd),qd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qa.multiply(e.parent.matrixWorld)),e.applyMatrix4(qa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rx),uo.child=e,this.dispatchEvent(uo),uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,e,I1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,z1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const u=this.children;for(let h=0,d=u.length;h<d;h++)u[h].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),g=h(e.shapes),x=h(e.skeletons),S=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Un.DEFAULT_UP=new K(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fn extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F1={type:"move"};class Yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const D of e.hand.values()){const E=i.getJointPose(D,s),y=this._getHandJoint(p,D);E!==null&&(y.matrix.fromArray(E.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=E.radius),y.visible=E!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),S=.02,b=.005;p.inputState.pinching&&x>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(F1)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new fn;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const _S={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},mu={h:0,s:0,l:0};function Zd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class _e{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=ze.workingColorSpace){return this.r=e,this.g=i,this.b=s,ze.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=ze.workingColorSpace){if(e=E1(e,1),i=Ce(i,0,1),s=Ce(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Zd(h,u,e+1/3),this.g=Zd(h,u,e),this.b=Zd(h,u,e-1/3)}return ze.colorSpaceToWorking(this,l),this}setStyle(e,i=Di){function s(u){u!==void 0&&parseFloat(u)<1&&fe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseFloat(u[1]))/100,Math.min(100,parseFloat(u[2]))/100,Math.min(100,parseFloat(u[3]))/100,i);break;case"hsl":case"hsla":if(u=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:fe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Di){const s=_S[e.toLowerCase()];return s!==void 0?this.setHex(s,i):fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return ze.workingToColorSpace(ei.copy(this),e),Math.round(Ce(ei.r*255,0,255))*65536+Math.round(Ce(ei.g*255,0,255))*256+Math.round(Ce(ei.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ze.workingColorSpace){ze.workingToColorSpace(ei.copy(this),i);const s=ei.r,l=ei.g,u=ei.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-s)/g+2;break;case u:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=ze.workingColorSpace){return ze.workingToColorSpace(ei.copy(this),i),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=Di){ze.workingToColorSpace(ei.copy(this),e);const i=ei.r,s=ei.g,l=ei.b;return e!==Di?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+i,Ls.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ls),e.getHSL(mu);const s=Gd(Ls.h,mu.h,i),l=Gd(Ls.s,mu.s,i),u=Gd(Ls.l,mu.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new _e;_e.NAMES=_S;class xS extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const aa=new K,Ya=new K,Kd=new K,Za=new K,fo=new K,ho=new K,ox=new K,Qd=new K,jd=new K,Jd=new K,$d=new _n,tp=new _n,ep=new _n;class Yi{constructor(e=new K,i=new K,s=new K){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),aa.subVectors(e,i),l.cross(aa);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){aa.subVectors(l,i),Ya.subVectors(s,i),Kd.subVectors(e,i);const h=aa.dot(aa),d=aa.dot(Ya),m=aa.dot(Kd),p=Ya.dot(Ya),_=Ya.dot(Kd),g=h*p-d*d;if(g===0)return u.set(0,0,0),null;const x=1/g,S=(p*m-d*_)*x,b=(h*_-d*m)*x;return u.set(1-S-b,b,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Za)===null?!1:Za.x>=0&&Za.y>=0&&Za.x+Za.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,Za)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Za.x),m.addScaledVector(h,Za.y),m.addScaledVector(d,Za.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return $d.setScalar(0),tp.setScalar(0),ep.setScalar(0),$d.fromBufferAttribute(e,i),tp.fromBufferAttribute(e,s),ep.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector($d,u.x),h.addScaledVector(tp,u.y),h.addScaledVector(ep,u.z),h}static isFrontFacing(e,i,s,l){return aa.subVectors(s,i),Ya.subVectors(e,i),aa.cross(Ya).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return aa.subVectors(this.c,this.b),Ya.subVectors(this.a,this.b),aa.cross(Ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Yi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;fo.subVectors(l,s),ho.subVectors(u,s),Qd.subVectors(e,s);const m=fo.dot(Qd),p=ho.dot(Qd);if(m<=0&&p<=0)return i.copy(s);jd.subVectors(e,l);const _=fo.dot(jd),g=ho.dot(jd);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0&&m-_>0)return h=m/(m-_),i.copy(s).addScaledVector(fo,h);Jd.subVectors(e,u);const S=fo.dot(Jd),b=ho.dot(Jd);if(b>=0&&S<=b)return i.copy(u);const D=S*p-m*b;if(D<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(ho,d);const E=_*b-S*g;if(E<=0&&g-_>=0&&S-b>=0)return ox.subVectors(u,l),d=(g-_)/(g-_+(S-b)),i.copy(l).addScaledVector(ox,d);const y=1/(E+D+x);return h=D*y,d=x*y,i.copy(s).addScaledVector(fo,h).addScaledVector(ho,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Sr{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(sa.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(sa.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=sa.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,sa):sa.fromBufferAttribute(u,h),sa.applyMatrix4(e.matrixWorld),this.expandByPoint(sa);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gu.copy(s.boundingBox)),gu.applyMatrix4(e.matrixWorld),this.union(gu)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sa),sa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tl),vu.subVectors(this.max,Tl),po.subVectors(e.a,Tl),mo.subVectors(e.b,Tl),go.subVectors(e.c,Tl),Us.subVectors(mo,po),Os.subVectors(go,mo),hr.subVectors(po,go);let i=[0,-Us.z,Us.y,0,-Os.z,Os.y,0,-hr.z,hr.y,Us.z,0,-Us.x,Os.z,0,-Os.x,hr.z,0,-hr.x,-Us.y,Us.x,0,-Os.y,Os.x,0,-hr.y,hr.x,0];return!np(i,po,mo,go,vu)||(i=[1,0,0,0,1,0,0,0,1],!np(i,po,mo,go,vu))?!1:(_u.crossVectors(Us,Os),i=[_u.x,_u.y,_u.z],np(i,po,mo,go,vu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ka),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ka=[new K,new K,new K,new K,new K,new K,new K,new K],sa=new K,gu=new Sr,po=new K,mo=new K,go=new K,Us=new K,Os=new K,hr=new K,Tl=new K,vu=new K,_u=new K,dr=new K;function np(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){dr.fromArray(o,u);const d=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),m=e.dot(dr),p=i.dot(dr),_=s.dot(dr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Nn=new K,xu=new Me;let H1=0;class vi extends xr{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=_1,this.updateRanges=[],this.gpuType=ra,this.version=0,this._normalizationScale=e!==void 0?gm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)xu.fromBufferAttribute(this,i),xu.applyMatrix3(e),this.setXY(i,xu.x,xu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Nn.fromBufferAttribute(this,i),Nn.applyMatrix3(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Nn.fromBufferAttribute(this,i),Nn.applyMatrix4(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Nn.fromBufferAttribute(this,i),Nn.applyNormalMatrix(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Nn.fromBufferAttribute(this,i),Nn.transformDirection(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=this._denormalize(s)),s}setComponent(e,i,s){return this.normalized&&(s=this._normalize(s)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=this._denormalize(i)),i}setX(e,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=this._denormalize(i)),i}setY(e,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=this._denormalize(i)),i}setZ(e,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=this._denormalize(i)),i}setW(e,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s),l=this._normalize(l)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s),l=this._normalize(l),u=this._normalize(u)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const i=this._normalizationScale;return i!==void 0?Math.max(e/i,-1):T1(e,this.array)}_normalize(e){const i=this._normalizationScale;return i!==void 0?Math.round(e*i):A1(e,this.array)}}class SS extends vi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class MS extends vi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class nn extends vi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const G1=new Sr,Al=new K,ip=new K;class Mr{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):G1.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Al.subVectors(e,this.center);const i=Al.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Al,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ip.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Al.copy(e.center).add(ip)),this.expandByPoint(Al.copy(e.center).sub(ip))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let V1=0;const Vi=new en,ap=new Un,vo=new K,wi=new Sr,Rl=new Sr,Gn=new K;class Tn extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=kl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x1(e)?MS:SS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new xe().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,i,s){return Vi.makeTranslation(e,i,s),this.applyMatrix4(Vi),this}scale(e,i,s){return Vi.makeScale(e,i,s),this.applyMatrix4(Vi),this}lookAt(e){return ap.lookAt(e),ap.updateMatrix(),this.applyMatrix4(ap.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new nn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];wi.setFromBufferAttribute(u),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Rl.setFromBufferAttribute(d),this.morphTargetsRelative?(Gn.addVectors(wi.min,Rl.min),wi.expandByPoint(Gn),Gn.addVectors(wi.max,Rl.max),wi.expandByPoint(Gn)):(wi.expandByPoint(Rl.min),wi.expandByPoint(Rl.max))}wi.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)Gn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(Gn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Gn.fromBufferAttribute(d,p),m&&(vo.fromBufferAttribute(e,p),Gn.add(vo)),l=Math.max(l,s.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new vi(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const d=[],m=[],p=new Uint8Array(s.count);for(let H=0;H<s.count;H++)d[H]=new K,m[H]=new K;const _=new K,g=new K,x=new K,S=new Me,b=new Me,D=new Me,E=new K,y=new K;function w(H,F,V){p[H]=p[F]=p[V]=1,_.fromBufferAttribute(s,H),g.fromBufferAttribute(s,F),x.fromBufferAttribute(s,V),S.fromBufferAttribute(u,H),b.fromBufferAttribute(u,F),D.fromBufferAttribute(u,V),g.sub(_),x.sub(_),b.sub(S),D.sub(S);const Q=1/(b.x*D.y-D.x*b.y);isFinite(Q)&&(E.copy(g).multiplyScalar(D.y).addScaledVector(x,-b.y).multiplyScalar(Q),y.copy(x).multiplyScalar(b.x).addScaledVector(g,-D.x).multiplyScalar(Q),d[H].add(E),d[F].add(E),d[V].add(E),m[H].add(y),m[F].add(y),m[V].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let H=0,F=O.length;H<F;++H){const V=O[H],Q=V.start,ut=V.count;for(let X=Q,nt=Q+ut;X<nt;X+=3)w(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const N=new K,I=new K,U=new K,M=new K;function A(H){U.fromBufferAttribute(l,H),M.copy(U);const F=d[H];N.copy(F),N.sub(U.multiplyScalar(U.dot(F))).normalize(),I.crossVectors(M,F);const Q=I.dot(m[H])<0?-1:1;h.setXYZW(H,N.x,N.y,N.z,Q)}for(let H=0,F=s.count;H<F;++H)p[H]&&A(H);this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new vi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new K,u=new K,h=new K,d=new K,m=new K,p=new K,_=new K,g=new K;if(e)for(let x=0,S=e.count;x<S;x+=3){const b=e.getX(x+0),D=e.getX(x+1),E=e.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,E),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,D),p.fromBufferAttribute(s,E),d.add(_),m.add(_),p.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(E,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Gn.fromBufferAttribute(e,i),Gn.normalize(),e.setXYZ(i,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(m.length*_);let S=0,b=0;for(let D=0,E=m.length;D<E;D++){d.isInterleavedBufferAttribute?S=m[D]*d.data.stride+d.offset:S=m[D]*_;for(let y=0;y<_;y++)x[b++]=p[S++]}return new vi(x,_,g)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Tn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],S=e(x,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],g=u[p];for(let x=0,S=g.length;x<S;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sp=new K,X1=new K,k1=new xe;class Is{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=sp.subVectors(s,i).cross(X1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(sp),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/u;return s===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||k1.getNormalMatrix(e),l=this.coplanarPoint(sp).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let W1=0;class Vs extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=kl(),this.name="",this.type="Material",this.blending=Pl,this.side=Hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jx,this.blendDst=Jx,this.blendEquation=Eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hd,this.stencilZFail=Hd,this.stencilZPass=Hd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){fe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){fe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(s.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(s.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(s.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(s.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new Is().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Me().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=i[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qa=new K,rp=new K,Su=new K,Mu=new K;class _m{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Qa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Qa.copy(this.origin).addScaledVector(this.direction,i),Qa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){rp.copy(e).add(i).multiplyScalar(.5),Su.copy(i).sub(e).normalize(),Mu.copy(this.origin).sub(rp);const u=e.distanceTo(i)*.5,h=-this.direction.dot(Su),d=Mu.dot(this.direction),m=-Mu.dot(Su),p=Mu.lengthSq(),_=Math.abs(1-h*h);let g,x,S,b;if(_>0)if(g=h*m-d,x=h*d-m,b=u*_,g>=0)if(x>=-b)if(x<=b){const D=1/_;g*=D,x*=D,S=g*(g+h*x+2*d)+x*(h*g+x+2*m)+p}else x=u,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*m)+p;else x=-u,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-h*u+d)),x=g>0?-u:Math.min(Math.max(-u,-m),u),S=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-u,-m),u),S=x*(x+2*m)+p):(g=Math.max(0,-(h*u+d)),x=g>0?u:Math.min(Math.max(-u,-m),u),S=-g*g+x*(x+2*m)+p);else x=h>0?-u:u,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(rp).addScaledVector(Su,x),S}intersectSphere(e,i){if(e.radius<0)return null;Qa.subVectors(e.center,this.origin);const s=Qa.dot(this.direction),l=Qa.dot(Qa)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),_>=0?(u=(e.min.y-x.y)*_,h=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,h=(e.min.y-x.y)*_),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Qa)!==null}intersectTriangle(e,i,s,l,u){const h=this.origin,d=this.direction,m=d.x,p=d.y,_=d.z,g=e.x-h.x,x=e.y-h.y,S=e.z-h.z,b=i.x-h.x,D=i.y-h.y,E=i.z-h.z,y=s.x-h.x,w=s.y-h.y,O=s.z-h.z,N=Math.abs(m),I=Math.abs(p),U=Math.abs(_);let M,A,H,F,V,Q,ut,X,nt,q,z,it;if(N>=I&&N>=U?(H=m,Q=g,nt=b,it=y,m>=0?(M=p,A=_,F=x,V=S,ut=D,X=E,q=w,z=O):(M=_,A=p,F=S,V=x,ut=E,X=D,q=O,z=w)):I>=U?(H=p,Q=x,nt=D,it=w,p>=0?(M=_,A=m,F=S,V=g,ut=E,X=b,q=O,z=y):(M=m,A=_,F=g,V=S,ut=b,X=E,q=y,z=O)):(H=_,Q=S,nt=E,it=O,_>=0?(M=m,A=p,F=g,V=x,ut=b,X=D,q=y,z=w):(M=p,A=m,F=x,V=g,ut=D,X=b,q=w,z=y)),H===0)return null;const tt=M/H,lt=A/H,gt=1/H,kt=F-tt*Q,ae=V-lt*Q,L=ut-tt*nt,et=X-lt*nt,Mt=q-tt*it,At=z-lt*it,Rt=Mt*et-At*L,Ht=kt*At-ae*Mt,se=L*ae-et*kt;if(l){if(Rt<0||Ht<0||se<0)return null}else if((Rt<0||Ht<0||se<0)&&(Rt>0||Ht>0||se>0))return null;const Tt=Rt+Ht+se;if(Tt===0)return null;const Xt=gt*(Rt*Q+Ht*nt+se*it);return(Tt>0?Xt<0:Xt>0)?null:this.at(Xt/Tt,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ja extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=om,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lx=new en,pr=new _m,yu=new Mr,cx=new K,Eu=new K,bu=new K,Tu=new K,op=new K,Au=new K,ux=new K,Ru=new K;class ge extends Un{constructor(e=new Tn,i=new ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Au.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],g=u[m];_!==0&&(op.fromBufferAttribute(g,e),h?Au.addScaledVector(op,_):Au.addScaledVector(op.sub(i),_))}i.add(Au)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yu.copy(s.boundingSphere),yu.applyMatrix4(u),pr.copy(e.ray).recast(e.near),!(yu.containsPoint(pr.origin)===!1&&(pr.intersectSphere(yu,cx)===null||pr.origin.distanceToSquared(cx)>(e.far-e.near)**2))&&(lx.copy(u).invert(),pr.copy(e.ray).applyMatrix4(lx),!(s.boundingBox!==null&&pr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,pr)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,D=x.length;b<D;b++){const E=x[b],y=h[E.materialIndex],w=Math.max(E.start,S.start),O=Math.min(d.count,Math.min(E.start+E.count,S.start+S.count));for(let N=w,I=O;N<I;N+=3){const U=d.getX(N),M=d.getX(N+1),A=d.getX(N+2);l=wu(this,y,e,s,p,_,g,U,M,A),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),D=Math.min(d.count,S.start+S.count);for(let E=b,y=D;E<y;E+=3){const w=d.getX(E),O=d.getX(E+1),N=d.getX(E+2);l=wu(this,h,e,s,p,_,g,w,O,N),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,D=x.length;b<D;b++){const E=x[b],y=h[E.materialIndex],w=Math.max(E.start,S.start),O=Math.min(m.count,Math.min(E.start+E.count,S.start+S.count));for(let N=w,I=O;N<I;N+=3){const U=N,M=N+1,A=N+2;l=wu(this,y,e,s,p,_,g,U,M,A),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),D=Math.min(m.count,S.start+S.count);for(let E=b,y=D;E<y;E+=3){const w=E,O=E+1,N=E+2;l=wu(this,h,e,s,p,_,g,w,O,N),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function q1(o,e,i,s,l,u,h,d){let m;if(e.side===Jn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Hs,d),m===null)return null;Ru.copy(d),Ru.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Ru);return p<i.near||p>i.far?null:{distance:p,point:Ru.clone(),object:o}}function wu(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,Eu),o.getVertexPosition(m,bu),o.getVertexPosition(p,Tu);const _=q1(o,e,i,s,Eu,bu,Tu,ux);if(_){const g=new K;Yi.getBarycoord(ux,Eu,bu,Tu,g),l&&(_.uv=Yi.getInterpolatedAttribute(l,d,m,p,g,new Me)),u&&(_.uv1=Yi.getInterpolatedAttribute(u,d,m,p,g,new Me)),h&&(_.normal=Yi.getInterpolatedAttribute(h,d,m,p,g,new K),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new K,materialIndex:0};Yi.getNormal(Eu,bu,Tu,x.normal),_.face=x,_.barycoord=g}return _}class yS extends ni{constructor(e=null,i=1,s=1,l,u,h,d,m,p=jn,_=jn,g,x){super(null,h,d,m,p,_,l,u,g,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fx extends vi{constructor(e,i,s,l=1){super(e,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _o=new en,hx=new en,Cu=[],dx=new Sr,Y1=new en,wl=new ge,Cl=new Mr;class Z1 extends ge{constructor(e,i,s){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new fx(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,Y1)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,_o),dx.copy(e.boundingBox).applyMatrix4(_o),this.boundingBox.union(dx)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,_o),Cl.copy(e.boundingSphere).applyMatrix4(_o),this.boundingSphere.union(Cl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){return i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=s.length+1,h=e*u+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(e,i){const s=this.matrixWorld,l=this.count;if(wl.geometry=this.geometry,wl.material=this.material,wl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cl.copy(this.boundingSphere),Cl.applyMatrix4(s),e.ray.intersectsSphere(Cl)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,_o),hx.multiplyMatrices(s,_o),wl.matrixWorld=hx,wl.raycast(e,Cu);for(let h=0,d=Cu.length;h<d;h++){const m=Cu[h];m.instanceId=u,m.object=this,i.push(m)}Cu.length=0}}setColorAt(e,i){return this.instanceColor===null&&(this.instanceColor=new fx(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,i){return i.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new yS(new Float32Array(l*this.count),l,this.count,hm,ra));const u=this.morphTexture.source.data.data;let h=0;for(let p=0;p<s.length;p++)h+=s[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=l*e;return u[m]=d,u.set(s,m+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mr=new Mr,K1=new Me(.5,.5),Du=new K;class Vl{constructor(e=new Is,i=new Is,s=new Is,l=new Is,u=new Is,h=new Is){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=oa,s=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],_=u[4],g=u[5],x=u[6],S=u[7],b=u[8],D=u[9],E=u[10],y=u[11],w=u[12],O=u[13],N=u[14],I=u[15];if(l[0].setComponents(p-h,S-_,y-b,I-w).normalize(),l[1].setComponents(p+h,S+_,y+b,I+w).normalize(),l[2].setComponents(p+d,S+g,y+D,I+O).normalize(),l[3].setComponents(p-d,S-g,y-D,I-O).normalize(),s)l[4].setComponents(m,x,E,N).normalize(),l[5].setComponents(p-m,S-x,y-E,I-N).normalize();else if(l[4].setComponents(p-m,S-x,y-E,I-N).normalize(),i===oa)l[5].setComponents(p+m,S+x,y+E,I+N).normalize();else if(i===Hl)l[5].setComponents(m,x,E,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);const i=K1.distanceTo(e.center);return mr.radius=.7071067811865476+i,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Du.x=l.normal.x>0?e.max.x:e.min.x,Du.y=l.normal.y>0?e.max.y:e.min.y,Du.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Du)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const px=new en;class xm{constructor(){this.coordinateSystem=oa,this._frustums=[],this._count=0}setFromArrayCamera(e){const i=e.cameras,s=this._frustums;for(let l=0;l<i.length;l++){const u=i[l];px.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),s[l]===void 0&&(s[l]=new Vl),s[l].setFromProjectionMatrix(px,u.coordinateSystem,u.reversedDepth)}return this._count=i.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsObject(e))return!0;return!1}intersectsSprite(e){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSphere(e))return!0;return!1}intersectsBox(e){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsBox(e))return!0;return!1}containsPoint(e){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const i=this._frustums,s=e._frustums;for(let l=0;l<e._count;l++)i[l]===void 0&&(i[l]=new Vl),i[l].copy(s[l]);return this._count=e._count,this}clone(){return new xm().copy(this)}}class em extends Vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tf=new K,ef=new K,mx=new en,Dl=new _m,Nu=new Mr,lp=new K,gx=new K;class vx extends Un{constructor(e=new Tn,i=new em){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)tf.fromBufferAttribute(i,l-1),ef.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=tf.distanceTo(ef);e.setAttribute("lineDistance",new nn(s,1))}else fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Nu.copy(s.boundingSphere),Nu.applyMatrix4(l),Nu.radius+=u,e.ray.intersectsSphere(Nu)===!1)return;mx.copy(l).invert(),Dl.copy(e.ray).applyMatrix4(mx);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,x=s.attributes.position;if(_!==null){const S=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let D=S,E=b-1;D<E;D+=p){const y=_.getX(D),w=_.getX(D+1),O=Lu(this,e,Dl,m,y,w,D);O&&i.push(O)}if(this.isLineLoop){const D=_.getX(b-1),E=_.getX(S),y=Lu(this,e,Dl,m,D,E,b-1);y&&i.push(y)}}else{const S=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let D=S,E=b-1;D<E;D+=p){const y=Lu(this,e,Dl,m,D,D+1,D);y&&i.push(y)}if(this.isLineLoop){const D=Lu(this,e,Dl,m,b-1,S,b-1);D&&i.push(D)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Lu(o,e,i,s,l,u,h){const d=o.geometry.attributes.position;if(tf.fromBufferAttribute(d,l),ef.fromBufferAttribute(d,u),i.distanceSqToSegment(tf,ef,lp,gx)>s)return;lp.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(lp);if(!(p<e.near||p>e.far))return{distance:p,point:gx.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class ES extends Vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _x=new en,nm=new _m,Uu=new Mr,Ou=new K;class xx extends Un{constructor(e=new Tn,i=new ES){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Uu.copy(s.boundingSphere),Uu.applyMatrix4(l),Uu.radius+=u,e.ray.intersectsSphere(Uu)===!1)return;_x.copy(l).invert(),nm.copy(e.ray).applyMatrix4(_x);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const x=Math.max(0,h.start),S=Math.min(p.count,h.start+h.count);for(let b=x,D=S;b<D;b++){const E=p.getX(b);Ou.fromBufferAttribute(g,E),Sx(Ou,E,m,l,e,i,this)}}else{const x=Math.max(0,h.start),S=Math.min(g.count,h.start+h.count);for(let b=x,D=S;b<D;b++)Ou.fromBufferAttribute(g,b),Sx(Ou,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Sx(o,e,i,s,l,u,h){const d=nm.distanceSqToPoint(o);if(d<i){const m=new K;nm.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class bS extends ni{constructor(e=[],i=Ro,s,l,u,h,d,m,p,_){super(e,i,s,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Co extends ni{constructor(e,i,s=Ca,l,u,h,d=jn,m=jn,p,_=Gs,g=1){if(_!==Gs&&_!==Fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,u,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class TS extends Co{constructor(e,i=Ca,s=Ro,l,u,h=jn,d=jn,m,p=Gs){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,s,l,u,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class AS extends ni{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ra extends Tn{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],g=[];let x=0,S=0;b("z","y","x",-1,-1,s,i,e,h,u,0),b("z","y","x",1,-1,s,i,-e,h,u,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new nn(p,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(g,2));function b(D,E,y,w,O,N,I,U,M,A,H){const F=N/M,V=I/A,Q=N/2,ut=I/2,X=U/2,nt=M+1,q=A+1;let z=0,it=0;const tt=new K;for(let lt=0;lt<q;lt++){const gt=lt*V-ut;for(let kt=0;kt<nt;kt++){const ae=kt*F-Q;tt[D]=ae*w,tt[E]=gt*O,tt[y]=X,p.push(tt.x,tt.y,tt.z),tt[D]=0,tt[E]=0,tt[y]=U>0?1:-1,_.push(tt.x,tt.y,tt.z),g.push(kt/M),g.push(1-lt/A),z+=1}}for(let lt=0;lt<A;lt++)for(let gt=0;gt<M;gt++){const kt=x+gt+nt*lt,ae=x+gt+nt*(lt+1),L=x+(gt+1)+nt*(lt+1),et=x+(gt+1)+nt*lt;m.push(kt,ae,et),m.push(ae,L,et),it+=6}d.addGroup(S,it,H),S+=it,x+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nf extends Tn{constructor(e=1,i=1,s=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const _=[],g=[],x=[],S=[];let b=0;const D=[],E=s/2;let y=0;w(),h===!1&&(e>0&&O(!0),i>0&&O(!1)),this.setIndex(_),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(S,2));function w(){const N=new K,I=new K;let U=0;const M=(i-e)/s;for(let A=0;A<=u;A++){const H=[],F=A/u,V=F*(i-e)+e;for(let Q=0;Q<=l;Q++){const ut=Q/l,X=ut*m+d,nt=Math.sin(X),q=Math.cos(X);I.x=V*nt,I.y=-F*s+E,I.z=V*q,g.push(I.x,I.y,I.z),N.set(nt,M,q).normalize(),x.push(N.x,N.y,N.z),S.push(ut,1-F),H.push(b++)}D.push(H)}for(let A=0;A<l;A++)for(let H=0;H<u;H++){const F=D[H][A],V=D[H+1][A],Q=D[H+1][A+1],ut=D[H][A+1];(e>0||H!==0)&&(_.push(F,V,ut),U+=3),(i>0||H!==u-1)&&(_.push(V,Q,ut),U+=3)}p.addGroup(y,U,0),y+=U}function O(N){const I=b,U=new Me,M=new K;let A=0;const H=N===!0?e:i,F=N===!0?1:-1;for(let Q=1;Q<=l;Q++)g.push(0,E*F,0),x.push(0,F,0),S.push(.5,.5),b++;const V=b;for(let Q=0;Q<=l;Q++){const X=Q/l*m+d,nt=Math.cos(X),q=Math.sin(X);M.x=H*q,M.y=E*F,M.z=H*nt,g.push(M.x,M.y,M.z),x.push(0,F,0),U.x=nt*.5+.5,U.y=q*.5*F+.5,S.push(U.x,U.y),b++}for(let Q=0;Q<l;Q++){const ut=I+Q,X=V+Q;N===!0?_.push(X,X+1,ut):_.push(X+1,X,ut),A+=3}p.addGroup(y,A,N===!0?1:2),y+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lo extends Tn{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const u=[],h=[];d(l),p(s),_(),this.setAttribute("position",new nn(u,3)),this.setAttribute("normal",new nn(u.slice(),3)),this.setAttribute("uv",new nn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(w){const O=new K,N=new K,I=new K;for(let U=0;U<i.length;U+=3)S(i[U+0],O),S(i[U+1],N),S(i[U+2],I),m(O,N,I,w)}function m(w,O,N,I){const U=I+1,M=[];for(let A=0;A<=U;A++){M[A]=[];const H=w.clone().lerp(N,A/U),F=O.clone().lerp(N,A/U),V=U-A;for(let Q=0;Q<=V;Q++)Q===0&&A===U?M[A][Q]=H:M[A][Q]=H.clone().lerp(F,Q/V)}for(let A=0;A<U;A++)for(let H=0;H<2*(U-A)-1;H++){const F=Math.floor(H/2);H%2===0?(x(M[A][F+1]),x(M[A+1][F]),x(M[A][F])):(x(M[A][F+1]),x(M[A+1][F+1]),x(M[A+1][F]))}}function p(w){const O=new K;for(let N=0;N<u.length;N+=3)O.x=u[N+0],O.y=u[N+1],O.z=u[N+2],O.normalize().multiplyScalar(w),u[N+0]=O.x,u[N+1]=O.y,u[N+2]=O.z}function _(){const w=new K;for(let O=0;O<u.length;O+=3){w.x=u[O+0],w.y=u[O+1],w.z=u[O+2];const N=E(w)/2/Math.PI+.5,I=y(w)/Math.PI+.5;h.push(N,1-I)}b(),g()}function g(){for(let w=0;w<h.length;w+=6){const O=h[w+0],N=h[w+2],I=h[w+4],U=Math.max(O,N,I),M=Math.min(O,N,I);U>.9&&M<.1&&(O<.2&&(h[w+0]+=1),N<.2&&(h[w+2]+=1),I<.2&&(h[w+4]+=1))}}function x(w){u.push(w.x,w.y,w.z)}function S(w,O){const N=w*3;O.x=e[N+0],O.y=e[N+1],O.z=e[N+2]}function b(){const w=new K,O=new K,N=new K,I=new K,U=new Me,M=new Me,A=new Me;for(let H=0,F=0;H<u.length;H+=9,F+=6){w.set(u[H+0],u[H+1],u[H+2]),O.set(u[H+3],u[H+4],u[H+5]),N.set(u[H+6],u[H+7],u[H+8]),U.set(h[F+0],h[F+1]),M.set(h[F+2],h[F+3]),A.set(h[F+4],h[F+5]),I.copy(w).add(O).add(N).divideScalar(3);const V=E(I);D(U,F+0,w,V),D(M,F+2,O,V),D(A,F+4,N,V)}}function D(w,O,N,I){I<0&&w.x===1&&(h[O]=w.x-1),N.x===0&&N.z===0&&(h[O]=I/2/Math.PI+.5)}function E(w){return Math.atan2(w.z,-w.x)}function y(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.vertices,e.indices,e.radius,e.detail)}}class Sm extends Lo{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=1/s,u=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-s,0,-l,s,0,l,-s,0,l,s,-l,-s,0,-l,s,0,l,-s,0,l,s,0,-s,0,-l,s,0,-l,-s,0,l,s,0,l],h=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(u,h,e,i),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Sm(e.radius,e.detail)}}const Pu=new K,Iu=new K,cp=new K,zu=new Yi;class Q1 extends Tn{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),u=Math.cos(Yu*i),h=e.getIndex(),d=e.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],_=["a","b","c"],g=new Array(3),x=new Map,S=[];for(let b=0;b<m;b+=3){h?(p[0]=h.getX(b),p[1]=h.getX(b+1),p[2]=h.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:D,b:E,c:y}=zu;if(D.fromBufferAttribute(d,p[0]),E.fromBufferAttribute(d,p[1]),y.fromBufferAttribute(d,p[2]),zu.getNormal(cp),g[0]=`${Math.round(D.x*l)},${Math.round(D.y*l)},${Math.round(D.z*l)}`,g[1]=`${Math.round(E.x*l)},${Math.round(E.y*l)},${Math.round(E.z*l)}`,g[2]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let w=0;w<3;w++){const O=(w+1)%3,N=g[w],I=g[O],U=zu[_[w]],M=zu[_[O]],A=`${N}_${I}`,H=`${I}_${N}`,F=x.get(H);F?(cp.dot(F.normal)<=u&&(S.push(U.x,U.y,U.z),S.push(M.x,M.y,M.z)),x.set(H,null)):x.has(A)||x.set(A,{index0:p[w],index1:p[O],normal:cp.clone()})}}for(const b of x.values())if(b){const{index0:D,index1:E}=b;Pu.fromBufferAttribute(d,D),Iu.fromBufferAttribute(d,E),S.push(Pu.x,Pu.y,Pu.z),S.push(Iu.x,Iu.y,Iu.z)}this.setAttribute("position",new nn(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class j1{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(e,i){const s=this.getUtoTmapping(e);return this.getPoint(s,i)}getPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return i}getSpacedPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPointAt(s/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),u=0;i.push(0);for(let h=1;h<=e;h++)s=this.getPoint(h/e),u+=s.distanceTo(l),i.push(u),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const s=this.getLengths();let l=0;const u=s.length;let h;i?h=i:h=e*s[u-1];let d=0,m=u-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(u-1);const _=s[l],x=s[l+1]-_,S=(h-_)/x;return(l+S)/(u-1)}getTangent(e,i){let l=e-1e-4,u=e+1e-4;l<0&&(l=0),u>1&&(u=1);const h=this.getPoint(l),d=this.getPoint(u),m=i||(h.isVector2?new Me:new K);return m.copy(d).sub(h).normalize(),m}getTangentAt(e,i){const s=this.getUtoTmapping(e);return this.getTangent(s,i)}computeFrenetFrames(e,i=!1){const s=new K,l=[],u=[],h=[],d=new K,m=new en;for(let S=0;S<=e;S++){const b=S/e;l[S]=this.getTangentAt(b,new K)}u[0]=new K,h[0]=new K;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),g=Math.abs(l[0].y),x=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),g<=p&&(p=g,s.set(0,1,0)),x<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),u[0].crossVectors(l[0],d),h[0].crossVectors(l[0],u[0]);for(let S=1;S<=e;S++){if(u[S]=u[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(Ce(l[S-1].dot(l[S]),-1,1));u[S].applyMatrix4(m.makeRotationAxis(d,b))}h[S].crossVectors(l[S],u[S])}if(i===!0){let S=Math.acos(Ce(u[0].dot(u[e]),-1,1));S/=e,l[0].dot(d.crossVectors(u[0],u[e]))>0&&(S=-S);for(let b=1;b<=e;b++)u[b].applyMatrix4(m.makeRotationAxis(l[b],S*b)),h[b].crossVectors(l[b],u[b])}return{tangents:l,normals:u,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}function J1(o,e){const i=1-o;return i*i*e}function $1(o,e){return 2*(1-o)*o*e}function tb(o,e){return o*o*e}function up(o,e,i,s){return J1(o,e)+$1(o,i)+tb(o,s)}class eb extends j1{constructor(e=new K,i=new K,s=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new K){const s=i,l=this.v0,u=this.v1,h=this.v2;return s.set(up(e,l.x,u.x,h.x),up(e,l.y,u.y,h.y),up(e,l.z,u.z,h.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mm extends Lo{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Mm(e.radius,e.detail)}}class ym extends Lo{constructor(e=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new ym(e.radius,e.detail)}}class Do extends Tn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,g=e/d,x=i/m,S=[],b=[],D=[],E=[];for(let y=0;y<_;y++){const w=y*x-h;for(let O=0;O<p;O++){const N=O*g-u;b.push(N,-w,0),D.push(0,0,1),E.push(O/d),E.push(1-y/m)}}for(let y=0;y<m;y++)for(let w=0;w<d;w++){const O=w+p*y,N=w+p*(y+1),I=w+1+p*(y+1),U=w+1+p*y;S.push(O,N,U),S.push(N,I,U)}this.setIndex(S),this.setAttribute("position",new nn(b,3)),this.setAttribute("normal",new nn(D,3)),this.setAttribute("uv",new nn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.widthSegments,e.heightSegments)}}class Il extends Tn{constructor(e=.5,i=1,s=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:u,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let g=e;const x=(i-e)/l,S=new K,b=new Me;for(let D=0;D<=l;D++){for(let E=0;E<=s;E++){const y=u+E/s*h;S.x=g*Math.cos(y),S.y=g*Math.sin(y),m.push(S.x,S.y,S.z),p.push(0,0,1),b.x=(S.x/i+1)/2,b.y=(S.y/i+1)/2,_.push(b.x,b.y)}g+=x}for(let D=0;D<l;D++){const E=D*(s+1);for(let y=0;y<s;y++){const w=y+E,O=w,N=w+s+1,I=w+s+2,U=w+1;d.push(O,N,U),d.push(N,I,U)}}this.setIndex(d),this.setAttribute("position",new nn(m,3)),this.setAttribute("normal",new nn(p,3)),this.setAttribute("uv",new nn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ci extends Tn{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const _=[],g=new K,x=new K,S=[],b=[],D=[],E=[];for(let y=0;y<=s;y++){const w=[],O=y/s,N=h+O*d,I=e*Math.cos(N),U=Math.sqrt(e*e-I*I);let M=0;y===0&&h===0?M=.5/i:y===s&&m===Math.PI&&(M=-.5/i);for(let A=0;A<=i;A++){const H=A/i,F=l+H*u;g.x=-U*Math.cos(F),g.y=I,g.z=U*Math.sin(F),b.push(g.x,g.y,g.z),x.copy(g).normalize(),D.push(x.x,x.y,x.z),E.push(H+M,1-O),w.push(p++)}_.push(w)}for(let y=0;y<s;y++)for(let w=0;w<i;w++){const O=_[y][w+1],N=_[y][w],I=_[y+1][w],U=_[y+1][w+1];(y!==0||h>0)&&S.push(O,N,U),(y!==s-1||m<Math.PI)&&S.push(N,I,U)}this.setIndex(S),this.setAttribute("position",new nn(b,3)),this.setAttribute("normal",new nn(D,3)),this.setAttribute("uv",new nn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Em extends Lo{constructor(e=1,i=0){const s=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],l=[2,1,0,0,3,2,1,3,0,2,3,1];super(s,l,e,i),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Em(e.radius,e.detail)}}class vr extends Tn{constructor(e=1,i=.4,s=12,l=48,u=Math.PI*2,h=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:u,thetaStart:h,thetaLength:d},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],_=[],g=[],x=new K,S=new K,b=new K;for(let D=0;D<=s;D++){const E=h+D/s*d;for(let y=0;y<=l;y++){const w=y/l*u;S.x=(e+i*Math.cos(E))*Math.cos(w),S.y=(e+i*Math.cos(E))*Math.sin(w),S.z=i*Math.sin(E),p.push(S.x,S.y,S.z),x.x=e*Math.cos(w),x.y=e*Math.sin(w),b.subVectors(S,x).normalize(),_.push(b.x,b.y,b.z),g.push(y/l),g.push(D/s)}}for(let D=1;D<=s;D++)for(let E=1;E<=l;E++){const y=(l+1)*D+E-1,w=(l+1)*(D-1)+E-1,O=(l+1)*(D-1)+E,N=(l+1)*D+E;m.push(y,w,N),m.push(w,O,N)}this.setIndex(m),this.setAttribute("position",new nn(p,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class bm extends Tn{constructor(e=1,i=.4,s=64,l=8,u=2,h=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:i,tubularSegments:s,radialSegments:l,p:u,q:h},s=Math.floor(s),l=Math.floor(l);const d=[],m=[],p=[],_=[],g=new K,x=new K,S=new K,b=new K,D=new K,E=new K,y=new K;for(let O=0;O<=s;++O){const N=O/s*u*Math.PI*2;w(N,u,h,e,S),w(N+.01,u,h,e,b),E.subVectors(b,S),y.addVectors(b,S),D.crossVectors(E,y),y.crossVectors(D,E),D.normalize(),y.normalize();for(let I=0;I<=l;++I){const U=I/l*Math.PI*2,M=-i*Math.cos(U),A=i*Math.sin(U);g.x=S.x+(M*y.x+A*D.x),g.y=S.y+(M*y.y+A*D.y),g.z=S.z+(M*y.z+A*D.z),m.push(g.x,g.y,g.z),x.subVectors(g,S).normalize(),p.push(x.x,x.y,x.z),_.push(O/s),_.push(I/l)}}for(let O=1;O<=s;O++)for(let N=1;N<=l;N++){const I=(l+1)*(O-1)+(N-1),U=(l+1)*O+(N-1),M=(l+1)*O+N,A=(l+1)*(O-1)+N;d.push(I,U,A),d.push(U,M,A)}this.setIndex(d),this.setAttribute("position",new nn(m,3)),this.setAttribute("normal",new nn(p,3)),this.setAttribute("uv",new nn(_,2));function w(O,N,I,U,M){const A=Math.cos(O),H=Math.sin(O),F=I/N*O,V=Math.cos(F);M.x=U*(2+V)*.5*A,M.y=U*(2+V)*H*.5,M.z=U*Math.sin(F)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bm(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function No(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];if(Mx(l))l.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Mx(l[0])){const u=[];for(let h=0,d=l.length;h<d;h++)u[h]=l[h].clone();e[i][s]=u}else e[i][s]=l.slice();else e[i][s]=l}}return e}function li(o){const e={};for(let i=0;i<o.length;i++){const s=No(o[i]);for(const l in s)e[l]=s[l]}return e}function Mx(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function nb(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function RS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const ib={clone:No,merge:li};var ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=nb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new _e().setHex(l.value);break;case"v2":this.uniforms[s].value=new Me().fromArray(l.value);break;case"v3":this.uniforms[s].value=new K().fromArray(l.value);break;case"v4":this.uniforms[s].value=new _n().fromArray(l.value);break;case"m3":this.uniforms[s].value=new xe().fromArray(l.value);break;case"m4":this.uniforms[s].value=new en().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class rb extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ba extends Vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ju,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gr extends ba{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return To('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){To('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class wS extends Vs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ju,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=om,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ob extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lb extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fp={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(yx(o)||(this.files[o]=e))},get:function(o){if(this.enabled!==!1&&!yx(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function yx(o){try{const e=o.slice(o.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class cb{constructor(e,i,s){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){d++,u===!1&&l.onStart!==void 0&&l.onStart(_,h,d),u=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return _=_.normalize("NFC"),m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,x=p.length;g<x;g+=2){const S=p[g],b=p[g+1];if(S.global&&(S.lastIndex=0),S.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ub=new cb;class Tm{constructor(e){this.manager=e!==void 0?e:ub,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,u){s.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Tm.DEFAULT_MATERIAL_NAME="__DEFAULT";const xo=new WeakMap;class fb extends Tm{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,h=fp.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)u.manager.itemStart(e),setTimeout(function(){i&&i(h),u.manager.itemEnd(e)},0);else{let g=xo.get(h);g===void 0&&(g=[],xo.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=Gl("img");function m(){_(),i&&i(this);const g=xo.get(this)||[];for(let x=0;x<g.length;x++){const S=g[x];S.onLoad&&S.onLoad(this)}xo.delete(this),u.manager.itemEnd(e)}function p(g){_(),l&&l(g),fp.remove(`image:${e}`);const x=xo.get(this)||[];for(let S=0;S<x.length;S++){const b=x[S];b.onError&&b.onError(g)}xo.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),fp.add(`image:${e}`,d),u.manager.itemStart(e),d.fetchPriority=this.priority,d.src=e,d}}class hb extends Tm{constructor(e){super(e)}load(e,i,s,l){const u=new ni,h=new fb(this.manager);return h.setPriority(this.priority),h.setCache(this.cache),h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class Am extends Un{static registerNode(e){this.prototype._lightNode=e}constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const hp=new en,Ex=new K,bx=new K;class CS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vl,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new _n(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;Ex.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ex),bx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(bx),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,s,l){hp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(hp,e.coordinateSystem,e.reversedDepth);const u=this._frameExtents,h=l?l.z/u.x:1,d=l?l.w/u.y:1,m=l?l.x/u.x:0,p=l?l.y/u.y:0;e.coordinateSystem===Hl||e.reversedDepth?i.set(.5*h,0,0,.5*h+m,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):i.set(.5*h,0,0,.5*h+m,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),i.multiply(hp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bu=new K,Fu=new ts,ya=new K;class DS extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bu,Fu,ya),ya.x===1&&ya.y===1&&ya.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bu,Fu,ya.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Bu,Fu,ya),ya.x===1&&ya.y===1&&ya.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bu,Fu,ya.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ps=new K,Tx=new Me,Ax=new Me;class Wi extends DS{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=tm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tm*2*Math.atan(Math.tan(Yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z)}getViewSize(e,i){return this.getViewBounds(e,Tx,Ax),i.subVectors(Ax,Tx)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Yu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class db extends CS{constructor(){super(new Wi(90,1,.5,500)),this.isPointLightShadow=!0}}class pb extends Am{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new db}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class NS extends DS{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class mb extends CS{constructor(){super(new NS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rx extends Am{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new mb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class gb extends Am{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const So=-90,Mo=1;class im extends Un{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Wi(So,Mo,e,i);l.layers=this.layers,this.add(l);const u=new Wi(So,Mo,e,i);u.layers=this.layers,this.add(u);const h=new Wi(So,Mo,e,i);h.layers=this.layers,this.add(h);const d=new Wi(So,Mo,e,i);d.layers=this.layers,this.add(d);const m=new Wi(So,Mo,e,i);m.layers=this.layers,this.add(m);const p=new Wi(So,Mo,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Hl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const D=s.texture.mipmapsAutoUpdate;s.texture.mipmapsAutoUpdate=!1;let E=!1;e.isWebGLRenderer===!0?E=e.state.buffers.depth.getReversed():E=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(s,1,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,3,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.mipmapsAutoUpdate=D,e.setRenderTarget(s,5,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(g,x,S),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class vb extends Wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class _b{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,fe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function wx(o,e,i,s){const l=xb(s);switch(i){case uS:return o*e;case hm:return o*e/l.components*l.byteLength;case dm:return o*e/l.components*l.byteLength;case _r:return o*e*2/l.components*l.byteLength;case pm:return o*e*2/l.components*l.byteLength;case fS:return o*e*3/l.components*l.byteLength;case Aa:return o*e*4/l.components*l.byteLength;case mm:return o*e*4/l.components*l.byteLength;case Xu:case ku:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Wu:case qu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Tp:case Rp:return Math.max(o,16)*Math.max(e,8)/4;case bp:case Ap:return Math.max(o,8)*Math.max(e,8)/2;case wp:case Cp:case Np:case Lp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Dp:case Ku:case Up:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Op:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Pp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ip:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case zp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Bp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Fp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Gp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Vp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Xp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case kp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Wp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case qp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Yp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Zp:case Kp:case Qp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case jp:case Jp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Qu:case $p:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function xb(o){switch(o){case Ni:case rS:return{byteLength:1,components:1};case Fl:case oS:case Da:return{byteLength:2,components:1};case um:case fm:return{byteLength:2,components:4};case Ca:case cm:case ra:return{byteLength:4,components:1};case lS:case cS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rm}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function LS(){let o=null,e=!1,i=null,s=null;function l(u,h){s=o.requestAnimationFrame(l),i(u,h)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Sb(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((S,b)=>S.start-b.start);let x=0;for(let S=1;S<g.length;S++){const b=g[x],D=g[S];D.start<=b.start+b.count+1?b.count=Math.max(b.count,D.start+D.count-b.start):(++x,g[x]=D)}g.length=x+1;for(let S=0,b=g.length;S<b;S++){const D=g[S];o.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ab=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ub=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ob=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,qb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qb="gl_FragColor = linearToOutputTexel( gl_FragColor );",jb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,tT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,dT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_T=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ST=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,MT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yT=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ET=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OT=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,XT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,QT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$T=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EA=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,DA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$A=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ae={alphahash_fragment:Mb,alphahash_pars_fragment:yb,alphamap_fragment:Eb,alphamap_pars_fragment:bb,alphatest_fragment:Tb,alphatest_pars_fragment:Ab,aomap_fragment:Rb,aomap_pars_fragment:wb,batching_pars_vertex:Cb,batching_vertex:Db,begin_vertex:Nb,beginnormal_vertex:Lb,bsdfs:Ub,iridescence_fragment:Ob,bumpmap_pars_fragment:Pb,clipping_planes_fragment:Ib,clipping_planes_pars_fragment:zb,clipping_planes_pars_vertex:Bb,clipping_planes_vertex:Fb,color_fragment:Hb,color_pars_fragment:Gb,color_pars_vertex:Vb,color_vertex:Xb,common:kb,defaultnormal_vertex:Wb,displacementmap_pars_vertex:qb,displacementmap_vertex:Yb,emissivemap_fragment:Zb,emissivemap_pars_fragment:Kb,colorspace_fragment:Qb,colorspace_pars_fragment:jb,envmap_fragment:Jb,envmap_common_pars_fragment:$b,envmap_pars_fragment:tT,envmap_pars_vertex:eT,envmap_physical_pars_fragment:hT,envmap_vertex:nT,fog_vertex:iT,fog_pars_vertex:aT,fog_fragment:sT,fog_pars_fragment:rT,gradientmap_pars_fragment:oT,lightmap_pars_fragment:lT,lights_lambert_fragment:cT,lights_lambert_pars_fragment:uT,lights_pars_begin:fT,lights_toon_fragment:dT,lights_toon_pars_fragment:pT,lights_phong_fragment:mT,lights_phong_pars_fragment:gT,lights_physical_fragment:vT,lights_physical_pars_fragment:_T,lights_fragment_begin:xT,lights_fragment_maps:ST,lights_fragment_end:MT,lightprobes_pars_fragment:yT,logdepthbuf_fragment:ET,logdepthbuf_pars_fragment:bT,logdepthbuf_pars_vertex:TT,logdepthbuf_vertex:AT,map_fragment:RT,map_pars_fragment:wT,map_particle_fragment:CT,map_particle_pars_fragment:DT,metalnessmap_fragment:NT,metalnessmap_pars_fragment:LT,morphinstance_vertex:UT,morphcolor_vertex:OT,morphnormal_vertex:PT,morphtarget_pars_vertex:IT,morphtarget_vertex:zT,normal_fragment_begin:BT,normal_fragment_maps:FT,normal_pars_fragment:HT,normal_pars_vertex:GT,normal_vertex:VT,normalmap_pars_fragment:XT,clearcoat_normal_fragment_begin:kT,clearcoat_normal_fragment_maps:WT,clearcoat_pars_fragment:qT,iridescence_pars_fragment:YT,opaque_fragment:ZT,packing:KT,premultiplied_alpha_fragment:QT,project_vertex:jT,dithering_fragment:JT,dithering_pars_fragment:$T,roughnessmap_fragment:tA,roughnessmap_pars_fragment:eA,shadowmap_pars_fragment:nA,shadowmap_pars_vertex:iA,shadowmap_vertex:aA,shadowmask_pars_fragment:sA,skinbase_vertex:rA,skinning_pars_vertex:oA,skinning_vertex:lA,skinnormal_vertex:cA,specularmap_fragment:uA,specularmap_pars_fragment:fA,tonemapping_fragment:hA,tonemapping_pars_fragment:dA,transmission_fragment:pA,transmission_pars_fragment:mA,uv_pars_fragment:gA,uv_pars_vertex:vA,uv_vertex:_A,worldpos_vertex:xA,background_vert:SA,background_frag:MA,backgroundCube_vert:yA,backgroundCube_frag:EA,cube_vert:bA,cube_frag:TA,depth_vert:AA,depth_frag:RA,distance_vert:wA,distance_frag:CA,equirect_vert:DA,equirect_frag:NA,linedashed_vert:LA,linedashed_frag:UA,meshbasic_vert:OA,meshbasic_frag:PA,meshlambert_vert:IA,meshlambert_frag:zA,meshmatcap_vert:BA,meshmatcap_frag:FA,meshnormal_vert:HA,meshnormal_frag:GA,meshphong_vert:VA,meshphong_frag:XA,meshphysical_vert:kA,meshphysical_frag:WA,meshtoon_vert:qA,meshtoon_frag:YA,points_vert:ZA,points_frag:KA,shadow_vert:QA,shadow_frag:jA,sprite_vert:JA,sprite_frag:$A},Wt={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Ta={basic:{uniforms:li([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:li([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:li([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:li([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:li([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:li([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:li([Wt.points,Wt.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:li([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:li([Wt.common,Wt.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:li([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:li([Wt.sprite,Wt.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distance:{uniforms:li([Wt.common,Wt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distance_vert,fragmentShader:Ae.distance_frag},shadow:{uniforms:li([Wt.lights,Wt.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Ta.physical={uniforms:li([Ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Hu={r:0,b:0,g:0},tR=new en,US=new xe;US.set(-1,0,0,0,1,0,0,0,1);function eR(o,e,i,s,l,u){const h=new _e(0);let d=l===!0?0:1,m,p,_=null,g=0,x=null;function S(w){let O=w.isScene===!0?w.background:null;if(O&&O.isTexture){const N=w.backgroundBlurriness>0;O=e.get(O,N)}return O}function b(w){let O=!1;const N=S(w);N===null?E(h,d):N&&N.isColor&&(E(N,1),O=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function D(w,O){const N=S(O);N&&N.isCubeTexture?(p===void 0&&(p=new ge(new Ra(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:No(Ta.backgroundCube.uniforms),vertexShader:Ta.backgroundCube.vertexShader,fragmentShader:Ta.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,U,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(tR.makeRotationFromEuler(O.backgroundRotation)).transpose(),N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(US),p.material.toneMapped=ze.getTransfer(N.colorSpace)!==tn,(_!==N||g!==N.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,_=N,g=N.version,x=o.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new ge(new Do(2,2),new Zi({name:"BackgroundMaterial",uniforms:No(Ta.background.uniforms),vertexShader:Ta.background.vertexShader,fragmentShader:Ta.background.fragmentShader,side:Hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=ze.getTransfer(N.colorSpace)!==tn,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||g!==N.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,_=N,g=N.version,x=o.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function E(w,O){w.getRGB(Hu,RS(o)),i.buffers.color.setClear(Hu.r,Hu.g,Hu.b,O,u)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,O=1){h.set(w),d=O,E(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,E(h,d)},render:b,addToRenderList:D,dispose:y}}function nR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(V,Q,ut,X,nt){let q=!1;const z=g(V,X,ut,Q);u!==z&&(u=z,p(u.object)),q=S(V,X,ut,nt),q&&b(V,X,ut,nt),nt!==null&&e.update(nt,o.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,N(V,Q,ut,X),nt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function m(){return o.createVertexArray()}function p(V){return o.bindVertexArray(V)}function _(V){return o.deleteVertexArray(V)}function g(V,Q,ut,X){const nt=X.wireframe===!0;let q=s[Q.id];q===void 0&&(q={},s[Q.id]=q);const z=V.isInstancedMesh===!0?V.id:0;let it=q[z];it===void 0&&(it={},q[z]=it);let tt=it[ut.id];tt===void 0&&(tt={},it[ut.id]=tt);let lt=tt[nt];return lt===void 0&&(lt=x(m()),tt[nt]=lt),lt}function x(V){const Q=[],ut=[],X=[];for(let nt=0;nt<i;nt++)Q[nt]=0,ut[nt]=0,X[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ut,attributeDivisors:X,object:V,attributes:{},index:null}}function S(V,Q,ut,X){const nt=u.attributes,q=Q.attributes;let z=0;const it=ut.getAttributes();for(const tt in it)if(it[tt].location>=0){const gt=nt[tt];let kt=q[tt];if(kt===void 0&&(tt==="instanceMatrix"&&V.instanceMatrix&&(kt=V.instanceMatrix),tt==="instanceColor"&&V.instanceColor&&(kt=V.instanceColor)),gt===void 0||gt.attribute!==kt||kt&&gt.data!==kt.data)return!0;z++}return u.attributesNum!==z||u.index!==X}function b(V,Q,ut,X){const nt={},q=Q.attributes;let z=0;const it=ut.getAttributes();for(const tt in it)if(it[tt].location>=0){let gt=q[tt];gt===void 0&&(tt==="instanceMatrix"&&V.instanceMatrix&&(gt=V.instanceMatrix),tt==="instanceColor"&&V.instanceColor&&(gt=V.instanceColor));const kt={};kt.attribute=gt,gt&&gt.data&&(kt.data=gt.data),nt[tt]=kt,z++}u.attributes=nt,u.attributesNum=z,u.index=X}function D(){const V=u.newAttributes;for(let Q=0,ut=V.length;Q<ut;Q++)V[Q]=0}function E(V){y(V,0)}function y(V,Q){const ut=u.newAttributes,X=u.enabledAttributes,nt=u.attributeDivisors;ut[V]=1,X[V]===0&&(o.enableVertexAttribArray(V),X[V]=1),nt[V]!==Q&&(o.vertexAttribDivisor(V,Q),nt[V]=Q)}function w(){const V=u.newAttributes,Q=u.enabledAttributes;for(let ut=0,X=Q.length;ut<X;ut++)Q[ut]!==V[ut]&&(o.disableVertexAttribArray(ut),Q[ut]=0)}function O(V,Q,ut,X,nt,q,z){z===!0?o.vertexAttribIPointer(V,Q,ut,nt,q):o.vertexAttribPointer(V,Q,ut,X,nt,q)}function N(V,Q,ut,X){D();const nt=X.attributes,q=ut.getAttributes(),z=Q.defaultAttributeValues;for(const it in q){const tt=q[it];if(tt.location>=0){let lt=nt[it];if(lt===void 0&&(it==="instanceMatrix"&&V.instanceMatrix&&(lt=V.instanceMatrix),it==="instanceColor"&&V.instanceColor&&(lt=V.instanceColor)),lt!==void 0){const gt=lt.normalized,kt=lt.itemSize,ae=e.get(lt);if(ae===void 0)continue;const L=ae.buffer,et=ae.type,Mt=ae.bytesPerElement,At=et===o.INT||et===o.UNSIGNED_INT||lt.gpuType===cm;if(lt.isInterleavedBufferAttribute){const Rt=lt.data,Ht=Rt.isInterleavedBuffer===!0?Rt.stride:Rt.itemSize,se=lt.offset;if(Rt.isInstancedInterleavedBuffer||Rt.isInstancedBufferAttribute){for(let Tt=0;Tt<tt.locationSize;Tt++)y(tt.location+Tt,Rt.meshPerAttribute);V.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Tt=0;Tt<tt.locationSize;Tt++)E(tt.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,L);for(let Tt=0;Tt<tt.locationSize;Tt++)O(tt.location+Tt,kt/tt.locationSize,et,gt,Ht*Mt,(se+kt/tt.locationSize*Tt)*Mt,At)}else{if(lt.isInstancedBufferAttribute){for(let Rt=0;Rt<tt.locationSize;Rt++)y(tt.location+Rt,lt.meshPerAttribute);V.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Rt=0;Rt<tt.locationSize;Rt++)E(tt.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,L);for(let Rt=0;Rt<tt.locationSize;Rt++)O(tt.location+Rt,kt/tt.locationSize,et,gt,kt*Mt,kt/tt.locationSize*Rt*Mt,At)}}else if(z!==void 0){const gt=z[it];if(gt!==void 0)switch(gt.length){case 2:o.vertexAttrib2fv(tt.location,gt);break;case 3:o.vertexAttrib3fv(tt.location,gt);break;case 4:o.vertexAttrib4fv(tt.location,gt);break;default:o.vertexAttrib1fv(tt.location,gt)}}}}w()}function I(){H();for(const V in s){const Q=s[V];for(const ut in Q){const X=Q[ut];for(const nt in X){const q=X[nt];for(const z in q)_(q[z].object),delete q[z];delete X[nt]}}delete s[V]}}function U(V){if(s[V.id]===void 0)return;const Q=s[V.id];for(const ut in Q){const X=Q[ut];for(const nt in X){const q=X[nt];for(const z in q)_(q[z].object),delete q[z];delete X[nt]}}delete s[V.id]}function M(V){for(const Q in s){const ut=s[Q];for(const X in ut){const nt=ut[X];if(nt[V.id]===void 0)continue;const q=nt[V.id];for(const z in q)_(q[z].object),delete q[z];delete nt[V.id]}}}function A(V){for(const Q in s){const ut=s[Q],X=V.isInstancedMesh===!0?V.id:0,nt=ut[X];if(nt!==void 0){for(const q in nt){const z=nt[q];for(const it in z)_(z[it].object),delete z[it];delete nt[q]}delete ut[X],Object.keys(ut).length===0&&delete s[Q]}}}function H(){F(),h=!0,u!==l&&(u=l,p(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:F,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfObject:A,releaseStatesOfProgram:M,initAttributes:D,enableAttribute:E,disableUnusedAttributes:w}}function iR(o,e,i){let s;function l(m){s=m}function u(m,p){o.drawArrays(s,m,p),i.update(p,s,1)}function h(m,p,_){_!==0&&(o.drawArraysInstanced(s,m,p,_),i.update(p,s,_))}function d(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,_);let x=0;for(let S=0;S<_;S++)x+=p[S];i.update(x,s,1)}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function aR(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(M){return!(M!==Aa&&s.convert(M)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(M){const A=M===Da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Ni&&M!==ra&&!A&&s.convert(M)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function m(M){if(M==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(fe("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=i.logarithmicDepthBuffer===!0&&g===!1;i.reversedDepthBuffer===!0&&g===!1&&fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&g===!0&&fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),E=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:b,maxTextureSize:D,maxCubemapSize:E,maxAttributes:y,maxVertexUniforms:w,maxVaryings:O,maxFragmentUniforms:N,maxSamples:I,samples:U}}function sR(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new Is,d=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||s!==0||l;return l=x,s=g.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,S){const b=g.clippingPlanes,D=g.clipIntersection,E=g.clipShadows,y=o.get(g);if(!l||b===null||b.length===0||u&&!E)u?_(null):p();else{const w=u?0:s,O=w*4;let N=y.clippingState||null;m.value=N,N=_(b,x,O,S);for(let I=0;I!==O;++I)N[I]=i[I];y.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(g,x,S,b){const D=g!==null?g.length:0;let E=null;if(D!==0){if(E=m.value,b!==!0||E===null){const y=S+D*4,w=x.matrixWorldInverse;d.getNormalMatrix(w),(E===null||E.length<y)&&(E=new Float32Array(y));for(let O=0,N=S;O!==D;++O,N+=4)h.copy(g[O]).applyMatrix4(w,d),h.normal.toArray(E,N),E[N+3]=h.constant}m.value=E,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,E}}class Rm extends wa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new bS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ra(5,5,5),u=new Zi({name:"CubemapFromEquirect",uniforms:No(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:bo});u.uniforms.tEquirect.value=i;const h=new ge(l,u),d=i.minFilter;return i.minFilter===Bs&&(i.minFilter=_i),new im(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}const Cx=256,rR=3,oR=20,OS=256,PS=16,lR=3,cR=new K,uR=new _e;class Xl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new im(1,10,null),this._boxMesh=new ge(new Ra(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=cR}=u,m=this._renderer;this._setSize(h);const p=this._allocateTarget(),_=this._getSourceTarget(!0);i>0&&(_.texture.mipmapsAutoUpdate=!1);const g=m.autoClear,x=m.autoClearColor,S=m.autoClearDepth,b=m.autoClearStencil,D=e.background;m.autoClear=!0,m.autoClearColor=!0,m.autoClearDepth=!0,m.autoClearStencil=!0,D===null&&(e.background=m.getClearColor(uR));const E=new im(s,l,_);return E.position.copy(d),E.update(m,e),m.autoClear=g,m.autoClearColor=x,m.autoClearDepth=S,m.autoClearStencil=b,e.background=D,i>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(p,i)),this._applyPMREM(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,i){return i>0?1-Math.sqrt(1-e/i):0}_setSize(e){this._cubeSize=Math.max(Cx,b1(e))}_fromTexture(e,i){e.mapping===Ro||e.mapping===Bl?this._setSize(e.image.length===0?Cx:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const s=i||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(s),s}_allocateTarget(){const e=this._cubeSize,i=Dx(e,!1,!1),s=Math.log2(e)-rR;for(let l=0;l<=s;l++)i.texture.mipmaps.push({width:e>>l,height:e>>l});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(e=!1){const i=this._cubeSize,s=this._sourceTarget;return(s===null||s.width!==i||e&&s.depthBuffer===!1)&&(s!==null&&s.dispose(),this._sourceTarget=Dx(i,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,i,s){const l=this._boxMesh,u=this._cubeCamera;l.material=s,u.renderTarget=e,u.activeMipmapLevel=i;const h=e.width>>i;e.viewport.set(0,0,h,h),u.update(this._renderer,l),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let i;e.mapping===Ro||e.mapping===Bl?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lx()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Nx()),i=this._equirectMaterial),i.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=fR(),this._integrationMaterial=hR());const i=this._cubeSize,s=e.texture.mipmaps.length-1,l=this._ggxMaterial.uniforms;l.envMap.value=this._sourceTarget.texture;const u=this._integrationMaterial.uniforms;u.envMap.value=this._sourceTarget.texture,u.sourceLod.value=Math.log2(i/PS);for(let h=0;h<=s;h++){const d=Xl.lodToRoughness(h,s);if(h>s-lR)u.roughness.value=d,this._renderCube(e,h,this._integrationMaterial);else{const m=d>0?Math.log2(i)+.5*Math.log2(6/(OS*Math.pow(d,4)))+.5:0;l.roughness.value=d,l.lodBias.value=m,this._renderCube(e,h,this._ggxMaterial)}}}_blur(e,i){this._blurMaterial===null&&(this._blurMaterial=dR());const s=this._blurMaterial,l=s.uniforms,u=this._sourceTarget;l.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,l.envMap.value=u.texture,this._renderCube(e,0,s),l.envMap.value=e.texture,this._renderCube(u,0,s)}}function Dx(o,e,i){return new Rm(o,{minFilter:Bs,generateMipmaps:e,type:Da,colorSpace:Ju,depthBuffer:i})}function Wl(o,e,i){return new Zi({name:o,uniforms:e,vertexShader:Ae.cube_vert,fragmentShader:i,side:Jn,blending:bo,depthTest:!1,depthWrite:!1})}function fR(){return Wl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${OS}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function hR(){return Wl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:PS}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function dR(){return Wl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${oR}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Nx(){return Wl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Lx(){return Wl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function pR(o){let e=new WeakMap,i=new WeakMap,s=null;function l(x,S=!1){return x==null?null:S?h(x):u(x)}function u(x){if(x&&x.isTexture){const S=x.mapping;if(S===zd||S===Bd)if(e.has(x)){const b=e.get(x).texture;return d(b,x.mapping)}else{const b=x.image;if(b&&b.height>0){const D=new Rm(b.height);return D.fromEquirectangularTexture(o,x),e.set(x,D),x.addEventListener("dispose",p),d(D.texture,x.mapping)}else return null}}return x}function h(x){if(x&&x.isTexture&&x.isPMREMTexture!==!0){const S=x.mapping,b=S===zd||S===Bd,D=S===Ro||S===Bl;if(b||D){let E=i.get(x);const y=E!==void 0?E.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==y)return s===null&&(s=new Xl(o)),E=b?s.fromEquirectangular(x,E):s.fromCubemap(x,E),E.texture.pmremVersion=x.pmremVersion,i.set(x,E),E.texture;if(E!==void 0)return E.texture;{const w=x.image;return b&&w&&w.height>0||D&&w&&m(w)?(s===null&&(s=new Xl(o)),E=b?s.fromEquirectangular(x):s.fromCubemap(x),E.texture.pmremVersion=x.pmremVersion,i.set(x,E),x.addEventListener("dispose",_),E.texture):null}}}return x}function d(x,S){return S===zd?x.mapping=Ro:S===Bd&&(x.mapping=Bl),x}function m(x){let S=0;const b=6;for(let D=0;D<b;D++)x[D]!==void 0&&S++;return S===b}function p(x){const S=x.target;S.removeEventListener("dispose",p);const b=e.get(S);b!==void 0&&(e.delete(S),b.dispose())}function _(x){const S=x.target;S.removeEventListener("dispose",_);const b=i.get(S);b!==void 0&&(i.delete(S),b.dispose())}function g(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function mR(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&To("WebGLRenderer: "+s+" extension not supported."),l}}}function gR(o,e,i,s){const l={},u=new WeakMap,h=new FinalizationRegistry(b=>delete l[b]);function d(b){m(b.target)}function m(b){b.index!==null&&e.remove(b.index);for(const E in b.attributes)e.remove(b.attributes[E]);b.removeEventListener("dispose",d),delete l[b.id],h.unregister(b);const D=u.get(b);D&&(e.remove(D),u.delete(b)),s.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,i.memory.geometries--}function p(b,D){return l[D.id]!==void 0||(D.addEventListener("dispose",d),l[D.id]=new WeakRef(D),h.register(D,D.id,D),i.memory.geometries++),D}function _(b){const D=b.attributes;for(const E in D)e.update(D[E],o.ARRAY_BUFFER)}function g(b){const D=b.index,E=b.attributes.position;let y=0;if(E===void 0)return;const w=D!==null?D.array.length:E.array.length/3-1,O=E.count>=65535?MS:SS,N=new O(Math.ceil(w/3)*6,1),I=N.array;if(D!==null){const M=D.array;y=D.version;for(let A=0,H=0;A<w;A+=3){const F=M[A+0],V=M[A+1],Q=M[A+2];I[H++]=F,I[H++]=V,I[H++]=V,I[H++]=Q,I[H++]=Q,I[H++]=F}}else{y=E.version;for(let M=0,A=0;M<w;M+=3){const H=M+0,F=M+1,V=M+2;I[A++]=H,I[A++]=F,I[A++]=F,I[A++]=V,I[A++]=V,I[A++]=H}}N.version=y;const U=u.get(b);U&&e.remove(U),u.set(b,N)}function x(b){const D=u.get(b);if(D){const E=b.index;E!==null&&D.version<E.version&&g(b)}else g(b);return u.get(b)}function S(){for(const b in l){const D=l[b].deref();D!==void 0&&m(D)}}return{get:p,update:_,getWireframeAttribute:x,dispose:S}}function vR(o,e,i){let s;function l(g){s=g}let u,h;function d(g){u=g.type,h=g.bytesPerElement}function m(g,x){o.drawElements(s,x,u,g*h),i.update(x,s,1)}function p(g,x,S){S!==0&&(o.drawElementsInstanced(s,x,u,g*h,S),i.update(x,s,S))}function _(g,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,u,g,0,S);let D=0;for(let E=0;E<S;E++)D+=x[E];i.update(D,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function _R(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:We("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function xR(o,e,i){const s=new WeakMap,l=new _n;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let F=function(){A.dispose(),s.delete(d),d.removeEventListener("dispose",F)};var S=F;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,D=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let N=0;b===!0&&(N=1),D===!0&&(N=2),E===!0&&(N=3);let I=d.attributes.position.count*N,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const M=new Float32Array(I*U*4*g),A=new gS(M,I,U,g);A.type=ra,A.needsUpdate=!0;const H=N*4;for(let V=0;V<g;V++){const Q=y[V],ut=w[V],X=O[V],nt=I*U*4*V;for(let q=0;q<Q.count;q++){const z=q*H;b===!0&&(l.fromBufferAttribute(Q,q),M[nt+z+0]=l.x,M[nt+z+1]=l.y,M[nt+z+2]=l.z,M[nt+z+3]=0),D===!0&&(l.fromBufferAttribute(ut,q),M[nt+z+4]=l.x,M[nt+z+5]=l.y,M[nt+z+6]=l.z,M[nt+z+7]=0),E===!0&&(l.fromBufferAttribute(X,q),M[nt+z+8]=l.x,M[nt+z+9]=l.y,M[nt+z+10]=l.z,M[nt+z+11]=X.itemSize===4?l.w:1)}}x={count:g,texture:A,size:new Me(I,U)},s.set(d,x),d.addEventListener("dispose",F)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let E=0;E<p.length;E++)b+=p[E];const D=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",D),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function SR(o,e,i,s,l){let u=new WeakMap;function h(p){const _=l.render.frame,g=p.geometry,x=e.get(p,g);if(u.get(x)!==_&&(e.update(x),u.set(x,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),u.get(p)!==_&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),u.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;u.get(S)!==_&&(S.update(),u.set(S,_))}return x}function d(){u=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:d}}const MR={[$x]:"LINEAR_TONE_MAPPING",[tS]:"REINHARD_TONE_MAPPING",[eS]:"CINEON_TONE_MAPPING",[lm]:"ACES_FILMIC_TONE_MAPPING",[iS]:"AGX_TONE_MAPPING",[aS]:"NEUTRAL_TONE_MAPPING",[nS]:"CUSTOM_TONE_MAPPING"};function yR(o,e,i,s,l,u){const h=new wa(e,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,m=null,p=null;const _=new Tn;_.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new nn([0,2,0,0,2,0],2));const g=new rb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new ge(_,g),S=new NS(-1,1,1,-1,0,1);let b=null,D=null,E=!1,y,w=null,O=[],N=!1;this.setSize=function(I,U){h.setSize(I,U),d!==null&&d.setSize(I,U),m!==null&&m.setSize(I,U);for(let M=0;M<O.length;M++){const A=O[M];A.setSize&&A.setSize(I,U)}},this.setEffects=function(I){O=I,N=O.length>0&&O[0].isRenderPass===!0;const U=h.width,M=h.height;O.length>0&&d===null&&(d=new wa(U,M,{type:Da,depthBuffer:!1,stencilBuffer:!1}),m=new wa(U,M,{type:Da,depthBuffer:!1,stencilBuffer:!1}));const A=l===!0&&O.some(H=>H.needsDepthTexture===!0);A!==(h.depthTexture!==null)&&(A===!0&&p===null&&(p=new Co(U,M),u===!0&&(p.format=Fs,p.type=wo)),h.dispose(),h.depthTexture=A?p:null,h.resolveDepthBuffer=A,h.storeMultisampledDepthBuffer=A);for(let H=0;H<O.length;H++){const F=O[H];F.setSize&&F.setSize(U,M),A&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(p)}},this.begin=function(I,U){if(E||I.toneMapping===$a&&O.length===0)return!1;if(w=U,U!==null){const M=U.width,A=U.height;(h.width!==M||h.height!==A)&&this.setSize(M,A)}return N===!1&&I.setRenderTarget(h),y=I.toneMapping,I.toneMapping=$a,!0},this.hasRenderPass=function(){return N},this.end=function(I,U){I.toneMapping=y,E=!0;let M=h,A=d;for(let H=0;H<O.length;H++){const F=O[H];F.enabled!==!1&&(F.render(I,A,M,U),F.needsSwap!==!1&&(M=A,A=A===d?m:d))}if(b!==I.outputColorSpace||D!==I.toneMapping){b=I.outputColorSpace,D=I.toneMapping,g.defines={},ze.getTransfer(b)===tn&&(g.defines.SRGB_TRANSFER="");const H=MR[D];H&&(g.defines[H]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=M.texture,I.setRenderTarget(w),I.render(x,S),w=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){h.dispose(),d!==null&&d.dispose(),m!==null&&m.dispose(),_.dispose(),g.dispose()}}const IS=new ni,zS=new Co(1,1),BS=new TS(1),FS=new gS,HS=new L1,GS=new bS,Ux=[],Ox=[],Px=new Float32Array(16),Ix=new Float32Array(9),zx=new Float32Array(4);function Uo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=Ux[l];if(u===void 0&&(u=new Float32Array(l),Ux[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function On(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Pn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function sf(o,e){let i=Ox[e];i===void 0&&(i=new Int32Array(e),Ox[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function ER(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function bR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;o.uniform2fv(this.addr,e),Pn(i,e)}}function TR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(On(i,e))return;o.uniform3fv(this.addr,e),Pn(i,e)}}function AR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;o.uniform4fv(this.addr,e),Pn(i,e)}}function RR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;zx.set(s),o.uniformMatrix2fv(this.addr,!1,zx),Pn(i,s)}}function wR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;Ix.set(s),o.uniformMatrix3fv(this.addr,!1,Ix),Pn(i,s)}}function CR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;Px.set(s),o.uniformMatrix4fv(this.addr,!1,Px),Pn(i,s)}}function DR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function NR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;o.uniform2iv(this.addr,e),Pn(i,e)}}function LR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;o.uniform3iv(this.addr,e),Pn(i,e)}}function UR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;o.uniform4iv(this.addr,e),Pn(i,e)}}function OR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function PR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;o.uniform2uiv(this.addr,e),Pn(i,e)}}function IR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;o.uniform3uiv(this.addr,e),Pn(i,e)}}function zR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;o.uniform4uiv(this.addr,e),Pn(i,e)}}function rf(o){return o.version===0&&(o.compareFunction=pS,o.needsUpdate=!0),o}function BR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?u=rf(zS):u=IS,i.setTexture2D(e||u,l)}function FR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||HS,l)}function HR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_CUBE_SHADOW?u=rf(BS):u=GS,i.setTextureCube(e||u,l)}function GR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||FS,l)}function VR(o){switch(o){case 5126:return ER;case 35664:return bR;case 35665:return TR;case 35666:return AR;case 35674:return RR;case 35675:return wR;case 35676:return CR;case 5124:case 35670:return DR;case 35667:case 35671:return NR;case 35668:case 35672:return LR;case 35669:case 35673:return UR;case 5125:return OR;case 36294:return PR;case 36295:return IR;case 36296:return zR;case 35678:case 36198:case 36298:case 36306:case 35682:return BR;case 35679:case 36299:case 36307:return FR;case 35680:case 36300:case 36308:case 36293:return HR;case 36289:case 36303:case 36311:case 36292:return GR}}function XR(o,e){o.uniform1fv(this.addr,e)}function kR(o,e){const i=Uo(e,this.size,2);o.uniform2fv(this.addr,i)}function WR(o,e){const i=Uo(e,this.size,3);o.uniform3fv(this.addr,i)}function qR(o,e){const i=Uo(e,this.size,4);o.uniform4fv(this.addr,i)}function YR(o,e){const i=Uo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ZR(o,e){const i=Uo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function KR(o,e){const i=Uo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function QR(o,e){o.uniform1iv(this.addr,e)}function jR(o,e){o.uniform2iv(this.addr,e)}function JR(o,e){o.uniform3iv(this.addr,e)}function $R(o,e){o.uniform4iv(this.addr,e)}function tw(o,e){o.uniform1uiv(this.addr,e)}function ew(o,e){o.uniform2uiv(this.addr,e)}function nw(o,e){o.uniform3uiv(this.addr,e)}function iw(o,e){o.uniform4uiv(this.addr,e)}function aw(o,e,i){const s=this.cache,l=e.length,u=sf(i,l);On(s,u)||(o.uniform1iv(this.addr,u),Pn(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=rf(zS):h=IS;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,u[d])}function sw(o,e,i){const s=this.cache,l=e.length,u=sf(i,l);On(s,u)||(o.uniform1iv(this.addr,u),Pn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||HS,u[h])}function rw(o,e,i){const s=this.cache,l=e.length,u=sf(i,l);On(s,u)||(o.uniform1iv(this.addr,u),Pn(s,u));let h;this.type===o.SAMPLER_CUBE_SHADOW?h=rf(BS):h=GS;for(let d=0;d!==l;++d)i.setTextureCube(e[d]||h,u[d])}function ow(o,e,i){const s=this.cache,l=e.length,u=sf(i,l);On(s,u)||(o.uniform1iv(this.addr,u),Pn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||FS,u[h])}function lw(o){switch(o){case 5126:return XR;case 35664:return kR;case 35665:return WR;case 35666:return qR;case 35674:return YR;case 35675:return ZR;case 35676:return KR;case 5124:case 35670:return QR;case 35667:case 35671:return jR;case 35668:case 35672:return JR;case 35669:case 35673:return $R;case 5125:return tw;case 36294:return ew;case 36295:return nw;case 36296:return iw;case 35678:case 36198:case 36298:case 36306:case 35682:return aw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return ow}}class cw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=VR(i.type)}}class uw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lw(i.type)}}class fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const dp=/(\w+)(\])?(\[|\.)?/g;function Bx(o,e){o.seq.push(e),o.map[e.id]=e}function hw(o,e,i){const s=o.name,l=s.length;for(dp.lastIndex=0;;){const u=dp.exec(s),h=dp.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Bx(i,p===void 0?new cw(d,o,e):new uw(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new fw(d),Bx(i,g)),i=g}}}class Zu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);hw(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function Fx(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const dw=37297;let pw=0;function mw(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Hx=new xe;function gw(o){ze._getMatrix(Hx,ze.workingColorSpace,o);const e=`mat3( ${Hx.elements.map(i=>i.toFixed(4))} )`;switch(ze.getTransfer(o)){case $u:return[e,"LinearTransferOETF"];case tn:return[e,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Gx(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+mw(o.getShaderSource(e),d)}else return u}function vw(o,e){const i=gw(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const _w={[$x]:"Linear",[tS]:"Reinhard",[eS]:"Cineon",[lm]:"ACESFilmic",[iS]:"AgX",[aS]:"Neutral",[nS]:"Custom"};function xw(o,e){const i=_w[e];return i===void 0?(fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gu=new K;function Sw(){ze.getLuminanceCoefficients(Gu);const o=Gu.x.toFixed(4),e=Gu.y.toFixed(4),i=Gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ol).join(`
`)}function yw(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Ew(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ol(o){return o!==""}function Vx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Xx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function am(o){return o.replace(bw,Tw)}function Tw(o,e){const i=Ae[e];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return am(i)}const Aw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kx(o){return o.replace(Aw,Rw)}function Rw(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Wx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ww={[Vu]:"SHADOWMAP_TYPE_PCF",[Ul]:"SHADOWMAP_TYPE_VSM"};function Cw(o){return ww[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Dw={[Bl]:"ENVMAP_MODE_REFRACTION"};function Nw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Dw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Lw={[om]:"ENVMAP_BLENDING_MULTIPLY",[o1]:"ENVMAP_BLENDING_MIX",[l1]:"ENVMAP_BLENDING_ADD"};function Uw(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Lw[o.combine]||"ENVMAP_BLENDING_NONE"}function Ow(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Cw(i),p=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=Nw(i),g=Uw(i),x=Mw(i),S=yw(u),b=l.createProgram();let D,E,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(D=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(Ol).join(`
`),D.length>0&&(D+=`
`),E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(Ol).join(`
`),E.length>0&&(E+=`
`)):(D=[Wx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ol).join(`
`),E=[Wx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==$a?"#define TONE_MAPPING":"",i.toneMapping!==$a?Ae.tonemapping_pars_fragment:"",i.toneMapping!==$a?xw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,vw("linearToOutputTexel",i.outputColorSpace),Sw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ol).join(`
`)),h=am(h),h=Vx(h,i),h=Xx(h,i),d=am(d),d=Vx(d,i),d=Xx(d,i),h=kx(h),d=kx(d),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,D=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+D,E=["#define varying in",i.glslVersion===Z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const w=y+D+h,O=y+E+d,N=Fx(l,l.VERTEX_SHADER,w),I=Fx(l,l.FRAGMENT_SHADER,O);l.attachShader(b,N),l.attachShader(b,I),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function U(F){if(o.debug.checkShaderErrors){const V=l.getProgramInfoLog(b)||"",Q=l.getShaderInfoLog(N)||"",ut=l.getShaderInfoLog(I)||"",X=V.trim(),nt=Q.trim(),q=ut.trim();let z=!0,it=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,N,I);else{const tt=Gx(l,N,"vertex"),lt=Gx(l,I,"fragment");We("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+tt+`
`+lt)}else X!==""?fe("WebGLProgram: Program Info Log:",X):(nt===""||q==="")&&(it=!1);it&&(F.diagnostics={runnable:z,programLog:X,vertexShader:{log:nt,prefix:D},fragmentShader:{log:q,prefix:E}})}l.deleteShader(N),l.deleteShader(I),M=new Zu(l,b),A=Ew(l,b)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let H=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=l.getProgramParameter(b,dw)),H},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=I,this}let Pw=0;class Iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new zw(e),i.set(e,s)),s}}class zw{constructor(e){this.id=Pw++,this.code=e,this.usedTimes=0}}function Bw(o){return o===_r||o===Ku||o===Qu}function Fw(o,e,i,s,l,u){const h=new vS,d=new Iw,m=new Set,p=[],_=new Map,g=s.logarithmicDepthBuffer,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return m.add(M),M===0?"uv":`uv${M}`}function b(M,A,H,F,V,Q){const ut=F.fog,X=V.geometry,nt=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,q=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,z=e.get(M.envMap||nt,q),it=x[M.type];let tt=s.precision;M.precision!==null&&(tt=s.getMaxPrecision(M.precision),tt!==M.precision&&fe("WebGLProgram.getParameters:",M.precision,"not supported, using",tt,"instead."));const lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gt=lt!==void 0?lt.length:0;let kt=0;X.morphAttributes.position!==void 0&&(kt=1),X.morphAttributes.normal!==void 0&&(kt=2),X.morphAttributes.color!==void 0&&(kt=3);let ae,L,et,Mt;if(it){const Gt=Ta[it];ae=Gt.vertexShader,L=Gt.fragmentShader}else{ae=M.vertexShader,L=M.fragmentShader;const Gt=d.getVertexShaderStage(M),De=d.getFragmentShaderStage(M);d.update(M,Gt,De),et=Gt.id,Mt=De.id}const At=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),Ht=V.isInstancedMesh===!0,se=V.isBatchedMesh===!0,Tt=!!M.map,Xt=!!M.matcap,Te=!!z,Se=Te&&z.isPMREMTexture===!0,Ye=!!M.aoMap,Fe=!!M.lightMap,Pe=!!M.bumpMap&&M.wireframe===!1,re=!!M.normalMap,Ze=!!M.displacementMap,an=!!M.emissiveMap,hn=!!M.metalnessMap,yn=!!M.roughnessMap,xn=M.anisotropy>0,Z=M.clearcoat>0,In=M.diffuseRoughness>0,He=M.dispersion>0,Ve=M.retroreflectivity>0,Dt=M.iridescence>0,Xe=M.sheen>0,Jt=M.transmission>0,oe=xn&&!!M.anisotropyMap,P=Z&&!!M.clearcoatMap,T=Z&&!!M.clearcoatNormalMap,at=Z&&!!M.clearcoatRoughnessMap,Ct=In&&!!M.diffuseRoughnessMap,xt=Dt&&!!M.iridescenceMap,It=Dt&&!!M.iridescenceThicknessMap,Ft=Xe&&!!M.sheenColorMap,ht=Xe&&!!M.sheenRoughnessMap,vt=!!M.specularMap,Lt=!!M.specularColorMap,G=!!M.specularIntensityMap,mt=Jt&&!!M.transmissionMap,pt=Jt&&!!M.thicknessMap,zt=!!M.gradientMap,Nt=!!M.alphaMap,Pt=M.alphaTest>0,Yt=!!M.alphaHash,ne=!!M.extensions;let wt=$a;M.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(wt=o.toneMapping);const Qt=Se?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,he={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:ae,fragmentShader:L,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:Mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:tt,batching:se,batchingColor:se&&V._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&V.instanceColor!==null,instancingMorph:Ht&&V.morphTexture!==null,outputColorSpace:At===null?o.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Tt,matcap:Xt,envMap:Te,envMapMode:Te&&z.mapping,envMapPMREM:Se,envMapMaxLod:Se?Qt.length-1:null,envMapSize:Se?Qt[0].width:null,aoMap:Ye,lightMap:Fe,bumpMap:Pe,normalMap:re,displacementMap:Ze,emissiveMap:an,normalMapObjectSpace:re&&M.normalMapType===f1,normalMapTangentSpace:re&&M.normalMapType===ju,packedNormalMap:re&&M.normalMapType===ju&&Bw(M.normalMap.format),metalnessMap:hn,roughnessMap:yn,anisotropy:xn,anisotropyMap:oe,clearcoat:Z,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:at,diffuseRoughness:In,diffuseRoughnessMap:Ct,dispersion:He,retroreflection:Ve,iridescence:Dt,iridescenceMap:xt,iridescenceThicknessMap:It,sheen:Xe,sheenColorMap:Ft,sheenRoughnessMap:ht,specularMap:vt,specularColorMap:Lt,specularIntensityMap:G,transmission:Jt,transmissionMap:mt,thicknessMap:pt,gradientMap:zt,opaque:M.transparent===!1&&M.blending===Pl&&M.alphaToCoverage===!1,alphaMap:Nt,alphaTest:Pt,alphaHash:Yt,combine:M.combine,mapUv:Tt&&S(M.map.channel),aoMapUv:Ye&&S(M.aoMap.channel),lightMapUv:Fe&&S(M.lightMap.channel),bumpMapUv:Pe&&S(M.bumpMap.channel),normalMapUv:re&&S(M.normalMap.channel),displacementMapUv:Ze&&S(M.displacementMap.channel),emissiveMapUv:an&&S(M.emissiveMap.channel),metalnessMapUv:hn&&S(M.metalnessMap.channel),roughnessMapUv:yn&&S(M.roughnessMap.channel),anisotropyMapUv:oe&&S(M.anisotropyMap.channel),clearcoatMapUv:P&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:T&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&S(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ct&&S(M.diffuseRoughnessMap.channel),iridescenceMapUv:xt&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:It&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:ht&&S(M.sheenRoughnessMap.channel),specularMapUv:vt&&S(M.specularMap.channel),specularColorMapUv:Lt&&S(M.specularColorMap.channel),specularIntensityMapUv:G&&S(M.specularIntensityMap.channel),transmissionMapUv:mt&&S(M.transmissionMap.channel),thicknessMapUv:pt&&S(M.thicknessMap.channel),alphaMapUv:Nt&&S(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(re||xn),vertexNormals:!!X.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(Tt||Nt),fog:!!ut,useFog:M.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||X.attributes.normal===void 0&&re===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Rt,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:kt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Q.filter(Gt=>Gt.texture!==null).length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:wt,decodeVideoTexture:Tt&&M.map.isVideoTexture===!0&&ze.getTransfer(M.map.colorSpace)===tn,decodeVideoTextureEmissive:an&&M.emissiveMap.isVideoTexture===!0&&ze.getTransfer(M.emissiveMap.colorSpace)===tn,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qi,flipSided:M.side===Jn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ne&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&M.extensions.multiDraw===!0||se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return he.vertexUv1s=m.has(1),he.vertexUv2s=m.has(2),he.vertexUv3s=m.has(3),m.clear(),he}function D(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const H in M.defines)A.push(H),A.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(E(A,M),y(A,M),A.push(o.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function E(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapPMREM),M.push(A.envMapMaxLod),M.push(A.envMapSize),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.diffuseRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.numSunLights),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numSunLightShadows),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.numLightProbeGrids),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function y(M,A){h.disableAll(),A.instancing&&h.enable(0),A.instancingColor&&h.enable(1),A.instancingMorph&&h.enable(2),A.matcap&&h.enable(3),A.envMap&&h.enable(4),A.normalMapObjectSpace&&h.enable(5),A.normalMapTangentSpace&&h.enable(6),A.clearcoat&&h.enable(7),A.iridescence&&h.enable(8),A.alphaTest&&h.enable(9),A.vertexColors&&h.enable(10),A.vertexAlphas&&h.enable(11),A.vertexUv1s&&h.enable(12),A.vertexUv2s&&h.enable(13),A.vertexUv3s&&h.enable(14),A.vertexTangents&&h.enable(15),A.anisotropy&&h.enable(16),A.alphaHash&&h.enable(17),A.batching&&h.enable(18),A.dispersion&&h.enable(19),A.retroreflection&&h.enable(24),A.diffuseRoughness&&h.enable(25),A.batchingColor&&h.enable(20),A.gradientMap&&h.enable(21),A.packedNormalMap&&h.enable(22),A.vertexNormals&&h.enable(23),M.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reversedDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),A.numLightProbeGrids>0&&h.enable(22),A.hasPositionAttribute&&h.enable(23),M.push(h.mask)}function w(M){const A=x[M.type];let H;if(A){const F=Ta[A];H=ib.clone(F.uniforms)}else H=M.uniforms;return H}function O(M,A){let H=_.get(A);return H!==void 0?++H.usedTimes:(H=new Ow(o,A,M,l),p.push(H),_.set(A,H)),H}function N(M){if(--M.usedTimes===0){const A=p.indexOf(M);p[A]=p[p.length-1],p.pop(),_.delete(M.cacheKey),M.destroy()}}function I(M){d.remove(M)}function U(){d.dispose()}return{getParameters:b,getProgramCacheKey:D,getUniforms:w,acquireProgram:O,releaseProgram:N,releaseShaderCache:I,programs:p,dispose:U}}function Hw(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function Gw(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function qx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Yx(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(x){let S=0;return x.isInstancedMesh&&(S+=2),x.isSkinnedMesh&&(S+=1),S}function d(x,S,b,D,E,y){let w=o[e];return w===void 0?(w={id:x.id,object:x,geometry:S,material:b,materialVariant:h(x),groupOrder:D,renderOrder:x.renderOrder,z:E,group:y},o[e]=w):(w.id=x.id,w.object=x,w.geometry=S,w.material=b,w.materialVariant=h(x),w.groupOrder=D,w.renderOrder=x.renderOrder,w.z=E,w.group=y),e++,w}function m(x,S,b,D,E,y,w){w.reversedDepth===!0&&(E=-E);const O=d(x,S,b,D,E,y);b.transmission>0?s.push(O):b.transparent===!0?l.push(O):i.push(O)}function p(x,S,b,D,E,y){const w=d(x,S,b,D,E,y);b.transmission>0?s.unshift(w):b.transparent===!0?l.unshift(w):i.unshift(w)}function _(x,S){i.length>1&&i.sort(x||Gw),s.length>1&&s.sort(S||qx),l.length>1&&l.sort(S||qx)}function g(){for(let x=e,S=o.length;x<S;x++){const b=o[x];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:p,finish:g,sort:_}}function Vw(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new Yx,o.set(s,[h])):l>=u.length?(h=new Yx,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Xw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new K,color:new _e};break;case"SpotLight":i={position:new K,direction:new K,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new _e,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":i={color:new _e,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=i,i}}}function kw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Ww=0;function qw(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Yw(o){const e=new Xw,i=kw(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,u=new en,h=new en;function d(p){let _=0,g=0,x=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let S=0,b=0,D=0,E=0,y=0,w=0,O=0,N=0,I=0,U=0,M=0,A=0,H=0,F=0;p.sort(qw);for(let Q=0,ut=p.length;Q<ut;Q++){const X=p[Q],nt=X.color,q=X.intensity,z=X.distance;let it=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===_r?it=X.shadow.map.texture:it=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)_+=nt.r*q,g+=nt.g*q,x+=nt.b*q;else if(X.isLightProbe){for(let tt=0;tt<9;tt++)s.probe[tt].addScaledVector(X.sh.coefficients[tt],q);F++}else if(X.isSunLight){const tt=e.get(X);if(tt.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const lt=X.shadow,gt=i.get(X);gt.shadowIntensity=lt.intensity,gt.shadowBias=lt.bias,gt.shadowNormalBias=lt.normalBias,gt.shadowRadius=lt.radius,gt.shadowMapSize.copy(lt.mapSize).multiply(lt.getFrameExtents()),s.sunShadow[b]=gt,s.sunShadowMap[b]=it;const kt=lt.getViewportCount();for(let ae=0;ae<kt;ae++)s.sunShadowMatrix[D+ae]=lt.getMatrix(ae),s.sunShadowCascade[D+ae]=lt._cascadeData[ae];D+=kt,b++}s.sun[S]=tt,S++}else if(X.isDirectionalLight){const tt=e.get(X);if(tt.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const lt=X.shadow,gt=i.get(X);gt.shadowIntensity=lt.intensity,gt.shadowBias=lt.bias,gt.shadowNormalBias=lt.normalBias,gt.shadowRadius=lt.radius,gt.shadowMapSize=lt.mapSize,s.directionalShadow[E]=gt,s.directionalShadowMap[E]=it,s.directionalShadowMatrix[E]=X.shadow.matrix,I++}s.directional[E]=tt,E++}else if(X.isSpotLight){const tt=e.get(X);tt.position.setFromMatrixPosition(X.matrixWorld),tt.color.copy(nt).multiplyScalar(q),tt.distance=z,tt.coneCos=Math.cos(X.angle),tt.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),tt.decay=X.decay,s.spot[w]=tt;const lt=X.shadow;if(X.map&&(s.spotLightMap[A]=X.map,A++,lt.updateMatrices(X),X.castShadow&&H++),s.spotLightMatrix[w]=lt.matrix,X.castShadow){const gt=i.get(X);gt.shadowIntensity=lt.intensity,gt.shadowBias=lt.bias,gt.shadowNormalBias=lt.normalBias,gt.shadowRadius=lt.radius,gt.shadowMapSize=lt.mapSize,s.spotShadow[w]=gt,s.spotShadowMap[w]=it,M++}w++}else if(X.isRectAreaLight){const tt=e.get(X);tt.color.copy(nt).multiplyScalar(q),tt.halfWidth.set(X.width*.5,0,0),tt.halfHeight.set(0,X.height*.5,0),s.rectArea[O]=tt,O++}else if(X.isPointLight){const tt=e.get(X);if(tt.color.copy(X.color).multiplyScalar(X.intensity),tt.distance=X.distance,tt.decay=X.decay,X.castShadow){const lt=X.shadow,gt=i.get(X);gt.shadowIntensity=lt.intensity,gt.shadowBias=lt.bias,gt.shadowNormalBias=lt.normalBias,gt.shadowRadius=lt.radius,gt.shadowMapSize=lt.mapSize,gt.shadowCameraNear=lt.camera.near,gt.shadowCameraFar=lt.camera.far,s.pointShadow[y]=gt,s.pointShadowMap[y]=it,s.pointShadowMatrix[y]=X.shadow.matrix,U++}s.point[y]=tt,y++}else if(X.isHemisphereLight){const tt=e.get(X);tt.skyColor.copy(X.color).multiplyScalar(q),tt.groundColor.copy(X.groundColor).multiplyScalar(q),s.hemi[N]=tt,N++}}O>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Wt.LTC_FLOAT_1,s.rectAreaLTC2=Wt.LTC_FLOAT_2):(s.rectAreaLTC1=Wt.LTC_HALF_1,s.rectAreaLTC2=Wt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=x;const V=s.hash;(V.sunLength!==S||V.directionalLength!==E||V.pointLength!==y||V.spotLength!==w||V.rectAreaLength!==O||V.hemiLength!==N||V.numSunShadows!==b||V.numDirectionalShadows!==I||V.numPointShadows!==U||V.numSpotShadows!==M||V.numSpotMaps!==A||V.numLightProbes!==F)&&(s.sun.length=S,s.directional.length=E,s.spot.length=w,s.rectArea.length=O,s.point.length=y,s.hemi.length=N,s.sunShadow.length=b,s.sunShadowMap.length=b,s.sunShadowMatrix.length=D,s.sunShadowCascade.length=D,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.directionalShadowMatrix.length=I,s.pointShadow.length=U,s.pointShadowMap.length=U,s.pointShadowMatrix.length=U,s.spotShadow.length=M,s.spotShadowMap.length=M,s.spotLightMatrix.length=M+A-H,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=F,V.sunLength=S,V.directionalLength=E,V.pointLength=y,V.spotLength=w,V.rectAreaLength=O,V.hemiLength=N,V.numSunShadows=b,V.numDirectionalShadows=I,V.numPointShadows=U,V.numSpotShadows=M,V.numSpotMaps=A,V.numLightProbes=F,s.version=Ww++)}function m(p,_){let g=0,x=0,S=0,b=0,D=0,E=0;const y=_.matrixWorldInverse;for(let w=0,O=p.length;w<O;w++){const N=p[w];if(N.isSunLight){const I=s.sun[g];I.direction.setFromMatrixPosition(N.matrixWorld),I.direction.transformDirection(y),g++}else if(N.isDirectionalLight){const I=s.directional[x];I.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),x++}else if(N.isSpotLight){const I=s.spot[b];I.position.setFromMatrixPosition(N.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),b++}else if(N.isRectAreaLight){const I=s.rectArea[D];I.position.setFromMatrixPosition(N.matrixWorld),I.position.applyMatrix4(y),h.identity(),u.copy(N.matrixWorld),u.premultiply(y),h.extractRotation(u),I.halfWidth.set(N.width*.5,0,0),I.halfHeight.set(0,N.height*.5,0),I.halfWidth.applyMatrix4(h),I.halfHeight.applyMatrix4(h),D++}else if(N.isPointLight){const I=s.point[S];I.position.setFromMatrixPosition(N.matrixWorld),I.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const I=s.hemi[E];I.direction.setFromMatrixPosition(N.matrixWorld),I.direction.transformDirection(y),E++}}}return{setup:d,setupView:m,state:s}}function Zx(o){const e=new Yw(o),i=[],s=[],l=[];function u(g){_.camera=g,i.length=0,s.length=0,l.length=0}function h(g){g.isLightProbeGrid?l.push(g):i.push(g)}function d(g){s.push(g)}function m(){e.setup(i),l.sort((g,x)=>g.priority-x.priority||g.id-x.id)}function p(g){e.setupView(i,g)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:_,setupLights:m,setupLightsView:p,pushLight:h,pushShadow:d}}function Zw(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new Zx(o),e.set(l,[d])):u>=h.length?(d=new Zx(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const Kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jw=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Jw=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Kx=new en,Nl=new K,pp=new K;function $w(o,e,i){let s=new Vl;const l=new Me,u=new Me,h=new _n,d=new ob,m=new lb,p={},_=i.maxTextureSize,g={[Hs]:Jn,[Jn]:Hs,[qi]:qi},x=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Kw,fragmentShader:Qw}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const b=new Tn;b.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new ge(b,x),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vu;let y=this.type;this.render=function(U,M,A){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||U.length===0)return;this.type===VE&&(fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vu);const H=o.getRenderTarget(),F=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(bo),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ut=y!==this.type;ut&&M.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(nt=>nt.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,nt=U.length;X<nt;X++){const q=U[X],z=q.shadow;if(z===void 0){fe("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const it=z.getFrameExtents();l.multiply(it),u.copy(z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/it.x),l.x=u.x*it.x,z.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/it.y),l.y=u.y*it.y,z.mapSize.y=u.y));const tt=o.state.buffers.depth.getReversed();if(z.camera._reversedDepth=tt,z.map===null||ut===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ul){if(q.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new wa(l.x,l.y,{format:_r,type:Da,minFilter:_i,magFilter:_i,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new Co(l.x,l.y,ra),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=Gs,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=jn,z.map.depthTexture.magFilter=jn}else q.isPointLight?(z.map=new Rm(l.x),z.map.depthTexture=new TS(l.x,Ca)):(z.map=new wa(l.x,l.y),z.map.depthTexture=new Co(l.x,l.y,Ca)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=Gs,this.type===Vu?(z.map.depthTexture.compareFunction=tt?dS:hS,z.map.depthTexture.minFilter=_i,z.map.depthTexture.magFilter=_i):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=jn,z.map.depthTexture.magFilter=jn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==l.x||z.map.height!==l.y)&&z.map.setSize(l.x,l.y);const lt=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,A);const gt=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:A.layers;for(let kt=0;kt<lt;kt++){const ae=z.getCamera(kt);if(q.isPointLight){const L=z.camera,et=z.matrix,Mt=q.distance||L.far;Mt!==L.far&&(L.far=Mt,L.updateProjectionMatrix()),Nl.setFromMatrixPosition(q.matrixWorld),L.position.copy(Nl),pp.copy(L.position),pp.add(jw[kt]),L.up.copy(Jw[kt]),L.lookAt(pp),L.updateMatrixWorld(),et.makeTranslation(-Nl.x,-Nl.y,-Nl.z),Kx.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Kx,L.coordinateSystem,L.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)o.setRenderTarget(z.map,kt),o.clear();else{kt===0&&(o.setRenderTarget(z.map),o.clear());const L=z.getViewport(kt);h.set(u.x*L.x,u.y*L.y,u.x*L.z,u.y*L.w),Q.viewport(h)}s=z.getFrustum(kt),N(M,A,ae,q,gt,this.type)}z.isPointLightShadow!==!0&&this.type===Ul&&w(z,A),z.needsUpdate=!1}y=this.type,E.needsUpdate=!1,o.setRenderTarget(H,F,V)};function w(U,M){const A=e.update(D);x.defines.VSM_SAMPLES!==U.blurSamples&&(x.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null?U.mapPass=new wa(l.x,l.y,{format:_r,type:Da}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),x.uniforms.shadow_pass.value=U.map.depthTexture,x.uniforms.resolution.value.set(U.map.width,U.map.height),x.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(M,null,A,x,D,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value.set(U.map.width,U.map.height),S.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(M,null,A,S,D,null)}function O(U,M,A,H){let F=null;const V=A.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)F=V;else if(F=A.isPointLight===!0?m:d,o.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const Q=F.uuid,ut=M.uuid;let X=p[Q];X===void 0&&(X={},p[Q]=X);let nt=X[ut];nt===void 0&&(nt=F.clone(),X[ut]=nt,M.addEventListener("dispose",I)),F=nt}if(F.visible=M.visible,F.wireframe=M.wireframe,H===Ul?F.side=M.shadowSide!==null?M.shadowSide:M.side:F.side=M.shadowSide!==null?M.shadowSide:g[M.side],F.alphaMap=M.alphaMap,F.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,F.map=M.map,F.clipShadows=M.clipShadows,F.clippingPlanes=M.clippingPlanes,F.clipIntersection=M.clipIntersection,F.displacementMap=M.displacementMap,F.displacementScale=M.displacementScale,F.displacementBias=M.displacementBias,F.wireframeLinewidth=M.wireframeLinewidth,F.linewidth=M.linewidth,A.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const Q=o.properties.get(F);Q.light=A}return F}function N(U,M,A,H,F,V){if(U.visible===!1)return;if(U.layers.test(F)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&V===Ul)&&(!U.frustumCulled||U.intersectsFrustum(s))){U.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,U.matrixWorld);const X=e.update(U),nt=U.material;if(Array.isArray(nt)){const q=X.groups;for(let z=0,it=q.length;z<it;z++){const tt=q[z],lt=nt[tt.materialIndex];if(lt&&lt.visible){const gt=O(U,lt,H,V);U.onBeforeShadow(o,U,M,A,X,gt,tt),o.renderBufferDirect(A,null,X,gt,U,tt),U.onAfterShadow(o,U,M,A,X,gt,tt)}}}else if(nt.visible){const q=O(U,nt,H,V);U.onBeforeShadow(o,U,M,A,X,q,null),o.renderBufferDirect(A,null,X,q,U,null),U.onAfterShadow(o,U,M,A,X,q,null)}}const ut=U.children;for(let X=0,nt=ut.length;X<nt;X++)N(ut[X],M,A,H,F,V)}function I(U){U.target.removeEventListener("dispose",I);for(const A in p){const H=p[A],F=U.target.uuid;F in H&&(H[F].dispose(),delete H[F])}}}function t3(o,e){function i(){let G=!1;const mt=new _n;let pt=null;const zt=new _n(0,0,0,0);return{setMask:function(Nt){pt!==Nt&&!G&&(o.colorMask(Nt,Nt,Nt,Nt),pt=Nt)},setLocked:function(Nt){G=Nt},setClear:function(Nt,Pt,Yt,ne,wt){wt===!0&&(Nt*=ne,Pt*=ne,Yt*=ne),mt.set(Nt,Pt,Yt,ne),zt.equals(mt)===!1&&(o.clearColor(Nt,Pt,Yt,ne),zt.copy(mt))},reset:function(){G=!1,pt=null,zt.set(-1,0,0,0)}}}function s(){let G=!1,mt=!1,pt=null,zt=null,Nt=null;return{setReversed:function(Pt){if(mt!==Pt){const Yt=e.get("EXT_clip_control");Pt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),mt=Pt;const ne=Nt;Nt=null,this.setClear(ne)}},getReversed:function(){return mt},setTest:function(Pt){Pt?Rt(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(Pt){pt!==Pt&&!G&&(o.depthMask(Pt),pt=Pt)},setFunc:function(Pt){if(mt&&(Pt=y1[Pt]),zt!==Pt){switch(Pt){case mp:o.depthFunc(o.NEVER);break;case gp:o.depthFunc(o.ALWAYS);break;case vp:o.depthFunc(o.LESS);break;case zl:o.depthFunc(o.LEQUAL);break;case _p:o.depthFunc(o.EQUAL);break;case xp:o.depthFunc(o.GEQUAL);break;case Sp:o.depthFunc(o.GREATER);break;case Mp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=Pt}},setLocked:function(Pt){G=Pt},setClear:function(Pt){Nt!==Pt&&(Nt=Pt,mt&&(Pt=1-Pt),o.clearDepth(Pt))},reset:function(){G=!1,pt=null,zt=null,Nt=null,mt=!1}}}function l(){let G=!1,mt=null,pt=null,zt=null,Nt=null,Pt=null,Yt=null,ne=null,wt=null;return{setTest:function(Qt){G||(Qt?Rt(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(Qt){mt!==Qt&&!G&&(o.stencilMask(Qt),mt=Qt)},setFunc:function(Qt,he,Gt){(pt!==Qt||zt!==he||Nt!==Gt)&&(o.stencilFunc(Qt,he,Gt),pt=Qt,zt=he,Nt=Gt)},setOp:function(Qt,he,Gt){(Pt!==Qt||Yt!==he||ne!==Gt)&&(o.stencilOp(Qt,he,Gt),Pt=Qt,Yt=he,ne=Gt)},setLocked:function(Qt){G=Qt},setClear:function(Qt){wt!==Qt&&(o.clearStencil(Qt),wt=Qt)},reset:function(){G=!1,mt=null,pt=null,zt=null,Nt=null,Pt=null,Yt=null,ne=null,wt=null}}}const u=new i,h=new s,d=new l;let m={};const p=new WeakMap;let _={},g={},x={},S=new WeakMap,b=[],D=null,E=!1,y=null,w=null,O=null,N=null,I=null,U=null,M=null,A=new _e(0,0,0),H=0,F=!1,V=null,Q=null,ut=null,X=null,nt=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,it=0;const tt=o.getParameter(o.VERSION);tt.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(tt)[1]),z=it>=1):tt.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),z=it>=2);let lt=null,gt={};const kt=o.getParameter(o.SCISSOR_BOX),ae=o.getParameter(o.VIEWPORT),L=new _n().fromArray(kt),et=new _n().fromArray(ae);function Mt(G,mt,pt,zt){const Nt=new Uint8Array(4),Pt=o.createTexture();o.bindTexture(G,Pt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Yt=0;Yt<pt;Yt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(mt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Nt):o.texImage2D(mt+Yt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Nt);return Pt}const At={};At[o.TEXTURE_2D]=Mt(o.TEXTURE_2D,o.TEXTURE_2D,1),At[o.TEXTURE_CUBE_MAP]=Mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[o.TEXTURE_2D_ARRAY]=Mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),At[o.TEXTURE_3D]=Mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Rt(o.DEPTH_TEST),h.setFunc(zl),Pe(!1),re(W_),Rt(o.CULL_FACE),Ye(bo);function Rt(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function Ht(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function se(G,mt){return x[G]!==mt?(o.bindFramebuffer(G,mt),x[G]=mt,G===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=mt),G===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=mt),!0):!1}function Tt(G,mt){let pt=b,zt=!1;if(G){pt=S.get(mt),pt===void 0&&(pt=[],S.set(mt,pt));const Nt=G.textures;if(pt.length!==Nt.length||pt[0]!==o.COLOR_ATTACHMENT0){for(let Pt=0,Yt=Nt.length;Pt<Yt;Pt++)pt[Pt]=o.COLOR_ATTACHMENT0+Pt;pt.length=Nt.length,zt=!0}}else pt[0]!==o.BACK&&(pt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(pt)}function Xt(G){return D!==G?(o.useProgram(G),D=G,!0):!1}const Te={[Eo]:o.FUNC_ADD,[kE]:o.FUNC_SUBTRACT,[WE]:o.FUNC_REVERSE_SUBTRACT};Te[qE]=o.MIN,Te[YE]=o.MAX;const Se={[ZE]:o.ZERO,[KE]:o.ONE,[QE]:o.SRC_COLOR,[jx]:o.SRC_ALPHA,[n1]:o.SRC_ALPHA_SATURATE,[t1]:o.DST_COLOR,[JE]:o.DST_ALPHA,[jE]:o.ONE_MINUS_SRC_COLOR,[Jx]:o.ONE_MINUS_SRC_ALPHA,[e1]:o.ONE_MINUS_DST_COLOR,[$E]:o.ONE_MINUS_DST_ALPHA,[i1]:o.CONSTANT_COLOR,[a1]:o.ONE_MINUS_CONSTANT_COLOR,[s1]:o.CONSTANT_ALPHA,[r1]:o.ONE_MINUS_CONSTANT_ALPHA};function Ye(G,mt,pt,zt,Nt,Pt,Yt,ne,wt,Qt){if(G===bo){E===!0&&(Ht(o.BLEND),E=!1);return}if(E===!1&&(Rt(o.BLEND),E=!0),G!==XE){if(G!==y||Qt!==F){if((w!==Eo||I!==Eo)&&(o.blendEquation(o.FUNC_ADD),w=Eo,I=Eo),Qt)switch(G){case Pl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ki:o.blendFunc(o.ONE,o.ONE);break;case q_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Y_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:We("WebGLState: Invalid blending: ",G);break}else switch(G){case Pl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ki:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case q_:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Y_:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",G);break}O=null,N=null,U=null,M=null,A.set(0,0,0),H=0,y=G,F=Qt}return}Nt=Nt||mt,Pt=Pt||pt,Yt=Yt||zt,(mt!==w||Nt!==I)&&(o.blendEquationSeparate(Te[mt],Te[Nt]),w=mt,I=Nt),(pt!==O||zt!==N||Pt!==U||Yt!==M)&&(o.blendFuncSeparate(Se[pt],Se[zt],Se[Pt],Se[Yt]),O=pt,N=zt,U=Pt,M=Yt),(ne.equals(A)===!1||wt!==H)&&(o.blendColor(ne.r,ne.g,ne.b,wt),A.copy(ne),H=wt),y=G,F=!1}function Fe(G,mt){G.side===qi?Ht(o.CULL_FACE):Rt(o.CULL_FACE);let pt=G.side===Jn;mt&&(pt=!pt),Pe(pt),G.blending===Pl&&G.transparent===!1?Ye(bo):Ye(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),u.setMask(G.colorWrite);const zt=G.stencilWrite;d.setTest(zt),zt&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),an(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Rt(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(G){V!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),V=G)}function re(G){G!==HE?(Rt(o.CULL_FACE),G!==Q&&(G===W_?o.cullFace(o.BACK):G===GE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),Q=G}function Ze(G){G!==ut&&(z&&o.lineWidth(G),ut=G)}function an(G,mt,pt){G?(Rt(o.POLYGON_OFFSET_FILL),(X!==mt||nt!==pt)&&(X=mt,nt=pt,h.getReversed()&&(mt=-mt,pt=-pt),o.polygonOffset(mt,pt))):Ht(o.POLYGON_OFFSET_FILL)}function hn(G){G?Rt(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function yn(G){G===void 0&&(G=o.TEXTURE0+q-1),lt!==G&&(o.activeTexture(G),lt=G)}function xn(G,mt,pt){pt===void 0&&(lt===null?pt=o.TEXTURE0+q-1:pt=lt);let zt=gt[pt];zt===void 0&&(zt={type:void 0,texture:void 0},gt[pt]=zt),(zt.type!==G||zt.texture!==mt)&&(lt!==pt&&(o.activeTexture(pt),lt=pt),o.bindTexture(G,mt||At[G]),zt.type=G,zt.texture=mt)}function Z(){const G=gt[lt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function In(){try{o.compressedTexImage2D(...arguments)}catch(G){We("WebGLState:",G)}}function He(){try{o.compressedTexImage3D(...arguments)}catch(G){We("WebGLState:",G)}}function Ve(){try{o.texSubImage2D(...arguments)}catch(G){We("WebGLState:",G)}}function Dt(){try{o.texSubImage3D(...arguments)}catch(G){We("WebGLState:",G)}}function Xe(){try{o.compressedTexSubImage2D(...arguments)}catch(G){We("WebGLState:",G)}}function Jt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){We("WebGLState:",G)}}function oe(){try{o.texStorage2D(...arguments)}catch(G){We("WebGLState:",G)}}function P(){try{o.texStorage3D(...arguments)}catch(G){We("WebGLState:",G)}}function T(){try{o.texImage2D(...arguments)}catch(G){We("WebGLState:",G)}}function at(){try{o.texImage3D(...arguments)}catch(G){We("WebGLState:",G)}}function Ct(G){return g[G]!==void 0?g[G]:o.getParameter(G)}function xt(G,mt){g[G]!==mt&&(o.pixelStorei(G,mt),g[G]=mt)}function It(G){L.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),L.copy(G))}function Ft(G){et.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),et.copy(G))}function ht(G,mt){let pt=p.get(mt);pt===void 0&&(pt=new WeakMap,p.set(mt,pt));let zt=pt.get(G);zt===void 0&&(zt=o.getUniformBlockIndex(mt,G.name),o.uniformBlockBinding(mt,zt,zt),pt.set(G,zt))}function vt(G,mt,pt){const Nt=p.get(mt).get(G);m[Nt]!==pt&&(o.bindBufferBase(o.UNIFORM_BUFFER,Nt,pt),m[Nt]=pt)}function Lt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},g={},lt=null,gt={},x={},m={},S=new WeakMap,b=[],D=null,E=!1,y=null,w=null,O=null,N=null,I=null,U=null,M=null,A=new _e(0,0,0),H=0,F=!1,V=null,Q=null,ut=null,X=null,nt=null,L.set(0,0,o.canvas.width,o.canvas.height),et.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Rt,disable:Ht,bindFramebuffer:se,drawBuffers:Tt,useProgram:Xt,setBlending:Ye,setMaterial:Fe,setFlipSided:Pe,setCullFace:re,setLineWidth:Ze,setPolygonOffset:an,setScissorTest:hn,activeTexture:yn,bindTexture:xn,unbindTexture:Z,compressedTexImage2D:In,compressedTexImage3D:He,texImage2D:T,texImage3D:at,pixelStorei:xt,getParameter:Ct,updateUBOMapping:ht,uniformBlockBinding:vt,texStorage2D:oe,texStorage3D:P,texSubImage2D:Ve,texSubImage3D:Dt,compressedTexSubImage2D:Xe,compressedTexSubImage3D:Jt,scissor:It,viewport:Ft,reset:Lt}}function e3(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Me,_=new WeakMap,g=new Set;let x;const S=new WeakMap,b=new Set,D=new FinalizationRegistry(P=>b.delete(P));let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,T){return E?new OffscreenCanvas(P,T):Gl("canvas")}function w(P,T,at){let Ct=1;const xt=oe(P);if((xt.width>at||xt.height>at)&&(Ct=at/Math.max(xt.width,xt.height)),Ct<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const It=Math.floor(Ct*xt.width),Ft=Math.floor(Ct*xt.height);x===void 0&&(x=y(It,Ft));const ht=T?y(It,Ft):x;return ht.width=It,ht.height=Ft,ht.getContext("2d").drawImage(P,0,0,It,Ft),fe("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+It+"x"+Ft+")."),ht}else return"data"in P&&fe("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),P;return P}function O(P){return P.generateMipmaps}function N(P){o.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(P,T,at,Ct,xt,It=!1){if(P!==null){if(o[P]!==void 0)return o[P];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ft;Ct&&(Ft=e.get("EXT_texture_norm16"),Ft||fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=T;if(T===o.RED&&(at===o.FLOAT&&(ht=o.R32F),at===o.HALF_FLOAT&&(ht=o.R16F),at===o.UNSIGNED_BYTE&&(ht=o.R8),at===o.UNSIGNED_SHORT&&Ft&&(ht=Ft.R16_EXT),at===o.SHORT&&Ft&&(ht=Ft.R16_SNORM_EXT)),T===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(ht=o.R8UI),at===o.UNSIGNED_SHORT&&(ht=o.R16UI),at===o.UNSIGNED_INT&&(ht=o.R32UI),at===o.BYTE&&(ht=o.R8I),at===o.SHORT&&(ht=o.R16I),at===o.INT&&(ht=o.R32I)),T===o.RG&&(at===o.FLOAT&&(ht=o.RG32F),at===o.HALF_FLOAT&&(ht=o.RG16F),at===o.UNSIGNED_BYTE&&(ht=o.RG8),at===o.UNSIGNED_SHORT&&Ft&&(ht=Ft.RG16_EXT),at===o.SHORT&&Ft&&(ht=Ft.RG16_SNORM_EXT)),T===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(ht=o.RG8UI),at===o.UNSIGNED_SHORT&&(ht=o.RG16UI),at===o.UNSIGNED_INT&&(ht=o.RG32UI),at===o.BYTE&&(ht=o.RG8I),at===o.SHORT&&(ht=o.RG16I),at===o.INT&&(ht=o.RG32I)),T===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),at===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),at===o.UNSIGNED_INT&&(ht=o.RGB32UI),at===o.BYTE&&(ht=o.RGB8I),at===o.SHORT&&(ht=o.RGB16I),at===o.INT&&(ht=o.RGB32I)),T===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),at===o.UNSIGNED_INT&&(ht=o.RGBA32UI),at===o.BYTE&&(ht=o.RGBA8I),at===o.SHORT&&(ht=o.RGBA16I),at===o.INT&&(ht=o.RGBA32I)),T===o.RGB&&(at===o.UNSIGNED_SHORT&&Ft&&(ht=Ft.RGB16_EXT),at===o.SHORT&&Ft&&(ht=Ft.RGB16_SNORM_EXT),at===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),at===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),T===o.RGBA){const vt=It?$u:ze.getTransfer(xt);at===o.FLOAT&&(ht=o.RGBA32F),at===o.HALF_FLOAT&&(ht=o.RGBA16F),at===o.UNSIGNED_BYTE&&(ht=vt===tn?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT&&Ft&&(ht=Ft.RGBA16_EXT),at===o.SHORT&&Ft&&(ht=Ft.RGBA16_SNORM_EXT),at===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ht}function M(P,T){let at;return P?T===null||T===Ca||T===wo?at=o.DEPTH24_STENCIL8:T===ra?at=o.DEPTH32F_STENCIL8:T===Fl&&(at=o.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ca||T===wo?at=o.DEPTH_COMPONENT24:T===ra?at=o.DEPTH_COMPONENT32F:T===Fl&&(at=o.DEPTH_COMPONENT16),at}function A(P,T){return O(P)===!0||P.isFramebufferTexture&&P.minFilter!==jn&&P.minFilter!==_i?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function H(P){const T=new WeakRef(P);s.get(P).__ref=T,b.add(T),D.register(P,T,T)}function F(P){const T=s.get(P).__ref;T!==void 0&&(b.delete(T),D.unregister(T))}function V(P){ut(P.target)}function Q(P){X(P.target)}function ut(P){P.removeEventListener("dispose",V),F(P),q(P),P.isVideoTexture&&_.delete(P),P.isHTMLTexture&&g.delete(P)}function X(P){P.removeEventListener("dispose",Q),F(P),it(P)}function nt(){for(const P of b){const T=P.deref();T!==void 0&&(T.isRenderTarget===!0?X(T):ut(T))}b.clear(),g.clear()}function q(P){const T=s.get(P);if(T.__webglInit===void 0)return;const at=P.source,Ct=S.get(at);if(Ct){const xt=Ct[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&z(P),Object.keys(Ct).length===0&&S.delete(at)}s.remove(P)}function z(P){const T=s.get(P);o.deleteTexture(T.__webglTexture);const at=P.source,Ct=S.get(at);delete Ct[T.__cacheKey],h.memory.textures--}function it(P){const T=s.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();const at=P.depthTexture;if(at&&at.renderTarget===P&&ut(at),P.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(T.__webglFramebuffer[xt]))for(let It=0;It<T.__webglFramebuffer[xt].length;It++)o.deleteFramebuffer(T.__webglFramebuffer[xt][It]);else o.deleteFramebuffer(T.__webglFramebuffer[xt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[xt])}else{if(Array.isArray(T.__webglFramebuffer))for(let xt=0;xt<T.__webglFramebuffer.length;xt++)o.deleteFramebuffer(T.__webglFramebuffer[xt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let xt=0;xt<T.__webglColorRenderbuffer.length;xt++)T.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[xt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Ct=P.textures;for(let xt=0,It=Ct.length;xt<It;xt++){const Ft=s.get(Ct[xt]);Ft.__webglTexture&&(o.deleteTexture(Ft.__webglTexture),h.memory.textures--),s.remove(Ct[xt])}s.remove(P)}let tt=0;function lt(){tt=0}function gt(){return tt}function kt(P){tt=P}function ae(){const P=tt;return P>=l.maxTextures&&fe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+l.maxTextures),tt+=1,P}function L(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function et(P,T){const at=s.get(P);if(P.isVideoTexture&&Xe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&at.__version!==P.version){const Ct=P.image;if(Ct===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(Ct.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(at,P,T);return}}else P.isExternalTexture&&(at.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+T)}function Mt(P,T){const at=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&at.__version!==P.version){Fe(at,P,T);return}else P.isExternalTexture&&(at.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+T)}function At(P,T){const at=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&at.__version!==P.version){Fe(at,P,T);return}i.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+T)}function Rt(P,T){const at=s.get(P);if(P.version>0&&at.__version!==P.version){Pe(at,P,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+T)}const Ht={[yp]:o.REPEAT,[Ja]:o.CLAMP_TO_EDGE,[Ep]:o.MIRRORED_REPEAT},se={[jn]:o.NEAREST,[c1]:o.NEAREST_MIPMAP_NEAREST,[hu]:o.NEAREST_MIPMAP_LINEAR,[_i]:o.LINEAR,[Fd]:o.LINEAR_MIPMAP_NEAREST,[Bs]:o.LINEAR_MIPMAP_LINEAR},Tt={[d1]:o.NEVER,[pS]:o.ALWAYS,[p1]:o.LESS,[hS]:o.LEQUAL,[m1]:o.EQUAL,[dS]:o.GEQUAL,[g1]:o.GREATER,[v1]:o.NOTEQUAL};function Xt(P,T){if(T.type===ra&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_i||T.magFilter===Fd||T.magFilter===hu||T.magFilter===Bs||T.minFilter===_i||T.minFilter===Fd||T.minFilter===hu||T.minFilter===Bs)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Ht[T.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Ht[T.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Ht[T.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,se[T.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,Tt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===jn||T.minFilter!==hu&&T.minFilter!==Bs||T.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const at=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Te(P,T){let at=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",V),H(T));const Ct=T.source;let xt=S.get(Ct);xt===void 0&&(xt={},S.set(Ct,xt));const It=L(T);if(It!==P.__cacheKey){xt[It]===void 0&&(xt[It]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,at=!0),xt[It].usedTimes++;const Ft=xt[P.__cacheKey];Ft!==void 0&&(xt[P.__cacheKey].usedTimes--,Ft.usedTimes===0&&z(T)),P.__cacheKey=It,P.__webglTexture=xt[It].texture}return at}function Se(P,T,at){return Math.floor(Math.floor(P/at)/T)}function Ye(P,T,at,Ct){const It=P.updateRanges;if(It.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,at,Ct,T.data);else{It.sort((G,mt)=>G.start-mt.start);let Ft=0;for(let G=1;G<It.length;G++){const mt=It[Ft],pt=It[G],zt=mt.start+mt.count,Nt=Se(pt.start,T.width,4),Pt=Se(mt.start,T.width,4);pt.start<=zt+1&&Nt===Pt&&Se(pt.start+pt.count-1,T.width,4)===Nt?mt.count=Math.max(mt.count,pt.start+pt.count-mt.start):(++Ft,It[Ft]=pt)}It.length=Ft+1;const ht=i.getParameter(o.UNPACK_ROW_LENGTH),vt=i.getParameter(o.UNPACK_SKIP_PIXELS),Lt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let G=0,mt=It.length;G<mt;G++){const pt=It[G],zt=Math.floor(pt.start/4),Nt=Math.ceil(pt.count/4),Pt=zt%T.width,Yt=Math.floor(zt/T.width),ne=Nt,wt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Yt),i.texSubImage2D(o.TEXTURE_2D,0,Pt,Yt,ne,wt,at,Ct,T.data)}P.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ht),i.pixelStorei(o.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Lt)}}function Fe(P,T,at){let Ct=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Ct=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Ct=o.TEXTURE_3D);const xt=Te(P,T),It=T.source;i.bindTexture(Ct,P.__webglTexture,o.TEXTURE0+at);const Ft=s.get(It);if(It.version!==Ft.__version||xt===!0){if(i.activeTexture(o.TEXTURE0+at),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const wt=ze.getPrimaries(ze.workingColorSpace),Qt=T.colorSpace===zs?null:ze.getPrimaries(T.colorSpace),he=T.colorSpace===zs||wt===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment);let vt=w(T.image,!1,l.maxTextureSize);vt=Jt(T,vt);const Lt=u.convert(T.format,T.colorSpace),G=u.convert(T.type);let mt=U(T.internalFormat,Lt,G,T.normalized,T.colorSpace,T.isVideoTexture);Xt(Ct,T);let pt;const zt=T.mipmaps,Nt=T.isVideoTexture!==!0,Pt=Ft.__version===void 0||xt===!0,Yt=It.dataReady,ne=A(T,vt);if(T.isDepthTexture)mt=M(T.format===Fs,T.type),Pt&&(Nt?i.texStorage2D(o.TEXTURE_2D,1,mt,vt.width,vt.height):i.texImage2D(o.TEXTURE_2D,0,mt,vt.width,vt.height,0,Lt,G,null));else if(T.isDataTexture)if(zt.length>0){Nt&&Pt&&i.texStorage2D(o.TEXTURE_2D,ne,mt,zt[0].width,zt[0].height);for(let wt=0,Qt=zt.length;wt<Qt;wt++)pt=zt[wt],Nt?Yt&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,pt.width,pt.height,Lt,G,pt.data):i.texImage2D(o.TEXTURE_2D,wt,mt,pt.width,pt.height,0,Lt,G,pt.data);T.generateMipmaps=!1}else Nt?(Pt&&i.texStorage2D(o.TEXTURE_2D,ne,mt,vt.width,vt.height),Yt&&Ye(T,vt,Lt,G)):i.texImage2D(o.TEXTURE_2D,0,mt,vt.width,vt.height,0,Lt,G,vt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Nt&&Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ne,mt,zt[0].width,zt[0].height,vt.depth);for(let wt=0,Qt=zt.length;wt<Qt;wt++)if(pt=zt[wt],T.format!==Aa)if(Lt!==null)if(Nt){if(Yt)if(T.layerUpdates.size>0){const he=wx(pt.width,pt.height,T.format,T.type);for(const Gt of T.layerUpdates){const De=pt.data.subarray(Gt*he/pt.data.BYTES_PER_ELEMENT,(Gt+1)*he/pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,Gt,pt.width,pt.height,1,Lt,De)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,0,pt.width,pt.height,vt.depth,Lt,pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,wt,mt,pt.width,pt.height,vt.depth,0,pt.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?Yt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,0,pt.width,pt.height,vt.depth,Lt,G,pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,wt,mt,pt.width,pt.height,vt.depth,0,Lt,G,pt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Nt&&Pt&&i.texStorage2D(o.TEXTURE_2D,ne,mt,zt[0].width,zt[0].height);for(let wt=0,Qt=zt.length;wt<Qt;wt++)pt=zt[wt],T.format!==Aa?Lt!==null?Nt?Yt&&i.compressedTexSubImage2D(o.TEXTURE_2D,wt,0,0,pt.width,pt.height,Lt,pt.data):i.compressedTexImage2D(o.TEXTURE_2D,wt,mt,pt.width,pt.height,0,pt.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?Yt&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,pt.width,pt.height,Lt,G,pt.data):i.texImage2D(o.TEXTURE_2D,wt,mt,pt.width,pt.height,0,Lt,G,pt.data)}else if(T.isDataArrayTexture)if(Nt){if(Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ne,mt,vt.width,vt.height,vt.depth),Yt)if(T.layerUpdates.size>0){const wt=wx(vt.width,vt.height,T.format,T.type);for(const Qt of T.layerUpdates){const he=vt.data.subarray(Qt*wt/vt.data.BYTES_PER_ELEMENT,(Qt+1)*wt/vt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Qt,vt.width,vt.height,1,Lt,G,he)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Lt,G,vt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,mt,vt.width,vt.height,vt.depth,0,Lt,G,vt.data);else if(T.isData3DTexture)Nt?(Pt&&i.texStorage3D(o.TEXTURE_3D,ne,mt,vt.width,vt.height,vt.depth),Yt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Lt,G,vt.data)):i.texImage3D(o.TEXTURE_3D,0,mt,vt.width,vt.height,vt.depth,0,Lt,G,vt.data);else if(T.isFramebufferTexture){if(Pt)if(Nt)i.texStorage2D(o.TEXTURE_2D,ne,mt,vt.width,vt.height);else{let wt=vt.width,Qt=vt.height;for(let he=0;he<ne;he++)i.texImage2D(o.TEXTURE_2D,he,mt,wt,Qt,0,Lt,G,null),wt>>=1,Qt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in o){const wt=o.canvas;if(wt.hasAttribute("layoutsubtree")||wt.setAttribute("layoutsubtree","true"),vt.parentNode!==wt){wt.appendChild(vt),g.add(T),wt.onpaint=Qt=>{const he=Qt.changedElements;for(const Gt of g)he.includes(Gt.image)&&(Gt.needsUpdate=!0)},wt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,vt);else{const he=o.RGBA,Gt=o.RGBA,De=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,he,Gt,De,vt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Nt&&Pt){const wt=oe(zt[0]);i.texStorage2D(o.TEXTURE_2D,ne,mt,wt.width,wt.height)}for(let wt=0,Qt=zt.length;wt<Qt;wt++)pt=zt[wt],Nt?Yt&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,Lt,G,pt):i.texImage2D(o.TEXTURE_2D,wt,mt,Lt,G,pt);T.generateMipmaps=!1}else if(Nt){if(Pt){const wt=oe(vt);i.texStorage2D(o.TEXTURE_2D,ne,mt,wt.width,wt.height)}Yt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,G,vt)}else i.texImage2D(o.TEXTURE_2D,0,mt,Lt,G,vt);O(T)&&T.mipmapsAutoUpdate===!0&&N(Ct),Ft.__version=It.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Pe(P,T,at){if(T.image.length!==6)return;const Ct=Te(P,T),xt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+at);const It=s.get(xt);if(xt.version!==It.__version||Ct===!0){i.activeTexture(o.TEXTURE0+at);const Ft=ze.getPrimaries(ze.workingColorSpace),ht=T.colorSpace===zs?null:ze.getPrimaries(T.colorSpace),vt=T.colorSpace===zs||Ft===ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Lt=T.isCompressedTexture||T.image[0].isCompressedTexture,G=T.image[0]&&T.image[0].isDataTexture,mt=[];for(let Gt=0;Gt<6;Gt++)!Lt&&!G?mt[Gt]=w(T.image[Gt],!0,l.maxCubemapSize):mt[Gt]=G?T.image[Gt].image:T.image[Gt],mt[Gt]=Jt(T,mt[Gt]);const pt=mt[0],zt=u.convert(T.format,T.colorSpace),Nt=u.convert(T.type);let Pt=U(T.internalFormat,zt,Nt,T.normalized,T.colorSpace);const Yt=T.isVideoTexture!==!0,ne=It.__version===void 0||Ct===!0,wt=xt.dataReady;let Qt=A(T,pt);Xt(o.TEXTURE_CUBE_MAP,T);let he;if(T.isDepthTexture){if(Pt=M(T.format===Fs,T.type),ne)if(Yt)i.texStorage2D(o.TEXTURE_CUBE_MAP,1,Pt,pt.width,pt.height);else for(let Gt=0;Gt<6;Gt++)i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Pt,pt.width,pt.height,0,zt,Nt,null)}else if(Lt){Yt&&ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Qt,Pt,pt.width,pt.height);for(let Gt=0;Gt<6;Gt++){he=mt[Gt].mipmaps;for(let De=0;De<he.length;De++){const cn=he[De];T.format!==Aa?zt!==null?Yt?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,De,0,0,cn.width,cn.height,zt,cn.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,De,Pt,cn.width,cn.height,0,cn.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,De,0,0,cn.width,cn.height,zt,Nt,cn.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,De,Pt,cn.width,cn.height,0,zt,Nt,cn.data)}}}else{if(he=T.mipmaps,Yt&&ne){he.length>0&&Qt++;const Gt=oe(mt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Qt,Pt,Gt.width,Gt.height)}for(let Gt=0;Gt<6;Gt++)if(G){Yt?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,0,0,mt[Gt].width,mt[Gt].height,zt,Nt,mt[Gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Pt,mt[Gt].width,mt[Gt].height,0,zt,Nt,mt[Gt].data);for(let De=0;De<he.length;De++){const zn=he[De].image[Gt].image;Yt?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,De+1,0,0,zn.width,zn.height,zt,Nt,zn.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,De+1,Pt,zn.width,zn.height,0,zt,Nt,zn.data)}}else{Yt?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,0,0,zt,Nt,mt[Gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Pt,zt,Nt,mt[Gt]);for(let De=0;De<he.length;De++){const cn=he[De];Yt?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,De+1,0,0,zt,Nt,cn.image[Gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,De+1,Pt,zt,Nt,cn.image[Gt])}}}O(T)&&T.mipmapsAutoUpdate===!0&&N(o.TEXTURE_CUBE_MAP),It.__version=xt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function re(P,T,at,Ct,xt,It){const Ft=u.convert(at.format,at.colorSpace),ht=u.convert(at.type),vt=U(at.internalFormat,Ft,ht,at.normalized,at.colorSpace),Lt=s.get(T),G=s.get(at);if(G.__renderTarget=T,!Lt.__hasExternalTextures){const mt=Math.max(1,T.width>>It),pt=Math.max(1,T.height>>It);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,It,vt,mt,pt,T.depth,0,Ft,ht,null):i.texImage2D(xt,It,vt,mt,pt,0,Ft,ht,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),Dt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ct,xt,G.__webglTexture,0,Ve(T)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Ct,xt,G.__webglTexture,It),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(P,T,at){if(o.bindRenderbuffer(o.RENDERBUFFER,P),T.depthBuffer){const Ct=T.depthTexture,xt=Ct&&Ct.isDepthTexture?Ct.type:null,It=M(T.stencilBuffer,xt),Ft=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Dt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ve(T),It,T.width,T.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ve(T),It,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,It,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ft,o.RENDERBUFFER,P)}else{const Ct=T.textures;for(let xt=0;xt<Ct.length;xt++){const It=Ct[xt],Ft=u.convert(It.format,It.colorSpace),ht=u.convert(It.type),vt=U(It.internalFormat,Ft,ht,It.normalized,It.colorSpace);Dt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ve(T),vt,T.width,T.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ve(T),vt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,vt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function an(P,T,at){const Ct=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xt=s.get(T.depthTexture);xt.__renderTarget=T;const It=Ct?T.depthTexture.image[0]:T.depthTexture.image;(!xt.__webglTexture||It.width!==T.width||It.height!==T.height)&&(It.width=T.width,It.height=T.height,T.depthTexture.needsUpdate=!0),Ct?Rt(T.depthTexture,0):et(T.depthTexture,0);const Ft=xt.__webglTexture,ht=Ve(T),vt=Ct?o.TEXTURE_CUBE_MAP_POSITIVE_X+at:o.TEXTURE_2D,Lt=T.depthTexture.format===Fs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===Gs)Dt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Lt,vt,Ft,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,Lt,vt,Ft,0);else if(T.depthTexture.format===Fs)Dt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Lt,vt,Ft,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,Lt,vt,Ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function hn(P){const T=s.get(P),at=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const Ct=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Ct){const xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Ct.removeEventListener("dispose",xt)};Ct.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=Ct}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(at)for(let Ct=0;Ct<6;Ct++)an(T.__webglFramebuffer[Ct],P,Ct);else P.texture.mipmaps.length>0?an(T.__webglFramebuffer[0],P,0):an(T.__webglFramebuffer,P,0);else if(at){T.__webglDepthbuffer=[];for(let Ct=0;Ct<6;Ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[Ct]),T.__webglDepthbuffer[Ct]===void 0)T.__webglDepthbuffer[Ct]=o.createRenderbuffer(),Ze(T.__webglDepthbuffer[Ct],P,!1);else{const xt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=T.__webglDepthbuffer[Ct];o.bindRenderbuffer(o.RENDERBUFFER,It),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,It)}}else if(P.texture.mipmaps.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Ze(T.__webglDepthbuffer,P,!1);else{const xt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,It),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,It)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function yn(P,T,at){const Ct=s.get(P);T!==void 0&&re(Ct.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&hn(P)}function xn(P){const T=P.texture,at=s.get(P),Ct=s.get(T);P.addEventListener("dispose",Q),H(P);const xt=P.textures,It=P.isWebGLCubeRenderTarget===!0,Ft=xt.length>1;if(Ft||(Ct.__webglTexture===void 0&&(Ct.__webglTexture=o.createTexture()),Ct.__version=T.version,h.memory.textures++),It){at.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(T.mipmaps.length>0){at.__webglFramebuffer[ht]=[];for(let vt=0;vt<T.mipmaps.length;vt++)at.__webglFramebuffer[ht][vt]=o.createFramebuffer()}else at.__webglFramebuffer[ht]=o.createFramebuffer()}else{if(T.mipmaps.length>0){at.__webglFramebuffer=[];for(let ht=0;ht<T.mipmaps.length;ht++)at.__webglFramebuffer[ht]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(Ft)for(let ht=0,vt=xt.length;ht<vt;ht++){const Lt=s.get(xt[ht]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=o.createTexture(),h.memory.textures++)}if(P.samples>0&&Dt(P)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let ht=0;ht<xt.length;ht++){const vt=xt[ht];at.__webglColorRenderbuffer[ht]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[ht]);const Lt=u.convert(vt.format,vt.colorSpace),G=u.convert(vt.type),mt=U(vt.internalFormat,Lt,G,vt.normalized,vt.colorSpace,P.isXRRenderTarget===!0),pt=Ve(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,pt,mt,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ht,o.RENDERBUFFER,at.__webglColorRenderbuffer[ht])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),Ze(at.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(It){i.bindTexture(o.TEXTURE_CUBE_MAP,Ct.__webglTexture),Xt(o.TEXTURE_CUBE_MAP,T);for(let ht=0;ht<6;ht++)if(T.mipmaps.length>0)for(let vt=0;vt<T.mipmaps.length;vt++)re(at.__webglFramebuffer[ht][vt],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt);else re(at.__webglFramebuffer[ht],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);O(T)?N(o.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),i.unbindTexture()}else if(Ft){for(let ht=0,vt=xt.length;ht<vt;ht++){const Lt=xt[ht],G=s.get(Lt);let mt=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(mt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(mt,G.__webglTexture),Xt(mt,Lt),re(at.__webglFramebuffer,P,Lt,o.COLOR_ATTACHMENT0+ht,mt,0),O(Lt)&&N(mt)}i.unbindTexture()}else{let ht=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ht=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ht,Ct.__webglTexture),Xt(ht,T),T.mipmaps.length>0)for(let vt=0;vt<T.mipmaps.length;vt++)re(at.__webglFramebuffer[vt],P,T,o.COLOR_ATTACHMENT0,ht,vt);else re(at.__webglFramebuffer,P,T,o.COLOR_ATTACHMENT0,ht,0);O(T)?N(ht):T.mipmaps.length>0&&o.texParameteri(ht,o.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),i.unbindTexture()}P.depthBuffer&&hn(P)}function Z(P){const T=P.textures;for(let at=0,Ct=T.length;at<Ct;at++){const xt=T[at];if(O(xt)&&xt.mipmapsAutoUpdate===!0){const It=I(P),Ft=s.get(xt).__webglTexture;i.bindTexture(It,Ft),N(It),i.unbindTexture()}}}const In=[];function He(P){if(P.samples>0){if(Dt(P)===!1){const T=P.textures,at=P.width,Ct=P.height;let xt=o.COLOR_BUFFER_BIT;const It=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ft=s.get(P),ht=T.length>1;if(ht)for(let Lt=0;Lt<T.length;Lt++)i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Lt=0;Lt<T.length;Lt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),ht){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);const G=s.get(T[Lt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,G,0)}o.blitFramebuffer(0,0,at,Ct,0,0,at,Ct,xt,o.NEAREST),m===!0&&(In.length=0,In.push(o.COLOR_ATTACHMENT0+Lt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&In.push(It),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,In))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ht)for(let Lt=0;Lt<T.length;Lt++){i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);const G=s.get(T[Lt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,G,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&m){const T=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Ve(P){return Math.min(l.maxSamples,P.samples)}function Dt(P){const T=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xe(P){const T=h.render.frame;_.get(P)!==T&&(_.set(P,T),P.update())}function Jt(P,T){const at=P.colorSpace,Ct=P.format,xt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||at!==Ju&&at!==zs&&(ze.getTransfer(at)===tn?(Ct!==Aa||xt!==Ni)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",at)),T}function oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=lt,this.getTextureUnits=gt,this.setTextureUnits=kt,this.setTexture2D=et,this.setTexture2DArray=Mt,this.setTexture3D=At,this.setTextureCube=Rt,this.rebindTextures=yn,this.setupRenderTarget=xn,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=hn,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Dt,this.dispose=nt}function n3(o,e){function i(s,l=zs){let u;const h=ze.getTransfer(l);if(s===Ni)return o.UNSIGNED_BYTE;if(s===um)return o.UNSIGNED_SHORT_4_4_4_4;if(s===fm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===lS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===cS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===rS)return o.BYTE;if(s===oS)return o.SHORT;if(s===Fl)return o.UNSIGNED_SHORT;if(s===cm)return o.INT;if(s===Ca)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===Da)return o.HALF_FLOAT;if(s===uS)return o.ALPHA;if(s===fS)return o.RGB;if(s===Aa)return o.RGBA;if(s===Gs)return o.DEPTH_COMPONENT;if(s===Fs)return o.DEPTH_STENCIL;if(s===hm)return o.RED;if(s===dm)return o.RED_INTEGER;if(s===_r)return o.RG;if(s===pm)return o.RG_INTEGER;if(s===mm)return o.RGBA_INTEGER;if(s===Xu||s===ku||s===Wu||s===qu)if(h===tn)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Xu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Xu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ku)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bp||s===Tp||s===Ap||s===Rp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===bp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ap)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wp||s===Cp||s===Dp||s===Np||s===Lp||s===Ku||s===Up)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===wp||s===Cp)return h===tn?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Dp)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===Np)return u.COMPRESSED_R11_EAC;if(s===Lp)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Ku)return u.COMPRESSED_RG11_EAC;if(s===Up)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Op||s===Pp||s===Ip||s===zp||s===Bp||s===Fp||s===Hp||s===Gp||s===Vp||s===Xp||s===kp||s===Wp||s===qp||s===Yp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Op)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pp)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ip)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zp)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bp)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fp)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hp)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gp)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vp)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xp)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===kp)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wp)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qp)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yp)return h===tn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zp||s===Kp||s===Qp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Zp)return h===tn?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Kp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Qp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jp||s===Jp||s===Qu||s===$p)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===jp)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Jp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qu)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$p)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const i3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class s3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new AS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Zi({vertexShader:i3,fragmentShader:a3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ge(new Do(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r3 extends xr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,x=null,S=null,b=null;const D=typeof XRWebGLBinding<"u",E=new s3,y={},w=i.getContextAttributes();let O=null,N=null;const I=[],U=[],M=new Me;let A=null,H=null;const F=new Wi;F.viewport=new _n;const V=new Wi;V.viewport=new _n;const Q=[F,V],ut=new vb;let X=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let et=I[L];return et===void 0&&(et=new Yd,I[L]=et),et.getTargetRaySpace()},this.getControllerGrip=function(L){let et=I[L];return et===void 0&&(et=new Yd,I[L]=et),et.getGripSpace()},this.getHand=function(L){let et=I[L];return et===void 0&&(et=new Yd,I[L]=et),et.getHandSpace()};function q(L){const et=U.indexOf(L.inputSource);if(et===-1)return;const Mt=I[et];Mt!==void 0&&(Mt.update(L.inputSource,L.frame,p||h),Mt.dispatchEvent({type:L.type,data:L.inputSource}))}function z(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",it);for(let L=0;L<I.length;L++){const et=U[L];et!==null&&(U[L]=null,I[L].disconnect(et))}X=null,nt=null,E.reset();for(const L in y)delete y[L];if(e.setRenderTarget(O),S=null,x=null,g=null,l=null,N=null,ae.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(M.width,M.height,!1),H!==null){const L=H.camera;L.fov=H.fov,L.zoom=H.zoom,L.updateProjectionMatrix(),H=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){u=L,s.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){d=L,s.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(L){p=L},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g===null&&D&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(L){if(l=L,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",z),l.addEventListener("inputsourceschange",it),w.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(M),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,At=null,Rt=null;w.depth&&(Rt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=w.stencil?Fs:Gs,At=w.stencil?wo:Ca);const Ht={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:u};g=this.getBinding(),x=g.createProjectionLayer(Ht),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new wa(x.textureWidth,x.textureHeight,{format:Aa,type:Ni,depthTexture:new Co(x.textureWidth,x.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new wa(S.framebufferWidth,S.framebufferHeight,{format:Aa,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),ae.setContext(l),ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function it(L){for(let et=0;et<L.removed.length;et++){const Mt=L.removed[et],At=U.indexOf(Mt);At>=0&&(U[At]=null,I[At].disconnect(Mt))}for(let et=0;et<L.added.length;et++){const Mt=L.added[et];let At=U.indexOf(Mt);if(At===-1){for(let Ht=0;Ht<I.length;Ht++)if(Ht>=U.length){U.push(Mt),At=Ht;break}else if(U[Ht]===null){U[Ht]=Mt,At=Ht;break}if(At===-1)break}const Rt=I[At];Rt&&Rt.connect(Mt)}}function tt(L,et){et===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(et.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(l===null)return;let et=L.near,Mt=L.far;E.texture!==null&&(E.depthNear>0&&(et=E.depthNear),E.depthFar>0&&(Mt=E.depthFar)),ut.near=V.near=F.near=et,ut.far=V.far=F.far=Mt,(X!==ut.near||nt!==ut.far)&&(l.updateRenderState({depthNear:ut.near,depthFar:ut.far}),X=ut.near,nt=ut.far),ut.layers.mask=L.layers.mask|6,F.layers.mask=ut.layers.mask&-5,V.layers.mask=ut.layers.mask&-3;const At=L.parent,Rt=ut.cameras;tt(ut,At);for(let Ht=0;Ht<Rt.length;Ht++)tt(Rt[Ht],At);ut.projectionMatrix.copy(F.projectionMatrix),ut.projectionMatrixInverse.copy(F.projectionMatrixInverse),H===null&&L.isPerspectiveCamera&&(H={camera:L,fov:L.fov,zoom:L.zoom}),lt(L,ut,At)};function lt(L,et,Mt){Mt===null?L.matrix.copy(et.matrixWorld):(L.matrix.copy(Mt.matrixWorld),L.matrix.invert(),L.matrix.multiply(et.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(et.projectionMatrix),L.projectionMatrixInverse.copy(et.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=tm*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return ut},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(L){m=L,x!==null&&(x.fixedFoveation=L),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=L)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(ut)},this.getCameraTexture=function(L){return y[L]};let gt=null;function kt(L,et){if(_=et.getViewerPose(p||h),b=et,_!==null){const Mt=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let At=!1;Mt.length!==ut.cameras.length&&(ut.cameras.length=0,At=!0);for(let Tt=0;Tt<Mt.length;Tt++){const Xt=Mt[Tt];let Te=null;if(S!==null)Te=S.getViewport(Xt);else{const Ye=g.getViewSubImage(x,Xt);Te=Ye.viewport,Tt===0&&(e.setRenderTargetTextures(N,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(N))}let Se=Q[Tt];Se===void 0&&(Se=new Wi,Se.layers.enable(Tt),Se.viewport=new _n,Q[Tt]=Se),Se.matrix.fromArray(Xt.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Xt.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Te.x,Te.y,Te.width,Te.height),Tt===0&&(ut.matrix.copy(Se.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale)),At===!0&&ut.cameras.push(Se)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){g=s.getBinding();const Tt=g.getDepthInformation(Mt[0]);Tt&&Tt.isValid&&Tt.texture&&E.init(Tt,l.renderState)}if(Rt&&Rt.includes("camera-access")&&D){e.state.unbindTexture(),g=s.getBinding();for(let Tt=0;Tt<Mt.length;Tt++){const Xt=Mt[Tt].camera;if(Xt){let Te=y[Xt];Te||(Te=new AS,y[Xt]=Te);const Se=g.getCameraImage(Xt);Te.sourceTexture=Se}}}}for(let Mt=0;Mt<I.length;Mt++){const At=U[Mt],Rt=I[Mt];At!==null&&Rt!==void 0&&Rt.update(At,et,p||h)}gt&&gt(L,et),et.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:et}),b=null}const ae=new LS;ae.setAnimationLoop(kt),this.setAnimationLoop=function(L){gt=L},this.dispose=function(){}}}const o3=new en,VS=new xe;VS.set(-1,0,0,0,1,0,0,0,1);function l3(o,e){function i(E,y){E.matrixAutoUpdate===!0&&E.updateMatrix(),y.value.copy(E.matrix)}function s(E,y){y.color.getRGB(E.fogColor.value,RS(o)),y.isFog?(E.fogNear.value=y.near,E.fogFar.value=y.far):y.isFogExp2&&(E.fogDensity.value=y.density)}function l(E,y,w,O,N){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?u(E,y):y.isMeshLambertMaterial?(u(E,y),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(u(E,y),g(E,y)):y.isMeshPhongMaterial?(u(E,y),_(E,y),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(u(E,y),x(E,y),y.isMeshPhysicalMaterial&&S(E,y,N)):y.isMeshMatcapMaterial?(u(E,y),b(E,y)):y.isMeshDepthMaterial?u(E,y):y.isMeshDistanceMaterial?(u(E,y),D(E,y)):y.isMeshNormalMaterial?u(E,y):y.isLineBasicMaterial?(h(E,y),y.isLineDashedMaterial&&d(E,y)):y.isPointsMaterial?m(E,y,w,O):y.isSpriteMaterial?p(E,y):y.isShadowMaterial?(E.color.value.copy(y.color),E.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(E,y){E.opacity.value=y.opacity,y.color&&E.diffuse.value.copy(y.color),y.emissive&&E.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(E.map.value=y.map,i(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.bumpMap&&(E.bumpMap.value=y.bumpMap,i(y.bumpMap,E.bumpMapTransform),E.bumpScale.value=y.bumpScale,y.side===Jn&&(E.bumpScale.value*=-1)),y.normalMap&&(E.normalMap.value=y.normalMap,i(y.normalMap,E.normalMapTransform),E.normalScale.value.copy(y.normalScale),y.side===Jn&&E.normalScale.value.negate()),y.displacementMap&&(E.displacementMap.value=y.displacementMap,i(y.displacementMap,E.displacementMapTransform),E.displacementScale.value=y.displacementScale,E.displacementBias.value=y.displacementBias),y.emissiveMap&&(E.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,E.emissiveMapTransform)),y.specularMap&&(E.specularMap.value=y.specularMap,i(y.specularMap,E.specularMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest);const w=e.get(y),O=w.envMap,N=w.envMapRotation;O&&(E.envMap.value=O,E.envMapRotation.value.setFromMatrix4(o3.makeRotationFromEuler(N)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&E.envMapRotation.value.premultiply(VS),E.reflectivity.value=y.reflectivity,E.ior.value=y.ior,E.refractionRatio.value=y.refractionRatio),y.lightMap&&(E.lightMap.value=y.lightMap,E.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,E.lightMapTransform)),y.aoMap&&(E.aoMap.value=y.aoMap,E.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,E.aoMapTransform))}function h(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,y.map&&(E.map.value=y.map,i(y.map,E.mapTransform))}function d(E,y){E.dashSize.value=y.dashSize,E.totalSize.value=y.dashSize+y.gapSize,E.scale.value=y.scale}function m(E,y,w,O){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.size.value=y.size*w,E.scale.value=O*.5,y.map&&(E.map.value=y.map,i(y.map,E.uvTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function p(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.rotation.value=y.rotation,y.map&&(E.map.value=y.map,i(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function _(E,y){E.specular.value.copy(y.specular),E.shininess.value=Math.max(y.shininess,1e-4)}function g(E,y){y.gradientMap&&(E.gradientMap.value=y.gradientMap)}function x(E,y){E.metalness.value=y.metalness,y.metalnessMap&&(E.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,E.metalnessMapTransform)),E.roughness.value=y.roughness,y.roughnessMap&&(E.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,E.roughnessMapTransform)),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)}function S(E,y,w){E.ior.value=y.ior,y.diffuseRoughness>0&&(E.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(E.diffuseRoughnessMap.value=y.diffuseRoughnessMap,i(y.diffuseRoughnessMap,E.diffuseRoughnessMapTransform))),y.sheen>0&&(E.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),E.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(E.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,E.sheenColorMapTransform)),y.sheenRoughnessMap&&(E.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,E.sheenRoughnessMapTransform))),y.clearcoat>0&&(E.clearcoat.value=y.clearcoat,E.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(E.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,E.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(E.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Jn&&E.clearcoatNormalScale.value.negate())),y.dispersion>0&&(E.dispersion.value=y.dispersion),y.retroreflectivity>0&&(E.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(E.iridescence.value=y.iridescence,E.iridescenceIOR.value=y.iridescenceIOR,E.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,E.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(E.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,E.iridescenceMapTransform)),y.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),y.transmission>0&&(E.transmission.value=y.transmission,E.transmissionSamplerMap.value=w.texture,E.transmissionSamplerSize.value.set(w.width,w.height),y.transmissionMap&&(E.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,E.transmissionMapTransform)),E.thickness.value=y.thickness,y.thicknessMap&&(E.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=y.attenuationDistance,E.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(E.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(E.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=y.specularIntensity,E.specularColor.value.copy(y.specularColor),y.specularColorMap&&(E.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,E.specularColorMapTransform)),y.specularIntensityMap&&(E.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,E.specularIntensityMapTransform))}function b(E,y){y.matcap&&(E.matcap.value=y.matcap)}function D(E,y){const w=e.get(y).light;E.referencePosition.value.setFromMatrixPosition(w.matrixWorld),E.nearDistance.value=w.shadow.camera.near,E.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function c3(o,e,i,s){let l={},u={};function h(w,O){const N=O.program;s.uniformBlockBinding(w,N,l[w.id])}function d(w,O){let N=l[w.id];N===void 0&&(b(w),N=m(w),l[w.id]=N,w.addEventListener("dispose",E));const I=O.program;s.updateUBOMapping(w,I);const U=e.render.frame;u[w.id]!==U&&(p(w),u[w.id]=U)}function m(w){const O=o.createBuffer(),N=w.__size,I=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,N,I),o.bindBuffer(o.UNIFORM_BUFFER,null),O}function p(w){const O=l[w.id],N=w.uniforms,I=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let U=0,M=N.length;U<M;U++){const A=N[U];if(Array.isArray(A))for(let H=0,F=A.length;H<F;H++)_(A[H],U,H,I);else _(A,U,0,I)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function _(w,O,N,I){if(x(w,O,N,I)===!0){const U=w.__offset,M=w.value;if(Array.isArray(M)){let A=0;for(let H=0;H<M.length;H++){const F=M[H],V=D(F,!0);g(F,w.__data,A),A+=V.storage/Float32Array.BYTES_PER_ELEMENT}}else g(M,w.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,U,w.__data)}}function g(w,O,N){typeof w=="number"||typeof w=="boolean"?O[N]=w:w.isMatrix3?(O[N]=w.elements[0],O[N+1]=w.elements[1],O[N+2]=w.elements[2],O[N+3]=0,O[N+4]=w.elements[3],O[N+5]=w.elements[4],O[N+6]=w.elements[5],O[N+7]=0,O[N+8]=w.elements[6],O[N+9]=w.elements[7],O[N+10]=w.elements[8],O[N+11]=0):ArrayBuffer.isView(w)?O.set(w.subarray(0,O.length-N),N):w.toArray(O,N)}function x(w,O,N,I){const U=w.value,M=O+"_"+N;if(Array.isArray(U)){I[M]===void 0&&(I[M]=[]);const A=I[M];let H=!1;for(let F=0;F<U.length;F++)S(U[F],A,F)===!0&&(H=!0);return H}return S(U,I,M)}function S(w,O,N){if(O[N]===void 0)return typeof w=="number"||typeof w=="boolean"?O[N]=w:ArrayBuffer.isView(w)?O[N]=w.slice():O[N]=w.clone(),!0;{const I=O[N];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return O[N]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(I.equals(w)===!1)return I.copy(w),!0}}return!1}function b(w){const O=w.uniforms;let N=0;const I=16;for(let M=0,A=O.length;M<A;M++){const H=Array.isArray(O[M])?O[M]:[O[M]];for(let F=0,V=H.length;F<V;F++){const Q=H[F],ut=Array.isArray(Q.value)?Q.value:[Q.value],X=Array.isArray(O[M])||Array.isArray(Q.value);let nt=N;for(let z=0,it=ut.length;z<it;z++){const tt=ut[z],lt=D(tt,X),gt=N%I,kt=gt%lt.boundary,ae=gt+kt;N+=kt,ae!==0&&I-ae<lt.storage&&(N+=I-ae),z===0&&(nt=N),N+=lt.storage}const q=Q.type==="int"?Int32Array:Q.type==="uint"?Uint32Array:Float32Array;Q.__data=new q((N-nt)/Float32Array.BYTES_PER_ELEMENT),Q.__offset=nt}}const U=N%I;return U>0&&(N+=I-U),w.__size=N,w.__cache={},this}function D(w,O){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=16,N.storage=48):w.isMatrix4?(N.boundary=16,N.storage=64):w.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(N.boundary=16,N.storage=w.byteLength):fe("WebGLRenderer: Unsupported uniform value type.",w),O===!0&&(N.boundary=16,N.storage=Math.ceil(N.storage/16)*16),N}function E(w){const O=w.target;O.removeEventListener("dispose",E),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function y(){for(const w in l)o.deleteBuffer(l[w]);l={},u={}}return{bind:h,update:d,dispose:y}}const u3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ea=null;function f3(){return Ea===null&&(Ea=new yS(u3,16,16,_r,Da),Ea.name="DFG_LUT",Ea.minFilter=_i,Ea.magFilter=_i,Ea.wrapS=Ja,Ea.wrapT=Ja,Ea.generateMipmaps=!1,Ea.needsUpdate=!0),Ea}class h3{constructor(e={}){const{canvas:i=S1(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:S=Ni}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const D=S,E=new Set([mm,pm,dm]),y=new Set([Ni,Ca,Fl,wo,um,fm]),w=new Uint32Array(4),O=new Int32Array(4),N={textures:[],min:[],max:[],resolution:[]};let I=null,U=null;const M=[],A=[];let H=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let V=!1,Q=null,ut=null,X=null,nt=null;this._outputColorSpace=Di;let q=0,z=0,it=null,tt=-1,lt=null;const gt=new _n,kt=new _n;let ae=null;const L=new _e(0);let et=0,Mt=i.width,At=i.height,Rt=1,Ht=null,se=null;const Tt=new _n(0,0,Mt,At),Xt=new _n(0,0,Mt,At);let Te=!1;const Se=new Vl,Ye=new xm;let Fe=!1,Pe=!1;const re=new en,Ze=new K,an=new _n,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yn=!1;function xn(){return it===null?Rt:1}let Z=s;function In(C,k){return i.getContext(C,k)}let He,Ve,Dt,Xe,Jt,oe,P,T,at,Ct,xt,It,Ft,ht,vt,Lt,G,mt,pt,zt,Nt,Pt,Yt;try{const C={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rm}`),i.addEventListener("webglcontextlost",Qt,!1),i.addEventListener("webglcontextrestored",he,!1),i.addEventListener("webglcontextcreationerror",Gt,!1),Z===null){const k="webgl2";if(Z=In(k,C),Z===null)throw In(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(C){throw i.removeEventListener("webglcontextlost",Qt,!1),i.removeEventListener("webglcontextrestored",he,!1),i.removeEventListener("webglcontextcreationerror",Gt,!1),We("WebGLRenderer: "+C.message),C}function ne(){He=new mR(Z),He.init(),Nt=new n3(Z,He),Ve=new aR(Z,He,e,Nt),Dt=new t3(Z,He),Ve.reversedDepthBuffer&&x&&Dt.buffers.depth.setReversed(!0),ut=Z.createFramebuffer(),X=Z.createFramebuffer(),nt=Z.createFramebuffer(),Xe=new _R(Z),Jt=new Hw,oe=new e3(Z,He,Dt,Jt,Ve,Nt,Xe),P=new pR(F),T=new Sb(Z),Pt=new nR(Z,T),at=new gR(Z,T,Xe,Pt),Ct=new SR(Z,at,T,Pt,Xe),mt=new xR(Z,Ve,oe),vt=new sR(Jt),xt=new Fw(F,P,He,Ve,Pt,vt),It=new l3(F,Jt),Ft=new Vw,ht=new Zw(He),G=new eR(F,P,Dt,Ct,b,m),Lt=new $w(F,Ct,Ve),Yt=new c3(Z,Xe,Ve,Dt),pt=new iR(Z,He,Xe),zt=new vR(Z,He,Xe),Xe.programs=xt.programs,F.capabilities=Ve,F.extensions=He,F.properties=Jt,F.renderLists=Ft,F.shadowMap=Lt,F.state=Dt,F.info=Xe}D!==Ni&&(H=new yR(D,i.width,i.height,d,l,u));const wt=new r3(F,Z);this.xr=wt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const C=He.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=He.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Rt},this.setPixelRatio=function(C){C!==void 0&&(Rt=C,this.setSize(Mt,At,!1))},this.getSize=function(C){return C.set(Mt,At)},this.setSize=function(C,k,ft=!0){if(wt.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=C,At=k,i.width=Math.floor(C*Rt),i.height=Math.floor(k*Rt),ft===!0&&(i.style.width=C+"px",i.style.height=k+"px"),H!==null&&H.setSize(i.width,i.height),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(Mt*Rt,At*Rt).floor()},this.setDrawingBufferSize=function(C,k,ft){Mt=C,At=k,Rt=ft,i.width=Math.floor(C*ft),i.height=Math.floor(k*ft),this.setViewport(0,0,C,k)},this.setEffects=function(C){if(D===Ni){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let k=0;k<C.length;k++)if(C[k].isOutputPass===!0){fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(gt)},this.getViewport=function(C){return C.copy(Tt)},this.setViewport=function(C,k,ft,Y){C.isVector4?Tt.set(C.x,C.y,C.z,C.w):Tt.set(C,k,ft,Y),Dt.viewport(gt.copy(Tt).multiplyScalar(xn()).round())},this.getScissor=function(C){return C.copy(Xt)},this.setScissor=function(C,k,ft,Y){C.isVector4?Xt.set(C.x,C.y,C.z,C.w):Xt.set(C,k,ft,Y),Dt.scissor(kt.copy(Xt).multiplyScalar(xn()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(C){Dt.setScissorTest(Te=C)},this.setOpaqueSort=function(C){Ht=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,ft=!0){let Y=0;if(C){let rt=!1;if(it!==null){const Ut=it.texture.format;rt=E.has(Ut)}if(rt){const Ut=it.texture.type,qt=y.has(Ut),Ot=G.getClearColor(),Bt=G.getClearAlpha(),Zt=Ot.r,dt=Ot.g,yt=Ot.b;qt?(w[0]=Zt,w[1]=dt,w[2]=yt,w[3]=Bt,Z.clearBufferuiv(Z.COLOR,0,w)):(O[0]=Zt,O[1]=dt,O[2]=yt,O[3]=Bt,Z.clearBufferiv(Z.COLOR,0,O))}else Y|=Z.COLOR_BUFFER_BIT}k&&(Y|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(Y|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&Z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),Q=C},this.dispose=function(){i.removeEventListener("webglcontextlost",Qt,!1),i.removeEventListener("webglcontextrestored",he,!1),i.removeEventListener("webglcontextcreationerror",Gt,!1),G.dispose(),Ft.dispose(),ht.dispose(),oe.dispose(),Jt.dispose(),P.dispose(),Ct.dispose(),at.dispose(),Pt.dispose(),Yt.dispose(),xt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Ki),wt.removeEventListener("sessionend",la),ca.stop()};function Qt(C){C.preventDefault(),Q_("WebGLRenderer: Context Lost."),V=!0}function he(){Q_("WebGLRenderer: Context Restored."),V=!1;const C=Xe.autoReset,k=Lt.enabled,ft=Lt.autoUpdate,Y=Lt.needsUpdate,rt=Lt.type;ne(),Xe.autoReset=C,Lt.enabled=k,Lt.autoUpdate=ft,Lt.needsUpdate=Y,Lt.type=rt}function Gt(C){We("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function De(C){const k=C.target;k.removeEventListener("dispose",De),cn(k)}function cn(C){zn(C),Jt.remove(C)}function zn(C){const k=Jt.get(C).programs;k!==void 0&&(k.forEach(function(ft){xt.releaseProgram(ft)}),C.isShaderMaterial&&xt.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,ft,Y,rt,Ut){k===null&&(k=hn);const qt=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Ot=ii(C,k,ft,Y,rt);Dt.setMaterial(Y,qt);let Bt=ft.index,Zt=1;if(Y.wireframe===!0){if(Bt=at.getWireframeAttribute(ft),Bt===void 0)return;Zt=2}const dt=ft.drawRange,yt=ft.attributes.position;let bt=dt.start*Zt,te=(dt.start+dt.count)*Zt;Ut!==null&&(bt=Math.max(bt,Ut.start*Zt),te=Math.min(te,(Ut.start+Ut.count)*Zt)),Bt!==null?(bt=Math.max(bt,0),te=Math.min(te,Bt.count)):yt!=null&&(bt=Math.max(bt,0),te=Math.min(te,yt.count));const Ie=te-bt;if(Ie<0||Ie===1/0)return;Pt.setup(rt,Y,Ot,ft,Bt);let ye,de=pt;if(Bt!==null&&(ye=T.get(Bt),de=zt,de.setIndex(ye)),rt.isMesh)Y.wireframe===!0?(Dt.setLineWidth(Y.wireframeLinewidth*xn()),de.setMode(Z.LINES)):de.setMode(Z.TRIANGLES);else if(rt.isLine){let Ke=Y.linewidth;Ke===void 0&&(Ke=1),Dt.setLineWidth(Ke*xn()),rt.isLineSegments?de.setMode(Z.LINES):rt.isLineLoop?de.setMode(Z.LINE_LOOP):de.setMode(Z.LINE_STRIP)}else rt.isPoints?de.setMode(Z.POINTS):rt.isSprite&&de.setMode(Z.TRIANGLES);if(rt.isBatchedMesh)if(He.get("WEBGL_multi_draw"))de.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const Ke=rt._multiDrawStarts,Kt=rt._multiDrawCounts,un=rt._multiDrawCount,pe=Bt?T.get(Bt).bytesPerElement:1,Vn=Jt.get(Y).currentProgram.getUniforms();for(let ee=0;ee<un;ee++)Vn.setValue(Z,"_gl_DrawID",ee),de.render(Ke[ee]/pe,Kt[ee])}else if(rt.isInstancedMesh)de.renderInstances(bt,Ie,rt.count);else if(ft.isInstancedBufferGeometry){const Ke=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Kt=Math.min(ft.instanceCount,Ke);de.renderInstances(bt,Ie,Kt)}else de.render(bt,Ie)};function ci(C,k,ft,Y){Q!==null&&C.isNodeMaterial&&Q.setObject(Y,C),Fe===!0&&vt.setState(C,ft,!1),C.transparent===!0&&C.side===qi&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,fi(C,k,Y),C.side=Hs,C.needsUpdate=!0,fi(C,k,Y),C.side=qi):fi(C,k,Y)}this.compile=function(C,k,ft=null){ft===null&&(ft=C),Q!==null&&Q.renderStart(C,k,ft),U=ht.get(ft),U.init(k),A.push(U),ft.traverseVisible(function(rt){rt.isLight&&rt.layers.test(k.layers)&&(U.pushLight(rt),rt.castShadow&&U.pushShadow(rt))}),C!==ft&&C.traverseVisible(function(rt){rt.isLight&&rt.layers.test(k.layers)&&(U.pushLight(rt),rt.castShadow&&U.pushShadow(rt))}),U.setupLights(),Q!==null&&Q.updateLights(U.state.lightsArray),Pe=this.localClippingEnabled,Fe=vt.init(this.clippingPlanes,Pe),Fe===!0&&vt.setGlobalState(this.clippingPlanes,k),Q!==null&&Lt.render(U.state.shadowsArray,ft,k);const Y=new Set;return C.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const Ut=rt.material;if(Ut)if(Array.isArray(Ut))for(let qt=0;qt<Ut.length;qt++){const Ot=Ut[qt];ci(Ot,ft,k,rt),Y.add(Ot)}else ci(Ut,ft,k,rt),Y.add(Ut)}),U=A.pop(),Q!==null&&Q.renderEnd(),Y},this.compileAsync=function(C,k,ft=null){const Y=this.compile(C,k,ft);return new Promise(rt=>{function Ut(){if(Y.forEach(function(qt){const Bt=Jt.get(qt).currentProgram;(Bt===void 0||Bt.isReady())&&Y.delete(qt)}),Y.size===0){rt(C);return}setTimeout(Ut,10)}He.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let ui=null;function xi(C){ui&&ui(C)}function Ki(){ca.stop()}function la(){ca.start()}const ca=new LS;ca.setAnimationLoop(xi),typeof self<"u"&&ca.setContext(self),this.setAnimationLoop=function(C){ui=C,wt.setAnimationLoop(C),C===null?ca.stop():ca.start()},wt.addEventListener("sessionstart",Ki),wt.addEventListener("sessionend",la),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Q!==null&&Q.renderStart(C,k);const ft=wt.enabled===!0&&wt.isPresenting===!0,Y=H!==null&&(it===null||ft)&&H.begin(F,it);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(k),k=wt.getCamera()),C.isScene===!0&&C.onBeforeRender(F,C,k,it),U=ht.get(C,A.length),U.init(k),U.state.textureUnits=oe.getTextureUnits(),A.push(U),re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?Ye.setFromArrayCamera(k):Se.setFromProjectionMatrix(re,oa,k.reversedDepth),Pe=this.localClippingEnabled,Fe=vt.init(this.clippingPlanes,Pe),I=Ft.get(C,M.length),I.init(),M.push(I),this.info.render.frame++,wt.enabled===!0&&wt.isPresenting===!0){const qt=F.xr.getDepthSensingMesh();qt!==null&&ua(qt,k,-1/0,F.sortObjects)}ua(C,k,0,F.sortObjects),I.finish(),Q!==null&&Q.updateLights(U.state.lightsArray),F.sortObjects===!0&&I.sort(Ht,se),yn=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,yn&&G.addToRenderList(I,C),this.info.autoReset===!0&&this.info.reset(),Fe===!0&&vt.beginShadows();const rt=U.state.shadowsArray;if(Lt.render(rt,C,k),Fe===!0&&vt.endShadows(),(Y&&H.hasRenderPass())===!1){const qt=I.opaque,Ot=I.transmissive;if(U.setupLights(),k.isArrayCamera){const Bt=k.cameras;if(Ot.length>0)for(let Zt=0,dt=Bt.length;Zt<dt;Zt++){const yt=Bt[Zt];Qi(qt,Ot,C,yt)}yn&&G.render(C);for(let Zt=0,dt=Bt.length;Zt<dt;Zt++){const yt=Bt[Zt];Na(I,C,yt,yt.viewport)}}else Ot.length>0&&Qi(qt,Ot,C,k),yn&&G.render(C),Na(I,C,k)}it!==null&&z===0&&(oe.updateMultisampleRenderTarget(it),oe.updateRenderTargetMipmap(it)),Y&&H.end(F),C.isScene===!0&&C.onAfterRender(F,C,k),Pt.resetDefaultState(),tt=-1,lt=null,A.pop(),A.length>0?(U=A[A.length-1],oe.setTextureUnits(U.state.textureUnits),Fe===!0&&vt.setGlobalState(F.clippingPlanes,U.state.camera)):U=null,M.pop(),M.length>0?I=M[M.length-1]:I=null,Q!==null&&Q.renderEnd()};function ua(C,k,ft,Y){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)ft=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)U.pushLight(C),C.castShadow&&U.pushShadow(C);else if(C.isSprite){const qt=k.isArrayCamera?Ye:Se;if(!C.frustumCulled||C.intersectsFrustum(qt)){Y&&an.setFromMatrixPosition(C.matrixWorld).applyMatrix4(re);const Ot=Ct.update(C),Bt=C.material;Bt.visible&&I.push(C,Ot,Bt,ft,an.z,null,k)}}else if(C.isMesh||C.isLine||C.isPoints){const qt=k.isArrayCamera?Ye:Se;if(!C.frustumCulled||C.intersectsFrustum(qt)){const Ot=Ct.update(C),Bt=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),an.copy(C.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),an.copy(Ot.boundingSphere.center)),an.applyMatrix4(C.matrixWorld).applyMatrix4(re)),Array.isArray(Bt)){const Zt=Ot.groups;for(let dt=0,yt=Zt.length;dt<yt;dt++){const bt=Zt[dt],te=Bt[bt.materialIndex];te&&te.visible&&I.push(C,Ot,te,ft,an.z,bt,k)}}else Bt.visible&&I.push(C,Ot,Bt,ft,an.z,null,k)}}}const Ut=C.children;for(let qt=0,Ot=Ut.length;qt<Ot;qt++)ua(Ut[qt],k,ft,Y)}function Na(C,k,ft,Y){const{opaque:rt,transmissive:Ut,transparent:qt}=C;U.setupLightsView(ft),Fe===!0&&vt.setGlobalState(F.clippingPlanes,ft),Y&&Dt.viewport(gt.copy(Y)),rt.length>0&&is(rt,k,ft),Ut.length>0&&is(Ut,k,ft),qt.length>0&&is(qt,k,ft),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Qi(C,k,ft,Y){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[Y.id]===void 0){const bt=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[Y.id]=new wa(1,1,{generateMipmaps:!0,type:bt?Da:Ni,minFilter:Bs,samples:Math.max(4,Ve.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const Ut=U.state.transmissionRenderTarget[Y.id],qt=Y.viewport||gt;Ut.setSize(qt.z*F.transmissionResolutionScale,qt.w*F.transmissionResolutionScale);const Ot=F.getRenderTarget(),Bt=F.getActiveCubeFace(),Zt=F.getActiveMipmapLevel();F.setRenderTarget(Ut),F.getClearColor(L),et=F.getClearAlpha(),et<1&&F.setClearColor(16777215,.5),F.clear(),yn&&G.render(ft);const dt=F.toneMapping;F.toneMapping=$a;const yt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),U.setupLightsView(Y),Fe===!0&&vt.setGlobalState(F.clippingPlanes,Y),is(C,ft,Y),oe.updateMultisampleRenderTarget(Ut),oe.updateRenderTargetMipmap(Ut),He.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let te=0,Ie=k.length;te<Ie;te++){const ye=k[te],{object:de,geometry:Ke,material:Kt,group:un}=ye;if(Kt.side===qi&&de.layers.test(Y.layers)){const pe=Kt.side;Kt.side=Jn,Kt.needsUpdate=!0,Xs(de,ft,Y,Ke,Kt,un),Kt.side=pe,Kt.needsUpdate=!0,bt=!0}}bt===!0&&(oe.updateMultisampleRenderTarget(Ut),oe.updateRenderTargetMipmap(Ut))}F.setRenderTarget(Ot,Bt,Zt),F.setClearColor(L,et),yt!==void 0&&(Y.viewport=yt),F.toneMapping=dt}function is(C,k,ft){const Y=k.isScene===!0?k.overrideMaterial:null;for(let rt=0,Ut=C.length;rt<Ut;rt++){const qt=C[rt],{object:Ot,geometry:Bt,group:Zt}=qt;let dt=qt.material;dt.allowOverride===!0&&Y!==null&&(dt=Y),Ot.layers.test(ft.layers)&&Xs(Ot,k,ft,Bt,dt,Zt)}}function Xs(C,k,ft,Y,rt,Ut){Q!==null&&rt.isNodeMaterial&&Q.setObject(C,rt),C.onBeforeRender(F,k,ft,Y,rt,Ut),C.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),rt.onBeforeRender(F,k,ft,Y,C,Ut),rt.transparent===!0&&rt.side===qi&&rt.forceSinglePass===!1?(rt.side=Jn,rt.needsUpdate=!0,F.renderBufferDirect(ft,k,Y,rt,C,Ut),rt.side=Hs,rt.needsUpdate=!0,F.renderBufferDirect(ft,k,Y,rt,C,Ut),rt.side=qi):F.renderBufferDirect(ft,k,Y,rt,C,Ut),C.onAfterRender(F,k,ft,Y,rt,Ut)}function as(C){let k=0;for(const ft of C)ft.texture!==null&&k++;return k}function fi(C,k,ft){k.isScene!==!0&&(k=hn);const Y=Jt.get(C),rt=U.state.lights,Ut=U.state.shadowsArray,qt=rt.state.version,Ot=xt.getParameters(C,rt.state,Ut,k,ft,U.state.lightProbeGridArray),Bt=xt.getProgramCacheKey(Ot);let Zt=Y.programs;Y.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;const dt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Y.envMap=P.get(C.envMap||Y.environment,dt),Y.envMapRotation=Y.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Zt===void 0&&(C.addEventListener("dispose",De),Zt=new Map,Y.programs=Zt,Y.programVariants=new Map);let yt=Zt.get(Bt);if(yt!==void 0){if(Y.currentProgram===yt&&Y.lightsStateVersion===qt)return Ws(C,Ot),yt}else Ot.uniforms=xt.getUniforms(C),Q!==null&&C.isNodeMaterial&&Q.build(C,ft,Ot),C.onBeforeCompile(Ot,F),yt=xt.acquireProgram(Ot,Bt),Zt.set(Bt,yt),Y.uniforms=Ot.uniforms;const bt=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(bt.clippingPlanes=vt.uniform),Ws(C,Ot),Y.needsLights=En(C),Y.lightsStateVersion=qt,Y.needsLights&&(bt.ambientLightColor.value=rt.state.ambient,bt.lightProbe.value=rt.state.probe,bt.sunLights.value=rt.state.sun,bt.sunLightShadows.value=rt.state.sunShadow,bt.directionalLights.value=rt.state.directional,bt.directionalLightShadows.value=rt.state.directionalShadow,bt.spotLights.value=rt.state.spot,bt.spotLightShadows.value=rt.state.spotShadow,bt.rectAreaLights.value=rt.state.rectArea,bt.ltc_1.value=rt.state.rectAreaLTC1,bt.ltc_2.value=rt.state.rectAreaLTC2,bt.pointLights.value=rt.state.point,bt.pointLightShadows.value=rt.state.pointShadow,bt.hemisphereLights.value=rt.state.hemi,bt.sunShadowMatrix.value=rt.state.sunShadowMatrix,bt.sunShadowCascade.value=rt.state.sunShadowCascade,bt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,bt.spotLightMatrix.value=rt.state.spotLightMatrix,bt.spotLightMap.value=rt.state.spotLightMap,bt.pointShadowMatrix.value=rt.state.pointShadowMatrix),Y.numLightProbeGrids=as(U.state.lightProbeGridArray),Y.currentProgram=yt,Y.uniformsList=null,yt}function ks(C,k,ft,Y,rt){const Ut=Jt.get(C),qt=Ut.currentProgram.id+","+Y+","+rt;let Ot=Ut.programVariants.get(qt);return Ot===void 0?(Ot=fi(C,k,ft),Ut.programVariants.set(qt,Ot)):(Ut.currentProgram=Ot,Ut.uniformsList=null,Ut.outputColorSpace=Y,Ut.toneMapping=rt),Ot}function La(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Zu.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Ws(C,k){const ft=Jt.get(C);ft.outputColorSpace=k.outputColorSpace,ft.batching=k.batching,ft.batchingColor=k.batchingColor,ft.instancing=k.instancing,ft.instancingColor=k.instancingColor,ft.instancingMorph=k.instancingMorph,ft.skinning=k.skinning,ft.morphTargets=k.morphTargets,ft.morphNormals=k.morphNormals,ft.morphColors=k.morphColors,ft.morphTargetsCount=k.morphTargetsCount,ft.numClippingPlanes=k.numClippingPlanes,ft.numIntersection=k.numClipIntersection,ft.vertexAlphas=k.vertexAlphas,ft.vertexTangents=k.vertexTangents,ft.toneMapping=k.toneMapping}function ii(C,k,ft,Y,rt){k.isScene!==!0&&(k=hn),oe.resetTextureUnits();const Ut=k.fog,qt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,Ot=it===null?F.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ze.workingColorSpace,Bt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Zt=P.get(Y.envMap||qt,Bt),dt=Y.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,yt=!!ft.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),bt=!!ft.morphAttributes.position,te=!!ft.morphAttributes.normal,Ie=!!ft.morphAttributes.color;let ye=$a;Y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ye=F.toneMapping);const de=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Ke=de!==void 0?de.length:0,Kt=Jt.get(Y),un=U.state.lights;if(Fe===!0&&(Pe===!0||C!==lt)){const Qe=C===lt&&Y.id===tt;vt.setState(Y,C,Qe)}let pe=!1,Vn=!1;Y.version===Kt.__version?Kt.needsLights&&Kt.lightsStateVersion!==un.state.version||rt.isBatchedMesh&&Kt.batching===!1||!rt.isBatchedMesh&&Kt.batching===!0||rt.isBatchedMesh&&Kt.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&Kt.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&Kt.instancing===!1||!rt.isInstancedMesh&&Kt.instancing===!0||rt.isSkinnedMesh&&Kt.skinning===!1||!rt.isSkinnedMesh&&Kt.skinning===!0||rt.isInstancedMesh&&Kt.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Kt.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Kt.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Kt.instancingMorph===!1&&rt.morphTexture!==null||Kt.envMap!==Zt||Y.fog===!0&&Kt.fog!==Ut||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==vt.numPlanes||Kt.numIntersection!==vt.numIntersection)||Kt.vertexAlphas!==dt||Kt.vertexTangents!==yt||Kt.morphTargets!==bt||Kt.morphNormals!==te||Kt.morphColors!==Ie||Kt.morphTargetsCount!==Ke||Kt.numLightProbeGrids!==as(U.state.lightProbeGridArray)?pe=!0:(Kt.outputColorSpace!==Ot||Kt.toneMapping!==ye)&&(Vn=!0):(pe=!0,Kt.__version=Y.version);let ee=Kt.currentProgram;(pe===!0||Vn===!0)&&(ee=Vn===!0?ks(Y,k,rt,Ot,ye):fi(Y,k,rt),Q&&Y.isNodeMaterial&&Q.onUpdateProgram(Y,ee,Kt));let Xn=!1,Ge=!1,we=!1;const le=ee.getUniforms(),me=Kt.uniforms;if(Dt.useProgram(ee.program)&&(Xn=!0,Ge=!0,we=!0),Y.id!==tt&&(tt=Y.id,Ge=!0),Xn||lt!==C){Dt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),le.setValue(Z,"projectionMatrix",C.projectionMatrix),le.setValue(Z,"viewMatrix",C.matrixWorldInverse);const pn=le.map.cameraPosition;pn!==void 0&&pn.setValue(Z,Ze.setFromMatrixPosition(C.matrixWorld)),Ve.logarithmicDepthBuffer&&le.setValue(Z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&le.setValue(Z,"isOrthographic",C.isOrthographicCamera===!0),lt!==C&&(lt=C,Ge=!0,we=!0)}if(Kt.needsLights&&(un.state.sunShadowMap.length>0&&le.setValue(Z,"sunShadowMap",un.state.sunShadowMap,oe),un.state.directionalShadowMap.length>0&&le.setValue(Z,"directionalShadowMap",un.state.directionalShadowMap,oe),un.state.spotShadowMap.length>0&&le.setValue(Z,"spotShadowMap",un.state.spotShadowMap,oe),un.state.pointShadowMap.length>0&&le.setValue(Z,"pointShadowMap",un.state.pointShadowMap,oe)),rt.isSkinnedMesh){le.setOptional(Z,rt,"bindMatrix"),le.setOptional(Z,rt,"bindMatrixInverse");const Qe=rt.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),le.setValue(Z,"boneTexture",Qe.boneTexture,oe))}rt.isBatchedMesh&&(le.setOptional(Z,rt,"batchingTexture"),le.setValue(Z,"batchingTexture",rt._matricesTexture,oe),le.setOptional(Z,rt,"batchingIdTexture"),le.setValue(Z,"batchingIdTexture",rt._indirectTexture,oe),le.setOptional(Z,rt,"batchingColorTexture"),rt._colorsTexture!==null&&le.setValue(Z,"batchingColorTexture",rt._colorsTexture,oe));const dn=ft.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&mt.update(rt,ft,ee),(Ge||Kt.receiveShadow!==rt.receiveShadow)&&(Kt.receiveShadow=rt.receiveShadow,le.setValue(Z,"receiveShadow",rt.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(me.envMapIntensity.value=k.environmentIntensity),me.dfgLUT!==void 0&&(me.dfgLUT.value=f3()),Ge){if(le.setValue(Z,"toneMappingExposure",F.toneMappingExposure),Kt.needsLights&&ce(me,we),Ut&&Y.fog===!0&&It.refreshFogUniforms(me,Ut),It.refreshMaterialUniforms(me,Y,Rt,At,U.state.transmissionRenderTarget[C.id]),Kt.needsLights&&Kt.numLightProbeGrids>0){const Qe=N;let pn=0;for(const Li of U.state.lightProbeGridArray)Li.texture!==null&&(Qe.textures[pn]=Li.texture,Qe.min[pn]=Li.boundingBox.min,Qe.max[pn]=Li.boundingBox.max,Qe.resolution[pn]=Li.resolution,pn++);for(const Li in Qe)Qe[Li].length=pn;me.probesSH.value=Qe.textures,me.probesMin.value=Qe.min,me.probesMax.value=Qe.max,me.probesResolution.value=Qe.resolution}Zu.upload(Z,La(Kt),me,oe)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Zu.upload(Z,La(Kt),me,oe),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&le.setValue(Z,"center",rt.center),le.setValue(Z,"modelViewMatrix",rt.modelViewMatrix),le.setValue(Z,"normalMatrix",rt.normalMatrix),le.setValue(Z,"modelMatrix",rt.matrixWorld),Y.uniformsGroups!==void 0){const Qe=Y.uniformsGroups;for(let pn=0,Li=Qe.length;pn<Li;pn++){const ql=Qe[pn];Yt.update(ql,ee),Yt.bind(ql,ee)}}return ee}function ce(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.sunLights.needsUpdate=k,C.sunLightShadows.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function En(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(C,k,ft){const Y=Jt.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Jt.get(C.texture).__webglTexture=k,Jt.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:ft,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const ft=Jt.get(C);ft.__webglFramebuffer=k,ft.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,ft=0){it=C,q=k,z=ft;let Y=null,rt=!1,Ut=!1;if(C){const Ot=Jt.get(C);if(Ot.__useDefaultFramebuffer!==void 0){Dt.bindFramebuffer(Z.FRAMEBUFFER,Ot.__webglFramebuffer),gt.copy(C.viewport),kt.copy(C.scissor),ae=C.scissorTest,Dt.viewport(gt),Dt.scissor(kt),Dt.setScissorTest(ae),tt=-1;return}else if(Ot.__webglFramebuffer===void 0)oe.setupRenderTarget(C);else if(Ot.__hasExternalTextures)oe.rebindTextures(C,Jt.get(C.texture).__webglTexture,Jt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const dt=C.depthTexture;if(Ot.__boundDepthTexture!==dt){if(dt!==null&&Jt.has(dt)&&(C.width!==dt.image.width||C.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(C)}}const Bt=C.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Ut=!0);const Zt=Jt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Zt[k])?Y=Zt[k][ft]:Y=Zt[k],rt=!0):C.samples>0&&oe.useMultisampledRTT(C)===!1?Y=Jt.get(C).__webglMultisampledFramebuffer:Array.isArray(Zt)?Y=Zt[ft]:Y=Zt,gt.copy(C.viewport),kt.copy(C.scissor),ae=C.scissorTest}else gt.copy(Tt).multiplyScalar(Rt).floor(),kt.copy(Xt).multiplyScalar(Rt).floor(),ae=Te;if(ft!==0&&(Y=ut),Dt.bindFramebuffer(Z.FRAMEBUFFER,Y)&&Dt.drawBuffers(C,Y),Dt.viewport(gt),Dt.scissor(kt),Dt.setScissorTest(ae),rt){const Ot=Jt.get(C.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ot.__webglTexture,ft)}else if(Ut){const Ot=k;for(let Bt=0;Bt<C.textures.length;Bt++){const Zt=Jt.get(C.textures[Bt]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Bt,Zt.__webglTexture,ft,Ot)}}else if(C!==null&&ft!==0){const Ot=Jt.get(C.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ot.__webglTexture,ft)}tt=-1};function An(C){const k=Jt.get(C);return(k.__readFormat!==C.format||k.__readType!==C.type)&&(k.__readFormat=C.format,k.__readType=C.type,k.__formatReadable=Ve.textureFormatReadable(C.format),k.__typeReadable=Ve.textureTypeReadable(C.type)),k}this.readRenderTargetPixels=function(C,k,ft,Y,rt,Ut,qt,Ot=0){if(!(C&&C.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Jt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qt!==void 0&&(Bt=Bt[qt],Array.isArray(Bt)&&(Bt=Bt[0])),Bt){Dt.bindFramebuffer(Z.FRAMEBUFFER,Bt);try{const Zt=C.textures[Ot],dt=Zt.format,yt=Zt.type;C.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ot);const bt=An(Zt);if(bt.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-Y&&ft>=0&&ft<=C.height-rt&&Z.readPixels(k,ft,Y,rt,Nt.convert(dt),Nt.convert(yt),Ut)}finally{const Zt=it!==null?Jt.get(it).__webglFramebuffer:null;Dt.bindFramebuffer(Z.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(C,k,ft,Y,rt,Ut,qt,Ot=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Jt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qt!==void 0&&(Bt=Bt[qt],Array.isArray(Bt)&&(Bt=Bt[0])),Bt)if(k>=0&&k<=C.width-Y&&ft>=0&&ft<=C.height-rt){Dt.bindFramebuffer(Z.FRAMEBUFFER,Bt);const Zt=C.textures[Ot],dt=Zt.format,yt=Zt.type;C.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ot);const bt=An(Zt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,te),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ut.byteLength,Z.STREAM_READ),Z.readPixels(k,ft,Y,rt,Nt.convert(dt),Nt.convert(yt),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);const Ie=it!==null?Jt.get(it).__webglFramebuffer:null;Dt.bindFramebuffer(Z.FRAMEBUFFER,Ie);const ye=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await M1(Z,ye,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,te),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ut),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(te),Z.deleteSync(ye),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,ft=0){const Y=Math.pow(2,-ft),rt=Math.floor(C.image.width*Y),Ut=Math.floor(C.image.height*Y),qt=k!==null?k.x:0,Ot=k!==null?k.y:0;oe.setTexture2D(C,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ft,0,0,qt,Ot,rt,Ut),Dt.unbindTexture()},this.copyTextureToTexture=function(C,k,ft=null,Y=null,rt=0,Ut=0){let qt,Ot,Bt,Zt,dt,yt,bt,te,Ie;const ye=C.isCompressedTexture?C.mipmaps[Ut]:C.image;if(ft!==null)qt=ft.max.x-ft.min.x,Ot=ft.max.y-ft.min.y,Bt=ft.isBox3?ft.max.z-ft.min.z:1,Zt=ft.min.x,dt=ft.min.y,yt=ft.isBox3?ft.min.z:0;else{const le=Math.pow(2,-rt);qt=Math.floor(ye.width*le),Ot=Math.floor(ye.height*le),C.isDataArrayTexture?Bt=ye.depth:C.isData3DTexture?Bt=Math.floor(ye.depth*le):Bt=1,Zt=0,dt=0,yt=0}Y!==null?(bt=Y.x,te=Y.y,Ie=Y.z):(bt=0,te=0,Ie=0);const de=Nt.convert(k.format),Ke=Nt.convert(k.type);let Kt;k.isData3DTexture?(oe.setTexture3D(k,0),Kt=Z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(oe.setTexture2DArray(k,0),Kt=Z.TEXTURE_2D_ARRAY):(oe.setTexture2D(k,0),Kt=Z.TEXTURE_2D),Dt.activeTexture(Z.TEXTURE0),Dt.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,k.flipY),Dt.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Dt.pixelStorei(Z.UNPACK_ALIGNMENT,k.unpackAlignment);const un=Dt.getParameter(Z.UNPACK_ROW_LENGTH),pe=Dt.getParameter(Z.UNPACK_IMAGE_HEIGHT),Vn=Dt.getParameter(Z.UNPACK_SKIP_PIXELS),ee=Dt.getParameter(Z.UNPACK_SKIP_ROWS),Xn=Dt.getParameter(Z.UNPACK_SKIP_IMAGES);Dt.pixelStorei(Z.UNPACK_ROW_LENGTH,ye.width),Dt.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ye.height),Dt.pixelStorei(Z.UNPACK_SKIP_PIXELS,Zt),Dt.pixelStorei(Z.UNPACK_SKIP_ROWS,dt),Dt.pixelStorei(Z.UNPACK_SKIP_IMAGES,yt);const Ge=C.isDataArrayTexture||C.isData3DTexture,we=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const le=Jt.get(C),me=Jt.get(k),dn=Jt.get(le.__renderTarget),Qe=Jt.get(me.__renderTarget);Dt.bindFramebuffer(Z.READ_FRAMEBUFFER,dn.__webglFramebuffer),Dt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let pn=0;pn<Bt;pn++)Ge&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Jt.get(C).__webglTexture,rt,yt+pn),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Jt.get(k).__webglTexture,Ut,Ie+pn)),Z.blitFramebuffer(Zt,dt,Zt+qt,dt+Ot,bt,te,bt+qt,te+Ot,Z.DEPTH_BUFFER_BIT,Z.NEAREST);Dt.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(rt!==0||C.isRenderTargetTexture||Jt.has(C)){const le=Jt.get(C),me=Jt.get(k);Dt.bindFramebuffer(Z.READ_FRAMEBUFFER,X),Dt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,nt);for(let dn=0;dn<Bt;dn++)Ge?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,le.__webglTexture,rt,yt+dn):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,le.__webglTexture,rt),we?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,me.__webglTexture,Ut,Ie+dn):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,me.__webglTexture,Ut),rt!==0?Z.blitFramebuffer(Zt,dt,Zt+qt,dt+Ot,bt,te,bt+qt,te+Ot,Z.COLOR_BUFFER_BIT,Z.NEAREST):we?Z.copyTexSubImage3D(Kt,Ut,bt,te,Ie+dn,Zt,dt,qt,Ot):Z.copyTexSubImage2D(Kt,Ut,bt,te,Zt,dt,qt,Ot);Dt.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else we?C.isDataTexture||C.isData3DTexture?Z.texSubImage3D(Kt,Ut,bt,te,Ie,qt,Ot,Bt,de,Ke,ye.data):k.isCompressedArrayTexture?Z.compressedTexSubImage3D(Kt,Ut,bt,te,Ie,qt,Ot,Bt,de,ye.data):Z.texSubImage3D(Kt,Ut,bt,te,Ie,qt,Ot,Bt,de,Ke,ye):C.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ut,bt,te,qt,Ot,de,Ke,ye.data):C.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ut,bt,te,ye.width,ye.height,de,ye.data):Z.texSubImage2D(Z.TEXTURE_2D,Ut,bt,te,qt,Ot,de,Ke,ye);Dt.pixelStorei(Z.UNPACK_ROW_LENGTH,un),Dt.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,pe),Dt.pixelStorei(Z.UNPACK_SKIP_PIXELS,Vn),Dt.pixelStorei(Z.UNPACK_SKIP_ROWS,ee),Dt.pixelStorei(Z.UNPACK_SKIP_IMAGES,Xn),Ut===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&Z.generateMipmap(Kt),Dt.unbindTexture()},this.initRenderTarget=function(C){Jt.get(C).__webglFramebuffer===void 0&&oe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?oe.setTextureCube(C,0):C.isData3DTexture?oe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?oe.setTexture2DArray(C,0):oe.setTexture2D(C,0),Dt.unbindTexture()},this.resetState=function(){q=0,z=0,it=null,Dt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),i.unpackColorSpace=ze._getUnpackColorSpace()}}class d3 extends xS{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Ra;e.deleteAttribute("uv");const i=new ba({side:Jn}),s=new ba,l=new pb(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const u=new ge(e,i);u.position.set(-.757,13.219,.717),u.scale.set(31.713,28.305,28.591),this.add(u);const h=new Z1(e,s,6),d=new Un;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const m=new ge(e,yo(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new ge(e,yo(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new ge(e,yo(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const g=new ge(e,yo(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const x=new ge(e,yo(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);const S=new ge(e,yo(100));S.position.set(0,20,0),S.scale.set(1,.1,1),this.add(S)}dispose(){const e=new Set;this.traverse(i=>{i.isMesh&&(e.add(i.geometry),e.add(i.material))});for(const i of e)i.dispose()}}function yo(o){return new wS({color:0,emissive:16777215,emissiveIntensity:o})}function p3(o){const e=o*.5,i=[-e,-e,-e],s=[e,-e,-e],l=[e,-e,e],u=[-e,-e,e],h=[e,e,e],d=new Float32Array([...i,...s,...l,...i,...l,...u,...u,...l,...h,...l,...s,...h,...s,...i,...h,...i,...u,...h]),m=new Tn;return m.setAttribute("position",new vi(d,3)),m.computeVertexNormals(),m}function m3(o,e,i){const s=(90-o)*(Math.PI/180),l=(e+180)*(Math.PI/180);return new K(-i*Math.sin(s)*Math.cos(l),i*Math.cos(s),i*Math.sin(s)*Math.sin(l))}const g3={"ecology-carbon":"#34d399","space-suhail":"#fbbf24","energy-circuits":"#38bdf8","spatial-geometry":"#c084fc"},v3=({activeWorld:o,lang:e,isDiving:i,paused:s=!1})=>{const l=gn.useRef(null),u=gn.useRef({activeWorld:o,lang:e,isDiving:i,paused:s});return u.current={activeWorld:o,lang:e,isDiving:i,paused:s},gn.useEffect(()=>{const h=l.current;if(!h)return;const d=new xS;d.background=new _e("#03060c");const m=new Wi(42,window.innerWidth/window.innerHeight,.1,120);m.position.set(0,.1,5.6);const p=new h3({antialias:!0,powerPreference:"high-performance"});p.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),p.setSize(window.innerWidth,window.innerHeight),p.toneMapping=lm,p.toneMappingExposure=1.12,h.appendChild(p.domElement);const _=new Xl(p);d.environment=_.fromScene(new d3,.04).texture,d.environmentIntensity=.65;const g=new gb("#8fb3d9",.5);d.add(g);const x=new Rx("#fff5db",2.7);x.position.set(4.5,2.4,4.8),d.add(x);const S=new Rx("#10b981",1.25);S.position.set(-4.5,-1.5,-2.5),d.add(S);const b=1750,D=new Float32Array(b*3),E=new Float32Array(b*3),y=new Float32Array(b);for(let dt=0;dt<b;dt++){const yt=16+Math.random()*44,bt=Math.random()*Math.PI*2,te=Math.acos(2*Math.random()-1);D[dt*3]=yt*Math.sin(te)*Math.cos(bt),D[dt*3+1]=yt*Math.sin(te)*Math.sin(bt),D[dt*3+2]=-Math.abs(yt*Math.cos(te))-4;const Ie=Math.random(),ye=Ie<.25?new _e("#fde68a"):Ie<.6?new _e("#bae6fd"):new _e("#f8fafc");E[dt*3]=ye.r,E[dt*3+1]=ye.g,E[dt*3+2]=ye.b,y[dt]=Math.random()*Math.PI*2}const w=new Tn;w.setAttribute("position",new vi(D,3)),w.setAttribute("color",new vi(E,3)),w.setAttribute("aPhase",new vi(y,1));const O=new Zi({transparent:!0,depthWrite:!1,blending:ki,vertexColors:!0,uniforms:{uTime:{value:0}},vertexShader:`
        attribute float aPhase;
        varying vec3 vColor;
        varying float vTwinkle;
        uniform float uTime;
        void main() {
          vColor = color;
          vTwinkle = 0.62 + 0.38 * sin(uTime * 2.2 + aPhase);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (1.6 + 1.4 * sin(aPhase * 3.7)) * (24.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vTwinkle;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5)) * 2.0;
          if (d > 1.0) discard;
          float core = exp(-d * d * 4.5);
          gl_FragColor = vec4(vColor * core, core * 0.85 * vTwinkle);
        }
      `}),N=new xx(w,O);d.add(N);const I=new Float32Array(6),U=new Tn;U.setAttribute("position",new vi(I,3));const M=new em({color:"#fef08a",transparent:!0,opacity:0,blending:ki,depthWrite:!1}),A=new vx(U,M);d.add(A);const H={active:!1,cooldown:2.2,life:0,maxLife:.85,x:0,y:0,z:-12,vx:-9,vy:-4.5},F=new fn;d.add(F);const V=new fn;F.add(V);const Q=new ja({color:"#34d399",transparent:!0,opacity:0,side:qi,blending:ki,depthWrite:!1}),ut=new ge(new Il(1.35,1.44,64),Q);F.add(ut);let X=1;const nt=new fn;V.add(nt);const q=Math.min(8,p.capabilities.getMaxAnisotropy()||4),z=new hb,it=z.load("./textures/earth-day.jpg");it.colorSpace=Di,it.anisotropy=q;const tt=z.load("./textures/earth-normal.jpg");tt.anisotropy=q;const lt=z.load("./textures/earth-clouds.png");lt.anisotropy=q;const gt=new fn;gt.rotation.set(.36,-2.32,-.08),nt.add(gt);const kt=new ge(new Ci(1.42,64,64),new ba({map:it,normalMap:tt,normalScale:new Me(.28,.28),roughness:.78,metalness:.04,transparent:!0,opacity:1}));gt.add(kt);const ae=new ge(new Ci(1.442,48,48),new wS({map:lt,transparent:!0,opacity:.36,blending:ki,depthWrite:!1}));gt.add(ae);const L=new Zi({transparent:!0,side:Jn,blending:ki,depthWrite:!1,uniforms:{uColorA:{value:new _e("#10b981")},uColorB:{value:new _e("#38bdf8")},uOpacity:{value:1}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vViewDir;
        void main() {
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vNormal = normalize(normalMatrix * normal);
          vViewDir = normalize(-mvPos.xyz);
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform float uOpacity;
        varying vec3 vNormal;
        varying vec3 vViewDir;
        void main() {
          float fresnel = pow(1.0 - max(0.0, dot(vNormal, vViewDir)), 2.8);
          vec3 col = mix(uColorB, uColorA, 0.55);
          gl_FragColor = vec4(col, fresnel * 0.78 * uOpacity);
        }
      `}),et=new ge(new Ci(1.62,48,48),L);nt.add(et);const Mt=[{lat:25.38,lon:49.58},{lat:24.85,lon:46.35},{lat:18.25,lon:42.45},{lat:20.5,lon:39.8},{lat:20.2,lon:50.8}],At=[],Rt=[],Ht=[];Mt.forEach(dt=>{const yt=m3(dt.lat,dt.lon,1.445);Ht.push(yt);const bt=new ge(new Ci(.028,16,16),new ja({color:"#fde047",transparent:!0,opacity:1}));bt.position.copy(yt),gt.add(bt),Rt.push(bt);const te=new ge(new Il(.04,.068,24),new ja({color:"#34d399",side:qi,transparent:!0,opacity:.85}));te.position.copy(yt.clone().multiplyScalar(1.004)),te.lookAt(yt.clone().multiplyScalar(2)),gt.add(te),At.push(te)});const se=[],Tt=[];[[0,1],[1,2],[2,3],[1,4],[4,0]].forEach(([dt,yt])=>{const bt=Ht[dt],te=Ht[yt],Ie=bt.clone().add(te).multiplyScalar(.5).normalize().multiplyScalar(1.58),ye=new eb(bt,Ie,te);Tt.push(ye);const de=new Tn().setFromPoints(ye.getPoints(28)),Ke=new em({color:"#6ee7b7",transparent:!0,opacity:.48,blending:ki,depthWrite:!1}),Kt=new vx(de,Ke);gt.add(Kt),se.push(Kt)});const Te=new ge(new Ci(.032,12,12),new ja({color:"#fef08a",transparent:!0,opacity:1,blending:ki}));gt.add(Te);const Se=170,Ye=new Float32Array(Se*3);for(let dt=0;dt<Se;dt++){const yt=1.65+Math.random()*.85,bt=Math.random()*Math.PI*2,te=(Math.random()-.5)*2.2;Ye[dt*3]=Math.cos(bt)*yt,Ye[dt*3+1]=te,Ye[dt*3+2]=Math.sin(bt)*yt}const Fe=new Tn;Fe.setAttribute("position",new vi(Ye,3));const Pe=new ES({color:"#6ee7b7",size:.044,transparent:!0,opacity:.78,blending:ki,depthWrite:!1}),re=new xx(Fe,Pe);nt.add(re);const Ze=new fn;V.add(Ze);const an=new Zi({transparent:!0,blending:ki,depthWrite:!1,uniforms:{uTime:{value:0},uOpacity:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv * 2.0 - 1.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uOpacity;
        varying vec2 vUv;

        void main() {
          float r = length(vUv);
          float angle = atan(vUv.y, vUv.x);

          // Fibrous MHD Solar Corona Streamers
          float rays = 0.5 + 0.5 * sin(angle * 11.0 + uTime * 0.45);
          rays += 0.35 * sin(angle * 23.0 - uTime * 0.7);
          rays += 0.2 * cos(angle * 7.0 + r * 4.0);
          rays = clamp(rays * 0.62, 0.25, 1.25);

          float moonRadius = 0.315;
          float innerMask = smoothstep(moonRadius - 0.012, moonRadius + 0.015, r);
          float coronaFalloff = exp(-max(0.0, r - moonRadius) * 4.2) * innerMask;
          float streamerGlow = exp(-max(0.0, r - moonRadius) * 2.45) * rays * 0.55 * innerMask;

          // Ruby-Crimson Solar Prominences dancing along the limb!
          float promWave = pow(max(0.0, sin(angle * 6.0 + uTime * 0.8) * cos(angle * 9.0 - uTime * 0.5)), 3.0);
          float promFlame = exp(-abs(r - (moonRadius + 0.014)) * 62.0) * (0.65 + 1.45 * promWave);

          // Diamond Ring Jewel at upper-left limb
          vec2 diamondPos = vec2(-0.232, 0.214);
          float dDist = length(vUv - diamondPos);
          float diamondCore = exp(-dDist * 22.0) * 2.05;
          float anamorphicStreak = exp(-abs(vUv.y - diamondPos.y) * 58.0) * exp(-abs(vUv.x - diamondPos.x) * 3.6) * 0.9;

          vec3 colGold = vec3(1.0, 0.82, 0.42);
          vec3 colWarm = vec3(0.98, 0.48, 0.14);
          vec3 colRuby = vec3(1.0, 0.22, 0.38);
          vec3 colWhite = vec3(1.0, 0.98, 0.92);

          vec3 color = colGold * coronaFalloff
                     + colWarm * streamerGlow
                     + colRuby * promFlame * 0.72
                     + colWhite * (diamondCore + anamorphicStreak);

          float alpha = clamp((coronaFalloff + streamerGlow + diamondCore + anamorphicStreak + promFlame * 0.4) * uOpacity, 0.0, 1.0);
          gl_FragColor = vec4(color * uOpacity, alpha);
        }
      `}),hn=new ge(new Do(6.8,6.8),an);Ze.add(hn);const yn=new ge(new Ci(1.03,64,64),new ja({color:"#03050a",transparent:!0,opacity:0}));yn.position.z=.08,Ze.add(yn);const xn=new fn;xn.rotation.set(1.18,.28,0),Ze.add(xn);const Z=new ja({color:"#fcd34d",transparent:!0,opacity:0,side:qi}),In=new ge(new Il(1.88,1.905,96),Z);xn.add(In);const He=new ba({color:"#fef3c7",emissive:"#fbbf24",emissiveIntensity:.45,roughness:.45,transparent:!0,opacity:0}),Ve=new ge(new Ci(.085,24,24),He);xn.add(Ve);const Dt=new fn;V.add(Dt);const Xe=[],Jt=(dt,yt=1)=>(dt.transparent=!0,dt.opacity=0,Xe.push({mat:dt,baseOpacity:yt}),dt),oe=new Zi({transparent:!0,blending:ki,depthWrite:!1,uniforms:{uOpacity:{value:0},uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv * 2.0 - 1.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uOpacity;
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          float r = length(vUv);
          float pulse = 0.94 + 0.06 * sin(uTime * 3.2);
          float glow = exp(-r * 3.4) * pulse * 0.65;
          vec3 col = mix(vec3(0.05, 0.55, 0.92), vec3(0.12, 0.85, 0.68), smoothstep(0.0, 0.8, 1.0 - r));
          gl_FragColor = vec4(col * glow * uOpacity, glow * uOpacity);
        }
      `}),P=new ge(new Do(4.6,4.6),oe);Dt.add(P);const T=new Zi({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uOpacity:{value:0}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPos;
        varying vec3 vViewDir;
        void main() {
          vPos = position;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vNormal = normalize(normalMatrix * normal);
          vViewDir = normalize(-mvPos.xyz);
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uOpacity;
        varying vec3 vNormal;
        varying vec3 vPos;
        varying vec3 vViewDir;
        void main() {
          float fresnel = pow(1.0 - max(0.0, dot(vNormal, vViewDir)), 2.4);
          float swirl = sin(vPos.x * 5.0 + vPos.y * 5.0 - uTime * 2.4) * 0.5 + 0.5;
          vec3 deepGlass = vec3(0.02, 0.09, 0.22);
          vec3 plasmaMist = mix(vec3(0.06, 0.62, 0.95), vec3(0.12, 0.88, 0.68), swirl) * 0.28;
          vec3 rimCol = mix(vec3(0.22, 0.82, 0.98), vec3(0.35, 0.95, 0.78), swirl) * fresnel * 1.25;
          vec3 col = deepGlass + plasmaMist + rimCol;
          float alpha = clamp((0.36 + fresnel * 0.58) * uOpacity, 0.0, 0.95);
          gl_FragColor = vec4(col, alpha);
        }
      `}),at=new ge(new Ci(.82,64,64),T);Dt.add(at);const Ct=new fn;Dt.add(Ct);const xt=Jt(new gr({color:"#f59e0b",emissive:"#d97706",emissiveIntensity:.42,metalness:.88,roughness:.16,clearcoat:.9}),.98),It=new ge(new bm(.36,.064,120,20,2,3),xt);Ct.add(It);const Ft=Jt(new ja({color:"#67e8f9"}),.78);for(let dt=0;dt<3;dt++){const yt=new ge(new vr(.58,.011,12,64),Ft);yt.rotation.set(dt*Math.PI/3,dt*Math.PI/2.4,.4),Ct.add(yt)}const ht=new fn;ht.rotation.set(.68,.28,0),Dt.add(ht);const vt=Jt(new gr({color:"#ea580c",emissive:"#7c2d12",emissiveIntensity:.22,metalness:.88,roughness:.18,clearcoat:.65}),.98);ht.add(new ge(new vr(1.16,.048,24,96),vt));const Lt=Jt(new ba({color:"#e2e8f0",metalness:.9,roughness:.2}),.98),G=new nf(.068,.068,.12,16);for(let dt=0;dt<16;dt++){const yt=dt/16*Math.PI*2,bt=new ge(G,Lt);bt.position.set(Math.cos(yt)*1.16,Math.sin(yt)*1.16,0),bt.rotation.z=yt,ht.add(bt)}const mt=new fn;mt.rotation.set(-.58,.52,.24),Dt.add(mt);const pt=Jt(new gr({color:"#0ea5e9",emissive:"#0369a1",emissiveIntensity:.32,metalness:.78,roughness:.18,clearcoat:.8}),.94);mt.add(new ge(new vr(1.48,.032,20,96),pt));const zt=Jt(new ba({color:"#fef08a",emissive:"#fbbf24",emissiveIntensity:.85,roughness:.15}),.98),Nt=new Ci(.036,14,14),Pt=[];for(let dt=0;dt<20;dt++){const yt=new ge(Nt,zt);mt.add(yt),Pt.push(yt)}const Yt=new fn;Yt.rotation.set(.28,-.72,.35),Dt.add(Yt);const ne=Jt(new ba({color:"#10b981",emissive:"#047857",emissiveIntensity:.35,metalness:.72,roughness:.22}),.78);Yt.add(new ge(new vr(1.82,.018,16,108),ne));const wt=new fn;wt.position.set(1.82,0,0);const Qt=new ge(new Ci(.085,16,16),Lt);wt.add(Qt);const he=new fn,Gt=new Ra(.045,.36,.016);Gt.translate(0,.18,0);for(let dt=0;dt<3;dt++){const yt=new fn;yt.rotation.z=dt*Math.PI*2/3,yt.add(new ge(Gt,Lt)),he.add(yt)}wt.add(he),Yt.add(wt);const De=new fn;De.position.set(Math.cos(2*Math.PI/3)*1.82,Math.sin(2*Math.PI/3)*1.82,0);const cn=Jt(new gr({color:"#2563eb",emissive:"#1d4ed8",emissiveIntensity:.4,metalness:.55,roughness:.12,clearcoat:1}),.98);De.add(new ge(new Ra(.46,.3,.03),Lt)),De.add(new ge(new Ra(.42,.26,.036),cn)),Yt.add(De);const zn=new ge(new Ra(.24,.24,.24),ne);zn.position.set(Math.cos(4*Math.PI/3)*1.82,Math.sin(4*Math.PI/3)*1.82,0),Yt.add(zn);const ci=new fn;V.add(ci);const ui=[],xi=(dt,yt=1)=>(dt.transparent=!0,dt.opacity=0,ui.push({mat:dt,baseOpacity:yt}),dt),Ki=(dt,yt,bt,te,Ie)=>{const ye=new Q1(yt,15),de=ye.attributes.position,Ke=new nf(bt,bt,1,10),Kt=new K(0,1,0),un=[];for(let pe=0;pe<de.count;pe+=2){const Vn=new K(de.getX(pe),de.getY(pe),de.getZ(pe)),ee=new K(de.getX(pe+1),de.getY(pe+1),de.getZ(pe+1)),Xn=new K().subVectors(ee,Vn),Ge=Xn.length();if(Ge<1e-4)continue;const we=new ge(Ke,te);if(we.position.addVectors(Vn,ee).multiplyScalar(.5),we.scale.set(1,Ge,1),Xn.divideScalar(Ge),Xn.y<-.9999?we.quaternion.setFromAxisAngle(new K(1,0,0),Math.PI):we.quaternion.setFromUnitVectors(Kt,Xn),dt.add(we),Ie)for(const le of[Vn,ee])un.some(me=>me.distanceToSquared(le)<1e-4)||un.push(le)}if(Ie&&un.length>0){const pe=new Ci(bt*1.75,12,12);for(const Vn of un){const ee=new ge(pe,Ie);ee.position.copy(Vn),dt.add(ee)}}ye.dispose()},la=new fn;ci.add(la);const ua=p3(1.46),Na=new K(1,1,1).normalize(),Qi=xi(new ba({color:"#f8fafc",metalness:.75,roughness:.2}),.95),is=xi(new ba({color:"#ffffff",emissive:"#cbd5e1",emissiveIntensity:.25,roughness:.15}),.98),Xs=[{color:"#f43f5e",quat:new ts,explodeDir:new K(-.38,-.45,-.18)},{color:"#10b981",quat:new ts().setFromAxisAngle(Na,2*Math.PI/3),explodeDir:new K(-.35,.36,.42)},{color:"#0ea5e9",quat:new ts().setFromAxisAngle(Na,4*Math.PI/3),explodeDir:new K(.45,.28,-.36)}],as=[];for(const dt of Xs){const yt=new fn;yt.quaternion.copy(dt.quat);const bt=xi(new gr({color:dt.color,roughness:.18,metalness:.08,clearcoat:.85,side:Jn,depthWrite:!1}),.5),te=xi(new gr({color:dt.color,roughness:.1,metalness:.1,clearcoat:1,clearcoatRoughness:.06,ior:1.5,side:Hs,depthWrite:!1}),.76);yt.add(new ge(ua,bt)),yt.add(new ge(ua,te)),Ki(yt,ua,.015,Qi,is),la.add(yt),as.push({group:yt,dir:dt.explodeDir})}const fi=new fn;fi.rotation.set(.52,.25,-.22),ci.add(fi);const ks=xi(new ja({color:"#94a3b8"}),.32);fi.add(new ge(new vr(1.68,.008,12,108),ks));const La=[],Ws=[{geo:new ym(.21,0),color:"#a855f7",angle:0},{geo:new Sm(.2,0),color:"#f59e0b",angle:Math.PI*.5},{geo:new Mm(.2,0),color:"#06b6d4",angle:Math.PI},{geo:new Em(.22,0),color:"#ec4899",angle:Math.PI*1.5}];for(const dt of Ws){const yt=new fn;yt.position.set(Math.cos(dt.angle)*1.68,Math.sin(dt.angle)*1.68,0);const bt=new fn,te=xi(new gr({color:dt.color,roughness:.16,metalness:.14,clearcoat:.9}),.94);bt.add(new ge(dt.geo,te)),Ki(bt,dt.geo,.008,Qi),yt.add(bt),fi.add(yt),La.push({wrap:yt,mesh:bt})}const ii={x:0,y:0,targetX:0,targetY:0},ce={dragging:!1,downX:0,downY:0,prevX:0,prevY:0,yawOffset:0,pitchOffset:0,velYaw:0,velPitch:0,energyBoost:0},En=dt=>dt instanceof HTMLElement?!!dt.closest('button, a, input, select, [role="button"], iframe'):!1,An=dt=>{u.current.paused||En(dt.target)||(ce.dragging=!0,ce.downX=dt.clientX,ce.downY=dt.clientY,ce.prevX=dt.clientX,ce.prevY=dt.clientY,document.body.style.cursor="grabbing")},C=dt=>{if(ii.targetX=dt.clientX/window.innerWidth*2-1,ii.targetY=-(dt.clientY/window.innerHeight*2-1),ce.dragging){const yt=dt.clientX-ce.prevX,bt=dt.clientY-ce.prevY;ce.prevX=dt.clientX,ce.prevY=dt.clientY,ce.velYaw=yt*.0085,ce.velPitch=bt*.0055,ce.yawOffset+=ce.velYaw,ce.pitchOffset=Math.max(-.55,Math.min(.55,ce.pitchOffset+ce.velPitch)),ce.energyBoost=Math.min(1.5,ce.energyBoost+Math.hypot(yt,bt)*.008)}},k=dt=>{ce.dragging&&(ce.dragging=!1,document.body.style.cursor="",Math.hypot(dt.clientX-ce.downX,dt.clientY-ce.downY)<7&&(X=0,Q.color.set(g3[u.current.activeWorld]),ce.velYaw+=(u.current.lang==="ar"?-1:1)*.055,ce.energyBoost=1.25,Ll.playSculpturePulse(u.current.activeWorld)))};window.addEventListener("pointerdown",An),window.addEventListener("pointermove",C),window.addEventListener("pointerup",k);const ft=()=>{m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",ft);const Y={eco:1,space:0,energy:0,geo:0};let rt=window.innerWidth<880?0:u.current.lang==="ar"?-1.48:1.48,Ut=5.6,qt=0;const Ot=new _b;let Bt=0;const Zt=()=>{if(u.current.paused){Ot.getDelta(),Bt=requestAnimationFrame(Zt);return}const dt=Math.min(Ot.getDelta(),.05),yt=Ot.getElapsedTime(),{activeWorld:bt,lang:te,isDiving:Ie}=u.current;if(O.uniforms.uTime.value=yt,H.active){H.life+=dt;const Ge=H.life/H.maxLife;if(Ge>=1)H.active=!1,H.cooldown=3.8+Math.random()*4.5,M.opacity=0;else{H.x+=H.vx*dt,H.y+=H.vy*dt;const we=U.attributes.position.array;we[0]=H.x,we[1]=H.y,we[2]=H.z,we[3]=H.x-H.vx*.095,we[4]=H.y-H.vy*.095,we[5]=H.z,U.attributes.position.needsUpdate=!0,M.opacity=Math.sin(Ge*Math.PI)*.85}}else if(H.cooldown-=dt,H.cooldown<=0){H.active=!0,H.life=0,H.maxLife=.7+Math.random()*.35,H.x=(Math.random()-.2)*14,H.y=3.5+Math.random()*3.5,H.z=-11-Math.random()*7;const Ge=Math.random()>.5?-1:1;H.vx=Ge*(9.5+Math.random()*4),H.vy=-(4.5+Math.random()*2.5)}if(ii.x+=(ii.targetX-ii.x)*.05,ii.y+=(ii.targetY-ii.y)*.05,ce.dragging||(ce.yawOffset+=ce.velYaw,ce.pitchOffset+=ce.velPitch,ce.velYaw*=.94,ce.velPitch*=.92,ce.pitchOffset*=.96),ce.energyBoost*=.95,V.rotation.y=ce.yawOffset,V.rotation.x=ce.pitchOffset,X<1){X=Math.min(1,X+dt*1.85);const Ge=1-Math.pow(1-X,3);ut.visible=!0,ut.scale.setScalar(.75+Ge*1.35),Q.opacity=(1-X)*.65}else ut.visible=!1;const ye=window.innerWidth<880,de=ye?0:te==="ar"?-1.48:1.48,Ke=ye?.72:.22;rt+=(de-rt)*.06,F.position.set(rt+ii.x*.18,Ke+ii.y*.14,0),Ut+=((Ie?2.35:5.6)-Ut)*(Ie?.08:.05),m.position.z=Ut;const un=bt==="ecology-carbon"?1:0,pe=bt==="space-suhail"?1:0,Vn=bt==="energy-circuits"?1:0,ee=bt==="spatial-geometry"?1:0,Xn=Math.min(1,dt*5.2);if(Y.eco+=(un-Y.eco)*Xn,Y.space+=(pe-Y.space)*Xn,Y.energy+=(Vn-Y.energy)*Xn,Y.geo+=(ee-Y.geo)*Xn,nt.visible=Y.eco>.01,nt.visible){const Ge=.84+Y.eco*.16;nt.scale.setScalar(Ge),gt.rotation.y=-2.32+Math.sin(yt*.22)*.14,ae.rotation.y=yt*.03,re.rotation.y=yt*.12,kt.material.opacity=Y.eco,ae.material.opacity=.36*Y.eco,L.uniforms.uOpacity.value=Y.eco,Pe.opacity=.78*Y.eco,Rt.forEach(dn=>{dn.material.opacity=Y.eco}),At.forEach((dn,Qe)=>{const pn=1+.28*Math.sin(yt*3+Qe*1.2);dn.scale.setScalar(pn),dn.material.opacity=.82*Y.eco}),se.forEach((dn,Qe)=>{dn.material.opacity=(.32+.22*Math.sin(yt*2+Qe))*Y.eco});const we=yt*.42%Tt.length,le=Math.floor(we),me=we-le;Te.position.copy(Tt[le].getPoint(me)),Te.material.opacity=Y.eco}if(Ze.visible=Y.space>.01,Ze.visible){const Ge=.84+Y.space*.16;Ze.scale.setScalar(Ge),hn.quaternion.copy(V.quaternion).invert(),an.uniforms.uTime.value=yt,an.uniforms.uOpacity.value=Y.space,yn.material.opacity=Y.space,Z.opacity=.36*Y.space,He.opacity=Y.space;const we=yt*.65;Ve.position.set(Math.cos(we)*1.89,Math.sin(we)*1.89,0)}if(Dt.visible=Y.energy>.01,Dt.visible){const Ge=.84+Y.energy*.16;Dt.scale.setScalar(Ge),P.quaternion.copy(V.quaternion).invert(),at.rotation.y=yt*.32,T.uniforms.uTime.value=yt,T.uniforms.uOpacity.value=Y.energy,Ct.rotation.y=-yt*.95,Ct.rotation.x=Math.sin(yt*.65)*.42,oe.uniforms.uTime.value=yt,oe.uniforms.uOpacity.value=(.68+ce.energyBoost*.15)*Y.energy,ht.rotation.z=yt*.36,mt.rotation.z=-yt*.28,Yt.rotation.z=yt*.22,he.rotation.z=-yt*4.8,De.rotation.y=Math.sin(yt*1.4)*.35,zn.rotation.x=yt*.8,zn.rotation.y=yt*.6,qt+=dt*(1.1+ce.energyBoost*1.6),Pt.forEach((we,le)=>{const me=le/Pt.length*Math.PI*2+qt;we.position.set(Math.cos(me)*1.48,Math.sin(me)*1.48,0)});for(const we of Xe)we.mat.opacity=we.baseOpacity*Y.energy}if(ci.visible=Y.geo>.01,ci.visible){const Ge=.82+Y.geo*.14;ci.scale.setScalar(Ge),la.rotation.y=yt*.34,la.rotation.x=.38+Math.sin(yt*.45)*.14;const we=.5-.5*Math.cos(yt*.95),le=.08+Math.pow(we,1.35)*.48;for(const me of as)me.group.position.copy(me.dir).multiplyScalar(le);fi.rotation.z=yt*.24,La.forEach((me,dn)=>{me.mesh.rotation.x=yt*(.7+dn*.15),me.mesh.rotation.y=yt*(.9-dn*.12)});for(const me of ui)me.mat.opacity=me.baseOpacity*Y.geo}N.rotation.y=yt*.008,p.render(d,m),Bt=requestAnimationFrame(Zt)};return Bt=requestAnimationFrame(Zt),()=>{cancelAnimationFrame(Bt),document.body.style.cursor="",window.removeEventListener("pointerdown",An),window.removeEventListener("pointermove",C),window.removeEventListener("pointerup",k),window.removeEventListener("resize",ft),_.dispose(),p.dispose(),p.domElement.parentNode===h&&h.removeChild(p.domElement)}},[]),Et.jsx("div",{ref:l,className:"fixed inset-0 z-0 pointer-events-none select-none overflow-hidden","aria-hidden":"true"})};function Qn(o,e){return e==="ar"?o.ar:o.en}const Xi=[{id:"ecology-carbon",indexLabel:{ar:"٠١",en:"01"},port:5174,accentHex:"#10b981",glowClass:"shadow-emerald-500/25 border-emerald-400/50",buttonClass:"bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_56px_rgba(16,185,129,0.6)]",pillBadge:{ar:"العلوم · الصف الخامس الابتدائي",en:"Science · Grade 5"},cardTitle:{ar:"محميات المملكة",en:"Saudi Sanctuaries"},cardHook:{ar:"الحياة الفطرية وتوازن الطبيعة",en:"Living Wildlife & Food Webs"},heroTitle:{ar:"أسرار الحياة في محميات المملكة",en:"Living Wildlife of Saudi Arabia"},heroDescription:{ar:"اهبط من الفضاء إلى واحات الأحساء وجبال عسير، وعِش وسط الغزلان والذئاب والطيور لتكتشف بنفسك كيف تحفظ الطبيعة توازنها.",en:"Dive from orbit into Al-Ahsa Oasis and the Asir Highlands, exploring alongside gazelles, wolves, and birds to see how nature stays in balance."},highlights:[{ar:"٥ بيئات سعودية حية",en:"5 Living Saudi Biomes"},{ar:"مرافقك الذكي «سَند»",en:"Guided by Sanad Robot"},{ar:"كاميرا تتبع الكائنات",en:"Creature Follow-Cam"}]},{id:"space-suhail",indexLabel:{ar:"٠٢",en:"02"},port:5175,accentHex:"#f59e0b",glowClass:"shadow-amber-500/25 border-amber-400/55",buttonClass:"bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 text-slate-950 shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_56px_rgba(245,158,11,0.62)]",pillBadge:{ar:"العلوم والفلك · الصف السادس والمتوسط",en:"Space & Astronomy · Grades 6–9"},cardTitle:{ar:"مرصد سُهيل الفلكي",en:"Suhail Observatory"},cardHook:{ar:"الفصول والكسوف وسماء العُلا",en:"Seasons, Eclipses & AlUla Sky"},heroTitle:{ar:"مرصد سُهيل والكسوف الكلي",en:"Suhail Space & Eclipse Journey"},heroDescription:{ar:"حلّق بين الشمس والأرض والقمر، وشاهد كسوف مكة الكلي لعام ٢٠٢٧ عبر تلسكوب العُلا، واكتشف أسرار الفصول الأربعة وهلال رمضان.",en:"Soar across the Sun-Earth-Moon system, witness the 2027 Makkah Total Eclipse through an AlUla telescope, and unlock the secrets of the seasons."},highlights:[{ar:"تعليق صوتي عربي فصيح",en:"Studio Arabic Narration"},{ar:"تلسكوب سماء العُلا",en:"AlUla Sky Telescope"},{ar:"كسوف مكة ٢٠٢٧",en:"Makkah 2027 Eclipse"}]},{id:"energy-circuits",indexLabel:{ar:"٠٣",en:"03"},port:5176,accentHex:"#22d3ee",glowClass:"shadow-cyan-500/25 border-cyan-400/55",buttonClass:"bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.38)] hover:shadow-[0_0_56px_rgba(34,211,238,0.58)]",pillBadge:{ar:"العلوم والفيزياء · الصفوف ٦ إلى ٩",en:"Physics & Energy · Grades 6–9"},cardTitle:{ar:"نبض الطاقة والكهرباء",en:"GridPulse Energy"},cardHook:{ar:"قانون أوم والشبكة الذكية",en:"Circuits & Clean Smart Grid"},heroTitle:{ar:"نبض الطاقة والدوائر الكهربائية",en:"Electric Circuits & Clean Energy"},heroDescription:{ar:"ادخل بمجهرك إلى قلب ذرات النحاس، وصمّم دوائرك الكهربائية بحرية، وقُد شبكة الطاقة النظيفة في سكاكا ودومة الجندل عبر العواصف والليل.",en:"Zoom inside copper atoms, wire live circuits with real instruments, and power a clean Saudi city grid through desert storms and nightfall."},highlights:[{ar:"مجهر ذرات النحاس",en:"Copper Atom Microscope"},{ar:"مختبر بناء حر",en:"Free Circuit Builder"},{ar:"طاقة سكاكا ودومة الجندل",en:"Solar & Wind Smart Grid"}]},{id:"spatial-geometry",indexLabel:{ar:"٠٤",en:"04"},port:5184,accentHex:"#c084fc",glowClass:"shadow-purple-500/25 border-purple-400/55",buttonClass:"bg-gradient-to-r from-violet-300 via-purple-300 to-amber-300 text-slate-950 shadow-[0_0_40px_rgba(192,132,252,0.4)] hover:shadow-[0_0_56px_rgba(192,132,252,0.62)]",pillBadge:{ar:"الرياضيات والهندسة · الصفوف ٥ إلى ٩",en:"Mathematics & Geometry · Grades 5–9"},cardTitle:{ar:"أَبعاد الهندسة الفراغية",en:"Ab'ad 3D Geometry"},cardHook:{ar:"طَيّ المجسمات وبراهين الحجوم",en:"Unfolding Solids & Volume Proofs"},heroTitle:{ar:"أَبعاد: أسرار المجسمات وبراهين الحجوم",en:"Spatial 3D Geometry & Visual Proofs"},heroDescription:{ar:"افرد المجسمات المعمارية بيدك، وركّب ثلاثة أهرامات لتبني مكعباً كاملاً، واقطع المخاريط بالليزر لتكتشف من أين جاءت قوانين الرياضيات.",en:"Unfold crystal architectural solids into flat nets, lock three pyramids into one cube, and slice cones with lasers to see why math formulas work."},highlights:[{ar:"طَيّ وفَرْد الشبكات الحية",en:"Kinematic Net Unfolding"},{ar:"برهان ثُلث الهرم والأسطوانة",en:"Visual 1/3 Volume Proofs"},{ar:"مسبار الليزر والسداسي المخفي",en:"3D Laser Conic Slicer"}]}],_3=[{id:"desalination-molecules",subject:{ar:"الكيمياء",en:"Chemistry"},grade:{ar:"الصفوف ٥–٨",en:"Grades 5–8"},title:{ar:"رحلة قطرة ماء: التحلية والجزيئات",en:"Inside Water Molecules & Desalination"},teaser:{ar:"غُص إلى عالم الذرات لترى كيف يتحول ماء البحر الأحمر المالح إلى ماء عذب نقي.",en:"Shrink to the molecular scale to see Red Sea saltwater become pure drinking water."},accentHex:"#38bdf8"},{id:"optics-vision",subject:{ar:"الفيزياء",en:"Physics"},grade:{ar:"الصفوف ٥–١٠",en:"Grades 5–10"},title:{ar:"بصريات ابن الهيثم وأسرار الضوء",en:"Ibn Al-Haytham: Light, Prisms & Vision"},teaser:{ar:"وجّه أشعة الليزر عبر المناشير والعدسات وعالج الإبصار داخل عين بشرية حية.",en:"Bend laser beams through glass prisms and focus lenses onto a living retina."},accentHex:"#fbbf24"},{id:"heart-circulation",subject:{ar:"الأحياء",en:"Biology"},grade:{ar:"الصفوف ٦–٩",en:"Grades 6–9"},title:{ar:"داخل القلب النابض",en:"Inside the Beating Human Heart"},teaser:{ar:"ادخل بين صمامات القلب الأربعة وشاهد كيف يتكيف جسمك من ساحل جدة إلى قمم أبها.",en:"Step inside the four heart chambers and compare sea-level rest to Abha peaks."},accentHex:"#fb7185"},{id:"tectonics-volcanoes",subject:{ar:"علوم الأرض",en:"Earth Science"},grade:{ar:"الصفوف ٧–١٠",en:"Grades 7–10"},title:{ar:"أخدود البحر الأحمر وحرّات البراكين",en:"Red Sea Rift & Harrat Volcanoes"},teaser:{ar:"شاهد كيف انفلقت الصفيحة العربية وتشكلت الحرات البركانية غرب المملكة عبر ملايين السنين.",en:"Witness the Arabian Plate split open the Red Sea and form volcanic Harrats."},accentHex:"#f97316"},{id:"forces-motion",subject:{ar:"الفيزياء",en:"Physics"},grade:{ar:"الصفوف ٦–١٠",en:"Grades 6–10"},title:{ar:"ميدان القوى والحركة والطاقة",en:"Forces, Dunes & Rollercoaster Energy"},teaser:{ar:"اختبر قوانين نيوتن والاحتكاك وحفظ الطاقة على كثبان الصحراء ومسارات القدية.",en:"Test Newton’s laws, sand traction, and energy conservation in real time."},accentHex:"#22d3ee"},{id:"atom-bonding",subject:{ar:"الكيمياء",en:"Chemistry"},grade:{ar:"الصفوف ٨–١٠",en:"Grades 8–10"},title:{ar:"باني الذرات والروابط الكيميائية",en:"Quantum Atom & Molecule Builder"},teaser:{ar:"شكّل الذرات من البروتونات والإلكترونات واكتشف كيف تتحد لإنتاج الهيدروجين الأخضر.",en:"Assemble atoms from subatomic particles and forge 3D chemical bonds."},accentHex:"#c084fc"},{id:"photosynthesis-leaf",subject:{ar:"الأحياء",en:"Biology"},grade:{ar:"الصفوف ٥–٩",en:"Grades 5–9"},title:{ar:"داخل ورقة شجرة صحراوية",en:"5,000× Inside a Desert Leaf"},teaser:{ar:"اكتشف كيف تصنع أشجار السدر والغاف غذاءها في حر الصحراء دون أن تفقد ماءها.",en:"Zoom 5,000× inside chloroplasts and stomata of native Arabian trees."},accentHex:"#34d399"}],x3=()=>{var q;const[o,e]=gn.useState(()=>new URLSearchParams(window.location.search).get("lang")==="en"?"en":"ar"),[i,s]=gn.useState("ecology-carbon"),[l,u]=gn.useState(null),[h,d]=gn.useState(!1),[m,p]=gn.useState(!1),[_,g]=gn.useState(!1),[x,S]=gn.useState(!1),b=window.location.port==="5170",[D,E]=gn.useState({}),[y,w]=gn.useState(b),[O,N]=gn.useState(!1),[I,U]=gn.useState(!0),M=Xi.find(z=>z.id===i)??Xi[0],A=l?Xi.find(z=>z.id===l)??null:null;gn.useEffect(()=>{document.documentElement.dir=o==="ar"?"rtl":"ltr",document.documentElement.lang=o},[o]);const H=gn.useCallback(async()=>{if(!b){w(!1);return}try{const z=await fetch("/api/services"),it=z.headers.get("content-type")||"";if(!z.ok||!it.includes("application/json")){w(!1);return}const tt=await z.json();w(!0);const lt=[],gt={};for(const kt of tt.services)gt[kt.id]=kt;E(gt)}catch{w(!1)}},[b]);gn.useEffect(()=>{if(!b)return;H();const z=window.setInterval(()=>void H(),5e3);return()=>window.clearInterval(z)},[b,H]);const F=gn.useCallback(async z=>{var it;if(!y||(it=D[z])!=null&&it.online)return!0;N(!0);try{const tt=await fetch("/api/services/start",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:z})});if(!(tt.headers.get("content-type")||"").includes("application/json"))return!0;const gt=await tt.json();return await H(),!!gt.online}catch{return!1}finally{N(!1)}},[y,D,H]),V=gn.useCallback(z=>{i!==z&&(Ll.playWorldSelect(z),s(z))},[i]),Q=gn.useCallback(async z=>{if(s(z),l){Ll.playWorldSelect(z),u(z),U(!0),await F(z);return}d(!0),Ll.playDiveTransition();const it=new Promise(tt=>setTimeout(tt,460));await Promise.all([F(z),it]),u(z),d(!1),U(!0)},[F,l]);gn.useEffect(()=>{if(!l)return;const z=window.setTimeout(()=>{U(!1)},2600);return()=>window.clearTimeout(z)},[l]),gn.useEffect(()=>{if(!m&&!_)return;const z=it=>{it.key==="Escape"&&(p(!1),g(!1))};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[m,_]),gn.useEffect(()=>{if(l||m)return;const z=it=>{const tt=Xi.findIndex(lt=>lt.id===i);if(it.key==="ArrowLeft"){const gt=(tt+(o==="ar"?1:-1)+Xi.length)%Xi.length;V(Xi[gt].id)}else if(it.key==="ArrowRight"){const gt=(tt+(o==="ar"?-1:1)+Xi.length)%Xi.length;V(Xi[gt].id)}else it.key==="Enter"&&Q(i)};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[l,m,i,o,V,Q]);const ut={"ecology-carbon":"./labs/ecology/","space-suhail":"./labs/space/","energy-circuits":"./labs/circuits/","spatial-geometry":"./labs/geometry/"},X=A?!y||!!((q=D[A.id])!=null&&q.online):!1,nt=A?b?`${window.location.protocol}//${window.location.hostname}:${A.port}/?lang=${o}`:`${ut[A.id]}?lang=${o}`:"";return Et.jsxs("div",{className:"relative min-h-screen w-full overflow-x-hidden flex flex-col justify-between select-none",children:[Et.jsx(v3,{activeWorld:i,lang:o,isDiving:h,paused:!!A||_}),A&&Et.jsxs("div",{className:"fixed inset-0 z-50 w-screen h-screen bg-[#02050a] overflow-hidden",children:[X?Et.jsx("iframe",{src:nt,title:Qn(A.heroTitle,o),className:"w-full h-full border-0 block",allow:"autoplay; fullscreen; accelerometer; gyroscope"},`${A.id}-${o}`):Et.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center gap-4 text-center px-6",children:[Et.jsx("div",{className:"w-11 h-11 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin"}),Et.jsx("div",{className:"text-base font-semibold text-white",children:O?o==="ar"?"جاري تجهيز التجربة...":"Preparing your experience...":Qn(A.heroTitle,o)})]}),Et.jsx("div",{dir:o==="ar"?"rtl":"ltr",onMouseEnter:()=>U(!0),onMouseLeave:()=>U(!1),onClick:()=>{I||U(!0)},className:`fixed top-16 z-50 flex items-center ${o==="ar"?"right-0":"left-0"}`,children:Et.jsxs("div",{className:`flex items-center gap-1.5 border border-white/15 bg-slate-950/75 backdrop-blur-2xl shadow-2xl transition-all duration-300 ease-out ${o==="ar"?"rounded-l-2xl border-r-0":"rounded-r-2xl border-l-0"} ${I?"px-3 py-2 opacity-100 translate-x-0":`px-2 py-2 opacity-45 hover:opacity-100 ${o==="ar"?"translate-x-1":"-translate-x-1"}`}`,children:[Et.jsxs("button",{onClick:z=>{if(z.stopPropagation(),!I&&"ontouchstart"in window){U(!0);return}u(null)},className:"inline-flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-bold text-white hover:bg-white/10 transition cursor-pointer",title:o==="ar"?"العودة إلى مِسبار":"Back to Misbar",children:[Et.jsx(zE,{className:"w-4 h-4 text-emerald-300 shrink-0"}),I&&Et.jsx("span",{style:{fontFamily:"var(--font-arabic)"},children:o==="ar"?"مِسبار":"Misbar"})]}),I&&Et.jsxs(Et.Fragment,{children:[Et.jsx("div",{className:"w-px h-4 bg-white/15 mx-0.5"}),Xi.map(z=>{const it=z.id===A.id;return Et.jsx("button",{onClick:tt=>{tt.stopPropagation(),it||Q(z.id)},className:`rounded-xl px-2.5 py-1 text-[11px] font-semibold transition cursor-pointer whitespace-nowrap ${it?"bg-white/15 text-white border border-white/25":"text-slate-300 hover:text-white hover:bg-white/10"}`,style:{fontFamily:"var(--font-arabic)"},children:Qn(z.cardTitle,o)},z.id)})]})]})})]}),Et.jsx("div",{className:`fixed inset-0 z-10 pointer-events-none transition-opacity duration-500 ${o==="ar"?"bg-[radial-gradient(circle_at_24%_44%,transparent_0%,rgba(3,6,12,0.52)_46%,rgba(3,6,12,0.88)_100%)]":"bg-[radial-gradient(circle_at_76%_44%,transparent_0%,rgba(3,6,12,0.52)_46%,rgba(3,6,12,0.88)_100%)]"}`}),Et.jsx("div",{className:"fixed inset-x-0 bottom-0 h-52 z-10 pointer-events-none bg-gradient-to-t from-[#03060c] via-[#03060c]/65 to-transparent"}),Et.jsx("div",{className:`fixed inset-0 z-40 pointer-events-none bg-[#03060c] transition-opacity duration-500 ${h?"opacity-95":"opacity-0"}`}),Et.jsxs("header",{className:"relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-6 flex items-center justify-between",children:[Et.jsxs("div",{className:"flex items-center gap-3",children:[Et.jsx(IE,{className:"w-10 h-10"}),Et.jsxs("div",{children:[Et.jsx("div",{className:"text-lg font-bold tracking-tight text-white leading-none",children:o==="ar"?"مِسبار":"MISBAR"}),Et.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:o==="ar"?"مختبرات العلوم والرياضيات التفاعلية":"Interactive 3D STEM Labs"})]})]}),Et.jsxs("div",{className:"flex items-center gap-2.5",children:[Et.jsxs("button",{onClick:()=>g(!0),className:"inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/15 hover:bg-emerald-500/25 backdrop-blur-xl px-4 py-2 text-xs font-semibold text-emerald-200 hover:text-white transition cursor-pointer shadow-[0_0_24px_rgba(16,185,129,0.2)]",children:[Et.jsx(Id,{className:"w-3.5 h-3.5 text-emerald-300"}),Et.jsx("span",{children:o==="ar"?"العرض التعريفي":"Pitch Film"})]}),Et.jsxs("button",{onClick:()=>p(!0),className:"inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.05] hover:bg-white/[0.1] backdrop-blur-xl px-4 py-2 text-xs font-medium text-slate-200 hover:text-white transition cursor-pointer",children:[Et.jsx(FE,{className:"w-3.5 h-3.5 text-amber-300"}),Et.jsx("span",{children:o==="ar"?"قريباً":"Coming Soon"})]}),Et.jsx("button",{onClick:()=>S(Ll.toggleMute()),className:"rounded-full border border-white/12 bg-white/[0.05] hover:bg-white/[0.1] backdrop-blur-xl p-2 text-slate-300 hover:text-white transition cursor-pointer","aria-label":o==="ar"?"الصوت":"Sound",children:Et.jsx(BE,{muted:x,className:"w-4 h-4"})}),Et.jsx("button",{onClick:()=>e(z=>z==="ar"?"en":"ar"),className:"rounded-full border border-white/12 bg-white/[0.05] hover:bg-white/[0.1] backdrop-blur-xl px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white transition cursor-pointer",children:o==="ar"?"English":"العربية"})]})]}),Et.jsx("main",{className:"relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 my-auto py-8",children:Et.jsxs("div",{className:"max-w-xl space-y-5 animate-hero-enter",children:[Et.jsxs("div",{className:"inline-flex items-center gap-2.5 rounded-full border border-white/14 bg-white/[0.06] backdrop-blur-xl px-4 py-1.5 text-xs font-medium text-slate-200",children:[Et.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:M.accentHex,boxShadow:`0 0 12px ${M.accentHex}`}}),Et.jsx("span",{children:Qn(M.pillBadge,o)})]}),Et.jsx("h1",{className:"text-3xl sm:text-5xl lg:text-[3.35rem] font-bold text-white tracking-tight leading-[1.18]",children:Qn(M.heroTitle,o)}),Et.jsx("p",{className:"text-sm sm:text-lg text-slate-300/95 leading-relaxed font-normal max-w-lg",children:Qn(M.heroDescription,o)}),Et.jsx("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs sm:text-sm text-slate-300/85",children:M.highlights.map((z,it)=>Et.jsxs("span",{className:"inline-flex items-center gap-2",children:[Et.jsx("span",{className:"w-1.5 h-1.5 rounded-full opacity-80",style:{backgroundColor:M.accentHex}}),Et.jsx("span",{children:Qn(z,o)})]},it))}),Et.jsx("div",{className:"pt-3",children:Et.jsxs("button",{onClick:()=>void Q(M.id),className:`group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm sm:text-base font-bold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer ${M.buttonClass}`,children:[Et.jsx("span",{children:o==="ar"?"ابدأ الرحلة":"Start Experience"}),Et.jsx(Id,{className:`w-4 h-4 transition-transform duration-200 ${o==="ar"?"rotate-180 group-hover:-translate-x-1":"group-hover:translate-x-1"}`})]})})]},`${M.id}-${o}`)}),Et.jsx("footer",{className:"relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-7",children:Et.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-6xl",children:Xi.map(z=>{var tt;const it=z.id===i;return Et.jsxs("div",{role:"button",tabIndex:0,onMouseEnter:()=>V(z.id),onClick:()=>{it?Q(z.id):V(z.id)},onKeyDown:lt=>{(lt.key==="Enter"||lt.key===" ")&&(lt.preventDefault(),Q(z.id))},className:`group relative rounded-2xl p-4 sm:p-5 backdrop-blur-2xl transition-all duration-300 cursor-pointer border flex items-center justify-between gap-3 ${it?`bg-white/[0.1] -translate-y-1 shadow-2xl ${z.glowClass}`:"bg-white/[0.035] border-white/[0.09] hover:bg-white/[0.07] hover:border-white/20"}`,children:[Et.jsxs("div",{className:"space-y-1 min-w-0",children:[Et.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-slate-400 font-medium",children:[Et.jsx("span",{style:{color:it?z.accentHex:void 0},className:"font-bold",children:Qn(z.indexLabel,o)}),Et.jsx("span",{children:"·"}),Et.jsx("span",{className:"truncate",children:((tt=Qn(z.pillBadge,o).split("·")[1])==null?void 0:tt.trim())??Qn(z.pillBadge,o)})]}),Et.jsx("div",{className:"text-base font-bold text-white truncate",children:Qn(z.cardTitle,o)}),Et.jsx("div",{className:"text-xs text-slate-300/80 truncate",children:Qn(z.cardHook,o)})]}),Et.jsx("button",{type:"button",onClick:lt=>{lt.stopPropagation(),Q(z.id)},"aria-label":Qn(z.cardTitle,o),className:`w-10 h-10 rounded-full shrink-0 flex items-center justify-center transition-all cursor-pointer ${it?"bg-white text-slate-950 scale-105 shadow-lg":"bg-white/10 text-white group-hover:bg-white/20"}`,children:Et.jsx(Id,{className:`w-4 h-4 ${o==="ar"?"rotate-180":""}`})})]},z.id)})})}),m&&Et.jsx("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6",onClick:()=>p(!1),children:Et.jsxs("div",{className:"w-full max-w-4xl rounded-3xl border border-white/15 bg-[#070d17]/95 p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto",onClick:z=>z.stopPropagation(),children:[Et.jsxs("div",{className:"flex items-start justify-between gap-4 mb-6",children:[Et.jsxs("div",{children:[Et.jsx("div",{className:"text-xs font-semibold text-amber-300 mb-1",children:o==="ar"?"رحلات قيد الإعداد":"Upcoming Worlds"}),Et.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:o==="ar"?"عوالم علمية جديدة قادمة قريباً":"More Interactive Worlds Coming Soon"})]}),Et.jsx("button",{onClick:()=>p(!1),className:"rounded-full border border-white/15 bg-white/5 hover:bg-white/15 p-2 text-slate-300 hover:text-white transition cursor-pointer",children:Et.jsx(k_,{className:"w-4 h-4"})})]}),Et.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:_3.map(z=>Et.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.03] p-4 space-y-1.5",children:[Et.jsxs("div",{className:"flex items-center justify-between text-xs",children:[Et.jsx("span",{className:"font-semibold",style:{color:z.accentHex},children:Qn(z.subject,o)}),Et.jsx("span",{className:"text-slate-400",children:Qn(z.grade,o)})]}),Et.jsx("div",{className:"text-sm sm:text-base font-bold text-white",children:Qn(z.title,o)}),Et.jsx("p",{className:"text-xs text-slate-300/85 leading-relaxed",children:Qn(z.teaser,o)})]},z.id))})]})}),_&&Et.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6",onClick:()=>g(!1),children:Et.jsxs("div",{className:"w-full max-w-5xl rounded-3xl border border-white/15 bg-[#050a14]/95 p-4 sm:p-6 shadow-2xl space-y-4",onClick:z=>z.stopPropagation(),children:[Et.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[Et.jsxs("div",{children:[Et.jsx("div",{className:"text-xs font-semibold text-emerald-300",children:o==="ar"?"مِسبار (MISBAR) · العرض التعريفي للمدارس في المملكة العربية السعودية":"MISBAR · Official Showcase Film for Saudi Schools"}),Et.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white mt-0.5",children:o==="ar"?"لا تحفظ القانون... اكتشفه بيدك في ثلاثة أبعاد":"Don't Memorize Science — Probe It in Living 3D"})]}),Et.jsxs("div",{className:"flex items-center gap-2",children:[Et.jsx("button",{type:"button",onClick:()=>e("ar"),className:`rounded-full px-3.5 py-1.5 text-xs font-bold transition cursor-pointer ${o==="ar"?"bg-emerald-400 text-slate-950":"border border-white/15 bg-white/5 text-slate-300 hover:text-white"}`,children:"النسخة العربية"}),Et.jsx("button",{type:"button",onClick:()=>e("en"),className:`rounded-full px-3.5 py-1.5 text-xs font-bold transition cursor-pointer ${o==="en"?"bg-emerald-400 text-slate-950":"border border-white/15 bg-white/5 text-slate-300 hover:text-white"}`,children:"English Master"}),Et.jsx("a",{href:o==="ar"?"./pitch/misbar-pitch-ar.mp4":"./pitch/misbar-pitch-en.mp4",download:o==="ar"?"Misbar-Saudi-Schools-Pitch-AR.mp4":"Misbar-Saudi-Schools-Pitch-EN.mp4",className:"rounded-full border border-white/15 bg-white/5 hover:bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-white transition",children:o==="ar"?"تحميل MP4":"Download MP4"}),Et.jsx("button",{onClick:()=>g(!1),className:"rounded-full border border-white/15 bg-white/5 hover:bg-white/15 p-2 text-slate-300 hover:text-white transition cursor-pointer","aria-label":"Close",children:Et.jsx(k_,{className:"w-4 h-4"})})]})]}),Et.jsx("div",{className:"relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl",children:Et.jsx("video",{src:o==="ar"?"./pitch/misbar-pitch-ar.mp4":"./pitch/misbar-pitch-en.mp4",controls:!0,autoPlay:!0,playsInline:!0,className:"w-full h-full object-contain bg-black"},o)})]})})]})};OE.createRoot(document.getElementById("root")).render(Et.jsx(AE.StrictMode,{children:Et.jsx(x3,{})}));
