<template>
  <div>
    <input v-model="title" type="text" name="">
    <div @click="setTitle">Title</div>
    <div>{{getCityList}}</div>
  </div>
</template>
<script>
  import {setDocumentTitle} from 'UTIL/common'
  import {formatAlphabeticalOrder} from 'UTIL/tool'
  import API from 'API'
  export default {
    components: {
    },
    data () {
      return {
        title: '',
        cityList: {}
      }
    },
    mounted () {
      API.CityList()
        .then(res => {
          this.cityList = res
        })
    },
    computed: {
      getCityList () {
        return formatAlphabeticalOrder(this.cityList)
      }
    },
    watch: {
    },
    methods: {
      setTitle () {
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
