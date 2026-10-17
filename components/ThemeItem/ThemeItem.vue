<template>
	<view class="ThemeItem">
		<view v-for="(item,index) in arr" class="box" :key="item._id" @click="handleImgClick (index)">
			<!-- <navigator class="box" url=""> -->
			<image class="pic" :src="item.imgurl" mode="aspectFill"></image>
			<view class="mask">{{item.title}}</view>
			<view class="tab">{{item.updateText}}</view>
			<!-- </navigator> -->
		</view>
	</view>
</template>
<script>
	export default {
		onLoad() {
			console.log("页面加载完成")
		},
		name: "ThemeItem",
		data() {
			return {};
		},
		props: {
			arr: {
				type: Array,
				default () {
					return []
				}
			},
			list: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		methods: {

			getGroupData() {
				const obj = this.list
				const result = {}
				const arr = Object.values(obj)
				arr.forEach(item => {
					if (!item || !item.title) return
					const key = item.title
					if (!result[key]) {
						result[key] = []
					}
					result[key].push(item)
				})
				return result
			},

			handleImgClick(index) {
				const groupRes = this.getGroupData()
				//console.log('分组之后的数据', groupRes)
				//console.log('点击的是第几个ThemeItem：', index)
				const currentImageList = this.arr[index].title
				//console.log('获取到的展示类型：', currentImageList)
				//console.log('该主题全部图片路径数组：', currentImageList)
				const showImageArr = groupRes[currentImageList]
				//console.log(showImageArr)
				if (!showImageArr || showImageArr.length === 0) {
					uni.showToast({
						title: `【${currentImageList}】没有图片`,
						icon: "none"
					})
					return
				}


				// 把当前页的图片列表赋值给全局对象 globalData.images，
				// 相当于"临时仓库"，让下一个页面能拿到这份数据
				getApp().globalData.images = showImageArr

				// 跳转到 classifylist 页面
				uni.navigateTo({
					url: '/pages/classifylist/classifylist'
				})
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