<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="item in routes"
      :key="item.path"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

const router = useRouter()
console.log(router.currentRoute.value.matched)
const routes = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)
})

</script>

<style lang="scss" scoped></style>
