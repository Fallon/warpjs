"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.getSegmentSchema=function(e){return a[e.toLowerCase()]},t.isDrawingSegment=function(e){return o.test(e.type)},t.createLineSegment=function(e){var t={relative:!1};switch(e.length){case 2:t.type="l";break;case 3:t.type="q";break;case 4:t.type="c";break;default:return!1}for(var r=1;r<e.length;r++){var a=(r<e.length-1?r:i.length)-1,o=n(i[a],2),l=o[0],u=o[1];t[l]=e[r][0],t[u]=e[r][1],e[r].length>2&&(t.extended=t.extended||{},t.extended[a]=e[r].slice(2))}return t},t.joinSegments=function(e,t){if(e.type===t.type&&e.relative===t.relative){var r=function(e,t,r){if(e&&t){for(var n=[],a=Math.min(e.length,t.length),i=0;i<a;i++)n.push((e[i]+t[i])/2);y.extended[r]=n}},n=t.type,a=t.relative,i=t.x,o=t.y,l=!!e.extended&&!!t.extended,u={},y={type:n,relative:a,x:i,y:o,extended:u};switch(n){case"l":break;case"q":y.x1=(e.x1+t.x1)/2,y.y1=(e.y1+t.y1)/2,l&&r(e.extended[0],t.extended[0],0);break;case"c":y.x1=(e.x1+e.x2)/2,y.y1=(e.y1+e.y2)/2,y.x2=(t.x1+t.x2)/2,y.y2=(t.y1+t.y2)/2,l&&(r(e.extended[0],e.extended[1],0),r(t.extended[0],t.extended[1],1));break;default:return!1}return t.extended&&t.extended[2]&&(u[2]=t.extended[2]),y}return!1};var a={m:["x","y"],z:[],l:["x","y"],h:["x"],v:["y"],c:["x1","y1","x2","y2","x","y"],s:["x2","y2","x","y"],q:["x1","y1","x","y"],t:["x","y"],a:["rx","ry","xRotation","largeArc","sweep","x","y"]},i=t.pointGroups=[["x1","y1"],["x2","y2"],["x","y"]],o=/[lhvcsqta]/},function(e,t,r){function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var r=[],a=0;a<e.length;a++){var i=t(JSON.parse(JSON.stringify(e[a])),a,e,r);Array.isArray(i)?r.push.apply(r,n(i)):i&&r.push(i)}return r}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[],r=void 0;for(a.lastIndex=0;r=a.exec(e);){var o=r[1].toLowerCase(),l=(r[2].match(i)||[]).map(parseFloat),u=o===r[1],y=(0,n.getSegmentSchema)(o);if(l.length<y.length)throw new Error('Malformed path data: type "'+o+'" has '+l.length+" arguments, expected "+scheme.length);if(y.length>0){if(l.length%y.length!=0)throw new Error('Malformed path data: type "'+o+'" has '+l.length+" arguments, "+l.length%y.length+" too many");for(var f=0;f<l.length/y.length;f++){for(var c={type:o,relative:u},v=0;v<y.length;v++)c[y[v]]=l[f*y.length+v];t.push(c)}}else t.push({type:o,relative:u})}return t};var n=r(0),a=/([mzlhvcsqta])([^mzlhvcsqta]*)/gi,i=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof(e)};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=!1,i=Math.pow(10,t);return e.map(function(e){var t=[],o=e.relative?e.type:e.type.toUpperCase(),l=r!==o,u=(0,a.getSegmentSchema)(e.type);l&&(t.push(o),r=o);var y=!0,f=!1,c=void 0;try{for(var v,p=u[Symbol.iterator]();!(y=(v=p.next()).done);y=!0){var d=e[v.value],s=void 0;switch(void 0===d?"undefined":n(d)){case"boolean":s=0|d;break;case"number":s=(d*i|0)/i;break;default:throw new Error("Invalid path data")}l||t.push(" "),t.push(s),l=!1}}catch(e){f=!0,c=e}finally{try{!y&&p.return&&p.return()}finally{if(f)throw c}}return t.join("")}).join("")};var a=r(0)},function(e,t,r){function n(e,t,r){e.setAttribute(t,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.createElement=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=document.createElementNS("http://www.w3.org/2000/svg",e),a=!0,i=!1,o=void 0;try{for(var l,u=Object.keys(t)[Symbol.iterator]();!(a=(l=u.next()).done);a=!0){var y=l.value;n(r,y,t[y])}}catch(e){i=!0,o=e}finally{try{!a&&u.return&&u.return()}finally{if(i)throw o}}return r},t.getProperty=function(e,t){return e[t]instanceof SVGAnimatedLength?e[t].baseVal.value:e.getAttribute(t)},t.setProperty=n},function(e,t,r){function n(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,r=[],n=[],a=[e];a.length<e.length;){for(var i=a[a.length-1],o=[],l=1;l<i.length;l++){for(var u=i[l-1],y=i[l],f=[],c=Math.max(u.length,y.length),v=0;v<c;v++){var p=u[v]||0,d=y[v]||0;f.push(p+(d-p)*t)}o.push(f)}a.push(o)}for(var s=0;s<a.length;s++)r.push(a[s][0]),n.push(a[a.length-1-s][s]);return[r,n]}function a(e){for(var t=e[0],r=e[e.length-1],n=0,a=0;a<t.length;a++){var i=r[a]-t[a];n+=Math.pow(i,2)}return Math.sqrt(n)}Object.defineProperty(t,"__esModule",{value:!0}),t.split=n,t.until=function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,i=[e],o=[];i.length>0;){var l=i.pop();if(r(l)>t)for(var u=n(l),y=u.length-1;y>=0;y--)i.push(u[y]);else o.push(l)}return o},t.euclideanDistance=a},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(7));"undefined"!=typeof window&&(window.Warp=n.default),t.default=n.default},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(8),u=r(4),y=n(r(2)),f=n(r(3)),c=r(5),v=n(r(15)),p=n(r(16)),d=n(r(17)),s=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"q";i(this,e),this.element=t,(0,l.shapesToPaths)(this.element),(0,l.preparePaths)(this.element,r);var n=t.querySelectorAll("path");this.paths=[].map.call(n,function(e){var t=(0,u.getProperty)(e,"d");return{element:e,data:(0,y.default)(t)}})}return o(e,[{key:"update",value:function(){var e=!0,t=!1,r=void 0;try{for(var n,a=this.paths[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var i=n.value,o=(0,f.default)(i.data);(0,u.setProperty)(i.element,"d",o)}}catch(e){t=!0,r=e}finally{try{!e&&a.return&&a.return()}finally{if(t)throw r}}}},{key:"transform",value:function(e){var t=!0,r=!1,n=void 0;try{for(var a,i=this.paths[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value;o.data=(0,v.default)(o.data,e)}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}this.update()}},{key:"interpolate",value:function(e){var t=!1,r=!0,n=!1,a=void 0;try{for(var i,o=this.paths[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var l=i.value;l.data=(0,p.default)(l.data,e,function(r){var n=[r[0].slice(0,2),r[r.length-1].slice(0,2)],a=(0,c.euclideanDistance)(n);return t=t||a>e,a})}}catch(e){n=!0,a=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw a}}return t}},{key:"extrapolate",value:function(e){var t=!1,r=!0,n=!1,a=void 0;try{for(var i,o=this.paths[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var l=i.value;l.data=(0,d.default)(l.data,e,function(r){var n=[r[0].slice(0,2),r[r.length-1].slice(0,2)],a=(0,c.euclideanDistance)(n);return t=t||a<=e,a})}}catch(e){n=!0,a=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw a}}return t}},{key:"preInterpolate",value:function(e,t){var r=!1,n=!0,i=!1,o=void 0;try{for(var l,u=this.paths[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var y=l.value,f=(0,v.default)(y.data,function(t){var r=e(t.slice(0,2));return r.push.apply(r,a(t)),r}),d=(0,p.default)(f,t,function(e){var n=[e[0].slice(0,2),e[e.length-1].slice(0,2)],a=(0,c.euclideanDistance)(n);return r=r||a>t,a});y.data=(0,v.default)(d,function(e){return e.slice(2)})}}catch(e){i=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return r}},{key:"preExtrapolate",value:function(e,t){var r=!1,n=!0,i=!1,o=void 0;try{for(var l,u=this.paths[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var y=l.value,f=(0,v.default)(y.data,function(t){var r=e(t.slice(0,2));return r.push.apply(r,a(t)),r}),p=(0,d.default)(f,t,function(e){var n=[e[0].slice(0,2),e[e.length-1].slice(0,2)],a=(0,c.euclideanDistance)(n);return r=r||a<=t,a});y.data=(0,v.default)(p,function(e){return e.slice(2)})}}catch(e){i=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return r}}]),e}();t.default=s},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.shapesToPaths=function(e){var t=e.querySelectorAll("line, polyline, polygon, rect, ellipse, circle"),r=!0,n=!1,i=void 0;try{for(var l,u=t[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var y=l.value,f={};switch(y.tagName.toLowerCase()){case"line":f=p.line((0,d.getProperty)(y,"x1"),(0,d.getProperty)(y,"y1"),(0,d.getProperty)(y,"x2"),(0,d.getProperty)(y,"y2"));break;case"polyline":f=p.polyline.apply(p,a(y.points));break;case"polygon":f=p.polygon.apply(p,a(y.points));break;case"rect":f=p.rectangle((0,d.getProperty)(y,"x"),(0,d.getProperty)(y,"y"),(0,d.getProperty)(y,"width"),(0,d.getProperty)(y,"height"),(0,d.getProperty)(y,"rx"),(0,d.getProperty)(y,"ry"));break;case"ellipse":f=p.ellipse((0,d.getProperty)(y,"cx"),(0,d.getProperty)(y,"cy"),(0,d.getProperty)(y,"rx"),(0,d.getProperty)(y,"ry"));break;case"circle":f=p.circle((0,d.getProperty)(y,"cx"),(0,d.getProperty)(y,"cy"),(0,d.getProperty)(y,"r"))}var c={d:(0,o.default)(f)},v=!0,s=!1,h=void 0;try{for(var x,g=y.attributes[Symbol.iterator]();!(v=(x=g.next()).done);v=!0){var m=x.value,b=m.nodeName,w=m.nodeValue;/^(x|y|x1|y1|x2|y2|width|height|r|rx|ry|cx|cy|points|d)$/.test(b)||(c[b]=w)}}catch(e){s=!0,h=e}finally{try{!v&&g.return&&g.return()}finally{if(s)throw h}}var N=(0,d.createElement)("path",c);y.parentNode.replaceChild(N,y)}}catch(e){n=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(n)throw i}}},t.preparePaths=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"q",r=e.querySelectorAll("path"),n=!0,a=!1,p=void 0;try{for(var s,h=r[Symbol.iterator]();!(n=(s=h.next()).done);n=!0){var x=s.value,g=(0,d.getProperty)(x,"d"),m=(0,i.default)(g);m=(0,l.default)(m,(0,u.default)()),m=(0,l.default)(m,(0,y.default)()),m=(0,l.default)(m,(0,f.default)()),m=(0,l.default)(m,(0,c.default)(t)),m=(0,l.default)(m,(0,v.default)()),g=(0,o.default)(m),(0,d.setProperty)(x,"d",g)}}catch(e){a=!0,p=e}finally{try{!n&&h.return&&h.return()}finally{if(a)throw p}}};var i=n(r(2)),o=n(r(3)),l=n(r(1)),u=n(r(9)),y=n(r(10)),f=n(r(11)),c=n(r(12)),v=n(r(13)),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(14)),d=r(4)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=["x","x1","x2"],t=["y","y1","y2"],r=0,a=0,i=NaN,o=NaN;return function(l){if(isNaN(i)&&(0,n.isDrawingSegment)(l)&&(i=r,o=a),"z"!==l.type||isNaN(i)||(r=i,a=o,i=NaN,o=NaN),l.relative){var u=!0,y=!1,f=void 0;try{for(var c,v=e[Symbol.iterator]();!(u=(c=v.next()).done);u=!0){var p=c.value;p in l&&(l[p]+=r)}}catch(e){y=!0,f=e}finally{try{!u&&v.return&&v.return()}finally{if(y)throw f}}var d=!0,s=!1,h=void 0;try{for(var x,g=t[Symbol.iterator]();!(d=(x=g.next()).done);d=!0){var m=x.value;m in l&&(l[m]+=a)}}catch(e){s=!0,h=e}finally{try{!d&&g.return&&g.return()}finally{if(s)throw h}}l.relative=!1}return r="x"in l?l.x:r,a="y"in l?l.y:a,"m"===l.type&&(i=r,o=a),l}};var n=r(0)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0,t=0,r=NaN,n=NaN,a=NaN,i=NaN,o=NaN,l=NaN;return function(u){if(isNaN(r)&&"m"!==u.type)throw new Error('Transform path error: path must start with "moveto"');return"s"===u.type&&(a=isNaN(a)?e:a,i=isNaN(i)?t:i,u.type="c",u.x1=(u.relative?1:2)*e-a,u.y1=(u.relative?1:2)*t-i),"c"===u.type?(a=(u.relative?e:0)+u.x2,i=(u.relative?t:0)+u.y2):(a=NaN,i=NaN),"t"===u.type&&(o=isNaN(o)?e:o,l=isNaN(l)?t:l,u.type="q",u.x1=(u.relative?1:2)*e-o,u.y1=(u.relative?1:2)*t-l),"q"===u.type?(o=(u.relative?e:0)+u.x1,l=(u.relative?t:0)+u.y1):(o=NaN,l=NaN),"z"===u.type&&(e=r,t=n),e="x"in u?(u.relative?e:0)+u.x:e,t="y"in u?(u.relative?t:0)+u.y:t,"m"===u.type&&(r=e,n=t),u}}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0,t=0,r=NaN,n=NaN;return function(a){if(isNaN(r)&&"m"!==a.type)throw new Error('Transform path error: path must start with "moveto"');switch(a.type){case"h":a.type="l",a.y=a.relative?0:t;break;case"v":a.type="l",a.x=a.relative?0:e;break;case"z":a.type="l",a.x=r-(a.relative?e:0),a.y=n-(a.relative?t:0);break;case"a":0!==a.rx&&0!==a.ry||(a.type="l",delete a.rx,delete a.ry,delete a.xRotation,delete a.largeArc,delete a.sweep)}return e=(a.relative?e:0)+a.x,t=(a.relative?t:0)+a.y,"m"===a.type&&(r=e,n=t),a}}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"q",t=0,r=0,a=NaN,i=NaN;return function(o){if(isNaN(a)&&(0,n.isDrawingSegment)(o.type)&&(a=t,i=r),"z"!==o.type||isNaN(a)||(t=a,r=i,a=NaN,i=NaN),"l"===o.type){var l=o.relative?0:t,u=o.relative?0:r;switch(o.type=e,e){case"q":o.x1=(l+o.x)/2,o.y1=(u+o.y)/2;break;case"c":var y=(o.x-l)/3,f=(o.y-u)/3;o.x1=l+y,o.y1=u+f,o.x2=l+2*y,o.y2=u+2*f;break;default:throw new Error('Invalid curve type "'+e+'"')}}return t="x"in o?(o.relative?t:0)+o.x:t,r="y"in o?(o.relative?r:0)+o.y:r,"m"===o.type&&(a=t,i=r),o}};var n=r(0)},function(e,t,r){function n(e,t,r,n,i,o,l,u,y){if(e===u&&t===y)return[];if(!r&&!n)return[{type:"l",x:u,y:y}];var f=Math.sin(i*Math.PI/180),c=Math.cos(i*Math.PI/180),v=c*(e-u)/2+f*(t-y)/2,p=-f*(e-u)/2+c*(t-y)/2,d=r*r,s=n*n,h=v*v,x=p*p,g=0,m=d*s-d*x-s*h;if(m<0){var b=Math.sqrt(1-m/(d*s));r*=b,n*=b}else g=(o&&l||!o&&!l?-1:1)*Math.sqrt(m/(d*x+s*h));var w=g*r*p/n,N=-g*n*v/r,_=c*w-f*N+(e+u)/2,P=f*w+c*N+(t+y)/2,M=a(1,0,(v-w)/r,(p-N)/n),S=a((v-w)/r,(p-N)/n,(-v-w)/r,(-p-N)/n);!l&&S>0?S-=2*Math.PI:l&&S<0&&(S+=2*Math.PI);for(var A=[],j=Math.ceil(Math.abs(S/(Math.PI/2))),O=S/j,k=8/3*Math.sin(O/4)*Math.sin(O/4)/Math.sin(O/2),q=0;q<j;q++){var E=Math.cos(M),I=Math.sin(M),z=M+O,D=Math.cos(z),R=Math.sin(z),T=c*r*D-f*n*R+_,C=f*r*D+c*n*R+P,G=k*(-c*r*I-f*n*E),L=k*(-f*r*I+c*n*E),V=k*(c*r*R+f*n*D),J=k*(f*r*R-c*n*D);A.push({type:"c",x:T,y:C,x1:e+G,y1:t+L,x2:T+V,y2:C+J}),M=z,e=T,t=C}return A}function a(e,t,r,n){var a=Math.atan2(t,e),i=Math.atan2(n,r);return i>=a?i-a:2*Math.PI-(a-i)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0,t=0,r=NaN,a=NaN;return function(o){var l=o;if(isNaN(r)&&(0,i.isDrawingSegment)(o.type)&&(r=e,a=t),"z"!==o.type||isNaN(r)||(e=r,t=a,r=NaN,a=NaN),"a"===o.type){var u=n(o.relative?0:e,o.relative?0:t,o.rx,o.ry,o.xRotation,o.largeArc,o.sweep,o.x,o.y),y=0,f=0,c=!0,v=!1,p=void 0;try{for(var d,s=u[Symbol.iterator]();!(c=(d=s.next()).done);c=!0){var h=d.value;h.relative=o.relative,o.relative&&"c"===h.type&&(h.x-=y,h.x1-=y,h.x2-=y,h.y-=f,h.y1-=f,h.y2-=f),y=h.x,f=h.y}}catch(e){v=!0,p=e}finally{try{!c&&s.return&&s.return()}finally{if(v)throw p}}l=u}return e="x"in o?(o.relative?e:0)+o.x:e,t="y"in o?(o.relative?t:0)+o.y:t,"m"===o.type&&(r=e,a=t),l}};var i=r(0)},function(e,t,r){function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.map(function(e,t){return{type:0===t?"m":"l",relative:!1,x:e.x||e[0],y:e.y||e[1]}})}function a(e,t,r,n){return[{type:"m",relative:!1,x:e,y:t-n},{type:"a",relative:!1,rx:r,ry:n,xRotation:0,largeArc:!1,sweep:!0,x:e,y:t+n},{type:"a",relative:!1,rx:r,ry:n,xRotation:0,largeArc:!1,sweep:!0,x:e,y:t-n}]}Object.defineProperty(t,"__esModule",{value:!0}),t.line=function(e,t,r,n){return[{type:"m",relative:!1,x:e,y:t},{type:"l",relative:!1,x:r,y:n}]},t.polyline=n,t.polygon=function(){var e=n.apply(void 0,arguments);return e.append({type:"z",relative:!1}),e},t.rectangle=function(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;return a>0||i>0?[{type:"m",relative:!1,x:e+(a=a||i),y:t},{type:"h",relative:!1,x:e+r-a},{type:"a",relative:!1,rx:a,ry:i=i||a,xRotation:0,largeArc:!1,sweep:!0,x:e+r,y:t+i},{type:"v",relative:!1,y:t+n-i},{type:"a",relative:!1,rx:a,ry:i,xRotation:0,largeArc:!1,sweep:!0,x:e+r-a,y:t+n},{type:"h",relative:!1,x:e+a},{type:"a",relative:!1,rx:a,ry:i,xRotation:0,largeArc:!1,sweep:!0,x:e,y:t+n-i},{type:"v",relative:!1,y:t+i},{type:"a",relative:!1,rx:a,ry:i,xRotation:0,largeArc:!1,sweep:!0,x:e+a,y:t}]:[{type:"m",relative:!1,x:e,y:t},{type:"h",relative:!1,x:e+r},{type:"v",relative:!1,y:t+n},{type:"h",relative:!1,x:e},{type:"v",relative:!1,y:t}]},t.ellipse=a,t.circle=function(e,t,r){return a(e,t,r,r)}},function(e,t,r){function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(e,t){return(0,i.default)(e,function(e){for(var r=0;r<o.pointGroups.length;r++){var i=a(o.pointGroups[r],2),l=i[0],u=i[1];if(l in e&&u in e){var y=(e.extended?e.extended[r]:null)||{},f=t([e[l],e[u]].concat(n(y)));if(f.length<2)throw new Error("Transformer must return at least 2 points");e[l]=f[0],e[u]=f[1],f.length>2&&(e.extended=e.extended||{},e.extended[r]=f.slice(2))}}return e})};var i=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),o=r(0)},function(e,t,r){function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(e,t,r){var y=[];return(0,i.default)(e,function(e){var i=e;if(u.test(e.type)){for(var f=[y],c=0;c<l.pointGroups.length;c++){var v=a(l.pointGroups[c],2),p=v[0],d=v[1];if(p in e&&d in e){var s=(e.extended?e.extended[c]:null)||[],h=[e[p],e[d]].concat(n(s));f.push(h)}}var x=(0,o.until)(f,t,r);x.length>1&&(i=x.map(function(e){return(0,l.createLineSegment)(e)}))}if("x"in e&&"y"in e){var g=(e.extended?e.extended[2]:null)||{},m=[e.x,e.y].concat(n(g));y=m}return i})};var i=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),o=r(5),l=r(0),u=/[lqc]/},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return(0,n.default)(e,function(e,n,o,l){if(n>1){var u=l[l.length-1],y=l[l.length-2];if(i.test(e.type)&&u.type===e.type){var f=[[y.x,y.y],[e.x,e.y]];if(r(f)<=t){var c=(0,a.joinSegments)(u,e);if(c)return l[l.length-1]=c,!1}}}return e})};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),a=r(0),i=/[lqc]/}]);