(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[231],{5553:function(e,n,t){"use strict";var r=t(5893),l=(t(7294),function(e){var n=e.links.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"hover:text-pink-500 font-semibold block text-sm py-2",href:e.link,children:e.title})},e.link)}));return(0,r.jsxs)("div",{className:"w-full my-8 lg:my-0 lg:w-4/12 px-4 ml-auto",children:[(0,r.jsx)("span",{className:"block uppercase text-gray-500 text-sm font-semibold mb-2",children:e.linkTitle}),(0,r.jsx)("ul",{className:"list-unstyled text-gray-500",children:n})]})});n.Z=function(){return(0,r.jsx)("footer",{className:"flex justify-center bg-gray-100 text-black py-4",children:(0,r.jsxs)("div",{className:"container max-w-screen-xl px-4",children:[(0,r.jsxs)("div",{className:"flex flex-wrap justify-around",children:[(0,r.jsxs)("div",{className:"w-full lg:w-6/12 px-4",children:[(0,r.jsx)("h3",{className:"text-3xl font-semibold mb-4 md:mb-0",children:"We are here to help"}),(0,r.jsx)("p",{className:"text-lg mt-0 mb-2 text-gray-500",children:"We look forward to having you be part of our community."})]}),(0,r.jsx)("div",{className:"w-full lg:w-6/12 lg:px-4",children:(0,r.jsxs)("div",{className:"flex flex-wrap items-top mb-6",children:[(0,r.jsx)(l,{linkTitle:"Useful Links",links:[{title:"About",link:"/about"},{title:"Pricing",link:"/pricing"},{title:"Solutions",link:"/solutions"}]}),(0,r.jsx)(l,{linkTitle:"Other Resources",links:[{title:"Press",link:"/press"},{title:"Terms of Services",link:"/tos"},{title:"Privacy",link:"/privacy"}]})]})})]}),(0,r.jsx)("div",{className:"flex flex-wrap place-content-center",children:(0,r.jsx)("div",{className:"text-sm text-lightgray font-semibold py-1",children:"Copyright \xa9 2021 diva.cards"})})]})})}},8530:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),l=(t(7294),t(1664)),i=function(e){return(0,r.jsx)("button",{className:"block py-4 no-underline mx-auto md:mt-0 font-medium p-4 text-pink-400 hover:text-pink-500 transition duration-150 ease-in-out focus:outline-none",children:e.children})},s=function(e){return(0,r.jsx)("button",{className:"block no-underline md:inline-block md:mt-0 md:ml-8 font-semibold px-6 py-2 btn-pink text-white focus:outline-none",children:e.text})},c=function(){return(0,r.jsxs)("nav",{className:"flex flex-col lg:flex-row",children:[(0,r.jsx)(i,{children:(0,r.jsx)(l.default,{href:"/collections",children:"Collections"})}),(0,r.jsx)(i,{children:(0,r.jsx)(l.default,{href:"/artists",children:"Artists"})}),(0,r.jsx)(i,{children:(0,r.jsx)(l.default,{href:"/forge",children:"Forge"})}),(0,r.jsx)(s,{text:"Connect Wallet"})]})},o=function(e){return(0,r.jsx)("button",{className:"focus:outline-none p-4",children:(0,r.jsx)("h1",{className:"flex items-center no-underline",children:(0,r.jsx)("span",{className:"text-4xl text-lightpink font-bold tracking-tight font-cursive",children:(0,r.jsx)(l.default,{href:"/",children:e.name})})})})},a=function(){return(0,r.jsxs)("header",{className:"flex flex-col lg:flex-row lg:items-center justify-between max-w-screen-xl mx-auto p-4 md:p-6",children:[(0,r.jsx)(o,{name:"diva.cards"}),(0,r.jsx)(c,{})]})}},7428:function(e,n,t){"use strict";var r=t(5893),l=(t(7294),t(9008));n.Z=function(e){return(0,r.jsxs)("main",{children:[(0,r.jsx)(l.default,{children:(0,r.jsx)("title",{children:e.pageTitle})}),e.children]})}},6071:function(e,n,t){"use strict";var r=t(3848),l=t(9448);n.default=void 0;var i=l(t(7294)),s=t(1689),c=t(2441),o=t(5749),a={};function u(e,n,t,r){if(e&&(0,s.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var l=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;a[n+"%"+t+(l?"%"+l:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),l=t&&t.asPath||"/",f=i.default.useMemo((function(){var n=(0,s.resolveHref)(l,e.href,!0),t=r(n,2),i=t[0],c=t[1];return{href:i,as:e.as?(0,s.resolveHref)(l,e.as):c||i}}),[l,e.href,e.as]),d=f.href,x=f.as,h=e.children,p=e.replace,m=e.shallow,v=e.scroll,j=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=i.Children.only(h),b=g&&"object"===typeof g&&g.ref,k=(0,o.useIntersection)({rootMargin:"200px"}),y=r(k,2),N=y[0],w=y[1],E=i.default.useCallback((function(e){N(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,N]);(0,i.useEffect)((function(){var e=w&&n&&(0,s.isLocalURL)(d),r="undefined"!==typeof j?j:t&&t.locale,l=a[d+"%"+x+(r?"%"+r:"")];e&&!l&&u(t,d,x,{locale:r})}),[x,d,w,j,n,t]);var _={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,l,i,c,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[l?"replace":"push"](t,r,{shallow:i,locale:o,scroll:c}))}(e,t,d,x,p,m,v,j)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(t,d,x,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var L="undefined"!==typeof j?j:t&&t.locale,C=t&&t.isLocaleDomain&&(0,s.getDomainLocale)(x,L,t&&t.locales,t&&t.domainLocales);_.href=C||(0,s.addBasePath)((0,s.addLocale)(x,L,t&&t.defaultLocale))}return i.default.cloneElement(g,_)};n.default=f},5749:function(e,n,t){"use strict";var r=t(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,o=(0,l.useRef)(),a=(0,l.useState)(!1),u=r(a,2),f=u[0],d=u[1],x=(0,l.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:l,elements:r}),t}(t),l=r.id,i=r.observer,s=r.elements;return s.set(e,n),i.observe(e),function(){s.delete(e),i.unobserve(e),0===s.size&&(i.disconnect(),c.delete(l))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,l.useEffect)((function(){if(!s&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[x,f]};var l=t(7294),i=t(8391),s="undefined"!==typeof IntersectionObserver;var c=new Map},9435:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(5893),l=t(7428),i=t(8530),s=t(5553);function c(){return(0,r.jsxs)(l.Z,{pageTitle:"diva cards",children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("main",{children:(0,r.jsx)("section",{className:"flex place-content-center",children:(0,r.jsx)("h3",{className:"text-xl",children:"FORGE TODO"})})}),(0,r.jsx)(s.Z,{})]})}},8133:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forge",function(){return t(9435)}])},1664:function(e,n,t){e.exports=t(6071)}},function(e){e.O(0,[774,888,179],(function(){return n=8133,e(e.s=n);var n}));var n=e.O();_N_E=n}]);