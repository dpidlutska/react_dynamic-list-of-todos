(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a,s=c(7),n=c.n(s),l=c(2),o=c(1),i=(c(13),c(14),c(5)),d=c.n(i),r=c(0),j=function(e){var t=e.todo,c=e.selectedTodo,a=e.onSelectTodo,s=t.id,n=t.title,l=t.completed,o=c===t;return Object(r.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":o}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:s}),Object(r.jsx)("td",{className:"is-vcentered",children:l&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()({"has-text-success":l,"has-text-danger":!l}),children:n})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(t)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:d()("far",{"fa-eye":!o,"fa-eye-slash":o})})})})})]})},u=function(e){var t=e.todos,c=e.selectedTodo,a=e.onSelectTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)(j,{todo:e,selectedTodo:c,onSelectTodo:a},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(a||(a={}));var b=function(e){var t=e.query,c=e.filter,s=e.onQueryChange,n=e.onFilterChange;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsx)("select",{"data-cy":"statusSelect",className:"is-capitalized",value:c,onChange:function(e){return n(null===e||void 0===e?void 0:e.target.value)},children:Object.values(a).map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"Clear Search",onClick:function(){s(""),n(a.All)}})})]})]})},h=(c(16),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.selectedTodo,c=e.onSelectTodo,a=Object(o.useState)(null),s=Object(l.a)(a,2),n=s[0],i=s[1],d=Object(o.useState)(!1),j=Object(l.a)(d,2),u=j[0],b=j[1];return Object(o.useEffect)((function(){var e;b(!0),t&&(e=t.userId,m("/users/".concat(e))).then(i).catch((function(e){console.log(e)})).finally((function(){return b(!1)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),u?Object(r.jsx)(h,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})},x=c(8),f=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(o.useState)(""),i=Object(l.a)(n,2),d=i[0],j=i[1],f=Object(o.useState)(a.All),v=Object(l.a)(f,2),N=v[0],p=v[1],y=Object(o.useState)(!1),g=Object(l.a)(y,2),S=g[0],T=g[1],C=Object(o.useState)(null),k=Object(l.a)(C,2),w=k[0],A=k[1];Object(o.useEffect)((function(){T(!0),m("/todos").then(s).catch((function(e){console.log(e)})).finally((function(){return T(!1)}))}),[]);var E=Object(o.useMemo)((function(){return function(e,t,c){var s=Object(x.a)(e);if(t&&(s=s.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))),c!==a.All)switch(c){case a.Active:return s.filter((function(e){return!e.completed}));case a.Completed:return s.filter((function(e){return e.completed}));default:throw new Error("Invalid filter")}return s}(c,d,N)}),[c,d,N]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{query:d,onQueryChange:j,filter:N,onFilterChange:p})}),Object(r.jsx)("div",{className:"block",children:S?Object(r.jsx)(h,{}):Object(r.jsx)(u,{todos:E,selectedTodo:w,onSelectTodo:A})})]})})}),w&&Object(r.jsx)(O,{selectedTodo:w,onSelectTodo:A})]})};n.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.05df77e0.chunk.js.map