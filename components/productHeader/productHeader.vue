<template>
	<view class="header">
		<!-- 头部-默认显示 -->
		<view class="before">
			<view class="back">
				<view v-if="showback" @tap="back" class="icon iconfont">&#xe600;</view>
			</view>
			<view class="middle"></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				// 是否显示返回按钮
				// #ifndef MP
				showback: true,
				// #endif
			}
		},
		onLoad(){
			// #ifdef MP
			// 如果是小程序端 隐藏返回按钮
			this.showBack = false;
			// #endif
		},
		methods:{
			back(){
				//uni.navigateBack();
				this.$emit('back')
			},
		}
	}
</script>

<style lang="scss">
	.header {
		width: 100%;

		height: 100rpx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);

		/*  #endif  */
		.before {
			width: 92%;
			padding: 0 4%;
			height: 100rpx;
			display: flex;
			align-items: center;
			position: fixed;
			top: 0;
			/*  #ifdef  APP-PLUS  */
			top: var(--status-bar-height);
			/*  #endif  */
			transition: opacity 0.05s linear;

			.back {
				width: 125rpx;
				height: 60rpx;
				flex-shrink: 0;

				.icon {
					margin-left: -10%;
					width: 60upx;
					height: 60upx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size:30rpx;
				}
			}

			.middle {
				width: 100%;
			}

			.icon-btn {
				width: 60rpx;
				height: 60rpx;
				flex-shrink: 0;
				display: flex;

				.icon {
					width: 60rpx;
					height: 60rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 30rpx;
				}
			}
		}

		.before {
			.back {
				.icon {
					color: #fff;
					background-color: rgba(0, 0, 0, 0.2);
					border-radius: 100%;
				}
			}

			.icon-btn {
				.icon {
					color: #fff;
					background-color: rgba(0, 0, 0, 0.2);
					border-radius: 100%;
				}
			}
		}
	}
</style>
