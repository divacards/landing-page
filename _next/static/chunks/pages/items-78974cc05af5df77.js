(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{83:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/items",function(){return t(7321)}])},7321:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return d}});var n=t(5893),r=t(7294),i=t(5675),s=t(3331);function c(e){return["uncommon","rare","epic","legendary"].indexOf(e.toLowerCase())>-1?"rarity-".concat(e.toLowerCase()):"diablo-dark-gold"}function d(){var e=(0,r.useState)([]),a=e[0],t=e[1],d=(0,r.useState)(!1),l=d[0],o=d[1];return(0,r.useEffect)((function(){var e,a=(e="id",new URLSearchParams(window.location.search).get(e));fetch("https://diva.cards/api/items/".concat(a,"/")).then((function(e){return e.json()})).then((function(e){o(!1),t(e)}))}),[]),l||!a?(0,n.jsx)("div",{children:" Loading... "}):(0,n.jsxs)(s.Z,{pageTitle:"tokyo.cards",children:[(0,n.jsxs)("section",{className:"deck-section py-5 h-20",children:[(0,n.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,n.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})}),(0,n.jsx)("span",{className:"w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center",children:(0,n.jsx)("div",{className:"font-cursive text-diablo-dark-gold text-2xl",children:a&&a.name})}),(0,n.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,n.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})})]}),(0,n.jsxs)("section",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 my-3",children:[(0,n.jsx)("div",{className:"w-48 h-96 relative border-diablo-dark-gold rounded-lg text-center",children:a.image&&(0,n.jsx)(i.default,{loader:function(e){return e.src},layout:"fill",objectFit:"contain",unoptimized:!0,src:a.image,alt:a.name,className:"rounded-lg"})}),(0,n.jsx)("div",{className:"text-cinnabar grid grid-cols-2 gap-2 text-center align-middle",children:a.attributes&&a.attributes.map((function(e,a){return(0,n.jsxs)("div",{className:"text-sm border-2 rounded-lg border-".concat(c(e.value)),children:[(0,n.jsx)("div",{className:"my-4 font-cursive",children:e.trait_type}),(0,n.jsx)("div",{className:"text-".concat(c(e.value)),children:e.value})]},a)}))}),(0,n.jsx)("div",{className:"text-cinnabar"}),(0,n.jsx)("div",{className:"text-cinnabar"})]})]})}}},function(e){e.O(0,[27,308,774,888,179],(function(){return a=83,e(e.s=a);var a}));var a=e.O();_N_E=a}]);