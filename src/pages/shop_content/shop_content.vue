<template>
  <div class="this_container">
    <div class="shop_detail">
      <div class="shop_title">
        <image class="shop_logo" src="../../static/item/osm.jpg"></image>
        <div class="shop_info">
          <div class="shop_name">
            {{shop_name}}
          </div>
          <div class="shop_type">{{shop_type}}</div>
        </div>
      </div>
      <div class="content">
        <div class="title">联系客服</div>
        <div class="icon" style="font-size:25px">&#xe616;</div>
      </div>
      <div class="shop_shortcut">
        <div class="content">
          <div class="title">店铺简介</div>
          <div class="icon" >{{shortcut}}</div>
        </div>
        <div class="content" style="margin-top:1px">
          <div class="title">开店时间</div>
          <div class="icon">{{date}}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        shop_name: '东百好果汁有限公司',
        shop_type: '自营',
        date: '2019年4月32日',
        shortcut: 'WORK WORK'
      }
    },
    created () {
    },
    methods: {
      // back2menu () {
      //   wx.switchTab({url: '../index/main'})
      // }
      viewScroll (e) {
        console.log('WDNMD')
        this.top = e.mp.detail.scrollTop
      }
    }
  }
</script>


<style lang="sass">
  @import "shop_content"
</style>
