//引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({  
    state: {  
        uerInfo: {},  
        hasLogin: false  
    },  
    mutations: {  
   //      login(state, provider) {//改变登录状态  
   //          state.hasLogin = true  
   //          state.uerInfo.token = provider.token
   //          state.uerInfo.userName = provider.client.user_name
   //          state.uerInfo.userId = provider.client.uid //用户id
			// state.uerInfo.companyName = provider.client.profiles.user_company.company_name
			// state.uerInfo.user_Id =provider.client.profiles.user_info.user_id //用户信息Id
			// state.uerInfo.user_Type = provider.client.profiles.user_info.type //注册类型
			// state.uerInfo.isIdentifiy = provider.client.profiles.user_info.is_identifiy //是否认证
   //          uni.setStorage({//将用户信息保存在本地  
   //              key: 'uerInfo',  
   //              data: provider  
   //          })  
   //      },  
   //      logout(state) {//退出登录  
   //          state.hasLogin = false  
   //          state.uerInfo = {}  
   //          uni.removeStorage({  
   //              key: 'uerInfo'  
   //          })  
   //      }  
    }  
})
export default store