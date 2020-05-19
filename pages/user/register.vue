<template>
	<view>
		<form @submit="formSubmit" @reset="formReset">
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

				<view class="uni-form-item" v-if="registerForm.type==2">
					<view class="title">机构名称 </view>
					<view class="uni-input">
						<input type="text" name="organization" v-model="registerForm.organization_name" value="" placeholder="请输入机构名称" />
					</view>
				</view>

				<view class="uni-form-item" v-if="registerForm.type==3">
					<view class="title">企业名称 </view>
					<view class="uni-input">
						<input type="text" name="company" v-model="registerForm.company_name" value="" placeholder="请输入公司名称" />
					</view>
				</view>

				<view class="uni-form-item" v-if="registerForm.type==3">
					<view class="title">联系人</view>
					<view class="uni-input">
						<input type="text" name="contact" v-model="registerForm.contact_name" value="" placeholder="请输入联系人" />
					</view>
				</view>

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
				<view class="uni-form-item" v-if="registerForm.type==2">
					<view class="title">机构名称 </view>
					<view class="uni-input">
						<input type="text" name="organization" v-model="registerForm.organization_name" value="" placeholder="请输入机构名称" />
					</view>
				</view>
				<view class="uni-form-item" v-if="registerForm.type==3">
					<view class="title">企业名称 </view>
					<view class="uni-input">
						<input type="text" name="company" v-model="registerForm.company_name" value="" placeholder="请输入公司名称" />
					</view>
				</view>
				<view class="uni-form-item">
					<view class="title">用户名</view>
					<view class="uni-input">
						<input type="text" name="username" value="" v-model="registerForm.user_name" placeholder="用户名" />
					</view>
				</view>

				<view class="uni-form-item">
					<view class="title">设置密码 </view>
					<view class="uni-input">
						<input type="password" value="" v-model="registerForm.password" placeholder="请输入密码" />
					</view>
				</view>
				<view class="uni-form-item">
					<view class="title">确认密码 </view>
					<view class="uni-input">
						<input type="password" value="" v-model="registerForm.re_password" placeholder="请确认密码" />
					</view>
				</view>
			</view>

			<view class="read-checkbox">
				<checkbox color="#44a78d" :checked="isChecked" @tap="isChecked = !isChecked" name="checkbox" style="transform:scale(0.7)"></checkbox>我已阅读并接受
				<navigator> 用户协议</navigator>
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
			
			return {
				current: 0, //选择国家
				num: true,
				get_code: true,
				isgetcode: false, // 是否获取过code
				count: 60,
				country: "China",
				isChecked: false,
				registerForm: {
					mobile: "",
					code: "",
					password: "",
					re_password: "",
					state_code: "",
					checkbox: "",
					user_name: "",
					company_name: "",
					contact_name: "",
					organization_name: "",
					type: "", // 1个人 2机构 3公司
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
						name: "organization",
						checkType: 'notnull',
						checkRule: "",
						errorMsg: "请输入组织名称"
					},
					{
						name: "company",
						checkType: "notnull",
						checkRule: "",
						errorMsg: "请输入公司名称"
					},
					{
						name: "username",
						checkType: "notnull",
						checkRule: "",
						errorMsg: "请输入联系人"
					},
					{
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
						checkType: "notnull",
						checkRule: "",
						errorMsg: "请输入密码"
					},
					// {
					// 	name: "re_password",
					// 	checkType: "same",
					// 	checkRule: "this.registerForm.re_password,this.registerForm.password",
					// 	errorMsg: "两次输入的密码不一致"
					// },
				]
			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			this.registerForm.type = option.type; //打印出上个页面传递的参数。
			// console.log(this.registerForm.type);
		},
		computed: {
			verify: function() {
				if (this.registerForm.password == '') {
					return {
						"flag": false,
						"msg": '请输入密码'
					};
				}
				if (this.registerForm.password.length < 8) {
					return {
						"flag": false,
						"msg": '密码长度至少大于8位'
					};
				}
				if (this.registerForm.password != this.registerForm.re_password) {
					return {
						"flag": false,
						"msg": '两次输入的密码不一致'
					};
				}
				if (this.isChecked == false) {
					return {
						"flag": false,
						"msg": '请勾选我们的协议'
					};
				}
				return {
					"flag": true
				};
			},
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
				this.registerForm.password = ''
				this.registerForm.re_password = ''
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

				if (!checkRes) {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
				var verifyRes = this.verify.flag;
				if (!verifyRes) { //自定义验证规则
					uni.showToast({
						title: this.verify.msg,
						icon: "none"
					});
					 return;
				}
				if (checkRes) {
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
								user_name: this.registerForm.user_name,
								company_name: this.registerForm.company_name,
								contact_name: this.registerForm.contact_name,
								organization_name: this.organization_name,
								country: this.country,
								type: this.registerForm.type //注册类型 1个人 2 机构 3企业
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
			},

			formReset: function(e) {
				this.chosen = ''
			}

		}
	}
</script>

<style>

</style>
