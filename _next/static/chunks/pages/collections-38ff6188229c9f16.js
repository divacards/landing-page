(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{1867:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collections",function(){return n(8119)}])},8119:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),l=n(7294),s=n(501),a=n(8642),c=n(8884),i=n(8500),o=n(3153),u=n(5675);var x=function(e){var t=e.title,n=e.cards,l=void 0===n?[]:n,s=e.deck;e.useFilter;if(e.reversed&&l.reverse(),0==l.length)return null;var a=s.artistsDetail;return(0,r.jsxs)("main",{children:[(0,r.jsxs)("section",{className:" h-20 flex flex-row border-b border-t py-5 2xl:max-w-screen-2xl 2xl:mx-auto xl:max-w-screen-xl xl:mx-auto lg:items-center lg:mx-5",children:[(0,r.jsx)("div",{className:"flex flex-row mx-auto",children:(0,r.jsx)(o.YqE,{className:"w-8"})}),(0,r.jsx)("div",{className:"flex flex-row mx-auto font-cursive text-2xl",children:t}),(0,r.jsx)("div",{className:"flex flex-row mx-auto",children:(0,r.jsx)(o.YqE,{className:"w-8"})})]}),(0,r.jsx)("section",{className:"flex flex-row my-5 bg-white md:space-x-10 justify-between 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto lg:items-center font-cursive",children:(0,r.jsx)("div",{className:"grid nn:grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-3 mx-auto relative",children:l.map((function(e){var t=function(e,t,n){return"/images/card_set/".concat(e.name.toLowerCase(),"/").concat(t.id,"/").concat(n.poker_suite+n.poker_sign.toLowerCase(),".png")}(a,s,e);return(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)(u.default,{width:800,height:800,className:"mx-auto w-1/2 lg:w-10/12 rounded",src:t,unoptimized:!0,loader:function(e){return e.src}}),(0,r.jsx)("span",{className:"mx-auto font-cursive",children:e.name})]},"".concat(a.name,"-").concat(s.name,"-").concat(e.id))}))})})]})},d=n(8822),f=n(7039),m=n(3551),p=n(8803),g=n(6068);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var j=(0,g.EH)(),b=function(e){return(0,r.jsxs)("section",{className:"card-filter-region mx-auto w-10/12 lg:pr-0 sm:w-full sm:px-6 nn:w-full nn:px-6 ",children:[(0,r.jsx)("div",{className:"flex flex-row gap-1",children:(0,r.jsx)(d.Bi,{opts:e.suiteOpts,state:e.suite,onChange:e.onSuiteSelect})}),(0,r.jsx)(d.Po,{state:e.order,onChange:e.onOrderSelect})]})},v=function(e){return(0,r.jsxs)("section",{className:"flex flex-row justify-between mx-auto w-10/12 lg:pl-0 nn:mb-2 sm:mb-2 lg:mb-0 sm:w-full sm:px-6 nn:w-full nn:px-6 lg:gap-4 lg:justify-start lg-section gap-1 ",children:[(0,r.jsx)(i.A,{id:"deck-select",instanceId:"deck-select",placeholder:"Select a deck",options:e.deckOpts,onChange:e.onDeckSelect,isClearable:!0}),(0,r.jsx)(i.A,{id:"artist-select",instanceId:"artist-select",isMulti:!0,placeholder:"Select artists",options:e.artistOpts,onChange:e.onArtistSelect})]})};function y(){var e,t=p.a.map((function(e){var t=e.id;e.name;return{value:t,label:e.title}})),n=m.a.map((function(e){return{value:e.id,label:e.name}})),i=(0,l.useReducer)(g.I6,{deck:null,artist:[],suite:[],order:0}),o=i[0],u=i[1],d=o.suite,y=o.deck,k=o.artist,N=o.order,O=(e=[function(e){return 0==d.length||d.includes(e.poker_suite)},function(e){return null==y||y==e.deck}],function(t){return[t].concat(h(e)).reduce((function(e,t){return e.filter(t)}))}),S=0,_=j.filter((function(e){return 0==k.length||k.map((function(e){return e.value})).includes(e.id)})).map((function(e,t){var n=O(e.cards);return S+=n.length,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}({},e,{cards:n})})),C=(0,(0,f.$G)().t)("cards-found",{count:S});return(0,r.jsxs)(s.Z,{pageTitle:"tokyo.cards",children:[(0,r.jsx)(a.Z,{}),(0,r.jsxs)("main",{children:[(0,r.jsxs)("section",{className:"flex flex-col my-4 gap-2 bg-white mx-auto justify-between lg:flex-row 2xl:max-w-screen-2xl 2xl:px-0 xl:max-w-screen-xl xl:px-0 lg:items-center lg:px-5 ",children:[(0,r.jsx)(v,{deckOpts:t,onDeckSelect:function(e){return u({type:"change:deck",data:e})},artistOpts:n,onArtistSelect:function(e){return u({type:"change:artist",data:e})}}),(0,r.jsx)(b,{suite:d,order:N,suiteOpts:[{value:"s",label:"Spades"},{value:"h",label:"Hearts"},{value:"c",label:"Clubs"},{value:"d",label:"Diamonds"},{value:"j",label:"Jokers"}],onSuiteSelect:function(e){return u({type:"change:suite",data:e})},onOrderSelect:function(e){return u({type:"change:order",data:e})}})]}),(0,r.jsx)("div",{className:" flex flex-row my-5 bg-white mx-auto justify-between 2xl:max-w-screen-2xl 2xl:px-0 xl:max-w-screen-xl xl:px-0 lg:items-center lg:px-5 md:space-x-10 sm:w-full sm:px-6 nn:w-full nn:px-6 font-cursive ",children:C}),function(e){return(0,r.jsx)(r.Fragment,{children:e.map((function(e,t){return(0,r.jsx)(x,{deck:e,title:e.title,cards:e.cards,reversed:1==N},"".concat(e.artistsDetail.name,"-").concat(e.id))}))})}(_)]}),(0,r.jsx)(c.Z,{})]})}}},function(e){e.O(0,[649,508,774,888,179],(function(){return t=1867,e(e.s=t);var t}));var t=e.O();_N_E=t}]);