(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return s});var n=a(0),r=a.n(n),i=a(150),o=a(153),c=a(154),l=a(158);t.default=function(e){var t=e.data;return console.log(t),r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement(i.Link,{to:t.fields.slug,className:Object(o.a)("text-decoration:none;color:inherit;")},r.a.createElement("h3",{className:Object(o.a)("margin-bottom:",Object(c.a)(.25),";")},t.frontmatter.title," ",r.a.createElement("span",{className:Object(o.a)("color:#bbb;")},"— ",t.frontmatter.date)),r.a.createElement("p",null,t.excerpt)))})))};var s="2344041108"},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(148),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(152),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(28);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},154:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(168),r=a.n(n),i=a(169),o=a.n(i);o.a.overrideStyles=function(e,t){e.rhythm;return{h2:{fontSize:"1.3rem"}}};var c=new r.a(o.a),l=c.rhythm},158:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),o=a(153),c=a(150),l=a(167),s=a(154),m=a(6),u=a.n(m),d=a(174),h=a.n(d),p=a(170),f=a.n(p),g=a(171),y=a.n(g),b=a(173),E=a.n(b),w=a(172),v=a.n(w),k=a(175),x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={right:!1},t.toggleDrawer=function(e,a){return function(){var n;t.setState(((n={})[e]=a,n))}},t}return u()(t,e),t.prototype.render=function(){var e=this.props.classes,t=i.a.createElement("div",null,i.a.createElement(f.a,{className:Object(o.a)("width:20vw;font-family:inherit;@media (max-width:415px){width:34vw;}")},i.a.createElement(c.Link,{to:"/about/",style:{textDecoration:"none",marginRight:"0",fontFamily:"inherit"}},i.a.createElement(y.a,{button:!0,key:"about",style:{fontFamily:"inherit"}},i.a.createElement(v.a,{primary:"About",style:{fontFamily:"inherit"}}))),i.a.createElement(c.Link,{to:"/blog/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(y.a,{button:!0,key:"blog"},i.a.createElement(v.a,{primary:"Blog"}))),i.a.createElement(c.Link,{to:"/portfolio/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(y.a,{button:!0,key:"portfolio"},i.a.createElement(v.a,{primary:"Portfolio"}))),i.a.createElement(c.Link,{to:"/skills/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(y.a,{button:!0,key:"skills"},i.a.createElement(v.a,{primary:"Skills"}))),i.a.createElement(c.Link,{to:"/contact/",style:{textDecoration:"none",marginRight:"0"}},i.a.createElement(y.a,{button:!0,key:"hire"},i.a.createElement(v.a,{primary:"Hire"})))));return i.a.createElement("div",null,i.a.createElement(E.a,{onClick:this.toggleDrawer("right",!0)}),i.a.createElement(h.a,{anchor:"right",disableBackdropTransition:!0,open:this.state.right,onClose:this.toggleDrawer("right",!1),onOpen:this.toggleDrawer("right",!0),BackdropProps:{classes:{root:e.drawer}},onBackdropClick:this.toggleDrawer("right",!1)},i.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("right",!1),onKeyDown:this.toggleDrawer("right",!1)},t)))},t}(i.a.Component),j=Object(k.withStyles)({drawer:{backgroundColor:"transparent",padding:"5vh",fontFamily:"inherit"}})(x);t.a=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(c.StaticQuery,{query:"2409360945",render:function(e){return i.a.createElement("div",{className:Object(o.a)("margin:0 auto;max-width:850px;padding:",Object(s.a)(2),";padding-top:",Object(s.a)(1.5),";")},i.a.createElement(l.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Hannah Werman"),i.a.createElement("link",{rel:"canonical",href:"#"}),">"),i.a.createElement("div",{className:Object(o.a)("float:right;max-width:35%;margin-top:1.5vh;")},i.a.createElement(j,null)),i.a.createElement(c.Link,{to:"/",className:Object(o.a)("margin-right:0;")},i.a.createElement("h1",{className:Object(o.a)("font-size:2rem;@media (max-width:415px){font-size:1.4rem;width:80%;margin-top:1vh;}")},e.site.siteMetadata.title),i.a.createElement("h4",{className:Object(o.a)("margin-bottom:",Object(s.a)(1.5),";display:inline-block;font-style:normal;font-size:1rem;@media (max-width:415px){font-size:11px;}")},e.site.siteMetadata.description)),t)},data:n}),i.a.createElement("script",{id:"mcjs",dangerouslySetInnerHTML:{__html:'\n    !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/3d80c9e4ae1319f49d5837bab/b4fbbff1016028e6513ffff4b.js")\n    '}}),i.a.createElement("footer",{className:Object(o.a)("max-width:850px;margin-left:auto;margin-right:auto;padding:0 ",Object(s.a)(2)," ",Object(s.a)(.5)," ",Object(s.a)(2),";font-size:12px;text-align:right;")},"Built with ♥ using React, Gatsby & GraphQL."))}},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Hannah Werman",description:"Front End Developer | Blockchain Enthusiast | Nomad"}}}}},160:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(49),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-index-1-js-cec57b22d61b66496cc5.js.map