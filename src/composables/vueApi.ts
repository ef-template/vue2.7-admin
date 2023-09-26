export { useRoute, useRouter } from "vue-router/composables";

/**
 * 以下获取Route方案有问题
 */
// /**
//  * 获取Route
//  * @returns
//  */
// export function useRoute() {
//   const { proxy } = getCurrentInstance()!
//   const route = proxy.$route
//   return route
// }

// /**
//  * 获取Router
//  * @returns
//  */
// export function useRouter() {
//   const { proxy } = getCurrentInstance()!
//   const router = proxy.$router
//   return router
// }
