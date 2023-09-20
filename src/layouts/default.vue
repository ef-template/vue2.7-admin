<script setup lang="ts">
import Header from "./components/header.vue"
import Sidebar from "./components/sidebar.vue"
</script>

<template>
  <el-container direction="vertical" style="height: 100%; border: 1px solid #eee">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <Sidebar></Sidebar>
      </el-aside>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>


<!-- <style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style> -->
