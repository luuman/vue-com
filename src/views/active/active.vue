<template>
  <div class="bg">
    <div class="title"></div>
      <div class="shake">
          <span class="shakes animated">{{title}}</span>
      </div>
      <div class="change">
          您还有<span>3</span>次机会
      </div>
      <!-- 中奖 -->
      <div id="userout" class="popup">
        <div class="titles">
          <p id="user">用户</p>
          恭喜你获得奖品
        </div>
        <div class="red-tc-btn">
          <button id="go">继续抽奖</button>
        </div>
      </div>
      <!-- 结束 -->
      <div id="nochance" class="popup">
        <div class="titles">
          <img src="img/red-jh.png">
          结束抽奖了哦！ 
        </div>
        <div class="red-tc-btn">
          <button id="home">返回主页</button>
        </div>
      </div>
  </div>
</template>
<script>
  // import Heads from 'COMPONENT/heads/heads'
  import FriendlyTime from 'FILTER/friendly-time'
  export default {
    data () {
      return {
        Links: [],
        title: 'Acitve List'
      }
    },
    // components: {Heads},
    mounted () {
      this.title = FriendlyTime('2017-7-9 18:20:20')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/mixin.scss';
  .bg{
    background-image: url(../../assets/img/red-bg.png);
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-size: size(20);
    .title{
      background: url(../../assets/img/red-ts.png);
      background-repeat: no-repeat;
      width: 100%;
      height: size(80);
      background-size: size(200);
      background-position: center;
      margin-top: size(20);
    }
    .shake{
      height: size(260);
      width: size(260);
      margin: size(20) auto;
      background: #fff;
      position: relative;
      border-radius: 100%;
      .shakes{
        background: url(../../assets/img/red-ss.png);
        width: 100%;
        height: 100%;
        position: absolute;
        background-size: 60%;
        background-position: 40% 80%;
        background-repeat: no-repeat;
        display: inline-block;
      }
      &:after{
        content: ' ';
        width: 101%;
        height: 101%;
        position: absolute;
        top: -0.5%;
        left: -0.5%;
        background: url(../../assets/img/red-ss-bg.png);
        background-size: cover;
      }
    }
    .change{
      width: 60%;
      @include font-size(16px);
      border-radius: size(30);
      color: #FFF;
      height: auto;
      line-height: size(40);
      background: rgba(0,0,0,0.45);
      text-align: center;
      margin: size(0) auto;
    }
  }
  .popup{
    .titles{
      // background: url(../img/red-zj-bg.png);
      background-size: 100%;
      margin-top: 40%;
      text-align: center;
      font-size: 16px;
      p{
        font-size: 20px;
        padding-bottom: 10px;
      }
      button{
        width: 100%;
        background: #ff0006;
        border-radius: 5px;
        border: none;
        line-height: 40px;
        font-size: 18px;
        color: #fff;
      }
    }
  }
</style>
