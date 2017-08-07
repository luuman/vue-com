<template>
  <div>
    <div @click="noShow">show</div>
    <keep-alive exclude="swiper">
      <previewer v-if="show" class="action" :list="list"></previewer>
      <swiper v-if="img.length" class="in-img" :img="img"></swiper>
    </keep-alive>
  </div>
</template>
<script>
  import Previewer from 'COMPONENT/previewer'
  import Swiper from 'COMPONENT/swiper'
  import API from 'API'
  export default {
    components: {
      Previewer,
      Swiper
    },
    data () {
      return {
        show: false,
        info: [],
        list: [
          {
            src: 'http://image.yktour.com.cn/g1/M00/0A/54/CgAMCllXc7eAESYGAAUN-M7frHU099.jpg',
            w: 1200,
            h: 675
          },
          {
            src: 'http://image.yktour.com.cn/g1/M00/0A/54/CgAMCllXc7eAaiHCAAVBXKpGP40731.jpg',
            w: 1200,
            h: 675
          },
          {
            src: 'http://image.yktour.com.cn/g1/M00/0A/54/CgAMCllXc7eAP6gvAAakB9U7bxc757.jpg',
            w: 1200,
            h: 675
          },
          {
            src: 'http://image.yktour.com.cn/g1/M00/0A/54/CgAMCllXc7eAA661AAg_JB8My7o344.jpg',
            w: 1200,
            h: 675
          },
          {
            src: 'http://image.yktour.com.cn/g1/M00/0A/54/CgAMCllXc7eAB2hxAAUuz7HTEqY161.jpg',
            w: 1200,
            h: 675
          },
          {
            src: 'http://image.yktour.com.cn/g1/M00/0A/54/CgAMCllXc7eAHwLqAAVeTPPMgr8905.jpg',
            w: 1200,
            h: 675
          },
          {
            src: 'http://image.yktour.com.cn/g1/M00/0A/54/CgAMCllXc7eAS04zAAKTmQecKVQ654.jpg',
            w: 1200,
            h: 675
          },
          {
            src: 'http://image.yktour.com.cn/g1/M00/0A/54/CgAMCllXc7eAf901AAKfOUdUct4722.jpg',
            w: 1200,
            h: 675
          },
          {
            src: 'http://image.yktour.com.cn/g1/M00/0A/54/CgAMCllXc7eAJoJrAASUlR2dY3Y689.jpg',
            w: 1200,
            h: 675
          },
          {
            src: 'http://image.yktour.com.cn/g1/M00/0A/54/CgAMCllXc7eASERZAAGF-80_C-w207.jpg',
            w: 1200,
            h: 675
          },
          {
            src: 'http://image.yktour.com.cn/g1/M00/0A/54/CgAMCllXc7eAE2gKAARbEovV1Kk008.jpg',
            w: 1200,
            h: 675
          },
          {
            src: 'http://image.yktour.com.cn/g1/M00/0A/54/CgAMCllXc7eABVsEAAm59ZY4mhE763.jpg',
            w: 1200,
            h: 675
          },
          {
            src: 'http://image.yktour.com.cn/g1/M00/0A/54/CgAMCllXc7eANbTaAASAvMS9G5U821.jpg',
            w: 1200,
            h: 675
          }
        ],
        img: [
          {imgUrl: 'http://image.yktour.com.cn/g1/M00/0A/8F/CgAMCllbQ5yANS-OAAbl1JLUs9M463.jpg', url: 'http://www.baidu.com'},
          {imgUrl: 'http://image.yktour.com.cn/g1/M00/0B/32/CgAMCllkcceAR4PMAAkHiktJ4rY19.jpeg', url: 'http://www.baidu.com'},
          {imgUrl: 'http://image.yktour.com.cn/g1/M00/0B/32/CgAMCllkcceAJcqNAAkhpb-eBS838.jpeg', url: 'http://www.baidu.com'}
        ]
      }
    },
    mounted () {
      console.log(this.$route)
      API.ReposList(this.$route.params.username)
        .then(res => {
          this.info = res.items
        }, () => {
        })
    },
    methods: {
      noShow () {
        this.show = !this.show
      }
    },
    activated () {
      console.log('Keep-alive activated')
    },
    deactivated () {
      console.log('Keep-alive deactivated')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
