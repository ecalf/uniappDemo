<template>
	<view>
		<converSionPrice :conversionPrice="conversionPrice" @gotoprice="gotoPrice"></converSionPrice>
		<goodsprice :goodsPrice="goodsPrice" @update-value="updateValue" @update-up="updateUp" @update-down="updateDown"
		 @details-url="updateDetails" @update-modify="updateModify" :current="current"></goodsprice>
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
					page_size: 100,
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
				current: 0
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
						status: this.quoto.statu,
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
						if (res.code == 200) {
							this.goodsPrice = res.data.list;
						}
					}
				});
			},
			gotoPrice(index, item) { //传值
				this.current = index;
				this.quoto.type = item.type;
				this.quoto.status = item.status;
				this.quoto.is_deadtime = item.is_deadtime;
				this.getsupplierList(); //更新数据
			},
			updateValue(item) {
				this.needId = item.id;
				this.request({
					url: interfaces.getSatusData,
					dataType: 'JSON',
					method: 'POST', //请求方式
					data: {
						data: {
							need_id: this.needId,
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
							}
						})
					}
				});
			},
			updateUp(item) { //上架
				this.needId = item.id;
				this.request({
					url: interfaces.getSatusData,
					dataType: 'JSON',
					method: 'POST', //请求方式
					data: {
						data: {
							need_id: this.needId,
							status: 1,
						}
					},
					success: res => {
						uni.showModal({
							title: '提示',
							content: '您确定要上架吗？',
							success: res => {
								console.log(res);
								if (res.confirm) {
									this.goodsPrice.splice(item, 1);
								}
							}
						})
					}
				});
			},
			updateDown(item) { //上架
				this.needId = item.id;
				this.request({
					url: interfaces.getSatusData,
					dataType: 'JSON',
					method: 'POST', //请求方式
					data: {
						data: {
							need_id: this.needId,
							status: 0,
						}
					},
					success: res => {
						uni.showModal({
							title: '提示',
							content: '您确定要下架吗？',
							success: res => {
								console.log(res);
								if (res.confirm) {
									this.goodsPrice.splice(item, 1);
								}
							}
						})
					}
				});
			},
			updateDetails(item) {
				//跳转链接
				uni.navigateTo({
					url: "/pages/product/productDetails?id=" + item.id
				})
			},
			updateModify(item) {
				console.log(item);
				uni.navigateTo({
					url: "/pages/personalCenter/modify/PublishPrev?id=" + item.id+'&cate_id='+item.cate_id
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
