(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{157:function(e,t,n){"use strict";n.d(t,"d",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return i});var a=n(7),l=n(14),r=n.n(l),c=function(e){var t="".concat(a.a,"/employee"),n={Authorization:"Bearer "+e};return r.a.get(t,{headers:n})},u=function(e,t){var n="".concat(a.a,"/employee"),l={Authorization:"Bearer "+e};return r.a.post(n,t,{headers:l})},o=function(e,t){var n="".concat(a.a,"/employee/ma/")+t,l={Authorization:"Bearer "+e};return r.a.delete(n,{headers:l})},i=function(e){var t="".concat(a.a,"/employee?chucvu=S\u1eeda Ch\u1eefa"),n={Authorization:"Bearer "+e};return r.a.get(t,{headers:n})}},158:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return o});var a=n(7),l=n(14),r=n.n(l),c=function(e){var t="".concat(a.a,"/customer"),n={Authorization:"Bearer "+e};return r.a.get(t,{headers:n})},u=function(e,t){var n="".concat(a.a,"/customer"),l={Authorization:"Bearer "+e};return r.a.post(n,t,{headers:l})},o=function(e,t){var n="".concat(a.a,"/customer/ma/")+t,l={Authorization:"Bearer "+e};return r.a.delete(n,{headers:l})}},161:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return s});var a=n(7),l=n(14),r=n.n(l),c=function(e,t){var n="".concat(a.a,"/billsuachua"),l={Authorization:"Bearer "+e};return r.a.post(n,t,{headers:l})},u=function(e,t){var n="".concat(a.a,"/billle"),l={Authorization:"Bearer "+e};return r.a.post(n,t,{headers:l})},o=function(e,t){var n="".concat(a.a,"/billsuachua/mahoadon/").concat(t,"/chitiet"),l={Authorization:"Bearer "+e};return r.a.get(n,{headers:l})},i=function(e,t){var n="".concat(a.a,"/billle/mahoadon/").concat(t,"/chitiet"),l={Authorization:"Bearer "+e};return r.a.get(n,{headers:l})},s=function(e,t){var n="".concat(a.a,"/bill/mahoadon/").concat(t,"/thanhtoan"),l={Authorization:"Bearer "+e};return r.a.put(n,{headers:l})}},164:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"d",function(){return o}),n.d(t,"b",function(){return i});var a=n(7),l=n(14),r=n.n(l),c=function(e){var t="".concat(a.a,"/salary"),n={Authorization:"Bearer "+e};return r.a.get(t,{headers:n})},u=function(e,t){var n="".concat(a.a,"/salary"),l={Authorization:"Bearer "+e};return r.a.post(n,t,{headers:l})},o=function(e,t,n){var l="".concat(a.a,"/salary/ma/")+n,c={Authorization:"Bearer "+e};return r.a.put(l,t,{headers:c})},i=function(e,t){var n="".concat(a.a,"/salary/ma/")+t,l={Authorization:"Bearer "+e};return console.log(n),r.a.delete(n,{headers:l})}},180:function(e,t,n){"use strict";n.r(t);var a=n(16),l=n(0),r=n.n(l),c=n(37),u=n(38),o=n(164),i=n(6),s=n(15),m=Object(i.b)(function(e){return{token:e.Authenticate.token,listProduct:e.Product.listProduct,listBillProduct:e.Product.listBillProduct}},function(e){return{getAllProduct:function(t){e(Object(s.j)(t))},addBillProduct:function(t){e(Object(s.g)(t))}}})(function(e){var t=u.a.handleInput(""),n=Object(l.useState)(""),i=Object(a.a)(n,2),s=i[0],m=i[1],h=u.a.handleInput(""),d=u.a.handleInput(0),f=u.a.handleInput(0),g=u.a.handleInput(0),b=Object(l.useState)([]),E=Object(a.a)(b,2),v=E[0],p=E[1],j=Object(l.useState)([]),O=Object(a.a)(j,2),B=O[0],y=O[1];return Object(l.useEffect)(function(){e.getAllProduct(e.token),Object(o.c)(e.token).then(function(e){y(e.data)})},[]),r.a.createElement(c.h,{className:e.isShowing?"active":""},r.a.createElement(c.i,null,r.a.createElement("h2",{style:{textAlign:"center"}},"B\u1ea3ng gi\xe1 (STT: ",e.STT,")"),r.a.createElement(c.f,null,r.a.createElement(c.e,{style:{flex:1}},r.a.createElement("label",null,"T\xean ph\u1ee5 t\xf9ng v\xe0 c\xf4ng vi\u1ec7c: "),r.a.createElement(c.g,t)),r.a.createElement(c.e,{style:{flex:1,marginLeft:15}},r.a.createElement("label",null,"M\xe3 ph\u1ee5 t\xf9ng: "),r.a.createElement(c.g,{list:"browsers",name:"browser",value:s,onChange:function(n){h.setValue(""),t.setValue(""),f.setValue(0),d.setValue(0),function(n){p(e.listProduct.filter(function(e){return-1!==e.maphutung.indexOf(n)&&e.soluongtonkho>0})),m(n);var a=v.find(function(e){return e.maphutung===n});void 0!==a&&(t.setValue(a.tentiengviet),h.setValue(a.giaban_le),f.setValue(a.soluongtonkho))}(n.target.value)}}),r.a.createElement("datalist",{id:"browsers"},v.map(function(e,t){return r.a.createElement("option",{key:t,value:e.maphutung},e.tentiengviet)})))),r.a.createElement(c.f,null,r.a.createElement(c.e,{style:{flex:1}},r.a.createElement("label",null,"\u0110\u01a1n gi\xe1: "),r.a.createElement(c.g,Object.assign({readOnly:!0},h))),r.a.createElement(c.e,{style:{flex:1,marginLeft:15}},r.a.createElement("label",null,"S\u1ed1 l\u01b0\u1ee3ng: "),r.a.createElement(c.g,Object.assign({type:"Number",max:f.value,min:0},d))),r.a.createElement(c.e,{style:{flex:1,marginLeft:15}},r.a.createElement("label",null,"Ti\u1ec1n c\xf4ng: "),r.a.createElement(c.g,Object.assign({list:"tien_cong",name:"tien_cong",type:"number"},g)),r.a.createElement("datalist",{id:"tien_cong"},B.map(function(e,t){return r.a.createElement("option",{key:t,value:e.tien},e.ten)})))),r.a.createElement(c.f,{style:{marginTop:10,fontSize:20,justifyContent:"flex-end"}},r.a.createElement("label",null,"T\u1ed5ng ti\u1ec1n: ",r.a.createElement("span",{style:{fontWeight:"bold"}},(parseInt(h.value)||0)*(parseInt(d.value)||0)+(parseInt(g.value)||0)," VND"))),r.a.createElement(c.f,{style:{marginTop:10,fontSize:20,justifyContent:"flex-end"}},r.a.createElement(c.a,{onClick:function(){if(""!==t.value)if(""===s||0!==parseInt(d.value)){var n={key:e.listBillProduct.length+1,tenphutungvacongviec:t.value,maphutung:s,dongia:parseInt(h.value)||0,soluongphutung:parseInt(d.value)||0,tiencong:parseInt(g.value)||0,tongtien:(parseInt(h.value)||0)*(parseInt(d.value)||0)+(parseInt(g.value)||0)};e.addBillProduct(n),t.setValue(""),m(""),h.setValue(""),d.setValue(""),g.setValue(""),f.setValue(""),h.setValue(""),e.onCloseClick()}else alert("M\u1eddi Ch\u1ecdn S\u1ed1 L\u01b0\u1ee3ng!");else alert("T\xean Ph\u1ee5 T\xf9ng/C\xf4ng Vi\u1ec7c Kh\xf4ng \u0110\u01b0\u1ee3c \u0110\u1ec3 Tr\u1ed1ng!")}},"Th\xeam"),r.a.createElement(c.d,{style:{marginLeft:10},onClick:function(){return e.onCloseClick()}},"H\u1ee7y"))))}),h=n(161),d=n(158),f=n(157),g=n(19);t.default=Object(g.f)(Object(i.b)(function(e){return{token:e.Authenticate.token,listBillProduct:e.Product.listBillProduct,info:e.Authenticate.info}},function(e){return{deleteBillProduct:function(){e(Object(s.h)())},deleteItemBillProduct:function(t){e(Object(s.i)(t))},setListBillProduct:function(t){e(Object(s.k)(t))}}})(function(e){var t=u.a.handleInput(""),n=u.a.handleInput(""),o=u.a.handleInput(""),i=u.a.handleInput(""),s=u.a.handleInput(""),g=Object(l.useState)(""),b=Object(a.a)(g,2),E=b[0],v=b[1],p=Object(l.useState)(!1),j=Object(a.a)(p,2),O=j[0],B=j[1],y=Object(l.useState)([]),k=Object(a.a)(y,2),P=k[0],C=k[1],I=Object(l.useState)([]),S=Object(a.a)(I,2),T=S[0],V=S[1],A=Object(l.useState)(null),x=Object(a.a)(A,2),z=x[0],w=x[1],L=Object(l.useState)(0),_=Object(a.a)(L,2),N=_[0],M=_[1],H=Object(l.useState)(""),J=Object(a.a)(H,2),K=J[0],D=J[1],R=Object(l.useState)(-1),W=Object(a.a)(R,2),q=(W[0],W[1]);Object(l.useEffect)(function(){Object(d.c)(e.token).then(function(e){C(e.data)}),Object(f.c)(e.token).then(function(e){V(e.data)})},[]),Object(l.useEffect)(function(){var a=window.location.href,l=a.substring(a.lastIndexOf("/")+1,a.length),r=Number.parseInt(l)-1;w(r+1),e.socket.on("mahoadon",function(l){-1!==a.indexOf("services/repairedbill")&&(l&&0===l.trangthai&&e.history.goBack(),l&&l.trangthai&&2===l.trangthai?(M(2),D(l.mahoadon),F(l.mahoadon)):(t.setValue(""),n.setValue(""),o.setValue(""),e.deleteBillProduct()))}),e.socket.emit("maban",r)},[]);var F=function(n){Object(h.b)(e.token,n).then(function(n){console.log(n),v(n.data.biensoxe),t.setValue(n.data.tenkh),e.setListBillProduct(n.data.chitiet),q(n.data.manv)}).catch(function(e){alert("Kh\xf4ng l\u1ea5y \u0111\u01b0\u1ee3c h\xf3a \u0111\u01a1n.")})};return console.log(s.value),r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},"Phi\u1ebfu s\u1eeda ch\u1eefa (B\xe0n s\u1ed1: ",z,")"),r.a.createElement(c.f,null,r.a.createElement(c.e,null,r.a.createElement("label",null,"T\xean kh\xe1ch h\xe0ng: "),r.a.createElement(c.g,Object.assign({autocomplete:"off"},t))),r.a.createElement(c.e,{style:{marginLeft:20}},r.a.createElement("label",null,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i: "),r.a.createElement(c.g,Object.assign({autocomplete:"off"},n,{pattern:"[0-9]{10}"}))),r.a.createElement(c.e,{style:{marginLeft:20}},r.a.createElement("label",null,"Bi\u1ec3n s\u1ed1 xe: "),r.a.createElement(c.g,{list:"bien_so",name:"bien_so",value:E,onChange:function(e){!function(e){v(e);var a=P.find(function(t){return t.biensoxe===e});void 0!==a&&(t.setValue(a.ten),n.setValue(a.sodienthoai),o.setValue(a.diachi),i.setValue(a.ma))}(e.target.value)}}),r.a.createElement("datalist",{id:"bien_so"},P.map(function(e,t){return r.a.createElement("option",{key:t,value:e.biensoxe},e.ten)}))),r.a.createElement(c.e,{style:{marginLeft:20}},r.a.createElement("label",null,"M\xe3 nh\xe2n vi\xean s\u1eeda ch\u1eefa: "),r.a.createElement(c.g,{list:"nv_suachua",name:"nv_suachua",value:s.value,onChange:function(e){var t;t=e.target.value,console.log(t),console.log(T),T.find(function(e){return e.ma===Number.parseInt(t)})&&s.setValue(t)}}),r.a.createElement("datalist",{id:"nv_suachua"},T.map(function(e,t){return r.a.createElement("option",{key:t,value:e.ma},e.ten)})))),r.a.createElement(c.e,null,r.a.createElement("label",null,"\u0110\u1ecba ch\u1ec9: "),r.a.createElement(c.g,Object.assign({autocomplete:"off"},o))),r.a.createElement(c.f,{style:{marginTop:5,marginBottom:5,justifyContent:"space-between",alignItems:"center"}},r.a.createElement("label",null,"B\u1ea3ng gi\xe1 ph\u1ee5 t\xf9ng: "),r.a.createElement(c.a,{onClick:function(){return B(!0)}},"Th\xeam m\u1edbi")),r.a.createElement(c.l,null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"STT"),r.a.createElement("th",null,"T\xean ph\u1ee5 t\xf9ng ",r.a.createElement("br",null)," v\xe0 c\xf4ng vi\u1ec7c"),r.a.createElement("th",null,"M\xe3 ph\u1ee5 t\xf9ng"),r.a.createElement("th",null,"\u0110\u01a1n gi\xe1"),r.a.createElement("th",null,"SL"),r.a.createElement("th",null,"Ti\u1ec1n ph\u1ee5 t\xf9ng"),r.a.createElement("th",null,"Ti\u1ec1n c\xf4ng"),r.a.createElement("th",null,"T\u1ed5ng ti\u1ec1n c\xf4ng ",r.a.createElement("br",null),"+ ph\u1ee5 t\xf9ng"),r.a.createElement("th",null,r.a.createElement("i",{className:"far fa-trash-alt"}))),e.listBillProduct&&e.listBillProduct.map(function(t,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,n+1),r.a.createElement("td",null,t.tenphutungvacongviec),r.a.createElement("td",null,t.maphutung),r.a.createElement("td",null,t.dongia),r.a.createElement("td",null,t.soluongphutung),r.a.createElement("td",null,t.dongia*t.soluongphutung),r.a.createElement("td",null,t.tiencong),r.a.createElement("td",null,t.tongtien),r.a.createElement("td",null,r.a.createElement(c.d,{onClick:function(){e.deleteItemBillProduct(t.key)}},r.a.createElement("i",{className:"far fa-trash-alt"}))))}))),r.a.createElement(c.f,{style:{marginTop:25,marginBottom:5,justifyContent:"space-between"}},r.a.createElement("label",null),0===N?r.a.createElement(c.a,{onClick:function(){!function(){var n=0,a=[];if(0!==e.listBillProduct.length){for(var l=0;l<e.listBillProduct.length;l++){n+=e.listBillProduct[l].tongtien;var r={tenphutungvacongviec:e.listBillProduct[l].tenphutungvacongviec,maphutung:e.listBillProduct[l].maphutung,soluongphutung:e.listBillProduct[l].soluongphutung,tiencong:e.listBillProduct[l].tiencong,manvsuachua:s.value,tongtien:e.listBillProduct[l].tongtien};a.push(r)}var c={manvsuachua:s.value,tenkh:t.value,makh:i.value,tongtien:n,biensoxe:E,chitiet:a,manv:e.info.ma};console.log(c),Object(h.c)(e.token,c).then(function(t){console.log(c),e.deleteBillProduct(),e.socket.emit("bill",{maban:z-1,mahoadon:t.data.mahoadon}),alert("T\u1ea1o Phi\u1ebfu S\u1eeda Ch\u1eefa Th\xe0nh C\xf4ng - M\xe3 H\xf3a \u0110\u01a1n:"+t.data.mahoadon),e.history.goBack()}).catch(function(e){alert(JSON.stringify(e.response.data))})}else alert("Phi\u1ebfu S\u1eeda Ch\u1eefa R\u1ed7ng")}()}},"L\u01b0u"):r.a.createElement(c.f,null,r.a.createElement(c.a,{onClick:function(){Object(h.e)(e.token,K).then(function(t){e.socket.emit("release",{maban:z-1,mahoadon:""}),D(""),e.history.goBack()}).catch(function(e){alert("L\u1ed7i thanh to\xe1n")})}},"Thanh to\xe1n"),r.a.createElement(c.d,{style:{marginLeft:15},onClick:function(){}},"H\u1ee7y"))),r.a.createElement(m,{isShowing:O,onCloseClick:function(){B(!1)}}))}))}}]);
//# sourceMappingURL=5.6aba9f62.chunk.js.map