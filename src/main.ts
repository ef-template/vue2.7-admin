import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import "@unocss/reset/tailwind.css";
import "@/styles/css-property.css";
import "@/styles/main.css";
import "@emmafgy/element-theme-css";
import "@/styles/element-ui-reset.css";
import "uno.css";
import pinia from "@/store";
import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/dist/helper";

Vue.config.productionTip = false;

let instance = null;

function render(_props = {}) {
  instance = new Vue({
    pinia,
    router,
    render: (h) => h(App),
  }).$mount("#app");
}

renderWithQiankun({
  mount(props) {
    console.log("mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(_props) {
    instance!.$destroy();
    instance!.$el.innerHTML = "";
    instance = null;
  },
  update(_props) {},
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

// // 独立运行时
// if (!window.__POWERED_BY_QIANKUN__)
//   render();

// //渲染之前
// export async function bootstrap() {
//   // console.log('[vue] vue app bootstraped')
// }
// //渲染
// export async function mount(props: any) {
//   // console.log('[vue] props from main framework', props)
//   render(props);
// }

// //卸载函数
// export async function unmount() {
//   instance.$destroy();
//   instance.$el.innerHTML = "";
//   instance = null;
//   // routers = null;
// }
// // new Vue({
// //   pinia,
// //   router,
// //   render: h => h(App),
// // }).$mount('#app')
