<template>
	<view class="pb60">

		<cl-form ref="form" :model.sync="formData">
			<view class="uni-form-item m-form-item">
				<text class="colorred">*</text>
				<cl-form-item label="" class="uni-input">
					<cl-input placeholder="标题" class="uni-tl-input" v-model="formData.title"></cl-input>
				</cl-form-item>
			</view>
			<view class="uni-form-item">
				<textarea class="uni-input uni-tl-input uni-textarea" v-model="formData.desc" placeholder="描述"></textarea>
			</view>
			<view class="uni-form-item upload-images">
				<upload-file></upload-file>
			</view>

			<view class="uni-form-item">
				<view class="uni-input uni-input-left">
				<picker @change="bindPickerChange" :value="index" :range="selectbrand" range-key="">
					{{selectbrand[index]}}		
				</picker>
				</view>
				<cl-icon name="cl-icon-arrow-right"></cl-icon>
			</view>

			<view class="uni-form-item m-form-item">
				<view class="title">其他品牌</view>
				<cl-form-item label="" class="uni-input">
					<cl-input placeholder="请输入品牌"></cl-input>
				</cl-form-item>
			</view>
			<view class="uni-form-item m-form-item">
				<view class="title">出口国</view>
				<inputSearch class="uni-input" :dataSource="dataSource" @select="handleChange" placeholder="" />
			</view>
			<view class="uni-form-item m-form-item">
				<view class="title"><text class="colorred">*</text>价格</view>
				<cl-form-item label="" class="uni-input">
					<cl-input placeholder="￥ 0.00" v-model="formData.price"></cl-input>
				</cl-form-item>
			</view>
			<view class="uni-form-item">
				<view class="title"><text class="colorred">*</text>截止日期</view>
				<cl-form-item label="" class="uni-input" prop="date" justify="end">
					<cl-select mode="date" placeholder="请点击选择" v-model="formData.deadtime"></cl-select>
				</cl-form-item>
			</view>
			<view class="uni-form-item">
				<view class="title"><text class="colorred">*</text>用途</view>
				<view class="uni-input">
					<radio-group @change="radioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in useItems" :key="index">
							<radio :value="item.value" :checked="index === current" color="#44a78d" style="transform:scale(0.7)" />{{item.name}}
						</label>
					</radio-group>
				</view>
			</view>
			<view class="uni-form-item more-upload">
				<u-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
				 :file-list="fileList" uploadText="" :show-progress="showProgress" :deletable="deletable" :max-count="maxCount"
				 width="145" @on-list-change="onListChange">
					<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
					</view>
				</u-upload>
			</view>
			<view class="size-text">单张大小<text>5M</text>以内</view>

			<view class="checkbox-list">
				<checkbox-group @change="checkboxChange" class="checkbox-item-box">
					<label class="uni-list-cell uni-list-cell-pd" v-for="item in checkitems" :key="item.value">
						<checkbox :value="item.value" :checked="item.checked" color="#44a78d" style="transform:scale(0.7)" />
						{{item.name}}
					</label>
				</checkbox-group>
			</view>
			<view class="common-btn">
				<button>立即发布</button>
			</view>
		</cl-form>


	</view>
</template>

