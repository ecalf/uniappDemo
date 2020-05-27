<template>
	<view>
		<converSionPrice :conversionPrice="conversionPrice" @gotoprice="gotoPrice"></converSionPrice>
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
					page_size: 10,
					page_index: 1,
					keyword: '',
					type:1,
					status: '',
					is_deadtime: '',
					kinds: '',
					is_quoted:1
				},
				goodsPrice: [],
				conversionPrice: [{
						id: 1,
						name: '已报价',
						is_quoted:1
					},
					{
						id: 2,
						name: '未报价',
						is_quoted:0
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
						keyword: this.quoto.keyword,
						type: this.quoto.type,
						status: this.quoto.status,
						is_deadtime: this.quoto.is_deadtime,
						kinds: this.quoto.kinds,
						is_quoted:this.quoto.is_quoted
					}
				}
				console.log(params);
				this.request({
					url: interfaces.getMyneedData,
					dataType: 'JSON',
					method: 'POST', //请求方式
					data: params,
					success: res => {
						var lists = res.data.list;
						console.log(res.data,666)
						if (res.code == 200) {
							this.goodsPrice=lists;
							// if (lists.length > 0) {
							// 	lists.forEach(item => {
							// 		this.goodsPrice.push(item);
							// 	})
							// } else {
							// 	this.loadingText = "到底了";
							// }
						}
					
					}
				});
			},
			gotoPrice(index,item) {//传值
				this.current=index;
				// console.log(this.current,111)
				this.quoto.is_quoted = item.is_quoted;
				// console.log(item.is_quoted,222)
				this.initData();//更新数据
			},
			
			updateValue(index) {
				console.log('onRemove', index);
				
			}
		},
		onLoad() {
			this.initData();
		},
		//下拉加载
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
