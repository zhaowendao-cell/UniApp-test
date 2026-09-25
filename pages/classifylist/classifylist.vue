<template>
	<view class="classifylist">
		<view v-for="(item, index) in imgArr" class="box" :key="index">
			<image :src="item" mode="aspectFill" class="pic" style="width:210rpx;height:430rpx;"></image>
		</view>


	</view>
</template>

<script>
	export default {
		onLoad() {
			// 读取全局数据，兜底为空数组
			this.imgArr = getApp().globalData.images || []
		},

		data() {
			return {
				imgArr: []

			}
		}
	}
</script>

<style lang="scss" scoped>
	.classifylist {
		//上 → 右 → 下 → 左
		//外边距
		margin: 10rpx 0rpx 30rpx 25rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		//内边距
		padding: 10rpx;


		.box {
			margin-top: 10rpx;

			.pic {
				width: 100%;
				height: 100%;
				//圆角
				border-radius: 5rpx;
			}

		}
	}
</style>