<template>
  <div class="address-config">
    <div class="address-block" style="width: 100%">
      <movable-area v-for="address in addresses" :key="address.id" :style="{width: windowWidth, height: '75px', overflow: 'hidden'}">
        <movable-view class="address" :style="{width: wholeWidth}" direction="horizontal" inertia="true">
          <div class="info-area">
            <div class="contact">
              <span class="name">{{address.name}}</span>
              <span class="phone">{{address.phone}}</span>
            </div>
            <div class="address-text">
              {{address.address}}
            </div>
          </div>
          <div class="opt-area" @click="edit">
            编辑
          </div>
          <div class="remove-btn" style="width: 80px">
            删除
          </div>
        </movable-view>
      </movable-area>

    </div>


    <div class="bottom-bar" @click="edit">
      <div class="add-button">新增收货地址</div>
    </div>
  </div>
</template>

<script>
  import { getAddresses } from '../../api/address'
  export default {
    data () {
      return {
        windowWidth: 0,
        wholeWidth: 0,
        addresses: [],
        toast: false,
        toastHidden: true
      }
    },
    onLoad () {
      this.windowWidth = `${wx.getSystemInfoSync().windowWidth}px`
      this.wholeWidth = `${wx.getSystemInfoSync().windowWidth + 80}px`
      this.addresses = getAddresses()
    },
    onShow () {
      try {
        const del = wx.getStorageSync('delete')
        const confirm = wx.getStorageSync('confirm')
        if (del) {
          wx.showToast({
            title: '删除成功',
            icon: 'succes',
            duration: 2000,
            mask: true
          })
          wx.removeStorageSync('delete')
        }
        if (confirm) {
          wx.showToast({
            title: '保存成功',
            icon: 'succes',
            duration: 2000,
            mask: true
          })
          wx.removeStorageSync('confirm')
        }
      } catch (e) {
        console.error(e)
      }
    },
    methods: {
      edit () {
        wx.navigateTo({url: '../address_modify/main'})
      }
    }
  }
</script>

<style lang="sass">
  @import "address.sass"
</style>
