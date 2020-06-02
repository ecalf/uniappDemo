<template>
	<view>
		<!-- 轮播图-->
		<view class="banner-swiper">
			<view class="swiper-box">
				<swiper circular="true" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="(swiper, index) in user_company.transparencyData" :key="index"><image :src="swiper"></image></swiper-item>
				</swiper>
			</view>
		</view>
		<!--企业简介-->
		<view class="CompanyProfile">
			<text class="CompanyProfile-title">企业简介</text>
			<text class="CompanyProfile-english">Company profile</text>
			<view class="icon-one" @tap="collect">
				<text class="iconfont iconfont-aa" v-if="flag">&#xe60e;</text>
				<text class="iconfont" v-else>&#xe635;</text>
				<text class="icon-text">{{ flag ? '未' : '已' }}收藏</text>
			</view>
			<text class="CompanyProfile-content">{{ user_company.company_introduce }}</text>
		</view>
		<!--列表推荐-->
		<view class="recommend-nav">
			<view class="tab-item" v-for="(target, index) in filterByList" :key="index" @tap="handleSelect(index,target)" :class="{ on: target.selected }">
				<view class="cntitle">{{ target.cntitle }}</view>
				<view class="entitle">{{ target.entitle }}</view>
			</view>
		</view>
		<!--商品列表-->
		<productList :goodsList="goodsList" :loadStatus="loadingText"/>
		<!-- 公司资质 -->
		<view class="aturalEndowments-box">
			<text class="CompanyProfile-title">企业资质</text>
			<text class="CompanyProfile-english">Company profile</text>
			<view class="aturalEndowments-body">
				<view class="aturalEndowments" v-for="(cc, index) in user_company.qualificationsData" :key="index"><image :src="cc"></image></view>
			</view>
		</view>
		<!-- 联系我们 -->
		<view class="contact">
			<text class="contact-title">联系我们</text>
			<text class="contact-english">contact us</text>
			<view class="contact-information">
				<view class="contact-man">
					<text>联系人：{{ user_company.contact_name }}</text>
				</view>
				<view>
					<text class="contact-phone">电话：{{ user_company.contact_phone }}</text>
					<text>QQ：{{ user_company.qq }}</text>
				</view>
				<view class="contact-weixin">
					<text class="contact-emil">微信：{{ user_company.wechat }}</text>
					<text>邮箱：{{ user_company.email }}</text>
				</view>
				<view>
					<text>地址：{{ user_company.addr }}</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import productList from '@/components/productList.vue';
