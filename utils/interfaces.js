// #ifndef H5
const baseurl = "http://192.168.1.14:8005/api.php";
// #endif
// #ifdef H5
const baseurl = "/api";
// #endif
const interfaces = {
	// 获取首页数据
	getBannerData: baseurl + "",

	//获取产品类目
	getCategroyData: baseurl + "/v1/category/get-product-cate-list",
	
	//获取品牌种类
	getBrandData: baseurl + "/v1/category/get-brand-list",
	
	//获取资质种类分类列表
	getqualtData: baseurl + "/v1/category/get-qualification-cate-list",
	
	//获取单位类别
	getUnitData: baseurl + "/v1/category/get-unit-category",
	//获取出口国
	getCountryData: baseurl + "/v1/user/countrylist",
	
	//发布
	getPublishData: baseurl + "/v1/needs/publish",
	
	//图片上传
	getUploadData: baseurl + "/v1/upload",
	
   //注册
   getRegisterData:baseurl+"/v1/user/register",
   //发送验证码
	getCodeData:baseurl+"/v1/msg/send",
	//登录
	getLoignData: baseurl + "/v1/user/login",
	
	//个人认证
	getPersonData: baseurl + "/v1/user/identification",
	
	// 公司主页信息
	getManagerData: baseurl + "/v1/user/company_info_edit",
	
	// 认证
	getCorporateData: baseurl + "/v1/user/identification"
}
module.exports = interfaces;
