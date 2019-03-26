import Vue from 'vue'
import App from './App.vue'
import moUI from './../packages/index.js'
import "./assets/normalize.css"



Vue.use(moUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
