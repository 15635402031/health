<template>
	<view>
			<view class="row b-b">
				<text class="tit">手机号</text>
				<input class="input" type="text" v-model="user.tel" placeholder="请输入手机号"  placeholder-class="placeholder"/>
			</view>
			<view class="row b-b">
				<text class="tit">验证码</text>
				<input class="input" type="text" v-model="user.code" placeholder="请输入验证码" placeholder-class="placeholder" />
				<button class="send" @tap="sendCode" :disabled="disabled">{{send}}</button>
			</view>
			<button class="add-btn" @click="confirm">绑定</button>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:{
					tel:'',
					code:''
				},
				 disabled:false,
				 send:'发送'
			}
		},
		methods: {
			async confirm(){
				const { data } = await this.request({
					url:'wxLogin',
					data:{
						openId:'of5gGuCk8tbvgbf_5qnWDkCvoACE',
						
					}
				})
				console.log(data)
				console.log(JSON.stringify(this.user))
				// if(data.state===200){
				// 	uni.navigateTo({
				// 		url:'../my/index'
				// 	})
				// }
			},
			 sendCode(){
						let self = this
						//验证码
						self.disabled = true;
						var time = 10;                //时间为10s，可以按情况更改 
						var timer = setInterval(fun, 1000);  //设置定时器 
						function fun() { 
							time--; 
							if(time>=0) { 
								self.send = time + "s"; 
							}else if(time<0){ 
								self.send = "发送"; 
								self.disabled = false;  //倒计时结束能够重新点击发送的按钮 
								clearInterval(timer);  //清除定时器 
								time = 10;  //设置循环重新开始条件 
							} 
						} 
					}
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
			.send{
				position: absolute;
				right: 16rpx;
				width: 160rpx;
				height: 60rpx;
				line-height: 60rpx;
				background-color: #889AAA;
				color: #FFFFFF;
				font-size: 28rpx;
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
