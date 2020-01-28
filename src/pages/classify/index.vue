<template>
  <div class="main_container">
    <!-- 顶部横向bar，主类别 -->
    <div class="top">
      <scroll-view  scroll-x class="tab-bar-container">
        <div class="tabbar" :class="{'tabbar-bottom':currentTab===index}" v-for="(item,index) in tabBar" :key="index"
             @click="clickTab(index)">
          {{item.title}}
        </div>
      </scroll-view>

      <div class="swiper-container">
        <scroll-view scroll-x class="sub-category">
          <span @click="clickSub(_index)" :class="{'selected': selectedSub === _index}" class="sub-category-item"
                v-for="(sub,_index) in tabBar[currentTab].subcategory" :key="sub.id">{{sub.title}}</span>
        </scroll-view>
        <div class="item-list">

          <div class="item-content" @click="navigate">
            <div class="item-container">
              <div class="image-container">
                <img src="../../../static/item/osm.jpg">
              </div>
              <div class="item-title">
                欧诗漫OSM美白化妆品套装 营养美肤晶彩无暇补水保湿护肤品
              </div>
              <div class="item-price">
                <span style="font-size: 12px">￥</span>25.53
              </div>

              <div class="item-tag">
                <span>自营</span>
                <span>放心购</span>
              </div>
              <div class="item-comment">
                13万条评价
              </div>
              <div class="item-shop">
                <span class="shop-name"> 欧诗漫自营官方旗舰店</span>
                <!--                      <span class="enter-shop">-->
                <!--                        >进店-->
                <!--                      </span>-->
              </div>
            </div>
            <div class="item-container">
              <div class="image-container">
                <img src="../../../static/item/osm.jpg">
              </div>
              <div class="item-title">
                欧诗漫OSM美白化妆品套装 营养美肤晶彩无暇补水保湿护肤品
              </div>
              <div class="item-price">
                <span style="font-size: 12px">￥</span>25.53
              </div>

              <div class="item-tag">
                <span>自营</span>
                <span>放心购</span>
              </div>
              <div class="item-comment">
                13万条评价
              </div>
              <div class="item-shop">
                <span class="shop-name"> 欧诗漫自营官方旗舰店</span>
                <!--                        <span class="enter-shop">-->
                <!--                        >进店-->
                <!--                      </span>-->
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    data () {
      return {
        tabBar: [
          {
            id: 1,
            title: '生鲜果蔬',
            subcategory: [
              {id: 1, title: '水果'},
              {id: 2, title: '生鲜'}
            ]
          },
          {
            id: 2,
            title: '百货便利',
            subcategory: [
              {id: 1, title: '饮料'},
              {id: 2, title: '零食'},
              {id: 3, title: '日用品'},
              {id: 4, title: '乳制品'},
              {id: 5, title: '生活用品'}
            ]
          },
          {
            id: 3,
            title: '家用电器',
            subcategory: [
              {id: 1, title: '水果'},
              {id: 2, title: '蔬菜'},
              {id: 3, title: '生鲜'},
              {id: 4, title: '乳制品'},
              {id: 5, title: '生活用品'},
              {id: 6, title: '其他'}
            ]
          },
          {
            id: 4,
            title: '其他分类',
            subcategory: [
              {id: 1, title: '水果'},
              {id: 2, title: '蔬菜'},
              {id: 3, title: '生鲜'},
              {id: 4, title: '乳制品'},
              {id: 5, title: '生活用品'}
            ]
          }, {
            id: 5,
            title: '哈哈哈分类',
            subcategory: [
              {id: 1, title: '水果'},
              {id: 2, title: '蔬菜'},
              {id: 3, title: '生鲜'},
              {id: 4, title: '乳制品'},
              {id: 5, title: '生活用品'}
            ]
          }
        ],
        currentTab: 0,
        selectedSub: 0,
        content: [
          {
            mainCateId: 1,
            subCateGory: 1,
            itemList: [
              {
                itemId: 1,
                itemName: '天水红富士霜打极品 果农自摘不外售 十一月',
                itemImage: ''
              }
            ]
          }
        ]
      }
    },
    mounted () {
    },
    methods: {
      clickTab (e) {
        this.currentTab = e
      },
      changeTab (e) {
        this.currentTab = e.mp.detail.current
        console.log(this.currentTab)
      },
      clickSub (idx) {
        this.selectedSub = idx
      },
      navigate () {
        console.log(123321)
        wx.navigateTo({url: '../detail/main'})
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "./classify.sass"

</style>
