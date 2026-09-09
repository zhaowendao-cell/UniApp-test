<template>
	<view class="pageBg">
		<!--搜索栏-->
		<Navbar :title="NavbarTitle" @onEvent="getDatHandle" @mounted="onPoetryMounted">

		</Navbar>


		<!--轮播图-->
		<banner :arr="bannerTitle"></banner>





		<!--公告-->
		<announcement :arr="swiperTitle">

		</announcement>


		<!--名人名言-->
		<poetry>

		</poetry>


		<!--props传递按钮-->
		<p id="p-message">{{message}}</p>

		<!--今日推荐壁纸推荐盒子-->
		<WallpaperBox :arr="TopPicksImgArr" class="recommendation">
			<!--在组件套组件中应加入生命周期监听，防止没加载完就拿取里面的数据-->
			<template #name>今日推荐</template>
			<template #custom>
				<image class="calendar" src="@/static/icon/calendar.png"></image>
				<text v-if="timedate" class="timedate">{{timedate}}号</text>
			</template>
		</WallpaperBox>

		<!--风景壁纸推荐盒子-->
		<WallpaperBox :arr="SceneryImgArr" class="WallpaperBox">
			<template #name>风景壁纸</template>
			<template #custom>
				<navigator url="" class="more">更多+</navigator>
			</template>
		</WallpaperBox>


		<!--人物壁纸推荐盒子 -->
		<WallpaperBox :arr="CharacterImgArr" class="WallpaperBox">
			<template #name>人物壁纸</template>
			<template #custom>
				<navigator url="" class="more">更多+</navigator>
			</template>
		</WallpaperBox>


		<!--回到顶部按钮-->
		<BackToTop>

		</BackToTop>

	</view>


</template>

<script>
	import announcement from "@/components/announcement/announcement.vue";
	import BackToTop from "@/components/BackToTop/BackToTop.vue"
	import banner from "@/components/banner/banner.vue"
	import Navbar from "@/components/navbar/navbar.vue"
	import poetry from "@/components/poetry/poetry.vue";
	import WallpaperBox from "@/components/WallpaperBox/WallpaperBox.vue"
	import axios from "axios"
	//`ref()`：Vue3 的**响应式包装函数**。专门包装**基础类型、数组、对象**，让变量变化时页面模板自动更新。
	import {
		ref
	} from "vue"
	import {
		onLoad
	} from "@dcloudio/uni-app"
	//onLoad：页面加载完成触发，参数为上一个页面传递的信息




	//ES6 模块默认导出语法，用来导出页面 / 组件配置
	export default {
		data() {
			return {
				//函数执行之后，return 出去的对象，才会被 Vue 内部接管，做成响应式数据
				//数组与对象必须使用函数返回
				NavbarTitle: "更多好图来“厕纸”",
				alldate: {},
				//test: [],
				titleList: [],
				message: "",
				select: '',
				character: '',
				timedate: '',
				TopPicksImgArr: [],
				SceneryImgArr: [],
				CharacterImgArr: [],
				swiperTitle: [],
				bannerTitle: [],
				retryCount: 0
			}
		},


		onLoad() {
			console.log("页面加载完成")
			//this.TopPicksImgArr = TopPicksImgArr
			//this.SceneryImgArr = SceneryImgArr
			//this.CharacterImgArr = CharacterImgArr
			//this.bannerTitle = bannerTitle
			//this.swiperTitle = swiperTitle
			this.getDate()
			this.request()
			//弹出简短文字提示
			//H5 没问题；
			//**微信小程序在组件解析阶段就执行这个 API，
			//会干扰页面初始化渲染时序**，会加剧插槽响应式异常。
			uni.showToast({
				title: "支付成功"
			})
		},

		onReady() {
			console.log('页面初次渲染完成')
			//this.getDate()
		},

		//methods：放可被触发执行的函数，用来操作 data 里的数据
		methods: {
			request() {
				uni.request({
					//GET：从服务器拿数据；POST：往服务器传数据。
					method: "GET",
					url: "http://127.0.0.1:5000/api/getMsg",
					// 如果 2 秒之内服务器没有返回结果，直接判定请求超时失败
					timeout: 2000,
					success: (res) => {
						this.alldate = res.data
						this.bannerTitle = res.data.banner
						this.swiperTitle = res.data.announcement
						this.TopPicksImgArr = res.data.recommendation
						this.SceneryImgArr = res.data.WallpaperBoxB
						this.CharacterImgArr = res.data.WallpaperBoxC
						console.log(res.data)
					},
					fail(err) {
						console.log("请求失败", err)
					}
				})
			},


			onPoetryMounted() {
				//console.log("【父页面收到】poetry子组件已经挂载完毕")
				// 这里做父页面逻辑，等子组件加载完再执行index
			},


			//传递按钮传递函数，传递方向：navbar.vue
			getDatHandle(onEvent_data) {
				//console.log(onEvent_data);
				this.message = onEvent_data;
			},

			//获取时间
			getDate() {
				const time = new Date()
				const Year = time.getFullYear() // 年
				// 月份0‑11！！显示要 +1
				//padStart(2,'0')：不足两位前面补 0，比如`5`→`05`。
				const Month = String(time.getMonth() + 1).padStart(2, '0')
				const date = time.getDate() // 几号
				const Hours = time.getHours() // 小时
				const Minutes = time.getMinutes() // 分
				const Seconds = time.getSeconds() // 秒
				this.timedate = time.getDate()
				//console.log(date)
				//console.log('响应式this.timedate：', this.timedate)
			}
		},

		//监视页面滚动
		onPageScroll(e) {
			//console.log('滚动距离：', e.scrollTop) 
		},

		//监听该页面用户下拉刷新事件
		onPullDownRefresh() {
			//setTimeout(函数, 时间) → 等待时间到了再调用函数
			//setTimeout(函数(), 时间) → 立即执行函数，把结果传入定时器
			setTimeout(() => {
				//uni.stopPullDownRefresh():停止当前页面下拉刷新
				uni.stopPullDownRefresh();
			}, 2000)
		},



		//components:应用的组件
		components: {
			announcement: announcement,
			BackToTop: BackToTop,
			banner: banner,
			Navbar: Navbar,
			poetry: poetry,
			WallpaperBox: WallpaperBox,


		},


	}
</script>

<style lang="scss" scoped>
	.poetry {
		padding: 30rpx;
		border-bottom: 1px solid #cfcfcf;

		.comment {
			font-size: 36rpx;
			margin-bottom: 10px;
		}

		.content {
			font-size: 28rpx;
			color: #666;
		}
	}

	.recommendation {
		.calendar {
			width: 30rpx;
			height: 30rpx;
		}

		.timedate {
			color: #28b389;
			margin-left: 5rpx;
		}
	}

	.WallpaperBox {
		.more {
			font-size: 32rpx;
			color: #888;
		}
	}
</style>