<template>
	<view>
		<view class="poetry" v-for="item in titleList" :key="item?.id" >
			<view v-if="item">
			<view class="content">出处：{{item.from}}</view>
			<view class="content">作者：{{item.from_who}}</view>
			<view class="comment">{{item.hitokoto}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"poetry",
		data() {
			return {
				titleList:[],
			};
		},
		mounted(){ 
		//console.log("poetry组件挂载完成")
		this.request()
		},
		methods:{
			request(){
				uni.request({
					method:"GET",
					url:"https://v1.hitokoto.cn/",
					timeout:1000,
					header:{
						token:"",
						"Content-Type":"application/json"
					}, 
					
					//服务器有返回
					success:(res)=>{
						console.log("名人名言板块："+res.statusCode);
						//console.log(res.data);
						this.titleList=[res.data]
						// 请求成功，重置重试次数
						this.retryCount = 0
					},
					//根本连不上服务器进行函数
					fail:err=>{
						this.retryCount++
						console.log("名人名言板块：超时,当前重试"+this.retryCount+"次数");
						if(this.retryCount < 3){
							this.request()
							console.log("名人名言板块：在次请求");
						}else{uni.showToast({
								title: "网络请求失败，请稍后重试",
								icon: "none"})
							console.log("名人名言板块：已重试3次，终止请求");
							// 重置计数，方便用户下拉刷新重新尝试
							this.retryCount = 0
						}
					}
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
.poetry{
	padding: 30rpx;
	border-bottom: 1px solid #cfcfcf;
	.comment{
		font-size: 36rpx;
		margin-bottom: 10px;
		}
	.content{
		font-size: 28rpx;
		color: #666;
		}
}
</style>