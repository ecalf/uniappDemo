<template>
	<view>
		<converSionPrice :conversionPrice="conversionPrice" ></converSionPrice>
		<goodsprice :goodsPrice="goodsPrice" @update-value="updateValue"></goodsprice>
	</view>
</template>

<script>
	import converSionPrice from '@/components/conversionPrice.vue';
	import goodsprice from '../../../components/goodsPrice.vue';
	import interfaces from '@/utils/interfaces.js';
	export default {
		components: {
			converSionPrice,
			goodsprice
		},
		data() {
			return {
				quoto: {
					page_size: 5,
					page_index: 1,
					keyword: '',
					type: 1,
				},
				goodsPrice: [],
				conversionPrice: [{
						id: 1,
						name: '已报价'
					},
					{
						id: 2,
						name: '未报价'
					}
				]
			};
		},
		methods: {
			initData() {
				let params = {
					data: {
						page_size: this.quoto.page_size,
						page_index: this.quoto.page_index,
						keyword: '',
						type:''
					}
				}
				this.request({
					url: interfaces.getMyquoteData,
					dataType: 'JSON',
					method: 'POST', //请求方式
					data: params,
					success: res => {
						var lists = res.data.list;
						console.log(lists)
						if (res.code == 200) {
							if (lists.length > 0) {
								lists.forEach(item => {
									this.goodsPrice.push(item);
								})
							} else {
								this.loadingText = "到底了";
							}
						}
					
					}
				});
			},
			deleteList(index) {
				//console.log(params);
				this.request({
					url: interfaces.getMyquoteData,
					dataType: 'JSON',
					method: 'POST', //请求方式
					data: {
						data: {
							page_size: this.quoto.page_size,
							page_index: this.quoto.page_index,
							keyword: '',
							type: this.quoto.type
						}
					},
					success: res => {
						uni.showModal({
							title: '提示',
							content: '您确定要删除此项吗？',
							success: res => {
								//console.log(res);
								if (res.confirm) {
									this.goodsPrice.splice(index, 1);
								}
							}
						})
					}
				});
			},
			updateValue(index) {
				console.log('onRemove', index);
				this.deleteList(index);
			}
		},
		onLoad() {
			this.initData();
		},
		// onPullDownRefresh() {
		// 	setTimeout(() => {
		// 		this.page_index = 1;
		// 		this.loadingText = "加载中...";
		// 		this.goodsPrice = [];
		// 		this.initData();
		// 		uni.stopPullDownRefresh();
		// 	}, 1000)
		// },
		// 上拉加载
		onReachBottom() {
			this.quoto.page_index ++;
			this.initData();
		}
	};
</script>

<style lang="less"></style>
