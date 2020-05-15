<template>
	<view>
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column">
				<view class="title">企业银行名称</view>
				<input class="uni-input" name="nickname" placeholder="张小姐" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">开户银行</view>
				<input class="uni-input" name="nickname" placeholder="请输入开户行" />
			</view>
			<view class="uni-form-item uni-column uni-cc">
				<view class="title">银行账户</view>
				<input class="uni-input" name="nickname" placeholder="请输入银行账户" />
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">公司名称</view>
				<input class="uni-input" name="nickname" value="张小姐" />
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">纳税人识别号</view>
				<input class="uni-input" name="nickname" placeholder="请输入识别号" />
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">负责人姓名</view>
				<input class="uni-input" name="nickname" placeholder="请输入负责人姓名" />
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">公司类型</view>
				<input class="uni-input" name="nickname" placeholder="请输入公司类型" />
			</view>
			<view class="uni-form-item uni-column ">
				<view class="title">公司网址</view>
				<input class="uni-input" name="nickname" placeholder="请输入公司网址" />
			</view>
			<view class="uni-form-item uni-column uni-cc">
				<view class="title">所属行业</view>
				<input class="uni-input" name="nickname" placeholder="请输入所属行业" />
			</view>

			<button form-type="submit">
				<view class="authentication" >
					<text class="authentication-txt">立即认证</text>
				</view>
			</button>

		</form>
	</view>
</template>

<script>
	var graceChecker = require("../../../utils/graceChecker.js");
	export default {

		data() {
			return {

			};
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value), 666)
				//定义表单规则
				var rule = [{
					name: "nickname",
					checkType: "string",
					// checkRule: "1,3",
					errorMsg: "请输入内容"
				}, ];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if (checkRes) {
					uni.showToast({
						title: "验证通过!",
						icon: "none"
					});
				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		},
	}
</script>

<style lang="scss">
	.authentication {
		width: 576.08rpx;
		height: 72.46rpx;
		background-color: #44a78d;
		border-radius: 181.15rpx;
		position: fixed;
		left: 86.95rpx;
		bottom: 0rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		.authentication-txt {
			font-size: 32.6rpx;
			color: #fefefe;
		}
	}

	.uni-cc {
		margin-bottom: 18.11rpx;

	}
</style>
