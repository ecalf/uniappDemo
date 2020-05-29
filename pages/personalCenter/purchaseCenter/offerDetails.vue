<template>
	<view>
		<view class="swiper-box">
			<swiper @change="swiperChange" circular="true" autoplay="true">
				<swiper-item v-for="(swiper, index) in detail.images" :key="index">
					<image :src="swiper"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">{{ currentSwiper + 1 }}/{{detail.images?detail.images.length:'' }}</view>
		</view>
		<view class="product-details-con">
			<view class="top">
				<view class="new-price">
					<text>￥</text>
					<text>{{ detail.price }}</text>
				</view>
				<view class="old-price" v-if="detail.type == 2">￥{{ detail.supplier_price }}</view>
				<view class="good-num">库存：{{ detail.num }}{{ detail.unit_category_cnname }}</view>
			</view>
			<view class="product-title">
				<text class="tui-icon" v-for="(item,index) in detail.service_cnname" :key='index'>{{item}}</text>
				{{ detail.title }}
			</view>
			<view class="product-text">{{ detail.desc }}</view>
		</view>

		<view v-if="detail.is_quoted==1">
			<view class="offer">
				<text class="offerinfo">联系人:</text>
				<text>{{ offerList.contact_name }}</text>
			</view>
			<view class="offer">
				<text class="offerinfo">联系人电话:</text>
				<text>{{ offerList.phone }}</text>
			</view>
			<view class="offer">
				<text class="offerinfo">公司名称:</text>
				<text>{{ offerList.company_name }}</text>
			</view>
			<view class="offer">
				<text class="offerinfo">价格:</text>
				<text>{{ offerList.quoted_price }}</text>
			</view>
			<view class="offer">
				<text class="offerinfo">留言:</text>
				<text>{{ offerList.desc }}</text>
			</view>
		</view>
		<view v-else class="errormsg">
			<view><image src="/static/images/error.png"></image></view>
			<view>抱歉 Sorry！~目前还没有人报价</view>
		</view>
	</view>
	
</template>

<script>
	import interfaces from '@/utils/interfaces.js';
	export default {
		data() {
			return {
				quotationId: '', //报价id和需求ID
				needId: '', //需求id
				offerList: {}, // 报价详情数据
				detail: {},
				currentSwiper: 0 // 轮播图下标
			};
		},
		methods: {
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			initData() {
				//获取产品详情信息
				this.request({
					url: interfaces.getInfoData,
					dataType: 'JSON',
					method: 'POST', //请求方式
					data: {
						data: {
							needs_id: this.needId
						}
					},
					success: (res) => {
						if (res.code == 200) {
							console.log(res, 636);
							var swiperData = res.data.images != null ? res.data.images.split(',') : '';
							var cnnameData = res.data.service_cnname != null ? res.data.service_cnname.split(',') : '';
							this.detail = res.data;
							this.detail.images = swiperData; //重组轮播图格式
							this.detail.service_cnname = cnnameData //重组服务类型格式
						}
					}
				});
				this.request({
					url: interfaces.getofferData,
					dataType: 'JSON',
					method: 'POST', //请求方式
					data: {
						data: {
							quotation_id: this.quotationId,
							is_quoted: 1,
						}
					},
					success: (res) => {
						console.log(res);
						if (res.code == 200) {
							this.offerList = res.data;	
						}
					}
				});

			},
		},
		onLoad(optinos) {
			this.needId = optinos.need_id;
			this.quotationId = optinos.quotation_id;
			this.initData();
		}
	};
</script>
<style lang="scss">
	@import '@/scss/common.scss';

	.offer {
		background: #fff;
		margin-bottom: 1.81rpx;
		display: flex;
		padding: 30.79rpx 38.04rpx;
		font-size: 21.73rpx;
		align-items: center;
		position: relative;

		.offerinfo {
			margin-right: 108.69rpx;
			width: 181.15rpx;
		}
	}

	/*  修改状态栏样式 */
	.status {
		/* #ifdef APP-PLUS */
		opacity: 0;
		/* #endif */
	}

	.swiper-box {
		position: relative;
		width: 100%;
		height: 641.3rpx;

		swiper {
			width: 100%;
			height: 641.3rpx;

			swiper-item {
				image {
					width: 100%;
					height: 641.3rpx;
				}
			}
		}

		.indicator {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 25upx;
			height: 40upx;
			border-radius: 40upx;
			font-size: 22upx;
			position: absolute;
			bottom: 20upx;
			right: 20upx;
			color: #fff;
			background-color: rgba(0, 0, 0, 0.2);
		}
	}

	/*产品详情*/
	.product-details-con {
		background: #fff;
		padding: 27.17rpx 45.28rpx 18.11rpx;
		border-top: solid 1px #e2e2e2;
		margin-bottom: 18.11rpx;

		.top {
			display: flex;
			justify-content: space-between;
			align-items: baseline;

			view {
				display: flex;
			}

			.new-price {
				font-size: 54.34rpx;
				color: $ac;

				text {
					font-size: 36.23rpx;
					margin-top: 18.11rpx;
				}
			}

			.old-price {
				color: #e2e2e2;
				font-size: 28.98rpx;
				text-decoration: line-through;
				margin-left: -18.11rpx;
			}

			.good-num {
				padding: 3.62rpx 14.49rpx;

				background-color: #a1d3c6;
				border-radius: 10px;

				font-size: 21.73rpx;
				color: #44a78d;
			}
		}

		.product-title {
			margin-top: 18.11rpx;
			font-weight: bold;
			font-size: 28.98rpx;
		}

		.product-text {
			margin-top: 18.11rpx;
			color: #8e8e93;
			font-size: 21.73rpx;
		}
	}
	.errormsg{
		padding:90.57rpx 0;
		text-align:center;
		image{width:295.28rpx;height:204.71rpx;margin-bottom:20px;}
	}
</style>
