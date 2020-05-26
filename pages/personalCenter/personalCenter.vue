<template>
	<view>
		<!-- 头部用户信息 -->
		<view class='header'>
			<view class='headerImg'><img src='~@/static/images/header-ico.png' /></view>
			<view class="member-right">
				<view v-if="hasLogin" >
					<view class='header-title'><text>{{uerInfo.companyName}}</text></view>
					<view class='headerImg2'><img src="~@/static/images/vipicon.png"></view>
					<view class='usersname'><text>{{uerInfo.userName}}</text></view>
				</view>
				<view v-if="!hasLogin">
					<navigator url="/pages/user/login">登录</navigator>		
				</view>
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
				<view @click="gotopriceControl(item,index)" class="procurement-content" v-for="(item,index) in procurementList" :key="index">
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
				<view @click="gotoSale(item,index)" class="sale-content" v-for="(item,index) in saleList" :key="index" v-if="index==2 && (usertype==1||usertype==2) ?false:true">
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
				<view @click='gotoAccount(item)' class="account-content" v-for="(item,index) in accountList" :key="index" >
					<view class="img">
						<image :src="item.img"></image>
					</view>
					<view class="text">{{item.text}}</view>
				</view>
			</view>
			<!-- 功能服务 -->
			<view class="service">
				<view class='service-title '>
					<p>功能服务</p>
				</view>
				<view class="service-content" v-for="(item,index) in serviceList" :key="index">
					<view class="img">
						<image :src="item.img"></image>
					</view>
					<view class="text">{{item.text}}</view>
				</view>
			</view>
		</view>
		
		
		<view class="btn-row" v-if="hasLogin">
			<button class="cu-btn" @tap="bindLogin">退出登录</button>
		</view>
		<!--注册入口-->
<!-- 		<uni-popup :defaultPopup="ishow" :defaultTrans="ishow" v-if="!hasLogin">
			<register-enter></register-enter>
		</uni-popup> -->

		<page-footer :currentPage="currentPage"></page-footer>

	</view>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		computed: mapState(['hasLogin', 'uerInfo']),
		data() {
			return {
				usertype:'',
				saleId:'',
				show:false,
				currentPage: "/pages/personalCenter/personalCenter",
				procurementList: [{
						text: "发布采购",
						img: "/static/images/lgicon1.png",
						url: "/pages/publish/publish"
					},
					{
						text: "报价管理",
						img: "/static/images/lgicon2.png",
						url: "/pages/personalCenter/purchaseCenter/priceControl"
					},
					{
						text: "采购订单",
						img: "/static/images/lgicon3.png",
						url: "/pages/personalCenter/purchaseCenter/purchaseOrders"
					},
					{
						text: "供应商库",
						img: "/static/images/lgicon4.png",
						url: "/pages/personalCenter/purchaseCenter/SupplierPool"
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
						img: "/static/images/lgicon7.png",
						url: "/pages/publish/publish",
						id:1
					},
					{
						text: "销售管理",
						img: "/static/images/lgicon8.png",
						url: "/pages/personalCenter/saleCenter/saleManagement",
						id:2
					},
					{
						text: "主页管理",
						img: "/static/images/lgicon9.png",
						url: "/pages/personalCenter/saleCenter/homeManager",
						id:3
					},
					{
						text: "合同管理",
						img: "/static/images/lgicon6.png",
						id:4
					},
					{
						text: "委托销售",
						img: "/static/images/lgicon10.png",
						id:5
					},
					{
						text: "我的报价",
						img: "/static/images/lgicon11.png",
						url: "/pages/personalCenter/saleCenter/myQuote",
						id:6
					},
				],
				accountList: [{
						text: "我的账户",
						img: "/static/images/lgicon16.png",
						url: "/pages/personalCenter/accountCenter/myAccount"
					},
					{
						text: "发票管理",
						img: "/static/images/lgicon6.png"
					},
					{
						text: "认证中心",
						img: "/static/images/lgicon3.png",
						url: "/pages/personalCenter/accountCenter/CertificateAuthority"
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
			gotopriceControl(item,index) {//采购路由
				uni.navigateTo({
					url: item.url
				})
				if(index == 0) {
					uni.switchTab({
						url: item.url
					})
				}
			
			},
			gotoSale(item,index) {//销售路由
				uni.navigateTo({
					url: item.url
				})
				if(index == 0) {
					uni.switchTab({
						url: item.url
					})
				}

			},
			gotoAccount(item) {//账户路由
				uni.navigateTo({
					url: item.url
				})

			},
			//判断是否登录状态
			...mapMutations(['logout']),
			bindLogin() {
				if (this.hasLogin) {
					this.logout();
					uni.reLaunch({
						url: '/pages/user/login'
					})
				} 
			}
			
		},
		onLoad(){
			this.usertype = this.uerInfo.user_Type,
			console.log(this.usertype)
		},
		
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
		position: absolute;
	   right: 54.34rpx;
		top: 108.69rpx;
		img{
			width: 100%;
			height: 100%;
		}
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
		background-color: #17F2B9;
		box-shadow: 0rpx 5.43rpx 10.86rpx 0rpx #11413b;
		border-radius: 25.36rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0.8;
		float: right;
		color: #05544a;
		font-size: 21.73rpx;
		margin-top: 9.05rpx;
		
	}

	.vip-join {
		font-size: 21.73rpx;
		font-weight: bold;
		line-height: 28.98rpx;
		letter-spacing: 0rpx;
		color: #05544a;
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
		justify-content: left;
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
	.cu-btn {
		width: 80%;
		height: 72.46rpx;
		line-height: 72.46rpx;
		background: #44a78d;
		border-radius: 9.05rpx;
		text-align: center;
		font-size: 32.6rpx;
		color: #fff;
		cursor: pointer;
		margin-bottom: 54.34rpx;
		margin-top: 36.23rpx;
	}
	navigator{
		color: #FFFFFF;
		font-size: 32.6rpx;
		margin-left: 27.17rpx;
	}
</style>
