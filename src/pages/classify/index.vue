<template>
  <div>
    <div class="navbar">
      <block v-for="(item,index) in tabs" :key="index">
        <div :id="index" :class="{'navbar_item_on':activeIndex == index}" class="navbar_item" @click="tabClick">
          <div class="navbar_title">{{item.name}}</div>
        </div>
      </block>
      <div class="navbar_slider" :class="navbarSliderClass"></div>
    </div>
    <div>
      <div :hidden="activeIndex != 0">选项一的内容</div>
      <div :hidden="activeIndex != 1">选项二的内容</div>
      <div :hidden="activeIndex != 2">选项三的内容</div>
    </div>
  </div>
</template>
