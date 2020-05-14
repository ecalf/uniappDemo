<template>
	<view>
		<view class="uni-searchbar commonweb">
			<text class="icon iconfont">&#xe60f;</text>
			<input confirm-type="search" type="text" v-model="searchVal" :placeholder="placeholder" @confirm="confirm" class="box-search-input">
		</view>
	</view>
</template>

<script>
	export default {
		name: "SearchBar",
		data() {
			return {
				searchVal: ""
			}
		},
		props: {
			placeholder: {
				type: String,
				default: "请输入搜索内容"
			},
		},
		watch: {
			searchVal() {
				this.$emit("input", {
					value: this.searchVal
				})
			}
		},
		methods: {
			confirm() {
				// #ifndef APP-PLUS
				uni.hideKeyboard();
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
				this.$emit("confirm", {
					value: this.searchVal
				})
			}
		}
	}
</script>

<style lang="scss">
	.uni-searchbar {
		background-color: rgba(142, 142, 147, 0.12);
		border-radius: 10px;
		display: flex;
		box-sizing: border-box;
		overflow: hidden;
		position: relative;
		flex: 1;
		flex-direction: row;
		align-items: center;
		padding: 0 14.49rpx;

	}

	.box-search-input {
		padding-left: 18.11rpx;
		flex: 1;
		width: 100%;
		height: 65.21rpx;
		line-height: 65.21rpx;
		font-size: 23.55rpx;
	}
</style>
