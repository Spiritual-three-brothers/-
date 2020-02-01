<template>
  <div class="shipping-method">
    <div class="shipping-option-wrapper">
      <div class="shipping-option-banner">
        <span class="iconfont" style="color: #707070">&#xe659;</span>
        <span class="text">配送方式</span>
      </div>


      <div class="shipping-option">
        <div class="choice" :class="{selected: selected === 1}" @click="seller">商家配送</div>
        <div class="choice" :class="{selected: selected === 2}" @click="self">上门自提</div>
      </div>
      <div class="d4" :class="{seller: selected === 1, self: selected === 2}"/>
    </div>

    <div class="test"></div>



  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: 1
      }
    },
    methods: {
      seller () {
        this.selected = 1
      },
      self () {
        this.selected = 2
      }
    }
  }
</script>

<style lang="sass">
  @import "shipping_method.sass";
</style>
