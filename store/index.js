//引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({  
    state: {  
        userInfo: {},  
        hasLogin: false  
    },  
    mutations: {  
        login(state, provider) {//改变登录状态  
            state.hasLogin = true  
			state.userInfo=provider
            //state.userInfo.token = provider.token
            state.userInfo.userName = provider.client.user_name
            state.userInfo.userId = provider.client.uid //用户id
			state.userInfo.companyName = provider.client.profiles.user_company.company_name
			state.userInfo.user_Id =provider.client.profiles.user_info.user_id //用户信息Id
			state.userInfo.user_type = provider.client.profiles.user_info.type //注册类型
			state.userInfo.isIdentifiy = provider.client.profiles.user_info.is_identifiy //是否认证
            uni.setStorage({//将用户信息保存在本地  
                key: 'userInfo',  
                data: provider  
            })  
        },  
        logout(state) {//退出登录  
            state.hasLogin = false  
            state.userInfo = {}  
            uni.removeStorage({  
                key: 'userInfo'  
            })  
        }  
    }  
})
export default store