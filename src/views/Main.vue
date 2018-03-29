<template>
  <div class="M-cintainer">
    <div class="perInfo">
      <h1>个人中心</h1>
      <section v-show="userToken">
      <p>欢迎{{userInfo.name}}
        <img src="http://diy.qqjay.com/u2/2013/0806/44ef838d8408344b0cfdaa279133aa42.jpg" alt="">
      </p>
      <p>{{userInfo.address}}</p>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  created: function () {
    this.$http({
      url: '/getUsers',
      method: 'get',
      params: {
        id: 'asdsadsadsa'
      }
    }).then(res => {
      // console.log(res.data)
      if (res.data.userInfo) {
        this.userInfo = res.data.userInfo
      }
    }).catch(err => {
      console.log(err)
    })
  },
  computed: {
    userToken () {
      // 因为在main.js中已经全局注册了store，所以这里直接用this.$直接使用。
      return this.$store.state.userToken
    }
  }
}
</script>
<style lang="scss">
.M-cintainer{
  width: 100%;
  .perInfo{
    margin: 20px 20px;
    p{
      height: 70px;
      line-height: 70px;
      img{
        width: 70px;
        height: 70px;
        margin-left:20px;
        border-radius: 50%;
      }
    }
  }
}
</style>
