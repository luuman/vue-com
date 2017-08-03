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
        console.log(Demo)
        return Demo
      }
    },
    mounted () {
      API.CoreInfo().then((res) => {
        console.log(res)
      }, (res) => {
        console.log('BUG Weixin JSSDK')
      })
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
      &:nth-child(3n){
        border-right: none;
      }
      svg{
        width: size(50);
        height: size(50);
        color: #04be02;
      }
      .cov-ripple{
        background: #04be02;
      }
    }
  }
</style>
