<template>
	<view>
		<view class="publish-popup" v-if="hasLogin">
			<view class="m-flex">
				<view class="publish-item item" v-for="(item,index) in lists" :key="index" @tap="handlePublish(item)">
					<image :src="item.img"></image>
					<view class="title">{{item.title}}</view>
				</view>
			</view>
		</view>
		<view v-else class="before-login">
			<view><image src="/static/images/error.png"></image></view>
			<view>抱歉 Sorry！~当前还未登录</view>
			<view>请登陆再发布信息哦</view>
			<button class="enter-login" @tap="enterlogin">登录</button>
		</view>
		<page-footer :currentPage="currentPage"></page-footer>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		computed: mapState(['hasLogin', 'uerInfo']),
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
			},
			enterlogin(){
				uni.navigateTo({
					url:"/pages/user/login"
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
	.before-login{
		padding:271.73rpx 0 0;
		text-align:center;
		font-size:28.98rpx;
		image{width:295.28rpx;height:204.71rpx;margin-bottom:20px;}
	}
	.enter-login{width:181.15rpx;height:54.34rpx;color:#fff;background:$ac;line-height:54.34rpx;font-size:26.36rpx;margin-top:36.23rpx;}
</style>
