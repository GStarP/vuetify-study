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