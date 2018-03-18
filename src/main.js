import Vue from 'vue'
import App from './App.vue'
import VueSimpleSVG from 'vue-simple-svg'

Vue.config.productionTip = false

Vue.use(VueSimpleSVG)

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

Vue.mixin({
  data() {
    return {
      mobile: isMobile(),
    }
  },
  mounted() {
    window.addEventListener('resize', () => this.mobile = isMobile())
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')

