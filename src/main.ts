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


// let routers = null;
let instance = null;

function render(props = {}) {
  // const { container } = props;
 //  routers = new Router({
 //    base: window.__POWERED_BY_QIANKUN__ ? '/qiankunapp1/' : '/',
 //    mode: 'history',
	// router,
 //  });

  instance = new Vue({
    pinia,
    router,
    render: (h) => h(App),
  }).$mount('#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

//渲染之前
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
//渲染
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

//卸载函数
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  // routers = null;
}
// new Vue({
//   pinia,
//   router,
//   render: h => h(App),
// }).$mount('#app')
