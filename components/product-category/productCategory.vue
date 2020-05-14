<template>
	<view class="drawerlist">
		<view class="drawerlist">
			<view class="uni-list-item" v-for="(category,index) in categoryList" :key="category.id" :class="index==showCategoryIndex?'on':''">
				<view class="uni-list-item__content" :style="{backgroundColor:backgroundColor}" @tap="handleCategory(index)">{{category.cn_name}}</view>
				<view class="uni-list-item__subcon"  v-if="index==showCategoryIndex">
					<text v-for="(item,index) in category.child">{{item.cn_name}}</text>
				</view>
				<view class="uni-list-item__extra"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showCategoryIndex: 0,
			}
		},
		props: {
			categoryList:{
				type:Array
			},
			backgroundColor:{
				type:String,
				default:"#ffffff",
			}
		},
		methods:{
			handleCategory(index) {
				this.showCategoryIndex = index;
			}
		}
	}
</script>

<style lang="scss">
	@import "@/scss/common.scss";
	.drawerlist {
		border-top: 1px solid #eaeced;
	}

	.uni-list-item {
		color: $bc;
		position: relative;

		&.on {
			.uni-list-item__extra {
				transform: rotate(-45deg);
			}
		}
	}

	.uni-list-item__content {
		padding: 36.23rpx;
		border-bottom: solid 1px #eaeced;
		font-size: 25.36rpx;
	}

	.uni-list-item__subcon {
		padding: 27.17rpx 36.23rpx 18.11rpx;

		text {
			display: inline-block;
			font-size: 21.73rpx;
			background-color: #e2e2e2;
			border-radius: 9.05rpx;
			padding: 10.86rpx 19.92rpx;
			margin: 0 9.05rpx 9.05rpx;
		}
	}

	.uni-list-item__extra {
		position: absolute;
		right: 39.85rpx;
		top: 54.34rpx;
		width: 8px;
		height: 8px;
		border-top: 1px solid #707070;
		border-right: 1px solid #707070;
		transform: rotate(45deg);
	}
</style>
