import Vue from 'vue'
import App from './App.vue'
import less from 'less'

// import Swiper from 'swiper'
import 'reset-css'
import 'swiper/css/swiper.min.css'
import router from './router'
Vue.config.productionTip = false

Vue.use(less)
Vue.use(router)
// Vue.use(Swiper)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
