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

        <h2 class="question-title">dfjdsjfaldsjfljdsdfjdsjfaldsjfljdsdfjdsjfaldsjfljdsdfjdsjfaldsjfljdsdfjdsjfaldsjfljdsdfjdsjfaldsjfljdsdfjdsjfaldsjfljdsdfjdsjfaldsjfljdsdfjdsjfaldsjfljds</h2>
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
    <footer class="footer-center" @click="Canvas('shareContent')">
      <button class="btn-share" id="btnShare">截&nbsp;图</button>
    </footer>
    <img :src="Img">
  </div>
</template>
<script>
  require('!!script-loader!../../../static/qrcode.min.js')
  require('!!script-loader!../../../static/html2canvas/0.5.0-alpha1/html2canvas.js')
  // 英文会自动换行，但不是很清晰！
  // require('!!script-loader!../../../static/html2canvas/0.4.1/html2canvas.js')
  export default {
    components: {
    },
    data () {
      return {
        Img: ''
      }
    },
    mounted () {
      this.initqrcode()
      // this.htmlCanvas()
    },
    watch: {
    },
    methods: {
      htmlCanvas () {
        // 定义查找元素方法
        function $ (selector) {
          return document.querySelector(selector)
        }
        var main = {
          init: function () {
            main.setListener()
          },
          // 设置监听事件
          setListener: function () {
            var btnShare = document.getElementById('btnShare')
            btnShare.onclick = function () {
              main.html2Canvas()
            }
          },
          // 获取像素密度
          getPixelRatio: function (context) {
            var backingStore = context.backingStorePixelRatio ||
              context.webkitBackingStorePixelRatio ||
              context.mozBackingStorePixelRatio ||
              context.msBackingStorePixelRatio ||
              context.oBackingStorePixelRatio ||
              context.backingStorePixelRatio || 1
            return (window.devicePixelRatio || 1) / backingStore
          },
          // 绘制dom 元素，生成截图canvas
          html2Canvas: function () {
            // var shareContent = $('#shareContent')
            // 需要绘制的部分的 (原生）dom 对象 ，注意容器的宽度不要使用百分比，使用固定宽度，避免缩放问题
            // var width = shareContent.offsetWidth
            // // 获取(原生）dom 宽度
            // var height = shareContent.offsetHeight
            // // 获取(原生）dom 高
            // var offsetTop = shareContent.offsetTop
            // // 元素距离顶部的偏移量

            // var canvas = document.createElement('canvas')
            // // 创建canvas 对象
            // var context = canvas.getContext('2d')
            // var scaleBy = main.getPixelRatio(context)
            // // 获取像素密度的方法 (也可以采用自定义缩放比例)
            // canvas.width = width * scaleBy
            // // 这里 由于绘制的dom 为固定宽度，居中，所以没有偏移
            // canvas.height = (height + offsetTop) * scaleBy
            // // 注意高度问题，由于顶部有个距离所以要加上顶部的距离，解决图像高度偏移问题
            // context.scale(scaleBy, scaleBy)
            // var opts = {
            //   // 允许加载跨域的图片
            //   allowTaint: true,
            //   // 检测每张图片都已经加载完成
            //   tainttest: true,
            //   // 添加的scale 参数
            //   scale: scaleBy,
            //   // 自定义 canvas
            //   canvas: canvas,
            //   // 日志开关，发布的时候记得改成false
            //   logging: true,
            //   // dom 原始宽度
            //   width: width,
            //   // dom 原始高度
            //   height: height
            // }
            // window.html2canvas(shareContent, opts).then(function (canvas) {
            //   console.log('html2canvas')
            //   var body = document.getElementsByTagName('body')
            //   body[0].appendChild(canvas)
            // })

            var shareContent = $('#shareContent')
            // 需要绘制的部分的 (原生）dom 对象 ，注意容器的宽度不要使用百分比，使用固定宽度，避免缩放问题
            var w = shareContent.offsetWidth
            // 获取(原生）dom 宽度
            var h = shareContent.offsetHeight
            // 获取(原生）dom 高
            // var offsetTop = shareContent.offsetTop
            // 元素距离顶部的偏移量
            // var w = document.body.scrollWidth
            // var h = document.body.scrollHeight
            // 要将 canvas 的宽高设置成容器宽高的 2 倍
            var canvas = document.createElement('canvas')
            canvas.width = w * 2
            canvas.height = h * 2
            canvas.style.width = w + 'px'
            canvas.style.height = h + 'px'
            var context = canvas.getContext('2d')
            // 然后将画布缩放，将图像放大两倍画到画布上
            context.scale(2, 2)

            window.html2canvas(document.body, {
              canvas: canvas,
              onrendered: function (canvas) {
                document.body.innerHTML = ''
                var dataUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
                var newImg = document.createElement('img')
                newImg.src = dataUrl
                newImg.width = w
                document.body.appendChild(newImg)
              }
            })
          }
        }
        // 最后运行代码
        main.init()
      },
      Canvas (DivId) {
        let scale = 3
        let self = this
        let w = document.body.scrollWidth
        let h = document.body.scrollHeight
        let canvas = document.createElement('canvas')
        let context = canvas.getContext('2d')
        canvas.width = w * scale
        canvas.height = h * scale
        canvas.style.width = w + 'px'
        canvas.style.height = h + 'px'
        context.scale(scale, scale)
        window.html2canvas(document.getElementById(DivId), {
          canvas: canvas,
          onrendered: function (canvas) {
            let image = canvas.toDataURL('image/png')
            self.Img = image
          }
        })
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
  }
</style>
