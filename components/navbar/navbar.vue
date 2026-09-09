<template>
	<!--搜索框组件-->
	<view class="example-boby">
			<view class="input-view">
				<image class="input-search" src="/static/icon/search.webp" mode="aspectFit"></image>
				<!-- aspectFit:等比例适配-->
				<input class="nav-bar-input" 
				v-model.lazy.trim="IndexInputTitle" 
				confirm-type="search"  
				type="text" 
				:placeholder="title" />
			</view>
		<view class="flex-view">
			<ul>
				<li v-for="(x,y) in titleList" :key="y">{{x}}</li>
			</ul>
			<button class="sendClickHandle-flex" @click="sendClickHandle">传递</button>
			<p>{{IndexInputTitle}}</p>
		</view>
	</view>
</template>

<script>
export default {
	name:"Navbar",
	data() {
		return {
			message: "自定义事件-数据传输",
			IndexInputTitle: "",
		}
	},
	props: {
		title: {
			type: String,
			default: ""
		},
		titleList: {
			type: Array,
			default() {
				return []
			}
		},
	},
	methods: {
		sendClickHandle() {
			this.$emit("onEvent", this.message)
		},
	},
	mounted(){
	this.$emit("mounted")
	},
}
</script>

<style scoped lang="scss">
.example-boby {
	padding: var(--status-bar-height) 300rpx 0 30rpx;
	//padding-bottom: env(safe-area-inset-bottom);
	height: 90rpx;
	background: #fff;
	box-shadow: 0 5rpx 10rpx rgba(0, 0, 0, 0.08);
	align-items: center;
}
.input-view {
	display: flex;
	flex-direction: row;
	flex: 1;
	background-color: #f8f8f8;
	height: 80rpx;
	border-radius: 40rpx;
	padding: 5 10rpx;
	flex-wrap: nowrap;
	margin: 10rpx 0;
	align-items: center;
}
.input-search {
	width: 70rpx;
	height: 45rpx;
	margin-right: 10rpx;
}
.nav-bar-input {
	flex: 1;
	height: 60rpx;
	font-size: 28rpx;
	background-color: transparent;
	border: none;
	outline: none;
}
.flex-view{
	position: relative;
	.sendClickHandle-flex{
		display: flex;
		height: 60rpx;
		width: 200rpx;
		font-size: 28rpx;
		border-radius: 30rpx;
		align-items: center;
		top: -80rpx;
		left:350rpx;
		position: absolute;
}

}
</style>