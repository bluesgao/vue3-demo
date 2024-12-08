<script setup>
import request from '@/utils/request';
import { ref } from 'vue';

// const users = ref([
// 	{ id: 1, name: 'Alice', age: 25 },
// 	{ id: 2, name: 'Bob', age: 30 },
// 	{ id: 3, name: 'Charlie', age: 35 }
// ]);

const userList = ref([]);

const getUserList = () => {
	request.get('/getUsers').then(res => {
		console.log(res);
		// listData.value = res.data;
		// console.log('listData:', listData);
		userList.value = res.data.list;
		console.log('userList:', userList);
	});
};
</script>

<template>
	<div class="content">
		<h1>用户页面</h1>
		<h2>id:{{ $route.params.id }}</h2>
		<h2>name:{{ $route.params.name }}</h2>
		<button @click="getUserList">获取用户列表</button>
		<h1>List Data</h1>
		{{ userList }}
		<div id="app">
			<table>
				<tr>
					<th>分类</th>
					<th>时间</th>
					<th>状态</th>
					<th>标题</th>
				</tr>
				<tr v-for="(item, index) in userList">
					<td>{{ item.id }}</td>
					<td>{{ item.name }}</td>
					<td>{{ item.city }}</td>
					<td>{{ item.title }}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<style scoped></style>
