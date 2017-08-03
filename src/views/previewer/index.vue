<template>
  <div>
    <previewer class="action" :list="list"></previewer>
    <previewer class="action" :list="lists"></previewer>
  </div>
</template>
<script>
  import Previewer from 'COMPONENT/previewer'
  export default {
    components: {
      Previewer
    },
    data () {
      return {
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
        lists: [
          {
            src: 'http://image.yktour.com.cn/g1/M00/0A/54/CgAMCllXc7eAESYGAAUN-M7frHU099.jpg',
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
        ]
      }
    },
    mounted () {
    },
    watch: {
    },
    methods: {},
    filters: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/mixin.scss';
</style>
