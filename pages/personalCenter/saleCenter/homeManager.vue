<template>
	<view class="pb60">
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column">
				<view class="title">企业名称</view>
				<input class="uni-input" text name="nickname" placeholder="请输入公司名称" v-model="ManagerForm.company_name" />
			</view>
			<textarea value="" placeholder="请输入公司介绍" maxlength="200" v-model="ManagerForm.company_introduce" />
			<view class="uni-form-item uni-column">
				<view class="title">地址</view>
				<input class="uni-input" text name="nickname" placeholder="请输入地址" v-model="ManagerForm.addr" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">联系人</view>
				<input class="uni-input" text name="nickname" placeholder="请输入联系人" v-model="ManagerForm.contact_name" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">联系电话</view>
				<input class="uni-input" number name="nickname" placeholder="请输入联系电话" v-model="ManagerForm.contact_phone" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">邮箱</view>
				<input class="uni-input" text name="nickname" placeholder="请输入邮箱" v-model="ManagerForm.email" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">微信</view>
				<input class="uni-input" number name="nickname" placeholder="请输入微信" v-model="ManagerForm.wechat" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">QQ</view>
				<input class="uni-input" number name="nickname" placeholder="请输入QQ" v-model="ManagerForm.qq" />
			</view>
			<!-- 上传图片 -->
			<view class="upload-aa">
				<view class="upload-item">
					<u-upload
						:custom-btn="customBtn"
						:show-upload-list="showUploadList"
						:action="action"
						:auto-upload="autoUpload"
						:file-list="logoImg"
						:show-progress="showProgress"
						:deletable="deletable"
						max-count="1"
						width="145"
						uploadText=""
						name="image"
						@on-progress="uploadHandler(arguments, 'onProgress', 'company_logo')"
						@on-success="uploadHandler(arguments, 'onSuccess', 'company_logo')"
						@on-error="uploadHandler(arguments, 'onError', 'company_logo')"
						@on-change="uploadHandler(arguments, 'onChange', 'company_logo')"
						@on-remove="uploadHandler(arguments, 'onRemove', 'company_logo')"
					>
						<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
						</view>
					</u-upload>
					<view>公司logo</view>
				</view>
				<view class="upload-item">
					<u-upload
						:custom-btn="customBtn"
						:show-upload-list="showUploadList"
						:action="action"
						:auto-upload="autoUpload"
						:file-list="companyImg"
						:show-progress="showProgress"
						:deletable="deletable"
						max-count="1"
						width="145"
						uploadText=""
						name="image"
						@on-progress="uploadHandler(arguments, 'onProgress', 'company_images')"
						@on-success="uploadHandler(arguments, 'onSuccess', 'company_images')"
						@on-error="uploadHandler(arguments, 'onError', 'company_images')"
						@on-change="uploadHandler(arguments, 'onChange', 'company_images')"
						@on-remove="uploadHandler(arguments, 'onRemove', 'company_images')"
					>
						<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
						</view>
					</u-upload>
					<view>公司图片</view>
				</view>
			</view>
			<view class="upload-aa">
				<view class="upload-item">
					<u-upload
						:custom-btn="customBtn"
						:show-upload-list="showUploadList"
						:action="action"
						:auto-upload="autoUpload"
						:file-list="transparencyImg"
						:show-progress="showProgress"
						:deletable="deletable"
						max-count="1"
						width="145"
						uploadText=""
						name="image"
						@on-progress="uploadHandler(arguments, 'onProgress', 'company_transparency')"
						@on-success="uploadHandler(arguments, 'onSuccess', 'company_transparency')"
						@on-error="uploadHandler(arguments, 'onError', 'company_transparency')"
						@on-change="uploadHandler(arguments, 'onChange', 'company_transparency')"
						@on-remove="uploadHandler(arguments, 'onRemove', 'company_transparency')"
					>
						<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
						</view>
					</u-upload>
					<view>幻灯片1</view>
				</view>
				<view class="upload-item">
					<u-upload
						:custom-btn="customBtn"
						:show-upload-list="showUploadList"
						:action="action"
						:auto-upload="autoUpload"
						:file-list="transparencyImg2"
						:show-progress="showProgress"
						:deletable="deletable"
						max-count="1"
						width="145"
						uploadText=""
						name="image"
						@on-progress="uploadHandler(arguments, 'onProgress', 'company_transparency')"
						@on-success="uploadHandler(arguments, 'onSuccess', 'company_transparency')"
						@on-error="uploadHandler(arguments, 'onError', 'company_transparency')"
						@on-change="uploadHandler(arguments, 'onChange', 'company_transparency')"
						@on-remove="uploadHandler(arguments, 'onRemove', 'company_transparency')"
					>
						<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
						</view>
					</u-upload>
					<view>幻灯片2</view>
				</view>
				<view class="upload-item">
					<u-upload
						:custom-btn="customBtn"
						:show-upload-list="showUploadList"
						:action="action"
						:auto-upload="autoUpload"
						:file-list="transparencyImg3"
						:show-progress="showProgress"
						:deletable="deletable"
						max-count="1"
						width="145"
						uploadText=""
						name="image"
						@on-progress="uploadHandler(arguments, 'onProgress', 'company_transparency')"
						@on-success="uploadHandler(arguments, 'onSuccess', 'company_transparency')"
						@on-error="uploadHandler(arguments, 'onError', 'company_transparency')"
						@on-change="uploadHandler(arguments, 'onChange', 'company_transparency')"
						@on-remove="uploadHandler(arguments, 'onRemove', 'company_transparency')"
					>
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
						<u-upload
							:custom-btn="customBtn"
							:show-upload-list="showUploadList"
							:action="action"
							:auto-upload="autoUpload"
							:file-list="qualificationsImg"
							:show-progress="showProgress"
							:deletable="deletable"
							max-count="1"
							width="145"
							uploadText=""
							name="image"
							@on-progress="uploadHandler(arguments, 'onProgress', 'qualifications')"
							@on-success="uploadHandler(arguments, 'onSuccess', 'qualifications')"
							@on-error="uploadHandler(arguments, 'onError', 'qualifications')"
							@on-change="uploadHandler(arguments, 'onChange', 'qualifications')"
							@on-remove="uploadHandler(arguments, 'onRemove', 'qualifications')"
						>
							<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
								<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
							</view>
						</u-upload>
						<view>公司资质</view>
					</view>
					<view class="upload-item">
						<u-upload
							:custom-btn="customBtn"
							:show-upload-list="showUploadList"
							:action="action"
							:auto-upload="autoUpload"
							:file-list="qualificationsImg1"
							:show-progress="showProgress"
							:deletable="deletable"
							max-count="1"
							width="145"
							uploadText=""
							name="image"
							@on-progress="uploadHandler(arguments, 'onProgress', 'qualifications')"
							@on-success="uploadHandler(arguments, 'onSuccess', 'qualifications')"
							@on-error="uploadHandler(arguments, 'onError', 'qualifications')"
							@on-change="uploadHandler(arguments, 'onChange', 'qualifications')"
							@on-remove="uploadHandler(arguments, 'onRemove', 'qualifications')"
						>
							<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
								<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
							</view>
						</u-upload>
						<view>公司资质</view>
					</view>
					<view class="upload-item">
						<u-upload
							:custom-btn="customBtn"
							:show-upload-list="showUploadList"
							:action="action"
							:auto-upload="autoUpload"
							:file-list="qualificationsImg2"
							:show-progress="showProgress"
							:deletable="deletable"
							max-count="1"
							width="145"
							uploadText=""
							name="image"
							@on-progress="uploadHandler(arguments, 'onProgress', 'qualifications')"
							@on-success="uploadHandler(arguments, 'onSuccess', 'qualifications')"
							@on-error="uploadHandler(arguments, 'onError', 'qualifications')"
							@on-change="uploadHandler(arguments, 'onChange', 'qualifications')"
							@on-remove="uploadHandler(arguments, 'onRemove', 'qualifications')"
						>
							<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
								<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
							</view>
						</u-upload>
						<view>公司资质</view>
					</view>
					<view class="upload-item">
						<u-upload
							:custom-btn="customBtn"
							:show-upload-list="showUploadList"
							:action="action"
							:auto-upload="autoUpload"
							:file-list="qualificationsImg3"
							:show-progress="showProgress"
							:deletable="deletable"
							max-count="1"
							width="145"
							uploadText=""
							name="image"
							@on-progress="uploadHandler(arguments, 'onProgress', 'qualifications')"
							@on-success="uploadHandler(arguments, 'onSuccess', 'qualifications')"
							@on-error="uploadHandler(arguments, 'onError', 'qualifications')"
							@on-change="uploadHandler(arguments, 'onChange', 'qualifications')"
							@on-remove="uploadHandler(arguments, 'onRemove', 'qualifications')"
						>
							<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
								<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
							</view>
						</u-upload>
						<view>公司资质</view>
					</view>
				</view>
			</view>
			<view class="common-btn"><button form-type="submit">提交</button></view>
		</form>
	</view>
