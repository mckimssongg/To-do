(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),l=n(5),u=n(1);var i=o.a.createContext();function m(e){var t=function(e,t){var n=o.a.useState(!1),a=Object(u.a)(n,2),r=a[0],c=a[1],l=o.a.useState(!0),i=Object(u.a)(l,2),m=i[0],s=i[1],d=o.a.useState(t),f=Object(u.a)(d,2),p=f[0],E=f[1];return o.a.useEffect(function(){setTimeout(function(){try{var n,a=localStorage.getItem(e);a?n=JSON.parse(a):(localStorage.setItem(e,JSON.stringify(t)),n=t),E(n),s(!1)}catch(r){c(r)}},1e3)}),{Item:p,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),E(t)}catch(r){c(r)}},loading:m,error:r}}("ToDos_v1",[]),n=t.Item,a=t.saveItem,r=t.loading,c=t.error,m=o.a.useState(""),s=Object(u.a)(m,2),d=s[0],f=s[1],p=o.a.useState(!1),E=Object(u.a)(p,2),g=E[0],v=E[1],h=n.filter(function(e){return!!e.completed}).length,C=n.length,x=[];x=!d.length>=1?n:n.filter(function(e){var t=e.text.toLowerCase(),n=d.toLowerCase();return t.includes(n)});return o.a.createElement(i.Provider,{value:{error:c,loading:r,totalToDos:C,completedTodos:h,searchValue:d,setSearchValue:f,SearchedTodos:x,completeTodo:function(e){var t=n.findIndex(function(t){return t.text===e}),o=Object(l.a)(n);o[t].completed=!0,a(o)},deleteTodo:function(e){var t=n.findIndex(function(t){return t.text===e}),o=Object(l.a)(n);o.splice(t,1),a(o)},openModal:g,setOpenModal:v,addTodo:function(e){var t=Object(l.a)(n);t.push({completed:!1,text:e}),a(t)}}},e.children)}n(12);function s(){var e=o.a.useContext(i),t=e.totalToDos,n=e.completedTodos;return o.a.createElement("h2",{className:"Prueba"},"Has completado ",n," de ",t," Tareas")}n(13);function d(){var e=o.a.useContext(i),t=e.setSearchValue,n=e.searchValue;return o.a.createElement("input",{className:"TodoSearch",placeholder:"Busqueda...",value:n,onChange:function(e){console.log(e.target.value),t(e.target.value)}})}n(14);function f(e){return o.a.createElement("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal(function(e){return!e})}},"+")}n(15);function p(e){var t=e.children;return c.a.createPortal(o.a.createElement("div",{className:"modalBackgraund"},t),document.getElementById("modal"))}n(16);function E(e){return o.a.createElement("section",null,o.a.createElement("ul",null,e.children))}n(17);function g(e){return o.a.createElement("li",{className:"TodoItem"},o.a.createElement("span",{className:"Icon IconCheck ".concat(e.completed&&"IconCheckActive"),onClick:e.onComplete},"\u221a"),o.a.createElement("p",{className:"TodoItemP ".concat(e.completed&&"TodoItemP-completado")},e.text),o.a.createElement("span",{className:"Icon IconDelet",onClick:e.onDelete},"X"))}n(18);function v(){var e=o.a.useState(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=o.a.useContext(i),c=r.addTodo,l=r.setOpenModal;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(n),l(!1)}},o.a.createElement("label",null,"A\xf1ade algo a tu lista :)"),o.a.createElement("textarea",{placeholder:"A\xf1ade una tarea",value:n,onChange:function(e){a(e.target.value)}}),o.a.createElement("div",{className:"ButtonContainer"},o.a.createElement("button",{onClick:function(){l(!1)},type:"button",className:"Button ButtonCancel"},"Cancelar"),o.a.createElement("button",{type:"submit",className:"Button ButtonAdd"},"A\xf1adir")))}function h(){var e=o.a.useContext(i),t=e.error,n=e.loading,a=e.SearchedTodos,r=e.completeTodo,c=e.deleteTodo,l=e.openModal,u=e.setOpenModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,null),o.a.createElement(d,null),o.a.createElement(E,null,t&&o.a.createElement("p",{style:{textAlign:"center"}},"Error al cargar..."),n&&o.a.createElement("p",{style:{textAlign:"center"}},"Cargando..."),!n&&!a.length&&o.a.createElement("p",{style:{textAlign:"center"}},"\xa1Crea tu primer recordatorio!"),a.map(function(e){return o.a.createElement(g,{key:e.text,text:e.text,completed:e.completed,onComplete:function(){return r(e.text)},onDelete:function(){return c(e.text)}})})),!!l&&o.a.createElement(p,null,o.a.createElement(v,null)),o.a.createElement(f,{setOpenModal:u}))}var C=function(){return o.a.createElement(m,null,o.a.createElement(h,null))};n(19);c.a.render(o.a.createElement(C,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.466b2c98.chunk.js.map