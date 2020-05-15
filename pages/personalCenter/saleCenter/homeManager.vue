<template>
	<view>
		<view class="uni-form-item uni-column">
			<view class="title">企业名称</view>
			<input class="uni-input" text name="nickname" placeholder="请输入公司名称" />
		</view>
		<textarea value="" placeholder="请输入公司介绍" maxlength="200"/>
		<view class="uni-form-item uni-column">
			<view class="title">邮箱地址</view>
			<input class="uni-input" text name="nickname" value="11059845575@qq.com" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">联系人</view>
			<input class="uni-input" text name="nickname" placeholder="请输入联系人" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">联系电话</view>
			<input class="uni-input" number name="nickname" value="18525464251" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">邮箱</view>
			<input class="uni-input" text name="nickname" placeholder="请输入邮箱" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">微信</view>
			<input class="uni-input" number name="nickname" value="请输入微信" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">QQ</view>
			<input class="uni-input" number name="nickname" placeholder="请输入QQ" />
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
	textarea{
		width: 100%;
		height: 217.39rpx;
		background-color: #FFFFFF;
		font-size: 25.36rpx;
		box-sizing: border-box;
		padding: 18.11rpx;
		margin-bottom: 18.11rpx;
		}
</style>
