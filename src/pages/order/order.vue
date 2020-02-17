<template>
  <div class="page-wrapper">
    <div class="cate-wrapper">
      <div class="cate"
           :class="{selected: idx === checkedIndex}"
           v-for="(procedure, idx) in procedures" :key="procedure"
           @click="checkCate(idx)"
      >
        {{procedure}}
      </div>
    </div>

    <div class="order-wrapper">
      <div class="order-info" v-for="order in orderInfos" :key="order.id">
        <div class="shop-title-wrapper">
          <i class="iconfont" style="font-size: 22px;color: dimgray;">&#xe703;</i>
          <div class="shop-title">{{order.shopTitle}}</div>
          <div class="status">{{order.status}}</div>
        </div>

        <div class="item-info-wrapper">
          <div class="image-wrapper">
            <img src="http://picapi.zhituad.com/photo/35/18/44ABE.jpg"/>
          </div>
          <div class="item-desc">
            {{order.itemDesc}}
          </div>
        </div>

        <div class="order-desc">
          共{{order.count}}件商品 实付金额：<span class="money">￥{{order.money}}</span>
        </div>
        <div class="order-operation">
          <div class="button" @click="SwitchToEvaluation">去评价</div>
          <div class="button">再次购买</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import {getProcedure, getOrderInfos} from '../../api/order'

  export default {
    data () {
      return {
        procedures: [],
        orderInfos: [],
        checkedIndex: 0
      }
    },
    created () {
      this.procedures = getProcedure()
      this.orderInfos = getOrderInfos()
    },
    methods: {
      checkCate (index) {
        this.checkedIndex = index
      },
      SwitchToEvaluation () {
        wx.navigateTo({url: '../evaluation/main'})
      }
    }
  }
</script>

<style lang="sass">
  @import order
</style>
