import Vue from "vue";
import VueRouter from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import NProgress from "./nprogress-config";

Vue.use(VueRouter);

const routes = setupLayouts(generatedRoutes);

const router = new VueRouter({
    mode: "history",
    base: window.__POWERED_BY_QIANKUN__ ? "/vueAdmin/" : "/",
    routes,
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
