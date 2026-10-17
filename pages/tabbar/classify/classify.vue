<template>
	<view class="initialview pageBg">
		<WallpaperBox>
			<!--在组件套组件中应加入生命周期监听，防止没加载完就拿取里面的数据-->
			<template #name>专题精选</template>
		</WallpaperBox>

		<!-- 如果跳转从非tabbar页面到tabbar页面则在view里加入open-type="reLaunch" -->
		<view class="content">
			<ThemeItem :arr="imagesrc" :list="ThemeItemarr"></ThemeItem>
		</view>

	</view>
</template>

<script>
	//import imagesrc from "@/json/imagesrc.json"
	//import ThemeItemListImgArr from "@/json/ThemeItemListImgArr.json"
	export default {
		onLoad() {
			console.log("页面加载完成")
			const app = getApp()

			this.imagesrc = app.globalData.ShowThePictureImgArr
			this.ThemeItemarr = app.globalData.ThemeItemListImgArr
			//console.log(this.ThemeItem)
			//console.log(this.imagesrc)
			//console.log("数组0：", this.imagesrc[0])
			//console.log("数组：", this.imagesrc, "这是传递的分类数组")
			//this.ShowThePictureImgArr = ShowThePictureImgArr
		},
		data() {
			return {
				imagesrc: [],
				ThemeItemarr: []

			}
		},
		methods: {

		},
		components: {}
	}
</script>

<style scoped lang="scss">
	.initialview {
		padding: var(--status-bar-height) 300rpx 0 30rpx;

	}
</style>