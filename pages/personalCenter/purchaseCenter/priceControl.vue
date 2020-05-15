<template>
	<view>
			<conversionPrice :conversionPrice='conversionPrice'></conversionPrice>
			<goodsPrice :goodsPrice='goodsPrice'></goodsPrice>
			<goodsPrice :goodsPrice='goodsPrice'></goodsPrice>
		
	</view>
</template>

<script>
	import conversionPrice from '@/components/conversionPrice.vue'
	import goodsPrice from '../../../components/goodsPrice.vue'
	export default {
		data() {
			return {
				conversionPrice:[
					{
					  id:1,
					  name:'已报价'
					},
					{
					 id:2,
					 name:'未报价'
					},
					
				],
				goodsPrice: [{
					title: '飞利浦呼吸机',
					content: "民用疯疯了这款呼吸机呼吸机呼吸机 卖疯疯疯了疯疯款呼吸机 卖疯疯疯了疯疯...",
					price: '200.000',
					number: '1500',
					time: '2020.02.05-2020.04.05'
				}]
			};
		},
		components: {
			conversionPrice,
			goodsPrice
		}
	}
</script>

<style lang="less">

</style>
