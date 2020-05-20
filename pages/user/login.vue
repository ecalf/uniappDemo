<template>
	<view>
		<image class="logo" src="../../static/images/logo.png"></image>
		<form @submit="formSubmit" @reset="formReset">
			<view class="checkout-login">
				<text @click="checkoutlogin(0)" :class="{'checkout-one':current==0}">用户名登录</text>
				<text @click="checkoutlogin(1)" :class="{'checkout-one':current==1}">手机登录</text>
			</view>

			<!-- 用户名登录 -->
			<view class="input-group" v-if="current==0">
				<view class="uni-form-item">
					<view class="title">账号</view>
					<view class="uni-input">
						<input type="text" name="username" v-model="fromList.username" value="" placeholder="请输入手机号/用户名" />
					</view>
				</view>
				<view class="uni-form-item">
					<view class="title">密码 </view>
					<view class="uni-input">
						<input type="password" name="password" v-model="fromList.password" value="" placeholder="请输入密码" />
					</view>
				</view>
			</view>

			<!-- 手机登录 -->
			<view class="input-group" v-else>
				<view class="uni-form-item">
					<view class="title">账号</view>
					<view class="uni-input">
						<input type="text" name="mobile" v-model="fromList.mobile" value="" placeholder="请输入手机号" />
					</view>
				</view>
				<view class="uni-form-item">
					<view class="title">验证码 </view>
					<view class="uni-input">
						<view class="m-flex">
							<input type="text" name="code" class="m-input-fullwidth" value="" placeholder="" v-model="fromList.code" />
							<text class="send-code" @tap="sendCode()" v-if="get_code">发送验证码</text>
							<text class="send-code" v-else>{{count}}秒后重新获取</text>
						</view>
					</view>
				</view>
			</view>
			<view class="btn-row">
				<button class="cu-btn" form-type="submit">登录</button>
			</view>
		</form>

		<view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
			<text>|</text>
			<navigator url="../pwd/pwd">忘记密码</navigator>
		</view>
	</view>
</template>

<script>
	var graceChecker = require("@/utils/graceChecker.js");
	import interfaces from '@/utils/interfaces.js'
	export default {
		data() {
			return {
				current: 0, //选择登录方式
				get_code: true,
				count: 60,
				// 登录表单请求数据
				fromList: {
					mobile: '', //手机号
					password: '', // 密码
					code: '', // 验证码
					username: '' //用户名
				},
				//定义表单规则
				rules: [{
						name: "username",
						checkType: "notnull",
						checkRule: "",
						errorMsg: "请输入手机号或用户名"
					},
					{
						name: "mobile",
						checkType: "phoneno",
						checkRule: "",
						errorMsg: "请输入正确的手机号"
					},
					{
						name: "code",
						checkType: "string",
						checkRule: "6,6",
						errorMsg: "请输入验证码"
					},
					{
						name: "password",
						checkType: "notnull",
						checkRule: "",
						errorMsg: "请输入密码"
					},
				]
			}
		},
		methods: {
			checkoutlogin(index) {
				if (index == 0) {
					this.current = 0
				} else {
					this.current = 1
				}
			},

			//发送验证码
			sendCode() {
				if (this.fromList.mobile !== "") {
					this.get_code = false;
					this.isgetcode = true;
					let interval = setInterval(() => {
						this.count--;
						if (this.count < 1) {
							this.get_code = true;
							this.count = 60;
							clearInterval(interval);
						}
					}, 1000);
				} else {
					uni.showToast({
						title: "请输入手机号",
						icon: "none"
					});
				}
				this.request({
					url: interfaces.getCodeData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							mobile: this.fromList.mobile,
							type: '1'
						}
					},
					success: ((res) => {
						//console.log(res);
					})
				})
			},

			// 登录
			formSubmit: function(e) {
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, this.rules);
				if (!checkRes) {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
				if (checkRes) {
					this.request({
						url: interfaces.getLoignData,
						dataType: "JSON",
						method: 'POST', //请求方式
						data: {
							data: {
								type: this.fromList.mobile ? 'code_login' : 'pass_login',
								//手机号登录
								mobile: this.fromList.mobile,
								code: this.fromList.code, //验证码
								//密码登录
								user_name: this.fromList.username,
								password: this.fromList.password,
								state_code: '86', //国家区号
							}
						},
						success: (res) => {
							console.log(res);
							if (res.code !== 200) {
								uni.showToast({
									title: res.message,
									icon: "none"
								});
								return;

							} else {

								let clientToken = 'DATA ' + btoa(res.data.client.uid + ':' + res.data.client.user_name + ':' + res.data.token);
								console.log(clientToken);
								let userInfo = {
									userId: res.data.client.uid,
									token: clientToken,
									userName: res.data.client.user_name
								}
								uni.setStorage({
									key: 'Token',
									data: userInfo,
									success: (res) => {
										uni.getStorage({
											key: 'Token',
											success: (res) => {
												console.log(res.data);
											}
										})
									}
								});


								uni.switchTab({
									url: "/pages/personalCenter/personalCenter"
								})
							}
						},
						fail: (e) => {
							uni.showModal({
								content: "请求失败，请重试！",
								showCancel: false
							})
						}
					});
				}
			},


			// ...mapMutations(['login'])

			//...mapMutations(['login'])


			//...mapMutations(['login'])

		}

	}
</script>

<style>
	.input-group {
		margin: 36.23rpx 5% 90.57rpx;
		border-radius: 9.05rpx;
		overflow: hidden;
	}

	.checkout-login {
		display: flex;
		font-size: 27.17rpx;
		justify-content: space-around;
		margin: 0 auto;
		align-items: center;
		box-sizing: border-box;
		padding: 27.17rpx 0rpx;
	}

	.checkout-one {
		display: block;
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		line-height: 36px;
		letter-spacing: 0px;
		color: #44a78d;
		border-bottom: 5.43rpx solid #44a78d;
	}


	/* .title {
		width: 130.43rpx;
		padding-left: 27.17rpx;
		color: #44a78d;
	} */

	.input-row {
		display: flex;
		flex-direction: row;
		font-size: 23.55rpx;
		line-height: 72.46rpx;
		border-bottom: 1.81rpx solid #FFFFFF;
	}

	.input-buttom {
		border-bottom: 1px solid #ccc;
		margin-left: 23.55rpx;
	}

	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		color: #39B54A;
		position: relative;
		top: 181.15rpx;
	}

	.action-row navigator {
		color: #44a78d;
		padding: 0 10px;

	}

	.logo {
		width: 271.73rpx;
		height: 59.78rpx;
		margin: 90.57rpx auto 36.23rpx;
		display: block;
	}

	.cu-btn {
		width: 80%;
		height: 72.46rpx;
		line-height: 72.46rpx;
		background: #44a78d;
		border-radius: 181.15rpx;
		text-align: center;
		font-size: 32.6rpx;
		color: #fff;
		cursor: pointer;

	}

	.input-title {
		border: 1.81rpx solid #CCCCCC;
		background-color: #CCCCCC;
	}
</style>
