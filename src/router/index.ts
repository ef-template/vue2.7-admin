import Vue from "vue";
import VueRouter from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import NProgress from "./nprogress-config";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

Vue.use(VueRouter);

const routes = setupLayouts(generatedRoutes);

/**
 * 设置默认路由
 */
routes.unshift({
  path: "/",
  redirect: "/test/button",
});


const router = new VueRouter({
  mode: "history",
  base: qiankunWindow.__POWERED_BY_QIANKUN__ ? "/myMicroAppName" : "/",
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
  NProgress.done();
});

router.afterEach(() => {
  NProgress.done();
});


export default router;
