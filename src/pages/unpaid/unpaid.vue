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
      <div class="order_detail">
        <div class="single_container">
          <div class="type">订单编号:</div><div class='content'>1145141919</div>
        </div>
        <div class="single_container">
          <div class="type">下单时间:</div><div class='content'>2020-02-08 14:30:26</div>
        </div>
        <div class="single_container">
          <div class="type">支付方式:</div><div class='content'>在线支付</div>
        </div>
        <div class="single_container">
          <div class="type">供货商家:</div><div class='content'>东百好果汁伟哥生鲜贸易公司</div>
        </div>
        <div class="single_container">
          <div class="type">配送方式:</div><div class='content'>商家配送</div>
        </div>
        <div class="invoice">
          <div class="type">纸质发票:</div><div class='content'>将由商家开具发票</div>
        </div>
      </div>
       <div class="settlement_amount">
        <div class="settlement_container">
          <div class="type">商品金额</div><div class="cost">￥29.00</div>
        </div>
        <div class="settlement_container">
          <div class="type">运费</div><div class="cost">+￥5.00</div>
        </div>
        <div class="total">
          <div class="cost">￥34.00</div><div class="type">应付金额：</div>
        </div>
      </div>
      <div class="bottom_area">
        <div class="btm_pay">去支付</div>
        <div class="re_order">重新下单</div>
        <div class="change_address">修改地址</div>
        <div class="cancel_order">取消订单</div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
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
