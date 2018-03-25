import Vue from 'vue'
import MainBlock from './components/MainBlock'
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

let app = new Vue({
  render: function(h) {
    return h(MainBlock, {
      props: {
        backUrl: 'https://app4site.herokuapp.com'
        //backUrl: 'http://localhost:8000'
      }
    })
  }
})

if (process.env.NODE_ENV !== 'production')
  window.MainBlock = app

export default app