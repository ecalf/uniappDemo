<template>
	<view class="pb60">
		<search-bar placeholder="类目搜索可直接输入产品名称" @confirm="search" class="uni-search-box"></search-bar>
		<product-category :categoryList="categoryList" :style="{backgroundColor:backgroundColor}" class="publish-categroy"></product-category>
		<view class="next-step">
			<view class="next-btn" @tap="stepBtn()"><button>下一步</button></view>
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
				uni.navigateTo({
				    url: '/pages/publish/publishBuy/publishTwo'
				});
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
</style>
