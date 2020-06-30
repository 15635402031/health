<template>
	<view>
		<view v-if="token===''?true:false">
			<view style="width: 100%; height: 302rpx; background-color: #36424C;border-radius: 0 0 20rpx 20rpx;" class="cardText" @click="gorealName">
				<text>
					请先进行实名认证 >
				</text>
			</view>
			<view class="addHealth" @click="goaddHealth" >
				<image src="../../static/add_icon@2x.png" style="width: 36rpx; height: 36rpx;"></image>
				<text class="addMy">添加我的健康证</text>
			</view>
		</view>
		<view v-else>
			<view style="width: 100%; height: 302rpx; background-color: #36424C;border-radius: 0 0 20rpx 20rpx;" class="show" @click="gorealName">
				<text>钱多多</text>
				<text>1427241997072633158</text>
			</view>
			<view class="showaddHealth" @click="goaddHealth">
				<view class="top">
					<text>健康证</text>
					<button class="btn">查看证件照片</button>
				</view>
				<view class="name">
					<view>
						<text>姓名</text>
						<view>李先生</view>
					</view>
					<view>
						<text>姓名</text>
						<view>李先生</view>
					</view>
					<view>
						<text>姓名</text>
						<view>李先生</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token:'1'
			}
		},
		methods: {
			gorealName(){
				uni.navigateTo({
					url:'../real/real'
				})
			},
			goaddHealth(){
				uni.navigateTo({
					url:'../addHealth/addHealth'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.cardText{
		color: #FFFFFF;
		overflow: hidden;
		text{
			display: block;
			text-align: center;
			margin-top: 68rpx;
		}
	}
	.show{
		color: rgba(255, 255, 255, 1);
		padding-top: 40rpx;
		text{
			display: block;
			margin-left: 60rpx;
			margin-bottom: 10rpx;
		}
		text:nth-child(1){
			font-size: 36rpx;
		}
		text:nth-child(2){
			font-size: 28rpx;
		}
	}
	.addHealth{
		position: absolute;
		top: 192rpx;
		left: 30rpx;
		width:692rpx;
		height:184rpx;
		background:linear-gradient(170deg,rgba(68,217,153,1) 0%,rgba(69,216,226,1) 100%);
		opacity:1;
		border-radius:32rpx;
		// display: flex;
		// align-self:flex-start;
		padding-top: 140rpx;
		.addMy{
			// overflow: hidden;	
			color: #FFFFFF;
			// display: block;
			margin: 0 auto;
		}
		image{
			margin-left: 206rpx;
			margin-right: 15rpx;
		}
	}
	.showaddHealth{
		position: absolute;
		top: 192rpx;
		left: 30rpx;
		width:692rpx;
		height:584rpx;
		background:linear-gradient(170deg,rgba(68,217,153,1) 0%,rgba(69,216,226,1) 100%);
		opacity:1;
		padding: 0 20rpx;
		border-radius:32rpx;
	}
	.top{
		display: flex;
		justify-content: space-between;
		.btn{
			width: 210rpx;
			height: 50rpx;
			line-height: 50rpx;
			font-size: 24rpx;
			color: rgba(255, 255, 255, 1);
		}
	}
	.name{
		display: flex;
		justify-content: space-between;
	}
</style>
