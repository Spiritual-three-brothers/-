<template>
  <div class="main_container">
    <div :class="mask"></div>
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
    
    <div class='sale' style="display:flex;padding-top:6px" v-if="curritem.sale">
     <div style="width:23%;padding:3px;color:dimgray" >优惠</div>
     <div @click="triggerTransition">
      <div v-for='item in curritem.sale' class="saleTitle" :key="item.id">
        {{item.title}}
      </div>
      </div>
      <div @click="triggerTransition" class="more">...</div>
    </div>

    <div class="choosen">
      <div style="color:dimgray">已选</div>
      <div style="flex:6" @click="triggerTransition1">{{curritem.weight}} {{setTitle}} {{count}}个</div>
      <div style="font-size:41px;line-height:27px;color:dimgray" @click="triggerTransition1">...</div>
    </div>
    <div style="background: rgb(238, 238, 238);width: 100%;height: 1rpx;"></div>
    <div class="choosen">
      <div style="color:dimgray">送至</div>
      <div style="flex:6"></div>
      <div style="font-size:41px;line-height:27px;color:dimgray" @click="triggerTransition">...</div>
    </div>

    <div style="background: rgb(238, 238, 238);width: 100%;height: 15px;"></div>
    <div v-for="img in topSwipers" :key="img.id">
      <img style='width:100%' :src="img.outterImage">
    </div>
    <div style="height:200px"></div>
    <div class="bottom-bar">
      <div class="left-block">
        <div style="display: flex">
          <div style="flex: 1;text-align: center;background:white">
            <div class="icon iconfont" style="height: 20px">&#xe603;</div>
            <div style="font-size: 10px;">购物车</div>
          </div>
          <div style="flex: 1;text-align: center;background:white">
            <div class="icon iconfont" style="height: 20px">&#xe604;</div>
            <div style="font-size: 10px;">商城</div>
          </div>
        </div>
      </div>
      <div class="bottom-button" @click="click">立即购买</div>
      <div class="bottom-button" @click="click">加入购物车</div>
    </div>
    <!-- 弹出式购买选项及数目菜单 -->
    <div class="shoppingBar"  :class="extraClasses1">
      <div class="onBarTop">
        <img class="displayImg" :src='curritem.item_display_images' />
        <div class="price">￥{{curritem.price}}</div>
        <div class="haveChosen">已选 {{curritem.weight}} {{setTitle}} {{count}}份</div>
        <div class="closeBar" @click="triggerTransition1">×</div>
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
          <div class="bottom-button" @click="triggerTransition1" style="background-color: rgb(244, 170, 62);">立即购买</div>
          <div class="bottom-button" @click="triggerTransition1">加入购物车</div>
        </div>  
      </div>
      </div>
    </div>
    <!-- 弹出式优惠选项菜单 -->
    <div class="shoppingBar" style="height:400rpx;bottom:-200px;" :class="extraClasses">
      <div style="display:flex">
        <div style="flex:8">
        <div v-for='item in curritem.sale' class="saleTitle"  :key="item.id">
          {{item.title}}
        </div>
        </div>
        <div @click="triggerTransition" class="closeBar" style="flex:1;margin:0">×</div>
      </div>
    </div>
    <!-- 弹出式地址选择菜单 -->
    <div  style="width:100%;height:200px;background:red;position:fixed;z-index:6">
      <div style="width:100%;height:200px;background:red;position:absloute"></div>
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
          {id: 0, title: '欧诗漫瓶装'},
          {id: 1, title: '欧诗漫简装'}
        ],
        sale: [{id: 10201, title: '购买任意超100元产品,所有商品折扣8%', sale: '8%'},
          {id: 10201, title: '购买超1000元的商品,总价格折扣50元', sale: '-20'}
        ],
        item_display_images: '../../static/item/osm.jpg'
      },
      setBGC: 0,
      setType: 0,
      setTitle: '',
      extraClasses: '',
      extraClasses1: '',
      mask: ''
    }
  },
  methods: {
    triggerTransition () {
      var that = this
      if (this.extraClasses === 'box-transition box-moved') {
        that.extraClasses = 'box-transition'
        that.mask = 'box-transition maskUnshow'
      } else {
        that.extraClasses = 'box-transition box-moved'
        that.mask = 'box-transition mask'
      }
    },
    triggerTransition1 () {
      var that = this
      if (this.extraClasses1 === 'box-transition box1-moved') {
        that.extraClasses1 = 'box-transition'
        that.mask = 'box-transition maskUnshow'
      } else {
        that.extraClasses1 = 'box-transition box1-moved'
        that.mask = 'box-transition mask'
      }
    },
    changeBGC (event, index) {
      this.setBGC = index
      this.setType = index
      var name = this.curritem.types[index].title
      this.setTitle = name
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
/* 动态弹出控件 */
  .box{
    position: fixed;
    z-index: 6;
    background: red;
    margin: 60rpx;
    width: 100%;
    height: 100px;
  }
  .box-transition {
  transition: all 0.5s;
  }
  .box-moved {
  margin-bottom: 200px;
  }
  .box1-moved {
  margin-bottom: 718rpx;
  }
  @keyframes box-ani {
  from {margin-left: 60rpx}
  to {margin-left: 590rpx}
  }
  .box-animation {
  animation: box-ani 1s alternate infinite;
  }
/* 已选和送至div */
  .choosen{
    display: flex;
    height: 60px;
    line-height: 60px;
    width: 100%;
  }
  .choosen div{
    flex: 1;
    line-height: 55px;
    padding-left: 10px;
  }
  .more{
    width: 15%;
    text-align: center;
    line-height: 4px;
    font-size: 41px;
    margin-right: 8px;
    color: dimgray;
  }
  .saleTitle{
    padding:3px;
    overflow: hidden;
    white-space: nowrap;
    width: 240px;
    text-overflow :ellipsis;
  }
  .sale{
    border-top: solid 15px  rgb(238, 238, 238);
    border-bottom: solid 15px  rgb(238, 238, 238);
    padding-left: 9px;
    padding-right: 9px;
    width: 96%;
    min-height: 140rpx;
  }
  .sale div{
    float: left;
  }
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
    color: rgba(251, 77, 83, 1);
    padding: 6px;
    font-size: 12px;
    border-radius: 8px;
    background: rgba(247, 0, 17, 0.13);
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
    bottom: -718rpx;
    background:rgb(247, 247, 247);
    position: fixed;
    z-index: 6;
  }
  /* 遮罩层 */
  .mask{
    width: 100%;
    height: 200rem;
    position: fixed;
    z-index: 5;
    background: rgba(0, 0, 0, 0.65)
  }
  .maksUnshow{
    display: none;
  }
  /* 轮播图 */
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
/* 主界面 */
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
    font-weight: 600;
    color: rgb(87, 86, 86)
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
