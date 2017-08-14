<template>
  <div>
    <div class="list" v-for="timeList in pageList">
      <p class="list-time">{{fromDate(timeList.date)}}</p>
      <!-- <p class="list-time">{{timeList.date.substring(0,4) + '/' + timeList.date.substring(4,6) + '/' + timeList.date.substring(6,8)}}</p> -->
      <div class="list-con" link @click="go(boxList.id)" v-for="boxList in timeList.stories">
        <img :src="boxList.images[0]"/>
        <p>{{boxList.title}}</p>
      </div>
    </div>
    <!-- <div class="loading" v-if="!pageList.length&&!refreshing">
      <span class="left"></span>
      <span class="middle"></span>
      <span class="right"></span>
    </div> -->
    <!-- 滑动加载更多组件 -->
    <infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"></infinite-scroll>
    <!-- 回到顶部组件 -->
    <!-- <back-scroll :scroller="scroller" :flag="circle"></back-scroll> -->
  </div>
</template>
<script>
  import API from 'API'
  import infiniteScroll from 'COMPONENT/vue-scroller'
  export default {
    components: {
      infiniteScroll
    },
    data () {
      return {
        loading: false,
        scroller: window,
        pageList: []
      }
    },
    mounted () {
      // this.scroller = this.$el
      this.getList('latest')
    },
    watch: {
    },
    methods: {
      go (id) {
        this.$router.push({path: `/Daily/${id}`})
      },
      getList (name, time) {
        API.getNews(name, time).then((res) => {
          this.pageList.push(res)
        })
      },
      loadMore () {
        this.loading = true
        setTimeout(() => {
          // this.count--
          this.getList()
        }, 500)
      },
      fromDate (time) {
        return time.substring(0, 4) + '/' + time.substring(4, 6) + '/' + time.substring(6, 8)
      },
      GetDate (Count) {
        var dd = new Date()
        dd.setDate(dd.getDate() + Count)
        var y = dd.getFullYear()
        var m = dd.getMonth() + 1
        m = m > 10 ? m : '0' + m
        var d = dd.getDate()
        d = d >= 10 ? d : '0' + d
        return y + '' + m + '' + d
      }
    },
    filters: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
  .list{
    width: 90%;
    z-index: 1;
    position: relative;
    padding-top: 0.8rem;
    margin: .8rem auto 0;
    .list-time{
      top: 0;
      margin: 0;
      color: #fff;
      padding: 0 1rem;
      font-size: 0.4rem;
      line-height: 0.8rem;
      letter-spacing: 0.1rem;
      border-radius: 0.4rem;
      text-align: center;
      background-color: #ffd300;
      transform: translate(0,-50%);
      position: absolute;
      box-shadow: 0 3px 10px 0 rgba(91,115,146,0.15);
    }
    .list-con{
      cursor: pointer;
      display: flex;
      padding: 0.3rem;
      margin-bottom: 0.4rem;
      border-radius: 0.15rem;
      align-items: center;
      background-color: #fff;
      box-shadow: 0 3px 10px 0 rgba(91,115,146,0.15);
      img{
        width: 2rem;
        height: 2rem;
        margin-right: 0.4rem;
      }
      p{
        color: #5b7492;
        font-size: 0.4rem;
        text-align: justify;
        margin: 0;
      }
    }
  }
</style>
