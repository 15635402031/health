<template>
	<view>
		<view class="name">
			<view>姓名</view>
			<text>{{addHealthCard.name}}</text>
		</view>
		
		<view class="row b-b">
			<text class="tit">性别</text>
			<input class="input" type="text" v-model="addHealthCard.gender"/>
		</view>
		<view class="row b-b">
			<text class="tit">年龄</text>
			<input class="input" type="text" v-model="addHealthCard.age"/>
		</view>
		<view class="row b-b">
			<text class="tit">发证机构</text>
			<input class="input" type="text" v-model="addHealthCard.organization"/>
		</view>
		<view class="row b-b">
			<text class="tit">体检日期</text>
			<input class="input" type="text" v-model="addHealthCard.date"/>
		</view>
		<view class="row b-b">
			<text class="tit">类别</text>
			<input class="input" type="text" v-model="addHealthCard.type"/>
		</view>
		<view class="row b-b">
			<text class="tit">就业单位</text>
			<input class="input" type="text" v-model="addHealthCard.compony"/>
		</view>
		<view class="row b-b">
			<text class="tit">上传健康证</text>
			<view class="add" @click="selectImg">
				<text class="jia">+</text>
				<text>添加健康证</text>
				<image :src="idCardImg" v-if="idCardImg!==''?true:false" @tap='previewImage'></image>
			</view>
		</view>
		<view style="margin-top:38upx;">
			<button type="primary" @tap="uploadMsg"  style="font-size: 32rpx;">上传信息</button>
		</view>
	</view>
</template>

<script>
	import uniRequest from 'uni-request'
	var _self;
	export default {
		data() {
			return {
				addHealthCard:{
					name:'',
					age:'',
					organization:'',
					gender:'',
					date:'',
					compony:'',
					type:''
				},
				idCardImg:'../../static/idcard1.png'
			}
		},
		onLoad:function(){
			_self = this;
		},
		methods: {
			async uploadMsg(){
				try{
					const response = await uniRequest.post('http://192.168.2.178:85/users/imgFile',{
							imgFile:'4772ac5c0fb2417e858c790850186b49',
							wxId:1234156789135
					})
				}catch(e){
					console.log(e)
				}
				
			},
			selectImg: function(){
				uni.chooseImage({
						count: 1, //默认
					    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					    sourceType: ['album'], //从相册选择
					    success: function (res) {
							_self.idCardImg = res.tempFilePaths[0]
					        console.log(_self.idCardImg);
							// console.log(JSON.stringify(res.tempFilePaths))
							
					    }
				})
				
				
			},
			previewImage:function(){
				if(_self.idCardImg !== '../../static/idcard1.png'){
					// uni.previewImage({
					// 	urls:[_self.idCardImg]
					// })
				}
			}
		}
	}
</script>

<style scoped lang="scss">
		
	.name{
		padding-left: 62rpx;
		margin-top: 32rpx;
		margin-bottom: 15rpx;
		view{
			font-size: 28rpx;
			margin-bottom: 10rpx;
			color: #666666;
		}
		text{
			width: 630rpx;
			height: 88rpx;
			line-height: 88rpx;
			display: block;
			// margin: 0 auto;
			background-color: #EFEFEF;
		}
	}
	.row{
		padding-left: 62rpx;
		margin-bottom: 15rpx;
		.tit{
			font-size: 28rpx;
			margin-bottom: 10rpx;
			color: #666666;
		}
		.input{
			width: 630rpx;
			height: 88rpx;
			line-height: 88rpx;
			display: block;
			// margin: 0 auto;
			background-color: #FFFFFF;
		}
	}
	.add{
		width: 630rpx;
		height: 332rpx;
		line-height: 332rpx;
		// margin: 0 auto;
		background-color: #FFFFFF;
		text-align: center;
		position: relative;
		image{
			width: 630rpx;
			height: 332rpx;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
</style>
