<template>
  <div class="main-container">
    <!-- 购物车商品 -->
    <div class="cart-container">
      <div class="single-cart" v-for="(shop,name) in main" :key="shop.id">
        <div style="display:flex;margin-top:7px">
        <div style="left: 13px;width: 20px;height: 20px;line-height: 20px;text-align: center;border-radius:16px;border: 2px solid rgba(187, 187, 187, 1);" ><i class="iconfont"  :class="BGP" style="color: #FB4D53;margin-left: -3px;margin-top: 1px;font-size: 24px;">&#xe602;</i></div>
        <i class="iconfont" style="margin-top: -1px;margin-left: 8px;font-size: 22px;color: dimgray;">&#xe703;</i>
        <div class="shop-title">{{name}}</div>
        <div style="color: gray;font-size: 23px;line-height: 23px;margin-left: 4px;">></div>
        </div>
        <div v-for="item in shop" :key="item.id" style="margin-top:19px;display:flex">
          <div style="left: 13px;width: 20px;height: 20px;line-height: 20px;text-align: center;border-radius:16px;border: 2px solid rgba(187, 187, 187, 1);margin-top: 36px;" ><i class="iconfont"  :class="BGP" style="color: #FB4D53;margin-left: -3px;margin-top: 1px;font-size: 24px;">&#xe602;</i></div>
          <img :src="item.picurl" style="flex: 3;height: 97px;width: 97px;margin-left: 8px;box-shadow: 6rpx 6rpx 20rpx rgba(0,0,0,0.2);box-shadow: 5px 4px 10px rgba(0,0,0,0.05);"/>
          <div class="item-info" style="flex:7">
            <div style="color: rgba(16, 16, 16, 1);font-size: 15px;font-family: SourceHanSansSC-regular;margin-left:16px">{{item.title}}</div>
            <div style="color: rgba(16, 16, 16, 1);font-size: 15px;font-family: SourceHanSansSC-regular;margin-left:16px">{{item.type}}</div>
            <div style="color: #FB4D53;font-family: none;margin-left: 12px;font-size: 18px;font-weight: bold;margin-top: 15px;">￥{{item.pirce}}</div>
            <div class="counter-warp">
              <button @click="decrement($event)" :id="item.id" v-bind:disabled='count == 1'>-</button>
              <button style="font-weight:400;color:black;font-size:15px;width:32px">{{item.count}}</button>
              <button @click="increment($event)" :id="item.id">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部bar -->
    <div class="bottom-bar">
      <!-- 全选控件 -->
      <div style="flex:1;text-align:center;line-height:2">
        <div class="select-all" @click="selectShop" style="left: 13px;width: 20px;height: 20px;line-height: 20px;text-align: center;border-radius:16px;border: 2px solid rgba(187, 187, 187, 1);"><i class="iconfont"  :class="BGP" style="color: #FB4D53;margin-left: -3px;margin-top: 1px;font-size: 24px;">&#xe602;</i></div>
        <div style="color: dimgray;font-size: 12px;margin-top: -4px;font-size: 11px;margin-left: 9px;">全选</div>
      </div>
      <!-- 总计控件 -->
        <div style="text-align:right;color:dimgray;flex:4;font-weight:500">总计：</div>
        <div style="text-align:left;color:dimgray;margin-right:10px;color:#FB4D53;flex:1.5">￥{{total_price}}</div>
      <!-- 结算button -->
      <div style="flex:2.5;font-size:13px;background:#FB4D53;font-weight:500">去结算({{count_goods}}件)</div>
    </div>
  </div>
</template>

