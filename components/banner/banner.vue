<template>
	<view>
		<view class="banner">
			<swiper indicator-dots 
			class="swiper"
			indicator-color="rgba(255,255,255,0.5)"
			indicator-active-color="#fff" 
			autoplay="false"  
			interval="5000" 
			duration="500" 
			circular="false">
				<swiper-item
				class="banner-box" 
				v-for="(src,index) in arr" 
				:key="index">
					<image class="image" :src="src" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name:"banner",
		data() {
			return {
			};
		},
		mounted(){
		//console.log("banner组件挂载完成")
		},
		props:{
			arr: {
			  type: Array,
			  default(){
				  return[]
			  }
			}
		},
	}
</script>

<style lang="scss" scoped>
.banner{
		width: 750rpx;
		padding: 3rpx 0rpx ;
		.swiper{
			width: 750rpx;
			height: 500rpx;
			.banner-box{
				padding: 0 30rpx ;
				box-sizing: border-box;
				.image{
					width: 100%;
					height: calc(85%);
					margin: 30rpx auto;
					border-radius: 15rpx;
					}
			}
		}
}
</style>