<template>
  <div class="this_container">
    <div class="order_state">
      <div class="infos">
        <div class="order_info">订单进度:</div>
        <div class="state">正在配送</div>
      </div>
      <div class="infos">
        <div class="order_info">订单编号:</div>
        <div class="number">1145141919820</div>
      </div>
    </div>
    <div class="order_process"> 
      <div class="title_bar">
        进度跟踪
      </div>
      <div class="process_container">
        <div class="detail_container">
          <div class="pointer">◉</div>
          <div class="process_detail">快件已到达“东百花巷集散中心”正在准备发往“下北泽快件枢纽站”</div>
        </div>
        <div class="detail_container">
          <div class="place"></div>
          <div class="date_detail">2020-02-02 22:20:02</div>
        </div>
      </div>
      <div class="process_container">
        <div class="detail_container">
          <div class="unpointer">●</div>
          <div class="process_detail">快件已到达“下北泽菜市场”正在准备发往“东百花巷集散中心”</div>
        </div>
        <div class="detail_container">
          <div class="place"></div>
          <div class="date_detail">2020-02-01 21:10:02</div>
        </div>
      </div>
      <div class="process_container">
        <div class="detail_container">
          <div class="unpointer">●</div>
          <div class="process_detail">快件已发出</div>
        </div>
        <div class="detail_container">
          <div class="place"></div>
          <div class="date_detail">2020-02-01 21:10:02</div>
        </div>
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
      // back2menu () {
      //   wx.switchTab({url: '../index/main'})
      // }
    }
  }
</script>


<style lang="sass">
  @import "order_process"
</style>
