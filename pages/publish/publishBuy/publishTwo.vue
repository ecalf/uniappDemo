<template>
	<view class="pb60">

		<cl-form ref="form" :model.sync="publishData">
			<view class="uni-form-item m-form-item">
				<text class="colorred">*</text>
				<cl-form-item label="" class="uni-input">
					<cl-input placeholder="标题" class="uni-tl-input" v-model="publishData.title"></cl-input>
				</cl-form-item>
			</view>
			<view class="uni-form-item">
				<textarea class="uni-input uni-tl-input uni-textarea" v-model="publishData.desc" placeholder="描述"></textarea>
			</view>
			<view class="uni-form-item upload-images">
				<u-upload 
					ref="uUpload" 
					:custom-btn="false" 
					:action="action"
					:auto-upload="true" 
					:max-count="1" 
					:width="145" 
					name="image"
					testref="image1"
					@on-choose-complete="onChooseComplete"
					@on-list-change="onListChange" 
					@on-change="onChange"
					@on-success="onSuccess"
					@on-uploaded="onUploaded" 
				></u-upload>
			</view>
			<view class="uni-form-item">
				<view class="uni-input uni-input-left">
					<view @tap="handleTap('picker1')" class="brand-bg">
						<view class="title">{{brandvalue}}</view>
						<cl-icon name="cl-icon-arrow-bottom"></cl-icon>
					</view>
					<lb-picker v-model="brandvalue" ref="picker1" :props="brandProps" :list="selectbrand" @change="brandChange">
					</lb-picker>

				</view>

			</view>

			<view class="uni-form-item m-form-item">
				<view class="title">其他品牌</view>
				<cl-form-item label="" class="uni-input">
					<cl-input placeholder="请输入品牌" v-model="publishData.otherBrand"></cl-input>
				</cl-form-item>
			</view>
			<view class="uni-form-item m-form-item">
				<view class="title"><text class="colorred">*</text>数量</view>
				<view class="uni-input uni-input-left m-flex">

					<cl-input class="inline-block" placeholder="请输入数量" v-model="publishData.num"></cl-input>
					<view class="unit-picker">
						<view @tap="handleTap('Unitpicker')"><text class="curunit">{{curUnit}}</text><text>(单位)</text></view>
						<lb-picker v-model="curUnit" ref="Unitpicker" :props="UnitProps" :list="selectUnit" @change="Unithange">
						</lb-picker>
						
					</view>
				</view>
			</view>
			<view class="uni-form-item m-form-item">
				<view class="title">出口国</view>
				<inputSearch class="uni-input" :dataSource="dataSource" @select="handleChange" placeholder="" />
			</view>
			<view class="uni-form-item m-form-item">
				<view class="title"><text class="colorred">*</text>价格</view>
				<cl-form-item label="" class="uni-input">
					<cl-input placeholder="￥ 0.00" v-model="publishData.price"></cl-input>
				</cl-form-item>
			</view>
			<view class="qualifications">
				<view class="title"><text class="colorred">*</text>资质</view>
				<view class="checkbox-list">
					<checkbox-group @change="qualtChange" class="checkbox-item-box pb0">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in qualtitems" :key="item.value">
							<checkbox :value="item.cn_name" :checked="item.checked" color="#44a78d" style="transform:scale(0.7)" />
							<image :src="item.icon" mode=""></image>
						</label>
					</checkbox-group>
				</view>
			</view>
			<view class="uni-form-item">
				<view class="title"><text class="colorred">*</text>截止日期</view>
				<cl-form-item label="" class="uni-input" prop="date" justify="end">
					<cl-select mode="date" placeholder="请点击选择" v-model="publishData.deadtime"></cl-select>
				</cl-form-item>
			</view>
			<view class="uni-form-item">
				<view class="title"><text class="colorred">*</text>用途</view>
				<view class="uni-input">
					<radio-group @change="radioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in useItems" :key="index">
							<radio :value="item.value" color="#44a78d" style="transform:scale(0.7)" />{{item.name}}
						</label>
					</radio-group>
				</view>
			</view>
			<view class="uni-form-item more-upload">
				<u-upload 
					ref="uUpload_2" 
					:custom-btn="customBtn" 
					:show-upload-list="true" 
					:action="action" 
					:auto-upload="true"
					:file-list="fileList" 
					:show-progress="true" 
					:deletable="true" 
					:max-count="8" 
					width="145"
					uploadText=""
					name="image"
					testref="image2"
					
					@on-list-change="onMoreChange"
					@on-success="onSuccess_2"
					>
					<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<cl-icon name="cl-icon" :size="50" color="#E2E2E2" class="icon-jia"></cl-icon>
					</view>
				</u-upload>
			</view>
			<view class="size-text">单张大小<text>5M</text>以内</view>

			<view class="checkbox-list checkbox-list-bottom">
				<view class="checkbox-item" v-for="(item,index) in serviceList" :class="{'isChecked':Listids.indexOf(item.id)>=0}"
				 :key="index" @tap="checkboxChange(item.id)">
					<view class="title">{{item.name}}<text class="iconfont">&#xe616;</text></view>
					<view class="checkboxbg">
						<view class="dec-text">{{item.name}}
							<view class="iconfont">&#xe614;</view>
						</view>
						<view class="price">
							<text>￥{{item.price}}/份</text>
							<cl-icon v-if="Listids.indexOf(item.id)<0" name="cl-icon" :size="40" color="#E2E2E2" class="checkbox-icon cl-icon-round-check"></cl-icon>
							<cl-icon v-else name="cl-icon" :size="40" color="#44a78d" class="checkbox-icon cl-icon-round-check-fill"></cl-icon>
						</view>
					</view>
				</view>

			</view>
			<view class="common-btn">
				<button @tap="publishSubmit">立即发布</button>
			</view>
		</cl-form>


	</view>
