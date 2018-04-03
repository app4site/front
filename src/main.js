import Vue from 'vue'
import MainBlock from './components/MainBlock'

Vue.config.productionTip = false


function detectMobile() {
  return typeof window.isMobile === 'undefined'
    ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    : window.isMobile
}

Vue.mixin({
  data() {
    return {
      mobile: detectMobile(),
    }
  },
  mounted() {
    window.addEventListener('resize', () => this.mobile = detectMobile())
  }
})

let app = new Vue({
  render: function(h) {
    return h(MainBlock, {
      props: {
        backUrl: 'https://api.app4.site'
        //backUrl: 'http://localhost:8000'
      }
    })
  }
})

if (process.env.NODE_ENV !== 'production')
  window.MainBlock = app

export default app