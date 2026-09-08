<template>
	<view>
		<button @click="select">性别</button>
	</view>
</template>

<script>
export default {
	data(){
		return{
			sex_arrs:["男性","女性","其他"]
		}
	},
	methods: {
		select(){
			uni.showActionSheet({
				itemList:this.sex_arrs,
				//success请求成功返回res值，并把res当参数执行匿名函数
				success:(res)=>{
					console.log(res);
					console.log(this.sex_arrs[res.tapIndex])
				}
			})
		}
	}
}
</script>

<style scoped lang="scss">
	#login-div{
		background-color: #666666;
		width:100px;
		height: 50px;
		margin: 30px;
		border:1px solid #fff;
	}
</style>