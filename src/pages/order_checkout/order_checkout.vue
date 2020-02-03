<template>
  <div class="container">
    <div class="checkout">
      <div class="UserInfo">
        <div class="icon">
          <div class="iconForm iconfont">&#xe711;</div>
          <div class="iconSucc iconfont">&#xe602;</div>
        </div>
        <div class="itemB">
          <div class="block1">
            <div class="orderTitle">实付金额:</div><div class="cash">￥21.9</div>
          </div>
          <div class="block2">
            <div class="orderTitle">收货信息:</div><div class="userInfo">大苏打 13231231311</div>
          </div>
          <div class="userAddress">江苏省苏州市东百花巷第二个镶嵌橙色装备的垃圾桶#320</div>
        </div>
      </div>
      <div class="buttons">
        <div class="checkOrder" @click="switch2orderProcess">查看订单</div>
        <div class="Back2Menu" @click="back2menu">去首页</div>
      </div>
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
      back2menu () {
        wx.switchTab({url: '../index/main'})
      },
      switch2orderProcess () {
        wx.navigateTo({url: '../order_process/main'})
      }
    }
  }
</script>


<style lang="sass">
  @import "order_checkout"
</style>
