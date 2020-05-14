<template>
	<view class="pb60">
		<view v-if="isShow">
			<search-bar placeholder="类目搜索可直接输入产品名称" @confirm="search" class="uni-search-box"></search-bar>
			<product-category :categoryList="categoryList" :style="{backgroundColor:backgroundColor}" class="publish-categroy"></product-category>
		</view>
		<view v-else>
			<form>
				<view class="uni-form-item uni-column uni-tl">
					<text class="colorred">*</text>
					<input class="uni-input uni-tl-input" name="" placeholder="标题" />
				</view>
				<view class="uni-form-item uni-column uni-tl">
					<textarea class="uni-input uni-tl-input uni-textarea" placeholder="描述"></textarea>
				</view>
				<view class="uni-form-item uni-column  upload-images">
					<upload-file></upload-file>	
				</view>
				<view class="uni-form-item m-cl-box">
					<cl-card label="" class="brand-bg">
						<cl-select v-model="form.selectbrand" :options="options.selectbrand"></cl-select>
					</cl-card>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">其他品牌</view>
					<input class="uni-input" name="" placeholder="请输入品牌" />
				</view>
				<view class="uni-form-item uni-column m-cl-pt15">
					<view class="title">出口国</view>
					<cl-card label="" class="uni-input">
						<cl-select v-model="form.country" :options="options.country"></cl-select>
					</cl-card>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title"><text class="colorred">*</text>价格</view>
					<input class="uni-input" name="" placeholder="￥ 0.00" />
				</view>
		</form>
	</view>


	<view class="next-step">
		<view class="next-btn" @tap="stepBtn()"><button>下一步</button></view>
	</view>

	</view>
</template>

<script>
	import searchBar from '@/components/uni-search/search-bar'
	import productCategory from '@/components/product-category/productCategory'
	import uploadFile from '@/components/uploadFile/uploadFile'
	import interfaces from '@/utils/interfaces.js'
	export default {
		components: {
			searchBar,
			productCategory,
			uploadFile
		},
		data() {
			return {
				searchVal: '', //搜索关键字
				categoryList: [], //产品类目
				backgroundColor: "#F8F8F8", //修改类目背景色
				isShow: true, //开关显示隐藏
				form:{
					selectbrand:0,
				},
				options:{
					selectbrand:[
						{
							label: '海南东山羊',
							value: 0
						},
						{
							label: '乌鱼子',
							value: 1
						},
						{
							label: '葛仙米',
							value: 2
						},
						{
							label: '亚东鲑鱼',
							value: 3
						},
						{
							label: '虫草',
							value: 4
						},
						{
							label: '太湖银鱼',
							value: 5
						}
					],
					country:[
						{
							label: '中国',
							value: 0
						},
						{
							label: '乌鱼子',
							value: 1
						},
						{
							label: '葛仙米',
							value: 2
						},
						{
							label: '亚东鲑鱼',
							value: 3
						},
						{
							label: '虫草',
							value: 4
						},
						{
							label: '太湖银鱼',
							value: 5
						}
					]
				}
			}
		},
		onLoad() {
			this.initData();
		},
		methods: {
			initData() {
				uni.request({
					url: interfaces.getCategroyData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							id: '',
						}
					},
					success: ((res) => {
						console.log(res.data.data);
						this.categoryList = res.data.data;
						//console.log(this.categoryList.child);
					})
				});
			},
			search(res) {
				this.searchVal = res.value
			},
			stepBtn() { //下一步
				this.isShow = false;
			}
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
</style>