</template>

<script>
	import inputSearch from '@/components/p-inputSearch/inputSearch'
	import combox from '@/components/uni-combox/uni-combox'
	import interfaces from '@/utils/interfaces'
	import uUpload from '@/components/u-upload/u-upload'
	import LbPicker from '@/components/lb-picker'
	export default {
		components: {
			inputSearch,
			uUpload,
			LbPicker,
		},
		data() {
			return {
				publishData: {
					type: "", //类型1 发布采购 2 发布销售 3 委托销售	
					cate_id: '', //品类id
					brand_id: '', //品牌id
					title: '', //标题
					desc: '', //描述
					brand: '', //品牌选择
					otherBrand: '', //其他品牌,非必选
					country: '', //出口国,非必填
					supplierPrice: '', //供应商价格,仅发布销售可用
					price: '', //市场价	
					num: '', //数量
					unit_cate_id: '1', //单位id
					qualification: '', //资质
					use_way: '', //用途
					productImg: '', //上传图片-产品
					deadtime: '', //截止时间
					info: '', //产品详情图
					service_id: ''
				},
				dataSource: [], //出口国家
				brandvalue: '请选择品牌', //当前选择品牌
				selectbrand: [], //选择品牌
				selectUnit: [],//选择单位
				curUnit:'',//当前选择单位
				action: interfaces.getUploadData,
				filesArr: [],
				// 预置上传列表
				fileList: [],
				customBtn: false,
				lists: [], // 组件内部的文件列表
				Listids: [],//选择增值服务
				isCheckAll: false,
				useItems: [{
						value: '1',
						name: '民用',

					},
					{
						value: '2',
						name: '医用',
					},
				],
				serviceList: [{
						id: '1',
						name: '置顶',
						price: '30',

					},
					{
						id: '2',
						name: '加急',
						price: '30'
					},
				],
				qualtitems: [],
				brandProps: {
					label: 'cn_name',//下拉值
					value: 'cn_name',//显示值
					brandid: 'id'
				},
				UnitProps: {
					label: 'cn_name',//下拉值
					value: 'cn_name',//显示值
					unitid: 'id'
				}

			}

		},

		onLoad(option) {
			this.initData(); //初始化数据
			this.countryData(); //出口国
			this.publishData.type = option.type;
			this.publishData.cate_id = option.cate_id;


		},
		methods: {
			initData() {
				// const fromfile=new FormData();
				// fromfile.append('image',file);
				
				//品牌种类
				this.request({
					url: interfaces.getBrandData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: {
						data: {
							cate_id: 3
						}
					},
					success: ((res) => {
						this.selectbrand = res.data;
					})
				});
				//获取资质种类分类列表
				this.request({
					url: interfaces.getqualtData,
					dataType: "JSON",
					method: 'POST', //请求方式
					success: ((res) => {
						this.qualtitems = res.data;
					})
				});
				//获取单位
				this.request({
					url: interfaces.getUnitData,
					dataType: "JSON",
					method: 'POST', //请求方式
					success: ((res) => {
						this.selectUnit = res.data;
						//console.log(this.selectUnit);
					})
				});
			},

			//出口国
			countryData() {
				this.request({
					url: interfaces.getCountryData,
					dataType: "JSON",
					method: 'POST', //请求方式
					success: ((res) => {
						this.dataSource = res.data;
					})
				});
			},

			handleChange(data) { //获取出口国
				this.exit_country = data;
			},
			onChooseComplete(lists){
				console.log('onChooseComplete 每次选择图片后触发',  lists);
				
				
			},
			onListChange(lists) { //上传产品主图
				console.log('onListChange 图片列表发生改变：在列表中添加或删除图片');
				console.log(this.fileList);
			},
			onChange(data, index, lists) {
				console.log('onChange as on-change handler, 每张图片上传完毕，无论成功与否，在上传组件 complete 内触发',  data, index, lists);
			},
			onSuccess(data,index,lists){
				console.log('onSuccess 每张图片上传完毕触发',data,index,lists);
				data = JSON.parse(data);
				this.productImg = data.data.img_url;
				console.log('this.productImg >>>',this.productImg );
			},
			onUploaded(lists){
				console.log('onUploaded 所有图片上传完毕触发',lists);
			},
			onMoreChange(lists) { //上传产品详情
				this.lists = lists;
				console.log('onMoreChange',lists);
			},
			onSuccess_2(data,index,lists){
				console.log('onSuccess_2 每张图片上传完毕触发',data,index,lists);
				data = JSON.parse(data);
				let imgUrl = data.data.img_url;
				console.log('imgUrl>>>',imgUrl);
			},

			handleTap(name) { //picker弹出
				this.$refs[name].show()
			},
			brandChange(item) { //品牌id 
				this.publishData.brand_id = item.item.id;
			},
			Unithange(item) { //单位id
				this.publishData.unit_cate_id = item.item.id;
			},
			radioChange: function(e) { //用途选择
				this.publishData.use_way = e.detail.value;
			},
			qualtChange: function(e) { //资质证书
				var items = this.qualtitems,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.indexOf(item.value) >= 0) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
				var data = values.join(',');
				this.publishData.qualification = data
			},
			checkboxChange: function(id) { //选择增值服务
				var ids = this.Listids.indexOf(id);
				if (ids >= 0) {
					//如果包含了该ID，则删除（单选按钮由选中变为非选中状态）
					this.Listids.splice(ids, 1);
				} else {
					//选中该按钮
					this.Listids.push(id);		
				}
				var serviceId=this.Listids.join(',');
				this.publishData.service_id = serviceId
			},
			successlist:function(data, index, lists){
				console.log(data, index, lists);
				//const formdata=new FormData();
				//formdata.append("image",data.name);
			},
			publishSubmit() {
								
				let params = {
					data: {
						type: this.publishData.type,
						cate_id: this.publishData.cate_id,
						title: this.publishData.title,
						desc: this.publishData.desc,
						productImg: this.productImg,
						otherBrand: this.publishData.otherBrand,
						brand_id: this.publishData.brand_id,
						num: this.publishData.num,
						exit_country: this.exit_country,
						price: this.publishData.price,
						deadtime: this.publishData.deadtime,
						use_way: this.publishData.use_way,
						qualification: this.publishData.qualification,
						unit_cate_id: this.publishData.unit_cate_id,
						service_id: this.publishData.service_id
					}
				}
				
				
				console.log('publishSubmit begin, params:',params);
				this.request({
					url: interfaces.getPublishData,
					dataType: "JSON",
					method: 'POST', //请求方式
					data: params,
					success: ((res) => {
						if (res.code !== 200) {
							uni.showToast({
								title: res.message,
								icon: "none"
							});
						}
					})
				});
			},

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

	.upload-images {
		display: block;
		text-align: center;
	}

	.m-cl-box {
		display: block;
		padding: 7.24rpx 18.11rpx;
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
