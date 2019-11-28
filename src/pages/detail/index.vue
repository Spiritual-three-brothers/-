<template>
  <div class="main_container">
    <swiper
      :indicator-dots='true'
      indicator-color='#d8d8d8'
      indicator-active-color = '#ffad36'
      :autoplay='true'
      :interval='3000'
      :duration='1000'
      :circular='true'
    >
      <a v-for='img in topSwipers' :key="img.id">
        <swiper-item>
          <img              
            class='slide-image' 
            mode='aspectFit' 
            :src='img.outterImage'
            />
        </swiper-item>
      </a>
    </swiper>
    <div class="weight">
        {{curritem.weight}}
    </div>
    <div class="price">
        ￥{{curritem.price}}
    </div>
    <div class="full_title">
        {{curritem.full_title}}
    </div> 
  </div>  
</template>

<script>
export default {
  data () {
    return {
      topSwipers: [{
        id: 1,
        outterImage: '../../static/swiper/a1.jpg'
      },
      {
        id: 2,
        outterImage: '../../static/swiper/a2.png'
      },
      {
        id: 3,
        outterImage: '../../static/swiper/a3.png'
      }],
      curritem: {
        item_id: '3122313',
        price: '12.3',
        full_title: '天水红富士霜打极品 果农自摘不外售 十一月西北专属 纯绿色水果',
        weight: '500g'
      }
    }
  }
}
</script>
<style scoped>
swiper{
    width: 100%;
    height: 335px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.6);  
}
.price{
    margin-left: 11px;
    font-size: 18px;
    margin-top: 47px;
    color: #FB4D53;
    font-family: SourceHanSansSC-bold;
}
.weight{
    border-radius: 20%;
    background: gainsboro;
    float: right;
    margin-right: 11px;
    margin-top: 47px;
    color: rgb(43, 23, 24);
    font-family: SourceHanSansSC-bold;
}
</style>