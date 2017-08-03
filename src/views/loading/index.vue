<template>
  <div>
    <div @click="Loading">Loading</div>
    <div @click="Close">Close</div>
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
      Loading () {
        this.$Loading.open('加载中……')
        // Loading('alert')
      },
      Close () {
        this.$Loading.close()
      }
    },
    filters: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
