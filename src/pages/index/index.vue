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
    <div class="top_background"></div>
    <div class='swiper'>
    <!-- 轮播图 -->
    <swiper
      :indicator-dots='true'
      indicator-color='#d8d8d8'
      indicator-active-color = '#ffad36'
      :autoplay='true'
      :interval='3000'
      :duration='1000'
      :circular='true'
    >
      <a v-for='img in topSwipers' :key="img.id">
        <swiper-item>
          <img              
            class='slide-image' 
            mode='aspectFit' 
            :src='img.outterImage'
            />
        </swiper-item>
      </a>
    </swiper>  
    <!-- 主要店铺及分类 -->
    <div class="items">
        <ul>
          <li v-for="item in items" :key="item.id"><img :src="item.itemUrl"/><div>{{item.itemName}}</div></li>
        </ul>
    </div>
    <!-- 促销页面 -->
    <div class="saling">
      <div class="topic">精品促销</div>
      <div class="more">■ 查看更多</div>
    </div>
    <!-- 招商页面 -->
     <div class="saling">
      <div class="topic">招商展位</div>
      <div class="more">■ 查看更多</div>
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
      topSwipers: [{
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

      items: [{
        id: 1,
        itemUrl: '../../static/items/i1.png',
        itemName: '西和鲜品'
      },
      {
        id: 2,
        itemUrl: '../../static/items/i1.png',
        itemName: '百货便利'
      },
      {
        id: 3,
        itemUrl: '../../static/items/i1.png',
        itemName: '家用电器'
      },
      {
        id: 4,
        itemUrl: '../../static/items/i1.png',
        itemName: '其他分类'
      },
      {
        id: 4,
        itemUrl: '../../static/items/i1.png',
        itemName: '其他分类'
      },
      {
        id: 4,
        itemUrl: '../../static/items/i1.png',
        itemName: '其他分类'
      },
      {
        id: 4,
        itemUrl: '../../static/items/i1.png',
        itemName: '其他分类'
      },
      {
        id: 4,
        itemUrl: '../../static/items/i1.png',
        itemName: '其他分类'
      },
      {
        id: 4,
        itemUrl: '../../static/items/i1.png',
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
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
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
.swiper{
  width: 95%;
  height: 188px;
  margin-top:-288rpx;
  margin-left: 2.5%;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.6);  
}
swiper{
  height: 188px;
}
.saling{
  margin-top: 0.5rem;
  width: 100%;
  height: 100%;
  border-radius: 10rpx;
  box-shadow: 0rpx 10rpx 50rpx rgba(0, 0, 0, 0.3);
}
.swiper .slide-image {        
    width:100%;
    height: 100%;
    border-radius: 10%;
    /* height:300rpx; */
    /* margin-top: -15rpx; */
}
.userinfo {
  position: fixed;  
  z-index: 3;
  /* margin-top: 50rpx; */
  width: 750rpx;  
  height: 51px;  
  color: #fff;  
  display: flex;  
  flex-direction: column;  
  background-color:#db3524;
  /* border-radius:  0 0 20% 20%; */
  /* align-items: center;  */
}
.top_background{
  background-color:#db3524;
  width: 100%;
  height: 203px;
  border-radius:  0 0 20px 20px;
}
.userinfo-avatar {
  overflow:hidden;  
  display: block;  
  width: 31px;  
  height: 31px;  
  margin-left: 15px;
  margin-top: 7px;  
  border-radius: 50%;  
  border: 2px solid #fff;  
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);  
  float: left;
}
.items {
  width:100%;
  height:80px;
  margin-top: 0.2rem;
  white-space: normal;
  overflow-x: auto;
}

.items ul li{
  widows: 100rpx;
  height: 150rpx;
  float: left;
  padding: 0.2rem;
  overflow: hidden;
  display: inline-block;
  width: 19%;
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
  height: 31px;
  width: 257px;
  margin-left: 128rpx;
  margin-top: -66rpx;
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
::-webkit-scrollbar-thumb
{
border-radius: 10px;
background-color: yellow;
}
</style>
