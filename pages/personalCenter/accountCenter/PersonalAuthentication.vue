<template>
	<view class="pb60">
		<view class="uni-form-item">
			<view class="title">姓名</view>
			<input class="uni-input" text name="nickname" value="张小姐" />
		</view>
		<view class="uni-form-item mb10">
			<view class="title">身份证号</view>
			<input class="uni-input" number name="nickname" value="410221155885888888888" />
		</view>
		<!--上传图片-->
		<view class="uni-form-item uoload-wrap">
			<view class="upload-item">
				<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
				 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" :max-count="maxCount" width="180"
				 @on-list-change="onListChange">
					<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
					</view>

				</u-upload>
				<view>上传手持身份证</view>
			</view>
			<view class="upload-item">
				
				<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
				 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="180"
				 @on-list-change="onListChange">
					<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
					</view>

				</u-upload>
				<view>身份证正面</view>
			</view>
			<view class="upload-item">
				<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
				 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="180"
				 @on-list-change="onListChange">
					<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
					</view>
				</u-upload>
				<view>身份证反面</view>
			</view>
		</view>
		<view class="common-btn" @tap="confirm">
			<button>立即认证</button>
		</view>
	</view>
</template>

<script>
	import uUpload from '@/components/u-upload/u-upload'
	import interfaces from '@/utils/interfaces.js'
	export default {
		components: {
			uUpload
		},
		data() {
			return {
				action: 'http://192.168.100.17/index.php/index/index/upload',
				// 预置上传列表
				fileList: [],
				showUploadList: true,
				customBtn: false,
				autoUpload: false,
				showProgress: true,
				deletable: true,
				customStyle: false,
				maxCount:1,
				lists: [], // 组件内部的文件列表
				imgurl:[],
			}
		},
		methods: {

			onListChange(lists) {
				//console.log('onListChange', lists);
				this.lists = lists;
				this.imgurl.push(this.lists[0].url);

			},
			confirm(){
				uni.request({
					url: interfaces.getPersonData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data:{
						scene:'identify_person',
						}
					},
					success: ((res) => {
						console.log(res);
					})
				})
			}
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
