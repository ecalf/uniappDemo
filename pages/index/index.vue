<template>
	<view>
		<!-- 自定义顶部导航栏 -->
		<pageHeader :nav="setNav"></pageHeader>
		<view class="banner-swiper">
			<view class="swiper-box">
				<swiper circular="true" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="(swiper,index) in swiperList" :key="index">
						<image :src="swiper.img"></image>
					</swiper-item>
				</swiper>

			</view>
		</view>

		<!--分类列表-->
		<view class="category-list commonweb">
			<view @tap="handleCategory(item)" class="category" v-for="(item,index) in categoryList" :key="index">
				<view class="img">
					<image :src="item.icon"></image>
				</view>
				<view class="text">{{item.cn_name}}</view>
			</view>
		</view>
		<!--发布入口-->
		<view class="commonweb">
			<view class="publish-list">
				<view class="item" :class="'item-'+index" v-for="(item,index) in publishList" :key="index" @tap="handlePublish(item)">
					<view class="inpublish-box">
						<view class="left">
							<view class="text">{{item.title}}</view>
						</view>
						<view class="releaseicon">
							<image :src="item.icon" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--列表推荐-->
		<view class="recommend-nav commonweb">
			<view class="tab-item" v-for="(target,index) in filterByList" :key="index" @tap="handleSelect(index,target)" :class="{'on':target.selected}">
				<view class="cntitle">{{target.cntitle}}</view>
				<view class="entitle">{{target.entitle}}</view>
			</view>
		</view>
		<productList :goodsList="goodsList" :loadStatus="loadingText" />

		<!--登录入口-->
		<uni-popup :defaultPopup="ishow" :defaultTrans="ishow" v-if="!hasLogin">
			<view class="index-login">
				
				<image class="logoimg" src="@/static/images/logo.png" mode=""></image>
				<view class="loginenter">
					
					<!-- #ifdef MP-WEIXIN-->
					<button type="primary" class="weixin_loginbtn" open-type="getUserInfo" withCredentials="true" lang="zh_CN"
					 @getuserinfo="wxGetUserInfo"><text class="icon iconfont">&#xe611;</text>微信登录</button>
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN-->
					<button type="primary" class="weixin_loginbtn" @tap="enterLogin"><text class="icon iconfont">&#xe608;</text>登录</button>
					<button class="weixin_registerbtn" @tap="enterRegister"><text class="icon iconfont">&#xe612;</text>免费注册</button>
					<!-- #endif -->
				</view>
			</view>
		</uni-popup>
		<page-footer :currentPage="currentPage"></page-footer>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import productList from '@/components/productList.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import interfaces from '@/utils/interfaces.js'
	import pageHeader from './pageHeader.vue'
	export default {
		components: {
			productList,
			uniPopup,
			pageHeader
		},
		computed: mapState(['hasLogin', 'userinfo']),
		data() {
			return {
				// 自定义导航栏对象
				setNav:{
					'bg':'#F8F8F8',  //背景色
					'color':'#000000',  //字体颜色
					'isdisPlayNavTitle':false, //是否显示返回按钮，由于导航栏是共用的，把所有的东西封装好，		
					'images':'/static/images/header-ico.png',
					// 然后有些页面不需要的东西通过条件控制进行显示与隐藏
					'navTitle':'首页' //导航标题
				},
				SessionKey: '',
				OpenId: '',
				nickName: null,
				avatarUrl: null,
				isCanUse: uni.getStorageSync('isCanUse') || true, //默认为true
				ishow: true,
				currentPage: '/pages/index/index',
				swiperList: [{
						id: 1,
						img: "/static/images/banner.jpg"
					},
					{
						id: 2,
						img: "/static/images/banner.jpg"
					},
					{
						id: 3,
						img: "/static/images/banner.jpg"
					}
				], //轮播图片
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				type: 5, //1 发布采购 2 发布销售 3 委托销售 4 委托采购 5 官网销售 不传返回所有
				pageSize: 4, //分页大小
				pageNum: 1, //页码
				cate_id: "",
				defalutSort: "", //是否综合排序 0 否 1 是 如果为 1
				priceSort: "", //价格排序 asc 升序 desc 降序
				timeSort: "", //剩余时间排序 asc 升序 desc 降序
				loadingText: "正在加载....",
				categoryList: [],
				publishList: [{
						title: "发布采购",
						bgimg: "/static/images/release01.png",
						icon: "/static/images/releaseicon01.png",
						url: "/pages/publish/publishBuy/publishOne?type=1"
					},
					{
						title: "发布销售",
						bgimg: "/static/images/release02.png",
						icon: "/static/images/releaseicon02.png",
						url: "/pages/publish/publishBuy/publishOne?type=2"
					},
					{
						title: "发布委托",
						bgimg: "/static/images/release03.png",
						icon: "/static/images/releaseicon03.png",
						url: "/pages/publish/publishBuy/publishOne?type=3"
					}
				], //发布
				goodsList: [],
				firstImages: '',
				filterByList: [{
						cntitle: "列表推荐",
						entitle: "Recommend",
						selected: true,
						type: "5"
					},
					{
						cntitle: "采购订单",
						entitle: "Purchase",
						selected: false,
						type: "1"
					},
					{
						cntitle: "销售订单",
						entitle: "Sale",
						selected: false,
						type: "2"
					},
					{
						cntitle: "委托订单",
						entitle: "Entrust",
						selected: false,
						type: "3,4"
					},
				] //列表tabbar
			}


		},

		methods: {
			handleCategory(item) {
				// 分类跳转
				// console.log(item.text);
				//console.log(item);
				uni.navigateTo({
					url: "../product/productList?id=" + item.id + '&name=' + item.cn_name
				})
			},
			handleSelect(index, target) {
				this.filterByList[index].selected = true;

				// 其他的selected false
				for (let i = 0; i < this.filterByList.length; i++) {
					if (i != index) {
						this.filterByList[i].selected = false;
					}
				}
				this.type = target.type;
				console.log(this.type);
				this.pageNum = 1;
				this.loadingText = "加载中...";
				this.goodsList = [];
				this.loadData();
			},
			initData() {
				this.request({ //分类筛选
					url: interfaces.getkindData,
					dataType: "JSON",
					method: 'POST', //请求方式
					success: (res) => {
						//console.log(res);
						this.categoryList = res.data;
					}
				});
			},
			loadData() {
				//debugger
				let params = {
					data: {
						page_size: this.pageSize,
						page_index: this.pageNum,
						keyword: "",
						type: this.type,
						is_defalut_sort: "",
						status: "",
						price_sort: "",
						remain_time_sort: "",
						cate_id: "",
						brand_id: ""
					}
				}
				console.log(params);
				this.request({
					url: interfaces.getNeedsData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: params,
					success: (res) => {
						if (res.code == 200) {
							let lists = res.data.list;
							console.log(lists);
							for (let i = 0; i < lists.length; i++) { //转成数组
								let serviceData = lists[i].service_cnname != null ? lists[i].service_cnname.split(',') : '';
								lists[i].service_cnname = serviceData;
								//console.log('222',serviceData);
								let qualification = lists[i].qualification_icon != null ? lists[i].qualification_icon.split(',') : '';
								lists[i].qualification_icon = qualification;
							}
							if (lists.length < this.pageSize) {
								this.loadingText = "到底了";
							}
							if (lists.length > 0) {
								lists.forEach(item => {
									this.goodsList.push(item);
								})
							} else {
								this.loadingText = "到底了";
							}
						}
					}
				});
			},
			
			//第一授权获取用户信息===》按钮触发
			wxGetUserInfo() {
				let _this = this;
				uni.getUserInfo({
					provider: 'weixin',
					success: function(infoRes) {
						console.log(infoRes);
						let nickName = infoRes.userInfo.nickName; //昵称
						let avatarUrl = infoRes.userInfo.avatarUrl; //头像
						try {
							uni.setStorageSync('isCanUse', false); //记录是否第一次授权  false:表示不是第一次授权
							_this.updateUserInfo();
						} catch (e) {}
					},
					fail(res) {}
				});
			},
			//登录
			login() {
				let _this = this;
				uni.showLoading({
					title: '登录中...'
				});
				// 1.wx获取登录用户code
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						let code = loginRes.code;
						if (!_this.isCanUse) {
							//非第一次授权获取用户信息
							uni.getUserInfo({
								provider: 'weixin',
								success: function(infoRes) {
									//console.log(infoRes)
									//获取用户信息后向调用信息更新方法
									let nickName = infoRes.userInfo.nickName; //昵称
									let avatarUrl = infoRes.userInfo.avatarUrl; //头像
									_this.updateUserInfo(); //调用更新信息方法
								}
							});
						}
						//2.将用户登录code传递到后台置换用户SessionKey、OpenId等信息
						uni.request({
							url: '服务器地址',
							data: {
								code: code,
							},
							success: (res) => {
								//openId、或SessionKdy存储//隐藏loading
								uni.hideLoading();
							}
						});
					},
				});
			},
			//向后台更新信息
			updateUserInfo() {
				let _this = this;
				this.request({
					url: 'url', //服务器端地址
					data: {
						appKey: this.$store.state.appKey,
						customerId: _this.customerId,
						nickName: _this.nickName,
						headUrl: _this.avatarUrl
					},
					success: (res) => {
						if (res.data.state == "success") {
							uni.reLaunch({ //信息更新成功后跳转到小程序首页
								url: '/pages/index/index'
							});
						}
					}

				});
			},
			handlePublish(item) {

				uni.navigateTo({
					url: item.url
				})
			},
			enterRegister() { //注册
				uni.navigateTo({
					url: "/pages/user/registerEnter"
				})
			},
			enterLogin() {
				uni.navigateTo({
					url: "/pages/user/login"
				})
			},
			//判断是否登录状态
			...mapMutations(['logout']),
			bindLogin() {
				if (this.hasLogin) {
					this.logout();
					this.ishow = true;
				} else {
					uni.reLaunch({
						url: '/pages/user/login'
					})
				}
			}
		},
		onLoad() {
			this.initData();
			this.loadData();
			// #ifdef MP-WEIXIN
			this.login();
			//#endif
		},
		onPullDownRefresh() {
			setTimeout(() => {
				this.pageNum = 1;
				this.loadingText = "加载中...";
				this.goodsList = [];
				this.loadData();
				uni.stopPullDownRefresh();
			}, 1000)
		},
		// 上拉加载
		onReachBottom() {
			//debugger
			this.pageNum++;
			this.loadData();
		}
	}
