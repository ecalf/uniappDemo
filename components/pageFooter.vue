<template>
	<view class="true-height">
		<view class="footer-fixed">
			<view class="footer">
				<view class="item" :class="['item-'+index,item.url==currentPage ? 'on' : '']" v-for="(item,index) in footerlist"
				 :key="index" @tap="handleFooter(index,item)">
					<view class="icon" v-if="item.url == currentPage">
						<image :src="item.activeicon" mode=""></image>
					</view>
					<view class="icon" v-else>
						<image :src="item.beforeicon" mode=""></image>
					</view>
					<view class="text">{{item.name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//currentTabIndex: this.current,
				footerlist: [{
						beforeicon: "/static/images/home.png",
						activeicon: "/static/images/home_a.png",
						name: "首页",
						url: "/pages/index/index",
					},
					{
						beforeicon: "/static/images/classification.png",
						activeicon: "/static/images/classification_a.png",
						name: "分类",
						url: "/pages/category/category",
					},
					{
						beforeicon: "/static/images/releaseicon.png",
						activeicon: "/static/images/releaseicon.png",
						name: "发布",
						url: "/pages/publish/publish",

					},
					{
						beforeicon: "/static/images/distribution.png",
						activeicon: "/static/images/distribution_a.png",
						name: "分销",
						url: "/pages/distribution/distribution",
					},
					{
						beforeicon: "/static/images/center.png",
						activeicon: "/static/images/center_a.png",
						name: "个人中心",
						url: "/pages/personalCenter/personalCenter",
					}
				],
			}
		},
		props: {
			currentPage: {
				type: String,
				default: '/pages/index/index'
			}
		},
		onLoad:{
			
		},
		methods: {
			handleFooter(index, item) {
				this.currentTabIndex = index,
					this.$emit('click', index);		
				uni.switchTab({ //页面跳转
					url: item.url
				});
			},
		}
	}
</script>

<style lang="scss">
	@import "../scss/common.scss";

	.true-height {
		height:126.81rpx;
	}

	.footer-fixed {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 12.68rpx 0;

		&:before {
			content: "";
			display: block;
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 110rpx;
			background: #fff;
			z-index: -1;
		}

		&:after {
			content: "";
			display: block;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: 1.81rpx;
			width: 251.81rpx;
			height: 54.34rpx;
			background: url(~@/static/images/footerbg.png) center center no-repeat;
			background-size: cover;
			z-index: -1;
		}
	}

	.footer {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 749.99rpx;
		margin: 0 auto;
		align-items: flex-end;

		.item {
			width: 20%;
			display: flex;
			flex-wrap: wrap;

			&.on {

				.text {
					color: $ac;
				}
			}

			.icon {
				width: 100%;
				display: flex;
				justify-content: center;

				image {
					width: 45.28rpx;
					height: 45.28rpx;
				}
			}

			.text {
				margin-top: 5rpx;
				width: 100%;
				display: flex;
				justify-content: center;
				font-size:21.73rpx;
				color: $bc;
			}

			&.item-2 {
				.icon image {
					width: 96.01rpx;
					height: 96.01rpx;
				}
			}
		}
	}
</style>