<script>
	import uploadFile from '@/components/uploadFile/uploadFile'
	import inputSearch from '@/components/p-inputSearch/inputSearch'
	import combox from '@/components/uni-combox/uni-combox'
	import interfaces from '@/utils/interfaces'
	import uUpload from '@/components/u-upload/u-upload'
	export default {
		components: {
			uploadFile,
			inputSearch,
			uUpload
		},
		data() {
			return {
				formData: {
					category: '', //产品类别
					entrust: '', //委托类型,仅委托表单可用
					title: '', //标题
					desc: '', //描述
					brand: '', //品牌选择
					otherBrand: '', //其他品牌,非必选
					country: '', //出口国,非必填
					supplierPrice: '', //供应商价格,仅发布销售可用
					price: '', //市场价
					quantity: '', //数量
					unit: '', //单位
					usage: '', //用途
					qualification: '', //认证
					techImg: '', //上传图片-技术
					productImg: '', //上传图片-产品
					companyImg: '', //上传图片-企业
					otherImg: '', //上传图片-其他
					video: '', //上传视频
					richDesc: '', //富文本描述
					deadtime: '', //截止时间
					service: '' //增值服务,非必须选
				},
				dataSource: [], //出口国家
				index: 0,
				selectbrand: [],
				//多图上传
				action: 'http://192.168.100.17/index.php/index/index/upload',
				// 预置上传列表
				fileList: [],
				showUploadList: true,
				customBtn: false,
				autoUpload: false,
				showProgress: true,
				deletable: true,
				customStyle: false,
				maxCount: 8,
				lists: [], // 组件内部的文件列表
				current: 0, //用途
				useItems: [{
						value: '民用',
						name: '民用',

					},
					{
						value: '医用',
						name: '医用',
					},
				],
				checkitems: [{
						value: '置顶',
						name: '置顶',

					},
					{
						value: '加急',
						name: '加急',
					},
				]
			}

		},
		onLoad() {
			this.selectData(); //选择品牌
			this.initData();
			this.countryData(); //出口国
		},
		methods: {
			//品牌种类
			selectData() {
				this.request({
					url: interfaces.getBrandData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							cate_id: 3
						}
					},
					success: ((res) => {
						const data = []
						for (let i = 0; i < res.data.length; i++) {
							data.push(
								res.data[i].cn_name
							)
						}
						this.selectbrand=data;
					})
				});
			},
			//出口国
			countryData() {
				this.request({
					url: interfaces.getCountryData,
					dataType: "JSON",
					method: 'POST', //请求方式
					success: ((res) => {
						this.dataSource = res.data;
					})
				});
			},
			initData() {
				this.request({
					url: interfaces.getPublishData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							needs_id: "14"
						}
					},
					success: ((res) => {
						console.log(res);
					})
				});
			},
			//用户点击获取的数据
			handleChange(data) {
				console.log(data)
			},
			onListChange(lists) { //商品详情
				//console.log('onListChange', lists);
				this.lists = lists;

			},
			radioChange: function(evt) { //用途选择
				for (let i = 0; i < this.useItems.length; i++) {
					if (this.useItems[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			checkboxChange: function(e) {
				var items = this.checkitems,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.indexOf(item.value) >= 0) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
			},
			bindPickerChange: function(e) {
				this.index = e.detail.value
			},
		}
	}
</script>

<style lang="scss">
	.uni-search-box {
		padding-top: 36.23rpx;
	}

	.publish-categroy {
		margin-top: 36.23rpx;

	}


	.next-btn {
		position: fixed;
		left: 0;
		right: 0;
		background: #fff;
		width: 100%;
		bottom: 0;
		z-index: 99;
		padding: 16.3rpx 72.46rpx;

		button {

			width: 576.08rpx;
			height: 72.46rpx;
			line-height: 72.46rpx;
			background: #44a78d;
			border-radius: 181.15rpx;
			text-align: center;
			font-size: 32.6rpx;
			color: #fff;
			cursor: pointer;

		}
	}

	/*发布页面*/

	.upload-images {
		display: block;
		text-align: center;
	}

	.m-cl-box {
		display: block;
		padding: 7.24rpx 18.11rpx;
	}

	.m-cl-pt15 {
		padding: 0 27.17rpx 0 45.28rpx;
	}

	.brand-bg {
		margin-bottom: 0 !important;

		.cl-card__container {
			background-color: #f6f6f6;
			border-radius: 3px;
			border: solid 1px #e2e2e2;
			height: 72.46rpx;
			line-height: 72.46rpx;
			padding: 0 18.11rpx !important;
		}
	}
</style>
