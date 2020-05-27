<template>
	<view>
		<converSionPrice :conversionPrice="conversionPrice" @gotoprice="gotoPrice"></converSionPrice>
		<goodsprice :goodsPrice="goodsPrice" @update-value="updateValue" :loadStatus="loadingText"></goodsprice>
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
					page_size:6,
					page_index: 1,
					keyword: '',
					type:1,
					status: '',
					is_deadtime: '',
					kinds: '',
					is_quoted:1
				},
				needId: '', //需求id
				goodsPrice: [],
				loadingText: "正在加载....",
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
						// console.log(res.data,666)
						if (res.code == 200) {
							//this.goodsPrice=lists;
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
			gotoPrice(index,item) {//传值
				this.current=index;
				// console.log(this.current,111)
				this.quoto.is_quoted = item.is_quoted;
				 // console.log(item.is_quoted,222)
				this.quoto.page_index =1;
				this.loadingText = "加载中...";
				this.goodsPrice = [];
				this.initData();
			},
			updateValue(item) {
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
							}
						})
					}
				});
			},
			
		},
		onLoad() {
			this.initData();
		},
	
		// 上拉加载
		onReachBottom() {
			this.quoto.page_index ++;
			this.initData();
		}
	};
</script>

<style lang="less"></style>
