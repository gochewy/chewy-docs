(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{104:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),l=t.n(n),r=t(96),i=t(99),s=t(56),c=t.n(s);function o({sidebar:e}){return 0===e.items.length?null:l.a.createElement("div",{className:Object(r.a)(c.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:c.a.sidebarItemTitle},e.title),l.a.createElement("ul",{className:c.a.sidebarItemList},e.items.map((e=>l.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},l.a.createElement(i.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))))))}},107:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(96),i=t(100),s=t(98),c=t(99),o=t(108),m=t(106),d=t(58),u=t.n(d),g=t(97);a.a=function(e){const a=function(){const{selectMessage:e}=Object(g.usePluralForm)();return a=>{const t=Math.ceil(a);return e(t,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}}(),{children:t,frontMatter:n,metadata:d,truncated:p,isBlogPostPage:E=!1}=e,{date:v,formattedDate:b,permalink:h,tags:f,readingTime:_}=d,{author:N,title:k,image:w,keywords:T}=n,L=n.author_url||n.authorURL,I=n.author_title||n.authorTitle,O=n.author_image_url||n.authorImageURL;return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{keywords:T,image:w}),l.a.createElement("article",{className:E?void 0:"margin-bottom--xl"},(()=>{const e=E?"h1":"h2";return l.a.createElement("header",null,l.a.createElement(e,{className:Object(r.a)("margin-bottom--sm",u.a.blogPostTitle)},E?k:l.a.createElement(c.a,{to:h},k)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:v,className:u.a.blogPostDate},b,_&&l.a.createElement(l.a.Fragment,null," \xb7 ",a(_)))),l.a.createElement("div",{className:"avatar margin-vert--md"},O&&l.a.createElement(c.a,{className:"avatar__photo-link avatar__photo",href:L},l.a.createElement("img",{src:O,alt:N})),l.a.createElement("div",{className:"avatar__intro"},N&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement(c.a,{href:L},N)),l.a.createElement("small",{className:"avatar__subtitle"},I)))))})(),l.a.createElement("div",{className:"markdown"},l.a.createElement(i.a,{components:o.a},t)),(f.length>0||p)&&l.a.createElement("footer",{className:"row margin-vert--lg"},f.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),f.map((({label:e,permalink:a})=>l.a.createElement(c.a,{key:a,className:"margin-horiz--sm",to:a},e)))),p&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(c.a,{to:d.permalink,"aria-label":`Read more about ${k}`},l.a.createElement("strong",null,l.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},109:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(96);var i=function(e,a,t){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),a=e.find((e=>{const{top:a}=e.getBoundingClientRect();return a>=t}));if(a){if(a.getBoundingClientRect().top>=t){const t=e[e.indexOf(a)-1];return null!=t?t:a}return a}return e[e.length-1]}();if(n){let t=0,i=!1;const s=document.getElementsByClassName(e);for(;t<s.length&&!i;){const e=s[t],{href:c}=e,o=decodeURIComponent(c.substring(c.indexOf("#")+1));n.id===o&&(l&&l.classList.remove(a),e.classList.add(a),r(e),i=!0),t+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},s=t(57),c=t.n(s);const o="table-of-contents__link";function m({toc:e,isChild:a}){return e.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},e.map((e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:`#${e.id}`,className:o,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(m,{isChild:!0,toc:e.children}))))):null}a.a=function({toc:e}){return i(o,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(c.a.tableOfContents,"thin-scrollbar")},l.a.createElement(m,{toc:e}))}},112:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(0),l=t.n(n),r=t(98),i=t(3),s=t(96),c=t(59),o=t.n(c);var m=({className:e,...a})=>l.a.createElement("svg",Object(i.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(s.a)(o.a.iconEdit,e),"aria-label":"Edit page"},a),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function d({editUrl:e}){return l.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(m,null),l.a.createElement(r.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},95:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(101),i=t(107),s=t(98),c=t(99);var o=function(e){const{nextItem:a,prevItem:t}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":Object(s.b)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.a.createElement("div",{className:"pagination-nav__item"},t&&l.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(s.a,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&l.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(s.a,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},m=t(104),d=t(109),u=t(112);a.default=function(e){const{content:a,sidebar:t}=e,{frontMatter:n,metadata:s}=a,{title:c,description:g,nextItem:p,prevItem:E,editUrl:v}=s,{hide_table_of_contents:b}=n;return l.a.createElement(r.a,{title:c,description:g,wrapperClassName:"blog-wrapper"},a&&l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(m.a,{sidebar:t})),l.a.createElement("main",{className:"col col--7"},l.a.createElement(i.a,{frontMatter:n,metadata:s,isBlogPostPage:!0},l.a.createElement(a,null)),l.a.createElement("div",null,v&&l.a.createElement(u.a,{editUrl:v})),(p||E)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement(o,{nextItem:p,prevItem:E}))),!b&&a.toc&&l.a.createElement("div",{className:"col col--2"},l.a.createElement(d.a,{toc:a.toc})))))}}}]);