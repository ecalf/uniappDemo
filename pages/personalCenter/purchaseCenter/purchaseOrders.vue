<template>
	<view>
		<converSionPrice :conversionPrice='conversionPrice'></converSionPrice>
		<goodsprice :goodsPrice='goodsPrice'></goodsprice>
	</view>
</template>

<script>
	import converSionPrice from '@/components/conversionPrice.vue'
	import goodsprice from '@/components/goodsPrice.vue'
	import interfaces from '@/utils/interfaces.js'
	export default {
		data() {
			return {
				quoto: {
					page_size: 2,
					page_index: 1,
					keyword: '',
					type: 2,
					status: 0,
					is_deadtime: 0
				},
				conversionPrice: [
				],
				goodsPrice: []
			};
		},
		methods: {
			getsupplierList() {
				this.request({
					url: interfaces.getMyneedData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							page_size: this.quoto.page_size,
							page_index: this.quoto.page_index,
							keyword: this.quoto.keyword,
							type: this.quoto.type,
							status: this.quoto.status,
							is_deadtime: this.quoto.is_deadtime
						}
					},
					success: ((res) => {
						console.log(res, 366)
						this.goodsPrice = res.data.list;
						this.conversionPrice = res.data.list;
					})
				});
			}
		},
		onLoad() {
			this.getsupplierList()
		},
		components: {
			converSionPrice,
			goodsprice
		}
	}
</script>

<style lang="less">

</style>
