(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5553:function(e,t,n){"use strict";var s=n(5893),i=(n(7294),function(e){var t=e.links.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"hover:text-pink-500 font-semibold block text-sm py-2",href:e.link,children:e.title})},e.link)}));return(0,s.jsxs)("div",{className:"w-full my-8 lg:my-0 lg:w-4/12 px-4 ml-auto",children:[(0,s.jsx)("span",{className:"block uppercase text-gray-500 text-sm font-semibold mb-2",children:e.linkTitle}),(0,s.jsx)("ul",{className:"list-unstyled text-gray-500",children:t})]})});t.Z=function(){return(0,s.jsx)("footer",{className:"flex justify-center bg-gray-100 text-black py-4",children:(0,s.jsxs)("div",{className:"container max-w-screen-xl px-4",children:[(0,s.jsxs)("div",{className:"flex flex-wrap justify-around",children:[(0,s.jsxs)("div",{className:"w-full lg:w-6/12 px-4",children:[(0,s.jsx)("h3",{className:"text-3xl font-semibold mb-4 md:mb-0",children:"We are here to help"}),(0,s.jsx)("p",{className:"text-lg mt-0 mb-2 text-gray-500",children:"We look forward to having you be part of our community."})]}),(0,s.jsx)("div",{className:"w-full lg:w-6/12 lg:px-4",children:(0,s.jsxs)("div",{className:"flex flex-wrap items-top mb-6",children:[(0,s.jsx)(i,{linkTitle:"Useful Links",links:[{title:"About",link:"/about"},{title:"Pricing",link:"/pricing"},{title:"Solutions",link:"/solutions"}]}),(0,s.jsx)(i,{linkTitle:"Other Resources",links:[{title:"Press",link:"/press"},{title:"Terms of Services",link:"/tos"},{title:"Privacy",link:"/privacy"}]})]})})]}),(0,s.jsx)("div",{className:"flex flex-wrap place-content-center",children:(0,s.jsx)("div",{className:"text-sm text-lightgray font-semibold py-1",children:"Copyright \xa9 2021 diva.cards"})})]})})}},9397:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var s=n(5893),i=n(4121),l=n(7294),a=n(1664),r=n(1163),c=n(914),o=n(7616),d=n(1330),u=n(6049),x=n(7248),m=n(4184),h=n.n(m),f=n(8087),p=new f._k({supportedChainIds:[1,3,4,5,42]});function g(e){return e instanceof f.A5?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof c.Uu?"You're connected to an unsupported network.":e instanceof f.ab?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}var v=function(e){return(0,s.jsx)("button",{className:"block py-4 no-underline mx-auto md:mt-0 font-medium p-4 text-pink-400 hover:text-pink-500 transition duration-150 ease-in-out focus:outline-none",children:e.children})},j=n(6932),y=function(e){var t=(0,j.KT)(e.value||"random-string",32);return(0,s.jsx)("img",{className:"inline",src:"data:image/svg+xml;utf8,".concat(encodeURIComponent(t))})},b={body:'<g fill-rule="evenodd"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16zm7.994-15.781L16.498 4L9 16.22l7.498 4.353l7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z" fill="currentColor"/><g fill-rule="nonzero"><path fill-opacity=".298" d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z" fill="currentColor"/><path fill-opacity=".801" d="M16.498 20.573l7.497-4.353l-7.497-3.348z" fill="currentColor"/><path fill-opacity=".298" d="M9 16.22l7.498 4.353v-7.701z" fill="currentColor"/></g></g>',width:32,height:32};function N(e){var t=e.length;return e.substring(0,8)+".."+e.substring(t-6,t)}var w=function(e){return(0,s.jsx)("button",{className:"focus:outline-none p-4 lg:p-0",children:(0,s.jsx)("h1",{className:"flex items-center no-underline",children:(0,s.jsx)("span",{className:"text-4xl text-lightpink font-bold tracking-tight font-cursive",children:(0,s.jsx)(a.default,{href:"/",children:e.name})})})})},k=function(){var e=(0,c.Ge)(),t=e.activate,n=e.active;return(0,s.jsx)("button",{className:"block no-underline md:inline-block md:mt-0 md:ml-8 font-semibold px-6 py-2 btn-pink text-white focus:outline-none",onClick:function(){n||t(p)},children:"Connect Wallet"})},C=function(e){return(0,s.jsx)(d.v2.Item,{onClick:e.onClick,children:function(t){var n=t.active;return(0,s.jsx)("a",{href:"#",className:h()(n?"bg-pink-700 opacity-75 text-gray-100":"text-gray-700","block px-4 py-2 text-sm"),children:e.children})}})},L=function(){var e=(0,c.Ge)(),t=e.deactivate,n=e.active,a=(0,c.Ge)(),r=a.library,m=a.chainId,h=a.account,f=l.useState(),p=(0,i.Z)(f,2),g=p[0],v=p[1];return l.useEffect((function(){if(h&&r){var e=!1;return r.getBalance(h).then((function(t){e||v(t)})).catch((function(){e||v(null)})),function(){e=!0,v(void 0)}}}),[h,r,m]),(0,s.jsx)(d.v2,{as:"div",className:"relative mx-auto inline-block py-4 text-left",children:function(e){var i=e.open;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.v2.Button,{className:"flex flex-row rounded-full border-2 ml-4 px-4 py-2 divide-x divide-pink-300",children:[(0,s.jsxs)("span",{className:"px-2 my-auto text-highlight",children:[g?(0,o.dF)(g):""," ETH"]}),(0,s.jsx)(y,{value:h})]}),(0,s.jsx)(d.uT,{show:i,as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,s.jsxs)(d.v2.Items,{className:"flex flex-col origin-top-right absolute right-0 mt-2 w-48 rounded shadow-lg bg-white focus:outline-none divide-y divide-pink-300",children:[(0,s.jsx)("div",{className:"py-1",children:(0,s.jsx)(d.v2.Item,{children:(0,s.jsxs)("div",{className:"flex flex-col px-4 py-2 text-sm",children:[(0,s.jsxs)("div",{className:"flex flex-row gap-1",children:[(0,s.jsx)("span",{className:"text-black font-semibold opacity-75",children:null===h?"no account":N(h)}),(0,s.jsx)("button",{className:"inline my-auto w-4 h-4",children:(0,s.jsx)(u.dqY,{className:"text-gray-500 opacity-75",onClick:function(){navigator.clipboard.writeText(h)}})})]}),(0,s.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,s.jsx)(x.Wb,{className:"my-auto",icon:b,color:"gray"}),(0,s.jsxs)("span",{className:"text-highlight",children:[g?(0,o.dF)(g):""," ETH"]})]})]})})}),(0,s.jsx)("div",{className:"py-1",children:(0,s.jsx)(C,{onClick:function(){return n?t():null},children:"Disconnect"})})]})})]})}})},E=function(){var e=(0,c.Ge)().active,t=(0,r.useRouter)();!function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,c.Ge)(),n=t.active,s=t.error,i=t.activate;(0,l.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!s&&!e){var l=function(){console.log("Handling 'connect' event"),i(p)},a=function(e){console.log("Handling 'chainChanged' event with payload",e),i(p)},r=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&i(p)};return t.on("connect",l),t.on("chainChanged",a),t.on("accountsChanged",r),function(){t.removeListener&&(t.removeListener("connect",l),t.removeListener("chainChanged",a),t.removeListener("accountsChanged",r))}}}),[n,s,e,i])}(!function(){console.log("connecting");var e=(0,c.Ge)(),t=e.activate,n=e.active,s=(0,l.useState)(!1),i=s[0],a=s[1];return(0,l.useEffect)((function(){p.isAuthorized().then((function(e){e?t(p,void 0,!0).catch((function(){a(!0)})):a(!0)}))}),[]),(0,l.useEffect)((function(){!i&&n&&a(!0)}),[i,n]),i}());return(0,s.jsxs)("nav",{className:"flex flex-col lg:flex-row p-4 lg:p-0",children:[[{href:"/collections",text:"Collections"},{href:"/artists",text:"Artists"},{href:"/forge",text:"Forge"}].map((function(e){return(0,s.jsx)(v,{children:(0,s.jsx)(a.default,{href:e.href,children:(0,s.jsx)("span",{className:t.pathname===e.href?"font-bold":null,children:e.text})})},e.text)})),e?(0,s.jsx)(L,{}):(0,s.jsx)(k,{})]})},I=function(){var e=(0,c.Ge)(),t=e.library,n=e.chainId,a=e.account,r=e.error,d=l.useState(),u=(0,i.Z)(d,2),x=u[0],m=u[1],h=(0,l.useState)(),f=h[0],p=h[1];return l.useEffect((function(){if(t){var e=!1;t.getBlockNumber().then((function(t){e||p(t)})).catch((function(){e||p(null)}));var n=function(e){p(e)};return t.on("block",n),function(){e=!0,t.removeListener("block",n),p(void 0)}}}),[t,n]),l.useEffect((function(){if(a&&t){var e=!1;return t.getBalance(a).then((function(t){e||m(t)})).catch((function(){e||m(null)})),function(){e=!0,m(void 0)}}}),[a,t,n]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("header",{className:"flex flex-col lg:flex-row lg:items-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-8",children:[(0,s.jsx)(w,{name:"diva.cards"}),(0,s.jsx)(E,{})]}),(0,s.jsxs)("div",{className:"mx-auto text-center",children:[(0,s.jsxs)("p",{children:["Account: ",null===a?"no account":a]}),(0,s.jsxs)("p",{children:["Balance:"," ",null===x?"Not connected":x?(0,o.dF)(x):""]}),(0,s.jsxs)("p",{children:["Block number: ",null===f?"Error":null!==f&&void 0!==f?f:""]}),(0,s.jsxs)("p",{children:["Error: ",r?g(r):"No error"]})]})]})}},7428:function(e,t,n){"use strict";var s=n(5893),i=(n(7294),n(9008)),l=n(914),a=n(6492);function r(e){var t=new a.Q(e);return t.pollingInterval=12e3,t}t.Z=function(e){return(0,s.jsx)(l.Ht,{getLibrary:r,children:(0,s.jsxs)("main",{className:"bg-white",children:[(0,s.jsx)(i.default,{children:(0,s.jsx)("title",{children:e.pageTitle})}),e.children]})})}},669:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var s=n(5893),i=n(7428),l=n(9397),a=(n(7294),function(){return(0,s.jsxs)("section",{className:"flex flex-col lg:flex-row items-center lg:justify-around mx-auto mt-10 px-6 lg:px-20 lg:py-8 max-w-screen-xl relative",children:[(0,s.jsxs)("div",{className:"text-center lg:text-left w-4/5 sm:w-2/3 lg:w-1/2 mx-auto py-4 aos-init aos-animate","data-aos":"fade-in",children:[(0,s.jsxs)("h2",{className:"text-3xl leading-tight font-extrabold text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl",children:["Your headline ",(0,s.jsx)("span",{className:"text-lightpink",children:"goes here"})]}),(0,s.jsx)("p",{className:"mt-6 text-base font-body text-lightgray sm:text-lg md:text-xl",children:"Supplement it with an easy to read subheading."}),(0,s.jsxs)("div",{className:"mt-5 sm:mt-8 flex justify-between lg:justify-start",children:[(0,s.jsx)("button",{className:"px-4 py-2 border border-transparent text-xl btn-pink focus:outline-none md:px-6   font-semibold text-white",children:"Buy Cards"}),(0,s.jsx)("button",{className:"lg:mx-2 px-4 py-2 border border-transparent text-xl btn-white focus:outline-none md:px-6   font-semibold text-pink-500",children:"Air Drop"})]})]}),(0,s.jsx)("div",{className:"mx-auto mt-6 mb-16 lg:m-0 w-full lg:w-1/2 aos-init aos-animate","data-aos":"fade-up",children:(0,s.jsx)("img",{height:"500",width:"1000",className:"w-full h-full z-20 object-contain",src:"/images/Group Members.png",alt:"main-img"})})]})}),r=n(6049),c=function(e){return(0,s.jsxs)("div",{className:"lg:text-center",children:[(0,s.jsx)("p",{className:"uppercase font-semibold text-pink-400",children:e.sectionName}),(0,s.jsx)("h2",{className:"text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10",children:e.title}),(0,s.jsx)("p",{className:"mt-4 max-w-screen-xl text-xl leading-7 text-lightgray lg:mx-auto",children:e.desc})]})},o=function(e){return(0,s.jsxs)("div",{className:"flex space-x-4",children:[(0,s.jsx)("div",{children:e.icon}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"mb-2 font-semibold text-gray",children:e.title}),(0,s.jsx)("p",{className:"leading-normal text-lightgray",children:e.desc})]})]})},d=function(){var e=[{title:"Lorem Ipsum",desc:"Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize. Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize."},{title:"Lorem Ipsum",desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},{title:"Lorem Ipsum",desc:"Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize. Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize."},{title:"Lorem Ipsum",desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}];return(0,s.jsx)("section",{className:"flex flex-col items-center lg:justify-around mx-auto mt-10 px-6 lg:px-20 py-8 relative",children:(0,s.jsxs)("div",{className:"max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,s.jsx)(c,{title:"Services",sectionName:"cross-chain nfts",desc:"Describe your awesome services. Describe your awesome services. Describe your awesome services."}),(0,s.jsxs)("div",{className:"mt-10 relative mx-auto grid lg:grid-cols-2 gap-10 content-center",children:[(0,s.jsx)(o,{icon:(0,s.jsx)(r.n9J,{height:40,width:40,className:"text-pink-500"}),title:"Service #1",desc:e[0].desc}),(0,s.jsx)(o,{icon:(0,s.jsx)(r.YGl,{height:40,width:40,className:"text-pink-500"}),title:"Service #2",desc:e[1].desc}),(0,s.jsx)(o,{icon:(0,s.jsx)(r.VqP,{height:40,width:40,className:"text-pink-500"}),title:"Service #3",desc:e[2].desc}),(0,s.jsx)(o,{icon:(0,s.jsx)(r.kBi,{height:40,width:40,className:"text-pink-500"}),title:"Service #4",desc:e[3].desc})]})]})})},u=n(5553);function x(){return(0,s.jsxs)(i.Z,{pageTitle:"diva cards",children:[(0,s.jsx)(l.Z,{}),(0,s.jsxs)("main",{children:[(0,s.jsx)(a,{}),(0,s.jsx)(d,{})]}),(0,s.jsx)(u.Z,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(669)}])},6601:function(){}},function(e){e.O(0,[299,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);