(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9iNg":function(e,a,t){t("a1Th"),t("Btvt"),t("pIFo");e.exports={Slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},lqd7:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("Bl7J"),c=t("vrFN"),o=t("ok1R"),i=t("rhny"),s=(t("2Spj"),t("wx14")),u=t("zLVn"),d=t("JX7q"),p=t("dI71"),m=t("TSYQ"),b=t.n(m),g=t("33Jr"),f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(d.a)(t)),t}Object(p.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],n=e.block,r=e.className,c=e.close,o=e.cssModule,i=e.color,d=e.outline,p=e.size,m=e.tag,f=e.innerRef,v=Object(u.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&void 0===v.children&&(v.children=l.a.createElement("span",{"aria-hidden":!0},"×"));var E="btn"+(d?"-outline":"")+"-"+i,h=Object(g.e)(b()(r,{close:c},c||"btn",c||E,!!p&&"btn-"+p,!!n&&"btn-block",{active:a,disabled:this.props.disabled}),o);v.href&&"button"===m&&(m="a");var k=c?"Close":null;return l.a.createElement(m,Object(s.a)({type:"button"===m&&v.onClick?"button":void 0},v,{className:h,ref:f,onClick:this.onClick,"aria-label":t||k}))},a}(l.a.Component);f.defaultProps={color:"secondary",tag:"button"};var v=f,E=t("2Te1"),h=t("9iNg"),k=t("TYoj"),C=t("c4cl");a.default=function(e){var a=e.pageContext,t=a.tags,n=a.tagPostCounts;return l.a.createElement(r.a,null,l.a.createElement(c.a,{title:"Tags"}),l.a.createElement(o.a,null,l.a.createElement(i.a,{md:{size:6,order:6}},l.a.createElement("section",{className:"tags-grid"},l.a.createElement("div",{className:"tags-grid-container"},l.a.createElement("div",{className:"tags-container"},l.a.createElement("ul",null,t.map((function(e,a){return l.a.createElement("li",{key:a,className:"tags"},l.a.createElement(v,{color:"dark",href:"/tags/"+Object(h.Slugify)(e)},e," ",l.a.createElement(E.a,{color:"secondary"}," ",n[e])))}))))))),l.a.createElement(i.a,{md:{size:3,order:1}},l.a.createElement(k.a,null)),l.a.createElement(i.a,{md:{size:3,order:12}},l.a.createElement(C.a,null))))}}}]);
//# sourceMappingURL=component---src-templates-tags-page-js-64fb386a515cd1d3b1aa.js.map