(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96],{4460:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wiki",function(){return t(1918)}])},1918:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return N}});var n=t(5893),a=t(7294),c=t(4032),i=t(8500),o=t(5675),s=t(7039);function l(e){switch(e.rarity){case 0:return"text-rarity-common";case 1:return"text-rarity-uncommon";case 2:return"text-rarity-rare";case 3:return"text-rarity-epic";case 4:return"text-rarity-legendary";case 5:return"text-rarity-artifact";default:return"text-rarity-common"}}function u(e){switch(e.rarity){case 0:return"bg-rarity-common";case 1:return"bg-rarity-uncommon";case 2:return"bg-rarity-rare";case 3:return"bg-rarity-epic";case 4:return"bg-rarity-legendary";case 5:return"bg-rarity-artifact";default:return"bg-rarity-common"}}function d(e){switch(e.rarity){case 0:return"border-rarity-common";case 1:return"border-rarity-uncommon";case 2:return"border-rarity-rare";case 3:return"border-rarity-epic";case 4:return"border-rarity-legendary";case 5:return"border-rarity-artifact";default:return"border-rarity-common"}}function m(e){switch(e.rarity){case 0:return"common";case 1:return"uncommon";case 2:return"rare";case 3:return"epic";case 4:return"legendary";case 5:return"artifact";default:return"common"}}var f=function(e){var r=e.title,t=e.cards,a=void 0===t?[]:t,c=e.deck;e.useFilter;if(e.reversed&&a.reverse(),0==a.length)return null;var i=(0,s.$G)().t,f=c.categoryDetail;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("section",{className:"deck-section py-5 h-20",children:[(0,n.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,n.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})}),(0,n.jsx)("span",{className:"w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center",children:r}),(0,n.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,n.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})})]}),(0,n.jsx)("section",{className:"deck-section my-5 md:space-x-10 justify-between lg:items-center font-cursive",children:(0,n.jsx)("div",{className:"grid nn:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-left gap-3 mx-auto relative w-full",children:a.map((function(e){var r=i("elements.".concat(e.size)),t="100%",a=function(e,r,t){return"/images/wiki/".concat(r.name.toLowerCase(),"/").concat(t.color.toLowerCase(),"_").concat(t.size.toLowerCase(),".svg")}(0,c,e);return(0,n.jsxs)("div",{className:"flex flex-col border-2 rounded-lg gap-2 bg-cod-gray justify-between ".concat(d(e)),children:[(0,n.jsx)("div",{className:"".concat(u),children:" "}),(0,n.jsx)("div",{className:"align-middle nn:h-48 sm:h-52 lg:h-52 2xl:h-80 flex m-auto",children:(0,n.jsx)(o.default,{layout:"intrinsic",width:t,height:t,src:a,unoptimized:!0,loader:function(e){return e.src}})}),(0,n.jsx)("div",{className:"font-sans text-center ".concat(l(e)," "),children:i("elements.".concat(c.name))+" "+i("elements.".concat(e.size))}),(0,n.jsxs)("div",{children:[" ",(0,n.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})," "]}),(0,n.jsxs)("div",{className:"m-5 text-diablo-dark-gold",children:[(0,n.jsxs)("span",{className:"block ".concat(l(e)),children:[" ",i("rarity.".concat(m(e)))," "]}),(0,n.jsx)("span",{className:"block",children:i("elements.".concat(e.color))}),(0,n.jsx)("span",{className:"block text-rarity-uncommon text-xs font-sans mt-2",children:e.usage?i("elements.usage.".concat(e.usage),{card_size:r}):""}),(0,n.jsxs)("span",{className:"block text-rarity-artifact text-xs font-sans mt-2",children:['"',e.obtain?i("elements.obtain.".concat(e.obtain)):"",'"']})]})]},"".concat(f.name,"-").concat(c.name,"-").concat(e.id))}))})})]})},x=t(8822),g=JSON.parse('{"a":[{"id":0,"name":"Primal","img":"Put in Image","sets":[]}]}'),y=t(5278);function b(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function h(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p=(0,y.aA)(),j=function(e){return(0,n.jsxs)("section",{className:"container card-filter-region mx-auto w-full ",children:[(0,n.jsx)("div",{className:"flex flex-row gap-1",children:(0,n.jsx)(x.Bi,{opts:e.qualityOpts,state:e.suite,onChange:e.onSuiteSelect})}),(0,n.jsx)(x.Po,{state:e.order,onChange:e.onOrderSelect})]})},v=function(e){var r=(0,s.$G)().t;return(0,n.jsx)("section",{className:"container flex flex-col md:flex-row justify-between mx-auto w-full lg:gap-4 lg:justify-start lg-section gap-2 ",children:(0,n.jsx)(i.A,{id:"deck-select",instanceId:"deck-select",placeholder:r("select.category"),options:e.categoryOpts,onChange:e.onCategorySelect,isClearable:!0})})},w=function(e){var r=e.className,t=e.decks,a=e.order;return(0,n.jsx)("section",{className:r,children:t.map((function(e,r){return(0,n.jsx)(f,{deck:e,title:e.title,cards:e.cards,reversed:1==a},"".concat(e.categoryDetail.name,"-").concat(e.id))}))})};function N(){var e,r=g.a.map((function(e){return{value:e.id,label:e.name}})),t=(0,a.useReducer)(y.I6,{category:null,artist:[],suite:[],order:0}),i=t[0],o=t[1],l=i.suite,u=i.deck,d=i.artist,m=i.order,f=(e=[function(e){return 0==l.length||l.includes(e.poker_suite)},function(e){return null==u||u==e.deck}],function(r){return[r].concat(h(e)).reduce((function(e,r){return e.filter(r)}))}),x=0,N=p.filter((function(e){return 0==d.length||d.map((function(e){return e.value})).includes(e.id)})).map((function(e,r){var t=f(e.items);return x+=t.length,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){b(e,r,t[r])}))}return e}({},e,{cards:t})})),k=(0,(0,s.$G)().t)("items-found",{count:x});return(0,n.jsxs)(c.Z,{pageTitle:"WIKI",children:[(0,n.jsxs)("section",{className:"collection-section flex flex-col lg:flex-row gap-2 justify-between lg:items-center",children:[(0,n.jsx)(v,{categoryOpts:r,onCategorySelect:function(e){return o({type:"change:category",data:e})}}),(0,n.jsx)(j,{suite:l,order:m,qualityOpts:[{value:"common",label:"Common"},{value:"uncommon",label:"Uncommon"},{value:"rare",label:"Rare"},{value:"epic",label:"Epic"},{value:"legendary",label:"Legendary"},{value:"artifact",label:"Artifact"}],onSuiteSelect:function(e){return o({type:"change:suite",data:e})},onOrderSelect:function(e){return o({type:"change:order",data:e})}})]}),(0,n.jsx)("span",{className:"collection-section flex flex-row justify-between font-cursive text-diablo-dark-gold",children:k}),(0,n.jsx)(w,{className:"collection-section",decks:N,order:m})]})}}},function(e){e.O(0,[774,523,112,493,403,343,386,888,179],(function(){return r=4460,e(e.s=r);var r}));var r=e.O();_N_E=r}]);