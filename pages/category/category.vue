<template>
	<view class="category commonweb">
		<banner :info="info" class="categroyBanner"></banner>
		<view class="commonweb">
			<view class="good-products">
				<view class="goodpro-left">
					<view class="m-good-title">推荐好货</view>
					<view class="pro-item pro-item1">
						<view class="goodpro-box">
							<text class="protitle">N95口罩</text>
							<image src="@/static/images/product2.png" mode=""></image>
						</view>
					</view>
					<view class="pro-item pro-item2">
						<view class="goodpro-box">
							<text class="protitle">N95口罩</text>
							<image src="@/static/images/product2.png" mode=""></image>
						</view>
					</view>
					<view class="pro-item pro-item3">
						<view class="goodpro-box">
							<text class="protitle">N95口罩</text>
							<image src="@/static/images/product2.png" mode=""></image>
						</view>
					</view>
					<view class="pro-item pro-item4">
						<view class="goodpro-box">
							<text class="protitle">N95口罩</text>
							<image src="@/static/images/product2.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="goodpro-right">
					<view class="m-good-title">推荐好货</view>
					<view class="column">
						<view class="left">推荐好货</view>
						<view class="right">
							<image src="@/static/images/product3.png" mode=""></image>
						</view>
					</view>
					<view class="column">
						<view class="left">推荐好货</view>
						<view class="right">
							<image src="@/static/images/product3.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			
			<view class="filter-condition">
				<view class="text on"><text>综合</text></view>
				<view class="text"><text>价格</text></view>
				<view class="text"><text>剩余时间</text></view>
				<view class="text"><text>筛选</text></view>
			</view>
			<productList :goodsList="goodsList" />
		</view>
		<page-footer :current="1"></page-footer>
	</view>
</template>

<script>
	import banner from '@/components/banner.vue'
	import productList from '../../components/productList.vue'
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	export default {
		components: {
			banner,
			productList,
			uniDrawer
		},
		data() {
			return {
				info: [{
						colorClass: 'uni-bg-red',
						url: '/static/images/cateimg01.png',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				], //轮播图片
				goodsList: [{
						img: "/static/images/product.png",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					},
					{
						img: "/static/images/product.png",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					},
					{
						img: "/static/images/product.png",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					},
					{
						img: "",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					},
					{
						img: "/static/images/product.png",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					}
				],
			}
		}
	}
</script>

<style lang="scss">
	@import "../../scss/common.scss";
</style>
