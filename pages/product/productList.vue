<template>
	<view>

		<productSort></productSort>
		<productList :goodsList="goodsList" />
		<page-footer :current="1"></page-footer>
	</view>
</template>

<script>
	import productSort from '@/components/product-sort/productSort.vue'
	import productList from '@/components/productList.vue'
	export default {
		components: {
			productSort,
			productList
		},
		data() {
			return {
				goodsList: [{
						id:1,
						img: "/static/images/product.png",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					},
					{
						id:2,
						img: "",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					},
					{
						id:3,
						img: "/static/images/product.png",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					},
					{
						id:4,
						img: "/static/images/product.png",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					},
					{
						id:5,
						img: "/static/images/product.png",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					},
					{
						id:6,
						img: "",
						name: "这款呼吸机 卖疯了这款呼吸机 卖疯了",
						price: "2000",
					},
				]
			}
		},
		methods: {

		},
		onLoad(option) {
			// console.log(option);
			// 动态修改nav title
			uni.setNavigationBarTitle({
				title: option.name
			})
		}
	}
</script>

<style lang="scss">
	.header {
		width: 92%;
		padding: 0 4%;
		height: 79upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		border-bottom: solid 1upx #eee;

		.target {
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-bottom: -2upx;
			color: #aaa;

			&.on {
				color: #555;
				border-bottom: 4upx solid #f06c7a;
				font-weight: 600;
				font-size: 30upx;
			}

			.icon {
				font-size: 26upx;
			}
		}
	}

	.place {
		background-color: #ffffff;
		height: 100upx;
	}
</style>
