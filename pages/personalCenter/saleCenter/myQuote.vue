<template>
	<view>
<!-- 		<view class="input-view">
			<view class="search-icon"></view>
			<input type="text" placeholder="搜索订单"  v-model="quoto.keyword"/>
		</view> -->
		<goodsprice :goodsPrice='goodsPrice'  @update-value="updateValue" :loadStatus="loadingText" @details-url="updateDetails"></goodsprice>
	</view>
</template>

<script>
	import conversionPrice from '../../../components/conversionPrice.vue'
	import goodsprice from '../../../components/goodsPrice.vue'
	import interfaces from '@/utils/interfaces.js'
	export default {
		components: {
			goodsprice
		},
		data() {
			return {
				quoto: {
					keyword: '',
					type:2,
					is_quoted:1
				},
				pageSize: 6, //分页大小
				pageNum: 1, //页码
				needId: '', //需求id
				loadingText: "正在加载....",
				goodsPrice: [],
			};
		},
		methods: {
			getMyquote() {
				// debugger
				this.request({
					url: interfaces.getMyquoteData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							page_size: this.pageSize,
							page_index: this.pageNum,
							keyword: this.quoto.keyword,
							type: this.quoto.type,
							is_quoted:this.quoto.is_quoted
						}
					},
					success: ((res) => {
						if (res.code == 200) {
							let lists = res.data.list;
							console.log(lists,212)
							for (let i = 0; i < lists.length; i++) { //转成数组
								let serviceData =lists[i].service_cnname !=null && lists[i].service_cnname.length?lists[i].service_cnname.split(','):'';
								lists[i].service_cnname = serviceData;
							}
							if (lists.length < this.pageSize) {
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
					})
				});
			},
			gotoPrice(index,item) {//传值
				this.current=index;
				// console.log(this.current,111)
				this.quoto.is_quoted = item.is_quoted;
				 // console.log(item.is_quoted,222)
				this.pageNum = 1;
				this.loadingText = "加载中...";
				this.goodsPrice = [];
				this.getMyquote();
			},
			updateValue(item) {
				console.log(item,235)
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
			updateDetails(item) {
				//跳转链接
				uni.navigateTo({
					url: "/pages/personalCenter/purchaseCenter/offerDetails?id="+ item.id+'&need_id='+item.need_id
				})
			},
		},
		onLoad(option) {
			this.getMyquote()
		},
		// 上拉加载
		onReachBottom() {
			//debugger
		this.pageNum++;
		this.getMyquote();
		}
	}
</script>

<style lang="less">
	.input-view {
		width: 659.42rpx;
		height: 65.21rpx;
		line-height: 65.21rpx;
		background-color: rgba(142, 142, 147, 0.12);
		border-radius: 18.11rpx;
		margin: 18.11rpx auto 36.23rpx;
		position: relative;

		input {
			display: block;
			height: 65.21rpx;
			line-height: 65.21rpx;
			padding-left: 54.34rpx;
			font-size: 23.55rpx;

			&::-webkit-input-placeholder {
				color: red;
			}
		}

		.search-icon {
			display: inline-block;
			width: 25.36rpx;
			height: 25.36rpx;
			position: absolute;
			top: 50%;
			margin-top: -12.68rpx;
			left: 21.73rpx;
			background: url(~@/static/images/lgicon30.png) center center no-repeat;
			background-size: cover;
		}
	}
</style>
