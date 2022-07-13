<template>
  <el-icon @click="toggleFullScreen">
    <FullScreen />
  </el-icon>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'

const store = useStore()

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
    store.commit('setIsFullScreen', true)
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
      store.commit('setIsFullScreen', false)
    }
  }
}
</script>
