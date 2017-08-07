<template>
  <div>
    <a v-for="List in info" href="html_url">{{List.name}}</a>
  </div>
</template>
<script>
  // import Heads from 'COMPONENT/heads'
  export default {
    props: {
      info: Array
    },
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
    methods: {},
    filters: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
