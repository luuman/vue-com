<template>
  <div>
    <div @click="iosAlertView">iosAlertView</div>
    <div @click="iosAlert">iosAlert</div>
  </div>
</template>
<script>
  // import Heads from 'COMPONENT/heads'
  export default {
    components: {
    },
    data () {
      return {
      }
    },
    mounted () {
    },
    watch: {
    },
    methods: {
      iosAlertView () {
        this.$iosAlert({
          title: '通知',
          text: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
          mask: true,
          buttons: [
            {
              text: '取消',
              onClick () {
                console.log('取消')
              }
            },
            {
              text: '确定',
              onClick () {
                console.log('确定')
              }
            }
          ]
        })
      },
      iosAlert () {
        this.$iosAlert('alert')
      }
    },
    filters: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
