<template>
  <div class="page-wrapper">
    <div class="cart-area">
      <div v-for="shop in shops" :key=shop.id class="shop">
        <div class="shop-item" :key=item.id v-for="(item, idx) in shop.items">
          <div class="shop-title-bar">
            <div class="selector"></div>
            <i class="iconfont" style="margin-left: 8px;font-size: 22px;color: dimgray;">&#xe703;</i>
            <div class="shop-title">东百好果汁伟哥旗舰店</div>
            <div class="enter-shop">></div>
          </div>

          <div class="item-bar">
            <div class="selector-wrapper">
              <div class="selector"></div>
            </div>

            <div class="item-content">
              <div class="item-image-wrapper">
                <img :src="item.pic">
              </div>
              <div class="item-info-wrapper">
                <div class="item-desc">
                  <div class="text">
                    金盆洗脚城会员黑金卡走过路过不要错过一次就高潮金盆洗脚城会员黑金卡走过路过不要错过一次就高潮金盆洗脚城会员黑金卡走过路过不要错过一次就高潮
                  </div>
                </div>
                <div class="item-price">
                  ￥38.90
                </div>
                <div class="quantity-controller">
                  <div class="deduct">
                    <div class="line"/>
                  </div>
                  <div class="quantity">
                    1
                  </div>
                  <div class="add">
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
        <div class="selector"></div>
        <span>全选</span>
      </div>

      <div class="money">
        总计：<span>￥29.99</span>
      </div>

      <div class="checkout">
        <span>去结算</span><span>(0)件</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        shops: [{
          id: 1,
          items: [{
            id: 1,
            pic: 'http://picapi.zhituad.com/photo/35/18/44ABE.jpg'
          }, {
            id: 2,
            pic: 'http://picapi.zhituad.com/photo/35/18/44ABE.jpg'
          }]
        }, {
          id: 2,
          items: [{
            id: 2,
            pic: 'http://img4.99114.com/group10/M00/3E/F2/rBADs1n-AyeATXaVAAIZup48AzE038.jpg'
          }]
        }]
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "./cart.sass"
</style>
<!--<template>-->
<!--  <div class="main-container">-->
<!--    &lt;!&ndash; 购物车商品 &ndash;&gt;-->
<!--    <div class="cart-container">-->
<!--      <div class="single-cart" v-for="(shop,name) in main" :key="shop.id">-->
<!--        <div style="display:flex;margin-top:7px">-->
<!--          <div class="shop-selector">-->
<!--            <i class="iconfont" :class="BGP">&#xe602;</i>-->
<!--          </div>-->
<!--          &lt;!&ndash;        <div style="left: 13px;width: 20px;height: 20px;line-height: 20px;text-align: center;border-radius:16px;border: 2px solid rgba(187, 187, 187, 1);" ><i class="iconfont"  :class="BGP" style="color: #FB4D53;margin-left: -3px;margin-top: 1px;font-size: 24px;">&#xe602;</i></div>&ndash;&gt;-->
<!--          <i class="iconfont" style="margin-top: -1px;margin-left: 8px;font-size: 22px;color: dimgray;">&#xe703;</i>-->
<!--          <div class="shop-title">{{name}}</div>-->
<!--          <div style="color: gray;font-size: 23px;line-height: 23px;margin-left: 4px;">></div>-->
<!--        </div>-->
<!--        <div v-for="item in shop" :key="item.id" class="item-wrapper">-->
<!--          <div class="shop-selector">-->
<!--            <i class="iconfont" :class="BGP" style="color: #FB4D53;margin-left: -3px;margin-top: 1px;font-size: 24px;">&#xe602;</i>-->
<!--          </div>-->
<!--          <div class="item-main">-->
<!--            <img :src="item.picurl"-->
<!--                 style="flex: 3;height: 97px;width: 97px;margin-left: 8px;box-shadow: 6rpx 6rpx 20rpx rgba(0,0,0,0.2);box-shadow: 5px 4px 10px rgba(0,0,0,0.05);"/>-->
<!--            <div class="item-info" style="flex:7">-->
<!--              <div-->
<!--                style="color: rgba(16, 16, 16, 1);font-size: 15px;font-family: SourceHanSansSC-regular;margin-left:16px">-->
<!--                {{item.title}}-->
<!--              </div>-->
<!--              <div-->
<!--                style="color: rgba(16, 16, 16, 1);font-size: 15px;font-family: SourceHanSansSC-regular;margin-left:16px">-->
<!--                {{item.type}}-->
<!--              </div>-->
<!--              <div-->
<!--                style="color: #FB4D53;font-family: none;margin-left: 12px;font-size: 18px;font-weight: bold;margin-top: 15px;">-->
<!--                ￥{{item.pirce}}-->
<!--              </div>-->
<!--            </div>-->


