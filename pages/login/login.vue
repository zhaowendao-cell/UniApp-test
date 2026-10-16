<template>
	<view class="bigview">
		<view class="login-box">
			<h2>系统登录</h2>

			<view class="input-item">
				<input type="text" placeholder="请输入账号" v-model="form.username" />
			</view>

			<view class="input-item">
				<input type="password" placeholder="请输入密码" v-model="form.password">
			</view>

			<view class="join">注册账号</view>
			<view class="join">忘记密码</view>

			<button class="login-btn" @click="handleLogin">登录</button>
		</view>
	</view>
	<!-- 	<view>
		<button class="delete" @click="">对ShowThePicture进行添加数据</button>
	</view> -->
</template>

<script>
	import {
		ref
	} from 'vue'
	export default {
		data() {
			return {
				form: {
					username: '',
					password: ''
				}
			}
		},
		methods: {
			select() {
				uni.showActionSheet({
					itemList: this.sex_arrs,
					//success请求成功返回res值，并把res当参数执行匿名函数
					success: (res) => {
						console.log(res);
						console.log(this.sex_arrs[res.tapIndex])
					}
				})
			},

			handleLogin() {
				// 获取输入框的值
				const username = this.form.username
				const password = this.form.password
				console.log('账号：', username)
				console.log('密码：', password)

				// 简单非空校验
				if (!this.form.username) {
					uni.showToast({
						title: '请输入账号',
						icon: 'none'
					})
					return
				}
				if (!this.form.password) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					})
					return
				}

				// 在这里写登录请求逻辑
				// loginApi(username,password)
			},

			async runBatch() {},

			//对数据库添加数据
			async ShowThePictureCrunBatch() {
				// 准备大量测试数据数组
				const dataList = [{
						"src": "/static/picture/wallpaper/wallpaper2.jpg",
						"title": "氛围风景",
						"updateText": "2天前更新"
					},
					{
						"src": "/static/picture/wallpaper/wallpaper5.jpg",
						"title": "人物自拍",
						"updateText": "4天前更新"
					},
					{
						"src": "/static/picture/wallpaper/wallpaper2.jpg",
						"title": "明星照片",
						"updateText": "3天前更新"
					},
					{
						"src": "/static/picture/wallpaper/wallpaper2.jpg",
						"title": "动漫角色",
						"updateText": "1天前更新"
					},
					{
						"src": "/static/picture/wallpaper/wallpaper7.jpg",
						"title": "氛围风景",
						"updateText": "5天前更新"
					},
					{
						"src": "/static/picture/wallpaper/wallpaper1.jpg",
						"title": "氛围风景",
						"updateText": "n天前更新"
					},
					{
						"src": "/static/picture/character/character4.jpg",
						"title": "氛围风景",
						"updateText": "x天前更新"
					}
				]
				const res = await uniCloud.callFunction({
					name: "ShowThePictureBatchlnsert",
					data: {
						list: dataList
					}
				})
				console.log("以执行")
			},

		}
	}
</script>

<style lang="scss" scoped>
	.login-box {

		width: 100%;
		padding: 40rpx 0 0 0;
		/* 磨砂玻璃半透明 */
		background: rgba(255, 255, 255, 0.25);
		//让盒子【背后】的画面进行高斯模糊
		backdrop-filter: blur(10rpx);
		//浏览器兼容前缀
		//重要前提：`backdrop-filter`生效条件
		//1.元素本身要有透明背景
		//2.父元素不能有`overflow:hidden`
		-webkit-backdrop-filter: blur(10rpx);
		//1 像素实线边框，白色、透明度 0.3
		border: 1px solid rgba(255, 255, 255, 0.3);
		//圆角，四个角圆弧半径 16px
		border-radius: 16rpx;
		//盒子阴影，参数：`x偏移 y偏移 模糊大小 颜色`
		box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.1);

		h2 {
			text-align: center;
			color: black;
			margin-bottom: 30rpx;
			letter-spacing: 2rpx;
		}

		.join {
			font-size: 12px;
			display: inline;
			padding: 140rpx;

		}

		.input-item {
			margin-bottom: 22rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			input {

				width: 600rpx;
				padding: 30rpx 30rpx;
				//半透明白色边框
				border: 1rpx solid rgba(0, 0, 0, 0.4);
				//输入框底色，浅半透明
				background: rgba(0, 0, 0, 0.2);
				border-radius: 10rpx;
				//去掉默认点击后蓝色外框
				outline: none;
				color: #fff;
				font-size: 16px;
			}
		}

		.login-btn {

			width: 500rpx;
			//height: 100rpx;
			padding: 15rpx;
			margin: 50rpx 0rpx 100rpx 130rpx;
			//清除按钮浏览器自带默认边框
			border: none;
			border-radius: 10rpx;
			background: rgba(40, 120, 255, 1);
			color: #fff;
			font-size: 17px;
			//指定background监听,平滑渐变， 0.3 秒
			transition: background 0.3s, transform 0.2s ease-out;

			////鼠标悬浮在按钮上的状态
			&:hover {
				background: rgba(40, 120, 255, 0.7);
			}

			//按下变浅，松开自动恢复原色
			&:active {
				background: rgba(40, 120, 255, 0.5);
				transform: scale(0.97);
			}

			//钮被聚焦时，恢复原色，解决点击后颜色不回弹
			&:focus {
				background: rgba(40, 120, 255, 1);
			}
		}
	}
</style>