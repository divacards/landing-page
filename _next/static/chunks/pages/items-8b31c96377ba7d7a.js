(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{83:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/items",function(){return a(7321)}])},7321:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var r=a(5893),i=a(7294),s=a(5675),n=a(7039),d=a(4335),o=a(3153),l=a(1163);function c(e){return["uncommon","rare","epic","legendary"].indexOf(e.toLowerCase())>-1?"rarity-".concat(e.toLowerCase()):"diablo-dark-gold"}function u(e,t){return t.find((function(t){return t.trait_type==e}))}function x(){var e=(0,n.$G)().t,t=(0,i.useState)([]),a=t[0],x=t[1],b=(0,i.useState)(!1),m=b[0],h=b[1],f=(0,i.useState)(void 0),v=f[0],g=f[1],p=(0,l.useRouter)();return(0,i.useEffect)((function(){var e,t=(e="id",new URLSearchParams(window.location.search).get(e)),a=1!=window.history.length;fetch("https://diva.cards/api/items/".concat(t,"/")).then((function(e){return e.json()})).then((function(e){h(!1),x(e),g(a)}))}),[]),m||!a?(0,r.jsx)("div",{children:" Loading... "}):(0,r.jsxs)(d.Z,{pageTitle:"tokyo.cards",children:[(0,r.jsx)("button",{className:"block h-14 w-14 border-2 border-supernova bg-cinnabar rounded-full fixed z-40 bottom-5 right-5 drop-shadow-lg",onClick:function(){v?p.back():p.push("/")},children:v?(0,r.jsx)(o.Y4O,{className:"h-8 w-8 m-auto text-supernova"}):(0,r.jsx)(o.tvw,{className:"h-8 w-8 m-auto text-supernova"})}),(0,r.jsxs)("section",{className:"deck-section py-5 h-20",children:[(0,r.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,r.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})}),(0,r.jsx)("span",{className:"w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center",children:(0,r.jsxs)("div",{className:"font-cursive text-diablo-dark-gold text-xl",children:[" ",e("items.detail")," "]})}),(0,r.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,r.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})})]}),(0,r.jsxs)("section",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 my-3",children:[(0,r.jsx)("div",{className:"w-full h-96 relative border-diablo-dark-gold rounded-lg text-center",children:a.image&&(0,r.jsx)(s.default,{loader:function(e){return e.src},playceholder:"blur",layout:"fill",objectFit:"contain",unoptimized:!0,src:a.image,alt:a.name,className:"rounded-lg"})}),(0,r.jsxs)("div",{className:"text-cinnabar p-4 border-2 rounded-lg border-diablo-dark-gold",children:[a.attributes&&(0,r.jsx)("div",{className:"text-2xl font-cursive text-".concat(c(u("Rarity",a.attributes).value)),children:a&&a.name}),a.attributes&&(0,r.jsx)("div",{className:"text-base font-cursive text-".concat(c(u("Rarity",a.attributes).value)),children:u("Rarity",a.attributes).value}),a.attributes&&(0,r.jsx)("div",{className:"text-sm font-cursive text-diablo-dark-gold",children:u("Card Type",a.attributes).value}),(0,r.jsx)("div",{className:"text-xs text-rarity-artifact",children:a&&a.description})]}),(0,r.jsx)("div",{className:"text-cinnabar grid grid-cols-2 gap-2 text-center align-middle",children:a.attributes&&a.attributes.map((function(e,t){return(0,r.jsxs)("div",{className:"text-sm border-2 rounded-lg border-diablo-dark-gold",children:[(0,r.jsx)("div",{className:"my-3 font-cursive",children:e.trait_type}),(0,r.jsx)("div",{className:"text-".concat(c(e.value)),children:e.value})]},t)}))}),(0,r.jsx)("div",{className:"text-cinnabar p-4 border-2 rounded-lg border-diablo-dark-gold",children:"Total Supply: 200"})]})]})}}},function(e){e.O(0,[27,423,774,888,179],(function(){return t=83,e(e.s=t);var t}));var t=e.O();_N_E=t}]);