<template>
  <div class="main_container">
    <!-- 顶部背景 -->
    <div class="topic_banner">
      <!-- 用户信息 -->
      <div class="user_icon">
        <open-data type="userAvatarUrl"/>
      </div>
      <div class="user_name">
        <open-data type="userNickName"/>
        <i class="fa fa-edit"/><br/>
        <div class="son_info">用户名:
          <open-data type="userNickName"/>
        </div>
        <br/>
        <div class="son_info">手机号:
<!--          <open-data type="userCity"/>-->
        </div>
      </div>

    </div>

    <!-- 账单相关div -->
    <div class='order'>
      <div class="list">
        <div class="item">
          <div class="icon iconfont">&#xe607;</div>
          <div>待付款</div>
        </div>
        <div class="item">
          <div class="icon iconfont">&#xe622;</div>
          <div>待收货</div>
        </div>
        <div class="item">
          <div class="icon iconfont">&#xe614;</div>
          <div>待评价</div>
        </div>
        <div class="item">
          <div class="icon iconfont">&#xe65c;</div>
          <div>待售后</div>
        </div>
        <div class="item">
          <div class="icon iconfont">&#xe621;</div>
          <div>全部订单</div>
        </div>
      </div>
    </div>

    <div class="coupons">
      <div class="item">
        <div class="left-el icon iconfont">
          &#xe69b;
        </div>
        <div class="middle-el">
          优惠券
        </div>
        <div class="right-el icon iconfont">
          &#xe637;
        </div>
      </div>
      <div class="item">
        <div class="left-el icon iconfont">
          &#xe600;
        </div>
        <div class="middle-el">
          会员卡
        </div>
        <div class="right-el icon iconfont">
          &#xe637;
        </div>
      </div>
    </div>

    <div class="settings" @click="toAddressPage">
      <div class="item">
        <div class="left-el icon iconfont">
          &#xe61e;
        </div>
        <div class="middle-el">
          地址管理
        </div>
        <div class="right-el icon iconfont">
          &#xe637;
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    // fake data
    data () {
      return {
        myOrder: [
          {
            id: 1,
            order_afi: 'fa fa-credit-card fa-2x',
            order_title: '待付款'
          },
          {
            id: 2,
            order_afi: 'fa fa-archive fa-2x',
            order_title: '待发货'
          },
          {
            id: 3,
            order_afi: 'fa fa-truck fa-2x',
            order_title: '待收货'
          },
          {
            id: 4,
            order_afi: 'fa fa-undo fa-2x',
            order_title: '退货中'
          },
          {
            id: 5,
            order_afi: 'fa fa-tasks fa-2x',
            order_title: '全部订单'
          }],

        myCard: [
          {
            id: 1,
            card_count: '0张',
            card_title: '所有卡券'
          },
          {
            id: 2,
            card_count: '0张',
            card_title: '优惠券'
          },
          {
            id: 3,
            card_count: '0元',
            card_title: '红包'
          },
          {
            id: 4,
            card_count: '0张',
            card_title: '已使用'
          }],

        myShop: [
          {
            id: 1,
            shop_count: '0',
            shop_title: '商品收藏'
          },
          {
            id: 2,
            shop_count: '0',
            shop_title: '店铺收藏'
          },
          {
            id: 3,
            shop_count: '0',
            shop_title: '关注店铺'
          },
          {
            id: 4,
            shop_count: '0',
            shop_title: '我的足迹'
          }]
      }
    },
    methods: {
      toAddressPage () {
        wx.navigateTo({url: '../address_config/main'})
      }
    }
  }
</script>

<style lang="sass">
  @import "./mine.sass"

</style>
