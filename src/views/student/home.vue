<template>
  <div class="home">
    <div class="left">
      <div class="card nav">
        <ul class="tab">
          <li>
            <a href="javascript:;">
              <i class="iconfont icon-tiwen"></i>推荐</a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="iconfont icon-huida"></i>等待问答</a>
          </li>
          <li>
            <a href="javascript:;"> <i class="iconfont icon-tianxie"></i>写文章</a>
          </li>
        </ul>
      </div>

      <div class="contents">
        <div class="card" v-for="n in 3" style="padding: 10px;" :key="n">
          <div class="article">
            <div class="article-from">
              <div class="user-avatar">
                <img src="/static/images/avatar.jpg" alt="">
              </div>
              <div class="user-name">
                杰克叔叔，
              </div>
              <div class="user-form">
                杭州学军中学
              </div>
            </div>
            <div class="article-title">
              <a href="javascript:;">关于A+B问题的解决思路？</a>
            </div>
            <div>
              <div class="article-extra"></div>
              <div class="article-info">
                高中同学，
                貌不惊人，
                一年四季校服，
                手上一块儿童表，
                脚上回力安踏贵人鸟，
                食堂吃饭永远一荤两素，
                只喝一加仑装的农夫山泉，
                话不多朋友很少...
                <a href="javascript:;" class="expand">
                  阅读全文 <Icon type="chevron-down"></Icon>
                </a>
              </div>
            </div>

            <div class="article-bar">
              <Button type="primary" icon="arrow-up-b">3.1k</Button>
              <a class="ivu-btn ">
                <i class="ivu-icon ivu-icon-arrow-down-b"></i>
              </a>

              <a href="javascript:;" class="btn-answer">
                <Icon type="chatbubble"></Icon>
                345 个回答
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="card">
        <div class="my-avatar">
          <span class="avatar"></span>
          <p class="name">演示帐号
            <Tag style="margin: 0" color="yellow">LV4</Tag>
          </p>
        </div>
        <div class="my-info">
          <div class="my-info-detail">
            <div class="block">
              <a href="javascript:;">提问(<strong>2</strong>)</a>
            </div>
            <div class="block">
              <a href="javascript:;">回答(<strong>12</strong>)
              </a>
            </div>
            <div class="block">
              <a href="javascript:;">
                关注(<strong>5</strong>)
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <header>我的考试</header>
        <div class="my-test">
          <div class="block">
            <h5>解决</h5>
            <p>12</p>
          </div>
          <div class="block">
            <h5>提交</h5>
            <p>22</p>
          </div>
          <div  class="block">
            <h5>分数</h5>
            <p>90</p>
          </div>
        </div>
      </div>
      <div class="card">
        <header>热门课程</header>
        <div class="lesson-list">
          <div class="lesson" v-for="n in 3" :key="n">
            <div class="lesson-pic">
            </div>
            <div class="lesson-info">
              <h5>C++初级入门课程</h5>
              <p>1023人已学习
                <Button type="primary" style="float: right" size="small">学习 <Icon type="arrow-right-b"></Icon></Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'home',
  }
</script>
<style lang="less" scoped>
  .home{
    padding: 20px 0;
    display: flex;
    font-size: 14px;
    width: 1200px;
    color: #444;
    margin: 0 auto;
    .card{
      background-color: #fff;
      margin-bottom: 10px;
      overflow: hidden;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(26,26,26,.1);
      box-sizing: border-box;
    }

    .article {
      padding: 10px 10px 0 10px;
      .article-from{
        display: flex;
        .user-avatar{
          width: 25px;
          height: 25px;
          text-align: left;
          margin-right: 10px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .user-name {
          color: #444;
          font-size: 15px;
          font-weight: 600;
        }

        .user-form{
          font-size: 14px;
          color: #646464;
        }
      }
      .article-title{
        margin-top: 10px;
        a{
          font-size: 18px;
          font-weight: 600;
          line-height: 1.6;
          color: #1a1a1a;
          &:hover{
            color: #175199;
          }
        }
      }

      .article-info{
        margin-top: 10px;
        line-height: 1.67;
        color: #1a1a1a;
        font-size: 15px;
        .expand {
          color: #175199;
          &:hover{
            color: gray;
          }
        }
      }

      .article-bar{
        margin-top: 10px;

        .btn-answer{
          margin-left: 24px;
          color: #8590a6;
          font-size: 14px;
          &:hover{
            color: #77839c;
          }
        }
      }
    }

    .my-avatar {
      text-align: center;
      margin-top: 10px;
      .avatar{
        display: inline-block;
        width: 120px;
        height: 120px;
        background: url("/static/images/person.jpg") no-repeat;
        background-size: contain;
        border-radius: 50%;
        box-shadow:  0 2px 7px 0 rgba(0,0,0,.26);
      }
      .name{
        padding: 5px 0;
        border-bottom: 1px solid #f5f5f5;
      }
    }

    .my-info{
      .my-info-detail{
        display: flex;
        .block {
          flex: 1;
          text-align: center;
          a{
            font-size: 14px;
            line-height: 42px;
            color: #1a1a1a;
            a:hover{
              color: #175199;
            }

            strong{
              color: #175199;
            }
          }
        }
      }
    }

    header{
      padding: 0 20px;
      border-bottom: 1px solid #f5f5f5;
      line-height: 42px;
    }

    .lesson-list{
      .lesson{
        padding: 20px;
        display: flex;
        .lesson-pic{
          background-image: url(https://user-gold-cdn.xitu.io/2017/11/20/15fd7937bfca9d71?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1);
          background-size: cover;
          height: 72px;
          width: 52px;
          box-shadow: 0 2px 7px 0 rgba(0,0,0,.26);
        }

        .lesson-info{
          flex: 1;
          padding: 0 10px;
          h5{
            margin: 0;
            font-weight: 500;
            font-size: 14px;
            color: #333;
            line-height: 1.3;
          }
          p{
            margin: 5px 0 0 0;
            color: #878c90;
            font-size: 12px;
            line-height: 2;
          }
        }
      }
    }

    .my-test{
      display: flex;
      padding: 10px 0;
      .block{
        flex: 1;
        text-align: center;
        border-right: 1px solid #f5f5f5;
        h5{
          font-weight: 400;
        }
        p{
          margin-top: 5px;
          color: #175199;
          font-size: 18px;
        }
        &:last-child{
          border-right: none;
        }
      }
    }

    .card.nav{
      line-height: 58px;

      .tab{
        li{
          display: inline-block;
          a{
            display: block;
            color: #1a1a1a;
            font-size: 16px;
            padding: 0 20px;
            .iconfont{
              color: #8590A6;
              margin-right: 8px;
            }

            &:hover{
              color: #175199;
            }
          }
        }
      }
    }

    .left{
      flex: 1;
    }

    .main {
      padding-left: 10px;
      width: 300px;
    }

  }
</style>
