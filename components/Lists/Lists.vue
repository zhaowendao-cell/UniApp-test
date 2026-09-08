<template>
	<view class="list">

		<view class="row" v-for="(item, index) in config.listData" :key="index">
			<view class="left">
				<image class="image" :src="item.leftsrc" mode="aspectFit"></image>
				<view class="text">{{ item.lefttitle }}</view>
			</view>

			<view class="right">
				<view class="text">{{ item.righttitle }}</view>
				<image class="image" :src="item.rightsrc" mode="aspectFit"></image>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			config: {}
		}
	}
</script>

<style scoped lang="scss">
	.list {
		width: 690rpx;
		margin: 50rpx auto;
		border: 1px solid #eee;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
		background: #fff;

		.row {
			display: flex;
			justify-content: space-between;
			padding: 0 30rpx;
			height: 100rpx;
			border-bottom: 1px solid #eee;
			align-items: center;

			.left {
				display: flex;
				align-items: center;

				.text {
					padding: 20rpx;
					color: #666;
				}

			}

			.right {
				display: flex;
				align-items: center;

				.image {
					padding: 10rpx;
				}

				.text {
					font-size: 28rpx;
					color: #666;
				}
			}

			.image {
				height: 40rpx;
				width: 40rpx;
			}
		}
	}
</style>