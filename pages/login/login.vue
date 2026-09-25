<template>
	<view>
		<button @click="select">性别</button>
	</view>
	<view>
		<button class="add" @click="">对alldata进行添加数据</button>
	</view>
	<view>
		<button class="delete" @click="">对ShowThePicture进行添加数据</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sex_arrs: ["男性", "女性", "其他"]
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

<style scoped lang="scss">
	#login-div {
		background-color: #666666;
		width: 100px;
		height: 50px;
		margin: 30px;
		border: 1px solid #fff;
	}
</style>