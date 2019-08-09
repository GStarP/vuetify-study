# vuetify-study

## 运行

```cmd
npm install

npm run serve
```

## 安装 Vuetify

- 使用 vue-cli 3 初始化一个 Vue 项目

    - 若无法使用 vue-cli 3 请参照 [官方文档](https://vuetifyjs.com/zh-Hans/getting-started/quick-start)

- 命令行执行 vue add vuetify

- 命令执行完毕后将初始化一个 Vuetify 的目录结构

    - 若出现问题，尝试新建 src/plugins/vuetify.js 文件并重试

    - 其他意外情况请参照 [官方文档](https://vuetifyjs.com/zh-Hans/getting-started/quick-start)

## 安装 iconfont-mdi

- 命令行执行 npm install @mdi/font -D

- 在 /plugins/vuetify.js 中引入

```js
import '@mdi/font/css/materialdesignicons.css'

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  }
})
```

## Loading 组件需要依赖 Koa2

- 命令行执行 npm install koa-generator -g 安装生成器

- 命令行执行 koa2 service 生成一个 koa2 项目

- 命令行执行 cd service 进入项目目录

- 命令行执行 npm install 安装依赖

- 修改 index.js 文件，添加如下代码并保存

```js
  router.get('/getLoadingMsg', async (ctx, next) => {
  // 封装一个延时响应的函数
  async function delay (time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, time)
    })
  }
  await delay(3000)
  // 为了允许跨域请求设置的 Headers
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'GET')
  ctx.body = {
    data: 'hxwnb'
  }
})
```

- 命令行执行 npm start 启动服务

- 访问 http://localhost:3030/getLoadingMsg

  - 若操作正常，应该在 3s 后得到返回数据

  - 保持 koa2 启动，此时 Loading 组件可以观察到效果