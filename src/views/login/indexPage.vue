<template>
  <h1>登录</h1>
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import { onMounted, ref } from 'vue'
import type { ILoginInfo } from '@/api/types/common'
const list = ref<ILoginInfo['slide']>()

onMounted(() => {
  getLoginInfo().then(res => {
    list.value = res.slide
  })
})

</script>
<style lang="scss" scoped>

</style>
