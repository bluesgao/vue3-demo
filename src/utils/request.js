import axios from 'axios';

// 创建 Axios 实例
const service = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || '/api', // API 基础路径
	timeout: 5000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
	config => {
		// 在发送请求之前做些什么，比如添加 Token
		const token = localStorage.getItem('token');
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	error => {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 响应拦截器
service.interceptors.response.use(
	response => {
		const res = response.data;
		console.log('response:', res);
		// 根据后端返回结果判断是否需要处理
		if (res.code !== 0) {
			// 假设非 200 是错误，进行提示
			console.error(res.message || 'Error');
			return Promise.reject(new Error(res.message || 'Error'));
		}
		return res; // 返回数据
	},
	error => {
		// 处理响应错误
		console.error('Response Error:', error.message);
		return Promise.reject(error);
	}
);

export default service;
