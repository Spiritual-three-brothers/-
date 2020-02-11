<template>
  <div class="main_container">
    <div class="order_state">
      <div class="unpaid_alert">
        <div class="icon iconfont">&#xe60f;</div>
        <div class="order_cost">
          <div class="unpaid">待支付</div>
          <div class="cost">应付金额：￥23.6</div>
        </div>
        <div class="rest_time">支付剩余:23时59分45秒</div>
      </div>
      <div class="user_info">
        <div class="icon iconfont">&#xe702;</div>
        <div class="user_detail">
          <div class="tel">周诗宇 181****9221</div>
          <div class="address">四川省成都市高新区泰和佳园蜂巢</div>
        </div>
        <div class="white_space"></div>
      </div>
    </div>
    <div class="order_content">
      <div class="shop_title">
        <div class="icon">&#xe703;</div>
        <div class="shop_name">东百好果汁发哥旗舰店&#xe637;</div>
        <div class="count_total">共计1件商品</div>
      </div>
      <div class="shop_inner">
        <div class="goods_img">图片</div>
        <div class="goods_detail">
          <div class="item_name">天水红富士霜打极品 果农自摘不外售 十一月西...</div>
          <div class="item_type">一斤糖心</div>
          <div class="item">
            <div class="price">￥36.8</div>
            <div class="count">×1</div>
          </div>
        </div>
      </div>
      <div class="connect_service">&#xe610; 联系客服</div>
    </div>
    <div class="order_info">
      <div></div>
    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        shops: []
      }
    },
    created () {
    },
    methods: {
      // back2menu () {
      //   wx.switchTab({url: '../index/main'})
      // }
    }
  }
</script>


<style lang="sass">
  @import "unpaid.sass"
</style>
