(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{50083:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/items",function(){return a(77321)}])},77321:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var s=a(85893),i=a(67294),r=a(37039),l=a(90913),n=a(69795),c=a(30856),o=a(37431),d=a(63153),x=a(11163),u=a(23626),m=a(71794),b=a(36694);function h(e){var t=e.isBox,a=e.item_id,i=(0,n.Ge)(),r=i.library,l=i.account,x=i.chainId;return x?(0,c.MR)(x)?(0,s.jsxs)("div",{className:"flex flex-wrap space-around h-full content-between font-cursive",children:[(0,s.jsxs)("div",{className:"w-full",children:["Total Supply:",(0,s.jsx)(m.Ms,{className:"inline mx-2",method:"totalSupply",token_id:a,library:r,account:l,chainId:x,isBox:t})]}),(0,s.jsxs)("div",{className:"w-full mb-2",children:["Owns:",(0,s.jsx)(m.Ms,{className:"inline mx-2",method:"balanceOf",token_id:a,library:r,account:l,chainId:x,isBox:t})]}),(0,s.jsx)("div",{className:"w-full border-t-2 pt-2 border-razzmatazz",children:(0,s.jsx)(m.tQ,{method:"unpack",token_id:a,library:r,account:l,chainId:x,isBox:t})})]}):(0,s.jsx)(o.V9,{message:"Unsupported chain",Icon:ExclamationIcon}):(0,s.jsx)(o.V9,{message:"Please connect the wallet",Icon:d.oAu})}var f=[2916,2917,2918,2919,2920,2921,2922,2923,2924,2925,2926,2927,2928,2929,2930,2931];function v(){var e=(0,r.$G)().t,t=(0,i.useState)([]),a=t[0],n=t[1],c=(0,i.useState)(void 0),m=c[0],v=c[1],j=(0,i.useState)(!1),p=j[0],w=j[1],g=(0,i.useState)(void 0),N=g[0],k=g[1],y=(0,i.useState)(!1),_=y[0],P=y[1],S=(0,i.useState)(!1),z=S[0],B=S[1],E=(0,x.useRouter)();return(0,i.useEffect)((function(){var e=(0,u.B6)("id");v(e),f.indexOf(parseInt(e))>-1&&B(!0);var t="box"==(0,u.B6)("asset_type")?"box":"items";"box"==t&&P(!0);var a=1!=window.history.length;fetch("https://diva.cards/api/".concat(t,"/").concat(e,"/")).then((function(e){return e.json()})).then((function(e){w(!1),n(e),k(a)}))}),[]),p||!a?(0,s.jsx)(o.wW,{}):(0,s.jsxs)(l.Z,{pageTitle:"tokyo.cards",children:[(0,s.jsx)("button",{className:"block h-14 w-14 bg-diablo-dark-gold rounded-full fixed z-40 bottom-5 right-5 drop-shadow-lg text-white",onClick:function(){N?E.back():E.push("/")},children:N?(0,s.jsx)(d.Y4O,{className:"h-8 w-8 m-auto"}):(0,s.jsx)(d.tvw,{className:"h-8 w-8 m-auto"})}),(0,s.jsxs)("section",{className:"deck-section py-5 h-20",children:[(0,s.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,s.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})}),(0,s.jsx)("span",{className:"w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center",children:(0,s.jsxs)("div",{className:"font-cursive text-diablo-dark-gold text-xl",children:[" ",e("items.detail")," "]})}),(0,s.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,s.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})})]}),(0,s.jsxs)("section",{className:"flex flex-wrap gap-5 m-3",children:[(0,s.jsx)("div",{className:"w-full h-96 relative border-diablo-dark-gold rounded-lg text-center lg:w-6/12",children:a.image?(0,s.jsx)(b.X,{fastSpin:!1,objScale:1,objPos:void 0,fogColor:["#0E93AD",0,1e3],pntLgtPos:[10,10,10],boxTexture:a.image,isPrimal:z,isBox:_}):(0,s.jsx)(o.wW,{})}),(0,s.jsxs)("div",{className:"text-cinnabar w-full lg:w-5/12 flex flex-wrap gap-4",children:[(0,s.jsxs)("div",{className:"bg-obsidian-gray w-full p-4 rounded-lg border-2 border-supernova",children:[a.attributes&&_&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"text-2xl font-cursive text-rarity-artifact",children:a&&a.name}),(0,s.jsx)("div",{className:"text-base font-cursive text-diablo-dark-gold",children:"Limited"}),(0,s.jsx)("div",{className:"text-sm font-cursive text-diablo-dark-gold",children:"Box"}),(0,s.jsxs)("div",{className:"text-xs font text-rarity-uncommon",children:[a.attributes[0].value," item inside"]})]}),a.attributes&&!_&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"text-2xl font-cursive text-".concat((0,u.kg)((0,u.PJ)("Rarity",a.attributes).value)),children:a&&a.name}),(0,s.jsx)("div",{className:"text-base font-cursive text-".concat((0,u.kg)((0,u.PJ)("Rarity",a.attributes).value)),children:(0,u.PJ)("Rarity",a.attributes).value}),(0,s.jsx)("div",{className:"text-sm font-cursive text-diablo-dark-gold",children:(0,u.PJ)("Card Type",a.attributes).value})]}),(0,s.jsx)("div",{className:"text-xs text-rarity-artifact",children:a&&a.description})]}),(0,s.jsx)("div",{className:"text-cinnabar p-4 rounded-lg w-full bg-obsidian-gray border-razzmatazz border-2",children:(0,s.jsx)(h,{isBox:_,item_id:m})})]}),(0,s.jsx)("div",{className:"text-cinnabar flex flex-wrap gap-2 text-center justify-start place-content-center w-full",children:a.attributes&&!_&&a.attributes.map((function(e,t){return"Name"==e.trait_type?null:(0,s.jsxs)("div",{className:"text-sm rounded-lg h-24 w-24 p-2 bg-obsidian-gray relative",children:[(0,s.jsx)("div",{className:"absolute",children:e.trait_type},"title-".concat(t)),(0,s.jsx)("div",{className:"absolute top-10 w-20 text-".concat((0,u.kg)(e.value)),children:e.value},"value-".concat(t))]},"c-".concat(t))}))},"traits")]})]})}}},function(e){e.O(0,[774,523,112,737,662,20,943,769,270,552,205,888,179],(function(){return t=50083,e(e.s=t);var t}));var t=e.O();_N_E=t}]);