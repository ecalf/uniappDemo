(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["cool/ui/components/form/form"],{"5a17":function(e,t,n){"use strict";n.r(t);var i=n("7018"),r=n("b2bc");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);var u,l=n("f0c5"),a=Object(l["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=a.exports},7018:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},"7d2e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("afb4")),r=n("2096");function o(e){return e&&e.__esModule?e:{default:e}}var u={componentName:"ClForm",props:{model:{type:Object,default:function(){return{}}},rules:Object,border:Boolean,showMessage:{type:Boolean,default:!0},showToast:{type:Boolean,default:!1},labelWidth:{type:String,default:"150rpx"},labelPosition:{type:String,default:"right"},validateOnValueChange:{type:Boolean,default:!0}},data:function(){return{subscrible:[],rules2:[]}},watch:{model2:{handler:function(e,t){this.publish({props:(0,r.diffForm)(e,t),action:"validate"})},deep:!0},rules:function(e){this.setRules(e)}},computed:{model2:function(){return JSON.parse(JSON.stringify(this.model))},isLabelPosition:function(){return this.labelPosition?"cl-form--".concat(this.labelPosition):""},isBorder:function(){return this.border?"cl-form--border":""}},created:function(){this.setRules(this.rules)},methods:{setRules:function(e){this.rules2=e||{}},validate:function(e){this.validateField(Object.keys(this.model),e)},validateField:function(e,t){var n=this;if(!e)return console.warn("Props 为空"),!1;(0,r.isArray)(e)||(e=[e]);var o={},u=function(t){e.includes(t)&&n.subscrible.find((function(e){return e.prop==t}))&&(o[t]=n.rules2[t])};for(var l in this.rules2)u(l);var a=new i.default(o),s={};e.forEach((function(e){s[e]=n.model[e]})),a.validate(s,(function(i,r){n.publish({props:e,action:"validate"}),t&&t(!i,i)}))},resetFields:function(){var e={},t=!1;for(var n in this.model){var i=this.model[n];i&&(t=!0),(0,r.isArray)(i)?e[n]=i.map((function(){return null})):(0,r.isObject)(i)?e[n]={}:(0,r.isString)(i)?e[n]="":(0,r.isBoolean)(i)?e[n]=!1:e[n]=void 0}t&&this.$emit("update:model",e),this.clearValidate()},clearValidate:function(e){var t=this;this.$nextTick((function(){t.publish({props:e,action:"clear"})}))},addField:function(e,t){var n=this.subscrible.find((function(t){return t.prop==e}));n?n.handler=t:this.subscrible.push({prop:e,handler:t})},removeField:function(e){var t=this.subscrible.findIndex((function(t){return t.prop==e}));this.subscrible.splice(t,1)},publish:function(e){var t=this,n=e.action,i=e.props,r=null;i||(i=Object.keys(this.model)),i.forEach((function(e){r=t.subscrible.find((function(t){return t.prop==e})),r&&r.handler({action:n,value:t.model[e]})}))}}};t.default=u},b2bc:function(e,t,n){"use strict";n.r(t);var i=n("7d2e"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'cool/ui/components/form/form-create-component',
    {
        'cool/ui/components/form/form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5a17"))
        })
    },
    [['cool/ui/components/form/form-create-component']]
]);
