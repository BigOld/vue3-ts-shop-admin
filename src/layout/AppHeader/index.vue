<template>
  <el-space size="large">
    <ToggleSidebar />
    <Breadcrumb />
  </el-space>
  <el-space size="large">
    <MenuSearch />
    <FullScreen />
    <Notification />
    <UserInfo />
  </el-space>
</template>

<script lang="ts" setup>
import ToggleSidebar from './ToggleSidebar.vue'
import Breadcrumb from './Breadcrumb.vue'
import FullScreen from './FullScreen.vue'
import UserInfo from './UserInfo.vue'

</script>

<style lang="scss" scoped>
i {
    font-size: 19px;
    cursor: pointer;
}
</style>
