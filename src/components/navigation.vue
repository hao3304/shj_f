<template>
  <header class="navigation">
    <span class="logo">
      爱编程
    </span>
    <ul class="nav">
      <li class="active">
        <a href="javascript:;">首页</a>
      </li>
      <li>
        <a href="javascript:;">课程</a>
      </li>
      <li>
        <a href="javascript:;">训练</a>
      </li>
      <li>
        <a href="javascript:;">考试</a>
      </li>
    </ul>

    <ul class="info">
      <li>
        <Icon type="ios-bell"></Icon>
      </li>
      <li>
        <Poptip placement="bottom" >
          <div class="dropdown" slot="content">
            <ul>
              <li @click="onLogout">
                <Icon type="log-out"></Icon>
                退出
              </li>
            </ul>
          </div>

          <a href="javascript:;">
            <Avatar icon="person" />
            &nbsp;演示帐号
          </a>
        </Poptip>
      </li>
    </ul>
  </header>
</template>
<script>
  export default {
    name:'navigation',
    methods: {
      onLogout() {
        this.$router.push('/login')
      }
    }
  }
</script>
<style lang="less">
  .navigation{
    height: 52px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    padding: 0 40px;

    .ivu-poptip-body{
      padding: 0;
      .dropdown{
        ul{
          li{
            display: block;
            text-align: center;
            padding: 0;
            font-size: 14px;
            line-height: 36px;
            cursor: pointer;
            color: #8590a6;
            .ivu-icon{
              font-size: 16px;
            }
            &:hover{
              background-color: #f1f1f1;
            }
          }
        }
      }
    }


    .logo{
      float: left;
      line-height: 52px;
      color: #0084ff;
      font-size: 22px;
      font-weight: bold;
    }

    .nav{
      float: left;
      margin: 0;
      padding-left: 40px;
      li{
        display: inline-block;
        list-style: none;

        a{
          font-size: 16px;
          display: block;
          color: #8590a6;
          padding: 0 15px;
          text-decoration: none;
          line-height: 52px;
          position: relative;
          &:hover{
            color: #175199;
          }
        }

        &.active{
          a{
            color: #444;
          }
        }
      }
    }

    .info{
      float: right;
      li{
        display: inline-block;
        line-height: 52px;
        text-align: center;
        padding: 0 10px;
        font-size: 16px;
        .ivu-icon-ios-bell{
          font-size: 28px;
          vertical-align: middle;
          cursor: pointer;
          color: #8590a6;
        }
        a{
          display: block;
          color: #8590a6;
        }
      }
    }
  }
</style>
