<template>
	<view>
		<view class="uni-form-item uni-column">
			<view class="title">企业名称</view>
			<input class="uni-input" text name="nickname" placeholder="请输入公司名称" />
		</view>
		<textarea value="" placeholder="请输入公司介绍" maxlength="200" />
		<view class="uni-form-item uni-column">
			<view class="title">邮箱地址</view>
			<input class="uni-input" text name="nickname" value="11059845575@qq.com" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">联系人</view>
			<input class="uni-input" text name="nickname" placeholder="请输入联系人" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">联系电话</view>
			<input class="uni-input" number name="nickname" value="18525464251" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">邮箱</view>
			<input class="uni-input" text name="nickname" placeholder="请输入邮箱" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">微信</view>
			<input class="uni-input" number name="nickname" value="请输入微信" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">QQ</view>
			<input class="uni-input" number name="nickname" placeholder="请输入QQ" />
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
	</view>
</template>

<script>
	var graceChecker = require("../../../utils/graceChecker.js");
	import interfaces from '@/utils/interfaces.js'
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
				// 请求获取的数据
				getManagerdataList:{},
				// 请求参数
				ManagerList: {
					company_name:'',
					company_images:'',
					company_transparency:'',
					company_introduce:'',
					qualifications:'',
					addr:'',
					contact_name:'',
					contact_phone:'',
					qq:'',
					wechat:'',
					email:'',
				}
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
			},
			
			getManager(){
				this.request({
					url: interfaces.getManagerData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							company_name: this.ManagerList.company_name,
							company_images: this.ManagerList.company_images,
							company_transparency: this.ManagerList.company_transparency,
							company_introduce: this.ManagerList.company_introduce,
							qualifications: this.ManagerList.qualifications,
							addr: this.ManagerList.addr,
							contact_name: this.ManagerList.contact_name,
							contact_phone: this.ManagerList.contact_phone,
							qq: this.ManagerList.qq,
							wechat: this.ManagerList.wechat,
							email: this.ManagerList.email,
						}
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
			}
		},
		onLoad(){
			this.getManager()
		}
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