<!--          </div>-->

<!--          <div class="counter-warp">-->
<!--            <button @click="decrement($event)" :id="item.id" v-bind:disabled='count == 1'>-</button>-->
<!--            <button style="font-weight:400;color:black;font-size:15px;width:32px">{{item.count}}</button>-->
<!--            <button @click="increment($event)" :id="item.id">+</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    &lt;!&ndash; 底部bar &ndash;&gt;-->
<!--    <div class="bottom-bar">-->
<!--      &lt;!&ndash; 全选控件 &ndash;&gt;-->
<!--      <div style="flex:1;text-align:center;line-height:2">-->
<!--        <div class="select-all" @click="selectShop"-->
<!--             style="left: 13px;width: 20px;height: 20px;line-height: 20px;text-align: center;border-radius:16px;border: 2px solid rgba(187, 187, 187, 1);">-->
<!--          <i class="iconfont" :class="BGP" style="color: #FB4D53;margin-left: -3px;margin-top: 1px;font-size: 24px;">&#xe602;</i>-->
<!--        </div>-->
<!--        <div style="color: dimgray;font-size: 12px;margin-top: -4px;font-size: 11px;margin-left: 9px;">全选</div>-->
<!--      </div>-->
<!--      &lt;!&ndash; 总计控件 &ndash;&gt;-->
<!--      <div style="text-align:right;color:dimgray;flex:4;font-weight:500">总计：</div>-->
<!--      <div style="text-align:left;color:dimgray;margin-right:10px;color:#FB4D53;flex:1.5">￥{{total_price}}</div>-->
<!--      &lt;!&ndash; 结算button &ndash;&gt;-->
<!--      <div style="flex:2.5;font-size:13px;background:#FB4D53;font-weight:500">去结算({{count_goods}}件)</div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  // import store from '../detail/store'-->
<!--  export default {-->
<!--    data () {-->
<!--      return {-->
<!--        BGC: 'bgcDefault',-->
<!--        BGP: 'BGPdefault transition',-->
<!--        total_price: 0,-->
<!--        count_goods: 0,-->
<!--        main: {-->
<!--          AA旗舰店: [-->
<!--            {-->
<!--              id: '11',-->
<!--              title: '金盆洗脚城会员黑金卡',-->
<!--              picurl: 'http://picapi.zhituad.com/photo/35/18/44ABE.jpg',-->
<!--              type: '年卡',-->
<!--              pirce: 120,-->
<!--              count: 1-->
<!--            },-->
<!--            {-->
<!--              id: '12',-->
<!--              title: 'BigSmoke限量挂饰',-->
<!--              picurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575610090651&di=f9b2a390b4db774c4771f488d1fd36b2&imgtype=0&src=http%3A%2F%2Fwww.rapbasement.com%2Fwp-content%2Fuploads%2F2014%2F11%2FSNOOP.jpg',-->
<!--              type: 'somkeWeed款',-->
<!--              pirce: 1200,-->
<!--              count: 3-->
<!--            },-->
<!--            {-->
<!--              id: '13',-->
<!--              title: '尼哥牙膏',-->
<!--              picurl: 'http://img4.99114.com/group10/M00/3E/F2/rBADs1n-AyeATXaVAAIZup48AzE038.jpg',-->
<!--              type: '200ml装',-->
<!--              pirce: 12,-->
<!--              count: 2-->
<!--            },-->
<!--            {-->
<!--              id: '14',-->
<!--              title: '蔡旭昆专辑《jennyTaimay》',-->
<!--              picurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575610131757&di=a4df6e3b7ef7f6d7be2541aad14a4ee7&imgtype=0&src=http%3A%2F%2Fpics6.baidu.com%2Ffeed%2Fd000baa1cd11728b42b3620cf2626fcac2fd2ca0.jpeg%3Ftoken%3D28f88e2f08ecbba5048e16665229cc9d%26s%3DD1631B747FD857D40F2225CF030080A2',-->
<!--              type: '限量版',-->
<!--              pirce: 312,-->
<!--              count: 1-->
<!--            }-->
<!--          ],-->
<!--          BB旗舰店: [-->
<!--            {id: '21', title: '金盆洗脚城会员黑金卡', picurl: '../../static/item/osm.jpg', type: '年卡', pirce: 120, count: 1},-->
<!--            {-->
<!--              id: '22',-->
<!--              title: 'BigSmoke限量挂饰',-->
<!--              picurl: '../../static/item/osm.jpg',-->
<!--              type: 'somkeWeed款',-->
<!--              pirce: 1200,-->
<!--              count: 1-->
<!--            },-->
<!--            {id: '23', title: '烧贝壳袋装牙膏', picurl: '../../static/item/osm.jpg', type: '200ml装', pirce: 12, count: 1},-->
<!--            {-->
<!--              id: '24',-->
<!--              title: '蔡旭昆专辑《jennyTaimay》',-->
<!--              picurl: '../../static/item/osm.jpg',-->
<!--              type: '限量版',-->
<!--              pirce: 312,-->
<!--              count: 1-->
<!--            }-->
<!--          ],-->
<!--          CC旗舰店: [-->
<!--            {id: '31', title: '金盆洗脚城会员黑金卡', picurl: '../../static/item/osm.jpg', type: '年卡', pirce: 120, count: 1},-->
<!--            {-->
<!--              id: '32',-->
<!--              title: 'BigSmoke限量挂饰',-->
<!--              picurl: '../../static/item/osm.jpg',-->
<!--              type: 'somkeWeed款',-->
<!--              pirce: 1200,-->
<!--              count: 1-->
<!--            },-->
<!--            {id: '33', title: '烧贝壳袋装牙膏', picurl: '../../static/item/osm.jpg', type: '200ml装', pirce: 12, count: 1},-->
<!--            {-->
<!--              id: '34',-->
<!--              title: '蔡旭昆专辑《jennyTaimay》',-->
<!--              picurl: '../../static/item/osm.jpg',-->
<!--              type: '限量版',-->
<!--              pirce: 312,-->
<!--              count: 1-->
<!--            }-->
<!--          ]-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      selectShop () {-->
<!--        var that = this-->
<!--        if (this.BGP === 'changeBGP transition') {-->
<!--          that.BGP = 'BGPdefault transition'-->
<!--          this.total_price = 0-->
<!--          this.count_goods = 0-->
<!--        } else {-->
<!--          that.BGP = 'changeBGP transition'-->
<!--          var total = 0-->
<!--          var counter = 0-->
<!--          for (var shop in this.main) {-->
<!--            for (var item in this.main[shop]) {-->
<!--              total += this.main[shop][item].pirce * this.main[shop][item].count-->
<!--              this.total_price = total-->
<!--              counter += 1-->
<!--              this.count_goods = counter-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      },-->
<!--      selectButton () {-->
<!--        var that = this-->
<!--        if (this.BGC === 'ChangeBGC transition') {-->
<!--          that.BGC = 'bgcDefault transition'-->
<!--        } else {-->
<!--          that.BGC = 'ChangeBGC transition'-->
<!--        }-->
<!--      },-->
<!--      mergeItem () {-->
<!--        for (var item in this.cart) {-->
<!--          var shop = this.cart[item].shop-->
<!--          console.log(shop)-->
<!--        }-->
<!--      },-->
<!--      increment (event) {-->
<!--        var that = this-->
<!--        for (var shop in this.main) {-->
<!--          for (var item in this.main[shop]) {-->
<!--            if (event.currentTarget.id === this.main[shop][item].id) {-->
<!--              var currCount = this.main[shop][item].count + 1-->
<!--              that.$set(that.main[shop][item], 'count', currCount)-->
<!--              console.log(currCount)-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      },-->
<!--      decrement (event) {-->
<!--        var that = this-->
<!--        for (var shop in this.main) {-->
<!--          for (var item in this.main[shop]) {-->
<!--            if (event.currentTarget.id === this.main[shop][item].id) {-->
<!--              var currCount = this.main[shop][item].count - 1-->
<!--              that.$set(that.main[shop][item], 'count', currCount)-->
<!--              console.log(currCount)-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped lang="sass">-->
<!--  @import "./cart.sass"-->
<!--</style>-->
