(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{279:function(e,t,n){e.exports=n(591)},284:function(e,t,n){},285:function(e,t,n){},344:function(e,t){},346:function(e,t,n){var a={"./N3Lexer":116,"./N3Lexer.js":116,"./N3Parser":117,"./N3Parser.js":117,"./N3Store":175,"./N3Store.js":175,"./N3StreamParser":176,"./N3StreamParser.js":176,"./N3StreamWriter":181,"./N3StreamWriter.js":181,"./N3Util":118,"./N3Util.js":118,"./N3Writer":121,"./N3Writer.js":121};function r(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=346},349:function(e,t){},351:function(e,t){},369:function(e,t){},371:function(e,t){},388:function(e,t){},390:function(e,t){},394:function(e,t){},396:function(e,t){},429:function(e,t){},430:function(e,t){},432:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=432},483:function(e,t){},484:function(e,t){},548:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=548},577:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=577},591:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(43),i=n.n(o),c=(n(284),n(44)),l=n(45),s=n(48),u=n(46),d=n(49),f=(n(285),n(86)),h=n(56),m=n(149),p=n.n(m),w=n(274),g=n.n(w),b=(n(286),function(){return r.a.createElement("div",{style:{padding:"3%"}},r.a.createElement(p.a,{bg:"light",variant:"light",fixed:"top"},r.a.createElement(p.a.Brand,null,r.a.createElement("img",{src:"favicon.ico",width:"30",height:"30",alt:"Solid logo"}),r.a.createElement("span",{style:{marginLeft:"5%"}},"Dr Martens")),r.a.createElement(g.a,{className:"mr-auto"},r.a.createElement(f.b,{to:"/",style:{color:"#000",marginLeft:"25%"}},"Healthcase"),r.a.createElement(f.b,{to:"/getuser",style:{color:"#000",marginLeft:"25%"}},"Usercheck"))))}),y=function(){return r.a.createElement("img",{src:"http://nationalpainreport.com/wp-content/uploads/2014/07/bigstock-Doctor-physician-Isolated-ov-33908342-e1446160270762.jpg",alt:"",style:{display:"flex",width:"100%"}})},E=n(278),v=n.n(E),O=n(277),j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(O.a,{url:"https://a-solid-web.github.io/profile-viewer-react/",height:"800px",width:"800px",position:"relative",allowFullScreen:!0,styles:{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}))}}]),t}(r.a.Component),N=n(593),x=n(594),k=n(595),S=n(70),D=n.n(S),I=n(85),U=n.n(I),C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).fetchUser=function(){U.a.trackSession(function(e){if(e){var t=e.webId;console.log(t);D.a.graph();n.setState({webId:t})}else console.log("You are not logged in")})},n.sendNotification=function(){var e=n.state.webId.replace("profile/card#me","inbox"),t=D.a.graph(),a={noMeta:!0,contentType:"text/turtle",body:"\n        @prefix : <#>.\n        @prefix inbox: <./>.\n        @prefix solid: <http://www.w3.org/ns/solid/terms#>.\n        @prefix as: <http://www.w3.org/ns/activitystreams#>.\n        @prefix PREQ: <https://a-solid-web.github.io/permission-ontology/permissionrequests.rdf#> .\n        \n        <> a solid:Notification , as:Announce, PREQ:DataRequest;\n          PREQ:requestDataType PREQ:HealthData;\n          PREQ:requests <https://ludwigschubert.solid.community/private/health>;\n          PREQ:requestFrom <https://malte18.solid.community/profile/card#me>.\n        "};new D.a.Fetcher(t).webOperation("POST",e,a)},n.state={modalShow:!1,webId:""},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"toggleModal",value:function(){this.state.modalShow||this.sendNotification(),this.setState({modalShow:!this.state.modalShow})}},{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"render",value:function(){return r.a.createElement(N.a,null,r.a.createElement(y,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(x.a,null,r.a.createElement("h1",null,"Send me your X-Ray Data!"))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(x.a,null,r.a.createElement(k.a,{variant:"primary",onClick:this.toggleModal.bind(this)},"Give Permission with SOIL"))),r.a.createElement(j,{show:this.state.modalShow,onHide:this.toggleModal.bind(this),style:{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}))}}]),t}(a.Component),P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).fetchUser=function(){U.a.trackSession(function(e){if(e){var t=e.webId;console.log(t);D.a.graph();n.setState({webId:t})}else console.log("You are not logged in")})},n.state={webId:""},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.webId)}}]),t}(r.a.Component),M=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",render:function(){return r.a.createElement(C,null)},exact:!0}),r.a.createElement(h.a,{path:"/getuser",render:function(){return r.a.createElement(P,null)},exact:!0}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[279,1,2]]]);
//# sourceMappingURL=main.9f3b1f00.chunk.js.map