<template>
	<view>
		<form @submit="formSubmit">
			<view class="uni-form-item">
				<view class="title">选择国家</view>
				<view class="uni-input">
					<radio-group @change="radioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in countryList" :key="index">
							<radio :value="item.value" :checked="index === current" color="#44a78d" style="transform:scale(0.7)" />{{item.name}}
						</label>
					</radio-group>
				</view>
			</view>
			<!--中国-->
			<view class="country-list" v-if="current==0">
				<view class="uni-form-item">
					<view class="title">手机号码 </view>
					<view class="uni-input">
						<input type="text" name="mobile" v-model="registerForm.mobile" value="" placeholder="请输入手机号码" />
					</view>
				</view>
				<view class="uni-form-item">
					<view class="title">验证码 </view>
					<view class="uni-input">
						<view class="m-flex">
							<input type="text" name="code" class="m-input-fullwidth" value="" placeholder="" v-model="registerForm.code" />
							<text class="send-code" @tap="sendCode()" v-if="get_code">发送验证码</text>
							<text class="send-code" v-else>{{count}}秒后重新获取</text>
						</view>
					</view>
				</view>
				<view class="uni-form-item">
					<view class="title">设置密码 </view>
					<view class="uni-input">
						<input type="password" name="password" v-model="registerForm.password" value="" placeholder="请输入密码" />
					</view>
				</view>
				<view class="uni-form-item">
					<view class="title">确认密码 </view>
					<view class="uni-input">
						<input type="password" name="re_password" v-model="registerForm.re_password" value="" placeholder="请确认密码" />
					</view>
				</view>
			</view>
			<!--海外-->
			<view class="country-list" v-else>
				<view class="uni-form-item">
					<view class="title">用户名</view>
					<view class="uni-input">
						<input type="text" value="" v-model="user_name" placeholder="用户名" />
					</view>
				</view>

				<view class="uni-form-item">
					<view class="title">设置密码 </view>
					<view class="uni-input">
						<input type="password" value="" v-model="password" placeholder="请输入密码" />
					</view>
				</view>
				<view class="uni-form-item">
					<view class="title">确认密码 </view>
					<view class="uni-input">
						<input type="password" value="" v-model="re_password" placeholder="请确认密码" />
					</view>
				</view>
			</view>

			<view class="read-checkbox">
				<checkbox color="#44a78d" name="checkbox" style="transform:scale(0.7)"></checkbox>我已阅读并接受 <navigator> 用户协议</navigator>
				和 <navigator>
					隐私政策</navigator>
			</view>
			<view class="common-btn">
				<button form-type="submit">立即注册</button>
			</view>
		</form>
	</view>
</template>

<script>
	var graceChecker = require("@/utils/graceChecker.js");
	import interfaces from '@/utils/interfaces.js'
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				if (value === "") {
					uni.showToast({
						title: "请输入密码!",
						icon: "none"
					});
				} else {
					if (value.length < 8) {
						uni.showToast({
							title: "密码长度不能少于8位",
							icon: "none"
						});
					} else if (this.registerForm.re_password !== "") {
						//this.$refs.registerForm.validateField("re_password");
					}

				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === "") {
					uni.showToast({
						title: "请再次输入密码!",
						icon: "none"
					});
				} else if (value !== this.registerForm.password) {
					uni.showToast({
						title: "两次输入密码不一致!",
						icon: "none"
					});
				}
			};
			return {
				current: 0, //选择国家
				num: true,
				get_code: true,
				isgetcode: false, // 是否获取过code
				count: 60,
				country:"China",
				registerForm: {	
					mobile: "",
					code: "",
					password: "",
					re_password: "",
					state_code: "",
					checkbox: "",
					user_name:"",
					company_name: "",
					contact_name: "",
					organization_name: "",	
					type: ""
				},
				countryList: [{
						value: 'China',
						name: '中国',
					},
					{
						value: 'America',
						name: '国外',
					},
				],
				//定义表单规则
				rules: [{
						name: "mobile",
						checkType: "phoneno",
						checkRule: "",
						errorMsg: "请输入正确的手机号"
					},
					{
						name: "code",
						checkType: "string",
						checkRule: "6,6",
						errorMsg: "请输入验证码"
					},
					{
						name: "password",
						//checkType: "reg",
						checkRule: validatePass,
					},
					{
						name: "re_password",
						//checkType: "reg",
						checkRule: validatePass2,
					},
					{
						name: "checkbox",
						checkType: "string",
						checkRule: "",
						errorMsg: "您未勾选同意我们的相关注册协议"
					},
				]
			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			this.type = option.type; //打印出上个页面传递的参数。
			
		},
		methods: {
			radioChange: function(evt) { //选择国家
				for (let i = 0; i < this.countryList.length; i++) {
					if (this.countryList[i].value === evt.target.value) {
						this.current = i;
						//this.registerForm.country = evt.target.value; //获取国家
						break;
					}

				}
				this.country = evt.target.value; //获取国家
			},
			//发送验证码
			sendCode() {
				if (this.registerForm.mobile !== "") {
					this.get_code = false;
					this.isgetcode = true;
					let interval = setInterval(() => {
						this.count--;
						if (this.count < 1) {
							this.get_code = true;
							this.count = 60;
							clearInterval(interval);
						}
					}, 1000);
				} else {
					uni.showToast({
						title: "请输入手机号",
						icon: "none"
					});
				}
				this.request({
					url: interfaces.getCodeData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							mobile: this.registerForm.mobile,
							type: 2 //1.login  2.register
						}
					},
					success: ((res) => {
						console.log(res);
					})
				})
			},
			formSubmit: function(e) {
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, this.rules);
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
				console.log(this.registerForm.country,this.type);
				this.request({
					url: interfaces.getRegisterData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							mobile: this.registerForm.mobile,
							code: this.registerForm.code,
							password: this.registerForm.password,
							re_password: this.registerForm.re_password,
							state_code: this.country == 'China' ? 86 : '', //国家代号,暂只处理中国设为86,国外为空
							user_name:'',
							company_name: '',
							contact_name: '',
							organization_name: '',
							country: this.country,
							type: this.type //注册类型 1个人 2 机构 3企业
						}
					},
					success: ((res) => {			
						if (res.code !== 200) {
							uni.showToast({
								title: res.message,
								icon: "none"
							});
						}
					}),
					fail: ((error) => {
						
					})


				});
			}

		}
	}
</script>

<style>

</style>
