<template>
	<view>
		<view class="banner-swiper">
			<view class="swiper-box">
				<swiper circular="true" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="swiper in swiperList" :key="swiper.id">
						<image src="../../static/images/banner.jpg"></image>
					</swiper-item>
				</swiper>
				
			</view>
		</view>
		<page-footer></page-footer>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [{
						img: "satic/images/banner.jpg"
					},
					{
						img: "/satic/images/banner.jpg"
					},
					{
						img: "/satic/images/banner.jpg"
					}
				],//轮播图片
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			initData() {
				this.request({
					url: interfaces.getBannerData,
					success: ((res) => {
						// console.log(res);
						this.swiperList = res.data.swiperList;
		
					})
				});
			},
			
		}

	}
</script>

<style lang="scss">
	.banner-swiper {
		width: 100%;
		display: flex;
		justify-content: center;
	
		.swiper-box {
			height:452.89rpx;
			overflow: hidden;
			width:100%;
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;
	
			swiper {
				width: 100%;
				height:452.89rpx;
				
				swiper-item {
					image {
						width: 100%;
						height:452.89rpx;
					}
				}
			}
	
			
		}
	}
	

	
</style>
