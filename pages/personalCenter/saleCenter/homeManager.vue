<template>
	<view class="pb60">
		<form @submit="formSubmit" @reset="formReset">
		<view class="uni-form-item uni-column">
			<view class="title">企业名称</view>
			<input class="uni-input" text name="nickname" placeholder="请输入公司名称" v-model="ManagerForm.company_name"/>
		</view>
		<textarea value="" placeholder="请输入公司介绍" maxlength="200" v-model="ManagerForm.company_introduce"/>
		<view class="uni-form-item uni-column">
			<view class="title">邮箱地址</view>
			<input class="uni-input" text name="nickname" value="11059845575@qq.com" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">联系人</view>
			<input class="uni-input" text name="nickname" placeholder="请输入联系人" v-model="ManagerForm.contact_name" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">联系电话</view>
			<input class="uni-input" number name="nickname" value="18525464251" v-model="ManagerForm.contact_phone"/>
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">邮箱</view>
			<input class="uni-input" text name="nickname" placeholder="请输入邮箱" v-model="ManagerForm.email"/>
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">微信</view>
			<input class="uni-input" number name="nickname" value="请输入微信" v-model="ManagerForm.wechat"/>
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">QQ</view>
			<input class="uni-input" number name="nickname" placeholder="请输入QQ" v-model="ManagerForm.qq"/>
		</view>
		<!-- 上传图片 -->
		<view class="upload-aa">
			<view class="upload-item">
				<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
				 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
				 @on-list-change="onListChange">
					<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
					</view>
				</u-upload>
				<view>公司logo</view>
			</view>
		<view class="upload-item">
		
			<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
			 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
			 @on-list-change="onListChange">
				<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
					<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
				</view>
		
			</u-upload>
			<view>幻灯片1</view>
		</view>
		<view class="upload-item">
		
			<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
			 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
			 @on-list-change="onListChange">
				<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
					<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
				</view>
		
			</u-upload>
			<view>幻灯片2</view>
		</view>
		<view class="upload-item">
		
			<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
			 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
			 @on-list-change="onListChange">
				<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
					<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
				</view>
			</u-upload>
			<view>幻灯片3</view>
		</view>
		</view>
		<view class="upload-dd">
			<view class="upload-cc">上传公司资质</view>
		<view class="upload-aa">
			<view class="upload-item">
				<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
				 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
				 @on-list-change="onListChange" >
					<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
					</view>
				</u-upload>
				<view>公司资质</view>
			</view>
		<view class="upload-item">
			<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
			 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
			 @on-list-change="onListChange">
				<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
					<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
				</view>
		
			</u-upload>
			<view>公司资质</view>
		</view>
		<view class="upload-item">
			<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
			 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
			 @on-list-change="onListChange">
				<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
					<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
				</view>
			</u-upload>
			<view>公司资质</view>
		</view>
		<view class="upload-item">
			<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
			 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
			 @on-list-change="onListChange">
				<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
					<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
				</view>
			</u-upload>
			<view>公司资质</view>
		</view>
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
	import interfaces from '@/utils/interfaces.js'
	import uUpload from '@/components/u-upload/u-upload'
	export default {
		comments:{
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
				maxCount: 1,
				lists: [], // 组件内部的文件列表
				imgurl: [],
				// 请求获取的数据
				getManagerdataList:{},
				// 请求参数
				ManagerForm: {
					company_name:'',//公司名称
					company_images:'',//公司图片
					company_transparency:'',//	公司幻灯片
					company_introduce:'',//公司介绍
					qualifications:'',//资质
					addr:'',//	地址
					contact_name:'',//联系人
					contact_phone:'',//联系电话
					qq:'',//qq
					wechat:'',//微信
					email:'',//邮箱
				}
			};
		},
		methods: {
			onListChange(lists) {
				this.lists = lists;
				console.log(lists,555);
			},
			formSubmit: function(e) {
				// console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value), 666)
				//定义表单规则
				// var rule = [{
				// 	name: "nickname",
				// 	checkType: "string",
				// 	// checkRule: "1,3",
				// 	errorMsg: "请输入内容"
				// }, ];
				// //进行表单检查
				// var formData = e.detail.value;
				// var checkRes = graceChecker.check(formData, rule);
				// if (checkRes) {
				// 	uni.showToast({
				// 		title: "验证通过!",
				// 		icon: "none"
				// 	});
					this.request({
						url: interfaces.getManagerData,
						dataType: "JSON",
						method: 'POST', //请求方式
						data: {
								company_name: this.ManagerForm.company_name,
								company_images: this.ManagerForm.company_images,
								company_transparency: this.ManagerForm.company_transparency,
								company_introduce: this.ManagerForm.company_introduce,
								qualifications: this.ManagerForm.qualifications,
								addr: this.ManagerForm.addr,
								contact_name: this.ManagerForm.contact_name,
								contact_phone: this.ManagerForm.contact_phone,
								qq: this.ManagerForm.qq,
								wechat: this.ManagerForm.wechat,
								email: this.ManagerForm.email,
						},
						success: ((res) => {
							console.log(res,333);
							if (res.code !== 200) {
								uni.showToast({
									title: res.message,
									icon: "none"
								});
								return;
							}
						})
					})
				// } else {
				// 	uni.showToast({
				// 		title: graceChecker.error,
				// 		icon: "none"
				// 	});
				// }
				
			},
			formReset: function(e) {
				console.log('清空数据')
			},
			
		},
	
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
		.upload-aa{
			display: flex;
			justify-content: space-around;
			background-color: #FFFFFF;
			padding: 27.17rpx 36.23rpx;
			margin: 18.11rpx 0;
			font-size: 21.73rpx;
		}
		
		.upload-dd{
			background-color: #FFFFFF;
		}
		.upload-cc{
		padding: 36.23rpx 0 0 47.1rpx;
		font-size: 25.36rpx;
		}
		
</style>
