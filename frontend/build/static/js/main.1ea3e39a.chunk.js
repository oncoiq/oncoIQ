(this.webpackJsonponcoiq=this.webpackJsonponcoiq||[]).push([[0],{42:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(17),s=n.n(r),o=n(7),i=(n(42),n(27)),l=n(11),j=n(31),d=Object(j.createAuthProvider)({accessTokenKey:"access_token",onUpdateToken:function(e){return fetch("https://oncoiq-backend.herokuapp.com//api/refresh",{method:"POST",body:e.access_token}).then((function(e){console.log("r: "+e),e.json()}))}}),u=Object(o.a)(d,4),h=u[0],b=(u[1],u[2]),p=u[3],O=n(1);function m(){var e=h(),t=Object(o.a)(e,1)[0];return Object(O.jsx)("div",{children:Object(O.jsxs)(i.a,{bg:"primary",variant:"dark",children:[Object(O.jsx)(i.a.Brand,{href:"#home",children:"oncoIQ"}),Object(O.jsx)(i.a.Collapse,{className:"justify-content-end",children:t?Object(O.jsx)(l.a,{variant:"outline-light",onClick:function(){return p()},children:"Logout"}):null})]})})}var x=n(35),f=n(6),v=n(8),g=n(32);function k(e){var t=e.prediction,n=[];function c(e){var t="overlay text-center ";return t+=e>.75?"bg-danger":e>.5?"bg-warning":"bg-success"}function a(e){return"https://oncoiq-backend.herokuapp.com/static/tissue_images/"+e}for(var r=0;r<t.length;r+=5)n.push(Object(O.jsxs)(g.a,{children:[Object(O.jsxs)(v.a,{children:[Object(O.jsx)(v.a.Img,{variant:"top",src:a(t[r].file_name)}),Object(O.jsx)("div",{className:c(t[r].risk_level.toFixed(2)),children:t[r].risk_level.toFixed(2)})]}),Object(O.jsxs)(v.a,{children:[Object(O.jsx)(v.a.Img,{variant:"top",src:a(t[r+1].file_name)}),Object(O.jsx)("div",{className:c(t[r+1].risk_level.toFixed(2)),children:t[r+1].risk_level.toFixed(2)})]}),Object(O.jsxs)(v.a,{children:[Object(O.jsx)(v.a.Img,{variant:"top",src:a(t[r+2].file_name)}),Object(O.jsx)("div",{className:c(t[r+2].risk_level.toFixed(2)),children:t[r+2].risk_level.toFixed(2)})]}),Object(O.jsxs)(v.a,{children:[Object(O.jsx)(v.a.Img,{variant:"top",src:a(t[r+3].file_name)}),Object(O.jsx)("div",{className:c(t[r+3].risk_level.toFixed(2)),children:t[r+3].risk_level.toFixed(2)})]}),Object(O.jsxs)(v.a,{children:[Object(O.jsx)(v.a.Img,{variant:"top",src:a(t[r+4].file_name)}),Object(O.jsx)("div",{className:c(t[r+4].risk_level.toFixed(2)),children:t[r+4].risk_level.toFixed(2)})]})]}));return Object(O.jsx)("div",{className:"custom-card",children:n})}function y(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(o.a)(r,2),i=s[0],j=s[1],d=Object(c.useState)(null),u=Object(o.a)(d,2),h=u[0],b=u[1],p=Object(c.useState)(null),m=Object(o.a)(p,2),x=m[0],v=m[1],g=Object(c.useState)(0),y=Object(o.a)(g,2),_=y[0],N=y[1];return Object(c.useEffect)((function(){var e=new Headers,t=localStorage.getItem("REACT_TOKEN_AUTH_KEY").split('"')[1];e.append("Authorization","Bearer "+t);var n=JSON.stringify({image_file:x});fetch("https://oncoiq-backend.herokuapp.com/api/get_tiles",{method:"POST",headers:e,body:n,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e.tiles),v(null)})).catch((function(e){console.log("error",e)}))}),[x]),null!=n?Object(O.jsxs)("div",{className:"mt-5",children:[Object(O.jsx)(k,{prediction:n}),Object(O.jsxs)("p",{children:["Overall Risk: ",_]}),Object(O.jsx)(l.a,{className:"mt-3",variant:"primary",onClick:function(){return a(null)},children:"Upload"})]}):Object(O.jsxs)("div",{className:"mt-4",children:[Object(O.jsx)("br",{}),Object(O.jsx)("h3",{className:"mb-4",children:"Upload a histopathology image"}),Object(O.jsxs)(f.a,{onSubmit:function(e){e.preventDefault();var t=new Headers,n=localStorage.getItem("REACT_TOKEN_AUTH_KEY").split('"')[1];t.append("Authorization","Bearer "+n);var c=new FormData;c.append("file",i.files[0]),c.append("name",h),fetch("https://oncoiq-backend.herokuapp.com/api/upload_image",{method:"POST",headers:t,body:c,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){console.log(e),v(e.image_file),N(e.overall_risk.toFixed(4))})).catch((function(e){console.log("error",e)}))},children:[Object(O.jsxs)(f.a.Group,{className:"mt-3",controlId:"formID",children:[Object(O.jsx)(f.a.Label,{children:"Patient ID"}),Object(O.jsx)(f.a.Control,{className:"w-auto",type:"text",placeholder:"Patient ID",onChange:function(e){e.preventDefault(),b(e.target.value)}})]}),Object(O.jsx)("input",{className:"mt-4",ref:function(e){return j(e)},type:"file"}),Object(O.jsx)(l.a,{className:"",variant:"primary",type:"submit",children:"Upload"})]})]})}var _=Object(c.createContext)();function N(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useContext)(_),s=r.arch,i=r.setArch;return s&&(!function(){var e=new Headers,t=localStorage.getItem("REACT_TOKEN_AUTH_KEY").split('"')[1];e.append("Authorization","Bearer "+t),fetch("https://oncoiq-backend.herokuapp.com/api/get_user_images",{method:"POST",headers:e,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e)})).catch((function(e){console.log("error",e)}))}(),i(!1)),Object(O.jsx)("div",{children:n.map((function(e){return Object(O.jsx)("div",{className:"mt-5",children:Object(O.jsxs)(v.a,{style:{width:"18rem"},children:[Object(O.jsx)(v.a.Img,{variant:"top",src:(t=e.image_file,"https://oncoiq-backend.herokuapp.com/static/tissue_images/"+t)}),Object(O.jsxs)(v.a.Body,{children:[Object(O.jsx)(v.a.Title,{children:e.name}),Object(O.jsx)(v.a.Text,{children:e.date}),Object(O.jsx)(l.a,{variant:"outline-primary",children:"View"}),Object(O.jsx)(l.a,{className:"ml-2",variant:"outline-danger",children:"Delete"})]})]})});var t}))})}var w=n(33),S=n(34),C=n(23),I=n(37),T=n(36);a.a.Component;function U(){var e=Object(c.useContext)(_),t=(e.arch,e.setArch),n=h();return Object(o.a)(n,1)[0]?Object(O.jsx)("div",{className:"mt-5",children:Object(O.jsxs)(x.a,{defaultActiveKey:"predict",id:"uncontrolled-tab-example",onClick:function(){return t(!0)},children:[Object(O.jsx)(U,{eventKey:"predict",title:"Upload",className:"custom-tab justify-content-center",children:Object(O.jsx)(y,{})}),Object(O.jsx)(U,{eventKey:"archive",title:"Archive",children:Object(O.jsx)(N,{})})]})}):null}function A(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],j=s[1],d=Object(c.useState)(""),u=Object(o.a)(d,2),p=u[0],m=u[1],x=Object(c.useState)(!1),v=Object(o.a)(x,2),g=v[0],k=v[1],y=h();function _(e){e.preventDefault(),a(e.target.value)}function N(e){e.preventDefault(),j(e.target.value)}return Object(o.a)(y,1)[0]?null:g?Object(O.jsx)("div",{className:"mt-5",children:Object(O.jsxs)(f.a,{onSubmit:function(e){e.preventDefault();var t=new Headers;t.append("Content-Type","application/json");var c=JSON.stringify({username:n,email:p,password:i});fetch("https://oncoiq-backend.herokuapp.com/api/register",{method:"POST",headers:t,body:c,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){console.log(e),k(!1)})).catch((function(e){console.log("error",e)}))},children:[Object(O.jsxs)(f.a.Group,{controlId:"formEmail",children:[Object(O.jsx)(f.a.Label,{children:"Email"}),Object(O.jsx)(f.a.Control,{type:"email",placeholder:"Email",onChange:function(e){e.preventDefault(),m(e.target.value)}})]}),Object(O.jsxs)(f.a.Group,{controlId:"formUsername",children:[Object(O.jsx)(f.a.Label,{children:"Username"}),Object(O.jsx)(f.a.Control,{type:"text",placeholder:"Username",onChange:_})]}),Object(O.jsxs)(f.a.Group,{controlId:"formPassword",children:[Object(O.jsx)(f.a.Label,{children:"Password"}),Object(O.jsx)(f.a.Control,{type:"password",placeholder:"Password",onChange:N})]}),Object(O.jsx)(l.a,{variant:"primary",type:"submit",children:"Sign Up"}),Object(O.jsx)(l.a,{className:"ml-2",variant:"outline-primary",onClick:function(){return k(!1)},children:"Login"})]})}):Object(O.jsxs)("div",{className:"mt-5 d-flex justify-content-center",children:[Object(O.jsxs)("div",{className:"p-5",children:[Object(O.jsx)("h1",{children:"Welcome to oncoIQ"}),Object(O.jsx)("p",{children:"Using AI image recognition to help pathologists make diagnoses"})]}),Object(O.jsx)("div",{children:Object(O.jsxs)(f.a,{onSubmit:function(e){e.preventDefault();var t=new Headers;t.append("Content-Type","application/json");var c=JSON.stringify({username:n,password:i});fetch("https://oncoiq-backend.herokuapp.com/api/login",{method:"POST",headers:t,body:c,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){console.log(e),null!=e.access_token&&(b(e.access_token),console.log(e.access_token))})).catch((function(e){console.log("error",e)}))},children:[Object(O.jsxs)(f.a.Group,{controlId:"formUsername",children:[Object(O.jsx)(f.a.Label,{children:"Username"}),Object(O.jsx)(f.a.Control,{className:"w-auto",type:"text",placeholder:"Username",onChange:_})]}),Object(O.jsxs)(f.a.Group,{controlId:"formPassword",children:[Object(O.jsx)(f.a.Label,{children:"Password"}),Object(O.jsx)(f.a.Control,{className:"w-auto",type:"password",placeholder:"Password",onChange:N})]}),Object(O.jsx)(l.a,{variant:"primary",type:"submit",children:"Login"}),Object(O.jsx)(l.a,{className:"ml-2",variant:"outline-primary",onClick:function(){return k(!0)},children:"Sign Up"})]})})]})}var P=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{}),Object(O.jsx)(_.Provider,{value:{arch:n,setArch:a},children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(A,{}),Object(O.jsx)(U,{})]})})]})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.1ea3e39a.chunk.js.map