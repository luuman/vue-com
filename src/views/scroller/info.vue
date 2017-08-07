<template>
  <div>
    <List :info="info"></List>
  </div>
</template>
<script>
  import List from './list.vue'
  import API from 'API'
  export default {
    components: {
      List
    },
    data () {
      return {
        info: []
      }
    },
    mounted () {
      console.log(this.$route)
      API.ReposList(this.$route.params.username)
        .then(res => {
          this.info = res.items
        }, () => {
        })
    },
    activated () {
      console.log('Keep-alive activated')
    },
    deactivated () {
      console.log('Keep-alive deactivated')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
