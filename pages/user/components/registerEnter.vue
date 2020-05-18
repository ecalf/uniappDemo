<template>
	<view>
		<view class="register-wrap">
			<view class="register-item" v-for="item in registerList" :key="item.id" @tap="handleRegister(item)">
				<image :src="item.images" mode=""></image>
				<view>{{item.name}}</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				registerList:[
					{type:1,images:'/static/images/personal.png',name:"个人注册"},
					{type:2,images:'/static/images/organization.png',name:"机构注册"},
					{type:3,images:'/static/images/business.png',name:"企业注册"},
					]
			}
		},
		methods: {
			handleRegister(item){//跳转
				uni.navigateTo({
					url:"/pages/user/register?type="+item.type
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.register-wrap{
		display: flex;
		justify-content: space-between;
		background:#fff;
		padding:50.72rpx 18.11rpx;
		border-radius:19.92rpx;
		.register-item{
			text-align: center;
			margin:0 45.28rpx;
			font-size:25.36rpx;
			image{
				width:115.94rpx;
				height:115.94rpx;
				margin-bottom:5.43rpx;
			}
		}
	}
</style>
