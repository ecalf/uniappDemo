<template>
	<view>
		<cl-form @submit="formSubmit">
			<view class="uni-form-item uni-column">
				<view class="title">更改手机</view>
				<navigator class="uni-input" url="/pages/changePhone/changePhone">18525464251</navigator>
				<text class="guide"></text>
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
				<navigator class="uni-input" url="/pages/personalCenter/accountCenter/CertificateAuthority">未认证</navigator>
				<text class="guide"></text>
			</view>
			<view>
				<text class="CompanyInformation">公司信息</text>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">公司名称</view>
				<input class="uni-input" text name="nickname" value="深圳市虾米科技信息服务有限公司" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">公司类型</view>
				<cl-select v-model="form.selectbrand" :options="options.selectbrand" class="uni-input"></cl-select>
			</view>
			<view class="uni-form-item uni-column unni-color">
				<view class="title">公司网址</view>
				<input class="uni-input" text name="nickname" value="www.cccccc.com" />
			</view>
			<view class="uni-form-item uni-column unni-color">
				<view class="title">所属行业</view>
				<cl-select v-model="form.selectbrand" :options="options.profession" class="uni-input"></cl-select>
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
					selectbrand: 0,
				},
				options: {
					selectbrand: [
						{
							label: '请选择类型',
							value: 0
						},{
							label: '贸易公司',
							value: 1
						},
						{
							label: '运输公司',
							value: 2
						},
						{
							label: '金融公司',
							value: 3
						},
						{
							label: '互联网公司',
							value: 4
						}
					],
					profession: [
						{
							label: '请选择行业',
							value: 0
						},{
							label: '化工行业',
							value: 1
						},
						{
							label: '运输行业',
							value: 2
						},
						{
							label: '教育行业',
							value: 3
						},
						{
							label: '其他',
							value: 4
						}
							
					]
	
				},	
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

	.CompanyInformation {
		font-size: 28.98rpx;
		font-weight: bold;
		color: #479e84;
		padding: 63.4rpx 0 18.11rpx 36.23rpx;
		display: block;
	}

	.unni-color .uni-input-placeholder {
		color: #e2e2e2;
	}
</style>
