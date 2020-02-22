<template>
  <div class="address-modify">
    <form>
      <div class="form-item">
        <div class="label">
          收货人
        </div>
        <div class="input">
          <input class="input weui-input" auto-focus maxlength="10" placeholder-style="font-size: 26rpx" placeholder="收货人"/>
        </div>
        <div class="clear icon iconfont" style="color: rgb(181,181,181);font-size: 13px">
          &#xe69f;
        </div>
      </div>

      <div class="form-item">
        <div class="label">
          联系方式
        </div>
        <div class="input">
          <input class="input weui-input" maxlength="10" placeholder-style="font-size: 26rpx" placeholder="联系方式"/>
        </div>
        <div class="clear icon iconfont" style="color: rgb(181,181,181);font-size: 13px">
          &#xe69f;
        </div>
      </div>

      <div class="form-item">
        <div class="label">
          所在地区
        </div>
        <div class="input">
          <picker mode="region" @change="bindRegionChange" :value="region">
            <div class="picker">
              当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
            </div>
          </picker>
        </div>
        <div class="clear icon iconfont" style="color: rgb(181,181,181);font-size: 13px">
          &#xe637;
        </div>
      </div>

      <div class="form-item">
        <div class="label">
          详细地址
        </div>
        <div class="input">
          <input class="input weui-input" maxlength="10" placeholder-style="font-size: 26rpx" placeholder="详细地址"/>
        </div>
        <div class="clear icon iconfont" style="color: rgb(181,181,181);font-size: 13px">
          &#xe69f;
        </div>
      </div>
    </form>

    <div class="btn-group">
      <div class="btn confirm" @click="confirm">确认</div>
      <div class="btn delete" @click="deleteCurrent">删除地址</div>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        region: ['广东省', '广州市', '海珠区']
      }
    },
    onLoad () {
    },
    methods: {
      bindRegionChange (e) {
        console.log(e)
        this.region = e.mp.detail.value
      },
      deleteCurrent () {
        try {
          wx.setStorageSync('delete', true)
          wx.navigateBack({
            delete: true
          })
        } catch (e) {
          console.error(e)
        }
      },
      confirm () {
        try {
          wx.setStorageSync('confirm', true)
          wx.navigateBack({
            confirm: true
          })
        } catch (e) {
          console.error(e)
        }
      }
    }
  }
</script>

<style lang="sass">
  @import "address_modify.sass"
</style>
