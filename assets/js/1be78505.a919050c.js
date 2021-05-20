(window.webpackJsonp=window.webpackJsonp||[]).push([[6,23],{113:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(101),i=t(98);a.default=function(){return c.a.createElement(l.a,{title:"Page Not Found"},c.a.createElement("main",{className:"container margin-vert--xl"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--6 col--offset-3"},c.a.createElement("h1",{className:"hero__title"},c.a.createElement(i.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),c.a.createElement("p",null,c.a.createElement(i.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),c.a.createElement("p",null,c.a.createElement(i.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},93:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(100),i=t(16),o=t(27),s=t(101),r=t(3),d=t(96),b=t(97),m=t(117),u=t(121),p=t(122),h=t(120),f=t(99),E=t(111),O=t(123);var v=e=>c.a.createElement("svg",Object(r.a)({width:"20",height:"20",role:"img"},e),c.a.createElement("g",{fill:"#7a7a7a"},c.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),c.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),j=t(125),g=t(98),k=t(74),C=t.n(k);const N=(e,a)=>"link"===e.type?Object(b.isSamePath)(e.href,a):"category"===e.type&&e.items.some((e=>N(e,a)));function _({item:e,onItemClick:a,collapsible:t,activePath:l,...i}){const{items:o,label:s}=e,b=N(e,l),m=function(e){const a=Object(n.useRef)(e);return Object(n.useEffect)((()=>{a.current=e}),[e]),a.current}(b),[u,p]=Object(n.useState)((()=>!!t&&(!b&&e.collapsed))),h=Object(n.useRef)(null),[f,E]=Object(n.useState)(void 0),O=(e=!0)=>{var a;E(e?`${null===(a=h.current)||void 0===a?void 0:a.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{b&&!m&&u&&p(!1)}),[b,m,u]);const v=Object(n.useCallback)((e=>{e.preventDefault(),f||O(),setTimeout((()=>p((e=>!e))),100)}),[f]);return 0===o.length?null:c.a.createElement("li",{className:Object(d.a)("menu__list-item",{"menu__list-item--collapsed":u}),key:s},c.a.createElement("a",Object(r.a)({className:Object(d.a)("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&b,[C.a.menuLinkText]:!t}),onClick:t?v:void 0,href:t?"#!":void 0},i),s),c.a.createElement("ul",{className:"menu__list",ref:h,style:{height:f},onTransitionEnd:()=>{u||O(!1)}},o.map((e=>c.a.createElement(I,{tabIndex:u?"-1":"0",key:e.label,item:e,onItemClick:a,collapsible:t,activePath:l})))))}function y({item:e,onItemClick:a,activePath:t,collapsible:n,...l}){const{href:i,label:o}=e,s=N(e,t);return c.a.createElement("li",{className:"menu__list-item",key:o},c.a.createElement(f.a,Object(r.a)({className:Object(d.a)("menu__link",{"menu__link--active":s,[C.a.menuLinkExternal]:!Object(E.a)(i)}),to:i},Object(E.a)(i)&&{isNavLink:!0,exact:!0,onClick:a},l),o))}function I(e){switch(e.item.type){case"category":return c.a.createElement(_,e);case"link":default:return c.a.createElement(y,e)}}var T=function({path:e,sidebar:a,sidebarCollapsible:t=!0,onCollapse:l,isHidden:i}){const[o,s]=Object(n.useState)(!1),{navbar:{hideOnScroll:r},hideableSidebar:f}=Object(b.useThemeConfig)(),{isAnnouncementBarClosed:E}=Object(m.a)(),{scrollY:k}=Object(h.a)();Object(u.a)(o);const N=Object(p.a)();return Object(n.useEffect)((()=>{N===p.b.desktop&&s(!1)}),[N]),c.a.createElement("div",{className:Object(d.a)(C.a.sidebar,{[C.a.sidebarWithHideableNavbar]:r,[C.a.sidebarHidden]:i})},r&&c.a.createElement(O.a,{tabIndex:-1,className:C.a.sidebarLogo}),c.a.createElement("div",{className:Object(d.a)("menu","menu--responsive","thin-scrollbar",C.a.menu,{"menu--show":o,[C.a.menuWithAnnouncementBar]:!E&&0===k})},c.a.createElement("button",{"aria-label":o?Object(g.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(g.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{s(!o)}},o?c.a.createElement("span",{className:Object(d.a)(C.a.sidebarMenuIcon,C.a.sidebarMenuCloseIcon)},"\xd7"):c.a.createElement(j.a,{className:C.a.sidebarMenuIcon,height:24,width:24})),c.a.createElement("ul",{className:"menu__list"},a.map((a=>c.a.createElement(I,{key:a.label,item:a,onItemClick:e=>{e.target.blur(),s(!1)},collapsible:t,activePath:e}))))),f&&c.a.createElement("button",{type:"button",title:Object(g.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(g.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(d.a)("button button--secondary button--outline",C.a.collapseSidebarButton),onClick:l},c.a.createElement(v,{className:C.a.collapseSidebarButtonIcon})))},w=t(108),S=t(113),x=t(23),A=t(78),L=t.n(A);function B({currentDocRoute:e,versionMetadata:a,children:t}){var o,r;const{siteConfig:m,isClient:u}=Object(i.default)(),{pluginId:p,permalinkToSidebar:h,docsSidebars:f,version:E}=a,O=h[e.path],j=f[O],[k,C]=Object(n.useState)(!1),[N,_]=Object(n.useState)(!1),y=Object(n.useCallback)((()=>{N&&_(!1),C(!k)}),[N]);return c.a.createElement(s.a,{key:u,wrapperClassName:"main-docs-wrapper",searchMetadatas:{version:E,tag:Object(b.docVersionSearchTag)(p,E)}},c.a.createElement("div",{className:L.a.docPage},j&&c.a.createElement("div",{className:Object(d.a)(L.a.docSidebarContainer,{[L.a.docSidebarContainerHidden]:k}),onTransitionEnd:e=>{e.currentTarget.classList.contains(L.a.docSidebarContainer)&&k&&_(!0)},role:"complementary"},c.a.createElement(T,{key:O,sidebar:j,path:e.path,sidebarCollapsible:null===(o=null===(r=m.themeConfig)||void 0===r?void 0:r.sidebarCollapsible)||void 0===o||o,onCollapse:y,isHidden:N}),N&&c.a.createElement("div",{className:L.a.collapsedDocSidebar,title:Object(g.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(g.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:y,onClick:y},c.a.createElement(v,{className:L.a.expandSidebarButtonIcon}))),c.a.createElement("main",{className:Object(d.a)(L.a.docMainContainer,{[L.a.docMainContainerEnhanced]:k})},c.a.createElement("div",{className:Object(d.a)("container padding-vert--lg",L.a.docItemWrapper,{[L.a.docItemWrapperEnhanced]:k})},c.a.createElement(l.a,{components:w.a},t)))))}a.default=function(e){const{route:{routes:a},versionMetadata:t,location:n}=e,l=a.find((e=>Object(x.matchPath)(n.pathname,e)));return l?c.a.createElement(B,{currentDocRoute:l,versionMetadata:t},Object(o.a)(a)):c.a.createElement(S.default,e)}}}]);