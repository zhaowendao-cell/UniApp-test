//require():**加载内置模块**，把模块的功能拿出来赋值给变量，后面代码就可以使用这个模块里面的函数。
//**http 模块**：Node.js 自带，专门用来**创建 HTTP 服务器、处理 http 请求**
//fs:专门用来**读写电脑本地文件、文件夹**
//path 模块：**专门处理文件路径字符串**，跨系统兼容
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
	//这是**跨域响应头**，作用：**允许任意来源的网页（前端 H5）访问这个 Node 服务器接口**，解决浏览器的**跨域安全限制**。
	res.setHeader('Access-Control-Allow-Origin', '*');

	// 获取图片地址接口
	//如果本次请求访问的路径正好是 `/api/getMsg`，就执行大括号 {} 里面全部代码
	if (req.url === '/api/getMsg') {
		res.setHeader('Content-Type', 'application/json');
		const returnData = {
			//<!--轮播图-->
			banner: [
				"http://127.0.0.1:5000/static/picture/banner/banner1.jpeg",
				"http://127.0.0.1:5000/static/picture/banner/banner2.jpeg",
				"http://127.0.0.1:5000/static/picture/banner/banner3.jpeg",
				"http://127.0.0.1:5000/static/picture/banner/banner4.jpeg"
			],
			//<!--公告-->
			announcement: [
				"实例文字1",
				"实例文字2",
				"实例文字3实例文字3实例文字3实例文字3实例文字3实例文字3实例文字3实例文字3"
			],
			//<!--今日推荐壁纸推荐盒子-->
			recommendation: [
				"http://127.0.0.1:5000/static/picture/wallpaper/wallpaper2.jpg",
				"http://127.0.0.1:5000/static/picture/wallpaper/wallpaper5.jpg",
				"http://127.0.0.1:5000/static/picture/character/character3.jpg",
				"http://127.0.0.1:5000/static/picture/character/character1.jpg",
				"http://127.0.0.1:5000/static/picture/wallpaper/wallpaper7.jpg",
				"http://127.0.0.1:5000/static/picture/wallpaper/wallpaper1.jpg",
				"http://127.0.0.1:5000/static/picture/character/character4.jpg"
			],
			//<!--风景壁纸推荐盒子-->
			WallpaperBoxB: [
				"http://127.0.0.1:5000/static/picture/wallpaper/wallpaper1.jpg",
				"http://127.0.0.1:5000/static/picture/wallpaper/wallpaper2.jpg",
				"http://127.0.0.1:5000/static/picture/wallpaper/wallpaper3.jpg",
				"http://127.0.0.1:5000/static/picture/wallpaper/wallpaper4.jpg",
				"http://127.0.0.1:5000/static/picture/wallpaper/wallpaper5.jpg",
				"http://127.0.0.1:5000/static/picture/wallpaper/wallpaper6.jpg",
				"http://127.0.0.1:5000/static/picture/wallpaper/wallpaper7.jpg"
			],
			//<!--人物壁纸推荐盒子 -->
			WallpaperBoxC: [
				"/static/picture/character/character1.jpg",
				"/static/picture/character/character2.jpg",
				"/static/picture/character/character3.jpg",
				"/static/picture/character/character4.jpg",
				"/static/picture/character/character5.jpg",
				"/static/picture/character/character6.jpg"
			]

		}
		//JSON.stringify(returnData): 把 JS 对象转为 JSON 字符串
		//`res.end(xxx)`：把这个 JSON 字符串发送给前端，**结束本次 HTTP 响应**。
		res.end(JSON.stringify(returnData));
		return;
	}

	//图片静态资源托管
	//`.startsWith('/static/')`：判断**字符串是不是以 `/static/` 开头**
	if (req.url.startsWith('/static/')) {
		//`path.join()` 自动拼接两者，自动处理斜杠
		//`__dirname`：`server.js` 文件所在文件夹
		//`path.join` 拼接得到硬盘真实路径
		const filePath = path.join(__dirname, req.url);
		//异步读取硬盘上这个文件
		fs.readFile(filePath, (err, fileData) => {
			if (err) {
				res.writeHead(404, {
					'Content-Type': 'text/plain;charset=utf-8'
				});
				res.end("图片不存在");
				return;
			}
			res.setHeader('Content-Type', 'image/jpeg');
			//把图片二进制发给前端，完成响应。
			res.end(fileData);
		})
		return;
	}

	res.writeHead(404);
	res.end('404 Not Found');
})

// 监听0.0.0.0：本机可以访问，局域网其他设备也能访问
server.listen(5000, '0.0.0.0');
console.log("✅服务器启动，本机访问：http://127.0.0.1:5000/api/getMsg")