<template>
	<view>
		<image class="logo" src="../../static/images/logo.png"></image>
		<view class="input-group">
			<view class="input-row">
				<text class="title">账号：</text>
				<m-input class="m-input" type="text" v-model="account" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-buttom">
			</view>
			<view class="input-row">
				<m-input type="number" placeholder="请输入验证码" v-model="code"></m-input>
				<text class="input-title" @click='getGode()'>获取验证码</text>
			</view>
			<view class="input-buttom">
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
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
				// 登录请求获取的数据
				loginList: [],
				// 请求验证码数据
				codeList:[],
				// 账户
				account: '',
				// 密码
				password: '',
				// 验证码
				code:'562312'
			}
		},
		methods: {
			bindLogin() {
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				this.request({
					url: interfaces.getLoignData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							mobile: '13750091494',
							code:this.code,
							state_code:'86'
							
						}
					},
					success: ((res) => {
						console.log(res, 111);
						this.loginList = res.data;
						if(res.code !==200){
							uni.showToast({
							        title: res.message,
							        icon: "none"
							       });
						}
					})
				});

			},
			getGode(){
				this.request({
					url: interfaces.getLoignData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							mobile: '13750091494',
							type:'1'
						}
					},
					success: ((res) => {
						console.log(res, 222);
						this.codeList = res.data;
	
					})
				});
			}
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
	.input-title{
		border: 1.81rpx solid #CCCCCC;
		background-color: #CCCCCC;
	}
</style>
