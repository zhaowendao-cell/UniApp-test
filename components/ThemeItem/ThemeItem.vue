<template>
	<view class="ThemeItem">
		<view v-for="(item,index) in arr" class="box" :key="index" @click="handleImgClick(index)">
			<!-- <navigator class="box" url=""> -->
			<image class="pic" :src="item.src" mode="aspectFill"></image>
			<view class="mask">{{item.title}}</view>
			<view class="tab">{{item.updateText}}</view>
			<!-- </navigator> -->
		</view>
	</view>
</template>
<script>
	import ThemeItemListImgArr from "@/json/ThemeItemListImgArr.json"
	export default {
		onLoad() {
			console.log("页面加载完成")
		},
		name: "ThemeItem",
		data() {
			return {
				ThemeItemListImgArr: []
			};
		},
		props: {
			arr: {
				type: Array,
				default () {
					return []
				}
			}
		},
		methods: {

			handleImgClick(index) {
				// console.log('点击的是第几个ThemeItem：', index)
				const currentImageList = ThemeItemListImgArr[index]
				// console.log('该主题全部图片路径数组：', currentImageList)
				if (!currentImageList) {
					uni.showToast({
						title: "没有对应图片数据",
						icon: "none"
					})
					return
				}
				getApp().globalData.images = currentImageList
				uni.navigateTo({
					url: '/pages/classifylist/classifylist'
				})

				// uni.navigateTo({
				// 	// encodeURIComponent(...):对 JSON 字符串做**URL 编码**。
				// 	//`" [ ] " " /` 这些符号在 url 里有特殊含义，直接放 url 会解析错乱、参数截断、页面异常。

				// 	//JSON.stringify(currentImageList):把 JS **数组对象转 JSON 字符串**。
				// 	//URL 不能直接传 JS 数组，只能传字符串，所以必须 stringify。
				// 	url: `/pages/classifylist/classifylist?images=${encodeURIComponent(JSON.stringify(currentImageList))}`
				// })
			}

		}
	}
</script>
<style lang="scss" scoped>
	.ThemeItem {
		margin-top: 10rpx;
		display: grid;
		gap: 15rpx;
		grid-template-columns: repeat(3, 1fr);

		.box {
			display: inline-block;
			width: 210rpx;
			height: 350rpx;
			position: relative;
			margin-right: 10rpx;

			.pic {
				width: 100%;
				height: 100%;
				//圆角
				border-radius: 10rpx;
			}

			.mask {
				width: 100%;
				height: 70rpx;
				position: absolute;
				bottom: 0;
				left: 0;
				//不透明度及背景颜色
				background: rgba(0, 0, 0, 0.1);
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;

				//磨砂效果
				backdrop-filter: blur(10rpx);

				//圆角
				border-radius: 10rpx;

				//文字大小
				font-weight: 500;

			}

			.tab {
				position: absolute;
				top: 0rpx;
				color: #fff;
				font-size: 22rpx;
				padding: 6rpx 14rpx;
				background: rgba(250, 129, 90, 0.8);
				backdrop-filter: blur(10rpx);

				border-radius: 0 0 20rpx 0;
				//放缩
				transform: scale(0.8);
				transform-origin: left top;
			}
		}
	}
</style>