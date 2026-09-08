<template>
	<!--骨架（HTML）-->
	<view class="userLayout pageBg">

		<navigator url="/pages/tabbar/mine/login">
			<view class="userinfo">
				<view class="avetar">
					<image class="avetarimage" src="/static/icon/individual.png" mode="aspectFill"></image>
				</view>
				<view class="name">请先登录</view>
				<view class="address">来自于：？？</view>
			</view>
		</navigator>


		<Lists :config="MineLists[0]"></Lists>
		<Lists :config="MineLists[1]"></Lists>


	</view>

</template>

<script>
	import Lists from "@/components/Lists/Lists.vue"

	import MineLists from "@/json/MineLists.json"
	export default {
		components: {
			Lists: Lists
		},
		data() {
			return {
				MineLists: [],
			}
		},
		onLoad() {
			this.MineLists = MineLists
		},
		login() {
			console.log("hhhhhhhhhhhhhhhhhhhhh")
			uni.navigateTo({
				url: '@/pages/tabbar/mine/login'
			})
		}
	}
</script>


<style scoped lang="scss">
	/*样式（CSS）*/
	.userLayout {



		.userinfo {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			padding: 50rpx 0;

			.avetar {
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
				overflow: hidden;

				.avetarimage {
					width: 100%;
					height: 100%;
				}
			}

			.name {
				font-size: 44rpx;
				color: #333;
				padding: 20rpx 0 5rpx;
			}

			.address {
				font-size: 28rpx;
				color: #aaa;

			}

		}


	}
</style>