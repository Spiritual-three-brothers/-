<template>
      <div class="contain">
        <!-- 顶部横向bar，主类别 -->
          <scroll-view scroll-x class="top">
              <div class="tabbar" :class="{'tabbar-bottom':currentTab==index}" v-for="(item,index) in tabBar" :key="index" @click="clickTab(index)">
                  {{item.title}}
              </div>
          </scroll-view>
          <!-- 横向bar的内容 -->
          <swiper :current="currentTab" @change="changeTab">
              <swiper-item v-for="item in items" :key="item.id">
               <div>
                   {{item.content}}
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
        { 'title': '生鲜果蔬' },
        { 'title': '百货便利' },
        { 'title': '家用电器' },
        { 'title': '其他分类' }
      ],
      currentTab: 0,
      items: [
        { 'content': '苹果,香蕉,菠萝,茄子' },
        { 'content': '电视,电脑,冰箱,水壶' },
        { 'content': '菠萝' },
        { 'content': '茄子' }
      ]
    }
  },
  methods: {
    clickTab (e) {
      this.currentTab = e
    },
    changeTab (e) {
      this.currentTab = e.mp.detail.current
    }
  }
}
</script>

<style>
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
   </style>