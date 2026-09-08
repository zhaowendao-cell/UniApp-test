<template>
	<view>
		<view class="announcement">
			
			<view class="announcement-left-ui">
				<image class="announcement-image" src="@/static/icon/Announcement.png"></image>
				<text class="announcement-text">公告:</text>
			</view>
			
			<view class="announcement-center">
				<swiper autoplay="false" interval="5000" 
				duration="500" circular="false" vertical disable-touch="true">
					<swiper-item
					class="swiper-item-box" 
					v-for="(title,index) in arr" 
					:key="index"
					@click="AnnouncementTitle(title)">
					{{title}}
					</swiper-item>
				</swiper>
			</view>
			
			<view class="announcement-right-ui">
				<image class="announcement-image" src="@/static/icon/chevron-right.png"></image>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"announcement",
		data() {
			return {
				
			};
		},
		mounted(){
		//console.log("announcement组件挂载完成")
		},
		props:{
			arr: {
			  type: Array,
			  default(){
				  return[]
			  }
			}
		},
		methods:{
			//点击公告打印文字
			AnnouncementTitle(title){
				console.log(title)
			},
		}
	}
</script>

<style lang="scss" scoped>
.announcement{
	display: flex;
	width: 690rpx;
	height: 80rpx;
	background: #f2f2f2;
	margin: 0 auto;
	border-radius: 40rpx;
	align-items: center;
	overflow: hidden;
	.announcement-left-ui{
		display: flex;
		width: 140rpx;
		align-items: center;
		gap: 10rpx;
		padding-left: 20rpx;
		justify-content: center;
		.announcement-image{
			width: 30rpx;
			height: 30rpx;
		}
		.announcement-text{
			color: #28b389;
			font-weight: 600;
			font-size: 28rpx;
		}
	}
		
	.announcement-center{
		flex: 1;
		width: 200rpx;
		height: 80rpx;
		line-height: 85rpx;
		.swiper-item-box{
			font-size: 30rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			}
	}

	.announcement-right-ui{
		width: 70rpx;
		display: flex;
		justify-content: center;
		.announcement-image{
			width: 30rpx;
			height: 30rpx;
			}
		}
		
}
</style>