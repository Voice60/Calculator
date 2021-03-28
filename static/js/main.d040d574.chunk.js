(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{16:function(e,n,r){},23:function(e,n,r){},25:function(e,n,r){"use strict";r.r(n);var a=r(0),t=r.n(a),c=r(5),u=r.n(c),s=(r(16),r(6)),l=(r(23),r(1)),m="ADD_SIGN",i="ADD_NUMBER",b="CLEAR_ALL",p="CLEAR_LAST",o="SET_PERCENT",j="SET_DOT",O="SET_ANSWER",d={example:"",answer:null,number1:"",number2:"",sign:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0,r=function(e,n,r){e=e.replace(/^\s+|\s+$/g,""),r=r.replace(/^\s+|\s+$/g,"");var a="";return""===e?a=0:""===r||null==n?a=Number(e):"-"===n?a=Number(e)-Number(r):"+"===n?a=Number(e)+Number(r):"*"===n?a=Number(e)*Number(r):"/"===n&&(a=Number(e)/Number(r),Number.isNaN(a)&&(a=0)),String(a).includes(".")&&String(a).split(".")[1].length>2?String(a.toFixed(2)):String(a)};switch(n.type){case i:if(null===e.sign){var a=e.number1+n.n;return Object(l.a)(Object(l.a)({},e),{},{number1:a,example:a,answer:r(a,e.sign,e.number2)})}if(null!==e.sign){var t=e.number2+n.n;return Object(l.a)(Object(l.a)({},e),{},{number2:t,example:e.number1+e.sign+t,answer:r(e.number1,e.sign,t)})}break;case m:if(null===e.sign&&""===e.number1){var c="0";return Object(l.a)(Object(l.a)({},e),{},{number1:c,sign:n.s,example:"0"+n.s,answer:r(c,n.s,"")})}if(null===e.sign&&""!==e.number1)return Object(l.a)(Object(l.a)({},e),{},{sign:n.s,example:e.example+n.s,answer:r(e.number1,n.s,"")});if(null!==e.sign){var u=r(e.number1,e.sign,e.number2);return Object(l.a)(Object(l.a)({},e),{},{number1:u,example:u+n.s,answer:u,number2:"",sign:n.s})}case b:return Object(l.a)({},d);case p:if(""!==e.number2){var s=e.number2.slice(0,-1);return Object(l.a)(Object(l.a)({},e),{},{number2:s,example:e.example.slice(0,-1),answer:r(e.number1,e.sign,s)})}if(null!==e.sign)return Object(l.a)(Object(l.a)({},e),{},{sign:null,example:e.example.slice(0,-1),answer:r(e.number1,e.sign,e.number2)});if(""!==e.number1){var g=e.number1.slice(0,-1);return Object(l.a)(Object(l.a)({},e),{},{number1:g,example:g,answer:r(g,e.sign,e.number2)})}case o:var x=String(r(e.number1,e.sign,e.number2)/100);return Object(l.a)(Object(l.a)({},e),{},{number1:x,sign:null,number2:"",answer:x,example:x});case j:if(""!==e.number2&&!e.number2.includes("."))return Object(l.a)(Object(l.a)({},e),{},{number2:e.number2+".",example:e.example+"."});if(""!==e.number1&&!e.number1.includes("."))return Object(l.a)(Object(l.a)({},e),{},{number1:e.number1+".",example:e.example+"."});case O:var _=r(e.number1,e.sign,e.number2);return Object(l.a)(Object(l.a)({},e),{},{answer:_,number1:_,number2:"",sign:null,example:_});default:return e}},x=r(3),_=r.n(x),y=r(2),f=function(e){var n=e.example,r=e.answer,a=e.addNumber,t=e.addSign,c=e.clearAll,u=e.clearLast,s=e.setPercent,l=e.setDot,m=e.setAnswer,i=[{name:"AC",type:"clearAll"},{name:"C",type:"clearLast"},{name:"%",type:"percent"},{name:"/",type:"sign"},{name:"7",type:"number"},{name:"8",type:"number"},{name:"9",type:"number"},{name:"*",type:"sign"},{name:"4",type:"number"},{name:"5",type:"number"},{name:"6",type:"number"},{name:"-",type:"sign"},{name:"1",type:"number"},{name:"2",type:"number"},{name:"3",type:"number"},{name:"+",type:"sign"},{name:"0",type:"number"},{name:",",type:"dot"},{name:"=",type:"answer"}].map((function(e){return Object(y.jsx)("div",{onClick:function(){!function(e){"number"==e.type?a(e.name):"sign"==e.type?t(e.name):"clearAll"==e.type?c():"clearLast"==e.type?u():"percent"==e.type?s():"dot"==e.type?l():"answer"==e.type&&m()}(e)},className:_.a.itemWrap,children:Object(y.jsx)("p",{className:_.a.item,children:e.name})})}));return Object(y.jsxs)("div",{className:_.a.calculator,children:[Object(y.jsxs)("div",{className:_.a.calcTop,children:[Object(y.jsx)("p",{className:_.a.history,children:n}),Object(y.jsx)("p",{className:_.a.answer,children:r||0})]}),Object(y.jsx)("div",{className:_.a.calcBottom,children:i})]})},N={addNumber:function(e){return{type:i,n:e}},addSign:function(e){return{type:m,s:e}},clearAll:function(){return{type:b}},clearLast:function(){return{type:p}},setPercent:function(){return{type:o}},setDot:function(){return{type:j}},setAnswer:function(){return{type:O}}},w=Object(s.b)((function(e){return{example:e.calc.example,answer:e.calc.answer}}),N)((function(e){var n=e.example,r=e.answer,a=e.addNumber,t=e.addSign,c=e.clearAll,u=e.clearLast,s=e.setPercent,l=e.setDot,m=e.setAnswer;return Object(y.jsx)(f,{example:n,answer:r,addNumber:a,addSign:t,clearAll:c,clearLast:u,setPercent:s,setDot:l,setAnswer:m})})),h=r(4),v=Object(h.b)({calc:g}),S=Object(h.c)(v,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var A=function(){return Object(y.jsx)(s.a,{store:S,children:Object(y.jsx)("div",{className:"app",children:Object(y.jsxs)("div",{className:"wrapper",children:[Object(y.jsx)("h1",{className:"title",children:"Calculator"}),Object(y.jsx)(w,{})]})})})},E=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,26)).then((function(n){var r=n.getCLS,a=n.getFID,t=n.getFCP,c=n.getLCP,u=n.getTTFB;r(e),a(e),t(e),c(e),u(e)}))};u.a.render(Object(y.jsx)(t.a.StrictMode,{children:Object(y.jsx)(A,{})}),document.getElementById("root")),E()},3:function(e,n,r){e.exports={calculator:"Calculator_calculator__3M1nZ",calcTop:"Calculator_calcTop__1iAQ6",history:"Calculator_history__aWZ2M",answer:"Calculator_answer__APOBh",calcBottom:"Calculator_calcBottom__1buZ4",itemWrap:"Calculator_itemWrap__3WunX",item:"Calculator_item__cEr0q"}}},[[25,1,2]]]);
//# sourceMappingURL=main.d040d574.chunk.js.map