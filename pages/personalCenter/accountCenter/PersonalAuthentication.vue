<template>
	<view class="pb60">
		<view class="uni-form-item">
			<view class="title">姓名</view>
			<input class="uni-input"  name="nickname" value="张小姐" v-model="personalForm.real_name" />
		</view>
		<view class="uni-form-item mb10">
			<view class="title">身份证号</view>
			<input class="uni-input"  name="nickname" value="410221155885888888888" v-model="personalForm.idcard" />
		</view>
		<!--上传图片-->
		<view class="uni-form-item uoload-wrap">
			<view class="upload-item">
				<u-upload 
				:custom-btn="customBtn" 
				:show-upload-list="showUploadList" 
				:action="action" 
				:auto-upload="autoUpload"
				:file-list="fileList" 
				:show-progress="showProgress" 
				:deletable="deletable" 
				:max-count="maxCount"
				 width="180" 
				 uploadText="" 
				 name="image"
				 @on-progress="uploadHandler(arguments,'onProgress','hand_identify_card_photo')" 
				 @on-success="uploadHandler(arguments,'onSuccess','hand_identify_card_photo')"
				 @on-error="uploadHandler(arguments,'onError','hand_identify_card_photo')" 
				 @on-change="uploadHandler(arguments,'onChange','hand_identify_card_photo')"
				 @on-remove="uploadHandler(arguments,'onRemove','hand_identify_card_photo')"
				 >
					<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
					</view>

				</u-upload>
				<view>上传手持身份证</view>
			</view>
			<view class="upload-item">

				<u-upload
					:custom-btn="customBtn"
					:show-upload-list="showUploadList" 
					:action="action" 
					:auto-upload="autoUpload"
					:file-list="fileList" 
					:show-progress="showProgress" 
					:deletable="deletable" 
					max-count="1" 
					width="180"
					uploadText="" 
					name="image"
					@on-progress="uploadHandler(arguments,'onProgress','identify_card_photo_front')"
					@on-success="uploadHandler(arguments,'onSuccess','identify_card_photo_front')"
					@on-error="uploadHandler(arguments,'onError','identify_card_photo_front')"
					@on-change="uploadHandler(arguments,'onChange','identify_card_photo_front')"
					@on-remove="uploadHandler(arguments,'onRemove','identify_card_photo_front')"
					>
					<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
					</view>

				</u-upload>
				<view>身份证正面</view>
			</view>
			<view class="upload-item">
				<u-upload 
				:custom-btn="customBtn" 
				:show-upload-list="showUploadList" 
				:action="action" 
				:auto-upload="autoUpload"
				:file-list="fileList" 
				:show-progress="showProgress" 
				:deletable="deletable" 
				max-count="1" 
				width="180"
				uploadText="" 
				name="image"
				@on-progress="uploadHandler(arguments,'onProgress','identify_card_photo_back')"
				@on-success="uploadHandler(arguments,'onSuccess','identify_card_photo_back')"
				@on-error="uploadHandler(arguments,'onError','identify_card_photo_back')"
				@on-change="uploadHandler(arguments,'onChange','identify_card_photo_back')"
				@on-remove="uploadHandler(arguments,'onRemove','identify_card_photo_back')"
				>
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
				uploadState:{
					COMPLETE:0,
					UNFINISHED:1,
					SUCCESS:2,
					ERROR:3,
					files:{}
				},
				action: interfaces.getUploadData,
				// 预置上传列表
				fileList: [],//保存上传完毕的文件，用于组件多文件上传时，如果是多个上传组件则每个组件应独占一个fileList
				showUploadList: true,
				customBtn: false,
				autoUpload: true,//选择图片后自动开始上传
				showProgress: true,
				deletable: true,
				customStyle: false,
				maxCount: 1,
				lists: [], // 组件内部的文件列表
				imgurl: [],
				personalForm: {
					scene: 'identify_person', //认证场景 
					real_name: '', //姓名
					idcard: '', //身份证号
					hand_identify_card_photo: '', //手持身份证正面照片
					identify_card_photo_front: '', //手持身份证正面照片
					identify_card_photo_back: '', //手持身份证反面照片
				}
			}
		},
		methods: {
			
			checkUploadFiles(){
				let finished = true;
				let uploadState = this.uploadState;
				let files = this.uploadState.files;
				
				for(let fieldName in files){
					if(files[fieldName]==uploadState.UNFINISHED||files[fieldName]==uploadState.EEROR){
						//存在未上传成功或未上传完毕的图片，策略后继可以按需求修改
						finished = false;
						break;
					}
				}
				return finished;
			},
			uploadHandler(args,handlerName,fieldName){
				let argsMerge = [];
				for(let i=0;i<args.length;i++){
					argsMerge.push(args[i]);
				}
				argsMerge.push(fieldName);
				
				this[handlerName].apply(this,argsMerge);
			},
			onProgress(res,index,lists,fieldName){
				this.uploadState.files[fieldName]=this.uploadState.UNFINISHED;
			},
			onSuccess(res,index,lists,fieldName){//fieldName 服务器接收该图片的字段名
				res =  JSON.parse(res);
				this.uploadState.files[fieldName]=this.uploadState.SUCCESS;
				//保存已上传完的文件，用于单个上传组件多图上传时，不同的上传组件应使用不同的数组保存
				//this.fileList.push({url:res.data.img_url});
				this.personalForm[fieldName] = res.data.img_url;
				// console.log('this.personalForm[fieldName]>>>',this.personalForm[fieldName]);
			},
			onChange(res,index,lists,fieldName){
				this.uploadState.files[fieldName] = this.uploadState.COMPLETE;
			},
			onError(err,index,lists,fieldName){
				this.uploadState.files[fieldName] = this.uploadState.EEROR;
			},
			onRemove(index,lists,fieldName){
				this.uploadState.files[fieldName] = undefined;
				this.personalForm[fieldName] = '';
			},
			confirm() {
				if(!this.checkUploadFiles()){
					uni.showToast({
						title: '文件未上传完毕',
						icon: "none"
					});
					return false;
				}
				this.request({
					url: interfaces.getPersonData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							scene: this.personalForm.scene,
							real_name: this.personalForm.real_name,
							idcard: this.personalForm.idcard,
							hand_identify_card_photo: this.personalForm.hand_identify_card_photo,
							identify_card_photo_front: this.personalForm.identify_card_photo_front,
							identify_card_photo_back: this.personalForm.identify_card_photo_back,
						}
					},
					success: ((res) => {
						console.log(res, 2222);
						if (res.code !== 200) {
							uni.showToast({
								title: res.message,
								icon: "none"
							});
							return;
						} else {
							uni.showToast({
							    title: '认证成功',
							    duration: 1500
							});
							setTimeout(function(){
								uni.navigateTo({
								    url: "/pages/personalCenter/accountCenter/CertificateAuthority"
								});
							}, 2000);
						}
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
