(this["webpackJsonppiggy-react"]=this["webpackJsonppiggy-react"]||[]).push([[0],{1111:function(e,t,a){"use strict";a.r(t);var n=a(11),c=a(0),r=a.n(c),s=a(54),i=a.n(s),o=(a(596),a(147)),l=a(72),j=a(1117),d=a(1124),u=a(1127),b=a(249),h=a(79),p=a(1131),O=a(1132),x=(a(597),function(){return Object(n.jsx)(j.a,{justify:"center",className:"loginForm",children:Object(n.jsxs)(d.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},children:[Object(n.jsx)(d.a.Item,{name:"username",rules:[{required:!1,message:"Please input your Username!"}],children:Object(n.jsx)(u.a,{prefix:Object(n.jsx)(p.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(n.jsx)(d.a.Item,{name:"password",rules:[{required:!1,message:"Please input your Password!"}],children:Object(n.jsx)(u.a,{prefix:Object(n.jsx)(O.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(n.jsxs)(d.a.Item,{children:[Object(n.jsx)(d.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(n.jsx)(b.a,{children:"Recordarme"})}),Object(n.jsx)("a",{className:"login-form-forgot",href:"/#",children:"Olvide mi password"})]}),Object(n.jsx)(d.a.Item,{children:Object(n.jsx)(h.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:Object(n.jsx)(o.b,{to:"/dashboard",children:"Login"})})})]})})}),m=a(1120),g=a(1121),f=a(135),v=a(1136),y=a(1137),I=a(1138),k=a(1139),S=a(1140),C=(a(696),a(114)),F=a.n(C),w=a(250),A=a(64),T=a(576),N=a(1125),E=a(1126),D=a(1135),q=(a(698),a(575)),U=a(1129),M=a(1118),P=a(1122),Y=a(1133),G=a(1134),R=function(e){var t=e.showUpdate,a=e.confirm,c=e.cancel,r=(e.handleOkUpdate,e.handleCancelUpdate,e.transactions),s=e.loading,i=[{title:"Etiqueta",dataIndex:"type",key:"type",render:function(e){var t="i"===e?"green":"red",a="i"===e?"ingreso":"egreso";return Object(n.jsx)(q.a,{color:t,children:a.toUpperCase()},a)}},{title:"Fecha",dataIndex:"createdAt",key:"createdAt"},{title:"Descripcion",dataIndex:"description",key:"description"},{title:"Importe",dataIndex:"amount",key:"amount"},{title:"Categoria",key:"category",dataIndex:"category"},{title:"Accion",key:"action",render:function(e,r){return Object(n.jsxs)(U.b,{size:"middle",children:[Object(n.jsx)(M.a,{title:"Estas seguro?",onConfirm:function(){a(r)},onCancel:c,okText:"Si",cancelText:"No",children:Object(n.jsx)(h.a,{type:"link",children:Object(n.jsx)(Y.a,{})})}),Object(n.jsx)(h.a,{type:"link",onClick:function(){t(r)},children:Object(n.jsx)(G.a,{})})]})}}];return Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{columns:i,dataSource:r,loading:s})})},z=a(112),J=a(248),V=a(1123),L=a(1128),B={labelCol:{span:8},wrapperCol:{span:16}},_=function(e){var t=e.form,a=e.record;return Object(n.jsxs)(d.a,Object(z.a)(Object(z.a)({},B),{},{name:"basic",initialValues:{remember:!0},form:t,children:[Object(n.jsx)(d.a.Item,{label:"Tipo",name:"type",rules:[{required:!0,message:"Seleccione un tipo de entrada"}],children:Object(n.jsxs)(J.a,{children:[Object(n.jsx)(J.a.Option,{value:"i",children:"Ingreso"}),Object(n.jsx)(J.a.Option,{value:"e",children:"Gasto"})]})}),Object(n.jsx)(d.a.Item,{label:"Fecha",name:"createdAt",children:Object(n.jsx)(V.a,{})}),Object(n.jsx)(d.a.Item,{label:"Descripcion",name:"description",rules:[{required:!0,message:"Ingrese una descripcion"}],initialValue:a.description,children:Object(n.jsx)(u.a,{})}),Object(n.jsx)(d.a.Item,{label:"Categoria",name:"category",rules:[{required:!0,message:"Seleccione una categoria"}],initialValue:a.category,children:Object(n.jsxs)(J.a,{children:[Object(n.jsx)(J.a.Option,{value:"supermercado",children:"Supermercado"}),Object(n.jsx)(J.a.Option,{value:"auto",children:"Auto"}),Object(n.jsx)(J.a.Option,{value:"fijos",children:"Gastos Fijos"}),Object(n.jsx)(J.a.Option,{value:"tarjeta",children:"Tarjeta de credito"}),Object(n.jsx)(J.a.Option,{value:"otros",children:"Otros"})]})}),Object(n.jsx)(d.a.Item,{label:"Monto",name:"amount",rules:[{required:!0,message:"Ingrese un monto"}],initialValue:a.amount,children:Object(n.jsx)(L.a,{})})]}))},H={labelCol:{span:8},wrapperCol:{span:16}},K=function(e){var t=e.form;return Object(n.jsxs)(d.a,Object(z.a)(Object(z.a)({},H),{},{name:"basic",initialValues:{remember:!0},form:t,children:[Object(n.jsx)(d.a.Item,{label:"Tipo",name:"type",rules:[{required:!0,message:"Seleccione un tipo de entrada"}],children:Object(n.jsxs)(J.a,{children:[Object(n.jsx)(J.a.Option,{value:"i",children:"Ingreso"}),Object(n.jsx)(J.a.Option,{value:"e",children:"Gasto"})]})}),Object(n.jsx)(d.a.Item,{label:"Fecha",name:"createdAt",children:Object(n.jsx)(V.a,{})}),Object(n.jsx)(d.a.Item,{label:"Descripcion",name:"description",rules:[{required:!0,message:"Ingrese una descripcion"}],children:Object(n.jsx)(u.a,{})}),Object(n.jsx)(d.a.Item,{label:"Categoria",name:"category",rules:[{required:!0,message:"Seleccione una categoria"}],children:Object(n.jsxs)(J.a,{children:[Object(n.jsx)(J.a.Option,{value:"supermercado",children:"Supermercado"}),Object(n.jsx)(J.a.Option,{value:"auto",children:"Auto"}),Object(n.jsx)(J.a.Option,{value:"fijos",children:"Gastos Fijos"}),Object(n.jsx)(J.a.Option,{value:"tarjeta",children:"Tarjeta de credito"}),Object(n.jsx)(J.a.Option,{value:"otros",children:"Otros"})]})}),Object(n.jsx)(d.a.Item,{label:"Monto",name:"amount",rules:[{required:!0,message:"Ingrese un monto"}],children:Object(n.jsx)(L.a,{})})]}))},W=function(){var e=d.a.useForm(),t=Object(A.a)(e,1)[0],a=d.a.useForm(),r=Object(A.a)(a,1)[0],s=Object(c.useState)([]),i=Object(A.a)(s,2),o=i[0],l=i[1];Object(c.useEffect)((function(){U()}),[]);var j=Object(c.useState)(!1),u=Object(A.a)(j,2),b=u[0],p=u[1],O=Object(c.useState)(!1),x=Object(A.a)(O,2),m=x[0],g=x[1],f=Object(c.useState)(null),v=Object(A.a)(f,2),y=v[0],I=v[1],k=Object(c.useState)(!1),S=Object(A.a)(k,2),C=S[0],q=S[1],U=function(){var e=Object(w.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(!0),e.next=3,fetch("https://piggy-srv.herokuapp.com/api/v1/transactions");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,l(a.data),console.log(a),q(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(w.a)(F.a.mark((function e(){var a,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.validateFields();case 2:a=e.sent,n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)},console.log(a),fetch("https://piggy-srv.herokuapp.com/api/v1/transactions",n).then((function(e){return e.json()})).then((function(e){console.log(e),U()}),(function(e){alert("Error al crear la transaccion")})),console.log("Success:",a),p(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(w.a)(F.a.mark((function e(t){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),a={method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}},fetch("https://piggy-srv.herokuapp.com/api/v1/transactions/"+t._id,a).then((function(e){return e.json()})).then((function(e){console.log(e),U()}),(function(e){alert("Error al crear la transaccion")})),T.b.success("Se elimino el registro correctamente."),U();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(w.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.validateFields();case 2:t=e.sent,a={method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)},console.log(t),fetch("https://piggy-srv.herokuapp.com/api/v1/transactions/".concat(y._id),a).then((function(e){return e.json()})).then((function(e){console.log(e),U()}),(function(e){alert("Error al actualizar la transaccion")})),console.log("Success:",t),p(!1),g(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){};return Object(n.jsxs)("div",{children:[Object(n.jsx)(N.a,{title:"Gestion de gastos",extra:[Object(n.jsxs)(h.a,{type:"primary",onClick:function(){p(!0)},children:[Object(n.jsx)(D.a,{}),"Nuevo gasto"]},"1")]}),Object(n.jsx)(R,{confirm:P,cancel:function(e){console.log(e)},transactions:o,loading:C,handleOkUpdate:Y,handleCancelUpdate:G,showUpdate:function(e){g(!0),I(e)}}),Object(n.jsx)(E.a,{title:"Ingrese un registro",visible:b,onOk:M,onCancel:function(){p(!1)},children:Object(n.jsx)(K,{form:t})}),Object(n.jsx)(E.a,{title:"Edicion de registro",visible:m,onOk:Y,onCancel:G,children:Object(n.jsx)(_,{form:r,record:y})})]})},Q=a(378),X=a.n(Q),Z=function(e){var t=[{title:"Etiqueta",dataIndex:"type",key:"type",render:function(e){var t="i"===e?"green":"red",a="i"===e?"ingreso":"egreso";return Object(n.jsx)(q.a,{color:t,children:a.toUpperCase()},a)}},{title:"Descripcion",dataIndex:"description",key:"description"},{title:"Action",key:"action",render:function(e,t){return Object(n.jsxs)(U.b,{size:"middle",children:[Object(n.jsx)("a",{href:"/#",children:Object(n.jsx)(G.a,{})}),Object(n.jsx)("a",{href:"/#",children:Object(n.jsx)(Y.a,{})})]})}}];return Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{columns:t,dataSource:[{type:"i",description:"Sueldo"},{type:"i",description:"Aguinaldo"},{type:"i",description:"Bono"},{type:"i",description:"Extra"},{type:"e",description:"Supermercado"},,{type:"e",description:"Gastos fijos"},,{type:"e",description:"Alquiler"},,{type:"e",description:"Auto"},,{type:"e",description:"Tarjeta de credito"},,{type:"e",description:"Otros"}],loading:"TRUE"})})},$=a(211),ee=function(){var e={data:[{fecha:"1/12/2020",gasto:900},{fecha:"4/12/2020",gasto:150},{fecha:"8/12/2020",gasto:4e3},{fecha:"9/12/2020",gasto:250},{fecha:"13/12/2020",gasto:30},{fecha:"15/12/2020",gasto:900},{fecha:"17/12/2020",gasto:105},{fecha:"20/12/2020",gasto:46},{fecha:"22/12/2020",gasto:25},{fecha:"25/12/2020",gasto:344},{fecha:"27/12/2020",gasto:93},{fecha:"28/12/2020",gasto:165},{fecha:"29/12/2020",gasto:450},{fecha:"30/12/2020",gasto:25},{fecha:"31/12/2020",gasto:3}],title:{visible:!0,text:"Gastos por dia"},xField:"fecha",yField:"gasto",color:"blue",point:{visible:!0,size:5,shape:"circle",style:{fill:"white",stroke:"blurede",lineWidth:2}}};return Object(n.jsx)("div",{children:Object(n.jsx)($.b,Object(z.a)({},e))})},te=function(){var e={data:[{month:"Enero",value:38},{month:"Febrero",value:52},{month:"Marzo",value:61},{month:"Abril",value:145},{month:"Mayo",value:48},{month:"Junio",value:38},{month:"Julio",value:52},{month:"Agosto",value:61},{month:"Setiembre",value:145},{month:"Octubre",value:48},{month:"Noviembre",value:145},{month:"Diciembre",value:48}],xField:"value",yField:"month",seriesField:"month",legend:{position:"top-left"}};return Object(n.jsx)($.a,Object(z.a)({},e))},ae=function(){var e={appendPadding:10,data:[{type:"Supermercado",value:27},{type:"Auto",value:25},{type:"Gastos fjos",value:18},{type:"Otros",value:15},{type:"Tarjeta de credito",value:10},{type:"Impuestos",value:5}],angleField:"value",colorField:"type",radius:1,innerRadius:.64,label:{type:"inner",offset:"-50%",style:{textAlign:"center"},autoRotate:!1,content:"{value}"},interactions:[{type:"element-selected"},{type:"element-active"},{type:"pie-statistic-active"}]};return Object(n.jsx)($.c,Object(z.a)({},e))},ne=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(N.a,{title:"Reportes de gastos e ingresos"}),Object(n.jsx)(ae,{}),Object(n.jsx)(ee,{}),Object(n.jsx)(te,{})]})},ce=a(1130),re=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(d.a.Item,{label:"Tema oscuro",children:Object(n.jsx)(ce.a,{})}),Object(n.jsx)(d.a.Item,{label:"Decimales",children:Object(n.jsx)(ce.a,{})}),Object(n.jsx)(d.a.Item,{label:"Formato fecha",children:Object(n.jsxs)(J.a,{children:[Object(n.jsx)(J.a.Option,{children:"DD:MM:YYYY"}),Object(n.jsx)(J.a.Option,{children:"DD:MM:YY"}),Object(n.jsx)(J.a.Option,{children:"YYYY:MM:DD"})]})}),Object(n.jsx)(d.a.Item,{children:Object(n.jsx)(h.a,{type:"primary",children:"Enviar"})})]})})},se=m.a.Header,ie=m.a.Content,oe=m.a.Sider,le=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(m.a,{children:[Object(n.jsxs)(se,{className:"header",children:[Object(n.jsx)("div",{className:"logo"}),Object(n.jsx)(j.a,{children:Object(n.jsx)(g.a,{span:24,style:{textAlign:"right"},children:Object(n.jsxs)(f.a,{theme:"dark",mode:"horizontal",style:{textAlign:"right"},children:[Object(n.jsx)(X.a,{children:Object(n.jsx)(v.a,{})}),Object(n.jsx)(X.a,{children:Object(n.jsx)(p.a,{})})]})})})]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)(oe,{width:200,className:"site-layout-background",children:Object(n.jsxs)(f.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:[Object(n.jsx)(f.a.Item,{icon:Object(n.jsx)(y.a,{}),children:Object(n.jsx)(o.b,{to:"/dashboard",children:"Gestion"})},"1"),Object(n.jsx)(f.a.Item,{icon:Object(n.jsx)(I.a,{}),children:Object(n.jsx)(o.b,{to:"/dashboard/categories",children:"Categorias"})},"2"),Object(n.jsx)(f.a.Item,{icon:Object(n.jsx)(k.a,{}),children:Object(n.jsx)(o.b,{to:"/dashboard/reports",children:"Reportes"})},"3"),Object(n.jsx)(f.a.Item,{icon:Object(n.jsx)(S.a,{}),children:Object(n.jsx)(o.b,{to:"/dashboard/config",children:"Configuracion"})},"4")]})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(ie,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/dashboard",children:Object(n.jsx)(W,{})}),Object(n.jsx)(l.a,{path:"/dashboard/categories",children:Object(n.jsx)(Z,{})}),Object(n.jsx)(l.a,{path:"/dashboard/reports",children:Object(n.jsx)(ne,{})}),Object(n.jsx)(l.a,{path:"/dashboard/config",children:Object(n.jsx)(re,{})})]})})})]})]})})},je=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(o.a,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/dashboard",children:Object(n.jsx)(le,{})}),Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(x,{})})]})})})},de=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,1141)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(je,{})}),document.getElementById("root")),de()},596:function(e,t,a){},597:function(e,t,a){},696:function(e,t,a){},698:function(e,t,a){}},[[1111,1,2]]]);
//# sourceMappingURL=main.a4aed61f.chunk.js.map