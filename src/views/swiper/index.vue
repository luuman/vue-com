<template>
  <div>
    <swiper v-if="img.length" class="in-img" :img="img"></swiper>
    <div @click="add">Add</div>
    <div @click="clean">Clean</div>
  </div>
</template>
<script>
  import Swiper from 'COMPONENT/swiper'
  export default {
    components: {Swiper},
    data () {
      return {
        img: [
          // {imgUrl: 'http://image.yktour.com.cn/g1/M00/0A/8F/CgAMCllbQ5yANS-OAAbl1JLUs9M463.jpg', url: 'http://www.baidu.com'},
          // {imgUrl: 'http://image.yktour.com.cn/g1/M00/0B/32/CgAMCllkcceAR4PMAAkHiktJ4rY19.jpeg', url: 'http://www.baidu.com'},
          {imgUrl: 'http://image.yktour.com.cn/g1/M00/0B/32/CgAMCllkcceAJcqNAAkhpb-eBS838.jpeg', url: 'http://www.baidu.com'}
        ]
      }
    },
    methods: {
      add () {
        this.img = [
          {imgUrl: 'http://image.yktour.com.cn/g1/M00/0A/8F/CgAMCllbQ5yANS-OAAbl1JLUs9M463.jpg', url: 'http://www.baidu.com'},
          {imgUrl: 'http://image.yktour.com.cn/g1/M00/0B/32/CgAMCllkcceAR4PMAAkHiktJ4rY19.jpeg', url: 'http://www.baidu.com'},
          {imgUrl: 'http://image.yktour.com.cn/g1/M00/0B/32/CgAMCllkcceAJcqNAAkhpb-eBS838.jpeg', url: 'http://www.baidu.com'}
        ]
      },
      clean () {
        this.img = []
      }
    },
    mounted () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
