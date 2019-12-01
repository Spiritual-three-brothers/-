<template>
  <div class="main_container">
    <div class="mask" v-show="isShow"></div>
    <swiper
      :indicator-dots='true'
      indicator-color='#d8d8d8'
      indicator-active-color='#ffad36'
      :autoplay='true'
      :interval='3000'
      :duration='1000'
      :circular='true'
    >

      <swiper-item v-for='img in topSwipers' :key="img.id" class="swiper-item">
        <img
          class='slide-image'
          :src='img.outterImage'
        />
      </swiper-item>

    </swiper>
    <div class="price">
      ￥{{curritem.price}}
    </div>
    <div class="full_title">
      {{curritem.full_title}}
    </div>
    <div class="bottom-bar">

      <div class="left-block">
        <div style="display: flex">
          <div style="flex: 1;text-align: center">
            <div class="icon iconfont" style="height: 20px">&#xe603;</div>
            <div style="font-size: 10px;">购物车</div>
          </div>
          <div style="flex: 1;text-align: center">
            <div class="icon iconfont" style="height: 20px">&#xe604;</div>
            <div style="font-size: 10px;">商城</div>
          </div>
        </div>
      </div>
      <div class="bottom-button" @click="click">立即购买</div>
      <div class="bottom-button" @click="click">加入购物车</div>
    </div>
    <div class="shoppingBar" v-show="isShow">
      <div class="onBarTop">
        <img class="displayImg" :src='curritem.item_display_images' />
        <div class="price">￥{{curritem.price}}</div>
        <div class="haveChosen">已选 {{curritem.weight}} {{count}}份</div>
        <div class="closeBar" @click="click">×</div>
      </div>
      <div class="onBarMid">
        <div class="minialert">产品类型</div>
        <div class="singleTypes" @click="changeBGC($event, index)" :class="{divBGC:setBGC == index}" v-for="(item, index) in curritem.types" :key="item.id">
            {{item.title}}
        </div>
        <div class="minialert2">数量</div>
        <div class="counter-warp">
            <button @click="decrement" v-bind:disabled='count == 1'>-</button>
             <button>{{count}}</button>
            <button @click="increment">+</button>
        </div>
      <div class="onBarBottom">
        <div class="bottom-bar">
          <div class="bottom-button" style="background-color: rgb(244, 170, 62);">立即购买</div>
          <div class="bottom-button">加入购物车</div>
        </div>  
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from './store'
export default {
  data () {
    return {
      topSwipers: [
        {
          id: 1,
          outterImage: '../../static/item/osm.jpg'
        },
        {
          id: 2,
          outterImage: '../../static/item/osm.jpg'
        },
        {
          id: 3,
          outterImage: '../../static/item/osm.jpg'
        }],
      curritem: {
        item_id: '3122313',
        price: '12.3',
        full_title: '欧诗漫OSM美白化妆品套装 营养美肤晶彩无暇补水保湿护肤品礼盒套装女',
        weight: '250ml',
        types: [
          {id: 1, title: '欧诗漫瓶装'},
          {id: 2, title: '欧诗漫罐装'}
        ],
        item_display_images: '../../static/item/osm.jpg'
      },
      isShow: false,
      setBGC: 0
    }
  },
  methods: {
    click () {
      this.isShow = !this.isShow
    },
    changeBGC (event, index) {
      this.setBGC = index
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  }
}
</script>
<style scoped>
  button{
    border-radius: 0%;
    background: rgb(238, 238, 238);
    line-height: 1.7;
  }
  button::after{
    border-radius: 0%;
    border: 1px solid white;
  }
  button[disabled]{
    color: rgb(245, 245, 245);
    background: rgb(238, 238, 238);
  }
  .counter-warp{
    float: right;
    margin-right: 21px;
    margin-top: -20px;
  }
  .counter-warp button{
    float: left
  }
  .singleTypes{
    float: left;
    margin-left: 19px;
    color: black;
    padding: 6px;
    font-size: 12px;
    border-radius: 8px;
    background: rgb(238, 238, 239);
  }
  .minialert{
    margin: 25px 20px 3px;
    color: dimgray;
    font-size: 13px;
  }
  .minialert2{
    margin: 50px 20px 3px;
    color: dimgray;
    font-size: 13px;
  }
  .divBGC{
    background: #FB4D53;
    color: white;
  }
  .closeBar{
    float: right;
    font-size: 35px;
    margin: -60px 10px 0 0;
    color: dimgray;
  }
  .displayImg{
    width: 161rpx;
    height: 161rpx;
    margin: -20px 20px;
    border: 4rpx solid #fff;
    float: left;
  }
  .shoppingBar{
    width: 100%;
    height: 718rpx;
    bottom: 0;
    background:rgb(247, 247, 247);
    position: fixed;
    z-index: 6;
  }
  .mask{
    width: 100%;
    height: 200rem;
    position: fixed;
    z-index: 5;
    background: rgba(0, 0, 0, 0.65)
  }
  swiper {
    width: 100%;
    height: 335px;
  }

  .swiper-item {
    width: 100%;
    height: 100%;
  }

  .swiper-item image {
    width: 100%;
    height: 100%;
  }

  .price {
    margin-left: 11px;
    font-size: 22px;
    font-weight: bold;
    margin-top: 5px;
    color: #FB4D53;
  }
  .full_title {
    font-size: 18px;
    padding: 5px;
    margin: 5px;
  }
  .bottom-bar {
    display: flex;
    height: 60px;
    line-height: 60px;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .bottom-bar .left-block {
    flex: 0 0 150px;
  }
  .bottom-bar .bottom-button {
    flex:1;
    float: right;
    width: 120px;
    height: 100%;
    font-size: 14px;
    text-align: center;
    color: white;
  }
  .bottom-bar .bottom-button:nth-child(2) {
    background-color: rgb(244, 170, 62);
  }
  .bottom-bar .bottom-button:last-child {
    background-color: rgb(244, 50, 56);
  }
</style>
