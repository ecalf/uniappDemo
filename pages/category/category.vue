<template>
	<view class="category commonweb">
		<banner :info="info" class="categroyBanner"></banner>
		<view class="commonweb">
			<view class="good-products">
				<view class="goodpro-left">
					<view class="m-good-title">推荐好货</view>
					<view class="pro-item pro-item1">
						<view class="goodpro-box">
							<text class="protitle">N95口罩</text>
							<image src="@/static/images/product2.png" mode=""></image>
						</view>
					</view>
					<view class="pro-item pro-item2">
						<view class="goodpro-box">
							<text class="protitle">N95口罩</text>
							<image src="@/static/images/product2.png" mode=""></image>
						</view>
					</view>
					<view class="pro-item pro-item3">
						<view class="goodpro-box">
							<text class="protitle">N95口罩</text>
							<image src="@/static/images/product2.png" mode=""></image>
						</view>
					</view>
					<view class="pro-item pro-item4">
						<view class="goodpro-box">
							<text class="protitle">N95口罩</text>
							<image src="@/static/images/product2.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="goodpro-right">
					<view class="m-good-title">推荐好货</view>
					<view class="column">
						<view class="left"><text>推荐好货</text></view>
						<view class="right">
							<image src="@/static/images/product3.png" mode=""></image>
						</view>
					</view>
					<view class="column">
						<view class="left"><text>推荐好货</text></view>
						<view class="right">
							<image src="@/static/images/product3.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>

			<view class="filter-condition">
				<view class="text" :class="[{on:filterIndex===0},{up:defalutSort===0},{down:defalutSort===1}]" @tap="handleSelect(0)">
					<text>综合</text>
				</view>
				<view class="text" :class="[{on:filterIndex===1},{up:priceSort==='asc'},{down:priceSort==='desc'}]" @tap="handleSelect(1)"><text>价格</text></view>
				<view class="text" :class="[{on:filterIndex===2},{up:priceSort==='asc'},{down:priceSort==='desc'}]" @tap="handleSelect(2)"><text>剩余时间</text></view>
				<view class="text filter" @tap="show('right')"><text>筛选</text></view>
			</view>
			<productList :goodsList="goodsList"  :loadStatus="loadingText" />
		</view>
		<!--弹窗-->
		<uni-drawer :visible="showRight" mode="right" @close="closeDrawer('right')">
			<view class="uni-drawer">
				<product-category :categoryList="categoryList" @update-value="updateValue"></product-category>
			</view>
		</uni-drawer>
		<page-footer :currentPage="currentPage"></page-footer>
	</view>
</template>

