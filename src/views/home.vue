<script setup>
  import {useRouter} from "vue-router";
  const router = useRouter();
  const gotoContent = () => {
    console.log("跳转前")
    router.push('/content?id=1003&title=编程式导航');
    console.log("跳转后")
  }
</script>

<template>
<div class="content">
    <h1>首页</h1>
    <router-link to="/content?id=1&title=blues">内容页</router-link>
    <br/>
    <router-link to="/user/1001/blues1001">用户页</router-link>
    <br/>
    <router-link :to="{path:'/content',query:{id:200, title:'vue router'}}">内容页-动态属性绑定-使用path</router-link>
    <br/>
    <router-link :to="{name:'user',params:{id:1002, name:'test'}}">用户页-动态属性绑定-使用name</router-link>
    <br/>
    <button @click="gotoContent">内容页-方法跳转</button>
    <br/>
</div>
</template>

<style scoped>

</style>