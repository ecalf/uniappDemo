<template>
	<view>
		<view class="uni-form-item uni-column">
			<view class="title">姓名</view>
			<input class="uni-input" text name="nickname" value="张小姐" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">身份证号</view>
			<input class="uni-input" number name="nickname" value="410221155885888888888" />
		</view>
		<view class="authentication">
			<text class="authentication-txt">立即认证</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.authentication {
		width: 576.08rpx;
		height: 72.46rpx;
		background-color: #44a78d;
		border-radius: 181.15rpx;
		position: fixed;
		left: 86.95rpx;
		bottom:0rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		.authentication-txt{
			font-size: 32.6rpx;
			color: #fefefe;
		}
	}
</style>
