<template>
  <div class="main">
    <div class="row" v-if="novelty.length" v-for="(List,index) in novelty">
      <List
        :avatarImg="List.avatar_url"
        :title="List.login"
        :time="List.updated_at">
      </List>
    </div>
    <aside class="return_top" @click="backTop" v-if="showBackStatus">
      <v-svg data="#icon-Alert"></v-svg>
    </aside>
  </div>
</template>
<script>
  import List from './follow'
  import {showBack, animate} from 'UTIL/common'
  import API from 'API'
  export default {
    components: {
      List
    },
    data () {
      return {
        novelty: [],
        showBackStatus: false
      }
    },
    mounted () {
      this.initData()
    },
    watch: {
    },
    methods: {
      async initData () {
        // 获取数据
        API.UsersList()
        .then(res => {
          this.novelty = res
        })
        // 开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
        showBack(status => {
          this.showBackStatus = status
        })
      },
      backTop () {
        animate(document.body, {scrollTop: '0'}, 400, 'ease-out')
      }
    },
    filters: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
  .main{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .row{
      padding: size(4);
      box-sizing: border-box;
      width: size(120);
      // height: size(120);
      // height: size(375/3);
      display: inline-block;
      overflow: hidden;
      // .paper{
      //   width: 100%;
      //   overflow: hidden;
      //   img{
      //     position: relative;
      //     z-index: -1;
      //   }
      // }
      .avatar{
        @include font-size(12px);
        font-weight: bold;
      }
    }
    .return_top{
      position: fixed;
      bottom: 3rem;
      right: 1rem;
      svg{
        width: size(50);
        height: size(50);
        color: #04be02;
      }
      // .back_top_svg{
      //   @include wh(2rem, 2rem);
      // }
    }
  }
</style>
