<template>
	<view>
		<view class="publish-popup">
			<view class="m-flex">
				<view class="publish-item item" v-for="(item,index) in lists" :key="index" @tap="handlePublish(item)">
					<image :src="item.img"></image>
					<view class="title">{{item.title}}</view>
				</view>
			</view>
		</view>
		<page-footer :currentPage="currentPage"></page-footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentPage:'/pages/publish/publish',
			lists:[
				{img:"/static/images/purchase-icon.png",title:"发布采购",type:"1"},
				{img:"/static/images/sales-icon.png",title:"发布销售",type:"2"},
				{img:"/static/images/release-icon.png",title:"发布委托",type:"3"}
			],
			
			}
		},
		methods: {
			handlePublish(item){
				// 页面跳转 发布详情
				uni.navigateTo({
					url:"/pages/publish/publishBuy/publishOne?type="+item.type
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../scss/common.scss";
	.publish-popup {
		position: absolute;
		bottom:181.15rpx;
		left: 0;
		width: 100%;
		.publish-item {
			width: 33.33%;
			justify-content: center;
				font-size:28.98rpx;
			image {
			
				width: 163.04rpx;
				height: 163.04rpx;
			}
			.title{
				margin-top:14.49rpx;
				color:$bc;
			}
		}

	}
</style>
