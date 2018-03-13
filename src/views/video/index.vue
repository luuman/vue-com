<template>
  <div>
    <!-- <my-video class="video" :Img="video.Img" :Url="video.url"></my-video> -->
    <vue-video :sources="videos.sources" :options="videos.options"></vue-video>
  </div>
</template>
<script>
  import MyVideo from 'COMPONENT/video'
  import VueVideo from 'COMPONENT/video/vue-video'
  export default {
    components: {
      MyVideo,
      VueVideo
    },
    data () {
      return {
        video: {
          Img: 'https://s1.mi.com/m/ghd/2017/zzz0905mix2/static/img/v2.d8f5d6c.jpg',
          url: 'https://v.mifile.cn/b2c-data-video/nO/rQk5XZ6DgXK0wt1myzQ==.mp4?needValidHost=false'
        },
        videos: {
          sources: [{
            src: 'https://v.mifile.cn/b2c-data-video/nO/rQk5XZ6DgXK0wt1myzQ==.mp4?needValidHost=false',
            type: 'video/mp4'
          }],
          options: {
            autoplay: true,
            volume: 0.6,
            poster: 'https://s1.mi.com/m/ghd/2017/zzz0905mix2/static/img/v2.d8f5d6c.jpg'
          }
        }
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
