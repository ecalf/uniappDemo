<template>
	<view>
		<view class="uni-form-item uni-column">
			<view class="title">登录密码</view>
			<input class="uni-input" password name="nickname" value="*****" />
			<text class="guide"></text>
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">手机认证</view>
			<input class="uni-input" number name="nickname" value="18525464251" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">邮箱</view>
			<input class="uni-input" text name="nickname" value="11059845575@qq.com" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">微信</view>
			<input class="uni-input" text name="nickname" value="18525464251" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">QQ</view>
			<input class="uni-input" number name="nickname" value="1058745578" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">实名认证</view>
			<input class="uni-input" text name="nickname" value="已认证" />
			<text class="guide"></text>
		</view>
		<view>
			<text class="CompanyInformation">公司信息</text>
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">公司名称</view>
			<input class="uni-input" text name="nickname" value="深圳市虾米科技信息服务有限公司" />
			<text class="guide"></text>
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">公司类型</view>
			<input class="uni-input" text name="nickname" value="贸易公司（50人以上）" />
			<text class="guide"></text>
		</view>
		<view class="uni-form-item uni-column unni-color">
			<view class="title">公司网址</view>
			<input class="uni-input" text name="nickname" value="请填写公司网址" />
			<text class="guide"></text>
		</view>
		<view class="uni-form-item uni-column unni-color">
			<view class="title">所属行业</view>
			<input class="uni-input" text name="nickname" value="其他化工" />
			<text class="guide"></text>
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
	
	.guide {
		width: 12.68rpx;
		height: 12.68rpx;
		border-width: 1.81rpx 1.81rpx 0 0;
		border-color: #464646;
		border-style: solid;
		transform: rotate(45deg);
		margin-top: -3.47rpx;
		margin-left: 19.92rpx;
	}
	.CompanyInformation{
		font-size: 28.98rpx;
		font-weight: bold;
		color: #479e84;
		padding: 63.4rpx 0 18.11rpx 36.23rpx;
		display:block;
	}
	.unni-color .uni-input-placeholder{
		 color: #e2e2e2;
	 }
</style>
