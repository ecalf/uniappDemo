<template>
	<view class="pb60">

		<cl-form ref="form" :model.sync="form" :rules="rules">
			<view class="uni-form-item m-form-item">
				<text class="colorred">*</text>
				<cl-form-item label="" class="uni-input">
					<cl-input placeholder="标题" class="uni-tl-input"></cl-input>
				</cl-form-item>
			</view>
			<view class="uni-form-item">
				<textarea class="uni-input uni-tl-input uni-textarea" placeholder="描述"></textarea>
			</view>
			<view class="uni-form-item upload-images">
				<upload-file></upload-file>
			</view>
			<view class="uni-form-item m-cl-box">
				<cl-card label="" class="brand-bg">
					<cl-select v-model="form.selectbrand" :options="options.selectbrand"></cl-select>
				</cl-card>
			</view>
			<view class="uni-form-item m-form-item">
				<view class="title">其他品牌</view>
				<cl-form-item label="" class="uni-input">
					<cl-input placeholder="请输入品牌"></cl-input>
				</cl-form-item>
			</view>
			<view class="uni-form-item m-form-item">
				<view class="title">出口国</view>
				<cl-form-item label="" class="uni-input">
					<cl-select v-model="form.country" :options="options.country"></cl-select>
				</cl-form-item>
			</view>
			<view class="uni-form-item m-form-item">
				<view class="title"><text class="colorred">*</text>价格</view>
				<cl-form-item label="" class="uni-input">
					<cl-input placeholder="￥ 0.00"></cl-input>
				</cl-form-item>
			</view>
			<view class="uni-form-item">
				<view class="title"><text class="colorred">*</text>截止日期</view>
				<cl-form-item label="" class="uni-input" prop="date" justify="end">
					<cl-select mode="date" placeholder="请点击选择" v-model="form.date"></cl-select>
				</cl-form-item>
			</view>
			<view class="uni-form-item">
				<view class="title"><text class="colorred">*</text>用途</view>
				<cl-form-item label="" class="radio-box uni-input" prop="resource">
					<cl-radio-group v-model="form.resource">
						<cl-radio v-for="(item, index) in options.resource" :key="index" :label="item.value">{{ item.label }}</cl-radio>
					</cl-radio-group>
				</cl-form-item>
			</view>

			<cl-card label="上传商品详情" class="m-from-item">
				<cl-upload v-model="form.url2" multiple :limit="8" :size='["144.92rpx","144.92rpx"]'></cl-upload>
				<view class="size-text">单张大小<text>5M</text>以内</view>
			</cl-card>

		</cl-form>

		<view class="next-step">
			<view class="next-btn"><button>立即发布</button></view>
		</view>

	</view>
</template>

<script>
	import uploadFile from '@/components/uploadFile/uploadFile'
	import interfaces from '@/utils/interfaces.js'
	export default {
		components: {
			uploadFile
		},
		data() {
			return {
				date: "",
				form: {
					selectbrand: 0,
					date: "",
				},
				rules: {
					date: {
						required: true,
						message: "活动时间不能为空",
					}
				},
				options: {
					selectbrand: [{
							label: '海南东山羊',
							value: 0
						},
						{
							label: '乌鱼子',
							value: 1
						},
						{
							label: '葛仙米',
							value: 2
						},
						{
							label: '亚东鲑鱼',
							value: 3
						},
						{
							label: '虫草',
							value: 4
						},
						{
							label: '太湖银鱼',
							value: 5
						}
					],
					country: [{
							label: '中国',
							value: 0
						},
						{
							label: '乌鱼子',
							value: 1
						},
						{
							label: '葛仙米',
							value: 2
						},
						{
							label: '亚东鲑鱼',
							value: 3
						},
						{
							label: '虫草',
							value: 4
						},
						{
							label: '太湖银鱼',
							value: 5
						}
					],
					resource: [{
							label: "民用",
							value: 0,
						},
						{
							label: "医用",
							value: 1,
						},
					],
					url2: ['https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/avatar.jpeg'],
				}

			}

		},
		onLoad() {

		},
		methods: {
			onBeforeUpload(file, index) {
				if (file.size > 51200) {
					this.$refs['toast'].open('图片大小不能大于50K');
					return false;
				}
			}
		}
	}
</script>

<style lang="scss">
	.uni-search-box {
		padding-top: 36.23rpx;
	}

	.publish-categroy {
		margin-top: 36.23rpx;

	}


	.next-btn {
		position: fixed;
		left: 0;
		right: 0;
		background: #fff;
		width: 100%;
		bottom: 0;
		z-index: 99;
		padding: 16.3rpx 72.46rpx;

		button {

			width: 576.08rpx;
			height: 72.46rpx;
			line-height: 72.46rpx;
			background: #44a78d;
			border-radius: 181.15rpx;
			text-align: center;
			font-size: 32.6rpx;
			color: #fff;
			cursor: pointer;

		}
	}

	/*发布页面*/
	.pb60 {
		padding-bottom: 108.69rpx;
	}

	.upload-images {
		display: block;
		text-align: center;
	}

	.m-cl-box {
		display: block;
		padding:7.24rpx 18.11rpx;
	}

	.m-cl-pt15 {
		padding: 0 27.17rpx 0 45.28rpx;
	}

	.brand-bg {
		margin-bottom: 0 !important;

		.cl-card__container {
			background-color: #f6f6f6;
			border-radius: 3px;
			border: solid 1px #e2e2e2;
			height: 72.46rpx;
			line-height: 72.46rpx;
			padding: 0 18.11rpx !important;
		}
	}
</style>
