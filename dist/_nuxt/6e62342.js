(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{287:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("287e51ff",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n(287)},291:function(t,e,n){var r=n(111)(!1);r.push([t.i,".news[data-v-31763f4c]{display:flex;flex-direction:column;max-width:600px;margin:0 auto}.news__date[data-v-31763f4c]{color:#999;font:400 15px/1.4 ProximaNova,Helvetica,sans-serif}.news__img[data-v-31763f4c]{max-width:600px}.news__title[data-v-31763f4c]{font-size:30px;margin:20px 0 10px}",""]),t.exports=r},293:function(t,e,n){"use strict";n.r(e);var r=n(10),c=(n(52),n(25),{validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$axios,n=t.params,r=t.store,e.next=3,r.dispatch("fetchNews");case 3:return c=r.getters.getNews[n.id-1],e.abrupt("return",{news:c});case 5:case"end":return e.stop()}}),e)})))()}}),o=(n(290),n(65)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"news"},[e("span",{staticClass:"news__date"},[t._v("05.09.2022")]),t._v(" "),e("img",{staticClass:"news__img",attrs:{src:t.news.url,alt:""}}),t._v(" "),e("div",{staticClass:"news__wrapper"},[e("h3",{staticClass:"news__title"},[t._v(t._s(t.news.title))]),t._v(" "),e("p",{staticClass:"news__text"},[t._v("\n          "+t._s(t.news.body)+"\n        ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1)])])}),[],!1,null,"31763f4c",null);e.default=component.exports}}]);