<template>
  <div class="mian">
    <div class="con-answer" id="shareContent">
      <div class="main-wrap content-wrap">
        <div class="headline">

        <div class="img-place-holder"></div>



        </div>

        <div class="content-inner">




        <div class="question">

        <div class="answer">

        <div class="meta">
        <span class="author">Tristan，</span><span class="bio">Anchor Man@虎扑拓海</span>
        </div>

        <div class="content">
          <p>面对训练有素的兰尼斯特军队，龙的战斗方式概括起来：</p>
          <p>1 删除整行，</p>
          <p>2 删除整列，</p>
          <p>3 清空表格内容。</p>
        </div>
        </div>


        <div class="view-more"><a href="http:
        <!-- <!-- //www.zhihu.com/question/63432129">查看知乎讨论<span class="js-question-holder"></span></a></div> --> -->

        </div>
        <!-- <img src="https://img.alicdn.com/bao/uploaded/TB1qimQIpXXXXXbXFXXSutbFXXX.jpg"> -->
        <!-- <img src="https://img.alicdn.com/bao/uploaded/TB1qimQIpXXXXXbXFXXSutbFXXX.jpg"> -->
        <img :src="imgUrl">



        <div class="question">
        <h2 class="question-title">有哪些我们以为是中国特色的东西，其实全世界都一样？</h2>

        <div class="answer">

        <div class="meta">
        <span class="author">范梵，</span><span class="bio">晴耕雨读</span>
        </div>

        <div class="content">
        <p>在美国念书的时候，有一次坐老美的车，闲来无事就跟他扯了扯国内是怎样追女生的，说得起劲我就给他说，在中国如果你对一个妹子很好，但是她不喜欢你那她就会给你发「好人卡」（nice person card，我一激动瞎编的……）。</p>
        <p>我想了想他大概不知道好人卡是什么，正想跟他解释，他突然恍然大悟般地地拍着方向盘跟我说：「对对对，我曾经追过一个女生好久，后来她也跟我说：你是个很好的人，但是我们不适合。」</p>
        <p>虽然隔着太平洋那么宽的文化鸿沟，我们的心里却流下了相同的泪水 T-T。</p>
        </div>
        </div>

        <div class="answer">

        <div class="meta">
        <span class="author">Moritz，</span><span class="bio">Assistenzarzt Chirurgie</span>
        </div>

        <div class="content">
        <p>什么自然疗法，排除身体负能量疗法，水晶疗法，Fengshui……在欧洲拥趸甚众。</p>
        <p>在德国不要太受欢迎的针灸就不说了，毕竟是被验证有效果的。但的确太火了，比国内火多了——处处可见打着针灸旗号的疗养院，甚至医师协会都向执业医生提供针灸课程。</p>
        <p>然后那天在医院食堂吃午饭，旁边一排妇产科的医生护士，其中有几个应该还是 Oberärztin（高级医生，相当于国内副高以上级别吧），听到她们的对话：</p>
        <p>「据说茶叶是碱性食品，对身体好……」</p>
        <p>当时就眼前一黑，对这个世界绝望了。</p>
        </div>
        </div>


        <div class="view-more"><a href="http:
        <!-- <!-- //www.zhihu.com/question/26097247">查看知乎讨论<span class="js-question-holder"></span></a></div> --> -->

        <h2 class="question-title">dfjdsjfaldsjfl jdsdfjdsjfalds jfljdsdfjdsjfaldsj ljdsdfjdsjfaldsjfljdsdfjdsj faldsjfljdsdfjds dsjfljdsdfjdsjfaldsjfljdsdfjdsjfaldsjfl jdsdfjdsjfaldsjfljds</h2>
        </div>





        <div class="question">
        <h2 class="question-title">名校毕业的男性在择偶时是否看重学历？</h2>

        <div class="answer">

        <div class="meta">
        <span class="author">知乎用户，</span><span class="bio">科研工作者</span>
        </div>

        <div class="content">
        <p>学历当然不重要，重要的是 Publication 好吧。</p>
        <p>以后 Ph.D 找对象 都是如下套路：</p>
        <p>a：听说你发了 Nature 正刊，还是 Cover，实在是太牛了。</p>
        <p>b：哈哈哈，运气好而已。那你呢？</p>
        <p>a：也就一篇 Nature Communication，还有一篇 Nature Nanotechnology 共同一作。</p>
        <p>b：哦，挺好的。那你喜欢什么颜色啊？</p>
        <p>a：蓝色。</p>
        <p>b：对不起，我喜欢热情似火的红色，不喜欢悲伤的蓝色。我觉得咱两性格不合适，还是不要再见面了。</p>
        </div>
        </div>
        <img src="../../assets/img/logo.png" height="200" width="200">
        <div class="view-more"><a href="http:
        <!-- <!-- //www.zhihu.com/question/31222342">查看知乎讨论<span class="js-question-holder"></span></a></div> --> -->
        </div>
        </div>
      </div>
      <div id="qrcode"></div>
    </div>
    <footer class="footer-center" @click="showBase">
      <button class="btn-share" id="btnShare">截&nbsp;图</button>
    </footer>
    <img :src="Img">
  </div>
</template>
<script>
  require('!!script-loader!../../../static/qrcode.min.js')
  
  import {getCanvas, getHtmlBase64} from 'UTIL/base64'
  export default {
    components: {
    },
    data () {
      return {
        // imgUrl: 'https://user-gold-cdn.xitu.io/2017/7/24/d2bf033096fb4429b0c916ad8663cf5e',
        imgUrl: 'https://avatars2.githubusercontent.com/u/10662852?v=4&s=460',
        Img: ''
      }
    },
    mounted () {
      this.initqrcode()
      // this.base64()
    },
    watch: {
    },
    methods: {
      base64 () {
        let image = new Image()
        image.crossOrigin = 'Anonymous'
        image.src = this.imgUrl
        let self = this
        image.onload = function () {
          console.log(getCanvas(this))
          self.imgUrl = getCanvas(this)
        }
      },
      backImg (data) {
        // 回调
        this.$Loading.close()
        this.Img = data
      },
      showBase () {
        // 执行
        this.$Loading.open('生成中……')
        getHtmlBase64('shareContent', 3, this.backImg)
      },
      initqrcode () {
        let qrcode = new window.QRCode(document.getElementById('qrcode'), {
          text: 'http:// jindo.dev.naver.com/collie',
          width: 428,
          height: 428,
          colorDark: '#000',
          colorLight: '#FFF',
          correctLevel: window.QRCode.CorrectLevel.H
        })
        console.log(qrcode)
      }
    },
    filters: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
  .mian{
    width: 100%;
    word-break: break-all;
    background: #FFF;
  }
  .con-answer{
    position: absolute;
    width: 100%;
    z-index: -1;
    // left: 100%;
  }
</style>
