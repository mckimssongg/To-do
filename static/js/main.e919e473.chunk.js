(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(3),l=a.n(o),r=a(1);a(9);function u(e){var t=e.total,a=e.completed;return c.a.createElement("h2",{className:"Prueba"},"Has completado ",a," de ",t," Tareas")}a(10);function m(e){var t=e.searchValue,a=e.setSearchValue;return c.a.createElement("input",{className:"TodoSearch",placeholder:"Busqueda...",value:t,onChange:function(e){a(e.target.value)}})}a(11);function i(){return c.a.createElement("button",{className:"CreateTodoButton",onClick:function(){alert("Toque"+"")}},"+")}a(12);function s(e){return c.a.createElement("section",null,c.a.createElement("ul",null,e.children))}a(13);function d(e){return c.a.createElement("li",{className:"TodoItem"},c.a.createElement("span",{className:"Icon IconCheck ".concat(e.completed&&"IconCheckActive"),onClick:function(){alert("Completada: "+e.text)}},"\u221a"),c.a.createElement("p",{className:"TodoItemP ".concat(e.completed&&"TodoItemP-completado")},e.text),c.a.createElement("span",{className:"Icon IconDelet",onClick:function(){alert("Eliminaste: "+e.text)}},"X"))}var p=[{text:"Tarea Taqueritos ",completed:!0},{text:"Tarea Doritos",completed:!1},{text:"Tarea Hola mundo",completed:!1}];var f=function(){var e=c.a.useState(p),t=Object(r.a)(e,2),a=t[0],n=(t[1],c.a.useState("")),o=Object(r.a)(n,2),l=o[0],f=o[1],E=a.filter(function(e){return!!e.completed}).length,h=a.length,x=[];return x=!l.length>=1?a:a.filter(function(e){var t=e.text.toLowerCase(),a=l.toLowerCase();return t.includes(a)}),c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{total:h,completed:E}),c.a.createElement(m,{searchValue:l,setSearchValue:f}),c.a.createElement(s,null,x.map(function(e){return c.a.createElement(d,{key:e.text,text:e.text,completed:e.completed})})),c.a.createElement(i,null))};a(14);l.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.e919e473.chunk.js.map