(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{926:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return p}});var s=l(5893),t=l(4699),c=l(7329),i=l(7294),r=l(7428),n=l(6150),o=l(5553),d=l(4708),m=function(e){var a=e.title,l=e.cards,t=void 0===l?[]:l,c=e.useFilter,i=void 0===c?function(e){return e}:c;return e.reversed&&t.reverse(),(0,s.jsxs)("section",{className:"flex flex-col lg:items-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-8",children:[(0,s.jsx)("div",{className:"min-w-full px-auto text-center border-b-4 border-black text-gray-800 py-4 text-3xl font-semibold mb-10 font-cursive",children:a}),(0,s.jsx)("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center gap-3 mx-auto relative",children:i(t).map((function(e){return(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("img",{className:"mx-auto w-1/2 lg:w-10/12 rounded",src:e.img}),(0,s.jsx)("span",{className:"mx-auto font-cursive",children:e.name})]},e.name)}))})]})},u=l(2076);function g(e,a){switch((a.type.match(/change:(.*)/)||[void 0,void 0])[1]){case"col":default:return e}return e}var k=function(e){return(0,s.jsxs)("section",{className:"flex flex-col lg:flex-row lg:ms-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-2",children:[(0,s.jsx)(u.Bi,{id:"suite-select",instanceid:"suite-select",opts:e.suiteOpts,state:e.suite,onChange:e.onSuiteSelect}),(0,s.jsx)(d.A,{id:"order-select",instanceId:"order-select",placeholder:"Select an order",options:e.orderOpts,onChange:e.onOrderSelect})]})},h=function(e){return(0,s.jsxs)("section",{className:"flex flex-col lg:flex-row lg:ms-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-2",children:[(0,s.jsx)(d.A,{id:"deck-select",instanceId:"deck-select",placeholder:"Select a deck",options:e.deckOpts,onChange:e.onDeckSelect}),(0,s.jsx)(d.A,{id:"artist-select",instanceId:"artist-select",isMulti:!0,placeholder:"Select artists",options:e.artistOpts,onChange:e.onArtistSelect})]})};function p(){var e={kuron:{title:"kuron's deck",cards:[{name:"[kuron] placeholder A",img:"./images/H10.svg"},{name:"[kuron] placeholder B",img:"./images/back0.svg"},{name:"[kuron] placeholder C",img:"./images/H10.svg"},{name:"[kuron] placeholder D",img:"./images/back0.svg"},{name:"[kuron] placeholder E",img:"./images/H10.svg"},{name:"[kuron] placeholder F",img:"./images/back0.svg"},{name:"[kuron] placeholder G",img:"./images/H10.svg"}]},akiho:{title:"akiho's deck",cards:[{name:"[akiho] placeholder A",img:"./images/back0.svg"},{name:"[akiho] placeholder B",img:"./images/back3.svg"},{name:"[akiho] placeholder C",img:"./images/back0.svg"},{name:"[akiho] placeholder D",img:"./images/back3.svg"},{name:"[akiho] placeholder E",img:"./images/back0.svg"},{name:"[akiho] placeholder F",img:"./images/back3.svg"},{name:"[akiho] placeholder G",img:"./images/back0.svg"},{name:"[akiho] placeholder H",img:"./images/back3.svg"}]},taka:{title:"taka's deck",cards:[{name:"[taka] placeholder A",img:"./images/back0.svg"},{name:"[taka] placeholder B",img:"./images/back3.svg"},{name:"[taka] placeholder C",img:"./images/back0.svg"},{name:"[taka] placeholder D",img:"./images/back3.svg"},{name:"[taka] placeholder E",img:"./images/back0.svg"},{name:"[taka] placeholder F",img:"./images/back3.svg"},{name:"[taka] placeholder G",img:"./images/back0.svg"},{name:"[taka] placeholder H",img:"./images/back3.svg"}]}},a=(0,i.useReducer)(g,{blockchain:"Ether",deck:"",artist:[],suite:[],order:0}),l=(a[0],a[1],(0,i.useState)(null)),d=(l[0],l[1]),u=(0,i.useState)([]),p=(u[0],u[1]),v=(0,i.useState)(null),x=v[0],b=v[1],f=(0,i.useState)([]),j=f[0],S=f[1],w=(0,i.useState)(null),y=w[0],O=w[1];return(0,s.jsxs)(r.Z,{pageTitle:"diva cards",children:[(0,s.jsx)(n.Z,{blockchainOpts:[{value:"0",label:"Ethereum"},{value:"1",label:"BSC"}],onBlockchainSelect:b,blockchain:x}),(0,s.jsxs)("main",{children:[(0,s.jsx)(h,{deckOpts:[{value:"standard",label:"Standard decks"},{value:"curated",label:"Curated decks"},{value:"all",label:"All decks"}],onDeckSelect:d,artistOpts:[{value:"taka",label:"Taka"},{value:"akiho",label:"Akiho"}],onArtistSelect:S}),(0,s.jsx)(k,{suiteOpts:[{value:"s",label:"Spades"},{value:"h",label:"Hearts"},{value:"c",label:"Clubs"},{value:"d",label:"Diamonds"},{value:"j",label:"Jokers"}],onSuiteSelect:p,orderOpts:[{value:"asc_rarity",label:"Low to high by Rarity"},{value:"desc_rarity",label:"High to low by Rarity"}],onOrderSelect:O}),function(e,a,l){var i=e.map((function(e){return e.value})),r=[];if(0===i.length)r.push.apply(r,(0,c.Z)(Object.entries(a)));else for(var n=0,o=Object.entries(a);n<o.length;n++){var d=(0,t.Z)(o[n],2),u=d[0],g=d[1];i.includes(u)&&r.push([u,g])}return(0,s.jsx)(s.Fragment,{children:r.map((function(e,a){var c=(0,t.Z)(e,2),i=c[0],r=c[1];return(0,s.jsx)(m,{title:r.title,cards:r.cards,reversed:!(!l||"desc"!==l.value)},i+"-"+a)}))})}(j,e,y)]}),(0,s.jsx)(o.Z,{})]})}},3892:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collections",function(){return l(926)}])}},function(e){e.O(0,[774,261,645,888,179],(function(){return a=3892,e(e.s=a);var a}));var a=e.O();_N_E=a}]);