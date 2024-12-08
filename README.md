# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs,
check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in
the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# 创建

npm init vite@latest

# 运行

cd vue-router-demo
npm install
npm run dev

# 查询字符串传递参数

http://localhost:5173/content?id=1&title=blues

# 路径传递参数

http://localhost:5173/user/1001/blues1001
http://localhost:5173/user/1001/

# 添加mockjs

npm install mockjs --save-dev
npm install vite-plugin-mock --save-dev

配置vite.config.ts
export default defineConfig({
plugins: [
vue(),
viteMockServe({
//mockPath: 'mock' // 设置模拟接口的文件夹
})
],
resolve: {
alias: { '@': path.resolve(__dirname, 'src') } // 配置路径别名
}
});
在项目的根目录下，创建mock目录
然后创建user.js文件，在其中定义返回数据