<script>
	import banner from '@/components/banner'
	import productList from '@/components/productList'
	import uniDrawer from '@/components/uni-drawer/uni-drawer'
	import productCategory from '@/components/product-category/productCategory'
	import interfaces from '@/utils/interfaces.js'
	export default {
		components: {
			banner,
			productList,
			productCategory,
			uniDrawer
		},
		data() {
			return {
				filterIndex: '',
				showRight: false,
				pageSize: 6, //分页大小
				pageNum: 1, //页码
				type: "", //类型1 发布采购 2 发布销售 3 委托销售
				loadingText: "正在加载....",
				currentPage: '/pages/category/category',
				cate_id: "",
				defalutSort: "", //是否综合排序 0 否 1 是 如果为 1
				priceSort: "", //价格排序 asc 升序 desc 降序
				timeSort: "", //剩余时间排序 asc 升序 desc 降序
				reload:false,
				info: [{
						colorClass: 'uni-bg-red',
						url: '/static/images/cateimg01.png',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				], //轮播图片
				goodsList: [],
				firstImages: '',
				categoryList: [],
			}

		},
		methods: {
			//弹窗显示
			show(e) {
				if (e === 'left') {
					this.showLeft = true
				} else {
					this.showRight = true
				}
			},
			hide() {

				this.showLeft = false
				this.showRight = false
			},
			closeDrawer(e) {
				if (e === 'left') {
					this.showLeft = false
				} else {
					this.showRight = false
				}
			},
			loadData() {
				this.request({ //分类筛选
					url: interfaces.getCategroyData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							id: '',
						}
					},
					success: ((res) => {
						this.categoryList = res.data;
					})
				});
				let params = {
					data: {
						page_size: this.pageSize,
						page_index: this.pageNum,
						keyword: "",
						type: "",
						price_sort: this.priceSort,
						remain_time_sort: this.priceSort,
						cate_id: this.cate_id,
						is_defalut_sort: this.defalutsort
					}
				}
				this.request({ //分类产品列表
					url: interfaces.getNeedsData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: params,
					success: (res) => {
						//console.log(res.data);
						
						if (res.code == 200) {
							let lists = res.data.list;	
							for(let i=0;i<lists.length;i++){
								let serviceData=lists[i].service_cnname.split(',');
								lists[i].service_cnname=serviceData;
							}	
							if (lists.length == this.pageSize) {
								this.loadingText = "到底了";
							}
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
				if (index === 1 || index === 2) {
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
		onNavigationBarButtonTap(e) {
			this.showRight = !this.showRight
		},
		onBackPress() {
			if (this.showRight || this.showLeft) {
				this.hide()
				return true
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

<style lang="scss">
	@import "../../scss/common.scss";

	/*分类*/
	.good-products {
		background: #ffffff;
		padding: 18.11rpx;
		margin: 23.55rpx 0 18.11rpx;
		border-radius: 11px;
		display: flex;
		justify-content: space-between;
		font-size: 21.73rpx;

	}

	.goodpro-left,
	.goodpro-right {
		display: flex;
		justify-content: space-between;
		width: 49%;
		flex-wrap: wrap;

	}

	.pro-item {
		display: flex;
		justify-content: space-between;
		width: 49%;
		flex-wrap: wrap;
		border-radius: 11px;
		text-align: center;
		color: #ff9e50;
		margin-bottom: 3.62rpx;
		padding: 12.68rpx 0;

		&.pro-item1 {
			background: #faf5f1;
		}

		&.pro-item2 {
			background: #faf9f4;
		}

		&.pro-item3 {
			background: #fdf7f9;
		}

		&.pro-item4 {
			background: #ecf5f8;
		}

		.protitle {

			margin-bottom: 7.24rpx;
			display: block;
		}

		image {
			width: 81.52rpx;
			height: 70.65rpx;
		}
	}

	.goodpro-box {
		width: 100%;
	}

	.m-good-title {
		font-size: 28.98rpx;
		color: $bc;
		margin-bottom: 18.11rpx;
		width: 100%;
		line-height: 20px;
	}

	.goodpro-right {

		.column {
			padding: 14.49rpx 19.92rpx;
			display: flex;
			flex-wrap: wrap;
			background-color: #f6f6f6;
			border-radius: 19.92rpx;
			margin-bottom: 3.62rpx;
			align-items: flex-start;

			.left,
			.right {
				display: flex;
				justify-content: space-between;
				width: 50%;
				flex-wrap: wrap;

			}

			.left {
				padding-top: 18.11rpx;
				position: relative;

				text {
					width: 100%;
				}

				&:after {
					content: "";
					width: 50.72rpx;
					height: 1px;
					background: #707070;
					display: block;
					margin-top: 9.05rpx;

				}
			}

			.right {
				image {
					width: 137.68rpx;
					height: 105.07rpx;
				}
			}
		}
	}

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

	/*筛选弹窗*/
	.uni-drawer {
		padding-top: 79.71rpx;

	}

	.drawerlist {
		border-top: 1px solid #eaeced;
	}

	.uni-list-item {
		color: $bc;
		position: relative;

		&.on {
			.uni-list-item__extra {
				transform: rotate(-45deg);
			}
		}
	}

	.uni-list-item__content {
		padding: 36.23rpx;
		border-bottom: solid 1px #eaeced;
		font-size: 25.36rpx;
	}

	.uni-list-item__subcon {
		padding: 27.17rpx 36.23rpx 18.11rpx;

		text {
			display: inline-block;
			font-size: 21.73rpx;
			background-color: #e2e2e2;
			border-radius: 9.05rpx;
			padding: 10.86rpx 19.92rpx;
			margin: 0 9.05rpx 9.05rpx;
		}
	}

	.uni-list-item__extra {
		position: absolute;
		right: 39.85rpx;
		top: 54.34rpx;
		width: 8px;
		height: 8px;
		border-top: 1px solid #707070;
		border-right: 1px solid #707070;
		transform: rotate(45deg);
	}
</style>
