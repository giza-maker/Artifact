var Hh=Object.defineProperty;var Gh=(r,t,e)=>t in r?Hh(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var N=(r,t,e)=>Gh(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="170",Hi={ROTATE:0,DOLLY:1,PAN:2},Oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wh=0,al=1,qh=2,Vc=1,Hc=2,Pn=3,Fn=0,Ie=1,_e=2,Nn=0,Gi=1,Zn=2,ol=3,ll=4,Xh=5,hi=100,jh=101,Yh=102,Kh=103,$h=104,Zh=200,Qh=201,Jh=202,tu=203,Ca=204,Ra=205,eu=206,nu=207,iu=208,su=209,ru=210,au=211,ou=212,lu=213,cu=214,Pa=0,Ia=1,La=2,ji=3,Da=4,Na=5,Ua=6,Fa=7,Ao=0,hu=1,uu=2,Qn=0,Gc=1,Wc=2,qc=3,Co=4,du=5,Xc=6,jc=7,cl="attached",fu="detached",Yc=300,Yi=301,Ki=302,Ba=303,Oa=304,Br=306,Jn=1e3,Kn=1001,Pr=1002,ze=1003,Kc=1004,ws=1005,je=1006,br=1007,Ln=1008,Bn=1009,$c=1010,Zc=1011,Ds=1012,Ro=1013,mi=1014,dn=1015,_n=1016,Po=1017,Io=1018,$i=1020,Qc=35902,Jc=1021,th=1022,en=1023,eh=1024,nh=1025,Wi=1026,Zi=1027,Lo=1028,Do=1029,ih=1030,No=1031,Uo=1033,Tr=33776,Er=33777,wr=33778,Ar=33779,za=35840,ka=35841,Va=35842,Ha=35843,Ga=36196,Wa=37492,qa=37496,Xa=37808,ja=37809,Ya=37810,Ka=37811,$a=37812,Za=37813,Qa=37814,Ja=37815,to=37816,eo=37817,no=37818,io=37819,so=37820,ro=37821,Cr=36492,ao=36494,oo=36495,sh=36283,lo=36284,co=36285,ho=36286,uo=2200,rh=2201,pu=2202,Ns=2300,Us=2301,Hr=2302,zi=2400,ki=2401,Ir=2402,Fo=2500,mu=2501,gu=0,ah=1,fo=2,_u=3200,vu=3201,Bo=0,xu=1,Yn="",ye="srgb",ke="srgb-linear",Or="linear",ee="srgb",_i=7680,hl=519,yu=512,Mu=513,Su=514,oh=515,bu=516,Tu=517,Eu=518,wu=519,po=35044,ul="300 es",Dn=2e3,Lr=2001;class ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dl=1234567;const Ps=Math.PI/180,Qi=180/Math.PI;function fn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[r&255]+De[r>>8&255]+De[r>>16&255]+De[r>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Pe(r,t,e){return Math.max(t,Math.min(e,r))}function Oo(r,t){return(r%t+t)%t}function Au(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Cu(r,t,e){return r!==t?(e-r)/(t-r):0}function Is(r,t,e){return(1-e)*r+e*t}function Ru(r,t,e,n){return Is(r,t,1-Math.exp(-e*n))}function Pu(r,t=1){return t-Math.abs(Oo(r,t*2)-t)}function Iu(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Lu(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Du(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Nu(r,t){return r+Math.random()*(t-r)}function Uu(r){return r*(.5-Math.random())}function Fu(r){r!==void 0&&(dl=r);let t=dl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bu(r){return r*Ps}function Ou(r){return r*Qi}function zu(r){return(r&r-1)===0&&r!==0}function ku(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Vu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Hu(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),d=a((t-n)/2),f=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ie(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Dr={DEG2RAD:Ps,RAD2DEG:Qi,generateUUID:fn,clamp:Pe,euclideanModulo:Oo,mapLinear:Au,inverseLerp:Cu,lerp:Is,damp:Ru,pingpong:Pu,smoothstep:Iu,smootherstep:Lu,randInt:Du,randFloat:Nu,randFloatSpread:Uu,seededRandom:Fu,degToRad:Bu,radToDeg:Ou,isPowerOfTwo:zu,ceilPowerOfTwo:ku,floorPowerOfTwo:Vu,setQuaternionFromProperEuler:Hu,normalize:ie,denormalize:un};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,i,s,a,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],_=i[3],m=i[6],E=i[1],A=i[4],p=i[7],y=i[2],v=i[5],T=i[8];return s[0]=a*x+o*E+l*y,s[3]=a*_+o*A+l*v,s[6]=a*m+o*p+l*T,s[1]=c*x+h*E+u*y,s[4]=c*_+h*A+u*v,s[7]=c*m+h*p+u*T,s[2]=d*x+f*E+g*y,s[5]=d*_+f*A+g*v,s[8]=d*m+f*p+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*s-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Gr.makeScale(t,e)),this}rotate(t){return this.premultiply(Gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new Bt;function lh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Fs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gu(){const r=Fs("canvas");return r.style.display="block",r}const fl={};function As(r){r in fl||(fl[r]=!0,console.warn(r))}function Wu(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function qu(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xu(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ht={enabled:!0,workingColorSpace:ke,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(r.r=Un(r.r),r.g=Un(r.g),r.b=Un(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yn?Or:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Un(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const pl=[.64,.33,.3,.6,.15,.06],ml=[.2126,.7152,.0722],gl=[.3127,.329],_l=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ht.define({[ke]:{primaries:pl,whitePoint:gl,transfer:Or,toXYZ:_l,fromXYZ:vl,luminanceCoefficients:ml,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:pl,whitePoint:gl,transfer:ee,toXYZ:_l,fromXYZ:vl,luminanceCoefficients:ml,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}});let vi;class ju{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=Fs("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Un(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yu=0;class ch{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Wr(i[a].image)):s.push(Wr(i[a]))}else s=Wr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Wr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ju.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ku=0;class Te extends ti{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Kn,i=Kn,s=je,a=Ln,o=en,l=Bn,c=Te.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=fn(),this.name="",this.source=new ch(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jn:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Pr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jn:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Pr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Yc;Te.DEFAULT_ANISOTROPY=1;class Kt{constructor(t=0,e=0,n=0,i=1){Kt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],_=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+_)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,p=(f+1)/2,y=(m+1)/2,v=(h+d)/4,T=(u+x)/4,R=(g+_)/4;return A>p&&A>y?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=v/n,s=T/n):p>y?p<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(p),n=v/i,s=R/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=T/s,i=R/s),this.set(n,i,s,e),this}let E=Math.sqrt((_-g)*(_-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(_-g)/E,this.y=(u-x)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $u extends ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ch(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nn extends $u{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class hh extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zu extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ye{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let _=1-o;const m=l*d+c*f+h*g+u*x,E=m>=0?1:-1,A=1-m*m;if(A>Number.EPSILON){const y=Math.sqrt(A),v=Math.atan2(y,m*E);_=Math.sin(_*v)/y,o=Math.sin(o*v)/y}const p=o*E;if(l=l*_+d*p,c=c*_+f*p,h=h*_+g*p,u=u*_+x*p,_===1-o){const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qr.copy(this).projectOnVector(t),this.sub(qr)}reflect(t){return this.sub(qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new I,xl=new Ye;class rn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(t.matrixWorld),this.union(Xs)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),js.subVectors(this.max,fs),xi.subVectors(t.a,fs),yi.subVectors(t.b,fs),Mi.subVectors(t.c,fs),kn.subVectors(yi,xi),Vn.subVectors(Mi,yi),ni.subVectors(xi,Mi);let e=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-ni.z,ni.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,ni.z,0,-ni.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-ni.y,ni.x,0];return!Xr(e,xi,yi,Mi,js)||(e=[1,0,0,0,1,0,0,0,1],!Xr(e,xi,yi,Mi,js))?!1:(Ys.crossVectors(kn,Vn),e=[Ys.x,Ys.y,Ys.z],Xr(e,xi,yi,Mi,js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,Xs=new rn,xi=new I,yi=new I,Mi=new I,kn=new I,Vn=new I,ni=new I,fs=new I,js=new I,Ys=new I,ii=new I;function Xr(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ii.fromArray(r,s);const o=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Qu=new rn,ps=new I,jr=new I;class vn{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qu.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(jr)),this.expandByPoint(ps.copy(t.center).sub(jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new I,Yr=new I,Ks=new I,Hn=new I,Kr=new I,$s=new I,$r=new I;class ss{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Yr.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Yr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ks),o=Hn.dot(this.direction),l=-Hn.dot(Ks),c=Hn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Yr).addScaledVector(Ks,d),f}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,i,s){Kr.subVectors(e,t),$s.subVectors(n,t),$r.crossVectors(Kr,$s);let a=this.direction.dot($r),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const l=o*this.direction.dot($s.crossVectors(Hn,$s));if(l<0)return null;const c=o*this.direction.dot(Kr.cross(Hn));if(c<0||l+c>a)return null;const h=-o*Hn.dot($r);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(t,e,n,i,s,a,o,l,c,h,u,d,f,g,x,_){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,f,g,x,_)}set(t,e,n,i,s,a,o,l,c,h,u,d,f,g,x,_){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Si.setFromMatrixColumn(t,0).length(),s=1/Si.setFromMatrixColumn(t,1).length(),a=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ju,t,td)}lookAt(t,e,n){const i=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Gn.crossVectors(n,We),Gn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Gn.crossVectors(n,We)),Gn.normalize(),Zs.crossVectors(We,Gn),i[0]=Gn.x,i[4]=Zs.x,i[8]=We.x,i[1]=Gn.y,i[5]=Zs.y,i[9]=We.y,i[2]=Gn.z,i[6]=Zs.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],_=n[10],m=n[14],E=n[3],A=n[7],p=n[11],y=n[15],v=i[0],T=i[4],R=i[8],M=i[12],S=i[1],P=i[5],O=i[9],L=i[13],k=i[2],W=i[6],D=i[10],j=i[14],q=i[3],nt=i[7],it=i[11],ft=i[15];return s[0]=a*v+o*S+l*k+c*q,s[4]=a*T+o*P+l*W+c*nt,s[8]=a*R+o*O+l*D+c*it,s[12]=a*M+o*L+l*j+c*ft,s[1]=h*v+u*S+d*k+f*q,s[5]=h*T+u*P+d*W+f*nt,s[9]=h*R+u*O+d*D+f*it,s[13]=h*M+u*L+d*j+f*ft,s[2]=g*v+x*S+_*k+m*q,s[6]=g*T+x*P+_*W+m*nt,s[10]=g*R+x*O+_*D+m*it,s[14]=g*M+x*L+_*j+m*ft,s[3]=E*v+A*S+p*k+y*q,s[7]=E*T+A*P+p*W+y*nt,s[11]=E*R+A*O+p*D+y*it,s[15]=E*M+A*L+p*j+y*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],_=t[11],m=t[15];return g*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+x*(+e*l*f-e*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+_*(+e*c*u-e*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+m*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],_=t[14],m=t[15],E=u*_*c-x*d*c+x*l*f-o*_*f-u*l*m+o*d*m,A=g*d*c-h*_*c-g*l*f+a*_*f+h*l*m-a*d*m,p=h*x*c-g*u*c+g*o*f-a*x*f-h*o*m+a*u*m,y=g*u*l-h*x*l-g*o*d+a*x*d+h*o*_-a*u*_,v=e*E+n*A+i*p+s*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/v;return t[0]=E*T,t[1]=(x*d*s-u*_*s-x*i*f+n*_*f+u*i*m-n*d*m)*T,t[2]=(o*_*s-x*l*s+x*i*c-n*_*c-o*i*m+n*l*m)*T,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*T,t[4]=A*T,t[5]=(h*_*s-g*d*s+g*i*f-e*_*f-h*i*m+e*d*m)*T,t[6]=(g*l*s-a*_*s-g*i*c+e*_*c+a*i*m-e*l*m)*T,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*f+e*l*f)*T,t[8]=p*T,t[9]=(g*u*s-h*x*s-g*n*f+e*x*f+h*n*m-e*u*m)*T,t[10]=(a*x*s-g*o*s+g*n*c-e*x*c-a*n*m+e*o*m)*T,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*f-e*o*f)*T,t[12]=y*T,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*_+e*u*_)*T,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*_-e*o*_)*T,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,x=a*h,_=a*u,m=o*u,E=l*c,A=l*h,p=l*u,y=n.x,v=n.y,T=n.z;return i[0]=(1-(x+m))*y,i[1]=(f+p)*y,i[2]=(g-A)*y,i[3]=0,i[4]=(f-p)*v,i[5]=(1-(d+m))*v,i[6]=(_+E)*v,i[7]=0,i[8]=(g+A)*T,i[9]=(_-E)*T,i[10]=(1-(d+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Si.set(i[0],i[1],i[2]).length();const a=Si.set(i[4],i[5],i[6]).length(),o=Si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],cn.copy(this);const c=1/s,h=1/a,u=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Dn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===Dn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Lr)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Dn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),d=(e+t)*c,f=(n+i)*h;let g,x;if(o===Dn)g=(a+s)*u,x=-2*u;else if(o===Lr)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Si=new I,cn=new Nt,Ju=new I(0,0,0),td=new I(1,1,1),Gn=new I,Zs=new I,We=new I,yl=new Nt,Ml=new Ye;class pn{constructor(t=0,e=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class zo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ed=0;const Sl=new I,bi=new Ye,En=new Nt,Qs=new I,ms=new I,nd=new I,id=new Ye,bl=new I(1,0,0),Tl=new I(0,1,0),El=new I(0,0,1),wl={type:"added"},sd={type:"removed"},Ti={type:"childadded",child:null},Zr={type:"childremoved",child:null};class fe extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new I,e=new pn,n=new Ye,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Bt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(bl,t)}rotateY(t){return this.rotateOnAxis(Tl,t)}rotateZ(t){return this.rotateOnAxis(El,t)}translateOnAxis(t,e){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bl,t)}translateY(t){return this.translateOnAxis(Tl,t)}translateZ(t){return this.translateOnAxis(El,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ms,Qs,this.up):En.lookAt(Qs,ms,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),bi.setFromRotationMatrix(En),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wl),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sd),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wl),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new I(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new I,wn=new I,Qr=new I,An=new I,Ei=new I,wi=new I,Al=new I,Jr=new I,ta=new I,ea=new I,na=new Kt,ia=new Kt,sa=new Kt;class tn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hn.subVectors(t,e),i.cross(hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){hn.subVectors(i,e),wn.subVectors(n,e),Qr.subVectors(t,e);const a=hn.dot(hn),o=hn.dot(wn),l=hn.dot(Qr),c=wn.dot(wn),h=wn.dot(Qr),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return na.setScalar(0),ia.setScalar(0),sa.setScalar(0),na.fromBufferAttribute(t,e),ia.fromBufferAttribute(t,n),sa.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(na,s.x),a.addScaledVector(ia,s.y),a.addScaledVector(sa,s.z),a}static isFrontFacing(t,e,n,i){return hn.subVectors(n,e),wn.subVectors(t,e),hn.cross(wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),hn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Ei.subVectors(i,n),wi.subVectors(s,n),Jr.subVectors(t,n);const l=Ei.dot(Jr),c=wi.dot(Jr);if(l<=0&&c<=0)return e.copy(n);ta.subVectors(t,i);const h=Ei.dot(ta),u=wi.dot(ta);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ei,a);ea.subVectors(t,s);const f=Ei.dot(ea),g=wi.dot(ea);if(g>=0&&f<=g)return e.copy(s);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(wi,o);const _=h*g-f*u;if(_<=0&&u-h>=0&&f-g>=0)return Al.subVectors(s,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Al,o);const m=1/(_+x+d);return a=x*m,o=d*m,e.copy(n).addScaledVector(Ei,a).addScaledVector(wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function ra(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ht.workingColorSpace){if(t=Oo(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ra(a,s,t+1/3),this.g=ra(a,s,t),this.b=ra(a,s,t-1/3)}return Ht.toWorkingColorSpace(this,i),this}setStyle(t,e=ye){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=uh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Ht.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Pe(Ne.r*255,0,255))*65536+Math.round(Pe(Ne.g*255,0,255))*256+Math.round(Pe(Ne.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,i=Ne.g,s=Ne.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=ye){Ht.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,i=Ne.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Js);const n=Is(Wn.h,Js.h,e),i=Is(Wn.s,Js.s,e),s=Is(Wn.l,Js.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new gt;gt.NAMES=uh;let rd=0;class sn extends ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=fn(),this.name="",this.blending=Gi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Ra,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class se extends sn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new I,tr=new dt;class ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=po,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==po&&(t.usage=this.usage),t}}class dh extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fh extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ad=0;const Ze=new Nt,aa=new fe,Ai=new I,qe=new rn,gs=new rn,Ae=new I;class pe extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lh(t)?fh:dh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return aa.lookAt(t),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(qe.min,gs.min),qe.expandByPoint(Ae),Ae.addVectors(qe.max,gs.max),qe.expandByPoint(Ae)):(qe.expandByPoint(gs.min),qe.expandByPoint(gs.max))}qe.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ae.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ae.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(t,c),Ae.add(Ai)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new I,l[R]=new I;const c=new I,h=new I,u=new I,d=new dt,f=new dt,g=new dt,x=new I,_=new I;function m(R,M,S){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),_.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[R].add(x),o[M].add(x),o[S].add(x),l[R].add(_),l[M].add(_),l[S].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,M=E.length;R<M;++R){const S=E[R],P=S.start,O=S.count;for(let L=P,k=P+O;L<k;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const A=new I,p=new I,y=new I,v=new I;function T(R){y.fromBufferAttribute(i,R),v.copy(y);const M=o[R];A.copy(M),A.sub(y.multiplyScalar(y.dot(M))).normalize(),p.crossVectors(v,M);const P=p.dot(l[R])<0?-1:1;a.setXYZW(R,A.x,A.y,A.z,P)}for(let R=0,M=E.length;R<M;++R){const S=E[R],P=S.start,O=S.count;for(let L=P,k=P+O;L<k;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),_=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,_),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,_=l.length;x<_;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new Nt,si=new ss,er=new vn,Rl=new I,nr=new I,ir=new I,sr=new I,oa=new I,rr=new I,Pl=new I,ar=new I;class st extends fe{constructor(t=new pe,e=new se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){rr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(oa.fromBufferAttribute(u,t),a?rr.addScaledVector(oa,h):rr.addScaledVector(oa.sub(e),h))}e.add(rr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(s),si.copy(t.ray).recast(t.near),!(er.containsPoint(si.origin)===!1&&(si.intersectSphere(er,Rl)===null||si.origin.distanceToSquared(Rl)>(t.far-t.near)**2))&&(Cl.copy(s).invert(),si.copy(t.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const _=d[g],m=a[_.materialIndex],E=Math.max(_.start,f.start),A=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let p=E,y=A;p<y;p+=3){const v=o.getX(p),T=o.getX(p+1),R=o.getX(p+2);i=or(this,m,t,n,c,h,u,v,T,R),i&&(i.faceIndex=Math.floor(p/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let _=g,m=x;_<m;_+=3){const E=o.getX(_),A=o.getX(_+1),p=o.getX(_+2);i=or(this,a,t,n,c,h,u,E,A,p),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const _=d[g],m=a[_.materialIndex],E=Math.max(_.start,f.start),A=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));for(let p=E,y=A;p<y;p+=3){const v=p,T=p+1,R=p+2;i=or(this,m,t,n,c,h,u,v,T,R),i&&(i.faceIndex=Math.floor(p/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let _=g,m=x;_<m;_+=3){const E=_,A=_+1,p=_+2;i=or(this,a,t,n,c,h,u,E,A,p),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}}function od(r,t,e,n,i,s,a,o){let l;if(t.side===Ie?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Fn,o),l===null)return null;ar.copy(o),ar.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ar);return c<e.near||c>e.far?null:{distance:c,point:ar.clone(),object:r}}function or(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,nr),r.getVertexPosition(l,ir),r.getVertexPosition(c,sr);const h=od(r,t,e,n,nr,ir,sr,Pl);if(h){const u=new I;tn.getBarycoord(Pl,nr,ir,sr,u),i&&(h.uv=tn.getInterpolatedAttribute(i,o,l,c,u,new dt)),s&&(h.uv1=tn.getInterpolatedAttribute(s,o,l,c,u,new dt)),a&&(h.normal=tn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};tn.getNormal(nr,ir,sr,d.normal),h.face=d,h.barycoord=u}return h}class rs extends pe{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function g(x,_,m,E,A,p,y,v,T,R,M){const S=p/T,P=y/R,O=p/2,L=y/2,k=v/2,W=T+1,D=R+1;let j=0,q=0;const nt=new I;for(let it=0;it<D;it++){const ft=it*P-L;for(let xt=0;xt<W;xt++){const wt=xt*S-O;nt[x]=wt*E,nt[_]=ft*A,nt[m]=k,c.push(nt.x,nt.y,nt.z),nt[x]=0,nt[_]=0,nt[m]=v>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(xt/T),u.push(1-it/R),j+=1}}for(let it=0;it<R;it++)for(let ft=0;ft<T;ft++){const xt=d+ft+W*it,wt=d+ft+W*(it+1),Y=d+(ft+1)+W*(it+1),J=d+(ft+1)+W*it;l.push(xt,wt,J),l.push(wt,Y,J),q+=6}o.addGroup(f,q,M),f+=q,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(r){const t={};for(let e=0;e<r.length;e++){const n=Ji(r[e]);for(const i in n)t[i]=n[i]}return t}function ld(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ph(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}const Bs={clone:Ji,merge:Fe};var cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Se extends sn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class mh extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new I,Il=new dt,Ll=new dt;class Be extends mh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,Il,Ll),e.subVectors(Ll,Il)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ci=-90,Ri=1;class ud extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(Ci,Ri,t,e);i.layers=this.layers,this.add(i);const s=new Be(Ci,Ri,t,e);s.layers=this.layers,this.add(s);const a=new Be(Ci,Ri,t,e);a.layers=this.layers,this.add(a);const o=new Be(Ci,Ri,t,e);o.layers=this.layers,this.add(o);const l=new Be(Ci,Ri,t,e);l.layers=this.layers,this.add(l);const c=new Be(Ci,Ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gh extends Te{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Yi,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dd extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new gh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rs(5,5,5),s=new Se({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Nn});s.uniforms.tEquirect.value=e;const a=new st(i,s),o=e.minFilter;return e.minFilter===Ln&&(e.minFilter=je),new ud(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const la=new I,fd=new I,pd=new Bt;class jn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=la.subVectors(n,e).cross(fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(la),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pd.getNormalMatrix(t),i=this.coplanarPoint(la).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new vn,lr=new I;class ko{constructor(t=new jn,e=new jn,n=new jn,i=new jn,s=new jn,a=new jn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],_=i[11],m=i[12],E=i[13],A=i[14],p=i[15];if(n[0].setComponents(l-s,d-c,_-f,p-m).normalize(),n[1].setComponents(l+s,d+c,_+f,p+m).normalize(),n[2].setComponents(l+a,d+h,_+g,p+E).normalize(),n[3].setComponents(l-a,d-h,_-g,p-E).normalize(),n[4].setComponents(l-o,d-u,_-x,p-A).normalize(),e===Dn)n[5].setComponents(l+o,d+u,_+x,p+A).normalize();else if(e===Lr)n[5].setComponents(o,u,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(lr.x=i.normal.x>0?t.max.x:t.min.x,lr.y=i.normal.y>0?t.max.y:t.min.y,lr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _h(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function md(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class pi extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],_=[];for(let m=0;m<h;m++){const E=m*d-a;for(let A=0;A<c;A++){const p=A*u-s;g.push(p,-E,0),x.push(0,0,1),_.push(A/o),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const A=E+c*m,p=E+c*(m+1),y=E+1+c*(m+1),v=E+1+c*m;f.push(A,p,v),f.push(p,y,v)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.width,t.height,t.widthSegments,t.heightSegments)}}var gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
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
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
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
#endif`,bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,Pd=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zd=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vd=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
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
}`,rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,cf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,mf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wf=`#if defined( USE_POINTS_UV )
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
#endif`,Af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,If=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`#ifdef USE_MORPHTARGETS
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
#endif`,Df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zf=`#ifdef USE_NORMALMAP
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
#endif`,kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,ep=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,up=`#ifdef USE_TRANSMISSION
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_p=`uniform sampler2D t2D;
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`#include <common>
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
}`,bp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tp=`#define DISTANCE
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
}`,Ep=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`uniform float scale;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Lp=`#define LAMBERT
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
}`,Dp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Np=`#define MATCAP
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
}`,Up=`#define MATCAP
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
}`,Fp=`#define NORMAL
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
}`,Bp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Op=`#define PHONG
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
}`,zp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,kp=`#define STANDARD
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
}`,Vp=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Hp=`#define TOON
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
}`,Gp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Wp=`uniform float size;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,jp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Yp=`uniform float rotation;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:gd,alphahash_pars_fragment:_d,alphamap_fragment:vd,alphamap_pars_fragment:xd,alphatest_fragment:yd,alphatest_pars_fragment:Md,aomap_fragment:Sd,aomap_pars_fragment:bd,batching_pars_vertex:Td,batching_vertex:Ed,begin_vertex:wd,beginnormal_vertex:Ad,bsdfs:Cd,iridescence_fragment:Rd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Dd,clipping_planes_vertex:Nd,color_fragment:Ud,color_pars_fragment:Fd,color_pars_vertex:Bd,color_vertex:Od,common:zd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Gd,emissivemap_fragment:Wd,emissivemap_pars_fragment:qd,colorspace_fragment:Xd,colorspace_pars_fragment:jd,envmap_fragment:Yd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:$d,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:cf,envmap_vertex:Qd,fog_vertex:Jd,fog_pars_vertex:tf,fog_fragment:ef,fog_pars_fragment:nf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:rf,lights_lambert_fragment:af,lights_lambert_pars_fragment:of,lights_pars_begin:lf,lights_toon_fragment:hf,lights_toon_pars_fragment:uf,lights_phong_fragment:df,lights_phong_pars_fragment:ff,lights_physical_fragment:pf,lights_physical_pars_fragment:mf,lights_fragment_begin:gf,lights_fragment_maps:_f,lights_fragment_end:vf,logdepthbuf_fragment:xf,logdepthbuf_pars_fragment:yf,logdepthbuf_pars_vertex:Mf,logdepthbuf_vertex:Sf,map_fragment:bf,map_pars_fragment:Tf,map_particle_fragment:Ef,map_particle_pars_fragment:wf,metalnessmap_fragment:Af,metalnessmap_pars_fragment:Cf,morphinstance_vertex:Rf,morphcolor_vertex:Pf,morphnormal_vertex:If,morphtarget_pars_vertex:Lf,morphtarget_vertex:Df,normal_fragment_begin:Nf,normal_fragment_maps:Uf,normal_pars_fragment:Ff,normal_pars_vertex:Bf,normal_vertex:Of,normalmap_pars_fragment:zf,clearcoat_normal_fragment_begin:kf,clearcoat_normal_fragment_maps:Vf,clearcoat_pars_fragment:Hf,iridescence_pars_fragment:Gf,opaque_fragment:Wf,packing:qf,premultiplied_alpha_fragment:Xf,project_vertex:jf,dithering_fragment:Yf,dithering_pars_fragment:Kf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:Zf,shadowmap_pars_fragment:Qf,shadowmap_pars_vertex:Jf,shadowmap_vertex:tp,shadowmask_pars_fragment:ep,skinbase_vertex:np,skinning_pars_vertex:ip,skinning_vertex:sp,skinnormal_vertex:rp,specularmap_fragment:ap,specularmap_pars_fragment:op,tonemapping_fragment:lp,tonemapping_pars_fragment:cp,transmission_fragment:hp,transmission_pars_fragment:up,uv_pars_fragment:dp,uv_pars_vertex:fp,uv_vertex:pp,worldpos_vertex:mp,background_vert:gp,background_frag:_p,backgroundCube_vert:vp,backgroundCube_frag:xp,cube_vert:yp,cube_frag:Mp,depth_vert:Sp,depth_frag:bp,distanceRGBA_vert:Tp,distanceRGBA_frag:Ep,equirect_vert:wp,equirect_frag:Ap,linedashed_vert:Cp,linedashed_frag:Rp,meshbasic_vert:Pp,meshbasic_frag:Ip,meshlambert_vert:Lp,meshlambert_frag:Dp,meshmatcap_vert:Np,meshmatcap_frag:Up,meshnormal_vert:Fp,meshnormal_frag:Bp,meshphong_vert:Op,meshphong_frag:zp,meshphysical_vert:kp,meshphysical_frag:Vp,meshtoon_vert:Hp,meshtoon_frag:Gp,points_vert:Wp,points_frag:qp,shadow_vert:Xp,shadow_frag:jp,sprite_vert:Yp,sprite_frag:Kp},at={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},gn={basic:{uniforms:Fe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Fe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new gt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Fe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Fe([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Fe([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new gt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Fe([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Fe([at.points,at.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Fe([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Fe([at.common,at.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Fe([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Fe([at.sprite,at.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Fe([at.common,at.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Fe([at.lights,at.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};gn.physical={uniforms:Fe([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const cr={r:0,b:0,g:0},ai=new pn,$p=new Nt;function Zp(r,t,e,n,i,s,a){const o=new gt(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(E){let A=E.isScene===!0?E.background:null;return A&&A.isTexture&&(A=(E.backgroundBlurriness>0?e:t).get(A)),A}function x(E){let A=!1;const p=g(E);p===null?m(o,l):p&&p.isColor&&(m(p,1),A=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(E,A){const p=g(A);p&&(p.isCubeTexture||p.mapping===Br)?(h===void 0&&(h=new st(new rs(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:Ji(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(y,v,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ai.copy(A.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=p,h.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(ai)),h.material.toneMapped=Ht.getTransfer(p.colorSpace)!==ee,(u!==p||d!==p.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=p,d=p.version,f=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new st(new pi(2,2),new Se({name:"BackgroundMaterial",uniforms:Ji(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(p.colorSpace)!==ee,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(u!==p||d!==p.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=p,d=p.version,f=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,A){E.getRGB(cr,ph(r)),n.buffers.color.setClear(cr.r,cr.g,cr.b,A,a)}return{getClearColor:function(){return o},setClearColor:function(E,A=1){o.set(E),l=A,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(o,l)},render:x,addToRenderList:_}}function Qp(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(S,P,O,L,k){let W=!1;const D=u(L,O,P);s!==D&&(s=D,c(s.object)),W=f(S,L,O,k),W&&g(S,L,O,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,p(S,P,O,L),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,P,O){const L=O.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let W=k[P.id];W===void 0&&(W={},k[P.id]=W);let D=W[L];return D===void 0&&(D=d(l()),W[L]=D),D}function d(S){const P=[],O=[],L=[];for(let k=0;k<e;k++)P[k]=0,O[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:L,object:S,attributes:{},index:null}}function f(S,P,O,L){const k=s.attributes,W=P.attributes;let D=0;const j=O.getAttributes();for(const q in j)if(j[q].location>=0){const it=k[q];let ft=W[q];if(ft===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor)),it===void 0||it.attribute!==ft||ft&&it.data!==ft.data)return!0;D++}return s.attributesNum!==D||s.index!==L}function g(S,P,O,L){const k={},W=P.attributes;let D=0;const j=O.getAttributes();for(const q in j)if(j[q].location>=0){let it=W[q];it===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(it=S.instanceColor));const ft={};ft.attribute=it,it&&it.data&&(ft.data=it.data),k[q]=ft,D++}s.attributes=k,s.attributesNum=D,s.index=L}function x(){const S=s.newAttributes;for(let P=0,O=S.length;P<O;P++)S[P]=0}function _(S){m(S,0)}function m(S,P){const O=s.newAttributes,L=s.enabledAttributes,k=s.attributeDivisors;O[S]=1,L[S]===0&&(r.enableVertexAttribArray(S),L[S]=1),k[S]!==P&&(r.vertexAttribDivisor(S,P),k[S]=P)}function E(){const S=s.newAttributes,P=s.enabledAttributes;for(let O=0,L=P.length;O<L;O++)P[O]!==S[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function A(S,P,O,L,k,W,D){D===!0?r.vertexAttribIPointer(S,P,O,k,W):r.vertexAttribPointer(S,P,O,L,k,W)}function p(S,P,O,L){x();const k=L.attributes,W=O.getAttributes(),D=P.defaultAttributeValues;for(const j in W){const q=W[j];if(q.location>=0){let nt=k[j];if(nt===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(nt=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(nt=S.instanceColor)),nt!==void 0){const it=nt.normalized,ft=nt.itemSize,xt=t.get(nt);if(xt===void 0)continue;const wt=xt.buffer,Y=xt.type,J=xt.bytesPerElement,yt=Y===r.INT||Y===r.UNSIGNED_INT||nt.gpuType===Ro;if(nt.isInterleavedBufferAttribute){const rt=nt.data,At=rt.stride,Pt=nt.offset;if(rt.isInstancedInterleavedBuffer){for(let kt=0;kt<q.locationSize;kt++)m(q.location+kt,rt.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let kt=0;kt<q.locationSize;kt++)_(q.location+kt);r.bindBuffer(r.ARRAY_BUFFER,wt);for(let kt=0;kt<q.locationSize;kt++)A(q.location+kt,ft/q.locationSize,Y,it,At*J,(Pt+ft/q.locationSize*kt)*J,yt)}else{if(nt.isInstancedBufferAttribute){for(let rt=0;rt<q.locationSize;rt++)m(q.location+rt,nt.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let rt=0;rt<q.locationSize;rt++)_(q.location+rt);r.bindBuffer(r.ARRAY_BUFFER,wt);for(let rt=0;rt<q.locationSize;rt++)A(q.location+rt,ft/q.locationSize,Y,it,ft*J,ft/q.locationSize*rt*J,yt)}}else if(D!==void 0){const it=D[j];if(it!==void 0)switch(it.length){case 2:r.vertexAttrib2fv(q.location,it);break;case 3:r.vertexAttrib3fv(q.location,it);break;case 4:r.vertexAttrib4fv(q.location,it);break;default:r.vertexAttrib1fv(q.location,it)}}}}E()}function y(){R();for(const S in n){const P=n[S];for(const O in P){const L=P[O];for(const k in L)h(L[k].object),delete L[k];delete P[O]}delete n[S]}}function v(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const O in P){const L=P[O];for(const k in L)h(L[k].object),delete L[k];delete P[O]}delete n[S.id]}function T(S){for(const P in n){const O=n[P];if(O[S.id]===void 0)continue;const L=O[S.id];for(const k in L)h(L[k].object),delete L[k];delete O[S.id]}}function R(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:y,releaseStatesOfGeometry:v,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:_,disableUnusedAttributes:E}}function Jp(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tm(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==en&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Bn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==dn&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),p=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=g>0,v=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:p,vertexTextures:y,maxSamples:v}}function em(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new jn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,_=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!_)s?h(null):c();else{const E=s?0:n,A=E*4;let p=m.clippingState||null;l.value=p,p=h(g,d,A,f);for(let y=0;y!==A;++y)p[y]=e[y];m.clippingState=p,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let _=null;if(x!==0){if(_=l.value,g!==!0||_===null){const m=f+x*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(_===null||_.length<m)&&(_=new Float32Array(m));for(let A=0,p=f;A!==x;++A,p+=4)a.copy(u[A]).applyMatrix4(E,o),a.normal.toArray(_,p),_[p+3]=a.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,_}}function nm(r){let t=new WeakMap;function e(a,o){return o===Ba?a.mapping=Yi:o===Oa&&(a.mapping=Ki),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ba||o===Oa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new dd(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class zr extends mh{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vi=4,Dl=[.125,.215,.35,.446,.526,.582],ui=20,ca=new zr,Nl=new gt;let ha=null,ua=0,da=0,fa=!1;const ci=(1+Math.sqrt(5))/2,Pi=1/ci,Ul=[new I(-ci,Pi,0),new I(ci,Pi,0),new I(-Pi,0,ci),new I(Pi,0,ci),new I(0,ci,-Pi),new I(0,ci,Pi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class mo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ha=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ha,ua,da),this._renderer.xr.enabled=fa,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ha=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:_n,format:en,colorSpace:ke,depthBuffer:!1},i=Fl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=im(s)),this._blurMaterial=sm(s,t,e)}return i}_compileMaterial(t){const e=new st(this._lodPlanes[0],t);this._renderer.compile(e,ca)}_sceneToCubeUV(t,e,n,i){const o=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Nl),h.toneMapping=Qn,h.autoClear=!1;const f=new se({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new st(new rs,f);let x=!1;const _=t.background;_?_.isColor&&(f.color.copy(_),t.background=null,x=!0):(f.color.copy(Nl),x=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):E===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const A=this._cubeSize;hr(i,E*A,m>2?A:0,A,A),h.setRenderTarget(i),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Yi||t.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new st(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ca)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ul[(i-s-1)%Ul.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new st(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ui-1),x=s/g,_=isFinite(s)?1+Math.floor(h*x):ui;_>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ui}`);const m=[];let E=0;for(let T=0;T<ui;++T){const R=T/x,M=Math.exp(-R*R/2);m.push(M),T===0?E+=M:T<_&&(E+=2*M)}for(let T=0;T<m.length;T++)m[T]=m[T]/E;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-n;const p=this._sizeLods[i],y=3*p*(i>A-Vi?i-A+Vi:0),v=4*(this._cubeSize-p);hr(e,y,v,3*p,2*p),l.setRenderTarget(e),l.render(u,ca)}}function im(r){const t=[],e=[],n=[];let i=r;const s=r-Vi+1+Dl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Vi?l=Dl[a-r+Vi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,_=2,m=1,E=new Float32Array(x*g*f),A=new Float32Array(_*g*f),p=new Float32Array(m*g*f);for(let v=0;v<f;v++){const T=v%3*2/3-1,R=v>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];E.set(M,x*g*v),A.set(d,_*g*v);const S=[v,v,v,v,v,v];p.set(S,m*g*v)}const y=new pe;y.setAttribute("position",new ve(E,x)),y.setAttribute("uv",new ve(A,_)),y.setAttribute("faceIndex",new ve(p,m)),t.push(y),i>Vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fl(r,t,e){const n=new nn(r,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function sm(r,t,e){const n=new Float32Array(ui),i=new I(0,1,0);return new Se({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Bl(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ol(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rm(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ba||l===Oa,h=l===Yi||l===Ki;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new mo(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new mo(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function am(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function om(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let _=0,m=x.length;_<m;_++)t.remove(x[_])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let _=0,m=x.length;_<m;_++)t.update(x[_],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const E=f.array;x=f.version;for(let A=0,p=E.length;A<p;A+=3){const y=E[A+0],v=E[A+1],T=E[A+2];d.push(y,v,v,T,T,y)}}else if(g!==void 0){const E=g.array;x=g.version;for(let A=0,p=E.length/3-1;A<p;A+=3){const y=A+0,v=A+1,T=A+2;d.push(y,v,v,T,T,y)}}else return;const _=new(lh(d)?fh:dh)(d,1);_.version=x;const m=s.get(u);m&&t.remove(m),s.set(u,_)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function lm(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let _=0;for(let m=0;m<g;m++)_+=f[m];e.update(_,n,1)}function u(d,f,g,x){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],x[m]);else{_.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,g);let m=0;for(let E=0;E<g;E++)m+=f[E]*x[E];e.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cm(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function hm(r,t,e){const n=new WeakMap,i=new Kt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let p=0;g===!0&&(p=1),x===!0&&(p=2),_===!0&&(p=3);let y=o.attributes.position.count*p,v=1;y>t.maxTextureSize&&(v=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const T=new Float32Array(y*v*4*u),R=new hh(T,y,v,u);R.type=dn,R.needsUpdate=!0;const M=p*4;for(let P=0;P<u;P++){const O=m[P],L=E[P],k=A[P],W=y*v*4*P;for(let D=0;D<O.count;D++){const j=D*M;g===!0&&(i.fromBufferAttribute(O,D),T[W+j+0]=i.x,T[W+j+1]=i.y,T[W+j+2]=i.z,T[W+j+3]=0),x===!0&&(i.fromBufferAttribute(L,D),T[W+j+4]=i.x,T[W+j+5]=i.y,T[W+j+6]=i.z,T[W+j+7]=0),_===!0&&(i.fromBufferAttribute(k,D),T[W+j+8]=i.x,T[W+j+9]=i.y,T[W+j+10]=i.z,T[W+j+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new dt(y,v)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let _=0;_<c.length;_++)g+=c[_];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function um(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class vh extends Te{constructor(t,e,n,i,s,a,o,l,c,h=Wi){if(h!==Wi&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wi&&(n=mi),n===void 0&&h===Zi&&(n=$i),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const xh=new Te,zl=new vh(1,1),yh=new hh,Mh=new Zu,Sh=new gh,kl=[],Vl=[],Hl=new Float32Array(16),Gl=new Float32Array(9),Wl=new Float32Array(4);function as(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=kl[i];if(s===void 0&&(s=new Float32Array(i),kl[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ee(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function we(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function kr(r,t){let e=Vl[t];e===void 0&&(e=new Int32Array(t),Vl[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function dm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function fm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;r.uniform2fv(this.addr,t),we(e,t)}}function pm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;r.uniform3fv(this.addr,t),we(e,t)}}function mm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;r.uniform4fv(this.addr,t),we(e,t)}}function gm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;Wl.set(n),r.uniformMatrix2fv(this.addr,!1,Wl),we(e,n)}}function _m(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;Gl.set(n),r.uniformMatrix3fv(this.addr,!1,Gl),we(e,n)}}function vm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;Hl.set(n),r.uniformMatrix4fv(this.addr,!1,Hl),we(e,n)}}function xm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function ym(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;r.uniform2iv(this.addr,t),we(e,t)}}function Mm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;r.uniform3iv(this.addr,t),we(e,t)}}function Sm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;r.uniform4iv(this.addr,t),we(e,t)}}function bm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Tm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;r.uniform2uiv(this.addr,t),we(e,t)}}function Em(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;r.uniform3uiv(this.addr,t),we(e,t)}}function wm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;r.uniform4uiv(this.addr,t),we(e,t)}}function Am(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(zl.compareFunction=oh,s=zl):s=xh,e.setTexture2D(t||s,i)}function Cm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Mh,i)}function Rm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Sh,i)}function Pm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||yh,i)}function Im(r){switch(r){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return vm;case 5124:case 35670:return xm;case 35667:case 35671:return ym;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return bm;case 36294:return Tm;case 36295:return Em;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Lm(r,t){r.uniform1fv(this.addr,t)}function Dm(r,t){const e=as(t,this.size,2);r.uniform2fv(this.addr,e)}function Nm(r,t){const e=as(t,this.size,3);r.uniform3fv(this.addr,e)}function Um(r,t){const e=as(t,this.size,4);r.uniform4fv(this.addr,e)}function Fm(r,t){const e=as(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Bm(r,t){const e=as(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Om(r,t){const e=as(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function zm(r,t){r.uniform1iv(this.addr,t)}function km(r,t){r.uniform2iv(this.addr,t)}function Vm(r,t){r.uniform3iv(this.addr,t)}function Hm(r,t){r.uniform4iv(this.addr,t)}function Gm(r,t){r.uniform1uiv(this.addr,t)}function Wm(r,t){r.uniform2uiv(this.addr,t)}function qm(r,t){r.uniform3uiv(this.addr,t)}function Xm(r,t){r.uniform4uiv(this.addr,t)}function jm(r,t,e){const n=this.cache,i=t.length,s=kr(e,i);Ee(n,s)||(r.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||xh,s[a])}function Ym(r,t,e){const n=this.cache,i=t.length,s=kr(e,i);Ee(n,s)||(r.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Mh,s[a])}function Km(r,t,e){const n=this.cache,i=t.length,s=kr(e,i);Ee(n,s)||(r.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Sh,s[a])}function $m(r,t,e){const n=this.cache,i=t.length,s=kr(e,i);Ee(n,s)||(r.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||yh,s[a])}function Zm(r){switch(r){case 5126:return Lm;case 35664:return Dm;case 35665:return Nm;case 35666:return Um;case 35674:return Fm;case 35675:return Bm;case 35676:return Om;case 5124:case 35670:return zm;case 35667:case 35671:return km;case 35668:case 35672:return Vm;case 35669:case 35673:return Hm;case 5125:return Gm;case 36294:return Wm;case 36295:return qm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return $m}}class Qm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Im(e.type)}}class Jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zm(e.type)}}class tg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function ql(r,t){r.seq.push(t),r.map[t.id]=t}function eg(r,t,e){const n=r.name,i=n.length;for(pa.lastIndex=0;;){const s=pa.exec(n),a=pa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ql(e,c===void 0?new Qm(o,r,t):new Jm(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new tg(o),ql(e,u)),e=u}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);eg(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Xl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const ng=37297;let ig=0;function sg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const jl=new Bt;function rg(r){Ht._getMatrix(jl,Ht.workingColorSpace,r);const t=`mat3( ${jl.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(r)){case Or:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Yl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+sg(r.getShaderSource(t),a)}else return i}function ag(r,t){const e=rg(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function og(r,t){let e;switch(t){case Gc:e="Linear";break;case Wc:e="Reinhard";break;case qc:e="Cineon";break;case Co:e="ACESFilmic";break;case Xc:e="AgX";break;case jc:e="Neutral";break;case du:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ur=new I;function lg(){Ht.getLuminanceCoefficients(ur);const r=ur.x.toFixed(4),t=ur.y.toFixed(4),e=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function hg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ug(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Cs(r){return r!==""}function Kl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $l(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(r){return r.replace(dg,pg)}const fg=new Map;function pg(r,t){let e=zt[t];if(e===void 0){const n=fg.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return go(e)}const mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(r){return r.replace(mg,gg)}function gg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ql(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _g(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Hc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function vg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Yi:case Ki:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function yg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ao:t="ENVMAP_BLENDING_MULTIPLY";break;case hu:t="ENVMAP_BLENDING_MIX";break;case uu:t="ENVMAP_BLENDING_ADD";break}return t}function Mg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sg(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=_g(e),c=vg(e),h=xg(e),u=yg(e),d=Mg(e),f=cg(e),g=hg(s),x=i.createProgram();let _,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cs).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`)):(_=[Ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),m=[Ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,ag("linearToOutputTexel",e.outputColorSpace),lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),a=go(a),a=Kl(a,e),a=$l(a,e),o=go(o),o=Kl(o,e),o=$l(o,e),a=Zl(a),o=Zl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=E+_+a,p=E+m+o,y=Xl(i,i.VERTEX_SHADER,A),v=Xl(i,i.FRAGMENT_SHADER,p);i.attachShader(x,y),i.attachShader(x,v),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(P){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(x).trim(),L=i.getShaderInfoLog(y).trim(),k=i.getShaderInfoLog(v).trim();let W=!0,D=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,y,v);else{const j=Yl(i,y,"vertex"),q=Yl(i,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+j+`
`+q)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||k==="")&&(D=!1);D&&(P.diagnostics={runnable:W,programLog:O,vertexShader:{log:L,prefix:_},fragmentShader:{log:k,prefix:m}})}i.deleteShader(y),i.deleteShader(v),R=new Rr(i,x),M=ug(i,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,ng)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ig++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=v,this}let bg=0;class Tg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Eg(t),e.set(t,n)),n}}class Eg{constructor(t){this.id=bg++,this.code=t,this.usedTimes=0}}function wg(r,t,e,n,i,s,a){const o=new zo,l=new Tg,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,S,P,O,L){const k=O.fog,W=L.geometry,D=M.isMeshStandardMaterial?O.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||D),q=j&&j.mapping===Br?j.image.height:null,nt=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=it!==void 0?it.length:0;let xt=0;W.morphAttributes.position!==void 0&&(xt=1),W.morphAttributes.normal!==void 0&&(xt=2),W.morphAttributes.color!==void 0&&(xt=3);let wt,Y,J,yt;if(nt){const te=gn[nt];wt=te.vertexShader,Y=te.fragmentShader}else wt=M.vertexShader,Y=M.fragmentShader,l.update(M),J=l.getVertexShaderID(M),yt=l.getFragmentShaderID(M);const rt=r.getRenderTarget(),At=r.state.buffers.depth.getReversed(),Pt=L.isInstancedMesh===!0,kt=L.isBatchedMesh===!0,ce=!!M.map,Gt=!!M.matcap,xe=!!j,z=!!M.aoMap,Ke=!!M.lightMap,Wt=!!M.bumpMap,qt=!!M.normalMap,Rt=!!M.displacementMap,he=!!M.emissiveMap,Ct=!!M.metalnessMap,C=!!M.roughnessMap,b=M.anisotropy>0,V=M.clearcoat>0,$=M.dispersion>0,Q=M.iridescence>0,K=M.sheen>0,Tt=M.transmission>0,lt=b&&!!M.anisotropyMap,pt=V&&!!M.clearcoatMap,jt=V&&!!M.clearcoatNormalMap,tt=V&&!!M.clearcoatRoughnessMap,_t=Q&&!!M.iridescenceMap,It=Q&&!!M.iridescenceThicknessMap,Lt=K&&!!M.sheenColorMap,vt=K&&!!M.sheenRoughnessMap,Xt=!!M.specularMap,Ot=!!M.specularColorMap,ae=!!M.specularIntensityMap,U=Tt&&!!M.transmissionMap,ot=Tt&&!!M.thicknessMap,X=!!M.gradientMap,Z=!!M.alphaMap,ut=M.alphaTest>0,ct=!!M.alphaHash,Ut=!!M.extensions;let me=Qn;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(me=r.toneMapping);const Le={shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:wt,fragmentShader:Y,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:yt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:kt,batchingColor:kt&&L._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&L.instanceColor!==null,instancingMorph:Pt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?r.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ke,alphaToCoverage:!!M.alphaToCoverage,map:ce,matcap:Gt,envMap:xe,envMapMode:xe&&j.mapping,envMapCubeUVHeight:q,aoMap:z,lightMap:Ke,bumpMap:Wt,normalMap:qt,displacementMap:d&&Rt,emissiveMap:he,normalMapObjectSpace:qt&&M.normalMapType===xu,normalMapTangentSpace:qt&&M.normalMapType===Bo,metalnessMap:Ct,roughnessMap:C,anisotropy:b,anisotropyMap:lt,clearcoat:V,clearcoatMap:pt,clearcoatNormalMap:jt,clearcoatRoughnessMap:tt,dispersion:$,iridescence:Q,iridescenceMap:_t,iridescenceThicknessMap:It,sheen:K,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:Xt,specularColorMap:Ot,specularIntensityMap:ae,transmission:Tt,transmissionMap:U,thicknessMap:ot,gradientMap:X,opaque:M.transparent===!1&&M.blending===Gi&&M.alphaToCoverage===!1,alphaMap:Z,alphaTest:ut,alphaHash:ct,combine:M.combine,mapUv:ce&&x(M.map.channel),aoMapUv:z&&x(M.aoMap.channel),lightMapUv:Ke&&x(M.lightMap.channel),bumpMapUv:Wt&&x(M.bumpMap.channel),normalMapUv:qt&&x(M.normalMap.channel),displacementMapUv:Rt&&x(M.displacementMap.channel),emissiveMapUv:he&&x(M.emissiveMap.channel),metalnessMapUv:Ct&&x(M.metalnessMap.channel),roughnessMapUv:C&&x(M.roughnessMap.channel),anisotropyMapUv:lt&&x(M.anisotropyMap.channel),clearcoatMapUv:pt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:jt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:It&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:vt&&x(M.sheenRoughnessMap.channel),specularMapUv:Xt&&x(M.specularMap.channel),specularColorMapUv:Ot&&x(M.specularColorMap.channel),specularIntensityMapUv:ae&&x(M.specularIntensityMap.channel),transmissionMapUv:U&&x(M.transmissionMap.channel),thicknessMapUv:ot&&x(M.thicknessMap.channel),alphaMapUv:Z&&x(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(qt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!W.attributes.uv&&(ce||Z),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:L.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:xt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:me,decodeVideoTexture:ce&&M.map.isVideoTexture===!0&&Ht.getTransfer(M.map.colorSpace)===ee,decodeVideoTextureEmissive:he&&M.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(M.emissiveMap.colorSpace)===ee,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_e,flipSided:M.side===Ie,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ut&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&M.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(E(S,M),A(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function E(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function A(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function p(M){const S=g[M.type];let P;if(S){const O=gn[S];P=Bs.clone(O.uniforms)}else P=M.uniforms;return P}function y(M,S){let P;for(let O=0,L=h.length;O<L;O++){const k=h[O];if(k.cacheKey===S){P=k,++P.usedTimes;break}}return P===void 0&&(P=new Sg(r,S,M,s),h.push(P)),P}function v(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function R(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:p,acquireProgram:y,releaseProgram:v,releaseShaderCache:T,programs:h,dispose:R}}function Ag(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Cg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Jl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function tc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,x,_){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:_},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=_),t++,m}function o(u,d,f,g,x,_){const m=a(u,d,f,g,x,_);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,d,f,g,x,_){const m=a(u,d,f,g,x,_);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Cg),n.length>1&&n.sort(d||Jl),i.length>1&&i.sort(d||Jl)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Rg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new tc,r.set(n,[a])):i>=s.length?(a=new tc,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Pg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new gt};break;case"SpotLight":e={position:new I,direction:new I,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function Ig(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Lg=0;function Dg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ng(r){const t=new Pg,e=Ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new Nt,a=new Nt;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,_=0,m=0,E=0,A=0,p=0,y=0,v=0,T=0;c.sort(Dg);for(let M=0,S=c.length;M<S;M++){const P=c[M],O=P.color,L=P.intensity,k=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*L,u+=O.g*L,d+=O.b*L;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],L);T++}else if(P.isDirectionalLight){const D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,q=e.get(P);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=P.shadow.matrix,E++}n.directional[f]=D,f++}else if(P.isSpotLight){const D=t.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(O).multiplyScalar(L),D.distance=k,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[x]=D;const j=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,j.updateMatrices(P),P.castShadow&&v++),n.spotLightMatrix[x]=j.matrix,P.castShadow){const q=e.get(P);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=W,p++}x++}else if(P.isRectAreaLight){const D=t.get(P);D.color.copy(O).multiplyScalar(L),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=D,_++}else if(P.isPointLight){const D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){const j=P.shadow,q=e.get(P);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,A++}n.point[g]=D,g++}else if(P.isHemisphereLight){const D=t.get(P);D.skyColor.copy(P.color).multiplyScalar(L),D.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[m]=D,m++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==_||R.hemiLength!==m||R.numDirectionalShadows!==E||R.numPointShadows!==A||R.numSpotShadows!==p||R.numSpotMaps!==y||R.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=_,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=p,n.spotShadowMap.length=p,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=p+y-v,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=T,R.directionalLength=f,R.pointLength=g,R.spotLength=x,R.rectAreaLength=_,R.hemiLength=m,R.numDirectionalShadows=E,R.numPointShadows=A,R.numSpotShadows=p,R.numSpotMaps=y,R.numLightProbes=T,n.version=Lg++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const _=h.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const A=c[m];if(A.isDirectionalLight){const p=n.directional[u];p.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),p.direction.sub(i),p.direction.transformDirection(_),u++}else if(A.isSpotLight){const p=n.spot[f];p.position.setFromMatrixPosition(A.matrixWorld),p.position.applyMatrix4(_),p.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),p.direction.sub(i),p.direction.transformDirection(_),f++}else if(A.isRectAreaLight){const p=n.rectArea[g];p.position.setFromMatrixPosition(A.matrixWorld),p.position.applyMatrix4(_),a.identity(),s.copy(A.matrixWorld),s.premultiply(_),a.extractRotation(s),p.halfWidth.set(A.width*.5,0,0),p.halfHeight.set(0,A.height*.5,0),p.halfWidth.applyMatrix4(a),p.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){const p=n.point[d];p.position.setFromMatrixPosition(A.matrixWorld),p.position.applyMatrix4(_),d++}else if(A.isHemisphereLight){const p=n.hemi[x];p.direction.setFromMatrixPosition(A.matrixWorld),p.direction.transformDirection(_),x++}}}return{setup:o,setupView:l,state:n}}function ec(r){const t=new Ng(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Ug(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new ec(r),t.set(i,[o])):s>=a.length?(o=new ec(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Fg extends sn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bg extends sn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kg(r,t,e){let n=new ko;const i=new dt,s=new dt,a=new Kt,o=new Fg({depthPacking:vu}),l=new Bg,c={},h=e.maxTextureSize,u={[Fn]:Ie,[Ie]:Fn,[_e]:_e},d=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Og,fragmentShader:zg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new st(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let m=this.type;this.render=function(v,T,R){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||v.length===0)return;const M=r.getRenderTarget(),S=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Nn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const L=m!==Pn&&this.type===Pn,k=m===Pn&&this.type!==Pn;for(let W=0,D=v.length;W<D;W++){const j=v[W],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const nt=q.getFrameExtents();if(i.multiply(nt),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/nt.x),i.x=s.x*nt.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/nt.y),i.y=s.y*nt.y,q.mapSize.y=s.y)),q.map===null||L===!0||k===!0){const ft=this.type!==Pn?{minFilter:ze,magFilter:ze}:{};q.map!==null&&q.map.dispose(),q.map=new nn(i.x,i.y,ft),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const it=q.getViewportCount();for(let ft=0;ft<it;ft++){const xt=q.getViewport(ft);a.set(s.x*xt.x,s.y*xt.y,s.x*xt.z,s.y*xt.w),O.viewport(a),q.updateMatrices(j,ft),n=q.getFrustum(),p(T,R,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===Pn&&E(q,R),q.needsUpdate=!1}m=this.type,_.needsUpdate=!1,r.setRenderTarget(M,S,P)};function E(v,T){const R=t.update(x);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new nn(i.x,i.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(T,null,R,d,x,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(T,null,R,f,x,null)}function A(v,T,R,M){let S=null;const P=R.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(P!==void 0)S=P;else if(S=R.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=S.uuid,L=T.uuid;let k=c[O];k===void 0&&(k={},c[O]=k);let W=k[L];W===void 0&&(W=S.clone(),k[L]=W,T.addEventListener("dispose",y)),S=W}if(S.visible=T.visible,S.wireframe=T.wireframe,M===Pn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=r.properties.get(S);O.light=R}return S}function p(v,T,R,M,S){if(v.visible===!1)return;if(v.layers.test(T.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&S===Pn)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,v.matrixWorld);const L=t.update(v),k=v.material;if(Array.isArray(k)){const W=L.groups;for(let D=0,j=W.length;D<j;D++){const q=W[D],nt=k[q.materialIndex];if(nt&&nt.visible){const it=A(v,nt,M,S);v.onBeforeShadow(r,v,T,R,L,it,q),r.renderBufferDirect(R,null,L,it,v,q),v.onAfterShadow(r,v,T,R,L,it,q)}}}else if(k.visible){const W=A(v,k,M,S);v.onBeforeShadow(r,v,T,R,L,W,null),r.renderBufferDirect(R,null,L,W,v,null),v.onAfterShadow(r,v,T,R,L,W,null)}}const O=v.children;for(let L=0,k=O.length;L<k;L++)p(O[L],T,R,M,S)}function y(v){v.target.removeEventListener("dispose",y);for(const R in c){const M=c[R],S=v.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Vg={[Pa]:Ia,[La]:Ua,[Da]:Fa,[ji]:Na,[Ia]:Pa,[Ua]:La,[Fa]:Da,[Na]:ji};function Hg(r,t){function e(){let U=!1;const ot=new Kt;let X=null;const Z=new Kt(0,0,0,0);return{setMask:function(ut){X!==ut&&!U&&(r.colorMask(ut,ut,ut,ut),X=ut)},setLocked:function(ut){U=ut},setClear:function(ut,ct,Ut,me,Le){Le===!0&&(ut*=me,ct*=me,Ut*=me),ot.set(ut,ct,Ut,me),Z.equals(ot)===!1&&(r.clearColor(ut,ct,Ut,me),Z.copy(ot))},reset:function(){U=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let U=!1,ot=!1,X=null,Z=null,ut=null;return{setReversed:function(ct){if(ot!==ct){const Ut=t.get("EXT_clip_control");ot?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const me=ut;ut=null,this.setClear(me)}ot=ct},getReversed:function(){return ot},setTest:function(ct){ct?rt(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(ct){X!==ct&&!U&&(r.depthMask(ct),X=ct)},setFunc:function(ct){if(ot&&(ct=Vg[ct]),Z!==ct){switch(ct){case Pa:r.depthFunc(r.NEVER);break;case Ia:r.depthFunc(r.ALWAYS);break;case La:r.depthFunc(r.LESS);break;case ji:r.depthFunc(r.LEQUAL);break;case Da:r.depthFunc(r.EQUAL);break;case Na:r.depthFunc(r.GEQUAL);break;case Ua:r.depthFunc(r.GREATER);break;case Fa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=ct}},setLocked:function(ct){U=ct},setClear:function(ct){ut!==ct&&(ot&&(ct=1-ct),r.clearDepth(ct),ut=ct)},reset:function(){U=!1,X=null,Z=null,ut=null,ot=!1}}}function i(){let U=!1,ot=null,X=null,Z=null,ut=null,ct=null,Ut=null,me=null,Le=null;return{setTest:function(te){U||(te?rt(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(te){ot!==te&&!U&&(r.stencilMask(te),ot=te)},setFunc:function(te,an,Mn){(X!==te||Z!==an||ut!==Mn)&&(r.stencilFunc(te,an,Mn),X=te,Z=an,ut=Mn)},setOp:function(te,an,Mn){(ct!==te||Ut!==an||me!==Mn)&&(r.stencilOp(te,an,Mn),ct=te,Ut=an,me=Mn)},setLocked:function(te){U=te},setClear:function(te){Le!==te&&(r.clearStencil(te),Le=te)},reset:function(){U=!1,ot=null,X=null,Z=null,ut=null,ct=null,Ut=null,me=null,Le=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,_=null,m=null,E=null,A=null,p=null,y=null,v=null,T=new gt(0,0,0),R=0,M=!1,S=null,P=null,O=null,L=null,k=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,j=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),D=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),D=j>=2);let nt=null,it={};const ft=r.getParameter(r.SCISSOR_BOX),xt=r.getParameter(r.VIEWPORT),wt=new Kt().fromArray(ft),Y=new Kt().fromArray(xt);function J(U,ot,X,Z){const ut=new Uint8Array(4),ct=r.createTexture();r.bindTexture(U,ct),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ut=0;Ut<X;Ut++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ot,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,ut):r.texImage2D(ot+Ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ut);return ct}const yt={};yt[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),yt[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),yt[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(r.DEPTH_TEST),a.setFunc(ji),Wt(!1),qt(al),rt(r.CULL_FACE),z(Nn);function rt(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function At(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Pt(U,ot){return u[U]!==ot?(r.bindFramebuffer(U,ot),u[U]=ot,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ot),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ot),!0):!1}function kt(U,ot){let X=f,Z=!1;if(U){X=d.get(ot),X===void 0&&(X=[],d.set(ot,X));const ut=U.textures;if(X.length!==ut.length||X[0]!==r.COLOR_ATTACHMENT0){for(let ct=0,Ut=ut.length;ct<Ut;ct++)X[ct]=r.COLOR_ATTACHMENT0+ct;X.length=ut.length,Z=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,Z=!0);Z&&r.drawBuffers(X)}function ce(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const Gt={[hi]:r.FUNC_ADD,[jh]:r.FUNC_SUBTRACT,[Yh]:r.FUNC_REVERSE_SUBTRACT};Gt[Kh]=r.MIN,Gt[$h]=r.MAX;const xe={[Zh]:r.ZERO,[Qh]:r.ONE,[Jh]:r.SRC_COLOR,[Ca]:r.SRC_ALPHA,[ru]:r.SRC_ALPHA_SATURATE,[iu]:r.DST_COLOR,[eu]:r.DST_ALPHA,[tu]:r.ONE_MINUS_SRC_COLOR,[Ra]:r.ONE_MINUS_SRC_ALPHA,[su]:r.ONE_MINUS_DST_COLOR,[nu]:r.ONE_MINUS_DST_ALPHA,[au]:r.CONSTANT_COLOR,[ou]:r.ONE_MINUS_CONSTANT_COLOR,[lu]:r.CONSTANT_ALPHA,[cu]:r.ONE_MINUS_CONSTANT_ALPHA};function z(U,ot,X,Z,ut,ct,Ut,me,Le,te){if(U===Nn){x===!0&&(At(r.BLEND),x=!1);return}if(x===!1&&(rt(r.BLEND),x=!0),U!==Xh){if(U!==_||te!==M){if((m!==hi||p!==hi)&&(r.blendEquation(r.FUNC_ADD),m=hi,p=hi),te)switch(U){case Gi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zn:r.blendFunc(r.ONE,r.ONE);break;case ol:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ll:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Gi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ol:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ll:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,A=null,y=null,v=null,T.set(0,0,0),R=0,_=U,M=te}return}ut=ut||ot,ct=ct||X,Ut=Ut||Z,(ot!==m||ut!==p)&&(r.blendEquationSeparate(Gt[ot],Gt[ut]),m=ot,p=ut),(X!==E||Z!==A||ct!==y||Ut!==v)&&(r.blendFuncSeparate(xe[X],xe[Z],xe[ct],xe[Ut]),E=X,A=Z,y=ct,v=Ut),(me.equals(T)===!1||Le!==R)&&(r.blendColor(me.r,me.g,me.b,Le),T.copy(me),R=Le),_=U,M=!1}function Ke(U,ot){U.side===_e?At(r.CULL_FACE):rt(r.CULL_FACE);let X=U.side===Ie;ot&&(X=!X),Wt(X),U.blending===Gi&&U.transparent===!1?z(Nn):z(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Z=U.stencilWrite;o.setTest(Z),Z&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),he(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(U){S!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),S=U)}function qt(U){U!==Wh?(rt(r.CULL_FACE),U!==P&&(U===al?r.cullFace(r.BACK):U===qh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),P=U}function Rt(U){U!==O&&(D&&r.lineWidth(U),O=U)}function he(U,ot,X){U?(rt(r.POLYGON_OFFSET_FILL),(L!==ot||k!==X)&&(r.polygonOffset(ot,X),L=ot,k=X)):At(r.POLYGON_OFFSET_FILL)}function Ct(U){U?rt(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function C(U){U===void 0&&(U=r.TEXTURE0+W-1),nt!==U&&(r.activeTexture(U),nt=U)}function b(U,ot,X){X===void 0&&(nt===null?X=r.TEXTURE0+W-1:X=nt);let Z=it[X];Z===void 0&&(Z={type:void 0,texture:void 0},it[X]=Z),(Z.type!==U||Z.texture!==ot)&&(nt!==X&&(r.activeTexture(X),nt=X),r.bindTexture(U,ot||yt[U]),Z.type=U,Z.texture=ot)}function V(){const U=it[nt];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function jt(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(U){wt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),wt.copy(U))}function vt(U){Y.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function Xt(U,ot){let X=c.get(ot);X===void 0&&(X=new WeakMap,c.set(ot,X));let Z=X.get(U);Z===void 0&&(Z=r.getUniformBlockIndex(ot,U.name),X.set(U,Z))}function Ot(U,ot){const Z=c.get(ot).get(U);l.get(ot)!==Z&&(r.uniformBlockBinding(ot,Z,U.__bindingPointIndex),l.set(ot,Z))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},nt=null,it={},u={},d=new WeakMap,f=[],g=null,x=!1,_=null,m=null,E=null,A=null,p=null,y=null,v=null,T=new gt(0,0,0),R=0,M=!1,S=null,P=null,O=null,L=null,k=null,wt.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:rt,disable:At,bindFramebuffer:Pt,drawBuffers:kt,useProgram:ce,setBlending:z,setMaterial:Ke,setFlipSided:Wt,setCullFace:qt,setLineWidth:Rt,setPolygonOffset:he,setScissorTest:Ct,activeTexture:C,bindTexture:b,unbindTexture:V,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:_t,texImage3D:It,updateUBOMapping:Xt,uniformBlockBinding:Ot,texStorage2D:jt,texStorage3D:tt,texSubImage2D:K,texSubImage3D:Tt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Lt,viewport:vt,reset:ae}}function nc(r,t,e,n){const i=Gg(n);switch(e){case Jc:return r*t;case eh:return r*t;case nh:return r*t*2;case Lo:return r*t/i.components*i.byteLength;case Do:return r*t/i.components*i.byteLength;case ih:return r*t*2/i.components*i.byteLength;case No:return r*t*2/i.components*i.byteLength;case th:return r*t*3/i.components*i.byteLength;case en:return r*t*4/i.components*i.byteLength;case Uo:return r*t*4/i.components*i.byteLength;case Tr:case Er:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wr:case Ar:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ka:case Ha:return Math.max(r,16)*Math.max(t,8)/4;case za:case Va:return Math.max(r,8)*Math.max(t,8)/2;case Ga:case Wa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case $a:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Za:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case to:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case eo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case no:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case io:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case so:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ro:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Cr:case ao:case oo:return Math.ceil(r/4)*Math.ceil(t/4)*16;case sh:case lo:return Math.ceil(r/4)*Math.ceil(t/4)*8;case co:case ho:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gg(r){switch(r){case Bn:case $c:return{byteLength:1,components:1};case Ds:case Zc:case _n:return{byteLength:2,components:1};case Po:case Io:return{byteLength:2,components:4};case mi:case Ro:case dn:return{byteLength:4,components:1};case Qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Wg(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return f?new OffscreenCanvas(C,b):Fs("canvas")}function x(C,b,V){let $=1;const Q=Ct(C);if((Q.width>V||Q.height>V)&&($=V/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor($*Q.width),Tt=Math.floor($*Q.height);u===void 0&&(u=g(K,Tt));const lt=b?g(K,Tt):u;return lt.width=K,lt.height=Tt,lt.getContext("2d").drawImage(C,0,0,K,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Tt+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function _(C){return C.generateMipmaps}function m(C){r.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(C,b,V,$,Q=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=b;if(b===r.RED&&(V===r.FLOAT&&(K=r.R32F),V===r.HALF_FLOAT&&(K=r.R16F),V===r.UNSIGNED_BYTE&&(K=r.R8)),b===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.R8UI),V===r.UNSIGNED_SHORT&&(K=r.R16UI),V===r.UNSIGNED_INT&&(K=r.R32UI),V===r.BYTE&&(K=r.R8I),V===r.SHORT&&(K=r.R16I),V===r.INT&&(K=r.R32I)),b===r.RG&&(V===r.FLOAT&&(K=r.RG32F),V===r.HALF_FLOAT&&(K=r.RG16F),V===r.UNSIGNED_BYTE&&(K=r.RG8)),b===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.RG8UI),V===r.UNSIGNED_SHORT&&(K=r.RG16UI),V===r.UNSIGNED_INT&&(K=r.RG32UI),V===r.BYTE&&(K=r.RG8I),V===r.SHORT&&(K=r.RG16I),V===r.INT&&(K=r.RG32I)),b===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.RGB8UI),V===r.UNSIGNED_SHORT&&(K=r.RGB16UI),V===r.UNSIGNED_INT&&(K=r.RGB32UI),V===r.BYTE&&(K=r.RGB8I),V===r.SHORT&&(K=r.RGB16I),V===r.INT&&(K=r.RGB32I)),b===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),V===r.UNSIGNED_INT&&(K=r.RGBA32UI),V===r.BYTE&&(K=r.RGBA8I),V===r.SHORT&&(K=r.RGBA16I),V===r.INT&&(K=r.RGBA32I)),b===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),b===r.RGBA){const Tt=Q?Or:Ht.getTransfer($);V===r.FLOAT&&(K=r.RGBA32F),V===r.HALF_FLOAT&&(K=r.RGBA16F),V===r.UNSIGNED_BYTE&&(K=Tt===ee?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function p(C,b){let V;return C?b===null||b===mi||b===$i?V=r.DEPTH24_STENCIL8:b===dn?V=r.DEPTH32F_STENCIL8:b===Ds&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===mi||b===$i?V=r.DEPTH_COMPONENT24:b===dn?V=r.DEPTH_COMPONENT32F:b===Ds&&(V=r.DEPTH_COMPONENT16),V}function y(C,b){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==ze&&C.minFilter!==je?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function v(C){const b=C.target;b.removeEventListener("dispose",v),R(b),b.isVideoTexture&&h.delete(b)}function T(C){const b=C.target;b.removeEventListener("dispose",T),S(b)}function R(C){const b=n.get(C);if(b.__webglInit===void 0)return;const V=C.source,$=d.get(V);if($){const Q=$[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(C),Object.keys($).length===0&&d.delete(V)}n.remove(C)}function M(C){const b=n.get(C);r.deleteTexture(b.__webglTexture);const V=C.source,$=d.get(V);delete $[b.__cacheKey],a.memory.textures--}function S(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let Q=0;Q<b.__webglFramebuffer[$].length;Q++)r.deleteFramebuffer(b.__webglFramebuffer[$][Q]);else r.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)r.deleteFramebuffer(b.__webglFramebuffer[$]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=C.textures;for(let $=0,Q=V.length;$<Q;$++){const K=n.get(V[$]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(V[$])}n.remove(C)}let P=0;function O(){P=0}function L(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function k(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function W(C,b){const V=n.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(V,C,b);return}}e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+b)}function D(C,b){const V=n.get(C);if(C.version>0&&V.__version!==C.version){Y(V,C,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+b)}function j(C,b){const V=n.get(C);if(C.version>0&&V.__version!==C.version){Y(V,C,b);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+b)}function q(C,b){const V=n.get(C);if(C.version>0&&V.__version!==C.version){J(V,C,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+b)}const nt={[Jn]:r.REPEAT,[Kn]:r.CLAMP_TO_EDGE,[Pr]:r.MIRRORED_REPEAT},it={[ze]:r.NEAREST,[Kc]:r.NEAREST_MIPMAP_NEAREST,[ws]:r.NEAREST_MIPMAP_LINEAR,[je]:r.LINEAR,[br]:r.LINEAR_MIPMAP_NEAREST,[Ln]:r.LINEAR_MIPMAP_LINEAR},ft={[yu]:r.NEVER,[wu]:r.ALWAYS,[Mu]:r.LESS,[oh]:r.LEQUAL,[Su]:r.EQUAL,[Eu]:r.GEQUAL,[bu]:r.GREATER,[Tu]:r.NOTEQUAL};function xt(C,b){if(b.type===dn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===je||b.magFilter===br||b.magFilter===ws||b.magFilter===Ln||b.minFilter===je||b.minFilter===br||b.minFilter===ws||b.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,nt[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,nt[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,nt[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,it[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,it[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ft[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ze||b.minFilter!==ws&&b.minFilter!==Ln||b.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function wt(C,b){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",v));const $=b.source;let Q=d.get($);Q===void 0&&(Q={},d.set($,Q));const K=k(b);if(K!==C.__cacheKey){Q[K]===void 0&&(Q[K]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[K].usedTimes++;const Tt=Q[C.__cacheKey];Tt!==void 0&&(Q[C.__cacheKey].usedTimes--,Tt.usedTimes===0&&M(b)),C.__cacheKey=K,C.__webglTexture=Q[K].texture}return V}function Y(C,b,V){let $=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=r.TEXTURE_3D);const Q=wt(C,b),K=b.source;e.bindTexture($,C.__webglTexture,r.TEXTURE0+V);const Tt=n.get(K);if(K.version!==Tt.__version||Q===!0){e.activeTexture(r.TEXTURE0+V);const lt=Ht.getPrimaries(Ht.workingColorSpace),pt=b.colorSpace===Yn?null:Ht.getPrimaries(b.colorSpace),jt=b.colorSpace===Yn||lt===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let tt=x(b.image,!1,i.maxTextureSize);tt=he(b,tt);const _t=s.convert(b.format,b.colorSpace),It=s.convert(b.type);let Lt=A(b.internalFormat,_t,It,b.colorSpace,b.isVideoTexture);xt($,b);let vt;const Xt=b.mipmaps,Ot=b.isVideoTexture!==!0,ae=Tt.__version===void 0||Q===!0,U=K.dataReady,ot=y(b,tt);if(b.isDepthTexture)Lt=p(b.format===Zi,b.type),ae&&(Ot?e.texStorage2D(r.TEXTURE_2D,1,Lt,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,Lt,tt.width,tt.height,0,_t,It,null));else if(b.isDataTexture)if(Xt.length>0){Ot&&ae&&e.texStorage2D(r.TEXTURE_2D,ot,Lt,Xt[0].width,Xt[0].height);for(let X=0,Z=Xt.length;X<Z;X++)vt=Xt[X],Ot?U&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,It,vt.data):e.texImage2D(r.TEXTURE_2D,X,Lt,vt.width,vt.height,0,_t,It,vt.data);b.generateMipmaps=!1}else Ot?(ae&&e.texStorage2D(r.TEXTURE_2D,ot,Lt,tt.width,tt.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,tt.width,tt.height,_t,It,tt.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,tt.width,tt.height,0,_t,It,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ot&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,Lt,Xt[0].width,Xt[0].height,tt.depth);for(let X=0,Z=Xt.length;X<Z;X++)if(vt=Xt[X],b.format!==en)if(_t!==null)if(Ot){if(U)if(b.layerUpdates.size>0){const ut=nc(vt.width,vt.height,b.format,b.type);for(const ct of b.layerUpdates){const Ut=vt.data.subarray(ct*ut/vt.data.BYTES_PER_ELEMENT,(ct+1)*ut/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,ct,vt.width,vt.height,1,_t,Ut)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,tt.depth,_t,vt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Lt,vt.width,vt.height,tt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,tt.depth,_t,It,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,X,Lt,vt.width,vt.height,tt.depth,0,_t,It,vt.data)}else{Ot&&ae&&e.texStorage2D(r.TEXTURE_2D,ot,Lt,Xt[0].width,Xt[0].height);for(let X=0,Z=Xt.length;X<Z;X++)vt=Xt[X],b.format!==en?_t!==null?Ot?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,X,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?U&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,It,vt.data):e.texImage2D(r.TEXTURE_2D,X,Lt,vt.width,vt.height,0,_t,It,vt.data)}else if(b.isDataArrayTexture)if(Ot){if(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,Lt,tt.width,tt.height,tt.depth),U)if(b.layerUpdates.size>0){const X=nc(tt.width,tt.height,b.format,b.type);for(const Z of b.layerUpdates){const ut=tt.data.subarray(Z*X/tt.data.BYTES_PER_ELEMENT,(Z+1)*X/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,_t,It,ut)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,_t,It,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,tt.width,tt.height,tt.depth,0,_t,It,tt.data);else if(b.isData3DTexture)Ot?(ae&&e.texStorage3D(r.TEXTURE_3D,ot,Lt,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,_t,It,tt.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,tt.width,tt.height,tt.depth,0,_t,It,tt.data);else if(b.isFramebufferTexture){if(ae)if(Ot)e.texStorage2D(r.TEXTURE_2D,ot,Lt,tt.width,tt.height);else{let X=tt.width,Z=tt.height;for(let ut=0;ut<ot;ut++)e.texImage2D(r.TEXTURE_2D,ut,Lt,X,Z,0,_t,It,null),X>>=1,Z>>=1}}else if(Xt.length>0){if(Ot&&ae){const X=Ct(Xt[0]);e.texStorage2D(r.TEXTURE_2D,ot,Lt,X.width,X.height)}for(let X=0,Z=Xt.length;X<Z;X++)vt=Xt[X],Ot?U&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,_t,It,vt):e.texImage2D(r.TEXTURE_2D,X,Lt,_t,It,vt);b.generateMipmaps=!1}else if(Ot){if(ae){const X=Ct(tt);e.texStorage2D(r.TEXTURE_2D,ot,Lt,X.width,X.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,It,tt)}else e.texImage2D(r.TEXTURE_2D,0,Lt,_t,It,tt);_(b)&&m($),Tt.__version=K.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function J(C,b,V){if(b.image.length!==6)return;const $=wt(C,b),Q=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+V);const K=n.get(Q);if(Q.version!==K.__version||$===!0){e.activeTexture(r.TEXTURE0+V);const Tt=Ht.getPrimaries(Ht.workingColorSpace),lt=b.colorSpace===Yn?null:Ht.getPrimaries(b.colorSpace),pt=b.colorSpace===Yn||Tt===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const jt=b.isCompressedTexture||b.image[0].isCompressedTexture,tt=b.image[0]&&b.image[0].isDataTexture,_t=[];for(let Z=0;Z<6;Z++)!jt&&!tt?_t[Z]=x(b.image[Z],!0,i.maxCubemapSize):_t[Z]=tt?b.image[Z].image:b.image[Z],_t[Z]=he(b,_t[Z]);const It=_t[0],Lt=s.convert(b.format,b.colorSpace),vt=s.convert(b.type),Xt=A(b.internalFormat,Lt,vt,b.colorSpace),Ot=b.isVideoTexture!==!0,ae=K.__version===void 0||$===!0,U=Q.dataReady;let ot=y(b,It);xt(r.TEXTURE_CUBE_MAP,b);let X;if(jt){Ot&&ae&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,Xt,It.width,It.height);for(let Z=0;Z<6;Z++){X=_t[Z].mipmaps;for(let ut=0;ut<X.length;ut++){const ct=X[ut];b.format!==en?Lt!==null?Ot?U&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ct.width,ct.height,Lt,ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Xt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ct.width,ct.height,Lt,vt,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Xt,ct.width,ct.height,0,Lt,vt,ct.data)}}}else{if(X=b.mipmaps,Ot&&ae){X.length>0&&ot++;const Z=Ct(_t[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,Xt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){Ot?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,_t[Z].width,_t[Z].height,Lt,vt,_t[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,_t[Z].width,_t[Z].height,0,Lt,vt,_t[Z].data);for(let ut=0;ut<X.length;ut++){const Ut=X[ut].image[Z].image;Ot?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Ut.width,Ut.height,Lt,vt,Ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Xt,Ut.width,Ut.height,0,Lt,vt,Ut.data)}}else{Ot?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Lt,vt,_t[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,Lt,vt,_t[Z]);for(let ut=0;ut<X.length;ut++){const ct=X[ut];Ot?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Lt,vt,ct.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Xt,Lt,vt,ct.image[Z])}}}_(b)&&m(r.TEXTURE_CUBE_MAP),K.__version=Q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function yt(C,b,V,$,Q,K){const Tt=s.convert(V.format,V.colorSpace),lt=s.convert(V.type),pt=A(V.internalFormat,Tt,lt,V.colorSpace),jt=n.get(b),tt=n.get(V);if(tt.__renderTarget=b,!jt.__hasExternalTextures){const _t=Math.max(1,b.width>>K),It=Math.max(1,b.height>>K);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,pt,_t,It,b.depth,0,Tt,lt,null):e.texImage2D(Q,K,pt,_t,It,0,Tt,lt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),qt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,Q,tt.__webglTexture,0,Wt(b)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,Q,tt.__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(C,b,V){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){const $=b.depthTexture,Q=$&&$.isDepthTexture?$.type:null,K=p(b.stencilBuffer,Q),Tt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=Wt(b);qt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,K,b.width,b.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,K,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,K,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,C)}else{const $=b.textures;for(let Q=0;Q<$.length;Q++){const K=$[Q],Tt=s.convert(K.format,K.colorSpace),lt=s.convert(K.type),pt=A(K.internalFormat,Tt,lt,K.colorSpace),jt=Wt(b);V&&qt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,pt,b.width,b.height):qt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt,pt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,pt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function At(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);const Q=$.__webglTexture,K=Wt(b);if(b.depthTexture.format===Wi)qt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Zi)qt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const b=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=$}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");At(b.__webglFramebuffer,C)}else if(V){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=r.createRenderbuffer(),rt(b.__webglDepthbuffer[$],C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),rt(b.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,Q)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(C,b,V){const $=n.get(C);b!==void 0&&yt($.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Pt(C)}function ce(C){const b=C.texture,V=n.get(C),$=n.get(b);C.addEventListener("dispose",T);const Q=C.textures,K=C.isWebGLCubeRenderTarget===!0,Tt=Q.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=b.version,a.memory.textures++),K){V.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[lt]=[];for(let pt=0;pt<b.mipmaps.length;pt++)V.__webglFramebuffer[lt][pt]=r.createFramebuffer()}else V.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let lt=0;lt<b.mipmaps.length;lt++)V.__webglFramebuffer[lt]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Tt)for(let lt=0,pt=Q.length;lt<pt;lt++){const jt=n.get(Q[lt]);jt.__webglTexture===void 0&&(jt.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&qt(C)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){const pt=Q[lt];V.__webglColorRenderbuffer[lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[lt]);const jt=s.convert(pt.format,pt.colorSpace),tt=s.convert(pt.type),_t=A(pt.internalFormat,jt,tt,pt.colorSpace,C.isXRRenderTarget===!0),It=Wt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,It,_t,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,V.__webglColorRenderbuffer[lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),rt(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),xt(r.TEXTURE_CUBE_MAP,b);for(let lt=0;lt<6;lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)yt(V.__webglFramebuffer[lt][pt],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else yt(V.__webglFramebuffer[lt],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);_(b)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let lt=0,pt=Q.length;lt<pt;lt++){const jt=Q[lt],tt=n.get(jt);e.bindTexture(r.TEXTURE_2D,tt.__webglTexture),xt(r.TEXTURE_2D,jt),yt(V.__webglFramebuffer,C,jt,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,0),_(jt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let lt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),xt(lt,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)yt(V.__webglFramebuffer[pt],C,b,r.COLOR_ATTACHMENT0,lt,pt);else yt(V.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,lt,0);_(b)&&m(lt),e.unbindTexture()}C.depthBuffer&&Pt(C)}function Gt(C){const b=C.textures;for(let V=0,$=b.length;V<$;V++){const Q=b[V];if(_(Q)){const K=E(C),Tt=n.get(Q).__webglTexture;e.bindTexture(K,Tt),m(K),e.unbindTexture()}}}const xe=[],z=[];function Ke(C){if(C.samples>0){if(qt(C)===!1){const b=C.textures,V=C.width,$=C.height;let Q=r.COLOR_BUFFER_BIT;const K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=n.get(C),lt=b.length>1;if(lt)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[pt]);const jt=n.get(b[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,jt,0)}r.blitFramebuffer(0,0,V,$,0,0,V,$,Q,r.NEAREST),l===!0&&(xe.length=0,z.length=0,xe.push(r.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(xe.push(K),z.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,z)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[pt]);const jt=n.get(b[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,jt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Wt(C){return Math.min(i.maxSamples,C.samples)}function qt(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Rt(C){const b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function he(C,b){const V=C.colorSpace,$=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==ke&&V!==Yn&&(Ht.getTransfer(V)===ee?($!==en||Q!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Ct(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=D,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=kt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=qt}function qg(r,t){function e(n,i=Yn){let s;const a=Ht.getTransfer(i);if(n===Bn)return r.UNSIGNED_BYTE;if(n===Po)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Io)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Qc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return r.BYTE;if(n===Zc)return r.SHORT;if(n===Ds)return r.UNSIGNED_SHORT;if(n===Ro)return r.INT;if(n===mi)return r.UNSIGNED_INT;if(n===dn)return r.FLOAT;if(n===_n)return r.HALF_FLOAT;if(n===Jc)return r.ALPHA;if(n===th)return r.RGB;if(n===en)return r.RGBA;if(n===eh)return r.LUMINANCE;if(n===nh)return r.LUMINANCE_ALPHA;if(n===Wi)return r.DEPTH_COMPONENT;if(n===Zi)return r.DEPTH_STENCIL;if(n===Lo)return r.RED;if(n===Do)return r.RED_INTEGER;if(n===ih)return r.RG;if(n===No)return r.RG_INTEGER;if(n===Uo)return r.RGBA_INTEGER;if(n===Tr||n===Er||n===wr||n===Ar)if(a===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Tr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Tr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===ka||n===Va||n===Ha)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Wa||n===qa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ga||n===Wa)return a===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qa)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===ja||n===Ya||n===Ka||n===$a||n===Za||n===Qa||n===Ja||n===to||n===eo||n===no||n===io||n===so||n===ro)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xa)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qa)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===to)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===no)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===io)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===so)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ro)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cr||n===ao||n===oo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Cr)return a===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ao)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sh||n===lo||n===co||n===ho)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Cr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===co)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ho)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Xg extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ne extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jg={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const _=e.getJointPose(x,n),m=this._getHandJoint(c,x);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kg=`
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

}`;class $g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Te,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Se({vertexShader:Yg,fragmentShader:Kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zg extends ti{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=new $g,_=e.getContextAttributes();let m=null,E=null;const A=[],p=[],y=new dt;let v=null;const T=new Be;T.viewport=new Kt;const R=new Be;R.viewport=new Kt;const M=[T,R],S=new Xg;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=A[Y];return J===void 0&&(J=new ma,A[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=A[Y];return J===void 0&&(J=new ma,A[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=A[Y];return J===void 0&&(J=new ma,A[Y]=J),J.getHandSpace()};function L(Y){const J=p.indexOf(Y.inputSource);if(J===-1)return;const yt=A[J];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,c||a),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",W);for(let Y=0;Y<A.length;Y++){const J=p[Y];J!==null&&(p[Y]=null,A[Y].disconnect(J))}P=null,O=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,E=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",k),i.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0){const J={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new nn(f.framebufferWidth,f.framebufferHeight,{format:en,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,yt=null,rt=null;_.depth&&(rt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=_.stencil?Zi:Wi,yt=_.stencil?$i:mi);const At={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(At),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new nn(d.textureWidth,d.textureHeight,{format:en,type:Bn,depthTexture:new vh(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),wt.setContext(i),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(Y){for(let J=0;J<Y.removed.length;J++){const yt=Y.removed[J],rt=p.indexOf(yt);rt>=0&&(p[rt]=null,A[rt].disconnect(yt))}for(let J=0;J<Y.added.length;J++){const yt=Y.added[J];let rt=p.indexOf(yt);if(rt===-1){for(let Pt=0;Pt<A.length;Pt++)if(Pt>=p.length){p.push(yt),rt=Pt;break}else if(p[Pt]===null){p[Pt]=yt,rt=Pt;break}if(rt===-1)break}const At=A[rt];At&&At.connect(yt)}}const D=new I,j=new I;function q(Y,J,yt){D.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(yt.matrixWorld);const rt=D.distanceTo(j),At=J.projectionMatrix.elements,Pt=yt.projectionMatrix.elements,kt=At[14]/(At[10]-1),ce=At[14]/(At[10]+1),Gt=(At[9]+1)/At[5],xe=(At[9]-1)/At[5],z=(At[8]-1)/At[0],Ke=(Pt[8]+1)/Pt[0],Wt=kt*z,qt=kt*Ke,Rt=rt/(-z+Ke),he=Rt*-z;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(he),Y.translateZ(Rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Ct=kt+Rt,C=ce+Rt,b=Wt-he,V=qt+(rt-he),$=Gt*ce/C*Ct,Q=xe*ce/C*Ct;Y.projectionMatrix.makePerspective(b,V,$,Q,Ct,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function nt(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let J=Y.near,yt=Y.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),S.near=R.near=T.near=J,S.far=R.far=T.far=yt,(P!==S.near||O!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,O=S.far),T.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,S.layers.mask=T.layers.mask|R.layers.mask;const rt=Y.parent,At=S.cameras;nt(S,rt);for(let Pt=0;Pt<At.length;Pt++)nt(At[Pt],rt);At.length===2?q(S,T,R):S.projectionMatrix.copy(T.projectionMatrix),it(Y,S,rt)};function it(Y,J,yt){yt===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ft=null;function xt(Y,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let rt=!1;yt.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let Pt=0;Pt<yt.length;Pt++){const kt=yt[Pt];let ce=null;if(f!==null)ce=f.getViewport(kt);else{const xe=u.getViewSubImage(d,kt);ce=xe.viewport,Pt===0&&(t.setRenderTargetTextures(E,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(E))}let Gt=M[Pt];Gt===void 0&&(Gt=new Be,Gt.layers.enable(Pt),Gt.viewport=new Kt,M[Pt]=Gt),Gt.matrix.fromArray(kt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(kt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ce.x,ce.y,ce.width,ce.height),Pt===0&&(S.matrix.copy(Gt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(Gt)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const Pt=u.getDepthInformation(yt[0]);Pt&&Pt.isValid&&Pt.texture&&x.init(t,Pt,i.renderState)}}for(let yt=0;yt<A.length;yt++){const rt=p[yt],At=A[yt];rt!==null&&At!==void 0&&At.update(rt,J,c||a)}ft&&ft(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const wt=new _h;wt.setAnimationLoop(xt),this.setAnimationLoop=function(Y){ft=Y},this.dispose=function(){}}}const oi=new pn,Qg=new Nt;function Jg(r,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,ph(r)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,E,A,p){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),u(_,m)):m.isMeshPhongMaterial?(s(_,m),h(_,m)):m.isMeshStandardMaterial?(s(_,m),d(_,m),m.isMeshPhysicalMaterial&&f(_,m,p)):m.isMeshMatcapMaterial?(s(_,m),g(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),x(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&o(_,m)):m.isPointsMaterial?l(_,m,E,A):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Ie&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Ie&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const E=t.get(m),A=E.envMap,p=E.envMapRotation;A&&(_.envMap.value=A,oi.copy(p),oi.x*=-1,oi.y*=-1,oi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),_.envMapRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(oi)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function o(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,E,A){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*E,_.scale.value=A*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function u(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function f(_,m,E){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ie&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function x(_,m){const E=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function t0(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,A){const p=A.program;n.uniformBlockBinding(E,p)}function c(E,A){let p=i[E.id];p===void 0&&(g(E),p=h(E),i[E.id]=p,E.addEventListener("dispose",_));const y=A.program;n.updateUBOMapping(E,y);const v=t.render.frame;s[E.id]!==v&&(d(E),s[E.id]=v)}function h(E){const A=u();E.__bindingPointIndex=A;const p=r.createBuffer(),y=E.__size,v=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,p),r.bufferData(r.UNIFORM_BUFFER,y,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,A,p),p}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const A=i[E.id],p=E.uniforms,y=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let v=0,T=p.length;v<T;v++){const R=Array.isArray(p[v])?p[v]:[p[v]];for(let M=0,S=R.length;M<S;M++){const P=R[M];if(f(P,v,M,y)===!0){const O=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let W=0;W<L.length;W++){const D=L[W],j=x(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,O+k,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,k),k+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(E,A,p,y){const v=E.value,T=A+"_"+p;if(y[T]===void 0)return typeof v=="number"||typeof v=="boolean"?y[T]=v:y[T]=v.clone(),!0;{const R=y[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return y[T]=v,!0}else if(R.equals(v)===!1)return R.copy(v),!0}return!1}function g(E){const A=E.uniforms;let p=0;const y=16;for(let T=0,R=A.length;T<R;T++){const M=Array.isArray(A[T])?A[T]:[A[T]];for(let S=0,P=M.length;S<P;S++){const O=M[S],L=Array.isArray(O.value)?O.value:[O.value];for(let k=0,W=L.length;k<W;k++){const D=L[k],j=x(D),q=p%y,nt=q%j.boundary,it=q+nt;p+=nt,it!==0&&y-it<j.storage&&(p+=y-it),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=p,p+=j.storage}}}const v=p%y;return v>0&&(p+=y-v),E.__size=p,E.__cache={},this}function x(E){const A={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(A.boundary=4,A.storage=4):E.isVector2?(A.boundary=8,A.storage=8):E.isVector3||E.isColor?(A.boundary=16,A.storage=12):E.isVector4?(A.boundary=16,A.storage=16):E.isMatrix3?(A.boundary=48,A.storage=48):E.isMatrix4?(A.boundary=64,A.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),A}function _(E){const A=E.target;A.removeEventListener("dispose",_);const p=a.indexOf(A.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[A.id]),delete i[A.id],delete s[A.id]}function m(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class e0{constructor(t={}){const{canvas:e=Gu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),x=new Int32Array(4);let _=null,m=null;const E=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=Qn,this.toneMappingExposure=1;const p=this;let y=!1,v=0,T=0,R=null,M=-1,S=null;const P=new Kt,O=new Kt;let L=null;const k=new gt(0);let W=0,D=e.width,j=e.height,q=1,nt=null,it=null;const ft=new Kt(0,0,D,j),xt=new Kt(0,0,D,j);let wt=!1;const Y=new ko;let J=!1,yt=!1;const rt=new Nt,At=new Nt,Pt=new I,kt=new Kt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function xe(){return R===null?q:1}let z=n;function Ke(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),z===null){const F="webgl2";if(z=Ke(F,w),z===null)throw Ke(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Wt,qt,Rt,he,Ct,C,b,V,$,Q,K,Tt,lt,pt,jt,tt,_t,It,Lt,vt,Xt,Ot,ae,U;function ot(){Wt=new am(z),Wt.init(),Ot=new qg(z,Wt),qt=new tm(z,Wt,t,Ot),Rt=new Hg(z,Wt),qt.reverseDepthBuffer&&d&&Rt.buffers.depth.setReversed(!0),he=new cm(z),Ct=new Ag,C=new Wg(z,Wt,Rt,Ct,qt,Ot,he),b=new nm(p),V=new rm(p),$=new md(z),ae=new Qp(z,$),Q=new om(z,$,he,ae),K=new um(z,Q,$,he),Lt=new hm(z,qt,C),tt=new em(Ct),Tt=new wg(p,b,V,Wt,qt,ae,tt),lt=new Jg(p,Ct),pt=new Rg,jt=new Ug(Wt),It=new Zp(p,b,V,Rt,K,f,l),_t=new kg(p,K,qt),U=new t0(z,he,qt,Rt),vt=new Jp(z,Wt,he),Xt=new lm(z,Wt,he),he.programs=Tt.programs,p.capabilities=qt,p.extensions=Wt,p.properties=Ct,p.renderLists=pt,p.shadowMap=_t,p.state=Rt,p.info=he}ot();const X=new Zg(p,z);this.xr=X,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=Wt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Wt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(D,j,!1))},this.getSize=function(w){return w.set(D,j)},this.setSize=function(w,F,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,j=F,e.width=Math.floor(w*q),e.height=Math.floor(F*q),H===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(D*q,j*q).floor()},this.setDrawingBufferSize=function(w,F,H){D=w,j=F,q=H,e.width=Math.floor(w*H),e.height=Math.floor(F*H),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(ft)},this.setViewport=function(w,F,H,G){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,F,H,G),Rt.viewport(P.copy(ft).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(xt)},this.setScissor=function(w,F,H,G){w.isVector4?xt.set(w.x,w.y,w.z,w.w):xt.set(w,F,H,G),Rt.scissor(O.copy(xt).multiplyScalar(q).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(w){Rt.setScissorTest(wt=w)},this.setOpaqueSort=function(w){nt=w},this.setTransparentSort=function(w){it=w},this.getClearColor=function(w){return w.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(w=!0,F=!0,H=!0){let G=0;if(w){let B=!1;if(R!==null){const et=R.texture.format;B=et===Uo||et===No||et===Do}if(B){const et=R.texture.type,ht=et===Bn||et===mi||et===Ds||et===$i||et===Po||et===Io,Mt=It.getClearColor(),St=It.getClearAlpha(),Dt=Mt.r,Ft=Mt.g,bt=Mt.b;ht?(g[0]=Dt,g[1]=Ft,g[2]=bt,g[3]=St,z.clearBufferuiv(z.COLOR,0,g)):(x[0]=Dt,x[1]=Ft,x[2]=bt,x[3]=St,z.clearBufferiv(z.COLOR,0,x))}else G|=z.COLOR_BUFFER_BIT}F&&(G|=z.DEPTH_BUFFER_BIT),H&&(G|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),pt.dispose(),jt.dispose(),Ct.dispose(),b.dispose(),V.dispose(),K.dispose(),ae.dispose(),U.dispose(),Tt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Qo),X.removeEventListener("sessionend",Jo),ei.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=he.autoReset,F=_t.enabled,H=_t.autoUpdate,G=_t.needsUpdate,B=_t.type;ot(),he.autoReset=w,_t.enabled=F,_t.autoUpdate=H,_t.needsUpdate=G,_t.type=B}function ct(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ut(w){const F=w.target;F.removeEventListener("dispose",Ut),me(F)}function me(w){Le(w),Ct.remove(w)}function Le(w){const F=Ct.get(w).programs;F!==void 0&&(F.forEach(function(H){Tt.releaseProgram(H)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,H,G,B,et){F===null&&(F=ce);const ht=B.isMesh&&B.matrixWorld.determinant()<0,Mt=zh(w,F,H,G,B);Rt.setMaterial(G,ht);let St=H.index,Dt=1;if(G.wireframe===!0){if(St=Q.getWireframeAttribute(H),St===void 0)return;Dt=2}const Ft=H.drawRange,bt=H.attributes.position;let Yt=Ft.start*Dt,oe=(Ft.start+Ft.count)*Dt;et!==null&&(Yt=Math.max(Yt,et.start*Dt),oe=Math.min(oe,(et.start+et.count)*Dt)),St!==null?(Yt=Math.max(Yt,0),oe=Math.min(oe,St.count)):bt!=null&&(Yt=Math.max(Yt,0),oe=Math.min(oe,bt.count));const ue=oe-Yt;if(ue<0||ue===1/0)return;ae.setup(B,G,Mt,H,St);let Ve,$t=vt;if(St!==null&&(Ve=$.get(St),$t=Xt,$t.setIndex(Ve)),B.isMesh)G.wireframe===!0?(Rt.setLineWidth(G.wireframeLinewidth*xe()),$t.setMode(z.LINES)):$t.setMode(z.TRIANGLES);else if(B.isLine){let Et=G.linewidth;Et===void 0&&(Et=1),Rt.setLineWidth(Et*xe()),B.isLineSegments?$t.setMode(z.LINES):B.isLineLoop?$t.setMode(z.LINE_LOOP):$t.setMode(z.LINE_STRIP)}else B.isPoints?$t.setMode(z.POINTS):B.isSprite&&$t.setMode(z.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)$t.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))$t.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Et=B._multiDrawStarts,Sn=B._multiDrawCounts,Zt=B._multiDrawCount,on=St?$.get(St).bytesPerElement:1,gi=Ct.get(G).currentProgram.getUniforms();for(let Ge=0;Ge<Zt;Ge++)gi.setValue(z,"_gl_DrawID",Ge),$t.render(Et[Ge]/on,Sn[Ge])}else if(B.isInstancedMesh)$t.renderInstances(Yt,ue,B.count);else if(H.isInstancedBufferGeometry){const Et=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Sn=Math.min(H.instanceCount,Et);$t.renderInstances(Yt,ue,Sn)}else $t.render(Yt,ue)};function te(w,F,H){w.transparent===!0&&w.side===_e&&w.forceSinglePass===!1?(w.side=Ie,w.needsUpdate=!0,qs(w,F,H),w.side=Fn,w.needsUpdate=!0,qs(w,F,H),w.side=_e):qs(w,F,H)}this.compile=function(w,F,H=null){H===null&&(H=w),m=jt.get(H),m.init(F),A.push(m),H.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),w!==H&&w.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const G=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const et=B.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){const Mt=et[ht];te(Mt,H,B),G.add(Mt)}else te(et,H,B),G.add(et)}),A.pop(),m=null,G},this.compileAsync=function(w,F,H=null){const G=this.compile(w,F,H);return new Promise(B=>{function et(){if(G.forEach(function(ht){Ct.get(ht).currentProgram.isReady()&&G.delete(ht)}),G.size===0){B(w);return}setTimeout(et,10)}Wt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let an=null;function Mn(w){an&&an(w)}function Qo(){ei.stop()}function Jo(){ei.start()}const ei=new _h;ei.setAnimationLoop(Mn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(w){an=w,X.setAnimationLoop(w),w===null?ei.stop():ei.start()},X.addEventListener("sessionstart",Qo),X.addEventListener("sessionend",Jo),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,F,R),m=jt.get(w,A.length),m.init(F),A.push(m),At.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(At),yt=this.localClippingEnabled,J=tt.init(this.clippingPlanes,yt),_=pt.get(w,E.length),_.init(),E.push(_),X.enabled===!0&&X.isPresenting===!0){const et=p.xr.getDepthSensingMesh();et!==null&&Vr(et,F,-1/0,p.sortObjects)}Vr(w,F,0,p.sortObjects),_.finish(),p.sortObjects===!0&&_.sort(nt,it),Gt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Gt&&It.addToRenderList(_,w),this.info.render.frame++,J===!0&&tt.beginShadows();const H=m.state.shadowsArray;_t.render(H,w,F),J===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,B=_.transmissive;if(m.setupLights(),F.isArrayCamera){const et=F.cameras;if(B.length>0)for(let ht=0,Mt=et.length;ht<Mt;ht++){const St=et[ht];el(G,B,w,St)}Gt&&It.render(w);for(let ht=0,Mt=et.length;ht<Mt;ht++){const St=et[ht];tl(_,w,St,St.viewport)}}else B.length>0&&el(G,B,w,F),Gt&&It.render(w),tl(_,w,F);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(p,w,F),ae.resetDefaultState(),M=-1,S=null,A.pop(),A.length>0?(m=A[A.length-1],J===!0&&tt.setGlobalState(p.clippingPlanes,m.state.camera)):m=null,E.pop(),E.length>0?_=E[E.length-1]:_=null};function Vr(w,F,H,G){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){G&&kt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(At);const ht=K.update(w),Mt=w.material;Mt.visible&&_.push(w,ht,Mt,H,kt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const ht=K.update(w),Mt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),kt.copy(w.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),kt.copy(ht.boundingSphere.center)),kt.applyMatrix4(w.matrixWorld).applyMatrix4(At)),Array.isArray(Mt)){const St=ht.groups;for(let Dt=0,Ft=St.length;Dt<Ft;Dt++){const bt=St[Dt],Yt=Mt[bt.materialIndex];Yt&&Yt.visible&&_.push(w,ht,Yt,H,kt.z,bt)}}else Mt.visible&&_.push(w,ht,Mt,H,kt.z,null)}}const et=w.children;for(let ht=0,Mt=et.length;ht<Mt;ht++)Vr(et[ht],F,H,G)}function tl(w,F,H,G){const B=w.opaque,et=w.transmissive,ht=w.transparent;m.setupLightsView(H),J===!0&&tt.setGlobalState(p.clippingPlanes,H),G&&Rt.viewport(P.copy(G)),B.length>0&&Ws(B,F,H),et.length>0&&Ws(et,F,H),ht.length>0&&Ws(ht,F,H),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function el(w,F,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new nn(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?_n:Bn,minFilter:Ln,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));const et=m.state.transmissionRenderTarget[G.id],ht=G.viewport||P;et.setSize(ht.z,ht.w);const Mt=p.getRenderTarget();p.setRenderTarget(et),p.getClearColor(k),W=p.getClearAlpha(),W<1&&p.setClearColor(16777215,.5),p.clear(),Gt&&It.render(H);const St=p.toneMapping;p.toneMapping=Qn;const Dt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),J===!0&&tt.setGlobalState(p.clippingPlanes,G),Ws(w,H,G),C.updateMultisampleRenderTarget(et),C.updateRenderTargetMipmap(et),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let bt=0,Yt=F.length;bt<Yt;bt++){const oe=F[bt],ue=oe.object,Ve=oe.geometry,$t=oe.material,Et=oe.group;if($t.side===_e&&ue.layers.test(G.layers)){const Sn=$t.side;$t.side=Ie,$t.needsUpdate=!0,nl(ue,H,G,Ve,$t,Et),$t.side=Sn,$t.needsUpdate=!0,Ft=!0}}Ft===!0&&(C.updateMultisampleRenderTarget(et),C.updateRenderTargetMipmap(et))}p.setRenderTarget(Mt),p.setClearColor(k,W),Dt!==void 0&&(G.viewport=Dt),p.toneMapping=St}function Ws(w,F,H){const G=F.isScene===!0?F.overrideMaterial:null;for(let B=0,et=w.length;B<et;B++){const ht=w[B],Mt=ht.object,St=ht.geometry,Dt=G===null?ht.material:G,Ft=ht.group;Mt.layers.test(H.layers)&&nl(Mt,F,H,St,Dt,Ft)}}function nl(w,F,H,G,B,et){w.onBeforeRender(p,F,H,G,B,et),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(p,F,H,G,w,et),B.transparent===!0&&B.side===_e&&B.forceSinglePass===!1?(B.side=Ie,B.needsUpdate=!0,p.renderBufferDirect(H,F,G,B,w,et),B.side=Fn,B.needsUpdate=!0,p.renderBufferDirect(H,F,G,B,w,et),B.side=_e):p.renderBufferDirect(H,F,G,B,w,et),w.onAfterRender(p,F,H,G,B,et)}function qs(w,F,H){F.isScene!==!0&&(F=ce);const G=Ct.get(w),B=m.state.lights,et=m.state.shadowsArray,ht=B.state.version,Mt=Tt.getParameters(w,B.state,et,F,H),St=Tt.getProgramCacheKey(Mt);let Dt=G.programs;G.environment=w.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(w.isMeshStandardMaterial?V:b).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Dt===void 0&&(w.addEventListener("dispose",Ut),Dt=new Map,G.programs=Dt);let Ft=Dt.get(St);if(Ft!==void 0){if(G.currentProgram===Ft&&G.lightsStateVersion===ht)return sl(w,Mt),Ft}else Mt.uniforms=Tt.getUniforms(w),w.onBeforeCompile(Mt,p),Ft=Tt.acquireProgram(Mt,St),Dt.set(St,Ft),G.uniforms=Mt.uniforms;const bt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(bt.clippingPlanes=tt.uniform),sl(w,Mt),G.needsLights=Vh(w),G.lightsStateVersion=ht,G.needsLights&&(bt.ambientLightColor.value=B.state.ambient,bt.lightProbe.value=B.state.probe,bt.directionalLights.value=B.state.directional,bt.directionalLightShadows.value=B.state.directionalShadow,bt.spotLights.value=B.state.spot,bt.spotLightShadows.value=B.state.spotShadow,bt.rectAreaLights.value=B.state.rectArea,bt.ltc_1.value=B.state.rectAreaLTC1,bt.ltc_2.value=B.state.rectAreaLTC2,bt.pointLights.value=B.state.point,bt.pointLightShadows.value=B.state.pointShadow,bt.hemisphereLights.value=B.state.hemi,bt.directionalShadowMap.value=B.state.directionalShadowMap,bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,bt.spotShadowMap.value=B.state.spotShadowMap,bt.spotLightMatrix.value=B.state.spotLightMatrix,bt.spotLightMap.value=B.state.spotLightMap,bt.pointShadowMap.value=B.state.pointShadowMap,bt.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Ft,G.uniformsList=null,Ft}function il(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Rr.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function sl(w,F){const H=Ct.get(w);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function zh(w,F,H,G,B){F.isScene!==!0&&(F=ce),C.resetTextureUnits();const et=F.fog,ht=G.isMeshStandardMaterial?F.environment:null,Mt=R===null?p.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ke,St=(G.isMeshStandardMaterial?V:b).get(G.envMap||ht),Dt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ft=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),bt=!!H.morphAttributes.position,Yt=!!H.morphAttributes.normal,oe=!!H.morphAttributes.color;let ue=Qn;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ue=p.toneMapping);const Ve=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,$t=Ve!==void 0?Ve.length:0,Et=Ct.get(G),Sn=m.state.lights;if(J===!0&&(yt===!0||w!==S)){const $e=w===S&&G.id===M;tt.setState(G,w,$e)}let Zt=!1;G.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Sn.state.version||Et.outputColorSpace!==Mt||B.isBatchedMesh&&Et.batching===!1||!B.isBatchedMesh&&Et.batching===!0||B.isBatchedMesh&&Et.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Et.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Et.instancing===!1||!B.isInstancedMesh&&Et.instancing===!0||B.isSkinnedMesh&&Et.skinning===!1||!B.isSkinnedMesh&&Et.skinning===!0||B.isInstancedMesh&&Et.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Et.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Et.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Et.instancingMorph===!1&&B.morphTexture!==null||Et.envMap!==St||G.fog===!0&&Et.fog!==et||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==tt.numPlanes||Et.numIntersection!==tt.numIntersection)||Et.vertexAlphas!==Dt||Et.vertexTangents!==Ft||Et.morphTargets!==bt||Et.morphNormals!==Yt||Et.morphColors!==oe||Et.toneMapping!==ue||Et.morphTargetsCount!==$t)&&(Zt=!0):(Zt=!0,Et.__version=G.version);let on=Et.currentProgram;Zt===!0&&(on=qs(G,F,B));let gi=!1,Ge=!1,us=!1;const de=on.getUniforms(),mn=Et.uniforms;if(Rt.useProgram(on.program)&&(gi=!0,Ge=!0,us=!0),G.id!==M&&(M=G.id,Ge=!0),gi||S!==w){Rt.buffers.depth.getReversed()?(rt.copy(w.projectionMatrix),qu(rt),Xu(rt),de.setValue(z,"projectionMatrix",rt)):de.setValue(z,"projectionMatrix",w.projectionMatrix),de.setValue(z,"viewMatrix",w.matrixWorldInverse);const On=de.map.cameraPosition;On!==void 0&&On.setValue(z,Pt.setFromMatrixPosition(w.matrixWorld)),qt.logarithmicDepthBuffer&&de.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&de.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Ge=!0,us=!0)}if(B.isSkinnedMesh){de.setOptional(z,B,"bindMatrix"),de.setOptional(z,B,"bindMatrixInverse");const $e=B.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),de.setValue(z,"boneTexture",$e.boneTexture,C))}B.isBatchedMesh&&(de.setOptional(z,B,"batchingTexture"),de.setValue(z,"batchingTexture",B._matricesTexture,C),de.setOptional(z,B,"batchingIdTexture"),de.setValue(z,"batchingIdTexture",B._indirectTexture,C),de.setOptional(z,B,"batchingColorTexture"),B._colorsTexture!==null&&de.setValue(z,"batchingColorTexture",B._colorsTexture,C));const ds=H.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&Lt.update(B,H,on),(Ge||Et.receiveShadow!==B.receiveShadow)&&(Et.receiveShadow=B.receiveShadow,de.setValue(z,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(mn.envMap.value=St,mn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(mn.envMapIntensity.value=F.environmentIntensity),Ge&&(de.setValue(z,"toneMappingExposure",p.toneMappingExposure),Et.needsLights&&kh(mn,us),et&&G.fog===!0&&lt.refreshFogUniforms(mn,et),lt.refreshMaterialUniforms(mn,G,q,j,m.state.transmissionRenderTarget[w.id]),Rr.upload(z,il(Et),mn,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Rr.upload(z,il(Et),mn,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&de.setValue(z,"center",B.center),de.setValue(z,"modelViewMatrix",B.modelViewMatrix),de.setValue(z,"normalMatrix",B.normalMatrix),de.setValue(z,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const $e=G.uniformsGroups;for(let On=0,zn=$e.length;On<zn;On++){const rl=$e[On];U.update(rl,on),U.bind(rl,on)}}return on}function kh(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Vh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,F,H){Ct.get(w.texture).__webglTexture=F,Ct.get(w.depthTexture).__webglTexture=H;const G=Ct.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const H=Ct.get(w);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,H=0){R=w,v=F,T=H;let G=!0,B=null,et=!1,ht=!1;if(w){const St=Ct.get(w);if(St.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(z.FRAMEBUFFER,null),G=!1;else if(St.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(St.__hasExternalTextures)C.rebindTextures(w,Ct.get(w.texture).__webglTexture,Ct.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const bt=w.depthTexture;if(St.__boundDepthTexture!==bt){if(bt!==null&&Ct.has(bt)&&(w.width!==bt.image.width||w.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Dt=w.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ht=!0);const Ft=Ct.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[F])?B=Ft[F][H]:B=Ft[F],et=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?B=Ct.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?B=Ft[H]:B=Ft,P.copy(w.viewport),O.copy(w.scissor),L=w.scissorTest}else P.copy(ft).multiplyScalar(q).floor(),O.copy(xt).multiplyScalar(q).floor(),L=wt;if(Rt.bindFramebuffer(z.FRAMEBUFFER,B)&&G&&Rt.drawBuffers(w,B),Rt.viewport(P),Rt.scissor(O),Rt.setScissorTest(L),et){const St=Ct.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,St.__webglTexture,H)}else if(ht){const St=Ct.get(w.texture),Dt=F||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,St.__webglTexture,H||0,Dt)}M=-1},this.readRenderTargetPixels=function(w,F,H,G,B,et,ht){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(Mt=Mt[ht]),Mt){Rt.bindFramebuffer(z.FRAMEBUFFER,Mt);try{const St=w.texture,Dt=St.format,Ft=St.type;if(!qt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-G&&H>=0&&H<=w.height-B&&z.readPixels(F,H,G,B,Ot.convert(Dt),Ot.convert(Ft),et)}finally{const St=R!==null?Ct.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(z.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(w,F,H,G,B,et,ht){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(Mt=Mt[ht]),Mt){const St=w.texture,Dt=St.format,Ft=St.type;if(!qt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-G&&H>=0&&H<=w.height-B){Rt.bindFramebuffer(z.FRAMEBUFFER,Mt);const bt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,bt),z.bufferData(z.PIXEL_PACK_BUFFER,et.byteLength,z.STREAM_READ),z.readPixels(F,H,G,B,Ot.convert(Dt),Ot.convert(Ft),0);const Yt=R!==null?Ct.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(z.FRAMEBUFFER,Yt);const oe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Wu(z,oe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,bt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,et),z.deleteBuffer(bt),z.deleteSync(oe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,H=0){w.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-H),B=Math.floor(w.image.width*G),et=Math.floor(w.image.height*G),ht=F!==null?F.x:0,Mt=F!==null?F.y:0;C.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,H,0,0,ht,Mt,B,et),Rt.unbindTexture()},this.copyTextureToTexture=function(w,F,H=null,G=null,B=0){w.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],F=arguments[2],B=arguments[3]||0,H=null);let et,ht,Mt,St,Dt,Ft,bt,Yt,oe;const ue=w.isCompressedTexture?w.mipmaps[B]:w.image;H!==null?(et=H.max.x-H.min.x,ht=H.max.y-H.min.y,Mt=H.isBox3?H.max.z-H.min.z:1,St=H.min.x,Dt=H.min.y,Ft=H.isBox3?H.min.z:0):(et=ue.width,ht=ue.height,Mt=ue.depth||1,St=0,Dt=0,Ft=0),G!==null?(bt=G.x,Yt=G.y,oe=G.z):(bt=0,Yt=0,oe=0);const Ve=Ot.convert(F.format),$t=Ot.convert(F.type);let Et;F.isData3DTexture?(C.setTexture3D(F,0),Et=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Et=z.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Et=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);const Sn=z.getParameter(z.UNPACK_ROW_LENGTH),Zt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),on=z.getParameter(z.UNPACK_SKIP_PIXELS),gi=z.getParameter(z.UNPACK_SKIP_ROWS),Ge=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ue.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ue.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,St),z.pixelStorei(z.UNPACK_SKIP_ROWS,Dt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ft);const us=w.isDataArrayTexture||w.isData3DTexture,de=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const mn=Ct.get(w),ds=Ct.get(F),$e=Ct.get(mn.__renderTarget),On=Ct.get(ds.__renderTarget);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,$e.__webglFramebuffer),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let zn=0;zn<Mt;zn++)us&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ct.get(w).__webglTexture,B,Ft+zn),w.isDepthTexture?(de&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ct.get(F).__webglTexture,B,oe+zn),z.blitFramebuffer(St,Dt,et,ht,bt,Yt,et,ht,z.DEPTH_BUFFER_BIT,z.NEAREST)):de?z.copyTexSubImage3D(Et,B,bt,Yt,oe+zn,St,Dt,et,ht):z.copyTexSubImage2D(Et,B,bt,Yt,oe+zn,St,Dt,et,ht);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else de?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Et,B,bt,Yt,oe,et,ht,Mt,Ve,$t,ue.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(Et,B,bt,Yt,oe,et,ht,Mt,Ve,ue.data):z.texSubImage3D(Et,B,bt,Yt,oe,et,ht,Mt,Ve,$t,ue):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,B,bt,Yt,et,ht,Ve,$t,ue.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,B,bt,Yt,ue.width,ue.height,Ve,ue.data):z.texSubImage2D(z.TEXTURE_2D,B,bt,Yt,et,ht,Ve,$t,ue);z.pixelStorei(z.UNPACK_ROW_LENGTH,Sn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Zt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,on),z.pixelStorei(z.UNPACK_SKIP_ROWS,gi),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ge),B===0&&F.generateMipmaps&&z.generateMipmap(Et),Rt.unbindTexture()},this.copyTextureToTexture3D=function(w,F,H=null,G=null,B=0){return w.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,w=arguments[2],F=arguments[3],B=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,H,G,B)},this.initRenderTarget=function(w){Ct.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){v=0,T=0,R=null,Rt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}}class _o extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=po,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ue=new I;class Os{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Os(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vo extends sn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ii;const _s=new I,Li=new I,Di=new I,Ni=new dt,vs=new dt,Th=new Nt,dr=new I,xs=new I,fr=new I,ic=new dt,ga=new dt,sc=new dt;class rc extends fe{constructor(t=new vo){if(super(),this.isSprite=!0,this.type="Sprite",Ii===void 0){Ii=new pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bh(e,5);Ii.setIndex([0,1,2,0,2,3]),Ii.setAttribute("position",new Os(n,3,0,!1)),Ii.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=Ii,this.material=t,this.center=new dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),Th.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Di.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;pr(dr.set(-.5,-.5,0),Di,a,Li,i,s),pr(xs.set(.5,-.5,0),Di,a,Li,i,s),pr(fr.set(.5,.5,0),Di,a,Li,i,s),ic.set(0,0),ga.set(1,0),sc.set(1,1);let o=t.ray.intersectTriangle(dr,xs,fr,!1,_s);if(o===null&&(pr(xs.set(-.5,.5,0),Di,a,Li,i,s),ga.set(0,1),o=t.ray.intersectTriangle(dr,fr,xs,!1,_s),o===null))return;const l=t.ray.origin.distanceTo(_s);l<t.near||l>t.far||e.push({distance:l,point:_s.clone(),uv:tn.getInterpolation(_s,dr,xs,fr,ic,ga,sc,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function pr(r,t,e,n,i,s){Ni.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(vs.x=s*Ni.x-i*Ni.y,vs.y=i*Ni.x+s*Ni.y):vs.copy(Ni),r.copy(t),r.x+=vs.x,r.y+=vs.y,r.applyMatrix4(Th)}const ac=new I,oc=new Kt,lc=new Kt,n0=new I,cc=new Nt,mr=new I,_a=new vn,hc=new Nt,va=new ss;class i0 extends st{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cl,this.bindMatrix=new Nt,this.bindMatrixInverse=new Nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,mr),this.boundingBox.expandByPoint(mr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,mr),this.boundingSphere.expandByPoint(mr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(i),t.ray.intersectsSphere(_a)!==!1&&(hc.copy(i).invert(),va.copy(t.ray).applyMatrix4(hc),!(this.boundingBox!==null&&va.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,va)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Kt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;oc.fromBufferAttribute(i.attributes.skinIndex,t),lc.fromBufferAttribute(i.attributes.skinWeight,t),ac.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=lc.getComponent(s);if(a!==0){const o=oc.getComponent(s);cc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(n0.copy(ac).applyMatrix4(cc),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Eh extends fe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wh extends Te{constructor(t=null,e=1,n=1,i,s,a,o,l,c=ze,h=ze,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uc=new Nt,s0=new Nt;class Ho{constructor(t=[],e=[]){this.uuid=fn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Nt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Nt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:s0;uc.multiplyMatrices(o,e[s]),uc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ho(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new wh(e,t,t,en,dn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Eh),this.bones.push(a),this.boneInverses.push(new Nt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class xo extends ve{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ui=new Nt,dc=new Nt,gr=[],fc=new rn,r0=new Nt,ys=new st,Ms=new vn;class a0 extends st{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,r0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),fc.copy(t.boundingBox).applyMatrix4(Ui),this.boundingBox.union(fc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),Ms.copy(t.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),t.ray.intersectsSphere(Ms)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ui),dc.multiplyMatrices(n,Ui),ys.matrixWorld=dc,ys.raycast(t,gr);for(let a=0,o=gr.length;a<o;a++){const l=gr[a];l.instanceId=s,l.object=this,e.push(l)}gr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wh(new Float32Array(i*this.count),i,this.count,Lo,dn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class zs extends sn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Nr=new I,Ur=new I,pc=new Nt,Ss=new ss,_r=new vn,xa=new I,mc=new I;class Vs extends fe{constructor(t=new pe,e=new zs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Nr.fromBufferAttribute(e,i-1),Ur.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Nr.distanceTo(Ur);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(i),_r.radius+=s,t.ray.intersectsSphere(_r)===!1)return;pc.copy(i).invert(),Ss.copy(t.ray).applyMatrix4(pc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,_=g-1;x<_;x+=c){const m=h.getX(x),E=h.getX(x+1),A=vr(this,t,Ss,l,m,E);A&&e.push(A)}if(this.isLineLoop){const x=h.getX(g-1),_=h.getX(f),m=vr(this,t,Ss,l,x,_);m&&e.push(m)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,_=g-1;x<_;x+=c){const m=vr(this,t,Ss,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=vr(this,t,Ss,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vr(r,t,e,n,i,s){const a=r.geometry.attributes.position;if(Nr.fromBufferAttribute(a,i),Ur.fromBufferAttribute(a,s),e.distanceSqToSegment(Nr,Ur,xa,mc)>n)return;xa.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(xa);if(!(l<t.near||l>t.far))return{distance:l,point:mc.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const gc=new I,_c=new I;class Ah extends Vs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)gc.fromBufferAttribute(e,i),_c.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gc.distanceTo(_c);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class o0 extends Vs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ks extends sn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vc=new Nt,yo=new ss,xr=new vn,yr=new I;class Fr extends fe{constructor(t=new pe,e=new ks){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(i),xr.radius+=s,t.ray.intersectsSphere(xr)===!1)return;vc.copy(i).invert(),yo.copy(t.ray).applyMatrix4(vc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){const _=c.getX(g);yr.fromBufferAttribute(u,_),xc(yr,_,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)yr.fromBufferAttribute(u,g),xc(yr,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function xc(r,t,e,n,i,s,a){const o=yo.distanceSqToPoint(r);if(o<e){const l=new I;yo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Mo extends Te{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Go extends pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new I,h=new dt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class di extends pe{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const x=[],_=n/2;let m=0;E(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function E(){const p=new I,y=new I;let v=0;const T=(e-t)/n;for(let R=0;R<=s;R++){const M=[],S=R/s,P=S*(e-t)+t;for(let O=0;O<=i;O++){const L=O/i,k=L*l+o,W=Math.sin(k),D=Math.cos(k);y.x=P*W,y.y=-S*n+_,y.z=P*D,u.push(y.x,y.y,y.z),p.set(W,T,D).normalize(),d.push(p.x,p.y,p.z),f.push(L,1-S),M.push(g++)}x.push(M)}for(let R=0;R<i;R++)for(let M=0;M<s;M++){const S=x[M][R],P=x[M+1][R],O=x[M+1][R+1],L=x[M][R+1];(t>0||M!==0)&&(h.push(S,P,L),v+=3),(e>0||M!==s-1)&&(h.push(P,O,L),v+=3)}c.addGroup(m,v,0),m+=v}function A(p){const y=g,v=new dt,T=new I;let R=0;const M=p===!0?t:e,S=p===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,_*S,0),d.push(0,S,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=i;O++){const k=O/i*l+o,W=Math.cos(k),D=Math.sin(k);T.x=M*D,T.y=_*S,T.z=M*W,u.push(T.x,T.y,T.z),d.push(0,S,0),v.x=W*.5+.5,v.y=D*.5*S+.5,f.push(v.x,v.y),g++}for(let O=0;O<i;O++){const L=y+O,k=P+O;p===!0?h.push(k,k+1,L):h.push(k+1,k,L),R+=3}c.addGroup(m,R,p===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qe extends pe{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new I,g=new dt;for(let x=0;x<=i;x++){for(let _=0;_<=n;_++){const m=s+_/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){const _=x*(n+1);for(let m=0;m<n;m++){const E=m+_,A=E,p=E+n+1,y=E+n+2,v=E+1;o.push(A,p,v),o.push(p,y,v)}}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qt extends pe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],g=[],x=[],_=[];for(let m=0;m<=n;m++){const E=[],A=m/n;let p=0;m===0&&a===0?p=.5/e:m===n&&l===Math.PI&&(p=-.5/e);for(let y=0;y<=e;y++){const v=y/e;u.x=-t*Math.cos(i+v*s)*Math.sin(a+A*o),u.y=t*Math.cos(a+A*o),u.z=t*Math.sin(i+v*s)*Math.sin(a+A*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),_.push(v+p,1-A),E.push(c++)}h.push(E)}for(let m=0;m<n;m++)for(let E=0;E<e;E++){const A=h[m][E+1],p=h[m][E],y=h[m+1][E],v=h[m+1][E+1];(m!==0||a>0)&&f.push(A,p,v),(m!==n-1||l<Math.PI)&&f.push(p,y,v)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wo extends pe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const x=g/i*s,_=f/n*Math.PI*2;u.x=(t+e*Math.cos(_))*Math.cos(x),u.y=(t+e*Math.cos(_))*Math.sin(x),u.z=e*Math.sin(_),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const x=(i+1)*f+g-1,_=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,E=(i+1)*f+g;a.push(x,_,E),a.push(_,m,E)}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class l0 extends Se{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Re extends sn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xn extends Re{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ch extends sn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Mr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function c0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function h0(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function yc(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=e[s]*t;for(let l=0;l!==t;++l)i[a++]=r[o+l]}return i}function Rh(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=r[i++];while(s!==void 0)}class Hs{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=s)){const o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class u0 extends Hs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zi,endingEnd:zi}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ki:s=t,o=2*e-n;break;case Ir:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ki:a=t,l=2*n-e;break;case Ir:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,_=x*g,m=-d*_+2*d*x-d*g,E=(1+d)*_+(-1.5-2*d)*x+(-.5+d)*g+1,A=(-1-f)*_+(1.5+f)*x+.5*g,p=f*_-f*x;for(let y=0;y!==o;++y)s[y]=m*a[h+y]+E*a[c+y]+A*a[l+y]+p*a[u+y];return s}}class Ph extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class d0 extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class yn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mr(e,this.TimeBufferType),this.values=Mr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mr(t.times,Array),values:Mr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new d0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ph(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new u0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ns:e=this.InterpolantFactoryMethodDiscrete;break;case Us:e=this.InterpolantFactoryMethodLinear;break;case Hr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return Hr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&c0(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Hr,s=t.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Us;class os extends yn{constructor(t,e,n){super(t,e,n)}}os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Ns;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;class Ih extends yn{}Ih.prototype.ValueTypeName="color";class ts extends yn{}ts.prototype.ValueTypeName="number";class f0 extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let h=c+o;c!==h;c+=4)Ye.slerpFlat(s,0,a,c-o,a,c,l);return s}}class es extends yn{InterpolantFactoryMethodLinear(t){return new f0(this.times,this.values,this.getValueSize(),t)}}es.prototype.ValueTypeName="quaternion";es.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends yn{constructor(t,e,n){super(t,e,n)}}ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Ns;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class ns extends yn{}ns.prototype.ValueTypeName="vector";class So{constructor(t="",e=-1,n=[],i=Fo){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(m0(n[a]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=n.length;s!==a;++s)e.push(yn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=h0(l);l=yc(l,1,h),c=yc(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ts(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,x){if(f.length!==0){const _=[],m=[];Rh(f,_,m,g),_.length!==0&&x.push(new u(d,_,m))}},i=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const _=[],m=[];for(let E=0;E!==d[g].morphTargets.length;++E){const A=d[g];_.push(A.time),m.push(A.morphTarget===x?1:0)}i.push(new ts(".morphTargetInfluence["+x+"]",_,m))}l=f.length*a}else{const f=".bones["+e[u].name+"]";n(ns,f+".position",d,"pos",i),n(es,f+".quaternion",d,"rot",i),n(ns,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function p0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ts;case"vector":case"vector2":case"vector3":case"vector4":return ns;case"color":return Ih;case"quaternion":return es;case"bool":case"boolean":return os;case"string":return ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function m0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=p0(r.type);if(r.times===void 0){const e=[],n=[];Rh(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const $n={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class g0{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const _0=new g0;class cs{constructor(t){this.manager=t!==void 0?t:_0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cn={};class v0 extends Error{constructor(t,e){super(t),this.response=e}}class Lh extends cs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=$n.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Cn[t]!==void 0){Cn[t].push({onLoad:e,onProgress:n,onError:i});return}Cn[t]=[],Cn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Cn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const _=new ReadableStream({start(m){E();function E(){u.read().then(({done:A,value:p})=>{if(A)m.close();else{x+=p.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let v=0,T=h.length;v<T;v++){const R=h[v];R.onProgress&&R.onProgress(y)}m.enqueue(p),E()}},A=>{m.error(A)})}}});return new Response(_)}else throw new v0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{$n.add(t,c);const h=Cn[t];delete Cn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Cn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Cn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class x0 extends cs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=$n.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Fs("img");function l(){h(),$n.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class Dh extends cs{constructor(t){super(t)}load(t,e,n,i){const s=new Te,a=new x0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Gs extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class y0 extends Gs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ya=new Nt,Mc=new I,Sc=new I;class qo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Mc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mc),Sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sc),e.updateMatrixWorld(),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class M0 extends qo{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Qi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class S0 extends Gs{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new M0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const bc=new Nt,bs=new I,Ma=new I;class b0 extends qo{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(bs),Ma.copy(n.position),Ma.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ma),n.updateMatrixWorld(),i.makeTranslation(-bs.x,-bs.y,-bs.z),bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc)}}class Xo extends Gs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new b0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class T0 extends qo{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jo extends Gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new T0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class E0 extends Gs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ls{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class w0 extends cs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=$n.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return $n.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),$n.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});$n.add(t,l),s.manager.itemStart(t)}}class A0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Tc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Tc(){return performance.now()}class C0{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,a;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,a=i;s!==a;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){Ye.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const a=this._workIndex*s;Ye.multiplyQuaternionsFlat(t,a,t,e,t,n),Ye.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,s){for(let a=0;a!==s;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const Yo="\\[\\]\\.:\\/",R0=new RegExp("["+Yo+"]","g"),Ko="[^"+Yo+"]",P0="[^"+Yo.replace("\\.","")+"]",I0=/((?:WC+[\/:])*)/.source.replace("WC",Ko),L0=/(WCOD+)?/.source.replace("WCOD",P0),D0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ko),N0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ko),U0=new RegExp("^"+I0+L0+D0+N0+"$"),F0=["material","materials","bones","map"];class B0{constructor(t,e,n){const i=n||Jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Jt{constructor(t,e,n){this.path=e,this.parsedPath=n||Jt.parseTrackName(e),this.node=Jt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Jt.Composite(t,e,n):new Jt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(R0,"")}static parseTrackName(t){const e=U0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);F0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=Jt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Jt.Composite=B0;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class O0{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,a=s.length,o=new Array(a),l={endingStart:zi,endingEnd:zi};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=rh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,a=s/i,o=i/s;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case mu:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Fo:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const a=n===pu;if(t===0)return s===-1?i:a&&(s&1)===1?e-i:i;if(n===uo){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=ki,i.endingEnd=ki):(t?i.endingStart=this.zeroSlopeAtStart?ki:zi:i.endingStart=Ir,e?i.endingEnd=this.zeroSlopeAtEnd?ki:zi:i.endingEnd=Ir)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=e,o[1]=s+t,l[1]=n,this}}const z0=new Float32Array(1);class Sa extends ti{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const x=e&&e._propertyBindings[u].binding.parsedPath;g=new C0(Jt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Ph(new Float32Array(2),new Float32Array(2),1,z0),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let a=typeof t=="string"?So.findByName(i,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Fo),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new O0(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?So.findByName(n,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Ec=new Nt;class k0{constructor(t,e,n=0,i=1/0){this.ray=new ss(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ec.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ec),this}intersectObject(t,e=!0,n=[]){return bo(t,this,n,e),n.sort(wc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)bo(t[i],this,n,e);return n.sort(wc),n}}function wc(r,t){return r.distance-t.distance}function bo(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)bo(s[a],t,e,!0)}}class Ac{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class V0 extends ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);class H0{constructor(){N(this,"ctx",null);N(this,"master",null);N(this,"rainGain",null);N(this,"rainFilter",null);N(this,"activeVoiceAudio",null);N(this,"pendingVoiceClip",null);N(this,"lastVoiceClip",null);N(this,"onVoiceStateChange");N(this,"muted",!1);N(this,"initialized",!1);if(typeof window<"u"){const t=()=>this.ensureUnlocked();window.addEventListener("pointerdown",t,{passive:!0}),window.addEventListener("keydown",t,{passive:!0})}}setVoiceStateListener(t){this.onVoiceStateChange=t}ensureUnlocked(){if(this.initialized){if(this.ctx&&this.ctx.state==="suspended"&&!this.muted&&this.ctx.resume(),!this.muted&&this.pendingVoiceClip){const t=this.pendingVoiceClip;this.pendingVoiceClip=null,this.playVoiceOver(t)}return}try{this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.65,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,s=0;for(let o=0;o<t;o++){const l=Math.random()*2-1;i=.99*i+l*.12,s=.92*s+l*.25,n[o]=(i+s)*.08}const a=this.ctx.createBufferSource();if(a.buffer=e,a.loop=!0,this.rainFilter=this.ctx.createBiquadFilter(),this.rainFilter.type="bandpass",this.rainFilter.frequency.value=950,this.rainGain=this.ctx.createGain(),this.rainGain.gain.value=0,a.connect(this.rainFilter),this.rainFilter.connect(this.rainGain),this.rainGain.connect(this.master),a.start(),this.initialized=!0,!this.muted&&this.pendingVoiceClip){const o=this.pendingVoiceClip;this.pendingVoiceClip=null,this.playVoiceOver(o)}}catch{}}isMuted(){return this.muted}toggleMute(){var t;return this.muted=!this.muted,this.ensureUnlocked(),this.master&&this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:.65,this.ctx.currentTime,.05),this.muted&&this.rainGain&&this.ctx&&this.rainGain.gain.setTargetAtTime(0,this.ctx.currentTime,.05),this.muted&&this.activeVoiceAudio&&(this.activeVoiceAudio.pause(),(t=this.onVoiceStateChange)==null||t.call(this,!1)),this.muted||this.playBotVoice("happy"),!this.muted}stopVoiceOver(){var t;this.pendingVoiceClip=null,this.activeVoiceAudio&&(this.activeVoiceAudio.pause(),this.activeVoiceAudio=null),(t=this.onVoiceStateChange)==null||t.call(this,!1)}replayVoiceOver(){var t;if(this.ensureUnlocked(),this.activeVoiceAudio&&!this.activeVoiceAudio.paused){this.activeVoiceAudio.pause(),(t=this.onVoiceStateChange)==null||t.call(this,!1);return}this.lastVoiceClip&&(this.muted&&(this.muted=!1,this.master&&this.ctx&&this.master.gain.setTargetAtTime(.65,this.ctx.currentTime,.05)),this.playVoiceOver(this.lastVoiceClip))}playVoiceOver(t){var e,n;if(this.lastVoiceClip=t,this.muted){this.pendingVoiceClip=t,(e=this.onVoiceStateChange)==null||e.call(this,!1);return}this.activeVoiceAudio&&(this.activeVoiceAudio.pause(),this.activeVoiceAudio=null);try{const i=t.includes("?")?t:`${t}?v=v4studio`,s=new Audio(i);s.volume=.95,this.activeVoiceAudio=s,s.onended=()=>{var a;this.activeVoiceAudio===s&&((a=this.onVoiceStateChange)==null||a.call(this,!1))},s.onpause=()=>{var a;this.activeVoiceAudio===s&&((a=this.onVoiceStateChange)==null||a.call(this,!1))},s.play().then(()=>{var a;this.pendingVoiceClip===t&&(this.pendingVoiceClip=null),this.activeVoiceAudio===s&&((a=this.onVoiceStateChange)==null||a.call(this,!0))},()=>{var a;this.pendingVoiceClip=t,(a=this.onVoiceStateChange)==null||a.call(this,!1)})}catch{(n=this.onVoiceStateChange)==null||n.call(this,!1)}}setRainingSound(t){if(!this.initialized||!this.ctx||!this.rainGain)return;const e=t&&!this.muted?.22:0;this.rainGain.gain.setTargetAtTime(e,this.ctx.currentTime,.08)}playPopSpawn(t=1){if(this.ensureUnlocked(),this.muted||!this.ctx||!this.master)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(240*t,e),n.frequency.exponentialRampToValueAtTime(620*t,e+.11),i.gain.setValueAtTime(.001,e),i.gain.linearRampToValueAtTime(.14,e+.02),i.gain.exponentialRampToValueAtTime(.001,e+.16),n.connect(i),i.connect(this.master),n.start(e),n.stop(e+.17)}playTickPop(t=1){if(this.ensureUnlocked(),this.muted||!this.ctx||!this.master)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle";const s=360+t*75;n.frequency.setValueAtTime(s,e),n.frequency.exponentialRampToValueAtTime(s*1.9,e+.08),i.gain.setValueAtTime(.001,e),i.gain.linearRampToValueAtTime(.18,e+.015),i.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(i),i.connect(this.master),n.start(e),n.stop(e+.13)}playWolfHowl(){if(!this.initialized||this.muted||!this.ctx||!this.master)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(395,t+.28),e.frequency.exponentialRampToValueAtTime(310,t+.65),n.gain.setValueAtTime(.001,t),n.gain.linearRampToValueAtTime(.085,t+.14),n.gain.exponentialRampToValueAtTime(.001,t+.68),e.connect(n),n.connect(this.master),e.start(t),e.stop(t+.7)}playHuntPounce(){if(!this.initialized||this.muted||!this.ctx||!this.master)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(165,t),e.frequency.exponentialRampToValueAtTime(58,t+.16),n.gain.setValueAtTime(.001,t),n.gain.linearRampToValueAtTime(.12,t+.02),n.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(n),n.connect(this.master),e.start(t),e.stop(t+.19)}playBirthChime(){if(!this.initialized||this.muted||!this.ctx||!this.master)return;[587.33,739.99,880,1174.66].forEach((e,n)=>{setTimeout(()=>{if(!this.ctx||!this.master||this.muted)return;const i=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(e,i),a.gain.setValueAtTime(.001,i),a.gain.linearRampToValueAtTime(.08,i+.015),a.gain.exponentialRampToValueAtTime(.001,i+.22),s.connect(a),a.connect(this.master),s.start(i),s.stop(i+.24)},n*65)})}playSplashSip(){if(!this.initialized||this.muted||!this.ctx||!this.master)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(480,t),e.frequency.exponentialRampToValueAtTime(760,t+.07),n.gain.setValueAtTime(.001,t),n.gain.linearRampToValueAtTime(.045,t+.012),n.gain.exponentialRampToValueAtTime(.001,t+.085),e.connect(n),n.connect(this.master),e.start(t),e.stop(t+.09)}playBotVoice(t){if(this.ensureUnlocked(),this.muted||!this.ctx||!this.master)return;({happy:[523.25,659.25,783.99],surprise:[440,880,622],panic:[620,480,620,415],laugh:[587,740,659,880,1046]})[t].forEach((i,s)=>{setTimeout(()=>{if(!this.ctx||!this.master||this.muted)return;const a=this.ctx.currentTime,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=t==="panic"?"sawtooth":"sine",o.frequency.setValueAtTime(i,a),o.frequency.exponentialRampToValueAtTime(i*1.12,a+.06),l.gain.setValueAtTime(.001,a),l.gain.linearRampToValueAtTime(t==="panic"?.055:.09,a+.012),l.gain.exponentialRampToValueAtTime(.001,a+.085),o.connect(l),l.connect(this.master),o.start(a),o.stop(a+.09)},s*68)})}playLevelWin(){if(this.ensureUnlocked(),this.muted||!this.ctx||!this.master)return;[523.25,659.25,783.99,1046.5,1318.5].forEach((e,n)=>{setTimeout(()=>{if(!this.ctx||!this.master||this.muted)return;const i=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(e,i),a.gain.setValueAtTime(.001,i),a.gain.linearRampToValueAtTime(.13,i+.02),a.gain.exponentialRampToValueAtTime(.001,i+.34),s.connect(a),a.connect(this.master),s.start(i),s.stop(i+.36)},n*90)})}}const Cc=[{id:"hand",icon:"👆",label:{ar:"تفاعل مباشر",en:"Interact / Poke"},hint:{ar:"انقر على الكائنات، اقلب الجذع، أو فرقع القُراد المتطفل!",en:"Click creatures, flip the mossy log, or pop parasite ticks!"}},{id:"rain",icon:"🌧️",label:{ar:"غيمة المطر",en:"Raincloud"},hint:{ar:"اضغط مطولاً واسحب فوق الواحة لصبّ المطر وإنعاش الماء (عامل لاحيوي)!",en:"Hold & drag over the oasis to pour rain (Abiotic Factor)!"}},{id:"plant",icon:"🌸",label:{ar:"ازرع شجيرة",en:"Plant Shrub"},hint:{ar:"انقر على الأرض لزراعة نباتات مزهرة (منتجات حيوية)!",en:"Click the ground to pop lush flowering shrubs (Producers)!"}},{id:"gazelle",icon:"🦌",label:{ar:"أطلق غزالاً",en:"Drop Gazelle"},hint:{ar:"أنزل غزال ريم عربي إلى القطيع وراقب السعة التحملية (K)!",en:"Drop an Arabian Gazelle into the herd & watch Carrying Capacity (K)!"}},{id:"wolf",icon:"🐺",label:{ar:"أطلق ذئباً",en:"Drop Wolf"},hint:{ar:"أطلق ذئباً عربياً يصطاد الغزلان ويتكاثر ويمنع الرعي الجائر!",en:"Drop an Arabian Wolf that hunts gazelles, reproduces & curbs overgrazing!"}},{id:"fox",icon:"🦊",label:{ar:"أطلق ثعلباً",en:"Drop Fox"},hint:{ar:"أطلق ثعلب رمال رشيقاً يصطاد ليلاً ويستظل بالصخور نهاراً ويتكاثر!",en:"Drop a nimble Sand Fox that hunts critters, shelters from heat & breeds!"}},{id:"rock",icon:"🪨",label:{ar:"ابنِ مأوى",en:"Rock Shelter"},hint:{ar:"ضع صخوراً ظليلة لتوفير المأوى ورفع السعة التحملية!",en:"Place shaded rock burrows to provide shelter & boost K!"}}],Rc=[{ar:"هاهاها! دغدغت حسّاسات الكربون في بطني! 🤖⚡ ركّز على الغزلان يا بطل!",en:"Hahaha! You tickled my carbon sensors! 🤖⚡ Focus on the gazelles, hero!"},{ar:"آي! لا تنقر على رأسي، فيه معالج بيئي حساس جداً! 😂🔧",en:"Hey! Careful with the head—high-precision eco-processor inside! 😂🔧"},{ar:"تبي رقصة سريعة؟ أبشر بأحلى رقصة روبوت سعودي! 💃🤖",en:"Want a quick robot boogie? Watch these Saudi eco-ranger moves! 💃🤖"},{ar:"أنا «سَند» — نصف معدن ونصف حماس لحماية بيئة المملكة! 🇸🇦🌿",en:"I'm Sanad — 50% titanium, 50% pure passion for Saudi wildlife! 🇸🇦🌿"}],Oe={1:{id:1,code:"SA-01",regionName:{ar:"واحة الأحساء",en:"Al-Ahsa Oasis"},title:{ar:"إنقاذ الواحة العطشى!",en:"Rescue the Thirsty Oasis!"},textbookPages:{ar:"علوم الصف الخامس · ص ٨٤–٨٧",en:"Grade 5 Science · pp. 84–87"},conceptBadge:{ar:"العوامل اللاحيوية والحيوية · العامل المحدد",en:"Abiotic & Biotic Factors · Limiting Factor"},lat:25.38,lon:49.59,accentColor:"#10b981",defaultTool:"rain",introSpeech:{ar:"أهلاً بكَ في واحةِ الأَحساء! انظُر كيفَ جَفَّت مياهُ البُحيرةِ فتراجَعَ الغِطاءُ النَّباتيُّ وأُنهِكَتِ الغِزلان؛ لأنَّ الماءَ هُنا يَعمَلُ كَعامِلٍ لا حَيويٍّ مُحَدِّدٍ يَحكُمُ بَقاءَ الجَماعاتِ الحَيوية. اضغَطْ مُطَوَّلاً واسحَبْ غَيمةَ المَطَرِ فَوقَ الحَوضِ الآن، ثُمَّ ازرَعْ سِتَّ شُجَيراتٍ مُزهِرةٍ لِتَعودَ الحَياةُ إلى الواحة!",en:"Welcome to Al-Ahsa Oasis! Notice how the parched basin has wilted the shrubs and exhausted the gazelle herd—because water acts here as a Limiting Abiotic Factor governing the entire ecosystem. Hold and drag the Raincloud over the basin right now, then plant six flowering shrubs to bring the oasis back to life!"},winSpeech:{ar:"أحسَنتَ! لاحِظ كيفَ أَنعَشَ عامِلٌ لا حَيويٌّ واحِدٌ — وهُوَ الماء — النَّباتاتِ المُنتِجةَ وقطيعَ الغِزلانِ مَعاً في لَحظةٍ واحدة! هَذا هُوَ دَورُ العامِلِ المُحَدِّدِ في الأَنظِمةِ البِيئية.",en:"Excellent work! Notice how restoring a single abiotic factor—water—revived both the producer shrubs and the gazelle herd together. That is a Limiting Factor in action!"},scienceTakeaway:{ar:"النظام البيئي يجمع العوامل الحيوية (نباتات وحيوانات) واللاحيوية (ماء، ضوء، تربة، حرارة). نقص الماء يعمل كـ «عامل محدد» يقيّد نمو الجماعات الحيوية.",en:"An ecosystem links biotic factors (plants, animals) with abiotic factors (water, sunlight, soil, temperature). Scarce water acts as a Limiting Factor."},objectives:[{id:"fill_water",icon:"💧",label:{ar:"صبّ المطر لملء الواحة (٧٥٪)",en:"Pour rain to fill Oasis (75%)"}},{id:"plant_shrubs",icon:"🌸",label:{ar:"ازرع ٦ شجيرات مزهرة",en:"Grow 6 flowering shrubs"}}],quiz:{question:{ar:"عندما جفّت مياه الواحة وتأثرت الغزلان والنباتات، ماذا نسمي «الماء» في هذا النظام البيئي؟",en:"When oasis water dried up and restricted gazelles and plants, what role did water play?"},options:[{ar:"عاملاً لاحيوياً وعاملاً محدداً لنمو الجماعات",en:"An abiotic factor and a limiting factor"},{ar:"مخلوقاً منتجاً يصنع غذاءه بنفسه",en:"A biotic producer making its own food"},{ar:"علاقة تطفل بين الغزلان والرمل",en:"A parasitic relationship between deer and sand"}],correctIndex:0,explanation:{ar:"أحسنت! الماء عامل غير حي (لاحيوي)، وعندما يقل يحدد عدد المخلوقات التي تستطيع البقاء فيسمى عاملاً محدداً.",en:"Spot on! Water is non-living (abiotic), and when scarce it restricts population growth as a limiting factor."}}},2:{id:2,code:"SA-02",regionName:{ar:"منحدرات جبال طويق",en:"Tuwaiq Escarpment"},title:{ar:"فوضى الرعي الجائر والسعة التحملية!",en:"Overgrazing Chaos & Carrying Capacity!"},textbookPages:{ar:"علوم الصف الخامس · ص ٨٦–٨٧، ٩٤",en:"Grade 5 Science · pp. 86–87, 94"},conceptBadge:{ar:"التنافس · السعة التحملية (K) · المفترسات",en:"Competition · Carrying Capacity (K) · Predators"},lat:24.85,lon:46.4,accentColor:"#f59e0b",defaultTool:"wolf",introSpeech:{ar:"نَحنُ الآنَ في مُنحَدَراتِ جِبالِ طُويق! انظُر إلى هَذا الخَلَلِ البِيئي: أَحَدَ عَشَرَ غَزالاً تَجاوَزوا السَّعةَ التَّحَمُّليةَ للمَحميةِ في غِيابِ المُفتَرِسات، فاشتَدَّ التَّنافُسُ وأَوشَكَ الغِطاءُ النَّباتيُّ على الانهيار! أَطلِقْ ذِئبَينِ عَرَبِيَّينِ لِضَبطِ الرَّعيِ الجائِر، وابنِ مَأوَيَينِ صَخرِيَّينِ إضافِيَّينِ لِرَفعِ السَّعةِ التَّحَمُّلية!",en:"Welcome to the Tuwaiq Escarpment! Look at this ecological imbalance: eleven hungry deer have exceeded Carrying Capacity (K) with zero predators, sparking fierce competition and overgrazing every shrub! Release two Arabian Wolves to regulate the herd, and place Rock Shelters to raise Carrying Capacity!"},winSpeech:{ar:"تَوازُنٌ بِيئيٌّ دَقيق! الذِّئابُ ضَبَطَت أَعدادَ الفَرائِسِ فَحَمَتِ الغِطاءَ النَّباتيَّ مِنَ الاستِنزاف، والمَآوي الصَّخريةُ رَفَعَتِ السَّعةَ التَّحَمُّليةَ فاستَقَرَّ القَطيعُ بأَمان!",en:"Pure ecological balance! The wolves curbed overgrazing so vegetation could recover, while rock shelters raised Carrying Capacity (K) to stabilize the herd!"},scienceTakeaway:{ar:"السعة التحملية (K) هي أكبر عدد من أفراد الجماعة الحيوية يدعمه النظام البيئي. وجود المفترسات يمنع انفجار أعداد الفرائس وتدمير الغطاء النباتي.",en:"Carrying Capacity (K) is the maximum population an ecosystem can support. Predators regulate prey herds so vegetation is not wiped out."},objectives:[{id:"add_wolves",icon:"🐺",label:{ar:"أطلق ذئبين لضبط التنافس",en:"Release 2 Wolves to curb overgrazing"}},{id:"add_rocks",icon:"🪨",label:{ar:"ابنِ ٤ مآوٍ صخرية لرفع (K)",en:"Have 4 Rock Shelters to boost K"}},{id:"balance_k",icon:"⚖️",label:{ar:"اجعل القطيع ضمن السعة التحملية (K)",en:"Bring herd ≤ Carrying Capacity (K)"}}],quiz:{question:{ar:"ماذا يحدث عندما يتجاوز عدد الغزلان «السعة التحملية (K)» للمحمية في غياب المفترسات؟",en:"What happens when gazelle numbers exceed the sanctuary Carrying Capacity (K) with no predators?"},options:[{ar:"يشتد التنافس على الغذاء والماء ويتدهور الغطاء النباتي",en:"Competition spikes and vegetation gets overgrazed"},{ar:"تتحول الغزلان إلى منتجات تصنع غذاءها بالبناء الضوئي",en:"Gazelles turn into photosynthetic producers"},{ar:"تزداد كمية الأمطار تلقائياً بسبب كثرة الغزلان",en:"Rainfall automatically doubles due to more deer"}],correctIndex:0,explanation:{ar:"ممتاز! تجاوز السعة التحملية يشعل التنافس على الموارد المحدودة ويؤدي لاستنزاف النباتات.",en:"Exactly! Exceeding Carrying Capacity triggers fierce competition and depletes plants."}}},3:{id:3,code:"SA-03",regionName:{ar:"غابات عسير الضبابية",en:"Asir Cloud Highlands"},title:{ar:"فندق الشجرة العملاقة وسر الجذع المهتز!",en:"Giant Tree Hotel & The Wiggling Log!"},textbookPages:{ar:"علوم الصف الخامس · ص ٨٨–٨٩",en:"Grade 5 Science · pp. 88–89"},conceptBadge:{ar:"الموطن البيئي مقابل الإطار البيئي (Niche)",en:"Habitat vs. Ecological Niche"},lat:18.25,lon:42.4,accentColor:"#38bdf8",defaultTool:"hand",introSpeech:{ar:"أَهلاً بكَ في غاباتِ عَسير الضَّبابية! كَيفَ تَعيشُ عَشَراتُ الأَنواعِ في مَوطِنٍ واحِدٍ دونَ تَناحُرٍ مُستَمِر؟ السِّرُّ في الإطارِ البِيئيِّ لِكُلِّ مَخلوق! بِأَداةِ التَّفاعُلِ المُباشِر، انقُرْ على الجِذعِ الرَّطْبِ المُهتَزِّ لِكَشفِ المُحَلِّلات، ثُمَّ انقُرْ على طائِرِ القِمَّةِ وطائِرِ الضِّفَّةِ لِمُقارَنةِ أَدوارِها البِيئية!",en:"Welcome to the misty Asir Highlands! How do so many species share one habitat without constant conflict? Each occupies a distinct Ecological Niche! Use the Interact tool to flip open the shaking mossy log for decomposers, then tap the canopy parrot and shoreline wader to compare their roles!"},winSpeech:{ar:"اِكتِشافٌ عِلميٌّ رائِع! جَميعُها تَتَقاسَمُ مَوطِناً واحِداً، لَكِنَّ البَبَّغاءَ في الأَغصان، والفلامِنغو عِندَ الضِّفَّة، وقَمْلَ الخَشَبِ يُحَلِّلُ الجِذعَ الرَّطْب — لِكُلِّ كائِنٍ إطارٌ بِيئيٌّ مُستَقِلٌّ يَمنَعُ التَّزاحُم!",en:"Brilliant field observation! All of these organisms share one Habitat, yet partition resources through distinct Ecological Niches—canopy frugivore, shoreline wader, and log decomposers!"},scienceTakeaway:{ar:"«الموطن» هو المكان الذي يعيش فيه المخلوق الحي، أما «الإطار البيئي» فهو دوره وطريقة حصوله على الغذاء والمأوى، مما يقلل التنافس في الموطن المشترك.",en:"A Habitat is where an organism lives; an Ecological Niche is its specific role and food source, letting many species share one habitat peacefully."},objectives:[{id:"flip_log",icon:"🪵",label:{ar:"انقر على الجذع المهتز لكشف المحللات",en:"Click the shaking log to reveal woodlice"}},{id:"inspect_canopy",icon:"🦜",label:{ar:"انقر على الشجرة العملاقة/الببغاء (إطار القمة)",en:"Tap Giant Tree / Canopy Bird niche"}},{id:"inspect_shore",icon:"🦩",label:{ar:"انقر على طائر الفلامنجو/اللقلق (إطار الضفة)",en:"Tap Wading Bird (Shoreline niche)"}}],quiz:{question:{ar:"تعيش عدة أنواع من الطيور والحشرات على شجرة واحدة دون تنافس شديد لأن لكل نوع منها:",en:"Several bird and insect species live around the same tree without intense conflict because each has:"},options:[{ar:"إطاراً بيئياً (دوراً وغذاءً ومكاناً) مختلفاً عن الآخر",en:"A distinct ecological niche (role & food source)"},{ar:"القدرة على العيش بدون ماء أو هواء نهائياً",en:"No need for water, oxygen, or food"},{ar:"علاقة افتراس مع جذور الشجرة",en:"A predatory relationship with rocks"}],correctIndex:0,explanation:{ar:"رائع! اختلاف الإطار البيئي يسمح بتقاسم الموطن الواحد بسلام وتكامل.",en:"Correct! Distinct ecological niches partition resources inside a shared habitat."}}},4:{id:4,code:"SA-04",regionName:{ar:"سهول تهامة والبحر الأحمر",en:"Tihamah & Red Sea Coast"},title:{ar:"عيادة الدكتور سَند: فرقع القُراد المتطفل!",en:"Dr. Sanad's Clinic: Pop the Parasite Ticks!"},textbookPages:{ar:"علوم الصف الخامس · ص ٩٠–٩٢",en:"Grade 5 Science · pp. 90–92"},conceptBadge:{ar:"التكافل: التطفل ⁦(+/−)⁩ · التقايض ⁦(+/+)⁩ · التعايش ⁦(+/0)⁩",en:"Symbiosis: Parasitism · Mutualism · Commensalism"},lat:20.8,lon:40.1,accentColor:"#ec4899",defaultTool:"hand",introSpeech:{ar:"مَرحَباً بكَ في سُهولِ تِهامة وساحِلِ البَحرِ الأَحمر لِنَختَبِرَ عَلاقاتِ التَّكافُلِ الثَّلاثَ عَمَلياً! المَها العَرَبيُّ يُعاني مِن سِتِّ حَشَراتِ قُرادٍ مُتَطَفِّلةٍ ⁦(+/−)⁩؛ انقُرْ عَلَيها لِإزالَتِها، ثُمَّ لَقِّحِ الأَزهارَ الثَّلاثَ لِتَرى التَّقايُضَ ⁦(+/+)⁩، وابنِ عُشَّ الطَّائِرِ الآمِنَ على غُصنِ الشَّجَرةِ لِتَرى التَّعايُشَ ⁦(+/0)⁩!",en:"Welcome to Tihamah and the Red Sea coast to test all three forms of Symbiosis hands-on! First, click all six parasitic ticks (+/−) off the suffering Oryx Stag, then tap the three giant blossoms to spark Mutualism (+/+), and tap the tree branch to build a safe Commensal bird nest (+/0)!"},winSpeech:{ar:"إِتقانٌ عِلميٌّ مُتَكامِل! خَلَّصتَ المَها مِن ضَرَرِ التَّطَفُّلِ ⁦(+/−)⁩، وحَقَّقتَ المَنفَعةَ المُتَبادَلةَ بالتَّقايُضِ بَينَ المُلَقِّحاتِ والزُّهورِ ⁦(+/+)⁩، وآوَيتَ الطَّائِرَ بالتَّعايُشِ دونَ أَيِّ ضَرَرٍ للشَّجَرةِ ⁦(+/0)⁩!",en:"Masterful biology! You cured Parasitism (+/−) on the stag, triggered win-win Mutualism (+/+) across the flowers, and demonstrated Commensalism (+/0) with a nest that shelters the bird without harming the tree!"},scienceTakeaway:{ar:"علاقات التكافل ثلاث: التقايض ⁦(+/+)⁩ كلاهما يستفيد كالملقحات والزهرة، التعايش ⁦(+/0)⁩ طرف يستفيد والآخر لا يتضرر كعش الطائر، والتطفل ⁦(+/−)⁩ المتطفل يستفيد والعائل يتضرر كالقُراد.",en:"Symbiosis has 3 forms: Mutualism (+/+) benefits both, Commensalism (+/0) helps one without harming the host, and Parasitism (+/−) harms the host."},objectives:[{id:"pop_ticks",icon:"🪲",label:{ar:"فرقع ٦ حبات قُراد عن ظهر المها ⁦(+/−)⁩",en:"Pop all 6 Parasite Ticks off the Stag (+/−)"}},{id:"pollinate_flowers",icon:"🌺",label:{ar:"انقر لتلقيح ٣ أزهار عملاقة ⁦(+/+)⁩ تقايض",en:"Tap 3 Giant Flowers to pollinate (+/+ Mutualism)"}},{id:"build_nest",icon:"🪺",label:{ar:"انقر على غصن الشجرة لبناء عش آمن ⁦(+/0)⁩ تعايش",en:"Tap the Tree Branch to place a Bird Nest (+/0)"}}],quiz:{question:{ar:"أي علاقة مما يلي تمثل «التعايش ⁦(+ / 0)⁩» حيث يستفيد أحد المخلوقين ولا يستفيد الآخر ولا يتضرر؟",en:"Which example represents Commensalism (+ / 0), where one organism benefits and the other is unaffected?"},options:[{ar:"بناء طائر لعشه فوق شجرة لحماية صغاره دون الإضرار بالشجرة",en:"A bird building a safe nest on a tree without harming it"},{ar:"التصاق القُراد بجلد المها وامتصاص دمه",en:"Ticks feeding on an oryx stag and weakening it"},{ar:"تبادل المنفعة بين النحلة والزهرة عند نقل حبوب اللقاح",en:"A pollinator transferring pollen while sipping nectar"}],correctIndex:0,explanation:{ar:"إجابة ذهبية! الطائر يستفيد بالمأوى، والشجرة لا تستفيد ولا تتضرر — وهذا هو التعايش ⁦(+/0)⁩.",en:"Bullseye! The bird gains safe shelter while the tree is neither helped nor harmed (+/0)."}}},5:{id:5,code:"SA-05",regionName:{ar:"كثبان الربع الخالي",en:"Rub' al Khali Dunes"},title:{ar:"مغامرة الليل الصحراوي وصندوق الألعاب المفتوح!",en:"Arabian Night Survival & Open Eco-Toybox!"},textbookPages:{ar:"علوم الصف الخامس · ص ٩٤–٩٥",en:"Grade 5 Science · pp. 94–95"},conceptBadge:{ar:"التكيف الليلي · تجنب الحرارة · مختبر مفتوح",en:"Nocturnal Adaptation · Desert Survival"},lat:20.2,lon:50.8,accentColor:"#8b5cf6",defaultTool:"rock",introSpeech:{ar:"وَصَلنا إلى كُثبانِ الرُّبعِ الخالي حَيثُ تَتَجاوَزُ الحَرارةُ نَهاراً سِتّاً وأَربَعينَ دَرَجةً مِئَوية! لاحِظ كَيفَ تَختَبِئُ ثَعالِبُ الرِّمالِ في الظِّلالِ نَهاراً لِحِفظِ الماءِ في أَجسامِها. حَوِّلِ السَّماءَ إلى اللَّيلِ الصَّحراويِّ الباردِ بالزِّرِّ العُلويّ، ووَفِّرْ أَربَعَ مَآوٍ صَخرية، وارفَعْ مَخزونَ الواحةِ إلى سِتِّينَ بالمِئة لِتَرى النَّشاطَ اللَّيليَّ يَنطَلِق!",en:"Welcome to the Rub' al Khali dunes, where daytime heat hits forty-six degrees Celsius! Notice how sand foxes shelter in shaded burrows by day to conserve body water. Switch the sky to cool Arabian Night at the top bar, provide four Rock Shelters, and raise oasis water to 60% to watch nocturnal life emerge!"},winSpeech:{ar:"تَهانينا يا حارِسَ الطَّبيعة! أَثبَتَّ عَمَلياً كَيفَ يَحمي التَّكَيُّفُ اللَّيليُّ والجُحورُ الظَّليلةُ كائِناتِ الصَّحراءِ مِنَ الجَفاف، وأَتمَمتَ جَميعَ مَهامِّ الأَنظِمةِ البِيئيةِ في المَملَكة! المُختَبَرُ الحُرُّ مَفتوحٌ لَكَ بالكامِل.",en:"Congratulations, Master Eco-Ranger! You proved how nocturnal adaptation and shaded burrows beat extreme desert heat, completing all five Saudi Sanctuary Quests! Unlimited Free Sandbox Mode is now yours."},scienceTakeaway:{ar:"تتكيف كثير من حيوانات الصحراء السعودية (كثعلب الرمال والجربوع) بالاختباء في الجحور والظلال نهاراً والنشاط ليلاً لتجنب الحرارة الشديدة وفقدان الماء.",en:"Many Saudi desert animals (like sand foxes and jerboas) survive extreme heat by sheltering in burrows by day and foraging at night."},objectives:[{id:"switch_night",icon:"🌙",label:{ar:"حوّل السماء إلى الليل الصحراوي البارد",en:"Switch sky to cool Starry Night"}},{id:"desert_shelters",icon:"🪨",label:{ar:"وفّر ٤ مآوٍ صخرية للجحور الصحراوية",en:"Provide 4 desert Rock Shelters"}},{id:"desert_oasis",icon:"💧",label:{ar:"ارفع مخزون ماء الواحة إلى ٦٠٪",en:"Raise oasis water to 60%"}}],quiz:{question:{ar:"لماذا تختبئ ثعالب الرمال والجرابيع في الجحور نهاراً وتنشط ليلاً في صحراء الربع الخالي؟",en:"Why do desert foxes and jerboas shelter in burrows by day and emerge at night in the desert?"},options:[{ar:"لتجنب الحرارة الشديدة نهاراً وتقليل فقدان الماء من أجسامها",en:"To avoid extreme daytime heat and conserve body water"},{ar:"لأن النباتات لا تقوم بالبناء الضوئي إلا في منتصف الليل",en:"Because desert plants only photosynthesize at midnight"},{ar:"لأن الرمال تختفي تماماً في ساعات الليل",en:"Because sand dunes disappear at night"}],correctIndex:0,explanation:{ar:"بطل العلوم! النشاط الليلي تكيف سلوكي يحمي حيوانات الصحراء من الجفاف والحرارة القاسية.",en:"Science Champion! Nocturnal activity is a key behavioral adaptation to beat desert heat."}}}};function mt(r,t,e){return Math.max(t,Math.min(e,r))}function Ce(r,t,e){return r+(t-r)*e}function Xe(r){return r==="deer"||r==="stag"}class G0{constructor(){N(this,"questId",1);N(this,"waterLevel",18);N(this,"isNight",!1);N(this,"temperatureC",36);N(this,"animals",[]);N(this,"plants",[]);N(this,"rocks",[]);N(this,"totalBirths",0);N(this,"totalHunts",0);N(this,"inspectedAnimalId",null);N(this,"logFlipped",!1);N(this,"canopyInspected",!1);N(this,"shoreInspected",!1);N(this,"symbiosisMode","parasitism");N(this,"tickAlive",[!0,!0,!0,!0,!0,!0]);N(this,"flowerPollinated",[!1,!1,!1]);N(this,"commensalismBuilt",!1);N(this,"completedQuests",new Set);N(this,"questJustWon",!1);N(this,"nextId",1);N(this,"autoSproutCooldown",0);N(this,"reimmigrateTimer",0);N(this,"pendingPopups",[]);N(this,"pendingSounds",[]);N(this,"pendingHeartBursts",[]);this.loadQuest(1)}getWaterRadius(){return this.waterLevel<=4?.2:3.55*Ce(.45,1.04,this.waterLevel/100)}consumeQuestWinTrigger(){return this.questJustWon?(this.questJustWon=!1,!0):!1}pushPopup(t,e,n,i,s="#fef08a"){this.pendingPopups.length<8&&this.pendingPopups.push({worldX:t,worldY:e,worldZ:n,text:i,color:s})}selectAnimal(t){this.inspectedAnimalId=t}loadQuest(t){if(this.questId=t,this.animals=[],this.plants=[],this.rocks=[],this.questJustWon=!1,this.inspectedAnimalId=null,this.logFlipped=!1,this.canopyInspected=!1,this.shoreInspected=!1,this.symbiosisMode="parasitism",this.tickAlive=[!0,!0,!0,!0,!0,!0],this.flowerPollinated=[!1,!1,!1],this.commensalismBuilt=!1,t===1)this.isNight=!1,this.waterLevel=16,this.spawnRockInternal(-6.8,-3.5,"large",!1),this.spawnPlantInternal(-3.8,3.6,"bush",.42),this.spawnPlantInternal(4.2,3.1,"flowers",.38),this.spawnAnimalInternal("deer",-3.2,2.2,!1,1,"F"),this.spawnAnimalInternal("stag",-1.4,4.2,!1,1,"M"),this.spawnAnimalInternal("deer",3,2.6,!1,1,"F"),this.spawnAnimalInternal("deer",4.6,-1.2,!1,.58,"M"),this.spawnAnimalInternal("fox",-5.6,-2.4,!1,1,"F");else if(t===2){this.isNight=!1,this.waterLevel=74,this.spawnRockInternal(-7.5,-2.5,"large",!1),this.spawnRockInternal(6.8,-3.8,"medium",!1),[[-5.2,2.2],[-2.8,4.6],[.5,5.2],[3.8,4],[5.6,1.5],[-4.4,-4.2],[2.9,-4.5]].forEach(([n,i],s)=>{this.spawnPlantInternal(n,i,s%2===0?"bush":"flowers",.58)});for(let n=0;n<11;n++){const i=n/11*Math.PI*2,s=4.4+n%3*1.5,a=this.spawnAnimalInternal(n%3===0?"stag":"deer",Math.cos(i)*s,Math.sin(i)*s,!1,1,n%2===0?"F":"M");a.hunger=55+n%4*8}}else if(t===3){this.isNight=!1,this.waterLevel=86,this.spawnRockInternal(-7.2,-3.2,"large",!1),this.spawnRockInternal(6.5,-4.2,"medium",!1),this.spawnRockInternal(-5.5,5.4,"medium",!1),[[-6,1.8],[-3.5,5],[3.6,4.8],[6.2,1.6],[-2.5,-5.2],[3.2,-5]].forEach(([s,a],o)=>this.spawnPlantInternal(s,a,o%2===0?"bush":"flowers",.95));const n=this.spawnAnimalInternal("deer",-4.8,3.2,!1,1,"F");this.spawnAnimalInternal("stag",4.8,2.8,!1,1,"M");const i=this.spawnAnimalInternal("deer",-4.1,3.7,!1,.54,"F");i.motherId=n.id,this.spawnAnimalInternal("fox",5.2,-3.2,!1,1,"M")}else t===4?(this.isNight=!1,this.waterLevel=82,this.spawnRockInternal(-7.4,-3.2,"large",!1),this.spawnRockInternal(7,-3.5,"medium",!1),[[-6.2,3.2],[6,3],[-4.5,-4.8],[4.5,-4.8]].forEach(([n,i],s)=>this.spawnPlantInternal(n,i,s%2===0?"flowers":"bush",.92)),this.spawnAnimalInternal("deer",-6.2,.8,!1,1,"F"),this.spawnAnimalInternal("stag",6.1,1.2,!1,1,"M"),this.spawnAnimalInternal("fox",-5.4,-3.6,!1,1,"F")):t===5&&(this.isNight=!1,this.waterLevel=30,this.spawnRockInternal(-6.6,-3,"large",!1),this.spawnRockInternal(5.8,3.6,"medium",!1),this.spawnPlantInternal(-4.4,3.6,"bush",.72),this.spawnPlantInternal(3.8,-4.2,"flowers",.72),this.spawnPlantInternal(-2.4,-4.8,"bush",.72),this.spawnAnimalInternal("deer",-4.8,-1.6,!1,1,"F"),this.spawnAnimalInternal("stag",4.6,1.6,!1,1,"M"),this.spawnAnimalInternal("deer",-3.6,2.8,!1,1,"F"),this.spawnAnimalInternal("fox",-5.8,-2.4,!1,1,"F"),this.spawnAnimalInternal("fox",5.1,3.1,!1,1,"M"),this.spawnAnimalInternal("fox",.6,-5.4,!1,.58,"F"),this.spawnAnimalInternal("wolf",-7.2,4.4,!1,1,"M"));this.updateTemperature()}updateTemperature(){if(this.isNight)this.temperatureC=this.questId===5?19:21;else{const t=this.waterLevel/100*7,e=this.questId===5?48:this.questId===3?28:40;this.temperatureC=Math.round(e-t)}}setNightMode(t){this.isNight=t,this.updateTemperature(),t?this.pushPopup(0,3.5,0,{ar:"🌙 ليل صحراوي بارد — نشطت الثعالب والمفترسات!",en:"🌙 Cool Arabian Night — Foxes & Predators Active!"},"#c4b5fd"):this.pushPopup(0,3.5,0,{ar:"☀️ شمس النهار الساطعة!",en:"☀️ Bright Desert Sunshine!"},"#fde047")}pourRainAt(t,e,n){const i=this.waterLevel;this.waterLevel=mt(this.waterLevel+n*28,0,100),this.updateTemperature();for(const s of this.plants)Math.hypot(s.x-t,s.z-e)<6.8&&(s.health=mt(s.health+n*.9,.2,1));if(this.autoSproutCooldown-=n,this.autoSproutCooldown<=0&&this.plants.length<15&&Math.hypot(t,e)>3.7&&!this.plants.some(a=>Math.hypot(a.x-t,a.z-e)<2)&&this.waterLevel>34&&(this.autoSproutCooldown=.9,this.spawnPlantInternal(t+(Math.random()-.5)*1.1,e+(Math.random()-.5)*1.1,Math.random()>.5?"flowers":"bush",.95),this.pushPopup(t,1.6,e,{ar:"🌱 نبتت شجيرة مزهرة!",en:"🌱 Flowering shrub sprouted!"},"#4ade80")),Math.floor(i/20)<Math.floor(this.waterLevel/20)){const s=Math.round(this.waterLevel);this.pushPopup(t,2.1,e,{ar:`💧 الماء ${s}%`,en:`💧 Water ${s}%`},"#38bdf8")}}userPlantShrub(t,e){if(this.plants.length>=24)return!1;let n=t,i=e;const s=Math.max(3.65,this.getWaterRadius()+.45);if(Math.hypot(n,i)<s){const o=Math.atan2(i,n);n=Math.cos(o)*s,i=Math.sin(o)*s}return this.spawnPlantInternal(n,i,Math.random()>.45?"flowers":"bush",1),this.pushPopup(n,1.5,i,{ar:"🌸 +شجيرة منتجة!",en:"🌸 +Producer Shrub!"},"#4ade80"),!0}userDropAnimal(t,e,n){if(this.animals.filter(c=>c.state!=="dead").length>=28)return!1;const a=this.animals.filter(c=>t==="deer"?Xe(c.kind):c.kind===t).length%2===0?"F":"M",o=t==="deer"?a==="M"&&Math.random()>.35?"stag":"deer":t,l=this.spawnAnimalInternal(o,e,n,!0,1,a);return o==="wolf"?(l.hunger=58,this.pendingSounds.push({kind:"howl"}),this.pushPopup(e,2.6,n,{ar:"🐺 عووو! ذئب عربي جاهز للصيد!",en:"🐺 Awooo! Arabian Wolf hunting!"},"#fb923c")):o==="fox"?(l.hunger=48,this.pushPopup(e,2.4,n,{ar:"🦊 ثعلب رمال رشيق!",en:"🦊 Nimble Sand Fox!"},"#fdba74")):this.pushPopup(e,2.6,n,{ar:"🦌 ياااهو! +غزال للقطيع",en:"🦌 Yahoo! +Gazelle to Herd"},"#fde047"),!0}userDropRock(t,e){if(this.rocks.length>=15)return!1;let n=t,i=e;if(Math.hypot(n,i)<3.9){const s=Math.atan2(i,n);n=Math.cos(s)*4.2,i=Math.sin(s)*4.2}return this.spawnRockInternal(n,i,Math.random()>.5?"large":"medium",!0),this.pushPopup(n,2,i,{ar:"🪨 +مأوى ظليل يحمي الفرائس ويرفع K!",en:"🪨 +Shaded Rock Shelter (+K)!"},"#cbd5e1"),!0}flipDecomposerLog(){return this.logFlipped?!1:(this.logFlipped=!0,this.pushPopup(-3.8,1.8,1.6,{ar:"🪵 بووينغ! ظهر قمل الخشب المحلّل!",en:"🪵 Boing! Woodlice Decomposers!"},"#facc15"),!0)}inspectCanopyNiche(){const t=!this.canopyInspected;return this.canopyInspected=!0,this.pushPopup(0,5.2,-1.8,{ar:"🦜 إطار القمة: يتغذى على الثمار وينشر البذور!",en:"🦜 Canopy Niche: Eats fruit & disperses seeds!"},"#38bdf8"),t}inspectShoreNiche(){const t=!this.shoreInspected;return this.shoreInspected=!0,this.pushPopup(2.8,2.1,1.2,{ar:"🦩 إطار الضفة: يصطاد الأسماك والقشريات!",en:"🦩 Shoreline Niche: Wades for fish & crustaceans!"},"#f472b6"),t}popParasiteTick(t,e,n,i){if(t<0||t>=this.tickAlive.length||!this.tickAlive[t])return 0;this.tickAlive[t]=!1;const s=this.tickAlive.filter(a=>!a).length;return this.pushPopup(e,n+.6,i,s===6?{ar:"🎉 شُفي المها بالكامل! 6/6",en:"🎉 Oryx Stag Cured! 6/6"}:{ar:`💥 فرقع القُراد! ${s}/6`,en:`💥 Tick Popped! ${s}/6`},s===6?"#4ade80":"#fb7185"),s}pollinateGiantFlower(t,e,n,i){if(t<0||t>=3||this.flowerPollinated[t])return!1;this.flowerPollinated[t]=!0,this.symbiosisMode="mutualism";const s=this.flowerPollinated.filter(Boolean).length;return this.pushPopup(e,n+.9,i,{ar:`🌺 تقايض ⁦(+/+)⁩! أزهرت ${s}/3`,en:`🌺 Mutualism (+/+)! Bloomed ${s}/3`},"#f472b6"),!0}buildCommensalNest(t,e,n){return this.commensalismBuilt?!1:(this.commensalismBuilt=!0,this.symbiosisMode="commensalism",this.pushPopup(t,e+.8,n,{ar:"🪺 تعايش ⁦(+/0)⁩! مأوى آمن بلا ضرر للشجرة!",en:"🪺 Commensalism (+/0)! Safe nest, unharmed tree!"},"#38bdf8"),!0)}spawnAnimalInternal(t,e,n,i,s=1,a){let o=mt(e,-10.5,10.5),l=mt(n,-9.5,9.5);const c=this.getWaterRadius()+.35,h=Math.hypot(o,l);if(h<c){const f=h>.01?Math.atan2(l,o):Math.random()*Math.PI*2;o=Math.cos(f)*c,l=Math.sin(f)*c}const u=a??(Math.random()>.5?"F":"M"),d={id:this.nextId++,kind:t,sex:u,maturity:s,motherId:null,x:o,y:i?5:0,z:l,vy:i?-1.5:0,vx:0,vz:0,rotY:Math.random()*Math.PI*2,scaleBounce:i?.38:s<.8?.4:1,state:i?"jump":"idle",stateTimer:.6+Math.random()*1.4,targetX:o,targetZ:l,hunger:28+Math.random()*24,thirst:24+Math.random()*24,energy:85,reproCooldown:7+Math.random()*8,preyTargetId:null,mateTargetId:null,plantTargetId:null,emote:null,deathTimer:0};return this.animals.push(d),d}spawnPlantInternal(t,e,n,i){this.plants.push({id:this.nextId++,variant:n,x:mt(t,-10.5,10.5),z:mt(e,-9.5,9.5),rotY:Math.random()*Math.PI*2,health:i,spawnScale:.05,seedTimer:8+Math.random()*10})}spawnRockInternal(t,e,n,i){this.rocks.push({id:this.nextId++,variant:n,x:mt(t,-11,11),z:mt(e,-10,10),y:i?4.5:0,vy:i?-2:0,rotY:Math.random()*Math.PI*2})}computeCarryingCapacityK(){const t=this.plants.reduce((s,a)=>s+a.health,0),e=this.waterLevel/100*3.8,n=t*.65,i=this.rocks.length*1.15;return Math.max(2,Math.round(e+n+i))}step(t){const e=Math.min(t,.05),n=this.getWaterRadius();for(const p of this.rocks)(p.y>0||p.vy!==0)&&(p.vy-=22*e,p.y+=p.vy*e,p.y<=0&&(p.y=0,p.vy=Math.abs(p.vy)>2.2?-p.vy*.28:0));for(let p=this.plants.length-1;p>=0;p--){const y=this.plants[p];if(y.spawnScale=Ce(y.spawnScale,1,Math.min(1,e*8)),this.waterLevel>38?y.health=mt(y.health+e*.032*(this.waterLevel/100),.04,1):this.waterLevel<18&&(y.health=mt(y.health-e*.012,.12,1)),y.health<=.06&&this.plants.length>2){this.plants.splice(p,1);continue}if(this.waterLevel>=52&&y.health>=.86&&this.plants.length<14&&(y.seedTimer-=e,y.seedTimer<=0)){y.seedTimer=18+Math.random()*12;const v=Math.random()*Math.PI*2,T=1.9+Math.random()*1.8,R=mt(y.x+Math.cos(v)*T,-9.8,9.8),M=mt(y.z+Math.sin(v)*T,-8.8,8.8);Math.hypot(R,M)>n+.5&&!this.plants.some(S=>Math.hypot(S.x-R,S.z-M)<1.65)&&this.spawnPlantInternal(R,M,Math.random()>.5?"flowers":"bush",.65)}}for(let p=this.animals.length-1;p>=0;p--){const y=this.animals[p];if(y.state==="dead"&&(y.deathTimer+=e,y.emote=null,y.deathTimer>=4.4)){for(const v of this.plants)Math.hypot(v.x-y.x,v.z-y.z)<4.5&&(v.health=mt(v.health+.35,.2,1));this.plants.length<14&&this.waterLevel>35&&Math.hypot(y.x,y.z)>n+.5&&this.spawnPlantInternal(y.x,y.z,"flowers",.8),this.pushPopup(y.x,1.2,y.z,{ar:"🌱 تحلّلت البقايا وخصّبت التربة!",en:"🌱 Nutrients recycled into soil!"},"#4ade80"),this.inspectedAnimalId===y.id&&(this.inspectedAnimalId=null),this.animals.splice(p,1)}}const i=this.animals.filter(p=>p.state!=="dead"),s=i.filter(p=>Xe(p.kind)),a=i.filter(p=>p.kind==="wolf"),o=i.filter(p=>p.kind==="fox"),l=this.computeCarryingCapacityK(),c=[];for(const p of i){if(p.scaleBounce=Ce(p.scaleBounce,1,Math.min(1,e*8)),p.y>0||p.vy!==0){p.vy-=19.5*e,p.y+=p.vy*e,p.y<=0&&(p.y=0,Math.abs(p.vy)>2.4?(p.vy=-p.vy*.35,p.scaleBounce=1.22):(p.vy=0,p.state="idle",p.stateTimer=.35));continue}if(p.maturity<1){const M=p.hunger<65&&this.waterLevel>25?.022:.008;p.maturity=Math.min(1,p.maturity+e*M)}const y=this.temperatureC>=40&&!this.isNight?1.45:.9,v=p.kind==="wolf"?3.8:p.kind==="fox"?3.1:2.9,T=(p.kind==="fox"?2.1:2.7)*y;if(p.state!=="feast"&&p.state!=="eat"&&(p.hunger=mt(p.hunger+e*v,0,100)),p.state!=="drink"&&(p.thirst=mt(p.thirst+e*T,0,100)),p.reproCooldown>0&&(p.reproCooldown=Math.max(0,p.reproCooldown-e)),p.kind==="fox"&&!this.isNight&&this.temperatureC>=41){const M=this.findNearestRock(p.x,p.z);M&&Math.hypot(M.x-p.x,M.z-p.z)>1.35?(p.state="walk",p.emote="💤",this.moveAnimalToward(p,M.x+.8,M.z+.6,2.3,e,n)):(p.state="sleep",p.emote="💤",p.energy=mt(p.energy+e*8,0,100));continue}if(Xe(p.kind)&&this.waterLevel<22){p.state="droop",p.emote="💧";continue}if(Xe(p.kind)){const M=a.find(S=>{const P=Math.hypot(S.x-p.x,S.z-p.z),O=S.state==="chase"||S.state==="stalk"||S.state==="attack";return P<(O?6.8:3.4)});if(M&&p.state!=="dead"){p.state!=="flee"&&(p.state="flee",p.stateTimer=1.6,p.preyTargetId=null,p.mateTargetId=null,p.plantTargetId=null),p.emote="😱";let S=Math.atan2(p.z-M.z,p.x-M.x);const P=this.findBestShelterRock(p.x,p.z,M.x,M.z);if(P){const W=Math.atan2(P.z-p.z,P.x-p.x);S=Ts(S,W,.42),Math.hypot(P.x-p.x,P.z-p.z)<1.35&&s.length<=l&&M.preyTargetId===p.id&&M.stateTimer<4.5&&(M.preyTargetId=null,M.state="idle",M.stateTimer=1.8,M.emote=null,this.pushPopup(p.x,1.9,p.z,{ar:"🪨 احتمى الغزال بالصخور ونجا!",en:"🪨 Gazelle sheltered in rocks & escaped!"},"#38bdf8"))}const O=mt(p.x+Math.cos(S)*4.5,-9.8,9.8),L=mt(p.z+Math.sin(S)*4.5,-8.8,8.8),k=p.maturity<.8?3.45:3.85;this.moveAnimalToward(p,O,L,k,e,n);continue}else p.state==="flee"&&(p.state="idle",p.stateTimer=.5,p.emote=null)}if(p.state==="attack"){p.stateTimer-=e,p.stateTimer<=0&&(p.state=p.kind==="wolf"?"feast":"idle",p.stateTimer=p.kind==="wolf"?3.7:1,p.emote=p.kind==="wolf"?"🥩":null);continue}if(p.state==="feast"){p.stateTimer-=e,p.emote="🥩",p.hunger=mt(p.hunger-e*26,0,100),p.energy=mt(p.energy+e*12,0,100),p.stateTimer<=0&&(p.state="idle",p.stateTimer=1.6,p.emote=null,p.preyTargetId=null);continue}if(p.state==="drink"){p.stateTimer-=e,p.emote="💧",p.thirst=mt(p.thirst-e*38,0,100),this.waterLevel=mt(this.waterLevel-e*.14,5,100),p.rotY=Ts(p.rotY,Math.atan2(-p.x,-p.z),e*8),(p.stateTimer<=0||p.thirst<=2)&&(p.state="idle",p.stateTimer=1,p.emote=null);continue}if(p.state==="eat"){p.stateTimer-=e,p.emote="🌿";const M=this.plants.find(S=>S.id===p.plantTargetId);M?(p.rotY=Ts(p.rotY,Math.atan2(M.x-p.x,M.z-p.z),e*8),M.health=mt(M.health-e*.095,.04,1),p.hunger=mt(p.hunger-e*24,0,100),p.energy=mt(p.energy+e*8,0,100)):p.stateTimer=0,(p.stateTimer<=0||p.hunger<=4)&&(p.state="idle",p.stateTimer=1.1,p.emote=null,p.plantTargetId=null);continue}if(p.state==="spar"){if(p.stateTimer-=e,p.emote="⚔️",p.stateTimer<=0){p.state="walk",p.stateTimer=1.2,p.emote=null;const M=p.rotY+Math.PI+(Math.random()-.5);p.targetX=mt(p.x+Math.cos(M)*2.5,-9.5,9.5),p.targetZ=mt(p.z+Math.sin(M)*2.5,-8.5,8.5)}continue}if(p.state==="mate"){const M=i.find(P=>P.id===p.mateTargetId&&P.state!=="dead");if(!M){p.state="idle",p.mateTargetId=null,p.emote=null;continue}if(p.emote="💕",Math.hypot(M.x-p.x,M.z-p.z)>1.15)this.moveAnimalToward(p,M.x,M.z,2.4,e,n);else if(p.rotY=Ts(p.rotY,Math.atan2(M.x-p.x,M.z-p.z),e*8),p.stateTimer-=e,p.stateTimer<=0){if(p.sex==="F"||p.id<M.id){const P=(p.x+M.x)*.5,O=(p.z+M.z)*.5,L=Xe(p.kind)?Math.random()>.65?"stag":"deer":p.kind;c.push({kind:L,x:P,z:O,motherId:p.sex==="F"?p.id:M.id})}p.reproCooldown=22+Math.random()*6,M.reproCooldown=22+Math.random()*6,p.state="jump",M.state="jump",p.stateTimer=.9,M.stateTimer=.9,p.mateTargetId=null,M.mateTargetId=null,p.emote=null,M.emote=null}continue}if(p.kind==="wolf"&&(p.state==="stalk"||p.state==="chase")){const M=s.find(P=>P.id===p.preyTargetId&&P.state!=="dead");if(p.stateTimer-=e,!M||p.stateTimer<=0){p.state="idle",p.stateTimer=1.4,p.preyTargetId=null,p.emote=null;continue}const S=Math.hypot(M.x-p.x,M.z-p.z);if(p.state==="stalk")p.emote="🎯",this.moveAnimalToward(p,M.x,M.z,2.25,e,n),(S<5.6||p.stateTimer<5.8)&&(p.state="chase",p.emote="🥩");else if(p.emote="🥩",this.moveAnimalToward(p,M.x,M.z,4.95,e,n),S<=1.18){this.totalHunts++,this.pendingSounds.push({kind:"pounce"}),p.rotY=Math.atan2(M.x-p.x,M.z-p.z),p.state="attack",p.stateTimer=.72,p.hunger=Math.max(0,p.hunger-35),M.state="dead",M.deathTimer=.01,M.emote=null,this.pushPopup(M.x,1.9,M.z,{ar:"🥩 الذئب اصطاد الغزال! (توازن الفرائس)",en:"🥩 Wolf caught Gazelle! (Prey Balance)"},"#fb7185");for(const P of i)P.id!==p.id&&(P.kind==="wolf"||P.kind==="fox")&&P.hunger>35&&Math.hypot(P.x-M.x,P.z-M.z)<8.5&&(P.state="gallop",P.targetX=M.x+(Math.random()-.5)*1.4,P.targetZ=M.z+(Math.random()-.5)*1.4,P.stateTimer=2,P.emote="🥩")}continue}p.stateTimer-=e;const R=p.state==="idle"&&p.stateTimer<.65&&(p.thirst>66&&this.waterLevel>15||p.hunger>64&&this.plants.some(M=>M.health>.12));if((p.stateTimer<=0||R)&&this.chooseLifelikeGoal(p,i,s,a,o,l,n),p.state==="walk"||p.state==="gallop")if(Math.hypot(p.targetX-p.x,p.targetZ-p.z)<.48)this.onReachedTarget(p,n);else{const S=p.state==="gallop"?p.kind==="wolf"?4.2:p.kind==="fox"?3.7:3.3:p.kind==="fox"?2.25:1.65;this.moveAnimalToward(p,p.targetX,p.targetZ,S,e,n)}}for(const p of c){if(this.animals.length>=30)break;const y=this.spawnAnimalInternal(p.kind,p.x,p.z,!1,.5,void 0);y.motherId=p.motherId,y.scaleBounce=.25,y.state="jump",y.stateTimer=1,this.totalBirths++,this.pendingSounds.push({kind:"birth"}),this.pendingHeartBursts.push({x:p.x,y:1.6,z:p.z});const v=p.kind==="wolf"?{ar:"💕 وُلد جرو ذئب عربي!",en:"💕 Baby Wolf Pup born!"}:p.kind==="fox"?{ar:"💕 وُلد جرو ثعلب رمال!",en:"💕 Baby Sand Fox Kit born!"}:{ar:"💕 وُلد خشف غزال صغير!",en:"💕 Baby Gazelle Fawn born!"};this.pushPopup(p.x,2.1,p.z,v,"#f472b6")}for(let p=0;p<i.length;p++){const y=i[p];if(!(y.y>.05||y.state==="mate"))for(let v=p+1;v<i.length;v++){const T=i[v];if(T.y>.05||T.state==="mate")continue;const R=T.x-y.x,M=T.z-y.z,S=Math.hypot(R,M),P=(y.maturity+T.maturity)*.46;if(S>.001&&S<P){const O=(P-S)*.35,L=R/S,k=M/S;y.x=mt(y.x-L*O,-10.8,10.8),y.z=mt(y.z-k*O,-9.8,9.8),T.x=mt(T.x+L*O,-10.8,10.8),T.z=mt(T.z+k*O,-9.8,9.8);const W=n+.18;for(const D of[y,T]){const j=Math.hypot(D.x,D.z);j<W&&j>.001&&(D.x=D.x/j*W,D.z=D.z/j*W)}}}}const h=this.animals.filter(p=>p.state!=="dead"&&Xe(p.kind));if(this.animals.filter(p=>p.state!=="dead"&&p.kind==="wolf").length>3&&h.length<=3){const p=this.animals.findIndex(y=>y.kind==="wolf"&&y.state!=="dead"&&y.hunger>=95);if(p>=0){const y=this.animals[p];this.pushPopup(y.x,1.8,y.z,{ar:"🐺 غادر ذئب بحثاً عن مرعى آخر!",en:"🐺 Starving Wolf dispersed!"},"#94a3b8"),this.inspectedAnimalId===y.id&&(this.inspectedAnimalId=null),this.animals.splice(p,1)}}if(h.length<2&&this.waterLevel>=30){if(this.reimmigrateTimer+=e,this.reimmigrateTimer>=5.5){this.reimmigrateTimer=0;const p=h.some(v=>v.sex==="F")?"M":"F",y=this.spawnAnimalInternal(p==="M"?"stag":"deer",-9.2,2.5,!1,1,p);y.state="gallop",y.targetX=-4.5,y.targetZ=2.2,this.pushPopup(-7.5,2,2.5,{ar:"🦌 وصل غزال مهاجر للواحة!",en:"🦌 Migrating Gazelle joined the oasis!"},"#fde047")}}else this.reimmigrateTimer=0;const d=this.animals.filter(p=>p.state!=="dead"&&Xe(p.kind)),f=this.animals.filter(p=>p.state!=="dead"&&(p.kind==="wolf"||p.kind==="fox")),g=this.animals.filter(p=>p.state!=="dead"&&p.kind==="wolf"),x=this.animals.filter(p=>p.state!=="dead"&&p.kind==="fox"),_=this.animals.filter(p=>p.state!=="dead"&&p.maturity<.85).length,m=this.evaluateObjectives(l,d.length,g.length,f.length);m.length>0&&m.every(p=>p.done)&&!this.completedQuests.has(this.questId)&&(this.completedQuests.add(this.questId),this.questJustWon=!0);let A=null;if(this.inspectedAnimalId!==null){const p=this.animals.find(y=>y.id===this.inspectedAnimalId&&y.state!=="dead");p?A={id:p.id,kind:p.kind,isBaby:p.maturity<.85,state:p.state,fullnessPct:Math.round(100-p.hunger),hydrationPct:Math.round(100-p.thirst),energyPct:Math.round(p.energy),x:p.x,z:p.z}:this.inspectedAnimalId=null}return{questId:this.questId,waterLevel:Math.round(this.waterLevel),temperatureC:this.temperatureC,isNight:this.isNight,herbivoreCount:d.length,babyCount:_,predatorCount:f.length,wolfCount:g.length,foxCount:x.length,plantCount:this.plants.length,healthyPlantCount:this.plants.filter(p=>p.health>=.55).length,rockCount:this.rocks.length,carryingCapacityK:l,isOverCapacity:d.length>l,totalBirths:this.totalBirths,totalHunts:this.totalHunts,logFlipped:this.logFlipped,canopyInspected:this.canopyInspected,shoreInspected:this.shoreInspected,symbiosisMode:this.symbiosisMode,ticksRemaining:this.tickAlive.filter(Boolean).length,mutualismPollinated:this.flowerPollinated.filter(Boolean).length,commensalismBuilt:this.commensalismBuilt,nocturnalFoxesActive:x.filter(p=>p.state!=="sleep").length,inspectedAnimal:A,objectives:m,questCompleted:this.completedQuests.has(this.questId)}}chooseLifelikeGoal(t,e,n,i,s,a,o){if(t.emote=null,t.plantTargetId=null,t.maturity<.82&&t.motherId!==null){const u=e.find(d=>d.id===t.motherId);if(u&&Math.hypot(u.x-t.x,u.z-t.z)>1.8){t.targetX=u.x+(Math.random()-.5)*1.1,t.targetZ=u.z+(Math.random()-.5)*1.1,t.state=Math.hypot(u.x-t.x,u.z-t.z)>3.8?"gallop":"walk",t.stateTimer=1.4;return}}if(t.thirst>=52&&this.waterLevel>12){const u=Math.atan2(t.z,t.x)+(Math.random()-.5)*.4,d=o+.36;t.targetX=Math.cos(u)*d,t.targetZ=Math.sin(u)*d,t.state=t.thirst>76?"gallop":"walk",t.emote="💧",t.stateTimer=3.2;return}if(t.kind==="wolf"){const u=n.length>a?34:48,d=n.length>2,f=this.animals.find(g=>g.state==="dead"&&Math.hypot(g.x-t.x,g.z-t.z)<7);if(f&&t.hunger>30){t.targetX=f.x+(Math.random()-.5)*.9,t.targetZ=f.z+(Math.random()-.5)*.9,t.state="gallop",t.emote="🥩",t.stateTimer=2.2;return}if(t.hunger>=u&&n.length>0&&d){let g=n[0],x=1/0;for(const _ of n){const m=Math.hypot(_.x-t.x,_.z-t.z);m<x&&(x=m,g=_)}t.preyTargetId=g.id,t.state="stalk",t.stateTimer=6.8,t.emote="🎯";return}if(!d&&t.hunger>=78&&this.plants.length>0){const g=this.plants[Math.floor(Math.random()*this.plants.length)];t.targetX=g.x+.7,t.targetZ=g.z+.7,t.state="gallop",t.hunger=mt(t.hunger-36,0,100),t.stateTimer=2;return}}if(t.kind==="fox"&&t.hunger>=44){const u=this.animals.find(d=>d.state==="dead"&&Math.hypot(d.x-t.x,d.z-t.z)<8);if(u){t.targetX=u.x+.6,t.targetZ=u.z+.6,t.state="gallop",t.emote="🥩",t.stateTimer=2;return}if(this.plants.length>0){const d=this.plants[Math.floor(Math.random()*this.plants.length)];t.plantTargetId=d.id,t.targetX=d.x+(Math.random()-.5)*.9,t.targetZ=d.z+(Math.random()-.5)*.9,t.state="gallop",t.stateTimer=2.2;return}}if(Xe(t.kind)&&t.hunger>=40&&this.plants.length>0){let u=null,d=1/0;for(const f of this.plants){if(f.health<.1)continue;const g=Math.hypot(f.x-t.x,f.z-t.z)-f.health*1.8;g<d&&(d=g,u=f)}if(u){if(n.length>a){const g=n.find(x=>x.id!==t.id&&x.maturity>=.85&&Math.hypot(x.x-t.x,x.z-t.z)<1.85&&x.state!=="spar");if(g&&Math.random()<.42){t.state="spar",g.state="spar",t.stateTimer=1.25,g.stateTimer=1.25,t.rotY=Math.atan2(g.x-t.x,g.z-t.z),g.rotY=Math.atan2(t.x-g.x,t.z-g.z),this.pushPopup(t.x,1.8,t.z,{ar:"⚔️ تنافس على الغذاء!",en:"⚔️ Competing for scarce shrubs!"},"#f59e0b");return}}t.plantTargetId=u.id;const f=Math.atan2(t.z-u.z,t.x-u.x);t.targetX=u.x+Math.cos(f)*.65,t.targetZ=u.z+Math.sin(f)*.65,t.state=t.hunger>72?"gallop":"walk",t.emote="🌿",t.stateTimer=3.2;return}}if(t.maturity>=.95&&t.reproCooldown<=0&&t.hunger<54&&t.thirst<60&&this.waterLevel>=28&&this.animals.length<26&&(Xe(t.kind)?n.length<Math.min(17,a+3):t.kind==="wolf"?i.length<Math.min(5,Math.max(2,Math.ceil(n.length/2.4))):s.length<5)){const d=e.find(f=>f.id!==t.id&&f.maturity>=.95&&f.reproCooldown<=0&&f.hunger<58&&f.thirst<65&&(f.state==="idle"||f.state==="walk")&&(Xe(t.kind)?Xe(f.kind):f.kind===t.kind)&&f.sex!==t.sex);if(d){t.state="mate",d.state="mate",t.mateTargetId=d.id,d.mateTargetId=t.id,t.stateTimer=1.9,d.stateTimer=1.9,t.emote="💕",d.emote="💕";return}}if(Xe(t.kind)&&n.length>1&&Math.random()<.65){const u=n[Math.floor(Math.random()*n.length)],d=Math.random()*Math.PI*2,f=1.4+Math.random()*2.2;if(t.targetX=mt(u.x+Math.cos(d)*f,-9.6,9.6),t.targetZ=mt(u.z+Math.sin(d)*f,-8.6,8.6),Math.hypot(t.targetX,t.targetZ)<o+.5){const g=Math.atan2(t.targetZ,t.targetX);t.targetX=Math.cos(g)*(o+.8),t.targetZ=Math.sin(g)*(o+.8)}t.state=Math.random()<.25?"idle":"walk",t.stateTimer=1.8+Math.random()*2.2;return}if(Math.random()<.28){t.state="idle",t.stateTimer=1.4+Math.random()*1.8;return}const l=Math.random()*Math.PI*2,h=(t.kind==="wolf"?Math.max(4.6,o+1):o+.65)+Math.random()*4.4;t.targetX=mt(Math.cos(l)*h,-9.8,9.8),t.targetZ=mt(Math.sin(l)*h,-8.8,8.8),t.state=t.kind==="fox"&&this.isNight?"gallop":"walk",t.stateTimer=2+Math.random()*2}onReachedTarget(t,e){const n=Math.hypot(t.x,t.z);if(t.thirst>=42&&Math.abs(n-(e+.36))<.75&&this.waterLevel>10){t.state="drink",t.stateTimer=2.3,t.emote="💧",this.pendingSounds.push({kind:"sip"});return}if(Xe(t.kind)&&t.plantTargetId!==null){const i=this.plants.find(s=>s.id===t.plantTargetId);if(i&&Math.hypot(i.x-t.x,i.z-t.z)<1.35){t.state="eat",t.stateTimer=2.5,t.emote="🌿";return}}if(t.kind==="fox"){if(this.animals.find(s=>s.state==="dead"&&Math.hypot(s.x-t.x,s.z-t.z)<1.5)){t.state="feast",t.stateTimer=2.4,t.emote="🥩";return}if(t.plantTargetId!==null){t.state="attack",t.stateTimer=.75,t.hunger=mt(t.hunger-34,0,100),t.plantTargetId=null;return}}if(t.kind==="wolf"&&this.animals.find(s=>s.state==="dead"&&Math.hypot(s.x-t.x,s.z-t.z)<1.6)){t.state="feast",t.stateTimer=3,t.emote="🥩";return}t.state="idle",t.emote=null,t.stateTimer=1.2+Math.random()*1.8}moveAnimalToward(t,e,n,i,s,a){let o=e-t.x,l=n-t.z;const c=Math.hypot(o,l);if(c<.001)return;let h=o/c,u=l/c;const d=t.x+h*i*s,f=t.z+u*i*s,g=Math.hypot(d,f),x=a+.18;if(g<x&&g>.01){const E=d/g,A=f/g,p=-A,y=E,v=h*p+u*y>=0?1:-1;h=p*v*.85+E*.35,u=y*v*.85+A*.35;const T=Math.hypot(h,u)||1;h/=T,u/=T}const _=Math.min(c,i*s);t.x=mt(t.x+h*_,-10.8,10.8),t.z=mt(t.z+u*_,-9.8,9.8);const m=Math.hypot(t.x,t.z);m<a+.15&&m>.001&&(t.x=t.x/m*(a+.18),t.z=t.z/m*(a+.18)),t.rotY=Ts(t.rotY,Math.atan2(h,u),Math.min(1,s*9))}findNearestRock(t,e){let n=null,i=1/0;for(const s of this.rocks){const a=Math.hypot(s.x-t,s.z-e);a<i&&(i=a,n=s)}return n}findBestShelterRock(t,e,n,i){let s=null,a=6.5;for(const o of this.rocks){const l=Math.hypot(o.x-t,o.z-e),c=Math.hypot(o.x-n,o.z-i);l<a&&c>l*.85&&(a=l,s=o)}return s}evaluateObjectives(t,e,n,i){const s=Oe[this.questId];if(this.questId===1){const o=Math.round(this.waterLevel),l=this.plants.length;return[{...s.objectives[0],current:o,target:75,done:o>=75,displayValue:`${Math.min(o,100)}% / 75%`},{...s.objectives[1],current:l,target:6,done:l>=6,displayValue:`${l} / 6`}]}if(this.questId===2){const o=n,l=this.rocks.length,c=e>=2&&e<=t&&o>=2;return[{...s.objectives[0],current:o,target:2,done:o>=2,displayValue:`${o} / 2`},{...s.objectives[1],current:l,target:4,done:l>=4,displayValue:`${l} / 4`},{...s.objectives[2],current:c?1:0,target:1,done:c,displayValue:`${e} ≤ K(${t})`}]}if(this.questId===3)return[{...s.objectives[0],current:this.logFlipped?1:0,target:1,done:this.logFlipped,displayValue:this.logFlipped?"✓":"0 / 1"},{...s.objectives[1],current:this.canopyInspected?1:0,target:1,done:this.canopyInspected,displayValue:this.canopyInspected?"✓":"0 / 1"},{...s.objectives[2],current:this.shoreInspected?1:0,target:1,done:this.shoreInspected,displayValue:this.shoreInspected?"✓":"0 / 1"}];if(this.questId===4){const o=this.tickAlive.filter(c=>!c).length,l=this.flowerPollinated.filter(Boolean).length;return[{...s.objectives[0],current:o,target:6,done:o>=6,displayValue:`${o} / 6`},{...s.objectives[1],current:l,target:3,done:l>=3,displayValue:`${l} / 3`},{...s.objectives[2],current:this.commensalismBuilt?1:0,target:1,done:this.commensalismBuilt,displayValue:this.commensalismBuilt?"✓":"0 / 1"}]}const a=Math.round(this.waterLevel);return[{...s.objectives[0],current:this.isNight?1:0,target:1,done:this.isNight,displayValue:this.isNight?"🌙 ✓":"☀️"},{...s.objectives[1],current:this.rocks.length,target:4,done:this.rocks.length>=4,displayValue:`${this.rocks.length} / 4`},{...s.objectives[2],current:a,target:60,done:a>=60,displayValue:`${a}% / 60%`}]}}function Ts(r,t,e){let n=t-r;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return r+n*Math.min(1,e)}function Pc(r,t){if(t===gu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===fo||t===ah){let e=r.getIndex();if(e===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===fo)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class W0 extends cs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new K0(e)}),this.register(function(e){return new $0(e)}),this.register(function(e){return new r_(e)}),this.register(function(e){return new a_(e)}),this.register(function(e){return new o_(e)}),this.register(function(e){return new Q0(e)}),this.register(function(e){return new J0(e)}),this.register(function(e){return new t_(e)}),this.register(function(e){return new e_(e)}),this.register(function(e){return new Y0(e)}),this.register(function(e){return new n_(e)}),this.register(function(e){return new Z0(e)}),this.register(function(e){return new s_(e)}),this.register(function(e){return new i_(e)}),this.register(function(e){return new X0(e)}),this.register(function(e){return new l_(e)}),this.register(function(e){return new c_(e)})}load(t,e,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Ls.extractUrlBase(t);a=Ls.resolveURL(c,this.path)}else a=Ls.extractUrlBase(t);this.manager.itemStart(t);const o=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new Lh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,a,function(h){e(h),s.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Nh){try{a[Vt.KHR_BINARY_GLTF]=new h_(t)}catch(u){i&&i(u);return}s=JSON.parse(a[Vt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new b_(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Vt.KHR_MATERIALS_UNLIT:a[u]=new j0;break;case Vt.KHR_DRACO_MESH_COMPRESSION:a[u]=new u_(s,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:a[u]=new d_;break;case Vt.KHR_MESH_QUANTIZATION:a[u]=new f_;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function q0(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class X0{constructor(t){this.parser=t,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const h=new gt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ke);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new jo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Xo(h),c.distance=u;break;case"spot":c=new S0(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,In(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(e.cache,o,l)})}}class j0{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return se}extendParams(t,e,n){const i=[];t.color=new gt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],ke),t.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,ye))}return Promise.all(i)}}class Y0{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class K0{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new dt(o,o)}return Promise.all(s)}}class $0{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Z0{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Q0{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new gt(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],ke)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,ye)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class J0{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class t_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new gt().setRGB(o[0],o[1],o[2],ke),Promise.all(s)}}class e_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class n_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new gt().setRGB(o[0],o[1],o[2],ke),a.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,ye)),Promise.all(s)}}class i_{constructor(t){this.parser=t,this.name=Vt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}}class s_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class r_{constructor(t){this.parser=t,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}}class a_{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const a=s.extensions[e],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class o_{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const a=s.extensions[e],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class l_{constructor(t){this.name=Vt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class c_{constructor(t){this.name=Vt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Je.TRIANGLES&&c.mode!==Je.TRIANGLE_STRIP&&c.mode!==Je.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const x=new Nt,_=new I,m=new Ye,E=new I(1,1,1),A=new a0(g.geometry,g.material,d);for(let p=0;p<d;p++)l.TRANSLATION&&_.fromBufferAttribute(l.TRANSLATION,p),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,p),l.SCALE&&E.fromBufferAttribute(l.SCALE,p),A.setMatrixAt(p,x.compose(_,m,E));for(const p in l)if(p==="_COLOR_0"){const y=l[p];A.instanceColor=new xo(y.array,y.itemSize,y.normalized)}else p!=="TRANSLATION"&&p!=="ROTATION"&&p!=="SCALE"&&g.geometry.setAttribute(p,l[p]);fe.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),f.push(A)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Nh="glTF",Es=12,Ic={JSON:1313821514,BIN:5130562};class h_{constructor(t){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Es),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Nh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Es,s=new DataView(t,Es);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Ic.JSON){const c=new Uint8Array(t,Es+a,o);this.content=n.decode(c)}else if(l===Ic.BIN){const c=Es+a;this.body=t.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class u_{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=To[h]||h.toLowerCase();o[u]=a[h]}for(const h in t.attributes){const u=To[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Xi[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const x=f.attributes[g],_=l[g];_!==void 0&&(x.normalized=_)}u(f)},o,c,ke,d)})})}}class d_{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class f_{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}}class Uh extends Hs{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[s+a];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,g=t*c,x=g-c,_=-2*f+3*d,m=f-d,E=1-_,A=m-d+u;for(let p=0;p!==o;p++){const y=a[x+p+o],v=a[x+p+l]*h,T=a[g+p+o],R=a[g+p]*h;s[p]=E*y+A*v+_*T+m*R}return s}}const p_=new Ye;class m_ extends Uh{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return p_.fromArray(s).normalize().toArray(s),s}}const Je={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Xi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lc={9728:ze,9729:je,9984:Kc,9985:br,9986:ws,9987:Ln},Dc={33071:Kn,33648:Pr,10497:Jn},ba={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},To={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},g_={CUBICSPLINE:void 0,LINEAR:Us,STEP:Ns},Ta={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function __(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Re({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),r.DefaultMaterial}function li(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function In(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function v_(r,t,e){let n=!1,i=!1,s=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function x_(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function y_(r){let t;const e=r.extensions&&r.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Ea(e.attributes):t=r.indices+":"+Ea(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+Ea(r.targets[n]);return t}function Ea(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function Eo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function M_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const S_=new Nt;class b_{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new q0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Dh(this.options.manager):this.textureLoader=new w0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Lh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return li(s,o,i),In(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const a=e[i].joints;for(let o=0,l=a.length;o<l;o++)t[a[o]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Ls.resolveURL(e.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const a=ba[i.type],o=Xi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new ve(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=ba[i.type],c=Xi[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,_;if(f&&f!==u){const m=Math.floor(d/f),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let A=e.cache.get(E);A||(x=new c(o,m*f,i.count*f/h),A=new bh(x,f/h),e.cache.add(E,A)),_=new Os(A,l,d%f/h,g)}else o===null?x=new c(i.count*l):x=new c(o,d,i.count*l),_=new ve(x,l,g);if(i.sparse!==void 0){const m=ba.SCALAR,E=Xi[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,p=i.sparse.values.byteOffset||0,y=new E(a[1],A,i.sparse.count*m),v=new c(a[2],p,i.sparse.count*l);o!==null&&(_=new ve(_.array.slice(),_.itemSize,_.normalized)),_.normalized=!1;for(let T=0,R=y.length;T<R;T++){const M=y[T];if(_.setX(M,v[T*l]),l>=2&&_.setY(M,v[T*l+1]),l>=3&&_.setZ(M,v[T*l+2]),l>=4&&_.setW(M,v[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}_.normalized=g}return _})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,a=e.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,n){const i=this,s=this.json,a=s.textures[t],o=s.images[e],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Lc[d.magFilter]||je,h.minFilter=Lc[d.minFilter]||Ln,h.wrapS=Dc[d.wrapS]||Jn,h.wrapT=Dc[d.wrapT]||Jn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ze&&h.minFilter!==je,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const a=i.images[t],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(x){const _=new Te(x);_.needsUpdate=!0,d(_)}),e.load(Ls.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),In(u,a),u.userData.mimeType=a.mimeType||M_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Vt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ks,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new zs,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Re}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let a;const o={},l=s.extensions||{},c=[];if(l[Vt.KHR_MATERIALS_UNLIT]){const u=i[Vt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,e))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new gt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],ke),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",u.baseColorTexture,ye)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=_e);const h=s.alphaMode||Ta.OPAQUE;if(h===Ta.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ta.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==se&&(c.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new dt(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==se&&(c.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==se){const u=s.emissiveFactor;o.emissive=new gt().setRGB(u[0],u[1],u[2],ke)}return s.emissiveTexture!==void 0&&a!==se&&c.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,ye)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),In(u,s),e.associations.set(u,{materials:t}),s.extensions&&li(i,u,s),u})}createUniqueName(t){const e=Jt.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(l){return Nc(l,o,e)})}const a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o],h=y_(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Vt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Nc(new pe,c,e),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?__(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const x=h[f],_=a[f];let m;const E=c[f];if(_.mode===Je.TRIANGLES||_.mode===Je.TRIANGLE_STRIP||_.mode===Je.TRIANGLE_FAN||_.mode===void 0)m=s.isSkinnedMesh===!0?new i0(x,E):new st(x,E),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),_.mode===Je.TRIANGLE_STRIP?m.geometry=Pc(m.geometry,ah):_.mode===Je.TRIANGLE_FAN&&(m.geometry=Pc(m.geometry,fo));else if(_.mode===Je.LINES)m=new Ah(x,E);else if(_.mode===Je.LINE_STRIP)m=new Vs(x,E);else if(_.mode===Je.LINE_LOOP)m=new o0(x,E);else if(_.mode===Je.POINTS)m=new Fr(x,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(m.geometry.morphAttributes).length>0&&x_(m,s),m.name=e.createUniqueName(s.name||"mesh_"+t),In(m,s),_.extensions&&li(i,m,_),e.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&li(i,u[0],s),u[0];const d=new ne;s.extensions&&li(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Be(Dr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new zr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),In(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Nt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Ho(o,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],x=f.target,_=x.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,E=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",_)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",E)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],x=u[3],_=u[4],m=[];for(let E=0,A=d.length;E<A;E++){const p=d[E],y=f[E],v=g[E],T=x[E],R=_[E];if(p===void 0)continue;p.updateMatrix&&p.updateMatrix();const M=n._createAnimationTracks(p,y,v,T,R);if(M)for(let S=0;S<M.length;S++)m.push(M[S])}return new So(s,void 0,m)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,S_)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Eh:c.length>1?h=new ne:c.length===1?h=c[0]:h=new fe,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),In(h,s),s.extensions&&li(n,h,s),s.matrix!==void 0){const u=new Nt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new ne;n.name&&(s.name=i.createUniqueName(n.name)),In(s,n),n.extensions&&li(e,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof sn||d instanceof Te)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const a=[],o=t.name?t.name:t.uuid,l=[];Xn[s.path]===Xn.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Xn[s.path]){case Xn.weights:c=ts;break;case Xn.rotation:c=es;break;case Xn.position:case Xn.scale:c=ns;break;default:switch(n.itemSize){case 1:c=ts;break;case 2:case 3:default:c=ns;break}break}const h=i.interpolation!==void 0?g_[i.interpolation]:Us,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Xn[s.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Eo(e.constructor),i=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof es?m_:Uh;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function T_(r,t,e){const n=t.attributes,i=new rn;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=Eo(Xi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const o=new I,l=new I;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=Eo(Xi[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new vn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Nc(r,t,e){const n=t.attributes,i=[];function s(a,o){return e.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=To[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(t.indices!==void 0&&!r.index){const a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});i.push(a)}return Ht.workingColorSpace!==ke&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ht.workingColorSpace}" not supported.`),In(r,t),T_(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?v_(r,t.targets,e):r})}function Uc(r){const t=new Map,e=new Map,n=r.clone();return Fh(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=t.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return e.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Fh(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)Fh(r.children[n],t.children[n],e)}const Fc=new Set(["Wave","ThumbsUp","Jump","Yes","No","Punch"]);function Rs(r,t=!1,e=8){r.traverse(n=>{const i=n;if(!i.isMesh)return;i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1;const a=(Array.isArray(i.material)?i.material:[i.material]).map(o=>{if(!o)return o;const l=o.clone();if("map"in l&&l.map&&(l.map.anisotropy=e,l.map.colorSpace=ye),t)l.metalness!==void 0&&(l.metalness=Math.min(.28,Math.max(.12,l.metalness))),l.roughness!==void 0&&(l.roughness=.36);else{l.metalness!==void 0&&(l.metalness=.02),l.roughness!==void 0&&(l.roughness=Math.max(.68,l.roughness));const c=(l.name||"").toLowerCase();(c.includes("leaf")||c.includes("leaves")||c.includes("flower"))&&(l.side=_e,l.map&&(l.alphaTest=.35,l.transparent=!1,l.depthWrite=!0))}return l.needsUpdate=!0,l});i.material=Array.isArray(i.material)?a:a[0]})}function Rn(r,t,e){const n=r.clone(!0);Rs(n,!1,e),n.updateMatrixWorld(!0);const i=new rn().setFromObject(n,!0),s=new I,a=new I;i.getSize(s),i.getCenter(a);const o=Math.max(s.y,.001),l=t/o,c=new ne;c.add(n),n.position.set(-a.x,-i.min.y,-a.z),c.scale.setScalar(l);const h=new ne;return h.add(c),h}class E_{constructor(){N(this,"loader",new W0);N(this,"skinned",new Map);N(this,"birds",new Map);N(this,"props",new Map);N(this,"maxAnisotropy",8)}async loadAll(t,e){this.maxAnisotropy=Math.min(16,t.capabilities.getMaxAnisotropy()||8);const n=[{key:"robot",url:"./models/RobotExpressive.glb",handler:a=>this.calibrateSkinned("robot",a,2.15,!0)},{key:"deer",url:"./models/Deer.glb",handler:a=>this.calibrateSkinned("deer",a,1.48,!1)},{key:"stag",url:"./models/Stag.glb",handler:a=>this.calibrateSkinned("stag",a,1.82,!1)},{key:"wolf",url:"./models/Wolf.glb",handler:a=>this.calibrateSkinned("wolf",a,1.12,!1)},{key:"fox",url:"./models/Fox.glb",handler:a=>this.calibrateSkinned("fox",a,.82,!1)},{key:"parrot",url:"./models/Parrot.glb",handler:a=>this.calibrateBird("parrot",a,.92)},{key:"flamingo",url:"./models/Flamingo.glb",handler:a=>this.calibrateBird("flamingo",a,1.45)},{key:"stork",url:"./models/Stork.glb",handler:a=>this.calibrateBird("stork",a,1.55)},{key:"palms",url:"./models/PalmTrees.glb",handler:a=>{const o=a.scene.children[0]||a.scene,l=o.children.length>0?o.children:[a.scene],c=[5.4,4.4,5.9,5.1,4.7];for(let h=0;h<5;h++){const u=l[h%l.length].clone(!0);u.position.set(0,0,0);const d=`palm${h}`;this.props.set(d,Rn(u,c[h],this.maxAnisotropy))}}},{key:"twistedTree",url:"./models/TwistedTree.glb",handler:a=>this.props.set("twistedTree",Rn(a.scene,6.4,this.maxAnisotropy))},{key:"flowerBush",url:"./models/FlowerBush.glb",handler:a=>this.props.set("flowerBush",Rn(a.scene,1.05,this.maxAnisotropy))},{key:"flowerGroup",url:"./models/FlowerGroup.glb",handler:a=>this.props.set("flowerGroup",Rn(a.scene,.9,this.maxAnisotropy))},{key:"cactus",url:"./models/Cactus.glb",handler:a=>this.props.set("cactus",Rn(a.scene,1.25,this.maxAnisotropy))},{key:"rockMedium",url:"./models/RockMedium.glb",handler:a=>this.props.set("rockMedium",Rn(a.scene,1.28,this.maxAnisotropy))},{key:"rockLarge",url:"./models/RockLarge.glb",handler:a=>this.props.set("rockLarge",Rn(a.scene,1.75,this.maxAnisotropy))},{key:"woodLog",url:"./models/WoodLog.glb",handler:a=>this.props.set("woodLog",Rn(a.scene,.72,this.maxAnisotropy))},{key:"fish",url:"./models/Fish.glb",handler:a=>this.props.set("fish",Rn(a.scene,.42,this.maxAnisotropy))}];let i=0;const s=n.length;e==null||e(0,s),await Promise.all(n.map(async a=>{try{const o=await this.loader.loadAsync(a.url);a.handler(o)}catch(o){console.warn(`[AssetVault] Fallback for ${a.key}:`,o);const l=new ne;l.add(new st(new Qt(.5,16,16),new Re({color:2278750,roughness:.7}))),this.props.set(a.key,l)}finally{i++,e==null||e(i,s)}}))}calibrateSkinned(t,e,n,i){Rs(e.scene,i,this.maxAnisotropy);const s=Uc(e.scene),a=new Sa(s),o=e.animations.find(g=>g.name==="Idle"||g.name==="Standing")||e.animations[0];o&&(a.clipAction(o).play(),a.update(.01)),s.updateMatrixWorld(!0);const l=new rn().setFromObject(s,!0),c=new I,h=new I;l.getSize(c),l.getCenter(h);const u=c.y>.01&&Number.isFinite(c.y)?c.y:2.5,d=n/u,f=new I(-h.x*d,-l.min.y*d,-h.z*d);this.skinned.set(t,{gltf:e,uniformScale:d,offset:f})}calibrateBird(t,e,n){Rs(e.scene,!1,this.maxAnisotropy),e.scene.updateMatrixWorld(!0);const i=new rn().setFromObject(e.scene,!0),s=new I,a=new I;i.getSize(s),i.getCenter(a);const o=Math.max(s.x,s.y,s.z,.01),l=n/o,c=new I(-a.x*l,-i.min.y*l,-a.z*l);this.birds.set(t,{gltf:e,uniformScale:l,offset:c})}spawnSkinned(t,e=1){const n=this.skinned.get(t),i=Uc(n.gltf.scene);Rs(i,t==="robot",this.maxAnisotropy);const s=n.uniformScale*e;i.scale.multiplyScalar(s),i.position.copy(n.offset).multiplyScalar(e);const a=new ne;a.add(i);const o=new Sa(i),l=new Map;for(const f of n.gltf.animations){const g=f.name.includes("|")?f.name.split("|")[1]:f.name;if(!l.has(g)){const x=o.clipAction(f);t==="robot"&&Fc.has(g)&&(x.setLoop(uo,1),x.clampWhenFinished=!0),l.set(g,x)}}let c=-10,h=0;const u=o.update.bind(o);o.update=f=>{const g=Math.max(0,Math.min(f,.05));return h+=g,u(g)};const d={root:a,inner:i,mixer:o,actions:l,currentClip:"",play:(f,g=!1,x=1)=>{const _=f.toLowerCase();let m=f,E=l.get(f);if(!E){for(const[y,v]of l.entries())if(y.toLowerCase()===_||_.includes("headlow")&&y.toLowerCase().includes("headlow")){E=v,m=y;break}}if(!E)if(l.has("Idle"))E=l.get("Idle"),m="Idle";else{const y=l.entries().next().value;y&&(m=y[0],E=y[1])}if(!E)return;if(d.currentClip===m&&(t!=="robot"||!g)){E.setEffectiveTimeScale(x);return}if(!(g||m==="Death"||m.startsWith("Attack")||m==="Gallop"||m==="Walk")&&h-c<.45&&d.currentClip!=="")return;c=h;const p=l.get(d.currentClip);d.currentClip=m,g||t==="robot"&&Fc.has(m)?(E.setLoop(uo,1),E.clampWhenFinished=!0):(E.setLoop(rh,1/0),E.clampWhenFinished=!1);for(const[,y]of l.entries())y!==E&&y!==p&&(y.stopFading(),y.stop());E.stopFading(),E.enabled=!0,E.reset(),E.setEffectiveTimeScale(x),E.setEffectiveWeight(1),E.play(),p&&p!==E&&p.isRunning()&&(p.stopFading(),p.setEffectiveWeight(1),p.crossFadeTo(E,.24,!1))}};return o.addEventListener("finished",()=>{d.currentClip!=="Idle"&&d.currentClip.toLowerCase()!=="death"&&d.play("Idle",!1,1)}),d.play("Idle",!1,.9+Math.random()*.2),d}spawnBird(t,e=1){const n=this.birds.get(t),i=n.gltf.scene.clone(!0);Rs(i,!1,this.maxAnisotropy);const s=n.uniformScale*e;i.scale.multiplyScalar(s),i.position.copy(n.offset).multiplyScalar(e);const a=new ne;a.add(i);const o=new Sa(i),l=new Map,c=n.gltf.animations[0];if(c){const h=o.clipAction(c);h.timeScale=t==="parrot"?1.08:t==="flamingo"?.88:.84,h.play(),o.update(Math.random()*1.5),l.set("Fly",h)}return{root:a,inner:i,mixer:o,actions:l,currentClip:"Fly",play:()=>{}}}spawnProp(t,e=1){const i=this.props.get(t).clone(!0);return e!==1&&i.scale.multiplyScalar(e),i}}const Bc={type:"change"},$o={type:"start"},Bh={type:"end"},Sr=new ss,Oc=new jn,w_=Math.cos(70*Dr.DEG2RAD),be=new I,He=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wa=1e-6;class A_ extends V0{constructor(t,e=null){super(t,e),this.state=re.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Oi.ROTATE,TWO:Oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Ye,this._lastTargetPosition=new I,this._quat=new Ye().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ac,this._sphericalDelta=new Ac,this._scale=1,this._panOffset=new I,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new I,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=R_.bind(this),this._onPointerDown=C_.bind(this),this._onPointerUp=P_.bind(this),this._onContextMenu=B_.bind(this),this._onMouseWheel=D_.bind(this),this._onKeyDown=N_.bind(this),this._onTouchStart=U_.bind(this),this._onTouchMove=F_.bind(this),this._onMouseDown=I_.bind(this),this._onMouseMove=L_.bind(this),this._interceptControlDown=O_.bind(this),this._interceptControlUp=z_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bc),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=He:n>Math.PI&&(n-=He),i<-Math.PI?i+=He:i>Math.PI&&(i-=He),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=be.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Sr.origin.copy(this.object.position),Sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sr.direction))<w_?this.object.lookAt(this.target):(Oc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sr.intersectPlane(Oc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>wa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wa||this._lastTargetPosition.distanceToSquared(this.target)>wa?(this.dispatchEvent(Bc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?He/60*this.autoRotateSpeed*t:He/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;be.copy(i).sub(this.target);let s=be.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(He*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-He*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(He*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-He*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function C_(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function R_(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function P_(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bh),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function I_(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=re.DOLLY;break;case Hi.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=re.ROTATE}break;case Hi.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent($o)}function L_(r){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function D_(r){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(r.preventDefault(),this.dispatchEvent($o),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Bh))}function N_(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function U_(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=re.TOUCH_ROTATE;break;case Oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=re.TOUCH_DOLLY_PAN;break;case Oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent($o)}function F_(r){switch(this._trackPointer(r),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=re.NONE}}function B_(r){this.enabled!==!1&&r.preventDefault()}function O_(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function z_(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class k_ extends _o{constructor(){super();const t=new rs;t.deleteAttribute("uv");const e=new Re({side:Ie}),n=new Re,i=new Xo(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new st(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new st(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new st(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new st(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new st(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new st(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new st(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new st(t,Fi(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new st(t,Fi(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new st(t,Fi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new st(t,Fi(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const _=new st(t,Fi(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);const m=new st(t,Fi(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Fi(r){const t=new se;return t.color.setScalar(r),t}const Oh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class hs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const V_=new zr(-1,1,1,-1,0,1);class H_ extends pe{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}}const G_=new H_;class Zo{constructor(t){this._mesh=new st(G_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,V_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class W_ extends hs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Bs.clone(t.uniforms),this.material=new Se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Zo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zc extends hs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class q_ extends hs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class X_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new dt);this._width=n.width,this._height=n.height,e=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_n}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new W_(Oh),this.copyPass.material.blending=Nn,this.clock=new A0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}zc!==void 0&&(a instanceof zc?n=!0:a instanceof q_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const j_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Y_ extends hs{constructor(){super();const t=j_;this.uniforms=Bs.clone(t.uniforms),this.material=new l0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Zo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ht.getTransfer(this._outputColorSpace)===ee&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Co?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class K_ extends hs{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new gt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const $_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new gt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class is extends hs{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new dt(t.x,t.y):new dt(256,256),this.clearColor=new gt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(s,a,{type:_n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new nn(s,a,{type:_n});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new nn(s,a,{type:_n});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=$_;this.highPassUniforms=Bs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new dt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Oh;this.copyUniforms=Bs.clone(h.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Zn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new gt,this.oldClearAlpha=1,this.basic=new se,this.fsQuad=new Zo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new dt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=is.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=is.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Se({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new dt(.5,.5)},direction:{value:new dt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}is.BlurDirectionX=new dt(1,0);is.BlurDirectionY=new dt(0,1);const kc=[[[[36.902,25.383],[36.875,25.383],[36.805,25.451],[36.764,25.501],[36.722,25.534],[36.53,25.602],[36.504,25.645],[36.534,25.689],[36.554,25.645],[36.589,25.62],[36.748,25.559],[36.924,25.426],[36.955,25.415],[36.902,25.383]]],[[[41.988,16.716],[42.065,16.71],[42.033,16.742],[42.026,16.758],[42.06,16.804],[42.17,16.709],[42.167,16.596],[42.158,16.571],[42.128,16.595],[42.108,16.618],[42.102,16.644],[42.072,16.671],[41.964,16.653],[41.897,16.684],[41.802,16.779],[41.776,16.847],[41.816,16.86],[41.858,16.893],[41.885,16.947],[41.86,17.003],[41.917,16.994],[41.948,16.936],[41.954,16.806],[41.962,16.779],[41.947,16.749],[41.988,16.716]]],[[[51.978,18.996],[51.743,18.965],[51.515,18.934],[51.258,18.899],[50.95,18.858],[50.708,18.825],[50.355,18.778],[50.039,18.735],[49.742,18.695],[49.445,18.655],[49.192,18.621],[49.042,18.582],[48.865,18.495],[48.593,18.362],[48.316,18.227],[48.172,18.157],[48.022,17.977],[47.946,17.886],[47.808,17.721],[47.704,17.597],[47.58,17.448],[47.525,17.316],[47.442,17.112],[47.37,17.06],[47.251,16.994],[47.144,16.947],[46.976,16.953],[46.88,17.079],[46.779,17.212],[46.728,17.266],[46.682,17.269],[46.513,17.252],[46.31,17.231],[46.071,17.253],[45.794,17.278],[45.535,17.302],[45.407,17.32],[45.237,17.406],[45.193,17.423],[45.148,17.427],[44.946,17.43],[44.747,17.432],[44.546,17.404],[44.355,17.414],[44.156,17.399],[44.086,17.366],[44.008,17.367],[43.96,17.338],[43.917,17.325],[43.866,17.35],[43.804,17.344],[43.713,17.366],[43.653,17.422],[43.597,17.471],[43.539,17.499],[43.474,17.516],[43.418,17.516],[43.346,17.486],[43.302,17.457],[43.191,17.359],[43.186,17.325],[43.237,17.266],[43.221,17.239],[43.156,17.205],[43.136,17.113],[43.126,17.062],[43.117,16.942],[43.146,16.847],[43.184,16.812],[43.186,16.771],[43.165,16.689],[43.105,16.664],[43.061,16.587],[43.034,16.55],[42.986,16.509],[42.799,16.372],[42.79,16.452],[42.731,16.57],[42.726,16.653],[42.699,16.737],[42.647,16.801],[42.553,16.868],[42.544,16.96],[42.475,17.05],[42.383,17.122],[42.332,17.257],[42.294,17.435],[42.052,17.669],[41.75,17.886],[41.658,18.008],[41.508,18.256],[41.432,18.452],[41.229,18.678],[41.221,18.765],[41.191,18.871],[41.144,18.989],[41.116,19.082],[40.913,19.49],[40.848,19.555],[40.792,19.646],[40.777,19.717],[40.759,19.755],[40.616,19.822],[40.482,19.993],[40.081,20.266],[39.884,20.293],[39.728,20.39],[39.614,20.518],[39.491,20.737],[39.276,20.974],[39.094,21.31],[39.151,21.433],[39.147,21.519],[39.091,21.664],[39.03,21.776],[38.988,21.882],[39.021,22.033],[39.034,22.203],[39.07,22.294],[39.096,22.393],[39.062,22.592],[39.001,22.699],[39.007,22.77],[38.939,22.805],[38.883,22.882],[38.941,22.882],[38.836,22.989],[38.797,23.049],[38.757,23.194],[38.706,23.306],[38.542,23.558],[38.464,23.712],[38.289,23.911],[38.099,24.058],[37.978,24.125],[37.92,24.185],[37.821,24.188],[37.713,24.274],[37.638,24.278],[37.543,24.292],[37.431,24.459],[37.338,24.616],[37.181,24.82],[37.22,24.873],[37.266,24.96],[37.243,25.073],[37.218,25.151],[37.149,25.291],[36.921,25.641],[36.86,25.692],[36.763,25.751],[36.703,25.903],[36.675,26.039],[36.519,26.105],[36.25,26.595],[36.094,26.766],[36.032,26.881],[35.852,27.07],[35.763,27.259],[35.581,27.432],[35.424,27.734],[35.18,28.035],[35.078,28.087],[34.828,28.109],[34.722,28.131],[34.625,28.065],[34.616,28.148],[34.683,28.264],[34.78,28.507],[34.799,28.721],[34.951,29.354],[35.164,29.321],[35.339,29.294],[35.595,29.255],[35.86,29.214],[36.015,29.19],[36.068,29.201],[36.283,29.355],[36.476,29.495],[36.592,29.666],[36.704,29.832],[36.755,29.866],[36.927,29.897],[37.199,29.946],[37.469,29.995],[37.491,30.012],[37.554,30.145],[37.634,30.313],[37.65,30.331],[37.67,30.348],[37.863,30.443],[37.98,30.5],[37.813,30.669],[37.655,30.829],[37.479,31.008],[37.329,31.147],[37.105,31.355],[36.959,31.492],[37.216,31.556],[37.493,31.626],[37.774,31.696],[38.111,31.781],[38.375,31.847],[38.77,31.946],[38.962,31.995],[38.997,32.007],[39.145,32.125],[39.369,32.092],[39.704,32.043],[40.028,31.995],[40.369,31.939],[40.479,31.893],[40.808,31.725],[41.022,31.616],[41.272,31.489],[41.585,31.33],[41.8,31.22],[42.074,31.08],[42.289,30.92],[42.56,30.718],[42.858,30.495],[43.103,30.322],[43.441,30.084],[43.774,29.849],[44.1,29.619],[44.361,29.435],[44.691,29.202],[44.717,29.194],[45.05,29.167],[45.499,29.132],[45.95,29.096],[46.356,29.064],[46.531,29.096],[46.725,29.075],[46.982,29.046],[47.139,29.026],[47.433,28.99],[47.521,28.838],[47.553,28.732],[47.583,28.628],[47.671,28.533],[47.872,28.535],[48.05,28.538],[48.269,28.541],[48.442,28.543],[48.499,28.449],[48.523,28.355],[48.626,28.133],[48.774,27.959],[48.809,27.896],[48.833,27.801],[48.807,27.765],[48.797,27.724],[48.906,27.629],[49.087,27.549],[49.158,27.528],[49.237,27.493],[49.175,27.438],[49.282,27.31],[49.405,27.181],[49.538,27.152],[49.717,26.956],[49.986,26.829],[50.15,26.663],[50.135,26.66],[50.087,26.676],[50.026,26.699],[50.008,26.679],[50.011,26.609],[50.027,26.527],[50.111,26.456],[50.185,26.405],[50.214,26.308],[50.155,26.101],[50.135,26.101],[50.096,26.119],[50.054,26.123],[50.032,26.111],[50.081,25.961],[50.13,25.847],[50.19,25.756],[50.239,25.623],[50.281,25.566],[50.455,25.425],[50.508,25.307],[50.558,25.087],[50.667,24.964],[50.726,24.869],[50.804,24.789],[50.856,24.68],[50.928,24.595],[50.966,24.574],[51.023,24.565],[51.093,24.565],[51.178,24.587],[51.268,24.607],[51.338,24.564],[51.411,24.571],[51.418,24.531],[51.37,24.477],[51.31,24.34],[51.395,24.319],[51.477,24.308],[51.535,24.286],[51.568,24.286],[51.568,24.258],[51.572,24.128],[51.593,24.079],[51.629,24.035],[51.684,23.97],[51.739,23.904],[51.794,23.838],[51.849,23.773],[51.904,23.708],[51.959,23.642],[52.014,23.576],[52.069,23.511],[52.125,23.445],[52.179,23.38],[52.235,23.314],[52.29,23.249],[52.345,23.183],[52.4,23.118],[52.455,23.052],[52.51,22.987],[52.555,22.933],[52.639,22.923],[52.666,22.919],[52.742,22.91],[52.859,22.896],[53.012,22.877],[53.192,22.855],[53.394,22.83],[53.61,22.804],[53.832,22.777],[54.055,22.75],[54.27,22.723],[54.472,22.699],[54.652,22.677],[54.805,22.658],[54.922,22.644],[54.998,22.634],[55.025,22.631],[55.104,22.621],[55.119,22.624],[55.186,22.704],[55.259,22.591],[55.32,22.497],[55.404,22.368],[55.493,22.231],[55.578,22.1],[55.641,22.002],[55.607,21.9],[55.571,21.79],[55.534,21.679],[55.498,21.568],[55.461,21.458],[55.424,21.347],[55.388,21.236],[55.351,21.126],[55.314,21.015],[55.278,20.904],[55.241,20.793],[55.205,20.683],[55.168,20.572],[55.131,20.461],[55.095,20.351],[55.058,20.24],[55.021,20.129],[54.977,19.996],[54.871,19.96],[54.699,19.903],[54.527,19.846],[54.355,19.788],[54.183,19.731],[54.011,19.674],[53.839,19.617],[53.667,19.559],[53.495,19.502],[53.323,19.444],[53.151,19.387],[52.979,19.33],[52.807,19.272],[52.635,19.215],[52.463,19.158],[52.291,19.1],[52.119,19.043],[51.978,18.996]]],[[[36.596,25.713],[36.586,25.699],[36.544,25.734],[36.546,25.812],[36.583,25.856],[36.58,25.795],[36.596,25.735],[36.596,25.713]]]],Bi=10;function fi(r,t,e=Bi){const n=Dr.degToRad(t+180),i=Dr.degToRad(90-r);return new I(-e*Math.cos(n)*Math.sin(i),e*Math.cos(i),e*Math.sin(n)*Math.sin(i))}class Z_{constructor(t=8){N(this,"group",new ne);N(this,"cloudsMesh");N(this,"earthUniforms");N(this,"beacons",[]);this.buildStarfield(),this.buildLighting(),this.buildEarth(t),this.buildSaudiBorders(),this.buildQuestBeacons()}buildStarfield(){const e=new Float32Array(7200),n=new Float32Array(2400*3);for(let a=0;a<2400;a++){const o=95+Math.random()*85,l=Math.acos(2*Math.random()-1),c=Math.random()*Math.PI*2;e[a*3]=o*Math.sin(l)*Math.cos(c),e[a*3+1]=o*Math.cos(l),e[a*3+2]=o*Math.sin(l)*Math.sin(c);const h=Math.random(),u=h<.25?new gt(12248829):h<.5?new gt(16707722):new gt(16777215);n[a*3]=u.r,n[a*3+1]=u.g,n[a*3+2]=u.b}const i=new pe;i.setAttribute("position",new ve(e,3)),i.setAttribute("color",new ve(n,3));const s=new ks({size:.55,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1});this.group.add(new Fr(i,s))}buildLighting(){const t=new E0(14412542,.65),e=new jo(16776171,2.2);e.position.copy(fi(24,48,55)),this.group.add(t,e)}buildSaudiMask(){const n=document.createElement("canvas");n.width=2048,n.height=1024;const i=n.getContext("2d");i.fillStyle="#000",i.fillRect(0,0,2048,1024),i.fillStyle="#fff",i.shadowColor="#fff",i.shadowBlur=5;for(const a of kc)for(const o of a)i.beginPath(),o.forEach(([l,c],h)=>{const u=(l+180)/360*2048,d=(90-c)/180*1024;h===0?i.moveTo(u,d):i.lineTo(u,d)}),i.closePath(),i.fill();const s=new Mo(n);return s.needsUpdate=!0,s}buildEarth(t){const e=new Dh,n=(g,x)=>{const _=e.load(g);return _.anisotropy=t,x&&(_.colorSpace=ye),_},i=n("/earth/earth-day.jpg",!0),s=n("/earth/earth-night.jpg",!0),a=n("/earth/earth-water.png",!1),o=n("/earth/earth-clouds.png",!1),l=this.buildSaudiMask();this.earthUniforms={uDay:{value:i},uNight:{value:s},uWater:{value:a},uSaudiMask:{value:l},uSunDir:{value:fi(23,45,1).normalize()},uTime:{value:0}};const c=new Se({uniforms:this.earthUniforms,vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        void main() {
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform sampler2D uDay;
        uniform sampler2D uNight;
        uniform sampler2D uWater;
        uniform sampler2D uSaudiMask;
        uniform vec3 uSunDir;
        uniform float uTime;

        varying vec2 vUv;
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;

        void main() {
          vec3 N = normalize(vNormalWorld);
          vec3 V = normalize(cameraPosition - vWorldPos);
          float ndotl = dot(N, normalize(uSunDir));
          float dayMix = smoothstep(-0.18, 0.28, ndotl);

          vec3 dayCol = texture2D(uDay, vUv).rgb;
          vec3 nightCol = texture2D(uNight, vUv).rgb * 1.4;
          float water = texture2D(uWater, vUv).r;
          float saudi = texture2D(uSaudiMask, vUv).r;

          // Richer ocean blue & crisp sun specular
          dayCol = mix(dayCol * 1.12, mix(dayCol, vec3(0.05, 0.28, 0.56), 0.45), water);
          vec3 H = normalize(normalize(uSunDir) + V);
          float spec = pow(max(dot(N, H), 0.0), 42.0) * water * dayMix * 0.55;

          vec3 base = mix(nightCol + dayCol * 0.12, dayCol + vec3(spec), dayMix);

          // Subtle emerald-gold Kingdom of Saudi Arabia highlight pulse!
          float pulse = 0.5 + 0.5 * sin(uTime * 2.6);
          vec3 saudiTint = mix(vec3(0.08, 0.82, 0.52), vec3(0.98, 0.82, 0.25), pulse * 0.45);
          base = mix(base, base * 1.18 + saudiTint * 0.16, saudi);

          // Crisp atmospheric rim
          float fresnel = pow(1.0 - max(dot(N, V), 0.0), 3.4);
          base += vec3(0.22, 0.62, 1.0) * fresnel * 0.45;

          gl_FragColor = vec4(base, 1.0);
        }
      `}),h=new st(new Qt(Bi,96,96),c);this.group.add(h);const u=new Ch({map:o,transparent:!0,opacity:.36,blending:Zn,depthWrite:!1});this.cloudsMesh=new st(new Qt(Bi*1.012,72,72),u),this.group.add(this.cloudsMesh);const d=new Se({side:Ie,transparent:!0,blending:Zn,depthWrite:!1,vertexShader:`
        varying vec3 vNormalView;
        void main() {
          vNormalView = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormalView;
        void main() {
          float intensity = pow(0.66 - dot(vNormalView, vec3(0.0, 0.0, 1.0)), 3.2);
          gl_FragColor = vec4(0.24, 0.68, 1.0, 1.0) * max(intensity, 0.0) * 0.85;
        }
      `}),f=new st(new Qt(Bi*1.11,64,64),d);this.group.add(f)}buildSaudiBorders(){const t=new zs({color:16638023,transparent:!0,opacity:.92});for(const e of kc)for(const n of e){const i=n.map(([a,o])=>fi(o,a,Bi+.035)),s=new pe().setFromPoints(i);this.group.add(new Vs(s,t))}}buildQuestBeacons(){const t=[1,2,3,4,5];for(const e of t){const n=Oe[e],i=fi(n.lat,n.lon,Bi+.05),s=i.clone().normalize(),a=new ne;a.position.copy(i),a.quaternion.setFromUnitVectors(new I(0,1,0),s);const o=new gt(n.accentColor),l=new st(new Qe(.14,.24,32),new se({color:o,side:_e,transparent:!0,opacity:.9}));l.rotation.x=-Math.PI/2,a.add(l);const c=new st(new di(.032,.032,.45,12),new se({color:o,transparent:!0,opacity:.85}));c.position.y=.225,a.add(c);const h=new st(new Qt(.095,16,16),new se({color:16777215}));h.position.y=.48,h.userData={globeQuestId:e},a.add(h),this.group.add(a),this.beacons.push({questId:e,worldPos:i.clone().addScaledVector(s,.52),normal:s,ring:l,pillar:c,orb:h})}}update(t,e,n,i,s,a,o){this.earthUniforms.uTime.value=e,this.cloudsMesh.rotation.y+=t*.008;const l=n.position.clone().normalize(),c=[];for(const h of this.beacons){const u=Oe[h.questId],d=h.questId===a,f=1+Math.sin(e*4.5+h.questId)*.22;h.ring.scale.setScalar(d?f*1.35:f),h.orb.scale.setScalar(d?1.35:1);const g=h.normal.dot(l)>.22,x=h.worldPos.clone().project(n),_=(x.x*.5+.5)*i,m=(-x.y*.5+.5)*s;c.push({questId:h.questId,code:u.code,regionName:u.regionName,title:u.title,accentColor:u.accentColor,x:_,y:m,visible:g&&x.z<1,completed:o.has(h.questId),active:d})}return c}}function ge(r,t){const e=Math.hypot(r,t);if(e<3.85){const o=e/3.85;return-.78+.78*(o*o*(3-2*o))}const n=mt((e-8.2)/8.8,0,1),i=n*n*(3-2*n),s=1-mt((e-14.5)/2.7,0,1),a=(Math.sin(r*.38+.5)*Math.cos(t*.34-.3)*.18+Math.sin((r+t)*.22)*.12)*mt((e-3.85)/3,0,1)*s;return i*1.45+a}function Aa(r,t,e){let n=t-r;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return r+n*Math.min(1,e)}class Q_{constructor(t){N(this,"group",new ne);N(this,"vault");N(this,"groundMesh");N(this,"groundGeo");N(this,"lastColoredWater",-999);N(this,"lastColoredQuest",-1);N(this,"skyUniforms");N(this,"hemiLight");N(this,"sunLight");N(this,"nightLanternLight");N(this,"starsGroup",new ne);N(this,"nightBlend",0);N(this,"waterMesh");N(this,"waterUniforms");N(this,"displayedWaterLevel",18);N(this,"lastWaterQuest",-1);N(this,"fishes",[]);N(this,"perimeterPalms",[]);N(this,"palmCrownPositions",[]);N(this,"ambientParrots",[]);N(this,"ambientWaders",[]);N(this,"animalViews",new Map);N(this,"plantGroups",new Map);N(this,"rockGroups",new Map);N(this,"selectionRing");N(this,"emoteTextures",new Map);N(this,"sanadActor");N(this,"sanadHitMesh");N(this,"sanadPedestal");N(this,"rainCloudGroup",new ne);N(this,"rainPuffs",[]);N(this,"rainDropsMesh");N(this,"rainDropSeeds",[]);N(this,"rainbowMesh");N(this,"rainbowUniforms");N(this,"rainbowMix",0);N(this,"butterflies",[]);N(this,"firefliesMesh");N(this,"fireflyBasePos",new Float32Array(255));N(this,"nightMeteorLine");N(this,"nightMeteorState",{active:!1,cooldown:2.5,life:0,maxLife:.85,x:0,y:35,z:-45,vx:-28,vy:-12});N(this,"lastCelebratedQuest",-1);N(this,"cursorRing");N(this,"cursorWorldPos",new I(0,0,0));N(this,"splashes",[]);N(this,"particles",[]);N(this,"q3Group",new ne);N(this,"q3Parrot");N(this,"q3LogPivot",new ne);N(this,"q3LogRing");N(this,"q3Woodlice",[]);N(this,"q3LogFlipProgress",0);N(this,"q4Group",new ne);N(this,"q4Stag");N(this,"q4TickMeshes",[]);N(this,"q4Flowers",[]);N(this,"q4NestTree");N(this,"q4NestRing");N(this,"q4BuiltNestGroup",new ne);N(this,"q4NestParrot");N(this,"q4CuredCelebrated",!1);N(this,"hitTargets",[]);N(this,"invisibleHitMat",new se({transparent:!0,opacity:0,depthWrite:!1}));N(this,"hoveredTickIndex",-1);this.vault=t,this.buildSkyAndLighting(),this.buildTerrain(),this.buildOasisWaterAndFish(),this.buildPerimeterScenery(),this.buildAmbientAvianWildlife(),this.buildSanadRanger(),this.buildCursorToys(),this.buildButterfliesAndNightMagic(),this.buildQuest3SetPiece(),this.buildQuest4SetPiece()}getEmoteTexture(t){let e=this.emoteTextures.get(t);if(e)return e;const n=document.createElement("canvas");n.width=128,n.height=128;const i=n.getContext("2d");return i.fillStyle="rgba(15, 23, 42, 0.78)",i.beginPath(),i.arc(64,64,48,0,Math.PI*2),i.fill(),i.lineWidth=4,i.strokeStyle="rgba(255, 255, 255, 0.65)",i.stroke(),i.font='56px "Segoe UI Emoji", "Apple Color Emoji", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(t,64,67),e=new Mo(n),e.colorSpace=ye,this.emoteTextures.set(t,e),e}buildSkyAndLighting(){this.skyUniforms={uNight:{value:0},uTime:{value:0}};const t=new Se({side:Ie,depthWrite:!1,uniforms:this.skyUniforms,vertexShader:`
        varying vec3 vWorldPos;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform float uNight;
        varying vec3 vWorldPos;
        void main() {
          vec3 dir = normalize(vWorldPos);
          float h = clamp(dir.y * 0.85 + 0.15, 0.0, 1.0);

          vec3 dayHorizon = vec3(0.98, 0.90, 0.74);
          vec3 dayMid = vec3(0.38, 0.76, 0.98);
          vec3 dayTop = vec3(0.09, 0.44, 0.86);
          vec3 dayCol = mix(dayHorizon, mix(dayMid, dayTop, smoothstep(0.18, 0.85, h)), smoothstep(0.0, 0.35, h));

          vec3 nightHorizon = vec3(0.11, 0.13, 0.28);
          vec3 nightTop = vec3(0.02, 0.04, 0.12);
          vec3 nightCol = mix(nightHorizon, nightTop, smoothstep(0.0, 0.75, h));

          gl_FragColor = vec4(mix(dayCol, nightCol, uNight), 1.0);
        }
      `}),e=new st(new Qt(95,40,28),t);this.group.add(e);const n=900,i=new Float32Array(n*3);for(let c=0;c<n;c++){const h=75+Math.random()*12,u=Math.random()*Math.PI*.46,d=Math.random()*Math.PI*2;i[c*3]=h*Math.sin(u)*Math.cos(d),i[c*3+1]=h*Math.cos(u)+4,i[c*3+2]=h*Math.sin(u)*Math.sin(d)}const s=new pe;s.setAttribute("position",new ve(i,3));const a=new ks({color:16710083,size:.55,transparent:!0,opacity:.95});this.starsGroup.add(new Fr(s,a));const o=new st(new Qt(2.6,24,24),new se({color:16707722}));o.position.set(-18,28,-36),this.starsGroup.add(o),this.starsGroup.visible=!1,this.group.add(this.starsGroup),this.hemiLight=new y0(14742270,14262374,.95),this.group.add(this.hemiLight),this.sunLight=new jo(16776171,2.35),this.sunLight.position.set(16,26,14),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(4096,4096),this.sunLight.shadow.camera.near=4,this.sunLight.shadow.camera.far=65;const l=18.5;this.sunLight.shadow.camera.left=-l,this.sunLight.shadow.camera.right=l,this.sunLight.shadow.camera.top=l,this.sunLight.shadow.camera.bottom=-l,this.sunLight.shadow.bias=-4e-4,this.sunLight.shadow.normalBias=.02,this.group.add(this.sunLight),this.nightLanternLight=new Xo(16498468,0,26,1.4),this.nightLanternLight.position.set(1.5,4.2,2.5),this.group.add(this.nightLanternLight)}createSandNormalTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d"),i=n.createImageData(512,512),s=i.data;for(let o=0;o<512;o++)for(let l=0;l<512;l++){const c=l/512*Math.PI*2,h=o/512*Math.PI*2,u=Math.cos(h*14+Math.sin(c*3)*1.4)*.55+Math.cos(h*28-c*4)*.2+(Math.random()-.5)*.12,d=128+Math.sin(c*6)*14,f=128+u*48,g=(o*512+l)*4;s[g]=mt(d,0,255),s[g+1]=mt(f,0,255),s[g+2]=245,s[g+3]=255}n.putImageData(i,0,0);const a=new Mo(e);return a.wrapS=Jn,a.wrapT=Jn,a.repeat.set(12,12),a}buildTerrain(){this.groundGeo=new pi(36,36,128,128),this.groundGeo.rotateX(-Math.PI/2);const e=this.groundGeo.attributes.position,n=new Float32Array(e.count*3);for(let l=0;l<e.count;l++){const c=e.getX(l),h=e.getZ(l);e.setY(l,ge(c,h))}this.groundGeo.setAttribute("color",new ve(n,3)),this.groundGeo.computeVertexNormals();const i=new Re({vertexColors:!0,normalMap:this.createSandNormalTexture(),normalScale:new dt(.38,.38),roughness:.88,metalness:.02});this.groundMesh=new st(this.groundGeo,i),this.groundMesh.receiveShadow=!0,this.groundMesh.userData={hitType:"ground"},this.group.add(this.groundMesh),this.hitTargets.push(this.groundMesh),this.refreshTerrainColors(20,1);const s=new Qe(17.5,94,64);s.rotateX(-Math.PI/2);const a=new Ch({color:14988406}),o=new st(s,a);o.position.y=1.45,this.group.add(o),this.selectionRing=new st(new Qe(.68,.88,32),new se({color:16638023,side:_e,transparent:!0,opacity:.92,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.selectionRing.rotation.x=-Math.PI/2,this.selectionRing.visible=!1,this.group.add(this.selectionRing)}refreshTerrainColors(t,e){this.lastColoredWater=t,this.lastColoredQuest=e;const n=this.groundGeo.attributes.position,i=this.groundGeo.attributes.color,s=new gt(e===3?13939843:15448440),a=new gt(e===3?9272168:13207632),o=new gt(e===3?3120708:4565074),l=new gt(5420698),c=new gt,h=3.2+t/100*4.4,u=mt((t-22)/55,0,1);for(let d=0;d<n.count;d++){const f=n.getX(d),g=n.getZ(d),x=Math.hypot(f,g);if(c.copy(s),x>8.5&&c.lerp(a,mt((x-8.5)/6,0,.85)),x<3.45&&c.lerp(l,mt((3.45-x)/2.2,0,.7)*mt(t/40,.15,1)),x>=2.8&&x<=h&&u>.02){const _=1-Math.abs(x-(2.9+u*1.4))/(1.8+u*2.1);_>0&&c.lerp(o,mt(_,0,1)*u*.92)}i.setXYZ(d,c.r,c.g,c.b)}i.needsUpdate=!0}buildOasisWaterAndFish(){this.waterUniforms={uTime:{value:0},uNight:{value:0}};const t=new Se({transparent:!0,depthWrite:!1,uniforms:this.waterUniforms,vertexShader:`
        uniform float uTime;
        varying vec2 vUv;
        varying float vDist;
        void main() {
          vUv = uv;
          vec3 p = position;
          vDist = length(p.xz) / 3.55;
          p.y += sin(p.x * 3.5 + uTime * 2.8) * cos(p.z * 3.2 + uTime * 2.3) * 0.018 * clamp(1.0 - vDist, 0.0, 1.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uNight;
        varying vec2 vUv;
        varying float vDist;
        void main() {
          if (vDist > 1.0) discard;
          vec2 p = (vUv - 0.5) * 9.0;
          float c1 = sin(p.x * 2.4 + uTime * 2.1) * cos(p.y * 2.4 - uTime * 1.7);
          float c2 = sin((p.x + p.y) * 3.1 - uTime * 2.6);
          float caustic = smoothstep(0.35, 0.95, (c1 + c2) * 0.5 + 0.5);

          vec3 deepCol = mix(vec3(0.02, 0.52, 0.68), vec3(0.03, 0.22, 0.42), uNight);
          vec3 shallowCol = mix(vec3(0.16, 0.85, 0.78), vec3(0.08, 0.48, 0.62), uNight);
          vec3 col = mix(deepCol, shallowCol, smoothstep(0.15, 0.92, vDist));

          col += vec3(0.55, 0.96, 1.0) * caustic * 0.28 * (1.0 - uNight * 0.45);
          float foam = smoothstep(0.86, 0.98, vDist);
          col = mix(col, vec3(0.92, 0.99, 1.0), foam * 0.68);

          float alpha = mix(0.86, 0.45, smoothstep(0.88, 1.0, vDist));
          gl_FragColor = vec4(col, alpha);
        }
      `}),e=new pi(7.1,7.1,32,32);e.rotateX(-Math.PI/2),this.waterMesh=new st(e,t),this.waterMesh.position.y=-.35,this.group.add(this.waterMesh);for(let n=0;n<6;n++){const i=n>=4?.58:.88+n%3*.14,s=this.vault.spawnProp("fish",i);this.group.add(s);const a=n/6*Math.PI*2;this.fishes.push({root:s,x:Math.cos(a)*1.1,z:Math.sin(a)*1.1,vx:-Math.sin(a)*1.2,vz:Math.cos(a)*1.2,baseScale:i})}}buildPerimeterScenery(){const t=[{x:-8.6,z:-6.4,key:"palm0",s:1.05,h:5.4},{x:-9.8,z:-2.2,key:"palm1",s:.92,h:4.2},{x:-7.8,z:6.2,key:"palm2",s:1,h:5.7},{x:8.8,z:-6,key:"palm3",s:1.08,h:5.3},{x:9.6,z:-1.4,key:"palm4",s:.95,h:4.5},{x:2.2,z:-8.6,key:"palm0",s:1.02,h:5.3},{x:-3.2,z:-8.8,key:"palm2",s:.9,h:5}];for(const n of t){const i=this.vault.spawnProp(n.key,n.s),s=ge(n.x,n.z)-.08;i.position.set(n.x,s,n.z),i.rotation.y=Math.random()*Math.PI*2,this.group.add(i),this.perimeterPalms.push(i),this.palmCrownPositions.push(new I(n.x,s+n.h*.85,n.z))}const e=[{x:-10.8,z:-5,key:"rockLarge",s:1.35},{x:10.6,z:-4.8,key:"rockLarge",s:1.25},{x:-9.5,z:4.5,key:"cactus",s:1},{x:9.8,z:3.2,key:"cactus",s:.9},{x:.2,z:-10.2,key:"rockMedium",s:1.4}];for(const n of e){const i=this.vault.spawnProp(n.key,n.s);i.position.set(n.x,ge(n.x,n.z)-.06,n.z),i.rotation.y=Math.random()*Math.PI*2,this.group.add(i)}}buildAmbientAvianWildlife(){for(let i=0;i<2;i++){const s=this.vault.spawnBird("parrot",.95),a=this.palmCrownPositions[i%this.palmCrownPositions.length];s.root.position.copy(a);const o=new st(new Qt(1.05,8,8),this.invisibleHitMat);o.userData={hitType:"canopy"},s.root.add(o),this.hitTargets.push(o),this.group.add(s.root),this.ambientParrots.push({actor:s,x:a.x,y:a.y+.6,z:a.z,tx:-a.x*.5,ty:4.6,tz:a.z*.5,rotY:Math.atan2(-a.x,-a.z),timer:2+i*2.5})}const t=this.vault.spawnBird("flamingo",.92),e=this.vault.spawnBird("stork",.9);this.group.add(t.root,e.root);const n=[{actor:t,angle:.35,radius:5.1,alt:4.1,speed:.48},{actor:e,angle:3.45,radius:6.2,alt:4.85,speed:-.42}];for(const i of n){const s=new st(new Qt(1.35,10,10),this.invisibleHitMat);s.userData={hitType:"shore"},i.actor.root.add(s),this.hitTargets.push(s),this.ambientWaders.push({actor:i.actor,angle:i.angle,orbitRadius:i.radius,baseAlt:i.alt,speed:i.speed,startledTimer:0,peckTimer:3+Math.random()*2})}}buildSanadRanger(){this.sanadPedestal=new ne;const t=6.2,e=4.6,n=ge(t,e);this.sanadPedestal.position.set(t,n,e);const i=new st(new di(1.15,1.38,.32,24),new Re({color:14251782,roughness:.72,metalness:.08}));i.position.y=.14,i.castShadow=!0,i.receiveShadow=!0,this.sanadPedestal.add(i);const s=new st(new Qe(.98,1.13,32),new se({color:3462041,side:_e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));s.rotation.x=-Math.PI/2,s.position.y=.305,this.sanadPedestal.add(s),this.sanadActor=this.vault.spawnSkinned("robot",1.05),this.sanadActor.root.position.y=.3,this.sanadActor.root.rotation.y=-.55,this.sanadPedestal.add(this.sanadActor.root),this.sanadHitMesh=new st(new di(1.05,1.05,2.6,12),this.invisibleHitMat),this.sanadHitMesh.position.y=1.45,this.sanadHitMesh.userData={hitType:"sanad"},this.sanadPedestal.add(this.sanadHitMesh),this.hitTargets.push(this.sanadHitMesh),this.group.add(this.sanadPedestal)}buildCursorToys(){const t=[[0,0,0,.92],[-.78,-.1,.12,.68],[.82,-.08,.1,.72],[-.35,.38,-.1,.66],[.38,.34,-.08,.64],[0,-.15,.55,.62]];for(const[c,h,u,d]of t){const f=new Re({color:16317180,roughness:.65,metalness:.02,emissive:new gt(3718648),emissiveIntensity:.12}),g=new st(new Qt(d,20,20),f);g.position.set(c,h,u),g.castShadow=!0,this.rainCloudGroup.add(g),this.rainPuffs.push(g)}const e=new se({color:988970}),n=new se({color:16777215});for(const c of[-1,1]){const h=new st(new Qt(.095,12,12),e);h.position.set(c*.24,-.06,1.12);const u=new st(new Qt(.038,8,8),n);u.position.set(c*.24+.03,-.02,1.2),this.rainCloudGroup.add(h,u)}const i=90,s=new Float32Array(i*6);for(let c=0;c<i;c++)this.rainDropSeeds.push({x:(Math.random()-.5)*2.2,y:-Math.random()*5,z:(Math.random()-.5)*2.2,speed:9.5+Math.random()*5});const a=new pe;a.setAttribute("position",new ve(s,3));const o=new zs({color:8246268,transparent:!0,opacity:.85});this.rainDropsMesh=new Ah(a,o),this.rainDropsMesh.visible=!1,this.rainCloudGroup.add(this.rainDropsMesh),this.rainbowUniforms={uOpacity:{value:0}};const l=new Se({uniforms:this.rainbowUniforms,transparent:!0,side:_e,depthWrite:!1,blending:Zn,vertexShader:`
        varying vec2 vPos;
        void main() {
          vPos = position.xy;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uOpacity;
        varying vec2 vPos;
        vec3 hsv2rgb(vec3 c) {
          vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
          vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
          return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
        }
        void main() {
          float r = length(vPos);
          float t = clamp((r - 1.18) / (1.82 - 1.18), 0.0, 1.0);
          float radialMask = sin(t * 3.14159265);
          float ang = atan(vPos.y, vPos.x);
          float arcFade = smoothstep(0.0, 0.42, ang) * smoothstep(3.14159265, 2.72, ang);
          vec3 rgb = hsv2rgb(vec3((1.0 - t) * 0.78, 0.85, 1.0));
          gl_FragColor = vec4(rgb, radialMask * arcFade * 0.46 * uOpacity);
        }
      `});this.rainbowMesh=new st(new Qe(1.18,1.82,48,1,0,Math.PI),l),this.rainbowMesh.position.set(0,-3.15,.25),this.rainbowMesh.visible=!1,this.rainCloudGroup.add(this.rainbowMesh),this.rainCloudGroup.position.set(0,5.2,0),this.rainCloudGroup.visible=!1,this.group.add(this.rainCloudGroup),this.cursorRing=new st(new Qe(.65,.86,36),new se({color:3718648,side:_e,transparent:!0,opacity:.85,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.cursorRing.rotation.x=-Math.PI/2,this.cursorRing.visible=!1,this.group.add(this.cursorRing)}buildButterfliesAndNightMagic(){const t=[16498468,3718648,16020150,3462041],e=new pi(.16,.22);e.rotateX(-Math.PI/2);for(let l=0;l<8;l++){const c=new ne,h=new se({color:t[l%t.length],side:_e,transparent:!0,opacity:.9}),u=new ne,d=new st(e,h);d.position.x=-.085,u.add(d);const f=new ne,g=new st(e,h);g.position.x=.085,f.add(g),c.add(u,f),c.visible=!1,this.group.add(c),this.butterflies.push({root:c,leftWing:u,rightWing:f,angle:l/8*Math.PI*2,radius:1.9+l%4*.85,speed:.65+l%3*.22,heightOff:.85+l%3*.35,phase:l*1.4})}const n=new Float32Array(255);for(let l=0;l<85;l++){const c=Math.random()*Math.PI*2,h=1.4+Math.random()*8.2,u=Math.cos(c)*h,d=Math.sin(c)*h,f=Math.max(ge(u,d),-.1)+.35+Math.random()*2.1;this.fireflyBasePos[l*3]=u,this.fireflyBasePos[l*3+1]=f,this.fireflyBasePos[l*3+2]=d,n[l*3]=u,n[l*3+1]=f,n[l*3+2]=d}const i=new pe;i.setAttribute("position",new ve(n,3));const s=new ks({color:12513892,size:.16,transparent:!0,opacity:0,blending:Zn,depthWrite:!1});this.firefliesMesh=new Fr(i,s),this.firefliesMesh.visible=!1,this.group.add(this.firefliesMesh);const a=new pe;a.setAttribute("position",new ve(new Float32Array(6),3));const o=new zs({color:16710083,transparent:!0,opacity:0,blending:Zn,depthWrite:!1});this.nightMeteorLine=new Vs(a,o),this.starsGroup.add(this.nightMeteorLine)}buildQuest3SetPiece(){const t=this.vault.spawnProp("twistedTree",1.05),e=-.3,n=-2.1;t.position.set(e,ge(e,n)-.08,n),this.q3Group.add(t),this.q3Parrot=this.vault.spawnBird("parrot",1.15);const i=new st(new Qt(1.2,8,8),this.invisibleHitMat);i.userData={hitType:"canopy"},this.q3Parrot.root.add(i),this.hitTargets.push(i),this.q3Group.add(this.q3Parrot.root);const s=new st(new Qt(2.5,12,12),this.invisibleHitMat);s.position.set(e,4.4,n),s.userData={hitType:"canopy"},this.q3Group.add(s),this.hitTargets.push(s);const a=new st(new di(1.85,1.85,2.6,12),this.invisibleHitMat);a.position.set(3.1,1,.8),a.userData={hitType:"shore"},this.q3Group.add(a),this.hitTargets.push(a);const o=-3.9,l=1.6,c=ge(o,l);this.q3LogPivot.position.set(o,c+.05,l);const h=this.vault.spawnProp("woodLog",1.45);h.rotation.y=.5,this.q3LogPivot.add(h),this.q3Group.add(this.q3LogPivot),this.q3LogRing=new st(new Qe(1.15,1.38,32),new se({color:16436245,side:_e,transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.q3LogRing.rotation.x=-Math.PI/2,this.q3LogRing.position.set(o,c+.08,l),this.q3Group.add(this.q3LogRing);const u=new st(new Qt(1.6,12,12),this.invisibleHitMat);u.position.set(o,c+.55,l),u.userData={hitType:"log"},this.q3Group.add(u),this.hitTargets.push(u);const d=new Re({color:4674921,roughness:.45});for(let f=0;f<8;f++){const g=new ne;for(let x=0;x<3;x++){const _=new st(new Qt(.085-x*.012,10,10),d);_.scale.set(1.1,.55,1.2),_.position.z=(x-1)*.095,_.castShadow=!0,g.add(_)}g.position.set(o,c+.06,l),g.visible=!1,this.q3Group.add(g),this.q3Woodlice.push({mesh:g,angle:f/8*Math.PI*2,radius:.25+f%3*.26,speed:2.2+f%4*.45})}this.q3Group.visible=!1,this.group.add(this.q3Group)}buildQuest4SetPiece(){const n=ge(-.1,4.15);this.q4Stag=this.vault.spawnSkinned("stag",1.42),this.q4Stag.root.position.set(-.1,n,4.15),this.q4Stag.root.rotation.y=.45,this.q4Stag.play("Idle_Headlow"),this.q4Group.add(this.q4Stag.root);const i=[[0,1.34,.15],[.28,1.22,-.18],[-.28,1.24,-.12],[.22,1.32,-.52],[-.22,1.3,-.54],[0,1.44,-.28]],s=new Re({color:14753096,emissive:new gt(10424889),emissiveIntensity:.35,roughness:.28}),a=new se({color:16777215}),o=new se({color:988970});i.forEach(([_,m,E],A)=>{const p=new ne;p.position.set(_,m,E);const y=new st(new Qt(.22,16,16),s.clone());y.scale.set(1.08,.88,1.22),y.castShadow=!0,y.userData={hitType:"tick",index:A},p.add(y),this.hitTargets.push(y);for(const T of[-1,1]){const R=new st(new Qt(.065,10,10),a);R.position.set(T*.085,.08,.18);const M=new st(new Qt(.032,8,8),o);M.position.set(T*.085,.08,.235),p.add(R,M)}const v=new st(new Qt(.46,10,10),this.invisibleHitMat);v.userData={hitType:"tick",index:A},p.add(v),this.hitTargets.push(v),this.q4Stag.root.add(p),this.q4TickMeshes.push(p)}),[[-4.1,3.2],[-3.9,-1.6],[3.2,3.8]].forEach(([_,m],E)=>{const A=ge(_,m),p=new ne;p.position.set(_,A,m);const y=new st(new di(.08,.11,.78,10),new Re({color:1483594,roughness:.7}));y.position.y=.39,y.castShadow=!0,p.add(y);const v=new st(new Qt(.24,16,16),new Re({color:16436245,emissive:new gt(13273604),emissiveIntensity:.25,roughness:.4}));v.position.y=.82,p.add(v);const T=[],R=[16007006,14239471,16347926],M=new Re({color:R[E%R.length],roughness:.42});for(let W=0;W<7;W++){const D=new st(new Qt(.22,12,12),M);D.scale.set(.75,.28,1.45);const j=W/7*Math.PI*2;D.position.set(Math.cos(j)*.28,.86,Math.sin(j)*.28),D.rotation.y=-j+Math.PI/2,D.rotation.x=-.85,D.castShadow=!0,p.add(D),T.push(D)}const S=new ne,P=new st(new Qt(.11,12,12),new Re({color:16638023,roughness:.4}));P.scale.set(1,.85,1.35);const O=new se({color:14742270,transparent:!0,opacity:.8,side:_e});for(const W of[-1,1]){const D=new st(new Go(.1,10),O);D.rotation.x=-Math.PI/2,D.position.set(W*.12,.08,0),S.add(D)}S.add(P),S.position.set(.3,1.35,0),p.add(S);const L=new st(new Qe(.62,.78,28),new se({color:16020150,side:_e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));L.rotation.x=-Math.PI/2,L.position.y=.06,p.add(L);const k=new st(new Qt(1.15,10,10),this.invisibleHitMat);k.position.y=.85,k.userData={hitType:"flower",index:E},p.add(k),this.hitTargets.push(k),this.q4Group.add(p),this.q4Flowers.push({group:p,petals:T,bee:S,ring:L,openMix:0})});const c=3.6,h=-2.2,u=ge(c,h);this.q4NestTree=this.vault.spawnProp("twistedTree",.92),this.q4NestTree.position.set(c,u-.06,h),this.q4Group.add(this.q4NestTree);const d=new I(c-.31,u+2.35,h+.42);this.q4NestRing=new st(new Qe(.45,.62,28),new se({color:3718648,side:_e})),this.q4NestRing.position.copy(d),this.q4Group.add(this.q4NestRing);const f=new st(new Qt(1.4,10,10),this.invisibleHitMat);f.position.copy(d),f.userData={hitType:"nest"},this.q4Group.add(f),this.hitTargets.push(f),this.q4BuiltNestGroup.position.copy(d);const g=new st(new Wo(.32,.12,12,24),new Re({color:9584654,roughness:.9}));g.rotation.x=Math.PI/2,this.q4BuiltNestGroup.add(g);const x=new Re({color:12248829,roughness:.35});for(const _ of[-.09,.09]){const m=new st(new Qt(.09,12,12),x);m.scale.set(.85,1.15,.85),m.position.set(_,.06,0),this.q4BuiltNestGroup.add(m)}this.q4NestParrot=this.vault.spawnBird("parrot",.72),this.q4NestParrot.root.position.set(.18,.32,.1),this.q4BuiltNestGroup.add(this.q4NestParrot.root),this.q4BuiltNestGroup.visible=!1,this.q4Group.add(this.q4BuiltNestGroup),this.q4Group.visible=!1,this.group.add(this.q4Group)}triggerSanadMood(t){if(!this.sanadActor)return;const n={wave:"Wave",happy:"Jump",dance:"Dance",panic:"No",surprise:"Jump",no:"No",thumbsup:"ThumbsUp"}[t];this.sanadActor.play(n,n!=="Dance",1.05)}spawnConfettiBurst(t,e=16,n=!1){const i=n?[16639626,15186298,14251782]:[16007006,16436245,3462041,3718648,11032055];for(let s=0;s<e;s++){const a=i[s%i.length],o=new st(new Qt(n?.1:.085,8,8),new se({color:a}));o.position.copy(t),this.group.add(o);const l=Math.random()*Math.PI*2,c=(n?.9:1.6)+Math.random()*(n?1.5:3.2);this.particles.push({mesh:o,vx:Math.cos(l)*c,vy:(n?1.1:3)+Math.random()*2.2,vz:Math.sin(l)*c,life:0,maxLife:n?.42:.6+Math.random()*.3})}}spawnHeartBurst(t,e,n,i=5){const s=this.getEmoteTexture("💕");for(let a=0;a<i;a++){const o=new vo({map:s,transparent:!0}),l=new rc(o);l.scale.setScalar(.55),l.position.set(t+(Math.random()-.5)*.8,e+Math.random()*.4,n+(Math.random()-.5)*.8),this.group.add(l),this.particles.push({mesh:l,vx:(Math.random()-.5)*.7,vy:1.5+Math.random()*.9,vz:(Math.random()-.5)*.7,life:0,maxLife:1.35,riseFloat:!0})}}spawnWaterRipple(t,e){const n=new st(new Qe(.1,.18,18),new se({color:12248829,side:_e,transparent:!0,opacity:.82,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));n.rotation.x=-Math.PI/2;const i=Math.max(ge(t,e),this.waterMesh.position.y)+.035;n.position.set(t,i,e),this.group.add(n),this.splashes.push({mesh:n,age:0})}raycastScene(t,e,n,i="hand",s){this.group.updateMatrixWorld(!0);const a=new k0;if(a.setFromCamera(t,e),this.hoveredTickIndex=-1,i==="rain"){const u=a.intersectObject(this.groundMesh,!1);return u.length>0?{hitType:"ground",point:u[0].point.clone()}:null}const o=[];for(const u of this.hitTargets){let d=u,f=!0;for(;d;){if(!d.visible){f=!1;break}d=d.parent}if(!f)continue;const g=u.userData.hitType,x=u.userData.index;(g==="log"||g==="canopy"||g==="shore")&&n!==3||(g==="tick"||g==="flower"||g==="nest")&&n!==4||s&&(g==="tick"&&x!==void 0&&!s.tickAlive[x]||i!=="hand"&&(g==="log"&&s.logFlipped||g==="canopy"&&s.canopyInspected||g==="shore"&&s.shoreInspected||g==="flower"&&x!==void 0&&s.flowerPollinated[x]||g==="nest"&&s.commensalismBuilt))||o.push(u)}for(const u of this.animalViews.values())u.actor.root.visible&&o.push(u.hitSphere);const l=a.intersectObjects(o,!1);this.hoveredTickIndex=-1;for(const u of l){const d=u.object.userData.hitType,f=u.object.userData.index;if(d==="tick"&&f!==void 0&&(this.hoveredTickIndex=f),d!=="ground"&&d!=="animal")return{hitType:d,index:f,point:u.point.clone()}}const c=l.find(u=>u.object.userData.hitType==="animal");if(c)return{hitType:"animal",index:c.object.userData.index,point:c.point.clone()};const h=l.find(u=>u.object.userData.hitType==="ground");return h?{hitType:"ground",point:h.point.clone()}:null}setCursorState(t,e,n){if(!t){this.rainCloudGroup.visible=!1,this.cursorRing.visible=!1;return}this.cursorWorldPos.copy(t);const i=mt(t.x,-11.5,11.5),s=mt(t.z,-10.5,10.5),a=Math.max(ge(i,s),this.waterMesh.position.y);if(e==="rain"){this.rainCloudGroup.visible=!0,this.rainCloudGroup.position.x=Ce(this.rainCloudGroup.position.x,i,.35),this.rainCloudGroup.position.z=Ce(this.rainCloudGroup.position.z,s,.35),this.rainDropsMesh.visible=n;const l=n?9684477:16317180;for(const c of this.rainPuffs)c.material.color.setHex(l)}else this.rainCloudGroup.visible=!1;this.cursorRing.visible=e!=="hand",this.cursorRing.position.set(i,a+.06,s);const o={hand:16777215,rain:3718648,plant:4906624,gazelle:16436245,wolf:16347926,fox:16628340,rock:13358561};this.cursorRing.material.color.setHex(o[e])}update(t,e,n,i,s){const a=Math.min(n,.05);for(;t.pendingHeartBursts.length>0;){const y=t.pendingHeartBursts.shift();this.spawnHeartBurst(y.x,y.y,y.z,7)}const o=e.isNight?1:0;this.nightBlend=Ce(this.nightBlend,o,Math.min(1,a*3.5)),this.skyUniforms.uNight.value=this.nightBlend,this.skyUniforms.uTime.value=i,this.waterUniforms.uNight.value=this.nightBlend,this.waterUniforms.uTime.value=i,this.starsGroup.visible=this.nightBlend>.15,this.sunLight.intensity=Ce(2.35,.65,this.nightBlend),this.sunLight.color.setHex(this.nightBlend>.5?9684477:16776171),this.hemiLight.intensity=Ce(.95,.42,this.nightBlend),this.nightLanternLight.intensity=this.nightBlend*3.2,(Math.abs(e.waterLevel-this.lastColoredWater)>=1.5||e.questId!==this.lastColoredQuest)&&this.refreshTerrainColors(e.waterLevel,e.questId),e.questId!==this.lastWaterQuest?(this.displayedWaterLevel=e.waterLevel,this.lastWaterQuest=e.questId):this.displayedWaterLevel=Ce(this.displayedWaterLevel,e.waterLevel,Math.min(1,a*6));const l=this.displayedWaterLevel<=4?.2:3.55*Ce(.45,1.04,this.displayedWaterLevel/100),c=l/3.55;this.waterMesh.scale.set(c,1,c),this.waterMesh.position.y=ge(l,0)+.014,this.waterMesh.visible=this.displayedWaterLevel>4;const h=Math.max(.45,l*.62);for(let y=0;y<this.fishes.length;y++){const v=this.fishes[y],T=e.waterLevel>(y>=4?58:28);if(v.root.visible=T,!T)continue;let R=0,M=0,S=0,P=0,O=0,L=0,k=0;for(let nt=0;nt<this.fishes.length;nt++){if(y===nt||!this.fishes[nt].root.visible)continue;const it=this.fishes[nt],ft=it.x-v.x,xt=it.z-v.z,wt=Math.hypot(ft,xt);wt<1.8&&(R+=it.x,M+=it.z,S+=it.vx,P+=it.vz,k++,wt<.48&&wt>.001&&(O-=ft/wt*1.6,L-=xt/wt*1.6))}k>0&&(v.vx+=((R/k-v.x)*.7+(S/k-v.vx)*.8)*a,v.vz+=((M/k-v.z)*.7+(P/k-v.vz)*.8)*a),v.vx+=(O-v.z*.55-v.x*.35)*a,v.vz+=(L+v.x*.55-v.z*.35)*a;for(const nt of this.ambientWaders){const it=Math.cos(nt.angle)*(h+.3),ft=Math.sin(nt.angle)*(h+.3),xt=Math.hypot(v.x-it,v.z-ft);xt<1.35&&(v.vx+=(v.x-it)/(xt+.1)*8.5*a,v.vz+=(v.z-ft)/(xt+.1)*8.5*a)}const W=Math.hypot(v.vx,v.vz)||.01,D=mt(W,.85,2.65);v.vx=v.vx/W*D,v.vz=v.vz/W*D,v.x+=v.vx*a,v.z+=v.vz*a;const j=Math.hypot(v.x,v.z);j>h&&(v.x=v.x/j*h,v.z=v.z/j*h,v.vx*=-.45,v.vz*=-.45);const q=mt(this.waterMesh.position.y-.12,ge(v.x,v.z)+.08,this.waterMesh.position.y-.045);v.root.position.set(v.x,q,v.z),v.root.rotation.y=Math.atan2(-v.vx,-v.vz)}for(let y=0;y<this.ambientParrots.length;y++){const v=this.ambientParrots[y];if(v.actor.mixer.update(a),v.timer-=a,v.timer<=0)if(t.plants.length>0&&Math.random()<.55){const O=t.plants[Math.floor(Math.random()*t.plants.length)];v.tx=O.x,v.tz=O.z,v.ty=Math.max(2.9,ge(O.x,O.z)+2.55),O.health=mt(O.health+.08,.1,1),v.timer=3.6+Math.random()*1.8}else{const O=this.palmCrownPositions[Math.floor(Math.random()*this.palmCrownPositions.length)];v.tx=O.x+(Math.random()-.5)*1.4,v.ty=O.y+.75,v.tz=O.z+(Math.random()-.5)*1.4,v.timer=4+Math.random()*2.4}const T=v.tx-v.x,R=v.ty-v.y,M=v.tz-v.z,S=Math.hypot(T,R,M);if(S>.35){const O=Math.min(S,3.4*a);v.x+=T/S*O,v.y+=R/S*O,v.z+=M/S*O;const L=Math.atan2(T,M),k=L-v.rotY;v.rotY=Aa(v.rotY,L,a*5.5),v.actor.inner.rotation.z=mt(-k*.25,-.32,.32)}else{const O=i*1.6+y*2.2,L=-Math.sin(O),k=Math.cos(O);v.x+=L*1.2*a,v.z+=k*1.2*a,v.rotY=Aa(v.rotY,Math.atan2(L,k),a*4.5),v.actor.inner.rotation.z=-.18}const P=Math.sin(i*3.2+y)*.12;v.actor.root.position.set(v.x,v.y+P,v.z),v.actor.root.rotation.y=v.rotY}for(let y=0;y<this.ambientWaders.length;y++){const v=this.ambientWaders[y];if(v.actor.root.visible=e.waterLevel>25,!v.actor.root.visible)continue;v.actor.mixer.update(a);const T=Math.cos(v.angle)*(v.orbitRadius+Math.sin(v.angle*2)*.65),R=Math.sin(v.angle)*(v.orbitRadius+Math.cos(v.angle*2)*.65);v.angle+=v.speed*a;const M=Math.cos(v.angle)*(v.orbitRadius+Math.sin(v.angle*2)*.65),S=Math.sin(v.angle)*(v.orbitRadius+Math.cos(v.angle*2)*.65),P=M-T,O=S-R,L=Math.sin(i*1.4+y*2.1)*.35,k=v.baseAlt+L;v.actor.root.position.set(M,k,S),Math.hypot(P,O)>1e-5&&(v.actor.root.rotation.y=Math.atan2(P,O)),v.actor.inner.rotation.z=v.speed>0?-.22:.22}this.perimeterPalms.forEach((y,v)=>{y.rotation.z=Math.sin(i*1.4+v)*.025}),this.sanadActor.mixer.update(a);const u=this.cursorWorldPos.x-this.sanadPedestal.position.x,d=this.cursorWorldPos.z-this.sanadPedestal.position.z,f=-.52;let g=Math.atan2(u,d)-f;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;const x=Math.abs(g)>1.65?f:f+mt(g,-.75,.75);if(this.sanadActor.root.rotation.y=Ce(this.sanadActor.root.rotation.y,x,Math.min(1,a*4)),this.rainCloudGroup.visible&&(this.rainCloudGroup.position.y=5.15+Math.sin(i*(s?9:3))*(s?.12:.08),s)){const y=this.rainDropsMesh.geometry.attributes.position.array;for(let v=0;v<this.rainDropSeeds.length;v++){const T=this.rainDropSeeds[v];T.y-=T.speed*a,T.y<-5.1&&(T.y=-.2);const R=v*6;y[R]=T.x,y[R+1]=T.y,y[R+2]=T.z,y[R+3]=T.x,y[R+4]=T.y-.42,y[R+5]=T.z}if(this.rainDropsMesh.geometry.attributes.position.needsUpdate=!0,Math.random()<.45){const v=this.rainCloudGroup.position.x+(Math.random()-.5)*2,T=this.rainCloudGroup.position.z+(Math.random()-.5)*2;this.spawnWaterRipple(v,T)}}const _=this.rainCloudGroup.visible&&s&&this.nightBlend<.55?1:0;this.rainbowMix=Ce(this.rainbowMix,_,a*4.2),this.rainbowMesh.visible=this.rainbowMix>.02,this.rainbowMesh.visible&&(this.rainbowUniforms.uOpacity.value=this.rainbowMix);const m=this.nightBlend<.5&&(this.displayedWaterLevel>42||e.questId===3||e.questId===4&&t.flowerPollinated.some(Boolean));for(const y of this.butterflies){if(y.root.visible=m,!m)continue;y.angle+=y.speed*a;const v=y.radius+Math.sin(i*1.3+y.phase)*.65,T=Math.cos(y.angle)*v,R=Math.sin(y.angle)*v,S=Math.max(ge(T,R),this.waterMesh.position.y)+y.heightOff+Math.sin(i*3.8+y.phase)*.24;y.root.position.set(T,S,R),y.root.rotation.y=-y.angle+Math.PI*.5;const P=Math.sin(i*22+y.phase)*.85;y.leftWing.rotation.z=P,y.rightWing.rotation.z=-P}if(this.firefliesMesh.visible=this.nightBlend>.15,this.firefliesMesh.visible){const y=this.firefliesMesh.material;y.opacity=mt((this.nightBlend-.15)*1.15,0,.9)*(.75+.25*Math.sin(i*3.2));const v=this.firefliesMesh.geometry.attributes.position.array;for(let M=0;M<85;M++)v[M*3]=this.fireflyBasePos[M*3]+Math.sin(i*1.4+M)*.28,v[M*3+1]=this.fireflyBasePos[M*3+1]+Math.cos(i*1.9+M*.7)*.22,v[M*3+2]=this.fireflyBasePos[M*3+2]+Math.cos(i*1.2+M*1.3)*.28;this.firefliesMesh.geometry.attributes.position.needsUpdate=!0;const T=this.nightMeteorState,R=this.nightMeteorLine.material;if(!T.active)T.cooldown-=a,T.cooldown<=0&&(T.active=!0,T.life=0,T.maxLife=.75+Math.random()*.35,T.x=(Math.random()-.3)*45,T.y=32+Math.random()*18,T.z=-42-Math.random()*16,T.vx=(Math.random()>.5?-1:1)*(28+Math.random()*14),T.vy=-(12+Math.random()*6));else{T.life+=a;const M=T.life/T.maxLife;if(M>=1)T.active=!1,T.cooldown=3.2+Math.random()*4.5,R.opacity=0;else{T.x+=T.vx*a,T.y+=T.vy*a;const S=this.nightMeteorLine.geometry.attributes.position.array;S[0]=T.x,S[1]=T.y,S[2]=T.z,S[3]=T.x-T.vx*.12,S[4]=T.y-T.vy*.12,S[5]=T.z,this.nightMeteorLine.geometry.attributes.position.needsUpdate=!0,R.opacity=Math.sin(M*Math.PI)*.9*this.nightBlend}}}e.questCompleted&&this.lastCelebratedQuest!==e.questId?(this.lastCelebratedQuest=e.questId,this.spawnConfettiBurst(new I(this.sanadPedestal.position.x,this.sanadPedestal.position.y+2.1,this.sanadPedestal.position.z),34,!1),this.spawnHeartBurst(this.sanadPedestal.position.x,this.sanadPedestal.position.y+2.3,this.sanadPedestal.position.z,4)):!e.questCompleted&&this.lastCelebratedQuest===e.questId&&(this.lastCelebratedQuest=-1);for(let y=this.splashes.length-1;y>=0;y--){const v=this.splashes[y];v.age+=a*2.4,v.age>=1?(this.group.remove(v.mesh),v.mesh.geometry.dispose(),v.mesh.material.dispose(),this.splashes.splice(y,1)):(v.mesh.scale.setScalar(1+v.age*3.1),v.mesh.material.opacity=(1-v.age)*.8)}for(let y=this.particles.length-1;y>=0;y--){const v=this.particles[y];if(v.life+=a,v.life>=v.maxLife)this.group.remove(v.mesh),v.mesh.isMesh?(v.mesh.geometry.dispose(),v.mesh.material.dispose()):v.mesh.isSprite&&v.mesh.material.dispose(),this.particles.splice(y,1);else{v.riseFloat||(v.vy-=12.5*a),v.mesh.position.x+=v.vx*a,v.mesh.position.y+=v.vy*a,v.mesh.position.z+=v.vz*a;const T=v.life/v.maxLife;v.riseFloat&&v.mesh.isSprite?(v.mesh.material.opacity=1-T,v.mesh.scale.setScalar(.45+T*.35)):v.mesh.scale.setScalar(1-T)}}const E=new Set;for(const y of t.plants){E.add(y.id);let v=this.plantGroups.get(y.id);v||(v=this.vault.spawnProp(y.variant==="flowers"?"flowerGroup":"flowerBush",1),v.rotation.y=y.rotY,this.group.add(v),this.plantGroups.set(y.id,v));const T=ge(y.x,y.z)-.04;v.position.set(y.x,T,y.z);const R=y.spawnScale*(.32+y.health*.78);v.scale.setScalar(R)}for(const[y,v]of this.plantGroups.entries())E.has(y)||(this.group.remove(v),this.plantGroups.delete(y));const A=new Set;for(const y of t.rocks){A.add(y.id);let v=this.rockGroups.get(y.id);v||(v=this.vault.spawnProp(y.variant==="large"?"rockLarge":"rockMedium",1),v.rotation.y=y.rotY,this.group.add(v),this.rockGroups.set(y.id,v)),v.position.set(y.x,ge(y.x,y.z)-.06+y.y,y.z)}for(const[y,v]of this.rockGroups.entries())A.has(y)||(this.group.remove(v),this.rockGroups.delete(y));const p=new Set;this.selectionRing.visible=!1;for(const y of t.animals){p.add(y.id);let v=this.animalViews.get(y.id);if(!v){const xt=this.vault.spawnSkinned(y.kind,1),wt=new st(new Qt(.95,10,10),this.invisibleHitMat);wt.position.y=.85,wt.userData={hitType:"animal",index:y.id},xt.root.add(wt);const Y=new vo({map:this.getEmoteTexture("🌿"),transparent:!0}),J=new rc(Y);J.scale.setScalar(.62),J.position.set(0,1.95,0),J.visible=!1,xt.root.add(J),this.group.add(xt.root),v={actor:xt,hitSphere:wt,emoteSprite:J,lastEmote:null,dustCooldown:0,rippleCooldown:0,heartCooldown:0,visX:y.x,visZ:y.z,visRotY:y.rotY,visSpeed:0},this.animalViews.set(y.id,v)}const{actor:T,emoteSprite:R}=v,M=v.visX,S=v.visZ,P=Math.min(1,a*12);v.visX=Ce(v.visX,y.x,P),v.visZ=Ce(v.visZ,y.z,P);const O=v.visX-M,L=v.visZ-S,k=a>1e-4?Math.hypot(O,L)/a:0;v.visSpeed=Ce(v.visSpeed,k,Math.min(1,a*10));const W=v.visSpeed>.35?Math.atan2(O,L):y.rotY;v.visRotY=Aa(v.visRotY,W,a*9.5);const D=Math.max(ge(v.visX,v.visZ),this.waterMesh.position.y-.08),j=y.state==="dead"&&y.deathTimer>3.5?-(y.deathTimer-3.5)*.65:0;T.root.position.set(v.visX,D+y.y+j,v.visZ),T.root.rotation.y=v.visRotY;const q=y.maturity,nt=y.scaleBounce*q,it=(y.scaleBounce>.5?1/Math.sqrt(y.scaleBounce):1)*q;T.root.scale.set(it,nt,it),t.inspectedAnimalId===y.id&&y.state!=="dead"&&(this.selectionRing.visible=!0,this.selectionRing.position.set(v.visX,D+.05,v.visZ),this.selectionRing.scale.setScalar((.85+Math.sin(i*6)*.08)*q));const ft=typeof document<"u"&&document.body.classList.contains("cinema-mode");if(y.emote&&y.state!=="dead"&&!ft?(v.lastEmote!==y.emote&&(v.lastEmote=y.emote,R.material.map=this.getEmoteTexture(y.emote)),R.visible=!0,R.position.y=1.88+Math.sin(i*5.5+y.id)*.09):R.visible=!1,v.dustCooldown-=a,v.rippleCooldown-=a,v.heartCooldown-=a,(y.state==="chase"||y.state==="flee")&&v.dustCooldown<=0&&(v.dustCooldown=.22,this.spawnConfettiBurst(new I(v.visX,D+.12,v.visZ),2,!0)),y.state==="drink"&&v.rippleCooldown<=0){v.rippleCooldown=.65;const xt=v.visX+Math.sin(v.visRotY)*.65,wt=v.visZ+Math.cos(v.visRotY)*.65;this.spawnWaterRipple(xt,wt)}if(y.state==="mate"&&v.heartCooldown<=0&&(v.heartCooldown=.75,this.spawnHeartBurst(v.visX,D+1.4,v.visZ,1)),y.state==="dead")T.play("Death",!0,1.1);else if(y.state==="attack")T.play(y.kind==="deer"||y.kind==="stag"?"Attack_Headbutt":"Attack",!0,1.2);else if(y.state==="spar")T.play("Attack_Headbutt",!1,1.1);else if(y.state==="feast"||y.state==="eat"||y.state==="drink")T.play("Eating",!1,1);else if(y.state==="jump")T.play("Jump_toIdle",!0,1.05);else if(v.visSpeed>2.45||y.state==="chase"||y.state==="flee"||y.state==="gallop"){const xt=mt(v.visSpeed/3.2,.92,1.38);T.play("Gallop",!1,xt)}else if(v.visSpeed>.28||y.state==="walk"||y.state==="stalk"){const xt=mt(v.visSpeed/1.55,.85,1.35)*(y.maturity<.8?1.18:1);T.play("Walk",!1,xt)}else if(y.state==="droop"||y.state==="sleep")T.play("Idle_Headlow",!1,.72);else{const xt=Math.sin(i*.28+y.id*2.1)>.35;T.play(xt?"Idle_2":"Idle",!1,.95)}T.mixer.update(a)}for(const[y,v]of this.animalViews.entries())p.has(y)||(this.group.remove(v.actor.root),this.animalViews.delete(y));if(this.q3Group.visible=e.questId===3,this.q3Group.visible){this.q3Parrot.mixer.update(a);const y=i*1.35,v=-.3+Math.cos(y)*2.25,T=-2.1+Math.sin(y)*2.25;if(this.q3Parrot.root.position.set(v,4.55+Math.sin(i*3)*.2,T),this.q3Parrot.root.rotation.y=-y,e.logFlipped){this.q3LogRing.visible=!1,this.q3LogFlipProgress=Ce(this.q3LogFlipProgress,1,a*7),this.q3LogPivot.rotation.z=-this.q3LogFlipProgress*1.15,this.q3LogPivot.position.x=-3.9-this.q3LogFlipProgress*.85;for(const R of this.q3Woodlice){R.mesh.visible=!0,R.angle+=R.speed*a;const M=-3.65+Math.cos(R.angle)*R.radius,S=1.6+Math.sin(R.angle)*R.radius;R.mesh.position.set(M,ge(M,S)+.06,S),R.mesh.rotation.y=-R.angle}}else{this.q3LogFlipProgress=0;const R=Math.sin(i*26)*Math.max(0,Math.sin(i*2.4));this.q3LogPivot.rotation.z=R*.14,this.q3LogPivot.position.x=-3.9+R*.04,this.q3LogRing.visible=!0,this.q3LogRing.scale.setScalar(1+Math.sin(i*5)*.12);for(const M of this.q3Woodlice)M.mesh.visible=!1}}this.q4Group.visible=e.questId===4,this.q4Group.visible&&(this.q4Stag.mixer.update(a),t.tickAlive.forEach((y,v)=>{const T=this.q4TickMeshes[v];if(T.visible=y,y){const R=this.hoveredTickIndex===v,M=1+Math.sin(i*7.5+v*1.3)*.16;T.scale.setScalar(R?M*1.35:M)}}),e.ticksRemaining===0&&!this.q4CuredCelebrated?(this.q4CuredCelebrated=!0,this.q4Stag.play("Jump_toIdle",!0,1.05)):e.ticksRemaining>0&&(this.q4CuredCelebrated=!1,this.q4Stag.currentClip!=="Idle_HitReact_Left"&&this.q4Stag.play("Idle_Headlow",!1,.85)),this.q4Flowers.forEach((y,v)=>{const T=t.flowerPollinated[v];y.openMix=Ce(y.openMix,T?1:0,a*6),y.ring.visible=!T,y.ring.scale.setScalar(1+Math.sin(i*4.5+v)*.12);for(const M of y.petals)M.rotation.x=Ce(-.85,.18,y.openMix);const R=i*(T?4.2:2.1)+v*2;y.bee.position.set(Math.cos(R)*.42,1.28+Math.sin(i*8+v)*.08,Math.sin(R)*.42),y.bee.rotation.y=-R}),this.q4NestRing.visible=!e.commensalismBuilt,this.q4NestRing.lookAt(0,6,12),this.q4NestRing.scale.setScalar(1+Math.sin(i*5)*.15),this.q4BuiltNestGroup.visible=e.commensalismBuilt,e.commensalismBuilt&&this.q4NestParrot.mixer.update(a))}triggerQ4StagFlinch(){this.q4Stag.play("Idle_HitReact_Left",!0,1.3)}}class J_{constructor(t){N(this,"renderer");N(this,"camera");N(this,"controls");N(this,"globeScene",new _o);N(this,"sanctuaryScene",new _o);N(this,"globeStage");N(this,"sanctuaryStage");N(this,"stage","globe");N(this,"followCamActive",!1);N(this,"container");N(this,"composer");N(this,"renderPass");N(this,"bloomPass");N(this,"diveActive",!1);N(this,"diveTargetStage","sanctuary");N(this,"diveElapsed",0);N(this,"diveDuration",1.35);N(this,"diveSwapped",!1);N(this,"diveFromPos",new I);N(this,"diveToPos",new I);N(this,"diveFocusLat",25.38);N(this,"diveFocusLon",49.59);N(this,"onCloudVeilChange");N(this,"onStageChanged");N(this,"camTweenActive",!1);N(this,"camTweenElapsed",0);N(this,"camTweenFromPos",new I);N(this,"camTweenToPos",new I);N(this,"camTweenFromTarget",new I);N(this,"camTweenToTarget",new I);this.container=t;const e=t.clientWidth||window.innerWidth,n=t.clientHeight||window.innerHeight,i=Math.min(window.devicePixelRatio||1,2);this.renderer=new e0({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(i),this.renderer.setSize(e,n),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Hc,this.renderer.toneMapping=Co,this.renderer.toneMappingExposure=1.06,this.renderer.outputColorSpace=ye,t.appendChild(this.renderer.domElement);const s=new mo(this.renderer),a=s.fromScene(new k_,.04);this.sanctuaryScene.environment=a.texture,this.sanctuaryScene.environmentIntensity=.55,s.dispose(),this.globeScene.background=new gt(132631);const o=e/Math.max(1,n);this.camera=new Be(this.computeAdaptiveFov(o),o,.25,240),this.camera.position.copy(fi(22,46,o<.8?25.5:22.5)),this.controls=new A_(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.065,this.controls.rotateSpeed=.68,this.controls.zoomSpeed=.85,this.controls.screenSpacePanning=!1;const l=new nn(Math.max(1,Math.floor(e*i)),Math.max(1,Math.floor(n*i)),{samples:4,type:_n});this.composer=new X_(this.renderer,l),this.composer.setPixelRatio(i),this.composer.setSize(e,n),this.renderPass=new K_(this.globeScene,this.camera),this.composer.addPass(this.renderPass),this.bloomPass=new is(new dt(e*i,n*i),.16,.35,.88),this.composer.addPass(this.bloomPass),this.composer.addPass(new Y_),window.addEventListener("resize",()=>this.resize())}initStages(t,e,n){this.onCloudVeilChange=e,this.onStageChanged=n;const i=Math.min(16,this.renderer.capabilities.getMaxAnisotropy()||8);this.globeStage=new Z_(i),this.globeScene.add(this.globeStage.group),this.sanctuaryStage=new Q_(t),this.sanctuaryScene.add(this.sanctuaryStage.group),this.applyStageControls("globe")}applyStageControls(t,e=1){var n;if(this.stage=t,this.renderPass.scene=t==="globe"?this.globeScene:this.sanctuaryScene,t==="globe"){this.controls.enablePan=!1,this.controls.minDistance=15.8,this.controls.maxDistance=31,this.controls.maxPolarAngle=Math.PI*.85,this.controls.minPolarAngle=Math.PI*.15,this.controls.target.set(0,0,0);const i=Oe[e],s=this.camera.aspect<.8?24.8:21.5;this.camera.position.copy(fi(i.lat-3,i.lon-2,s)),this.bloomPass.strength=.24}else this.controls.enablePan=!0,this.controls.minDistance=7.5,this.controls.maxDistance=25.5,this.controls.maxPolarAngle=Math.PI*.455,this.controls.minPolarAngle=.28,this.frameSanctuaryForQuest(e,!0),this.bloomPass.strength=.15;this.controls.update(),(n=this.onStageChanged)==null||n.call(this,t)}enterSanctuaryImmediate(t=1){var e;this.diveActive=!1,this.camTweenActive=!1,this.applyStageControls("sanctuary",t),(e=this.onCloudVeilChange)==null||e.call(this,0)}frameSanctuaryForQuest(t,e=!1){let n=new I(.8,9.6,14.8),i=new I(.6,.7,.6);if(t===3?(n=new I(.4,8.8,13.8),i=new I(-.2,1.4,-.3)):t===4?(n=new I(.6,7.2,12.2),i=new I(.3,1.1,1.1)):t===2&&(n=new I(.8,10.4,15.8),i=new I(.5,.7,.5)),this.camera.aspect<.8){const s=n.clone().sub(i).multiplyScalar(1.18);n.copy(i).add(s)}e||this.stage!=="sanctuary"?(this.camera.position.copy(n),this.controls.target.copy(i),this.controls.update(),this.camTweenActive=!1):(this.camTweenFromPos.copy(this.camera.position),this.camTweenToPos.copy(n),this.camTweenFromTarget.copy(this.controls.target),this.camTweenToTarget.copy(i),this.camTweenElapsed=0,this.camTweenActive=!0)}diveToSanctuary(t,e=1.35){const n=Oe[t];if(this.diveFocusLat=n.lat,this.diveFocusLon=n.lon,this.stage==="sanctuary"&&!this.diveActive){this.frameSanctuaryForQuest(t,!1);return}this.diveActive=!0,this.diveTargetStage="sanctuary",this.diveElapsed=0,this.diveDuration=e,this.diveSwapped=!1,this.diveFromPos.copy(this.camera.position),this.diveToPos.copy(fi(this.diveFocusLat,this.diveFocusLon,13.4))}zoomOutToGlobe(t){if(this.stage==="globe"&&!this.diveActive)return;const e=Oe[t];this.diveFocusLat=e.lat,this.diveFocusLon=e.lon,this.diveActive=!0,this.diveTargetStage="globe",this.diveElapsed=0,this.diveDuration=1.05,this.diveSwapped=!1,this.diveFromPos.copy(this.camera.position),this.diveToPos.copy(this.camera.position).add(new I(0,9,6))}computeAdaptiveFov(t){return t<1?Math.min(64,40/Math.max(.55,Math.pow(t,.55))):40}resize(){const t=this.container.clientWidth||window.innerWidth,e=this.container.clientHeight||window.innerHeight,n=Math.min(window.devicePixelRatio||1,2),i=t/Math.max(1,e);this.camera.aspect=i,this.camera.fov=this.computeAdaptiveFov(i),this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(n),this.renderer.setSize(t,e),this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.bloomPass.resolution.set(t*n,e*n)}renderFrame(t,e,n,i,s,a){var h,u;const o=this.container.clientWidth||window.innerWidth,l=this.container.clientHeight||window.innerHeight;if(this.diveActive){this.diveElapsed+=s;const d=mt(this.diveElapsed/this.diveDuration,0,1),f=Math.pow(Math.sin(d*Math.PI),1.6);if((h=this.onCloudVeilChange)==null||h.call(this,f),d<.52){const g=d/.52,x=this.diveFromPos.length()+(this.diveToPos.length()-this.diveFromPos.length())*(g*g);this.camera.position.lerpVectors(this.diveFromPos,this.diveToPos,g*g),this.diveTargetStage==="sanctuary"&&(this.camera.position.lengthSq()<.01&&this.camera.position.set(0,14,0),this.camera.position.length()<13.2&&this.camera.position.setLength(Math.max(13.2,x)))}else this.diveSwapped||(this.diveSwapped=!0,this.applyStageControls(this.diveTargetStage,e.questId),this.diveTargetStage==="sanctuary"&&this.sanctuaryStage.triggerSanadMood("wave"));d>=1&&(this.diveActive=!1,(u=this.onCloudVeilChange)==null||u.call(this,0))}else if(this.camTweenActive&&this.stage==="sanctuary"){this.camTweenElapsed+=s;const d=mt(this.camTweenElapsed/.75,0,1),f=1-Math.pow(1-d,3);this.camera.position.lerpVectors(this.camTweenFromPos,this.camTweenToPos,f),this.controls.target.lerpVectors(this.camTweenFromTarget,this.camTweenToTarget,f),d>=1&&(this.camTweenActive=!1)}else if(this.followCamActive&&this.stage==="sanctuary"&&e.inspectedAnimal){const d=e.inspectedAnimal,g=new I(d.x,ge(d.x,d.z)+.85,d.z).clone().sub(this.controls.target).multiplyScalar(Math.min(1,s*5.5));this.controls.target.add(g),this.camera.position.add(g)}if(this.stage==="sanctuary"){this.controls.enabled=!(n==="rain"&&i),this.controls.update(),this.controls.target.x=mt(this.controls.target.x,-10.5,10.5),this.controls.target.z=mt(this.controls.target.z,-9.5,9.5),this.controls.target.y=mt(this.controls.target.y,-.3,4.5);const d=ge(this.camera.position.x,this.camera.position.z)+1.15;this.camera.position.y<d&&(this.camera.position.y=d)}else this.controls.enabled=!this.diveActive,this.controls.update();let c=[];return this.stage==="globe"?c=this.globeStage.update(s,a,this.camera,o,l,e.questId,t.completedQuests):this.sanctuaryStage.update(t,e,s,a,i),this.composer.render(),c}}const tv={idle:{ar:"👀 يراقب المحيط بهدوء",en:"👀 Alert & scanning surroundings"},walk:{ar:"🐾 يتجول في المحمية",en:"🐾 Roaming the sanctuary"},gallop:{ar:"💨 يركض برشاقة",en:"💨 Galloping across dunes"},stalk:{ar:"🎯 يتسلل بصمت نحو الفريسة!",en:"🎯 Stalking prey silently!"},chase:{ar:"🥩 يطارد الغزال بأقصى سرعة!",en:"🥩 High-speed hunt chase!"},flee:{ar:"😱 يهرب من المفترس نحو المأوى!",en:"😱 Fleeing predator to shelter!"},attack:{ar:"⚡ ينقضّ على الفريسة!",en:"⚡ Pouncing on prey!"},feast:{ar:"🍖 يتغذى على الفريسة ويشبع",en:"🍖 Feasting on catch"},drink:{ar:"💧 يشرب ويرتوي من ماء الواحة",en:"💧 Drinking at oasis shore"},eat:{ar:"🌿 يرعى أوراق الشجيرات",en:"🌿 Grazing on lush shrubs"},mate:{ar:"💕 تودد وتكاثر لإنجاب صغير!",en:"💕 Courting & reproducing!"},spar:{ar:"⚔️ يتناطح للتنافس على الغذاء!",en:"⚔️ Clashing over scarce food!"},droop:{ar:"🥵 منهك من العطش والجفاف",en:"🥵 Parched from oasis drought"},sleep:{ar:"💤 يستظل وينام في الجحر الصخري",en:"💤 Resting in cool rock shade"},dead:{ar:"🌱 يتحلل ليغذي التربة",en:"🌱 Returning nutrients to soil"},jump:{ar:"🎉 يقفز بحيوية ونشاط!",en:"🎉 Leaping joyfully!"}};class ev{constructor(t,e){N(this,"lang","ar");N(this,"stage","globe");N(this,"currentQuest",1);N(this,"customSanadSpeech",null);N(this,"customSpeechTimer",0);N(this,"loadingScreen");N(this,"loadingFill");N(this,"loadingSub");N(this,"cloudVeil");N(this,"stageToggleBtn");N(this,"skyToggleBtn");N(this,"speedBtn");N(this,"soundBtn");N(this,"langBtn");N(this,"resetBtn");N(this,"questStepBtns",new Map);N(this,"questHeadlineEl");N(this,"objectivesRowEl");N(this,"lastObjectivesSig","");N(this,"bottomBarEl");N(this,"sanadCardEl");N(this,"sanadBadgeEl");N(this,"sanadToggleBtn");N(this,"sanadVoiceBtn");N(this,"sanadSpeechEl");N(this,"sanadActionsEl");N(this,"sanadMobileCollapsed",typeof window<"u"&&window.innerWidth<=768);N(this,"lastQuestWinState",!1);N(this,"voicePlaying",!1);N(this,"lastSanadActionsSig","");N(this,"telemetryStripEl");N(this,"lastTelemetrySig","");N(this,"toyBtns",new Map);N(this,"inspectorEl");N(this,"inspTitleEl");N(this,"inspStateEl");N(this,"inspFullFill");N(this,"inspHydFill");N(this,"inspEngFill");N(this,"inspFullLbl");N(this,"inspHydLbl");N(this,"inspEngLbl");N(this,"inspFollowBtn");N(this,"globeOverlayEl");N(this,"globePinEls",new Map);N(this,"globeCtaEl");N(this,"diveHeroBtn");N(this,"popupsLayerEl");N(this,"quizBackdropEl");N(this,"quizBadgeEl");N(this,"quizQuestionEl");N(this,"quizOptionsEl");N(this,"quizFeedbackEl");N(this,"quizNextBtn");N(this,"cb");N(this,"pokeCounter",0);this.cb=e;const n=new URLSearchParams(window.location.search).get("lang");(n==="en"||n==="ar")&&(this.lang=n,document.documentElement.lang=this.lang,document.documentElement.dir=this.lang==="ar"?"rtl":"ltr"),this.buildDOM(t),this.refreshStaticLabels()}getLang(){return this.lang}setLoadingProgress(t,e){const n=Math.round(t/Math.max(1,e)*100);this.loadingFill.style.width=`${n}%`,this.loadingSub.textContent=this.lang==="ar"?`جاري تجهيز مجسمات المحمية السعودية ثلاثية الأبعاد (${t}/${e})...`:`Loading 3D Saudi Wildlife Models (${t}/${e})...`}hideLoadingScreen(){this.loadingScreen.classList.add("hidden")}setCloudVeilOpacity(t){this.cloudVeil.style.opacity=t.toFixed(3)}setStage(t){this.stage=t;const e=t==="globe";this.globeOverlayEl.style.display=e?"block":"none",this.globeCtaEl.style.display=e?"flex":"none",this.bottomBarEl.style.display=e?"none":"flex",this.objectivesRowEl.style.display=e?"none":"flex",e&&this.inspectorEl.classList.add("hidden"),this.refreshTopUtilityButtons(!1)}setActiveTool(t){for(const[e,n]of this.toyBtns.entries())n.classList.toggle("active",e===t)}setFollowCamVisual(t){this.inspFollowBtn.classList.toggle("active",t),this.inspFollowBtn.textContent=t?this.lang==="ar"?"🎥 جاري التتبّع المباشر (إيقاف)":"🎥 Following Live (Stop)":this.lang==="ar"?"🎥 تتبّع الكاميرا عن قرب":"🎥 Follow with Camera"}setVoicePlaying(t){this.voicePlaying=t,this.sanadVoiceBtn&&(this.sanadVoiceBtn.classList.toggle("speaking",t),this.refreshVoiceBtnLabel())}refreshVoiceBtnLabel(){if(!this.sanadVoiceBtn)return;const t=this.voicePlaying?this.lang==="ar"?"إيقاف الشرح":"Pause Guide":this.lang==="ar"?"استمع للشرح":"Audio Guide";this.sanadVoiceBtn.innerHTML=`<span class="sanad-wave"><i></i><i></i><i></i></span><span>${t}</span>`}showSanadQuip(t,e=4.2){this.customSanadSpeech=t,this.customSpeechTimer=e,this.sanadSpeechEl.textContent=t,this.sanadMobileCollapsed&&(this.sanadMobileCollapsed=!1,this.syncSanadCollapseUI())}syncSanadCollapseUI(){this.sanadCardEl&&(this.sanadCardEl.classList.toggle("mobile-collapsed",this.sanadMobileCollapsed),this.sanadToggleBtn&&(this.sanadToggleBtn.textContent=this.sanadMobileCollapsed?this.lang==="ar"?"الشرح ▴":"Guide ▴":"✕"))}triggerPokeQuip(){const t=Rc[this.pokeCounter%Rc.length];this.pokeCounter++,this.showSanadQuip(t[this.lang],4)}buildDOM(t){this.loadingScreen=document.createElement("div"),this.loadingScreen.className="loading-screen",this.loadingScreen.innerHTML=`
      <div class="loading-logo">🤖🦌🐺</div>
      <div class="loading-title">مغامرة سَند البيئية · المملكة العربية السعودية</div>
      <div class="loading-bar-track"><div class="loading-bar-fill"></div></div>
      <div class="loading-sub">جاري التحميل...</div>
    `,this.loadingFill=this.loadingScreen.querySelector(".loading-bar-fill"),this.loadingSub=this.loadingScreen.querySelector(".loading-sub"),this.cloudVeil=document.createElement("div"),this.cloudVeil.className="cloud-veil",this.globeOverlayEl=document.createElement("div"),this.globeOverlayEl.className="globe-overlay",[1,2,3,4,5].forEach(d=>{const f=document.createElement("button");f.className="globe-pin",f.style.setProperty("--pin-color",Oe[d].accentColor),f.addEventListener("click",()=>{this.cb.onSelectQuest(d)}),this.globeOverlayEl.appendChild(f),this.globePinEls.set(d,f)}),this.globeCtaEl=document.createElement("div"),this.globeCtaEl.className="globe-cta-banner",this.diveHeroBtn=document.createElement("button"),this.diveHeroBtn.className="dive-hero-btn",this.diveHeroBtn.addEventListener("click",()=>this.cb.onDiveFromGlobe()),this.globeCtaEl.appendChild(this.diveHeroBtn),this.popupsLayerEl=document.createElement("div"),this.popupsLayerEl.className="popups-layer",this.inspectorEl=document.createElement("div"),this.inspectorEl.className="animal-inspector hidden",this.inspectorEl.innerHTML=`
      <div class="insp-top">
        <span class="insp-title"></span>
        <button class="insp-close">✕</button>
      </div>
      <div class="insp-state"></div>
      <div class="insp-bars">
        <div class="insp-bar-row">
          <span class="insp-bar-label lbl-full"></span>
          <div class="insp-bar-track"><div class="insp-bar-fill fill-full" style="background:#34d399"></div></div>
        </div>
        <div class="insp-bar-row">
          <span class="insp-bar-label lbl-hyd"></span>
          <div class="insp-bar-track"><div class="insp-bar-fill fill-hyd" style="background:#38bdf8"></div></div>
        </div>
        <div class="insp-bar-row">
          <span class="insp-bar-label lbl-eng"></span>
          <div class="insp-bar-track"><div class="insp-bar-fill fill-eng" style="background:#facc15"></div></div>
        </div>
      </div>
      <button class="insp-follow-btn"></button>
    `,this.inspTitleEl=this.inspectorEl.querySelector(".insp-title"),this.inspStateEl=this.inspectorEl.querySelector(".insp-state"),this.inspFullFill=this.inspectorEl.querySelector(".fill-full"),this.inspHydFill=this.inspectorEl.querySelector(".fill-hyd"),this.inspEngFill=this.inspectorEl.querySelector(".fill-eng"),this.inspFullLbl=this.inspectorEl.querySelector(".lbl-full"),this.inspHydLbl=this.inspectorEl.querySelector(".lbl-hyd"),this.inspEngLbl=this.inspectorEl.querySelector(".lbl-eng"),this.inspFollowBtn=this.inspectorEl.querySelector(".insp-follow-btn"),this.inspectorEl.querySelector(".insp-close").addEventListener("click",()=>{this.cb.onCloseInspector()}),this.inspFollowBtn.addEventListener("click",()=>{const d=this.cb.onToggleFollowCam();this.setFollowCamVisual(d)});const e=document.createElement("div");e.className="hud-layer";const n=document.createElement("div");n.className="top-bar";const i=document.createElement("div");i.className="brand-cluster",this.stageToggleBtn=document.createElement("button"),this.stageToggleBtn.className="pill-btn globe-toggle",this.stageToggleBtn.addEventListener("click",()=>this.cb.onToggleStage()),this.skyToggleBtn=document.createElement("button"),this.skyToggleBtn.className="pill-btn",this.skyToggleBtn.addEventListener("click",()=>this.cb.onToggleNight()),i.append(this.stageToggleBtn,this.skyToggleBtn);const s=document.createElement("div");s.className="quest-center-hub";const a=document.createElement("div");a.className="quest-stepper",[1,2,3,4,5].forEach(d=>{const f=document.createElement("button");f.className="quest-step-btn",f.addEventListener("click",()=>this.cb.onSelectQuest(d)),a.appendChild(f),this.questStepBtns.set(d,f)}),this.questHeadlineEl=document.createElement("div"),this.questHeadlineEl.className="quest-headline",this.objectivesRowEl=document.createElement("div"),this.objectivesRowEl.className="objectives-row",s.append(a,this.questHeadlineEl,this.objectivesRowEl);const o=document.createElement("div");o.className="utility-cluster",this.speedBtn=document.createElement("button"),this.speedBtn.className="pill-btn",this.speedBtn.textContent="⏩ 1x",this.speedBtn.addEventListener("click",()=>{const d=this.cb.onToggleSpeed();this.speedBtn.textContent=`⏩ ${d}x`,this.speedBtn.classList.toggle("speed-active",d>1)}),this.resetBtn=document.createElement("button"),this.resetBtn.className="pill-btn",this.resetBtn.addEventListener("click",()=>this.cb.onResetQuest()),this.soundBtn=document.createElement("button"),this.soundBtn.className="pill-btn",this.soundBtn.textContent="🔊",this.soundBtn.addEventListener("click",()=>{const d=this.cb.onToggleSound();this.soundBtn.textContent=d?"🔊":"🔇"}),this.langBtn=document.createElement("button"),this.langBtn.className="pill-btn",this.langBtn.addEventListener("click",()=>{var d,f;this.lang=this.lang==="ar"?"en":"ar",document.documentElement.lang=this.lang,document.documentElement.dir=this.lang==="ar"?"rtl":"ltr",this.customSanadSpeech=null,this.lastObjectivesSig="",this.lastTelemetrySig="",this.lastSanadActionsSig="",this.refreshStaticLabels(),(f=(d=this.cb).onLangChange)==null||f.call(d,this.lang)}),o.append(this.speedBtn,this.resetBtn,this.soundBtn,this.langBtn),n.append(i,s,o),this.bottomBarEl=document.createElement("div"),this.bottomBarEl.className="bottom-bar",this.sanadCardEl=document.createElement("div"),this.sanadCardEl.className="sanad-card",this.sanadCardEl.innerHTML=`
      <div class="sanad-header">
        <span class="sanad-badge"></span>
        <div class="sanad-header-btns">
          <button type="button" class="sanad-voice-btn"></button>
          <button type="button" class="sanad-toggle-btn"></button>
        </div>
      </div>
      <div class="sanad-speech"></div>
      <div class="sanad-actions"></div>
    `,this.sanadBadgeEl=this.sanadCardEl.querySelector(".sanad-badge"),this.sanadToggleBtn=this.sanadCardEl.querySelector(".sanad-toggle-btn"),this.sanadVoiceBtn=this.sanadCardEl.querySelector(".sanad-voice-btn"),this.sanadVoiceBtn.addEventListener("click",d=>{var f,g;d.stopPropagation(),(g=(f=this.cb).onReplayVoice)==null||g.call(f)});const l=()=>{this.sanadMobileCollapsed=!this.sanadMobileCollapsed,this.syncSanadCollapseUI()};this.sanadBadgeEl.addEventListener("click",l),this.sanadToggleBtn.addEventListener("click",l),this.sanadSpeechEl=this.sanadCardEl.querySelector(".sanad-speech"),this.sanadActionsEl=this.sanadCardEl.querySelector(".sanad-actions"),this.syncSanadCollapseUI();const c=document.createElement("div");c.className="dock-wrapper",this.telemetryStripEl=document.createElement("div"),this.telemetryStripEl.className="telemetry-strip";const h=document.createElement("div");h.className="toy-dock";for(const d of Cc){const f=document.createElement("button");f.className="toy-btn",f.dataset.tool=d.id,f.innerHTML=`<span class="toy-icon">${d.icon}</span><span class="toy-label"></span>`,f.addEventListener("click",()=>this.cb.onSelectTool(d.id)),h.appendChild(f),this.toyBtns.set(d.id,f)}c.append(this.telemetryStripEl,h),this.bottomBarEl.append(this.sanadCardEl,c),e.append(n,this.bottomBarEl),this.quizBackdropEl=document.createElement("div"),this.quizBackdropEl.className="quiz-backdrop hidden",this.quizBackdropEl.innerHTML=`
      <div class="quiz-modal">
        <div class="quiz-badge"></div>
        <div class="quiz-question"></div>
        <div class="quiz-options"></div>
        <div class="quiz-feedback"></div>
        <div class="quiz-footer">
          <button class="action-btn secondary-glass quiz-close-btn"></button>
          <button class="action-btn primary-gold quiz-next-btn"></button>
        </div>
      </div>
    `,this.quizBadgeEl=this.quizBackdropEl.querySelector(".quiz-badge"),this.quizQuestionEl=this.quizBackdropEl.querySelector(".quiz-question"),this.quizOptionsEl=this.quizBackdropEl.querySelector(".quiz-options"),this.quizFeedbackEl=this.quizBackdropEl.querySelector(".quiz-feedback"),this.quizNextBtn=this.quizBackdropEl.querySelector(".quiz-next-btn"),this.quizBackdropEl.querySelector(".quiz-close-btn").addEventListener("click",()=>{this.quizBackdropEl.classList.add("hidden")}),this.quizNextBtn.addEventListener("click",()=>{if(this.quizBackdropEl.classList.add("hidden"),this.currentQuest<5){const d=this.currentQuest+1;this.cb.onSelectQuest(d)}else this.showSanadQuip(this.lang==="ar"?"🎉 صندوق الألعاب البيئي مفتوح لك! جرّب إطلاق الكائنات أو تصفّح خريطة الكرة الأرضية!":"🎉 Free Eco-Toybox unlocked! Spawn wildlife freely or explore the 3D Earth Map!",6)}),t.append(this.loadingScreen,this.cloudVeil,this.globeOverlayEl,this.globeCtaEl,this.popupsLayerEl,this.inspectorEl,e,this.quizBackdropEl)}refreshTopUtilityButtons(t){const e=typeof window<"u"&&window.innerWidth<=768;this.stage==="globe"?this.stageToggleBtn.textContent=e?this.lang==="ar"?"🏝️ المحمية":"🏝️ Dive":this.lang==="ar"?"🏝️ اهبط للمحمية ثلاثية الأبعاد":"🏝️ Dive to 3D Sanctuary":this.stageToggleBtn.textContent=e?this.lang==="ar"?"🌍 الأرض":"🌍 Earth":this.lang==="ar"?"🌍 خريطة الكرة الأرضية":"🌍 3D Earth Map",this.skyToggleBtn.classList.toggle("sky-night",t),this.skyToggleBtn.textContent=t?e?this.lang==="ar"?"🌙 ليل":"🌙 Night":this.lang==="ar"?"🌙 ليل صحراوي (اضغط للنهار)":"🌙 Arabian Night":e?this.lang==="ar"?"☀️ نهار":"☀️ Day":this.lang==="ar"?"☀️ شمس النهار (اضغط لليل)":"☀️ Sunny Day"}refreshStaticLabels(){const t=typeof window<"u"&&window.innerWidth<=768;this.langBtn.textContent=this.lang==="ar"?"EN":"عربي",this.resetBtn.textContent=t?"🔄":this.lang==="ar"?"🔄 إعادة":"🔄 Reset",this.sanadBadgeEl.textContent=t?this.lang==="ar"?"🤖 سَند":"🤖 Sanad":this.lang==="ar"?"🤖 سَند — الدليل العلمي":"🤖 Sanad — Field Guide",this.syncSanadCollapseUI(),this.refreshVoiceBtnLabel(),this.inspFullLbl.textContent=this.lang==="ar"?"الشبع":"Fullness",this.inspHydLbl.textContent=this.lang==="ar"?"الارتواء":"Hydration",this.inspEngLbl.textContent=this.lang==="ar"?"الطاقة":"Energy",this.setFollowCamVisual(this.inspFollowBtn.classList.contains("active"));for(const n of Cc){const i=this.toyBtns.get(n.id);i.querySelector(".toy-label").textContent=n.label[this.lang],i.title=n.hint[this.lang]}const e=this.quizBackdropEl.querySelector(".quiz-close-btn");e.textContent=this.lang==="ar"?"البقاء في المرحلة":"Keep Playing",this.diveHeroBtn.textContent=this.lang==="ar"?`🚀 اهبط إلى ${Oe[this.currentQuest].regionName.ar} وابدأ اللعب!`:`🚀 Dive into ${Oe[this.currentQuest].regionName.en} & Play!`}renderInspector(t){if(!t||this.stage!=="sanctuary"){this.inspectorEl.classList.add("hidden");return}this.inspectorEl.classList.remove("hidden");const n={deer:{ar:"🦌 غزال الريم العربي",en:"🦌 Arabian Gazelle",babyAr:"🦌 خشف غزال رضيع",babyEn:"🦌 Baby Gazelle Fawn"},stag:{ar:"🦌 المها العربي (وعل)",en:"🦌 Arabian Oryx Stag",babyAr:"🦌 عجل مها صغير",babyEn:"🦌 Young Oryx Calf"},wolf:{ar:"🐺 الذئب العربي المفترس",en:"🐺 Arabian Wolf",babyAr:"🐺 جرو ذئب صغير",babyEn:"🐺 Baby Wolf Pup"},fox:{ar:"🦊 ثعلب الرمال الصحراوي",en:"🦊 Arabian Sand Fox",babyAr:"🦊 جرو ثعلب صغير",babyEn:"🦊 Baby Fox Kit"}}[t.kind];this.inspTitleEl.textContent=t.isBaby?this.lang==="ar"?n.babyAr:n.babyEn:this.lang==="ar"?n.ar:n.en,this.inspStateEl.textContent=tv[t.state][this.lang],this.inspFullFill.style.width=`${t.fullnessPct}%`,this.inspHydFill.style.width=`${t.hydrationPct}%`,this.inspEngFill.style.width=`${t.energyPct}%`}openQuizModal(t){const e=Oe[t];this.quizBadgeEl.textContent=`${e.textbookPages[this.lang]} · ${e.regionName[this.lang]}`,this.quizQuestionEl.textContent=e.quiz.question[this.lang],this.quizFeedbackEl.textContent="",this.quizOptionsEl.innerHTML="",e.quiz.options.forEach((n,i)=>{const s=document.createElement("button");s.className="quiz-opt-btn",s.textContent=n[this.lang],s.addEventListener("click",()=>{this.quizOptionsEl.querySelectorAll(".quiz-opt-btn").forEach(o=>o.classList.remove("correct","wrong")),i===e.quiz.correctIndex?(s.classList.add("correct"),this.quizFeedbackEl.textContent=`✅ ${e.quiz.explanation[this.lang]}`,this.quizFeedbackEl.style.color="#6ee7b7"):(s.classList.add("wrong"),this.quizFeedbackEl.textContent=this.lang==="ar"?"🤔 فكّر في العلاقة البيئية التي جرّبتها للتو وجرّب خياراً آخر!":"🤔 Think about what just happened in the sanctuary and try again!",this.quizFeedbackEl.style.color="#fda4af")}),this.quizOptionsEl.appendChild(s)}),this.quizNextBtn.textContent=t<5?this.lang==="ar"?`انطلق للمهمة ${t+1}! →`:`Next Quest (${t+1}/5) →`:this.lang==="ar"?"🎉 استكشف الكرة الأرضية والمختبر الحر!":"🎉 Explore Free Toybox!",this.quizBackdropEl.classList.remove("hidden")}updateFrame(t,e,n,i,s,a,o,l){this.currentQuest=t.questId;const c=Oe[t.questId];this.refreshTopUtilityButtons(t.isNight),this.renderInspector(t.inspectedAnimal),[1,2,3,4,5].forEach(m=>{const E=this.questStepBtns.get(m),A=e.has(m);E.classList.toggle("active",m===t.questId),E.classList.toggle("done",A);const p=this.lang==="ar"?`${A?"✓ ":""}مهمة ${m}`:`${A?"✓ ":""}Quest ${m}`;E.textContent!==p&&(E.textContent=p)});const u=`<span>${`📍 ${c.regionName[this.lang]} — ${c.title[this.lang]}`}</span><span class="concept-tag">· ${c.conceptBadge[this.lang]}</span>`;this.questHeadlineEl.innerHTML!==u&&(this.questHeadlineEl.innerHTML=u,this.diveHeroBtn.textContent=this.lang==="ar"?`🚀 اهبط إلى ${c.regionName.ar} وابدأ اللعب!`:`🚀 Dive into ${c.regionName.en} & Play!`);const d=this.lang+"|"+t.questId+"|"+t.objectives.map(m=>`${m.id}:${m.displayValue}:${m.done}`).join(",");d!==this.lastObjectivesSig&&(this.lastObjectivesSig=d,this.objectivesRowEl.innerHTML=t.objectives.map(m=>`
          <div class="objective-pill ${m.done?"done":""}">
            <span>${m.done?"✅":m.icon}</span>
            <span>${m.label[this.lang]}</span>
            <span class="obj-badge">${m.displayValue}</span>
          </div>
        `).join(""));const f=`${this.lang}|${t.waterLevel}|${t.temperatureC}|${t.herbivoreCount}|${t.babyCount}|${t.carryingCapacityK}|${t.wolfCount}|${t.foxCount}|${t.totalBirths}|${t.totalHunts}|${t.isOverCapacity}`;if(f!==this.lastTelemetrySig){this.lastTelemetrySig=f;const m=this.lang==="ar"?`🦌 القطيع ${t.herbivoreCount} / السعة K=${t.carryingCapacityK}`:`🦌 Herd ${t.herbivoreCount} / Cap K=${t.carryingCapacityK}`,E=this.lang==="ar"?`💕 مواليد ${t.totalBirths}`:`💕 Births ${t.totalBirths}`,A=this.lang==="ar"?`🥩 افتراس ${t.totalHunts}`:`🥩 Hunts ${t.totalHunts}`;this.telemetryStripEl.innerHTML=`
        <span class="telemetry-item">💧 ${t.waterLevel}%</span>
        <span class="telemetry-item">🌡️ ${t.temperatureC}°C</span>
        <span class="telemetry-item ${t.isOverCapacity?"danger":""}">${m}</span>
        <span class="telemetry-item">🐺 ${t.wolfCount} · 🦊 ${t.foxCount}</span>
        <span class="telemetry-item">${E}</span>
        <span class="telemetry-item">${A}</span>
      `}this.customSpeechTimer>0&&(this.customSpeechTimer-=l,this.customSpeechTimer<=0&&(this.customSanadSpeech=null));const g=t.questCompleted?c.winSpeech[this.lang]:c.introSpeech[this.lang],x=this.customSanadSpeech||g;this.sanadSpeechEl.textContent!==x&&(this.sanadSpeechEl.textContent=x);const _=`${this.lang}|${t.questId}|${t.questCompleted}`;if(t.questCompleted&&!this.lastQuestWinState&&(this.sanadMobileCollapsed=!1,this.syncSanadCollapseUI()),this.lastQuestWinState=t.questCompleted,this.lastSanadActionsSig!==_)if(this.lastSanadActionsSig=_,this.sanadCardEl.classList.toggle("win-state",t.questCompleted),this.sanadActionsEl.innerHTML="",t.questCompleted){const m=t.questId,E=document.createElement("button");if(E.className="action-btn primary-gold",E.textContent=this.lang==="ar"?"🎯 سؤال التحدي والمرحلة التالية! →":"🎯 Quick Quiz & Next Quest! →",E.addEventListener("click",()=>this.openQuizModal(m)),this.sanadActionsEl.appendChild(E),m<5){const A=document.createElement("button");A.className="action-btn secondary-glass",A.textContent=this.lang==="ar"?`مهمة ${m+1} ⏭️`:`Quest ${m+1} ⏭️`,A.addEventListener("click",()=>this.cb.onSelectQuest(m+1)),this.sanadActionsEl.appendChild(A)}}else{const m=document.createElement("button");m.className="action-btn secondary-glass",m.textContent=this.lang==="ar"?"📖 معلومة الكتاب السريعة":"📖 Textbook Tip",m.addEventListener("click",()=>{this.showSanadQuip(`📘 ${c.scienceTakeaway[this.lang]}`,6.5)}),this.sanadActionsEl.appendChild(m)}if(this.stage==="globe")for(const m of n){const E=this.globePinEls.get(m.questId);if(!m.visible){E.style.display="none";continue}E.style.display="inline-flex",E.style.left=`${m.x.toFixed(1)}px`,E.style.top=`${m.y.toFixed(1)}px`,E.classList.toggle("active",m.active);const A=`${m.completed?"✅":"📍"} ${m.code} · ${m.regionName[this.lang]}`;E.textContent!==A&&(E.textContent=A)}for(;i.length>0;){const m=i.shift();if(this.stage!=="sanctuary")continue;const E=new I(m.worldX,m.worldY,m.worldZ).project(s);if(E.z>=1)continue;const A=(E.x*.5+.5)*a,p=(-E.y*.5+.5)*o,y=document.createElement("div");y.className="world-popup",y.style.left=`${A.toFixed(0)}px`,y.style.top=`${p.toFixed(0)}px`,y.style.color=m.color,y.textContent=m.text[this.lang],this.popupsLayerEl.appendChild(y),setTimeout(()=>y.remove(),1300)}}}async function nv(){const r=document.getElementById("app");r.innerHTML="";const t=document.createElement("div");t.id="canvas-stage",r.appendChild(t);const e=new H0,n=new G0,i=new E_,s=new J_(t);let a=Oe[1].defaultTool,o=!1,l=1,c={x:0,y:0};const h=new dt(0,0);let u=new I(0,0,0);const d=L=>{var k;e.ensureUnlocked(),e.playPopSpawn(1.1),s.followCamActive=!1,f.setFollowCamVisual(!1),n.loadQuest(L),a=Oe[L].defaultTool,f.setActiveTool(a),s.stage==="globe"?s.diveToSanctuary(L,1.25):(s.frameSanctuaryForQuest(L,!1),(k=s.sanctuaryStage)==null||k.triggerSanadMood("wave")),e.playVoiceOver(`./voices/${f.getLang()}/quest-${L}-intro.mp3`)},f=new ev(r,{onSelectQuest:L=>d(L),onSelectTool:L=>{e.ensureUnlocked(),e.playPopSpawn(1.2),a=L,f.setActiveTool(L)},onToggleStage:()=>{e.ensureUnlocked(),e.playPopSpawn(.95),s.followCamActive=!1,f.setFollowCamVisual(!1),s.stage==="sanctuary"?(o=!1,e.setRainingSound(!1),s.zoomOutToGlobe(n.questId)):s.diveToSanctuary(n.questId,1.25)},onDiveFromGlobe:()=>{e.ensureUnlocked(),e.playPopSpawn(1.15),s.diveToSanctuary(n.questId,1.25);const L=n.completedQuests.has(n.questId)?"win":"intro";e.playVoiceOver(`./voices/${f.getLang()}/quest-${n.questId}-${L}.mp3`)},onToggleNight:()=>{var L;e.ensureUnlocked(),e.playPopSpawn(n.isNight?1.25:.85),n.setNightMode(!n.isNight),(L=s.sanctuaryStage)==null||L.triggerSanadMood("happy")},onToggleSpeed:()=>(e.ensureUnlocked(),e.playPopSpawn(1.3),l=l===1?2:l===2?3:1,l),onToggleSound:()=>e.toggleMute(),onResetQuest:()=>{var L;e.ensureUnlocked(),e.playPopSpawn(.9),s.followCamActive=!1,f.setFollowCamVisual(!1),n.completedQuests.delete(n.questId),n.loadQuest(n.questId),a=Oe[n.questId].defaultTool,f.setActiveTool(a),(L=s.sanctuaryStage)==null||L.triggerSanadMood("wave"),e.playVoiceOver(`./voices/${f.getLang()}/quest-${n.questId}-intro.mp3`)},onCloseInspector:()=>{n.selectAnimal(null),s.followCamActive=!1,f.setFollowCamVisual(!1)},onToggleFollowCam:()=>(s.followCamActive=!s.followCamActive,s.followCamActive),onReplayVoice:()=>{e.replayVoiceOver()},onLangChange:L=>{const k=n.completedQuests.has(n.questId)?"win":"intro";e.playVoiceOver(`./voices/${L}/quest-${n.questId}-${k}.mp3`)}});e.setVoiceStateListener(L=>f.setVoicePlaying(L)),f.setActiveTool(a),await i.loadAll(s.renderer,(L,k)=>{f.setLoadingProgress(L,k)});const g=new URLSearchParams(window.location.search),x=g.get("cinema")==="1",_=g.get("module")||"",m=Number(_.replace("quest-","")),E=m>=1&&m<=5?m:null;x&&document.body.classList.add("cinema-mode"),s.initStages(i,L=>f.setCloudVeilOpacity(L),L=>f.setStage(L)),x?(n.loadQuest(1),n.waterLevel=32,s.enterSanctuaryImmediate(1),f.setStage("sanctuary"),f.hideLoadingScreen()):E!==null?(n.loadQuest(E),a=Oe[E].defaultTool,f.setActiveTool(a),s.enterSanctuaryImmediate(E),f.setStage("sanctuary"),f.hideLoadingScreen(),e.playVoiceOver(`./voices/${f.getLang()}/quest-${E}-intro.mp3`)):(f.setStage(s.stage),f.hideLoadingScreen(),setTimeout(()=>{s.stage==="globe"&&(s.diveToSanctuary(1,1.45),e.playVoiceOver(`./voices/${f.getLang()}/quest-1-intro.mp3`))},950));const A=s.renderer.domElement,p=L=>{const k=A.getBoundingClientRect();if(h.x=(L.clientX-k.left)/k.width*2-1,h.y=-((L.clientY-k.top)/k.height)*2+1,s.stage!=="sanctuary")return null;const W=s.sanctuaryStage.raycastScene(h,s.camera,n.questId,a,n);return W?(u=W.point,A.style.cursor=W.hitType!=="ground"?"pointer":a==="rain"?"crosshair":"default"):A.style.cursor="grab",W};A.style.touchAction="none",A.addEventListener("pointermove",L=>{const k=p(L);s.stage==="sanctuary"&&s.sanctuaryStage.setCursorState(k?k.point:u,a,o)}),A.addEventListener("pointerdown",L=>{e.ensureUnlocked(),c={x:L.clientX,y:L.clientY};const k=p(L);s.stage==="sanctuary"&&L.button===0&&a==="rain"&&k&&(k.hitType==="ground"||k.hitType==="animal")&&(o=!0,s.controls.enabled=!1,e.setRainingSound(!0),s.sanctuaryStage.setCursorState(k.point,a,!0))},{capture:!0});const y=()=>{o&&(o=!1,e.setRainingSound(!1),s.sanctuaryStage.setCursorState(u,a,!1),s.stage==="sanctuary"&&(s.controls.enabled=!0))};window.addEventListener("pointercancel",y),window.addEventListener("pointerup",L=>{if(y(),s.stage!=="sanctuary"||L.button!==0||L.target!==A)return;const k=Math.hypot(L.clientX-c.x,L.clientY-c.y),W=L.pointerType==="touch"?24:10;if(k>W)return;const D=p(L);if(D){if(D.hitType==="sanad"){e.playBotVoice("laugh"),s.sanctuaryStage.triggerSanadMood(Math.random()>.45?"dance":"happy"),s.sanctuaryStage.spawnConfettiBurst(D.point,18,!1),f.triggerPokeQuip();return}if(D.hitType==="log"){n.flipDecomposerLog()&&(e.playPopSpawn(.8),e.playBotVoice("surprise"),s.sanctuaryStage.triggerSanadMood("happy"),s.sanctuaryStage.spawnConfettiBurst(D.point,16,!0));return}if(D.hitType==="canopy"){n.inspectCanopyNiche(),e.playPopSpawn(1.35),s.sanctuaryStage.triggerSanadMood("thumbsup"),s.sanctuaryStage.spawnConfettiBurst(D.point,14,!1);return}if(D.hitType==="shore"){n.inspectShoreNiche(),e.playPopSpawn(1.15),s.sanctuaryStage.triggerSanadMood("thumbsup"),s.sanctuaryStage.spawnConfettiBurst(D.point,14,!1);return}if(D.hitType==="tick"&&D.index!==void 0){const j=n.popParasiteTick(D.index,D.point.x,D.point.y,D.point.z);j>0&&(e.playTickPop(j),s.sanctuaryStage.triggerQ4StagFlinch(),s.sanctuaryStage.spawnConfettiBurst(D.point,20,!1),j===6&&(e.playBotVoice("happy"),s.sanctuaryStage.triggerSanadMood("dance")));return}if(D.hitType==="flower"&&D.index!==void 0){n.pollinateGiantFlower(D.index,D.point.x,D.point.y,D.point.z)&&(e.playPopSpawn(1.4),s.sanctuaryStage.triggerSanadMood("thumbsup"),s.sanctuaryStage.spawnConfettiBurst(D.point,18,!1));return}if(D.hitType==="nest"){n.buildCommensalNest(D.point.x,D.point.y,D.point.z)&&(e.playPopSpawn(1.25),s.sanctuaryStage.triggerSanadMood("happy"),s.sanctuaryStage.spawnConfettiBurst(D.point,18,!1));return}if(D.hitType==="animal"&&D.index!==void 0&&a==="hand"){n.selectAnimal(D.index),e.playPopSpawn(1.3);return}(D.hitType==="ground"||D.hitType==="animal")&&(a==="plant"?n.userPlantShrub(D.point.x,D.point.z)&&(e.playPopSpawn(1.3),s.sanctuaryStage.spawnConfettiBurst(D.point,10,!1)):a==="gazelle"?n.userDropAnimal("deer",D.point.x,D.point.z)&&(e.playPopSpawn(1.05),s.sanctuaryStage.spawnConfettiBurst(D.point,12,!0)):a==="wolf"?n.userDropAnimal("wolf",D.point.x,D.point.z)&&(e.playPopSpawn(.75),s.sanctuaryStage.spawnConfettiBurst(D.point,12,!0)):a==="fox"?n.userDropAnimal("fox",D.point.x,D.point.z)&&(e.playPopSpawn(1.18),s.sanctuaryStage.spawnConfettiBurst(D.point,12,!0)):a==="rock"?n.userDropRock(D.point.x,D.point.z)&&(e.playPopSpawn(.65),s.sanctuaryStage.spawnConfettiBurst(D.point,14,!0)):D.hitType==="animal"&&D.index!==void 0&&(n.selectAnimal(D.index),e.playPopSpawn(1.3)))}});let v=performance.now(),T=0,R=0,M=!1;const S=[[-4.1,1.8],[4.2,1.5],[-3.2,-3.1],[3.5,-2.9],[-.8,4.2]];let P="";const O=L=>{requestAnimationFrame(O);const k=Math.max(.001,Math.min((L-v)/1e3,.05));v=L;const W=k*l,D=L/1e3;if(x&&s.stage==="sanctuary"){if(T+=k,T<3.4){a!=="rain"&&(a="rain",f.setActiveTool("rain")),o=!0;const rt=Math.sin(T*.95)*1.75,At=Math.sin(T*1.9)*.85,Pt=new I(rt,0,At);u=Pt,s.sanctuaryStage.setCursorState(Pt,"rain",!0)}else if(T<6.8){a!=="plant"&&(a="plant",f.setActiveTool("plant")),o=!0;const rt=Math.sin(T*.95)*1.4,At=Math.sin(T*1.6)*.7,Pt=new I(rt,0,At);if(u=Pt,s.sanctuaryStage.setCursorState(Pt,"plant",!1),Math.floor((T-3.3)/.65)>R&&R<S.length){const[ce,Gt]=S[R];n.userPlantShrub(ce,Gt),R++}}else a!=="hand"&&(a="hand",f.setActiveTool("hand")),o=!1,s.sanctuaryStage.setCursorState(null,"hand",!1),T>=7.3&&T<12.8?!M&&n.animals.length>0&&(M=!0,n.selectAnimal(0)):T>=12.8&&M&&(M=!1,n.selectAnimal(null));const wt=Math.min(1,T/17.5),Y=-.26+T*.052,J=15.2-Math.sin(wt*Math.PI)*1.3,yt=8.9-Math.sin(wt*Math.PI)*1.1;s.camera.position.set(Math.sin(Y)*J,yt,Math.cos(Y)*J),s.controls.target.set(0,.35,.45)}o&&u&&s.stage==="sanctuary"&&n.pourRainAt(u.x,u.z,k);let j=n.step(k);for(let wt=1;wt<l;wt++)j=n.step(k);for(;n.pendingSounds.length>0;){const wt=n.pendingSounds.shift();wt.kind==="howl"?e.playWolfHowl():wt.kind==="pounce"?e.playHuntPounce():wt.kind==="birth"?e.playBirthChime():wt.kind==="sip"&&e.playSplashSip()}n.consumeQuestWinTrigger()&&(e.playLevelWin(),e.playVoiceOver(`./voices/${f.getLang()}/quest-${n.questId}-win.mp3`),s.sanctuaryStage.triggerSanadMood("dance"),s.sanctuaryStage.spawnConfettiBurst(new I(0,3.2,0),36,!1));const q=s.renderFrame(n,j,a,o,W,D),nt=t.clientWidth||window.innerWidth,it=t.clientHeight||window.innerHeight;f.updateFrame(j,n.completedQuests,q,n.pendingPopups,s.camera,nt,it,k);const ft=Array.from(n.completedQuests).sort((wt,Y)=>wt-Y).map(wt=>`quest-${wt}`),xt=`${n.questId}|${ft.join(",")}`;if(xt!==P){P=xt;try{window.parent&&window.parent!==window&&window.parent.postMessage({type:"MISBAR_LAB_PROGRESS",worldId:"ecology-carbon",activeModule:`quest-${n.questId}`,completedModules:ft,totalModules:5},"*")}catch{}}};requestAnimationFrame(O)}nv();
