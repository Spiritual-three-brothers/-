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
<style scoped>
icon_font{
  font-size: 53rpx;
}
.main_container{
  width: 100%;
  height: 642px;
  background: rgb(245, 245, 245)
}
.order{
  margin-top:35%;
  position:fixed;
  z-index:5;
  width:100%;
  height:85px;
  background: white
}
.order i{
  color: #ceab4e;
}
.order .icon li{
  float: left;
  padding-left: 48rpx;
  padding-right: 48rpx;
  padding-top: 24rpx;
  color: #FB4D53;
}
.order .detail li{
  font-size: 12px;
  float: left;
  padding-inline: 38rpx;
  color: dimgray;
  padding-top: 24rpx;
}
.sail{
  margin-top:61%;
  position:fixed;
  z-index:5;
  width:100%;
  height:85px;
  background: white
}
.shop{
  margin-top:88%;
  position:fixed;
  z-index:5;
  width:100%;
  height:85px;
  background: white
}
.sail ul li{
  float: left;
  padding-inline: 30%

}
.topic_banner {
  background: -webkit-linear-gradient(left, #d94b44, #ed7b61);
  border-radius: 0 0 50% 50%;
  border: none;
  width: 170%;
  height: 121px;
  color: #fff;
  font-size: 14px;
  position: fixed;
  z-index: 3;
  left: -35%;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);  
}
.son_info{
  font-size: 11px;
  padding-top: 4px;
  color: #FDABAB 100%;
}
.user_icon {
  position: fixed;
  overflow: hidden;
  z-index: 4;
  width: 56px;
  height: 56px;
  top: 19px;
  border-radius: 50%;
  left: 12px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);  
}
.user_name {
  position: fixed;
  z-index: 4;
  font-size: 12px;
  color: #F7D8D8;
  top: 21px;
  left: 86px;
}
open-data{
  border-radius: 50rpx;
}
button{
  position: fixed;
  z-index: 5;
  margin-top: 50%;
}

/* table css */
.gen-tr {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.gen-td {
  width:40%;
  justify-content: center;
  text-align: center;
  padding-top: 19px;
  font-size: 12px;
  color: #626161;
}
.gen-th {
  width: 40%;
  justify-content: center;
  background: #3366FF;
  color: #fff;
  display: flex;
  height: 3rem;
  align-items: center;
}
.gen-schedule-card{
  height: 10.8vh;
  width: 92vw;
  margin: 4vw 0;
  background-color: #fff;
  border-radius: 8rpx;
}
.gen-tr{
  height: 5vh;
  /*line-height: 4vh;*/
}
.time,.schedule-name{
  margin-left: 4vw;
  width: 25vw;
  text-align: left;
}
.time{
  font-size: 32rpx;
  margin-top: 2.7vh;
    
}
.schedule-name{
  color: #777;
  font-size: 20rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>