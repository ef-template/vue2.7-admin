<script setup lang="ts">
import { useRoute } from "@/composables/vueApi"
import { type Ref } from "vue"
import { type Route } from "vue-router"

const route: Route = useRoute()

const activeMenu: Ref<string> = ref<string>("")

const selectedMenu = () => {
  activeMenu.value = route.path
}

watch(
  () => route.path,
  (path) => {
    selectedMenu()
  }
  // {
  //   immediate: true
  // }
)

onMounted(() => {
  selectedMenu()
})
</script>

<template>
  <el-menu :default-openeds="['1', '2']" :router="true" :default-active="activeMenu">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>基本组件</template>
      <el-menu-item index="/test/button">Button</el-menu-item>
      <el-menu-item index="/test/icon">Icon</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-message"></i>表单组件</template>
      <el-menu-item index="/test/form">Form</el-menu-item>
      <el-menu-item index="/test/table">Table</el-menu-item>
    </el-submenu>
  </el-menu>
</template>


