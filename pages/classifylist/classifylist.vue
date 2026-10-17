<template>
	<view class="classifylist">
		<view v-for="(item, index) in imgArr" class="box" :key="item._id">
			<image :src="item.imgurl" mode="aspectFill" class="pic" style="width:210rpx;height:430rpx;"></image>
		</view>


	</view>
</template>

<script>
	export default {
		onLoad() {
			// 读取全局数据，兜底为空数组
			//this.imgArr = getApp().globalData.images || []
			//console.log('classifylist拿到的数组：', this.imgArr)
			const proxyArr = getApp().globalData.images
			if (proxyArr) {
				// 重点：深拷贝，切断外部Proxy代理引用，生成当前页面干净普通数组
				this.imgArr = JSON.parse(JSON.stringify(proxyArr))
			} else {
				this.imgArr = []
			}
			//console.log('classifylist拿到的数组：', this.imgArr)


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