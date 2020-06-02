module.exports = (param) => {

	var url = param.url;
	var method = param.method;
	var header = param.header || {};
	var data = param.data || {};
	


	function base64_encode(str) {//小程序不支持bota函数，将btoa函数更换为base64_encode函数
	  var c1, c2, c3;
	  var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	  var i = 0, len = str.length, string = '';
	
	  while (i < len) {
	    c1 = str.charCodeAt(i++) & 0xff;
	    if (i == len) {
	      string += base64EncodeChars.charAt(c1 >> 2);
	      string += base64EncodeChars.charAt((c1 & 0x3) << 4);
	      string += "==";
	      break;
	    }
	    c2 = str.charCodeAt(i++);
	    if (i == len) {
	      string += base64EncodeChars.charAt(c1 >> 2);
	      string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
	      string += base64EncodeChars.charAt((c2 & 0xF) << 2);
	      string += "=";
	      break;
	    }
	    c3 = str.charCodeAt(i++);
	    string += base64EncodeChars.charAt(c1 >> 2);
	    string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
	    string += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
	    string += base64EncodeChars.charAt(c3 & 0x3F)
	  }
	  return string
	}


	//token
	const userInfo = uni.getStorageSync('userInfo'); //获取token
	
	if (userInfo && userInfo.token) {	
		let clientToken = 'DATA ' + base64_encode(userInfo.client.uid + ':' + userInfo.client.user_name + ':' + userInfo.token);
		header['Authorization'] = clientToken;
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
