(this.webpackJsonpsamurai=this.webpackJsonpsamurai||[]).push([[1],{13:function(e,t,n){e.exports={nav:"Navbar_nav__3FUYt",list:"Navbar_list__2BCrS",item:"Navbar_item__2-COX",active:"Navbar_active__D7CPA"}},17:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return O}));var r=n(3),a=n.n(r),c=n(7),u=n(1),s=n(6),i="social/auth/SET_USERS_DATA",o="social/auth/IS_ERROR",l="social/auth/GET_CAPTCHA_URL_SUCCESS",f={userId:null,email:null,login:null,isAuth:!1,error:{show:!1,message:""},captchaUrl:null},d=function(e,t,n,r){return{type:i,payload:{userId:e,email:t,login:n,isAuth:r}}},p=function(e){return{type:o,error:e}},b=function(e){return{type:l,payload:{captchaUrl:e}}},h=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,u,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,u=r.email,i=r.login,t(d(c,u,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e,t,n,r){return function(){var u=Object(c.a)(a.a.mark((function c(u){var i;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.login(e,t,n,r);case 2:0===(i=a.sent).data.resultCode?(u(h()),u(p({show:!1,message:""}))):(10===i.data.resultCode&&u(g()),u(p({show:!0,message:i.data.messages.length?i.data.messages[0]:"Some error"})));case 4:case"end":return a.stop()}}),c)})));return function(e){return u.apply(this,arguments)}}()},O=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(b(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:case l:return Object(u.a)(Object(u.a)({},e),t.payload);case o:return Object(u.a)(Object(u.a)({},e),{},{error:t.error});default:return e}}},28:function(e,t,n){e.exports={header:"Header_header__15hak",header__img:"Header_header__img__1fsC3",loginBlock:"Header_loginBlock__3zrbl"}},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"f",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return v})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return x}));var r=n(3),a=n.n(r),c=n(7),u=n(18),s=n(1),i=n(6),o="ADD-POST",l="SET-USER-PROFILE",f="SET_STATUS",d="DELETE_POST",p="SAVE_PHOTO_SUCCESS",b={posts:[{id:1,text:"\u041f\u0440\u0438\u0432\u0435\u0442",likesCount:8},{id:2,text:"\u042f \u0442\u0440\u0435\u0439\u0434\u0435\u0440, \u043c\u043d\u0435 8 \u043b\u0435\u0442",likesCount:13},{id:3,text:"\u0410 \u044f Senior, \u043c\u043d\u0435 12 \u043b\u0435\u0442",likesCount:10}],profile:null,status:""},h=function(e){return{type:o,post:e}},j=function(e){return{type:f,status:e}},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.setProfile(e);case 2:r=t.sent,n({type:l,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(j(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.setStatus(e);case 2:0===t.sent.data.resultCode&&n(j(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.saveProfile(e);case 2:c=t.sent,u=r().auth.userId,0===c.data.resultCode&&n(O(u));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:e.posts.length+1,text:t.post,likesCount:5};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n])});case l:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case f:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case d:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case p:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},36:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/loader.47a47a00.gif",a=n(2);t.a=function(){return Object(a.jsx)("img",{src:r})}},47:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(18),a=n(1),c="SEND_MESSAGE",u={dialogs:[{id:1,name:"Pasha"},{id:2,name:"Kirill"},{id:3,name:"Dasha"},{id:4,name:"Viktor"},{id:5,name:"Misha"},{id:6,name:"Artyom"}],messages:[{id:1,message:"Hi"},{id:2,message:"Yes"},{id:3,message:"some"},{id:4,message:"node"},{id:5,message:"GG"},{id:6,message:"Yo"}]},s=function(e){return{type:c,newMessage:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessage;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:e.messages.length+1,message:n}])});default:return e}}},48:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return S})),n.d(t,"e",(function(){return C}));var r=n(3),a=n.n(r),c=n(7),u=n(18),s=n(1),i=n(6),o=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(s.a)(Object(s.a)({},e),r):e}))},l="FOLLOW",f="UNFOLLOW",d="SET_USERS",p="SET_CURRENT_PAGE",b="SET_TOTAL_USERS_COUNT",h="TOGGLE_FETCHING",j="TOGGLE_IS_FOLLOWING_PROGRESS",O={users:[],pageSize:5,usersCount:0,currentPage:1,isFetching:!1,followingInProgress:[],portionSize:10},g=function(e){return{type:l,userId:e}},v=function(e){return{type:f,userId:e}},m=function(e){return{type:p,currentPage:e}},x=function(e){return{type:h,isFetch:e}},w=function(e,t){return{type:j,isFollowing:e,userId:t}},_=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r,c){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r(m(e)),n.next=4,i.d.getUsers(e,t);case 4:u=n.sent,r(x(!1)),r((c=u.items,{type:d,users:c})),r((a=u.totalCount,{type:b,count:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e,t){return n.apply(this,arguments)}}()},y=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(w(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y(n,e,i.d.follow.bind(i.d),g);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y(n,e,i.d.unfollow.bind(i.d),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!0})});case f:return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!1})});case d:return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case p:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case b:return Object(s.a)(Object(s.a)({},e),{},{usersCount:t.count});case h:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetch});case j:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(u.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},56:function(e,t,n){},6:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var r=n(50),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"baf16d0a-ce87-4c48-afe2-4f6364540e9b"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},u={setProfile:function(e){return a.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/"+e)},setStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},82:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(26),u=n.n(c),s=n(22),i=n(23),o=n(25),l=n(24),f=(n(56),n(5)),d=n(15),p=n(19),b=n(14),h=n(1),j=n(17),O="INITIALIZED_SUCCESS",g={initialized:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(h.a)(Object(h.a)({},e),{},{initialized:!0});default:return e}},m=n(34),x=n(47),w={},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return e},y=n(48),S=n(51),C=Object(b.c)({profilePage:m.b,dialogsPage:x.a,sidebar:_,usersPage:y.a,auth:j.a,app:v}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,P=Object(b.e)(C,E(Object(b.a)(S.a)));window.store=P;var k=P,I=n(28),N=n.n(I),T=n(2),U=function(e){return Object(T.jsxs)("header",{className:N.a.header,children:[Object(T.jsx)("img",{className:N.a.header__img,src:"https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",alt:"HeaderImg"}),Object(T.jsx)("div",{className:N.a.loginBlock,children:e.isAuth?Object(T.jsxs)("div",{children:[e.login," - ",Object(T.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(T.jsx)(d.b,{to:"/login",children:" Login "})})]})},A=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(T.jsx)(U,Object(h.a)({},this.props))}}]),n}(a.a.Component),L=Object(p.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:j.d})(A),R=n(13),z=n.n(R);var D=function(){return Object(T.jsx)("nav",{className:z.a.nav,children:Object(T.jsxs)("ul",{className:z.a.list,children:[Object(T.jsx)("li",{className:"".concat(z.a.item," ").concat(z.a.active),children:Object(T.jsx)(d.b,{to:"/profile",activeClassName:z.a.active,children:"Profile"})}),Object(T.jsx)("li",{className:z.a.item,children:Object(T.jsx)(d.b,{to:"/dialogs",activeClassName:z.a.active,children:"Dialogs"})}),Object(T.jsx)("li",{className:z.a.item,children:Object(T.jsx)(d.b,{to:"/users",activeClassName:z.a.active,children:"Users"})})]})})},F=n(36),G=function(e){return function(t){return Object(T.jsx)(a.a.Suspense,{fallback:Object(T.jsx)("div",{children:"Loading.."}),children:Object(T.jsx)(e,Object(h.a)({},t))})}},H=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,100))})),M=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,98))})),B=a.a.lazy((function(){return n.e(5).then(n.bind(null,99))})),Y=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,97))})),V=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(T.jsxs)("div",{className:"app-wrapper",children:[Object(T.jsx)(L,{}),Object(T.jsx)(D,{}),Object(T.jsx)("div",{className:"app-wrapper-content",children:Object(T.jsxs)(f.d,{children:[Object(T.jsx)(f.a,{exact:!0,from:"/",to:"/profile"}),Object(T.jsx)(f.b,{path:"/dialogs",render:G(H)}),Object(T.jsx)(f.b,{path:"/profile/:userId?",render:G(M)}),Object(T.jsx)(f.b,{path:"/users",render:G(B)}),Object(T.jsx)(f.b,{path:"/login",render:G(Y)})]})})]}):Object(T.jsx)(F.a,{})}}]),n}(a.a.Component),W=Object(b.d)(f.g,Object(p.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){Promise.all([e(Object(j.b)())]).then((function(){e({type:O})}))}}}))(V),X=function(){return Object(T.jsx)(d.a,{basename:"/react-social",children:Object(T.jsx)(p.a,{store:k,children:Object(T.jsx)(W,{})})})};u.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(X,{})}),document.getElementById("root"))}},[[82,2,3]]]);
//# sourceMappingURL=main.bab491ce.chunk.js.map