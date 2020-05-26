<template>
	<view>
		<converSionPrice :conversionPrice='conversionPrice' @gotoprice="gotoPrice"></converSionPrice>
		<goodsprice :goodsPrice='goodsPrice'  @update-value="updateValue" @current="current"></goodsprice>
	</view>
</template>

<script>
	import converSionPrice from '@/components/conversionPrice.vue'
	import goodsprice from '@/components/goodsPrice.vue'
	import interfaces from '@/utils/interfaces.js'
	export default {
		components: {
			converSionPrice,
			goodsprice
		},
		data() {
			return {
				quoto: {
					page_size: 15,
					page_index: 1,
					keyword: '',
					type: 1,
					status: '',
					is_deadtime: '',
					kinds: ''
				},
				needId: '', //需求id
				conversionPrice: [{
						id: 1,
						name: '全部',
						status: '',
						is_deadtime: '',
					},
					{
						id: 2,
						name: '上架',
						status: 1,
						is_deadtime: '',

					},
					{
						id: 3,
						name: '下架',
						status: 0,
						is_deadtime: '',
					},
					{
						id: 4,
						name: '已截止',
						status: '',
						is_deadtime: 1,
					},
				],
				goodsPrice: [],
				current:0
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
				this.request({
					url: interfaces.getMyneedData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: params,
					success: (res) => {
						console.log(res);
						this.goodsPrice = res.data.list;
						
					}
				});
			},
			gotoPrice(index,item) {//传值
				this.current=index;
				console.log(this.current);
				this.quoto.type = item.type;
				this.quoto.status = item.status;
				this.quoto.is_deadtime = item.is_deadtime;
				this.getsupplierList();//更新数据
			},
			updateValue(item) {
				console.log('onRemove', item);
				this.needId = item.id;
				this.request({
					url: interfaces.getSatusData,
					dataType: 'JSON',
					method: 'POST', //请求方式
					data: {
						data: {
							need_id:this.needId,
							status: -1,
						}
					},
					success: res => {
						uni.showModal({
							title: '提示',
							content: '您确定要删除此项吗？',
							success: res => {
								console.log(res);
								if (res.confirm) {
									this.goodsPrice.splice(item, 1);
								}
								//this.goodsPrice();
							}
						})
					}
				});
			}
		},
		onLoad() {
			this.getsupplierList();
		},
		
	}
</script>

<style lang="less">

</style>
