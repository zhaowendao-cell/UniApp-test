<template>
	<view>
		<view class="BackToTop">
			<view class="item" @click="onTop">顶部</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"BackToTop",
		data() {
			return {
			};
		},
		mounted(){
		//console.log("BackToTop组件挂载完成")
		},
		methods:{
			onTop(){
				//页面滚动到特定位置
				uni.pageScrollTo({
					//回到0px
					scrollTop:0,
					duration:200,
				})
			}
			
		},
		
	}
</script>

<style lang="scss" scoped>
.BackToTop{
	position: fixed;
	right: 20rpx;
	bottom: 80rpx;
	//旧浏览器不识别env时使用0
	padding-bottom: 0px;
	//旧微信基础库，识别不了 env()。用env()会样式崩坏，使用constant（）
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
	.item{
		width: 80rpx;
		height: 80rpx;
		background: rgba(255,255,255,0.8);
		border-radius: 50%;
		margin-bottom:20rpx ;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>