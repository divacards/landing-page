(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{6675:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return j}});var t=l(5893),s=l(4699),n=l(7329),r=l(7294),c=l(7428),i=l(3142),o=l(5553),u=l(6156),d=l(7169);function g(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,t)}return l}function m(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?g(Object(l),!0).forEach((function(a){(0,u.Z)(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):g(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}var p=function(e){return(0,t.jsx)(d.ZP,{id:e.id,instanceId:e.instanceId,isMulti:e.isMulti,placeholder:e.placeholder,options:e.options,onChange:e.onChange,theme:function(e){return m(m({},e),{},{colors:m(m({},e.colors),{},{primary:"hotpink",neutral10:"lavender"})})},className:"p-1 w-12/12 lg:w-3/12"})},h=function(e){var a=e.value,l=e.label,s=(e.checked,e.onChange);return(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"radio",className:"rounded text-pink-500",value:a,checked:1==a,onChange:s}),l]})},k=function(e){var a=e.items,l=e.state,s=e.onChange;return(0,t.jsx)("div",{children:a.map((function(e){var a=e.value,n=e.label;return(0,t.jsx)(h,{value:a,label:n,checked:a==l,onChange:s},a)}))})},v=function(e){return(0,t.jsxs)("section",{className:"flex flex-col lg:flex-row lg:ms-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-2",children:[(0,t.jsx)(p,{id:"suite-select",instanceId:"suite-select",isMulti:!0,placeholder:"Select suite",options:e.suiteOpts,onChange:e.onSuiteSelect}),(0,t.jsx)(p,{id:"order-select",instanceId:"order-select",placeholder:"Select an order",options:e.orderOpts,onChange:e.onOrderSelect})]})},b=function(e){return(0,t.jsx)("section",{className:"flex flex-col lg:flex-row lg:ms-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-2",children:(0,t.jsx)(k,{items:e.blockchainOpts,id:"blockchain-select",onChange:e.onBlockchainSelect})})},x=function(e){return(0,t.jsxs)("section",{className:"flex flex-col lg:flex-row lg:ms-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-2",children:[(0,t.jsx)(p,{id:"deck-select",instanceId:"deck-select",placeholder:"Select a deck",options:e.deckOpts,onChange:e.onDeckSelect}),(0,t.jsx)(p,{id:"artist-select",instanceId:"artist-select",isMulti:!0,placeholder:"Select artists",options:e.artistOpts,onChange:e.onArtistSelect})]})},f=function(e){var a=e.deck,l=a.cards;return e.reversed&&l.reverse(),(0,t.jsxs)("section",{className:"flex flex-col lg:items-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-8",children:[(0,t.jsx)("div",{className:"min-w-full px-auto text-center border-b-4 border-black text-gray-800 py-4 text-3xl font-semibold mb-10 font-cursive",children:a.title}),(0,t.jsx)("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center gap-3 mx-auto relative",children:l.map((function(e){return(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)("img",{className:"mx-auto w-1/2 lg:w-10/12 rounded",src:e.img}),(0,t.jsx)("span",{className:"mx-auto font-cursive",children:e.name})]},e.name)}))})]})};function j(){var e={kuron:{title:"kuron's deck",cards:[{name:"[kuron] placeholder A",img:"./images/H10.svg"},{name:"[kuron] placeholder B",img:"./images/back0.svg"},{name:"[kuron] placeholder C",img:"./images/H10.svg"},{name:"[kuron] placeholder D",img:"./images/back0.svg"},{name:"[kuron] placeholder E",img:"./images/H10.svg"},{name:"[kuron] placeholder F",img:"./images/back0.svg"},{name:"[kuron] placeholder G",img:"./images/H10.svg"}]},akiho:{title:"akiho's deck",cards:[{name:"[akiho] placeholder A",img:"./images/back0.svg"},{name:"[akiho] placeholder B",img:"./images/back3.svg"},{name:"[akiho] placeholder C",img:"./images/back0.svg"},{name:"[akiho] placeholder D",img:"./images/back3.svg"},{name:"[akiho] placeholder E",img:"./images/back0.svg"},{name:"[akiho] placeholder F",img:"./images/back3.svg"},{name:"[akiho] placeholder G",img:"./images/back0.svg"},{name:"[akiho] placeholder H",img:"./images/back3.svg"}]},taka:{title:"taka's deck",cards:[{name:"[taka] placeholder A",img:"./images/back0.svg"},{name:"[taka] placeholder B",img:"./images/back3.svg"},{name:"[taka] placeholder C",img:"./images/back0.svg"},{name:"[taka] placeholder D",img:"./images/back3.svg"},{name:"[taka] placeholder E",img:"./images/back0.svg"},{name:"[taka] placeholder F",img:"./images/back3.svg"},{name:"[taka] placeholder G",img:"./images/back0.svg"},{name:"[taka] placeholder H",img:"./images/back3.svg"}]}},a=(0,r.useState)(null),l=(a[0],a[1]),u=(0,r.useState)(null),d=(u[0],u[1]),g=(0,r.useState)(null),m=(g[0],g[1]),p=(0,r.useState)([]),h=p[0],k=p[1],j=(0,r.useState)(null),O=j[0],y=j[1];return(0,t.jsxs)(c.Z,{pageTitle:"diva cards",children:[(0,t.jsx)(i.Z,{}),(0,t.jsxs)("main",{children:[(0,t.jsx)(b,{blockchainOpts:[{value:"0",label:"Ethereum"},{value:"1",label:"BSC"}],onBlockchainSelect:m}),(0,t.jsx)(x,{deckOpts:[{value:"standard",label:"Standard decks"},{value:"curated",label:"Curated decks"},{value:"all",label:"All decks"}],onDeckSelect:l,artistOpts:[{value:"taka",label:"Taka"},{value:"akiho",label:"Akiho"}],onArtistSelect:k}),(0,t.jsx)(v,{suiteOpts:[{value:"s",label:"Spades"},{value:"h",label:"Hearts"},{value:"c",label:"Clubs"},{value:"d",label:"Diamonds"},{value:"j",label:"Jokers"}],onSuiteSelect:d,orderOpts:[{value:"asc_rarity",label:"Low to high by Rarity"},{value:"desc_rarity",label:"High to low by Rarity"}],onOrderSelect:y}),function(e,a,l){var r=e.map((function(e){return e.value})),c=[];if(0===r.length)c.push.apply(c,(0,n.Z)(Object.entries(a)));else for(var i=0,o=Object.entries(a);i<o.length;i++){var u=(0,s.Z)(o[i],2),d=u[0],g=u[1];r.includes(d)&&c.push([d,g])}return(0,t.jsx)(t.Fragment,{children:c.map((function(e,a){var n=(0,s.Z)(e,2),r=n[0],c=n[1];return(0,t.jsx)(f,{deck:c,reversed:!(!l||"desc"!==l.value)},r+"-"+a)}))})}(h,e,O)]}),(0,t.jsx)(o.Z,{})]})}},3892:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collections",function(){return l(6675)}])}},function(e){e.O(0,[774,101,169,49,888,179],(function(){return a=3892,e(e.s=a);var a}));var a=e.O();_N_E=a}]);