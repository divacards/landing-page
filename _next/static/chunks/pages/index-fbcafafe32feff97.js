(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5647)}])},5522:function(e,s,a){"use strict";a.d(s,{aN:function(){return w},CZ:function(){return S}});var t=a(5893),i=a(1217),r=a(5769),n=a(1133),l=a(254),o=a(3328),c=a(8626),d=a(3857),x=a(4232),m=a(7294),u=a(9521),j=a(2849),h=a(5960);function v(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function N(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(s){v(e,s,a[s])}))}return e}function g(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var a=[],t=!0,i=!1,r=void 0;try{for(var n,l=e[Symbol.iterator]();!(t=(n=l.next()).done)&&(a.push(n.value),!s||a.length!==s);t=!0);}catch(o){i=!0,r=o}finally{try{t||null==l.return||l.return()}finally{if(i)throw r}}return a}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(){var e=(0,u.S)().progress;return(0,t.jsxs)(j.x,N({position:[0,0,0]},{font:"/fonts/DotGothic16-Regular.ttf",fontSize:3,letterSpacing:.2,lineHeight:1,"material-toneMapped":!1},{color:"#F8165D",scale:.3,children:[e.toFixed()," % "]}))}function p(e){var s=g((0,r.m)(["/three_d/girl/textures/floor/Marble006_1K_Roughness.jpg","/images/logo.png"]),2),a=s[0],i=s[1];return(0,t.jsxs)("mesh",N({rotation:[-Math.PI/2,0,1.5*Math.PI]},e,{children:[(0,t.jsx)("planeGeometry",{args:[20,5]}),(0,t.jsx)(l.Q,{resolution:1024,mirror:.75,mixBlur:10,mixStrength:2,minDepthThreshold:.8,maxDepthThreshold:1.2,depthToBlurRatioBias:.2,color:"gold",metalness:.5,roughnessMap:a,roughness:1,normalMap:i,normalScale:[4,4]})]}))}function f(e){var s=function(){var s=Math.floor(Math.random()*w.length);e.setAction(w[s]),g(!0)},a=function(){e.setAction(18),g(!1)},i=(0,r.m)(e.textures),n=(0,m.useRef)(),l=(0,m.useState)(!1),o=l[0],c=l[1],d=(0,m.useState)(!1),u=d[0],j=d[1],h=(0,m.useState)(!1),v=h[0],g=h[1],w=[3,6,9,10,18,22,23],p=(0,m.useState)(0),f=p[0],b=p[1];return(0,x.xQ)((function(t,i){var r=t.clock.getElapsedTime();r.toFixed()%60>=0&&r.toFixed()%60<10&&!v&&s(),r.toFixed()%60>=10&&r.toFixed()%60<20&&v&&a(),r.toFixed()%60>=20&&r.toFixed()%60<30&&!v&&s(),r.toFixed()%60>=30&&r.toFixed()%60<40&&v&&a(),r.toFixed()%60>=40&&r.toFixed()%60<50&&!v&&s(),r.toFixed()%60>=50&&r.toFixed()%60<60&&v&&a(),e.setElapsed(r.toFixed()),n.current.rotation.x=n.current.rotation.y+=.5*i,r-f>=.1&&b(r)})),(0,t.jsxs)("mesh",N({},e,{ref:n,scale:u?.2:.25,onClick:function(s){var a;u||(j(!0),e.setAction(20),(a=3e3,new Promise((function(e){return setTimeout(e,a)}))).then((function(){e.setAction(18),j(!1)})))},onPointerOver:function(e){return c(!0)},onPointerOut:function(e){return c(!1)},children:[(0,t.jsx)("boxGeometry",{args:[1,1,1]}),(0,t.jsx)("meshStandardMaterial",{map:i[parseInt(f.toFixed())%6],color:o?"black":"white"})]}))}var b=[{up:"\u6771\u4eac",down:function(){return"\u30ab\u30fc\u30ba"}},{up:"NFT",down:function(){return"\u767a\u58f2\u4e2d"}},{up:"TOKYO",down:function(){return"CARDS"}},{up:"NFT",down:function(){return"ON SALE"}},{up:"\u73fe\u5728\u6642\u523b",down:function(){return(new Date).toLocaleTimeString("it-IT")}},{up:"NOW",down:function(){return(new Date).toLocaleTimeString("it-IT")}}];function y(e){var s=e%60;return s>=0&&s<10?b[0]:s>=10&&s<20?b[1]:s>=20&&s<30?b[2]:s>=30&&s<40?b[3]:s>=40&&s<50?b[4]:s>=50&&s<60?b[5]:void 0}function k(e){var s="/three_d/asian_girl/scene.gltf",a=(0,x.U2)(i.E,s),r=(0,c.L)(s).animations,n=(0,d.v)(r),l=n.ref,u=n.actions,h=Object.keys(u),v=(0,m.useState)(18),g=v[0],w=v[1],b=(0,m.useState)(0),k=b[0],S=b[1],P={font:"/fonts/DotGothic16-Regular.ttf",fontSize:3,letterSpacing:.2,lineHeight:1,"material-toneMapped":!1};return(0,m.useEffect)((function(){var e=u[h[g]];return e.reset().fadeIn(2).play(),function(){e.fadeOut(2)}}),[u,g,2]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("directionalLight",{position:[2.5,8,5],intensity:1.5}),(0,t.jsx)(f,{textures:["/images/logo_extra/10.png","/images/logo_extra/11.png","/images/logo_extra/12.png","/images/logo_extra/13.png","/images/logo_extra/14.png","/images/logo_extra/15.png"],position:[.7,-.3,4],setAction:w,setElapsed:S,totalActions:h.length}),(0,t.jsx)("primitive",N({},e,{receiveShadow:!0,ref:l,scale:1,rotation:[0,0,0],object:a.scene})),(0,t.jsx)(p,{position:[0,-2.5,-1],"rotation-x":-Math.PI/2}),(0,t.jsx)(o.i,{yawFrequency:.1,pitchFrequency:.1,rollFrequency:.1}),(0,t.jsxs)(j.x,N({position:[-2,5,-7]},P,{color:"#F8165D",children:[" ",y(k).up," "]}),"word-2"),(0,t.jsxs)(j.x,N({position:[-2,2,-7]},P,{color:"#3E81F5",children:[" ",y(k).down()," "]}),"word-3")]})}function S(){return(0,t.jsx)(x.Xz,{className:"canvas",children:(0,t.jsxs)(n.wI,{children:[(0,t.jsx)("pointLight",{position:[10,50,50],color:"#F9125B"}),(0,t.jsx)("pointLight",{position:[0,-10,0],color:"gold"}),(0,t.jsx)(m.Suspense,{fallback:(0,t.jsx)(w,{}),children:(0,t.jsx)(k,{position:[0,-2.5,2]})}),(0,t.jsx)(h.xC,{multisampling:8,children:(0,t.jsx)(h.dp,{kernelSize:1,luminanceThreshold:0,luminanceSmoothing:.4,intensity:.2})})]})})}},5647:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return O}});var t=a(5893),i=a(4032),r=a(7294),n=a(1163),l=a(5522),o=function(){return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"w-0%"}),(0,t.jsx)("div",{className:"w-1%"}),(0,t.jsx)("div",{className:"w-2%"}),(0,t.jsx)("div",{className:"w-3%"}),(0,t.jsx)("div",{className:"w-4%"}),(0,t.jsx)("div",{className:"w-5%"}),(0,t.jsx)("div",{className:"w-6%"}),(0,t.jsx)("div",{className:"w-7%"}),(0,t.jsx)("div",{className:"w-8%"}),(0,t.jsx)("div",{className:"w-9%"}),(0,t.jsx)("div",{className:"w-10%"}),(0,t.jsx)("div",{className:"w-11%"}),(0,t.jsx)("div",{className:"w-12%"}),(0,t.jsx)("div",{className:"w-13%"}),(0,t.jsx)("div",{className:"w-14%"}),(0,t.jsx)("div",{className:"w-15%"}),(0,t.jsx)("div",{className:"w-16%"}),(0,t.jsx)("div",{className:"w-17%"}),(0,t.jsx)("div",{className:"w-18%"}),(0,t.jsx)("div",{className:"w-19%"}),(0,t.jsx)("div",{className:"w-20%"}),(0,t.jsx)("div",{className:"w-21%"}),(0,t.jsx)("div",{className:"w-22%"}),(0,t.jsx)("div",{className:"w-23%"}),(0,t.jsx)("div",{className:"w-24%"}),(0,t.jsx)("div",{className:"w-25%"}),(0,t.jsx)("div",{className:"w-26%"}),(0,t.jsx)("div",{className:"w-27%"}),(0,t.jsx)("div",{className:"w-28%"}),(0,t.jsx)("div",{className:"w-29%"}),(0,t.jsx)("div",{className:"w-30%"}),(0,t.jsx)("div",{className:"w-31%"}),(0,t.jsx)("div",{className:"w-32%"}),(0,t.jsx)("div",{className:"w-33%"}),(0,t.jsx)("div",{className:"w-34%"}),(0,t.jsx)("div",{className:"w-35%"}),(0,t.jsx)("div",{className:"w-36%"}),(0,t.jsx)("div",{className:"w-37%"}),(0,t.jsx)("div",{className:"w-38%"}),(0,t.jsx)("div",{className:"w-39%"}),(0,t.jsx)("div",{className:"w-40%"}),(0,t.jsx)("div",{className:"w-41%"}),(0,t.jsx)("div",{className:"w-42%"}),(0,t.jsx)("div",{className:"w-43%"}),(0,t.jsx)("div",{className:"w-44%"}),(0,t.jsx)("div",{className:"w-45%"}),(0,t.jsx)("div",{className:"w-46%"}),(0,t.jsx)("div",{className:"w-47%"}),(0,t.jsx)("div",{className:"w-48%"}),(0,t.jsx)("div",{className:"w-49%"}),(0,t.jsx)("div",{className:"w-50%"}),(0,t.jsx)("div",{className:"w-51%"}),(0,t.jsx)("div",{className:"w-52%"}),(0,t.jsx)("div",{className:"w-53%"}),(0,t.jsx)("div",{className:"w-54%"}),(0,t.jsx)("div",{className:"w-55%"}),(0,t.jsx)("div",{className:"w-56%"}),(0,t.jsx)("div",{className:"w-57%"}),(0,t.jsx)("div",{className:"w-58%"}),(0,t.jsx)("div",{className:"w-59%"}),(0,t.jsx)("div",{className:"w-60%"}),(0,t.jsx)("div",{className:"w-61%"}),(0,t.jsx)("div",{className:"w-62%"}),(0,t.jsx)("div",{className:"w-63%"}),(0,t.jsx)("div",{className:"w-64%"}),(0,t.jsx)("div",{className:"w-65%"}),(0,t.jsx)("div",{className:"w-66%"}),(0,t.jsx)("div",{className:"w-67%"}),(0,t.jsx)("div",{className:"w-68%"}),(0,t.jsx)("div",{className:"w-69%"}),(0,t.jsx)("div",{className:"w-70%"}),(0,t.jsx)("div",{className:"w-71%"}),(0,t.jsx)("div",{className:"w-72%"}),(0,t.jsx)("div",{className:"w-73%"}),(0,t.jsx)("div",{className:"w-74%"}),(0,t.jsx)("div",{className:"w-75%"}),(0,t.jsx)("div",{className:"w-76%"}),(0,t.jsx)("div",{className:"w-77%"}),(0,t.jsx)("div",{className:"w-78%"}),(0,t.jsx)("div",{className:"w-79%"}),(0,t.jsx)("div",{className:"w-80%"}),(0,t.jsx)("div",{className:"w-81%"}),(0,t.jsx)("div",{className:"w-82%"}),(0,t.jsx)("div",{className:"w-83%"}),(0,t.jsx)("div",{className:"w-84%"}),(0,t.jsx)("div",{className:"w-85%"}),(0,t.jsx)("div",{className:"w-86%"}),(0,t.jsx)("div",{className:"w-87%"}),(0,t.jsx)("div",{className:"w-88%"}),(0,t.jsx)("div",{className:"w-89%"}),(0,t.jsx)("div",{className:"w-90%"}),(0,t.jsx)("div",{className:"w-91%"}),(0,t.jsx)("div",{className:"w-92%"}),(0,t.jsx)("div",{className:"w-93%"}),(0,t.jsx)("div",{className:"w-94%"}),(0,t.jsx)("div",{className:"w-95%"}),(0,t.jsx)("div",{className:"w-96%"}),(0,t.jsx)("div",{className:"w-97%"}),(0,t.jsx)("div",{className:"w-98%"}),(0,t.jsx)("div",{className:"w-99%"}),(0,t.jsx)("div",{className:"w-100%"})]})},c=a(7039),d=a(1436),x=a(2814),m=a(6413),u=function(){var e=(0,c.$G)("home").t,s=(0,n.useRouter)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("section",{className:"flex flex-col lg:flex-row items-center lg:justify-around home-section",children:[(0,t.jsx)("div",{className:"mx-auto w-full lg:w-1/2 h-72 text-center py-2 px-8 lg:h-96",children:(0,t.jsx)("div",{className:"p-1 h-full rounded-xl bg-gradient-to-r from-razzmatazz to-blue-500 shadow-md shadow-blue-500",children:(0,t.jsxs)("div",{className:"h-full rounded-xl bg-cod-gray relative",children:[(0,t.jsx)(l.CZ,{}),(0,t.jsx)("div",{className:"absolute py-1 px-4 text-white bottom-0 right-0 text-sm",children:"\xa9\ufe0f tokyo.cards"})]})})}),(0,t.jsxs)("div",{className:"text-left w-10/12 lg:w-1/2 mx-auto lg:h-96 flex flex-wrap content-between",children:[(0,t.jsxs)("h2",{className:"leading-tight font-extrabold text-themecolor-bright text-6xl md:text-7xl xl:text-8xl",children:[(0,t.jsx)("span",{className:"break-words block my-3",children:e("hero.header-simple")}),(0,t.jsx)("span",{className:"text-themecolor break-words block text-5xl md:text-7xl xl:text-8xl",children:e("hero.header-collectables")})]}),(0,t.jsx)("p",{className:"mt-5 font-body text-description text-base sm:text-lg md:text-2xl w-full",children:e("hero.catch-phrase")}),(0,t.jsxs)("div",{className:"mt-5 flex flex-row justify-start flex-wrap gap-3",children:[(0,t.jsxs)("button",{className:"my-2 border-2 border-cinnabar text-diablo-dark-gold py-4 px-8 rounded-lg text-xl hover:border-obsidian-gold h-18",onClick:function(){var e=(0,m.B6)("lang")?(0,m.B6)("lang"):"en";s.push("/temple?lang=".concat(e,"&tab=1"))},children:[(0,t.jsx)(x.G,{icon:d.X5K,className:"mr-3"}),e("button-buy-cards")]}),(0,t.jsxs)("button",{className:"my-2 border-2 border-diablo-dark-gold text-diablo-dark-gold py-4 px-8 text-xl rounded-lg hover:border-obsidian-gold h-18",onClick:function(){var e=(0,m.B6)("lang")?(0,m.B6)("lang"):"en";s.push("/temple?lang=".concat(e,"&tab=0"))},children:[(0,t.jsx)(x.G,{icon:d.Cly,className:"mr-3"}),e("button-ny-sales")]})]}),(0,t.jsx)("div",{className:"text-diablo-dark-gold mt-2",children:" "})]}),(0,t.jsxs)("div",{className:"hidden",children:[" ",(0,t.jsx)(o,{})," "]})]}),(0,t.jsxs)("section",{className:"deck-section py-5 h-20",children:[(0,t.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,t.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})}),(0,t.jsx)("span",{className:"w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center",children:(0,t.jsx)("div",{className:"text-2xl h-20 w-20 inline p-5",children:(0,t.jsx)(x.G,{icon:d.eW2})})}),(0,t.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,t.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})})]})]})},j=a(3153),h=function(e){var s=e.icon,a=e.title,i=e.description;return(0,t.jsxs)("div",{className:"flex space-x-4 auto-padding",children:[(0,t.jsx)("div",{children:s}),(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)("h3",{className:"mb-2 font-semibold text-description text-2xl lg:text-3xl",children:a}),(0,t.jsx)("p",{className:"leading-normal text-themecolor-bright text-lg",children:i})]})]})},v=function(){var e=(0,c.$G)().t,s=[{Icon:j.Q73,title:e("service.trading-title"),description:e("service.trading-description")},{Icon:j.uOV,title:e("service.crafting-title"),description:e("service.crafting-description")},{Icon:j.YGl,title:e("service.enchanting-title"),description:e("service.enchanting-description")},{Icon:j.DuK,title:e("service.recycling-title"),description:e("service.recycling-description")}];return(0,t.jsx)("section",{id:"service",className:"home-section",children:(0,t.jsx)("div",{className:"service-grid-top relative mx-auto service-grid",children:s.map((function(e,s){var a=e.Icon,i=e.title,r=e.description,n=(0,t.jsx)(a,{height:50,width:50,className:"text-diablo-dark-gold border-2 p-2 border-obsidian-gold rounded-full"});return(0,t.jsx)(h,{icon:n,title:i,description:r},"service-".concat(s))}))})})},N=(a(5675),a(5769)),g=a(254),w=a(4232);function p(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}var f=[{setName:"akki",id:1,isPrimal:!1},{setName:"akki",id:2e3,isPrimal:!1},{setName:"akki",id:2899,isPrimal:!1},{setName:"akki",id:1e3,isPrimal:!1},{setName:"akki",id:232,isPrimal:!1},{setName:"akki",id:1232,isPrimal:!1},{setName:"akki",id:2322,isPrimal:!1},{setName:"akki",id:1802,isPrimal:!1},{setName:"primal",id:2916,isPrimal:!0},{setName:"primal",id:2918,isPrimal:!0},{setName:"primal",id:2920,isPrimal:!0},{setName:"primal",id:2922,isPrimal:!0}],b=5.5;function y(e){var s=(0,N.m)(e.boxTexture),a=(0,N.m)("/images/collections/acky/sample.png"),i=(0,N.m)("/images/logo.png"),n=(0,r.useRef)(null);(0,w.xQ)((function(s,a){var t=e.listIndex+.2*s.clock.getElapsedTime();n.current.position.x=Math.sin(2*Math.PI/(f.length+0)*t)*b,n.current.position.z=6.5+Math.cos(2*Math.PI/(f.length+0)*t)*b,n.current.rotation.y=2*Math.sin(2*Math.PI/(f.length+0)*t)}));var l,o=[2,2,2];return e.isSquareCard?(l=i,o=[2.5,2.5,.05]):(l=a,o=[1.6,3.2,.05]),(0,t.jsxs)("mesh",function(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(s){p(e,s,a[s])}))}return e}({},e,{ref:n,toneMapped:!1,fog:!1,rotation:[Math.PI/-16,0,0],scale:e.scale,children:[(0,t.jsx)("boxGeometry",{args:o}),(0,t.jsx)("meshStandardMaterial",{attachArray:"material",color:13934148}),(0,t.jsx)("meshStandardMaterial",{attachArray:"material",color:13934148}),(0,t.jsx)("meshStandardMaterial",{attachArray:"material",color:13934148}),(0,t.jsx)("meshStandardMaterial",{attachArray:"material",color:13934148}),(0,t.jsx)("meshStandardMaterial",{attachArray:"material",map:s}),(0,t.jsx)("meshStandardMaterial",{attachArray:"material",map:l})]}))}function k(){return(0,t.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.5,0],children:[(0,t.jsx)("planeGeometry",{args:[50,50]}),(0,t.jsx)(g.Q,{blur:[300,100],resolution:2048,mixBlur:.8,mixStrength:60,roughness:1,depthScale:1.2,minDepthThreshold:.4,maxDepthThreshold:1.4,color:"#151515",metalness:.1})]})}function S(){return(0,t.jsxs)(w.Xz,{dpr:[1,1.5],camera:{fov:70,position:[0,2,15]},children:[(0,t.jsx)("color",{attach:"background",args:["#141010"]}),(0,t.jsx)("fog",{attach:"fog",args:["#141010",0,15]}),(0,t.jsx)("ambientLight",{intensity:.8,color:"white"}),(0,t.jsx)("pointLight",{position:[0,50,10],color:"pink"}),(0,t.jsx)(r.Suspense,{fallback:(0,t.jsx)(l.aN,{}),children:(0,t.jsxs)("group",{position:[0,.5,0],children:[f.map((function(e,s){return(0,t.jsx)(y,{position:[Math.sin(2*Math.PI/(f.length+0)*s)*b,1.2,8+Math.cos(2*Math.PI/(f.length+0)*s)*b],fastSpin:!1,listIndex:s,isSquareCard:e.isPrimal,boxTexture:"".concat("/images/card_set","/").concat(e.setName,"/").concat(e.id).concat(".jpg"),scale:1},"box-".concat(s))})),(0,t.jsx)(k,{})]})})]})}var P=function(){(0,c.$G)().t;return(0,t.jsxs)("section",{className:"md:mx-16 lg:mx-2",id:"feature",children:[(0,t.jsx)("h3",{className:"text-3xl mb-2 leading-8 font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl sm:leading-10",children:(0,t.jsxs)("span",{className:"text-themecolor text-4xl",children:["[",(0,t.jsx)(x.G,{icon:d.Mdf,className:"px-2 text-diablo-dark-gold"}),"] The Cards"]})}),(0,t.jsx)("div",{className:"flex flex-wrap",children:(0,t.jsx)("div",{className:"mx-auto w-full h-72 text-center py-2 px-8 lg:h-96 sm:px-12",children:(0,t.jsx)("div",{className:"p-1 h-full bg-gradient-to-r from-razzmatazz to-diablo-dark-gold rounded-t-lg rounded-bl-lg",children:(0,t.jsxs)("div",{className:"h-full bg-cod-gray relative",children:[(0,t.jsx)("div",{className:"absolute rounded-b-lg py-1 px-4 bg-diablo-dark-gold text-cod-gray -bottom-7 -right-1 text-sm",children:"\xa9\ufe0f tokyo.cards"}),(0,t.jsx)(S,{})]})})})})]})},M=function(){return(0,t.jsx)(P,{})};function O(){return(0,t.jsxs)(i.Z,{pageTitle:"HOME",children:[(0,t.jsx)(u,{}),(0,t.jsx)(M,{}),(0,t.jsx)(v,{})]})}}},function(e){e.O(0,[774,523,112,737,623,444,493,927,598,343,386,888,179],(function(){return s=5301,e(e.s=s);var s}));var s=e.O();_N_E=s}]);