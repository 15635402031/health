<template>
	<view>
		<!-- <h1>实名认证名字</h1> -->
		<view>
			<uni-notice-bar showIcon="true" text="请确认您的身份证信息正确无误..." class="message" style="background-color: #FFFEEE;"></uni-notice-bar>
			<view class="row b-b">
			            <text class="tit">姓名</text>
			            <input class="input" type="text" v-model="addressData.name"   placeholder-class="placeholder"/>
						<!-- <text class="input">name</text> -->
			        </view>
			        <view class="row b-b">
			            <text class="tit">身份证号</text>
			            <input class="input" type="text" v-model="addressData.idCard"  placeholder-class="placeholder" />
						<!-- <text class="input">142724199507263318</text> -->
			        </view>
			        <view class="card">
						<image src="../../static/idcard1.png"></image>
					</view>
			
			        <button class="add-btn" @click="confirm">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressData:{
					name:'',
					idCard:''
				}
			}
		},
		methods: {
			confirm() {
					let data = this.addressData;
					console.log(JSON.stringify(data))
	
				},
		}
	}
</script>

<style scoped lang="scss">
	  page {
	        padding-top: 16upx;
	    }
		.card{
			image{
				width: 630rpx;
				height: 332rpx;
				display: block;
				margin: 0 auto;
			}
		}
	    .row {
	        display: flex;
	        align-items: center;
	        position: relative;
	        padding: 0 30upx;
	        height: 110upx;
	        background: #fff;
			margin-bottom: 20rpx;
	        .tit {
	            flex-shrink: 0;
	            width: 120upx;
	            font-size: 30upx;
	
	        }
	
	
	        .icon-shouhuodizhi {
	            font-size: 36upx;
	
	        }
	    }
	
	    .add-btn {
	        display: flex;
	        align-items: center;
	        justify-content: center;
	        width: 690upx;
	        height: 80upx;
	        margin: 60upx auto;
	        background-color: #46A8FF;
	        color: #fff;
	
	        border-radius: 10upx;
	        box-shadow: 1px 2px 5px rgba(28, 42, 134, 0.4);
	    }
</style>
