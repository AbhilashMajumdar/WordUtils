(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),r=n(5),b=n.n(r),a=n(2),l=(n(4),n(0)),s=function(t){var e=Object(o.useState)("Enter your text"),n=Object(a.a)(e,2),c=n[0],r=n[1],b=Object(o.useState)({color:"black",backgroundColor:"white"}),s=Object(a.a)(b,2),i=s[0],u=s[1],d=Object(o.useState)("Switch to Dark Mode"),j=Object(a.a)(d,2),h=j[0],k=j[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container my-3 text-center pt-3 pb-3",style:i,children:[Object(l.jsx)("h1",{children:t.title})," ",Object(l.jsx)("button",{className:"btn btn-dark",onClick:function(){"black"===i.color?(u({color:"white",backgroundColor:"black",border:"1px solid white"}),k("Switch to Light Mode"),document.body.style.backgroundColor="black",document.getElementById("btnMode").style.backgroundColor="khaki",document.getElementById("btnMode").style.color="black"):(u({color:"black",backgroundColor:"white",border:"1px solid black"}),k("Switch to Dark Mode"),document.body.style.backgroundColor="khaki",document.getElementById("btnMode").style.backgroundColor="black",document.getElementById("btnMode").style.color="white")},id:"btnMode",children:h}),Object(l.jsx)("form",{children:Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control mt-3",id:"text",rows:"8",value:c,onChange:function(t){r(t.target.value)},onClick:function(){r("")}})})}),Object(l.jsx)("button",{className:"btn btn-primary button",onClick:function(t){r(c.toUpperCase())},children:t.button1}),Object(l.jsx)("button",{className:"btn btn-danger button",onClick:function(t){r(c.toLowerCase())},children:t.button2}),Object(l.jsx)("button",{className:"btn btn-warning button",onClick:function(){r(c.split(" ").length+" Words")},children:t.button3}),Object(l.jsx)("button",{className:"btn btn-success button",onClick:function(){r(c.length+" Characters")},children:t.button4}),Object(l.jsx)("button",{className:"btn btn-secondary button",onClick:function(){r(" ")},children:t.button5})]})})};var i=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(s,{title:"Playing with Words",button1:"Convert into UpperCase",button2:"Convert into LowerCase",button3:"Words Count",button4:"Characters Count",button5:"Reset Screen"})})};b.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(i,{})}),document.getElementById("root"))},4:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.bbe7dbd6.chunk.js.map