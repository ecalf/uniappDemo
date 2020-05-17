<template>
	<view class="input-group">
		<input :placeholder="placeholder" @input="search" @blur="hideList" v-model="name" />
		<view class="ul">
			<view class="li" v-for="(item,index) in list" :key="index" @tap="select(item)">{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: String, //默认提示
			searchKey: String, //模糊搜索的key值
			dataSource: {
				type: Array,
				default: function() { //数据源
					return [];
				}
			}
		},
		data() {
			return {
				list: [],
				name: '',
				backName: ''
			};
		},
		destroyed() {
			clearTimeout(this.t);
		},
		methods: {
			search(e) {
				let val = e.detail.value;
				let {dataSource} = this;
				let arr = [];
				for (let i = 0; i < dataSource.length; i++) {
					if (dataSource[i].name.indexOf(val) !== -1) {
						arr.push(dataSource[i]);
					}
				}
				
				if (!val) {
					this.list = [];
				} else {
					this.list = arr;
				}
			},
			select(item) {
				//console.log(item.name);
				this.backName = item.name;
				this.list = [];
				this.$emit('select', item.name);	
			},
			hideList() {
				this.t = setTimeout(() => {
					this.name = this.backName;
					
				}, 0);
			}
		}
	}
</script>


<style lang="scss">
	.input-group {
		input {
			font-size:25.36rpx;
			height:86.95rpx;
			line-height: 86.95rpx;
		}

		.ul {
			position: absolute;
			left: 3%;
			top:108.69rpx;
			width:94%;
			background:#ffffff;
			z-index:99;
			box-shadow:0 5px 5px rgba(0,0,0,.2);
			.li {
				height:72.46rpx;
				line-height:72.46rpx;
				text-align:left;
				padding:0 18.11rpx;
				border-bottom:1px solid #f2f2f2;
			}
		}
	}
</style>
