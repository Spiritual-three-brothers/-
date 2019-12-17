<template>
  <div class="main_container">
    <!-- 遮罩层 -->
    <div :class="mask"></div>
    <!-- 轮播图 -->
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
    <!-- 商品价格及full-title -->
    <div class="price">
     <div style="font-size:13px;float:left;margin-top:5px"> ￥</div>{{curritem.price}}
    </div>
    <div class="full_title">
      {{curritem.full_title}}
    </div>
    <!-- 优惠类型选择 -->
    <div class='sale' style="display:flex;padding-top:6px" v-if="curritem.sale">
     <div style="width:23%;padding:3px;color:dimgray" >优惠</div>
     <div @click="triggerTransition">
      <div v-for='item in curritem.sale' class="saleTitle" :key="item.id">
        <div class="sale-icon">优惠券</div>
        {{item.title}}
      </div>
      </div>
      <div @click="triggerTransition" class="more">...</div>
    </div>
    <!-- 已选菜单 -->
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
      <!-- 店铺信息 -->
    <div class="shop-bar">
      <div class="shop-info">
        <img :src="curritem.item_display_images" style="flex:2">
        <div>{{curritem.shopName}}</div>
      </div>
      <div class="shop-follower">
        <div style="flex: 1;border-right: solid 1px lightgray;">
          <div style="font-size:font-size: 15px;font-weight: bold;color: black;">17万</div>
          <div>粉丝人数</div>
        </div>
        <div style="flex:1">
          <div style="font-size:font-size: 15px;font-weight: bold;color: black;">22个</div>
          <div>全部商品</div>
        </div>
      </div>
      <div class="enter-shop">  <i class="iconfont" style="color: dimgray;margin-top: -1rpx;float: left;margin-right: 6px;">&#xe703;</i>进入店铺</div>
    </div>
    <!-- 详情 -->
    <div>
     <div class="navbar">
      <block v-for="(item,index) in tabs" :key="index">
        <div :id="index" :class="{'navbar_item_on':activeIndex == index}" class="navbar_item" @click="tabClick">
          <div class="navbar_title" @click="item_click" :class="onselected">{{item.name}}</div>
        </div>
      </block>
      <div class="navbar_slider" :class="navbarSliderClass"></div>
    </div>
    <!-- 用来容纳三个商品详情容器的div -->
    <div>
      <!-- 商品介绍栏目的内容 -->
      <div :hidden="activeIndex != 0">
        <div v-for="img in topSwipers" :key="img.id">
          <img :src="img.outterImage"/>
        </div>
      </div>
      <!-- 商品规格栏目的内容 -->
      <div :hidden="activeIndex != 1">
        <div style="padding:11px">

          <div style="display:flex;color:dimgray;margin-top:10px;margin-bottom:15px;">
            <div style="flex:3;background:dimgray;height:2rpx;margin-top:10px"></div>
            <div style="flex:2;text-align:center">包装清单</div>
            <div style="flex:3;background:dimgray;height:2rpx;margin-top:10px"></div>
          </div>

          <div style="text-align:left;font-size:13px;color:dimgray">{{curritem.weight}} {{setTitle}} {{count}}件</div>

          <div style="display:flex;color:dimgray;margin-top:10px;margin-bottom:15px;">
            <div style="flex:3;background:dimgray;height:2rpx;margin-top:10px"></div>
            <div style="flex:2;text-align:center">商品参数</div>
            <div style="flex:3;background:dimgray;height:2rpx;margin-top:10px"></div>
          </div>
          
          <div class="fs-table">
            <div class="fs-title">商品名称</div>
            <div class="fs-content">{{curritem.full_title}}</div>
          </div>
          <div class="fs-table">
            <div class="fs-title">商品单价</div>
            <div class="fs-content">{{curritem.price}}</div>
          </div>
          <div class="fs-table">
            <div class="fs-title">商品容量</div>
            <div class="fs-content">{{curritem.weight}}</div>
          </div>
          <div class="fs-table">
            <div class="fs-title">商品种类</div>
            <div class="fs-content">{{curritem.types[title]}}</div>
          </div>
        </div>
      </div>
      <!-- 售后保障栏目的内容 -->
      <div :hidden="activeIndex != 2">
        <div style="padding:11px;">
          <div style="font-size:13px;color:dimgray;line-height:23px;border:solid 1px lightgray;padding:11px;padding-bottom:20px">{{afterSale}}</div>
          <div class="iconfont" style="color: #FB4D53;font-size: 47px;text-align: center;margin-top:-18px;">&#xe708;</div>
        </div>
      </div>
    </div>
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
    <div class="shoppingBar"  :class="extraClasses">
      <div style="display:flex;background:lightgray;height:34px">
        <div style="flex:8;color:dimgray;line-height:34px;margin-left:10px"> 优惠</div>
        <div @click="triggerTransition" class="closeBar" style="flex:1;margin:-10px 0 0 0;">×</div>
      </div>
      <div >
        <div v-for='item in curritem.sale' style="display: flex;margin: 10px;height:70px; border-radius: 10px;border-bottom: solid 5px rgba(251, 77, 83, 1);box-shadow:6rpx 6rpx 20rpx rgba(0, 0, 0, 0.2);" :key="item.id">
          <div style="flex:3;line-height:70px;font-size:35px;margin-left:21px;color:rgba(251, 77, 83, 1);">{{item.sale}}</div>
          <div style="flex:7;">{{item.title}}</div>
        </div>
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
        shopName: '东百好果汁发哥旗舰店',
        types: [
          {id: 0, title: '欧诗漫瓶装'},
          {id: 1, title: '欧诗漫简装'}
        ],
        sale: [{id: 10201, title: '购买任意超100元产品,所有商品折扣8%', sale: '8%'},
          {id: 10201, title: '购买超1000元的商品,总价格折扣50元', sale: '-20'}
        ],
        item_display_images: '../../static/item/osm.jpg'
      },
      tabs: [
        {
          name: '商品介绍',
          type: '1',
          checked: true
        },
        {
          name: '规格参数',
          type: '2',
          checked: true
        },
        {
          name: '售后保障',
          type: '3',
          checked: true
        }
      ],
      activeIndex: 0,
      setBGC: 0,
      setType: 0,
      setTitle: '',
      extraClasses: '',
      extraClasses1: '',
      mask: '',
      afterSale: '本产品严格不按照国家的三包政策，坚决本着不退不换的原则，让每一个用户享受独一无二的博彩型购物体验；只需三分钟，你就会跟我一样爱上这款平台。欧非鉴定唯一指定平台，用户的购买行为以及结果完全由用户自理并且承担，商家不必承担任何售出后责任.如果用户在购买后有退换货品的需求，我们会第一时间为用户寄出安眠药一盒，让您在漫漫长梦中享有一个舒适的睡眠并且懂得梦里啥都有的原则'
    }
  },
  methods: {
    // 弹出控件js
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
    // 修改以及选定商品种类
    changeBGC (event, index) {
      this.setBGC = index
      this.setType = index
      var name = this.curritem.types[index].title
      this.setTitle = name
    },
    // 计数器函数
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    tabClick (e) {
      this.activeIndex = e.currentTarget.id
    },
    item_click () {
      this.onselected = 'bar-selected'
    }
  },
  computed: {
    navbarSliderClass () {
      if (this.activeIndex === 0) {
        return 'navbar_slider_0'
      }
      if (this.activeIndex === 1) {
        return 'navbar_slider_1'
      }
      if (this.activeIndex === 2) {
        return 'navbar_slider_2'
      }
    },
    count () {
      return store.state.count
    }
  }
}
</script>
<style scoped>
/* 表格样式 */
.fs-table{
  display: flex;
  font-size: 13px;
  color: dimgray;
}
.fs-content{
  flex: 4;
  border: solid 1rpx lightgray; 
  text-align: center;
  padding: 10px;
}
.fs-title{
  flex: 1;
  border: solid 1rpx lightgray; 
  text-align: center;
  padding: 10px;
}
/* 三滑動栏 */
.bar-selectedw{
  background: #FB4D53;
  color: red
}
.content {
  box-sizing: border-box;
  height: 100%;
  padding-top: 50px;
  /* overflow: auto; */
  -webkit-overflow-scrolling: touch;
}

