<template>
	<view>
		<view class="filter-condition">
			<view class="text" :class="[{on:filterIndex===0},{up:defalutSort===0},{down:defalutSort===1}]" @tap="handleSelect(0)">
				<text>综合</text>
			</view>
			<view class="text" :class="[{on:filterIndex===1},{up:priceSort==='asc'},{down:priceSort==='desc'}]" @tap="handleSelect(1)"><text>价格</text></view>
			<view class="text" :class="[{on:filterIndex===2},{up:timeSort==='asc'},{down:timeSort==='desc'}]" @tap="handleSelect(2)"><text>剩余时间</text></view>
		</view>
		
		<productList :goodsList="goodsList" :firstImages="firstImages" :loadStatus="loadingText" />
		<page-footer :current="1"></page-footer>
	</view>
</template>

<script>
	import productList from '@/components/productList.vue'
	import interfaces from '@/utils/interfaces.js'
	export default {
		components: {
			productList
		},
		data() {
			return {
				filterIndex:'',
				defalutSort: 1, //是否综合排序 0 否 1 是 如果为 1
				priceSort: "", //价格排序 asc 升序 desc 降序
				timeSort: "", //剩余时间排序 asc 升序 desc 降序
				pageSize: 2, //分页大小
				pageNum: 1, //页码
				type: "", //类型1 发布采购 2 发布销售 3 委托销售
				loadingText: "正在加载....",
				cate_id: "",
				firstImages: "",
				goodsList: [],
				kind_id: "",
			}
		},
		onLoad(option) {
			this.kind_id = option.id;
			uni.setNavigationBarTitle({
				title: option.name
			})
		},
		methods: {
			loadData() {
				let params = {
					data: {
						page_size: this.pageSize,
						page_index: this.pageNum,
						keyword: "",
						type:'',
						price_sort: this.priceSort,
						remain_time_sort: this.timeSort,
						cate_id:'',
						brand_id:'',
						is_defalut_sort: this.defalutsort,
						kind_id: this.kind_id,
					}
				}
				console.log(params);
				this.request({ //分类产品列表
					url: interfaces.getNeedsData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: params,
					success: (res) => {
						if (res.code == 200) {
							var lists=res.data.list;
							if (lists.length > 0) {
								lists.forEach(item => {
									this.goodsList.push(item);

								})
							} else {
								this.loadingText = "到底了";
							}
						}
					}
				})
			},

			handleSelect(index) {
				this.filterIndex = index;
				if (index === 0) {
					this.defalutSort = this.defalutSort === 1 ? 0 : 1;
				} else {
					this.defalutSort = '';
				}
				if (index === 1) {
					switch (this.priceSort) {
						case 'asc':
							this.priceSort = 'desc';
							break;
						case 'desc':
							this.priceSort = 'asc';
							break;
						default:
							this.priceSort = 'desc';
							break;
					}
				}
				
				if (index === 2) {
					switch (this.timeSort) {
						case 'asc':
							this.timeSort = 'desc';
							break;
						case 'desc':
							this.timeSort = 'asc';
							break;
						default:
							this.timeSort = 'desc';
							break;
					}
				}
				this.pageNum = 1;
				this.loadingText = "加载中...";
				this.goodsList = [];
				this.loadData();
			},
			updateValue(item) { //分类筛选
				this.cate_id = item.id;
				this.pageNum = 1;
				this.loadingText = "加载中...";
				this.goodsList = [];
				this.loadData();
				this.closeDrawer('right');
			},

		},

	}
</script>

<style lang="scss">
	@import "../../scss/common.scss";

	/*条件筛选*/
	.filter-condition {
		background-color: #ffffff;
		border-radius: 19.92rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-bottom: 9.05rpx;
	
		.text {
			font-size: 25.36rpx;
			display: flex;
	
			text-align: center;
			padding: 28.98rpx 0;
			color: #4e5a65;
	
			text {
				width: 100%;
				position: relative;
	
				&:after {
					content: "";
					display: inline-block;
					vertical-align: middle;
					width: 0;
					height: 0;
					border-right: 4px solid transparent;
					border-left: 4px solid transparent;
					border-top: 4px solid #4e5a65;
					margin-left: 5px;
				}
	
			}
	
			&.filter {
				text:after {
					border: 0;
					width: 25.36rpx;
					height: 25.36rpx;
					background-image: url(~@/static/images/fillericon.png);
					background-size: cover;
				}
			}
	
			&.on {
				color: $ac;
	
				text:after {
					border-top: 4px solid $ac;
				}
	
				&.filter {
					text:after {
	
						background-image: url(~@/static/images/fillericona.png);
						background-size: cover;
	
					}
				}
	
			}
	
			&.up {
				text:after {
					transform: rotate(180deg);
	
				}
	
	
			}
	
			&.down {
	
				text:after {
					transform: 0;
	
				}
	
	
			}
		}
	}
	.header {
		width: 92%;
		padding: 0 4%;
		height: 79upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		border-bottom: solid 1upx #eee;

		.target {
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-bottom: -2upx;
			color: #aaa;

			&.on {
				color: #555;
				border-bottom: 4upx solid #f06c7a;
				font-weight: 600;
				font-size: 30upx;
			}

			.icon {
				font-size: 26upx;
			}
		}
	}

	.place {
		background-color: #ffffff;
		height: 100upx;
	}
</style>
