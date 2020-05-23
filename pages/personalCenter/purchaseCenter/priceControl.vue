<template>
	<view>
		<conversionPrice :conversionPrice='conversionPrice'></conversionPrice>
		<goodsPrice :goodsPrice='goodsPrice'></goodsPrice>

	</view>
</template>

<script>
	import conversionPrice from '@/components/conversionPrice.vue'
	import goodsPrice from '../../../components/goodsPrice.vue'
	import interfaces from '@/utils/interfaces.js'
	export default {
		data() {
			return {
				quoto: {
					page_size: 2,
					page_index: 1,
					keyword: '',
					type: '',
				},
				goodsPrice: [],
				conversionPrice: [{
						id: 1,
						name: '已报价'
					},
					{
						id: 2,
						name: '未报价'
					},
				],
				
			};
		},
		methods: {
			getsupplierList() {
				this.request({
					url: interfaces.getMyquoteData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							page_size: this.quoto.page_size,
							page_index: this.quoto.page_index,
							keyword: this.quoto.keyword,
							type: this.quoto.type,
						}
					},
					success: ((res) => {	
						console.log(res, 1212)
						this.goodsPrice = res.data.list;
					})
				});
			}
		},
		onLoad(){
			this.getsupplierList()
		},
		components: {
			conversionPrice,
			goodsPrice
		}
	}
</script>

<style lang="less">

</style>
