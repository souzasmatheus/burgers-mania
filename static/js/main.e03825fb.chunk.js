(this["webpackJsonpburgers-mania"]=this["webpackJsonpburgers-mania"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),c=a.n(i),o=a(161),l=a(6),u=(a(99),a(14)),s=a(5),d=a.n(s),p=a(7),A=a(53);function f(){var e=Object(p.a)(["\n  font-weight: 700;\n  font-size: 12px;\n"]);return f=function(){return e},e}function m(){var e=Object(p.a)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffd902;\n  padding: 4px 6px;\n  border-radius: 15px;\n"]);return m=function(){return e},e}function b(){var e=Object(p.a)(["\n  opacity: 0;\n  background-image: ",";\n  width: 80px;\n  height: 80px;\n  background-position: center center;\n  background-size: cover;\n  border-radius: 10px;\n  background-repeat: no-repeat;\n  padding: 6px;\n\n  && {\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n"]);return b=function(){return e},e}var g=Object(l.b)(A.a)(b(),(function(e){var t=e.source;return"url(".concat(t,")")})),h=l.b.div(m()),E=l.b.p(f()),x=Object(n.forwardRef)((function(e,t){var a=e.name,n=e.backgroundSource,i=e.style;return r.a.createElement(g,Object.assign({source:n},{style:i,ref:t}),r.a.createElement(h,null,r.a.createElement(E,null,a)))}));x.propTypes={name:d.a.string.isRequired,backgroundSource:d.a.string.isRequired,style:d.a.oneOfType([d.a.object,d.a.arrayOf(d.a.object)])},x.defaultProps={style:{}};function j(){var e=Object(p.a)(["\n  width: 32px;\n  height: 32px;\n"]);return j=function(){return e},e}var y=l.b.img(j()),O=function(e){var t=e.to,a=e.icon;return r.a.createElement("a",{href:t,target:"_blank"},r.a.createElement(y,{src:a}))},C=a(70),v=a.n(C),w=a(145),B=a(28),M=a(69),P=a(68),Q=a.n(P),D=[{title:"Queijo",price:"1.00",id:0},{title:"Calabresa",price:"1.00",id:1},{title:"Bacon",price:"1.00",id:2},{title:"Cebola Roxa",price:"1.00",id:3},{title:"Molho Especial",price:"1.00",id:4},{title:"Cheddar",price:"1.00",id:5},{title:"Catupiry",price:"1.00",id:6},{title:"Fil\xe9 de Frango",price:"2.00",id:7},{title:"Ovo",price:"1.00",id:8}],J=Object(M.a)((function(e){return{products:Q.a,extras:D,cart:[],location:null,addToCart:function(t){return e((function(e){return{cart:[].concat(Object(B.a)(e.cart),[t])}}))},removeFromCart:function(t){return e((function(e){return{cart:Object(B.a)(e.cart.filter((function(e,a){return a!==t})))}}))},setLocation:function(t){return e((function(){return{location:t}}))}}})),R=a(144);function k(){var e=Object(p.a)(["\n  position: fixed;\n  bottom: 40px;\n  right: 30px;\n"]);return k=function(){return e},e}var N=Object(l.b)(R.a)(k()),W=function(e){var t=e.handleCartButtonClick,a=J((function(e){return e.cart}));return r.a.createElement(N,{color:"secondary",badgeContent:a.length,overlap:"circle",onClick:t},r.a.createElement(w.a,null,r.a.createElement(v.a,null)))},H=a(107);function q(){var e=Object(p.a)(["\n  && {\n    color: black;\n  }\n"]);return q=function(){return e},e}var T=Object(l.b)(H.a).attrs({disabled:!0})(q()),F=a(146),G=a(71),Z=a.n(G);function I(){var e=Object(p.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n"]);return I=function(){return e},e}var S=Object(l.b)(F.a).attrs({children:r.a.createElement(Z.a,null)})(I()),V=a(162),U=a(148),K=a(147);function Y(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-around;\n"]);return Y=function(){return e},e}var X=Object(l.b)(K.a)(Y()),z=function(){var e=J((function(e){return[e.setLocation,e.location]})),t=Object(u.a)(e,2),a=t[0],n=t[1];return r.a.createElement(V.a,{open:!n},r.a.createElement(U.a,null,"Por favor, selecione uma de nossas hamburguerias:"),r.a.createElement(X,null,r.a.createElement(H.a,{onClick:function(){return a("spa")}},"S\xe3o Pedro d'Aldeia"),r.a.createElement(H.a,{onClick:function(){return a("cf")}},"Cabo Frio")))};function L(){var e=Object(p.a)(["\n  text-align: center;\n  color: #fff;\n  font-weight: 400;\n  font-size: 16px;\n  margin: 20px auto;\n"]);return L=function(){return e},e}function _(){var e=Object(p.a)(["\n  padding: 15px 30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  border-bottom: 0.5px solid #fff;\n"]);return _=function(){return e},e}function $(){var e=Object(p.a)(["\n  width: 100%;\n  background-color: #2a2a2a;\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n"]);return $=function(){return e},e}var ee=l.b.div($()),te=l.b.div(_()),ae=l.b.h1(L()),ne=a(72),re=a.n(ne),ie=a(73),ce=a.n(ie),oe=a(74),le=a.n(oe),ue=function(){var e=J((function(e){return e.location})),t=e?Object({NODE_ENV:"production",PUBLIC_URL:"/burgers-mania",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_PHONE_cf:"5522988144983",REACT_APP_PHONE_spa:"5522999850323"})["REACT_APP_PHONE_".concat(e)]:void 0;return r.a.createElement(ee,null,r.a.createElement(te,null,r.a.createElement(O,{icon:re.a,to:"http://www.facebook.com/burgersmania2018"}),r.a.createElement(O,{icon:ce.a,to:"http://www.instagram.com/burgersmania_/"}),r.a.createElement(O,{icon:le.a,to:"https://wa.me/".concat(t)})),r.a.createElement(ae,null,"Burgers Mania"))},se=a(150),de=a(166),pe=a(152),Ae=a(151),fe=a(76),me=a.n(fe),be=function(e,t){var a=e.amount,n=e.id,r=e.isCombo,i=t.find((function(e){return e.id===n})).title;return r?"".concat(a," trio").concat(a>1?"s":""," de ").concat(i):"".concat(a," ").concat(i)},ge=function(e,t){return e.map((function(e){return t.find((function(t){return t.id===e})).title})).join(", ")},he=a(75),Ee=a.n(he),xe=a(149);function je(){var e=Object(p.a)(["\n  justify-content: space-around;\n"]);return je=function(){return e},e}function ye(){var e=Object(p.a)(["\n  fill: rgb(37, 211, 102);\n"]);return ye=function(){return e},e}function Oe(){var e=Object(p.a)(["\n  &.MuiButton-root {\n    border: 1px solid rgba(37, 211, 102, 0.23);\n    color: rgb(37, 211, 102);\n  }\n"]);return Oe=function(){return e},e}var Ce=Object(l.b)(H.a)(Oe()),ve=Object(l.b)(Ee.a)(ye()),we=Object(l.b)(xe.a)(je()),Be=function(e){var t=e.visible,a=e.handleClose,n=J((function(e){return[e.cart,e.products,e.extras,e.removeFromCart]})),i=Object(u.a)(n,4),c=i[0],o=i[1],l=i[2],s=i[3];return r.a.createElement(V.a,{fullWidth:!0,onClose:a,open:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(U.a,null,"Confirma\xe7\xe3o do pedido"),r.a.createElement(S,{onClick:a}),c.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement(se.a,{component:"div","aria-labelledby":"nested-list-subheader"},c.map((function(e,t){return r.a.createElement(de.a,null,r.a.createElement(Ae.a,{primary:be(e,o),secondary:e.extras.length>0&&"Adicionais: ".concat(ge(e.extras,l))}),r.a.createElement(pe.a,null,r.a.createElement(F.a,{edge:"end",onClick:function(){return function(e){s(e)}(t)}},r.a.createElement(me.a,{color:"error"}))))})))),r.a.createElement(we,null,r.a.createElement(T,null,"Total: R$",function(e){return e.reduce((function(e,t){return parseFloat(t.total)+e}),0).toFixed(2)}(c)),r.a.createElement(Ce,{variant:"outlined",startIcon:r.a.createElement(ve,null),onClick:function(){var e=function(e,t,a){var n={burgers:"\ud83c\udf54",batatas:"\ud83c\udf5f",baurus:"\ud83e\udd59",combo:"\ud83e\udd61"},r=e.map((function(e){var r=t.find((function(t){return t.id===e.id})).type,i=e.isCombo,c=ge(e.extras,a);return"".concat(n[i?"combo":r]," - ").concat(be(e,t)).concat(c&&"\n        Adicionais: ".concat(c))})).join("\n");return encodeURI(r)}(c,o,l);window.open("https://wa.me/".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/burgers-mania",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_PHONE_cf:"5522988144983",REACT_APP_PHONE_spa:"5522999850323"}).REACT_APP_PHONE,"?text=").concat(e))}},"Enviar pedido"))):r.a.createElement(K.a,null,r.a.createElement("p",null,"Adicione lanches ao seu pedido :)")))},Me=a(44),Pe=a(77),Qe=a.n(Pe),De=a(158),Je=a(159),Re=a(164),ke=a(160),Ne=a(165),We=a(163),He=a(157),qe=a(78),Te=a.n(qe),Fe=a(79),Ge=a.n(Fe),Ze=a(80),Ie=a.n(Ze),Se=a(82),Ve=a.n(Se),Ue=a(81),Ke=a.n(Ue),Ye=a(153),Xe=a(155),ze=a(154),Le=a(156),_e=a(167);function $e(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: -10px;\n"]);return $e=function(){return e},e}function et(){var e=Object(p.a)(["\n  justify-content: space-around;\n"]);return et=function(){return e},e}function tt(){var e=Object(p.a)(["\n  border-top: none;\n  min-height: 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return tt=function(){return e},e}function at(){var e=Object(p.a)(["\n  text-align: center;\n  font-size: 14px;\n  color: #404040;\n"]);return at=function(){return e},e}function nt(){var e=Object(p.a)(["\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 10px;\n"]);return nt=function(){return e},e}function rt(){var e=Object(p.a)(["\n  width: 120px;\n  height: 120px;\n  margin: 16px auto 0;\n"]);return rt=function(){return e},e}function it(){var e=Object(p.a)(["\n  height: 100%;\n  width: 100%;\n"]);return it=function(){return e},e}function ct(){var e=Object(p.a)(["\n  font-size: 15px;\n"]);return ct=function(){return e},e}function ot(){var e=Object(p.a)(["\n  margin-top: 6px;\n  text-align: center;\n  font-size: 13px;\n"]);return ot=function(){return e},e}function lt(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 15px 10px 10px;\n"]);return lt=function(){return e},e}function ut(){var e=Object(p.a)(["\n  padding: 0;\n"]);return ut=function(){return e},e}function st(){var e=Object(p.a)(["\n  height: 60%;\n"]);return st=function(){return e},e}function dt(){var e=Object(p.a)(["\n  width: 130px;\n  height: 180px;\n"]);return dt=function(){return e},e}var pt=Object(l.b)(Ye.a)(dt()),At=Object(l.b)(ze.a)(st()),ft=Object(l.b)(Xe.a)(ut()),mt=l.b.div(lt()),bt=l.b.p(ot()),gt=l.b.p(ct()),ht=Object(l.b)(Le.a)(it()),Et=Object(l.b)(_e.a)(rt()),xt=l.b.p(nt()),jt=l.b.p(at()),yt=Object(l.b)(K.a)(tt()),Ot=Object(l.b)(xe.a)(et()),Ct=l.b.div($e()),vt=function(e){var t=e.style,a=e.source,i=e.price,c=e.name,o=e.description,l=e.id,s=e.specialCondition,d=e.specialConditionPrice,p=J((function(e){return[e.extras,e.addToCart]})),A=Object(u.a)(p,2),f=A[0],m=A[1],b=Object(n.useState)(!1),g=Object(u.a)(b,2),h=g[0],E=g[1],x=Object(n.useState)(!1),j=Object(u.a)(x,2),y=j[0],O=j[1],C=Object(n.useState)(!1),v=Object(u.a)(C,2),w=v[0],M=v[1],P=Object(n.useState)({amount:1,extras:[]}),Q=Object(u.a)(P,2),D=Q[0],R=Q[1],k=Object(n.useState)(i),N=Object(u.a)(k,2),W=N[0],q=N[1],F=Object(n.useState)(!1),G=Object(u.a)(F,2),Z=G[0],I=G[1];Object(n.useEffect)((function(){var e=(D.extras.reduce((function(e,t){var a=f.find((function(e){return e.id===t})).price;return e+parseFloat(a)}),0)+parseFloat(Z?d:i))*D.amount;q(e.toFixed(2))}),[D,f,i,Z]);var Y=function(e){var t=D.amount+e>1?D.amount+e:1;R((function(e){return Object(Me.a)({},e,{amount:t})}))},X=function(){R({amount:1,extras:[]}),q(i),I(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(pt,{style:t},r.a.createElement(ht,{onClick:function(){return E(!0)}},r.a.createElement(At,{image:a}),r.a.createElement(ft,null,r.a.createElement(bt,null,c)),r.a.createElement(mt,null,r.a.createElement(gt,null,"R$",i),r.a.createElement(Qe.a,null)))),r.a.createElement(V.a,{fullWidth:!0,onClose:function(){return E(!1)},open:h},r.a.createElement(S,{onClick:function(){return E(!1)}}),r.a.createElement(Et,{alt:"product",src:a}),r.a.createElement(U.a,null,r.a.createElement(xt,null,c),r.a.createElement(jt,null,o),s&&r.a.createElement(Ct,null,r.a.createElement(He.a,{checked:Z,onChange:function(){return I((function(e){return!e}))}}),r.a.createElement(jt,null,s))),r.a.createElement(K.a,{dividers:!0},r.a.createElement(se.a,{component:"div","aria-labelledby":"nested-list-subheader",style:{padding:0}},r.a.createElement(de.a,{button:!0,disableGutters:!0,onClick:function(){return M((function(e){return!e}))}},r.a.createElement(De.a,null,r.a.createElement(Te.a,null)),r.a.createElement(Ae.a,{primary:"Adicionais"}),w?r.a.createElement(Ge.a,null):r.a.createElement(Ie.a,null)),r.a.createElement(Je.a,{in:w,timeout:"auto",unmountOnExit:!0},r.a.createElement(se.a,{component:"div",disablePadding:!0},f.map((function(e,t){return r.a.createElement(de.a,{key:"extra-".concat(t)},r.a.createElement(Ae.a,{primary:e.title,secondary:e.price}),r.a.createElement(pe.a,null,r.a.createElement(Re.a,{edge:"end",checked:D.extras.includes(e.id),onClick:function(){return function(e){var t=D.extras.includes(e);R(t?function(t){return Object(Me.a)({},t,{extras:t.extras.filter((function(t){return t!==e}))})}:function(t){return Object(Me.a)({},t,{extras:[].concat(Object(B.a)(t.extras),[e])})})}(e.id)}})))})))))),r.a.createElement(yt,{dividers:!0},r.a.createElement(ke.a,{"aria-label":"small contained button group"},r.a.createElement(H.a,{onClick:function(){return Y(-1)}},r.a.createElement(Ke.a,null)),r.a.createElement(T,{disabled:!0},D.amount),r.a.createElement(H.a,null,r.a.createElement(Ve.a,{onClick:function(){return Y(1)}})))),r.a.createElement(Ot,null,r.a.createElement(T,{disabled:!0},"Total: R$",W),r.a.createElement(H.a,{color:"primary",onClick:function(){m(Object(Me.a)({},D,{id:l,total:W,isCombo:Z})),X(),O(!0)}},"Adicionar"))),r.a.createElement(Ne.a,{open:y,autoHideDuration:2500,onClose:function(){return O(!1)}},r.a.createElement(We.a,{severity:"success",elevation:6,variant:"filled"},"Adicionado com sucesso ao seu carrinho!")))};function wt(){var e=Object(p.a)(["\n  width: 70px;\n  align-self: center;\n  margin-left: -10px;\n"]);return wt=function(){return e},e}function Bt(){var e=Object(p.a)(["\n  display: flex;\n  height: 100%;\n  max-width: 1168px;\n  margin: 0 auto;\n  flex-direction: column;\n\n  @media (max-width: 480px) {\n    padding: 15px 20px;\n  }\n"]);return Bt=function(){return e},e}var Mt=l.b.div(Bt()),Pt=l.b.img(wt()),Qt=a(83),Dt=a.n(Qt),Jt=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Mt,null,r.a.createElement(Pt,{src:Dt.a}),t),r.a.createElement(ue,null))};function Rt(){var e=Object(p.a)(["\n  margin: 25px 0 15px;\n  font-weight: 700;\n  font-size: 23px;\n"]);return Rt=function(){return e},e}function kt(){var e=Object(p.a)(["\n  flex: 0 0 auto;\n"]);return kt=function(){return e},e}function Nt(){var e=Object(p.a)(["\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  scrollbar-width: 0;\n  margin-left: -20px;\n  padding-left: 20px;\n  margin-right: -20px;\n"]);return Nt=function(){return e},e}var Wt=l.b.div(Nt()),Ht=l.b.div(kt()),qt=l.b.p(Rt()),Tt=function(e){var t=e.style,a=e.renderItem,n=e.data,i=e.keyExtractor,c=e.title,o=n.map((function(e,t){var n=a(e,t);return r.a.createElement(Ht,{key:i(e,t)},n)}));return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(qt,null,c),r.a.createElement(Wt,{style:t},o))};Tt.defaultProps={style:{},title:null};var Ft=Tt,Gt={horizontalScroller:{paddingBottom:5},productCard:{marginRight:10},lastProduct:{marginRight:20}},Zt=function(){var e=J((function(e){return[e.products,e.location]})),t=Object(u.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(!1),o=Object(u.a)(c,2),l=o[0],s=o[1],d=function(e){return Object(B.a)(new Set(e.map((function(e){return e.type}))))}(a);return r.a.createElement(Jt,null,d.map((function(e){var t,n=function(e,t){return e.filter((function(e){return e.type===t}))}(a,e);return r.a.createElement(Ft,{key:"horizontal-scroll-".concat(e),title:(t=e,t.charAt(0).toUpperCase()+t.slice(1)),data:n,renderItem:function(e,t){var a,c;return r.a.createElement(vt,{specialCondition:null===(a=e.specialCondition)||void 0===a?void 0:a.name,specialConditionPrice:null===(c=e.specialCondition)||void 0===c?void 0:c.price[i],id:e.id,name:e.title,price:e.price[i],description:e.ingredients,source:e.source,style:Gt[t===n.length-1?"lastProduct":"productCard"]})},keyExtractor:function(t){return"".concat(e,"-").concat(t.id)},style:Gt.horizontalScroller})})),r.a.createElement(W,{handleCartButtonClick:function(){return s(!0)}}),r.a.createElement(Be,{visible:l,handleClose:function(){return s(!1)}}),r.a.createElement(z,null))};var It=function(){return r.a.createElement(Zt,null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.b,{injectFirst:!0},r.a.createElement(l.a,{theme:{white:{primary:"#FEFEFE"},gray:{primary:"#F9F9FB"},red:{primary:"#B72736"}}},r.a.createElement(It,null)))),document.getElementById("root"))},68:function(e,t){e.exports=[{title:"N\xba 1",id:0,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"15.00",cf:"25.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"8.00",cf:"8.00"},ingredients:"P\xe3o com gergelim, 2 carnes, 2 queijos, salada e molho especial"},{title:"N\xba 2",id:1,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"15.00",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"8.00",cf:"8.00"},ingredients:"P\xe3o careca, 2 carnes, 2 queijos, salada e molho acebolado"},{title:"N\xba 3",id:2,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"15.00",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"8.00",cf:"8.00"},ingredients:"P\xe3o com gergelim, 1 carne de picanha, 1 queijo, salada e molho especial"},{title:"N\xba 4",id:3,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"15.00",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"8.20",cf:"8.20"},ingredients:"P\xe3o careca, 2 carnes, 2 queijos, picles, salada e molho especial"},{title:"N\xba 5",id:4,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"17.50",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"11.00",cf:"11.00"},ingredients:"P\xe3o com gergelim, 2 carnes de picanha, 2 queijos, salada e molho especial"},{title:"N\xba 6",id:5,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"15.00",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"8.50",cf:"8.50"},ingredients:"P\xe3o com gergelim, 2 carnes, 3 queijos, bacon, salada e molho especial"},{title:"N\xba 7",id:6,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"15.50",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"9.00",cf:"9.00"},ingredients:"P\xe3o careca, 3 carnes, 3 queijos, salada e molho especial"},{title:"N\xba 8",id:7,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"10.50",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"5.50",cf:"5.50"},ingredients:"P\xe3o careca, 1 carne, queijo, salada e molho especial"},{title:"N\xba 9",id:8,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"17.00",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"10.50",cf:"10.50"},ingredients:"P\xe3o com gergelim, 4 carnes, 4 queijos, salada e molho especial"},{title:"N\xba 10",id:9,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"17.00",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"10.50",cf:"10.50"},ingredients:"P\xe3o com gergelim, 2 carnes, 3 queijos, calabresa, 1 ovo, cheddar, bacon, salada e molho especial"},{title:"N\xba 11",id:10,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"19.90",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"13.90",cf:"13.90"},ingredients:"P\xe3o com gergelim, 4 carnes, 5 queijos, calabresa, bacon, cheddar, salada e molho especial"},{title:"N\xba 12",id:11,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"22.00",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"15.90",cf:"15.90"},ingredients:"P\xe3o com gergelim, 4 carnes, 5 queijos, 3 ovos, 2 bacons, salada e molho especial"},{title:"N\xba 13",id:12,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"16.00",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"9.50",cf:"9.50"},ingredients:"P\xe3o com gergelim, fil\xe9 de frango, queijo, catupiry, salada e molho especial"},{title:"N\xba 14",id:13,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"22.00",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"14.50",cf:"14.50"},ingredients:"P\xe3o com gergelim, contra fil\xe9, queijo, cebola roxa, salada e molho barbecue"},{title:"N\xba 15",id:14,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"26.50",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"20.00",cf:"20.00"},ingredients:"P\xe3o com gergelim, 6 carnes, 6 queijos, 3 ovos, fil\xe9 de frango, 2 bacons, calabresa, cheddar, salada e molho especial"},{title:"N\xba 16",id:15,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"18.00",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"13.50",cf:"13.50"},ingredients:"P\xe3o com gergelim, 2 lingui\xe7as toscanas, queijo, cebola roxa, ovo, salada e molho especial"},{title:"N\xba 17",id:16,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"19.90",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"13.90",cf:"13.90"},ingredients:"P\xe3o careca, 1 carne de picanha, queijo padr\xe3o, banana, bacon e molho especial"},{title:"N\xba 18",id:17,type:"burgers",specialCondition:{name:"Adicionar refrigerante e batata",price:{spa:"18.00",cf:"20.00"}},source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",price:{spa:"13.00",cf:"13.00"},ingredients:"P\xe3o com gergelim, cream cheese, peito de peru, or\xe9gano, queijo, fil\xe9 de frango, bacon, cebola roxa, salada e molho especial"},{title:"Batata Pequena N\xba 1",id:36,type:"batatas",source:"https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",price:{spa:"4.50",cf:"4.50"},ingredients:"Batata pequena"},{title:"Batata Grande N\xba 2",id:37,type:"batatas",source:"https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",price:{spa:"8.00",cf:"8.00"},ingredients:"Batata grande"},{title:"Batata Turbinada N\xba 3",id:38,type:"batatas",source:"https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",price:{spa:"10.00",cf:"10.00"},ingredients:"Batata, queijo/cheddar, or\xe9gano e bacon"},{title:"Batata Turbinada N\xba 4",id:39,type:"batatas",source:"https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",price:{spa:"12.00",cf:"12.00"},ingredients:"Batata, queijo/cheddar, or\xe9gano, bacon e calabresa"},{title:"Batata Turbinada N\xba 5",id:40,type:"batatas",source:"https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",price:{spa:"15.00",cf:"15.00"},ingredients:"Batata, queijo/cheddar, or\xe9gano, bacon, calabresa e fil\xe9 de frango (sassami)"},{title:"Batata Mega Turbinada N\xba 6",id:41,type:"batatas",source:"https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",price:{spa:"22.00",cf:"22.00"},ingredients:"Batata, queijo/cheddar, or\xe9gano, bacon, calabresa e fil\xe9 de peito de frango"},{title:"Bauru",id:43,type:"baurus",source:"https://images.unsplash.com/photo-1554433607-66b5efe9d304?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",price:{spa:"15.00",cf:"15.00"},ingredients:"Salada, 2 ovos, queijo, bacon, calabresa, batata frita, fil\xe9 de peito de frango e catupiry"}]},72:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkCgEAMgKwc7mtAAABpElEQVRo3u2Yu0oDQRSGv1mvEBWJRYgmYqmVjVhY2QgxYqHP4APYWYkBG0vBysJaBK1FqzRCFsVg4QsoNiIYksJdIRk7wc0E1slkR3BON/+cM+eb++wCclX6MpBJWyB9WQAhV7hCYMuKQvosWksPvpABQxYBQiGlxfSAZze9A/gDAP29afaDZ2rUgBFgjEHSpJW9NQ7Q4IwyVT7bajzuGO0tQJNjTqh3qG2h2vEGAWpsc/PrKGMAIVs8aMQZ2wUlrfTGAB650Iw0BHCE7pViBKBOWTvWyCKs0FTqfcwyQeq7PNArgFuluskO6WRG4FWhLXAQ66VnZA28K7SNmA9NQ4uw3aZixhoBaCm08SQBumnY+oPEAVgH0DiIGpxGlDeF1zmZiJJlXeGn8WX0wrJWX9c4VKgJTkFOqf4ngLxtAMsj4JG1C5Bh0C5AroOeGEC+g65xEAXcR5Rdntq89pn+UZ5kRtmaxlE8zFJESSm85pmL1Zr1y8gBOAAH4AAcgANwAA7AAXiEVvOHnuZfdlNW9Shp/+ju3iR7nrikiG9hIkIqFMT1F6H2wMGyVNDgAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTEwLTAxVDAwOjUwOjAyKzAwOjAwIVtxTgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMC0wMVQwMDo1MDowMiswMDowMFAGyfIAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},73:function(e,t){e.exports="data:image/png;base64,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"},74:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkCgEBBiGo/FEfAAAEa0lEQVRo3r1ZW2xVRRRdcwIkrb2l1baEqkECKRTaggrxkdb4CL4/WoKYNEJsMDEkxpqqHxIjQXxURT78UKoxEuoHCWBQE6MfPigk+iPEawu0iQiCpLalvdDyauhZftzee0/PmTln5nQu6+/O3jNr3T37zOyzj4AhWIH7sBSLUYVSlKAIwBhSGEEvjqMHB8WA6Yr61Cu4nX/SZRhcJvkh77RNneDL7KEJutnGIjvkpdzCYSPyDIb4BkumRy64nv/FIs/gHFvpxKVfwEPTIs+gi/Pj0DfGDLwM57nWNPTbrJGn4bKdQpd+Bj+3TJ9GJ2fq0M/kt3mhJ8mvIyVQ8Iu80ZPklxEbYX3vg2gPo1+Td3rSZZOX0xMQLsDvmG32sMZCCneIvwMCKNCFesWUv9CLiyjB/dDJ42j8ggcF/eFvUYTsBO/O+qy3thHP+OlLOSB1PMN5Hi/Bo5YE9HNyszMXRSvKJaFysU6cyv0UxCeW8mAOXvD+/wTPSXV+5p/H2Ry1FINBT73ANoXTwqB07rAkgHwpt6i82jkiix3rrAlITuYAV2CJdJ9+kw2KJA5ZyoNaLk8nYbPC4ZRi/GNLAoDmtIBVCvOYYnwfRiwJWAU4rMBShVlxLItx9FsSUMcyBw1QXZC3yYf5BKotCXDQ4KBGab5XSr8YuyzRA0CNg0VKY3XwHGAlvseNFgUsclClNAqsC4ztxDzYRJWDshDzRhb6RhbCLsocJELM5XjFN7LJsoAEeDX0uLxEX8i5x9pRTJJXwPEIl298Auaw366AVKTT8z4J9RFRM8EgeCbS6SJ9Bw+fjWhT6OOEg38jE6UQu6c+DWInNoKR83Qw5CjvPC/q4KuNRAc24KrC+yu8jT5NAX3gVs1gve6fy7t4WuLXAQB0uJaHtVZlo6YAN1BKgxXc5/PqZkHWKvgYuyJWbQJv1k6YcTYGY8gn2Zv1GGXgamc9v1OuOMGboKwI9SU4XM1fSV6WWQGADRyRrnc4bf5AWwA5HtyISZLKsI4Yf5Cu9l4mmUzgcqt2syUnQN7uWpYxm75w7TXr/1FwULLKHzmHNkMB5Gk+bCBA/i7RmnNIxGjJudzBck0B70rmD/AGr8ubxgJIcpTtLIukX8nLkrmvTXVKxL5kL/CjsO44H+UFyayz9BdCfC6mgDS6+SorA+SV/JTXpP7ZtzFvi+ZHPGCS2wG4SOIADuAkzqMItWjC4yiQev4kHgoIADgfvZZ6QOEYxu3in8wPbyt91nWhJzbk6KcKMOtox8U7Yr9KWve00lAPncpjnNXXgX4/Z/h5c1vwdN6DvwtPiWtKa543wOVboXcoa/JKn+IaFXNmC2QOl3DcSuh/xjKxN8LHVxGMsJOrWUjBFkULVxdn2awhkbXZCf3s4COc5bEVc7PG65sMg9zEhAb95GV8ktvZIP/IyGK+6Kl9dZBk65T7PkJAi87nZq7ktshnZYJH+H621tOAeXk5F/dgOZbgFtyKAhRjAmNIYRh9OIYeHBRDZuv9D213PbisVuDZAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTEwLTAxVDAxOjA2OjMzKzAwOjAwqHx4mQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMC0wMVQwMTowNjozMyswMDowMNkhwCUAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},83:function(e,t,a){e.exports=a.p+"static/media/logo.fa4c1047.png"},94:function(e,t,a){e.exports=a(106)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.e03825fb.chunk.js.map