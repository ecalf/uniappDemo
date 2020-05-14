<template>
	<view>
		<search-bar placeholder="类目搜索可直接输入产品名称" @confirm="search"></search-bar>
		<product-category :categoryList="categoryList" :style="{backgroundColor:backgroundColor}" class="publish-categroy"></product-category>
		<view class="next-btn"><text>下一步</text></view>
	</view>
</template>

<script>
	import searchBar from '@/components/uni-search/search-bar'
	import productCategory from '@/components/product-category/productCategory'
	import interfaces from '@/utils/interfaces.js'
	export default {
		components: {
			searchBar,
			productCategory,
		},
		data() {
			return {
				searchVal: '',
				categoryList: [],
				backgroundColor:"#F8F8F8"
			}
		},
		onLoad() {
			this.initData();
		},
		methods: {
			initData() {
				uni.request({
					url: interfaces.getCategroyData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							id: '',
						}
					},
					success: ((res) => {
						console.log(res.data.data);
						this.categoryList = res.data.data;
						//console.log(this.categoryList.child);
					})
				});
			},
			search(res) {
				this.searchVal = res.value
			},
		}
	}
</script>

<style lang="scss">
	@import "@/scss/common.scss";
	.publish-categroy{
		margin-top:36.23rpx;
			
	}
	.next-btn{
		
	}
</style>
