<template>
  <div>
    <input v-model="title" type="text" name="">
    <div @click="setTitle">Title</div>
    <div>{{getCityList}}</div>
    <div>
      <div>{{showTime(time)}}</div>
      <input v-model="time" type="text" name="">
    </div>
  </div>
</template>
<script>
  import {setDocumentTitle} from 'UTIL/common'
  import {formatAlphabeticalOrder} from 'UTIL/tool'
  import {formatTimeRead} from 'FILTER/friendly-time'
  import API from 'API'
  export default {
    components: {
    },
    data () {
      return {
        title: '',
        time: '2017-8-9 18:20:20',
        cityList: {}
      }
    },
    mounted () {
      API.CityList()
        .then(res => {
          // this.cityList = res
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
      showTime (time) {
        console.log(formatTimeRead(time))
        return formatTimeRead(time)
      },
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
