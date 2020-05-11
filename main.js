import Vue from 'vue'
import App from './App'

import pageFooter from './components/pageFooter'

Vue.config.productionTip = false

App.mpType = 'app'
//全局注册组件
Vue.component('page-footer',pageFooter)
const app = new Vue({
	...App
})
app.$mount()
