(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{157:function(e,t,a){"use strict";a.d(t,"d",function(){return r}),a.d(t,"a",function(){return u}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return i});var n=a(7),l=a(14),c=a.n(l),r=function(e){var t="".concat(n.a,"/employee"),a={Authorization:"Bearer "+e};return c.a.get(t,{headers:a})},u=function(e,t){var a="".concat(n.a,"/employee"),l={Authorization:"Bearer "+e};return c.a.post(a,t,{headers:l})},o=function(e,t){var a="".concat(n.a,"/employee/ma/")+t,l={Authorization:"Bearer "+e};return c.a.delete(a,{headers:l})},i=function(e){var t="".concat(n.a,"/employee?chucvu=S\u1eeda Ch\u1eefa"),a={Authorization:"Bearer "+e};return c.a.get(t,{headers:a})}},159:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(160);t.a=function(){return l.a.createElement("div",{className:"lds-wraper"},l.a.createElement("div",{className:"lds-hourglass"}))}},160:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(16),l=a(0),c=a.n(l),r=a(37),u=a(6),o=a(157),i=Object(u.b)(function(e){return{token:e.Authenticate.token}},null)(function(e){var t=Object(l.useState)(!1),a=Object(n.a)(t,2),u=a[0],i=a[1],m=Object(l.useState)(""),s=Object(n.a)(m,2),f=s[0],h=s[1],E=Object(l.useState)(""),g=Object(n.a)(E,2),d=g[0],b=g[1],v=Object(l.useState)(""),p=Object(n.a)(v,2),j=p[0],y=p[1],O=Object(l.useState)(""),C=Object(n.a)(O,2),S=C[0],w=C[1],k=Object(l.useState)(""),N=Object(n.a)(k,2),L=N[0],B=N[1],z=Object(l.useState)(""),T=Object(n.a)(z,2),A=T[0],V=T[1],D=Object(l.useState)("D\u1ecbch V\u1ee5"),K=Object(n.a)(D,2),x=K[0],I=K[1];return c.a.createElement(r.h,{className:e.isShowing?"active":""},c.a.createElement(r.i,null,c.a.createElement("div",{style:{paddingTop:3,paddingBottom:3}},c.a.createElement(r.c,{onClick:e.onCloseClick},"\xd7"),c.a.createElement("h2",null," ")),c.a.createElement(r.f,{style:{marginTop:10}},c.a.createElement(r.e,{style:{marginLeft:25,width:"100%"}},c.a.createElement(r.e,{style:{fontSize:20,marginBottom:2}},"T\xean Nh\xe2n Vi\xean",c.a.createElement(r.g,{width:"auto",value:f.value,onChange:function(e){return h(e.target.value)}})),c.a.createElement(r.e,{style:{fontSize:20,marginBottom:2}},"S\u1ed1 CMND",c.a.createElement(r.g,{width:"auto",type:"Number",value:d.value,onChange:function(e){return b(e.target.value)}})),c.a.createElement(r.e,{style:{fontSize:20,marginBottom:5}},"S\u1ed1 \u0110i\xean Tho\u1ea1i",c.a.createElement(r.g,{width:"auto",type:"Number",value:j.value,onChange:function(e){return y(e.target.value)}})),c.a.createElement(r.e,{style:{fontSize:20,marginBottom:2}},"Email",c.a.createElement(r.g,{type:"Email",width:"auto",value:S.value,onChange:function(e){return w(e.target.value)}})),c.a.createElement(r.e,{style:{fontSize:20,marginBottom:2}},"T\xean \u0110\u0103ng Nh\u1eadp",c.a.createElement(r.g,{width:"auto",value:L.value,onChange:function(e){return B(e.target.value)}})),c.a.createElement(r.e,{style:{fontSize:20,marginBottom:2}},"M\u1eadt Kh\u1ea9u",c.a.createElement(r.g,{width:"auto",type:"Password",value:A.value,onChange:function(e){return V(e.target.value)}})),c.a.createElement(r.e,{style:{fontSize:20,marginBottom:2}},"Ch\u1ee9c V\u1ee5",c.a.createElement(r.k,{onChange:function(e){return I(e.target.value)}},c.a.createElement("option",{value:"D\u1ecbch V\u1ee5"},"D\u1ecbch V\u1ee5"),c.a.createElement("option",{value:"Ph\u1ee5 Ki\u1ec7n"},"Ph\u1ee5 Ki\u1ec7n"),c.a.createElement("option",{value:"S\u1eeda Ch\u1eefa"},"S\u1eeda Ch\u1eefa"))))),c.a.createElement(r.f,{style:{justifyContent:"flex-end"}},c.a.createElement(r.a,{width:"100px",onClick:function(){return function(){var t={ten:f,cmnd:d,sdt:j,gmail:S,taikhoan:L,username:L,password:A,chucvu:x};i(!0),Object(o.a)(e.token,t).then(function(t){i(!1),e.onCloseClick()}).catch(function(e){console.log(e.response.data)})}()}},u?c.a.createElement("i",{className:"fas fa-spinner fa-spin"}):"L\u01b0u"))))}),m=a(51),s=a(159);t.default=Object(u.b)(function(e){return{token:e.Authenticate.token,isLoading:e.App.isLoading}},function(e){return{setLoading:function(t){e(Object(m.b)(t))}}})(function(e){var t=Object(l.useState)(null),a=Object(n.a)(t,2),u=a[0],m=a[1],f=Object(l.useState)(!1),h=Object(n.a)(f,2),E=h[0],g=h[1],d=Object(l.useState)([]),b=Object(n.a)(d,2),v=b[0],p=b[1],j=Object(l.useState)([]),y=Object(n.a)(j,2),O=y[0],C=y[1],S=Object(l.useState)(""),w=Object(n.a)(S,2),k=w[0],N=w[1];Object(l.useEffect)(function(){L()},[]);var L=function(){e.setLoading(!0),Object(o.d)(e.token).then(function(t){p(t.data),C(t.data),e.setLoading(!1)}).catch(function(t){e.setLoading(!1)})},B=function(){var e;e=O.filter(function(e){return e.ten.toLowerCase().includes(k.toLowerCase())}),p(e)};return c.a.createElement("div",null,e.isLoading&&c.a.createElement(s.a,null),!e.isLoading&&c.a.createElement(c.a.Fragment,null,c.a.createElement(r.f,{style:{justifyContent:"space-between",alignItems:"center"}},c.a.createElement("span",{style:{fontSize:"20px"}},"Danh s\xe1ch nh\xe2n vi\xean"),c.a.createElement(r.a,{onClick:function(){g(!0),m(null)}},"Th\xeam m\u1edbi",c.a.createElement("i",{className:"fas fa-plus"}))),c.a.createElement(r.f,{style:{alignItems:"center",marginTop:5,marginBottom:15}},c.a.createElement(r.g,{onKeyPress:function(e){"Enter"===e.key&&B()},style:{width:250,marginRight:15},onChange:function(e){return N(e.target.value)}}),c.a.createElement(r.a,{onClick:function(){B()}},"T\xecm Ki\u1ebfm",c.a.createElement("i",{className:"fas fa-search"}))),c.a.createElement(r.l,null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,"M\xe3 Nh\xe2n Vi\xean"),c.a.createElement("th",null,"T\xean Nh\xe2n Vi\xean"),c.a.createElement("th",null,"S\u1ed1 CMND"),c.a.createElement("th",null,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),c.a.createElement("th",null,"Email"),c.a.createElement("th",null,"Ch\u1ee9c v\u1ee5"),c.a.createElement("th",null)),v.map(function(t,a){return c.a.createElement("tr",{key:a},c.a.createElement("td",null,t.ma),c.a.createElement("td",null,t.ten),c.a.createElement("td",null,t.cmnd),c.a.createElement("td",null,t.sdt),c.a.createElement("td",null,t.gmail),c.a.createElement("td",null,t.chucvu),c.a.createElement("td",null,c.a.createElement(r.a,null,c.a.createElement("i",{className:"fas fa-cog"})),c.a.createElement(r.d,{onClick:function(){Object(o.b)(e.token,t.ma),L()},style:{marginLeft:5}},c.a.createElement("i",{className:"far fa-trash-alt"}))))}))),c.a.createElement(r.f,{style:{alignItems:" center",justifyContent:"flex-end",marginTop:15}},c.a.createElement(r.a,null,c.a.createElement("i",{className:"fas fa-angle-double-left"})),c.a.createElement(r.a,{style:{marginLeft:10}},c.a.createElement("i",{className:"fas fa-angle-double-right"}))),c.a.createElement(i,{isShowing:E,onCloseClick:function(){g(!1),L()},editItem:u})))})}}]);
//# sourceMappingURL=7.ee7b679d.chunk.js.map