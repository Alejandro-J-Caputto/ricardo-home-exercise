(this["webpackJsonpricardo-home-exercise"]=this["webpackJsonpricardo-home-exercise"]||[]).push([[0],{24:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(17),a=c.n(s),i=(c(24),c(7)),j=c(2),l=c(0),d=function(e){return Object(l.jsx)(l.Fragment,{children:e.children})},o=function(e){return Object(l.jsx)("div",{className:"ricardo-wrapper",children:e.children})},b=c.p+"static/media/logo.fb22ea0d.svg",h=function(){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)(i.b,{to:"/home-exercise",className:"logo-link",children:Object(l.jsx)("img",{className:"logo__svg",src:b,alt:"ricardo logo"})})}),Object(l.jsx)("nav",{className:"nav"})]})},u=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"HELLO LOGIN"})})},O=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"HELLO REGISTER"})})},x=function(e){return Object(l.jsxs)(j.d,{children:[Object(l.jsx)(j.b,{exact:!0,path:"/auth/login",component:u}),Object(l.jsx)(j.b,{exact:!0,path:"/auth/register",component:O})]})},m=c(8),p=function(e){var t=Object(j.g)(),c=Object(r.useState)(""),n=Object(m.a)(c,2),s=n[0],a=n[1],i=Object(r.useState)(!1),d=Object(m.a)(i,2),o=d[0],b=d[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){b(s.trim().length>3)}),500);return function(){clearInterval(e)}}),[s]),Object(l.jsx)("div",{className:"searchBar",children:Object(l.jsxs)("form",{className:"searchBar-group",children:[Object(l.jsx)("input",{onChange:function(e){a(e.target.value)},type:"text",name:"search",id:"search",placeholder:"Search Article",className:"searchBar-group__input",autoComplete:"off"}),Object(l.jsx)("label",{htmlFor:"search",className:"searchBar-group__label",children:"Search Article"}),Object(l.jsxs)("button",{onClick:function(e){e.preventDefault(),t.push("/home-exercise/search/".concat(s))},className:"btn btn-search",disabled:!o,children:[Object(l.jsx)("i",{className:"fas fa-search"}),Object(l.jsx)("span",{children:"Search"})]})]})})},f=c(19),v=c(10),g=c.n(v),N=c(12),_=function(){var e=Object(r.useState)(null),t=Object(m.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(!1),a=Object(m.a)(s,2),i=a[0],j=a[1];return{isLoading:i,error:c,httpRequest:Object(r.useCallback)(function(){var e=Object(N.a)(g.a.mark((function e(t,c){var r,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,fetch("".concat("https://www.ricardo.ch/api/frontend/recruitment","/").concat(t.endpoint,"?").concat(t.params,"&apiToken=").concat("e8b913ebd94348c8f9a21b8f51585e7f3855bbe2"),{method:t.method,headers:t.headers?t.headers:[],body:t.body?t.body:null});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("There was a problem with the request");case 7:return e.next=9,r.json();case 9:return s=e.sent,j(!1),c&&c(s),e.abrupt("return",s);case 15:e.prev=15,e.t0=e.catch(1),n(e.t0.message);case 18:j(!1);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,c){return e.apply(this,arguments)}}(),[]),setIsLoading:j}},S=function(e){var t=Object(r.useRef)(null),c=Object(r.useState)(),n=Object(m.a)(c,2),s=n[0],a=n[1],i=Object(j.h)().articleId,d=_().httpRequest,o=Object(r.useCallback)(Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({endpoint:"article-details",params:"articleId=".concat(i),method:"GET"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),[i,d]),b=Object(r.useCallback)((function(e){e&&(t.current.innerHTML=e)}),[t]);return Object(r.useEffect)((function(){return o().then((function(e){d({endpoint:"user",params:"userId=".concat(e.sellerId),method:"GET"},(function(t){var c=t,r=Object(f.a)({sellerName:c.name},e);a(r),b(r.descriptionHtml)}))})),function(){}}),[d,o,b]),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-container",children:Object(l.jsx)("img",{src:null===s||void 0===s?void 0:s.imageUrl,alt:"test",className:"card-container__image"})}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("div",{className:"card-body__title",children:Object(l.jsx)("h2",{children:null===s||void 0===s?void 0:s.title})}),Object(l.jsx)("div",{className:"card-body__info",children:Object(l.jsxs)("div",{className:"",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:" Seller:"})," ",null===s||void 0===s?void 0:s.sellerName]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:" Price: "}),"9000 CHF"]})]})}),Object(l.jsx)("div",{ref:t,className:"card-body__description"})]})]})})},w=function(e){var t=e.itemsContent,c=t.buyNowPrice,r=t.endDate,n=t.id,s=t.imageUrl,a=t.title,j=new Date(r).toISOString().split("T")[0],d=new Date(r).toISOString().split("T")[1].slice(0,5);return Object(l.jsx)("div",{className:"article","data-id":n,children:Object(l.jsxs)(i.b,{to:"/home-exercise/article/".concat(n),children:[Object(l.jsx)("div",{className:"article-head",children:Object(l.jsx)("img",{src:s,alt:"test article",className:"article-head__img"})}),Object(l.jsxs)("div",{className:"article-body",children:[Object(l.jsx)("div",{className:"article-body__title",children:Object(l.jsx)("p",{className:"heading-article",children:a})}),Object(l.jsxs)("div",{className:"article-body__date",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Ending on:"}),Object(l.jsx)("span",{children:j})]}),Object(l.jsx)("p",{children:Object(l.jsx)("span",{children:d})})]}),Object(l.jsx)("div",{className:"article-body__price",children:c?Object(l.jsxs)("p",{children:[c," CHF"]}):Object(l.jsx)("p",{children:"Keine preis"})})]})]})})},T=function(e){var t=e.items,c=e.isLoading;return Object(l.jsxs)(l.Fragment,{children:[!1===c?Object(l.jsxs)("p",{className:"count-result",children:["Total Count: ",t.length+1," "]}):null,Object(l.jsx)("div",{className:"articles-grid",children:t.length||c?t.map((function(e){return Object(l.jsx)(w,{itemsContent:e},e.id)})):Object(l.jsx)("h2",{children:"NO RESULTS FOUND!!"})})]})},E=function(e){var t=Object(j.h)().searchText,c=Object(r.useState)([]),n=Object(m.a)(c,2),s=n[0],a=n[1],i=_(),d=i.httpRequest,o=i.isLoading;return Object(r.useEffect)((function(){d({endpoint:"search",params:"searchText=".concat(t),method:"GET"},(function(e){a(e.articles)}))}),[t,d]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"container",children:Object(l.jsx)(T,{items:s,isLoading:o})})})},y=function(){return Object(l.jsx)("h1",{children:"SOMETHING WENT WRONG"})},I=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(j.d,{children:[Object(l.jsx)(j.b,{path:"/",exact:!0,children:Object(l.jsx)(j.a,{to:"/home-exercise"})}),Object(l.jsx)(j.b,{exact:!0,path:"/home-exercise",children:Object(l.jsx)(p,{})}),Object(l.jsx)(j.b,{path:"/home-exercise/search/:searchText",children:Object(l.jsx)(E,{})}),Object(l.jsx)(j.b,{path:"/home-exercise/article/:articleId",children:Object(l.jsx)(S,{})}),Object(l.jsx)(j.b,{path:"*",children:Object(l.jsx)(y,{})})]})})},k=function(){return Object(l.jsx)(o,{children:Object(l.jsx)(d,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)(j.d,{children:[Object(l.jsx)(j.b,{path:"/auth",component:function(e){return Object(l.jsx)(x,{routing:e})}}),Object(l.jsx)(j.b,{path:"/",component:function(e){return Object(l.jsx)(I,{routing:e})}})]})]})})})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.5a56c64f.chunk.js.map