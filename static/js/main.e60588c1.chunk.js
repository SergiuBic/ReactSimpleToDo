(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(3),r=a.n(c),s=(a(21),a(13)),o=a(7),m=a(8),l=a(14),d=a(9),u=a(15),h=a(2),v=(a(22),a(10)),p=a(11);var f=function(e){var t=e.items.map(function(t){return i.a.createElement("div",{className:"display",key:t.key},i.a.createElement("p",null,i.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){e.setUpdate(a.target.value,t.key)}}),i.a.createElement("span",null," ",i.a.createElement(v.a,{className:"faicons",icon:"trash",onClick:function(){e.deleteItem(t.key)}}))))});return i.a.createElement("div",null,i.a.createElement(p.a,{duration:300,easing:"ease-in-out"},t))},b=a(4),y=a(12);a(28);b.b.add(y.a);var k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={items:[],currentItem:{text:"",key:""}},a.doSomething=a.doSomething.bind(Object(h.a)(Object(h.a)(a))),a.addItem=a.addItem.bind(Object(h.a)(Object(h.a)(a))),a.deleteItem=a.deleteItem.bind(Object(h.a)(Object(h.a)(a))),a.setUpdate=a.setUpdate.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"doSomething",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var a=[].concat(Object(s.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter(function(t){return t.key!==e});this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var a=this.state.items;a.map(function(a){a.key===t&&(a.text=e)}),this.setState({items:a})}},{key:"render",value:function(){return i.a.createElement("div",{className:"topside"},i.a.createElement("div",{className:"title"},"Simple React UI CRUD"),i.a.createElement("header",null,i.a.createElement("form",{id:"myform",onSubmit:this.addItem},i.a.createElement("input",{type:"text",placeholder:"Add item",value:this.state.currentItem.text,onChange:this.doSomething}),i.a.createElement("button",{type:"submit"},"Add"))),i.a.createElement("div",{className:"itemside"},i.a.createElement(f,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[16,1,2]]]);
//# sourceMappingURL=main.e60588c1.chunk.js.map