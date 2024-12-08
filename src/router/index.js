import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		alias: ['/home', '/index'], //别名
		meta: { transition: 'fade' },
		component: () => import('@/views/home.vue')
	},
	{
		path: '/content',
		component: () => import('@/views/content.vue')
	},
	{
		path: '/user/:id/:name?',
		name: 'user',
		component: () => import('@/views/user.vue')
	},
	{
		path: '/member',
		component: () => import('@/views/member.vue'),
		children: [
			{
				path: '',
				component: () => import('@/views/member/index.vue')
			},
			{
				path: 'info',
				component: () => import('@/views/member/info.vue')
			},
			{
				path: 'order',
				component: () => import('@/views/member/order.vue')
			}
		]
	},
	{
		path: '/vip',
		redirect: '/member'
	},
	{
		path: '/gotouser',
		redirect: { name: 'user', params: { id: 3001, name: '3000user' } } //重定向
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes
});

export default router;
