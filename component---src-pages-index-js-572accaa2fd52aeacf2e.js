(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"54pp":function(e,a,t){"use strict";t("XfO3"),t("HEwt"),t("a1Th"),t("Btvt");var n=t("q1tI"),r=t.n(n),c=t("wx14"),l=t("zLVn"),i=t("TSYQ"),d=t.n(i),s=t("33Jr"),o=function(e){var a,t=e.className,n=e.listClassName,i=e.cssModule,o=e.size,g=e.tag,m=e.listTag,u=e["aria-label"],b=Object(l.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),p=Object(s.e)(d()(t),i),f=Object(s.e)(d()(n,"pagination",((a={})["pagination-"+o]=!!o,a)),i);return r.a.createElement(g,{className:p,"aria-label":u},r.a.createElement(m,Object(c.a)({},b,{className:f})))};o.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var g=o,m=function(e){var a=e.active,t=e.className,n=e.cssModule,i=e.disabled,o=e.tag,g=Object(l.a)(e,["active","className","cssModule","disabled","tag"]),m=Object(s.e)(d()(t,"page-item",{active:a,disabled:i}),n);return r.a.createElement(o,Object(c.a)({},g,{className:m}))};m.defaultProps={tag:"li"};var u=m,b=(t("LK8F"),function(e){var a,t=e.className,n=e.cssModule,i=e.next,o=e.previous,g=e.first,m=e.last,u=e.tag,b=Object(l.a)(e,["className","cssModule","next","previous","first","last","tag"]),p=Object(s.e)(d()(t,"page-link"),n);o?a="Previous":i?a="Next":g?a="First":m&&(a="Last");var f,A=e["aria-label"]||a;o?f="‹":i?f="›":g?f="«":m&&(f="»");var E=e.children;return E&&Array.isArray(E)&&0===E.length&&(E=null),b.href||"a"!==u||(u="button"),(o||i||g||m)&&(E=[r.a.createElement("span",{"aria-hidden":"true",key:"caret"},E||f),r.a.createElement("span",{className:"sr-only",key:"sr"},A)]),r.a.createElement(u,Object(c.a)({},b,{className:p,"aria-label":A}),E)});b.defaultProps={tag:"a"};var p=b;a.a=function(e){var a=e.currentPage,t=e.numberOfPages,n=a>=1&&a<=5,c=t-a<4,l=t-a,i=1===a,d=a===t,s=a-1==1?"/":"/page/"+(a-1).toString(),o="/page/"+(a+1).toString(),m=0===t?[]:Array.from({length:t},(function(e,a){return a+1}));return r.a.createElement("div",{className:"pagination-wrapper"},r.a.createElement(g,{"aria-label":"Page navigation example"},i?r.a.createElement(u,{disabled:!0},r.a.createElement(p,{previous:!0})):r.a.createElement(u,null,r.a.createElement(p,{previous:!0,href:s})),n?m.slice(0,5).map((function(e){return a===e?r.a.createElement(u,{active:!0,key:"page-number"+e},r.a.createElement(p,{href:"/"+(1===e?"":"page/"+e)},e)):r.a.createElement(u,{key:"page-number"+e},r.a.createElement(p,{href:"/"+(1===e?"":"page/"+e)},e))})):c?m.slice(a-(5-l),a+l).map((function(e){return a===e?r.a.createElement(u,{active:!0,key:"page-number"+e},r.a.createElement(p,{href:"/"+(1===e?"":"page/"+e)},e)):r.a.createElement(u,{key:"page-number"+e},r.a.createElement(p,{href:"/"+(1===e?"":"page/"+e)},e))})):m.slice(a-1,a+4).map((function(e){return a===e?r.a.createElement(u,{active:!0,key:"page-number"+e},r.a.createElement(p,{href:"/"+(1===e?"":"page/"+e)},e)):r.a.createElement(u,{key:"page-number"+e},r.a.createElement(p,{href:"/"+(1===e?"":"page/"+e)},e))})),d?r.a.createElement(u,{disabled:!0},r.a.createElement(p,{next:!0})):r.a.createElement(u,null,r.a.createElement(p,{next:!0,href:o}))))}},RXBc:function(e,a,t){"use strict";t.r(a);var n=t("xhFO"),r=t("q1tI"),c=t.n(r),l=t("Bl7J"),i=t("vrFN"),d=t("ok1R"),s=t("rhny"),o=t("hfoJ"),g=t("zNOQ"),m=t("c4cl"),u=t("54pp");a.default=function(){var e=n.data,a=Math.ceil(e.allMarkdownRemark.totalCount/2);return c.a.createElement(l.a,null,c.a.createElement(i.a,{title:"Home"}),c.a.createElement(d.a,null,c.a.createElement(s.a,{lg:{size:6,order:6}},c.a.createElement("section",null,e.allMarkdownRemark.edges.map((function(e,a){return c.a.createElement("div",{key:a},c.a.createElement(o.a,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,categories:e.node.frontmatter.categories,slug:e.node.fields.slug,excerpt:e.node.excerpt,image:e.node.frontmatter.featuredImage.childImageSharp.fluid,tags:e.node.frontmatter.tags}))})),c.a.createElement(u.a,{currentPage:1,numberOfPages:a}))),c.a.createElement(s.a,{lg:{size:3,order:1}},c.a.createElement(g.a,{data:e})),c.a.createElement(s.a,{lg:{size:3,order:12}},c.a.createElement(m.a,null))))}},hfoJ:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),c=t("Wbzz"),l=t("BLzl"),i=t("/kxI"),d=t("x863"),s=t("2Te1"),o=t("ChEw"),g=t("ezmu"),m=t("9eSz"),u=t.n(m);a.a=function(e){var a=e.title,t=e.categories,n=e.slug,m=e.date,b=e.excerpt,p=e.image;e.tags;return r.a.createElement(l.a,null,r.a.createElement(c.Link,{to:"/"+n},r.a.createElement(u.a,{fluid:p})),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement("span",null,m)," ",r.a.createElement("ul",{className:"post-categories"},t.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(s.a,{color:"light"},e))})))),r.a.createElement(c.Link,{to:"/"+n},r.a.createElement(o.a,null,a),r.a.createElement(g.a,null,b))))}},xhFO:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"totalCount":8,"edges":[{"node":{"id":"588a442c-fd97-54a1-aefa-62461d938b54","frontmatter":{"title":"Error - gyp No Xcode or CLT version detected!","categories":["Error","Gatsby"],"date":"October 12th, 2020","tags":["error"],"featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABkklEQVQoz3VSa2+CQBDkJzRN08SCDxQRFUHAB88qgo/6///P1Nlmk4baD5M5jru5md010n2Fy+WC0+mE4/EonKYp5vM5ZrMZfN+H53lYLpcIwxCu66Lf72MwGDyFcaobtG2L2+2G8/ks4sRut0MQBLBtWzAcDmGaJizL+leMDxnV4RPtucX1ehXUdY2maZBlmTiiUzqcTqcixkvkLtS14S4WyIpMBBg1iiIsHnvEaDQSd+TxeAzHcTCZTARc6zeZZ8QhBVSIbijEuq1WK6zXa3HJ6KwhnfKMgmd1j8IiyAu8SJEkSbDdbrHZbGS93+/lHx9jg7pxTcv8GzkIHoJxBH/lQ8XjOBaHfJ1C7CwPP6tdF4bn2IiGLqrogCxOUaQ5iqIQpxqdgmyKsoLf3X/GqPeO+YuJyEmw2Sa4f91lFquqQp7nMptlWYp7RmcC1pRrMoWYQpMYY6uHxauFQ1jL+LRNi7IoxSFrSFEyG0fneZbLnk4FU7BhdEc2bOsD7puJnZciDn8c/B4LhcbUtbKOiw73N0qaSWos9ThhAAAAAElFTkSuQmCC","aspectRatio":1.7857142857142858,"src":"/static/d1c4d3752e27b3da8ef5704ba0db3ae7/ab0cc/20201012_gyp_no_xcode_or_clt_version_detected.png","srcSet":"/static/d1c4d3752e27b3da8ef5704ba0db3ae7/e8bc9/20201012_gyp_no_xcode_or_clt_version_detected.png 125w,\\n/static/d1c4d3752e27b3da8ef5704ba0db3ae7/d3577/20201012_gyp_no_xcode_or_clt_version_detected.png 250w,\\n/static/d1c4d3752e27b3da8ef5704ba0db3ae7/ab0cc/20201012_gyp_no_xcode_or_clt_version_detected.png 500w,\\n/static/d1c4d3752e27b3da8ef5704ba0db3ae7/73028/20201012_gyp_no_xcode_or_clt_version_detected.png 750w,\\n/static/d1c4d3752e27b3da8ef5704ba0db3ae7/27aac/20201012_gyp_no_xcode_or_clt_version_detected.png 874w","sizes":"(max-width: 500px) 100vw, 500px"}}}},"excerpt":"I recently got an error \\"gyp: No Xcode or CLT version detected when I created a new gatsy project, and this was how I solved the error…","fields":{"slug":"error-gyp-no-xcode-or-clt-version-detected"}}},{"node":{"id":"d0ec3a34-d40d-52ad-a617-79117649e97c","frontmatter":{"title":"How to activate windows 10 by phone","categories":["Installation"],"date":"September 14th, 2020","tags":["windows 10","activation"],"featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABsklEQVQoz2P4DwP//v2DMyDs719+5dnNSzGYnm4yK91kZpLeNCACMtKMoYjhPxL4+vULEIH1/0fSPCPVaEaS3vRS98VAlKw/PdVwRpoJquYJ/b0GulpABGRAbP725Wee3Xyg6kyz2av6jh1ad/3QumtL2g4DLU81Amv+8+cPUN3MGdPSUhL37tkFREDGzOnTgIJfPn4vcFgQozZpTtWeC4cevHv55cWDD+9fflnafhgomGE2iwFiSWJ8zJLFCyFOWLZsCZALsvnzj3z7+XGaU3YvuQi09suH718+/rh++un+lVcSdKamm86C2lxfW52Xm/X923egnyPDQ6ory+E2R6tMWjvxxJZZZ4Hkw2uvgTqXdR6J15qSYQqz+emTJ+mpSZcuXti6ZbOFqeGzp89A4Qe2OVFnWrHrop2LLhzbfPP4llsHVl8tcV0EDAigzxngkfT69ev379+9ffv2zZs3EPdDQ9twBlBpjvXciTlbJ+Vtz7aaAwx5YOShRxVanCPi2XQW0Ih4zSlxGlNSYPGEohk5kfxHiefpkIQB9CQQpeFKJEgGQTUDfZtpPhvo5mwrLAgAoY/Gxio1bU0AAAAASUVORK5CYII=","aspectRatio":1.7857142857142858,"src":"/static/dd1a8069019a549dbdb0c4805dfb3caf/ab0cc/20200729_01_github-gatsby.png","srcSet":"/static/dd1a8069019a549dbdb0c4805dfb3caf/e8bc9/20200729_01_github-gatsby.png 125w,\\n/static/dd1a8069019a549dbdb0c4805dfb3caf/d3577/20200729_01_github-gatsby.png 250w,\\n/static/dd1a8069019a549dbdb0c4805dfb3caf/ab0cc/20200729_01_github-gatsby.png 500w,\\n/static/dd1a8069019a549dbdb0c4805dfb3caf/73028/20200729_01_github-gatsby.png 750w,\\n/static/dd1a8069019a549dbdb0c4805dfb3caf/6d4ec/20200729_01_github-gatsby.png 1000w,\\n/static/dd1a8069019a549dbdb0c4805dfb3caf/36c95/20200729_01_github-gatsby.png 1920w","sizes":"(max-width: 500px) 100vw, 500px"}}}},"excerpt":"Learn how to activate your windows 10 by phone   Phone activation is reported to have proved its worth as an effective fix for the error 0x…","fields":{"slug":"how-to-activate-windows-10-by-phone"}}}]}}}')},zNOQ:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),c=t("TYoj");a.a=function(e){e.data;return r.a.createElement("div",null,r.a.createElement(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-572accaa2fd52aeacf2e.js.map