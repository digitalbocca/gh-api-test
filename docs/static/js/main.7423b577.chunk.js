(this["webpackJsonpgh-api-test"]=this["webpackJsonpgh-api-test"]||[]).push([[0],{34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},46:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(26),i=s.n(n),r=s(11),o=s(2),l=(s(34),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,71)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))}),j=(s(35),s(10)),d=(s(36),s.p+"static/media/search-icon.b5ebab17.svg"),b=s(0);var p=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),s=t[0],a=t[1],n=Object(o.f)();return Object(b.jsxs)("div",{className:"search-bar",children:[Object(b.jsx)("input",{className:"search-input",type:"text",value:s,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("button",{className:"search-button",onClick:function(){var e;e="profiles/".concat(s),n.push(e)},children:Object(b.jsx)("img",{src:d,alt:"search"})})]})};s(46);var u=function(){return Object(b.jsx)("div",{className:"logo",children:Object(b.jsxs)("p",{className:"title",children:["Github",Object(b.jsx)("span",{className:"sub-title",children:"Search"})]})})};var x=function(){return Object(b.jsx)("div",{className:"search-container",children:Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(u,{}),Object(b.jsx)(p,{})]})})},m=s(16),O=s.n(m),h=s(29),f=s(28),g=s(17),v=s.n(g);s(66),s(67),s(68);var N=function(){return Object(b.jsx)("div",{className:"logo",children:Object(b.jsxs)("p",{className:"title",children:["Github",Object(b.jsx)("span",{className:"sub-title",children:"Search"})]})})};var w=function(){return Object(b.jsx)("div",{className:"container-top-bar",children:Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(N,{}),Object(b.jsx)(p,{})]})})},F=s.p+"static/media/star-icon.dfcae95f.svg",S=s.p+"static/media/organization-icon.1d324815.svg",C=s.p+"static/media/location-icon.ce746da8.svg",k=s.p+"static/media/repositories-icon.d88cdc33.svg",y=s.p+"static/media/followers-icon.7102a464.svg";var _=function(){var e=Object(c.useState)({loading:!0}),t=Object(j.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)([]),i=Object(j.a)(n,2),r=i[0],l=i[1],d=Object(o.g)().id,p=Object(o.f)();return function(){var e=Object(f.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://api.github.com/users/".concat(d));case 3:return t=e.sent,e.next=6,a(Object(h.a)({loading:!1},t.data));case 6:return e.next=8,v.a.get("".concat(s.repos_url));case 8:return c=e.sent,e.next=11,l(c.data);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message),n="/not-found",p.push(n);case 17:case"end":return e.stop()}var n}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()(),s.loading?Object(b.jsxs)("div",{className:"container-not-found",children:[Object(b.jsx)(w,{}),Object(b.jsx)("div",{className:"main-content",children:Object(b.jsx)("p",{className:"main-text",children:"Carregando..."})})]}):Object(b.jsxs)("div",{className:"container-not-found",children:[Object(b.jsx)(w,{}),Object(b.jsxs)("div",{className:"profile-wrapper",children:[Object(b.jsxs)("div",{className:"profile-side-bar",children:[Object(b.jsx)("img",{className:"avatar",src:s.avatar_url,alt:"Profile"}),Object(b.jsx)("p",{className:"profile-name",children:s.name}),Object(b.jsx)("p",{className:"profile-text profile-username",children:s.login}),Object(b.jsxs)("p",{className:"profile-text",children:[Object(b.jsx)("img",{className:"profile-icons",src:S,alt:"Organization"}),s.company]}),Object(b.jsxs)("p",{className:"profile-text",children:[Object(b.jsx)("img",{className:"profile-icons",src:C,alt:"Location"}),s.location]}),Object(b.jsxs)("p",{className:"profile-text",children:[Object(b.jsx)("img",{className:"profile-icons",src:F,alt:"Stars"}),"25"]}),Object(b.jsxs)("p",{className:"profile-text",children:[Object(b.jsx)("img",{className:"profile-icons",src:k,alt:"Repositories"}),s.public_repos]}),Object(b.jsxs)("p",{className:"profile-text",children:[Object(b.jsx)("img",{className:"profile-icons",src:y,alt:"Followers"}),s.followers]})]}),Object(b.jsx)("div",{className:"repositories-wrapper",children:Object(b.jsx)("div",{children:r.map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:"repo-name",children:e.name}),Object(b.jsx)("p",{className:"repo-desc",children:e.description}),Object(b.jsxs)("p",{className:"repo-stars",children:[Object(b.jsx)("img",{className:"repo-icon",src:F,alt:"stars"}),e.stargazers_count]})]})}))})})]})]})};s(69);var z=function(){return Object(b.jsxs)("div",{className:"container-not-found",children:[Object(b.jsx)(w,{}),Object(b.jsxs)("div",{className:"main-content",children:[Object(b.jsx)("p",{className:"main-text",children:"User not found :("}),Object(b.jsx)("p",{className:"text-center",children:"Tente novamente mais tarde, pois podemos ter atingido nossa quota de requisi\xe7\xf5es."})]})]})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/not-found",children:Object(b.jsx)(z,{})}),Object(b.jsx)(o.a,{path:"/profiles/:id",children:Object(b.jsx)(_,{})}),Object(b.jsx)(o.a,{path:"/",children:Object(b.jsx)(x,{})})]})})}),document.getElementById("app")),l()}},[[70,1,2]]]);
//# sourceMappingURL=main.7423b577.chunk.js.map