<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!-- 轮播图 -->
		<view class="swiper-box">
			<swiper @change="swiperChange" circular="true" autoplay="true">
				<swiper-item v-for="swiper in swiperList" :key="swiper.id">
					<image :src="swiper.url"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">
				{{currentSwiper + 1}}/{{swiperList.length}}
			</view>
		</view>

		<view class="product-details-con">
			<view class="top">
				<view class="new-price"><text>￥</text>2000.00</view>
				<view class="old-price">￥2000.00</view>
				<view class="good-num">库存：1500个</view>
			</view>
			<view class="product-title"><text class="tui-icon">推</text>医用正压单水平自动无创呼吸器睡眠老人止鼾机YH-450鼾机YH-450</view>
			<view class="product-text">鱼跃呼吸机家医用正压单水平自动无创呼吸器睡眠老人止鼾YH-450鱼跃呼吸机家医用正压单水平自动无创呼吸器睡眠老人止鼾YH-450鱼跃呼吸机家医用正压。</view>
		</view>

		<view class="product-info-wrap">
			<view class="info-box">
				<view class="item">品牌：鱼跃</view>
				<view class="item">应用类型：医用</view>
				<view class="item">出口国：英国</view>
			</view>
			<view class="certi-img">认证：<image src="@/static/images/certificate1.png" mode=""></image>
				<image src="@/static/images/certificate2.png" mode=""></image>
				<image src="@/static/images/certificate1.png" mode=""></image>
				<image src="@/static/images/certificate2.png" mode=""></image>
			</view>
		</view>
		
		<view class="description">
			<view class="title">———— 商品详情 ————</view>
			<view class="content">
				<rich-text :nodes="descriptionStr"></rich-text>
			</view>
		</view>
		
		<!--底部菜单-->
		<view class="footer-wrap">
		<view class="product-footer">
			<view class="contact-btn m-btn">立即联系</view>
			<view class="price-btn m-btn">立即报价</view>
		</view>
</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [{
						colorClass: 'uni-bg-red',
						url: '/static/images/wbigimg01.jpg',
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
					}
				],
				currentSwiper: 0, // 轮播图下标	
				descriptionStr:'<div style="text-align:center;"><img width=100% src="/static/images/details.jpg"/></div>',
			}
		},
		methods: {
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
		}
	}
</script>
<style lang="scss">
	@import "../../scss/common.scss";

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
</style>
