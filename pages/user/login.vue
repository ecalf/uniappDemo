<template>
	<view>
		<image class="logo" src="../../static/images/logo.png"></image>
		<view class="checkout-login">
			<text  @click="checkoutlogin(0)" :class="{'checkout-one':current==0}">用户名登录</text>
			<text  @click="checkoutlogin(1)" :class="{'checkout-one':current==1}">手机登录</text>
		</view>

		<!-- 用户名登录 -->
		<view class="input-group" v-if="current==0">
			<view class="input-row">
				<text class="title">手机号：</text>
				<m-input class="m-input" type="text" v-model="fromList.mobile" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-buttom">
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="fromList.password" placeholder="请输入密码"></m-input>
			</view>
			<view class="input-buttom">
			</view>
		</view>


		<!-- 手机登录 -->
		<view class="input-group" v-else>
			<view class="input-row">
				<text class="title">手机号：</text>
				<m-input type="text" v-model="fromList.mobile" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-buttom">
			</view>
			<view class="input-row">
				<m-input class="input-cy" type="number" placeholder="请输入验证码" v-model="fromList.code" ></m-input>
				<text class="input-title" @click='sendCode()' v-if="get_code">获取验证码</text>
				<text class="input-title" v-else>{{count}}秒后重新获取</text>
			</view>
			<view class="input-buttom">
			</view>
		</view>


		<view class="btn-row">
			<button class="cu-btn" @tap="bindLogin">登录</button>
		</view>
		<view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
			<text>|</text>
			<navigator url="../pwd/pwd">忘记密码</navigator>
		</view>
	</view>
</template>

<script>
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

				}

			}
		},
		methods: {
			checkoutlogin(index){
				console.log(index)
				if(index ==0) {
					this.current=0
				}
				else{
					this.current=1
				}
			},
			// 登录
			bindLogin() {
				if (this.fromList.mobile.length < 11 || this.fromList.mobile.length < 0) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的账户'
					});
					return;
				}
				if (this.fromList.password.length < 6 || this.fromList.password.length > 15) {
					uni.showToast({
						icon: 'none',
						title: '密码为6~15位'
					});
					return;
				}
				this.request({
					url: interfaces.getLoignData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							mobile: this.fromList.mobile,
							code: this.fromList.code,
							state_code: '86',
							type: this.fromList.mobile ? 'code_login' : 'pass_login',
						}
					},
					success: ((res) => {
						console.log(res, 111);
						this.loginList = res.data;
						if (res.code !== 200) {
							uni.showToast({
								title: res.message,
								icon: "none"
							});
						}
					})
				});
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
						console.log(res);
					})
				})
			},
		}

	}
</script>

<style>
	.input-group {
		box-sizing: border-box;
		padding: 18.11rpx;
		background-color: #ffffff;
		position: relative;
		top: 54.34rpx;
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
	
	
	.title {
		width: 130.43rpx;
		padding-left: 27.17rpx;
		color: #44a78d;
	}

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
		width: 576.08rpx;
		height: 72.46rpx;
		line-height: 72.46rpx;
		background: #44a78d;
		border-radius: 181.15rpx;
		text-align: center;
		font-size: 32.6rpx;
		color: #fff;
		cursor: pointer;
		position: relative;
		top: 139.49rpx;
	}

	.input-title {
		border: 1.81rpx solid #CCCCCC;
		background-color: #CCCCCC;
	}
	.input-cy{
		padding-left: 18.11rpx;
	}
</style>
