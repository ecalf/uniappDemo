<template>
	<view>
		<view class="uni-form-item uni-column">
			<view class="title">企业银行名称</view>
			<input class="uni-input" text name="nickname" value="张小姐" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">开户行</view>
			<input class="uni-input" number name="nickname" placeholder="请输入开户行" />
		</view>
		<view class="uni-form-item uni-column uni-cc" >
			<view class="title">银行账户</view>
			<input class="uni-input" number name="nickname" placeholder="请输入银行账户" />
		</view>
		<view class="uni-form-item uni-column " >
			<view class="title">公司名称</view>
			<input class="uni-input" text name="nickname" value="张小姐" />
		</view>
		<view class="uni-form-item uni-column " >
			<view class="title">纳税人识别号</view>
			<input class="uni-input" number name="nickname" placeholder="请输入识别号" />
		</view>
		<view class="uni-form-item uni-column " >
			<view class="title">负责人姓名</view>
			<input class="uni-input" text name="nickname" placeholder="请输入负责人姓名" />
		</view>
		<view class="uni-form-item uni-column " >
			<view class="title">公司类型</view>
			<input class="uni-input" text name="nickname" placeholder="请输入公司类型" />
		</view>
		<view class="uni-form-item uni-column " >
			<view class="title">公司网址</view>
			<input class="uni-input" text name="nickname" placeholder="请输入公司网址" />
		</view>
		<view class="uni-form-item uni-column uni-cc" >
			<view class="title">所属行业</view>
			<input class="uni-input" text name="nickname" placeholder="请输入所属行业" />
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
	.uni-cc{
		margin-bottom: 18.11rpx;
		
	}
</style>