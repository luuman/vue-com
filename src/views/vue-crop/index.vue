<template>
  <div class="">
    <vue-crop v-model="crop.src" :API="crop.api"></vue-crop>
    {{crop.src}}
    <input id="g-core-upload-input-3618" name="files" type="file" accept="pdf" style="width: 100%; height: 100%;">
  </div>
</template>

<script>
  import VueCrop from 'COMPONENT/vue-crop'
  export default {
    data: () => ({
      crop: {
        src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
        api: 'http://101.198.151.190/api/upload.php'
      }
    }),
    components: {
      'vue-crop': VueCrop
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
