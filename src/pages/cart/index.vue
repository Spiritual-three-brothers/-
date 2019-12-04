<template>
<div>
  <div class="box" :class="extraClasses"></div>
  <div class="box1" :class="extraClasses1"></div>
  <button class="btn" @click="triggerTransition">触发 CSS 渐变</button>
  <button class="btn" @click="triggerTransition1">触发 CSS 渐变</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      extraClasses: '',
      extraClasses1: ''
    }
  },
  methods: {
    triggerTransition () {
      var that = this
      if (this.extraClasses === 'box-transition box-moved') {
        that.extraClasses = 'box-transition'
      } else {
        that.extraClasses = 'box-transition box-moved'
      }
    },
    triggerTransition1 () {
      var _that = this
      if (this.extraClasses1 === 'box1-transition box1-moved') {
        _that.extraClasses1 = 'box1-transition'
      } else {
        _that.extraClasses1 = 'box1-transition box1-moved'
      }
    }
  }
}
</script>

<style>
.box {
  width: 100rpx;
  height: 100rpx;
  margin: 60rpx;
  background: red;
}
.box1 {
  width: 100rpx;
  height: 100rpx;
  margin: 60rpx;
  background: yellow;
}
.btn {
  margin: 30rpx 60rpx 0;
}

.box-transition {
  transition: all 0.5s;
}
.box1-transition {
  transition: all 0.5s;
}
.box-moved {
  margin-left: 590rpx;
}
.box1-moved {
  margin-left: 200rpx;
}

</style>