import{j as u,g as ba,R as me,r as m,a as ni,F as Le,u as vt,b as B,_ as Kc,E as Zc,c as Et}from"./index-3d20fc75.js";function He(e,t){return Math.random()*(t-e)+e}function Qo(){const e=["#4f4872","#704A80","#CCC48B"];return e[Math.floor(Math.random()*e.length)]}function Qc(e){return{x:e.screenX,y:e.screenY}}function Jc(e=null,t=""){const n=e!==null&&[...e];document.onmousemove=r=>{const a=Qc(r);n.forEach(i=>{const o=i.lastChild.getAttribute(t)===null?1:parseInt(i.lastChild.getAttribute(t)),s=(a.x-window.innerWidth/2)/o,c=(a.y-window.innerHeight/2)/o,l=new KeyframeEffect(i,[{transform:`translate(${-s}px, ${-c}px)`,offset:1},{transition:"100ms all linear"}],{duration:50,fill:"forwards",easing:"linear"});new Animation(l,document.timeline).play()})}}function el(e,t=300){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>{e.apply(this,r)},t)}}class tl{constructor(){this.raf(),this.noRaf=!0}raf(){this.noRaf||window.requestAnimationFrame(()=>{this.raf(),this.onRaf()})}}class Jo extends tl{constructor(t){super(),Object.assign(this,t)}update(){this.speed*=He(.95,.98),this.velocityX=Math.cos(this.angle)*this.speed,this.velocityY=Math.sin(this.angle)*this.speed,this.x+=this.velocityX,this.y+=this.velocityY}draw(){this.ctx.beginPath();for(let t=1;t<=6;t++){const n=t*Math.PI/3;this.ctx.lineTo(this.x+this.size*Math.cos(n),this.y+this.size*Math.sin(n))}this.ctx.closePath(),this.ctx.fillStyle=this.color,this.ctx.stroke(),this.ctx.strokeStyle=this.strokeS,this.ctx.lineWidth="2",this.ctx.globalAlpha=this.alpha,this.ctx.fill()}onRaf(){this.velocityX>-.1&&this.velocityX<.1||(this.update(),this.draw())}}function es({...e}){const{zIndex:t=0}=e,r=window.matchMedia("(max-width:1920px)")?window.devicePixelRatio:1;return u("canvas",{ref:e.onRef,className:e.className,style:{width:`${e.w*r}px`,height:`${e.h*r}px`,zIndex:t},width:e.w*r,height:e.h*r,children:"Your browser does not support canvas"})}var nl=function(e){return{display:e?"flex":"none"}},ri="#4fa94d",rl={"aria-busy":!0,role:"status"},ai=globalThis&&globalThis.__assign||function(){return ai=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ai.apply(this,arguments)},ii=globalThis&&globalThis.__assign||function(){return ii=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ii.apply(this,arguments)},oi=globalThis&&globalThis.__assign||function(){return oi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},oi.apply(this,arguments)},si=globalThis&&globalThis.__assign||function(){return si=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},si.apply(this,arguments)},ci=globalThis&&globalThis.__assign||function(){return ci=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ci.apply(this,arguments)},li=globalThis&&globalThis.__assign||function(){return li=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},li.apply(this,arguments)},fi=globalThis&&globalThis.__assign||function(){return fi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},fi.apply(this,arguments)},ts={exports:{}},Z={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we=typeof Symbol=="function"&&Symbol.for,ya=we?Symbol.for("react.element"):60103,wa=we?Symbol.for("react.portal"):60106,qn=we?Symbol.for("react.fragment"):60107,Kn=we?Symbol.for("react.strict_mode"):60108,Zn=we?Symbol.for("react.profiler"):60114,Qn=we?Symbol.for("react.provider"):60109,Jn=we?Symbol.for("react.context"):60110,xa=we?Symbol.for("react.async_mode"):60111,er=we?Symbol.for("react.concurrent_mode"):60111,tr=we?Symbol.for("react.forward_ref"):60112,nr=we?Symbol.for("react.suspense"):60113,al=we?Symbol.for("react.suspense_list"):60120,rr=we?Symbol.for("react.memo"):60115,ar=we?Symbol.for("react.lazy"):60116,il=we?Symbol.for("react.block"):60121,ol=we?Symbol.for("react.fundamental"):60117,sl=we?Symbol.for("react.responder"):60118,cl=we?Symbol.for("react.scope"):60119;function Ne(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ya:switch(e=e.type,e){case xa:case er:case qn:case Zn:case Kn:case nr:return e;default:switch(e=e&&e.$$typeof,e){case Jn:case tr:case ar:case rr:case Qn:return e;default:return t}}case wa:return t}}}function ns(e){return Ne(e)===er}Z.AsyncMode=xa;Z.ConcurrentMode=er;Z.ContextConsumer=Jn;Z.ContextProvider=Qn;Z.Element=ya;Z.ForwardRef=tr;Z.Fragment=qn;Z.Lazy=ar;Z.Memo=rr;Z.Portal=wa;Z.Profiler=Zn;Z.StrictMode=Kn;Z.Suspense=nr;Z.isAsyncMode=function(e){return ns(e)||Ne(e)===xa};Z.isConcurrentMode=ns;Z.isContextConsumer=function(e){return Ne(e)===Jn};Z.isContextProvider=function(e){return Ne(e)===Qn};Z.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ya};Z.isForwardRef=function(e){return Ne(e)===tr};Z.isFragment=function(e){return Ne(e)===qn};Z.isLazy=function(e){return Ne(e)===ar};Z.isMemo=function(e){return Ne(e)===rr};Z.isPortal=function(e){return Ne(e)===wa};Z.isProfiler=function(e){return Ne(e)===Zn};Z.isStrictMode=function(e){return Ne(e)===Kn};Z.isSuspense=function(e){return Ne(e)===nr};Z.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===qn||e===er||e===Zn||e===Kn||e===nr||e===al||typeof e=="object"&&e!==null&&(e.$$typeof===ar||e.$$typeof===rr||e.$$typeof===Qn||e.$$typeof===Jn||e.$$typeof===tr||e.$$typeof===ol||e.$$typeof===sl||e.$$typeof===cl||e.$$typeof===il)};Z.typeOf=Ne;ts.exports=Z;var ka=ts.exports;function ll(e){function t(R,O,T,$,p){for(var W=0,S=0,K=0,D=0,Y,M,J=0,te=0,P,ie=P=Y=0,U=0,he=0,st=0,ge=0,bt=T.length,ct=bt-1,Te,L="",se="",H="",De="",$e;U<bt;){if(M=T.charCodeAt(U),U===ct&&S+D+K+W!==0&&(S!==0&&(M=S===47?10:47),D=K=W=0,bt++,ct++),S+D+K+W===0){if(U===ct&&(0<he&&(L=L.replace(h,"")),0<L.trim().length)){switch(M){case 32:case 9:case 59:case 13:case 10:break;default:L+=T.charAt(U)}M=59}switch(M){case 123:for(L=L.trim(),Y=L.charCodeAt(0),P=1,ge=++U;U<bt;){switch(M=T.charCodeAt(U)){case 123:P++;break;case 125:P--;break;case 47:switch(M=T.charCodeAt(U+1)){case 42:case 47:e:{for(ie=U+1;ie<ct;++ie)switch(T.charCodeAt(ie)){case 47:if(M===42&&T.charCodeAt(ie-1)===42&&U+2!==ie){U=ie+1;break e}break;case 10:if(M===47){U=ie+1;break e}}U=ie}}break;case 91:M++;case 40:M++;case 34:case 39:for(;U++<ct&&T.charCodeAt(U)!==M;);}if(P===0)break;U++}switch(P=T.substring(ge,U),Y===0&&(Y=(L=L.replace(d,"").trim()).charCodeAt(0)),Y){case 64:switch(0<he&&(L=L.replace(h,"")),M=L.charCodeAt(1),M){case 100:case 109:case 115:case 45:he=O;break;default:he=Se}if(P=t(O,he,P,M,p+1),ge=P.length,0<z&&(he=n(Se,L,st),$e=s(3,P,he,O,oe,ee,ge,M,p,$),L=he.join(""),$e!==void 0&&(ge=(P=$e.trim()).length)===0&&(M=0,P="")),0<ge)switch(M){case 115:L=L.replace(j,o);case 100:case 109:case 45:P=L+"{"+P+"}";break;case 107:L=L.replace(v,"$1 $2"),P=L+"{"+P+"}",P=ce===1||ce===2&&i("@"+P,3)?"@-webkit-"+P+"@"+P:"@"+P;break;default:P=L+P,$===112&&(P=(se+=P,""))}else P="";break;default:P=t(O,n(O,L,st),P,$,p+1)}H+=P,P=st=he=ie=Y=0,L="",M=T.charCodeAt(++U);break;case 125:case 59:if(L=(0<he?L.replace(h,""):L).trim(),1<(ge=L.length))switch(ie===0&&(Y=L.charCodeAt(0),Y===45||96<Y&&123>Y)&&(ge=(L=L.replace(" ",":")).length),0<z&&($e=s(1,L,O,R,oe,ee,se.length,$,p,$))!==void 0&&(ge=(L=$e.trim()).length)===0&&(L="\0\0"),Y=L.charCodeAt(0),M=L.charCodeAt(1),Y){case 0:break;case 64:if(M===105||M===99){De+=L+T.charAt(U);break}default:L.charCodeAt(ge-1)!==58&&(se+=a(L,Y,M,L.charCodeAt(2)))}st=he=ie=Y=0,L="",M=T.charCodeAt(++U)}}switch(M){case 13:case 10:S===47?S=0:1+Y===0&&$!==107&&0<L.length&&(he=1,L+="\0"),0<z*Oe&&s(0,L,O,R,oe,ee,se.length,$,p,$),ee=1,oe++;break;case 59:case 125:if(S+D+K+W===0){ee++;break}default:switch(ee++,Te=T.charAt(U),M){case 9:case 32:if(D+W+S===0)switch(J){case 44:case 58:case 9:case 32:Te="";break;default:M!==32&&(Te=" ")}break;case 0:Te="\\0";break;case 12:Te="\\f";break;case 11:Te="\\v";break;case 38:D+S+W===0&&(he=st=1,Te="\f"+Te);break;case 108:if(D+S+W+xe===0&&0<ie)switch(U-ie){case 2:J===112&&T.charCodeAt(U-3)===58&&(xe=J);case 8:te===111&&(xe=te)}break;case 58:D+S+W===0&&(ie=U);break;case 44:S+K+D+W===0&&(he=1,Te+="\r");break;case 34:case 39:S===0&&(D=D===M?0:D===0?M:D);break;case 91:D+S+K===0&&W++;break;case 93:D+S+K===0&&W--;break;case 41:D+S+W===0&&K--;break;case 40:if(D+S+W===0){if(Y===0)switch(2*J+3*te){case 533:break;default:Y=1}K++}break;case 64:S+K+D+W+ie+P===0&&(P=1);break;case 42:case 47:if(!(0<D+W+K))switch(S){case 0:switch(2*M+3*T.charCodeAt(U+1)){case 235:S=47;break;case 220:ge=U,S=42}break;case 42:M===47&&J===42&&ge+2!==U&&(T.charCodeAt(ge+2)===33&&(se+=T.substring(ge,U+1)),Te="",S=0)}}S===0&&(L+=Te)}te=J,J=M,U++}if(ge=se.length,0<ge){if(he=O,0<z&&($e=s(2,se,he,R,oe,ee,ge,$,p,$),$e!==void 0&&(se=$e).length===0))return De+se+H;if(se=he.join(",")+"{"+se+"}",ce*xe!==0){switch(ce!==2||i(se,2)||(xe=0),xe){case 111:se=se.replace(_,":-moz-$1")+se;break;case 112:se=se.replace(E,"::-webkit-input-$1")+se.replace(E,"::-moz-$1")+se.replace(E,":-ms-input-$1")+se}xe=0}}return De+se+H}function n(R,O,T){var $=O.trim().split(b);O=$;var p=$.length,W=R.length;switch(W){case 0:case 1:var S=0;for(R=W===0?"":R[0]+" ";S<p;++S)O[S]=r(R,O[S],T).trim();break;default:var K=S=0;for(O=[];S<p;++S)for(var D=0;D<W;++D)O[K++]=r(R[D]+" ",$[S],T).trim()}return O}function r(R,O,T){var $=O.charCodeAt(0);switch(33>$&&($=(O=O.trim()).charCodeAt(0)),$){case 38:return O.replace(x,"$1"+R.trim());case 58:return R.trim()+O.replace(x,"$1"+R.trim());default:if(0<1*T&&0<O.indexOf("\f"))return O.replace(x,(R.charCodeAt(0)===58?"":"$1")+R.trim())}return R+O}function a(R,O,T,$){var p=R+";",W=2*O+3*T+4*$;if(W===944){R=p.indexOf(":",9)+1;var S=p.substring(R,p.length-1).trim();return S=p.substring(0,R).trim()+S+";",ce===1||ce===2&&i(S,1)?"-webkit-"+S+S:S}if(ce===0||ce===2&&!i(p,1))return p;switch(W){case 1015:return p.charCodeAt(10)===97?"-webkit-"+p+p:p;case 951:return p.charCodeAt(3)===116?"-webkit-"+p+p:p;case 963:return p.charCodeAt(5)===110?"-webkit-"+p+p:p;case 1009:if(p.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+p+p;case 978:return"-webkit-"+p+"-moz-"+p+p;case 1019:case 983:return"-webkit-"+p+"-moz-"+p+"-ms-"+p+p;case 883:if(p.charCodeAt(8)===45)return"-webkit-"+p+p;if(0<p.indexOf("image-set(",11))return p.replace(ye,"$1-webkit-$2")+p;break;case 932:if(p.charCodeAt(4)===45)switch(p.charCodeAt(5)){case 103:return"-webkit-box-"+p.replace("-grow","")+"-webkit-"+p+"-ms-"+p.replace("grow","positive")+p;case 115:return"-webkit-"+p+"-ms-"+p.replace("shrink","negative")+p;case 98:return"-webkit-"+p+"-ms-"+p.replace("basis","preferred-size")+p}return"-webkit-"+p+"-ms-"+p+p;case 964:return"-webkit-"+p+"-ms-flex-"+p+p;case 1023:if(p.charCodeAt(8)!==99)break;return S=p.substring(p.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+S+"-webkit-"+p+"-ms-flex-pack"+S+p;case 1005:return y.test(p)?p.replace(w,":-webkit-")+p.replace(w,":-moz-")+p:p;case 1e3:switch(S=p.substring(13).trim(),O=S.indexOf("-")+1,S.charCodeAt(0)+S.charCodeAt(O)){case 226:S=p.replace(C,"tb");break;case 232:S=p.replace(C,"tb-rl");break;case 220:S=p.replace(C,"lr");break;default:return p}return"-webkit-"+p+"-ms-"+S+p;case 1017:if(p.indexOf("sticky",9)===-1)break;case 975:switch(O=(p=R).length-10,S=(p.charCodeAt(O)===33?p.substring(0,O):p).substring(R.indexOf(":",7)+1).trim(),W=S.charCodeAt(0)+(S.charCodeAt(7)|0)){case 203:if(111>S.charCodeAt(8))break;case 115:p=p.replace(S,"-webkit-"+S)+";"+p;break;case 207:case 102:p=p.replace(S,"-webkit-"+(102<W?"inline-":"")+"box")+";"+p.replace(S,"-webkit-"+S)+";"+p.replace(S,"-ms-"+S+"box")+";"+p}return p+";";case 938:if(p.charCodeAt(5)===45)switch(p.charCodeAt(6)){case 105:return S=p.replace("-items",""),"-webkit-"+p+"-webkit-box-"+S+"-ms-flex-"+S+p;case 115:return"-webkit-"+p+"-ms-flex-item-"+p.replace(V,"")+p;default:return"-webkit-"+p+"-ms-flex-line-pack"+p.replace("align-content","").replace(V,"")+p}break;case 973:case 989:if(p.charCodeAt(3)!==45||p.charCodeAt(4)===122)break;case 931:case 953:if(ae.test(R)===!0)return(S=R.substring(R.indexOf(":")+1)).charCodeAt(0)===115?a(R.replace("stretch","fill-available"),O,T,$).replace(":fill-available",":stretch"):p.replace(S,"-webkit-"+S)+p.replace(S,"-moz-"+S.replace("fill-",""))+p;break;case 962:if(p="-webkit-"+p+(p.charCodeAt(5)===102?"-ms-"+p:"")+p,T+$===211&&p.charCodeAt(13)===105&&0<p.indexOf("transform",10))return p.substring(0,p.indexOf(";",27)+1).replace(g,"$1-webkit-$2")+p}return p}function i(R,O){var T=R.indexOf(O===1?":":"{"),$=R.substring(0,O!==3?T:10);return T=R.substring(T+1,R.length-1),Pe(O!==2?$:$.replace(G,"$1"),T,O)}function o(R,O){var T=a(O,O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2));return T!==O+";"?T.replace(A," or ($1)").substring(4):"("+O+")"}function s(R,O,T,$,p,W,S,K,D,Y){for(var M=0,J=O,te;M<z;++M)switch(te=fe[M].call(f,R,J,T,$,p,W,S,K,D,Y)){case void 0:case!1:case!0:case null:break;default:J=te}if(J!==O)return J}function c(R){switch(R){case void 0:case null:z=fe.length=0;break;default:if(typeof R=="function")fe[z++]=R;else if(typeof R=="object")for(var O=0,T=R.length;O<T;++O)c(R[O]);else Oe=!!R|0}return c}function l(R){return R=R.prefix,R!==void 0&&(Pe=null,R?typeof R!="function"?ce=1:(ce=2,Pe=R):ce=0),l}function f(R,O){var T=R;if(33>T.charCodeAt(0)&&(T=T.trim()),Ce=T,T=[Ce],0<z){var $=s(-1,O,T,T,oe,ee,0,0,0,0);$!==void 0&&typeof $=="string"&&(O=$)}var p=t(Se,T,O,0,0);return 0<z&&($=s(-2,p,T,T,oe,ee,p.length,0,0,0),$!==void 0&&(p=$)),Ce="",xe=0,ee=oe=1,p}var d=/^\0+/g,h=/[\0\r\f]/g,w=/: */g,y=/zoo|gra/,g=/([,: ])(transform)/g,b=/,\r+?/g,x=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,E=/::(place)/g,_=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,j=/\(\s*(.*)\s*\)/g,A=/([\s\S]*?);/g,V=/-self|flex-/g,G=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ae=/stretch|:\s*\w+\-(?:conte|avail)/,ye=/([^-])(image-set\()/,ee=1,oe=1,xe=0,ce=1,Se=[],fe=[],z=0,Pe=null,Oe=0,Ce="";return f.use=c,f.set=l,e!==void 0&&l(e),f}var fl={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function rs(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ul=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ui=rs(function(e){return ul.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Sa=ka,dl={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ml={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pl={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},as={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ea={};Ea[Sa.ForwardRef]=pl;Ea[Sa.Memo]=as;function di(e){return Sa.isMemo(e)?as:Ea[e.$$typeof]||dl}var hl=Object.defineProperty,gl=Object.getOwnPropertyNames,mi=Object.getOwnPropertySymbols,vl=Object.getOwnPropertyDescriptor,bl=Object.getPrototypeOf,pi=Object.prototype;function is(e,t,n){if(typeof t!="string"){if(pi){var r=bl(t);r&&r!==pi&&is(e,r,n)}var a=gl(t);mi&&(a=a.concat(mi(t)));for(var i=di(e),o=di(t),s=0;s<a.length;++s){var c=a[s];if(!ml[c]&&!(n&&n[c])&&!(o&&o[c])&&!(i&&i[c])){var l=vl(t,c);try{hl(e,c,l)}catch{}}}}return e}var yl=is;const wl=ba(yl);function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var hi=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},Br=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ka.typeOf(e)},Dn=Object.freeze([]),rt=Object.freeze({});function Kt(e){return typeof e=="function"}function gi(e){return e.displayName||e.name||"Component"}function Oa(e){return e&&typeof e.styledComponentId=="string"}var Pt=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ca=typeof window<"u"&&"HTMLElement"in window,xl=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function sn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var kl=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,i=a.length,o=i;n>=o;)(o<<=1)<0&&sn(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(a),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(n+1),l=0,f=r.length;l<f;l++)this.tag.insertRule(c,r[l])&&(this.groupSizes[n]++,c++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),i=a+r;this.groupSizes[n]=0;for(var o=a;o<i;o++)this.tag.deleteRule(a)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],i=this.indexOfGroup(n),o=i+a,s=i;s<o;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Pn=new Map,Fn=new Map,Gt=1,hn=function(e){if(Pn.has(e))return Pn.get(e);for(;Fn.has(Gt);)Gt++;var t=Gt++;return Pn.set(e,t),Fn.set(t,e),t},Sl=function(e){return Fn.get(e)},El=function(e,t){t>=Gt&&(Gt=t+1),Pn.set(e,t),Fn.set(t,e)},Ol="style["+Pt+'][data-styled-version="5.3.11"]',Cl=new RegExp("^"+Pt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Al=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},Tl=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var s=o.match(Cl);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(El(l,c),Al(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},_l=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},os=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(s){for(var c=s.childNodes,l=c.length;l>=0;l--){var f=c[l];if(f&&f.nodeType===1&&f.hasAttribute(Pt))return f}}(n),i=a!==void 0?a.nextSibling:null;r.setAttribute(Pt,"active"),r.setAttribute("data-styled-version","5.3.11");var o=_l();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},Nl=function(){function e(n){var r=this.element=os(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var i=document.styleSheets,o=0,s=i.length;o<s;o++){var c=i[o];if(c.ownerNode===a)return c}sn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Rl=function(){function e(n){var r=this.element=os(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(a,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Il=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),vi=Ca,Pl={isServer:!Ca,useCSSOMInjection:!xl},ss=function(){function e(n,r,a){n===void 0&&(n=rt),r===void 0&&(r={}),this.options=Ve({},Pl,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&Ca&&vi&&(vi=!1,function(i){for(var o=document.querySelectorAll(Ol),s=0,c=o.length;s<c;s++){var l=o[s];l&&l.getAttribute(Pt)!=="active"&&(Tl(i,l),l.parentNode&&l.parentNode.removeChild(l))}}(this))}e.registerId=function(n){return hn(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ve({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,i=r.useCSSOMInjection,o=r.target,n=a?new Il(o):i?new Nl(o):new Rl(o),new kl(n)));var n,r,a,i,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(hn(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},t.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(hn(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(hn(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,i="",o=0;o<a;o++){var s=Sl(o);if(s!==void 0){var c=n.names.get(s),l=r.getGroup(o);if(c&&l&&c.size){var f=Pt+".g"+o+'[id="'+s+'"]',d="";c!==void 0&&c.forEach(function(h){h.length>0&&(d+=h+",")}),i+=""+l+f+'{content:"'+d+`"}/*!sc*/
`}}}return i}(this)},e}(),$l=/(a)(d)/gi,bi=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ur(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=bi(t%52)+n;return(bi(t%52)+n).replace($l,"$1-$2")}var Ot=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},cs=function(e){return Ot(5381,e)};function Ml(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Kt(n)&&!Oa(n))return!1}return!0}var jl=cs("5.3.11"),Ll=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ml(t),this.componentId=n,this.baseHash=Ot(jl,n),this.baseStyle=r,ss.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))i.push(this.staticRulesId);else{var o=$t(this.rules,t,n,r).join(""),s=Ur(Ot(this.baseHash,o)>>>0);if(!n.hasNameForId(a,s)){var c=r(o,"."+s,void 0,a);n.insertRules(a,s,c)}i.push(s),this.staticRulesId=s}else{for(var l=this.rules.length,f=Ot(this.baseHash,r.hash),d="",h=0;h<l;h++){var w=this.rules[h];if(typeof w=="string")d+=w;else if(w){var y=$t(w,t,n,r),g=Array.isArray(y)?y.join(""):y;f=Ot(f,g+h),d+=g}}if(d){var b=Ur(f>>>0);if(!n.hasNameForId(a,b)){var x=r(d,"."+b,void 0,a);n.insertRules(a,b,x)}i.push(b)}}return i.join(" ")},e}(),zl=/^\s*\/\/.*$/gm,Dl=[":","[",".","#"];function Fl(e){var t,n,r,a,i=e===void 0?rt:e,o=i.options,s=o===void 0?rt:o,c=i.plugins,l=c===void 0?Dn:c,f=new ll(s),d=[],h=function(g){function b(x){if(x)try{g(x+"}")}catch{}}return function(x,v,E,_,C,j,A,V,G,ae){switch(x){case 1:if(G===0&&v.charCodeAt(0)===64)return g(v+";"),"";break;case 2:if(V===0)return v+"/*|*/";break;case 3:switch(V){case 102:case 112:return g(E[0]+v),"";default:return v+(ae===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(b)}}}(function(g){d.push(g)}),w=function(g,b,x){return b===0&&Dl.indexOf(x[n.length])!==-1||x.match(a)?g:"."+t};function y(g,b,x,v){v===void 0&&(v="&");var E=g.replace(zl,""),_=b&&x?x+" "+b+" { "+E+" }":E;return t=v,n=b,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),f(x||!b?"":b,_)}return f.use([].concat(l,[function(g,b,x){g===2&&x.length&&x[0].lastIndexOf(n)>0&&(x[0]=x[0].replace(r,w))},h,function(g){if(g===-2){var b=d;return d=[],b}}])),y.hash=l.length?l.reduce(function(g,b){return b.name||sn(15),Ot(g,b.name)},5381).toString():"",y}var ls=me.createContext();ls.Consumer;var fs=me.createContext(),Wl=(fs.Consumer,new ss),Gr=Fl();function Yl(){return m.useContext(ls)||Wl}function Bl(){return m.useContext(fs)||Gr}var us=function(){function e(t,n){var r=this;this.inject=function(a,i){i===void 0&&(i=Gr);var o=r.name+i.hash;a.hasNameForId(r.id,o)||a.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.toString=function(){return sn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Gr),this.name+t.hash},e}(),Ul=/([A-Z])/,Gl=/([A-Z])/g,Hl=/^ms-/,Vl=function(e){return"-"+e.toLowerCase()};function yi(e){return Ul.test(e)?e.replace(Gl,Vl).replace(Hl,"-ms-"):e}var wi=function(e){return e==null||e===!1||e===""};function $t(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,s=e.length;o<s;o+=1)(a=$t(e[o],t,n,r))!==""&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}if(wi(e))return"";if(Oa(e))return"."+e.styledComponentId;if(Kt(e)){if(typeof(l=e)!="function"||l.prototype&&l.prototype.isReactComponent||!t)return e;var c=e(t);return $t(c,t,n,r)}var l;return e instanceof us?n?(e.inject(n,r),e.getName(r)):e:Br(e)?function f(d,h){var w,y,g=[];for(var b in d)d.hasOwnProperty(b)&&!wi(d[b])&&(Array.isArray(d[b])&&d[b].isCss||Kt(d[b])?g.push(yi(b)+":",d[b],";"):Br(d[b])?g.push.apply(g,f(d[b],b)):g.push(yi(b)+": "+(w=b,(y=d[b])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||w in fl||w.startsWith("--")?String(y).trim():y+"px")+";"));return h?[h+" {"].concat(g,["}"]):g}(e):e.toString()}var xi=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ds(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Kt(e)||Br(e)?xi($t(hi(Dn,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:xi($t(hi(e,n)))}var Xl=function(e,t,n){return n===void 0&&(n=rt),e.theme!==n.theme&&e.theme||t||n.theme},ql=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kl=/(^-|-$)/g;function Er(e){return e.replace(ql,"-").replace(Kl,"")}var ms=function(e){return Ur(cs(e)>>>0)};function gn(e){return typeof e=="string"&&!0}var Hr=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Zl=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Ql(e,t,n){var r=e[n];Hr(t)&&Hr(r)?ps(r,t):e[n]=t}function ps(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(Hr(o))for(var s in o)Zl(s)&&Ql(e,o[s],s)}return e}var hs=me.createContext();hs.Consumer;var Or={};function gs(e,t,n){var r=Oa(e),a=!gn(e),i=t.attrs,o=i===void 0?Dn:i,s=t.componentId,c=s===void 0?function(v,E){var _=typeof v!="string"?"sc":Er(v);Or[_]=(Or[_]||0)+1;var C=_+"-"+ms("5.3.11"+_+Or[_]);return E?E+"-"+C:C}(t.displayName,t.parentComponentId):s,l=t.displayName,f=l===void 0?function(v){return gn(v)?"styled."+v:"Styled("+gi(v)+")"}(e):l,d=t.displayName&&t.componentId?Er(t.displayName)+"-"+t.componentId:t.componentId||c,h=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(v,E,_){return e.shouldForwardProp(v,E,_)&&t.shouldForwardProp(v,E,_)}:e.shouldForwardProp);var y,g=new Ll(n,d,r?e.componentStyle:void 0),b=g.isStatic&&o.length===0,x=function(v,E){return function(_,C,j,A){var V=_.attrs,G=_.componentStyle,ae=_.defaultProps,ye=_.foldedComponentIds,ee=_.shouldForwardProp,oe=_.styledComponentId,xe=_.target,ce=function($,p,W){$===void 0&&($=rt);var S=Ve({},p,{theme:$}),K={};return W.forEach(function(D){var Y,M,J,te=D;for(Y in Kt(te)&&(te=te(S)),te)S[Y]=K[Y]=Y==="className"?(M=K[Y],J=te[Y],M&&J?M+" "+J:M||J):te[Y]}),[S,K]}(Xl(C,m.useContext(hs),ae)||rt,C,V),Se=ce[0],fe=ce[1],z=function($,p,W,S){var K=Yl(),D=Bl(),Y=p?$.generateAndInjectStyles(rt,K,D):$.generateAndInjectStyles(W,K,D);return Y}(G,A,Se),Pe=j,Oe=fe.$as||C.$as||fe.as||C.as||xe,Ce=gn(Oe),R=fe!==C?Ve({},C,{},fe):C,O={};for(var T in R)T[0]!=="$"&&T!=="as"&&(T==="forwardedAs"?O.as=R[T]:(ee?ee(T,ui,Oe):!Ce||ui(T))&&(O[T]=R[T]));return C.style&&fe.style!==C.style&&(O.style=Ve({},C.style,{},fe.style)),O.className=Array.prototype.concat(ye,oe,z!==oe?z:null,C.className,fe.className).filter(Boolean).join(" "),O.ref=Pe,m.createElement(Oe,O)}(y,v,E,b)};return x.displayName=f,(y=me.forwardRef(x)).attrs=h,y.componentStyle=g,y.displayName=f,y.shouldForwardProp=w,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Dn,y.styledComponentId=d,y.target=r?e.target:e,y.withComponent=function(v){var E=t.componentId,_=function(j,A){if(j==null)return{};var V,G,ae={},ye=Object.keys(j);for(G=0;G<ye.length;G++)V=ye[G],A.indexOf(V)>=0||(ae[V]=j[V]);return ae}(t,["componentId"]),C=E&&E+"-"+(gn(v)?v:Er(gi(v)));return gs(v,Ve({},_,{attrs:h,componentId:C}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?ps({},e.defaultProps,v):v}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),a&&wl(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Vr=function(e){return function t(n,r,a){if(a===void 0&&(a=rt),!ka.isValidElementType(r))return sn(1,String(r));var i=function(){return n(r,a,ds.apply(void 0,arguments))};return i.withConfig=function(o){return t(n,r,Ve({},a,{},o))},i.attrs=function(o){return t(n,r,Ve({},a,{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)}))},i}(gs,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Vr[e]=Vr(e)});function Aa(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ds.apply(void 0,[e].concat(n)).join(""),i=ms(a);return new us(i,a)}const cn=Vr;var vs=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Me=242.776657104492,Jl=1.6,ef=Aa(ki||(ki=vs([`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`],[`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`])),Me*.14,Me,Me*.11,Me*.35,Me,Me*.35,Me*.01,Me,Me*.99);cn.path(Si||(Si=vs([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),Me*.01,Me,ef,Jl);var ki,Si,Ei=globalThis&&globalThis.__assign||function(){return Ei=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ei.apply(this,arguments)},Oi=globalThis&&globalThis.__assign||function(){return Oi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Oi.apply(this,arguments)},Ht=globalThis&&globalThis.__assign||function(){return Ht=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ht.apply(this,arguments)},Cr=20,tf=function(e){return["M"+e+" 0c0-9.94-8.06",e,e,e].join("-")},nf=function(e,t,n){var r=Math.max(e,t),a=-n-r/2+1,i=n*2+r;return[a,a,i,i].join(" ")},rf=function(e){var t=e.height,n=t===void 0?80:t,r=e.width,a=r===void 0?80:r,i=e.color,o=i===void 0?ri:i,s=e.secondaryColor,c=s===void 0?ri:s,l=e.ariaLabel,f=l===void 0?"oval-loading":l,d=e.wrapperStyle,h=e.wrapperClass,w=e.visible,y=w===void 0?!0:w,g=e.strokeWidth,b=g===void 0?2:g,x=e.strokeWidthSecondary;return me.createElement("div",Ht({style:Ht(Ht({},nl(y)),d),className:h,"data-testid":"oval-loading","aria-label":f},rl),me.createElement("svg",{width:a,height:n,viewBox:nf(Number(b),Number(x||b),Cr),xmlns:"http://www.w3.org/2000/svg",stroke:o,"data-testid":"oval-svg"},me.createElement("g",{fill:"none",fillRule:"evenodd"},me.createElement("g",{transform:"translate(1 1)",strokeWidth:Number(x||b),"data-testid":"oval-secondary-group"},me.createElement("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:Cr,stroke:c,strokeWidth:b}),me.createElement("path",{d:tf(Cr)},me.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"}))))))},Ci=globalThis&&globalThis.__assign||function(){return Ci=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ci.apply(this,arguments)},Ai=globalThis&&globalThis.__assign||function(){return Ai=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ai.apply(this,arguments)},Ti=globalThis&&globalThis.__assign||function(){return Ti=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ti.apply(this,arguments)},_i=globalThis&&globalThis.__assign||function(){return _i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},_i.apply(this,arguments)},af=function(t,n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[t]<"u")return r[t];if(t&&t.indexOf(".")>0){for(var a=t.split("."),i=a.length,o=r[a[0]],s=1;o!=null&&s<i;)o=o[a[s]],s+=1;if(typeof o<"u")return o}return n}},Ta=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Ni=globalThis&&globalThis.__assign||function(){return Ni=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ni.apply(this,arguments)},of=Aa(Ri||(Ri=Ta([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));cn.svg(Ii||(Ii=Ta([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),of,af("speed","0.75"));cn.polyline(Pi||(Pi=Ta([`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`],[`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`])),function(e){return e.width});var Ri,Ii,Pi,$i=globalThis&&globalThis.__assign||function(){return $i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},$i.apply(this,arguments)},Mi=globalThis&&globalThis.__assign||function(){return Mi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Mi.apply(this,arguments)},ji=globalThis&&globalThis.__assign||function(){return ji=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ji.apply(this,arguments)},_a=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Li=globalThis&&globalThis.__assign||function(){return Li=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Li.apply(this,arguments)},sf=Aa(zi||(zi=_a([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));cn.polygon(Di||(Di=_a([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),sf);cn.svg(Fi||(Fi=_a([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var zi,Di,Fi,Wi=globalThis&&globalThis.__assign||function(){return Wi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Wi.apply(this,arguments)},Yi=globalThis&&globalThis.__assign||function(){return Yi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Yi.apply(this,arguments)},Bi=globalThis&&globalThis.__assign||function(){return Bi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Bi.apply(this,arguments)},Ui=globalThis&&globalThis.__assign||function(){return Ui=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ui.apply(this,arguments)},Gi=globalThis&&globalThis.__assign||function(){return Gi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Gi.apply(this,arguments)},Hi=globalThis&&globalThis.__assign||function(){return Hi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Hi.apply(this,arguments)},Vi=globalThis&&globalThis.__assign||function(){return Vi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Vi.apply(this,arguments)},Xi=globalThis&&globalThis.__assign||function(){return Xi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Xi.apply(this,arguments)},qi=globalThis&&globalThis.__assign||function(){return qi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},qi.apply(this,arguments)},Ki=globalThis&&globalThis.__assign||function(){return Ki=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ki.apply(this,arguments)},Zi=globalThis&&globalThis.__assign||function(){return Zi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Zi.apply(this,arguments)},Qi=globalThis&&globalThis.__assign||function(){return Qi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Qi.apply(this,arguments)},Ji=globalThis&&globalThis.__assign||function(){return Ji=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ji.apply(this,arguments)},eo=globalThis&&globalThis.__assign||function(){return eo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},eo.apply(this,arguments)};function cf(){return u("div",{className:"video-spinner",children:u(rf,{width:50,height:50,color:"#b55d42",ariaLabel:"oval-loading"})})}function lf({nbr:e=1}){const t=m.useRef(),[n,r]=m.useState(0),a=screen.availWidth*1.2,i=screen.availHeight*1.2;return m.useLayoutEffect(()=>{let o;const s=()=>{r(c=>c+1),o=requestAnimationFrame(s)};return o=requestAnimationFrame(s),()=>cancelAnimationFrame(o)},[]),m.useEffect(()=>{const s=(t==null?void 0:t.current).getContext("2d");if(s.clearRect(0,0,a,i),n<1)for(let c=0;c<e;c++)new Jo({x:a/2,y:i/2,angle:Math.random()*Math.PI*2,color:Qo(),alpha:He(.1,.8),size:He(15,70),speed:He(7,25),strokeS:"#d3725b",ctx:s,noRaf:!1});return()=>cancelAnimationFrame(n)},[n]),u("div",{style:{position:"absolute",width:`${a}px`,height:`${i}px`},children:u(es,{onRef:t,w:a,h:i,zIndex:5})})}function ff(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function uf(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var df=function(){function e(n){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(uf(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=ff(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ee="-ms-",Wn="-moz-",X="-webkit-",bs="comm",Na="rule",Ra="decl",mf="@import",ys="@keyframes",pf="@layer",hf=Math.abs,ir=String.fromCharCode,gf=Object.assign;function vf(e,t){return ke(e,0)^45?(((t<<2^ke(e,0))<<2^ke(e,1))<<2^ke(e,2))<<2^ke(e,3):0}function ws(e){return e.trim()}function bf(e,t){return(e=t.exec(e))?e[0]:e}function q(e,t,n){return e.replace(t,n)}function Xr(e,t){return e.indexOf(t)}function ke(e,t){return e.charCodeAt(t)|0}function Zt(e,t,n){return e.slice(t,n)}function We(e){return e.length}function Ia(e){return e.length}function vn(e,t){return t.push(e),e}function yf(e,t){return e.map(t).join("")}var or=1,Mt=1,xs=0,Ae=0,pe=0,Lt="";function sr(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:or,column:Mt,length:o,return:""}}function Yt(e,t){return gf(sr("",null,null,"",null,null,0),e,{length:-e.length},t)}function wf(){return pe}function xf(){return pe=Ae>0?ke(Lt,--Ae):0,Mt--,pe===10&&(Mt=1,or--),pe}function _e(){return pe=Ae<xs?ke(Lt,Ae++):0,Mt++,pe===10&&(Mt=1,or++),pe}function Ge(){return ke(Lt,Ae)}function $n(){return Ae}function ln(e,t){return Zt(Lt,e,t)}function Qt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ks(e){return or=Mt=1,xs=We(Lt=e),Ae=0,[]}function Ss(e){return Lt="",e}function Mn(e){return ws(ln(Ae-1,qr(e===91?e+2:e===40?e+1:e)))}function kf(e){for(;(pe=Ge())&&pe<33;)_e();return Qt(e)>2||Qt(pe)>3?"":" "}function Sf(e,t){for(;--t&&_e()&&!(pe<48||pe>102||pe>57&&pe<65||pe>70&&pe<97););return ln(e,$n()+(t<6&&Ge()==32&&_e()==32))}function qr(e){for(;_e();)switch(pe){case e:return Ae;case 34:case 39:e!==34&&e!==39&&qr(pe);break;case 40:e===41&&qr(e);break;case 92:_e();break}return Ae}function Ef(e,t){for(;_e()&&e+pe!==47+10;)if(e+pe===42+42&&Ge()===47)break;return"/*"+ln(t,Ae-1)+"*"+ir(e===47?e:_e())}function Of(e){for(;!Qt(Ge());)_e();return ln(e,Ae)}function Cf(e){return Ss(jn("",null,null,null,[""],e=ks(e),0,[0],e))}function jn(e,t,n,r,a,i,o,s,c){for(var l=0,f=0,d=o,h=0,w=0,y=0,g=1,b=1,x=1,v=0,E="",_=a,C=i,j=r,A=E;b;)switch(y=v,v=_e()){case 40:if(y!=108&&ke(A,d-1)==58){Xr(A+=q(Mn(v),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:A+=Mn(v);break;case 9:case 10:case 13:case 32:A+=kf(y);break;case 92:A+=Sf($n()-1,7);continue;case 47:switch(Ge()){case 42:case 47:vn(Af(Ef(_e(),$n()),t,n),c);break;default:A+="/"}break;case 123*g:s[l++]=We(A)*x;case 125*g:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+f:x==-1&&(A=q(A,/\f/g,"")),w>0&&We(A)-d&&vn(w>32?no(A+";",r,n,d-1):no(q(A," ","")+";",r,n,d-2),c);break;case 59:A+=";";default:if(vn(j=to(A,t,n,l,f,a,s,E,_=[],C=[],d),i),v===123)if(f===0)jn(A,t,j,j,_,i,d,s,C);else switch(h===99&&ke(A,3)===110?100:h){case 100:case 108:case 109:case 115:jn(e,j,j,r&&vn(to(e,j,j,0,0,a,s,E,a,_=[],d),C),a,C,d,s,r?_:C);break;default:jn(A,j,j,j,[""],C,0,s,C)}}l=f=w=0,g=x=1,E=A="",d=o;break;case 58:d=1+We(A),w=y;default:if(g<1){if(v==123)--g;else if(v==125&&g++==0&&xf()==125)continue}switch(A+=ir(v),v*g){case 38:x=f>0?1:(A+="\f",-1);break;case 44:s[l++]=(We(A)-1)*x,x=1;break;case 64:Ge()===45&&(A+=Mn(_e())),h=Ge(),f=d=We(E=A+=Of($n())),v++;break;case 45:y===45&&We(A)==2&&(g=0)}}return i}function to(e,t,n,r,a,i,o,s,c,l,f){for(var d=a-1,h=a===0?i:[""],w=Ia(h),y=0,g=0,b=0;y<r;++y)for(var x=0,v=Zt(e,d+1,d=hf(g=o[y])),E=e;x<w;++x)(E=ws(g>0?h[x]+" "+v:q(v,/&\f/g,h[x])))&&(c[b++]=E);return sr(e,t,n,a===0?Na:s,c,l,f)}function Af(e,t,n){return sr(e,t,n,bs,ir(wf()),Zt(e,2,-2),0)}function no(e,t,n,r){return sr(e,t,n,Ra,Zt(e,0,r),Zt(e,r+1,-1),r)}function _t(e,t){for(var n="",r=Ia(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function Tf(e,t,n,r){switch(e.type){case pf:if(e.children.length)break;case mf:case Ra:return e.return=e.return||e.value;case bs:return"";case ys:return e.return=e.value+"{"+_t(e.children,r)+"}";case Na:e.value=e.props.join(",")}return We(n=_t(e.children,r))?e.return=e.value+"{"+n+"}":""}function _f(e){var t=Ia(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function Nf(e){return function(t){t.root||(t=t.return)&&e(t)}}var Rf=function(t,n,r){for(var a=0,i=0;a=i,i=Ge(),a===38&&i===12&&(n[r]=1),!Qt(i);)_e();return ln(t,Ae)},If=function(t,n){var r=-1,a=44;do switch(Qt(a)){case 0:a===38&&Ge()===12&&(n[r]=1),t[r]+=Rf(Ae-1,n,r);break;case 2:t[r]+=Mn(a);break;case 4:if(a===44){t[++r]=Ge()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ir(a)}while(a=_e());return t},Pf=function(t,n){return Ss(If(ks(t),n))},ro=new WeakMap,$f=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ro.get(r))&&!a){ro.set(t,!0);for(var i=[],o=Pf(n,i),s=r.props,c=0,l=0;c<o.length;c++)for(var f=0;f<s.length;f++,l++)t.props[l]=i[c]?o[c].replace(/&\f/g,s[f]):s[f]+" "+o[c]}}},Mf=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Es(e,t){switch(vf(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+Wn+e+Ee+e+e;case 6828:case 4268:return X+e+Ee+e+e;case 6165:return X+e+Ee+"flex-"+e+e;case 5187:return X+e+q(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+Ee+"flex-$1$2")+e;case 5443:return X+e+Ee+"flex-item-"+q(e,/flex-|-self/,"")+e;case 4675:return X+e+Ee+"flex-line-pack"+q(e,/align-content|flex-|-self/,"")+e;case 5548:return X+e+Ee+q(e,"shrink","negative")+e;case 5292:return X+e+Ee+q(e,"basis","preferred-size")+e;case 6060:return X+"box-"+q(e,"-grow","")+X+e+Ee+q(e,"grow","positive")+e;case 4554:return X+q(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return q(q(q(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return q(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return q(q(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+Ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4095:case 3583:case 4068:case 2532:return q(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(We(e)-1-t>6)switch(ke(e,t+1)){case 109:if(ke(e,t+4)!==45)break;case 102:return q(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+Wn+(ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xr(e,"stretch")?Es(q(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ke(e,t+1)!==115)break;case 6444:switch(ke(e,We(e)-3-(~Xr(e,"!important")&&10))){case 107:return q(e,":",":"+X)+e;case 101:return q(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+X+(ke(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+Ee+"$2box$3")+e}break;case 5936:switch(ke(e,t+11)){case 114:return X+e+Ee+q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+Ee+q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+Ee+q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return X+e+Ee+e+e}return e}var jf=function(t,n,r,a){if(t.length>-1&&!t.return)switch(t.type){case Ra:t.return=Es(t.value,t.length);break;case ys:return _t([Yt(t,{value:q(t.value,"@","@"+X)})],a);case Na:if(t.length)return yf(t.props,function(i){switch(bf(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return _t([Yt(t,{props:[q(i,/:(read-\w+)/,":"+Wn+"$1")]})],a);case"::placeholder":return _t([Yt(t,{props:[q(i,/:(plac\w+)/,":"+X+"input-$1")]}),Yt(t,{props:[q(i,/:(plac\w+)/,":"+Wn+"$1")]}),Yt(t,{props:[q(i,/:(plac\w+)/,Ee+"input-$1")]})],a)}return""})}},Lf=[jf],zf=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var b=g.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var a=t.stylisPlugins||Lf,i={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var b=g.getAttribute("data-emotion").split(" "),x=1;x<b.length;x++)i[b[x]]=!0;s.push(g)});var c,l=[$f,Mf];{var f,d=[Tf,Nf(function(g){f.insert(g)})],h=_f(l.concat(a,d)),w=function(b){return _t(Cf(b),h)};c=function(b,x,v,E){f=v,w(b?b+"{"+x.styles+"}":x.styles),E&&(y.inserted[x.name]=!0)}}var y={key:n,sheet:new df({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:c};return y.sheet.hydrate(s),y};function Yn(){return Yn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yn.apply(this,arguments)}var Df=!0;function Os(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var Pa=function(t,n,r){var a=t.key+"-"+n.name;(r===!1||Df===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},Cs=function(t,n,r){Pa(t,n,r);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+a:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Ff(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Wf={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yf=/[A-Z]|^ms/g,Bf=/_EMO_([^_]+?)_([^]*?)_EMO_/g,As=function(t){return t.charCodeAt(1)===45},ao=function(t){return t!=null&&typeof t!="boolean"},Ar=rs(function(e){return As(e)?e:e.replace(Yf,"-$&").toLowerCase()}),io=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Bf,function(r,a,i){return Ye={name:a,styles:i,next:Ye},a})}return Wf[t]!==1&&!As(t)&&typeof n=="number"&&n!==0?n+"px":n};function Jt(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Ye={name:n.name,styles:n.styles,next:Ye},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Ye={name:r.name,styles:r.styles,next:Ye},r=r.next;var a=n.styles+";";return a}return Uf(e,t,n)}case"function":{if(e!==void 0){var i=Ye,o=n(e);return Ye=i,Jt(e,t,o)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Uf(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Jt(e,t,n[a])+";";else for(var i in n){var o=n[i];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=i+"{"+t[o]+"}":ao(o)&&(r+=Ar(i)+":"+io(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)ao(o[s])&&(r+=Ar(i)+":"+io(i,o[s])+";");else{var c=Jt(e,t,o);switch(i){case"animation":case"animationName":{r+=Ar(i)+":"+c+";";break}default:r+=i+"{"+c+"}"}}}return r}var oo=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ye,$a=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,i="";Ye=void 0;var o=t[0];o==null||o.raw===void 0?(a=!1,i+=Jt(r,n,o)):i+=o[0];for(var s=1;s<t.length;s++)i+=Jt(r,n,t[s]),a&&(i+=o[s]);oo.lastIndex=0;for(var c="",l;(l=oo.exec(i))!==null;)c+="-"+l[1];var f=Ff(i)+c;return{name:f,styles:i,next:Ye}},Gf=function(t){return t()},Hf=ni["useInsertionEffect"]?ni["useInsertionEffect"]:!1,Ts=Hf||Gf,Ma={}.hasOwnProperty,_s=m.createContext(typeof HTMLElement<"u"?zf({key:"css"}):null);_s.Provider;var Ns=function(t){return m.forwardRef(function(n,r){var a=m.useContext(_s);return t(n,a,r)})},Rs=m.createContext({}),Kr="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Vf=function(t,n){var r={};for(var a in n)Ma.call(n,a)&&(r[a]=n[a]);return r[Kr]=t,r},Xf=function(t){var n=t.cache,r=t.serialized,a=t.isStringTag;return Pa(n,r,a),Ts(function(){return Cs(n,r,a)}),null},qf=Ns(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var a=e[Kr],i=[r],o="";typeof e.className=="string"?o=Os(t.registered,i,e.className):e.className!=null&&(o=e.className+" ");var s=$a(i,void 0,m.useContext(Rs));o+=t.key+"-"+s.name;var c={};for(var l in e)Ma.call(e,l)&&l!=="css"&&l!==Kr&&(c[l]=e[l]);return c.ref=n,c.className=o,m.createElement(m.Fragment,null,m.createElement(Xf,{cache:t,serialized:s,isStringTag:typeof a=="string"}),m.createElement(a,c))}),Kf=qf,Zf=Le;function de(e,t,n){return Ma.call(t,"css")?u(Kf,Vf(e,t),n):u(e,t,n)}function Is(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return $a(t)}var k=function(){var t=Is.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Qf=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var i=t[r];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=e(i);else{o="";for(var s in i)i[s]&&s&&(o&&(o+=" "),o+=s)}break}default:o=i}o&&(a&&(a+=" "),a+=o)}}return a};function Jf(e,t,n){var r=[],a=Os(e,r,n);return r.length<2?n:a+t(r)}var eu=function(t){var n=t.cache,r=t.serializedArr;return Ts(function(){for(var a=0;a<r.length;a++)Cs(n,r[a],!1)}),null},Tr=Ns(function(e,t){var n=!1,r=[],a=function(){for(var l=arguments.length,f=new Array(l),d=0;d<l;d++)f[d]=arguments[d];var h=$a(f,t.registered);return r.push(h),Pa(t,h,!1),t.key+"-"+h.name},i=function(){for(var l=arguments.length,f=new Array(l),d=0;d<l;d++)f[d]=arguments[d];return Jf(t.registered,a,Qf(f))},o={css:a,cx:i,theme:m.useContext(Rs)},s=e.children(o);return n=!0,m.createElement(m.Fragment,null,m.createElement(eu,{cache:t,serializedArr:r}),s)}),tu=Object.defineProperty,nu=(e,t,n)=>t in e?tu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bn=(e,t,n)=>(nu(e,typeof t!="symbol"?t+"":t,n),n),Zr=new Map,yn=new WeakMap,so=0,ru=void 0;function au(e){return e?(yn.has(e)||(so+=1,yn.set(e,so.toString())),yn.get(e)):"0"}function iu(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?au(e.root):e[t]}`).toString()}function ou(e){const t=iu(e);let n=Zr.get(t);if(!n){const r=new Map;let a;const i=new IntersectionObserver(o=>{o.forEach(s=>{var c;const l=s.isIntersecting&&a.some(f=>s.intersectionRatio>=f);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=l),(c=r.get(s.target))==null||c.forEach(f=>{f(l,s)})})},e);a=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Zr.set(t,n)}return n}function Ps(e,t,n={},r=ru){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const c=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:a,observer:i,elements:o}=ou(n),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),i.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(o.delete(e),i.unobserve(e)),o.size===0&&(i.disconnect(),Zr.delete(a))}}function su(e){return typeof e.children!="function"}var co=class extends m.Component{constructor(e){super(e),bn(this,"node",null),bn(this,"_unobserveCb",null),bn(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),bn(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),su(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:i}=this.props;this._unobserveCb=Ps(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:y}=this.state;return e({inView:w,entry:y,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:a,rootMargin:i,onChange:o,skip:s,trackVisibility:c,delay:l,initialInView:f,fallbackInView:d,...h}=this.props;return m.createElement(t||"div",{ref:this.handleNode,...h},e)}};function $s({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:a,triggerOnce:i,skip:o,initialInView:s,fallbackInView:c,onChange:l}={}){var f;const[d,h]=m.useState(null),w=m.useRef(),[y,g]=m.useState({inView:!!s,entry:void 0});w.current=l,m.useEffect(()=>{if(o||!d)return;let E;return E=Ps(d,(_,C)=>{g({inView:_,entry:C}),w.current&&w.current(_,C),C.isIntersecting&&i&&E&&(E(),E=void 0)},{root:a,rootMargin:r,threshold:e,trackVisibility:n,delay:t},c),()=>{E&&E()}},[Array.isArray(e)?e.toString():e,d,a,r,i,o,n,c,t]);const b=(f=y.entry)==null?void 0:f.target,x=m.useRef();!d&&b&&!i&&!o&&x.current!==b&&(x.current=b,g({inView:!!s,entry:void 0}));const v=[h,y.inView,y.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var Ms={exports:{}},Q={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),La=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),lr=Symbol.for("react.strict_mode"),fr=Symbol.for("react.profiler"),ur=Symbol.for("react.provider"),dr=Symbol.for("react.context"),cu=Symbol.for("react.server_context"),mr=Symbol.for("react.forward_ref"),pr=Symbol.for("react.suspense"),hr=Symbol.for("react.suspense_list"),gr=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),lu=Symbol.for("react.offscreen"),js;js=Symbol.for("react.module.reference");function Ie(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ja:switch(e=e.type,e){case cr:case fr:case lr:case pr:case hr:return e;default:switch(e=e&&e.$$typeof,e){case cu:case dr:case mr:case vr:case gr:case ur:return e;default:return t}}case La:return t}}}Q.ContextConsumer=dr;Q.ContextProvider=ur;Q.Element=ja;Q.ForwardRef=mr;Q.Fragment=cr;Q.Lazy=vr;Q.Memo=gr;Q.Portal=La;Q.Profiler=fr;Q.StrictMode=lr;Q.Suspense=pr;Q.SuspenseList=hr;Q.isAsyncMode=function(){return!1};Q.isConcurrentMode=function(){return!1};Q.isContextConsumer=function(e){return Ie(e)===dr};Q.isContextProvider=function(e){return Ie(e)===ur};Q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ja};Q.isForwardRef=function(e){return Ie(e)===mr};Q.isFragment=function(e){return Ie(e)===cr};Q.isLazy=function(e){return Ie(e)===vr};Q.isMemo=function(e){return Ie(e)===gr};Q.isPortal=function(e){return Ie(e)===La};Q.isProfiler=function(e){return Ie(e)===fr};Q.isStrictMode=function(e){return Ie(e)===lr};Q.isSuspense=function(e){return Ie(e)===pr};Q.isSuspenseList=function(e){return Ie(e)===hr};Q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===cr||e===fr||e===lr||e===pr||e===hr||e===lu||typeof e=="object"&&e!==null&&(e.$$typeof===vr||e.$$typeof===gr||e.$$typeof===ur||e.$$typeof===dr||e.$$typeof===mr||e.$$typeof===js||e.getModuleId!==void 0)};Q.typeOf=Ie;Ms.exports=Q;var fu=Ms.exports;k`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;k`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;k`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;k`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;k`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;k`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const uu=k`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,du=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mu=k`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pu=k`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,hu=k`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,za=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gu=k`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vu=k`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bu=k`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yu=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wu=k`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xu=k`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ku=k`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Su({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=za,iterationCount:a=1}){return Is`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Eu(e){return e==null}function Ou(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ls(e,t){return n=>n?e():t()}function en(e){return Ls(e,()=>null)}function Qr(e){return en(()=>({opacity:0}))(e)}const fn=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:a=1e3,fraction:i=0,keyframes:o=za,triggerOnce:s=!1,className:c,style:l,childClassName:f,childStyle:d,children:h,onVisibilityChange:w}=e,y=m.useMemo(()=>Su({keyframes:o,duration:a}),[a,o]);return Eu(h)?null:Ou(h)?de(Au,{...e,animationStyles:y,children:String(h)}):fu.isFragment(h)?de(zs,{...e,animationStyles:y}):de(Zf,{children:m.Children.map(h,(g,b)=>{if(!m.isValidElement(g))return null;const x=r+(t?b*a*n:0);switch(g.type){case"ol":case"ul":return de(Tr,{children:({cx:v})=>de(g.type,{...g.props,className:v(c,g.props.className),style:Object.assign({},l,g.props.style),children:de(fn,{...e,children:g.props.children})})});case"li":return de(co,{threshold:i,triggerOnce:s,onChange:w,children:({inView:v,ref:E})=>de(Tr,{children:({cx:_})=>de(g.type,{...g.props,ref:E,className:_(f,g.props.className),css:en(()=>y)(v),style:Object.assign({},d,g.props.style,Qr(!v),{animationDelay:x+"ms"})})})});default:return de(co,{threshold:i,triggerOnce:s,onChange:w,children:({inView:v,ref:E})=>de("div",{ref:E,className:c,css:en(()=>y)(v),style:Object.assign({},l,Qr(!v),{animationDelay:x+"ms"}),children:de(Tr,{children:({cx:_})=>de(g.type,{...g.props,className:_(f,g.props.className),style:Object.assign({},d,g.props.style)})})})})}})})},Cu={display:"inline-block",whiteSpace:"pre"},Au=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:i=1e3,fraction:o=0,triggerOnce:s=!1,className:c,style:l,children:f,onVisibilityChange:d}=e,{ref:h,inView:w}=$s({triggerOnce:s,threshold:o,onChange:d});return Ls(()=>de("div",{ref:h,className:c,style:Object.assign({},l,Cu),children:f.split("").map((y,g)=>de("span",{css:en(()=>t)(w),style:{animationDelay:a+g*i*r+"ms"},children:y},g))}),()=>de(zs,{...e,children:f}))(n)},zs=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:i,children:o,onVisibilityChange:s}=e,{ref:c,inView:l}=$s({triggerOnce:r,threshold:n,onChange:s});return de("div",{ref:c,className:a,css:en(()=>t)(l),style:Object.assign({},i,Qr(!l)),children:o})};k`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;k`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;k`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;k`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;k`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Tu=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,_u=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Nu=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ru=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Iu=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Pu=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,$u=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Mu=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,ju=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Lu=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,zu=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Du=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Fu=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Wu(e,t,n){switch(n){case"bottom-left":return t?_u:du;case"bottom-right":return t?Nu:mu;case"down":return e?t?Iu:hu:t?Ru:pu;case"left":return e?t?$u:gu:t?Pu:za;case"right":return e?t?ju:bu:t?Mu:vu;case"top-left":return t?Lu:yu;case"top-right":return t?zu:wu;case"up":return e?t?Fu:ku:t?Du:xu;default:return t?Tu:uu}}const Yu=e=>{const{big:t=!1,direction:n,reverse:r=!1,...a}=e,i=m.useMemo(()=>Wu(t,r,n),[t,n,r]);return de(fn,{keyframes:i,...a})};k`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;k`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;k`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;k`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;k`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;k`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;k`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const Bu=k`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Uu=k`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gu=k`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Hu=k`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Vu=k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Xu=k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,qu=k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Ku=k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function Zu(e,t){switch(t){case"down":return e?Vu:Bu;case"right":return e?qu:Gu;case"up":return e?Ku:Hu;case"left":default:return e?Xu:Uu}}const Qu=e=>{const{direction:t,reverse:n=!1,...r}=e,a=m.useMemo(()=>Zu(n,t),[t,n]);return de(fn,{keyframes:a,...r})},Ju=k`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,ed=k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,td=k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,nd=k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,rd=k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ad=k`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,id=k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,od=k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,sd=k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,cd=k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function ld(e,t){switch(t){case"down":return e?id:ed;case"left":return e?od:td;case"right":return e?sd:nd;case"up":return e?cd:rd;default:return e?ad:Ju}}const Ds=e=>{const{direction:t,reverse:n=!1,...r}=e,a=m.useMemo(()=>ld(n,t),[t,n]);return de(fn,{keyframes:a,...r})};function zt({nbr:e=30,xStart:t=window.innerWidth*1.2,yStart:n=window.innerWidth*1.2,...r}){const a=m.useRef(null);return m.useEffect(()=>{const i=a.current.getContext("2d");for(let o=0;o<e;o++)new Jo({x:t/2+He(-t*.6,t*.6),y:n/2+He(-n*.6,n*.6),angle:Math.random()*Math.PI*2,color:Qo(),alpha:He(.1,.8),size:He(15,70),speed:He(7,25),strokeS:"#d3725b",ctx:i})},[]),u(Yu,{triggerOnce:!0,children:u(es,{onRef:a,w:t,h:n,className:r.className})})}function fd(e={}){const{threshold:t=1,root:n=null,rootMargin:r="0px"}=e,[a,i]=m.useState(null),o=m.useRef(null);return[m.useCallback(c=>{if(o.current&&(o.current.disconnect(),o.current=null),(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE){const l=new IntersectionObserver(([f])=>{i(f)},{threshold:t,root:n,rootMargin:r});l.observe(c),o.current=l}},[t,n,r]),a]}function kt({borderSize:e=3,resW:t="vw",resH:n="vh",delay:r=1500,className:a="",position:i="absolute",...o}){const{isDark:s}=vt();return u("div",{ref:o.onRef,className:`popup-ctn ${a}`,style:{position:i,left:o.x+t,top:o.y+n,zIndex:o.zIndex},children:u("div",{className:`static-ctn-style ${o.start?"slideInLeft":"slideInRight"} ${o.isActive&&"activeX"}`,style:{position:"relative",width:o.w+t,height:o.h+n},children:u("div",{className:`static-div-style ${o.isActive&&"open"}`,style:{background:`${s?"#151f2e8e":"#ffffff1e"}`,color:`${s?"#ffffff":"#696f8a"}`,position:"relative",transition:"1.5s all ease",width:`${o.w}vw`,height:0+n,border:`${e}px solid #DE6E49`,borderRadius:`${e>5?10:5}px`,animationDelay:`${r}ms`},children:u("span",{className:`popup-span ${o.isActive&&"fadeIn"}`,style:{opacity:0,fontSize:"10rem !important",animationDelay:`${r+1e3}ms`,padding:"5px"},children:o.content})})})})}function ve({...e}){const[t,n]=fd({rootMargin:"50px"});return u(Le,{children:u(kt,{onRef:t,isActive:n==null?void 0:n.isIntersecting,borderSize:e.borderSize,fontSize:e.fontSize,resW:e.resW,resH:e.resH,w:e.w,h:e.h,x:e.x,y:e.y,speed:e.speed,content:e.content,delay:e.delay,start:e.start,zIndex:e.zIndex})})}function Fs({base:e=0,by:t=1,speed:n=1e3,limit:r=1/0}){const[a,i]=m.useState(e);return m.useEffect(()=>{if(a<=r){const o=setInterval(()=>{i(s=>s+t)},n);return()=>clearInterval(o)}},[a]),{count:a,limit:r,speed:n,increment:t}}function Ws(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Jr(e,t){return Jr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Jr(e,t)}function Ys(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Jr(e,t)}function _r(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var lo=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,ud=/\\([\u000b\u0020-\u00ff])/g,dd=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,md=pd;function pd(e){if(!e)throw new TypeError("argument string is required");var t=typeof e=="object"?hd(e):e;if(typeof t!="string")throw new TypeError("argument string is required to be a string");var n=t.indexOf(";"),r=n!==-1?t.slice(0,n).trim():t.trim();if(!dd.test(r))throw new TypeError("invalid media type");var a=new gd(r.toLowerCase());if(n!==-1){var i,o,s;for(lo.lastIndex=n;o=lo.exec(t);){if(o.index!==n)throw new TypeError("invalid parameter format");n+=o[0].length,i=o[1].toLowerCase(),s=o[2],s.charCodeAt(0)===34&&(s=s.slice(1,-1),s.indexOf("\\")!==-1&&(s=s.replace(ud,"$1"))),a.parameters[i]=s}if(n!==t.length)throw new TypeError("invalid parameter format")}return a}function hd(e){var t;if(typeof e.getHeader=="function"?t=e.getHeader("content-type"):typeof e.headers=="object"&&(t=e.headers&&e.headers["content-type"]),typeof t!="string")throw new TypeError("content-type header is missing from object");return t}function gd(e){this.parameters=Object.create(null),this.type=e}var St=new Map,Bs=function(t){return t.cloneNode(!0)},fo=function(){return window.location.protocol==="file:"},Us=function(t,n,r){var a=new XMLHttpRequest;a.onreadystatechange=function(){try{if(!/\.svg/i.test(t)&&a.readyState===2){var i=a.getResponseHeader("Content-Type");if(!i)throw new Error("Content type not found");var o=md(i).type;if(!(o==="image/svg+xml"||o==="text/plain"))throw new Error("Invalid content type: ".concat(o))}if(a.readyState===4){if(a.status===404||a.responseXML===null)throw new Error(fo()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+t);if(a.status===200||fo()&&a.status===0)r(null,a);else throw new Error("There was a problem injecting the SVG: "+a.status+" "+a.statusText)}}catch(s){if(a.abort(),s instanceof Error)r(s,a);else throw s}},a.open("GET",t),a.withCredentials=n,a.overrideMimeType&&a.overrideMimeType("text/xml"),a.send()},tt={},uo=function(t,n){tt[t]=tt[t]||[],tt[t].push(n)},vd=function(t){for(var n=function(o,s){setTimeout(function(){if(Array.isArray(tt[t])){var c=St.get(t),l=tt[t][o];c instanceof SVGSVGElement&&l(null,Bs(c)),c instanceof Error&&l(c),o===tt[t].length-1&&delete tt[t]}},0)},r=0,a=tt[t].length;r<a;r++)n(r)},bd=function(t,n,r){if(St.has(t)){var a=St.get(t);if(a===void 0){uo(t,r);return}if(a instanceof SVGSVGElement){r(null,Bs(a));return}}St.set(t,void 0),uo(t,r),Us(t,n,function(i,o){var s;i?St.set(t,i):((s=o.responseXML)===null||s===void 0?void 0:s.documentElement)instanceof SVGSVGElement&&St.set(t,o.responseXML.documentElement),vd(t)})},yd=function(t,n,r){Us(t,n,function(a,i){var o;a?r(a):((o=i.responseXML)===null||o===void 0?void 0:o.documentElement)instanceof SVGSVGElement&&r(null,i.responseXML.documentElement)})},wd=0,xd=function(){return++wd},Fe=[],mo={},kd="http://www.w3.org/2000/svg",Nr="http://www.w3.org/1999/xlink",po=function(t,n,r,a,i,o,s){var c=t.getAttribute("data-src")||t.getAttribute("src");if(!c){s(new Error("Invalid data-src or src attribute"));return}if(Fe.indexOf(t)!==-1){Fe.splice(Fe.indexOf(t),1),t=null;return}Fe.push(t),t.setAttribute("src","");var l=a?bd:yd;l(c,i,function(f,d){if(!d){Fe.splice(Fe.indexOf(t),1),t=null,s(f);return}var h=t.getAttribute("id");h&&d.setAttribute("id",h);var w=t.getAttribute("title");w&&d.setAttribute("title",w);var y=t.getAttribute("width");y&&d.setAttribute("width",y);var g=t.getAttribute("height");g&&d.setAttribute("height",g);var b=Array.from(new Set(_r(_r(_r([],(d.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(t.getAttribute("class")||"").split(" "),!0))).join(" ").trim();d.setAttribute("class",b);var x=t.getAttribute("style");x&&d.setAttribute("style",x),d.setAttribute("data-src",c);var v=[].filter.call(t.attributes,function(z){return/^data-\w[\w-]*$/.test(z.name)});if(Array.prototype.forEach.call(v,function(z){z.name&&z.value&&d.setAttribute(z.name,z.value)}),r){var E={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]},_,C,j,A,V;Object.keys(E).forEach(function(z){_=z,j=E[z],C=d.querySelectorAll(_+"[id]");for(var Pe=function(O,T){A=C[O].id,V=A+"-"+xd();var $;Array.prototype.forEach.call(j,function(J){$=d.querySelectorAll("["+J+'*="'+A+'"]');for(var te=0,P=$.length;te<P;te++){var ie=$[te].getAttribute(J);ie&&!ie.match(new RegExp('url\\("?#'+A+'"?\\)'))||$[te].setAttribute(J,"url(#"+V+")")}});for(var p=d.querySelectorAll("[*|href]"),W=[],S=0,K=p.length;S<K;S++){var D=p[S].getAttributeNS(Nr,"href");D&&D.toString()==="#"+C[O].id&&W.push(p[S])}for(var Y=0,M=W.length;Y<M;Y++)W[Y].setAttributeNS(Nr,"href","#"+V);C[O].id=V},Oe=0,Ce=C.length;Oe<Ce;Oe++)Pe(Oe)})}d.removeAttribute("xmlns:a");for(var G=d.querySelectorAll("script"),ae=[],ye,ee,oe=0,xe=G.length;oe<xe;oe++)ee=G[oe].getAttribute("type"),(!ee||ee==="application/ecmascript"||ee==="application/javascript"||ee==="text/javascript")&&(ye=G[oe].innerText||G[oe].textContent,ye&&ae.push(ye),d.removeChild(G[oe]));if(ae.length>0&&(n==="always"||n==="once"&&!mo[c])){for(var ce=0,Se=ae.length;ce<Se;ce++)new Function(ae[ce])(window);mo[c]=!0}var fe=d.querySelectorAll("style");if(Array.prototype.forEach.call(fe,function(z){z.textContent+=""}),d.setAttribute("xmlns",kd),d.setAttribute("xmlns:xlink",Nr),o(d),!t.parentNode){Fe.splice(Fe.indexOf(t),1),t=null,s(new Error("Parent node is null"));return}t.parentNode.replaceChild(d,t),Fe.splice(Fe.indexOf(t),1),t=null,s(null,d)})},Sd=function(t,n){var r=n===void 0?{}:n,a=r.afterAll,i=a===void 0?function(){}:a,o=r.afterEach,s=o===void 0?function(){}:o,c=r.beforeEach,l=c===void 0?function(){}:c,f=r.cacheRequests,d=f===void 0?!0:f,h=r.evalScripts,w=h===void 0?"never":h,y=r.httpRequestWithCredentials,g=y===void 0?!1:y,b=r.renumerateIRIElements,x=b===void 0?!0:b;if(t&&"length"in t)for(var v=0,E=0,_=t.length;E<_;E++)po(t[E],w,x,d,g,l,function(C,j){s(C,j),t&&"length"in t&&t.length===++v&&i(v)});else t?po(t,w,x,d,g,l,function(C,j){s(C,j),i(1),t=null}):i(0)},Gs={exports:{}},Ed="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Od=Ed,Cd=Od;function Hs(){}function Vs(){}Vs.resetWarningCache=Hs;var Ad=function(){function e(r,a,i,o,s,c){if(c!==Cd){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Vs,resetWarningCache:Hs};return n.PropTypes=n,n};Gs.exports=Ad();var ue=Gs.exports;const F=ba(ue);var Td=function(t){var n=(t==null?void 0:t.ownerDocument)||document;return n.defaultView||window},_d=function(t,n){for(var r in t)if(!(r in n))return!0;for(var a in n)if(t[a]!==n[a])return!0;return!1},Nd=["afterInjection","beforeInjection","desc","evalScripts","fallback","httpRequestWithCredentials","loading","renumerateIRIElements","src","title","useRequestCache","wrapper"],wn="http://www.w3.org/2000/svg",ho="http://www.w3.org/1999/xlink",pt=function(e){function t(){for(var r,a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return r=e.call.apply(e,[this].concat(i))||this,r.initialState={hasError:!1,isLoading:!0},r.state=r.initialState,r._isMounted=!1,r.reactWrapper=void 0,r.nonReactWrapper=void 0,r.refCallback=function(s){r.reactWrapper=s},r}Ys(t,e);var n=t.prototype;return n.renderSVG=function(){var a=this;if(this.reactWrapper instanceof Td(this.reactWrapper).Node){var i=this.props,o=i.desc,s=i.evalScripts,c=i.httpRequestWithCredentials,l=i.renumerateIRIElements,f=i.src,d=i.title,h=i.useRequestCache,w=this.props.onError,y=this.props.beforeInjection,g=this.props.afterInjection,b=this.props.wrapper,x,v;b==="svg"?(x=document.createElementNS(wn,b),x.setAttribute("xmlns",wn),x.setAttribute("xmlns:xlink",ho),v=document.createElementNS(wn,b)):(x=document.createElement(b),v=document.createElement(b)),x.appendChild(v),v.dataset.src=f,this.nonReactWrapper=this.reactWrapper.appendChild(x);var E=function(A){if(a.removeSVG(),!a._isMounted){w(A);return}a.setState(function(){return{hasError:!0,isLoading:!1}},function(){w(A)})},_=function(A,V){if(A){E(A);return}a._isMounted&&a.setState(function(){return{isLoading:!1}},function(){try{g(V)}catch(G){E(G)}})},C=function(A){if(A.setAttribute("role","img"),o){var V=A.querySelector(":scope > desc");V&&A.removeChild(V);var G=document.createElement("desc");G.innerHTML=o,A.prepend(G)}if(d){var ae=A.querySelector(":scope > title");ae&&A.removeChild(ae);var ye=document.createElement("title");ye.innerHTML=d,A.prepend(ye)}try{y(A)}catch(ee){E(ee)}};Sd(v,{afterEach:_,beforeEach:C,cacheRequests:h,evalScripts:s,httpRequestWithCredentials:c,renumerateIRIElements:l})}},n.removeSVG=function(){var a;(a=this.nonReactWrapper)!=null&&a.parentNode&&(this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),this.nonReactWrapper=null)},n.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},n.componentDidUpdate=function(a){var i=this;_d(Yn({},a),this.props)&&this.setState(function(){return i.initialState},function(){i.removeSVG(),i.renderSVG()})},n.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},n.render=function(){var a=this.props;a.afterInjection,a.beforeInjection,a.desc,a.evalScripts;var i=a.fallback;a.httpRequestWithCredentials;var o=a.loading;a.renumerateIRIElements,a.src,a.title,a.useRequestCache;var s=a.wrapper,c=Ws(a,Nd),l=s;return m.createElement(l,Yn({},c,{ref:this.refCallback},s==="svg"?{xmlns:wn,xmlnsXlink:ho}:{}),this.state.isLoading&&o&&m.createElement(o,null),this.state.hasError&&i&&m.createElement(i,null))},t}(m.Component);pt.defaultProps={afterInjection:function(){},beforeInjection:function(){},desc:"",evalScripts:"never",fallback:null,httpRequestWithCredentials:!1,loading:null,onError:function(){},renumerateIRIElements:!0,title:"",useRequestCache:!0,wrapper:"div"};pt.propTypes={afterInjection:ue.func,beforeInjection:ue.func,desc:ue.string,evalScripts:ue.oneOf(["always","once","never"]),fallback:ue.oneOfType([ue.func,ue.object,ue.string]),httpRequestWithCredentials:ue.bool,loading:ue.oneOfType([ue.func,ue.object,ue.string]),onError:ue.func,renumerateIRIElements:ue.bool,src:ue.string.isRequired,title:ue.string,useRequestCache:ue.bool,wrapper:ue.oneOf(["div","span","svg"])};function Xs({ctnW:e=100,unit:t="px"}){const{isLight:n}=vt(),r=a=>n&&a.classList.add("logo-svg-lightmode");return B("div",{className:"cubes","data-speed":"7",children:[u("div",{id:"light-cube",className:"cubes-svg",style:{width:e+t,height:e+t},"data-speed":"8",children:u(pt,{src:"./svg/cubes/light_blue_cubes.svg"})}),u("div",{id:"light-cube-bg",className:"cubes-svg",style:{width:2*e+t,height:2*e+(parseInt(e/5)+parseInt(e/10))+t},children:u(pt,{src:"./svg/cubes/background_cubes.svg",afterInjection:r})})]})}const Rd=m.memo(lf);function Id(){const e=m.useRef(),{count:t,limit:n}=Fs({limit:1});return m.useEffect(()=>{setTimeout(()=>{const r=e==null?void 0:e.current.children;Jc(r,"data-speed")},n*3e3)},[]),t>n&&B(Le,{children:[u("div",{ref:e,className:"layers",children:B(Ds,{className:"middle-frame-zoom",cascade:!0,children:[u("div",{className:"small-frame","data-speed":"8"}),u(Xs,{}),u("div",{className:"middle-frame","data-speed":"6"})]})}),u(Rd,{nbr:10}),u(ve,{x:3,y:13,w:25,h:10,content:"Spirits Entertainment",start:!0}),u(ve,{x:70,y:80,w:25,h:10,content:"Web - Design - Divertissement"}),u(zt,{nbr:50})]})}function Pd(){return B(Le,{children:[u(zt,{nbr:40}),u(ve,{x:3,y:13,w:25,h:10,content:"Qui sommes-nous ?"}),u(ve,{w:30,h:80,start:!0,content:"Spécialiste du design web et média, le développement d'applications et la mise en place d'outils permettant l'organisation et la création d'événements, Spirits entertainment vous offre ses services pour booster votre visibilité sur le web ainsi que recevoir des conseils et un accompagnement personnalisés pour préparer votre transition vers les dernières technologies"})]})}function Nt({children:e,...t}){const{fillColor:n="#151f2e8e"}=t,{strokeColor:r="#b55d41"}=t,{strokeSize:a=10}=t,{orientation:i="left"}=t;return B("div",{className:"wrapper",id:t.id,children:[u("div",{className:`cogwheel spin-${i}`,children:B("svg",{style:{fill:n,stroke:r,width:t.size+"px",height:t.size+"px"},id:"Layer_2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1077.42 1077.42",children:[u("path",{fill:n,stroke:r,strokeWidth:a,d:"M1021.43,642.26l9.09-70.03c1.25-9.6-3.88-18.89-12.67-22.95l-39.69-18.36c-7.37-3.41-12.22-10.57-12.8-18.67-1.69-23.8-5.32-47.05-10.74-69.61-1.85-7.71,.51-15.81,6.25-21.27l32.6-30.97c6.94-6.6,8.86-16.91,4.75-25.56l-30.29-63.79c-4.15-8.74-13.5-13.78-23.08-12.43l-43.3,6.07c-7.99,1.12-15.94-2.22-20.79-8.67-14.16-18.83-29.84-36.45-46.85-52.68-5.74-5.47-8.14-13.57-6.27-21.27l10.65-43.78c2.26-9.31-1.71-19.01-9.85-24.06l-60.02-37.21c-8.22-5.1-18.81-4.27-26.14,2.05l-33.04,28.49c-6.13,5.29-14.64,6.76-22.24,3.95-20.02-7.41-40.74-13.37-62.04-17.74-7.79-1.6-14.15-7.19-16.65-14.73l-14.14-42.68c-3.01-9.09-11.53-15.22-21.1-15.18l-70.61,.25c-9.68,.03-18.21,6.35-21.08,15.59l-12.92,41.68c-2.4,7.75-8.87,13.52-16.82,15.16-23.29,4.8-45.89,11.49-67.62,19.9-7.4,2.86-15.75,1.6-21.93-3.38l-34.96-28.18c-7.46-6.01-17.93-6.55-25.96-1.33l-59.22,38.46c-8.12,5.27-11.87,15.2-9.27,24.52l11.75,42.16c2.17,7.78-.1,16.1-5.86,21.77-16.77,16.48-32.18,34.33-46.06,53.37-4.67,6.4-12.37,9.85-20.24,9.01l-44.78-4.76c-9.52-1.01-18.62,4.21-22.54,12.95l-28.94,64.41c-3.97,8.83-1.74,19.21,5.49,25.63l32.61,28.98c6.04,5.36,8.64,13.58,6.87,21.46-5.08,22.64-8.37,45.96-9.7,69.8-.45,7.95-5.04,15.08-12.15,18.66l-40.21,20.25c-8.55,4.31-13.37,13.63-11.94,23.09l10.56,69.82c1.45,9.57,8.94,17.09,18.5,18.57l43.11,6.69c7.98,1.24,14.63,6.74,17.4,14.33,8.15,22.27,18.08,43.68,29.65,64.04,3.92,6.9,3.89,15.36-.13,22.2l-22.8,38.75c-4.86,8.25-3.86,18.7,2.48,25.88l46.7,52.97c6.4,7.26,16.77,9.52,25.61,5.59l39.96-17.77c7.39-3.29,15.96-2.25,22.4,2.63,18.7,14.17,38.61,26.84,59.53,37.82,7.01,3.68,11.55,10.8,11.87,18.71l1.83,44.92c.39,9.57,6.89,17.8,16.1,20.41l67.95,19.22c9.31,2.63,19.26-1.08,24.56-9.18l23.95-36.57c4.43-6.77,12.2-10.53,20.26-9.93,10.58,.79,21.27,1.19,32.05,1.19,12.94,0,25.74-.59,38.38-1.72,7.91-.71,15.61,2.8,20.18,9.3l25.91,36.82c5.51,7.83,15.43,11.24,24.59,8.44l67.53-20.65c9.25-2.83,15.6-11.34,15.67-21.02l.32-43.66c.06-8.07,4.52-15.44,11.62-19.3,20.76-11.29,40.48-24.24,58.98-38.69,6.25-4.88,14.62-6.09,21.97-3.11l41.73,16.92c8.88,3.6,19.06,1.08,25.24-6.23l45.58-53.94c6.25-7.39,6.97-17.98,1.79-26.16l-23.39-36.88c-4.33-6.83-4.56-15.46-.67-22.55,11.26-20.52,20.89-42.06,28.71-64.46,2.61-7.48,8.99-13.02,16.78-14.5l44.14-8.36c9.41-1.78,16.61-9.41,17.84-18.91Zm-485.11,292.68c-214.72-1.19-388.56-175.03-389.75-389.75-1.2-217.35,176.83-395.39,394.19-394.19,214.72,1.19,388.57,175.03,389.75,389.75,1.2,217.35-176.83,395.39-394.19,394.19Z"}),u("circle",{fill:n,stroke:r,strokeWidth:a,cx:"538.59",cy:"540.48",r:"355.97"})]})}),u("div",{style:{width:t.size+"px",height:t.size+"px",display:"flex",alignItems:"center",clipPath:"circle(30%)"},children:e})]})}const Da="/assets/intro-75463de2.mp4",qs="/assets/site_web_video_2-2d6f7d04.mp4",Ks="/assets/site_web_video-e7db159f.mp4",$d=m.createContext(null),Rr={didCatch:!1,error:null};class Zs extends m.Component{constructor(t){super(t),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=Rr}static getDerivedStateFromError(t){return{didCatch:!0,error:t}}resetErrorBoundary(){const{error:t}=this.state;if(t!==null){for(var n,r,a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];(n=(r=this.props).onReset)===null||n===void 0||n.call(r,{args:i,reason:"imperative-api"}),this.setState(Rr)}}componentDidCatch(t,n){var r,a;(r=(a=this.props).onError)===null||r===void 0||r.call(a,t,n)}componentDidUpdate(t,n){const{didCatch:r}=this.state,{resetKeys:a}=this.props;if(r&&n.error!==null&&Md(t.resetKeys,a)){var i,o;(i=(o=this.props).onReset)===null||i===void 0||i.call(o,{next:a,prev:t.resetKeys,reason:"keys"}),this.setState(Rr)}}render(){const{children:t,fallbackRender:n,FallbackComponent:r,fallback:a}=this.props,{didCatch:i,error:o}=this.state;let s=t;if(i){const c={error:o,resetErrorBoundary:this.resetErrorBoundary};if(typeof n=="function")s=n(c);else if(r)s=m.createElement(r,c);else if(a===null||m.isValidElement(a))s=a;else throw o}return m.createElement($d.Provider,{value:{didCatch:i,error:o,resetErrorBoundary:this.resetErrorBoundary}},s)}}function Md(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e.length!==t.length||e.some((n,r)=>!Object.is(n,t[r]))}function Rt({path:e}){const t=m.lazy(()=>Kc(()=>import("./VideoLoop-8613aafd.js"),["assets/VideoLoop-8613aafd.js","assets/index-3d20fc75.js","assets/index-9663e8fb.css"]));return u(Zs,{fallbackComponent:u(Zc,{}),children:u(m.Suspense,{fallback:u(cf,{}),children:u(t,{path:e})})})}function jd(){const{isLight:e}=vt();return B(Le,{children:[u(ve,{x:3,y:13,w:25,h:10,content:"Nos compétences",start:!0}),u("div",{style:{position:"absolute",zIndex:5},children:B("div",{className:"cog-skills-ctn",children:[B(Qu,{cascade:!0,children:[u(Nt,{id:"cog-1",size:screen.availWidth/4.5,fillColor:e?"#78608b7e":"#151f2e8e",orientation:"right",children:u(Rt,{path:Da})}),u(Nt,{id:"cog-2",size:screen.availWidth/4.5,fillColor:e?"#78608b7e":"#151f2e8e",children:u(Rt,{path:qs})}),u(Nt,{id:"cog-3",size:screen.availWidth/4.5,fillColor:e?"#78608b7e":"#151f2e8e",orientation:"right",children:u(Rt,{path:Ks})})]}),u(ve,{w:70,h:10,y:50,zIndex:8,fontSize:.7,content:"- Créations multimédia | Déploiement web | Intelligence artificielle -",borderSize:3})]})}),u(zt,{nbr:35})]})}const Qs="/assets/cblaclef-13402277.webp",Js="/assets/leparnasse-a1990c59.webp",ec="/assets/zebrart-d7bed123.webp";function Ld({children:e,directionX:t=!0}){const n=k`
    
    from {
      opacity: 0;
      transform: translateX(${t?"10px":"-10px"});
    }
    
    to {
      opacity: 1;
      transform: translateX(0);
    `;return u(fn,{keyframes:n,children:e})}function tc(e=!1){const[t,n]=m.useState(e);return[t,()=>n(a=>!a)]}function Vt({side:e="left",content:t="",directionX:n=!0,...r}){const[a,i]=tc(),o=()=>{try{r.message}catch(c){throw c}},s=a&&u(Ld,{directionX:n,children:u("p",{className:`side-message appear-${e}`,style:{fontSize:r.size,color:r.color},children:r.message})});return B(Zs,{componentStack:o,children:[n&&s,u("div",{className:`side-message-ctn ${r.className}`,onMouseOver:i,onMouseOut:i,children:t}),!n&&s]})}function zd(){return B(Le,{children:[u(ve,{x:3,y:10,w:20,h:35,start:!0,content:"Ils ont des milliers de visiteurs déjà ! Venez découvrir ceux qui bénéficient de nos services !"}),B("div",{style:{display:"contents"},children:[u(ve,{y:1,w:50,h:30,content:u(Vt,{className:"size-inherit",content:u("a",{className:"size-inherit satisfied-links",href:"https://www.le-parnasse-versailles.fr/",children:u("img",{className:"size-inherit",src:Js,style:{objectFit:"cover"}})}),message:"Restaurant"})}),u(ve,{y:34,w:50,h:30,content:u(Vt,{className:"size-inherit",content:u("a",{className:"size-inherit satisfied-links",href:"https://cabinetlaclef.com/",children:u("img",{className:"size-inherit",src:Qs,style:{objectFit:"cover"}})}),message:"Cabinet Immobilier"})}),u(ve,{y:67,w:50,h:30,content:u(Vt,{className:"size-inherit",content:u("a",{className:"size-inherit satisfied-links",href:"https://www.zebrart.fr/",children:u("img",{className:"size-inherit",src:ec,style:{objectFit:"cover"}})}),message:"Collectif Web Artistes"})})]}),u(zt,{nbr:25})]})}function Bn({...e}){return B(Le,{children:[u("label",{className:e.labelClassName="form-label",htmlFor:e.htmlFor,children:e.labelTitle}),u("input",{type:e.type,id:e.id,className:e.className="form-control",placeholder:e.placeholder,name:e.name,value:e.value,onChange:t=>e.onChange(t.target.value)})]})}function Dd(){const[e,t]=m.useState("fine"),[n,r]=m.useState(""),[a,i]=m.useState(!0),o=m.useRef(null);return m.useEffect(()=>{e!=="fine"&&window.alert("Get caught dear robot !"),n!==""&&n.includes("@")?i(!1):i(!0)},[n]),B(Le,{children:[u(ve,{y:20,w:50,h:70,content:B("form",{className:"row p-5",id:"cf",name:"contactForm",target:"_blank",action:"https://www.se-get.zebrart.fr",method:"post",ref:o,autoComplete:"on",children:[u(Bn,{type:"email",labelTitle:"N'hesitez pas à nous notifier si vous êtes intéressés, nous vous contacterons dans les plus brefs delais",htmlFor:"mail-input",placeholder:"votremail@exemple.com",className:"mb-2 col-md-12",name:"mail",id:"mail-input",onChange:r,value:n}),u(Bn,{type:"hidden",name:"c'm'ere_kitty",value:e,onChange:t}),u("button",{className:"btn btn-info col-md-12 mb-2 mt-2",type:"submit",disabled:a,children:"Envoyer"}),u("p",{children:" - 0 engagement - 0 publicité - 0 collecte de données -"})]})}),u(zt,{nbr:15})]})}function Fd({base:e=0,max:t}){const[n,r]=m.useState(e),a=r;return{state:n,next:m.useCallback(()=>n<t-1&&r(n+1)),previous:m.useCallback(()=>n>0&&r(n-1)),goTo:a}}function Wd({children:e,...t}){var n=null,r=null;const a=o=>{n=o.touches[0].clientX,r=o.touches[0].clientY},i=o=>{if(n!==null&&r!==null){var s=o.touches[0].clientX,c=o.touches[0].clientY,l=n-s,f=r-c;Math.abs(l)>Math.abs(f)?l>0?events.L:events.R:f>0?events.U:events.D,n=null,r=null,o.preventDefault()}};return u("div",{className:t.className,id:t.id,onTouchStart:a,onTouchMove:i,children:e})}function Yd({onNext:e,onPrevious:t,slideID:n,sliderLength:r}){const a=["Accueil","Qui sommes nous ?","Notre savoir-faire","Ils sont satisfaits","Contactez-nous !"],i={btnLeft:n!==0&&a[n-1],btnRight:a[n+1]};return B("div",{className:"button-slider-container",children:[u("div",{className:"buttons button-left priority",onClick:t,style:{visibility:n===0?"hidden":"visible"},children:u(Vt,{side:"left",directionX:!1,size:"0.8em",content:u(pt,{src:"logo.svg"}),message:i.btnLeft})}),u("div",{className:"buttons button-right priority",onClick:e,style:{visibility:n===r-1?"hidden":"visible"},children:u(Vt,{side:"right",size:"0.8em",content:u(pt,{src:"logo.svg"}),message:i.btnRight})})]})}function Bd({id:e,isActive:t,onPositionChange:n}){const r=()=>n(e);return u("div",{id:"dot-"+e,className:(t?"bg-selected":"")+" dot-style",onClick:t?void 0:r},e)}function Ud({...e}){const t=[];for(let n=0;n<e.nbrDots;n++)t.push(u(Bd,{id:n,isActive:n===e.position?e.isActive:!e.isActive,onPositionChange:e.setPosition,onActiveChange:e.setIsActive},n));return u("div",{className:"dot-container priority",children:t})}function Gd({...e}){return u("div",{id:"slide-"+e.id,itemProp:e.itemProp,className:"slider-img",style:{display:e.id!==e.position&&"none"},children:e.content})}function Hd({...e}){const t=e.slides,[n,r]=tc(!0),{state:a,next:i,previous:o,goTo:s}=Fd({base:0,max:t.length}),{count:c,limit:l}=Fs({limit:e.delay});return u(Wd,{L:o,R:i,children:B("div",{className:"slider-container",children:[u("div",{className:"slider-gallery",style:{width:t.length*100+"vw"},children:t.map(f=>u(Gd,{itemProp:"exampleOfWork",id:f.id,content:f.content,position:a,isActive:n,onActiveChange:r},f.id))}),B("div",{className:"slider-items",children:[!e.buttons&&c>l&&u(Yd,{onNext:i,onPrevious:o,slideID:a,sliderLength:t.length}),!e.dots&&c>l&&u(Ud,{nbrDots:t.length,setPosition:s,position:a,isActive:n,onActiveChange:r})]})]})})}function Vd(){return u("section",{itemScope:!0,itemType:"https://schema.org/ProfilePage",className:"desktop-version",children:u(Hd,{slides:[{id:0,content:u(Id,{})},{id:1,content:u(Pd,{})},{id:2,content:u(jd,{})},{id:3,content:u(zd,{})},{id:4,content:u(Dd,{})}],delay:1})})}function xn({children:e,className:t="",onCutNumber:n,onRef:r}){return u("div",{ref:r,className:`row mobile-section ${t}`,style:{height:`${n}px`,width:"100vw"},children:e})}function Xd({size:e=3e3,nbrSections:t=5}){const n=e/t,r=Number.isInteger(n),{theme:a}=vt(),[i,o]=m.useState("fine"),[s,c]=m.useState(""),[l,f]=m.useState(!0),d=m.useRef(null);return m.useEffect(()=>{i!=="fine"&&window.alert("Click on that dear robot !"),s!==""&&s.includes("@")?f(!1):f(!0)},[s]),r?B(Le,{children:[u(zt,{className:`mobile-bg ${a}`,nbr:30,yStart:e,xStart:screen.availWidth}),B("section",{style:{height:`${e}px`,width:screen.availWidth},className:"mobile-version",children:[B(xn,{onCutNumber:n,children:[B(Ds,{className:"middle-frame-zoom",cascade:!0,children:[u("div",{className:"small-frame","data-speed":"8"}),u(Xs,{}),u("div",{className:"middle-frame","data-speed":"6"})]}),u(ve,{x:0,y:60,w:60,h:50,content:"Spirits Entertainment",start:!0,resH:"px",fontSize:.8}),u(ve,{y:e/5-100,w:80,h:50,content:"Web - Design - Divertissement",resH:"px",fontSize:.8})]}),B(xn,{onCutNumber:n,children:[u(ve,{x:0,y:e/5+50,w:60,h:50,content:"Qui sommes-nous ?",start:!0,resH:"px",fontSize:.8}),u(kt,{y:e/5+180,w:80,h:300,start:!0,content:"Spécialiste du design web et média, le développement d'applications et la mise en place d'outils permettant l'organisation et la création d'événements, Spirits entertainment vous offre ses services pour booster votre visibilité sur le web ainsi que recevoir des conseils et un accompagnement personnalisés pour préparer votre transition vers les dernières technologies",resH:"px",fontSize:1,isActive:!0})]}),B(xn,{onCutNumber:n*2,children:[u(ve,{x:0,y:e/5*2+50,w:60,h:50,content:"Nos compétences",start:!0,resH:"px",fontSize:.8}),u(ve,{y:e/5*2+150,w:80,h:50,content:"Montage vidéo - Webdesign - Image",start:!0,resH:"px",fontSize:.8}),u(ve,{y:e/5*3-25,w:80,h:50,content:"Déploiement de sites web",start:!0,resH:"px",fontSize:.8}),u(ve,{y:e/5*3.7,w:80,h:50,content:"Conseil - Accompagnement - Référencement",start:!0,resH:"px",fontSize:.8}),B("div",{className:"cog-ctn-mobile",children:[u(Nt,{size:250,orientation:"right",children:u("video",{width:280,autoPlay:!0,muted:!0,loop:!0,children:u("source",{src:Da,type:"video/mp4"})})}),u(Nt,{size:250,children:u("video",{width:280,autoPlay:!0,muted:!0,loop:!0,children:u("source",{src:qs,type:"video/mp4"})})}),u(Nt,{size:250,orientation:"right",children:u("video",{width:280,autoPlay:!0,muted:!0,loop:!0,children:u("source",{src:Ks,type:"video/mp4"})})})]})]}),B(xn,{onCutNumber:n,children:[u(ve,{y:e*.8-80,w:80,h:100,content:"Ils ont des milliers de visites par semaine ! Venez découvrir ceux qui bénéficient déjà de nos services !",start:!0,resH:"px",fontSize:.8}),B("div",{style:{display:"contents"},children:[u(kt,{y:e*.8+40,w:90,h:50,delay:300,resH:"px",isActive:!0,content:u("a",{className:"size-inherit satisfied-links",href:"https://www.le-parnasse-versailles.fr/",children:u("img",{className:"size-inherit",src:Js,style:{objectFit:"cover"}})})}),u(kt,{y:e*.8+110,w:90,h:50,delay:300,resH:"px",isActive:!0,content:u("a",{className:"size-inherit satisfied-links",href:"https://cabinetlaclef.com/",children:u("img",{className:"size-inherit",src:Qs,style:{objectFit:"cover"}})})}),u(kt,{y:e*.8+180,w:90,h:50,delay:300,resH:"px",isActive:!0,content:u("a",{className:"size-inherit satisfied-links",href:"https://www.zebrart.fr/",children:u("img",{className:"size-inherit",src:ec,style:{objectFit:"cover"}})})})]}),u(kt,{y:e*.8+280,w:90,h:280,resH:"px",isActive:!0,content:B("form",{className:"row px-5",id:"cf",name:"contact-form",target:"_blank",action:"https://www.se-get.zebrart.fr",method:"get",ref:d,autoComplete:"on",children:[u(Bn,{type:"email",labelTitle:"N'hesitez pas à nous notifier si vous êtes intéressés, nous vous contacterons dans les plus brefs delais",htmlFor:"mail-input",placeholder:"votremail@exemple.com",className:"mb-2 col-md-12",name:"mail",id:"mail-input",onChange:c,value:s}),u(Bn,{type:"hidden",name:"c'm'ere_kitty",value:i,onChange:o}),u("button",{className:"btn btn-info col-md-12 mb-2 mt-2",type:"submit",disabled:l,children:"Envoyer"}),u("p",{children:" - 0 engagement - 0 publicité - 0 collecte de données -"})]})})]})]})]}):u("div",{className:"alert alert-danger",children:" nbrSections must be a multiplier of size "})}function qd({items:e=[]}){const{theme:t,isDark:n}=vt();return u("nav",{className:`row container-fluid header ${!n&&"light"}`,style:{background:`${n?"#0000002e":"#ffffff2e"}`},children:u("ul",{className:"header-menu",children:e.map((r,a)=>u("li",{className:`btn btn-${t} header-menu-item col-md-2 m-1`,children:r},a))})})}var nc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(i=a(i,r(s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var s in i)t.call(i,s)&&i[s]&&(o=a(o,s));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(nc);var Kd=nc.exports;const ze=ba(Kd),Dt=!!(typeof window<"u"&&window.document&&window.document.createElement);var ea=!1,ta=!1;try{var Ir={get passive(){return ea=!0},get once(){return ta=ea=!0}};Dt&&(window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,!0))}catch{}function rc(e,t,n,r){if(r&&typeof r!="boolean"&&!ta){var a=r.once,i=r.capture,o=n;!ta&&a&&(o=n.__once||function s(c){this.removeEventListener(t,s,i),n.call(this,c)},n.__once=o),e.addEventListener(t,o,ea?r:i)}e.addEventListener(t,n,r)}function br(e){return e&&e.ownerDocument||document}function na(e,t,n,r){var a=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)}var kn;function go(e){if((!kn&&kn!==0||e)&&Dt){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),kn=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return kn}function Zd(){return m.useState(null)}function Qd(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e},[e]),t}function Be(e){const t=Qd(e);return m.useCallback(function(...n){return t.current&&t.current(...n)},[t])}const vo=e=>!e||typeof e=="function"?e:t=>{e.current=t};function Jd(e,t){const n=vo(e),r=vo(t);return a=>{n&&n(a),r&&r(a)}}function un(e,t){return m.useMemo(()=>Jd(e,t),[e,t])}function em(e){const t=m.useRef(e);return t.current=e,t}function ac(e){const t=em(e);m.useEffect(()=>()=>t.current(),[])}function tm(e){var t=br(e);return t&&t.defaultView||window}function nm(e,t){return tm(e).getComputedStyle(e,t)}var rm=/([A-Z])/g;function am(e){return e.replace(rm,"-$1").toLowerCase()}var im=/^ms-/;function Sn(e){return am(e).replace(im,"-ms-")}var om=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function sm(e){return!!(e&&om.test(e))}function mt(e,t){var n="",r="";if(typeof t=="string")return e.style.getPropertyValue(Sn(t))||nm(e).getPropertyValue(Sn(t));Object.keys(t).forEach(function(a){var i=t[a];!i&&i!==0?e.style.removeProperty(Sn(a)):sm(a)?r+=a+"("+i+") ":n+=Sn(a)+": "+i+";"}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}function Un(e,t,n,r){return rc(e,t,n,r),function(){na(e,t,n,r)}}function cm(e,t,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}function lm(e){var t=mt(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function fm(e,t,n){n===void 0&&(n=5);var r=!1,a=setTimeout(function(){r||cm(e,"transitionend",!0)},t+n),i=Un(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(a),i()}}function ic(e,t,n,r){n==null&&(n=lm(e)||0);var a=fm(e,n,r),i=Un(e,"transitionend",t);return function(){a(),i()}}function Pr(e){e===void 0&&(e=br());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function bo(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}function um(){const e=m.useRef(!0),t=m.useRef(()=>e.current);return m.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function dm(e){const t=m.useRef(null);return m.useEffect(()=>{t.current=e}),t.current}const mm="data-rr-ui-";function pm(e){return`${mm}${e}`}function hm(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const yo=pm("modal-open");class gm{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return hm(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",a=this.getElement();t.style={overflow:a.style.overflow,[r]:a.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(mt(a,r)||"0",10)+t.scrollBarWidth}px`),a.setAttribute(yo,""),mt(a,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(yo),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const Fa=gm,oc=m.createContext(Dt?window:void 0);oc.Provider;function Wa(){return m.useContext(oc)}const $r=(e,t)=>Dt?e==null?(t||br()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function vm(e,t){const n=Wa(),[r,a]=m.useState(()=>$r(e,n==null?void 0:n.document));if(!r){const i=$r(e);i&&a(i)}return m.useEffect(()=>{t&&r&&t(r)},[t,r]),m.useEffect(()=>{const i=$r(e);i!==r&&a(i)},[e,r]),r}const bm=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",ym=typeof document<"u",wo=ym||bm?m.useLayoutEffect:m.useEffect;function wm({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:a}){const i=m.useRef(null),o=m.useRef(t),s=Be(n);m.useEffect(()=>{t?o.current=!0:s(i.current)},[t,s]);const c=un(i,e.ref),l=m.cloneElement(e,{ref:c});return t?l:a||!o.current&&r?null:l}const xm=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function km(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Sm(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:a,onExiting:i,onExited:o,addEndListener:s,children:c}=e,l=km(e,xm);const f=m.useRef(null),d=un(f,typeof c=="function"?null:c.ref),h=_=>C=>{_&&f.current&&_(f.current,C)},w=m.useCallback(h(t),[t]),y=m.useCallback(h(n),[n]),g=m.useCallback(h(r),[r]),b=m.useCallback(h(a),[a]),x=m.useCallback(h(i),[i]),v=m.useCallback(h(o),[o]),E=m.useCallback(h(s),[s]);return Object.assign({},l,{nodeRef:f},t&&{onEnter:w},n&&{onEntering:y},r&&{onEntered:g},a&&{onExit:b},i&&{onExiting:x},o&&{onExited:v},s&&{addEndListener:E},{children:typeof c=="function"?(_,C)=>c(_,Object.assign({},C,{ref:d})):m.cloneElement(c,{ref:d})})}const Em=["component"];function Om(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}const Cm=m.forwardRef((e,t)=>{let{component:n}=e,r=Om(e,Em);const a=Sm(r);return u(n,Object.assign({ref:t},a))}),Am=Cm;function Tm({in:e,onTransition:t}){const n=m.useRef(null),r=m.useRef(!0),a=Be(t);return wo(()=>{if(!n.current)return;let i=!1;return a({in:e,element:n.current,initial:r.current,isStale:()=>i}),()=>{i=!0}},[e,a]),wo(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function _m({children:e,in:t,onExited:n,onEntered:r,transition:a}){const[i,o]=m.useState(!t);t&&i&&o(!1);const s=Tm({in:!!t,onTransition:l=>{const f=()=>{l.isStale()||(l.in?r==null||r(l.element,l.initial):(o(!0),n==null||n(l.element)))};Promise.resolve(a(l)).then(f,d=>{throw l.in||o(!0),d})}}),c=un(s,e.ref);return i&&!t?null:m.cloneElement(e,{ref:c})}function xo(e,t,n){return e?u(Am,Object.assign({},n,{component:e})):t?u(_m,Object.assign({},n,{transition:t})):u(wm,Object.assign({},n))}function Nm(e){return e.code==="Escape"||e.keyCode===27}const Rm=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Im(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}let Mr;function Pm(e){return Mr||(Mr=new Fa({ownerDocument:e==null?void 0:e.document})),Mr}function $m(e){const t=Wa(),n=e||Pm(t),r=m.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:m.useCallback(a=>{r.current.dialog=a},[]),setBackdropRef:m.useCallback(a=>{r.current.backdrop=a},[])})}const sc=m.forwardRef((e,t)=>{let{show:n=!1,role:r="dialog",className:a,style:i,children:o,backdrop:s=!0,keyboard:c=!0,onBackdropClick:l,onEscapeKeyDown:f,transition:d,runTransition:h,backdropTransition:w,runBackdropTransition:y,autoFocus:g=!0,enforceFocus:b=!0,restoreFocus:x=!0,restoreFocusOptions:v,renderDialog:E,renderBackdrop:_=P=>u("div",Object.assign({},P)),manager:C,container:j,onShow:A,onHide:V=()=>{},onExit:G,onExited:ae,onExiting:ye,onEnter:ee,onEntering:oe,onEntered:xe}=e,ce=Im(e,Rm);const Se=Wa(),fe=vm(j),z=$m(C),Pe=um(),Oe=dm(n),[Ce,R]=m.useState(!n),O=m.useRef(null);m.useImperativeHandle(t,()=>z,[z]),Dt&&!Oe&&n&&(O.current=Pr(Se==null?void 0:Se.document)),n&&Ce&&R(!1);const T=Be(()=>{if(z.add(),D.current=Un(document,"keydown",S),K.current=Un(document,"focus",()=>setTimeout(p),!0),A&&A(),g){var P,ie;const U=Pr((P=(ie=z.dialog)==null?void 0:ie.ownerDocument)!=null?P:Se==null?void 0:Se.document);z.dialog&&U&&!bo(z.dialog,U)&&(O.current=U,z.dialog.focus())}}),$=Be(()=>{if(z.remove(),D.current==null||D.current(),K.current==null||K.current(),x){var P;(P=O.current)==null||P.focus==null||P.focus(v),O.current=null}});m.useEffect(()=>{!n||!fe||T()},[n,fe,T]),m.useEffect(()=>{Ce&&$()},[Ce,$]),ac(()=>{$()});const p=Be(()=>{if(!b||!Pe()||!z.isTopModal())return;const P=Pr(Se==null?void 0:Se.document);z.dialog&&P&&!bo(z.dialog,P)&&z.dialog.focus()}),W=Be(P=>{P.target===P.currentTarget&&(l==null||l(P),s===!0&&V())}),S=Be(P=>{c&&Nm(P)&&z.isTopModal()&&(f==null||f(P),P.defaultPrevented||V())}),K=m.useRef(),D=m.useRef(),Y=(...P)=>{R(!0),ae==null||ae(...P)};if(!fe)return null;const M=Object.assign({role:r,ref:z.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},ce,{style:i,className:a,tabIndex:-1});let J=E?E(M):u("div",Object.assign({},M,{children:m.cloneElement(o,{role:"document"})}));J=xo(d,h,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:G,onExiting:ye,onExited:Y,onEnter:ee,onEntering:oe,onEntered:xe,children:J});let te=null;return s&&(te=_({ref:z.setBackdropRef,onClick:W}),te=xo(w,y,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:te})),u(Le,{children:Et.createPortal(B(Le,{children:[te,J]}),fe)})});sc.displayName="Modal";const Mm=Object.assign(sc,{Manager:Fa});function jm(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function Lm(e,t){e.classList?e.classList.add(t):jm(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}var zm=Function.prototype.bind.call(Function.prototype.call,[].slice);function yt(e,t){return zm(e.querySelectorAll(t))}function ko(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Dm(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=ko(e.className,t):e.setAttribute("class",ko(e.className&&e.className.baseVal||"",t))}const wt={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Fm extends Fa{adjustAndStore(t,n,r){const a=n.style[t];n.dataset[t]=a,mt(n,{[t]:`${parseFloat(mt(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],mt(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(Lm(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";yt(n,wt.FIXED_CONTENT).forEach(i=>this.adjustAndStore(r,i,t.scrollBarWidth)),yt(n,wt.STICKY_CONTENT).forEach(i=>this.adjustAndStore(a,i,-t.scrollBarWidth)),yt(n,wt.NAVBAR_TOGGLER).forEach(i=>this.adjustAndStore(a,i,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();Dm(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";yt(n,wt.FIXED_CONTENT).forEach(i=>this.restore(r,i)),yt(n,wt.STICKY_CONTENT).forEach(i=>this.restore(a,i)),yt(n,wt.NAVBAR_TOGGLER).forEach(i=>this.restore(a,i))}}let jr;function Wm(e){return jr||(jr=new Fm(e)),jr}const So={disabled:!1},cc=me.createContext(null);var Ym=function(t){return t.scrollTop},Bt="unmounted",lt="exited",et="entering",ft="entered",ra="exiting",Ze=function(e){Ys(t,e);function t(r,a){var i;i=e.call(this,r,a)||this;var o=a,s=o&&!o.isMounting?r.enter:r.appear,c;return i.appearStatus=null,r.in?s?(c=lt,i.appearStatus=et):c=ft:r.unmountOnExit||r.mountOnEnter?c=Bt:c=lt,i.state={status:c},i.nextCallback=null,i}t.getDerivedStateFromProps=function(a,i){var o=a.in;return o&&i.status===Bt?{status:lt}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(a){var i=null;if(a!==this.props){var o=this.state.status;this.props.in?o!==et&&o!==ft&&(i=et):(o===et||o===ft)&&(i=ra)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var a=this.props.timeout,i,o,s;return i=o=s=a,a!=null&&typeof a!="number"&&(i=a.exit,o=a.enter,s=a.appear!==void 0?a.appear:o),{exit:i,enter:o,appear:s}},n.updateStatus=function(a,i){if(a===void 0&&(a=!1),i!==null)if(this.cancelNextCallback(),i===et){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Et.findDOMNode(this);o&&Ym(o)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===lt&&this.setState({status:Bt})},n.performEnter=function(a){var i=this,o=this.props.enter,s=this.context?this.context.isMounting:a,c=this.props.nodeRef?[s]:[Et.findDOMNode(this),s],l=c[0],f=c[1],d=this.getTimeouts(),h=s?d.appear:d.enter;if(!a&&!o||So.disabled){this.safeSetState({status:ft},function(){i.props.onEntered(l)});return}this.props.onEnter(l,f),this.safeSetState({status:et},function(){i.props.onEntering(l,f),i.onTransitionEnd(h,function(){i.safeSetState({status:ft},function(){i.props.onEntered(l,f)})})})},n.performExit=function(){var a=this,i=this.props.exit,o=this.getTimeouts(),s=this.props.nodeRef?void 0:Et.findDOMNode(this);if(!i||So.disabled){this.safeSetState({status:lt},function(){a.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:ra},function(){a.props.onExiting(s),a.onTransitionEnd(o.exit,function(){a.safeSetState({status:lt},function(){a.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(a,i){i=this.setNextCallback(i),this.setState(a,i)},n.setNextCallback=function(a){var i=this,o=!0;return this.nextCallback=function(s){o&&(o=!1,i.nextCallback=null,a(s))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(a,i){this.setNextCallback(i);var o=this.props.nodeRef?this.props.nodeRef.current:Et.findDOMNode(this),s=a==null&&!this.props.addEndListener;if(!o||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],l=c[0],f=c[1];this.props.addEndListener(l,f)}a!=null&&setTimeout(this.nextCallback,a)},n.render=function(){var a=this.state.status;if(a===Bt)return null;var i=this.props,o=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=Ws(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return me.createElement(cc.Provider,{value:null},typeof o=="function"?o(a,s):me.cloneElement(me.Children.only(o),s))},t}(me.Component);Ze.contextType=cc;Ze.propTypes={};function xt(){}Ze.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:xt,onEntering:xt,onEntered:xt,onExit:xt,onExiting:xt,onExited:xt};Ze.UNMOUNTED=Bt;Ze.EXITED=lt;Ze.ENTERING=et;Ze.ENTERED=ft;Ze.EXITING=ra;const Bm=Ze;function Eo(e,t){const n=mt(e,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function Um(e,t){const n=Eo(e,"transitionDuration"),r=Eo(e,"transitionDelay"),a=ic(e,i=>{i.target===e&&(a(),t(i))},n+r)}function Gm(e){e.offsetHeight}function Hm(e){return e&&"setState"in e?Et.findDOMNode(e):e??null}const Vm=me.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:a,onExited:i,addEndListener:o,children:s,childRef:c,...l},f)=>{const d=m.useRef(null),h=un(d,c),w=j=>{h(Hm(j))},y=j=>A=>{j&&d.current&&j(d.current,A)},g=m.useCallback(y(e),[e]),b=m.useCallback(y(t),[t]),x=m.useCallback(y(n),[n]),v=m.useCallback(y(r),[r]),E=m.useCallback(y(a),[a]),_=m.useCallback(y(i),[i]),C=m.useCallback(y(o),[o]);return u(Bm,{ref:f,...l,onEnter:g,onEntered:x,onEntering:b,onExit:v,onExited:_,onExiting:E,addEndListener:C,nodeRef:d,children:typeof s=="function"?(j,A)=>s(j,{...A,ref:w}):me.cloneElement(s,{ref:w})})}),Xm=Vm,qm={[et]:"show",[ft]:"show"},lc=m.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...a},i)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...a},s=m.useCallback((c,l)=>{Gm(c),r==null||r(c,l)},[r]);return u(Xm,{ref:i,addEndListener:Um,...o,onEnter:s,childRef:t.ref,children:(c,l)=>m.cloneElement(t,{...l,className:ze("fade",e,t.props.className,qm[c],n[c])})})});lc.displayName="Fade";const fc=lc,Km=["xxl","xl","lg","md","sm","xs"],Zm="xs",uc=m.createContext({prefixes:{},breakpoints:Km,minBreakpoint:Zm});function Ft(e,t){const{prefixes:n}=m.useContext(uc);return e||n[t]||t}function Qm(){const{dir:e}=m.useContext(uc);return e==="rtl"}const dc=m.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},a)=>(t=Ft(t,"modal-body"),u(n,{ref:a,className:ze(e,t),...r})));dc.displayName="ModalBody";const Jm=dc,e0=m.createContext({onHide(){}}),mc=e0,pc=m.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:r,size:a,fullscreen:i,children:o,scrollable:s,...c},l)=>{e=Ft(e,"modal");const f=`${e}-dialog`,d=typeof i=="string"?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return u("div",{...c,ref:l,className:ze(f,t,a&&`${e}-${a}`,r&&`${f}-centered`,s&&`${f}-scrollable`,i&&d),children:u("div",{className:ze(`${e}-content`,n),children:o})})});pc.displayName="ModalDialog";const hc=pc,gc=m.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},a)=>(t=Ft(t,"modal-footer"),u(n,{ref:a,className:ze(e,t),...r})));gc.displayName="ModalFooter";const t0=gc,n0={"aria-label":F.string,onClick:F.func,variant:F.oneOf(["white"])},Ya=m.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},a)=>u("button",{ref:a,type:"button",className:ze("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));Ya.displayName="CloseButton";Ya.propTypes=n0;const r0=Ya,a0=m.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:a,...i},o)=>{const s=m.useContext(mc),c=Be(()=>{s==null||s.onHide(),r==null||r()});return B("div",{ref:o,...i,children:[a,n&&u(r0,{"aria-label":e,variant:t,onClick:c})]})}),i0=a0,vc=m.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...a},i)=>(e=Ft(e,"modal-header"),u(i0,{ref:i,...a,className:ze(t,e),closeLabel:n,closeButton:r})));vc.displayName="ModalHeader";const o0=vc,s0=e=>m.forwardRef((t,n)=>u("div",{...t,ref:n,className:ze(t.className,e)})),c0=s0("h4"),bc=m.forwardRef(({className:e,bsPrefix:t,as:n=c0,...r},a)=>(t=Ft(t,"modal-title"),u(n,{ref:a,className:ze(e,t),...r})));bc.displayName="ModalTitle";const l0=bc;function f0(e){return u(fc,{...e,timeout:null})}function u0(e){return u(fc,{...e,timeout:null})}const yc=m.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:r,contentClassName:a,children:i,dialogAs:o=hc,"data-bs-theme":s,"aria-labelledby":c,"aria-describedby":l,"aria-label":f,show:d=!1,animation:h=!0,backdrop:w=!0,keyboard:y=!0,onEscapeKeyDown:g,onShow:b,onHide:x,container:v,autoFocus:E=!0,enforceFocus:_=!0,restoreFocus:C=!0,restoreFocusOptions:j,onEntered:A,onExit:V,onExiting:G,onEnter:ae,onEntering:ye,onExited:ee,backdropClassName:oe,manager:xe,...ce},Se)=>{const[fe,z]=m.useState({}),[Pe,Oe]=m.useState(!1),Ce=m.useRef(!1),R=m.useRef(!1),O=m.useRef(null),[T,$]=Zd(),p=un(Se,$),W=Be(x),S=Qm();e=Ft(e,"modal");const K=m.useMemo(()=>({onHide:W}),[W]);function D(){return xe||Wm({isRTL:S})}function Y(H){if(!Dt)return;const De=D().getScrollbarWidth()>0,$e=H.scrollHeight>br(H).documentElement.clientHeight;z({paddingRight:De&&!$e?go():void 0,paddingLeft:!De&&$e?go():void 0})}const M=Be(()=>{T&&Y(T.dialog)});ac(()=>{na(window,"resize",M),O.current==null||O.current()});const J=()=>{Ce.current=!0},te=H=>{Ce.current&&T&&H.target===T.dialog&&(R.current=!0),Ce.current=!1},P=()=>{Oe(!0),O.current=ic(T.dialog,()=>{Oe(!1)})},ie=H=>{H.target===H.currentTarget&&P()},U=H=>{if(w==="static"){ie(H);return}if(R.current||H.target!==H.currentTarget){R.current=!1;return}x==null||x()},he=H=>{y?g==null||g(H):(H.preventDefault(),w==="static"&&P())},st=(H,De)=>{H&&Y(H),ae==null||ae(H,De)},ge=H=>{O.current==null||O.current(),V==null||V(H)},bt=(H,De)=>{ye==null||ye(H,De),rc(window,"resize",M)},ct=H=>{H&&(H.style.display=""),ee==null||ee(H),na(window,"resize",M)},Te=m.useCallback(H=>u("div",{...H,className:ze(`${e}-backdrop`,oe,!h&&"show")}),[h,oe,e]),L={...n,...fe};L.display="block";const se=H=>u("div",{role:"dialog",...H,style:L,className:ze(t,e,Pe&&`${e}-static`,!h&&"show"),onClick:w?U:void 0,onMouseUp:te,"data-bs-theme":s,"aria-label":f,"aria-labelledby":c,"aria-describedby":l,children:u(o,{...ce,onMouseDown:J,className:r,contentClassName:a,children:i})});return u(mc.Provider,{value:K,children:u(Mm,{show:d,ref:p,backdrop:w,container:v,keyboard:!0,autoFocus:E,enforceFocus:_,restoreFocus:C,restoreFocusOptions:j,onEscapeKeyDown:he,onShow:b,onHide:x,onEnter:st,onEntering:bt,onEntered:A,onExit:ge,onExiting:G,onExited:ct,manager:D(),transition:h?f0:void 0,backdropTransition:h?u0:void 0,renderBackdrop:Te,renderDialog:se})})});yc.displayName="Modal";const Lr=Object.assign(yc,{Body:Jm,Header:o0,Title:l0,Footer:t0,Dialog:hc,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),d0="/assets/creation-3173d2ba.mp4",m0="/assets/movie-668203c6.mp4";function Oo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oo(Object(n),!0).forEach(function(r){be(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gn(e){"@babel/helpers - typeof";return Gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gn(e)}function p0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Co(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h0(e,t,n){return t&&Co(e.prototype,t),n&&Co(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ba(e,t){return v0(e)||y0(e,t)||wc(e,t)||x0()}function dn(e){return g0(e)||b0(e)||wc(e)||w0()}function g0(e){if(Array.isArray(e))return aa(e)}function v0(e){if(Array.isArray(e))return e}function b0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function y0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(c){i=!0,s=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function wc(e,t){if(e){if(typeof e=="string")return aa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return aa(e,t)}}function aa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ao=function(){},Ua={},xc={},kc=null,Sc={mark:Ao,measure:Ao};try{typeof window<"u"&&(Ua=window),typeof document<"u"&&(xc=document),typeof MutationObserver<"u"&&(kc=MutationObserver),typeof performance<"u"&&(Sc=performance)}catch{}var k0=Ua.navigator||{},To=k0.userAgent,_o=To===void 0?"":To,at=Ua,re=xc,No=kc,En=Sc;at.document;var Qe=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",Ec=~_o.indexOf("MSIE")||~_o.indexOf("Trident/"),On,Cn,An,Tn,_n,Xe="___FONT_AWESOME___",ia=16,Oc="fa",Cc="svg-inline--fa",ht="data-fa-i2svg",oa="data-fa-pseudo-element",S0="data-fa-pseudo-element-pending",Ga="data-prefix",Ha="data-icon",Ro="fontawesome-i2svg",E0="async",O0=["HTML","HEAD","STYLE","SCRIPT"],Ac=function(){try{return!0}catch{return!1}}(),ne="classic",le="sharp",Va=[ne,le];function mn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ne]}})}var tn=mn((On={},be(On,ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),be(On,le,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),On)),nn=mn((Cn={},be(Cn,ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),be(Cn,le,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Cn)),rn=mn((An={},be(An,ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),be(An,le,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),An)),C0=mn((Tn={},be(Tn,ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),be(Tn,le,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Tn)),A0=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Tc="fa-layers-text",T0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_0=mn((_n={},be(_n,ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),be(_n,le,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),_n)),_c=[1,2,3,4,5,6,7,8,9,10],N0=_c.concat([11,12,13,14,15,16,17,18,19,20]),R0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ut={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},an=new Set;Object.keys(nn[ne]).map(an.add.bind(an));Object.keys(nn[le]).map(an.add.bind(an));var I0=[].concat(Va,dn(an),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ut.GROUP,ut.SWAP_OPACITY,ut.PRIMARY,ut.SECONDARY]).concat(_c.map(function(e){return"".concat(e,"x")})).concat(N0.map(function(e){return"w-".concat(e)})),Xt=at.FontAwesomeConfig||{};function P0(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function $0(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var M0=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];M0.forEach(function(e){var t=Ba(e,2),n=t[0],r=t[1],a=$0(P0(n));a!=null&&(Xt[r]=a)})}var Nc={styleDefault:"solid",familyDefault:"classic",cssPrefix:Oc,replacementClass:Cc,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xt.familyPrefix&&(Xt.cssPrefix=Xt.familyPrefix);var jt=N(N({},Nc),Xt);jt.autoReplaceSvg||(jt.observeMutations=!1);var I={};Object.keys(Nc).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){jt[e]=n,qt.forEach(function(r){return r(I)})},get:function(){return jt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){jt.cssPrefix=t,qt.forEach(function(n){return n(I)})},get:function(){return jt.cssPrefix}});at.FontAwesomeConfig=I;var qt=[];function j0(e){return qt.push(e),function(){qt.splice(qt.indexOf(e),1)}}var Je=ia,Ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function L0(e){if(!(!e||!Qe)){var t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=re.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return re.head.insertBefore(t,r),e}}var z0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function on(){for(var e=12,t="";e-- >0;)t+=z0[Math.random()*62|0];return t}function Wt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Xa(e){return e.classList?Wt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Rc(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function D0(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Rc(e[n]),'" ')},"").trim()}function yr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function qa(e){return e.size!==Ue.size||e.x!==Ue.x||e.y!==Ue.y||e.rotate!==Ue.rotate||e.flipX||e.flipY}function F0(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function W0(e){var t=e.transform,n=e.width,r=n===void 0?ia:n,a=e.height,i=a===void 0?ia:a,o=e.startCentered,s=o===void 0?!1:o,c="";return s&&Ec?c+="translate(".concat(t.x/Je-r/2,"em, ").concat(t.y/Je-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/Je,"em), calc(-50% + ").concat(t.y/Je,"em)) "):c+="translate(".concat(t.x/Je,"em, ").concat(t.y/Je,"em) "),c+="scale(".concat(t.size/Je*(t.flipX?-1:1),", ").concat(t.size/Je*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Y0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ic(){var e=Oc,t=Cc,n=I.cssPrefix,r=I.replacementClass,a=Y0;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Io=!1;function zr(){I.autoAddCss&&!Io&&(L0(Ic()),Io=!0)}var B0={mixout:function(){return{dom:{css:Ic,insertCss:zr}}},hooks:function(){return{beforeDOMElementCreation:function(){zr()},beforeI2svg:function(){zr()}}}},qe=at||{};qe[Xe]||(qe[Xe]={});qe[Xe].styles||(qe[Xe].styles={});qe[Xe].hooks||(qe[Xe].hooks={});qe[Xe].shims||(qe[Xe].shims=[]);var je=qe[Xe],Pc=[],U0=function e(){re.removeEventListener("DOMContentLoaded",e),Hn=1,Pc.map(function(t){return t()})},Hn=!1;Qe&&(Hn=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),Hn||re.addEventListener("DOMContentLoaded",U0));function G0(e){Qe&&(Hn?setTimeout(e,0):Pc.push(e))}function pn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Rc(e):"<".concat(t," ").concat(D0(r),">").concat(i.map(pn).join(""),"</").concat(t,">")}function Po(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var H0=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Dr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?H0(n,a):n,c,l,f;for(r===void 0?(c=1,f=t[i[0]]):(c=0,f=r);c<o;c++)l=i[c],f=s(f,t[l],l,t);return f};function V0(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function sa(e){var t=V0(e);return t.length===1?t[0].toString(16):null}function X0(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function $o(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ca(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=$o(t);typeof je.hooks.addPack=="function"&&!a?je.hooks.addPack(e,$o(t)):je.styles[e]=N(N({},je.styles[e]||{}),i),e==="fas"&&ca("fa",t)}var Nn,Rn,In,Ct=je.styles,q0=je.shims,K0=(Nn={},be(Nn,ne,Object.values(rn[ne])),be(Nn,le,Object.values(rn[le])),Nn),Ka=null,$c={},Mc={},jc={},Lc={},zc={},Z0=(Rn={},be(Rn,ne,Object.keys(tn[ne])),be(Rn,le,Object.keys(tn[le])),Rn);function Q0(e){return~I0.indexOf(e)}function J0(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Q0(a)?a:null}var Dc=function(){var t=function(i){return Dr(Ct,function(o,s,c){return o[c]=Dr(s,i,{}),o},{})};$c=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){a[c.toString(16)]=o})}return a}),Mc=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){a[c]=o})}return a}),zc=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(c){a[c]=o}),a});var n="far"in Ct||I.autoFetchSvg,r=Dr(q0,function(a,i){var o=i[0],s=i[1],c=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:c}),a},{names:{},unicodes:{}});jc=r.names,Lc=r.unicodes,Ka=wr(I.styleDefault,{family:I.familyDefault})};j0(function(e){Ka=wr(e.styleDefault,{family:I.familyDefault})});Dc();function Za(e,t){return($c[e]||{})[t]}function ep(e,t){return(Mc[e]||{})[t]}function dt(e,t){return(zc[e]||{})[t]}function Fc(e){return jc[e]||{prefix:null,iconName:null}}function tp(e){var t=Lc[e],n=Za("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function it(){return Ka}var Qa=function(){return{prefix:null,iconName:null,rest:[]}};function wr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ne:n,a=tn[r][e],i=nn[r][e]||nn[r][a],o=e in je.styles?e:null;return i||o||null}var Mo=(In={},be(In,ne,Object.keys(rn[ne])),be(In,le,Object.keys(rn[le])),In);function xr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},be(t,ne,"".concat(I.cssPrefix,"-").concat(ne)),be(t,le,"".concat(I.cssPrefix,"-").concat(le)),t),o=null,s=ne;(e.includes(i[ne])||e.some(function(l){return Mo[ne].includes(l)}))&&(s=ne),(e.includes(i[le])||e.some(function(l){return Mo[le].includes(l)}))&&(s=le);var c=e.reduce(function(l,f){var d=J0(I.cssPrefix,f);if(Ct[f]?(f=K0[s].includes(f)?C0[s][f]:f,o=f,l.prefix=f):Z0[s].indexOf(f)>-1?(o=f,l.prefix=wr(f,{family:s})):d?l.iconName=d:f!==I.replacementClass&&f!==i[ne]&&f!==i[le]&&l.rest.push(f),!a&&l.prefix&&l.iconName){var h=o==="fa"?Fc(l.iconName):{},w=dt(l.prefix,l.iconName);h.prefix&&(o=null),l.iconName=h.iconName||w||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!Ct.far&&Ct.fas&&!I.autoFetchSvg&&(l.prefix="fas")}return l},Qa());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===le&&(Ct.fass||I.autoFetchSvg)&&(c.prefix="fass",c.iconName=dt(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=it()||"fas"),c}var np=function(){function e(){p0(this,e),this.definitions={}}return h0(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=N(N({},n.definitions[s]||{}),o[s]),ca(s,o[s]);var c=rn[ne][s];c&&ca(c,o[s]),Dc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,c=o.iconName,l=o.icon,f=l[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=l)}),n[s][c]=l}),n}}]),e}(),jo=[],At={},It={},rp=Object.keys(It);function ap(e,t){var n=t.mixoutsTo;return jo=e,At={},Object.keys(It).forEach(function(r){rp.indexOf(r)===-1&&delete It[r]}),jo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Gn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){At[o]||(At[o]=[]),At[o].push(i[o])})}r.provides&&r.provides(It)}),n}function la(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=At[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function gt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=At[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ke(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return It[e]?It[e].apply(null,t):void 0}function fa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||it();if(t)return t=dt(n,t)||t,Po(Wc.definitions,n,t)||Po(je.styles,n,t)}var Wc=new np,ip=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,gt("noAuto")},op={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe?(gt("beforeI2svg",t),Ke("pseudoElements2svg",t),Ke("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,G0(function(){cp({autoReplaceSvgRoot:n}),gt("watch",t)})}},sp={icon:function(t){if(t===null)return null;if(Gn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=wr(t[0]);return{prefix:r,iconName:dt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(A0))){var a=xr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||it(),iconName:dt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=it();return{prefix:i,iconName:dt(i,t)||t}}}},Re={noAuto:ip,config:I,dom:op,parse:sp,library:Wc,findIconDefinition:fa,toHtml:pn},cp=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?re:n;(Object.keys(je.styles).length>0||I.autoFetchSvg)&&Qe&&I.autoReplaceSvg&&Re.dom.i2svg({node:r})};function kr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return pn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Qe){var r=re.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function lp(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(qa(o)&&n.found&&!r.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};a.style=yr(N(N({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function fp(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},a),{},{id:o}),children:r}]}]}function Ja(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,c=e.title,l=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,w=h===void 0?!1:h,y=r.found?r:n,g=y.width,b=y.height,x=a==="fak",v=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(G){return d.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(d.classes).join(" "),E={children:[],attributes:N(N({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:v,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(b)})},_=x&&!~d.classes.indexOf("fa-fw")?{width:"".concat(g/b*16*.0625,"em")}:{};w&&(E.attributes[ht]=""),c&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(f||on())},children:[c]}),delete E.attributes.title);var C=N(N({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:s,styles:N(N({},_),d.styles)}),j=r.found&&n.found?Ke("generateAbstractMask",C)||{children:[],attributes:{}}:Ke("generateAbstractIcon",C)||{children:[],attributes:{}},A=j.children,V=j.attributes;return C.children=A,C.attributes=V,s?fp(C):lp(C)}function Lo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,c=s===void 0?!1:s,l=N(N(N({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[ht]="");var f=N({},o.styles);qa(a)&&(f.transform=W0({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=yr(f);d.length>0&&(l.style=d);var h=[];return h.push({tag:"span",attributes:l,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function up(e){var t=e.content,n=e.title,r=e.extra,a=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=yr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Fr=je.styles;function ua(e){var t=e[0],n=e[1],r=e.slice(4),a=Ba(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ut.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ut.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ut.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var dp={found:!1,width:512,height:512};function mp(e,t){!Ac&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function da(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=it()),new Promise(function(r,a){if(Ke("missingIconAbstract"),n==="fa"){var i=Fc(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Fr[t]&&Fr[t][e]){var o=Fr[t][e];return r(ua(o))}mp(e,t),r(N(N({},dp),{},{icon:I.showMissingIcons&&e?Ke("missingIconAbstract")||{}:{}}))})}var zo=function(){},ma=I.measurePerformance&&En&&En.mark&&En.measure?En:{mark:zo,measure:zo},Ut='FA "6.5.2"',pp=function(t){return ma.mark("".concat(Ut," ").concat(t," begins")),function(){return Yc(t)}},Yc=function(t){ma.mark("".concat(Ut," ").concat(t," ends")),ma.measure("".concat(Ut," ").concat(t),"".concat(Ut," ").concat(t," begins"),"".concat(Ut," ").concat(t," ends"))},ei={begin:pp,end:Yc},Ln=function(){};function Do(e){var t=e.getAttribute?e.getAttribute(ht):null;return typeof t=="string"}function hp(e){var t=e.getAttribute?e.getAttribute(Ga):null,n=e.getAttribute?e.getAttribute(Ha):null;return t&&n}function gp(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function vp(){if(I.autoReplaceSvg===!0)return zn.replace;var e=zn[I.autoReplaceSvg];return e||zn.replace}function bp(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function yp(e){return re.createElement(e)}function Bc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?bp:yp:n;if(typeof e=="string")return re.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Bc(o,{ceFn:r}))}),a}function wp(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var zn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Bc(a),n)}),n.getAttribute(ht)===null&&I.keepOriginalSource){var r=re.createComment(wp(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Xa(n).indexOf(I.replacementClass))return zn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,c){return c===I.replacementClass||c.match(a)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return pn(s)}).join(`
`);n.setAttribute(ht,""),n.innerHTML=o}};function Fo(e){e()}function Uc(e,t){var n=typeof t=="function"?t:Ln;if(e.length===0)n();else{var r=Fo;I.mutateApproach===E0&&(r=at.requestAnimationFrame||Fo),r(function(){var a=vp(),i=ei.begin("mutate");e.map(a),i(),n()})}}var ti=!1;function Gc(){ti=!0}function pa(){ti=!1}var Vn=null;function Wo(e){if(No&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Ln:t,r=e.nodeCallback,a=r===void 0?Ln:r,i=e.pseudoElementsCallback,o=i===void 0?Ln:i,s=e.observeMutationsRoot,c=s===void 0?re:s;Vn=new No(function(l){if(!ti){var f=it();Wt(l).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Do(d.addedNodes[0])&&(I.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&I.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Do(d.target)&&~R0.indexOf(d.attributeName))if(d.attributeName==="class"&&hp(d.target)){var h=xr(Xa(d.target)),w=h.prefix,y=h.iconName;d.target.setAttribute(Ga,w||f),y&&d.target.setAttribute(Ha,y)}else gp(d.target)&&a(d.target)})}}),Qe&&Vn.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xp(){Vn&&Vn.disconnect()}function kp(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Sp(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=xr(Xa(e));return a.prefix||(a.prefix=it()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ep(a.prefix,e.innerText)||Za(a.prefix,sa(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ep(e){var t=Wt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||on()):(t["aria-hidden"]="true",t.focusable="false")),t}function Op(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ue,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Sp(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ep(e),s=la("parseNodeAttributes",{},e),c=t.styleParser?kp(e):[];return N({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ue,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var Cp=je.styles;function Hc(e){var t=I.autoReplaceSvg==="nest"?Yo(e,{styleParser:!1}):Yo(e);return~t.extra.classes.indexOf(Tc)?Ke("generateLayersText",e,t):Ke("generateSvgReplacementMutation",e,t)}var ot=new Set;Va.map(function(e){ot.add("fa-".concat(e))});Object.keys(tn[ne]).map(ot.add.bind(ot));Object.keys(tn[le]).map(ot.add.bind(ot));ot=dn(ot);function Bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qe)return Promise.resolve();var n=re.documentElement.classList,r=function(d){return n.add("".concat(Ro,"-").concat(d))},a=function(d){return n.remove("".concat(Ro,"-").concat(d))},i=I.autoFetchSvg?ot:Va.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Cp));i.includes("fa")||i.push("fa");var o=[".".concat(Tc,":not([").concat(ht,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(ht,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Wt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var c=ei.begin("onTree"),l=s.reduce(function(f,d){try{var h=Hc(d);h&&f.push(h)}catch(w){Ac||w.name==="MissingIcon"&&console.error(w)}return f},[]);return new Promise(function(f,d){Promise.all(l).then(function(h){Uc(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),f()})}).catch(function(h){c(),d(h)})})}function Ap(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Hc(e).then(function(n){n&&Uc([n],t)})}function Tp(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:fa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:fa(a||{})),e(r,N(N({},n),{},{mask:a}))}}var _p=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ue:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,l=n.maskId,f=l===void 0?null:l,d=n.title,h=d===void 0?null:d,w=n.titleId,y=w===void 0?null:w,g=n.classes,b=g===void 0?[]:g,x=n.attributes,v=x===void 0?{}:x,E=n.styles,_=E===void 0?{}:E;if(t){var C=t.prefix,j=t.iconName,A=t.icon;return kr(N({type:"icon"},t),function(){return gt("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(h?v["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(y||on()):(v["aria-hidden"]="true",v.focusable="false")),Ja({icons:{main:ua(A),mask:c?ua(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:j,transform:N(N({},Ue),a),symbol:o,title:h,maskId:f,titleId:y,extra:{attributes:v,styles:_,classes:b}})})}},Np={mixout:function(){return{icon:Tp(_p)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Bo,n.nodeCallback=Ap,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?re:r,i=n.callback,o=i===void 0?function(){}:i;return Bo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,c=r.transform,l=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(w,y){Promise.all([da(a,s),f.iconName?da(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var b=Ba(g,2),x=b[0],v=b[1];w([n,Ja({icons:{main:x,mask:v},prefix:s,iconName:a,transform:c,symbol:l,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,c=yr(s);c.length>0&&(a.style=c);var l;return qa(o)&&(l=Ke("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(l||i.icon),{children:r,attributes:a}}}},Rp={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return kr({type:"layer"},function(){gt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(dn(i)).join(" ")},children:o}]})}}}},Ip={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,f=r.styles,d=f===void 0?{}:f;return kr({type:"counter",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),up({content:n.toString(),title:i,extra:{attributes:l,styles:d,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(dn(s))}})})}}}},Pp={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ue:a,o=r.title,s=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,f=r.attributes,d=f===void 0?{}:f,h=r.styles,w=h===void 0?{}:h;return kr({type:"text",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),Lo({content:n,transform:N(N({},Ue),i),title:s,extra:{attributes:d,styles:w,classes:["".concat(I.cssPrefix,"-layers-text")].concat(dn(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,c=null;if(Ec){var l=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/l,c=f.height/l}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Lo({content:n.innerHTML,width:s,height:c,transform:i,title:a,extra:o,watchable:!0})])}}},$p=new RegExp('"',"ug"),Uo=[1105920,1112319];function Mp(e){var t=e.replace($p,""),n=X0(t,0),r=n>=Uo[0]&&n<=Uo[1],a=t.length===2?t[0]===t[1]:!1;return{value:sa(a?t[0]:t),isSecondary:r||a}}function Go(e,t){var n="".concat(S0).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Wt(e.children),o=i.filter(function(A){return A.getAttribute(oa)===t})[0],s=at.getComputedStyle(e,t),c=s.getPropertyValue("font-family").match(T0),l=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?le:ne,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?nn[h][c[2].toLowerCase()]:_0[h][l],y=Mp(d),g=y.value,b=y.isSecondary,x=c[0].startsWith("FontAwesome"),v=Za(w,g),E=v;if(x){var _=tp(g);_.iconName&&_.prefix&&(v=_.iconName,w=_.prefix)}if(v&&!b&&(!o||o.getAttribute(Ga)!==w||o.getAttribute(Ha)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var C=Op(),j=C.extra;j.attributes[oa]=t,da(v,w).then(function(A){var V=Ja(N(N({},C),{},{icons:{main:A,mask:Qa()},prefix:w,iconName:E,extra:j,watchable:!0})),G=re.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(G,e.firstChild):e.appendChild(G),G.outerHTML=V.map(function(ae){return pn(ae)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function jp(e){return Promise.all([Go(e,"::before"),Go(e,"::after")])}function Lp(e){return e.parentNode!==document.head&&!~O0.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(oa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ho(e){if(Qe)return new Promise(function(t,n){var r=Wt(e.querySelectorAll("*")).filter(Lp).map(jp),a=ei.begin("searchPseudoElements");Gc(),Promise.all(r).then(function(){a(),pa(),t()}).catch(function(){a(),pa(),n()})})}var zp={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ho,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?re:r;I.searchPseudoElements&&Ho(a)}}},Vo=!1,Dp={mixout:function(){return{dom:{unwatch:function(){Gc(),Vo=!0}}}},hooks:function(){return{bootstrap:function(){Wo(la("mutationObserverCallbacks",{}))},noAuto:function(){xp()},watch:function(n){var r=n.observeMutationsRoot;Vo?pa():Wo(la("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Xo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Fp={mixout:function(){return{parse:{transform:function(n){return Xo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Xo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(c," ").concat(l," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:d,path:h};return{tag:"g",attributes:N({},w.outer),children:[{tag:"g",attributes:N({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),w.path)}]}]}}}},Wr={x:0,y:0,width:"100%",height:"100%"};function qo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Wp(e){return e.tag==="g"?e.children:[e]}var Yp={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?xr(a.split(" ").map(function(o){return o.trim()})):Qa();return i.prefix||(i.prefix=it()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,c=n.transform,l=i.width,f=i.icon,d=o.width,h=o.icon,w=F0({transform:c,containerWidth:d,iconWidth:l}),y={tag:"rect",attributes:N(N({},Wr),{},{fill:"white"})},g=f.children?{children:f.children.map(qo)}:{},b={tag:"g",attributes:N({},w.inner),children:[qo(N({tag:f.tag,attributes:N(N({},f.attributes),w.path)},g))]},x={tag:"g",attributes:N({},w.outer),children:[b]},v="mask-".concat(s||on()),E="clip-".concat(s||on()),_={tag:"mask",attributes:N(N({},Wr),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,x]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Wp(h)},_]};return r.push(C,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(v,")")},Wr)}),{children:r,attributes:a}}}},Bp={provides:function(t){var n=!1;at.matchMedia&&(n=at.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=N(N({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:N(N({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:N(N({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:N(N({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Up={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Gp=[B0,Np,Rp,Ip,Pp,zp,Dp,Fp,Yp,Bp,Up];ap(Gp,{mixoutsTo:Re});Re.noAuto;Re.config;Re.library;Re.dom;var ha=Re.parse;Re.findIconDefinition;Re.toHtml;var Hp=Re.icon;Re.layer;Re.text;Re.counter;function Ko(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ko(Object(n),!0).forEach(function(r){Tt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ko(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xn(e){"@babel/helpers - typeof";return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xn(e)}function Tt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vp(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Xp(e,t){if(e==null)return{};var n=Vp(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ga(e){return qp(e)||Kp(e)||Zp(e)||Qp()}function qp(e){if(Array.isArray(e))return va(e)}function Kp(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zp(e,t){if(e){if(typeof e=="string")return va(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return va(e,t)}}function va(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Qp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jp(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,c=e.spin,l=e.spinPulse,f=e.spinReverse,d=e.pulse,h=e.fixedWidth,w=e.inverse,y=e.border,g=e.listItem,b=e.flip,x=e.size,v=e.rotation,E=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":l,"fa-pulse":d,"fa-fw":h,"fa-inverse":w,"fa-border":y,"fa-li":g,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Tt(t,"fa-".concat(x),typeof x<"u"&&x!==null),Tt(t,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),Tt(t,"fa-pull-".concat(E),typeof E<"u"&&E!==null),Tt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(C){return _[C]?C:null}).filter(function(C){return C})}function eh(e){return e=e-0,e===e}function Vc(e){return eh(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var th=["style"];function nh(e){return e.charAt(0).toUpperCase()+e.slice(1)}function rh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Vc(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[nh(a)]=i:t[a]=i,t},{})}function Xc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Xc(e,c)}),a=Object.keys(t.attributes||{}).reduce(function(c,l){var f=t.attributes[l];switch(l){case"class":c.attrs.className=f,delete t.attributes.class;break;case"style":c.attrs.style=rh(f);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=f:c.attrs[Vc(l)]=f}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Xp(n,th);return a.attrs.style=nt(nt({},a.attrs.style),o),e.apply(void 0,[t.tag,nt(nt({},a.attrs),s)].concat(ga(r)))}var qc=!1;try{qc=!0}catch{}function ah(){if(!qc&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Zo(e){if(e&&Xn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ha.icon)return ha.icon(e);if(e===null)return null;if(e&&Xn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Yr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Tt({},e,t):{}}var Sr=me.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,s=e.titleId,c=e.maskId,l=Zo(n),f=Yr("classes",[].concat(ga(Jp(e)),ga(i.split(" ")))),d=Yr("transform",typeof e.transform=="string"?ha.transform(e.transform):e.transform),h=Yr("mask",Zo(r)),w=Hp(l,nt(nt(nt(nt({},f),d),h),{},{symbol:a,title:o,titleId:s,maskId:c}));if(!w)return ah("Could not find icon",l),null;var y=w.abstract,g={ref:t};return Object.keys(e).forEach(function(b){Sr.defaultProps.hasOwnProperty(b)||(g[b]=e[b])}),ih(y[0],g)});Sr.displayName="FontAwesomeIcon";Sr.propTypes={beat:F.bool,border:F.bool,beatFade:F.bool,bounce:F.bool,className:F.string,fade:F.bool,flash:F.bool,mask:F.oneOfType([F.object,F.array,F.string]),maskId:F.string,fixedWidth:F.bool,inverse:F.bool,flip:F.oneOf([!0,!1,"horizontal","vertical","both"]),icon:F.oneOfType([F.object,F.array,F.string]),listItem:F.bool,pull:F.oneOf(["right","left"]),pulse:F.bool,rotation:F.oneOf([0,90,180,270]),shake:F.bool,size:F.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:F.bool,spinPulse:F.bool,spinReverse:F.bool,symbol:F.oneOfType([F.bool,F.string]),title:F.string,titleId:F.string,transform:F.oneOfType([F.string,F.object]),swapOpacity:F.bool};Sr.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var ih=Xc.bind(null,me.createElement);const oh="/assets/1-7c766b95.webp",sh="/assets/2-fb0e4f2f.webp",ch="/assets/3-fc02f9fe.webp",lh="/assets/4-fe7012df.webp",fh="/assets/5-589d8e4b.webp",uh="/assets/6-6bbb3a97.webp",dh="/assets/7-723b04b3.webp",mh="/assets/8-26381873.webp",ph="/assets/9-904ef884.webp",hh="/assets/10-4c5aeac6.webp",gh=[u("img",{alt:"modal-gallery-img",src:oh}),u("img",{alt:"modal-gallery-img",src:sh}),u("img",{alt:"modal-gallery-img",src:ch}),u("img",{alt:"modal-gallery-img",src:lh}),u("img",{alt:"modal-gallery-img",src:fh}),u("img",{alt:"modal-gallery-img",src:uh}),u("img",{alt:"modal-gallery-img",src:dh}),u("img",{alt:"modal-gallery-img",src:mh}),u("img",{alt:"modal-gallery-img",src:ph}),u("img",{alt:"modal-gallery-img",src:hh})];function vh({className:e}){const[t,n]=m.useState(!1);return B("div",{className:e,children:[B("div",{onClick:()=>n(!0),style:{fontSize:"0.5em"},children:["Galerie"," "]}),B(Lr,{show:t,onHide:()=>n(!1),size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[u(Lr.Header,{closeButton:!0,children:B("div",{className:"modal-header",children:[u(Rt,{path:m0}),u("h5",{className:"modal-title",style:{color:"white"},children:"Nos Créations"})]})}),B(Lr.Body,{children:[u(Rt,{path:d0}),u(Rt,{path:Da}),u("ul",{className:"modal-ai-gallery list-unstyled",children:gh.map((i,o)=>u("li",{className:"modal-ai-img my-2",children:i},o))})]})]})]})}function bh(){const{isLight:e,toggleTheme:t}=vt();return B("div",{onClick:el(t,500),children:[u(pt,{src:`./svg/${e?"moon":"sun"}.svg`})," "]})}const yh=[u(vh,{}),u(bh,{})];function xh(){const{theme:e}=vt();return B("div",{className:e,children:[u(qd,{items:yh}),u(()=>screen.availWidth>900?u(Vd,{}):u(Xd,{}),{})]})}export{xh as default};
