<template>
	<view class="pb60">
		<product-category :categoryList="categoryList" :style="{backgroundColor:backgroundColor}" class="publish-categroy"
		 @update-value="updateValue"></product-category>
		<view class="common-btn">
			<button @tap="stepBtn()">下一步</button>
		</view>

	</view>
</template>

<script>
	import searchBar from '@/components/uni-search/search-bar'
	import productCategory from '@/components/product-category/productCategory'
	import interfaces from '@/utils/interfaces.js'
	export default {
		components: {
			searchBar,
			productCategory,
		},
		data() {
			return {
				searchVal: '', //搜索关键字
				categoryList: [], //产品类目
				backgroundColor: "#F8F8F8", //修改类目背景色
				type: "",
				cate_id: "",	
			   modifyParams:""//修改参数
			}
		},
		onLoad(option) {
			 this.modifyParams=JSON.parse(option.params);
			this.initData();
		},
		methods: {
			initData() {
				//修改当前的发布信息
				//debugger
				let params={
					data:{
						id:this.modifyParams.id,
						type:this.modifyParams.type,
						cate_id:this.modifyParams.cate_id, //品类id
						brand_id:this.modifyParams.brand_id, //品牌id
						title:this.modifyParams.title, //标题
						desc:this.modifyParams.desc, //描述
						brand:this.modifyParams.brand, //品牌选择
						otherBrand:this.modifyParams.otherBrand, //其他品牌,非必选
						country:this.modifyParams.country, //出口国,非必填
						supplierPrice:this.modifyParams.supplierPrice, //供应商价格,仅发布销售可用
						price:this.modifyParams.price, //市场价	
						num:this.modifyParams.num, //数量
						unit_cate_id:this.modifyParams.unit_cate_id, //单位id
						qualification:this.modifyParams.qualification, //资质
						use_way:this.modifyParams.use_way, //用途
						thumbnail:this.modifyParams.thumbnail, //上传图片-产品
						dead_time:this.modifyParams.deadtime, //截止时间
						images:this.modifyParams.images, //产品轮播图
						info:this.modifyParams.info, //产品详情图
						service_id: this.modifyParams.service_id
					}
				}
				console.log('获取参数',params);
				this.request({
					url: interfaces.getModifyData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data:params,
					success: (res) => {	
						console.log(res);
						//this.categoryList = res.data;
					}
				}),
				this.request({
					url: interfaces.getCategroyData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							id: '',
						}
					},
					success: (res) => {
						this.categoryList = res.data;
	
					}
				})
			},
			search(res) {
				this.searchVal = res.value
			},
			updateValue(item) {
				//console.log(this.modifyParams.cate_id);
				this.modifyParams.id= item.id	
				console.log(item,this.modifyParams.id);
			},
			stepBtn() { //下一步
				if (!this.modifyParams.id == '') {
					uni.navigateTo({
						url: "/pages/personalCenter/modify/PublishNext?params=" + JSON.stringify(this.modifyParams)
					});
					console.log(this.modifyParams)
				} else {
					uni.showToast({
						title: '请选择品类',
						icon: "none"
					});
				}
			},

		}
	}
</script>

<style lang="scss">
	.uni-search-box {
		padding-top: 36.23rpx;
	}


	.next-btn {
		position: fixed;
		left: 0;
		right: 0;
		background: #fff;
		width: 100%;
		bottom: 0;
		z-index: 99;
		padding: 16.3rpx 0;

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
	.pb60 {
		padding-bottom: 108.69rpx;
	}

	.upload-images {
		display: block;
		text-align: center;
	}

	.m-cl-box {
		display: block;
		padding: 18.11rpx 45.28rpx;
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

	.category-cur {
		padding: 27.17rpx 32.6rpx;
		background: #fff;
		color: #44A78D;
	}
</style>
