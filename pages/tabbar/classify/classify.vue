<template>
	<view class="initialview pageBg">
		<WallpaperBox>
			<!--在组件套组件中应加入生命周期监听，防止没加载完就拿取里面的数据-->
			<template #name>专题精选</template>
		</WallpaperBox>

		<!-- 如果跳转从非tabbar页面到tabbar页面则加入open-type="reLaunch" -->
		<view class="content">
			<ThemeItem :arr="imagesrc"></ThemeItem>
		</view>

	</view>
</template>

<script>
	import imagesrc from "@/json/imagesrc.json"
	export default {
		onLoad() {
			console.log("页面加载完成")
			this.imagesrc = imagesrc
		},
		data() {
			return {
				imagesrc: [],
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