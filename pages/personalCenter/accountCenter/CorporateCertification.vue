<template>
	<view class="pb60">
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column">
				<view class="title">联系人姓名</view>
				<input class="uni-input" name="nickname" placeholder="张小姐" v-model="Corporateform.contact_name" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">开户银行</view>
				<cl-select :options="options.bank" class="uni-input" v-model="Corporateform.bank_name"></cl-select>
			</view>
			<view class="uni-form-item uni-column uni-cc">
				<view class="title">银行账户</view>
				<input class="uni-input" name="nickname" placeholder="请输入银行账户" v-model="Corporateform.bank_account" />
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">公司名称</view>
				<input class="uni-input" name="nickname" value="张小姐" v-model="Corporateform.company_name" />
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">纳税人识别号</view>
				<input class="uni-input" name="nickname" placeholder="请输入识别号" v-model="Corporateform.business_license_code" />
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">负责人姓名</view>
				<input class="uni-input" name="nickname" placeholder="请输入负责人姓名" v-model="Corporateform.full_name" />
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">负责人身份证号</view>
				<input class="uni-input" name="nickname" placeholder="请输入身份证号" v-model="Corporateform.legal_person_cardno" />
			</view>
			<view class="uni-form-item uni-column uni-aa ">
				<view class="title">公司类型</view>
				<cl-select v-model="Corporateform.business_scope_cate" :options="options.selectbrand" class="uni-input"></cl-select>
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">公司网址</view>
				<input class="uni-input" name="nickname" placeholder="请输入公司网址" />
			</view>
			<view class="uni-form-item uni-column uni-cc">
				<view class="title">所属行业</view>
				<cl-select v-model="Corporateform.business_scope_cate" :options="options.profession" class="uni-input"></cl-select>
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
					<view>营业执照</view>
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
					 @on-list-change="onListChange" >
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
					<view>手持身份证</view>
				</view>
			</view>

			<view class="common-btn">
				<button form-type="submit">立即认证</button>
			</view>

		</form>
	</view>
</template>

<script>
	import interfaces from '@/utils/interfaces.js'
	import uUpload from '@/components/u-upload/u-upload'
	var graceChecker = require("../../../utils/graceChecker.js");
	export default {
		comments:{
			uUpload
		},
		data() {
			return {
				CorporateformList: {}, //请求数据
				Corporateform: {
					scene: 'identify_person',//认证场景
					idcard: 'identify_person',//身份证号码
					hand_identify_card_photo: 'identify_person',//手持身份证照片
					organization_name: 'identify_person',//机构名称
					contact_name: '',//联系人
					contact_phone: '',//	联系人号码
					company_name: '',//	公司名称
					business_license: '',//	营业执照
					business_license_code: '',//营业执照编号
					official_letter: '',//	公函
					company_form: '',//	企业形式
					bank_name: '',//银行名称
					bank_branch_name: '',//	支行名称
					bank_account: '',//	银行卡号
					full_name: '',//姓名
					legal_person:'',//法人
					legal_person_cardno:'',//法人身份证号
					legal_hand_identify_card_photo_font:'',//法人手持身份证正面照片
					legal_hand_identify_card_photo_back:'',//法人手持身份证反面照片,
				},
				form: {
					selectbrand: 0,
				},
				options: {
					bank: [{
							label: '请选择银行',
							value: 0
						}, {
							label: '工商银行',
							value: 1
						},
						{
							label: '农业银行',
							value: 2
						},
						{
							label: '浦发银行',
							value: 3
						}

					],
					selectbrand: [{
							label: '请选择类型',
							value: 0
						}, {
							label: '贸易公司',
							value: 1
						},
						{
							label: '运输公司',
							value: 2
						},
						{
							label: '金融公司',
							value: 3
						},
						{
							label: '互联网公司',
							value: 4
						}

					],
					profession: [{
							label: '请选择行业',
							value: 0
						}, {
							label: '运输行业',
							value: 1
						},
						{
							label: '金融行业',
							value: 2
						},
						{
							label: '贸易行业',
							value: 3
						},
						{
							label: '教育行业',
							value: 4
						}
					],
				},
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
			onListChange(lists) {},
			formSubmit: function(e) {
			// 	// 定义表单规则
			// 	var rule = [{
			// 		name: "nickname",
			// 		checkType: "string",
			// 		// checkRule: "1,3",
			// 		errorMsg: "请输入正确的信息"
			// 	}, ];
			// 	//进行表单检查
			// 	var formData = e.detail.value;
			// 	var checkRes = graceChecker.check(formData, rule);
			// 	if (checkRes) {
					this.request({
						url: interfaces.getCorporateData,
						dataType: "JSON",
						method: 'POST', //请求方式
						data: {
								scene: this.Corporateform.scene,
								idcard: this.Corporateform.idcard,
								hand_identify_card_photo: this.Corporateform.hand_identify_card_photo,
								organization_name: this.Corporateform.organization_name,
								contact_name: this.Corporateform.contact_name,
								contact_phone: this.Corporateform.contact_phone,
								company_name: this.Corporateform.company_name,
								contact_name: this.Corporateform.contact_name,
								business_license: this.Corporateform.business_license,
								business_license_code: this.Corporateform.business_license_code,
								official_letter: this.Corporateform.official_letter,
								company_form: this.Corporateform.company_form,
								bank_name: this.Corporateform.bank_name,
								bank_branch_name: this.Corporateform.bank_branch_name,
								bank_account: this.Corporateform.bank_account,
								full_name: this.Corporateform.full_name,
								legal_person:this.Corporateform.legal_person,
								legal_person_cardno:this.Corporateform.legal_person_cardno,
								legal_hand_identify_card_photo_font:this.Corporateform.legal_hand_identify_card_photo_font,
								legal_hand_identify_card_photo_back:this.Corporateform.legal_hand_identify_card_photo_back,
							
						},
						success: ((res) => {
							console.log(res,3333);
						})
					})
					
				// } else {
				// 	uni.showToast({
				// 		title: graceChecker.error,
				// 		icon: "none"
				// 	});
				// }
				
			},
			

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
