const userInfo = uni.getStorageSync('Token'); //获取token
const token = userInfo.token //获取token
// 请求封装
function request(obj) {
	let url = '/api/' + obj.url; //地址
	let data = obj.data || {};
	let success = obj.success;
	let method = obj.method || 'POST';
	uni.request({
		url: url,
		dataType: "JSON",
		data: data,
		header: {
			//'Accept': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
			'Token': token,
		},
		method: method,
		success: function(res) {
			// 判断token是否过期
			if (res.data.status == 601) {
				uni.showModal({
					title: '提示',
					content: res.message,
					showCancel: false,
					success: function(res) {
						if (res.confirm) {
							uni.redirectTo({
								url: '/pages/user/login'
							})
						}
					}
				})
				return
			}

			success(res)



		},
		fail: function(res) {},
		complete: function(res) {
			console.log("请求成功")
		},
	})
}
// 上传图片封装

export default {
	request: request

};
