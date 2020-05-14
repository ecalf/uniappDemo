import Vue from 'vue'
import App from './App'
import http from './utils/https.js'
import pageFooter from './components/pageFooter'
import goodsPrice from './components/goodsPrice'
import status from './components/status.vue'

Vue.config.productionTip = false
Vue.prototype.request = http

App.mpType = 'app'
//全局注册组件
Vue.component('page-footer',pageFooter)
Vue.component('page-status',status)
const app = new Vue({
	...App
})
app.$mount()
