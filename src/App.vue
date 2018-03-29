<template>
  <div class="app-container">
    <!-- <router-link to="/login">请登录</router-link>
    <router-link to="/main">进入main页面</router-link> -->
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from '@/components/header'
export default {
  components: {
    'my-header': Header
  }

}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
ul,li{
  list-style: none;
}
</style>
