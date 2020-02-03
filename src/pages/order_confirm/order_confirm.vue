<template>
  <div class="order_confirm">
    <div class="address-wrapper">
      <div class="user-info">
        <div class="name">周润泽</div>
        <div class="phone">138****0132</div>
      </div>
      <div class="address">
        四川省成都市高新区泰和家园
      </div>
      <span class="iconfont arrow">&#xe637;</span>

    </div>

    <div class="confirm-item" v-for="(shop, idx) in shops" :key="shop.id">
      <div class="shop-title-wrapper">
        <i class="iconfont" style="font-size: 22px;color: dimgray;">&#xe703;</i>
        <div class="shop-title">{{shop.shopTitle}}</div>
      </div>

      <div class="item-content" v-for="item in shop.items" :key="item.id">
        <div class="item-image-wrapper">
          <img :src="item.pic">
        </div>
        <div class="item-info-wrapper">
          <div class="item-desc">
            <div class="text">
              {{item.itemDesc}}
            </div>
          </div>
          <div class="item-price">
            ￥{{item.price}}
          </div>
        </div>
      </div>

      <div class="shipping-option" @click="navigate2ShippingOption">
        <div class="shipping-service">
          <div class="upper">配送服务</div>
          <div class="lower">中小件送货时间</div>
        </div>
        <div class="shipping-type">
          <div class="upper">快递运输</div>
          <div class="lower">工作日、休息日均可送货</div>
        </div>
        <span class="iconfont arrow">&#xe637;</span>

      </div>

      <div class="order-comment">
        <div class="title">订单备注</div>
        <div class="comment">
          <input type="text" maxlength="25" ref="comment" placeholder="选填，给商家留言" v-model="shop.comment">
        </div>
        <div class="statistic">
          {{shop.comment.length}}/25
        </div>
      </div>
    </div>

    <div class="discount-info">
      <div class="invoice">
        <div class="title">发票信息</div>
        <div class="chosen">个人（普通发票）</div>
      </div>
      <div class="membership">
        <div class="title">会员卡</div>
        <div class="nothing">无可用<span class="iconfont arrow">&#xe637;</span></div>
      </div>
      <div class="coupon">
        <div class="title">优惠券</div>
        <div class="nothing">无可用<span class="iconfont arrow">&#xe637;</span></div>
      </div>
    </div>

    <div class="checkout-price">
      <div class="summary">
        <div class="title">商品金额</div>
        <div class="value">￥38.9</div>
      </div>
      <div class="ship-fee">
        <div class="title">运费</div>
        <div class="value">￥5</div>
      </div>
    </div>

    <div class="pay">
      <div class="actual-pay">
        实付金额：<span class="money">￥43.9</span>
      </div>
      <div class="pay-btn" @click="navigate2checkout">立即支付</div>
    </div>
  </div>
</template>


<script>
  import { getConfirmOrderInfo } from '../../api/order_confirm'

  export default {
    data () {
      return {
        shops: []
      }
    },
    onLoad (options) {
      console.log(options)
    },
    created () {
      this.shops = getConfirmOrderInfo()
    },
    methods: {
      navigate2ShippingOption () {
        wx.navigateTo({url: '../shipping_method/main'})
      },
      navigate2checkout () {
        wx.navigateTo({url: '../order_checkout/main'})
      }
    }
  }
</script>


<style lang="sass">
  @import "order_confirm"
</style>
