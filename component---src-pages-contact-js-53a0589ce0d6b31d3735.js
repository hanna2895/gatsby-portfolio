(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(164);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{class:"container animated fadeInUp"},r.a.createElement("div",{class:"hire-content"},r.a.createElement("h1",null,"Let's talk about ",r.a.createElement("br",null),"what we can build together."),r.a.createElement("h3",null,"Every business is unique, and that’s why I’m excited to work with you to create a customized package so you get exactly what you need to take your business to the next level."),r.a.createElement("h3",null,"Services I Offer:"),r.a.createElement("ul",{class:"services"},r.a.createElement("li",null,"Website and app design & maintenance"),r.a.createElement("li",null,"Email marketing strategy and automation"),r.a.createElement("li",null,"Ghostwriting and content creation"),r.a.createElement("li",null,"Search engine optimization (SEO)"),r.a.createElement("li",null,"Social media management")),r.a.createElement("a",{href:"https://calendly.com/hannah_werman/30min/",class:"btn btn-outline-dark btn-lg"},"Schedule a FREE consultation!"),r.a.createElement("h3",{style:{marginTop:"5vh"}},"Available Packages:"),r.a.createElement("ul",{class:"services"},r.a.createElement("li",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Starter: 10 hours for $350"),r.a.createElement("br",null),"Basic site updates (basic redesign, new page or feature, SEO optimization, ad hoc site management, etc.)"),r.a.createElement("li",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Intermediate: 20 hours for $650"),r.a.createElement("br",null),"Adding a new complex feature, upgrading your e-commerce store, content management, full site redesign, etc."),r.a.createElement("li",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Advanced: 40 hours for $1250"),r.a.createElement("br",null),"Building a new WordPress site or web app from scratch, content management, marketing automation, rebranding, etc."),r.a.createElement("li",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Ghostwriting: $60/1000 words"),r.a.createElement("br",null),"Topics include anything travel, web development, blockchain, tech, or marketing-related.")),r.a.createElement("h3",{style:{marginTop:"5vh"}},"Need More?"),r.a.createElement("ul",{class:"services"},r.a.createElement("li",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Busy Solopreneur Package: Hourly, as needed"),r.a.createElement("br",null),'"Hannah, please just take over my website! I don\'t have time to write good content / manage my web presence anymore because my business is growing too quickly!"'),r.a.createElement("li",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Build Me a Custom App"),r.a.createElement("br",null),"Let's talk about what your business goals are and create a customized package that works for you.")))))}},156:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(155),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(27);a.d(t,"waitForRouteChange",function(){return s.c});var u=a(158),m=a.n(u);a.d(t,"PageRenderer",function(){return m.a});var d=a(39);a.d(t,"parsePath",function(){return d.a});var h=r.a.createContext({}),g=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},158:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},161:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(174),r=a.n(n),i=a(175),l=a.n(i);l.a.overrideStyles=function(e,t){e.rhythm;return{h2:{fontSize:"1.3rem"}}};var o=new r.a(l.a),c=o.rhythm},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Hannah Werman",description:"Front End Developer | Blockchain Enthusiast | Nomad"}}}}},163:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(54),c=a(1),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},164:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),l=a(160),o=a(156),c=a(173),s=a(161),u=a(8),m=a.n(u),d=a(180),h=a.n(d),g=a(176),p=a.n(g),E=a(177),f=a.n(E),y=a(179),b=a.n(y),w=a(178),v=a.n(w),k=a(181),x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={right:!1},t.toggleDrawer=function(e,a){return function(){var n;t.setState(((n={})[e]=a,n))}},t}return m()(t,e),t.prototype.render=function(){var e=this.props.classes,t=i.a.createElement("div",null,i.a.createElement(p.a,{className:Object(l.a)("width:20vw;@media (max-width:415px){width:32vw;}")},i.a.createElement(o.Link,{to:"/about/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(f.a,{button:!0,key:"about"},i.a.createElement(v.a,{primary:"About"}))),i.a.createElement(o.Link,{to:"/blog/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(f.a,{button:!0,key:"blog"},i.a.createElement(v.a,{primary:"Blog"}))),i.a.createElement(o.Link,{to:"/portfolio/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(f.a,{button:!0,key:"portfolio"},i.a.createElement(v.a,{primary:"Portfolio"}))),i.a.createElement(o.Link,{to:"/skills/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(f.a,{button:!0,key:"skills"},i.a.createElement(v.a,{primary:"Skills"}))),i.a.createElement(o.Link,{to:"/contact/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(f.a,{button:!0,key:"hire"},i.a.createElement(v.a,{primary:"Hire"})))));return i.a.createElement("div",null,i.a.createElement(b.a,{onClick:this.toggleDrawer("right",!0)}),i.a.createElement(h.a,{anchor:"right",disableBackdropTransition:!0,open:this.state.right,onClose:this.toggleDrawer("right",!1),onOpen:this.toggleDrawer("right",!0),BackdropProps:{classes:{root:e.drawer}},onBackdropClick:this.toggleDrawer("right",!1)},i.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("right",!1),onKeyDown:this.toggleDrawer("right",!1)},t)))},t}(i.a.Component),O=Object(k.withStyles)({drawer:{backgroundColor:"transparent",padding:"5vh"}})(x);t.a=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(o.StaticQuery,{query:"2409360945",render:function(e){return i.a.createElement("div",{className:Object(l.a)("margin:0 auto;max-width:850px;padding:",Object(s.a)(2),";padding-top:",Object(s.a)(1.5),";")},i.a.createElement(c.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Hannah Werman"),i.a.createElement("link",{rel:"canonical",href:"#"}),">"),i.a.createElement("div",{className:Object(l.a)("float:right;max-width:35%;margin-top:1.5vh;")},i.a.createElement(O,null)),i.a.createElement(o.Link,{to:"/",className:Object(l.a)("margin-right:0;")},i.a.createElement("h1",{className:Object(l.a)("font-size:2rem;@media (max-width:415px){font-size:1.5rem;width:80%;margin-top:1vh;}")},e.site.siteMetadata.title),i.a.createElement("h4",{className:Object(l.a)("margin-bottom:",Object(s.a)(1.5),";display:inline-block;font-style:normal;font-size:1rem;margin-top:1rem;@media (max-width:415px){font-size:11px;}")},e.site.siteMetadata.description)),t)},data:n}),i.a.createElement("footer",{className:Object(l.a)("max-width:850px;margin-left:auto;margin-right:auto;padding:0 ",Object(s.a)(2)," ",Object(s.a)(.5)," ",Object(s.a)(2),";font-size:12px;text-align:right;")},"Built with ♥ using React, Gatsby & GraphQL."))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-53a0589ce0d6b31d3735.js.map