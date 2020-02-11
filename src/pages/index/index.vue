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
        <!-- 测试页面入口 -->
        <div @click="test_enter" style="text-align:center">测试入口</div>
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
            outterImage: '../../static/swiper/a1.jpg'
          },
          {
            id: 3,
            outterImage: '../../static/swiper/a1.jpg'
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
      },
      test_enter () {
        wx.navigateTo({url: '../unpaid/main'})
      }
    },

    created () {
      // let app = getApp()
    }
  }
</script>

<style lang="sass">
  @import "./index.sass"

</style>

