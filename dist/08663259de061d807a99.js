(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{126:function(e,t,i){},129:function(e,t,i){"use strict";var s=i(126);i.n(s).a},130:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"reviews-page"},[this._m(0),t("div",{staticClass:"reviews-page__content"},[this.isEdit?t("div",{staticClass:"reviews-page__form"},[t("form-review")],1):this._e(),t("div",{staticClass:"reviews-page__reviews"},[t("add-review-card"),this._l(this.reviews,function(e,i){return t("review-card",{key:i,attrs:{avatar:e.realpath,title:e.title,text:e.text,link:e.href,tags:e.tags}})})],2)])])};s._withStripped=!0;var a=i(90),r=i(92),n=i(95),c={name:"ReviewsPage",data:function(){return{reviews:[],isEdit:!0}},methods:{handleReviews:function(){this.reviews.forEach(function(e){e.realpath=i(5)("./".concat(e.path))})}},created:function(){this.reviews=i(33),this.handleReviews()},components:{"form-review":a.a,"review-card":r.a,"add-review-card":n.a}},v=(i(129),i(0)),w=Object(v.a)(c,s,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"reviews-page__header"},[t("h1",[this._v('Блок "Отзывы"')])])}],!1,null,null,null);w.options.__file="src/admin/pages/ReviewsPage.vue";t.default=w.exports}}]);