</template>

<script>
// var graceChecker = require("../../../utils/graceChecker.js");
import interfaces from '@/utils/interfaces.js';
import uUpload from '@/components/u-upload/u-upload';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['hasLogin', 'uerInfo']),
	comments: {
		uUpload
	},
	data() {
		return {
			uploadState: {
				COMPLETE: 0,
				UNFINISHED: 1,
				SUCCESS: 2,
				ERROR: 3,
				files: {}
			},
			action: interfaces.getUploadData,
			// 预置上传列表
			fileList: [], //保存上传完毕的文件，用于组件多文件上传时，如果是多个上传组件则每个组件应独占一个fileList
			logoImg:[],//公司logo
			companyImg:[],//公司图片
			transparencyImg:[],//幻灯片1
			transparencyImg2:[],//幻灯片1
			transparencyImg3:[],//幻灯片1
			qualificationsImg:[],//资质1
			qualificationsImg1:[],//资质2
			qualificationsImg2:[],//资质3
			qualificationsImg3:[],//资质4
			showUploadList: true,
			customBtn: false,
			autoUpload: true, //选择图片后自动开始上传
			showProgress: true,
			deletable: true,
			customStyle: false,
			maxCount: 1,
			lists: [], // 组件内部的文件列表
			imgurl: [],
			// 请求获取的数据
			getManagerdataList: {},
			imglist: [],
			// 请求参数
			ManagerForm: {
				company_logo: '',
				company_name: '', //公司名称
				company_images: '', //公司图片
				company_transparency: '', //	公司幻灯片
				company_introduce: '', //公司介绍
				qualifications: '', //资质
				addr: '', //	地址
				contact_name: '', //联系人
				contact_phone: '', //联系电话
				qq: '', //qq
				wechat: '', //微信
				email: '' //邮箱
			},
			userid: ''
		};
	},
	methods: {
		getinfoData() {
			this.request({
				url: interfaces.getEnterpriseData,
				dataType: 'JSON',
				method: 'POST', //请求方式
				data: {
					data: {
						user_id: this.userid
					}
				},
				success: res => {
					console.log(res, 235);
					if (res.code == 200) {
						var list = res.data.profiles.user_company
						this.ManagerForm.company_name = list.company_name
						this.ManagerForm.addr = list.addr
						this.ManagerForm.contact_name = list.contact_name
						this.ManagerForm.contact_phone = list.contact_phone
						this.ManagerForm.qq = list.qq
						this.ManagerForm.wechat = list.wechat
						this.ManagerForm.email = list.email
						this.ManagerForm.company_introduce = list.company_introduce
						
						let logo = {url:list.company_logo}
						this.logoImg.push(logo)//公司logo
						this.ManagerForm.company_logo = list.company_logo
						
						let company = {url:list.company_images}
						this.companyImg.push(company)//公司图片
						this.ManagerForm.company_images = list.company_images
						
						let transparency=list.company_transparency;
						let transparencyArr=transparency !=null && transparency.length?transparency.split(','):''
						// console.log(infoArr[0]);
						this.transparencyImg.push({url: transparencyArr[0]})//幻灯片1
						this.transparencyImg2.push({url: transparencyArr[1]})//幻灯片2
						this.transparencyImg3.push({url: transparencyArr[2]})//幻灯片3
						this.ManagerForm.company_transparency = transparency
						
						let qualifications=list.qualifications;
						let qualificationsArr=qualifications !=null && qualifications.length?qualifications.split(','):''
						// console.log(infoArr[0]);
						this.qualificationsImg.push({url: qualificationsArr[0]})//资质1
						this.qualificationsImg1.push({url: qualificationsArr[1]})//资质2
						this.qualificationsImg2.push({url: qualificationsArr[2]})//资质3
						this.qualificationsImg3.push({url: qualificationsArr[3]})//资质4
						this.ManagerForm.qualifications = qualifications
					}
				}
			});
		},
		checkUploadFiles() {
			let finished = true;
			let uploadState = this.uploadState;
			let files = this.uploadState.files;

			for (let fieldName in files) {
				if (files[fieldName] == uploadState.UNFINISHED || files[fieldName] == uploadState.EEROR) {
					//存在未上传成功或未上传完毕的图片，策略后继可以按需求修改
					finished = false;
					break;
				}
			}

			return finished;
		},
		uploadHandler(args, handlerName, fieldName) {
			let argsMerge = [];
			for (let i = 0; i < args.length; i++) {
				argsMerge.push(args[i]);
			}
			argsMerge.push(fieldName);

			this[handlerName].apply(this, argsMerge);
		},
		onProgress(res, index, lists, fieldName) {
			// console.log('onProgress', res, index, lists, fieldName);

			this.uploadState.files[fieldName] = this.uploadState.UNFINISHED;
		},
		onSuccess(res, index, lists, fieldName) {
			//fieldName 服务器接收该图片的字段名
			// console.log('onSuccess', res, index, lists, fieldName);
			res = JSON.parse(res);

			this.uploadState.files[fieldName] = this.uploadState.SUCCESS;

			//保存已上传完的文件，用于单个上传组件多图上传时，不同的上传组件应使用不同的数组保存
			//this.fileList.push({url:res.data.img_url});

			//this.ManagerForm[fieldName] = res.data.img_url;
			// console.log(fieldName, res.data.img_url);
			//console.log('this.ManagerForm[fieldName]>>>',this.ManagerForm[fieldName]);

			//定义一个数组
			//var  imglist=[];
			// this.imglist[fieldName]=[];
			// this.ManagerForm[fieldName] = res.data.img_url;
			// imglist[fieldName]=res.data.img_url;
			//console.log(this.imglist[fieldName]);
			if (!this.imglist[fieldName]) {
				this.imglist[fieldName] = new Array(res.data.img_url);
			} else {
				this.imglist[fieldName].push(res.data.img_url);
			}
			this.ManagerForm[fieldName] = this.imglist[fieldName].join(',');
			//console.log(this.ManagerForm[fieldName]);
			// console.log(res.data.img_url);
			//console.log(this.imglist[fieldName]);
			//console.log(this.uploadState.files[fieldName]);
			//console.log('this.ManagerForm[fieldName]>>>',this.ManagerForm[fieldName]);
		},
		onChange(res, index, lists, fieldName) {
			// console.log('onChange ', res, index, lists, fieldName);
			this.uploadState.files[fieldName] = this.uploadState.COMPLETE;
		},
		onError(err, index, lists, fieldName) {
			// console.log('onError ', err, index, lists, fieldName);
			this.uploadState.files[fieldName] = this.uploadState.EEROR;
		},
		onRemove(index, lists, fieldName) {
			// console.log('onRemove ', index, lists, fieldName);
			this.uploadState.files[fieldName] = undefined;
			this.ManagerForm[fieldName] = '';
		},
		formSubmit: function(e) {
			if (!this.checkUploadFiles()) {
				uni.showToast({
					title: '文件未上传完毕',
					icon: 'none'
				});
				// console.log('文件未上传完毕', this.uploadState.files);
				return false;
			}

			// console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value), 666)
			//定义表单规则
			// var rule = [{
			// 	name: "nickname",
			// 	checkType: "string",
			// 	// checkRule: "1,3",
			// 	errorMsg: "请输入正确的信息"
			// }, ];
			// //进行表单检查
			// var formData = e.detail.value;
			// // var checkRes = graceChecker.check(formData, rule);
			// if (checkRes) {
			// 	uni.showToast({
			// 		title: "验证通过!",
			// 		icon: "none"
			// 	});
			this.request({
				url: interfaces.getManagerData,
				dataType: 'JSON',
				method: 'POST', //请求方式
				data: {
					data: {
						company_logo: this.ManagerForm.company_logo,
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
						email: this.ManagerForm.email
					}
				},
				success: res => {
					// console.log(res, 656);
					if (res.code !== 200) {
						uni.showToast({
							title: res.message,
							icon: 'none'
						});
						return;
					} else {
						uni.showToast({
							title: '提交成功',
							duration: 2000
						});
						setTimeout(function(){ 
							uni.navigateTo({
							url: '/pages/personalCenter/accountCenter/myAccount'
						}); 
						}, 3000);
					}
				}
			});
		},
		// else {
		// 	uni.showToast({
		// 		title: graceChecker.error,
		// 		icon: "none"
		// 	});
		// }

		// },
		// formReset: function(e) {
		// 	console.log('清空数据')
		// }


	},
	onLoad() {
		this.userid = this.uerInfo.user_Id, 
		console.log(this.userid);
		this.getinfoData();
	}
};
</script>

<style lang="scss">
textarea {
	width: 100%;
	height: 217.39rpx;
	background-color: #ffffff;
	font-size: 25.36rpx;
	box-sizing: border-box;
	padding: 18.11rpx;
	margin-bottom: 18.11rpx;
	padding-left: 39.85rpx;
}
.upload-aa {
	display: flex;
	justify-content: left;
	background-color: #ffffff;
	padding: 27.17rpx 36.23rpx;
	margin: 18.11rpx 0;
	font-size: 21.73rpx;
}

.upload-dd {
	background-color: #ffffff;
}
.upload-cc {
	padding: 36.23rpx 0 0 47.1rpx;
	font-size: 25.36rpx;
}
</style>
