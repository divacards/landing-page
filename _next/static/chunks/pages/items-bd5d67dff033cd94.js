(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{83:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/items",function(){return a(7321)}])},7321:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var r=a(5893),n=a(7294),i=a(7039),s=a(4335),l=(a(9795),a(3153)),c=a(1163),o=a(6447),d=a(5769);function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function x(e){var t=(0,d.m)(e.boxTexture),a=(0,n.useRef)();return(0,o.xQ)((function(e,t){return a.current.rotation.y+=.005})),e.boxTexture?(0,r.jsxs)("mesh",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){u(e,t,a[t])}))}return e}({},e,{ref:a,rotation:e.isBox?[Math.PI/-8,0,0]:[0,0,0],scale:1,children:[(0,r.jsx)("boxGeometry",{args:e.isBox?[2,2,2]:[1.6,3.2,.01]}),(0,r.jsx)("meshStandardMaterial",{map:t})]})):(0,r.jsx)("div",{children:"Loading"},"canvas_loading")}function f(e){return new URLSearchParams(window.location.search).get(e)}function b(e){return["uncommon","rare","epic","legendary"].indexOf(e.toString().toLowerCase())>-1?"rarity-".concat(e.toLowerCase()):"diablo-dark-gold"}function m(e,t){return t.find((function(t){return t.trait_type==e}))}function h(){var e=(0,i.$G)().t,t=(0,n.useState)([]),a=t[0],d=t[1],u=(0,n.useState)(!1),h=u[0],v=u[1],g=(0,n.useState)(void 0),j=g[0],p=g[1],w=(0,n.useState)(!1),N=w[0],y=w[1],k=(0,c.useRouter)();return(0,n.useEffect)((function(){var e=f("id"),t="box"==f("asset_type")?"box":"items";"box"==t&&y(!0);var a=1!=window.history.length;fetch("https://diva.cards/api/".concat(t,"/").concat(e,"/")).then((function(e){return e.json()})).then((function(e){v(!1),d(e),p(a)}))}),[]),h||!a?(0,r.jsx)("div",{children:" Loading... "}):(0,r.jsxs)(s.Z,{pageTitle:"tokyo.cards",children:[(0,r.jsx)("button",{className:"block h-14 w-14 bg-diablo-dark-gold rounded-full fixed z-40 bottom-5 right-5 drop-shadow-lg text-white",onClick:function(){j?k.back():k.push("/")},children:j?(0,r.jsx)(l.Y4O,{className:"h-8 w-8 m-auto"}):(0,r.jsx)(l.tvw,{className:"h-8 w-8 m-auto"})}),(0,r.jsxs)("section",{className:"deck-section py-5 h-20",children:[(0,r.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,r.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})}),(0,r.jsx)("span",{className:"w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center",children:(0,r.jsxs)("div",{className:"font-cursive text-diablo-dark-gold text-xl",children:[" ",e("items.detail")," "]})}),(0,r.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,r.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})})]}),(0,r.jsxs)("section",{className:"flex flex-wrap gap-5 m-3",children:[(0,r.jsx)("div",{className:"w-full h-96 relative border-diablo-dark-gold rounded-lg text-center lg:w-6/12",children:a.image&&(0,r.jsx)(o.Xz,{children:(0,r.jsxs)(n.Suspense,{fallback:null,children:[(0,r.jsx)("ambientLight",{}),(0,r.jsx)("pointLight",{position:[10,10,10]}),(0,r.jsx)(x,{position:[0,0,2],boxTexture:a.image,isBox:N})]})})}),(0,r.jsxs)("div",{className:"text-cinnabar w-full lg:w-5/12 flex flex-wrap gap-4",children:[(0,r.jsxs)("div",{className:"bg-obsidian-gray w-full p-4 rounded-lg",children:[a.attributes&&N&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"text-2xl font-cursive text-rarity-artifact",children:a&&a.name}),(0,r.jsx)("div",{className:"text-base font-cursive text-diablo-dark-gold",children:"Limited"}),(0,r.jsx)("div",{className:"text-sm font-cursive text-diablo-dark-gold",children:"Box"}),(0,r.jsxs)("div",{className:"text-xs font text-rarity-uncommon",children:[a.attributes[0].value," item inside"]})]}),a.attributes&&!N&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"text-2xl font-cursive text-".concat(b(m("Rarity",a.attributes).value)),children:a&&a.name}),(0,r.jsx)("div",{className:"text-base font-cursive text-".concat(b(m("Rarity",a.attributes).value)),children:m("Rarity",a.attributes).value}),(0,r.jsx)("div",{className:"text-sm font-cursive text-diablo-dark-gold",children:m("Card Type",a.attributes).value})]}),(0,r.jsx)("div",{className:"text-xs text-rarity-artifact",children:a&&a.description})]}),(0,r.jsx)("div",{className:"text-cinnabar p-4 rounded-lg w-full bg-obsidian-gray",children:"Total Supply: 200"})]}),(0,r.jsx)("div",{className:"text-cinnabar flex flex-wrap gap-2 text-center justify-start place-content-center w-full",children:a.attributes&&!N&&a.attributes.map((function(e,t){return"Name"==e.trait_type?null:(0,r.jsxs)("div",{className:"text-sm rounded-lg h-24 w-24 p-2 bg-obsidian-gray relative",children:[(0,r.jsx)("div",{className:"absolute",children:e.trait_type},"title-".concat(t)),(0,r.jsx)("div",{className:"absolute top-10 w-20 text-".concat(b(e.value)),children:e.value},"value-".concat(t))]},"c-".concat(t))}))},"traits")]})]})}}},function(e){e.O(0,[774,523,112,737,943,769,423,888,179],(function(){return t=83,e(e.s=t);var t}));var t=e.O();_N_E=t}]);