(window.webpackJsonpironbeers=window.webpackJsonpironbeers||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),o=(a(38),a(39),a(6)),s=a(7),i=a(9),m=a(8),u=a(10),b=(a(40),a(2)),d=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid home-screen"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-6 beer-pic"},r.a.createElement("img",{src:"../images/beers.png",alt:"all beers"}),r.a.createElement("div",null,r.a.createElement(b.b,{to:"/beers"},r.a.createElement("button",{className:"btn btn-secondary btn-sm"},"All beer")),r.a.createElement("p",null,"Check out our fine selection of beers. We have a beer for everyone!"))),r.a.createElement("div",{className:"col-12 col-lg-6 beer-pic"},r.a.createElement("img",{src:"../images/random-beer.png",alt:"random beers"}),r.a.createElement("div",null,r.a.createElement(b.b,{to:"/beers/random"},r.a.createElement("button",{className:"btn btn-secondary btn-sm"},"Random beer")),r.a.createElement("p",null,"Feeling lucky? Check out a random beer from our selection!"))),r.a.createElement("div",{className:"col-0 col-lg-3"}),r.a.createElement("div",{className:"col-12 col-lg-6 beer-pic"},r.a.createElement("img",{src:"../images/new-beer.png",alt:"new beers"}),r.a.createElement("div",null,r.a.createElement(b.b,{to:"/newbeer"},r.a.createElement("button",{className:"btn btn-secondary btn-sm"},"New beer")),r.a.createElement("p",null,"Create a beer of your own for others to try!")))))}}]),t}(n.Component),p=a(12),h=a(14),f=a.n(h),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).getAllBeer=function(){f.a.get("https://ih-beers-api2.herokuapp.com/beers").then((function(e){var t=e.data;a.setState({beers:t,page:void 0,ready:!0})})).catch((function(e){console.log(e)}))},a.displayBeers=function(){return a.state.beers.map((function(e){return console.log(e._id),r.a.createElement("div",{className:"card col-6 one-beer",key:e._id},r.a.createElement("img",{src:e.image_url,className:"card-img-top mx-auto",alt:"Picture of "+e.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,e.name),r.a.createElement("h6",null,e.tagline),r.a.createElement(b.b,{to:"/beers/".concat(e._id)},r.a.createElement("button",{className:"btn btn-danger btn-sm"},"Check it out!"))))}))},a.state={beers:null,ready:!1,page:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllBeer()}},{key:"render",value:function(){return this.state.ready?(console.log(this.state.beers),r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},r.a.createElement(b.b,{to:"/"},r.a.createElement("button",{className:"btn btn-outline-success",type:"button"},"Home"))),r.a.createElement("div",{className:"container-fluid all-the-beers"},r.a.createElement("div",{className:"row"},this.displayBeers())))):r.a.createElement("h1",null," Pouring...")}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={ready:!1,beer:null},a.getTheBeer=function(){var e;e=a.props.beer?"https://ih-beers-api2.herokuapp.com/beers/random":"https://ih-beers-api2.herokuapp.com/beers/".concat(a.props.match.params.id),f.a.get(e).then((function(e){var t=e.data;console.log(t),a.setState({beer:t,ready:!0})})).catch((function(e){console.log(e)}))},a.style={color:"gray",textAlign:"left"},a.otherStyle={textAlign:"left"},a.displayBeer=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-5 beer-image"},r.a.createElement("img",{src:a.state.beer.image_url,alt:"Picture of "+a.state.beer.name})),r.a.createElement("div",{className:"col-12 col-lg-7"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-10"},r.a.createElement("h4",{className:"float-left",style:a.otherStyle},a.state.beer.name),r.a.createElement("h5",{className:"float-right",style:a.style},a.state.beer.attenuation_level))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-10"},r.a.createElement("h6",{className:"float-left",style:a.style},a.state.beer.tagline),r.a.createElement("h6",{className:"float-right",style:a.otherStyle},a.state.beer.first_brewed))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-10"},r.a.createElement("p",null,a.state.beer.description))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h6",{style:a.style},a.state.beer.contributed_by))))))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getTheBeer()}},{key:"render",value:function(){return this.state.ready?r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},r.a.createElement(b.b,{to:"/"},r.a.createElement("button",{className:"btn btn-outline-success",type:"button"},"Home"))),this.displayBeer()):r.a.createElement("h1",null,"Pouring...")}}]),t}(n.Component),g=a(32),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",tagline:"",description:"",firstBrewed:"",brewersTips:"",attenuationLevel:0,contributedBy:""},a.addNewBeer=function(e){e.preventDefault();f.a.post("https://ih-beers-api2.herokuapp.com/beers/new",{name:a.state.name,tagline:a.state.tagline,description:a.state.description,first_brewed:a.state.firstBrewed,brewers_tips:a.state.brewersTips,attenuation_level:a.state.attenuationLevel,contributed_by:a.state.contributedBy}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}),(function(){a.props.history.push("/beers")}))},a.updateField=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},r.a.createElement(b.b,{to:"/"},r.a.createElement("button",{className:"btn btn-outline-success",type:"button"},"Home"))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 new-beer-form"},r.a.createElement("form",{onSubmit:this.addNewBeer,id:"newBeerForm"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{onChange:this.updateField,type:"text",className:"form-control",value:this.state.name,name:"name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"tagline"},"Tagline"),r.a.createElement("input",{onChange:this.updateField,type:"text",className:"form-control",value:this.state.tagline,name:"tagline"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{onChange:this.updateField,className:"form-control",value:this.state.description,name:"description",rows:"3"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"firstBrewed"},"First Brewed"),r.a.createElement("input",{onChange:this.updateField,type:"text",className:"form-control",value:this.state.firstBrewed,name:"firstBrewed"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"brewersTips"},"Brewer's Tips"),r.a.createElement("input",{onChange:this.updateField,type:"text",className:"form-control",value:this.state.brewersTips,name:"brewersTips"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"attenuationLevel"},"Attenuation Level"),r.a.createElement("input",{onChange:this.updateField,type:"number",className:"form-control",value:this.state.attenuationLevel,name:"attenuationLevel"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"contributeBy"},"Contributed By"),r.a.createElement("input",{onChange:this.updateField,type:"text",className:"form-control",value:this.state.contributedBy,name:"contributedBy"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(d,null)}}),r.a.createElement(p.a,{exact:!0,path:"/beers",render:function(e){return r.a.createElement(E,e)}}),r.a.createElement(p.a,{exact:!0,path:"/beers/random",render:function(){return r.a.createElement(v,{beer:!0})}}),r.a.createElement(p.a,{exact:!0,path:"/beers/:id",render:function(e){return r.a.createElement(v,e)}}),r.a.createElement(p.a,{exact:!0,path:"/newbeer",render:function(){return r.a.createElement(y,null)}})))}}]),t}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(b.a,null,r.a.createElement(w,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ironbeers",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/ironbeers","/service-worker.js");N?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):k(e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.9ce886a6.chunk.js.map