<script>
// import store from '../detail/store'
export default {
  data () {
    return {
      BGC: 'bgcDefault',
      BGP: 'BGPdefault transition',
      total_price: 0,
      count_goods: 0,
      main: {
        AA旗舰店: [
          {id: '11', title: '金盆洗脚城会员黑金卡', picurl: 'http://picapi.zhituad.com/photo/35/18/44ABE.jpg', type: '年卡', pirce: 120, count: 1},
          {id: '12', title: 'BigSmoke限量挂饰', picurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575610090651&di=f9b2a390b4db774c4771f488d1fd36b2&imgtype=0&src=http%3A%2F%2Fwww.rapbasement.com%2Fwp-content%2Fuploads%2F2014%2F11%2FSNOOP.jpg', type: 'somkeWeed款', pirce: 1200, count: 3},
          {id: '13', title: '尼哥牙膏', picurl: 'http://img4.99114.com/group10/M00/3E/F2/rBADs1n-AyeATXaVAAIZup48AzE038.jpg', type: '200ml装', pirce: 12, count: 2},
          {id: '14', title: '蔡旭昆专辑《jennyTaimay》', picurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575610131757&di=a4df6e3b7ef7f6d7be2541aad14a4ee7&imgtype=0&src=http%3A%2F%2Fpics6.baidu.com%2Ffeed%2Fd000baa1cd11728b42b3620cf2626fcac2fd2ca0.jpeg%3Ftoken%3D28f88e2f08ecbba5048e16665229cc9d%26s%3DD1631B747FD857D40F2225CF030080A2', type: '限量版', pirce: 312, count: 1}
        ],
        BB旗舰店: [
          {id: '21', title: '金盆洗脚城会员黑金卡', picurl: '../../static/item/osm.jpg', type: '年卡', pirce: 120, count: 1},
          {id: '22', title: 'BigSmoke限量挂饰', picurl: '../../static/item/osm.jpg', type: 'somkeWeed款', pirce: 1200, count: 1},
          {id: '23', title: '烧贝壳袋装牙膏', picurl: '../../static/item/osm.jpg', type: '200ml装', pirce: 12, count: 1},
          {id: '24', title: '蔡旭昆专辑《jennyTaimay》', picurl: '../../static/item/osm.jpg', type: '限量版', pirce: 312, count: 1}
        ],
        CC旗舰店: [
          {id: '31', title: '金盆洗脚城会员黑金卡', picurl: '../../static/item/osm.jpg', type: '年卡', pirce: 120, count: 1},
          {id: '32', title: 'BigSmoke限量挂饰', picurl: '../../static/item/osm.jpg', type: 'somkeWeed款', pirce: 1200, count: 1},
          {id: '33', title: '烧贝壳袋装牙膏', picurl: '../../static/item/osm.jpg', type: '200ml装', pirce: 12, count: 1},
          {id: '34', title: '蔡旭昆专辑《jennyTaimay》', picurl: '../../static/item/osm.jpg', type: '限量版', pirce: 312, count: 1}
        ]
      }
    }
  },
  methods: {
    selectShop () {
      var that = this
      if (this.BGP === 'changeBGP transition') {
        that.BGP = 'BGPdefault transition'
        this.total_price = 0
        this.count_goods = 0
      } else {
        that.BGP = 'changeBGP transition'
        var total = 0
        var counter = 0
        for (var shop in this.main) {
          for (var item in this.main[shop]) {
            total += this.main[shop][item].pirce * this.main[shop][item].count
            this.total_price = total
            counter += 1
            this.count_goods = counter
          }
        }
      }
    },
    selectButton () {
      var that = this
      if (this.BGC === 'ChangeBGC transition') {
        that.BGC = 'bgcDefault transition'
      } else {
        that.BGC = 'ChangeBGC transition'
      }
    },
    mergeItem () {
      for (var item in this.cart) {
        var shop = this.cart[item].shop
        console.log(shop)
      }
    },
    increment (event) {
      var that = this
      for (var shop in this.main) {
        for (var item in this.main[shop]) {
          if (event.currentTarget.id === this.main[shop][item].id) {
            var currCount = this.main[shop][item].count + 1
            that.$set(that.main[shop][item], 'count', currCount)
            console.log(currCount)
          }
        }
      }
    },
    decrement (event) {
      var that = this
      for (var shop in this.main) {
        for (var item in this.main[shop]) {
          if (event.currentTarget.id === this.main[shop][item].id) {
            var currCount = this.main[shop][item].count - 1
            that.$set(that.main[shop][item], 'count', currCount)
            console.log(currCount)
          }
        }
      }
    }
  }
}
</script>

<style>
/* button */
button{
  position: relative;
  display: block;
  padding-left: 4px;
  padding-right: 5px;
  box-sizing: border-box;
  font-size: 21px;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  color: #000;
  background-color: #f8f8f8;
  line-height: 18px;
  border-radius: 0px;
  color: dimgray;
  font-weight: bold;
  width: 22px;
  height: 22px;
}
button::after {
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid white;
  -webkit-transform: scale(.5);
  transform: scale(.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  box-sizing: border-box;
  border-radius: 0px;
}

/* 购物车内容 */
.cart-container{
  margin-bottom: 75px;
}
.changeBGP{
  display: block;
}
.BGPdefault{
  display: none;
}
/* .item-info div{
  margin-left: 10px;
  color: dimgray;
  font-weight: bold;
  font-family: 宋体;
} */
.shop-title{
  color: rgba(16, 16, 16, 1);
  font-size: 16px;
  margin-left: 4px;
  font-family: SourceHanSansSC-bold;
  font-weight: bold;
  line-height: 23px;
}
.counter-warp{
    float: right;
    margin-top: -20px;
}
.counter-warp button{
  float: left
}
.single-cart{
  padding: 13px;
  background: white;
  margin-top: 12px;

}
/* 顶部bar */
.top-bar{
  width: 100%;
  height: 77rpx;
  display: flex;
  line-height: 80rpx;
  text-align: center;
  background: white;
  position: fixed;
  z-index: 10;
  margin-top: -34px;
}
.position{
  color:dimgray;
  flex:7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* button修改 */
.ChangeBGC{
  background: red;
  border: solid 2px rgb(255, 70, 70);
}
.bgcDefault{
  background: white;
  border: solid 2px lightgray;
}
.transition{
  transition: all 0.3s;
}
/* 底部bar统计价格及提交用 */
.bottom-bar{
  display: flex;
  height: 50px;
  position: fixed;
  line-height: 50px;
  bottom: 0;
  width: 100%;
  background: white;
  font-weight: bold;
  color: white;
  text-align: center;
}
.select-button{
  border-radius: 18px;
  width: 18px;
  height: 18px;
  margin: 0 auto;
  margin-top: 6px;
}
.select-all{
  width: 18px;
  height: 18px;
  border: solid 1px lightgray;
  border-radius: 10px;
  margin-left: 13px;
  margin-top: 10px;
}
page{
  background-color: rgb(247,247,247)
}
</style>