</script>

<style lang="scss">
	@import "../../scss/common.scss";

	.banner-swiper {
		width: 100%;
		display: flex;
		justify-content: center;

		.swiper-box {
			height: 452.89rpx;
			overflow: hidden;
			width: 100%;
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;

			swiper {
				width: 100%;
				height: 452.89rpx;

				swiper-item {
					image {
						width: 100%;
						height: 452.89rpx;
					}
				}
			}
		}
	}

	.category-list {
		margin: -50rpx auto 0;
		padding: 0 0 30upx 0;
		border-bottom: solid 2upx #f6f6f6;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background: #fff;
		position: relative;
		z-index: 2;
		border-radius: 10px;

		.category {
			width: 25%;
			margin-top: 27.17rpx;
			display: flex;
			flex-wrap: wrap;

			.img {
				width: 100%;
				display: flex;
				justify-content: center;

				image {
					width: 90.57rpx;
					height: 90.57rpx;
				}
			}

			.text {
				margin-top: 12.68rpx;
				width: 100%;
				display: flex;
				justify-content: center;
				font-size: 21.73rpx;
				color: #000000;
			}
		}
	}

	//首页发布
	.publish-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 16.3rpx 0;

		.item {
			width: 32.33%;
			display: flex;
			overflow: hidden;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
			height: 108.69rpx;

			&.item-0 {
				background-image: url(~@/static/images/release01.png);

				.text {
					color: #44A78D;
				}
			}

			&.item-1 {
				background-image: url(~@/static/images/release02.png);

				.text {
					color: #feb322;
				}
			}

			&.item-2 {
				background-image: url(~@/static/images/release03.png);

				.text {
					color: #7b79da;
				}
			}

			.inpublish-box {
				width: 100%;
				padding: 25.36rpx 8% 0;

			}

			.left {
				width: 50%;
				display: inline-block;
				vertical-align: middle;
			}

			.text {
				width: 57.97rpx;
				font-size: 21.73rpx;
				color: #44A78D;
				display: inline-block;
				vertical-align: middle;
			}

			.releaseicon {
				width: 50%;
				display: inline-block;
				vertical-align: middle;
				text-align: right;

				image {
					width: 45.28rpx;
					height: 45.28rpx;
				}
			}
		}
	}

	/*列表推荐导航*/
	.recommend-nav {
		display: flex;
		justify-content: space-between;

		.tab-item {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			text-align: center;
			margin-top: 18.11rpx;
			position: relative;
			padding: 0 2%;
			color: #4E5A65;

			&.on {
				color: $ac;

				&:after {
					opacity: 1;
				}
			}

			&:before {
				content: "";
				display: block;
				height: 20px;
				position: absolute;
				right: 0;
				top: 10.86rpx;
				border-right: 1px solid #e2e2e2;
			}

			&:after {
				content: "";
				display: block;
				width: 36.23rpx;
				height: 14.49rpx;
				position: absolute;
				left: 50%;
				top: -18.11rpx;
				transform: translateX(-50%);
				background: url(~@/static/images/listcur.png);
				background-size: cover;
				opacity: 0;
			}

			.cntitle {
				font-size: 25.36rpx;
				font-weight: bold;
				width: 100%;

			}

			.entitle {
				font-size: 21.73rpx;
				width: 100%;
			}

			&:last-child {
				&:before {
					display: none;
				}
			}
		}
	}

	/*列表推荐*/
	.goods-list {
		padding: 27.17rpx 0;

		.loading-text {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}
	}

	/*首页登录入口*/
	.index-login {
		position: fixed;
		width:661.23rpx;
		left: 50%;
		top:50%;
		transform: translate(-50%,-50%);
		background-color: #fff;
		z-index: 999;
		padding: 54.34rpx 36.23rpx;
		border-radius: 19.92rpx;
		text-align: center;

		.logoimg {
			width: 271.73rpx;
			height: 57.97rpx;
			margin: 0 auto 36.23rpx;
		}
	}

	.loginenter {
		border-top: 1px dashed #E2E2E2;
		padding-top: 79.71rpx;

		button,
		navigator {
			color: #fff;
			font-size: 36.23rpx;
			height: 108.69rpx;
			line-height: 108.69rpx;
			border-radius: 54.34rpx;
			margin-bottom: 32.6rpx;

			.iconfont {
				font-size: 54.34rpx;
				margin-right: 14.49rpx;
				vertical-align: middle;
			}

			&.weixin_loginbtn {
				background: #44A78D;
			}

			&.weixin_registerbtn {
				background: #05544A;
			}
		}
	}

	.uni-popup {
		position: fixed;
		/* #ifdef H5 */
		top: var(--window-top);
		/* #endif */
		/* #ifndef H5 */
		top: 0;
		/* #endif */
		bottom: 0;
		left: 0;
		right: 0;
		/* #ifndef APP-NVUE */
		z-index: 99;
		/* #endif */
		transition: all .3s;
	}

	.uni-popup__mask {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 98;
		transition: all .3s;
	}
</style>
