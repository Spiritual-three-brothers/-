<template>
  <div class="container">
    <div class="usermotto" :animation='ani'>
      <text class="user-motto">{{motto}}</text>
    </div>
    <button v-bind='start'>button</button>
     <navigator url='../detail/main' hover-class="none">asdasd</navigator>
  </div>
</template>

<script>
export default {
  data () {
    return {
      motto: 'Hello World'
    }
  },
  methods: {
    start: function () {
      var animation = wx.createAnimation({
        duration: 4000,
        timingFunction: 'ease',
        delay: 1000
      })
      animation.opacity(0.2).translate(100, -100).step()
      this.setData({
        ani: animation.export()
      })
    },
    bindViewTap () {
      const url = '../detail/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({url})
      } else {
        mpvue.navigateTo({url})
      }
    }
  }
}
</script>

<style>
.usermotto {
  margin-top: 100px;
  border: solid;
}
</style>