(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{11:function(n,t,e){"use strict";e.r(t);var c,o,i,r,u,d,s,a,b,h=e(1),l=e.n(h),m=e(3),p=e.n(m),f=(e(9),e(4)),j=e.p+"static/media/Cookie.7051ee39.png",g=e(0),y=0,k=0;var O=function n(t,e,c,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;Object(f.a)(this,n),this.name=o,this.basePrice=t,this.price=t,this.count=0,this.baseProduction=e,this.production=e,this.interval=c,this.clickProgress=0,this.grandmaboostamount=i};function v(n){y>=n.price&&(0==n.count&&(o.production+=n.grandmaboostamount),C(-n.price),n.count++,n.price=Math.ceil(1.1*n.price),k=function(){for(var n=0,t=0;t<b.length;t++)n+=b[t].count*b[t].production/(b[t].interval/1e3);return Math.round(10*n)/10}(),x())}function x(){document.getElementById("cookiecount").innerHTML=y,document.getElementById("cps").innerHTML=k+" Cookies per Second",document.getElementById("cursorbutton").innerHTML=c.count+" Cursors ("+c.price+")";for(var n=1;n<b.length;n++)b[n-1].count>0?(document.getElementById(b[n].name+"button").hidden=!1,document.getElementById(b[n].name+"button").innerHTML=b[n].count+" "+b[n].name+" ("+b[n].price+")"):document.getElementById(b[n].name+"button").hidden=!0}function C(n){y+=n,y=Math.round(10*y)/10}var w=Date.now();function E(){C(1),x()}var I=function(){return c=new O(15,1,5e3,"cursor"),o=new O(100,4,5e3,"grandma"),i=new O(500,20,5e3,"factory",1),r=new O(2e3,50,5e3,"mine",2),u=new O(7e3,100,5e3,"shipment",3),d=new O(5e4,500,5e3,"alchemy lab",4),s=new O(1e6,6666,5e3,"portal",5),a=new O(123456e3,123456,5e3,"time machine",6),b=[c,o,i,r,u,d,s,a],Object(h.useEffect)((function(){setInterval((function(){!function(){var n=Date.now(),t=n-w;w=n,b.forEach((function(n){(n.count>0&&(n.clickProgress+=t/(n.interval/n.count)),n.clickProgress>=1)&&(C(Math.floor(n.clickProgress)*n.production),n.clickProgress%=1)})),x()}()}),16.666666666666668)}),[]),Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("body",{children:[Object(g.jsx)("p",{id:"cookiecount",children:y}),Object(g.jsxs)("p",{id:"cps",children:[k," Cookies per Second"]}),Object(g.jsx)("input",{type:"image",src:j,onClick:E,width:"169",height:"169"}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("button",{id:"cursorbutton",type:"button",onClick:function(){return v(c)},children:[c.count," ",c.name," (",c.price,")"]}),Object(g.jsxs)("button",{hidden:!0,id:"grandmabutton",type:"button",onClick:function(){return v(o)},children:[o.count," ",o.name," (",o.price,")"]}),Object(g.jsxs)("button",{hidden:!0,id:"factorybutton",type:"button",onClick:function(){return v(i)},children:[i.count," ",i.name," (",i.price,")"]}),Object(g.jsxs)("button",{hidden:!0,id:"minebutton",type:"button",onClick:function(){return v(r)},children:[r.count," ",r.name," (",r.price,")"]}),Object(g.jsxs)("button",{hidden:!0,id:"shipmentbutton",type:"button",onClick:function(){return v(u)},children:[u.count," ",u.name," (",u.price,")"]}),Object(g.jsxs)("button",{hidden:!0,id:"alchemy labbutton",type:"button",onClick:function(){return v(d)},children:[d.count," ",d.name," (",d.price,")"]}),Object(g.jsxs)("button",{hidden:!0,id:"portalbutton",type:"button",onClick:function(){return v(s)},children:[s.count," ",s.name," (",s.price,")"]}),Object(g.jsxs)("button",{hidden:!0,id:"time machinebutton",type:"button",onClick:function(){return v(a)},children:[a.count," ",a.name," (",a.price,")"]})]})]})})},M=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,12)).then((function(t){var e=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;e(n),c(n),o(n),i(n),r(n)}))};p.a.render(Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(I,{})}),document.getElementById("root")),M()},9:function(n,t,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.99eb8b03.chunk.js.map