<template>
	<view>
		<!-- 头部用户信息 -->
		<view class='header'>
			<view class='headerImg'><img src='~@/static/images/header-ico.png' /></view>
			<view class="member-right">
				<view class='header-title'><text>比亚迪口罩</text></view>
				<view class='headerImg2'><img src="~@/static/images/vipicon.png"></view>
				<view class='usersname'><text>张某某</text></view>
			</view>
			<view class='arrow'><img src="~@/static/images/arrow.png" /></view>
			<view class='header-vip'>
				<view class='vip-box'>
					<text class='vip-join'>立即加入</text>
				</view>
				<view class='vip-ico'>
					<image src='~@/static/images/424@2x.png' />
				</view>
				<view class='vip-title'><text>加入VIP悦享更多功能</text></view>
			</view>
		</view>
		<view class="commonweb">
			<!-- 采购模块 -->
			<view class='procurement'>
				<view class='procurement-title'>
					<p>我要采购</p>
				</view>
				<view @click="gotopriceControl(index)" class="procurement-content" v-for="(item,index) in procurementList" :key="index">
					<view class="img">
						<image :src="item.img"></image>
					</view>
					<view class="text">{{item.text}}</view>
				</view>
			</view>

			<!-- 销售模块 -->
			<view class='sale'>
				<view class='sale-title '>
					<p>我要销售</p>
				</view>
				<view @click="gotoSale(index)" class="sale-content" v-for="(item,index) in saleList" :key="index">
					<view class="img">
						<image :src="item.img"></image>
					</view>
					<view class="text">{{item.text}}</view>
				</view>
			</view>
			<!-- 账户管理 -->
			<view class="account">
				<view class='account-title '>
					<p>账户管理</p>
				</view>
				<view class="account-content" v-for="(item,index) in accountList" :key="index">
					<view class="img">
						<image :src="item.img"></image>
					</view>
					<view class="text">{{item.text}}</view>
				</view>
			</view>
			<!-- 功能服务 -->
			<view class="service">
				<view class='service-title '>
					<p>账户管理</p>
				</view>
				<view class="service-content" v-for="(item,index) in serviceList" :key="index">
					<view class="img">
						<image :src="item.img"></image>
					</view>
					<view class="text">{{item.text}}</view>
				</view>
			</view>
		</view>
		<page-footer :current="4"></page-footer>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				procurementList: [{
						text: "发布采购",
						img: "/static/images/lgicon1.png"
					},
					{
						text: "报价管理",
						img: "/static/images/lgicon2.png"
					},
					{
						text: "采购订单",
						img: "/static/images/lgicon3.png"
					},
					{
						text: "供应商库",
						img: "/static/images/lgicon4.png"
					},
					{
						text: "委托采购",
						img: "/static/images/lgicon5.png"
					},
					{
						text: "合同管理",
						img: "/static/images/lgicon6.png"
					},
				],
				saleList: [{
						text: "发布销售",
						img: "/static/images/lgicon7.png"
					},
					{
						text: "销售管理",
						img: "/static/images/lgicon8.png"
					},
					{
						text: "主页管理",
						img: "/static/images/lgicon9.png"
					},
					{
						text: "合同管理",
						img: "/static/images/lgicon6.png"
					},
					{
						text: "委托销售",
						img: "/static/images/lgicon10.png"
					},
					{
						text: "我的报价",
						img: "/static/images/lgicon11.png"
					},
				],
				accountList: [{
						text: "我的账户",
						img: "/static/images/lgicon16.png"
					},
					{
						text: "发票管理",
						img: "/static/images/lgicon6.png"
					},
					{
						text: "认证中心",
						img: "/static/images/lgicon3.png"
					}
				],
				serviceList: [{
						text: "客服",
						img: "/static/images/lgicon13.png"
					},
					{
						text: "联系我们",
						img: "/static/images/lgicon15.png"
					},
					{
						text: "关于我们",
						img: "/static/images/lgicon12.png"
					}
				],
			}
		},
		methods: {
			gotopriceControl(index) {
				// console.log(index)
				if (index == 1) {
					uni.navigateTo({
						url: "/pages/personalCenter/priceControl/priceControl"
					})

				};
				if (index == 2) {
					uni.navigateTo({
						url: "/pages/personalCenter/priceControl/priceControl"
					})

				};
				if (index == 3) {
					uni.navigateTo({
						url: "/pages/personalCenter/SupplierPool/SupplierPool"
					})
				
				};

			},
			gotoSale(index) {
				if (index == 1) {
					uni.navigateTo({
						url: "/pages/personalCenter/saleManagement/saleManagement"
					})
				};
				if (index == 5) {
					uni.navigateTo({
						url: "/pages/personalCenter/myQuote/myQuote"
					})
				};
			}
		}
	}
</script>

