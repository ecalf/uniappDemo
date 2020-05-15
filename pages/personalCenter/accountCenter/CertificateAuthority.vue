<template>
	<view>
		<view class="CertificateAuthority-body">
			<view class="CertificateAuthority-content">
				<view class="icon-left">
					<image src="@/static/images/lgicon33.png" ></image>
					<text>个人认证</text>
				</view>
				<view class="icon-right">
					<image src="@/static/images/lgicon34.png" ></image>
					<text>企业认证</text>
				</view>
			</view>
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
	.CertificateAuthority-body{
		height: calc(100vh - var(--window-top));
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #7B7B7B;
	}
	.CertificateAuthority-content{
		display: flex;
		justify-content: space-around;
		width: 659.42rpx;
		height: 253.62rpx;
		background-color: #FFFFFF;
		border-radius: 19.92rpx;
		image{
			width: 110.5rpx;
			height: 114.13rpx;
		}
		.icon-left{
		display: flex;
		justify-content: center;
		flex-direction:column;
		align-items: center;
		}
		.icon-right{
		display: flex;
		justify-content: center;
		flex-direction:column;
		align-items: center;
		}
	}
	
</style>
