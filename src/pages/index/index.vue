<template>
  <div @click="clickHandle">
    <div class="userinfo">
      <div class="userinfo-avatar" @click="bindViewTap">
        <!-- 展示用户头像 -->
        <open-data type="userAvatarUrl" id="user_icon"></open-data>
      </div>
      <form>
        <input type="text" class='search' placeholder="立即搜索商品">
      </form>
    </div>
    <!-- 主页容器 -->
    <div class="main_container">
      <div class="top_background">
        <div class="swiper-container">
          <swiper
            :indicator-dots='true'
            indicator-color='#d8d8d8'
            indicator-active-color='#ffad36'
            :autoplay='true'
            :interval='3000'
            :duration='1000'
            :circular='true'
            style="z-index: 100; height:9rem;"
          >
            <a v-for='img in topSwipers' :key="img.id">
              <swiper-item>
                <img
                  class='slide-image'
                  :src='img.outterImage'
                />
              </swiper-item>
            </a>
          </swiper>
        </div>
      </div>

      <div class='swiper'>
        <!-- 轮播图 -->

        <!-- 主要店铺及分类 -->
        <div class="items">
          <ul>
            <li v-for="item in items" :key="item.id">
              <navigator url='../classify/main' hover-class="none">
                <div class="item" :class="item.color">{{item.shortName}}</div>
                <div class="label">{{item.itemName}}</div>
              </navigator>
            </li>
          </ul>
        </div>
        <!-- 促销页面 -->
        <div class="saling">
          营销活动区
        </div>
        <!-- 招商页面 -->
        <div class="saling">
          广告展示区
        </div>

      </div>
      <button class="get_usrinfo" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">获取用户信息</button>
    </div>
  </div>
</template>

<script>
  import card from '@/components/card'

  export default {
    data () {
      return {
        motto: 'Hello miniprograme',
        topSwipers: [
          {
            id: 1,
            outterImage: '../../static/swiper/a1.jpg'
          },
          {
            id: 2,
            outterImage: '../../static/swiper/a2.png'
          },
          {
            id: 3,
            outterImage: '../../static/swiper/a3.png'
          }],

        items: [
          {
            id: 1,
            color: 'green',
            shortName: '鲜品',
            itemName: '西和鲜品'
          },
          {
            id: 2,
            color: 'yellow',
            shortName: '百货',
            itemName: '百货便利'
          },
          {
            id: 3,
            color: 'blue',
            shortName: '电器',
            itemName: '家用电器'
          },
          {
            id: 4,
            color: 'orange',
            shortName: '其它',
            itemName: '其他分类'
          },
          {
            id: 4,
            color: 'orange',
            shortName: '其它',
            itemName: '其他分类'
          },
          {
            id: 4,
            color: 'orange',
            shortName: '其它',
            itemName: '其他分类'
          },
          {
            id: 4,
            color: 'orange',
            shortName: '其它',
            itemName: '其他分类'
          },
          {
            id: 4,
            color: 'orange',
            shortName: '其它',
            itemName: '其他分类'
          }],

        userInfo: {
          nickName: 'mpvue',
          avatarUrl: 'http://mpvue.com/assets/logo.png'
        }
      }
    },
    bindGetUserInfo (e) {
      console.log('have come into this')
      console.log(e.mp.detail.userInfo)
    },

    components: {
      card
    },

    methods: {
      bindViewTap () {
        const url = '../logs/main'
        if (mpvuePlatform === 'wx') {
          mpvue.switchTab({url})
        } else {
          mpvue.navigateTo({url})
        }
      },
      clickHandle (ev) {
        console.log('clickHandle:', ev)
        // throw {message: 'custom test'}
      }
    },

    created () {
      // let app = getApp()
    }
  }
</script>

<style scoped>
  .topic {
    font-family: '微软雅黑';
    font-weight: 700;
    color: dimgray;
    padding: 20rpx;
    font-size:30rpx;
    float: left;
  }
  .more{
    font-family: '微软雅黑';
    font-weight: 700;
    color: dimgray;
    padding: 20rpx;
    font-size:30rpx;
    margin-left: 68%;
  }
  .swiper-container {
    border-radius: 10px;
    box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.18);
    position:absolute;
    left:9px;
    right:9px;
    top:160rpx;
    /* height:365rpx; */
  }
  .swiper{
    width: 100%;
    border-radius: 10px;
    margin-top: 40px;
  }
  .slide-image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .saling{

    height: 210px;
    line-height: 210px;
    border-radius: 10px;
    background-color: rgba(247, 247, 247, 1);
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    font-family: -apple-system;
    border: 1px solid rgba(255, 255, 255, 0);
    /*box-shadow: 0rpx 10rpx 50rpx rgba(0, 0, 0, 0.3);*/
  }
  .userinfo {
    position: fixed;
    z-index: 3;
    /* margin-top: 50rpx; */
    width: 750rpx;
    height: 152rpx;
    color: #fff;
    display: flex;
    flex-direction: column;
    background-color: #E23725;
    /* border-radius:  0 0 20% 20%; */
    /* align-items: center;  */
  }
  .top_background{
    background-color:#E23725;
    width: 100%;
    height: 420rpx;
    border-radius:  0 0 20% 20%;
  }
  .userinfo-avatar {
    overflow:hidden;
    display: block;
    width: 70rpx;
    height: 70rpx;
    margin: 30rpx;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    float: left;
  }
  .items {
    height:190px;
    white-space: normal;
    padding: 0 10px;
  }

  .items .item {
    width: 56px;
    height: 56px;
    line-height: 56px;
    text-align: center;
    text-align: center;
    box-shadow: 0px 2px 6px 0px rgba(162, 154, 154, 0.4);
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 50%;
    font-size: .8em;
    color: white;
  }
  .items .item.green{
    background-color: rgba(146, 208, 76, 1);
  }

  .items .item.yellow{
    background-color: rgba(255, 186, 0, 1);
  }

  .items .item.blue{
    background-color: rgba(0, 201, 255, 1);
  }

  .items .item.orange{
    background-color: rgba(255, 122, 64, 1);
  }

  .items .label {
    width: 56px;
    color: rgba(98, 97, 97, 1);
    font-size: 14px;
    text-align: center;
    line-height: 10px;
    font-family: SourceHanSansSC-regular;
    padding: 5px 0;
  }
  .items ul {
    display: flex;
    flex: 0 0 1;
    flex-wrap: wrap;
    justify-content: center;
  }
  .items ul li{
    padding: 0.2rem 0.3rem 0.2rem 0.3rem;
  }
  .items ul li img{
    width: 100rpx;
    height: 100rpx;
    float: left;
    overflow: hidden;
    display: inline-block;
    padding-left: 0.18rem
  }
  .userinfo-nickname {
    color: #aaa;
  }
  .get_usrinfo{
    position: fixed;
    z-index: 1;
    margin-top: 90%;
  }
  .search{
    background-color: rgb(238, 238, 238);
    border-radius: 40rpx;
    height: 75rpx;
    width:570rpx;
    margin-left: 140rpx;
    margin-top: -105rpx;
    font-size: 30rpx;
    text-align: center;
    color: dimgray
  }
  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }
  .all{
    width:7.5rem;
    height:1rem;
    background-color:blue;
  }
  .all:after{
    display:block;
    content:'';
    clear:both;
  }
  .left{
    float:left;
    width:3rem;
    height:1rem;
    background-color:red;
  }

  .right{
    float:left;
    width:4.5rem;
    height:1rem;
    background-color:green;
  }
  .user_icon{
    border-radius: 50%;
  }
</style>
