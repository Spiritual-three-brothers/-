<template>
  <div class="this_container">
    <div class="shop_page">
      <div class="shop_title">
        <div class="title_container">
          <img class="shop_img" src="https://pic1.zhimg.com/v2-8c13c9f55882ff2bd9f0a3f03d32e0ec_1200x500.jpg">
          <div class="shop_name">熹茶东百体验店ShiteaDB Store</div>
          </div>
        <div class="shop_info">
          <div class="month_sail">
            <div class="sail_title">月销量</div>
            <div class="sail_count">10w</div>
          </div>
          <div class="month_sail">
            <div class="sail_title">描述相符</div>
            <div class="sail_count">10w</div>
          </div>
          <div class="month_sail">
            <div class="sail_title">商家服务</div>
            <div class="sail_count">10w</div>
          </div>
        </div>
        <div class="switch_bar">
          <div class="all_selection">
            
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
                          <div class="item_info_container">
                            <div class="item-title">
                              欧诗漫OSM美白化妆品套装 营养美肤晶彩无暇补水保湿护肤品
                            </div>
                            <div class="priceAndSell">
                              <div class="item-price">
                                <span style="font-size: 12px">￥</span>25.53
                              </div>
                              <div class="item-comment">
                                13万条评价
                              </div>
                            </div>
                          </div>
                        </div>
                       <div class="item-container">
                          <div class="image-container">
                            <img src="../../../static/item/osm.jpg">
                          </div>
                          <div class="item_info_container">
                            <div class="item-title">
                              欧诗漫OSM美白化妆品套装 营养美肤晶彩无暇补水保湿护肤品
                            </div>
                            <div class="priceAndSell">
                              <div class="item-price">
                                <span style="font-size: 12px">￥</span>25.53
                              </div>
                              <div class="item-comment">
                                13万条评价
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

          </div>
        </div>
      </div>
    </div>
    <div class="bottom_bar">
      <div class="bottom_container">
        <div class="bottom_selection">
          <div class="bottom_icon">&#xe617;</div>
          <div class="selection_title">商品分类</div>
        </div>
        <div class="bottom_selection">
          <div class="bottom_icon">&#xe616;</div>
          <div class="selection_title">联系客服</div>
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
            title: '全部',
            subcategory: [
              {id: 1, title: '默认'},
              {id: 2, title: '销量'},
              {id: 3, title: '精品'},
              {id: 4, title: '特惠'}
            ]
          },
          {
            id: 2,
            title: '劲爆活动',
            subcategory: [
              {id: 1, title: '饮料'},
              {id: 2, title: '零食'},
              {id: 3, title: '日用品'},
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
        wx.navigateTo({url: '../detail/main'})
      }
    }
  }
</script>

<style lang="sass">
  @import "shop_page"
</style>
