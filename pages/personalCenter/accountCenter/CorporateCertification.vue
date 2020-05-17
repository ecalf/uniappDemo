<template>
	<view class="pb60">
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column">
				<view class="title">企业银行名称</view>
				<input class="uni-input" name="nickname" placeholder="张小姐" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">开户银行</view>
				<input class="uni-input" name="nickname" placeholder="请输入开户行" />
			</view>
			<view class="uni-form-item uni-column uni-cc">
				<view class="title">银行账户</view>
				<input class="uni-input" name="nickname" placeholder="请输入银行账户" />
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">公司名称</view>
				<input class="uni-input" name="nickname" value="张小姐" />
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">纳税人识别号</view>
				<input class="uni-input" name="nickname" placeholder="请输入识别号" />
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">负责人姓名</view>
				<input class="uni-input" name="nickname" placeholder="请输入负责人姓名" />
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">公司类型</view>
				<input class="uni-input" name="nickname" placeholder="请输入公司类型" />
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">公司网址</view>
				<input class="uni-input" name="nickname" placeholder="请输入公司网址" />
			</view>
			<view class="uni-form-item uni-column uni-cc">
				<view class="title">所属行业</view>
				<input class="uni-input" name="nickname" placeholder="请输入所属行业" />
			</view>

			<!--上传图片-->
			<view class="uni-form-item uoload-wrap">
				<view class="upload-item">
					<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
					 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" :max-count="maxCount"
					 width="145" @on-list-change="onListChange">
						<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
						</view>

					</u-upload>
					<view>上传手持身份证</view>
				</view>
				<view class="upload-item">

					<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
					 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
					 @on-list-change="onListChange">
						<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
						</view>

					</u-upload>
					<view>身份证正面</view>
				</view>
				<view class="upload-item">
					<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
					 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
					 @on-list-change="onListChange">
						<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
						</view>
					</u-upload>
					<view>身份证反面</view>
				</view>
				<view class="upload-item">
					<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
					 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
					 @on-list-change="onListChange">
						<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
						</view>
					</u-upload>
					<view>身份证反面</view>
				</view>
			</view>

			<view class="common-btn">
				<button form-type="submit">立即认证</button>
			</view>

		</form>
	</view>
</template>

<script>
	var graceChecker = require("../../../utils/graceChecker.js");
	export default {

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
				maxCount: 1,
				lists: [], // 组件内部的文件列表
				imgurl: [],
			};
		},
		methods: {
			onListChange(lists) {
				
			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value), 666)
				//定义表单规则
				var rule = [{
					name: "nickname",
					checkType: "string",
					// checkRule: "1,3",
					errorMsg: "请输入内容"
				}, ];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if (checkRes) {
					uni.showToast({
						title: "验证通过!",
						icon: "none"
					});
				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		},
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

	.uni-cc {
		margin-bottom: 18.11rpx;

	}
</style>
