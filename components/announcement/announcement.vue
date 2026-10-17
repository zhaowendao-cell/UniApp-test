<template>
	<view>
		<view class="announcement">

			<view class="announcement-left-ui">
				<image class="announcement-image" src="@/static/icon/Announcement.png"></image>
				<text class="announcement-text">公告:</text>
			</view>

			<view class="announcement-center">
				<swiper autoplay="false" interval="5000" duration="500" circular="false" vertical disable-touch="true">
					<swiper-item class="swiper-item-box" v-for="item in arr" :key="item._id"
						@click="AnnouncementTitle(item)">
						{{item.title}}
					</swiper-item>
				</swiper>
			</view>

			<view class="announcement-right-ui">
				<image class="announcement-image" src="@/static/icon/chevron-right.png"></image>
			</view>

			<view v-if="showPopup" class="popup-mask" @click.self="closePopup">
				<view class="popup-box">
					<view class="popup-title">{{currentNotice.title }}</view>
					<view class="popup-content">{{ currentNotice.content || '暂无公告内容' }}</view>
					<view class="popup-btn" @click="closePopup">关闭</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		name: "announcement",
		data() {
			return {
				showPopup: false, // 弹窗显示开关
				currentNotice: {} // 当前点开的公告对象
			};
		},
		mounted() {
			//console.log("announcement组件挂载完成")
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
			//点击公告打印文字
			AnnouncementTitle(item) {
				this.currentNotice = item
				this.showPopup = true
				//console.log(item)
			},
			closePopup() {
				this.showPopup = false
				this.currentNotice = {}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.announcement {
		display: flex;
		width: 690rpx;
		height: 80rpx;
		background: #f2f2f2;
		margin: 0 auto;
		border-radius: 40rpx;
		align-items: center;
		overflow: hidden;

		.announcement-left-ui {
			display: flex;
			width: 140rpx;
			align-items: center;
			gap: 10rpx;
			padding-left: 20rpx;
			justify-content: center;

			.announcement-image {
				width: 30rpx;
				height: 30rpx;
			}

			.announcement-text {
				color: #28b389;
				font-weight: 600;
				font-size: 28rpx;
			}
		}

		.announcement-center {
			flex: 1;
			width: 200rpx;
			height: 80rpx;
			line-height: 85rpx;

			.swiper-item-box {
				font-size: 30rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}

		.announcement-right-ui {
			width: 70rpx;
			display: flex;
			justify-content: center;

			.announcement-image {
				width: 30rpx;
				height: 30rpx;
			}
		}

		.popup-mask {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.55);
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 999;

			.popup-box {
				width: 580rpx;
				background: #fff;
				border-radius: 20rpx;
				overflow: hidden;

				.popup-title {
					padding: 30rpx 30rpx 10rpx;
					font-size: 34rpx;
					font-weight: bold;
					text-align: center;
				}

				.popup-content {
					padding: 20rpx 30rpx;
					font-size: 28rpx;
					line-height: 1.7;
					color: #444;
					min-height: 120rpx;
				}

				.popup-btn {
					text-align: center;
					padding: 24rpx;
					font-size: 30rpx;
					color: #28b389;
					border-top: 1rpx solid #eee;
				}
			}
		}


	}
</style>