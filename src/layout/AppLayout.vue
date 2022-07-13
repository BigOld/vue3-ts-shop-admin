<template>
  <el-container>
    <el-aside>
      <AppMenu />
    </el-aside>

    <el-container>
      <el-header>
        <AppHeader />
      </el-header>

      <el-main>
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppMenu from './AppMenu/index.vue'
import AppHeader from './AppHeader/index.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}

.el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    color: var(--el-text-color-primary);
}

.el-aside {
    width: auto;
    background-color: #304156;
    color: var(--el-text-color-primary);
}

.el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
}
</style>
