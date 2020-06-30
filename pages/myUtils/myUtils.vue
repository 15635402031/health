<template>
	<view>
		<view class="textBcg">
			<text class="title">姓名</text>
			<text class="content">李秀莲</text>
		</view>
		<view class="textBcg">
			<text class="title">手机号</text>
			<text class="content">15635402031</text>
			<text class="change" @click="goCheckTel">修改</text>
		</view>
		<view class="textBcg">
			<text class="title">实名认证</text>
			<text class="content sure">{{isLogin===''?'未认证':''}}</text>
			<text class="change" @click="goReal">{{isLogin===''?'去认证':''}}</text>
		</view>
		<button class="logout">退出账号</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin:'' //获取token
			}
		},
		methods: {
			goCheckTel(){
				uni.navigateTo({
					url:'../checkTel/checkTel'
				})
				
			},
			goReal(){
				uni.navigateTo({
					url:'../real/real'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.textBcg{
		width:750rpx;
		height:112rpx;
		line-height: 112rpx;
		background:rgba(255,255,255,1);
		opacity:1;
		border-bottom:0.5rpx solid rgba(0, 0, 0, 0.1);
		.title{
			margin-left: 30rpx;
			font-size: 34rpx;
			color: #666666;
		}
		.content{
			position: absolute;
			left: 210rpx;
			font-size: 34rpx;
		}
		.change{
			float: right;
			margin-right: 30rpx;
			color: #46A8FF;
			font-size: 28rpx;
		}
		.sure{
			color: rgba(153, 153, 153, 1);
		}
	}
	.logout{
		width: 630rpx;
		height: 100rpx;
		line-height: 100rpx;
		background-color: #FF8585;
		color: #FFFFFF;
		position: absolute;
		bottom: 140rpx;
		left: 60rpx;
		font-size: 32rpx;
	}
</style>