<style lang="less">
	.header {
		background-image: linear-gradient(0deg,
			#44a78d 0%,
			#b5f5e2 100%);
		padding: 36.23rpx 5% 0;
	}

	.headerImg {
		display: inline-block;
		vertical-align: middle;

		image {
			width: 144.92rpx;
			height: 144.92rpx;
		}

	}

	.member-right {
		display: inline-block;
		vertical-align: middle;
		margin-left: 18.11rpx;
	}

	.headerImg2 {
		display: inline-block;
		vertical-align: top;
		width: 56.15rpx;
		height: 28.07rpx;
		margin-left: 9.05rpx;

	}

	.header-title {
		font-size: 36.23rpx;
		line-height: 47.1rpx;
		color: #ffffff;
		display: inline-block;
		vertical-align: top;

	}



	.usersname {
		color: #fff;
		font-size: 25.36rpx;
	}

	.arrow {
		display: inline-block;
		width: 16.3rpx;
		height: 28.98rpx;
		position: relative;
		left: 188.4rpx;
		top: 0rpx;

	}

	.header-vip {
		width: 659.42rpx;
		height: 108.69rpx;
		background: url(~@/static/images/vipbg.png) center center no-repeat;
		background-size: cover;
		border-radius: 5px;
		margin: 9.05rpx auto;
		padding: 21.73rpx 4%;
		box-sizing: border-box;
		clear: both;
		overflow: hidden;
	}

	.vip-ico {
		width: 103.26rpx;
		height: 43.47rpx;

		image {
			width: 103.26rpx;
			height: 43.47rpx;
		}
	}

	.vip-title {
		color: #17f2b9;
		opacity: 0.9;
		font-size: 21.73rpx;
	}

	.vip-box {
		width: 126.81rpx;
		height: 50.72rpx;
		line-height: 50.72rpx;
		background-color: #17F2B9;
		box-shadow: 0rpx 5.43rpx 10.86rpx 0rpx #11413b;
		border-radius: 25.36rpx;
		text-align: center;
		opacity: 0.8;
		float: right;
		color: #05544a;
		font-size: 21.73rpx;
	}

	.vip-join {
		font-size: 21.73rpx;
		font-weight: bold;
		line-height: 28.98rpx;
		letter-spacing: 0rpx;
		color: #05544a;
		text-align: center;
	}

	.procurement {
		width: 659.42rpx;
		background-color: #ffffff;
		border-radius: 19.92rpx;
		margin: 9.05rpx auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		overflow: hidden;
	}

	.procurement-title {
		width: 100%;
		height: 34.42rpx;
		font-family: Microsoft YaHei;
		font-size: 25.36rpx;
		font-weight: normal;
		font-stretch: normal;
		line-height: 65.21rpx;
		letter-spacing: 0rpx;
		color: #707070;
		margin: 27.17rpx 54.34rpx;
	}

	.procurement-content {
		width: 33.33%;
		margin-top: 18.11rpx;
		justify-content: space-between;
		text-align: center;
	}

	.img {
		width: 43.47rpx;
		height: 43.47rpx;
		margin: 0 auto;
	}

	image {
		width: 100%;
		height: 100%;
	}

	.text {
		font-size: 21.73rpx;
		font-weight: normal;
		font-stretch: normal;
		line-height: 65.21rpx;
		letter-spacing: 0rpx;
		color: #4e5a65;
		margin: 0 auto;
	}

	.sale {
		background-color: #ffffff;
		border-radius: 19.92rpx;
		margin: 9.05rpx auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.sale-title {
		width: 100%;
		height: 34.42rpx;
		font-family: Microsoft YaHei;
		font-size: 25.36rpx;
		font-weight: normal;
		font-stretch: normal;
		line-height: 65.21rpx;
		letter-spacing: 0rpx;
		color: #707070;
		margin: 27.17rpx 54.34rpx;
	}

	.sale-content {
		width: 33.33%;
		margin-top: 18.11rpx;
		justify-content: space-between;
		text-align: center;
	}

	.account {
		background-color: #ffffff;
		border-radius: 19.92rpx;
		margin: 9.05rpx auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.account-title {
		width: 100%;
		height: 34.42rpx;
		font-family: Microsoft YaHei;
		font-size: 25.36rpx;
		font-weight: normal;
		font-stretch: normal;
		line-height: 65.21rpx;
		letter-spacing: 0rpx;
		color: #707070;
		margin: 27.17rpx 54.34rpx;
	}

	.account-content {
		width: 33.33%;
		margin-top: 18.11rpx;
		justify-content: space-between;
		text-align: center;
	}

	.service {
		background-color: #ffffff;
		border-radius: 19.92rpx;
		margin: 9.05rpx auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.service-title {
		width: 100%;
		height: 34.42rpx;
		font-family: Microsoft YaHei;
		font-size: 25.36rpx;
		font-weight: normal;
		font-stretch: normal;
		line-height: 65.21rpx;
		letter-spacing: 0rpx;
		color: #707070;
		margin: 27.17rpx 54.34rpx;
	}

	.service-content {
		width: 33.33%;
		margin-top: 18.11rpx;
		justify-content: space-between;
		text-align: center;
	}
</style>
