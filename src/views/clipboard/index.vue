<template>
  <div>
    <div class="clipboard">
      <h1>Copy text from another element</h1>
      <!-- Target -->
      <input id="foo" value="https://github.com/zenorocha/clipboard.js.git">
      <!-- Trigger -->
      <button class="btn" data-clipboard-target="#foo">Copy to clipboard
        <!-- <img src="https://clipboardjs.com/assets/images/clippy.svg" alt="Copy to clipboard"> -->
      </button>
    </div>
    <div class="clipboard">
      <h1>Cut text from another element</h1>
      <!-- Target -->
      <textarea id="bar">Mussum ipsum cacilds...</textarea>

      <!-- Trigger -->
      <button class="btn" data-clipboard-action="cut" data-clipboard-target="#bar">
          Cut to clipboard
      </button>
    </div>
    <div class="clipboard">
      <h1>Copy to clipboard</h1>
      <!-- Trigger -->
      <!-- <button class="btn" data-clipboard-text="Just because you can doesn't mean you should — clipboard.js">Copy to clipboard</button> -->
      <button class="btn" data-clipboard-demo data-clipboard-action="copy" data-clipboard-text="Just because you can doesn't mean you should — clipboard.js">Copy to clipboard</button>
    </div>

    <button class="btn" data-clipboard-text="3">Copy</button>
  </div>
</template>
<script>
  // import Clipboard from 'clipboard'
  require('!!script-loader!../../../static/clipboard.min.js')
  export default {
    components: {
    },
    data () {
      return {
        info: 'djfkdsjfd'
      }
    },
    mounted () {
      this.Copy()
    },
    watch: {
    },
    methods: {
      Copy () {
        let clipboard = new window.Clipboard('.btn')
        console.log(clipboard)
        clipboard.on('success', function (e) {
          e.clearSelection()
          console.info('Action:', e.action)
          alert('成功复制:' + e.text)
          console.info('Trigger:', e.trigger)
          e.clearSelection()
        })
        clipboard.on('error', function (e) {
          alert('浏览器不支持:请长按选择复制文字')
          console.error('Trigger:', e.trigger)
        })
      }
    },
    filters: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
