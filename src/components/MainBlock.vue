<template lang="pug">
.root(:class="{mobile}")
  .desc
    transition(name="slide-fade")
      m-app.app(
        v-if="mobile && (state === 'pregen' || state === 'wait1')"
        :blur="state === 'wait1'"
        :icon="icon"
        :app-name="appName"
      )
    transition(name="slide-fade")
      h1.app(v-if="state === 'done'") Done!
      div.app(v-else-if="mobile && (state === 'pregen' || state === 'wait1')")
      .app(v-else-if="state === 'wait2'")
        h1 Creating the app...
        span Wait a few minutes
      h1.app(v-else) Create a free website app right now
    cool-input.inp(
      placeholder="Site address"
      v-model="site"
      :autofocus="!mobile"
      :error="error"
      :readonly="state.startsWith('wait')"
      :spinner="state.startsWith('wait')"
      @submit="pregen()"
    )
    transition(name="slide-fade")
      .button.prime(v-if="state === 'start'" :style="{visibility: site ? 'visible' : 'hidden'}")
        my-button(primary @click="pregen()") Continue
    transition(name="slide-fade")
      .edit(v-if="state === 'pregen'")
        cool-input.inp(placeholder="App name" v-model="appName" :max-len="30")
        my-button.button(file name="icon" @change="onFileChange") Upload another icon
        my-button.button.prime(primary @click="createApp") Create the app!
    transition(name="slide-fade")
      .button.prime(v-if="state === 'done'")
        a(download :href="apkUrl")
          my-button(primary @click="download") Download app
  my-phone.preview(v-if="!mobile")
    m-app(:blur="state === 'start' || state === 'wait1'" :icon="icon" :app-name="appName")
</template>

<script>
import CoolInput from './CoolInput'
import MyPhone from './MyPhone'
import MyButton from './MyButton'
import MApp from './MApp'

function findGetParameter(parameterName) {
  let items = location.search.substr(1).split("&")
  for (let index = 0; index < items.length; index++) {
    let tmp = items[index].split("=")
    if (tmp[0] === parameterName)
      return decodeURIComponent(tmp[1])
  }
}

export default {
  props: {
    backUrl: String,
  },
  data: () => ({
    site: '',
    error: '',
    appName: '',
    appPk: null,
    icon: '',
    apkUrl: '',
    state: 'start',
  }),
  components: {
    CoolInput,
    MyPhone,
    MyButton,
    MApp,
  },
  created() {
    let id = findGetParameter('id')
    if (id)
      this.pregen(id)
  },
  watch: {
    site() {
      this.error = ''
      if (this.state === 'done') {
        const el = document.activeElement
        this.state = 'start'
        setTimeout(() => el.focus(), 100)
      }
    },
  },
  methods: {
    reach(id) {
      if (!window.yaCounter48187421)
        return
      window.yaCounter48187421.reachGoal(id)
    },

    download() {
      this.reach('download')
    },

    createApp() {
      this.reach('create')
      this.state = 'wait2'

      let form = new FormData()
      form.append('name', this.appName)
      form.append('final_url', this.site)

      fetch(`${this.backUrl}/api/app/${this.appPk}`, { method: 'POST', body: form })
        .then(() => this.check())
        .catch(() => {
          this.state = 'pregen'
          this.error = 'Wrong data!'
        })
        .then(url => {
          this.state = 'done'
          this.apkUrl = new URL(url, this.backUrl).toString()
        })
    },

    check() {
      return new Promise((resolve) => {
        setTimeout(() => {
          fetch(`${this.backUrl}/api/app/${this.appPk}`)
            .then(t => t.json())
            .then(json => {
              if (json.app === 200)
                resolve(json.file_url)
              else
                resolve(this.check())
            })
        }, 2000)
      })
    },

    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length)
        return
      const icon = files[0]

      let form = new FormData()
      form.append('icon', icon)
      fetch(`${this.backUrl}/api/app/${this.appPk}/icon`, { method: 'POST', body: form })
        .then(t => t.json())
        .then(json => {
          if (json.error)
            this.error = "Wrong icon!"
          else
            this.error = ''
          this.icon = new URL(json.icon, this.backUrl).toString()
        })
    },

    pregen(id=null) {
      if (!id)
        this.reach('pregen')
      this.state = 'wait1'
      const p = id
        ? fetch(`${this.backUrl}/api/app/${id}`, {method: 'GET'})
        : fetch(`${this.backUrl}/api/scrape`, {method: 'POST', body: this.site})

      p.then(t => t.json())
        .then(json => {
          this.site = json.url
          this.error = json.error
          this.appPk = json.id
          this.appName = json.name
          this.icon = new URL(json.icon, this.backUrl).toString()
          document.activeElement.blur()
        })
        .then(() => this.state = 'pregen')
        .catch(() => {
          this.error = 'There is no such site!'
          this.state = 'start'
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
    flex 1

.preview
  margin 0 auto

.slide-fade-enter-active
.slide-fade-leave-active
  transition all .5s ease-out

.slide-fade-enter
.slide-fade-leave-to
  max-height 0
  opacity 0
  margin-top 0

.slide-fade-enter-to
.slide-fade-leave
  opacity 1

  &.button
    max-height 45px

  &.edit
    max-height 215px

  &.app
    max-height 70px

  &.button
    margin-top 20px
    &.prime
      margin-top 40px

.button:not(.slide-fade-enter-active):not(.slide-fade-leave-active)
  margin-top 20px
  &.prime
    margin-top 40px
</style>