import interfaces from '@/utils/interfaces.js';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['hasLogin', 'uerInfo']),
	components: {
		productList
	},
	data() {
		return {
			user_id: '',
			quoto: {
				keyword: '',
				type:1,
			},
			pageSize:6, //分页大小
			pageNum: 1, //页码
			loadingText: "正在加载中",
			title:'',
			collect_type:1,
			user_bank: {},
			user_company: {
				transparencyData: [],
				qualificationsData: []
			},
			flag: true,
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			filterByList: [
				{
					cntitle: '采购订单',
					entitle: 'Purchase',
					selected: true,
					type: "1"
				},
				{
					cntitle: '销售订单',
					entitle: 'Sale',
					selected: false,
					type: "2"
				},
				{
					cntitle: '委托订单',
					entitle: 'Entrust',
					selected: false,
					type: "3,4"
				}
			],
			goodsList: []
			
		};
	},
	onLoad(options) {
		this.user_id = options.userid;
		// console.log(this.user_id)
		this.getEnterprise();
		this.getgoodsList()
	},
	methods: {
		handleSelect(index, target) {
			this.filterByList[index].selected = true;
			// 其他的selected false
			for (let i = 0; i < this.filterByList.length; i++) {
				if (i != index) {
					this.filterByList[i].selected = false;
				}
			}
			this.quoto.type = target.type;
			this.pageNum = 1;
			this.loadingText = "加载中...";
			this.goodsList = [];
			this.getgoodsList();
		},
		getgoodsList(){
			let params = {
				data: {
					page_size: this.pageSize,
					page_index: this.pageNum,
					keyword: this.quoto.keyword,
					type:this.quoto.type,
					user_id:this.user_id,
				}
			}
			// console.log(params);
			this.request({
				url: interfaces.getMyneedData,
				dataType: 'JSON',
				method: 'POST', //请求方式
				data: params,
				success: res => {
				if (res.code == 200) {
					let lists = res.data.list;
					// console.log(lists);
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
			})
		},
		collect() {
			this.flag = !this.flag;
			//console.log(this.flag);
			this.request({
				url: interfaces.getCollectData,
				dataType: 'JSON',
				method: 'POST', //请求方式
				data: {
					data:{
						collect_id: this.user_id,
						collect_type:this.collect_type
					}
				},
				success: res => {
					// console.log(res,323)
					uni.showToast({
						title: '收藏成功',
						duration: 2000
					});
				
				}
			})
		},
	
		getEnterprise() {
			this.request({
				url: interfaces.getEnterpriseData,
				dataType: 'JSON',
				method: 'POST', //请求方式
				data: {
					data: {
						user_id: this.user_id
					}
				},
				success: res => {
					console.log(res, 1212);
					this.user_bank = res.data.profiles.user_bank;
					this.user_company = res.data.profiles.user_company;
					this.title = res.data.profiles.user_company.company_name;
					this.user_company.transparencyData = this.user_company.company_transparency.split(',');
					this.user_company.qualificationsData = this.user_company.qualifications.split(',');
					uni.setNavigationBarTitle({
					      title: this.title
					    })
				}
			});
		},
		// 上拉加载
		onReachBottom() {
			//debugger
			this.pageNum++;
			this.getgoodsList();
		}
	}
};
</script>
<style lang="scss" scoped>
@import '@/scss/common.scss';
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
.CompanyProfile {
	width: 717.39rpx;
	margin: -50rpx auto 0;
	padding: 65.21rpx 27.17rpx 45.28rpx 34.42rpx;
	border-bottom: solid 2upx #f6f6f6;
	background: #fff;
	position: relative;
	z-index: 2;
	border-radius: 10px;
	.CompanyProfile-content {
		display: block;
		font-size: 21.73rpx;
		color: #8e8e93;
		margin-top: 21.73rpx;
	}
}
.CompanyProfile-title {
	font-weight: bolder;
	font-size: 27.17rpx;
	color: #4e5a65;
	margin-right: 9.05rpx;
}
.CompanyProfile-english {
	font-size: 21.73rpx;
	color: #4e5a65;
}
/*列表推荐导航*/
.recommend-nav {
	display: flex;
	justify-content: space-between;
	margin: 18.11rpx 0;
	.tab-item {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		text-align: center;
		margin-top: 18.11rpx;
		position: relative;
		padding: 0 2%;
		color: #4e5a65;
		&.on {
			color: $ac;

			&:after {
				opacity: 1;
			}
		}
		&:before {
			content: '';
			display: block;
			height: 20px;
			position: absolute;
			right: 0;
			top: 10.86rpx;
			border-right: 1px solid #e2e2e2;
		}
		&:after {
			content: '';
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
			font-weight: bolder;
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
.aturalEndowments-box {
	box-sizing: border-box;
	padding: 0 38.04rpx 0 45.28rpx;
	margin: 36.23rpx 0;
	.aturalEndowments-body {
		display: flex;
		margin-top: 36.23rpx;
		.aturalEndowments {
			width: 155.79rpx;
			height: 155.79rpx;
			background-color: #ffffff;
			display: flex;
			justify-content: center;
			align-items: center;
			image {
				width: 96.01rpx;
				height: 137.68rpx;
			}
		}
	}
}
.contact {
	box-sizing: border-box;
	padding: 0 38.04rpx 0 45.28rpx;
	.contact-title {
		font-size: 28.98rpx;
		font-weight: bolder;
		color: #44a78d;
		margin-right: 9.05rpx;
	}
	.contact-english {
		font-size: 21.73rpx;
		color: #44a78d;
	}
	.contact-information {
		font-size: 21.73rpx;
		color: #4e5a65;
		.contact-man {
			margin: 9.05rpx 0;
		}
		.contact-phone {
			margin-right: 72.46rpx;
		}
		.contact-weixin {
			margin: 7.24rpx 0;
		}
		.contact-emil {
			margin-right: 97.82rpx;
		}
	}
}
.icon-one {
	color: #44a78d;
	position: absolute;
	left: 525.36rpx;
	top: 59.78rpx;
	.icon-text {
		margin-left: 9.05rpx;
	}
}
</style>
