import Vue from 'vue'
import Toast from './src/main'
import CreateAPI from 'create-api'

Toast.install = function (Vue) {
  Vue.component(Toast.name, Toast)
}
Vue.use(CreateAPI)
Vue.createAPI(Toast, true, true, false)

export default Toast