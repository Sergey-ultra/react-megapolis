(this.webpackJsonpmegapolis=this.webpackJsonpmegapolis||[]).push([[0],{103:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),l=a.n(c),i=a(45),s=a.n(i),m=(a(103),a(72),a(20)),u=a(6),o=a(94),d=a.n(o),p=function(e){return l.a.createElement("div",{style:{backgroung:"white",display:"flex",alignItems:"center"}},l.a.createElement("img",{src:d.a,style:{alignSelf:"center"}}))},E=a(13),f=a.n(E),b=a(26),v=a(25),h=a(69),_=function(e){var t=e.setDeleteModal,a=e.deleteItemById,n=e.id,r=Object(u.e)();return l.a.createElement(c.Fragment,null,l.a.createElement("div",{className:"modal__created-blur"}),l.a.createElement("div",{className:"item__card"},l.a.createElement("div",{className:"item__card-header"},l.a.createElement("div",{className:"item__card-title"},"\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442?"),l.a.createElement("div",{className:"item__card-close",onClick:function(){return t(!1)}})),l.a.createElement("div",{className:"delete__card"},l.a.createElement("button",{className:"delete-btn",onClick:function(){a(n),t(!1),r.replace("/")}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))},g=a(209),I=a(208),N=function(e){return e||"number"===typeof e?void 0:"\u041f\u043e\u043b\u0435 \u043f\u0443\u0441\u0442\u043e\u0435"},O=(n=6,r=50,function(e){return e&&(e.length<n||e.length>r)?"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c ".concat(n," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0438\u043b\u0438 \u0431\u043e\u043b\u044c\u0448\u0435"):void 0}),j=function(e){var t=e.input,a=e.placeholder,n=e.type,r=e.meta,c=r.touched,i=r.error,s=r.warning;return l.a.createElement("div",{className:c&&(i||s)?"input__error":" "},l.a.createElement("input",Object.assign({},t,{placeholder:a,type:n})),c&&(i&&l.a.createElement("span",null,i)||s&&l.a.createElement("span",null,s)))},y=function(e){var t=e.editItem,a=e.setEditModal,n=e.editItemById,r=(e.fetch,Object(u.e)()),i=Object(I.a)({form:"edit",initialValues:{item:t.title}})((function(e){var t=e.handleSubmit;return l.a.createElement("form",{onSubmit:t},l.a.createElement(g.a,{className:"edit__input",name:"item",validate:[N,O],component:j}),l.a.createElement("button",{className:"create-btn",type:"submit"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))}));return l.a.createElement(c.Fragment,null,l.a.createElement("div",{className:"modal__created-blur"}),l.a.createElement("div",{className:"item__card"},l.a.createElement("div",{className:"item__card-header"},l.a.createElement("div",{className:"item__card-title"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f"),l.a.createElement("div",{className:"item__card-close",onClick:function(){return a(!1)}})),l.a.createElement(i,{onSubmit:function(e){console.log(e.item),n(t.id,e.item),a(!1),r.replace("/")}})))},k=function(e){var t=e.item,a=e.index,n=e.setCurrent,r=e.deleteItemById,i=e.editItemById,s=Object(c.useState)(!1),u=Object(v.a)(s,2),o=u[0],d=u[1],p=Object(c.useState)(!1),E=Object(v.a)(p,2),f=E[0],b=E[1];return l.a.createElement(c.Fragment,null,o&&l.a.createElement(y,{setEditModal:d,editItemById:i,editItem:t,fetch:fetch}),f&&l.a.createElement(_,{setDeleteModal:b,deleteItemById:r,id:t.id,fetch:fetch}),l.a.createElement("tr",{className:"item__container"},l.a.createElement("td",{className:"item__index",onClick:function(){console.log(t),n(t)}},l.a.createElement(m.b,{to:"/items/".concat(a+1)},"\u0417\u0430\u0434\u0430\u0447\u0430 \u2116",a+1)),l.a.createElement("td",{className:"item__description"},t.title),l.a.createElement("td",{className:"item__manipulation"},l.a.createElement("div",{className:"item__details",onClick:function(){d(!0)}},l.a.createElement(h.a,null)),l.a.createElement("div",{className:"item__delete",onClick:function(){b(!0)}},l.a.createElement(h.b,null)))))},x=function(){var e=Object(c.useState)(!1),t=Object(v.a)(e,2),a=t[0],n=t[1];return{loading:a,api:Object(c.useCallback)(function(){var e=Object(b.a)(f.a.mark((function e(t){var a,r,c,l,i,s=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:"GET",r=s.length>2&&void 0!==s[2]?s[2]:null,c=s.length>3&&void 0!==s[3]?s[3]:{},n(!0),e.prev=4,r&&(r=JSON.stringify(r),c["Content-type"]="application/json"),e.next=8,fetch(t,{method:a,body:r,headers:c});case 8:return l=e.sent,e.next=11,l.json();case 11:if(i=e.sent,console.log(i),l.ok){e.next=15;break}throw new Error(i.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 15:return n(!1),e.abrupt("return",i);case 19:throw e.prev=19,e.t0=e.catch(4),n(!1),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t){return e.apply(this,arguments)}}(),[])}},C=a(12),w=a(22),S={items:[],currentItem:{title:"\u041e\u0447\u0435\u043d\u044c \u0445\u043e\u0440\u043e\u0448\u043e"}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ITEMS":return Object(w.a)(Object(w.a)({},e),{},{items:t.items});case"SET_CURRENT":return console.log(t.current),Object(w.a)(Object(w.a)({},e),{},{currentItem:t.current});default:return e}},B=function(e){var t=e.setCreateModal,a=e.createItem,n=Object(u.e)(),r=Object(I.a)({form:"create"})((function(e){var t=e.handleSubmit;return l.a.createElement("form",{onSubmit:t},l.a.createElement(g.a,{name:"createItem",validate:[N,O],component:j}),l.a.createElement("button",{className:"create-btn",type:"submit"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))}));return l.a.createElement(c.Fragment,null,l.a.createElement("div",{className:"modal__created-blur"}),l.a.createElement("div",{className:"item__card"},l.a.createElement("div",{className:"item__card-header"},l.a.createElement("div",{className:"item__card-title"},"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),l.a.createElement("div",{className:"item__card-close",onClick:function(){return t(!1)}})),l.a.createElement(r,{onSubmit:function(e){a(e.createItem),t(!1),n.replace("/")}})))},M=Object(C.b)((function(e){return{items:e.items.items}}),{fetchItems:function(e){return function(t){t(function(e){return{type:"FETCH_ITEMS",items:e}}(e))}},setCurrent:function(e){return function(t){t(function(e){return{type:"SET_CURRENT",current:e}}(e)),console.log(e)}}})((function(e){var t=e.items,a=e.fetchItems,n=e.setCurrent,r=Object(c.useState)(!1),i=Object(v.a)(r,2),s=i[0],m=i[1],u=x(),o=u.loading,d=u.api,E=Object(c.useCallback)(Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("https://test.megapolis-it.ru/api/list","GET");case 3:t=e.sent,console.log(t.data),a(t.data),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])}))),[d]),h=Object(c.useCallback)(function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("https://test.megapolis-it.ru/api/list","POST",{title:t});case 3:return e.next=5,d("https://test.megapolis-it.ru/api/list","GET");case 5:n=e.sent,a(n.data),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),[d]),_=Object(c.useCallback)(function(){var e=Object(b.a)(f.a.mark((function e(t,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("https://test.megapolis-it.ru/api/list/".concat(t),"POST",{id:t,title:n});case 3:return e.next=5,d("https://test.megapolis-it.ru/api/list","GET");case 5:r=e.sent,a(r.data),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),[d]),g=Object(c.useCallback)(function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("https://test.megapolis-it.ru/api/list/".concat(t),"DELETE");case 3:return e.next=5,d("https://test.megapolis-it.ru/api/list","GET");case 5:n=e.sent,a(n.data),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),[d]);return Object(c.useEffect)((function(){E()}),[E,h]),o?l.a.createElement(p,null):l.a.createElement(c.Fragment,null,l.a.createElement("div",{className:"header__wrapper"},s&&l.a.createElement(B,{setCreateModal:m,createItem:h,fetch:E}),l.a.createElement("div",{className:"list__title"},"\u0421\u043f\u0438\u0441\u043e\u043a"),l.a.createElement("button",{className:"create-btn",onClick:function(){return m(!0)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),l.a.createElement("section",{className:"table"},l.a.createElement("table",null,t.map((function(e,t){return console.log(e.title),l.a.createElement(k,{key:t,item:e,index:t,setCurrent:n,editItemById:_,deleteItemById:g,fetch:E})})))))})),F=Object(C.b)((function(e){return{currentItem:e.items.currentItem}}),{})((function(e){var t=e.match,a=e.currentItem,n=t.params.id;return console.log(a),a?l.a.createElement(c.Fragment,null,l.a.createElement("div",{className:"detail__title"},"\u0417\u0430\u0434\u0430\u0447\u0430 \u2116 ",n),l.a.createElement("div",{className:"detail__text"},"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),l.a.createElement("div",{className:"detail__main"},a.title),l.a.createElement(m.b,{to:"/"}," ",l.a.createElement("button",{className:"detail-btn"},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u0432 \u0441\u043f\u0438\u0441\u043e\u043a "))):l.a.createElement(p,null)})),z=(a(206),Object(C.b)((function(e){return{appInitialized:e.app.appInitialized}}),{})((function(e){return e.appInitialized?l.a.createElement(m.a,null,l.a.createElement("div",{className:"app-wrapper"},l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"container"},l.a.createElement(u.a,{exact:!0,path:"/",component:M}),l.a.createElement(u.a,{exact:!0,path:"/items/:id",component:F}))))):l.a.createElement(p,null)}))),G=a(7),D=a(97),J={appInitialized:!0},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP_INITIALIZED":return Object(w.a)(Object(w.a)({},e),{},{appInitialized:!0});default:return e}},R=a(210),H=Object(G.c)({items:T,app:P,form:R.a}),A=Object(G.d)(H,Object(G.a)(D.a));window.store=A;var L=A;s.a.render(l.a.createElement(C.a,{store:L},l.a.createElement(m.a,null,l.a.createElement(z,null))),document.getElementById("root"))},72:function(e,t,a){},94:function(e,t,a){e.exports=a.p+"static/media/1_9EBHIOzhE1XfMYoKz1JcsQ.26ef8bb4.gif"},98:function(e,t,a){e.exports=a(207)}},[[98,1,2]]]);
//# sourceMappingURL=main.d2a20c2a.chunk.js.map