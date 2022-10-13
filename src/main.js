// Vue 3
// createApp(App).use(router).mount('#app')
// import { createApp } from 'vue'




// vue 2
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
