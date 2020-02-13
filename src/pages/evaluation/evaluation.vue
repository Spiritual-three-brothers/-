<template>
  <div class="main_container">
    <div class="evaluation">
      <div class="item_rate">
        <div class="item_img">图片</div>
        <div class="title">商品评分</div>
        <div class="rate_container">
          <div class="star" v-for="(item, index) in list" :key="item.id" :id="index" :class="{changeBGC:changeColor >= index}" @click="whichStar($event,index)">★</div>
        </div>
      </div>
      <div class="evaluate_area">
        <textarea v-model="items.count" type="text" ref="count" placeholder="评价大于20元的商品超过十个字就有机会获得优惠券"></textarea>
      </div>
       <div class="statistic">
          {{items.count.length}}/25
        </div>
    </div>
    <div class="rate"></div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      list: [0, 1, 2, 3, 4],
      changeColor: '',
      stars: []
    }
  },
  mounted () {
  },
  methods: {
    whichStar (e, index) {
      // console.log(e.currentTarget.getElementById('2'))
      this.changeColor = index
    }
  }
}
</script>


<style lang="sass">
  @import "evaluation.sass"
</style>
