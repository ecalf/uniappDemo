module.exports = (param) => {

	var url = param.url;
	var method = param.method;
	var header = param.header || {};
	var data = param.data || {};


	//token
	const userInfo = uni.getStorageSync('Token'); //获取token
	if (userInfo && userInfo.token) {
		const token = userInfo.token //获取token
		header['Authorization'] = token;
	}

	// 请求方式: GET POST 
	if (method) {
		method = method.toUpperCase(); // 小写转成大写
		if (method == "POST") {
			header["content-type"] = "application/json";
		}
	}

	// 发起请求 加载动画
	if (!param.hideLoading) {
		uni.showLoading({
			title: "加载中..."
		})
	}



	// 发起网络请求
	uni.request({
		url: url,
		method: method || "POST",
		header: header,
		data: data,
		success: res => {
			//console.log(res);
			// if (res.data.code && res.data.code != 200) { // api错误
			// 	uni.showModal({
			// 		content: res.message
			// 	})
			// 	return;
			// }
			
			if (res.data.code && res.data.code == 10001) {
				uni.showModal({
					title: '提示',
					content: '登录已过期，请重新登录',
					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url: "/pages/user/login"
							});
						} else if (res.cancel) {
							// console.log('用户点击取消');
						}
					}
				});
			}
			
			
			typeof param.success == "function" && param.success(res.data);
		},
		fail: (e) => {
			uni.showModal({
				content: e.meg
			})
			typeof param.fail == "function" && param.fail(e.data);
		},
		complete: () => {
			//console.log("网络请求complete");
			uni.hideLoading();
			typeof param.complete == "function" && param.complete(e.data);
			return;
		}
	})

}
