(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d03ce26"],{"1f7b":function(e,t,s){"use strict";var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"au-breadcrumb m-t-75",staticStyle:{"margin-bottom":"-25px"}},[s("div",{staticClass:"section__content section__content--p30"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"au-breadcrumb-content"},[s("div",{staticClass:"au-breadcrumb-left"},[s("span",{staticClass:"au-breadcrumb-span"},[e._v("Usted está aquí:")]),s("ul",{staticClass:"list-unstyled list-inline au-breadcrumb__list"},[s("li",{staticClass:"list-inline-item active"},[e._t("first")],2),e._m(0),s("li",{staticClass:"list-inline-item"},[e._t("second")],2)])])])])])])])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"list-inline-item seprate"},[s("span",[e._v("/")])])}],r=s("2877"),i={},n=Object(r["a"])(i,l,a,!1,null,null,null);t["a"]=n.exports},c1a0:function(e,t,s){"use strict";s.r(t);var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("uarehere",[s("template",{slot:"first"},[e._v("Vendedores ")])],2),s("div",{staticClass:"statistic"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row "},[s("div",{staticClass:"col-md-12"},[e.sellers.error?s("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(e._s(e.sellers.errorMessage))]):e._e(),s("div",{staticClass:"col-md-6 col-sm-6 mb-2"},[s("b-input-group",[s("b-input-group-text",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("Vendedores por pagina")]),s("b-form-input",{attrs:{placeholder:"edit me",type:"number"},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),s("div",{staticClass:"table-responsive centered m-b-40"},[s("paginate",{attrs:{name:"sellers",list:e.sellers.sellers,per:e.perPage}},[s("table",{staticClass:"table table-borderless table-data3"},[s("thead",[s("tr",[s("th",[e._v("Id")]),s("th",[e._v("Nombre")]),s("th",[e._v("Identificación")]),s("th",[e._v("Id ciudad")]),s("th",[e._v("Status")]),s("th",[e._v("Opciones")])])]),e.sellers.sellers.length?s("tbody",e._l(e.paginated("sellers"),function(e){return s("sellerItem",{key:e.IdSeller,attrs:{seller:e}})}),1):s("b-alert",{attrs:{show:"",variant:"info"}},[e._v("No hay vendedores que mostrar")])],1)])],1),s("paginate-links",{attrs:{for:"sellers",classes:{ul:"pagination",li:"page-item","li > a":"page-link"}}})],1)])])])],1)},a=[],r=s("cebc"),i=s("2f62"),n=s("1f7b"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("td",[e._v(e._s(e.seller.IdSeller))]),s("td",[e._v(e._s(e.seller.NameSeller))]),s("td",[e._v(e._s(e.seller.IdentificationNumberSeller))]),s("td",[e._v(e._s(e.seller.IdCity))]),s("td",{directives:[{name:"show",rawName:"v-show",value:1==e.seller.StatusSeller,expression:"seller.StatusSeller == 1"}],staticClass:"process"},[e._v("Habilitado")]),s("td",{directives:[{name:"show",rawName:"v-show",value:0==e.seller.StatusSeller,expression:"seller.StatusSeller == 0"}],staticClass:"mute"},[e._v("Deshabilitado")]),s("td",[s("div",{staticClass:"table-data-feature"},[s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"item",attrs:{title:"Editar"},on:{click:e.goToUpdateSeller}},[s("i",{staticClass:"zmdi zmdi-edit"})]),s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"item",attrs:{title:"des/habilitar"},on:{click:e.updateSellerStatus}},[1==e.seller.StatusSeller?s("i",{staticClass:"fa fa-times"}):0==e.seller.StatusSeller?s("i",{staticClass:"fa fa-check"}):e._e()])])])])},o=[],d={props:{seller:{type:Object,required:!0}},methods:Object(r["a"])({},Object(i["b"])("sellers",["updateSellersStatus"]),Object(i["c"])("sellers",["setSeller"]),{goToUpdateSeller:function(){this.setSeller(this.seller),this.$router.push({name:"sellerUpdate",params:{IdSeller:this.seller.IdSeller}})},updateSellerStatus:function(){this.updateSellersStatus([this.seller,this.$store.state.auth.Tokken])}}),mounted:function(){$(function(){$('[data-toggle="tooltip"]').tooltip()})}},u=d,p=s("2877"),m=Object(p["a"])(u,c,o,!1,null,null,null),v=m.exports,b={components:{uarehere:n["a"],sellerItem:v},computed:Object(r["a"])({},Object(i["d"])(["sellers"])),methods:Object(r["a"])({},Object(i["b"])("sellers",["fetchSellers"])),mounted:function(){this.fetchSellers(this.$store.state.auth.Tokken)},data:function(){return{paginate:["sellers"],perPage:15}}},h=b,_=Object(p["a"])(h,l,a,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-6d03ce26.0dea52c7.js.map