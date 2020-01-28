<template>
  <div class="page-wrapper">
    <div class="cart-area">
      <div v-for="shop in shops" :key=shop.id class="shop">
        <div class="shop-item">
          <div class="shop-title-bar">
            <div class="selector" :class="{'checked': shop.checked}" @click="checkShop(shop)">
              √
            </div>
            <i class="iconfont" style="margin-left: 8px;font-size: 22px;color: dimgray;">&#xe703;</i>
            <div class="shop-title">{{shop.shopTitle}}</div>
<!--            <div class="enter-shop">></div>-->
          </div>

          <div class="item-bar" :key=item.id v-for="(item, idx) in shop.items">
            <div class="selector-wrapper">
              <div class="selector" @click="checkItem(item)" :class="{'checked': item.checked}">
                √
              </div>
            </div>

            <div class="item-content">
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
                <div class="quantity-controller">
                  <div class="deduct" @click="deduct(item)" :class="{overLimit: item.count > 1}">
                    -
                  </div>
                  <div class="quantity">
                    {{item.count}}
                  </div>
                  <div class="add" @click="add(item)">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
    <div class="bottom-bar">
      <div class="select-all-wrapper">
        <div class="selector" :class="{checked: checkedAll}" @click="checkAll()">
          √
        </div>
        <span>全选</span>
      </div>

      <div class="money">
        总计：<span>￥{{totalPrice}}</span>
      </div>

      <div class="checkout">
        <span>去结算</span><span>({{totalCount}})件</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCartData} from '../../api/cart'

  export default {
    created () {
      const data = this.getCartData()
      this.shops = data.shops
      console.log(data)
    },
    data () {
      return {
        shops: [],
        checkedAll: 0
      }
    },
    computed: {
      totalCount () {
        let total = 0
        for (let shop of this.shops) {
          for (let item of shop.items) {
            if (item.checked) {
              total += item.count
            }
          }
        }
        return total
      },

      totalPrice () {
        let total = 0
        for (let shop of this.shops) {
          for (let item of shop.items) {
            if (item.checked) {
              total += item.price * item.count
            }
          }
        }
        return total.toFixed(2)
      }
    },
    methods: {
      getCartData () {
        const data = getCartData()
        data.shops.map(shop => {
          shop.checked = 0
          shop.itemChecked = 0
          shop.items.map(item => {
            item.checked = 0
          })
        })
        return data
      },
      checkShop (shop) {
        if (!shop.checked) {
          shop.checked = 1
          shop.itemChecked += shop.items.length
          shop.items.map(item => {
            item.checked = 1
          })
        } else {
          shop.checked = 0
          this.checkedAll = 0
          shop.itemChecked -= shop.items.length
          shop.items.map(item => {
            item.checked = 0
          })
        }
        this.judgeCheckAll()
      },
      checkItem (item) {
        const shop = this.shops.find(shop => shop.id === item.shopId)
        if (!item.checked) {
          shop.checked = 1
          item.checked = 1
          shop.itemChecked++
        } else {
          item.checked = 0
          this.checkedAll = 0
          shop.itemChecked--
          if (shop.itemChecked === 0) {
            shop.checked = 0
          }
        }
        this.judgeCheckAll()
      },
      checkAll () {
        if (!this.checkedAll) {
          this.checkedAll = 1
          this.shops.forEach(shop => {
            if (!shop.checked) {
              shop.checked = 1
            }
            shop.items.forEach(item => {
              if (!item.checked) {
                shop.itemChecked++
                item.checked = 1
              }
            })
          })
        } else {
          this.checkedAll = 0
          this.shops.forEach(shop => {
            if (shop.checked) {
              shop.checked = 0
            }
            shop.items.forEach(item => {
              if (item.checked) {
                shop.itemChecked--
                item.checked = 0
              }
            })
          })
        }
      },
      judgeCheckAll () {
        let ret = true
        for (let shop of this.shops) {
          if (shop.itemChecked !== shop.items.length) return false
        }

        if (ret) {
          this.checkedAll = 1
        }
      },
      deduct (item) {
        if (item.count > 1) {
          item.count--
        }
      },
      add (item) {
        item.count++
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "./cart.sass"
</style>
