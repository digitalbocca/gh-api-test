(this["webpackJsonpgh-api-test"]=this["webpackJsonpgh-api-test"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(24),i=n.n(s),r=n(27),o=n(2),j=(n(34),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))}),l=(n(35),n(10)),d=(n(36),n.p+"static/media/search-icon.b5ebab17.svg"),b=n(0);var u=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{className:"search-bar",children:[Object(b.jsx)("input",{className:"search-input",type:"text",value:n,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("button",{className:"search-button",onClick:function(){window.location.replace("".concat(window.location.origin,"/profiles/").concat(n))},children:Object(b.jsx)("img",{src:d,alt:"search"})})]})};n(38);var h=function(){return Object(b.jsx)("div",{className:"logo",children:Object(b.jsxs)("p",{className:"title",children:["Github",Object(b.jsx)("span",{className:"sub-title",children:"Search"})]})})};var p=function(){return Object(b.jsx)("div",{className:"search-container",children:Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsx)(u,{})]})})},x=n(13),O=n.n(x),m=n(29),f=n(25),v=n(26),g=n.n(v);n(58),n(59),n(60);var N=function(){return Object(b.jsx)("div",{className:"logo",children:Object(b.jsxs)("p",{className:"title",children:["Github",Object(b.jsx)("span",{className:"sub-title",children:"Search"})]})})};var w=function(){return Object(b.jsx)("div",{className:"container-top-bar",children:Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(N,{}),Object(b.jsx)(u,{})]})})};var C=function(){var e=Object(c.useState)({loading:!0}),t=Object(l.a)(e,2),n=t[0],a=t[1],s=window.location.pathname.split("/")[2];return function(){var e=Object(f.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://api.github.com/users/".concat(s));case 3:t=e.sent,a(Object(m.a)({loading:!1},t.data)),console.log(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message),window.location.replace("".concat(window.location.origin,"/not-found"));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()(),n.loading?Object(b.jsxs)("div",{className:"container-not-found",children:[Object(b.jsx)(w,{}),Object(b.jsx)("div",{className:"main-content",children:Object(b.jsx)("p",{className:"main-text",children:"Carregando..."})})]}):Object(b.jsxs)("div",{className:"container-not-found",children:[Object(b.jsx)(w,{}),Object(b.jsxs)("div",{className:"profile-wrapper",children:[Object(b.jsx)("div",{className:"profile-side-bar",children:Object(b.jsx)("p",{children:"Profile"})}),Object(b.jsx)("div",{className:"repositories-wrapper",children:Object(b.jsx)("p",{children:"repositories"})})]})]})};n(61);var F=function(){return Object(b.jsxs)("div",{className:"container-not-found",children:[Object(b.jsx)(w,{}),Object(b.jsxs)("div",{className:"main-content",children:[Object(b.jsx)("p",{className:"main-text",children:"User not found :("}),Object(b.jsx)("p",{className:"text-center",children:"Tente novamente mais tarde, pois podemos ter atingido nossa quota de requisi\xe7\xf5es."})]})]})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/not-found",children:Object(b.jsx)(F,{})}),Object(b.jsx)(o.a,{path:"/profiles/:id",children:Object(b.jsx)(C,{})}),Object(b.jsx)(o.a,{path:"/",children:Object(b.jsx)(p,{})})]})})}),document.getElementById("app")),j()}},[[70,1,2]]]);
//# sourceMappingURL=main.6818da5a.chunk.js.map