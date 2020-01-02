<template>
    <div class="main_container">
      <!-- 顶部背景 -->
        <div class="topic_banner"></div>
        <!-- 用户信息 -->
        <div class="user_icon">
          <open-data type="userAvatarUrl" ></open-data>
        </div>
        <div class="user_name">
          <open-data type="userNickName"></open-data><i class="fa fa-edit"></i><br/>
          <div class="son_info">用户名:<open-data type="userNickName"></open-data></div><br/>
          <div class="son_info">电话:</div>
        </div>
        <!-- 账单相关div -->
        <div class='order' >
          <ul class="icon">
            <li><div class="icon iconfont" >&#xe704;</div></li>
            <li><div class="icon iconfont" >&#xe705;</div></li>
            <li><div class="icon iconfont" >&#xe706;</div></li>
            <li><div class="icon iconfont" >&#xe701;</div></li>
            <li><div class="icon iconfont" >&#xe707;</div></li>
          </ul>
          <div class="gen-table">
         <div class="gen-tr">
           <div class="gen-td" v-for="order in myOrder" :key="order.id">{{order.order_title}}</div>
         </div>
       </div>
        </div>
      <!-- 红包卡券div -->
        <div class="sail">  
         <div class="gen-table">
         <div class="gen-tr">
           <div class="gen-td" v-for="card in myCard" :key="card.id" style="font-size:16px;color:#F4696E;">{{card.card_count}}</div>
         </div>
         <div class="gen-tr">
           <div class="gen-td" v-for="card in myCard" :key="card.id">{{card.card_title}}</div>
         </div>
       </div>
        </div>
        <!-- 店铺div -->
      <div class="shop">  
        <div class="gen-table">
         <div class="gen-tr">
           <div class="gen-td" style="font-size:16px" v-for="count in myShop" :key="count.id">{{count.shop_count}}</div>
         </div>
          <div class="gen-tr">
           <div class="gen-td" v-for="count in myShop" :key="count.id">{{count.shop_title}}</div>
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
      myOrder: [{
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

      myCard: [{
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

      myShop: [{
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
  }
}
</script>

<style scoped lang="sass">
  @import "./mine.sass"

</style>