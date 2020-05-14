<template>
	<view class="commonweb">
		<view class="filter-condition">
			<view class="text" v-for="(navitem,index) in navlist" :key="index"><text>{{navitem.name}}</text></view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navlist: [{
					name: "综合"
				}, {
					name: "价格"
				}, {
					name: "剩余时间"
				}, {
					name: "搜索"
				}]
			}
		},
		methods: {

		}
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
					transform: rotate(180deg);
					border-top: 4px solid $ac;
				}

				&.filter {
					text:after {
						background-image: url(~@/static/images/fillericona.png);
						background-size: cover;
					}
				}
			}

		}
	}
</style>
