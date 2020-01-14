(window.webpackJsonpironbeers=window.webpackJsonpironbeers||[]).push([[0],{35:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},42:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),s=(a(40),a(41),a(6)),o=a(7),i=a(9),m=a(8),u=a(10),d=(a(42),a(2)),b=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid home-screen"},r.a.createElement("h1",{className:"page-title"},"Ironbeers"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-6 beer-pic"},r.a.createElement("img",{src:"./images/beers.png",alt:"all beers"}),r.a.createElement("div",null,r.a.createElement(d.b,{to:"/beers"},r.a.createElement("button",{className:"btn btn-secondary btn-sm"},"All beer")),r.a.createElement("p",null,"Check out our fine selection of beers. We have a beer for everyone!"))),r.a.createElement("div",{className:"col-12 col-lg-6 beer-pic"},r.a.createElement("img",{src:"./images/random-beer.png",alt:"random beers"}),r.a.createElement("div",null,r.a.createElement(d.b,{to:"/beers/random"},r.a.createElement("button",{className:"btn btn-secondary btn-sm"},"Random beer")),r.a.createElement("p",null,"Feeling lucky? Check out a random beer from our selection!"))),r.a.createElement("div",{className:"col-0 col-lg-3"}),r.a.createElement("div",{className:"col-12 col-lg-6 beer-pic"},r.a.createElement("img",{src:"./images/new-beer.png",alt:"new beers"}),r.a.createElement("div",null,r.a.createElement(d.b,{to:"/newbeer"},r.a.createElement("button",{className:"btn btn-secondary btn-sm"},"New beer")),r.a.createElement("p",null,"Create a beer of your own for others to try!")))))}}]),t}(n.Component),p=a(12),h=a(14),f=a.n(h),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).getAllBeer=function(){f.a.get("https://ih-beers-api2.herokuapp.com/beers").then((function(e){var t=e.data;a.setState({beers:t,page:void 0,ready:!0})})).catch((function(e){console.log(e)}))},a.displayBeers=function(){return a.state.beers.map((function(e){return console.log(e._id),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card col-10 offset-1 col-md-4 offset-md-1 mt-5 one-beer",key:e._id},r.a.createElement("img",{src:e.image_url,className:"card-img-top mx-auto",alt:"Picture of "+e.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,e.name),r.a.createElement("h6",null,e.tagline),r.a.createElement(d.b,{to:"/beers/".concat(e._id)},r.a.createElement("button",{className:"btn btn-danger btn-sm"},"Check it out!")))),r.a.createElement("div",{className:"col-0 col-md-1"}))}))},a.state={beers:null,ready:!1,page:null},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getAllBeer()}},{key:"render",value:function(){return this.state.ready?(console.log(this.state.beers),r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid all-the-beers"},r.a.createElement(d.b,{to:"/"},r.a.createElement("button",{className:"btn btn-secondary mt-4",type:"button"},"Home")),r.a.createElement("h1",{className:"page-title"},"Ironbeers"),r.a.createElement("div",{className:"row"},this.displayBeers())))):r.a.createElement("div",{className:"container-fluid all-the-beers"},r.a.createElement("h1",{className:"page-title"}," Pouring..."))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={ready:!1,beer:null},a.getTheBeer=function(){var e;e=a.props.beer?"https://ih-beers-api2.herokuapp.com/beers/random":"https://ih-beers-api2.herokuapp.com/beers/".concat(a.props.match.params.id),f.a.get(e).then((function(e){var t=e.data;console.log(t),a.setState({beer:t,ready:!0})})).catch((function(e){console.log(e)}))},a.style={color:"gray",textAlign:"left"},a.otherStyle={textAlign:"left"},a.displayBeer=function(){return r.a.createElement("div",{className:"container-fluid one-beer"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-5 beer-image"},r.a.createElement("img",{src:a.state.beer.image_url,alt:"Picture of "+a.state.beer.name})),r.a.createElement("div",{className:"col-12 col-lg-7"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-10"},r.a.createElement("h4",{className:"float-left",style:a.otherStyle},a.state.beer.name),r.a.createElement("h5",{className:"float-right",style:a.style},a.state.beer.attenuation_level))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-10"},r.a.createElement("h6",{className:"float-left",style:a.style},a.state.beer.tagline),r.a.createElement("h6",{className:"float-right",style:a.otherStyle},a.state.beer.first_brewed))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-10"},r.a.createElement("p",null,a.state.beer.description))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h6",{style:a.style},a.state.beer.contributed_by))))))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getTheBeer()}},{key:"render",value:function(){return this.state.ready?r.a.createElement("div",{className:"all-the-beers"},r.a.createElement(d.b,{to:"/"},r.a.createElement("button",{className:"btn btn-secondary mt-4",type:"button"},"Home")),r.a.createElement("h1",{className:"page-title"},"Ironbeers"),this.displayBeer()):r.a.createElement("h1",{className:"page-title"},"Pouring...")}}]),t}(n.Component),v=a(33),N=a(19),y=a.n(N),w=a(34),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",tagline:"",description:"",firstBrewed:"",brewersTips:"",attenuationLevel:0,contributedBy:""},a.addNewBeer=function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"https://ih-beers-api2.herokuapp.com/beers/new",e.next=4,f.a.post("https://ih-beers-api2.herokuapp.com/beers/new",{name:a.state.name,tagline:a.state.tagline,description:a.state.description,first_brewed:a.state.firstBrewed,brewers_tips:a.state.brewersTips,attenuation_level:a.state.attenuationLevel,contributed_by:a.state.contributedBy}).catch((function(e){console.log(e)}));case 4:e.sent,a.props.history.push("/beers");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.updateField=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"new-beer-form"},r.a.createElement(d.b,{to:"/"},r.a.createElement("button",{className:"btn btn-secondary mt-4",type:"button"},"Home")),r.a.createElement("h1",{className:"page-title"},"Ironbeers"),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h3",{className:"page-title2"},"New Beer"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3"},r.a.createElement("form",{onSubmit:this.addNewBeer,id:"newBeerForm",className:"pb-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"page-title3"},"Name"),r.a.createElement("input",{onChange:this.updateField,type:"text",className:"form-control",value:this.state.name,name:"name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"page-title3"},"Tagline"),r.a.createElement("input",{onChange:this.updateField,type:"text",className:"form-control",value:this.state.tagline,name:"tagline"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"page-title3"},"Description"),r.a.createElement("textarea",{onChange:this.updateField,className:"form-control",value:this.state.description,name:"description",rows:"3"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"page-title3"},"First Brewed"),r.a.createElement("input",{onChange:this.updateField,type:"text",className:"form-control",value:this.state.firstBrewed,name:"firstBrewed"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"page-title3"},"Brewer's Tips"),r.a.createElement("input",{onChange:this.updateField,type:"text",className:"form-control",value:this.state.brewersTips,name:"brewersTips"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"page-title3"},"Attenuation Level"),r.a.createElement("input",{onChange:this.updateField,type:"number",className:"form-control",value:this.state.attenuationLevel,name:"attenuationLevel"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"page-title3"},"Contributed By"),r.a.createElement("input",{onChange:this.updateField,type:"text",className:"form-control",value:this.state.contributedBy,name:"contributedBy"})),r.a.createElement("button",{type:"submit",className:"btn btn-danger"},"Add beer!"))))))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(b,null)}}),r.a.createElement(p.a,{exact:!0,path:"/beers",render:function(e){return r.a.createElement(g,e)}}),r.a.createElement(p.a,{exact:!0,path:"/beers/random",render:function(){return r.a.createElement(E,{beer:!0})}}),r.a.createElement(p.a,{exact:!0,path:"/beers/:id",render:function(e){return r.a.createElement(E,e)}}),r.a.createElement(p.a,{exact:!0,path:"/newbeer",render:function(e){return r.a.createElement(j,e)}})))}}]),t}(n.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(d.a,{basename:"/ironbeers"},r.a.createElement(k,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");O?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):B(e)}))}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.249966e8.chunk.js.map