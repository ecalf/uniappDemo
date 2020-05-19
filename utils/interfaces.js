
 // #ifndef H5
 const domain = "http://192.168.1.14:8005/api.php";
 // #endif
// #ifdef H5
const domain = "/api";
// #endif
const interfaces = {
	// 获取首页数据
	getBannerData: domain + "",
	
	//获取产品类目
	getCategroyData: domain + "/v1/category/get-product-cate-list",
	
   //注册
   getRegisterData:domain+"/v1/user/register",
   
   //发送验证码
	getCodeData:domain+"/v1/msg/send",
	
	//登录
	getLoignData: domain + "/v1/user/login",
	//个人认证
	getPersonData: domain + "/v1/user/identification",
	// 公司主页信息
	getManagerData: domain + "/v1/user/company_info_edit",
	// 企业认证
	getCorporateData: domain + "/v1/user/identification"
}
module.exports = interfaces;