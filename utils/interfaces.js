const domain = "/api";
const interfaces = {
	// 获取首页数据
	getBannerData: domain + "",
	
	//获取产品类目
	getCategroyData: domain + "/v1/category/get-product-cate-list",
	
	//登录
	getLoignData: domain + "/v1/user/login",
	
	//个人认证
	getPersonData: domain + "/v1/user/identification",
	
}
module.exports = interfaces;