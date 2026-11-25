var Vf=Object.defineProperty;var Hf=(r,t,e)=>t in r?Vf(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var B=(r,t,e)=>Hf(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="170",rs={ROTATE:0,DOLLY:1,PAN:2},Jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gf=0,Wh=1,Wf=2,zd=1,Xf=2,mi=3,ji=0,qe=1,Cn=2,Ei=0,ss=1,ki=2,Xh=3,qh=4,qf=5,pr=100,Yf=101,$f=102,jf=103,Kf=104,Zf=200,Jf=201,Qf=202,tp=203,Fl=204,Ol=205,ep=206,np=207,ip=208,rp=209,sp=210,ap=211,op=212,lp=213,cp=214,Bl=0,zl=1,kl=2,ms=3,Vl=4,Hl=5,Gl=6,Wl=7,kd=0,hp=1,up=2,qi=0,Vd=1,Hd=2,Gd=3,Wd=4,dp=5,Io=6,Xd=7,qd=300,gs=301,_s=302,Xl=303,ql=304,Uo=306,vs=1e3,ti=1001,Yl=1002,Wn=1003,fp=1004,Ma=1005,ei=1006,Wo=1007,_r=1008,wi=1009,Yd=1010,$d=1011,ra=1012,th=1013,Tr=1014,Si=1015,ri=1016,eh=1017,nh=1018,xs=1020,jd=35902,Kd=1021,Zd=1022,Gn=1023,Jd=1024,Qd=1025,as=1026,Ss=1027,t0=1028,ih=1029,e0=1030,rh=1031,sh=1033,ao=33776,oo=33777,lo=33778,co=33779,$l=35840,jl=35841,Kl=35842,Zl=35843,Jl=36196,Ql=37492,tc=37496,ec=37808,nc=37809,ic=37810,rc=37811,sc=37812,ac=37813,oc=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,ho=36492,mc=36494,gc=36495,n0=36283,_c=36284,vc=36285,xc=36286,pp=3200,mp=3201,gp=0,_p=1,Vi="",Re="srgb",Rs="srgb-linear",No="linear",te="srgb",Dr=7680,Yh=519,vp=512,xp=513,Sp=514,i0=515,yp=516,Mp=517,Ep=518,bp=519,Sc=35044,$h="300 es",yi=2e3,_o=2001;class Rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jh=1234567;const Ks=Math.PI/180,sa=180/Math.PI;function bi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[r&255]+Ve[r>>8&255]+Ve[r>>16&255]+Ve[r>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Oe(r,t,e){return Math.max(t,Math.min(e,r))}function ah(r,t){return(r%t+t)%t}function Tp(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function wp(r,t,e){return r!==t?(e-r)/(t-r):0}function Zs(r,t,e){return(1-e)*r+e*t}function Ap(r,t,e,n){return Zs(r,t,1-Math.exp(-e*n))}function Rp(r,t=1){return t-Math.abs(ah(r,t*2)-t)}function Cp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Pp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Dp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Lp(r,t){return r+Math.random()*(t-r)}function Ip(r){return r*(.5-Math.random())}function Up(r){r!==void 0&&(jh=r);let t=jh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Np(r){return r*Ks}function Fp(r){return r*sa}function Op(r){return(r&r-1)===0&&r!==0}function Bp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function kp(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),d=a((t-n)/2),p=s((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*_,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*_,o*c);break;case"ZYZ":r.set(l*_,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ne(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Je={DEG2RAD:Ks,RAD2DEG:sa,generateUUID:bi,clamp:Oe,euclideanModulo:ah,mapLinear:Tp,inverseLerp:wp,lerp:Zs,damp:Ap,pingpong:Rp,smoothstep:Cp,smootherstep:Pp,randInt:Dp,randFloat:Lp,randFloatSpread:Ip,seededRandom:Up,degToRad:Np,radToDeg:Fp,isPowerOfTwo:Op,ceilPowerOfTwo:Bp,floorPowerOfTwo:zp,setQuaternionFromProperEuler:kp,normalize:ne,denormalize:Hn};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,s,a,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],g=i[0],m=i[3],f=i[6],M=i[1],E=i[4],v=i[7],T=i[2],A=i[5],w=i[8];return s[0]=a*g+o*M+l*T,s[3]=a*m+o*E+l*A,s[6]=a*f+o*v+l*w,s[1]=c*g+h*M+u*T,s[4]=c*m+h*E+u*A,s[7]=c*f+h*v+u*w,s[2]=d*g+p*M+_*T,s[5]=d*m+p*E+_*A,s[8]=d*f+p*v+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,_=e*u+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xo.makeScale(t,e)),this}rotate(t){return this.premultiply(Xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new Vt;function r0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function aa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vp(){const r=aa("canvas");return r.style.display="block",r}const Kh={};function Ws(r){r in Kh||(Kh[r]=!0,console.warn(r))}function Hp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Gp(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wp(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(r.r=os(r.r),r.g=os(r.g),r.b=os(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vi?No:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function os(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Zh=[.64,.33,.3,.6,.15,.06],Jh=[.2126,.7152,.0722],Qh=[.3127,.329],tu=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Rs]:{primaries:Zh,whitePoint:Qh,transfer:No,toXYZ:tu,fromXYZ:eu,luminanceCoefficients:Jh,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:Zh,whitePoint:Qh,transfer:te,toXYZ:tu,fromXYZ:eu,luminanceCoefficients:Jh,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}});let Lr;class Xp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Lr===void 0&&(Lr=aa("canvas")),Lr.width=t.width,Lr.height=t.height;const n=Lr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Lr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=aa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ti(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qp=0;class s0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(qo(i[a].image)):s.push(qo(i[a]))}else s=qo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function qo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yp=0;class Ye extends Rr{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=ti,i=ti,s=ei,a=_r,o=Gn,l=wi,c=Ye.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=bi(),this.name="",this.source=new s0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=qd;Ye.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(p+1)/2,T=(f+1)/2,A=(h+d)/4,w=(u+g)/4,C=(_+m)/4;return E>v&&E>T?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=A/n,s=w/n):v>T?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=A/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=w/s,i=C/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $p extends Rr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new s0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends $p{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class a0 extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jp extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==p||h!==_){let m=1-o;const f=l*d+c*p+h*_+u*g,M=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const T=Math.sqrt(E),A=Math.atan2(T,f*M);m=Math.sin(m*A)/T,o=Math.sin(o*A)/T}const v=o*M;if(l=l*m+d*v,c=c*m+p*v,h=h*m+_*v,u=u*m+g*v,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+h*u+l*p-c*d,t[e+1]=l*_+h*d+c*u-o*p,t[e+2]=c*_+h*p+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yo.copy(this).projectOnVector(t),this.sub(Yo)}reflect(t){return this.sub(Yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new D,nu=new si;class tr{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(t.matrixWorld),this.union(Ea)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),ba.subVectors(this.max,Ns),Ir.subVectors(t.a,Ns),Ur.subVectors(t.b,Ns),Nr.subVectors(t.c,Ns),Li.subVectors(Ur,Ir),Ii.subVectors(Nr,Ur),ir.subVectors(Ir,Nr);let e=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-ir.z,ir.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,ir.z,0,-ir.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-ir.y,ir.x,0];return!$o(e,Ir,Ur,Nr,ba)||(e=[1,0,0,0,1,0,0,0,1],!$o(e,Ir,Ur,Nr,ba))?!1:(Ta.crossVectors(Li,Ii),e=[Ta.x,Ta.y,Ta.z],$o(e,Ir,Ur,Nr,ba))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hi=[new D,new D,new D,new D,new D,new D,new D,new D],Fn=new D,Ea=new tr,Ir=new D,Ur=new D,Nr=new D,Li=new D,Ii=new D,ir=new D,Ns=new D,ba=new D,Ta=new D,rr=new D;function $o(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){rr.fromArray(r,s);const o=i.x*Math.abs(rr.x)+i.y*Math.abs(rr.y)+i.z*Math.abs(rr.z),l=t.dot(rr),c=e.dot(rr),h=n.dot(rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Kp=new tr,Fs=new D,jo=new D;class Cs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Kp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);const e=Fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Fs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(jo)),this.expandByPoint(Fs.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new D,Ko=new D,wa=new D,Ui=new D,Zo=new D,Aa=new D,Jo=new D;class Fo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ko.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),Ui.copy(this.origin).sub(Ko);const s=t.distanceTo(e)*.5,a=-this.direction.dot(wa),o=Ui.dot(this.direction),l=-Ui.dot(wa),c=Ui.lengthSq(),h=Math.abs(1-a*a);let u,d,p,_;if(h>0)if(u=a*l-o,d=a*o-l,_=s*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ko).addScaledVector(wa,d),p}intersectSphere(t,e){ui.subVectors(t.center,this.origin);const n=ui.dot(this.direction),i=ui.dot(ui)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,n,i,s){Zo.subVectors(e,t),Aa.subVectors(n,t),Jo.crossVectors(Zo,Aa);let a=this.direction.dot(Jo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,t);const l=o*this.direction.dot(Aa.crossVectors(Ui,Aa));if(l<0)return null;const c=o*this.direction.dot(Zo.cross(Ui));if(c<0||l+c>a)return null;const h=-o*Ui.dot(Jo);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,i,s,a,o,l,c,h,u,d,p,_,g,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,p,_,g,m)}set(t,e,n,i,s,a,o,l,c,h,u,d,p,_,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Fr.setFromMatrixColumn(t,0).length(),s=1/Fr.setFromMatrixColumn(t,1).length(),a=1/Fr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-p,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zp,t,Jp)}lookAt(t,e,n){const i=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ni.crossVectors(n,pn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ni.crossVectors(n,pn)),Ni.normalize(),Ra.crossVectors(pn,Ni),i[0]=Ni.x,i[4]=Ra.x,i[8]=pn.x,i[1]=Ni.y,i[5]=Ra.y,i[9]=pn.y,i[2]=Ni.z,i[6]=Ra.z,i[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],M=n[3],E=n[7],v=n[11],T=n[15],A=i[0],w=i[4],C=i[8],x=i[12],S=i[1],P=i[5],O=i[9],U=i[13],W=i[2],k=i[6],z=i[10],X=i[14],V=i[3],it=i[7],J=i[11],ut=i[15];return s[0]=a*A+o*S+l*W+c*V,s[4]=a*w+o*P+l*k+c*it,s[8]=a*C+o*O+l*z+c*J,s[12]=a*x+o*U+l*X+c*ut,s[1]=h*A+u*S+d*W+p*V,s[5]=h*w+u*P+d*k+p*it,s[9]=h*C+u*O+d*z+p*J,s[13]=h*x+u*U+d*X+p*ut,s[2]=_*A+g*S+m*W+f*V,s[6]=_*w+g*P+m*k+f*it,s[10]=_*C+g*O+m*z+f*J,s[14]=_*x+g*U+m*X+f*ut,s[3]=M*A+E*S+v*W+T*V,s[7]=M*w+E*P+v*k+T*it,s[11]=M*C+E*O+v*z+T*J,s[15]=M*x+E*U+v*X+T*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+g*(+e*l*p-e*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+m*(+e*c*u-e*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],M=u*m*c-g*d*c+g*l*p-o*m*p-u*l*f+o*d*f,E=_*d*c-h*m*c-_*l*p+a*m*p+h*l*f-a*d*f,v=h*g*c-_*u*c+_*o*p-a*g*p-h*o*f+a*u*f,T=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,A=e*M+n*E+i*v+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=M*w,t[1]=(g*d*s-u*m*s-g*i*p+n*m*p+u*i*f-n*d*f)*w,t[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*f+n*l*f)*w,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*w,t[4]=E*w,t[5]=(h*m*s-_*d*s+_*i*p-e*m*p-h*i*f+e*d*f)*w,t[6]=(_*l*s-a*m*s-_*i*c+e*m*c+a*i*f-e*l*f)*w,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*p+e*l*p)*w,t[8]=v*w,t[9]=(_*u*s-h*g*s-_*n*p+e*g*p+h*n*f-e*u*f)*w,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*f+e*o*f)*w,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*p-e*o*p)*w,t[12]=T*w,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*w,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*w,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,_=s*u,g=a*h,m=a*u,f=o*u,M=l*c,E=l*h,v=l*u,T=n.x,A=n.y,w=n.z;return i[0]=(1-(g+f))*T,i[1]=(p+v)*T,i[2]=(_-E)*T,i[3]=0,i[4]=(p-v)*A,i[5]=(1-(d+f))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(_+E)*w,i[9]=(m-M)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Fr.set(i[0],i[1],i[2]).length();const a=Fr.set(i[4],i[5],i[6]).length(),o=Fr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],On.copy(this);const c=1/s,h=1/a,u=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=yi){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,_;if(o===yi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===_o)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=yi){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),d=(e+t)*c,p=(n+i)*h;let _,g;if(o===yi)_=(a+s)*u,g=-2*u;else if(o===_o)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fr=new D,On=new me,Zp=new D(0,0,0),Jp=new D(1,1,1),Ni=new D,Ra=new D,pn=new D,iu=new me,ru=new si;class Ai{constructor(t=0,e=0,n=0,i=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return iu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(iu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ru.setFromEuler(this),this.setFromQuaternion(ru,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qp=0;const su=new D,Or=new si,di=new me,Ca=new D,Os=new D,tm=new D,em=new si,au=new D(1,0,0),ou=new D(0,1,0),lu=new D(0,0,1),cu={type:"added"},nm={type:"removed"},Br={type:"childadded",child:null},Qo={type:"childremoved",child:null};class Qe extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new D,e=new Ai,n=new si,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new Vt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Or.setFromAxisAngle(t,e),this.quaternion.multiply(Or),this}rotateOnWorldAxis(t,e){return Or.setFromAxisAngle(t,e),this.quaternion.premultiply(Or),this}rotateX(t){return this.rotateOnAxis(au,t)}rotateY(t){return this.rotateOnAxis(ou,t)}rotateZ(t){return this.rotateOnAxis(lu,t)}translateOnAxis(t,e){return su.copy(t).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(au,t)}translateY(t){return this.translateOnAxis(ou,t)}translateZ(t){return this.translateOnAxis(lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ca.copy(t):Ca.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Os,Ca,this.up):di.lookAt(Ca,Os,this.up),this.quaternion.setFromRotationMatrix(di),i&&(di.extractRotation(i.matrixWorld),Or.setFromRotationMatrix(di),this.quaternion.premultiply(Or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cu),Br.child=t,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nm),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cu),Br.child=t,this.dispatchEvent(Br),Br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,tm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Qe.DEFAULT_UP=new D(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new D,fi=new D,tl=new D,pi=new D,zr=new D,kr=new D,hu=new D,el=new D,nl=new D,il=new D,rl=new he,sl=new he,al=new he;class Pn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Bn.subVectors(t,e),i.cross(Bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Bn.subVectors(i,e),fi.subVectors(n,e),tl.subVectors(t,e);const a=Bn.dot(Bn),o=Bn.dot(fi),l=Bn.dot(tl),c=fi.dot(fi),h=fi.dot(tl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return rl.setScalar(0),sl.setScalar(0),al.setScalar(0),rl.fromBufferAttribute(t,e),sl.fromBufferAttribute(t,n),al.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(rl,s.x),a.addScaledVector(sl,s.y),a.addScaledVector(al,s.z),a}static isFrontFacing(t,e,n,i){return Bn.subVectors(n,e),fi.subVectors(t,e),Bn.cross(fi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Bn.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;zr.subVectors(i,n),kr.subVectors(s,n),el.subVectors(t,n);const l=zr.dot(el),c=kr.dot(el);if(l<=0&&c<=0)return e.copy(n);nl.subVectors(t,i);const h=zr.dot(nl),u=kr.dot(nl);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(zr,a);il.subVectors(t,s);const p=zr.dot(il),_=kr.dot(il);if(_>=0&&p<=_)return e.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(kr,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return hu.subVectors(s,i),o=(u-h)/(u-h+(p-_)),e.copy(i).addScaledVector(hu,o);const f=1/(m+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(zr,a).addScaledVector(kr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const o0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function ol(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=ah(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ol(a,s,t+1/3),this.g=ol(a,s,t),this.b=ol(a,s,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=Re){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=o0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Yt.fromWorkingColorSpace(He.copy(this),t),Math.round(Oe(He.r*255,0,255))*65536+Math.round(Oe(He.g*255,0,255))*256+Math.round(Oe(He.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(He.copy(this),e);const n=He.r,i=He.g,s=He.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Re){Yt.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,i=He.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(Pa);const n=Zs(Fi.h,Pa.h,e),i=Zs(Fi.s,Pa.s,e),s=Zs(Fi.l,Pa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Wt;Wt.NAMES=o0;let im=0;class Ps extends Rr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=bi(),this.name="",this.blending=ss,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Ol,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ol&&(n.blendDst=this.blendDst),this.blendEquation!==pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jn extends Ps{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new D,Da=new St;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Da.fromBufferAttribute(this,e),Da.applyMatrix3(t),this.setXY(e,Da.x,Da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sc&&(t.usage=this.usage),t}}class l0 extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class c0 extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rm=0;const bn=new me,ll=new Qe,Vr=new D,mn=new tr,Bs=new tr,De=new D;class je extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(r0(t)?c0:l0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return ll.lookAt(t),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(mn.min,Bs.min),mn.expandByPoint(De),De.addVectors(mn.max,Bs.max),mn.expandByPoint(De)):(mn.expandByPoint(Bs.min),mn.expandByPoint(Bs.max))}mn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)De.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(De));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(Vr.fromBufferAttribute(t,c),De.add(Vr)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new D,l[C]=new D;const c=new D,h=new D,u=new D,d=new St,p=new St,_=new St,g=new D,m=new D;function f(C,x,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,x),_.fromBufferAttribute(s,S),h.sub(c),u.sub(c),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(P),o[C].add(g),o[x].add(g),o[S].add(g),l[C].add(m),l[x].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,x=M.length;C<x;++C){const S=M[C],P=S.start,O=S.count;for(let U=P,W=P+O;U<W;U+=3)f(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const E=new D,v=new D,T=new D,A=new D;function w(C){T.fromBufferAttribute(i,C),A.copy(T);const x=o[C];E.copy(x),E.sub(T.multiplyScalar(T.dot(x))).normalize(),v.crossVectors(A,x);const P=v.dot(l[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,P)}for(let C=0,x=M.length;C<x;++C){const S=M[C],P=S.start,O=S.count;for(let U=P,W=P+O;U<W;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new on(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uu=new me,sr=new Fo,La=new Cs,du=new D,Ia=new D,Ua=new D,Na=new D,cl=new D,Fa=new D,fu=new D,Oa=new D;class ee extends Qe{constructor(t=new je,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(cl.fromBufferAttribute(u,t),a?Fa.addScaledVector(cl,h):Fa.addScaledVector(cl.sub(e),h))}e.add(Fa)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),sr.copy(t.ray).recast(t.near),!(La.containsPoint(sr.origin)===!1&&(sr.intersectSphere(La,du)===null||sr.origin.distanceToSquared(du)>(t.far-t.near)**2))&&(uu.copy(s).invert(),sr.copy(t.ray).applyMatrix4(uu),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,sr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,T=E;v<T;v+=3){const A=o.getX(v),w=o.getX(v+1),C=o.getX(v+2);i=Ba(this,f,t,n,c,h,u,A,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const M=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);i=Ba(this,a,t,n,c,h,u,M,E,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,T=E;v<T;v+=3){const A=v,w=v+1,C=v+2;i=Ba(this,f,t,n,c,h,u,A,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const M=m,E=m+1,v=m+2;i=Ba(this,a,t,n,c,h,u,M,E,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function sm(r,t,e,n,i,s,a,o){let l;if(t.side===qe?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===ji,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Oa);return c<e.near||c>e.far?null:{distance:c,point:Oa.clone(),object:r}}function Ba(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Ia),r.getVertexPosition(l,Ua),r.getVertexPosition(c,Na);const h=sm(r,t,e,n,Ia,Ua,Na,fu);if(h){const u=new D;Pn.getBarycoord(fu,Ia,Ua,Na,u),i&&(h.uv=Pn.getInterpolatedAttribute(i,o,l,c,u,new St)),s&&(h.uv1=Pn.getInterpolatedAttribute(s,o,l,c,u,new St)),a&&(h.normal=Pn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};Pn.getNormal(Ia,Ua,Na,d.normal),h.face=d,h.barycoord=u}return h}class _a extends je{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2));function _(g,m,f,M,E,v,T,A,w,C,x){const S=v/w,P=T/C,O=v/2,U=T/2,W=A/2,k=w+1,z=C+1;let X=0,V=0;const it=new D;for(let J=0;J<z;J++){const ut=J*P-U;for(let vt=0;vt<k;vt++){const Ft=vt*S-O;it[g]=Ft*M,it[m]=ut*E,it[f]=W,c.push(it.x,it.y,it.z),it[g]=0,it[m]=0,it[f]=A>0?1:-1,h.push(it.x,it.y,it.z),u.push(vt/w),u.push(1-J/C),X+=1}}for(let J=0;J<C;J++)for(let ut=0;ut<w;ut++){const vt=d+ut+k*J,Ft=d+ut+k*(J+1),$=d+(ut+1)+k*(J+1),et=d+(ut+1)+k*J;l.push(vt,Ft,et),l.push(Ft,$,et),V+=6}o.addGroup(p,V,x),p+=V,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ze(r){const t={};for(let e=0;e<r.length;e++){const n=ys(r[e]);for(const i in n)t[i]=n[i]}return t}function am(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function h0(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const wr={clone:ys,merge:Ze};var om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ce extends Ps{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=om,this.fragmentShader=lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=am(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class u0 extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new D,pu=new St,mu=new St;class Rn extends u0{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,pu,mu),e.subVectors(mu,pu)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hr=-90,Gr=1;class cm extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rn(Hr,Gr,t,e);i.layers=this.layers,this.add(i);const s=new Rn(Hr,Gr,t,e);s.layers=this.layers,this.add(s);const a=new Rn(Hr,Gr,t,e);a.layers=this.layers,this.add(a);const o=new Rn(Hr,Gr,t,e);o.layers=this.layers,this.add(o);const l=new Rn(Hr,Gr,t,e);l.layers=this.layers,this.add(l);const c=new Rn(Hr,Gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class d0 extends Ye{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hm extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new d0(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ei}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _a(5,5,5),s=new ce({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Ei});s.uniforms.tEquirect.value=e;const a=new ee(i,s),o=e.minFilter;return e.minFilter===_r&&(e.minFilter=ei),new cm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const hl=new D,um=new D,dm=new Vt;class Vn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=hl.subVectors(n,e).cross(um.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(hl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||dm.getNormalMatrix(t),i=this.coplanarPoint(hl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Cs,za=new D;class f0{constructor(t=new Vn,e=new Vn,n=new Vn,i=new Vn,s=new Vn,a=new Vn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yi){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],_=i[9],g=i[10],m=i[11],f=i[12],M=i[13],E=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-p,v-f).normalize(),n[1].setComponents(l+s,d+c,m+p,v+f).normalize(),n[2].setComponents(l+a,d+h,m+_,v+M).normalize(),n[3].setComponents(l-a,d-h,m-_,v-M).normalize(),n[4].setComponents(l-o,d-u,m-g,v-E).normalize(),e===yi)n[5].setComponents(l+o,d+u,m+g,v+E).normalize();else if(e===_o)n[5].setComponents(o,u,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(t){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(za.x=i.normal.x>0?t.max.x:t.min.x,za.y=i.normal.y>0?t.max.y:t.min.y,za.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(za)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function p0(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function fm(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],g=u[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const g=u[p];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class va extends je{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],_=[],g=[],m=[];for(let f=0;f<h;f++){const M=f*d-a;for(let E=0;E<c;E++){const v=E*u-s;_.push(v,-M,0),g.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const E=M+c*f,v=M+c*(f+1),T=M+1+c*(f+1),A=M+1+c*f;p.push(E,v,A),p.push(v,T,A)}this.setIndex(p),this.setAttribute("position",new Me(_,3)),this.setAttribute("normal",new Me(g,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.width,t.height,t.widthSegments,t.heightSegments)}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
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
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sm=`#ifdef USE_AOMAP
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
#endif`,ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm=`#ifdef USE_BATCHING
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
#endif`,Em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Am=`#ifdef USE_IRIDESCENCE
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
#endif`,Rm=`#ifdef USE_BUMPMAP
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Om=`#define PI 3.141592653589793
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
} // validated`,Bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zm=`vec3 transformedNormal = objectNormal;
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
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e1=`#ifdef USE_GRADIENTMAP
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
}`,n1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s1=`uniform bool receiveShadow;
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
#endif`,a1=`#ifdef USE_ENVMAP
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
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u1=`PhysicalMaterial material;
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
#endif`,d1=`struct PhysicalMaterial {
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
}`,f1=`
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
#endif`,p1=`#if defined( RE_IndirectDiffuse )
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
#endif`,m1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E1=`#if defined( USE_POINTS_UV )
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
#endif`,b1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`#ifdef USE_MORPHTARGETS
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
#endif`,P1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F1=`#ifdef USE_NORMALMAP
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
#endif`,O1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J1=`float getShadowMask() {
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
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`#include <common>
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
}`,Sg=`#if DEPTH_PACKING == 3200
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
}`,yg=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#define LAMBERT
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
}`,Pg=`#define LAMBERT
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
}`,Dg=`#define MATCAP
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
}`,Lg=`#define MATCAP
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
}`,Ig=`#define NORMAL
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
}`,Ug=`#define NORMAL
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
}`,Ng=`#define PHONG
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
}`,Fg=`#define PHONG
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
}`,Og=`#define STANDARD
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
}`,Bg=`#define STANDARD
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
}`,zg=`#define TOON
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
}`,kg=`#define TOON
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
}`,Vg=`uniform float size;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Wg=`uniform vec3 color;
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
}`,Xg=`uniform float rotation;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:vm,alphatest_pars_fragment:xm,aomap_fragment:Sm,aomap_pars_fragment:ym,batching_pars_vertex:Mm,batching_vertex:Em,begin_vertex:bm,beginnormal_vertex:Tm,bsdfs:wm,iridescence_fragment:Am,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Dm,clipping_planes_vertex:Lm,color_fragment:Im,color_pars_fragment:Um,color_pars_vertex:Nm,color_vertex:Fm,common:Om,cube_uv_reflection_fragment:Bm,defaultnormal_vertex:zm,displacementmap_pars_vertex:km,displacementmap_vertex:Vm,emissivemap_fragment:Hm,emissivemap_pars_fragment:Gm,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:qm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:$m,envmap_pars_vertex:jm,envmap_physical_pars_fragment:a1,envmap_vertex:Km,fog_vertex:Zm,fog_pars_vertex:Jm,fog_fragment:Qm,fog_pars_fragment:t1,gradientmap_pars_fragment:e1,lightmap_pars_fragment:n1,lights_lambert_fragment:i1,lights_lambert_pars_fragment:r1,lights_pars_begin:s1,lights_toon_fragment:o1,lights_toon_pars_fragment:l1,lights_phong_fragment:c1,lights_phong_pars_fragment:h1,lights_physical_fragment:u1,lights_physical_pars_fragment:d1,lights_fragment_begin:f1,lights_fragment_maps:p1,lights_fragment_end:m1,logdepthbuf_fragment:g1,logdepthbuf_pars_fragment:_1,logdepthbuf_pars_vertex:v1,logdepthbuf_vertex:x1,map_fragment:S1,map_pars_fragment:y1,map_particle_fragment:M1,map_particle_pars_fragment:E1,metalnessmap_fragment:b1,metalnessmap_pars_fragment:T1,morphinstance_vertex:w1,morphcolor_vertex:A1,morphnormal_vertex:R1,morphtarget_pars_vertex:C1,morphtarget_vertex:P1,normal_fragment_begin:D1,normal_fragment_maps:L1,normal_pars_fragment:I1,normal_pars_vertex:U1,normal_vertex:N1,normalmap_pars_fragment:F1,clearcoat_normal_fragment_begin:O1,clearcoat_normal_fragment_maps:B1,clearcoat_pars_fragment:z1,iridescence_pars_fragment:k1,opaque_fragment:V1,packing:H1,premultiplied_alpha_fragment:G1,project_vertex:W1,dithering_fragment:X1,dithering_pars_fragment:q1,roughnessmap_fragment:Y1,roughnessmap_pars_fragment:$1,shadowmap_pars_fragment:j1,shadowmap_pars_vertex:K1,shadowmap_vertex:Z1,shadowmask_pars_fragment:J1,skinbase_vertex:Q1,skinning_pars_vertex:tg,skinning_vertex:eg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:rg,tonemapping_fragment:sg,tonemapping_pars_fragment:ag,transmission_fragment:og,transmission_pars_fragment:lg,uv_pars_fragment:cg,uv_pars_vertex:hg,uv_vertex:ug,worldpos_vertex:dg,background_vert:fg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:gg,cube_vert:_g,cube_frag:vg,depth_vert:xg,depth_frag:Sg,distanceRGBA_vert:yg,distanceRGBA_frag:Mg,equirect_vert:Eg,equirect_frag:bg,linedashed_vert:Tg,linedashed_frag:wg,meshbasic_vert:Ag,meshbasic_frag:Rg,meshlambert_vert:Cg,meshlambert_frag:Pg,meshmatcap_vert:Dg,meshmatcap_frag:Lg,meshnormal_vert:Ig,meshnormal_frag:Ug,meshphong_vert:Ng,meshphong_frag:Fg,meshphysical_vert:Og,meshphysical_frag:Bg,meshtoon_vert:zg,meshtoon_frag:kg,points_vert:Vg,points_frag:Hg,shadow_vert:Gg,shadow_frag:Wg,sprite_vert:Xg,sprite_frag:qg},lt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},sn={basic:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ze([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ze([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ze([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ze([lt.points,lt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ze([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ze([lt.common,lt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ze([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ze([lt.sprite,lt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ze([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ze([lt.lights,lt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};sn.physical={uniforms:Ze([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const ka={r:0,b:0,g:0},or=new Ai,Yg=new me;function $g(r,t,e,n,i,s,a){const o=new Wt(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function _(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?e:t).get(E)),E}function g(M){let E=!1;const v=_(M);v===null?f(o,l):v&&v.isColor&&(f(v,1),E=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,E){const v=_(E);v&&(v.isCubeTexture||v.mapping===Uo)?(h===void 0&&(h=new ee(new _a(1,1,1),new ce({name:"BackgroundCubeMaterial",uniforms:ys(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),or.copy(E.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(or)),h.material.toneMapped=Yt.getTransfer(v.colorSpace)!==te,(u!==v||d!==v.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ee(new va(2,2),new ce({name:"BackgroundMaterial",uniforms:ys(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,E){M.getRGB(ka,h0(r)),n.buffers.color.setClear(ka.r,ka.g,ka.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),l=E,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:g,addToRenderList:m}}function jg(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(S,P,O,U,W){let k=!1;const z=u(U,O,P);s!==z&&(s=z,c(s.object)),k=p(S,U,O,W),k&&_(S,U,O,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(S,P,O,U),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,P,O){const U=O.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let k=W[P.id];k===void 0&&(k={},W[P.id]=k);let z=k[U];return z===void 0&&(z=d(l()),k[U]=z),z}function d(S){const P=[],O=[],U=[];for(let W=0;W<e;W++)P[W]=0,O[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:U,object:S,attributes:{},index:null}}function p(S,P,O,U){const W=s.attributes,k=P.attributes;let z=0;const X=O.getAttributes();for(const V in X)if(X[V].location>=0){const J=W[V];let ut=k[V];if(ut===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),J===void 0||J.attribute!==ut||ut&&J.data!==ut.data)return!0;z++}return s.attributesNum!==z||s.index!==U}function _(S,P,O,U){const W={},k=P.attributes;let z=0;const X=O.getAttributes();for(const V in X)if(X[V].location>=0){let J=k[V];J===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const ut={};ut.attribute=J,J&&J.data&&(ut.data=J.data),W[V]=ut,z++}s.attributes=W,s.attributesNum=z,s.index=U}function g(){const S=s.newAttributes;for(let P=0,O=S.length;P<O;P++)S[P]=0}function m(S){f(S,0)}function f(S,P){const O=s.newAttributes,U=s.enabledAttributes,W=s.attributeDivisors;O[S]=1,U[S]===0&&(r.enableVertexAttribArray(S),U[S]=1),W[S]!==P&&(r.vertexAttribDivisor(S,P),W[S]=P)}function M(){const S=s.newAttributes,P=s.enabledAttributes;for(let O=0,U=P.length;O<U;O++)P[O]!==S[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function E(S,P,O,U,W,k,z){z===!0?r.vertexAttribIPointer(S,P,O,W,k):r.vertexAttribPointer(S,P,O,U,W,k)}function v(S,P,O,U){g();const W=U.attributes,k=O.getAttributes(),z=P.defaultAttributeValues;for(const X in k){const V=k[X];if(V.location>=0){let it=W[X];if(it===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){const J=it.normalized,ut=it.itemSize,vt=t.get(it);if(vt===void 0)continue;const Ft=vt.buffer,$=vt.type,et=vt.bytesPerElement,gt=$===r.INT||$===r.UNSIGNED_INT||it.gpuType===th;if(it.isInterleavedBufferAttribute){const ct=it.data,Rt=ct.stride,H=it.offset;if(ct.isInstancedInterleavedBuffer){for(let Q=0;Q<V.locationSize;Q++)f(V.location+Q,ct.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let Q=0;Q<V.locationSize;Q++)E(V.location+Q,ut/V.locationSize,$,J,Rt*et,(H+ut/V.locationSize*Q)*et,gt)}else{if(it.isInstancedBufferAttribute){for(let ct=0;ct<V.locationSize;ct++)f(V.location+ct,it.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ct=0;ct<V.locationSize;ct++)m(V.location+ct);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let ct=0;ct<V.locationSize;ct++)E(V.location+ct,ut/V.locationSize,$,J,ut*et,ut/V.locationSize*ct*et,gt)}}else if(z!==void 0){const J=z[X];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(V.location,J);break;case 3:r.vertexAttrib3fv(V.location,J);break;case 4:r.vertexAttrib4fv(V.location,J);break;default:r.vertexAttrib1fv(V.location,J)}}}}M()}function T(){C();for(const S in n){const P=n[S];for(const O in P){const U=P[O];for(const W in U)h(U[W].object),delete U[W];delete P[O]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const O in P){const U=P[O];for(const W in U)h(U[W].object),delete U[W];delete P[O]}delete n[S.id]}function w(S){for(const P in n){const O=n[P];if(O[S.id]===void 0)continue;const U=O[S.id];for(const W in U)h(U[W].object),delete U[W];delete O[S.id]}}function C(){x(),a=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function Kg(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Gn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==wi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Si&&!C)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:T,maxSamples:A}}function Jg(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Vn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{const M=s?0:n,E=M*4;let v=f.clippingState||null;l.value=v,v=h(_,d,E,p);for(let T=0;T!==E;++T)v[T]=e[T];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,v=p;E!==g;++E,v+=4)a.copy(u[E]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Qg(r){let t=new WeakMap;function e(a,o){return o===Xl?a.mapping=gs:o===ql&&(a.mapping=_s),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xl||o===ql)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hm(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class lh extends u0{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qr=4,gu=[.125,.215,.35,.446,.526,.582],mr=20,ul=new lh,_u=new Wt;let dl=null,fl=0,pl=0,ml=!1;const dr=(1+Math.sqrt(5))/2,Wr=1/dr,vu=[new D(-dr,Wr,0),new D(dr,Wr,0),new D(-Wr,0,dr),new D(Wr,0,dr),new D(0,dr,-Wr),new D(0,dr,Wr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class xu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dl,fl,pl),this._renderer.xr.enabled=ml,t.scissorTest=!1,Va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:ri,format:Gn,colorSpace:Rs,depthBuffer:!1},i=Su(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t_(s)),this._blurMaterial=e_(s,t,e)}return i}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,ul)}_sceneToCubeUV(t,e,n,i){const o=new Rn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_u),h.toneMapping=qi,h.autoClear=!1;const p=new jn({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),_=new ee(new _a,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(_u),g=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const E=this._cubeSize;Va(i,M*E,f>2?E:0,E,E),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===gs||t.mapping===_s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Va(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ul)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vu[(i-s-1)%vu.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ee(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*mr-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const f=[];let M=0;for(let w=0;w<mr;++w){const C=w/g,x=Math.exp(-C*C/2);f.push(x),w===0?M+=x:w<m&&(M+=2*x)}for(let w=0;w<f.length;w++)f[w]=f[w]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-n;const v=this._sizeLods[i],T=3*v*(i>E-Qr?i-E+Qr:0),A=4*(this._cubeSize-v);Va(e,T,A,3*v,2*v),l.setRenderTarget(e),l.render(u,ul)}}function t_(r){const t=[],e=[],n=[];let i=r;const s=r-Qr+1+gu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Qr?l=gu[a-r+Qr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,f=1,M=new Float32Array(g*_*p),E=new Float32Array(m*_*p),v=new Float32Array(f*_*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,C=A>2?0:-1,x=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];M.set(x,g*_*A),E.set(d,m*_*A);const S=[A,A,A,A,A,A];v.set(S,f*_*A)}const T=new je;T.setAttribute("position",new on(M,g)),T.setAttribute("uv",new on(E,m)),T.setAttribute("faceIndex",new on(v,f)),t.push(T),i>Qr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Su(r,t,e){const n=new In(r,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function e_(r,t,e){const n=new Float32Array(mr),i=new D(0,1,0);return new ce({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function yu(){return new ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Mu(){return new ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function n_(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Xl||l===ql,h=l===gs||l===_s;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new xu(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new xu(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function i_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function r_(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],r.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)t.update(g[m],r.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const M=p.array;g=p.version;for(let E=0,v=M.length;E<v;E+=3){const T=M[E+0],A=M[E+1],w=M[E+2];d.push(T,A,A,w,w,T)}}else if(_!==void 0){const M=_.array;g=_.version;for(let E=0,v=M.length/3-1;E<v;E+=3){const T=E+0,A=E+1,w=E+2;d.push(T,A,A,w,w,T)}}else return;const m=new(r0(d)?c0:l0)(d,1);m.version=g;const f=s.get(u);f&&t.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function s_(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){r.drawElements(n,p,s,d*a),e.update(p,n,1)}function c(d,p,_){_!==0&&(r.drawElementsInstanced(n,p,s,d*a,_),e.update(p,n,_))}function h(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];e.update(m,n,1)}function u(d,p,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,g,0,_);let f=0;for(let M=0;M<_;M++)f+=p[M]*g[M];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function a_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function o_(r,t,e){const n=new WeakMap,i=new he;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let T=o.attributes.position.count*v,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*A*4*u),C=new a0(w,T,A,u);C.type=Si,C.needsUpdate=!0;const x=v*4;for(let P=0;P<u;P++){const O=f[P],U=M[P],W=E[P],k=T*A*4*P;for(let z=0;z<O.count;z++){const X=z*x;_===!0&&(i.fromBufferAttribute(O,z),w[k+X+0]=i.x,w[k+X+1]=i.y,w[k+X+2]=i.z,w[k+X+3]=0),g===!0&&(i.fromBufferAttribute(U,z),w[k+X+4]=i.x,w[k+X+5]=i.y,w[k+X+6]=i.z,w[k+X+7]=0),m===!0&&(i.fromBufferAttribute(W,z),w[k+X+8]=i.x,w[k+X+9]=i.y,w[k+X+10]=i.z,w[k+X+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new St(T,A)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function l_(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class m0 extends Ye{constructor(t,e,n,i,s,a,o,l,c,h=as){if(h!==as&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===as&&(n=Tr),n===void 0&&h===Ss&&(n=xs),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const g0=new Ye,Eu=new m0(1,1),_0=new a0,v0=new jp,x0=new d0,bu=[],Tu=[],wu=new Float32Array(16),Au=new Float32Array(9),Ru=new Float32Array(4);function Ds(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=bu[i];if(s===void 0&&(s=new Float32Array(i),bu[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ce(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Pe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Oo(r,t){let e=Tu[t];e===void 0&&(e=new Int32Array(t),Tu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function c_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function h_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2fv(this.addr,t),Pe(e,t)}}function u_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;r.uniform3fv(this.addr,t),Pe(e,t)}}function d_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4fv(this.addr,t),Pe(e,t)}}function f_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Ru.set(n),r.uniformMatrix2fv(this.addr,!1,Ru),Pe(e,n)}}function p_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Au.set(n),r.uniformMatrix3fv(this.addr,!1,Au),Pe(e,n)}}function m_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;wu.set(n),r.uniformMatrix4fv(this.addr,!1,wu),Pe(e,n)}}function g_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function __(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2iv(this.addr,t),Pe(e,t)}}function v_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;r.uniform3iv(this.addr,t),Pe(e,t)}}function x_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4iv(this.addr,t),Pe(e,t)}}function S_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function y_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2uiv(this.addr,t),Pe(e,t)}}function M_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;r.uniform3uiv(this.addr,t),Pe(e,t)}}function E_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4uiv(this.addr,t),Pe(e,t)}}function b_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Eu.compareFunction=i0,s=Eu):s=g0,e.setTexture2D(t||s,i)}function T_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||v0,i)}function w_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||x0,i)}function A_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||_0,i)}function R_(r){switch(r){case 5126:return c_;case 35664:return h_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return v_;case 35669:case 35673:return x_;case 5125:return S_;case 36294:return y_;case 36295:return M_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return A_}}function C_(r,t){r.uniform1fv(this.addr,t)}function P_(r,t){const e=Ds(t,this.size,2);r.uniform2fv(this.addr,e)}function D_(r,t){const e=Ds(t,this.size,3);r.uniform3fv(this.addr,e)}function L_(r,t){const e=Ds(t,this.size,4);r.uniform4fv(this.addr,e)}function I_(r,t){const e=Ds(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function U_(r,t){const e=Ds(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function N_(r,t){const e=Ds(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function F_(r,t){r.uniform1iv(this.addr,t)}function O_(r,t){r.uniform2iv(this.addr,t)}function B_(r,t){r.uniform3iv(this.addr,t)}function z_(r,t){r.uniform4iv(this.addr,t)}function k_(r,t){r.uniform1uiv(this.addr,t)}function V_(r,t){r.uniform2uiv(this.addr,t)}function H_(r,t){r.uniform3uiv(this.addr,t)}function G_(r,t){r.uniform4uiv(this.addr,t)}function W_(r,t,e){const n=this.cache,i=t.length,s=Oo(e,i);Ce(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||g0,s[a])}function X_(r,t,e){const n=this.cache,i=t.length,s=Oo(e,i);Ce(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||v0,s[a])}function q_(r,t,e){const n=this.cache,i=t.length,s=Oo(e,i);Ce(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||x0,s[a])}function Y_(r,t,e){const n=this.cache,i=t.length,s=Oo(e,i);Ce(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||_0,s[a])}function $_(r){switch(r){case 5126:return C_;case 35664:return P_;case 35665:return D_;case 35666:return L_;case 35674:return I_;case 35675:return U_;case 35676:return N_;case 5124:case 35670:return F_;case 35667:case 35671:return O_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return k_;case 36294:return V_;case 36295:return H_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}class j_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=R_(e.type)}}class K_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$_(e.type)}}class Z_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const gl=/(\w+)(\])?(\[|\.)?/g;function Cu(r,t){r.seq.push(t),r.map[t.id]=t}function J_(r,t,e){const n=r.name,i=n.length;for(gl.lastIndex=0;;){const s=gl.exec(n),a=gl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Cu(e,c===void 0?new j_(o,r,t):new K_(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Z_(o),Cu(e,u)),e=u}}}class uo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);J_(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Pu(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Q_=37297;let t2=0;function e2(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Du=new Vt;function n2(r){Yt._getMatrix(Du,Yt.workingColorSpace,r);const t=`mat3( ${Du.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(r)){case No:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Lu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+e2(r.getShaderSource(t),a)}else return i}function i2(r,t){const e=n2(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function r2(r,t){let e;switch(t){case Vd:e="Linear";break;case Hd:e="Reinhard";break;case Gd:e="Cineon";break;case Wd:e="ACESFilmic";break;case Io:e="AgX";break;case Xd:e="Neutral";break;case dp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ha=new D;function s2(){Yt.getLuminanceCoefficients(Ha);const r=Ha.x.toFixed(4),t=Ha.y.toFixed(4),e=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function o2(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function l2(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Xs(r){return r!==""}function Iu(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const c2=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(r){return r.replace(c2,u2)}const h2=new Map;function u2(r,t){let e=Gt[t];if(e===void 0){const n=h2.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yc(e)}const d2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(r){return r.replace(d2,f2)}function f2(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Fu(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function p2(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function m2(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gs:case _s:t="ENVMAP_TYPE_CUBE";break;case Uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function g2(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function _2(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case kd:t="ENVMAP_BLENDING_MULTIPLY";break;case hp:t="ENVMAP_BLENDING_MIX";break;case up:t="ENVMAP_BLENDING_ADD";break}return t}function v2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function x2(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=p2(e),c=m2(e),h=g2(e),u=_2(e),d=v2(e),p=a2(e),_=o2(s),g=i.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Xs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Xs).join(`
`),f.length>0&&(f+=`
`)):(m=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),f=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==qi?r2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,i2("linearToOutputTexel",e.outputColorSpace),s2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),a=yc(a),a=Iu(a,e),a=Uu(a,e),o=yc(o),o=Iu(o,e),o=Uu(o,e),a=Nu(a),o=Nu(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=M+m+a,v=M+f+o,T=Pu(i,i.VERTEX_SHADER,E),A=Pu(i,i.FRAGMENT_SHADER,v);i.attachShader(g,T),i.attachShader(g,A),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(P){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(g).trim(),U=i.getShaderInfoLog(T).trim(),W=i.getShaderInfoLog(A).trim();let k=!0,z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,T,A);else{const X=Lu(i,T,"vertex"),V=Lu(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+X+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||W==="")&&(z=!1);z&&(P.diagnostics={runnable:k,programLog:O,vertexShader:{log:U,prefix:m},fragmentShader:{log:W,prefix:f}})}i.deleteShader(T),i.deleteShader(A),C=new uo(i,g),x=l2(i,g)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,Q_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=t2++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=A,this}let S2=0;class y2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new M2(t),e.set(t,n)),n}}class M2{constructor(t){this.id=S2++,this.code=t,this.usedTimes=0}}function E2(r,t,e,n,i,s,a){const o=new oh,l=new y2,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,P,O,U){const W=O.fog,k=U.geometry,z=x.isMeshStandardMaterial?O.environment:null,X=(x.isMeshStandardMaterial?e:t).get(x.envMap||z),V=X&&X.mapping===Uo?X.image.height:null,it=_[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const J=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ut=J!==void 0?J.length:0;let vt=0;k.morphAttributes.position!==void 0&&(vt=1),k.morphAttributes.normal!==void 0&&(vt=2),k.morphAttributes.color!==void 0&&(vt=3);let Ft,$,et,gt;if(it){const Qt=sn[it];Ft=Qt.vertexShader,$=Qt.fragmentShader}else Ft=x.vertexShader,$=x.fragmentShader,l.update(x),et=l.getVertexShaderID(x),gt=l.getFragmentShaderID(x);const ct=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),H=U.isInstancedMesh===!0,Q=U.isBatchedMesh===!0,ht=!!x.map,rt=!!x.matcap,st=!!X,L=!!x.aoMap,Bt=!!x.lightMap,Dt=!!x.bumpMap,It=!!x.normalMap,Et=!!x.displacementMap,jt=!!x.emissiveMap,bt=!!x.metalnessMap,R=!!x.roughnessMap,y=x.anisotropy>0,G=x.clearcoat>0,Z=x.dispersion>0,nt=x.iridescence>0,K=x.sheen>0,Ct=x.transmission>0,ft=y&&!!x.anisotropyMap,xt=G&&!!x.clearcoatMap,$t=G&&!!x.clearcoatNormalMap,at=G&&!!x.clearcoatRoughnessMap,yt=nt&&!!x.iridescenceMap,Lt=nt&&!!x.iridescenceThicknessMap,Nt=K&&!!x.sheenColorMap,Mt=K&&!!x.sheenRoughnessMap,qt=!!x.specularMap,Ht=!!x.specularColorMap,ae=!!x.specularIntensityMap,I=Ct&&!!x.transmissionMap,dt=Ct&&!!x.thicknessMap,j=!!x.gradientMap,tt=!!x.alphaMap,_t=x.alphaTest>0,pt=!!x.alphaHash,zt=!!x.extensions;let xe=qi;x.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(xe=r.toneMapping);const ke={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:Ft,fragmentShader:$,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Q,batchingColor:Q&&U._colorsTexture!==null,instancing:H,instancingColor:H&&U.instanceColor!==null,instancingMorph:H&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?r.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Rs,alphaToCoverage:!!x.alphaToCoverage,map:ht,matcap:rt,envMap:st,envMapMode:st&&X.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:Bt,bumpMap:Dt,normalMap:It,displacementMap:d&&Et,emissiveMap:jt,normalMapObjectSpace:It&&x.normalMapType===_p,normalMapTangentSpace:It&&x.normalMapType===gp,metalnessMap:bt,roughnessMap:R,anisotropy:y,anisotropyMap:ft,clearcoat:G,clearcoatMap:xt,clearcoatNormalMap:$t,clearcoatRoughnessMap:at,dispersion:Z,iridescence:nt,iridescenceMap:yt,iridescenceThicknessMap:Lt,sheen:K,sheenColorMap:Nt,sheenRoughnessMap:Mt,specularMap:qt,specularColorMap:Ht,specularIntensityMap:ae,transmission:Ct,transmissionMap:I,thicknessMap:dt,gradientMap:j,opaque:x.transparent===!1&&x.blending===ss&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:_t,alphaHash:pt,combine:x.combine,mapUv:ht&&g(x.map.channel),aoMapUv:L&&g(x.aoMap.channel),lightMapUv:Bt&&g(x.lightMap.channel),bumpMapUv:Dt&&g(x.bumpMap.channel),normalMapUv:It&&g(x.normalMap.channel),displacementMapUv:Et&&g(x.displacementMap.channel),emissiveMapUv:jt&&g(x.emissiveMap.channel),metalnessMapUv:bt&&g(x.metalnessMap.channel),roughnessMapUv:R&&g(x.roughnessMap.channel),anisotropyMapUv:ft&&g(x.anisotropyMap.channel),clearcoatMapUv:xt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:$t&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(x.sheenRoughnessMap.channel),specularMapUv:qt&&g(x.specularMap.channel),specularColorMapUv:Ht&&g(x.specularColorMap.channel),specularIntensityMapUv:ae&&g(x.specularIntensityMap.channel),transmissionMapUv:I&&g(x.transmissionMap.channel),thicknessMapUv:dt&&g(x.thicknessMap.channel),alphaMapUv:tt&&g(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(It||y),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(ht||tt),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:vt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:xe,decodeVideoTexture:ht&&x.map.isVideoTexture===!0&&Yt.getTransfer(x.map.colorSpace)===te,decodeVideoTextureEmissive:jt&&x.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(x.emissiveMap.colorSpace)===te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Cn,flipSided:x.side===qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:zt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&x.extensions.multiDraw===!0||Q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function f(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(M(S,x),E(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function M(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function E(x,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const S=_[x.type];let P;if(S){const O=sn[S];P=wr.clone(O.uniforms)}else P=x.uniforms;return P}function T(x,S){let P;for(let O=0,U=h.length;O<U;O++){const W=h[O];if(W.cacheKey===S){P=W,++P.usedTimes;break}}return P===void 0&&(P=new x2(r,S,x,s),h.push(P)),P}function A(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function w(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:T,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:C}}function b2(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function T2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ou(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Bu(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,_,g,m){let f=r[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),t++,f}function o(u,d,p,_,g,m){const f=a(u,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,_,g,m){const f=a(u,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||T2),n.length>1&&n.sort(d||Ou),i.length>1&&i.sort(d||Ou)}function h(){for(let u=t,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function w2(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Bu,r.set(n,[a])):i>=s.length?(a=new Bu,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function A2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Wt};break;case"SpotLight":e={position:new D,direction:new D,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function R2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let C2=0;function P2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function D2(r){const t=new A2,e=R2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,s=new me,a=new me;function o(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,M=0,E=0,v=0,T=0,A=0,w=0;c.sort(P2);for(let x=0,S=c.length;x<S;x++){const P=c[x],O=P.color,U=P.intensity,W=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*U,u+=O.g*U,d+=O.b*U;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],U);w++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,V=e.get(P);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=P.shadow.matrix,M++}n.directional[p]=z,p++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(O).multiplyScalar(U),z.distance=W,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[g]=z;const X=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,X.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[g]=X.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=k,v++}g++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(O).multiplyScalar(U),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=z,m++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const X=P.shadow,V=e.get(P);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=k,n.pointShadowMatrix[_]=P.shadow.matrix,E++}n.point[_]=z,_++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(U),z.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[f]=z,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==M||C.numPointShadows!==E||C.numSpotShadows!==v||C.numSpotMaps!==T||C.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=p,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=M,C.numPointShadows=E,C.numSpotShadows=v,C.numSpotMaps=T,C.numLightProbes=w,n.version=C2++)}function l(c,h){let u=0,d=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const E=c[f];if(E.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(E.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function zu(r){const t=new D2(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function L2(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new zu(r),t.set(i,[o])):s>=a.length?(o=new zu(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class I2 extends Ps{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class U2 extends Ps{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const N2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F2=`uniform sampler2D shadow_pass;
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
}`;function O2(r,t,e){let n=new f0;const i=new St,s=new St,a=new he,o=new I2({depthPacking:mp}),l=new U2,c={},h=e.maxTextureSize,u={[ji]:qe,[qe]:ji,[Cn]:Cn},d=new ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:N2,fragmentShader:F2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new je;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ee(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let f=this.type;this.render=function(A,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const x=r.getRenderTarget(),S=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Ei),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=f!==mi&&this.type===mi,W=f===mi&&this.type!==mi;for(let k=0,z=A.length;k<z;k++){const X=A[k],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const it=V.getFrameExtents();if(i.multiply(it),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/it.x),i.x=s.x*it.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/it.y),i.y=s.y*it.y,V.mapSize.y=s.y)),V.map===null||U===!0||W===!0){const ut=this.type!==mi?{minFilter:Wn,magFilter:Wn}:{};V.map!==null&&V.map.dispose(),V.map=new In(i.x,i.y,ut),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const J=V.getViewportCount();for(let ut=0;ut<J;ut++){const vt=V.getViewport(ut);a.set(s.x*vt.x,s.y*vt.y,s.x*vt.z,s.y*vt.w),O.viewport(a),V.updateMatrices(X,ut),n=V.getFrustum(),v(w,C,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===mi&&M(V,C),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(x,S,P)};function M(A,w){const C=t.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new In(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,C,d,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,C,p,g,null)}function E(A,w,C,x){let S=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=S.uuid,U=w.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let k=W[U];k===void 0&&(k=S.clone(),W[U]=k,w.addEventListener("dispose",T)),S=k}if(S.visible=w.visible,S.wireframe=w.wireframe,x===mi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=r.properties.get(S);O.light=C}return S}function v(A,w,C,x,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===mi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const U=t.update(A),W=A.material;if(Array.isArray(W)){const k=U.groups;for(let z=0,X=k.length;z<X;z++){const V=k[z],it=W[V.materialIndex];if(it&&it.visible){const J=E(A,it,x,S);A.onBeforeShadow(r,A,w,C,U,J,V),r.renderBufferDirect(C,null,U,J,A,V),A.onAfterShadow(r,A,w,C,U,J,V)}}}else if(W.visible){const k=E(A,W,x,S);A.onBeforeShadow(r,A,w,C,U,k,null),r.renderBufferDirect(C,null,U,k,A,null),A.onAfterShadow(r,A,w,C,U,k,null)}}const O=A.children;for(let U=0,W=O.length;U<W;U++)v(O[U],w,C,x,S)}function T(A){A.target.removeEventListener("dispose",T);for(const C in c){const x=c[C],S=A.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const B2={[Bl]:zl,[kl]:Gl,[Vl]:Wl,[ms]:Hl,[zl]:Bl,[Gl]:kl,[Wl]:Vl,[Hl]:ms};function z2(r,t){function e(){let I=!1;const dt=new he;let j=null;const tt=new he(0,0,0,0);return{setMask:function(_t){j!==_t&&!I&&(r.colorMask(_t,_t,_t,_t),j=_t)},setLocked:function(_t){I=_t},setClear:function(_t,pt,zt,xe,ke){ke===!0&&(_t*=xe,pt*=xe,zt*=xe),dt.set(_t,pt,zt,xe),tt.equals(dt)===!1&&(r.clearColor(_t,pt,zt,xe),tt.copy(dt))},reset:function(){I=!1,j=null,tt.set(-1,0,0,0)}}}function n(){let I=!1,dt=!1,j=null,tt=null,_t=null;return{setReversed:function(pt){if(dt!==pt){const zt=t.get("EXT_clip_control");dt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const xe=_t;_t=null,this.setClear(xe)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?ct(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(pt){j!==pt&&!I&&(r.depthMask(pt),j=pt)},setFunc:function(pt){if(dt&&(pt=B2[pt]),tt!==pt){switch(pt){case Bl:r.depthFunc(r.NEVER);break;case zl:r.depthFunc(r.ALWAYS);break;case kl:r.depthFunc(r.LESS);break;case ms:r.depthFunc(r.LEQUAL);break;case Vl:r.depthFunc(r.EQUAL);break;case Hl:r.depthFunc(r.GEQUAL);break;case Gl:r.depthFunc(r.GREATER);break;case Wl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}tt=pt}},setLocked:function(pt){I=pt},setClear:function(pt){_t!==pt&&(dt&&(pt=1-pt),r.clearDepth(pt),_t=pt)},reset:function(){I=!1,j=null,tt=null,_t=null,dt=!1}}}function i(){let I=!1,dt=null,j=null,tt=null,_t=null,pt=null,zt=null,xe=null,ke=null;return{setTest:function(Qt){I||(Qt?ct(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(Qt){dt!==Qt&&!I&&(r.stencilMask(Qt),dt=Qt)},setFunc:function(Qt,Un,li){(j!==Qt||tt!==Un||_t!==li)&&(r.stencilFunc(Qt,Un,li),j=Qt,tt=Un,_t=li)},setOp:function(Qt,Un,li){(pt!==Qt||zt!==Un||xe!==li)&&(r.stencilOp(Qt,Un,li),pt=Qt,zt=Un,xe=li)},setLocked:function(Qt){I=Qt},setClear:function(Qt){ke!==Qt&&(r.clearStencil(Qt),ke=Qt)},reset:function(){I=!1,dt=null,j=null,tt=null,_t=null,pt=null,zt=null,xe=null,ke=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,M=null,E=null,v=null,T=null,A=null,w=new Wt(0,0,0),C=0,x=!1,S=null,P=null,O=null,U=null,W=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,X=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=X>=2);let it=null,J={};const ut=r.getParameter(r.SCISSOR_BOX),vt=r.getParameter(r.VIEWPORT),Ft=new he().fromArray(ut),$=new he().fromArray(vt);function et(I,dt,j,tt){const _t=new Uint8Array(4),pt=r.createTexture();r.bindTexture(I,pt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let zt=0;zt<j;zt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(dt,0,r.RGBA,1,1,tt,0,r.RGBA,r.UNSIGNED_BYTE,_t):r.texImage2D(dt+zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_t);return pt}const gt={};gt[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),gt[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),gt[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(r.DEPTH_TEST),a.setFunc(ms),Dt(!1),It(Wh),ct(r.CULL_FACE),L(Ei);function ct(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function Rt(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function H(I,dt){return u[I]!==dt?(r.bindFramebuffer(I,dt),u[I]=dt,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=dt),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=dt),!0):!1}function Q(I,dt){let j=p,tt=!1;if(I){j=d.get(dt),j===void 0&&(j=[],d.set(dt,j));const _t=I.textures;if(j.length!==_t.length||j[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,zt=_t.length;pt<zt;pt++)j[pt]=r.COLOR_ATTACHMENT0+pt;j.length=_t.length,tt=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,tt=!0);tt&&r.drawBuffers(j)}function ht(I){return _!==I?(r.useProgram(I),_=I,!0):!1}const rt={[pr]:r.FUNC_ADD,[Yf]:r.FUNC_SUBTRACT,[$f]:r.FUNC_REVERSE_SUBTRACT};rt[jf]=r.MIN,rt[Kf]=r.MAX;const st={[Zf]:r.ZERO,[Jf]:r.ONE,[Qf]:r.SRC_COLOR,[Fl]:r.SRC_ALPHA,[sp]:r.SRC_ALPHA_SATURATE,[ip]:r.DST_COLOR,[ep]:r.DST_ALPHA,[tp]:r.ONE_MINUS_SRC_COLOR,[Ol]:r.ONE_MINUS_SRC_ALPHA,[rp]:r.ONE_MINUS_DST_COLOR,[np]:r.ONE_MINUS_DST_ALPHA,[ap]:r.CONSTANT_COLOR,[op]:r.ONE_MINUS_CONSTANT_COLOR,[lp]:r.CONSTANT_ALPHA,[cp]:r.ONE_MINUS_CONSTANT_ALPHA};function L(I,dt,j,tt,_t,pt,zt,xe,ke,Qt){if(I===Ei){g===!0&&(Rt(r.BLEND),g=!1);return}if(g===!1&&(ct(r.BLEND),g=!0),I!==qf){if(I!==m||Qt!==x){if((f!==pr||v!==pr)&&(r.blendEquation(r.FUNC_ADD),f=pr,v=pr),Qt)switch(I){case ss:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ki:r.blendFunc(r.ONE,r.ONE);break;case Xh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ss:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ki:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,E=null,T=null,A=null,w.set(0,0,0),C=0,m=I,x=Qt}return}_t=_t||dt,pt=pt||j,zt=zt||tt,(dt!==f||_t!==v)&&(r.blendEquationSeparate(rt[dt],rt[_t]),f=dt,v=_t),(j!==M||tt!==E||pt!==T||zt!==A)&&(r.blendFuncSeparate(st[j],st[tt],st[pt],st[zt]),M=j,E=tt,T=pt,A=zt),(xe.equals(w)===!1||ke!==C)&&(r.blendColor(xe.r,xe.g,xe.b,ke),w.copy(xe),C=ke),m=I,x=!1}function Bt(I,dt){I.side===Cn?Rt(r.CULL_FACE):ct(r.CULL_FACE);let j=I.side===qe;dt&&(j=!j),Dt(j),I.blending===ss&&I.transparent===!1?L(Ei):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const tt=I.stencilWrite;o.setTest(tt),tt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),jt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ct(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(I){S!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),S=I)}function It(I){I!==Gf?(ct(r.CULL_FACE),I!==P&&(I===Wh?r.cullFace(r.BACK):I===Wf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),P=I}function Et(I){I!==O&&(z&&r.lineWidth(I),O=I)}function jt(I,dt,j){I?(ct(r.POLYGON_OFFSET_FILL),(U!==dt||W!==j)&&(r.polygonOffset(dt,j),U=dt,W=j)):Rt(r.POLYGON_OFFSET_FILL)}function bt(I){I?ct(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function R(I){I===void 0&&(I=r.TEXTURE0+k-1),it!==I&&(r.activeTexture(I),it=I)}function y(I,dt,j){j===void 0&&(it===null?j=r.TEXTURE0+k-1:j=it);let tt=J[j];tt===void 0&&(tt={type:void 0,texture:void 0},J[j]=tt),(tt.type!==I||tt.texture!==dt)&&(it!==j&&(r.activeTexture(j),it=j),r.bindTexture(I,dt||gt[I]),tt.type=I,tt.texture=dt)}function G(){const I=J[it];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(I){Ft.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Ft.copy(I))}function Mt(I){$.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function qt(I,dt){let j=c.get(dt);j===void 0&&(j=new WeakMap,c.set(dt,j));let tt=j.get(I);tt===void 0&&(tt=r.getUniformBlockIndex(dt,I.name),j.set(I,tt))}function Ht(I,dt){const tt=c.get(dt).get(I);l.get(dt)!==tt&&(r.uniformBlockBinding(dt,tt,I.__bindingPointIndex),l.set(dt,tt))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},it=null,J={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,M=null,E=null,v=null,T=null,A=null,w=new Wt(0,0,0),C=0,x=!1,S=null,P=null,O=null,U=null,W=null,Ft.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ct,disable:Rt,bindFramebuffer:H,drawBuffers:Q,useProgram:ht,setBlending:L,setMaterial:Bt,setFlipSided:Dt,setCullFace:It,setLineWidth:Et,setPolygonOffset:jt,setScissorTest:bt,activeTexture:R,bindTexture:y,unbindTexture:G,compressedTexImage2D:Z,compressedTexImage3D:nt,texImage2D:yt,texImage3D:Lt,updateUBOMapping:qt,uniformBlockBinding:Ht,texStorage2D:$t,texStorage3D:at,texSubImage2D:K,texSubImage3D:Ct,compressedTexSubImage2D:ft,compressedTexSubImage3D:xt,scissor:Nt,viewport:Mt,reset:ae}}function ku(r,t,e,n){const i=k2(n);switch(e){case Kd:return r*t;case Jd:return r*t;case Qd:return r*t*2;case t0:return r*t/i.components*i.byteLength;case ih:return r*t/i.components*i.byteLength;case e0:return r*t*2/i.components*i.byteLength;case rh:return r*t*2/i.components*i.byteLength;case Zd:return r*t*3/i.components*i.byteLength;case Gn:return r*t*4/i.components*i.byteLength;case sh:return r*t*4/i.components*i.byteLength;case ao:case oo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lo:case co:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case jl:case Zl:return Math.max(r,16)*Math.max(t,8)/4;case $l:case Kl:return Math.max(r,8)*Math.max(t,8)/2;case Jl:case Ql:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ic:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case sc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case oc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case lc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case fc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case pc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ho:case mc:case gc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case n0:case _c:return Math.ceil(r/4)*Math.ceil(t/4)*8;case vc:case xc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function k2(r){switch(r){case wi:case Yd:return{byteLength:1,components:1};case ra:case $d:case ri:return{byteLength:2,components:1};case eh:case nh:return{byteLength:2,components:4};case Tr:case th:case Si:return{byteLength:4,components:1};case jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function V2(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return p?new OffscreenCanvas(R,y):aa("canvas")}function g(R,y,G){let Z=1;const nt=bt(R);if((nt.width>G||nt.height>G)&&(Z=G/Math.max(nt.width,nt.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Z*nt.width),Ct=Math.floor(Z*nt.height);u===void 0&&(u=_(K,Ct));const ft=y?_(K,Ct):u;return ft.width=K,ft.height=Ct,ft.getContext("2d").drawImage(R,0,0,K,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+K+"x"+Ct+")."),ft}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){r.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(R,y,G,Z,nt=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=y;if(y===r.RED&&(G===r.FLOAT&&(K=r.R32F),G===r.HALF_FLOAT&&(K=r.R16F),G===r.UNSIGNED_BYTE&&(K=r.R8)),y===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.R8UI),G===r.UNSIGNED_SHORT&&(K=r.R16UI),G===r.UNSIGNED_INT&&(K=r.R32UI),G===r.BYTE&&(K=r.R8I),G===r.SHORT&&(K=r.R16I),G===r.INT&&(K=r.R32I)),y===r.RG&&(G===r.FLOAT&&(K=r.RG32F),G===r.HALF_FLOAT&&(K=r.RG16F),G===r.UNSIGNED_BYTE&&(K=r.RG8)),y===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RG8UI),G===r.UNSIGNED_SHORT&&(K=r.RG16UI),G===r.UNSIGNED_INT&&(K=r.RG32UI),G===r.BYTE&&(K=r.RG8I),G===r.SHORT&&(K=r.RG16I),G===r.INT&&(K=r.RG32I)),y===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGB8UI),G===r.UNSIGNED_SHORT&&(K=r.RGB16UI),G===r.UNSIGNED_INT&&(K=r.RGB32UI),G===r.BYTE&&(K=r.RGB8I),G===r.SHORT&&(K=r.RGB16I),G===r.INT&&(K=r.RGB32I)),y===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),G===r.UNSIGNED_INT&&(K=r.RGBA32UI),G===r.BYTE&&(K=r.RGBA8I),G===r.SHORT&&(K=r.RGBA16I),G===r.INT&&(K=r.RGBA32I)),y===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),y===r.RGBA){const Ct=nt?No:Yt.getTransfer(Z);G===r.FLOAT&&(K=r.RGBA32F),G===r.HALF_FLOAT&&(K=r.RGBA16F),G===r.UNSIGNED_BYTE&&(K=Ct===te?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(R,y){let G;return R?y===null||y===Tr||y===xs?G=r.DEPTH24_STENCIL8:y===Si?G=r.DEPTH32F_STENCIL8:y===ra&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Tr||y===xs?G=r.DEPTH_COMPONENT24:y===Si?G=r.DEPTH_COMPONENT32F:y===ra&&(G=r.DEPTH_COMPONENT16),G}function T(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wn&&R.minFilter!==ei?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){const y=R.target;y.removeEventListener("dispose",A),C(y),y.isVideoTexture&&h.delete(y)}function w(R){const y=R.target;y.removeEventListener("dispose",w),S(y)}function C(R){const y=n.get(R);if(y.__webglInit===void 0)return;const G=R.source,Z=d.get(G);if(Z){const nt=Z[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&x(R),Object.keys(Z).length===0&&d.delete(G)}n.remove(R)}function x(R){const y=n.get(R);r.deleteTexture(y.__webglTexture);const G=R.source,Z=d.get(G);delete Z[y.__cacheKey],a.memory.textures--}function S(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let nt=0;nt<y.__webglFramebuffer[Z].length;nt++)r.deleteFramebuffer(y.__webglFramebuffer[Z][nt]);else r.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)r.deleteFramebuffer(y.__webglFramebuffer[Z]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=R.textures;for(let Z=0,nt=G.length;Z<nt;Z++){const K=n.get(G[Z]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(G[Z])}n.remove(R)}let P=0;function O(){P=0}function U(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function W(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function k(R,y){const G=n.get(R);if(R.isVideoTexture&&Et(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,R,y);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+y)}function z(R,y){const G=n.get(R);if(R.version>0&&G.__version!==R.version){$(G,R,y);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+y)}function X(R,y){const G=n.get(R);if(R.version>0&&G.__version!==R.version){$(G,R,y);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+y)}function V(R,y){const G=n.get(R);if(R.version>0&&G.__version!==R.version){et(G,R,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+y)}const it={[vs]:r.REPEAT,[ti]:r.CLAMP_TO_EDGE,[Yl]:r.MIRRORED_REPEAT},J={[Wn]:r.NEAREST,[fp]:r.NEAREST_MIPMAP_NEAREST,[Ma]:r.NEAREST_MIPMAP_LINEAR,[ei]:r.LINEAR,[Wo]:r.LINEAR_MIPMAP_NEAREST,[_r]:r.LINEAR_MIPMAP_LINEAR},ut={[vp]:r.NEVER,[bp]:r.ALWAYS,[xp]:r.LESS,[i0]:r.LEQUAL,[Sp]:r.EQUAL,[Ep]:r.GEQUAL,[yp]:r.GREATER,[Mp]:r.NOTEQUAL};function vt(R,y){if(y.type===Si&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ei||y.magFilter===Wo||y.magFilter===Ma||y.magFilter===_r||y.minFilter===ei||y.minFilter===Wo||y.minFilter===Ma||y.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,it[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,it[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,it[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,J[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,J[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ut[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Wn||y.minFilter!==Ma&&y.minFilter!==_r||y.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ft(R,y){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));const Z=y.source;let nt=d.get(Z);nt===void 0&&(nt={},d.set(Z,nt));const K=W(y);if(K!==R.__cacheKey){nt[K]===void 0&&(nt[K]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),nt[K].usedTimes++;const Ct=nt[R.__cacheKey];Ct!==void 0&&(nt[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&x(y)),R.__cacheKey=K,R.__webglTexture=nt[K].texture}return G}function $(R,y,G){let Z=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=r.TEXTURE_3D);const nt=Ft(R,y),K=y.source;e.bindTexture(Z,R.__webglTexture,r.TEXTURE0+G);const Ct=n.get(K);if(K.version!==Ct.__version||nt===!0){e.activeTexture(r.TEXTURE0+G);const ft=Yt.getPrimaries(Yt.workingColorSpace),xt=y.colorSpace===Vi?null:Yt.getPrimaries(y.colorSpace),$t=y.colorSpace===Vi||ft===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let at=g(y.image,!1,i.maxTextureSize);at=jt(y,at);const yt=s.convert(y.format,y.colorSpace),Lt=s.convert(y.type);let Nt=E(y.internalFormat,yt,Lt,y.colorSpace,y.isVideoTexture);vt(Z,y);let Mt;const qt=y.mipmaps,Ht=y.isVideoTexture!==!0,ae=Ct.__version===void 0||nt===!0,I=K.dataReady,dt=T(y,at);if(y.isDepthTexture)Nt=v(y.format===Ss,y.type),ae&&(Ht?e.texStorage2D(r.TEXTURE_2D,1,Nt,at.width,at.height):e.texImage2D(r.TEXTURE_2D,0,Nt,at.width,at.height,0,yt,Lt,null));else if(y.isDataTexture)if(qt.length>0){Ht&&ae&&e.texStorage2D(r.TEXTURE_2D,dt,Nt,qt[0].width,qt[0].height);for(let j=0,tt=qt.length;j<tt;j++)Mt=qt[j],Ht?I&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,Mt.width,Mt.height,yt,Lt,Mt.data):e.texImage2D(r.TEXTURE_2D,j,Nt,Mt.width,Mt.height,0,yt,Lt,Mt.data);y.generateMipmaps=!1}else Ht?(ae&&e.texStorage2D(r.TEXTURE_2D,dt,Nt,at.width,at.height),I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,at.width,at.height,yt,Lt,at.data)):e.texImage2D(r.TEXTURE_2D,0,Nt,at.width,at.height,0,yt,Lt,at.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ht&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,Nt,qt[0].width,qt[0].height,at.depth);for(let j=0,tt=qt.length;j<tt;j++)if(Mt=qt[j],y.format!==Gn)if(yt!==null)if(Ht){if(I)if(y.layerUpdates.size>0){const _t=ku(Mt.width,Mt.height,y.format,y.type);for(const pt of y.layerUpdates){const zt=Mt.data.subarray(pt*_t/Mt.data.BYTES_PER_ELEMENT,(pt+1)*_t/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,pt,Mt.width,Mt.height,1,yt,zt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,Mt.width,Mt.height,at.depth,yt,Mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Nt,Mt.width,Mt.height,at.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?I&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,Mt.width,Mt.height,at.depth,yt,Lt,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,j,Nt,Mt.width,Mt.height,at.depth,0,yt,Lt,Mt.data)}else{Ht&&ae&&e.texStorage2D(r.TEXTURE_2D,dt,Nt,qt[0].width,qt[0].height);for(let j=0,tt=qt.length;j<tt;j++)Mt=qt[j],y.format!==Gn?yt!==null?Ht?I&&e.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,j,Nt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?I&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,Mt.width,Mt.height,yt,Lt,Mt.data):e.texImage2D(r.TEXTURE_2D,j,Nt,Mt.width,Mt.height,0,yt,Lt,Mt.data)}else if(y.isDataArrayTexture)if(Ht){if(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,Nt,at.width,at.height,at.depth),I)if(y.layerUpdates.size>0){const j=ku(at.width,at.height,y.format,y.type);for(const tt of y.layerUpdates){const _t=at.data.subarray(tt*j/at.data.BYTES_PER_ELEMENT,(tt+1)*j/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,at.width,at.height,1,yt,Lt,_t)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,yt,Lt,at.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,at.width,at.height,at.depth,0,yt,Lt,at.data);else if(y.isData3DTexture)Ht?(ae&&e.texStorage3D(r.TEXTURE_3D,dt,Nt,at.width,at.height,at.depth),I&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,yt,Lt,at.data)):e.texImage3D(r.TEXTURE_3D,0,Nt,at.width,at.height,at.depth,0,yt,Lt,at.data);else if(y.isFramebufferTexture){if(ae)if(Ht)e.texStorage2D(r.TEXTURE_2D,dt,Nt,at.width,at.height);else{let j=at.width,tt=at.height;for(let _t=0;_t<dt;_t++)e.texImage2D(r.TEXTURE_2D,_t,Nt,j,tt,0,yt,Lt,null),j>>=1,tt>>=1}}else if(qt.length>0){if(Ht&&ae){const j=bt(qt[0]);e.texStorage2D(r.TEXTURE_2D,dt,Nt,j.width,j.height)}for(let j=0,tt=qt.length;j<tt;j++)Mt=qt[j],Ht?I&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,yt,Lt,Mt):e.texImage2D(r.TEXTURE_2D,j,Nt,yt,Lt,Mt);y.generateMipmaps=!1}else if(Ht){if(ae){const j=bt(at);e.texStorage2D(r.TEXTURE_2D,dt,Nt,j.width,j.height)}I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,yt,Lt,at)}else e.texImage2D(r.TEXTURE_2D,0,Nt,yt,Lt,at);m(y)&&f(Z),Ct.__version=K.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function et(R,y,G){if(y.image.length!==6)return;const Z=Ft(R,y),nt=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+G);const K=n.get(nt);if(nt.version!==K.__version||Z===!0){e.activeTexture(r.TEXTURE0+G);const Ct=Yt.getPrimaries(Yt.workingColorSpace),ft=y.colorSpace===Vi?null:Yt.getPrimaries(y.colorSpace),xt=y.colorSpace===Vi||Ct===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const $t=y.isCompressedTexture||y.image[0].isCompressedTexture,at=y.image[0]&&y.image[0].isDataTexture,yt=[];for(let tt=0;tt<6;tt++)!$t&&!at?yt[tt]=g(y.image[tt],!0,i.maxCubemapSize):yt[tt]=at?y.image[tt].image:y.image[tt],yt[tt]=jt(y,yt[tt]);const Lt=yt[0],Nt=s.convert(y.format,y.colorSpace),Mt=s.convert(y.type),qt=E(y.internalFormat,Nt,Mt,y.colorSpace),Ht=y.isVideoTexture!==!0,ae=K.__version===void 0||Z===!0,I=nt.dataReady;let dt=T(y,Lt);vt(r.TEXTURE_CUBE_MAP,y);let j;if($t){Ht&&ae&&e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,qt,Lt.width,Lt.height);for(let tt=0;tt<6;tt++){j=yt[tt].mipmaps;for(let _t=0;_t<j.length;_t++){const pt=j[_t];y.format!==Gn?Nt!==null?Ht?I&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,pt.width,pt.height,Nt,pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,qt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,pt.width,pt.height,Nt,Mt,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,qt,pt.width,pt.height,0,Nt,Mt,pt.data)}}}else{if(j=y.mipmaps,Ht&&ae){j.length>0&&dt++;const tt=bt(yt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(at){Ht?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,yt[tt].width,yt[tt].height,Nt,Mt,yt[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,yt[tt].width,yt[tt].height,0,Nt,Mt,yt[tt].data);for(let _t=0;_t<j.length;_t++){const zt=j[_t].image[tt].image;Ht?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,zt.width,zt.height,Nt,Mt,zt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,qt,zt.width,zt.height,0,Nt,Mt,zt.data)}}else{Ht?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Nt,Mt,yt[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,Nt,Mt,yt[tt]);for(let _t=0;_t<j.length;_t++){const pt=j[_t];Ht?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,Nt,Mt,pt.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,qt,Nt,Mt,pt.image[tt])}}}m(y)&&f(r.TEXTURE_CUBE_MAP),K.__version=nt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function gt(R,y,G,Z,nt,K){const Ct=s.convert(G.format,G.colorSpace),ft=s.convert(G.type),xt=E(G.internalFormat,Ct,ft,G.colorSpace),$t=n.get(y),at=n.get(G);if(at.__renderTarget=y,!$t.__hasExternalTextures){const yt=Math.max(1,y.width>>K),Lt=Math.max(1,y.height>>K);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,K,xt,yt,Lt,y.depth,0,Ct,ft,null):e.texImage2D(nt,K,xt,yt,Lt,0,Ct,ft,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),It(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,nt,at.__webglTexture,0,Dt(y)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,nt,at.__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(R,y,G){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){const Z=y.depthTexture,nt=Z&&Z.isDepthTexture?Z.type:null,K=v(y.stencilBuffer,nt),Ct=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=Dt(y);It(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,K,y.width,y.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,K,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,K,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ct,r.RENDERBUFFER,R)}else{const Z=y.textures;for(let nt=0;nt<Z.length;nt++){const K=Z[nt],Ct=s.convert(K.format,K.colorSpace),ft=s.convert(K.type),xt=E(K.internalFormat,Ct,ft,K.colorSpace),$t=Dt(y);G&&It(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$t,xt,y.width,y.height):It(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$t,xt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,xt,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Rt(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k(y.depthTexture,0);const nt=Z.__webglTexture,K=Dt(y);if(y.depthTexture.format===as)It(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(y.depthTexture.format===Ss)It(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function H(R){const y=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",nt)};Z.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=Z}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Rt(y.__webglFramebuffer,R)}else if(G){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=r.createRenderbuffer(),ct(y.__webglDepthbuffer[Z],R,!1);else{const nt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),ct(y.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,nt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,nt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(R,y,G){const Z=n.get(R);y!==void 0&&gt(Z.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&H(R)}function ht(R){const y=R.texture,G=n.get(R),Z=n.get(y);R.addEventListener("dispose",w);const nt=R.textures,K=R.isWebGLCubeRenderTarget===!0,Ct=nt.length>1;if(Ct||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=y.version,a.memory.textures++),K){G.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[ft]=[];for(let xt=0;xt<y.mipmaps.length;xt++)G.__webglFramebuffer[ft][xt]=r.createFramebuffer()}else G.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let ft=0;ft<y.mipmaps.length;ft++)G.__webglFramebuffer[ft]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Ct)for(let ft=0,xt=nt.length;ft<xt;ft++){const $t=n.get(nt[ft]);$t.__webglTexture===void 0&&($t.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&It(R)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ft=0;ft<nt.length;ft++){const xt=nt[ft];G.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ft]);const $t=s.convert(xt.format,xt.colorSpace),at=s.convert(xt.type),yt=E(xt.internalFormat,$t,at,xt.colorSpace,R.isXRRenderTarget===!0),Lt=Dt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,yt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,G.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ct(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),vt(r.TEXTURE_CUBE_MAP,y);for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)gt(G.__webglFramebuffer[ft][xt],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,xt);else gt(G.__webglFramebuffer[ft],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(y)&&f(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ft=0,xt=nt.length;ft<xt;ft++){const $t=nt[ft],at=n.get($t);e.bindTexture(r.TEXTURE_2D,at.__webglTexture),vt(r.TEXTURE_2D,$t),gt(G.__webglFramebuffer,R,$t,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,0),m($t)&&f(r.TEXTURE_2D)}e.unbindTexture()}else{let ft=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ft,Z.__webglTexture),vt(ft,y),y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)gt(G.__webglFramebuffer[xt],R,y,r.COLOR_ATTACHMENT0,ft,xt);else gt(G.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,ft,0);m(y)&&f(ft),e.unbindTexture()}R.depthBuffer&&H(R)}function rt(R){const y=R.textures;for(let G=0,Z=y.length;G<Z;G++){const nt=y[G];if(m(nt)){const K=M(R),Ct=n.get(nt).__webglTexture;e.bindTexture(K,Ct),f(K),e.unbindTexture()}}}const st=[],L=[];function Bt(R){if(R.samples>0){if(It(R)===!1){const y=R.textures,G=R.width,Z=R.height;let nt=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=n.get(R),ft=y.length>1;if(ft)for(let xt=0;xt<y.length;xt++)e.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let xt=0;xt<y.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ct.__webglColorRenderbuffer[xt]);const $t=n.get(y[xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$t,0)}r.blitFramebuffer(0,0,G,Z,0,0,G,Z,nt,r.NEAREST),l===!0&&(st.length=0,L.length=0,st.push(r.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(st.push(K),L.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let xt=0;xt<y.length;xt++){e.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,Ct.__webglColorRenderbuffer[xt]);const $t=n.get(y[xt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,$t,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Dt(R){return Math.min(i.maxSamples,R.samples)}function It(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Et(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function jt(R,y){const G=R.colorSpace,Z=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Rs&&G!==Vi&&(Yt.getTransfer(G)===te?(Z!==Gn||nt!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=Q,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=It}function H2(r,t){function e(n,i=Vi){let s;const a=Yt.getTransfer(i);if(n===wi)return r.UNSIGNED_BYTE;if(n===eh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===nh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===jd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Yd)return r.BYTE;if(n===$d)return r.SHORT;if(n===ra)return r.UNSIGNED_SHORT;if(n===th)return r.INT;if(n===Tr)return r.UNSIGNED_INT;if(n===Si)return r.FLOAT;if(n===ri)return r.HALF_FLOAT;if(n===Kd)return r.ALPHA;if(n===Zd)return r.RGB;if(n===Gn)return r.RGBA;if(n===Jd)return r.LUMINANCE;if(n===Qd)return r.LUMINANCE_ALPHA;if(n===as)return r.DEPTH_COMPONENT;if(n===Ss)return r.DEPTH_STENCIL;if(n===t0)return r.RED;if(n===ih)return r.RED_INTEGER;if(n===e0)return r.RG;if(n===rh)return r.RG_INTEGER;if(n===sh)return r.RGBA_INTEGER;if(n===ao||n===oo||n===lo||n===co)if(a===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$l||n===jl||n===Kl||n===Zl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$l)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===Ql||n===tc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Jl||n===Ql)return a===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===tc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ec||n===nc||n===ic||n===rc||n===sc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ec)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ho||n===mc||n===gc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ho)return a===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===n0||n===_c||n===vc||n===xc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ho)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class G2 extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rn extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W2={type:"move"};class _l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W2)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const X2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q2=`
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

}`;class Y2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ye,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ce({vertexShader:X2,fragmentShader:q2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new va(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $2 extends Rr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null;const g=new Y2,m=e.getContextAttributes();let f=null,M=null;const E=[],v=[],T=new St;let A=null;const w=new Rn;w.viewport=new he;const C=new Rn;C.viewport=new he;const x=[w,C],S=new G2;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=E[$];return et===void 0&&(et=new _l,E[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=E[$];return et===void 0&&(et=new _l,E[$]=et),et.getGripSpace()},this.getHand=function($){let et=E[$];return et===void 0&&(et=new _l,E[$]=et),et.getHandSpace()};function U($){const et=v.indexOf($.inputSource);if(et===-1)return;const gt=E[et];gt!==void 0&&(gt.update($.inputSource,$.frame,c||a),gt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",k);for(let $=0;$<E.length;$++){const et=v[$];et!==null&&(v[$]=null,E[$].disconnect(et))}P=null,O=null,g.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,M=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",W),i.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new In(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,gt=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Ss:as,gt=m.stencil?xs:Tr);const Rt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Rt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new In(d.textureWidth,d.textureHeight,{format:Gn,type:wi,depthTexture:new m0(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ft.setContext(i),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k($){for(let et=0;et<$.removed.length;et++){const gt=$.removed[et],ct=v.indexOf(gt);ct>=0&&(v[ct]=null,E[ct].disconnect(gt))}for(let et=0;et<$.added.length;et++){const gt=$.added[et];let ct=v.indexOf(gt);if(ct===-1){for(let H=0;H<E.length;H++)if(H>=v.length){v.push(gt),ct=H;break}else if(v[H]===null){v[H]=gt,ct=H;break}if(ct===-1)break}const Rt=E[ct];Rt&&Rt.connect(gt)}}const z=new D,X=new D;function V($,et,gt){z.setFromMatrixPosition(et.matrixWorld),X.setFromMatrixPosition(gt.matrixWorld);const ct=z.distanceTo(X),Rt=et.projectionMatrix.elements,H=gt.projectionMatrix.elements,Q=Rt[14]/(Rt[10]-1),ht=Rt[14]/(Rt[10]+1),rt=(Rt[9]+1)/Rt[5],st=(Rt[9]-1)/Rt[5],L=(Rt[8]-1)/Rt[0],Bt=(H[8]+1)/H[0],Dt=Q*L,It=Q*Bt,Et=ct/(-L+Bt),jt=Et*-L;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(jt),$.translateZ(Et),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Rt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const bt=Q+Et,R=ht+Et,y=Dt-jt,G=It+(ct-jt),Z=rt*ht/R*bt,nt=st*ht/R*bt;$.projectionMatrix.makePerspective(y,G,Z,nt,bt,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function it($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let et=$.near,gt=$.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),S.near=C.near=w.near=et,S.far=C.far=w.far=gt,(P!==S.near||O!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,O=S.far),w.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,S.layers.mask=w.layers.mask|C.layers.mask;const ct=$.parent,Rt=S.cameras;it(S,ct);for(let H=0;H<Rt.length;H++)it(Rt[H],ct);Rt.length===2?V(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),J($,S,ct)};function J($,et,gt){gt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(gt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=sa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let ut=null;function vt($,et){if(h=et.getViewerPose(c||a),_=et,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let ct=!1;gt.length!==S.cameras.length&&(S.cameras.length=0,ct=!0);for(let H=0;H<gt.length;H++){const Q=gt[H];let ht=null;if(p!==null)ht=p.getViewport(Q);else{const st=u.getViewSubImage(d,Q);ht=st.viewport,H===0&&(t.setRenderTargetTextures(M,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(M))}let rt=x[H];rt===void 0&&(rt=new Rn,rt.layers.enable(H),rt.viewport=new he,x[H]=rt),rt.matrix.fromArray(Q.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Q.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(ht.x,ht.y,ht.width,ht.height),H===0&&(S.matrix.copy(rt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ct===!0&&S.cameras.push(rt)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const H=u.getDepthInformation(gt[0]);H&&H.isValid&&H.texture&&g.init(t,H,i.renderState)}}for(let gt=0;gt<E.length;gt++){const ct=v[gt],Rt=E[gt];ct!==null&&Rt!==void 0&&Rt.update(ct,et,c||a)}ut&&ut($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const Ft=new p0;Ft.setAnimationLoop(vt),this.setAnimationLoop=function($){ut=$},this.dispose=function(){}}}const lr=new Ai,j2=new me;function K2(r,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,h0(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,M,E,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===qe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===qe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),E=M.envMap,v=M.envMapRotation;E&&(m.envMap.value=E,lr.copy(v),lr.x*=-1,lr.y*=-1,lr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),m.envMapRotation.value.setFromMatrix4(j2.makeRotationFromEuler(lr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Z2(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const v=E.program;n.uniformBlockBinding(M,v)}function c(M,E){let v=i[M.id];v===void 0&&(_(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",m));const T=E.program;n.updateUBOMapping(M,T);const A=t.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function h(M){const E=u();M.__bindingPointIndex=E;const v=r.createBuffer(),T=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,T,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const E=i[M.id],v=M.uniforms,T=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let A=0,w=v.length;A<w;A++){const C=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,S=C.length;x<S;x++){const P=C[x];if(p(P,A,x,T)===!0){const O=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let k=0;k<U.length;k++){const z=U[k],X=g(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,O+W,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,W),W+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(M,E,v,T){const A=M.value,w=E+"_"+v;if(T[w]===void 0)return typeof A=="number"||typeof A=="boolean"?T[w]=A:T[w]=A.clone(),!0;{const C=T[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return T[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function _(M){const E=M.uniforms;let v=0;const T=16;for(let w=0,C=E.length;w<C;w++){const x=Array.isArray(E[w])?E[w]:[E[w]];for(let S=0,P=x.length;S<P;S++){const O=x[S],U=Array.isArray(O.value)?O.value:[O.value];for(let W=0,k=U.length;W<k;W++){const z=U[W],X=g(z),V=v%T,it=V%X.boundary,J=V+it;v+=it,J!==0&&T-J<X.storage&&(v+=T-J),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=X.storage}}}const A=v%T;return A>0&&(v+=T-A),M.__size=v,M.__cache={},this}function g(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){const E=M.target;E.removeEventListener("dispose",m);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function f(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:f}}class S0{constructor(t={}){const{canvas:e=Vp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const M=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=qi,this.toneMappingExposure=1;const v=this;let T=!1,A=0,w=0,C=null,x=-1,S=null;const P=new he,O=new he;let U=null;const W=new Wt(0);let k=0,z=e.width,X=e.height,V=1,it=null,J=null;const ut=new he(0,0,z,X),vt=new he(0,0,z,X);let Ft=!1;const $=new f0;let et=!1,gt=!1;const ct=new me,Rt=new me,H=new D,Q=new he,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function st(){return C===null?V:1}let L=n;function Bt(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",pt,!1),L===null){const N="webgl2";if(L=Bt(N,b),L===null)throw Bt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Dt,It,Et,jt,bt,R,y,G,Z,nt,K,Ct,ft,xt,$t,at,yt,Lt,Nt,Mt,qt,Ht,ae,I;function dt(){Dt=new i_(L),Dt.init(),Ht=new H2(L,Dt),It=new Zg(L,Dt,t,Ht),Et=new z2(L,Dt),It.reverseDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),jt=new a_(L),bt=new b2,R=new V2(L,Dt,Et,bt,It,Ht,jt),y=new Qg(v),G=new n_(v),Z=new fm(L),ae=new jg(L,Z),nt=new r_(L,Z,jt,ae),K=new l_(L,nt,Z,jt),Nt=new o_(L,It,R),at=new Jg(bt),Ct=new E2(v,y,G,Dt,It,ae,at),ft=new K2(v,bt),xt=new w2,$t=new L2(Dt),Lt=new $g(v,y,G,Et,K,p,l),yt=new O2(v,K,It),I=new Z2(L,jt,It,Et),Mt=new Kg(L,Dt,jt),qt=new s_(L,Dt,jt),jt.programs=Ct.programs,v.capabilities=It,v.extensions=Dt,v.properties=bt,v.renderLists=xt,v.shadowMap=yt,v.state=Et,v.info=jt}dt();const j=new $2(v,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Dt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Dt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(z,X,!1))},this.getSize=function(b){return b.set(z,X)},this.setSize=function(b,N,q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,X=N,e.width=Math.floor(b*V),e.height=Math.floor(N*V),q===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(z*V,X*V).floor()},this.setDrawingBufferSize=function(b,N,q){z=b,X=N,V=q,e.width=Math.floor(b*q),e.height=Math.floor(N*q),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(ut)},this.setViewport=function(b,N,q,Y){b.isVector4?ut.set(b.x,b.y,b.z,b.w):ut.set(b,N,q,Y),Et.viewport(P.copy(ut).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(vt)},this.setScissor=function(b,N,q,Y){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,N,q,Y),Et.scissor(O.copy(vt).multiplyScalar(V).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(b){Et.setScissorTest(Ft=b)},this.setOpaqueSort=function(b){it=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(b=!0,N=!0,q=!0){let Y=0;if(b){let F=!1;if(C!==null){const ot=C.texture.format;F=ot===sh||ot===rh||ot===ih}if(F){const ot=C.texture.type,mt=ot===wi||ot===Tr||ot===ra||ot===xs||ot===eh||ot===nh,Tt=Lt.getClearColor(),wt=Lt.getClearAlpha(),Ot=Tt.r,kt=Tt.g,At=Tt.b;mt?(_[0]=Ot,_[1]=kt,_[2]=At,_[3]=wt,L.clearBufferuiv(L.COLOR,0,_)):(g[0]=Ot,g[1]=kt,g[2]=At,g[3]=wt,L.clearBufferiv(L.COLOR,0,g))}else Y|=L.COLOR_BUFFER_BIT}N&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),xt.dispose(),$t.dispose(),bt.dispose(),y.dispose(),G.dispose(),K.dispose(),ae.dispose(),I.dispose(),Ct.dispose(),j.dispose(),j.removeEventListener("sessionstart",Fh),j.removeEventListener("sessionend",Oh),nr.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=jt.autoReset,N=yt.enabled,q=yt.autoUpdate,Y=yt.needsUpdate,F=yt.type;dt(),jt.autoReset=b,yt.enabled=N,yt.autoUpdate=q,yt.needsUpdate=Y,yt.type=F}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function zt(b){const N=b.target;N.removeEventListener("dispose",zt),xe(N)}function xe(b){ke(b),bt.remove(b)}function ke(b){const N=bt.get(b).programs;N!==void 0&&(N.forEach(function(q){Ct.releaseProgram(q)}),b.isShaderMaterial&&Ct.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,q,Y,F,ot){N===null&&(N=ht);const mt=F.isMesh&&F.matrixWorld.determinant()<0,Tt=Bf(b,N,q,Y,F);Et.setMaterial(Y,mt);let wt=q.index,Ot=1;if(Y.wireframe===!0){if(wt=nt.getWireframeAttribute(q),wt===void 0)return;Ot=2}const kt=q.drawRange,At=q.attributes.position;let Kt=kt.start*Ot,oe=(kt.start+kt.count)*Ot;ot!==null&&(Kt=Math.max(Kt,ot.start*Ot),oe=Math.min(oe,(ot.start+ot.count)*Ot)),wt!==null?(Kt=Math.max(Kt,0),oe=Math.min(oe,wt.count)):At!=null&&(Kt=Math.max(Kt,0),oe=Math.min(oe,At.count));const ue=oe-Kt;if(ue<0||ue===1/0)return;ae.setup(F,Y,Tt,q,wt);let tn,Zt=Mt;if(wt!==null&&(tn=Z.get(wt),Zt=qt,Zt.setIndex(tn)),F.isMesh)Y.wireframe===!0?(Et.setLineWidth(Y.wireframeLinewidth*st()),Zt.setMode(L.LINES)):Zt.setMode(L.TRIANGLES);else if(F.isLine){let Pt=Y.linewidth;Pt===void 0&&(Pt=1),Et.setLineWidth(Pt*st()),F.isLineSegments?Zt.setMode(L.LINES):F.isLineLoop?Zt.setMode(L.LINE_LOOP):Zt.setMode(L.LINE_STRIP)}else F.isPoints?Zt.setMode(L.POINTS):F.isSprite&&Zt.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Zt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pt=F._multiDrawStarts,ci=F._multiDrawCounts,Jt=F._multiDrawCount,Nn=wt?Z.get(wt).bytesPerElement:1,Pr=bt.get(Y).currentProgram.getUniforms();for(let fn=0;fn<Jt;fn++)Pr.setValue(L,"_gl_DrawID",fn),Zt.render(Pt[fn]/Nn,ci[fn])}else if(F.isInstancedMesh)Zt.renderInstances(Kt,ue,F.count);else if(q.isInstancedBufferGeometry){const Pt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ci=Math.min(q.instanceCount,Pt);Zt.renderInstances(Kt,ue,ci)}else Zt.render(Kt,ue)};function Qt(b,N,q){b.transparent===!0&&b.side===Cn&&b.forceSinglePass===!1?(b.side=qe,b.needsUpdate=!0,ya(b,N,q),b.side=ji,b.needsUpdate=!0,ya(b,N,q),b.side=Cn):ya(b,N,q)}this.compile=function(b,N,q=null){q===null&&(q=b),f=$t.get(q),f.init(N),E.push(f),q.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),b!==q&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const Y=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ot=F.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){const Tt=ot[mt];Qt(Tt,q,F),Y.add(Tt)}else Qt(ot,q,F),Y.add(ot)}),E.pop(),f=null,Y},this.compileAsync=function(b,N,q=null){const Y=this.compile(b,N,q);return new Promise(F=>{function ot(){if(Y.forEach(function(mt){bt.get(mt).currentProgram.isReady()&&Y.delete(mt)}),Y.size===0){F(b);return}setTimeout(ot,10)}Dt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Un=null;function li(b){Un&&Un(b)}function Fh(){nr.stop()}function Oh(){nr.start()}const nr=new p0;nr.setAnimationLoop(li),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(b){Un=b,j.setAnimationLoop(b),b===null?nr.stop():nr.start()},j.addEventListener("sessionstart",Fh),j.addEventListener("sessionend",Oh),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,C),f=$t.get(b,E.length),f.init(N),E.push(f),Rt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(Rt),gt=this.localClippingEnabled,et=at.init(this.clippingPlanes,gt),m=xt.get(b,M.length),m.init(),M.push(m),j.enabled===!0&&j.isPresenting===!0){const ot=v.xr.getDepthSensingMesh();ot!==null&&Go(ot,N,-1/0,v.sortObjects)}Go(b,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,J),rt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,rt&&Lt.addToRenderList(m,b),this.info.render.frame++,et===!0&&at.beginShadows();const q=f.state.shadowsArray;yt.render(q,b,N),et===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,F=m.transmissive;if(f.setupLights(),N.isArrayCamera){const ot=N.cameras;if(F.length>0)for(let mt=0,Tt=ot.length;mt<Tt;mt++){const wt=ot[mt];zh(Y,F,b,wt)}rt&&Lt.render(b);for(let mt=0,Tt=ot.length;mt<Tt;mt++){const wt=ot[mt];Bh(m,b,wt,wt.viewport)}}else F.length>0&&zh(Y,F,b,N),rt&&Lt.render(b),Bh(m,b,N);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,N),ae.resetDefaultState(),x=-1,S=null,E.pop(),E.length>0?(f=E[E.length-1],et===!0&&at.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Go(b,N,q,Y){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){Y&&Q.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Rt);const mt=K.update(b),Tt=b.material;Tt.visible&&m.push(b,mt,Tt,q,Q.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const mt=K.update(b),Tt=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Q.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Q.copy(mt.boundingSphere.center)),Q.applyMatrix4(b.matrixWorld).applyMatrix4(Rt)),Array.isArray(Tt)){const wt=mt.groups;for(let Ot=0,kt=wt.length;Ot<kt;Ot++){const At=wt[Ot],Kt=Tt[At.materialIndex];Kt&&Kt.visible&&m.push(b,mt,Kt,q,Q.z,At)}}else Tt.visible&&m.push(b,mt,Tt,q,Q.z,null)}}const ot=b.children;for(let mt=0,Tt=ot.length;mt<Tt;mt++)Go(ot[mt],N,q,Y)}function Bh(b,N,q,Y){const F=b.opaque,ot=b.transmissive,mt=b.transparent;f.setupLightsView(q),et===!0&&at.setGlobalState(v.clippingPlanes,q),Y&&Et.viewport(P.copy(Y)),F.length>0&&Sa(F,N,q),ot.length>0&&Sa(ot,N,q),mt.length>0&&Sa(mt,N,q),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function zh(b,N,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new In(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?ri:wi,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const ot=f.state.transmissionRenderTarget[Y.id],mt=Y.viewport||P;ot.setSize(mt.z,mt.w);const Tt=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(W),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),rt&&Lt.render(q);const wt=v.toneMapping;v.toneMapping=qi;const Ot=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),et===!0&&at.setGlobalState(v.clippingPlanes,Y),Sa(b,q,Y),R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let At=0,Kt=N.length;At<Kt;At++){const oe=N[At],ue=oe.object,tn=oe.geometry,Zt=oe.material,Pt=oe.group;if(Zt.side===Cn&&ue.layers.test(Y.layers)){const ci=Zt.side;Zt.side=qe,Zt.needsUpdate=!0,kh(ue,q,Y,tn,Zt,Pt),Zt.side=ci,Zt.needsUpdate=!0,kt=!0}}kt===!0&&(R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot))}v.setRenderTarget(Tt),v.setClearColor(W,k),Ot!==void 0&&(Y.viewport=Ot),v.toneMapping=wt}function Sa(b,N,q){const Y=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ot=b.length;F<ot;F++){const mt=b[F],Tt=mt.object,wt=mt.geometry,Ot=Y===null?mt.material:Y,kt=mt.group;Tt.layers.test(q.layers)&&kh(Tt,N,q,wt,Ot,kt)}}function kh(b,N,q,Y,F,ot){b.onBeforeRender(v,N,q,Y,F,ot),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,N,q,Y,b,ot),F.transparent===!0&&F.side===Cn&&F.forceSinglePass===!1?(F.side=qe,F.needsUpdate=!0,v.renderBufferDirect(q,N,Y,F,b,ot),F.side=ji,F.needsUpdate=!0,v.renderBufferDirect(q,N,Y,F,b,ot),F.side=Cn):v.renderBufferDirect(q,N,Y,F,b,ot),b.onAfterRender(v,N,q,Y,F,ot)}function ya(b,N,q){N.isScene!==!0&&(N=ht);const Y=bt.get(b),F=f.state.lights,ot=f.state.shadowsArray,mt=F.state.version,Tt=Ct.getParameters(b,F.state,ot,N,q),wt=Ct.getProgramCacheKey(Tt);let Ot=Y.programs;Y.environment=b.isMeshStandardMaterial?N.environment:null,Y.fog=N.fog,Y.envMap=(b.isMeshStandardMaterial?G:y).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Ot===void 0&&(b.addEventListener("dispose",zt),Ot=new Map,Y.programs=Ot);let kt=Ot.get(wt);if(kt!==void 0){if(Y.currentProgram===kt&&Y.lightsStateVersion===mt)return Hh(b,Tt),kt}else Tt.uniforms=Ct.getUniforms(b),b.onBeforeCompile(Tt,v),kt=Ct.acquireProgram(Tt,wt),Ot.set(wt,kt),Y.uniforms=Tt.uniforms;const At=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(At.clippingPlanes=at.uniform),Hh(b,Tt),Y.needsLights=kf(b),Y.lightsStateVersion=mt,Y.needsLights&&(At.ambientLightColor.value=F.state.ambient,At.lightProbe.value=F.state.probe,At.directionalLights.value=F.state.directional,At.directionalLightShadows.value=F.state.directionalShadow,At.spotLights.value=F.state.spot,At.spotLightShadows.value=F.state.spotShadow,At.rectAreaLights.value=F.state.rectArea,At.ltc_1.value=F.state.rectAreaLTC1,At.ltc_2.value=F.state.rectAreaLTC2,At.pointLights.value=F.state.point,At.pointLightShadows.value=F.state.pointShadow,At.hemisphereLights.value=F.state.hemi,At.directionalShadowMap.value=F.state.directionalShadowMap,At.directionalShadowMatrix.value=F.state.directionalShadowMatrix,At.spotShadowMap.value=F.state.spotShadowMap,At.spotLightMatrix.value=F.state.spotLightMatrix,At.spotLightMap.value=F.state.spotLightMap,At.pointShadowMap.value=F.state.pointShadowMap,At.pointShadowMatrix.value=F.state.pointShadowMatrix),Y.currentProgram=kt,Y.uniformsList=null,kt}function Vh(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=uo.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Hh(b,N){const q=bt.get(b);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function Bf(b,N,q,Y,F){N.isScene!==!0&&(N=ht),R.resetTextureUnits();const ot=N.fog,mt=Y.isMeshStandardMaterial?N.environment:null,Tt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Rs,wt=(Y.isMeshStandardMaterial?G:y).get(Y.envMap||mt),Ot=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,kt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),At=!!q.morphAttributes.position,Kt=!!q.morphAttributes.normal,oe=!!q.morphAttributes.color;let ue=qi;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ue=v.toneMapping);const tn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Zt=tn!==void 0?tn.length:0,Pt=bt.get(Y),ci=f.state.lights;if(et===!0&&(gt===!0||b!==S)){const En=b===S&&Y.id===x;at.setState(Y,b,En)}let Jt=!1;Y.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==ci.state.version||Pt.outputColorSpace!==Tt||F.isBatchedMesh&&Pt.batching===!1||!F.isBatchedMesh&&Pt.batching===!0||F.isBatchedMesh&&Pt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pt.instancing===!1||!F.isInstancedMesh&&Pt.instancing===!0||F.isSkinnedMesh&&Pt.skinning===!1||!F.isSkinnedMesh&&Pt.skinning===!0||F.isInstancedMesh&&Pt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pt.instancingMorph===!1&&F.morphTexture!==null||Pt.envMap!==wt||Y.fog===!0&&Pt.fog!==ot||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==at.numPlanes||Pt.numIntersection!==at.numIntersection)||Pt.vertexAlphas!==Ot||Pt.vertexTangents!==kt||Pt.morphTargets!==At||Pt.morphNormals!==Kt||Pt.morphColors!==oe||Pt.toneMapping!==ue||Pt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,Pt.__version=Y.version);let Nn=Pt.currentProgram;Jt===!0&&(Nn=ya(Y,N,F));let Pr=!1,fn=!1,Is=!1;const de=Nn.getUniforms(),qn=Pt.uniforms;if(Et.useProgram(Nn.program)&&(Pr=!0,fn=!0,Is=!0),Y.id!==x&&(x=Y.id,fn=!0),Pr||S!==b){Et.buffers.depth.getReversed()?(ct.copy(b.projectionMatrix),Gp(ct),Wp(ct),de.setValue(L,"projectionMatrix",ct)):de.setValue(L,"projectionMatrix",b.projectionMatrix),de.setValue(L,"viewMatrix",b.matrixWorldInverse);const Pi=de.map.cameraPosition;Pi!==void 0&&Pi.setValue(L,H.setFromMatrixPosition(b.matrixWorld)),It.logarithmicDepthBuffer&&de.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&de.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,fn=!0,Is=!0)}if(F.isSkinnedMesh){de.setOptional(L,F,"bindMatrix"),de.setOptional(L,F,"bindMatrixInverse");const En=F.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),de.setValue(L,"boneTexture",En.boneTexture,R))}F.isBatchedMesh&&(de.setOptional(L,F,"batchingTexture"),de.setValue(L,"batchingTexture",F._matricesTexture,R),de.setOptional(L,F,"batchingIdTexture"),de.setValue(L,"batchingIdTexture",F._indirectTexture,R),de.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&de.setValue(L,"batchingColorTexture",F._colorsTexture,R));const Us=q.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&Nt.update(F,q,Nn),(fn||Pt.receiveShadow!==F.receiveShadow)&&(Pt.receiveShadow=F.receiveShadow,de.setValue(L,"receiveShadow",F.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(qn.envMap.value=wt,qn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&N.environment!==null&&(qn.envMapIntensity.value=N.environmentIntensity),fn&&(de.setValue(L,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&zf(qn,Is),ot&&Y.fog===!0&&ft.refreshFogUniforms(qn,ot),ft.refreshMaterialUniforms(qn,Y,V,X,f.state.transmissionRenderTarget[b.id]),uo.upload(L,Vh(Pt),qn,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(uo.upload(L,Vh(Pt),qn,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&de.setValue(L,"center",F.center),de.setValue(L,"modelViewMatrix",F.modelViewMatrix),de.setValue(L,"normalMatrix",F.normalMatrix),de.setValue(L,"modelMatrix",F.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const En=Y.uniformsGroups;for(let Pi=0,Di=En.length;Pi<Di;Pi++){const Gh=En[Pi];I.update(Gh,Nn),I.bind(Gh,Nn)}}return Nn}function zf(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function kf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,N,q){bt.get(b.texture).__webglTexture=N,bt.get(b.depthTexture).__webglTexture=q;const Y=bt.get(b);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const q=bt.get(b);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,q=0){C=b,A=N,w=q;let Y=!0,F=null,ot=!1,mt=!1;if(b){const wt=bt.get(b);if(wt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(wt.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(wt.__hasExternalTextures)R.rebindTextures(b,bt.get(b.texture).__webglTexture,bt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const At=b.depthTexture;if(wt.__boundDepthTexture!==At){if(At!==null&&bt.has(At)&&(b.width!==At.image.width||b.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Ot=b.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(mt=!0);const kt=bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[N])?F=kt[N][q]:F=kt[N],ot=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?F=bt.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?F=kt[q]:F=kt,P.copy(b.viewport),O.copy(b.scissor),U=b.scissorTest}else P.copy(ut).multiplyScalar(V).floor(),O.copy(vt).multiplyScalar(V).floor(),U=Ft;if(Et.bindFramebuffer(L.FRAMEBUFFER,F)&&Y&&Et.drawBuffers(b,F),Et.viewport(P),Et.scissor(O),Et.setScissorTest(U),ot){const wt=bt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,wt.__webglTexture,q)}else if(mt){const wt=bt.get(b.texture),Ot=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.__webglTexture,q||0,Ot)}x=-1},this.readRenderTargetPixels=function(b,N,q,Y,F,ot,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(Tt=Tt[mt]),Tt){Et.bindFramebuffer(L.FRAMEBUFFER,Tt);try{const wt=b.texture,Ot=wt.format,kt=wt.type;if(!It.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-Y&&q>=0&&q<=b.height-F&&L.readPixels(N,q,Y,F,Ht.convert(Ot),Ht.convert(kt),ot)}finally{const wt=C!==null?bt.get(C).__webglFramebuffer:null;Et.bindFramebuffer(L.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(b,N,q,Y,F,ot,mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(Tt=Tt[mt]),Tt){const wt=b.texture,Ot=wt.format,kt=wt.type;if(!It.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-Y&&q>=0&&q<=b.height-F){Et.bindFramebuffer(L.FRAMEBUFFER,Tt);const At=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.bufferData(L.PIXEL_PACK_BUFFER,ot.byteLength,L.STREAM_READ),L.readPixels(N,q,Y,F,Ht.convert(Ot),Ht.convert(kt),0);const Kt=C!==null?bt.get(C).__webglFramebuffer:null;Et.bindFramebuffer(L.FRAMEBUFFER,Kt);const oe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Hp(L,oe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ot),L.deleteBuffer(At),L.deleteSync(oe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,q=0){b.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const Y=Math.pow(2,-q),F=Math.floor(b.image.width*Y),ot=Math.floor(b.image.height*Y),mt=N!==null?N.x:0,Tt=N!==null?N.y:0;R.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,mt,Tt,F,ot),Et.unbindTexture()},this.copyTextureToTexture=function(b,N,q=null,Y=null,F=0){b.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1],N=arguments[2],F=arguments[3]||0,q=null);let ot,mt,Tt,wt,Ot,kt,At,Kt,oe;const ue=b.isCompressedTexture?b.mipmaps[F]:b.image;q!==null?(ot=q.max.x-q.min.x,mt=q.max.y-q.min.y,Tt=q.isBox3?q.max.z-q.min.z:1,wt=q.min.x,Ot=q.min.y,kt=q.isBox3?q.min.z:0):(ot=ue.width,mt=ue.height,Tt=ue.depth||1,wt=0,Ot=0,kt=0),Y!==null?(At=Y.x,Kt=Y.y,oe=Y.z):(At=0,Kt=0,oe=0);const tn=Ht.convert(N.format),Zt=Ht.convert(N.type);let Pt;N.isData3DTexture?(R.setTexture3D(N,0),Pt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Pt=L.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Pt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const ci=L.getParameter(L.UNPACK_ROW_LENGTH),Jt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Nn=L.getParameter(L.UNPACK_SKIP_PIXELS),Pr=L.getParameter(L.UNPACK_SKIP_ROWS),fn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ue.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ue.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ot),L.pixelStorei(L.UNPACK_SKIP_IMAGES,kt);const Is=b.isDataArrayTexture||b.isData3DTexture,de=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const qn=bt.get(b),Us=bt.get(N),En=bt.get(qn.__renderTarget),Pi=bt.get(Us.__renderTarget);Et.bindFramebuffer(L.READ_FRAMEBUFFER,En.__webglFramebuffer),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Di=0;Di<Tt;Di++)Is&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.get(b).__webglTexture,F,kt+Di),b.isDepthTexture?(de&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.get(N).__webglTexture,F,oe+Di),L.blitFramebuffer(wt,Ot,ot,mt,At,Kt,ot,mt,L.DEPTH_BUFFER_BIT,L.NEAREST)):de?L.copyTexSubImage3D(Pt,F,At,Kt,oe+Di,wt,Ot,ot,mt):L.copyTexSubImage2D(Pt,F,At,Kt,oe+Di,wt,Ot,ot,mt);Et.bindFramebuffer(L.READ_FRAMEBUFFER,null),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else de?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Pt,F,At,Kt,oe,ot,mt,Tt,tn,Zt,ue.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Pt,F,At,Kt,oe,ot,mt,Tt,tn,ue.data):L.texSubImage3D(Pt,F,At,Kt,oe,ot,mt,Tt,tn,Zt,ue):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,At,Kt,ot,mt,tn,Zt,ue.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,At,Kt,ue.width,ue.height,tn,ue.data):L.texSubImage2D(L.TEXTURE_2D,F,At,Kt,ot,mt,tn,Zt,ue);L.pixelStorei(L.UNPACK_ROW_LENGTH,ci),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Jt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,fn),F===0&&N.generateMipmaps&&L.generateMipmap(Pt),Et.unbindTexture()},this.copyTextureToTexture3D=function(b,N,q=null,Y=null,F=0){return b.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,b=arguments[2],N=arguments[3],F=arguments[4]||0),Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,q,Y,F)},this.initRenderTarget=function(b){bt.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Et.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,Et.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class y0 extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class M0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sc,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new D;class ni{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ni(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class E0 extends Ps{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Xr;const zs=new D,qr=new D,Yr=new D,$r=new St,ks=new St,b0=new me,Ga=new D,Vs=new D,Wa=new D,Vu=new St,vl=new St,Hu=new St;class J2 extends Qe{constructor(t=new E0){if(super(),this.isSprite=!0,this.type="Sprite",Xr===void 0){Xr=new je;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new M0(e,5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute("position",new ni(n,3,0,!1)),Xr.setAttribute("uv",new ni(n,2,3,!1))}this.geometry=Xr,this.material=t,this.center=new St(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),b0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Yr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Xa(Ga.set(-.5,-.5,0),Yr,a,qr,i,s),Xa(Vs.set(.5,-.5,0),Yr,a,qr,i,s),Xa(Wa.set(.5,.5,0),Yr,a,qr,i,s),Vu.set(0,0),vl.set(1,0),Hu.set(1,1);let o=t.ray.intersectTriangle(Ga,Vs,Wa,!1,zs);if(o===null&&(Xa(Vs.set(-.5,.5,0),Yr,a,qr,i,s),vl.set(0,1),o=t.ray.intersectTriangle(Ga,Wa,Vs,!1,zs),o===null))return;const l=t.ray.origin.distanceTo(zs);l<t.near||l>t.far||e.push({distance:l,point:zs.clone(),uv:Pn.getInterpolation(zs,Ga,Vs,Wa,Vu,vl,Hu,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xa(r,t,e,n,i,s){$r.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(ks.x=s*$r.x-i*$r.y,ks.y=i*$r.x+s*$r.y):ks.copy($r),r.copy(t),r.x+=ks.x,r.y+=ks.y,r.applyMatrix4(b0)}class Q2 extends Ps{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gu=new me,Mc=new Fo,qa=new Cs,Ya=new D;class tv extends Qe{constructor(t=new je,e=new Q2){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(i),qa.radius+=s,t.ray.intersectsSphere(qa)===!1)return;Gu.copy(i).invert(),Mc.copy(t.ray).applyMatrix4(Gu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,g=p;_<g;_++){const m=c.getX(_);Ya.fromBufferAttribute(u,m),Wu(Ya,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,g=p;_<g;_++)Ya.fromBufferAttribute(u,_),Wu(Ya,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wu(r,t,e,n,i,s,a){const o=Mc.distanceSqToPoint(r);if(o<e){const l=new D;Mc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Xu extends Ye{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ls extends je{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],p=[];let _=0;const g=[],m=n/2;let f=0;M(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(p,2));function M(){const v=new D,T=new D;let A=0;const w=(e-t)/n;for(let C=0;C<=s;C++){const x=[],S=C/s,P=S*(e-t)+t;for(let O=0;O<=i;O++){const U=O/i,W=U*l+o,k=Math.sin(W),z=Math.cos(W);T.x=P*k,T.y=-S*n+m,T.z=P*z,u.push(T.x,T.y,T.z),v.set(k,w,z).normalize(),d.push(v.x,v.y,v.z),p.push(U,1-S),x.push(_++)}g.push(x)}for(let C=0;C<i;C++)for(let x=0;x<s;x++){const S=g[x][C],P=g[x+1][C],O=g[x+1][C+1],U=g[x][C+1];(t>0||x!==0)&&(h.push(S,P,U),A+=3),(e>0||x!==s-1)&&(h.push(P,O,U),A+=3)}c.addGroup(f,A,0),f+=A}function E(v){const T=_,A=new St,w=new D;let C=0;const x=v===!0?t:e,S=v===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),_++;const P=_;for(let O=0;O<=i;O++){const W=O/i*l+o,k=Math.cos(W),z=Math.sin(W);w.x=x*z,w.y=m*S,w.z=x*k,u.push(w.x,w.y,w.z),d.push(0,S,0),A.x=k*.5+.5,A.y=z*.5*S+.5,p.push(A.x,A.y),_++}for(let O=0;O<i;O++){const U=T+O,W=P+O;v===!0?h.push(W,W+1,U):h.push(W+1,W,U),C+=3}c.addGroup(f,C,v===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vo extends ls{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new vo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xo extends je{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,p=new D,_=new St;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const f=s+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let f=0;f<n;f++){const M=f+m,E=M,v=M+n+1,T=M+n+2,A=M+1;o.push(E,v,A),o.push(v,T,A)}}this.setIndex(o),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class wn extends je{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,p=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const M=[],E=f/n;let v=0;f===0&&a===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const A=T/e;u.x=-t*Math.cos(i+A*s)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(i+A*s)*Math.sin(a+E*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(A+v,1-E),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const E=h[f][M+1],v=h[f][M],T=h[f+1][M],A=h[f+1][M+1];(f!==0||a>0)&&p.push(E,v,A),(f!==n-1||l<Math.PI)&&p.push(v,T,A)}this.setIndex(p),this.setAttribute("position",new Me(_,3)),this.setAttribute("normal",new Me(g,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ev extends je{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new D,s=new D;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,p=u.count;for(let _=d,g=d+p;_<g;_+=3)for(let m=0;m<3;m++){const f=o.getX(_+m),M=o.getX(_+(m+1)%3);i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,M),qu(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),qu(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new Me(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function qu(r,t,e){const n=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}class nv extends ce{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}const Yu={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class iv{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const rv=new iv;class hh{constructor(t){this.manager=t!==void 0?t:rv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}hh.DEFAULT_MATERIAL_NAME="__DEFAULT";class sv extends hh{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Yu.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=aa("img");function l(){h(),Yu.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class fo extends hh{constructor(t){super(t)}load(t,e,n,i){const s=new Ye,a=new sv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class av extends je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class ov{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$u(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=$u();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function $u(){return performance.now()}class Ec extends M0{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const ju=new me;class Ku{constructor(t,e,n=0,i=1/0){this.ray=new Fo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new oh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ju.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ju),this}intersectObject(t,e=!0,n=[]){return bc(t,this,n,e),n.sort(Zu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)bc(t[i],this,n,e);return n.sort(Zu),n}}function Zu(r,t){return r.distance-t.distance}function bc(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)bc(s[a],t,e,!0)}}let Ju=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};const Qu=new D,$a=new D;class lv{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Qu.subVectors(t,this.start),$a.subVectors(this.end,this.start);const n=$a.dot($a);let s=$a.dot(Qu)/n;return e&&(s=Oe(s,0,1)),s}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class cv extends Rr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);const xl={},hv=[{id:"Sadaltager",labelAr:"سعد التاجر (Sadaltager) — راوٍ وثائقي فخم وعالِم",labelEn:"Sadaltager — Knowledgeable Documentary Narrator"},{id:"Sulafat",labelAr:"السلحفاة (Sulafat) — دافئ ومعبّر وشاعري",labelEn:"Sulafat — Warm & Expressive"},{id:"Alnilam",labelAr:"النظام (Alnilam) — جهوري حازم وواضح",labelEn:"Alnilam — Firm & Authoritative"},{id:"Achernar",labelAr:"آخر النهر (Achernar) — هادئ وتأمّلي",labelEn:"Achernar — Soft & Reflective"},{id:"Charon",labelAr:"شارون (Charon) — علمي رصين",labelEn:"Charon — Informative & Clear"}],Sl="suhail_gemini_api_key",td="suhail_gemini_voice_id",ed="suhail_designed_voice_id";class uv{constructor(t){B(this,"synth",typeof window<"u"&&"speechSynthesis"in window?window.speechSynthesis:null);B(this,"preferredBrowserVoice",null);B(this,"apiKey","");B(this,"voiceId","Sadaltager");B(this,"customDesignedVoiceId","");B(this,"enabled",!0);B(this,"masterMuted",!1);B(this,"status","idle");B(this,"activeAudio",null);B(this,"activeUtter",null);B(this,"currentReqToken",0);B(this,"audioCache",new Map);B(this,"preloadedWavs",new Set);B(this,"inFlightRequests",new Map);B(this,"missingStaticClips",new Set);B(this,"lastText","");B(this,"lastLang","ar");B(this,"lastClipKey","");B(this,"lastIsPayoff",!1);B(this,"fallbackTimer",null);B(this,"onStateChange");var a,o;this.onStateChange=t;const e=xl==null?void 0:xl.VITE_GEMINI_API_KEY,n=typeof localStorage<"u"?localStorage.getItem(Sl):null;this.apiKey=(n||e||"").trim();const i=typeof localStorage<"u"?localStorage.getItem(td):null;i&&(this.voiceId=i);const s=typeof localStorage<"u"?localStorage.getItem(ed):null;s&&(this.customDesignedVoiceId=s),this.synth&&(this.pickBestBrowserVoice(),(o=(a=this.synth).addEventListener)==null||o.call(a,"voiceschanged",()=>this.pickBestBrowserVoice()))}hasStudioKey(){return this.apiKey.length>12}getApiKey(){return this.apiKey}getVoiceId(){return this.voiceId}getCustomDesignedVoiceId(){return this.customDesignedVoiceId}configureStudio(t,e){this.apiKey=t.trim(),this.voiceId=e.trim()||"Sadaltager",typeof localStorage<"u"&&(this.apiKey?localStorage.setItem(Sl,this.apiKey):localStorage.removeItem(Sl),localStorage.setItem(td,this.voiceId))}async createCustomSuhailVoice(t){var a;const e=t.trim(),n=await fetch("https://generativelanguage.googleapis.com/v1beta/voices",{method:"POST",headers:{"x-goog-api-key":e,"Content-Type":"application/json"},body:JSON.stringify({store:!0,voice:{model:"gemini-3.8-flash-tts",type:"prompted",display_name:"Suhail Saudi Astronomer",gender:"male",language_code:"ar-EG",prompted:{input:"A warm, resonant, authoritative Arab astronomer in his 40s narrating a flagship space documentary in crystal-clear eloquent Modern Standard Arabic with calm wonder and measured studio pacing."}}})});if(!n.ok){const o=await n.text();throw new Error(`Voice Design HTTP ${n.status}: ${o.slice(0,180)}`)}const i=await n.json();this.customDesignedVoiceId=i.id,this.configureStudio(e,i.id),typeof localStorage<"u"&&localStorage.setItem(ed,i.id);let s=null;return(a=i.sample_audio)!=null&&a.data&&(s=this.base64ToBlobUrl(i.sample_audio.data,i.sample_audio.mime_type||"audio/wav")),{voiceId:i.id,previewUrl:s}}pickBestBrowserVoice(){if(!this.synth)return;const t=this.synth.getVoices();if(!t||t.length===0)return;const e=t.filter(i=>i.lang.toLowerCase().startsWith("ar"));if(e.length===0)return;const n=e.map(i=>{const s=i.name.toLowerCase(),a=i.lang.toLowerCase();let o=0;return a.includes("ar-sa")&&(o+=40),(s.includes("natural")||s.includes("neural")||s.includes("online"))&&(o+=50),(s.includes("hamed")||s.includes("zariyah"))&&(o+=25),{v:i,score:o}}).sort((i,s)=>s.score-i.score);this.preferredBrowserVoice=n[0].v}isEnabled(){return this.enabled}enable(){this.enabled=!0}setMasterMuted(t){this.masterMuted=t,this.activeAudio&&(this.activeAudio.muted=t),t&&this.synth&&(this.synth.speaking||this.synth.pending)&&this.synth.cancel()}toggle(){return this.enabled=!this.enabled,this.enabled?this.lastText&&this.speak(this.lastText,this.lastLang,this.lastClipKey,this.lastIsPayoff):this.stop(),this.enabled}replay(){this.lastText&&(this.enabled=!0,this.speak(this.lastText,this.lastLang,this.lastClipKey,this.lastIsPayoff))}stop(){this.currentReqToken++,this.fallbackTimer!==null&&(window.clearTimeout(this.fallbackTimer),this.fallbackTimer=null),this.activeAudio&&(this.activeAudio.pause(),this.activeAudio.currentTime=0,this.activeAudio=null),this.activeUtter=null;try{this.synth&&(this.synth.speaking||this.synth.pending)&&this.synth.cancel()}catch{}this.updateStatus("idle")}prefetchStudioClip(t,e,n=!1,i=""){if(i&&!this.hasStudioKey()){const o=`./voices/${e}/${i}.mp3?v=v4studio`;if(!this.preloadedWavs.has(o)&&!this.missingStaticClips.has(`${e}/${i}`)){this.preloadedWavs.add(o);const l=new Audio;l.preload="auto",l.src=o}return}if(!this.hasStudioKey())return;const s=this.cleanScriptText(t),a=`${this.voiceId}|${e}|${n?"p":"n"}|${s}`;this.audioCache.has(a)||this.inFlightRequests.has(a)||this.synthesizeWithGemini38(s,e,n,a)}async speak(t,e="ar",n="",i=!1){if(this.lastText=t,this.lastLang=e,this.lastClipKey=n,this.lastIsPayoff=i,this.stop(),!this.enabled)return;const s=this.currentReqToken,a=this.cleanScriptText(t);if(a){if(this.hasStudioKey()){const o=`${this.voiceId}|${e}|${i?"p":"n"}|${a}`;this.updateStatus("loading");const l=await this.synthesizeWithGemini38(a,e,i,o);if(s!==this.currentReqToken||l&&await this.playAudioUrl(l,s,"speaking-studio")==="ok")return}if(n&&!this.missingStaticClips.has(`${e}/${n}`)){const o=`./voices/${e}/${n}.mp3?v=v4studio`,l=await this.playAudioUrl(o,s,"speaking-silma");if(l==="ok")return;if(l==="blocked"){const c=()=>{window.removeEventListener("pointerdown",c),window.removeEventListener("keydown",c),this.currentReqToken===s&&this.enabled&&!this.masterMuted&&this.playAudioUrl(o,s,"speaking-silma")};window.addEventListener("pointerdown",c,{once:!0,passive:!0}),window.addEventListener("keydown",c,{once:!0,passive:!0});return}s===this.currentReqToken&&this.missingStaticClips.add(`${e}/${n}`)}s===this.currentReqToken&&this.speakBrowserFallback(a,e)}}async synthesizeWithGemini38(t,e,n,i){const s=this.audioCache.get(i);if(s)return s;const a=this.inFlightRequests.get(i);if(a)return a;const o=e==="ar"?n?"warm, celebratory, awe-inspired Arabic astronomy documentary narrator, eloquent Modern Standard Arabic articulation":"reflective, awe-inspired, and captivating Arabic astronomy documentary narrator, clear Modern Standard Arabic with natural poetic pauses":n?"warm, uplifting, and insightful astronomy documentary narrator":"reflective and awe-inspired astronomy documentary narrator, measured cinematic pacing",l=(async()=>{try{const c=await fetch("https://generativelanguage.googleapis.com/v1beta/interactions",{method:"POST",headers:{"x-goog-api-key":this.apiKey,"Content-Type":"application/json"},body:JSON.stringify({model:"gemini-3.8-flash-tts",input:[{type:"user_input",content:[{type:"text",text:t,annotations:[{type:"speech_metadata",style:o}]}]}],response_format:{type:"audio"},generation_config:{speech_config:[{voice:this.voiceId}]}})});if(!c.ok)return console.warn("[ArabicNarrator] Gemini 3.8 TTS HTTP status:",c.status),null;const h=await c.json();let u=null,d="audio/wav";for(const _ of h.steps??[])if(_.type==="model_output")for(const g of _.content??[])g.type==="audio"&&g.data&&(u=g.data,g.mime_type&&(d=g.mime_type));if(!u)return null;const p=this.base64ToBlobUrl(u,d);return this.audioCache.set(i,p),p}catch(c){return console.warn("[ArabicNarrator] Gemini 3.8 TTS network error:",c),null}finally{this.inFlightRequests.delete(i)}})();return this.inFlightRequests.set(i,l),l}async playAudioUrl(t,e,n){if(e!==this.currentReqToken)return"missing";try{const i=new Audio(t);i.muted=this.masterMuted,this.activeAudio=i;let s=!1;return i.onended=()=>{this.activeAudio===i&&(this.activeAudio=null,this.updateStatus("idle"))},i.onerror=()=>{s=!0,this.activeAudio===i&&(this.activeAudio=null,this.updateStatus("idle"))},this.updateStatus(n),await i.play(),s?"missing":"ok"}catch(i){return this.activeAudio&&(this.activeAudio=null),this.updateStatus("idle"),((i==null?void 0:i.name)||"")==="NotAllowedError"||String(i).includes("NotAllowedError")?"blocked":"missing"}}speakBrowserFallback(t,e){const n=Math.max(2800,Math.min(15e3,t.length*68));if(this.updateStatus("speaking-browser"),this.fallbackTimer=window.setTimeout(()=>{this.updateStatus("idle")},n),!(this.masterMuted||!this.synth))try{this.pickBestBrowserVoice();const i=new SpeechSynthesisUtterance(t);this.activeUtter=i,i.lang=e==="ar"?"ar-SA":"en-US",i.rate=e==="ar"?.96:1,e==="ar"&&this.preferredBrowserVoice&&(i.voice=this.preferredBrowserVoice),i.onend=()=>{this.activeUtter===i&&(this.activeUtter=null),this.fallbackTimer!==null&&(window.clearTimeout(this.fallbackTimer),this.fallbackTimer=null),this.updateStatus("idle")},this.synth.speak(i)}catch{this.activeUtter=null}}cleanScriptText(t){return t.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu,"").replace(/\s+/g," ").trim()}base64ToBlobUrl(t,e){const n=atob(t),i=new Uint8Array(n.length);for(let a=0;a<n.length;a++)i[a]=n.charCodeAt(a);const s=new Blob([i],{type:e});return URL.createObjectURL(s)}updateStatus(t){var n;this.status=t;const e=t==="speaking-silma"||t==="speaking-studio"||t==="speaking-browser"||t==="loading";(n=this.onStateChange)==null||n.call(this,e,t)}getStatus(){return this.status}}class dv{constructor(){B(this,"ctx",null);B(this,"master",null);B(this,"muted",!1);B(this,"initialized",!1);B(this,"lastTickTime",0);if(typeof window<"u"){const t=()=>this.ensureUnlocked();window.addEventListener("pointerdown",t,{passive:!0}),window.addEventListener("keydown",t,{passive:!0})}}ensureUnlocked(){if(this.initialized){this.ctx&&this.ctx.state==="suspended"&&!this.muted&&this.ctx.resume();return}try{this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.6,this.master.connect(this.ctx.destination),this.initialized=!0}catch{}}toggleMute(){return this.ensureUnlocked(),this.muted=!this.muted,this.master&&this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:.6,this.ctx.currentTime,.05),!this.muted}playDialTick(t=1){if(!this.initialized||this.muted||!this.ctx||!this.master)return;const e=this.ctx.currentTime;if(e-this.lastTickTime<.045)return;this.lastTickTime=e;const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(520*t,e),n.frequency.exponentialRampToValueAtTime(840*t,e+.025),i.gain.setValueAtTime(.001,e),i.gain.linearRampToValueAtTime(.045,e+.005),i.gain.exponentialRampToValueAtTime(.001,e+.032),n.connect(i),i.connect(this.master),n.start(e),n.stop(e+.035)}playUIClick(t=1){if(this.ensureUnlocked(),this.muted||!this.ctx||!this.master)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(340*t,e),n.frequency.exponentialRampToValueAtTime(680*t,e+.07),i.gain.setValueAtTime(.001,e),i.gain.linearRampToValueAtTime(.09,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+.09),n.connect(i),i.connect(this.master),n.start(e),n.stop(e+.1)}playEclipseChord(){if(this.ensureUnlocked(),this.muted||!this.ctx||!this.master)return;[146.83,220,293.66,440,554.37].forEach((e,n)=>{setTimeout(()=>{if(!this.ctx||!this.master||this.muted)return;const i=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(e,i),a.gain.setValueAtTime(.001,i),a.gain.linearRampToValueAtTime(.065,i+.18),a.gain.exponentialRampToValueAtTime(.001,i+1.35),s.connect(a),a.connect(this.master),s.start(i),s.stop(i+1.4)},n*55)})}playHilalChime(){if(this.ensureUnlocked(),this.muted||!this.ctx||!this.master)return;[523.25,659.25,783.99,1046.5].forEach((e,n)=>{setTimeout(()=>{if(!this.ctx||!this.master||this.muted)return;const i=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(e,i),a.gain.setValueAtTime(.001,i),a.gain.linearRampToValueAtTime(.08,i+.02),a.gain.exponentialRampToValueAtTime(.001,i+.35),s.connect(a),a.connect(this.master),s.start(i),s.stop(i+.38)},n*75)})}playChapterSuccess(){if(this.ensureUnlocked(),this.muted||!this.ctx||!this.master)return;[440,554.37,659.25,880,1108.73].forEach((e,n)=>{setTimeout(()=>{if(!this.ctx||!this.master||this.muted)return;const i=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(e,i),a.gain.setValueAtTime(.001,i),a.gain.linearRampToValueAtTime(.1,i+.02),a.gain.exponentialRampToValueAtTime(.001,i+.42),s.connect(a),a.connect(this.master),s.start(i),s.stop(i+.45)},n*85)})}}const gr={1:{id:1,code:"AST-01",title:{ar:"الدوران المحوري وتعاقب الليل والنهار عبر المملكة",en:"Axial Spin, Solar Terminator & Sunrise Across Saudi Arabia"},subtitle:{ar:"لماذا تشرق الشمس في الدمام قبل جدة بـ ٤٧ دقيقة؟",en:"Why does Dammam see sunrise 47 minutes ahead of Jeddah?"},curriculumRef:{ar:"علوم الصف السادس والأول المتوسط · حركة الأرض اليومية",en:"Grade 6–7 Science · Diurnal Rotation & Time Zones"},defaultCamera:"earth-close",suhailIntro:{ar:"مَرْحَباً بِكَ في المُخْتَبَرِ الفَلَكِيِّ لِمَرْصَدِ سُهَيْل! أَمْسِكِ الكُرَةَ الأَرْضِيَّةَ مُباشَرَةً بِالفَأْرَةِ وَأَدِرْها الآنَ لِتُشاهِدَ خَطَّ الفَصْلِ الضَّوْئِيِّ وَهُوَ يَزْحَفُ مِنَ الدَّمّامِ مُروراً بِالرِّياضِ حَتّى مَكَّةَ وَجِدَّةَ، وَأَتْمِمْ مَهامَّ الرَّصْدِ في الأَعْلى!",en:"Welcome to the Suhail Astrophysical Lab! Grab the 3D Earth directly and spin it to watch the crisp Day-Night Terminator sweep from Dammam across Riyadh to Makkah and Jeddah, completing both observation missions above!"},mythBusterTitle:{ar:"ملاحظة فلكية: الشمس لا تدور حولنا يومياً",en:"Scientific Insight: Why East Rises First"},mythBusterBody:{ar:"تدور الأرض حول محورها من الغرب إلى الشرق بسرعة ١,٥٢٠ كم/ساعة عند خط عرض الرياض! لذلك تدخل السواحل الشرقية (الدمام) في مخروط ضوء الشمس قبل سواحل البحر الأحمر (جدة) بنحو ٤٧ دقيقة.",en:"Earth spins West-to-East at ~1,520 km/h at Riyadh latitude! Eastern cities (Dammam) rotate into sunlight ~47 minutes ahead of Red Sea cities (Jeddah)."},winSpeech:{ar:"إِنْجازٌ رائِعٌ! رَصَدْتَ الشُّروقَ الذَّهَبِيَّ وَأَضْواءَ مُدُنِ المَمْلَكَةِ لَيْلاً عَبْرَ خَطِّ الفَصْلِ الضَّوْئِيِّ بِدِقَّةٍ فَلَكِيَّةٍ!",en:"Superb! You observed both golden Saudi sunrise and nighttime city lights across the solar terminator!"},objectives:[{id:"spin_sunrise",icon:"01",label:{ar:"أدر الأرض لضبط وقت الشروق/الصباح في الرياض (٠٥:٠٠–٠٨:٣٠)",en:"Spin Earth to align Sunrise/Morning in Riyadh (05:00–08:30)"}},{id:"spin_nightlights",icon:"02",label:{ar:"أدر الأرض لرصد أضواء مدن المملكة ليلاً (٢٠:٠٠–٠٣:٠٠)",en:"Spin Earth to view Saudi nighttime city lights (20:00–03:00)"}}],quiz:{question:{ar:"ما السبب الفيزيائي الدقيق لشروق الشمس في الدمام قبل مكة المكرمة وجدة؟",en:"What is the exact physical reason sunrise occurs in Dammam before Makkah and Jeddah?"},options:[{ar:"دوران الأرض حول محورها من الغرب إلى الشرق فيدخل شرق المملكة ضوء الشمس أولاً",en:"Earth rotates West-to-East, bringing eastern longitudes into sunlight first"},{ar:"أن مدينة الدمام أقرب إلى الشمس بملايين الكيلومترات من جدة",en:"Dammam is millions of kilometers closer to the Sun than Jeddah"},{ar:"بسبب جاذبية القمر لمياه الخليج العربي صباحاً",en:"Because lunar gravity pulls sunlight toward the Arabian Gulf"}],correctIndex:0,explanation:{ar:"أحسنت! فرق خطوط الطول (~١٠ درجات بين الدمام وجدة) مع دوران الأرض من الغرب للشرق يصنع فارق ~٤٠–٤٧ دقيقة في الشروق.",en:"Exact! ~10° longitude separation combined with Earth’s West-to-East spin creates a ~45-minute sunrise lead."}}},2:{id:2,code:"AST-02",title:{ar:"الفصول الأربعة وخدعة المسافة عن الشمس!",en:"The Four Seasons & The Sun-Distance Paradox!"},subtitle:{ar:"لماذا تصل حرارة الرياض ٤٥°م في يوليو والأرض في أبعد نقطة عن الشمس؟!",en:"Why is Riyadh 45°C in July when Earth is FARTHEST from the Sun?!"},curriculumRef:{ar:"علوم الصف السادس والأول المتوسط · ميل المحور (٢٣,٥°) ومدار السرطان",en:"Grade 6–7 Science · 23.5° Axial Tilt & Tropic of Cancer"},defaultCamera:"seasons-orbit",suhailIntro:{ar:"اِسْحَبِ الأَرْضَ على حَلْقَةِ مَدارِها السَّنَوِيِّ حَوْلَ الشَّمْسِ! راقِبْ حُزْمَةَ الأَشِعَّةِ الذَّهَبِيَّةِ السّاقِطَةَ على مَدارِ السَّرَطانِ المارِّ بِوَسَطِ المَمْلَكَةِ، ثُمَّ جَرِّبْ تَصْفيرَ مَيْلِ المِحْوَرِ إِلى صِفْرٍ لِتَرى كَوْكَباً بِلا فُصولٍ!",en:"Drag Earth around its glowing annual orbit! Watch the golden solar ray bundle hit Saudi Arabia’s Tropic of Cancer, then test zero axial tilt to see a world with no seasons at all!"},mythBusterTitle:{ar:"تصحيح مفهوم شائع حول المسافة وحرارة الصيف",en:"Misconception Corrected: Distance vs. Axial Tilt"},mythBusterBody:{ar:"يظن الكثيرون أن الصيف حار لأن الأرض تقترب من الشمس! الحقيقة الصادمة: الأرض في يوليو تكون «أبعد» بـ ٥ ملايين كم عن يناير (١٥٢,١ مليون كم مقابل ١٤٧,١ مليون كم)! السر كله في ميل المحور ٢٣,٥° الذي يجعل أشعة الشمس تسقط عمودية (٩٠°) بتركيز يتجاوز ١٠٠٠ واط/م² على مدار السرطان في السعودية!",en:"Earth is actually 5 MILLION km FARTHER from the Sun in July (152.1M km) than in January (147.1M km)! Saudi summers are scorching because 23.5° axial tilt aims the Tropic of Cancer directly perpendicular (90°) to solar rays (>1,000 W/m²)!"},winSpeech:{ar:"عَبْقَرِيٌّ فَلَكِيٌّ! أَثْبَتَّ عَمَلِيّاً أَنَّ زاوِيَةَ سُقوطِ الأَشِعَّةِ وَمَيْلَ المِحْوَرِ هُما سِرُّ الفُصولِ الأَرْبَعَةِ لا المَسافَةَ!",en:"Brilliant! You proved hands-on that solar incidence angle from axial tilt—not distance—drives the four seasons!"},objectives:[{id:"summer_solstice",icon:"01",label:{ar:"حرك الأرض إلى انقلاب يونيو الصيفي (تعامد الأشعة على السعودية)",en:"Drag Earth to June Summer Solstice (perpendicular Saudi rays)"}},{id:"winter_solstice",icon:"02",label:{ar:"حرك الأرض إلى انقلاب ديسمبر الشتوي وقارن ميل الأشعة",en:"Drag Earth to December Winter Solstice & compare oblique rays"}},{id:"zero_tilt_test",icon:"03",label:{ar:"جرّب ضبط ميل المحور إلى ٠° لاختبار انعدام الفصول ثم أعده لـ ٢٣,٥°",en:"Test 0° Axial Tilt (no seasons!) then restore 23.5°"}}],quiz:{question:{ar:"في شهر يوليو (ذروة الصيف في الرياض) تكون الأرض في نقطة «الأوج» على بُعد ١٥٢,١ مليون كم من الشمس. ما سبب شدة الحرارة إذن؟",en:"In July, Earth is at Aphelion (152.1M km—farthest from the Sun). Why is Saudi Arabia hottest then?"},options:[{ar:"ميل محور الأرض ٢٣,٥° يجعل أشعة الشمس تتعامد على مدار السرطان في المملكة فتتركز الطاقة في وحدة المساحة",en:"Earth’s 23.5° tilt makes solar rays strike Saudi Arabia’s Tropic of Cancer nearly at 90°, concentrating energy per m²"},{ar:"لأن القمر يعكس حرارة إضافية في شهر يوليو فقط",en:"Because the Moon reflects extra heat only in July"},{ar:"لأن سرعة دوران الأرض تتوقف في الصيف",en:"Because Earth stops rotating on its axis in summer"}],correctIndex:0,explanation:{ar:"رائع! تركّز الفيض الشمسي (واط/م²) نتيجة التعامد مع طول ساعات النهار هو المحرك الحقيقي لحرارة الصيف.",en:"Spot on! Perpendicular solar flux density (W/m²) plus longer daylight hours drives summer heat."}}},3:{id:3,code:"AST-03",title:{ar:"أطوار القمر وعلم تحرّي هلال رمضان من سماء العُلا",en:"Lunar Phases & The Science of Sighting the Ramadan Hilāl"},subtitle:{ar:"كيف يولد الهلال؟ ولماذا يستحيل رصده قبل حد دانجون الفلكي (٧°)؟",en:"Why half the Moon is always lit, and how astronomers sight the newborn Crescent!"},curriculumRef:{ar:"علوم الصف السادس والأول المتوسط · أطوار القمر والتقويم الهجري",en:"Grade 6–7 Science · Lunar Cycle, Synchronous Spin & Hijri Crescent"},defaultCamera:"moon-orbit",suhailIntro:{ar:"اِسْحَبِ القَمَرَ بِيَدِكَ حَوْلَ الأَرْضِ وَراقِبْ في نَفْسِ اللَّحْظَةِ شاشَةَ مَرْصَدِ سَماءِ العُلا المُباشِرِ! هَدَفُكَ رَصْدُ الهِلالِ الوَليدِ بَعْدَ الغُروبِ، ثُمَّ التَّرْبيعِ الأَوَّلِ، ثُمَّ البَدْرِ المُكْتَمِلِ!",en:"Drag the 3D Moon around Earth while watching the live AlUla Sky Telescope! Your goal is to sight the newborn Ramadan Hilāl after sunset, then First Quarter, and finally the Full Moon!"},mythBusterTitle:{ar:"تصحيح مفهوم شائع: أطوار القمر ليست بسبب ظل الأرض",en:"Scientific Principle: Phases Are Not Earth’s Shadow"},mythBusterBody:{ar:"نصف القمر المواجه للشمس مضاء بنسبة ٥٠٪ دائماً! ما يتغير هو «الزاوية التي ننظر بها من السعودية إلى ذلك النصف المضاء». ولتحرّي هلال الشهر الهجري علمياً، يجب أن يبتعد القمر عن وهج الشمس بزاوية استطالة تتجاوز ٧ درجات (حد دانجون) ويمكث بعد غروب الشمس!",en:"50% of the Moon is ALWAYS sunlit! Phases are purely our viewing angle of that sunlit hemisphere. To sight the Hijri Hilāl, angular elongation from the Sun must exceed ~7° (Danjon Limit) after sunset!"},winSpeech:{ar:"تَراءٍ فَلَكِيٌّ دَقيقٌ! رَصَدْتَ الهِلالَ الوَليدَ وَالتَّرْبيعَ وَالبَدْرَ، وَفَهِمْتَ العَلاقَةَ الهَنْدَسِيَّةَ بَيْنَ مَوْقِعِ القَمَرِ وَصورَتِهِ في سَماءِ المَمْلَكَةِ!",en:"Master Astronomer! You sighted the newborn Hilāl, First Quarter, and Full Moon across both orbital and horizon views!"},objectives:[{id:"sight_hilal",icon:"01",label:{ar:"اسحب القمر لرصد «الهلال المتزايد» الوليد (استطالة ٨°–٢٦°)",en:"Drag Moon to sight the newborn Waxing Hilāl (8°–26° elongation)"}},{id:"sight_quarter",icon:"02",label:{ar:"ارصد طور «التربيع الأول» عند زاوية ٩٠° (إضاءة ~٥٠٪)",en:"Observe First Quarter Moon at ~90° (~50% illuminated)"}},{id:"sight_full",icon:"03",label:{ar:"ارصد طور «البدر المكتمل» عند ١٨٠° مقابل الشمس",en:"Observe Full Moon near 180° opposition"}}],quiz:{question:{ar:"ما الذي يسبب تغيّر أطوار القمر من هلال إلى تربيع فبدر خلال الشهر القمري (٢٩,٥ يوماً)؟",en:"What causes the Moon’s phases to cycle from Crescent to Quarter to Full every 29.5 days?"},options:[{ar:"تغيّر الزاوية التي نرى بها النصف المضاء من القمر أثناء دورانه حول الأرض",en:"Our changing viewing angle of the Moon’s sunlit half as it orbits Earth"},{ar:"وقوع ظل الكرة الأرضية على القمر كل ليلة من الشهر",en:"Earth’s shadow falling onto the Moon every single night"},{ar:"انطفاء واشتعال ضوء الشمس الذاتي من داخل القمر",en:"The Moon generating its own internal light on a monthly timer"}],correctIndex:0,explanation:{ar:"إجابة دقيقة! ظل الأرض لا يسقط على القمر إلا في حالة نادرة هي «خسوف القمر»، أما الأطوار فسببها زاوية الرؤية.",en:"Precisely! Earth’s shadow only touches the Moon during a Lunar Eclipse; monthly phases come from viewing geometry."}}},4:{id:4,code:"AST-04",title:{ar:"هندسة الكسوف الكلي، حلقة النار في الأحساء، والخسوف الدموي!",en:"Total Eclipse, Al-Ahsa Ring of Fire & Blood Moon Geometry!"},subtitle:{ar:"لماذا لا يحدث كسوف كل شهر؟ وما سر زاوية ٥,١٤° والحضيض والأوج؟",en:"Why eclipses skip most months (5.14° tilt) & Perigee Total vs. Apogee Annular!"},curriculumRef:{ar:"علوم الصف السادس والمتوسط · الكسوف الكلي والحلقي والخسوف",en:"Grade 6–8 Science · Umbra, Penumbra, Orbital Nodes & Eclipses"},defaultCamera:"eclipse-align",suhailIntro:{ar:"لاحِظْ كَيْفَ يَمُرُّ مَخْروطُ ظِلِّ القَمَرِ فَوْقَ الأَرْضِ أَوْ تَحْتَها بِسَبَبِ مَيْلِ مَدارِهِ! اِضْبِطِ المُحاذاةَ على عُقْدَةِ المَدارِ، ثُمَّ اصْنَعْ كُسوفاً كُلِّيّاً في الحَضيضِ، وَكُسوفَ حَلْقَةِ النّارِ في الأَوْجِ كَما شوهِدَ في الأَحْساءِ، ثُمَّ خُسوفاً دَمَوِيّاً كُلِّيّاً!",en:"Notice how the tilted lunar orbit makes the shadow cone miss Earth! Align the orbital node, then trigger a Perigee Total Solar Eclipse, an Apogee Ring of Fire like Al-Ahsa twenty nineteen, and a Blood-Red Lunar Eclipse!"},mythBusterTitle:{ar:"سر زاوية ٥,١٤° وكسوف الأحساء الحلقي التاريخي",en:"The 5.14° Node Geometry & Al-Ahsa’s 2019 Ring of Fire"},mythBusterBody:{ar:"يميل مدار القمر ٥,١٤° عن مدار الأرض، لذا يخطئ ظل القمر الأرض في معظم الشهور! وعندما يقع المحاق في «الأوج» (٤٠٦,٧٠٠ كم)، ينتهي رأس مخروط الظل التام في الفضاء قبل لمس الأرض، فيبدو القمر أصغر من قرص الشمس مكوناً «حلقة النار» الساحرة كما رُصدت فجر ٢٦ ديسمبر ٢٠١٩م في الأحساء والهفوف!",en:'Because the Moon’s orbit tilts 5.14°, its shadow usually misses Earth! And at Apogee (406,700 km), the Umbra cone falls short of Earth, creating the breathtaking Annular "Ring of Fire" witnessed in Al-Ahsa, Saudi Arabia on Dec 26, 2019!'},winSpeech:{ar:"إِبْهارٌ عِلْمِيٌّ مُتَكامِلٌ! تَحَكَّمْتَ بِمَخاريطِ الظِّلِّ التّامِّ وَشِبْهِ الظِّلِّ وَصَنَعْتَ الكُسوفَ الكُلِّيَّ وَالحَلَقِيَّ وَالخُسوفَ الدَّمَوِيَّ بِاحْتِرافِيَّةٍ!",en:"Phenomenal! You mastered Umbra and Penumbra shadow geometry across Total, Annular Ring of Fire, and Blood Moon eclipses!"},objectives:[{id:"total_solar",icon:"01",label:{ar:"اصنع «كسوفاً كلياً» (القمر في الحضيض + محاذاة العقدة ٠°)",en:"Trigger a Total Solar Eclipse (Perigee + Node Alignment)"}},{id:"annular_ring",icon:"02",label:{ar:"حول المسافة إلى «الأوج» لرصد كسوف «حلقة النار» الحلقي",en:'Switch Moon to Apogee to witness the Annular "Ring of Fire"'}},{id:"blood_moon",icon:"03",label:{ar:"اسحب القمر خلف الأرض (١٨٠°) لرصد «الخسوف الكلي الدموي»",en:"Move Moon into Earth’s Umbra (180°) for a Blood-Red Lunar Eclipse"}}],quiz:{question:{ar:"متى نشاهد «الكسوف الحلقي (حلقة النار)» بدلاً من الكسوف الكلي للشمس؟",en:'When do observers witness an Annular "Ring of Fire" Eclipse instead of a Total Solar Eclipse?'},options:[{ar:"عندما يكون القمر على استقامة الشمس والأرض ولكنه في «الأوج» (أبعد نقطة) فيبدو قرصه أصغر قليلاً من الشمس",en:"When the aligned Moon is near Apogee (farthest point), making its apparent disc slightly smaller than the Sun"},{ar:"عندما يقع القمر خلف الأرض في طور البدر المكتمل",en:"When the Moon is on the night side of Earth at Full Moon"},{ar:"عندما تنطفئ أطراف الشمس في فصل الشتاء",en:"When the outer rim of the Sun cools down in winter"}],correctIndex:0,explanation:{ar:"ممتاز! اختلاف مسافة القمر في مداره الإهليلجي بين الحضيض والأوج يحدد هل يصل رأس مخروط الظل لسطح الأرض (كلي) أم يقصر عنه (حلقي).",en:"Spot on! Lunar orbital eccentricity switches aligned eclipses between Total (Perigee) and Annular Ring of Fire (Apogee)."}}},5:{id:5,code:"AST-05",title:{ar:"فيزياء المدّ والجزر المزدوج والمختبر الفلكي الحر",en:"Dual-Bulge Gravity Tides & Open Astrophysical Sandbox"},subtitle:{ar:"لماذا يرتفع البحر في الجهة المواجهة للقمر والجهة المعاكسة له في آنٍ واحد؟!",en:"Why do oceans bulge BOTH toward the Moon AND on the exact opposite side of Earth?!"},curriculumRef:{ar:"علوم الصف السادس والمتوسط · الجاذبية والمد الأعظم والمد الأصغر",en:"Grade 6–8 Science · Differential Gravity, Spring & Neap Tides"},defaultCamera:"tides-top",suhailIntro:{ar:"شاهِدِ الغِلافَ المائِيَّ الثُّلاثِيَّ الأَبْعادِ لِسَواحِلِ البَحْرِ الأَحْمَرِ وَالخَليجِ العَرَبِيِّ! حَرِّكِ القَمَرَ لِمُقارَنَةِ المَدِّ الأَعْظَمِ الرَّبيعِيِّ عِنْدَ اصْطِفافِ الشَّمْسِ وَالقَمَرِ، وَالمَدِّ الأَصْغَرِ المَحاقِيِّ عِنْدَ تَعامُدِهِما بِزاوِيَةِ تِسْعينَ دَرَجَةً!",en:"Inspect the 3D Tidal Ellipsoid around Earth! Drag the Moon to compare mighty Spring Tides during alignment against calm Neap Tides at ninety-degree quadrature!"},mythBusterTitle:{ar:"مبدأ الجاذبية التفاضلية: انتفاخ المدّ في الجهة المقابلة",en:"Differential Gravity: Why Tides Bulge Opposite the Moon"},mythBusterBody:{ar:"تتناقص جاذبية القمر مع المسافة: فيجذب القمر مياه المحيط القريبة بقوة أكبر من جذبه لمركز الأرض الصلب، ويجذب مركز الأرض بقوة أكبر من مياه المحيط في الجهة البعيدة! هذا «الفرق التفاضلي في الجاذبية» يمطّ المحيطات من الطرفين معاً فيحدث مدّان وجزران كل يوم!",en:"Gravity weakens with distance: the Moon pulls near-side water harder than Earth’s solid core, and pulls Earth’s core harder than far-side water! This differential tidal stretch creates TWO symmetric high-tide bulges!"},winSpeech:{ar:"تَهانينا الحارَّةُ! أَتْمَمْتَ جَميعَ الفُصولِ الخَمْسَةِ في مَرْصَدِ سُهَيْلٍ الفَلَكِيِّ، وَالمُخْتَبَرُ الفَلَكِيُّ المَفْتوحُ تَحْتَ تَصَرُّفِكَ الكامِلِ الآنَ!",en:"Congratulations! You mastered all five Suhail Observatory chapters—the full Open Space Sandbox is yours now!"},objectives:[{id:"spring_tide",icon:"01",label:{ar:"اصنع «المد الأعظم (الربيعي)» باصطفاف القمر والشمس (٠° أو ١٨٠°)",en:"Create a Spring Tide by aligning Moon & Sun (0° or 180°)"}},{id:"neap_tide",icon:"02",label:{ar:"اصنع «المد الأصغر (المحاقي)» بتعامد القمر والشمس (٩٠° أو ٢٧٠°)",en:"Create a Neap Tide at 90° or 270° Sun–Moon quadrature"}}],quiz:{question:{ar:"متى يحدث «المد الأعظم (المد الربيعي)» على سواحل جدة والدمام؟",en:"When do Jeddah and Dammam coasts experience the highest Spring Tides?"},options:[{ar:"عندما تصطف الشمس والأرض والقمر على استقامة واحدة في طوري المحاق والبدر فتتضافر جاذبية الشمس والقمر",en:"During New Moon and Full Moon when Sun, Earth, and Moon align and combine gravitational pull"},{ar:"في طوري التربيع الأول والأخير فقط عندما يتعامد القمر مع الشمس",en:"Only at First and Third Quarter when Sun and Moon pull at 90°"},{ar:"في فصل الشتاء فقط بغض النظر عن موقع القمر",en:"Only in December regardless of the Moon’s position"}],correctIndex:0,explanation:{ar:"إحاطة علمية كاملة! في المحاق والبدر تتحد القوة المدّية للقمر والشمس معاً لتصنع أعلى مدّ وأدنى جزر.",en:"Masterful! Syzygy (New & Full Moon alignment) sums solar and lunar tidal forces."}}}},fe=3,en=.82,yl=4.4,T0=23,Tc=24.7136,Js=46.6753,wc=50.0888,Ac=39.1925;function Kn(r,t,e){return Math.max(t,Math.min(e,r))}function We(r){const t=Math.PI*2;return(r%t+t)%t}function qs(r,t,e=fe){const n=Je.degToRad(t+180),i=Je.degToRad(90-r);return new D(-e*Math.cos(n)*Math.sin(i),e*Math.cos(i),e*Math.sin(n)*Math.sin(i))}function w0(r){return new si().setFromAxisAngle(new D(0,0,1),-Je.degToRad(r))}function zi(r){const t=1+.032*Math.cos(r),e=T0*t;return new D(-e*Math.cos(r),0,e*Math.sin(r))}function A0(r){return r==="perigee"?7.6:9.35}function Ml(r,t){const e=t.clone().negate().normalize(),n=new D(-e.z,0,e.x).normalize(),i=r.moonPhaseRad,s=Je.degToRad(r.moonInclinationDeg*4.1),a=Math.sin(s)*Math.sin(i-r.moonNodeRad),o=Math.sqrt(Math.max(.01,1-a*a)),l=new D().addScaledVector(e,Math.cos(i)*o).addScaledVector(n,Math.sin(i)*o);l.y=a,l.normalize();const c=A0(r.moonDistanceMode);return t.clone().addScaledVector(l,c)}class fv{constructor(){B(this,"params");B(this,"completedChapters",new Set);B(this,"chapterJustCompleted",!1);B(this,"ch1SawSunrise",!1);B(this,"ch1SawNight",!1);B(this,"ch2SawSummer",!1);B(this,"ch2SawWinter",!1);B(this,"ch2TestedZeroTilt",!1);B(this,"ch3SawHilal",!1);B(this,"ch3SawQuarter",!1);B(this,"ch3SawFull",!1);B(this,"ch4SawTotalSolar",!1);B(this,"ch4SawAnnular",!1);B(this,"ch4SawBloodMoon",!1);B(this,"ch5SawSpring",!1);B(this,"ch5SawNeap",!1);this.params=this.createDefaultParamsForChapter(1)}consumeChapterWin(){return this.chapterJustCompleted?(this.chapterJustCompleted=!1,!0):!1}createDefaultParamsForChapter(t){return t===1?{chapterId:1,earthSpinRad:-2.68,seasonAngleRad:0,axialTiltDeg:23.44,moonPhaseRad:2.1,moonInclinationDeg:5.14,moonNodeRad:Math.PI/2,moonDistanceMode:"perigee",timeScale:.35,showSolarRays:!1,showShadowCones:!1,showTidalBulge:!1,showTidalLockArrow:!1}:t===2?{chapterId:2,earthSpinRad:-.81,seasonAngleRad:.45,axialTiltDeg:23.44,moonPhaseRad:1.6,moonInclinationDeg:5.14,moonNodeRad:Math.PI/2,moonDistanceMode:"perigee",timeScale:0,showSolarRays:!0,showShadowCones:!1,showTidalBulge:!1,showTidalLockArrow:!1}:t===3?{chapterId:3,earthSpinRad:-.81+1.48,seasonAngleRad:0,axialTiltDeg:23.44,moonPhaseRad:.06,moonInclinationDeg:5.14,moonNodeRad:Math.PI/2,moonDistanceMode:"perigee",timeScale:0,showSolarRays:!1,showShadowCones:!1,showTidalBulge:!1,showTidalLockArrow:!0}:t===4?{chapterId:4,earthSpinRad:-.81,seasonAngleRad:0,axialTiltDeg:23.44,moonPhaseRad:.22,moonInclinationDeg:5.14,moonNodeRad:Math.PI/2,moonDistanceMode:"perigee",timeScale:0,showSolarRays:!1,showShadowCones:!0,showTidalBulge:!1,showTidalLockArrow:!1}:{chapterId:5,earthSpinRad:-.81,seasonAngleRad:0,axialTiltDeg:23.44,moonPhaseRad:.72,moonInclinationDeg:0,moonNodeRad:0,moonDistanceMode:"perigee",timeScale:1,showSolarRays:!1,showShadowCones:!1,showTidalBulge:!0,showTidalLockArrow:!1}}loadChapter(t){this.chapterJustCompleted=!1,this.params=this.createDefaultParamsForChapter(t),t===1?(this.ch1SawSunrise=!1,this.ch1SawNight=!1):t===2?(this.ch2SawSummer=!1,this.ch2SawWinter=!1,this.ch2TestedZeroTilt=!1):t===3?(this.ch3SawHilal=!1,this.ch3SawQuarter=!1,this.ch3SawFull=!1):t===4?(this.ch4SawTotalSolar=!1,this.ch4SawAnnular=!1,this.ch4SawBloodMoon=!1):t===5&&(this.ch5SawSpring=!1,this.ch5SawNeap=!1)}step(t){const e=this.params;if(e.timeScale>0){const Bt=.22*e.timeScale;e.earthSpinRad=We(e.earthSpinRad+Bt*t),e.moonPhaseRad=We(e.moonPhaseRad+Bt/27.3*t),e.chapterId===2&&(e.seasonAngleRad=We(e.seasonAngleRad+.08*e.timeScale*t))}const i=zi(e.seasonAngleRad).clone().negate().normalize(),s=w0(e.axialTiltDeg),a=new si().setFromAxisAngle(new D(0,1,0),e.earthSpinRad),o=s.clone().multiply(a),l=qs(Tc,Js,1).applyQuaternion(o).normalize(),c=new D(0,1,0).applyQuaternion(s).normalize(),h=Kn(l.dot(i),-1,1),u=Je.radToDeg(Math.asin(h)),d=Math.round(1361*.78*Math.max(0,h)),p=Je.radToDeg(Math.asin(Kn(c.dot(i),-1,1))),_=i.clone().addScaledVector(c,-i.dot(c)).normalize(),g=l.clone().addScaledVector(c,-l.dot(c)).normalize(),m=new D().crossVectors(_,g).dot(c),M=((12+Math.atan2(m,Kn(_.dot(g),-1,1))/Math.PI*12)%24+24)%24,E=(M+(wc-Js)/15+24)%24,v=(M+(Ac-Js)/15+24)%24,T=+(149.6+2.5*Math.cos(e.seasonAngleRad-.22)).toFixed(1),A=We(e.seasonAngleRad),{seasonName:w,monthLabel:C}=this.getSeasonLabels(A,e.axialTiltDeg),x=Je.degToRad(e.moonInclinationDeg),S=Math.asin(Kn(Math.sin(x)*Math.sin(e.moonPhaseRad-e.moonNodeRad),-1,1)),P=Kn(Math.cos(e.moonPhaseRad)*Math.cos(S),-1,1),O=Je.radToDeg(Math.acos(P)),U=Math.round((1-P)*.5*100),W=We(e.moonPhaseRad),k=Math.max(1,Math.min(30,Math.floor(W/(Math.PI*2)*29.53)+1)),z=this.getLunarPhaseName(W,O);let X="not-crescent",V={ar:"طور قمري مكتمل/تربيع (ليس هلالاً وليداً)",en:"Quarter / Gibbous / Full Phase"};(W<.72||W>Math.PI*2-.35)&&(O<7?(X="too-close",V={ar:`استطالة ${O.toFixed(1)}° (< ٧° حد دانجون) — تستحيل الرؤية لشدة وهج الشمس`,en:`Elongation ${O.toFixed(1)}° (< 7° Danjon Limit) — Invisible in solar glare`}):O<10.5&&W<.72?(X="telescope-only",V={ar:`استطالة ${O.toFixed(1)}° — هلال يُرصد بالتلسكوب الفلكي`,en:`Elongation ${O.toFixed(1)}° — Hilāl visible via Telescope`}):W<.72&&(X="naked-eye",V={ar:`استطالة ${O.toFixed(1)}° — الهلال مرئي بالعين المجردة بعد الغروب`,en:`Elongation ${O.toFixed(1)}° — Hilāl visible to naked eye`}));const it=Je.radToDeg(S);let J="none",ut=0,vt=!1,Ft=Je.radToDeg(W);Ft>180&&(Ft-=360);const $=Math.hypot(Ft,it*1.15);$<4.2&&($<=1.45?(e.moonDistanceMode==="perigee"?(J="total",ut=100):(J="annular",ut=94),vt=u>5):(J="partial",ut=Math.round(Kn(1-($-1.45)/(4.2-1.45),.08,.92)*90)));let et="none",gt=0;const ct=Math.abs(180-Je.radToDeg(W)),Rt=Math.hypot(ct,it*1.15);Rt<4.8&&(Rt<=1.85?(et="total",gt=100):(et="partial",gt=Math.round(Kn(1-(Rt-1.85)/(4.8-1.85),.1,.92)*90)));const H=Math.abs(P),Q=+(.85+H*1.55).toFixed(2);let ht="moderate",rt={ar:"مدّ معتدل",en:"Moderate Tide"};H>.86?(ht="spring",rt={ar:"المدّ الأعظم (الربيعي) — اصطفاف القمر والشمس",en:"Spring Tide (Max) — Sun & Moon Aligned"}):H<.26&&(ht="neap",rt={ar:"المدّ الأصغر (المحاقي) — تعامد القمر والشمس ٩٠°",en:"Neap Tide (Min) — 90° Sun–Moon Quadrature"});const st=this.evaluateChapterObjectives(M,A,e.axialTiltDeg,W,O,J,et,ht);return st.length>0&&st.every(Bt=>Bt.done)&&!this.completedChapters.has(e.chapterId)&&(this.completedChapters.add(e.chapterId),this.chapterJustCompleted=!0),{riyadhLocalHour:M,dammamLocalHour:E,jeddahLocalHour:v,riyadhSunElevationDeg:Math.round(u*10)/10,riyadhSolarFluxWm2:d,earthSunDistanceMkm:T,subsolarLatDeg:Math.round(p*10)/10,seasonName:w,monthLabel:C,moonIlluminationPct:U,moonElongationDeg:Math.round(O*10)/10,lunarDayHijri:k,phaseName:z,hilalStatus:X,hilalStatusLabel:V,solarEclipse:J,solarObscurationPct:ut,eclipseHitsSaudi:vt,lunarEclipse:et,lunarShadowPct:gt,moonEclipticLatDeg:Math.round(it*10)/10,tideType:ht,tideRangeMeters:Q,tideLabel:rt,objectives:st,chapterCompleted:this.completedChapters.has(e.chapterId)}}evaluateChapterObjectives(t,e,n,i,s,a,o,l){const c=gr[this.params.chapterId];if(this.params.chapterId===1)return t>=5&&t<=8.6&&(this.ch1SawSunrise=!0),(t>=20||t<=3.5)&&(this.ch1SawNight=!0),[{...c.objectives[0],done:this.ch1SawSunrise,progressText:this.ch1SawSunrise?{ar:"✓",en:"✓"}:{ar:ja(t),en:ja(t)}},{...c.objectives[1],done:this.ch1SawNight,progressText:this.ch1SawNight?{ar:"✓",en:"✓"}:{ar:ja(t),en:ja(t)}}];if(this.params.chapterId===2){const h=(e<.32||e>Math.PI*2-.32)&&n>=20,u=Math.abs(e-Math.PI)<.35&&n>=20;h&&(this.ch2SawSummer=!0),u&&(this.ch2SawWinter=!0),n<=1.5&&(this.ch2TestedZeroTilt=!0);const d=this.ch2TestedZeroTilt&&n>=21;return[{...c.objectives[0],done:this.ch2SawSummer,progressText:this.ch2SawSummer?{ar:"✓ يونيو",en:"✓ June"}:{ar:"اسحب ليونيو",en:"Drag to June"}},{...c.objectives[1],done:this.ch2SawWinter,progressText:this.ch2SawWinter?{ar:"✓ ديسمبر",en:"✓ Dec"}:{ar:"اسحب لديسمبر",en:"Drag to Dec"}},{...c.objectives[2],done:d,progressText:d?{ar:"✓ ٢٣,٥°",en:"✓ 23.5°"}:this.ch2TestedZeroTilt?{ar:"أعده لـ ٢٣,٥°",en:"Restore 23.5°"}:{ar:`${n.toFixed(1)}°`,en:`${n.toFixed(1)}°`}}]}return this.params.chapterId===3?(i>.12&&i<.55&&s>=8&&s<=28&&(this.ch3SawHilal=!0),Math.abs(i-Math.PI/2)<.24&&(this.ch3SawQuarter=!0),Math.abs(i-Math.PI)<.26&&(this.ch3SawFull=!0),[{...c.objectives[0],done:this.ch3SawHilal,progressText:this.ch3SawHilal?{ar:"✓ رُصد الهلال",en:"✓ Hilāl Sighted"}:{ar:`${s.toFixed(0)}°`,en:`${s.toFixed(0)}°`}},{...c.objectives[1],done:this.ch3SawQuarter,progressText:this.ch3SawQuarter?{ar:"✓ ٥٠٪",en:"✓ 50%"}:{ar:"٩٠°",en:"90°"}},{...c.objectives[2],done:this.ch3SawFull,progressText:this.ch3SawFull?{ar:"✓ ١٠٠٪",en:"✓ 100%"}:{ar:"١٨٠°",en:"180°"}}]):this.params.chapterId===4?(a==="total"&&(this.ch4SawTotalSolar=!0),a==="annular"&&(this.ch4SawAnnular=!0),o==="total"&&(this.ch4SawBloodMoon=!0),[{...c.objectives[0],done:this.ch4SawTotalSolar,progressText:this.ch4SawTotalSolar?{ar:"✓ كسوف كلي",en:"✓ Totality"}:{ar:"٠° حضيض",en:"0° Perigee"}},{...c.objectives[1],done:this.ch4SawAnnular,progressText:this.ch4SawAnnular?{ar:"✓ حلقة النار",en:"✓ Ring of Fire"}:{ar:"٠° أوج",en:"0° Apogee"}},{...c.objectives[2],done:this.ch4SawBloodMoon,progressText:this.ch4SawBloodMoon?{ar:"✓ خسوف دموي",en:"✓ Blood Moon"}:{ar:"١٨٠°",en:"180°"}}]):(l==="spring"&&(this.ch5SawSpring=!0),l==="neap"&&(this.ch5SawNeap=!0),[{...c.objectives[0],done:this.ch5SawSpring,progressText:this.ch5SawSpring?{ar:"✓ المد الأعظم",en:"✓ Spring Tide"}:{ar:"٠° / ١٨٠°",en:"0° / 180°"}},{...c.objectives[1],done:this.ch5SawNeap,progressText:this.ch5SawNeap?{ar:"✓ المد الأصغر",en:"✓ Neap Tide"}:{ar:"٩٠° / ٢٧٠°",en:"90° / 270°"}}])}getSeasonLabels(t,e){const n=[{ar:"يونيو (الانقلاب الصيفي)",en:"June (Summer Solstice)"},{ar:"يوليو (الأوج — ١٥٢,١ مليون كم)",en:"July (Aphelion — 152.1M km)"},{ar:"أغسطس",en:"August"},{ar:"سبتمبر (الاعتدال الخريفي)",en:"September (Autumn Equinox)"},{ar:"أكتوبر",en:"October"},{ar:"نوفمبر",en:"November"},{ar:"ديسمبر (الانقلاب الشتوي)",en:"December (Winter Solstice)"},{ar:"يناير (الحضيض — ١٤٧,١ مليون كم)",en:"January (Perihelion — 147.1M km)"},{ar:"فبراير",en:"February"},{ar:"مارس (الاعتدال الربيعي)",en:"March (Vernal Equinox)"},{ar:"أبريل",en:"April"},{ar:"مايو",en:"May"}],i=Math.floor((t/(Math.PI*2)*12+.5)%12);return e<2?{seasonName:{ar:"انعدام الفصول (محور ٠°!)",en:"No Seasons (0° Tilt!)"},monthLabel:n[i]}:t<Math.PI*.25||t>=Math.PI*1.75?{seasonName:{ar:"الصيف في المملكة",en:"Saudi Summer"},monthLabel:n[i]}:t<Math.PI*.75?{seasonName:{ar:"الخريف في المملكة",en:"Saudi Autumn"},monthLabel:n[i]}:t<Math.PI*1.25?{seasonName:{ar:"الشتاء في المملكة",en:"Saudi Winter"},monthLabel:n[i]}:{seasonName:{ar:"الربيع في المملكة",en:"Saudi Spring"},monthLabel:n[i]}}getLunarPhaseName(t,e){return e<6.5?{ar:"المحاق (اقتران مركزي)",en:"New Moon (Conjunction)"}:t<Math.PI*.38?{ar:"الهلال المتزايد",en:"Waxing Crescent (Hilāl)"}:t<Math.PI*.62?{ar:"التربيع الأول",en:"First Quarter"}:t<Math.PI*.88?{ar:"الأحدب المتزايد",en:"Waxing Gibbous"}:t<=Math.PI*1.12?{ar:"البدر المكتمل",en:"Full Moon"}:t<Math.PI*1.38?{ar:"الأحدب المتناقص",en:"Waning Gibbous"}:t<Math.PI*1.62?{ar:"التربيع الأخير",en:"Third Quarter"}:{ar:"الهلال المتناقص",en:"Waning Crescent"}}}function ja(r){const t=Math.floor(r)%24,e=Math.floor((r-Math.floor(r))*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}const cr=-.81,Ae=[{index:0,actNumber:1,actTitle:{ar:"الفصل الأول · دوران الأرض",en:"Act I · Earth’s Rotation"},sceneTitle:{ar:"فجرُ الخليج قبل البحر الأحمر",en:"Why Dawn Touches the Arabian Gulf Before the Red Sea"},camera:"earth-close",showTelescope:!0,expandTelescope:!1,calloutAnchor:"saudi",calloutText:{ar:"خط الفجر يزحف من الدمام نحو الرياض وجدة",en:"Sunrise terminator sweeping from Dammam to Riyadh & Jeddah"},narration:{ar:"تَأَمَّلْ كَوْكَبَنا السّابِحَ في سُكونِ الفَضاءِ... ها هِيَ حَواضِرُ المَمْلَكَةِ تَتَلَأْلَأُ بِأَضْوائِها الذَّهَبِيَّةِ في جَوْفِ اللَّيْلِ مِنَ الخَليجِ العَرَبِيِّ حَتّى البَحْرِ الأَحْمَرِ. اُنْظُرْ جِهَةَ الشَّرْقِ: خُيوطُ الفَجْرِ الأُولى تَقْتَرِبُ مِنَ الدَّمّامِ أَوَّلاً، لِأَنَّ الأَرْضَ تَدورُ حَوْلَ مِحْوَرِها مِنَ الغَرْبِ إِلى الشَّرْقِ بِسُرْعَةٍ تَتَجاوَزُ أَلْفاً وَخَمْسَمِئَةِ كيلومِتْرٍ في السّاعَةِ!",en:"Behold our planet suspended in space. Saudi Arabia’s cities glitter through the night from the Arabian Gulf to the Red Sea. Notice the eastern horizon: dawn approaches Dammam first because Earth spins West-to-East at over fifteen hundred kilometers per hour!"},interactivePrompt:{ar:"التجربة التفاعلية: أمسك الكرة الأرضية بمؤشر الفأرة وأدِرها نحو الشرق حتى يشرق الصباح على الدمام ثم الرياض فمكة وجدة.",en:"Interactive Step: Grab the 3D Earth directly and rotate it eastward to bring morning sunrise across Dammam, Riyadh, and Jeddah."},assistButtonLabel:{ar:"محاذاة شروق فجر المملكة",en:"Align Saudi Sunrise"},setup:r=>{r.chapterId=1,r.timeScale=.085,r.seasonAngleRad=0,r.axialTiltDeg=23.44,r.earthSpinRad=-2.72,r.showSolarRays=!1,r.showShadowCones=!1,r.showTidalBulge=!1,r.showTidalLockArrow=!1},assistAction:r=>{r.timeScale=0,r.earthSpinRad=-2.22},checkComplete:(r,t)=>r.timeScale===0&&t.riyadhLocalHour>=6.15&&t.riyadhLocalHour<=11.5,payoffNarration:{ar:"أَحْسَنْتَ! اُنْظُرْ إِلى التَّوْقيتِ فَوْقَ مُدُنِ المَمْلَكَةِ الآنَ: أَشْرَقَتِ الشَّمْسُ في الدَّمّامِ قَبْلَ جِدَّةَ بِنَحْوِ خَمْسٍ وَأَرْبَعينَ دَقيقَةً! هٰكَذا تَصْنَعُ دَوْرَةُ الأَرْضِ اليَوْمِيَّةُ مَواقيتَنا وَتَعاقُبَ اللَّيْلِ وَالنَّهارِ.",en:"Superb! Notice the city clocks now: sunrise reaches Dammam nearly forty-five minutes ahead of Jeddah—pure geometry of Earth’s West-to-East spin."}},{index:1,actNumber:2,actTitle:{ar:"الفصل الثاني · سر الفصول الأربعة",en:"Act II · Mystery of the Seasons"},sceneTitle:{ar:"السؤال الذي يخطئ فيه الكبار!",en:"The July Sun-Distance Paradox"},camera:"seasons-orbit",showTelescope:!1,calloutAnchor:"sun",calloutText:{ar:"الأرض في يوليو (١٥٢٫١ مليون كم) أبعد عن الشمس من يناير!",en:"Earth in July (152.1M km) is FARTHER from the Sun than in January!"},narration:{ar:"لِنَبْتَعِدِ الآنَ لِنَرى مَدارَ الأَرْضِ السَّنَوِيَّ حَوْلَ الشَّمْسِ، وَلْنَسْأَلْ سُؤالاً يُخْطِئُ في إِجابَتِهِ كَثيرٌ مِنَ الكِبارِ: لِماذا تَتَجاوَزُ الحَرارَةُ في الرِّياضِ خَمْساً وَأَرْبَعينَ دَرَجَةً مِئَوِيَّةً في شَهْرِ يوليو؟ المُفاجَأَةُ العِلْمِيَّةُ أَمامَكَ: الأَرْضُ في يوليو تَكونُ في أَبْعَدِ نُقْطَةٍ لَها عَنِ الشَّمْسِ، أَبْعَدَ بِخَمْسَةِ مَلايينِ كيلومِتْرٍ كامِلَةٍ عَنْ شَهْرِ يَنايِرَ!",en:"Pulling back to Earth’s annual orbit reveals a paradox most adults get wrong: why does Riyadh exceed forty-five degrees Celsius in July? Surprisingly, Earth in July sits at its farthest point from the Sun—five million kilometers farther than in January!"},interactivePrompt:{ar:"سؤال استنتاجي قبل التجربة: إذا كانت الأرض أبعد عن الشمس في يوليو، فما السبب الحقيقي لشدة حرارة الصيف في المملكة؟",en:"Hypothesis Check: Since Earth is farther from the Sun in July, what truly drives Saudi Arabia’s intense summer heat?"},riddleChoices:[{label:{ar:"ميل محور الأرض (٢٣٫٥°) يجعل أشعة الشمس تسقط عموديةً مركّزة على مدار السرطان في المملكة",en:"Earth’s 23.5° axial tilt aims solar rays almost perpendicularly at Saudi Arabia’s Tropic of Cancer"},isCorrect:!0,feedback:{ar:"إصابة علمية دقيقة! زاوية سقوط الأشعة وتركّز الطاقة في المتر المربع هما مفتاح الفصول الأربعة!",en:"Bullseye! Ray incidence angle and concentrated energy per m² drive the seasons!"}},{label:{ar:"تباطؤ دوران الأرض حول نفسها في فصل الصيف فيطول تعرّضها للشمس",en:"Earth spins much slower on its axis during July"},isCorrect:!1,feedback:{ar:"سرعة دوران الأرض حول محورها ثابتة طوال العام! جرّب الخيار الأول لنكشف سر زاوية الميل.",en:"Earth’s rotational speed stays constant all year! Select the axial tilt explanation to see why."}}],assistButtonLabel:{ar:"إظهار حزمة الإشعاع الشمسي",en:"Reveal Solar Ray Bundle"},setup:r=>{r.chapterId=2,r.timeScale=0,r.seasonAngleRad=0,r.axialTiltDeg=23.44,r.earthSpinRad=cr,r.showSolarRays=!0,r.showShadowCones=!1,r.showTidalBulge=!1},assistAction:r=>{r.showSolarRays=!0},checkComplete:(r,t,e)=>e,payoffNarration:{ar:"إِحاطَةٌ رائِعَةٌ! زاوِيَةُ سُقوطِ الأَشِعَّةِ لا المَسافَةُ هِيَ صانِعَةُ الفُصولِ؛ وَالآنَ لِنَخْتَبِرْ هٰذا بِأَيْدينا على مَدارِ السَّرَطانِ في المَشْهَدِ التّالي!",en:"Brilliant insight! Solar ray angle—not distance—creates the seasons. Now let’s test it hands-on along the Tropic of Cancer!"}},{index:2,actNumber:2,actTitle:{ar:"الفصل الثاني · سر الفصول الأربعة",en:"Act II · Mystery of the Seasons"},sceneTitle:{ar:"مدار السرطان وتجربة كوكب بلا فصول!",en:"Tropic of Cancer & A World Without Seasons"},camera:"tropic-saudi",showTelescope:!1,calloutAnchor:"tropic",calloutText:{ar:"مدار السرطان (٢٣٫٥° شمالاً) يعبر وسط المملكة",en:"Tropic of Cancer (23.5°N) crossing central Saudi Arabia"},narration:{ar:"اُنْظُرْ إِلى الحَلْقَةِ الذَّهَبِيَّةِ الَّتي تَعْبُرُ قَلْبَ المَمْلَكَةِ جَنوبَ الرِّياضِ وَالمَدينَةِ المُنَوَّرَةِ: إِنَّهُ مَدارُ السَّرَطانِ! في يونيو تَتَعامَدُ أَشِعَّةُ الشَّمْسِ عَلَيْهِ فَتَتَجاوَزُ طاقَتُها أَلْفَ واطٍ لِكُلِّ مِتْرٍ مُرَبَّعٍ. اِسْحَبِ الأَرْضَ الآنَ على مَدارِها إِلى شِتاءِ ديسَمْبَرَ لِتَرى كَيْفَ تَنْخَفِضُ الطّاقَةُ بِتَشَتُّتِ الأَشِعَّةِ المائِلَةِ!",en:"See the golden ring crossing central Saudi Arabia just south of Riyadh: the Tropic of Cancer! In June, solar rays strike perpendicular at over one thousand watts per square meter. Drag Earth along its orbit to December to watch oblique winter rays drop solar flux!"},interactivePrompt:{ar:"التجربة التفاعلية: اسحب الكرة الأرضية على مسار المدار إلى الجهة المقابلة (شتاء ديسمبر) وقارن قراءة الطاقة الشمسية بالواط/م².",en:"Interactive Step: Drag Earth halfway around its orbit to December Winter Solstice and watch Riyadh’s solar flux drop."},assistButtonLabel:{ar:"الانتقال إلى انقلاب ديسمبر الشتوي",en:"Move to December Solstice"},setup:r=>{r.chapterId=2,r.timeScale=0,r.seasonAngleRad=0,r.axialTiltDeg=23.44,r.earthSpinRad=cr,r.showSolarRays=!0},assistAction:r=>{r.timeScale=0,r.seasonAngleRad=Math.PI,r.earthSpinRad=Math.PI+cr},checkComplete:r=>Math.abs(r.seasonAngleRad-Math.PI)<.45,payoffNarration:{ar:"تَأَمَّلِ الفَرْقَ المُذْهِلَ! رَغْمَ أَنَّ الأَرْضَ في الشِّتاءِ أَقْرَبُ لِلشَّمْسِ، إِلّا أَنَّ مَيْلَ المِحْوَرِ بَعيداً عَنِ الشَّمْسِ جَعَلَ الأَشِعَّةَ مائِلَةً فَانْخَفَضَتِ الطّاقَةُ في الرِّياضِ مِنْ أَكْثَرَ مِنْ أَلْفِ واطٍ إِلى قُرابَةِ سَبْعِمِئَةِ واطٍ لِكُلِّ مِتْرٍ مُرَبَّعٍ!",en:"Remarkable! Even though Earth is closer to the Sun in winter, tilting away spreads the sunlight obliquely—dropping Riyadh’s solar flux from over one thousand down to nearly seven hundred watts per square meter!"}},{index:3,actNumber:3,actTitle:{ar:"الفصل الثالث · الأهلة وأطوار القمر",en:"Act III · Lunar Phases & Hilāl"},sceneTitle:{ar:"تحرّي هلال رمضان من أفق العُلا",en:"Sighting the Newborn Ramadan Hilāl Over AlUla"},camera:"moon-orbit",showTelescope:!0,expandTelescope:!0,calloutAnchor:"moon",calloutText:{ar:"اسحب القمر لتتجاوز زاوية الاستطالة ٨ درجات",en:"Drag Moon past 8° angular elongation from the Sun"},narration:{ar:"نَرْتَحِلُ الآنَ إِلى سَماءِ العُلا عِنْدَ الغُروبِ لِتَحَرّي هِلالِ الشَّهْرِ الهِجْرِيِّ. تَذَكَّرْ هٰذِهِ الحَقيقَةَ الذَّهَبِيَّةَ: نِصْفُ القَمَرِ المُواجِهُ لِلشَّمْسِ مُضاءٌ دائِماً، وَلا عَلاقَةَ لِظِلِّ الأَرْضِ بِأَطْوارِ القَمَرِ! حينَ يَكونُ القَمَرُ قَريباً جِدّاً مِنَ الشَّمْسِ بِأَقَلَّ مِنْ سَبْعِ دَرَجاتٍ — وَهُوَ ما يُسَمّى حَدَّ دانْجون الفَلَكِيَّ — يَغْرَقُ الهِلالُ في وَهَجِ الغُروبِ فَتَسْتَحيلُ رُؤْيَتُهُ.",en:"Now we look from AlUla at sunset to sight the Hijri crescent. Remember this golden rule: half of the Moon is always sunlit—Earth’s shadow never causes lunar phases! Below seven degrees of angular separation from the Sun, called the Danjon Limit, twilight glare makes sighting impossible."},interactivePrompt:{ar:"التجربة التفاعلية: اسحب القمر ثلاثي الأبعاد عكس عقارب الساعة (بين ١٠° و٢٦°) لرصد ولادة هلال رمضان في تلسكوب أفق العُلا.",en:"Interactive Step: Drag the 3D Moon counter-clockwise (10°–26° elongation) to sight the newborn Ramadan Hilāl in the AlUla Telescope."},assistButtonLabel:{ar:"ضبط زاوية استطالة الهلال الوليد",en:"Align Newborn Hilāl Elongation"},setup:r=>{r.chapterId=3,r.timeScale=0,r.seasonAngleRad=0,r.earthSpinRad=.76,r.moonPhaseRad=.05,r.moonInclinationDeg=5.14,r.moonNodeRad=Math.PI/2,r.showSolarRays=!1,r.showShadowCones=!1,r.showTidalLockArrow=!1},assistAction:r=>{r.timeScale=0,r.moonPhaseRad=.26},checkComplete:(r,t)=>t.hilalStatus==="naked-eye"||t.hilalStatus==="telescope-only",payoffNarration:{ar:"ها قَدْ تَراءى الهِلالُ الوَليدُ مُتَلَأْلِئاً فَوْقَ صُخورِ العُلا بَعْدَ الغُروبِ! هٰكَذا يَجْتَمِعُ الحِسابُ الفَلَكِيُّ الدَّقيقُ مَعَ الرُّؤْيَةِ البَصَرِيَّةِ في تَحْديدِ مَطالِعِ الشُّهورِ القَمَرِيَّةِ.",en:"There shines the newborn crescent above AlUla’s sandstone horizon! Astronomical elongation and optical sighting unite to mark the new Hijri month."}},{index:4,actNumber:3,actTitle:{ar:"الفصل الثالث · الأهلة وأطوار القمر",en:"Act III · Lunar Phases & Hilāl"},sceneTitle:{ar:"البدر المكتمل وسرّ الوجه الواحد",en:"Full Moon & The Mystery of the Near Side"},camera:"moon-orbit",showTelescope:!0,calloutAnchor:"moon",calloutText:{ar:"السهم الأخضر يوضح التقييد المدّي: وجهٌ واحد يقابل الأرض دائماً!",en:"Synchronous rotation keeps the same lunar hemisphere facing Earth"},narration:{ar:"اُنْظُرْ إِلى السَّهْمِ الأَخْضَرِ المُنْطَلِقِ مِنْ وَجْهِ القَمَرِ نَحْوَ الأَرْضِ: هَلْ تَساءَلْتَ يَوْماً لِماذا لَمْ يَرَ البَشَرُ عَبْرَ التّاريخِ سِوى وَجْهٍ واحِدٍ لِلقَمَرِ؟ لِأَنَّ القَمَرَ يُتِمُّ دَوْرَةً حَوْلَ نَفْسِهِ في نَفْسِ المُدَّةِ الَّتي يَدورُ فيها حَوْلَ الأَرْضِ تَماماً! أَكْمِلِ الآنَ سَحْبَ القَمَرِ إِلى الجِهَةِ المُقابِلَةِ لِلشَّمْسِ لِيَكْتَمِلَ بَدْراً ساطِعاً.",en:"Notice the green arrow locked from the Moon to Earth: humans only ever see one face of the Moon because it rotates once on its axis in the exact time it takes to orbit Earth! Now drag the Moon opposite the Sun to reach Full Moon."},interactivePrompt:{ar:"التجربة التفاعلية: اسحب القمر إلى زاوية ١٨٠° مقابل الشمس لرصد طور «البدر المكتمل» في ليلة النصف من الشهر.",en:"Interactive Step: Drag the Moon to 180° opposite the Sun to observe the 100% Full Moon."},assistButtonLabel:{ar:"الانتقال إلى موقع البدر (١٨٠°)",en:"Align Full Moon (180°)"},setup:r=>{r.chapterId=3,r.timeScale=0,r.moonPhaseRad=Math.PI*.52,r.moonInclinationDeg=5.14,r.moonNodeRad=Math.PI/2,r.showTidalLockArrow=!0},assistAction:r=>{r.timeScale=0,r.moonPhaseRad=Math.PI,r.moonNodeRad=Math.PI/2},checkComplete:(r,t)=>t.moonIlluminationPct>=95&&t.lunarEclipse==="none",payoffNarration:{ar:"سُبْحانَ اللّٰهِ... اكْتَمَلَ القَمَرُ بَدْراً مُنيراً في لَيْلَةِ الخامِسَ عَشَرَ دونَ أَنْ يَحْجُبَهُ ظِلُّ الأَرْضِ بِفَضْلِ مَيْلِ مَدارِهِ! وَهٰذا يَقودُنا مُباشَرَةً إِلى سِرِّ الكُسوفِ العَظيمِ.",en:"Magnificent! The Full Moon shines at full illumination—clearing Earth’s shadow thanks to its tilted orbit, leading us straight to the secret of eclipses!"}},{index:5,actNumber:4,actTitle:{ar:"الفصل الرابع · هندسة الكسوف والخسوف",en:"Act IV · Eclipse Geometry"},sceneTitle:{ar:"لماذا لا يحدث الكسوف كل شهر؟ اصنع الكسوف الكلي!",en:"The 5.14° Secret & Total Solar Eclipse Over Saudi Arabia"},camera:"eclipse-align",showTelescope:!0,expandTelescope:!0,calloutAnchor:"umbra",calloutText:{ar:"لاحظ كيف يمر مخروط ظل القمر تحت الأرض بسبب ميل ٥٫١٤°!",en:"Moon’s Umbra shadow cone misses beneath Earth due to 5.14° orbital tilt!"},narration:{ar:"تَأَمَّلْ هٰذا المَشْهَدَ الفَريدَ: القَمَرُ الآنَ يَقَعُ بَيْنَ الشَّمْسِ وَالأَرْضِ، وَمَعَ ذٰلِكَ لا يَحْدُثُ أَيُّ كُسوفٍ! اُنْظُرْ إِلى مَخْروطِ ظِلِّ القَمَرِ الأَسْوَدِ في الفَضاءِ؛ إِنَّهُ يَمُرُّ أَسْفَلَ الكُرَةِ الأَرْضِيَّةِ بِسَبَبِ مَيْلِ مَدارِ القَمَرِ بِخَمْسِ دَرَجاتٍ وَرُبْعٍ! لا يَقَعُ الكُسوفُ إِلّا حينَ يَتَقاطَعُ القَمَرُ مَعَ عُقْدَةِ المَدارِ على خَطِّ اسْتِقامَةٍ واحِدٍ.",en:"Look closely: the Moon sits right between Earth and the Sun, yet there is no eclipse! Because the Moon’s orbit tilts five point one four degrees, its dark Umbra shadow cone passes cleanly beneath Earth. Eclipses only strike right at the orbital nodes!"},interactivePrompt:{ar:"التجربة الحاسمة: اضبط محاذاة عقدة المدار (٠°) ليسقط ظل القمر التام على المملكة العربية السعودية ويظهر إكليل الشمس وخاتم الألماس.",en:"Key Alignment: Align the 0° orbital node to project the Moon’s Umbra across Saudi Arabia and reveal the Solar Corona & Diamond Ring."},assistButtonLabel:{ar:"محاذاة عقدة المدار (٠°) — كسوف كلي",en:"Align 0° Node — Total Eclipse"},setup:r=>{r.chapterId=4,r.timeScale=0,r.seasonAngleRad=0,r.earthSpinRad=cr,r.moonPhaseRad=0,r.moonInclinationDeg=5.14,r.moonNodeRad=Math.PI/2,r.moonDistanceMode="perigee",r.showShadowCones=!0,r.showTidalLockArrow=!1},assistAction:r=>{r.timeScale=0,r.moonPhaseRad=0,r.moonNodeRad=0,r.moonDistanceMode="perigee",r.showShadowCones=!0},checkComplete:(r,t)=>t.solarEclipse==="total",payoffNarration:{ar:"مَشْهَدٌ يَحْبِسُ الأَنْفاسَ! سَقَطَ ظِلُّ القَمَرِ التّامُّ على قَلْبِ الجَزيرَةِ العَرَبِيَّةِ، فَتَحَوَّلَ النَّهارُ إِلى شَفَقٍ مَهيبٍ، وَظَهَرَ إِكْليلُ الشَّمْسِ الفِضِّيُّ وَخاتَمُ الأَلْماسِ الَّذي لا يُرى إِلّا في لَحَظاتِ الكُسوفِ الكُلِّيِّ!",en:"Breathtaking! The Moon’s Umbra sweeps over Saudi Arabia, turning midday into twilight and unveiling the pearly Solar Corona and Diamond Ring!"}},{index:6,actNumber:4,actTitle:{ar:"الفصل الرابع · هندسة الكسوف والخسوف",en:"Act IV · Eclipse Geometry"},sceneTitle:{ar:"حلقة النار التاريخية في سماء الأحساء (٢٠١٩م)",en:'Al-Ahsa’s Historic 2019 "Ring of Fire" Annular Eclipse'},camera:"eclipse-align",showTelescope:!0,expandTelescope:!0,calloutAnchor:"umbra",calloutText:{ar:"في الأوج (٤٠٦٬٧٠٠ كم) ينتهي رأس مخروط الظل قبل لمس الأرض!",en:"At Apogee (406,700 km), the Umbra cone ends in space before reaching Earth!"},narration:{ar:"وَلٰكِنْ ماذا يَحْدُثُ لَوْ وَقَعَ الكُسوفُ وَالقَمَرُ في أَبْعَدِ نُقْطَةٍ في مَدارِهِ الإِهْليلَجِيِّ عِنْدَ أَرْبَعِمِئَةٍ وَسِتَّةِ آلافِ كيلومِتْرٍ؟ هٰذا ما شَهِدَهُ أَهالي الأَحْساءِ وَالهُفوفِ صَبيحَةَ السّادِسِ وَالعِشْرينَ مِنْ ديسَمْبَرَ عامَ أَلْفَيْنِ وَتِسْعَةَ عَشَرَ! يَبْدو قُرْصُ القَمَرِ أَصْغَرَ قَليلاً مِنْ قُرْصِ الشَّمْسِ، فَيَنْتَهي مَخْروطُ الظِّلِّ في الفَضاءِ قَبْلَ لَمْسِ الأَرْضِ!",en:"What if an aligned eclipse occurs when the Moon sits at Apogee—its farthest orbital point at over four hundred six thousand kilometers? That exact spectacle graced Al-Ahsa, Saudi Arabia on December twenty-sixth, twenty nineteen! The Umbra tip falls short of Earth, leaving a blazing Ring of Fire!"},interactivePrompt:{ar:"التجربة التفاعلية: انقل القمر من الحضيض إلى «الأوج (٤٠٦٬٧٠٠ كم)» وراقب تحوّل الكسوف إلى «حلقة النار» الحلقية.",en:'Interactive Step: Switch the Moon from Perigee to Apogee (406,700 km) to observe the Annular "Ring of Fire".'},assistButtonLabel:{ar:"ضبط مدار الأوج — حلقة النار",en:"Switch to Apogee — Ring of Fire"},setup:r=>{r.chapterId=4,r.timeScale=0,r.seasonAngleRad=0,r.earthSpinRad=cr,r.moonPhaseRad=0,r.moonNodeRad=0,r.moonDistanceMode="perigee",r.showShadowCones=!0},assistAction:r=>{r.moonPhaseRad=0,r.moonNodeRad=0,r.moonDistanceMode="apogee"},checkComplete:(r,t)=>t.solarEclipse==="annular",payoffNarration:{ar:"تَأَمَّلْ حَلْقَةَ النّارِ الذَّهَبِيَّةَ! فَرْقُ خَمْسينَ أَلْفَ كيلومِتْرٍ فَقَطْ في بُعْدِ القَمَرِ غَيَّرَ الظّاهِرَةَ مِنْ كُسوفٍ كُلِّيٍّ مُظْلِمٍ إِلى خاتَمٍ مُتَوَهِّجٍ مِنْ لَهَبِ الشَّمْسِ!",en:"Behold the Ring of Fire! Just fifty thousand kilometers of orbital eccentricity transforms totality into a dazzling golden annulus!"}},{index:7,actNumber:4,actTitle:{ar:"الفصل الرابع · هندسة الكسوف والخسوف",en:"Act IV · Eclipse Geometry"},sceneTitle:{ar:"الخسوف الدموي: حين يصبغ شفقُ الأرض وجهَ القمر!",en:"Blood Moon: Earth’s Sunsets Refracted Onto the Moon"},camera:"eclipse-align",showTelescope:!0,expandTelescope:!1,calloutAnchor:"moon",calloutText:{ar:"غلاف الأرض الجوي يحني الضوء الأحمر نحو القمر المخسوف",en:"Earth’s atmosphere refracts red sunset light into the Umbra"},narration:{ar:"وَالآنَ لِنَعْكِسِ المَشْهَدَ: حينَ تَحْجُبُ الأَرْضُ ضَوْءَ الشَّمْسِ عَنِ القَمَرِ البَدْرِ، لِماذا لا يَخْتَفي القَمَرُ في السَّوادِ التّامِّ بَلْ يَتَحَوَّلُ إِلى اللَّوْنِ الأَحْمَرِ النُّحاسِيِّ؟ لِأَنَّ الغِلافَ الجَوِّيَّ لِلأَرْضِ يَعْمَلُ كَعَدَسَةٍ عِمْلاقَةٍ تُشَتِّتُ الضَّوْءَ الأَزْرَقَ وَتَحْني أَشِعَّةَ غُروبِ الشَّمْسِ الحَمْراءَ حَوْلَ كَوْكَبِنا لِتَسْقُطَ على وَجْهِ القَمَرِ!",en:"Now reverse the alignment: when Earth blocks direct sunlight from reaching the Full Moon, why does the Moon glow coppery red instead of vanishing? Earth’s atmosphere acts like a giant lens—scattering blue light and refracting red sunset light right into its shadow cone!"},interactivePrompt:{ar:"التجربة التفاعلية: اسحب القمر خلف الأرض عند زاوية ١٨٠° ليدخل ظل الأرض ويتحوّل بفعل انكسار الغلاف الجوي إلى القمر النحاسي.",en:"Interactive Step: Move the Moon behind Earth (180°) into Earth’s Umbra to observe atmospheric Rayleigh refraction."},assistButtonLabel:{ar:"محاذاة الخسوف الكلي (١٨٠°)",en:"Align Total Lunar Eclipse (180°)"},setup:r=>{r.chapterId=4,r.timeScale=0,r.earthSpinRad=cr+Math.PI,r.moonPhaseRad=Math.PI*.78,r.moonNodeRad=0,r.showShadowCones=!0},assistAction:r=>{r.timeScale=0,r.earthSpinRad=cr+Math.PI,r.moonPhaseRad=Math.PI,r.moonNodeRad=0},checkComplete:(r,t)=>t.lunarEclipse==="total",payoffNarration:{ar:"رَوْعَةٌ كَوْنِيَّةٌ! لَوْ كُنْتَ واقِفاً على سَطْحِ القَمَرِ الآنَ، لَرَأَيْتَ الكُرَةَ الأَرْضِيَّةَ مُحاطَةً بِحَلْقَةٍ حَمْراءَ مُتَوَهِّجَةٍ هِيَ مَجْموعُ كُلِّ لَحَظاتِ الشُّروقِ وَالغُروبِ على كَوْكَبِنا في آنٍ واحِدٍ!",en:"Pure cosmic poetry! Standing on the Moon right now, you would see Earth ringed by every sunrise and sunset on our planet glowing together at once!"}},{index:8,actNumber:5,actTitle:{ar:"الفصل الخامس · فيزياء المدّ والجزر",en:"Act V · Physics of Gravity Tides"},sceneTitle:{ar:"لغز الانتفاخ المزدوج للبحار وختام الرحلة",en:"The Dual-Bulge Ocean Mystery & Grand Finale"},camera:"tides-top",showTelescope:!1,calloutAnchor:"saudi",calloutText:{ar:"انتفاخان مائيان متناظران يصنعان مدَّين كل يوم!",en:"Two symmetric tidal bulges create two high tides daily!"},narration:{ar:"نَخْتِمُ رِحْلَتَنا على سَواحِلِ الخَليجِ العَرَبِيِّ وَالبَحْرِ الأَحْمَرِ بِلُغْزٍ فيزْيائِيٍّ بَديعٍ: لِماذا يَرْتَفِعُ المَدُّ في الجِهَةِ المُواجِهَةِ لِلقَمَرِ وَفي الجِهَةِ المُعاكِسَةِ لَهُ مِنَ الأَرْضِ في اللَّحْظَةِ نَفْسِها؟ لِأَنَّ القَمَرَ يَجْذِبُ مِياهَ المُحيطِ القَريبَةَ أَقْوى مِنْ مَرْكَزِ الأَرْضِ، وَيَجْذِبُ مَرْكَزَ الأَرْضِ أَقْوى مِنَ المِياهِ البَعيدَةِ، فَتَتَمَطَّطُ المُحيطاتُ مِنَ الجانِبَيْنِ مَعاً! جَرِّبِ الآنَ تَعامُدَ القَمَرِ بِزاوِيَةِ تِسْعينَ دَرَجَةً لِتَرى كَيْفَ يَهْدَأُ البَحْرُ في المَدِّ الأَصْغَرِ!",en:"We conclude along Saudi Arabia’s coasts with a classic physics puzzle: why do oceans bulge both toward the Moon and on the opposite side of Earth at the same time? Because differential gravity pulls near water harder than Earth’s core, and pulls Earth’s core harder than far water! Now test ninety-degree quadrature to calm the seas into a Neap Tide!"},interactivePrompt:{ar:"التجربة الختامية: حرّك القمر إلى زاوية التربيع (٩٠°) لرصد «المدّ الأصغر المحاقي» ومقارنته بالمدّ الأعظم.",en:"Finale Step: Move the Moon to 90° quadrature to observe the calm Neap Tide and complete the observatory sequence."},assistButtonLabel:{ar:"ضبط زاوية التربيع (٩٠°) وإتمام الرحلة",en:"Set 90° Quadrature & Complete"},setup:r=>{r.chapterId=5,r.timeScale=0,r.moonPhaseRad=0,r.moonInclinationDeg=0,r.showShadowCones=!1,r.showSolarRays=!1,r.showTidalBulge=!0},assistAction:r=>{r.timeScale=0,r.moonPhaseRad=Math.PI/2,r.showTidalBulge=!0},checkComplete:(r,t)=>t.tideType==="neap",payoffNarration:{ar:"هَنيئاً لَكَ إِتْمامُ رِحْلَةِ مَرْصَدِ سُهَيْلٍ الفَلَكِيَّةِ! لَقَدْ سافَرْتَ بِالعَقْلِ وَالتَّجْرِبَةِ مِنْ فَجْرِ المَمْلَكَةِ وَمَدارِ السَّرَطانِ إِلى أَهِلَّةِ العُلا وَحَلْقَةِ النّارِ في الأَحْساءِ وَأَسْرارِ الجاذِبِيَّةِ. يُمْكِنُكَ الآنَ اسْتِعْراضُ شَهادَةِ الإِتْقانِ أَوِ الانْطِلاقُ في المُخْتَبَرِ الحُرِّ!",en:"Congratulations on completing the Suhail Guided Journey! From Saudi dawn and the Tropic of Cancer to AlUla’s crescent and Al-Ahsa’s Ring of Fire, the full Open Observatory is now yours!"}}];function vi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function R0(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},oa={duration:.5,overwrite:!1,delay:0},uh,ze,pe,Dn=1e8,ie=1/Dn,Rc=Math.PI*2,pv=Rc/4,mv=0,C0=Math.sqrt,gv=Math.cos,_v=Math.sin,Ie=function(t){return typeof t=="string"},Se=function(t){return typeof t=="function"},Ri=function(t){return typeof t=="number"},dh=function(t){return typeof t>"u"},ai=function(t){return typeof t=="object"},ln=function(t){return t!==!1},fh=function(){return typeof window<"u"},Ka=function(t){return Se(t)||Ie(t)},P0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$e=Array.isArray,vv=/random\([^)]+\)/g,xv=/,\s*/g,nd=/(?:-?\.?\d|\.)+/gi,D0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,El=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,L0=/[+-]=-?[.\d]+/,Sv=/[^,'"\[\]\s]+/gi,yv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_e,Zn,Cc,ph,yn={},So={},I0,U0=function(t){return(So=Ms(t,yn))&&dn},mh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},la=function(t,e){return!e&&console.warn(t)},N0=function(t,e){return t&&(yn[t]=e)&&So&&(So[t]=e)||yn},ca=function(){return 0},Mv={suppressEvents:!0,isStart:!0,kill:!1},po={suppressEvents:!0,kill:!1},Ev={suppressEvents:!0},gh={},Yi=[],Pc={},F0,gn={},bl={},id=30,mo=[],_h="",vh=function(t){var e=t[0],n,i;if(ai(e)||Se(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=mo.length;i--&&!mo[i].targetTest(e););n=mo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new sf(t[i],n)))||t.splice(i,1);return t},Sr=function(t){return t._gsap||vh(Ln(t))[0]._gsap},O0=function(t,e,n){return(n=t[e])&&Se(n)?t[e]():dh(n)&&t.getAttribute&&t.getAttribute(e)||n},cn=function(t,e){return(t=t.split(",")).forEach(e)||t},ye=function(t){return Math.round(t*1e5)/1e5||0},ge=function(t){return Math.round(t*1e7)/1e7||0},cs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},bv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},yo=function(){var t=Yi.length,e=Yi.slice(0),n,i;for(Pc={},Yi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xh=function(t){return!!(t._initted||t._startAt||t.add)},B0=function(t,e,n,i){Yi.length&&!ze&&yo(),t.render(e,n,!!(ze&&e<0&&xh(t))),Yi.length&&!ze&&yo()},z0=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Sv).length<2?e:Ie(t)?t.trim():t},k0=function(t){return t},Mn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Tv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ms=function(t,e){for(var n in e)t[n]=e[n];return t},rd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ai(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Mo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Qs=function(t){var e=t.parent||_e,n=t.keyframes?Tv($e(t.keyframes)):Mn;if(ln(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},wv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},V0=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Bo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ki=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},yr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Av=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Dc=function(t,e,n,i){return t._startAt&&(ze?t._startAt.revert(po):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Rv=function r(t){return!t||t._ts&&r(t.parent)},sd=function(t){return t._repeat?Es(t._tTime,t=t.duration()+t._rDelay)*t:0},Es=function(t,e){var n=Math.floor(t=ge(t/e));return t&&n===t?n-1:n},Eo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},zo=function(t){return t._end=ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||ie)||0))},ko=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),zo(t),n._dirty||yr(n,t)),t},H0=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Eo(t.rawTime(),e),(!e._dur||xa(0,e.totalDuration(),n)-e._tTime>ie)&&e.render(n,!0)),yr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ie}},Jn=function(t,e,n,i){return e.parent&&Ki(e),e._start=ge((Ri(n)?n:!n&&bo(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==_e?An(t,n,e):t._time)+e._delay),e._end=ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),V0(t,e,"_first","_last",t._sort?"_start":0),bo(e)||(t._recent=e),i||H0(t,e),t._ts<0&&ko(t,t._tTime),t},G0=function(t,e){return(yn.ScrollTrigger||mh("scrollTrigger",e))&&yn.ScrollTrigger.create(e,t)},W0=function(t,e,n,i,s){if(yh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!ze&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&F0!==_n.frame)return Yi.push(t),t._lazy=[s,i],1},Cv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},bo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Pv=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Cv(t)&&!(!t._initted&&bo(t))||(t._ts<0||t._dp._ts<0)&&!bo(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=xa(0,t._tDur,e),h=Es(l,o),t._yoyo&&h&1&&(a=1-a),h!==Es(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||ze||i||t._zTime===ie||!e&&t._zTime){if(!t._initted&&W0(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ie:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Dc(t,e,n,!0),t._onUpdate&&!n&&vn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&vn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ki(t,1),!n&&!ze&&(vn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Dv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},bs=function(t,e,n,i){var s=t._repeat,a=ge(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ge(a*(s+1)+t._rDelay*s):a,o>0&&!i&&ko(t,t._tTime=t._tDur*o),t.parent&&zo(t),n||yr(t.parent,t),t},ad=function(t){return t instanceof an?yr(t):bs(t,t._dur)},Lv={_start:0,endTime:ca,totalDuration:ca},An=function r(t,e,n){var i=t.labels,s=t._recent||Lv,a=t.duration()>=Dn?s.endTime(!1):t._dur,o,l,c;return Ie(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*($e(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},ta=function(t,e,n){var i=Ri(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ln(l.vars.inherit)&&l.parent;a.immediateRender=ln(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new be(e[0],a,e[s+1])},er=function(t,e){return t||t===0?e(t):e},xa=function(t,e,n){return n<t?t:n>e?e:n},Xe=function(t,e){return!Ie(t)||!(e=yv.exec(t))?"":e[1]},Iv=function(t,e,n){return er(n,function(i){return xa(t,e,i)})},Lc=[].slice,X0=function(t,e){return t&&ai(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ai(t[0]))&&!t.nodeType&&t!==Zn},Uv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ie(i)&&!e||X0(i,1)?(s=n).push.apply(s,Ln(i)):n.push(i)})||n},Ln=function(t,e,n){return pe&&!e&&pe.selector?pe.selector(t):Ie(t)&&!n&&(Cc||!Ts())?Lc.call((e||ph).querySelectorAll(t),0):$e(t)?Uv(t,n):X0(t)?Lc.call(t,0):t?[t]:[]},Ic=function(t){return t=Ln(t)[0]||la("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ln(e,n.querySelectorAll?n:n===t?la("Invalid scope")||ph.createElement("div"):t)}},q0=function(t){return t.sort(function(){return .5-Math.random()})},Y0=function(t){if(Se(t))return t;var e=ai(t)?t:{each:t},n=Mr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Ie(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,p,_){var g=(_||e).length,m=a[g],f,M,E,v,T,A,w,C,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,Dn])[1],!x){for(w=-Dn;w<(w=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=a[g]=[],f=l?Math.min(x,g)*h-.5:i%x,M=x===Dn?0:l?g*u/x-.5:i/x|0,w=0,C=Dn,A=0;A<g;A++)E=A%x-f,v=M-(A/x|0),m[A]=T=c?Math.abs(c==="y"?v:E):C0(E*E+v*v),T>w&&(w=T),T<C&&(C=T);i==="random"&&q0(m),m.max=w-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Xe(e.amount||e.each)||0,n=n&&g<0?Yv(n):n}return g=(m[d]-m.min)/m.max||0,ge(m.b+(n?n(g):g)*m.v)+m.u}},Uc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ge(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ri(n)?0:Xe(n))}},$0=function(t,e){var n=$e(t),i,s;return!n&&ai(t)&&(i=n=t.radius||Dn,t.values?(t=Ln(t.values),(s=!Ri(t[0]))&&(i*=i)):t=Uc(t.increment)),er(e,n?Se(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Dn,h=0,u=t.length,d,p;u--;)s?(d=t[u].x-o,p=t[u].y-l,d=d*d+p*p):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,s||h===a||Ri(a)?h:h+Xe(a)}:Uc(t))},j0=function(t,e,n,i){return er($e(t)?!e:n===!0?!!(n=0):!i,function(){return $e(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Nv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Fv=function(t,e){return function(n){return t(parseFloat(n))+(e||Xe(n))}},Ov=function(t,e,n){return Z0(t,e,0,1,n)},K0=function(t,e,n){return er(n,function(i){return t[~~e(i)]})},Bv=function r(t,e,n){var i=e-t;return $e(t)?K0(t,r(0,t.length),e):er(n,function(s){return(i+(s-t)%i)%i+t})},zv=function r(t,e,n){var i=e-t,s=i*2;return $e(t)?K0(t,r(0,t.length-1),e):er(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},ha=function(t){return t.replace(vv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(xv);return j0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Z0=function(t,e,n,i,s){var a=e-t,o=i-n;return er(s,function(l){return n+((l-t)/a*o||0)})},kv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=Ie(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if($e(t)&&!$e(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=Ms($e(t)?[]:{},t));if(!h){for(l in e)Sh.call(o,t,l,"get",e[l]);s=function(_){return bh(_,o)||(a?t.p:t)}}}return er(n,s)},od=function(t,e,n){var i=t.labels,s=Dn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},vn=function(t,e,n){var i=t.vars,s=i[e],a=pe,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Yi.length&&yo(),o&&(pe=o),h=l?s.apply(c,l):s.call(c),pe=a,h},Ys=function(t){return Ki(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ze),t.progress()<1&&vn(t,"onInterrupt"),t},es,J0=[],Q0=function(t){if(t)if(t=!t.name&&t.default||t,fh()||t.headless){var e=t.name,n=Se(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ca,render:bh,add:Sh,kill:ix,modifier:nx,rawVars:0},a={targetTest:0,get:0,getSetter:Eh,aliases:{},register:0};if(Ts(),t!==i){if(gn[e])return;Mn(i,Mn(Mo(t,s),a)),Ms(i.prototype,Ms(s,Mo(t,a))),gn[i.prop=e]=i,t.targetTest&&(mo.push(i),gh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}N0(e,i),t.register&&t.register(dn,i,hn)}else J0.push(t)},se=255,$s={aqua:[0,se,se],lime:[0,se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,se],navy:[0,0,128],white:[se,se,se],olive:[128,128,0],yellow:[se,se,0],orange:[se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[se,0,0],pink:[se,192,203],cyan:[0,se,se],transparent:[se,se,se,0]},Tl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*se+.5|0},tf=function(t,e,n){var i=t?Ri(t)?[t>>16,t>>8&se,t&se]:0:$s.black,s,a,o,l,c,h,u,d,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),$s[t])i=$s[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&se,i&se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&se,t&se]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(nd),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Tl(l+1/3,s,a),i[1]=Tl(l,s,a),i[2]=Tl(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(D0),n&&i.length<4&&(i[3]=1),i}else i=t.match(nd)||$s.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/se,a=i[1]/se,o=i[2]/se,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(p=u-d,c=h>.5?p/(2-u-d):p/(u+d),l=u===s?(a-o)/p+(a<o?6:0):u===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ef=function(t){var e=[],n=[],i=-1;return t.split($i).forEach(function(s){var a=s.match(ts)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},ld=function(t,e,n){var i="",s=(t+i).match($i),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=tf(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=ef(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace($i,"1").split(ts),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split($i),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},$i=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in $s)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Vv=/hsl[a]?\(/,nf=function(t){var e=t.join(" "),n;if($i.lastIndex=0,$i.test(e))return n=Vv.test(e),t[1]=ld(t[1],n),t[0]=ld(t[0],n,ef(t[1])),!0},ua,_n=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,d,p,_=function g(m){var f=r()-i,M=m===!0,E,v,T,A;if((f>t||f<0)&&(n+=f-e),i+=f,T=i-n,E=T-a,(E>0||M)&&(A=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,a+=E+(E>=s?0:s-E),v=1),M||(l=c(g)),v)for(p=0;p<o.length;p++)o[p](T,d,A,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){I0&&(!Cc&&fh()&&(Zn=Cc=window,ph=Zn.document||{},yn.gsap=dn,(Zn.gsapVersions||(Zn.gsapVersions=[])).push(dn.version),U0(So||Zn.GreenSockGlobals||!Zn.gsap&&Zn||{}),J0.forEach(Q0)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},ua=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ua=0,c=ca},lagSmoothing:function(m,f){t=m||1/0,e=Math.min(f||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,f,M){var E=f?function(v,T,A,w){m(v,T,A,w),u.remove(E)}:m;return u.remove(m),o[M?"unshift":"push"](E),Ts(),E},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&p>=f&&p--},_listeners:o},u})(),Ts=function(){return!ua&&_n.wake()},Xt={},Hv=/^[\d.\-M][\d.\-,\s]/,Gv=/["']/g,Wv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Gv,"").trim():+c,i=l.substr(o+1).trim();return e},Xv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},qv=function(t){var e=(t+"").split("("),n=Xt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Wv(e[1])]:Xv(t).split(",").map(z0)):Xt._CE&&Hv.test(t)?Xt._CE("",t):n},Yv=function(t){return function(e){return 1-t(1-e)}},Mr=function(t,e){return t&&(Se(t)?t:Xt[t]||qv(t))||e},Cr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return cn(t,function(o){Xt[o]=yn[o]=s,Xt[a=o.toLowerCase()]=n;for(var l in s)Xt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xt[o+"."+l]=s[l]}),s},rf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},wl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Rc*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*_v((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:rf(o);return s=Rc/s,l.config=function(c,h){return r(t,c,h)},l},Al=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:rf(n);return i.config=function(s){return r(t,s)},i};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Cr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Xt.Linear.easeNone=Xt.none=Xt.Linear.easeIn;Cr("Elastic",wl("in"),wl("out"),wl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Cr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Cr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Cr("Circ",function(r){return-(C0(1-r*r)-1)});Cr("Sine",function(r){return r===1?1:-gv(r*pv)+1});Cr("Back",Al("in"),Al("out"),Al());Xt.SteppedEase=Xt.steps=yn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ie;return function(o){return((i*xa(0,a,o)|0)+s)*n}}};oa.ease=Xt["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return _h+=r+","+r+"Params,"});var sf=function(t,e){this.id=mv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:O0,this.set=e?e.getSetter:Eh},da=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,bs(this,+e.duration,1,1),this.data=e.data,pe&&(this._ctx=pe,pe.data.push(this)),ua||_n.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ts(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ko(this,n),!s._dp||s.parent||H0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Jn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ie||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),B0(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+sd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+sd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Es(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ie?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Eo(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-ie?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(xa(-Math.abs(this._delay),o,s),i!==!1),zo(this),Av(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Ts(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==ie,a;if(s)for(this._tTime-=ie,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+ie){s=!1;break}a=a._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=ge(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Jn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Eo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ev);var i=ze;return ze=n,xh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ze=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ad(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ad(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(An(this,n),ln(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ln(i)),this._dur||(this._zTime=-ie),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ie:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ie,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ie)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Se(n)?n:k0,l=function(){var h=i.then;i.then=null,s&&s(),Se(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ys(this)},r})();Mn(da.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ie,_prom:0,_ps:!1,_rts:1});var an=(function(r){R0(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ln(n.sortChildren),_e&&Jn(n.parent||_e,vi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&G0(vi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return ta(0,arguments,this),this},e.from=function(i,s,a){return ta(1,arguments,this),this},e.fromTo=function(i,s,a,o){return ta(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Qs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new be(i,s,An(this,a),1),this},e.call=function(i,s,a){return Jn(this,be.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new be(i,a,An(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Qs(a).immediateRender=ln(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,Qs(o).immediateRender=ln(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ge(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,p,_,g,m,f,M,E,v,T,A,w;if(this!==_e&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,v=this._start,E=this._ts,f=!E,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=ge(h%m),h===l?(g=this._repeat,d=c):(T=ge(h/m),g=~~T,g&&g===T&&(d=c,g--),d>c&&(d=c)),T=Es(this._tTime,m),!o&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),A&&g&1&&(d=c-d,w=1),g!==T&&!this._lock){var C=A&&T&1,x=C===(A&&g&1);if(g<T&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(w?0:ge(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&vn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,T=g),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Dv(this,ge(o),ge(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!T&&(vn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,a),d!==this._time||!this._ts&&!f){M=0,_&&(h+=this._zTime=-ie);break}}p=_}else{p=this._last;for(var S=i<0?i:d;p;){if(_=p._prev,(p._act||S<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,a||ze&&xh(p)),d!==this._time||!this._ts&&!f){M=0,_&&(h+=this._zTime=S?-ie:ie);break}}p=_}}if(M&&!s&&(this.pause(),M.render(d>=o?0:-ie)._zTime=d>=o?1:-1,this._ts))return this._start=v,zo(this),this.render(i,s,a);this._onUpdate&&!s&&vn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ki(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(vn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Ri(s)||(s=An(this,s,i)),!(i instanceof da)){if($e(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ie(i))return this.addLabel(i,s);if(Se(i))i=be.delayedCall(0,i);else return this}return this!==i?Jn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Dn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof be?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Ie(i)?this.removeLabel(i):Se(i)?this.killTweensOf(i):(i.parent===this&&Bo(this,i),i===this._recent&&(this._recent=this._last),yr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ge(_n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=An(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=be.delayedCall(0,s||ca,a);return o.data="isPause",this._hasPause=1,Jn(this,o,An(this,i))},e.removePause=function(i){var s=this._first;for(i=An(this,i);s;)s._start===i&&s.data==="isPause"&&Ki(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Hi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Ln(i),l=this._first,c=Ri(s),h;l;)l instanceof be?bv(l._targets,o)&&(c?(!Hi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=An(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,p,_=be.to(a,Mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ie,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&bs(_,m,0,1).render(_._time,!0,!0),p=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Mn({startAt:{time:An(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),od(this,An(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),od(this,An(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ie)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ge(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return yr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),yr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Dn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Jn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=ge(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;bs(a,a===_e&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(_e._ts&&(B0(_e,Eo(i,_e)),F0=_n.frame),_n.frame>=id){id+=Sn.autoSleep||120;var s=_e._first;if((!s||!s._ts)&&Sn.autoSleep&&_n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||_n.sleep()}}},t})(da);Mn(an.prototype,{_lock:0,_hasPause:0,_forcing:0});var $v=function(t,e,n,i,s,a,o){var l=new hn(this._pt,t,e,0,1,hf,null,s),c=0,h=0,u,d,p,_,g,m,f,M;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=ha(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),d=n.match(El)||[];u=El.exec(i);)_=u[0],g=i.substring(c,u.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?cs(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=El.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(L0.test(i)||f)&&(l.e=0),this._pt=l,l},Sh=function(t,e,n,i,s,a,o,l,c,h){Se(i)&&(i=i(s||0,t,a));var u=t[e],d=n!=="get"?n:Se(u)?c?t[e.indexOf("set")||!Se(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,p=Se(u)?c?Qv:lf:Mh,_;if(Ie(i)&&(~i.indexOf("random(")&&(i=ha(i)),i.charAt(1)==="="&&(_=cs(d,i)+(Xe(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Nc)return!isNaN(d*i)&&i!==""?(_=new hn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?ex:cf,0,p),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&mh(e,i),$v.call(this,t,e,d,i,p,l||Sn.stringFilter,c))},jv=function(t,e,n,i,s){if(Se(t)&&(t=ea(t,s,e,n,i)),!ai(t)||t.style&&t.nodeType||$e(t)||P0(t))return Ie(t)?ea(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=ea(t[o],s,e,n,i);return a},af=function(t,e,n,i,s,a){var o,l,c,h;if(gn[t]&&(o=new gn[t]).init(s,o.rawVars?e[t]:jv(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new hn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==es))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Hi,Nc,yh=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,p=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,f=t.parent,M=f&&f.data==="nested"?f.vars.targets:m,E=t._overwrite==="auto"&&!uh,v=t.timeline,T=i.easeReverse||u,A,w,C,x,S,P,O,U,W,k,z,X,V;if(v&&(!d||!s)&&(s="none"),t._ease=Mr(s,oa.ease),t._rEase=T&&(Mr(T)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||d&&!i.stagger){if(U=m[0]?Sr(m[0]).harness:0,X=U&&i[U.prop],A=Mo(i,gh),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!p?g.render(-1,!0):g.revert(h&&_?po:Mv),g._lazy=0),a){if(Ki(t._startAt=be.set(m,Mn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&ln(l),startAt:null,delay:0,onUpdate:c&&function(){return vn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ze||!o&&!p)&&t._startAt.revert(po),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),C=Mn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&ln(l),immediateRender:o,stagger:0,parent:f},A),X&&(C[U.prop]=X),Ki(t._startAt=be.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ze?t._startAt.revert(po):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ie,ie);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&ln(l)||l&&!_,w=0;w<m.length;w++){if(S=m[w],O=S._gsap||vh(m)[w]._gsap,t._ptLookup[w]=k={},Pc[O.id]&&Yi.length&&yo(),z=M===m?w:M.indexOf(S),U&&(W=new U).init(S,X||A,t,z,M)!==!1&&(t._pt=x=new hn(t._pt,S,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(it){k[it]=x}),W.priority&&(P=1)),!U||X)for(C in A)gn[C]&&(W=af(C,A,t,z,S,M))?W.priority&&(P=1):k[C]=x=Sh.call(t,S,C,"get",A[C],z,M,0,i.stringFilter);t._op&&t._op[w]&&t.kill(S,t._op[w]),E&&t._pt&&(Hi=t,_e.killTweensOf(S,k,t.globalTime(e)),V=!t.parent,Hi=0),t._pt&&l&&(Pc[O.id]=1)}P&&uf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,d&&e<=0&&v.render(Dn,!0,!0)},Kv=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,p;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,p=t._targets.length;p--;){if(h=d[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Nc=1,t.vars[e]="+=0",yh(t,o),Nc=0,l?la(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=ye(n)+Xe(u.e)),u.b&&(u.b=h.s+Xe(u.b))},Zv=function(t,e){var n=t[0]?Sr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Ms({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Jv=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if($e(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},ea=function(t,e,n,i,s){return Se(t)?t.call(e,n,i,s):Ie(t)&&~t.indexOf("random(")?ha(t):t},To=_h+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",of={};cn(To+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return of[r]=1});To=To.split(",");var be=(function(r){R0(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Qs(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=i.parent||_e,M=($e(n)||P0(n)?Ri(n[0]):"length"in i)?[n]:Ln(n),E,v,T,A,w,C,x,S;if(o._targets=M.length?vh(M):la("GSAP target "+n+" not found. https://gsap.com",!Sn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||d||Ka(c)||Ka(h)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(E=o.timeline=new an({data:"nested",defaults:g||{},targets:f&&f.data==="nested"?f.vars.targets:M}),E.kill(),E.parent=E._dp=vi(o),E._start=0,d||Ka(c)||Ka(h)){if(A=M.length,x=d&&Y0(d),ai(d))for(w in d)~To.indexOf(w)&&(S||(S={}),S[w]=d[w]);for(v=0;v<A;v++)T=Mo(i,of),T.stagger=0,P&&(T.easeReverse=P),S&&Ms(T,S),C=M[v],T.duration=+ea(c,vi(o),v,C,M),T.delay=(+ea(h,vi(o),v,C,M)||0)-o._delay,!d&&A===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),E.to(C,T,x?x(v,C,M):0),E._ease=Xt.none;E.duration()?c=h=0:o.timeline=0}else if(_){Qs(Mn(E.vars.defaults,{ease:"none"})),E._ease=Mr(_.ease||i.ease||"none");var O=0,U,W,k;if($e(_))_.forEach(function(z){return E.to(M,z,">")}),E.duration();else{T={};for(w in _)w==="ease"||w==="easeEach"||Jv(w,_[w],T,_.easeEach);for(w in T)for(U=T[w].sort(function(z,X){return z.t-X.t}),O=0,v=0;v<U.length;v++)W=U[v],k={ease:W.e,duration:(W.t-(v?U[v-1].t:0))/100*c},k[w]=W.v,E.to(M,k,O),O+=k.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return p===!0&&!uh&&(Hi=vi(o),_e.killTweensOf(M),Hi=0),Jn(f,vi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===ge(f._time)&&ln(u)&&Rv(vi(o))&&f.data!=="nested")&&(o._tTime=-ie,o.render(Math.max(0,-h)||0)),m&&G0(vi(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ie&&!h?l:i<ie?0:i,d,p,_,g,m,f,M,E;if(!c)Pv(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(d=ge(u%g),u===l?(_=this._repeat,d=c):(m=ge(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),f=this._yoyo&&_&1,f&&(d=c-d),m=Es(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&this.vars.repeatRefresh&&!f&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(ge(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(W0(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=d<o;if(v!==this._inv){var T=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(v?-1:1)/T:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(d/c);if(this._from&&(this.ratio=M=1-M),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!m&&(vn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;E&&E.render(i<0?i:E._dur*E._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Dc(this,i,s,a),vn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&vn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Dc(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ki(this,1),!s&&!(h&&!o)&&(u||o||f)&&(vn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){ua||_n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||yh(this,c),h=this._ease(c/this._dur),Kv(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(ko(this,0),this.parent||V0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ys(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ze),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Hi&&Hi.vars.overwrite!==!0)._first||Ys(this),this.parent&&a!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ln(i):o,c=this._ptLookup,h=this._pt,u,d,p,_,g,m,f;if((!s||s==="all")&&wv(o,l))return s==="all"&&(this._pt=0),Ys(this);for(u=this._op=this._op||[],s!=="all"&&(Ie(s)&&(g={},cn(s,function(M){return g[M]=1}),s=g),s=Zv(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],s==="all"?(u[f]=s,_=d,p={}):(p=u[f]=u[f]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Bo(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&Ys(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ta(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return ta(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return _e.killTweensOf(i,s,a)},t})(da);Mn(be.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(r){be[r]=function(){var t=new an,e=Lc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Mh=function(t,e,n){return t[e]=n},lf=function(t,e,n){return t[e](n)},Qv=function(t,e,n,i){return t[e](i.fp,n)},tx=function(t,e,n){return t.setAttribute(e,n)},Eh=function(t,e){return Se(t[e])?lf:dh(t[e])&&t.setAttribute?tx:Mh},cf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ex=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},hf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},bh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},nx=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},ix=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Bo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},rx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},uf=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},hn=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||cf,this.d=l||this,this.set=c||Mh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=rx,this.m=n,this.mt=s,this.tween=i},r})();cn(_h+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return gh[r]=1});yn.TweenMax=yn.TweenLite=be;yn.TimelineLite=yn.TimelineMax=an;_e=new an({sortChildren:!1,defaults:oa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sn.stringFilter=nf;var Er=[],go={},sx=[],cd=0,ax=0,Rl=function(t){return(go[t]||sx).map(function(e){return e()})},fa=function(){var t=Date.now(),e=[];t-cd>2&&(Rl("matchMediaInit"),Er.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Zn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Rl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),cd=t,Rl("matchMedia"))},df=(function(){function r(e,n){this.selector=n&&Ic(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ax++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Se(n)&&(s=i,i=n,n=Se);var a=this,o=function(){var c=pe,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ic(s)),pe=a,u=i.apply(a,arguments),Se(u)&&a._r.push(u),pe=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Se?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=pe;pe=null,n(this),pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof be&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof an?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof be)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Er.length;a--;)Er[a].id===this.id&&Er.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(fa):o.removeEventListener("change",fa)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r})(),ox=(function(){function r(e){this.contexts=[],this.scope=e,pe&&pe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){ai(n)||(n={matches:n});var a=new df(0,s||this.scope),o=a.conditions={},l,c,h;pe&&!a.selector&&(a.selector=pe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Zn.matchMedia(n[c]),l&&(Er.indexOf(a)<0&&Er.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(fa):l.addEventListener("change",fa),(a._mqs||(a._mqs=[])).push(l)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),wo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Q0(i)})},timeline:function(t){return new an(t)},getTweensOf:function(t,e){return _e.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ie(t)&&(t=Ln(t)[0]);var s=Sr(t||{}).get,a=n?k0:z0;return n==="native"&&(n=""),t&&(e?a((gn[e]&&gn[e].get||s)(t,e,n,i)):function(o,l,c){return a((gn[o]&&gn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Ln(t),t.length>1){var i=t.map(function(h){return dn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=gn[e],o=Sr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;es._pt=0,u.init(t,n?h+n:h,es,0,[t]),u.render(1,u),es._pt&&bh(1,es)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=dn.to(t,Mn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return _e.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Mr(t.ease,oa.ease)),rd(oa,t||{})},config:function(t){return rd(Sn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!gn[o]&&!yn[o]&&la(e+" effect requires "+o+" plugin.")}),bl[e]=function(o,l,c){return n(Ln(o),Mn(l||{},s),c)},a&&(an.prototype[e]=function(o,l,c){return this.add(bl[e](o,ai(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Xt[t]=Mr(e)},parseEase:function(t,e){return arguments.length?Mr(t,e):Xt},getById:function(t){return _e.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new an(t),i,s;for(n.smoothChildTiming=ln(t.smoothChildTiming),_e.remove(n),n._dp=0,n._time=n._tTime=_e._time,i=_e._first;i;)s=i._next,(e||!(!i._dur&&i instanceof be&&i.vars.onComplete===i._targets[0]))&&Jn(n,i,i._start-i._delay),i=s;return Jn(_e,n,0),n},context:function(t,e){return t?new df(t,e):pe},matchMedia:function(t){return new ox(t)},matchMediaRefresh:function(){return Er.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||fa()},addEventListener:function(t,e){var n=go[t]||(go[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=go[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Bv,wrapYoyo:zv,distribute:Y0,random:j0,snap:$0,normalize:Ov,getUnit:Xe,clamp:Iv,splitColor:tf,toArray:Ln,selector:Ic,mapRange:Z0,pipe:Nv,unitize:Fv,interpolate:kv,shuffle:q0},install:U0,effects:bl,ticker:_n,updateRoot:an.updateRoot,plugins:gn,globalTimeline:_e,core:{PropTween:hn,globals:N0,Tween:be,Timeline:an,Animation:da,getCache:Sr,_removeLinkedListItem:Bo,reverting:function(){return ze},context:function(t){return t&&pe&&(pe.data.push(t),t._ctx=pe),pe},suppressOverwrites:function(t){return uh=t}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return wo[r]=be[r]});_n.add(an.updateRoot);es=wo.to({},{duration:0});var lx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},cx=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=lx(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Cl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ie(s)&&(l={},cn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}cx(o,s)}}}},dn=wo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)ze?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Cl("roundProps",Uc),Cl("modifiers"),Cl("snap",$0))||wo;be.version=an.version=dn.version="3.15.1";I0=1;fh()&&Ts();Xt.Power0;Xt.Power1;Xt.Power2;Xt.Power3;Xt.Power4;Xt.Linear;Xt.Quad;Xt.Cubic;Xt.Quart;Xt.Quint;Xt.Strong;Xt.Elastic;Xt.Back;Xt.SteppedEase;Xt.Bounce;Xt.Sine;Xt.Expo;Xt.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hd,Gi,hs,Th,vr,ud,wh,hx=function(){return typeof window<"u"},Ci={},fr=180/Math.PI,us=Math.PI/180,jr=Math.atan2,dd=1e8,Ah=/([A-Z])/g,ux=/(left|right|width|margin|padding|x)/i,dx=/[\s,\(]\S/,ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},fx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},px=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},mx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},gx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},ff=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},pf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},_x=function(t,e,n){return t.style[e]=n},vx=function(t,e,n){return t.style.setProperty(e,n)},xx=function(t,e,n){return t._gsap[e]=n},Sx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},yx=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Mx=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ve="transform",un=ve+"Origin",Ex=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Ci&&s){if(this.tfm=this.tfm||{},t!=="transform")t=ii[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=xi(i,o)}):this.tfm[t]=a.x?a[t]:xi(i,t),t===un&&(this.tfm.zOrigin=a.zOrigin);else return ii.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(ve)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(un,e,"")),t=ve}(s||e)&&this.props.push(t,e,s[t])},mf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},bx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Ah,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=wh(),(!s||!s.isStart)&&!n[ve]&&(mf(n),i.zOrigin&&n[un]&&(n[un]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},gf=function(t,e){var n={target:t,props:[],revert:bx,save:Ex};return t._gsap||dn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},_f,Oc=function(t,e){var n=Gi.createElementNS?Gi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Gi.createElement(t);return n&&n.style?n:Gi.createElement(t)},xn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ah,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ws(e)||e,1)||""},fd="O,Moz,ms,Ms,Webkit".split(","),ws=function(t,e,n){var i=e||vr,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(fd[a]+t in s););return a<0?null:(a===3?"ms":a>=0?fd[a]:"")+t},Bc=function(){hx()&&window.document&&(hd=window,Gi=hd.document,hs=Gi.documentElement,vr=Oc("div")||{style:{}},Oc("div"),ve=ws(ve),un=ve+"Origin",vr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_f=!!ws("perspective"),wh=dn.core.reverting,Th=1)},pd=function(t){var e=t.ownerSVGElement,n=Oc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),hs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),hs.removeChild(n),s},md=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},vf=function(t){var e,n;try{e=t.getBBox()}catch{e=pd(t),n=1}return e&&(e.width||e.height)||n||(e=pd(t)),e&&!e.width&&!e.x&&!e.y?{x:+md(t,["x","cx","x1"])||0,y:+md(t,["y","cy","y1"])||0,width:0,height:0}:e},xf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&vf(t))},Zi=function(t,e){if(e){var n=t.style,i;e in Ci&&e!==un&&(e=ve),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ah,"-$1").toLowerCase())):n.removeAttribute(e)}},Wi=function(t,e,n,i,s,a){var o=new hn(t._pt,e,n,0,1,a?pf:ff);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},gd={deg:1,rad:1,turn:1},Tx={grid:1,flex:1},Ji=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=vr.style,l=ux.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",p=i==="%",_,g,m,f;if(i===a||!s||gd[i]||gd[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),f=t.getCTM&&xf(t),(p||a==="%")&&(Ci[e]||~e.indexOf("adius")))return _=f?t.getBBox()[l?"width":"height"]:t[h],ye(p?s/_*u:s/100*_);if(o[l?"width":"height"]=u+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Gi||!g.appendChild)&&(g=Gi.body),m=g._gsap,m&&p&&m.width&&l&&m.time===_n.time&&!m.uncache)return ye(s/m.width*u);if(p&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,_=t[h],M?t.style[e]=M:Zi(t,e)}else(p||a==="%")&&!Tx[xn(g,"display")]&&(o.position=xn(t,"position")),g===t&&(o.position="static"),g.appendChild(vr),_=vr[h],g.removeChild(vr),o.position="absolute";return l&&p&&(m=Sr(g),m.time=_n.time,m.width=g[h]),ye(d?_*s/u:_&&s?u/_*s:0)},xi=function(t,e,n,i){var s;return Th||Bc(),e in ii&&e!=="transform"&&(e=ii[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ci[e]&&e!=="transform"?(s=ma(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ro(xn(t,un))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ao[e]&&Ao[e](t,e,n)||xn(t,e)||O0(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ji(t,e,s,n)+n:s},wx=function(t,e,n,i){if(!n||n==="none"){var s=ws(e,t,1),a=s&&xn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=xn(t,"borderTopColor"))}var o=new hn(this._pt,t.style,e,0,1,hf),l=0,c=0,h,u,d,p,_,g,m,f,M,E,v,T;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=xn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=xn(t,e)||i,g?t.style[e]=g:Zi(t,e)),h=[n,i],nf(h),n=h[0],i=h[1],d=n.match(ts)||[],T=i.match(ts)||[],T.length){for(;u=ts.exec(i);)m=u[0],M=i.substring(l,u.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(p=parseFloat(g)||0,v=g.substr((p+"").length),m.charAt(1)==="="&&(m=cs(p,m)+v),f=parseFloat(m),E=m.substr((f+"").length),l=ts.lastIndex-E.length,E||(E=E||Sn.units[e]||v,l===i.length&&(i+=E,o.e+=E)),v!==E&&(p=Ji(t,e,g,E)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:p,c:f-p,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?pf:ff;return L0.test(i)&&(o.e=0),this._pt=o,o},_d={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ax=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=_d[n]||n,e[1]=_d[i]||i,e.join(" ")},Rx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ci[o]&&(l=1,o=o==="transformOrigin"?un:ve),Zi(n,o);l&&(Zi(n,ve),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ma(n,1),a.uncache=1,mf(i)))}},Ao={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new hn(t._pt,e,n,0,0,Rx);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},pa=[1,0,0,1,0,0],Sf={},yf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},vd=function(t){var e=xn(t,ve);return yf(e)?pa:e.substr(7).match(D0).map(ye)},Rh=function(t,e){var n=t._gsap||Sr(t),i=t.style,s=vd(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?pa:s):(s===pa&&!t.offsetParent&&t!==hs&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,hs.appendChild(t)),s=vd(t),l?i.display=l:Zi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):hs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zc=function(t,e,n,i,s,a){var o=t._gsap,l=s||Rh(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],f=l[4],M=l[5],E=e.split(" "),v=parseFloat(E[0])||0,T=parseFloat(E[1])||0,A,w,C,x;n?l!==pa&&(w=p*m-_*g)&&(C=v*(m/w)+T*(-g/w)+(g*M-m*f)/w,x=v*(-_/w)+T*(p/w)-(p*M-_*f)/w,v=C,T=x):(A=vf(t),v=A.x+(~E[0].indexOf("%")?v/100*A.width:v),T=A.y+(~(E[1]||E[0]).indexOf("%")?T/100*A.height:T)),i||i!==!1&&o.smooth?(f=v-c,M=T-h,o.xOffset=u+(f*p+M*g)-f,o.yOffset=d+(f*_+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=T,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[un]="0px 0px",a&&(Wi(a,o,"xOrigin",c,v),Wi(a,o,"yOrigin",h,T),Wi(a,o,"xOffset",u,o.xOffset),Wi(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+T)},ma=function(t,e){var n=t._gsap||new sf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=xn(t,un)||"0",h,u,d,p,_,g,m,f,M,E,v,T,A,w,C,x,S,P,O,U,W,k,z,X,V,it,J,ut,vt,Ft,$,et;return h=u=d=g=m=f=M=E=v=0,p=_=1,n.svg=!!(t.getCTM&&xf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ve]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ve]!=="none"?l[ve]:"")),i.scale=i.rotate=i.translate="none"),w=Rh(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),zc(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,w)),T=n.xOrigin||0,A=n.yOrigin||0,w!==pa&&(P=w[0],O=w[1],U=w[2],W=w[3],h=k=w[4],u=z=w[5],w.length===6?(p=Math.sqrt(P*P+O*O),_=Math.sqrt(W*W+U*U),g=P||O?jr(O,P)*fr:0,M=U||W?jr(U,W)*fr+g:0,M&&(_*=Math.abs(Math.cos(M*us))),n.svg&&(h-=T-(T*P+A*U),u-=A-(T*O+A*W))):(et=w[6],Ft=w[7],J=w[8],ut=w[9],vt=w[10],$=w[11],h=w[12],u=w[13],d=w[14],C=jr(et,vt),m=C*fr,C&&(x=Math.cos(-C),S=Math.sin(-C),X=k*x+J*S,V=z*x+ut*S,it=et*x+vt*S,J=k*-S+J*x,ut=z*-S+ut*x,vt=et*-S+vt*x,$=Ft*-S+$*x,k=X,z=V,et=it),C=jr(-U,vt),f=C*fr,C&&(x=Math.cos(-C),S=Math.sin(-C),X=P*x-J*S,V=O*x-ut*S,it=U*x-vt*S,$=W*S+$*x,P=X,O=V,U=it),C=jr(O,P),g=C*fr,C&&(x=Math.cos(C),S=Math.sin(C),X=P*x+O*S,V=k*x+z*S,O=O*x-P*S,z=z*x-k*S,P=X,k=V),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=ye(Math.sqrt(P*P+O*O+U*U)),_=ye(Math.sqrt(z*z+et*et)),C=jr(k,z),M=Math.abs(C)>2e-4?C*fr:0,v=$?1/($<0?-$:$):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!yf(xn(t,ve)),X&&t.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(p*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=ye(p),n.scaleY=ye(_),n.rotation=ye(g)+o,n.rotationX=ye(m)+o,n.rotationY=ye(f)+o,n.skewX=M+o,n.skewY=E+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[un]=Ro(c)),n.xOffset=n.yOffset=0,n.force3D=Sn.force3D,n.renderTransform=n.svg?Px:_f?Mf:Cx,n.uncache=0,n},Ro=function(t){return(t=t.split(" "))[0]+" "+t[1]},Pl=function(t,e,n){var i=Xe(e);return ye(parseFloat(e)+parseFloat(Ji(t,"x",n+"px",i)))+i},Cx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Mf(t,e)},hr="0deg",Hs="0px",ur=") ",Mf=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,f=n.force3D,M=n.target,E=n.zOrigin,v="",T=f==="auto"&&t&&t!==1||f===!0;if(E&&(u!==hr||h!==hr)){var A=parseFloat(h)*us,w=Math.sin(A),C=Math.cos(A),x;A=parseFloat(u)*us,x=Math.cos(A),a=Pl(M,a,w*x*-E),o=Pl(M,o,-Math.sin(A)*-E),l=Pl(M,l,C*x*-E+E)}m!==Hs&&(v+="perspective("+m+ur),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(T||a!==Hs||o!==Hs||l!==Hs)&&(v+=l!==Hs||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ur),c!==hr&&(v+="rotate("+c+ur),h!==hr&&(v+="rotateY("+h+ur),u!==hr&&(v+="rotateX("+u+ur),(d!==hr||p!==hr)&&(v+="skew("+d+", "+p+ur),(_!==1||g!==1)&&(v+="scale("+_+", "+g+ur),M.style[ve]=v||"translate(0, 0)"},Px=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,f=n.yOffset,M=n.forceCSS,E=parseFloat(a),v=parseFloat(o),T,A,w,C,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=us,c*=us,T=Math.cos(l)*u,A=Math.sin(l)*u,w=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=us,x=Math.tan(c-h),x=Math.sqrt(1+x*x),w*=x,C*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),T*=x,A*=x)),T=ye(T),A=ye(A),w=ye(w),C=ye(C)):(T=u,C=d,A=w=0),(E&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(E=Ji(p,"x",a,"px"),v=Ji(p,"y",o,"px")),(_||g||m||f)&&(E=ye(E+_-(_*T+g*w)+m),v=ye(v+g-(_*A+g*C)+f)),(i||s)&&(x=p.getBBox(),E=ye(E+i/100*x.width),v=ye(v+s/100*x.height)),x="matrix("+T+","+A+","+w+","+C+","+E+","+v+")",p.setAttribute("transform",x),M&&(p.style[ve]=x)},Dx=function(t,e,n,i,s){var a=360,o=Ie(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?fr:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*dd)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*dd)%a-~~(c/a)*a)),t._pt=d=new hn(t._pt,e,n,i,c,fx),d.e=h,d.u="deg",t._props.push(n),d},xd=function(t,e){for(var n in e)t[n]=e[n];return t},Lx=function(t,e,n){var i=xd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ve]=e,o=ma(n,1),Zi(n,ve),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ve],a[ve]=e,o=ma(n,1),a[ve]=c);for(l in Ci)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(p=Xe(c),_=Xe(h),u=p!==_?Ji(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new hn(t._pt,o,l,u,d-u,Fc),t._pt.u=_||0,t._props.push(l));xd(o,i)};cn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Ao[t>1?"border"+r:r]=function(o,l,c,h,u){var d,p;if(arguments.length<4)return d=a.map(function(_){return xi(o,_,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},a.forEach(function(_,g){return p[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,p,u)}});var Ef={name:"css",register:Bc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,p,_,g,m,f,M,E,v,T,A,w,C,x;Th||Bc(),this.styles=this.styles||gf(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(gn[g]&&af(g,e,n,i,t,s)))){if(p=typeof h,_=Ao[g],p==="function"&&(h=h.call(n,i,t,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=ha(h)),_)_(this,t,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",$i.lastIndex=0,$i.test(c)||(m=Xe(c),f=Xe(h),f?m!==f&&(c=Ji(t,g,c,f)+f):m&&(h+=m)),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),C.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Ie(c)&&~c.indexOf("random(")&&(c=ha(c)),Xe(c+"")||c==="auto"||(c+=Sn.units[g]||Xe(xi(t,g))||""),(c+"").charAt(1)==="="&&(c=xi(t,g))):c=xi(t,g),d=parseFloat(c),M=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),g in ii&&(g==="autoAlpha"&&(d===1&&xi(t,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,o.visibility),Wi(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=ii[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in Ci,E){if(this.styles.save(g),x=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=xn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=h,h=xn(t,"perspective"),S?t.style.perspective=S:Zi(t,"perspective")}u=parseFloat(h)}if(v||(T=t._gsap,T.renderTransform&&!e.parseTransform||ma(t,e.parseTransform),A=e.smoothOrigin!==!1&&T.smooth,v=this._pt=new hn(this._pt,o,ve,0,1,T.renderTransform,T,0,-1),v.dep=1),g==="scale")this._pt=new hn(this._pt,T,"scaleY",T.scaleY,(M?cs(T.scaleY,M+u):u)-T.scaleY||0,Fc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(un,0,o[un]),h=Ax(h),T.svg?zc(t,h,0,A,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==T.zOrigin&&Wi(this,T,"zOrigin",T.zOrigin,f),Wi(this,o,g,Ro(c),Ro(h)));continue}else if(g==="svgOrigin"){zc(t,h,1,A,0,this);continue}else if(g in Sf){Dx(this,T,g,d,M?cs(d,M+h):h);continue}else if(g==="smoothOrigin"){Wi(this,T,"smooth",T.smooth,h);continue}else if(g==="force3D"){T[g]=h;continue}else if(g==="transform"){Lx(this,h,t);continue}}else g in o||(g=ws(g)||g);if(E||(u||u===0)&&(d||d===0)&&!dx.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),f=Xe(h)||(g in Sn.units?Sn.units[g]:m),m!==f&&(d=Ji(t,g,c,f)),this._pt=new hn(this._pt,E?T:o,g,d,(M?cs(d,M+u):u)-d,!E&&(f==="px"||g==="zIndex")&&e.autoRound!==!1?gx:Fc),this._pt.u=f||0,E&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=mx):m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=px);else if(g in o)wx.call(this,t,g,c,M?M+h:h);else if(g in t)this.add(t,g,c||t[g],M?M+h:h,i,s);else if(g!=="parseTransform"){mh(g,h);continue}E||(g in o?C.push(g,0,o[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),a.push(g)}}w&&uf(this)},render:function(t,e){if(e.tween._time||!wh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:xi,aliases:ii,getSetter:function(t,e,n){var i=ii[e];return i&&i.indexOf(",")<0&&(e=i),e in Ci&&e!==un&&(t._gsap.x||xi(t,"x"))?n&&ud===n?e==="scale"?Sx:xx:(ud=n||{})&&(e==="scale"?yx:Mx):t.style&&!dh(t.style[e])?_x:~e.indexOf("-")?vx:Eh(t,e)},core:{_removeProperty:Zi,_getMatrix:Rh}};dn.utils.checkPrefix=ws;dn.core.getStyleSaver=gf;(function(r,t,e,n){var i=cn(r+","+t+","+e,function(s){Ci[s]=1});cn(t,function(s){Sn.units[s]="deg",Sf[s]=1}),ii[i[13]]=r+","+t,cn(n,function(s){var a=s.split(":");ii[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Sn.units[r]="px"});dn.registerPlugin(Ef);var bf=dn.registerPlugin(Ef)||dn;bf.core.Tween;const Sd={type:"change"},Ch={type:"start"},Tf={type:"end"},Za=new Fo,yd=new Vn,Ix=Math.cos(70*Je.DEG2RAD),Te=new D,nn=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dl=1e-6;class Ux extends cv{constructor(t,e=null){super(t,e),this.state=re.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rs.ROTATE,MIDDLE:rs.DOLLY,RIGHT:rs.PAN},this.touches={ONE:Jr.ROTATE,TWO:Jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new si,this._lastTargetPosition=new D,this._quat=new si().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ju,this._sphericalDelta=new Ju,this._scale=1,this._panOffset=new D,this._rotateStart=new St,this._rotateEnd=new St,this._rotateDelta=new St,this._panStart=new St,this._panEnd=new St,this._panDelta=new St,this._dollyStart=new St,this._dollyEnd=new St,this._dollyDelta=new St,this._dollyDirection=new D,this._mouse=new St,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fx.bind(this),this._onPointerDown=Nx.bind(this),this._onPointerUp=Ox.bind(this),this._onContextMenu=Wx.bind(this),this._onMouseWheel=kx.bind(this),this._onKeyDown=Vx.bind(this),this._onTouchStart=Hx.bind(this),this._onTouchMove=Gx.bind(this),this._onMouseDown=Bx.bind(this),this._onMouseMove=zx.bind(this),this._interceptControlDown=Xx.bind(this),this._interceptControlUp=qx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sd),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Te.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Za.origin.copy(this.object.position),Za.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Za.direction))<Ix?this.object.lookAt(this.target):(yd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Za.intersectPlane(yd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Dl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dl||this._lastTargetPosition.distanceToSquared(this.target)>Dl?(this.dispatchEvent(Sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Te.copy(i).sub(this.target);let s=Te.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new St,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Nx(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Fx(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Ox(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tf),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Bx(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=re.DOLLY;break;case rs.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=re.ROTATE}break;case rs.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Ch)}function zx(r){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function kx(r){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(r.preventDefault(),this.dispatchEvent(Ch),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Tf))}function Vx(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function Hx(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Jr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=re.TOUCH_ROTATE;break;case Jr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Jr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=re.TOUCH_DOLLY_PAN;break;case Jr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Ch)}function Gx(r){switch(this._trackPointer(r),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=re.NONE}}function Wx(r){this.enabled!==!1&&r.preventDefault()}function Xx(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qx(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Md=new tr,Ja=new D;class wf extends av{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Me(t,3)),this.setAttribute("uv",new Me(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Ec(e,6,1);return this.setAttribute("instanceStart",new ni(n,3,0)),this.setAttribute("instanceEnd",new ni(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Ec(e,6,1);return this.setAttribute("instanceColorStart",new ni(n,3,0)),this.setAttribute("instanceColorEnd",new ni(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ev(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Md.setFromBufferAttribute(e),this.boundingBox.union(Md))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ja.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ja)),Ja.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ja));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}lt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new St(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};sn.line={uniforms:wr.merge([lt.common,lt.fog,lt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Ph extends ce{static get type(){return"LineMaterial"}constructor(t){super({uniforms:wr.clone(sn.line.uniforms),vertexShader:sn.line.vertexShader,fragmentShader:sn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Ll=new he,Ed=new D,bd=new D,Ue=new he,Ne=new he,Yn=new he,Il=new D,Ul=new me,Fe=new lv,Td=new D,Qa=new tr,to=new Cs,$n=new he;let Qn,br;function wd(r,t,e){return $n.set(0,0,-t,1).applyMatrix4(r.projectionMatrix),$n.multiplyScalar(1/$n.w),$n.x=br/e.width,$n.y=br/e.height,$n.applyMatrix4(r.projectionMatrixInverse),$n.multiplyScalar(1/$n.w),Math.abs(Math.max($n.x,$n.y))}function Yx(r,t){const e=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,i.count);for(let o=0,l=a;o<l;o++){Fe.start.fromBufferAttribute(i,o),Fe.end.fromBufferAttribute(s,o),Fe.applyMatrix4(e);const c=new D,h=new D;Qn.distanceSqToSegment(Fe.start,Fe.end,h,c),h.distanceTo(c)<br*.5&&t.push({point:h,pointOnLine:c,distance:Qn.origin.distanceTo(h),object:r,face:null,faceIndex:o,uv:null,uv1:null})}}function $x(r,t,e){const n=t.projectionMatrix,s=r.material.resolution,a=r.matrixWorld,o=r.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-t.near;Qn.at(1,Yn),Yn.w=1,Yn.applyMatrix4(t.matrixWorldInverse),Yn.applyMatrix4(n),Yn.multiplyScalar(1/Yn.w),Yn.x*=s.x/2,Yn.y*=s.y/2,Yn.z=0,Il.copy(Yn),Ul.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,p=h;d<p;d++){if(Ue.fromBufferAttribute(l,d),Ne.fromBufferAttribute(c,d),Ue.w=1,Ne.w=1,Ue.applyMatrix4(Ul),Ne.applyMatrix4(Ul),Ue.z>u&&Ne.z>u)continue;if(Ue.z>u){const E=Ue.z-Ne.z,v=(Ue.z-u)/E;Ue.lerp(Ne,v)}else if(Ne.z>u){const E=Ne.z-Ue.z,v=(Ne.z-u)/E;Ne.lerp(Ue,v)}Ue.applyMatrix4(n),Ne.applyMatrix4(n),Ue.multiplyScalar(1/Ue.w),Ne.multiplyScalar(1/Ne.w),Ue.x*=s.x/2,Ue.y*=s.y/2,Ne.x*=s.x/2,Ne.y*=s.y/2,Fe.start.copy(Ue),Fe.start.z=0,Fe.end.copy(Ne),Fe.end.z=0;const g=Fe.closestPointToPointParameter(Il,!0);Fe.at(g,Td);const m=Je.lerp(Ue.z,Ne.z,g),f=m>=-1&&m<=1,M=Il.distanceTo(Td)<br*.5;if(f&&M){Fe.start.fromBufferAttribute(l,d),Fe.end.fromBufferAttribute(c,d),Fe.start.applyMatrix4(a),Fe.end.applyMatrix4(a);const E=new D,v=new D;Qn.distanceSqToSegment(Fe.start,Fe.end,v,E),e.push({point:v,pointOnLine:E,distance:Qn.origin.distanceTo(v),object:r,face:null,faceIndex:d,uv:null,uv1:null})}}}class jx extends ee{constructor(t=new wf,e=new Ph({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,i=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Ed.fromBufferAttribute(e,a),bd.fromBufferAttribute(n,a),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Ed.distanceTo(bd);const s=new Ec(i,2,1);return t.setAttribute("instanceDistanceStart",new ni(s,1,0)),t.setAttribute("instanceDistanceEnd",new ni(s,1,1)),this}raycast(t,e){const n=this.material.worldUnits,i=t.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Qn=t.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;br=l.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),to.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=br*.5;else{const u=Math.max(i.near,to.distanceToPoint(Qn.origin));c=wd(i,u,l.resolution)}if(to.radius+=c,Qn.intersectsSphere(to)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Qa.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=br*.5;else{const u=Math.max(i.near,Qa.distanceToPoint(Qn.origin));h=wd(i,u,l.resolution)}Qa.expandByScalar(h),Qn.intersectsBox(Qa)!==!1&&(n?Yx(this,e):$x(this,i,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Ll),this.material.uniforms.resolution.value.set(Ll.z,Ll.w))}}class Tn extends wf{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setColors(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class zn extends jx{constructor(t=new Tn,e=new Ph({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const Af={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ls{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Kx=new lh(-1,1,1,-1,0,1);class Zx extends je{constructor(){super(),this.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Me([0,2,0,0,2,0],2))}}const Jx=new Zx;class Dh{constructor(t){this._mesh=new ee(Jx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Kx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Qx extends Ls{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=wr.clone(t.uniforms),this.material=new ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Dh(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ad extends Ls{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class t3 extends Ls{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class e3{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new St);this._width=n.width,this._height=n.height,e=new In(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qx(Af),this.copyPass.material.blending=Ei,this.clock=new ov}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ad!==void 0&&(a instanceof Ad?n=!0:a instanceof t3&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new St);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const n3={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class i3 extends Ls{constructor(){super();const t=n3;this.uniforms=wr.clone(t.uniforms),this.material=new nv({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Dh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===te&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Io?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class r3 extends Ls{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Wt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const s3={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Wt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class As extends Ls{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new St(t.x,t.y):new St(256,256),this.clearColor=new Wt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new In(s,a,{type:ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new In(s,a,{type:ri});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new In(s,a,{type:ri});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}const o=s3;this.highPassUniforms=wr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ce({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new St(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Af;this.copyUniforms=wr.clone(h.uniforms),this.blendMaterial=new ce({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ki,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Wt,this.oldClearAlpha=1,this.basic=new jn,this.fsQuad=new Dh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new St(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=As.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=As.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new St(.5,.5)},direction:{value:new St(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}As.BlurDirectionX=new St(1,0);As.BlurDirectionY=new St(0,1);const Rd=[[[[36.902,25.383],[36.875,25.383],[36.805,25.451],[36.764,25.501],[36.722,25.534],[36.53,25.602],[36.504,25.645],[36.534,25.689],[36.554,25.645],[36.589,25.62],[36.748,25.559],[36.924,25.426],[36.955,25.415],[36.902,25.383]]],[[[41.988,16.716],[42.065,16.71],[42.033,16.742],[42.026,16.758],[42.06,16.804],[42.17,16.709],[42.167,16.596],[42.158,16.571],[42.128,16.595],[42.108,16.618],[42.102,16.644],[42.072,16.671],[41.964,16.653],[41.897,16.684],[41.802,16.779],[41.776,16.847],[41.816,16.86],[41.858,16.893],[41.885,16.947],[41.86,17.003],[41.917,16.994],[41.948,16.936],[41.954,16.806],[41.962,16.779],[41.947,16.749],[41.988,16.716]]],[[[51.978,18.996],[51.743,18.965],[51.515,18.934],[51.258,18.899],[50.95,18.858],[50.708,18.825],[50.355,18.778],[50.039,18.735],[49.742,18.695],[49.445,18.655],[49.192,18.621],[49.042,18.582],[48.865,18.495],[48.593,18.362],[48.316,18.227],[48.172,18.157],[48.022,17.977],[47.946,17.886],[47.808,17.721],[47.704,17.597],[47.58,17.448],[47.525,17.316],[47.442,17.112],[47.37,17.06],[47.251,16.994],[47.144,16.947],[46.976,16.953],[46.88,17.079],[46.779,17.212],[46.728,17.266],[46.682,17.269],[46.513,17.252],[46.31,17.231],[46.071,17.253],[45.794,17.278],[45.535,17.302],[45.407,17.32],[45.237,17.406],[45.193,17.423],[45.148,17.427],[44.946,17.43],[44.747,17.432],[44.546,17.404],[44.355,17.414],[44.156,17.399],[44.086,17.366],[44.008,17.367],[43.96,17.338],[43.917,17.325],[43.866,17.35],[43.804,17.344],[43.713,17.366],[43.653,17.422],[43.597,17.471],[43.539,17.499],[43.474,17.516],[43.418,17.516],[43.346,17.486],[43.302,17.457],[43.191,17.359],[43.186,17.325],[43.237,17.266],[43.221,17.239],[43.156,17.205],[43.136,17.113],[43.126,17.062],[43.117,16.942],[43.146,16.847],[43.184,16.812],[43.186,16.771],[43.165,16.689],[43.105,16.664],[43.061,16.587],[43.034,16.55],[42.986,16.509],[42.799,16.372],[42.79,16.452],[42.731,16.57],[42.726,16.653],[42.699,16.737],[42.647,16.801],[42.553,16.868],[42.544,16.96],[42.475,17.05],[42.383,17.122],[42.332,17.257],[42.294,17.435],[42.052,17.669],[41.75,17.886],[41.658,18.008],[41.508,18.256],[41.432,18.452],[41.229,18.678],[41.221,18.765],[41.191,18.871],[41.144,18.989],[41.116,19.082],[40.913,19.49],[40.848,19.555],[40.792,19.646],[40.777,19.717],[40.759,19.755],[40.616,19.822],[40.482,19.993],[40.081,20.266],[39.884,20.293],[39.728,20.39],[39.614,20.518],[39.491,20.737],[39.276,20.974],[39.094,21.31],[39.151,21.433],[39.147,21.519],[39.091,21.664],[39.03,21.776],[38.988,21.882],[39.021,22.033],[39.034,22.203],[39.07,22.294],[39.096,22.393],[39.062,22.592],[39.001,22.699],[39.007,22.77],[38.939,22.805],[38.883,22.882],[38.941,22.882],[38.836,22.989],[38.797,23.049],[38.757,23.194],[38.706,23.306],[38.542,23.558],[38.464,23.712],[38.289,23.911],[38.099,24.058],[37.978,24.125],[37.92,24.185],[37.821,24.188],[37.713,24.274],[37.638,24.278],[37.543,24.292],[37.431,24.459],[37.338,24.616],[37.181,24.82],[37.22,24.873],[37.266,24.96],[37.243,25.073],[37.218,25.151],[37.149,25.291],[36.921,25.641],[36.86,25.692],[36.763,25.751],[36.703,25.903],[36.675,26.039],[36.519,26.105],[36.25,26.595],[36.094,26.766],[36.032,26.881],[35.852,27.07],[35.763,27.259],[35.581,27.432],[35.424,27.734],[35.18,28.035],[35.078,28.087],[34.828,28.109],[34.722,28.131],[34.625,28.065],[34.616,28.148],[34.683,28.264],[34.78,28.507],[34.799,28.721],[34.951,29.354],[35.164,29.321],[35.339,29.294],[35.595,29.255],[35.86,29.214],[36.015,29.19],[36.068,29.201],[36.283,29.355],[36.476,29.495],[36.592,29.666],[36.704,29.832],[36.755,29.866],[36.927,29.897],[37.199,29.946],[37.469,29.995],[37.491,30.012],[37.554,30.145],[37.634,30.313],[37.65,30.331],[37.67,30.348],[37.863,30.443],[37.98,30.5],[37.813,30.669],[37.655,30.829],[37.479,31.008],[37.329,31.147],[37.105,31.355],[36.959,31.492],[37.216,31.556],[37.493,31.626],[37.774,31.696],[38.111,31.781],[38.375,31.847],[38.77,31.946],[38.962,31.995],[38.997,32.007],[39.145,32.125],[39.369,32.092],[39.704,32.043],[40.028,31.995],[40.369,31.939],[40.479,31.893],[40.808,31.725],[41.022,31.616],[41.272,31.489],[41.585,31.33],[41.8,31.22],[42.074,31.08],[42.289,30.92],[42.56,30.718],[42.858,30.495],[43.103,30.322],[43.441,30.084],[43.774,29.849],[44.1,29.619],[44.361,29.435],[44.691,29.202],[44.717,29.194],[45.05,29.167],[45.499,29.132],[45.95,29.096],[46.356,29.064],[46.531,29.096],[46.725,29.075],[46.982,29.046],[47.139,29.026],[47.433,28.99],[47.521,28.838],[47.553,28.732],[47.583,28.628],[47.671,28.533],[47.872,28.535],[48.05,28.538],[48.269,28.541],[48.442,28.543],[48.499,28.449],[48.523,28.355],[48.626,28.133],[48.774,27.959],[48.809,27.896],[48.833,27.801],[48.807,27.765],[48.797,27.724],[48.906,27.629],[49.087,27.549],[49.158,27.528],[49.237,27.493],[49.175,27.438],[49.282,27.31],[49.405,27.181],[49.538,27.152],[49.717,26.956],[49.986,26.829],[50.15,26.663],[50.135,26.66],[50.087,26.676],[50.026,26.699],[50.008,26.679],[50.011,26.609],[50.027,26.527],[50.111,26.456],[50.185,26.405],[50.214,26.308],[50.155,26.101],[50.135,26.101],[50.096,26.119],[50.054,26.123],[50.032,26.111],[50.081,25.961],[50.13,25.847],[50.19,25.756],[50.239,25.623],[50.281,25.566],[50.455,25.425],[50.508,25.307],[50.558,25.087],[50.667,24.964],[50.726,24.869],[50.804,24.789],[50.856,24.68],[50.928,24.595],[50.966,24.574],[51.023,24.565],[51.093,24.565],[51.178,24.587],[51.268,24.607],[51.338,24.564],[51.411,24.571],[51.418,24.531],[51.37,24.477],[51.31,24.34],[51.395,24.319],[51.477,24.308],[51.535,24.286],[51.568,24.286],[51.568,24.258],[51.572,24.128],[51.593,24.079],[51.629,24.035],[51.684,23.97],[51.739,23.904],[51.794,23.838],[51.849,23.773],[51.904,23.708],[51.959,23.642],[52.014,23.576],[52.069,23.511],[52.125,23.445],[52.179,23.38],[52.235,23.314],[52.29,23.249],[52.345,23.183],[52.4,23.118],[52.455,23.052],[52.51,22.987],[52.555,22.933],[52.639,22.923],[52.666,22.919],[52.742,22.91],[52.859,22.896],[53.012,22.877],[53.192,22.855],[53.394,22.83],[53.61,22.804],[53.832,22.777],[54.055,22.75],[54.27,22.723],[54.472,22.699],[54.652,22.677],[54.805,22.658],[54.922,22.644],[54.998,22.634],[55.025,22.631],[55.104,22.621],[55.119,22.624],[55.186,22.704],[55.259,22.591],[55.32,22.497],[55.404,22.368],[55.493,22.231],[55.578,22.1],[55.641,22.002],[55.607,21.9],[55.571,21.79],[55.534,21.679],[55.498,21.568],[55.461,21.458],[55.424,21.347],[55.388,21.236],[55.351,21.126],[55.314,21.015],[55.278,20.904],[55.241,20.793],[55.205,20.683],[55.168,20.572],[55.131,20.461],[55.095,20.351],[55.058,20.24],[55.021,20.129],[54.977,19.996],[54.871,19.96],[54.699,19.903],[54.527,19.846],[54.355,19.788],[54.183,19.731],[54.011,19.674],[53.839,19.617],[53.667,19.559],[53.495,19.502],[53.323,19.444],[53.151,19.387],[52.979,19.33],[52.807,19.272],[52.635,19.215],[52.463,19.158],[52.291,19.1],[52.119,19.043],[51.978,18.996]]],[[[36.596,25.713],[36.586,25.699],[36.544,25.734],[36.546,25.812],[36.583,25.856],[36.58,25.795],[36.596,25.735],[36.596,25.713]]]];class a3{constructor(t){B(this,"renderer");B(this,"scene",new y0);B(this,"camera");B(this,"controls");B(this,"container");B(this,"composer");B(this,"bloomPass");B(this,"lineMaterials",[]);B(this,"sunMesh");B(this,"sunUniforms");B(this,"helioOrbitLine");B(this,"seasonMarkersGroup",new rn);B(this,"earthAnchor",new rn);B(this,"earthTiltGroup",new rn);B(this,"earthSpinGroup",new rn);B(this,"earthMesh");B(this,"earthCloudsMesh");B(this,"earthAtmosMesh");B(this,"earthUniforms");B(this,"cloudUniforms");B(this,"atmosUniforms");B(this,"axisRodGroup",new rn);B(this,"tropicCancerRing");B(this,"cityAnchors",[]);B(this,"solarRayGroup",new rn);B(this,"dawnTerminatorGroup",new rn);B(this,"saudiSunSweepArc");B(this,"tidalGroup",new rn);B(this,"tidalShell");B(this,"tidalUniforms");B(this,"moonOrbitLine");B(this,"moonOrbitPosBuf",new Float32Array(387));B(this,"moonMesh");B(this,"moonGrabSphere");B(this,"moonUniforms");B(this,"moonShadowGroup",new rn);B(this,"moonUmbraCone");B(this,"moonPenumbraCone");B(this,"moonTangentLines");B(this,"earthShadowGroup",new rn);B(this,"tidalLockLine");B(this,"tidalLockCone");B(this,"grabHaloMesh");B(this,"hoveredDragMode","none");B(this,"currentPreset","earth-close");B(this,"prevEarthPos",new D);B(this,"hasPrevEarth",!1);B(this,"camOffsetLive",new D(0,4.2,9.5));B(this,"activeCamTween",null);this.container=t;const e=t.clientWidth||window.innerWidth,n=t.clientHeight||window.innerHeight,i=Math.min(window.devicePixelRatio||1,2);this.renderer=new S0({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(i),this.renderer.setSize(e,n),this.renderer.toneMapping=Io,this.renderer.toneMappingExposure=1.06,this.renderer.outputColorSpace=Re,t.appendChild(this.renderer.domElement),this.scene.background=new Wt(66312),this.camera=new Rn(42,e/n,.2,650),this.controls=new Ux(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.055,this.controls.minDistance=5.85,this.controls.maxDistance=98;const s=new In(Math.max(1,Math.floor(e*i)),Math.max(1,Math.floor(n*i)),{samples:4,type:ri});this.composer=new e3(this.renderer,s),this.composer.setPixelRatio(i),this.composer.setSize(e,n),this.composer.addPass(new r3(this.scene,this.camera)),this.bloomPass=new As(new St(e*i,n*i),.26,.52,.88),this.composer.addPass(this.bloomPass),this.composer.addPass(new i3);const a=Math.min(16,this.renderer.capabilities.getMaxAnisotropy()||8);this.buildDeepSkyMilkyWayAndStars(a),this.buildSunAndHelioOrbit(e,n),this.buildEarthSystem(a,e,n),this.buildMoonAndVolumetricShadows(a,e,n),this.grabHaloMesh=new ee(new xo(.96,1.03,64),new jn({color:16638023,transparent:!0,opacity:0,side:Cn,blending:ki,depthWrite:!1})),this.grabHaloMesh.renderOrder=6,this.grabHaloMesh.visible=!1,this.scene.add(this.grabHaloMesh),window.addEventListener("resize",()=>this.resize())}createFatLineMaterial(t,e,n,i,s,a=!1){const o=new Ph({color:t,linewidth:e,transparent:!0,opacity:n,dashed:a,dashScale:2.2,dashSize:.55,gapSize:.35,depthWrite:!1,resolution:new St(i,s)});return this.lineMaterials.push(o),o}createCoronaTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createRadialGradient(256,256,18,256,256,250);n.addColorStop(0,"rgba(255, 252, 240, 0.95)"),n.addColorStop(.16,"rgba(255, 210, 135, 0.52)"),n.addColorStop(.42,"rgba(245, 130, 45, 0.16)"),n.addColorStop(.75,"rgba(180, 70, 20, 0.04)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,512,512);const i=new Xu(t);return i.colorSpace=Re,i}buildDeepSkyMilkyWayAndStars(t){const e=new fo().load("./textures/stars-milkyway-8k.jpg");e.anisotropy=t,e.colorSpace=Re;const n=new ce({uniforms:{uSky:{value:e}},side:qe,depthWrite:!1,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uSky;
        varying vec2 vUv;
        void main() {
          vec3 c = texture2D(uSky, vUv).rgb;
          // Subtle deep-space contrast curve so stars stay pinpoint against obsidian space
          c = pow(c, vec3(1.32)) * 0.62;
          gl_FragColor = vec4(c, 1.0);
        }
      `}),i=new ee(new wn(320,64,48),n);i.rotation.x=Je.degToRad(60.2),i.rotation.z=Je.degToRad(24),this.scene.add(i);const s=2600,a=new Float32Array(s*3),o=new Float32Array(s*3),l=new Float32Array(s);for(let u=0;u<s;u++){const d=210+Math.random()*85,p=Math.acos(2*Math.random()-1),_=Math.random()*Math.PI*2;a[u*3]=d*Math.sin(p)*Math.cos(_),a[u*3+1]=d*Math.cos(p),a[u*3+2]=d*Math.sin(p)*Math.sin(_);const g=Math.random(),m=g<.18?new Wt(13293823):g<.62?new Wt(16316927):g<.88?new Wt(16773590):new Wt(16765601);o[u*3]=m.r,o[u*3+1]=m.g,o[u*3+2]=m.b,l[u]=Math.pow(Math.random(),2.8)*3.2+.85}const c=new je;c.setAttribute("position",new on(a,3)),c.setAttribute("color",new on(o,3)),c.setAttribute("aSize",new on(l,1));const h=new ce({transparent:!0,depthWrite:!1,blending:ki,vertexColors:!0,vertexShader:`
        attribute float aSize;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (260.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5)) * 2.0;
          if (d > 1.0) discard;
          float core = exp(-d * d * 5.5);
          gl_FragColor = vec4(vColor * core, core * 0.88);
        }
      `});this.scene.add(new tv(c,h))}buildSunAndHelioOrbit(t,e){this.sunUniforms={uTime:{value:0}};const n=new ce({uniforms:this.sunUniforms,vertexShader:`
        varying vec3 vPos;
        varying vec3 vNormalView;
        void main() {
          vPos = normalize(position);
          vNormalView = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec3 vPos;
        varying vec3 vNormalView;

        float hash(vec3 p) {
          p = fract(p * 0.3183099 + 0.1);
          p *= 17.0;
          return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
        }

        float noise(vec3 x) {
          vec3 i = floor(x);
          vec3 f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
                mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
            mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
            f.z
          );
        }

        float fbm(vec3 p) {
          float v = 0.0;
          float a = 0.5;
          for (int i = 0; i < 5; i++) {
            v += a * noise(p);
            p = p * 2.08 + vec3(0.13, -0.17, 0.11);
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec3 q = vPos * 6.5 + vec3(uTime * 0.045, -uTime * 0.032, uTime * 0.028);
          float gran = fbm(q) * 0.65 + fbm(q * 3.1) * 0.35;
          float mu = clamp(dot(normalize(vNormalView), vec3(0.0, 0.0, 1.0)), 0.0, 1.0);
          // Physical solar limb darkening: I(mu) = 1 - u*(1 - mu^0.55)
          float limb = 0.32 + 0.68 * pow(max(mu, 1e-5), 0.52);

          vec3 umbraTint = vec3(1.15, 0.36, 0.05);
          vec3 photosphere = vec3(2.15, 1.62, 0.92);
          vec3 col = mix(umbraTint, photosphere, smoothstep(0.28, 0.76, gran)) * limb;
          gl_FragColor = vec4(col, 1.0);
        }
      `});this.sunMesh=new ee(new wn(yl,96,96),n),this.scene.add(this.sunMesh);const i=new J2(new E0({map:this.createCoronaTexture(),blending:ki,transparent:!0,opacity:.78,depthWrite:!1}));i.scale.setScalar(yl*5.6),this.sunMesh.add(i);const s=240,a=[];for(let c=0;c<=s;c++){const h=c/s*Math.PI*2,u=zi(h);a.push(u.x,u.y,u.z)}const o=new Tn;o.setPositions(a),this.helioOrbitLine=new zn(o,this.createFatLineMaterial(3718648,1.35,.28,t,e)),this.scene.add(this.helioOrbitLine),[0,Math.PI/2,Math.PI,Math.PI*3/2].forEach((c,h)=>{const u=new ee(new wn(.18,16,16),new jn({color:h===0?16436245:h===2?3718648:9741240}));u.position.copy(zi(c)),this.seasonMarkersGroup.add(u)}),this.scene.add(this.seasonMarkersGroup)}buildSaudiMaskTexture(){const n=document.createElement("canvas");n.width=2048,n.height=1024;const i=n.getContext("2d");i.fillStyle="#000",i.fillRect(0,0,2048,1024),i.fillStyle="#fff";for(const s of Rd)for(const a of s)i.beginPath(),a.forEach(([o,l],c)=>{const h=(o+180)/360*2048,u=(90-l)/180*1024;c===0?i.moveTo(h,u):i.lineTo(h,u)}),i.closePath(),i.fill();return new Xu(n)}buildEarthSystem(t,e,n){this.scene.add(this.earthAnchor),this.earthAnchor.add(this.earthTiltGroup),this.earthTiltGroup.add(this.earthSpinGroup);const i=new fo,s=(k,z)=>{const X=i.load(k);return X.anisotropy=t,X.wrapS=vs,X.wrapT=ti,z&&(X.colorSpace=Re),X},a=s("./textures/earth-day-8k.jpg",!0),o=s("./textures/earth-night-8k.jpg",!0),l=s("./textures/earth-clouds-8k.jpg",!1),c=s("./textures/earth-normal-4k.jpg",!1),h=s("./textures/earth-water.png",!1),u=this.buildSaudiMaskTexture();this.earthUniforms={uDay:{value:a},uNight:{value:o},uClouds:{value:l},uNormalMap:{value:c},uWater:{value:h},uSaudiMask:{value:u},uSunDir:{value:new D(1,0,0)},uMoonWorldPos:{value:new D(10,0,0)},uMoonRadius:{value:en},uIsPerigee:{value:1},uEclipseEnabled:{value:0},uCloudOffset:{value:0},uTime:{value:0}};const d=new ce({uniforms:this.earthUniforms,vertexShader:`
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec3 vNormalWorld;
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
        uniform sampler2D uClouds;
        uniform sampler2D uNormalMap;
        uniform sampler2D uWater;
        uniform sampler2D uSaudiMask;
        uniform vec3 uSunDir;
        uniform vec3 uMoonWorldPos;
        uniform float uMoonRadius;
        uniform float uIsPerigee;
        uniform float uEclipseEnabled;
        uniform float uCloudOffset;
        uniform float uTime;

        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec3 vNormalWorld;

        // Screen-space cotangent frame for crisp 4K topographic mountain relief
        mat3 cotangentFrame(vec3 N, vec3 p, vec2 uv) {
          vec3 dp1 = dFdx(p);
          vec3 dp2 = dFdy(p);
          vec2 duv1 = dFdx(uv);
          vec2 duv2 = dFdy(uv);
          vec3 dp2perp = cross(dp2, N);
          vec3 dp1perp = cross(N, dp1);
          vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;
          vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;
          float invmax = inversesqrt(max(dot(T, T), dot(B, B)) + 1e-8);
          return mat3(T * invmax, B * invmax, N);
        }

        void main() {
          vec3 Ngeom = normalize(vNormalWorld);
          vec3 L = normalize(uSunDir);
          vec3 V = normalize(cameraPosition - vWorldPos);

          float water = texture2D(uWater, vUv).r;
          vec3 mapN = texture2D(uNormalMap, vUv).xyz * 2.0 - 1.0;
          mapN.xy *= (1.0 - water * 0.92) * 1.15;
          mat3 TBN = cotangentFrame(Ngeom, vWorldPos, vUv);
          vec3 N = normalize(TBN * mapN);

          float ndotlGeom = dot(Ngeom, L);
          float ndotl = max(dot(N, L), 0.0);

          // Razor-sharp physical Day/Night solar terminator & golden-amber sunrise band!
          float dayMix = smoothstep(-0.055, 0.065, ndotlGeom);
          float sunsetBand = exp(-pow((ndotlGeom + 0.005) * 14.5, 2.0));

          vec3 dayCol = texture2D(uDay, vUv).rgb;
          vec3 nightCol = texture2D(uNight, vUv).rgb;
          float saudi = texture2D(uSaudiMask, vUv).r;

          // Cast real soft cloud shadows onto Earth's land & oceans!
          vec2 shadowUv = vec2(vUv.x - uCloudOffset + 0.0022, vUv.y - 0.0014);
          float cloudShadow = 1.0 - texture2D(uClouds, shadowUv).r * 0.42 * dayMix;

          // Deepen bathymetric ocean tones + physical GGX-like sun-glint reflection
          dayCol = mix(dayCol, dayCol * vec3(0.76, 0.90, 1.06), water * 0.35);
          vec3 halfSum = L + V;
          vec3 H = length(halfSum) > 1e-5 ? normalize(halfSum) : Ngeom;
          float ndoth = clamp(dot(Ngeom, H), 0.0, 1.0);
          float sunGlint = (pow(max(ndoth, 1e-5), 140.0) * 0.85 + pow(max(ndoth, 1e-5), 28.0) * 0.16) * water * smoothstep(0.0, 0.25, ndotlGeom);

          // Real-Time 3D Lunar Eclipse Umbra + Penumbra projected onto Earth (only during Eclipse Act IV)
          float eclipseFactor = 1.0;
          vec3 toMoon = uMoonWorldPos - vWorldPos;
          float projAlongSun = dot(toMoon, L);
          if (uEclipseEnabled > 0.5 && projAlongSun > 0.0 && ndotlGeom > -0.08) {
            float perpDist = length(toMoon - L * projAlongSun);
            float umbraR = uIsPerigee > 0.5 ? uMoonRadius * 0.40 : 0.03;
            float penumbraR = uMoonRadius * 1.42;
            if (perpDist < penumbraR) {
              float shadowT = 1.0 - smoothstep(umbraR, penumbraR, perpDist);
              float maxDark = uIsPerigee > 0.5 ? 0.965 : 0.82;
              eclipseFactor = 1.0 - shadowT * maxDark;
            }
          }

          float diffuse = (mix(ndotl, max(ndotlGeom, 0.0), water * 0.7) * 1.18 + 0.05) * dayMix;
          vec3 sunlit = (dayCol * diffuse * cloudShadow + vec3(1.0, 0.94, 0.84) * sunGlint) * eclipseFactor;
          sunlit += mix(dayCol, vec3(1.0, 0.65, 0.25), 0.55) * vec3(1.45, 0.55, 0.14) * sunsetBand * 0.82 * eclipseFactor;

          // Warm VIIRS city lights emerging crisply across deep night side & totality umbra
          vec3 cityGlow = pow(nightCol, vec3(1.18)) * vec3(1.55, 1.24, 0.84) * 1.85;
          float nightWeight = smoothstep(0.05, -0.08, ndotlGeom);
          float totalityCityBoost = smoothstep(0.35, 0.06, eclipseFactor) * dayMix * 0.85;
          vec3 col = sunlit + cityGlow * max(nightWeight, totalityCityBoost) + dayCol * 0.004 * nightWeight;

          // Subtle champagne-gold tint gently identifying the Kingdom of Saudi Arabia
          col += vec3(0.95, 0.78, 0.32) * saudi * (0.045 + 0.035 * dayMix);

          // Shimmering Geomagnetic Polar Auroras (Aurora Borealis & Australis) on Earth's Night Oval!
          float latAbs = abs(vUv.y - 0.5) * 2.0; // 0 = equator, 1 = poles
          float auroraOval = exp(-pow((latAbs - 0.74) / 0.065, 2.0));
          if (auroraOval > 0.01 && nightWeight > 0.05) {
            float lonAng = vUv.x * 6.2831853;
            float curtainA = 0.5 + 0.5 * sin(lonAng * 9.0 + uTime * 1.15 + sin(lonAng * 3.0 - uTime * 0.6) * 1.6);
            float curtainB = 0.5 + 0.5 * sin(lonAng * 17.0 - uTime * 1.65);
            float ribbon = pow(curtainA * 0.7 + curtainB * 0.3, 2.1);
            vec3 auroraCol = mix(vec3(0.10, 0.96, 0.58), vec3(0.56, 0.24, 0.94), smoothstep(0.72, 0.81, latAbs));
            col += auroraCol * auroraOval * ribbon * nightWeight * 0.42;
          }

          gl_FragColor = vec4(col, 1.0);
        }
      `});this.earthMesh=new ee(new wn(fe,128,96),d),this.earthMesh.renderOrder=0,this.earthMesh.userData={dragTarget:"earth"},this.earthSpinGroup.add(this.earthMesh),this.cloudUniforms={uClouds:{value:l},uSunDir:{value:new D(1,0,0)},uMoonWorldPos:{value:new D(10,0,0)},uMoonRadius:{value:en},uIsPerigee:{value:1},uEclipseEnabled:{value:0}};const p=new ce({uniforms:this.cloudUniforms,transparent:!0,depthWrite:!1,vertexShader:`
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec3 vNormalWorld;
        void main() {
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform sampler2D uClouds;
        uniform vec3 uSunDir;
        uniform vec3 uMoonWorldPos;
        uniform float uMoonRadius;
        uniform float uIsPerigee;
        uniform float uEclipseEnabled;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec3 vNormalWorld;

        void main() {
          float density = texture2D(uClouds, vUv).r;
          if (density < 0.04) discard;
          vec3 N = normalize(vNormalWorld);
          vec3 L = normalize(uSunDir);
          float ndotl = dot(N, L);

          float dayVis = smoothstep(-0.14, 0.18, ndotl);
          float sunset = exp(-pow((ndotl + 0.02) * 8.5, 2.0));

          // Darken clouds realistically inside Moon's eclipse shadow!
          float eclipseFactor = 1.0;
          vec3 toMoon = uMoonWorldPos - vWorldPos;
          float proj = dot(toMoon, L);
          if (uEclipseEnabled > 0.5 && proj > 0.0 && ndotl > -0.1) {
            float perp = length(toMoon - L * proj);
            float umbraR = uIsPerigee > 0.5 ? uMoonRadius * 0.40 : 0.03;
            float penumbraR = uMoonRadius * 1.42;
            if (perp < penumbraR) {
              float t = 1.0 - smoothstep(umbraR, penumbraR, perp);
              eclipseFactor = 1.0 - t * (uIsPerigee > 0.5 ? 0.96 : 0.80);
            }
          }

          vec3 cloudCol = mix(vec3(0.03, 0.04, 0.07), vec3(0.98, 0.99, 1.0), dayVis * eclipseFactor);
          cloudCol += vec3(1.0, 0.48, 0.18) * sunset * 0.55 * eclipseFactor;
          float alpha = smoothstep(0.08, 0.88, density) * (0.14 + 0.68 * dayVis);
          gl_FragColor = vec4(cloudCol, alpha);
        }
      `});this.earthCloudsMesh=new ee(new wn(fe*1.009,96,64),p),this.earthCloudsMesh.renderOrder=2,this.earthSpinGroup.add(this.earthCloudsMesh),this.atmosUniforms={uSunDir:{value:new D(1,0,0)},uEarthCenter:{value:new D(0,0,0)}};const _=new ce({uniforms:this.atmosUniforms,side:qe,transparent:!0,blending:ki,depthWrite:!1,vertexShader:`
        varying vec3 vWorldPos;
        varying vec3 vNormalWorld;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform vec3 uSunDir;
        varying vec3 vWorldPos;
        varying vec3 vNormalWorld;

        void main() {
          vec3 V = normalize(cameraPosition - vWorldPos);
          vec3 N = normalize(vNormalWorld);
          vec3 L = normalize(uSunDir);

          // Grazing limb optical depth along view ray
          float viewRim = clamp(1.0 + dot(V, -N), 0.0, 1.0);
          float opticalDepth = pow(viewRim, 2.8) * 0.92;

          float sunLit = smoothstep(-0.28, 0.38, dot(N, L));
          float terminatorGlow = exp(-pow((dot(N, L) + 0.04) * 5.2, 2.0));
          // Forward Mie scattering halo when Sun is behind Earth's limb
          float forwardMie = pow(max(dot(-V, L), 0.0), 6.0) * 0.45;

          vec3 rayleighBlue = vec3(0.18, 0.52, 1.0) * sunLit;
          vec3 sunsetAmber = vec3(1.0, 0.42, 0.12) * terminatorGlow * 0.72;
          vec3 col = (rayleighBlue + sunsetAmber + vec3(0.45, 0.72, 1.0) * forwardMie) * opticalDepth;
          gl_FragColor = vec4(col, clamp(opticalDepth * (sunLit + terminatorGlow * 0.6), 0.0, 0.85));
        }
      `});this.earthAtmosMesh=new ee(new wn(fe*1.044,96,64),_),this.earthAtmosMesh.renderOrder=4,this.earthAnchor.add(this.earthAtmosMesh);const g=this.createFatLineMaterial(16436245,1.35,.62,e,n);for(const k of Rd)for(const z of k){if(z.length<3)continue;const X=[];for(const[J,ut]of z){const vt=qs(ut,J,fe+.015);X.push(vt.x,vt.y,vt.z)}const V=new Tn;V.setPositions(X);const it=new zn(V,g);it.renderOrder=1,this.earthSpinGroup.add(it)}this.tropicCancerRing=this.createLatitudeRing(23.44,16096779,.52,1.4,e,n,!0),this.tropicCancerRing.renderOrder=1;const m=this.createLatitudeRing(0,3718648,.22,1,e,n,!1);m.renderOrder=1,this.earthSpinGroup.add(this.tropicCancerRing,m);const f=[{id:"dammam",lat:26.42,lon:wc,ar:"الدمام",en:"Dammam",color:3462041},{id:"riyadh",lat:Tc,lon:Js,ar:"الرياض",en:"Riyadh",color:16436245},{id:"jeddah",lat:21.54,lon:Ac,ar:"جدة · مكة",en:"Jeddah · Makkah",color:3718648}];for(const k of f){const z=new ee(new wn(.052,16,16),new jn({color:k.color}));z.position.copy(qs(k.lat,k.lon,fe+.036)),this.earthSpinGroup.add(z),this.cityAnchors.push({id:k.id,nameAr:k.ar,nameEn:k.en,localObj:z})}const M=[[26.42,wc],[25.6,48.4],[Tc,Js],[23.3,43],[21.54,Ac]],E=[];for(let k=0;k<M.length-1;k++){const[z,X]=M[k],[V,it]=M[k+1];for(let J=0;J<=12;J++){const ut=J/12,vt=qs(z+(V-z)*ut,X+(it-X)*ut,fe+.028);E.push(vt.x,vt.y,vt.z)}}const v=new Tn;v.setPositions(E),this.saudiSunSweepArc=new zn(v,this.createFatLineMaterial(16707722,2,.82,e,n,!0)),this.saudiSunSweepArc.computeLineDistances(),this.earthSpinGroup.add(this.saudiSunSweepArc);const T=[];for(let k=0;k<=180;k++){const z=k/180*Math.PI*2;T.push(0,Math.cos(z)*(fe+.024),Math.sin(z)*(fe+.024))}const A=new Tn;A.setPositions(T);const w=new zn(A,this.createFatLineMaterial(16096779,1.85,.72,e,n,!1));this.dawnTerminatorGroup.add(w);const C=this.createFatLineMaterial(16638023,1.15,.36,e,n,!0);for(const k of[1.6,2.35,2.92]){const z=Math.sqrt(Math.max(.1,fe*fe-k*k))*.85,X=new Tn;X.setPositions([z+.15,.9,k*.85,z+7.5,.9,k*.85]);const V=new zn(X,C);V.computeLineDistances(),this.dawnTerminatorGroup.add(V)}this.earthAnchor.add(this.dawnTerminatorGroup);const x=new Tn;x.setPositions([0,-fe*1.42,0,0,fe*1.48,0]);const S=new zn(x,this.createFatLineMaterial(8246268,1.4,.55,e,n,!0));S.computeLineDistances(),this.axisRodGroup.add(S);const P=new ee(new vo(.075,.24,16),new jn({color:8246268}));P.position.y=fe*1.5,this.axisRodGroup.add(P),this.earthTiltGroup.add(this.axisRodGroup);const O=this.createFatLineMaterial(16638023,1.35,.58,e,n,!0);for(let k=-2;k<=2;k++){const z=k*.52,X=new Tn;X.setPositions([fe+.12,z,0,fe+6.5,z,0]);const V=new zn(X,O);V.computeLineDistances(),this.solarRayGroup.add(V)}const U=new ee(new xo(.18,.24,48),new jn({color:16707722,transparent:!0,opacity:.85,side:Cn}));U.rotation.y=Math.PI/2,U.position.set(fe+.045,0,0),this.solarRayGroup.add(U),this.earthAnchor.add(this.solarRayGroup),this.tidalUniforms={uTime:{value:0}};const W=new ce({uniforms:this.tidalUniforms,transparent:!0,depthWrite:!1,blending:ki,vertexShader:`
        varying vec3 vNormalView;
        void main() {
          vNormalView = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormalView;
        void main() {
          vec3 nView = normalize(vNormalView);
          float rim = pow(clamp(1.0 - abs(nView.z), 0.0, 1.0), 2.1);
          vec3 col = mix(vec3(0.06, 0.45, 0.85), vec3(0.38, 0.82, 1.0), rim);
          gl_FragColor = vec4(col, 0.08 + rim * 0.46);
        }
      `});this.tidalShell=new ee(new wn(fe,96,64),W),this.tidalShell.renderOrder=3,this.tidalGroup.add(this.tidalShell),this.earthAnchor.add(this.tidalGroup)}createLatitudeRing(t,e,n,i,s,a,o){const l=[];for(let u=-180;u<=180;u+=2){const d=qs(t,u,fe+.018);l.push(d.x,d.y,d.z)}const c=new Tn;c.setPositions(l);const h=new zn(c,this.createFatLineMaterial(e,i,n,s,a,o));return o&&h.computeLineDistances(),h}buildMoonAndVolumetricShadows(t,e,n){const i=new fo,s=i.load("./textures/moon-lro-8k.jpg");s.anisotropy=t,s.colorSpace=Re;const a=i.load("./textures/moon-normal-4k.jpg");a.anisotropy=t,this.moonUniforms={uMap:{value:s},uNormalMap:{value:a},uSunDir:{value:new D(1,0,0)},uEarthWorldPos:{value:new D(0,0,0)},uEarthRadius:{value:fe}};const o=new ce({uniforms:this.moonUniforms,vertexShader:`
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec3 vNormalWorld;
        void main() {
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        uniform sampler2D uNormalMap;
        uniform vec3 uSunDir;
        uniform vec3 uEarthWorldPos;
        uniform float uEarthRadius;

        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec3 vNormalWorld;

        mat3 cotangentFrame(vec3 N, vec3 p, vec2 uv) {
          vec3 dp1 = dFdx(p);
          vec3 dp2 = dFdy(p);
          vec2 duv1 = dFdx(uv);
          vec2 duv2 = dFdy(uv);
          vec3 dp2perp = cross(dp2, N);
          vec3 dp1perp = cross(N, dp1);
          vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;
          vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;
          float invmax = inversesqrt(max(dot(T, T), dot(B, B)) + 1e-8);
          return mat3(T * invmax, B * invmax, N);
        }

        void main() {
          vec3 Ngeom = normalize(vNormalWorld);
          vec3 L = normalize(uSunDir);
          vec3 V = normalize(cameraPosition - vWorldPos);

          vec3 mapN = texture2D(uNormalMap, vUv).xyz * 2.0 - 1.0;
          mapN.xy *= 1.35;
          mat3 TBN = cotangentFrame(Ngeom, vWorldPos, vUv);
          vec3 N = normalize(TBN * mapN);

          vec3 albedo = texture2D(uMap, vUv).rgb;

          // Oren-Nayar-inspired dusty lunar regolith reflectance (flat disk opposition surge + sharp crater terminator!)
          float ndotlGeom = dot(Ngeom, L);
          float ndotl = max(dot(N, L), 0.0);
          float regolith = pow(max(ndotl, 1e-5), 0.72) * smoothstep(-0.04, 0.08, ndotlGeom);

          // Cool subtle Earthshine reflected from Earth's sunlit oceans onto the Moon's near side
          vec3 toEarth = normalize(uEarthWorldPos - vWorldPos);
          float earthshine = max(dot(Ngeom, toEarth), 0.0) * 0.028;
          vec3 litColor = albedo * regolith * 1.18 + albedo * vec3(0.72, 0.85, 1.05) * earthshine;

          // Physical Rayleigh-Refracted Copper-to-Crimson Lunar Eclipse Umbra
          vec3 fromEarth = vWorldPos - uEarthWorldPos;
          vec3 antiSun = -L;
          float behind = dot(fromEarth, antiSun);
          if (behind > 0.0) {
            float perp = length(fromEarth - antiSun * behind);
            float umbraR = uEarthRadius * 0.74;
            float penumbraR = uEarthRadius * 1.28;
            if (perp < penumbraR) {
              float penumbraDim = 1.0 - smoothstep(umbraR, penumbraR, perp) * 0.65;
              float inUmbra = 1.0 - smoothstep(umbraR * 0.78, umbraR * 1.04, perp);
              float coreDepth = 1.0 - clamp(perp / max(umbraR, 0.01), 0.0, 1.0);
              vec3 copperRim = vec3(0.92, 0.28, 0.07);
              vec3 deepBrickCore = vec3(0.42, 0.05, 0.02);
              vec3 eclipseGlow = albedo * mix(copperRim, deepBrickCore, coreDepth) * (0.45 + 0.55 * max(dot(N, -antiSun), 0.2));
              litColor = mix(litColor * penumbraDim, eclipseGlow, inUmbra * 0.97);
            }
          }

          gl_FragColor = vec4(litColor, 1.0);
        }
      `});this.moonMesh=new ee(new wn(en,96,72),o),this.scene.add(this.moonMesh),this.moonGrabSphere=new ee(new wn(en*2.35,16,16),new jn({transparent:!0,opacity:0,depthWrite:!1})),this.moonGrabSphere.userData={dragTarget:"moon"},this.moonMesh.add(this.moonGrabSphere);const l=new Array(387).fill(0),c=new Tn;c.setPositions(l),this.moonOrbitLine=new zn(c,this.createFatLineMaterial(9741240,1.45,.42,e,n)),this.scene.add(this.moonOrbitLine);const h=new Tn;h.setPositions([0,0,0,1,0,0]),this.tidalLockLine=new zn(h,this.createFatLineMaterial(3462041,1.8,.78,e,n,!0)),this.scene.add(this.tidalLockLine);const u=new vo(.11,.32,18);u.rotateX(Math.PI/2),this.tidalLockCone=new ee(u,new jn({color:3462041})),this.scene.add(this.tidalLockCone);const d=(M,E)=>new ce({uniforms:{uColor:{value:new Wt(M)},uOpacity:{value:E}},transparent:!0,side:Cn,depthWrite:!1,vertexShader:`
          varying vec3 vNormalView;
          varying float vAxial;
          void main() {
            // Cone translated along +Z from 0..1
            vAxial = clamp(position.z, 0.0, 1.0);
            vNormalView = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 uColor;
          uniform float uOpacity;
          varying vec3 vNormalView;
          varying float vAxial;
          void main() {
            // Soft grazing-angle fade so cone edges vanish organically into space!
            vec3 nView = normalize(vNormalView);
            float edgeSoft = pow(clamp(abs(nView.z), 0.0, 1.0), 2.1);
            float lengthFade = (1.0 - smoothstep(0.72, 1.0, vAxial)) * smoothstep(0.0, 0.08, vAxial);
            gl_FragColor = vec4(uColor, edgeSoft * lengthFade * uOpacity);
          }
        `}),p=new ls(en*.98,0,1,48,1,!0);p.translate(0,-.5,0),p.rotateX(-Math.PI/2),this.moonUmbraCone=new ee(p,d(132106,.68));const _=new ls(en,en*1.48,1,48,1,!0);_.translate(0,-.5,0),_.rotateX(-Math.PI/2),this.moonPenumbraCone=new ee(_,d(6583435,.14));const g=new Tn;g.setPositions([0,en,0,0,0,1,0,-en,0]),this.moonTangentLines=new zn(g,this.createFatLineMaterial(16436245,1.2,.52,e,n,!0)),this.moonShadowGroup.add(this.moonUmbraCone,this.moonPenumbraCone,this.moonTangentLines),this.scene.add(this.moonShadowGroup);const m=new ls(fe*.98,fe*.28,1,56,1,!0);m.translate(0,-.5,0),m.rotateX(-Math.PI/2);const f=new ee(m,d(8330525,.16));f.scale.set(1,1,15.5),this.earthShadowGroup.add(f),this.scene.add(this.earthShadowGroup)}setCameraPreset(t,e,n=!1){this.currentPreset=t;const i=zi(e.seasonAngleRad),s=i.clone().negate().normalize(),a=new D(-s.z,0,s.x).normalize();let o=i.clone(),l=new D(0,4.2,10.2);if(t==="earth-close"?(o=i.clone().addScaledVector(s,2.35).add(new D(0,.28,0)),l=s.clone().multiplyScalar(-6.8).addScaledVector(a,6.4).add(new D(0,2.15,0))):t==="tropic-saudi"?(o=i.clone().add(new D(0,.25,0)),l=s.clone().multiplyScalar(5.6).addScaledVector(a,6.2).add(new D(0,2.9,0))):t==="seasons-orbit"?(o=new D(0,0,0),l=new D(0,31,45)):t==="moon-orbit"?l=s.clone().multiplyScalar(3.8).addScaledVector(a,-15).add(new D(0,10.8,0)):t==="eclipse-align"?l=a.clone().multiplyScalar(11.6).addScaledVector(s,8.2).add(new D(0,3.6,0)):t==="tides-top"&&(l=new D(0,16,8.2)),this.activeCamTween&&(this.activeCamTween.kill(),this.activeCamTween=null),n){this.controls.target.copy(o),this.camOffsetLive.copy(l),this.camera.position.copy(o).add(l),this.controls.update();return}const c=this.controls.target.clone(),h=this.camera.position.clone(),u={t:0};this.activeCamTween=bf.to(u,{t:1,duration:1.35,ease:"power3.inOut",onUpdate:()=>{const d=zi(e.seasonAngleRad),p=d.clone().negate().normalize(),_=this.currentPreset==="seasons-orbit"?o:this.currentPreset==="earth-close"?d.clone().addScaledVector(p,2.35).add(new D(0,.28,0)):this.currentPreset==="tropic-saudi"?d.clone().add(new D(0,.25,0)):d,g=_.clone().add(l);this.controls.target.lerpVectors(c,_,u.t),this.camera.position.lerpVectors(h,g,u.t)},onComplete:()=>{this.activeCamTween=null,this.controls.update()}})}detectDragStart(t,e){const n=new Ku;if(n.setFromCamera(t,this.camera),n.intersectObject(this.moonGrabSphere,!1).length>0)return"orbit-moon";if(n.intersectObject(this.earthMesh,!1).length>0)return e===2&&(this.currentPreset==="seasons-orbit"||this.currentPreset==="tropic-saudi")?"orbit-season":"spin-earth";if(e===2&&(this.currentPreset==="seasons-orbit"||this.currentPreset==="tropic-saudi")){const i=new Vn(new D(0,1,0),0),s=new D;if(n.ray.intersectPlane(i,s)&&Math.abs(s.length()-T0)<4.2)return"orbit-season"}return"none"}applyPointerDrag(t,e,n,i){const s=new Ku;if(s.setFromCamera(e,this.camera),t==="spin-earth")return i.timeScale=0,i.earthSpinRad=We(i.earthSpinRad+n*.011),!0;if(t==="orbit-season"){this.currentPreset==="tropic-saudi"&&this.setCameraPreset("seasons-orbit",i,!1);const a=new Vn(new D(0,1,0),0),o=new D;if(s.ray.intersectPlane(a,o)&&o.lengthSq()>.1)return i.timeScale=0,i.seasonAngleRad=We(Math.atan2(o.z,-o.x)),i.earthSpinRad=We(i.seasonAngleRad-.8146),!0}if(t==="orbit-moon"){const a=zi(i.seasonAngleRad),o=new Vn(new D(0,1,0),-a.y),l=new D;if(s.ray.intersectPlane(o,l)){const c=l.sub(a);if(c.lengthSq()>.05){i.timeScale=0;const h=a.clone().negate().normalize(),u=new D(-h.z,0,h.x).normalize(),d=c.dot(h),p=c.dot(u);return i.moonPhaseRad=We(Math.atan2(p,d)),!0}}}return!1}resize(){const t=this.container.clientWidth||window.innerWidth,e=this.container.clientHeight||window.innerHeight,n=Math.min(window.devicePixelRatio||1,2);this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(n),this.renderer.setSize(t,e),this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.bloomPass.resolution.set(t*n,e*n);for(const i of this.lineMaterials)i.resolution.set(t,e)}render(t,e,n,i,s){const a=zi(t.seasonAngleRad),o=a.clone().negate().normalize(),l=Ml(t,a);if(this.hasPrevEarth&&this.currentPreset!=="seasons-orbit"&&!this.activeCamTween){const v=a.clone().sub(this.prevEarthPos);this.controls.target.add(v),this.camera.position.add(v)}this.prevEarthPos.copy(a),this.hasPrevEarth=!0,this.controls.enabled=!s&&!this.activeCamTween,this.activeCamTween||this.controls.update(),this.sunUniforms.uTime.value=i,this.seasonMarkersGroup.visible=t.chapterId===2||this.currentPreset==="seasons-orbit",this.helioOrbitLine.visible=!0;const c=i*.008;this.earthAnchor.position.copy(a),this.earthTiltGroup.quaternion.copy(w0(t.axialTiltDeg)),this.earthSpinGroup.rotation.y=t.earthSpinRad,this.earthCloudsMesh.rotation.y=c;const h=t.moonDistanceMode==="perigee"?1:0,u=t.chapterId===4?1:0;this.earthUniforms.uSunDir.value.copy(o),this.earthUniforms.uMoonWorldPos.value.copy(l),this.earthUniforms.uIsPerigee.value=h,this.earthUniforms.uEclipseEnabled.value=u,this.earthUniforms.uCloudOffset.value=c/(Math.PI*2),this.earthUniforms.uTime.value=i,this.cloudUniforms.uSunDir.value.copy(o),this.cloudUniforms.uMoonWorldPos.value.copy(l),this.cloudUniforms.uIsPerigee.value=h,this.cloudUniforms.uEclipseEnabled.value=u,this.atmosUniforms.uSunDir.value.copy(o);const d=t.chapterId===1;if(this.dawnTerminatorGroup.visible=d,this.saudiSunSweepArc.visible=d,d&&this.dawnTerminatorGroup.quaternion.setFromUnitVectors(new D(1,0,0),o),this.solarRayGroup.visible=t.showSolarRays,t.showSolarRays&&this.solarRayGroup.quaternion.setFromUnitVectors(new D(1,0,0),o),this.tidalGroup.visible=t.showTidalBulge,t.showTidalBulge){const v=l.clone().sub(a).normalize();v.x<-.9999?this.tidalGroup.quaternion.setFromAxisAngle(new D(0,1,0),Math.PI):this.tidalGroup.quaternion.setFromUnitVectors(new D(1,0,0),v);const T=Math.abs(o.dot(v)),A=1.13+.17*T,w=1.032-.012*T;this.tidalShell.scale.set(A,w,w)}this.moonMesh.position.copy(l),this.moonMesh.lookAt(a),this.moonMesh.rotateY(-Math.PI/2),this.moonUniforms.uSunDir.value.copy(o),this.moonUniforms.uEarthWorldPos.value.copy(a);const p={...t};for(let v=0;v<=128;v++){p.moonPhaseRad=v/128*Math.PI*2;const T=Ml(p,a);this.moonOrbitPosBuf[v*3]=T.x,this.moonOrbitPosBuf[v*3+1]=T.y,this.moonOrbitPosBuf[v*3+2]=T.z}if(this.moonOrbitLine.geometry.setPositions(this.moonOrbitPosBuf),this.tidalLockLine.visible=t.showTidalLockArrow,this.tidalLockCone.visible=t.showTidalLockArrow,t.showTidalLockArrow){const v=a.clone().sub(l).normalize(),T=l.clone().addScaledVector(v,en+2.15);this.tidalLockLine.geometry.setPositions([l.x,l.y,l.z,T.x,T.y,T.z]),this.tidalLockLine.computeLineDistances(),this.tidalLockCone.position.copy(T),this.tidalLockCone.lookAt(a)}if(this.moonShadowGroup.visible=t.showShadowCones,this.earthShadowGroup.visible=t.showShadowCones,t.showShadowCones){const v=o.clone().negate(),T=new si().setFromUnitVectors(new D(0,0,1),v);this.moonShadowGroup.position.copy(l),this.moonShadowGroup.quaternion.copy(T);const A=t.moonDistanceMode==="perigee"?8.35:5.85,w=A0(t.moonDistanceMode)+1.5;this.moonUmbraCone.scale.set(1,1,A),this.moonPenumbraCone.scale.set(1,1,w),this.moonTangentLines.geometry.setPositions([0,en,0,0,0,A,0,-en,0]),this.moonTangentLines.computeLineDistances(),this.earthShadowGroup.position.copy(a),this.earthShadowGroup.quaternion.copy(T)}this.earthAnchor.updateMatrixWorld(!0);const _=this.hoveredDragMode;if(_!=="none"){this.grabHaloMesh.visible=!0;const v=_==="orbit-moon",T=v?l:a,A=v?en*1.48:fe*1.16,w=1+Math.sin(i*5)*.035;this.grabHaloMesh.position.copy(T),this.grabHaloMesh.quaternion.copy(this.camera.quaternion),this.grabHaloMesh.scale.setScalar(A*w);const C=this.grabHaloMesh.material;C.color.setHex(v?3718648:16638023),C.opacity=s?.62:.38}else this.grabHaloMesh.visible=!1;const g=this.container.clientWidth||window.innerWidth,m=this.container.clientHeight||window.innerHeight,f=a.distanceTo(this.camera.position),M=this.camera.position.clone().sub(a).normalize(),E=[];if(f<26&&t.chapterId===1)for(const v of this.cityAnchors){const T=new D;v.localObj.getWorldPosition(T);const A=T.clone().sub(a).normalize(),w=A.dot(M)>.15,C=A.dot(o),x=C<-.025?"night":C<.12?"dawn":"day",S=T.clone().project(this.camera);E.push({id:v.id,nameAr:v.nameAr,nameEn:v.nameEn,x:(S.x*.5+.5)*g,y:(-S.y*.5+.5)*m,visible:w&&S.z<1,sunState:x})}return this.composer.render(),E}getCalloutScreenPos(t,e){const n=this.container.clientWidth||window.innerWidth,i=this.container.clientHeight||window.innerHeight,s=zi(e.seasonAngleRad),a=Ml(e,s),o=s.clone().negate().normalize();let l=s.clone();if(t==="sun")l=new D(0,yl+1.4,0);else if(t==="moon")l=a.clone().add(new D(0,en+.9,0));else if(t==="umbra"){const d=e.moonDistanceMode==="perigee"?4.8:4.2;l=a.clone().addScaledVector(o.clone().negate(),d)}else if(t==="tropic")l=s.clone().add(new D(0,fe*1.18,0));else{const d=this.cityAnchors.find(p=>p.id==="riyadh");d?(d.localObj.getWorldPosition(l),l.y+=.85):l=s.clone().add(new D(0,fe+.8,0))}const c=l.project(this.camera),h=Kn((c.x*.5+.5)*n,150,n-150),u=Kn((-c.y*.5+.5)*i,110,i-255);return{x:h,y:u,visible:c.z<1}}setHoveredDragMode(t){this.hoveredDragMode=t}}/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */const Lh=173.1446326846693,o3=14959787069098932e-8,Qi=.017453292519943295,Cd=57.29577951308232,l3=365.24217,Pd=new Date("2000-01-01T12:00:00Z"),gi=2*Math.PI,Bi=3600*(180/Math.PI),ns=484813681109536e-20,c3=10800*60,h3=2*c3,u3=6378.1366,d3=u3/o3,Rf=81.30056,Ih=.0002959122082855911,kc=2825345909524226e-22,Vc=8459715185680659e-23,Hc=1292024916781969e-23,Gc=1524358900784276e-23;function Cf(r){if(r!==!0&&r!==!1)throw console.trace(),`Value is not boolean: ${r}`;return r}function na(r){if(!Number.isFinite(r))throw console.trace(),`Value is not a finite number: ${r}`;return r}function Kr(r){return r-Math.floor(r)}var Ut;(function(r){r.Sun="Sun",r.Moon="Moon",r.Mercury="Mercury",r.Venus="Venus",r.Earth="Earth",r.Mars="Mars",r.Jupiter="Jupiter",r.Saturn="Saturn",r.Uranus="Uranus",r.Neptune="Neptune",r.Pluto="Pluto",r.SSB="SSB",r.EMB="EMB",r.Star1="Star1",r.Star2="Star2",r.Star3="Star3",r.Star4="Star4",r.Star5="Star5",r.Star6="Star6",r.Star7="Star7",r.Star8="Star8"})(Ut||(Ut={}));const f3=[Ut.Star1,Ut.Star2,Ut.Star3,Ut.Star4,Ut.Star5,Ut.Star6,Ut.Star7,Ut.Star8],p3=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function m3(r){const t=f3.indexOf(r);return t>=0?p3[t]:null}function Uh(r){const t=m3(r);return t&&t.dist>0?t:null}var Xn;(function(r){r[r.From2000=0]="From2000",r[r.Into2000=1]="Into2000"})(Xn||(Xn={}));const Mi={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function g3(r){var t,e,n,i,s,a,o;const l=2e3+(r-14)/l3;return l<-500?(t=(l-1820)/100,-20+32*t*t):l<500?(t=l/100,e=t*t,n=t*e,i=e*e,s=e*n,a=n*n,10583.6-1014.41*t+33.78311*e-5.952053*n-.1798452*i+.022174192*s+.0090316521*a):l<1600?(t=(l-1e3)/100,e=t*t,n=t*e,i=e*e,s=e*n,a=n*n,1574.2-556.01*t+71.23472*e+.319781*n-.8503463*i-.005050998*s+.0083572073*a):l<1700?(t=l-1600,e=t*t,n=t*e,120-.9808*t-.01532*e+n/7129):l<1800?(t=l-1700,e=t*t,n=t*e,i=e*e,8.83+.1603*t-.0059285*e+13336e-8*n-i/1174e3):l<1860?(t=l-1800,e=t*t,n=t*e,i=e*e,s=e*n,a=n*n,o=n*i,13.72-.332447*t+.0068612*e+.0041116*n-37436e-8*i+121272e-10*s-1699e-10*a+875e-12*o):l<1900?(t=l-1860,e=t*t,n=t*e,i=e*e,s=e*n,7.62+.5737*t-.251754*e+.01680668*n-.0004473624*i+s/233174):l<1920?(t=l-1900,e=t*t,n=t*e,i=e*e,-2.79+1.494119*t-.0598939*e+.0061966*n-197e-6*i):l<1941?(t=l-1920,e=t*t,n=t*e,21.2+.84493*t-.0761*e+.0020936*n):l<1961?(t=l-1950,e=t*t,n=t*e,29.07+.407*t-e/233+n/2547):l<1986?(t=l-1975,e=t*t,n=t*e,45.45+1.067*t-e/260-n/718):l<2005?(t=l-2e3,e=t*t,n=t*e,i=e*e,s=e*n,63.86+.3345*t-.060374*e+.0017275*n+651814e-9*i+2373599e-11*s):l<2050?(t=l-2e3,62.92+.32217*t+.005589*t*t):l<2150?(t=(l-1820)/100,-20+32*t*t-.5628*(2150-l)):(t=(l-1820)/100,-20+32*t*t)}let _3=g3;function Dd(r){return r+_3(r)/86400}class ds{constructor(t){if(t instanceof ds){this.date=t.date,this.ut=t.ut,this.tt=t.tt;return}const e=1e3*3600*24;if(t instanceof Date&&Number.isFinite(t.getTime())){this.date=t,this.ut=(t.getTime()-Pd.getTime())/e,this.tt=Dd(this.ut);return}if(Number.isFinite(t)){this.date=new Date(Pd.getTime()+t*e),this.ut=t,this.tt=Dd(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(t){let e=new ds(t);for(;;){const n=t-e.tt;if(Math.abs(n)<1e-12)return e;e=e.AddDays(n)}}toString(){return this.date.toISOString()}AddDays(t){return new ds(this.ut+t)}}function oi(r){return r instanceof ds?r:new ds(r)}function v3(r){function t(d){return d%h3*ns}const e=r.tt/36525,n=t(128710479305e-5+e*1295965810481e-4),i=t(335779.526232+e*17395272628478e-4),s=t(107226070369e-5+e*1602961601209e-3),a=t(450160.398036-e*69628905431e-4);let o=Math.sin(a),l=Math.cos(a),c=(-172064161-174666*e)*o+33386*l,h=(92052331+9086*e)*l+15377*o,u=2*(i-s+a);return o=Math.sin(u),l=Math.cos(u),c+=(-13170906-1675*e)*o-13696*l,h+=(5730336-3015*e)*l-4587*o,u=2*(i+a),o=Math.sin(u),l=Math.cos(u),c+=(-2276413-234*e)*o+2796*l,h+=(978459-485*e)*l+1374*o,u=2*a,o=Math.sin(u),l=Math.cos(u),c+=(2074554+207*e)*o-698*l,h+=(-897492+470*e)*l-291*o,o=Math.sin(n),l=Math.cos(n),c+=(1475877-3633*e)*o+11817*l,h+=(73871-184*e)*l-1924*o,{dpsi:-135e-6+c*1e-7,deps:388e-6+h*1e-7}}function Pf(r){var t=r.tt/36525,e=((((-434e-10*t-576e-9)*t+.0020034)*t-1831e-7)*t-46.836769)*t+84381.406;return e/3600}var eo;function Nh(r){if(!eo||Math.abs(eo.tt-r.tt)>1e-6){const t=v3(r),e=Pf(r),n=e+t.deps/3600;eo={tt:r.tt,dpsi:t.dpsi,deps:t.deps,ee:t.dpsi*Math.cos(e*Qi)/15,mobl:e,tobl:n}}return eo}function x3(r,t){const e=r*Qi,n=Math.cos(e),i=Math.sin(e);return[t[0],t[1]*n-t[2]*i,t[1]*i+t[2]*n]}function S3(r,t){return x3(Pf(r),t)}function y3(r){const t=r.tt/36525;function e(rt,st){const L=[];let Bt;for(Bt=0;Bt<=st-rt;++Bt)L.push(0);return{min:rt,array:L}}function n(rt,st,L,Bt){const Dt=[];for(let It=0;It<=st-rt;++It)Dt.push(e(L,Bt));return{min:rt,array:Dt}}function i(rt,st,L){const Bt=rt.array[st-rt.min];return Bt.array[L-Bt.min]}function s(rt,st,L,Bt){const Dt=rt.array[st-rt.min];Dt.array[L-Dt.min]=Bt}let a,o,l,c,h,u,d,p,_,g,m,f,M,E,v,T,A,w,C,x,S,P,O,U=n(-6,6,1,4),W=n(-6,6,1,4);function k(rt,st){return i(U,rt,st)}function z(rt,st){return i(W,rt,st)}function X(rt,st,L){return s(U,rt,st,L)}function V(rt,st,L){return s(W,rt,st,L)}function it(rt,st,L,Bt,Dt){Dt(rt*L-st*Bt,st*L+rt*Bt)}function J(rt){return Math.sin(gi*rt)}d=t*t,_=0,O=0,m=0,f=3422.7;var ut=J(.19833+.05611*t),vt=J(.27869+.04508*t),Ft=J(.16827-.36903*t),$=J(.34734-5.37261*t),et=J(.10498-5.37899*t),gt=J(.42681-.41855*t),ct=J(.14943-5.37511*t);for(w=.84*ut+.31*vt+14.27*Ft+7.26*$+.28*et+.24*gt,C=2.94*ut+.31*vt+14.27*Ft+9.34*$+1.12*et+.83*gt,x=-6.4*ut-1.89*gt,S=.21*ut+.31*vt+14.27*Ft-88.7*$-15.3*et+.24*gt-1.86*ct,P=w-x,p=-3332e-9*J(.59734-5.37261*t)-539e-9*J(.35498-5.37899*t)-64e-9*J(.39943-5.37511*t),M=gi*Kr(.60643382+1336.85522467*t-313e-8*d)+w/Bi,E=gi*Kr(.37489701+1325.55240982*t+2565e-8*d)+C/Bi,v=gi*Kr(.99312619+99.99735956*t-44e-8*d)+x/Bi,T=gi*Kr(.25909118+1342.2278298*t-892e-8*d)+S/Bi,A=gi*Kr(.82736186+1236.85308708*t-397e-8*d)+P/Bi,h=1;h<=4;++h){switch(h){case 1:l=E,o=4,c=1.000002208;break;case 2:l=v,o=3,c=.997504612-.002495388*t;break;case 3:l=T,o=4,c=1.000002708+139.978*p;break;case 4:l=A,o=6,c=1;break;default:throw`Internal error: I = ${h}`}for(X(0,h,1),X(1,h,Math.cos(l)*c),V(0,h,0),V(1,h,Math.sin(l)*c),u=2;u<=o;++u)it(k(u-1,h),z(u-1,h),k(1,h),z(1,h),(rt,st)=>(X(u,h,rt),V(u,h,st)));for(u=1;u<=o;++u)X(-u,h,k(u,h)),V(-u,h,-z(u,h))}function Rt(rt,st,L,Bt){for(var Dt={x:1,y:0},It=[0,rt,st,L,Bt],Et=1;Et<=4;++Et)It[Et]!==0&&it(Dt.x,Dt.y,k(It[Et],Et),z(It[Et],Et),(jt,bt)=>(Dt.x=jt,Dt.y=bt));return Dt}function H(rt,st,L,Bt,Dt,It,Et,jt){var bt=Rt(Dt,It,Et,jt);_+=rt*bt.y,O+=st*bt.y,m+=L*bt.x,f+=Bt*bt.x}H(13.902,14.06,-.001,.2607,0,0,0,4),H(.403,-4.01,.394,.0023,0,0,0,3),H(2369.912,2373.36,.601,28.2333,0,0,0,2),H(-125.154,-112.79,-.725,-.9781,0,0,0,1),H(1.979,6.98,-.445,.0433,1,0,0,4),H(191.953,192.72,.029,3.0861,1,0,0,2),H(-8.466,-13.51,.455,-.1093,1,0,0,1),H(22639.5,22609.07,.079,186.5398,1,0,0,0),H(18.609,3.59,-.094,.0118,1,0,0,-1),H(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),H(3.215,5.44,.192,-.0386,1,0,0,-3),H(-38.428,-38.64,.001,.6008,1,0,0,-4),H(-.393,-1.43,-.092,.0086,1,0,0,-6),H(-.289,-1.59,.123,-.0053,0,1,0,4),H(-24.42,-25.1,.04,-.3,0,1,0,2),H(18.023,17.93,.007,.1494,0,1,0,1),H(-668.146,-126.98,-1.302,-.3997,0,1,0,0),H(.56,.32,-.001,-.0037,0,1,0,-1),H(-165.145,-165.06,.054,1.9178,0,1,0,-2),H(-1.877,-6.46,-.416,.0339,0,1,0,-4),H(.213,1.02,-.074,.0054,2,0,0,4),H(14.387,14.78,-.017,.2833,2,0,0,2),H(-.586,-1.2,.054,-.01,2,0,0,1),H(769.016,767.96,.107,10.1657,2,0,0,0),H(1.75,2.01,-.018,.0155,2,0,0,-1),H(-211.656,-152.53,5.679,-.3039,2,0,0,-2),H(1.225,.91,-.03,-.0088,2,0,0,-3),H(-30.773,-34.07,-.308,.3722,2,0,0,-4),H(-.57,-1.4,-.074,.0109,2,0,0,-6),H(-2.921,-11.75,.787,-.0484,1,1,0,2),H(1.267,1.52,-.022,.0164,1,1,0,1),H(-109.673,-115.18,.461,-.949,1,1,0,0),H(-205.962,-182.36,2.056,1.4437,1,1,0,-2),H(.233,.36,.012,-.0025,1,1,0,-3),H(-4.391,-9.66,-.471,.0673,1,1,0,-4),H(.283,1.53,-.111,.006,1,-1,0,4),H(14.577,31.7,-1.54,.2302,1,-1,0,2),H(147.687,138.76,.679,1.1528,1,-1,0,0),H(-1.089,.55,.021,0,1,-1,0,-1),H(28.475,23.59,-.443,-.2257,1,-1,0,-2),H(-.276,-.38,-.006,-.0036,1,-1,0,-3),H(.636,2.27,.146,-.0102,1,-1,0,-4),H(-.189,-1.68,.131,-.0028,0,2,0,2),H(-7.486,-.66,-.037,-.0086,0,2,0,0),H(-8.096,-16.35,-.74,.0918,0,2,0,-2),H(-5.741,-.04,0,-9e-4,0,0,2,2),H(.255,0,0,0,0,0,2,1),H(-411.608,-.2,0,-.0124,0,0,2,0),H(.584,.84,0,.0071,0,0,2,-1),H(-55.173,-52.14,0,-.1052,0,0,2,-2),H(.254,.25,0,-.0017,0,0,2,-3),H(.025,-1.67,0,.0031,0,0,2,-4),H(1.06,2.96,-.166,.0243,3,0,0,2),H(36.124,50.64,-1.3,.6215,3,0,0,0),H(-13.193,-16.4,.258,-.1187,3,0,0,-2),H(-1.187,-.74,.042,.0074,3,0,0,-4),H(-.293,-.31,-.002,.0046,3,0,0,-6),H(-.29,-1.45,.116,-.0051,2,1,0,2),H(-7.649,-10.56,.259,-.1038,2,1,0,0),H(-8.627,-7.59,.078,-.0192,2,1,0,-2),H(-2.74,-2.54,.022,.0324,2,1,0,-4),H(1.181,3.32,-.212,.0213,2,-1,0,2),H(9.703,11.67,-.151,.1268,2,-1,0,0),H(-.352,-.37,.001,-.0028,2,-1,0,-1),H(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),H(.36,.2,-.012,-.0043,2,-1,0,-4),H(-1.167,-1.25,.008,-.0106,1,2,0,0),H(-7.412,-6.12,.117,.0484,1,2,0,-2),H(-.311,-.65,-.032,.0044,1,2,0,-4),H(.757,1.82,-.105,.0112,1,-2,0,2),H(2.58,2.32,.027,.0196,1,-2,0,0),H(2.533,2.4,-.014,-.0212,1,-2,0,-2),H(-.344,-.57,-.025,.0036,0,3,0,-2),H(-.992,-.02,0,0,1,0,2,2),H(-45.099,-.02,0,-.001,1,0,2,0),H(-.179,-9.52,0,-.0833,1,0,2,-2),H(-.301,-.33,0,.0014,1,0,2,-4),H(-6.382,-3.37,0,-.0481,1,0,-2,2),H(39.528,85.13,0,-.7136,1,0,-2,0),H(9.366,.71,0,-.0112,1,0,-2,-2),H(.202,.02,0,0,1,0,-2,-4),H(.415,.1,0,.0013,0,1,2,0),H(-2.152,-2.26,0,-.0066,0,1,2,-2),H(-1.44,-1.3,0,.0014,0,1,-2,2),H(.384,-.04,0,0,0,1,-2,-2),H(1.938,3.6,-.145,.0401,4,0,0,0),H(-.952,-1.58,.052,-.013,4,0,0,-2),H(-.551,-.94,.032,-.0097,3,1,0,0),H(-.482,-.57,.005,-.0045,3,1,0,-2),H(.681,.96,-.026,.0115,3,-1,0,0),H(-.297,-.27,.002,-9e-4,2,2,0,-2),H(.254,.21,-.003,0,2,-2,0,-2),H(-.25,-.22,.004,.0014,1,3,0,-2),H(-3.996,0,0,4e-4,2,0,2,0),H(.557,-.75,0,-.009,2,0,2,-2),H(-.459,-.38,0,-.0053,2,0,-2,2),H(-1.298,.74,0,4e-4,2,0,-2,0),H(.538,1.14,0,-.0141,2,0,-2,-2),H(.263,.02,0,0,1,1,2,0),H(.426,.07,0,-6e-4,1,1,-2,-2),H(-.304,.03,0,3e-4,1,-1,2,0),H(-.372,-.19,0,-.0027,1,-1,-2,2),H(.418,0,0,0,0,0,4,0),H(-.33,-.04,0,0,3,0,2,0);function Q(rt,st,L,Bt,Dt){return rt*Rt(st,L,Bt,Dt).y}g=0,g+=Q(-526.069,0,0,1,-2),g+=Q(-3.352,0,0,1,-4),g+=Q(44.297,1,0,1,-2),g+=Q(-6,1,0,1,-4),g+=Q(20.599,-1,0,1,0),g+=Q(-30.598,-1,0,1,-2),g+=Q(-24.649,-2,0,1,0),g+=Q(-2,-2,0,1,-2),g+=Q(-22.571,0,1,1,-2),g+=Q(10.985,0,-1,1,-2),_+=.82*J(.7736-62.5512*t)+.31*J(.0466-125.1025*t)+.35*J(.5785-25.1042*t)+.66*J(.4591+1335.8075*t)+.64*J(.313-91.568*t)+1.14*J(.148+1331.2898*t)+.21*J(.5918+1056.5859*t)+.44*J(.5784+1322.8595*t)+.24*J(.2275-5.7374*t)+.28*J(.2965+2.6929*t)+.33*J(.3132+6.3368*t),a=T+O/Bi;let ht=(1.000002708+139.978*p)*(18518.511+1.189+m)*Math.sin(a)-6.24*Math.sin(3*a)+g;return{geo_eclip_lon:gi*Kr((M+_/Bi)/gi),geo_eclip_lat:Math.PI/(180*3600)*ht,distance_au:Bi*d3/(.999953253*f)}}function Df(r,t){return[r.rot[0][0]*t[0]+r.rot[1][0]*t[1]+r.rot[2][0]*t[2],r.rot[0][1]*t[0]+r.rot[1][1]*t[1]+r.rot[2][1]*t[2],r.rot[0][2]*t[0]+r.rot[1][2]*t[1]+r.rot[2][2]*t[2]]}function Co(r,t,e){const n=M3(t,e);return Df(n,r)}function M3(r,t){const e=r.tt/36525;let n=84381.406,i=((((-951e-10*e+132851e-9)*e-.00114045)*e-1.0790069)*e+5038.481507)*e,s=((((3337e-10*e-467e-9)*e-.00772503)*e+.0512623)*e-.025754)*e+n,a=((((-56e-9*e+170663e-9)*e-.00121197)*e-2.3814292)*e+10.556403)*e;n*=ns,i*=ns,s*=ns,a*=ns;const o=Math.sin(n),l=Math.cos(n),c=Math.sin(-i),h=Math.cos(-i),u=Math.sin(-s),d=Math.cos(-s),p=Math.sin(a),_=Math.cos(a),g=_*h-c*p*d,m=_*c*l+p*d*h*l-o*p*u,f=_*c*o+p*d*h*o+l*p*u,M=-p*h-c*_*d,E=-p*c*l+_*d*h*l-o*_*u,v=-p*c*o+_*d*h*o+l*_*u,T=c*u,A=-u*h*l-o*d,w=-u*h*o+d*l;if(t===Xn.Into2000)return new Po([[g,m,f],[M,E,v],[T,A,w]]);if(t===Xn.From2000)return new Po([[g,M,T],[m,E,A],[f,v,w]]);throw"Invalid precess direction"}function Wc(r,t,e){const n=E3(t,e);return Df(n,r)}function E3(r,t){const e=Nh(r),n=e.mobl*Qi,i=e.tobl*Qi,s=e.dpsi*ns,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s),d=h,p=-u*a,_=-u*o,g=u*l,m=h*a*l+o*c,f=h*o*l-a*c,M=u*c,E=h*a*c-o*l,v=h*o*c+a*l;if(t===Xn.From2000)return new Po([[d,g,M],[p,m,E],[_,f,v]]);if(t===Xn.Into2000)return new Po([[d,p,_],[g,m,f],[M,E,v]]);throw"Invalid precess direction"}function b3(r,t,e){return e===Xn.Into2000?Co(Wc(r,t,e),t,e):Wc(Co(r,t,e),t,e)}class Be{constructor(t,e,n,i){this.x=t,this.y=e,this.z=n,this.t=i}Length(){return Math.hypot(this.x,this.y,this.z)}}class Xi{constructor(t,e,n,i,s,a,o){this.x=t,this.y=e,this.z=n,this.vx=i,this.vy=s,this.vz=a,this.t=o}}class T3{constructor(t,e,n){this.lat=na(t),this.lon=na(e),this.dist=na(n)}}class Po{constructor(t){this.rot=t}}class w3{constructor(t,e,n){this.vec=t,this.elat=na(e),this.elon=na(n)}}function A3(r){const t=oi(r).AddDays(-1/Lh),e=ia(Mi.Earth,t),n=[-e.x,-e.y,-e.z],[i,s,a]=b3(n,t,Xn.From2000),o=Qi*Nh(t).tobl,l=Math.cos(o),c=Math.sin(o),h=new Be(i,s,a,t);return Lf(h,l,c)}function Lf(r,t,e){const n=r.x,i=r.y*t+r.z*e,s=-r.y*e+r.z*t,a=Math.hypot(n,i);let o=0;a>0&&(o=Cd*Math.atan2(i,n),o<0&&(o+=360));let l=Cd*Math.atan2(s,a),c=new Be(n,i,s,r.t);return new w3(c,l,o)}function Ld(r){const t=Nh(r.t),e=[r.x,r.y,r.z],n=Co(e,r.t,Xn.From2000),[i,s,a]=Wc(n,r.t,Xn.From2000),o=new Be(i,s,a,r.t),l=t.tobl*Qi;return Lf(o,Math.cos(l),Math.sin(l))}function ga(r){const t=oi(r),e=y3(t),n=e.distance_au*Math.cos(e.geo_eclip_lat),i=[n*Math.cos(e.geo_eclip_lon),n*Math.sin(e.geo_eclip_lon),e.distance_au*Math.sin(e.geo_eclip_lat)],s=S3(t,i),a=Co(s,t,Xn.Into2000);return new Be(a[0],a[1],a[2],t)}function If(r){const t=oi(r),e=1e-5,n=t.AddDays(-e),i=t.AddDays(+e),s=ga(n),a=ga(i);return new Xi((s.x+a.x)/2,(s.y+a.y)/2,(s.z+a.z)/2,(a.x-s.x)/(2*e),(a.y-s.y)/(2*e),(a.z-s.z)/(2*e),t)}function R3(r){const t=oi(r),e=If(t),n=1+Rf;return new Xi(e.x/n,e.y/n,e.z/n,e.vx/n,e.vy/n,e.vz/n,t)}function fs(r,t,e){let n=1,i=0;for(let s of r){let a=0;for(let[l,c,h]of s)a+=l*Math.cos(c+t*h);let o=n*a;e&&(o%=gi),i+=o,n*=t}return i}function Nl(r,t){let e=1,n=0,i=0,s=0;for(let a of r){let o=0,l=0;for(let[c,h,u]of a){let d=h+t*u;o+=c*u*Math.sin(d),s>0&&(l+=c*Math.cos(d))}i+=s*n*l-e*o,n=e,e*=t,++s}return i}const js=365250,Xc=0,qc=1,Yc=2;function $c(r){return new Ge(r[0]+44036e-11*r[1]-190919e-12*r[2],-479966e-12*r[0]+.917482137087*r[1]-.397776982902*r[2],.397776982902*r[1]+.917482137087*r[2])}function Uf(r,t,e){const n=e*Math.cos(t),i=Math.cos(r),s=Math.sin(r);return[n*i,n*s,e*Math.sin(t)]}function ia(r,t){const e=t.tt/js,n=fs(r[Xc],e,!0),i=fs(r[qc],e,!1),s=fs(r[Yc],e,!1),a=Uf(n,i,s);return $c(a).ToAstroVector(t)}function jc(r,t){const e=t/js,n=fs(r[Xc],e,!0),i=fs(r[qc],e,!1),s=fs(r[Yc],e,!1),a=Nl(r[Xc],e),o=Nl(r[qc],e),l=Nl(r[Yc],e),c=Math.cos(n),h=Math.sin(n),u=Math.cos(i),d=Math.sin(i),p=+(l*u*c)-s*d*c*o-s*u*h*a,_=+(l*u*h)-s*d*h*o+s*u*c*a,g=+(l*d)+s*u*o,m=Uf(n,i,s),f=[p/js,_/js,g/js],M=$c(m),E=$c(f);return new Ar(t,M,E)}function no(r,t,e,n){const i=n/(n+Ih),s=ia(Mi[e],t);r.x+=i*s.x,r.y+=i*s.y,r.z+=i*s.z}function C3(r){const t=new Be(0,0,0,r);return no(t,r,Ut.Jupiter,kc),no(t,r,Ut.Saturn,Vc),no(t,r,Ut.Uranus,Hc),no(t,r,Ut.Neptune,Gc),t}const Kc=51,P3=29200,is=146,_i=201,xr=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Ge{constructor(t,e,n){this.x=t,this.y=e,this.z=n}clone(){return new Ge(this.x,this.y,this.z)}ToAstroVector(t){return new Be(this.x,this.y,this.z,t)}static zero(){return new Ge(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(t){return new Ge(this.x+t.x,this.y+t.y,this.z+t.z)}sub(t){return new Ge(this.x-t.x,this.y-t.y,this.z-t.z)}incr(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}decr(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}mul(t){return new Ge(t*this.x,t*this.y,t*this.z)}div(t){return new Ge(this.x/t,this.y/t,this.z/t)}mean(t){return new Ge((this.x+t.x)/2,(this.y+t.y)/2,(this.z+t.z)/2)}neg(){return new Ge(-this.x,-this.y,-this.z)}}class Ar{constructor(t,e,n){this.tt=t,this.r=e,this.v=n}clone(){return new Ar(this.tt,this.r,this.v)}sub(t){return new Ar(this.tt,this.r.sub(t.r),this.v.sub(t.v))}}function D3(r){let[t,[e,n,i],[s,a,o]]=r;return new Ar(t,new Ge(e,n,i),new Ge(s,a,o))}function io(r,t,e,n){const i=n/(n+Ih),s=jc(Mi[e],t);return r.r.incr(s.r.mul(i)),r.v.incr(s.v.mul(i)),s}function Gs(r,t,e){const n=e.sub(r),i=n.quadrature();return n.mul(t/(i*Math.sqrt(i)))}class Vo{constructor(t){let e=new Ar(t,new Ge(0,0,0),new Ge(0,0,0));this.Jupiter=io(e,t,Ut.Jupiter,kc),this.Saturn=io(e,t,Ut.Saturn,Vc),this.Uranus=io(e,t,Ut.Uranus,Hc),this.Neptune=io(e,t,Ut.Neptune,Gc),this.Jupiter.r.decr(e.r),this.Jupiter.v.decr(e.v),this.Saturn.r.decr(e.r),this.Saturn.v.decr(e.v),this.Uranus.r.decr(e.r),this.Uranus.v.decr(e.v),this.Neptune.r.decr(e.r),this.Neptune.v.decr(e.v),this.Sun=new Ar(t,e.r.mul(-1),e.v.mul(-1))}Acceleration(t){let e=Gs(t,Ih,this.Sun.r);return e.incr(Gs(t,kc,this.Jupiter.r)),e.incr(Gs(t,Vc,this.Saturn.r)),e.incr(Gs(t,Hc,this.Uranus.r)),e.incr(Gs(t,Gc,this.Neptune.r)),e}}class Ho{constructor(t,e,n,i){this.tt=t,this.r=e,this.v=n,this.a=i}clone(){return new Ho(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class Nf{constructor(t,e){this.bary=t,this.grav=e}}function Do(r,t,e,n){return new Ge(t.x+r*(e.x+r*n.x/2),t.y+r*(e.y+r*n.y/2),t.z+r*(e.z+r*n.z/2))}function Id(r,t,e){return new Ge(t.x+r*e.x,t.y+r*e.y,t.z+r*e.z)}function Zc(r,t){const e=r-t.tt,n=new Vo(r),i=Do(e,t.r,t.v,t.a),s=n.Acceleration(i).mean(t.a),a=Do(e,t.r,t.v,s),o=t.v.add(s.mul(e)),l=n.Acceleration(a),c=new Ho(r,a,o,l);return new Nf(n,c)}const L3=[];function Ff(r,t){const e=Math.floor(r);return e<0?0:e>=t?t-1:e}function Jc(r){const t=D3(r),e=new Vo(t.tt),n=t.r.add(e.Sun.r),i=t.v.add(e.Sun.v),s=e.Acceleration(n),a=new Ho(t.tt,n,i,s);return new Nf(e,a)}function I3(r,t){const e=xr[0][0];if(t<e||t>xr[Kc-1][0])return null;const n=Ff((t-e)/P3,Kc-1);if(!r[n]){const s=r[n]=[];s[0]=Jc(xr[n]).grav,s[_i-1]=Jc(xr[n+1]).grav;let a,o=s[0].tt;for(a=1;a<_i-1;++a)s[a]=Zc(o+=is,s[a-1]).grav;o=s[_i-1].tt;var i=[];for(i[_i-1]=s[_i-1],a=_i-2;a>0;--a)i[a]=Zc(o-=is,i[a+1]).grav;for(a=_i-2;a>0;--a){const l=a/(_i-1);s[a].r=s[a].r.mul(1-l).add(i[a].r.mul(l)),s[a].v=s[a].v.mul(1-l).add(i[a].v.mul(l)),s[a].a=s[a].a.mul(1-l).add(i[a].a.mul(l))}}return r[n]}function Ud(r,t,e){let n=Jc(r);const i=Math.ceil((t-n.grav.tt)/e);for(let s=0;s<i;++s)n=Zc(s+1===i?t:n.grav.tt+e,n.grav);return n}function Of(r,t){let e,n,i;const s=I3(L3,r.tt);if(s){const a=Ff((r.tt-s[0].tt)/is,_i-1),o=s[a],l=s[a+1],c=o.a.mean(l.a),h=Do(r.tt-o.tt,o.r,o.v,c),u=Id(r.tt-o.tt,o.v,c),d=Do(r.tt-l.tt,l.r,l.v,c),p=Id(r.tt-l.tt,l.v,c),_=(r.tt-o.tt)/is;e=h.mul(1-_).add(d.mul(_)),n=u.mul(1-_).add(p.mul(_))}else{let a;r.tt<xr[0][0]?a=Ud(xr[0],r.tt,-is):a=Ud(xr[Kc-1],r.tt,+is),e=a.grav.r,n=a.grav.v,i=a.bary}return i||(i=new Vo(r.tt)),e=e.sub(i.Sun.r),n=n.sub(i.Sun.v),new Xi(e.x,e.y,e.z,n.x,n.y,n.z,r)}function ps(r,t){var e=oi(t);if(r in Mi)return ia(Mi[r],e);if(r===Ut.Pluto){const a=Of(e);return new Be(a.x,a.y,a.z,e)}if(r===Ut.Sun)return new Be(0,0,0,e);if(r===Ut.Moon){var n=ia(Mi.Earth,e),i=ga(e);return new Be(n.x+i.x,n.y+i.y,n.z+i.z,e)}if(r===Ut.EMB){const a=ia(Mi.Earth,e),o=ga(e),l=1+Rf;return new Be(a.x+o.x/l,a.y+o.y/l,a.z+o.z/l,e)}if(r===Ut.SSB)return C3(e);const s=Uh(r);if(s){const a=new T3(s.dec,15*s.ra,s.dist);return H3(a,e)}throw`HelioVector: Unknown body "${r}"`}function U3(r,t){let e=t,n=0;for(let i=0;i<10;++i){const s=r(e),a=s.Length()/Lh;if(a>1)throw"Object is too distant for light-travel solver.";const o=t.AddDays(-a);if(n=Math.abs(o.tt-e.tt),n<1e-9)return s;e=o}throw`Light-travel time solver did not converge: dt = ${n}`}class N3{constructor(t,e,n,i){this.observerBody=t,this.targetBody=e,this.aberration=n,this.observerPos=i}Position(t){this.aberration&&(this.observerPos=ps(this.observerBody,t));const e=ps(this.targetBody,t);return new Be(e.x-this.observerPos.x,e.y-this.observerPos.y,e.z-this.observerPos.z,t)}}function F3(r,t,e,n){Cf(n);const i=oi(r);if(Uh(e)){const o=ps(e,i);if(n){const c=B3(t,i),h=new Be(o.x-c.x,o.y-c.y,o.z-c.z,i),u=Lh/h.Length();return new Be(h.x+c.vx/u,h.y+c.vy/u,h.z+c.vz/u,i)}const l=ps(t,i);return new Be(o.x-l.x,o.y-l.y,o.z-l.z,i)}let s;n?s=new Be(0,0,0,i):s=ps(t,i);const a=new N3(t,e,n,s);return U3(o=>a.Position(o),i)}function Lo(r,t,e){Cf(e);const n=oi(t);switch(r){case Ut.Earth:return new Be(0,0,0,n);case Ut.Moon:return ga(n);default:const i=F3(n,Ut.Earth,r,e);return i.t=n,i}}function O3(r,t){return new Xi(r.r.x,r.r.y,r.r.z,r.v.x,r.v.y,r.v.z,t)}function B3(r,t){const e=oi(t);switch(r){case Ut.Sun:return new Xi(0,0,0,0,0,0,e);case Ut.SSB:const n=new Vo(e.tt);return new Xi(-n.Sun.r.x,-n.Sun.r.y,-n.Sun.r.z,-n.Sun.v.x,-n.Sun.v.y,-n.Sun.v.z,e);case Ut.Mercury:case Ut.Venus:case Ut.Earth:case Ut.Mars:case Ut.Jupiter:case Ut.Saturn:case Ut.Uranus:case Ut.Neptune:const i=jc(Mi[r],e.tt);return O3(i,e);case Ut.Pluto:return Of(e);case Ut.Moon:case Ut.EMB:const s=jc(Mi.Earth,e.tt),a=r==Ut.Moon?If(e):R3(e);return new Xi(a.x+s.r.x,a.y+s.r.y,a.z+s.r.z,a.vx+s.v.x,a.vy+s.v.y,a.vz+s.v.z,e);default:if(Uh(r)){const o=ps(r,e);return new Xi(o.x,o.y,o.z,0,0,0,e)}throw`HelioState: Unsupported body "${r}"`}}function z3(r){for(;r<0;)r+=360;for(;r>=360;)r-=360;return r}function k3(r,t,e){if(r===Ut.Earth||t===Ut.Earth)throw"The Earth does not have a longitude as seen from itself.";const n=oi(e),i=Lo(r,n,!1),s=Ld(i),a=Lo(t,n,!1),o=Ld(a);return z3(s.elon-o.elon)}function V3(r){return k3(Ut.Moon,Ut.Sun,r)}var Nd;(function(r){r[r.Pericenter=0]="Pericenter",r[r.Apocenter=1]="Apocenter"})(Nd||(Nd={}));function H3(r,t){t=oi(t);const e=r.lat*Qi,n=r.lon*Qi,i=r.dist*Math.cos(e);return new Be(i*Math.cos(n),i*Math.sin(n),r.dist*Math.sin(e),t)}var Fd;(function(r){r.Penumbral="penumbral",r.Partial="partial",r.Annular="annular",r.Total="total"})(Fd||(Fd={}));var Od;(function(r){r[r.Invalid=0]="Invalid",r[r.Ascending=1]="Ascending",r[r.Descending=-1]="Descending"})(Od||(Od={}));const Bd=1495978707e-1,ro=-.81;function so(r){const t=new Date(r),e=A3(t),n=Lo(Ut.Moon,t,!0),i=Lo(Ut.Sun,t,!0),s=Math.hypot(n.x,n.y,n.z),a=Math.hypot(i.x,i.y,i.z),o=V3(t),l=We((e.elon-90)*Math.PI/180);return{utcIso:r,moonDistanceKm:Math.round(s*Bd),sunDistanceMkm:+(a*(Bd/1e6)).toFixed(2),moonPhaseDeg:+o.toFixed(1),sunEclipticLonDeg:+e.elon.toFixed(1),seasonAngleRad:l}}const G3=[{id:"makkah-2027-total",utcIso:"2027-08-02T10:25:00Z",dateLabel:{ar:"٢ أغسطس ٢٠٢٧م",en:"2 Aug 2027"},title:{ar:"كسوف القرن الكلي — مكة وجدة",en:"Eclipse of the Century — Makkah & Jeddah"},location:{ar:"جدة · مكة المكرمة · عسير",en:"Jeddah · Makkah · Asir"},camera:"eclipse-align",applyToParams:r=>{const t=so("2027-08-02T10:25:00Z");return r.chapterId=4,r.timeScale=0,r.axialTiltDeg=23.44,r.seasonAngleRad=t.seasonAngleRad,r.earthSpinRad=We(ro+t.seasonAngleRad+.34),r.moonPhaseRad=0,r.moonInclinationDeg=5.14,r.moonNodeRad=0,r.moonDistanceMode="perigee",r.showShadowCones=!0,r.showSolarRays=!1,r.showTidalBulge=!1,r.showTidalLockArrow=!1,{...t,summaryAr:`حساب فلكي دقيق (٢ أغسطس ٢٠٢٧ · ١٣:٢٥ بتوقيت المملكة): القمر في الحضيض (${t.moonDistanceKm.toLocaleString("en-US")} كم) — كسوف كلي تام فوق جدة ومكة المكرمة لأكثر من ٥ دقائق`,summaryEn:`JPL Ephemeris (2 Aug 2027 · 13:25 AST): Perigee Moon (${t.moonDistanceKm.toLocaleString("en-US")} km) — Total Solar Eclipse across Jeddah & Makkah`}}},{id:"alahsa-2019-annular",utcIso:"2019-12-26T03:36:00Z",dateLabel:{ar:"٢٦ ديسمبر ٢٠١٩م",en:"26 Dec 2019"},title:{ar:"حلقة النار التاريخية — الأحساء",en:"Historic Ring of Fire — Al-Ahsa"},location:{ar:"الأحساء · الهفوف · جبل الأربع",en:"Al-Ahsa · Hofuf"},camera:"eclipse-align",applyToParams:r=>{const t=so("2019-12-26T03:36:00Z");return r.chapterId=4,r.timeScale=0,r.axialTiltDeg=23.44,r.seasonAngleRad=t.seasonAngleRad,r.earthSpinRad=We(ro+t.seasonAngleRad-.52),r.moonPhaseRad=0,r.moonInclinationDeg=5.14,r.moonNodeRad=0,r.moonDistanceMode="apogee",r.showShadowCones=!0,r.showSolarRays=!1,r.showTidalBulge=!1,r.showTidalLockArrow=!1,{...t,summaryAr:`حساب فلكي دقيق (٢٦ ديسمبر ٢٠١٩ · ٠٦:٣٦ بتوقيت المملكة): القمر قرب الأوج (${t.moonDistanceKm.toLocaleString("en-US")} كم) — كسوف حلقي «حلقة النار» فوق الأحساء`,summaryEn:`JPL Ephemeris (26 Dec 2019 · 06:36 AST): Apogee Moon (${t.moonDistanceKm.toLocaleString("en-US")} km) — Annular Ring of Fire over Al-Ahsa`}}},{id:"riyadh-2025-bloodmoon",utcIso:"2025-09-07T18:11:00Z",dateLabel:{ar:"٧ سبتمبر ٢٠٢٥م",en:"7 Sep 2025"},title:{ar:"الخسوف الكلي النحاسي — سماء المملكة",en:"Total Lunar Eclipse — Saudi Skies"},location:{ar:"كافة مناطق المملكة",en:"All Saudi Regions"},camera:"eclipse-align",applyToParams:r=>{const t=so("2025-09-07T18:11:00Z");return r.chapterId=4,r.timeScale=0,r.axialTiltDeg=23.44,r.seasonAngleRad=t.seasonAngleRad,r.earthSpinRad=We(ro+t.seasonAngleRad+2.35),r.moonPhaseRad=Math.PI,r.moonInclinationDeg=5.14,r.moonNodeRad=0,r.moonDistanceMode="perigee",r.showShadowCones=!0,r.showSolarRays=!1,r.showTidalBulge=!1,r.showTidalLockArrow=!1,{...t,summaryAr:"حساب فلكي دقيق (٧ سبتمبر ٢٠٢٥ · ٢١:١١ بتوقيت المملكة): دخول البدر كاملاً في ظل الأرض التام وتشتت شفق الغلاف الجوي الأحمر",summaryEn:"JPL Ephemeris (7 Sep 2025 · 21:11 AST): Full Moon immersed in Earth's Umbra across Saudi skies"}}},{id:"alula-ramadan-hilal",utcIso:"2026-02-18T15:15:00Z",dateLabel:{ar:"تحرّي الهلال",en:"Hilāl Sighting"},title:{ar:"رصد هلال رمضان — أفق العُلا",en:"Ramadan Crescent — AlUla Horizon"},location:{ar:"مرصد العُلا الفلكي",en:"AlUla Dark-Sky Reserve"},camera:"moon-orbit",applyToParams:r=>{const t=so("2026-02-18T15:15:00Z");return r.chapterId=3,r.timeScale=0,r.axialTiltDeg=23.44,r.seasonAngleRad=0,r.earthSpinRad=ro+1.48,r.moonPhaseRad=.24,r.moonInclinationDeg=5.14,r.moonNodeRad=Math.PI/2,r.showShadowCones=!1,r.showSolarRays=!1,r.showTidalBulge=!1,r.showTidalLockArrow=!1,{...t,summaryAr:"محمية العُلا للسماء المظلمة (غروب الشمس): استطالة تتجاوز حد دانجون (٧°) تتيح رصد الهلال الوليد بوضوح",summaryEn:"AlUla International Dark-Sky Reserve (Sunset): Elongation clears the 7° Danjon Limit for optical sighting"}}}],W3=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];function Le(r){return String(r).replace(/\d/g,t=>W3[Number(t)]).replace(/\./g,"٫")}function kn(r,t){const e=Math.floor((r%24+24)%24*60),n=Math.floor(e/60)%24,i=e%60;if(t==="en")return`${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")}`;const s=n<12?"ص":"م",a=n%12===0?12:n%12,o=`${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`;return`${Le(o)} ${s}`}const we=(r,t=15)=>`<svg class="ui-ico" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${r}</svg>`,le={observatory:we('<path d="M3 20h18"/><path d="M5 20v-3a7 7 0 0 1 14 0v3"/><path d="M12 10l5-6"/><circle cx="17.5" cy="3.5" r="1.5"/>',16),story:we('<polygon points="6 4 20 12 6 20 6 4"/>',14),lab:we('<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(-24 12 12)"/><path d="M19.5 6.5l1.5-1.5"/>',15),micOn:we('<rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/>',14),micOff:we('<line x1="2" y1="2" x2="22" y2="22"/><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><line x1="12" y1="19" x2="12" y2="22"/>',14),replay:we('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',14),reset:we('<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',14),speakerOn:we('<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',14),speakerOff:we('<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>',14),waveform:we('<path d="M2 12h2"/><path d="M6 8v8"/><path d="M10 4v16"/><path d="M14 7v10"/><path d="M18 9v6"/><path d="M22 12h-2"/>',14),telescope:we('<path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"/><path d="m13.56 11.747 4.332-.924"/><path d="m16 21-3.105-6.21"/><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"/><path d="m6.158 8.633 1.114 4.456"/><path d="m8 21 3.105-6.21"/>',14),expand:we('<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>',13),shrink:we('<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/>',13),check:we('<polyline points="20 6 9 17 4 12"/>',13),calendar:we('<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',13),pause:we('<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',13),play:we('<polygon points="6 4 19 12 6 20 6 4"/>',13),fastForward:we('<polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/>',13),award:we('<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',28)};class X3{constructor(){B(this,"container");B(this,"viewportWrap");B(this,"horizonOverlayEl");B(this,"glRenderer");B(this,"glScene",new y0);B(this,"glCam",new lh(-1,1,1,-1,0,1));B(this,"uniforms");B(this,"badgeEl");B(this,"titleEl");B(this,"coordsEl");B(this,"expandBtn");B(this,"expanded",!1);this.container=document.createElement("div"),this.container.className="telescope-card";const t=document.createElement("div");t.className="telescope-header";const e=document.createElement("div");e.className="telescope-title-group";const n=document.createElement("span");n.className="tel-ico",n.innerHTML=le.telescope,this.titleEl=document.createElement("span"),this.titleEl.className="telescope-title",this.coordsEl=document.createElement("span"),this.coordsEl.className="telescope-coords",this.coordsEl.textContent="26°37′N 37°55′E",e.append(n,this.titleEl);const i=document.createElement("div");i.style.display="inline-flex",i.style.alignItems="center",i.style.gap="8px",this.expandBtn=document.createElement("button"),this.expandBtn.className="telescope-expand-btn",this.expandBtn.addEventListener("click",()=>{this.expanded=!this.expanded,this.container.classList.toggle("expanded",this.expanded)}),i.append(this.coordsEl,this.expandBtn),t.append(e,i),this.viewportWrap=document.createElement("div"),this.viewportWrap.className="telescope-viewport",this.viewportWrap.style.position="relative",this.glRenderer=new S0({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.glRenderer.outputColorSpace=Re,this.glRenderer.toneMapping=Io,this.glRenderer.toneMappingExposure=1.05,this.glRenderer.domElement.className="telescope-canvas",this.horizonOverlayEl=document.createElement("div"),this.horizonOverlayEl.className="horizon-compass-overlay",this.viewportWrap.append(this.glRenderer.domElement,this.horizonOverlayEl),this.badgeEl=document.createElement("div"),this.badgeEl.className="telescope-status-badge",this.container.append(t,this.viewportWrap,this.badgeEl);const s=new fo,a=s.load("./textures/moon-lro-8k.jpg");a.colorSpace=Re,a.wrapS=vs,a.wrapT=ti;const o=s.load("./textures/moon-normal-4k.jpg");o.wrapS=vs,o.wrapT=ti,this.uniforms={uRes:{value:new St(340,185)},uTime:{value:0},uMoonAlbedo:{value:a},uMoonNormal:{value:o},uViewMode:{value:0},uRiyadhHour:{value:6},uDammamHour:{value:6.23},uJeddahHour:{value:5.5},uPhaseRad:{value:.25},uMoonOffset:{value:new St(0,0)},uMoonScale:{value:1.04},uEclipseKind:{value:0},uObscuration:{value:0},uLunarEclipse:{value:0},uSunElevDeg:{value:-4},uDanjonGlare:{value:0}};const l=new ce({uniforms:this.uniforms,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform vec2 uRes;
        uniform float uTime;
        uniform sampler2D uMoonAlbedo;
        uniform sampler2D uMoonNormal;
        uniform float uViewMode;
        uniform float uRiyadhHour;
        uniform float uDammamHour;
        uniform float uJeddahHour;
        uniform float uPhaseRad;
        uniform vec2 uMoonOffset;
        uniform float uMoonScale;
        uniform float uEclipseKind;
        uniform float uObscuration;
        uniform float uLunarEclipse;
        uniform float uSunElevDeg;
        uniform float uDanjonGlare;
        varying vec2 vUv;

        const float PI = 3.14159265359;

        float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * 0.1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
        }

        float noise2(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
            mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x),
            f.y
          );
        }

        float fbm2(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          for (int i = 0; i < 5; i++) {
            v += a * noise2(p);
            p = p * 2.04 + vec2(17.1, -9.3);
            a *= 0.5;
          }
          return v;
        }

        // Map local solar hour (0..24) to normalized UV sky arc:
        // East (06:00 Sunrise) is on the RIGHT (x = 0.84), Solar Noon (12:00) at TOP CENTER (x = 0.50, y = 0.78),
        // West (18:00 Sunset) is on the LEFT (x = 0.16)!
        vec2 sunPosForHour(float hr) {
          float ang = ((hr - 5.25) / 13.5) * PI; // 05:15 Sunrise (East/Right) -> 12:00 Noon (Top) -> 18:45 Sunset (West/Left)
          float x = 0.5 + 0.36 * cos(ang);
          float y = 0.122 + 0.64 * sin(ang);
          return vec2(x, y);
        }

        vec4 sampleLunarSphere(vec2 p, float R, vec3 sunDir, float earthshineAmt, float bloodAmt) {
          float r2 = dot(p, p);
          float R2 = R * R;
          if (r2 > R2) return vec4(0.0);

          float z = sqrt(max(0.0, R2 - r2));
          vec3 N0 = normalize(vec3(p.x, p.y, z));

          float ca = cos(-0.33);
          float sa = sin(-0.33);
          vec3 Nr = vec3(N0.x * ca - N0.y * sa, N0.x * sa + N0.y * ca, N0.z);

          float lon = atan(Nr.x, max(abs(Nr.z), 1e-5) * (Nr.z < 0.0 ? -1.0 : 1.0));
          float lat = asin(clamp(Nr.y, -1.0, 1.0));
          vec2 mUv = vec2(0.5 + lon / (2.0 * PI), 0.5 + lat / PI);

          vec3 albedo = texture2D(uMoonAlbedo, mUv).rgb;
          vec3 tNorm = texture2D(uMoonNormal, mUv).xyz * 2.0 - 1.0;

          vec3 east = normalize(vec3(cos(lon), 0.0, -sin(lon)));
          vec3 north = normalize(cross(Nr, east));
          vec3 N = normalize(Nr + east * tNorm.x * 1.45 + north * tNorm.y * 1.45);

          vec3 Lr = vec3(sunDir.x * ca - sunDir.y * sa, sunDir.x * sa + sunDir.y * ca, sunDir.z);
          float ndotlGeom = dot(Nr, Lr);
          float ndotl = max(dot(N, Lr), 0.0);

          float lit = pow(ndotl, 0.70) * smoothstep(-0.045, 0.065, ndotlGeom);
          vec3 col = albedo * lit * 1.38 + albedo * vec3(0.68, 0.82, 1.08) * earthshineAmt;

          if (bloodAmt > 0.01) {
            float radialGrad = clamp((p.y / R) * 0.5 + 0.5, 0.0, 1.0);
            vec3 copper = mix(vec3(0.45, 0.06, 0.02), vec3(1.05, 0.34, 0.08), radialGrad);
            col = mix(col, albedo * copper * 1.25, bloodAmt * 0.94);
          }

          float dist = sqrt(r2);
          float aa = 1.0 - smoothstep(R - 1.35, R + 0.35, dist);
          return vec4(col, aa);
        }

        void main() {
          vec2 frag = vUv * uRes;
          vec2 center = vec2(uRes.x * 0.5, uRes.y * 0.54);
          vec2 p = frag - center;
          float minDim = min(uRes.x, uRes.y);
          float baseR = minDim * 0.235;

          // 1. Physical Rayleigh + Mie Atmospheric Sky Dome
          float totalityDark = uEclipseKind > 2.5 ? 0.96 : (uEclipseKind > 1.5 ? 0.80 : uObscuration * 0.68);
          float dayT = clamp((uSunElevDeg + 5.0) / 18.0, 0.0, 1.0) * (1.0 - totalityDark);
          float duskT = exp(-pow((uSunElevDeg + 0.5) / 8.0, 2.0)) * (1.0 - totalityDark * 0.45);

          vec3 zenithNight = vec3(0.008, 0.016, 0.042);
          vec3 horizNight = vec3(0.032, 0.058, 0.118);
          vec3 zenithDusk = vec3(0.025, 0.055, 0.155);
          vec3 horizDusk = vec3(0.82, 0.34, 0.08);
          vec3 zenithDay = vec3(0.035, 0.21, 0.48);
          vec3 horizDay = vec3(0.42, 0.72, 0.95);

          float yGrad = pow(clamp(1.0 - vUv.y * 1.12, 0.0, 1.0), 1.75);
          vec3 sky = mix(zenithNight, horizNight, yGrad);
          sky = mix(sky, mix(zenithDusk, horizDusk, pow(yGrad, 1.35)), clamp(duskT, 0.0, 1.0));
          sky = mix(sky, mix(zenithDay, horizDay, yGrad), dayT);

          if (uEclipseKind > 2.5 && uViewMode < 1.5) {
            vec3 totSky = mix(vec3(0.009, 0.018, 0.052), vec3(0.68, 0.29, 0.07), pow(yGrad, 2.6));
            sky = mix(sky, totSky, 0.92);
          }

          sky += vec3(0.95, 0.55, 0.18) * uDanjonGlare * pow(yGrad, 1.2) * 0.65;

          float starVis = clamp(1.0 - dayT * 1.65 - duskT * 0.42, 0.0, 1.0);
          if (starVis > 0.04 && vUv.y > 0.14) {
            vec2 cell = floor(frag / 26.0);
            vec2 local = fract(frag / 26.0) - 0.5;
            float rnd = hash12(cell);
            if (rnd > 0.74) {
              vec2 starOff = (vec2(hash12(cell + 3.1), hash12(cell + 7.7)) - 0.5) * 0.65;
              float dStar = length(local - starOff) * 26.0;
              float tw = 0.72 + 0.28 * sin(uTime * 2.4 + rnd * 30.0);
              float sCore = exp(-dStar * dStar * 0.85) * starVis * tw;
              sky += vec3(0.95, 0.97, 1.0) * sCore * (rnd > 0.93 ? 1.1 : 0.48);
            }

            // Canopus (نجم سُهيل) — brilliant warm-gold diffraction jewel above the southern AlUla horizon!
            vec2 suhailPos = vec2(uRes.x * 0.24, uRes.y * 0.26);
            vec2 ds = frag - suhailPos;
            float suhailCore = exp(-dot(ds, ds) * 0.18) * 1.45;
            float suhailCross = (exp(-abs(ds.x) * 1.1) * exp(-abs(ds.y) * 0.16)
                               + exp(-abs(ds.y) * 1.1) * exp(-abs(ds.x) * 0.16)) * 0.55;
            sky += vec3(1.15, 0.94, 0.62) * (suhailCore + suhailCross) * starVis * (0.82 + 0.18 * sin(uTime * 4.5));

            // Periodic Twilight / Totality Shooting Star streaking across the AlUla sky!
            float mCycle = fract(uTime * 0.16);
            if (mCycle < 0.22) {
              float mp = mCycle / 0.22;
              vec2 mHead = vec2(mix(0.78, 0.32, mp) * uRes.x, mix(0.86, 0.54, mp) * uRes.y);
              vec2 mTail = mHead + vec2(26.0, 18.0);
              vec2 seg = mTail - mHead;
              float hProj = clamp(dot(frag - mHead, seg) / dot(seg, seg), 0.0, 1.0);
              float dLine = length((frag - mHead) - seg * hProj);
              float mGlow = exp(-dLine * dLine * 0.85) * (1.0 - hProj) * sin(mp * PI);
              sky += vec3(1.1, 1.02, 0.78) * mGlow * starVis * 0.95;
            }
          }

          vec3 col = sky;

          // =========================================================================
          // MODE 2: DIURNAL SUN-PATH HORIZON (Dammam -> Riyadh -> Jeddah Sunrise!)
          // =========================================================================
          if (uViewMode > 1.5) {
            // Draw faint dashed diurnal solar arc across the sky from East (right) to West (left)
            float dxArc = (vUv.x - 0.5) / 0.36;
            if (abs(dxArc) <= 1.0) {
              float arcY = 0.125 + 0.64 * sqrt(max(0.0, 1.0 - dxArc * dxArc));
              float dArc = abs(vUv.y - arcY) * uRes.y;
              float dashAng = atan(vUv.y - 0.125, abs(vUv.x - 0.5) < 1e-5 ? 1e-5 : (vUv.x - 0.5));
              float dash = step(0.45, fract(dashAng * 14.0));
              if (vUv.y > 0.11) {
                col += vec3(0.95, 0.82, 0.45) * exp(-dArc * dArc * 0.6) * dash * 0.28;
              }
            }

            vec2 posDammam = sunPosForHour(uDammamHour) * uRes;
            vec2 posRiyadh = sunPosForHour(uRiyadhHour) * uRes;
            vec2 posJeddah = sunPosForHour(uJeddahHour) * uRes;

            // Directional sunrise/sunset horizon glow centered at Riyadh/Dammam sun X!
            float glowDist = length((frag - posRiyadh) / minDim);
            float aboveHoriz = smoothstep(0.04, 0.22, posRiyadh.y / uRes.y);
            float dawnGlow = smoothstep(-0.08, 0.16, posDammam.y / uRes.y);
            col += mix(vec3(1.0, 0.38, 0.08), vec3(1.1, 0.92, 0.65), aboveHoriz)
                 * exp(-glowDist * 2.8) * dawnGlow * 0.65;

            float sR = minDim * 0.068;

            // 1) Jeddah Sun Indicator Ring (Cyan — rises ~30 min after Riyadh)
            float dJed = abs(length(frag - posJeddah) - sR * 0.78);
            if (posJeddah.y > uRes.y * 0.08) {
              col += vec3(0.22, 0.74, 0.98) * exp(-dJed * dJed * 0.55) * 0.85;
            }

            // 2) Dammam Leading Sun Indicator Ring + Halo (Emerald — rises FIRST!)
            float rDam = length(frag - posDammam);
            float dDamRing = abs(rDam - sR * 0.88);
            if (posDammam.y > uRes.y * 0.08) {
              col += vec3(0.20, 0.90, 0.60) * exp(-dDamRing * dDamRing * 0.55) * 0.95;
              col += vec3(1.0, 0.75, 0.30) * exp(-rDam / (sR * 1.5)) * 0.28;
            }

            // 3) Main Blazing Solar Disc (Riyadh Reference Sun)
            float rRiy = length(frag - posRiyadh);
            if (rRiy <= sR + 1.5) {
              float mu = sqrt(max(0.0, 1.0 - min(1.0, (rRiy * rRiy) / (sR * sR))));
              vec3 sunTint = mix(vec3(1.35, 0.45, 0.08), vec3(2.3, 1.95, 1.35), clamp(aboveHoriz * 0.8 + mu * 0.4, 0.0, 1.0));
              float aa = 1.0 - smoothstep(sR - 1.2, sR + 0.4, rRiy);
              col = mix(col, sunTint, aa);
            }
          }
          // =========================================================================
          // MODE 1: SOLAR ECLIPSE OPTICS (MHD Corona + Diamond Ring + Ring of Fire)
          // =========================================================================
          else if (uViewMode > 0.5) {
            float sunR = baseR;
            float moonR = sunR * uMoonScale;
            vec2 mPos = p - uMoonOffset * sunR;
            float rSun = length(p);
            float rMoon = length(mPos);

            float theta = (abs(p.x) < 1e-4 && abs(p.y) < 1e-4) ? 0.0 : atan(p.y, p.x);
            float normR = max(rSun / sunR, 0.001);
            float dipole = 0.68 + 0.32 * cos(theta * 2.0 - 0.25);
            float fineRays = fbm2(vec2(theta * 14.0, log(normR) * 2.2 - uTime * 0.04));
            float microFibers = noise2(vec2(theta * 42.0, normR * 1.5));
            float streamerProfile = (0.55 + 0.45 * fineRays) * (0.78 + 0.22 * microFibers) * dipole;

            float coronaFalloff = exp(-max(normR - 0.96, 0.0) * 1.85) * smoothstep(3.4, 0.95, normR);
            float coronaVis = uEclipseKind > 2.5 ? 1.35 : (uEclipseKind > 1.5 ? 0.42 : 0.25);
            vec3 coronaCol = mix(vec3(0.75, 0.86, 1.0), vec3(1.0, 0.98, 0.94), exp(-max(normR - 1.0, 0.0) * 3.0));

            if (uEclipseKind < 2.5) {
              float glare = exp(-max(normR - 0.85, 0.0) * 2.1) * (1.0 - uObscuration * 0.72);
              col += vec3(1.15, 0.78, 0.35) * glare * 0.68;
            }
            col += coronaCol * streamerProfile * coronaFalloff * coronaVis;

            if (rSun <= sunR + 1.0) {
              float mu = sqrt(max(0.0, 1.0 - min(1.0, (rSun * rSun) / (sunR * sunR))));
              float limb = 0.34 + 0.66 * pow(mu, 0.52);
              float gran = fbm2(p * 0.22 + uTime * 0.08);
              vec3 photo = mix(vec3(1.35, 0.58, 0.12), vec3(2.4, 1.95, 1.25), limb) * (0.92 + 0.14 * gran);
              float sunAA = 1.0 - smoothstep(sunR - 1.2, sunR + 0.4, rSun);
              col = mix(col, photo, sunAA);
            }

            if (uEclipseKind > 2.5) {
              float limbDist = abs(rMoon - moonR);
              float promWave = pow(max(0.0, sin(theta * 7.0 + 1.2) * sin(theta * 11.0 - 0.4)), 4.0);
              float promGlow = exp(-limbDist * 0.45) * promWave * step(moonR * 0.96, rMoon);
              col += vec3(1.45, 0.18, 0.36) * promGlow * 0.95;
            }

            vec4 moonSample = sampleLunarSphere(mPos, moonR, vec3(0.0, 0.0, -1.0), 0.022, 0.0);
            if (moonSample.a > 0.001) {
              col = mix(col, moonSample.rgb, moonSample.a);
            }

            if (uEclipseKind > 2.5) {
              vec2 diamondPt = uMoonOffset * sunR + vec2(cos(0.68), sin(0.68)) * (moonR * 0.985);
              vec2 dp = p - diamondPt;
              float dCore = exp(-dot(dp, dp) / (sunR * sunR * 0.035));
              float anamorphicStreak = exp(-abs(dp.y) * 0.42) * exp(-abs(dp.x) / (sunR * 1.65));
              float diagRay = exp(-abs(dp.x * 0.7 - dp.y * 0.7) * 0.35) * exp(-length(dp) / (sunR * 0.9));
              col += vec3(2.2, 2.05, 1.75) * dCore * 1.35;
              col += vec3(0.85, 0.92, 1.25) * anamorphicStreak * 0.65;
              col += vec3(1.2, 1.05, 0.85) * diagRay * 0.42;
            }
          }
          // =========================================================================
          // MODE 0: LUNAR PHASE, RAMADAN HILAL & BLOOD MOON
          // =========================================================================
          else {
            float moonR = baseR * 1.12;
            float rNorm = length(p) / moonR;
            float illumApprox = 0.5 * (1.0 - cos(uPhaseRad));
            vec3 haloTint = uLunarEclipse > 0.1 ? vec3(0.85, 0.18, 0.06) : vec3(0.92, 0.94, 1.0);
            col += haloTint * exp(-max(rNorm - 0.92, 0.0) * 2.4) * (0.06 + 0.18 * illumApprox);

            vec3 sunDir = normalize(vec3(sin(uPhaseRad), 0.06, -cos(uPhaseRad)));
            float earthshine = uDanjonGlare > 0.3 ? 0.008 : 0.036;
            vec4 moonSample = sampleLunarSphere(p, moonR, sunDir, earthshine, uLunarEclipse);
            if (moonSample.a > 0.001) {
              col = mix(col, moonSample.rgb * (1.0 - uDanjonGlare * 0.65), moonSample.a);
            }
          }

          // 3. Sculpted Saudi Sandstone Horizon & Jabal AlFil Silhouette (Occludes Sun below horizon!)
          float nx = vUv.x;
          float farRidge = 0.132 + 0.024 * sin(nx * 8.5 + 0.7) + 0.012 * fbm2(vec2(nx * 22.0, 1.4));
          if (vUv.y < farRidge) {
            vec3 ridgeCol = mix(vec3(0.025, 0.022, 0.034), sky * 0.42, 0.38);
            col = mix(col, ridgeCol, smoothstep(farRidge, farRidge - 0.006, vUv.y));
          }

          float mesaLeft = smoothstep(0.06, 0.095, nx) * (1.0 - smoothstep(0.20, 0.235, nx)) * 0.065;
          float mesaRight = smoothstep(0.79, 0.815, nx) * (1.0 - smoothstep(0.91, 0.935, nx)) * 0.085;
          float cragDetail = (fbm2(vec2(nx * 48.0, 3.7)) - 0.5) * 0.010;
          float nearH = 0.088 + (uViewMode > 1.5 ? mesaLeft * 0.45 : mesaLeft + mesaRight) + cragDetail;

          float keyhole = uViewMode < 1.5
            ? smoothstep(0.838, 0.846, nx) * (1.0 - smoothstep(0.862, 0.870, nx))
              * smoothstep(0.088, 0.096, vUv.y) * (1.0 - smoothstep(0.140, 0.148, vUv.y))
            : 0.0;

          if (vUv.y < nearH && keyhole < 0.5) {
            float rimLit = smoothstep(nearH - 0.014, nearH, vUv.y);
            vec3 sandSil = vec3(0.012, 0.011, 0.016) + sky * rimLit * 0.22;
            col = mix(col, sandSil, smoothstep(nearH, nearH - 0.005, vUv.y));
          }

          // 4. Precision Optical Telescope Reticle (in Lunar/Eclipse modes) & Vignette
          if (uViewMode < 1.5) {
            float rRet = length(p);
            float ringR = baseR * 1.56;
            float ringLine = exp(-pow(abs(rRet - ringR), 2.0) * 1.2);
            float crossHair = (exp(-abs(p.x) * 1.8) * step(ringR * 0.82, abs(p.y)) * step(abs(p.y), ringR * 1.12))
                            + (exp(-abs(p.y) * 1.8) * step(ringR * 0.82, abs(p.x)) * step(abs(p.x), ringR * 1.12));
            col += vec3(0.55, 0.72, 0.92) * (ringLine * 0.14 + crossHair * 0.18);
          }

          float vig = 1.0 - smoothstep(0.52, 0.98, length((vUv - 0.5) * vec2(1.05, 1.15)));
          col *= 0.78 + 0.22 * vig;

          gl_FragColor = vec4(col, 1.0);
        }
      `}),c=new ee(new va(2,2),l);this.glScene.add(c)}setVisibleAndSize(t,e){this.container.style.display=t?"block":"none",this.expanded=e,this.container.classList.toggle("expanded",e)}render(t,e,n,i){const s=t.chapterId===1,a=!s&&(e.solarEclipse!=="none"||t.chapterId===4&&e.moonElongationDeg<22);this.titleEl.textContent=s?n==="ar"?"أفق المملكة: مسار الشمس (الدمام ← الرياض ← جدة)":"Saudi Horizon: Sun Motion (Dammam → Riyadh → Jeddah)":n==="ar"?"تلسكوب أفق العُلا البصري":"AlUla Optical Sky Telescope",this.coordsEl.textContent=s?"50.1°E → 39.2°E":"26°37′N 37°55′E",this.expandBtn.innerHTML=this.expanded?`${le.shrink}<span>${n==="ar"?"تصغير":"Compact"}</span>`:`${le.expand}<span>${n==="ar"?"تكبير":"Expand"}</span>`,s?(this.horizonOverlayEl.style.display="flex",this.horizonOverlayEl.innerHTML=n==="ar"?`<span class="hz-dir">الشرق (الشروق)</span>
             <span class="hz-legend"><i class="dot-dam"></i>الدمام <i class="dot-riy"></i>الرياض <i class="dot-jed"></i>جدة</span>
             <span class="hz-dir">الغرب (الغروب)</span>`:`<span class="hz-dir">West (Sunset)</span>
             <span class="hz-legend"><i class="dot-dam"></i>Dammam <i class="dot-riy"></i>Riyadh <i class="dot-jed"></i>Jeddah</span>
             <span class="hz-dir">East (Sunrise)</span>`):this.horizonOverlayEl.style.display="none";const o=this.viewportWrap.getBoundingClientRect(),l=Math.max(240,Math.round(o.width||330)),c=Math.max(150,Math.round(o.height||185)),h=Math.min(window.devicePixelRatio||1,2),u=new St;this.glRenderer.getSize(u),(u.x!==l||u.y!==c||this.glRenderer.getPixelRatio()!==h)&&(this.glRenderer.setPixelRatio(h),this.glRenderer.setSize(l,c,!1)),this.uniforms.uRes.value.set(l*h,c*h),this.uniforms.uTime.value=i,this.uniforms.uViewMode.value=s?2:a?1:0,this.uniforms.uRiyadhHour.value=e.riyadhLocalHour,this.uniforms.uDammamHour.value=e.dammamLocalHour,this.uniforms.uJeddahHour.value=e.jeddahLocalHour,this.uniforms.uPhaseRad.value=We(t.moonPhaseRad);let d=We(t.moonPhaseRad);d>Math.PI&&(d-=Math.PI*2);const p=d/.28*2.05,_=e.moonEclipticLatDeg/5.14*1.25;this.uniforms.uMoonOffset.value.set(p,_),this.uniforms.uMoonScale.value=t.moonDistanceMode==="perigee"?1.035:.915;const g=e.solarEclipse==="total"?3:e.solarEclipse==="annular"?2:e.solarEclipse==="partial"?1:0;this.uniforms.uEclipseKind.value=g,this.uniforms.uObscuration.value=e.solarObscurationPct/100,this.uniforms.uLunarEclipse.value=e.lunarEclipse==="total"?1:e.lunarEclipse==="partial"?e.lunarShadowPct/100*.75:0;const m=t.chapterId===4&&!a&&(e.lunarEclipse!=="none"||e.moonElongationDeg>110);this.uniforms.uSunElevDeg.value=t.chapterId===3?-2.2:m?Math.min(e.riyadhSunElevationDeg,-12):e.riyadhSunElevationDeg,this.uniforms.uDanjonGlare.value=t.chapterId===3&&e.hilalStatus==="too-close"?Kn(1-e.moonElongationDeg/7.5,0,1):0,this.glRenderer.render(this.glScene,this.glCam),this.updateBadgeText(t,e,n,a,s)}updateBadgeText(t,e,n,i,s){if(this.badgeEl.className="telescope-status-badge",s){const a=e.dammamLocalHour>=5.25&&e.dammamLocalHour<=18.75,o=e.riyadhLocalHour>=5.25&&e.riyadhLocalHour<=18.75,l=e.jeddahLocalHour>=5.25&&e.jeddahLocalHour<=18.75;if(a&&!l){this.badgeEl.classList.add("badge-gold"),this.badgeEl.textContent=n==="ar"?`أشرقت الشمس في الدمام (${kn(e.dammamLocalHour,"ar")}) وما زالت دون الأفق في جدة (${kn(e.jeddahLocalHour,"ar")})`:`Sun has risen in Dammam (${kn(e.dammamLocalHour,"en")}) while Jeddah (${kn(e.jeddahLocalHour,"en")}) awaits dawn`;return}if(o){this.badgeEl.classList.add("badge-emerald"),this.badgeEl.textContent=n==="ar"?Le(`نهار ساطع فوق المملكة · ارتفاع الشمس بالرياض ${e.riyadhSunElevationDeg}°`):`Daylight across Saudi Arabia · Riyadh Solar Elevation ${e.riyadhSunElevationDeg}°`;return}this.badgeEl.textContent=n==="ar"?"ليل المملكة — أدر الأرض نحو الشرق لمراقبة شروق الشمس من الدمام فـالرياض فـجدة":"Night over Saudi Arabia — Rotate Earth eastward to watch sunrise sweep Dammam → Riyadh → Jeddah";return}if(e.solarEclipse==="total"){this.badgeEl.classList.add("badge-gold"),this.badgeEl.textContent=n==="ar"?"كسوف شمسي كلي (١٠٠٪) — ظهور الإكليل المغناطيسي وخاتم الألماس":"Total Solar Eclipse (100%) — Magnetic Corona & Diamond Ring";return}if(e.solarEclipse==="annular"){this.badgeEl.classList.add("badge-gold"),this.badgeEl.textContent=n==="ar"?"كسوف حلقي «حلقة النار» — القمر في الأوج (٤٠٦٬٧٠٠ كم)":'Annular "Ring of Fire" Eclipse — Moon at Apogee (406,700 km)';return}if(e.solarEclipse==="partial"){this.badgeEl.textContent=n==="ar"?Le(`كسوف جزئي (${e.solarObscurationPct}٪) — حاذِ عقدة المدار ٠° للكسوف الكلي`):`Partial Solar Eclipse (${e.solarObscurationPct}%) — Align 0° Node for Totality`;return}if(i&&Math.abs(e.moonEclipticLatDeg)>1.8){this.badgeEl.textContent=n==="ar"?Le(`عبور قمري بزاوية ${e.moonEclipticLatDeg}° — ميل المدار ٥٫١٤° يمنع الكسوف`):`Lunar pass offset ${e.moonEclipticLatDeg}° — 5.14° orbital tilt skips eclipse`;return}if(e.lunarEclipse==="total"){this.badgeEl.classList.add("badge-crimson"),this.badgeEl.textContent=n==="ar"?"خسوف قمري كلي — انكسار الطيف الأحمر عبر الغلاف الجوي للأرض":"Total Lunar Eclipse — Rayleigh Refraction Inside Earth’s Umbra";return}if(t.chapterId===3&&(e.hilalStatus==="naked-eye"||e.hilalStatus==="telescope-only")){this.badgeEl.classList.add("badge-emerald"),this.badgeEl.textContent=n==="ar"?Le(e.hilalStatusLabel.ar):e.hilalStatusLabel.en;return}if(t.chapterId===3&&e.hilalStatus==="too-close"){this.badgeEl.textContent=n==="ar"?Le(e.hilalStatusLabel.ar):e.hilalStatusLabel.en;return}this.badgeEl.textContent=n==="ar"?Le(`${e.phaseName.ar} · الإضاءة ${e.moonIlluminationPct}٪ · اليوم القمري ${e.lunarDayHijri}`):`${e.phaseName.en} · Illuminated ${e.moonIlluminationPct}% · Day ${e.lunarDayHijri}`}}class q3{constructor(t,e){B(this,"lang","ar");B(this,"mode","story");B(this,"cb");B(this,"telescopeView");B(this,"introCurtainEl");B(this,"introKickerEl");B(this,"introTitleEl");B(this,"introSubtitleEl");B(this,"introStartBtn");B(this,"introLabBtn");B(this,"cityPinsLayerEl");B(this,"cityPinEls",new Map);B(this,"callout3dEl");B(this,"calloutTextEl");B(this,"brandTextEl");B(this,"brandSubEl");B(this,"storyStepperEl");B(this,"storyDotBtns",[]);B(this,"chapterTabsEl");B(this,"chapterBtns",new Map);B(this,"titleBannerEl");B(this,"objectivesStripEl");B(this,"ephemerisBarEl");B(this,"ephemerisReadoutEl");B(this,"activeEphemerisText",null);B(this,"lastObjSig","");B(this,"modeSwitchBtn");B(this,"studioVoiceBtn");B(this,"voiceToggleBtn");B(this,"replayVoiceBtn");B(this,"speedBtn");B(this,"resetBtn");B(this,"soundBtn");B(this,"soundOn",!0);B(this,"langBtn");B(this,"studioModalEl");B(this,"studioKeyInput");B(this,"studioVoiceSelect");B(this,"studioStatusEl");B(this,"narratorStatus","idle");B(this,"storyTheaterEl");B(this,"voiceBarsEl");B(this,"narratorLabelEl");B(this,"storyInlineTelEl");B(this,"storyProseEl");B(this,"riddleContainerEl");B(this,"promptBoxEl");B(this,"promptTextEl");B(this,"assistBtn");B(this,"prevSceneBtn");B(this,"nextSceneBtn");B(this,"renderedSceneSig","");B(this,"labConsoleEl");B(this,"dragHintEl");B(this,"telemetryEl");B(this,"lastTelSig","");B(this,"expDockEl");B(this,"renderedDockKey","");B(this,"suhailCardEl");B(this,"labVoiceBarsEl");B(this,"suhailCodeEl");B(this,"suhailNameEl");B(this,"suhailBodyEl");B(this,"mythTitleEl");B(this,"mythTextEl");B(this,"certModalEl");B(this,"certTitleEl");B(this,"certBodyEl");B(this,"certReplayBtn");B(this,"certLabBtn");this.cb=e;const n=new URLSearchParams(window.location.search).get("lang");(n==="en"||n==="ar")&&(this.lang=n,document.documentElement.lang=this.lang,document.documentElement.dir=this.lang==="ar"?"rtl":"ltr"),this.telescopeView=new X3,this.buildDOM(t),this.refreshStaticLabels(),this.applyModeVisibility()}getLang(){return this.lang}setNarratorSpeaking(t,e="idle"){var n;this.narratorStatus=e,this.voiceBarsEl.classList.toggle("speaking",t),(n=this.labVoiceBarsEl)==null||n.classList.toggle("speaking",t)}hideIntroCurtain(){this.introCurtainEl.classList.add("hidden")}setMode(t){this.mode=t,this.renderedSceneSig="",this.applyModeVisibility(),this.refreshStaticLabels()}configureTelescopeForScene(t,e){this.telescopeView.setVisibleAndSize(t,e)}openStudioVoiceModal(){const t=this.cb.getStudioConfig();this.studioKeyInput.value=t.apiKey,this.populateStudioVoiceDropdown(t.voiceId,t.customVoiceId),this.studioStatusEl.textContent=t.apiKey?"مفتاح Google AI Studio الاختياري مفعّل.":"يعمل صوت الاستوديو المدمج (عربي وإنجليزي · 44.1 kHz / -16 LUFS) تلقائياً بدون مفتاح.",this.studioStatusEl.style.color="#93c5fd",this.studioModalEl.classList.remove("hidden")}populateStudioVoiceDropdown(t,e){if(this.studioVoiceSelect.innerHTML="",e){const n=document.createElement("option");n.value=e,n.textContent=this.lang==="ar"?`صوت سُهيل المخصص (${e})`:`Custom Suhail Voice (${e})`,this.studioVoiceSelect.appendChild(n)}for(const n of hv){const i=document.createElement("option");i.value=n.id,i.textContent=this.lang==="ar"?n.labelAr:n.labelEn,this.studioVoiceSelect.appendChild(i)}this.studioVoiceSelect.value=t||e||"Sadaltager"}openFinaleCertificate(){this.certTitleEl.textContent=this.lang==="ar"?"شهادة إتمام البرنامج الفلكي — مرصد سُهيل":"Suhail Astronomical Observatory — Completion Credential",this.certBodyEl.textContent=this.lang==="ar"?"أتممتَ بنجاح الفصول الخمسة للرحلة الفلكية التفاعلية: الدوران المحوري ومواقيت مدن المملكة، فيزياء الفصول الأربعة ومدار السرطان، علم تحرّي الأهلة من أفق العُلا، هندسة الكسوف الكلي وحلقة النار في الأحساء، والجاذبية التفاضلية للمدّ والجزر.":"You have completed all five observational modules: axial rotation across Saudi longitudes, solar flux along the Tropic of Cancer, AlUla crescent elongation, Total & Annular eclipse geometry, and differential tidal mechanics.",this.certReplayBtn.innerHTML=`${le.replay}<span>${this.lang==="ar"?"إعادة الرحلة المروية":"Replay Guided Sequence"}</span>`,this.certLabBtn.innerHTML=`${le.lab}<span>${this.lang==="ar"?"الانتقال إلى المختبر الفلكي":"Open Astrophysical Lab"}</span>`,this.certModalEl.classList.remove("hidden")}buildDOM(t){this.introCurtainEl=document.createElement("div"),this.introCurtainEl.className="intro-curtain",this.introCurtainEl.innerHTML=`
      <div class="intro-card">
        <div class="intro-kicker"></div>
        <h1 class="intro-title"></h1>
        <p class="intro-subtitle"></p>
        <div class="intro-actions">
          <button class="intro-start-btn"></button>
          <button class="intro-lab-btn intro-free-btn"></button>
        </div>
      </div>
    `,this.introKickerEl=this.introCurtainEl.querySelector(".intro-kicker"),this.introTitleEl=this.introCurtainEl.querySelector(".intro-title"),this.introSubtitleEl=this.introCurtainEl.querySelector(".intro-subtitle"),this.introStartBtn=this.introCurtainEl.querySelector(".intro-start-btn"),this.introLabBtn=this.introCurtainEl.querySelector(".intro-free-btn"),this.introStartBtn.addEventListener("click",()=>this.cb.onStartStoryJourney()),this.introLabBtn.addEventListener("click",()=>this.cb.onEnterFreeLab()),this.cityPinsLayerEl=document.createElement("div"),this.cityPinsLayerEl.className="city-pins-layer";for(const l of["dammam","riyadh","jeddah"]){const c=document.createElement("div");c.className="city-pin",c.style.display="none",this.cityPinsLayerEl.appendChild(c),this.cityPinEls.set(l,c)}this.callout3dEl=document.createElement("div"),this.callout3dEl.className="callout-3d",this.callout3dEl.innerHTML='<span class="callout-dot"></span><span class="callout-lbl"></span>',this.calloutTextEl=this.callout3dEl.querySelector(".callout-lbl");const e=document.createElement("div");e.className="hud-shell";const n=document.createElement("div");n.className="top-nav";const i=document.createElement("div");i.className="brand-pill",i.innerHTML=`
      <span class="brand-ico">${le.observatory}</span>
      <div class="brand-col">
        <span class="brand-text"></span>
        <span class="brand-sub"></span>
      </div>
    `,this.brandTextEl=i.querySelector(".brand-text"),this.brandSubEl=i.querySelector(".brand-sub");const s=document.createElement("div");s.className="center-mission-stack",this.storyStepperEl=document.createElement("div"),this.storyStepperEl.className="story-stepper-bar",Ae.forEach((l,c)=>{const h=document.createElement("button");h.className="story-dot",h.title=l.sceneTitle.ar,h.addEventListener("click",()=>this.cb.onSelectStoryScene(c)),this.storyStepperEl.appendChild(h),this.storyDotBtns.push(h)}),this.chapterTabsEl=document.createElement("div"),this.chapterTabsEl.className="chapter-tabs",[1,2,3,4,5].forEach(l=>{const c=document.createElement("button");c.className="chapter-tab-btn",c.addEventListener("click",()=>{this.activeEphemerisText=null,this.cb.onSelectChapter(l)}),this.chapterTabsEl.appendChild(c),this.chapterBtns.set(l,c)}),this.ephemerisBarEl=document.createElement("div"),this.ephemerisBarEl.className="ephemeris-events-bar",this.rebuildEphemerisEventButtons(),this.titleBannerEl=document.createElement("div"),this.titleBannerEl.className="chapter-title-banner",this.ephemerisReadoutEl=document.createElement("div"),this.ephemerisReadoutEl.className="ephemeris-readout-banner",this.ephemerisReadoutEl.style.display="none",this.objectivesStripEl=document.createElement("div"),this.objectivesStripEl.className="objectives-strip",s.append(this.storyStepperEl,this.chapterTabsEl,this.ephemerisBarEl,this.titleBannerEl,this.ephemerisReadoutEl,this.objectivesStripEl);const a=document.createElement("div");a.className="util-bar",this.modeSwitchBtn=document.createElement("button"),this.modeSwitchBtn.className="util-btn mode-switch",this.modeSwitchBtn.addEventListener("click",()=>this.cb.onToggleMode()),this.studioVoiceBtn=document.createElement("button"),this.studioVoiceBtn.className="util-btn studio-badge-btn",this.studioVoiceBtn.addEventListener("click",()=>this.openStudioVoiceModal()),this.voiceToggleBtn=document.createElement("button"),this.voiceToggleBtn.className="util-btn voice-active",this.voiceToggleBtn.addEventListener("click",()=>{const l=this.cb.onToggleNarratorVoice();this.voiceToggleBtn.classList.toggle("voice-active",l),this.refreshStaticLabels()}),this.replayVoiceBtn=document.createElement("button"),this.replayVoiceBtn.className="util-btn",this.replayVoiceBtn.addEventListener("click",()=>this.cb.onReplayNarration()),this.speedBtn=document.createElement("button"),this.speedBtn.className="util-btn",this.speedBtn.addEventListener("click",()=>this.cb.onCycleTimeSpeed()),this.resetBtn=document.createElement("button"),this.resetBtn.className="util-btn",this.resetBtn.addEventListener("click",()=>{this.activeEphemerisText=null,this.ephemerisReadoutEl.style.display="none",this.cb.onResetCurrent()}),this.soundBtn=document.createElement("button"),this.soundBtn.className="util-btn icon-only",this.soundBtn.innerHTML=le.speakerOn,this.soundBtn.addEventListener("click",()=>{this.soundOn=this.cb.onToggleSound(),this.soundBtn.innerHTML=this.soundOn?le.speakerOn:le.speakerOff}),this.langBtn=document.createElement("button"),this.langBtn.className="util-btn mono-pill",this.langBtn.addEventListener("click",()=>{this.lang=this.lang==="ar"?"en":"ar",document.documentElement.lang=this.lang,document.documentElement.dir=this.lang==="ar"?"rtl":"ltr",this.renderedSceneSig="",this.renderedDockKey="",this.lastObjSig="",this.lastTelSig="",this.rebuildEphemerisEventButtons(),this.refreshStaticLabels(),this.cb.onReplayNarration()}),a.append(this.modeSwitchBtn,this.studioVoiceBtn,this.voiceToggleBtn,this.replayVoiceBtn,this.speedBtn,this.resetBtn,this.soundBtn,this.langBtn),n.append(i,s,a);const o=document.createElement("div");o.className="bottom-deck-row",this.storyTheaterEl=document.createElement("div"),this.storyTheaterEl.className="story-theater-card",this.storyTheaterEl.innerHTML=`
      <div class="theater-header">
        <div class="narrator-identity">
          <div class="voice-bars"><span></span><span></span><span></span><span></span></div>
          <span class="narrator-label"></span>
        </div>
        <div class="story-telemetry-inline"></div>
      </div>
      <p class="story-prose"></p>
      <div class="riddle-choices"></div>
      <div class="story-prompt-box">
        <span class="story-prompt-text"></span>
        <button class="assist-action-btn"></button>
      </div>
      <div class="theater-controls-row">
        <button class="nav-step-btn prev-scene-btn"></button>
        <button class="next-scene-hero-btn"></button>
      </div>
    `,this.voiceBarsEl=this.storyTheaterEl.querySelector(".voice-bars"),this.narratorLabelEl=this.storyTheaterEl.querySelector(".narrator-label"),this.storyInlineTelEl=this.storyTheaterEl.querySelector(".story-telemetry-inline"),this.storyProseEl=this.storyTheaterEl.querySelector(".story-prose"),this.riddleContainerEl=this.storyTheaterEl.querySelector(".riddle-choices"),this.promptBoxEl=this.storyTheaterEl.querySelector(".story-prompt-box"),this.promptTextEl=this.storyTheaterEl.querySelector(".story-prompt-text"),this.assistBtn=this.storyTheaterEl.querySelector(".assist-action-btn"),this.prevSceneBtn=this.storyTheaterEl.querySelector(".prev-scene-btn"),this.nextSceneBtn=this.storyTheaterEl.querySelector(".next-scene-hero-btn"),this.assistBtn.addEventListener("click",()=>this.cb.onTriggerSceneAssist()),this.labConsoleEl=document.createElement("div"),this.labConsoleEl.className="instrument-console",this.dragHintEl=document.createElement("div"),this.dragHintEl.className="drag-hint-pill",this.telemetryEl=document.createElement("div"),this.telemetryEl.className="telemetry-readout",this.expDockEl=document.createElement("div"),this.expDockEl.className="experiment-buttons-dock",this.labConsoleEl.append(this.dragHintEl,this.telemetryEl,this.expDockEl),this.suhailCardEl=document.createElement("div"),this.suhailCardEl.className="suhail-card",this.suhailCardEl.innerHTML=`
      <div class="suhail-top">
        <div class="narrator-identity">
          <div class="voice-bars lab-voice-bars"><span></span><span></span><span></span><span></span></div>
          <span class="suhail-name"></span>
        </div>
        <span class="suhail-code"></span>
      </div>
      <div class="suhail-body"></div>
      <div class="myth-box">
        <div class="myth-title"></div>
        <div class="myth-text"></div>
      </div>
    `,this.labVoiceBarsEl=this.suhailCardEl.querySelector(".lab-voice-bars"),this.suhailNameEl=this.suhailCardEl.querySelector(".suhail-name"),this.suhailCodeEl=this.suhailCardEl.querySelector(".suhail-code"),this.suhailBodyEl=this.suhailCardEl.querySelector(".suhail-body"),this.mythTitleEl=this.suhailCardEl.querySelector(".myth-title"),this.mythTextEl=this.suhailCardEl.querySelector(".myth-text"),o.append(this.telescopeView.container,this.storyTheaterEl,this.labConsoleEl,this.suhailCardEl),e.append(n,o),this.certModalEl=document.createElement("div"),this.certModalEl.className="quiz-overlay hidden",this.certModalEl.innerHTML=`
      <div class="quiz-dialog">
        <div class="cert-icon">${le.award}</div>
        <h2 class="cert-title"></h2>
        <p class="cert-body"></p>
        <div class="cert-actions">
          <button class="cta-btn glass cert-replay"></button>
          <button class="cta-btn gold cert-lab"></button>
        </div>
      </div>
    `,this.certTitleEl=this.certModalEl.querySelector(".cert-title"),this.certBodyEl=this.certModalEl.querySelector(".cert-body"),this.certReplayBtn=this.certModalEl.querySelector(".cert-replay"),this.certLabBtn=this.certModalEl.querySelector(".cert-lab"),this.certReplayBtn.addEventListener("click",()=>{this.certModalEl.classList.add("hidden"),this.cb.onSelectStoryScene(0)}),this.certLabBtn.addEventListener("click",()=>{this.certModalEl.classList.add("hidden"),this.cb.onEnterFreeLab()}),this.studioModalEl=document.createElement("div"),this.studioModalEl.className="quiz-overlay hidden",this.studioModalEl.innerHTML=`
      <div class="studio-voice-dialog">
        <div class="quiz-ref">Studio Binaural Soundscape · 44.1 kHz · -16 LUFS</div>
        <h2 class="cert-title" style="text-align:start;font-size:1.12rem;margin-bottom:8px;">محرّك التعليق الصوتي الوثائقي</h2>
        <p style="font-size:0.82rem;color:#94a3b8;line-height:1.65;margin-bottom:14px;">
          يعمل السرد الصوتي الوثائقي باللغتين العربية والإنجليزية افتراضياً بدون إنترنت أو مفاتيح عبر المسارات الصوتية المدمجة بجودة استوديو (44.1 kHz ومعايرة -16 LUFS مع مؤثرات فضائية محيطية). ويمكنك اختيارياً تجربة التوليد السحابي عبر إدخال مفتاح Google AI Studio أدناه:
        </p>
        <div class="studio-field">
          <label>مفتاح Google AI Studio (اختياري)</label>
          <input type="password" class="studio-input" placeholder="اتركه فارغاً لاستخدام صوت الاستوديو المدمج" autocomplete="off" />
        </div>
        <div class="studio-field">
          <label>نبرة الراوي السحابي</label>
          <select class="studio-select"></select>
        </div>
        <div class="studio-status-msg"></div>
        <div class="cert-actions" style="justify-content:space-between;">
          <button class="cta-btn glass studio-design-btn">تصميم صوت مخصص (Voice Design)</button>
          <div style="display:flex;gap:8px;">
            <button class="cta-btn glass studio-cancel-btn">إغلاق</button>
            <button class="cta-btn gold studio-save-btn">حفظ الإعدادات</button>
          </div>
        </div>
      </div>
    `,this.studioKeyInput=this.studioModalEl.querySelector(".studio-input"),this.studioVoiceSelect=this.studioModalEl.querySelector(".studio-select"),this.studioStatusEl=this.studioModalEl.querySelector(".studio-status-msg"),this.studioModalEl.querySelector(".studio-cancel-btn").addEventListener("click",()=>{this.studioModalEl.classList.add("hidden")}),this.studioModalEl.querySelector(".studio-design-btn").addEventListener("click",async()=>{const l=this.studioKeyInput.value.trim();if(l.length<15){this.studioStatusEl.style.color="#fca5a5",this.studioStatusEl.textContent="يرجى إدخال مفتاح Google AI Studio أولاً.";return}this.studioStatusEl.style.color="#fde047",this.studioStatusEl.textContent="جاري توليد بصمة الصوت عبر Gemini Voice Design...";try{const c=await this.cb.onDesignCustomSuhailVoice(l);this.populateStudioVoiceDropdown(c.voiceId,c.voiceId),this.studioStatusEl.style.color="#86efac",this.studioStatusEl.textContent=`تم حفظ بصمة الصوت (${c.voiceId}).`,this.refreshStaticLabels(),c.previewUrl&&new Audio(c.previewUrl).play()}catch(c){this.studioStatusEl.style.color="#fca5a5",this.studioStatusEl.textContent=`تعذّر تصميم الصوت: ${c.message}`}}),this.studioModalEl.querySelector(".studio-save-btn").addEventListener("click",()=>{const l=this.studioKeyInput.value.trim(),c=this.studioVoiceSelect.value||"Sadaltager";this.cb.onSaveStudioVoice(l,c),this.refreshStaticLabels(),this.studioModalEl.classList.add("hidden")}),t.append(this.introCurtainEl,this.cityPinsLayerEl,this.callout3dEl,e,this.certModalEl,this.studioModalEl)}rebuildEphemerisEventButtons(){this.ephemerisBarEl.innerHTML="";const t=document.createElement("span");t.className="ephem-bar-label",t.innerHTML=`${le.calendar}<span>${this.lang==="ar"?"أرشيف سماء المملكة (JPL):":"Saudi Ephemeris (JPL):"}</span>`,this.ephemerisBarEl.appendChild(t);for(const e of G3){const n=document.createElement("button");n.className="ephem-event-btn",n.innerHTML=`<span class="ephem-date">${e.dateLabel[this.lang]}</span><span>${e.title[this.lang]}</span>`,n.addEventListener("click",()=>{const i=this.cb.onSelectSaudiEvent(e);this.activeEphemerisText={ar:Le(i.summaryAr),en:i.summaryEn},this.ephemerisReadoutEl.textContent=this.activeEphemerisText[this.lang],this.ephemerisReadoutEl.style.display="block",this.renderedDockKey=""}),this.ephemerisBarEl.appendChild(n)}}applyModeVisibility(){const t=this.mode==="story";this.storyStepperEl.style.display=t?"flex":"none",this.storyTheaterEl.style.display=t?"block":"none",this.voiceToggleBtn.style.display="inline-flex",this.replayVoiceBtn.style.display="inline-flex",this.callout3dEl.style.display=t?"inline-flex":"none",this.chapterTabsEl.style.display=t?"none":"flex",this.ephemerisBarEl.style.display=t?"none":"flex",this.objectivesStripEl.style.display=t?"none":"flex",this.labConsoleEl.style.display=t?"none":"flex",this.suhailCardEl.style.display=t?"none":"block",this.speedBtn.style.display=t?"none":"inline-flex",t?this.ephemerisReadoutEl.style.display="none":this.activeEphemerisText&&(this.ephemerisReadoutEl.textContent=this.activeEphemerisText[this.lang],this.ephemerisReadoutEl.style.display="block"),t||this.telescopeView.setVisibleAndSize(!0,!1)}refreshStaticLabels(){const t=this.lang==="ar";this.introKickerEl.textContent=t?"مرصد سُهيل الفلكي · المحاكاة الفيزيائية لنظام الشمس والأرض والقمر":"SUHAIL ASTRONOMICAL OBSERVATORY · REAL-TIME ORBITAL & ECLIPSE SIMULATION",this.introTitleEl.textContent=t?"رحلة «سُهيل» الفلكية المروية":"The Suhail Space & Eclipse Observatory",this.introSubtitleEl.textContent=t?"تجربةٌ علميةٌ وثائقيةٌ بدقة 8K تحاكي فيزياء الفضاء من فجر الدمام ومدار السرطان في قلب المملكة، إلى تحرّي أهلة العُلا وكسوفَي الأحساء (٢٠١٩م) ومكة وجدة الكلي المرتقب (٢ أغسطس ٢٠٢٧م).":"An 8K interactive planetarium journey across Saudi skies—from diurnal rotation and the Tropic of Cancer to AlUla crescent sighting, Al-Ahsa’s 2019 Ring of Fire, and the August 2, 2027 Makkah/Jeddah Total Eclipse.",this.introStartBtn.innerHTML=`${le.story}<span>${t?"بدء الرحلة الوثائقية المروية":"Begin Guided Documentary"}</span>`,this.introLabBtn.innerHTML=`${le.lab}<span>${t?"فتح المختبر الفلكي الحر":"Enter Astrophysical Lab"}</span>`;const e=this.cb.getStudioConfig().apiKey.length>12;this.studioVoiceBtn.innerHTML=`${le.waveform}<span>${e?t?"صوت Gemini":"Gemini TTS":t?"صوت استوديو":"Studio Voice"}</span>`,this.brandTextEl.textContent=t?"مرصد سُهيل الفلكي":"Suhail Space Observatory",this.brandSubEl.textContent=t?"المملكة العربية السعودية · 24.7°N 46.7°E":"Kingdom of Saudi Arabia · 24.7°N 46.7°E",this.modeSwitchBtn.innerHTML=this.mode==="story"?`${le.lab}<span>${t?"المختبر الحر":"Free Lab"}</span>`:`${le.story}<span>${t?"الرحلة المروية":"Guided Story"}</span>`;const n=this.voiceToggleBtn.classList.contains("voice-active");this.voiceToggleBtn.innerHTML=n?`${le.micOn}<span>${t?"الراوي":"Voice"}</span>`:`${le.micOff}<span>${t?"صامت":"Muted"}</span>`,this.replayVoiceBtn.innerHTML=`${le.replay}<span>${t?"إعادة السرد":"Replay"}</span>`,this.resetBtn.innerHTML=`${le.reset}<span>${t?"إعادة ضبط":"Reset"}</span>`,this.langBtn.textContent=t?"EN":"AR",this.suhailNameEl.textContent=t?"وحدة الرصد الفلكي — سُهيل":"Suhail Telemetry Brief",this.storyDotBtns.forEach((i,s)=>{i.textContent=t?Le(s+1):String(s+1),i.title=Ae[s].sceneTitle[this.lang]})}buildInlineArabicTelemetry(t,e,n){const i=this.lang==="ar";if(t===1)return i?`<span>الدمام <b>${kn(n.dammamLocalHour,"ar")}</b></span>
           <span>الرياض <b>${kn(n.riyadhLocalHour,"ar")}</b></span>
           <span>جدة/مكة <b>${kn(n.jeddahLocalHour,"ar")}</b></span>`:`<span>Dammam <b>${kn(n.dammamLocalHour,"en")}</b></span>
           <span>Riyadh <b>${kn(n.riyadhLocalHour,"en")}</b></span>
           <span>Jeddah <b>${kn(n.jeddahLocalHour,"en")}</b></span>`;if(t===2)return i?`<span>المسافة الشمسية <b>${Le(n.earthSunDistanceMkm)} مليون كم</b></span>
           <span>الإشعاع بالرياض <b>${Le(n.riyadhSolarFluxWm2)} واط/م²</b></span>`:`<span>Solar Dist <b>${n.earthSunDistanceMkm}M km</b></span>
           <span>Riyadh Flux <b>${n.riyadhSolarFluxWm2} W/m²</b></span>`;if(t===3)return i?`<span><b>${n.phaseName.ar}</b></span>
           <span>الإضاءة <b>${Le(n.moonIlluminationPct)}٪</b></span>
           <span>الاستطالة <b>${Le(n.moonElongationDeg)}°</b></span>`:`<span><b>${n.phaseName.en}</b></span>
           <span>Lit <b>${n.moonIlluminationPct}%</b></span>
           <span>Elongation <b>${n.moonElongationDeg}°</b></span>`;if(t===4){const s=e.moonDistanceMode==="perigee"?i?"الحضيض ٣٥٦٬٥٠٠ كم":"Perigee 356,500 km":i?"الأوج ٤٠٦٬٧٠٠ كم":"Apogee 406,700 km";return i?`<span><b>${s}</b></span>
           <span>احتجاب الشمس <b>${Le(n.solarObscurationPct)}٪</b></span>`:`<span><b>${s}</b></span>
           <span>Obscuration <b>${n.solarObscurationPct}%</b></span>`}return i?`<span><b>${n.tideLabel.ar}</b></span>
         <span>سعة المدّ <b>${Le(n.tideRangeMeters)} م</b></span>`:`<span><b>${n.tideLabel.en}</b></span>
         <span>Tide Range <b>${n.tideRangeMeters} m</b></span>`}updateStoryMode(t,e,n,i,s,a,o,l){const c=this.lang==="ar";this.storyDotBtns.forEach((_,g)=>{_.classList.toggle("active",g===t.index),_.classList.toggle("done",n.has(g))});const h=c?`المشهد ${Le(t.index+1)} / ${Le(Ae.length)}`:`SCENE 0${t.index+1} / 0${Ae.length}`,u=`<span class="kicker">${t.actTitle[this.lang]} · ${h}</span> <span class="sub">${t.sceneTitle[this.lang]}</span>`;this.titleBannerEl.innerHTML!==u&&(this.titleBannerEl.innerHTML=u),i.visible&&this.introCurtainEl.classList.contains("hidden")?(this.callout3dEl.style.display="inline-flex",this.callout3dEl.style.left=`${i.x.toFixed(0)}px`,this.callout3dEl.style.top=`${i.y.toFixed(0)}px`,this.calloutTextEl.textContent=t.calloutText[this.lang]):this.callout3dEl.style.display="none",this.storyInlineTelEl.innerHTML=this.buildInlineArabicTelemetry(t.actNumber,s,a);const d=this.narratorStatus==="loading"?c?" · جاري التوليد":" · Synthesizing":this.narratorStatus==="speaking-silma"?c?" · صوت استوديو":" · Studio Audio":this.narratorStatus==="speaking-studio"?" · Gemini Studio":"";this.narratorLabelEl.textContent=e?c?`الخلاصة العلمية للمشهد${d}`:`OBSERVATIONAL CONCLUSION${d}`:c?`السرد الفلكي · ${h}${d}`:`NARRATOR · ${h}${d}`;const p=`${this.lang}|${t.index}|${e}`;if(p!==this.renderedSceneSig){if(this.renderedSceneSig=p,this.storyTheaterEl.classList.toggle("payoff-ready",e),this.storyProseEl.textContent=e?t.payoffNarration[this.lang]:t.narration[this.lang],this.storyProseEl.classList.toggle("payoff-text",e),this.riddleContainerEl.innerHTML="",!e&&t.riddleChoices){this.riddleContainerEl.style.display="flex",this.promptBoxEl.style.display="none";const g=document.createElement("div");g.className="story-prompt-text",g.style.marginBottom="4px",g.textContent=t.interactivePrompt[this.lang],this.riddleContainerEl.appendChild(g),t.riddleChoices.forEach(m=>{const f=document.createElement("button");f.className="riddle-choice-btn",f.textContent=m.label[this.lang],f.addEventListener("click",()=>{m.isCorrect?(f.classList.add("correct"),this.cb.onSolveRiddle()):(f.classList.add("wrong"),f.textContent=m.feedback[this.lang])}),this.riddleContainerEl.appendChild(f)})}else e?(this.riddleContainerEl.style.display="none",this.promptBoxEl.style.display="none"):(this.riddleContainerEl.style.display="none",this.promptBoxEl.style.display="flex",this.promptTextEl.textContent=t.interactivePrompt[this.lang],this.assistBtn.textContent=t.assistButtonLabel[this.lang]);this.prevSceneBtn.disabled=t.index===0,this.prevSceneBtn.textContent=c?"المشهد السابق":"Previous",this.prevSceneBtn.onclick=()=>{t.index>0&&this.cb.onSelectStoryScene(t.index-1)};const _=t.index===Ae.length-1;e?(this.nextSceneBtn.className="next-scene-hero-btn",this.nextSceneBtn.textContent=_?c?"عرض شهادة الإتمام":"View Completion Credential":c?"المشهد التالي":"Continue to Next Scene"):(this.nextSceneBtn.className="nav-step-btn",this.nextSceneBtn.textContent=_?c?"إنهاء الرحلة":"Finish":c?"تخطّي للمشهد التالي":"Skip Scene"),this.nextSceneBtn.onclick=()=>{_?this.openFinaleCertificate():this.cb.onSelectStoryScene(t.index+1)}}this.renderCityPins(o,a),t.showTelescope&&this.telescopeView.render(s,a,this.lang,l)}updateLabMode(t,e,n,i,s){const a=this.lang==="ar",o=gr[t.chapterId],l={0:{ico:le.pause,ar:"تحكم يدوي",en:"Manual"},1:{ico:le.play,ar:"١×",en:"1x"},15:{ico:le.fastForward,ar:"١٥×",en:"15x"},80:{ico:le.fastForward,ar:"٨٠×",en:"80x"}},c=l[t.timeScale]||l[1];this.speedBtn.innerHTML=`${c.ico}<span>${c[this.lang]}</span>`;const h={1:{ar:"٠١ · الدوران اليومي",en:"01 · Rotation"},2:{ar:"٠٢ · الفصول والميل",en:"02 · Seasons"},3:{ar:"٠٣ · الأهلة والأطوار",en:"03 · Phases & Hilāl"},4:{ar:"٠٤ · الكسوف والخسوف",en:"04 · Eclipses"},5:{ar:"٠٥ · المدّ والجزر",en:"05 · Tides"}};[1,2,3,4,5].forEach(_=>{const g=this.chapterBtns.get(_),m=n.has(_);g.classList.toggle("active",_===t.chapterId),g.classList.toggle("done",m),g.innerHTML=`${m?le.check:""}<span>${h[_][this.lang]}</span>`}),this.titleBannerEl.innerHTML=`<span class="kicker">${o.code}</span> <span class="sub">${o.title[this.lang]}</span>`;const u=this.lang+"|"+t.chapterId+"|"+e.objectives.map(_=>`${_.id}:${_.done}:${_.progressText[this.lang]}`).join(",");u!==this.lastObjSig&&(this.lastObjSig=u,this.objectivesStripEl.innerHTML=e.objectives.map(_=>`
          <div class="obj-chip ${_.done?"done":""}">
            <span class="obj-idx">${_.done?le.check:_.icon}</span>
            <span>${_.label[this.lang]}</span>
            <span class="obj-prog">${a?Le(_.progressText.ar):_.progressText.en}</span>
          </div>
        `).join(""));const d=`${this.lang}|${t.chapterId}`;d!==this.renderedDockKey&&(this.renderedDockKey=d,this.rebuildLabDock(t.chapterId)),this.dragHintEl.textContent=a?"التحكم المباشر: اسحب الكرة الأرضية لإدارتها، أو اسحب القمر على مداره ثلاثي الأبعاد":"Direct Manipulation: Drag Earth to rotate, or drag the Moon along its 3D orbit";const p=this.buildInlineArabicTelemetry(t.chapterId,t,e);p!==this.lastTelSig&&(this.lastTelSig=p,this.telemetryEl.innerHTML=p),this.suhailCodeEl.textContent=o.code,this.suhailBodyEl.textContent=e.chapterCompleted?o.winSpeech[this.lang]:o.suhailIntro[this.lang],this.mythTitleEl.textContent=o.mythBusterTitle[this.lang],this.mythTextEl.textContent=o.mythBusterBody[this.lang],this.renderCityPins(i,e),this.telescopeView.render(t,e,this.lang,s)}renderCityPins(t,e){for(const i of this.cityPinEls.values())i.style.display="none";const n=this.lang==="ar";for(const i of t){const s=this.cityPinEls.get(i.id);if(!s||!i.visible)continue;s.className=`city-pin state-${i.sunState}`,s.style.display="inline-flex",s.style.left=`${i.x.toFixed(1)}px`,s.style.top=`${i.y.toFixed(1)}px`;const a=i.id==="dammam"?e.dammamLocalHour:i.id==="riyadh"?e.riyadhLocalHour:e.jeddahLocalHour,o=i.sunState==="dawn"?n?"شروق":"Dawn":i.sunState==="day"?n?"نهار":"Day":n?"ليل":"Night";s.innerHTML=`<i class="pin-dot"></i><span>${n?i.nameAr:i.nameEn}</span><span class="pin-clock">${kn(a,this.lang)}</span><span class="pin-state">${o}</span>`}}rebuildLabDock(t){this.expDockEl.innerHTML="";const e=(i,s,a)=>{const o=document.createElement("button");o.className="exp-btn",o.textContent=this.lang==="ar"?i:s,o.addEventListener("click",a),this.expDockEl.appendChild(o)},n=-.81;t===1?(e("فجر الدمام قبل الرياض","Dammam Dawn Lead",()=>this.cb.onMutateParams(i=>{i.timeScale=.085,i.earthSpinRad=-2.66},"earth-close")),e("شروق الرياض وجدة","Riyadh & Jeddah Morning",()=>this.cb.onMutateParams(i=>{i.timeScale=0,i.earthSpinRad=-2.22},"earth-close")),e("أضواء المملكة ليلاً","Saudi Night Lights",()=>this.cb.onMutateParams(i=>{i.timeScale=0,i.earthSpinRad=-3.25},"earth-close"))):t===2?(e("انقلاب يونيو الصيفي","June Solstice",()=>this.cb.onMutateParams(i=>{i.timeScale=0,i.axialTiltDeg=23.44,i.seasonAngleRad=0,i.earthSpinRad=n,i.showSolarRays=!0},"seasons-orbit")),e("انقلاب ديسمبر الشتوي","December Solstice",()=>this.cb.onMutateParams(i=>{i.timeScale=0,i.axialTiltDeg=23.44,i.seasonAngleRad=Math.PI,i.earthSpinRad=n+Math.PI,i.showSolarRays=!0},"seasons-orbit")),e("ميل المحور ٠°","0° Tilt Test",()=>this.cb.onMutateParams(i=>{i.axialTiltDeg=0})),e("ميل المحور ٢٣٫٥°","Restore 23.5° Tilt",()=>this.cb.onMutateParams(i=>{i.axialTiltDeg=23.44}))):t===3?(e("المحاق (< ٧° دانجون)","New Moon (< 7°)",()=>this.cb.onMutateParams(i=>{i.timeScale=0,i.moonPhaseRad=.04})),e("هلال رمضان الوليد","Ramadan Hilāl",()=>this.cb.onMutateParams(i=>{i.timeScale=0,i.moonPhaseRad=.25})),e("التربيع الأول (٩٠°)","First Quarter",()=>this.cb.onMutateParams(i=>{i.timeScale=0,i.moonPhaseRad=Math.PI/2})),e("البدر المكتمل (١٨٠°)","Full Moon",()=>this.cb.onMutateParams(i=>{i.timeScale=0,i.moonPhaseRad=Math.PI,i.moonNodeRad=Math.PI/2}))):t===4?(e("شهر عادي (ميل ٥٫١٤°)","Non-Node Pass (5.14°)",()=>this.cb.onMutateParams(i=>{i.timeScale=0,i.moonPhaseRad=0,i.moonNodeRad=Math.PI/2,i.showShadowCones=!0},"eclipse-align")),e("كسوف كلي (الحضيض)","Total Solar Eclipse",()=>this.cb.onMutateParams(i=>{i.timeScale=0,i.earthSpinRad=n,i.moonPhaseRad=0,i.moonNodeRad=0,i.moonDistanceMode="perigee",i.showShadowCones=!0},"eclipse-align")),e("حلقة النار (الأوج)","Annular Ring of Fire",()=>this.cb.onMutateParams(i=>{i.timeScale=0,i.earthSpinRad=n,i.moonPhaseRad=0,i.moonNodeRad=0,i.moonDistanceMode="apogee",i.showShadowCones=!0},"eclipse-align")),e("الخسوف الكلي النحاسي","Total Lunar Eclipse",()=>this.cb.onMutateParams(i=>{i.timeScale=0,i.earthSpinRad=n+Math.PI,i.moonPhaseRad=Math.PI,i.moonNodeRad=0,i.showShadowCones=!0},"eclipse-align"))):(e("المدّ الأعظم (٠°)","Spring Tide (0°)",()=>this.cb.onMutateParams(i=>{i.timeScale=0,i.moonPhaseRad=0,i.showTidalBulge=!0},"tides-top")),e("المدّ الأصغر (٩٠°)","Neap Tide (90°)",()=>this.cb.onMutateParams(i=>{i.timeScale=0,i.moonPhaseRad=Math.PI/2,i.showTidalBulge=!0},"tides-top")))}}function Zr(r,t,e){let n=(t-r+Math.PI)%(Math.PI*2)-Math.PI;return n<=-Math.PI&&(n+=Math.PI*2),We(r+n*e)}function Y3(){const r=document.getElementById("app");r.innerHTML="";const t=document.createElement("div");t.id="space-canvas",r.appendChild(t);const e=new dv,n=new fv,i=new a3(t);let s="story",a=!1,o=0,l=!1,c=!1;const h=new Set;let u=!1,d=0,p=0,_=0,g=0,m=0,f=0,M=0,E=0,v=0,T;const A=new uv((Q,ht)=>{T==null||T.setNarratorSpeaking(Q,ht)}),w=(Q,ht)=>{o=Math.max(0,Math.min(Ae.length-1,Q)),l=!1,c=!1,u=!1;const rt=Ae[o];if(Object.assign(n.params,n.createDefaultParamsForChapter(rt.actNumber)),rt.setup(n.params),i.setCameraPreset(rt.camera,n.params,!a),T==null||T.configureTelescopeForScene(rt.showTelescope,!!rt.expandTelescope),ht&&T){const st=T.getLang();A.speak(rt.narration[st],st,`scene-${o}-intro`,!1),A.prefetchStudioClip(rt.payoffNarration[st],st,!0,`scene-${o}-payoff`),o+1<Ae.length&&A.prefetchStudioClip(Ae[o+1].narration[st],st,!1,`scene-${o+1}-intro`)}},C=(Q,ht)=>{if(!T)return;const rt=gr[Q],st=T.getLang(),L=ht?rt.winSpeech[st]:rt.suhailIntro[st],Bt=`lab-${Q}-${ht?"win":"intro"}`;A.speak(L,st,Bt,ht),ht||A.prefetchStudioClip(rt.winSpeech[st],st,!0,`lab-${Q}-win`)};T=new q3(r,{onStartStoryJourney:()=>{e.ensureUnlocked(),e.playUIClick(1.15),a=!0,s="story",T.hideIntroCurtain(),T.setMode("story"),w(0,!0)},onEnterFreeLab:()=>{e.ensureUnlocked(),e.playUIClick(1.1),a=!0,s="lab",T.hideIntroCurtain(),T.setMode("lab"),n.loadChapter(1),i.setCameraPreset(gr[1].defaultCamera,n.params,!1),C(1,n.completedChapters.has(1))},onSelectStoryScene:Q=>{e.ensureUnlocked(),e.playUIClick(1.1),h.delete(Q),w(Q,!0)},onTriggerSceneAssist:()=>{e.ensureUnlocked(),e.playUIClick(1.2);const Q=Ae[o],ht={...n.params};Q.assistAction(ht),o===2&&i.setCameraPreset("seasons-orbit",ht,!1),p=n.params.earthSpinRad,_=ht.earthSpinRad,g=n.params.seasonAngleRad,m=ht.seasonAngleRad,f=n.params.moonPhaseRad,M=ht.moonPhaseRad,E=n.params.moonNodeRad,v=ht.moonNodeRad,n.params.timeScale=0,n.params.moonDistanceMode=ht.moonDistanceMode,n.params.axialTiltDeg=ht.axialTiltDeg,n.params.showSolarRays=ht.showSolarRays,n.params.showShadowCones=ht.showShadowCones,n.params.showTidalBulge=ht.showTidalBulge,n.params.showTidalLockArrow=ht.showTidalLockArrow,d=0,u=!0},onSolveRiddle:()=>{e.ensureUnlocked(),e.playChapterSuccess(),l=!0},onToggleMode:()=>{e.ensureUnlocked(),e.playUIClick(1.05),s==="story"?(s="lab",T.setMode("lab"),C(n.params.chapterId,n.completedChapters.has(n.params.chapterId))):(s="story",T.setMode("story"),w(o,!0))},onToggleNarratorVoice:()=>A.toggle(),onReplayNarration:()=>{if(!(!a||!T))if(A.enable(),s==="story"){const Q=Ae[o],ht=T.getLang(),rt=h.has(o),st=rt?Q.payoffNarration[ht]:Q.narration[ht],L=`scene-${o}-${rt?"payoff":"intro"}`;A.speak(st,ht,L,rt)}else C(n.params.chapterId,n.completedChapters.has(n.params.chapterId))},onSaveStudioVoice:(Q,ht)=>{if(e.ensureUnlocked(),A.configureStudio(Q,ht),a&&s==="story"&&T){const rt=Ae[o],st=T.getLang(),L=h.has(o);A.speak(L?rt.payoffNarration[st]:rt.narration[st],st,`scene-${o}-${L?"payoff":"intro"}`,L)}else a&&s==="lab"&&T?C(n.params.chapterId,n.completedChapters.has(n.params.chapterId)):Q.length>12&&A.speak("مرحباً بكم في مرصد سُهيل الفلكي بالمملكة العربية السعودية.","ar","",!1)},onDesignCustomSuhailVoice:Q=>A.createCustomSuhailVoice(Q),getStudioConfig:()=>({apiKey:A.getApiKey(),voiceId:A.getVoiceId(),customVoiceId:A.getCustomDesignedVoiceId()}),onSelectChapter:Q=>{e.ensureUnlocked(),e.playUIClick(1.1),n.loadChapter(Q),i.setCameraPreset(gr[Q].defaultCamera,n.params,!1),C(Q,n.completedChapters.has(Q))},onSelectSaudiEvent:Q=>{e.ensureUnlocked(),e.playUIClick(1.18),u=!1;const ht=Q.applyToParams(n.params);return i.setCameraPreset(Q.camera,n.params,!1),ht},onMutateParams:(Q,ht)=>{e.ensureUnlocked(),e.playUIClick(1.15),u=!1,Q(n.params),ht&&i.setCameraPreset(ht,n.params,!1)},onCycleTimeSpeed:()=>{e.ensureUnlocked(),e.playUIClick(1.25);const Q=n.params.timeScale;return n.params.timeScale=Q===0?1:Q===1?15:Q===15?80:0,n.params.timeScale},onResetCurrent:()=>{e.ensureUnlocked(),e.playUIClick(.9),s==="story"?(h.delete(o),w(o,!0)):(n.completedChapters.delete(n.params.chapterId),n.loadChapter(n.params.chapterId),i.setCameraPreset(gr[n.params.chapterId].defaultCamera,n.params,!1),C(n.params.chapterId,!1))},onToggleSound:()=>{const Q=e.toggleMute();return A.setMasterMuted(!Q),Q}}),w(0,!1),n.params.earthSpinRad=-2.7,n.params.timeScale=.075;const x=i.renderer.domElement,S=new St;let P="none",O=0;const U=Q=>{const ht=x.getBoundingClientRect();S.x=(Q.clientX-ht.left)/ht.width*2-1,S.y=-((Q.clientY-ht.top)/ht.height)*2+1};x.addEventListener("pointerdown",Q=>{e.ensureUnlocked(),Q.button===0&&(u=!1,U(Q),O=Q.clientX,P=i.detectDragStart(S,n.params.chapterId),i.setHoveredDragMode(P),P!=="none"&&(x.style.cursor="grabbing",i.applyPointerDrag(P,S,0,n.params)))}),window.addEventListener("pointermove",Q=>{if(U(Q),P!=="none"){const ht=Q.clientX-O;O=Q.clientX,i.applyPointerDrag(P,S,ht,n.params)&&e.playDialTick(P==="orbit-moon"?1.15:.92);return}if(Q.target===x){const ht=i.detectDragStart(S,n.params.chapterId);i.setHoveredDragMode(ht),x.style.cursor=ht!=="none"?"grab":"default"}else i.setHoveredDragMode("none")}),window.addEventListener("pointerup",()=>{P!=="none"&&(P="none",x.style.cursor="default")});let W="none",k="none",z=!1,X=performance.now();const V=new URLSearchParams(window.location.search),it=V.get("cinema")==="1",J=V.get("shot")||"dawn",ut=V.get("module")||"",vt=Number(ut.replace("lab-","")),Ft=vt>=1&&vt<=5?vt:null;let $=0,et=0,gt=0,ct=0,Rt="";if(it)if(a=!0,T.hideIntroCurtain(),J==="eclipse")document.body.classList.add("cinema-mode-eclipse"),s="lab",T.setMode("lab"),n.loadChapter(4),Ae[5].setup(n.params),n.params.chapterId=4,i.setCameraPreset(Ae[5].camera,n.params,!0),T.configureTelescopeForScene(!0,!1),ct=n.params.moonNodeRad;else{document.body.classList.add("cinema-mode"),s="story",T.setMode("story"),w(0,!1),i.setCameraPreset(Ae[0].camera,n.params,!0);const Q={...n.params};Ae[0].assistAction(Q),et=n.params.earthSpinRad,gt=Q.earthSpinRad,n.params.timeScale=0}else Ft!==null&&(a=!0,s="lab",T.hideIntroCurtain(),T.setMode("lab"),n.loadChapter(Ft),i.setCameraPreset(gr[Ft].defaultCamera,n.params,!0),T.configureTelescopeForScene(Ft>=3,!1),C(Ft,!1));const H=Q=>{var bt;requestAnimationFrame(H);const ht=Math.max(.001,Math.min((Q-X)/1e3,.05));X=Q;const rt=Q/1e3;if(it)if($+=ht,J==="eclipse"){const R=Math.min(1,Math.max(0,($-.5)/3.8)),y=R*R*(3-2*R);n.params.moonNodeRad=Zr(ct,0,y),n.params.timeScale=0}else{const R=Math.min(1,Math.max(0,($-.3)/6.8)),y=R*R*(3-2*R);n.params.earthSpinRad=Zr(et,gt,y),n.params.timeScale=0}if(u){d+=ht;const R=Math.min(1,d/.85),y=1-Math.pow(1-R,3);n.params.earthSpinRad=Zr(p,_,y),n.params.seasonAngleRad=Zr(g,m,y),n.params.moonPhaseRad=Zr(f,M,y),n.params.moonNodeRad=Zr(E,v,y),R>=1&&(u=!1)}const st=n.step(ht);s==="story"&&a&&o===0&&n.params.timeScale>0&&st.riyadhLocalHour>=5.65&&st.riyadhLocalHour<11&&(n.params.timeScale=0),a&&n.params.chapterId===4&&(st.solarEclipse==="total"||st.solarEclipse==="annular")&&W!==st.solarEclipse&&e.playEclipseChord(),W=st.solarEclipse,a&&n.params.chapterId===4&&st.lunarEclipse==="total"&&k!=="total"&&e.playEclipseChord(),k=st.lunarEclipse;const L=a&&n.params.chapterId===3&&(st.hilalStatus==="naked-eye"||st.hilalStatus==="telescope-only");L&&!z&&e.playHilalChime(),z=L;const Bt=i.render(n.params,st,ht,rt,P!=="none");if(s==="story"){const R=Ae[o],y=h.has(o)||a&&R.checkComplete(n.params,st,l);if(y&&!h.has(o)&&(h.add(o),e.playChapterSuccess(),!c&&T)){c=!0;const Z=T.getLang();A.speak(R.payoffNarration[Z],Z,`scene-${o}-payoff`,!0)}const G=i.getCalloutScreenPos(R.calloutAnchor,n.params);T.updateStoryMode(R,y,h,G,n.params,st,Bt,rt)}else n.consumeChapterWin()&&(e.playChapterSuccess(),C(n.params.chapterId,!0)),T.updateLabMode(n.params,st,n.completedChapters,Bt,rt);const Dt=new Set(n.completedChapters);h.forEach(R=>{var G;const y=(G=Ae[R])==null?void 0:G.actNumber;y&&Dt.add(y)});const It=Array.from(Dt).sort((R,y)=>R-y).map(R=>`lab-${R}`),Et=s==="lab"?`lab-${n.params.chapterId}`:`lab-${((bt=Ae[o])==null?void 0:bt.actNumber)??1}`,jt=`${Et}|${It.join(",")}`;if(jt!==Rt){Rt=jt;try{window.parent&&window.parent!==window&&window.parent.postMessage({type:"MISBAR_LAB_PROGRESS",worldId:"space-suhail",activeModule:Et,completedModules:It,totalModules:5},"*")}catch{}}};requestAnimationFrame(H)}Y3();
