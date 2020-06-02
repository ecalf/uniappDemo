//引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({  
    state: {  
        userinfo: {},  
        hasLogin: false  
    },  
    mutations: {  
   //      login(state, provider) {//改变登录状态  
   //          state.hasLogin = true  
   //          state.userinfo.token = provider.token
   //          state.userinfo.userName = provider.client.user_name
   //          state.userinfo.userId = provider.client.uid //用户id
			// state.userinfo.companyName = provider.client.profiles.user_company.company_name
			// state.userinfo.user_Id =provider.client.profiles.user_info.user_id //用户信息Id
			// state.userinfo.user_Type = provider.client.profiles.user_info.type //注册类型
			// state.userinfo.isIdentifiy = provider.client.profiles.user_info.is_identifiy //是否认证
   //          uni.setStorage({//将用户信息保存在本地  
   //              key: 'userinfo',  
   //              data: provider  
   //          })  
   //      },  
   //      logout(state) {//退出登录  
   //          state.hasLogin = false  
   //          state.userinfo = {}  
   //          uni.removeStorage({  
   //              key: 'userinfo'  
   //          })  
   //      }  
    }  
})
export default store