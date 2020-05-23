<template>
	<view class="pb60">
		<view class="uni-form-item">
			<view class="title">姓名</view>
			<input class="uni-input" text name="nickname" value="张小姐" v-model="personalForm.real_name" />
		</view>
		<view class="uni-form-item mb10">
			<view class="title">身份证号</view>
			<input class="uni-input" number name="nickname" value="410221155885888888888" v-model="personalForm.idcard" />
		</view>
		<!--上传图片-->
		<view class="uni-form-item uoload-wrap">
			<view class="upload-item">
				<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
				 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" :max-count="maxCount"
				 width="180" @on-progress="uploadHandler(arguments,'onProgress','legal_person_cardno')" @on-success="uploadHandler(arguments,'onSuccess','legal_person_cardno')"
				 @on-error="uploadHandler(arguments,'onError','legal_person_cardno')" @on-change="uploadHandler(arguments,'onChange','legal_person_cardno')"
				 @on-remove="uploadHandler(arguments,'onRemove','legal_person_cardno')">
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
					@on-progress="uploadHandler(arguments,'onProgress','hand_identify_card_photo_front')"
					@on-success="uploadHandler(arguments,'onSuccess','hand_identify_card_photo_front')"
					@on-error="uploadHandler(arguments,'onError','hand_identify_card_photo_front')"
					@on-change="uploadHandler(arguments,'onChange','hand_identify_card_photo_front')"
					@on-remove="uploadHandler(arguments,'onRemove','hand_identify_card_photo_front')"
					>
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
				uploadState:{
					COMPLETE:0,
					UNFINISHED:1,
					SUCCESS:2,
					ERROR:3,
					files:{}
				},
				action: 'http://192.168.100.17/index.php/index/index/upload',
				// 预置上传列表
				fileList: [],
				showUploadList: true,
				customBtn: false,
				autoUpload: true,
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
					legal_person_cardno: '', //法人身份证号码
					hand_identify_card_photo: '', //法人身份证号码
					hand_identify_card_photo_front: '', //手持身份证正面照片
					hand_identify_card_photo_back: '', //手持身份证反面照片
					legal_hand_identify_card_photo_font: '' //法人手持身份证正面照片
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
				console.log('onProgress',res,index,lists,fieldName);
				this.uploadState.files[fieldName]=this.uploadState.UNFINISHED;
			},
			onSuccess(res,index,lists,fieldName){//fieldName 服务器接收该图片的字段名
				console.log('onSuccess',res,index,lists,fieldName);
				res =  JSON.parse(res);
				this.uploadState.files[fieldName]=this.uploadState.SUCCESS;
				//保存已上传完的文件，用于单个上传组件多图上传时，不同的上传组件应使用不同的数组保存
				//this.fileList.push({url:res.data.img_url});
				
				this.personalForm[fieldName] = res.data.img_url;
				console.log('this.personalForm[fieldName]>>>',this.personalForm[fieldName]);
			},
			onChange(res,index,lists,fieldName){
				console.log('onChange ',res,index,lists,fieldName);
				this.uploadState.files[fieldName] = this.uploadState.COMPLETE;
			},
			onError(err,index,lists,fieldName){
				console.log('onError ',err,index,lists,fieldName);
				this.uploadState.files[fieldName] = this.uploadState.EEROR;
			},
			onRemove(index,lists,fieldName){
				console.log('onRemove ',index,lists,fieldName);
				this.uploadState.files[fieldName] = undefined;
				this.personalForm[fieldName] = '';
			
			},
			
			onListChange(lists) {
				console.log('onListChange', lists);
				this.lists = lists;
				this.imgurl.push(this.lists[0].url);

			},
			confirm() {
				this.request({
					url: interfaces.getCorporateData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							scene: this.personalForm.scene,
							real_name: this.personalForm.real_name,
							idcard: this.personalForm.idcard,
							hand_identify_card_photo: this.personalForm.hand_identify_card_photo,
							hand_identify_card_photo_front: this.personalForm.hand_identify_card_photo_front,
							hand_identify_card_photo_back: this.personalForm.hand_identify_card_photo_back,
						}
					},
					success: ((res) => {
						console.log(res, 2222);
					})
				})
			},
			getManager(){
				if(!this.checkUploadFiles()){
					uni.showToast({
						title: '文件未上传完毕',
						icon: "none"
					});
					console.log('文件未上传完毕',this.uploadState.files);
					return false;
				}
				
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
