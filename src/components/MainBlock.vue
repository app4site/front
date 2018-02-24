<template lang="pug">
  .root(':class'="{mobile}")
    .desc
      h1.
        Создай приложение для своего сайта
      cool-input.inp(placeholder="Адрес сайта" alwaysFocus ':error'="error" v-model="site" '@submit'="process")
    .preview
      .device-wrapper
        .device(data-device="Pixel" data-orientation="portrait" data-color="black")
          .screen
            .status-bar
            .app
              .icon
              .title Cool app!

</template>

<script>
import CoolInput from './CoolInput'
//(v-if="canProcess" ':src'="site")
export default {
  data: () => ({
    site: '',
    error: '',
    canProcess: false,
  }),
  components: {
    CoolInput
  },
  methods: {
    process() {
      this.error = ''
      try {
        if (!/https?:/.test(this.site))
          this.site = 'https://' + this.site
        new URL(this.site)
      } catch {
        this.error = 'Неправильный адрес!'
        return
      }
      this.canProcess = true
    }
  },
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
  width 50%
  text-align left
  padding-right 20px
  h1
    font-size 38px

  .inp
    height 40px
    width 100%
    font-size 26px

.preview
  flex 1
  .device-wrapper
    margin 0 auto
  .screen
    pointer-events initial
    background-size contain
    background url(../assets/mbg.jpeg) round
    display flex
    align-items center
    justify-content center

  .app
    display flex
    flex-direction column
    align-items center
    filter blur(2px)
    & .icon
      position relative
      width 45px
      height 45px
      //border-radius 10px
      &:after
        content ' '
        position: absolute
        top 0
        left 0
        right 0
        bottom 0
        background-image url(../assets/icon.png)
        background-size contain

    .title
      margin-top 5px
      font-size 10px
      font-weight 600
      color whitesmoke


  .status-bar
    background-size contain
    background-repeat no-repeat
    background-image url(../assets/status-bar.png)
    position absolute
    top 0
    right 0
    height 30px
    width 65px


</style>
