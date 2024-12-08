import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';
// https://vite.dev/config/
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
