<template>
	<cl-form ref="form" :model.sync="form" :rules="rules">
		<view class="uni-form-item uni-column unni-color">
			<view class="title">旧手机</view>
			<input class="uni-input" text name="nickname" value="18525464251" />
		</view>
		<view class="uni-form-item uni-column unni-color">
			<view class="title">验证码</view>
			<input class="uni-input uni-input-a" text name="nickname" />
			<view class="verificationCode">
				<text>发送验证码</text>
			</view>
		</view>
		<view class="uni-form-item uni-column unni-color">
			<view class="title">新手机</view>
			<input class="uni-input" text name="nickname" placeholder="请输入手机号码" />
		</view>
		<view class="authentication">
			<text class="authentication-txt">更改手机号</text>
		</view>
	</cl-form>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				rules: {
					date: {
						required: true,
						message: "",
					}
				},
				form: {
					type: 0
				},
			};
		}
	}
</script>

<style lang="scss">
	.uni-input-a {
		margin-right: 90.57rpx;
	}
	.verificationCode {
		width: 159.42rpx;
		height: 52.53rpx;
		background-color: #e2e2e2;
		border-radius: 10.86rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.authentication {
		width: 576.08rpx;
		height: 72.46rpx;
		background-color: #44a78d;
		border-radius: 181.15rpx;
		position: fixed;
		left: 86.95rpx;
		bottom: 0rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		.authentication-txt {
			font-size: 32.6rpx;
			color: #fefefe;
		}
	}
</style>
