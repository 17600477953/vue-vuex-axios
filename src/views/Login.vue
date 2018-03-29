<template>
  <div id="mask">
    <div class="inner">
        <p><span class="left just">用户名</span><input placeholder="请输入用户名..." v-model="name"/></p>
        <p><span class="left just">密码</span><input v-model="pwd" type="password" placeholder="请输入密码..."/></p>
      <p class="btn" @click="isLogin">登陆</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      pwd: '',
      error: ''
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    isLogin: function () {
      this.$http({
        url: '/login',
        method: 'get',
        params: {
          name: this.name,
          password: this.pwd
        }
      }).then(res => {
        // 这里在isLogin方法中先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
        // 注意这里是个难点，Vuex与Vue-Resource结合使用。
        // console.log(res.data.data)
        // if(response.body != null & response.body.length > 0){
        // this.$store.commit('isLogin',response.body[0]);
        // this.name=''
        // this.pwd= ''
        // this.$router.push({ path: 'main' })
        // }else{
        // alert('请输入正确的用户名和密码！！！');
        // this.name=''
        // this.pwd= ''
        // }
        if (res.data.data.token.status === true) {
          // console.log('登陆成功')
          console.log(res.data.data.token)
          this.$store.commit('isLogin', res.data.data.token)
          this.$router.push({ path: 'main' })
        } else {
          console.log('登陆失败')
          this.$store.commit('isLogin', res.data.data.token)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#mask{
  width: 100%;
  height: 100%;
  background: rgba($color: #f7f7f7, $alpha: 0.8);
  position: fixed;
  left:0;
  top:0;
  .inner{
    width: 250px;
    height: 300px;
    background: #F56C6C;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top:10px ;
    .btn{
      width: 150px;
      height: 30px;
      border-radius: 5px;
      text-align: center;
      line-height: 30px;
      background: #dddddd;
      margin: 30px auto;
    }
    p{
      line-height: 30px;
      height: 30px;
      margin: 10px 10px;
      .left{
        width: 60px;
        // border:1px solid #000;
        display: inline-block;
        height: 30px;
        float: left;
        margin-right:10px;
      }
      input{
        display: inline-block;
        width: 140px;
        border:1px solid #ccc;
        height: 30px;
        text-align: center;
      }
    }
  }
.just {
text-align: justify;
text-justify: distribute-all-lines;
}

.just:after {
width: 100%;
height: 0;
margin: 0;
display: inline-block;
overflow: hidden;
content: '';
}
}
</style>
