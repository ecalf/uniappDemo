<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<block v-if="imageSrc">
				<image :src="imageSrc" class="upload-image" mode="widthFix"></image>
			</block>
			<block v-else>
				<view class="uni-hello-addfile" @click="chooseImage">
					<view class="icon iconfont upload-icon">&#xe613;</view>
					<view>请选择上传主图</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'uploadFile',
				imageSrc: ''
			}
		},
		onUnload() {
			this.imageSrc = '';
		},
		methods: {
			chooseImage: function() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album'],
					success: (res) => {
						console.log('chooseImage success, temp path is', res.tempFilePaths[0])
						var imageSrc = res.tempFilePaths[0]
						uni.uploadFile({
							url: 'https://unidemo.dcloud.net.cn/upload',
							filePath: imageSrc,
							fileType: 'image',
							name: 'data',
							success: (res) => {
								console.log('uploadImage success, res is:', res)
								uni.showToast({
									title: '上传成功',
									icon: 'success',
									duration: 1000
								})
								this.imageSrc = imageSrc
							},
							fail: (err) => {
								console.log('uploadImage fail', err);
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = res.authSetting['scope.album'];
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: 'Hello uni-app需要从您的相册获取图片，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
					}
				})
			}
		}
	}
</script>

<style>
	.image {
		width: 100%;
	}

	.uni-hello-addfile {
		font-size: 21.73rpx;

	}

	.upload-icon {
		font-size: 56px;
		margin-bottom: 18.11rpx;
		color: #8E8E93;
	}

	.upload-image{
		width:543.47rpx;
		height:543.47rpx;
	}
</style>
