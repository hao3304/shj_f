<template>
  <div class="login">
    <section class="login-block">
      <h5>爱生活，爱编程</h5>
      <ul class="tab">
        <li class="active">
          <a href="javascript:;">登录</a>
        </li>
        <li>
          <a disabled href="javascript:;">注册</a>
        </li>
      </ul>
      <div class="form">
        <input v-model="form.username" type="text" placeholder="请输入您的用户名">
        <input v-model="form.password" type="password" placeholder="请输入您的密码">
      </div>
      <button @click="onLogin" class="submit">
        登录
      </button>
    </section>
    <vue-particles color="#fff"></vue-particles>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data(){
      return {
        form:{
          username:'demo',
          password:'demo'
        }
      }
    },
    methods: {
      onLogin () {
        this.$router.push('/student')
      }
    }
  }
</script>
<style lang="less">
  .login {
    height: 100%;
    position: relative;
    background: url("~/static/images/bg.jpg") no-repeat;

    .login-block{
      text-align: center;
      background-color: rgba(255,255,255,.9);
      position: absolute;
      width: 300px;
      border-radius: 5px;
      left: 50%;
      margin-left: -150px;
      box-sizing: border-box;
      padding: 0 10px;
      top: 50%;
      margin-top: -200px;
      h5{
        font-size: 18px;
        font-weight: 400;
        color: #555;
        margin: 30px 0 20px 0;
      }

      ul.tab {
        padding: 0;
        margin-bottom: 15px;
        li {
          list-style: none;
          display: inline-block;
          width: 75px;
          a{
            display: block;
            text-decoration: none;
            text-align: center;
            color: #555;
            opacity: .7;
            line-height: 35px;
            transition:opacity .15s,color .15s;
            position: relative;
            font-size: 16px;
          }

          &.active {
            a{
              color: #0f88eb;
              opacity: 1;
              &:after{
                content: ' ';
                position: absolute;
                bottom:0;
                left: 50%;
                width:40px;
                height:2px;
                background-color: #0f88eb;
                margin-left: -20px;
              }
            }
          }
        }
      }

      .form{
        border:1px solid #d5d5d5;
        border-radius: 3px;
        background: rgba(255,255,255,0.5);
        input {
          display: block;
          width: 100%;
          border:none;
          color: #666;
          font-family: 'Microsoft Yahei';
          padding: 1em .8em;
          box-sizing: border-box;

          &:first-child{
            border-bottom: 1px solid #ddd;
          }
        }
      }

      .submit{
        width: 100%;
        border:none;
        margin: 20px 0;
        background-color: #0f88eb;
        border-radius: 3px;
        line-height: 41px;
        color: #fff;
        box-shadow: none;
        font-family: 'Microsoft Yahei';
        font-size: 15px;
        cursor: pointer;

        &:hover {
          background-color: #2d96ec;
        }
      }
    }
  }
</style>