.swiper-item {
  height: 100%;
  text-align: center;
}

.navbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  z-index: 500;
  height: 50px;
  width: 100%;
  border-bottom: solid 0.5rpx lightgray;
}

.navbar_item {
  position: relative;
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  padding: 13px 0;
  text-align: center;
  font-size: 0;
}

.navbar_item {
  color: balck;
}
.navbar_item_on {
  border-bottom: solid 2px #FB4D53;
}
.navbar_title {
  font-weight: 500;
  display: inline-block;
  font-size: 15px;
  max-width: 8em;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.navbar_slider {
  position: absolute;
  content: " ";
  left: 0;
  bottom: 0;
  width: 6em;
  height: 3px;
  background-color: white;
  -webkit-transition: -webkit-transform 0.1s;
  transition: -webkit-transform 0.1s;
  transition: transform 0.1s;
  transition: transform 0.1s, -webkit-transform 0.1s;
}

.navbar_slider_0 {
  left: 29rpx;
  transform: translateX(0);
}

.navbar_slider_1 {
  left: 29rpx;
  transform: translateX(250rpx);
}

.navbar_slider_2 {
  left: 29rpx;
  transform: translateX(500rpx);
}
.controls {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  position: fixed;
  z-index: 8888;
  top: 80;
  height: 50px;
  width: 100%;
  background-color: #298de5;
}
/* 店铺相关css */
  .shop-follower{
    display: flex;
    text-align: center;
    color: dimgray;
    font-size: 14px;
    margin-top: 10px;

  }
  .shop-info{
    display: flex;
  }
  .shop-info image{
    flex: 2;
    width: 56rpx;
    height: 63rpx;
    border: solid 1px lightgray;
    margin-top: 15px;
    margin-left: 13px;
  }
  .shop-info div{
    flex: 7;
    padding: 10px;
    line-height: 40px;
    font-size: 13px;
    color: rgb(50,50,50);

  }
  .shop-bar{
    width: 100%;
    height: 180px;
    background: white
  }
  .enter-shop{
    margin-left: 38%;
    margin-top: 25px;
    border: solid 1px lightgray;
    margin-right: 38%;
    border-radius: 10px;
    padding: 3px;
    font-size: 13px;
    color: dimgray;
  }
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
  margin-bottom: 718rpx;
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
  .sale-icon{
    font-size: 12px;
    color: #FB4D53;
    border: solid 1px #FB4D53;
    border-radius: 5px;
    padding-left: 4px;
    padding-right: 4px;
  }
  .saleTitle{
    padding:14rpx;
    overflow: hidden;
    white-space: nowrap;
    /* width: 240px; */
    text-overflow :ellipsis;
    font-size: 12px;
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
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
    color: #FB4D53;
  }
  .full_title {
    font-size: 14px;
    padding: 5px;
    margin: 5px;
    font-weight: 600;
    color: rgba(16,16,16,1);
    font-family: SourceHanSansSC- bold;
    line-height: 19px;
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
