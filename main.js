import Vue from 'vue'
import App from './App'

import http from './utils/https.js'
<<<<<<< HEAD
import store from './store'

=======
>>>>>>> 5cfba9c7ac1d09ea07a88a9571c497a7ae686b9e
import pageFooter from './components/pageFooter'
import goodsPrice from './components/goodsPrice'
import status from './components/status.vue'

Vue.config.productionTip = false
Vue.prototype.request = http

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

App.mpType = 'app'
//全局注册组件
Vue.component('page-footer',pageFooter)
Vue.component('page-status',status)
const app = new Vue({
	store,
	...App
})
app.$mount()
