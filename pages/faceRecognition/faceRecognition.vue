<template>
	<view>
		<h1>人脸识别</h1>
		<button @click="goAddhealth">识别成功跳转</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goAddhealth(){
				uni.navigateTo({
					url:'../addHealth/addHealth'
				})
			}
		}
	}
</script>

<style>

</style>
