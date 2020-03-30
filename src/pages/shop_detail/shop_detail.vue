<template>
  <div class="this_container">
    <scroll-view class='scroll-view-vertical' style="height:200px" :scroll-y="true" @scroll="viewScroll">
      <div :class="top > 0 ? 'audio-fixed' : ''">1111111
      </div>
      <div style="height:1000px;background:red"></div>
    </scroll-view> 
  </div>
</template>


<script>
  export default {
    data () {
      return {
        shops: [],
        top: 0
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
  @import "shop_detail"
</style>
