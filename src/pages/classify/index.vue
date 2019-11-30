<template>
      <div class="main_container">
        <!-- 顶部横向bar，主类别 -->
          <scroll-view scroll-x class="top">
              <div class="tabbar" :class="{'tabbar-bottom':currentTab===index}" v-for="(item,index) in tabBar" :key="index" @click="clickTab(index)">
                  {{item.title}}
              </div>
              <div class="swiper-container">
                <div class="sub-category">
                  <span @click="clickSub(_index)" :class="{'selected': selectedSub === _index}" class="sub-category-item" v-for="(sub,_index) in tabBar[currentTab].subcategory" :key="sub.id">{{sub.title}}</span>
                </div>
                <div class="item-list">

                  <div class="item-content">
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
                      <span class="enter-shop">
                        >进店
                      </span>
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
                        <span class="enter-shop">
                        >进店
                      </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </scroll-view>


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
            {id: 2, title: '蔬菜'},
            {id: 3, title: '生鲜'},
            {id: 4, title: '乳制品'},
            {id: 5, title: '生活用品'}
          ]
        },
        {
          id: 2,
          title: '百货便利',
          subcategory: [
            {id: 1, title: '水果'},
            {id: 2, title: '蔬菜'},
            {id: 3, title: '生鲜'},
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
            {id: 5, title: '生活用品'}
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
    }
  }
}
</script>

<style>
  .item-list {
    background-color: rgb(247, 247, 247);
  }
  .top {
     width: 100%;
     text-align: center;
     line-height: 42px;
     white-space: nowrap;
     position: relative;
     background: #fff;
   }
  .tabbar {
     width: 180rpx;
     font-size: 14px;
     height: 79rpx;
     display: inline-block;
     color: #000;
  }

   .tabbar-bottom {
     color: #FB4D53;
     border-bottom: 2px solid #FB4D53;
     font-weight: bold;
   }
  .sub-category {
    display: flex;
    padding: 15px 5px 15px 5px;

  }
  .sub-category-item {
    text-align: center;
    font-size: 12px;
    flex:1;
    border-radius: 15px;
    margin:0 8px;
    color: rgb(98,98,97);
    height: 20px;
    line-height: 20px;
  }
  .sub-category-item.selected {
    color :#FB4D53;
    border: 1px solid #FB4D53;
  }
  .item-content {
    display: flex;
    flex-wrap: wrap;
  }
  .item-content .item-container {
    height: 300px;
    border-radius: 0;
    background-color: white;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    flex: 0 0 48.5%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 1%;
  }
  .item-content .item-container:nth-child(0) {
    margin-top: 1%;
  }
  .item-content .item-container:nth-child(1) {
    margin-top: 1%;
  }
  .item-content .item-container:nth-of-type(even) {
    margin-left: 0.5%;
  }
  .item-content .item-container:nth-of-type(odd) {
    margin-right: 0.5%;
  }
  .item-content .item-container .image-container {
    flex: 1;
  }
  .item-content .item-container .item-title {
    flex: 0 0 40px;
    text-overflow: ellipsis;
    line-height: 20px;
    color: rgba(16, 16, 16, 1);
    font-size: 13px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;
    overflow: hidden;
    padding: 0 5px;

  }
  .item-content .item-container .item-price {
    padding-left: 5px;
    padding-top: 5px;
    flex: 0 0 20px;
    line-height: 20px;
    color: rgba(251, 77, 83, 1);
    font-size: 15px;
    text-align: left;
    font-family: SourceHanSansSC-bold;
    font-weight: bold;
  }

  .item-content .item-container .item-tag {
    flex: 0 0 14px;
    padding-left: 5px;
  }

  .item-content .item-container .item-comment {
    flex: 0 0 18px;
    padding-left: 5px;

    height: 18px;
    line-height: 18px;
    color: rgb(168, 162, 162);
    font-size: 10px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }

  .item-content .item-container .item-shop {
    flex: 0 0 18px;
    padding-left: 5px;
    line-height: 9px;
    text-align: left;
  }

  .item-shop .shop-name {
    height: 18px;
    color: rgb(168, 162, 162);
    font-size: 10px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
    white-space: nowrap;
    width: 125px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .item-shop .enter-shop {
    font-size: 10px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
    float: right;
    padding:5px;
    line-height: 2px;
  }

  .item-tag span:first-child {
    float: left;
    background-color: rgba(251, 77, 83, 1);;
    color: white;
    border-radius: 3px;
    font-size: 8px;
    width: 22px;
    height: 14px;
    line-height: 14px;
  }

  .item-tag span:last-child {
    float: left;
    background-color: rgba(247, 0, 17, 0.13);
    color: rgba(251, 77, 83, 1);
    border-radius: 3px;
    font-size: 8px;
    width: 30px;
    height: 14px;
    line-height: 14px;
    margin-left:5px;
  }
  .item-content .item-container .image-container image {
    width: 100%;
    height: 100%;
  }


   </style>
