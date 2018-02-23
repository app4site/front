<template>
  <div id="app">
    <div class="bg"></div>
    <main-block msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MainBlock from './components/MainBlock.vue'

export default {
  name: 'app',
  components: {
    MainBlock
  },
}
</script>

<style lang="stylus">
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic)

body, html, #app
  height 100%
  width 100%
  margin 0
  padding 0

body
  font-family 'Roboto', sans-serif
  text-align center

.bg
  z-index -1000
  position absolute
  height 100%
  width 100%
  top 0
  left 0
  background-size cover
  background url("./assets/bg.jpg") round

  &:after
    content ' '
    position absolute
    height 100%
    width 100%
    top 0
    left 0
    background-image linear-gradient(top, rgba(255,255,255,0.50), rgba(255,255,255,0.50))

</style>
