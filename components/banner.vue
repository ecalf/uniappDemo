<template>
	<uni-swiper-dot :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content">
		<swiper class="swiper-box" @change="change">
			<swiper-item v-for="(item, index) in info" :key="index">
				<view :class="item.colorClass" class="swiper-item">
					<image class="image" :src="item.url" mode="aspectFill" />
				</view>
			</swiper-item>
		</swiper>
	</uni-swiper-dot>
</template>

<script>
	import uniSwiperDot from './uni-swiper-dot/uni-swiper-dot.vue'
	export default {
		components: {
			uniSwiperDot
		},
		data() {
			return {
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				mode: 'default',
				dotsStyles: {
					backgroundColor: 'rgba(255, 255, 255, .5)',
					color: '#fff',
					selectedBackgroundColor: 'rgba(255, 255, 255,1)',
					selectedBorder: '1px rgba(0, 0, 0, .9) solid'
				}
			}
		},
		props: {
			info:Array
		},
		methods: {
			change(e) {
				this.current = e.detail.current
			},
		}

	}
</script>

<style lang="scss">
	.swiper-box{
	border-radius: 11px;
	overflow:hidden;
	height:259.05rpx;
		image{
			width:659.42rpx;
			height:259.05rpx;
			
		}
	}
</style>
