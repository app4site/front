<template lang="pug">
.root(':class'="{mobile}")
  .desc
    h1(v-if="apkUrl") Готово!
    h1(v-else-if="generating") Пару минут, приложение создается...
    m-app(v-else-if="mobile && !wait && canProcess" ':blur'="blur" :icon="icon" :app-name="appName")
    h1(v-else) Преврати свой сайт<br/>в приложение
    cool-input.inp(
      placeholder="Адрес сайта"
      v-model="site"
      ':autofocus'="!mobile"
      ':readonly'="wait"
      ':error'="error"
      ':spinner'="wait"
      '@submit'="process"
    )
    my-button(
      primary
      v-if = "!wait && !canProcess && !apkUrl"
      ':style'="{visibility: site ? 'visible' : 'hidden'}"
      '@click'="process"
    )
      | Продолжить
    transition(name="slide-fade")
      .additional(v-if="!wait && canProcess")
        cool-input.inp(placeholder="Название приложения" v-model="appName" :max-len="30")
        my-button(file name="icon" '@change'="onFileChange") Загрузить другую иконку
        my-button(primary '@click'="createApp") Создать приложение!
    transition(name="slide-fade")
      a(v-if="apkUrl" download ':href'="apkUrl")
        my-button(primary) Скачать приложение
  my-phone.preview(v-if="!mobile")
    m-app(':blur'="blur" :icon="icon" :app-name="appName")
</template>

<script>
import CoolInput from './CoolInput'
import MyPhone from './MyPhone'
import MyButton from './MyButton'
import MApp from './MApp'

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
    generating: false,
    apkUrl: '',
    waitLoad: null,
  }),
  components: {
    CoolInput,
    MyPhone,
    MyButton,
    MApp,
  },
  created() {
    this.waitLoad = new Promise(this.preload)
  },
  computed: {
    blur() {
      return !this.canProcess && !this.generating && !this.apkUrl
    }
  },
  methods: {
    preload(resolve) {
      fetch(this.backUrl + '/api/')
        .then(resolve)
        .catch(() => setTimeout(() => this.preload(resolve), 2000))
    },

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
      }
      catch(_){
        this.error = 'Неправильный адрес сайта!'
        return
      }
      this.wait = true

      this.waitLoad
        .then(() => fetch(this.backUrl + '/api/scrape', {method: 'POST', body: this.site}))
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
.root
  width 800px
  height 100%
  margin 0 auto
  display flex
  align-items center

  &.mobile
    width 100%
    margin 0
    font-size 15px
    & h1
      font-size 30px
  *
    box-sizing border-box
    font-weight inherit

  h1
    margin 0

  .inp
    width 100%
    font-size 26px

  &:not(.mobile) .desc
    width 50%
    text-align left
    padding-right 20px

  &.mobile .desc
    text-align center
    margin 0 20px

.preview
  margin 0 auto

.slide-fade-enter-active
.slide-fade-leave-active
  transition all 0.5s ease-out

.slide-fade-enter, .slide-fade-leave-to
  max-height 0
  opacity 0

.slide-fade-enter-to, .slide-fade-leave
  max-height 150px

</style>
