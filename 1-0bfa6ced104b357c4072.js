(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var r=a(0),n=a.n(r),o=a(4),i=a.n(o),l=a(148),d=a.n(l);a.d(t,"Link",function(){return d.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(152),s=a.n(c);a.d(t,"PageRenderer",function(){return s.a});var u=a(28);a.d(t,"parsePath",function(){return u.a});var p=n.a.createContext({}),m=function(e){return n.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,a){var r;e.exports=(r=a(160))&&r.default||r},154:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a(168),n=a.n(r),o=a(169),i=a.n(o);i.a.overrideStyles=function(e,t){e.rhythm;return{h2:{fontSize:"1.3rem"}}};var l=new n.a(i.a),d=l.rhythm},158:function(e,t,a){"use strict";var r=a(159),n=a(0),o=a.n(n),i=a(153),l=a(150),d=a(167),c=a(154),s=a(6),u=a.n(s),p=a(174),m=a.n(p),h=a(170),f=a.n(h),b=a(171),y=a.n(b),g=a(173),x=a.n(g),v=a(172),w=a.n(v),k=a(175),E=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={right:!1},t.toggleDrawer=function(e,a){return function(){var r;t.setState(((r={})[e]=a,r))}},t}return u()(t,e),t.prototype.render=function(){var e=this.props.classes,t=o.a.createElement("div",null,o.a.createElement(f.a,{className:Object(i.a)("width:20vw;font-family:inherit;@media (max-width:415px){width:34vw;}")},o.a.createElement(l.Link,{to:"/about/",style:{textDecoration:"none",marginRight:"0",fontFamily:"inherit"}},o.a.createElement(y.a,{button:!0,key:"about",style:{fontFamily:"inherit"}},o.a.createElement(w.a,{primary:"About",style:{fontFamily:"inherit"}}))),o.a.createElement(l.Link,{to:"/blog/",style:{textDecoration:"none",marginRight:"0"}},o.a.createElement(y.a,{button:!0,key:"blog"},o.a.createElement(w.a,{primary:"Blog"}))),o.a.createElement(l.Link,{to:"/portfolio/",style:{textDecoration:"none",marginRight:"0"}},o.a.createElement(y.a,{button:!0,key:"portfolio"},o.a.createElement(w.a,{primary:"Portfolio"}))),o.a.createElement(l.Link,{to:"/skills/",style:{textDecoration:"none",marginRight:"0"}},o.a.createElement(y.a,{button:!0,key:"skills"},o.a.createElement(w.a,{primary:"Skills"}))),o.a.createElement(l.Link,{to:"/contact/",style:{textDecoration:"none",marginRight:"0"}},o.a.createElement(y.a,{button:!0,key:"hire"},o.a.createElement(w.a,{primary:"Hire"})))));return o.a.createElement("div",null,o.a.createElement(x.a,{onClick:this.toggleDrawer("right",!0)}),o.a.createElement(m.a,{anchor:"right",disableBackdropTransition:!0,open:this.state.right,onClose:this.toggleDrawer("right",!1),onOpen:this.toggleDrawer("right",!0),BackdropProps:{classes:{root:e.drawer}},onBackdropClick:this.toggleDrawer("right",!1)},o.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("right",!1),onKeyDown:this.toggleDrawer("right",!1)},t)))},t}(o.a.Component),C=Object(k.withStyles)({drawer:{backgroundColor:"transparent",padding:"5vh",fontFamily:"inherit"}})(E);t.a=function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement(l.StaticQuery,{query:"2409360945",render:function(e){return o.a.createElement("div",{className:Object(i.a)("margin:0 auto;max-width:850px;padding:",Object(c.a)(2),";padding-top:",Object(c.a)(1.5),";")},o.a.createElement(d.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Hannah Werman"),o.a.createElement("link",{rel:"canonical",href:"#"}),">"),o.a.createElement("div",{className:Object(i.a)("float:right;max-width:35%;margin-top:1.5vh;")},o.a.createElement(C,null)),o.a.createElement(l.Link,{to:"/",className:Object(i.a)("margin-right:0;")},o.a.createElement("h1",{className:Object(i.a)("font-size:2rem;@media (max-width:415px){font-size:1.4rem;width:80%;margin-top:1vh;}")},e.site.siteMetadata.title),o.a.createElement("h4",{className:Object(i.a)("margin-bottom:",Object(c.a)(1.5),";display:inline-block;font-style:normal;font-size:1rem;@media (max-width:415px){font-size:11px;}")},e.site.siteMetadata.description)),t)},data:r}),o.a.createElement("script",{id:"mcjs",dangerouslySetInnerHTML:{__html:'\n    !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/3d80c9e4ae1319f49d5837bab/b4fbbff1016028e6513ffff4b.js")\n    '}}),o.a.createElement("footer",{className:Object(i.a)("max-width:850px;margin-left:auto;margin-right:auto;padding:0 ",Object(c.a)(2)," ",Object(c.a)(.5)," ",Object(c.a)(2),";font-size:12px;text-align:right;")},"Built with ♥ using React, Gatsby & GraphQL."))}},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Hannah Werman",description:"Front End Developer | Blockchain Enthusiast | Nomad"}}}}},160:function(e,t,a){"use strict";a.r(t);a(29);var r=a(0),n=a.n(r),o=a(4),i=a.n(o),l=a(49),d=a(2),c=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},187:function(e,t,a){},227:function(e,t,a){"use strict";var r=a(27);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=r(a(352))},352:function(e,t,a){"use strict";var r=a(27);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=r(a(47)),o=r(a(151)),i=r(a(149)),l=r(a(0)),d=(r(a(4)),r(a(161))),c=(a(155),r(a(165))),s=a(215),u=r(a(217)),p=a(178),m=function(e){return{root:(0,i.default)({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,s.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,s.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,s.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},flat:{},flatPrimary:{},flatSecondary:{},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,s.fade)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,s.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,s.fade)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,s.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},raised:{},raisedPrimary:{},raisedSecondary:{},fab:{borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]}},extendedFab:{borderRadius:24,padding:"0 16px",width:"auto",minWidth:48,height:48},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},mini:{width:40,height:40},sizeSmall:{padding:"4px 8px",minWidth:64,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}};function h(e){var t,a=e.children,r=e.classes,c=e.className,s=e.color,m=e.disabled,h=e.disableFocusRipple,f=e.focusVisibleClassName,b=e.fullWidth,y=e.mini,g=e.size,x=e.variant,v=(0,o.default)(e,["children","classes","className","color","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","mini","size","variant"]),w="fab"===x||"extendedFab"===x,k="contained"===x||"raised"===x,E="text"===x||"flat"===x,C=(0,d.default)(r.root,(t={},(0,n.default)(t,r.fab,w),(0,n.default)(t,r.mini,w&&y),(0,n.default)(t,r.extendedFab,"extendedFab"===x),(0,n.default)(t,r.text,E),(0,n.default)(t,r.textPrimary,E&&"primary"===s),(0,n.default)(t,r.textSecondary,E&&"secondary"===s),(0,n.default)(t,r.flat,E),(0,n.default)(t,r.flatPrimary,E&&"primary"===s),(0,n.default)(t,r.flatSecondary,E&&"secondary"===s),(0,n.default)(t,r.contained,k||w),(0,n.default)(t,r.containedPrimary,(k||w)&&"primary"===s),(0,n.default)(t,r.containedSecondary,(k||w)&&"secondary"===s),(0,n.default)(t,r.raised,k||w),(0,n.default)(t,r.raisedPrimary,(k||w)&&"primary"===s),(0,n.default)(t,r.raisedSecondary,(k||w)&&"secondary"===s),(0,n.default)(t,r.outlined,"outlined"===x),(0,n.default)(t,r.outlinedPrimary,"outlined"===x&&"primary"===s),(0,n.default)(t,r.outlinedSecondary,"outlined"===x&&"secondary"===s),(0,n.default)(t,r["size".concat((0,p.capitalize)(g))],"medium"!==g),(0,n.default)(t,r.disabled,m),(0,n.default)(t,r.fullWidth,b),(0,n.default)(t,r.colorInherit,"inherit"===s),t),c);return l.default.createElement(u.default,(0,i.default)({className:C,disabled:m,focusRipple:!h,focusVisibleClassName:(0,d.default)(r.focusVisible,f)},v),l.default.createElement("span",{className:r.label},a))}t.styles=m,h.defaultProps={color:"default",component:"button",disabled:!1,disableFocusRipple:!1,fullWidth:!1,mini:!1,size:"medium",type:"button",variant:"text"};var f=(0,c.default)(m,{name:"MuiButton"})(h);t.default=f}}]);
//# sourceMappingURL=1-0bfa6ced104b357c4072.js.map