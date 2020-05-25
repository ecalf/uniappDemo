<template>
	<view class="pb60">
		<view class="uni-form-item uni-column">
			<view class="title">联系人</view>
			<input class="uni-input" name="nickname" placeholder="请输入联系人" v-model="Corporateform.contact_name" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">联系人电话</view>
			<input class="uni-input" name="nickname" placeholder="请输入联系人电话"  v-model="Corporateform.contact_phone"/>
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">开户银行</view>
			<input class="uni-input" name="nickname" placeholder="请输入开户银行" v-model="Corporateform.bank_name" />
		</view>
		<view class="uni-form-item uni-column uni-cc">
			<view class="title">银行卡号</view>
			<input class="uni-input" name="nickname" placeholder="请输入银行卡号" v-model="Corporateform.bank_account" />
		</view>
		<view class="uni-form-item uni-column ">
			<view class="title">企业名称</view>
			<input class="uni-input" name="nickname" placeholder="请输入企业名称" v-model="Corporateform.company_name" />
		</view>
		<view class="uni-form-item">
			<view class="title">选择国家</view>
			<view class="uni-input">
				<radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in countryList" :key="index">
						<radio :value="item.value" :checked="index === current" color="#44a78d" style="transform:scale(0.7)" />{{item.name}}
					</label>
				</radio-group>
			</view>
		</view>
		<view class="uni-form-item uni-column ">
			<view class="title">经营范围</view>
			<input class="uni-input" name="nickname" placeholder="请输入经营范围" v-model="Corporateform.business_scope_cate"/>
		</view>
		<view class="uni-form-item uni-column ">
			<view class="title">纳税人识别号</view>
			<input class="uni-input" name="nickname" placeholder="请输入识别号" v-model="Corporateform.business_license_code" />
		</view>
		<view class="uni-form-item uni-column ">
			<view class="title">负责人姓名</view>
			<input class="uni-input" name="nickname" placeholder="请输入负责人姓名" v-model="Corporateform.legal_person" />
		</view>
		<view class="uni-form-item uni-column ">
			<view class="title">负责人电话</view>
			<input class="uni-input" name="nickname" placeholder="请输入负责人电话" />
		</view>
		<view class="uni-form-item uni-column ">
			<view class="title">负责人身份证号</view>
			<input class="uni-input" name="nickname" placeholder="请输入身份证号" v-model="Corporateform.legal_person_cardno" />
		</view>
		<view class="uni-form-item uni-column uni-cc">
			<view class="title">所属行业</view>
			<input class="uni-input" name="nickname" placeholder="请输入所属行业" v-model="Corporateform.industry"/>
		</view>
		<!--上传图片-->
		<view class="uni-form-item uoload-wrap">
		<view class="upload-item">
			<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
			 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
			 uploadText=""
			 name="image"
			 @on-progress="uploadHandler(arguments,'onProgress','business_license')"
			 @on-success="uploadHandler(arguments,'onSuccess','business_license')"
			 @on-error="uploadHandler(arguments,'onError','business_license')"
			 @on-change="uploadHandler(arguments,'onChange','business_license')"
			 @on-remove="uploadHandler(arguments,'onRemove','business_license')"
			 >
				<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
					<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
				</view>
		
			</u-upload>
			<view>营业执照</view>
		</view>
			<view class="upload-item">
				<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
				 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
				 uploadText=""
				 name="image"
				 @on-progress="uploadHandler(arguments,'onProgress','legal_identify_card_photo_font')"
				 @on-success="uploadHandler(arguments,'onSuccess','legal_identify_card_photo_font')"
				 @on-error="uploadHandler(arguments,'onError','legal_identify_card_photo_font')"
				 @on-change="uploadHandler(arguments,'onChange','legal_identify_card_photo_font')"
				 @on-remove="uploadHandler(arguments,'onRemove','legal_identify_card_photo_font')">
					<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
					</view>

				</u-upload>
				<view>身份证正面</view>
			</view>
			<view class="upload-item">
				<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
				 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
				 uploadText=""
				 name="image"
				 @on-progress="uploadHandler(arguments,'onProgress','legal_identify_card_photo_back')"
				 @on-success="uploadHandler(arguments,'onSuccess','legal_identify_card_photo_back')"
				 @on-error="uploadHandler(arguments,'onError','legal_identify_card_photo_back')"
				 @on-change="uploadHandler(arguments,'onChange','legal_identify_card_photo_back')"
				 @on-remove="uploadHandler(arguments,'onRemove','legal_identify_card_photo_back')">
					<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
					</view>
				</u-upload>
				<view>身份证反面</view>
			</view>
			<view class="upload-item">
				<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
				 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" max-count="1" width="145"
				 uploadText=""
				 name="image"
				 @on-progress="uploadHandler(arguments,'onProgress','hand_identify_card_photo')"
				 @on-success="uploadHandler(arguments,'onSuccess','hand_identify_card_photo')"
				 @on-error="uploadHandler(arguments,'onError','hand_identify_card_photo')"
				 @on-change="uploadHandler(arguments,'onChange','hand_identify_card_photo')"
				 @on-remove="uploadHandler(arguments,'onRemove','hand_identify_card_photo')">
					<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
					</view>
				</u-upload>
				<view>手持身份证</view>
			</view>
		</view>
		<view class="common-btn" @tap="confirm">
			<button>立即认证</button>
		</view>
	</view>
