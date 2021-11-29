(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{1867:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collections",function(){return n(8119)}])},8119:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(5893),c=n(7294),a=n(3331),s=n(8500),i=n(3153),l=n(5675);var o=function(e){var t=e.title,n=e.cards,c=void 0===n?[]:n,a=e.deck;e.useFilter;if(e.reversed&&c.reverse(),0==c.length)return null;var s=a.artistsDetail;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("section",{className:"deck-section py-5 h-20",children:[(0,r.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,r.jsx)(i.YqE,{className:"w-full"})}),(0,r.jsx)("span",{className:"w-1/3 mx-auto font-cursive text-center lg:text-2xl text-cinnabar place-self-center",children:t}),(0,r.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,r.jsx)(i.YqE,{className:"w-full"})})]}),(0,r.jsx)("section",{className:"deck-section my-5 md:space-x-10 justify-between lg:items-center font-cursive",children:(0,r.jsx)("div",{className:"grid nn:grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-3 mx-auto relative",children:c.map((function(e){var t=function(e,t,n){return"/images/card_set/".concat(e.name.toLowerCase(),"/").concat(t.id,"/").concat(n.poker_suite+n.poker_sign.toLowerCase(),".png")}(s,a,e);return(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)(l.default,{width:800,height:800,className:"mx-auto w-1/2 lg:w-10/12 rounded",src:t,unoptimized:!0,loader:function(e){return e.src}}),(0,r.jsx)("span",{className:"mx-auto font-cursive",children:e.name})]},"".concat(s.name,"-").concat(a.name,"-").concat(e.id))}))})})]})},u=n(8822),d=n(7039),f=n(3551),x=n(8803),m=n(6068);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=(0,m.EH)(),j=function(e){return(0,r.jsxs)("section",{className:"container card-filter-region mx-auto w-full ",children:[(0,r.jsx)("div",{className:"flex flex-row gap-1",children:(0,r.jsx)(u.Bi,{opts:e.suiteOpts,state:e.suite,onChange:e.onSuiteSelect})}),(0,r.jsx)(u.Po,{state:e.order,onChange:e.onOrderSelect})]})},v=function(e){var t=(0,d.$G)().t;return(0,r.jsxs)("section",{className:"container flex flex-col md:flex-row justify-between mx-auto w-full lg:gap-4 lg:justify-start lg-section gap-2 ",children:[(0,r.jsx)(s.A,{id:"deck-select",instanceId:"deck-select",placeholder:t("select.deck"),options:e.deckOpts,onChange:e.onDeckSelect,isClearable:!0}),(0,r.jsx)(s.A,{id:"artist-select",instanceId:"artist-select",isMulti:!0,isClearable:!0,placeholder:t("select.artist"),options:e.artistOpts,onChange:e.onArtistSelect})]})},b=function(e){var t=e.className,n=e.decks,c=e.order;return(0,r.jsx)("section",{className:t,children:n.map((function(e,t){return(0,r.jsx)(o,{deck:e,title:e.title,cards:e.cards,reversed:1==c},"".concat(e.artistsDetail.name,"-").concat(e.id))}))})};function w(){var e,t=x.a.map((function(e){var t=e.id;e.name;return{value:t,label:e.title}})),n=f.a.map((function(e){return{value:e.id,label:e.name}})),s=(0,c.useReducer)(m.I6,{deck:null,artist:[],suite:[],order:0}),i=s[0],l=s[1],o=i.suite,u=i.deck,w=i.artist,k=i.order,y=(e=[function(e){return 0==o.length||o.includes(e.poker_suite)},function(e){return null==u||u==e.deck}],function(t){return[t].concat(g(e)).reduce((function(e,t){return e.filter(t)}))}),N=0,O=h.filter((function(e){return 0==w.length||w.map((function(e){return e.value})).includes(e.id)})).map((function(e,t){var n=y(e.cards);return N+=n.length,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}({},e,{cards:n})})),_=(0,(0,d.$G)().t)("cards-found",{count:N});return(0,r.jsxs)(a.Z,{pageTitle:"tokyo.cards",children:[(0,r.jsxs)("section",{className:"collection-section flex flex-col lg:flex-row gap-2 justify-between lg:items-center",children:[(0,r.jsx)(v,{deckOpts:t,onDeckSelect:function(e){return l({type:"change:deck",data:e})},artistOpts:n,onArtistSelect:function(e){return l({type:"change:artist",data:e})}}),(0,r.jsx)(j,{suite:o,order:k,suiteOpts:[{value:"s",label:"Spades"},{value:"h",label:"Hearts"},{value:"c",label:"Clubs"},{value:"d",label:"Diamonds"},{value:"j",label:"Jokers"}],onSuiteSelect:function(e){return l({type:"change:suite",data:e})},onOrderSelect:function(e){return l({type:"change:order",data:e})}})]}),(0,r.jsx)("span",{className:"collection-section flex flex-row justify-between font-cursive text-diablo-dark-gold",children:_}),(0,r.jsx)(b,{className:"collection-section",decks:O,order:k})]})}}},function(e){e.O(0,[27,308,774,888,179],(function(){return t=1867,e(e.s=t);var t}));var t=e.O();_N_E=t}]);