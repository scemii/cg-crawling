(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,n){},26:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),r=n.n(a),s=n(16),i=n.n(s),l=(n(26),n(4)),u=n(6),j=n.n(u),o=n(17),b=n(18),O=n.n(b),d=(n(15),r.a.memo((function(e){var t=e.name,n=e.status,a=e.image,r=e.link;return Object(c.jsx)("a",{className:"gclink",target:"_blank",rel:"noreferrer",href:r,children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("h3",{children:t}),Object(c.jsx)("p",{className:"Rupture"!==n?"en-stock":"en-rupture",children:n}),Object(c.jsx)("img",{className:"image",src:a,alt:t})]})})}))),m=n(48),f=n(19);function h(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("h2",{className:"title-timer",children:["Next refresh in: ","",Object(c.jsx)("span",{className:"timer",children:Object(c.jsx)(f.a,{date:Date.now()+3e4,onComplete:function(){return r(Object(m.a)())}},n)})]})}var v=function(e){var t=e.value,n=Object(a.useState)(null),r=Object(l.a)(n,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/"+t);case 2:n=e.sent,i(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var n=setInterval((function(){e()}),3e4);return function(){return clearInterval(n)}}),[t]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("h1",{className:"title",children:["LDLC ",t," G.C stock"]}),Object(c.jsx)(h,{}),Object(c.jsx)("div",{className:"container",children:s&&s.map((function(e){return Object(c.jsx)(d,{name:e.gc,status:e.status,image:e.image,link:e.link},Object(m.a)())}))})]})};var x=function(){var e=Object(a.useState)("3080"),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("select",{name:"gc",id:"gc-selector",className:"gc-selector",onChange:function(e){r(e.target.value)},children:[Object(c.jsx)("option",{defaultValue:"3080",children:"3080"}),Object(c.jsx)("option",{value:"3090",children:"3090"})]}),Object(c.jsx)(v,{value:n})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),p()}},[[47,1,2]]]);
//# sourceMappingURL=main.3a9a1758.chunk.js.map