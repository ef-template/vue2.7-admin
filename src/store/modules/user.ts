// import { ref } from "vue"
import store from "@/store"
import { defineStore } from "pinia"


export const useUserStore = defineStore("user", () => {

  // TODO vue 2.7 组合式API在TS中的用法
  const username = ref<string>("")

  /** 获取用户详情 */
  // const getInfo = async () => {
  //   const { data } = await getUserInfoApi()
  //   username.value = data.username
  // }

  /**
   * test
   */
  const setUsername = (username: string) => {
    username.value = username;
  }


  return { username, setUsername }
})

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store)
}
