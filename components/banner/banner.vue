<template>
	<view>
		<view class="banner">
			<swiper indicator-dots class="swiper" indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff"
				autoplay="false" interval="5000" duration="500" circular="false">
				<swiper-item class="banner-box" v-for="item in arr" :key="item._id">
					<image class="image" :src="item.imgurl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name: "banner",
		data() {
			return {};
		},

		//组件 DOM 已经渲染完成
		mounted() {

		},

		//用来监听后续父组件传过来的数组更新
		watch: {
			arr() {

			}
		},

		props: {
			arr: {
				type: Array,
				default () {
					return []
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	.banner {
		width: 750rpx;
		padding: 0rpx 15rpx;

		.swiper {
			width: 750rpx;
			height: 500rpx;

			.banner-box {
				padding: 0rpx 30rpx;
				box-sizing: border-box;

				.image {
					width: 100%;
					height: calc(85%);
					margin: 30rpx auto;
					border-radius: 15rpx;
				}
			}
		}
	}
</style>