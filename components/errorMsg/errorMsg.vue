<template>
	<view>
		<view class="errormsg">
			<view><image src="@/static/images/error.png"></image></view>
			<view>抱歉 Sorry！~ 没有找到符合条件的商品</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'errorMsg',
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.errormsg{
		padding:90.57rpx 0 0;
		text-align:center;
		image{width:295.28rpx;height:204.71rpx;margin-bottom:20px;}
	}
</style>
