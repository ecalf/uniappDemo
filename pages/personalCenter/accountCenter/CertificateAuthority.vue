<template>
	<view>
		<view class="CertificateAuthority-body" v-if="uerInfo.isIdentifiy == 0">
			<view class="CertificateAuthority-content">
				<view class="icon-left" @click="gotoPersonalAuthentication()">
					<image src="@/static/images/lgicon33.png"></image>
					<text>个人认证</text>
				</view>
				<view class="icon-boder"></view>
				<view class="icon-right" @click="gotoCorporateCertification()">
					<image src="@/static/images/lgicon34.png"></image>
					<text>企业认证</text>
				</view>
			</view>
		</view>
		<view v-else class="isCertificate">您已认证，不需要重新认证</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['hasLogin', 'uerInfo']),
	methods: {
		
		gotoPersonalAuthentication() {
			uni.navigateTo({
				url: '/pages/personalCenter/accountCenter/PersonalAuthentication'
			});
		},
		gotoCorporateCertification() {
			uni.navigateTo({
				url: '/pages/personalCenter/accountCenter/CorporateCertification'
			});
		}
	},
	onLoad() {
		console.log(this.uerInfo)
	}
};
</script>

<style lang="scss">
.CertificateAuthority-body {
	height: calc(100vh - var(--window-top));
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #7b7b7b;
}

.CertificateAuthority-content {
	display: flex;
	justify-content: space-around;
	width: 659.42rpx;
	height: 253.62rpx;
	background-color: #ffffff;
	border-radius: 19.92rpx;

	image {
		width: 110.5rpx;
		height: 114.13rpx;
	}

	.icon-left {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.icon-boder {
		width: 0rpx;
		height: 108.69rpx;
		border: solid 1px #e2e2e2;
		margin-top: 72.46rpx;
	}

	.icon-right {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
}
.isCertificate {
	padding: 54.34rpx 0;
	text-align: center;
}
</style>
