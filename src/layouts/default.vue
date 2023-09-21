<script setup lang="ts">
import Header from "./components/header.vue"
import Sidebar from "./components/sidebar.vue"
</script>

<template>
  <div class="w-100% h-100%" flex flex-col>
    <div class="w-100% h-50px border-#eee" overflow-hidden border-b flex-shrink-0>
      <Header></Header>
    </div>
    <div min-h-0 flex-auto flex>
      <div class="w-200px h-100% border-#eee" border-r overflow-y-auto overflow-x-hidden flex-shrink-0>
        <Sidebar></Sidebar>
      </div>
      <div class="h-100%" flex-auto min-w-0 overflow-y-auto overflow-x-hidden p-10px>
        <router-view />
      </div>
    </div>
  </div>

  <!-- element bug 有点多 -->
  <!-- <el-container direction="vertical" style="height: 100%; border: 1px solid #eee">
    <el-header height="50px" style="border-bottom: 1px solid #eee;">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <Sidebar></Sidebar>
      </el-aside>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container> -->
</template>

