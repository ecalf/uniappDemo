<template>
	<view class="footer-fixed">
		<view class="footer">
			<view class="item" :class="['item-'+index,{'on':index==num}]" v-for="(item,index) in footerlist" :key="index" @tap="handleFooter(index,item)">
				<view class="icon" v-if='index==num'>
					<image :src="item.activeicon" mode=""></image>
				</view>
				<view class="icon" v-else>
					<image :src="item.beforeicon" mode=""></image>
				</view>
				<view class="text">{{item.name}}</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 0,
				isshow:true,
				footerlist: [{
						beforeicon: "/static/images/home.png",
						activeicon: "/static/images/home_a.png",
						name: "首页",
						url: "/",
					},
					{
						beforeicon: "/static/images/classification.png",
						activeicon: "/static/images/classification_a.png",
						name: "分类",
						url: "",
					},
					{
						beforeicon: "/static/images/releaseicon.png",
						activeicon: "/static/images/releaseicon.png",
						name: "发布",
						url: "",

					},
					{
						beforeicon: "/static/images/distribution.png",
						activeicon: "/static/images/distribution_a.png",
						name: "分销",
						url: "",
					},
					{
						beforeicon: "/static/images/center.png",
						activeicon: "/static/images/center_a.png",
						name: "个人中心",
						url: "",
					}
				],
			}
		},
		onLoad:{
			},
		methods: {
			handleFooter(index, item) {
				this.num = index;
				console.log(item.url);
				// uni.navigateTo({//页面跳转
				//     url:item.url
				// });
				
			},
		}
	}
</script>

<style lang="scss">
	@import "../scss/common.scss";

	.footer-fixed {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding:12.68rpx 0;
		&:before{
			content:"";
			display:block;
			position: absolute;
			left:0;
			bottom:0;
			width:100%;
			height:110rpx;
			background:#fff;
			z-index:-1;
		}
		&:after{
			content:"";
			display:block;
			position: absolute;
			left:50%;
			transform: translateX(-50%);
			top:0;
			width:251.81rpx;
			height:54.34rpx;
			background: url(~@/static/images/footerbg.png) center center no-repeat;
			background-size:cover;
			z-index:-1;
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
			&.on{
				
				.text{
					color:$ac;
				}
			}
			.icon {
				width: 100%;
				display: flex;
				justify-content: center;

				image {
					width:45.28rpx;
					height:45.28rpx;
				}
			}
			.text {
				margin-top: 5rpx;
				width: 100%;
				display: flex;
				justify-content: center;
				font-size: 16*1.8rpx;
				color: $bc;
			}

			&.item-2 {
				.icon image {
					width:96.01rpx;
					height: 96.01rpx;
				}
			}
		}
	}
</style>
