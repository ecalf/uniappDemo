<template>
	<view class="content">
		<page-footer :current="1"></page-footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				imgsArr:[
					{
						img : '/static/images/banner.jpg',
					},
					{
						img : '/static/images/banner.png',
					},
					{
						img : '/static/images/banner.png',
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 414rpx;
		width: 414px;
		margin-left: auto;
		margin-right: auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
