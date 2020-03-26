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
        <!-- <div class="icon_background"> -->
          <!-- &#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;
          &#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;
          &#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;
          &#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;&#xe616;&#xe617;&#xe614;
        </div> -->
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
        <div @click="test_enter2" style="text-align:center">测试入口</div>
        <!-- 促销页面 -->
        <div class="saling">
          <div class="title_contant">
            <div class="title">西和限时抢购</div>
            <div class="date_range">
              <div class="inside">02.06-02.10</div>
            </div>
            <div class="more_info">更多活动钜惠 &#xe637;</div>
          </div>
          <div class="page_container">
              <div class="promotion_page" v-for="singleItem in promotion" :key="singleItem.id">
                <img class="item_img" :src=singleItem.img_route>
                <div class="item_name">{{singleItem.item_name}}</div>
                <div class="control_container">
                  <div class="time_limit">限时</div>
                  <div class="item_price">￥{{singleItem.price}}</div>
                  <div class="original_price">￥{{singleItem.original_price}}</div>
                  <div class="add_icon">&#xe615;</div>
                </div>
              </div>
          </div>
        </div>
        <!-- 招商页面 -->
        <div class="saling">
          <div class="title_contant">
            <div class="title">西和热点资讯</div>
            <div class="date_range">
              <div class="news">10</div>
            </div>
            <div class="more_info">更多热点资讯 &#xe637;</div>
          </div>
          <div class="page_container">
              图片
          </div>
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
        promotion: [
          {
            id: 11,
            item_name: '天水红富士1Kg非常好吃的苹果',
            price: 32.8,
            original_price: 43.2,
            img_route: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583046796010&di=1fe9ad4672781c01a09e4c3cc394eecb&imgtype=0&src=http%3A%2F%2Fimg008.hc360.cn%2Fhb%2FMTQ2MDY3Mjc0NzUyOC02MTExNDM2NTA%3D.jpg'
          },
          {
            id: 11,
            item_name: '喀什日照瓜0.5kg精品西瓜子只卖西瓜子不卖西瓜谢谢大家',
            price: 15.6,
            original_price: 28.1,
            img_route: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583051045127&di=fa617d8b5c7b9ee70875cd0f112aa494&imgtype=0&src=http%3A%2F%2Fimgqn.koudaitong.com%2Fupload_files%2F2015%2F07%2F19%2FFi2Vw6M_raMqDzduQQLCJlGzVO7Y.jpg%2521580x580.jpg'
          },
          {
            id: 11,
            item_name: 'iPhone11 128G 手机壳清水手机壳赠送钢化膜',
            price: 9944,
            original_price: 5566,
            img_route: 'http://img3.imgtn.bdimg.com/it/u=2339639623,1005569462&fm=26&gp=0.jpg'
          }
        ],
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
      },
      test_enter2 () {
        wx.navigateTo({url: '../shop_page/main'})
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

