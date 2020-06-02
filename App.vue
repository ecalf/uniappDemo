<script>
	import {
		mapMutations
	} from 'vuex';
	export default {

		onLaunch: function() {
			uni.getStorage({
				key: 'userInfo',
				success: (res) => {
					this.login(res.data);
					uni.getStorage({
						key: 'userInfo',
						success: (res) => {
							if (res.code === 200) {
								this.login(res.data);
							}
						}
					})

				}
			});
		},
		methods: {
			...mapMutations(['login'])
		},
		onShow: function() {
			uni.hideTabBar();
		},
		onLoad() {
			document.domain = location.host.split('.').slice(-2).join('.')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "/static/font/iconfont.css";
	@import "./cool/ui/static/css/index.scss";
	@import "@/scss/common.scss";

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

	.navigator-hover {
		opacity: 1;
	}

	.tui-icon {
		width: 40rpx;
		height: 36.23rpx;
		background: #F23A3B;
		color: #fff;
		line-height: 36.23rpx;
		text-align: center;
		font-size: 21.73rpx;
		margin-right: 1px;
		vertical-align: 2px;

	}
</style>
