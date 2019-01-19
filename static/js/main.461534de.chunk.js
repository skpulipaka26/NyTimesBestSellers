(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(75)},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),c=a.n(o),l=a(31),s=a(8),i=a(10),m=a(11),u=a(15),d=a(12),p=a(16),h=a(77),b=a(80),E=a(79),v=a(78),f=a(9),k=a(6),y=a(35),O=a(20),g=a.n(O),w=a(33),N=a(34),j=a.n(N),S=function(){return function(){var e=Object(w.a)(g.a.mark(function e(t){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_BOOKS"}),e.prev=1,e.next=4,j.a.get("https://api.nytimes.com/svc/books/v3/lists/overview?api-key=JeIs16fnxd3wCBFDqGrSKUDhEMS2OLVh");case 4:a=e.sent,t({type:"FETCH_BOOKS_SUCCESS",payload:B(a.data.results)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"FETCH_BOOKS_ERROR",payload:e.t0});case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},B=function(e){var t=e.lists;return{metadata:Object(y.a)(e,["lists"]),lists:t}},_=function(e){return{render:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"header shadow"},r.a.createElement("h2",{className:"heading"},"Best Sellers")),r.a.createElement("main",null,e.children))}}},C=a(76),T=(a(66),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.props.loading?r.a.createElement("div",{className:"loading"},"loading..."):null,this.props.error?r.a.createElement("div",null,r.a.createElement("div",{className:"loading"},r.a.createElement("div",null,"an error has occured, please try again"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.props.fetchBooks()},className:"btn"},"Refresh")))):null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col align-end"},r.a.createElement("button",{onClick:function(){return e.props.fetchBooks()},className:"btn shadow"},"Refresh"))),this.props.bestSellers.lists.map(function(e,t){return r.a.createElement("div",{className:"books-container",key:t},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:"category"},e.display_name||"Unknown"))),r.a.createElement("div",{className:"row"},e.books.map(function(e,t){return r.a.createElement("div",{className:"col books",key:t},r.a.createElement(C.a,{to:{pathname:"/books/".concat(e.title),state:e}},r.a.createElement("img",{className:"book-image shadow",src:e.book_image,alt:e.author,width:"50%",style:{borderRadius:"5px"}})))})))}))}}]),t}(n.Component)),R=Object(f.b)(function(e){var t=e.nyTimesBooks;return{bestSellers:t.bestSellers,loading:t.fetching,metadata:t.metadata,error:t.error}},function(e){return Object(k.b)({fetchBooks:S},e)})(T),x=(a(68),a(70),function(e){var t=e.location.state;return t?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col align-end"},r.a.createElement("button",{onClick:function(){return e.history.goBack()},className:"btn shadow"},"Back"))),r.a.createElement("div",{className:"row"}),r.a.createElement("div",{className:"row",style:{marginTop:"2rem"}},r.a.createElement("div",{className:"col image-container"},r.a.createElement("img",{className:"shadow",src:t.book_image,alt:t.title,width:t.book_image_width,height:t.book_image_height,style:{maxWidth:"100%"}})),r.a.createElement("div",{className:"col",style:{padding:"1rem"}},r.a.createElement("div",null,r.a.createElement("h3",{className:"book-title"},t.title),r.a.createElement("p",null,"by ",r.a.createElement("span",{className:"book-author"},t.author))),r.a.createElement("p",{className:"book-description"},t.description),r.a.createElement("div",null,r.a.createElement("p",{className:"book-purchase"},"Purchase"),t.buy_links.map(function(e){return r.a.createElement("button",{onClick:function(){return window.open(e.url,"_blank")},key:e.name,type:"button",className:"book-purchase-link btn btn-primary shadow"},e.name)}))))):r.a.createElement(v.a,{to:"/books"})}),F=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement(h.a,null,r.a.createElement(b.a,null,r.a.createElement(E.a,{path:"/books/:id",component:x}),r.a.createElement(E.a,{path:"/books",component:R}),r.a.createElement(v.a,{to:"/books"}))))}}]),t}(n.Component),K=Object(f.b)(function(e){var t=e.nyTimesBooks;return Object(s.a)({},t)},function(e){return Object(k.b)({fetchBooks:S},e)})(F);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H={bestSellers:{metadata:{},lists:[]},fetching:!1,error:null},U=(a(73),[l.a]),D=k.d.apply(void 0,[k.a.apply(void 0,U)].concat([])),J=Object(k.e)(Object(k.c)({nyTimesBooks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOKS":return Object(s.a)({},e,{fetching:!0,error:null});case"FETCH_BOOKS_SUCCESS":return Object(s.a)({},e,{fetching:!1,error:null,bestSellers:t.payload});case"FETCH_BOOKS_ERROR":return Object(s.a)({},e,{fetching:!1,error:t.payload,bestSellers:{}});default:return Object(s.a)({},e)}}}),{},D);c.a.render(r.a.createElement(f.a,{store:J},r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.461534de.chunk.js.map