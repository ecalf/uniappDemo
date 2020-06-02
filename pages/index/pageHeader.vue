<template>
	<view>
		<view class="header" :style="{'height':titleBarHeight,'padding-top':statusBarHeight,'background-color': nav.bg}">
			<text class="iconfont leftArrow header-back weight"   :style="{'border':nav.color}" v-if="nav.isdisPlayNavTitle" @click="back"></text>
			<view class="login-images"><image :src="nav.images" mode=""></image></view>
			<view class="header-title weight">{{nav.navTitle}}</view>
		</view>
		<view  :style="{'height':titleBarHeight,'padding-top':statusBarHeight}"></view>
	</view>
</template>
<script>
	export default {
		props:["nav"],
		data() {
			return {
				statusBarHeight: 0, 
				titleBarHeight: 0, 
			}
		},
		created() {
			var  that = this;
			 	uni.getSystemInfo({
			 		success: function(res) {
			 			if (res.model.indexOf('iPhone') !== -1) {
							that.titleBarHeight = 44 + 'px';
			 			} else {
			 				that.titleBarHeight = 48  + 'px';
						}
							that.statusBarHeight = res.statusBarHeight  + 'px'
					},
						
			 	})
		 },
		methods: {
			 // 回到上一页
			 back: function(){
				 uni.navigateBack({
				 	delta:1
				 })
			 }
		}
	}
</script>

<style lang="scss">
	
	.header {
		display: flex;
		align-items: center;
		top: 0;
		position: fixed;
		width: 100%;
		z-index: 100;
		left:0;
		padding:0 45.28rpx;
	}
	
	.header .header-title {
		
		font-size:32.6rpx;
		margin-left:36.23rpx;
	}
	.header-back{
		position: absolute;
		left:15upx;
		font-size:30upx;
		padding: 10upx;
		border-radius: 50%;
	}
	.login-images{
		width:65.21rpx;
		height:65.21rpx;
		image{
			width:65.21rpx;
			height:65.21rpx;
		}
	}
</style>
