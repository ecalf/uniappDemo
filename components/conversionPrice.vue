<template>
	<view>
		<view class="priceInfo">
			<text @click='gotoprice(index,item)'  :class='Priceindex==index?"quotedPrice":""'  v-for='(item,index) in conversionPrice' :key='item.id'>{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			conversionPrice:Array,
			
		},
		data() {
			return {
				Priceindex:0
			};
		},
		methods:{
			gotoprice(index,item){
				this.Priceindex = index;
				this.$emit('gotoprice',index,item);
			}
		}
	}
</script>

<style lang="less">
	.priceInfo {
		display: flex;
		font-size: 25.36rpx;
		justify-content: space-around;
		margin: 0 auto;
		align-items: center;
		box-sizing: border-box;
		padding: 27.17rpx 0rpx;
		.quotedPrice {
			display: block;
			display: flex;
			justify-content: space-between;
			font-size: 16px;
			line-height: 36px;
			letter-spacing: 0px;
			color: #44a78d;
			border-bottom: 5.43rpx solid #44a78d;
		}
		
	}
</style>
