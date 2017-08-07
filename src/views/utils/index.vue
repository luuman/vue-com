<template>
  <div>
    <input v-model="title" type="text" name="">
    <div @click="setTitle">Title</div>
  </div>
</template>
<script>
  import {setDocumentTitle} from 'UTIL/html-title'
  export default {
    components: {
    },
    data () {
      return {
        title: ''
      }
    },
    mounted () {
    },
    watch: {
    },
    methods: {
      setTitle () {
        console.log(this.title)
        setDocumentTitle(this.title)
      }
    },
    filters: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
