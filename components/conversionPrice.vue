<template>
	<view>
		<view class="priceInfo">
			<text @click='gotoprice(index)'  class="quotedPrice" v-for='(item,index) in conversionPrice' :key='item.id'>{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			conversionPrice:Array
		},
		data() {
			return {
				
			};
		},
		methods:{
			gotoprice(index){
				console.log(index)
			}
		}
	}
</script>

<style lang="less">
	.priceInfo {
		display: flex;
		justify-content: space-around;
		margin: 0 auto;
		box-sizing: border-box;
		padding: 27.17rpx 54.34rpx;
		.quotedPrice {
			display: block;
			display: flex;
			justify-content: space-between;
			font-size: 16px;
			line-height: 36px;
			letter-spacing: 0px;
			color: #707070;
		}
		
	}
</style>
