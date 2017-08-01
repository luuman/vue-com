<template>
  <div class="box">
    <buttons class="btn">btn</buttons>
    <buttons class="btn">btn</buttons>
    <buttons class="btn">btn</buttons>
    <buttons class="btn">btn</buttons>
    <buttons class="btn">btn</buttons>
  </div>
</template>
<script>
  import Buttons from 'COMPONENT/button'
  export default {
    components: {Buttons},
    data () {
      return {
      }
    },
    methods: {},
    mounted () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
  .box{
    .btn{
      background: #bb3434;
    }
  }
</style>
