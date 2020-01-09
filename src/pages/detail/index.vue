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
    <div class='sale' v-if="curritem.sale">
     <div class="off">优惠</div>
     <div class='sale-bar'>
     <div @click="triggerTransition">
      <div v-for='item in curritem.sale' class="saleTitle" :key="item.id">
        <div class="sale-icon">优惠券</div>
        {{item.title}}
      </div>
      </div>
      </div>
      <div @click="triggerTransition" class="more">...</div>
    </div>
    <!-- 已选菜单 -->
    <div class="choosen">
      <div class="text">已选</div>
      <div class="sku" @click="triggerTransition1">{{curritem.weight}} {{setTitle}} {{count}}个</div>
      <div class="more" @click="triggerTransition1">...</div>
    </div>
    <div style="background: rgb(238, 238, 238);width: 100%;height: 1rpx;"></div>
    <div class="address">
      <div class="text">送至</div>
      <div class="address-detail">
        <div class="upper">成都市武侯区桂溪社区泰和家园3幢丰巢驿站</div>
        <div class="bottom">
          <span class="span">[现货]</span>
          <span class="text">23:55前下单预计明天送达</span>
        </div>
      </div>
      <div class="more" @click="triggerTransition">...</div>
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
<!--      <div class="navbar_slider" :class="navbarSliderClass"></div>-->
    </div>
    <!-- 用来容纳三个商品详情容器的div -->
    <div>
      <!-- 商品介绍栏目的内容 -->
      <div :hidden="activeIndex != 0">
        <img mode='widthFix' src="https://xiheo2o.oss-cn-hangzhou.aliyuncs.com/detail.jpg" style="width: 100%" />
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
            <div class="icon iconfont" style="height: 20px">&#xe710;</div>
            <div style="font-size: 10px;">购物车</div>
          </div>
          <div style="flex: 1;text-align: center;background:white">
            <div class="icon iconfont" style="height: 20px">&#xe709;</div>
            <div style="font-size: 10px;">商城</div>
          </div>
        </div>
      </div>
      <div class="bottom-button" @click="triggerTransition1">立即购买</div>
      <div class="bottom-button" @click="triggerTransition1">加入购物车</div>
    </div>
    <!-- 弹出式购买选项及数目菜单 -->
    <div class="shoppingBar"  :class="extraClasses1">
      <div class="onBarTop">
        <img class="displayImg" :src='curritem.item_display_images' />
        <div class="price">￥{{curritem.price}}</div>
        <div class="haveChosen">已选 {{curritem.weight}} {{setTitle}} {{count}}份</div>
        <div class="closeBar" @click="triggerTransition1">✕</div>
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
      <div>
        <div class="sale-bottom-bar ">
          <div class="sale-bottom-button" @click="triggerTransition1" >加入购物车</div>
          <div class="sale-bottom-button" @click="triggerTransition1" style="background: #FB4D53">立即购买</div>
        </div>
      </div>
      </div>
    </div>
    <!-- 弹出式优惠选项菜单 -->
    <div class="shoppingBar"  :class="extraClasses">
      <div style="display:flex;background:#ececec;height:34px">
        <div class="off-text"> 优惠</div>
        <div @click="triggerTransition" class="closeBar" style="flex:1;margin:2px -15px 0px 0;">✕</div>
      </div>
      <div >
        <div v-for='item in curritem.sale' style="margin: 10px;height:110px; background-color:white" :key="item.id">
          <div style="display:flex;background: linear-gradient(#FB4D53, #ec5d5d);height: 80px;">
            <div style="flex: 3;line-height: 48px;font-size: 48px;margin-left: 17px;color: #ffe8e8;border-style: none dotted none none;height: 50px;margin-top: 14px;">{{item.sale}}<div style="font-size: 17px;float: right;margin-right: 20px;margin-top: 11px;font-weight:600">元</div></div>
            <div style="flex:7;padding: 10px 10px 0px 10px;color:white;">{{item.title}}</div>
          </div>
           <div>
             <div style="float: left;color: dimgray;font-size: 13px;line-height: 28px;margin-left: 15px;">【{{curritem.shopName}}】</div>
             <div style="float: right;border: solid 1px green;border-radius: 15px;font-size: 12px;padding: 1px 6px 1px 6px;margin-top: 4px;margin-right: 19px;color: green;">立即领取</div>
           </div>
           <div>
             <div style="width:14px;height: 14px;border-radius: 20px;background-color: #F0F0F0;margin-top: -7px;margin-left: -6px;"></div>
             <div style="width:14px;height: 14px;border-radius: 20px;background-color: #F0F0F0;float:right;margin-right: -88px;margin-top: -13px;"></div>
           </div>
        </div>
      </div>
    </div>
    <!-- 弹出式地址选择菜单 -->
    <div  style="width:100%;height:400px;background:red;position:fixed;z-index:6">
      <div style="width:100%;height:200px;background:red;position:absloute">sadnisanodso</div>
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
        sale: [{id: 10201, title: '单品超级抵价', sale: '10'},
          {id: 10201, title: '购买超1000元的商品,总价格折扣50元', sale: '18'}
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
      console.log(e.currentTarget.id)
      this.activeIndex = e.currentTarget.id
    },
    item_click () {
      this.onselected = 'bar-selected'
    }
  },
  computed: {
    // navbarSliderClass () {
    //   if (this.activeIndex === 0) {
    //     return 'navbar_slider_0'
    //   }
    //   if (this.activeIndex === 1) {
    //     return 'navbar_slider_1'
    //   }
    //   if (this.activeIndex === 2) {
    //     return 'navbar_slider_2'
    //   }
    // },
    count () {
      return store.state.count
    }
  }
}
</script>
<style scoped lang="sass">
  @import "./detail.sass"

</style>
