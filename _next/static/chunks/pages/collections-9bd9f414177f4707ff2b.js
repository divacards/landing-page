(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{9296:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(5893),a=r(7329),c=r(6156),s=r(7294),l=r(7428),i=r(3142),o=r(5553),u=r(4708),d=function(e){var t=e.title,r=e.cards,a=void 0===r?[]:r,c=(e.artist,e.useFilter),s=void 0===c?function(e){return e}:c;return e.reversed&&a.reverse(),(0,n.jsxs)("section",{className:"flex flex-col lg:items-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-8",children:[(0,n.jsx)("div",{className:"min-w-full px-auto text-center border-b-4 border-black text-gray-800 py-4 text-3xl font-semibold mb-10 font-cursive",children:t}),(0,n.jsx)("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center gap-3 mx-auto relative",children:s(a).map((function(e){return(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("img",{className:"mx-auto w-1/2 lg:w-10/12 rounded",src:"./images/back0.svg"}),(0,n.jsx)("span",{className:"mx-auto font-cursive",children:e.name})]},e.id)}))})]})},f=r(2076);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=(0,r(6817).V7)();function h(e,t){switch((t.type.match(/change:(.*)/)||[void 0,void 0])[1]){case"blockchain":return x(x({},e),{},{blockchain:t.data});case"suite":var r=e.suite,n=r.indexOf(t.data);return n>-1?r.splice(n):r=[].concat((0,a.Z)(r),[t.data]),x(x({},e),{},{suite:r});case"order":return x(x({},e),{},{order:t.data})}return e}var g=function(e){return(0,n.jsxs)("section",{className:"flex flex-col lg:flex-row lg:ms-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-2",children:[(0,n.jsx)(f.Bi,{id:"suite-select",instanceid:"suite-select",opts:e.suiteOpts,state:e.suite,onChange:e.onSuiteSelect}),(0,n.jsx)(f.Po,{id:"order-select",instanceId:"order-select",state:e.order,onChange:e.onOrderSelect})]})},m=function(e){return(0,n.jsxs)("section",{className:"flex flex-col lg:flex-row lg:ms-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-2",children:[(0,n.jsx)(u.A,{id:"deck-select",instanceId:"deck-select",placeholder:"Select a deck",options:e.deckOpts,onChange:e.onDeckSelect}),(0,n.jsx)(u.A,{id:"artist-select",instanceId:"artist-select",isMulti:!0,placeholder:"Select artists",options:e.artistOpts,onChange:e.onArtistSelect})]})};function v(){var e,t=(0,s.useReducer)(h,{blockchain:"Ether",deck:"",artist:[],suite:[],order:0}),r=t[0],c=t[1],u=r.blockchain,f=r.suite,p=r.order,x=(0,s.useState)(null),v=(x[0],x[1]),j=(0,s.useState)([]),k=(j[0],j[1]),O=(e=[function(e){return 0==f.length||f.includes(e.poker_suite)}],function(t){return[t].concat((0,a.Z)(e)).reduce((function(e,t){return e.filter(t)}))});return(0,n.jsxs)(l.Z,{pageTitle:"diva cards",children:[(0,n.jsx)(i.Z,{blockchainOpts:[{value:"0",label:"BSC"},{value:"1",label:"Ethereum"},{value:"2",label:"Matic"}],onBlockchainSelect:function(e){return c({type:"change:blockchain",data:e})},blockchain:u}),(0,n.jsxs)("main",{children:[(0,n.jsx)(m,{deckOpts:[{value:"standard",label:"Standard decks"},{value:"curated",label:"Curated decks"},{value:"all",label:"All decks"}],onDeckSelect:v,artistOpts:[{value:"taka",label:"Taka"},{value:"akiho",label:"Akiho"}],onArtistSelect:k}),(0,n.jsx)(g,{suite:f,order:p,suiteOpts:[{value:"s",label:"Spades"},{value:"h",label:"Hearts"},{value:"c",label:"Clubs"},{value:"d",label:"Diamonds"},{value:"j",label:"Jokers"}],onSuiteSelect:function(e){return c({type:"change:suite",data:e})},onOrderSelect:function(e){return c({type:"change:order",data:e})}}),(0,n.jsx)(n.Fragment,{children:b.map((function(e,t){return(0,n.jsx)(d,{artist:e.artistsDetail,title:e.title,cards:e.cards,reversed:1==p,useFilter:O},"".concat(e.artistsDetail.name,"-").concat(e.id))}))})]}),(0,n.jsx)(o.Z,{})]})}},3892:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collections",function(){return r(9296)}])}},function(e){e.O(0,[774,307,49,888,179],(function(){return t=3892,e(e.s=t);var t}));var t=e.O();_N_E=t}]);