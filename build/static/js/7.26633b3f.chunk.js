(this["webpackJsonpquiz-app-starter"]=this["webpackJsonpquiz-app-starter"]||[]).push([[7],{15:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/back.145386e5.jpg"},17:function(e,t,a){e.exports=a.p+"static/media/quiz.3ef89d02.png"},18:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(16),o=a.n(s),c=(a(15),a(17)),i=a.n(c),l=a(1),m=a(5),u=function(){var e=Object(l.g)().id,t=void 0===e?"none":e;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar"},r.a.createElement("img",{className:"logo",src:i.a}),r.a.createElement("p",{className:"apptitle"},"Quiz App"),r.a.createElement("div",{className:"menu"},r.a.createElement(m.b,{className:"menuitem",style:{textDecoration:"none"},to:"none"==t?"/":"/home/".concat(t)},"Home"),r.a.createElement(m.b,{style:{textDecoration:"none"},to:"none"==t?"/":"/scoreboard/".concat(t)},"Scorebord"),r.a.createElement(m.b,{style:{textDecoration:"none"},to:"none"==t?"/":"/profile/".concat(t)},"Profile"))))};t.a=function(e){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement("div",{className:"back",style:{backgroundImage:"url(".concat(o.a,")"),display:"flex",justifycontent:" center",backgroundRepeat:"repeat-y",alignItems:"center",minHight:"100vh"}},e.children))}},24:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),s=a.n(r),o=(a(15),a(5)),c=a(18);t.default=function(){var e=[{questionText:"What is the capital of France?",answerOptions:[{answerText:"New York",isCorrect:!1},{answerText:"London",isCorrect:!1},{answerText:"Paris",isCorrect:!0},{answerText:"Dublin",isCorrect:!1}]},{questionText:"Who is CEO of Tesla?",answerOptions:[{answerText:"Jeff Bezos",isCorrect:!1},{answerText:"Elon Musk",isCorrect:!0},{answerText:"Bill Gates",isCorrect:!1},{answerText:"Tony Stark",isCorrect:!1}]},{questionText:"The iPhone was created by which company?",answerOptions:[{answerText:"Apple",isCorrect:!0},{answerText:"Intel",isCorrect:!1},{answerText:"Amazon",isCorrect:!1},{answerText:"Microsoft",isCorrect:!1}]},{questionText:"How many Harry Potter books are there?",answerOptions:[{answerText:"1",isCorrect:!1},{answerText:"4",isCorrect:!1},{answerText:"6",isCorrect:!1},{answerText:"7",isCorrect:!0}]}],t=Object(r.useState)(0),a=Object(n.a)(t,2),i=a[0],l=a[1],m=Object(r.useState)(!1),u=Object(n.a)(m,2),p=u[0],x=u[1],w=Object(r.useState)(0),d=Object(n.a)(w,2),E=d[0],b=d[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,null,s.a.createElement("div",{className:"app-home"},s.a.createElement("div",{className:"cont2"},p?s.a.createElement("div",{className:"score-section"},"You scored ",E," out of ",e.length,s.a.createElement(o.b,{style:{textDecoration:"none"},to:"/home/student"},s.a.createElement("button",{style:{marginRight:"20px"}},"Finish"))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"question-section"},s.a.createElement("div",{className:"question-count"},s.a.createElement("span",null,"Question ",i+1),"/",e.length),s.a.createElement("div",{className:"question-text"},e[i].questionText)),s.a.createElement("div",{className:"answer-section"},e[i].answerOptions.map((function(t){return s.a.createElement("button",{style:{marginBottom:"10px"},onClick:function(){return function(t){t&&b(E+1);var a=i+1;a<e.length?l(a):x(!0)}(t.isCorrect)}},t.answerText)}))))))))}}}]);
//# sourceMappingURL=7.26633b3f.chunk.js.map