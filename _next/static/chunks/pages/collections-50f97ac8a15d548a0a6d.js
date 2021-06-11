(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{9296:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(5893),c=n(7329),a=n(6156),s=n(7294),i=n(7428),l=n(3142),o=n(5553),u=n(4708),d=function(e){var t=e.title,n=e.cards,c=void 0===n?[]:n,a=e.deck;e.useFilter;return e.reversed&&c.reverse(),0==c.length?null:(0,r.jsxs)("section",{className:"lg-content flex flex-col lg:items-center justify-between px-6 lg:py-8",children:[(0,r.jsx)("div",{className:"min-w-full px-auto text-center border-b-4 border-black text-gray-800 py-4 text-3xl font-semibold mb-10 font-cursive",children:t}),(0,r.jsx)("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center gap-3 mx-auto relative",children:c.map((function(e){return(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("img",{className:"mx-auto w-1/2 lg:w-10/12 rounded",src:"./images/back0.svg"}),(0,r.jsx)("span",{className:"mx-auto font-cursive",children:e.name})]},"".concat(a.artistsDetail.name,"-").concat(a.name,"-").concat(e.id))}))})]})},f=n(2076),p=n(8722),h=n(1873);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=(0,n(9429).V7)();function b(e,t){switch((t.type.match(/change:(.*)/)||[void 0,void 0])[1]){case"blockchain":return m(m({},e),{},{blockchain:t.data});case"suite":var n=e.suite,r=n.indexOf(t.data);return r>-1?n.splice(r,1):n=[].concat((0,c.Z)(n),[t.data]),m(m({},e),{},{suite:n});case"deck":var a=t.data||{value:null};return m(m({},e),{},{deck:a.value});case"artist":return m(m({},e),{},{artist:t.data});case"order":return m(m({},e),{},{order:t.data})}return e}var x=function(e){return(0,r.jsxs)("section",{className:"card-filter-region",children:[(0,r.jsx)("div",{className:"w-1/4 flex flex-row justify-around",children:(0,r.jsx)(f.Bi,{id:"suite-select",instanceid:"suite-select",opts:e.suiteOpts,state:e.suite,onChange:e.onSuiteSelect})}),(0,r.jsx)(f.Po,{id:"order-select",instanceId:"order-select",state:e.order,onChange:e.onOrderSelect})]})},j=function(e){return(0,r.jsxs)("section",{className:"flex justify-start lg-section gap-1",children:[(0,r.jsx)(u.A,{id:"deck-select",instanceId:"deck-select",placeholder:"Select a deck",options:e.deckOpts,onChange:e.onDeckSelect,isClearable:!0}),(0,r.jsx)(u.A,{id:"artist-select",instanceId:"artist-select",isMulti:!0,placeholder:"Select artists",options:e.artistOpts,onChange:e.onArtistSelect})]})};function k(){var e,t=h.a.map((function(e){var t=e.id;e.name;return{value:t,label:e.title}})),n=p.a.map((function(e){return{value:e.id,label:e.name}})),a=(0,s.useReducer)(b,{blockchain:"0",deck:null,artist:[],suite:[],order:0}),u=a[0],f=a[1],g=u.blockchain,k=u.suite,O=u.deck,y=u.artist,w=u.order,N=(e=[function(e){return 0==k.length||k.includes(e.poker_suite)},function(e){return null==O||O==e.deck}],function(t){return[t].concat((0,c.Z)(e)).reduce((function(e,t){return e.filter(t)}))}||function(e){return e}),S=0,_=v.filter((function(e){return 0==y.length||y.map((function(e){return e.value})).includes(e.id)})).map((function(e,t){var n=N(e.cards);return S+=n.length,m(m({},e),{},{cards:n})}));return(0,r.jsxs)(i.Z,{pageTitle:"diva cards",children:[(0,r.jsx)(l.Z,{onBlockchainSelect:function(e){return f({type:"change:blockchain",data:e})},blockchain:g}),(0,r.jsxs)("main",{children:[(0,r.jsxs)("div",{className:"lg-content desktop-filter-region",children:[(0,r.jsx)(j,{deckOpts:t,onDeckSelect:function(e){return f({type:"change:deck",data:e})},artistOpts:n,onArtistSelect:function(e){return f({type:"change:artist",data:e})}}),(0,r.jsx)(x,{suite:k,order:w,suiteOpts:[{value:"s",label:"Spades"},{value:"h",label:"Hearts"},{value:"c",label:"Clubs"},{value:"d",label:"Diamonds"},{value:"j",label:"Jokers"}],onSuiteSelect:function(e){return f({type:"change:suite",data:e})},onOrderSelect:function(e){return f({type:"change:order",data:e})}})]}),(0,r.jsxs)("div",{className:"hidden lg:block lg-content px-2 -mb-10",children:[S," Cards found"]}),function(e){return(0,r.jsx)(r.Fragment,{children:e.map((function(e,t){return(0,r.jsx)(d,{deck:e,title:e.title,cards:e.cards,reversed:1==w},"".concat(e.artistsDetail.name,"-").concat(e.id))}))})}(_)]}),(0,r.jsx)(o.Z,{})]})}},3892:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collections",function(){return n(9296)}])}},function(e){e.O(0,[774,307,49,888,179],(function(){return t=3892,e(e.s=t);var t}));var t=e.O();_N_E=t}]);