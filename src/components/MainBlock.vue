<template lang="pug">
  .root(':class'="{mobile}")
    .desc
      h1.
        Создай приложение для своего сайта
      input(placeholder="Адрес сайта" autofocus)
    .preview

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="stylus">
.root
  width 800px
  height 100%
  margin 0 auto
  display flex
  align-items center

  &.mobile
    width 100%
    margin 0

.desc
  width: 50%
  text-align left
  & h1
    width 350px

  & input
    height 40px
    width 100%
    margin-rigth 20px
    font-size 26px
    border none
    border-bottom 2px solid darkgrey
    background-color transparent
    outline none
</style>
