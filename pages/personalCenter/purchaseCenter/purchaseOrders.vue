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
					type: 1,
					status: '',
					is_deadtime: '',
					kinds: ''
				},
				conversionPrice: [{
						id: 1,
						name: '全部'
					},
					{
						id: 2,
						name: '上架'
					},
					{
						id: 3,
						name: '下架'
					},
					{
						id: 4,
						name: '已截止'
					},
				],
				goodsPrice: [{
					title: '飞利浦呼吸机',
					content: "民用疯疯了这款呼吸机呼吸机呼吸机 卖疯疯疯了疯疯款呼吸机 卖疯疯疯了疯疯...",
					price: '200.000',
					number: '1500',
					time: '2020.02.05-2020.04.05'
				}, ]
			};
		},
		methods: {
			getsupplierList() {
				let params = {
					data: {
						page_size: this.quoto.page_size,
						page_index: this.quoto.page_index,
						keyword: this.quoto.keyword,
						type: this.quoto.type,
						status: this.quoto.status,
						is_deadtime: this.quoto.is_deadtime,
						kinds: this.quoto.kinds,
					}
				}
				console.log(params);
				this.request({
					url: interfaces.getMyneedData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: params,
					success: ((res) => {
						//console.log(res, 366)
						this.goodsPrice = res.data.list;
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
