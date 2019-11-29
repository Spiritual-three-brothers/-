<template>
      <div class="main_container">
        <!-- 顶部横向bar，主类别 -->
          <scroll-view scroll-x class="top">
              <div class="tabbar" :class="{'tabbar-bottom':currentTab===index}" v-for="(item,index) in tabBar" :key="index" @click="clickTab(index)">
                  {{item.title}}
              </div>
          </scroll-view>
          <!-- 横向bar的内容 -->
          <swiper :current="currentTab" @change="changeTab">
              <swiper-item v-for="item in tabBar" :key="item.id">
                <div class="sub-category">
                  <span @click="clickSub(_index)" :class="{'selected': selectedSub === _index}" class="sub-category-item" v-for="(sub,_index) in item.subcategory" :key="sub.id">{{sub.title}}</span>
                </div>
                <div class="item-content">
                   <div class="item-container"></div>
                   <div class="item-container"></div>
                   <div class="item-container"></div>
                   <div class="item-container"></div>
                   <div class="item-container"></div>
                   <div class="item-container"></div>
                   <div class="item-container"></div>
                   <div class="item-container"></div>
               </div>
             </swiper-item>
         </swiper>
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
  swiper {
    height: 100%;
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
    height: 274px;
    line-height: 20px;
    border-radius: 0;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    border: 0.5px solid rgb(242, 242, 241);
    flex: 0 0 50%;
    box-sizing: border-box;
  }
  .main_container {
    height: 100%;
  }

   </style>
