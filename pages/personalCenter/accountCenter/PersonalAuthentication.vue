<template>
	<view>
		<view class="uni-form-item">
			<view class="title">姓名</view>
			<input class="uni-input" text name="nickname" value="张小姐" />
		</view>
		<view class="uni-form-item mb10">
			<view class="title">身份证号</view>
			<input class="uni-input" number name="nickname" value="410221155885888888888" />
		</view>
		<!--上传图片-->
		<view class="uni-form-item upload-item">
			<cl-card>
				<cl-upload v-model="upload.url1" :size='["181.15rpx","181.15rpx"]'></cl-upload>
				<view>上传手持身份证</view>
			</cl-card>
			<cl-card>
				<cl-upload v-model="upload.url2" :size='["181.15rpx","181.15rpx"]'></cl-upload>
				<view>身份证正面</view>
			</cl-card>
			<cl-card>
				<cl-upload v-model="upload.url3" :size='["181.15rpx","181.15rpx"]'></cl-upload>
				<view>身份证正面</view>
			</cl-card>
		</view>
		<view class="common-btn">
			<button>立即认证</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				upload: {
					url1: '',
					url2: '',
					url3: '',
				}
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
