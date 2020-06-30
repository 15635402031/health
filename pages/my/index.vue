<template>
	<view>
		<!-- 显示图标 -->
		<view class="nav">
				<image  src="../../static/logo.png"></image>
				<view class="name" style="color: #FFFFFF;font-size:40rpx;">姓名</view>
				<view class="biao">企业负责人</view>
				<span>15612341234</span>
				<view class="right">
					>
				</view>
				
		</view>
		
		<uni-notice-bar showIcon="true" text="XXX 已接受您的邀请，请在雇员管理中查看" class="message" style="background-color: #FFFFFF;"></uni-notice-bar>
		<view class="card">
			<view class="obtainCard" @click="goObtainMsg">
				<image src="../../static/practitioners_icon.svg" ></image>
				<text>从业信息</text>
			</view>
			<view class="firmCard">
				<image src="../../static/enterprise_icon.svg" ></image>
				<text>企业信息</text>
			</view>
		</view>
		<view class="policeCard">
			<image src="../../static/enterprise_icon.svg" ></image>
			<text>执法人员</text>
			<view class="isShow">
				认证中
			</view>
		</view>
	</view>	
	
	
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goObtainMsg(){
				uni.navigateTo({
					url: '../obtainMsg/obtainMsg'
				})
			}
		},
		components: {uniNoticeBar}
	}
</script>

<style scoped lang="scss">
		view{
			.nav{
				width:750rpx;
				height:276rpx;
				background:linear-gradient(225deg,rgba(70,168,255,1) 0%,rgba(148,159,254,1) 100%);
				opacity:1;
				overflow: hidden;
					.name{
						margin-top: 74rpx;
						float: left;
					}
					image{
						width: 122rpx;
						height: 122rpx;
						background-color: #eeeeee;
						margin:  70rpx 30rpx;
						float: left;
					}
					.biao{
						color: #FFFFFF;
						width: 136rpx;
						height: 35rpx;
						background-color: #FFC527;
						border-radius: 26px;
						float: left;
						font-size: 20rpx;
						text-align: center;
						margin-top: 83rpx;
						margin-left: 24rpx;
						padding-top: 5rpx;
					}
					span{
						position: absolute;
						left: 184rpx;
						top: 138rpx;
						color: #FFFFFF;
					}
					.right{
						color: #FFFFFF;
						position: absolute;
						right: 20rpx;
						top: 90rpx;
					}
			}
			/deep/.message{
				width:692rpx;
				height:86rpx;
				background:rgba(255,255,255,1);
				border:1rpx solid rgba(230,230,230,1);
				box-shadow:0rpx 6rpx 12rpx rgba(225,225,225,0.3);
				opacity:1;
				margin: 0,auto;
				border-radius:16px;
				margin-bottom: 20rpx;
				position: absolute;
				top: 118px;
				left: 12px;
			}
			
		}
		.card{
			display: flex;
			justify-content: space-around;
		}
		.obtainCard{
			width: 332rpx;
			height: 208rpx;
			background-color: #C4C4C4;
			margin: 70rpx 30rpx;
			float: left;
			border-radius: 16rpx;
			image{
				width: 100rpx;
				height: 100rpx;
				margin: 0rpx auto;
				display: block;
				margin-top: 20rpx;
			}
			text{
				color: #FFFFFF;
				display: block;
				text-align: center;
			}
		}
		.firmCard{
			width: 332rpx;
			height: 208rpx;
			background-color: #C4C4C4;
			margin: 70rpx 30rpx;
			float: right;
			border-radius: 16rpx;
			image{
				width: 100rpx;
				height: 100rpx;
				margin: 0rpx auto;
				display: block;
				margin-top: 20rpx;
			}
			text{
				color: #FFFFFF;
				display: block;
				text-align: center;
			}
		}
		.policeCard{
			background-color: #6FB5FB;
			width: 692rpx;
			height: 208rpx;
			margin: 0 auto;
			overflow: hidden;
			border-radius: 16rpx;
			image{
				width: 100rpx;
				height: 100rpx;
				margin-left: 188rpx;
				margin-top: 54rpx;
				float: left;
				overflow: hidden;
			}
			.isShow{
				background-color: #4A8ED2;
				transform: rotate(-45deg);
				position: relative;
				left: -190px;
				font-size: 28rpx;
				color: #FFFFFF;
				top: -10px;
				width: 300rpx;	
				text-align: center;
				overflow: hidden;
			}
			text{
				color: #FFFFFF;
				position: relative;
				top: 76rpx;
			}
		}
	
</style>