</template>
<script>
	import interfaces from '@/utils/interfaces.js'
	import uUpload from '@/components/u-upload/u-upload'
	// var graceChecker = require("../../../utils/graceChecker.js");
	export default {
		comments: {
			uUpload
		},
		data() {
			return {
				current: 0, //选择经营模式
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
				showUploadList: true,
				customBtn: false,
				autoUpload: true, //选择图片后自动开始上传
				showProgress: true,
				deletable: true,
				customStyle: false,
				maxCount: 1,
				lists: [], // 组件内部的文件列表
				imgurl: [],
				CorporateformList: {}, //请求数据
				Corporateform: {
					scene: 'identify_company', //认证场景 
					contact_name: '', //联系人
					contact_phone: '', //联系人电话
					bank_name: '', //开户银行
					bank_account: '', //银行卡号
					full_name: '', //银行账户姓名
					company_name: '', //企业名称
					business_license: '', //营业执照照片
					business_license_code: '', //营业执照编号
					business_scope_cate: '', //经营范围
					company_form: '', //经营模式 绑定 单选框 代理和工厂
					hand_identify_card_photo: '', //负责人手持证件照
					legal_identify_card_photo_font: '', //身份证正面
					legal_identify_card_photo_back: '', //身份证背面
					legal_person: '', //负责人姓名
					legal_person_cardno: '', //负责人身份证号码
					industry:''//所属行业
					},
				countryList: [{
						value: 'proxy',
						name: '代理',
					},
					{
						value: 'works',
						name: '工厂',
					},
					]
				};
			},
			methods: {
				radioChange: function(evt) { //选择经营模式
					for (let i = 0; i < this.countryList.length; i++) {
						if (this.countryList[i].value === evt.target.value) {
							this.current = i;
							//this.registerForm.country = evt.target.value; //获取经营模式
							break;
						}
				
					}
					this.Corporateform.company_form = evt.target.value; //获取经营模式
					// console.log(this.this.Corporateform.company_form,6554)
					
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
					console.log('onProgress', res, index, lists, fieldName);
					this.uploadState.files[fieldName] = this.uploadState.UNFINISHED;
				},
				onSuccess(res, index, lists, fieldName) { //fieldName 服务器接收该图片的字段名
					console.log('onSuccess', res, index, lists, fieldName);
					res = JSON.parse(res);
					this.uploadState.files[fieldName] = this.uploadState.SUCCESS;
					//保存已上传完的文件，用于单个上传组件多图上传时，不同的上传组件应使用不同的数组保存
					//this.fileList.push({url:res.data.img_url});
					this.Corporateform[fieldName] = res.data.img_url;
					console.log('this.Corporateform[fieldName]>>>', this.Corporateform[fieldName]);
				},
				onChange(res, index, lists, fieldName) {
					console.log('onChange ', res, index, lists, fieldName);
					this.uploadState.files[fieldName] = this.uploadState.COMPLETE;
				},
				onError(err, index, lists, fieldName) {
					console.log('onError ', err, index, lists, fieldName);
					this.uploadState.files[fieldName] = this.uploadState.EEROR;
				},
				onRemove(index, lists, fieldName) {
					console.log('onRemove ', index, lists, fieldName);
					this.uploadState.files[fieldName] = undefined;
					this.Corporateform[fieldName] = '';

				},
				onListChange(lists) {},
				confirm() {
						// 定义表单规则
						// var rule = [{
						// 	name: "nickname",
						// 	checkType: "string",
						// 	// checkRule: "1,3",
						// 	errorMsg: "请输入正确的信息"
						// }, ];
						// //进行表单检查
						// var formData = e.detail.value;
						// var checkRes = graceChecker.check(formData, rule);
						// if (checkRes) {
						// if(!this.checkUploadFiles()){
						// 	uni.showToast({
						// 		title: '文件未上传完毕',
						// 		icon: "none"
						// 	});
						// 	console.log('文件未上传完毕',this.uploadState.files);
						// 	return false;
						// }
					this.request({
						url: interfaces.getPersonData,
						dataType: "JSON",
						method: 'POST', //请求方式
						data: {
							data: {
								scene: this.Corporateform.scene,
								company:{
									contact_name: this.Corporateform.contact_name,
									contact_phone: this.Corporateform.contact_phone,
									company_name: this.Corporateform.company_name,
									hand_identify_card_photo: this.Corporateform.hand_identify_card_photo,
									business_scope_cate:this.Corporateform.business_scope_cate,
									business_license: this.Corporateform.business_license,
									business_license_code: this.Corporateform.business_license_code,
									company_form: this.Corporateform.company_form,
									legal_person: this.Corporateform.legal_person,
									legal_person_cardno: this.Corporateform.legal_person_cardno,
									legal_identify_card_photo_font: this.Corporateform.legal_identify_card_photo_font,
									legal_identify_card_photo_back: this.Corporateform.legal_identify_card_photo_back,
									industry:this.Corporateform.industry
								},
								bank:{
									full_name: this.Corporateform.full_name,
									bank_name: this.Corporateform.bank_name,
									bank_account: this.Corporateform.bank_account,
								}
							}
						},
						success: ((res) => {
							console.log(res, 3333);
							//
							if (res.code !== 200) {
								uni.showToast({
									title: res.message,
									icon: "none"
								});
								return;
							} else {
							uni.showToast({
							    title: '认证成功',
							    duration: 2000
							});
							uni.navigateTo({
							    url: "/pages/personalCenter/accountCenter/CertificateAuthority"
							});
						}
						})
					})

					} 
					// else {
					// 	uni.showToast({
					// 		title: graceChecker.error,
					// 		icon: "none"
					// 	});
					// }
				// },


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
