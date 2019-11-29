<template>
  <div class="main_container">
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
            <div class="name" style="font-size: 10px;">商城</div>
          </div>
        </div>
      </div>
      <div class="bottom-button">立即购买</div>
      <div class="bottom-button">加入购物车</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
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
        curritem: {
          item_id: '3122313',
          price: '12.3',
          full_title: '天水红富士霜打极品果农自摘不外售十一月西北专属纯绿色水果',
          weight: '500g'
        }
      }
    }
  }
</script>
<style scoped>
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
    flex: 0 0 100px;
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
