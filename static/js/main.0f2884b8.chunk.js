(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(t,e,f){},14:function(t,e,f){"use strict";f.r(e);var n=f(0),A=f(1),r=f.n(A),v=f(7),a=f.n(v),j=(f(13),f(3)),o=f(2),i=Object(A.createContext)(),b=function(t){var e=Object(A.useState)([]),f=Object(o.a)(e,2),r=f[0],v=f[1];return Object(A.useEffect)((function(){var t=JSON.parse(localStorage.getItem("todoStore"));t&&v(t)}),[]),Object(A.useEffect)((function(){localStorage.setItem("todoStore",JSON.stringify(r))}),[r]),Object(n.jsx)(i.Provider,{value:[r,v],children:t.children})};function c(){var t=Object(A.useContext)(i),e=Object(o.a)(t,2),f=e[0],r=e[1],v=Object(A.useState)(""),a=Object(o.a)(v,2),b=a[0],c=a[1],u=Object(A.useRef)();return Object(A.useEffect)((function(){u.current.focus()}),[]),Object(n.jsx)("div",{children:Object(n.jsxs)("form",{autoComplete:"off",onSubmit:function(t){t.preventDefault(),r([].concat(Object(j.a)(f),[{name:b,complete:!1}])),c("")},children:[Object(n.jsx)("input",{type:"text",name:"todos",id:"todos",ref:u,placeholder:"What is your task?",value:b,onChange:function(t){return c(t.target.value.toLowerCase())}}),Object(n.jsx)("button",{type:"submit",children:"Add"})]})})}function u(t){var e=t.todo,f=t.id,r=t.checkComplete,v=t.handleEditTodos,a=Object(A.useState)(!1),j=Object(o.a)(a,2),i=j[0],b=j[1],c=Object(A.useState)(e.name),u=Object(o.a)(c,2),l=u[0],s=u[1];return i?Object(n.jsxs)("li",{children:[Object(n.jsx)("input",{type:"text",id:"editValue",value:l,name:"editValue",onChange:function(t){return s(t.target.value.toLowerCase())}}),Object(n.jsx)("button",{onClick:function(){return function(t){b(!1),l?v(l,t):s(e.name)}(f)},children:"Save"})]}):Object(n.jsxs)("li",{children:[Object(n.jsxs)("label",{htmlFor:f,className:e.complete?"active":"",children:[Object(n.jsx)("input",{type:"checkbox",id:f,checked:e.complete,onChange:function(){return r(f)}}),e.name]}),Object(n.jsx)("button",{disabled:e.complete,onClick:function(){b(!0)},children:"Edit"})]})}function l(){var t=Object(A.useContext)(i),e=Object(o.a)(t,2),f=e[0],r=e[1],v=function(t){var e=Object(j.a)(f);e.forEach((function(e,f){f==t&&(e.complete=!e.complete)})),r(e)},a=function(t,e){var n=Object(j.a)(f);n.forEach((function(f,n){n==e&&(f.name=t)})),r(n)};return Object(n.jsx)("ul",{children:f.map((function(t,e){return Object(n.jsx)(u,{todo:t,id:e,checkComplete:v,handleEditTodos:a},e)}))})}function s(){var t=Object(A.useState)(!1),e=Object(o.a)(t,2),f=e[0],r=e[1],v=Object(A.useContext)(i),a=Object(o.a)(v,2),b=a[0],c=a[1],u=function(){return b.filter((function(t){return 0==t.complete}))};return Object(n.jsx)(n.Fragment,{children:0==b.length?Object(n.jsx)("h2",{children:"You have no task"}):Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("label",{htmlFor:"all",children:[Object(n.jsx)("input",{type:"checkbox",name:"all",id:"all",onChange:function(){var t=Object(j.a)(b);t.forEach((function(t){t.complete=!f})),c(t),r(!f)},checked:f}),"ALL"]}),Object(n.jsxs)("p",{children:["You have ",u().length,"task"]}),Object(n.jsx)("button",{id:"delete",onClick:function(){c(u()),r(!1)},children:"Delete"})]})})}var x=f.p+"static/media/CCSE.ff695753.png";var X=function(){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("img",{className:"Asian",src:"data:image/jpeg;base64,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"}),Object(n.jsx)("h1",{children:"To do List"}),Object(n.jsx)("img",{className:"CCSE",src:x}),Object(n.jsx)(c,{}),Object(n.jsx)(l,{}),Object(n.jsx)(s,{})]})})},d=function(t){t&&t instanceof Function&&f.e(3).then(f.bind(null,15)).then((function(e){var f=e.getCLS,n=e.getFID,A=e.getFCP,r=e.getLCP,v=e.getTTFB;f(t),n(t),A(t),r(t),v(t)}))};a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(X,{})}),document.getElementById("root")),d()}},[[14,1,2]]]);
//# sourceMappingURL=main.0f2884b8.chunk.js.map