(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});var n=a(0),r=a.n(n),i=a(155);t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))};var u="1098062062"},152:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},153:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),u=a.n(i),c=a(151),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(27);a.d(t,"waitForRouteChange",function(){return l.c});var s=a(152),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var f=a(38);a.d(t,"parsePath",function(){return f.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},154:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(160),r=a.n(n),i=a(161),u=a.n(i),c=new r.a(u.a),o=c.rhythm},155:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),u=a(158),c=a(153),o=a(159),l=a(154);t.a=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"3892401927",render:function(e){return i.a.createElement("div",{className:Object(u.a)("margin:0 auto;max-width:700px;padding:",Object(l.a)(2),";padding-top:",Object(l.a)(1.5),";")},i.a.createElement(o.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"My Blog"),i.a.createElement("link",{rel:"canonical",href:"#"}),">"),i.a.createElement(c.Link,{to:"/"},i.a.createElement("h3",{className:Object(u.a)("margin-bottom:",Object(l.a)(2),";display:inline-block;font-style:normal;")},e.site.siteMetadata.title)),i.a.createElement(c.Link,{to:"/about/",className:Object(u.a)("float:right;")},"About"),t)},data:n})}},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Pandas Eating Lots"}}}}},157:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),i=a(4),u=a.n(i),c=a(52),o=a(1),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-1db494c4521880eac0d4.js.map