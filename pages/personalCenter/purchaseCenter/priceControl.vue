<template>
	<view>
		<converSionPrice :conversionPrice="conversionPrice" @gotoprice="gotoPrice"></converSionPrice>
		<goodsprice :goodsPrice="goodsPrice" @update-value="updateValue" :loadStatus="loadingText" @details-url="updateDetails"
		 :priceHide="false" :priceTime="true"></goodsprice>
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
					type: 1,
					kinds: '',
					is_quoted:1,
				},
				pageSize: 6, //分页大小
				pageNum: 1, //页码
				loadingText: "正在加载....",
				needId: '', //需求id
				goodsPrice: [],
				conversionPrice: [{
						id: 1,
						name: '已报价',
						is_quoted:1
					},
					{
						id: 2,
						name: '未报价',
						is_quoted: 0
					}
				]
			};
		},
		methods: {
			loadData() {
				//获取报价id
				let params = {
					data: {
						page_size: this.pageSize,
						page_index: this.pageNum,
						type:this.quoto.type,
						is_quoted:this.quoto.is_quoted,
						kinds:'',
					}
				}
				this.request({
					url: interfaces.getMyneedData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data:params,
					success: (res) => {
						if (res.code == 200) {
							var lists=res.data.list;
							for (let i = 0; i < lists.length; i++) { //转成数组
								let serviceData =lists[i].service_cnname !=null && lists[i].service_cnname.length?lists[i].service_cnname.split(','):'';
								lists[i].service_cnname = serviceData;
							}
							if(lists.length<this.pageSize){
								this.loadingText = "到底了";
							}
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
			onLoad() {
				this.loadData();
			},
			gotoPrice(index, item) { //传值
				this.current = index;
				this.quoto.is_quoted = item.is_quoted;
				this.pageNum = 1;
				this.loadingText = "加载中...";
				this.goodsPrice = [];
				this.loadData();
			},
			updateValue(item) {
			},
			updateDetails(item) {
				//跳转到报价详情
				uni.navigateTo({
					url: "/pages/personalCenter/purchaseCenter/offerDetails?quotation_id="+ item.quotation_id+'&need_id='+item.need_id
				})
			},
		},
		onPullDownRefresh() {
			setTimeout(() => {
				this.pageNum = 1;
				this.loadingText = "加载中...";
				this.goodsPrice = [];
				this.loadData();
				uni.stopPullDownRefresh();
			}, 1000)
		},
		// 上拉加载
		onReachBottom() {
			//debugger
			this.pageNum++;
			this.loadData();
		}
	};
</script>
<style lang="less"></style>
