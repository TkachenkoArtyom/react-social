(this.webpackJsonpsamurai=this.webpackJsonpsamurai||[]).push([[7],{83:function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));var n=t(1),a=t(87),c=(t(0),t(84)),o=t.n(c),i=t(2),s=function(e){return function(r){var t=r.input,c=r.meta,s=Object(a.a)(r,["input","meta"]),u=c.touched&&c.error;return Object(i.jsxs)("div",{className:o.a.formControl+" "+(u?o.a.error:""),children:[Object(i.jsx)("div",{children:Object(i.jsx)(e,Object(n.a)(Object(n.a)({},t),s))}),Object(i.jsx)("div",{children:u&&Object(i.jsx)("span",{children:c.error})})]})}}},84:function(e,r,t){e.exports={formControl:"FormControls_formControl__3XuoQ",error:"FormControls_error__3PNN-",formSummaryError:"FormControls_formSummaryError__3JmAt"}},85:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n={required:function(e){return e?void 0:"Required"},mustBeNumber:function(e){return isNaN(e)?"Must be a number":void 0},minValue:function(e){return function(r){return isNaN(r)||r>=e?void 0:"Should be greater than ".concat(e)}},composeValidators:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return r.reduce((function(r,t){return r||t(e)}),void 0)}},maxLength:function(e){return function(r){if(!r||r.length>e)return"Max length is ".concat(e," symbols")}}}},97:function(e,r,t){"use strict";t.r(r);t(0);var n=t(89),a=t(83),c=t(85),o=t(19),i=t(17),s=t(5),u=t(84),l=t.n(u),m=t(2);r.default=Object(o.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth,error:e.auth.error}}),{login:i.c})((function(e){var r=e.isAuth,t=e.login,o=e.error,i=e.captchaUrl,u=Object(a.a)("input");return!0===r?Object(m.jsx)(s.a,{to:"/profile"}):Object(m.jsx)(n.b,{onSubmit:function(e){console.log(e),t(e.email,e.password,e.rememberMe,e.captcha)},children:function(e){var r=e.handleSubmit,t=e.pristine,a=e.form,s=e.submitting;return Object(m.jsxs)("form",{onSubmit:r,children:[Object(m.jsx)("h2",{children:"Login"}),Object(m.jsx)("div",{children:Object(m.jsx)(n.a,{name:"email",component:u,type:"text",validate:c.a.maxLength(20),placeholder:"email"})}),Object(m.jsx)("div",{children:Object(m.jsx)(n.a,{name:"password",component:u,type:"password",validate:c.a.maxLength(20),placeholder:"password"})}),Object(m.jsx)("div",{children:Object(m.jsx)(n.a,{name:"rememberMe",component:"input",type:"checkbox",validate:c.a.maxLength(20)})}),o.show&&Object(m.jsx)("div",{className:l.a.formSummaryError,children:o.message}),i&&Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:i,alt:"Captcha"}),Object(m.jsx)(n.a,{name:"captcha",component:u,placeholder:"Enter captcha here..",validate:c.a.required})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"submit",disabled:s,children:"Submit"}),Object(m.jsx)("button",{type:"button",disabled:t||s,onClick:a.reset,children:"Clear Values"})]})]})}})}))}}]);
//# sourceMappingURL=7.c69442ad.chunk.js.map