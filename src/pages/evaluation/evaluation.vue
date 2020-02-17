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
        <textarea v-model="count" type="text" ref="count" placeholder="评价大于20元的商品超过十个字就有机会获得优惠券"></textarea>
         <div class="input_listening">
          {{count.length}}/140
        </div>
      </div>
      <div class="upload">
        <p class="pick-title">添加图片</p>
        <div class="weui-uploader__bd">
          <div class="weui-uploader__files" id="uploaderFiles">
            <block v-for="(item,index) in files" :key="index">
              <div class="weui-uploader__file" @click="previewImage($event,index)" :id="item">
                <image class="weui-uploader__img" :src="item" mode="aspectFit" />
              </div>
            </block>
          </div>
          <div class="weui-uploader__input-box" >
            <div class="weui-uploader__input"  @click="chooseImage($event)">
              <div class="camera">&#xe612;</div>
              <div class="discribe">添加图片</div>
            </div>
          </div>
        </div>
      </div>
      <div class="send_style">
        <div  :class="button" @click="selected()"></div>
        <div class="discribe">匿名发布</div>
      </div>
    </div>
    <div class="rate">
      <div class="shop_service_comment">
        <div class="icon">&#xe613;</div>
        <div class="discribe">店铺服务评价</div>
      </div>
      <div class="service_container">
        <div class="service_rate">
          <div class="service_container" v-for="(single_rate, index_) in type" :key="single_rate.id">
            <div class="discribe">{{single_rate}}</div>
            <div class="star_container">
              <div class="star" v-for="(item, index) in list" :key="item.id" :id="single_rate" :class="{changeBGC:changeColor >= index}" @click="whichStar($event,index)">★</div>
            </div>
          </div>
        </div>
      </div>
      <div class="submit"> 提交</div>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      type: ['商品符合度', '店铺服务态度', '商家配送速度', '配送员服务'],
      list: [0, 1, 2, 3, 4],
      changeColor: '',
      count: '',
      stars: [],
      button: 'button'
    }
  },
  mounted () {
  },
  methods: {
    whichStar (e, index) {
      this.changeColor = index
    },
    selected () {
      if (this.button === 'button') {
        this.button = 'selected'
      } else {
        this.button = 'button'
      }
    },
    chooseImage (e) {
      console.log('onclicked')
      let i = 0
      let that = this
      let max = that.maxImg
      let upLength
      let imgFilePaths
      wx.chooseImage({
        count: max || 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function (res) {
          let len = that.files.concat(res.tempFilePaths)
          imgFilePaths = res.tempFilePaths
          upLength = imgFilePaths.length
          if (len.length > max) {
            that.$mptoast('图片最多只能选择' + max)
            return false
          }
          wx.showLoading({
            title: '上传中...'
          })
          that.upLoad(imgFilePaths, i, upLength)
        },
        fail: function () {
          console.log('fail')
        },
        complete: function () {
          console.log('commplete')
        }
      })
    }
  }
}
</script>


<style lang="sass">
  @import "evaluation.sass"
</style>
