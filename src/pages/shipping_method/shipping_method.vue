<template>
  <div class="shipping-method">
    <div class="mask" :animation="maskAnimation" :class="{enable: enableMask}"/>
    <div class="shipping-option-wrapper">
      <div class="shipping-option-banner">
        <span class="iconfont" style="color: #707070">&#xe659;</span>
        <span class="text">配送方式</span>
      </div>


      <div class="shipping-option">
        <div class="choice" :class="{selected: selected === 1}" @click="seller">商家配送</div>
        <div class="choice" :class="{selected: selected === 2}" @click="self">上门自提</div>
      </div>
      <div class="d4" :class="{seller: selected === 1, self: selected === 2}">
      </div>
    </div>

    <div class="goods-wrapper small">
      <div class="title">中小件配送</div>
      <div class="image-wrapper">

        <div class="image">
          <img src="http://img4.99114.com/group10/M00/3E/F2/rBADs1n-AyeATXaVAAIZup48AzE038.jpg">
        </div>
        <div class="image">
          <img src="http://picapi.zhituad.com/photo/35/18/44ABE.jpg">
        </div>
      </div>
      <div class="desc" :animation="animation" >
        <div class="option1" :animation="animation2">
          <div class="timing">送货时间: 工作日、休息日以及节假日</div>
        </div>

        <div class="option2" :animation="animation3" >
          <div class="place" >送货地点: 泰和家园2栋</div>
          <div class="timing">取货时间: 每日9：00-22：00</div>
        </div>

      </div>

    </div>

    <div class="goods-wrapper big">
      <div class="title">大件配送</div>
      <div class="image-wrapper">

        <div class="image">
          <img src="http://img4.99114.com/group10/M00/3E/F2/rBADs1n-AyeATXaVAAIZup48AzE038.jpg">
        </div>
<!--        <div class="image">-->
<!--          <img src="http://picapi.zhituad.com/photo/35/18/44ABE.jpg">-->
<!--        </div>-->
      </div>
      <div class="desc" :animation="animation" @click="chooseTime">
        <div class="option1" :animation="animation2">
          <div class="timing">送货时间: {{timing}} </div>
          <span class="iconfont" style="position: absolute; top:0; color: #707070; right: 10px">&#xe62a;</span>
        </div>

        <div class="option2" :animation="animation3" >
          <div class="place" >送货地点: 泰和家园2栋</div>
          <div class="timing">取货时间: 每日9：00-22：00</div>
        </div>
      </div>
    </div>

    <div class="choose-time" :animation="chooseTimeAnimation">
      <div class="band">送货时间<span class="iconfont close" @click="closeMask">&#xe62b;</span></div>
      <div class="date-wrapper">
        <div class="date"
             :class="{selected: date === timing}"
             @click="chooseDate(date)"
             v-for="(date, idx) in ['2020-01-31 周五', '2020-02-01 周六', '2020-02-02 周日', '2020-02-03 周一']">
          {{date}}
        </div>
      </div>

    </div>


    <div class="bottom-operate">
      <div class="money">
        配送费：<span>￥5.00</span>
      </div>

      <div class="checkout" @click="confirm">
        确认
      </div>
    </div>



  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: 1,
        enableMask: false,
        timing: '2020-01-31 周五',
        place: '',
        animation: wx.createAnimation({
          duration: 200, // 动画执行时间
          timingFunction: 'ease-in-out' // 动画执行效果
        }),
        animation2: wx.createAnimation({
          duration: 200, // 动画执行时间
          timingFunction: 'ease-in-out' // 动画执行效果
        }),
        animation3: wx.createAnimation({
          duration: 200, // 动画执行时间
          timingFunction: 'ease-in-out' // 动画执行效果
        }),
        maskAnimation: wx.createAnimation({
          duration: 400, // 动画执行时间
          timingFunction: 'ease-in-out' // 动画执行效果
        }),
        chooseTimeAnimation: wx.createAnimation({
          duration: 400, // 动画执行时间
          timingFunction: 'ease-in-out' // 动画执行效果
        })
      }
    },
    created () {
      this.selected = 1
    },
    mounted () {
      // this.seller()
    },
    methods: {
      seller () {
        this.selected = 1
        this.animation.height(20).step()
        this.animation2.opacity(1).step()
        this.animation3.opacity(0).step()
        setTimeout(() => {
          this.animation.export()
          this.animation2.export()
          this.animation3.export()
        }, 30)
      },
      self () {
        this.selected = 2
        this.animation.height(40).step()
        this.animation2.opacity(0).step()
        this.animation3.translateY(-17).opacity(1).step()
        setTimeout(() => {
          this.animation.export()
          this.animation2.export()
          this.animation3.export()
        }, 30)
      },
      chooseTime () {
        if (this.selected !== 1) {
          return
        }
        this.enableMask = true
        this.maskAnimation.opacity(0.62).step()
        this.chooseTimeAnimation.height(280).step()
        setTimeout(() => {
          this.maskAnimation.export()
          this.chooseTimeAnimation.export()
        }, 20)
      },
      chooseDate (date) {
        this.timing = date
        this.closeMask()
      },
      closeMask () {
        this.enableMask = false
        this.maskAnimation.opacity(0).step()
        this.chooseTimeAnimation.height(0).step()
        setTimeout(() => {
          this.maskAnimation.export()
          this.chooseTimeAnimation.export()
        }, 20)
      },
      confirm () {
        wx.navigateBack({ changed: true })
      }
    }
  }
</script>

<style lang="sass">
  @import "shipping_method.sass";
</style>
