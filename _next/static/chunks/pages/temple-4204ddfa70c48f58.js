(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{6592:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/temple",function(){return t(998)}])},998:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var a=t(5893),s=t(4335),c=t(7294),r=t(9795),i=t(1163),o=t(856),l=t(7039),u=t(3801),d=[{title:"Inventory",Icon:u.VpB,Comp:function(){var e=(0,i.useRouter)(),n=(0,r.Ge)(),t=n.account,s=n.chainId,l=(0,c.useState)({assets:[]}),d=l[0],x=l[1];if((0,c.useEffect)((function(){if(s){var e=(0,o.UF)(s,t,null,null);fetch(e).then((function(e){return e.json()})).then((function(e){x(e)}))}else console.log("No Chain ID")}),[s]),!s)return(0,a.jsxs)("div",{className:"font-cursive p-auto w-full h-auto text-center my-20 text-supernova",children:["Please connect the wallet ",(0,a.jsx)(u.oAu,{className:"h-8 w-8 inline animate-bounce"})]});if(!(0,o.MR)(s))return(0,a.jsxs)("div",{className:"font-cursive p-auto w-full h-auto text-center my-20 text-supernova",children:["Unsupported chain ",(0,a.jsx)(u.SI8,{className:"h-8 w-8 inline animate-bounce"})]});return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex flex-wrap gap-5 text-center p-2 justify-start place-content-center m-2",children:d&&d.assets.map((function(n){return(0,a.jsx)("button",{className:"w-10 h-10 pb-full border-supernova rounded-lg bg-gray-700",onClick:function(){var t=1==n.traits.length?"box":"card";e.push("/items?id=".concat(n.num_sales,"&asset_type=").concat(t))},children:n.num_sales},n.num_sales)}))})})}},{title:"Omikuji",Icon:u.lO_,Comp:function(){var e=(0,r.Ge)(),n=(e.active,e.error,e.chainId);if(!n)return(0,a.jsxs)("div",{className:"font-cursive p-auto w-full h-auto text-center my-20 text-supernova",children:["Please connect the wallet ",(0,a.jsx)(u.oAu,{className:"h-8 w-8 inline animate-bounce"})]});if(!(0,o.MR)(n))return(0,a.jsxs)("div",{className:"font-cursive p-auto w-full h-auto text-center my-20 text-supernova",children:["Unsupported chain ",(0,a.jsx)(u.SI8,{className:"h-8 w-8 inline animate-bounce"})]});return(0,a.jsx)("div",{className:"m-10 font-cursive text-diablo-dark-gold text-center",children:"Get your Omikuji (\u304a\u307f\u304f\u3058) and see your fortune"},"omikuji")}},{title:"Souvenir",Icon:u.OgN,Comp:function(){var e=(0,r.Ge)(),n=(e.active,e.error,e.chainId);if(!n)return(0,a.jsxs)("div",{className:"font-cursive p-auto w-full h-auto text-center my-20 text-supernova",children:["Please connect the wallet ",(0,a.jsx)(u.oAu,{className:"h-8 w-8 inline animate-bounce"})]});if(!(0,o.MR)(n))return(0,a.jsxs)("div",{className:"font-cursive p-auto w-full h-auto text-center my-20 text-supernova",children:["Unsupported chain ",(0,a.jsx)(u.SI8,{className:"h-8 w-8 inline animate-bounce"})]});return(0,a.jsx)("div",{className:"m-10 font-cursive text-diablo-dark-gold text-center",children:"Get your lucky charm"},"souvenir")}}];function x(){var e=(0,l.$G)().t,n=(0,c.useState)({index:0}),t=n[0],r=n[1];return(0,a.jsxs)(s.Z,{pageTitle:"tokyo.cards",children:[(0,a.jsxs)("section",{className:"deck-section py-5 h-20",children:[(0,a.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,a.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})}),(0,a.jsx)("span",{className:"w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center",children:(0,a.jsx)("div",{className:"font-cursive text-diablo-dark-gold text-xl",children:e("temple.".concat(d[t.index].title.toLowerCase()))})}),(0,a.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,a.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})})]}),(0,a.jsx)("section",{className:"text-white",children:(0,a.jsxs)("div",{className:"grid grid-cols-10 gap-2 my-3",children:[(0,a.jsx)("div",{className:"col-span-8 bg-obsidian-dark rounded-br-lg rounded-tr-lg lg:rounded-lg",children:d.map((function(e,n){var s=e.Comp;if(t.index==n)return(0,a.jsx)(s,{},n)}))}),(0,a.jsx)("div",{className:"col-span-2",children:d.map((function(n,s){var c=n.title,i=n.Icon;return(0,a.jsxs)("button",{className:"w-full p-2  mb-2 flex auto-padding border-l-4 rounded black\n                    border-".concat(t.index==s?"razzmatazz":"supernova"),onClick:function(){!function(e){r({index:e})}(s)},children:[(0,a.jsx)(i,{className:"w-6 mx-1 text-".concat(t.index==s?"razzmatazz":"supernova")},"i-".concat(s)),(0,a.jsx)("span",{className:"font-cursive text-razzmatazz hidden sm:block ml-2",children:e("temple.".concat(c.toLowerCase()))},"s-".concat(s))]},"b-".concat(s))}))})]})})]})}}},function(e){e.O(0,[27,423,774,888,179],(function(){return n=6592,e(e.s=n);var n}));var n=e.O();_N_E=n}]);