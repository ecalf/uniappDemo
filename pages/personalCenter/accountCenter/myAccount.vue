<template>
	<view>
		<cl-form @submit="formSubmit">
			<view class="uni-form-item uni-column">
				<view class="title">更改手机</view>
				<navigator class="uni-input" url="/pages/changePhone/changePhone">{{ user_company.contact_phone }}</navigator>
				<text class="guide"></text>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">邮箱</view>
				<!-- <input class="uni-input" text name="nickname" value="11059845575@qq.com" /> -->
				<view class="uni-input">{{ user_company.email }}</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">微信</view>
				<!-- <input class="uni-input" text name="nickname" value="18525464251" /> -->
				<view class="uni-input">{{ user_company.wechat }}</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">QQ</view>
				<!-- <input class="uni-input" number name="nickname" value="1058745578" /> -->
				<view class="uni-input">{{ user_company.qq }}</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">实名认证</view>
				<view class="uni-input" v-if="is_identifiy == 1">已认证</view>
				<view class="uni-input" v-else>
					<navigator class="uni-input" url="/pages/personalCenter/accountCenter/CertificateAuthority">未认证</navigator>	
				</view>	
					<text class="guide" v-if="is_identifiy !== 1"></text>
			</view>

			<view class="dd" v-if="usertype == 3">
				<view><text class="CompanyInformation">公司信息</text></view>
				<view class="uni-form-item uni-column">
					<view class="title">公司名称</view>
					<!-- <input class="uni-input" text name="nickname" value="深圳市虾米科技信息服务有限公司" /> -->
					<view class="uni-input">{{ user_company.company_name }}</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">公司类型</view>
					<!-- <input class="uni-input" text name="nickname" value="互联网公司" /> -->
					<view class="uni-input">{{ user_company.business_scope_cate }}</view>
				</view>
				<view class="uni-form-item uni-column unni-color">
					<view class="title">所属行业</view>
					<!-- <input class="uni-input" text name="nickname" value="IT行业" /> -->
					<view class="uni-input">{{ user_company.industry }}</view>
				</view>
			</view>
		</cl-form>
	</view>
</template>
<script>
import interfaces from '@/utils/interfaces.js';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['hasLogin', 'uerInfo']),
	data() {
		return {
			usertype: '',
			is_identifiy: '',
			user_company: {}
		};
	},
	methods: {
		getMyccount() {
			this.request({
				url: interfaces.getSupplierData,
				dataType: 'JSON',
				method: 'POST', //请求方式
				data: {
					data: {
					}
				},
				success: res => {
					if (res.code == 200) {
						this.user_company = res.data.profiles.user_company;
						this.is_identifiy = res.data.profiles.user_info.is_identifiy;
					}
				}
			});
		}
	},
	onLoad() {
		this.usertype = this.uerInfo.user_Type;
		this.getMyccount();
	}
};
</script>
<style lang="scss" scoped>
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
