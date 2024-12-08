import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

//全局前置守卫
router.beforeEach((to, from, next) => {
	console.log('to:', to); //即将要进入的目标路由对象
	console.log('from:', from); //当前导航正要离开的路由

	next();
});

app.mount('#app');
