<!--  -->
<template>
  <div class="H-container">
    <header>
      <ul>
        <router-link to="/main">
          <li>首页</li>
        </router-link>
        <router-link to="/news">
          <li>新闻</li>
        </router-link>
        <router-link to="/store">
          <li>店铺</li>
        </router-link>
        <router-link to="/aboutUs">
          <li>关于我们</li>
        </router-link>
          <li class="right"><router-link to="/login"><span>登陆</span></router-link><span class="logout" @click="logout">注销</span></li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    logout: function () {
      console.log(0)
      this.$store.commit('isLogin', {status: false})
      this.$router.push({ path: '/login' })
    }
  }
}

</script>
<style lang='scss' scoped>
.H-container{
  width: 100%;
  background: #67C23A;
  header{
    ul{
      width: 100%;
      overflow: hidden;
      a{
        text-decoration: none;
        color: #ffffff;
      }
      li{
        width: 20%;
        float: left;
        line-height: 30px;
        text-align: center;
        font-size: 20px;
        // border: 1px solid #000;
        .logout{
          color: #ffffff;
        }
        span{
          display: inline-block;
          width: 50px;
          cursor: pointer;
        }
      }
      .right{
        float: right;
      }
    }
  }
}
</style>
