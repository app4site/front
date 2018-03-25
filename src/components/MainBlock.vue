<template lang="pug">
  .root(':class'="{mobile}")
    .desc
      h1 {{generating ? 'Подожди пару минут, приложение создается' : 'Создай приложение для своего сайта'}}
      cool-input.inp(
        placeholder="Адрес сайта"
        v-model="site"
        ':readonly'="wait"
        ':alwaysFocus'="!canProcess"
        ':error'="error"
        ':spinner'="wait"
        '@submit'="process"
      )
      button.submit(
        v-if = "!wait && !canProcess"
        ':style'="{visibility: site ? 'visible' : 'hidden'}"
        '@click'="process")
        | Продолжить
      transition(name="slide-fade")
        .additional(v-if="!wait && canProcess")
          cool-input.inp(placeholder="Название приложения" v-model="appName")
          input#file.file(type="file" name="icon" '@change'="onFileChange")
          label(for="file")
            simple-svg(:filepath="uploadIcon" fill="currentColor" stroke="currentColor")
            span Загрузить другую иконку
          button.submit('@click'="createApp") Создать приложение!
      transition(name="slide-fade")
        a(v-if="apkUrl" download ':href'="apkUrl")
          button.submit() Скачать приложение
    .preview
      .device-wrapper
        .device(data-device="Pixel" data-orientation="portrait" data-color="black")
          .screen
            .status-bar
            .app(':class'="{sample: !canProcess && !generating && !apkUrl}")
              .icon
                .image(
                  ':class'="{placeholder: !icon}"
                  ':style'="{backgroundImage: icon && `url(${icon})`}"
                )
              .title {{appName || 'Cool App!'}}

</template>

<script>
import CoolInput from './CoolInput'
import uploadIcon from '../assets/upload.svg'

export default {
  props: {
    backUrl: String,
  },
  data: () => ({
    site: '',
    error: '',
    wait: false,
    canProcess: false,
    appName: '',
    appPk: null,
    icon: '',
    uploadIcon,
    generating: false,
    apkUrl: '',
  }),
  components: {
    CoolInput
  },
  methods: {
    createApp() {
      this.wait = true
      this.generating = true
      let form = new FormData()
      form.append('name', this.appName)
      form.append('color', '#FFFFFF')
      fetch(this.backUrl + `/api/app/${this.appPk}`, { method: 'POST', body: form })
        .then(() => this.check())
        .catch(() =>
          this.error = 'Неверные данные!'
        )
        .then(url => {
          this.wait = false
          this.generating = false
          this.canProcess = false
          this.apkUrl = url
        })
    },

    check() {
      return new Promise((resolve) => {
        setTimeout(() => {
          fetch(this.backUrl + `/api/app/${this.appPk}`)
            .then(t => t.json())
            .then(json => {
              if (json.app === 200)
                resolve(json.file_url)
              else
                resolve(this.check())
            })
        }, 1500)
      })
    },

    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length)
        return
      const icon = files[0]

      let form = new FormData()
      form.append('icon', icon)
      fetch(this.backUrl + `/api/app/${this.appPk}/icon`, { method: 'POST', body: form })
        .then(t => t.json())
        .then(json => {
          if (json.error)
            this.error = "Неправильная иконка!"
          this.icon = json.icon
        })
    },

    process() {
      this.canProcess = false
      this.error = ''
      this.apkUrl = ''
      if (!/^https?:\/\//.test(this.site))
        this.site = 'https://' + this.site
      try {
        new URL(this.site)
      } catch {
        this.error = 'Неправильный адрес сайта!'
        return
      }
      this.wait = true

      fetch(this.backUrl + '/api/scrape', {method: 'POST', body: this.site})
        .then(t => t.json())
        .then(json => {
          this.appPk = json.id
          this.appName = json.name
          this.icon = json.icon
          this.canProcess = true
          document.activeElement.blur()
        })
        .catch(() =>
          this.error = 'Нет такого сайта!'
        )
        .then(() => {
          this.wait = false
        })
    }
  },
}
</script>

<style scoped lang="stylus">
@import url('~html5-device-mockups/dist/device-mockups.min.css')
apple = #4caf50

.simple-svg-wrapper
  display inline-block
  vertical-align middle

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

  .file
    width 0.1px
    height 0.1px
    opacity 0
    overflow hidden
    position absolute
    z-index -1

    & + label
      margin-top 25px
      font-size 1.25em
      font-weight 500
      display inline-block
      cursor pointer
      color: apple
      border: 2px solid currentColor
      padding 0.625rem 1.25rem
      width 100%
      text-align center

      & .simple-svg-wrapper
        width 1em
        height 1em
        margin-top -0.25em
        margin-right 0.4em

    & + label:hover
      color #04af00

  .submit
    margin-top 40px
    font-size 1.25em
    display inline-block
    cursor pointer
    color: white
    border: 2px solid apple
    padding 0.625rem 1.25rem
    background-color apple
    width 100%
    outline none
    text-align center
    text-decoration none
    &:hover
      border-color #04af00
      background-color #04af00

.app
  display flex
  flex-direction column
  align-items center
  user-select none
  &.sample
    filter blur(2px)
  & .icon
    position relative
    width 45px
    height 45px
    //border-radius 10px
    & .image
      position: absolute
      top 0
      left 0
      right 0
      bottom 0
      background-size contain
      background-repeat no-repeat
      &.placeholder
        background-image url(../assets/icon.png)

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
