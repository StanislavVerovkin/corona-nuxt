exports.ids=[4],exports.modules={37:function(t,e,r){"use strict";r.r(e);var o={async fetch({store:t}){await t.dispatch("list/allCountriesAction")},computed:{worldMap(){return this.$store.getters["list/worldMapCountries"]}}},n=r(1),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("app-map",{attrs:{"country-stroke-color":"none","country-data":this.worldMap}})],1)}),[],!1,null,null,"fae725a6");e.default=component.exports}};