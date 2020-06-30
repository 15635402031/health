<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="isShow" class="q">{{title}}</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '张三丰',
				a:0
			}
		},
		onLoad() {

		},
		methods: {
			isShow(){
				console.log(this.a++);
				uni.navigateTo({
					url: '../my/index'
				})
			}
		}
	}
</script>

<style>
.q{
	width: 375px;
	background-color: red;
	font-size: 32rpx;
	text-align: center
}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
