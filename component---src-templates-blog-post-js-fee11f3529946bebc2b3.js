(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});var n=a(0),r=a.n(n),i=a(158);t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))};var o="1098062062"},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(148),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(151),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(28);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},154:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(168),r=a.n(n),i=a(169),o=a.n(i);o.a.overrideStyles=function(e,t){e.rhythm;return{h2:{fontSize:"1.3rem"}}};var l=new r.a(o.a),c=l.rhythm},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Hannah Werman",description:"Front End Developer | Blockchain Enthusiast | Nomad"}}}}},156:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(48),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),o=a(153),l=a(149),c=a(167),s=a(154),u=a(6),m=a.n(u),d=a(174),h=a.n(d),g=a(170),p=a.n(g),f=a(171),y=a.n(f),E=a(173),b=a.n(E),w=a(172),v=a.n(w),k=a(175),x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={right:!1},t.toggleDrawer=function(e,a){return function(){var n;t.setState(((n={})[e]=a,n))}},t}return m()(t,e),t.prototype.render=function(){var e=this.props.classes,t=i.a.createElement("div",null,i.a.createElement(p.a,{className:Object(o.a)("width:20vw;font-family:inherit;@media (max-width:415px){width:34vw;}")},i.a.createElement(l.Link,{to:"/about/",style:{textDecoration:"none",marginRight:"0",fontFamily:"inherit"}},i.a.createElement(y.a,{button:!0,key:"about",style:{fontFamily:"inherit"}},i.a.createElement(v.a,{primary:"About",style:{fontFamily:"inherit"}}))),i.a.createElement(l.Link,{to:"/blog/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(y.a,{button:!0,key:"blog"},i.a.createElement(v.a,{primary:"Blog"}))),i.a.createElement(l.Link,{to:"/portfolio/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(y.a,{button:!0,key:"portfolio"},i.a.createElement(v.a,{primary:"Portfolio"}))),i.a.createElement(l.Link,{to:"/skills/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(y.a,{button:!0,key:"skills"},i.a.createElement(v.a,{primary:"Skills"}))),i.a.createElement(l.Link,{to:"/contact/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(y.a,{button:!0,key:"hire"},i.a.createElement(v.a,{primary:"Hire"})))));return i.a.createElement("div",null,i.a.createElement(b.a,{onClick:this.toggleDrawer("right",!0)}),i.a.createElement(h.a,{anchor:"right",disableBackdropTransition:!0,open:this.state.right,onClose:this.toggleDrawer("right",!1),onOpen:this.toggleDrawer("right",!0),BackdropProps:{classes:{root:e.drawer}},onBackdropClick:this.toggleDrawer("right",!1)},i.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("right",!1),onKeyDown:this.toggleDrawer("right",!1)},t)))},t}(i.a.Component),j=Object(k.withStyles)({drawer:{backgroundColor:"transparent",padding:"5vh",fontFamily:"inherit"}})(x);t.a=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(l.StaticQuery,{query:"2409360945",render:function(e){return i.a.createElement("div",{className:Object(o.a)("margin:0 auto;max-width:850px;padding:",Object(s.a)(2),";padding-top:",Object(s.a)(1.5),";")},i.a.createElement(c.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Hannah Werman"),i.a.createElement("link",{rel:"canonical",href:"#"}),">"),i.a.createElement("div",{className:Object(o.a)("float:right;max-width:35%;margin-top:1.5vh;")},i.a.createElement(j,null)),i.a.createElement(l.Link,{to:"/",className:Object(o.a)("margin-right:0;")},i.a.createElement("h1",{className:Object(o.a)("font-size:2rem;@media (max-width:415px){font-size:1.4rem;width:80%;margin-top:1vh;}")},e.site.siteMetadata.title),i.a.createElement("h4",{className:Object(o.a)("margin-bottom:",Object(s.a)(1.5),";display:inline-block;font-style:normal;font-size:1rem;@media (max-width:415px){font-size:11px;}")},e.site.siteMetadata.description)),t)},data:n}),i.a.createElement("footer",{className:Object(o.a)("max-width:850px;margin-left:auto;margin-right:auto;padding:0 ",Object(s.a)(2)," ",Object(s.a)(.5)," ",Object(s.a)(2),";font-size:12px;text-align:right;")},"Built with ♥ using React, Gatsby & GraphQL."))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-fee11f3529946bebc2b3.js.map