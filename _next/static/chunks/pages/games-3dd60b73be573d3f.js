(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{5337:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games",function(){return l(5009)}])},6029:function(e,t,l){"use strict";l.d(t,{Z:function(){return i}});var s=l(5893),n=l(1664),r=l.n(n);let a=e=>e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(" - "," ").replace(/ /g,"-").replace(/[+-]/g,"-").replace(/[^a-z0-9-]/g,""),c=e=>"/categories/".concat(a(e));var i=e=>{let{categories:t}=e;return(0,s.jsx)("div",{className:"flex flex-row gap-1",children:t.map(e=>(0,s.jsx)(r(),{className:"px-2 py-1 bg-slate-900 text-white rounded font-bold text-sm",href:c(e),children:e},e))})}},2386:function(e,t,l){"use strict";l.d(t,{Z:function(){return g}});var s=l(5893),n=l(9417),r=l(3024),a=l(7814),c=l(4184),i=l.n(c),o=l(5675),x=l.n(o),d=l(1664),m=l.n(d),h=l(4007);let f="md:max-w-[360px]",u=[{text:"Blog",href:"/"},{text:"About",href:"/about-me"},{text:"Apps & Tools",href:"/apps-tools"},{text:"Game Jams",href:"/game-jams"},{text:"Games",href:"/games"},{text:"Libgdx Cookbook",href:"/libgdx-cross-platform-game-development-cookbook"}],p=[{icon:r.pUg,href:"https://github.com/dsaltares",label:"Github profile"},{icon:r.D9H,href:"https://www.linkedin.com/in/davidsaltares/",label:"Linkedin profile"},{icon:r.sd1,href:"https://twitter.com/dsaltares",label:"Twitter profile"},{icon:n.TwV,href:"https://saltares.com/index.xml",label:"RSS feed"},{icon:r.kyk,href:"https://fosstodon.org/@dsaltares",rel:"me"}];var j=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("aside",{className:i()(f,"bg-primary px-10 py-10 text-white text-xl md:fixed md:top-0 md:left-0 md:h-full flex flex-col justify-end items-center md:items-start"),children:[(0,s.jsx)("div",{children:(0,s.jsxs)(m(),{href:"/",children:[(0,s.jsx)("div",{className:"mb-5",children:(0,s.jsx)(x(),{className:"rounded-full",src:"/img/profile.webp",width:200,height:200,alt:"profile picture"})}),(0,s.jsx)("h1",{className:"text-white font-bold text-4xl leading-10",children:h.Z.title})]})}),(0,s.jsx)("p",{className:"text-contentLight text-2xl mb-5 leading-9 text-center md:text-left",children:h.Z.description}),(0,s.jsx)("div",{className:"mb-5 font-base",dangerouslySetInnerHTML:{__html:"<button class=\"ml-onclick-form\" onclick=\"ml('show', '646AL4', true)\">✉️ Subscribe</button>"}}),(0,s.jsx)("nav",{children:(0,s.jsx)("ul",{className:"mb-5 flex flex-col items-center md:items-start list-none pl-0",children:u.map(e=>(0,s.jsx)("li",{className:"leading-7",children:(0,s.jsx)(m(),{href:e.href,children:e.text})},e.href))})}),(0,s.jsx)("ul",{className:"mb-5 list-none pl-0",children:p.map(e=>(0,s.jsx)("li",{className:"inline",children:(0,s.jsx)(m(),{"aria-label":e.label,rel:e.rel,href:e.href,children:(0,s.jsx)(a.G,{className:"text-4xl mr-2",icon:e.icon})})},e.href))}),(0,s.jsx)("p",{className:"text-contentLight text-lg",children:"\xa9 ".concat(new Date().getFullYear()," ").concat(h.Z.author,".")})]}),(0,s.jsx)("div",{className:i()(f,"w-full hidden md:block flex-grow-0 flex-shrink-0")})]}),g=e=>{let{children:t}=e;return(0,s.jsxs)("div",{className:"flex flex-col md:flex-row font-sans text-xl w-full",children:[(0,s.jsx)(j,{}),(0,s.jsx)("div",{className:"flex flex-col main-content",children:(0,s.jsx)("main",{className:"w-full max-w-[720px] pr-4 py-10 pl-5 md:py-20 md:pl-20",children:t})})]})}},7929:function(e,t,l){"use strict";l.d(t,{Z:function(){return f}});var s=l(5893),n=l(9008),r=l.n(n),a=l(4007),c=l(2386),i=l(1664),o=l.n(i),x=l(5702),d=l(6029),m=e=>{let{post:t}=e;return(0,s.jsxs)("li",{className:"flex flex-row flex-wrap",children:[(0,s.jsx)(o(),{className:"text-contentLink",href:"/".concat(t.slug),children:t.title}),t.categories.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{children:"\xa0\xb7\xa0"}),(0,s.jsx)(d.Z,{categories:t.categories})]}),(0,s.jsx)("span",{children:"\xa0\xb7\xa0"}),(0,s.jsx)("span",{className:"text-content",children:"".concat((0,x.Z)(t.date))})]})},h=e=>{let{posts:t}=e;return(0,s.jsx)("ul",{className:"flex flex-col gap-3",children:t.map(e=>(0,s.jsx)(m,{post:e},e.slug))})},f=e=>{let{title:t,posts:l}=e;return(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:"".concat(t," \xb7 ").concat(a.Z.title)})}),(0,s.jsx)("h1",{className:"mb-2 text-primary text-4xl font-bold ",children:t}),(0,s.jsx)(h,{posts:l})]})}},5702:function(e,t,l){"use strict";var s=l(2167);t.Z=e=>(0,s.Z)(new Date(e),"MMM d yyy")},5009:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSG:function(){return r}});var s=l(5893),n=l(7929),r=!0;t.default=e=>{let{posts:t}=e;return(0,s.jsx)(n.Z,{title:"Games",posts:t})}}},function(e){e.O(0,[976,948,252,167,774,888,179],function(){return e(e.s=5337)}),_N_E=e.O()}]);