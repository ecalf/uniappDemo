const domain = "/api";
const interfaces = {
	// 获取首页数据
	getBannerData: domain + "",
	
	//获取产品类目
	getCategroyData: domain + "/v1/category/get-product-cate-list",
	
}
module.exports = interfaces;