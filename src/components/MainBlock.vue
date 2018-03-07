<template lang="pug">
  .root(':class'="{mobile}")
    .desc
      h1 Создай приложение для своего сайта
      cool-input.inp(
        placeholder="Адрес сайта"
        ':alwaysFocus'="!canProcess"
        v-model="site"
        ':error'="error"
        ':spinner'="wait"
        '@submit'="process"
      )
      transition(name="slide-fade")
        .additional(v-if="canProcess")
          cool-input.inp(placeholder="Название приложения" v-model="appName")
          cool-input.inp(placeholder="Иконка" v-model="icon")
    .preview
      .device-wrapper
        .device(data-device="Pixel" data-orientation="portrait" data-color="black")
          .screen
            .status-bar
            .app(':class'="{sample: !canProcess}")
              .icon
              .title {{appName || 'Cool App!'}}

</template>

<script>
import CoolInput from './CoolInput'
//(v-if="canProcess" ':src'="site")
export default {
  data: () => ({
    site: '',
    error: '',
    wait: false,
    canProcess: false,
    appName: '',
    icon: ''
  }),
  components: {
    CoolInput
  },
  methods: {
    process() {
      this.canProcess = false
      this.error = ''
      if (!/^https?:\/\//.test(this.site))
        this.site = 'https://' + this.site
      try {
        new URL(this.site)
      } catch {
        this.error = 'Неправильный адрес сайта!'
        return
      }
      this.wait = true
      fetch(process.env.VUE_APP_BACKEND_URL + '/api/scrape?url=' + encodeURIComponent(this.site))
        .then(t => t.text())
        .then(text => new DOMParser().parseFromString(JSON.parse(text).resp, 'text/html'))
        .then(doc => {
          this.appName = doc.title
          this.canProcess = true
        })
        .catch(() =>
          this.error = 'Нет такого сайта!'
        )
        .then(() => this.wait = false)
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
    margin 0

  .inp
    width 100%
    font-size 26px

.app
  display flex
  flex-direction column
  align-items center
  &.sample
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

.slide-fade-enter-active
.slide-fade-leave-active
  transition all 0.5s ease-out

.slide-fade-enter, .slide-fade-leave-to
  max-height 0
  opacity 0

.slide-fade-enter-to, .slide-fade-leave
  max-height 150px

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
