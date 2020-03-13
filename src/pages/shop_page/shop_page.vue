<template>
  <div class="this_container">
    <div class="shop_page">
      <div class="shop_title">
        <div class="title_container">
          <img class="shop_img" src="https://pic1.zhimg.com/v2-8c13c9f55882ff2bd9f0a3f03d32e0ec_1200x500.jpg">
          <div class="shop_name">熹茶东百体验店ShiteaDB Store</div>
          </div>
        <div class="shop_info">
          <div class="month_sail">
            <div class="sail_title">月销量</div>
            <div class="sail_count">10w</div>
          </div>
          <div class="month_sail">
            <div class="sail_title">描述相符</div>
            <div class="sail_count">10w</div>
          </div>
          <div class="month_sail">
            <div class="sail_title">商家服务</div>
            <div class="sail_count">10w</div>
          </div>
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
  @import "shop_page"
</style>
