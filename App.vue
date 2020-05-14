<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			//console.log('App Show');
			uni.hideTabBar();
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	/*每个页面公共css */
	@import "/static/font/iconfont.css";

	page {
		background-color: #F8F8F8;
		font-size: 21.73rpx;
		color: #4e5a65;
	}

	.commonweb {
		width: 659.42rpx;
		margin: 0 auto;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.tui-icon {
		width: 40rpx;
		height: 36.23rpx;
		background: #F23A3B;
		color: #fff;
		line-height: 36.23rpx;
		text-align: center;
		font-size: 21.73rpx;
		margin-right: 5px;
		vertical-align: 2px;

	}
</style>
