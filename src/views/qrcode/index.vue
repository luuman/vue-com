<template>
  <div id="qrcode"></div>
</template>
<script>
  require('!!script-loader!../../../static/qrcode.min.js')
  export default {
    components: {
    },
    data () {
      return {
      }
    },
    mounted () {
      this.initqrcode()
    },
    watch: {
    },
    methods: {
      initqrcode () {
        let qrcode = new window.QRCode(document.getElementById('qrcode'), {
          text: window.loaction,
          width: 428,
          height: 428,
          colorDark: '#000000',
          colorLight: '#ffffff',
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
</style>
