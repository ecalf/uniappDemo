<template>
	<view>
		<converSionPrice :conversionPrice="conversionPrice" @gotoprice="gotoPrice"></converSionPrice>
		<goodsprice :goodsPrice="goodsPrice" @update-value="updateValue" @update-up="updateUp" @update-down="updateDown"
		 @details-url="updateDetails" @update-modify="updateModify" :current="current" :loadStatus="loadingText" :entrust="true"></goodsprice>
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
					keyword: '',
					type:'2,3',
					status: '',
					is_deadtime: '',
					kinds: ''
				},
				pageSize: 6, //分页大小
				pageNum: 1, //页码
				loadingText: "正在加载中",
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
			loadData() {
				//debugger
				let params = {
					data: {
						page_size: this.pageSize,
						page_index: this.pageNum,
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
			gotoPrice(index, item) { //传值
				this.current = index;
				this.quoto.status = item.status;
				this.quoto.is_deadtime = item.is_deadtime;
				this.pageNum= 1;
				this.loadingText = "正在加载中";
				this.goodsPrice = [];
				this.loadData(); //更新数据
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
								if (res.confirm) {
									this.goodsPrice.splice(item, 1);
								}
							}
						})
						//this.loadData(); //更新数据
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
								if (res.confirm) {
									this.goodsPrice.splice(item, 1);
								}
								
							}
						})
						
						//this.loadData(); //更新数据
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
								if (res.confirm) {
									this.goodsPrice.splice(item, 1);
								}
								
							}
						})
						this.loadData(); //更新数据
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
				uni.navigateTo({
					url: "/pages/personalCenter/modify/PublishPrev?id=" + item.id+'&cate_id='+item.cate_id
				});
			}
		},
		onLoad() {
			this.loadData();
		},
		onPullDownRefresh() {
			setTimeout(() => {
				this.pageNum = 1;
				this.loadingText = "加载中...";
				this.goodsList = [];
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
	}
</script>
<style lang="less" scoped>
</style>
