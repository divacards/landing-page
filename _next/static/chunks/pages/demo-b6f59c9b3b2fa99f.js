(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{5872:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo",function(){return n(672)}])},5522:function(e,t,n){"use strict";n.d(t,{aN:function(){return v},CZ:function(){return T}});var r=n(5893),o=n(1217),i=n(5769),a=n(1133),s=n(254),l=n(3328),c=n(8626),u=n(3857),f=n(4232),h=n(7294),d=n(9521),x=n(2849),p=n(5960);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=[3,6,10,10,18,23];function v(){var e=(0,d.S)().progress;return(0,r.jsxs)(x.x,m({position:[0,0,0]},{font:"/fonts/DotGothic16-Regular.ttf",fontSize:3,letterSpacing:.2,lineHeight:1,"material-toneMapped":!1},{color:"#F8165D",scale:.3,children:[e.toFixed()," % "]}))}function w(e){var t=j((0,i.m)(["/three_d/girl/textures/floor/Marble006_1K_Roughness.jpg","/images/logo.png"]),2),n=t[0],o=t[1];return(0,r.jsxs)("mesh",m({rotation:[-Math.PI/2,0,1.5*Math.PI]},e,{children:[(0,r.jsx)("planeGeometry",{args:[20,5]}),(0,r.jsx)(s.Q,{resolution:1024,mirror:.75,mixBlur:10,mixStrength:2,minDepthThreshold:.8,maxDepthThreshold:1.2,depthToBlurRatioBias:.2,color:"gold",metalness:.5,roughnessMap:n,roughness:1,normalMap:o,normalScale:[4,4]})]}))}function S(e){var t=function(){var t=Math.floor(Math.random()*y.length);e.setAction(y[t]),j(!0)},n=function(){e.setAction(18),j(!1)},o=(0,i.m)(e.textures),a=(0,h.useRef)(),s=(0,h.useState)(!1),l=s[0],c=s[1],u=(0,h.useState)(!1),d=u[0],x=u[1],p=(0,h.useState)(!1),g=p[0],j=p[1],v=(0,h.useState)(0),w=v[0],S=v[1];return(0,f.xQ)((function(r,o){var i=r.clock.getElapsedTime();i.toFixed()%60>=0&&i.toFixed()%60<10&&!g&&t(),i.toFixed()%60>=10&&i.toFixed()%60<20&&g&&n(),i.toFixed()%60>=20&&i.toFixed()%60<30&&!g&&t(),i.toFixed()%60>=30&&i.toFixed()%60<40&&g&&n(),i.toFixed()%60>=40&&i.toFixed()%60<50&&!g&&t(),i.toFixed()%60>=50&&i.toFixed()%60<60&&g&&n(),e.setElapsed(i.toFixed()),a.current.rotation.x=a.current.rotation.y+=.5*o,i-w>=.1&&S(i)})),(0,r.jsxs)("mesh",m({},e,{ref:a,scale:d?.2:.25,onClick:function(t){var n;d||(x(!0),e.setAction(20),(n=3e3,new Promise((function(e){return setTimeout(e,n)}))).then((function(){e.setAction(18),x(!1)})))},onPointerOver:function(e){return c(!0)},onPointerOut:function(e){return c(!1)},children:[(0,r.jsx)("boxGeometry",{args:[1,1,1]}),(0,r.jsx)("meshStandardMaterial",{map:o[parseInt(w.toFixed())%6],color:l?"black":"white"})]}))}var b=[{up:"\u6771\u4eac",down:function(){return"\u30ab\u30fc\u30ba"}},{up:"NFT",down:function(){return"\u767a\u58f2\u4e2d"}},{up:"TOKYO",down:function(){return"CARDS"}},{up:"NFT",down:function(){return"ON SALE"}},{up:"\u73fe\u5728\u6642\u523b",down:function(){return(new Date).toLocaleTimeString("it-IT")}},{up:"NOW",down:function(){return(new Date).toLocaleTimeString("it-IT")}}];function F(e){var t=e%60;return t>=0&&t<10?b[0]:t>=10&&t<20?b[1]:t>=20&&t<30?b[2]:t>=30&&t<40?b[3]:t>=40&&t<50?b[4]:t>=50&&t<60?b[5]:void 0}function O(e){var t="/three_d/asian_girl/scene.gltf",n=(0,f.U2)(o.E,t),i=(0,c.L)(t).animations,a=(0,u.v)(i),s=a.ref,d=a.actions,p=Object.keys(d),g=(0,h.useState)(18),j=g[0],y=g[1],v=(0,h.useState)(0),b=v[0],O=v[1],T={font:"/fonts/DotGothic16-Regular.ttf",fontSize:3,letterSpacing:.2,lineHeight:1,"material-toneMapped":!1};return(0,h.useEffect)((function(){var e=d[p[j]];return e.reset().fadeIn(2).play(),function(){e.fadeOut(2)}}),[d,j,2]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("directionalLight",{position:[2.5,8,5],intensity:1.5}),(0,r.jsx)(S,{textures:["/images/logo_extra/10.png","/images/logo_extra/11.png","/images/logo_extra/12.png","/images/logo_extra/13.png","/images/logo_extra/14.png","/images/logo_extra/15.png"],position:[.7,-.3,4],setAction:y,setElapsed:O,totalActions:p.length}),(0,r.jsx)("primitive",m({},e,{receiveShadow:!0,ref:s,scale:1,rotation:[0,0,0],object:n.scene})),(0,r.jsx)(w,{position:[0,-2.5,-1],"rotation-x":-Math.PI/2}),(0,r.jsx)(l.i,{yawFrequency:.1,pitchFrequency:.1,rollFrequency:.1}),(0,r.jsxs)(x.x,m({position:[-2,5,-7]},T,{color:"#F8165D",children:[" ",F(b).up," "]}),"word-2"),(0,r.jsxs)(x.x,m({position:[-2,2,-7]},T,{color:"#3E81F5",children:[" ",F(b).down()," "]}),"word-3")]})}function T(){return(0,r.jsx)(f.Xz,{className:"canvas",children:(0,r.jsxs)(a.wI,{children:[(0,r.jsx)("pointLight",{position:[10,50,50],color:"#F9125B"}),(0,r.jsx)("pointLight",{position:[0,-10,0],color:"gold"}),(0,r.jsx)(h.Suspense,{fallback:(0,r.jsx)(v,{}),children:(0,r.jsx)(O,{position:[0,-2.5,2]})}),(0,r.jsx)(p.xC,{multisampling:8,children:(0,r.jsx)(p.dp,{kernelSize:1,luminanceThreshold:0,luminanceSmoothing:.4,intensity:.2})})]})})}},672:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(5893),o=n(7294),i=n(9008),a=n(9795),s=n(715);function l(e){var t=new s.Q(e);return t.pollingInterval=12e3,t}var c=function(e){var t=e.pageTitle,n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:t})}),(0,r.jsx)(a.Ht,{getLibrary:l,children:(0,r.jsx)("main",{className:"w-full h-screen",children:n})})]})},u=n(1217),f=n(2849),h=n(1133),d=n(5769),x=n(254),p=n(3328),g=n(8626),m=n(3857),j=n(4232),y=n(5960),v=n(5522);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var F=new Date("2022-02-02T18:00:00.000+09:00").getTime();function O(e){var t=b((0,d.m)(["/three_d/girl/textures/floor/Marble006_1K_Roughness.jpg","/images/logo.png"]),2),n=t[0],o=t[1],i=b((0,h.xK)((function(){return S({rotation:[-Math.PI/2,0,0]},e)})),1)[0];return(0,r.jsxs)("mesh",S({rotation:[-Math.PI/2,0,Math.PI/2]},e,{ref:i,children:[(0,r.jsx)("planeGeometry",{args:[5,50]}),(0,r.jsx)(x.Q,{resolution:1024,mirror:.75,mixBlur:10,mixStrength:2,minDepthThreshold:.8,maxDepthThreshold:1.2,depthToBlurRatioBias:.2,color:"aqua",metalness:.5,roughnessMap:n,roughness:1,normalMap:o,normalScale:[4,4]})]}))}function T(e){var t=(0,d.m)(e.boxTexture),n=(0,o.useRef)(),i=(0,o.useState)(!1),a=i[0],s=i[1],l=(0,o.useState)(!1),c=l[0],u=l[1],f=(0,o.useState)(!1),h=f[0],x=f[1],p=[3,5,9,12,16,17,20];return(0,j.xQ)((function(t,r){var o=t.clock.getElapsedTime();if(o.toFixed()%17===0&&!h){var i=Math.floor(Math.random()*p.length);e.setAction(p[i]),x(!0)}o.toFixed()%31===0&&h&&(e.setAction(12),x(!1)),function(e){var t=(new Date).getTime(),n=F-t;e(Math.floor(n/864e5)+"d "+Math.floor(n%864e5/36e5)+"h "+Math.floor(n%36e5/6e4)+"m "+Math.floor(n%6e4/1e3)+"s "),n<0&&e("NOW LIVE")}(e.setElapsed),n.current.rotation.x=n.current.rotation.y+=.5*r})),(0,r.jsxs)("mesh",S({},e,{ref:n,scale:c?.4:.25,onClick:function(e){u(!c)},onPointerOver:function(e){return s(!0)},onPointerOut:function(e){return s(!1)},children:[(0,r.jsx)("boxGeometry",{args:[1,1,1]}),(0,r.jsx)("meshStandardMaterial",{map:t,color:a?"hotpink":"white"})]}))}function M(e){var t="/three_d/girl/scene.gltf",n=(0,j.U2)(u.E,t),i=(0,g.L)(t).animations,a=(0,m.v)(i),s=a.ref,l=a.actions,c=Object.keys(l),h=(0,o.useState)(12),d=h[0],x=h[1],y=(0,o.useState)(0),v=y[0],w=y[1],b={fontSize:2.5,letterSpacing:-.05,lineHeight:1,"material-toneMapped":!1};return(0,o.useEffect)((function(){var e;return null===(e=l[c[d]])||void 0===e||e.reset().fadeIn(2).play(),function(){var e;null===(e=l[c[d]])||void 0===e||e.fadeOut(2)}}),[l,d,2]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("directionalLight",{position:[2.5,8,5],intensity:1.5}),(0,r.jsx)(T,{boxTexture:"/images/tokyo.jpg",position:[.5,2,1.5],setAction:x,setElapsed:w,totalActions:c.length}),(0,r.jsx)("primitive",S({},e,{receiveShadow:!0,ref:s,scale:1,rotation:[0,0,0],object:n.scene})),(0,r.jsx)(O,{position:[0,-2.5,-22],"rotation-x":-Math.PI/2}),(0,r.jsx)(p.i,{yawFrequency:.1,pitchFrequency:.1,rollFrequency:.1}),(0,r.jsx)(f.x,S({position:[0,5,-7]},b,{color:"#B80B4D",children:" Tokyo "}),"word-1"),(0,r.jsx)(f.x,S({position:[-1,3,-7]},b,{color:"#A11A56",children:" Cards "}),"word-2"),(0,r.jsxs)(f.x,S({position:[-1,1,-7]},b,{fontSize:1.2,color:"#0E93AD",children:[" ","".concat(v)," "]}),"word-3"),(0,r.jsx)(f.x,{position:[0,-.5,-7],color:"orange",fontSize:1,children:" NFT Sale Coming"},"word-4")]})}function _(){return(0,r.jsx)(j.Xz,{children:(0,r.jsxs)(o.Suspense,{fallback:(0,r.jsx)(v.aN,{}),children:[(0,r.jsx)("pointLight",{position:[10,50,50],color:"gold"}),(0,r.jsx)("pointLight",{position:[0,-10,0],color:"aqua"}),(0,r.jsx)(h.wI,{children:(0,r.jsx)(M,{position:[0,-2.5,0]})}),(0,r.jsx)(y.xC,{multisampling:8,children:(0,r.jsx)(y.dp,{kernelSize:1,luminanceThreshold:0,luminanceSmoothing:.4,intensity:.2})})]})})}function E(){return(0,r.jsx)(c,{pageTitle:"DEMO",children:(0,r.jsx)(_,{})})}},6601:function(){}},function(e){e.O(0,[737,623,444,493,598,774,888,179],(function(){return t=5872,e(e.s=t);var t}));var t=e.O();_N_E=t}]);