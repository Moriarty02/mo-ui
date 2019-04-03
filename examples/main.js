import Vue from 'vue'
import App from './App.vue'
// import moUI from "../lib/moui.common.js"
import moUI from "../src"
import "./assets/normalize.css"


Vue.use(moUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
