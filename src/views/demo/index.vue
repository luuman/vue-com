<template>
  <div class="demo">
    <div class="flex">
      <buttons class="box"
        :to-name="Name"
        :key="Name.id"
        v-for="Name in demo">
        <v-svg :data="`#icon-${Name}`"></v-svg>
        <p>{{Name}}</p>
      </buttons>
    </div>
    <div id="container">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script>
  import Route from 'ROUTE'
  import Buttons from 'COMPONENT/button'
  import API from 'API'
  export default {
    components: {Buttons},
    data () {
      return {
        demo: this.split(Route.options.routes)
      }
    },
    methods: {
      split (array) {
        let Demo = []
        for (let i = 1; i < array.length; i++) {
          let j = i - 1
          Demo[j] = array[i].name
        }
        // console.log(Demo)
        return Demo
      }
    },
    mounted () {
      console.log(this.$el.style)
      API.Notifications('11').then((res) => {
      }, (res) => {
        console.log('BUG Weixin JSSDK')
      })
      API.Notifications('11').then((res) => {
      }, (res) => {
        console.log('BUG Weixin JSSDK')
      })
      API.Notifications('2').then((res) => {
      }, (res) => {
        console.log('BUG Weixin JSSDK')
      })
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
  .flex{
    display: flex;
    flex-wrap: wrap;
    .box{
      width: size(125);
      height: size(125);
      padding: size(30) 0;
      border-right: 1px solid #c7c7c7;
      border-bottom: 1px solid #c7c7c7;
      box-sizing: border-box;
      text-align: center;
      // @media only screen and (width:320px) and (width:768px){
      //   background: #000;
      // }
      // @media only screen and (min-width:768px) and (max-width:1024px){
      //   background: #666;
      // }
      @include respond-to(iphone) {
        color: #ea4a47;
      }
      &:nth-child(3n){
        border-right: none;
      }
      svg{
        width: size(50);
        height: size(50);
        color: #ea4a47;
      }
      .cov-ripple{
        background: #ea4a47;
      }
    }
  }
</style>
