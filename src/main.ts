import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@unocss/reset/tailwind.css'
import '@/styles/main.css'
import '@/styles/element-ui/theme/index.css'
import '@/styles/element-ui-reset.css'
import 'uno.css'
import pinia from "@/store";

Vue.config.productionTip = false

new Vue({
  pinia,
  router,
  render: h => h(App),
}).$mount('#app')
