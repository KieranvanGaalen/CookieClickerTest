(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var c,o,i,r,u,d,s,a,b,l=e(2),h=e(4),p=e(7),m=e(6),j=e(1),f=e.n(j),g=e(5),y=e.n(g),k=(e(12),e.p+"static/media/Cookie.7051ee39.png"),O=e(0),v=0,C=0;var x=function t(n,e,c,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;Object(l.a)(this,t),this.name=o,this.basePrice=n,this.price=n,this.count=0,this.baseProduction=e,this.production=e,this.interval=c,this.clickProgress=0,this.grandmaboostamount=i};function w(t){v>=t.price&&(0==t.count&&(o.production+=t.grandmaboostamount),E(-t.price),t.count++,t.price=Math.ceil(1.1*t.price),C=function(){for(var t=0,n=0;n<b.length;n++)t+=b[n].count*b[n].production/(b[n].interval/1e3);return Math.round(10*t)/10}(),M())}function M(){document.getElementById("cookiecount").innerHTML=v,document.getElementById("cps").innerHTML=C+" Cookies per Second",document.getElementById("cursorbutton").innerHTML=c.count+" Cursors ("+c.price+")";for(var t=1;t<b.length;t++)b[t-1].count>0?(document.getElementById(b[t].name+"button").hidden=!1,document.getElementById(b[t].name+"button").innerHTML=b[t].count+" "+b[t].name+" ("+b[t].price+")"):document.getElementById(b[t].name+"button").hidden=!0}function E(t){v+=t,v=Math.round(10*v)/10}var I=Date.now();function P(){E(1),M()}var B=function(){return c=new x(15,1,5e3,"cursor"),o=new x(100,4,5e3,"grandma"),i=new x(500,20,5e3,"factory",1),r=new x(2e3,50,5e3,"mine",2),u=new x(7e3,100,5e3,"shipment",3),d=new x(5e4,500,5e3,"alchemy lab",4),s=new x(1e6,6666,5e3,"portal",5),a=new x(123456e3,123456,5e3,"time machine",6),b=[c,o,i,r,u,d,s,a],Object(j.useEffect)((function(){setInterval((function(){!function(){var t=Date.now(),n=t-I;I=t,b.forEach((function(t){(t.count>0&&(t.clickProgress+=n/(t.interval/t.count)),t.clickProgress>=1)&&(E(Math.floor(t.clickProgress)*t.production),t.clickProgress%=1)})),M()}()}),16.666666666666668)}),[]),Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("body",{children:[Object(O.jsx)("p",{id:"cookiecount",children:v}),Object(O.jsxs)("p",{id:"cps",children:[C," Cookies per Second"]}),Object(O.jsx)("input",{type:"image",src:k,onClick:P,width:"169",height:"169"}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("button",{id:"cursorbutton",type:"button",onClick:function(){return w(c)},children:[c.count," ",c.name," (",c.price,")"]}),Object(O.jsxs)("button",{hidden:!0,id:"grandmabutton",type:"button",onClick:function(){return w(o)},children:[o.count," ",o.name," (",o.price,")"]}),Object(O.jsxs)("button",{hidden:!0,id:"factorybutton",type:"button",onClick:function(){return w(i)},children:[i.count," ",i.name," (",i.price,")"]}),Object(O.jsxs)("button",{hidden:!0,id:"minebutton",type:"button",onClick:function(){return w(r)},children:[r.count," ",r.name," (",r.price,")"]}),Object(O.jsxs)("button",{hidden:!0,id:"shipmentbutton",type:"button",onClick:function(){return w(u)},children:[u.count," ",u.name," (",u.price,")"]}),Object(O.jsxs)("button",{hidden:!0,id:"alchemy labbutton",type:"button",onClick:function(){return w(d)},children:[d.count," ",d.name," (",d.price,")"]}),Object(O.jsxs)("button",{hidden:!0,id:"portalbutton",type:"button",onClick:function(){return w(s)},children:[s.count," ",s.name," (",s.price,")"]}),Object(O.jsxs)("button",{hidden:!0,id:"time machinebutton",type:"button",onClick:function(){return w(a)},children:[a.count," ",a.name," (",a.price,")"]})]})]})})},L=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,15)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,i=n.getLCP,r=n.getTTFB;e(t),c(t),o(t),i(t),r(t)}))},T=function(t){Object(p.a)(e,t);var n=Object(m.a)(e);function e(){return Object(l.a)(this,e),n.apply(this,arguments)}return Object(h.a)(e,[{key:"componentDidMount",value:function(){document.title="Cookie Clicker"}},{key:"render",value:function(){return Object(O.jsx)(f.a.StrictMode,{children:Object(O.jsx)(B,{})})}}]),e}(f.a.Component);y.a.render(Object(O.jsx)(f.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),L()}},[[14,1,2]]]);
//# sourceMappingURL=main.fb2b7f96.chunk.js.map