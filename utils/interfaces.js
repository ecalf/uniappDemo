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

	//采购，销售，委托采购，委托销售订单
	getNeedsData: baseurl + "/v1/needs/get-list",

	//采购，销售，委托采购，委托销售订单详情
	getInfoData: baseurl + "/v1/needs/get-info",

	//报价
	getQuotationData: baseurl + "v1/needs/quotation",

	//发布
	getPublishData: baseurl + "/v1/needs/publish",

	//图片上传
	getUploadData: baseurl + "/v1/upload",

	//首页分类列表
	getkindData: baseurl + "v1/category/get-product-kinds",

	//注册
	getRegisterData: baseurl + "/v1/user/register",
	//发送验证码
	getCodeData: baseurl + "/v1/msg/send",
	//登录
	getLoignData: baseurl + "/v1/user/login",

	//认证
	getPersonData: baseurl + "/v1/user/identification",

	// 公司主页信息
	getManagerData: baseurl + "/v1/user/company_info_edit",

	//我的订单
	getMyneedData: baseurl + "/v1/user/get-my-needs-list",

	//报价管理
	getMyquoteData: baseurl + "/v1/user/get-my-quotation-list",

	//用户详情
	getSupplierData: baseurl  + "/v1/user/myprofiles",
	
	// 企业信息
	getEnterpriseData:baseurl + "/v1/user/get-other-user-info",
	
	//需求订单状态修改
	getSatusData:baseurl + "/v1/needs/change-status",
	
	//供应商库
	PoolData:baseurl + "/v1/user/collect",
	
	//获取供应商库
	getPoolData:baseurl + "/v1/user/get-collect-list"

}
module.exports = interfaces;
