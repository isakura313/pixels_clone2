(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{129:function(t,e,o){"use strict";o(287);var n=o(19),r=o(79),l=o.n(r),c=o(379),v=o(378),_=o(374),f=o(375),d=o(246),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{color:"purple darken-4",app:"","hide-on-scroll":""}},[o("v-btn",{staticClass:"logo_nav",attrs:{nuxt:"",color:"error",to:"/"}},[o("v-toolbar-title",{staticClass:"toolbar__logo"},[t._v("Pixels")])],1),t._v(" "),o("v-row",[o("v-col",{staticClass:"nav_wrap ma-6"},[o("NuxtLink",{staticClass:"nav_wrap__link",attrs:{to:"/",color:"primary"}},[t._v(" Домой ")]),t._v(" "),o("NuxtLink",{staticClass:"nav_wrap__link",attrs:{to:"/search"}},[t._v(" Поиск ")]),t._v(" "),o("NuxtLink",{staticClass:"nav_wrap__link",attrs:{to:"/video"}},[t._v(" Видео ")]),t._v(" "),o("NuxtLink",{staticClass:"nav_wrap__link",attrs:{to:"/likes"}},[t._v(" Избранное ")])],1)],1)],1)}),[],!1,null,"184c0207",null);e.a=component.exports;l()(component,{VAppBar:c.a,VBtn:v.a,VCol:_.a,VRow:f.a,VToolbarTitle:d.a})},130:function(t,e,o){"use strict";o(328);var n=o(19),r=o(79),l=o.n(r),c=o(161),v=o(132),_=o(376),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{staticClass:"footer__main",attrs:{dark:"",padless:""}},[o("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[o("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v("\n      "+t._s((new Date).getFullYear())+" — "),o("strong",[t._v("Pavel Yakupov  ")])])],1)],1)}),[],!1,null,"1a69c1dc",null);e.a=component.exports;l()(component,{VCard:c.a,VCardText:v.b,VFooter:_.a})},166:function(t,e,o){"use strict";var n=o(248);o(0).a.use(n.a)},204:function(t,e,o){var content=o(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("5af8b4fd",content,!0,{sourceMap:!1})},227:function(t,e,o){var content=o(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("0f68b3ea",content,!0,{sourceMap:!1})},249:function(t,e,o){"use strict";var n=o(129),r=o(130),l={components:{Navigator:n.a,Footer:r.a}},c=o(19),v=o(79),_=o.n(v),f=o(377),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("Navigator"),t._v(" "),o("nuxt"),t._v(" "),o("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;_()(component,{VApp:f.a})},252:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return n})),o.d(e,"mutations",(function(){return r})),o.d(e,"actions",(function(){return l}));o(13);var n=function(){return{paginationNumber:1,likedPhotos:[],deleteId:0}},r={updatePagination:function(t,e){t.paginationNumber=e},initLikes:function(t,e){t.likedPhotos=e},updateLikes:function(t,e){-1===t.likedPhotos.indexOf(e)&&(t.likedPhotos.push(e),localStorage.setItem("likes",JSON.stringify(t.likedPhotos)))},deleteLikes:function(t,e){console.log(t.likedPhotos),console.log(e),t.deleteId=e;var filter=t.likedPhotos.filter((function(t){return t!=e}));t.likedPhotos=filter;var data=JSON.parse(JSON.stringify(t.likedPhotos));localStorage.setItem("likes",JSON.stringify(data))}},l={getLikes:function(t){var e=t.commit;localStorage.getItem("likes")&&e("initLikes",JSON.parse(localStorage.getItem("likes")))}}},255:function(t,e,o){o(256),t.exports=o(257)},287:function(t,e,o){"use strict";o(204)},288:function(t,e,o){var n=o(15)(!1);n.push([t.i,".toolbar__logo[data-v-184c0207]{color:#fff;font-weight:700;font-size:24px}.nav_wrap__link[data-v-184c0207]{font-size:22px;text-decoration:none;color:#fff;font-weight:700;margin-right:1.3em}.nav_wrap__link[data-v-184c0207]:hover{color:red}.toolbar__logo[data-v-184c0207]{font-size:20px}.nav_wrap[data-v-184c0207]{width:300px;padding-left:1rem}.nav_wrap .nav_wrap__link[data-v-184c0207]{font-size:18px;padding-left:0}@media screen and (max-width:600px){.nav_wrap .nav_wrap__link[data-v-184c0207]{font-size:14px}}",""]),t.exports=n},328:function(t,e,o){"use strict";o(227)},329:function(t,e,o){var n=o(15)(!1);n.push([t.i,".footer__main[data-v-1a69c1dc]{margin-top:10em}",""]),t.exports=n}},[[255,13,3,14]]]);